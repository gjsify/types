// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Camel-1.2
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
enum Error {
    /**
     * a generic (fallback) error code
     */
    ERROR_GENERIC,
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
enum FolderError {
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
enum ServiceError {
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
enum StoreError {
    /**
     * an invalid store operation had been requested
     */
    INVALID,
    /**
     * requested operation cannot be performed with the given folder
     */
    NO_FOLDER,
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
    TODO_8BIT,
}
enum BestencEncoding {
    TODO_7BIT,
    TODO_8BIT,
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
}
/**
 * Open mode for folder.
 * @bitfield 
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
const AI_CANONNAME: number
const AI_NUMERICHOST: number
const BLOCK_SIZE: number
const BLOCK_SIZE_BITS: number
/**
 * Name of the photo-filename property which can be stored
 * on a #CamelCipherCertInfo.
 */
const CIPHER_CERT_INFO_PROPERTY_PHOTO_FILENAME: string
/**
 * A string containing a list of email addresses of all signers
 * including their alternative emails. Use camel_address_unformat()
 * to break them back into separate addresses. This can be set
 * only on the first signer of the first validity, even the addresses
 * can belong to a different signer.
 */
const CIPHER_CERT_INFO_PROPERTY_SIGNERS_ALT_EMAILS: string
const DB_FILE: string
const DB_FREE_CACHE_SIZE: number
const DB_IN_MEMORY_DB: string
const DB_IN_MEMORY_TABLE: string
const DB_IN_MEMORY_TABLE_LIMIT: number
const DB_SLEEP_INTERVAL: number
const DEBUG_IMAP: string
const DEBUG_IMAP_FOLDER: string
const DOT_LOCK_REFRESH: number
const EAI_ADDRFAMILY: number
const EAI_AGAIN: number
const EAI_BADFLAGS: number
const EAI_FAIL: number
const EAI_FAMILY: number
const EAI_MEMORY: number
const EAI_NODATA: number
const EAI_NONAME: number
const EAI_OVERFLOW: number
const EAI_SERVICE: number
const EAI_SOCKTYPE: number
const EAI_SYSTEM: number
/**
 * This environment variable configures where the camel
 * provider modules are loaded from.
 */
const EDS_CAMEL_PROVIDER_DIR: string
/**
 * The folder type bitshift value.
 */
const FOLDER_TYPE_BIT: number
/**
 * The folder type mask value.
 */
const FOLDER_TYPE_MASK: number
const FOLD_MAX_SIZE: number
const FOLD_SIZE: number
const INDEX_DELETED: number
const KEY_TABLE_MAX_KEY: number
const LOCK_DELAY: number
const LOCK_DOT_DELAY: number
const LOCK_DOT_RETRY: number
const LOCK_DOT_STALE: number
const LOCK_RETRY: number
const MESSAGE_DATE_CURRENT: number
const MESSAGE_SYSTEM_MASK: number
const MIME_YDECODE_STATE_BEGIN: number
const MIME_YDECODE_STATE_DECODE: number
const MIME_YDECODE_STATE_END: number
const MIME_YDECODE_STATE_EOLN: number
const MIME_YDECODE_STATE_ESCAPE: number
const MIME_YDECODE_STATE_INIT: number
const MIME_YDECODE_STATE_PART: number
const MIME_YENCODE_CRC_INIT: number
const MIME_YENCODE_STATE_INIT: number
const NI_DGRAM: number
const NI_NAMEREQD: number
const NI_NOFQDN: number
const NI_NUMERICHOST: number
const NI_NUMERICSERV: number
const O_BINARY: number
const RECIPIENT_TYPE_BCC: string
const RECIPIENT_TYPE_CC: string
const RECIPIENT_TYPE_RESENT_BCC: string
const RECIPIENT_TYPE_RESENT_CC: string
const RECIPIENT_TYPE_RESENT_TO: string
const RECIPIENT_TYPE_TO: string
/**
 * Can be used with camel_session_addressbook_contains_sync() as the book UID,
 * meaning to check in all configured address books.
 */
const SESSION_BOOK_UID_ANY: string
/**
 * Can be used with camel_session_addressbook_contains_sync() as the book UID,
 * meaning to check in all address books enabled for auto-completion.
 */
const SESSION_BOOK_UID_COMPLETION: string
/**
 * The folder store info type bitshift value.
 */
const STORE_INFO_FOLDER_TYPE_BIT: number
/**
 * The folder store info type mask value.
 */
const STORE_INFO_FOLDER_TYPE_MASK: number
const STORE_INFO_FOLDER_UNKNOWN: number
const STORE_SETUP_ARCHIVE_FOLDER: string
const STORE_SETUP_DRAFTS_FOLDER: string
const STORE_SETUP_SENT_FOLDER: string
const STORE_SETUP_TEMPLATES_FOLDER: string
const UNMATCHED_NAME: string
const URL_HIDE_ALL: number
const URL_PART_AUTH: number
const URL_PART_HIDDEN: number
const URL_PART_HOST: number
const URL_PART_NEED: number
const URL_PART_PASSWORD: number
const URL_PART_PATH: number
const URL_PART_PATH_DIR: number
const URL_PART_PORT: number
const URL_PART_USER: number
const UTILS_MAX_USER_HEADERS: number
const UUDECODE_STATE_MASK: number
const VJUNK_NAME: string
const VTRASH_NAME: string
/**
 * Thread safe variant of g_object_bind_property(). See its documentation
 * for more information on arguments and return value.
 * @param source the source #GObject
 * @param source_property the property on `source` to bind
 * @param target the target #GObject
 * @param target_property the property on `target` to bind
 * @param flags flags to pass to #GBinding
 */
function binding_bind_property(source: GObject.Object, source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
/**
 * Thread safe variant of g_object_bind_property_with_closures(). See its
 * documentation for more information on arguments and return value.
 * @param source the source #GObject
 * @param source_property the property on `source` to bind
 * @param target the target #GObject
 * @param target_property the property on `target` to bind
 * @param flags flags to pass to #GBinding
 * @param transform_to a #GClosure wrapping the transformation function   from the `source` to the `target,` or %NULL to use the default
 * @param transform_from a #GClosure wrapping the transformation function   from the `target` to the `source,` or %NULL to use the default
 */
function binding_bind_property_full(source: GObject.Object, source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
/**
 * Finds the minimum charset for this string NULL means US-ASCII.
 * @param in_ input text
 */
function charset_best(in_: number[]): string | null
function charset_iso_to_windows(isocharset: string): string
function cipher_can_load_photos(): boolean
/**
 * Writes a part to a stream in a canonicalised format, suitable for signing/encrypting.
 * 
 * The transfer encoding paramaters for the part may be changed by this function.
 * @param part Part to write.
 * @param flags flags for the canonicalisation filter (CamelMimeFilterCanon)
 * @param ostream stream to write canonicalised output to.
 * @param cancellable optional #GCancellable object, or %NULL
 */
function cipher_canonical_to_stream(part: MimePart, flags: number, ostream: Stream, cancellable: Gio.Cancellable | null): number
/**
 * Gets a named property `name` value for the given `cert_info`.
 * @param cert_info a #CamelCipherCertInfo
 * @param name a property name
 */
function cipher_certinfo_get_property(cert_info: CipherCertInfo, name: string): object | null
/**
 * Sets a named property `name` value `value` for the given `cert_info`.
 * If the `value` is %NULL, then the property is removed. With a non-%NULL
 * `value` also `value_free` and `value_clone` functions cannot be %NULL.
 * @param cert_info a #CamelCipherCertInfo
 * @param name a property name
 * @param value a property value, or %NULL
 * @param value_clone a clone function for the `value`
 */
function cipher_certinfo_set_property(cert_info: CipherCertInfo, name: string, value: object | null, value_clone: CipherCloneFunc | null): void
function content_disposition_decode(in_: string): ContentDisposition
function content_transfer_encoding_decode(in_: string): string
function content_type_decode(in_: string): ContentType
/**
 * Check to see if a debug mode is activated.  `mode` takes one of two forms,
 * a fully qualified 'module:target', or a wildcard 'module' name.  It
 * returns a boolean to indicate if the module or module and target is
 * currently activated for debug output.
 * @param mode string name of the mode to check for
 */
function debug(mode: string): boolean
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
function debug_demangle_backtrace(bt: GLib.String | null): /* bt */ GLib.String | null
/**
 * Call this when you're done with your debug output.  If and only if
 * you called camel_debug_start, and if it returns TRUE.
 */
function debug_end(): void
/**
 * Gets current backtrace leading to this function call and demangles it.
 */
function debug_get_backtrace(): GLib.String | null
/**
 * Gets current raw backtrace leading to this function call.
 * This is quicker than camel_debug_get_backtrace(), because it
 * doesn't demangle the backtrace. To demangle it (replace addresses
 * with actual function calls and eventually line numbers, if
 * available) call camel_debug_demangle_backtrace().
 */
function debug_get_raw_backtrace(): GLib.String | null
/**
 * Init camel debug.
 * 
 * CAMEL_DEBUG is set to a comma separated list of modules to debug.
 * The modules can contain module-specific specifiers after a ':', or
 * just act as a wildcard for the module or even specifier.  e.g. 'imap'
 * for imap debug, or 'imap:folder' for imap folder debug.  Additionaly,
 * ':folder' can be used for a wildcard for any folder operations.
 */
function debug_init(): void
/**
 * Prints current backtraces stored with camel_debug_ref_unref_push_backtrace()
 * or with camel_debug_ref_unref_push_backtrace_for_object().
 * 
 * It's usually not needed to use this function, as the left backtraces, if any,
 * are printed at the end of the application.
 */
function debug_ref_unref_dump_backtraces(): void
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
function debug_ref_unref_push_backtrace(backtrace: GLib.String, object_ref_count: number): void
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
function debug_ref_unref_push_backtrace_for_object(_object: object | null): void
/**
 * Start debug output for a given mode, used to make sure debug output
 * is output atomically and not interspersed with unrelated stuff.
 * @param mode string name of the mode to start the debug for
 */
function debug_start(mode: string): boolean
/**
 * Convert `in` from text/plain into text/enriched or text/richtext
 * based on `flags`.
 * @param in_ input textual string
 * @param flags flags specifying filter behaviour
 */
function enriched_to_html(in_: string, flags: MimeFilterEnrichedFlags): string
function error_quark(): GLib.Quark
/**
 * Retrieve a gint32.
 * @param in_ file to read from
 * @param dest pointer to a variable to store the value in
 */
function file_util_decode_fixed_int32(in_: object | null, dest: number): number
/**
 * Decode a normal string from the input file.
 * @param in_ file to read from
 * @param str pointer to a variable to store the value in
 * @param len total-len to decode.
 */
function file_util_decode_fixed_string(in_: object | null, str: string, len: number): number
/**
 * Decode an gsize type.
 * @param in_ file to read from
 * @param dest pointer to a variable to put the value in
 */
function file_util_decode_gsize(in_: object | null, dest: number): number
/**
 * Decode an off_t type.
 * @param in_ file to read from
 * @param dest pointer to a variable to put the value in
 */
function file_util_decode_off_t(in_: object | null, dest: number): number
/**
 * Decode a normal string from the input file.
 * @param in_ file to read from
 * @param str pointer to a variable to store the value in
 */
function file_util_decode_string(in_: object | null, str: string): number
/**
 * Decode a time_t value.
 * @param in_ file to read from
 * @param dest pointer to a variable to store the value in
 */
function file_util_decode_time_t(in_: object | null, dest: number): number
/**
 * Retrieve an encoded uint32 from a file.
 * @param in_ file to read from
 * @param dest pointer to a variable to store the value in
 */
function file_util_decode_uint32(in_: object | null, dest: number): number
/**
 * Encode a gint32, performing no compression, but converting
 * to network order.
 * @param out file to output to
 * @param value value to output
 */
function file_util_encode_fixed_int32(out: object | null, value: number): number
/**
 * Encode a normal string and save it in the output file.
 * Unlike `camel_file_util_encode_string,` it pads the
 * `str` with "NULL" bytes, if `len` is > strlen(str)
 * @param out file to output to
 * @param str value to output
 * @param len total-len of str to store
 */
function file_util_encode_fixed_string(out: object | null, str: string, len: number): number
/**
 * Encode an gsize type.
 * @param out file to output to
 * @param value value to output
 */
function file_util_encode_gsize(out: object | null, value: number): number
/**
 * Encode an off_t type.
 * @param out file to output to
 * @param value value to output
 */
function file_util_encode_off_t(out: object | null, value: number): number
/**
 * Encode a normal string and save it in the output file.
 * @param out file to output to
 * @param str value to output
 */
function file_util_encode_string(out: object | null, str: string): number
/**
 * Encode a time_t value to the file.
 * @param out file to output to
 * @param value value to output
 */
function file_util_encode_time_t(out: object | null, value: number): number
/**
 * Utility function to save an uint32 to a file.
 * @param out file to output to
 * @param value value to output
 */
function file_util_encode_uint32(out: object | null, value: number): number
/**
 * 'Flattens' `name` into a safe filename string by hex encoding any
 * chars that may cause problems on the filesystem.
 * @param name string to 'flattened' into a safe filename
 */
function file_util_safe_filename(name: string): string
/**
 * Builds a pathname where the basename is of the form ".#" + the
 * basename of `filename,` for instance used in a two-stage commit file
 * write.
 * @param filename a pathname
 */
function file_util_savename(filename: string): string
function folder_error_quark(): GLib.Quark
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
 * @param short_names %TRUE if the (short) name of a folder is the part after the last `separator` in the full name. %FALSE if it is the full name.
 */
function folder_info_build(folders: FolderInfo[], namespace_: string, separator: number, short_names: boolean): FolderInfo
/**
 * Frees a structure returned with camel_getaddrinfo(). It does
 * nothing when the `host` is %NULL.
 * @param host a host address information structure to free, or %NULL
 */
function freeaddrinfo(host: object | null): void
/**
 * Resolves a host `name` and returns an information about its address.
 * @param name an address name to resolve
 * @param service a service name to use
 * @param hints an #addrinfo hints, or %NULL
 * @param cancellable optional #GCancellable object, or %NULL
 */
function getaddrinfo(name: string, service: string, hints: object | null, cancellable: Gio.Cancellable | null): object | null
function header_address_decode(in_: string, charset: string): HeaderAddress
function header_address_fold(in_: string, headerlen: number): string
/**
 * TODO: Document me.
 * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
 * @param addr the #CamelHeaderAddress to add
 */
function header_address_list_append(addrlistp: HeaderAddress[], addr: HeaderAddress): void
/**
 * TODO: Document me.
 * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
 * @param addrs a NULL-terminated list of #CamelHeaderAddress to add
 */
function header_address_list_append_list(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void
/**
 * TODO: Document me.
 * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
 */
function header_address_list_clear(addrlistp: HeaderAddress[]): void
/**
 * TODO: Document me.
 * @param addrlist a NULL-terminated list of #CamelHeaderAddress objects
 */
function header_address_list_encode(addrlist: HeaderAddress[]): string
/**
 * TODO: Document me.
 * @param addrlist a NULL-terminated list of #CamelHeaderAddress objects
 */
function header_address_list_format(addrlist: HeaderAddress[]): string
/**
 * Extract a content-id from `in`.
 * @param in_ input string
 */
function header_contentid_decode(in_: string): string
/**
 * Decodes the rfc822 date string and saves the GMT offset into
 * `tz_offset` if non-NULL.
 * @param str input date string
 * @param tz_offset timezone offset
 */
function header_decode_date(str: string, tz_offset: number): number
/**
 * Extracts an integer token from `in` and updates the pointer to point
 * to after the end of the integer token (sort of like strtol).
 * @param in_ pointer to input string
 */
function header_decode_int(in_: string): number
/**
 * Decodes rfc2047 encoded-word tokens
 * @param in_ input header value string
 * @param default_charset default charset to use if improperly encoded
 */
function header_decode_string(in_: string, default_charset: string): string
/**
 * Encodes a 'phrase' header according to the rules in rfc2047.
 * @param in_ header to encode
 */
function header_encode_phrase(in_: number): string
/**
 * Encodes a 'text' header according to the rules of rfc2047.
 * @param in_ input string
 */
function header_encode_string(in_: number): string
function header_fold(in_: string, headerlen: number): string
/**
 * Decodes a header which contains rfc2047 encoded-word tokens that
 * may or may not be within a comment.
 * @param in_ input header value string
 * @param default_charset default charset to use if improperly encoded
 */
function header_format_ctext(in_: string, default_charset: string): string
/**
 * Allocates a string buffer containing the rfc822 formatted date
 * string represented by `time` and `tz_offset`.
 * @param date time_t date representation
 * @param tz_offset Timezone offset
 */
function header_format_date(date: number, tz_offset: number): string
function header_location_decode(in_: string): string
function header_mailbox_decode(in_: string, charset: string): HeaderAddress
function header_mime_decode(in_: string, maj: number, min: number): void
/**
 * Extract a message-id token from `in`.
 * @param in_ input string
 */
function header_msgid_decode(in_: string): string
/**
 * Either the `domain` is used, or the user's local hostname,
 * in case it's %NULL or empty.
 * @param domain domain to use (like "example.com") for the ID suffix; can be %NULL
 */
function header_msgid_generate(domain: string | null): string
function header_newsgroups_decode(in_: string): string[]
/**
 * Searches `params` for a param named `name` and gets the value.
 * @param params parameters
 * @param name name of param to find
 */
function header_param(params: object | null, name: string): string
function header_param_list_decode(in_: string | null): object | null
function header_param_list_format(params: object | null): string
function header_param_list_format_append(out: GLib.String, params: object | null): void
/**
 * Free the list of params.
 * @param params a list of params
 */
function header_param_list_free(params: object | null): void
/**
 * Generate a list of references, from most recent up.
 * @param in_ References header value
 */
function header_references_decode(in_: string): string[]
/**
 * Set a parameter in the list.
 * @param paramsp poinetr to a list of params
 * @param name name of param to set
 * @param value value to set
 */
function header_set_param(paramsp: object | null, name: string, value: string): object | null
/**
 * Gets the first token in the string according to the rules of
 * rfc0822.
 * @param in_ input string
 */
function header_token_decode(in_: string): string
function header_unfold(in_: string): string
/**
 * Searches for a mailing list information among known headers and returns
 * a newly allocated string with its value.
 * @param headers a #CamelNameValueArray with headers
 */
function headers_dup_mailing_list(headers: NameValueArray): string | null
/**
 * Converts IDN (Internationalized Domain Name) into ASCII representation.
 * If there's a failure or the `host` has only ASCII letters, then a copy
 * of `host` is returned.
 * @param host Host name, with or without non-ascii letters in utf8
 */
function host_idna_to_ascii(host: string | null): string | null
/**
 * Check whether the `hostname` requires conversion to ASCII. That can
 * be when a character in it can look like an ASCII character, even
 * it being a Unicode letter. This can be used to display host names
 * in a way of invulnerable to IDN homograph attacks.
 * @param hostname a host name
 */
function hostname_utils_requires_ascii(hostname: string): boolean
function iconv_charset_language(charset: string): string
function iconv_charset_name(charset: string): string
function iconv_locale_charset(): string
function iconv_locale_language(): string
function init(certdb_dir: string, nss_init: boolean): number
/**
 * Converts the calendar time representation `tt` to a broken-down
 * time representation, stored in `tm,` and provides the offset in
 * seconds from UTC time, stored in `offset`.
 * @param tt the #time_t to convert
 * @param tm the #tm to store the result in
 * @param offset the #gint to store the offset in
 */
function localtime_with_offset(tt: number, tm: object | null, offset: number): void
/**
 * Create an exclusive lock using .lock semantics.
 * All locks are equivalent to write locks (exclusive).
 * 
 * The function does nothing and returns success (zero),
 * when dot locking had not been compiled.
 * @param path a path to lock
 */
function lock_dot(path: string): number
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
 */
function lock_fcntl(fd: number, type: LockType): number
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
 */
function lock_flock(fd: number, type: LockType): number
/**
 * Attempt to lock a folder, multiple attempts will be made using all
 * locking strategies available.
 * @param path Path to the file to lock (used for .locking only).
 * @param fd Open file descriptor of the right type to lock.
 * @param type Type of lock, CAMEL_LOCK_READ or CAMEL_LOCK_WRITE.
 */
function lock_folder(path: string, fd: number, type: LockType): number
function lock_helper_lock(path: string): number
function lock_helper_unlock(lockid: number): number
/**
 * Like mktime(3), but assumes UTC instead of local timezone.
 * @param tm the #tm to convert to a calendar time representation
 */
function mktime_utc(tm: object | null): number
/**
 * This copies an mbox file from a shared directory with multiple
 * readers and writers into a private (presumably Camel-controlled)
 * directory. Dot locking is used on the source file (but not the
 * destination).
 * @param source source file
 * @param dest destination file
 */
function movemail(source: string, dest: string): number
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
function pointer_tracker_dump(): void
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
function pointer_tracker_track_with_info(ptr: object | null, info: string): void
/**
 * Removes pointer from the pointer tracker. It's an error to try
 * to remove pointer which was not added to the tracker by
 * camel_pointer_tracker_track() or camel_pointer_tracker_track_with_info(),
 * or a pointer which was already removed.
 * @param ptr pointer to remove from the tracker
 */
function pointer_tracker_untrack(ptr: object | null): void
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
function provider_get(protocol: string): Provider
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
function provider_init(): void
/**
 * This returns a list of available providers. If `load` is %TRUE, it will
 * first load in all available providers that haven't yet been loaded.
 * 
 * Free the returned list with g_list_free().  The #CamelProvider structs
 * in the list are owned by Camel and should not be modified or freed.
 * @param load whether or not to load in providers that are not already loaded
 */
function provider_list(load: boolean): Provider[]
/**
 * Loads the provider at `path,` and calls its initialization function,
 * passing `session` as an argument. The provider should then register
 * itself with `session`.
 * @param path the path to a shared library
 */
function provider_load(path: string): boolean
function provider_module_init(): void
/**
 * Add `string` to the pool.
 * 
 * The %NULL and empty strings are special cased to constant values.
 * 
 * Unreference the returned string with camel_pstring_free().
 * @param string string to add to the string pool
 * @param own whether the string pool will own the memory pointed to by       `string,` if `string` is not yet in the pool
 */
function pstring_add(string: string | null, own: boolean): string | null
/**
 * Returns whether the `string` exists in the string pool.
 * 
 * The %NULL and empty strings are special cased to constant values.
 * @param string string to look up in the string pool
 */
function pstring_contains(string: string | null): boolean
/**
 * Dumps to stdout memory statistic about the string pool.
 */
function pstring_dump_stat(): void
/**
 * Unreferences a pooled string.  If the string's reference count drops to
 * zero it will be deallocated.  %NULL and the empty string are special cased.
 * @param string string to free
 */
function pstring_free(string: string | null): void
/**
 * Returns the canonicalized copy of `string` without increasing its
 * reference count in the string pool.  If necessary, `string` is first
 * added to the string pool.
 * 
 * The %NULL and empty strings are special cased to constant values.
 * @param string string to fetch from the string pool
 */
function pstring_peek(string: string | null): string | null
/**
 * Create a new pooled string entry for `strings`.  A pooled string
 * is a table where common strings are canonicalized.  They are also
 * reference counted and freed when no longer referenced.
 * 
 * The %NULL and empty strings are special cased to constant values.
 * 
 * Unreference the returned string with camel_pstring_free().
 * @param string string to copy
 */
function pstring_strdup(string: string | null): string | null
/**
 * Decodes a block of quoted-printable encoded data. Performs a
 * 'decode step' on a chunk of QP encoded data.
 * @param in_ input stream
 * @param out output stream
 * @param saveme leftover bits that have not yet been decoded
 */
function quoted_decode_step(in_: Uint8Array, out: Uint8Array, saveme: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* saveme */ number[] ]
/**
 * Quoted-printable encodes a block of text. Call this when finished
 * encoding data with camel_quoted_encode_step() to flush off
 * the last little bit.
 * @param in_ input stream
 * @param out output string
 * @param save leftover bits that have not yet been encoded
 */
function quoted_encode_close(in_: Uint8Array, out: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* save */ number[] ]
/**
 * Quoted-printable encodes a block of text. Performs an 'encode
 * step', saves left-over state in state and save (initialise to -1 on
 * first invocation).
 * @param in_ input stream
 * @param out output string
 * @param save leftover bits that have not yet been encoded
 */
function quoted_encode_step(in_: Uint8Array, out: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* save */ number[] ]
/**
 * Cancellable libc read() replacement.
 * 
 * Code that intends to be portable to Win32 should call this function
 * only on file descriptors returned from open(), not on sockets.
 * @param fd file descriptor
 * @param buf buffer to fill
 * @param n number of bytes to read into `buf`
 * @param cancellable optional #GCancellable object, or %NULL
 */
function read(fd: number, buf: string, n: number, cancellable: Gio.Cancellable | null): number
function search_camel_header_soundex(header: string, match: string): boolean
function search_get_all_headers_decoded(message: MimeMessage): string
function search_get_default_charset_from_headers(headers: NameValueArray): string
function search_get_default_charset_from_message(message: MimeMessage): string
/**
 * Decodes `header_value,` if needed, either from an address header
 * or the Subject header. Other `header_name` headers are returned
 * as is.
 * @param header_name the header name
 * @param header_value the header value
 * @param default_charset the default charset to use for the decode, or %NULL
 */
function search_get_header_decoded(header_name: string, header_value: string, default_charset: string | null): string
function search_get_headers_decoded(headers: NameValueArray, default_charset: string | null): string
function search_header_is_address(header_name: string): boolean
function search_header_match(value: string, match: string, how: _search_match_t, type: _search_t, default_charset: string): boolean
function search_words_free(words: object | null): void
function search_words_simple(words: object | null): object | null
function search_words_split(in_: number): object | null
function service_error_quark(): GLib.Quark
function shutdown(): void
function store_error_quark(): GLib.Quark
/**
 * Returns the last segment of the path string from `info`.
 * @param summary a #CamelStoreSummary
 * @param info a #CamelStoreInfo
 */
function store_info_name(summary: StoreSummary, info: StoreInfo): string
/**
 * Returns the path string from `info`.
 * @param summary a #CamelStoreSummary
 * @param info a #CamelStoreInfo
 */
function store_info_path(summary: StoreSummary, info: StoreInfo): string
/**
 * Set a specific string on the `info`.
 * @param summary a #CamelStoreSummary object
 * @param info a #CamelStoreInfo
 * @param type specific string being set
 * @param value string value to set
 */
function store_info_set_string(summary: StoreSummary, info: StoreInfo, type: number, value: string): void
function strcase_equal(a: object | null, b: object | null): number
function strcase_hash(v: object | null): number
function strdown(str: string): string
function string_is_all_ascii(str: string | null): boolean
function strstrcase(haystack: string, needle: string): string
function system_flag(name: string): MessageFlags
/**
 * Find the state of the flag `name` in `flags`.
 * @param flags bitwise system flags
 * @param name name of the flag to check for
 */
function system_flag_get(flags: MessageFlags, name: string): boolean
/**
 * Convert `in` from plain text into HTML.
 * @param in_ input text
 * @param flags bitwise flags defining the html conversion behaviour
 * @param color color to use when syntax highlighting
 */
function text_to_html(in_: string, flags: MimeFilterToHTMLFlags, color: number): string
/**
 * Applies the given time `value` in unit `unit` to the `src_time`.
 * Use negative value to subtract it. The time part is rounded
 * to the beginning of the day.
 * @param src_time a time_t to apply the value to, or -1 to use the current time
 * @param unit a #CamelTimeUnit
 * @param value a value to apply
 */
function time_value_apply(src_time: number, unit: TimeUnit, value: number): number
function transfer_encoding_from_string(string: string): TransferEncoding
function transfer_encoding_to_string(encoding: TransferEncoding): string
/**
 * Convert a ucs2 string into a UTF-8 one. The ucs2 string is treated
 * as network byte ordered, and terminated with a 16-bit %NULL.
 * @param ptr a ucs2 string to convert
 */
function ucs2_utf8(ptr: string): string
/**
 * Frees the array of UIDs.
 * @param uids an array returned from camel_uid_cache_get_new_uids()
 */
function uid_cache_free_uids(uids: string[]): void
/**
 * Attempt to unlock a .lock lock.
 * 
 * The function does nothing, when dot locking had not been compiled.
 * @param path a path to unlock
 */
function unlock_dot(path: string): void
/**
 * Unlock an fcntl lock.
 * 
 * The function does nothing, when fcntl locking had not been compiled.
 * @param fd a file descriptor
 */
function unlock_fcntl(fd: number): void
/**
 * Unlock an flock lock.
 * 
 * The function does nothing, when flock locking had not been compiled.
 * @param fd a file descriptor
 */
function unlock_flock(fd: number): void
/**
 * Free a lock on a folder.
 * @param path Filename of folder.
 * @param fd Open descrptor on which locks were placed.
 */
function unlock_folder(path: string, fd: number): void
function url_addrspec_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function url_addrspec_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
/**
 * &percnt;-decodes the passed-in URL *in place*. The decoded version is
 * never longer than the encoded version, so there does not need to
 * be any additional space at the end of the string.
 * @param part a URL part
 */
function url_decode(part: string): void
function url_decode_path(path: string): string
/**
 * This &percnt;-encodes the given URL part and returns the escaped version
 * in allocated memory, which the caller must free when it is done.
 * @param part a URL part
 * @param escape_extra additional characters beyond " \"%#<>{}|\^[]`" to escape (or %NULL)
 */
function url_encode(part: string, escape_extra: string | null): string
function url_file_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function url_file_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function url_web_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function url_web_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function ustrstrcase(haystack: string, needle: string): string
/**
 * Convert a modified UTF-7 string to UTF-8.  If the UTF-7 string
 * contains 8 bit characters, they are treated as iso-8859-1.
 * 
 * The IMAP rules [rfc2060] are used in the UTF-7 encoding.
 * @param ptr a UTF-7 string to convert
 */
function utf7_utf8(ptr: string): string
/**
 * Get a Unicode character from a UTF-8 stream.  `ptr` will be advanced
 * to the next character position.  Invalid utf8 characters will be
 * silently skipped. The `ptr` should point to a NUL terminated array.
 * @param ptr a pointer to read the character from
 */
function utf8_getc(ptr: number): [ /* returnType */ number, /* ptr */ number ]
/**
 * Get the next UTF-8 gchar at `ptr,` and return it, advancing `ptr` to
 * the next character. If `end` is reached before a full UTF-8
 * character can be read, then the invalid Unicode gchar 0xffff is
 * returned as a sentinel (Unicode 3.1, section 2.7), and `ptr` is not
 * advanced.
 * @param ptr a pointer to read the character from
 * @param end upper limit for the read, must not be %NULL
 */
function utf8_getc_limit(ptr: number, end: number): [ /* returnType */ number, /* ptr */ number ]
/**
 * Ensures the returned text will be valid UTF-8 string, with incorrect letters
 * changed to question marks.
 * @param text a text to make valid
 */
function utf8_make_valid(text: string): string
/**
 * Ensures the returned text will be valid UTF-8 string, with incorrect letters
 * changed to question marks.
 * @param text a text to make valid
 * @param text_len length of the `text,` or -1 if NUL-terminated
 */
function utf8_make_valid_len(text: string, text_len: number): string
/**
 * Output a 32 bit unicode character as UTF-8 octets.  At most 4 octets will
 * be written to `ptr`. The `ptr` will be advanced to the next character position.
 * @param ptr pointer to write the character to
 * @param c a Unicode character to write
 */
function utf8_putc(ptr: number, c: number): /* ptr */ number
/**
 * Convert a UTF-8 string into a ucs2 one. The ucs string will be in
 * network byte order, and terminated with a 16-bit %NULL.
 * @param ptr a UTF-8 string to convert
 */
function utf8_ucs2(ptr: string): string
/**
 * Convert a UTF-8 string to a modified UTF-7 format.
 * 
 * The IMAP rules [rfc2060] are used in the UTF-7 encoding.
 * @param ptr a UTF-8 string to convert
 */
function utf8_utf7(ptr: string): string
/**
 * Reads a numeric data from the `bdata_ptr` and moves the `bdata_ptr`
 * after that number. If the number cannot be read, then the `default_value`
 * is returned instead and the `bdata_ptr` is left unchanged. The number
 * might be previously stored with the camel_util_bdata_put_number().
 * @param bdata_ptr a backend specific data (bdata) pointer
 * @param default_value a value to return, when no data can be read
 */
function util_bdata_get_number(bdata_ptr: string, default_value: number): number
/**
 * Reads a string data from the `bdata_ptr` and moves the `bdata_ptr`
 * after that string. If the string cannot be read, then the `default_value`
 * is returned instead and the `bdata_ptr` is left unchanged. The string
 * might be previously stored with the camel_util_bdata_put_string().
 * @param bdata_ptr a backend specific data (bdata) pointer
 * @param default_value a value to return, when no data can be read
 */
function util_bdata_get_string(bdata_ptr: string, default_value: string): string
/**
 * Puts the number `value` at the end of the `bdata_str`. In case the `bdata_str`
 * is not empty a space is added before the numeric `value`. The stored value
 * can be read back with the camel_util_bdata_get_number().
 * @param bdata_str a #GString to store a backend specific data (bdata)
 * @param value a value to store
 */
function util_bdata_put_number(bdata_str: GLib.String, value: number): void
/**
 * Puts the string `value` at the end of the `bdata_str`. In case the `bdata_str`
 * is not empty a space is added before the string `value`. The stored value
 * can be read back with the camel_util_bdata_get_string().
 * 
 * The strings are encoded as "length-value", quotes for clarity only.
 * @param bdata_str a #GString to store a backend specific data (bdata)
 * @param value a value to store
 */
function util_bdata_put_string(bdata_str: GLib.String, value: string): void
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
function util_decode_user_header_setting(setting_value: string): [ /* out_display_name */ string | null, /* out_header_name */ string ]
/**
 * Encode the optional `display_name` and the `header_name` to a value suitable
 * for GSettings schema org.gnome.evolution-data-server and key camel-message-info-user-headers.
 * 
 * Free the returned string with g_free(), when no longer needed.
 * @param display_name display name for the header name, or %NULL
 * @param header_name the header name
 */
function util_encode_user_header_setting(display_name: string | null, header_name: string): string
/**
 * Fill `info` 's user-headers with the user-defined headers from
 * the `headers` array.
 * @param info a #CamelMessageInfo
 * @param headers a #CamelNameValueArray with the headers to read from
 */
function util_fill_message_info_user_headers(info: MessageInfo, headers: NameValueArray): boolean
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
 */
function util_get_directory_variants(main_path: string, replace_prefix: string, with_modules_dir: boolean): string[]
/**
 * Checks whether the domain in the `email_address` requires
 * conversion to ASCII and if it does it also converts it.
 * When the `do_format` is %TRUE, the output string is formatted
 * for display, otherwise it's encoded for use in the message
 * headers. A %NULL is returned when no conversion was needed.
 * @param email_address an email address as string
 * @param do_format what format will be returned
 */
function utils_sanitize_ascii_domain_in_address(email_address: string | null, do_format: boolean): string | null
/**
 * Checks whether the host name of the `url` requires conversion
 * to ASCII and converts it, if needed.
 * @param url a #CamelURL
 */
function utils_sanitize_ascii_domain_in_url(url: URL): boolean
/**
 * Checks whether the host name of the `url_str` requires conversion
 * to ASCII and converts it if needed. Returns %NULL, when no conversion
 * was required.
 * @param url_str a URL as string
 */
function utils_sanitize_ascii_domain_in_url_str(url_str: string | null): string | null
/**
 * Uudecodes a chunk of data. Performs a 'decode step' on a chunk of
 * uuencoded data. Assumes the "begin mode filename" line has
 * been stripped off.
 * @param in_ input stream
 * @param out output stream
 * @param save leftover bits that have not yet been decoded
 */
function uudecode_step(in_: Uint8Array, out: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* save */ number[] ]
/**
 * Uuencodes a chunk of data. Call this when finished encoding data
 * with camel_uuencode_step() to flush off the last little bit.
 * @param in_ input stream
 * @param out output stream
 * @param uubuf temporary buffer of 60 bytes
 * @param save leftover bits that have not yet been encoded
 */
function uuencode_close(in_: Uint8Array, out: Uint8Array, uubuf: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* uubuf */ Uint8Array, /* save */ number[] ]
/**
 * Uuencodes a chunk of data. Performs an 'encode step', only encodes
 * blocks of 45 characters to the output at a time, saves left-over
 * state in `uubuf,` `state` and `save` (initialize to 0 on first
 * invocation).
 * @param in_ input stream
 * @param out output stream
 * @param uubuf temporary buffer of 60 bytes
 * @param save leftover bits that have not yet been encoded
 */
function uuencode_step(in_: Uint8Array, out: Uint8Array, uubuf: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* uubuf */ Uint8Array, /* save */ number[] ]
/**
 * Cancellable libc write() replacement.
 * 
 * Code that intends to be portable to Win32 should call this function
 * only on file descriptors returned from open(), not on sockets.
 * @param fd file descriptor
 * @param buf buffer to write
 * @param n number of bytes of `buf` to write
 * @param cancellable optional #GCancellable object, or %NULL
 */
function write(fd: number, buf: string, n: number, cancellable: Gio.Cancellable | null): number
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
 */
function ydecode_step(in_: Uint8Array): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* pcrc */ number, /* crc */ number ]
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
 */
function yencode_close(in_: Uint8Array): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* pcrc */ number, /* crc */ number ]
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
 */
function yencode_step(in_: Uint8Array): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* pcrc */ number, /* crc */ number ]
interface CipherCloneFunc {
    (value: object | null): object | null
}
interface CopyFunc {
    (object: object | null): object | null
}
/**
 * A collation callback function.
 * @callback 
 * @param enc a used encoding (SQLITE_UTF8)
 * @param length1 length of the `data1`
 * @param data1 the first value, of lenth `length1`
 * @param length2 length of the `data2`
 * @param data2 the second value, of lenth `length2`
 */
interface DBCollate {
    (enc: object | null, length1: number, data1: object | null, length2: number, data2: object | null): number
}
/**
 * A callback called for the SELECT statements. The items at the same index of `colvalues`
 * and `colnames` correspond to each other.
 * @callback 
 * @param colvalues array of column values, as UTF-8 strings
 * @param colnames array of column names
 */
interface DBSelectCB {
    (colvalues: string[], colnames: string[]): number
}
/**
 * A callback called for each found file in the cache, used
 * by camel_data_cache_foreach_remove(). The `filename` corresponds
 * to the result of camel_data_cache_get_filename().
 * @callback 
 * @param cdc a #CamelDataCache
 * @param filename a file name found in the cache
 */
interface DataCacheRemoveFunc {
    (cdc: DataCache, filename: string): boolean
}
interface FilterPlaySoundFunc {
    (driver: FilterDriver, filename: string): void
}
interface FilterShellFunc {
    (driver: FilterDriver, argc: number, argv: string): void
}
interface FilterStatusFunc {
    (driver: FilterDriver, status: object | null, pc: number, desc: string): void
}
interface FilterSystemBeepFunc {
    (driver: FilterDriver): void
}
/**
 * A callback prototype for camel_vee_data_cache_foreach_message_info_data()
 * @callback 
 * @param mi_data a #CamelVeeMessageInfoData
 * @param subfolder a #CamelFolder which `mi_data` references
 */
interface ForeachInfoData {
    (mi_data: VeeMessageInfoData, subfolder: Folder): void
}
/**
 * Callback used to traverse parts of the `message` using camel_mime_message_foreach_part().
 * @callback 
 * @param message a #CamelMimeMessage
 * @param part a #CamelMimePart, for which the function is called
 * @param parent_part a #CamelMimePart, parent of the `part;` can be %NULL
 */
interface ForeachPartFunc {
    (message: MimeMessage, part: MimePart, parent_part: MimePart | null): boolean
}
interface IndexNorm {
    (index: Index, word: string): string
}
/**
 * This is the callback signature for camel_message_content_info_traverse().
 * @callback 
 * @param ci a #CamelMessageContentInfo
 * @param depth the current depth
 */
interface MessageContentInfoTraverseCallback {
    (ci: MessageContentInfo, depth: number): boolean
}
/**
 * Function used in camel_provider_auto_detect().
 * @callback 
 * @param url a #CamelURL
 */
interface ProviderAutoDetectFunc {
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
interface SessionCallback {
    (session: Session, cancellable: Gio.Cancellable | null): void
}
interface TextIndexFunc {
    (idx: TextIndex, word: string, buffer: string): void
}
interface UrlScanFunc {
    (in_: string, pos: string, inend: string, match: UrlMatch): boolean
}
interface JunkFilter_ConstructProps extends GObject.Object_ConstructProps {
}

interface JunkFilter {

    // Owm methods of Camel-1.2.Camel.JunkFilter

    /**
     * Classifies `message` as junk, not junk or inconclusive.
     * 
     * If an error occurs, the function sets `error` and returns
     * %CAMEL_JUNK_STATUS_ERROR.
     * @param message a #CamelMimeMessage
     * @param cancellable optional #GCancellable object, or %NULL
     */
    classify(message: MimeMessage, cancellable: Gio.Cancellable | null): JunkStatus
    /**
     * Instructs `junk_filter` to classify `message` as junk.  If using an
     * adaptive junk filtering algorithm, explicitly marking `message` as
     * junk will influence the classification of future messages.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param message a #CamelMimeMessage
     * @param cancellable optional #GCancellable object, or %NULL
     */
    learn_junk(message: MimeMessage, cancellable: Gio.Cancellable | null): boolean
    /**
     * Instructs `junk_filter` to classify `message` as not junk.  If using an
     * adaptive junk filtering algorithm, explicitly marking `message` as not
     * junk will influence the classification of future messages.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param message a #CamelMimeMessage
     * @param cancellable optional #GCancellable object, or %NULL
     */
    learn_not_junk(message: MimeMessage, cancellable: Gio.Cancellable | null): boolean
    /**
     * Instructs `junk_filter` to flush any in-memory caches to disk, if
     * applicable.  When filtering many messages, delaying this step until
     * all messages have been classified can improve performance.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    synchronize(cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of Camel-1.2.Camel.JunkFilter

    /**
     * Classifies `message` as junk, not junk or inconclusive.
     * 
     * If an error occurs, the function sets `error` and returns
     * %CAMEL_JUNK_STATUS_ERROR.
     * @virtual 
     * @param message a #CamelMimeMessage
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_classify(message: MimeMessage, cancellable: Gio.Cancellable | null): JunkStatus
    /**
     * Instructs `junk_filter` to classify `message` as junk.  If using an
     * adaptive junk filtering algorithm, explicitly marking `message` as
     * junk will influence the classification of future messages.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @virtual 
     * @param message a #CamelMimeMessage
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_learn_junk(message: MimeMessage, cancellable: Gio.Cancellable | null): boolean
    /**
     * Instructs `junk_filter` to classify `message` as not junk.  If using an
     * adaptive junk filtering algorithm, explicitly marking `message` as not
     * junk will influence the classification of future messages.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @virtual 
     * @param message a #CamelMimeMessage
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_learn_not_junk(message: MimeMessage, cancellable: Gio.Cancellable | null): boolean
    /**
     * Instructs `junk_filter` to flush any in-memory caches to disk, if
     * applicable.  When filtering many messages, delaying this step until
     * all messages have been classified can improve performance.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_synchronize(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Camel-1.2.Camel.JunkFilter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JunkFilter extends GObject.Object {

    // Own properties of Camel-1.2.Camel.JunkFilter

    static name: string
    static $gtype: GObject.GType<JunkFilter>

    // Constructors of Camel-1.2.Camel.JunkFilter

    constructor(config?: JunkFilter_ConstructProps) 
    _init(config?: JunkFilter_ConstructProps): void
}

interface NetworkService_ConstructProps extends Service_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.NetworkService

    connectable?: Gio.SocketConnectable | null
}

interface NetworkService extends Service {

    // Own properties of Camel-1.2.Camel.NetworkService

    connectable: Gio.SocketConnectable
    readonly host_reachable: boolean

    // Conflicting properties

    parent: any
    priv: any

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
    can_reach(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_network_service_can_reach().
     * @param result a #GAsyncResult
     */
    can_reach_finish(result: Gio.AsyncResult): boolean
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
     */
    can_reach_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Attempts to establish a network connection to the server described by
     * `service,` using the preferred #CamelNetworkSettings:security-method to
     * secure the connection.  If a connection cannot be established, or the
     * connection attempt is cancelled, the function sets `error` and returns
     * %NULL.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    connect_sync(cancellable: Gio.Cancellable | null): Gio.IOStream

    // Overloads of connect_sync

    /**
     * Connects `service` to a remote server using the information in its
     * #CamelService:settings instance.
     * 
     * If a connect operation is already in progress when this function is
     * called, its results will be reflected in this connect operation.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    connect_sync(cancellable: Gio.Cancellable | null): boolean
    connect_sync(...args: any[]): any
    connect_sync(args_or_cancellable: any[] | Gio.Cancellable | null): Gio.IOStream | boolean | any
    /**
     * Returns the default network port number for `service` and the security
     * method `method,` as defined in /etc/services.  For example, the default
     * port for unencrypted IMAP or encrypted IMAP using STARTTLS is 143, but
     * the default port for IMAP over SSL is 993.
     * @param method a #CamelNetworkSecurityMethod
     */
    get_default_port(method: NetworkSecurityMethod): number
    /**
     * Returns %TRUE if `service` believes that the host pointed to by
     * #CamelNetworkService:connectable can be reached.  This property
     * is updated automatically as network conditions change.
     */
    get_host_reachable(): boolean
    /**
     * Returns the standard network service name for `service` and the security
     * method `method,` as defined in /etc/services.  For example, the service
     * name for unencrypted IMAP or encrypted IMAP using STARTTLS is "imap",
     * but the service name for IMAP over SSL is "imaps".
     * @param method a #CamelNetworkSecurityMethod
     */
    get_service_name(method: NetworkSecurityMethod): string | null
    /**
     * Returns the socket endpoint for the network service to which `service`
     * is a client.
     * 
     * The returned #GSocketConnectable is referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with it.
     */
    ref_connectable(): Gio.SocketConnectable
    /**
     * Sets the socket endpoint for the network service to which `service` is
     * a client.  If `connectable` is %NULL, a #GSocketConnectable is derived
     * from the `service'`s #CamelNetworkSettings.
     * @param connectable a #GSocketConnectable, or %NULL
     */
    set_connectable(connectable: Gio.SocketConnectable | null): void
    /**
     * Creates a #GTlsClientConnection wrapping `base_stream,` which is
     * assumed to communicate with the server identified by `service'`s
     * #CamelNetworkService:connectable.
     * 
     * This should typically be called after issuing a STARTTLS command
     * to a server to initiate a Transport Layer Security handshake.
     * @param base_stream a #GIOStream
     */
    starttls(base_stream: Gio.IOStream): Gio.IOStream | null

    // Own virtual methods of Camel-1.2.Camel.NetworkService

    /**
     * Attempts to establish a network connection to the server described by
     * `service,` using the preferred #CamelNetworkSettings:security-method to
     * secure the connection.  If a connection cannot be established, or the
     * connection attempt is cancelled, the function sets `error` and returns
     * %NULL.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_connect_sync(cancellable: Gio.Cancellable | null): Gio.IOStream

    // Overloads of vfunc_connect_sync

    /**
     * Connects `service` to a remote server using the information in its
     * #CamelService:settings instance.
     * 
     * If a connect operation is already in progress when this function is
     * called, its results will be reflected in this connect operation.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_connect_sync(cancellable: Gio.Cancellable | null): boolean
    vfunc_connect_sync(...args: any[]): any
    vfunc_connect_sync(args_or_cancellable: any[] | Gio.Cancellable | null): Gio.IOStream | boolean | any
    /**
     * Returns the default network port number for `service` and the security
     * method `method,` as defined in /etc/services.  For example, the default
     * port for unencrypted IMAP or encrypted IMAP using STARTTLS is 143, but
     * the default port for IMAP over SSL is 993.
     * @virtual 
     * @param method a #CamelNetworkSecurityMethod
     */
    vfunc_get_default_port(method: NetworkSecurityMethod): number
    /**
     * Returns the standard network service name for `service` and the security
     * method `method,` as defined in /etc/services.  For example, the service
     * name for unencrypted IMAP or encrypted IMAP using STARTTLS is "imap",
     * but the service name for IMAP over SSL is "imaps".
     * @virtual 
     * @param method a #CamelNetworkSecurityMethod
     */
    vfunc_get_service_name(method: NetworkSecurityMethod): string | null

    // Class property signals of Camel-1.2.Camel.NetworkService

    connect(sigName: "notify::connectable", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::host-reachable", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-reachable", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host-reachable", ...args: any[]): void
    connect(sigName: "notify::connection-status", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NetworkService extends GObject.Object {

    // Own properties of Camel-1.2.Camel.NetworkService

    static name: string
    static $gtype: GObject.GType<NetworkService>

    // Constructors of Camel-1.2.Camel.NetworkService

    constructor(config?: NetworkService_ConstructProps) 
    _init(config?: NetworkService_ConstructProps): void
}

interface NetworkSettings_ConstructProps extends Settings_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.NetworkSettings

    auth_mechanism?: string | null
    host?: string | null
    port?: number | null
    security_method?: NetworkSecurityMethod | null
    user?: string | null
}

interface NetworkSettings extends Settings {

    // Own properties of Camel-1.2.Camel.NetworkSettings

    auth_mechanism: string
    host: string
    port: number
    security_method: NetworkSecurityMethod
    user: string

    // Owm methods of Camel-1.2.Camel.NetworkSettings

    /**
     * Thread-safe variation of camel_network_settings_get_auth_mechanism().
     * Use this function when accessing `settings` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dup_auth_mechanism(): string | null
    /**
     * Thread-safe variation of camel_network_settings_get_host().
     * Use this function when accessing `settings` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dup_host(): string
    /**
     * Just like camel_network_settings_dup_host(), only makes sure that
     * the returned host name will be converted into its ASCII form in case
     * of IDNA value.
     */
    dup_host_ensure_ascii(): string
    /**
     * Thread-safe variation of camel_network_settings_get_user().
     * Use this function when accessing `settings` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dup_user(): string
    /**
     * Returns the mechanism name used to authenticate to a network service.
     * Often this refers to a SASL mechanism such as "LOGIN" or "GSSAPI".
     */
    get_auth_mechanism(): string | null
    /**
     * Returns the host name used to authenticate to a network service.
     */
    get_host(): string
    /**
     * Returns the port number used to authenticate to a network service.
     */
    get_port(): number
    /**
     * Returns the method used to establish a secure (or unsecure) network
     * connection.
     */
    get_security_method(): NetworkSecurityMethod
    /**
     * Returns the user name used to authenticate to a network service.
     */
    get_user(): string
    /**
     * Sets the mechanism name used to authenticate to a network service.
     * Often this refers to a SASL mechanism such as "LOGIN" or "GSSAPI".
     * The #CamelNetworkSettings:auth-mechanism property is automatically
     * stripped of leading and trailing whitespace.
     * @param auth_mechanism an authentication mechanism name, or %NULL
     */
    set_auth_mechanism(auth_mechanism: string | null): void
    /**
     * Sets the host name used to authenticate to a network service.  The
     * #CamelNetworkSettings:host property is automatically stripped of
     * leading and trailing whitespace.
     * @param host a host name, or %NULL
     */
    set_host(host: string | null): void
    /**
     * Sets the port number used to authenticate to a network service.
     * @param port a port number
     */
    set_port(port: number): void
    /**
     * Sets the method used to establish a secure (or unsecure) network
     * connection.  Note that changing this setting has no effect on an
     * already-established network connection.
     * @param method the security method
     */
    set_security_method(method: NetworkSecurityMethod): void
    /**
     * Sets the user name used to authenticate to a network service.  The
     * #CamelNetworkSettings:user property is automatically stripped of
     * leading and trailing whitespace.
     * @param user a user name, or %NULL
     */
    set_user(user: string | null): void

    // Class property signals of Camel-1.2.Camel.NetworkSettings

    connect(sigName: "notify::auth-mechanism", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-mechanism", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auth-mechanism", ...args: any[]): void
    connect(sigName: "notify::host", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::security-method", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-method", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::security-method", ...args: any[]): void
    connect(sigName: "notify::user", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NetworkSettings extends GObject.Object {

    // Own properties of Camel-1.2.Camel.NetworkSettings

    static name: string
    static $gtype: GObject.GType<NetworkSettings>

    // Constructors of Camel-1.2.Camel.NetworkSettings

    constructor(config?: NetworkSettings_ConstructProps) 
    _init(config?: NetworkSettings_ConstructProps): void
}

interface Subscribable_ConstructProps extends Store_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `folder-subscribed`
 */
interface Subscribable_FolderSubscribedSignalCallback {
    ($obj: Subscribable, object: FolderInfo): void
}

/**
 * Signal callback interface for `folder-unsubscribed`
 */
interface Subscribable_FolderUnsubscribedSignalCallback {
    ($obj: Subscribable, object: FolderInfo): void
}

interface Subscribable extends Store {

    // Conflicting properties

    parent: any
    priv: any

    // Owm methods of Camel-1.2.Camel.Subscribable

    /**
     * Find out if a folder has been subscribed to.
     * @param folder_name full path of the folder
     */
    folder_is_subscribed(folder_name: string): boolean
    /**
     * Emits the #CamelSubscribable::folder-subscribed signal from an idle source
     * on the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @param folder_info information about the subscribed folder
     */
    folder_subscribed(folder_info: FolderInfo): void
    /**
     * Emits the #CamelSubscribable::folder-unsubscribed signal from an idle source
     * on the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @param folder_info information about the unsubscribed folder
     */
    folder_unsubscribed(folder_info: FolderInfo): void
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
    subscribe_folder(folder_name: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_subscribable_subscribe_folder().
     * @param result a #GAsyncResult
     */
    subscribe_folder_finish(result: Gio.AsyncResult): boolean
    /**
     * Subscribes to the folder described by `folder_name`.
     * @param folder_name full path of the folder
     * @param cancellable optional #GCancellable object, or %NULL
     */
    subscribe_folder_sync(folder_name: string, cancellable: Gio.Cancellable | null): boolean
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
    unsubscribe_folder(folder_name: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_subscribable_unsubscribe_folder().
     * @param result a #GAsyncResult
     */
    unsubscribe_folder_finish(result: Gio.AsyncResult): boolean
    /**
     * Unsubscribes from the folder described by `folder_name`.
     * @param folder_name full path of the folder
     * @param cancellable optional #GCancellable object, or %NULL
     */
    unsubscribe_folder_sync(folder_name: string, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of Camel-1.2.Camel.Subscribable

    /**
     * Find out if a folder has been subscribed to.
     * @virtual 
     * @param folder_name full path of the folder
     */
    vfunc_folder_is_subscribed(folder_name: string): boolean
    /**
     * Emits the #CamelSubscribable::folder-subscribed signal from an idle source
     * on the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     * @param folder_info information about the subscribed folder
     */
    vfunc_folder_subscribed(folder_info: FolderInfo): void
    /**
     * Emits the #CamelSubscribable::folder-unsubscribed signal from an idle source
     * on the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     * @param folder_info information about the unsubscribed folder
     */
    vfunc_folder_unsubscribed(folder_info: FolderInfo): void
    /**
     * Subscribes to the folder described by `folder_name`.
     * @virtual 
     * @param folder_name full path of the folder
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_subscribe_folder_sync(folder_name: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Unsubscribes from the folder described by `folder_name`.
     * @virtual 
     * @param folder_name full path of the folder
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_unsubscribe_folder_sync(folder_name: string, cancellable: Gio.Cancellable | null): boolean

    // Own signals of Camel-1.2.Camel.Subscribable

    connect(sigName: "folder-subscribed", callback: Subscribable_FolderSubscribedSignalCallback): number
    connect_after(sigName: "folder-subscribed", callback: Subscribable_FolderSubscribedSignalCallback): number
    emit(sigName: "folder-subscribed", object: FolderInfo, ...args: any[]): void
    connect(sigName: "folder-unsubscribed", callback: Subscribable_FolderUnsubscribedSignalCallback): number
    connect_after(sigName: "folder-unsubscribed", callback: Subscribable_FolderUnsubscribedSignalCallback): number
    emit(sigName: "folder-unsubscribed", object: FolderInfo, ...args: any[]): void

    // Class property signals of Camel-1.2.Camel.Subscribable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Subscribable extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Subscribable

    static name: string
    static $gtype: GObject.GType<Subscribable>

    // Constructors of Camel-1.2.Camel.Subscribable

    constructor(config?: Subscribable_ConstructProps) 
    _init(config?: Subscribable_ConstructProps): void
}

interface Address_ConstructProps extends GObject.Object_ConstructProps {
}

interface Address {

    // Own fields of Camel-1.2.Camel.Address

    parent: GObject.Object
    priv: AddressPrivate

    // Owm methods of Camel-1.2.Camel.Address

    /**
     * Concatenate one address onto another. The addresses must
     * be of the same type.
     * @param source source #CamelAddress object
     */
    cat(source: Address): number
    /**
     * Copy the contents of one address into another.
     * @param source source #CamelAddress object
     */
    copy(source: Address): number
    /**
     * Construct a new address from a raw address field.
     * @param raw raw address description
     */
    decode(raw: string): number
    /**
     * Encode an address in a format suitable for a raw header.
     */
    encode(): string
    /**
     * Format an address in a format suitable for display.
     */
    format(): string
    /**
     * Get the number of addresses stored in the address `addr`.
     */
    length(): number
    /**
     * Clone an existing address type.
     */
    new_clone(): Address
    /**
     * Remove an address by index, or all addresses.
     * @param index The address to remove, use -1 to remove all address.
     */
    remove(index: number): void
    /**
     * Attempt to convert a previously formatted and/or edited
     * address back into internal form.
     * @param raw raw address description
     */
    unformat(raw: string): number

    // Own virtual methods of Camel-1.2.Camel.Address

    /**
     * Concatenate one address onto another. The addresses must
     * be of the same type.
     * @virtual 
     * @param source source #CamelAddress object
     */
    vfunc_cat(source: Address): number
    /**
     * Construct a new address from a raw address field.
     * @virtual 
     * @param raw raw address description
     */
    vfunc_decode(raw: string): number
    /**
     * Encode an address in a format suitable for a raw header.
     * @virtual 
     */
    vfunc_encode(): string
    /**
     * Format an address in a format suitable for display.
     * @virtual 
     */
    vfunc_format(): string
    /**
     * Get the number of addresses stored in the address `addr`.
     * @virtual 
     */
    vfunc_length(): number
    /**
     * Remove an address by index, or all addresses.
     * @virtual 
     * @param index The address to remove, use -1 to remove all address.
     */
    vfunc_remove(index: number): void
    /**
     * Attempt to convert a previously formatted and/or edited
     * address back into internal form.
     * @virtual 
     * @param raw raw address description
     */
    vfunc_unformat(raw: string): number

    // Class property signals of Camel-1.2.Camel.Address

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Address extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Address

    static name: string
    static $gtype: GObject.GType<Address>

    // Constructors of Camel-1.2.Camel.Address

    constructor(config?: Address_ConstructProps) 
    /**
     * Create a new #CamelAddress object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CamelAddress object.
     * @constructor 
     */
    static new(): Address
    _init(config?: Address_ConstructProps): void
}

interface BlockFile_ConstructProps extends GObject.Object_ConstructProps {
}

interface BlockFile {

    // Own fields of Camel-1.2.Camel.BlockFile

    parent: GObject.Object
    priv: BlockFilePrivate

    // Owm methods of Camel-1.2.Camel.BlockFile

    /**
     * Reattach a block that has been detached.
     * @param bl a #CamelBlock
     */
    attach_block(bl: Block): void
    /**
     * Deletes existing block file.
     */
    delete(): number
    /**
     * Detatch a block from the block file's cache.  The block should
     * be unref'd or attached when finished with.  The block file will
     * perform no writes of this block or flushing of it if the cache
     * fills.
     * @param bl a #CamelBlock
     */
    detach_block(bl: Block): void
    free_block(id: _block_t): number
    get_cache_limit(): number
    get_root(): BlockRoot
    get_root_block(): Block
    /**
     * Renames existing block file to a new `path`.
     * @param path path with filename to rename to
     */
    rename(path: string): number
    /**
     * Sets a new block cache limit for `bs`.
     * @param block_cache_limit a new block cache limit to set
     */
    set_cache_limit(block_cache_limit: number): void
    /**
     * Sync all dirty blocks to disk, including the root block.
     */
    sync(): number
    /**
     * Flush a block to disk immediately.  The block will only
     * be flushed to disk if it is marked as dirty (touched).
     * @param bl a #CamelBlock
     */
    sync_block(bl: Block): number
    /**
     * Mark a block as dirty.  The block will be written to disk if
     * it ever expires from the cache.
     * @param bl a #CamelBlock
     */
    touch_block(bl: Block): void
    /**
     * Mark a block as unused.  If a block is used it will not be
     * written to disk, or flushed from memory.
     * 
     * If a block is detatched and this is the last reference, the
     * block will be freed.
     * @param bl a #CamelBlock
     */
    unref_block(bl: Block): void

    // Own virtual methods of Camel-1.2.Camel.BlockFile

    vfunc_init_root(): number
    vfunc_validate_root(): number

    // Class property signals of Camel-1.2.Camel.BlockFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BlockFile extends GObject.Object {

    // Own properties of Camel-1.2.Camel.BlockFile

    static name: string
    static $gtype: GObject.GType<BlockFile>

    // Constructors of Camel-1.2.Camel.BlockFile

    constructor(config?: BlockFile_ConstructProps) 
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
     * @param block_size block size, currently ignored
     */
    constructor(path: string, flags: number, version: string, block_size: number) 
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
     * @param block_size block size, currently ignored
     */
    static new(path: string, flags: number, version: string, block_size: number): BlockFile
    _init(config?: BlockFile_ConstructProps): void
}

interface CertDB_ConstructProps extends GObject.Object_ConstructProps {
}

interface CertDB {

    // Own fields of Camel-1.2.Camel.CertDB

    parent: GObject.Object
    priv: CertDBPrivate

    // Owm methods of Camel-1.2.Camel.CertDB

    clear(): void
    get_host(hostname: string, fingerprint: string): Cert | null
    /**
     * Gathers a list of known certificates. Each certificate in the returned #GSList
     * is referenced, thus unref it with camel_cert_unref() when done with it, the same
     * as free the list itself.
     */
    list_certs(): Cert[]
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
    remove_host(hostname: string, fingerprint: string): void
    save(): number
    set_default(): void
    set_filename(filename: string): void
    touch(): void

    // Own virtual methods of Camel-1.2.Camel.CertDB

    vfunc_cert_load(istream: object | null): Cert
    vfunc_cert_save(cert: Cert, ostream: object | null): number
    vfunc_header_load(istream: object | null): number
    vfunc_header_save(ostream: object | null): number

    // Class property signals of Camel-1.2.Camel.CertDB

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CertDB extends GObject.Object {

    // Own properties of Camel-1.2.Camel.CertDB

    static name: string
    static $gtype: GObject.GType<CertDB>

    // Constructors of Camel-1.2.Camel.CertDB

    constructor(config?: CertDB_ConstructProps) 
    constructor() 
    static new(): CertDB
    _init(config?: CertDB_ConstructProps): void
    /**
     * FIXME Document me!
     */
    static get_default(): CertDB
}

interface CipherContext_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.CipherContext

    session?: Session | null
}

interface CipherContext {

    // Own properties of Camel-1.2.Camel.CipherContext

    readonly session: Session

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
     * @param io_priority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    decrypt(ipart: MimePart, opart: MimePart, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_cipher_context_decrypt().
     * @param result a #GAsyncResult
     */
    decrypt_finish(result: Gio.AsyncResult): CipherValidity
    /**
     * Decrypts `ipart` into `opart`.
     * @param ipart cipher-text #CamelMimePart
     * @param opart clear-text #CamelMimePart
     * @param cancellable optional #GCancellable object, or %NULL
     */
    decrypt_sync(ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null): CipherValidity
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
     * @param io_priority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    encrypt(userid: string | null, recipients: string[], ipart: MimePart, opart: MimePart, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_cipher_context_encrypt().
     * @param result a #GAsyncResult
     */
    encrypt_finish(result: Gio.AsyncResult): boolean
    /**
     * Encrypts (and optionally signs) the clear-text `ipart` and writes the
     * resulting cipher-text to `opart`.
     * @param userid key ID (or email address) to use when signing, or %NULL to not sign
     * @param recipients an array of recipient key IDs and/or email addresses
     * @param ipart clear-text #CamelMimePart
     * @param opart cipher-text #CamelMimePart
     * @param cancellable optional #GCancellable object, or %NULL
     */
    encrypt_sync(userid: string | null, recipients: string[], ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null): boolean
    get_session(): Session
    hash_to_id(hash: CipherHash): string
    id_to_hash(id: string): CipherHash
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
    sign(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_cipher_context_sign().
     * @param result a #GAsyncResult
     */
    sign_finish(result: Gio.AsyncResult): boolean
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
    sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null): boolean
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
    verify(ipart: MimePart, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_cipher_context_verify().
     * @param result a #GAsyncResult
     */
    verify_finish(result: Gio.AsyncResult): CipherValidity
    /**
     * Verifies the signature.
     * @param ipart the #CamelMimePart to verify
     * @param cancellable optional #GCancellable object, or %NULL
     */
    verify_sync(ipart: MimePart, cancellable: Gio.Cancellable | null): CipherValidity

    // Own virtual methods of Camel-1.2.Camel.CipherContext

    /**
     * Decrypts `ipart` into `opart`.
     * @virtual 
     * @param ipart cipher-text #CamelMimePart
     * @param opart clear-text #CamelMimePart
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_decrypt_sync(ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null): CipherValidity
    /**
     * Encrypts (and optionally signs) the clear-text `ipart` and writes the
     * resulting cipher-text to `opart`.
     * @virtual 
     * @param userid key ID (or email address) to use when signing, or %NULL to not sign
     * @param recipients an array of recipient key IDs and/or email addresses
     * @param ipart clear-text #CamelMimePart
     * @param opart cipher-text #CamelMimePart
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_encrypt_sync(userid: string | null, recipients: string[], ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null): boolean
    vfunc_hash_to_id(hash: CipherHash): string
    vfunc_id_to_hash(id: string): CipherHash
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
     */
    vfunc_sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null): boolean
    /**
     * Verifies the signature.
     * @virtual 
     * @param ipart the #CamelMimePart to verify
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_verify_sync(ipart: MimePart, cancellable: Gio.Cancellable | null): CipherValidity

    // Class property signals of Camel-1.2.Camel.CipherContext

    connect(sigName: "notify::session", callback: (($obj: CipherContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: CipherContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CipherContext extends GObject.Object {

    // Own properties of Camel-1.2.Camel.CipherContext

    static name: string
    static $gtype: GObject.GType<CipherContext>

    // Constructors of Camel-1.2.Camel.CipherContext

    constructor(config?: CipherContext_ConstructProps) 
    /**
     * This creates a new CamelCipherContext object which is used to sign,
     * verify, encrypt and decrypt streams.
     * @constructor 
     * @param session a #CamelSession
     */
    constructor(session: Session) 
    /**
     * This creates a new CamelCipherContext object which is used to sign,
     * verify, encrypt and decrypt streams.
     * @constructor 
     * @param session a #CamelSession
     */
    static new(session: Session): CipherContext
    _init(config?: CipherContext_ConstructProps): void
}

interface DB_ConstructProps extends GObject.Object_ConstructProps {
}

interface DB {

    // Owm methods of Camel-1.2.Camel.DB

    /**
     * Ends an ongoing transaction by ignoring the changes.
     */
    abort_transaction(): number
    /**
     * Adds a statement to an ongoing transaction.
     * @param query an SQL (SQLite) statement
     */
    add_to_transaction(query: string): number
    /**
     * Begins transaction. End it with camel_db_end_transaction() or camel_db_abort_transaction().
     */
    begin_transaction(): number
    /**
     * Deletes the given folder from the 'folders' table and empties
     * its message info table.
     * @param folder_name full name of the folder
     */
    clear_folder_summary(folder_name: string): number
    /**
     * Executes an SQLite command.
     * @param stmt an SQL (SQLite) statement to execute
     */
    command(stmt: string): number
    /**
     * Counts how many deleted messages is stored in the given table.
     * @param table_name name of the table
     */
    count_deleted_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    /**
     * Counts how many junk messages is stored in the given table.
     * @param table_name name of the table
     */
    count_junk_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    count_junk_not_deleted_message_info(table_name: string, count: number): number
    /**
     * Executes a COUNT() query (like "SELECT COUNT(*) FROM table") and provides
     * the result of it as an unsigned 32-bit integer.
     * @param query a COUNT() query
     */
    count_message_info(query: string): [ /* returnType */ number, /* count */ number ]
    /**
     * Counts how many messages is stored in the given table.
     * @param table_name name of the table
     */
    count_total_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    /**
     * Counts how many unread messages is stored in the given table.
     * @param table_name name of the table
     */
    count_unread_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    /**
     * Counts how many visible (not deleted and not junk) messages is stored in the given table.
     * @param table_name name of the table
     */
    count_visible_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    /**
     * Counts how many visible (not deleted and not junk) and unread messages is stored in the given table.
     * @param table_name name of the table
     */
    count_visible_unread_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    /**
     * Creates a 'folders' table, if it doesn't exist yet.
     */
    create_folders_table(): number
    /**
     * Deletes the given folder from the 'folders' table and also drops
     * its message info table.
     * @param folder_name full name of the folder
     */
    delete_folder(folder_name: string): number
    /**
     * Deletes single mesage info in the given folder with
     * the given UID.
     * @param folder_name full name of the folder
     * @param uid a message info UID to delete
     */
    delete_uid(folder_name: string, uid: string): number
    /**
     * Deletes a list of message UIDs as one transaction.
     * @param folder_name full name of the folder
     * @param uids A #GList of uids
     */
    delete_uids(folder_name: string, uids: string[]): number
    /**
     * Ends an ongoing transaction by committing the changes.
     */
    end_transaction(): number
    /**
     * A pair function for camel_db_start_in_memory_transactions(),
     * to commit the changes to `folder_name` and free the in-memory table.
     * @param folder_name full name of the folder
     */
    flush_in_memory_transactions(folder_name: string): number
    get_filename(): string
    get_folder_deleted_uids(folder_name: string): string[] | null
    get_folder_junk_uids(folder_name: string): string[] | null
    /**
     * Fills hash with uid->GUINT_TO_POINTER (flag). Use camel_pstring_free()
     * to free the keys of the `hash`.
     * @param folder_name full name of the folder
     * @param sort_by optional ORDER BY clause (without the "ORDER BY" prefix)
     * @param collate optional collate function name to use
     * @param hash a hash table to fill
     */
    get_folder_uids(folder_name: string, sort_by: string | null, collate: string | null, hash: GLib.HashTable): number
    /**
     * Runs a `cdb` maintenance, which includes vacuum, if necessary.
     */
    maybe_run_maintenance(): boolean
    /**
     * Prepares message info table for the given folder.
     * @param folder_name full name of the folder
     */
    prepare_message_info_table(folder_name: string): number
    /**
     * reads folder information for the given folder and stores it into the `record`.
     * @param folder_name full name of the folder
     */
    read_folder_info_record(folder_name: string): [ /* returnType */ number, /* record */ FIRecord ]
    /**
     * Selects single message info for the given `uid` in folder `folder_name` and calls
     * the `callback` for it.
     * @param folder_name full name of the folder
     * @param uid a message info UID to read the record for
     * @param callback callback to call for the found row
     */
    read_message_info_record_with_uid(folder_name: string, uid: string, callback: DBSelectCB): number
    /**
     * Reads all mesasge info records for the given folder and calls `callback` for them.
     * @param folder_name full name of the folder
     * @param callback callback to call for each found row
     */
    read_message_info_records(folder_name: string, callback: DBSelectCB): number
    /**
     * Renames tables for the `old_folder_name` to be used with `new_folder_name`.
     * @param old_folder_name full name of the existing folder
     * @param new_folder_name full name of the folder to rename it to
     */
    rename_folder(old_folder_name: string, new_folder_name: string): number
    /**
     * Sets a version number for the given folder.
     * @param folder_name full name of the folder
     * @param reset_version version number to set
     */
    reset_folder_version(folder_name: string, reset_version: number): number
    /**
     * Executes a SELECT staement and calls the `callback` for each selected row.
     * @param stmt a SELECT statment to execute
     * @param callback a callback to call for each row
     */
    select(stmt: string, callback: DBSelectCB): number
    /**
     * Defines a collation `collate,` which can be used in SQL (SQLite)
     * statement as a collation function. The `func` is called when
     * colation is used.
     * @param col a column name; currently unused
     * @param collate collation name
     * @param func a #CamelDBCollate collation function
     */
    set_collate(col: string, collate: string, func: DBCollate): number
    /**
     * Creates an in-memory table for a batch transactions. Use camel_db_flush_in_memory_transactions()
     * to commit the changes and free the in-memory table.
     */
    start_in_memory_transactions(): number
    /**
     * Runs the list of commands as a single transaction.
     * @param qry_list A #GList of querries
     */
    transaction_command(qry_list: string[]): number
    /**
     * Write the `record` to the 'folders' table.
     * @param record a #CamelFIRecord
     */
    write_folder_info_record(record: FIRecord): number
    /**
     * Write the `record` to the message info table of the given folder.
     * @param folder_name full name of the folder
     * @param record a #CamelMIRecord
     */
    write_message_info_record(folder_name: string, record: MIRecord): number

    // Class property signals of Camel-1.2.Camel.DB

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DB extends GObject.Object {

    // Own properties of Camel-1.2.Camel.DB

    static name: string
    static $gtype: GObject.GType<DB>

    // Constructors of Camel-1.2.Camel.DB

    constructor(config?: DB_ConstructProps) 
    constructor(filename: string) 
    static new(filename: string): DB
    _init(config?: DB_ConstructProps): void
    /**
     * Frees the `record` and all of its associated data.
     * @param record a #CamelMIRecord
     */
    static camel_mir_free(record: MIRecord | null): void
    static error_quark(): GLib.Quark
    /**
     * Frees a string previosuly returned by camel_db_sqlize_string().
     * @param string a string to free
     */
    static free_sqlized_string(string: string | null): void
    /**
     * Traverses column name from index `index` into an enum
     * #CamelDBKnownColumnNames value.  The `col_names` contains `ncols` columns.
     * First time this is called is created the `hash` from col_names indexes into
     * the enum, and this is reused for every other call.  The function expects
     * that column names are returned always in the same order.  When all rows
     * are read the `hash` table can be freed with g_hash_table_destroy().
     * @param hash a #GHashTable
     * @param index an index to start with, between 0 and `ncols`
     * @param col_names column names to traverse
     */
    static get_column_ident(hash: GLib.HashTable, index: number, col_names: string[]): [ /* returnType */ DBKnownColumnNames, /* hash */ GLib.HashTable ]
    static get_column_name(raw_name: string): string | null
    /**
     * Instructs sqlite to release its memory, if possible. This can be avoided
     * when CAMEL_SQLITE_FREE_CACHE environment variable is set.
     */
    static release_cache_memory(): void
    /**
     * Converts the `string` to be usable in the SQLite statements.
     * @param string a string to "sqlize"
     */
    static sqlize_string(string: string): string
}

interface DataCache_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.DataCache

    expire_enabled?: boolean | null
    path?: string | null
}

interface DataCache {

    // Own properties of Camel-1.2.Camel.DataCache

    expire_enabled: boolean
    path: string

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
     */
    add(path: string, key: string): Gio.IOStream
    /**
     * Clear cache's content in `path`.
     * @param path Path to the (sub) cache the item exists in.
     */
    clear(path: string): void
    /**
     * Traverses the `cdc` sub-cache identified by `path` and calls `func` for each found file.
     * If the `func` returns %TRUE, then the file is removed, if %FALSE, it's kept in the cache.
     * @param path Path to the (sub) cache the items exist in
     * @param func a callback to call for each found file in the cache
     */
    foreach_remove(path: string, func: DataCacheRemoveFunc): void
    /**
     * Lookup an item in the cache.  If the item exists, a #GIOStream is returned
     * for the item.  The stream may be shared by multiple callers, so ensure the
     * stream is in a valid state through external locking.
     * 
     * The returned #GIOStream is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @param path Path to the (sub) cache the item exists in.
     * @param key Key for the cache item.
     */
    get(path: string, key: string): Gio.IOStream
    /**
     * Gets whether expire of cache data is enabled.
     * 
     * This is a complementary property for camel_data_cache_set_expire_age()
     * and camel_data_cache_set_expire_access(), which allows to disable expiry
     * without touching the two values. Having expire enabled, but not have set
     * any of the two times, still behaves like not having expiry enabled.
     */
    get_expire_enabled(): boolean
    /**
     * Lookup the filename for an item in the cache
     * @param path Path to the (sub) cache the item exists in.
     * @param key Key for the cache item.
     */
    get_filename(path: string, key: string): string
    /**
     * Returns the path to the data cache.
     */
    get_path(): string
    /**
     * Remove/expire a cache item.
     * @param path Path to the (sub) cache the item exists in.
     * @param key Key for the cache item.
     */
    remove(path: string, key: string): number
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
    set_expire_access(when: number): void
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
    set_expire_age(when: number): void
    /**
     * Sets whether expire of cache data is enabled.
     * 
     * This is a complementary property for camel_data_cache_set_expire_age()
     * and camel_data_cache_set_expire_access(), which allows to disable expiry
     * without touching the two values. Having expire enabled, but not have set
     * any of the two times, still behaves like not having expiry enabled.
     * @param expire_enabled a value to set
     */
    set_expire_enabled(expire_enabled: boolean): void
    /**
     * Sets the path to the data cache.
     * @param path path to the data cache
     */
    set_path(path: string): void

    // Class property signals of Camel-1.2.Camel.DataCache

    connect(sigName: "notify::expire-enabled", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expire-enabled", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expire-enabled", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataCache extends GObject.Object {

    // Own properties of Camel-1.2.Camel.DataCache

    static name: string
    static $gtype: GObject.GType<DataCache>

    // Constructors of Camel-1.2.Camel.DataCache

    constructor(config?: DataCache_ConstructProps) 
    /**
     * Create a new data cache.
     * @constructor 
     * @param path Base path of cache, subdirectories will be created here.
     */
    constructor(path: string) 
    /**
     * Create a new data cache.
     * @constructor 
     * @param path Base path of cache, subdirectories will be created here.
     */
    static new(path: string): DataCache
    _init(config?: DataCache_ConstructProps): void
}

interface DataWrapper_ConstructProps extends GObject.Object_ConstructProps {
}

interface DataWrapper {

    // Own fields of Camel-1.2.Camel.DataWrapper

    parent: GObject.Object
    priv: DataWrapperPrivate

    // Owm methods of Camel-1.2.Camel.DataWrapper

    /**
     * Calculates decoded size of the `data_wrapper` by saving it to a null-stream
     * and returns how many bytes had been written. It's using
     * camel_data_wrapper_decode_to_stream_sync() internally.
     * @param cancellable a #GCancellable, or %NULL
     */
    calculate_decoded_size_sync(cancellable: Gio.Cancellable | null): number
    /**
     * Calculates size of the `data_wrapper` by saving it to a null-stream
     * and returns how many bytes had been written. It's using
     * camel_data_wrapper_write_to_stream_sync() internally.
     * @param cancellable a #GCancellable, or %NULL
     */
    calculate_size_sync(cancellable: Gio.Cancellable | null): number
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
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with
     * camel_data_wrapper_construct_from_input_stream().
     * @param result a #GAsyncResult
     */
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    /**
     * Constructs the content of `data_wrapper` from `input_stream`.
     * @param input_stream a #GInputStream
     * @param cancellable optional #GCancellable object, or %NULL
     */
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean
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
    construct_from_stream(stream: Stream, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with
     * camel_data_wrapper_construct_from_stream().
     * @param result a #GAsyncResult
     */
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    /**
     * Constructs the content of `data_wrapper` from the given `stream`.
     * @param stream an input #CamelStream
     * @param cancellable optional #GCancellable object, or %NULL
     */
    construct_from_stream_sync(stream: Stream, cancellable: Gio.Cancellable | null): boolean
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
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with
     * camel_data_wrapper_decode_to_output_stream().
     * @param result a #GAsyncResult
     */
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
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
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): number
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
    decode_to_stream(stream: Stream, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_data_wrapper_decode_to_stream().
     * @param result a #GAsyncResult
     */
    decode_to_stream_finish(result: Gio.AsyncResult): number
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
    decode_to_stream_sync(stream: Stream, cancellable: Gio.Cancellable | null): number
    /**
     * Returns the #GByteArray being used to hold the contents of `data_wrapper`.
     * 
     * Note, it's up to the caller to use this in a thread-safe manner.
     */
    get_byte_array(): Uint8Array
    get_encoding(): TransferEncoding
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    /**
     * Sets encoding (#CamelTransferEncoding) for the `data_wrapper`.
     * It doesn't re-encode the content, if the encoding changes.
     * @param encoding an encoding to set
     */
    set_encoding(encoding: TransferEncoding): void
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
    set_mime_type(mime_type: string): void
    /**
     * This sets the data wrapper's MIME type. It adds its own reference
     * to `mime_type,` if not %NULL.
     * 
     * It suffers from the same flaws as camel_data_wrapper_set_mime_type().
     * @param mime_type a #CamelContentType
     */
    set_mime_type_field(mime_type: ContentType | null): void
    /**
     * Sets whether the `data_wrapper` is "offline". It applies only to this
     * concrete instance. See camel_data_wrapper_is_offline().
     * @param offline whether the `data_wrapper` is "offline"
     */
    set_offline(offline: boolean): void
    /**
     * Sets mime-type filed to be `mime_type` and consumes it, aka unlike
     * camel_data_wrapper_set_mime_type_field(), this doesn't add its own
     * reference to `mime_type`.
     * 
     * It suffers from the same flaws as camel_data_wrapper_set_mime_type().
     * @param mime_type a #CamelContentType
     */
    take_mime_type_field(mime_type: ContentType | null): void
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
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with
     * camel_data_wrapper_write_to_output_stream().
     * @param result a #GAsyncResult
     */
    write_to_output_stream_finish(result: Gio.AsyncResult): number
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
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): number
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
    write_to_stream(stream: Stream, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_data_wrapper_write_to_stream().
     * @param result a #GAsyncResult
     */
    write_to_stream_finish(result: Gio.AsyncResult): number
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
    write_to_stream_sync(stream: Stream, cancellable: Gio.Cancellable | null): number

    // Own virtual methods of Camel-1.2.Camel.DataWrapper

    /**
     * Constructs the content of `data_wrapper` from `input_stream`.
     * @virtual 
     * @param input_stream a #GInputStream
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean
    /**
     * Constructs the content of `data_wrapper` from the given `stream`.
     * @virtual 
     * @param stream an input #CamelStream
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_construct_from_stream_sync(stream: Stream, cancellable: Gio.Cancellable | null): boolean
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
     * @param output_stream a #GOutputStream
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): number
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
     */
    vfunc_decode_to_stream_sync(stream: Stream, cancellable: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    /**
     * This sets the data wrapper's MIME type.
     * 
     * It might fail, but you won't know. It will allow you to set
     * Content-Type parameters on the data wrapper, which are meaningless.
     * You should not be allowed to change the MIME type of a data wrapper
     * that contains data, or at least, if you do, it should invalidate the
     * data.
     * @virtual 
     * @param mime_type a MIME type
     */
    vfunc_set_mime_type(mime_type: string): void
    /**
     * This sets the data wrapper's MIME type. It adds its own reference
     * to `mime_type,` if not %NULL.
     * 
     * It suffers from the same flaws as camel_data_wrapper_set_mime_type().
     * @virtual 
     * @param mime_type a #CamelContentType
     */
    vfunc_set_mime_type_field(mime_type: ContentType | null): void
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
     * @param output_stream a #GOutputStream
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): number
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
     */
    vfunc_write_to_stream_sync(stream: Stream, cancellable: Gio.Cancellable | null): number

    // Class property signals of Camel-1.2.Camel.DataWrapper

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataWrapper extends GObject.Object {

    // Own properties of Camel-1.2.Camel.DataWrapper

    static name: string
    static $gtype: GObject.GType<DataWrapper>

    // Constructors of Camel-1.2.Camel.DataWrapper

    constructor(config?: DataWrapper_ConstructProps) 
    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     */
    static new(): DataWrapper
    _init(config?: DataWrapper_ConstructProps): void
}

interface FilterDriver_ConstructProps extends GObject.Object_ConstructProps {
}

interface FilterDriver {

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
    add_rule(name: string, match: string, action: string): void
    /**
     * Filters a folder based on rules defined in the FilterDriver
     * object.
     * @param folder CamelFolder to be filtered
     * @param cache UID cache (needed for POP folders)
     * @param uids message uids to be filtered or         %NULL (as a shortcut to filter all messages)
     * @param remove TRUE to mark filtered messages as deleted
     * @param cancellable optional #GCancellable object, or %NULL
     */
    filter_folder(folder: Folder, cache: UIDCache, uids: string[] | null, remove: boolean, cancellable: Gio.Cancellable | null): number
    /**
     * Filters an mbox file based on rules defined in the FilterDriver
     * object. Is more efficient as it doesn't need to open the folder
     * through Camel directly.
     * @param mbox mbox filename to be filtered
     * @param original_source_url URI of the `mbox,` or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    filter_mbox(mbox: string, original_source_url: string | null, cancellable: Gio.Cancellable | null): number
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
     */
    filter_message(message: MimeMessage | null, info: MessageInfo | null, uid: string | null, source: Folder | null, store_uid: string | null, original_store_uid: string | null, cancellable: Gio.Cancellable | null): number
    /**
     * Flush all of the only-once filter actions.
     */
    flush(): void
    /**
     * Removes a rule by name, added by camel_filter_driver_add_rule().
     * @param name rule name
     */
    remove_rule_by_name(name: string): boolean
    /**
     * Sets a default folder for the driver. The function adds
     * its own reference for the folder.
     * @param def a default #CamelFolder
     */
    set_default_folder(def: Folder | null): void
    /**
     * Sets a log file to use for logging.
     * @param logfile a FILE handle where to write logging
     */
    set_logfile(logfile: object | null): void
    /**
     * Sets a callback to call when a play of a sound is requested.
     * @param func a callback to play a sound
     */
    set_play_sound_func(func: FilterPlaySoundFunc): void
    /**
     * Sets a shell command callback, which is called when a shell command
     * execution is requested.
     * @param func a shell command callback
     */
    set_shell_func(func: FilterShellFunc): void
    /**
     * Sets a status callback, which is used to report progress/status.
     * @param func a callback to report progress
     */
    set_status_func(func: FilterStatusFunc): void
    /**
     * Sets a callback to use for system beep.
     * @param func a system beep callback
     */
    set_system_beep_func(func: FilterSystemBeepFunc): void

    // Class property signals of Camel-1.2.Camel.FilterDriver

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FilterDriver extends GObject.Object {

    // Own properties of Camel-1.2.Camel.FilterDriver

    static name: string
    static $gtype: GObject.GType<FilterDriver>

    // Constructors of Camel-1.2.Camel.FilterDriver

    constructor(config?: FilterDriver_ConstructProps) 
    constructor(session: Session) 
    static new(session: Session): FilterDriver
    _init(config?: FilterDriver_ConstructProps): void
}

interface FilterInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.FilterInputStream

    filter?: MimeFilter | null
}

interface FilterInputStream {

    // Own properties of Camel-1.2.Camel.FilterInputStream

    readonly filter: MimeFilter

    // Conflicting properties

    parent_instance: any

    // Own fields of Camel-1.2.Camel.FilterInputStream

    parent: Gio.FilterInputStream
    priv: FilterInputStreamPrivate

    // Owm methods of Camel-1.2.Camel.FilterInputStream

    /**
     * Gets the #CamelMimeFilter that is used by `filter_stream`.
     */
    get_filter(): MimeFilter

    // Class property signals of Camel-1.2.Camel.FilterInputStream

    connect(sigName: "notify::filter", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::close-base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FilterInputStream extends Gio.FilterInputStream {

    // Own properties of Camel-1.2.Camel.FilterInputStream

    static name: string
    static $gtype: GObject.GType<FilterInputStream>

    // Constructors of Camel-1.2.Camel.FilterInputStream

    constructor(config?: FilterInputStream_ConstructProps) 
    /**
     * Creates a new filtered input stream for the `base_stream`.
     * @constructor 
     * @param base_stream a #GInputStream
     * @param filter a #CamelMimeFilter
     */
    constructor(base_stream: Gio.InputStream, filter: MimeFilter) 
    /**
     * Creates a new filtered input stream for the `base_stream`.
     * @constructor 
     * @param base_stream a #GInputStream
     * @param filter a #CamelMimeFilter
     */
    static new(base_stream: Gio.InputStream, filter: MimeFilter): FilterInputStream
    _init(config?: FilterInputStream_ConstructProps): void
}

interface FilterOutputStream_ConstructProps extends Gio.FilterOutputStream_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.FilterOutputStream

    filter?: MimeFilter | null
}

interface FilterOutputStream {

    // Own properties of Camel-1.2.Camel.FilterOutputStream

    readonly filter: MimeFilter

    // Conflicting properties

    parent_instance: any

    // Own fields of Camel-1.2.Camel.FilterOutputStream

    parent: Gio.FilterOutputStream
    priv: FilterOutputStreamPrivate

    // Owm methods of Camel-1.2.Camel.FilterOutputStream

    /**
     * Gets the #CamelMimeFilter that is used by `filter_stream`.
     */
    get_filter(): MimeFilter

    // Class property signals of Camel-1.2.Camel.FilterOutputStream

    connect(sigName: "notify::filter", callback: (($obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::close-base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FilterOutputStream extends Gio.FilterOutputStream {

    // Own properties of Camel-1.2.Camel.FilterOutputStream

    static name: string
    static $gtype: GObject.GType<FilterOutputStream>

    // Constructors of Camel-1.2.Camel.FilterOutputStream

    constructor(config?: FilterOutputStream_ConstructProps) 
    /**
     * Creates a new filtered output stream for the `base_stream`.
     * @constructor 
     * @param base_stream a #GOutputStream
     * @param filter a #CamelMimeFilter
     */
    constructor(base_stream: Gio.OutputStream, filter: MimeFilter) 
    /**
     * Creates a new filtered output stream for the `base_stream`.
     * @constructor 
     * @param base_stream a #GOutputStream
     * @param filter a #CamelMimeFilter
     */
    static new(base_stream: Gio.OutputStream, filter: MimeFilter): FilterOutputStream
    _init(config?: FilterOutputStream_ConstructProps): void
}

interface Folder_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.Folder

    /**
     * The folder's description.
     */
    description?: string | null
    /**
     * The folder's display name.
     */
    display_name?: string | null
    /**
     * The folder's fully qualified name.
     */
    full_name?: string | null
    /**
     * A #CamelThreeState persistent option of the folder,
     * which can override global option to mark messages
     * as seen after certain interval.
     */
    mark_seen?: ThreeState | null
    /**
     * Timeout in milliseconds for marking messages as seen.
     */
    mark_seen_timeout?: number | null
    /**
     * The #CamelStore to which the folder belongs.
     */
    parent_store?: Store | null
}

/**
 * Signal callback interface for `changed`
 */
interface Folder_ChangedSignalCallback {
    ($obj: Folder, changes: FolderChangeInfo): void
}

/**
 * Signal callback interface for `deleted`
 */
interface Folder_DeletedSignalCallback {
    ($obj: Folder): void
}

/**
 * Signal callback interface for `renamed`
 */
interface Folder_RenamedSignalCallback {
    ($obj: Folder, old_name: string): void
}

interface Folder {

    // Own properties of Camel-1.2.Camel.Folder

    /**
     * The folder's description.
     */
    description: string
    /**
     * The folder's display name.
     */
    display_name: string
    /**
     * The folder's fully qualified name.
     */
    full_name: string
    /**
     * A #CamelThreeState persistent option of the folder,
     * which can override global option to mark messages
     * as seen after certain interval.
     */
    mark_seen: ThreeState
    /**
     * Timeout in milliseconds for marking messages as seen.
     */
    mark_seen_timeout: number
    /**
     * The #CamelStore to which the folder belongs.
     */
    readonly parent_store: Store

    // Own fields of Camel-1.2.Camel.Folder

    parent: Object
    priv: FolderPrivate

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
     * @param io_priority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    append_message(message: MimeMessage, info: MessageInfo | null, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_append_message_finish().
     * @param result a #GAsyncResult
     */
    append_message_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    /**
     * Appends `message` to `folder`.  Only the flag and tag data from `info`
     * are used.  If `info` is %NULL, no flags or tags will be set.
     * @param message a #CamelMimeMessage
     * @param info a #CamelMessageInfo with additional flags/etc to set        on the new message, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    append_message_sync(message: MimeMessage, info: MessageInfo | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    /**
     * Emits the #CamelFolder::changed signal from an idle source on the
     * main loop.  The idle source's priority is #G_PRIORITY_LOW.
     * @param changes change information for `folder`
     */
    changed(changes: FolderChangeInfo): void
    /**
     * Compares two uids. The return value meaning is the same as in any other compare function.
     * 
     * Note that the default compare function expects a decimal number at the beginning of a uid,
     * thus if provider uses different uid values, then it should subclass this function.
     * @param uid1 The first uid.
     * @param uid2 the second uid.
     */
    cmp_uids(uid1: string, uid2: string): number
    /**
     * Searches the folder for count of messages matching the given search expression.
     * @param expression a search expression
     * @param cancellable a #GCancellable
     */
    count_by_expression(expression: string, cancellable: Gio.Cancellable | null): number
    /**
     * Marks `folder` as deleted and performs any required cleanup.
     * 
     * This also emits the #CamelFolder::deleted signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     */
    delete(): void
    /**
     * Thread-safe variation of camel_folder_get_description().
     * Use this function when accessing `folder` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dup_description(): string
    /**
     * Thread-safe variation of camel_folder_get_display_name().
     * Use this function when accessing `folder` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dup_display_name(): string
    /**
     * Thread-safe variation of camel_folder_get_full_name().
     * Use this function when accessing `folder` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dup_full_name(): string
    /**
     * Asynchronously deletes messages which have been marked as "DELETED".
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_folder_expunge_finish() to get the result of the operation.
     * @param io_priority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    expunge(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_expunge().
     * @param result a #GAsyncResult
     */
    expunge_finish(result: Gio.AsyncResult): boolean
    /**
     * Deletes messages which have been marked as "DELETED".
     * @param cancellable optional #GCancellable object, or %NULL
     */
    expunge_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Frees the provided array and its contents. Used by #CamelFolder
     * subclasses as an implementation for free_uids when the provided
     * information was created explicitly by the corresponding get_ call.
     * @param array an array of uids
     */
    free_deep(array: string[]): void
    /**
     * Frees the provided array but not its contents. Used by #CamelFolder
     * subclasses as an implementation for free_uids or free_summary when
     * the returned array needs to be freed but its contents come from
     * "static" information.
     * @param array an array of uids or #CamelMessageInfo
     */
    free_shallow(array: string[]): void
    /**
     * Frees the summary array returned by camel_folder_get_summary().
     * @param array the summary array to free
     */
    free_summary(array: MessageInfo[]): void
    /**
     * Frees the array of UIDs returned by camel_folder_get_uids().
     * @param array the array of uids to free
     */
    free_uids(array: string[]): void
    /**
     * Freezes the folder so that a series of operation can be performed
     * without "folder_changed" signals being emitted.  When the folder is
     * later thawed with camel_folder_thaw(), the suppressed signals will
     * be emitted.
     */
    freeze(): void
    get_deleted_message_count(): number
    /**
     * Returns a description of the folder suitable for displaying to the user.
     */
    get_description(): string
    /**
     * Returns the display name for the folder.  The fully qualified name
     * can be obtained with camel_folder_get_full_name().
     */
    get_display_name(): string
    get_filename(uid: string): string
    get_flags(): number
    get_folder_summary(): FolderSummary
    get_frozen_count(): number
    /**
     * Returns the fully qualified name of the folder.
     */
    get_full_name(): string
    get_mark_seen(): ThreeState
    get_mark_seen_timeout(): number
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
    get_message(message_uid: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    get_message_cached(message_uid: string, cancellable: Gio.Cancellable | null): MimeMessage | null
    get_message_count(): number
    /**
     * Finishes the operation started with camel_folder_get_message().
     * @param result a #GAsyncResult
     */
    get_message_finish(result: Gio.AsyncResult): MimeMessage
    get_message_flags(uid: string): number
    /**
     * Retrieve the #CamelMessageInfo for the specified `uid`.
     * @param uid the uid of a message
     */
    get_message_info(uid: string): MessageInfo | null
    /**
     * Gets the message corresponding to `message_uid` from `folder`.
     * @param message_uid the message UID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_message_sync(message_uid: string, cancellable: Gio.Cancellable | null): MimeMessage
    get_message_user_flag(uid: string, name: string): boolean
    get_message_user_tag(uid: string, name: string): string
    get_parent_store(): object | null
    get_permanent_flags(): number
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
    get_quota_info(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_get_quota_info().
     * Free the returned #CamelFolderQuotaInfo struct with
     * camel_folder_quota_info_free().
     * 
     * If quotas are not supported for `folder,` the function returns %NULL
     * and sets `error` to #G_IO_ERROR_NOT_SUPPORTED.
     * @param result a #GAsyncResult
     */
    get_quota_info_finish(result: Gio.AsyncResult): FolderQuotaInfo
    /**
     * Gets a list of known quotas for `folder`.  Free the returned
     * #CamelFolderQuotaInfo struct with camel_folder_quota_info_free().
     * 
     * If quotas are not supported for `folder,` the function returns %NULL
     * and sets `error` to #G_IO_ERROR_NOT_SUPPORTED.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_quota_info_sync(cancellable: Gio.Cancellable | null): FolderQuotaInfo
    /**
     * This returns the summary information for the folder. This array
     * should not be modified, and must be freed with
     * camel_folder_free_summary().
     */
    get_summary(): string[]
    /**
     * Get the list of UIDs available in a folder. This routine is useful
     * for finding what messages are available when the folder does not
     * support summaries. The returned array should not be modified, and
     * must be freed by passing it to camel_folder_free_uids().
     */
    get_uids(): string[]
    /**
     * Returns the known-uncached uids from a list of uids. It may return uids
     * which are locally cached but should never filter out a uid which is not
     * locally cached. Free the result by called camel_folder_free_uids().
     * Frees the array of UIDs returned by camel_folder_get_uids().
     * @param uids the array of uids to filter down to uncached ones.
     */
    get_uncached_uids(uids: string[]): string[]
    get_unread_message_count(): number
    /**
     * Get whether or not the folder has a summary.
     */
    has_summary_capability(): boolean
    is_frozen(): boolean
    /**
     * Locks `folder`. Unlock it with camel_folder_unlock().
     */
    lock(): void
    /**
     * Lets the `folder` know that it should refresh its content
     * the next time from fresh. This is useful for remote accounts,
     * to fully re-check the folder content against the server.
     */
    prepare_content_refresh(): void
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
    purge_message_cache(start_uid: string, end_uid: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_purge_message_cache().
     * @param result a #GAsyncResult
     */
    purge_message_cache_finish(result: Gio.AsyncResult): boolean
    /**
     * Delete the local cache of all messages between these uids.
     * @param start_uid the start message UID
     * @param end_uid the end message UID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    purge_message_cache_sync(start_uid: string, end_uid: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously synchronizes a folder's summary with its backing store.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_folder_refresh_info_finish() to get the result of the operation.
     * @param io_priority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refresh_info(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_refresh_info().
     * @param result a #GAsyncResult
     */
    refresh_info_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronizes a folder's summary with its backing store.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    refresh_info_sync(cancellable: Gio.Cancellable | null): boolean
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
    rename(new_name: string): void
    /**
     * Searches the folder for messages matching the given search expression.
     * @param expression a search expression
     * @param cancellable a #GCancellable
     */
    search_by_expression(expression: string, cancellable: Gio.Cancellable | null): string[]
    /**
     * Search a subset of uid's for an expression match.
     * @param expression search expression
     * @param uids array of uid's to match against.
     * @param cancellable a #GCancellable
     */
    search_by_uids(expression: string, uids: string[], cancellable: Gio.Cancellable | null): string[]
    /**
     * Free the result of a search as gotten by camel_folder_search_by_expression()
     * or camel_folder_search_by_uids().
     * @param result search results to free
     */
    search_free(result: string[]): void
    /**
     * Sets a description of the folder suitable for displaying to the user.
     * @param description a description of the folder
     */
    set_description(description: string): void
    /**
     * Sets the display name for the folder.
     * @param display_name a display name for the folder
     */
    set_display_name(display_name: string): void
    /**
     * Sets folder flags (bit-or of #CamelFolderFlags) for the `folder`.
     * @param folder_flags flags (bit-or of #CamelFolderFlags) to set
     */
    set_flags(folder_flags: number): void
    /**
     * Sets the fully qualified name of the folder.
     * @param full_name a fully qualified name for the folder
     */
    set_full_name(full_name: string): void
    /**
     * Sets whether folder locking (camel_folder_lock() and camel_folder_unlock())
     * should be used. When set to %FALSE, the two functions do nothing and simply
     * return.
     * @param skip_folder_lock a value to set
     */
    set_lock_async(skip_folder_lock: boolean): void
    /**
     * Sets whether the messages in this `folder` should be marked
     * as seen automatically. An inconsistent state means to use
     * global option.
     * @param mark_seen a #CamelThreeState as the value to set
     */
    set_mark_seen(mark_seen: ThreeState): void
    /**
     * Sets the `timeout` in milliseconds for marking messages
     * as seen in this `folder`. Whether the timeout is used
     * depends on camel_folder_get_mark_seen().
     * @param timeout a timeout in milliseconds
     */
    set_mark_seen_timeout(timeout: number): void
    /**
     * Sets those flags specified by `mask` to the values specified by `set`
     * on the indicated message. (This may or may not persist after the
     * folder or store is closed. See camel_folder_get_permanent_flags())
     * 
     * E.g. to set the deleted flag and clear the draft flag, use
     * camel_folder_set_message_flags (folder, uid, CAMEL_MESSAGE_DELETED|CAMEL_MESSAGE_DRAFT, CAMEL_MESSAGE_DELETED);
     * @param uid the UID of a message in `folder`
     * @param mask a mask of #CamelMessageFlags bit-or values to use
     * @param set the flags to ser, also bit-or of #CamelMessageFlags
     */
    set_message_flags(uid: string, mask: number, set: number): boolean
    set_message_user_flag(uid: string, name: string, value: boolean): void
    set_message_user_tag(uid: string, name: string, value: string): void
    /**
     * Sorts the array of UIDs.
     * @param uids array of uids
     */
    sort_uids(uids: string[]): void
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
    synchronize(expunge: boolean, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_synchronize().
     * @param result a #GAsyncResult
     */
    synchronize_finish(result: Gio.AsyncResult): boolean
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
    synchronize_message(message_uid: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_synchronize_message().
     * @param result a #GAsyncResult
     */
    synchronize_message_finish(result: Gio.AsyncResult): boolean
    /**
     * Ensure that a message identified by `message_uid` has been synchronized in
     * `folder` so that calling camel_folder_get_message() on it later will work
     * in offline mode.
     * @param message_uid a message UID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    synchronize_message_sync(message_uid: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronizes any changes that have been made to `folder` to its
     * backing store, optionally expunging deleted messages as well.
     * @param expunge whether to expunge after synchronizing
     * @param cancellable optional #GCancellable object, or %NULL
     */
    synchronize_sync(expunge: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets a #CamelFolderSummary of the folder. It consumes the `summary`.
     * 
     * This is supposed to be called only by the descendants of
     * the #CamelFolder and only at the construction time. Calling
     * this function twice yeilds to an error.
     * @param summary a #CamelFolderSummary
     */
    take_folder_summary(summary: FolderSummary): void
    /**
     * Thaws the folder and emits any pending folder_changed
     * signals.
     */
    thaw(): void
    /**
     * Asynchronously copies or moves messages from one folder to another.
     * If the `source` or `destination` folders have the same parent store,
     * this may be more efficient than using camel_folder_append_message().
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_folder_transfer_messages_to_finish() to get the result of the
     * operation.
     * @param message_uids message UIDs in `source`
     * @param destination the destination #CamelFolder
     * @param delete_originals whether or not to delete the original messages
     * @param io_priority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    transfer_messages_to(message_uids: string[], destination: Folder, delete_originals: boolean, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_transfer_messages_to().
     * @param result a #GAsyncResult
     */
    transfer_messages_to_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    /**
     * Copies or moves messages from one folder to another.  If the
     * `source` and `destination` folders have the same parent_store, this
     * may be more efficient than using camel_folder_append_message_sync().
     * @param message_uids message UIDs in `source`
     * @param destination the destination #CamelFolder
     * @param delete_originals whether or not to delete the original messages
     * @param cancellable optional #GCancellable object, or %NULL
     */
    transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
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
     */
    vfunc_append_message_sync(message: MimeMessage, info: MessageInfo | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    /**
     * Emits the #CamelFolder::changed signal from an idle source on the
     * main loop.  The idle source's priority is #G_PRIORITY_LOW.
     * @virtual 
     * @param changes change information for `folder`
     */
    vfunc_changed(changes: FolderChangeInfo): void
    /**
     * Compares two uids. The return value meaning is the same as in any other compare function.
     * 
     * Note that the default compare function expects a decimal number at the beginning of a uid,
     * thus if provider uses different uid values, then it should subclass this function.
     * @virtual 
     * @param uid1 The first uid.
     * @param uid2 the second uid.
     */
    vfunc_cmp_uids(uid1: string, uid2: string): number
    /**
     * Searches the folder for count of messages matching the given search expression.
     * @virtual 
     * @param expression a search expression
     * @param cancellable a #GCancellable
     */
    vfunc_count_by_expression(expression: string, cancellable: Gio.Cancellable | null): number
    vfunc_delete_(): void
    vfunc_deleted(): void
    /**
     * Deletes messages which have been marked as "DELETED".
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_expunge_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Frees the summary array returned by camel_folder_get_summary().
     * @virtual 
     * @param array the summary array to free
     */
    vfunc_free_summary(array: MessageInfo[]): void
    /**
     * Frees the array of UIDs returned by camel_folder_get_uids().
     * @virtual 
     * @param array the array of uids to free
     */
    vfunc_free_uids(array: string[]): void
    /**
     * Freezes the folder so that a series of operation can be performed
     * without "folder_changed" signals being emitted.  When the folder is
     * later thawed with camel_folder_thaw(), the suppressed signals will
     * be emitted.
     * @virtual 
     */
    vfunc_freeze(): void
    vfunc_get_filename(uid: string): string
    /**
     * Gets the message corresponding to `message_uid` from the `folder` cache,
     * if available locally. This should not do any network I/O, only check
     * if message is already downloaded and return it quickly, not being
     * blocked by the folder's lock. Returning NULL is not considered as
     * an error, it just means that the message is still to-be-downloaded.
     * 
     * Note: This function is called automatically within camel_folder_get_message_sync().
     * @virtual 
     * @param message_uid the message UID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_get_message_cached(message_uid: string, cancellable: Gio.Cancellable | null): MimeMessage | null
    vfunc_get_message_count(): number
    vfunc_get_message_flags(uid: string): number
    /**
     * Retrieve the #CamelMessageInfo for the specified `uid`.
     * @virtual 
     * @param uid the uid of a message
     */
    vfunc_get_message_info(uid: string): MessageInfo | null
    /**
     * Gets the message corresponding to `message_uid` from `folder`.
     * @virtual 
     * @param message_uid the message UID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_get_message_sync(message_uid: string, cancellable: Gio.Cancellable | null): MimeMessage
    vfunc_get_message_user_flag(uid: string, name: string): boolean
    vfunc_get_message_user_tag(uid: string, name: string): string
    vfunc_get_permanent_flags(): number
    /**
     * Gets a list of known quotas for `folder`.  Free the returned
     * #CamelFolderQuotaInfo struct with camel_folder_quota_info_free().
     * 
     * If quotas are not supported for `folder,` the function returns %NULL
     * and sets `error` to #G_IO_ERROR_NOT_SUPPORTED.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_get_quota_info_sync(cancellable: Gio.Cancellable | null): FolderQuotaInfo
    /**
     * This returns the summary information for the folder. This array
     * should not be modified, and must be freed with
     * camel_folder_free_summary().
     * @virtual 
     */
    vfunc_get_summary(): string[]
    /**
     * Get the list of UIDs available in a folder. This routine is useful
     * for finding what messages are available when the folder does not
     * support summaries. The returned array should not be modified, and
     * must be freed by passing it to camel_folder_free_uids().
     * @virtual 
     */
    vfunc_get_uids(): string[]
    /**
     * Returns the known-uncached uids from a list of uids. It may return uids
     * which are locally cached but should never filter out a uid which is not
     * locally cached. Free the result by called camel_folder_free_uids().
     * Frees the array of UIDs returned by camel_folder_get_uids().
     * @virtual 
     * @param uids the array of uids to filter down to uncached ones.
     */
    vfunc_get_uncached_uids(uids: string[]): string[]
    vfunc_has_search_capability(): boolean
    vfunc_is_frozen(): boolean
    /**
     * Lets the `folder` know that it should refresh its content
     * the next time from fresh. This is useful for remote accounts,
     * to fully re-check the folder content against the server.
     * @virtual 
     */
    vfunc_prepare_content_refresh(): void
    /**
     * Delete the local cache of all messages between these uids.
     * @virtual 
     * @param start_uid the start message UID
     * @param end_uid the end message UID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_purge_message_cache_sync(start_uid: string, end_uid: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronizes a folder's summary with its backing store.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_refresh_info_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Marks `folder` as renamed.
     * 
     * This also emits the #CamelFolder::renamed signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * NOTE: This is an internal function used by camel stores, no locking
     * is performed on the folder.
     * @virtual 
     * @param new_name new name for the folder
     */
    vfunc_rename(new_name: string): void
    vfunc_renamed(old_name: string): void
    /**
     * Searches the folder for messages matching the given search expression.
     * @virtual 
     * @param expression a search expression
     * @param cancellable a #GCancellable
     */
    vfunc_search_by_expression(expression: string, cancellable: Gio.Cancellable | null): string[]
    /**
     * Search a subset of uid's for an expression match.
     * @virtual 
     * @param expression search expression
     * @param uids array of uid's to match against.
     * @param cancellable a #GCancellable
     */
    vfunc_search_by_uids(expression: string, uids: string[], cancellable: Gio.Cancellable | null): string[]
    /**
     * Free the result of a search as gotten by camel_folder_search_by_expression()
     * or camel_folder_search_by_uids().
     * @virtual 
     * @param result search results to free
     */
    vfunc_search_free(result: string[]): void
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
     */
    vfunc_set_message_flags(uid: string, mask: number, set: number): boolean
    vfunc_set_message_user_flag(uid: string, name: string, value: boolean): void
    vfunc_set_message_user_tag(uid: string, name: string, value: string): void
    /**
     * Sorts the array of UIDs.
     * @virtual 
     * @param uids array of uids
     */
    vfunc_sort_uids(uids: string[]): void
    /**
     * Ensure that a message identified by `message_uid` has been synchronized in
     * `folder` so that calling camel_folder_get_message() on it later will work
     * in offline mode.
     * @virtual 
     * @param message_uid a message UID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_synchronize_message_sync(message_uid: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronizes any changes that have been made to `folder` to its
     * backing store, optionally expunging deleted messages as well.
     * @virtual 
     * @param expunge whether to expunge after synchronizing
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_synchronize_sync(expunge: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Thaws the folder and emits any pending folder_changed
     * signals.
     * @virtual 
     */
    vfunc_thaw(): void
    /**
     * Copies or moves messages from one folder to another.  If the
     * `source` and `destination` folders have the same parent_store, this
     * may be more efficient than using camel_folder_append_message_sync().
     * @virtual 
     * @param message_uids message UIDs in `source`
     * @param destination the destination #CamelFolder
     * @param delete_originals whether or not to delete the original messages
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]

    // Own signals of Camel-1.2.Camel.Folder

    connect(sigName: "changed", callback: Folder_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Folder_ChangedSignalCallback): number
    emit(sigName: "changed", changes: FolderChangeInfo, ...args: any[]): void
    connect(sigName: "deleted", callback: Folder_DeletedSignalCallback): number
    connect_after(sigName: "deleted", callback: Folder_DeletedSignalCallback): number
    emit(sigName: "deleted", ...args: any[]): void
    connect(sigName: "renamed", callback: Folder_RenamedSignalCallback): number
    connect_after(sigName: "renamed", callback: Folder_RenamedSignalCallback): number
    emit(sigName: "renamed", old_name: string, ...args: any[]): void

    // Class property signals of Camel-1.2.Camel.Folder

    connect(sigName: "notify::description", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::mark-seen", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mark-seen", ...args: any[]): void
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mark-seen-timeout", ...args: any[]): void
    connect(sigName: "notify::parent-store", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-store", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-store", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Folder extends Object {

    // Own properties of Camel-1.2.Camel.Folder

    static name: string
    static $gtype: GObject.GType<Folder>

    // Constructors of Camel-1.2.Camel.Folder

    constructor(config?: Folder_ConstructProps) 
    _init(config?: Folder_ConstructProps): void
    static threaded_messages_dump(c: FolderThreadNode): number
}

interface FolderSearch_ConstructProps extends GObject.Object_ConstructProps {
}

interface FolderSearch {

    // Own fields of Camel-1.2.Camel.FolderSearch

    parent: GObject.Object
    priv: FolderSearchPrivate

    // Owm methods of Camel-1.2.Camel.FolderSearch

    /**
     * Run a search.  Search must have had Folder already set on it, and
     * it must implement summaries.
     * @param expr a search expression to run
     * @param cancellable a #GCancellable
     */
    count(expr: string, cancellable: Gio.Cancellable | null): number
    /**
     * Frees result of camel_folder_search_search() call.
     * @param result a result to free
     */
    free_result(result: string[] | null): void
    get_current_message_info(): MessageInfo | null
    get_current_summary(): string[]
    get_folder(): Folder
    get_only_cached_messages(): boolean
    get_summary(): string[]
    get_summary_empty(): boolean
    /**
     * Run a search.  Search must have had Folder already set on it, and
     * it must implement summaries.
     * @param expr a search expression to run
     * @param uids to search against, NULL for all uid's.
     * @param cancellable a #GCancellable
     */
    search(expr: string, uids: string[], cancellable: Gio.Cancellable | null): string[]
    /**
     * Set the index representing the contents of all messages
     * in this folder.  If this is not set, then the folder implementation
     * should sub-class the CamelFolderSearch and provide its own
     * body-contains function.
     * @param body_index a #CamelIndex
     */
    set_body_index(body_index: Index | null): void
    /**
     * Sets, or unsets, the `info` as the currently processing #CamelMessageInfo.
     * The function adds its own reference to `info,` if not %NULL.
     * @param info a #CamelMessageInfo
     */
    set_current_message_info(info: MessageInfo | null): void
    /**
     * Set the folder attribute of the search. This can be used to perform a slow-search
     * when indexes and so forth are not available. Or for use by subclasses.
     * @param folder a #CamelFolder
     */
    set_folder(folder: Folder): void
    /**
     * Sets whether only locally cached messages can be searched. The default
     * value is %FALSE, which means that when a message is required and it is
     * not available locally, then it is downloaded from the server, if possible.
     * @param only_cached_messages a value to set
     */
    set_only_cached_messages(only_cached_messages: boolean): void
    /**
     * Set the array of summary objects representing the span of the search.
     * 
     * If this is not set, then a subclass must provide the functions
     * for searching headers and for the match-all operator.
     * @param summary An array of UID-s of #CamelMessageInfo.
     */
    set_summary(summary: string[]): void
    /**
     * Sets, or unsets, the `info` as the currently processing #CamelMessageInfo.
     * Unlike camel_folder_search_set_current_message_info(), this function
     * assumes ownership of the `info,` if not %NULL.
     * @param info a #CamelMessageInfo
     */
    take_current_message_info(info: MessageInfo | null): void

    // Class property signals of Camel-1.2.Camel.FolderSearch

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FolderSearch extends GObject.Object {

    // Own properties of Camel-1.2.Camel.FolderSearch

    static name: string
    static $gtype: GObject.GType<FolderSearch>

    // Constructors of Camel-1.2.Camel.FolderSearch

    constructor(config?: FolderSearch_ConstructProps) 
    /**
     * Create a new CamelFolderSearch object.
     * 
     * A CamelFolderSearch is a subclassable, extensible s-exp
     * evaluator which enforces a particular set of s-expressions.
     * Particular methods may be overriden by an implementation to
     * implement a search for any sort of backend.
     * @constructor 
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
     */
    static new(): FolderSearch
    _init(config?: FolderSearch_ConstructProps): void
    /**
     * Increases time `t` by the given number of months (or decreases, if
     * `months` is negative).
     * @param t Initial time
     * @param months number of months to add or subtract
     */
    static util_add_months(t: number, months: number): number
    /**
     * Compares date portion of the two date-time values, first converted
     * into the local time zone. The returned value is like with strcmp().
     * @param datetime1 a time_t-like value of the first date-time
     * @param datetime2 a time_t-like value of the second date-time
     */
    static util_compare_date(datetime1: number, datetime2: number): number
    /**
     * Calculates a hash of the Message-ID header value `message_id`.
     * @param message_id a raw Message-ID header value
     * @param needs_decode whether the `message_id` requires camel_header_msgid_decode() first
     */
    static util_hash_message_id(message_id: string, needs_decode: boolean): number
    /**
     * Implementation of 'make-time' function, which expects one argument,
     * a string or an integer, to be converted into time_t.
     * @param argc number of arguments in `argv`
     * @param argv array or arguments
     */
    static util_make_time(argc: number, argv: SExpResult): number
}

interface FolderSummary_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.FolderSummary

    /**
     * The #CamelFolder to which the folder summary belongs.
     */
    folder?: Folder | null
}

/**
 * Signal callback interface for `changed`
 */
interface FolderSummary_ChangedSignalCallback {
    ($obj: FolderSummary): void
}

interface FolderSummary {

    // Own properties of Camel-1.2.Camel.FolderSummary

    /**
     * How many deleted infos is saved in a summary.
     */
    readonly deleted_count: number
    /**
     * The #CamelFolder to which the folder summary belongs.
     */
    readonly folder: Folder
    /**
     * How many junk infos is saved in a summary.
     */
    readonly junk_count: number
    /**
     * How many junk and not deleted infos is saved in a summary.
     */
    readonly junk_not_deleted_count: number
    /**
     * How many infos is saved in a summary.
     */
    readonly saved_count: number
    /**
     * How many unread infos is saved in a summary.
     */
    readonly unread_count: number
    /**
     * How many visible (not deleted and not junk) infos is saved in a summary.
     */
    readonly visible_count: number

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
     * @param force_keep_uid whether to keep set UID of the `info`
     */
    add(info: MessageInfo, force_keep_uid?: boolean): void
    /**
     * Check if the uid is valid. This isn't very efficient, so it shouldn't be called iteratively.
     * @param uid a uid
     */
    check_uid(uid: string): boolean
    /**
     * Empty the summary contents.
     */
    clear(): boolean
    /**
     * Get the number of summary items stored in this summary.
     */
    count(): number
    /**
     * Retrieve a summary item by uid.
     * 
     * A referenced to the summary item is returned, which may be
     * ref'd or free'd as appropriate.
     * @param uid a uid
     */
    get(uid: string): MessageInfo | null
    /**
     * Obtain a copy of the summary array.  This is done atomically,
     * so cannot contain empty entries.
     * 
     * Free with camel_folder_summary_free_array()
     */
    get_array(): string[]
    /**
     * Returns an array of changed UID-s. A UID is considered changed
     * when its corresponding CamelMesageInfo is 'dirty' or when it has
     * set the #CAMEL_MESSAGE_FOLDER_FLAGGED flag.
     */
    get_changed(): string[]
    get_deleted_count(): number
    get_flags(): number
    get_folder(): object | null
    /**
     * Returns hash of current stored 'uids' in summary, where key is 'uid'
     * from the string pool, and value is 1. The returned pointer should
     * be freed with g_hash_table_destroy().
     * 
     * Note: When searching for values always use uids from the string pool.
     */
    get_hash(): GLib.HashTable
    get_index(): Index | null
    /**
     * Retrieve CamelMessageInfo::flags for a message info with UID `uid`.
     * This is much quicker than camel_folder_summary_get(), because it
     * doesn't require reading the message info from a disk.
     * @param uid a uid
     */
    get_info_flags(uid: string): number
    get_junk_count(): number
    get_junk_not_deleted_count(): number
    get_next_uid(): number
    get_saved_count(): number
    get_timestamp(): number
    get_unread_count(): number
    get_version(): number
    get_visible_count(): number
    /**
     * Loads a summary header for the `summary,` which corresponds to `folder_name`
     * provided by `store`.
     * @param store a #CamelStore
     * @param folder_name a folder name corresponding to `summary`
     */
    header_load(store: object | null, folder_name: string): boolean
    /**
     * Saves summary header information into the disk. The function does
     * nothing, if the summary doesn't support save to disk.
     */
    header_save(): boolean
    /**
     * Create a new info record from a header.
     * @param headers rfc822 headers as #CamelNameValueArray
     */
    info_new_from_headers(headers: NameValueArray): MessageInfo
    /**
     * Create a summary item from a message.
     * @param message a #CamelMimeMessage object
     */
    info_new_from_message(message: MimeMessage): MessageInfo
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
    info_new_from_parser(parser: MimeParser): MessageInfo
    /**
     * Loads the summary from the disk. It also saves any pending
     * changes first.
     */
    load(): boolean
    /**
     * Locks `summary`. Unlock it with camel_folder_summary_unlock().
     */
    lock(): void
    /**
     * Generate a new unique uid value as an integer.  This
     * may be used to create a unique sequence of numbers.
     */
    next_uid(): number
    /**
     * Retrieve the next uid, but as a formatted string.
     */
    next_uid_string(): string
    peek_loaded(uid: string): MessageInfo | null
    /**
     * Loads all infos into memory, if they are not yet and ensures
     * they will not be freed in next couple minutes. Call this function
     * before any mass operation or when all message infos will be needed,
     * for better performance.
     */
    prepare_fetch_all(): void
    /**
     * Remove a specific `info` record from the summary.
     * @param info a #CamelMessageInfo
     */
    remove(info: MessageInfo): boolean
    /**
     * Remove a specific info record from the summary, by `uid`.
     * @param uid a uid
     */
    remove_uid(uid: string): boolean
    /**
     * Remove a specific info record from the summary, by `uid`.
     * @param uids a GList of uids
     */
    remove_uids(uids: string[]): boolean
    /**
     * Updates internal counts based on the flags in `info`.
     * @param info a #CamelMessageInfo
     */
    replace_flags(info: MessageInfo): boolean
    /**
     * Saves the content of the `summary` to disk. It does nothing,
     * when the summary is not changed or when it doesn't support
     * permanent save.
     */
    save(): boolean
    /**
     * Sets flags of the `summary,` a bit-or of #CamelFolderSummaryFlags.
     * @param flags flags to set
     */
    set_flags(flags: number): void
    /**
     * Set the index used to index body content.  If the index is %NULL, or
     * not set (the default), no indexing of body content will take place.
     * @param index a #CamelIndex
     */
    set_index(index: Index | null): void
    /**
     * Set the next minimum uid available.  This can be used to
     * ensure new uid's do not clash with existing uid's.
     * @param uid The next minimum uid to assign.  To avoid clashing uid's, set this to the uid of a given messages + 1.
     */
    set_next_uid(uid: number): void
    /**
     * Sets timestamp of the `summary,` provided by the descendants. This doesn't
     * change the 'dirty' flag of the `summary`.
     * @param timestamp a timestamp to set
     */
    set_timestamp(timestamp: number): void
    /**
     * Sets version of the `summary`.
     * @param version version to set
     */
    set_version(version: number): void
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
     */
    vfunc_message_info_from_uid(uid: string): MessageInfo | null
    /**
     * Create a new info record from a header.
     * @virtual 
     * @param headers rfc822 headers as #CamelNameValueArray
     */
    vfunc_message_info_new_from_headers(headers: NameValueArray): MessageInfo
    /**
     * Create a summary item from a message.
     * @virtual 
     * @param message a #CamelMimeMessage object
     */
    vfunc_message_info_new_from_message(message: MimeMessage): MessageInfo
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
     */
    vfunc_message_info_new_from_parser(parser: MimeParser): MessageInfo
    /**
     * Retrieve the next uid, but as a formatted string.
     * @virtual 
     */
    vfunc_next_uid_string(): string
    vfunc_prepare_fetch_all(): void
    vfunc_summary_header_load(fir: object | null): boolean
    vfunc_summary_header_save(): object | null

    // Own signals of Camel-1.2.Camel.FolderSummary

    connect(sigName: "changed", callback: FolderSummary_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: FolderSummary_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Camel-1.2.Camel.FolderSummary

    connect(sigName: "notify::deleted-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deleted-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deleted-count", ...args: any[]): void
    connect(sigName: "notify::folder", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folder", ...args: any[]): void
    connect(sigName: "notify::junk-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::junk-count", ...args: any[]): void
    connect(sigName: "notify::junk-not-deleted-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-not-deleted-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::junk-not-deleted-count", ...args: any[]): void
    connect(sigName: "notify::saved-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::saved-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::saved-count", ...args: any[]): void
    connect(sigName: "notify::unread-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unread-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unread-count", ...args: any[]): void
    connect(sigName: "notify::visible-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FolderSummary extends GObject.Object {

    // Own properties of Camel-1.2.Camel.FolderSummary

    static name: string
    static $gtype: GObject.GType<FolderSummary>

    // Constructors of Camel-1.2.Camel.FolderSummary

    constructor(config?: FolderSummary_ConstructProps) 
    /**
     * Create a new #CamelFolderSummary object.
     * @constructor 
     * @param folder parent #CamelFolder object
     */
    constructor(folder: Folder) 
    /**
     * Create a new #CamelFolderSummary object.
     * @constructor 
     * @param folder parent #CamelFolder object
     */
    static new(folder: Folder): FolderSummary
    _init(config?: FolderSummary_ConstructProps): void
    /**
     * Free's array and its elements returned from camel_folder_summary_get_array().
     * @param array a #GPtrArray returned from camel_folder_summary_get_array()
     */
    static free_array(array: string[]): void
}

interface GpgContext_ConstructProps extends CipherContext_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.GpgContext

    always_trust?: boolean | null
    prefer_inline?: boolean | null
}

interface GpgContext {

    // Own properties of Camel-1.2.Camel.GpgContext

    always_trust: boolean
    prefer_inline: boolean

    // Own fields of Camel-1.2.Camel.GpgContext

    parent: CipherContext
    priv: GpgContextPrivate

    // Owm methods of Camel-1.2.Camel.GpgContext

    get_always_trust(): boolean
    get_prefer_inline(): boolean
    /**
     * Sets the `always_trust` flag on the gpg context which is used for
     * encryption.
     * @param always_trust always trust flag
     */
    set_always_trust(always_trust: boolean): void
    /**
     * Sets the `prefer_inline` flag on the gpg context.
     * @param prefer_inline whether prefer inline sign/encrypt
     */
    set_prefer_inline(prefer_inline: boolean): void

    // Class property signals of Camel-1.2.Camel.GpgContext

    connect(sigName: "notify::always-trust", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-trust", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-trust", ...args: any[]): void
    connect(sigName: "notify::prefer-inline", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefer-inline", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefer-inline", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GpgContext extends CipherContext {

    // Own properties of Camel-1.2.Camel.GpgContext

    static name: string
    static $gtype: GObject.GType<GpgContext>

    // Constructors of Camel-1.2.Camel.GpgContext

    constructor(config?: GpgContext_ConstructProps) 
    /**
     * Creates a new gpg cipher context object.
     * @constructor 
     * @param session session
     */
    constructor(session: Session) 
    /**
     * Creates a new gpg cipher context object.
     * @constructor 
     * @param session session
     */
    static new(session: Session): GpgContext
    _init(config?: GpgContext_ConstructProps): void
}

interface HTMLParser_ConstructProps extends GObject.Object_ConstructProps {
}

interface HTMLParser {

    // Own fields of Camel-1.2.Camel.HTMLParser

    parent: GObject.Object
    priv: HTMLParserPrivate

    // Owm methods of Camel-1.2.Camel.HTMLParser

    attr(name: string): string
    /**
     * Provides parsed array of values and attributes. Both arrays are
     * owned by the `hp`.
     * @param values an output #GPtrArray with values, or %NULL
     */
    attr_list(values: string[] | null): [ /* returnType */ string[], /* values */ string[] | null ]
    left(lenp: number): string
    set_data(start: string, len?: number, last?: number): void

    // Overloads of set_data

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
    set_data(key: string, data?: object | null): void
    set_data(...args: any[]): any
    set_data(args_or_key: any[] | string, data?: object | null): void | any
    step(datap: string, lenp: number): HTMLParserState
    tag(): string

    // Class property signals of Camel-1.2.Camel.HTMLParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTMLParser extends GObject.Object {

    // Own properties of Camel-1.2.Camel.HTMLParser

    static name: string
    static $gtype: GObject.GType<HTMLParser>

    // Constructors of Camel-1.2.Camel.HTMLParser

    constructor(config?: HTMLParser_ConstructProps) 
    /**
     * Create a new CamelHTMLParser object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new CamelHTMLParser object.
     * @constructor 
     */
    static new(): HTMLParser
    _init(config?: HTMLParser_ConstructProps): void
}

interface Index_ConstructProps extends GObject.Object_ConstructProps {
}

interface Index {

    // Own fields of Camel-1.2.Camel.Index

    parent: GObject.Object
    priv: IndexPrivate
    path: string
    version: number
    flags: number
    state: number
    normalize: IndexNorm
    normalize_data: object

    // Owm methods of Camel-1.2.Camel.Index

    add_name(name: string): IndexName | null
    compress(): number
    construct(path: string, flags: number): void
    delete(): number
    /**
     * Deletes the given `name` from `index`.
     * @param name a name to delete
     */
    delete_name(name: string): void
    find(word: string): IndexCursor | null
    find_name(name: string): IndexCursor | null
    has_name(name: string): number
    rename(path: string): number
    set_normalize(func: IndexNorm): void
    sync(): number
    words(): IndexCursor | null
    write_name(idn: IndexName): number

    // Own virtual methods of Camel-1.2.Camel.Index

    vfunc_add_name(name: string): IndexName | null
    vfunc_compress(): number
    vfunc_delete_(): number
    /**
     * Deletes the given `name` from `index`.
     * @virtual 
     * @param name a name to delete
     */
    vfunc_delete_name(name: string): void
    vfunc_find(word: string): IndexCursor | null
    vfunc_find_name(name: string): IndexCursor | null
    vfunc_has_name(name: string): number
    vfunc_rename(path: string): number
    vfunc_sync(): number
    vfunc_words(): IndexCursor | null
    vfunc_write_name(idn: IndexName): number

    // Class property signals of Camel-1.2.Camel.Index

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Index extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Index

    static name: string
    static $gtype: GObject.GType<Index>

    // Constructors of Camel-1.2.Camel.Index

    constructor(config?: Index_ConstructProps) 
    _init(config?: Index_ConstructProps): void
}

interface IndexCursor_ConstructProps extends GObject.Object_ConstructProps {
}

interface IndexCursor {

    // Own fields of Camel-1.2.Camel.IndexCursor

    parent: GObject.Object
    priv: IndexCursorPrivate
    index: Index

    // Owm methods of Camel-1.2.Camel.IndexCursor

    next(): string

    // Own virtual methods of Camel-1.2.Camel.IndexCursor

    vfunc_next(): string

    // Class property signals of Camel-1.2.Camel.IndexCursor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IndexCursor extends GObject.Object {

    // Own properties of Camel-1.2.Camel.IndexCursor

    static name: string
    static $gtype: GObject.GType<IndexCursor>

    // Constructors of Camel-1.2.Camel.IndexCursor

    constructor(config?: IndexCursor_ConstructProps) 
    _init(config?: IndexCursor_ConstructProps): void
}

interface IndexName_ConstructProps extends GObject.Object_ConstructProps {
}

interface IndexName {

    // Own fields of Camel-1.2.Camel.IndexName

    parent: GObject.Object
    priv: IndexNamePrivate
    index: Index
    name: string
    buffer: Uint8Array
    words: GLib.HashTable

    // Owm methods of Camel-1.2.Camel.IndexName

    add_buffer(buffer: string, len: number): number
    add_word(word: string): void

    // Own virtual methods of Camel-1.2.Camel.IndexName

    vfunc_add_buffer(buffer: string, len: number): number
    vfunc_add_word(word: string): void

    // Class property signals of Camel-1.2.Camel.IndexName

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IndexName extends GObject.Object {

    // Own properties of Camel-1.2.Camel.IndexName

    static name: string
    static $gtype: GObject.GType<IndexName>

    // Constructors of Camel-1.2.Camel.IndexName

    constructor(config?: IndexName_ConstructProps) 
    _init(config?: IndexName_ConstructProps): void
}

interface InternetAddress_ConstructProps extends Address_ConstructProps {
}

interface InternetAddress {

    // Own fields of Camel-1.2.Camel.InternetAddress

    parent: Address
    priv: InternetAddressPrivate

    // Owm methods of Camel-1.2.Camel.InternetAddress

    /**
     * Add a new internet address to `addr`.
     * @param name name associated with the new address
     * @param address routing address associated with the new address
     */
    add(name: string, address: string): number
    /**
     * Ensures that all email address' domains will be ASCII encoded,
     * which means that any non-ASCII letters will be properly encoded.
     * This includes IDN (Internationalized Domain Names).
     */
    ensure_ascii_domains(): void
    /**
     * Find an address by address.
     * @param address address to lookup
     */
    find_address(address: string): [ /* returnType */ number, /* namep */ string | null ]
    /**
     * Find address by real name.
     * @param name name to lookup
     */
    find_name(name: string): [ /* returnType */ number, /* addressp */ string | null ]
    /**
     * Get the address at `index`.
     * @param index address's array index
     */
    get(index: number): [ /* returnType */ boolean, /* namep */ string | null, /* addressp */ string | null ]
    /**
     * Checks the addresses in `addr` for any suspicious characters in the domain
     * name and coverts those domains into their representation. In contrast to
     * camel_internet_address_ensure_ascii_domains(), this converts the domains
     * into ASCII only when needed, as returned by camel_hostname_utils_requires_ascii().
     */
    sanitize_ascii_domain(): boolean

    // Class property signals of Camel-1.2.Camel.InternetAddress

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InternetAddress extends Address {

    // Own properties of Camel-1.2.Camel.InternetAddress

    static name: string
    static $gtype: GObject.GType<InternetAddress>

    // Constructors of Camel-1.2.Camel.InternetAddress

    constructor(config?: InternetAddress_ConstructProps) 
    /**
     * Create a new #CamelInternetAddress object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CamelInternetAddress object.
     * @constructor 
     */
    static new(): InternetAddress

    // Overloads of new

    /**
     * Create a new #CamelAddress object.
     * @constructor 
     */
    static new(): Address
    _init(config?: InternetAddress_ConstructProps): void
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
    static encode_address(len: number | null, name: string, addr: string): string
    /**
     * Function to format a single address, suitable for display.
     * @param name a name, quotes may be stripped from it
     * @param addr an rfc822 routing address
     */
    static format_address(name: string, addr: string): string
}

interface KeyFile_ConstructProps extends GObject.Object_ConstructProps {
}

interface KeyFile {

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
     */
    read(start: _block_t, records: _key_t[] | null): number
    rename(path: string): number
    /**
     * Write a new list of records to the key file.
     * @param parent a #camel_block_t
     * @param records an array of #camel_key_t to write
     */
    write(parent: _block_t, records: _key_t[]): number

    // Class property signals of Camel-1.2.Camel.KeyFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class KeyFile extends GObject.Object {

    // Own properties of Camel-1.2.Camel.KeyFile

    static name: string
    static $gtype: GObject.GType<KeyFile>

    // Constructors of Camel-1.2.Camel.KeyFile

    constructor(config?: KeyFile_ConstructProps) 
    /**
     * Create a new key file.  A linked list of record blocks.
     * @constructor 
     * @param path a filename with path of the #CamelKeyFile to create
     * @param flags open flags
     * @param version Version string (header) of file.  Currently written but not checked.
     */
    constructor(path: string, flags: number, version: string) 
    /**
     * Create a new key file.  A linked list of record blocks.
     * @constructor 
     * @param path a filename with path of the #CamelKeyFile to create
     * @param flags open flags
     * @param version Version string (header) of file.  Currently written but not checked.
     */
    static new(path: string, flags: number, version: string): KeyFile
    _init(config?: KeyFile_ConstructProps): void
}

interface KeyTable_ConstructProps extends GObject.Object_ConstructProps {
}

interface KeyTable {

    // Own fields of Camel-1.2.Camel.KeyTable

    parent: GObject.Object
    priv: KeyTablePrivate

    // Owm methods of Camel-1.2.Camel.KeyTable

    add(key: string, data: _block_t, flags: number): _key_t
    lookup(keyid: _key_t, key: string, flags: number): _block_t
    next(next: _key_t, keyp: string, flagsp: number, datap: _block_t): _key_t
    set_data(keyid: _key_t, data?: _block_t): boolean

    // Overloads of set_data

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
    set_data(key: string, data?: object | null): void
    set_data(...args: any[]): any
    set_data(args_or_key: any[] | string, data?: object | null): boolean | void | any
    set_flags(keyid: _key_t, flags: number, set: number): boolean
    sync(): number

    // Class property signals of Camel-1.2.Camel.KeyTable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class KeyTable extends GObject.Object {

    // Own properties of Camel-1.2.Camel.KeyTable

    static name: string
    static $gtype: GObject.GType<KeyTable>

    // Constructors of Camel-1.2.Camel.KeyTable

    constructor(config?: KeyTable_ConstructProps) 
    constructor(bs: BlockFile, root: _block_t) 
    static new(bs: BlockFile, root: _block_t): KeyTable
    _init(config?: KeyTable_ConstructProps): void
}

interface LocalSettings_ConstructProps extends StoreSettings_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.LocalSettings

    filter_all?: boolean | null
    filter_junk?: boolean | null
    maildir_alt_flag_sep?: boolean | null
    path?: string | null
}

interface LocalSettings {

    // Own properties of Camel-1.2.Camel.LocalSettings

    filter_all: boolean
    filter_junk: boolean
    maildir_alt_flag_sep: boolean
    path: string

    // Owm methods of Camel-1.2.Camel.LocalSettings

    /**
     * Thread-safe variation of camel_local_settings_get_path().
     * Use this function when accessing `settings` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dup_path(): string
    /**
     * Returns whether apply filters in all folders.
     */
    get_filter_all(): boolean
    /**
     * Returns whether to check new messages for junk.
     */
    get_filter_junk(): boolean
    /**
     * Returns, whether the Maildir provider should use alternative
     * flag separator in the file name. When %TRUE, uses an exclamation
     * mark (!), when %FALSE, uses the colon (:). The default
     * is %FALSE, to be consistent with the Maildir specification.
     * The flag separator is flipped on the Windows build.
     */
    get_maildir_alt_flag_sep(): boolean
    /**
     * Returns the file path to the root of the local mail store.
     */
    get_path(): string
    /**
     * Sets whether to apply filters in all folders.
     * @param filter_all whether to apply filters in all folders
     */
    set_filter_all(filter_all: boolean): void
    /**
     * Sets whether to check new messages for junk.
     * @param filter_junk whether to check new messages for junk
     */
    set_filter_junk(filter_junk: boolean): void
    /**
     * Sets whether Maildir should use alternative flag separator.
     * See camel_local_settings_get_maildir_alt_flag_sep() for more
     * information on what it means.
     * 
     * Note: Change to this setting takes effect only for newly created
     *     Maildir stores.
     * @param maildir_alt_flag_sep value to set
     */
    set_maildir_alt_flag_sep(maildir_alt_flag_sep: boolean): void
    /**
     * Sets the file path to the root of the local mail store.  Any
     * trailing directory separator characters will be stripped off
     * of the #CamelLocalSettings:path property.
     * @param path the file path to the local store
     */
    set_path(path: string): void

    // Class property signals of Camel-1.2.Camel.LocalSettings

    connect(sigName: "notify::filter-all", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-all", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter-all", ...args: any[]): void
    connect(sigName: "notify::filter-junk", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-junk", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter-junk", ...args: any[]): void
    connect(sigName: "notify::maildir-alt-flag-sep", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maildir-alt-flag-sep", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maildir-alt-flag-sep", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::filter-inbox", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-inbox", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter-inbox", ...args: any[]): void
    connect(sigName: "notify::store-changes-interval", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-changes-interval", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::store-changes-interval", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class LocalSettings extends StoreSettings {

    // Own properties of Camel-1.2.Camel.LocalSettings

    static name: string
    static $gtype: GObject.GType<LocalSettings>

    // Constructors of Camel-1.2.Camel.LocalSettings

    constructor(config?: LocalSettings_ConstructProps) 
    _init(config?: LocalSettings_ConstructProps): void
}

interface Medium_ConstructProps extends DataWrapper_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.Medium

    content?: DataWrapper | null
}

interface Medium {

    // Own properties of Camel-1.2.Camel.Medium

    content: DataWrapper

    // Own fields of Camel-1.2.Camel.Medium

    parent: DataWrapper
    priv: MediumPrivate

    // Owm methods of Camel-1.2.Camel.Medium

    /**
     * Adds a header to a #CamelMedium.
     * @param name name of the header
     * @param value value of the header
     */
    add_header(name: string, value: string): void
    /**
     * Gets an array of all header name/value pairs. The values will be
     * decoded to UTF-8 for any headers that are recognized by Camel.
     * See also camel_medium_get_headers().
     */
    dup_headers(): NameValueArray
    /**
     * Gets a data wrapper that represents the content of the medium,
     * without its headers.
     */
    get_content(): DataWrapper | null
    /**
     * Gets the value of the named header in the medium, or %NULL if
     * it is unset. The caller should not modify or free the data.
     * 
     * If the header occurs more than once, only retrieve the first
     * instance of the header.  For multi-occuring headers, use
     * camel_medium_dup_headers() or camel_medium_get_headers().
     * @param name the name of the header
     */
    get_header(name: string): string | null
    /**
     * Gets an array of all header name/value pairs. The values will be
     * decoded to UTF-8 for any headers that are recognized by Camel.
     * See also camel_medium_dup_headers().
     */
    get_headers(): NameValueArray
    /**
     * Removes the named header from the medium.  All occurances of the
     * header are removed.
     * @param name the name of the header
     */
    remove_header(name: string): void
    /**
     * Sets the content of `medium` to be `content`.
     * @param content a #CamelDataWrapper object
     */
    set_content(content: DataWrapper | null): void
    /**
     * Sets the value of a header.  Any other occurances of the header
     * will be removed.  Setting a %NULL header can be used to remove
     * the header also.
     * @param name name of the header
     * @param value value of the header
     */
    set_header(name: string, value: string | null): void

    // Own virtual methods of Camel-1.2.Camel.Medium

    /**
     * Adds a header to a #CamelMedium.
     * @virtual 
     * @param name name of the header
     * @param value value of the header
     */
    vfunc_add_header(name: string, value: string): void
    /**
     * Gets an array of all header name/value pairs. The values will be
     * decoded to UTF-8 for any headers that are recognized by Camel.
     * See also camel_medium_get_headers().
     * @virtual 
     */
    vfunc_dup_headers(): NameValueArray
    /**
     * Gets a data wrapper that represents the content of the medium,
     * without its headers.
     * @virtual 
     */
    vfunc_get_content(): DataWrapper | null
    /**
     * Gets the value of the named header in the medium, or %NULL if
     * it is unset. The caller should not modify or free the data.
     * 
     * If the header occurs more than once, only retrieve the first
     * instance of the header.  For multi-occuring headers, use
     * camel_medium_dup_headers() or camel_medium_get_headers().
     * @virtual 
     * @param name the name of the header
     */
    vfunc_get_header(name: string): string | null
    /**
     * Gets an array of all header name/value pairs. The values will be
     * decoded to UTF-8 for any headers that are recognized by Camel.
     * See also camel_medium_dup_headers().
     * @virtual 
     */
    vfunc_get_headers(): NameValueArray
    /**
     * Removes the named header from the medium.  All occurances of the
     * header are removed.
     * @virtual 
     * @param name the name of the header
     */
    vfunc_remove_header(name: string): void
    /**
     * Sets the content of `medium` to be `content`.
     * @virtual 
     * @param content a #CamelDataWrapper object
     */
    vfunc_set_content(content: DataWrapper | null): void
    /**
     * Sets the value of a header.  Any other occurances of the header
     * will be removed.  Setting a %NULL header can be used to remove
     * the header also.
     * @virtual 
     * @param name name of the header
     * @param value value of the header
     */
    vfunc_set_header(name: string, value: string | null): void

    // Class property signals of Camel-1.2.Camel.Medium

    connect(sigName: "notify::content", callback: (($obj: Medium, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Medium, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Medium extends DataWrapper {

    // Own properties of Camel-1.2.Camel.Medium

    static name: string
    static $gtype: GObject.GType<Medium>

    // Constructors of Camel-1.2.Camel.Medium

    constructor(config?: Medium_ConstructProps) 
    _init(config?: Medium_ConstructProps): void
}

interface MessageInfo_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.MessageInfo

    /**
     * Flag, whether the info is currently aborting notifications. It is used to avoid
     * unnecessary 'folder-flagged' and 'dirty' flags changes and also to avoid
     * associated folder's "changed" signal.
     * f
     */
    abort_notifications?: boolean | null
    /**
     * CC address of the associated message.
     */
    cc?: string | null
    /**
     * Received date of the associated message.
     */
    date_received?: number | null
    /**
     * Sent Date of the associated message.
     */
    date_sent?: number | null
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
    folder_flagged?: boolean | null
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
    message_id?: number | null
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
    references?: object[] | null
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
    user_flags?: NamedFlags | null
    /**
     * User-defined headers of the associated message. Can be %NULL.
     */
    user_headers?: NameValueArray | null
    /**
     * User tags for the associated message. Can be %NULL.
     * Unlike user-flags, which can be set or not, the user-tags
     * can contain various values.
     */
    user_tags?: NameValueArray | null
}

interface MessageInfo {

    // Own properties of Camel-1.2.Camel.MessageInfo

    /**
     * Flag, whether the info is currently aborting notifications. It is used to avoid
     * unnecessary 'folder-flagged' and 'dirty' flags changes and also to avoid
     * associated folder's "changed" signal.
     * f
     */
    abort_notifications: boolean
    /**
     * CC address of the associated message.
     */
    cc: string
    /**
     * Received date of the associated message.
     */
    date_received: number
    /**
     * Sent Date of the associated message.
     */
    date_sent: number
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
    folder_flagged: boolean
    /**
     * The 'folder-flagged-stamp' is a stamp of the 'folder-flagged' flag. This stamp
     * changes whenever anything would mark the `mi` 'folder-flagged', regardless the `mi`
     * being already 'folder-flagged'. It can be used to recognize changes
     * on the 'folder-flagged' flag during the time.
     */
    readonly folder_flagged_stamp: number
    /**
     * From address of the associated message.
     */
    from: string
    /**
     * Headers of the associated message. Can be %NULL.
     */
    headers: NameValueArray
    /**
     * Encoded Message-ID of the associated message as a guint64 number,
     * partial MD5 sum. The value can be cast to #CamelSummaryMessageID.
     */
    message_id: number
    /**
     * Mailing list address of the associated message.
     */
    mlist: string
    /**
     * Body preview of the associated message. Can be %NULL.
     */
    preview: string
    /**
     * Encoded In-Reply-To and References headers of the associated message
     * as an array of guint64 numbers, partial MD5 sums. Each value can be
     * cast to #CamelSummaryMessageID.
     */
    references: object[]
    /**
     * Size of the associated message.
     */
    size: number
    /**
     * Subject of the associated message.
     */
    subject: string
    /**
     * The #CamelFolderSummary to which the message info belongs, or %NULL.
     * It can be set only during construction of the object.
     */
    readonly summary: FolderSummary
    /**
     * To address of the associated message.
     */
    to: string
    /**
     * A unique ID of the message in its folder.
     */
    uid: string
    /**
     * User flags for the associated message. Can be %NULL.
     * Unlike user-tags, which can contain various values, the user-flags
     * can only be set or not.
     */
    user_flags: NamedFlags
    /**
     * User-defined headers of the associated message. Can be %NULL.
     */
    user_headers: NameValueArray
    /**
     * User tags for the associated message. Can be %NULL.
     * Unlike user-flags, which can be set or not, the user-tags
     * can contain various values.
     */
    user_tags: NameValueArray

    // Own fields of Camel-1.2.Camel.MessageInfo

    parent: GObject.Object
    priv: MessageInfoPrivate

    // Owm methods of Camel-1.2.Camel.MessageInfo

    /**
     * Clones the `mi` as a new #CamelMessageInfo and eventually assigns
     * a new #CamelFolderSummary to it. If it's not set, then the same
     * summary as the one with `mi` is used.
     * @param assign_summary parent #CamelFolderSummary object, or %NULL, to set on the clone
     */
    clone(assign_summary: FolderSummary | null): MessageInfo
    /**
     * Dumps the mesasge info `mi` to stdout. This is meand for debugging
     * purposes only.
     */
    dump(): void
    /**
     * Duplicates array of headers for the `mi`.
     */
    dup_headers(): NameValueArray | null
    dup_preview(): string | null
    /**
     * Duplicates encoded In-Reply-To and References headers of the associated
     * message as an array of guint64 numbers, partial MD5 sums. Each value
     * can be cast to #CamelSummaryMessageID.
     */
    dup_references(): number[] | null
    dup_user_flags(): NamedFlags | null
    dup_user_header(name: string): string | null
    dup_user_headers(): NameValueArray | null
    dup_user_tag(name: string): string | null
    dup_user_tags(): NameValueArray | null
    /**
     * Freezes all the notifications until the camel_message_info_thaw_notifications() is called.
     * This function can be called multiple times, where the last thaw will do the notifications.
     */
    freeze_notifications(): void
    get_abort_notifications(): boolean
    get_cc(): string
    get_date_received(): number
    get_date_sent(): number
    get_dirty(): boolean
    get_flags(): number
    /**
     * The folder flagged flag is used to mark the message infor as being changed
     * and this change should be propagated to the remote store (server). This is
     * different from the 'dirty' flag, which is set for local changes only. It
     * can happen that the 'folder-flagged' flag is set, but the 'dirty' flag not.
     * 
     * This is only a convenient wrapper around CAMEL_MESSAGE_FOLDER_FLAGGED flag,
     * for better readiness of the code.
     */
    get_folder_flagged(): boolean
    /**
     * The 'folder-flagged-stamp' is a stamp of the 'folder-flagged' flag. This stamp
     * changes whenever anything would mark the `mi` as 'folder-flagged', regardless
     * the `mi` being already 'folder-flagged'. It can be used to recognize changes
     * on the 'folder-flagged' flag during the time.
     */
    get_folder_flagged_stamp(): number
    get_from(): string
    get_headers(): NameValueArray | null
    /**
     * Encoded Message-ID of the associated message as a guint64 number,
     * partial MD5 sum. The value can be cast to #CamelSummaryMessageID.
     */
    get_message_id(): number
    get_mlist(): string
    get_notifications_frozen(): boolean
    get_preview(): string | null
    /**
     * Gets encoded In-Reply-To and References headers of the associated
     * message as an array of guint64 numbers, partial MD5 sums. Each value
     * can be cast to #CamelSummaryMessageID.
     */
    get_references(): number[] | null
    get_size(): number
    get_subject(): string
    get_to(): string
    /**
     * Get the UID of the #mi.
     */
    get_uid(): string
    get_user_flag(name: string): boolean
    get_user_flags(): NamedFlags | null
    get_user_header(name: string): string | null
    get_user_headers(): NameValueArray | null
    get_user_tag(name: string): string | null
    get_user_tags(): NameValueArray | null
    /**
     * Load content of `mi` from the data stored in `record`. The `bdata_ptr` points
     * to the current position of the record->bdata, where the read can continue.
     * Use helper functions camel_util_bdata_get_number() and camel_util_bdata_get_string()
     * to read data from it and also move forward the *bdata_ptr.
     * 
     * After successful load of the `mi,` the 'dirty' flag is unset.
     * @param record a #CamelMIRecord to load the `mi` from
     * @param bdata_ptr a backend specific data (bdata) pointer
     */
    load(record: MIRecord, bdata_ptr: string): boolean
    /**
     * Get the UID of the #mi, duplicated on the Camel's string pool.
     * This is good for thread safety, though the UID should not change once set.
     */
    pooldup_uid(): string
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
    property_lock(): void
    /**
     * Releases a property lock, previously acquired with
     * camel_message_info_property_lock().
     */
    property_unlock(): void
    ref_summary(): object | null
    /**
     * Save the `mi` content to the message info record `record`. It can populate all
     * but the record->bdata value, which is set fro mthe `bdata_str`. Use helper functions
     * camel_util_bdata_put_number() and camel_util_bdata_put_string() to put data into the `bdata_str`.
     * @param record a #CamelMIRecord to populate
     * @param bdata_str a #GString with a string to save as backend specific data (bdata)
     */
    save(record: MIRecord, bdata_str: GLib.String): boolean
    /**
     * Marks the `mi` to abort any notifications, which means that it
     * will not influence 'dirty' and 'folder-flagged' flags in
     * the set/take functions, neither it will emit any GObject::notify
     * signals on change, nor associated folder's "changed" signal.
     * @param abort_notifications a state to set
     */
    set_abort_notifications(abort_notifications: boolean): void
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
    set_cc(cc: string | null): boolean
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
    set_date_received(date_received: number): boolean
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
    set_date_sent(date_sent: number): boolean
    /**
     * Marks the `mi` as dirty, which means a save to the local summary
     * is required.
     * @param dirty a dirty state to set
     */
    set_dirty(dirty: boolean): void
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
    set_flags(mask: number, set: number): boolean
    /**
     * Changes the folder-flagged flag to the `folder_flagged` value. See
     * camel_message_info_get_folder_flagged() for more information about
     * the use of this flag.
     * 
     * This is only a convenient wrapper around CAMEL_MESSAGE_FOLDER_FLAGGED flag,
     * for better readiness of the code.
     * @param folder_flagged a value to set to
     */
    set_folder_flagged(folder_flagged: boolean): boolean
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
    set_from(from: string | null): boolean
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
    set_message_id(message_id: number): boolean
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
    set_mlist(mlist: string | null): boolean
    /**
     * Set `preview` as the body preview of the associated message. Use %NULL or an empty
     * string to unset the value.
     * 
     * If the `mi` changed, the 'dirty' flag is set automatically, unless the `mi` is
     * aborting notifications. There is not emitted folder's "changed" signal for this `mi`.
     * @param preview message body preview, or %NULL
     */
    set_preview(preview: string | null): boolean
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
    set_size(size: number): boolean
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
    set_subject(subject: string | null): boolean
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
    set_to(to: string | null): boolean
    /**
     * Changes UID of the `mi` to `uid`. If it changes, the 'dirty' flag
     * of the `mi` is set too, unless the `mi` is aborting notifications. This change
     * does not influence the 'folder-flagged' flag.
     * @param uid a UID to set
     */
    set_uid(uid: string): boolean
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
    set_user_flag(name: string, state: boolean): boolean
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
    set_user_header(name: string, value: string | null): boolean
    /**
     * Set user tag `name` to `value,` or remove it, if `value` is %NULL.
     * 
     * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
     * set automatically, unless the `mi` is aborting notifications. There is also emitted
     * folder's "changed" signal for this `mi,` if necessary.
     * @param name user tag name
     * @param value user tag value, or %NULL to remove the user tag
     */
    set_user_tag(name: string, value: string | null): boolean
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
    take_headers(headers: NameValueArray | null): boolean
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
    take_references(references: number[] | null): boolean
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
    take_user_flags(user_flags: NamedFlags | null): boolean
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
    take_user_headers(headers: NameValueArray | null): boolean
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
    take_user_tags(user_tags: NameValueArray | null): boolean
    /**
     * Reverses the call of the camel_message_info_freeze_notifications().
     * If this is the last freeze, then the associated folder is also notified
     * about the change, if any happened during the freeze.
     */
    thaw_notifications(): void

    // Own virtual methods of Camel-1.2.Camel.MessageInfo

    /**
     * Clones the `mi` as a new #CamelMessageInfo and eventually assigns
     * a new #CamelFolderSummary to it. If it's not set, then the same
     * summary as the one with `mi` is used.
     * @virtual 
     * @param assign_summary parent #CamelFolderSummary object, or %NULL, to set on the clone
     */
    vfunc_clone(assign_summary: FolderSummary | null): MessageInfo
    vfunc_dup_user_flags(): NamedFlags | null
    vfunc_dup_user_tags(): NameValueArray | null
    vfunc_get_cc(): string
    vfunc_get_date_received(): number
    vfunc_get_date_sent(): number
    vfunc_get_flags(): number
    vfunc_get_from(): string
    vfunc_get_headers(): NameValueArray | null
    /**
     * Encoded Message-ID of the associated message as a guint64 number,
     * partial MD5 sum. The value can be cast to #CamelSummaryMessageID.
     * @virtual 
     */
    vfunc_get_message_id(): number
    vfunc_get_mlist(): string
    vfunc_get_preview(): string | null
    /**
     * Gets encoded In-Reply-To and References headers of the associated
     * message as an array of guint64 numbers, partial MD5 sums. Each value
     * can be cast to #CamelSummaryMessageID.
     * @virtual 
     */
    vfunc_get_references(): number[] | null
    vfunc_get_size(): number
    vfunc_get_subject(): string
    vfunc_get_to(): string
    vfunc_get_user_flag(name: string): boolean
    vfunc_get_user_flags(): NamedFlags | null
    vfunc_get_user_header(name: string): string | null
    vfunc_get_user_headers(): NameValueArray | null
    vfunc_get_user_tag(name: string): string | null
    vfunc_get_user_tags(): NameValueArray | null
    /**
     * Load content of `mi` from the data stored in `record`. The `bdata_ptr` points
     * to the current position of the record->bdata, where the read can continue.
     * Use helper functions camel_util_bdata_get_number() and camel_util_bdata_get_string()
     * to read data from it and also move forward the *bdata_ptr.
     * 
     * After successful load of the `mi,` the 'dirty' flag is unset.
     * @virtual 
     * @param record a #CamelMIRecord to load the `mi` from
     * @param bdata_ptr a backend specific data (bdata) pointer
     */
    vfunc_load(record: MIRecord | null, bdata_ptr: string): boolean
    /**
     * Save the `mi` content to the message info record `record`. It can populate all
     * but the record->bdata value, which is set fro mthe `bdata_str`. Use helper functions
     * camel_util_bdata_put_number() and camel_util_bdata_put_string() to put data into the `bdata_str`.
     * @virtual 
     * @param record a #CamelMIRecord to populate
     * @param bdata_str a #GString with a string to save as backend specific data (bdata)
     */
    vfunc_save(record: MIRecord | null, bdata_str: GLib.String): boolean
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
     */
    vfunc_set_cc(cc: string | null): boolean
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
     * @param date_received a received date to set
     */
    vfunc_set_date_received(date_received: number): boolean
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
     * @param date_sent a sent date to set
     */
    vfunc_set_date_sent(date_sent: number): boolean
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
     */
    vfunc_set_flags(mask: number, set: number): boolean
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
     */
    vfunc_set_from(from: string | null): boolean
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
     * @param message_id a message id to set
     */
    vfunc_set_message_id(message_id: number): boolean
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
     */
    vfunc_set_mlist(mlist: string | null): boolean
    /**
     * Set `preview` as the body preview of the associated message. Use %NULL or an empty
     * string to unset the value.
     * 
     * If the `mi` changed, the 'dirty' flag is set automatically, unless the `mi` is
     * aborting notifications. There is not emitted folder's "changed" signal for this `mi`.
     * @virtual 
     * @param preview message body preview, or %NULL
     */
    vfunc_set_preview(preview: string | null): boolean
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
     */
    vfunc_set_size(size: number): boolean
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
     */
    vfunc_set_subject(subject: string | null): boolean
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
     */
    vfunc_set_to(to: string | null): boolean
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
     */
    vfunc_set_user_flag(name: string, state: boolean): boolean
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
     */
    vfunc_set_user_header(name: string, value: string | null): boolean
    /**
     * Set user tag `name` to `value,` or remove it, if `value` is %NULL.
     * 
     * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
     * set automatically, unless the `mi` is aborting notifications. There is also emitted
     * folder's "changed" signal for this `mi,` if necessary.
     * @virtual 
     * @param name user tag name
     * @param value user tag value, or %NULL to remove the user tag
     */
    vfunc_set_user_tag(name: string, value: string | null): boolean
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
     */
    vfunc_take_headers(headers: NameValueArray | null): boolean
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
     */
    vfunc_take_references(references: number[] | null): boolean
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
     * @param user_flags user flags to set
     */
    vfunc_take_user_flags(user_flags: NamedFlags | null): boolean
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
     */
    vfunc_take_user_headers(headers: NameValueArray | null): boolean
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
     * @param user_tags user tags to set
     */
    vfunc_take_user_tags(user_tags: NameValueArray | null): boolean

    // Class property signals of Camel-1.2.Camel.MessageInfo

    connect(sigName: "notify::abort-notifications", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-notifications", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abort-notifications", ...args: any[]): void
    connect(sigName: "notify::cc", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cc", ...args: any[]): void
    connect(sigName: "notify::date-received", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-received", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date-received", ...args: any[]): void
    connect(sigName: "notify::date-sent", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-sent", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date-sent", ...args: any[]): void
    connect(sigName: "notify::dirty", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dirty", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::folder-flagged", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folder-flagged", ...args: any[]): void
    connect(sigName: "notify::folder-flagged-stamp", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged-stamp", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folder-flagged-stamp", ...args: any[]): void
    connect(sigName: "notify::from", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from", ...args: any[]): void
    connect(sigName: "notify::headers", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers", ...args: any[]): void
    connect(sigName: "notify::message-id", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-id", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-id", ...args: any[]): void
    connect(sigName: "notify::mlist", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlist", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mlist", ...args: any[]): void
    connect(sigName: "notify::preview", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preview", ...args: any[]): void
    connect(sigName: "notify::references", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::references", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::subject", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subject", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::to", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::to", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::user-flags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-flags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-flags", ...args: any[]): void
    connect(sigName: "notify::user-headers", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-headers", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-headers", ...args: any[]): void
    connect(sigName: "notify::user-tags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-tags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-tags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MessageInfo extends GObject.Object {

    // Own properties of Camel-1.2.Camel.MessageInfo

    static name: string
    static $gtype: GObject.GType<MessageInfo>

    // Constructors of Camel-1.2.Camel.MessageInfo

    constructor(config?: MessageInfo_ConstructProps) 
    /**
     * Create a new #CamelMessageInfo object, optionally for given `summary`.
     * @constructor 
     * @param summary parent #CamelFolderSummary object, or %NULL
     */
    constructor(summary: FolderSummary | null) 
    /**
     * Create a new #CamelMessageInfo object, optionally for given `summary`.
     * @constructor 
     * @param summary parent #CamelFolderSummary object, or %NULL
     */
    static new(summary: FolderSummary | null): MessageInfo
    /**
     * Create a new #CamelMessageInfo pre-populated with info from
     * `headers`.
     * @constructor 
     * @param summary a #CamelFolderSummary object or %NULL
     * @param headers a #CamelNameValueArray
     */
    static new_from_headers(summary: FolderSummary | null, headers: NameValueArray): MessageInfo
    _init(config?: MessageInfo_ConstructProps): void
}

interface MessageInfoBase_ConstructProps extends MessageInfo_ConstructProps {
}

interface MessageInfoBase {

    // Own fields of Camel-1.2.Camel.MessageInfoBase

    parent: MessageInfo
    priv: MessageInfoBasePrivate

    // Class property signals of Camel-1.2.Camel.MessageInfoBase

    connect(sigName: "notify::abort-notifications", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-notifications", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abort-notifications", ...args: any[]): void
    connect(sigName: "notify::cc", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cc", ...args: any[]): void
    connect(sigName: "notify::date-received", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-received", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date-received", ...args: any[]): void
    connect(sigName: "notify::date-sent", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-sent", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date-sent", ...args: any[]): void
    connect(sigName: "notify::dirty", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dirty", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::folder-flagged", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folder-flagged", ...args: any[]): void
    connect(sigName: "notify::folder-flagged-stamp", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged-stamp", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folder-flagged-stamp", ...args: any[]): void
    connect(sigName: "notify::from", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from", ...args: any[]): void
    connect(sigName: "notify::headers", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers", ...args: any[]): void
    connect(sigName: "notify::message-id", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-id", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-id", ...args: any[]): void
    connect(sigName: "notify::mlist", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlist", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mlist", ...args: any[]): void
    connect(sigName: "notify::preview", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preview", ...args: any[]): void
    connect(sigName: "notify::references", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::references", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::subject", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subject", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::to", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::to", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::user-flags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-flags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-flags", ...args: any[]): void
    connect(sigName: "notify::user-headers", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-headers", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-headers", ...args: any[]): void
    connect(sigName: "notify::user-tags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-tags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-tags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MessageInfoBase extends MessageInfo {

    // Own properties of Camel-1.2.Camel.MessageInfoBase

    static name: string
    static $gtype: GObject.GType<MessageInfoBase>

    // Constructors of Camel-1.2.Camel.MessageInfoBase

    constructor(config?: MessageInfoBase_ConstructProps) 
    _init(config?: MessageInfoBase_ConstructProps): void
}

interface MimeFilter_ConstructProps extends GObject.Object_ConstructProps {
}

interface MimeFilter {

    // Own fields of Camel-1.2.Camel.MimeFilter

    parent: GObject.Object
    priv: MimeFilterPrivate
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
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
    /**
     * Passes the input buffer, `in,` through `filter` and generates an
     * output buffer, `out` and makes sure that all data is flushed to the
     * output buffer. This must be the last filtering call made, no
     * further calls to camel_mime_filter_filter() may be called on `filter`
     * until `filter` has been reset using camel_mime_filter_reset().
     * @param in_ input buffer
     * @param prespace amount of prespace
     */
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    /**
     * Passes the input buffer, `in,` through `filter` and generates an
     * output buffer, `out`.
     * @param in_ input buffer
     * @param prespace amount of prespace
     */
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    /**
     * Resets the state on `filter` so that it may be used again.
     */
    reset(): void
    /**
     * Ensure that `filter` has enough storage space to store `size` bytes
     * for filter output.
     * @param size requested amount of storage space
     * @param keep %TRUE to keep existing buffered data or %FALSE otherwise
     */
    set_size(size: number, keep: number): void

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
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    /**
     * Passes the input buffer, `in,` through `filter` and generates an
     * output buffer, `out`.
     * @virtual 
     * @param in_ input buffer
     * @param prespace amount of prespace
     */
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    /**
     * Resets the state on `filter` so that it may be used again.
     * @virtual 
     */
    vfunc_reset(): void

    // Class property signals of Camel-1.2.Camel.MimeFilter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilter extends GObject.Object {

    // Own properties of Camel-1.2.Camel.MimeFilter

    static name: string
    static $gtype: GObject.GType<MimeFilter>

    // Constructors of Camel-1.2.Camel.MimeFilter

    constructor(config?: MimeFilter_ConstructProps) 
    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilter_ConstructProps): void
}

interface MimeFilterBasic_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterBasic {

    // Own fields of Camel-1.2.Camel.MimeFilterBasic

    parent: MimeFilter
    priv: MimeFilterBasicPrivate

    // Class property signals of Camel-1.2.Camel.MimeFilterBasic

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterBasic extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterBasic

    static name: string
    static $gtype: GObject.GType<MimeFilterBasic>

    // Constructors of Camel-1.2.Camel.MimeFilterBasic

    constructor(config?: MimeFilterBasic_ConstructProps) 
    /**
     * Create a new #CamelMimeFilterBasic object of type `type`.
     * @constructor 
     * @param type a #CamelMimeFilterBasicType type
     */
    constructor(type: MimeFilterBasicType) 
    /**
     * Create a new #CamelMimeFilterBasic object of type `type`.
     * @constructor 
     * @param type a #CamelMimeFilterBasicType type
     */
    static new(type: MimeFilterBasicType): MimeFilterBasic

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterBasic_ConstructProps): void
}

interface MimeFilterBestenc_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterBestenc {

    // Own fields of Camel-1.2.Camel.MimeFilterBestenc

    parent: MimeFilter
    priv: MimeFilterBestencPrivate

    // Owm methods of Camel-1.2.Camel.MimeFilterBestenc

    /**
     * Gets the best charset that can be used to contain this content.
     */
    get_best_charset(): string
    /**
     * Get the best encoding, given specific constraints, that can be used to
     * encode a stream of bytes.
     * @param required maximum level of output encoding allowed.
     */
    get_best_encoding(required: BestencEncoding): TransferEncoding
    /**
     * Set the flags for subsequent operations.
     * @param flags bestenc filter flags
     */
    set_flags(flags: number): void

    // Class property signals of Camel-1.2.Camel.MimeFilterBestenc

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterBestenc extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterBestenc

    static name: string
    static $gtype: GObject.GType<MimeFilterBestenc>

    // Constructors of Camel-1.2.Camel.MimeFilterBestenc

    constructor(config?: MimeFilterBestenc_ConstructProps) 
    /**
     * Create a new #CamelMimeFilterBestenc object.
     * @constructor 
     * @param flags a bitmask of data required.
     */
    constructor(flags: number) 
    /**
     * Create a new #CamelMimeFilterBestenc object.
     * @constructor 
     * @param flags a bitmask of data required.
     */
    static new(flags: number): MimeFilterBestenc

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterBestenc_ConstructProps): void
}

interface MimeFilterCRLF_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterCRLF {

    // Own fields of Camel-1.2.Camel.MimeFilterCRLF

    parent: MimeFilter
    priv: MimeFilterCRLFPrivate

    // Owm methods of Camel-1.2.Camel.MimeFilterCRLF

    get_ensure_crlf_end(): boolean
    /**
     * When set to true, the filter will ensure that the output stream will
     * end with CRLF, in case it does not. The default is to not do that.
     * The option is used only when encoding the stream.
     * @param ensure_crlf_end value to set
     */
    set_ensure_crlf_end(ensure_crlf_end: boolean): void

    // Class property signals of Camel-1.2.Camel.MimeFilterCRLF

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterCRLF extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterCRLF

    static name: string
    static $gtype: GObject.GType<MimeFilterCRLF>

    // Constructors of Camel-1.2.Camel.MimeFilterCRLF

    constructor(config?: MimeFilterCRLF_ConstructProps) 
    /**
     * Create a new #CamelMimeFilterCRLF object.
     * @constructor 
     * @param direction encode vs decode
     * @param mode whether or not to perform SMTP dot-escaping
     */
    constructor(direction: MimeFilterCRLFDirection, mode: MimeFilterCRLFMode) 
    /**
     * Create a new #CamelMimeFilterCRLF object.
     * @constructor 
     * @param direction encode vs decode
     * @param mode whether or not to perform SMTP dot-escaping
     */
    static new(direction: MimeFilterCRLFDirection, mode: MimeFilterCRLFMode): MimeFilterCRLF

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterCRLF_ConstructProps): void
}

interface MimeFilterCanon_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterCanon {

    // Own fields of Camel-1.2.Camel.MimeFilterCanon

    parent: MimeFilter
    priv: MimeFilterCanonPrivate

    // Class property signals of Camel-1.2.Camel.MimeFilterCanon

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterCanon extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterCanon

    static name: string
    static $gtype: GObject.GType<MimeFilterCanon>

    // Constructors of Camel-1.2.Camel.MimeFilterCanon

    constructor(config?: MimeFilterCanon_ConstructProps) 
    /**
     * Create a new filter to canonicalise an input stream.
     * @constructor 
     * @param flags bitwise flags defining the behaviour of the filter
     */
    constructor(flags: MimeFilterCanonFlags) 
    /**
     * Create a new filter to canonicalise an input stream.
     * @constructor 
     * @param flags bitwise flags defining the behaviour of the filter
     */
    static new(flags: MimeFilterCanonFlags): MimeFilterCanon

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterCanon_ConstructProps): void
}

interface MimeFilterCharset_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterCharset {

    // Own fields of Camel-1.2.Camel.MimeFilterCharset

    parent: MimeFilter
    priv: MimeFilterCharsetPrivate

    // Class property signals of Camel-1.2.Camel.MimeFilterCharset

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterCharset extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterCharset

    static name: string
    static $gtype: GObject.GType<MimeFilterCharset>

    // Constructors of Camel-1.2.Camel.MimeFilterCharset

    constructor(config?: MimeFilterCharset_ConstructProps) 
    /**
     * Create a new #CamelMimeFilterCharset object to convert text from
     * `from_charset` to `to_charset`.
     * @constructor 
     * @param from_charset charset to convert from
     * @param to_charset charset to convert to
     */
    constructor(from_charset: string, to_charset: string) 
    /**
     * Create a new #CamelMimeFilterCharset object to convert text from
     * `from_charset` to `to_charset`.
     * @constructor 
     * @param from_charset charset to convert from
     * @param to_charset charset to convert to
     */
    static new(from_charset: string, to_charset: string): MimeFilterCharset

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterCharset_ConstructProps): void
}

interface MimeFilterEnriched_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterEnriched {

    // Own fields of Camel-1.2.Camel.MimeFilterEnriched

    parent: MimeFilter
    priv: MimeFilterEnrichedPrivate

    // Class property signals of Camel-1.2.Camel.MimeFilterEnriched

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterEnriched extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterEnriched

    static name: string
    static $gtype: GObject.GType<MimeFilterEnriched>

    // Constructors of Camel-1.2.Camel.MimeFilterEnriched

    constructor(config?: MimeFilterEnriched_ConstructProps) 
    /**
     * Create a new #CamelMimeFilterEnriched object to convert input text
     * streams from text/plain into text/enriched or text/richtext.
     * @constructor 
     * @param flags bitwise set of flags to specify filter behaviour
     */
    constructor(flags: MimeFilterEnrichedFlags) 
    /**
     * Create a new #CamelMimeFilterEnriched object to convert input text
     * streams from text/plain into text/enriched or text/richtext.
     * @constructor 
     * @param flags bitwise set of flags to specify filter behaviour
     */
    static new(flags: MimeFilterEnrichedFlags): MimeFilterEnriched

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterEnriched_ConstructProps): void
}

interface MimeFilterFrom_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterFrom {

    // Own fields of Camel-1.2.Camel.MimeFilterFrom

    parent: MimeFilter
    priv: MimeFilterFromPrivate

    // Class property signals of Camel-1.2.Camel.MimeFilterFrom

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterFrom extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterFrom

    static name: string
    static $gtype: GObject.GType<MimeFilterFrom>

    // Constructors of Camel-1.2.Camel.MimeFilterFrom

    constructor(config?: MimeFilterFrom_ConstructProps) 
    /**
     * Create a new #CamelMimeFilterFrom object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CamelMimeFilterFrom object.
     * @constructor 
     */
    static new(): MimeFilterFrom
    _init(config?: MimeFilterFrom_ConstructProps): void
}

interface MimeFilterGZip_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterGZip {

    // Own fields of Camel-1.2.Camel.MimeFilterGZip

    parent: MimeFilter
    priv: MimeFilterGZipPrivate

    // Class property signals of Camel-1.2.Camel.MimeFilterGZip

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterGZip extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterGZip

    static name: string
    static $gtype: GObject.GType<MimeFilterGZip>

    // Constructors of Camel-1.2.Camel.MimeFilterGZip

    constructor(config?: MimeFilterGZip_ConstructProps) 
    /**
     * Creates a new gzip (or gunzip) filter.
     * @constructor 
     * @param mode zip or unzip
     * @param level compression level
     */
    constructor(mode: MimeFilterGZipMode, level: number) 
    /**
     * Creates a new gzip (or gunzip) filter.
     * @constructor 
     * @param mode zip or unzip
     * @param level compression level
     */
    static new(mode: MimeFilterGZipMode, level: number): MimeFilterGZip

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterGZip_ConstructProps): void
}

interface MimeFilterHTML_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterHTML {

    // Own fields of Camel-1.2.Camel.MimeFilterHTML

    parent: MimeFilter
    priv: MimeFilterHTMLPrivate

    // Class property signals of Camel-1.2.Camel.MimeFilterHTML

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterHTML extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterHTML

    static name: string
    static $gtype: GObject.GType<MimeFilterHTML>

    // Constructors of Camel-1.2.Camel.MimeFilterHTML

    constructor(config?: MimeFilterHTML_ConstructProps) 
    /**
     * Create a new #CamelMimeFilterHTML object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CamelMimeFilterHTML object.
     * @constructor 
     */
    static new(): MimeFilterHTML
    _init(config?: MimeFilterHTML_ConstructProps): void
}

interface MimeFilterIndex_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterIndex {

    // Own fields of Camel-1.2.Camel.MimeFilterIndex

    parent: MimeFilter
    priv: MimeFilterIndexPrivate

    // Owm methods of Camel-1.2.Camel.MimeFilterIndex

    /**
     * Set `index` on `filter`.
     * @param index a #CamelIndex object
     */
    set_index(index: Index): void
    /**
     * Set the match name for any indexed words.
     * @param name a #CamelIndexName object
     */
    set_name(name: IndexName): void

    // Class property signals of Camel-1.2.Camel.MimeFilterIndex

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterIndex extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterIndex

    static name: string
    static $gtype: GObject.GType<MimeFilterIndex>

    // Constructors of Camel-1.2.Camel.MimeFilterIndex

    constructor(config?: MimeFilterIndex_ConstructProps) 
    /**
     * Create a new #CamelMimeFilterIndex based on `index`.
     * @constructor 
     * @param index a #CamelIndex object
     */
    constructor(index: Index) 
    /**
     * Create a new #CamelMimeFilterIndex based on `index`.
     * @constructor 
     * @param index a #CamelIndex object
     */
    static new(index: Index): MimeFilterIndex

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterIndex_ConstructProps): void
}

interface MimeFilterLinewrap_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterLinewrap {

    // Own fields of Camel-1.2.Camel.MimeFilterLinewrap

    parent: MimeFilter
    priv: MimeFilterLinewrapPrivate

    // Class property signals of Camel-1.2.Camel.MimeFilterLinewrap

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterLinewrap extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterLinewrap

    static name: string
    static $gtype: GObject.GType<MimeFilterLinewrap>

    // Constructors of Camel-1.2.Camel.MimeFilterLinewrap

    constructor(config?: MimeFilterLinewrap_ConstructProps) 
    constructor(preferred_len: number, max_len: number, indent_char: number, flags: number) 
    static new(preferred_len: number, max_len: number, indent_char: number, flags: number): MimeFilterLinewrap

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterLinewrap_ConstructProps): void
}

interface MimeFilterPgp_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterPgp {

    // Own fields of Camel-1.2.Camel.MimeFilterPgp

    parent: MimeFilter
    priv: MimeFilterPgpPrivate

    // Class property signals of Camel-1.2.Camel.MimeFilterPgp

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterPgp extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterPgp

    static name: string
    static $gtype: GObject.GType<MimeFilterPgp>

    // Constructors of Camel-1.2.Camel.MimeFilterPgp

    constructor(config?: MimeFilterPgp_ConstructProps) 
    constructor() 
    static new(): MimeFilterPgp
    _init(config?: MimeFilterPgp_ConstructProps): void
}

interface MimeFilterProgress_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterProgress {

    // Class property signals of Camel-1.2.Camel.MimeFilterProgress

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterProgress extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterProgress

    static name: string
    static $gtype: GObject.GType<MimeFilterProgress>

    // Constructors of Camel-1.2.Camel.MimeFilterProgress

    constructor(config?: MimeFilterProgress_ConstructProps) 
    /**
     * Create a new #CamelMimeFilterProgress object that will report streaming
     * progress.  While the function will silently accept `cancellable` being
     * %NULL or a plain #GCancellable for convenience sake, no progress will be
     * reported unless `cancellable` is a #CamelOperation.
     * @constructor 
     * @param cancellable a #CamelOperation cast as a #GCancellable
     * @param total total number of bytes to report progress on
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
     */
    static new(cancellable: Gio.Cancellable | null, total: number): MimeFilterProgress

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterProgress_ConstructProps): void
}

interface MimeFilterToHTML_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterToHTML {

    // Own fields of Camel-1.2.Camel.MimeFilterToHTML

    parent: MimeFilter
    priv: MimeFilterToHTMLPrivate

    // Class property signals of Camel-1.2.Camel.MimeFilterToHTML

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterToHTML extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterToHTML

    static name: string
    static $gtype: GObject.GType<MimeFilterToHTML>

    // Constructors of Camel-1.2.Camel.MimeFilterToHTML

    constructor(config?: MimeFilterToHTML_ConstructProps) 
    /**
     * Create a new #CamelMimeFilterToHTML object to convert plain text
     * into HTML.
     * @constructor 
     * @param flags bitwise flags defining the behaviour
     * @param color color to use when highlighting quoted text
     */
    constructor(flags: MimeFilterToHTMLFlags, color: number) 
    /**
     * Create a new #CamelMimeFilterToHTML object to convert plain text
     * into HTML.
     * @constructor 
     * @param flags bitwise flags defining the behaviour
     * @param color color to use when highlighting quoted text
     */
    static new(flags: MimeFilterToHTMLFlags, color: number): MimeFilterToHTML

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterToHTML_ConstructProps): void
}

interface MimeFilterWindows_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterWindows {

    // Own fields of Camel-1.2.Camel.MimeFilterWindows

    parent: MimeFilter
    priv: MimeFilterWindowsPrivate

    // Owm methods of Camel-1.2.Camel.MimeFilterWindows

    /**
     * Get whether or not the textual content filtered by `filter` is
     * really in a Microsoft Windows charset rather than the claimed ISO
     * charset.
     */
    is_windows_charset(): boolean
    /**
     * Get the name of the actual charset used to encode the textual
     * content filtered by `filter` (it will either be the original
     * claimed_charset passed in at creation time or the Windows-CP125x
     * equivalent).
     */
    real_charset(): string

    // Class property signals of Camel-1.2.Camel.MimeFilterWindows

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterWindows extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterWindows

    static name: string
    static $gtype: GObject.GType<MimeFilterWindows>

    // Constructors of Camel-1.2.Camel.MimeFilterWindows

    constructor(config?: MimeFilterWindows_ConstructProps) 
    /**
     * Create a new #CamelMimeFilterWindows object that will analyse
     * whether or not the text is really encoded in `claimed_charset`.
     * @constructor 
     * @param claimed_charset ISO charset name
     */
    constructor(claimed_charset: string) 
    /**
     * Create a new #CamelMimeFilterWindows object that will analyse
     * whether or not the text is really encoded in `claimed_charset`.
     * @constructor 
     * @param claimed_charset ISO charset name
     */
    static new(claimed_charset: string): MimeFilterWindows

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterWindows_ConstructProps): void
}

interface MimeFilterYenc_ConstructProps extends MimeFilter_ConstructProps {
}

interface MimeFilterYenc {

    // Own fields of Camel-1.2.Camel.MimeFilterYenc

    parent: MimeFilter
    priv: MimeFilterYencPrivate

    // Owm methods of Camel-1.2.Camel.MimeFilterYenc

    /**
     * Get the computed crc or (#guint32) -1 on fail.
     */
    get_crc(): number
    /**
     * Get the computed part crc or (#guint32) -1 on fail.
     */
    get_pcrc(): number
    /**
     * Sets the current crc32 value on the yEnc filter `yenc` to `crc`.
     * @param crc crc32 value
     */
    set_crc(crc: number): void
    /**
     * Sets the current state of the yencoder/ydecoder
     * @param state encode/decode state
     */
    set_state(state: number): void

    // Class property signals of Camel-1.2.Camel.MimeFilterYenc

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeFilterYenc extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterYenc

    static name: string
    static $gtype: GObject.GType<MimeFilterYenc>

    // Constructors of Camel-1.2.Camel.MimeFilterYenc

    constructor(config?: MimeFilterYenc_ConstructProps) 
    /**
     * Create a new #CamelMimeFilterYenc filter object.
     * @constructor 
     * @param direction encode direction
     */
    constructor(direction: MimeFilterYencDirection) 
    /**
     * Create a new #CamelMimeFilterYenc filter object.
     * @constructor 
     * @param direction encode direction
     */
    static new(direction: MimeFilterYencDirection): MimeFilterYenc

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     */
    static new(): MimeFilter
    _init(config?: MimeFilterYenc_ConstructProps): void
}

interface MimeMessage_ConstructProps extends MimePart_ConstructProps {
}

interface MimeMessage {

    // Own fields of Camel-1.2.Camel.MimeMessage

    parent: MimePart
    priv: MimeMessagePrivate

    // Owm methods of Camel-1.2.Camel.MimeMessage

    /**
     * Build an MBox from-line from `message`.
     */
    build_mbox_from(): string
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
    encode_8bit_parts(): void
    /**
     * Calls `callback` for each part of the `message,` including the message itself.
     * The traverse of the `message` parts can be stopped when the `callback`
     * returns %FALSE.
     */
    foreach_part(): void
    /**
     * Get the date and UTC offset of a message.
     * See camel_mime_message_set_date() for information about the `offset` format.
     */
    get_date(): [ /* returnType */ number, /* offset */ number ]
    /**
     * Get the received date and UTC offset of a message.
     * See camel_mime_message_set_date() for information about the `offset` format.
     */
    get_date_received(): [ /* returnType */ number, /* offset */ number ]
    /**
     * Get the from address of a message.
     */
    get_from(): InternetAddress | null
    /**
     * Get the message-id of a message.
     */
    get_message_id(): string | null
    /**
     * Get a MIME part by id from a message.
     * @param content_id content-id to search for
     */
    get_part_by_content_id(content_id: string): MimePart | null
    /**
     * Get the message recipients of a specified type.
     * @param type recipient type
     */
    get_recipients(type: string): InternetAddress | null
    /**
     * Get the Reply-To of a message.
     */
    get_reply_to(): InternetAddress | null
    /**
     * Get the UID of the source account of the message.
     */
    get_source(): string | null
    /**
     * Get the UTF-8 subject text of a message.
     */
    get_subject(): string | null
    /**
     * Find out if a message contains 8bit or binary encoded parts.
     */
    has_8bit_parts(): boolean
    /**
     * Returns whether message contains at least one attachment part.
     */
    has_attachment(): boolean
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
    set_best_encoding(required: BestencRequired, enctype: BestencEncoding): void
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
    set_date(date: number, offset: number): void
    /**
     * Set the from address of a message.
     * @param from a #CamelInternetAddress object
     */
    set_from(from: InternetAddress | null): void
    /**
     * Set the message-id on a message.
     * @param message_id id of the message, or %NULL to generate a new one using the from address
     */
    set_message_id(message_id: string | null): void
    /**
     * Set the recipients of a message.
     * @param type recipient type (one of #CAMEL_RECIPIENT_TYPE_TO, #CAMEL_RECIPIENT_TYPE_CC, or #CAMEL_RECIPIENT_TYPE_BCC)
     * @param recipients a #CamelInternetAddress with the recipient addresses set or %NULL   to remove the already defined one
     */
    set_recipients(type: string, recipients: InternetAddress | null): void
    /**
     * Set the Reply-To of a message.
     * @param reply_to a #CamelInternetAddress object
     */
    set_reply_to(reply_to: InternetAddress | null): void
    /**
     * Set the UID of the source account of the message.
     * @param source_uid the uid of the source account
     */
    set_source(source_uid: string | null): void
    /**
     * Set the subject text of a message.
     * @param subject UTF-8 message subject
     */
    set_subject(subject: string | null): void

    // Conflicting methods

    set_content(...args: any[]): any

    // Class property signals of Camel-1.2.Camel.MimeMessage

    connect(sigName: "notify::content-id", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-id", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-id", ...args: any[]): void
    connect(sigName: "notify::content-md5", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-md5", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-md5", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::disposition", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disposition", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disposition", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeMessage extends MimePart {

    // Own properties of Camel-1.2.Camel.MimeMessage

    static name: string
    static $gtype: GObject.GType<MimeMessage>

    // Constructors of Camel-1.2.Camel.MimeMessage

    constructor(config?: MimeMessage_ConstructProps) 
    /**
     * Create a new #CamelMimeMessage object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CamelMimeMessage object.
     * @constructor 
     */
    static new(): MimeMessage

    // Overloads of new

    /**
     * Create a new MIME part.
     * @constructor 
     */
    static new(): MimePart
    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     */
    static new(): DataWrapper
    _init(config?: MimeMessage_ConstructProps): void
}

interface MimeParser_ConstructProps extends GObject.Object_ConstructProps {
}

interface MimeParser {

    // Own fields of Camel-1.2.Camel.MimeParser

    parent: GObject.Object
    priv: MimeParserPrivate

    // Owm methods of Camel-1.2.Camel.MimeParser

    /**
     * Get the content type defined in the current part.
     */
    content_type(): ContentType | null
    /**
     * Drop the last step call.  This should only be used
     * in conjunction with seeking of the stream as the
     * stream may be in an undefined state relative to the
     * state of the parser.
     * 
     * Use this call with care.
     */
    drop_step(): void
    /**
     * Get the list of the raw headers which are defined for the
     * current state of the parser.  These headers are valid
     * until the next call to camel_mime_parser_step(), or camel_mime_parser_drop_step().
     */
    dup_headers(): NameValueArray | null
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
     */
    filter_add(mf: MimeFilter): number
    /**
     * Remove a processing filter from the pipeline.  There is no
     * restriction on the order the filters can be removed.
     * @param id id of the filter to remove, as returned from camel_mime_parser_filter_add()
     */
    filter_remove(id: number): void
    /**
     * Get the last scanned "From " line, from a recently scanned from.
     * This should only be called in the CAMEL_MIME_PARSER_STATE_FROM state.  The
     * from line will include the closing \n found (if there was one).
     * 
     * The return value will remain valid while in the CAMEL_MIME_PARSER_STATE_FROM
     * state, or any deeper state.
     */
    from_line(): string | null
    /**
     * Lookup a header by name.
     * @param name Name of header.
     * @param offset Pointer that can receive the offset of the header in the stream from the start of parsing.
     */
    header(name: string, offset: number): string | null
    /**
     * Convenience function creates a #GMemoryInputStream from `bytes` and hands
     * it off to camel_mime_parser_init_with_input_stream().
     * @param bytes a #GBytes containing the message content
     */
    init_with_bytes(bytes: GLib.Bytes): void
    /**
     * Initialise the scanner with an fd.  The scanner's offsets
     * will be relative to the current file position of the file
     * descriptor.  As a result, seekable descritors should
     * be seeked using the parser seek functions.
     * @param fd A valid file descriptor.
     */
    init_with_fd(fd: number): number
    /**
     * Initialize the scanner with `input_stream`.  The scanner's offsets will
     * be relative to the current file position of the stream.  As a result,
     * seekable streams should only be seeked using the parser seek function.
     * @param input_stream a #GInputStream
     */
    init_with_input_stream(input_stream: Gio.InputStream): void
    /**
     * Initialise the scanner with a source stream.  The scanner's
     * offsets will be relative to the current file position of
     * the stream.  As a result, seekable streams should only
     * be seeked using the parser seek function.
     * @param stream a #CamelStream to init with
     */
    init_with_stream(stream: Stream): number
    /**
     * Retrieve the postface text for the current multipart.
     * Only returns valid data when the current state if
     * CAMEL_MIME_PARSER_STATE_MULTIPART_END.
     */
    postface(): string | null
    /**
     * Retrieve the preface text for the current multipart.
     * Can only be used when the state is CAMEL_MIME_PARSER_STATE_MULTIPART_END.
     */
    preface(): string | null
    /**
     * Pre-load a new parser state.  Used to post-parse multipart content
     * without headers.
     * @param newstate New state
     * @param boundary Boundary marker for state.
     */
    push_state(newstate: MimeParserState, boundary: string): void
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
     * @param scan_from %TRUE if the scanner should scan From lines.
     */
    scan_from(scan_from: boolean): void
    /**
     * Tell the scanner whether we want to know abou the pre-from
     * data during a scan.  If we do, then we may get an additional
     * state CAMEL_MIME_PARSER_STATE_PRE_FROM which returns the specified data.
     * @param scan_pre_from %TRUE if we want to get pre-from data.
     */
    scan_pre_from(scan_pre_from: boolean): void
    /**
     * Reset the source position to a known value.
     * 
     * Note that if the source stream/descriptor was not
     * positioned at 0 to begin with, and an absolute seek
     * is specified (whence != SEEK_CUR), then the seek
     * position may not match the desired seek position.
     * @param offset Number of bytes to offset the seek by.
     * @param whence SEEK_SET, SEEK_CUR, SEEK_END
     */
    seek(offset: number, whence: number): number
    set_header_regex(matchstr: string): number
    /**
     * Get the current parser state.
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
     */
    step(databuffer?: Uint8Array): [ /* returnType */ MimeParserState, /* databuffer */ Uint8Array ]
    /**
     * Get the stream, if any, the parser has been initialised
     * with.  May be used to setup sub-streams, but should not
     * be read from directly (without saving and restoring
     * the seek position in between).
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
     */
    tell(): number
    /**
     * When parsing a multipart, this returns the start of the last
     * boundary.
     */
    tell_start_boundary(): number
    /**
     * If the parser is scanning From lines, then this returns
     * the position of the start of the From line.
     */
    tell_start_from(): number
    /**
     * Find out the position within the file of where the
     * headers started, this is cached by the parser
     * at the time.
     */
    tell_start_headers(): number
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

    vfunc_content(): void
    vfunc_message(headers: object | null): void
    vfunc_part(): void

    // Class property signals of Camel-1.2.Camel.MimeParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimeParser extends GObject.Object {

    // Own properties of Camel-1.2.Camel.MimeParser

    static name: string
    static $gtype: GObject.GType<MimeParser>

    // Constructors of Camel-1.2.Camel.MimeParser

    constructor(config?: MimeParser_ConstructProps) 
    /**
     * Create a new CamelMimeParser object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new CamelMimeParser object.
     * @constructor 
     */
    static new(): MimeParser
    _init(config?: MimeParser_ConstructProps): void
}

interface MimePart_ConstructProps extends Medium_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.MimePart

    content_id?: string | null
    content_md5?: string | null
    description?: string | null
    disposition?: string | null
}

interface MimePart {

    // Own properties of Camel-1.2.Camel.MimePart

    content_id: string
    content_md5: string
    description: string
    disposition: string

    // Own fields of Camel-1.2.Camel.MimePart

    parent: Medium
    priv: MimePartPrivate

    // Owm methods of Camel-1.2.Camel.MimePart

    /**
     * Constructs the contnet of `mime_part` from the given mime parser.
     * @param mp a #CamelMimeParser
     * @param cancellable optional #GCancellable object, or %NULL
     */
    construct_content_from_parser(mp: MimeParser, cancellable: Gio.Cancellable | null): boolean
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
    construct_from_parser(parser: MimeParser, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_mime_part_construct_from_parser().
     * @param result a #GAsyncResult
     */
    construct_from_parser_finish(result: Gio.AsyncResult): boolean
    /**
     * Constructs a MIME part from a parser.
     * @param parser a #CamelMimeParser
     * @param cancellable optional #GCancellable object, or %NULL
     */
    construct_from_parser_sync(parser: MimeParser, cancellable: Gio.Cancellable | null): boolean
    /**
     * Get the disposition of the MIME part as a structure.
     * Returned pointer is owned by `mime_part`.
     */
    get_content_disposition(): ContentDisposition | null
    /**
     * Get the content-id field of a MIME part.
     */
    get_content_id(): string | null
    /**
     * Get the Content-Languages set on the MIME part.
     */
    get_content_languages(): string[] | null
    /**
     * Get the content-location field of a MIME part.
     */
    get_content_location(): string | null
    /**
     * Get the content-md5 field of the MIME part.
     */
    get_content_md5(): string | null
    /**
     * Get the Content-Type of a MIME part.
     */
    get_content_type(): ContentType | null
    /**
     * Get the description of the MIME part.
     */
    get_description(): string | null
    /**
     * Get the disposition of the MIME part.
     */
    get_disposition(): string | null
    /**
     * Get the Content-Transfer-Encoding of a MIME part.
     */
    get_encoding(): TransferEncoding
    /**
     * Get the filename of a MIME part.
     */
    get_filename(): string | null
    /**
     * Utility function used to set the content of a mime part object to
     * be the provided data. If `length` is 0, this routine can be used as
     * a way to remove old content (in which case `data` and `type` are
     * ignored and may be %NULL).
     * @param data data to put into the part
     * @param type Content-Type of the data
     */
    set_content(data: Uint8Array | null, type?: string | null): void

    // Overloads of set_content

    /**
     * Sets the content of `medium` to be `content`.
     * @param content a #CamelDataWrapper object
     */
    set_content(content: DataWrapper | null): void
    set_content(...args: any[]): any
    set_content(args_or_content: any[] | DataWrapper | null): void | any
    /**
     * Set the content-id field on a MIME part.
     * @param contentid content id
     */
    set_content_id(contentid: string | null): void
    /**
     * Set the Content-Languages field of a MIME part.
     * @param content_languages list of languages
     */
    set_content_languages(content_languages: string[] | null): void
    /**
     * Set the content-location field of the MIME part.
     * @param location the content-location value of the MIME part
     */
    set_content_location(location: string | null): void
    /**
     * Set the content-md5 field of the MIME part.
     * @param md5sum the md5sum of the MIME part
     */
    set_content_md5(md5sum: string | null): void
    /**
     * Set the content-type on a MIME part.
     * @param content_type content-type string
     */
    set_content_type(content_type: string | null): void
    /**
     * Set a description on the MIME part.
     * @param description description of the MIME part
     */
    set_description(description: string): void
    /**
     * Set a disposition on the MIME part.
     * @param disposition disposition of the MIME part
     */
    set_disposition(disposition: string | null): void
    /**
     * Set the Content-Transfer-Encoding to use on a MIME part.
     * @param encoding a #CamelTransferEncoding
     */
    set_encoding(encoding: TransferEncoding): void
    /**
     * Set the filename on a MIME part.
     * @param filename filename given to the MIME part
     */
    set_filename(filename: string | null): void

    // Own virtual methods of Camel-1.2.Camel.MimePart

    /**
     * Constructs a MIME part from a parser.
     * @virtual 
     * @param parser a #CamelMimeParser
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_construct_from_parser_sync(parser: MimeParser, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Camel-1.2.Camel.MimePart

    connect(sigName: "notify::content-id", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-id", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-id", ...args: any[]): void
    connect(sigName: "notify::content-md5", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-md5", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-md5", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::disposition", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disposition", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disposition", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MimePart extends Medium {

    // Own properties of Camel-1.2.Camel.MimePart

    static name: string
    static $gtype: GObject.GType<MimePart>

    // Constructors of Camel-1.2.Camel.MimePart

    constructor(config?: MimePart_ConstructProps) 
    /**
     * Create a new MIME part.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new MIME part.
     * @constructor 
     */
    static new(): MimePart

    // Overloads of new

    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     */
    static new(): DataWrapper
    _init(config?: MimePart_ConstructProps): void
}

interface Multipart_ConstructProps extends DataWrapper_ConstructProps {
}

interface Multipart {

    // Own fields of Camel-1.2.Camel.Multipart

    parent: DataWrapper
    priv: MultipartPrivate

    // Owm methods of Camel-1.2.Camel.Multipart

    /**
     * Appends the part to the multipart object.
     * @param part a #CamelMimePart to add
     */
    add_part(part: MimePart): void
    /**
     * Construct a multipart from a parser.
     * @param parser a #CamelMimeParser object
     */
    construct_from_parser(parser: MimeParser): number
    get_boundary(): string
    get_number(): number
    get_part(index: number): MimePart | null
    /**
     * Returns the postface text for `multipart`.
     */
    get_postface(): string
    /**
     * Returns the preface text for `multipart`.
     */
    get_preface(): string
    /**
     * Sets the message boundary for `multipart` to `boundary`. This should
     * be a string which does not occur anywhere in any of `multipart'`s
     * subparts. If `boundary` is %NULL, a randomly-generated boundary will
     * be used.
     * @param boundary the message boundary, or %NULL
     */
    set_boundary(boundary: string | null): void
    /**
     * Set the postface text for this multipart.  Will be written out after
     * the last boundary of the multipart, and ignored by any MIME mail
     * client.
     * 
     * Generally postface texts should not be sent with multipart messages.
     * @param postface multipat postface
     */
    set_postface(postface: string): void
    /**
     * Set the preface text for this multipart.  Will be written out infront
     * of the multipart.  This text should only include US-ASCII strings, and
     * be relatively short, and will be ignored by any MIME mail client.
     * @param preface the multipart preface
     */
    set_preface(preface: string): void

    // Own virtual methods of Camel-1.2.Camel.Multipart

    /**
     * Appends the part to the multipart object.
     * @virtual 
     * @param part a #CamelMimePart to add
     */
    vfunc_add_part(part: MimePart): void
    /**
     * Construct a multipart from a parser.
     * @virtual 
     * @param parser a #CamelMimeParser object
     */
    vfunc_construct_from_parser(parser: MimeParser): number
    vfunc_get_boundary(): string
    vfunc_get_number(): number
    vfunc_get_part(index: number): MimePart | null
    /**
     * Sets the message boundary for `multipart` to `boundary`. This should
     * be a string which does not occur anywhere in any of `multipart'`s
     * subparts. If `boundary` is %NULL, a randomly-generated boundary will
     * be used.
     * @virtual 
     * @param boundary the message boundary, or %NULL
     */
    vfunc_set_boundary(boundary: string | null): void

    // Class property signals of Camel-1.2.Camel.Multipart

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Multipart extends DataWrapper {

    // Own properties of Camel-1.2.Camel.Multipart

    static name: string
    static $gtype: GObject.GType<Multipart>

    // Constructors of Camel-1.2.Camel.Multipart

    constructor(config?: Multipart_ConstructProps) 
    /**
     * Create a new #CamelMultipart object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CamelMultipart object.
     * @constructor 
     */
    static new(): Multipart

    // Overloads of new

    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     */
    static new(): DataWrapper
    _init(config?: Multipart_ConstructProps): void
}

interface MultipartEncrypted_ConstructProps extends Multipart_ConstructProps {
}

interface MultipartEncrypted {

    // Own fields of Camel-1.2.Camel.MultipartEncrypted

    parent: Multipart
    priv: MultipartEncryptedPrivate

    // Class property signals of Camel-1.2.Camel.MultipartEncrypted

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MultipartEncrypted extends Multipart {

    // Own properties of Camel-1.2.Camel.MultipartEncrypted

    static name: string
    static $gtype: GObject.GType<MultipartEncrypted>

    // Constructors of Camel-1.2.Camel.MultipartEncrypted

    constructor(config?: MultipartEncrypted_ConstructProps) 
    /**
     * Create a new #CamelMultipartEncrypted object.
     * 
     * A MultipartEncrypted should be used to store and create parts of
     * type "multipart/encrypted".
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CamelMultipartEncrypted object.
     * 
     * A MultipartEncrypted should be used to store and create parts of
     * type "multipart/encrypted".
     * @constructor 
     */
    static new(): MultipartEncrypted

    // Overloads of new

    /**
     * Create a new #CamelMultipart object.
     * @constructor 
     */
    static new(): Multipart
    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     */
    static new(): DataWrapper
    _init(config?: MultipartEncrypted_ConstructProps): void
}

interface MultipartSigned_ConstructProps extends Multipart_ConstructProps {
}

interface MultipartSigned {

    // Own fields of Camel-1.2.Camel.MultipartSigned

    parent: Multipart
    priv: MultipartSignedPrivate

    // Owm methods of Camel-1.2.Camel.MultipartSigned

    /**
     * Get the raw signed content stream of the multipart/signed MIME part
     * suitable for use with verification of the signature.
     */
    get_content_stream(): Stream
    /**
     * Explicits sets the raw signed content stream of the multipart/signed
     * MIME part.
     * @param content_stream a #CamelStream
     */
    set_content_stream(content_stream: Stream): void
    /**
     * Explicitly sets the signature part of `mps`.
     * @param signature a #CamelMimePart
     */
    set_signature(signature: MimePart): void

    // Class property signals of Camel-1.2.Camel.MultipartSigned

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MultipartSigned extends Multipart {

    // Own properties of Camel-1.2.Camel.MultipartSigned

    static name: string
    static $gtype: GObject.GType<MultipartSigned>

    // Constructors of Camel-1.2.Camel.MultipartSigned

    constructor(config?: MultipartSigned_ConstructProps) 
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
     */
    static new(): MultipartSigned

    // Overloads of new

    /**
     * Create a new #CamelMultipart object.
     * @constructor 
     */
    static new(): Multipart
    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     */
    static new(): DataWrapper
    _init(config?: MultipartSigned_ConstructProps): void
}

interface NNTPAddress_ConstructProps extends Address_ConstructProps {
}

interface NNTPAddress {

    // Own fields of Camel-1.2.Camel.NNTPAddress

    parent: Address
    priv: NNTPAddressPrivate

    // Owm methods of Camel-1.2.Camel.NNTPAddress

    /**
     * Add a new nntp address to the address object.  Duplicates are not added twice.
     * @param name a new NNTP address to add
     */
    add(name: string): number
    /**
     * Get the address at `index`.
     * @param index address's array index
     * @param namep Holder for the returned address, or NULL, if not required.
     */
    get(index: number, namep: string): boolean

    // Class property signals of Camel-1.2.Camel.NNTPAddress

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NNTPAddress extends Address {

    // Own properties of Camel-1.2.Camel.NNTPAddress

    static name: string
    static $gtype: GObject.GType<NNTPAddress>

    // Constructors of Camel-1.2.Camel.NNTPAddress

    constructor(config?: NNTPAddress_ConstructProps) 
    /**
     * Create a new CamelNNTPAddress object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new CamelNNTPAddress object.
     * @constructor 
     */
    static new(): NNTPAddress

    // Overloads of new

    /**
     * Create a new #CamelAddress object.
     * @constructor 
     */
    static new(): Address
    _init(config?: NNTPAddress_ConstructProps): void
}

interface NullOutputStream_ConstructProps extends Gio.OutputStream_ConstructProps {
}

interface NullOutputStream {

    // Own fields of Camel-1.2.Camel.NullOutputStream

    parent: Gio.OutputStream
    priv: NullOutputStreamPrivate

    // Owm methods of Camel-1.2.Camel.NullOutputStream

    /**
     * Gets the total number of bytes written to `null_stream`.
     */
    get_bytes_written(): number
    get_ends_with_crlf(): boolean

    // Class property signals of Camel-1.2.Camel.NullOutputStream

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NullOutputStream extends Gio.OutputStream {

    // Own properties of Camel-1.2.Camel.NullOutputStream

    static name: string
    static $gtype: GObject.GType<NullOutputStream>

    // Constructors of Camel-1.2.Camel.NullOutputStream

    constructor(config?: NullOutputStream_ConstructProps) 
    /**
     * Creates a new "null" output stream.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new "null" output stream.
     * @constructor 
     */
    static new(): NullOutputStream
    _init(config?: NullOutputStream_ConstructProps): void
}

interface Object_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.Object

    /**
     * The file in which to store persistent property values for this
     * instance.
     */
    state_filename?: string | null
}

interface Object {

    // Own properties of Camel-1.2.Camel.Object

    /**
     * The file in which to store persistent property values for this
     * instance.
     */
    state_filename: string

    // Own fields of Camel-1.2.Camel.Object

    parent: GObject.Object
    priv: ObjectPrivate

    // Owm methods of Camel-1.2.Camel.Object

    /**
     * Returns the name of the file in which persistent property values for
     * `object` are stored.  The file is used by camel_object_state_write()
     * and camel_object_state_read() to save and restore object state.
     */
    get_state_filename(): string
    /**
     * Sets the name of the file in which persistent property values for
     * `object` are stored.  The file is used by camel_object_state_write()
     * and camel_object_state_read() to save and restore object state.
     * @param state_filename path to a local file
     */
    set_state_filename(state_filename: string): void
    /**
     * Read persistent object state from #CamelObject:state-filename.
     */
    state_read(): number
    /**
     * Write persistent object state #CamelObject:state-filename.
     */
    state_write(): number

    // Own virtual methods of Camel-1.2.Camel.Object

    vfunc_state_read(fp: object | null): number
    vfunc_state_write(fp: object | null): number

    // Class property signals of Camel-1.2.Camel.Object

    connect(sigName: "notify::state-filename", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Object extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of Camel-1.2.Camel.Object

    constructor(config?: Object_ConstructProps) 
    _init(config?: Object_ConstructProps): void
}

interface OfflineFolder_ConstructProps extends Folder_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.OfflineFolder

    offline_sync?: ThreeState | null
}

interface OfflineFolder {

    // Own properties of Camel-1.2.Camel.OfflineFolder

    offline_sync: ThreeState

    // Own fields of Camel-1.2.Camel.OfflineFolder

    parent: Folder
    priv: OfflineFolderPrivate

    // Owm methods of Camel-1.2.Camel.OfflineFolder

    /**
     * Checks whether the `folder` can run downsync according to its
     * settings (camel_offline_folder_get_offline_sync()) and to
     * the parent's #CamelOfflineStore settings (camel_offline_settings_get_stay_synchronized()).
     */
    can_downsync(): boolean
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
    downsync(expression: string | null, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_offline_folder_downsync().
     * @param result a #GAsyncResult
     */
    downsync_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronizes messages in `folder` described by the search `expression` to
     * the local machine for offline availability.
     * @param expression search expression describing which set of messages              to downsync (%NULL for all)
     * @param cancellable optional #GCancellable object, or %NULL
     */
    downsync_sync(expression: string | null, cancellable: Gio.Cancellable | null): boolean
    get_offline_sync(): ThreeState
    /**
     * The %CAMEL_THREE_STATE_INCONSISTENT means what the parent store has set.
     * @param offline_sync whether to synchronize for offline use, as a #CamelThreeState enum
     */
    set_offline_sync(offline_sync: ThreeState): void

    // Own virtual methods of Camel-1.2.Camel.OfflineFolder

    /**
     * Synchronizes messages in `folder` described by the search `expression` to
     * the local machine for offline availability.
     * @virtual 
     * @param expression search expression describing which set of messages              to downsync (%NULL for all)
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_downsync_sync(expression: string | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Camel-1.2.Camel.OfflineFolder

    connect(sigName: "notify::offline-sync", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offline-sync", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offline-sync", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::mark-seen", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mark-seen", ...args: any[]): void
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mark-seen-timeout", ...args: any[]): void
    connect(sigName: "notify::parent-store", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-store", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-store", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OfflineFolder extends Folder {

    // Own properties of Camel-1.2.Camel.OfflineFolder

    static name: string
    static $gtype: GObject.GType<OfflineFolder>

    // Constructors of Camel-1.2.Camel.OfflineFolder

    constructor(config?: OfflineFolder_ConstructProps) 
    _init(config?: OfflineFolder_ConstructProps): void
}

interface OfflineSettings_ConstructProps extends StoreSettings_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.OfflineSettings

    limit_by_age?: boolean | null
    limit_unit?: TimeUnit | null
    limit_value?: number | null
    stay_synchronized?: boolean | null
}

interface OfflineSettings {

    // Own properties of Camel-1.2.Camel.OfflineSettings

    limit_by_age: boolean
    limit_unit: TimeUnit
    limit_value: number
    stay_synchronized: boolean

    // Owm methods of Camel-1.2.Camel.OfflineSettings

    get_limit_by_age(): boolean
    get_limit_unit(): TimeUnit
    get_limit_value(): number
    /**
     * Returns whether to synchronize the local cache with the remote server
     * before switching to offline mode, so the store's content can still be
     * read while offline.
     */
    get_stay_synchronized(): boolean
    /**
     * Returns the interval, in seconds, for the changes in the folder being
     * saved automatically. 0 means immediately, while -1 means turning off
     * automatic folder change saving.
     */
    get_store_changes_interval(): number
    /**
     * Set whether the messages to download for offline should be limited
     * by age. If set to %TRUE, then messages older than 'limit-value'
     * will not be downloaded automatically.
     * @param limit_by_age a value to set
     */
    set_limit_by_age(limit_by_age: boolean): void
    /**
     * Set the limit unit to use when interpreting 'limit-value'.
     * @param limit_unit a #CamelTimeUnit with a unit to use
     */
    set_limit_unit(limit_unit: TimeUnit): void
    /**
     * Set the limit, in 'limit-unit', to use when 'limit-by-age' is set to %TRUE.
     * @param limit_value a value to set
     */
    set_limit_value(limit_value: boolean): void
    /**
     * Sets whether to synchronize the local cache with the remote server before
     * switching to offline mode, so the store's content can still be read while
     * offline.
     * @param stay_synchronized whether to stay synchronized with the remote server
     */
    set_stay_synchronized(stay_synchronized: boolean): void
    /**
     * Sets the interval, in seconds, for the changes in the folder being
     * saved automatically. 0 means immediately, while -1 means turning off
     * automatic folder change saving.
     * @param interval the interval, in seconds
     */
    set_store_changes_interval(interval: number): void

    // Class property signals of Camel-1.2.Camel.OfflineSettings

    connect(sigName: "notify::limit-by-age", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit-by-age", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::limit-by-age", ...args: any[]): void
    connect(sigName: "notify::limit-unit", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit-unit", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::limit-unit", ...args: any[]): void
    connect(sigName: "notify::limit-value", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit-value", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::limit-value", ...args: any[]): void
    connect(sigName: "notify::stay-synchronized", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stay-synchronized", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stay-synchronized", ...args: any[]): void
    connect(sigName: "notify::filter-inbox", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-inbox", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter-inbox", ...args: any[]): void
    connect(sigName: "notify::store-changes-interval", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-changes-interval", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::store-changes-interval", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class OfflineSettings extends StoreSettings {

    // Own properties of Camel-1.2.Camel.OfflineSettings

    static name: string
    static $gtype: GObject.GType<OfflineSettings>

    // Constructors of Camel-1.2.Camel.OfflineSettings

    constructor(config?: OfflineSettings_ConstructProps) 
    _init(config?: OfflineSettings_ConstructProps): void
}

interface OfflineStore_ConstructProps extends Gio.Initable_ConstructProps, Store_ConstructProps {
}

interface OfflineStore extends Gio.Initable {

    // Own properties of Camel-1.2.Camel.OfflineStore

    readonly online: boolean

    // Own fields of Camel-1.2.Camel.OfflineStore

    parent: Store
    priv: OfflineStorePrivate

    // Owm methods of Camel-1.2.Camel.OfflineStore

    /**
     * Returns a #GPtrArray of #CamelFolder objects which should be checked
     * for offline synchronization. Free the returned pointer with the below
     * calls, when no longer needed:
     * 
     * |[
     *     g_ptr_array_foreach (array, (GFunc) g_object_unref, NULL);
     *     g_ptr_array_free (array, TRUE);
     * ```
     * 
     */
    dup_downsync_folders(): Folder[]
    /**
     * Returns %TRUE if `store` is online.
     */
    get_online(): boolean
    /**
     * Downloads messages for offline, when setup to do so and when
     * the host is reachable.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    prepare_for_offline_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Check whether the `store` requires synchronization for offline usage.
     * This is not blocking, it only checks settings on the store and its
     * currently opened folders.
     * 
     * Returns %TRUE if the `store` requires synchronization for offline usage
     */
    requires_downsync(): boolean
    /**
     * An asynchronous variant of camel_offline_store_set_online_sync().
     * Call camel_offline_store_set_online_finish() from within the `callback`.
     * @param online %TRUE for online, %FALSE for offline
     * @param io_priority the I/O priority for the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    set_online(online: boolean, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_offline_store_set_online().
     * @param result a #GAsyncResult
     */
    set_online_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets the online/offline state of `store` according to `online`.
     * @param online %TRUE for online, %FALSE for offline
     * @param cancellable optional #GCancellable object, or %NULL
     */
    set_online_sync(online: boolean, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of Camel-1.2.Camel.OfflineStore

    /**
     * Returns a #GPtrArray of #CamelFolder objects which should be checked
     * for offline synchronization. Free the returned pointer with the below
     * calls, when no longer needed:
     * 
     * |[
     *     g_ptr_array_foreach (array, (GFunc) g_object_unref, NULL);
     *     g_ptr_array_free (array, TRUE);
     * ```
     * 
     * @virtual 
     */
    vfunc_dup_downsync_folders(): Folder[]

    // Class property signals of Camel-1.2.Camel.OfflineStore

    connect(sigName: "notify::online", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::connection-status", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OfflineStore extends Store {

    // Own properties of Camel-1.2.Camel.OfflineStore

    static name: string
    static $gtype: GObject.GType<OfflineStore>

    // Constructors of Camel-1.2.Camel.OfflineStore

    constructor(config?: OfflineStore_ConstructProps) 
    _init(config?: OfflineStore_ConstructProps): void
}

interface Operation_ConstructProps extends Gio.Cancellable_ConstructProps {
}

/**
 * Signal callback interface for `pop-message`
 */
interface Operation_PopMessageSignalCallback {
    ($obj: Operation): void
}

/**
 * Signal callback interface for `progress`
 */
interface Operation_ProgressSignalCallback {
    ($obj: Operation, object: number): void
}

/**
 * Signal callback interface for `push-message`
 */
interface Operation_PushMessageSignalCallback {
    ($obj: Operation, object: string): void
}

/**
 * Signal callback interface for `status`
 */
interface Operation_StatusSignalCallback {
    ($obj: Operation, object: string, p0: number): void
}

interface Operation {

    // Own fields of Camel-1.2.Camel.Operation

    parent: Gio.Cancellable
    priv: OperationPrivate

    // Own virtual methods of Camel-1.2.Camel.Operation

    vfunc_status(what: string, pc: number): void

    // Own signals of Camel-1.2.Camel.Operation

    connect(sigName: "pop-message", callback: Operation_PopMessageSignalCallback): number
    connect_after(sigName: "pop-message", callback: Operation_PopMessageSignalCallback): number
    emit(sigName: "pop-message", ...args: any[]): void
    connect(sigName: "progress", callback: Operation_ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: Operation_ProgressSignalCallback): number
    emit(sigName: "progress", object: number, ...args: any[]): void
    connect(sigName: "push-message", callback: Operation_PushMessageSignalCallback): number
    connect_after(sigName: "push-message", callback: Operation_PushMessageSignalCallback): number
    emit(sigName: "push-message", object: string, ...args: any[]): void
    connect(sigName: "status", callback: Operation_StatusSignalCallback): number
    connect_after(sigName: "status", callback: Operation_StatusSignalCallback): number
    emit(sigName: "status", object: string, p0: number, ...args: any[]): void

    // Class property signals of Camel-1.2.Camel.Operation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Operation extends Gio.Cancellable {

    // Own properties of Camel-1.2.Camel.Operation

    static name: string
    static $gtype: GObject.GType<Operation>

    // Constructors of Camel-1.2.Camel.Operation

    constructor(config?: Operation_ConstructProps) 
    /**
     * Create a new camel operation handle.  Camel operation handles can
     * be used in a multithreaded application (or a single operation
     * handle can be used in a non threaded appliation) to cancel running
     * operations and to obtain notification messages of the internal
     * status of messages.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new camel operation handle.  Camel operation handles can
     * be used in a multithreaded application (or a single operation
     * handle can be used in a non threaded appliation) to cancel running
     * operations and to obtain notification messages of the internal
     * status of messages.
     * @constructor 
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
     */
    static new_proxy(cancellable: Gio.Cancellable | null): Operation
    _init(config?: Operation_ConstructProps): void
    /**
     * Cancel all outstanding operations.
     */
    static cancel_all(): void
    /**
     * Pops the most recently pushed message.
     * 
     * This function only works if `cancellable` is a #CamelOperation cast as a
     * #GCancellable.  If `cancellable` is a plain #GCancellable or %NULL, the
     * function does nothing and returns silently.
     * @param cancellable a #GCancellable
     */
    static pop_message(cancellable: Gio.Cancellable | null): void
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

interface PartitionTable_ConstructProps extends GObject.Object_ConstructProps {
}

interface PartitionTable {

    // Own fields of Camel-1.2.Camel.PartitionTable

    parent: GObject.Object
    priv: PartitionTablePrivate

    // Owm methods of Camel-1.2.Camel.PartitionTable

    add(key: string, keyid: _key_t): number
    lookup(key: string): _key_t
    remove(key: string): boolean
    sync(): number

    // Class property signals of Camel-1.2.Camel.PartitionTable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PartitionTable extends GObject.Object {

    // Own properties of Camel-1.2.Camel.PartitionTable

    static name: string
    static $gtype: GObject.GType<PartitionTable>

    // Constructors of Camel-1.2.Camel.PartitionTable

    constructor(config?: PartitionTable_ConstructProps) 
    constructor(bs: BlockFile, root: _block_t) 
    static new(bs: BlockFile, root: _block_t): PartitionTable
    _init(config?: PartitionTable_ConstructProps): void
}

interface SExp_ConstructProps extends GObject.Object_ConstructProps {
}

interface SExp {

    // Owm methods of Camel-1.2.Camel.SExp

    /**
     * Adds a variable named `name` to the given `scope,` set to the given `value`.
     * @param scope a scope
     * @param name a variable name
     * @param value a variable value, as a #CamelSExpTerm
     */
    add_variable(scope: number, name: string, value: SExpTerm): void
    error(): string | null
    evaluate_occur_times(start: number, end: number): boolean
    /**
     * Prepares to scan a file.
     * @param fd a file descriptor
     */
    input_file(fd: number): void
    /**
     * Prepares to scan a text buffer.
     * @param text a text buffer to scan
     * @param len the length of the text buffer
     */
    input_text(text: string, len: number): void
    parse(): number
    /**
     * Revoes a symbol from a scope.
     * @param scope a scope
     * @param name a symbol name
     */
    remove_symbol(scope: number, name: string): void
    /**
     * Frees the `result` and its internal data. Does nothing,
     * when the `result` is %NULL.
     * @param result a #CamelSExpResult to free
     */
    result_free(result: SExpResult | null): void
    /**
     * Frees an array of results.
     * @param argv an array of #CamelSExpResult to free
     */
    resultv_free(argv: SExpResult[]): void
    /**
     * sets the current scope for the scanner.
     * @param scope a scope to set
     */
    set_scope(scope: number): number

    // Class property signals of Camel-1.2.Camel.SExp

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SExp extends GObject.Object {

    // Own properties of Camel-1.2.Camel.SExp

    static name: string
    static $gtype: GObject.GType<SExp>

    // Constructors of Camel-1.2.Camel.SExp

    constructor(config?: SExp_ConstructProps) 
    constructor() 
    static new(): SExp
    _init(config?: SExp_ConstructProps): void
    /**
     * Encode a bool into an s-expression `string`.  Bools are
     * encoded using #t #f syntax.
     * @param string Destination #GString
     * @param v_bool the value
     */
    static encode_bool(string: GLib.String, v_bool: boolean): void
    /**
     * Add a c string `v_string` to the s-expression stored in
     * the gstring `s`.  Quotes are added, and special characters
     * are escaped appropriately.
     * @param string Destination #GString
     * @param v_string String expression.
     */
    static encode_string(string: GLib.String, v_string: string): void
    /**
     * Converts a search expression to an SQL 'WHERE' part statement,
     * without the 'WHERE' keyword.
     * @param sexp a search expression to convert
     */
    static to_sql_sexp(sexp: string): string | null
}

interface SMIMEContext_ConstructProps extends CipherContext_ConstructProps {
}

interface SMIMEContext {

    // Own fields of Camel-1.2.Camel.SMIMEContext

    parent: CipherContext
    priv: SMIMEContextPrivate

    // Owm methods of Camel-1.2.Camel.SMIMEContext

    describe_part(part: object | null): number
    set_encrypt_key(use: boolean, key: string): void
    set_sign_mode(type: SMIMESign): void

    // Class property signals of Camel-1.2.Camel.SMIMEContext

    connect(sigName: "notify::session", callback: (($obj: SMIMEContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: SMIMEContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SMIMEContext extends CipherContext {

    // Own properties of Camel-1.2.Camel.SMIMEContext

    static name: string
    static $gtype: GObject.GType<SMIMEContext>

    // Constructors of Camel-1.2.Camel.SMIMEContext

    constructor(config?: SMIMEContext_ConstructProps) 
    /**
     * Creates a new sm cipher context object.
     * @constructor 
     * @param session session
     */
    constructor(session: Session) 
    /**
     * Creates a new sm cipher context object.
     * @constructor 
     * @param session session
     */
    static new(session: Session): SMIMEContext
    _init(config?: SMIMEContext_ConstructProps): void
}

interface Sasl_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.Sasl

    authenticated?: boolean | null
    mechanism?: string | null
    service?: Service | null
    service_name?: string | null
}

interface Sasl {

    // Own properties of Camel-1.2.Camel.Sasl

    authenticated: boolean
    readonly mechanism: string
    readonly service: Service
    readonly service_name: string

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
     * @param io_priority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    challenge(token: Uint8Array | null, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    challenge_base64(token: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_sasl_challenge_base64().
     * @param result a #GAsyncResult
     */
    challenge_base64_finish(result: Gio.AsyncResult): string
    /**
     * As with camel_sasl_challenge_sync(), but the challenge `token` and the
     * response are both base64-encoded.
     * @param token a base64-encoded token
     * @param cancellable optional #GCancellable object, or %NULL
     */
    challenge_base64_sync(token: string, cancellable: Gio.Cancellable | null): string
    /**
     * Finishes the operation started with camel_sasl_challenge().  Free the
     * returned #GByteArray with g_byte_array_free().
     * @param result a #GAsyncResult
     */
    challenge_finish(result: Gio.AsyncResult): Uint8Array | null
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
    challenge_sync(token: Uint8Array | null, cancellable: Gio.Cancellable | null): Uint8Array | null
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
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
    try_empty_password(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_sasl_try_empty_password().
     * @param result a #GAsyncResult
     */
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable: Gio.Cancellable | null): boolean

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
     */
    vfunc_challenge_sync(token: Uint8Array | null, cancellable: Gio.Cancellable | null): Uint8Array | null
    vfunc_try_empty_password_sync(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Camel-1.2.Camel.Sasl

    connect(sigName: "notify::authenticated", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Sasl extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Sasl

    static name: string
    static $gtype: GObject.GType<Sasl>

    // Constructors of Camel-1.2.Camel.Sasl

    constructor(config?: Sasl_ConstructProps) 
    constructor(service_name: string, mechanism: string, service: Service) 
    static new(service_name: string, mechanism: string, service: Service): Sasl
    _init(config?: Sasl_ConstructProps): void
    static authtype(mechanism: string): ServiceAuthType | null
    static authtype_list(include_plain: boolean): ServiceAuthType[]
    /**
     * Checks whether exists a #CamelSasl method for the `mechanism` and
     * whether it derives from #CamelSaslXOAuth2. Such mechanisms are
     * also treated as XOAUTH2, even their real name is different.
     * @param mechanism an authentication mechanism
     */
    static is_xoauth2_alias(mechanism: string | null): boolean
}

interface SaslAnonymous_ConstructProps extends Sasl_ConstructProps {
}

interface SaslAnonymous {

    // Own fields of Camel-1.2.Camel.SaslAnonymous

    parent: Sasl
    priv: SaslAnonymousPrivate

    // Class property signals of Camel-1.2.Camel.SaslAnonymous

    connect(sigName: "notify::authenticated", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SaslAnonymous extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslAnonymous

    static name: string
    static $gtype: GObject.GType<SaslAnonymous>

    // Constructors of Camel-1.2.Camel.SaslAnonymous

    constructor(config?: SaslAnonymous_ConstructProps) 
    /**
     * Create a new #CamelSaslAnonymous object.
     * @constructor 
     * @param type trace type
     * @param trace_info trace info
     */
    constructor(type: SaslAnonTraceType, trace_info: string) 
    /**
     * Create a new #CamelSaslAnonymous object.
     * @constructor 
     * @param type trace type
     * @param trace_info trace info
     */
    static new(type: SaslAnonTraceType, trace_info: string): SaslAnonymous

    // Overloads of new

    static new(service_name: string, mechanism: string, service: Service): Sasl
    _init(config?: SaslAnonymous_ConstructProps): void
}

interface SaslCramMd5_ConstructProps extends Sasl_ConstructProps {
}

interface SaslCramMd5 {

    // Own fields of Camel-1.2.Camel.SaslCramMd5

    parent: Sasl
    priv: SaslCramMd5Private

    // Class property signals of Camel-1.2.Camel.SaslCramMd5

    connect(sigName: "notify::authenticated", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SaslCramMd5 extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslCramMd5

    static name: string
    static $gtype: GObject.GType<SaslCramMd5>

    // Constructors of Camel-1.2.Camel.SaslCramMd5

    constructor(config?: SaslCramMd5_ConstructProps) 
    _init(config?: SaslCramMd5_ConstructProps): void
}

interface SaslDigestMd5_ConstructProps extends Sasl_ConstructProps {
}

interface SaslDigestMd5 {

    // Own fields of Camel-1.2.Camel.SaslDigestMd5

    parent: Sasl
    priv: SaslDigestMd5Private

    // Class property signals of Camel-1.2.Camel.SaslDigestMd5

    connect(sigName: "notify::authenticated", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SaslDigestMd5 extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslDigestMd5

    static name: string
    static $gtype: GObject.GType<SaslDigestMd5>

    // Constructors of Camel-1.2.Camel.SaslDigestMd5

    constructor(config?: SaslDigestMd5_ConstructProps) 
    _init(config?: SaslDigestMd5_ConstructProps): void
}

interface SaslGssapi_ConstructProps extends Sasl_ConstructProps {
}

interface SaslGssapi {

    // Own fields of Camel-1.2.Camel.SaslGssapi

    parent: Sasl
    priv: SaslGssapiPrivate

    // Owm methods of Camel-1.2.Camel.SaslGssapi

    /**
     * Set host and user to use, instead of those in CamelService's settings.
     * It's both or none, aka either set both, or the settings values are used.
     * This is used to not require CamelService instance at all.
     * @param override_host Host name to use during challenge processing; can be %NULL
     * @param override_user User name to use during challenge processing; can be %NULL
     */
    override_host_and_user(override_host: string | null, override_user: string | null): void

    // Class property signals of Camel-1.2.Camel.SaslGssapi

    connect(sigName: "notify::authenticated", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SaslGssapi extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslGssapi

    static name: string
    static $gtype: GObject.GType<SaslGssapi>

    // Constructors of Camel-1.2.Camel.SaslGssapi

    constructor(config?: SaslGssapi_ConstructProps) 
    _init(config?: SaslGssapi_ConstructProps): void
    static is_available(): boolean
}

interface SaslLogin_ConstructProps extends Sasl_ConstructProps {
}

interface SaslLogin {

    // Own fields of Camel-1.2.Camel.SaslLogin

    parent: Sasl
    priv: SaslLoginPrivate

    // Class property signals of Camel-1.2.Camel.SaslLogin

    connect(sigName: "notify::authenticated", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SaslLogin extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslLogin

    static name: string
    static $gtype: GObject.GType<SaslLogin>

    // Constructors of Camel-1.2.Camel.SaslLogin

    constructor(config?: SaslLogin_ConstructProps) 
    _init(config?: SaslLogin_ConstructProps): void
}

interface SaslNTLM_ConstructProps extends Sasl_ConstructProps {
}

interface SaslNTLM {

    // Own fields of Camel-1.2.Camel.SaslNTLM

    parent: Sasl
    priv: SaslNTLMPrivate

    // Class property signals of Camel-1.2.Camel.SaslNTLM

    connect(sigName: "notify::authenticated", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SaslNTLM extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslNTLM

    static name: string
    static $gtype: GObject.GType<SaslNTLM>

    // Constructors of Camel-1.2.Camel.SaslNTLM

    constructor(config?: SaslNTLM_ConstructProps) 
    _init(config?: SaslNTLM_ConstructProps): void
}

interface SaslPOPB4SMTP_ConstructProps extends Sasl_ConstructProps {
}

interface SaslPOPB4SMTP {

    // Own fields of Camel-1.2.Camel.SaslPOPB4SMTP

    parent: Sasl
    priv: SaslPOPB4SMTPPrivate

    // Class property signals of Camel-1.2.Camel.SaslPOPB4SMTP

    connect(sigName: "notify::authenticated", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SaslPOPB4SMTP extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslPOPB4SMTP

    static name: string
    static $gtype: GObject.GType<SaslPOPB4SMTP>

    // Constructors of Camel-1.2.Camel.SaslPOPB4SMTP

    constructor(config?: SaslPOPB4SMTP_ConstructProps) 
    _init(config?: SaslPOPB4SMTP_ConstructProps): void
}

interface SaslPlain_ConstructProps extends Sasl_ConstructProps {
}

interface SaslPlain {

    // Own fields of Camel-1.2.Camel.SaslPlain

    parent: Sasl
    priv: SaslPlainPrivate

    // Class property signals of Camel-1.2.Camel.SaslPlain

    connect(sigName: "notify::authenticated", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SaslPlain extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslPlain

    static name: string
    static $gtype: GObject.GType<SaslPlain>

    // Constructors of Camel-1.2.Camel.SaslPlain

    constructor(config?: SaslPlain_ConstructProps) 
    _init(config?: SaslPlain_ConstructProps): void
}

interface SaslXOAuth2_ConstructProps extends Sasl_ConstructProps {
}

interface SaslXOAuth2 {

    // Own fields of Camel-1.2.Camel.SaslXOAuth2

    parent: Sasl
    priv: SaslXOAuth2Private

    // Class property signals of Camel-1.2.Camel.SaslXOAuth2

    connect(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SaslXOAuth2 extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2

    static name: string
    static $gtype: GObject.GType<SaslXOAuth2>

    // Constructors of Camel-1.2.Camel.SaslXOAuth2

    constructor(config?: SaslXOAuth2_ConstructProps) 
    _init(config?: SaslXOAuth2_ConstructProps): void
}

interface SaslXOAuth2Google_ConstructProps extends SaslXOAuth2_ConstructProps {
}

interface SaslXOAuth2Google {

    // Own fields of Camel-1.2.Camel.SaslXOAuth2Google

    parent: SaslXOAuth2
    priv: SaslXOAuth2GooglePrivate

    // Class property signals of Camel-1.2.Camel.SaslXOAuth2Google

    connect(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SaslXOAuth2Google extends SaslXOAuth2 {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Google

    static name: string
    static $gtype: GObject.GType<SaslXOAuth2Google>

    // Constructors of Camel-1.2.Camel.SaslXOAuth2Google

    constructor(config?: SaslXOAuth2Google_ConstructProps) 
    _init(config?: SaslXOAuth2Google_ConstructProps): void
}

interface SaslXOAuth2Outlook_ConstructProps extends SaslXOAuth2_ConstructProps {
}

interface SaslXOAuth2Outlook {

    // Own fields of Camel-1.2.Camel.SaslXOAuth2Outlook

    parent: SaslXOAuth2
    priv: SaslXOAuth2OutlookPrivate

    // Class property signals of Camel-1.2.Camel.SaslXOAuth2Outlook

    connect(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SaslXOAuth2Outlook extends SaslXOAuth2 {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Outlook

    static name: string
    static $gtype: GObject.GType<SaslXOAuth2Outlook>

    // Constructors of Camel-1.2.Camel.SaslXOAuth2Outlook

    constructor(config?: SaslXOAuth2Outlook_ConstructProps) 
    _init(config?: SaslXOAuth2Outlook_ConstructProps): void
}

interface SaslXOAuth2Yahoo_ConstructProps extends SaslXOAuth2_ConstructProps {
}

interface SaslXOAuth2Yahoo {

    // Own fields of Camel-1.2.Camel.SaslXOAuth2Yahoo

    parent: SaslXOAuth2
    priv: SaslXOAuth2YahooPrivate

    // Class property signals of Camel-1.2.Camel.SaslXOAuth2Yahoo

    connect(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mechanism", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SaslXOAuth2Yahoo extends SaslXOAuth2 {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Yahoo

    static name: string
    static $gtype: GObject.GType<SaslXOAuth2Yahoo>

    // Constructors of Camel-1.2.Camel.SaslXOAuth2Yahoo

    constructor(config?: SaslXOAuth2Yahoo_ConstructProps) 
    _init(config?: SaslXOAuth2Yahoo_ConstructProps): void
}

interface Service_ConstructProps extends Gio.Initable_ConstructProps, Object_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.Service

    display_name?: string | null
    password?: string | null
    provider?: Provider | null
    proxy_resolver?: Gio.ProxyResolver | null
    session?: Session | null
    settings?: Settings | null
    uid?: string | null
}

interface Service extends Gio.Initable {

    // Own properties of Camel-1.2.Camel.Service

    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    readonly provider: Provider
    proxy_resolver: Gio.ProxyResolver
    readonly session: Session
    settings: Settings
    readonly uid: string

    // Own fields of Camel-1.2.Camel.Service

    parent: Object
    priv: ServicePrivate

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
     * @param io_priority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    authenticate(mechanism: string | null, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
     */
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
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
    authenticate_sync(mechanism: string | null, cancellable: Gio.Cancellable | null): AuthenticationResult
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
    // TODO fix conflict: connect(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_service_connect().
     * @param result a #GAsyncResult
     */
    connect_finish(result: Gio.AsyncResult): boolean
    /**
     * Connects `service` to a remote server using the information in its
     * #CamelService:settings instance.
     * 
     * If a connect operation is already in progress when this function is
     * called, its results will be reflected in this connect operation.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    connect_sync(cancellable: Gio.Cancellable | null): boolean
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
    // TODO fix conflict: disconnect(clean: boolean, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_service_disconnect().
     * @param result a #GAsyncResult
     */
    disconnect_finish(result: Gio.AsyncResult): boolean
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
    disconnect_sync(clean: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Thread-safe variation of camel_service_get_display_name().
     * Use this function when accessing `service` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dup_display_name(): string | null
    /**
     * Thread-safe variation of camel_service_get_password().
     * Use this function when accessing `service` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dup_password(): string
    /**
     * Returns the connection status for `service`.
     */
    get_connection_status(): ServiceConnectionStatus
    /**
     * Returns the display name for `service,` or %NULL if `service` has not
     * been given a display name.  The display name is intended for use in
     * a user interface and should generally be given a user-defined name.
     * 
     * Compare this with camel_service_get_name(), which returns a built-in
     * description of the type of service (IMAP, SMTP, etc.).
     */
    get_display_name(): string | null
    /**
     * This gets the name of the service in a "friendly" (suitable for
     * humans) form. If `brief` is %TRUE, this should be a brief description
     * such as for use in the folder tree. If `brief` is %FALSE, it should
     * be a more complete and mostly unambiguous description.
     * @param brief whether or not to use a briefer form
     */
    get_name(brief: boolean): string
    /**
     * Returns the password for `service`.  Some SASL mechanisms use this
     * when attempting to authenticate.
     */
    get_password(): string
    /**
     * Gets the #CamelProvider associated with the service.
     */
    get_provider(): Provider
    /**
     * Gets the unique identifier string associated with the service.
     */
    get_uid(): string
    /**
     * Returns the base directory under which to store cache data
     * for `service`.  The directory is formed by appending the directory
     * returned by camel_session_get_user_cache_dir() with the service's
     * #CamelService:uid value.
     */
    get_user_cache_dir(): string
    /**
     * Returns the base directory under which to store user-specific data
     * for `service`.  The directory is formed by appending the directory
     * returned by camel_session_get_user_data_dir() with the service's
     * #CamelService:uid value.
     */
    get_user_data_dir(): string
    /**
     * Performs any necessary file migrations for `service`.  This should be
     * called after installing or configuring the `service'`s #CamelSettings,
     * since it requires building a URL string for `service`.
     */
    migrate_files(): void
    /**
     * Returns a new #CamelURL representing `service`.
     * Free the returned #CamelURL with camel_url_free().
     */
    new_camel_url(): URL
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
    query_auth_types(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_service_query_auth_types().
     * Free the returned list with g_list_free().
     * @param result a #GAsyncResult
     */
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    /**
     * Obtains a list of authentication types supported by `service`.
     * Free the returned list with g_list_free().
     * @param cancellable optional #GCancellable object, or %NULL
     */
    query_auth_types_sync(cancellable: Gio.Cancellable | null): ServiceAuthType[]
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
     * @param task_func function to call when `task` is dispatched
     */
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    /**
     * Returns the #GProxyResolver for `service`.  If an application needs to
     * override this, it should do so prior to calling functions on `service`
     * that may require a network connection.
     * 
     * The returned #GProxyResolver is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
     */
    ref_proxy_resolver(): Gio.ProxyResolver | null
    /**
     * Returns the #CamelSession associated with the service.
     * 
     * The returned #CamelSession is referenced for thread-safety.  Unreference
     * the #CamelSession with g_object_unref() when finished with it.
     */
    ref_session(): Session
    /**
     * Returns the #CamelSettings instance associated with the service.
     * 
     * The returned #CamelSettings is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
     */
    ref_settings(): Settings
    /**
     * Assigns a UTF-8 display name to `service`.  The display name is intended
     * for use in a user interface and should generally be given a user-defined
     * name.
     * 
     * Compare this with camel_service_get_name(), which returns a built-in
     * description of the type of service (IMAP, SMTP, etc.).
     * @param display_name a valid UTF-8 string, or %NULL
     */
    set_display_name(display_name: string | null): void
    /**
     * Sets the password for `service`.  Use this function to cache the password
     * in memory after obtaining it through camel_session_get_password().  Some
     * SASL mechanisms use this when attempting to authenticate.
     * @param password the password for `service`
     */
    set_password(password: string): void
    /**
     * Sets the #GProxyResolver for `service`.  If an application needs to
     * override this, it should do so prior to calling functions on `service`
     * that may require a network connection.
     * @param proxy_resolver a #GProxyResolver, or %NULL for the default
     */
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver | null): void
    /**
     * Associates a new #CamelSettings instance with the service.
     * The `settings` instance must match the settings type defined in
     * #CamelServiceClass.  If `settings` is %NULL, a new #CamelSettings
     * instance of the appropriate type is created with all properties
     * set to defaults.
     * @param settings an instance derviced from #CamelSettings, or %NULL
     */
    set_settings(settings: Settings | null): void

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
     */
    vfunc_authenticate_sync(mechanism: string | null, cancellable: Gio.Cancellable | null): AuthenticationResult
    /**
     * Connects `service` to a remote server using the information in its
     * #CamelService:settings instance.
     * 
     * If a connect operation is already in progress when this function is
     * called, its results will be reflected in this connect operation.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_connect_sync(cancellable: Gio.Cancellable | null): boolean
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
     */
    vfunc_disconnect_sync(clean: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * This gets the name of the service in a "friendly" (suitable for
     * humans) form. If `brief` is %TRUE, this should be a brief description
     * such as for use in the folder tree. If `brief` is %FALSE, it should
     * be a more complete and mostly unambiguous description.
     * @virtual 
     * @param brief whether or not to use a briefer form
     */
    vfunc_get_name(brief: boolean): string
    /**
     * Obtains a list of authentication types supported by `service`.
     * Free the returned list with g_list_free().
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_query_auth_types_sync(cancellable: Gio.Cancellable | null): ServiceAuthType[]

    // Class property signals of Camel-1.2.Camel.Service

    connect(sigName: "notify::connection-status", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Service extends Object {

    // Own properties of Camel-1.2.Camel.Service

    static name: string
    static $gtype: GObject.GType<Service>

    // Constructors of Camel-1.2.Camel.Service

    constructor(config?: Service_ConstructProps) 
    _init(config?: Service_ConstructProps): void
}

interface Session_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.Session

    junk_filter?: JunkFilter | null
    network_monitor?: Gio.NetworkMonitor | null
    online?: boolean | null
    user_cache_dir?: string | null
    user_data_dir?: string | null
}

/**
 * Signal callback interface for `job-finished`
 */
interface Session_JobFinishedSignalCallback {
    ($obj: Session, object: Gio.Cancellable | null, p0: GLib.Error): void
}

/**
 * Signal callback interface for `job-started`
 */
interface Session_JobStartedSignalCallback {
    ($obj: Session, object: Gio.Cancellable | null): void
}

/**
 * Signal callback interface for `user-alert`
 */
interface Session_UserAlertSignalCallback {
    ($obj: Session, service: Service, type: SessionAlertType, message: string): void
}

interface Session {

    // Own properties of Camel-1.2.Camel.Session

    junk_filter: JunkFilter
    readonly main_context: GLib.MainContext
    network_monitor: Gio.NetworkMonitor
    online: boolean
    user_cache_dir: string
    user_data_dir: string

    // Own fields of Camel-1.2.Camel.Session

    parent: GObject.Object
    priv: SessionPrivate

    // Owm methods of Camel-1.2.Camel.Session

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
    add_service(uid: string, protocol: string, type: ProviderType): Service
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
    addressbook_contains_sync(book_uid: string, email_address: string, cancellable: Gio.Cancellable | null): boolean
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
    authenticate(service: Service, mechanism: string | null, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_session_authenticate().
     * 
     * If an error occurred, or if authentication was aborted, the function
     * sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    authenticate_finish(result: Gio.AsyncResult): boolean
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
    authenticate_sync(service: Service, mechanism: string | null, cancellable: Gio.Cancellable | null): boolean
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
    forget_password(service: Service, item: string): boolean
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
     * @param io_priority the I/O priority for the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    forward_to(folder: Folder, message: MimeMessage, address: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_session_forward_to().
     * 
     * If an error occurred, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    forward_to_finish(result: Gio.AsyncResult): boolean
    /**
     * Forwards `message` in `folder` to the email address(es) given by `address`.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param folder the #CamelFolder where `message` is located
     * @param message the #CamelMimeMessage to forward
     * @param address the recipient's email address
     * @param cancellable optional #GCancellable object, or %NULL
     */
    forward_to_sync(folder: Folder, message: MimeMessage, address: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * The optional `for_folder` can be used to determine which filters
     * to add and which not.
     * @param type the type of filter (eg, "incoming")
     * @param for_folder an optional #CamelFolder, for which the filter driver will run, or %NULL
     */
    get_filter_driver(type: string, for_folder: Folder | null): FilterDriver
    /**
     * Returns the #CamelJunkFilter instance used to classify messages as
     * junk or not junk during filtering.
     * 
     * Note that #CamelJunkFilter itself is just an interface.  The application
     * must implement the interface and install a #CamelJunkFilter instance for
     * junk filtering to take place.
     */
    get_junk_filter(): JunkFilter | null
    get_junk_headers(): GLib.HashTable
    /**
     * Obtains the OAuth 2.0 access token for `service` along with its expiry
     * in seconds from the current time (or 0 if unknown).
     * 
     * Free the returned access token with g_free() when no longer needed.
     * @param service a #CamelService
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_oauth2_access_token_sync(service: Service, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    get_online(): boolean
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
    get_password(service: Service, prompt: string, item: string, flags: number): string
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
    get_recipient_certificates_sync(flags: number, recipients: string[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_certificates */ string[] ]
    /**
     * Returns the base directory under which to store user-specific mail cache.
     */
    get_user_cache_dir(): string
    /**
     * Returns the base directory under which to store user-specific mail data.
     */
    get_user_data_dir(): string
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
     */
    idle_add(priority: number, function_: GLib.SourceFunc): number
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
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
     */
    list_services(): Service[]
    /**
     * Looks up for the `name` in address books.
     * @param name a name/address to lookup for
     */
    lookup_addressbook(name: string): boolean
    /**
     * Returns the #GMainContext on which event sources for `session` are to
     * be attached.
     */
    ref_main_context(): GLib.MainContext
    /**
     * References a #GNetworkMonitor instance, which had been previously set
     * by camel_session_set_network_monitor(). If none is set, then the default
     * #GNetworkMonitor is returned, as provided by g_network_monitor_get_default().
     * The returned pointer is referenced for thread safety, unref it with
     * g_object_unref() when no longer needed.
     */
    ref_network_monitor(): Gio.NetworkMonitor
    /**
     * Looks up a #CamelService by its unique identifier string.  The service
     * must have been previously added using camel_session_add_service().
     * 
     * The returned #CamelService is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @param uid a unique identifier string
     */
    ref_service(uid: string): Service | null
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
     */
    ref_service_by_url(url: URL, type: ProviderType): Service | null
    /**
     * Removes a #CamelService previously added by camel_session_add_service().
     * @param service the #CamelService to remove
     */
    remove_service(service: Service): void
    /**
     * Removes all #CamelService instances added by camel_session_add_service().
     * 
     * This can be useful during application shutdown to ensure all #CamelService
     * instances are freed properly, especially since #CamelSession instances are
     * prone to reference cycles.
     */
    remove_services(): void
    /**
     * Installs the #CamelJunkFilter instance used to classify messages as
     * junk or not junk during filtering.
     * 
     * Note that #CamelJunkFilter itself is just an interface.  The application
     * must implement the interface and install a #CamelJunkFilter instance for
     * junk filtering to take place.
     * @param junk_filter a #CamelJunkFilter, or %NULL
     */
    set_junk_filter(junk_filter: JunkFilter | null): void
    set_junk_headers(headers: string[], values: string[]): void
    /**
     * Sets a network monitor instance for the `session`. This can be used
     * to override which #GNetworkMonitor should be used to check network
     * availability and whether a server is reachable.
     * @param network_monitor a #GNetworkMonitor or %NULL
     */
    set_network_monitor(network_monitor: Gio.NetworkMonitor | null): void
    /**
     * Sets the online status of `session` to `online`.
     * @param online whether or not the session should be online
     */
    set_online(online: boolean): void
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
    submit_job(description: string, callback: SessionCallback): void
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
     * @param errors the problems with `certificate`
     */
    trust_prompt(service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): CertTrust
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
    user_alert(service: Service, type: SessionAlertType, message: string): void

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
     */
    vfunc_add_service(uid: string, protocol: string, type: ProviderType): Service
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
     * @param book_uid an address book UID
     * @param email_address an email address to check for
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_addressbook_contains_sync(book_uid: string, email_address: string, cancellable: Gio.Cancellable | null): boolean
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
     */
    vfunc_authenticate_sync(service: Service, mechanism: string | null, cancellable: Gio.Cancellable | null): boolean
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
     */
    vfunc_forget_password(service: Service, item: string): boolean
    /**
     * Forwards `message` in `folder` to the email address(es) given by `address`.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @virtual 
     * @param folder the #CamelFolder where `message` is located
     * @param message the #CamelMimeMessage to forward
     * @param address the recipient's email address
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_forward_to_sync(folder: Folder, message: MimeMessage, address: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * The optional `for_folder` can be used to determine which filters
     * to add and which not.
     * @virtual 
     * @param type the type of filter (eg, "incoming")
     * @param for_folder an optional #CamelFolder, for which the filter driver will run, or %NULL
     */
    vfunc_get_filter_driver(type: string, for_folder: Folder | null): FilterDriver
    /**
     * Obtains the OAuth 2.0 access token for `service` along with its expiry
     * in seconds from the current time (or 0 if unknown).
     * 
     * Free the returned access token with g_free() when no longer needed.
     * @virtual 
     * @param service a #CamelService
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_get_oauth2_access_token_sync(service: Service, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
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
     */
    vfunc_get_password(service: Service, prompt: string, item: string, flags: number): string
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
     */
    vfunc_get_recipient_certificates_sync(flags: number, recipients: string[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_certificates */ string[] ]
    vfunc_job_finished(cancellable: Gio.Cancellable | null, error: GLib.Error): void
    vfunc_job_started(cancellable: Gio.Cancellable | null): void
    /**
     * Looks up for the `name` in address books.
     * @virtual 
     * @param name a name/address to lookup for
     */
    vfunc_lookup_addressbook(name: string): boolean
    /**
     * Removes a #CamelService previously added by camel_session_add_service().
     * @virtual 
     * @param service the #CamelService to remove
     */
    vfunc_remove_service(service: Service): void
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
     */
    vfunc_trust_prompt(service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): CertTrust
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
    vfunc_user_alert(service: Service, type: SessionAlertType, message: string): void

    // Own signals of Camel-1.2.Camel.Session

    connect(sigName: "job-finished", callback: Session_JobFinishedSignalCallback): number
    connect_after(sigName: "job-finished", callback: Session_JobFinishedSignalCallback): number
    emit(sigName: "job-finished", object: Gio.Cancellable | null, p0: GLib.Error, ...args: any[]): void
    connect(sigName: "job-started", callback: Session_JobStartedSignalCallback): number
    connect_after(sigName: "job-started", callback: Session_JobStartedSignalCallback): number
    emit(sigName: "job-started", object: Gio.Cancellable | null, ...args: any[]): void
    connect(sigName: "user-alert", callback: Session_UserAlertSignalCallback): number
    connect_after(sigName: "user-alert", callback: Session_UserAlertSignalCallback): number
    emit(sigName: "user-alert", service: Service, type: SessionAlertType, message: string, ...args: any[]): void

    // Class property signals of Camel-1.2.Camel.Session

    connect(sigName: "notify::junk-filter", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-filter", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::junk-filter", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::network-monitor", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-monitor", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::network-monitor", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::user-cache-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-cache-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-cache-dir", ...args: any[]): void
    connect(sigName: "notify::user-data-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-data-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-data-dir", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Session extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Session

    static name: string
    static $gtype: GObject.GType<Session>

    // Constructors of Camel-1.2.Camel.Session

    constructor(config?: Session_ConstructProps) 
    _init(config?: Session_ConstructProps): void
}

interface Settings_ConstructProps extends GObject.Object_ConstructProps {
}

interface Settings {

    // Owm methods of Camel-1.2.Camel.Settings

    /**
     * Creates a copy of `settings,` such that passing `settings` and the
     * copied instance to camel_settings_equal() would return %TRUE.
     * 
     * By default, this creates a new settings instance with the same #GType
     * as `settings,` and copies all #GObject property values from `settings`
     * to the new instance.
     */
    clone(): Settings
    /**
     * Returns %TRUE if `settings_a` and `settings_b` are equal.
     * 
     * By default, equality requires both instances to have the same #GType
     * with the same set of #GObject properties, and each property value in
     * `settings_a` is equal to the corresponding value in `settings_b`.
     * @param settings_b another #CamelSettings
     */
    equal(settings_b: Settings): boolean

    // Own virtual methods of Camel-1.2.Camel.Settings

    /**
     * Creates a copy of `settings,` such that passing `settings` and the
     * copied instance to camel_settings_equal() would return %TRUE.
     * 
     * By default, this creates a new settings instance with the same #GType
     * as `settings,` and copies all #GObject property values from `settings`
     * to the new instance.
     * @virtual 
     */
    vfunc_clone(): Settings
    /**
     * Returns %TRUE if `settings_a` and `settings_b` are equal.
     * 
     * By default, equality requires both instances to have the same #GType
     * with the same set of #GObject properties, and each property value in
     * `settings_a` is equal to the corresponding value in `settings_b`.
     * @virtual 
     * @param settings_b another #CamelSettings
     */
    vfunc_equal(settings_b: Settings): boolean

    // Class property signals of Camel-1.2.Camel.Settings

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @interface 
 */
class Settings extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Settings

    static name: string
    static $gtype: GObject.GType<Settings>

    // Constructors of Camel-1.2.Camel.Settings

    constructor(config?: Settings_ConstructProps) 
    _init(config?: Settings_ConstructProps): void
    /**
     * Returns an array of #GParamSpec for properties of `class` which are
     * considered to be settings.  By default all properties are considered
     * to be settings, but subclasses may wish to exclude certain properties.
     * Free the returned array with g_free().
     * @param n_settings return location for the length of the returned array
     */
    static list_settings(settings_class: Settings | Function | GObject.GType, n_settings: number): GObject.ParamSpec
}

interface Store_ConstructProps extends Gio.Initable_ConstructProps, Service_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `folder-created`
 */
interface Store_FolderCreatedSignalCallback {
    ($obj: Store, object: FolderInfo): void
}

/**
 * Signal callback interface for `folder-deleted`
 */
interface Store_FolderDeletedSignalCallback {
    ($obj: Store, object: FolderInfo): void
}

/**
 * Signal callback interface for `folder-info-stale`
 */
interface Store_FolderInfoStaleSignalCallback {
    ($obj: Store): void
}

/**
 * Signal callback interface for `folder-opened`
 */
interface Store_FolderOpenedSignalCallback {
    ($obj: Store, object: Folder): void
}

/**
 * Signal callback interface for `folder-renamed`
 */
interface Store_FolderRenamedSignalCallback {
    ($obj: Store, object: string, p0: FolderInfo): void
}

interface Store extends Gio.Initable {

    // Own fields of Camel-1.2.Camel.Store

    parent: Service
    priv: StorePrivate

    // Owm methods of Camel-1.2.Camel.Store

    /**
     * Returns if this folder (param info) should be checked for new mail or not.
     * It should not look into sub infos (info->child) or next infos, it should
     * return value only for the actual folder info.
     * Default behavior is that all Inbox folders are intended to be refreshed.
     * @param info a #CamelFolderInfo
     */
    can_refresh_folder(info: FolderInfo): boolean
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
    create_folder(parent_name: string | null, folder_name: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_create_folder().
     * The returned #CamelFolderInfo struct should be freed with
     * camel_folder_info_free().
     * @param result a #GAsyncResult
     */
    create_folder_finish(result: Gio.AsyncResult): FolderInfo | null
    /**
     * Creates a new folder as a child of an existing folder.
     * `parent_name` can be %NULL to create a new top-level folder.
     * The returned #CamelFolderInfo struct should be freed with
     * camel_folder_info_free().
     * @param parent_name name of the new folder's parent, or %NULL
     * @param folder_name name of the folder to create
     * @param cancellable optional #GCancellable object, or %NULL
     */
    create_folder_sync(parent_name: string | null, folder_name: string, cancellable: Gio.Cancellable | null): FolderInfo | null
    /**
     * Deletes local data for the given `folder_name`. The folder should
     * be part of the opened folders.
     * 
     * It doesn't delete the folder in the store (server) as such.
     * Use camel_store_delete_folder(), or its synchronous variant,
     * if you want to do that instead.
     * @param folder_name a folder full name to delete from the cache
     */
    delete_cached_folder(folder_name: string): void
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
    delete_folder(folder_name: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_delete_folder().
     * @param result a #GAsyncResult
     */
    delete_folder_finish(result: Gio.AsyncResult): boolean
    /**
     * Deletes the folder described by `folder_name`.  The folder must be empty.
     * @param folder_name name of the folder to delete
     * @param cancellable optional #GCancellable object, or %NULL
     */
    delete_folder_sync(folder_name: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns a #GPtrArray of all the opened folders for the `store`. The caller owns
     * both the array and the folder references, so to free the array use:
     * 
     * |[
     *     g_ptr_array_foreach (array, (GFunc) g_object_unref, NULL);
     *     g_ptr_array_free (array, TRUE);
     * ```
     * 
     */
    dup_opened_folders(): Folder[]
    /**
     * Emits the #CamelStore::folder-created signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @param folder_info information about the created folder
     */
    folder_created(folder_info: FolderInfo): void
    /**
     * Emits the #CamelStore::folder-deleted signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @param folder_info information about the deleted folder
     */
    folder_deleted(folder_info: FolderInfo): void
    /**
     * Emits the #CamelStore::folder-info-stale signal from an idle source
     * on the main loop.  The idle source's priority is #G_PRIORITY_LOW.
     * 
     * See the #CamelStore::folder-info-stale documentation for details on
     * when to use this signal.
     * 
     * This function is only intended for Camel providers.
     */
    folder_info_stale(): void
    /**
     * Emits the #CamelStore::folder-opened signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @param folder the #CamelFolder that was opened
     */
    folder_opened(folder: Folder): void
    /**
     * Emits the #CamelStore::folder-renamed signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @param old_name the old name of the folder
     * @param folder_info information about the renamed folder
     */
    folder_renamed(old_name: string, folder_info: FolderInfo): void
    /**
     * Returns whether there can be done automatic save of folder changes.
     * Default is TRUE. The descendants can overwrite it with CamelStoreClass::get_can_auto_save_changes().
     */
    get_can_auto_save_changes(): boolean
    get_db(): DB
    get_flags(): number
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
    get_folder(folder_name: string, flags: StoreGetFolderFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_get_folder().
     * @param result a #GAsyncResult
     */
    get_folder_finish(result: Gio.AsyncResult): Folder | null
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
    get_folder_info(top: string | null, flags: StoreGetFolderInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_get_folder_info().
     * The returned #CamelFolderInfo tree should be freed with
     * camel_folder_info_free().
     * @param result a #GAsyncResult
     */
    get_folder_info_finish(result: Gio.AsyncResult): FolderInfo | null
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
    get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable: Gio.Cancellable | null): FolderInfo | null
    /**
     * Gets a specific folder object from `store` by name.
     * @param folder_name name of the folder to get
     * @param flags folder flags (create, save body index, etc)
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable: Gio.Cancellable | null): Folder | null
    get_folders_bag(): ObjectBag
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
    get_inbox_folder(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_get_inbox_folder().
     * @param result a #GAsyncResult
     */
    get_inbox_folder_finish(result: Gio.AsyncResult): Folder | null
    /**
     * Gets the folder in `store` into which new mail is delivered.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_inbox_folder_sync(cancellable: Gio.Cancellable | null): Folder | null
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
    get_junk_folder(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_get_junk_folder().
     * @param result a #GAsyncResult
     */
    get_junk_folder_finish(result: Gio.AsyncResult): Folder | null
    /**
     * Gets the folder in `store` into which junk is delivered.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_junk_folder_sync(cancellable: Gio.Cancellable | null): Folder | null
    get_permissions(): number
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
    get_trash_folder(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_get_trash_folder().
     * @param result a #GAsyncResult
     */
    get_trash_folder_finish(result: Gio.AsyncResult): Folder | null
    /**
     * Gets the folder in `store` into which trash is delivered.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_trash_folder_sync(cancellable: Gio.Cancellable | null): Folder | null
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
    initial_setup(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_initial_setup().
     * 
     * The save_setup result, if not %NULL, should be freed using
     * g_hash_table_destroy(). It's not an error to have it %NULL,
     * it only means the `store` doesn't have anything to save.
     * @param result a #GAsyncResult
     */
    initial_setup_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
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
    initial_setup_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    /**
     * Checks the state of the current CamelDB used for the `store` and eventually
     * runs maintenance routines on it.
     */
    maybe_run_db_maintenance(): boolean
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
    rename_folder(old_name: string, new_name: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_rename_folder().
     * @param result a #GAsyncResult
     */
    rename_folder_finish(result: Gio.AsyncResult): boolean
    /**
     * Renames the folder described by `old_name` to `new_name`.
     * @param old_name the current name of the folder
     * @param new_name the new name of the folder
     * @param cancellable optional #GCancellable object, or %NULL
     */
    rename_folder_sync(old_name: string, new_name: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets flags for the `store,` a bit-or of #CamelStoreFlags.
     * @param flags bit-or of #CamelStoreFlags
     */
    set_flags(flags: number): void
    /**
     * Sets permissions for the `store,` a bit-or of #CamelStorePermissionFlags
     * @param permissions permissions of the `store,` a bit-or of #CamelStorePermissionFlags
     */
    set_permissions(permissions: number): void
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
    synchronize(expunge: boolean, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_synchronize().
     * @param result a #GAsyncResult
     */
    synchronize_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronizes any changes that have been made to `store` and its folders
     * with the real store.
     * @param expunge whether to expunge after synchronizing
     * @param cancellable optional #GCancellable object, or %NULL
     */
    synchronize_sync(expunge: boolean, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of Camel-1.2.Camel.Store

    /**
     * Returns if this folder (param info) should be checked for new mail or not.
     * It should not look into sub infos (info->child) or next infos, it should
     * return value only for the actual folder info.
     * Default behavior is that all Inbox folders are intended to be refreshed.
     * @virtual 
     * @param info a #CamelFolderInfo
     */
    vfunc_can_refresh_folder(info: FolderInfo): boolean
    /**
     * Creates a new folder as a child of an existing folder.
     * `parent_name` can be %NULL to create a new top-level folder.
     * The returned #CamelFolderInfo struct should be freed with
     * camel_folder_info_free().
     * @virtual 
     * @param parent_name name of the new folder's parent, or %NULL
     * @param folder_name name of the folder to create
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_create_folder_sync(parent_name: string | null, folder_name: string, cancellable: Gio.Cancellable | null): FolderInfo | null
    /**
     * Deletes the folder described by `folder_name`.  The folder must be empty.
     * @virtual 
     * @param folder_name name of the folder to delete
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_delete_folder_sync(folder_name: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Emits the #CamelStore::folder-created signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     * @param folder_info information about the created folder
     */
    vfunc_folder_created(folder_info: FolderInfo): void
    /**
     * Emits the #CamelStore::folder-deleted signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     * @param folder_info information about the deleted folder
     */
    vfunc_folder_deleted(folder_info: FolderInfo): void
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
    vfunc_folder_info_stale(): void
    /**
     * Emits the #CamelStore::folder-opened signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     * @param folder the #CamelFolder that was opened
     */
    vfunc_folder_opened(folder: Folder): void
    /**
     * Emits the #CamelStore::folder-renamed signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     * @param old_name the old name of the folder
     * @param folder_info information about the renamed folder
     */
    vfunc_folder_renamed(old_name: string, folder_info: FolderInfo): void
    /**
     * Returns whether there can be done automatic save of folder changes.
     * Default is TRUE. The descendants can overwrite it with CamelStoreClass::get_can_auto_save_changes().
     * @virtual 
     */
    vfunc_get_can_auto_save_changes(): boolean
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
     */
    vfunc_get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable: Gio.Cancellable | null): FolderInfo | null
    /**
     * Gets a specific folder object from `store` by name.
     * @virtual 
     * @param folder_name name of the folder to get
     * @param flags folder flags (create, save body index, etc)
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable: Gio.Cancellable | null): Folder | null
    /**
     * Gets the folder in `store` into which new mail is delivered.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_get_inbox_folder_sync(cancellable: Gio.Cancellable | null): Folder | null
    /**
     * Gets the folder in `store` into which junk is delivered.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_get_junk_folder_sync(cancellable: Gio.Cancellable | null): Folder | null
    /**
     * Gets the folder in `store` into which trash is delivered.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_get_trash_folder_sync(cancellable: Gio.Cancellable | null): Folder | null
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
     */
    vfunc_initial_setup_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    /**
     * Renames the folder described by `old_name` to `new_name`.
     * @virtual 
     * @param old_name the current name of the folder
     * @param new_name the new name of the folder
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_rename_folder_sync(old_name: string, new_name: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronizes any changes that have been made to `store` and its folders
     * with the real store.
     * @virtual 
     * @param expunge whether to expunge after synchronizing
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_synchronize_sync(expunge: boolean, cancellable: Gio.Cancellable | null): boolean

    // Own signals of Camel-1.2.Camel.Store

    connect(sigName: "folder-created", callback: Store_FolderCreatedSignalCallback): number
    connect_after(sigName: "folder-created", callback: Store_FolderCreatedSignalCallback): number
    emit(sigName: "folder-created", object: FolderInfo, ...args: any[]): void
    connect(sigName: "folder-deleted", callback: Store_FolderDeletedSignalCallback): number
    connect_after(sigName: "folder-deleted", callback: Store_FolderDeletedSignalCallback): number
    emit(sigName: "folder-deleted", object: FolderInfo, ...args: any[]): void
    connect(sigName: "folder-info-stale", callback: Store_FolderInfoStaleSignalCallback): number
    connect_after(sigName: "folder-info-stale", callback: Store_FolderInfoStaleSignalCallback): number
    emit(sigName: "folder-info-stale", ...args: any[]): void
    connect(sigName: "folder-opened", callback: Store_FolderOpenedSignalCallback): number
    connect_after(sigName: "folder-opened", callback: Store_FolderOpenedSignalCallback): number
    emit(sigName: "folder-opened", object: Folder, ...args: any[]): void
    connect(sigName: "folder-renamed", callback: Store_FolderRenamedSignalCallback): number
    connect_after(sigName: "folder-renamed", callback: Store_FolderRenamedSignalCallback): number
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo, ...args: any[]): void

    // Class property signals of Camel-1.2.Camel.Store

    connect(sigName: "notify::connection-status", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Store extends Service {

    // Own properties of Camel-1.2.Camel.Store

    static name: string
    static $gtype: GObject.GType<Store>

    // Constructors of Camel-1.2.Camel.Store

    constructor(config?: Store_ConstructProps) 
    _init(config?: Store_ConstructProps): void
}

interface StoreSettings_ConstructProps extends Settings_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.StoreSettings

    filter_inbox?: boolean | null
    store_changes_interval?: number | null
}

interface StoreSettings {

    // Own properties of Camel-1.2.Camel.StoreSettings

    filter_inbox: boolean
    store_changes_interval: number

    // Owm methods of Camel-1.2.Camel.StoreSettings

    /**
     * Returns whether to automatically apply filters to newly arrived messages
     * in the store's Inbox folder (assuming it has an Inbox folder).
     */
    get_filter_inbox(): boolean
    /**
     * Returns the interval, in seconds, for the changes in the folder being
     * saved automatically. 0 means immediately, while -1 means turning off
     * automatic folder change saving.
     */
    get_store_changes_interval(): number
    /**
     * Sets whether to automatically apply filters to newly arrived messages
     * in the store's Inbox folder (assuming it has an Inbox folder).
     * @param filter_inbox whether to filter new messages in Inbox
     */
    set_filter_inbox(filter_inbox: boolean): void
    /**
     * Sets the interval, in seconds, for the changes in the folder being
     * saved automatically. 0 means immediately, while -1 means turning off
     * automatic folder change saving.
     * @param interval the interval, in seconds
     */
    set_store_changes_interval(interval: number): void

    // Class property signals of Camel-1.2.Camel.StoreSettings

    connect(sigName: "notify::filter-inbox", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-inbox", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter-inbox", ...args: any[]): void
    connect(sigName: "notify::store-changes-interval", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-changes-interval", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::store-changes-interval", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class StoreSettings extends Settings {

    // Own properties of Camel-1.2.Camel.StoreSettings

    static name: string
    static $gtype: GObject.GType<StoreSettings>

    // Constructors of Camel-1.2.Camel.StoreSettings

    constructor(config?: StoreSettings_ConstructProps) 
    _init(config?: StoreSettings_ConstructProps): void
}

interface StoreSummary_ConstructProps extends GObject.Object_ConstructProps {
}

interface StoreSummary {

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
     * Obtain a copy of the summary array.  This is done atomically,
     * so cannot contain empty entries.
     * 
     * It must be freed using camel_store_summary_array_free().
     */
    array(): StoreInfo[]
    /**
     * Free the folder summary array.
     * @param array the summary array as gotten from camel_store_summary_array()
     */
    array_free(array: StoreInfo[]): void
    /**
     * Connects listeners for count changes on `folder_summary` to keep
     * CamelStoreInfo.total and CamelStoreInfo.unread in sync transparently.
     * The `folder_summary` is stored in `summary` as `path`. Use
     * camel_store_summary_disconnect_folder_summary() to disconnect from
     * listening.
     * @param path used path for `folder_summary`
     * @param folder_summary a #CamelFolderSummary object
     */
    connect_folder_summary(path: string, folder_summary: FolderSummary): boolean
    /**
     * Get the number of summary items stored in this summary.
     */
    count(): number
    /**
     * Diconnects count change listeners previously connected
     * by camel_store_summary_connect_folder_summary().
     * @param folder_summary a #CamelFolderSummary object
     */
    disconnect_folder_summary(folder_summary: FolderSummary): boolean
    /**
     * Unref and potentially free `info,` and all associated memory.
     * @param info a #CamelStoreInfo
     */
    info_unref(info: StoreInfo): void
    /**
     * Load the summary off disk.
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
    remove_path(path: string): void
    /**
     * Writes the summary to disk.  The summary is only written if changes
     * have occurred.
     */
    save(): number
    /**
     * Set the filename where the summary will be loaded to/saved from.
     * @param filename a filename
     */
    set_filename(filename: string): void
    /**
     * Sorts the array of the folders using the `compare_func`.
     * @param compare_func a compare function
     */
    sort(compare_func: GLib.CompareDataFunc): void
    /**
     * Mark the summary as changed, so that a save will force it to be
     * written back to disk.
     */
    touch(): void

    // Own virtual methods of Camel-1.2.Camel.StoreSummary

    vfunc_store_info_free(info: StoreInfo): void
    vfunc_store_info_save(file: object | null, info: StoreInfo): number
    vfunc_store_info_set_string(info: StoreInfo, type: number, value: string): void
    vfunc_summary_header_load(file: object | null): number
    vfunc_summary_header_save(file: object | null): number

    // Class property signals of Camel-1.2.Camel.StoreSummary

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StoreSummary extends GObject.Object {

    // Own properties of Camel-1.2.Camel.StoreSummary

    static name: string
    static $gtype: GObject.GType<StoreSummary>

    // Constructors of Camel-1.2.Camel.StoreSummary

    constructor(config?: StoreSummary_ConstructProps) 
    /**
     * Create a new #CamelStoreSummary object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CamelStoreSummary object.
     * @constructor 
     */
    static new(): StoreSummary
    _init(config?: StoreSummary_ConstructProps): void
}

interface Stream_ConstructProps extends Gio.Seekable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.Stream

    base_stream?: Gio.IOStream | null
}

interface Stream extends Gio.Seekable {

    // Own properties of Camel-1.2.Camel.Stream

    base_stream: Gio.IOStream

    // Own fields of Camel-1.2.Camel.Stream

    parent: GObject.Object
    priv: StreamPrivate

    // Owm methods of Camel-1.2.Camel.Stream

    /**
     * Closes the stream.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    close(cancellable: Gio.Cancellable | null): number
    /**
     * Tests if there are bytes left to read on the `stream` object.
     */
    eos(): boolean
    /**
     * Flushes any buffered data to the stream's backing store.  Only
     * meaningful for writable streams.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    flush(cancellable: Gio.Cancellable | null): number
    /**
     * Attempts to read up to `n` bytes from `stream` into `buffer`.
     * @param buffer output buffer
     * @param cancellable optional #GCancellable object, or %NULL
     */
    read(buffer: number[], cancellable: Gio.Cancellable | null): number
    /**
     * Returns the #GIOStream for `stream`.  This is only valid if `stream` was
     * created with camel_stream_new().  For all other #CamelStream subclasses
     * this function returns %NULL.
     * 
     * The returned #GIOStream is referenced for thread-safety and should be
     * unreferenced with g_object_unref() when finished with it.
     */
    ref_base_stream(): Gio.IOStream | null
    /**
     * Replaces the #GIOStream passed to camel_stream_new() with `base_stream`.
     * The new `base_stream` should wrap the original #GIOStream, such as when
     * adding Transport Layer Security after issuing a STARTTLS command.
     * @param base_stream a #GIOStream
     */
    set_base_stream(base_stream: Gio.IOStream): void
    /**
     * Attempts to write up to `n` bytes of `buffer` into `stream`.
     * @param buffer buffer to write.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    write(buffer: number[], cancellable: Gio.Cancellable | null): number
    /**
     * Writes the string to the stream.
     * @param string a string
     * @param cancellable optional #GCancellable object, or %NULL
     */
    write_string(string: string, cancellable: Gio.Cancellable | null): number
    /**
     * Write all of a stream (until eos) into another stream, in a
     * blocking fashion.
     * @param output_stream destination #CamelStream object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    write_to_stream(output_stream: Stream, cancellable: Gio.Cancellable | null): number

    // Own virtual methods of Camel-1.2.Camel.Stream

    /**
     * Closes the stream.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_close(cancellable: Gio.Cancellable | null): number
    /**
     * Tests if there are bytes left to read on the `stream` object.
     * @virtual 
     */
    vfunc_eos(): boolean
    /**
     * Flushes any buffered data to the stream's backing store.  Only
     * meaningful for writable streams.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_flush(cancellable: Gio.Cancellable | null): number
    /**
     * Attempts to read up to `n` bytes from `stream` into `buffer`.
     * @virtual 
     * @param buffer output buffer
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_read(buffer: number[], cancellable: Gio.Cancellable | null): number
    /**
     * Attempts to write up to `n` bytes of `buffer` into `stream`.
     * @virtual 
     * @param buffer buffer to write.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_write(buffer: number[], cancellable: Gio.Cancellable | null): number

    // Class property signals of Camel-1.2.Camel.Stream

    connect(sigName: "notify::base-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Stream extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Stream

    static name: string
    static $gtype: GObject.GType<Stream>

    // Constructors of Camel-1.2.Camel.Stream

    constructor(config?: Stream_ConstructProps) 
    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param base_stream a #GIOStream
     */
    constructor(base_stream: Gio.IOStream) 
    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param base_stream a #GIOStream
     */
    static new(base_stream: Gio.IOStream): Stream
    _init(config?: Stream_ConstructProps): void
}

interface StreamBuffer_ConstructProps extends Gio.Seekable_ConstructProps, Stream_ConstructProps {
}

interface StreamBuffer extends Gio.Seekable {

    // Own fields of Camel-1.2.Camel.StreamBuffer

    parent: Stream
    priv: StreamBufferPrivate

    // Owm methods of Camel-1.2.Camel.StreamBuffer

    /**
     * Discards any cached data in the `sbf`. The next read reads
     * from the stream.
     */
    discard_cache(): void
    /**
     * Read a line of characters up to the next newline character or
     * `max-1` characters.
     * 
     * If the newline character is encountered, then it will be
     * included in the buffer `buf`.  The buffer will be %NULL terminated.
     * @param buf Memory to write the string to.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    gets(buf: number[], cancellable: Gio.Cancellable | null): number
    /**
     * This function reads a complete newline-terminated line from the stream
     * and returns it in allocated memory. The trailing newline (and carriage
     * return if any) are not included in the returned string.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    read_line(cancellable: Gio.Cancellable | null): string | null

    // Own virtual methods of Camel-1.2.Camel.StreamBuffer

    vfunc_init(stream: Stream, mode: StreamBufferMode): void
    vfunc_init_vbuf(stream: Stream, mode: StreamBufferMode, buf: string, size: number): void

    // Class property signals of Camel-1.2.Camel.StreamBuffer

    connect(sigName: "notify::base-stream", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StreamBuffer extends Stream {

    // Own properties of Camel-1.2.Camel.StreamBuffer

    static name: string
    static $gtype: GObject.GType<StreamBuffer>

    // Constructors of Camel-1.2.Camel.StreamBuffer

    constructor(config?: StreamBuffer_ConstructProps) 
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
     */
    static new(stream: Stream, mode: StreamBufferMode): StreamBuffer

    // Overloads of new

    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param base_stream a #GIOStream
     */
    static new(base_stream: Gio.IOStream): Stream
    _init(config?: StreamBuffer_ConstructProps): void
}

interface StreamFilter_ConstructProps extends Gio.Seekable_ConstructProps, Stream_ConstructProps {
}

interface StreamFilter extends Gio.Seekable {

    // Own fields of Camel-1.2.Camel.StreamFilter

    parent: Stream
    priv: StreamFilterPrivate

    // Owm methods of Camel-1.2.Camel.StreamFilter

    /**
     * Add a new #CamelMimeFilter to execute during the processing of this
     * stream.  Each filter added is processed after the previous one.
     * 
     * Note that a filter should only be added to a single stream
     * at a time, otherwise unpredictable results may occur.
     * @param filter a #CamelMimeFilter object
     */
    add(filter: MimeFilter): number
    get_source(): Stream
    /**
     * Remove a processing filter from the stream by id.
     * @param id Filter id, as returned from camel_stream_filter_add()
     */
    remove(id: number): void

    // Class property signals of Camel-1.2.Camel.StreamFilter

    connect(sigName: "notify::base-stream", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StreamFilter extends Stream {

    // Own properties of Camel-1.2.Camel.StreamFilter

    static name: string
    static $gtype: GObject.GType<StreamFilter>

    // Constructors of Camel-1.2.Camel.StreamFilter

    constructor(config?: StreamFilter_ConstructProps) 
    /**
     * Create a new #CamelStreamFilter object. The `source` stream
     * is referenced, thus the caller can unref it, if not needed.
     * @constructor 
     * @param source a #CamelStream to filter
     */
    constructor(source: Stream) 
    /**
     * Create a new #CamelStreamFilter object. The `source` stream
     * is referenced, thus the caller can unref it, if not needed.
     * @constructor 
     * @param source a #CamelStream to filter
     */
    static new(source: Stream): StreamFilter

    // Overloads of new

    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param base_stream a #GIOStream
     */
    static new(base_stream: Gio.IOStream): Stream
    _init(config?: StreamFilter_ConstructProps): void
}

interface StreamFs_ConstructProps extends Gio.Seekable_ConstructProps, Stream_ConstructProps {
}

interface StreamFs extends Gio.Seekable {

    // Own fields of Camel-1.2.Camel.StreamFs

    parent: Stream
    priv: StreamFsPrivate

    // Owm methods of Camel-1.2.Camel.StreamFs

    get_fd(): number

    // Class property signals of Camel-1.2.Camel.StreamFs

    connect(sigName: "notify::base-stream", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StreamFs extends Stream {

    // Own properties of Camel-1.2.Camel.StreamFs

    static name: string
    static $gtype: GObject.GType<StreamFs>

    // Constructors of Camel-1.2.Camel.StreamFs

    constructor(config?: StreamFs_ConstructProps) 
    /**
     * Creates a new fs stream using the given file descriptor `fd` as the
     * backing store. When the stream is destroyed, the file descriptor
     * will be closed.
     * @constructor 
     * @param fd a file descriptor
     */
    static new_with_fd(fd: number): StreamFs
    /**
     * Creates a new #CamelStreamFs corresponding to the named file, flags,
     * and mode.
     * @constructor 
     * @param name a local filename
     * @param flags flags as in open(2)
     * @param mode a file mode
     */
    static new_with_name(name: string, flags: number, mode: number): StreamFs
    _init(config?: StreamFs_ConstructProps): void
}

interface StreamMem_ConstructProps extends Gio.Seekable_ConstructProps, Stream_ConstructProps {
}

interface StreamMem extends Gio.Seekable {

    // Own fields of Camel-1.2.Camel.StreamMem

    parent: Stream
    priv: StreamMemPrivate

    // Owm methods of Camel-1.2.Camel.StreamMem

    get_byte_array(): Uint8Array
    /**
     * Set `buffer` to be the backing data to the existing #CamelStreamMem, `mem`.
     * 
     * Note: `buffer` will be copied into an internal #GByteArray structure
     * and so may have resource implications to consider.
     * @param buffer a memory buffer
     */
    set_buffer(buffer: Uint8Array): void
    /**
     * Set `buffer` to be the backing data to the existing #CamelStreamMem, `mem`.
     * 
     * Note: `mem` will not take ownership of `buffer` and so will need to
     * be freed separately from `mem`.
     * @param buffer a #GByteArray
     */
    set_byte_array(buffer: Uint8Array): void
    /**
     * Mark the memory stream as secure.  At the very least this means the
     * data in the buffer will be cleared when the buffer is finalized.
     * This only applies to buffers owned by the stream.
     */
    set_secure(): void

    // Class property signals of Camel-1.2.Camel.StreamMem

    connect(sigName: "notify::base-stream", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StreamMem extends Stream {

    // Own properties of Camel-1.2.Camel.StreamMem

    static name: string
    static $gtype: GObject.GType<StreamMem>

    // Constructors of Camel-1.2.Camel.StreamMem

    constructor(config?: StreamMem_ConstructProps) 
    /**
     * Create a new #CamelStreamMem object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CamelStreamMem object.
     * @constructor 
     */
    static new(): StreamMem

    // Overloads of new

    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param base_stream a #GIOStream
     */
    static new(base_stream: Gio.IOStream): Stream
    /**
     * Create a new memory stream using `buffer` as the stream data.
     * 
     * Note: `buffer` will be copied into an internal #GByteArray structure
     * for use as the stream backing. This may have resource implications
     * you may wish to consider.
     * @constructor 
     * @param buffer a memory buffer to use as the stream data
     */
    static new_with_buffer(buffer: Uint8Array): StreamMem
    /**
     * Create a new #CamelStreamMem using `buffer` as the stream data.
     * 
     * Note: The newly created #CamelStreamMem will destroy `buffer`
     * when destroyed.
     * @constructor 
     * @param buffer a #GByteArray to use as the stream data
     */
    static new_with_byte_array(buffer: Uint8Array): StreamMem
    _init(config?: StreamMem_ConstructProps): void
}

interface StreamNull_ConstructProps extends Gio.Seekable_ConstructProps, Stream_ConstructProps {
}

interface StreamNull extends Gio.Seekable {

    // Own fields of Camel-1.2.Camel.StreamNull

    parent: Stream
    priv: StreamNullPrivate

    // Owm methods of Camel-1.2.Camel.StreamNull

    get_bytes_written(): number
    get_ends_with_crlf(): boolean

    // Class property signals of Camel-1.2.Camel.StreamNull

    connect(sigName: "notify::base-stream", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StreamNull extends Stream {

    // Own properties of Camel-1.2.Camel.StreamNull

    static name: string
    static $gtype: GObject.GType<StreamNull>

    // Constructors of Camel-1.2.Camel.StreamNull

    constructor(config?: StreamNull_ConstructProps) 
    /**
     * Returns a null stream.  A null stream is always at eof, and
     * always returns success for all reads and writes.
     * @constructor 
     */
    constructor() 
    /**
     * Returns a null stream.  A null stream is always at eof, and
     * always returns success for all reads and writes.
     * @constructor 
     */
    static new(): StreamNull

    // Overloads of new

    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param base_stream a #GIOStream
     */
    static new(base_stream: Gio.IOStream): Stream
    _init(config?: StreamNull_ConstructProps): void
}

interface StreamProcess_ConstructProps extends Gio.Seekable_ConstructProps, Stream_ConstructProps {
}

interface StreamProcess extends Gio.Seekable {

    // Own fields of Camel-1.2.Camel.StreamProcess

    parent: Stream
    priv: StreamProcessPrivate

    // Owm methods of Camel-1.2.Camel.StreamProcess

    // TODO fix conflict: connect(command: string, env: string): number

    // Class property signals of Camel-1.2.Camel.StreamProcess

    connect(sigName: "notify::base-stream", callback: (($obj: StreamProcess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamProcess, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StreamProcess extends Stream {

    // Own properties of Camel-1.2.Camel.StreamProcess

    static name: string
    static $gtype: GObject.GType<StreamProcess>

    // Constructors of Camel-1.2.Camel.StreamProcess

    constructor(config?: StreamProcess_ConstructProps) 
    /**
     * Returns a PROCESS stream.
     * @constructor 
     */
    constructor() 
    /**
     * Returns a PROCESS stream.
     * @constructor 
     */
    static new(): StreamProcess

    // Overloads of new

    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param base_stream a #GIOStream
     */
    static new(base_stream: Gio.IOStream): Stream
    _init(config?: StreamProcess_ConstructProps): void
}

interface TextIndex_ConstructProps extends Index_ConstructProps {
}

interface TextIndex {

    // Own fields of Camel-1.2.Camel.TextIndex

    parent: Index
    priv: TextIndexPrivate

    // Owm methods of Camel-1.2.Camel.TextIndex

    dump(): void
    info(): void
    validate(): void

    // Class property signals of Camel-1.2.Camel.TextIndex

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TextIndex extends Index {

    // Own properties of Camel-1.2.Camel.TextIndex

    static name: string
    static $gtype: GObject.GType<TextIndex>

    // Constructors of Camel-1.2.Camel.TextIndex

    constructor(config?: TextIndex_ConstructProps) 
    constructor(path: string, flags: number) 
    static new(path: string, flags: number): TextIndex
    _init(config?: TextIndex_ConstructProps): void
    static check(path: string): number
    static remove(old: string): number
    static rename(old: string, new_: string): number
}

interface TextIndexCursor_ConstructProps extends IndexCursor_ConstructProps {
}

interface TextIndexCursor {

    // Own fields of Camel-1.2.Camel.TextIndexCursor

    parent: IndexCursor
    priv: TextIndexCursorPrivate

    // Class property signals of Camel-1.2.Camel.TextIndexCursor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TextIndexCursor extends IndexCursor {

    // Own properties of Camel-1.2.Camel.TextIndexCursor

    static name: string
    static $gtype: GObject.GType<TextIndexCursor>

    // Constructors of Camel-1.2.Camel.TextIndexCursor

    constructor(config?: TextIndexCursor_ConstructProps) 
    _init(config?: TextIndexCursor_ConstructProps): void
}

interface TextIndexKeyCursor_ConstructProps extends IndexCursor_ConstructProps {
}

interface TextIndexKeyCursor {

    // Own fields of Camel-1.2.Camel.TextIndexKeyCursor

    parent: IndexCursor
    priv: TextIndexKeyCursorPrivate

    // Class property signals of Camel-1.2.Camel.TextIndexKeyCursor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TextIndexKeyCursor extends IndexCursor {

    // Own properties of Camel-1.2.Camel.TextIndexKeyCursor

    static name: string
    static $gtype: GObject.GType<TextIndexKeyCursor>

    // Constructors of Camel-1.2.Camel.TextIndexKeyCursor

    constructor(config?: TextIndexKeyCursor_ConstructProps) 
    _init(config?: TextIndexKeyCursor_ConstructProps): void
}

interface TextIndexName_ConstructProps extends IndexName_ConstructProps {
}

interface TextIndexName {

    // Own fields of Camel-1.2.Camel.TextIndexName

    parent: IndexName
    priv: TextIndexNamePrivate

    // Class property signals of Camel-1.2.Camel.TextIndexName

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TextIndexName extends IndexName {

    // Own properties of Camel-1.2.Camel.TextIndexName

    static name: string
    static $gtype: GObject.GType<TextIndexName>

    // Constructors of Camel-1.2.Camel.TextIndexName

    constructor(config?: TextIndexName_ConstructProps) 
    _init(config?: TextIndexName_ConstructProps): void
}

interface Transport_ConstructProps extends Gio.Initable_ConstructProps, Service_ConstructProps {
}

interface Transport extends Gio.Initable {

    // Own fields of Camel-1.2.Camel.Transport

    parent: Service
    priv: TransportPrivate

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
     * @param io_priority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    send_to(message: MimeMessage, from: Address, recipients: Address, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_transport_send_to().
     * @param result a #GAsyncResult
     */
    send_to_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_sent_message_saved */ boolean ]
    /**
     * Sends the message to the given recipients, regardless of the contents
     * of `message`.  If the message contains a "Bcc" header, the transport
     * is responsible for stripping it.
     * @param message a #CamelMimeMessage to send
     * @param from a #CamelAddress to send from
     * @param recipients a #CamelAddress containing all recipients
     * @param cancellable optional #GCancellable object, or %NULL
     */
    send_to_sync(message: MimeMessage, from: Address, recipients: Address, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_sent_message_saved */ boolean ]

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
     */
    vfunc_send_to_sync(message: MimeMessage, from: Address, recipients: Address, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_sent_message_saved */ boolean ]

    // Class property signals of Camel-1.2.Camel.Transport

    connect(sigName: "notify::connection-status", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Transport extends Service {

    // Own properties of Camel-1.2.Camel.Transport

    static name: string
    static $gtype: GObject.GType<Transport>

    // Constructors of Camel-1.2.Camel.Transport

    constructor(config?: Transport_ConstructProps) 
    _init(config?: Transport_ConstructProps): void
}

interface VTrashFolder_ConstructProps extends VeeFolder_ConstructProps {
}

interface VTrashFolder {

    // Own fields of Camel-1.2.Camel.VTrashFolder

    parent: VeeFolder
    priv: VTrashFolderPrivate

    // Owm methods of Camel-1.2.Camel.VTrashFolder

    get_folder_type(): VTrashFolderType

    // Class property signals of Camel-1.2.Camel.VTrashFolder

    connect(sigName: "notify::auto-update", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-update", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-update", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::mark-seen", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mark-seen", ...args: any[]): void
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mark-seen-timeout", ...args: any[]): void
    connect(sigName: "notify::parent-store", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-store", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-store", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VTrashFolder extends VeeFolder {

    // Own properties of Camel-1.2.Camel.VTrashFolder

    static name: string
    static $gtype: GObject.GType<VTrashFolder>

    // Constructors of Camel-1.2.Camel.VTrashFolder

    constructor(config?: VTrashFolder_ConstructProps) 
    /**
     * Create a new CamelVTrashFolder object.
     * @constructor 
     * @param parent_store the parent #CamelVeeStore object
     * @param type type of vfolder, #CAMEL_VTRASH_FOLDER_TRASH or #CAMEL_VTRASH_FOLDER_JUNK currently.
     */
    constructor(parent_store: Store, type: VTrashFolderType) 
    /**
     * Create a new CamelVTrashFolder object.
     * @constructor 
     * @param parent_store the parent #CamelVeeStore object
     * @param type type of vfolder, #CAMEL_VTRASH_FOLDER_TRASH or #CAMEL_VTRASH_FOLDER_JUNK currently.
     */
    static new(parent_store: Store, type: VTrashFolderType): VTrashFolder

    // Overloads of new

    static new(parent_store: Store, full: string, flags: number): VeeFolder
    _init(config?: VTrashFolder_ConstructProps): void
}

interface VeeDataCache_ConstructProps extends GObject.Object_ConstructProps {
}

interface VeeDataCache {

    // Owm methods of Camel-1.2.Camel.VeeDataCache

    /**
     * Adds the `subfolder` to the `data_cache` to be tracked by it. The `subfolder`
     * is referenced for later use. The function does nothing when the `subfolder`
     * is already in the `data_cache`. The subfolders can be removed with
     * camel_vee_data_cache_remove_subfolder().
     * @param subfolder a #CamelFolder
     */
    add_subfolder(subfolder: Folder): void
    /**
     * Returns whether data_cache contains given `orig_message_uid` for the given `folder`.
     * Unlike camel_vee_data_cache_get_message_info_data(), this only
     * returns %FALSE if not, while camel_vee_data_cache_get_message_info_data()
     * auto-adds it to data_cache.
     * @param folder a #CamelFolder to which the `orig_message_uid` belongs
     * @param orig_message_uid a message UID from the `folder` to check
     */
    contains_message_info_data(folder: Folder, orig_message_uid: string): boolean
    /**
     * Calls the `func` for each message info data from the given `fromfolder`
     * @param fromfolder a #CamelFolder
     * @param func a #CamelForeachInfoData function to call
     */
    foreach_message_info_data(fromfolder: Folder, func: ForeachInfoData): void
    /**
     * Returns a referenced #CamelVeeMessageInfoData referencing the given `folder`
     * and `orig_message_uid`. If it's not part of the `data_cache,` then it is
     * created and auto-added. Use camel_vee_data_cache_contains_message_info_data()
     * when you only want to check the existence, without adding it to the `data_cache`.
     * @param folder a #CamelFolder to which the `orig_message_uid` belongs
     * @param orig_message_uid a message UID from the `folder` to return
     */
    get_message_info_data(folder: Folder, orig_message_uid: string): VeeMessageInfoData
    get_message_info_data_by_vuid(vee_message_uid: string): VeeMessageInfoData | null
    /**
     * Returns a #CamelVeeSubfolderData for the given `folder`.
     * @param folder a #CamelFolder for which to return subfolder data
     */
    get_subfolder_data(folder: Folder): VeeSubfolderData
    /**
     * Removes given `mi_data` from the `data_cache`.
     * @param mi_data a #CamelVeeMessageInfoData to remove
     */
    remove_message_info_data(mi_data: VeeMessageInfoData): void
    /**
     * Removes given `subfolder` from the `data_cache,` which had been
     * previously added with camel_vee_data_cache_add_subfolder().
     * The function does nothing, when the `subfolder` is not part
     * of the `data_cache`.
     * @param subfolder a #CamelFolder to remove
     */
    remove_subfolder(subfolder: Folder): void

    // Class property signals of Camel-1.2.Camel.VeeDataCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class VeeDataCache extends GObject.Object {

    // Own properties of Camel-1.2.Camel.VeeDataCache

    static name: string
    static $gtype: GObject.GType<VeeDataCache>

    // Constructors of Camel-1.2.Camel.VeeDataCache

    constructor(config?: VeeDataCache_ConstructProps) 
    constructor() 
    static new(): VeeDataCache
    _init(config?: VeeDataCache_ConstructProps): void
}

interface VeeFolder_ConstructProps extends Folder_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.VeeFolder

    auto_update?: boolean | null
}

interface VeeFolder {

    // Own properties of Camel-1.2.Camel.VeeFolder

    auto_update: boolean

    // Own fields of Camel-1.2.Camel.VeeFolder

    parent: Folder
    priv: VeeFolderPrivate

    // Owm methods of Camel-1.2.Camel.VeeFolder

    /**
     * Adds `subfolder` as a source folder to `vfolder`.
     * @param subfolder source CamelFolder to add to `vfolder`
     * @param cancellable optional #GCancellable object, or %NULL
     */
    add_folder(subfolder: Folder, cancellable: Gio.Cancellable | null): void
    /**
     * Adds the `mi_data` to the `vfolder`. The `changes` can be
     * updated with the made change and later used to notify others
     * with camel_folder_changed() on the `vfolder`. This can be used
     * only for the Unmatched folder.
     * @param mi_data a #CamelVeeMessageInfoData to add
     * @param changes an optional #CamelFolderChangeInfo to update with the made change, or %NULL
     */
    add_vuid(mi_data: object | null, changes: FolderChangeInfo | null): void
    /**
     * Initializes internal structures of the `vf`. This is meant to be
     * called by the descendants of #CamelVeeFolder.
     * @param flags flags for the `vf`
     */
    construct(flags: number): void
    get_auto_update(): boolean
    get_expression(): string
    get_flags(): number
    /**
     * Find the real folder (and message info UID) for the given `vinfo`.
     * When the `realuid` is not %NULL and it's set, then use g_free() to
     * free it, when no longer needed.
     * @param vinfo a #CamelVeeMessageInfo to search for
     */
    get_location(vinfo: VeeMessageInfo): [ /* returnType */ Folder, /* realuid */ string | null ]
    get_vee_uid_folder(vee_message_uid: string): Folder | null
    /**
     * The next `subfolder-'`s 'changed' event will be silently ignored. This
     * is usually used in virtual folders when the change was done in them,
     * but it is neither vTrash nor vJunk folder. Doing this avoids unnecessary
     * removals of messages which don't satisfy search criteria anymore,
     * which could be done on asynchronous delivery of folder's 'changed' signal.
     * These ignored changes are accumulated and used on folder refresh.
     * @param subfolder a #CamelFolder folder
     */
    ignore_next_changed_event(subfolder: Folder): void
    /**
     * Propagate any skipped changes into the `vf`. The skipped changes are used to not
     * hide the messages from the search folder unexpectedly. The function does nothing
     * when there are no changes to be propagated.
     */
    propagate_skipped_changes(): void
    /**
     * Rebuild the folder `subfolder,` if it should be.
     * @param subfolder source CamelFolder to add to `vfolder`
     * @param cancellable optional #GCancellable object, or %NULL
     */
    rebuild_folder(subfolder: Folder, cancellable: Gio.Cancellable | null): void
    /**
     * Returns a #GList of all folders of this `vfolder,` which
     * are used to populate it. These are in no particular order.
     * 
     * Free the returned #GList with
     * g_list_free_full (folders, g_object_unref);
     * when no longer needed.
     */
    ref_folders(): Folder[]
    /**
     * Removed the source folder, `subfolder,` from the virtual folder, `vfolder`.
     * @param subfolder source CamelFolder to remove from `vfolder`
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove_folder(subfolder: Folder, cancellable: Gio.Cancellable | null): void
    /**
     * Make sure the next `subfolder-'`s 'changed' event will not be silently ignored.
     * This is a counter-part function of camel_vee_folder_ignore_next_changed_event(),
     * when there was expected a change, which did not happen, to take back the previous
     * ignore event request.
     * @param subfolder a #CamelFolder folder
     */
    remove_from_ignore_changed_event(subfolder: Folder): void
    /**
     * Removes given `mi_data` from the `vfolder`. The `changes` can be
     * updated with the made change and later used to notify others
     * with camel_folder_changed() on the `vfolder`. This can be used
     * only for the Unmatched folder.
     * @param mi_data a #CamelVeeMessageInfoData to remove
     * @param changes an optional #CamelFolderChangeInfo to update with the made change, or %NULL
     */
    remove_vuid(mi_data: object | null, changes: FolderChangeInfo | null): void
    /**
     * Sets whether the `vfolder` can automatically update when of its
     * subfolders changes.
     * @param auto_update a value to set
     */
    set_auto_update(auto_update: boolean): void
    /**
     * Sets an SExp expression to be used for this `vfolder`
     * @param expression an SExp expression to set
     */
    set_expression(expression: string): void
    /**
     * Set the whole list of folder sources on a vee folder.
     * @param folders a #GList of #CamelFolder to add
     * @param cancellable optional #GCancellable object, or %NULL
     */
    set_folders(folders: Folder[], cancellable: Gio.Cancellable | null): void

    // Own virtual methods of Camel-1.2.Camel.VeeFolder

    /**
     * Adds `subfolder` as a source folder to `vfolder`.
     * @virtual 
     * @param subfolder source CamelFolder to add to `vfolder`
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_add_folder(subfolder: Folder, cancellable: Gio.Cancellable | null): void
    vfunc_folder_changed(subfolder: Folder, changes: FolderChangeInfo): void
    /**
     * Rebuild the folder `subfolder,` if it should be.
     * @virtual 
     * @param subfolder source CamelFolder to add to `vfolder`
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_rebuild_folder(subfolder: Folder, cancellable: Gio.Cancellable | null): void
    /**
     * Removed the source folder, `subfolder,` from the virtual folder, `vfolder`.
     * @virtual 
     * @param subfolder source CamelFolder to remove from `vfolder`
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_remove_folder(subfolder: Folder, cancellable: Gio.Cancellable | null): void
    /**
     * Sets an SExp expression to be used for this `vfolder`
     * @virtual 
     * @param expression an SExp expression to set
     */
    vfunc_set_expression(expression: string): void

    // Class property signals of Camel-1.2.Camel.VeeFolder

    connect(sigName: "notify::auto-update", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-update", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-update", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::mark-seen", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mark-seen", ...args: any[]): void
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mark-seen-timeout", ...args: any[]): void
    connect(sigName: "notify::parent-store", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-store", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-store", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VeeFolder extends Folder {

    // Own properties of Camel-1.2.Camel.VeeFolder

    static name: string
    static $gtype: GObject.GType<VeeFolder>

    // Constructors of Camel-1.2.Camel.VeeFolder

    constructor(config?: VeeFolder_ConstructProps) 
    constructor(parent_store: Store, full: string, flags: number) 
    static new(parent_store: Store, full: string, flags: number): VeeFolder
    _init(config?: VeeFolder_ConstructProps): void
}

interface VeeMessageInfo_ConstructProps extends MessageInfo_ConstructProps {
}

interface VeeMessageInfo {

    // Own fields of Camel-1.2.Camel.VeeMessageInfo

    parent: MessageInfo
    priv: VeeMessageInfoPrivate

    // Owm methods of Camel-1.2.Camel.VeeMessageInfo

    get_original_folder(): Folder
    get_original_summary(): FolderSummary

    // Class property signals of Camel-1.2.Camel.VeeMessageInfo

    connect(sigName: "notify::abort-notifications", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-notifications", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abort-notifications", ...args: any[]): void
    connect(sigName: "notify::cc", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cc", ...args: any[]): void
    connect(sigName: "notify::date-received", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-received", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date-received", ...args: any[]): void
    connect(sigName: "notify::date-sent", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-sent", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date-sent", ...args: any[]): void
    connect(sigName: "notify::dirty", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dirty", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::folder-flagged", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folder-flagged", ...args: any[]): void
    connect(sigName: "notify::folder-flagged-stamp", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged-stamp", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folder-flagged-stamp", ...args: any[]): void
    connect(sigName: "notify::from", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from", ...args: any[]): void
    connect(sigName: "notify::headers", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers", ...args: any[]): void
    connect(sigName: "notify::message-id", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-id", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-id", ...args: any[]): void
    connect(sigName: "notify::mlist", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlist", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mlist", ...args: any[]): void
    connect(sigName: "notify::preview", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preview", ...args: any[]): void
    connect(sigName: "notify::references", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::references", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::subject", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subject", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::to", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::to", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::user-flags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-flags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-flags", ...args: any[]): void
    connect(sigName: "notify::user-headers", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-headers", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-headers", ...args: any[]): void
    connect(sigName: "notify::user-tags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-tags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-tags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VeeMessageInfo extends MessageInfo {

    // Own properties of Camel-1.2.Camel.VeeMessageInfo

    static name: string
    static $gtype: GObject.GType<VeeMessageInfo>

    // Constructors of Camel-1.2.Camel.VeeMessageInfo

    constructor(config?: VeeMessageInfo_ConstructProps) 
    /**
     * Creates a new instance of #CamelVeeMessageInfo which references
     * a message from the `original_summary` internally.
     * 
     * The `vuid` should be encoded in a way which the vFolder understands,
     * which is like the one returned by camel_vee_message_info_data_get_vee_message_uid().
     * @constructor 
     * @param summary a #CamelVeeSummary, the "owner" of the created message info
     * @param original_summary an original #CamelFolderSummary to reference to
     * @param vuid what UID to set on the resulting message info
     */
    constructor(summary: FolderSummary, original_summary: FolderSummary, vuid: string) 
    /**
     * Creates a new instance of #CamelVeeMessageInfo which references
     * a message from the `original_summary` internally.
     * 
     * The `vuid` should be encoded in a way which the vFolder understands,
     * which is like the one returned by camel_vee_message_info_data_get_vee_message_uid().
     * @constructor 
     * @param summary a #CamelVeeSummary, the "owner" of the created message info
     * @param original_summary an original #CamelFolderSummary to reference to
     * @param vuid what UID to set on the resulting message info
     */
    static new(summary: FolderSummary, original_summary: FolderSummary, vuid: string): VeeMessageInfo

    // Overloads of new

    /**
     * Create a new #CamelMessageInfo object, optionally for given `summary`.
     * @constructor 
     * @param summary parent #CamelFolderSummary object, or %NULL
     */
    static new(summary: FolderSummary | null): MessageInfo
    _init(config?: VeeMessageInfo_ConstructProps): void
}

interface VeeMessageInfoData_ConstructProps extends GObject.Object_ConstructProps {
}

interface VeeMessageInfoData {

    // Owm methods of Camel-1.2.Camel.VeeMessageInfoData

    get_orig_message_uid(): string
    get_subfolder_data(): VeeSubfolderData
    get_vee_message_uid(): string

    // Class property signals of Camel-1.2.Camel.VeeMessageInfoData

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class VeeMessageInfoData extends GObject.Object {

    // Own properties of Camel-1.2.Camel.VeeMessageInfoData

    static name: string
    static $gtype: GObject.GType<VeeMessageInfoData>

    // Constructors of Camel-1.2.Camel.VeeMessageInfoData

    constructor(config?: VeeMessageInfoData_ConstructProps) 
    constructor(subfolder_data: VeeSubfolderData, orig_message_uid: string) 
    static new(subfolder_data: VeeSubfolderData, orig_message_uid: string): VeeMessageInfoData
    _init(config?: VeeMessageInfoData_ConstructProps): void
}

interface VeeStore_ConstructProps extends Gio.Initable_ConstructProps, Store_ConstructProps {

    // Own constructor properties of Camel-1.2.Camel.VeeStore

    unmatched_enabled?: boolean | null
}

interface VeeStore extends Gio.Initable {

    // Own properties of Camel-1.2.Camel.VeeStore

    unmatched_enabled: boolean

    // Own fields of Camel-1.2.Camel.VeeStore

    parent: Store
    priv: VeeStorePrivate

    // Owm methods of Camel-1.2.Camel.VeeStore

    get_unmatched_enabled(): boolean
    get_unmatched_folder(): object | null
    get_vee_data_cache(): VeeFolder
    /**
     * This is a counter part of camel_vee_store_note_subfolder_used(). Once
     * the `subfolder` is claimed to be not used by all folders its message infos
     * are removed from the Unmatched folder.
     * @param subfolder a #CamelFolder
     * @param unused_by a #CamelVeeFolder
     */
    note_subfolder_unused(subfolder: Folder, unused_by: VeeFolder): void
    /**
     * Notes that the `subfolder` is used by `used_by` folder, which
     * is used to determine what folders will be included in
     * the Unmatched folders.
     * @param subfolder a #CamelFolder
     * @param used_by a #CamelVeeFolder
     */
    note_subfolder_used(subfolder: Folder, used_by: VeeFolder): void
    /**
     * A counter part of camel_vee_store_note_vuid_used(). Once the `unused_by`
     * claims the `mi_data` is not used by it anymore, and neither any other
     * virtual folder is using it, then the Unmatched folder will have it added.
     * @param mi_data a #CamelVeeMessageInfoData
     * @param unused_by a #CamelVeeFolder
     */
    note_vuid_unused(mi_data: VeeMessageInfoData, unused_by: VeeFolder): void
    /**
     * Notes the `mi_data` is used by the `used_by` virtual folder, which
     * removes it from the Unmatched folder, if not used anywhere else.
     * @param mi_data a #CamelVeeMessageInfoData
     * @param used_by a #CamelVeeFolder
     */
    note_vuid_used(mi_data: VeeMessageInfoData, used_by: VeeFolder): void
    /**
     * Let's the `vstore` know to rebuild the Unmatched folder. This is done
     * as a separate job, when the `cancellable` is %NULL, otherwise it's run
     * synchronously.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    rebuild_unmatched_folder(cancellable: Gio.Cancellable | null): void
    /**
     * Sets whether the Unmatched folder processing is enabled.
     * @param is_enabled value to set
     */
    set_unmatched_enabled(is_enabled: boolean): void

    // Class property signals of Camel-1.2.Camel.VeeStore

    connect(sigName: "notify::unmatched-enabled", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unmatched-enabled", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unmatched-enabled", ...args: any[]): void
    connect(sigName: "notify::connection-status", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VeeStore extends Store {

    // Own properties of Camel-1.2.Camel.VeeStore

    static name: string
    static $gtype: GObject.GType<VeeStore>

    // Constructors of Camel-1.2.Camel.VeeStore

    constructor(config?: VeeStore_ConstructProps) 
    /**
     * Create a new #CamelVeeStore object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CamelVeeStore object.
     * @constructor 
     */
    static new(): VeeStore
    _init(config?: VeeStore_ConstructProps): void
}

interface VeeSubfolderData_ConstructProps extends GObject.Object_ConstructProps {
}

interface VeeSubfolderData {

    // Owm methods of Camel-1.2.Camel.VeeSubfolderData

    get_folder(): Folder
    get_folder_id(): string

    // Class property signals of Camel-1.2.Camel.VeeSubfolderData

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class VeeSubfolderData extends GObject.Object {

    // Own properties of Camel-1.2.Camel.VeeSubfolderData

    static name: string
    static $gtype: GObject.GType<VeeSubfolderData>

    // Constructors of Camel-1.2.Camel.VeeSubfolderData

    constructor(config?: VeeSubfolderData_ConstructProps) 
    /**
     * Creates a new #CamelVeeSubfolderData object for the given `folder`.
     * The `folder` is referenced for later use.
     * @constructor 
     * @param folder a #CamelFolder for which create the object
     */
    constructor(folder: Folder) 
    /**
     * Creates a new #CamelVeeSubfolderData object for the given `folder`.
     * The `folder` is referenced for later use.
     * @constructor 
     * @param folder a #CamelFolder for which create the object
     */
    static new(folder: Folder): VeeSubfolderData
    _init(config?: VeeSubfolderData_ConstructProps): void
}

interface VeeSummary_ConstructProps extends FolderSummary_ConstructProps {
}

interface VeeSummary {

    // Own fields of Camel-1.2.Camel.VeeSummary

    parent: FolderSummary
    priv: VeeSummaryPrivate

    // Owm methods of Camel-1.2.Camel.VeeSummary

    /**
     * Unref returned pointer with g_object_unref()
     * @param mi_data the #CamelVeeMessageInfoData to add
     */
    add(mi_data: VeeMessageInfoData): VeeMessageInfo

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
     * @param force_keep_uid whether to keep set UID of the `info`
     */
    add(info: MessageInfo, force_keep_uid?: boolean): void
    add(...args: any[]): any
    add(args_or_info: any[] | MessageInfo, force_keep_uid?: boolean): VeeMessageInfo | void | any
    /**
     * Returns a hash table of all virtual message info UID-s known to the `summary`.
     * The key of the hash table is the virtual message info UID, the value is
     * only the number 1.
     * @param subfolder a #CamelFolder
     */
    get_uids_for_subfolder(subfolder: Folder): GLib.HashTable
    /**
     * Removes the given `vuid` of the `subfolder` from the `summary`.
     * @param vuid a virtual message info UID to remove
     * @param subfolder a #CamelFolder to which `vuid` belongs
     */
    remove(vuid: string, subfolder?: Folder): void

    // Overloads of remove

    /**
     * Remove a specific `info` record from the summary.
     * @param info a #CamelMessageInfo
     */
    remove(info: MessageInfo): boolean
    remove(...args: any[]): any
    remove(args_or_info: any[] | MessageInfo): void | boolean | any
    /**
     * Makes sure `summary` flags on `uid` corresponds to those
     * in the subfolder of vee-folder, and updates internal counts
     * on `summary` as well.
     * @param uid a message UID to update flags for
     */
    replace_flags(uid: string): void

    // Overloads of replace_flags

    /**
     * Updates internal counts based on the flags in `info`.
     * @param info a #CamelMessageInfo
     */
    replace_flags(info: MessageInfo): boolean
    replace_flags(...args: any[]): any
    replace_flags(args_or_info: any[] | MessageInfo): void | boolean | any

    // Class property signals of Camel-1.2.Camel.VeeSummary

    connect(sigName: "notify::deleted-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deleted-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deleted-count", ...args: any[]): void
    connect(sigName: "notify::folder", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folder", ...args: any[]): void
    connect(sigName: "notify::junk-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::junk-count", ...args: any[]): void
    connect(sigName: "notify::junk-not-deleted-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-not-deleted-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::junk-not-deleted-count", ...args: any[]): void
    connect(sigName: "notify::saved-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::saved-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::saved-count", ...args: any[]): void
    connect(sigName: "notify::unread-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unread-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unread-count", ...args: any[]): void
    connect(sigName: "notify::visible-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VeeSummary extends FolderSummary {

    // Own properties of Camel-1.2.Camel.VeeSummary

    static name: string
    static $gtype: GObject.GType<VeeSummary>

    // Constructors of Camel-1.2.Camel.VeeSummary

    constructor(config?: VeeSummary_ConstructProps) 
    /**
     * This will create a new CamelVeeSummary object and read in the
     * summary data from disk, if it exists.
     * @constructor 
     * @param parent Folder its attached to.
     */
    constructor(parent: Folder) 
    /**
     * This will create a new CamelVeeSummary object and read in the
     * summary data from disk, if it exists.
     * @constructor 
     * @param parent Folder its attached to.
     */
    static new(parent: Folder): VeeSummary
    _init(config?: VeeSummary_ConstructProps): void
}

interface AddressClass {

    // Own fields of Camel-1.2.Camel.AddressClass

    parent_class: GObject.ObjectClass
    length: (addr: Address) => number
    decode: (addr: Address, raw: string) => number
    encode: (addr: Address) => string
    unformat: (addr: Address, raw: string) => number
    format: (addr: Address) => string
    cat: (dest: Address, source: Address) => number
    remove: (addr: Address, index: number) => void
    reserved: object[]
}

abstract class AddressClass {

    // Own properties of Camel-1.2.Camel.AddressClass

    static name: string
}

interface AddressPrivate {
}

class AddressPrivate {

    // Own properties of Camel-1.2.Camel.AddressPrivate

    static name: string
}

interface AsyncClosure {
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @record 
 */
class AsyncClosure {

    // Own properties of Camel-1.2.Camel.AsyncClosure

    static name: string
}

interface Block {

    // Own fields of Camel-1.2.Camel.Block

    id: _block_t
    flags: BlockFlags
    refcount: number
    align00: number
    data: Uint8Array
}

class Block {

    // Own properties of Camel-1.2.Camel.Block

    static name: string
}

interface BlockFileClass {

    // Own fields of Camel-1.2.Camel.BlockFileClass

    parent_class: GObject.ObjectClass
    validate_root: (bs: BlockFile) => number
    init_root: (bs: BlockFile) => number
    reserved: object[]
}

abstract class BlockFileClass {

    // Own properties of Camel-1.2.Camel.BlockFileClass

    static name: string
}

interface BlockFilePrivate {
}

class BlockFilePrivate {

    // Own properties of Camel-1.2.Camel.BlockFilePrivate

    static name: string
}

interface BlockRoot {

    // Own fields of Camel-1.2.Camel.BlockRoot

    version: number[]
    flags: number
    block_size: number
    free: _block_t
    last: _block_t
}

class BlockRoot {

    // Own properties of Camel-1.2.Camel.BlockRoot

    static name: string
}

interface Cert {

    // Own fields of Camel-1.2.Camel.Cert

    refcount: number
    issuer: string
    subject: string
    hostname: string
    fingerprint: string
    trust: CertTrust
    rawcert: GLib.Bytes

    // Owm methods of Camel-1.2.Camel.Cert

    load_cert_file(): boolean
    ref(): Cert
    save_cert_file(der_data: Uint8Array): boolean
    unref(): void
}

class Cert {

    // Own properties of Camel-1.2.Camel.Cert

    static name: string

    // Constructors of Camel-1.2.Camel.Cert

    constructor() 
    static new(): Cert
}

interface CertDBClass {

    // Own fields of Camel-1.2.Camel.CertDBClass

    parent_class: GObject.ObjectClass
    header_load: (certdb: CertDB, istream: object | null) => number
    header_save: (certdb: CertDB, ostream: object | null) => number
    cert_load: (certdb: CertDB, istream: object | null) => Cert
    cert_save: (certdb: CertDB, cert: Cert, ostream: object | null) => number
    reserved: object[]
}

abstract class CertDBClass {

    // Own properties of Camel-1.2.Camel.CertDBClass

    static name: string
}

interface CertDBPrivate {
}

class CertDBPrivate {

    // Own properties of Camel-1.2.Camel.CertDBPrivate

    static name: string
}

interface Charset {

    // Own fields of Camel-1.2.Camel.Charset

    mask: number
    level: number

    // Owm methods of Camel-1.2.Camel.Charset

    best_name(): string
    init(): void
    /**
     * Processes more input text with the `cc`.
     * @param in_ input text
     */
    step(in_: number[]): void
}

class Charset {

    // Own properties of Camel-1.2.Camel.Charset

    static name: string

    // Constructors of Camel-1.2.Camel.Charset

    /**
     * Finds the minimum charset for this string NULL means US-ASCII.
     * @param in_ input text
     */
    static best(in_: number[]): string | null
    static iso_to_windows(isocharset: string): string
}

interface CipherCertInfo {

    // Own fields of Camel-1.2.Camel.CipherCertInfo

    name: string
    email: string
    cert_data: object
    cert_data_free: GLib.DestroyNotify
    cert_data_clone: CipherCloneFunc
    properties: object[]
}

class CipherCertInfo {

    // Own properties of Camel-1.2.Camel.CipherCertInfo

    static name: string
}

interface CipherCertInfoProperty {

    // Own fields of Camel-1.2.Camel.CipherCertInfoProperty

    name: string
    value: object
    value_free: GLib.DestroyNotify
    value_clone: CipherCloneFunc
}

class CipherCertInfoProperty {

    // Own properties of Camel-1.2.Camel.CipherCertInfoProperty

    static name: string
}

interface CipherContextClass {

    // Own fields of Camel-1.2.Camel.CipherContextClass

    parent_class: GObject.ObjectClass
    sign_protocol: string
    encrypt_protocol: string
    key_protocol: string
    id_to_hash: (context: CipherContext, id: string) => CipherHash
    hash_to_id: (context: CipherContext, hash: CipherHash) => string
    sign_sync: (context: CipherContext, userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null) => boolean
    verify_sync: (context: CipherContext, ipart: MimePart, cancellable: Gio.Cancellable | null) => CipherValidity
    encrypt_sync: (context: CipherContext, userid: string | null, recipients: string[], ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null) => boolean
    decrypt_sync: (context: CipherContext, ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null) => CipherValidity
    reserved: object[]
}

abstract class CipherContextClass {

    // Own properties of Camel-1.2.Camel.CipherContextClass

    static name: string
}

interface CipherContextPrivate {
}

class CipherContextPrivate {

    // Own properties of Camel-1.2.Camel.CipherContextPrivate

    static name: string
}

interface CipherValidity {

    // Own fields of Camel-1.2.Camel.CipherValidity

    children: GLib.Queue
    sign: object
    encrypt: object

    // Owm methods of Camel-1.2.Camel.CipherValidity

    /**
     * Add a cert info to the signer or encrypter info.
     * @param mode a #CamelCipherValidityMode, where to add the additional certificate information
     * @param name a name to add
     * @param email an e-mail address to add
     */
    add_certinfo(mode: CipherValidityMode, name: string, email: string): number
    /**
     * Add a cert info to the signer or encrypter info, with extended data set.
     * @param mode a #CamelCipherValidityMode, where to add the additional certificate information
     * @param name a name to add
     * @param email an e-mail address to add
     * @param cert_data a certificate data, or %NULL
     * @param cert_data_clone a copy function for `cert_data,` to copy the data; required, when `cert_data` is not %NULL
     */
    add_certinfo_ex(mode: CipherValidityMode, name: string, email: string, cert_data: object | null, cert_data_clone: CipherCloneFunc | null): number
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
     * @param info_index a 0-based index of the requested #CamelCipherCertInfo
     * @param name a property name
     */
    get_certinfo_property(mode: CipherValidityMode, info_index: number, name: string): object | null
    get_description(): string
    get_valid(): boolean
    init(): void
    /**
     * Sets a named property `name` value `value` for the given `info_index`
     * of the `mode` validity part. If the `value` is %NULL, then the property
     * is removed. With a non-%NULL `value` also `value_free` and `value_clone`
     * functions cannot be %NULL.
     * @param mode which cipher validity part to use
     * @param info_index a 0-based index of the requested #CamelCipherCertInfo
     * @param name a property name
     * @param value a property value, or %NULL
     * @param value_clone a clone function for the `value`
     */
    set_certinfo_property(mode: CipherValidityMode, info_index: number, name: string, value: object | null, value_clone: CipherCloneFunc | null): void
    set_description(description: string): void
    set_valid(valid: boolean): void
}

class CipherValidity {

    // Own properties of Camel-1.2.Camel.CipherValidity

    static name: string

    // Constructors of Camel-1.2.Camel.CipherValidity

    constructor() 
    static new(): CipherValidity
}

interface ContentDisposition {

    // Own fields of Camel-1.2.Camel.ContentDisposition

    disposition: string
    params: object
    refcount: number

    // Owm methods of Camel-1.2.Camel.ContentDisposition

    format(): string
    is_attachment(content_type: ContentType): boolean
    is_attachment_ex(content_type: ContentType, parent_content_type: ContentType): boolean
    ref(): ContentDisposition
    unref(): void
}

class ContentDisposition {

    // Own properties of Camel-1.2.Camel.ContentDisposition

    static name: string

    // Constructors of Camel-1.2.Camel.ContentDisposition

    constructor() 
    static new(): ContentDisposition
    static decode(in_: string): ContentDisposition
}

interface ContentType {

    // Own fields of Camel-1.2.Camel.ContentType

    type: string
    subtype: string
    params: object
    refcount: number

    // Owm methods of Camel-1.2.Camel.ContentType

    dump(): void
    format(): string
    /**
     * The subtype of "*" will match any subtype.  If `ct` is %NULL, then
     * it will match the type "text/plain".
     * @param type A type to check against.
     * @param subtype A subtype to check against, or "*" to match any subtype.
     */
    is(type: string, subtype: string): boolean
    /**
     * Searches the params on s #CamelContentType for a param named `name`
     * and gets the value.
     * @param name name of param to find
     */
    param(name: string): string
    /**
     * Refs the content type.
     */
    ref(): ContentType
    /**
     * Set a parameter on `content_type`.
     * @param name name of param to set
     * @param value value of param to set
     */
    set_param(name: string, value: string): void
    simple(): string
    /**
     * Unrefs, and potentially frees, the content type.
     */
    unref(): void
}

class ContentType {

    // Own properties of Camel-1.2.Camel.ContentType

    static name: string

    // Constructors of Camel-1.2.Camel.ContentType

    /**
     * Create a new #CamelContentType.
     * @constructor 
     * @param type the major type of the new content-type
     * @param subtype the subtype
     */
    constructor(type: string, subtype: string) 
    /**
     * Create a new #CamelContentType.
     * @constructor 
     * @param type the major type of the new content-type
     * @param subtype the subtype
     */
    static new(type: string, subtype: string): ContentType
    static decode(in_: string): ContentType
}

interface DBClass {
}

abstract class DBClass {

    // Own properties of Camel-1.2.Camel.DBClass

    static name: string
}

interface DBPrivate {
}

class DBPrivate {

    // Own properties of Camel-1.2.Camel.DBPrivate

    static name: string
}

interface DataCacheClass {

    // Own fields of Camel-1.2.Camel.DataCacheClass

    parent_class: GObject.ObjectClass
    reserved: object[]
}

abstract class DataCacheClass {

    // Own properties of Camel-1.2.Camel.DataCacheClass

    static name: string
}

interface DataCachePrivate {
}

class DataCachePrivate {

    // Own properties of Camel-1.2.Camel.DataCachePrivate

    static name: string
}

interface DataWrapperClass {

    // Own fields of Camel-1.2.Camel.DataWrapperClass

    parent_class: GObject.ObjectClass
    set_mime_type: (data_wrapper: DataWrapper, mime_type: string) => void
    get_mime_type: (data_wrapper: DataWrapper) => string
    get_mime_type_field: (data_wrapper: DataWrapper) => ContentType | null
    set_mime_type_field: (data_wrapper: DataWrapper, mime_type: ContentType | null) => void
    is_offline: (data_wrapper: DataWrapper) => boolean
    write_to_stream_sync: (data_wrapper: DataWrapper, stream: Stream, cancellable: Gio.Cancellable | null) => number
    decode_to_stream_sync: (data_wrapper: DataWrapper, stream: Stream, cancellable: Gio.Cancellable | null) => number
    construct_from_stream_sync: (data_wrapper: DataWrapper, stream: Stream, cancellable: Gio.Cancellable | null) => boolean
    write_to_output_stream_sync: (data_wrapper: DataWrapper, output_stream: Gio.OutputStream, cancellable: Gio.Cancellable | null) => number
    decode_to_output_stream_sync: (data_wrapper: DataWrapper, output_stream: Gio.OutputStream, cancellable: Gio.Cancellable | null) => number
    construct_from_input_stream_sync: (data_wrapper: DataWrapper, input_stream: Gio.InputStream, cancellable: Gio.Cancellable | null) => boolean
    reserved: object[]
}

abstract class DataWrapperClass {

    // Own properties of Camel-1.2.Camel.DataWrapperClass

    static name: string
}

interface DataWrapperPrivate {
}

class DataWrapperPrivate {

    // Own properties of Camel-1.2.Camel.DataWrapperPrivate

    static name: string
}

interface FIRecord {

    // Own fields of Camel-1.2.Camel.FIRecord

    /**
     * name of the folder
     * @field 
     */
    folder_name: string
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
    saved_count: number
    /**
     * count of unread messages
     * @field 
     */
    unread_count: number
    /**
     * count of deleted messages
     * @field 
     */
    deleted_count: number
    /**
     * count of junk messages
     * @field 
     */
    junk_count: number
    /**
     * count of visible (not deleted and not junk) messages
     * @field 
     */
    visible_count: number
    /**
     * count of junk and not deleted messages
     * @field 
     */
    jnd_count: number
    /**
     * custom data of the #CamelFolderSummary descendants
     * @field 
     */
    bdata: string
}

/**
 * Values to store/load for single folder's #CamelFolderSummary structure.
 * @record 
 */
class FIRecord {

    // Own properties of Camel-1.2.Camel.FIRecord

    static name: string
}

interface FilterDriverClass {

    // Own fields of Camel-1.2.Camel.FilterDriverClass

    parent_class: GObject.ObjectClass
    reserved: object[]
}

abstract class FilterDriverClass {

    // Own properties of Camel-1.2.Camel.FilterDriverClass

    static name: string
}

interface FilterDriverPrivate {
}

class FilterDriverPrivate {

    // Own properties of Camel-1.2.Camel.FilterDriverPrivate

    static name: string
}

interface FilterInputStreamClass {

    // Own fields of Camel-1.2.Camel.FilterInputStreamClass

    parent_class: Gio.FilterInputStreamClass
    reserved: object[]
}

abstract class FilterInputStreamClass {

    // Own properties of Camel-1.2.Camel.FilterInputStreamClass

    static name: string
}

interface FilterInputStreamPrivate {
}

class FilterInputStreamPrivate {

    // Own properties of Camel-1.2.Camel.FilterInputStreamPrivate

    static name: string
}

interface FilterOutputStreamClass {

    // Own fields of Camel-1.2.Camel.FilterOutputStreamClass

    parent_class: Gio.FilterOutputStreamClass
    reserved: object[]
}

abstract class FilterOutputStreamClass {

    // Own properties of Camel-1.2.Camel.FilterOutputStreamClass

    static name: string
}

interface FilterOutputStreamPrivate {
}

class FilterOutputStreamPrivate {

    // Own properties of Camel-1.2.Camel.FilterOutputStreamPrivate

    static name: string
}

interface FolderChangeInfo {

    // Own fields of Camel-1.2.Camel.FolderChangeInfo

    uid_added: object[]
    uid_removed: object[]
    uid_changed: object[]
    uid_recent: object[]

    // Owm methods of Camel-1.2.Camel.FolderChangeInfo

    /**
     * Add a source uid for generating a changeset.
     * @param uid a uid
     */
    add_source(uid: string): void
    /**
     * Add a list of source uid's for generating a changeset.
     * @param list a list of uids
     */
    add_source_list(list: string[]): void
    /**
     * Add a new uid to the changeinfo.
     * @param uid a uid
     */
    add_uid(uid: string): void
    /**
     * Add a uid from the updated list, used to generate a changeset diff.
     * @param uid a uid
     */
    add_update(uid: string): void
    /**
     * Add a list of uid's from the updated list.
     * @param list a list of uids
     */
    add_update_list(list: string[]): void
    /**
     * Compare the source uid set to the updated uid set and generate the
     * differences into the added and removed lists.
     */
    build_diff(): void
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
    change_uid(uid: string): void
    /**
     * Gets whether or not there have been any changes.
     */
    changed(): boolean
    /**
     * Empty out the change info; called after changes have been
     * processed.
     */
    clear(): void
    /**
     * Creates a copy of the `src`.
     */
    copy(): FolderChangeInfo
    /**
     * Free memory associated with the folder change info lists.
     */
    free(): void
    /**
     * Returns an array of added messages UIDs. The returned array, the same as its content,
     * is owned by the `info`.
     */
    get_added_uids(): string[]
    /**
     * Returns an array of changed messages UIDs. The returned array, the same as its content,
     * is owned by the `info`.
     */
    get_changed_uids(): string[]
    /**
     * Returns an array of recent messages UIDs. The returned array, the same as its content,
     * is owned by the `info`.
     */
    get_recent_uids(): string[]
    /**
     * Returns an array of removed messages UIDs. The returned array, the same as its content,
     * is owned by the `info`.
     */
    get_removed_uids(): string[]
    /**
     * Add a recent uid to the changedinfo.
     * This will also add the uid to the uid_filter array for potential
     * filtering
     * @param uid a uid
     */
    recent_uid(uid: string): void
    /**
     * Add a uid to the removed uid list.
     * @param uid a uid
     */
    remove_uid(uid: string): void
}

class FolderChangeInfo {

    // Own properties of Camel-1.2.Camel.FolderChangeInfo

    static name: string

    // Constructors of Camel-1.2.Camel.FolderChangeInfo

    /**
     * Create a new folder change info structure.
     * 
     * Change info structures are not MT-SAFE and must be
     * locked for exclusive access externally.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new folder change info structure.
     * 
     * Change info structures are not MT-SAFE and must be
     * locked for exclusive access externally.
     * @constructor 
     */
    static new(): FolderChangeInfo
}

interface FolderChangeInfoPrivate {
}

class FolderChangeInfoPrivate {

    // Own properties of Camel-1.2.Camel.FolderChangeInfoPrivate

    static name: string
}

interface FolderClass {

    // Own fields of Camel-1.2.Camel.FolderClass

    parent_class: ObjectClass
    get_message_count: (folder: Folder) => number
    get_permanent_flags: (folder: Folder) => number
    get_message_flags: (folder: Folder, uid: string) => number
    set_message_flags: (folder: Folder, uid: string, mask: number, set: number) => boolean
    get_message_user_flag: (folder: Folder, uid: string, name: string) => boolean
    set_message_user_flag: (folder: Folder, uid: string, name: string, value: boolean) => void
    get_message_user_tag: (folder: Folder, uid: string, name: string) => string
    set_message_user_tag: (folder: Folder, uid: string, name: string, value: string) => void
    get_uids: (folder: Folder) => string[]
    free_uids: (folder: Folder, array: string[]) => void
    cmp_uids: (folder: Folder, uid1: string, uid2: string) => number
    sort_uids: (folder: Folder, uids: string[]) => void
    get_summary: (folder: Folder) => string[]
    free_summary: (folder: Folder, array: MessageInfo[]) => void
    has_search_capability: (folder: Folder) => boolean
    search_by_expression: (folder: Folder, expression: string, cancellable: Gio.Cancellable | null) => string[]
    search_by_uids: (folder: Folder, expression: string, uids: string[], cancellable: Gio.Cancellable | null) => string[]
    search_free: (folder: Folder, result: string[]) => void
    get_message_info: (folder: Folder, uid: string) => MessageInfo | null
    delete_: (folder: Folder) => void
    rename: (folder: Folder, new_name: string) => void
    freeze: (folder: Folder) => void
    thaw: (folder: Folder) => void
    is_frozen: (folder: Folder) => boolean
    count_by_expression: (folder: Folder, expression: string, cancellable: Gio.Cancellable | null) => number
    get_uncached_uids: (folder: Folder, uids: string[]) => string[]
    get_filename: (folder: Folder, uid: string) => string
    get_message_cached: (folder: Folder, message_uid: string, cancellable: Gio.Cancellable | null) => MimeMessage | null
    append_message_sync: (folder: Folder, message: MimeMessage, info: MessageInfo | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* appended_uid */ string | null ]
    expunge_sync: (folder: Folder, cancellable: Gio.Cancellable | null) => boolean
    get_message_sync: (folder: Folder, message_uid: string, cancellable: Gio.Cancellable | null) => MimeMessage
    get_quota_info_sync: (folder: Folder, cancellable: Gio.Cancellable | null) => FolderQuotaInfo
    purge_message_cache_sync: (folder: Folder, start_uid: string, end_uid: string, cancellable: Gio.Cancellable | null) => boolean
    refresh_info_sync: (folder: Folder, cancellable: Gio.Cancellable | null) => boolean
    synchronize_sync: (folder: Folder, expunge: boolean, cancellable: Gio.Cancellable | null) => boolean
    synchronize_message_sync: (folder: Folder, message_uid: string, cancellable: Gio.Cancellable | null) => boolean
    transfer_messages_to_sync: (source: Folder, message_uids: string[], destination: Folder, delete_originals: boolean, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    prepare_content_refresh: (folder: Folder) => void
    reserved_methods: object[]
    changed: (folder: Folder, changes: FolderChangeInfo) => void
    deleted: (folder: Folder) => void
    renamed: (folder: Folder, old_name: string) => void
    reserved_signals: object[]
}

abstract class FolderClass {

    // Own properties of Camel-1.2.Camel.FolderClass

    static name: string
}

interface FolderInfo {

    // Own fields of Camel-1.2.Camel.FolderInfo

    next: object
    parent: object
    child: object
    full_name: string
    display_name: string
    flags: FolderInfoFlags
    unread: number
    total: number

    // Owm methods of Camel-1.2.Camel.FolderInfo

    /**
     * Clones `fi` recursively.
     */
    clone(): FolderInfo
    /**
     * Frees `fi`.
     */
    free(): void
}

class FolderInfo {

    // Own properties of Camel-1.2.Camel.FolderInfo

    static name: string

    // Constructors of Camel-1.2.Camel.FolderInfo

    /**
     * Allocates a new #CamelFolderInfo instance.  Free it with
     * camel_folder_info_free().
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a new #CamelFolderInfo instance.  Free it with
     * camel_folder_info_free().
     * @constructor 
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
     * @param namespace_ an ignorable prefix on the folder names
     * @param separator the hieararchy separator character
     * @param short_names %TRUE if the (short) name of a folder is the part after the last `separator` in the full name. %FALSE if it is the full name.
     */
    static build(folders: FolderInfo[], namespace_: string, separator: number, short_names: boolean): FolderInfo
}

interface FolderPrivate {
}

class FolderPrivate {

    // Own properties of Camel-1.2.Camel.FolderPrivate

    static name: string
}

interface FolderQuotaInfo {

    // Own fields of Camel-1.2.Camel.FolderQuotaInfo

    /**
     * name, aka identification, of the quota type
     * @field 
     */
    name: string
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
    next: object

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

class FolderQuotaInfo {

    // Own properties of Camel-1.2.Camel.FolderQuotaInfo

    static name: string

    // Constructors of Camel-1.2.Camel.FolderQuotaInfo

    constructor(name: string, used: number, total: number) 
    static new(name: string, used: number, total: number): FolderQuotaInfo
}

interface FolderSearchClass {

    // Own fields of Camel-1.2.Camel.FolderSearchClass

    parent_class: GObject.ObjectClass
    reserved: object[]
}

abstract class FolderSearchClass {

    // Own properties of Camel-1.2.Camel.FolderSearchClass

    static name: string
}

interface FolderSearchPrivate {
}

class FolderSearchPrivate {

    // Own properties of Camel-1.2.Camel.FolderSearchPrivate

    static name: string
}

interface FolderSummaryClass {

    // Own fields of Camel-1.2.Camel.FolderSummaryClass

    parent_class: GObject.ObjectClass
    message_info_type: GObject.GType
    collate: string
    sort_by: string
    summary_header_load: (summary: FolderSummary, fir: object | null) => boolean
    summary_header_save: (summary: FolderSummary) => object | null
    message_info_new_from_headers: (summary: FolderSummary, headers: NameValueArray) => MessageInfo
    message_info_new_from_parser: (summary: FolderSummary, parser: MimeParser) => MessageInfo
    message_info_new_from_message: (summary: FolderSummary, message: MimeMessage) => MessageInfo
    message_info_from_uid: (summary: FolderSummary, uid: string) => MessageInfo | null
    next_uid_string: (summary: FolderSummary) => string
    prepare_fetch_all: (summary: FolderSummary) => void
    reserved: object[]
}

abstract class FolderSummaryClass {

    // Own properties of Camel-1.2.Camel.FolderSummaryClass

    static name: string
}

interface FolderSummaryPrivate {
}

class FolderSummaryPrivate {

    // Own properties of Camel-1.2.Camel.FolderSummaryPrivate

    static name: string
}

interface FolderThread {

    // Own fields of Camel-1.2.Camel.FolderThread

    refcount: number
    subject: number
    tree: object
    node_chunks: MemChunk
    folder: Folder
    summary: object[]

    // Owm methods of Camel-1.2.Camel.FolderThread

    /**
     * Adds new `uids` into the threaded tree.
     * @param uids a #GPtrArray array of UID-s
     */
    apply(uids: string[]): void
    /**
     * Increase the reference of `thread`
     */
    ref(): FolderThread
    /**
     * Free all memory associated with the thread descriptor `thread`.
     */
    unref(): void
}

class FolderThread {

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
     * @param thread_subject thread based on subject also
     */
    constructor(folder: Folder, uids: string[], thread_subject: boolean) 
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
     * @param thread_subject thread based on subject also
     */
    static new(folder: Folder, uids: string[], thread_subject: boolean): FolderThread
}

interface FolderThreadNode {

    // Own fields of Camel-1.2.Camel.FolderThreadNode

    next: object
    parent: object
    child: object
    message: MessageInfo
    root_subject: string
    order: number
    re: number
}

class FolderThreadNode {

    // Own properties of Camel-1.2.Camel.FolderThreadNode

    static name: string
}

interface GpgContextClass {

    // Own fields of Camel-1.2.Camel.GpgContextClass

    parent_class: CipherContextClass
    reserved: object[]
}

abstract class GpgContextClass {

    // Own properties of Camel-1.2.Camel.GpgContextClass

    static name: string
}

interface GpgContextPrivate {
}

class GpgContextPrivate {

    // Own properties of Camel-1.2.Camel.GpgContextPrivate

    static name: string
}

interface HTMLParserClass {

    // Own fields of Camel-1.2.Camel.HTMLParserClass

    parent_class: GObject.ObjectClass
    reserved: object[]
}

abstract class HTMLParserClass {

    // Own properties of Camel-1.2.Camel.HTMLParserClass

    static name: string
}

interface HTMLParserPrivate {
}

class HTMLParserPrivate {

    // Own properties of Camel-1.2.Camel.HTMLParserPrivate

    static name: string
}

interface HeaderAddress {

    // Own fields of Camel-1.2.Camel.HeaderAddress

    next: object
    type: HeaderAddressType
    name: string
    refcount: number

    // Owm methods of Camel-1.2.Camel.HeaderAddress

    add_member(member: HeaderAddress): void
    ref(): HeaderAddress
    set_addr(addr: string): void
    /**
     * TODO: Document me.
     * @param group a NULL-terminated list of #CamelHeaderAddress
     */
    set_members(group: HeaderAddress[]): void
    set_name(name: string): void
    unref(): void
}

class HeaderAddress {

    // Own properties of Camel-1.2.Camel.HeaderAddress

    static name: string

    // Constructors of Camel-1.2.Camel.HeaderAddress

    constructor() 
    static new(): HeaderAddress
    static new_group(name: string): HeaderAddress
    static new_name(name: string, addr: string): HeaderAddress
    static decode(in_: string, charset: string): HeaderAddress
    static fold(in_: string, headerlen: number): string
    /**
     * TODO: Document me.
     * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
     * @param addr the #CamelHeaderAddress to add
     */
    static list_append(addrlistp: HeaderAddress[], addr: HeaderAddress): void
    /**
     * TODO: Document me.
     * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
     * @param addrs a NULL-terminated list of #CamelHeaderAddress to add
     */
    static list_append_list(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void
    /**
     * TODO: Document me.
     * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
     */
    static list_clear(addrlistp: HeaderAddress[]): void
    /**
     * TODO: Document me.
     * @param addrlist a NULL-terminated list of #CamelHeaderAddress objects
     */
    static list_encode(addrlist: HeaderAddress[]): string
    /**
     * TODO: Document me.
     * @param addrlist a NULL-terminated list of #CamelHeaderAddress objects
     */
    static list_format(addrlist: HeaderAddress[]): string
}

interface HeaderParam {

    // Own fields of Camel-1.2.Camel.HeaderParam

    next: object
    name: string
    value: string
}

class HeaderParam {

    // Own properties of Camel-1.2.Camel.HeaderParam

    static name: string

    // Constructors of Camel-1.2.Camel.HeaderParam

    static list_decode(in_: string | null): object | null
    static list_format(params: object | null): string
    static list_format_append(out: GLib.String, params: object | null): void
    /**
     * Free the list of params.
     * @param params a list of params
     */
    static list_free(params: object | null): void
}

interface IndexClass {

    // Own fields of Camel-1.2.Camel.IndexClass

    parent_class: GObject.ObjectClass
    sync: (index: Index) => number
    compress: (index: Index) => number
    delete_: (index: Index) => number
    rename: (index: Index, path: string) => number
    has_name: (index: Index, name: string) => number
    add_name: (index: Index, name: string) => IndexName | null
    write_name: (index: Index, idn: IndexName) => number
    find_name: (index: Index, name: string) => IndexCursor | null
    delete_name: (index: Index, name: string) => void
    find: (index: Index, word: string) => IndexCursor | null
    words: (index: Index) => IndexCursor | null
}

abstract class IndexClass {

    // Own properties of Camel-1.2.Camel.IndexClass

    static name: string
}

interface IndexCursorClass {

    // Own fields of Camel-1.2.Camel.IndexCursorClass

    parent: GObject.ObjectClass
    next: (idc: IndexCursor) => string
    reserved: object[]
}

abstract class IndexCursorClass {

    // Own properties of Camel-1.2.Camel.IndexCursorClass

    static name: string
}

interface IndexCursorPrivate {
}

class IndexCursorPrivate {

    // Own properties of Camel-1.2.Camel.IndexCursorPrivate

    static name: string
}

interface IndexNameClass {

    // Own fields of Camel-1.2.Camel.IndexNameClass

    parent: GObject.ObjectClass
    add_word: (name: IndexName, word: string) => void
    add_buffer: (name: IndexName, buffer: string, len: number) => number
}

abstract class IndexNameClass {

    // Own properties of Camel-1.2.Camel.IndexNameClass

    static name: string
}

interface IndexNamePrivate {
}

class IndexNamePrivate {

    // Own properties of Camel-1.2.Camel.IndexNamePrivate

    static name: string
}

interface IndexPrivate {
}

class IndexPrivate {

    // Own properties of Camel-1.2.Camel.IndexPrivate

    static name: string
}

interface InternetAddressClass {

    // Own fields of Camel-1.2.Camel.InternetAddressClass

    parent_class: AddressClass
    reserved: object[]
}

abstract class InternetAddressClass {

    // Own properties of Camel-1.2.Camel.InternetAddressClass

    static name: string
}

interface InternetAddressPrivate {
}

class InternetAddressPrivate {

    // Own properties of Camel-1.2.Camel.InternetAddressPrivate

    static name: string
}

interface JunkFilterInterface {

    // Own fields of Camel-1.2.Camel.JunkFilterInterface

    parent_interface: GObject.TypeInterface
    classify: (junk_filter: JunkFilter, message: MimeMessage, cancellable: Gio.Cancellable | null) => JunkStatus
    learn_junk: (junk_filter: JunkFilter, message: MimeMessage, cancellable: Gio.Cancellable | null) => boolean
    learn_not_junk: (junk_filter: JunkFilter, message: MimeMessage, cancellable: Gio.Cancellable | null) => boolean
    synchronize: (junk_filter: JunkFilter, cancellable: Gio.Cancellable | null) => boolean
    reserved: object[]
}

abstract class JunkFilterInterface {

    // Own properties of Camel-1.2.Camel.JunkFilterInterface

    static name: string
}

interface KeyBlock {

    // Own fields of Camel-1.2.Camel.KeyBlock

    next: _block_t
    used: number
}

class KeyBlock {

    // Own properties of Camel-1.2.Camel.KeyBlock

    static name: string
}

interface KeyFileClass {

    // Own fields of Camel-1.2.Camel.KeyFileClass

    parent_class: GObject.ObjectClass
    reserved: object[]
}

abstract class KeyFileClass {

    // Own properties of Camel-1.2.Camel.KeyFileClass

    static name: string
}

interface KeyFilePrivate {
}

class KeyFilePrivate {

    // Own properties of Camel-1.2.Camel.KeyFilePrivate

    static name: string
}

interface KeyRootBlock {

    // Own fields of Camel-1.2.Camel.KeyRootBlock

    first: _block_t
    last: _block_t
    free: _key_t
}

class KeyRootBlock {

    // Own properties of Camel-1.2.Camel.KeyRootBlock

    static name: string
}

interface KeyTableClass {

    // Own fields of Camel-1.2.Camel.KeyTableClass

    parent: GObject.ObjectClass
    reserved: object[]
}

abstract class KeyTableClass {

    // Own properties of Camel-1.2.Camel.KeyTableClass

    static name: string
}

interface KeyTablePrivate {
}

class KeyTablePrivate {

    // Own properties of Camel-1.2.Camel.KeyTablePrivate

    static name: string
}

interface LocalSettingsClass {
}

abstract class LocalSettingsClass {

    // Own properties of Camel-1.2.Camel.LocalSettingsClass

    static name: string
}

interface LocalSettingsPrivate {
}

class LocalSettingsPrivate {

    // Own properties of Camel-1.2.Camel.LocalSettingsPrivate

    static name: string
}

interface MIRecord {

    // Own fields of Camel-1.2.Camel.MIRecord

    /**
     * Message UID
     * @field 
     */
    uid: string
    /**
     * Camel Message info flags
     * @field 
     */
    flags: number
    /**
     * unused
     * @field 
     */
    msg_type: number
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
    subject: string
    /**
     * sender
     * @field 
     */
    from: string
    /**
     * recipient
     * @field 
     */
    to: string
    /**
     * CC members
     * @field 
     */
    cc: string
    /**
     * message list headers
     * @field 
     */
    mlist: string
    /**
     * followup flag / also can be queried to see for followup or not
     * @field 
     */
    followup_flag: string
    /**
     * completed date, can be used to see if completed
     * @field 
     */
    followup_completed_on: string
    /**
     * to see the due by date
     * @field 
     */
    followup_due_by: string
    /**
     * part / references / thread id
     * @field 
     */
    part: string
    /**
     * labels of mails also called as userflags
     * @field 
     */
    labels: string
    /**
     * composite string of user tags
     * @field 
     */
    usertags: string
    /**
     * content info string - composite string
     * @field 
     */
    cinfo: string
    /**
     * provider specific data
     * @field 
     */
    bdata: string
    /**
     * value for user-defined message headers; Since: 3.42
     * @field 
     */
    userheaders: string
    /**
     * message body preview; Since: 3.42
     * @field 
     */
    preview: string
}

/**
 * The extensive DB format, supporting basic searching and sorting.
 * @record 
 */
class MIRecord {

    // Own properties of Camel-1.2.Camel.MIRecord

    static name: string
}

interface MediumClass {

    // Own fields of Camel-1.2.Camel.MediumClass

    parent_class: DataWrapperClass
    add_header: (medium: Medium, name: string, value: string) => void
    set_header: (medium: Medium, name: string, value: string | null) => void
    remove_header: (medium: Medium, name: string) => void
    get_header: (medium: Medium, name: string) => string | null
    dup_headers: (medium: Medium) => NameValueArray
    get_headers: (medium: Medium) => NameValueArray
    get_content: (medium: Medium) => DataWrapper | null
    set_content: (medium: Medium, content: DataWrapper | null) => void
    reserved: object[]
}

abstract class MediumClass {

    // Own properties of Camel-1.2.Camel.MediumClass

    static name: string
}

interface MediumPrivate {
}

class MediumPrivate {

    // Own properties of Camel-1.2.Camel.MediumPrivate

    static name: string
}

interface MemChunk {
}

class MemChunk {

    // Own properties of Camel-1.2.Camel.MemChunk

    static name: string
}

interface MemPool {
}

class MemPool {

    // Own properties of Camel-1.2.Camel.MemPool

    static name: string
}

interface MessageContentInfo {

    // Own fields of Camel-1.2.Camel.MessageContentInfo

    next: MessageContentInfo
    childs: MessageContentInfo
    parent: MessageContentInfo
    type: ContentType
    disposition: ContentDisposition
    id: string
    description: string
    encoding: string
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
     */
    traverse(func: MessageContentInfoTraverseCallback): boolean
}

class MessageContentInfo {

    // Own properties of Camel-1.2.Camel.MessageContentInfo

    static name: string

    // Constructors of Camel-1.2.Camel.MessageContentInfo

    /**
     * Allocate a new #CamelMessageContentInfo.
     * @constructor 
     */
    constructor() 
    /**
     * Allocate a new #CamelMessageContentInfo.
     * @constructor 
     */
    static new(): MessageContentInfo
    static new_from_headers(headers: NameValueArray): MessageContentInfo
    static new_from_message(mime_part: MimePart): MessageContentInfo
    static new_from_parser(parser: MimeParser): MessageContentInfo
}

interface MessageInfoBaseClass {

    // Own fields of Camel-1.2.Camel.MessageInfoBaseClass

    parent_class: MessageInfoClass
    reserved: object[]
}

abstract class MessageInfoBaseClass {

    // Own properties of Camel-1.2.Camel.MessageInfoBaseClass

    static name: string
}

interface MessageInfoBasePrivate {
}

class MessageInfoBasePrivate {

    // Own properties of Camel-1.2.Camel.MessageInfoBasePrivate

    static name: string
}

interface MessageInfoClass {

    // Own fields of Camel-1.2.Camel.MessageInfoClass

    parent_class: GObject.ObjectClass
    clone: (mi: MessageInfo, assign_summary: FolderSummary | null) => MessageInfo
    load: (mi: MessageInfo, record: MIRecord | null, bdata_ptr: string) => boolean
    save: (mi: MessageInfo, record: MIRecord | null, bdata_str: GLib.String) => boolean
    get_flags: (mi: MessageInfo) => number
    set_flags: (mi: MessageInfo, mask: number, set: number) => boolean
    get_user_flag: (mi: MessageInfo, name: string) => boolean
    set_user_flag: (mi: MessageInfo, name: string, state: boolean) => boolean
    get_user_flags: (mi: MessageInfo) => NamedFlags | null
    dup_user_flags: (mi: MessageInfo) => NamedFlags | null
    take_user_flags: (mi: MessageInfo, user_flags: NamedFlags | null) => boolean
    get_user_tag: (mi: MessageInfo, name: string) => string | null
    set_user_tag: (mi: MessageInfo, name: string, value: string | null) => boolean
    get_user_tags: (mi: MessageInfo) => NameValueArray | null
    dup_user_tags: (mi: MessageInfo) => NameValueArray | null
    take_user_tags: (mi: MessageInfo, user_tags: NameValueArray | null) => boolean
    get_subject: (mi: MessageInfo) => string
    set_subject: (mi: MessageInfo, subject: string | null) => boolean
    get_from: (mi: MessageInfo) => string
    set_from: (mi: MessageInfo, from: string | null) => boolean
    get_to: (mi: MessageInfo) => string
    set_to: (mi: MessageInfo, to: string | null) => boolean
    get_cc: (mi: MessageInfo) => string
    set_cc: (mi: MessageInfo, cc: string | null) => boolean
    get_mlist: (mi: MessageInfo) => string
    set_mlist: (mi: MessageInfo, mlist: string | null) => boolean
    get_size: (mi: MessageInfo) => number
    set_size: (mi: MessageInfo, size: number) => boolean
    get_date_sent: (mi: MessageInfo) => number
    set_date_sent: (mi: MessageInfo, date_sent: number) => boolean
    get_date_received: (mi: MessageInfo) => number
    set_date_received: (mi: MessageInfo, date_received: number) => boolean
    get_message_id: (mi: MessageInfo) => number
    set_message_id: (mi: MessageInfo, message_id: number) => boolean
    get_references: (mi: MessageInfo) => number[] | null
    take_references: (mi: MessageInfo, references: number[] | null) => boolean
    get_headers: (mi: MessageInfo) => NameValueArray | null
    take_headers: (mi: MessageInfo, headers: NameValueArray | null) => boolean
    get_user_header: (mi: MessageInfo, name: string) => string | null
    set_user_header: (mi: MessageInfo, name: string, value: string | null) => boolean
    get_user_headers: (mi: MessageInfo) => NameValueArray | null
    take_user_headers: (mi: MessageInfo, headers: NameValueArray | null) => boolean
    get_preview: (mi: MessageInfo) => string | null
    set_preview: (mi: MessageInfo, preview: string | null) => boolean
    reserved: object[]
}

abstract class MessageInfoClass {

    // Own properties of Camel-1.2.Camel.MessageInfoClass

    static name: string
}

interface MessageInfoPrivate {
}

class MessageInfoPrivate {

    // Own properties of Camel-1.2.Camel.MessageInfoPrivate

    static name: string
}

interface MimeFilterBasicClass {

    // Own fields of Camel-1.2.Camel.MimeFilterBasicClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterBasicClass {

    // Own properties of Camel-1.2.Camel.MimeFilterBasicClass

    static name: string
}

interface MimeFilterBasicPrivate {
}

class MimeFilterBasicPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterBasicPrivate

    static name: string
}

interface MimeFilterBestencClass {

    // Own fields of Camel-1.2.Camel.MimeFilterBestencClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterBestencClass {

    // Own properties of Camel-1.2.Camel.MimeFilterBestencClass

    static name: string
}

interface MimeFilterBestencPrivate {
}

class MimeFilterBestencPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterBestencPrivate

    static name: string
}

interface MimeFilterCRLFClass {

    // Own fields of Camel-1.2.Camel.MimeFilterCRLFClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterCRLFClass {

    // Own properties of Camel-1.2.Camel.MimeFilterCRLFClass

    static name: string
}

interface MimeFilterCRLFPrivate {
}

class MimeFilterCRLFPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterCRLFPrivate

    static name: string
}

interface MimeFilterCanonClass {

    // Own fields of Camel-1.2.Camel.MimeFilterCanonClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterCanonClass {

    // Own properties of Camel-1.2.Camel.MimeFilterCanonClass

    static name: string
}

interface MimeFilterCanonPrivate {
}

class MimeFilterCanonPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterCanonPrivate

    static name: string
}

interface MimeFilterCharsetClass {

    // Own fields of Camel-1.2.Camel.MimeFilterCharsetClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterCharsetClass {

    // Own properties of Camel-1.2.Camel.MimeFilterCharsetClass

    static name: string
}

interface MimeFilterCharsetPrivate {
}

class MimeFilterCharsetPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterCharsetPrivate

    static name: string
}

interface MimeFilterClass {

    // Own fields of Camel-1.2.Camel.MimeFilterClass

    parent_class: GObject.ObjectClass
    filter: (filter: MimeFilter, in_: Uint8Array, prespace: number) => [ /* out */ Uint8Array, /* outprespace */ number ]
    complete: (filter: MimeFilter, in_: Uint8Array, prespace: number) => [ /* out */ Uint8Array, /* outprespace */ number ]
    reset: (filter: MimeFilter) => void
    reserved: object[]
}

abstract class MimeFilterClass {

    // Own properties of Camel-1.2.Camel.MimeFilterClass

    static name: string
}

interface MimeFilterEnrichedClass {

    // Own fields of Camel-1.2.Camel.MimeFilterEnrichedClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterEnrichedClass {

    // Own properties of Camel-1.2.Camel.MimeFilterEnrichedClass

    static name: string
}

interface MimeFilterEnrichedPrivate {
}

class MimeFilterEnrichedPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterEnrichedPrivate

    static name: string
}

interface MimeFilterFromClass {

    // Own fields of Camel-1.2.Camel.MimeFilterFromClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterFromClass {

    // Own properties of Camel-1.2.Camel.MimeFilterFromClass

    static name: string
}

interface MimeFilterFromPrivate {
}

class MimeFilterFromPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterFromPrivate

    static name: string
}

interface MimeFilterGZipClass {

    // Own fields of Camel-1.2.Camel.MimeFilterGZipClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterGZipClass {

    // Own properties of Camel-1.2.Camel.MimeFilterGZipClass

    static name: string
}

interface MimeFilterGZipPrivate {
}

class MimeFilterGZipPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterGZipPrivate

    static name: string
}

interface MimeFilterHTMLClass {

    // Own fields of Camel-1.2.Camel.MimeFilterHTMLClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterHTMLClass {

    // Own properties of Camel-1.2.Camel.MimeFilterHTMLClass

    static name: string
}

interface MimeFilterHTMLPrivate {
}

class MimeFilterHTMLPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterHTMLPrivate

    static name: string
}

interface MimeFilterIndexClass {

    // Own fields of Camel-1.2.Camel.MimeFilterIndexClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterIndexClass {

    // Own properties of Camel-1.2.Camel.MimeFilterIndexClass

    static name: string
}

interface MimeFilterIndexPrivate {
}

class MimeFilterIndexPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterIndexPrivate

    static name: string
}

interface MimeFilterLinewrapClass {

    // Own fields of Camel-1.2.Camel.MimeFilterLinewrapClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterLinewrapClass {

    // Own properties of Camel-1.2.Camel.MimeFilterLinewrapClass

    static name: string
}

interface MimeFilterLinewrapPrivate {
}

class MimeFilterLinewrapPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterLinewrapPrivate

    static name: string
}

interface MimeFilterPgpClass {

    // Own fields of Camel-1.2.Camel.MimeFilterPgpClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterPgpClass {

    // Own properties of Camel-1.2.Camel.MimeFilterPgpClass

    static name: string
}

interface MimeFilterPgpPrivate {
}

class MimeFilterPgpPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterPgpPrivate

    static name: string
}

interface MimeFilterPrivate {
}

class MimeFilterPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterPrivate

    static name: string
}

interface MimeFilterProgressClass {

    // Own fields of Camel-1.2.Camel.MimeFilterProgressClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterProgressClass {

    // Own properties of Camel-1.2.Camel.MimeFilterProgressClass

    static name: string
}

interface MimeFilterProgressPrivate {
}

class MimeFilterProgressPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterProgressPrivate

    static name: string
}

interface MimeFilterToHTMLClass {

    // Own fields of Camel-1.2.Camel.MimeFilterToHTMLClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterToHTMLClass {

    // Own properties of Camel-1.2.Camel.MimeFilterToHTMLClass

    static name: string
}

interface MimeFilterToHTMLPrivate {
}

class MimeFilterToHTMLPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterToHTMLPrivate

    static name: string
}

interface MimeFilterWindowsClass {

    // Own fields of Camel-1.2.Camel.MimeFilterWindowsClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterWindowsClass {

    // Own properties of Camel-1.2.Camel.MimeFilterWindowsClass

    static name: string
}

interface MimeFilterWindowsPrivate {
}

class MimeFilterWindowsPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterWindowsPrivate

    static name: string
}

interface MimeFilterYencClass {

    // Own fields of Camel-1.2.Camel.MimeFilterYencClass

    parent_class: MimeFilterClass
    reserved: object[]
}

abstract class MimeFilterYencClass {

    // Own properties of Camel-1.2.Camel.MimeFilterYencClass

    static name: string
}

interface MimeFilterYencPrivate {
}

class MimeFilterYencPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterYencPrivate

    static name: string
}

interface MimeMessageClass {

    // Own fields of Camel-1.2.Camel.MimeMessageClass

    parent_class: MimePartClass
    reserved: object[]
}

abstract class MimeMessageClass {

    // Own properties of Camel-1.2.Camel.MimeMessageClass

    static name: string
}

interface MimeMessagePrivate {
}

class MimeMessagePrivate {

    // Own properties of Camel-1.2.Camel.MimeMessagePrivate

    static name: string
}

interface MimeParserClass {

    // Own fields of Camel-1.2.Camel.MimeParserClass

    parent_class: GObject.ObjectClass
    message: (parser: MimeParser, headers: object | null) => void
    part: (parser: MimeParser) => void
    content: (parser: MimeParser) => void
    reserved: object[]
}

abstract class MimeParserClass {

    // Own properties of Camel-1.2.Camel.MimeParserClass

    static name: string
}

interface MimeParserPrivate {
}

class MimeParserPrivate {

    // Own properties of Camel-1.2.Camel.MimeParserPrivate

    static name: string
}

interface MimePartClass {

    // Own fields of Camel-1.2.Camel.MimePartClass

    parent_class: MediumClass
    construct_from_parser_sync: (mime_part: MimePart, parser: MimeParser, cancellable: Gio.Cancellable | null) => boolean
    reserved: object[]
}

abstract class MimePartClass {

    // Own properties of Camel-1.2.Camel.MimePartClass

    static name: string
}

interface MimePartPrivate {
}

class MimePartPrivate {

    // Own properties of Camel-1.2.Camel.MimePartPrivate

    static name: string
}

interface Msg {

    // Own fields of Camel-1.2.Camel.Msg

    /**
     * a #CamelMsgPort this #CamelMsg belongs to
     * @field 
     */
    reply_port: MsgPort
}

class Msg {

    // Own properties of Camel-1.2.Camel.Msg

    static name: string
}

interface MsgPort {
}

class MsgPort {

    // Own properties of Camel-1.2.Camel.MsgPort

    static name: string
}

interface MultipartClass {

    // Own fields of Camel-1.2.Camel.MultipartClass

    parent_class: DataWrapperClass
    add_part: (multipart: Multipart, part: MimePart) => void
    get_part: (multipart: Multipart, index: number) => MimePart | null
    get_number: (multipart: Multipart) => number
    get_boundary: (multipart: Multipart) => string
    set_boundary: (multipart: Multipart, boundary: string | null) => void
    construct_from_parser: (multipart: Multipart, parser: MimeParser) => number
    reserved: object[]
}

abstract class MultipartClass {

    // Own properties of Camel-1.2.Camel.MultipartClass

    static name: string
}

interface MultipartEncryptedClass {

    // Own fields of Camel-1.2.Camel.MultipartEncryptedClass

    parent_class: MultipartClass
    reserved: object[]
}

abstract class MultipartEncryptedClass {

    // Own properties of Camel-1.2.Camel.MultipartEncryptedClass

    static name: string
}

interface MultipartEncryptedPrivate {
}

class MultipartEncryptedPrivate {

    // Own properties of Camel-1.2.Camel.MultipartEncryptedPrivate

    static name: string
}

interface MultipartPrivate {
}

class MultipartPrivate {

    // Own properties of Camel-1.2.Camel.MultipartPrivate

    static name: string
}

interface MultipartSignedClass {

    // Own fields of Camel-1.2.Camel.MultipartSignedClass

    parent_class: MultipartClass
    reserved: object[]
}

abstract class MultipartSignedClass {

    // Own properties of Camel-1.2.Camel.MultipartSignedClass

    static name: string
}

interface MultipartSignedPrivate {
}

class MultipartSignedPrivate {

    // Own properties of Camel-1.2.Camel.MultipartSignedPrivate

    static name: string
}

interface NNTPAddressClass {

    // Own fields of Camel-1.2.Camel.NNTPAddressClass

    parent_class: AddressClass
    reserved: object[]
}

abstract class NNTPAddressClass {

    // Own properties of Camel-1.2.Camel.NNTPAddressClass

    static name: string
}

interface NNTPAddressPrivate {
}

class NNTPAddressPrivate {

    // Own properties of Camel-1.2.Camel.NNTPAddressPrivate

    static name: string
}

interface NameValueArray {

    // Owm methods of Camel-1.2.Camel.NameValueArray

    /**
     * Appends a new element of the name `name` and the value `value`
     * at the end of `array`.
     * 
     * See: camel_name_value_array_set_named
     * @param name a name
     * @param value a value
     */
    append(name: string, value: string): void
    /**
     * Removes all elements of the `array`.
     */
    clear(): void
    /**
     * Creates a new copy of the `array`. The returned pointer should be freed
     * with camel_name_value_array_free() when no longer needed.
     */
    copy(): NameValueArray
    /**
     * Compares content of the two #CamelNameValueArray and returns whether
     * they equal. Note this is an expensive operation for large arrays.
     * @param array_b the second #CamelNameValueArray
     * @param compare_type a compare type, one of #CamelCompareType
     */
    equal(array_b: NameValueArray | null, compare_type: CompareType): boolean
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
     */
    get(index: number): [ /* returnType */ boolean, /* out_name */ string | null, /* out_value */ string | null ]
    get_length(): number
    /**
     * Returns the name of the element at index `index`.
     * @param index an index
     */
    get_name(index: number): string | null
    /**
     * Returns the value of the first element named `name,` or %NULL when there
     * is no element of such `name` in the `array`. The `compare_type` determines
     * how to compare the names.
     * @param compare_type a compare type, one of #CamelCompareType
     * @param name a name
     */
    get_named(compare_type: CompareType, name: string): string | null
    /**
     * Returns the value of the element at index `index`.
     * @param index an index
     */
    get_value(index: number): string | null
    /**
     * Removes element at index `index`.
     * @param index an index to remove
     */
    remove(index: number): boolean
    /**
     * Removes elements of the `array` with the given `name`.
     * The `compare_type` determines hot to compare the names.
     * If the `all_occurrences` is set to %TRUE, then every elements with the `name`
     * are removed, otherwise only the first occurrence is removed.
     * @param compare_type a compare type, one of #CamelCompareType
     * @param name a name to remove
     * @param all_occurrences whether to remove all occurrences of the `name`
     */
    remove_named(compare_type: CompareType, name: string, all_occurrences: boolean): number
    /**
     * Sets both the `name` and the `value` of the element at index `index`.
     * @param index an index
     * @param name a name
     * @param value a value
     */
    set(index: number, name: string, value: string): boolean
    /**
     * Sets the `name` of the element at index `index`.
     * @param index an index
     * @param name a name
     */
    set_name(index: number, name: string): boolean
    /**
     * Finds an element named `name` and sets its value to `value,` or appends
     * a new element, in case no such named element exists in the `array` yet.
     * In case there are more elements named with `name` only the first
     * occurrence is changed. The `compare_type` determines how to compare
     * the names.
     * @param compare_type a compare type, one of #CamelCompareType
     * @param name a name
     * @param value a value
     */
    set_named(compare_type: CompareType, name: string, value: string): boolean
    /**
     * Sets the `value` of the element at index `index`.
     * @param index an index
     * @param value a value
     */
    set_value(index: number, value: string): boolean
}

class NameValueArray {

    // Own properties of Camel-1.2.Camel.NameValueArray

    static name: string

    // Constructors of Camel-1.2.Camel.NameValueArray

    /**
     * Creates a new #CamelNameValueArray. The returned pointer should be freed
     * with camel_name_value_array_free() when no longer needed.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CamelNameValueArray. The returned pointer should be freed
     * with camel_name_value_array_free() when no longer needed.
     * @constructor 
     */
    static new(): NameValueArray
    /**
     * Creates a new #CamelNameValueArray, which has reserved `reserve_size`
     * elements. This value doesn't influence the camel_name_value_array_get_length(),
     * which returns zero on the array returned from this function. The returned
     * pointer should be freed with camel_name_value_array_free() when no longer needed.
     * @constructor 
     * @param reserve_size an array size to reserve
     */
    static new_sized(reserve_size: number): NameValueArray
}

interface NamedFlags {

    // Owm methods of Camel-1.2.Camel.NamedFlags

    /**
     * Removes all the elements of the array.
     */
    clear(): void
    contains(name: string): boolean
    /**
     * Creates a copy of the `named_flags` and returns it.
     */
    copy(): NamedFlags
    /**
     * Compares content of the two #CamelNamedFlags and returns whether
     * they equal. Note this is an expensive operation for large sets.
     * @param named_flags_b the second #CamelNamedFlags
     */
    equal(named_flags_b: NamedFlags | null): boolean
    /**
     * Frees memory associated iwth the `named_flags`. Does nothing,
     * if `named_flags` is %NULL.
     */
    free(): void
    get(index: number): string | null
    get_length(): number
    /**
     * Inserts a flag named `name` into the `named_flags,` if it is not included
     * already (comparing case sensitively), or does nothing otherwise.
     * @param name name of the flag
     */
    insert(name: string): boolean
    /**
     * Removes a flag named `name` from the `named_flags`.
     * @param name name of the flag
     */
    remove(name: string): boolean
}

class NamedFlags {

    // Own properties of Camel-1.2.Camel.NamedFlags

    static name: string

    // Constructors of Camel-1.2.Camel.NamedFlags

    /**
     * Creates a new #CamelNamedFlags.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CamelNamedFlags.
     * @constructor 
     */
    static new(): NamedFlags
    /**
     * Created a new #CamelNamedFlags, which has reserved `reserve_size`
     * elements. This value doesn't influence the camel_named_flags_get_length(),
     * which returns zero on the array returned from this function.
     * @constructor 
     * @param reserve_size an array size to reserve
     */
    static new_sized(reserve_size: number): NamedFlags
}

interface NetworkServiceInterface {

    // Own fields of Camel-1.2.Camel.NetworkServiceInterface

    parent_interface: GObject.TypeInterface
    get_service_name: (service: NetworkService, method: NetworkSecurityMethod) => string | null
    get_default_port: (service: NetworkService, method: NetworkSecurityMethod) => number
    connect_sync: (service: NetworkService, cancellable: Gio.Cancellable | null) => Gio.IOStream
    reserved: object[]
}

abstract class NetworkServiceInterface {

    // Own properties of Camel-1.2.Camel.NetworkServiceInterface

    static name: string
}

interface NetworkSettingsInterface {

    // Own fields of Camel-1.2.Camel.NetworkSettingsInterface

    parent_interface: GObject.TypeInterface
    reserved: object[]
}

abstract class NetworkSettingsInterface {

    // Own properties of Camel-1.2.Camel.NetworkSettingsInterface

    static name: string
}

interface NullOutputStreamClass {

    // Own fields of Camel-1.2.Camel.NullOutputStreamClass

    parent_class: Gio.OutputStreamClass
    reserved: object[]
}

abstract class NullOutputStreamClass {

    // Own properties of Camel-1.2.Camel.NullOutputStreamClass

    static name: string
}

interface NullOutputStreamPrivate {
}

class NullOutputStreamPrivate {

    // Own properties of Camel-1.2.Camel.NullOutputStreamPrivate

    static name: string
}

interface ObjectBag {

    // Owm methods of Camel-1.2.Camel.ObjectBag

    /**
     * Aborts a key reservation.
     * @param key a reserved key
     */
    abort(key: object | null): void
    /**
     * Adds `object` to `bag`.  The `key` MUST have been previously reserved using
     * camel_object_bag_reserve().
     * @param key a reserved key
     * @param object a #GObject
     */
    add(key: object | null, object: object | null): void
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
     */
    get(key: object | null): object | null
    /**
     * Returns a #GPtrArray of all the objects in the bag.  The caller owns
     * both the array and the object references, so to free the array use:
     * 
     * |[
     *     g_ptr_array_foreach (array, (GFunc) g_object_unref, NULL);
     *     g_ptr_array_free (array, TRUE);
     * ```
     * 
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
     */
    peek(key: object | null): object | null
    /**
     * Changes the key for `object` to `new_key,` atomically.
     * 
     * It is considered a programming error if `object` is not found in `bag`.
     * In such case the function will emit a terminal warning and return.
     * @param object a #GObject
     * @param new_key a new key for `object`
     */
    rekey(object: object | null, new_key: object | null): void
    /**
     * Removes `object` from `bag`.
     * @param object a #GObject
     */
    remove(object: object | null): void
    /**
     * Reserves `key` in `bag`.  If `key` is already reserved in another thread,
     * then wait until the reservation has been committed.
     * 
     * After reserving `key,` you either get a reference to the object
     * corresponding to `key` (similar to camel_object_bag_get()) or you get
     * %NULL, signifying that you MUST call either camel_object_bag_add() or
     * camel_object_bag_abort().
     * @param key the key to reserve
     */
    reserve(key: object | null): object | null
}

class ObjectBag {

    // Own properties of Camel-1.2.Camel.ObjectBag

    static name: string
}

interface ObjectClass {

    // Own fields of Camel-1.2.Camel.ObjectClass

    parent_class: GObject.ObjectClass
    state_read: (object: Object, fp: object | null) => number
    state_write: (object: Object, fp: object | null) => number
    reserved: object[]
}

abstract class ObjectClass {

    // Own properties of Camel-1.2.Camel.ObjectClass

    static name: string
}

interface ObjectPrivate {
}

class ObjectPrivate {

    // Own properties of Camel-1.2.Camel.ObjectPrivate

    static name: string
}

interface OfflineFolderClass {

    // Own fields of Camel-1.2.Camel.OfflineFolderClass

    parent_class: FolderClass
    downsync_sync: (folder: OfflineFolder, expression: string | null, cancellable: Gio.Cancellable | null) => boolean
    reserved: object[]
}

abstract class OfflineFolderClass {

    // Own properties of Camel-1.2.Camel.OfflineFolderClass

    static name: string
}

interface OfflineFolderPrivate {
}

class OfflineFolderPrivate {

    // Own properties of Camel-1.2.Camel.OfflineFolderPrivate

    static name: string
}

interface OfflineSettingsClass {

    // Own fields of Camel-1.2.Camel.OfflineSettingsClass

    parent_class: StoreSettingsClass
    reserved: object[]
}

abstract class OfflineSettingsClass {

    // Own properties of Camel-1.2.Camel.OfflineSettingsClass

    static name: string
}

interface OfflineSettingsPrivate {
}

class OfflineSettingsPrivate {

    // Own properties of Camel-1.2.Camel.OfflineSettingsPrivate

    static name: string
}

interface OfflineStoreClass {

    // Own fields of Camel-1.2.Camel.OfflineStoreClass

    parent_class: StoreClass
    dup_downsync_folders: (store: OfflineStore) => Folder[]
    reserved: object[]
}

abstract class OfflineStoreClass {

    // Own properties of Camel-1.2.Camel.OfflineStoreClass

    static name: string
}

interface OfflineStorePrivate {
}

class OfflineStorePrivate {

    // Own properties of Camel-1.2.Camel.OfflineStorePrivate

    static name: string
}

interface OperationClass {

    // Own fields of Camel-1.2.Camel.OperationClass

    parent_class: Gio.CancellableClass
    status: (operation: Operation, what: string, pc: number) => void
    reserved: object[]
}

abstract class OperationClass {

    // Own properties of Camel-1.2.Camel.OperationClass

    static name: string
}

interface OperationPrivate {
}

class OperationPrivate {

    // Own properties of Camel-1.2.Camel.OperationPrivate

    static name: string
}

interface PartitionKey {

    // Own fields of Camel-1.2.Camel.PartitionKey

    hashid: _hash_t
    keyid: _key_t
}

class PartitionKey {

    // Own properties of Camel-1.2.Camel.PartitionKey

    static name: string
}

interface PartitionKeyBlock {

    // Own fields of Camel-1.2.Camel.PartitionKeyBlock

    used: number
    keys: object[]
}

class PartitionKeyBlock {

    // Own properties of Camel-1.2.Camel.PartitionKeyBlock

    static name: string
}

interface PartitionMap {

    // Own fields of Camel-1.2.Camel.PartitionMap

    hashid: _hash_t
    blockid: _block_t
}

class PartitionMap {

    // Own properties of Camel-1.2.Camel.PartitionMap

    static name: string
}

interface PartitionMapBlock {

    // Own fields of Camel-1.2.Camel.PartitionMapBlock

    next: _block_t
    used: number
    partition: object[]
}

class PartitionMapBlock {

    // Own properties of Camel-1.2.Camel.PartitionMapBlock

    static name: string
}

interface PartitionTableClass {

    // Own fields of Camel-1.2.Camel.PartitionTableClass

    parent: GObject.ObjectClass
    reserved: object[]
}

abstract class PartitionTableClass {

    // Own properties of Camel-1.2.Camel.PartitionTableClass

    static name: string
}

interface PartitionTablePrivate {
}

class PartitionTablePrivate {

    // Own properties of Camel-1.2.Camel.PartitionTablePrivate

    static name: string
}

interface Provider {

    // Own fields of Camel-1.2.Camel.Provider

    protocol: string
    name: string
    description: string
    domain: string
    flags: ProviderFlags
    url_flags: ProviderURLFlags
    extra_conf: ProviderConfEntry
    port_entries: ProviderPortEntry
    auto_detect: ProviderAutoDetectFunc
    object_types: GObject.GType[]
    authtypes: object[]
    url_hash: GLib.HashFunc
    url_equal: GLib.EqualFunc
    translation_domain: string
    priv: object

    // Owm methods of Camel-1.2.Camel.Provider

    /**
     * Registers a provider.
     */
    register(): void
}

class Provider {

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
     */
    static get(protocol: string): Provider
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
     */
    static list(load: boolean): Provider[]
    /**
     * Loads the provider at `path,` and calls its initialization function,
     * passing `session` as an argument. The provider should then register
     * itself with `session`.
     * @param path the path to a shared library
     */
    static load(path: string): boolean
}

interface ProviderConfEntry {

    // Own fields of Camel-1.2.Camel.ProviderConfEntry

    type: ProviderConfType
    name: string
    depname: string
    text: string
    value: string
}

class ProviderConfEntry {

    // Own properties of Camel-1.2.Camel.ProviderConfEntry

    static name: string
}

interface ProviderModule {

    // Own fields of Camel-1.2.Camel.ProviderModule

    path: string
    types: object[]
    loaded: number
}

class ProviderModule {

    // Own properties of Camel-1.2.Camel.ProviderModule

    static name: string

    // Constructors of Camel-1.2.Camel.ProviderModule

    static init(): void
}

interface ProviderPortEntry {

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
    desc: string
    /**
     * a boolean whether the port is used together with TLS/SSL
     * @field 
     */
    is_ssl: boolean
}

class ProviderPortEntry {

    // Own properties of Camel-1.2.Camel.ProviderPortEntry

    static name: string
}

interface SExpClass {

    // Own fields of Camel-1.2.Camel.SExpClass

    parent_class: GObject.ObjectClass
    reserved: object[]
}

abstract class SExpClass {

    // Own properties of Camel-1.2.Camel.SExpClass

    static name: string
}

interface SExpPrivate {
}

class SExpPrivate {

    // Own properties of Camel-1.2.Camel.SExpPrivate

    static name: string
}

interface SExpResult {

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
    time_generator: boolean
    /**
     * start time
     * @field 
     */
    occuring_start: number
    /**
     * end time
     * @field 
     */
    occuring_end: number
}

class SExpResult {

    // Own properties of Camel-1.2.Camel.SExpResult

    static name: string
}

interface SExpSymbol {

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
    name: string
    /**
     * user data for the callback
     * `f`.func: a #CamelSExpFunc callback
     * `f`.ifunc: a #CamelSExpIFunc callback
     * @field 
     */
    data: object
}

/**
 * Describes a function or a variable symbol
 * @record 
 */
class SExpSymbol {

    // Own properties of Camel-1.2.Camel.SExpSymbol

    static name: string
}

interface SExpTerm {

    // Own fields of Camel-1.2.Camel.SExpTerm

    /**
     * a type of the term; one of #CamelSExpTermType
     * @field 
     */
    type: SExpTermType
}

class SExpTerm {

    // Own properties of Camel-1.2.Camel.SExpTerm

    static name: string
}

interface SMIMEContextClass {

    // Own fields of Camel-1.2.Camel.SMIMEContextClass

    parent_class: CipherContextClass
    reserved: object[]
}

abstract class SMIMEContextClass {

    // Own properties of Camel-1.2.Camel.SMIMEContextClass

    static name: string
}

interface SMIMEContextPrivate {
}

class SMIMEContextPrivate {

    // Own properties of Camel-1.2.Camel.SMIMEContextPrivate

    static name: string
}

interface SaslAnonymousClass {

    // Own fields of Camel-1.2.Camel.SaslAnonymousClass

    parent_class: SaslClass
    reserved: object[]
}

abstract class SaslAnonymousClass {

    // Own properties of Camel-1.2.Camel.SaslAnonymousClass

    static name: string
}

interface SaslAnonymousPrivate {
}

class SaslAnonymousPrivate {

    // Own properties of Camel-1.2.Camel.SaslAnonymousPrivate

    static name: string
}

interface SaslClass {

    // Own fields of Camel-1.2.Camel.SaslClass

    parent_class: GObject.ObjectClass
    auth_type: ServiceAuthType
    try_empty_password_sync: (sasl: Sasl, cancellable: Gio.Cancellable | null) => boolean
    challenge_sync: (sasl: Sasl, token: Uint8Array | null, cancellable: Gio.Cancellable | null) => Uint8Array | null
    reserved: object[]
}

abstract class SaslClass {

    // Own properties of Camel-1.2.Camel.SaslClass

    static name: string
}

interface SaslCramMd5Class {

    // Own fields of Camel-1.2.Camel.SaslCramMd5Class

    parent_class: SaslClass
    reserved: object[]
}

abstract class SaslCramMd5Class {

    // Own properties of Camel-1.2.Camel.SaslCramMd5Class

    static name: string
}

interface SaslCramMd5Private {
}

class SaslCramMd5Private {

    // Own properties of Camel-1.2.Camel.SaslCramMd5Private

    static name: string
}

interface SaslDigestMd5Class {

    // Own fields of Camel-1.2.Camel.SaslDigestMd5Class

    parent_class: SaslClass
    reserved: object[]
}

abstract class SaslDigestMd5Class {

    // Own properties of Camel-1.2.Camel.SaslDigestMd5Class

    static name: string
}

interface SaslDigestMd5Private {
}

class SaslDigestMd5Private {

    // Own properties of Camel-1.2.Camel.SaslDigestMd5Private

    static name: string
}

interface SaslGssapiClass {

    // Own fields of Camel-1.2.Camel.SaslGssapiClass

    parent_class: SaslClass
    reserved: object[]
}

abstract class SaslGssapiClass {

    // Own properties of Camel-1.2.Camel.SaslGssapiClass

    static name: string
}

interface SaslGssapiPrivate {
}

class SaslGssapiPrivate {

    // Own properties of Camel-1.2.Camel.SaslGssapiPrivate

    static name: string
}

interface SaslLoginClass {

    // Own fields of Camel-1.2.Camel.SaslLoginClass

    parent_class: SaslClass
    reserved: object[]
}

abstract class SaslLoginClass {

    // Own properties of Camel-1.2.Camel.SaslLoginClass

    static name: string
}

interface SaslLoginPrivate {
}

class SaslLoginPrivate {

    // Own properties of Camel-1.2.Camel.SaslLoginPrivate

    static name: string
}

interface SaslNTLMClass {

    // Own fields of Camel-1.2.Camel.SaslNTLMClass

    parent_class: SaslClass
    reserved: object[]
}

abstract class SaslNTLMClass {

    // Own properties of Camel-1.2.Camel.SaslNTLMClass

    static name: string
}

interface SaslNTLMPrivate {
}

class SaslNTLMPrivate {

    // Own properties of Camel-1.2.Camel.SaslNTLMPrivate

    static name: string
}

interface SaslPOPB4SMTPClass {

    // Own fields of Camel-1.2.Camel.SaslPOPB4SMTPClass

    parent_class: SaslClass
    reserved: object[]
}

abstract class SaslPOPB4SMTPClass {

    // Own properties of Camel-1.2.Camel.SaslPOPB4SMTPClass

    static name: string
}

interface SaslPOPB4SMTPPrivate {
}

class SaslPOPB4SMTPPrivate {

    // Own properties of Camel-1.2.Camel.SaslPOPB4SMTPPrivate

    static name: string
}

interface SaslPlainClass {

    // Own fields of Camel-1.2.Camel.SaslPlainClass

    parent_class: SaslClass
    reserved: object[]
}

abstract class SaslPlainClass {

    // Own properties of Camel-1.2.Camel.SaslPlainClass

    static name: string
}

interface SaslPlainPrivate {
}

class SaslPlainPrivate {

    // Own properties of Camel-1.2.Camel.SaslPlainPrivate

    static name: string
}

interface SaslPrivate {
}

class SaslPrivate {

    // Own properties of Camel-1.2.Camel.SaslPrivate

    static name: string
}

interface SaslXOAuth2Class {

    // Own fields of Camel-1.2.Camel.SaslXOAuth2Class

    parent_class: SaslClass
}

abstract class SaslXOAuth2Class {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Class

    static name: string
}

interface SaslXOAuth2GoogleClass {

    // Own fields of Camel-1.2.Camel.SaslXOAuth2GoogleClass

    parent_class: SaslXOAuth2Class
}

abstract class SaslXOAuth2GoogleClass {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2GoogleClass

    static name: string
}

interface SaslXOAuth2GooglePrivate {
}

class SaslXOAuth2GooglePrivate {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2GooglePrivate

    static name: string
}

interface SaslXOAuth2OutlookClass {

    // Own fields of Camel-1.2.Camel.SaslXOAuth2OutlookClass

    parent_class: SaslXOAuth2Class
}

abstract class SaslXOAuth2OutlookClass {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2OutlookClass

    static name: string
}

interface SaslXOAuth2OutlookPrivate {
}

class SaslXOAuth2OutlookPrivate {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2OutlookPrivate

    static name: string
}

interface SaslXOAuth2Private {
}

class SaslXOAuth2Private {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Private

    static name: string
}

interface SaslXOAuth2YahooClass {

    // Own fields of Camel-1.2.Camel.SaslXOAuth2YahooClass

    parent_class: SaslXOAuth2Class
}

abstract class SaslXOAuth2YahooClass {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2YahooClass

    static name: string
}

interface SaslXOAuth2YahooPrivate {
}

class SaslXOAuth2YahooPrivate {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2YahooPrivate

    static name: string
}

interface ServiceAuthType {

    // Own fields of Camel-1.2.Camel.ServiceAuthType

    name: string
    description: string
    authproto: string
    need_password: boolean

    // Owm methods of Camel-1.2.Camel.ServiceAuthType

    /**
     * Copies the `service_auth_type` struct.
     * Does nothing and returns the given object in reality, needed for the introspection.
     */
    copy(): ServiceAuthType
    /**
     * Frees the `service_auth_type` struct.
     * Does nothing in reality, needed for the introspection.
     */
    free(): void
}

class ServiceAuthType {

    // Own properties of Camel-1.2.Camel.ServiceAuthType

    static name: string
}

interface ServiceClass {

    // Own fields of Camel-1.2.Camel.ServiceClass

    parent_class: ObjectClass
    settings_type: GObject.GType
    get_name: (service: Service, brief: boolean) => string
    connect_sync: (service: Service, cancellable: Gio.Cancellable | null) => boolean
    disconnect_sync: (service: Service, clean: boolean, cancellable: Gio.Cancellable | null) => boolean
    authenticate_sync: (service: Service, mechanism: string | null, cancellable: Gio.Cancellable | null) => AuthenticationResult
    query_auth_types_sync: (service: Service, cancellable: Gio.Cancellable | null) => ServiceAuthType[]
    reserved: object[]
}

abstract class ServiceClass {

    // Own properties of Camel-1.2.Camel.ServiceClass

    static name: string
}

interface ServicePrivate {
}

class ServicePrivate {

    // Own properties of Camel-1.2.Camel.ServicePrivate

    static name: string
}

interface SessionClass {

    // Own fields of Camel-1.2.Camel.SessionClass

    parent_class: GObject.ObjectClass
    add_service: (session: Session, uid: string, protocol: string, type: ProviderType) => Service
    remove_service: (session: Session, service: Service) => void
    get_password: (session: Session, service: Service, prompt: string, item: string, flags: number) => string
    forget_password: (session: Session, service: Service, item: string) => boolean
    trust_prompt: (session: Session, service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => CertTrust
    get_filter_driver: (session: Session, type: string, for_folder: Folder | null) => FilterDriver
    lookup_addressbook: (session: Session, name: string) => boolean
    authenticate_sync: (session: Session, service: Service, mechanism: string | null, cancellable: Gio.Cancellable | null) => boolean
    forward_to_sync: (session: Session, folder: Folder, message: MimeMessage, address: string, cancellable: Gio.Cancellable | null) => boolean
    get_oauth2_access_token_sync: (session: Session, service: Service, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    get_recipient_certificates_sync: (session: Session, flags: number, recipients: string[], cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_certificates */ string[] ]
    addressbook_contains_sync: (session: Session, book_uid: string, email_address: string, cancellable: Gio.Cancellable | null) => boolean
    reserved_methods: object[]
    job_started: (session: Session, cancellable: Gio.Cancellable | null) => void
    job_finished: (session: Session, cancellable: Gio.Cancellable | null, error: GLib.Error) => void
    user_alert: (session: Session, service: Service, type: SessionAlertType, message: string) => void
    reserved_signals: object[]
}

abstract class SessionClass {

    // Own properties of Camel-1.2.Camel.SessionClass

    static name: string
}

interface SessionPrivate {
}

class SessionPrivate {

    // Own properties of Camel-1.2.Camel.SessionPrivate

    static name: string
}

interface SettingsClass {

    // Own fields of Camel-1.2.Camel.SettingsClass

    parent_class: GObject.ObjectClass
    clone: (settings: Settings) => Settings
    equal: (settings_a: Settings, settings_b: Settings) => boolean
    reserved: object[]
}

abstract class SettingsClass {

    // Own properties of Camel-1.2.Camel.SettingsClass

    static name: string

    // Owm static methods of Camel-1.2.Camel.SettingsClass

    /**
     * Returns an array of #GParamSpec for properties of `class` which are
     * considered to be settings.  By default all properties are considered
     * to be settings, but subclasses may wish to exclude certain properties.
     * Free the returned array with g_free().
     * @param n_settings return location for the length of the returned array
     */
    static list_settings(settings_class: Settings | Function | GObject.GType, n_settings: number): GObject.ParamSpec
}

interface SettingsPrivate {
}

class SettingsPrivate {

    // Own properties of Camel-1.2.Camel.SettingsPrivate

    static name: string
}

interface StoreClass {

    // Own fields of Camel-1.2.Camel.StoreClass

    parent_class: ServiceClass
    hash_folder_name: GLib.HashFunc
    equal_folder_name: GLib.EqualFunc
    can_refresh_folder: (store: Store, info: FolderInfo) => boolean
    get_folder_sync: (store: Store, folder_name: string, flags: StoreGetFolderFlags, cancellable: Gio.Cancellable | null) => Folder | null
    get_folder_info_sync: (store: Store, top: string | null, flags: StoreGetFolderInfoFlags, cancellable: Gio.Cancellable | null) => FolderInfo | null
    get_inbox_folder_sync: (store: Store, cancellable: Gio.Cancellable | null) => Folder | null
    get_junk_folder_sync: (store: Store, cancellable: Gio.Cancellable | null) => Folder | null
    get_trash_folder_sync: (store: Store, cancellable: Gio.Cancellable | null) => Folder | null
    create_folder_sync: (store: Store, parent_name: string | null, folder_name: string, cancellable: Gio.Cancellable | null) => FolderInfo | null
    delete_folder_sync: (store: Store, folder_name: string, cancellable: Gio.Cancellable | null) => boolean
    rename_folder_sync: (store: Store, old_name: string, new_name: string, cancellable: Gio.Cancellable | null) => boolean
    synchronize_sync: (store: Store, expunge: boolean, cancellable: Gio.Cancellable | null) => boolean
    initial_setup_sync: (store: Store, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    get_can_auto_save_changes: (store: Store) => boolean
    reserved_methods: object[]
    folder_created: (store: Store, folder_info: FolderInfo) => void
    folder_deleted: (store: Store, folder_info: FolderInfo) => void
    folder_opened: (store: Store, folder: Folder) => void
    folder_renamed: (store: Store, old_name: string, folder_info: FolderInfo) => void
    folder_info_stale: (store: Store) => void
    reserved_signals: object[]
}

abstract class StoreClass {

    // Own properties of Camel-1.2.Camel.StoreClass

    static name: string
}

interface StoreInfo {

    // Own fields of Camel-1.2.Camel.StoreInfo

    refcount: number
    path: string
    flags: number
    unread: number
    total: number
}

class StoreInfo {

    // Constructors of Camel-1.2.Camel.StoreInfo

    /**
     * Returns the last segment of the path string from `info`.
     * @param summary a #CamelStoreSummary
     * @param info a #CamelStoreInfo
     */
    static name(summary: StoreSummary, info: StoreInfo): string
    /**
     * Returns the path string from `info`.
     * @param summary a #CamelStoreSummary
     * @param info a #CamelStoreInfo
     */
    static path(summary: StoreSummary, info: StoreInfo): string
    /**
     * Set a specific string on the `info`.
     * @param summary a #CamelStoreSummary object
     * @param info a #CamelStoreInfo
     * @param type specific string being set
     * @param value string value to set
     */
    static set_string(summary: StoreSummary, info: StoreInfo, type: number, value: string): void
}

interface StorePrivate {
}

class StorePrivate {

    // Own properties of Camel-1.2.Camel.StorePrivate

    static name: string
}

interface StoreSettingsClass {

    // Own fields of Camel-1.2.Camel.StoreSettingsClass

    parent_class: SettingsClass
    reserved: object[]
}

abstract class StoreSettingsClass {

    // Own properties of Camel-1.2.Camel.StoreSettingsClass

    static name: string
}

interface StoreSettingsPrivate {
}

class StoreSettingsPrivate {

    // Own properties of Camel-1.2.Camel.StoreSettingsPrivate

    static name: string
}

interface StoreSummaryClass {

    // Own fields of Camel-1.2.Camel.StoreSummaryClass

    parent_class: GObject.ObjectClass
    store_info_size: number
    summary_header_load: (summary: StoreSummary, file: object | null) => number
    summary_header_save: (summary: StoreSummary, file: object | null) => number
    store_info_save: (summary: StoreSummary, file: object | null, info: StoreInfo) => number
    store_info_free: (summary: StoreSummary, info: StoreInfo) => void
    store_info_set_string: (summary: StoreSummary, info: StoreInfo, type: number, value: string) => void
    reserved: object[]
}

abstract class StoreSummaryClass {

    // Own properties of Camel-1.2.Camel.StoreSummaryClass

    static name: string
}

interface StoreSummaryPrivate {
}

class StoreSummaryPrivate {

    // Own properties of Camel-1.2.Camel.StoreSummaryPrivate

    static name: string
}

interface StreamBufferClass {

    // Own fields of Camel-1.2.Camel.StreamBufferClass

    parent_class: StreamClass
    init: (stream_buffer: StreamBuffer, stream: Stream, mode: StreamBufferMode) => void
    init_vbuf: (stream_buffer: StreamBuffer, stream: Stream, mode: StreamBufferMode, buf: string, size: number) => void
    reserved: object[]
}

abstract class StreamBufferClass {

    // Own properties of Camel-1.2.Camel.StreamBufferClass

    static name: string
}

interface StreamBufferPrivate {
}

class StreamBufferPrivate {

    // Own properties of Camel-1.2.Camel.StreamBufferPrivate

    static name: string
}

interface StreamClass {

    // Own fields of Camel-1.2.Camel.StreamClass

    parent_class: GObject.ObjectClass
    read: (stream: Stream, buffer: number[], cancellable: Gio.Cancellable | null) => number
    write: (stream: Stream, buffer: number[], cancellable: Gio.Cancellable | null) => number
    close: (stream: Stream, cancellable: Gio.Cancellable | null) => number
    flush: (stream: Stream, cancellable: Gio.Cancellable | null) => number
    eos: (stream: Stream) => boolean
    reserved: object[]
}

abstract class StreamClass {

    // Own properties of Camel-1.2.Camel.StreamClass

    static name: string
}

interface StreamFilterClass {

    // Own fields of Camel-1.2.Camel.StreamFilterClass

    parent_class: StreamClass
    reserved: object[]
}

abstract class StreamFilterClass {

    // Own properties of Camel-1.2.Camel.StreamFilterClass

    static name: string
}

interface StreamFilterPrivate {
}

class StreamFilterPrivate {

    // Own properties of Camel-1.2.Camel.StreamFilterPrivate

    static name: string
}

interface StreamFsClass {

    // Own fields of Camel-1.2.Camel.StreamFsClass

    parent_class: StreamClass
    reserved: object[]
}

abstract class StreamFsClass {

    // Own properties of Camel-1.2.Camel.StreamFsClass

    static name: string
}

interface StreamFsPrivate {
}

class StreamFsPrivate {

    // Own properties of Camel-1.2.Camel.StreamFsPrivate

    static name: string
}

interface StreamMemClass {

    // Own fields of Camel-1.2.Camel.StreamMemClass

    parent_class: StreamClass
    reserved: object[]
}

abstract class StreamMemClass {

    // Own properties of Camel-1.2.Camel.StreamMemClass

    static name: string
}

interface StreamMemPrivate {
}

class StreamMemPrivate {

    // Own properties of Camel-1.2.Camel.StreamMemPrivate

    static name: string
}

interface StreamNullClass {

    // Own fields of Camel-1.2.Camel.StreamNullClass

    parent_class: StreamClass
    reserved: object[]
}

abstract class StreamNullClass {

    // Own properties of Camel-1.2.Camel.StreamNullClass

    static name: string
}

interface StreamNullPrivate {
}

class StreamNullPrivate {

    // Own properties of Camel-1.2.Camel.StreamNullPrivate

    static name: string
}

interface StreamPrivate {
}

class StreamPrivate {

    // Own properties of Camel-1.2.Camel.StreamPrivate

    static name: string
}

interface StreamProcessClass {

    // Own fields of Camel-1.2.Camel.StreamProcessClass

    parent_class: StreamClass
    reserved: object[]
}

abstract class StreamProcessClass {

    // Own properties of Camel-1.2.Camel.StreamProcessClass

    static name: string
}

interface StreamProcessPrivate {
}

class StreamProcessPrivate {

    // Own properties of Camel-1.2.Camel.StreamProcessPrivate

    static name: string
}

interface SubscribableInterface {

    // Own fields of Camel-1.2.Camel.SubscribableInterface

    parent_interface: GObject.TypeInterface
    folder_is_subscribed: (subscribable: Subscribable, folder_name: string) => boolean
    subscribe_folder_sync: (subscribable: Subscribable, folder_name: string, cancellable: Gio.Cancellable | null) => boolean
    unsubscribe_folder_sync: (subscribable: Subscribable, folder_name: string, cancellable: Gio.Cancellable | null) => boolean
    reserved_methods: object[]
    folder_subscribed: (subscribable: Subscribable, folder_info: FolderInfo) => void
    folder_unsubscribed: (subscribable: Subscribable, folder_info: FolderInfo) => void
    reserved_signals: object[]
}

abstract class SubscribableInterface {

    // Own properties of Camel-1.2.Camel.SubscribableInterface

    static name: string
}

interface SummaryMessageID {
}

class SummaryMessageID {

    // Own properties of Camel-1.2.Camel.SummaryMessageID

    static name: string
}

interface TextIndexClass {

    // Own fields of Camel-1.2.Camel.TextIndexClass

    parent_class: IndexClass
    reserved: object[]
}

abstract class TextIndexClass {

    // Own properties of Camel-1.2.Camel.TextIndexClass

    static name: string
}

interface TextIndexCursorClass {

    // Own fields of Camel-1.2.Camel.TextIndexCursorClass

    parent_class: IndexCursorClass
    reserved: object[]
}

abstract class TextIndexCursorClass {

    // Own properties of Camel-1.2.Camel.TextIndexCursorClass

    static name: string
}

interface TextIndexCursorPrivate {
}

class TextIndexCursorPrivate {

    // Own properties of Camel-1.2.Camel.TextIndexCursorPrivate

    static name: string
}

interface TextIndexKeyCursorClass {

    // Own fields of Camel-1.2.Camel.TextIndexKeyCursorClass

    parent_class: IndexCursorClass
    reserved: object[]
}

abstract class TextIndexKeyCursorClass {

    // Own properties of Camel-1.2.Camel.TextIndexKeyCursorClass

    static name: string
}

interface TextIndexKeyCursorPrivate {
}

class TextIndexKeyCursorPrivate {

    // Own properties of Camel-1.2.Camel.TextIndexKeyCursorPrivate

    static name: string
}

interface TextIndexNameClass {

    // Own fields of Camel-1.2.Camel.TextIndexNameClass

    parent_class: IndexNameClass
    reserved: object[]
}

abstract class TextIndexNameClass {

    // Own properties of Camel-1.2.Camel.TextIndexNameClass

    static name: string
}

interface TextIndexNamePrivate {
}

class TextIndexNamePrivate {

    // Own properties of Camel-1.2.Camel.TextIndexNamePrivate

    static name: string
}

interface TextIndexPrivate {
}

class TextIndexPrivate {

    // Own properties of Camel-1.2.Camel.TextIndexPrivate

    static name: string
}

interface TransportClass {

    // Own fields of Camel-1.2.Camel.TransportClass

    parent_class: ServiceClass
    send_to_sync: (transport: Transport, message: MimeMessage, from: Address, recipients: Address, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_sent_message_saved */ boolean ]
    reserved: object[]
}

abstract class TransportClass {

    // Own properties of Camel-1.2.Camel.TransportClass

    static name: string
}

interface TransportPrivate {
}

class TransportPrivate {

    // Own properties of Camel-1.2.Camel.TransportPrivate

    static name: string
}

interface Trie {
}

/**
 * A trie data structure.
 * @record 
 */
class Trie {

    // Own properties of Camel-1.2.Camel.Trie

    static name: string
}

interface UIDCache {

    // Own fields of Camel-1.2.Camel.UIDCache

    filename: string
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
     */
    get_new_uids(uids: string[]): string[]
    /**
     * Attempts to save `cache` back to disk.
     */
    save(): boolean
    /**
     * Marks a uid for saving.
     * @param uid a uid to save
     */
    save_uid(uid: string): void
}

class UIDCache {

    // Own properties of Camel-1.2.Camel.UIDCache

    static name: string

    // Constructors of Camel-1.2.Camel.UIDCache

    /**
     * Frees the array of UIDs.
     * @param uids an array returned from camel_uid_cache_get_new_uids()
     */
    static free_uids(uids: string[]): void
}

interface URL {

    // Own fields of Camel-1.2.Camel.URL

    protocol: string
    user: string
    authmech: string
    host: string
    port: number
    path: string
    params: GLib.Data
    query: string
    fragment: string

    // Owm methods of Camel-1.2.Camel.URL

    /**
     * Copy a #CamelURL.
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
     */
    get_param(name: string): string | null
    hash(): number
    /**
     * Parses `url_string` relative to `base`.
     * @param url_string the URL
     */
    new_with_base(url_string: string): URL
    /**
     * Set the authmech of a #CamelURL.
     * @param authmech authentication mechanism
     */
    set_authmech(authmech: string): void
    /**
     * Set the fragment of a #CamelURL.
     * @param fragment url fragment
     */
    set_fragment(fragment: string): void
    /**
     * Set the hostname of a #CamelURL.
     * @param host hostname
     */
    set_host(host: string): void
    /**
     * Set a param on the #CamelURL.
     * @param name name of the param to set
     * @param value value of the param to set
     */
    set_param(name: string, value: string): void
    /**
     * Set the path component of a #CamelURL.
     * @param path path
     */
    set_path(path: string): void
    /**
     * Set the port on a #CamelURL.
     * @param port port
     */
    set_port(port: number): void
    /**
     * Set the protocol of a #CamelURL.
     * @param protocol protocol schema
     */
    set_protocol(protocol: string): void
    /**
     * Set the query of a #CamelURL.
     * @param query url query
     */
    set_query(query: string): void
    /**
     * Set the user of a #CamelURL.
     * @param user username
     */
    set_user(user: string): void
    /**
     * Flatten a #CamelURL into a string.
     * @param flags additional translation options
     */
    to_string(flags: URLFlags): string
}

class URL {

    // Own properties of Camel-1.2.Camel.URL

    static name: string

    // Constructors of Camel-1.2.Camel.URL

    /**
     * Parses an absolute URL.
     * @constructor 
     * @param url_string a URL string
     */
    constructor(url_string: string) 
    /**
     * Parses an absolute URL.
     * @constructor 
     * @param url_string a URL string
     */
    static new(url_string: string): URL
    static addrspec_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static addrspec_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    /**
     * &percnt;-decodes the passed-in URL *in place*. The decoded version is
     * never longer than the encoded version, so there does not need to
     * be any additional space at the end of the string.
     * @param part a URL part
     */
    static decode(part: string): void
    static decode_path(path: string): string
    /**
     * This &percnt;-encodes the given URL part and returns the escaped version
     * in allocated memory, which the caller must free when it is done.
     * @param part a URL part
     * @param escape_extra additional characters beyond " \"%#<>{}|\^[]`" to escape (or %NULL)
     */
    static encode(part: string, escape_extra: string | null): string
    static file_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static file_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static web_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static web_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
}

interface UrlMatch {

    // Own fields of Camel-1.2.Camel.UrlMatch

    pattern: string
    prefix: string
    um_so: number
    um_eo: number
}

class UrlMatch {

    // Own properties of Camel-1.2.Camel.UrlMatch

    static name: string
}

interface UrlPattern {

    // Own fields of Camel-1.2.Camel.UrlPattern

    pattern: string
    prefix: string
    start: UrlScanFunc
    end: UrlScanFunc
}

class UrlPattern {

    // Own properties of Camel-1.2.Camel.UrlPattern

    static name: string
}

interface UrlScanner {
}

class UrlScanner {

    // Own properties of Camel-1.2.Camel.UrlScanner

    static name: string
}

interface VTrashFolderClass {

    // Own fields of Camel-1.2.Camel.VTrashFolderClass

    parent_class: VeeFolderClass
    reserved: object[]
}

abstract class VTrashFolderClass {

    // Own properties of Camel-1.2.Camel.VTrashFolderClass

    static name: string
}

interface VTrashFolderPrivate {
}

class VTrashFolderPrivate {

    // Own properties of Camel-1.2.Camel.VTrashFolderPrivate

    static name: string
}

interface VeeDataCacheClass {

    // Own fields of Camel-1.2.Camel.VeeDataCacheClass

    parent_class: GObject.ObjectClass
    reserved: object[]
}

abstract class VeeDataCacheClass {

    // Own properties of Camel-1.2.Camel.VeeDataCacheClass

    static name: string
}

interface VeeDataCachePrivate {
}

class VeeDataCachePrivate {

    // Own properties of Camel-1.2.Camel.VeeDataCachePrivate

    static name: string
}

interface VeeFolderClass {

    // Own fields of Camel-1.2.Camel.VeeFolderClass

    parent_class: FolderClass
    add_folder: (vfolder: VeeFolder, subfolder: Folder, cancellable: Gio.Cancellable | null) => void
    remove_folder: (vfolder: VeeFolder, subfolder: Folder, cancellable: Gio.Cancellable | null) => void
    rebuild_folder: (vfolder: VeeFolder, subfolder: Folder, cancellable: Gio.Cancellable | null) => void
    set_expression: (vfolder: VeeFolder, expression: string) => void
    folder_changed: (vfolder: VeeFolder, subfolder: Folder, changes: FolderChangeInfo) => void
    reserved: object[]
}

abstract class VeeFolderClass {

    // Own properties of Camel-1.2.Camel.VeeFolderClass

    static name: string
}

interface VeeFolderPrivate {
}

class VeeFolderPrivate {

    // Own properties of Camel-1.2.Camel.VeeFolderPrivate

    static name: string
}

interface VeeMessageInfoClass {

    // Own fields of Camel-1.2.Camel.VeeMessageInfoClass

    parent_class: MessageInfoClass
    reserved: object[]
}

abstract class VeeMessageInfoClass {

    // Own properties of Camel-1.2.Camel.VeeMessageInfoClass

    static name: string
}

interface VeeMessageInfoDataClass {

    // Own fields of Camel-1.2.Camel.VeeMessageInfoDataClass

    parent_class: GObject.ObjectClass
    reserved: object[]
}

abstract class VeeMessageInfoDataClass {

    // Own properties of Camel-1.2.Camel.VeeMessageInfoDataClass

    static name: string
}

interface VeeMessageInfoDataPrivate {
}

class VeeMessageInfoDataPrivate {

    // Own properties of Camel-1.2.Camel.VeeMessageInfoDataPrivate

    static name: string
}

interface VeeMessageInfoPrivate {
}

class VeeMessageInfoPrivate {

    // Own properties of Camel-1.2.Camel.VeeMessageInfoPrivate

    static name: string
}

interface VeeStoreClass {

    // Own fields of Camel-1.2.Camel.VeeStoreClass

    parent_class: StoreClass
    reserved: object[]
}

abstract class VeeStoreClass {

    // Own properties of Camel-1.2.Camel.VeeStoreClass

    static name: string
}

interface VeeStorePrivate {
}

class VeeStorePrivate {

    // Own properties of Camel-1.2.Camel.VeeStorePrivate

    static name: string
}

interface VeeSubfolderDataClass {

    // Own fields of Camel-1.2.Camel.VeeSubfolderDataClass

    parent_class: GObject.ObjectClass
    reserved: object[]
}

abstract class VeeSubfolderDataClass {

    // Own properties of Camel-1.2.Camel.VeeSubfolderDataClass

    static name: string
}

interface VeeSubfolderDataPrivate {
}

class VeeSubfolderDataPrivate {

    // Own properties of Camel-1.2.Camel.VeeSubfolderDataPrivate

    static name: string
}

interface VeeSummaryClass {

    // Own fields of Camel-1.2.Camel.VeeSummaryClass

    parent_class: FolderSummaryClass
    reserved: object[]
}

abstract class VeeSummaryClass {

    // Own properties of Camel-1.2.Camel.VeeSummaryClass

    static name: string
}

interface VeeSummaryPrivate {
}

class VeeSummaryPrivate {

    // Own properties of Camel-1.2.Camel.VeeSummaryPrivate

    static name: string
}

interface WeakRefGroup {

    // Owm methods of Camel-1.2.Camel.WeakRefGroup

    get(): object | null
    /**
     * Increases a reference count of the `group`.
     */
    ref(): WeakRefGroup
    /**
     * Sets the `object` as the object help by this `group`. If
     * the `object` is %NULL, then unsets any previously set.
     * @param object a #GObject descendant, or %NULL
     */
    set(object: object | null): void
    /**
     * Decreases a reference count of the `group`. The `group` is
     * freed when the reference count reaches zero.
     */
    unref(): void
}

class WeakRefGroup {

    // Own properties of Camel-1.2.Camel.WeakRefGroup

    static name: string

    // Constructors of Camel-1.2.Camel.WeakRefGroup

    constructor() 
    static new(): WeakRefGroup
}

interface _KeyKey {

    // Own fields of Camel-1.2.Camel._KeyKey

    data: _block_t
    offset: number
    flags: number
}

class _KeyKey {

    // Own properties of Camel-1.2.Camel._KeyKey

    static name: string
}

interface _LockHelperMsg {

    // Own fields of Camel-1.2.Camel._LockHelperMsg

    magic: number
    seq: number
    id: number
    data: number
}

class _LockHelperMsg {

    // Own properties of Camel-1.2.Camel._LockHelperMsg

    static name: string
}

interface __search_word {

    // Own fields of Camel-1.2.Camel.__search_word

    type: _search_word_t
    word: string
}

class __search_word {

    // Own properties of Camel-1.2.Camel.__search_word

    static name: string
}

interface __search_words {

    // Own fields of Camel-1.2.Camel.__search_words

    len: number
    type: _search_word_t
    words: object
}

class __search_words {

    // Own properties of Camel-1.2.Camel.__search_words

    static name: string
}

interface _encrypt {

    // Own fields of Camel-1.2.Camel._encrypt

    status: CipherValidityEncrypt
    description: string
    encrypters: GLib.Queue
}

class _encrypt {

    // Own properties of Camel-1.2.Camel._encrypt

    static name: string
}

interface _sign {

    // Own fields of Camel-1.2.Camel._sign

    status: CipherValiditySign
    description: string
    signers: GLib.Queue
}

class _sign {

    // Own properties of Camel-1.2.Camel._sign

    static name: string
}

    type _block_t = number
    type _hash_t = number
    type _key_t = number
}
export default Camel;