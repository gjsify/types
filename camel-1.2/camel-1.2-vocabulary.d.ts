/**
 * The GIR-derived widget VOCABULARY for Camel-1.2.
 *
 * GENERATED — do not edit. Provenance: Camel-1.2 — prop(s) no TypeScript value satisfies: Camel.MessageInfo.references
 *
 * 88 instantiable GTypes (of which 0 concrete widgets), 95 declarations, 25 enum nick unions, 0 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type Camel from './camel-1.2.js';
import type Gio from '@girs/gio-2.0';
import type { GCancellableConstructOnly, GCancellableProps, GFilterInputStreamConstructOnly, GFilterInputStreamProps, GFilterOutputStreamConstructOnly, GFilterOutputStreamProps, GInitableConstructOnly, GInitableProps, GInputStreamConstructOnly, GInputStreamProps, GOutputStreamConstructOnly, GOutputStreamProps, GSeekableConstructOnly, GSeekableProps } from '@girs/gio-2.0/vocabulary';
import type { GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type CamelAuthenticationResultNick = 'error' | 'accepted' | 'rejected';
export type CamelCompareTypeNick = 'insensitive' | 'sensitive';
export type CamelFetchHeadersTypeNick = 'basic' | 'basic-and-mailing-list' | 'all';
export type CamelFetchTypeNick = 'old-messages' | 'new-messages';
export type CamelGpgTrustNick = 'none' | 'unknown' | 'never' | 'marginal' | 'full' | 'ultimate';
export type CamelJunkStatusNick = 'error' | 'inconclusive' | 'message-is-junk' | 'message-is-not-junk';
export type CamelMatchThreadsKindNick = 'none' | 'all' | 'replies' | 'replies-and-parents' | 'single' | 'not-all';
export type CamelMimeFilterBasicTypeNick = 'invalid' | 'base64-enc' | 'base64-dec' | 'qp-enc' | 'qp-dec' | 'uu-enc' | 'uu-dec';
export type CamelMimeFilterCRLFDirectionNick = 'encode' | 'decode';
export type CamelMimeFilterCRLFModeNick = 'dots' | 'only';
export type CamelMimeFilterGZipModeNick = 'zip' | 'unzip';
export type CamelMimeFilterYencDirectionNick = 'encode' | 'decode';
export type CamelNetworkSecurityMethodNick = 'none' | 'ssl-on-alternate-port' | 'starttls-on-standard-port';
export type CamelProviderConfTypeNick = 'end' | 'section-start' | 'section-end' | 'checkbox' | 'checkspin' | 'entry' | 'label' | 'hidden' | 'options' | 'placeholder' | 'advanced-section-start';
export type CamelProviderTypeNick = 'store' | 'transport';
export type CamelSExpResultTypeNick = 'array-ptr' | 'int' | 'string' | 'bool' | 'time' | 'undefined';
export type CamelSExpTermTypeNick = 'int' | 'bool' | 'string' | 'time' | 'func' | 'ifunc' | 'var';
export type CamelSaslAnonTraceTypeNick = 'email' | 'opaque' | 'empty';
export type CamelServiceConnectionStatusNick = 'disconnected' | 'connecting' | 'connected' | 'disconnecting';
export type CamelSessionAlertTypeNick = 'info' | 'warning' | 'error';
export type CamelSortTypeNick = 'ascending' | 'descending';
export type CamelStoreDBCountKindNick = 'total' | 'unread' | 'junk' | 'deleted' | 'not-junk-not-deleted' | 'not-junk-not-deleted-unread' | 'junk-not-deleted';
export type CamelThreeStateNick = 'off' | 'on' | 'inconsistent';
export type CamelTimeUnitNick = 'days' | 'weeks' | 'months' | 'years';
export type CamelTransferEncodingNick = 'encoding-default' | 'encoding-7bit' | 'encoding-8bit' | 'encoding-base64' | 'encoding-quotedprintable' | 'encoding-binary' | 'encoding-uuencode' | 'num-encodings';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Base class for RFC-defined address types. */
export interface CamelAddressProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelAddressConstructOnly = GObjectConstructOnly;

export interface CamelBlockFileProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelBlockFileConstructOnly = GObjectConstructOnly;

export interface CamelCertDBProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelCertDBConstructOnly = GObjectConstructOnly;

/** Encryption and digital signature interface. */
export interface CamelCipherContextProps extends GObjectProps {
    /** The corresponding #CamelSession */
    session?: Camel.Session | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelCipherContextConstructOnly = GObjectConstructOnly | 'session';

export interface CamelDBProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelDBConstructOnly = GObjectConstructOnly;

/** A file-based cache for arbitrary keyed data, typically used by mail providers to store downloaded message bodies. */
export interface CamelDataCacheProps extends GObjectProps {
    /**
     * Expire Enabled
     * @default TRUE
     */
    'expire-enabled'?: boolean;
    /**
     * Path
     * @default NULL
     */
    path?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelDataCacheConstructOnly = GObjectConstructOnly;

/** Base class for structured MIME data access. */
export interface CamelDataWrapperProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelDataWrapperConstructOnly = GObjectConstructOnly;

/** Rule-based message filtering engine. */
export interface CamelFilterDriverProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelFilterDriverConstructOnly = GObjectConstructOnly;

/** Filtered input stream. */
export interface CamelFilterInputStreamProps extends GFilterInputStreamProps {
    /** The MIME filter object */
    filter?: Camel.MimeFilter;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelFilterInputStreamConstructOnly = GFilterInputStreamConstructOnly | 'filter';

/** Filtered output stream. */
export interface CamelFilterOutputStreamProps extends GFilterOutputStreamProps {
    /** The MIME filter object */
    filter?: Camel.MimeFilter;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelFilterOutputStreamConstructOnly = GFilterOutputStreamConstructOnly | 'filter';

/** Abstract interface for a mail message store. */
export interface CamelFolderProps extends GObjectProps {
    /**
     * The folder's description.
     * @default NULL
     */
    description?: string;
    /**
     * The folder's display name.
     * @default NULL
     */
    'display-name'?: string;
    /**
     * Folder flags (bit-or of #CamelFolderFlags).
     * @since 3.62
     * @default 0
     */
    flags?: number;
    /**
     * The folder's fully qualified name.
     * @default NULL
     */
    'full-name'?: string;
    /**
     * A #CamelThreeState persistent option of the folder, which can override global option to mark messages as seen after certain interval.
     * @since 3.32
     * @default CAMEL_THREE_STATE_INCONSISTENT
     */
    'mark-seen'?: CamelThreeStateNick | Camel.ThreeState;
    /**
     * Timeout in milliseconds for marking messages as seen.
     * @since 3.32
     * @default 1500
     */
    'mark-seen-timeout'?: number;
    /** The #CamelStore to which the folder belongs. */
    'parent-store'?: Camel.Store;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelFolderConstructOnly = GObjectConstructOnly | 'parent-store';

/** Manages cached message metadata for a folder. */
export interface CamelFolderSummaryProps extends GObjectProps {
    /** The #CamelFolder to which the folder summary belongs. */
    folder?: Camel.Folder;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelFolderSummaryConstructOnly = GObjectConstructOnly | 'folder';

/** Message threading / conversation grouping. */
export interface CamelFolderThreadProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelFolderThreadConstructOnly = GObjectConstructOnly;

export interface CamelGpgContextProps extends CamelCipherContextProps {
    /**
     * Always Trust
     * @default FALSE
     */
    'always-trust'?: boolean;
    /**
     * Locate Keys
     * @default TRUE
     */
    'locate-keys'?: boolean;
    /**
     * Prefer Inline
     * @default FALSE
     */
    'prefer-inline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelGpgContextConstructOnly = CamelCipherContextConstructOnly;

export interface CamelHTMLParserProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelHTMLParserConstructOnly = GObjectConstructOnly;

/** Abstract interface for content indexing. */
export interface CamelIndexProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelIndexConstructOnly = GObjectConstructOnly;

export interface CamelIndexCursorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelIndexCursorConstructOnly = GObjectConstructOnly;

export interface CamelIndexNameProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelIndexNameConstructOnly = GObjectConstructOnly;

/** RFC 822 internet address handling. */
export interface CamelInternetAddressProps extends CamelAddressProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelInternetAddressConstructOnly = CamelAddressConstructOnly;

export interface CamelKeyFileProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelKeyFileConstructOnly = GObjectConstructOnly;

export interface CamelKeyTableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelKeyTableConstructOnly = GObjectConstructOnly;

export interface CamelLocalSettingsProps extends CamelStoreSettingsProps {
    /**
     * Whether to apply filters in all folders
     * @default FALSE
     */
    'filter-all'?: boolean;
    /**
     * Whether to check new messages for junk
     * @default TRUE
     */
    'filter-junk'?: boolean;
    /**
     * Whether to use alternative flag separator in Maildir file name
     * @default FALSE
     */
    'maildir-alt-flag-sep'?: boolean;
    /**
     * File path to the local store
     * @default NULL
     */
    path?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelLocalSettingsConstructOnly = CamelStoreSettingsConstructOnly;

/** Abstract class for data with headers and content. */
export interface CamelMediumProps extends CamelDataWrapperProps {
    /** Content */
    content?: Camel.DataWrapper | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMediumConstructOnly = CamelDataWrapperConstructOnly;

export interface CamelMessageInfoProps extends GObjectProps {
    /**
     * Flag, whether the info is currently aborting notifications.
     * @since 3.24
     * @default FALSE
     */
    'abort-notifications'?: boolean;
    /**
     * CC address of the associated message.
     * @since 3.24
     * @default NULL
     */
    cc?: string;
    /**
     * Received date of the associated message.
     * @since 3.24
     * @default 0
     */
    'date-received'?: bigint | number;
    /**
     * Sent Date of the associated message.
     * @since 3.24
     * @default 0
     */
    'date-sent'?: bigint | number;
    /**
     * Flag, whether the info is changed and requires save to disk.
     * @since 3.24
     * @default FALSE
     */
    dirty?: boolean;
    /**
     * Bit-or of #CamelMessageFlags.
     * @since 3.24
     * @default 0
     */
    flags?: number;
    /**
     * Flag, whether the info is changed and requires save to the destination store/server.
     * @since 3.24
     * @default FALSE
     */
    'folder-flagged'?: boolean;
    /**
     * From address of the associated message.
     * @since 3.24
     * @default NULL
     */
    from?: string;
    /**
     * Headers of the associated message.
     * @since 3.24
     */
    headers?: Camel.NameValueArray | null;
    /**
     * Encoded Message-ID of the associated message as a guint64 number, partial MD5 sum.
     * @since 3.24
     * @default 0
     */
    'message-id'?: bigint | number;
    /**
     * Mailing list address of the associated message.
     * @since 3.24
     * @default NULL
     */
    mlist?: string;
    /**
     * Body preview of the associated message.
     * @since 3.42
     * @default NULL
     */
    preview?: string | null;
    /**
     * Encoded In-Reply-To and References headers of the associated message as an array of guint64 numbers, partial MD5 sums.
     * @since 3.24
     */
    references?: never[] | null;
    /**
     * Size of the associated message.
     * @since 3.24
     * @default 0
     */
    size?: number;
    /**
     * Subject of the associated message.
     * @since 3.24
     * @default NULL
     */
    subject?: string;
    /**
     * The #CamelFolderSummary to which the message info belongs, or %NULL.
     * @since 3.24
     */
    summary?: Camel.FolderSummary;
    /**
     * To address of the associated message.
     * @since 3.24
     * @default NULL
     */
    to?: string;
    /**
     * A unique ID of the message in its folder.
     * @since 3.24
     * @default NULL
     */
    uid?: string;
    /**
     * User flags for the associated message.
     * @since 3.24
     */
    'user-flags'?: Camel.NamedFlags | null;
    /**
     * User-defined headers of the associated message.
     * @since 3.42
     */
    'user-headers'?: Camel.NameValueArray | null;
    /**
     * User tags for the associated message.
     * @since 3.24
     */
    'user-tags'?: Camel.NameValueArray | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMessageInfoConstructOnly = GObjectConstructOnly | 'summary';

export interface CamelMessageInfoBaseProps extends CamelMessageInfoProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMessageInfoBaseConstructOnly = CamelMessageInfoConstructOnly;

/** Stream-processing filter modules for MIME data. */
export interface CamelMimeFilterProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterConstructOnly = GObjectConstructOnly;

export interface CamelMimeFilterBasicProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterBasicConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterBestencProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterBestencConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterCRLFProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterCRLFConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterCanonProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterCanonConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterCharsetProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterCharsetConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterEnrichedProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterEnrichedConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterFromProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterFromConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterGZipProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterGZipConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterHTMLProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterHTMLConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterIndexProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterIndexConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterLinewrapProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterLinewrapConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterPgpProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterPgpConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterPreviewProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterPreviewConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterProgressProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterProgressConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterToHTMLProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterToHTMLConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterWindowsProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterWindowsConstructOnly = CamelMimeFilterConstructOnly;

export interface CamelMimeFilterYencProps extends CamelMimeFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeFilterYencConstructOnly = CamelMimeFilterConstructOnly;

/** A complete RFC 822 MIME message. */
export interface CamelMimeMessageProps extends CamelMimePartProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeMessageConstructOnly = CamelMimePartConstructOnly;

/** Core MIME message parser. */
export interface CamelMimeParserProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimeParserConstructOnly = GObjectConstructOnly;

/** A single part in a MIME message. */
export interface CamelMimePartProps extends CamelMediumProps {
    /** @default NULL */
    'content-id'?: string | null;
    /** @default NULL */
    'content-location'?: string | null;
    /** @default NULL */
    'content-md5'?: string | null;
    /** @default NULL */
    description?: string | null;
    /** @default NULL */
    disposition?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMimePartConstructOnly = CamelMediumConstructOnly;

/** A container for multiple MIME parts. */
export interface CamelMultipartProps extends CamelDataWrapperProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMultipartConstructOnly = CamelDataWrapperConstructOnly;

/** A multipart/encrypted MIME container. */
export interface CamelMultipartEncryptedProps extends CamelMultipartProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMultipartEncryptedConstructOnly = CamelMultipartConstructOnly;

/** A multipart/signed MIME container. */
export interface CamelMultipartSignedProps extends CamelMultipartProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelMultipartSignedConstructOnly = CamelMultipartConstructOnly;

/** NNTP newsgroup address handling. */
export interface CamelNNTPAddressProps extends CamelAddressProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelNNTPAddressConstructOnly = CamelAddressConstructOnly;

/** Null output stream. */
export interface CamelNullOutputStreamProps extends GOutputStreamProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelNullOutputStreamConstructOnly = GOutputStreamConstructOnly;

/** A folder that supports offline message caching. */
export interface CamelOfflineFolderProps extends CamelFolderProps {
    /**
     * Copy folder content locally for offline operation
     * @default CAMEL_THREE_STATE_INCONSISTENT
     */
    'offline-sync'?: CamelThreeStateNick | Camel.ThreeState;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelOfflineFolderConstructOnly = CamelFolderConstructOnly;

export interface CamelOfflineSettingsProps extends CamelStoreSettingsProps {
    /**
     * Whether to limit what will be synchronized by message date
     * @default FALSE
     */
    'limit-by-age'?: boolean;
    /**
     * A unit for the limit-value
     * @default CAMEL_TIME_UNIT_YEARS
     */
    'limit-unit'?: CamelTimeUnitNick | Camel.TimeUnit;
    /**
     * How many days/weeks/months/years to download into the local cache, if limit-by-age is set to %TRUE
     * @default 1
     */
    'limit-value'?: number;
    /**
     * Stay synchronized with the remote server
     * @default FALSE
     */
    'stay-synchronized'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelOfflineSettingsConstructOnly = CamelStoreSettingsConstructOnly;

/** Base class for offline-capable mail stores. */
export interface CamelOfflineStoreProps extends CamelStoreProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelOfflineStoreConstructOnly = CamelStoreConstructOnly | GInitableConstructOnly;

/** Progress reporting and cancellation for long-running tasks. */
export interface CamelOperationProps extends GCancellableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelOperationConstructOnly = GCancellableConstructOnly;

export interface CamelPartitionTableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelPartitionTableConstructOnly = GObjectConstructOnly;

/** S-expression matching functions for message filtering. */
export interface CamelSExpProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSExpConstructOnly = GObjectConstructOnly;

export interface CamelSMIMEContextProps extends CamelCipherContextProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSMIMEContextConstructOnly = CamelCipherContextConstructOnly;

/** SASL (Secure Authentication and Security Layer) support. */
export interface CamelSaslProps extends GObjectProps {
    /**
     * Authenticated
     * @default FALSE
     */
    authenticated?: boolean;
    /**
     * Mechanism
     * @default NULL
     */
    mechanism?: string;
    /** Service */
    service?: Camel.Service;
    /**
     * Service Name
     * @default NULL
     */
    'service-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslConstructOnly = GObjectConstructOnly | 'mechanism' | 'service' | 'service-name';

export interface CamelSaslAnonymousProps extends CamelSaslProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslAnonymousConstructOnly = CamelSaslConstructOnly;

export interface CamelSaslCramMd5Props extends CamelSaslProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslCramMd5ConstructOnly = CamelSaslConstructOnly;

export interface CamelSaslDigestMd5Props extends CamelSaslProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslDigestMd5ConstructOnly = CamelSaslConstructOnly;

export interface CamelSaslGssapiProps extends CamelSaslProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslGssapiConstructOnly = CamelSaslConstructOnly;

export interface CamelSaslLoginProps extends CamelSaslProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslLoginConstructOnly = CamelSaslConstructOnly;

export interface CamelSaslNTLMProps extends CamelSaslProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslNTLMConstructOnly = CamelSaslConstructOnly;

export interface CamelSaslPOPB4SMTPProps extends CamelSaslProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslPOPB4SMTPConstructOnly = CamelSaslConstructOnly;

export interface CamelSaslPlainProps extends CamelSaslProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslPlainConstructOnly = CamelSaslConstructOnly;

export interface CamelSaslXOAuth2Props extends CamelSaslProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslXOAuth2ConstructOnly = CamelSaslConstructOnly;

export interface CamelSaslXOAuth2GoogleProps extends CamelSaslXOAuth2Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslXOAuth2GoogleConstructOnly = CamelSaslXOAuth2ConstructOnly;

export interface CamelSaslXOAuth2OutlookProps extends CamelSaslXOAuth2Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslXOAuth2OutlookConstructOnly = CamelSaslXOAuth2ConstructOnly;

export interface CamelSaslXOAuth2YahooProps extends CamelSaslXOAuth2Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSaslXOAuth2YahooConstructOnly = CamelSaslXOAuth2ConstructOnly;

/** Base class for mail access and sending services. */
export interface CamelServiceProps extends GObjectProps, GInitableProps {
    /**
     * The display name for the service
     * @default NULL
     */
    'display-name'?: string | null;
    /**
     * The password for the service
     * @default NULL
     */
    password?: string;
    /** The #CamelProvider for the service */
    provider?: Camel.Provider;
    /** The proxy resolver for the service */
    'proxy-resolver'?: Gio.ProxyResolver;
    /** A #CamelSession instance */
    session?: Camel.Session;
    /** A #CamelSettings instance */
    settings?: Camel.Settings;
    /**
     * The unique identity of the service
     * @default NULL
     */
    uid?: string;
    /**
     * Private property, to not create #GProxyResolver in the tests
     * @default TRUE
     */
    'with-proxy-resolver'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelServiceConstructOnly = GObjectConstructOnly | GInitableConstructOnly | 'provider' | 'session' | 'uid' | 'with-proxy-resolver';

/** Application context for a Camel mail session. */
export interface CamelSessionProps extends GObjectProps {
    /** Classifies messages as junk or not junk */
    'junk-filter'?: Camel.JunkFilter | null;
    /** The #GNetworkMonitor */
    'network-monitor'?: Gio.NetworkMonitor;
    /**
     * Whether the shell is online
     * @default TRUE
     */
    online?: boolean;
    /**
     * User-specific base directory for mail cache
     * @default NULL
     */
    'user-cache-dir'?: string;
    /**
     * User-specific base directory for mail data
     * @default NULL
     */
    'user-data-dir'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSessionConstructOnly = GObjectConstructOnly;

export interface CamelSettingsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelSettingsConstructOnly = GObjectConstructOnly;

/** Base class for mail storage backends. */
export interface CamelStoreProps extends CamelServiceProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelStoreConstructOnly = CamelServiceConstructOnly | GInitableConstructOnly;

/** A #CamelStore database. */
export interface CamelStoreDBProps extends CamelDBProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelStoreDBConstructOnly = CamelDBConstructOnly;

/** Search between multiple folders of one #CamelStore. */
export interface CamelStoreSearchProps extends GObjectProps {
    /**
     * A #CamelStore this search works with.
     * @since 3.58
     */
    store?: Camel.Store;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelStoreSearchConstructOnly = GObjectConstructOnly | 'store';

export interface CamelStoreSettingsProps extends CamelSettingsProps {
    /**
     * Whether to filter new messages in Inbox
     * @default TRUE
     */
    'filter-inbox'?: boolean;
    /**
     * Interval, in seconds, to store folder changes
     * @default 3
     */
    'store-changes-interval'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelStoreSettingsConstructOnly = CamelSettingsConstructOnly;

/** Cached folder listing for a mail store. */
export interface CamelStoreSummaryProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelStoreSummaryConstructOnly = GObjectConstructOnly;

/** Abstract base class for I/O streams. */
export interface CamelStreamProps extends GObjectProps, GSeekableProps {
    /** The base #GIOStream */
    'base-stream'?: Gio.IOStream;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelStreamConstructOnly = GObjectConstructOnly | GSeekableConstructOnly;

/** A buffering wrapper around a Camel stream. */
export interface CamelStreamBufferProps extends CamelStreamProps, GSeekableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelStreamBufferConstructOnly = CamelStreamConstructOnly | GSeekableConstructOnly;

/** A stream that pipelines data through MIME filters. */
export interface CamelStreamFilterProps extends CamelStreamProps, GSeekableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelStreamFilterConstructOnly = CamelStreamConstructOnly | GSeekableConstructOnly;

export interface CamelStreamFsProps extends CamelStreamProps, GSeekableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelStreamFsConstructOnly = CamelStreamConstructOnly | GSeekableConstructOnly;

export interface CamelStreamMemProps extends CamelStreamProps, GSeekableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelStreamMemConstructOnly = CamelStreamConstructOnly | GSeekableConstructOnly;

export interface CamelStreamNullProps extends CamelStreamProps, GSeekableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelStreamNullConstructOnly = CamelStreamConstructOnly | GSeekableConstructOnly;

export interface CamelStreamProcessProps extends CamelStreamProps, GSeekableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelStreamProcessConstructOnly = CamelStreamConstructOnly | GSeekableConstructOnly;

export interface CamelTextIndexProps extends CamelIndexProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelTextIndexConstructOnly = CamelIndexConstructOnly;

export interface CamelTextIndexCursorProps extends CamelIndexCursorProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelTextIndexCursorConstructOnly = CamelIndexCursorConstructOnly;

export interface CamelTextIndexKeyCursorProps extends CamelIndexCursorProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelTextIndexKeyCursorConstructOnly = CamelIndexCursorConstructOnly;

export interface CamelTextIndexNameProps extends CamelIndexNameProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelTextIndexNameConstructOnly = CamelIndexNameConstructOnly;

export interface CamelVTrashFolderProps extends CamelVeeFolderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelVTrashFolderConstructOnly = CamelVeeFolderConstructOnly;

/** A virtual folder representing a saved search. */
export interface CamelVeeFolderProps extends CamelFolderProps {
    /**
     * Automatically update on change in source folders
     * @default TRUE
     */
    'auto-update'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelVeeFolderConstructOnly = CamelFolderConstructOnly;

export interface CamelVeeMessageInfoProps extends CamelMessageInfoProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelVeeMessageInfoConstructOnly = CamelMessageInfoConstructOnly;

/** A store that manages a collection of virtual folders. */
export interface CamelVeeStoreProps extends CamelStoreProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelVeeStoreConstructOnly = CamelStoreConstructOnly | GInitableConstructOnly;

export interface CamelVeeSummaryProps extends CamelFolderSummaryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type CamelVeeSummaryConstructOnly = CamelFolderSummaryConstructOnly;

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {

}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's own type.
 *
 * `PROP_ENUMS` one case wider, and separate on purpose: that table promises the GType it names
 * has NUMBERS, and this one promises only that the GType is the property's. A host inferring a
 * type from a property — the middle of an uncast lookup chain, an uncast closure's return type —
 * reads this one; a host resolving a nick to a number reads that one.
 *
 * Absent means no GType can be stated, not that the property is scalar: `gchararray` is carried
 * like any other, so absence is readable as "unknown".
 */
export const PROP_TYPES: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
