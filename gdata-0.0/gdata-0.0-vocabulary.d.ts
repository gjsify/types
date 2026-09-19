/**
 * The GIR-derived widget VOCABULARY for GData-0.0.
 *
 * GENERATED — do not edit. Provenance: GData-0.0 — library 0.19.0
 *
 * 77 instantiable GTypes (of which 0 concrete widgets), 85 declarations, 9 enum nick unions, 0 slot candidates.
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

import type GData from './gdata-0.0.js';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type Goa from '@girs/goa-1.0';
import type { GInputStreamConstructOnly, GInputStreamProps, GOutputStreamConstructOnly, GOutputStreamProps, GSeekableConstructOnly, GSeekableProps } from '@girs/gio-2.0/vocabulary';
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

export type GDataBatchOperationTypeNick = 'query' | 'insertion' | 'update' | 'deletion';
export type GDataMediaExpressionNick = 'sample' | 'full' | 'nonstop';
export type GDataMediaMediumNick = 'unknown' | 'image' | 'audio' | 'video' | 'document' | 'executable';
export type GDataOperationTypeNick = 'query' | 'insertion' | 'update' | 'deletion' | 'download' | 'upload' | 'authentication' | 'batch';
export type GDataPicasaWebVisibilityNick = 'public' | 'private';
export type GDataYouTubeAgeNick = 'all-time' | 'today' | 'this-week' | 'this-month';
export type GDataYouTubePermissionNick = 'allowed' | 'denied' | 'moderated';
export type GDataYouTubeSafeSearchNick = 'none' | 'moderate' | 'strict';
export type GDataYouTubeStandardFeedTypeNick = 'feed';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** All the fields in the #GDataAPPCategories structure are private and should never be accessed directly. */
export interface GDataAPPCategoriesProps extends GDataParsableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataAPPCategoriesConstructOnly = GDataParsableConstructOnly;

/** All the fields in the #GDataAccessHandler structure are private and should never be accessed directly. */
export interface GDataAccessHandlerProps extends GDataEntryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataAccessHandlerConstructOnly = GDataEntryConstructOnly;

/** All the fields in the #GDataAccessRule structure are private and should never be accessed directly. */
export interface GDataAccessRuleProps extends GDataEntryProps {
    /**
     * The role of the person concerned by this ACL.
     * @since 0.3.0
     * @default none
     */
    role?: string;
    /**
     * Specifies to whom this access rule applies.
     * @since 0.3.0
     * @default default
     */
    'scope-type'?: string;
    /**
     * A value representing the user who is represented by the access rule, such as an e-mail address for users, or a domain name for domains.
     * @since 0.3.0
     * @default NULL
     */
    'scope-value'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataAccessRuleConstructOnly = GDataEntryConstructOnly;

/** All the fields in the #GDataAuthor structure are private and should never be accessed directly. */
export interface GDataAuthorProps extends GDataParsableProps, GDataComparableProps {
    /**
     * An e-mail address associated with the person.
     * @since 0.4.0
     * @default NULL
     */
    'email-address'?: string;
    /**
     * A human-readable name for the person.
     * @since 0.4.0
     * @default NULL
     */
    name?: string;
    /**
     * An IRI associated with the person.
     * @since 0.4.0
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataAuthorConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataAuthorizationDomain structure are private and should never be accessed directly. */
export interface GDataAuthorizationDomainProps extends GObjectProps {
    /**
     * A URI detailing the scope of the authorization domain, as enumerated in the <ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#AuthScopes">online documentation</ulink>.
     * @since 0.9.0
     * @default NULL
     */
    scope?: string;
    /**
     * The name of the service which contains the authorization domain, as enumerated in the <ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#clientlogin">online documentation</u…
     * @since 0.9.0
     * @default NULL
     */
    'service-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataAuthorizationDomainConstructOnly = GObjectConstructOnly | 'scope' | 'service-name';

/** All the fields in the #GDataAuthorizer structure are private and should never be accessed directly. */
export interface GDataAuthorizerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataAuthorizerConstructOnly = GObjectConstructOnly;

/** All the fields in the #GDataBatchOperation structure are private and should never be accessed directly. */
export interface GDataBatchOperationProps extends GObjectProps {
    /**
     * The authorization domain for the batch operation, against which the #GDataService:authorizer for the #GDataBatchOperation:service should be authorized.
     * @since 0.9.0
     */
    'authorization-domain'?: GData.AuthorizationDomain | null;
    /**
     * The feed URI that this batch operation will be sent to.
     * @since 0.7.0
     * @default NULL
     */
    'feed-uri'?: string;
    /**
     * The service this batch operation is attached to.
     * @since 0.7.0
     */
    service?: GData.Service;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataBatchOperationConstructOnly = GObjectConstructOnly | 'authorization-domain' | 'feed-uri' | 'service';

/** All the fields in the #GDataBatchable structure are private and should never be accessed directly. */
export interface GDataBatchableProps extends GDataServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataBatchableConstructOnly = GDataServiceConstructOnly;

/** All the fields in the #GDataCalendarAccessRule structure are private and should never be accessed directly. */
export interface GDataCalendarAccessRuleProps extends GDataAccessRuleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataCalendarAccessRuleConstructOnly = GDataAccessRuleConstructOnly;

/** All the fields in the #GDataCalendarCalendar structure are private and should never be accessed directly. */
export interface GDataCalendarCalendarProps extends GDataEntryProps, GDataAccessHandlerProps {
    /** The background color used to highlight the calendar in the user’s browser. */
    color?: GData.Color;
    /**
     * Indicates whether the calendar is visible.
     * @since 0.2.0
     * @default FALSE
     */
    'is-hidden'?: boolean;
    /**
     * Indicates whether the calendar is selected.
     * @since 0.2.0
     * @default FALSE
     */
    'is-selected'?: boolean;
    /**
     * The timezone in which the calendar's times are given.
     * @default NULL
     */
    timezone?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataCalendarCalendarConstructOnly = GDataEntryConstructOnly | GDataAccessHandlerConstructOnly;

/** All the fields in the #GDataCalendarEvent structure are private and should never be accessed directly. */
export interface GDataCalendarEventProps extends GDataEntryProps {
    /**
     * Indicates whether anyone can invite themselves to the event, by adding themselves to the attendee list.
     * @default FALSE
     */
    'anyone-can-add-self'?: boolean;
    /**
     * Indicates whether attendees may invite others to the event.
     * @default FALSE
     */
    'guests-can-invite-others'?: boolean;
    /**
     * Indicates whether attendees may modify the original event, so that changes are visible to organizers and other attendees.
     * @default FALSE
     */
    'guests-can-modify'?: boolean;
    /**
     * Indicates whether attendees can see other people invited to the event.
     * @default FALSE
     */
    'guests-can-see-guests'?: boolean;
    /**
     * Represents the dates and times when a recurring event takes place.
     * @since 0.3.0
     * @default NULL
     */
    recurrence?: string;
    /**
     * The revision sequence number of the event as defined in Section 4.8.7.4 of <ulink type="http" url="http://www.ietf.org/rfc/rfc2445.txt">RFC 2445</ulink>.
     * @default 0
     */
    sequence?: number;
    /**
     * The scheduling status of the event.
     * @since 0.2.0
     * @default NULL
     */
    status?: string;
    /**
     * How the event is marked as consuming time on a calendar.
     * @default NULL
     */
    transparency?: string;
    /**
     * The globally unique identifier (UID) of the event as defined in Section 4.8.4.7 of <ulink type="http" url="http://www.ietf.org/rfc/rfc2445.txt">RFC 2445</ulink>.
     * @default NULL
     */
    uid?: string;
    /**
     * The event's visibility to calendar users.
     * @default NULL
     */
    visibility?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataCalendarEventConstructOnly = GDataEntryConstructOnly;

/** All the fields in the #GDataCalendarFeed structure are private and should never be accessed directly. */
export interface GDataCalendarFeedProps extends GDataFeedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataCalendarFeedConstructOnly = GDataFeedConstructOnly;

/** All the fields in the #GDataCalendarQuery structure are private and should never be accessed directly. */
export interface GDataCalendarQueryProps extends GDataQueryProps {
    /**
     * A shortcut to request all events scheduled for the future.
     * @default FALSE
     */
    'future-events'?: boolean;
    /**
     * Specifies the maximum number of attendees to list for an event.
     * @since 0.9.1
     * @default 0
     */
    'max-attendees'?: number;
    /**
     * Specifies order of entries in a feed.
     * @default NULL
     */
    'order-by'?: string;
    /**
     * Whether to include deleted/cancelled events in the query feed.
     * @since 0.9.1
     * @default FALSE
     */
    'show-deleted'?: boolean;
    /**
     * Indicates whether recurring events should be expanded or represented as a single event.
     * @default FALSE
     */
    'single-events'?: boolean;
    /**
     * Together with #GDataCalendarQuery:start-min, creates a timespan such that only events within the timespan are returned #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max …
     * @default -1
     */
    'start-max'?: bigint | number;
    /**
     * Together with #GDataCalendarQuery:start-max, creates a timespan such that only events within the timespan are returned.
     * @default -1
     */
    'start-min'?: bigint | number;
    /**
     * The current timezone.
     * @since 0.2.0
     * @default NULL
     */
    timezone?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataCalendarQueryConstructOnly = GDataQueryConstructOnly;

/** All the fields in the #GDataCalendarService structure are private and should never be accessed directly. */
export interface GDataCalendarServiceProps extends GDataServiceProps, GDataBatchableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataCalendarServiceConstructOnly = GDataServiceConstructOnly | GDataBatchableConstructOnly;

/** All the fields in the #GDataCategory structure are private and should never be accessed directly. */
export interface GDataCategoryProps extends GDataParsableProps, GDataComparableProps {
    /**
     * A human-readable label for display in end-user applications.
     * @since 0.4.0
     * @default NULL
     */
    label?: string;
    /**
     * An IRI that identifies a categorization scheme.
     * @since 0.4.0
     * @default NULL
     */
    scheme?: string;
    /**
     * Identifies the category to which the entry or feed belongs.
     * @since 0.4.0
     * @default NULL
     */
    term?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataCategoryConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataComment structure are private and should never be accessed directly. */
export interface GDataCommentProps extends GDataEntryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataCommentConstructOnly = GDataEntryConstructOnly;

/** All the fields in the #GDataCommentable structure are private and should never be accessed directly */
export interface GDataCommentableProps extends GDataEntryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataCommentableConstructOnly = GDataEntryConstructOnly;

/** All the fields in the #GDataComparable structure are private and should never be accessed directly. */
export interface GDataComparableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataComparableConstructOnly = GObjectConstructOnly;

/** All the fields in the #GDataDocumentsAccessRule structure are private and should never be accessed directly. */
export interface GDataDocumentsAccessRuleProps extends GDataAccessRuleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsAccessRuleConstructOnly = GDataAccessRuleConstructOnly;

/** All the fields in the #GDataDocumentsDocument structure are private and should never be accessed directly. */
export interface GDataDocumentsDocumentProps extends GDataDocumentsEntryProps, GDataAccessHandlerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsDocumentConstructOnly = GDataDocumentsEntryConstructOnly | GDataAccessHandlerConstructOnly;

/** All the fields in the #GDataDocumentsDrawing structure are private and should never be accessed directly. */
export interface GDataDocumentsDrawingProps extends GDataDocumentsDocumentProps, GDataAccessHandlerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsDrawingConstructOnly = GDataDocumentsDocumentConstructOnly | GDataAccessHandlerConstructOnly;

export interface GDataDocumentsDriveProps extends GDataEntryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsDriveConstructOnly = GDataEntryConstructOnly;

export interface GDataDocumentsDriveQueryProps extends GDataQueryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsDriveQueryConstructOnly = GDataQueryConstructOnly;

/** All the fields in the #GDataDocumentsEntry structure are private and should never be accessed directly. */
export interface GDataDocumentsEntryProps extends GDataEntryProps, GDataAccessHandlerProps {
    /**
     * Indicates whether the document entry has been deleted (moved to the trash).
     * @since 0.5.0
     * @default FALSE
     */
    'is-deleted'?: boolean;
    /**
     * Indicates whether the document entry writers can invite others to edit the document.
     * @since 0.4.0
     * @default FALSE
     */
    'writers-can-invite'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsEntryConstructOnly = GDataEntryConstructOnly | GDataAccessHandlerConstructOnly;

/** All the fields in the #GDataDocumentsFeed structure are private and should never be accessed directly. */
export interface GDataDocumentsFeedProps extends GDataFeedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsFeedConstructOnly = GDataFeedConstructOnly;

/** All the fields in the #GDataDocumentsFolder structure are private and should never be accessed directly. */
export interface GDataDocumentsFolderProps extends GDataDocumentsEntryProps, GDataAccessHandlerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsFolderConstructOnly = GDataDocumentsEntryConstructOnly | GDataAccessHandlerConstructOnly;

/** All the fields in the #GDataDocumentsMetadata structure are private and should never be accessed directly. */
export interface GDataDocumentsMetadataProps extends GDataParsableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsMetadataConstructOnly = GDataParsableConstructOnly;

/** All the fields in the #GDataDocumentsPdf structure are private and should never be accessed directly. */
export interface GDataDocumentsPdfProps extends GDataDocumentsDocumentProps, GDataAccessHandlerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsPdfConstructOnly = GDataDocumentsDocumentConstructOnly | GDataAccessHandlerConstructOnly;

/** All the fields in the #GDataDocumentsPresentation structure are private and should never be accessed directly. */
export interface GDataDocumentsPresentationProps extends GDataDocumentsDocumentProps, GDataAccessHandlerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsPresentationConstructOnly = GDataDocumentsDocumentConstructOnly | GDataAccessHandlerConstructOnly;

/** All the fields in the #GDataDocumentsProperty structure are private and should never be accessed directly. */
export interface GDataDocumentsPropertyProps extends GDataParsableProps, GDataComparableProps {
    /**
     * ETag of the property.
     * @since 0.17.11
     * @default NULL
     */
    etag?: string;
    /**
     * The key of this property.
     * @since 0.17.11
     * @default NULL
     */
    key?: string;
    /**
     * The value of this property.
     * @since 0.17.11
     * @default NULL
     */
    value?: string | null;
    /**
     * The visibility status of this property.
     * @since 0.17.11
     * @default NULL
     */
    visibility?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsPropertyConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly | 'etag';

/** All the fields in the #GDataDocumentsQuery structure are private and should never be accessed directly. */
export interface GDataDocumentsQueryProps extends GDataQueryProps {
    /**
     * Specifies whether the query should search for an exact title match for the #GDataDocumentsQuery:title parameter.
     * @since 0.4.0
     * @default FALSE
     */
    'exact-title'?: boolean;
    /**
     * Specifies the ID of the folder in which to search.
     * @since 0.4.0
     * @default NULL
     */
    'folder-id'?: string;
    /**
     * A shortcut to request all documents that have been deleted.
     * @since 0.4.0
     * @default FALSE
     */
    'show-deleted'?: boolean;
    /**
     * Specifies if the request also returns folders.
     * @since 0.4.0
     * @default FALSE
     */
    'show-folders'?: boolean;
    /**
     * A title (or title fragment) to be searched for.
     * @since 0.4.0
     * @default NULL
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsQueryConstructOnly = GDataQueryConstructOnly;

/** All the fields in the #GDataDocumentsService structure are private and should never be accessed directly. */
export interface GDataDocumentsServiceProps extends GDataServiceProps, GDataBatchableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsServiceConstructOnly = GDataServiceConstructOnly | GDataBatchableConstructOnly;

/** All the fields in the #GDataDocumentsSpreadsheet structure are private and should never be accessed directly. */
export interface GDataDocumentsSpreadsheetProps extends GDataDocumentsDocumentProps, GDataAccessHandlerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsSpreadsheetConstructOnly = GDataDocumentsDocumentConstructOnly | GDataAccessHandlerConstructOnly;

/** All the fields in the #GDataDocumentsText structure are private and should never be accessed directly. */
export interface GDataDocumentsTextProps extends GDataDocumentsDocumentProps, GDataAccessHandlerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsTextConstructOnly = GDataDocumentsDocumentConstructOnly | GDataAccessHandlerConstructOnly;

/** All the fields in the #GDataDocumentsUploadQuery structure are private and should never be accessed directly. */
export interface GDataDocumentsUploadQueryProps extends GObjectProps {
    /**
     * %TRUE to automatically convert the uploaded document into a standard format (such as a text document, spreadsheet, presentation, etc.).
     * @since 0.13.0
     * @default TRUE
     */
    convert?: boolean;
    /**
     * Folder to upload the document into.
     * @since 0.13.0
     */
    folder?: GData.DocumentsFolder | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDocumentsUploadQueryConstructOnly = GObjectConstructOnly;

/** All the fields in the #GDataDownloadStream structure are private and should never be accessed directly. */
export interface GDataDownloadStreamProps extends GInputStreamProps, GSeekableProps {
    /**
     * The authorization domain for the download, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be authorized.
     * @since 0.9.0
     */
    'authorization-domain'?: GData.AuthorizationDomain | null;
    /**
     * An optional cancellable used to cancel the entire download operation.
     * @since 0.8.0
     */
    cancellable?: Gio.Cancellable;
    /**
     * The URI of the file to download.
     * @since 0.5.0
     * @default NULL
     */
    'download-uri'?: string;
    /**
     * The service which is used to authorize the download, and to which the download relates.
     * @since 0.5.0
     */
    service?: GData.Service;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataDownloadStreamConstructOnly = GInputStreamConstructOnly | GSeekableConstructOnly | 'authorization-domain' | 'cancellable' | 'download-uri' | 'service';

/** All the fields in the #GDataEntry structure are private and should never be accessed directly. */
export interface GDataEntryProps extends GDataParsableProps {
    /**
     * The content of the entry.
     * @default NULL
     */
    content?: string;
    /**
     * A URI pointing to the location of the content of the entry.
     * @since 0.7.0
     * @default NULL
     */
    'content-uri'?: string;
    /**
     * An identifier for a particular version of the entry.
     * @since 0.2.0
     * @default NULL
     */
    etag?: string | null;
    /**
     * A permanent, universally unique identifier for the entry, in IRI form.
     * @default NULL
     */
    id?: string | null;
    /**
     * The ownership rights pertaining to the entry.
     * @since 0.5.0
     * @default NULL
     */
    rights?: string;
    /**
     * A short summary, abstract, or excerpt of the entry.
     * @since 0.4.0
     * @default NULL
     */
    summary?: string;
    /**
     * A human-readable title for the entry.
     * @default NULL
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataEntryConstructOnly = GDataParsableConstructOnly | 'etag' | 'id';

/** All the fields in the #GDataFeed structure are private and should never be accessed directly. */
export interface GDataFeedProps extends GDataParsableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataFeedConstructOnly = GDataParsableConstructOnly;

/** All the fields in the #GDataGContactCalendar structure are private and should never be accessed directly. */
export interface GDataGContactCalendarProps extends GDataParsableProps, GDataComparableProps {
    /**
     * Indicates which calendar out of a group is primary.
     * @since 0.7.0
     * @default FALSE
     */
    'is-primary'?: boolean;
    /**
     * A free-form string that identifies the type of calendar.
     * @since 0.7.0
     * @default NULL
     */
    label?: string;
    /**
     * A programmatic value that identifies the type of calendar.
     * @since 0.7.0
     * @default NULL
     */
    'relation-type'?: string;
    /**
     * The URI of the calendar.
     * @since 0.7.0
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGContactCalendarConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGContactEvent structure are private and should never be accessed directly. */
export interface GDataGContactEventProps extends GDataParsableProps {
    /**
     * The date of the event.
     * @since 0.7.0
     */
    date?: GLib.Date;
    /**
     * A simple string value used to name this event.
     * @since 0.7.0
     * @default NULL
     */
    label?: string;
    /**
     * A programmatic value that identifies the type of event.
     * @since 0.7.0
     * @default NULL
     */
    'relation-type'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGContactEventConstructOnly = GDataParsableConstructOnly;

/** All the fields in the #GDataGContactExternalID structure are private and should never be accessed directly. */
export interface GDataGContactExternalIDProps extends GDataParsableProps, GDataComparableProps {
    /**
     * A free-form string that identifies the type of external ID.
     * @since 0.7.0
     * @default NULL
     */
    label?: string;
    /**
     * A programmatic value that identifies the type of external ID.
     * @since 0.7.0
     * @default NULL
     */
    'relation-type'?: string;
    /**
     * The value of the external ID.
     * @since 0.7.0
     * @default NULL
     */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGContactExternalIDConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGContactJot structure are private and should never be accessed directly. */
export interface GDataGContactJotProps extends GDataParsableProps {
    /**
     * The content of the jot.
     * @since 0.7.0
     * @default NULL
     */
    content?: string;
    /**
     * A programmatic value that identifies the type of jot.
     * @since 0.7.0
     * @default NULL
     */
    'relation-type'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGContactJotConstructOnly = GDataParsableConstructOnly;

/** All the fields in the #GDataGContactLanguage structure are private and should never be accessed directly. */
export interface GDataGContactLanguageProps extends GDataParsableProps, GDataComparableProps {
    /**
     * A code identifying the language, conforming to the IETF BCP 47 specification.
     * @since 0.7.0
     * @default NULL
     */
    code?: string;
    /**
     * A free-form string that identifies the language.
     * @since 0.7.0
     * @default NULL
     */
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGContactLanguageConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGContactRelation structure are private and should never be accessed directly. */
export interface GDataGContactRelationProps extends GDataParsableProps {
    /**
     * A free-form string that identifies the type of relation.
     * @since 0.7.0
     * @default NULL
     */
    label?: string;
    /**
     * The name of the relation.
     * @since 0.7.0
     * @default NULL
     */
    name?: string;
    /**
     * A programmatic value that identifies the type of relation.
     * @since 0.7.0
     * @default NULL
     */
    'relation-type'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGContactRelationConstructOnly = GDataParsableConstructOnly;

/** All the fields in the #GDataGContactWebsite structure are private and should never be accessed directly. */
export interface GDataGContactWebsiteProps extends GDataParsableProps, GDataComparableProps {
    /**
     * Indicates which website out of a group is primary.
     * @since 0.7.0
     * @default FALSE
     */
    'is-primary'?: boolean;
    /**
     * A simple string value used to name this website.
     * @since 0.7.0
     * @default NULL
     */
    label?: string;
    /**
     * A programmatic value that identifies the type of website.
     * @since 0.7.0
     * @default NULL
     */
    'relation-type'?: string;
    /**
     * The URI of the website.
     * @since 0.7.0
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGContactWebsiteConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGDEmailAddress structure are private and should never be accessed directly. */
export interface GDataGDEmailAddressProps extends GDataParsableProps, GDataComparableProps {
    /**
     * The e-mail address itself.
     * @since 0.4.0
     * @default NULL
     */
    address?: string;
    /**
     * A display name of the entity (e.g.
     * @since 0.6.0
     * @default NULL
     */
    'display-name'?: string;
    /**
     * Indicates which e-mail address out of a group is primary.
     * @since 0.4.0
     * @default FALSE
     */
    'is-primary'?: boolean;
    /**
     * A simple string value used to name this e-mail address.
     * @since 0.4.0
     * @default NULL
     */
    label?: string;
    /**
     * A programmatic value that identifies the type of e-mail address.
     * @since 0.4.0
     * @default NULL
     */
    'relation-type'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGDEmailAddressConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGDIMAddress structure are private and should never be accessed directly. */
export interface GDataGDIMAddressProps extends GDataParsableProps, GDataComparableProps {
    /**
     * The IM address itself.
     * @since 0.4.0
     * @default NULL
     */
    address?: string;
    /**
     * Indicates which IM address out of a group is primary.
     * @since 0.4.0
     * @default FALSE
     */
    'is-primary'?: boolean;
    /**
     * A simple string value used to name this IM address.
     * @since 0.4.0
     * @default NULL
     */
    label?: string;
    /**
     * Identifies the IM network.
     * @since 0.4.0
     * @default NULL
     */
    protocol?: string;
    /**
     * A programmatic value that identifies the type of IM address.
     * @since 0.4.0
     * @default NULL
     */
    'relation-type'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGDIMAddressConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGDName structure are private and should never be accessed directly. */
export interface GDataGDNameProps extends GDataParsableProps, GDataComparableProps {
    /**
     * An additional name for the person (e.g.
     * @since 0.5.0
     * @default NULL
     */
    'additional-name'?: string;
    /**
     * The person's family name.
     * @since 0.5.0
     * @default NULL
     */
    'family-name'?: string;
    /**
     * An unstructured representation of the person's full name.
     * @since 0.5.0
     * @default NULL
     */
    'full-name'?: string;
    /**
     * The person's given name.
     * @since 0.5.0
     * @default NULL
     */
    'given-name'?: string;
    /**
     * An honorific prefix (e.g.
     * @since 0.5.0
     * @default NULL
     */
    prefix?: string;
    /**
     * An honorific suffix (e.g.
     * @since 0.5.0
     * @default NULL
     */
    suffix?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGDNameConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGDOrganization structure are private and should never be accessed directly. */
export interface GDataGDOrganizationProps extends GDataParsableProps, GDataComparableProps {
    /**
     * Specifies a department within the organization.
     * @since 0.5.0
     * @default NULL
     */
    department?: string;
    /**
     * Indicates which organization out of a group is primary.
     * @since 0.4.0
     * @default FALSE
     */
    'is-primary'?: boolean;
    /**
     * Description of a job within the organization.
     * @since 0.5.0
     * @default NULL
     */
    'job-description'?: string;
    /**
     * A simple string value used to name this organization.
     * @since 0.4.0
     * @default NULL
     */
    label?: string;
    /**
     * A place associated with the organization, e.g.
     * @since 0.6.0
     */
    location?: GData.GDWhere;
    /**
     * The name of the organization.
     * @since 0.4.0
     * @default NULL
     */
    name?: string;
    /**
     * A programmatic value that identifies the type of organization.
     * @since 0.4.0
     * @default NULL
     */
    'relation-type'?: string;
    /**
     * Stock symbol of the organization.
     * @since 0.5.0
     * @default NULL
     */
    symbol?: string;
    /**
     * The title of a person within the organization.
     * @since 0.4.0
     * @default NULL
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGDOrganizationConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGDPhoneNumber structure are private and should never be accessed directly. */
export interface GDataGDPhoneNumberProps extends GDataParsableProps, GDataComparableProps {
    /**
     * Indicates which phone number out of a group is primary.
     * @since 0.4.0
     * @default FALSE
     */
    'is-primary'?: boolean;
    /**
     * A simple string value used to name this phone number.
     * @since 0.4.0
     * @default NULL
     */
    label?: string;
    /**
     * Human-readable phone number; may be in any telephone number format.
     * @since 0.4.0
     * @default NULL
     */
    number?: string;
    /**
     * A programmatic value that identifies the type of phone number.
     * @since 0.4.0
     * @default NULL
     */
    'relation-type'?: string;
    /**
     * An optional "tel URI" used to represent the number in a formal way.
     * @since 0.4.0
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGDPhoneNumberConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGDPostalAddress structure are private and should never be accessed directly. */
export interface GDataGDPostalAddressProps extends GDataParsableProps, GDataComparableProps {
    /**
     * The postal address itself, formatted and unstructured.
     * @since 0.4.0
     * @default NULL
     */
    address?: string;
    /**
     * The agent who actually receives the mail.
     * @since 0.5.0
     * @default NULL
     */
    agent?: string;
    /**
     * Can be city, village, town, borough, etc.
     * @since 0.5.0
     * @default NULL
     */
    city?: string;
    /**
     * Used in places where houses or buildings have names (and not necessarily numbers).
     * @since 0.5.0
     * @default NULL
     */
    'house-name'?: string;
    /**
     * Indicates which postal address out of a group is primary.
     * @since 0.4.0
     * @default FALSE
     */
    'is-primary'?: boolean;
    /**
     * A simple string value used to name this postal address.
     * @since 0.4.0
     * @default NULL
     */
    label?: string;
    /**
     * Classes of mail accepted at this address.
     * @since 0.5.0
     * @default http://schemas.google.com/g/2005#both
     */
    'mail-class'?: string;
    /**
     * This is used to disambiguate a street address when a city contains more than one street with the same name, or to specify a small place whose mail is routed through a larger postal town.
     * @since 0.5.0
     * @default NULL
     */
    neighborhood?: string;
    /**
     * Covers actual P.O.
     * @since 0.5.0
     * @default NULL
     */
    'po-box'?: string;
    /**
     * Postal code.
     * @since 0.5.0
     * @default NULL
     */
    postcode?: string;
    /**
     * A state, province, county (in Ireland), Land (in Germany), departement (in France), etc.
     * @since 0.5.0
     * @default NULL
     */
    region?: string;
    /**
     * A programmatic value that identifies the type of postal address.
     * @since 0.4.0
     * @default http://schemas.google.com/g/2005#work
     */
    'relation-type'?: string;
    /**
     * Can be street, avenue, road, etc.
     * @since 0.5.0
     * @default NULL
     */
    street?: string;
    /**
     * Handles administrative districts such as U.S.
     * @since 0.5.0
     * @default NULL
     */
    subregion?: string;
    /**
     * The context in which this address can be used.
     * @since 0.5.0
     * @default http://schemas.google.com/g/2005#general
     */
    usage?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGDPostalAddressConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGDReminder structure are private and should never be accessed directly. */
export interface GDataGDReminderProps extends GDataParsableProps, GDataComparableProps {
    /**
     * Absolute time at which the reminder should be issued.
     * @since 0.4.0
     * @default -1
     */
    'absolute-time'?: bigint | number;
    /**
     * The notification method the reminder should use.
     * @since 0.4.0
     * @default NULL
     */
    method?: string;
    /**
     * Time at which the reminder should be issued, in minutes relative to the start time of the corresponding event.
     * @since 0.4.0
     * @default -1
     */
    'relative-time'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGDReminderConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGDWhen structure are private and should never be accessed directly. */
export interface GDataGDWhenProps extends GDataParsableProps, GDataComparableProps {
    /**
     * The title of a person within the when.
     * @since 0.4.0
     * @default -1
     */
    'end-time'?: bigint | number;
    /**
     * A programmatic value that identifies the type of when.
     * @since 0.4.0
     * @default FALSE
     */
    'is-date'?: boolean;
    /**
     * The name of the when.
     * @since 0.4.0
     * @default 0
     */
    'start-time'?: bigint | number;
    /**
     * A simple string value used to name this when.
     * @since 0.4.0
     * @default NULL
     */
    'value-string'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGDWhenConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGDWhere structure are private and should never be accessed directly. */
export interface GDataGDWhereProps extends GDataParsableProps, GDataComparableProps {
    /**
     * Specifies a user-readable label to distinguish this location from others.
     * @since 0.4.0
     * @default NULL
     */
    label?: string;
    /**
     * Specifies the relationship between the containing entity and the contained location.
     * @since 0.4.0
     * @default NULL
     */
    'relation-type'?: string;
    /**
     * A simple string representation of this location.
     * @since 0.4.0
     * @default NULL
     */
    'value-string'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGDWhereConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGDWho structure are private and should never be accessed directly. */
export interface GDataGDWhoProps extends GDataParsableProps, GDataComparableProps {
    /**
     * The e-mail address of the person represented by the #GDataGDWho.
     * @since 0.4.0
     * @default NULL
     */
    'email-address'?: string;
    /**
     * Specifies the relationship between the containing entity and the contained person.
     * @since 0.4.0
     * @default NULL
     */
    'relation-type'?: string;
    /**
     * A simple string representation of this person.
     * @since 0.4.0
     * @default NULL
     */
    'value-string'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGDWhoConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGenerator structure are private and should never be accessed directly. */
export interface GDataGeneratorProps extends GDataParsableProps, GDataComparableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGeneratorConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataGoaAuthorizer structure are private and should never be accessed directly. */
export interface GDataGoaAuthorizerProps extends GObjectProps, GDataAuthorizerProps {
    /**
     * The GOA account providing authentication.
     * @since 0.13.1
     */
    'goa-object'?: Goa.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataGoaAuthorizerConstructOnly = GObjectConstructOnly | GDataAuthorizerConstructOnly | 'goa-object';

/** All the fields in the #GDataLink structure are private and should never be accessed directly. */
export interface GDataLinkProps extends GDataParsableProps, GDataComparableProps {
    /**
     * An advisory media type: it is a hint about the type of the representation that is expected to be returned when the value of the #GDataLink:uri property is dereferenced.
     * @since 0.4.0
     * @default NULL
     */
    'content-type'?: string | null;
    /**
     * Describes the language of the resource pointed to by the #GDataLink:uri property.
     * @since 0.4.0
     * @default NULL
     */
    language?: string | null;
    /**
     * Indicates an advisory length of the linked content in octets.
     * @since 0.4.0
     * @default -1
     */
    length?: number;
    /**
     * The link relation type.
     * @since 0.4.0
     * @default http://www.iana.org/assignments/relation/alternate
     */
    'relation-type'?: string | null;
    /**
     * Conveys human-readable information about the link.
     * @since 0.4.0
     * @default NULL
     */
    title?: string;
    /**
     * The link's IRI.
     * @since 0.4.0
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataLinkConstructOnly = GDataParsableConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataMediaCategory structure are private and should never be accessed directly. */
export interface GDataMediaCategoryProps extends GDataParsableProps {
    /**
     * The category name.
     * @since 0.4.0
     * @default NULL
     */
    category?: string;
    /**
     * A human-readable label that can be displayed in end-user applications.
     * @since 0.4.0
     * @default NULL
     */
    label?: string;
    /**
     * A URI that identifies the categorization scheme.
     * @since 0.4.0
     * @default NULL
     */
    scheme?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataMediaCategoryConstructOnly = GDataParsableConstructOnly;

/** All the fields in the #GDataMediaContent structure are private and should never be accessed directly. */
export interface GDataMediaContentProps extends GDataParsableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataMediaContentConstructOnly = GDataParsableConstructOnly;

/** All the fields in the #GDataMediaCredit structure are private and should never be accessed directly. */
export interface GDataMediaCreditProps extends GDataParsableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataMediaCreditConstructOnly = GDataParsableConstructOnly;

/** All the fields in the #GDataMediaThumbnail structure are private and should never be accessed directly. */
export interface GDataMediaThumbnailProps extends GDataParsableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataMediaThumbnailConstructOnly = GDataParsableConstructOnly;

/** All the fields in the #GDataOAuth2Authorizer structure are private and should never be accessed directly. */
export interface GDataOAuth2AuthorizerProps extends GObjectProps, GDataAuthorizerProps {
    /**
     * A client ID for your application (see the <ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http">reference documentation</ulink>).
     * @since 0.17.0
     * @default NULL
     */
    'client-id'?: string;
    /**
     * Client secret provided by Google.
     * @since 0.17.0
     * @default NULL
     */
    'client-secret'?: string;
    /**
     * The locale to use for network requests, in UNIX locale format.
     * @since 0.17.0
     * @default NULL
     */
    locale?: string | null;
    /**
     * The #GProxyResolver used to determine a proxy URI.
     * @since 0.17.0
     */
    'proxy-resolver'?: Gio.ProxyResolver | null;
    /**
     * Redirect URI to send the response from the authorisation request to.
     * @since 0.17.0
     * @default NULL
     */
    'redirect-uri'?: string;
    /**
     * The server provided refresh token, which can be stored and passed in to new #GDataOAuth2Authorizer instances before calling gdata_authorizer_refresh_authorization_async() to create a new short-lived …
     * @since 0.17.2
     * @default NULL
     */
    'refresh-token'?: string;
    /**
     * A timeout, in seconds, for network operations.
     * @since 0.17.0
     * @default 0
     */
    timeout?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataOAuth2AuthorizerConstructOnly = GObjectConstructOnly | GDataAuthorizerConstructOnly | 'client-id' | 'client-secret' | 'redirect-uri';

/** All the fields in the #GDataParsable structure are private and should never be accessed directly. */
export interface GDataParsableProps extends GObjectProps {
    /**
     * Specifies whether the object was constructed by parsing XML or manually.
     * @since 0.7.0
     * @default FALSE
     */
    'constructed-from-xml'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataParsableConstructOnly = GObjectConstructOnly | 'constructed-from-xml';

/** All the fields in the #GDataPicasaWebAlbum structure are private and should never be accessed directly. */
export interface GDataPicasaWebAlbumProps extends GDataEntryProps {
    /**
     * The ID of the album.
     * @since 0.7.0
     * @default NULL
     */
    'album-id'?: string;
    /** @default FALSE */
    'is-commenting-enabled'?: boolean;
    /**
     * The location as a latitude coordinate associated with this album.
     * @since 0.5.0
     * @default 0.000000
     */
    latitude?: number;
    /**
     * The user-specified location associated with the album.
     * @since 0.4.0
     * @default NULL
     */
    location?: string;
    /**
     * The location as a longitude coordinate associated with this album.
     * @since 0.5.0
     * @default 0.000000
     */
    longitude?: number;
    /**
     * A %NULL-terminated array of tags associated with the album; all the tags associated with the individual photos in the album.
     * @since 0.4.0
     */
    tags?: string[];
    /**
     * The timestamp of when the album occurred, settable by the user.
     * @since 0.4.0
     * @default -1
     */
    timestamp?: bigint | number;
    /**
     * The visibility (or access rights) of the album.
     * @since 0.4.0
     * @default GDATA_PICASAWEB_PRIVATE
     */
    visibility?: GDataPicasaWebVisibilityNick | GData.PicasaWebVisibility;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataPicasaWebAlbumConstructOnly = GDataEntryConstructOnly | 'album-id';

/** All the fields in the #GDataPicasaWebComment structure are private and should never be accessed directly. */
export interface GDataPicasaWebCommentProps extends GDataCommentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataPicasaWebCommentConstructOnly = GDataCommentConstructOnly;

/** All the fields in the #GDataPicasaWebFeed structure are private and should never be accessed directly. */
export interface GDataPicasaWebFeedProps extends GDataFeedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataPicasaWebFeedConstructOnly = GDataFeedConstructOnly;

/** All the fields in the #GDataPicasaWebFile structure are private and should never be accessed directly. */
export interface GDataPicasaWebFileProps extends GDataEntryProps, GDataCommentableProps {
    /**
     * The ID for the file's album.
     * @since 0.4.0
     * @default NULL
     */
    'album-id'?: string;
    /**
     * The file's descriptive caption.
     * @since 0.4.0
     * @default NULL
     */
    caption?: string;
    /**
     * A checksum of the file, useful for duplicate detection.
     * @since 0.4.0
     * @default NULL
     */
    checksum?: string;
    /**
     * The ID of the file.
     * @since 0.7.0
     * @default NULL
     */
    'file-id'?: string;
    /**
     * Whether commenting is enabled for this file.
     * @since 0.4.0
     * @default TRUE
     */
    'is-commenting-enabled'?: boolean;
    /**
     * The location as a latitude coordinate associated with this file.
     * @since 0.5.0
     * @default 0.000000
     */
    latitude?: number;
    /**
     * The location as a longitude coordinate associated with this file.
     * @since 0.5.0
     * @default 0.000000
     */
    longitude?: number;
    /**
     * The rotation of the photo, in degrees.
     * @since 0.4.0
     * @default 0
     */
    rotation?: number;
    /**
     * A %NULL-terminated array of tags associated with the file.
     * @since 0.4.0
     */
    tags?: string[];
    /**
     * The time the file was purportedly taken.
     * @since 0.4.0
     * @default -1
     */
    timestamp?: bigint | number;
    /**
     * The version number of the file.
     * @since 0.4.0
     * @default NULL
     */
    version?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataPicasaWebFileConstructOnly = GDataEntryConstructOnly | GDataCommentableConstructOnly | 'file-id' | 'version';

/** All the fields in the #GDataPicasaWebQuery structure are private and should never be accessed directly. */
export interface GDataPicasaWebQueryProps extends GDataQueryProps {
    /**
     * A comma-separated list of image sizes (width in pixels) to return.
     * @since 0.4.0
     * @default NULL
     */
    'image-size'?: string;
    /**
     * A location to search for photos, e.g.
     * @since 0.4.0
     * @default NULL
     */
    location?: string;
    /**
     * A tag which returned results must contain.
     * @since 0.4.0
     * @default NULL
     */
    tag?: string;
    /**
     * A comma-separated list of thumbnail widths (in pixels) to return.
     * @since 0.4.0
     * @default NULL
     */
    'thumbnail-size'?: string;
    /**
     * Specifies which albums should be listed, in terms of their visibility (#GDataPicasaWebAlbum:visibility).
     * @since 0.4.0
     * @default 0
     */
    visibility?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataPicasaWebQueryConstructOnly = GDataQueryConstructOnly;

/** All the fields in the #GDataPicasaWebService structure are private and should never be accessed directly. */
export interface GDataPicasaWebServiceProps extends GDataServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataPicasaWebServiceConstructOnly = GDataServiceConstructOnly;

/** All the fields in the #GDataPicasaWebUser structure are private and should never be accessed directly. */
export interface GDataPicasaWebUserProps extends GDataEntryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataPicasaWebUserConstructOnly = GDataEntryConstructOnly;

/** All the fields in the #GDataQuery structure are private and should never be accessed directly. */
export interface GDataQueryProps extends GObjectProps {
    /**
     * An entry author.
     * @default NULL
     */
    author?: string;
    /**
     * A category filter.
     * @default NULL
     */
    categories?: string;
    /**
     * The ETag against which to check for updates.
     * @since 0.2.0
     * @default NULL
     */
    etag?: string;
    /**
     * Strict query parameter checking.
     * @since 0.2.0
     * @default FALSE
     */
    'is-strict'?: boolean;
    /**
     * Maximum number of results to be retrieved.
     * @default 0
     */
    'max-results'?: number;
    /**
     * Upper bound on the entry publish date, exclusive.
     * @default -1
     */
    'published-max'?: bigint | number;
    /**
     * Lower bound on the entry publish date, inclusive.
     * @default -1
     */
    'published-min'?: bigint | number;
    /**
     * A full-text query string.
     * @default NULL
     */
    q?: string;
    /**
     * The one-based index of the first result to be retrieved.
     * @default 0
     */
    'start-index'?: number;
    /**
     * Upper bound on the entry update date, exclusive.
     * @default -1
     */
    'updated-max'?: bigint | number;
    /**
     * Lower bound on the entry update date, inclusive.
     * @default -1
     */
    'updated-min'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataQueryConstructOnly = GObjectConstructOnly;

/** All the fields in the #GDataService structure are private and should never be accessed directly. */
export interface GDataServiceProps extends GObjectProps {
    /**
     * An object which implements #GDataAuthorizer.
     * @since 0.9.0
     */
    authorizer?: GData.Authorizer;
    /**
     * The locale to use for network requests, in Unix locale format.
     * @since 0.7.0
     * @default NULL
     */
    locale?: string;
    /**
     * The #GProxyResolver used to determine a proxy URI.
     * @since 0.15.0
     */
    'proxy-resolver'?: Gio.ProxyResolver | null;
    /**
     * A timeout, in seconds, for network operations.
     * @since 0.7.0
     * @default 0
     */
    timeout?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataServiceConstructOnly = GObjectConstructOnly;

/** All the fields in the #GDataTasksQuery structure are private and should never be accessed directly. */
export interface GDataTasksQueryProps extends GDataQueryProps {
    /**
     * Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by.
     * @since 0.15.0
     * @default -1
     */
    'completed-max'?: bigint | number;
    /**
     * Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by.
     * @since 0.15.0
     * @default -1
     */
    'completed-min'?: bigint | number;
    /**
     * Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by.
     * @since 0.15.0
     * @default -1
     */
    'due-max'?: bigint | number;
    /**
     * Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by.
     * @since 0.15.0
     * @default -1
     */
    'due-min'?: bigint | number;
    /**
     * Flag indicating whether completed tasks are returned in the result.
     * @since 0.15.0
     * @default FALSE
     */
    'show-completed'?: boolean;
    /**
     * Flag indicating whether deleted tasks are returned in the result.
     * @since 0.15.0
     * @default FALSE
     */
    'show-deleted'?: boolean;
    /**
     * Flag indicating whether hidden tasks are returned in the result.
     * @since 0.15.0
     * @default FALSE
     */
    'show-hidden'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataTasksQueryConstructOnly = GDataQueryConstructOnly;

/** All the fields in the #GDataTasksService structure are private and should never be accessed directly. */
export interface GDataTasksServiceProps extends GDataServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataTasksServiceConstructOnly = GDataServiceConstructOnly;

/** All the fields in the #GDataTasksTask structure are private and should never be accessed directly. */
export interface GDataTasksTaskProps extends GDataEntryProps {
    /**
     * Completion date of the task (as a RFC 3339 timestamp; seconds since the UNIX epoch).
     * @since 0.15.0
     * @default -1
     */
    completed?: bigint | number;
    /**
     * Due date of the task (as a RFC 3339 timestamp; seconds since the UNIX epoch).
     * @since 0.15.0
     * @default -1
     */
    due?: bigint | number;
    /**
     * Flag indicating whether the task has been deleted.
     * @since 0.15.0
     * @default FALSE
     */
    'is-deleted'?: boolean;
    /**
     * This is where the description of what needs to be done in the task is stored.
     * @since 0.15.0
     * @default NULL
     */
    notes?: string | null;
    /**
     * Parent task identifier.
     * @since 0.15.0
     * @default NULL
     */
    parent?: string | null;
    /**
     * String indicating the position of the task among its sibling tasks under the same parent task or at the top level.
     * @since 0.15.0
     * @default NULL
     */
    position?: string | null;
    /**
     * Status of the task.
     * @since 0.15.0
     * @default NULL
     */
    status?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataTasksTaskConstructOnly = GDataEntryConstructOnly;

/** All the fields in the #GDataTasksTasklist structure are private and should never be accessed directly. */
export interface GDataTasksTasklistProps extends GDataEntryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataTasksTasklistConstructOnly = GDataEntryConstructOnly;

/** All the fields in the #GDataUploadStream structure are private and should never be accessed directly. */
export interface GDataUploadStreamProps extends GOutputStreamProps {
    /**
     * The authorization domain for the upload, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be authorized.
     * @since 0.9.0
     */
    'authorization-domain'?: GData.AuthorizationDomain | null;
    /**
     * An optional cancellable used to cancel the entire upload operation.
     * @since 0.8.0
     */
    cancellable?: Gio.Cancellable;
    /**
     * The content length (in bytes) of the file being uploaded (i.e.
     * @since 0.13.0
     * @default -1
     */
    'content-length'?: bigint | number;
    /**
     * The content type of the file being uploaded (i.e.
     * @since 0.5.0
     * @default NULL
     */
    'content-type'?: string;
    /**
     * The entry used for metadata to upload.
     * @since 0.5.0
     */
    entry?: GData.Entry;
    /**
     * The HTTP request method to use when uploading the file.
     * @since 0.7.0
     * @default NULL
     */
    method?: string;
    /**
     * The service which is used to authorize the upload, and to which the upload relates.
     * @since 0.5.0
     */
    service?: GData.Service;
    /**
     * The slug of the file being uploaded.
     * @since 0.5.0
     * @default NULL
     */
    slug?: string;
    /**
     * The URI to upload the data and metadata to.
     * @since 0.5.0
     * @default NULL
     */
    'upload-uri'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataUploadStreamConstructOnly = GOutputStreamConstructOnly | 'authorization-domain' | 'cancellable' | 'content-length' | 'content-type' | 'entry' | 'method' | 'service' | 'slug' | 'upload-uri';

/** All the fields in the #GDataYouTubeCategory structure are private and should never be accessed directly. */
export interface GDataYouTubeCategoryProps extends GDataCategoryProps, GDataComparableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataYouTubeCategoryConstructOnly = GDataCategoryConstructOnly | GDataComparableConstructOnly;

/** All the fields in the #GDataYouTubeComment structure are private and should never be accessed directly. */
export interface GDataYouTubeCommentProps extends GDataCommentProps {
    /**
     * The URI of the parent comment to this one, or %NULL if this comment is a top-level comment.
     * @since 0.10.0
     * @default NULL
     */
    'parent-comment-uri'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataYouTubeCommentConstructOnly = GDataCommentConstructOnly;

/** All the fields in the #GDataYouTubeFeed structure are private and should never be accessed directly. */
export interface GDataYouTubeFeedProps extends GDataFeedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataYouTubeFeedConstructOnly = GDataFeedConstructOnly;

/** All the fields in the #GDataYouTubeQuery structure are private and should never be accessed directly. */
export interface GDataYouTubeQueryProps extends GDataQueryProps {
    /**
     * Restricts the search to videos uploaded within the specified time period.
     * @since 0.3.0
     * @default GDATA_YOUTUBE_AGE_ALL_TIME
     */
    age?: GDataYouTubeAgeNick | GData.YouTubeAge;
    /**
     * The latitude of a particular location of which videos should be found.
     * @since 0.3.0
     * @default 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368.000000
     */
    latitude?: number;
    /**
     * The content license which should be used to filter search results.
     * @since 0.11.0
     * @default NULL
     */
    license?: string;
    /**
     * The radius, in metres, of a circle from within which videos should be returned.
     * @since 0.3.0
     * @default 0.000000
     */
    'location-radius'?: number;
    /**
     * The longitude of a particular location of which videos should be found.
     * @since 0.3.0
     * @default 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368.000000
     */
    longitude?: number;
    /**
     * Specifies the order of entries in a feed.
     * @since 0.3.0
     * @default NULL
     */
    'order-by'?: string;
    /**
     * An ISO 3166 two-letter country code that should be used to filter videos playable only in specific countries.
     * @since 0.3.0
     * @default NULL
     */
    restriction?: string;
    /**
     * Whether the search results should include restricted content as well as standard content.
     * @since 0.3.0
     * @default GDATA_YOUTUBE_SAFE_SEARCH_MODERATE
     */
    'safe-search'?: GDataYouTubeSafeSearchNick | GData.YouTubeSafeSearch;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataYouTubeQueryConstructOnly = GDataQueryConstructOnly;

/** All the fields in the #GDataYouTubeService structure are private and should never be accessed directly. */
export interface GDataYouTubeServiceProps extends GDataServiceProps, GDataBatchableProps {
    /**
     * The developer key your application has registered with the YouTube API.
     * @default NULL
     */
    'developer-key'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataYouTubeServiceConstructOnly = GDataServiceConstructOnly | GDataBatchableConstructOnly | 'developer-key';

/** All the fields in the #GDataYouTubeState structure are private and should never be accessed directly. */
export interface GDataYouTubeStateProps extends GDataParsableProps {
    /**
     * A URI for a YouTube Help Center page that may help the developer or the video owner to diagnose the reason that an upload failed or was rejected.
     * @since 0.4.0
     * @default NULL
     */
    'help-uri'?: string;
    /**
     * A human-readable description of why the video failed to upload.
     * @since 0.4.0
     * @default NULL
     */
    message?: string;
    /**
     * The name of the status of the unpublished video.
     * @since 0.4.0
     * @default NULL
     */
    name?: string;
    /**
     * The reason code explaining why the video failed to upload.
     * @since 0.4.0
     * @default NULL
     */
    'reason-code'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataYouTubeStateConstructOnly = GDataParsableConstructOnly | 'help-uri' | 'message' | 'name' | 'reason-code';

/** All the fields in the #GDataYouTubeVideo structure are private and should never be accessed directly. */
export interface GDataYouTubeVideoProps extends GDataEntryProps, GDataCommentableProps {
    /**
     * The aspect ratio of the video.
     * @since 0.4.0
     * @default NULL
     */
    'aspect-ratio'?: string;
    /** Specifies a genre or developer tag that describes the video. */
    category?: GData.MediaCategory;
    /**
     * A summary or description of the video.
     * @default NULL
     */
    description?: string;
    /** @default FALSE */
    'is-private'?: boolean;
    /** A %NULL-terminated array of words associated with the video. */
    keywords?: string[];
    /**
     * The location as a latitude coordinate associated with this video.
     * @since 0.8.0
     * @default 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368.000000
     */
    latitude?: number;
    /**
     * Descriptive text about the location where the video was taken.
     * @default NULL
     */
    location?: string;
    /**
     * The location as a longitude coordinate associated with this video.
     * @since 0.8.0
     * @default 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368.000000
     */
    longitude?: number;
    /**
     * Specifies the time the video was originally recorded.
     * @since 0.3.0
     * @default -1
     */
    recorded?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataYouTubeVideoConstructOnly = GDataEntryConstructOnly | GDataCommentableConstructOnly;

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
