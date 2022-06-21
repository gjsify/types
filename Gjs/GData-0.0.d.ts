// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GData-0.0
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Json from './Json-1.0';
import type Goa from './Goa-1.0';

export namespace GData {

/**
 * Indicates which type of batch operation caused the current #GDataBatchOperationCallback to be called.
 */
enum BatchOperationType {
    /**
     * a query operation
     */
    QUERY,
    /**
     * an insertion operation
     */
    INSERTION,
    /**
     * an update operation
     */
    UPDATE,
    /**
     * a deletion operation
     */
    DELETION,
}
/**
 * Error codes for #GDataDocumentsService operations.
 */
enum DocumentsServiceError {
    /**
     * the content type of a provided file was invalid
     */
    TYPE,
}
/**
 * An enum representing the possible values of #GDataMediaContent:expression.
 */
enum MediaExpression {
    /**
     * the media is a sample of a larger video
     */
    SAMPLE,
    /**
     * the media is the full version
     */
    FULL,
    /**
     * the media is a continuous stream
     */
    NONSTOP,
}
/**
 * An enum representing the possible values of #GDataMediaContent:medium.
 */
enum MediaMedium {
    /**
     * the type of the media is unknown
     */
    UNKNOWN,
    /**
     * the media is an image
     */
    IMAGE,
    /**
     * the media is an audio stream
     */
    AUDIO,
    /**
     * the media is a video
     */
    VIDEO,
    /**
     * the media is another type of document
     */
    DOCUMENT,
    /**
     * the media is an executable file
     */
    EXECUTABLE,
}
/**
 * Representations of the different operations performed by the library.
 */
enum OperationType {
    /**
     * a query
     */
    QUERY,
    /**
     * an insertion of a #GDataEntry
     */
    INSERTION,
    /**
     * an update of a #GDataEntry
     */
    UPDATE,
    /**
     * a deletion of a #GDataEntry
     */
    DELETION,
    /**
     * a download of a file
     */
    DOWNLOAD,
    /**
     * an upload of a file
     */
    UPLOAD,
    /**
     * authentication with the service
     */
    AUTHENTICATION,
    /**
     * a batch operation with #GDataBatchOperation
     */
    BATCH,
}
/**
 * Error codes for XML or JSON parsing operations.
 */
enum ParserError {
    /**
     * Error parsing the XML or JSON syntax itself
     */
    PARSING_STRING,
    /**
     * Empty document
     */
    EMPTY_DOCUMENT,
}
/**
 * Visibility statuses available for albums on PicasaWeb. For more information, see the
 * <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Visibility">online documentation</ulink>.
 */
enum PicasaWebVisibility {
    /**
     * the album is visible to everyone, regardless of whether they're authenticated
     */
    PUBLIC,
    /**
     * the album is visible only to authenticated users in an allowlist
     */
    PRIVATE,
}
/**
 * Error codes for #GDataService operations.
 */
enum ServiceError {
    /**
     * The service is unavailable due to maintenance or other reasons (e.g. network errors at the server end)
     */
    UNAVAILABLE,
    /**
     * The client or server unexpectedly strayed from the protocol (fatal error)
     */
    PROTOCOL_ERROR,
    /**
     * An entry has already been inserted, and cannot be re-inserted
     */
    ENTRY_ALREADYSERTED,
    /**
     * The user attempted to do something which required authentication, and they weren't authenticated or
     * didn't have authorization for the operation
     */
    AUTHENTICATION_REQUIRED,
    /**
     * A requested resource (feed or entry) was not found on the server
     */
    NOT_FOUND,
    /**
     * There was a conflict when updating an entry on the server; the server-side copy was modified between downloading
     * and uploading the modified entry
     */
    CONFLICT,
    /**
     * Generic error for a forbidden action (not due to having insufficient permissions)
     */
    FORBIDDEN,
    /**
     * A given query parameter was invalid for the query type
     */
    BAD_QUERY_PARAMETER,
    /**
     * The service is unavailable due to local network errors (e.g. no Internet connection)
     */
    NETWORK_ERROR,
    /**
     * The service is unavailable due to proxy network errors (e.g. proxy unreachable)
     */
    PROXY_ERROR,
    /**
     * Generic error when running a batch operation and the whole operation fails
     */
    WITH_BATCH_OPERATION,
    /**
     * The API request quota for this
     * developer account has been exceeded for the current time period (e.g. day).
     * Try again later. (Since: 0.16.0.)
     */
    API_QUOTA_EXCEEDED,
}
/**
 * Video ages, allowing queries to be limited to videos uploaded in a recent time period.
 */
enum YouTubeAge {
    /**
     * retrieve all videos, regardless of the date they were uploaded
     */
    ALL_TIME,
    /**
     * retrieve only videos uploaded in the past day
     */
    TODAY,
    /**
     * retrieve only videos uploaded in the past week
     */
    THIS_WEEK,
    /**
     * retrieve only videos uploaded in the past month
     */
    THIS_MONTH,
}
/**
 * Permissions for actions which can be set on a #GDataYouTubeVideo using gdata_youtube_video_set_access_control().
 * 
 * The only actions which can have the %GDATA_YOUTUBE_PERMISSION_MODERATED permission are
 * %GDATA_YOUTUBE_ACTION_RATE and %GDATA_YOUTUBE_ACTION_COMMENT.
 */
enum YouTubePermission {
    /**
     * the action is allowed for everyone
     */
    ALLOWED,
    /**
     * the action is denied for everyone
     */
    DENIED,
    /**
     * the action is moderated by the video owner
     */
    MODERATED,
}
/**
 * Safe search levels for removing restricted entries from query results. For more information, see the
 * <ulink type="http" url="https://developers.google.com/youtube/v3/docs/search/list#safeSearch">online documentation</ulink>.
 */
enum YouTubeSafeSearch {
    /**
     * YouTube will not perform any filtering on the search result set
     */
    NONE,
    /**
     * YouTube will filter some content from search results and, at the least,
     * will filter content that is restricted in your locale
     */
    MODERATE,
    /**
     * YouTube will try to exclude all restricted content from the search result set
     */
    STRICT,
}
/**
 * Error codes for #GDataYouTubeService operations.
 */
enum YouTubeServiceError {
    /**
     * the API request quota for this developer account has been exceeded
     */
    API_QUOTA_EXCEEDED,
    /**
     * the entry (e.g. video) quota for this user account has been exceeded
     */
    ENTRY_QUOTA_EXCEEDED,
    /**
     * the currently authenticated user doesn't have a YouTube channel, but the current action requires one;
     * if this error is received, inform the user that they need a YouTube channel, and provide a link to
     * <ulink type="http" url="https://www.youtube.com/create_channel">https://www.youtube.com/create_channel</ulink>
     */
    CHANNEL_REQUIRED,
}
/**
 * Standard feed types for standard feed queries with
 * gdata_youtube_service_query_standard_feed(). For more information, see the
 * <ulink type="http" url="https://developers.google.com/youtube/2.0/developers_guide_protocol_video_feeds#Standard_feeds">online
 * documentation</ulink>.
 */
enum YouTubeStandardFeedType {
    /**
     * This feed contains the most popular YouTube
     *   videos, selected using an algorithm that combines many different signals to
     *   determine overall popularity. As of version 0.17.0, this is the only
     *   supported feed type.
     */
    FEED,
}
/**
 * The users specified by the #GDataAccessRule have no rights.
 */
const ACCESS_ROLE_NONE: string
/**
 * The #GDataAccessRule applies to all users.
 */
const ACCESS_SCOPE_DEFAULT: string
/**
 * The #GDataAccessRule applies to all users in a Google Apps For Your Domain domain, given in #GDataAccessRule:scope-value.
 */
const ACCESS_SCOPE_DOMAIN: string
/**
 * The #GDataAccessRule applies to a single individual, whose e-mail address is given in #GDataAccessRule:scope-value.
 */
const ACCESS_SCOPE_USER: string
/**
 * The users specified by the #GDataCalendarAccessRule have full edit access to
 * the calendar, except they can’t change the calendar’s access rules.
 */
const CALENDAR_ACCESS_ROLE_EDITOR: string
/**
 * The users specified by the #GDataCalendarAccessRule can only see the
 * free/busy information on the calendar; not event details.
 */
const CALENDAR_ACCESS_ROLE_FREE_BUSY: string
/**
 * The users specified by the #GDataCalendarAccessRule have full owner access
 * to the calendar.
 */
const CALENDAR_ACCESS_ROLE_OWNER: string
/**
 * The users specified by the #GDataCalendarAccessRule have read-only access to
 * the calendar.
 */
const CALENDAR_ACCESS_ROLE_READ: string
/**
 * The users specified by the #GDataCalendarAccessRule have full administrator
 * access to the calendar server. This is only available in Google Apps For
 * Your Domain.
 */
const CALENDAR_ACCESS_ROLE_ROOT: string
/**
 * A schema for categories which label the entry they're applied to in some way, such as starring it. The semantics of the various labels
 * (such as %GDATA_CATEGORY_SCHEMA_LABELS_STARRED) are service-specific.
 */
const CATEGORY_SCHEMA_LABELS: string
/**
 * The users specified by the #GDataAccessRule have full owner access to the document. This allows them to modify the access rules and delete
 * the document, amongst other things.
 */
const DOCUMENTS_ACCESS_ROLE_OWNER: string
/**
 * The users specified by the #GDataAccessRule have read-only access to the document.
 */
const DOCUMENTS_ACCESS_ROLE_READER: string
/**
 * The users specified by the #GDataAccessRule have write access to the document. They cannot modify the access rules or delete the document.
 */
const DOCUMENTS_ACCESS_ROLE_WRITER: string
/**
 * The export format for JPEG image format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_drawings">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_DRAWING_JPEG: string
/**
 * The export format for Portable Document Format (PDF).
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_drawings">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_DRAWING_PDF: string
/**
 * The export format for Portable Network Graphics (PNG) image format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_drawings">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_DRAWING_PNG: string
/**
 * The export format for Scalable Vector Graphics (SVG) image format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_drawings">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_DRAWING_SVG: string
/**
 * The export format for Portable Document Format (PDF).
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_PRESENTATION_PDF: string
/**
 * The export format for Portable Network Graphics (PNG) image format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_PRESENTATION_PNG: string
/**
 * The export format for Microsoft PowerPoint (PPT) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_PRESENTATION_PPT: string
/**
 * The export format for plain text format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_PRESENTATION_TXT: string
/**
 * The #GDataDocumentsProperty having the visibility set to FALSE (default) corresponds to having the visibility property on a Drive Property Resource
 * set to "PRIVATE". This makes the Property Resource accessible only by the app that created it.
 */
const DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE: string
/**
 * The #GDataDocumentsProperty having the visibility set to TRUE corresponds to having the visibility property
 * on a Drive Property Resource
 * set to "PUBLIC". This makes the Property Resource visible to other apps.
 */
const DOCUMENTS_PROPERTY_VISIBILITY_PUBLIC: string
/**
 * The export format for Comma-Separated Values (CSV) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_SPREADSHEET_CSV: string
/**
 * The export format for HyperText Markup Language (HTML) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_SPREADSHEET_HTML: string
/**
 * The export format for OpenDocument Spreadsheet (ODS) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_SPREADSHEET_ODS: string
/**
 * The export format for Portable Document Format (PDF).
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_SPREADSHEET_PDF: string
/**
 * The export format for Tab-Separated Values (TSV) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_SPREADSHEET_TSV: string
/**
 * The export format for Microsoft Excel spreadsheet (XLS) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_SPREADSHEET_XLS: string
/**
 * The export format for Microsoft Word (DOC) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_TEXT_DOC: string
/**
 * The export format for HyperText Markup Language (HTML) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_TEXT_HTML: string
/**
 * The export format for JPEG image format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_TEXT_JPEG: string
/**
 * The export format for OpenDocument Text (ODT) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_TEXT_ODT: string
/**
 * The export format for Portable Document Format (PDF).
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_TEXT_PDF: string
/**
 * The export format for Portable Network Graphics (PNG) image format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_TEXT_PNG: string
/**
 * The export format for Rich Text Format (RTF).
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_TEXT_RTF: string
/**
 * The export format for plain text format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_TEXT_TXT: string
/**
 * The export format for a ZIP archive containing images and exported HTML.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
const DOCUMENTS_TEXT_ZIP: string
/**
 * The relation type URI for a contact's free/busy calendar.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">
 * gContact specification</ulink>.
 */
const GCONTACT_CALENDAR_FREE_BUSY: string
/**
 * The relation type URI for a contact's home calendar.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">
 * gContact specification</ulink>.
 */
const GCONTACT_CALENDAR_HOME: string
/**
 * The relation type URI for a contact's work calendar.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">
 * gContact specification</ulink>.
 */
const GCONTACT_CALENDAR_WORK: string
/**
 * The relation type URI for an anniversary event.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">
 * gContact specification</ulink>.
 */
const GCONTACT_EVENT_ANNIVERSARY: string
/**
 * The relation type URI for a miscellaneous event.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">
 * gContact specification</ulink>.
 */
const GCONTACT_EVENT_OTHER: string
/**
 * The relation type URI for an account number identifier.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">
 * gContact specification</ulink>.
 */
const GCONTACT_EXTERNAL_ID_ACCOUNT: string
/**
 * The relation type URI for a customer identifier.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">
 * gContact specification</ulink>.
 */
const GCONTACT_EXTERNAL_ID_CUSTOMER: string
/**
 * The relation type URI for a network identifier.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">
 * gContact specification</ulink>.
 */
const GCONTACT_EXTERNAL_ID_NETWORK: string
/**
 * The relation type URI for an identifier related to an organization the contact is associated with.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">
 * gContact specification</ulink>.
 */
const GCONTACT_EXTERNAL_ID_ORGANIZATION: string
/**
 * The relation type URI for a jot about a contact's home.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">
 * gContact specification</ulink>.
 */
const GCONTACT_JOT_HOME: string
/**
 * The relation type URI for a jot with keywords about a contact.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">
 * gContact specification</ulink>.
 */
const GCONTACT_JOT_KEYWORDS: string
/**
 * The relation type URI for a jot about an other facet of a contact.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">
 * gContact specification</ulink>.
 */
const GCONTACT_JOT_OTHER: string
/**
 * The relation type URI for a jot about the relationship between a contact and the user.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">
 * gContact specification</ulink>.
 */
const GCONTACT_JOT_USER: string
/**
 * The relation type URI for a jot about a contact's work.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">
 * gContact specification</ulink>.
 */
const GCONTACT_JOT_WORK: string
/**
 * The relation type URI for a contact's assistant.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_ASSISTANT: string
/**
 * The relation type URI for a contact's brother.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_BROTHER: string
/**
 * The relation type URI for a contact's child.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_CHILD: string
/**
 * The relation type URI for a contact's domestic partner.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_DOMESTIC_PARTNER: string
/**
 * The relation type URI for a contact's father.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_FATHER: string
/**
 * The relation type URI for a contact's friend.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_FRIEND: string
/**
 * The relation type URI for a contact's manager.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_MANAGER: string
/**
 * The relation type URI for a contact's mother.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_MOTHER: string
/**
 * The relation type URI for a contact's parent.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_PARENT: string
/**
 * The relation type URI for a contact's business partner.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_PARTNER: string
/**
 * The relation type URI for a contact's referrer.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_REFERRER: string
/**
 * The relation type URI for a contact's (general) family relative.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_RELATIVE: string
/**
 * The relation type URI for a contact's sister.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_SISTER: string
/**
 * The relation type URI for a contact's spouse.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
const GCONTACT_RELATION_SPOUSE: string
/**
 * The relation type URI for a contact's blog.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
const GCONTACT_WEBSITE_BLOG: string
/**
 * The relation type URI for a contact's FTP site.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
const GCONTACT_WEBSITE_FTP: string
/**
 * The relation type URI for a contact's home website.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
const GCONTACT_WEBSITE_HOME: string
/**
 * The relation type URI for a contact's home page.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
const GCONTACT_WEBSITE_HOME_PAGE: string
/**
 * The relation type URI for a miscellaneous website of the contact.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
const GCONTACT_WEBSITE_OTHER: string
/**
 * The relation type URI for a contact's online profile.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
const GCONTACT_WEBSITE_PROFILE: string
/**
 * The relation type URI for a contact's work website.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
const GCONTACT_WEBSITE_WORK: string
/**
 * The address is for general usage. Value for #GDataGDPostalAddress:usage.
 */
const GD_ADDRESS_USAGE_GENERAL: string
/**
 * The address is for local usage. Value for #GDataGDPostalAddress:usage.
 */
const GD_ADDRESS_USAGE_LOCAL: string
/**
 * The relation type URI for a home e-mail address.
 */
const GD_EMAIL_ADDRESS_HOME: string
/**
 * The relation type URI for a miscellaneous e-mail address.
 */
const GD_EMAIL_ADDRESS_OTHER: string
/**
 * The relation type URI for a work e-mail address.
 */
const GD_EMAIL_ADDRESS_WORK: string
/**
 * The event has been canceled.
 */
const GD_EVENT_STATUS_CANCELED: string
/**
 * The event has been planned and confirmed.
 */
const GD_EVENT_STATUS_CONFIRMED: string
/**
 * The event has been planned, but only tentatively scheduled.
 */
const GD_EVENT_STATUS_TENTATIVE: string
/**
 * The event consumes time in calendars; its time will be marked as busy in a free/busy search.
 */
const GD_EVENT_TRANSPARENCY_OPAQUE: string
/**
 * The event does not consume time in calendars; its time will be not marked as busy in a free/busy search.
 */
const GD_EVENT_TRANSPARENCY_TRANSPARENT: string
/**
 * The event is visible to only certain people.
 */
const GD_EVENT_VISIBILITY_CONFIDENTIAL: string
/**
 * The event's visibility is inherited from the preferences of its owner.
 */
const GD_EVENT_VISIBILITY_DEFAULT: string
/**
 * The event is visible to very few people.
 */
const GD_EVENT_VISIBILITY_PRIVATE: string
/**
 * The event is visible to most people.
 */
const GD_EVENT_VISIBILITY_PUBLIC: string
/**
 * The relation type URI for a home IM address.
 */
const GD_IM_ADDRESS_HOME: string
/**
 * The relation type URI for a Microsoft NetMeeting IM address.
 */
const GD_IM_ADDRESS_NETMEETING: string
/**
 * The relation type URI for a miscellaneous IM address.
 */
const GD_IM_ADDRESS_OTHER: string
/**
 * The relation type URI for a work IM address.
 */
const GD_IM_ADDRESS_WORK: string
/**
 * The protocol type URI for an AIM IM address.
 */
const GD_IM_PROTOCOL_AIM: string
/**
 * The protocol type URI for a Google Talk IM address.
 */
const GD_IM_PROTOCOL_GOOGLE_TALK: string
/**
 * The protocol type URI for an ICQ IM address.
 */
const GD_IM_PROTOCOL_ICQ: string
/**
 * The protocol type URI for a Jabber IM address.
 */
const GD_IM_PROTOCOL_JABBER: string
/**
 * The protocol type URI for an Windows Live Messenger IM address.
 */
const GD_IM_PROTOCOL_LIVE_MESSENGER: string
/**
 * The protocol type URI for a QQ IM address.
 */
const GD_IM_PROTOCOL_QQ: string
/**
 * The protocol type URI for a Skype IM address.
 */
const GD_IM_PROTOCOL_SKYPE: string
/**
 * The protocol type URI for a Yahoo! Messenger IM address.
 */
const GD_IM_PROTOCOL_YAHOO_MESSENGER: string
/**
 * Parcels and letters can be sent to the address. Value for #GDataGDPostalAddress:mail-class.
 */
const GD_MAIL_CLASS_BOTH: string
/**
 * Only letters can be sent to the address. Value for #GDataGDPostalAddress:mail-class.
 */
const GD_MAIL_CLASS_LETTERS: string
/**
 * Address is purely locational and cannot be used for mail. Value for #GDataGDPostalAddress:mail-class.
 */
const GD_MAIL_CLASS_NEITHER: string
/**
 * Only parcels can be sent to the address. Value for #GDataGDPostalAddress:mail-class.
 */
const GD_MAIL_CLASS_PARCELS: string
/**
 * The relation type URI for a miscellaneous organization.
 */
const GD_ORGANIZATION_OTHER: string
/**
 * The relation type URI for a work organization.
 */
const GD_ORGANIZATION_WORK: string
/**
 * The relation type URI for the phone number of an assistant.
 */
const GD_PHONE_NUMBER_ASSISTANT: string
/**
 * The relation type URI for the phone number of a callback service.
 */
const GD_PHONE_NUMBER_CALLBACK: string
/**
 * The relation type URI for the phone number of a car phone.
 */
const GD_PHONE_NUMBER_CAR: string
/**
 * The relation type URI for the main phone number of a company.
 */
const GD_PHONE_NUMBER_COMPANY_MAIN: string
/**
 * The relation type URI for the phone number of a fax machine.
 */
const GD_PHONE_NUMBER_FAX: string
/**
 * The relation type URI for a home phone number.
 */
const GD_PHONE_NUMBER_HOME: string
/**
 * The relation type URI for the phone number of a home fax machine.
 */
const GD_PHONE_NUMBER_HOME_FAX: string
/**
 * The relation type URI for the phone number of an ISDN phone.
 */
const GD_PHONE_NUMBER_ISDN: string
/**
 * The relation type URI for the main phone number of a person.
 */
const GD_PHONE_NUMBER_MAIN: string
/**
 * The relation type URI for the phone number of a mobile phone.
 */
const GD_PHONE_NUMBER_MOBILE: string
/**
 * The relation type URI for a miscellaneous phone number.
 */
const GD_PHONE_NUMBER_OTHER: string
/**
 * The relation type URI for a miscellaneous fax machine's phone number.
 */
const GD_PHONE_NUMBER_OTHER_FAX: string
/**
 * The relation type URI for the phone number of a pager.
 */
const GD_PHONE_NUMBER_PAGER: string
/**
 * The relation type URI for the phone number of a radio phone.
 */
const GD_PHONE_NUMBER_RADIO: string
/**
 * The relation type URI for the phone number of a telex machine.
 */
const GD_PHONE_NUMBER_TELEX: string
/**
 * The relation type URI for the phone number of a TTY TTD.
 */
const GD_PHONE_NUMBER_TTY_TDD: string
/**
 * The relation type URI for the phone number of a work place.
 */
const GD_PHONE_NUMBER_WORK: string
/**
 * The relation type URI for the phone number of a work fax machine.
 */
const GD_PHONE_NUMBER_WORK_FAX: string
/**
 * The relation type URI for the phone number of a work mobile phone.
 */
const GD_PHONE_NUMBER_WORK_MOBILE: string
/**
 * The relation type URI for the phone number of a work pager.
 */
const GD_PHONE_NUMBER_WORK_PAGER: string
/**
 * The relation type URI for the postal address of a home.
 */
const GD_POSTAL_ADDRESS_HOME: string
/**
 * The relation type URI for a miscellaneous postal address.
 */
const GD_POSTAL_ADDRESS_OTHER: string
/**
 * The relation type URI for the postal address of a workplace.
 */
const GD_POSTAL_ADDRESS_WORK: string
/**
 * The #GDataGDReminder:method for an alert to appear in the user's browser.
 */
const GD_REMINDER_ALERT: string
/**
 * The #GDataGDReminder:method for an alert to be sent to the user by e-mail.
 */
const GD_REMINDER_EMAIL: string
/**
 * The #GDataGDReminder:method for an alert to be sent to the user by SMS.
 */
const GD_REMINDER_SMS: string
/**
 * The relation type URI for an event location.
 */
const GD_WHERE_EVENT: string
/**
 * The relation type URI for an alternate event location, such as a video conference site.
 */
const GD_WHERE_EVENT_ALTERNATE: string
/**
 * The relation type URI for an event's parking lot.
 */
const GD_WHERE_EVENT_PARKING: string
/**
 * The relation type URI for a general meeting or event attendee.
 */
const GD_WHO_EVENT_ATTENDEE: string
/**
 * The relation type URI for an event organizer (not necessarily an attendee).
 */
const GD_WHO_EVENT_ORGANIZER: string
/**
 * The relation type URI for an event performer, which is similar to %GDATA_GD_WHO_EVENT_SPEAKER, but with more emphasis on art rather than speaking.
 */
const GD_WHO_EVENT_PERFORMER: string
/**
 * The relation type URI for a speaker at an event.
 */
const GD_WHO_EVENT_SPEAKER: string
/**
 * The relation type URI of the access control list location for this resource.
 * 
 * For more information, see the
 * <ulink type="http" url="http://code.google.com/apis/calendar/data/2.0/developers_guide_protocol.html#SharingACalendar">ACL specification</ulink>.
 */
const LINK_ACCESS_CONTROL_LIST: string
/**
 * The relation type URI for alternate resources to the current one.
 * 
 * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute">
 * Atom specification</ulink>.
 */
const LINK_ALTERNATE: string
/**
 * The relation type URI for the batch operation URI for a given #GDataFeed.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/docs/batch.html#Submit_HTTP">GData specification</ulink>.
 */
const LINK_BATCH: string
/**
 * The relation type URI of the edit location for this resource.
 * 
 * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/protocol/atom-protocol-spec.php#new-link-relation">
 * Atom Publishing Protocol specification</ulink>.
 */
const LINK_EDIT: string
/**
 * The relation type URI of the edit location for media resources attached to this resource.
 * 
 * For more information, see the
 * <ulink type="http" url="http://www.atomenabled.org/developers/protocol/atom-protocol-spec.php#new-media-link-relation">
 * Atom Publishing Protocol specification</ulink>.
 */
const LINK_EDIT_MEDIA: string
/**
 * The relation type URI for attached objects which may be large in size.
 * 
 * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute">
 * Atom specification</ulink>.
 */
const LINK_ENCLOSURE: string
/**
 * The relation type URI of the of the location of the parent resource in a
 * hierarchy of entries.
 * 
 * This is an undocumented GData-specific addition to the Atom specification,
 * and is not included in the GData documentation except in examples and in the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/v2/schema/document_list_atom.rnc">
 * RelaxNG schema</ulink>.
 */
const LINK_PARENT: string
/**
 * The relation type URI for resources related to the current one.
 * 
 * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute">
 * Atom specification</ulink>.
 */
const LINK_RELATED: string
/**
 * The relation type URI of the resumable upload location for resources attached to this resource.
 * 
 * For more information, see the
 * <ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html#ResumableUploadInitiate">GData resumable upload protocol
 * specification</ulink>.
 */
const LINK_RESUMABLE_CREATE_MEDIA: string
/**
 * The relation type URI of the resumable update location for resources attached to this resource.
 * 
 * For more information, see the
 * <ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html#ResumableUploadInitiate">GData resumable upload protocol
 * specification</ulink>.
 */
const LINK_RESUMABLE_EDIT_MEDIA: string
/**
 * The relation type URI for the current resource.
 * 
 * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute">
 * Atom specification</ulink>.
 */
const LINK_SELF: string
/**
 * The relation type URI for the source document of the current resource.
 * 
 * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute">
 * Atom specification</ulink>.
 */
const LINK_VIA: string
/**
 * Evaluates to the major version of the GData headers at compile time.
 * (e.g. in libgdata version 1.2.3 this is 1).
 */
const MAJOR_VERSION: number
/**
 * Evaluates to the micro version of the GData headers at compile time.
 * (e.g. in libgdata version 1.2.3 this is 3).
 */
const MICRO_VERSION: number
/**
 * Evaluates to the minor version of the GData headers at compile time.
 * (e.g. in libgdata version 1.2.3 this is 2).
 */
const MINOR_VERSION: number
/**
 * OAuth 2 redirect URI for out-of-band authorisation code transfer, where the
 * user is shown the authorisation code and asked to copy it.
 * 
 * See
 * <ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#choosingredirecturi">reference
 * documentation</ulink> for details.
 */
const OAUTH2_REDIRECT_URI_OOB: string
/**
 * OAuth 2 redirect URI for out-of-band authorisation code transfer, where the
 * user is not shown the authorisation code or asked to copy it.
 * 
 * See
 * <ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#choosingredirecturi">reference
 * documentation</ulink> for details.
 */
const OAUTH2_REDIRECT_URI_OOB_AUTO: string
/**
 * There was an error while processing or thumbnailing the video and it should be deleted.
 */
const PICASAWEB_VIDEO_STATUS_FAILED: string
/**
 * The video has been processed and thumbnailed.
 */
const PICASAWEB_VIDEO_STATUS_FINAL: string
/**
 * The video is still being processed.
 */
const PICASAWEB_VIDEO_STATUS_PENDING: string
/**
 * The video has been processed, but still needs thumbnailing.
 */
const PICASAWEB_VIDEO_STATUS_READY: string
/**
 * A value for #GDataTasksTask:status indicating the task has been completed.
 * 
 * Reference:
 * <ulink type="http" url="https://developers.google.com/google-apps/tasks/v1/reference/tasks#status">
 * Google Tasks documentation</ulink>.
 */
const TASKS_STATUS_COMPLETED: string
/**
 * A value for #GDataTasksTask:status indicating the task still needs action
 * before it is complete.
 * 
 * Reference:
 * <ulink type="http" url="https://developers.google.com/google-apps/tasks/v1/reference/tasks#status">
 * Google Tasks documentation</ulink>.
 */
const TASKS_STATUS_NEEDS_ACTION: string
/**
 * An action to comment on a video, for use with gdata_youtube_video_set_access_control().
 */
const YOUTUBE_ACTION_COMMENT: string
/**
 * An action to rate other users' comments on a video, for use with gdata_youtube_video_set_access_control().
 */
const YOUTUBE_ACTION_COMMENT_VOTE: string
/**
 * An action to embed a video on third-party websites, for use with gdata_youtube_video_set_access_control().
 */
const YOUTUBE_ACTION_EMBED: string
/**
 * An action to rate a video, for use with gdata_youtube_video_set_access_control().
 */
const YOUTUBE_ACTION_RATE: string
/**
 * An action allowing YouTube to show the video on mobile phones and televisions, for use with gdata_youtube_video_set_access_control().
 */
const YOUTUBE_ACTION_SYNDICATE: string
/**
 * An action to add a video response to a video, for use with gdata_youtube_video_set_access_control().
 */
const YOUTUBE_ACTION_VIDEO_RESPOND: string
/**
 * The aspect ratio for widescreen (16:9) videos.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:aspectratio">
 * online documentation</ulink>.
 */
const YOUTUBE_ASPECT_RATIO_WIDESCREEN: string
/**
 * Value for #GDataYouTubeQuery:license to restrict search results to only videos which are Creative Commons licensed. Specifically, the license
 * is the Creative Commons Attribution 3.0 Unported license; see the
 * <ulink type="http" url="http://www.google.com/support/youtube/bin/answer.py?hl=en&answer=1284989">YouTube Help</ulink> for more information.
 */
const YOUTUBE_LICENSE_CC: string
/**
 * Value for #GDataYouTubeQuery:license to restrict search results to only videos which are under the standard YouTube license.
 */
const YOUTUBE_LICENSE_STANDARD: string
/**
 * A rating type to pass to gdata_youtube_video_get_media_rating() for ratings by the <ulink type="http" url="http://www.mpaa.org/">MPAA</ulink>. The
 * values which can be returned for such ratings are: <code class="literal">g</code>, <code class="literal">pg</code>,
 * <code class="literal">pg-13</code>, <code class="literal">r</code> and <code class="literal">nc-17</code>.
 */
const YOUTUBE_RATING_TYPE_MPAA: string
/**
 * A rating type to pass to gdata_youtube_video_get_media_rating() for ratings following the FCC
 * <ulink type="http" url="http://www.fcc.gov/vchip/">V-Chip</ulink> system. The values which can be returned for such ratings are:
 * <code class="literal">tv-y</code>, <code class="literal">tv-y7</code>, <code class="literal">tv-y7-fv</code>, <code class="literal">tv-g</code>,
 * <code class="literal">tv-pg</code>, <code class="literal">tv-14</code> and <code class="literal">tv-ma</code>.
 */
const YOUTUBE_RATING_TYPE_V_CHIP: string
/**
 * Parses `hexadecimal` and returns a #GDataColor describing it in `color`.
 * 
 * `hexadecimal` should be in the form <literal>#<replaceable>rr</replaceable><replaceable>gg</replaceable><replaceable>bb</replaceable></literal>,
 * where <replaceable>rr</replaceable> is a two-digit hexadecimal red intensity value, <replaceable>gg</replaceable> is green
 * and <replaceable>bb</replaceable> is blue. The hash is optional.
 * @param hexadecimal a hexadecimal color string
 */
function color_from_hexadecimal(hexadecimal: string): [ /* returnType */ boolean, /* color */ Color ]
function documents_service_error_quark(): GLib.Quark
function parser_error_quark(): GLib.Quark
function service_error_quark(): GLib.Quark
function youtube_service_error_quark(): GLib.Quark
/**
 * Callback function called once for each operation in a batch operation run. The operation is identified by `operation_id` and `operation_type` (where
 * `operation_id` is the ID returned by the relevant call to gdata_batch_operation_add_query(), gdata_batch_operation_add_insertion(),
 * gdata_batch_operation_add_update() or gdata_batch_operation_add_deletion(), and `operation_type` shows which one of the above was called).
 * 
 * If the operation was successful, the resulting #GDataEntry will be passed in as `entry,` and `error` will be %NULL. Otherwise, `entry` will be %NULL
 * and a descriptive error will be in `error`. If `operation_type` is %GDATA_BATCH_OPERATION_DELETION, `entry` will always be %NULL, and `error` will be
 * %NULL or non-%NULL as appropriate.
 * 
 * If the callback code needs to retain a copy of `entry,` it must be referenced (with g_object_ref()). Similarly, `error` is owned by the calling code,
 * and must not be freed.
 * 
 * The callback is called in the main thread, and there is no guarantee on the order in which the callbacks for the operations in a run are executed,
 * or whether they will be called in a timely manner. It is, however, guaranteed that they will all be called before the #GAsyncReadyCallback which
 * signals the completion of the run (if initiated with gdata_batch_operation_run_async()) is called; or gdata_batch_operation_run() returns (if
 * initiated synchronously).
 * @callback 
 * @param operation_id the operation ID returned from gdata_batch_operation_add_*()
 * @param operation_type the type of operation which was requested
 * @param entry the result of the operation, or %NULL
 * @param error a #GError describing any error which occurred, or %NULL
 */
interface BatchOperationCallback {
    (operation_id: number, operation_type: BatchOperationType, entry: Entry, error: GLib.Error): void
}
/**
 * Callback function called for each #GDataEntry parsed in a #GDataFeed when loading the results of a query.
 * 
 * It is called in the main thread, so there is no guarantee on the order in which the callbacks are executed,
 * or whether they will be called in a timely manner. It is, however, guaranteed that they will all be called before
 * the #GAsyncReadyCallback which signals the completion of the query is called.
 * @callback 
 * @param entry a new #GDataEntry
 * @param entry_key the key of the entry (zero-based index of its position in the feed)
 * @param entry_count the total number of entries in the feed
 */
interface QueryProgressCallback {
    (entry: Entry, entry_key: number, entry_count: number): void
}
interface AccessHandler_ConstructProps extends Entry_ConstructProps, GObject.Object_ConstructProps {
}

interface AccessHandler extends Entry {

    // Conflicting properties

    parent: any
    priv: any

    // Owm methods of GData-0.0.GData.AccessHandler

    /**
     * Retrieves a #GDataFeed containing all the access rules which apply to the given #GDataAccessHandler. Only the owner of a #GDataAccessHandler may
     * view its rule feed.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
     * If the operation was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * A %GDATA_SERVICE_ERROR_PROTOCOL_ERROR will be returned if the server indicates there is a problem with the query.
     * 
     * For each rule in the response feed, `progress_callback` will be called in the main thread. If there was an error parsing the XML response,
     * a #GDataParserError will be returned.
     * @param service a #GDataService
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when a rule is loaded, or %NULL
     */
    get_rules(service: Service, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed
    /**
     * Retrieves a #GDataFeed containing all the access rules which apply to the given #GDataAccessHandler. Only the owner of a #GDataAccessHandler may
     * view its rule feed. `self` and `service` are both reffed when this function is called, so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_access_handler_get_rules(), which is the synchronous version of this function, and gdata_service_query_async(), which
     * is the base asynchronous query function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_query_finish()
     * to get the results of the operation.
     * @param service a #GDataService
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when a rule is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    get_rules_async(service: Service, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void

    // Own virtual methods of GData-0.0.GData.AccessHandler

    /**
     * Retrieves a #GDataFeed containing all the access rules which apply to the given #GDataAccessHandler. Only the owner of a #GDataAccessHandler may
     * view its rule feed.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
     * If the operation was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * A %GDATA_SERVICE_ERROR_PROTOCOL_ERROR will be returned if the server indicates there is a problem with the query.
     * 
     * For each rule in the response feed, `progress_callback` will be called in the main thread. If there was an error parsing the XML response,
     * a #GDataParserError will be returned.
     * @virtual 
     * @param service a #GDataService
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when a rule is loaded, or %NULL
     */
    vfunc_get_rules(service: Service, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed

    // Class property signals of GData-0.0.GData.AccessHandler

    connect(sigName: "notify::content", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataAccessHandler structure are private and should never be accessed directly.
 * @interface 
 */
class AccessHandler extends GObject.Object {

    // Own properties of GData-0.0.GData.AccessHandler

    static name: string
    static $gtype: GObject.GType<AccessHandler>

    // Constructors of GData-0.0.GData.AccessHandler

    constructor(config?: AccessHandler_ConstructProps) 
    _init(config?: AccessHandler_ConstructProps): void
}

interface Authorizer_ConstructProps extends GObject.Object_ConstructProps {
}

interface Authorizer {

    // Owm methods of GData-0.0.GData.Authorizer

    /**
     * Returns whether the #GDataAuthorizer instance believes it's currently authorized to access the given `domain`. Note that this will not perform any
     * network requests, and will just look up the result in the #GDataAuthorizer's local cache of authorizations. This means that the result may be out
     * of date, as the server may have since invalidated the authorization. If the #GDataAuthorizer class supports timeouts and TTLs on authorizations,
     * they will not be taken into account; this method effectively returns whether the last successful authorization operation performed on the
     * #GDataAuthorizer included `domain` in the list of requested authorization domains.
     * 
     * Note that %NULL may be passed as the #GDataAuthorizer, in which case %FALSE will always be returned, regardless of the `domain`. This is for
     * convenience of checking whether a domain is authorized by the #GDataAuthorizer returned by gdata_service_get_authorizer(), which may be %NULL.
     * For example:
     * |[
     * if (gdata_authorizer_is_authorized_for_domain (gdata_service_get_authorizer (my_service), my_domain) == TRUE) {
     * 	/<!-- -->* Code to execute only if we're authorized for the given domain *<!-- -->/
     * }
     * ```
     * 
     * 
     * This method is thread safe.
     * @param domain the #GDataAuthorizationDomain to check against
     */
    is_authorized_for_domain(domain: AuthorizationDomain): boolean
    /**
     * Processes `message,` adding all the necessary extra headers and parameters to ensure that it's correctly authenticated and authorized under the
     * given `domain` for the online service. Basically, if a query is not processed by calling this method on it, it will be sent to the online service as
     * if it's a query from a non-logged-in user. Similarly, if the #GDataAuthorizer isn't authenticated or authorized (for `domain)`, no changes will
     * be made to the `message`.
     * 
     * `domain` may be %NULL if the request doesn't require authorization.
     * 
     * This modifies `message` in place.
     * 
     * This method is thread safe.
     * @param domain the #GDataAuthorizationDomain the query falls under, or %NULL
     * @param message the query to process
     */
    process_request(domain: AuthorizationDomain | null, message: Soup.Message): void
    /**
     * Forces the #GDataAuthorizer to refresh any authorization tokens it holds with the online service. This should typically be called when a
     * #GDataService query returns %GDATA_SERVICE_ERROR_AUTHENTICATION_REQUIRED, and is already called transparently by methods such as
     * gdata_service_query() and gdata_service_insert_entry() (see their documentation for more details).
     * 
     * If re-authorization is successful, it's guaranteed that by the time this method returns, the properties containing the relevant authorization
     * tokens on the #GDataAuthorizer instance will have been updated.
     * 
     * If %FALSE is returned, `error` will be set if (and only if) it's due to a refresh being attempted and failing. If a refresh is not attempted, %FALSE
     * will be returned but `error` will not be set.
     * 
     * If the #GDataAuthorizer has not been previously authenticated or authorized (using the class' specific methods), no authorization will be
     * attempted, %FALSE will be returned immediately and `error` will not be set.
     * 
     * Some #GDataAuthorizer implementations may not support refreshing authorization tokens at all; for example if doing so requires user interaction.
     * %FALSE will be returned immediately in that case and `error` will not be set.
     * 
     * This method is thread safe.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    refresh_authorization(cancellable: Gio.Cancellable | null): boolean
    /**
     * Forces the #GDataAuthorizer to refresh any authorization tokens it holds with the online service. `self` and `cancellable` are reffed when this
     * method is called, so can safely be freed after this method returns.
     * 
     * For more details, see gdata_authorizer_refresh_authorization(), which is the synchronous version of this method. If the #GDataAuthorizer class
     * doesn't implement #GDataAuthorizerInterface.refresh_authorization_async but does implement #GDataAuthorizerInterface.refresh_authorization, the
     * latter will be called from a new thread to make it asynchronous.
     * 
     * When the authorization refresh operation is finished, `callback` will be called. You can then call gdata_authorizer_refresh_authorization_finish()
     * to get the results of the operation.
     * 
     * This method is thread safe.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the authorization refresh operation is finished, or %NULL
     */
    refresh_authorization_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous authorization refresh operation for the #GDataAuthorizer, as started with gdata_authorizer_refresh_authorization_async().
     * 
     * This method is thread safe.
     * @param async_result a #GAsyncResult
     */
    refresh_authorization_finish(async_result: Gio.AsyncResult): boolean

    // Own virtual methods of GData-0.0.GData.Authorizer

    /**
     * Returns whether the #GDataAuthorizer instance believes it's currently authorized to access the given `domain`. Note that this will not perform any
     * network requests, and will just look up the result in the #GDataAuthorizer's local cache of authorizations. This means that the result may be out
     * of date, as the server may have since invalidated the authorization. If the #GDataAuthorizer class supports timeouts and TTLs on authorizations,
     * they will not be taken into account; this method effectively returns whether the last successful authorization operation performed on the
     * #GDataAuthorizer included `domain` in the list of requested authorization domains.
     * 
     * Note that %NULL may be passed as the #GDataAuthorizer, in which case %FALSE will always be returned, regardless of the `domain`. This is for
     * convenience of checking whether a domain is authorized by the #GDataAuthorizer returned by gdata_service_get_authorizer(), which may be %NULL.
     * For example:
     * |[
     * if (gdata_authorizer_is_authorized_for_domain (gdata_service_get_authorizer (my_service), my_domain) == TRUE) {
     * 	/<!-- -->* Code to execute only if we're authorized for the given domain *<!-- -->/
     * }
     * ```
     * 
     * 
     * This method is thread safe.
     * @virtual 
     * @param domain the #GDataAuthorizationDomain to check against
     */
    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean
    /**
     * Processes `message,` adding all the necessary extra headers and parameters to ensure that it's correctly authenticated and authorized under the
     * given `domain` for the online service. Basically, if a query is not processed by calling this method on it, it will be sent to the online service as
     * if it's a query from a non-logged-in user. Similarly, if the #GDataAuthorizer isn't authenticated or authorized (for `domain)`, no changes will
     * be made to the `message`.
     * 
     * `domain` may be %NULL if the request doesn't require authorization.
     * 
     * This modifies `message` in place.
     * 
     * This method is thread safe.
     * @virtual 
     * @param domain the #GDataAuthorizationDomain the query falls under, or %NULL
     * @param message the query to process
     */
    vfunc_process_request(domain: AuthorizationDomain | null, message: Soup.Message): void
    /**
     * Forces the #GDataAuthorizer to refresh any authorization tokens it holds with the online service. This should typically be called when a
     * #GDataService query returns %GDATA_SERVICE_ERROR_AUTHENTICATION_REQUIRED, and is already called transparently by methods such as
     * gdata_service_query() and gdata_service_insert_entry() (see their documentation for more details).
     * 
     * If re-authorization is successful, it's guaranteed that by the time this method returns, the properties containing the relevant authorization
     * tokens on the #GDataAuthorizer instance will have been updated.
     * 
     * If %FALSE is returned, `error` will be set if (and only if) it's due to a refresh being attempted and failing. If a refresh is not attempted, %FALSE
     * will be returned but `error` will not be set.
     * 
     * If the #GDataAuthorizer has not been previously authenticated or authorized (using the class' specific methods), no authorization will be
     * attempted, %FALSE will be returned immediately and `error` will not be set.
     * 
     * Some #GDataAuthorizer implementations may not support refreshing authorization tokens at all; for example if doing so requires user interaction.
     * %FALSE will be returned immediately in that case and `error` will not be set.
     * 
     * This method is thread safe.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_refresh_authorization(cancellable: Gio.Cancellable | null): boolean
    /**
     * Forces the #GDataAuthorizer to refresh any authorization tokens it holds with the online service. `self` and `cancellable` are reffed when this
     * method is called, so can safely be freed after this method returns.
     * 
     * For more details, see gdata_authorizer_refresh_authorization(), which is the synchronous version of this method. If the #GDataAuthorizer class
     * doesn't implement #GDataAuthorizerInterface.refresh_authorization_async but does implement #GDataAuthorizerInterface.refresh_authorization, the
     * latter will be called from a new thread to make it asynchronous.
     * 
     * When the authorization refresh operation is finished, `callback` will be called. You can then call gdata_authorizer_refresh_authorization_finish()
     * to get the results of the operation.
     * 
     * This method is thread safe.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the authorization refresh operation is finished, or %NULL
     */
    vfunc_refresh_authorization_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous authorization refresh operation for the #GDataAuthorizer, as started with gdata_authorizer_refresh_authorization_async().
     * 
     * This method is thread safe.
     * @virtual 
     * @param async_result a #GAsyncResult
     */
    vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean

    // Class property signals of GData-0.0.GData.Authorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataAuthorizer structure are private and should never be accessed directly.
 * @interface 
 */
class Authorizer extends GObject.Object {

    // Own properties of GData-0.0.GData.Authorizer

    static name: string
    static $gtype: GObject.GType<Authorizer>

    // Constructors of GData-0.0.GData.Authorizer

    constructor(config?: Authorizer_ConstructProps) 
    _init(config?: Authorizer_ConstructProps): void
}

interface Batchable_ConstructProps extends Service_ConstructProps, GObject.Object_ConstructProps {
}

interface Batchable extends Service {

    // Owm methods of GData-0.0.GData.Batchable

    /**
     * Creates a new #GDataBatchOperation for the given #GDataBatchable service, and with the given `feed_uri`. `feed_uri` is normally the %GDATA_LINK_BATCH
     * link URI in the appropriate #GDataFeed from the service. If authorization will be required to perform any of the requests in the batch operation,
     * `domain` must be non-%NULL, and must be an authorization domain which covers all of the requests. Otherwise, `domain` may be %NULL if authorization
     * is not required.
     * @param domain the #GDataAuthorizationDomain to authorize the operation, or %NULL
     * @param feed_uri the URI to send the batch operation request to
     */
    create_operation(domain: AuthorizationDomain | null, feed_uri: string): BatchOperation

    // Class property signals of GData-0.0.GData.Batchable

    connect(sigName: "notify::authorizer", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataBatchable structure are private and should never be accessed directly.
 * @interface 
 */
class Batchable extends GObject.Object {

    // Own properties of GData-0.0.GData.Batchable

    static name: string
    static $gtype: GObject.GType<Batchable>

    // Constructors of GData-0.0.GData.Batchable

    constructor(config?: Batchable_ConstructProps) 
    _init(config?: Batchable_ConstructProps): void
}

interface Commentable_ConstructProps extends Entry_ConstructProps, GObject.Object_ConstructProps {
}

interface Commentable extends Entry {

    // Conflicting properties

    parent: any
    priv: any

    // Owm methods of GData-0.0.GData.Commentable

    /**
     * Deletes `comment` from the #GDataCommentable.
     * 
     * If the given `comment` isn't deletable (either because the service doesn't support deleting comments at all, or because this particular comment
     * is not deletable due to having insufficient permissions), %GDATA_SERVICE_ERROR_FORBIDDEN will be set in `error` and %FALSE will be returned.
     * @param service a #GDataService with which the comment will be deleted
     * @param comment_ a comment to be deleted
     * @param cancellable optional #GCancellable object, or %NULL
     */
    delete_comment(service: Service, comment_: Comment, cancellable: Gio.Cancellable | null): boolean
    /**
     * Deletes `comment` from the #GDataCommentable. `self,` `service` and `comment_` are all reffed when this method is called, so can safely be freed after
     * this method returns.
     * 
     * For more details, see gdata_commentable_delete_comment(), which is the synchronous version of this method.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_commentable_delete_comment_finish() to get the results of the
     * operation.
     * @param service a #GDataService with which the comment will be deleted
     * @param comment_ a comment to be deleted
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the operation is finished
     */
    delete_comment_async(service: Service, comment_: Comment, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous comment deletion operation started with gdata_commentable_delete_comment_async().
     * @param result a #GAsyncResult
     */
    delete_comment_finish(result: Gio.AsyncResult): boolean
    /**
     * Adds `comment` to the #GDataCommentable.
     * 
     * If the #GDataCommentable doesn't support commenting, %NULL will be returned and `error` will be set to %GDATA_SERVICE_ERROR_FORBIDDEN.
     * @param service a #GDataService with which the comment will be added
     * @param comment_ a new comment to be added to the #GDataCommentable
     * @param cancellable optional #GCancellable object, or %NULL
     */
    insert_comment(service: Service, comment_: Comment, cancellable: Gio.Cancellable | null): Comment | null
    /**
     * Adds `comment` to the #GDataCommentable. `self,` `service` and `comment_` are all reffed when this method is called, so can safely be freed after this
     * method returns.
     * 
     * For more details, see gdata_commentable_insert_comment(), which is the synchronous version of this method.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_commentable_insert_comment_finish() to get the results of the
     * operation.
     * @param service a #GDataService with which the comment will be added
     * @param comment_ a new comment to be added to the #GDataCommentable
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the operation is finished
     */
    insert_comment_async(service: Service, comment_: Comment, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous comment insertion operation started with gdata_commentable_insert_comment_async().
     * @param result a #GAsyncResult
     */
    insert_comment_finish(result: Gio.AsyncResult): Comment | null
    /**
     * Retrieves a #GDataFeed containing the #GDataComments representing the comments on the #GDataCommentable which match the given `query`.
     * 
     * If the #GDataCommentable doesn't support commenting, %NULL will be returned and `error` will be set to %GDATA_SERVICE_ERROR_FORBIDDEN. This is in
     * contrast to if it does support commenting but hasn't had any comments added yet, in which case an empty #GDataFeed will be returned and no error
     * will be set.
     * @param service a #GDataService representing the service with which the object's comments will be manipulated
     * @param query a #GDataQuery with query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when a comment is loaded, or %NULL
     */
    query_comments(service: Service, query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed | null
    /**
     * Retrieves a #GDataFeed containing the #GDataComments representing the comments on the #GDataCommentable which match the given `query`.
     * `self,` `service` and `query` are all reffed when this method is called, so can safely be freed after this method returns.
     * 
     * For more details, see gdata_commentable_query_comments(), which is the synchronous version of this method.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_commentable_query_comments_finish() to get the results of the
     * operation.
     * @param service a #GDataService representing the service with which the object's comments will be manipulated
     * @param query a #GDataQuery with query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when a comment is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    query_comments_async(service: Service, query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous comment query operation started with gdata_commentable_query_comments_async().
     * @param result a #GAsyncResult
     */
    query_comments_finish(result: Gio.AsyncResult): Feed | null

    // Own virtual methods of GData-0.0.GData.Commentable

    vfunc_get_insert_comment_uri(comment: Comment): string
    vfunc_get_query_comments_uri(): string
    vfunc_is_comment_deletable(comment: Comment): boolean

    // Class property signals of GData-0.0.GData.Commentable

    connect(sigName: "notify::content", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataCommentable structure are private and should never be accessed directly
 * @interface 
 */
class Commentable extends GObject.Object {

    // Own properties of GData-0.0.GData.Commentable

    static name: string
    static $gtype: GObject.GType<Commentable>

    // Constructors of GData-0.0.GData.Commentable

    constructor(config?: Commentable_ConstructProps) 
    _init(config?: Commentable_ConstructProps): void
}

interface Comparable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Comparable {

    // Owm methods of GData-0.0.GData.Comparable

    /**
     * Compares the two objects, returning <code class="literal">-1</code> if `self` is "less than" `other` by some metric, <code class="literal">0</code>
     * if they're equal, or <code class="literal">1</code> if `self` is "greater than" `other`.
     * 
     * %NULL values are handled gracefully, with <code class="literal">0</code> returned if both `self` and `other` are %NULL,
     * <code class="literal">-1</code> if `self` is %NULL and <code class="literal">1</code> if `other` is %NULL.
     * 
     * The `other` object must be of the same type as `self,` or of a type derived from `self'`s type.
     * @param other another #GDataComparable of the same type, or %NULL
     */
    compare(other: Comparable | null): number

    // Own virtual methods of GData-0.0.GData.Comparable

    vfunc_compare_with(other: Comparable): number

    // Class property signals of GData-0.0.GData.Comparable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataComparable structure are private and should never be accessed directly.
 * @interface 
 */
class Comparable extends GObject.Object {

    // Own properties of GData-0.0.GData.Comparable

    static name: string
    static $gtype: GObject.GType<Comparable>

    // Constructors of GData-0.0.GData.Comparable

    constructor(config?: Comparable_ConstructProps) 
    _init(config?: Comparable_ConstructProps): void
}

interface APPCategories_ConstructProps extends Parsable_ConstructProps {
}

interface APPCategories {

    // Own properties of GData-0.0.GData.APPCategories

    /**
     * Whether entries may use categories not in this category list.
     * 
     * API reference: <ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appCategories2">app:categories</ulink>
     */
    readonly is_fixed: boolean

    // Owm methods of GData-0.0.GData.APPCategories

    /**
     * Returns a list of the categories in this category list.
     */
    get_categories(): Category[]

    // Class property signals of GData-0.0.GData.APPCategories

    connect(sigName: "notify::is-fixed", callback: (($obj: APPCategories, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-fixed", callback: (($obj: APPCategories, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-fixed", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: APPCategories, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: APPCategories, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataAPPCategories structure are private and should never be accessed directly.
 * @class 
 */
class APPCategories extends Parsable {

    // Own properties of GData-0.0.GData.APPCategories

    static name: string
    static $gtype: GObject.GType<APPCategories>

    // Constructors of GData-0.0.GData.APPCategories

    constructor(config?: APPCategories_ConstructProps) 
    _init(config?: APPCategories_ConstructProps): void
}

interface AccessRule_ConstructProps extends Entry_ConstructProps {

    // Own constructor properties of GData-0.0.GData.AccessRule

    /**
     * The role of the person concerned by this ACL. By default, this can only be %GDATA_ACCESS_ROLE_NONE. Services may extend it with
     * their own namespaced roles.
     */
    role?: string | null
    /**
     * Specifies to whom this access rule applies. For example, %GDATA_ACCESS_SCOPE_USER or %GDATA_ACCESS_SCOPE_DEFAULT.
     */
    scope_type?: string | null
    /**
     * A value representing the user who is represented by the access rule, such as an
     * e-mail address for users, or a domain name for domains.
     * 
     * This must be %NULL if and only if #GDataAccessRule:scope-type is %GDATA_ACCESS_SCOPE_DEFAULT.
     */
    scope_value?: string | null
}

interface AccessRule {

    // Own properties of GData-0.0.GData.AccessRule

    /**
     * The last time the access rule was edited. If the rule has not been edited yet, the content indicates the time it was created.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited">
     * Atom Publishing Protocol specification</ulink>.
     */
    readonly edited: number
    /**
     * An optional authorisation key required to access this item with the given scope. If set, this restricts
     * access to those principals who have a copy of the key. The key is generated server-side and cannot be
     * modified by the client. If no authorisation key is set (and hence none is needed for access to the item),
     * this will be %NULL.
     */
    readonly key: string
    /**
     * The role of the person concerned by this ACL. By default, this can only be %GDATA_ACCESS_ROLE_NONE. Services may extend it with
     * their own namespaced roles.
     */
    role: string
    /**
     * Specifies to whom this access rule applies. For example, %GDATA_ACCESS_SCOPE_USER or %GDATA_ACCESS_SCOPE_DEFAULT.
     */
    scope_type: string
    /**
     * A value representing the user who is represented by the access rule, such as an
     * e-mail address for users, or a domain name for domains.
     * 
     * This must be %NULL if and only if #GDataAccessRule:scope-type is %GDATA_ACCESS_SCOPE_DEFAULT.
     */
    scope_value: string

    // Own fields of GData-0.0.GData.AccessRule

    parent: Entry
    priv: AccessRulePrivate

    // Owm methods of GData-0.0.GData.AccessRule

    /**
     * Gets the #GDataAccessRule:edited property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_edited(): number
    /**
     * Gets the #GDataAccessRule:key property.
     */
    get_key(): string
    /**
     * Gets the #GDataAccessRule:role property.
     */
    get_role(): string
    /**
     * Gets the #GDataAccessRule:scope-type and #GDataAccessRule:scope-value properties.
     */
    get_scope(): [ /* type */ string, /* value */ string ]
    /**
     * Sets the #GDataAccessRule:role property to `role`. `role` must be a non-empty string, such as %GDATA_ACCESS_ROLE_NONE.
     * 
     * Set `role` to %NULL to unset the property in the access rule.
     * @param role a new role, or %NULL
     */
    set_role(role: string): void
    /**
     * Sets the #GDataAccessRule:scope-type property to `type` and the #GDataAccessRule:scope-value property to `value`.
     * 
     * Set `scope_value` to %NULL to unset the #GDataAccessRule:scope-value property in the access rule. `type` cannot
     * be %NULL. `scope_value` must be %NULL if `type` is <literal>default</literal>, and non-%NULL otherwise.
     * 
     * See the
     * <ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/acl">online
     * documentation</ulink> for more information.
     * @param type a new scope type
     * @param value a new scope value, or %NULL
     */
    set_scope(type: string, value: string | null): void

    // Class property signals of GData-0.0.GData.AccessRule

    connect(sigName: "notify::edited", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::edited", ...args: any[]): void
    connect(sigName: "notify::key", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::scope-type", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-type", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope-type", ...args: any[]): void
    connect(sigName: "notify::scope-value", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-value", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope-value", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataAccessRule structure are private and should never be accessed directly.
 * @class 
 */
class AccessRule extends Entry {

    // Own properties of GData-0.0.GData.AccessRule

    static name: string
    static $gtype: GObject.GType<AccessRule>

    // Constructors of GData-0.0.GData.AccessRule

    constructor(config?: AccessRule_ConstructProps) 
    /**
     * Creates a new #GDataAccessRule with the given ID and default properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    constructor(id: string) 
    /**
     * Creates a new #GDataAccessRule with the given ID and default properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    static new(id: string): AccessRule

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: AccessRule_ConstructProps): void
}

interface Author_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.Author

    /**
     * An e-mail address associated with the person.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     */
    email_address?: string | null
    /**
     * A human-readable name for the person.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     */
    name?: string | null
    /**
     * An IRI associated with the person.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     */
    uri?: string | null
}

interface Author extends Comparable {

    // Own properties of GData-0.0.GData.Author

    /**
     * An e-mail address associated with the person.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     */
    email_address: string
    /**
     * A human-readable name for the person.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     */
    name: string
    /**
     * An IRI associated with the person.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     */
    uri: string

    // Own fields of GData-0.0.GData.Author

    parent: Parsable
    priv: AuthorPrivate

    // Owm methods of GData-0.0.GData.Author

    /**
     * Gets the #GDataAuthor:email-address property. If the e-mail address is non-%NULL, it will be non-empty.
     */
    get_email_address(): string
    /**
     * Gets the #GDataAuthor:name property. The name will always be a non-%NULL, non-empty string.
     */
    get_name(): string
    /**
     * Gets the #GDataAuthor:uri property. If the URI is non-%NULL, it will be non-empty.
     */
    get_uri(): string
    /**
     * Sets the #GDataAuthor:email-address property to `email_address`. `email_address` must be %NULL or non-empty.
     * 
     * Set `email_address` to %NULL to unset the property in the author.
     * @param email_address the new e-mail address for the author, or %NULL
     */
    set_email_address(email_address: string | null): void
    /**
     * Sets the #GDataAuthor:name property to `name`. `name` must be non-%NULL and non-empty.
     * @param name the new name for the author
     */
    set_name(name: string): void
    /**
     * Sets the #GDataAuthor:uri property to `uri`. `uri` must be %NULL or non-empty.
     * 
     * Set `uri` to %NULL to unset the property in the author.
     * @param uri the new URI for the author, or %NULL
     */
    set_uri(uri: string | null): void

    // Class property signals of GData-0.0.GData.Author

    connect(sigName: "notify::email-address", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataAuthor structure are private and should never be accessed directly.
 * @class 
 */
class Author extends Parsable {

    // Own properties of GData-0.0.GData.Author

    static name: string
    static $gtype: GObject.GType<Author>

    // Constructors of GData-0.0.GData.Author

    constructor(config?: Author_ConstructProps) 
    /**
     * Creates a new #GDataAuthor. More information is available in the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     * 
     * `name` must be non-%NULL and non-empty.
     * @constructor 
     * @param name the author's name
     * @param uri an IRI describing the author, or %NULL
     * @param email_address the author's e-mail address, or %NULL
     */
    constructor(name: string, uri: string | null, email_address: string | null) 
    /**
     * Creates a new #GDataAuthor. More information is available in the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     * 
     * `name` must be non-%NULL and non-empty.
     * @constructor 
     * @param name the author's name
     * @param uri an IRI describing the author, or %NULL
     * @param email_address the author's e-mail address, or %NULL
     */
    static new(name: string, uri: string | null, email_address: string | null): Author
    _init(config?: Author_ConstructProps): void
}

interface AuthorizationDomain_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GData-0.0.GData.AuthorizationDomain

    /**
     * A URI detailing the scope of the authorization domain, as enumerated in the
     * <ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#AuthScopes">online documentation</ulink>.
     */
    scope?: string | null
    /**
     * The name of the service which contains the authorization domain, as enumerated in the
     * <ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#clientlogin">online documentation</ulink>.
     */
    service_name?: string | null
}

interface AuthorizationDomain {

    // Own properties of GData-0.0.GData.AuthorizationDomain

    /**
     * A URI detailing the scope of the authorization domain, as enumerated in the
     * <ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#AuthScopes">online documentation</ulink>.
     */
    readonly scope: string
    /**
     * The name of the service which contains the authorization domain, as enumerated in the
     * <ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#clientlogin">online documentation</ulink>.
     */
    readonly service_name: string

    // Owm methods of GData-0.0.GData.AuthorizationDomain

    /**
     * Returns a URI detailing the scope of the authorization domain. See #GDataAuthorizationDomain:scope for more details.
     */
    get_scope(): string
    /**
     * Returns the name of the service containing the authorization domain. See #GDataAuthorizationDomain:service-name for more details.
     */
    get_service_name(): string

    // Class property signals of GData-0.0.GData.AuthorizationDomain

    connect(sigName: "notify::scope", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataAuthorizationDomain structure are private and should never be accessed directly.
 * @class 
 */
class AuthorizationDomain extends GObject.Object {

    // Own properties of GData-0.0.GData.AuthorizationDomain

    static name: string
    static $gtype: GObject.GType<AuthorizationDomain>

    // Constructors of GData-0.0.GData.AuthorizationDomain

    constructor(config?: AuthorizationDomain_ConstructProps) 
    _init(config?: AuthorizationDomain_ConstructProps): void
}

interface BatchOperation_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GData-0.0.GData.BatchOperation

    /**
     * The authorization domain for the batch operation, against which the #GDataService:authorizer for the #GDataBatchOperation:service should be
     * authorized. This may be %NULL if authorization is not needed for any of the requests in the batch operation.
     * 
     * All requests in the batch operation must be authorizable under this single authorization domain. If requests need different authorization
     * domains, they must be performed in different batch operations.
     */
    authorization_domain?: AuthorizationDomain | null
    /**
     * The feed URI that this batch operation will be sent to.
     */
    feed_uri?: string | null
    /**
     * The service this batch operation is attached to.
     */
    service?: Service | null
}

interface BatchOperation {

    // Own properties of GData-0.0.GData.BatchOperation

    /**
     * The authorization domain for the batch operation, against which the #GDataService:authorizer for the #GDataBatchOperation:service should be
     * authorized. This may be %NULL if authorization is not needed for any of the requests in the batch operation.
     * 
     * All requests in the batch operation must be authorizable under this single authorization domain. If requests need different authorization
     * domains, they must be performed in different batch operations.
     */
    readonly authorization_domain: AuthorizationDomain
    /**
     * The feed URI that this batch operation will be sent to.
     */
    readonly feed_uri: string
    /**
     * The service this batch operation is attached to.
     */
    readonly service: Service

    // Own fields of GData-0.0.GData.BatchOperation

    parent: GObject.Object
    priv: BatchOperationPrivate

    // Owm methods of GData-0.0.GData.BatchOperation

    /**
     * Add an entry to the #GDataBatchOperation, to be deleted on the server when the operation is run. `entry` is reffed by the function, so may be freed
     * after it returns.
     * 
     * Note that a single batch operation should not operate on a given #GDataEntry more than once, as there's no guarantee about the order in which the
     * batch operation's operations will be performed.
     * 
     * `callback` will be called as specified in the documentation for gdata_batch_operation_add_query(), with an `operation_type` of
     * %GDATA_BATCH_OPERATION_DELETION.
     * @param entry the #GDataEntry to delete
     * @param callback a #GDataBatchOperationCallback to call when the deletion is finished, or %NULL
     */
    add_deletion(entry: Entry, callback: BatchOperationCallback): number
    /**
     * Add an entry to the #GDataBatchOperation, to be inserted on the server when the operation is run. The insertion will return the inserted version
     * of `entry`. `entry` is reffed by the function, so may be freed after it returns.
     * 
     * `callback` will be called as specified in the documentation for gdata_batch_operation_add_query(), with an `operation_type` of
     * %GDATA_BATCH_OPERATION_INSERTION.
     * @param entry the #GDataEntry to insert
     * @param callback a #GDataBatchOperationCallback to call when the insertion is finished, or %NULL
     */
    add_insertion(entry: Entry, callback: BatchOperationCallback): number
    /**
     * Add a query to the #GDataBatchOperation, to be executed when the operation is run. The query will return a #GDataEntry (of subclass type
     * `entry_type)` representing the given entry `id`. The ID is of the same format as that returned by gdata_entry_get_id().
     * 
     * Note that a single batch operation should not operate on a given #GDataEntry more than once, as there's no guarantee about the order in which the
     * batch operation's operations will be performed.
     * 
     * `callback` will be called when the #GDataBatchOperation is run with gdata_batch_operation_run() (in which case it will be called in the thread which
     * ran the batch operation), or with gdata_batch_operation_run_async() (in which case it will be called in an idle handler in the main thread). The
     * `operation_id` passed to the callback will match the return value of gdata_batch_operation_add_query(), and the `operation_type` will be
     * %GDATA_BATCH_OPERATION_QUERY. If the query was successful, the resulting entry will be passed to the callback function as `entry,` and `error` will
     * be %NULL. If, however, the query was unsuccessful, `entry` will be %NULL and `error` will contain a #GError detailing what went wrong.
     * @param id the ID of the entry being queried for
     * @param entry_type the type of the entry which will be returned
     * @param callback a #GDataBatchOperationCallback to call when the query is finished, or %NULL
     */
    add_query(id: string, entry_type: GObject.GType, callback: BatchOperationCallback): number
    /**
     * Add an entry to the #GDataBatchOperation, to be updated on the server when the operation is run. The update will return the updated version of
     * `entry`. `entry` is reffed by the function, so may be freed after it returns.
     * 
     * Note that a single batch operation should not operate on a given #GDataEntry more than once, as there's no guarantee about the order in which the
     * batch operation's operations will be performed.
     * 
     * `callback` will be called as specified in the documentation for gdata_batch_operation_add_query(), with an `operation_type` of
     * %GDATA_BATCH_OPERATION_UPDATE.
     * @param entry the #GDataEntry to update
     * @param callback a #GDataBatchOperationCallback to call when the update is finished, or %NULL
     */
    add_update(entry: Entry, callback: BatchOperationCallback): number
    /**
     * Gets the #GDataBatchOperation:authorization-domain property.
     */
    get_authorization_domain(): AuthorizationDomain | null
    /**
     * Gets the #GDataBatchOperation:feed-uri property.
     */
    get_feed_uri(): string
    /**
     * Gets the #GDataBatchOperation:service property.
     */
    get_service(): Service
    /**
     * Run the #GDataBatchOperation synchronously. This will send all the operations in the batch operation to the server, and call their respective
     * callbacks synchronously (i.e. before gdata_batch_operation_run() returns, and in the same thread that called gdata_batch_operation_run()) as the
     * server returns results for each operation.
     * 
     * The callbacks for all of the operations in the batch operation are always guaranteed to be called, even if the batch operation as a whole fails.
     * Each callback will be called exactly once for each time gdata_batch_operation_run() is called.
     * 
     * The return value of the function indicates whether the overall batch operation was successful, and doesn't indicate the status of any of the
     * operations it comprises. gdata_batch_operation_run() could return %TRUE even if all of its operations failed.
     * 
     * `cancellable` can be used to cancel the entire batch operation any time before or during the network activity. If `cancellable` is cancelled
     * after network activity has finished, gdata_batch_operation_run() will continue and finish as normal.
     * @param cancellable a #GCancellable, or %NULL
     */
    run(cancellable: Gio.Cancellable | null): boolean
    /**
     * Run the #GDataBatchOperation asynchronously. This will send all the operations in the batch operation to the server, and call their respective
     * callbacks asynchronously (i.e. in idle functions in the main thread, usually after gdata_batch_operation_run_async() has returned) as the
     * server returns results for each operation. `self` is reffed when this function is called, so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_batch_operation_run(), which is the synchronous version of this function.
     * 
     * When the entire batch operation is finished, `callback` will be called. You can then call gdata_batch_operation_run_finish() to get the results of
     * the batch operation.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the batch operation is finished, or %NULL
     */
    run_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous batch operation run with gdata_batch_operation_run_async().
     * 
     * Return values are as for gdata_batch_operation_run().
     * @param async_result a #GAsyncResult
     */
    run_finish(async_result: Gio.AsyncResult): boolean

    // Class property signals of GData-0.0.GData.BatchOperation

    connect(sigName: "notify::authorization-domain", callback: (($obj: BatchOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorization-domain", callback: (($obj: BatchOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authorization-domain", ...args: any[]): void
    connect(sigName: "notify::feed-uri", callback: (($obj: BatchOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::feed-uri", callback: (($obj: BatchOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::feed-uri", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: BatchOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: BatchOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataBatchOperation structure are private and should never be accessed directly.
 * @class 
 */
class BatchOperation extends GObject.Object {

    // Own properties of GData-0.0.GData.BatchOperation

    static name: string
    static $gtype: GObject.GType<BatchOperation>

    // Constructors of GData-0.0.GData.BatchOperation

    constructor(config?: BatchOperation_ConstructProps) 
    _init(config?: BatchOperation_ConstructProps): void
}

interface CalendarAccessRule_ConstructProps extends AccessRule_ConstructProps {
}

interface CalendarAccessRule {

    // Conflicting properties

    priv: any

    // Own fields of GData-0.0.GData.CalendarAccessRule

    parent: AccessRule

    // Class property signals of GData-0.0.GData.CalendarAccessRule

    connect(sigName: "notify::edited", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::edited", ...args: any[]): void
    connect(sigName: "notify::key", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::scope-type", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-type", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope-type", ...args: any[]): void
    connect(sigName: "notify::scope-value", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-value", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope-value", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataCalendarAccessRule structure are private and
 * should never be accessed directly.
 * @class 
 */
class CalendarAccessRule extends AccessRule {

    // Own properties of GData-0.0.GData.CalendarAccessRule

    static name: string
    static $gtype: GObject.GType<CalendarAccessRule>

    // Constructors of GData-0.0.GData.CalendarAccessRule

    constructor(config?: CalendarAccessRule_ConstructProps) 
    /**
     * Creates a new #GDataCalendarAccessRule with the given ID and default
     * properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    constructor(id: string) 
    /**
     * Creates a new #GDataCalendarAccessRule with the given ID and default
     * properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    static new(id: string): CalendarAccessRule

    // Overloads of new

    /**
     * Creates a new #GDataAccessRule with the given ID and default properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    static new(id: string): AccessRule
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: CalendarAccessRule_ConstructProps): void
}

interface CalendarCalendar_ConstructProps extends AccessHandler_ConstructProps, Entry_ConstructProps {

    // Own constructor properties of GData-0.0.GData.CalendarCalendar

    /**
     * The background color used to highlight the calendar in the user’s
     * browser. This used to be restricted to a limited set of colours, but
     * since 0.17.2 may be any RGB colour.
     */
    color?: Color | null
    /**
     * Indicates whether the calendar is visible.
     */
    is_hidden?: boolean | null
    /**
     * Indicates whether the calendar is selected.
     */
    is_selected?: boolean | null
    /**
     * The timezone in which the calendar's times are given. This is a timezone name in tz database notation: <ulink type="http"
     * url="http://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones">reference</ulink>.
     */
    timezone?: string | null
}

interface CalendarCalendar extends AccessHandler {

    // Own properties of GData-0.0.GData.CalendarCalendar

    /**
     * Indicates the access level the current user has to the calendar. For example: %GDATA_CALENDAR_ACCESS_ROLE_READ or
     * %GDATA_CALENDAR_ACCESS_ROLE_FREE_BUSY. The "current user" is the one authenticated against the service's #GDataService:authorizer,
     * or the guest user.
     */
    readonly access_level: string
    /**
     * The background color used to highlight the calendar in the user’s
     * browser. This used to be restricted to a limited set of colours, but
     * since 0.17.2 may be any RGB colour.
     */
    color: Color
    /**
     * Indicates whether the calendar is visible.
     */
    is_hidden: boolean
    /**
     * Indicates whether the calendar is selected.
     */
    is_selected: boolean
    /**
     * The timezone in which the calendar's times are given. This is a timezone name in tz database notation: <ulink type="http"
     * url="http://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones">reference</ulink>.
     */
    timezone: string

    // Own fields of GData-0.0.GData.CalendarCalendar

    parent: Entry
    priv: CalendarCalendarPrivate

    // Owm methods of GData-0.0.GData.CalendarCalendar

    /**
     * Gets the #GDataCalendarCalendar:access-level property.
     */
    get_access_level(): string
    /**
     * Gets the #GDataCalendarCalendar:color property and puts it in `color`.
     */
    get_color(): /* color */ Color
    /**
     * Gets the #GDataCalendarCalendar:timezone property.
     */
    get_timezone(): string
    /**
     * Sets the #GDataCalendarCalendar:color property to `color`.
     * @param color a new #GDataColor
     */
    set_color(color: Color): void
    /**
     * Sets the #GDataCalendarCalendar:is-hidden property to `is_hidden`.
     * @param is_hidden %TRUE to hide the calendar, %FALSE otherwise
     */
    set_is_hidden(is_hidden: boolean): void
    /**
     * Sets the #GDataCalendarCalendar:is-selected property to `is_selected`.
     * @param is_selected %TRUE to select the calendar, %FALSE otherwise
     */
    set_is_selected(is_selected: boolean): void
    /**
     * Sets the #GDataCalendarCalendar:timezone property to the new timezone, `_timezone`.
     * 
     * Set `_timezone` to %NULL to unset the property in the calendar.
     * @param _timezone a new timezone, or %NULL
     */
    set_timezone(_timezone: string | null): void

    // Class property signals of GData-0.0.GData.CalendarCalendar

    connect(sigName: "notify::access-level", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-level", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::access-level", ...args: any[]): void
    connect(sigName: "notify::color", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::is-hidden", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-hidden", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-hidden", ...args: any[]): void
    connect(sigName: "notify::is-selected", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-selected", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-selected", ...args: any[]): void
    connect(sigName: "notify::timezone", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timezone", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timezone", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataCalendarCalendar structure are private and should never be accessed directly.
 * @class 
 */
class CalendarCalendar extends Entry {

    // Own properties of GData-0.0.GData.CalendarCalendar

    static name: string
    static $gtype: GObject.GType<CalendarCalendar>

    // Constructors of GData-0.0.GData.CalendarCalendar

    constructor(config?: CalendarCalendar_ConstructProps) 
    /**
     * Creates a new #GDataCalendarCalendar with the given ID and default properties.
     * @constructor 
     * @param id the calendar's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataCalendarCalendar with the given ID and default properties.
     * @constructor 
     * @param id the calendar's ID, or %NULL
     */
    static new(id: string | null): CalendarCalendar

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: CalendarCalendar_ConstructProps): void
}

interface CalendarEvent_ConstructProps extends Entry_ConstructProps {

    // Own constructor properties of GData-0.0.GData.CalendarEvent

    /**
     * Indicates whether anyone can invite themselves to the event, by adding themselves to the attendee list.
     */
    anyone_can_add_self?: boolean | null
    /**
     * Indicates whether attendees may invite others to the event.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanInviteOthers">GData specification</ulink>.
     */
    guests_can_invite_others?: boolean | null
    /**
     * Indicates whether attendees may modify the original event, so that changes are visible to organizers and other attendees.
     * Otherwise, any changes made by attendees will be restricted to that attendee's calendar.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanInviteOthers">
     * GData specification</ulink>.
     */
    guests_can_modify?: boolean | null
    /**
     * Indicates whether attendees can see other people invited to the event.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanSeeOtherGuests">
     * GData specification</ulink>.
     */
    guests_can_see_guests?: boolean | null
    /**
     * Represents the dates and times when a recurring event takes place. The returned string is in iCal format, as a list of properties.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdRecurrence">
     * GData specification</ulink>.
     * 
     * Note: gdata_calendar_event_add_time() and gdata_calendar_event_set_recurrence() are mutually
     * exclusive. See the documentation for gdata_calendar_event_add_time() for details.
     */
    recurrence?: string | null
    /**
     * The revision sequence number of the event as defined in Section 4.8.7.4 of <ulink type="http"
     * url="http://www.ietf.org/rfc/rfc2445.txt">RFC 2445</ulink>.
     */
    sequence?: number | null
    /**
     * The scheduling status of the event. For example: %GDATA_GD_EVENT_STATUS_CANCELED or %GDATA_GD_EVENT_STATUS_CONFIRMED.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdEventStatus">
     * GData specification</ulink>.
     */
    status?: string | null
    /**
     * How the event is marked as consuming time on a calendar. For example: %GDATA_GD_EVENT_TRANSPARENCY_OPAQUE or
     * %GDATA_GD_EVENT_TRANSPARENCY_TRANSPARENT.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdTransparency">
     * GData specification</ulink>.
     */
    transparency?: string | null
    /**
     * The globally unique identifier (UID) of the event as defined in Section 4.8.4.7 of <ulink type="http"
     * url="http://www.ietf.org/rfc/rfc2445.txt">RFC 2445</ulink>.
     */
    uid?: string | null
    /**
     * The event's visibility to calendar users. For example: %GDATA_GD_EVENT_VISIBILITY_PUBLIC or %GDATA_GD_EVENT_VISIBILITY_DEFAULT.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdVisibility">
     * GData specification</ulink>.
     */
    visibility?: string | null
}

interface CalendarEvent {

    // Own properties of GData-0.0.GData.CalendarEvent

    /**
     * Indicates whether anyone can invite themselves to the event, by adding themselves to the attendee list.
     */
    anyone_can_add_self: boolean
    /**
     * The last time the event was edited. If the event has not been edited yet, the content indicates the time it was created.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited">
     * Atom Publishing Protocol specification</ulink>.
     */
    readonly edited: number
    /**
     * Indicates whether attendees may invite others to the event.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanInviteOthers">GData specification</ulink>.
     */
    guests_can_invite_others: boolean
    /**
     * Indicates whether attendees may modify the original event, so that changes are visible to organizers and other attendees.
     * Otherwise, any changes made by attendees will be restricted to that attendee's calendar.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanInviteOthers">
     * GData specification</ulink>.
     */
    guests_can_modify: boolean
    /**
     * Indicates whether attendees can see other people invited to the event.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanSeeOtherGuests">
     * GData specification</ulink>.
     */
    guests_can_see_guests: boolean
    /**
     * The event ID for the original event, if this event is an exception to a recurring event.
     */
    readonly original_event_id: string
    /**
     * The event URI for the original event, if this event is an exception to a recurring event.
     */
    readonly original_event_uri: string
    /**
     * Represents the dates and times when a recurring event takes place. The returned string is in iCal format, as a list of properties.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdRecurrence">
     * GData specification</ulink>.
     * 
     * Note: gdata_calendar_event_add_time() and gdata_calendar_event_set_recurrence() are mutually
     * exclusive. See the documentation for gdata_calendar_event_add_time() for details.
     */
    recurrence: string
    /**
     * The revision sequence number of the event as defined in Section 4.8.7.4 of <ulink type="http"
     * url="http://www.ietf.org/rfc/rfc2445.txt">RFC 2445</ulink>.
     */
    sequence: number
    /**
     * The scheduling status of the event. For example: %GDATA_GD_EVENT_STATUS_CANCELED or %GDATA_GD_EVENT_STATUS_CONFIRMED.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdEventStatus">
     * GData specification</ulink>.
     */
    status: string
    /**
     * How the event is marked as consuming time on a calendar. For example: %GDATA_GD_EVENT_TRANSPARENCY_OPAQUE or
     * %GDATA_GD_EVENT_TRANSPARENCY_TRANSPARENT.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdTransparency">
     * GData specification</ulink>.
     */
    transparency: string
    /**
     * The globally unique identifier (UID) of the event as defined in Section 4.8.4.7 of <ulink type="http"
     * url="http://www.ietf.org/rfc/rfc2445.txt">RFC 2445</ulink>.
     */
    uid: string
    /**
     * The event's visibility to calendar users. For example: %GDATA_GD_EVENT_VISIBILITY_PUBLIC or %GDATA_GD_EVENT_VISIBILITY_DEFAULT.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdVisibility">
     * GData specification</ulink>.
     */
    visibility: string

    // Own fields of GData-0.0.GData.CalendarEvent

    parent: Entry
    priv: CalendarEventPrivate

    // Owm methods of GData-0.0.GData.CalendarEvent

    /**
     * Adds the person `who` to the event as a guest (attendee, organiser, performer, etc.), and increments its reference count.
     * 
     * Duplicate people will not be added to the list.
     * @param who a #GDataGDWho to add
     */
    add_person(who: GDWho): void
    /**
     * Adds the place `where` to the event as a location and increments its reference count.
     * 
     * Duplicate places will not be added to the list.
     * @param where a #GDataGDWhere to add
     */
    add_place(where: GDWhere): void
    /**
     * Adds `when` to the event as a time period when the event happens, and increments its reference count.
     * 
     * Duplicate times will not be added to the list.
     * 
     * Note: gdata_calendar_event_add_time() and gdata_calendar_event_set_recurrence() are mutually
     * exclusive, as the server doesn't support positive exceptions to recurrence rules. If recurrences
     * are required, use gdata_calendar_event_set_recurrence(). Note that this means reminders cannot
     * be set for the event, as they are only supported by #GDataGDWhen. No checks are performed for
     * these forbidden conditions, as to do so would break libgdata's API; if both a recurrence is set
     * and a specific time is added, the server will return an error when the #GDataCalendarEvent is
     * inserted using gdata_service_insert_entry().
     * @param when a #GDataGDWhen to add
     */
    add_time(when: GDWhen): void
    /**
     * Gets the #GDataCalendarEvent:anyone-can-add-self property.
     */
    get_anyone_can_add_self(): boolean
    /**
     * Gets the #GDataCalendarEvent:edited property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_edited(): number
    /**
     * Gets the #GDataCalendarEvent:guests-can-invite-others property.
     */
    get_guests_can_invite_others(): boolean
    /**
     * Gets the #GDataCalendarEvent:guests-can-modify property.
     */
    get_guests_can_modify(): boolean
    /**
     * Gets the #GDataCalendarEvent:guests-can-see-guests property.
     */
    get_guests_can_see_guests(): boolean
    /**
     * Gets details of the original event, if this event is an exception to a recurring event. The original
     * event's ID and the URI of the event's XML are returned in `event_id` and `event_uri,` respectively.
     * 
     * If this event is not an exception to a recurring event, `event_id` and `event_uri` will be set to %NULL.
     * See gdata_calendar_event_is_exception() to determine more simply whether an event is an exception to a
     * recurring event.
     * 
     * If both `event_id` and `event_uri` are %NULL, this function is a no-op. Otherwise, they should both be
     * freed with g_free().
     */
    get_original_event_details(): [ /* event_id */ string, /* event_uri */ string ]
    /**
     * Gets a list of the people attending the event.
     */
    get_people(): GDWho[]
    /**
     * Gets a list of the locations associated with the event.
     */
    get_places(): GDWhere[]
    /**
     * Gets the first time period associated with the event, conveniently returning just its start and
     * end times if required.
     * 
     * If there are no time periods, or more than one time period, associated with the event, %FALSE will
     * be returned, and the parameters will remain unmodified.
     */
    get_primary_time(): [ /* returnType */ boolean, /* start_time */ number, /* end_time */ number, /* when */ GDWhen ]
    /**
     * Gets the #GDataCalendarEvent:recurrence property.
     */
    get_recurrence(): string
    /**
     * Gets the #GDataCalendarEvent:sequence property.
     */
    get_sequence(): number
    /**
     * Gets the #GDataCalendarEvent:status property.
     */
    get_status(): string
    /**
     * Gets a list of the time periods associated with the event.
     */
    get_times(): GDWhen[]
    /**
     * Gets the #GDataCalendarEvent:transparency property.
     */
    get_transparency(): string
    /**
     * Gets the #GDataCalendarEvent:uid property.
     */
    get_uid(): string
    /**
     * Gets the #GDataCalendarEvent:visibility property.
     */
    get_visibility(): string
    /**
     * Determines whether the event is an exception to a recurring event. If it is, details of the original event
     * can be retrieved using gdata_calendar_event_get_original_event_details().
     */
    is_exception(): boolean
    /**
     * Sets the #GDataCalendarEvent:anyone-can-add-self property to `anyone_can_add_self`.
     * @param anyone_can_add_self %TRUE if anyone can add themselves as an attendee to the event, %FALSE otherwise
     */
    set_anyone_can_add_self(anyone_can_add_self: boolean): void
    /**
     * Sets the #GDataCalendarEvent:guests-can-invite-others property to `guests_can_invite_others`.
     * @param guests_can_invite_others %TRUE if attendees can invite others to the event, %FALSE otherwise
     */
    set_guests_can_invite_others(guests_can_invite_others: boolean): void
    /**
     * Sets the #GDataCalendarEvent:guests-can-modify property to `guests_can_modify`.
     * @param guests_can_modify %TRUE if attendees can modify the original event, %FALSE otherwise
     */
    set_guests_can_modify(guests_can_modify: boolean): void
    /**
     * Sets the #GDataCalendarEvent:guests-can-see-guests property to `guests_can_see_guests`.
     * @param guests_can_see_guests %TRUE if attendees can see who's attending the event, %FALSE otherwise
     */
    set_guests_can_see_guests(guests_can_see_guests: boolean): void
    /**
     * Sets the #GDataCalendarEvent:recurrence property to the new recurrence, `recurrence`.
     * 
     * Set `recurrence` to %NULL to unset the property in the event.
     * 
     * Note: gdata_calendar_event_add_time() and gdata_calendar_event_set_recurrence() are mutually
     * exclusive. See the documentation for gdata_calendar_event_add_time() for details.
     * @param recurrence a new event recurrence, or %NULL
     */
    set_recurrence(recurrence: string | null): void
    /**
     * Sets the #GDataCalendarEvent:sequence property to the new sequence number, `sequence`.
     * @param sequence a new sequence number, or <code class="literal">0</code>
     */
    set_sequence(sequence: number): void
    /**
     * Sets the #GDataCalendarEvent:status property to the new status, `status`.
     * 
     * Set `status` to %NULL to unset the property in the event.
     * @param status a new event status, or %NULL
     */
    set_status(status: string | null): void
    /**
     * Sets the #GDataCalendarEvent:transparency property to the new transparency, `transparency`.
     * 
     * Set `transparency` to %NULL to unset the property in the event.
     * @param transparency a new event transparency, or %NULL
     */
    set_transparency(transparency: string | null): void
    /**
     * Sets the #GDataCalendarEvent:uid property to the new UID, `uid`.
     * 
     * Set `uid` to %NULL to unset the property in the event.
     * @param uid a new event UID, or %NULL
     */
    set_uid(uid: string | null): void
    /**
     * Sets the #GDataCalendarEvent:visibility property to the new visibility, `visibility`.
     * 
     * Set `visibility` to %NULL to unset the property in the event.
     * @param visibility a new event visibility, or %NULL
     */
    set_visibility(visibility: string | null): void

    // Class property signals of GData-0.0.GData.CalendarEvent

    connect(sigName: "notify::anyone-can-add-self", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anyone-can-add-self", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anyone-can-add-self", ...args: any[]): void
    connect(sigName: "notify::edited", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::edited", ...args: any[]): void
    connect(sigName: "notify::guests-can-invite-others", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guests-can-invite-others", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::guests-can-invite-others", ...args: any[]): void
    connect(sigName: "notify::guests-can-modify", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guests-can-modify", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::guests-can-modify", ...args: any[]): void
    connect(sigName: "notify::guests-can-see-guests", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guests-can-see-guests", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::guests-can-see-guests", ...args: any[]): void
    connect(sigName: "notify::original-event-id", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::original-event-id", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::original-event-id", ...args: any[]): void
    connect(sigName: "notify::original-event-uri", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::original-event-uri", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::original-event-uri", ...args: any[]): void
    connect(sigName: "notify::recurrence", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recurrence", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::recurrence", ...args: any[]): void
    connect(sigName: "notify::sequence", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sequence", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sequence", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::transparency", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transparency", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transparency", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataCalendarEvent structure are private and should never be accessed directly.
 * @class 
 */
class CalendarEvent extends Entry {

    // Own properties of GData-0.0.GData.CalendarEvent

    static name: string
    static $gtype: GObject.GType<CalendarEvent>

    // Constructors of GData-0.0.GData.CalendarEvent

    constructor(config?: CalendarEvent_ConstructProps) 
    /**
     * Creates a new #GDataCalendarEvent with the given ID and default properties.
     * @constructor 
     * @param id the event's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataCalendarEvent with the given ID and default properties.
     * @constructor 
     * @param id the event's ID, or %NULL
     */
    static new(id: string | null): CalendarEvent

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: CalendarEvent_ConstructProps): void
}

interface CalendarFeed_ConstructProps extends Feed_ConstructProps {
}

interface CalendarFeed {

    // Own fields of GData-0.0.GData.CalendarFeed

    parent: Feed
    priv: CalendarFeedPrivate

    // Class property signals of GData-0.0.GData.CalendarFeed

    connect(sigName: "notify::etag", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::generator", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::generator", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::items-per-page", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-per-page", ...args: any[]): void
    connect(sigName: "notify::logo", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::next-page-token", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-page-token", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::total-results", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-results", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataCalendarFeed structure are private and should never be accessed directly.
 * @class 
 */
class CalendarFeed extends Feed {

    // Own properties of GData-0.0.GData.CalendarFeed

    static name: string
    static $gtype: GObject.GType<CalendarFeed>

    // Constructors of GData-0.0.GData.CalendarFeed

    constructor(config?: CalendarFeed_ConstructProps) 
    _init(config?: CalendarFeed_ConstructProps): void
}

interface CalendarQuery_ConstructProps extends Query_ConstructProps {

    // Own constructor properties of GData-0.0.GData.CalendarQuery

    /**
     * A shortcut to request all events scheduled for the future. Overrides the
     * #GDataCalendarQuery:start-min and #GDataCalendarQuery:start-max properties.
     */
    future_events?: boolean | null
    /**
     * Specifies the maximum number of attendees to list for an event. If the actual number of attendees for an event is greater than this value,
     * only the current user and the event organiser are listed.
     */
    max_attendees?: number | null
    /**
     * Specifies order of entries in a feed. Supported values are <literal>lastmodified</literal> and
     * <literal>starttime</literal>.
     */
    order_by?: string | null
    /**
     * Whether to include deleted/cancelled events in the query feed. Deleted events have their #GDataCalendarEvent:status property set to
     * %GDATA_GD_EVENT_STATUS_CANCELED. They do not normally appear in query results.
     */
    show_deleted?: boolean | null
    /**
     * Indicates whether recurring events should be expanded or represented as a single event.
     */
    single_events?: boolean | null
    /**
     * Together with #GDataCalendarQuery:start-min, creates a timespan such that only events within the timespan are returned
     * 
     * #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max is exclusive. Events that overlap the range are
     * included. Both are specified in seconds since the UNIX epoch.
     * 
     * If not specified, the default #GDataCalendarQuery:start-max is <literal>2031-01-01</literal>.
     */
    start_max?: number | null
    /**
     * Together with #GDataCalendarQuery:start-max, creates a timespan such that only events within the timespan are returned.
     * 
     * #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max is exclusive. Events that overlap the range are
     * included. Both are specified in seconds since the UNIX epoch.
     * 
     * If not specified, the default #GDataCalendarQuery:start-min is <literal>1970-01-01</literal>.
     */
    start_min?: number | null
    /**
     * The current timezone. If this is not specified, all times are returned in UTC.
     */
    timezone?: string | null
}

interface CalendarQuery {

    // Own properties of GData-0.0.GData.CalendarQuery

    /**
     * A shortcut to request all events scheduled for the future. Overrides the
     * #GDataCalendarQuery:start-min and #GDataCalendarQuery:start-max properties.
     */
    future_events: boolean
    /**
     * Specifies the maximum number of attendees to list for an event. If the actual number of attendees for an event is greater than this value,
     * only the current user and the event organiser are listed.
     */
    max_attendees: number
    /**
     * Specifies order of entries in a feed. Supported values are <literal>lastmodified</literal> and
     * <literal>starttime</literal>.
     */
    order_by: string
    /**
     * Whether to include deleted/cancelled events in the query feed. Deleted events have their #GDataCalendarEvent:status property set to
     * %GDATA_GD_EVENT_STATUS_CANCELED. They do not normally appear in query results.
     */
    show_deleted: boolean
    /**
     * Indicates whether recurring events should be expanded or represented as a single event.
     */
    single_events: boolean
    /**
     * Together with #GDataCalendarQuery:start-min, creates a timespan such that only events within the timespan are returned
     * 
     * #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max is exclusive. Events that overlap the range are
     * included. Both are specified in seconds since the UNIX epoch.
     * 
     * If not specified, the default #GDataCalendarQuery:start-max is <literal>2031-01-01</literal>.
     */
    start_max: number
    /**
     * Together with #GDataCalendarQuery:start-max, creates a timespan such that only events within the timespan are returned.
     * 
     * #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max is exclusive. Events that overlap the range are
     * included. Both are specified in seconds since the UNIX epoch.
     * 
     * If not specified, the default #GDataCalendarQuery:start-min is <literal>1970-01-01</literal>.
     */
    start_min: number
    /**
     * The current timezone. If this is not specified, all times are returned in UTC.
     */
    timezone: string

    // Own fields of GData-0.0.GData.CalendarQuery

    parent: Query
    priv: CalendarQueryPrivate

    // Owm methods of GData-0.0.GData.CalendarQuery

    /**
     * Gets the #GDataCalendarQuery:future-events property.
     */
    get_future_events(): boolean
    /**
     * Gets the #GDataCalendarQuery:max-attendees property. If the property is unset, <code class="literal">0</code> will be returned.
     */
    get_max_attendees(): number
    /**
     * Gets the #GDataCalendarQuery:order-by property.
     */
    get_order_by(): string
    /**
     * Gets the #GDataCalendarQuery:single-events property.
     */
    get_single_events(): boolean
    /**
     * Gets the #GDataCalendarQuery:start-max property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_start_max(): number
    /**
     * Gets the #GDataCalendarQuery:start-min property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_start_min(): number
    /**
     * Gets the #GDataCalendarQuery:timezone property.
     */
    get_timezone(): string
    /**
     * Sets the #GDataCalendarQuery:future-events property of the #GDataCalendarQuery to `future_events`.
     * @param future_events %TRUE to unconditionally show future events, %FALSE otherwise
     */
    set_future_events(future_events: boolean): void
    /**
     * Sets the #GDataCalendarQuery:max-attendees property of the #GDataCalendarQuery to the new value, `max_attendees`.
     * 
     * Set `max_attendees` to <code class="literal">0</code> to unset the property in the query URI.
     * @param max_attendees a new maximum attendee count, or <code class="literal">0</code>
     */
    set_max_attendees(max_attendees: number): void
    /**
     * Sets the #GDataCalendarQuery:order-by property of the #GDataCalendarQuery to the new order by string, `order_by`.
     * 
     * Set `order_by` to %NULL to unset the property in the query URI.
     * @param order_by a new order by string, or %NULL
     */
    set_order_by(order_by: string | null): void
    /**
     * Sets the #GDataCalendarQuery:show-deleted property of the #GDataCalendarQuery.
     * @param show_deleted %TRUE to show deleted events, %FALSE otherwise
     */
    set_show_deleted(show_deleted: boolean): void
    /**
     * Sets the #GDataCalendarQuery:single-events property of the #GDataCalendarQuery to `single_events`.
     * @param single_events %TRUE to show recurring events as single events, %FALSE otherwise
     */
    set_single_events(single_events: boolean): void
    /**
     * Sets the #GDataCalendarQuery:start-max property of the #GDataCalendarQuery
     * to the new time/date, `start_max`.
     * 
     * Set `start_max` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param start_max a new maximum start time (in seconds since the UNIX epoch), or <code class="literal">-1</code>
     */
    set_start_max(start_max: number): void
    /**
     * Sets the #GDataCalendarQuery:start-min property of the #GDataCalendarQuery
     * to the new time/date, `start_min`.
     * 
     * Set `start_min` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param start_min a new minimum start time (in seconds since the UNIX epoch), or <code class="literal">-1</code>
     */
    set_start_min(start_min: number): void
    /**
     * Sets the #GDataCalendarQuery:timezone property of the #GDataCalendarQuery to the new timezone string, `timezone`.
     * 
     * Set `timezone` to %NULL to unset the property in the query URI.
     * @param _timezone a new timezone string, or %NULL
     */
    set_timezone(_timezone: string | null): void

    // Class property signals of GData-0.0.GData.CalendarQuery

    connect(sigName: "notify::future-events", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future-events", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::future-events", ...args: any[]): void
    connect(sigName: "notify::max-attendees", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-attendees", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-attendees", ...args: any[]): void
    connect(sigName: "notify::order-by", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order-by", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::order-by", ...args: any[]): void
    connect(sigName: "notify::show-deleted", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-deleted", ...args: any[]): void
    connect(sigName: "notify::single-events", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-events", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::single-events", ...args: any[]): void
    connect(sigName: "notify::start-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-max", ...args: any[]): void
    connect(sigName: "notify::start-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-min", ...args: any[]): void
    connect(sigName: "notify::timezone", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timezone", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timezone", ...args: any[]): void
    connect(sigName: "notify::author", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataCalendarQuery structure are private and should never be accessed directly.
 * @class 
 */
class CalendarQuery extends Query {

    // Own properties of GData-0.0.GData.CalendarQuery

    static name: string
    static $gtype: GObject.GType<CalendarQuery>

    // Constructors of GData-0.0.GData.CalendarQuery

    constructor(config?: CalendarQuery_ConstructProps) 
    /**
     * Creates a new #GDataCalendarQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataCalendarQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): CalendarQuery

    // Overloads of new

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    /**
     * Creates a new #GDataCalendarQuery with its #GDataQuery:q property set to `q,` and the time limits `start_min` and `start_max`
     * applied (both in seconds since the UNIX epoch).
     * @constructor 
     * @param q a query string, or %NULL
     * @param start_min a starting time for the event period, or -1
     * @param start_max an ending time for the event period, or -1
     */
    static new_with_limits(q: string | null, start_min: number, start_max: number): CalendarQuery

    // Overloads of new_with_limits

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q,` and the limits `start_index` and `max_results`
     * applied.
     * @constructor 
     * @param q a query string, or %NULL
     * @param start_index a one-based start index for the results, or <code class="literal">0</code>
     * @param max_results the maximum number of results to return, or <code class="literal">0</code>
     */
    static new_with_limits(q: string | null, start_index: number, max_results: number): Query
    _init(config?: CalendarQuery_ConstructProps): void
}

interface CalendarService_ConstructProps extends Batchable_ConstructProps, Service_ConstructProps {
}

interface CalendarService extends Batchable {

    // Own fields of GData-0.0.GData.CalendarService

    parent: Service

    // Owm methods of GData-0.0.GData.CalendarService

    /**
     * Inserts `event` by uploading it to the online calendar service, adding it to
     * the specified `calendar`.
     * 
     * For more details, see gdata_service_insert_entry().
     * @param calendar the #GDataCalendarCalendar to insert the event into
     * @param event the #GDataCalendarEvent to insert
     * @param cancellable optional #GCancellable object, or %NULL
     */
    insert_calendar_event(calendar: CalendarCalendar, event: CalendarEvent, cancellable: Gio.Cancellable | null): CalendarEvent
    /**
     * Inserts `event` by uploading it to the online calendar service, adding it to
     * the specified `calendar`. `self` and `event` are both reffed when this function
     * is called, so can safely be unreffed after this function returns.
     * 
     * `callback` should call gdata_service_insert_entry_finish() to obtain a
     * #GDataCalendarEvent representing the inserted event and to check for possible
     * errors.
     * 
     * For more details, see gdata_calendar_service_insert_event(), which is the
     * synchronous version of this function, and gdata_service_insert_entry_async(),
     * which is the base asynchronous insertion function.
     * @param calendar the #GDataCalendarCalendar to insert the event into
     * @param event the #GDataCalendarEvent to insert
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    insert_calendar_event_async(calendar: CalendarCalendar, event: CalendarEvent, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of all calendars from the authenticated account which match the given
     * `query`. It will return all calendars the user has read access to, including primary, secondary and imported
     * calendars.
     * 
     * For more details, see gdata_service_query().
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query_all_calendars(query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed
    /**
     * Queries the service to return a list of all calendars from the authenticated account which match the given
     * `query`. `self` and `query` are all reffed when this function is called, so can safely be unreffed after
     * this function returns.
     * 
     * For more details, see gdata_calendar_service_query_all_calendars(), which is the synchronous version of
     * this function, and gdata_service_query_async(), which is the base asynchronous query function.
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    query_all_calendars_async(query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of events in the given `calendar,` which match `query`.
     * 
     * For more details, see gdata_service_query().
     * @param calendar a #GDataCalendarCalendar
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query_events(calendar: CalendarCalendar, query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed
    /**
     * Queries the service to return a list of events in the given `calendar,` which match `query`. `self,` `calendar` and `query` are all reffed when this
     * function is called, so can safely be unreffed after this function returns.
     * 
     * Get the results of the query using gdata_service_query_finish() in the `callback`.
     * 
     * For more details, see gdata_calendar_service_query_events(), which is the synchronous version of this function, and gdata_service_query_async(),
     * which is the base asynchronous query function.
     * @param calendar a #GDataCalendarCalendar
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    query_events_async(calendar: CalendarCalendar, query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of calendars from the authenticated account which match the given
     * `query,` and the authenticated user owns. (i.e. They have full read/write access to the calendar, as well
     * as the ability to set permissions on the calendar.)
     * 
     * For more details, see gdata_service_query().
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query_own_calendars(query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed
    /**
     * Queries the service to return a list of calendars from the authenticated account which match the given
     * `query,` and the authenticated user owns. `self` and `query` are all reffed when this function is called,
     * so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_calendar_service_query_own_calendars(), which is the synchronous version of
     * this function, and gdata_service_query_async(), which is the base asynchronous query function.
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    query_own_calendars_async(query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void

    // Class property signals of GData-0.0.GData.CalendarService

    connect(sigName: "notify::authorizer", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataCalendarService structure are private and should never be accessed directly.
 * @class 
 */
class CalendarService extends Service {

    // Own properties of GData-0.0.GData.CalendarService

    static name: string
    static $gtype: GObject.GType<CalendarService>

    // Constructors of GData-0.0.GData.CalendarService

    constructor(config?: CalendarService_ConstructProps) 
    /**
     * Creates a new #GDataCalendarService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    constructor(authorizer: Authorizer | null) 
    /**
     * Creates a new #GDataCalendarService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    static new(authorizer: Authorizer | null): CalendarService
    _init(config?: CalendarService_ConstructProps): void
    /**
     * The primary #GDataAuthorizationDomain for interacting with Google Calendar. This will not normally need to be used, as it's used internally
     * by the #GDataCalendarService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
     * does not support natively, then this domain may be needed to authorize the requests.
     * 
     * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
     */
    static get_primary_authorization_domain(): AuthorizationDomain
}

interface Category_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.Category

    /**
     * A human-readable label for display in end-user applications.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">
     * Atom specification</ulink>.
     */
    label?: string | null
    /**
     * An IRI that identifies a categorization scheme.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">
     * Atom specification</ulink>.
     */
    scheme?: string | null
    /**
     * Identifies the category to which the entry or feed belongs.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">
     * Atom specification</ulink>.
     */
    term?: string | null
}

interface Category extends Comparable {

    // Own properties of GData-0.0.GData.Category

    /**
     * A human-readable label for display in end-user applications.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">
     * Atom specification</ulink>.
     */
    label: string
    /**
     * An IRI that identifies a categorization scheme.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">
     * Atom specification</ulink>.
     */
    scheme: string
    /**
     * Identifies the category to which the entry or feed belongs.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">
     * Atom specification</ulink>.
     */
    term: string

    // Own fields of GData-0.0.GData.Category

    parent: Parsable
    priv: CategoryPrivate

    // Owm methods of GData-0.0.GData.Category

    /**
     * Gets the #GDataCategory:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataCategory:scheme property. If the scheme is non-%NULL, it will be non-empty.
     */
    get_scheme(): string
    /**
     * Gets the #GDataCategory:term property. The term will always be a non-%NULL, non-empty string.
     */
    get_term(): string
    /**
     * Sets the #GDataCategory:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property in the category.
     * @param label the new label for the category, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataCategory:scheme property to `scheme`. `scheme` must be %NULL or non-empty.
     * 
     * Set `scheme` to %NULL to unset the property in the category.
     * @param scheme the new scheme for the category, or %NULL
     */
    set_scheme(scheme: string | null): void
    /**
     * Sets the #GDataCategory:term property to `term`. `term` must be non-%NULL and non-empty.
     * @param term the new term for the category
     */
    set_term(term: string): void

    // Class property signals of GData-0.0.GData.Category

    connect(sigName: "notify::label", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::scheme", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scheme", ...args: any[]): void
    connect(sigName: "notify::term", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::term", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::term", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataCategory structure are private and should never be accessed directly.
 * @class 
 */
class Category extends Parsable {

    // Own properties of GData-0.0.GData.Category

    static name: string
    static $gtype: GObject.GType<Category>

    // Constructors of GData-0.0.GData.Category

    constructor(config?: Category_ConstructProps) 
    /**
     * Creates a new #GDataCategory. More information is available in the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">Atom specification</ulink>.
     * 
     * `term` must be non-%NULL and non-empty. `scheme` must be %NULL or non-empty.
     * @constructor 
     * @param term a category identifier
     * @param scheme an IRI to define the categorisation scheme, or %NULL
     * @param label a human-readable label for the category, or %NULL
     */
    constructor(term: string, scheme: string | null, label: string | null) 
    /**
     * Creates a new #GDataCategory. More information is available in the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">Atom specification</ulink>.
     * 
     * `term` must be non-%NULL and non-empty. `scheme` must be %NULL or non-empty.
     * @constructor 
     * @param term a category identifier
     * @param scheme an IRI to define the categorisation scheme, or %NULL
     * @param label a human-readable label for the category, or %NULL
     */
    static new(term: string, scheme: string | null, label: string | null): Category
    _init(config?: Category_ConstructProps): void
}

interface Comment_ConstructProps extends Entry_ConstructProps {
}

interface Comment {

    // Own fields of GData-0.0.GData.Comment

    parent: Entry
    priv: CommentPrivate

    // Class property signals of GData-0.0.GData.Comment

    connect(sigName: "notify::content", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataComment structure are private and should never be accessed directly.
 * @class 
 */
class Comment extends Entry {

    // Own properties of GData-0.0.GData.Comment

    static name: string
    static $gtype: GObject.GType<Comment>

    // Constructors of GData-0.0.GData.Comment

    constructor(config?: Comment_ConstructProps) 
    _init(config?: Comment_ConstructProps): void
}

interface DocumentsAccessRule_ConstructProps extends AccessRule_ConstructProps {
}

interface DocumentsAccessRule {

    // Conflicting properties

    priv: any

    // Own fields of GData-0.0.GData.DocumentsAccessRule

    parent: AccessRule

    // Class property signals of GData-0.0.GData.DocumentsAccessRule

    connect(sigName: "notify::edited", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::edited", ...args: any[]): void
    connect(sigName: "notify::key", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::scope-type", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-type", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope-type", ...args: any[]): void
    connect(sigName: "notify::scope-value", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-value", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope-value", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsAccessRule structure are private and
 * should never be accessed directly.
 * @class 
 */
class DocumentsAccessRule extends AccessRule {

    // Own properties of GData-0.0.GData.DocumentsAccessRule

    static name: string
    static $gtype: GObject.GType<DocumentsAccessRule>

    // Constructors of GData-0.0.GData.DocumentsAccessRule

    constructor(config?: DocumentsAccessRule_ConstructProps) 
    /**
     * Creates a new #GDataDocumentsAccessRule with the given ID and default
     * properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    constructor(id: string) 
    /**
     * Creates a new #GDataDocumentsAccessRule with the given ID and default
     * properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    static new(id: string): DocumentsAccessRule

    // Overloads of new

    /**
     * Creates a new #GDataAccessRule with the given ID and default properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    static new(id: string): AccessRule
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsAccessRule_ConstructProps): void
}

interface DocumentsDocument_ConstructProps extends AccessHandler_ConstructProps, DocumentsEntry_ConstructProps {
}

interface DocumentsDocument extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsDocument

    parent: DocumentsEntry
    priv: DocumentsDocumentPrivate

    // Owm methods of GData-0.0.GData.DocumentsDocument

    /**
     * Downloads and returns the document file represented by the #GDataDocumentsDocument. If the document doesn't exist, %NULL is returned, but no error
     * is set in `error`.
     * 
     * `export_format` should be the file extension of the desired output format for the document, from the list accepted by Google Documents. For example:
     * %GDATA_DOCUMENTS_PRESENTATION_PDF, %GDATA_DOCUMENTS_SPREADSHEET_ODS or %GDATA_DOCUMENTS_TEXT_ODT.
     * 
     * If `self` is a #GDataDocumentsSpreadsheet, only the first grid, or sheet, in the spreadsheet will be downloaded for some export formats. To download
     * a specific a specific grid, use gdata_documents_spreadsheet_get_download_uri() with #GDataDownloadStream to download the grid manually. See the
     * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#downloading_spreadsheets">GData protocol
     * specification</ulink> for more information.
     * 
     * To get the content type of the downloaded file, gdata_download_stream_get_content_type() can be called on the returned #GDataDownloadStream.
     * Calling gdata_download_stream_get_content_length() on the stream will not return a meaningful result, however, as the stream is encoded in chunks,
     * rather than by content length.
     * 
     * In order to cancel the download, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GInputStream operations on the #GDataDownloadStream will not cancel the entire download; merely the read or close operation in question. See the
     * #GDataDownloadStream:cancellable for more details.
     * 
     * If the given `export_format` is unrecognised or not supported for this document, %GDATA_SERVICE_ERROR_NOT_FOUND will be returned.
     * 
     * If `service` isn't authenticated, a %GDATA_SERVICE_ERROR_AUTHENTICATION_REQUIRED will be returned.
     * 
     * If there is an error getting the document, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned.
     * @param service a #GDataDocumentsService
     * @param export_format the format in which the document should be exported
     * @param cancellable a #GCancellable for the entire download stream, or %NULL
     */
    download(service: DocumentsService, export_format: string, cancellable: Gio.Cancellable | null): DownloadStream
    /**
     * Builds and returns the download URI for the given #GDataDocumentsDocument in the desired format. Note that directly downloading the document using
     * this URI isn't possible, as authentication is required. You should instead use gdata_download_stream_new() with the URI, and use the resulting
     * #GInputStream.
     * 
     * `export_format` should be the file extension of the desired output format for the document, from the list accepted by Google Documents. For example:
     * %GDATA_DOCUMENTS_PRESENTATION_PDF, %GDATA_DOCUMENTS_SPREADSHEET_ODS or %GDATA_DOCUMENTS_TEXT_ODT.
     * 
     * If the `export_format` is not recognised or not supported for this document, %NULL is returned.
     * @param export_format the format in which the document should be exported when downloaded
     */
    get_download_uri(export_format: string): string | null
    /**
     * Gets the URI of the thumbnail for the #GDataDocumentsDocument. If no thumbnail exists for the document, %NULL will be returned.
     * 
     * The thumbnail may then be downloaded using a #GDataDownloadStream.
     * 
     * <example>
     * <title>Downloading a Document Thumbnail</title>
     * <programlisting>
     * GDataDocumentsService *service;
     * const gchar *thumbnail_uri;
     * GCancellable *cancellable;
     * GdkPixbuf *pixbuf;
     * GError *error = NULL;
     * 
     * service = get_my_documents_service ();
     * thumbnail_uri = gdata_documents_document_get_thumbnail_uri (my_document);
     * cancellable = g_cancellable_new ();
     * 
     * /<!-- -->* Prepare a download stream *<!-- -->/
     * download_stream = GDATA_DOWNLOAD_STREAM (gdata_download_stream_new (GDATA_SERVICE (service), NULL, thumbnail_uri, cancellable));
     * 
     * /<!-- -->* Download into a new GdkPixbuf. This can be cancelled using 'cancellable'. *<!-- -->/
     * pixbuf = gdk_pixbuf_new_from_stream (G_INPUT_STREAM (download_stream), NULL, &error);
     * 
     * if (error != NULL) {
     * 	/<!-- -->* Handle the error. *<!-- -->/
     * 	g_error_free (error);
     * }
     * 
     * g_object_unref (download_stream);
     * g_object_unref (cancellable);
     * 
     * /<!-- -->* Do something with the GdkPixbuf. *<!-- -->/
     * 
     * g_object_unref (pixbuf);
     * </programlisting>
     * </example>
     */
    get_thumbnail_uri(): string | null

    // Class property signals of GData-0.0.GData.DocumentsDocument

    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsDocument structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsDocument extends DocumentsEntry {

    // Own properties of GData-0.0.GData.DocumentsDocument

    static name: string
    static $gtype: GObject.GType<DocumentsDocument>

    // Constructors of GData-0.0.GData.DocumentsDocument

    constructor(config?: DocumentsDocument_ConstructProps) 
    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    static new(id: string | null): DocumentsDocument

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsDocument_ConstructProps): void
}

interface DocumentsDrawing_ConstructProps extends AccessHandler_ConstructProps, DocumentsDocument_ConstructProps {
}

interface DocumentsDrawing extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsDrawing

    parent: DocumentsDocument
    priv: DocumentsDrawingPrivate

    // Class property signals of GData-0.0.GData.DocumentsDrawing

    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsDrawing structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsDrawing extends DocumentsDocument {

    // Own properties of GData-0.0.GData.DocumentsDrawing

    static name: string
    static $gtype: GObject.GType<DocumentsDrawing>

    // Constructors of GData-0.0.GData.DocumentsDrawing

    constructor(config?: DocumentsDrawing_ConstructProps) 
    /**
     * Creates a new #GDataDocumentsDrawing with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the drawing document), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsDrawing with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the drawing document), or %NULL
     */
    static new(id: string | null): DocumentsDrawing

    // Overloads of new

    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    static new(id: string | null): DocumentsDocument
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsDrawing_ConstructProps): void
}

interface DocumentsDrive_ConstructProps extends Entry_ConstructProps {
}

interface DocumentsDrive {

    // Own properties of GData-0.0.GData.DocumentsDrive

    /**
     * The human-readable name of this shared drive.
     */
    readonly name: string

    // Conflicting properties

    parent: any
    priv: any

    // Own fields of GData-0.0.GData.DocumentsDrive

    parent_instance: Entry

    // Owm methods of GData-0.0.GData.DocumentsDrive

    /**
     * Returns the human-readable name of this shared drive.
     */
    get_name(): string | null

    // Class property signals of GData-0.0.GData.DocumentsDrive

    connect(sigName: "notify::name", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentsDrive extends Entry {

    // Own properties of GData-0.0.GData.DocumentsDrive

    static name: string
    static $gtype: GObject.GType<DocumentsDrive>

    // Constructors of GData-0.0.GData.DocumentsDrive

    constructor(config?: DocumentsDrive_ConstructProps) 
    _init(config?: DocumentsDrive_ConstructProps): void
}

interface DocumentsDriveQuery_ConstructProps extends Query_ConstructProps {
}

interface DocumentsDriveQuery {

    // Own fields of GData-0.0.GData.DocumentsDriveQuery

    parent_instance: Query

    // Class property signals of GData-0.0.GData.DocumentsDriveQuery

    connect(sigName: "notify::author", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentsDriveQuery extends Query {

    // Own properties of GData-0.0.GData.DocumentsDriveQuery

    static name: string
    static $gtype: GObject.GType<DocumentsDriveQuery>

    // Constructors of GData-0.0.GData.DocumentsDriveQuery

    constructor(config?: DocumentsDriveQuery_ConstructProps) 
    /**
     * Creates a new #GDataDocumentsDriveQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataDocumentsDriveQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): DocumentsDriveQuery

    // Overloads of new

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    _init(config?: DocumentsDriveQuery_ConstructProps): void
}

interface DocumentsEntry_ConstructProps extends AccessHandler_ConstructProps, Entry_ConstructProps {

    // Own constructor properties of GData-0.0.GData.DocumentsEntry

    /**
     * Indicates whether the document entry has been deleted (moved to the trash). Deleted documents will only
     * appear in query results if the #GDataDocumentsQuery:show-deleted property is %TRUE.
     */
    is_deleted?: boolean | null
    /**
     * Indicates whether the document entry writers can invite others to edit the document.
     */
    writers_can_invite?: boolean | null
}

interface DocumentsEntry extends AccessHandler {

    // Own properties of GData-0.0.GData.DocumentsEntry

    /**
     * Indicates whether the current user can edit this file.
     */
    readonly can_edit: boolean
    /**
     * The size of the document. This is only set for non-document files.
     * Standard formats, such as #GDataDocumentsText,
     * #GDataDocumentsSpreadsheet and #GDataDocumentsFolder are not binary
     * data and so have no size. Measured in bytes.
     */
    readonly file_size: number
    /**
     * Indicates whether the document entry has been deleted (moved to the trash). Deleted documents will only
     * appear in query results if the #GDataDocumentsQuery:show-deleted property is %TRUE.
     */
    is_deleted: boolean
    /**
     * Indicates the author of the last modification.
     */
    readonly last_modified_by: Author
    /**
     * The last time the document was viewed.
     */
    readonly last_viewed: number
    /**
     * The amount of user quota the document is occupying. Currently, only arbitrary files consume file space quota (whereas standard document
     * formats, such as #GDataDocumentsText, #GDataDocumentsSpreadsheet and #GDataDocumentsFolder don't). Measured in bytes.
     * 
     * This property will be <code class="literal">0</code> for documents which aren't consuming any quota.
     */
    readonly quota_used: number
    /**
     * The resource ID of the document. This should not normally need to be used in client code, and is mostly for internal use. To uniquely
     * identify a given document or folder, use its #GDataEntry:id.
     * 
     * Resource IDs have the form:
     * <literal><replaceable>document|drawing|pdf|spreadsheet|presentation|folder</replaceable>:<replaceable>untyped resource ID</replaceable></literal>; whereas
     * entry IDs have the form:
     * <literal>https://docs.google.com/feeds/id/<replaceable>resource ID</replaceable></literal> in version 3 of the API.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#resource_ids_explained">Google Documents
     * API reference</ulink>.
     */
    readonly resource_id: string
    /**
     * The UNIX timestamp for the time at which this file was shared with the user.
     */
    readonly shared_with_me_date: number
    /**
     * Indicates whether the document entry writers can invite others to edit the document.
     */
    writers_can_invite: boolean

    // Own fields of GData-0.0.GData.DocumentsEntry

    parent: Entry
    priv: DocumentsEntryPrivate

    // Owm methods of GData-0.0.GData.DocumentsEntry

    /**
     * Inserts/updates `property` on "properties" list in `self`. Since, a GDataDocumentsProperty is uniquely identified by #GDataDocumentsProperty:key and #GDataDocumentsProperty:visibility, if no such property exists in the "properties" list, then a `property` will be appended to the list after incrementing the reference count.
     * 
     * In case that there already exists a `property` in "properties", the #GDataDocumentsProperty inside the list will be updated to `property`. Note that #GDataDocumentsProperty:value has no role in determining the uniqueness of a #GDataDocumentsProperty.
     * 
     * The changes made by this function will be local only and you need to explicitly update `self` by calling gdata_service_update_entry().
     * @param property a #GDataDocumentsProperty
     */
    add_documents_property(property: DocumentsProperty): boolean
    /**
     * Gets a list of the #GDataDocumentsPropertys for this entry.
     */
    get_document_properties(): DocumentsProperty[]
    /**
     * Gets the #GDataDocumentsEntry:file-size property.
     */
    get_file_size(): number
    /**
     * Gets the #GDataDocumentsEntry:last-modified-by property.
     */
    get_last_modified_by(): Author
    /**
     * Gets the #GDataDocumentsEntry:last-viewed property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_last_viewed(): number
    /**
     * Builds a path for the #GDataDocumentsEntry, starting from a root node and traversing the folders containing the document, then ending with the
     * document's ID.
     * 
     * An example path would be: <literal>/folder_id1/folder_id2/document_id</literal>.
     * 
     * Note: the path is based on the entry/document IDs of the folders (#GDataEntry:id) and document (#GDataDocumentsEntry:document-id),
     * and not the entries' human-readable names (#GDataEntry:title).
     */
    get_path(): string
    /**
     * Gets the #GDataDocumentsEntry:quota-used property.
     */
    get_quota_used(): number
    /**
     * Gets the #GDataDocumentsEntry:resource-id property.
     */
    get_resource_id(): string
    /**
     * Gets the #GDataDocumentsEntry:shared-with-me-date property. If the property is unset, `-1` will be returned.
     */
    get_shared_with_me_date(): number
    /**
     * The property specified by `property` will be removed from the "properties" list on `self`.
     * 
     * Only #GDataDocumentsProperty:key and #GDataDocumentsProperty:visibility will be used to find `property` in "properties" list. #GDataDocumentsProperty:value has no role in determining the uniqueness of a #GDataDocumentsProperty.
     * 
     * The changes made by this function will be local only and you need to explicitly update `self` by calling gdata_service_update_entry().
     * @param property a #GDataDocumentsProperty
     */
    remove_documents_property(property: DocumentsProperty): boolean
    /**
     * Sets the #GDataDocumentsEntry:writers-can-invite property to `writers_can_invite`.
     * @param writers_can_invite %TRUE if writers can invite other people to edit the document, %FALSE otherwise
     */
    set_writers_can_invite(writers_can_invite: boolean): void

    // Class property signals of GData-0.0.GData.DocumentsEntry

    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsEntry structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsEntry extends Entry {

    // Own properties of GData-0.0.GData.DocumentsEntry

    static name: string
    static $gtype: GObject.GType<DocumentsEntry>

    // Constructors of GData-0.0.GData.DocumentsEntry

    constructor(config?: DocumentsEntry_ConstructProps) 
    _init(config?: DocumentsEntry_ConstructProps): void
}

interface DocumentsFeed_ConstructProps extends Feed_ConstructProps {
}

interface DocumentsFeed {

    // Class property signals of GData-0.0.GData.DocumentsFeed

    connect(sigName: "notify::etag", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::generator", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::generator", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::items-per-page", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-per-page", ...args: any[]): void
    connect(sigName: "notify::logo", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::next-page-token", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-page-token", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::total-results", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-results", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsFeed structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsFeed extends Feed {

    // Own properties of GData-0.0.GData.DocumentsFeed

    static name: string
    static $gtype: GObject.GType<DocumentsFeed>

    // Constructors of GData-0.0.GData.DocumentsFeed

    constructor(config?: DocumentsFeed_ConstructProps) 
    _init(config?: DocumentsFeed_ConstructProps): void
}

interface DocumentsFolder_ConstructProps extends AccessHandler_ConstructProps, DocumentsEntry_ConstructProps {
}

interface DocumentsFolder extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsFolder

    parent: DocumentsEntry
    priv: DocumentsFolderPrivate

    // Class property signals of GData-0.0.GData.DocumentsFolder

    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsFolder structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsFolder extends DocumentsEntry {

    // Own properties of GData-0.0.GData.DocumentsFolder

    static name: string
    static $gtype: GObject.GType<DocumentsFolder>

    // Constructors of GData-0.0.GData.DocumentsFolder

    constructor(config?: DocumentsFolder_ConstructProps) 
    /**
     * Creates a new #GDataDocumentsFolder with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the folder), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsFolder with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the folder), or %NULL
     */
    static new(id: string | null): DocumentsFolder

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsFolder_ConstructProps): void
}

interface DocumentsMetadata_ConstructProps extends Parsable_ConstructProps {
}

interface DocumentsMetadata {

    // Own properties of GData-0.0.GData.DocumentsMetadata

    /**
     * The user quota limit across all services. Measured in bytes.
     */
    readonly quota_total: number
    /**
     * The amount of user quota used up across all services. Measured in bytes.
     */
    readonly quota_used: number

    // Own fields of GData-0.0.GData.DocumentsMetadata

    parent: Parsable
    priv: DocumentsMetadataPrivate

    // Owm methods of GData-0.0.GData.DocumentsMetadata

    /**
     * Gets the #GDataDocumentsMetadata:quota-total property.
     */
    get_quota_total(): number
    /**
     * Gets the #GDataDocumentsMetadata:quota-used property.
     */
    get_quota_used(): number

    // Class property signals of GData-0.0.GData.DocumentsMetadata

    connect(sigName: "notify::quota-total", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-total", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota-total", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsMetadata structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsMetadata extends Parsable {

    // Own properties of GData-0.0.GData.DocumentsMetadata

    static name: string
    static $gtype: GObject.GType<DocumentsMetadata>

    // Constructors of GData-0.0.GData.DocumentsMetadata

    constructor(config?: DocumentsMetadata_ConstructProps) 
    _init(config?: DocumentsMetadata_ConstructProps): void
}

interface DocumentsPdf_ConstructProps extends AccessHandler_ConstructProps, DocumentsDocument_ConstructProps {
}

interface DocumentsPdf extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsPdf

    parent: DocumentsDocument
    priv: DocumentsPdfPrivate

    // Class property signals of GData-0.0.GData.DocumentsPdf

    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsPdf structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsPdf extends DocumentsDocument {

    // Own properties of GData-0.0.GData.DocumentsPdf

    static name: string
    static $gtype: GObject.GType<DocumentsPdf>

    // Constructors of GData-0.0.GData.DocumentsPdf

    constructor(config?: DocumentsPdf_ConstructProps) 
    /**
     * Creates a new #GDataDocumentsPdf with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the pdf document), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsPdf with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the pdf document), or %NULL
     */
    static new(id: string | null): DocumentsPdf

    // Overloads of new

    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    static new(id: string | null): DocumentsDocument
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsPdf_ConstructProps): void
}

interface DocumentsPresentation_ConstructProps extends AccessHandler_ConstructProps, DocumentsDocument_ConstructProps {
}

interface DocumentsPresentation extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsPresentation

    parent: DocumentsDocument
    priv: DocumentsPresentationPrivate

    // Class property signals of GData-0.0.GData.DocumentsPresentation

    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsPresentation structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsPresentation extends DocumentsDocument {

    // Own properties of GData-0.0.GData.DocumentsPresentation

    static name: string
    static $gtype: GObject.GType<DocumentsPresentation>

    // Constructors of GData-0.0.GData.DocumentsPresentation

    constructor(config?: DocumentsPresentation_ConstructProps) 
    /**
     * Creates a new #GDataDocumentsPresentation with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the presentation), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsPresentation with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the presentation), or %NULL
     */
    static new(id: string | null): DocumentsPresentation

    // Overloads of new

    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    static new(id: string | null): DocumentsDocument
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsPresentation_ConstructProps): void
}

interface DocumentsProperty_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.DocumentsProperty

    /**
     * ETag of the property.
     * 
     * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
     */
    etag?: string | null
    /**
     * The key of this property.
     * 
     * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
     */
    key?: string | null
    /**
     * The value of this property. By default, it takes the an empty string ("").
     * 
     * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
     */
    value?: string | null
    /**
     * The visibility status of this property. The default value of
     * visibility is PRIVATE on a Drive Properties Resource object,
     * hence #GDataDocumentsProperty:visibility is %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE
     * by default. A private property restricts its visibility to only the app which created it.
     * 
     * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
     */
    visibility?: string | null
}

interface DocumentsProperty extends Comparable {

    // Own properties of GData-0.0.GData.DocumentsProperty

    /**
     * ETag of the property.
     * 
     * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
     */
    readonly etag: string
    /**
     * The key of this property.
     * 
     * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
     */
    key: string
    /**
     * The value of this property. By default, it takes the an empty string ("").
     * 
     * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
     */
    value: string
    /**
     * The visibility status of this property. The default value of
     * visibility is PRIVATE on a Drive Properties Resource object,
     * hence #GDataDocumentsProperty:visibility is %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE
     * by default. A private property restricts its visibility to only the app which created it.
     * 
     * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
     */
    visibility: string

    // Own fields of GData-0.0.GData.DocumentsProperty

    parent: Parsable
    priv: DocumentsPropertyPrivate

    // Owm methods of GData-0.0.GData.DocumentsProperty

    /**
     * Returns the ETag of the property.
     */
    get_etag(): string
    /**
     * Returns the key of the property. This will never be %NULL or an empty string ("").
     */
    get_key(): string
    /**
     * Returns the value of the property.
     * 
     * In the case that this value is %NULL, the Property Resource corresponding to `self` will be deleted from the properties array on a file's metadata, whereas in the case that it's empty string (""), it will be set as it is.
     */
    get_value(): string | null
    /**
     * Returns the visibility status of the property.
     */
    get_visibility(): string
    /**
     * Sets #GDataDocumentsProperty:value to `value,` corresponding to the key.
     * 
     * In the case that `value` is %NULL, the Property Resource corresponding to `self` will be deleted from the properties array on a file's metadata, whereas in the case that it's empty string (""), it will be set as it is.
     * @param value the new value of the property
     */
    set_value(value: string | null): void
    /**
     * Sets #GDataDocumentsProperty:visibility to %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PUBLIC for
     * public properties and %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE for
     * private properties (default).
     * @param visibility the new visibility status of the property
     */
    set_visibility(visibility: string): void

    // Class property signals of GData-0.0.GData.DocumentsProperty

    connect(sigName: "notify::etag", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::key", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsProperty structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsProperty extends Parsable {

    // Own properties of GData-0.0.GData.DocumentsProperty

    static name: string
    static $gtype: GObject.GType<DocumentsProperty>

    // Constructors of GData-0.0.GData.DocumentsProperty

    constructor(config?: DocumentsProperty_ConstructProps) 
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param key the property's key
     */
    constructor(key: string) 
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param key the property's key
     */
    static new(key: string): DocumentsProperty
    _init(config?: DocumentsProperty_ConstructProps): void
}

interface DocumentsQuery_ConstructProps extends Query_ConstructProps {

    // Own constructor properties of GData-0.0.GData.DocumentsQuery

    /**
     * Specifies whether the query should search for an exact title match for the #GDataDocumentsQuery:title parameter.
     */
    exact_title?: boolean | null
    /**
     * Specifies the ID of the folder in which to search.
     */
    folder_id?: string | null
    /**
     * A shortcut to request all documents that have been deleted.
     */
    show_deleted?: boolean | null
    /**
     * Specifies if the request also returns folders.
     */
    show_folders?: boolean | null
    /**
     * A title (or title fragment) to be searched for. If #GDataDocumentsQuery:exact-title is %TRUE, an exact
     * title match will be searched for, otherwise substring matches will also be returned.
     */
    title?: string | null
}

interface DocumentsQuery {

    // Own properties of GData-0.0.GData.DocumentsQuery

    /**
     * Specifies whether the query should search for an exact title match for the #GDataDocumentsQuery:title parameter.
     */
    exact_title: boolean
    /**
     * Specifies the ID of the folder in which to search.
     */
    folder_id: string
    /**
     * A shortcut to request all documents that have been deleted.
     */
    show_deleted: boolean
    /**
     * Specifies if the request also returns folders.
     */
    show_folders: boolean
    /**
     * A title (or title fragment) to be searched for. If #GDataDocumentsQuery:exact-title is %TRUE, an exact
     * title match will be searched for, otherwise substring matches will also be returned.
     */
    title: string

    // Own fields of GData-0.0.GData.DocumentsQuery

    parent: Query
    priv: DocumentsQueryPrivate

    // Owm methods of GData-0.0.GData.DocumentsQuery

    /**
     * Add `email_address` as a #GDataGDEmailAddress to the list of collaborators whose edited documents will be queried.
     * @param email_address the e-mail address of the collaborator to add
     */
    add_collaborator(email_address: string): void
    /**
     * Add `email_address` as a #GDataGDEmailAddress to the list of readers, the documents readable by whom will be queried.
     * @param email_address the e-mail address of the reader to add
     */
    add_reader(email_address: string): void
    /**
     * Gets a list of #GDataGDEmailAddress<!-- -->es of the document collaborators whose documents will be queried.
     */
    get_collaborator_addresses(): GDEmailAddress[]
    /**
     * Gets the #GDataDocumentsQuery:exact-title property.
     */
    get_exact_title(): boolean
    /**
     * Gets the #GDataDocumentsQuery:folder-id property.
     */
    get_folder_id(): string
    /**
     * Gets a list of #GDataGDEmailAddress<!-- -->es of the document readers whose documents will be queried.
     */
    get_reader_addresses(): GDEmailAddress[]
    /**
     * Gets the #GDataDocumentsQuery:title property.
     */
    get_title(): string
    /**
     * Sets the #GDataDocumentsQuery:folder-id property to `folder_id`.
     * 
     * Set `folder_id` to %NULL to unset the property in the query URI.
     * @param folder_id the ID of the folder to be queried, or %NULL
     */
    set_folder_id(folder_id: string | null): void
    /**
     * Sets the #GDataDocumentsQuery:show_deleted property to `show_deleted`.
     * @param show_deleted %TRUE if the request should return deleted entries, %FALSE otherwise
     */
    set_show_deleted(show_deleted: boolean): void
    /**
     * Sets the #GDataDocumentsQuery:show-folders property to show_folders.
     * @param show_folders %TRUE if the request should return folders, %FALSE otherwise
     */
    set_show_folders(show_folders: boolean): void
    /**
     * Sets the #GDataDocumentsQuery:title property to `title`.
     * 
     * Set `title` to %NULL to unset the property in the query URI.
     * @param title the title (or title fragment) to query for, or %NULL
     * @param exact_title %TRUE if the query should match the exact `title,` %FALSE otherwise
     */
    set_title(title: string | null, exact_title: boolean): void

    // Class property signals of GData-0.0.GData.DocumentsQuery

    connect(sigName: "notify::exact-title", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exact-title", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::exact-title", ...args: any[]): void
    connect(sigName: "notify::folder-id", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-id", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folder-id", ...args: any[]): void
    connect(sigName: "notify::show-deleted", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-deleted", ...args: any[]): void
    connect(sigName: "notify::show-folders", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-folders", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-folders", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::author", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsQuery structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsQuery extends Query {

    // Own properties of GData-0.0.GData.DocumentsQuery

    static name: string
    static $gtype: GObject.GType<DocumentsQuery>

    // Constructors of GData-0.0.GData.DocumentsQuery

    constructor(config?: DocumentsQuery_ConstructProps) 
    /**
     * Creates a new #GDataDocumentsQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataDocumentsQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): DocumentsQuery

    // Overloads of new

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    /**
     * Creates a new #GDataDocumentsQuery with its #GDataQuery:q property set to `q,` and the limits `start_index` and `max_results`
     * applied.
     * @constructor 
     * @param q a query string, or %NULL
     * @param start_index a one-based start index for the results, or <code class="literal">0</code>
     * @param max_results the maximum number of results to return, or <code class="literal">0</code>
     */
    static new_with_limits(q: string | null, start_index: number, max_results: number): DocumentsQuery

    // Overloads of new_with_limits

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q,` and the limits `start_index` and `max_results`
     * applied.
     * @constructor 
     * @param q a query string, or %NULL
     * @param start_index a one-based start index for the results, or <code class="literal">0</code>
     * @param max_results the maximum number of results to return, or <code class="literal">0</code>
     */
    static new_with_limits(q: string | null, start_index: number, max_results: number): Query
    _init(config?: DocumentsQuery_ConstructProps): void
}

interface DocumentsService_ConstructProps extends Batchable_ConstructProps, Service_ConstructProps {
}

interface DocumentsService extends Batchable {

    // Own fields of GData-0.0.GData.DocumentsService

    parent: Service
    priv: DocumentsServicePrivate

    // Owm methods of GData-0.0.GData.DocumentsService

    /**
     * Add the given `entry` to the specified `folder,` and return an updated #GDataDocumentsEntry for `entry`. If the `entry` is already in another folder,
     * a copy will be added to the new folder. The copy and original will have different IDs. Note that `entry` can't be a #GDataDocumentsFolder that
     * already exists on the server. It can be a new #GDataDocumentsFolder, or a #GDataDocumentsDocument that is either new or already present on the
     * server.
     * 
     * Errors from #GDataServiceError can be returned for exceptional conditions, as determined by the server.
     * @param entry the #GDataDocumentsEntry to copy
     * @param folder the #GDataDocumentsFolder to copy `entry` into
     * @param cancellable optional #GCancellable object, or %NULL
     */
    add_entry_to_folder(entry: DocumentsEntry, folder: DocumentsFolder, cancellable: Gio.Cancellable | null): DocumentsEntry
    /**
     * Add the given `entry` to the specified `folder`. `self,` `entry` and `folder` are all reffed when this function is called, so can safely be unreffed
     * after this function returns.
     * 
     * For more details, see gdata_documents_service_add_entry_to_folder(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_documents_service_add_entry_to_folder_finish() to get the results
     * of the operation.
     * @param entry the #GDataDocumentsEntry to add to `folder`
     * @param folder the #GDataDocumentsFolder to add `entry` to
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the operation is finished, or %NULL
     */
    add_entry_to_folder_async(entry: DocumentsEntry, folder: DocumentsFolder, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation to add a #GDataDocumentsEntry to a folder started with gdata_documents_service_add_entry_to_folder_async().
     * @param async_result a #GAsyncResult
     */
    add_entry_to_folder_finish(async_result: Gio.AsyncResult): DocumentsEntry
    /**
     * Copy the given `document,` producing a duplicate document in the same folder and returning its #GDataDocumentsDocument.
     * 
     * Errors from #GDataServiceError can be returned for exceptional conditions, as determined by the server.
     * @param document the #GDataDocumentsDocument to copy
     * @param cancellable optional #GCancellable object, or %NULL
     */
    copy_document(document: DocumentsDocument, cancellable: Gio.Cancellable | null): DocumentsDocument
    /**
     * Copy the given `document,` producing a duplicate document in the same folder and returning its #GDataDocumentsDocument. `self` and `document` are
     * both reffed when this function is called, so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_documents_service_copy_document(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_documents_service_copy_document_finish() to get the results
     * of the operation.
     * @param document the #GDataDocumentsDocument to copy
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the operation is finished, or %NULL
     */
    copy_document_async(document: DocumentsDocument, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation to copy a #GDataDocumentsDocument started with gdata_documents_service_copy_document_async().
     * @param async_result a #GAsyncResult
     */
    copy_document_finish(async_result: Gio.AsyncResult): DocumentsDocument
    /**
     * Finish off a document upload or update operation started by gdata_documents_service_upload_document() or gdata_documents_service_update_document(),
     * parsing the result and returning the new or updated #GDataDocumentsDocument.
     * 
     * If an error occurred during the upload or update operation, it will have been returned during the operation (e.g. by g_output_stream_splice() or one
     * of the other stream methods). In such a case, %NULL will be returned but `error` will remain unset. `error` is only set in the case that the server
     * indicates that the operation was successful, but an error is encountered in parsing the result sent by the server.
     * 
     * In the case that no #GDataDocumentsDocument was passed (to gdata_documents_service_upload_document() or gdata_documents_service_update_document())
     * when starting the operation, %GDATA_DOCUMENTS_SERVICE_ERROR_INVALID_CONTENT_TYPE will be thrown in `error` if the content type of the uploaded data
     * could not be mapped to a document type with which to interpret the response from the server.
     * @param upload_stream the #GDataUploadStream from the operation
     */
    finish_upload(upload_stream: UploadStream): DocumentsDocument
    /**
     * Gets a #GDataDocumentsMetadata object containing metadata about the documents
     * service itself, like how large the user quota is.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_metadata(cancellable: Gio.Cancellable | null): DocumentsMetadata
    /**
     * Gets a #GDataDocumentsMetadata object containing metadata about the documents
     * service itself, like how large the user quota is.
     * 
     * For more details, see gdata_documents_service_get_metadata(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_documents_service_get_metadata_finish() to get the results
     * of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the operation is finished, or %NULL
     */
    get_metadata_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation to get a #GDataDocumentsMetadata started with gdata_documents_service_get_metadata_async().
     * @param async_result a #GAsyncResult
     */
    get_metadata_finish(async_result: Gio.AsyncResult): DocumentsMetadata
    /**
     * Queries the service to return a list of documents matching the given `query`. Note that `query` has to be a #GDataDocumentsQuery, rather than just
     * a #GDataQuery, as it uses the folder ID specified in #GDataDocumentsQuery:folder-id.
     * 
     * For more details, see gdata_service_query().
     * @param query a #GDataDocumentsQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query_documents(query: DocumentsQuery | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): DocumentsFeed
    /**
     * Queries the service to return a list of documents matching the given `query`. `self` and
     * `query` are both reffed when this function is called, so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_documents_service_query_documents(), which is the synchronous version of this function,
     * and gdata_service_query_async(), which is the base asynchronous query function.
     * @param query a #GDataDocumentsQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    query_documents_async(query: DocumentsQuery | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of shared drives matching the given `query`.
     * 
     * For more details, see gdata_service_query().
     * @param query a #GDataDocumentsDriveQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query_drives(query: DocumentsDriveQuery | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): DocumentsFeed
    /**
     * Queries the service to return a list of shared drives matching the given `query`. `self` and
     * `query` are both reffed when this function is called, so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_documents_service_query_drives(), which is the synchronous version of this function,
     * and gdata_service_query_async(), which is the base asynchronous query function.
     * @param query a #GDataDocumentsDriveQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    query_drives_async(query: DocumentsDriveQuery | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Remove the given `entry` from `folder,` and return an updated #GDataDocumentsEntry for `entry`. `entry` will remain a member of any other folders it's
     * currently in. Note that `entry` can be either a #GDataDocumentsDocument or a #GDataDocumentsFolder.
     * 
     * Errors from #GDataServiceError can be returned for exceptional conditions, as determined by the server.
     * @param entry the #GDataDocumentsEntry to remove
     * @param folder the #GDataDocumentsFolder from which we should remove `entry`
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove_entry_from_folder(entry: DocumentsEntry, folder: DocumentsFolder, cancellable: Gio.Cancellable | null): DocumentsEntry
    /**
     * Remove the given `entry` from the specified `folder`. `self,` `entry` and `folder` are all reffed when this function is called, so can safely be unreffed
     * after this function returns.
     * 
     * For more details, see gdata_documents_service_remove_entry_from_folder(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_documents_service_remove_entry_from_folder_finish() to get the
     * results of the operation.
     * @param entry the #GDataDocumentsEntry to remove from `folder`
     * @param folder the #GDataDocumentsFolder to remove `entry` from
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the operation is finished, or %NULL
     */
    remove_entry_from_folder_async(entry: DocumentsEntry, folder: DocumentsFolder, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation to remove a #GDataDocumentsEntry from a folder started with
     * gdata_documents_service_remove_entry_from_folder_async().
     * @param async_result a #GAsyncResult
     */
    remove_entry_from_folder_finish(async_result: Gio.AsyncResult): DocumentsEntry
    /**
     * Update the document using the properties from `document` and the document data written to the resulting #GDataUploadStream. If the document data does
     * not need to be changed, just the metadata, use gdata_service_update_entry() instead.
     * 
     * This performs a non-resumable upload, unlike gdata_documents_service_update_document(). This means that errors during transmission will cause the
     * upload to fail, and the entire document will have to be re-uploaded. It is recommended that gdata_documents_service_update_document_resumable()
     * be used instead.
     * 
     * The stream returned by this function should be written to using the standard #GOutputStream methods, asynchronously or synchronously. Once the stream
     * is closed (using g_output_stream_close()), gdata_documents_service_finish_upload() should be called on it to parse and return the updated
     * #GDataDocumentsDocument for the document. This must be done, as `document` isn't updated in-place.
     * 
     * In order to cancel the update, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GOutputStream operations on the #GDataUploadStream will not cancel the entire update; merely the write or close operation in question. See the
     * #GDataUploadStream:cancellable for more details.
     * 
     * Any upload errors will be thrown by the stream methods, and may come from the #GDataServiceError domain.
     * 
     * For more information, see gdata_service_update_entry().
     * @param document the #GDataDocumentsDocument to update
     * @param slug the filename to give to the uploaded document
     * @param content_type the content type of the uploaded data
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    update_document(document: DocumentsDocument, slug: string, content_type: string, cancellable: Gio.Cancellable | null): UploadStream
    /**
     * Update the document using the properties from `document` and the document data written to the resulting #GDataUploadStream. If the document data does
     * not need to be changed, just the metadata, use gdata_service_update_entry() instead.
     * 
     * Unlike gdata_documents_service_update_document(), this method performs a
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html">resumable upload</ulink> which allows for correction of
     * transmission errors without re-uploading the entire file. Use of this method is preferred over gdata_documents_service_update_document().
     * 
     * The stream returned by this function should be written to using the standard #GOutputStream methods, asynchronously or synchronously. Once the stream
     * is closed (using g_output_stream_close()), gdata_documents_service_finish_upload() should be called on it to parse and return the updated
     * #GDataDocumentsDocument for the document. This must be done, as `document` isn't updated in-place.
     * 
     * In order to cancel the update, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GOutputStream operations on the #GDataUploadStream will not cancel the entire update; merely the write or close operation in question. See the
     * #GDataUploadStream:cancellable for more details.
     * 
     * Any upload errors will be thrown by the stream methods, and may come from the #GDataServiceError domain.
     * 
     * For more information, see gdata_service_update_entry().
     * @param document the #GDataDocumentsDocument to update
     * @param slug the filename to give to the uploaded document
     * @param content_type the content type of the uploaded data
     * @param content_length the size (in bytes) of the file being uploaded
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    update_document_resumable(document: DocumentsDocument, slug: string, content_type: string, content_length: number, cancellable: Gio.Cancellable | null): UploadStream
    /**
     * Uploads a document to Google Documents, using the properties from `document` and the document data written to the resulting #GDataUploadStream. If
     * the document data does not need to be provided at the moment, just the metadata, use gdata_service_insert_entry() instead (e.g. in the case of
     * creating a new, empty file to be edited at a later date).
     * 
     * This performs a non-resumable upload, unlike gdata_documents_service_upload_document(). This means that errors during transmission will cause the
     * upload to fail, and the entire document will have to be re-uploaded. It is recommended that gdata_documents_service_upload_document_resumable()
     * be used instead.
     * 
     * If `document` is %NULL, only the document data will be uploaded. The new document entry will be named using `slug,` and will have default metadata.
     * 
     * The stream returned by this function should be written to using the standard #GOutputStream methods, asynchronously or synchronously. Once the stream
     * is closed (using g_output_stream_close()), gdata_documents_service_finish_upload() should be called on it to parse and return the updated
     * #GDataDocumentsDocument for the document. This must be done, as `document` isn't updated in-place.
     * 
     * In order to cancel the upload, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GOutputStream operations on the #GDataUploadStream will not cancel the entire upload; merely the write or close operation in question. See the
     * #GDataUploadStream:cancellable for more details.
     * 
     * Any upload errors will be thrown by the stream methods, and may come from the #GDataServiceError domain.
     * @param document the #GDataDocumentsDocument to insert, or %NULL
     * @param slug the filename to give to the uploaded document
     * @param content_type the content type of the uploaded data
     * @param folder the folder to which the document should be uploaded, or %NULL
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    upload_document(document: DocumentsDocument | null, slug: string, content_type: string, folder: DocumentsFolder | null, cancellable: Gio.Cancellable | null): UploadStream
    /**
     * Uploads a document to Google Documents, using the properties from `document` and the document data written to the resulting #GDataUploadStream. If
     * the document data does not need to be provided at the moment, just the metadata, use gdata_service_insert_entry() instead (e.g. in the case of
     * creating a new, empty file to be edited at a later date).
     * 
     * Unlike gdata_documents_service_upload_document(), this method performs a
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html">resumable upload</ulink> which allows for correction of
     * transmission errors without re-uploading the entire file. Use of this method is preferred over gdata_documents_service_upload_document().
     * 
     * If `document` is %NULL, only the document data will be uploaded. The new document entry will be named using `slug,` and will have default metadata.
     * 
     * If non-%NULL, the `query` specifies parameters for the upload, such as a #GDataDocumentsFolder to upload the document into; and whether to treat
     * the document as an opaque file, or convert it to a standard format. If `query` is %NULL, the document will be uploaded into the root folder, and
     * automatically converted to a standard format. No OCR or automatic language translation will be performed by default.
     * 
     * If `query` is non-%NULL and #GDataDocumentsUploadQuery:convert is %FALSE, `document` must be an instance of #GDataDocumentsDocument. Otherwise,
     * `document` must be a subclass of it, such as #GDataDocumentsPresentation.
     * 
     * The stream returned by this function should be written to using the standard #GOutputStream methods, asynchronously or synchronously. Once the stream
     * is closed (using g_output_stream_close()), gdata_documents_service_finish_upload() should be called on it to parse and return the updated
     * #GDataDocumentsDocument for the document. This must be done, as `document` isn't updated in-place.
     * 
     * In order to cancel the upload, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GOutputStream operations on the #GDataUploadStream will not cancel the entire upload; merely the write or close operation in question. See the
     * #GDataUploadStream:cancellable for more details.
     * 
     * Any upload errors will be thrown by the stream methods, and may come from the #GDataServiceError domain.
     * @param document the #GDataDocumentsDocument to insert, or %NULL
     * @param slug the filename to give to the uploaded document
     * @param content_type the content type of the uploaded data
     * @param content_length the size (in bytes) of the file being uploaded
     * @param query a query specifying parameters for the upload, or %NULL
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    upload_document_resumable(document: DocumentsDocument | null, slug: string, content_type: string, content_length: number, query: DocumentsUploadQuery | null, cancellable: Gio.Cancellable | null): UploadStream

    // Class property signals of GData-0.0.GData.DocumentsService

    connect(sigName: "notify::authorizer", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsService structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsService extends Service {

    // Own properties of GData-0.0.GData.DocumentsService

    static name: string
    static $gtype: GObject.GType<DocumentsService>

    // Constructors of GData-0.0.GData.DocumentsService

    constructor(config?: DocumentsService_ConstructProps) 
    /**
     * Creates a new #GDataDocumentsService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    constructor(authorizer: Authorizer | null) 
    /**
     * Creates a new #GDataDocumentsService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    static new(authorizer: Authorizer | null): DocumentsService
    _init(config?: DocumentsService_ConstructProps): void
    /**
     * The primary #GDataAuthorizationDomain for interacting with Google Documents. This will not normally need to be used, as it's used internally
     * by the #GDataDocumentsService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
     * does not support natively, then this domain may be needed to authorize the requests.
     * 
     * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
     */
    static get_primary_authorization_domain(): AuthorizationDomain
    /**
     * The #GDataAuthorizationDomain for interacting with spreadsheet data. This will not normally need to be used, as it's automatically used internally
     * by the #GDataDocumentsService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
     * does not support natively, then this domain may be needed to authorize the requests which pertain to the Google Spreadsheets Data API, such as
     * requests to download or upload spreadsheet documents.
     * 
     * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
     */
    static get_spreadsheet_authorization_domain(): AuthorizationDomain
    /**
     * Gets the upload URI for documents for the service.
     * 
     * If `folder` is %NULL, the URI will be the one to upload documents to the "root" folder.
     * @param folder the #GDataDocumentsFolder into which to upload the document, or %NULL
     */
    static get_upload_uri(folder: DocumentsFolder | null): string
}

interface DocumentsSpreadsheet_ConstructProps extends AccessHandler_ConstructProps, DocumentsDocument_ConstructProps {
}

interface DocumentsSpreadsheet extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsSpreadsheet

    parent: DocumentsDocument
    priv: DocumentsSpreadsheetPrivate

    // Owm methods of GData-0.0.GData.DocumentsSpreadsheet

    /**
     * Builds and returns the download URI for the given #GDataDocumentsSpreadsheet in the desired format. Note that directly downloading
     * the document using this URI isn't possible, as authentication is required. You should instead use gdata_download_stream_new() with
     * the URI, and use the resulting #GInputStream.
     * 
     * When requesting a <code class="literal">"csv"</code>, <code class="literal">"tsv"</code>, <code class="literal">"pdf"</code> or
     * <code class="literal">"html"</code> file you may specify an additional parameter called `gid` which indicates which grid, or sheet, you wish to get
     * (the index is <code class="literal">0</code>-based, so GID <code class="literal">1</code> actually refers to the second sheet on a given
     * spreadsheet).
     * @param export_format the format in which the spreadsheet should be exported when downloaded
     * @param gid the <code class="literal">0</code>-based sheet ID to download, or <code class="literal">-1</code>
     */
    get_download_uri(export_format: string, gid?: number): string

    // Overloads of get_download_uri

    /**
     * Builds and returns the download URI for the given #GDataDocumentsDocument in the desired format. Note that directly downloading the document using
     * this URI isn't possible, as authentication is required. You should instead use gdata_download_stream_new() with the URI, and use the resulting
     * #GInputStream.
     * 
     * `export_format` should be the file extension of the desired output format for the document, from the list accepted by Google Documents. For example:
     * %GDATA_DOCUMENTS_PRESENTATION_PDF, %GDATA_DOCUMENTS_SPREADSHEET_ODS or %GDATA_DOCUMENTS_TEXT_ODT.
     * 
     * If the `export_format` is not recognised or not supported for this document, %NULL is returned.
     * @param export_format the format in which the document should be exported when downloaded
     */
    get_download_uri(export_format: string): string | null
    get_download_uri(...args: any[]): any
    get_download_uri(args_or_export_format: any[] | string): string | string | null | any

    // Class property signals of GData-0.0.GData.DocumentsSpreadsheet

    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsSpreadsheet structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsSpreadsheet extends DocumentsDocument {

    // Own properties of GData-0.0.GData.DocumentsSpreadsheet

    static name: string
    static $gtype: GObject.GType<DocumentsSpreadsheet>

    // Constructors of GData-0.0.GData.DocumentsSpreadsheet

    constructor(config?: DocumentsSpreadsheet_ConstructProps) 
    /**
     * Creates a new #GDataDocumentsSpreadsheet with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the spreadsheet), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsSpreadsheet with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the spreadsheet), or %NULL
     */
    static new(id: string | null): DocumentsSpreadsheet

    // Overloads of new

    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    static new(id: string | null): DocumentsDocument
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsSpreadsheet_ConstructProps): void
}

interface DocumentsText_ConstructProps extends AccessHandler_ConstructProps, DocumentsDocument_ConstructProps {
}

interface DocumentsText extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsText

    parent: DocumentsDocument
    priv: DocumentsTextPrivate

    // Class property signals of GData-0.0.GData.DocumentsText

    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsText structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsText extends DocumentsDocument {

    // Own properties of GData-0.0.GData.DocumentsText

    static name: string
    static $gtype: GObject.GType<DocumentsText>

    // Constructors of GData-0.0.GData.DocumentsText

    constructor(config?: DocumentsText_ConstructProps) 
    /**
     * Creates a new #GDataDocumentsText with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the text document), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsText with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the text document), or %NULL
     */
    static new(id: string | null): DocumentsText

    // Overloads of new

    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    static new(id: string | null): DocumentsDocument
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsText_ConstructProps): void
}

interface DocumentsUploadQuery_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GData-0.0.GData.DocumentsUploadQuery

    /**
     * %TRUE to automatically convert the uploaded document into a standard format (such as a text document, spreadsheet, presentation, etc.).
     * %FALSE to upload the document without converting it; this allows for arbitrary files to be uploaded to Google Documents.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#creating_or_uploading_files">online documentation</ulink>.
     * 
     * Note that uploading with this property set to %FALSE will only have an effect when using gdata_documents_service_update_document_resumable()
     * and not gdata_documents_service_update_document(). Additionally, the #GDataDocumentsDocument passed to
     * gdata_documents_service_update_document_resumable() must be a #GDataDocumentsDocument if this property is %FALSE, and a subclass of it
     * otherwise.
     */
    convert?: boolean | null
    /**
     * Folder to upload the document into. If this is %NULL, the document will be uploaded into the root folder.
     */
    folder?: DocumentsFolder | null
}

interface DocumentsUploadQuery {

    // Own properties of GData-0.0.GData.DocumentsUploadQuery

    /**
     * %TRUE to automatically convert the uploaded document into a standard format (such as a text document, spreadsheet, presentation, etc.).
     * %FALSE to upload the document without converting it; this allows for arbitrary files to be uploaded to Google Documents.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#creating_or_uploading_files">online documentation</ulink>.
     * 
     * Note that uploading with this property set to %FALSE will only have an effect when using gdata_documents_service_update_document_resumable()
     * and not gdata_documents_service_update_document(). Additionally, the #GDataDocumentsDocument passed to
     * gdata_documents_service_update_document_resumable() must be a #GDataDocumentsDocument if this property is %FALSE, and a subclass of it
     * otherwise.
     */
    convert: boolean
    /**
     * Folder to upload the document into. If this is %NULL, the document will be uploaded into the root folder.
     */
    folder: DocumentsFolder

    // Own fields of GData-0.0.GData.DocumentsUploadQuery

    parent: GObject.Object
    priv: DocumentsUploadQueryPrivate

    // Owm methods of GData-0.0.GData.DocumentsUploadQuery

    /**
     * Builds an upload URI suitable for passing to gdata_upload_stream_new_resumable() in order to upload a document to Google Documents as described in
     * the
     * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#uploading_a_new_document_or_file_with_both_metadata_and_content">
     * online documentation</ulink>.
     */
    build_uri(): string
    /**
     * Gets #GDataDocumentsUploadQuery:convert.
     */
    get_convert(): boolean
    /**
     * Gets #GDataDocumentsUploadQuery:folder.
     */
    get_folder(): DocumentsFolder | null
    /**
     * Sets #GDataDocumentsUploadQuery:convert to `convert`.
     * @param convert %TRUE to convert documents to common formats, %FALSE to upload them unmodified
     */
    set_convert(convert: boolean): void
    /**
     * Sets #GDataDocumentsUploadQuery:folder to `folder`.
     * @param folder a new folder to upload into, or %NULL
     */
    set_folder(folder: DocumentsFolder | null): void

    // Class property signals of GData-0.0.GData.DocumentsUploadQuery

    connect(sigName: "notify::convert", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::convert", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::convert", ...args: any[]): void
    connect(sigName: "notify::folder", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDocumentsUploadQuery structure are private and should never be accessed directly.
 * @class 
 */
class DocumentsUploadQuery extends GObject.Object {

    // Own properties of GData-0.0.GData.DocumentsUploadQuery

    static name: string
    static $gtype: GObject.GType<DocumentsUploadQuery>

    // Constructors of GData-0.0.GData.DocumentsUploadQuery

    constructor(config?: DocumentsUploadQuery_ConstructProps) 
    /**
     * Constructs a new empty #GDataDocumentsUploadQuery.
     * @constructor 
     */
    constructor() 
    /**
     * Constructs a new empty #GDataDocumentsUploadQuery.
     * @constructor 
     */
    static new(): DocumentsUploadQuery
    _init(config?: DocumentsUploadQuery_ConstructProps): void
}

interface DownloadStream_ConstructProps extends Gio.Seekable_ConstructProps, Gio.InputStream_ConstructProps {

    // Own constructor properties of GData-0.0.GData.DownloadStream

    /**
     * The authorization domain for the download, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be
     * authorized. This may be %NULL if authorization is not needed for the download.
     */
    authorization_domain?: AuthorizationDomain | null
    /**
     * An optional cancellable used to cancel the entire download operation. If a #GCancellable instance isn't provided for this property at
     * construction time (i.e. to gdata_download_stream_new()), one will be created internally and can be retrieved using
     * gdata_download_stream_get_cancellable() and used to cancel the download operation with g_cancellable_cancel() just as if it was passed to
     * gdata_download_stream_new().
     * 
     * If the download operation is cancelled using this #GCancellable, any ongoing network activity will be stopped, and any pending or future
     * calls to #GInputStream API on the #GDataDownloadStream will return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be
     * passed to individual #GInputStream operations will not cancel the download operation proper if cancelled — they will merely cancel that API
     * call. The only way to cancel the download operation completely is using #GDataDownloadStream:cancellable.
     */
    cancellable?: Gio.Cancellable | null
    /**
     * The URI of the file to download. This must be HTTPS.
     */
    download_uri?: string | null
    /**
     * The service which is used to authorize the download, and to which the download relates.
     */
    service?: Service | null
}

interface DownloadStream extends Gio.Seekable {

    // Own properties of GData-0.0.GData.DownloadStream

    /**
     * The authorization domain for the download, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be
     * authorized. This may be %NULL if authorization is not needed for the download.
     */
    readonly authorization_domain: AuthorizationDomain
    /**
     * An optional cancellable used to cancel the entire download operation. If a #GCancellable instance isn't provided for this property at
     * construction time (i.e. to gdata_download_stream_new()), one will be created internally and can be retrieved using
     * gdata_download_stream_get_cancellable() and used to cancel the download operation with g_cancellable_cancel() just as if it was passed to
     * gdata_download_stream_new().
     * 
     * If the download operation is cancelled using this #GCancellable, any ongoing network activity will be stopped, and any pending or future
     * calls to #GInputStream API on the #GDataDownloadStream will return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be
     * passed to individual #GInputStream operations will not cancel the download operation proper if cancelled — they will merely cancel that API
     * call. The only way to cancel the download operation completely is using #GDataDownloadStream:cancellable.
     */
    readonly cancellable: Gio.Cancellable
    /**
     * The length (in bytes) of the file being downloaded. This will initially be <code class="literal">-1</code>, and will be populated as soon as
     * the appropriate header is received from the server. Its value will never change after this.
     * 
     * Note that change notifications for this property (#GObject::notify emissions) may be emitted in threads other than the one which created
     * the #GDataDownloadStream. It is the client's responsibility to ensure that any notification signal handlers are either multi-thread safe
     * or marshal the notification to the thread which owns the #GDataDownloadStream as appropriate.
     */
    readonly content_length: number
    /**
     * The content type of the file being downloaded. This will initially be %NULL, and will be populated as soon as the appropriate header is
     * received from the server. Its value will never change after this.
     * 
     * Note that change notifications for this property (#GObject::notify emissions) may be emitted in threads other than the one which created
     * the #GDataDownloadStream. It is the client's responsibility to ensure that any notification signal handlers are either multi-thread safe
     * or marshal the notification to the thread which owns the #GDataDownloadStream as appropriate.
     */
    readonly content_type: string
    /**
     * The URI of the file to download. This must be HTTPS.
     */
    readonly download_uri: string
    /**
     * The service which is used to authorize the download, and to which the download relates.
     */
    readonly service: Service

    // Own fields of GData-0.0.GData.DownloadStream

    parent: Gio.InputStream
    priv: DownloadStreamPrivate

    // Owm methods of GData-0.0.GData.DownloadStream

    /**
     * Gets the authorization domain used to authorize the download, as passed to gdata_download_stream_new(). It may be %NULL if authorization is not
     * needed for the download.
     */
    get_authorization_domain(): AuthorizationDomain | null
    /**
     * Gets the #GCancellable for the entire download operation, #GDataDownloadStream:cancellable.
     */
    get_cancellable(): Gio.Cancellable
    /**
     * Gets the length (in bytes) of the file being downloaded. If the <literal>Content-Length</literal> header has not yet
     * been received from the server, <code class="literal">-1</code> will be returned.
     */
    get_content_length(): number
    /**
     * Gets the content type of the file being downloaded. If the <literal>Content-Type</literal> header has not yet
     * been received, %NULL will be returned.
     */
    get_content_type(): string
    /**
     * Gets the URI of the file being downloaded, as passed to gdata_download_stream_new().
     */
    get_download_uri(): string
    /**
     * Gets the service used to authorize the download, as passed to gdata_download_stream_new().
     */
    get_service(): Service

    // Class property signals of GData-0.0.GData.DownloadStream

    connect(sigName: "notify::authorization-domain", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorization-domain", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authorization-domain", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::content-length", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-length", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::download-uri", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::download-uri", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::download-uri", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataDownloadStream structure are private and should never be accessed directly.
 * @class 
 */
class DownloadStream extends Gio.InputStream {

    // Own properties of GData-0.0.GData.DownloadStream

    static name: string
    static $gtype: GObject.GType<DownloadStream>

    // Constructors of GData-0.0.GData.DownloadStream

    constructor(config?: DownloadStream_ConstructProps) 
    /**
     * Creates a new #GDataDownloadStream, allowing a file to be downloaded from a GData service using standard #GInputStream API.
     * 
     * As well as the standard GIO errors, calls to the #GInputStream API on a #GDataDownloadStream can also return any relevant specific error from
     * #GDataServiceError, or %GDATA_SERVICE_ERROR_PROTOCOL_ERROR in the general case.
     * 
     * If a #GCancellable is provided in `cancellable,` the download operation may be cancelled at any time from another thread using g_cancellable_cancel().
     * In this case, any ongoing network activity will be stopped, and any pending or future calls to #GInputStream API on the #GDataDownloadStream will
     * return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed to individual #GInputStream operations will not cancel the
     * download operation proper if cancelled — they will merely cancel that API call. The only way to cancel the download operation completely is using
     * this `cancellable`.
     * @constructor 
     * @param service a #GDataService
     * @param domain the #GDataAuthorizationDomain to authorize the download, or %NULL
     * @param download_uri the URI to download; this must be HTTPS
     * @param cancellable a #GCancellable for the entire download stream, or %NULL
     */
    constructor(service: Service, domain: AuthorizationDomain | null, download_uri: string, cancellable: Gio.Cancellable | null) 
    /**
     * Creates a new #GDataDownloadStream, allowing a file to be downloaded from a GData service using standard #GInputStream API.
     * 
     * As well as the standard GIO errors, calls to the #GInputStream API on a #GDataDownloadStream can also return any relevant specific error from
     * #GDataServiceError, or %GDATA_SERVICE_ERROR_PROTOCOL_ERROR in the general case.
     * 
     * If a #GCancellable is provided in `cancellable,` the download operation may be cancelled at any time from another thread using g_cancellable_cancel().
     * In this case, any ongoing network activity will be stopped, and any pending or future calls to #GInputStream API on the #GDataDownloadStream will
     * return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed to individual #GInputStream operations will not cancel the
     * download operation proper if cancelled — they will merely cancel that API call. The only way to cancel the download operation completely is using
     * this `cancellable`.
     * @constructor 
     * @param service a #GDataService
     * @param domain the #GDataAuthorizationDomain to authorize the download, or %NULL
     * @param download_uri the URI to download; this must be HTTPS
     * @param cancellable a #GCancellable for the entire download stream, or %NULL
     */
    static new(service: Service, domain: AuthorizationDomain | null, download_uri: string, cancellable: Gio.Cancellable | null): DownloadStream
    _init(config?: DownloadStream_ConstructProps): void
}

interface Entry_ConstructProps extends Parsable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GData-0.0.GData.Entry

    /**
     * The content of the entry. This is mutually exclusive with #GDataEntry:content.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.content">Atom specification</ulink>.
     */
    content?: string | null
    /**
     * A URI pointing to the location of the content of the entry. This is mutually exclusive with #GDataEntry:content.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.content">Atom specification</ulink>.
     */
    content_uri?: string | null
    /**
     * An identifier for a particular version of the entry. This changes every time the entry on the server changes, and can be used
     * for conditional retrieval and locking.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/reference.html#ResourceVersioning">
     * GData specification</ulink>.
     */
    etag?: string | null
    /**
     * A permanent, universally unique identifier for the entry, in IRI form. This is %NULL for new entries (i.e. ones which haven't yet been
     * inserted on the server, created with gdata_entry_new()), and a non-empty IRI string for all other entries.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.id">
     * Atom specification</ulink>.
     */
    id?: string | null
    /**
     * The ownership rights pertaining to the entry.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.rights">Atom specification</ulink>.
     */
    rights?: string | null
    /**
     * A short summary, abstract, or excerpt of the entry.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.summary">Atom specification</ulink>.
     */
    summary?: string | null
    /**
     * A human-readable title for the entry.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.title">Atom specification</ulink>.
     */
    title?: string | null
}

interface Entry {

    // Own properties of GData-0.0.GData.Entry

    /**
     * The content of the entry. This is mutually exclusive with #GDataEntry:content.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.content">Atom specification</ulink>.
     */
    content: string
    /**
     * A URI pointing to the location of the content of the entry. This is mutually exclusive with #GDataEntry:content.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.content">Atom specification</ulink>.
     */
    content_uri: string
    /**
     * An identifier for a particular version of the entry. This changes every time the entry on the server changes, and can be used
     * for conditional retrieval and locking.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/reference.html#ResourceVersioning">
     * GData specification</ulink>.
     */
    readonly etag: string
    /**
     * A permanent, universally unique identifier for the entry, in IRI form. This is %NULL for new entries (i.e. ones which haven't yet been
     * inserted on the server, created with gdata_entry_new()), and a non-empty IRI string for all other entries.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.id">
     * Atom specification</ulink>.
     */
    readonly id: string
    /**
     * Whether the entry has been inserted on the server. This is %FALSE for entries which have just been created using gdata_entry_new() and
     * %TRUE for entries returned from the server by queries. It is set to %TRUE when an entry is inserted using gdata_service_insert_entry().
     */
    readonly is_inserted: boolean
    /**
     * The date and time the entry was first published or made available.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.published">Atom specification</ulink>.
     */
    readonly published: number
    /**
     * The ownership rights pertaining to the entry.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.rights">Atom specification</ulink>.
     */
    rights: string
    /**
     * A short summary, abstract, or excerpt of the entry.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.summary">Atom specification</ulink>.
     */
    summary: string
    /**
     * A human-readable title for the entry.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.title">Atom specification</ulink>.
     */
    title: string
    /**
     * The date and time when the entry was most recently updated significantly.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.updated">Atom specification</ulink>.
     */
    readonly updated: number

    // Own fields of GData-0.0.GData.Entry

    parent: Parsable
    priv: EntryPrivate

    // Owm methods of GData-0.0.GData.Entry

    /**
     * Adds `author` to the list of authors in the given #GDataEntry and increments its reference count.
     * 
     * Duplicate authors will not be added to the list.
     * @param author a #GDataAuthor to add
     */
    add_author(author: Author): void
    /**
     * Adds `category` to the list of categories in the given #GDataEntry, and increments its reference count.
     * 
     * Duplicate categories will not be added to the list.
     * @param category a #GDataCategory to add
     */
    add_category(category: Category): void
    /**
     * Adds `_link` to the list of links in the given #GDataEntry and increments its reference count.
     * 
     * Duplicate links will not be added to the list.
     * @param _link a #GDataLink to add
     */
    add_link(_link: Link): void
    /**
     * Gets a list of the #GDataAuthors for this entry.
     */
    get_authors(): Author[]
    /**
     * Gets a list of the #GDataCategorys containing this entry.
     */
    get_categories(): Category[]
    /**
     * Returns the textual content in this entry. If the content in this entry is pointed to by a URI, %NULL will be returned; the content URI will be
     * returned by gdata_entry_get_content_uri().
     */
    get_content(): string
    /**
     * Returns a URI pointing to the content of this entry. If the content in this entry is stored directly, %NULL will be returned; the content will be
     * returned by gdata_entry_get_content().
     */
    get_content_uri(): string
    /**
     * Returns the ETag of the entry; a unique identifier for each version of the entry. For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/reference.html#ResourceVersioning">online documentation</ulink>.
     * 
     * The ETag will never be empty; it's either %NULL or a valid ETag.
     */
    get_etag(): string | null
    /**
     * Returns the URN ID of the entry; a unique and permanent identifier for the object the entry represents.
     * 
     * The ID may be %NULL if and only if the #GDataEntry has been newly created, and hasn't yet been inserted on the server.
     */
    get_id(): string | null
    /**
     * Gets the time the entry was originally published.
     */
    get_published(): number
    /**
     * Returns the rights pertaining to the entry, or %NULL if not set.
     */
    get_rights(): string
    /**
     * Returns the summary of the entry.
     */
    get_summary(): string
    /**
     * Returns the title of the entry. This will never be %NULL, but may be an empty string.
     */
    get_title(): string
    /**
     * Gets the time the entry was last updated.
     */
    get_updated(): number
    /**
     * Looks up a link by relation type from the list of links in the entry. If the link has one of the standard Atom relation types,
     * use one of the defined `rel` values, instead of a static string. e.g. %GDATA_LINK_EDIT or %GDATA_LINK_SELF.
     * 
     * In the rare event of requiring a list of links with the same `rel` value, use gdata_entry_look_up_links().
     * @param rel the value of the <structfield>rel</structfield> attribute of the desired link
     */
    look_up_link(rel: string): Link
    /**
     * Looks up a list of links by relation type from the list of links in the entry. If the links have one of the standard Atom
     * relation types, use one of the defined `rel` values, instead of a static string. e.g. %GDATA_LINK_EDIT or %GDATA_LINK_SELF.
     * 
     * If you will only use the first link found, consider calling gdata_entry_look_up_link() instead.
     * @param rel the value of the <structfield>rel</structfield> attribute of the desired links
     */
    look_up_links(rel: string): Link[]
    /**
     * Removes `_link` from the list of links in the given #GDataEntry and decrements its reference count (since the #GDataEntry held a reference to it
     * while it was in the list).
     * @param _link a #GDataLink to remove
     */
    remove_link(_link: Link): boolean
    /**
     * Sets the entry's content to `content`. This unsets #GDataEntry:content-uri.
     * @param content the new content for the entry, or %NULL
     */
    set_content(content: string | null): void
    /**
     * Sets the URI pointing to the entry's content to `content`. This unsets #GDataEntry:content.
     * @param content_uri the new URI pointing to the content for the entry, or %NULL
     */
    set_content_uri(content_uri: string | null): void
    /**
     * Sets the rights for this entry.
     * @param rights the new rights, or %NULL
     */
    set_rights(rights: string | null): void
    /**
     * Sets the summary of the entry.
     * @param summary the new entry summary, or %NULL
     */
    set_summary(summary: string | null): void
    /**
     * Sets the title of the entry.
     * @param title the new entry title, or %NULL
     */
    set_title(title: string | null): void

    // Class property signals of GData-0.0.GData.Entry

    connect(sigName: "notify::content", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataEntry structure are private and should never be accessed directly.
 * @interface 
 */
class Entry extends Parsable {

    // Own properties of GData-0.0.GData.Entry

    static name: string
    static $gtype: GObject.GType<Entry>

    // Constructors of GData-0.0.GData.Entry

    constructor(config?: Entry_ConstructProps) 
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: Entry_ConstructProps): void
}

interface Feed_ConstructProps extends Parsable_ConstructProps {
}

interface Feed {

    // Own properties of GData-0.0.GData.Feed

    /**
     * The unique ETag for this version of the feed. See the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/reference.html#ResourceVersioning">online documentation</ulink> for
     * more information.
     */
    readonly etag: string
    /**
     * Details of the software used to generate the feed.
     * 
     * API reference: <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_generator">
     * atom:generator</ulink>
     */
    readonly generator: Generator
    /**
     * The URI of an icon for the feed.
     * 
     * API reference:
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.icon">atom:icon</ulink>
     */
    readonly icon: string
    /**
     * The unique and permanent URN ID for the feed.
     * 
     * API reference: <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_id">atom:id</ulink>
     */
    readonly id: string
    /**
     * The number of items per results page feed.
     * 
     * API reference:
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_openSearch:itemsPerPage">
     * openSearch:itemsPerPage</ulink>
     */
    readonly items_per_page: number
    /**
     * The URI of a logo for the feed.
     * 
     * API reference: <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_logo">atom:logo</ulink>
     */
    readonly logo: string
    /**
     * The next page token for feeds. Pass this to
     * gdata_query_set_page_token() to advance to the next page when
     * querying APIs which use page tokens rather than page numbers or
     * offsets.
     */
    readonly next_page_token: string
    /**
     * The ownership rights pertaining to the entire feed.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.rights">Atom specification</ulink>.
     */
    readonly rights: string
    /**
     * The one-based index of the first item in the results feed.
     * 
     * This should <emphasis>not</emphasis> be used manually for pagination. Instead, use a #GDataQuery and call its gdata_query_next_page()
     * or gdata_query_previous_page() functions before making the query to the service.
     * 
     * API reference: <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_openSearch:startIndex">
     * openSearch:startIndex</ulink>
     */
    readonly start_index: number
    /**
     * The subtitle of the feed.
     * 
     * API reference: <ulink type="http" url="http://atomenabled.org/developers/syndication/">atom:subtitle</ulink>
     */
    readonly subtitle: string
    /**
     * The title of the feed.
     * 
     * API reference:
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_title">atom:title</ulink>
     */
    readonly title: string
    /**
     * The number of items in the result set for the feed, including those on other pages. If this is zero, the total number is unknown.
     * 
     * This should <emphasis>not</emphasis> be used manually for pagination. Instead, use a #GDataQuery and call its gdata_query_next_page()
     * or gdata_query_previous_page() functions before making the query to the service.
     * 
     * API reference:
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_openSearch:totalResults">
     * openSearch:totalResults</ulink>
     */
    readonly total_results: number
    /**
     * The time the feed was last updated.
     * 
     * API reference: <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_updated">
     * atom:updated</ulink>
     */
    readonly updated: number

    // Owm methods of GData-0.0.GData.Feed

    /**
     * Returns a list of the authors listed in this feed.
     */
    get_authors(): Author[]
    /**
     * Returns a list of the categories listed in this feed.
     */
    get_categories(): Category[]
    /**
     * Returns a list of the entries contained in this feed.
     */
    get_entries(): Entry[]
    /**
     * Returns the feed's unique ETag for this version.
     */
    get_etag(): string
    /**
     * Returns details about the software which generated the feed.
     */
    get_generator(): Generator
    /**
     * Returns the icon URI of the feed.
     */
    get_icon(): string
    /**
     * Returns the feed's unique and permanent URN ID.
     */
    get_id(): string
    /**
     * Returns the number of items per results page feed.
     */
    get_items_per_page(): number
    /**
     * Returns a list of the links listed in this feed.
     */
    get_links(): Link[]
    /**
     * Returns the logo URI of the feed.
     */
    get_logo(): string
    /**
     * Returns the next page token for a query result, or %NULL if not set.
     * This is #GDataFeed:next-page-token. The page token might not be set if there
     * is no next page, or if this service does not use token based paging (for
     * example, if it uses page number or offset based paging instead). Most more
     * recent services use token based paging.
     */
    get_next_page_token(): string | null
    /**
     * Returns the rights pertaining to the entire feed, or %NULL if not set.
     */
    get_rights(): string
    /**
     * Returns the one-based start index of the results feed in the result set.
     */
    get_start_index(): number
    /**
     * Returns the subtitle of the feed.
     */
    get_subtitle(): string
    /**
     * Returns the title of the feed.
     */
    get_title(): string
    /**
     * Returns the total number of results in the result set, including results on other
     * pages. If this is zero, the total number is unknown.
     */
    get_total_results(): number
    /**
     * Gets the time the feed was last updated.
     */
    get_updated(): number
    /**
     * Returns the entry in the feed with the given `id,` if found.
     * @param id the entry's ID
     */
    look_up_entry(id: string): Entry
    /**
     * Looks up a link by #GDataLink:relation-type value from the list of links in the feed.
     * @param rel the value of the #GDataLink:relation-type property of the desired link
     */
    look_up_link(rel: string): Link

    // Class property signals of GData-0.0.GData.Feed

    connect(sigName: "notify::etag", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::generator", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::generator", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::items-per-page", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-per-page", ...args: any[]): void
    connect(sigName: "notify::logo", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::next-page-token", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-page-token", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::total-results", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-results", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataFeed structure are private and should never be accessed directly.
 * @class 
 */
class Feed extends Parsable {

    // Own properties of GData-0.0.GData.Feed

    static name: string
    static $gtype: GObject.GType<Feed>

    // Constructors of GData-0.0.GData.Feed

    constructor(config?: Feed_ConstructProps) 
    _init(config?: Feed_ConstructProps): void
}

interface GContactCalendar_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GContactCalendar

    /**
     * Indicates which calendar out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     */
    is_primary?: boolean | null
    /**
     * A free-form string that identifies the type of calendar. It is mutually exclusive with #GDataGContactCalendar:relation-type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     */
    label?: string | null
    /**
     * A programmatic value that identifies the type of calendar. It is mutually exclusive with #GDataGContactCalendar:label.
     * Examples are %GDATA_GCONTACT_CALENDAR_HOME or %GDATA_GCONTACT_CALENDAR_FREE_BUSY.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     */
    relation_type?: string | null
    /**
     * The URI of the calendar.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     */
    uri?: string | null
}

interface GContactCalendar extends Comparable {

    // Own properties of GData-0.0.GData.GContactCalendar

    /**
     * Indicates which calendar out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     */
    is_primary: boolean
    /**
     * A free-form string that identifies the type of calendar. It is mutually exclusive with #GDataGContactCalendar:relation-type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     */
    label: string
    /**
     * A programmatic value that identifies the type of calendar. It is mutually exclusive with #GDataGContactCalendar:label.
     * Examples are %GDATA_GCONTACT_CALENDAR_HOME or %GDATA_GCONTACT_CALENDAR_FREE_BUSY.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     */
    relation_type: string
    /**
     * The URI of the calendar.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     */
    uri: string

    // Own fields of GData-0.0.GData.GContactCalendar

    parent: Parsable
    priv: GContactCalendarPrivate

    // Owm methods of GData-0.0.GData.GContactCalendar

    /**
     * Gets the #GDataGContactCalendar:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataGContactCalendar:relation-type property.
     */
    get_relation_type(): string
    /**
     * Gets the #GDataGContactCalendar:uri property.
     */
    get_uri(): string
    /**
     * Sets the #GDataGContactCalendar:is-primary property to `is_primary`.
     * @param is_primary %TRUE if this is the contact's primary calendar, %FALSE otherwise
     */
    set_is_primary(is_primary: boolean): void
    /**
     * Sets the #GDataGContactCalendar:label property to `label`.
     * 
     * If `label` is %NULL, the label will be unset. When the #GDataGContactCalendar is used in a query, however,
     * exactly one of #GDataGContactCalendar:relation-type and #GDataGContactCalendar:label must be %NULL.
     * @param label the new free-form label for the calendar, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataGContactCalendar:relation-type property to `relation_type,`
     * such as %GDATA_GCONTACT_CALENDAR_HOME or %GDATA_GCONTACT_CALENDAR_FREE_BUSY.
     * 
     * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactCalendar is used in a query, however,
     * exactly one of #GDataGContactCalendar:relation-type and #GDataGContactCalendar:label must be %NULL.
     * @param relation_type the new type for the calendar, or %NULL
     */
    set_relation_type(relation_type: string | null): void
    /**
     * Sets the #GDataGContactCalendar:uri property to `uri`.
     * @param uri the new URI for the calendar
     */
    set_uri(uri: string): void

    // Class property signals of GData-0.0.GData.GContactCalendar

    connect(sigName: "notify::is-primary", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGContactCalendar structure are private and should never be accessed directly.
 * @class 
 */
class GContactCalendar extends Parsable {

    // Own properties of GData-0.0.GData.GContactCalendar

    static name: string
    static $gtype: GObject.GType<GContactCalendar>

    // Constructors of GData-0.0.GData.GContactCalendar

    constructor(config?: GContactCalendar_ConstructProps) 
    /**
     * Creates a new #GDataGContactCalendar. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param uri the URI of the calendar
     * @param relation_type the type of calendar, or %NULL
     * @param label a free-form label for the calendar, or %NULL
     * @param is_primary %TRUE if this calendar is its owner's primary calendar, %FALSE otherwise
     */
    constructor(uri: string, relation_type: string | null, label: string | null, is_primary: boolean) 
    /**
     * Creates a new #GDataGContactCalendar. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param uri the URI of the calendar
     * @param relation_type the type of calendar, or %NULL
     * @param label a free-form label for the calendar, or %NULL
     * @param is_primary %TRUE if this calendar is its owner's primary calendar, %FALSE otherwise
     */
    static new(uri: string, relation_type: string | null, label: string | null, is_primary: boolean): GContactCalendar
    _init(config?: GContactCalendar_ConstructProps): void
}

interface GContactEvent_ConstructProps extends Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GContactEvent

    /**
     * The date of the event.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">GContact specification</ulink>.
     */
    date?: GLib.Date | null
    /**
     * A simple string value used to name this event. It is mutually exclusive with #GDataGContactEvent:relation-type.
     * It allows UIs to display a label such as "Wedding anniversary".
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">gContact specification</ulink>.
     */
    label?: string | null
    /**
     * A programmatic value that identifies the type of event. It is mutually exclusive with #GDataGContactEvent:label.
     * Examples are %GDATA_GCONTACT_EVENT_ANNIVERSARY or %GDATA_GCONTACT_EVENT_OTHER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">gContact specification</ulink>.
     */
    relation_type?: string | null
}

interface GContactEvent {

    // Own properties of GData-0.0.GData.GContactEvent

    /**
     * The date of the event.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">GContact specification</ulink>.
     */
    date: GLib.Date
    /**
     * A simple string value used to name this event. It is mutually exclusive with #GDataGContactEvent:relation-type.
     * It allows UIs to display a label such as "Wedding anniversary".
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">gContact specification</ulink>.
     */
    label: string
    /**
     * A programmatic value that identifies the type of event. It is mutually exclusive with #GDataGContactEvent:label.
     * Examples are %GDATA_GCONTACT_EVENT_ANNIVERSARY or %GDATA_GCONTACT_EVENT_OTHER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">gContact specification</ulink>.
     */
    relation_type: string

    // Own fields of GData-0.0.GData.GContactEvent

    parent: Parsable
    priv: GContactEventPrivate

    // Owm methods of GData-0.0.GData.GContactEvent

    /**
     * Gets the #GDataGContactEvent:date property.
     */
    get_date(): /* date */ GLib.Date
    /**
     * Gets the #GDataGContactEvent:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataGContactEvent:relation-type property.
     */
    get_relation_type(): string
    /**
     * Sets the #GDataGContactEvent:date property to `date`.
     * @param date the new date for the event
     */
    set_date(date: GLib.Date): void
    /**
     * Sets the #GDataGContactEvent:label property to `label`.
     * 
     * If `label` is %NULL, the label will be unset. When the #GDataGContactEvent is used in a query, however,
     * exactly one of #GDataGContactEvent:relation-type and #GDataGContactEvent:label must be %NULL.
     * @param label the new label for the event, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataGContactEvent:relation-type property to `relation_type`
     * such as %GDATA_GCONTACT_EVENT_ANNIVERSARY or %GDATA_GCONTACT_EVENT_OTHER.
     * 
     * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactEvent is used in a query, however,
     * exactly one of #GDataGContactEvent:relation-type and #GDataGContactEvent:label must be %NULL.
     * @param relation_type the new relation type for the event, or %NULL
     */
    set_relation_type(relation_type: string | null): void

    // Class property signals of GData-0.0.GData.GContactEvent

    connect(sigName: "notify::date", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGContactEvent structure are private and should never be accessed directly.
 * @class 
 */
class GContactEvent extends Parsable {

    // Own properties of GData-0.0.GData.GContactEvent

    static name: string
    static $gtype: GObject.GType<GContactEvent>

    // Constructors of GData-0.0.GData.GContactEvent

    constructor(config?: GContactEvent_ConstructProps) 
    /**
     * Creates a new #GDataGContactEvent. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param date the date of the event
     * @param relation_type the relationship between the event and its owner, or %NULL
     * @param label a human-readable label for the event, or %NULL
     */
    constructor(date: GLib.Date, relation_type: string | null, label: string | null) 
    /**
     * Creates a new #GDataGContactEvent. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param date the date of the event
     * @param relation_type the relationship between the event and its owner, or %NULL
     * @param label a human-readable label for the event, or %NULL
     */
    static new(date: GLib.Date, relation_type: string | null, label: string | null): GContactEvent
    _init(config?: GContactEvent_ConstructProps): void
}

interface GContactExternalID_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GContactExternalID

    /**
     * A free-form string that identifies the type of external ID. It is mutually exclusive with #GDataGContactExternalID:relation-type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     */
    label?: string | null
    /**
     * A programmatic value that identifies the type of external ID. It is mutually exclusive with #GDataGContactExternalID:label.
     * Examples are %GDATA_GCONTACT_EXTERNAL_ID_NETWORK or %GDATA_GCONTACT_EXTERNAL_ID_ACCOUNT.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     */
    relation_type?: string | null
    /**
     * The value of the external ID.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     */
    value?: string | null
}

interface GContactExternalID extends Comparable {

    // Own properties of GData-0.0.GData.GContactExternalID

    /**
     * A free-form string that identifies the type of external ID. It is mutually exclusive with #GDataGContactExternalID:relation-type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     */
    label: string
    /**
     * A programmatic value that identifies the type of external ID. It is mutually exclusive with #GDataGContactExternalID:label.
     * Examples are %GDATA_GCONTACT_EXTERNAL_ID_NETWORK or %GDATA_GCONTACT_EXTERNAL_ID_ACCOUNT.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     */
    relation_type: string
    /**
     * The value of the external ID.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     */
    value: string

    // Own fields of GData-0.0.GData.GContactExternalID

    parent: Parsable
    priv: GContactExternalIDPrivate

    // Owm methods of GData-0.0.GData.GContactExternalID

    /**
     * Gets the #GDataGContactExternalID:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataGContactExternalID:relation-type property.
     */
    get_relation_type(): string
    /**
     * Gets the #GDataGContactExternalID:value property.
     */
    get_value(): string
    /**
     * Sets the #GDataGContactExternalID:label property to `label`.
     * 
     * If `label` is %NULL, the label will be unset. When the #GDataGContactExternalID is used in a query, however,
     * exactly one of #GDataGContactExternalID:relation-type and #GDataGContactExternalID:label must be %NULL.
     * @param label the new free-form label for the external ID, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataGContactExternalID:relation-type property to `relation_type,`
     * such as %GDATA_GCONTACT_EXTERNAL_ID_NETWORK or %GDATA_GCONTACT_EXTERNAL_ID_ACCOUNT.
     * 
     * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactExternalID is used in a query, however,
     * exactly one of #GDataGContactExternalID:relation-type and #GDataGContactExternalID:label must be %NULL.
     * @param relation_type the new type for the external ID, or %NULL
     */
    set_relation_type(relation_type: string | null): void
    /**
     * Sets the #GDataGContactExternalID:value property to `value`.
     * @param value the new value for the external ID
     */
    set_value(value: string): void

    // Class property signals of GData-0.0.GData.GContactExternalID

    connect(sigName: "notify::label", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGContactExternalID structure are private and should never be accessed directly.
 * @class 
 */
class GContactExternalID extends Parsable {

    // Own properties of GData-0.0.GData.GContactExternalID

    static name: string
    static $gtype: GObject.GType<GContactExternalID>

    // Constructors of GData-0.0.GData.GContactExternalID

    constructor(config?: GContactExternalID_ConstructProps) 
    /**
     * Creates a new #GDataGContactExternalID. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param value the value of the external ID
     * @param relation_type the type of external ID, or %NULL
     * @param label a free-form label for the external ID, or %NULL
     */
    constructor(value: string, relation_type: string | null, label: string | null) 
    /**
     * Creates a new #GDataGContactExternalID. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param value the value of the external ID
     * @param relation_type the type of external ID, or %NULL
     * @param label a free-form label for the external ID, or %NULL
     */
    static new(value: string, relation_type: string | null, label: string | null): GContactExternalID
    _init(config?: GContactExternalID_ConstructProps): void
}

interface GContactJot_ConstructProps extends Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GContactJot

    /**
     * The content of the jot.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">gContact specification</ulink>.
     */
    content?: string | null
    /**
     * A programmatic value that identifies the type of jot. Examples are %GDATA_GCONTACT_JOT_HOME or %GDATA_GCONTACT_JOT_OTHER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">gContact specification</ulink>.
     */
    relation_type?: string | null
}

interface GContactJot {

    // Own properties of GData-0.0.GData.GContactJot

    /**
     * The content of the jot.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">gContact specification</ulink>.
     */
    content: string
    /**
     * A programmatic value that identifies the type of jot. Examples are %GDATA_GCONTACT_JOT_HOME or %GDATA_GCONTACT_JOT_OTHER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">gContact specification</ulink>.
     */
    relation_type: string

    // Own fields of GData-0.0.GData.GContactJot

    parent: Parsable
    priv: GContactJotPrivate

    // Owm methods of GData-0.0.GData.GContactJot

    /**
     * Gets the #GDataGContactJot:content property.
     */
    get_content(): string
    /**
     * Gets the #GDataGContactJot:relation-type property.
     */
    get_relation_type(): string
    /**
     * Sets the #GDataGContactJot:content property to `content`.
     * @param content the new content
     */
    set_content(content: string): void
    /**
     * Sets the #GDataGContactJot:relation-type property to `relation_type`
     * such as %GDATA_GCONTACT_JOT_HOME or %GDATA_GCONTACT_JOT_OTHER.
     * @param relation_type the new relation type for the jot, or %NULL
     */
    set_relation_type(relation_type: string): void

    // Class property signals of GData-0.0.GData.GContactJot

    connect(sigName: "notify::content", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGContactJot structure are private and should never be accessed directly.
 * @class 
 */
class GContactJot extends Parsable {

    // Own properties of GData-0.0.GData.GContactJot

    static name: string
    static $gtype: GObject.GType<GContactJot>

    // Constructors of GData-0.0.GData.GContactJot

    constructor(config?: GContactJot_ConstructProps) 
    /**
     * Creates a new #GDataGContactJot. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">gContact specification</ulink>.
     * @constructor 
     * @param content the content of the jot
     * @param relation_type the relationship between the jot and its owner
     */
    constructor(content: string, relation_type: string) 
    /**
     * Creates a new #GDataGContactJot. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">gContact specification</ulink>.
     * @constructor 
     * @param content the content of the jot
     * @param relation_type the relationship between the jot and its owner
     */
    static new(content: string, relation_type: string): GContactJot
    _init(config?: GContactJot_ConstructProps): void
}

interface GContactLanguage_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GContactLanguage

    /**
     * A code identifying the language, conforming to the IETF BCP 47 specification. It is mutually exclusive with #GDataGContactLanguage:label.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage">gContact specification</ulink>.
     */
    code?: string | null
    /**
     * A free-form string that identifies the language. It is mutually exclusive with #GDataGContactLanguage:code.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage">gContact specification</ulink>.
     */
    label?: string | null
}

interface GContactLanguage extends Comparable {

    // Own properties of GData-0.0.GData.GContactLanguage

    /**
     * A code identifying the language, conforming to the IETF BCP 47 specification. It is mutually exclusive with #GDataGContactLanguage:label.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage">gContact specification</ulink>.
     */
    code: string
    /**
     * A free-form string that identifies the language. It is mutually exclusive with #GDataGContactLanguage:code.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage">gContact specification</ulink>.
     */
    label: string

    // Own fields of GData-0.0.GData.GContactLanguage

    parent: Parsable
    priv: GContactLanguagePrivate

    // Owm methods of GData-0.0.GData.GContactLanguage

    /**
     * Gets the #GDataGContactLanguage:code property.
     */
    get_code(): string
    /**
     * Gets the #GDataGContactLanguage:label property.
     */
    get_label(): string
    /**
     * Sets the #GDataGContactLanguage:code property to `code`.
     * 
     * If `code` is %NULL, the code will be unset. When the #GDataGContactLanguage is used in a query, however,
     * exactly one of #GDataGContactLanguage:code and #GDataGContactLanguage:label must be %NULL.
     * @param code the new code for the language, or %NULL
     */
    set_code(code: string | null): void
    /**
     * Sets the #GDataGContactLanguage:label property to `label`.
     * 
     * If `label` is %NULL, the label will be unset. When the #GDataGContactLanguage is used in a query, however,
     * exactly one of #GDataGContactLanguage:code and #GDataGContactLanguage:label must be %NULL.
     * @param label the new free-form label for the language, or %NULL
     */
    set_label(label: string | null): void

    // Class property signals of GData-0.0.GData.GContactLanguage

    connect(sigName: "notify::code", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::code", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::code", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGContactLanguage structure are private and should never be accessed directly.
 * @class 
 */
class GContactLanguage extends Parsable {

    // Own properties of GData-0.0.GData.GContactLanguage

    static name: string
    static $gtype: GObject.GType<GContactLanguage>

    // Constructors of GData-0.0.GData.GContactLanguage

    constructor(config?: GContactLanguage_ConstructProps) 
    /**
     * Creates a new #GDataGContactLanguage. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage">gContact specification</ulink>.
     * 
     * Exactly one of `code` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param code the language code, or %NULL
     * @param label a free-form label for the language, or %NULL
     */
    constructor(code: string | null, label: string | null) 
    /**
     * Creates a new #GDataGContactLanguage. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage">gContact specification</ulink>.
     * 
     * Exactly one of `code` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param code the language code, or %NULL
     * @param label a free-form label for the language, or %NULL
     */
    static new(code: string | null, label: string | null): GContactLanguage
    _init(config?: GContactLanguage_ConstructProps): void
}

interface GContactRelation_ConstructProps extends Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GContactRelation

    /**
     * A free-form string that identifies the type of relation. It is mutually exclusive with #GDataGContactRelation:relation-type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     */
    label?: string | null
    /**
     * The name of the relation. It need not be a full name, and there need not be a contact representing the name.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     */
    name?: string | null
    /**
     * A programmatic value that identifies the type of relation. It is mutually exclusive with #GDataGContactRelation:label.
     * Examples are %GDATA_GCONTACT_RELATION_MANAGER or %GDATA_GCONTACT_RELATION_CHILD.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     */
    relation_type?: string | null
}

interface GContactRelation {

    // Own properties of GData-0.0.GData.GContactRelation

    /**
     * A free-form string that identifies the type of relation. It is mutually exclusive with #GDataGContactRelation:relation-type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     */
    label: string
    /**
     * The name of the relation. It need not be a full name, and there need not be a contact representing the name.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     */
    name: string
    /**
     * A programmatic value that identifies the type of relation. It is mutually exclusive with #GDataGContactRelation:label.
     * Examples are %GDATA_GCONTACT_RELATION_MANAGER or %GDATA_GCONTACT_RELATION_CHILD.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     */
    relation_type: string

    // Own fields of GData-0.0.GData.GContactRelation

    parent: Parsable
    priv: GContactRelationPrivate

    // Owm methods of GData-0.0.GData.GContactRelation

    /**
     * Gets the #GDataGContactRelation:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataGContactRelation:name property.
     */
    get_name(): string
    /**
     * Gets the #GDataGContactRelation:relation-type property.
     */
    get_relation_type(): string
    /**
     * Sets the #GDataGContactRelation:label property to `label`.
     * 
     * If `label` is %NULL, the label will be unset. When the #GDataGContactRelation is used in a query, however,
     * exactly one of #GDataGContactRelation:relation-type and #GDataGContactRelation:label must be %NULL.
     * @param label the new free-form type for the relation, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataGContactRelation:name property to `name`.
     * @param name the new name for the relation
     */
    set_name(name: string | null): void
    /**
     * Sets the #GDataGContactRelation:relation-type property to `relation_type,`
     * such as %GDATA_GCONTACT_RELATION_MANAGER or %GDATA_GCONTACT_RELATION_CHILD.
     * 
     * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactRelation is used in a query, however,
     * exactly one of #GDataGContactRelation:relation-type and #GDataGContactRelation:label must be %NULL.
     * @param relation_type the new type for the relation, or %NULL
     */
    set_relation_type(relation_type: string | null): void

    // Class property signals of GData-0.0.GData.GContactRelation

    connect(sigName: "notify::label", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGContactRelation structure are private and should never be accessed directly.
 * @class 
 */
class GContactRelation extends Parsable {

    // Own properties of GData-0.0.GData.GContactRelation

    static name: string
    static $gtype: GObject.GType<GContactRelation>

    // Constructors of GData-0.0.GData.GContactRelation

    constructor(config?: GContactRelation_ConstructProps) 
    /**
     * Creates a new #GDataGContactRelation. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param name the name of the relation
     * @param relation_type the type of relation, or %NULL
     * @param label a free-form label for the type of relation, or %NULL
     */
    constructor(name: string, relation_type: string | null, label: string | null) 
    /**
     * Creates a new #GDataGContactRelation. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param name the name of the relation
     * @param relation_type the type of relation, or %NULL
     * @param label a free-form label for the type of relation, or %NULL
     */
    static new(name: string, relation_type: string | null, label: string | null): GContactRelation
    _init(config?: GContactRelation_ConstructProps): void
}

interface GContactWebsite_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GContactWebsite

    /**
     * Indicates which website out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     */
    is_primary?: boolean | null
    /**
     * A simple string value used to name this website. It allows UIs to display a label such as "Work", "Travel blog", "Personal blog", etc.
     * It is mutually exclusive with #GDataGContactWebsite:relation-type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     */
    label?: string | null
    /**
     * A programmatic value that identifies the type of website. Examples are %GDATA_GCONTACT_WEBSITE_HOME_PAGE or %GDATA_GCONTACT_WEBSITE_FTP.
     * It is mutually exclusive with #GDataGContactWebsite:label.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     */
    relation_type?: string | null
    /**
     * The URI of the website.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     */
    uri?: string | null
}

interface GContactWebsite extends Comparable {

    // Own properties of GData-0.0.GData.GContactWebsite

    /**
     * Indicates which website out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     */
    is_primary: boolean
    /**
     * A simple string value used to name this website. It allows UIs to display a label such as "Work", "Travel blog", "Personal blog", etc.
     * It is mutually exclusive with #GDataGContactWebsite:relation-type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     */
    label: string
    /**
     * A programmatic value that identifies the type of website. Examples are %GDATA_GCONTACT_WEBSITE_HOME_PAGE or %GDATA_GCONTACT_WEBSITE_FTP.
     * It is mutually exclusive with #GDataGContactWebsite:label.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     */
    relation_type: string
    /**
     * The URI of the website.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     */
    uri: string

    // Own fields of GData-0.0.GData.GContactWebsite

    parent: Parsable
    priv: GContactWebsitePrivate

    // Owm methods of GData-0.0.GData.GContactWebsite

    /**
     * Gets the #GDataGContactWebsite:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataGContactWebsite:relation-type property.
     */
    get_relation_type(): string
    /**
     * Gets the #GDataGContactWebsite:uri property.
     */
    get_uri(): string
    /**
     * Sets the #GDataGContactWebsite:is-primary property to `is_primary`.
     * @param is_primary %TRUE if this is the primary website, %FALSE otherwise
     */
    set_is_primary(is_primary: boolean): void
    /**
     * Sets the #GDataGContactWebsite:label property to `label`.
     * 
     * If `label` is %NULL, the label will be unset. When the #GDataGContactWebsite is used in a query, however,
     * exactly one of #GDataGContactWebsite:relation-type and #GDataGContactWebsite:label must be %NULL.
     * @param label the new label for the website, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataGContactWebsite:relation-type property to `relation_type`
     * such as %GDATA_GCONTACT_WEBSITE_HOME_PAGE or %GDATA_GCONTACT_WEBSITE_FTP.
     * 
     * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactWebsite is used in a query, however,
     * exactly one of #GDataGContactWebsite:relation-type and #GDataGContactWebsite:label must be %NULL.
     * @param relation_type the new relation type for the website
     */
    set_relation_type(relation_type: string): void
    /**
     * Sets the #GDataGContactWebsite:uri property to `uri`.
     * @param uri the new website URI
     */
    set_uri(uri: string): void

    // Class property signals of GData-0.0.GData.GContactWebsite

    connect(sigName: "notify::is-primary", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGContactWebsite structure are private and should never be accessed directly.
 * @class 
 */
class GContactWebsite extends Parsable {

    // Own properties of GData-0.0.GData.GContactWebsite

    static name: string
    static $gtype: GObject.GType<GContactWebsite>

    // Constructors of GData-0.0.GData.GContactWebsite

    constructor(config?: GContactWebsite_ConstructProps) 
    /**
     * Creates a new #GDataGContactWebsite. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param uri the website URI
     * @param relation_type the relationship between the website and its owner, or %NULL
     * @param label a human-readable label for the website, or %NULL
     * @param is_primary %TRUE if this website is its owner's primary website, %FALSE otherwise
     */
    constructor(uri: string, relation_type: string, label: string | null, is_primary: boolean) 
    /**
     * Creates a new #GDataGContactWebsite. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param uri the website URI
     * @param relation_type the relationship between the website and its owner, or %NULL
     * @param label a human-readable label for the website, or %NULL
     * @param is_primary %TRUE if this website is its owner's primary website, %FALSE otherwise
     */
    static new(uri: string, relation_type: string, label: string | null, is_primary: boolean): GContactWebsite
    _init(config?: GContactWebsite_ConstructProps): void
}

interface GDEmailAddress_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GDEmailAddress

    /**
     * The e-mail address itself.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    address?: string | null
    /**
     * A display name of the entity (e.g. a person) the e-mail address belongs to.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    display_name?: string | null
    /**
     * Indicates which e-mail address out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    is_primary?: boolean | null
    /**
     * A simple string value used to name this e-mail address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    label?: string | null
    /**
     * A programmatic value that identifies the type of e-mail address. For example: %GDATA_GD_EMAIL_ADDRESS_HOME or %GDATA_GD_EMAIL_ADDRESS_WORK.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    relation_type?: string | null
}

interface GDEmailAddress extends Comparable {

    // Own properties of GData-0.0.GData.GDEmailAddress

    /**
     * The e-mail address itself.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    address: string
    /**
     * A display name of the entity (e.g. a person) the e-mail address belongs to.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    display_name: string
    /**
     * Indicates which e-mail address out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    is_primary: boolean
    /**
     * A simple string value used to name this e-mail address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    label: string
    /**
     * A programmatic value that identifies the type of e-mail address. For example: %GDATA_GD_EMAIL_ADDRESS_HOME or %GDATA_GD_EMAIL_ADDRESS_WORK.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    relation_type: string

    // Own fields of GData-0.0.GData.GDEmailAddress

    parent: Parsable
    priv: GDEmailAddressPrivate

    // Owm methods of GData-0.0.GData.GDEmailAddress

    /**
     * Gets the #GDataGDEmailAddress:address property.
     */
    get_address(): string
    /**
     * Gets the #GDataGDEmailAddress:display-name property.
     */
    get_display_name(): string
    /**
     * Gets the #GDataGDEmailAddress:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataGDEmailAddress:relation-type property.
     */
    get_relation_type(): string
    /**
     * Sets the #GDataGDEmailAddress:address property to `address`.
     * @param address the new e-mail address
     */
    set_address(address: string): void
    /**
     * Sets the #GDataGDEmailAddress:display-name property to `display_name`.
     * 
     * Set `display_name` to %NULL to unset the property in the e-mail address.
     * @param display_name the new display name, or %NULL
     */
    set_display_name(display_name: string | null): void
    /**
     * Sets the #GDataGDEmailAddress:is-primary property to `is_primary`.
     * @param is_primary %TRUE if this is the primary e-mail address, %FALSE otherwise
     */
    set_is_primary(is_primary: boolean): void
    /**
     * Sets the #GDataGDEmailAddress:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property in the e-mail address.
     * @param label the new label for the e-mail address, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataGDEmailAddress:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property in the e-mail address.
     * @param relation_type the new relation type for the email_address, or %NULL
     */
    set_relation_type(relation_type: string | null): void

    // Class property signals of GData-0.0.GData.GDEmailAddress

    connect(sigName: "notify::address", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::is-primary", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGDEmailAddress structure are private and should never be accessed directly.
 * @class 
 */
class GDEmailAddress extends Parsable {

    // Own properties of GData-0.0.GData.GDEmailAddress

    static name: string
    static $gtype: GObject.GType<GDEmailAddress>

    // Constructors of GData-0.0.GData.GDEmailAddress

    constructor(config?: GDEmailAddress_ConstructProps) 
    /**
     * Creates a new #GDataGDEmailAddress. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     * @constructor 
     * @param address the e-mail address
     * @param relation_type the relationship between the e-mail address and its owner, or %NULL
     * @param label a human-readable label for the e-mail address, or %NULL
     * @param is_primary %TRUE if this e-mail address is its owner's primary address, %FALSE otherwise
     */
    constructor(address: string, relation_type: string | null, label: string | null, is_primary: boolean) 
    /**
     * Creates a new #GDataGDEmailAddress. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     * @constructor 
     * @param address the e-mail address
     * @param relation_type the relationship between the e-mail address and its owner, or %NULL
     * @param label a human-readable label for the e-mail address, or %NULL
     * @param is_primary %TRUE if this e-mail address is its owner's primary address, %FALSE otherwise
     */
    static new(address: string, relation_type: string | null, label: string | null, is_primary: boolean): GDEmailAddress
    _init(config?: GDEmailAddress_ConstructProps): void
}

interface GDIMAddress_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GDIMAddress

    /**
     * The IM address itself.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    address?: string | null
    /**
     * Indicates which IM address out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    is_primary?: boolean | null
    /**
     * A simple string value used to name this IM address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    label?: string | null
    /**
     * Identifies the IM network. For example: %GDATA_GD_IM_PROTOCOL_JABBER or %GDATA_GD_IM_PROTOCOL_GOOGLE_TALK.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    protocol?: string | null
    /**
     * A programmatic value that identifies the type of IM address. For example: %GDATA_GD_IM_ADDRESS_HOME or %GDATA_GD_IM_ADDRESS_WORK.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    relation_type?: string | null
}

interface GDIMAddress extends Comparable {

    // Own properties of GData-0.0.GData.GDIMAddress

    /**
     * The IM address itself.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    address: string
    /**
     * Indicates which IM address out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    is_primary: boolean
    /**
     * A simple string value used to name this IM address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    label: string
    /**
     * Identifies the IM network. For example: %GDATA_GD_IM_PROTOCOL_JABBER or %GDATA_GD_IM_PROTOCOL_GOOGLE_TALK.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    protocol: string
    /**
     * A programmatic value that identifies the type of IM address. For example: %GDATA_GD_IM_ADDRESS_HOME or %GDATA_GD_IM_ADDRESS_WORK.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    relation_type: string

    // Own fields of GData-0.0.GData.GDIMAddress

    parent: Parsable
    priv: GDIMAddressPrivate

    // Owm methods of GData-0.0.GData.GDIMAddress

    /**
     * Gets the #GDataGDIMAddress:address property.
     */
    get_address(): string
    /**
     * Gets the #GDataGDIMAddress:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataGDIMAddress:protocol property.
     */
    get_protocol(): string
    /**
     * Gets the #GDataGDIMAddress:relation-type property.
     */
    get_relation_type(): string
    /**
     * Sets the #GDataGDIMAddress:address property to `address`.
     * @param address the new IM address
     */
    set_address(address: string): void
    /**
     * Sets the #GDataGDIMAddress:is-primary property to `is_primary`.
     * @param is_primary %TRUE if this is the primary IM address, %FALSE otherwise
     */
    set_is_primary(is_primary: boolean): void
    /**
     * Sets the #GDataGDIMAddress:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property in the IM address.
     * @param label the new label for the IM address, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataGDIMAddress:protocol property to `protocol`.
     * @param protocol the new IM protocol, or %NULL
     */
    set_protocol(protocol: string | null): void
    /**
     * Sets the #GDataGDIMAddress:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property in the IM address.
     * @param relation_type the new relation type for the im_address, or %NULL
     */
    set_relation_type(relation_type: string | null): void

    // Class property signals of GData-0.0.GData.GDIMAddress

    connect(sigName: "notify::address", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::is-primary", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGDIMAddress structure are private and should never be accessed directly.
 * @class 
 */
class GDIMAddress extends Parsable {

    // Own properties of GData-0.0.GData.GDIMAddress

    static name: string
    static $gtype: GObject.GType<GDIMAddress>

    // Constructors of GData-0.0.GData.GDIMAddress

    constructor(config?: GDIMAddress_ConstructProps) 
    /**
     * Creates a new #GDataGDIMAddress. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     * @constructor 
     * @param address the IM address
     * @param protocol a URI identifying the IM protocol, or %NULL
     * @param relation_type the relationship between the IM address and its owner, or %NULL
     * @param label a human-readable label for the IM address, or %NULL
     * @param is_primary %TRUE if this IM address is its owner's primary address, %FALSE otherwise
     */
    constructor(address: string, protocol: string | null, relation_type: string | null, label: string | null, is_primary: boolean) 
    /**
     * Creates a new #GDataGDIMAddress. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     * @constructor 
     * @param address the IM address
     * @param protocol a URI identifying the IM protocol, or %NULL
     * @param relation_type the relationship between the IM address and its owner, or %NULL
     * @param label a human-readable label for the IM address, or %NULL
     * @param is_primary %TRUE if this IM address is its owner's primary address, %FALSE otherwise
     */
    static new(address: string, protocol: string | null, relation_type: string | null, label: string | null, is_primary: boolean): GDIMAddress
    _init(config?: GDIMAddress_ConstructProps): void
}

interface GDName_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GDName

    /**
     * An additional name for the person (e.g. a middle name).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    additional_name?: string | null
    /**
     * The person's family name.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    family_name?: string | null
    /**
     * An unstructured representation of the person's full name. It's generally advised to use the other individual properties in preference
     * to this one, which can fall out of synchronisation with the other properties.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    full_name?: string | null
    /**
     * The person's given name.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    given_name?: string | null
    /**
     * An honorific prefix (e.g. <literal>Mr</literal> or <literal>Mrs</literal>).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    prefix?: string | null
    /**
     * An honorific suffix (e.g. <literal>san</literal> or <literal>III</literal>).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    suffix?: string | null
}

interface GDName extends Comparable {

    // Own properties of GData-0.0.GData.GDName

    /**
     * An additional name for the person (e.g. a middle name).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    additional_name: string
    /**
     * The person's family name.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    family_name: string
    /**
     * An unstructured representation of the person's full name. It's generally advised to use the other individual properties in preference
     * to this one, which can fall out of synchronisation with the other properties.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    full_name: string
    /**
     * The person's given name.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    given_name: string
    /**
     * An honorific prefix (e.g. <literal>Mr</literal> or <literal>Mrs</literal>).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    prefix: string
    /**
     * An honorific suffix (e.g. <literal>san</literal> or <literal>III</literal>).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    suffix: string

    // Own fields of GData-0.0.GData.GDName

    parent: Parsable
    priv: GDNamePrivate

    // Owm methods of GData-0.0.GData.GDName

    /**
     * Gets the #GDataGDName:additional-name property.
     */
    get_additional_name(): string
    /**
     * Gets the #GDataGDName:family-name property.
     */
    get_family_name(): string
    /**
     * Gets the #GDataGDName:full-name property.
     */
    get_full_name(): string
    /**
     * Gets the #GDataGDName:given-name property.
     */
    get_given_name(): string
    /**
     * Gets the #GDataGDName:prefix property.
     */
    get_prefix(): string
    /**
     * Gets the #GDataGDName:suffix property.
     */
    get_suffix(): string
    /**
     * Sets the #GDataGDName:additional-name property to `additional_name`.
     * @param additional_name the new additional name, or %NULL
     */
    set_additional_name(additional_name: string | null): void
    /**
     * Sets the #GDataGDName:family-name property to `family_name`.
     * @param family_name the new family name, or %NULL
     */
    set_family_name(family_name: string | null): void
    /**
     * Sets the #GDataGDName:full-name property to `full_name`.
     * @param full_name the new full name, or %NULL
     */
    set_full_name(full_name: string | null): void
    /**
     * Sets the #GDataGDName:given-name property to `given_name`.
     * @param given_name the new given name, or %NULL
     */
    set_given_name(given_name: string | null): void
    /**
     * Sets the #GDataGDName:prefix property to `prefix`.
     * @param prefix the new prefix, or %NULL
     */
    set_prefix(prefix: string | null): void
    /**
     * Sets the #GDataGDName:suffix property to `suffix`.
     * @param suffix the new suffix, or %NULL
     */
    set_suffix(suffix: string | null): void

    // Class property signals of GData-0.0.GData.GDName

    connect(sigName: "notify::additional-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::additional-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::additional-name", ...args: any[]): void
    connect(sigName: "notify::family-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::given-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::given-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::given-name", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::suffix", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffix", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::suffix", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGDName structure are private and should never be accessed directly.
 * @class 
 */
class GDName extends Parsable {

    // Own properties of GData-0.0.GData.GDName

    static name: string
    static $gtype: GObject.GType<GDName>

    // Constructors of GData-0.0.GData.GDName

    constructor(config?: GDName_ConstructProps) 
    /**
     * Creates a new #GDataGDName. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     * @constructor 
     * @param given_name the person's given name, or %NULL
     * @param family_name the person's family name, or %NULL
     */
    constructor(given_name: string | null, family_name: string | null) 
    /**
     * Creates a new #GDataGDName. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     * @constructor 
     * @param given_name the person's given name, or %NULL
     * @param family_name the person's family name, or %NULL
     */
    static new(given_name: string | null, family_name: string | null): GDName
    _init(config?: GDName_ConstructProps): void
}

interface GDOrganization_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GDOrganization

    /**
     * Specifies a department within the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    department?: string | null
    /**
     * Indicates which organization out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    is_primary?: boolean | null
    /**
     * Description of a job within the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    job_description?: string | null
    /**
     * A simple string value used to name this organization. It allows UIs to display a label such as "Work", "Volunteer",
     * "Professional Society", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    label?: string | null
    /**
     * A place associated with the organization, e.g. office location.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    location?: GDWhere | null
    /**
     * The name of the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    name?: string | null
    /**
     * A programmatic value that identifies the type of organization. For example: %GDATA_GD_ORGANIZATION_WORK or %GDATA_GD_ORGANIZATION_OTHER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    relation_type?: string | null
    /**
     * Stock symbol of the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    symbol?: string | null
    /**
     * The title of a person within the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    title?: string | null
}

interface GDOrganization extends Comparable {

    // Own properties of GData-0.0.GData.GDOrganization

    /**
     * Specifies a department within the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    department: string
    /**
     * Indicates which organization out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    is_primary: boolean
    /**
     * Description of a job within the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    job_description: string
    /**
     * A simple string value used to name this organization. It allows UIs to display a label such as "Work", "Volunteer",
     * "Professional Society", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    label: string
    /**
     * A place associated with the organization, e.g. office location.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    location: GDWhere
    /**
     * The name of the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    name: string
    /**
     * A programmatic value that identifies the type of organization. For example: %GDATA_GD_ORGANIZATION_WORK or %GDATA_GD_ORGANIZATION_OTHER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    relation_type: string
    /**
     * Stock symbol of the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    symbol: string
    /**
     * The title of a person within the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    title: string

    // Own fields of GData-0.0.GData.GDOrganization

    parent: Parsable
    priv: GDOrganizationPrivate

    // Owm methods of GData-0.0.GData.GDOrganization

    /**
     * Gets the #GDataGDOrganization:department property.
     */
    get_department(): string
    /**
     * Gets the #GDataGDOrganization:job-description property.
     */
    get_job_description(): string
    /**
     * Gets the #GDataGDOrganization:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataGDOrganization:location property.
     */
    get_location(): GDWhere
    /**
     * Gets the #GDataGDOrganization:name property.
     */
    get_name(): string
    /**
     * Gets the #GDataGDOrganization:relation-type property.
     */
    get_relation_type(): string
    /**
     * Gets the #GDataGDOrganization:symbol property.
     */
    get_symbol(): string
    /**
     * Gets the #GDataGDOrganization:title property.
     */
    get_title(): string
    /**
     * Sets the #GDataGDOrganization:department property to `department`.
     * 
     * Set `department` to %NULL to unset the property in the organization.
     * @param department the new department for the person working in the organization, or %NULL
     */
    set_department(department: string | null): void
    /**
     * Sets the #GDataGDOrganization:is-primary property to `is_primary`.
     * @param is_primary %TRUE if this is the primary organization, %FALSE otherwise
     */
    set_is_primary(is_primary: boolean): void
    /**
     * Sets the #GDataGDOrganization:job-description property to `job_description`.
     * 
     * Set `job_description` to %NULL to unset the property in the organization.
     * @param job_description the new job description for the person in the organization, or %NULL
     */
    set_job_description(job_description: string | null): void
    /**
     * Sets the #GDataGDOrganization:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property in the organization.
     * @param label the new label for the organization, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataGDOrganization:location property to `location`.
     * 
     * Set `location` to %NULL to unset the property in the organization.
     * @param location the new location for the organization, or %NULL
     */
    set_location(location: GDWhere | null): void
    /**
     * Sets the #GDataGDOrganization:name property to `name`.
     * 
     * Set `name` to %NULL to unset the property in the organization.
     * @param name the new name for the organization, or %NULL
     */
    set_name(name: string | null): void
    /**
     * Sets the #GDataGDOrganization:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property in the organization.
     * @param relation_type the new relation type for the organization, or %NULL
     */
    set_relation_type(relation_type: string | null): void
    /**
     * Sets the #GDataGDOrganization:symbol property to `symbol`.
     * 
     * Set `symbol` to %NULL to unset the property in the organization.
     * @param symbol the new stock symbol for the organization, or %NULL
     */
    set_symbol(symbol: string | null): void
    /**
     * Sets the #GDataGDOrganization:title property to `title`.
     * 
     * Set `title` to %NULL to unset the property in the organization.
     * @param title the new title for the organization, or %NULL
     */
    set_title(title: string | null): void

    // Class property signals of GData-0.0.GData.GDOrganization

    connect(sigName: "notify::department", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::department", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::department", ...args: any[]): void
    connect(sigName: "notify::is-primary", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::job-description", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::job-description", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::job-description", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::symbol", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbol", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::symbol", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGDOrganization structure are private and should never be accessed directly.
 * @class 
 */
class GDOrganization extends Parsable {

    // Own properties of GData-0.0.GData.GDOrganization

    static name: string
    static $gtype: GObject.GType<GDOrganization>

    // Constructors of GData-0.0.GData.GDOrganization

    constructor(config?: GDOrganization_ConstructProps) 
    /**
     * Creates a new #GDataGDOrganization. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     * @constructor 
     * @param name the name of the organization, or %NULL
     * @param title the owner's title within the organization, or %NULL
     * @param relation_type the relationship between the organization and its owner, or %NULL
     * @param label a human-readable label for the organization, or %NULL
     * @param is_primary %TRUE if this organization is its owner's primary organization, %FALSE otherwise
     */
    constructor(name: string | null, title: string | null, relation_type: string | null, label: string | null, is_primary: boolean) 
    /**
     * Creates a new #GDataGDOrganization. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     * @constructor 
     * @param name the name of the organization, or %NULL
     * @param title the owner's title within the organization, or %NULL
     * @param relation_type the relationship between the organization and its owner, or %NULL
     * @param label a human-readable label for the organization, or %NULL
     * @param is_primary %TRUE if this organization is its owner's primary organization, %FALSE otherwise
     */
    static new(name: string | null, title: string | null, relation_type: string | null, label: string | null, is_primary: boolean): GDOrganization
    _init(config?: GDOrganization_ConstructProps): void
}

interface GDPhoneNumber_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GDPhoneNumber

    /**
     * Indicates which phone number out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    is_primary?: boolean | null
    /**
     * A simple string value used to name this phone number. It allows UIs to display a label such as "Mobile", "Home", "Work", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    label?: string | null
    /**
     * Human-readable phone number; may be in any telephone number format.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    number?: string | null
    /**
     * A programmatic value that identifies the type of phone number. For example: %GDATA_GD_PHONE_NUMBER_WORK or %GDATA_GD_PHONE_NUMBER_PAGER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    relation_type?: string | null
    /**
     * An optional "tel URI" used to represent the number in a formal way. Useful for programmatic access, such as a VoIP/PSTN bridge.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    uri?: string | null
}

interface GDPhoneNumber extends Comparable {

    // Own properties of GData-0.0.GData.GDPhoneNumber

    /**
     * Indicates which phone number out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    is_primary: boolean
    /**
     * A simple string value used to name this phone number. It allows UIs to display a label such as "Mobile", "Home", "Work", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    label: string
    /**
     * Human-readable phone number; may be in any telephone number format.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    number: string
    /**
     * A programmatic value that identifies the type of phone number. For example: %GDATA_GD_PHONE_NUMBER_WORK or %GDATA_GD_PHONE_NUMBER_PAGER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    relation_type: string
    /**
     * An optional "tel URI" used to represent the number in a formal way. Useful for programmatic access, such as a VoIP/PSTN bridge.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    uri: string

    // Own fields of GData-0.0.GData.GDPhoneNumber

    parent: Parsable
    priv: GDPhoneNumberPrivate

    // Owm methods of GData-0.0.GData.GDPhoneNumber

    /**
     * Gets the #GDataGDPhoneNumber:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataGDPhoneNumber:number property.
     */
    get_number(): string
    /**
     * Gets the #GDataGDPhoneNumber:relation-type property.
     */
    get_relation_type(): string
    /**
     * Gets the #GDataGDPhoneNumber:uri property.
     */
    get_uri(): string
    /**
     * Sets the #GDataGDPhoneNumber:is-primary property to `is_primary`.
     * @param is_primary %TRUE if this is the primary phone number, %FALSE otherwise
     */
    set_is_primary(is_primary: boolean): void
    /**
     * Sets the #GDataGDPhoneNumber:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property in the phone number.
     * @param label the new label for the phone number, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataGDPhoneNumber:number property to `number`.
     * @param number the new phone number
     */
    set_number(number: string): void
    /**
     * Sets the #GDataGDPhoneNumber:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property in the phone number.
     * @param relation_type the new relation type for the phone number, or %NULL
     */
    set_relation_type(relation_type: string | null): void
    /**
     * Sets the #GDataGDPhoneNumber:uri property to `uri`.
     * 
     * Set `uri` to %NULL to unset the property in the phone number.
     * @param uri the new URI for the phone number, or %NULL
     */
    set_uri(uri: string | null): void

    // Class property signals of GData-0.0.GData.GDPhoneNumber

    connect(sigName: "notify::is-primary", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::number", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGDPhoneNumber structure are private and should never be accessed directly.
 * @class 
 */
class GDPhoneNumber extends Parsable {

    // Own properties of GData-0.0.GData.GDPhoneNumber

    static name: string
    static $gtype: GObject.GType<GDPhoneNumber>

    // Constructors of GData-0.0.GData.GDPhoneNumber

    constructor(config?: GDPhoneNumber_ConstructProps) 
    /**
     * Creates a new #GDataGDPhoneNumber. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     * @constructor 
     * @param number the phone number, in human-readable format
     * @param relation_type the relationship between the phone number and its owner, or %NULL
     * @param label a human-readable label for the phone number, or %NULL
     * @param uri a "tel URI" to represent the number formally (see <ulink type="http" url="http://www.ietf.org/rfc/rfc3966.txt">RFC 3966</ulink>), or %NULL
     * @param is_primary %TRUE if this phone number is its owner's primary number, %FALSE otherwise
     */
    constructor(number: string, relation_type: string | null, label: string | null, uri: string | null, is_primary: boolean) 
    /**
     * Creates a new #GDataGDPhoneNumber. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     * @constructor 
     * @param number the phone number, in human-readable format
     * @param relation_type the relationship between the phone number and its owner, or %NULL
     * @param label a human-readable label for the phone number, or %NULL
     * @param uri a "tel URI" to represent the number formally (see <ulink type="http" url="http://www.ietf.org/rfc/rfc3966.txt">RFC 3966</ulink>), or %NULL
     * @param is_primary %TRUE if this phone number is its owner's primary number, %FALSE otherwise
     */
    static new(number: string, relation_type: string | null, label: string | null, uri: string | null, is_primary: boolean): GDPhoneNumber
    _init(config?: GDPhoneNumber_ConstructProps): void
}

interface GDPostalAddress_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GDPostalAddress

    /**
     * The postal address itself, formatted and unstructured. It is preferred to use the other, structured properties rather than this one.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    address?: string | null
    /**
     * The agent who actually receives the mail. Used in work addresses. Also for "in care of" or "c/o".
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    agent?: string | null
    /**
     * Can be city, village, town, borough, etc. This is the postal town and not necessarily the place of residence or place of business.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    city?: string | null
    /**
     * Used in places where houses or buildings have names (and not necessarily numbers).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    house_name?: string | null
    /**
     * Indicates which postal address out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    is_primary?: boolean | null
    /**
     * A simple string value used to name this postal address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    label?: string | null
    /**
     * Classes of mail accepted at this address. For example: %GDATA_GD_MAIL_CLASS_LETTERS or %GDATA_GD_MAIL_CLASS_BOTH.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    mail_class?: string | null
    /**
     * This is used to disambiguate a street address when a city contains more than one street with the same name, or to specify a small place
     * whose mail is routed through a larger postal town. In China it could be a county or a minor city.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    neighborhood?: string | null
    /**
     * Covers actual P.O. boxes, drawers, locked bags, etc. This is usually but not always mutually exclusive with #GDataGDPostalAddress:street.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    po_box?: string | null
    /**
     * Postal code. Usually country-wide, but sometimes specific to the city (e.g. "2" in "Dublin 2, Ireland" addresses).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    postcode?: string | null
    /**
     * A state, province, county (in Ireland), Land (in Germany), departement (in France), etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    region?: string | null
    /**
     * A programmatic value that identifies the type of postal address. For example: %GDATA_GD_POSTAL_ADDRESS_WORK or
     * %GDATA_GD_POSTAL_ADDRESS_OTHER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    relation_type?: string | null
    /**
     * Can be street, avenue, road, etc. This element also includes the house number and room/apartment/flat/floor number.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    street?: string | null
    /**
     * Handles administrative districts such as U.S. or U.K. counties that are not used for mail addressing purposes.
     * Subregion is not intended for delivery addresses.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    subregion?: string | null
    /**
     * The context in which this address can be used. For example: %GDATA_GD_ADDRESS_USAGE_GENERAL or %GDATA_GD_ADDRESS_USAGE_LOCAL.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    usage?: string | null
}

interface GDPostalAddress extends Comparable {

    // Own properties of GData-0.0.GData.GDPostalAddress

    /**
     * The postal address itself, formatted and unstructured. It is preferred to use the other, structured properties rather than this one.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    address: string
    /**
     * The agent who actually receives the mail. Used in work addresses. Also for "in care of" or "c/o".
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    agent: string
    /**
     * Can be city, village, town, borough, etc. This is the postal town and not necessarily the place of residence or place of business.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    city: string
    /**
     * The name of the country. Since this is paired with #GDataGDPostalAddress:country-code, they must both be set with
     * gdata_gd_postal_address_set_country().
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    readonly country: string
    /**
     * The ISO 3166-1 alpha-2 country code for the country in #GDataGDPostalAddress:country. Since this is paired with
     * #GDataGDPostalAddress:country, they must both be set with gdata_gd_postal_address_set_country().
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>
     * or <ulink type="http" url="http://www.iso.org/iso/iso-3166-1_decoding_table">ISO 3166-1 alpha-2</ulink>.
     */
    readonly country_code: string
    /**
     * Used in places where houses or buildings have names (and not necessarily numbers).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    house_name: string
    /**
     * Indicates which postal address out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    is_primary: boolean
    /**
     * A simple string value used to name this postal address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    label: string
    /**
     * Classes of mail accepted at this address. For example: %GDATA_GD_MAIL_CLASS_LETTERS or %GDATA_GD_MAIL_CLASS_BOTH.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    mail_class: string
    /**
     * This is used to disambiguate a street address when a city contains more than one street with the same name, or to specify a small place
     * whose mail is routed through a larger postal town. In China it could be a county or a minor city.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    neighborhood: string
    /**
     * Covers actual P.O. boxes, drawers, locked bags, etc. This is usually but not always mutually exclusive with #GDataGDPostalAddress:street.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    po_box: string
    /**
     * Postal code. Usually country-wide, but sometimes specific to the city (e.g. "2" in "Dublin 2, Ireland" addresses).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    postcode: string
    /**
     * A state, province, county (in Ireland), Land (in Germany), departement (in France), etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    region: string
    /**
     * A programmatic value that identifies the type of postal address. For example: %GDATA_GD_POSTAL_ADDRESS_WORK or
     * %GDATA_GD_POSTAL_ADDRESS_OTHER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    relation_type: string
    /**
     * Can be street, avenue, road, etc. This element also includes the house number and room/apartment/flat/floor number.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    street: string
    /**
     * Handles administrative districts such as U.S. or U.K. counties that are not used for mail addressing purposes.
     * Subregion is not intended for delivery addresses.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    subregion: string
    /**
     * The context in which this address can be used. For example: %GDATA_GD_ADDRESS_USAGE_GENERAL or %GDATA_GD_ADDRESS_USAGE_LOCAL.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    usage: string

    // Own fields of GData-0.0.GData.GDPostalAddress

    parent: Parsable
    priv: GDPostalAddressPrivate

    // Owm methods of GData-0.0.GData.GDPostalAddress

    /**
     * Gets the #GDataGDPostalAddress:address property.
     */
    get_address(): string
    /**
     * Gets the #GDataGDPostalAddress:agent property.
     */
    get_agent(): string
    /**
     * Gets the #GDataGDPostalAddress:city property.
     */
    get_city(): string
    /**
     * Gets the #GDataGDPostalAddress:country property.
     */
    get_country(): string
    /**
     * Gets the #GDataGDPostalAddress:country-code property.
     */
    get_country_code(): string
    /**
     * Gets the #GDataGDPostalAddress:house-name property.
     */
    get_house_name(): string
    /**
     * Gets the #GDataGDPostalAddress:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataGDPostalAddress:mail-class property.
     */
    get_mail_class(): string
    /**
     * Gets the #GDataGDPostalAddress:neighborhood property.
     */
    get_neighborhood(): string
    /**
     * Gets the #GDataGDPostalAddress:po-box property.
     */
    get_po_box(): string
    /**
     * Gets the #GDataGDPostalAddress:postcode property.
     */
    get_postcode(): string
    /**
     * Gets the #GDataGDPostalAddress:region property.
     */
    get_region(): string
    /**
     * Gets the #GDataGDPostalAddress:relation-type property.
     */
    get_relation_type(): string
    /**
     * Gets the #GDataGDPostalAddress:street property.
     */
    get_street(): string
    /**
     * Gets the #GDataGDPostalAddress:subregion property.
     */
    get_subregion(): string
    /**
     * Gets the #GDataGDPostalAddress:usage property.
     */
    get_usage(): string
    /**
     * Sets the #GDataGDPostalAddress:address property to `address`.
     * @param address the new postal address, or %NULL
     */
    set_address(address: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:agent property to `agent`.
     * 
     * Set `agent` to %NULL to unset the property in the postal address.
     * @param agent the new agent for the postal address, or %NULL
     */
    set_agent(agent: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:city property to `city`.
     * 
     * Set `city` to %NULL to unset the property in the postal address.
     * @param city the new city for the postal address, or %NULL
     */
    set_city(city: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:country property to `country,` and #GDataGDPostalAddress:country-code to `country_code`.
     * 
     * Set `country` or `country_code` to %NULL to unset the relevant property in the postal address. If a `country_code` is provided, a `country` must
     * also be provided.
     * @param country the new country for the postal address, or %NULL
     * @param country_code the new country code for the postal address, or %NULL
     */
    set_country(country: string | null, country_code: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:house-name property to `house_name`.
     * 
     * Set `house_name` to %NULL to unset the property in the postal address.
     * @param house_name the new house name for the postal address, or %NULL
     */
    set_house_name(house_name: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:is-primary property to `is_primary`.
     * @param is_primary %TRUE if this is the primary postal address, %FALSE otherwise
     */
    set_is_primary(is_primary: boolean): void
    /**
     * Sets the #GDataGDPostalAddress:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property in the postal address.
     * @param label the new label for the postal address, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:mail-class property to `mail_class`.
     * 
     * Set `mail_class` to %NULL to unset the property in the postal address.
     * @param mail_class the new mail class for the postal address, or %NULL
     */
    set_mail_class(mail_class: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:neighborhood property to `neighborhood`.
     * 
     * Set `neighborhood` to %NULL to unset the property in the postal address.
     * @param neighborhood the new neighborhood for the postal address, or %NULL
     */
    set_neighborhood(neighborhood: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:po-box property to `po_box`.
     * 
     * Set `po_box` to %NULL to unset the property in the postal address.
     * @param po_box the new P.O. box for the postal address, or %NULL
     */
    set_po_box(po_box: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:postcode property to `postcode`.
     * 
     * Set `postcode` to %NULL to unset the property in the postal address.
     * @param postcode the new postcode for the postal address, or %NULL
     */
    set_postcode(postcode: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:region property to `region`.
     * 
     * Set `region` to %NULL to unset the property in the postal address.
     * @param region the new region for the postal address, or %NULL
     */
    set_region(region: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property in the postal address.
     * @param relation_type the new relation type for the postal_address, or %NULL
     */
    set_relation_type(relation_type: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:street property to `street`.
     * 
     * Set `street` to %NULL to unset the property in the postal address.
     * @param street the new street for the postal address, or %NULL
     */
    set_street(street: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:subregion property to `subregion`.
     * 
     * Set `subregion` to %NULL to unset the property in the postal address.
     * @param subregion the new subregion for the postal address, or %NULL
     */
    set_subregion(subregion: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:usage property to `usage`.
     * 
     * Set `usage` to %NULL to unset the property in the postal address.
     * @param usage the new usage for the postal address, or %NULL
     */
    set_usage(usage: string | null): void

    // Class property signals of GData-0.0.GData.GDPostalAddress

    connect(sigName: "notify::address", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::agent", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agent", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::agent", ...args: any[]): void
    connect(sigName: "notify::city", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::city", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::city", ...args: any[]): void
    connect(sigName: "notify::country", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::country", ...args: any[]): void
    connect(sigName: "notify::country-code", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country-code", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::country-code", ...args: any[]): void
    connect(sigName: "notify::house-name", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::house-name", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::house-name", ...args: any[]): void
    connect(sigName: "notify::is-primary", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::mail-class", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-class", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mail-class", ...args: any[]): void
    connect(sigName: "notify::neighborhood", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::neighborhood", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::neighborhood", ...args: any[]): void
    connect(sigName: "notify::po-box", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::po-box", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::po-box", ...args: any[]): void
    connect(sigName: "notify::postcode", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postcode", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::postcode", ...args: any[]): void
    connect(sigName: "notify::region", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::region", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::region", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::street", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::street", ...args: any[]): void
    connect(sigName: "notify::subregion", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subregion", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subregion", ...args: any[]): void
    connect(sigName: "notify::usage", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::usage", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::usage", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGDPostalAddress structure are private and should never be accessed directly.
 * @class 
 */
class GDPostalAddress extends Parsable {

    // Own properties of GData-0.0.GData.GDPostalAddress

    static name: string
    static $gtype: GObject.GType<GDPostalAddress>

    // Constructors of GData-0.0.GData.GDPostalAddress

    constructor(config?: GDPostalAddress_ConstructProps) 
    /**
     * Creates a new #GDataGDPostalAddress. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     * @constructor 
     * @param relation_type the relationship between the address and its owner, or %NULL
     * @param label a human-readable label for the address, or %NULL
     * @param is_primary %TRUE if this phone number is its owner's primary number, %FALSE otherwise
     */
    constructor(relation_type: string | null, label: string | null, is_primary: boolean) 
    /**
     * Creates a new #GDataGDPostalAddress. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     * @constructor 
     * @param relation_type the relationship between the address and its owner, or %NULL
     * @param label a human-readable label for the address, or %NULL
     * @param is_primary %TRUE if this phone number is its owner's primary number, %FALSE otherwise
     */
    static new(relation_type: string | null, label: string | null, is_primary: boolean): GDPostalAddress
    _init(config?: GDPostalAddress_ConstructProps): void
}

interface GDReminder_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GDReminder

    /**
     * Absolute time at which the reminder should be issued.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     */
    absolute_time?: number | null
    /**
     * The notification method the reminder should use. For example: %GDATA_GD_REMINDER_ALERT or %GDATA_GD_REMINDER_EMAIL.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     */
    method?: string | null
    /**
     * Time at which the reminder should be issued, in minutes relative to the start time of the corresponding event.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     */
    relative_time?: number | null
}

interface GDReminder extends Comparable {

    // Own properties of GData-0.0.GData.GDReminder

    /**
     * Absolute time at which the reminder should be issued.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     */
    absolute_time: number
    /**
     * Whether the reminder is specified as an absolute or relative time.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     */
    readonly is_absolute_time: boolean
    /**
     * The notification method the reminder should use. For example: %GDATA_GD_REMINDER_ALERT or %GDATA_GD_REMINDER_EMAIL.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     */
    method: string
    /**
     * Time at which the reminder should be issued, in minutes relative to the start time of the corresponding event.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     */
    relative_time: number

    // Own fields of GData-0.0.GData.GDReminder

    parent: Parsable
    priv: GDReminderPrivate

    // Owm methods of GData-0.0.GData.GDReminder

    /**
     * Gets the #GDataGDReminder:absolute-time property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_absolute_time(): number
    /**
     * Gets the #GDataGDReminder:method property.
     */
    get_method(): string
    /**
     * Gets the #GDataGDReminder:relative-time property.
     */
    get_relative_time(): number
    /**
     * Sets the #GDataGDReminder:absolute-time property to `absolute_time`.
     * 
     * Set `absolute_time` to <code class="literal">-1</code> to unset the property.
     * @param absolute_time the new absolute time, or <code class="literal">-1</code>
     */
    set_absolute_time(absolute_time: number): void
    /**
     * Sets the #GDataGDReminder:method property to `method`.
     * 
     * Set `method` to %NULL to unset the property.
     * @param method the new method, or %NULL
     */
    set_method(method: string | null): void
    /**
     * Sets the #GDataGDReminder:relative-time property to `relative_time`.
     * 
     * Set `relative_time` to <code class="literal">-1</code> to unset the property.
     * @param relative_time the new relative time, or <code class="literal">-1</code>
     */
    set_relative_time(relative_time: number): void

    // Class property signals of GData-0.0.GData.GDReminder

    connect(sigName: "notify::absolute-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::absolute-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::absolute-time", ...args: any[]): void
    connect(sigName: "notify::is-absolute-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-absolute-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-absolute-time", ...args: any[]): void
    connect(sigName: "notify::method", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::relative-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relative-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relative-time", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGDReminder structure are private and should never be accessed directly.
 * @class 
 */
class GDReminder extends Parsable {

    // Own properties of GData-0.0.GData.GDReminder

    static name: string
    static $gtype: GObject.GType<GDReminder>

    // Constructors of GData-0.0.GData.GDReminder

    constructor(config?: GDReminder_ConstructProps) 
    /**
     * Creates a new #GDataGDReminder. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     * @constructor 
     * @param method the notification method the reminder should use, or %NULL
     * @param absolute_time the absolute time for the reminder, or <code class="literal">-1</code>
     * @param relative_time the relative time for the reminder, in minutes, or <code class="literal">-1</code>
     */
    constructor(method: string | null, absolute_time: number, relative_time: number) 
    /**
     * Creates a new #GDataGDReminder. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     * @constructor 
     * @param method the notification method the reminder should use, or %NULL
     * @param absolute_time the absolute time for the reminder, or <code class="literal">-1</code>
     * @param relative_time the relative time for the reminder, in minutes, or <code class="literal">-1</code>
     */
    static new(method: string | null, absolute_time: number, relative_time: number): GDReminder
    _init(config?: GDReminder_ConstructProps): void
}

interface GDWhen_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GDWhen

    /**
     * The title of a person within the when.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     */
    end_time?: number | null
    /**
     * A programmatic value that identifies the type of when.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     */
    is_date?: boolean | null
    /**
     * The name of the when.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     */
    start_time?: number | null
    /**
     * A simple string value used to name this when. It allows UIs to display a label such as "Work", "Volunteer",
     * "Professional Society", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     */
    value_string?: string | null
}

interface GDWhen extends Comparable {

    // Own properties of GData-0.0.GData.GDWhen

    /**
     * The title of a person within the when.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     */
    end_time: number
    /**
     * A programmatic value that identifies the type of when.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     */
    is_date: boolean
    /**
     * The name of the when.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     */
    start_time: number
    /**
     * A simple string value used to name this when. It allows UIs to display a label such as "Work", "Volunteer",
     * "Professional Society", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     */
    value_string: string

    // Own fields of GData-0.0.GData.GDWhen

    parent: Parsable
    priv: GDWhenPrivate

    // Owm methods of GData-0.0.GData.GDWhen

    /**
     * Adds a reminder to the #GDataGDWhen's list of reminders and increments its reference count.
     * 
     * Duplicate reminders will not be added to the list.
     * @param reminder a #GDataGDReminder to add
     */
    add_reminder(reminder: GDReminder): void
    /**
     * Gets the #GDataGDWhen:end-time property.
     * 
     * If the end time is unset, <code class="literal">-1</code> will be returned.
     */
    get_end_time(): number
    /**
     * Returns a list of the #GDataGDReminders which are associated with this #GDataGDWhen.
     */
    get_reminders(): GDReminder[]
    /**
     * Gets the #GDataGDWhen:start-time property.
     */
    get_start_time(): number
    /**
     * Gets the #GDataGDWhen:value-string property.
     */
    get_value_string(): string
    /**
     * Sets the #GDataGDWhen:end-time property to `end_time`.
     * 
     * Set `end_time` to <code class="literal">-1</code> to unset the property.
     * @param end_time the new end time, or <code class="literal">-1</code>
     */
    set_end_time(end_time: number): void
    /**
     * Sets the #GDataGDWhen:is-date property to `is_date`.
     * @param is_date %TRUE if #GDataGDWhen:start-time and #GDataGDWhen:end-time should be dates rather than times, %FALSE otherwise
     */
    set_is_date(is_date: boolean): void
    /**
     * Sets the #GDataGDWhen:start-time property to `start_time`.
     * @param start_time the new start time
     */
    set_start_time(start_time: number): void
    /**
     * Sets the #GDataGDWhen:value-string property to `value_string`.
     * 
     * Set `value_string` to %NULL to unset the property.
     * @param value_string the new value string, or %NULL
     */
    set_value_string(value_string: string | null): void

    // Class property signals of GData-0.0.GData.GDWhen

    connect(sigName: "notify::end-time", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-time", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-time", ...args: any[]): void
    connect(sigName: "notify::is-date", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-date", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-date", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::value-string", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-string", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-string", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGDWhen structure are private and should never be accessed directly.
 * @class 
 */
class GDWhen extends Parsable {

    // Own properties of GData-0.0.GData.GDWhen

    static name: string
    static $gtype: GObject.GType<GDWhen>

    // Constructors of GData-0.0.GData.GDWhen

    constructor(config?: GDWhen_ConstructProps) 
    /**
     * Creates a new #GDataGDWhen. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     * @constructor 
     * @param start_time when the event starts or (for zero-duration events) when it occurs
     * @param end_time when the event ends, or <code class="literal">-1</code>
     * @param is_date %TRUE if `start_time` and `end_time` specify dates rather than times, %FALSE otherwise
     */
    constructor(start_time: number, end_time: number, is_date: boolean) 
    /**
     * Creates a new #GDataGDWhen. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     * @constructor 
     * @param start_time when the event starts or (for zero-duration events) when it occurs
     * @param end_time when the event ends, or <code class="literal">-1</code>
     * @param is_date %TRUE if `start_time` and `end_time` specify dates rather than times, %FALSE otherwise
     */
    static new(start_time: number, end_time: number, is_date: boolean): GDWhen
    _init(config?: GDWhen_ConstructProps): void
}

interface GDWhere_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GDWhere

    /**
     * Specifies a user-readable label to distinguish this location from others.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     */
    label?: string | null
    /**
     * Specifies the relationship between the containing entity and the contained location. For example: %GDATA_GD_WHERE_EVENT or
     * %GDATA_GD_WHERE_EVENT_PARKING.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     */
    relation_type?: string | null
    /**
     * A simple string representation of this location.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     */
    value_string?: string | null
}

interface GDWhere extends Comparable {

    // Own properties of GData-0.0.GData.GDWhere

    /**
     * Specifies a user-readable label to distinguish this location from others.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     */
    label: string
    /**
     * Specifies the relationship between the containing entity and the contained location. For example: %GDATA_GD_WHERE_EVENT or
     * %GDATA_GD_WHERE_EVENT_PARKING.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     */
    relation_type: string
    /**
     * A simple string representation of this location.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     */
    value_string: string

    // Own fields of GData-0.0.GData.GDWhere

    parent: Parsable
    priv: GDWherePrivate

    // Owm methods of GData-0.0.GData.GDWhere

    /**
     * Gets the #GDataGDWhere:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataGDWhere:relation-type property.
     */
    get_relation_type(): string
    /**
     * Gets the #GDataGDWhere:value-string property.
     */
    get_value_string(): string
    /**
     * Sets the #GDataGDWhere:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property.
     * @param label the new label, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataGDWhere:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property.
     * @param relation_type the new relation type, or %NULL
     */
    set_relation_type(relation_type: string | null): void
    /**
     * Sets the #GDataGDWhere:value-string property to `value_string`.
     * 
     * Set `value_string` to %NULL to unset the property.
     * @param value_string the new value string, or %NULL
     */
    set_value_string(value_string: string | null): void

    // Class property signals of GData-0.0.GData.GDWhere

    connect(sigName: "notify::label", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::value-string", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-string", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-string", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGDWhere structure are private and should never be accessed directly.
 * @class 
 */
class GDWhere extends Parsable {

    // Own properties of GData-0.0.GData.GDWhere

    static name: string
    static $gtype: GObject.GType<GDWhere>

    // Constructors of GData-0.0.GData.GDWhere

    constructor(config?: GDWhere_ConstructProps) 
    /**
     * Creates a new #GDataGDWhere. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     * 
     * Currently, entryLink functionality is not implemented in #GDataGDWhere.
     * @constructor 
     * @param relation_type the relationship between the item and this place, or %NULL
     * @param value_string a string to represent the place, or %NULL
     * @param label a human-readable label for the place, or %NULL
     */
    constructor(relation_type: string | null, value_string: string | null, label: string | null) 
    /**
     * Creates a new #GDataGDWhere. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     * 
     * Currently, entryLink functionality is not implemented in #GDataGDWhere.
     * @constructor 
     * @param relation_type the relationship between the item and this place, or %NULL
     * @param value_string a string to represent the place, or %NULL
     * @param label a human-readable label for the place, or %NULL
     */
    static new(relation_type: string | null, value_string: string | null, label: string | null): GDWhere
    _init(config?: GDWhere_ConstructProps): void
}

interface GDWho_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GDWho

    /**
     * The e-mail address of the person represented by the #GDataGDWho.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     */
    email_address?: string | null
    /**
     * Specifies the relationship between the containing entity and the contained person. For example: %GDATA_GD_WHO_EVENT_PERFORMER or
     * %GDATA_GD_WHO_EVENT_ATTENDEE.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     */
    relation_type?: string | null
    /**
     * A simple string representation of this person.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     */
    value_string?: string | null
}

interface GDWho extends Comparable {

    // Own properties of GData-0.0.GData.GDWho

    /**
     * The e-mail address of the person represented by the #GDataGDWho.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     */
    email_address: string
    /**
     * Specifies the relationship between the containing entity and the contained person. For example: %GDATA_GD_WHO_EVENT_PERFORMER or
     * %GDATA_GD_WHO_EVENT_ATTENDEE.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     */
    relation_type: string
    /**
     * A simple string representation of this person.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     */
    value_string: string

    // Own fields of GData-0.0.GData.GDWho

    parent: Parsable
    priv: GDWhoPrivate

    // Owm methods of GData-0.0.GData.GDWho

    /**
     * Gets the #GDataGDWho:email-address property.
     */
    get_email_address(): string
    /**
     * Gets the #GDataGDWho:relation-type property.
     */
    get_relation_type(): string
    /**
     * Gets the #GDataGDWho:value-string property.
     */
    get_value_string(): string
    /**
     * Sets the #GDataGDWho:email-address property to `email_address`.
     * 
     * Set `email_address` to %NULL to unset the property.
     * @param email_address the new e-mail address, or %NULL
     */
    set_email_address(email_address: string | null): void
    /**
     * Sets the #GDataGDWho:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property.
     * @param relation_type the new relation type, or %NULL
     */
    set_relation_type(relation_type: string | null): void
    /**
     * Sets the #GDataGDWho:value-string property to `value_string`.
     * 
     * Set `value_string` to %NULL to unset the property.
     * @param value_string the new value string, or %NULL
     */
    set_value_string(value_string: string | null): void

    // Class property signals of GData-0.0.GData.GDWho

    connect(sigName: "notify::email-address", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::value-string", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-string", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-string", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGDWho structure are private and should never be accessed directly.
 * @class 
 */
class GDWho extends Parsable {

    // Own properties of GData-0.0.GData.GDWho

    static name: string
    static $gtype: GObject.GType<GDWho>

    // Constructors of GData-0.0.GData.GDWho

    constructor(config?: GDWho_ConstructProps) 
    /**
     * Creates a new #GDataGDWho. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     * 
     * Currently, entryLink functionality is not implemented in #GDataGDWho.
     * @constructor 
     * @param relation_type the relationship between the item and this person, or %NULL
     * @param value_string a string to represent the person, or %NULL
     * @param email_address the person's e-mail address, or %NULL
     */
    constructor(relation_type: string | null, value_string: string | null, email_address: string | null) 
    /**
     * Creates a new #GDataGDWho. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     * 
     * Currently, entryLink functionality is not implemented in #GDataGDWho.
     * @constructor 
     * @param relation_type the relationship between the item and this person, or %NULL
     * @param value_string a string to represent the person, or %NULL
     * @param email_address the person's e-mail address, or %NULL
     */
    static new(relation_type: string | null, value_string: string | null, email_address: string | null): GDWho
    _init(config?: GDWho_ConstructProps): void
}

interface Generator_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {
}

interface Generator extends Comparable {

    // Own properties of GData-0.0.GData.Generator

    /**
     * A human-readable name for the generating agent.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.generator">
     * Atom specification</ulink>.
     */
    readonly name: string
    /**
     * An IRI reference that is relevant to the agent.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.generator">
     * Atom specification</ulink>.
     */
    readonly uri: string
    /**
     * Indicates the version of the generating agent.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.generator">
     * Atom specification</ulink>.
     */
    readonly version: string

    // Own fields of GData-0.0.GData.Generator

    parent: Parsable
    priv: GeneratorPrivate

    // Owm methods of GData-0.0.GData.Generator

    /**
     * Gets the #GDataGenerator:name property. The name will be %NULL or non-empty.
     */
    get_name(): string | null
    /**
     * Gets the #GDataGenerator:uri property. The URI will be %NULL or non-empty.
     */
    get_uri(): string | null
    /**
     * Gets the #GDataGenerator:version property.
     */
    get_version(): string

    // Class property signals of GData-0.0.GData.Generator

    connect(sigName: "notify::name", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGenerator structure are private and should never be accessed directly.
 * @class 
 */
class Generator extends Parsable {

    // Own properties of GData-0.0.GData.Generator

    static name: string
    static $gtype: GObject.GType<Generator>

    // Constructors of GData-0.0.GData.Generator

    constructor(config?: Generator_ConstructProps) 
    _init(config?: Generator_ConstructProps): void
}

interface GoaAuthorizer_ConstructProps extends Authorizer_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GData-0.0.GData.GoaAuthorizer

    /**
     * The GOA account providing authentication. This should have all the necessary services enabled on it.
     */
    goa_object?: Goa.Object | null
}

interface GoaAuthorizer extends Authorizer {

    // Own properties of GData-0.0.GData.GoaAuthorizer

    /**
     * The GOA account providing authentication. This should have all the necessary services enabled on it.
     */
    readonly goa_object: Goa.Object

    // Owm methods of GData-0.0.GData.GoaAuthorizer

    /**
     * The GOA account providing authentication. This is the same as #GDataGoaAuthorizer:goa-object.
     */
    get_goa_object(): Goa.Object

    // Class property signals of GData-0.0.GData.GoaAuthorizer

    connect(sigName: "notify::goa-object", callback: (($obj: GoaAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::goa-object", callback: (($obj: GoaAuthorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::goa-object", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataGoaAuthorizer structure are private and should never be accessed directly.
 * @class 
 */
class GoaAuthorizer extends GObject.Object {

    // Own properties of GData-0.0.GData.GoaAuthorizer

    static name: string
    static $gtype: GObject.GType<GoaAuthorizer>

    // Constructors of GData-0.0.GData.GoaAuthorizer

    constructor(config?: GoaAuthorizer_ConstructProps) 
    /**
     * Create a new #GDataGoaAuthorizer using the authentication token from the given `goa_object`.
     * @constructor 
     * @param goa_object the GOA account providing authentication
     */
    constructor(goa_object: Goa.Object) 
    /**
     * Create a new #GDataGoaAuthorizer using the authentication token from the given `goa_object`.
     * @constructor 
     * @param goa_object the GOA account providing authentication
     */
    static new(goa_object: Goa.Object): GoaAuthorizer
    _init(config?: GoaAuthorizer_ConstructProps): void
}

interface Link_ConstructProps extends Comparable_ConstructProps, Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.Link

    /**
     * An advisory media type: it is a hint about the type of the representation that is expected to be returned when the value
     * of the #GDataLink:uri property is dereferenced.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    content_type?: string | null
    /**
     * Describes the language of the resource pointed to by the #GDataLink:uri property.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    language?: string | null
    /**
     * Indicates an advisory length of the linked content in octets. <code class="literal">-1</code> means the length is unspecified.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    length?: number | null
    /**
     * The link relation type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    relation_type?: string | null
    /**
     * Conveys human-readable information about the link.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    title?: string | null
    /**
     * The link's IRI.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    uri?: string | null
}

interface Link extends Comparable {

    // Own properties of GData-0.0.GData.Link

    /**
     * An advisory media type: it is a hint about the type of the representation that is expected to be returned when the value
     * of the #GDataLink:uri property is dereferenced.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    content_type: string
    /**
     * Describes the language of the resource pointed to by the #GDataLink:uri property.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    language: string
    /**
     * Indicates an advisory length of the linked content in octets. <code class="literal">-1</code> means the length is unspecified.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    length: number
    /**
     * The link relation type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    relation_type: string
    /**
     * Conveys human-readable information about the link.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    title: string
    /**
     * The link's IRI.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    uri: string

    // Own fields of GData-0.0.GData.Link

    parent: Parsable
    priv: LinkPrivate

    // Owm methods of GData-0.0.GData.Link

    /**
     * Gets the #GDataLink:content-type property. If the content type is non-%NULL, it will be non-empty.
     */
    get_content_type(): string | null

    // Overloads of get_content_type

    /**
     * Returns the content type upon which the #GDataParsable is built. For example, `application/atom+xml` or `application/json`.
     */
    get_content_type(): string
    get_content_type(...args: any[]): any
    get_content_type(...args: any[]): string | null | string | any
    /**
     * Gets the #GDataLink:language property. If the language is non-%NULL, it will be non-empty.
     */
    get_language(): string | null
    /**
     * Gets the #GDataLink:length property.
     */
    get_length(): number
    /**
     * Gets the #GDataLink:relation-type property. If the relation type is non-%NULL, it will be non-empty.
     */
    get_relation_type(): string | null
    /**
     * Gets the #GDataLink:title property.
     */
    get_title(): string
    /**
     * Gets the #GDataLink:uri property. The return value is guaranteed to be a valid IRI, as
     * specified by the Atom protocol. Common relationship values such as <literal>alternate</literal>
     * are returned as <literal>http://www.iana.org/assignments/relation/alternate</literal>.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute">
     * Atom specification</ulink>.
     */
    get_uri(): string
    /**
     * Sets the #GDataLink:content-type property to `content_type`. `content_type` must be %NULL or non-empty.
     * 
     * Set `content_type` to %NULL to unset the property in the link.
     * @param content_type the new content type for the link, or %NULL
     */
    set_content_type(content_type: string | null): void
    /**
     * Sets the #GDataLink:language property to `language`. `language` must be %NULL or non-empty.
     * 
     * Set `language` to %NULL to unset the property in the link.
     * @param language the new language for the link, or %NULL
     */
    set_language(language: string | null): void
    /**
     * Sets the #GDataLink:length property to `length`.
     * 
     * Set `length` to <code class="literal">-1</code> to unset the property in the link.
     * @param length the new length for the link, or <code class="literal">-1</code>
     */
    set_length(length: number): void
    /**
     * Sets the #GDataLink:relation-type property to `relation_type`. If `relation_type` is one of the standard Atom relation types,
     * use one of the defined relation type values, instead of a static string. e.g. %GDATA_LINK_EDIT or %GDATA_LINK_SELF.
     * 
     * Set `relation_type` to %NULL to unset the property in the link.
     * @param relation_type the new relation type for the link, or %NULL
     */
    set_relation_type(relation_type: string | null): void
    /**
     * Sets the #GDataLink:title property to `title`.
     * 
     * Set `title` to %NULL to unset the property in the link.
     * @param title the new title for the link, or %NULL
     */
    set_title(title: string | null): void
    /**
     * Sets the #GDataLink:uri property to `uri`. `uri` must be non-%NULL and non-empty.
     * @param uri the new URI for the link
     */
    set_uri(uri: string): void

    // Class property signals of GData-0.0.GData.Link

    connect(sigName: "notify::content-type", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataLink structure are private and should never be accessed directly.
 * @class 
 */
class Link extends Parsable {

    // Own properties of GData-0.0.GData.Link

    static name: string
    static $gtype: GObject.GType<Link>

    // Constructors of GData-0.0.GData.Link

    constructor(config?: Link_ConstructProps) 
    /**
     * Creates a new #GDataLink. More information is available in the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     * 
     * `uri` must be non-%NULL and non-empty. `relation_type` must be %NULL or non-empty.
     * @constructor 
     * @param uri the link's IRI
     * @param relation_type the relationship of the link to the current document, or %NULL
     */
    constructor(uri: string, relation_type: string | null) 
    /**
     * Creates a new #GDataLink. More information is available in the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     * 
     * `uri` must be non-%NULL and non-empty. `relation_type` must be %NULL or non-empty.
     * @constructor 
     * @param uri the link's IRI
     * @param relation_type the relationship of the link to the current document, or %NULL
     */
    static new(uri: string, relation_type: string | null): Link
    _init(config?: Link_ConstructProps): void
}

interface MediaCategory_ConstructProps extends Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.MediaCategory

    /**
     * The category name.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    category?: string | null
    /**
     * A human-readable label that can be displayed in end-user applications.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    label?: string | null
    /**
     * A URI that identifies the categorization scheme.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    scheme?: string | null
}

interface MediaCategory {

    // Own properties of GData-0.0.GData.MediaCategory

    /**
     * The category name.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    category: string
    /**
     * A human-readable label that can be displayed in end-user applications.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    label: string
    /**
     * A URI that identifies the categorization scheme.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    scheme: string

    // Own fields of GData-0.0.GData.MediaCategory

    parent: Parsable
    priv: MediaCategoryPrivate

    // Owm methods of GData-0.0.GData.MediaCategory

    /**
     * Gets the #GDataMediaCategory:category property.
     */
    get_category(): string
    /**
     * Gets the #GDataMediaCategory:label property.
     */
    get_label(): string
    /**
     * Gets the #GDataMediaCategory:scheme property.
     */
    get_scheme(): string
    /**
     * Sets the #GDataMediaCategory:category property to `category`.
     * @param category the new category
     */
    set_category(category: string): void
    /**
     * Sets the #GDataMediaCategory:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property.
     * @param label the category's new label, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the #GDataMediaCategory:scheme property to `scheme`.
     * 
     * Set `scheme` to %NULL to unset the property.
     * @param scheme the category's new scheme, or %NULL
     */
    set_scheme(scheme: string | null): void

    // Class property signals of GData-0.0.GData.MediaCategory

    connect(sigName: "notify::category", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::category", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::scheme", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scheme", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataMediaCategory structure are private and should never be accessed directly.
 * @class 
 */
class MediaCategory extends Parsable {

    // Own properties of GData-0.0.GData.MediaCategory

    static name: string
    static $gtype: GObject.GType<MediaCategory>

    // Constructors of GData-0.0.GData.MediaCategory

    constructor(config?: MediaCategory_ConstructProps) 
    /**
     * Creates a new #GDataMediaCategory. More information is available in the <ulink type="http"
     * url="http://search.yahoo.com/mrss/">Media RSS specification</ulink>.
     * @constructor 
     * @param category a category describing the content
     * @param scheme a URI identifying the categorisation scheme, or %NULL
     * @param label a human-readable name for the category, or %NULL
     */
    constructor(category: string, scheme: string | null, label: string | null) 
    /**
     * Creates a new #GDataMediaCategory. More information is available in the <ulink type="http"
     * url="http://search.yahoo.com/mrss/">Media RSS specification</ulink>.
     * @constructor 
     * @param category a category describing the content
     * @param scheme a URI identifying the categorisation scheme, or %NULL
     * @param label a human-readable name for the category, or %NULL
     */
    static new(category: string, scheme: string | null, label: string | null): MediaCategory
    _init(config?: MediaCategory_ConstructProps): void
}

interface MediaContent_ConstructProps extends Parsable_ConstructProps {
}

interface MediaContent {

    // Own properties of GData-0.0.GData.MediaContent

    /**
     * The standard MIME type of the object.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly content_type: string
    /**
     * The number of seconds for which the media object plays.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly duration: number
    /**
     * Determines if the object is a sample or the full version of the object, or even if it is a continuous stream.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly expression: MediaExpression
    /**
     * The number of bytes of the media object.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly filesize: number
    /**
     * The height of the media object.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly height: number
    /**
     * Determines if this is the default content for the media group. There should only be one default object per media group.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly is_default: boolean
    /**
     * The type of object, complementing #GDataMediaContent:content-type. It allows the consuming application to make simpler decisions between
     * different content objects, based on whether they're a video or audio stream, for example.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly medium: MediaMedium
    /**
     * The direct URI to the media object.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly uri: string
    /**
     * The width of the media object.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly width: number

    // Own fields of GData-0.0.GData.MediaContent

    parent: Parsable
    priv: MediaContentPrivate

    // Owm methods of GData-0.0.GData.MediaContent

    /**
     * Downloads and returns a #GDataDownloadStream allowing the content represented by `self` to be read.
     * 
     * To get the content type of the downloaded data, gdata_download_stream_get_content_type() can be called on the returned #GDataDownloadStream.
     * Calling gdata_download_stream_get_content_length() on the stream will not return a meaningful result, however, as the stream is encoded in chunks,
     * rather than by content length.
     * 
     * In order to cancel the download, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GInputStream operations on the #GDataDownloadStream will not cancel the entire download; merely the read or close operation in question. See the
     * #GDataDownloadStream:cancellable for more details.
     * @param service the #GDataService
     * @param cancellable a #GCancellable for the entire download stream, or %NULL
     */
    download(service: Service, cancellable: Gio.Cancellable | null): DownloadStream
    /**
     * Gets the #GDataMediaContent:content-type property.
     */
    get_content_type(): string
    /**
     * Gets the #GDataMediaContent:duration property.
     */
    get_duration(): number
    /**
     * Gets the #GDataMediaContent:expression property.
     */
    get_expression(): MediaExpression
    /**
     * Gets the #GDataMediaContent:filesize property.
     */
    get_filesize(): number
    /**
     * Gets the #GDataMediaContent:height property.
     */
    get_height(): number
    /**
     * Gets the #GDataMediaContent:medium property.
     */
    get_medium(): MediaMedium
    /**
     * Gets the #GDataMediaContent:uri property.
     */
    get_uri(): string
    /**
     * Gets the #GDataMediaContent:width property.
     */
    get_width(): number

    // Class property signals of GData-0.0.GData.MediaContent

    connect(sigName: "notify::content-type", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::expression", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: "notify::filesize", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filesize", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filesize", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-default", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-default", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-default", ...args: any[]): void
    connect(sigName: "notify::medium", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::medium", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::medium", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataMediaContent structure are private and should never be accessed directly.
 * @class 
 */
class MediaContent extends Parsable {

    // Own properties of GData-0.0.GData.MediaContent

    static name: string
    static $gtype: GObject.GType<MediaContent>

    // Constructors of GData-0.0.GData.MediaContent

    constructor(config?: MediaContent_ConstructProps) 
    _init(config?: MediaContent_ConstructProps): void
}

interface MediaCredit_ConstructProps extends Parsable_ConstructProps {
}

interface MediaCredit {

    // Own properties of GData-0.0.GData.MediaCredit

    /**
     * The credited entity's name.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly credit: string
    /**
     * The role the credited entity played in the production of the media.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly role: string
    /**
     * A URI that identifies the role scheme.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly scheme: string

    // Own fields of GData-0.0.GData.MediaCredit

    parent: Parsable
    priv: MediaCreditPrivate

    // Owm methods of GData-0.0.GData.MediaCredit

    /**
     * Gets the #GDataMediaCredit:credit property.
     */
    get_credit(): string
    /**
     * Gets the #GDataMediaCredit:role property.
     */
    get_role(): string
    /**
     * Gets the #GDataMediaCredit:scheme property.
     */
    get_scheme(): string

    // Class property signals of GData-0.0.GData.MediaCredit

    connect(sigName: "notify::credit", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credit", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::credit", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::scheme", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scheme", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataMediaCredit structure are private and should never be accessed directly.
 * @class 
 */
class MediaCredit extends Parsable {

    // Own properties of GData-0.0.GData.MediaCredit

    static name: string
    static $gtype: GObject.GType<MediaCredit>

    // Constructors of GData-0.0.GData.MediaCredit

    constructor(config?: MediaCredit_ConstructProps) 
    _init(config?: MediaCredit_ConstructProps): void
}

interface MediaThumbnail_ConstructProps extends Parsable_ConstructProps {
}

interface MediaThumbnail {

    // Own properties of GData-0.0.GData.MediaThumbnail

    /**
     * The height of the thumbnail, in pixels.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly height: number
    /**
     * The time offset of the thumbnail in relation to the media object, in milliseconds.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly time: number
    /**
     * The URI of the thumbnail.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly uri: string
    /**
     * The width of the thumbnail, in pixels.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly width: number

    // Own fields of GData-0.0.GData.MediaThumbnail

    parent: Parsable
    priv: MediaThumbnailPrivate

    // Owm methods of GData-0.0.GData.MediaThumbnail

    /**
     * Downloads and returns a #GDataDownloadStream allowing the thumbnail data represented by `self` to be read.
     * 
     * To get the content type of the downloaded data, gdata_download_stream_get_content_type() can be called on the returned #GDataDownloadStream.
     * Calling gdata_download_stream_get_content_length() on the stream will not return a meaningful result, however, as the stream is encoded in chunks,
     * rather than by content length.
     * 
     * In order to cancel the download, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GInputStream operations on the #GDataDownloadStream will not cancel the entire download; merely the read or close operation in question. See the
     * #GDataDownloadStream:cancellable for more details.
     * @param service the #GDataService
     * @param cancellable a #GCancellable for the entire download stream, or %NULL
     */
    download(service: Service, cancellable: Gio.Cancellable | null): DownloadStream
    /**
     * Gets the #GDataMediaThumbnail:height property.
     */
    get_height(): number
    /**
     * Gets the #GDataMediaThumbnail:time property.
     */
    get_time(): number
    /**
     * Gets the #GDataMediaThumbnail:uri property.
     */
    get_uri(): string
    /**
     * Gets the #GDataMediaThumbnail:width property.
     */
    get_width(): number

    // Class property signals of GData-0.0.GData.MediaThumbnail

    connect(sigName: "notify::height", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::time", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataMediaThumbnail structure are private and should never be accessed directly.
 * @class 
 */
class MediaThumbnail extends Parsable {

    // Own properties of GData-0.0.GData.MediaThumbnail

    static name: string
    static $gtype: GObject.GType<MediaThumbnail>

    // Constructors of GData-0.0.GData.MediaThumbnail

    constructor(config?: MediaThumbnail_ConstructProps) 
    _init(config?: MediaThumbnail_ConstructProps): void
}

interface OAuth2Authorizer_ConstructProps extends Authorizer_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GData-0.0.GData.OAuth2Authorizer

    /**
     * A client ID for your application (see the
     * <ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http">reference documentation</ulink>).
     * 
     * It is recommended that the ID is of the form
     * <literal><replaceable>company name</replaceable>-
     * <replaceable>application name</replaceable>-
     * <replaceable>version ID</replaceable></literal>.
     */
    client_id?: string | null
    /**
     * Client secret provided by Google. This is unique for each application
     * and is accessible from Google’s Developer Console when registering
     * an application. It must be paired with the
     * #GDataOAuth2Authorizer:client-id.
     * 
     * See the
     * <ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http">reference
     * documentation</ulink> for details.
     */
    client_secret?: string | null
    /**
     * The locale to use for network requests, in UNIX locale format.
     * (e.g. "en_GB", "cs", "de_DE".) Use %NULL for the default "C" locale
     * (typically "en_US").
     * 
     * This locale will be used by the server-side software to localise the
     * authentication and authorization pages at the URI returned by
     * gdata_oauth2_authorizer_build_authentication_uri().
     * 
     * The server-side behaviour is undefined if it doesn't support a given
     * locale.
     */
    locale?: string | null
    /**
     * The #GProxyResolver used to determine a proxy URI.
     */
    proxy_resolver?: Gio.ProxyResolver | null
    /**
     * Redirect URI to send the response from the authorisation request to.
     * This must either be %GDATA_OAUTH2_REDIRECT_URI_OOB,
     * %GDATA_OAUTH2_REDIRECT_URI_OOB_AUTO, or a
     * <code>http://localhost</code> URI with any port number (optionally)
     * specified.
     * 
     * This URI is where the authorisation server will redirect the user
     * after they have completed interacting with the authentication page
     * (gdata_oauth2_authorizer_build_authentication_uri()). If it is
     * %GDATA_OAUTH2_REDIRECT_URI_OOB, a page will be returned in the user’s
     * browser with the authorisation code in its title and also embedded in
     * the page for the user to copy if it is not possible to automatically
     * extract the code from the page title. If it is
     * %GDATA_OAUTH2_REDIRECT_URI_OOB_AUTO, a similar page will be returned
     * with the authorisation code in its title, but without displaying the
     * code to the user — the user will simply be asked to close the page.
     * If it is a localhost URI, the authentication page will redirect to
     * that URI with the authorisation code appended as a <code>code</code>
     * query parameter. If the user denies the authentication request, the
     * authentication page will redirect to that URI with
     * <code>error=access_denied</code> appended as a query parameter.
     * 
     * Note that the redirect URI used must match that registered in
     * Google’s Developer Console for your application.
     * 
     * See the <ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#choosingredirecturi">reference
     * documentation</ulink> for details about choosing a redirect URI.
     */
    redirect_uri?: string | null
    /**
     * The server provided refresh token, which can be stored and passed in
     * to new #GDataOAuth2Authorizer instances before calling
     * gdata_authorizer_refresh_authorization_async() to create a new
     * short-lived access token.
     * 
     * The refresh token is opaque data and must not be parsed.
     */
    refresh_token?: string | null
    /**
     * A timeout, in seconds, for network operations. If the timeout is
     * exceeded, the operation will be cancelled and
     * %GDATA_SERVICE_ERROR_NETWORK_ERROR will be returned.
     * 
     * If the timeout is <code class="literal">0</code>, operations will
     * never time out.
     */
    timeout?: number | null
}

interface OAuth2Authorizer extends Authorizer {

    // Own properties of GData-0.0.GData.OAuth2Authorizer

    /**
     * A client ID for your application (see the
     * <ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http">reference documentation</ulink>).
     * 
     * It is recommended that the ID is of the form
     * <literal><replaceable>company name</replaceable>-
     * <replaceable>application name</replaceable>-
     * <replaceable>version ID</replaceable></literal>.
     */
    readonly client_id: string
    /**
     * Client secret provided by Google. This is unique for each application
     * and is accessible from Google’s Developer Console when registering
     * an application. It must be paired with the
     * #GDataOAuth2Authorizer:client-id.
     * 
     * See the
     * <ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http">reference
     * documentation</ulink> for details.
     */
    readonly client_secret: string
    /**
     * The locale to use for network requests, in UNIX locale format.
     * (e.g. "en_GB", "cs", "de_DE".) Use %NULL for the default "C" locale
     * (typically "en_US").
     * 
     * This locale will be used by the server-side software to localise the
     * authentication and authorization pages at the URI returned by
     * gdata_oauth2_authorizer_build_authentication_uri().
     * 
     * The server-side behaviour is undefined if it doesn't support a given
     * locale.
     */
    locale: string
    /**
     * The #GProxyResolver used to determine a proxy URI.
     */
    proxy_resolver: Gio.ProxyResolver
    /**
     * Redirect URI to send the response from the authorisation request to.
     * This must either be %GDATA_OAUTH2_REDIRECT_URI_OOB,
     * %GDATA_OAUTH2_REDIRECT_URI_OOB_AUTO, or a
     * <code>http://localhost</code> URI with any port number (optionally)
     * specified.
     * 
     * This URI is where the authorisation server will redirect the user
     * after they have completed interacting with the authentication page
     * (gdata_oauth2_authorizer_build_authentication_uri()). If it is
     * %GDATA_OAUTH2_REDIRECT_URI_OOB, a page will be returned in the user’s
     * browser with the authorisation code in its title and also embedded in
     * the page for the user to copy if it is not possible to automatically
     * extract the code from the page title. If it is
     * %GDATA_OAUTH2_REDIRECT_URI_OOB_AUTO, a similar page will be returned
     * with the authorisation code in its title, but without displaying the
     * code to the user — the user will simply be asked to close the page.
     * If it is a localhost URI, the authentication page will redirect to
     * that URI with the authorisation code appended as a <code>code</code>
     * query parameter. If the user denies the authentication request, the
     * authentication page will redirect to that URI with
     * <code>error=access_denied</code> appended as a query parameter.
     * 
     * Note that the redirect URI used must match that registered in
     * Google’s Developer Console for your application.
     * 
     * See the <ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#choosingredirecturi">reference
     * documentation</ulink> for details about choosing a redirect URI.
     */
    readonly redirect_uri: string
    /**
     * The server provided refresh token, which can be stored and passed in
     * to new #GDataOAuth2Authorizer instances before calling
     * gdata_authorizer_refresh_authorization_async() to create a new
     * short-lived access token.
     * 
     * The refresh token is opaque data and must not be parsed.
     */
    refresh_token: string
    /**
     * A timeout, in seconds, for network operations. If the timeout is
     * exceeded, the operation will be cancelled and
     * %GDATA_SERVICE_ERROR_NETWORK_ERROR will be returned.
     * 
     * If the timeout is <code class="literal">0</code>, operations will
     * never time out.
     */
    timeout: number

    // Owm methods of GData-0.0.GData.OAuth2Authorizer

    /**
     * Build an authentication URI to open in the user’s web browser (or an embedded
     * browser widget). This will display an authentication page from Google,
     * including an authentication form and confirmation of the authorisation
     * domains being requested by this #GDataAuthorizer. The user will authenticate
     * in the browser, then an authorisation code will be returned via the
     * #GDataOAuth2Authorizer:redirect-uri, ready to be passed to
     * gdata_oauth2_authorizer_request_authorization().
     * 
     * If `login_hint` is non-%NULL, it will be passed to the server as a hint of
     * which user is attempting to authenticate, which can be used to pre-fill the
     * e-mail address box in the authentication form.
     * 
     * If `include_granted_scopes` is %TRUE, the authentication request will
     * automatically include all authorisation domains previously granted to this
     * user/application pair, allowing for incremental authentication — asking for
     * permissions as needed, rather than all in one large bundle at the first
     * opportunity. If `include_granted_scopes` is %FALSE, incremental authentication
     * will not be enabled, and only the domains passed to the
     * #GDataOAuth2Authorizer constructor will eventually be authenticated.
     * See the
     * <ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2WebServer#incrementalAuth">reference
     * documentation</ulink> for more details.
     * @param login_hint optional e-mail address or sub identifier for the user
     * @param include_granted_scopes %TRUE to enable incremental authorisation
     */
    build_authentication_uri(login_hint: string | null, include_granted_scopes: boolean): string
    /**
     * Returns the authorizer's refresh token, #GDataOAuth2Authorizer:refresh-token,
     * as set by client code previously on the #GDataOAuth2Authorizer, or as
     * returned by the most recent authentication operation.
     */
    dup_refresh_token(): string
    /**
     * Returns the authorizer's client ID, #GDataOAuth2Authorizer:client-id, as
     * specified on constructing the #GDataOAuth2Authorizer.
     */
    get_client_id(): string
    /**
     * Returns the authorizer's client secret, #GDataOAuth2Authorizer:client-secret,
     * as specified on constructing the #GDataOAuth2Authorizer.
     */
    get_client_secret(): string
    /**
     * Returns the locale currently being used for network requests, or %NULL if the
     * locale is the default.
     */
    get_locale(): string | null
    /**
     * Gets the #GProxyResolver on the #GDataOAuth2Authorizer's #SoupSession.
     */
    get_proxy_resolver(): Gio.ProxyResolver | null
    /**
     * Returns the authorizer’s redirect URI, #GDataOAuth2Authorizer:redirect-uri,
     * as specified on constructing the #GDataOAuth2Authorizer.
     */
    get_redirect_uri(): string
    /**
     * Gets the #GDataOAuth2Authorizer:timeout property; the network timeout, in
     * seconds.
     */
    get_timeout(): number
    /**
     * Request an authorisation code from the user’s web browser is converted to
     * authorisation (access and refresh) tokens. This is the final step in the
     * authentication process; once complete, the #GDataOAuth2Authorizer should be
     * fully authorised for its domains.
     * 
     * On failure, %GDATA_SERVICE_ERROR_FORBIDDEN will be returned if the user or
     * server denied the authorisation request. %GDATA_SERVICE_ERROR_PROTOCOL_ERROR
     * will be returned if the server didn’t follow the expected protocol.
     * %G_IO_ERROR_CANCELLED will be returned if the operation was cancelled using
     * `cancellable`.
     * @param authorization_code code returned from the authentication page
     * @param cancellable a #GCancellable, or %NULL
     */
    request_authorization(authorization_code: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronous version of gdata_oauth2_authorizer_request_authorization().
     * @param authorization_code code returned from the authentication page
     * @param cancellable an optional #GCancellable, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authorization is finished
     */
    request_authorization_async(authorization_code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous authorization operation started with
     * gdata_oauth2_authorizer_request_authorization_async().
     * @param async_result a #GAsyncResult
     */
    request_authorization_finish(async_result: Gio.AsyncResult): boolean
    /**
     * Set the locale used for network requests to `locale,` given in standard UNIX
     * locale format. See #GDataOAuth2Authorizer:locale for more details.
     * 
     * Note that while it’s possible to change the locale after sending network
     * requests (i.e. calling gdata_oauth2_authorizer_build_authentication_uri() for
     * the first time), it is unsupported, as the server-side software may behave
     * unexpectedly. The only supported use of this method is after creation of the
     * authorizer, but before any network requests are made.
     * @param locale the new locale in UNIX locale format, or %NULL for the default locale
     */
    set_locale(locale: string | null): void
    /**
     * Sets the #GProxyResolver on the #SoupSession used internally by the given
     * #GDataOAuth2Authorizer.
     * @param proxy_resolver a #GProxyResolver, or %NULL
     */
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver | null): void
    /**
     * Sets the authorizer's refresh token, #GDataOAuth2Authorizer:refresh-token.
     * This is used to periodically refresh the access token. Set it to %NULL to
     * clear the current authentication from the authorizer.
     * @param refresh_token the new refresh token, or %NULL to clear   authorization
     */
    set_refresh_token(refresh_token: string | null): void
    /**
     * Sets the #GDataOAuth2Authorizer:timeout property; the network timeout, in
     * seconds.
     * 
     * If `timeout` is <code class="literal">0</code>, network operations will never
     * time out.
     * @param timeout the timeout, or <code class="literal">0</code>
     */
    set_timeout(timeout: number): void

    // Class property signals of GData-0.0.GData.OAuth2Authorizer

    connect(sigName: "notify::client-id", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-id", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-id", ...args: any[]): void
    connect(sigName: "notify::client-secret", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-secret", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-secret", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::redirect-uri", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::redirect-uri", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::redirect-uri", ...args: any[]): void
    connect(sigName: "notify::refresh-token", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-token", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::refresh-token", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataOAuth2Authorizer structure are private and should never be accessed directly.
 * @class 
 */
class OAuth2Authorizer extends GObject.Object {

    // Own properties of GData-0.0.GData.OAuth2Authorizer

    static name: string
    static $gtype: GObject.GType<OAuth2Authorizer>

    // Constructors of GData-0.0.GData.OAuth2Authorizer

    constructor(config?: OAuth2Authorizer_ConstructProps) 
    /**
     * Creates a new #GDataOAuth2Authorizer. The `client_id` must be unique for your
     * application, and as registered with Google, and the `client_secret` must be
     * paired with it.
     * @constructor 
     * @param client_id your application’s client ID
     * @param client_secret your application’s client secret
     * @param redirect_uri authorisation redirect URI
     * @param service_type the #GType of a #GDataService subclass which the #GDataOAuth2Authorizer will be used with
     */
    constructor(client_id: string, client_secret: string, redirect_uri: string, service_type: GObject.GType) 
    /**
     * Creates a new #GDataOAuth2Authorizer. The `client_id` must be unique for your
     * application, and as registered with Google, and the `client_secret` must be
     * paired with it.
     * @constructor 
     * @param client_id your application’s client ID
     * @param client_secret your application’s client secret
     * @param redirect_uri authorisation redirect URI
     * @param service_type the #GType of a #GDataService subclass which the #GDataOAuth2Authorizer will be used with
     */
    static new(client_id: string, client_secret: string, redirect_uri: string, service_type: GObject.GType): OAuth2Authorizer
    /**
     * Creates a new #GDataOAuth2Authorizer. The `client_id` must be unique for your
     * application, and as registered with Google, and the `client_secret` must be
     * paired with it.
     * @constructor 
     * @param client_id your application’s client ID
     * @param client_secret your application’s client secret
     * @param redirect_uri authorisation redirect URI
     * @param authorization_domains  a non-empty list of #GDataAuthorizationDomains to be authorized against by the #GDataOAuth2Authorizer
     */
    static new_for_authorization_domains(client_id: string, client_secret: string, redirect_uri: string, authorization_domains: AuthorizationDomain[]): OAuth2Authorizer
    _init(config?: OAuth2Authorizer_ConstructProps): void
}

interface Parsable_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GData-0.0.GData.Parsable

    /**
     * Specifies whether the object was constructed by parsing XML or manually.
     */
    constructed_from_xml?: boolean | null
}

interface Parsable {

    // Own properties of GData-0.0.GData.Parsable

    /**
     * Specifies whether the object was constructed by parsing XML or manually.
     */
    readonly constructed_from_xml: boolean

    // Own fields of GData-0.0.GData.Parsable

    parent: GObject.Object
    priv: ParsablePrivate

    // Owm methods of GData-0.0.GData.Parsable

    /**
     * Returns the content type upon which the #GDataParsable is built. For example, `application/atom+xml` or `application/json`.
     */
    get_content_type(): string
    /**
     * Builds a JSON representation of the #GDataParsable in its current state, such that it could be inserted on the server. The JSON
     * is valid for stand-alone use.
     */
    get_json(): string
    /**
     * Builds an XML representation of the #GDataParsable in its current state, such that it could be inserted on the server. The XML is guaranteed
     * to have all its namespaces declared properly in a self-contained fashion, and is valid for stand-alone use.
     */
    get_xml(): string

    // Own virtual methods of GData-0.0.GData.Parsable

    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean

    // Class property signals of GData-0.0.GData.Parsable

    connect(sigName: "notify::constructed-from-xml", callback: (($obj: Parsable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: Parsable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataParsable structure are private and should never be accessed directly.
 * @class 
 */
class Parsable extends GObject.Object {

    // Own properties of GData-0.0.GData.Parsable

    static name: string
    static $gtype: GObject.GType<Parsable>

    // Constructors of GData-0.0.GData.Parsable

    constructor(config?: Parsable_ConstructProps) 
    /**
     * Creates a new #GDataParsable subclass (of the given `parsable_type)` from the given `json`.
     * 
     * An object of the given `parsable_type` is created, and its <function>parse_json</function> and
     * <function>post_parse_json</function> class functions called on the JSON node obtained from `json`.
     * <function>post_parse_json</function> is called once on the root node, while <function>parse_json</function> is called for
     * each of the node's members.
     * 
     * If `length` is -1, `json` will be assumed to be nul-terminated.
     * 
     * If an error occurs during parsing, a suitable error from #GDataParserError will be returned.
     * @constructor 
     * @param parsable_type the type of the class represented by the JSON
     * @param json the JSON for just the parsable object
     * @param length the length of `json,` or -1
     */
    static new_from_json(parsable_type: GObject.GType, json: string, length: number): Parsable
    /**
     * Creates a new #GDataParsable subclass (of the given `parsable_type)` from the given `xml`.
     * 
     * An object of the given `parsable_type` is created, and its <function>pre_parse_xml</function>, <function>parse_xml</function> and
     * <function>post_parse_xml</function> class functions called on the XML tree obtained from `xml`. <function>pre_parse_xml</function> and
     * <function>post_parse_xml</function> are called once each on the root node of the tree, while <function>parse_xml</function> is called for
     * each of the child nodes of the root node.
     * 
     * If `length` is -1, `xml` will be assumed to be null-terminated.
     * 
     * If an error occurs during parsing, a suitable error from #GDataParserError will be returned.
     * @constructor 
     * @param parsable_type the type of the class represented by the XML
     * @param xml the XML for just the parsable object, with full namespace declarations
     * @param length the length of `xml,` or -1
     */
    static new_from_xml(parsable_type: GObject.GType, xml: string, length: number): Parsable
    _init(config?: Parsable_ConstructProps): void
}

interface PicasaWebAlbum_ConstructProps extends Entry_ConstructProps {

    // Own constructor properties of GData-0.0.GData.PicasaWebAlbum

    /**
     * The ID of the album. This is a substring of the ID returned by gdata_entry_get_id() for #GDataPicasaWebAlbums; for example,
     * if gdata_entry_get_id() returned "http://picasaweb.google.com/data/entry/user/libgdata.picasaweb/albumid/5328889949261497249" for a
     * particular #GDataPicasaWebAlbum, the #GDataPicasaWebAlbum:album-id property would be "5328889949261497249".
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_id">
     * gphoto specification</ulink>.
     */
    album_id?: string | null
    is_commenting_enabled?: boolean | null
    /**
     * The location as a latitude coordinate associated with this album. Valid latitudes range from <code class="literal">-90.0</code>
     * to <code class="literal">90.0</code> inclusive.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
     * GeoRSS specification</ulink>.
     */
    latitude?: number | null
    /**
     * The user-specified location associated with the album. A place name.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_location">
     * gphoto specification</ulink>.
     */
    location?: string | null
    /**
     * The location as a longitude coordinate associated with this album. Valid longitudes range from <code class="literal">-180.0</code>
     * to <code class="literal">180.0</code> inclusive.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
     * GeoRSS specification</ulink>.
     */
    longitude?: number | null
    /**
     * A %NULL-terminated array of tags associated with the album; all the tags associated with the individual photos in the album.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_keywords">
     * Media RSS specification</ulink>.
     */
    tags?: string[] | null
    /**
     * The timestamp of when the album occurred, settable by the user. This a UNIX timestamp in milliseconds (not seconds) since the epoch.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_timestamp">
     * gphoto specification</ulink>.
     */
    timestamp?: number | null
    /**
     * The visibility (or access rights) of the album.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_access">
     * gphoto specification</ulink>.
     */
    visibility?: PicasaWebVisibility | null
}

interface PicasaWebAlbum {

    // Own properties of GData-0.0.GData.PicasaWebAlbum

    /**
     * The ID of the album. This is a substring of the ID returned by gdata_entry_get_id() for #GDataPicasaWebAlbums; for example,
     * if gdata_entry_get_id() returned "http://picasaweb.google.com/data/entry/user/libgdata.picasaweb/albumid/5328889949261497249" for a
     * particular #GDataPicasaWebAlbum, the #GDataPicasaWebAlbum:album-id property would be "5328889949261497249".
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_id">
     * gphoto specification</ulink>.
     */
    readonly album_id: string
    /**
     * The number of bytes consumed by this album and its contents. Note that this is only set if the authenticated user is the owner of the
     * album; it's otherwise <code class="literal">-1</code>.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_bytesUsed">
     * gphoto specification</ulink>.
     */
    readonly bytes_used: number
    /**
     * The number of comments on the album.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_commentCount">
     * gphoto specification</ulink>.
     */
    readonly comment_count: number
    /**
     * The time this album was last edited. If the album has not been edited yet, the content indicates the time it was created.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited">
     * Atom Publishing Protocol specification</ulink>.
     */
    readonly edited: number
    is_commenting_enabled: boolean
    /**
     * The location as a latitude coordinate associated with this album. Valid latitudes range from <code class="literal">-90.0</code>
     * to <code class="literal">90.0</code> inclusive.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
     * GeoRSS specification</ulink>.
     */
    latitude: number
    /**
     * The user-specified location associated with the album. A place name.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_location">
     * gphoto specification</ulink>.
     */
    location: string
    /**
     * The location as a longitude coordinate associated with this album. Valid longitudes range from <code class="literal">-180.0</code>
     * to <code class="literal">180.0</code> inclusive.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
     * GeoRSS specification</ulink>.
     */
    longitude: number
    /**
     * The user's nickname. This is a user-specified value that should be used when referring to the user by name.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_nickname">
     * gphoto specification</ulink>.
     */
    readonly nickname: string
    /**
     * The number of photos and videos in the album.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_numphotos">
     * gphoto specification</ulink>.
     */
    readonly num_photos: number
    /**
     * The number of photos and videos that can still be uploaded to this album.
     * This doesn't account for quota, just a hardcoded maximum number per album set by Google.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_numphotosremaining">
     * gphoto specification</ulink>.
     */
    readonly num_photos_remaining: number
    /**
     * A %NULL-terminated array of tags associated with the album; all the tags associated with the individual photos in the album.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_keywords">
     * Media RSS specification</ulink>.
     */
    tags: string[]
    /**
     * The timestamp of when the album occurred, settable by the user. This a UNIX timestamp in milliseconds (not seconds) since the epoch.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_timestamp">
     * gphoto specification</ulink>.
     */
    timestamp: number
    /**
     * The username of the album owner.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_user">
     * gphoto specification</ulink>.
     */
    readonly user: string
    /**
     * The visibility (or access rights) of the album.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_access">
     * gphoto specification</ulink>.
     */
    visibility: PicasaWebVisibility

    // Own fields of GData-0.0.GData.PicasaWebAlbum

    parent: Entry
    priv: PicasaWebAlbumPrivate

    // Owm methods of GData-0.0.GData.PicasaWebAlbum

    /**
     * Gets the #GDataPicasaWebAlbum:bytes-used property. It will return <code class="literal">-1</code> if the current authenticated
     * user is not the owner of the album.
     */
    get_bytes_used(): number
    /**
     * Gets the #GDataPicasaWebAlbum:comment-count property.
     */
    get_comment_count(): number
    /**
     * Returns a list of media content, such as the cover image for the album.
     */
    get_contents(): MediaContent[]
    /**
     * Gets the #GDataPicasaWebAlbum:latitude and #GDataPicasaWebAlbum:longitude properties,
     * setting the out parameters to them. If either latitude or longitude is %NULL, that parameter will not be set.
     * If the coordinates are unset, `latitude` and `longitude` will be set to %G_MAXDOUBLE.
     */
    get_coordinates(): [ /* latitude */ number, /* longitude */ number ]
    /**
     * Gets the #GDataPicasaWebAlbum:edited property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_edited(): number
    /**
     * Gets the #GDataPicasaWebAlbum:album-id property.
     */
    get_id(): string

    // Overloads of get_id

    /**
     * Returns the URN ID of the entry; a unique and permanent identifier for the object the entry represents.
     * 
     * The ID may be %NULL if and only if the #GDataEntry has been newly created, and hasn't yet been inserted on the server.
     */
    get_id(): string | null
    get_id(...args: any[]): any
    get_id(...args: any[]): string | string | null | any
    /**
     * Gets the #GDataPicasaWebAlbum:location property.
     */
    get_location(): string
    /**
     * Gets the #GDataPicasaWebAlbum:nickname property.
     */
    get_nickname(): string
    /**
     * Gets the #GDataPicasaWebAlbum:num-photos property.
     */
    get_num_photos(): number
    /**
     * Gets the #GDataPicasaWebAlbum:num-photos-remaining property.
     */
    get_num_photos_remaining(): number
    /**
     * Gets the #GDataPicasaWebAlbum:tags property.
     */
    get_tags(): string[]
    /**
     * Returns a list of thumbnails, often at different sizes, for this album.
     */
    get_thumbnails(): MediaThumbnail[]
    /**
     * Gets the #GDataPicasaWebAlbum:timestamp property. This value usually holds either the date that best corresponds to the album of photos, or to the
     * day it was uploaded. It's a UNIX timestamp in milliseconds (not seconds) since the epoch. If the property is unset, <code class="literal">-1</code>
     * will be returned.
     */
    get_timestamp(): number
    /**
     * Gets the #GDataPicasaWebAlbum:user property.
     */
    get_user(): string
    /**
     * Gets the #GDataPicasaWebAlbum:visibility property.
     */
    get_visibility(): PicasaWebVisibility
    /**
     * Sets the #GDataPicasaWebAlbum:latitude and #GDataPicasaWebAlbum:longitude properties to
     * `latitude` and `longitude` respectively.
     * @param latitude the album's new latitude coordinate, or %G_MAXDOUBLE
     * @param longitude the album's new longitude coordinate, or %G_MAXDOUBLE
     */
    set_coordinates(latitude: number, longitude: number): void
    /**
     * Sets the #GDataPicasaWebAlbum:is-commenting-enabled property to `is_commenting_enabled`.
     * @param is_commenting_enabled %TRUE if commenting should be enabled for the album, %FALSE otherwise
     */
    set_is_commenting_enabled(is_commenting_enabled: boolean): void
    /**
     * Sets the #GDataPicasaWebAlbum:location property to `location`.
     * 
     * Set `location` to %NULL to unset the property.
     * @param location the new album location, or %NULL
     */
    set_location(location: string | null): void
    /**
     * Sets the #GDataPicasaWebAlbum:tags property to `tags`.
     * 
     * Set `tags` to %NULL to unset the album's tag list.
     * @param tags the new %NULL-terminated array of tags, or %NULL
     */
    set_tags(tags: string[] | null): void
    /**
     * Sets the #GDataPicasaWebAlbum:timestamp property from `timestamp`. This should be a UNIX timestamp in milliseconds (not seconds) since the epoch.
     * 
     * Set `timestamp` to <code class="literal">-1</code> to unset the property.
     * @param timestamp a UNIX timestamp, or <code class="literal">-1</code>
     */
    set_timestamp(timestamp: number): void
    /**
     * Sets the #GDataPicasaWebAlbum:visibility property to `visibility`.
     * @param visibility the new album visibility level
     */
    set_visibility(visibility: PicasaWebVisibility): void

    // Class property signals of GData-0.0.GData.PicasaWebAlbum

    connect(sigName: "notify::album-id", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-id", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album-id", ...args: any[]): void
    connect(sigName: "notify::bytes-used", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes-used", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bytes-used", ...args: any[]): void
    connect(sigName: "notify::comment-count", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment-count", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::comment-count", ...args: any[]): void
    connect(sigName: "notify::edited", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::edited", ...args: any[]): void
    connect(sigName: "notify::is-commenting-enabled", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-commenting-enabled", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-commenting-enabled", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::num-photos", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-photos", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-photos", ...args: any[]): void
    connect(sigName: "notify::num-photos-remaining", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-photos-remaining", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-photos-remaining", ...args: any[]): void
    connect(sigName: "notify::tags", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tags", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tags", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::user", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataPicasaWebAlbum structure are private and should never be accessed directly.
 * @class 
 */
class PicasaWebAlbum extends Entry {

    // Own properties of GData-0.0.GData.PicasaWebAlbum

    static name: string
    static $gtype: GObject.GType<PicasaWebAlbum>

    // Constructors of GData-0.0.GData.PicasaWebAlbum

    constructor(config?: PicasaWebAlbum_ConstructProps) 
    /**
     * Creates a new #GDataPicasaWebAlbum with the given ID and default properties. `id` is the ID which would be returned by gdata_entry_get_id(),
     * not gdata_picasaweb_album_get_id().
     * 
     * If `id` is not %NULL and can't be parsed to extract an album ID, %NULL will be returned.
     * @constructor 
     * @param id the album's entry ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataPicasaWebAlbum with the given ID and default properties. `id` is the ID which would be returned by gdata_entry_get_id(),
     * not gdata_picasaweb_album_get_id().
     * 
     * If `id` is not %NULL and can't be parsed to extract an album ID, %NULL will be returned.
     * @constructor 
     * @param id the album's entry ID, or %NULL
     */
    static new(id: string | null): PicasaWebAlbum

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: PicasaWebAlbum_ConstructProps): void
}

interface PicasaWebComment_ConstructProps extends Comment_ConstructProps {
}

interface PicasaWebComment {

    // Own fields of GData-0.0.GData.PicasaWebComment

    parent: Comment
    priv: PicasaWebCommentPrivate

    // Class property signals of GData-0.0.GData.PicasaWebComment

    connect(sigName: "notify::content", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataPicasaWebComment structure are private and should never be accessed directly.
 * @class 
 */
class PicasaWebComment extends Comment {

    // Own properties of GData-0.0.GData.PicasaWebComment

    static name: string
    static $gtype: GObject.GType<PicasaWebComment>

    // Constructors of GData-0.0.GData.PicasaWebComment

    constructor(config?: PicasaWebComment_ConstructProps) 
    /**
     * Creates a new #GDataPicasaWebComment with the given ID and default properties.
     * @constructor 
     * @param id the comment's ID, or %NULL
     */
    constructor(id: string) 
    /**
     * Creates a new #GDataPicasaWebComment with the given ID and default properties.
     * @constructor 
     * @param id the comment's ID, or %NULL
     */
    static new(id: string): PicasaWebComment

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: PicasaWebComment_ConstructProps): void
}

interface PicasaWebFeed_ConstructProps extends Feed_ConstructProps {
}

interface PicasaWebFeed {

    // Own fields of GData-0.0.GData.PicasaWebFeed

    parent: Feed

    // Class property signals of GData-0.0.GData.PicasaWebFeed

    connect(sigName: "notify::etag", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::generator", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::generator", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::items-per-page", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-per-page", ...args: any[]): void
    connect(sigName: "notify::logo", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::next-page-token", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-page-token", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::total-results", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-results", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataPicasaWebFeed structure are private and should never be accessed directly.
 * @class 
 */
class PicasaWebFeed extends Feed {

    // Own properties of GData-0.0.GData.PicasaWebFeed

    static name: string
    static $gtype: GObject.GType<PicasaWebFeed>

    // Constructors of GData-0.0.GData.PicasaWebFeed

    constructor(config?: PicasaWebFeed_ConstructProps) 
    _init(config?: PicasaWebFeed_ConstructProps): void
}

interface PicasaWebFile_ConstructProps extends Commentable_ConstructProps, Entry_ConstructProps {

    // Own constructor properties of GData-0.0.GData.PicasaWebFile

    /**
     * The ID for the file's album. This is in the same form as returned by gdata_picasaweb_album_get_id().
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_albumid">
     * gphoto specification</ulink>.
     */
    album_id?: string | null
    /**
     * The file's descriptive caption.
     */
    caption?: string | null
    /**
     * A checksum of the file, useful for duplicate detection.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_checksum">
     * gphoto specification</ulink>.
     */
    checksum?: string | null
    /**
     * The ID of the file. This is a substring of the ID returned by gdata_entry_get_id() for #GDataPicasaWebFiles; for example,
     * if gdata_entry_get_id() returned
     * "http://picasaweb.google.com/data/entry/user/libgdata.picasaweb/albumid/5328889949261497249/photoid/5328890138794566386" for a
     * particular #GDataPicasaWebFile, the #GDataPicasaWebFile:file-id property would be "5328890138794566386".
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_id">
     * gphoto specification</ulink>.
     */
    file_id?: string | null
    /**
     * Whether commenting is enabled for this file.
     */
    is_commenting_enabled?: boolean | null
    /**
     * The location as a latitude coordinate associated with this file. Valid latitudes range from <code class="literal">-90.0</code>
     * to <code class="literal">90.0</code> inclusive.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
     * GeoRSS specification</ulink>.
     */
    latitude?: number | null
    /**
     * The location as a longitude coordinate associated with this file. Valid longitudes range from <code class="literal">-180.0</code>
     * to <code class="literal">180.0</code> inclusive.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
     * GeoRSS specification</ulink>.
     */
    longitude?: number | null
    /**
     * The rotation of the photo, in degrees. This will only be non-zero for files which are pending rotation, and haven't yet been
     * permanently modified. For files which have already been rotated, this will be <code class="literal">0</code>.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_rotation">
     * gphoto specification</ulink>.
     */
    rotation?: number | null
    /**
     * A %NULL-terminated array of tags associated with the file.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_keywords">
     * Media RSS specification</ulink>.
     */
    tags?: string[] | null
    /**
     * The time the file was purportedly taken. This a UNIX timestamp in milliseconds (not seconds) since the epoch.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_timestamp">
     * gphoto specification</ulink>.
     */
    timestamp?: number | null
    /**
     * The version number of the file. Version numbers are based on modification time, so they don't increment linearly.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_version">
     * gphoto specification</ulink>.
     */
    version?: string | null
}

interface PicasaWebFile extends Commentable {

    // Own properties of GData-0.0.GData.PicasaWebFile

    /**
     * The ID for the file's album. This is in the same form as returned by gdata_picasaweb_album_get_id().
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_albumid">
     * gphoto specification</ulink>.
     */
    album_id: string
    /**
     * The file's descriptive caption.
     */
    caption: string
    /**
     * A checksum of the file, useful for duplicate detection.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_checksum">
     * gphoto specification</ulink>.
     */
    checksum: string
    /**
     * The number of comments on the file.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_commentCount">
     * gphoto specification</ulink>.
     */
    readonly comment_count: number
    /**
     * The nickname of the user credited with this file.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_credit">Media RSS
     * specification</ulink>.
     */
    readonly credit: string
    /**
     * The distance to the subject reported in the image's EXIF.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly distance: number
    /**
     * The time this file was last edited. If the file has not been edited yet, the content indicates the time it was created.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited">
     * Atom Publishing Protocol specification</ulink>.
     */
    readonly edited: number
    /**
     * The exposure time.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly exposure: number
    /**
     * The ID of the file. This is a substring of the ID returned by gdata_entry_get_id() for #GDataPicasaWebFiles; for example,
     * if gdata_entry_get_id() returned
     * "http://picasaweb.google.com/data/entry/user/libgdata.picasaweb/albumid/5328889949261497249/photoid/5328890138794566386" for a
     * particular #GDataPicasaWebFile, the #GDataPicasaWebFile:file-id property would be "5328890138794566386".
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_id">
     * gphoto specification</ulink>.
     */
    readonly file_id: string
    /**
     * Indicates whether the flash was used.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly flash: boolean
    /**
     * The focal length for the shot.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly focal_length: number
    /**
     * The F-stop value.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly fstop: number
    /**
     * The height of the photo or video, in pixels.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_height">
     * gphoto specification</ulink>.
     */
    readonly height: number
    /**
     * An unique ID for the image found in the EXIF.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly image_unique_id: string
    /**
     * Whether commenting is enabled for this file.
     */
    is_commenting_enabled: boolean
    /**
     * The ISO speed.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink> and ISO 5800:1987.
     */
    readonly iso: number
    /**
     * The location as a latitude coordinate associated with this file. Valid latitudes range from <code class="literal">-90.0</code>
     * to <code class="literal">90.0</code> inclusive.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
     * GeoRSS specification</ulink>.
     */
    latitude: number
    /**
     * The location as a longitude coordinate associated with this file. Valid longitudes range from <code class="literal">-180.0</code>
     * to <code class="literal">180.0</code> inclusive.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
     * GeoRSS specification</ulink>.
     */
    longitude: number
    /**
     * The name of the manufacturer of the camera.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly make: string
    /**
     * The model of the camera.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly model: string
    /**
     * The rotation of the photo, in degrees. This will only be non-zero for files which are pending rotation, and haven't yet been
     * permanently modified. For files which have already been rotated, this will be <code class="literal">0</code>.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_rotation">
     * gphoto specification</ulink>.
     */
    rotation: number
    /**
     * The size of the file, in bytes.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_size">
     * gphoto specification</ulink>.
     */
    readonly size: number
    /**
     * A %NULL-terminated array of tags associated with the file.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_keywords">
     * Media RSS specification</ulink>.
     */
    tags: string[]
    /**
     * The time the file was purportedly taken. This a UNIX timestamp in milliseconds (not seconds) since the epoch.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_timestamp">
     * gphoto specification</ulink>.
     */
    timestamp: number
    /**
     * The version number of the file. Version numbers are based on modification time, so they don't increment linearly.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_version">
     * gphoto specification</ulink>.
     */
    readonly version: string
    /**
     * The status of the file, if it is a video. For example: %GDATA_PICASAWEB_VIDEO_STATUS_PENDING or %GDATA_PICASAWEB_VIDEO_STATUS_FAILED.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_videostatus">
     * gphoto specification</ulink>.
     */
    readonly video_status: string
    /**
     * The width of the photo or video, in pixels.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_width">
     * gphoto specification</ulink>.
     */
    readonly width: number

    // Own fields of GData-0.0.GData.PicasaWebFile

    parent: Entry
    priv: PicasaWebFilePrivate

    // Owm methods of GData-0.0.GData.PicasaWebFile

    /**
     * Gets the #GDataPicasaWebFile:album-id property. This is in the same form as returned by gdata_picasaweb_album_get_id().
     */
    get_album_id(): string
    /**
     * Gets the #GDataPicasaWebFile:caption property.
     */
    get_caption(): string
    /**
     * Gets the #GDataPicasaWebFile:checksum property.
     */
    get_checksum(): string
    /**
     * Gets the #GDataPicasaWebFile:comment-count property.
     */
    get_comment_count(): number
    /**
     * Returns a list of media content, e.g. the actual photo or video.
     */
    get_contents(): MediaContent[]
    /**
     * Gets the #GDataPicasaWebFile:latitude and #GDataPicasaWebFile:longitude properties, setting the out parameters to them.
     * If either latitude or longitude is %NULL, that parameter will not be set. If the coordinates are unset,
     * `latitude` and `longitude` will be set to %G_MAXDOUBLE.
     */
    get_coordinates(): [ /* latitude */ number, /* longitude */ number ]
    /**
     * Gets the #GDataPicasaWebFile:credit property.
     */
    get_credit(): string
    /**
     * Gets the #GDataPicasaWebFile:distance property.
     */
    get_distance(): number
    /**
     * Gets the #GDataPicasaWebFile:edited property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_edited(): number
    /**
     * Gets the #GDataPicasaWebFile:exposure property.
     */
    get_exposure(): number
    /**
     * Gets the #GDataPicasaWebFile:flash property.
     */
    get_flash(): boolean
    /**
     * Gets the #GDataPicasaWebFile:focal-length property.
     */
    get_focal_length(): number
    /**
     * Gets the #GDataPicasaWebFile:fstop property.
     */
    get_fstop(): number
    /**
     * Gets the #GDataPicasaWebFile:height property.
     */
    get_height(): number
    /**
     * Gets the #GDataPicasaWebFile:file-id property.
     */
    get_id(): string

    // Overloads of get_id

    /**
     * Returns the URN ID of the entry; a unique and permanent identifier for the object the entry represents.
     * 
     * The ID may be %NULL if and only if the #GDataEntry has been newly created, and hasn't yet been inserted on the server.
     */
    get_id(): string | null
    get_id(...args: any[]): any
    get_id(...args: any[]): string | string | null | any
    /**
     * Gets the #GDataPicasaWebFile:image-unique-id property.
     */
    get_image_unique_id(): string
    /**
     * Gets the #GDataPicasaWebFile:iso property.
     */
    get_iso(): number
    /**
     * Gets the #GDataPicasaWebFile:make property.
     */
    get_make(): string
    /**
     * Gets the #GDataPicasaWebFile:model property.
     */
    get_model(): string
    /**
     * Gets the #GDataPicasaWebFile:rotation property.
     */
    get_rotation(): number
    /**
     * Gets the #GDataPicasaWebFile:size property.
     */
    get_size(): number
    /**
     * Gets the #GDataPicasaWebFile:tags property.
     */
    get_tags(): string[]
    /**
     * Returns a list of thumbnails, often at different sizes, for this
     * file.  Currently, PicasaWeb usually returns three thumbnails, with
     * widths in pixels of 72, 144, and 288.  However, the thumbnail will
     * not be larger than the actual image, so thumbnails may be smaller
     * than the widths listed above.
     */
    get_thumbnails(): MediaThumbnail[]
    /**
     * Gets the #GDataPicasaWebFile:timestamp property. It's a UNIX timestamp in milliseconds (not seconds) since the epoch. If the property is unset,
     * <code class="literal">-1</code> will be returned.
     */
    get_timestamp(): number
    /**
     * Gets the #GDataPicasaWebFile:version property.
     */
    get_version(): string
    /**
     * Gets the #GDataPicasaWebFile:video-status property.
     */
    get_video_status(): string
    /**
     * Gets the #GDataPicasaWebFile:width property.
     */
    get_width(): number
    /**
     * Sets the #GDataPicasaWebFile:album-id property, effectively moving the file to the album.
     * @param album_id the ID of the new album for this file
     */
    set_album_id(album_id: string): void
    /**
     * Sets the #GDataPicasaWebFile:caption property to `caption`.
     * 
     * Set `caption` to %NULL to unset the file's caption.
     * @param caption the file's new caption, or %NULL
     */
    set_caption(caption: string | null): void
    /**
     * Sets the #GDataPicasaWebFile:checksum property to `checksum`.
     * 
     * Set `checksum` to %NULL to unset the property.
     * @param checksum the new checksum for this file, or %NULL
     */
    set_checksum(checksum: string | null): void
    /**
     * Sets the #GDataPicasaWebFile:latitude and #GDataPicasaWebFile:longitude properties to
     * `latitude` and `longitude` respectively.
     * @param latitude the file's new latitude coordinate, or %G_MAXDOUBLE
     * @param longitude the file's new longitude coordinate, or %G_MAXDOUBLE
     */
    set_coordinates(latitude: number, longitude: number): void
    /**
     * Sets the #GDataPicasaWebFile:is-commenting-enabled property to `is_commenting_enabled`.
     * @param is_commenting_enabled %TRUE if commenting should be enabled for the file, %FALSE otherwise
     */
    set_is_commenting_enabled(is_commenting_enabled: boolean): void
    /**
     * Sets the #GDataPicasaWebFile:rotation property to `rotation`.
     * 
     * The rotation is absolute, rather than cumulative, through successive calls to gdata_picasaweb_file_set_rotation(),
     * so calling it with 90° then 20° will result in a final rotation of 20°.
     * @param rotation the new rotation for the image, in degrees
     */
    set_rotation(rotation: number): void
    /**
     * Sets the #GDataPicasaWebFile:tags property to `tags`.
     * 
     * Set `tags` to %NULL to unset the property.
     * @param tags a new %NULL-terminated array of tags, or %NULL
     */
    set_tags(tags: string[] | null): void
    /**
     * Sets the #GDataPicasaWebFile:timestamp property from `timestamp`. This should be a UNIX timestamp in milliseconds (not seconds) since the epoch. If
     * `timestamp` is <code class="literal">-1</code>, the property will be unset.
     * @param timestamp a UNIX timestamp, or <code class="literal">-1</code>
     */
    set_timestamp(timestamp: number): void

    // Class property signals of GData-0.0.GData.PicasaWebFile

    connect(sigName: "notify::album-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album-id", ...args: any[]): void
    connect(sigName: "notify::caption", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caption", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caption", ...args: any[]): void
    connect(sigName: "notify::checksum", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checksum", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::checksum", ...args: any[]): void
    connect(sigName: "notify::comment-count", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment-count", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::comment-count", ...args: any[]): void
    connect(sigName: "notify::credit", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credit", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::credit", ...args: any[]): void
    connect(sigName: "notify::distance", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::distance", ...args: any[]): void
    connect(sigName: "notify::edited", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::edited", ...args: any[]): void
    connect(sigName: "notify::exposure", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exposure", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::exposure", ...args: any[]): void
    connect(sigName: "notify::file-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-id", ...args: any[]): void
    connect(sigName: "notify::flash", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flash", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flash", ...args: any[]): void
    connect(sigName: "notify::focal-length", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focal-length", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focal-length", ...args: any[]): void
    connect(sigName: "notify::fstop", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fstop", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fstop", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::image-unique-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-unique-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-unique-id", ...args: any[]): void
    connect(sigName: "notify::is-commenting-enabled", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-commenting-enabled", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-commenting-enabled", ...args: any[]): void
    connect(sigName: "notify::iso", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iso", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iso", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::make", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::make", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::make", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::rotation", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::tags", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tags", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tags", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::video-status", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-status", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::video-status", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataPicasaWebFile structure are private and should never be accessed directly.
 * @class 
 */
class PicasaWebFile extends Entry {

    // Own properties of GData-0.0.GData.PicasaWebFile

    static name: string
    static $gtype: GObject.GType<PicasaWebFile>

    // Constructors of GData-0.0.GData.PicasaWebFile

    constructor(config?: PicasaWebFile_ConstructProps) 
    /**
     * Creates a new #GDataPicasaWebFile with the given ID and default properties.
     * @constructor 
     * @param id the file's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataPicasaWebFile with the given ID and default properties.
     * @constructor 
     * @param id the file's ID, or %NULL
     */
    static new(id: string | null): PicasaWebFile

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: PicasaWebFile_ConstructProps): void
}

interface PicasaWebQuery_ConstructProps extends Query_ConstructProps {

    // Own constructor properties of GData-0.0.GData.PicasaWebQuery

    /**
     * A comma-separated list of image sizes (width in pixels) to return. Only certain sizes are allowed, and whether the image should be
     * cropped or scaled can be specified; for more information, see the
     * <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Parameters">online documentation</ulink>.
     */
    image_size?: string | null
    /**
     * A location to search for photos, e.g. "London".
     */
    location?: string | null
    /**
     * A tag which returned results must contain.
     */
    tag?: string | null
    /**
     * A comma-separated list of thumbnail widths (in pixels) to return. Only certain sizes are allowed, and whether the thumbnail should be
     * cropped or scaled can be specified; for more information, see the
     * <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Parameters">online documentation</ulink>.
     */
    thumbnail_size?: string | null
    /**
     * Specifies which albums should be listed, in terms of their visibility (#GDataPicasaWebAlbum:visibility).
     * 
     * Set the property to <code class="literal">0</code> to list all albums, regardless of their visibility. Otherwise, use values
     * from #GDataPicasaWebVisibility.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Visibility">
     * online documentation</ulink>.
     */
    visibility?: number | null
}

interface PicasaWebQuery {

    // Own properties of GData-0.0.GData.PicasaWebQuery

    /**
     * A comma-separated list of image sizes (width in pixels) to return. Only certain sizes are allowed, and whether the image should be
     * cropped or scaled can be specified; for more information, see the
     * <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Parameters">online documentation</ulink>.
     */
    image_size: string
    /**
     * A location to search for photos, e.g. "London".
     */
    location: string
    /**
     * A tag which returned results must contain.
     */
    tag: string
    /**
     * A comma-separated list of thumbnail widths (in pixels) to return. Only certain sizes are allowed, and whether the thumbnail should be
     * cropped or scaled can be specified; for more information, see the
     * <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Parameters">online documentation</ulink>.
     */
    thumbnail_size: string
    /**
     * Specifies which albums should be listed, in terms of their visibility (#GDataPicasaWebAlbum:visibility).
     * 
     * Set the property to <code class="literal">0</code> to list all albums, regardless of their visibility. Otherwise, use values
     * from #GDataPicasaWebVisibility.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Visibility">
     * online documentation</ulink>.
     */
    visibility: number

    // Own fields of GData-0.0.GData.PicasaWebQuery

    parent: Query
    priv: PicasaWebQueryPrivate

    // Owm methods of GData-0.0.GData.PicasaWebQuery

    /**
     * Gets the latitudes and longitudes of a bounding box, inside which all the results must lie.
     */
    get_bounding_box(): [ /* north */ number, /* east */ number, /* south */ number, /* west */ number ]
    /**
     * Gets the #GDataPicasaWebQuery:image-size property.
     */
    get_image_size(): string
    /**
     * Gets the #GDataPicasaWebQuery:location property.
     */
    get_location(): string
    /**
     * Gets the #GDataPicasaWebQuery:tag property.
     */
    get_tag(): string
    /**
     * Gets the #GDataPicasaWebQuery:thumbnail-size property.
     */
    get_thumbnail_size(): string
    /**
     * Gets the #GDataPicasaWebQuery:visibility property.
     */
    get_visibility(): PicasaWebVisibility
    /**
     * Sets a bounding box, inside which all the returned results must lie.
     * 
     * Set `north,` `east,` `south` and `west` to <code class="literal">0</code> to unset the property.
     * @param north latitude of the top of the box
     * @param east longitude of the right of the box
     * @param south latitude of the bottom of the box
     * @param west longitude of the left of the box
     */
    set_bounding_box(north: number, east: number, south: number, west: number): void
    /**
     * Sets the #GDataPicasaWebQuery:image-size property to `image_size`.
     * Valid sizes are described in the
     * <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#Parameters">online documentation</ulink>.
     * 
     * Set `image_size` to %NULL to unset the property.
     * @param image_size the desired size of the image to be retrieved, or %NULL
     */
    set_image_size(image_size: string | null): void
    /**
     * Sets the #GDataPicasaWebQuery:location property to `location`.
     * 
     * Set `location` to %NULL to unset the property.
     * @param location a location which returned objects must be near, or %NULL
     */
    set_location(location: string | null): void
    /**
     * Sets the #GDataPicasaWebQuery:tag property to `tag`.
     * 
     * Set `tag` to %NULL to unset the property.
     * @param tag a tag which retrieved objects must have, or %NULL
     */
    set_tag(tag: string | null): void
    /**
     * Sets the #GDataPicasaWebQuery:thumbnail-size property to `thumbnail_size`.
     * 
     * Set `thumbnail_size` to %NULL to unset the property.
     * @param thumbnail_size a comma-separated list of thumbnail sizes to retrieve, or %NULL
     */
    set_thumbnail_size(thumbnail_size: string | null): void
    /**
     * Sets the #GDataPicasaWebQuery:visibility property to `visibility`.
     * @param visibility the visibility of the objects to retrieve, or <code class="literal">0</code> to retrieve all objects
     */
    set_visibility(visibility: PicasaWebVisibility): void

    // Class property signals of GData-0.0.GData.PicasaWebQuery

    connect(sigName: "notify::image-size", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-size", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-size", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::tag", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag", ...args: any[]): void
    connect(sigName: "notify::thumbnail-size", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnail-size", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::thumbnail-size", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::author", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataPicasaWebQuery structure are private and should never be accessed directly.
 * @class 
 */
class PicasaWebQuery extends Query {

    // Own properties of GData-0.0.GData.PicasaWebQuery

    static name: string
    static $gtype: GObject.GType<PicasaWebQuery>

    // Constructors of GData-0.0.GData.PicasaWebQuery

    constructor(config?: PicasaWebQuery_ConstructProps) 
    /**
     * Creates a new #GDataPicasaWebQuery with its #GDataQuery:q property set to `q`.
     * 
     * Note that when querying for albums with gdata_picasaweb_service_query_all_albums(), the `q` parameter cannot be used.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataPicasaWebQuery with its #GDataQuery:q property set to `q`.
     * 
     * Note that when querying for albums with gdata_picasaweb_service_query_all_albums(), the `q` parameter cannot be used.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): PicasaWebQuery

    // Overloads of new

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    /**
     * Creates a #GDataPicasaWebQuery with its #GDataQuery:q property set to `q,` returning `max_results` starting from the `start_index<`!-- -->th result.
     * 
     * Note that when querying for albums with gdata_picasaweb_service_query_all_albums(), the `q` parameter cannot be used.
     * 
     * This is useful for paging through results, but the result set between separate queries may change. So, if you use this to
     * request the next ten results after a previous query, it may include some of the previously returned results if their order changed, or
     * omit ones that would have otherwise been found in a earlier but larger query.
     * @constructor 
     * @param q a query string, or %NULL
     * @param start_index the index of the first result to include, or <code class="literal">0</code>
     * @param max_results the maximum number of results to include, or <code class="literal">0</code>
     */
    static new_with_limits(q: string | null, start_index: number, max_results: number): PicasaWebQuery

    // Overloads of new_with_limits

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q,` and the limits `start_index` and `max_results`
     * applied.
     * @constructor 
     * @param q a query string, or %NULL
     * @param start_index a one-based start index for the results, or <code class="literal">0</code>
     * @param max_results the maximum number of results to return, or <code class="literal">0</code>
     */
    static new_with_limits(q: string | null, start_index: number, max_results: number): Query
    _init(config?: PicasaWebQuery_ConstructProps): void
}

interface PicasaWebService_ConstructProps extends Service_ConstructProps {
}

interface PicasaWebService {

    // Own fields of GData-0.0.GData.PicasaWebService

    parent: Service

    // Owm methods of GData-0.0.GData.PicasaWebService

    /**
     * Finish off a file upload operation started by gdata_picasaweb_service_upload_file(), parsing the result and returning the new #GDataPicasaWebFile.
     * 
     * If an error occurred during the upload operation, it will have been returned during the operation (e.g. by g_output_stream_splice() or one
     * of the other stream methods). In such a case, %NULL will be returned but `error` will remain unset. `error` is only set in the case that the server
     * indicates that the operation was successful, but an error is encountered in parsing the result sent by the server.
     * @param upload_stream the #GDataUploadStream from the operation
     */
    finish_file_upload(upload_stream: UploadStream): PicasaWebFile
    /**
     * Queries the service to return the user specified by `username`.
     * @param username the username of the user whose information you wish to retrieve, or %NULL for the currently authenticated user.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_user(username: string | null, cancellable: Gio.Cancellable | null): PicasaWebUser
    /**
     * Queries the service to return the user specified by `username`.
     * 
     * For more details, see gdata_picasaweb_service_get_user() which is the synchronous version of this method.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_picasaweb_service_get_user_finish() to get the results of the
     * operation.
     * @param username the username of the user whose information you wish to retrieve, or %NULL for the currently authenticated user
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    get_user_async(username: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous user retrieval operation started with gdata_picasaweb_service_get_user_async().
     * @param result a #GAsyncResult
     */
    get_user_finish(result: Gio.AsyncResult): PicasaWebUser
    /**
     * Inserts a new album described by `album`. A user must be
     * authenticated to use this function.
     * @param album a #GDataPicasaWebAlbum to create on the server
     * @param cancellable optional #GCancellable object, or %NULL
     */
    insert_album(album: PicasaWebAlbum, cancellable: Gio.Cancellable | null): PicasaWebAlbum
    /**
     * Inserts a new album described by `album`. The user must be authenticated to use this function. `self` and `album` are both reffed when this function
     * is called, so can safely be unreffed after this function returns.
     * 
     * `callback` should call gdata_service_insert_entry_finish() to obtain a #GDataPicasaWebAlbum representing the inserted album and to check for
     * possible errors.
     * 
     * For more details, see gdata_picasaweb_service_insert_album(), which is the synchronous version of this function, and
     * gdata_service_insert_entry_async(), which is the base asynchronous insertion function.
     * @param album a #GDataPicasaWebAlbum to create on the server
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    insert_album_async(album: PicasaWebAlbum, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of all albums belonging to the specified `username` which match the given
     * `query`. If a user is authenticated with the service, `username` can be set as %NULL to return a list of albums belonging
     * to the currently-authenticated user.
     * 
     * Note that the #GDataQuery:q query parameter cannot be set on `query` for album queries.
     * 
     * For more details, see gdata_service_query().
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param username the username of the user whose albums you wish to retrieve, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query_all_albums(query: Query | null, username: string | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed
    /**
     * Queries the service to return a list of all albums belonging to the specified `username` which match the given
     * `query`. `self,` `query` and `username` are all reffed/copied when this function is called, so can safely be unreffed/freed after
     * this function returns.
     * 
     * For more details, see gdata_picasaweb_service_query_all_albums(), which is the synchronous version of
     * this function, and gdata_service_query_async(), which is the base asynchronous query function.
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param username the username of the user whose albums you wish to retrieve, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    query_all_albums_async(query: Query | null, username: string | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the specified `album` for a list of the files which match the given `query`. If `album` is %NULL and a user is
     * authenticated with the service, the user's default album will be queried.
     * 
     * For more details, see gdata_service_query().
     * @param album a #GDataPicasaWebAlbum from which to retrieve the files, or %NULL
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query_files(album: PicasaWebAlbum | null, query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed
    /**
     * Queries the specified `album` for a list of the files which match the given `query`. If `album` is %NULL and a user is authenticated with the service,
     * the user's default album will be queried. `self,` `album` and `query` are all reffed when this function is called, so can safely be unreffed after
     * this function returns.
     * 
     * For more details, see gdata_picasaweb_service_query_files(), which is the synchronous version of this function, and gdata_service_query_async(),
     * which is the base asynchronous query function.
     * @param album a #GDataPicasaWebAlbum from which to retrieve the files, or %NULL
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    query_files_async(album: PicasaWebAlbum | null, query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Uploads a file (photo or video) to the given PicasaWeb `album,` using the metadata from `file` and the file data written to the resulting
     * #GDataUploadStream. If `album` is %NULL, the file will be uploaded to the currently-authenticated user's "Drop Box" album. A user must be
     * authenticated to use this function.
     * 
     * If `file` has already been inserted, a %GDATA_SERVICE_ERROR_ENTRY_ALREADY_INSERTED error will be returned.
     * 
     * If no user is authenticated with the service, %GDATA_SERVICE_ERROR_AUTHENTICATION_REQUIRED will be returned. It is recommended to retry the
     * upload after refreshing the authorization tokens held by the associated #GDataAuthorizer using gdata_authorizer_refresh_authorization().
     * 
     * The stream returned by this function should be written to using the standard #GOutputStream methods, asynchronously or synchronously. Once the stream
     * is closed (using g_output_stream_close()), gdata_picasaweb_service_finish_file_upload() should be called on it to parse and return the updated
     * #GDataPicasaWebFile for the uploaded file. This must be done, as `file_entry` isn't updated in-place.
     * 
     * In order to cancel the upload, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GOutputStream operations on the #GDataUploadStream will not cancel the entire upload; merely the write or close operation in question. See the
     * #GDataUploadStream:cancellable for more details.
     * 
     * Any upload errors will be thrown by the stream methods, and may come from the #GDataServiceError domain.
     * @param album a #GDataPicasaWebAlbum into which to insert the file, or %NULL
     * @param file_entry a #GDataPicasaWebFile to insert
     * @param slug the filename to give to the uploaded file
     * @param content_type the content type of the uploaded data
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    upload_file(album: PicasaWebAlbum | null, file_entry: PicasaWebFile, slug: string, content_type: string, cancellable: Gio.Cancellable | null): UploadStream

    // Class property signals of GData-0.0.GData.PicasaWebService

    connect(sigName: "notify::authorizer", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataPicasaWebService structure are private and should never be accessed directly.
 * @class 
 */
class PicasaWebService extends Service {

    // Own properties of GData-0.0.GData.PicasaWebService

    static name: string
    static $gtype: GObject.GType<PicasaWebService>

    // Constructors of GData-0.0.GData.PicasaWebService

    constructor(config?: PicasaWebService_ConstructProps) 
    /**
     * Creates a new #GDataPicasaWebService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    constructor(authorizer: Authorizer | null) 
    /**
     * Creates a new #GDataPicasaWebService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    static new(authorizer: Authorizer | null): PicasaWebService
    _init(config?: PicasaWebService_ConstructProps): void
    /**
     * The primary #GDataAuthorizationDomain for interacting with PicasaWeb. This will not normally need to be used, as it's used internally
     * by the #GDataPicasaWebService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
     * does not support natively, then this domain may be needed to authorize the requests.
     * 
     * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
     */
    static get_primary_authorization_domain(): AuthorizationDomain
}

interface PicasaWebUser_ConstructProps extends Entry_ConstructProps {
}

interface PicasaWebUser {

    // Own properties of GData-0.0.GData.PicasaWebUser

    /**
     * The maximum number of photos allowed in an album.
     * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_maxPhotosPerAlbum
     * 
     * If the #GDataPicasaWebUser does not represent the currently authenticated user, this will be <code class="literal">-1</code>.
     */
    readonly max_photos_per_album: number
    /**
     * The user's nickname. This is a user-specified value that should be used when referring to the user by name.
     * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_nickname
     */
    readonly nickname: string
    /**
     * The current amount of space, in bytes, already used by the user.
     * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_quotacurrent
     * 
     * If the #GDataPicasaWebUser does not represent the currently authenticated user, this will be <code class="literal">-1</code>.
     */
    readonly quota_current: number
    /**
     * The total amount of space, in bytes, available to the user.
     * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_quotalimit
     * 
     * If the #GDataPicasaWebUser does not represent the currently authenticated user, this will be <code class="literal">-1</code>.
     */
    readonly quota_limit: number
    /**
     * The URI of a thumbnail-sized portrait of the user.
     * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_thumbnail
     */
    readonly thumbnail_uri: string
    /**
     * The username of the user, as seen in feed URLs.
     * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_user
     */
    readonly user: string

    // Own fields of GData-0.0.GData.PicasaWebUser

    parent: Entry
    priv: PicasaWebUserPrivate

    // Owm methods of GData-0.0.GData.PicasaWebUser

    /**
     * Gets the #GDataPicasaWebUser:max-photos-per-album property.  Note that
     * this information is not available when accessing feeds which we
     * haven't authenticated, and <code class="literal">0</code> is returned.
     */
    get_max_photos_per_album(): number
    /**
     * Gets the #GDataPicasaWebUser:nickname property.
     */
    get_nickname(): string
    /**
     * Gets the #GDataPicasaWebUser:quota-current property.  Note that
     * this information is not available when accessing feeds which we
     * haven't authenticated, and <code class="literal">0</code> is returned.
     */
    get_quota_current(): number
    /**
     * Gets the #GDataPicasaWebUser:quota-limit property. Note that
     * this information is not available when accessing feeds which we
     * haven't authenticated, and <code class="literal">0</code> is returned.
     */
    get_quota_limit(): number
    /**
     * Gets the #GDataPicasaWebUser:thumbnail-uri property.
     */
    get_thumbnail_uri(): string
    /**
     * Gets the #GDataPicasaWebUser:user property.
     */
    get_user(): string

    // Class property signals of GData-0.0.GData.PicasaWebUser

    connect(sigName: "notify::max-photos-per-album", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-photos-per-album", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-photos-per-album", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::quota-current", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-current", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota-current", ...args: any[]): void
    connect(sigName: "notify::quota-limit", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-limit", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota-limit", ...args: any[]): void
    connect(sigName: "notify::thumbnail-uri", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnail-uri", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::thumbnail-uri", ...args: any[]): void
    connect(sigName: "notify::user", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataPicasaWebUser structure are private and should never be accessed directly.
 * @class 
 */
class PicasaWebUser extends Entry {

    // Own properties of GData-0.0.GData.PicasaWebUser

    static name: string
    static $gtype: GObject.GType<PicasaWebUser>

    // Constructors of GData-0.0.GData.PicasaWebUser

    constructor(config?: PicasaWebUser_ConstructProps) 
    _init(config?: PicasaWebUser_ConstructProps): void
}

interface Query_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GData-0.0.GData.Query

    /**
     * An entry author. The service returns entries where the author name and/or e-mail address match your query string.
     */
    author?: string | null
    /**
     * A category filter.
     * 
     * You can query on multiple categories by listing multiple categories separated by slashes. The service returns all entries that match all
     * of the categories (like using AND between terms). For example: <userinput>Fritz/Laurie</userinput> returns
     * entries that match both categories ("Fritz" and "Laurie").
     * 
     * To do an OR between terms, use a pipe character (<literal>|</literal>). For example: <userinput>Fritz\%7CLaurie</userinput> returns
     * entries that match either category.
     * 
     * An entry matches a specified category if the entry is in a category that has a matching term or label, as defined in the Atom
     * specification. (Roughly, the "term" is the internal string used by the software to identify the category, while the "label" is the
     * human-readable string presented to a user in a user interface.)
     * 
     * To exclude entries that match a given category, use the form <userinput>-categoryname</userinput>.
     * 
     * To query for a category that has a scheme – such as <literal>&lt;category scheme="urn:google.com" term="public"/&gt;</literal> – you must
     * place the scheme in curly braces before the category name. For example: <userinput>{urn:google.com}public</userinput>. To match a category
     * that has no scheme, use an empty pair of curly braces. If you don't specify curly braces, then categories in any scheme will match.
     * 
     * The above features can be combined. For example: <userinput>A|-{urn:google.com}B/-C</userinput> means (A OR (NOT B)) AND (NOT C).
     */
    categories?: string | null
    /**
     * The ETag against which to check for updates. If the server-side ETag matches this one, the requested feed hasn't changed, and is not
     * returned unnecessarily.
     * 
     * Setting any of the other query properties will unset the ETag, as ETags match against entire queries. If the ETag should be used in a
     * query, it must be set again using gdata_query_set_etag() after setting any other properties.
     */
    etag?: string | null
    /**
     * Strict query parameter checking. If this is enabled, an error will be returned by the online service if a parameter is
     * not recognised.
     */
    is_strict?: boolean | null
    /**
     * Maximum number of results to be retrieved. Most services have a default #GDataQuery:max-results size imposed by the server; if you wish
     * to receive the entire feed, specify a large number such as %G_MAXUINT for this property.
     * 
     * Use <code class="literal">0</code> to not specify a maximum number of results.
     */
    max_results?: number | null
    /**
     * Upper bound on the entry publish date, exclusive.
     */
    published_max?: number | null
    /**
     * Lower bound on the entry publish date, inclusive.
     */
    published_min?: number | null
    /**
     * A full-text query string.
     * 
     * When creating a query, list search terms separated by spaces, in the form <userinput>term1 term2 term3</userinput>.
     * (As with all of the query parameter values, the spaces must be URL encoded.) The service returns all entries that match all of the
     * search terms (like using AND between terms). Like Google's web search, a service searches on complete words (and related words with
     * the same stem), not substrings.
     * 
     * To search for an exact phrase, enclose the phrase in quotation marks: <userinput>"exact phrase"</userinput>.
     * 
     * To exclude entries that match a given term, use the form <userinput>-term</userinput>.
     * 
     * The search is case-insensitive.
     * 
     * Example: to search for all entries that contain the exact phrase "Elizabeth Bennet" and the word "Darcy" but don't contain the
     * word "Austen", use the following query: <userinput>"Elizabeth Bennet" Darcy -Austen</userinput>.
     */
    q?: string | null
    /**
     * The one-based index of the first result to be retrieved. Use gdata_query_next_page() and gdata_query_previous_page() to
     * implement pagination, rather than manually changing #GDataQuery:start-index.
     * 
     * Use <code class="literal">0</code> to not specify a start index.
     */
    start_index?: number | null
    /**
     * Upper bound on the entry update date, exclusive.
     */
    updated_max?: number | null
    /**
     * Lower bound on the entry update date, inclusive.
     */
    updated_min?: number | null
}

interface Query {

    // Own properties of GData-0.0.GData.Query

    /**
     * An entry author. The service returns entries where the author name and/or e-mail address match your query string.
     */
    author: string
    /**
     * A category filter.
     * 
     * You can query on multiple categories by listing multiple categories separated by slashes. The service returns all entries that match all
     * of the categories (like using AND between terms). For example: <userinput>Fritz/Laurie</userinput> returns
     * entries that match both categories ("Fritz" and "Laurie").
     * 
     * To do an OR between terms, use a pipe character (<literal>|</literal>). For example: <userinput>Fritz\%7CLaurie</userinput> returns
     * entries that match either category.
     * 
     * An entry matches a specified category if the entry is in a category that has a matching term or label, as defined in the Atom
     * specification. (Roughly, the "term" is the internal string used by the software to identify the category, while the "label" is the
     * human-readable string presented to a user in a user interface.)
     * 
     * To exclude entries that match a given category, use the form <userinput>-categoryname</userinput>.
     * 
     * To query for a category that has a scheme – such as <literal>&lt;category scheme="urn:google.com" term="public"/&gt;</literal> – you must
     * place the scheme in curly braces before the category name. For example: <userinput>{urn:google.com}public</userinput>. To match a category
     * that has no scheme, use an empty pair of curly braces. If you don't specify curly braces, then categories in any scheme will match.
     * 
     * The above features can be combined. For example: <userinput>A|-{urn:google.com}B/-C</userinput> means (A OR (NOT B)) AND (NOT C).
     */
    categories: string
    /**
     * The ETag against which to check for updates. If the server-side ETag matches this one, the requested feed hasn't changed, and is not
     * returned unnecessarily.
     * 
     * Setting any of the other query properties will unset the ETag, as ETags match against entire queries. If the ETag should be used in a
     * query, it must be set again using gdata_query_set_etag() after setting any other properties.
     */
    etag: string
    /**
     * Strict query parameter checking. If this is enabled, an error will be returned by the online service if a parameter is
     * not recognised.
     */
    is_strict: boolean
    /**
     * Maximum number of results to be retrieved. Most services have a default #GDataQuery:max-results size imposed by the server; if you wish
     * to receive the entire feed, specify a large number such as %G_MAXUINT for this property.
     * 
     * Use <code class="literal">0</code> to not specify a maximum number of results.
     */
    max_results: number
    /**
     * Upper bound on the entry publish date, exclusive.
     */
    published_max: number
    /**
     * Lower bound on the entry publish date, inclusive.
     */
    published_min: number
    /**
     * A full-text query string.
     * 
     * When creating a query, list search terms separated by spaces, in the form <userinput>term1 term2 term3</userinput>.
     * (As with all of the query parameter values, the spaces must be URL encoded.) The service returns all entries that match all of the
     * search terms (like using AND between terms). Like Google's web search, a service searches on complete words (and related words with
     * the same stem), not substrings.
     * 
     * To search for an exact phrase, enclose the phrase in quotation marks: <userinput>"exact phrase"</userinput>.
     * 
     * To exclude entries that match a given term, use the form <userinput>-term</userinput>.
     * 
     * The search is case-insensitive.
     * 
     * Example: to search for all entries that contain the exact phrase "Elizabeth Bennet" and the word "Darcy" but don't contain the
     * word "Austen", use the following query: <userinput>"Elizabeth Bennet" Darcy -Austen</userinput>.
     */
    q: string
    /**
     * The one-based index of the first result to be retrieved. Use gdata_query_next_page() and gdata_query_previous_page() to
     * implement pagination, rather than manually changing #GDataQuery:start-index.
     * 
     * Use <code class="literal">0</code> to not specify a start index.
     */
    start_index: number
    /**
     * Upper bound on the entry update date, exclusive.
     */
    updated_max: number
    /**
     * Lower bound on the entry update date, inclusive.
     */
    updated_min: number

    // Own fields of GData-0.0.GData.Query

    parent: GObject.Object
    priv: QueryPrivate

    // Owm methods of GData-0.0.GData.Query

    /**
     * Gets the #GDataQuery:author property.
     */
    get_author(): string
    /**
     * Gets the #GDataQuery:categories property.
     */
    get_categories(): string
    /**
     * Gets the #GDataQuery:etag property.
     */
    get_etag(): string
    /**
     * Gets the #GDataQuery:max-results property.
     */
    get_max_results(): number
    /**
     * Gets the #GDataQuery:published-max property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_published_max(): number
    /**
     * Gets the #GDataQuery:published-min property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_published_min(): number
    /**
     * Gets the #GDataQuery:q property.
     */
    get_q(): string
    /**
     * Builds a query URI from the given base feed URI, using the properties of the #GDataQuery. This function will take care
     * of all necessary URI escaping, so it should <emphasis>not</emphasis> be done beforehand.
     * 
     * The query URI is what functions like gdata_service_query() use to query the online service.
     * @param feed_uri the feed URI on which to build the query URI
     */
    get_query_uri(feed_uri: string): string
    /**
     * Gets the #GDataQuery:start-index property.
     */
    get_start_index(): number
    /**
     * Gets the #GDataQuery:updated-max property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_updated_max(): number
    /**
     * Gets the #GDataQuery:updated-min property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_updated_min(): number
    /**
     * Changes the state of the #GDataQuery such that when gdata_query_get_query_uri() is next called, it will build the
     * query URI for the next page in the result set.
     * 
     * Ideally, the URI of the next page is retrieved from a feed automatically when gdata_service_query() is called, but
     * gdata_query_next_page() will fall back to using #GDataQuery:start-index to emulate true pagination if this fails.
     * 
     * You <emphasis>should not</emphasis> implement pagination manually using #GDataQuery:start-index.
     */
    next_page(): void
    /**
     * Changes the state of the #GDataQuery such that when gdata_query_get_query_uri() is next called, it will build the
     * query URI for the previous page in the result set.
     * 
     * See the documentation for gdata_query_next_page() for an explanation of how query URIs from the feeds are used to this end.
     */
    previous_page(): boolean
    /**
     * Sets the #GDataQuery:author property of the #GDataQuery to the new author string, `author`.
     * 
     * Set `author` to %NULL to unset the property in the query URI.
     * @param author the new author string, or %NULL
     */
    set_author(author: string | null): void
    /**
     * Sets the #GDataQuery:categories property of the #GDataQuery to the new category string, `categories`.
     * 
     * Set `categories` to %NULL to unset the property in the query URI.
     * @param categories the new category string, or %NULL
     */
    set_categories(categories: string | null): void
    /**
     * Sets the #GDataQuery:etag property of the #GDataQuery to the new ETag, `etag`.
     * 
     * Set `etag` to %NULL to not check against the server-side ETag.
     * @param etag the new ETag, or %NULL
     */
    set_etag(etag: string | null): void
    /**
     * Sets the #GDataQuery:is-strict property of the #GDataQuery to the new strict value, `is_strict`.
     * @param is_strict the new strict value
     */
    set_is_strict(is_strict: boolean): void
    /**
     * Sets the #GDataQuery:max-results property of the #GDataQuery to the new maximum results value, `max_results`.
     * 
     * Set `max_results` to <code class="literal">0</code> to unset the property in the query URI.
     * @param max_results the new maximum results value, or <code class="literal">0</code>
     */
    set_max_results(max_results: number): void
    /**
     * Sets the #GDataQuery:published-max property of the #GDataQuery to the new maximum publish time, `published_max`.
     * 
     * Set `published_max` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param published_max the new maximum publish time, or <code class="literal">-1</code>
     */
    set_published_max(published_max: number): void
    /**
     * Sets the #GDataQuery:published-min property of the #GDataQuery to the new minimum publish time, `published_min`.
     * 
     * Set `published_min` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param published_min the new minimum publish time, or <code class="literal">-1</code>
     */
    set_published_min(published_min: number): void
    /**
     * Sets the #GDataQuery:q property of the #GDataQuery to the new query string, `q`.
     * 
     * Set `q` to %NULL to unset the property in the query URI.
     * @param q a new query string, or %NULL
     */
    set_q(q: string | null): void
    /**
     * Sets the #GDataQuery:start-index property of the #GDataQuery to the new one-based start index, `start_index`.
     * 
     * Set `start_index` to <code class="literal">0</code> to unset the property in the query URI.
     * @param start_index the new start index, or <code class="literal">0</code>
     */
    set_start_index(start_index: number): void
    /**
     * Sets the #GDataQuery:updated-max property of the #GDataQuery to the new maximum update time, `updated_max`.
     * 
     * Set `updated_max` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param updated_max the new maximum update time, or <code class="literal">-1</code>
     */
    set_updated_max(updated_max: number): void
    /**
     * Sets the #GDataQuery:updated-min property of the #GDataQuery to the new minimum update time, `updated_min`.
     * 
     * Set `updated_min` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param updated_min the new minimum update time, or <code class="literal">-1</code>
     */
    set_updated_min(updated_min: number): void

    // Own virtual methods of GData-0.0.GData.Query

    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void

    // Class property signals of GData-0.0.GData.Query

    connect(sigName: "notify::author", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataQuery structure are private and should never be accessed directly.
 * @class 
 */
class Query extends GObject.Object {

    // Own properties of GData-0.0.GData.Query

    static name: string
    static $gtype: GObject.GType<Query>

    // Constructors of GData-0.0.GData.Query

    constructor(config?: Query_ConstructProps) 
    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q,` and the limits `start_index` and `max_results`
     * applied.
     * @constructor 
     * @param q a query string, or %NULL
     * @param start_index a one-based start index for the results, or <code class="literal">0</code>
     * @param max_results the maximum number of results to return, or <code class="literal">0</code>
     */
    static new_with_limits(q: string | null, start_index: number, max_results: number): Query
    _init(config?: Query_ConstructProps): void
}

interface Service_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GData-0.0.GData.Service

    /**
     * An object which implements #GDataAuthorizer. This should have previously been authenticated authorized against this service type (and
     * potentially other service types). The service will use the authorizer to add an authorization token to each request it performs.
     * 
     * Your application should call methods on the #GDataAuthorizer object itself in order to authenticate with the Google accounts service and
     * authorize against this service type. See the documentation for the particular #GDataAuthorizer implementation being used for more details.
     * 
     * The authorizer for a service can be changed at runtime for a different #GDataAuthorizer object or %NULL without affecting ongoing requests
     * and operations.
     * 
     * Note that it's only necessary to set an authorizer on the service if your application is going to make requests of the service which
     * require authorization. For example, listing the current most popular videos on YouTube does not require authorization, but uploading a
     * video to YouTube does. It's an unnecessary overhead to require the user to authorize against a service when not strictly required.
     */
    authorizer?: Authorizer | null
    /**
     * The locale to use for network requests, in Unix locale format. (e.g. "en_GB", "cs", "de_DE".) Use %NULL for the default "C" locale
     * (typically "en_US").
     * 
     * Typically, this locale will be used by the server-side software to localise results, such as by translating category names, or by choosing
     * geographically relevant search results. This will vary from service to service.
     * 
     * The server-side behaviour is undefined if it doesn't support a given locale.
     */
    locale?: string | null
    /**
     * The #GProxyResolver used to determine a proxy URI.
     */
    proxy_resolver?: Gio.ProxyResolver | null
    /**
     * A timeout, in seconds, for network operations. If the timeout is exceeded, the operation will be cancelled and
     * %GDATA_SERVICE_ERROR_NETWORK_ERROR will be returned.
     * 
     * If the timeout is <code class="literal">0</code>, operations will never time out.
     * 
     * Note that if a #GDataAuthorizer is being used with this #GDataService, the authorizer might also need its timeout setting.
     */
    timeout?: number | null
}

interface Service {

    // Own properties of GData-0.0.GData.Service

    /**
     * An object which implements #GDataAuthorizer. This should have previously been authenticated authorized against this service type (and
     * potentially other service types). The service will use the authorizer to add an authorization token to each request it performs.
     * 
     * Your application should call methods on the #GDataAuthorizer object itself in order to authenticate with the Google accounts service and
     * authorize against this service type. See the documentation for the particular #GDataAuthorizer implementation being used for more details.
     * 
     * The authorizer for a service can be changed at runtime for a different #GDataAuthorizer object or %NULL without affecting ongoing requests
     * and operations.
     * 
     * Note that it's only necessary to set an authorizer on the service if your application is going to make requests of the service which
     * require authorization. For example, listing the current most popular videos on YouTube does not require authorization, but uploading a
     * video to YouTube does. It's an unnecessary overhead to require the user to authorize against a service when not strictly required.
     */
    authorizer: Authorizer
    /**
     * The locale to use for network requests, in Unix locale format. (e.g. "en_GB", "cs", "de_DE".) Use %NULL for the default "C" locale
     * (typically "en_US").
     * 
     * Typically, this locale will be used by the server-side software to localise results, such as by translating category names, or by choosing
     * geographically relevant search results. This will vary from service to service.
     * 
     * The server-side behaviour is undefined if it doesn't support a given locale.
     */
    locale: string
    /**
     * The #GProxyResolver used to determine a proxy URI.
     */
    proxy_resolver: Gio.ProxyResolver
    /**
     * A timeout, in seconds, for network operations. If the timeout is exceeded, the operation will be cancelled and
     * %GDATA_SERVICE_ERROR_NETWORK_ERROR will be returned.
     * 
     * If the timeout is <code class="literal">0</code>, operations will never time out.
     * 
     * Note that if a #GDataAuthorizer is being used with this #GDataService, the authorizer might also need its timeout setting.
     */
    timeout: number

    // Own fields of GData-0.0.GData.Service

    parent: GObject.Object
    priv: ServicePrivate

    // Owm methods of GData-0.0.GData.Service

    /**
     * Deletes `entry` from the server. For more information about the concept of deleting entries, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/basics.html#DeletingEntry">online documentation</ulink> for the GData
     * protocol.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
     * If the operation was cancelled before or during network activity, the error %G_IO_ERROR_CANCELLED will be returned. Cancellation has no effect
     * after network activity has finished, however, and the deletion will return successfully (or return an error sent by the server) if it is first
     * cancelled after network activity has finished. See the <link linkend="cancellable-support">overview of cancellation</link> for
     * more details.
     * 
     * If there is an error deleting the entry, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned. Currently, subclasses
     * <emphasis>cannot</emphasis> cannot override this or provide more specific errors.
     * @param domain the #GDataAuthorizationDomain the deletion falls under, or %NULL
     * @param entry the #GDataEntry to delete
     * @param cancellable optional #GCancellable object, or %NULL
     */
    delete_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable: Gio.Cancellable | null): boolean
    /**
     * Deletes `entry` from the server. `self` and `entry` are both reffed when this function is called,
     * so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_service_delete_entry(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_delete_entry_finish()
     * to get the results of the operation.
     * @param domain the #GDataAuthorizationDomain the deletion falls under, or %NULL
     * @param entry the #GDataEntry to delete
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when deletion is finished, or %NULL
     */
    delete_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous entry deletion operation started with gdata_service_delete_entry_async().
     * @param async_result a #GAsyncResult
     */
    delete_entry_finish(async_result: Gio.AsyncResult): boolean
    /**
     * Gets the #GDataAuthorizer object currently in use by the service. See the documentation for #GDataService:authorizer for more details.
     */
    get_authorizer(): Authorizer
    /**
     * Returns the locale currently being used for network requests, or %NULL if the locale is the default.
     */
    get_locale(): string
    /**
     * Gets the #GProxyResolver on the #GDataService's #SoupSession.
     */
    get_proxy_resolver(): Gio.ProxyResolver | null
    /**
     * Gets the #GDataService:timeout property; the network timeout, in seconds.
     */
    get_timeout(): number
    /**
     * Inserts `entry` by uploading it to the online service at `upload_uri`. For more information about the concept of inserting entries, see
     * the <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/basics.html#InsertingEntry">online documentation</ulink> for the GData
     * protocol.
     * 
     * The service will return an updated version of the entry, which is the return value of this function on success.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
     * If the operation was cancelled before or during network activity, the error %G_IO_ERROR_CANCELLED will be returned. Cancellation has no effect
     * after network activity has finished, however, and the insertion will return successfully (or return an error sent by the server) if it is first
     * cancelled after network activity has finished. See the <link linkend="cancellable-support">overview of cancellation</link> for
     * more details.
     * 
     * If the entry is marked as already having been inserted a %GDATA_SERVICE_ERROR_ENTRY_ALREADY_INSERTED error will be returned immediately
     * (there will be no network requests).
     * 
     * If there is an error inserting the entry, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned. Currently, subclasses
     * <emphasis>cannot</emphasis> cannot override this or provide more specific errors.
     * @param domain the #GDataAuthorizationDomain the insertion operation falls under, or %NULL
     * @param upload_uri the URI to which the upload should be sent
     * @param entry the #GDataEntry to insert
     * @param cancellable optional #GCancellable object, or %NULL
     */
    insert_entry(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable: Gio.Cancellable | null): Entry
    /**
     * Inserts `entry` by uploading it to the online service at `upload_uri`. `self,` `upload_uri` and
     * `entry` are all reffed/copied when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see gdata_service_insert_entry(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_insert_entry_finish()
     * to get the results of the operation.
     * @param domain the #GDataAuthorizationDomain the insertion operation falls under, or %NULL
     * @param upload_uri the URI to which the upload should be sent
     * @param entry the #GDataEntry to insert
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished, or %NULL
     */
    insert_entry_async(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous entry insertion operation started with gdata_service_insert_entry_async().
     * @param async_result a #GAsyncResult
     */
    insert_entry_finish(async_result: Gio.AsyncResult): Entry
    /**
     * Determines whether the service is authorized for all the #GDataAuthorizationDomains it belongs to (as returned by
     * gdata_service_get_authorization_domains()). If the service's #GDataService:authorizer is %NULL, %FALSE is always returned.
     * 
     * This is basically a convenience method for checking that the service's #GDataAuthorizer is authorized for all the service's
     * #GDataAuthorizationDomains.
     */
    is_authorized(): boolean
    /**
     * Queries the service's `feed_uri` feed to build a #GDataFeed.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
     * If the operation was cancelled before or during network activity, the error %G_IO_ERROR_CANCELLED will be returned. Cancellation has no effect
     * after network activity has finished, however, and the query will return successfully (or return an error sent by the server) if it is first
     * cancelled after network activity has finished. See the <link linkend="cancellable-support">overview of cancellation</link> for
     * more details.
     * 
     * A %GDATA_SERVICE_ERROR_PROTOCOL_ERROR will be returned if the server indicates there is a problem with the query, but subclasses may override
     * this and return their own errors. See their documentation for more details.
     * 
     * For each entry in the response feed, `progress_callback` will be called in the main thread. If there was an error parsing the XML response,
     * a #GDataParserError will be returned.
     * 
     * If the query is successful and the feed supports pagination, `query` will be updated with the pagination URIs, and the next or previous page
     * can then be loaded by calling gdata_query_next_page() or gdata_query_previous_page() before running the query again.
     * 
     * If the #GDataQuery's ETag is set and it finds a match on the server, %NULL will be returned, but `error` will remain unset. Otherwise,
     * `query'`s ETag will be updated with the ETag from the returned feed, if available.
     * @param domain the #GDataAuthorizationDomain the query falls under, or %NULL
     * @param feed_uri the feed URI to query, including the host name and protocol
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param entry_type a #GType for the #GDataEntrys to build from the XML
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.GType, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed
    /**
     * Queries the service's `feed_uri` feed to build a #GDataFeed. `self,` `feed_uri` and
     * `query` are all reffed/copied when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see gdata_service_query(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_query_finish()
     * to get the results of the operation.
     * @param domain the #GDataAuthorizationDomain the query falls under, or %NULL
     * @param feed_uri the feed URI to query, including the host name and protocol
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param entry_type a #GType for the #GDataEntrys to build from the XML
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    query_async(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.GType, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous query operation started with gdata_service_query_async().
     * @param async_result a #GAsyncResult
     */
    query_finish(async_result: Gio.AsyncResult): Feed
    /**
     * Retrieves information about the single entry with the given `entry_id`. `entry_id` should be as returned by
     * gdata_entry_get_id().
     * 
     * Parameters and errors are as for gdata_service_query(). Most of the properties of `query` aren't relevant, and
     * will cause a server-side error if used. The most useful property to use is #GDataQuery:etag, which will cause the
     * server to not return anything if the entry hasn't been modified since it was given the specified ETag; thus saving
     * bandwidth. If the server does not return anything for this reason, gdata_service_query_single_entry() will return
     * %NULL, but will not set an error in `error`.
     * @param domain the #GDataAuthorizationDomain the query falls under, or %NULL
     * @param entry_id the entry ID of the desired entry
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param entry_type a #GType for the #GDataEntry to build from the XML
     * @param cancellable a #GCancellable, or %NULL
     */
    query_single_entry(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.GType, cancellable: Gio.Cancellable | null): Entry
    /**
     * Retrieves information about the single entry with the given `entry_id`. `entry_id` should be as returned by
     * gdata_entry_get_id(). `self,` `query` and `entry_id` are reffed/copied when this
     * function is called, so can safely be freed after this function returns.
     * 
     * For more details, see gdata_service_query_single_entry(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_query_single_entry_finish()
     * to get the results of the operation.
     * @param domain the #GDataAuthorizationDomain the query falls under, or %NULL
     * @param entry_id the entry ID of the desired entry
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param entry_type a #GType for the #GDataEntry to build from the XML
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    query_single_entry_async(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.GType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous query operation for a single entry, as started with gdata_service_query_single_entry_async().
     * @param async_result a #GAsyncResult
     */
    query_single_entry_finish(async_result: Gio.AsyncResult): Entry
    /**
     * Sets #GDataService:authorizer to `authorizer`. This may be %NULL if the service will only make requests in future which don't require authorization.
     * See the documentation for #GDataService:authorizer for more information.
     * @param authorizer a new authorizer object for the service, or %NULL
     */
    set_authorizer(authorizer: Authorizer): void
    /**
     * Set the locale used for network requests to `locale,` given in standard Unix locale format. See #GDataService:locale for more details.
     * 
     * Note that while it's possible to change the locale after sending network requests, it is unsupported, as the server-side software may behave
     * unexpectedly. The only supported use of this function is after creation of a service, but before any network requests are made.
     * @param locale the new locale in Unix locale format, or %NULL for the default locale
     */
    set_locale(locale: string | null): void
    /**
     * Sets the #GProxyResolver on the #SoupSession used internally by the given #GDataService.
     * @param proxy_resolver a #GProxyResolver, or %NULL
     */
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver | null): void
    /**
     * Sets the #GDataService:timeout property; the network timeout, in seconds.
     * 
     * If `timeout` is <code class="literal">0</code>, network operations will never time out.
     * 
     * Note that if a #GDataAuthorizer is being used with this #GDataService, the authorizer might also need its timeout setting.
     * @param timeout the timeout, or <code class="literal">0</code>
     */
    set_timeout(timeout: number): void
    /**
     * Updates `entry` by PUTting it to its <literal>edit</literal> link's URI. For more information about the concept of updating entries, see
     * the <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/basics.html#UpdatingEntry">online documentation</ulink> for the GData
     * protocol.
     * 
     * The service will return an updated version of the entry, which is the return value of this function on success.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
     * If the operation was cancelled before or during network activity, the error %G_IO_ERROR_CANCELLED will be returned. Cancellation has no effect
     * after network activity has finished, however, and the update will return successfully (or return an error sent by the server) if it is first
     * cancelled after network activity has finished. See the <link linkend="cancellable-support">overview of cancellation</link> for
     * more details.
     * 
     * If there is an error updating the entry, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned. Currently, subclasses
     * <emphasis>cannot</emphasis> cannot override this or provide more specific errors.
     * @param domain the #GDataAuthorizationDomain the update operation falls under, or %NULL
     * @param entry the #GDataEntry to update
     * @param cancellable optional #GCancellable object, or %NULL
     */
    update_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable: Gio.Cancellable | null): Entry
    /**
     * Updates `entry` by PUTting it to its <literal>edit</literal> link's URI. `self` and
     * `entry` are both reffed when this function is called, so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_service_update_entry(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_update_entry_finish()
     * to get the results of the operation.
     * @param domain the #GDataAuthorizationDomain the update operation falls under, or %NULL
     * @param entry the #GDataEntry to update
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the update is finished, or %NULL
     */
    update_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous entry update operation started with gdata_service_update_entry_async().
     * @param async_result a #GAsyncResult
     */
    update_entry_finish(async_result: Gio.AsyncResult): Entry

    // Own virtual methods of GData-0.0.GData.Service

    vfunc_append_query_headers(domain: AuthorizationDomain, message: Soup.Message): void
    vfunc_parse_error_response(operation_type: OperationType, status: number, reason_phrase: string, response_body: string, length: number): void

    // Class property signals of GData-0.0.GData.Service

    connect(sigName: "notify::authorizer", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataService structure are private and should never be accessed directly.
 * @interface 
 */
class Service extends GObject.Object {

    // Own properties of GData-0.0.GData.Service

    static name: string
    static $gtype: GObject.GType<Service>

    // Constructors of GData-0.0.GData.Service

    constructor(config?: Service_ConstructProps) 
    _init(config?: Service_ConstructProps): void
    /**
     * Retrieves the full list of #GDataAuthorizationDomains which relate to the specified `service_type`. All the
     * #GDataAuthorizationDomains are unique and interned, so can be compared with other domains by simple pointer comparison.
     * 
     * Note that in addition to this method, #GDataService subclasses may expose some or all of their authorization domains individually by means of
     * individual accessor functions.
     * @param service_type the #GType of the #GDataService subclass to retrieve the authorization domains for
     */
    static get_authorization_domains(service_type: GObject.GType): AuthorizationDomain[]
}

interface TasksQuery_ConstructProps extends Query_ConstructProps {

    // Own constructor properties of GData-0.0.GData.TasksQuery

    /**
     * Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional.
     * The default is not to filter by completion date.
     */
    completed_max?: number | null
    /**
     * Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional.
     * The default is not to filter by completion date.
     */
    completed_min?: number | null
    /**
     * Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional.
     * The default is not to filter by completion date.
     */
    due_max?: number | null
    /**
     * Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional.
     * The default is not to filter by completion date.
     */
    due_min?: number | null
    /**
     * Flag indicating whether completed tasks are returned in the result. Optional. The default is %FALSE.
     */
    show_completed?: boolean | null
    /**
     * Flag indicating whether deleted tasks are returned in the result. Optional. The default is %FALSE.
     */
    show_deleted?: boolean | null
    /**
     * Flag indicating whether hidden tasks are returned in the result. Optional. The default is %FALSE.
     */
    show_hidden?: boolean | null
}

interface TasksQuery {

    // Own properties of GData-0.0.GData.TasksQuery

    /**
     * Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional.
     * The default is not to filter by completion date.
     */
    completed_max: number
    /**
     * Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional.
     * The default is not to filter by completion date.
     */
    completed_min: number
    /**
     * Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional.
     * The default is not to filter by completion date.
     */
    due_max: number
    /**
     * Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional.
     * The default is not to filter by completion date.
     */
    due_min: number
    /**
     * Flag indicating whether completed tasks are returned in the result. Optional. The default is %FALSE.
     */
    show_completed: boolean
    /**
     * Flag indicating whether deleted tasks are returned in the result. Optional. The default is %FALSE.
     */
    show_deleted: boolean
    /**
     * Flag indicating whether hidden tasks are returned in the result. Optional. The default is %FALSE.
     */
    show_hidden: boolean

    // Own fields of GData-0.0.GData.TasksQuery

    parent: Query
    priv: TasksQueryPrivate

    // Owm methods of GData-0.0.GData.TasksQuery

    /**
     * Gets the #GDataTasksQuery:completed-max property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_completed_max(): number
    /**
     * Gets the #GDataTasksQuery:completed-min property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_completed_min(): number
    /**
     * Gets the #GDataTasksQuery:due-max property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_due_max(): number
    /**
     * Gets the #GDataTasksQuery:due-min property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_due_min(): number
    /**
     * Gets the #GDataTasksQuery:show-completed property.
     */
    get_show_completed(): boolean
    /**
     * Gets the #GDataTasksQuery:show-deleted property.
     */
    get_show_deleted(): boolean
    /**
     * Gets the #GDataTasksQuery:show-hidden property.
     */
    get_show_hidden(): boolean
    /**
     * Sets the #GDataTasksQuery:completed-max property of the #GDataTasksQuery
     * to the new time/date, `completed_max`.
     * 
     * Set `completed_max` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param completed_max upper bound for a task's completion date by UNIX timestamp, or  <code class="literal">-1</code>
     */
    set_completed_max(completed_max: number): void
    /**
     * Sets the #GDataTasksQuery:completed-min property of the #GDataTasksQuery
     * to the new time/date, `completed_min`.
     * 
     * Set `completed_min` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param completed_min lower bound for a task's completion date by UNIX timestamp, or  <code class="literal">-1</code>
     */
    set_completed_min(completed_min: number): void
    /**
     * Sets the #GDataTasksQuery:due-max property of the #GDataTasksQuery
     * to the new time/date, `due_max`.
     * 
     * Set `due_max` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param due_max upper bound for a task's due date by UNIX timestamp, or  <code class="literal">-1</code>
     */
    set_due_max(due_max: number): void
    /**
     * Sets the #GDataTasksQuery:due-min property of the #GDataTasksQuery
     * to the new time/date, `due_min`.
     * 
     * Set `due_min` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param due_min lower bound for a task's due date by UNIX timestamp, or  <code class="literal">-1</code>
     */
    set_due_min(due_min: number): void
    /**
     * Sets the #GDataTasksQuery:show-completed property of the #GDataTasksQuery.
     * @param show_completed %TRUE to show completed tasks, %FALSE otherwise
     */
    set_show_completed(show_completed: boolean): void
    /**
     * Sets the #GDataTasksQuery:show-deleted property of the #GDataTasksQuery.
     * @param show_deleted %TRUE to show deleted tasks, %FALSE otherwise
     */
    set_show_deleted(show_deleted: boolean): void
    /**
     * Sets the #GDataTasksQuery:show-hidden property of the #GDataTasksQuery.
     * @param show_hidden %TRUE to show hidden tasks, %FALSE otherwise
     */
    set_show_hidden(show_hidden: boolean): void

    // Class property signals of GData-0.0.GData.TasksQuery

    connect(sigName: "notify::completed-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completed-max", ...args: any[]): void
    connect(sigName: "notify::completed-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completed-min", ...args: any[]): void
    connect(sigName: "notify::due-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::due-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::due-max", ...args: any[]): void
    connect(sigName: "notify::due-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::due-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::due-min", ...args: any[]): void
    connect(sigName: "notify::show-completed", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-completed", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-completed", ...args: any[]): void
    connect(sigName: "notify::show-deleted", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-deleted", ...args: any[]): void
    connect(sigName: "notify::show-hidden", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-hidden", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-hidden", ...args: any[]): void
    connect(sigName: "notify::author", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataTasksQuery structure are private and should never be accessed directly.
 * @class 
 */
class TasksQuery extends Query {

    // Own properties of GData-0.0.GData.TasksQuery

    static name: string
    static $gtype: GObject.GType<TasksQuery>

    // Constructors of GData-0.0.GData.TasksQuery

    constructor(config?: TasksQuery_ConstructProps) 
    /**
     * Creates a new #GDataTasksQuery. `q` is unused and must be set to %NULL.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataTasksQuery. `q` is unused and must be set to %NULL.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): TasksQuery

    // Overloads of new

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    _init(config?: TasksQuery_ConstructProps): void
}

interface TasksService_ConstructProps extends Service_ConstructProps {
}

interface TasksService {

    // Own fields of GData-0.0.GData.TasksService

    parent: Service

    // Owm methods of GData-0.0.GData.TasksService

    /**
     * Delete `task` from online tasks service.
     * 
     * For more details, see gdata_service_delete_entry().
     * @param task the #GDataTasksTask to delete
     * @param cancellable optional #GCancellable object, or %NULL
     */
    delete_task(task: TasksTask, cancellable: Gio.Cancellable | null): boolean
    /**
     * Deletes `task` from online tasks service. `self` and `task` are both reffed when this function is called, so can safely be
     * unreffed after this function returns.
     * 
     * `callback` should call gdata_service_delete_entry_finish() to finish deleting task and to check for possible
     * errors.
     * 
     * For more details, see gdata_tasks_service_delete_task(), which is the synchronous version of this function, and
     * gdata_service_delete_entry_async(), which is the base asynchronous insertion function.
     * @param task #GDataTasksTask to delete
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    delete_task_async(task: TasksTask, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Delete `tasklist` from online tasks service.
     * 
     * For more details, see gdata_service_delete_entry().
     * @param tasklist the #GDataTasksTasklist to delete
     * @param cancellable optional #GCancellable object, or %NULL
     */
    delete_tasklist(tasklist: TasksTasklist, cancellable: Gio.Cancellable | null): boolean
    /**
     * Deletes `tasklist` from online tasks service. `self` and `tasklist` are both reffed when this function is called, so can safely be
     * unreffed after this function returns.
     * 
     * `callback` should call gdata_service_delete_entry_finish() to finish deleting tasklist and to check for possible
     * errors.
     * 
     * For more details, see gdata_tasks_service_delete_tasklist(), which is the synchronous version of this function, and
     * gdata_service_delete_entry_async(), which is the base asynchronous insertion function.
     * @param tasklist #GDataTasksTasklist to delete
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    delete_tasklist_async(tasklist: TasksTasklist, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Inserts `task` by uploading it to the online tasks service into tasklist `tasklist`. It is safe to unref `tasklist` after function returns.
     * 
     * For more details, see gdata_service_insert_entry().
     * @param task the #GDataTasksTask to insert
     * @param tasklist #GDataTasksTasklist to insert into
     * @param cancellable optional #GCancellable object, or %NULL
     */
    insert_task(task: TasksTask, tasklist: TasksTasklist, cancellable: Gio.Cancellable | null): TasksTask
    /**
     * Inserts `task` by uploading it to the online tasks service into tasklist `tasklist`. `self,` `task` and `tasklist` are all reffed when this function is called, so can safely be
     * unreffed after this function returns.
     * 
     * `callback` should call gdata_service_insert_entry_finish() to obtain a #GDataTasksTask representing the inserted task and to check for possible
     * errors.
     * 
     * For more details, see gdata_tasks_service_insert_task(), which is the synchronous version of this function, and
     * gdata_service_insert_entry_async(), which is the base asynchronous insertion function.
     * @param task the #GDataTasksTask to insert
     * @param tasklist #GDataTasksTasklist to insert into
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    insert_task_async(task: TasksTask, tasklist: TasksTasklist, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Inserts `tasklist` by uploading it to the online tasks service.
     * 
     * For more details, see gdata_service_insert_entry().
     * @param tasklist #GDataTasksTasklist to insert
     * @param cancellable optional #GCancellable object, or %NULL
     */
    insert_tasklist(tasklist: TasksTasklist, cancellable: Gio.Cancellable | null): TasksTasklist
    /**
     * Inserts `tasklist` by uploading it to the online tasks service. `self` and `tasklist` are both reffed when this function is called, so can safely be
     * unreffed after this function returns.
     * 
     * `callback` should call gdata_service_insert_entry_finish() to obtain a #GDataTasksTasklist representing the inserted tasklist and to check for possible
     * errors.
     * 
     * For more details, see gdata_tasks_service_insert_tasklist(), which is the synchronous version of this function, and
     * gdata_service_insert_entry_async(), which is the base asynchronous insertion function.
     * @param tasklist #GDataTasksTasklist to insert
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    insert_tasklist_async(tasklist: TasksTasklist, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of all tasklists from the authenticated account which match the given
     * `query`. It will return all tasklists the user has read access to.
     * 
     * For more details, see gdata_service_query().
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query_all_tasklists(query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed
    /**
     * Queries the service to return a list of all tasklists from the authenticated account which match the given
     * `query`. `self` and `query` are all reffed when this function is called, so can safely be unreffed after
     * this function returns.
     * 
     * For more details, see gdata_tasks_service_query_all_tasklists(), which is the synchronous version of
     * this function, and gdata_service_query_async(), which is the base asynchronous query function.
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    query_all_tasklists_async(query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of tasks in the given `tasklist,` which match `query`.
     * 
     * For more details, see gdata_service_query().
     * @param tasklist a #GDataTasksTasklist
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query_tasks(tasklist: TasksTasklist, query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed
    /**
     * Queries the service to return a list of tasks in the given `tasklist,` which match `query`. `self,` `tasklist` and `query` are all reffed when this
     * function is called, so can safely be unreffed after this function returns.
     * 
     * Get the results of the query using gdata_service_query_finish() in the `callback`.
     * 
     * For more details, see gdata_tasks_service_query_tasks(), which is the synchronous version of this function, and gdata_service_query_async(),
     * which is the base asynchronous query function.
     * @param tasklist a #GDataTasksTasklist
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    query_tasks_async(tasklist: TasksTasklist, query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Update `task` in online tasks service.
     * 
     * For more details, see gdata_service_update_entry().
     * @param task the #GDataTasksTask to update
     * @param cancellable optional #GCancellable object, or %NULL
     */
    update_task(task: TasksTask, cancellable: Gio.Cancellable | null): TasksTask
    /**
     * Updates `task` to online tasks service. `self` and `task` are both reffed when this function is called, so can safely be
     * unreffed after this function returns.
     * 
     * `callback` should call gdata_service_update_entry_finish() to obtain a #GDataTasksTask representing the updated task and to check for possible
     * errors.
     * 
     * For more details, see gdata_tasks_service_update_task(), which is the synchronous version of this function, and
     * gdata_service_update_entry_async(), which is the base asynchronous insertion function.
     * @param task #GDataTasksTask to update
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    update_task_async(task: TasksTask, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Update `tasklist` in online tasks service.
     * 
     * For more details, see gdata_service_update_entry().
     * @param tasklist the #GDataTasksTasklist to update
     * @param cancellable optional #GCancellable object, or %NULL
     */
    update_tasklist(tasklist: TasksTasklist, cancellable: Gio.Cancellable | null): TasksTasklist
    /**
     * Updates `tasklist` from online tasks service. `self` and `tasklist` are both reffed when this function is called, so can safely be
     * unreffed after this function returns.
     * 
     * `callback` should call gdata_service_update_entry_finish() to obtain a #GDataTasksTasklist representing the updated task and to check for possible
     * errors.
     * 
     * For more details, see gdata_tasks_service_update_tasklist(), which is the synchronous version of this function, and
     * gdata_service_update_entry_async(), which is the base asynchronous insertion function.
     * @param tasklist #GDataTasksTasklist to update
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    update_tasklist_async(tasklist: TasksTasklist, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Class property signals of GData-0.0.GData.TasksService

    connect(sigName: "notify::authorizer", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataTasksService structure are private and should never be accessed directly.
 * @class 
 */
class TasksService extends Service {

    // Own properties of GData-0.0.GData.TasksService

    static name: string
    static $gtype: GObject.GType<TasksService>

    // Constructors of GData-0.0.GData.TasksService

    constructor(config?: TasksService_ConstructProps) 
    /**
     * Creates a new #GDataTasksService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    constructor(authorizer: Authorizer | null) 
    /**
     * Creates a new #GDataTasksService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    static new(authorizer: Authorizer | null): TasksService
    _init(config?: TasksService_ConstructProps): void
    /**
     * The primary #GDataAuthorizationDomain for interacting with Google Tasks. This will not normally need to be used, as it's used internally
     * by the #GDataTasksService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
     * does not support natively, then this domain may be needed to authorize the requests.
     * 
     * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
     */
    static get_primary_authorization_domain(): AuthorizationDomain
}

interface TasksTask_ConstructProps extends Entry_ConstructProps {

    // Own constructor properties of GData-0.0.GData.TasksTask

    /**
     * Completion date of the task (as a RFC 3339 timestamp; seconds since
     * the UNIX epoch).
     * 
     * This field is <code class="literal">-1</code> if the task has not
     * been completed.
     */
    completed?: number | null
    /**
     * Due date of the task (as a RFC 3339 timestamp; seconds since the UNIX
     * epoch).
     * 
     * This field is <code class="literal">-1</code> if the task has no due
     * date assigned.
     */
    due?: number | null
    /**
     * Flag indicating whether the task has been deleted. The default is %FALSE.
     */
    is_deleted?: boolean | null
    /**
     * This is where the description of what needs to be done in the task is stored.
     */
    notes?: string | null
    /**
     * Parent task identifier. This field is omitted if it is a top-level task.
     * 
     * Since 0.17.10, this property is writable.
     */
    parent?: string | null
    /**
     * String indicating the position of the task among its sibling tasks under the same parent task
     * or at the top level. If this string is greater than another task's corresponding position string
     * according to lexicographical ordering, the task is positioned after the other task under the same
     * parent task (or at the top level).
     * 
     * Since 0.17.10, this property is writable.
     */
    position?: string | null
    /**
     * Status of the task. This is either %GDATA_TASKS_STATUS_NEEDS_ACTION
     * or %GDATA_TASKS_STATUS_COMPLETED.
     */
    status?: string | null
}

interface TasksTask {

    // Own properties of GData-0.0.GData.TasksTask

    /**
     * Completion date of the task (as a RFC 3339 timestamp; seconds since
     * the UNIX epoch).
     * 
     * This field is <code class="literal">-1</code> if the task has not
     * been completed.
     */
    completed: number
    /**
     * Due date of the task (as a RFC 3339 timestamp; seconds since the UNIX
     * epoch).
     * 
     * This field is <code class="literal">-1</code> if the task has no due
     * date assigned.
     */
    due: number
    /**
     * Flag indicating whether the task has been deleted. The default is %FALSE.
     */
    is_deleted: boolean
    /**
     * Flag indicating whether the task is hidden. This is the case if the task
     * had been marked completed when the task list was last cleared.
     * The default is %FALSE. This field is read-only.
     */
    readonly is_hidden: boolean
    /**
     * This is where the description of what needs to be done in the task is stored.
     */
    notes: string
    /**
     * String indicating the position of the task among its sibling tasks under the same parent task
     * or at the top level. If this string is greater than another task's corresponding position string
     * according to lexicographical ordering, the task is positioned after the other task under the same
     * parent task (or at the top level).
     * 
     * Since 0.17.10, this property is writable.
     */
    position: string
    /**
     * Status of the task. This is either %GDATA_TASKS_STATUS_NEEDS_ACTION
     * or %GDATA_TASKS_STATUS_COMPLETED.
     */
    status: string

    // Own fields of GData-0.0.GData.TasksTask

    parent: Entry
    priv: TasksTaskPrivate

    // Owm methods of GData-0.0.GData.TasksTask

    /**
     * Gets the #GDataTasksTask:completed property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_completed(): number
    /**
     * Gets the #GDataTasksTask:due property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_due(): number
    /**
     * Gets the #GDataTasksTask:notes property.
     */
    get_notes(): string | null
    /**
     * Gets the #GDataTasksTask:parent property.
     */
    get_parent(): string | null
    /**
     * Gets the #GDataTasksTask:position property.
     */
    get_position(): string | null
    /**
     * Gets the #GDataTasksTask:status property.
     */
    get_status(): string | null
    /**
     * Sets the #GDataTasksTask:completed property of the #GDataTasksTask to the new completion time of the task, `completed`.
     * 
     * Set `completed` to <code class="literal">-1</code> to unset the property in the completion time of the task
     * @param completed completion time of the task, or <code class="literal">-1</code>
     */
    set_completed(completed: number): void
    /**
     * Sets the #GDataTasksTask:due property of the #GDataTasksTask to the new due time of the task, `due`.
     * 
     * Set `due` to <code class="literal">-1</code> to unset the property in the due time of the task
     * @param due due time of the task, or <code class="literal">-1</code>
     */
    set_due(due: number): void
    /**
     * Sets the #GDataTasksTask:is-deleted property to `deleted`.
     * @param deleted %TRUE if task is deleted, %FALSE otherwise
     */
    set_is_deleted(deleted: boolean): void
    /**
     * Sets the #GDataTasksTask:notes property to the new notes, `notes`.
     * 
     * Set `notes` to %NULL to unset the property in the task.
     * @param notes a new notes of the task, or %NULL
     */
    set_notes(notes: string | null): void
    /**
     * Sets the #GDataTasksTask:parent property.
     * @param parent parent of the task
     */
    set_parent(parent: string | null): void
    /**
     * Sets the #GDataTasksTask:position property.
     * @param position position of the task in the list
     */
    set_position(position: string): void
    /**
     * Sets the #GDataTasksTask:status property to the new status, `status`.
     * 
     * Set `status` to %NULL to unset the property in the task.
     * @param status a new status of the task, or %NULL
     */
    set_status(status: string | null): void

    // Class property signals of GData-0.0.GData.TasksTask

    connect(sigName: "notify::completed", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completed", ...args: any[]): void
    connect(sigName: "notify::due", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::due", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::due", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::is-hidden", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-hidden", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-hidden", ...args: any[]): void
    connect(sigName: "notify::notes", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::notes", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataTasksTask structure are private and should never be accessed directly.
 * @class 
 */
class TasksTask extends Entry {

    // Own properties of GData-0.0.GData.TasksTask

    static name: string
    static $gtype: GObject.GType<TasksTask>

    // Constructors of GData-0.0.GData.TasksTask

    constructor(config?: TasksTask_ConstructProps) 
    /**
     * Creates a new #GDataTasksTask with the given ID and default properties.
     * @constructor 
     * @param id the task's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataTasksTask with the given ID and default properties.
     * @constructor 
     * @param id the task's ID, or %NULL
     */
    static new(id: string | null): TasksTask

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: TasksTask_ConstructProps): void
}

interface TasksTasklist_ConstructProps extends Entry_ConstructProps {
}

interface TasksTasklist {

    // Conflicting properties

    priv: any

    // Own fields of GData-0.0.GData.TasksTasklist

    parent: Entry

    // Class property signals of GData-0.0.GData.TasksTasklist

    connect(sigName: "notify::content", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataTasksTasklist structure are private and should never be accessed directly.
 * @class 
 */
class TasksTasklist extends Entry {

    // Own properties of GData-0.0.GData.TasksTasklist

    static name: string
    static $gtype: GObject.GType<TasksTasklist>

    // Constructors of GData-0.0.GData.TasksTasklist

    constructor(config?: TasksTasklist_ConstructProps) 
    /**
     * Creates a new #GDataTasksTasklist with the given ID and default properties.
     * @constructor 
     * @param id the tasklist's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataTasksTasklist with the given ID and default properties.
     * @constructor 
     * @param id the tasklist's ID, or %NULL
     */
    static new(id: string | null): TasksTasklist

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: TasksTasklist_ConstructProps): void
}

interface UploadStream_ConstructProps extends Gio.OutputStream_ConstructProps {

    // Own constructor properties of GData-0.0.GData.UploadStream

    /**
     * The authorization domain for the upload, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be
     * authorized. This may be %NULL if authorization is not needed for the upload.
     */
    authorization_domain?: AuthorizationDomain | null
    /**
     * An optional cancellable used to cancel the entire upload operation. If a #GCancellable instance isn't provided for this property at
     * construction time (i.e. to gdata_upload_stream_new()), one will be created internally and can be retrieved using
     * gdata_upload_stream_get_cancellable() and used to cancel the upload operation with g_cancellable_cancel() just as if it was passed to
     * gdata_upload_stream_new().
     * 
     * If the upload operation is cancelled using this #GCancellable, any ongoing network activity will be stopped, and any pending or future calls
     * to #GOutputStream API on the #GDataUploadStream will return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed
     * to individual #GOutputStream operations will not cancel the upload operation proper if cancelled — they will merely cancel that API call.
     * The only way to cancel the upload operation completely is using #GDataUploadStream:cancellable.
     */
    cancellable?: Gio.Cancellable | null
    /**
     * The content length (in bytes) of the file being uploaded (i.e. as returned by g_file_info_get_size()). Note that this does not include the
     * length of the XML serialisation of #GDataUploadStream:entry, if set.
     * 
     * If this is <code class="literal">-1</code> the upload will be non-resumable; if it is non-negative, the upload will be resumable.
     */
    content_length?: number | null
    /**
     * The content type of the file being uploaded (i.e. as returned by g_file_info_get_content_type()).
     */
    content_type?: string | null
    /**
     * The entry used for metadata to upload.
     */
    entry?: Entry | null
    /**
     * The HTTP request method to use when uploading the file.
     */
    method?: string | null
    /**
     * The service which is used to authorize the upload, and to which the upload relates.
     */
    service?: Service | null
    /**
     * The slug of the file being uploaded. This is usually the display name of the file (i.e. as returned by g_file_info_get_display_name()).
     */
    slug?: string | null
    /**
     * The URI to upload the data and metadata to. This must be HTTPS.
     */
    upload_uri?: string | null
}

interface UploadStream {

    // Own properties of GData-0.0.GData.UploadStream

    /**
     * The authorization domain for the upload, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be
     * authorized. This may be %NULL if authorization is not needed for the upload.
     */
    readonly authorization_domain: AuthorizationDomain
    /**
     * An optional cancellable used to cancel the entire upload operation. If a #GCancellable instance isn't provided for this property at
     * construction time (i.e. to gdata_upload_stream_new()), one will be created internally and can be retrieved using
     * gdata_upload_stream_get_cancellable() and used to cancel the upload operation with g_cancellable_cancel() just as if it was passed to
     * gdata_upload_stream_new().
     * 
     * If the upload operation is cancelled using this #GCancellable, any ongoing network activity will be stopped, and any pending or future calls
     * to #GOutputStream API on the #GDataUploadStream will return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed
     * to individual #GOutputStream operations will not cancel the upload operation proper if cancelled — they will merely cancel that API call.
     * The only way to cancel the upload operation completely is using #GDataUploadStream:cancellable.
     */
    readonly cancellable: Gio.Cancellable
    /**
     * The content length (in bytes) of the file being uploaded (i.e. as returned by g_file_info_get_size()). Note that this does not include the
     * length of the XML serialisation of #GDataUploadStream:entry, if set.
     * 
     * If this is <code class="literal">-1</code> the upload will be non-resumable; if it is non-negative, the upload will be resumable.
     */
    readonly content_length: number
    /**
     * The content type of the file being uploaded (i.e. as returned by g_file_info_get_content_type()).
     */
    readonly content_type: string
    /**
     * The entry used for metadata to upload.
     */
    readonly entry: Entry
    /**
     * The HTTP request method to use when uploading the file.
     */
    readonly method: string
    /**
     * The service which is used to authorize the upload, and to which the upload relates.
     */
    readonly service: Service
    /**
     * The slug of the file being uploaded. This is usually the display name of the file (i.e. as returned by g_file_info_get_display_name()).
     */
    readonly slug: string
    /**
     * The URI to upload the data and metadata to. This must be HTTPS.
     */
    readonly upload_uri: string

    // Own fields of GData-0.0.GData.UploadStream

    parent: Gio.OutputStream
    priv: UploadStreamPrivate

    // Owm methods of GData-0.0.GData.UploadStream

    /**
     * Gets the authorization domain used to authorize the upload, as passed to gdata_upload_stream_new(). It may be %NULL if authorization is not
     * needed for the upload.
     */
    get_authorization_domain(): AuthorizationDomain | null
    /**
     * Gets the #GCancellable for the entire upload operation, #GDataUploadStream:cancellable.
     */
    get_cancellable(): Gio.Cancellable
    /**
     * Gets the size (in bytes) of the file being uploaded. This will be <code class="literal">-1</code> for a non-resumable upload, and zero or greater
     * for a resumable upload.
     */
    get_content_length(): number
    /**
     * Gets the content type of the file being uploaded.
     */
    get_content_type(): string
    /**
     * Gets the entry being used to upload metadata, if one was passed to gdata_upload_stream_new().
     */
    get_entry(): Entry
    /**
     * Gets the HTTP request method being used to upload the file, as passed to gdata_upload_stream_new().
     */
    get_method(): string
    /**
     * Returns the server's response to the upload operation performed by the #GDataUploadStream. If the operation
     * is still underway, or the server's response hasn't been received yet, %NULL is returned and `length` is set to <code class="literal">-1</code>.
     * 
     * If there was an error during the upload operation (but it is complete), %NULL is returned, and `length` is set to <code class="literal">0</code>.
     * 
     * While it is safe to call this function from any thread at any time during the network operation, the only way to guarantee that the response has
     * been set before calling this function is to have closed the #GDataUploadStream by calling g_output_stream_close() on it, without cancelling
     * the close operation. Once the stream has been closed, all network communication is guaranteed to have finished. Note that if a call to
     * g_output_stream_close() is cancelled, g_output_stream_is_closed() will immediately start to return %TRUE, even if the #GDataUploadStream is still
     * attempting to flush the network buffers asynchronously — consequently, gdata_upload_stream_get_response() may still return %NULL and a `length` of
     * <code class="literal">-1</code>. The only reliable way to determine if the stream has been fully closed in this situation is to check the results
     * of gdata_upload_stream_get_response(), rather than g_output_stream_is_closed().
     */
    get_response(): [ /* returnType */ string, /* length */ number ]
    /**
     * Gets the service used to authorize the upload, as passed to gdata_upload_stream_new().
     */
    get_service(): Service
    /**
     * Gets the slug (filename) of the file being uploaded.
     */
    get_slug(): string
    /**
     * Gets the URI the file is being uploaded to, as passed to gdata_upload_stream_new().
     */
    get_upload_uri(): string

    // Class property signals of GData-0.0.GData.UploadStream

    connect(sigName: "notify::authorization-domain", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorization-domain", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authorization-domain", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::content-length", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-length", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::entry", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entry", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entry", ...args: any[]): void
    connect(sigName: "notify::method", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::slug", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slug", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::slug", ...args: any[]): void
    connect(sigName: "notify::upload-uri", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upload-uri", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upload-uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataUploadStream structure are private and should never be accessed directly.
 * @class 
 */
class UploadStream extends Gio.OutputStream {

    // Own properties of GData-0.0.GData.UploadStream

    static name: string
    static $gtype: GObject.GType<UploadStream>

    // Constructors of GData-0.0.GData.UploadStream

    constructor(config?: UploadStream_ConstructProps) 
    /**
     * Creates a new #GDataUploadStream, allowing a file to be uploaded from a GData service using standard #GOutputStream API.
     * 
     * The HTTP method to use should be specified in `method,` and will typically be either %SOUP_METHOD_POST (for insertions) or %SOUP_METHOD_PUT
     * (for updates), according to the server and the `upload_uri`.
     * 
     * If `entry` is specified, it will be attached to the upload as the entry to which the file being uploaded belongs. Otherwise, just the file
     * written to the stream will be uploaded, and given a default entry as determined by the server.
     * 
     * `slug` and `content_type` must be specified before the upload begins, as they describe the file being streamed. `slug` is the filename given to the
     * file, which will typically be stored on the server and made available when downloading the file again. `content_type` must be the correct
     * content type for the file, and should be in the service's list of acceptable content types.
     * 
     * As well as the standard GIO errors, calls to the #GOutputStream API on a #GDataUploadStream can also return any relevant specific error from
     * #GDataServiceError, or %GDATA_SERVICE_ERROR_PROTOCOL_ERROR in the general case.
     * 
     * If a #GCancellable is provided in `cancellable,` the upload operation may be cancelled at any time from another thread using g_cancellable_cancel().
     * In this case, any ongoing network activity will be stopped, and any pending or future calls to #GOutputStream API on the #GDataUploadStream will
     * return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed to individual #GOutputStream operations will not cancel the
     * upload operation proper if cancelled — they will merely cancel that API call. The only way to cancel the upload operation completely is using this
     * `cancellable`.
     * 
     * Note that network communication won't begin until the first call to g_output_stream_write() on the #GDataUploadStream.
     * @constructor 
     * @param service a #GDataService
     * @param domain the #GDataAuthorizationDomain to authorize the upload, or %NULL
     * @param method the HTTP method to use
     * @param upload_uri the URI to upload, which must be HTTPS
     * @param entry the entry to upload as metadata, or %NULL
     * @param slug the file's slug (filename)
     * @param content_type the content type of the file being uploaded
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    constructor(service: Service, domain: AuthorizationDomain | null, method: string, upload_uri: string, entry: Entry | null, slug: string, content_type: string, cancellable: Gio.Cancellable | null) 
    /**
     * Creates a new #GDataUploadStream, allowing a file to be uploaded from a GData service using standard #GOutputStream API.
     * 
     * The HTTP method to use should be specified in `method,` and will typically be either %SOUP_METHOD_POST (for insertions) or %SOUP_METHOD_PUT
     * (for updates), according to the server and the `upload_uri`.
     * 
     * If `entry` is specified, it will be attached to the upload as the entry to which the file being uploaded belongs. Otherwise, just the file
     * written to the stream will be uploaded, and given a default entry as determined by the server.
     * 
     * `slug` and `content_type` must be specified before the upload begins, as they describe the file being streamed. `slug` is the filename given to the
     * file, which will typically be stored on the server and made available when downloading the file again. `content_type` must be the correct
     * content type for the file, and should be in the service's list of acceptable content types.
     * 
     * As well as the standard GIO errors, calls to the #GOutputStream API on a #GDataUploadStream can also return any relevant specific error from
     * #GDataServiceError, or %GDATA_SERVICE_ERROR_PROTOCOL_ERROR in the general case.
     * 
     * If a #GCancellable is provided in `cancellable,` the upload operation may be cancelled at any time from another thread using g_cancellable_cancel().
     * In this case, any ongoing network activity will be stopped, and any pending or future calls to #GOutputStream API on the #GDataUploadStream will
     * return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed to individual #GOutputStream operations will not cancel the
     * upload operation proper if cancelled — they will merely cancel that API call. The only way to cancel the upload operation completely is using this
     * `cancellable`.
     * 
     * Note that network communication won't begin until the first call to g_output_stream_write() on the #GDataUploadStream.
     * @constructor 
     * @param service a #GDataService
     * @param domain the #GDataAuthorizationDomain to authorize the upload, or %NULL
     * @param method the HTTP method to use
     * @param upload_uri the URI to upload, which must be HTTPS
     * @param entry the entry to upload as metadata, or %NULL
     * @param slug the file's slug (filename)
     * @param content_type the content type of the file being uploaded
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    static new(service: Service, domain: AuthorizationDomain | null, method: string, upload_uri: string, entry: Entry | null, slug: string, content_type: string, cancellable: Gio.Cancellable | null): UploadStream
    /**
     * Creates a new resumable #GDataUploadStream, allowing a file to be uploaded from a GData service using standard #GOutputStream API. The upload will
     * use GData's resumable upload API, so should be more reliable than a normal upload (especially if the file is large). See the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html">GData documentation on resumable uploads</ulink> for more
     * information.
     * 
     * The HTTP method to use should be specified in `method,` and will typically be either %SOUP_METHOD_POST (for insertions) or %SOUP_METHOD_PUT
     * (for updates), according to the server and the `upload_uri`.
     * 
     * If `entry` is specified, it will be attached to the upload as the entry to which the file being uploaded belongs. Otherwise, just the file
     * written to the stream will be uploaded, and given a default entry as determined by the server.
     * 
     * `slug,` `content_type` and `content_length` must be specified before the upload begins, as they describe the file being streamed. `slug` is the filename
     * given to the file, which will typically be stored on the server and made available when downloading the file again. `content_type` must be the
     * correct content type for the file, and should be in the service's list of acceptable content types. `content_length` must be the size of the file
     * being uploaded (not including the XML for any associated #GDataEntry) in bytes. Zero is accepted if a metadata-only upload is being performed.
     * 
     * As well as the standard GIO errors, calls to the #GOutputStream API on a #GDataUploadStream can also return any relevant specific error from
     * #GDataServiceError, or %GDATA_SERVICE_ERROR_PROTOCOL_ERROR in the general case.
     * 
     * If a #GCancellable is provided in `cancellable,` the upload operation may be cancelled at any time from another thread using g_cancellable_cancel().
     * In this case, any ongoing network activity will be stopped, and any pending or future calls to #GOutputStream API on the #GDataUploadStream will
     * return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed to individual #GOutputStream operations will not cancel the
     * upload operation proper if cancelled — they will merely cancel that API call. The only way to cancel the upload operation completely is using this
     * `cancellable`.
     * 
     * Note that network communication won't begin until the first call to g_output_stream_write() on the #GDataUploadStream.
     * @constructor 
     * @param service a #GDataService
     * @param domain the #GDataAuthorizationDomain to authorize the upload, or %NULL
     * @param method the HTTP method to use
     * @param upload_uri the URI to upload
     * @param entry the entry to upload as metadata, or %NULL
     * @param slug the file's slug (filename)
     * @param content_type the content type of the file being uploaded
     * @param content_length the size (in bytes) of the file being uploaded
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    static new_resumable(service: Service, domain: AuthorizationDomain | null, method: string, upload_uri: string, entry: Entry | null, slug: string, content_type: string, content_length: number, cancellable: Gio.Cancellable | null): UploadStream
    _init(config?: UploadStream_ConstructProps): void
}

interface YouTubeCategory_ConstructProps extends Comparable_ConstructProps, Category_ConstructProps {
}

interface YouTubeCategory extends Comparable {

    // Own properties of GData-0.0.GData.YouTubeCategory

    /**
     * Whether new videos can be added to the category.
     */
    readonly is_assignable: boolean
    /**
     * Whether the category is deprecated.
     */
    readonly is_deprecated: boolean

    // Own fields of GData-0.0.GData.YouTubeCategory

    parent: Category
    priv: YouTubeCategoryPrivate

    // Owm methods of GData-0.0.GData.YouTubeCategory

    /**
     * Returns whether the category is browsable in the given `region`. The list of supported region IDs is
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#Region_specific_feeds">available online</ulink>.
     * @param region a two-letter region ID
     */
    is_browsable(region: string): boolean

    // Class property signals of GData-0.0.GData.YouTubeCategory

    connect(sigName: "notify::is-assignable", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-assignable", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-assignable", ...args: any[]): void
    connect(sigName: "notify::is-deprecated", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deprecated", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-deprecated", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::scheme", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scheme", ...args: any[]): void
    connect(sigName: "notify::term", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::term", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::term", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataYouTubeCategory structure are private and should never be accessed directly.
 * @class 
 */
class YouTubeCategory extends Category {

    // Own properties of GData-0.0.GData.YouTubeCategory

    static name: string
    static $gtype: GObject.GType<YouTubeCategory>

    // Constructors of GData-0.0.GData.YouTubeCategory

    constructor(config?: YouTubeCategory_ConstructProps) 
    _init(config?: YouTubeCategory_ConstructProps): void
}

interface YouTubeComment_ConstructProps extends Comment_ConstructProps {

    // Own constructor properties of GData-0.0.GData.YouTubeComment

    /**
     * The URI of the parent comment to this one, or %NULL if this comment is a top-level comment.
     * 
     * See the documentation for #GDataYouTubeComment for an explanation of the semantics of parent comment URIs.
     */
    parent_comment_uri?: string | null
}

interface YouTubeComment {

    // Own properties of GData-0.0.GData.YouTubeComment

    /**
     * The URI of the parent comment to this one, or %NULL if this comment is a top-level comment.
     * 
     * See the documentation for #GDataYouTubeComment for an explanation of the semantics of parent comment URIs.
     */
    parent_comment_uri: string

    // Own fields of GData-0.0.GData.YouTubeComment

    parent: Comment
    priv: YouTubeCommentPrivate

    // Owm methods of GData-0.0.GData.YouTubeComment

    /**
     * Gets the #GDataYouTubeComment:parent-comment-uri property.
     */
    get_parent_comment_uri(): string
    /**
     * Sets the #GDataYouTubeComment:parent-comment-uri property to `parent_comment_uri`.
     * 
     * Set `parent_comment_uri` to %NULL to unset the #GDataYouTubeComment:parent-comment-uri property in the comment (i.e. make the comment a top-level
     * comment).
     * 
     * See the <ulink type="http" url="http://code.google.com/apis/youtube/2.0/developers_guide_protocol_comments.html#Retrieve_comments">online
     * documentation</ulink> for more information.
     * @param parent_comment_uri a new parent comment URI, or %NULL
     */
    set_parent_comment_uri(parent_comment_uri: string): void

    // Class property signals of GData-0.0.GData.YouTubeComment

    connect(sigName: "notify::parent-comment-uri", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-comment-uri", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-comment-uri", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataYouTubeComment structure are private and should never be accessed directly.
 * @class 
 */
class YouTubeComment extends Comment {

    // Own properties of GData-0.0.GData.YouTubeComment

    static name: string
    static $gtype: GObject.GType<YouTubeComment>

    // Constructors of GData-0.0.GData.YouTubeComment

    constructor(config?: YouTubeComment_ConstructProps) 
    /**
     * Creates a new #GDataYouTubeComment with the given ID and default properties.
     * @constructor 
     * @param id the comment's ID, or %NULL
     */
    constructor(id: string) 
    /**
     * Creates a new #GDataYouTubeComment with the given ID and default properties.
     * @constructor 
     * @param id the comment's ID, or %NULL
     */
    static new(id: string): YouTubeComment

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: YouTubeComment_ConstructProps): void
}

interface YouTubeFeed_ConstructProps extends Feed_ConstructProps {
}

interface YouTubeFeed {

    // Class property signals of GData-0.0.GData.YouTubeFeed

    connect(sigName: "notify::etag", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::generator", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::generator", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::items-per-page", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-per-page", ...args: any[]): void
    connect(sigName: "notify::logo", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::next-page-token", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-page-token", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::total-results", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-results", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataYouTubeFeed structure are private and should
 * never be accessed directly.
 * @class 
 */
class YouTubeFeed extends Feed {

    // Own properties of GData-0.0.GData.YouTubeFeed

    static name: string
    static $gtype: GObject.GType<YouTubeFeed>

    // Constructors of GData-0.0.GData.YouTubeFeed

    constructor(config?: YouTubeFeed_ConstructProps) 
    _init(config?: YouTubeFeed_ConstructProps): void
}

interface YouTubeQuery_ConstructProps extends Query_ConstructProps {

    // Own constructor properties of GData-0.0.GData.YouTubeQuery

    /**
     * Restricts the search to videos uploaded within the specified time period. To retrieve videos irrespective of their
     * age, set the property to %GDATA_YOUTUBE_AGE_ALL_TIME.
     */
    age?: YouTubeAge | null
    /**
     * The latitude of a particular location of which videos should be found. This should be used in conjunction with
     * #GDataYouTubeQuery:longitude; if either property is outside the valid range, neither will be used. Valid latitudes
     * are between <code class="literal">-90</code> and <code class="literal">90</code>0 degrees; any values of this property outside that range
     * will unset the property in the query URI.
     * 
     * If #GDataYouTubeQuery:location-radius is a non-<code class="literal">0</code> value, this will define a circle from which videos should be
     * found.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#location">online documentation</ulink>.
     */
    latitude?: number | null
    /**
     * The content license which should be used to filter search results. If set to, for example, %GDATA_YOUTUBE_LICENSE_CC, only videos which
     * are Creative Commons licensed will be returned in search results. Set this to %NULL to return videos under any license.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#videoLicense">online documentation</ulink>.
     */
    license?: string | null
    /**
     * The radius, in metres, of a circle from within which videos should be returned. The circle is centred on the latitude and
     * longitude given in #GDataYouTubeQuery:latitude and #GDataYouTubeQuery:longitude.
     * 
     * Set this property to <code class="literal">0</code> to search for specific coordinates, rather than within a given radius.
     * 
     * For more information, see the documentation for #GDataYouTubeQuery:latitude.
     */
    location_radius?: number | null
    /**
     * The longitude of a particular location of which videos should be found. This should be used in conjunction with
     * #GDataYouTubeQuery:latitude; if either property is outside the valid range, neither will be used. Valid longitudes
     * are between <code class="literal">-180</code> and <code class="literal">180</code> degrees; any values of this property outside that
     * range will unset the property in the query URI.
     * 
     * For more information, see the documentation for #GDataYouTubeQuery:latitude.
     */
    longitude?: number | null
    /**
     * Specifies the order of entries in a feed. Supported values are <literal>relevance</literal>,
     * <literal>published</literal>, <literal>viewCount</literal> and <literal>rating</literal>.
     * 
     * Additionally, results most relevant to a specific language can be returned by setting the property
     * to <literal>relevance_lang_<replaceable>languageCode</replaceable></literal>, where
     * <replaceable>languageCode</replaceable> is an ISO 639-1 language code, as used in #GDataYouTubeQuery:language.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#order">online documentation</ulink>.
     */
    order_by?: string | null
    /**
     * An ISO 3166 two-letter country code that should be used to filter
     * videos playable only in specific countries.
     * 
     * Previously, this property could also accept the client’s IP address
     * for country lookup. This feature is no longer supported by Google,
     * and will result in an error from the server if used. Use a country
     * code instead.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#regionCode">online documentation</ulink>.
     */
    restriction?: string | null
    /**
     * Whether the search results should include restricted content as well as standard content.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#safeSearch">online documentation</ulink>.
     */
    safe_search?: YouTubeSafeSearch | null
}

interface YouTubeQuery {

    // Own properties of GData-0.0.GData.YouTubeQuery

    /**
     * Restricts the search to videos uploaded within the specified time period. To retrieve videos irrespective of their
     * age, set the property to %GDATA_YOUTUBE_AGE_ALL_TIME.
     */
    age: YouTubeAge
    /**
     * The latitude of a particular location of which videos should be found. This should be used in conjunction with
     * #GDataYouTubeQuery:longitude; if either property is outside the valid range, neither will be used. Valid latitudes
     * are between <code class="literal">-90</code> and <code class="literal">90</code>0 degrees; any values of this property outside that range
     * will unset the property in the query URI.
     * 
     * If #GDataYouTubeQuery:location-radius is a non-<code class="literal">0</code> value, this will define a circle from which videos should be
     * found.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#location">online documentation</ulink>.
     */
    latitude: number
    /**
     * The content license which should be used to filter search results. If set to, for example, %GDATA_YOUTUBE_LICENSE_CC, only videos which
     * are Creative Commons licensed will be returned in search results. Set this to %NULL to return videos under any license.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#videoLicense">online documentation</ulink>.
     */
    license: string
    /**
     * The radius, in metres, of a circle from within which videos should be returned. The circle is centred on the latitude and
     * longitude given in #GDataYouTubeQuery:latitude and #GDataYouTubeQuery:longitude.
     * 
     * Set this property to <code class="literal">0</code> to search for specific coordinates, rather than within a given radius.
     * 
     * For more information, see the documentation for #GDataYouTubeQuery:latitude.
     */
    location_radius: number
    /**
     * The longitude of a particular location of which videos should be found. This should be used in conjunction with
     * #GDataYouTubeQuery:latitude; if either property is outside the valid range, neither will be used. Valid longitudes
     * are between <code class="literal">-180</code> and <code class="literal">180</code> degrees; any values of this property outside that
     * range will unset the property in the query URI.
     * 
     * For more information, see the documentation for #GDataYouTubeQuery:latitude.
     */
    longitude: number
    /**
     * Specifies the order of entries in a feed. Supported values are <literal>relevance</literal>,
     * <literal>published</literal>, <literal>viewCount</literal> and <literal>rating</literal>.
     * 
     * Additionally, results most relevant to a specific language can be returned by setting the property
     * to <literal>relevance_lang_<replaceable>languageCode</replaceable></literal>, where
     * <replaceable>languageCode</replaceable> is an ISO 639-1 language code, as used in #GDataYouTubeQuery:language.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#order">online documentation</ulink>.
     */
    order_by: string
    /**
     * An ISO 3166 two-letter country code that should be used to filter
     * videos playable only in specific countries.
     * 
     * Previously, this property could also accept the client’s IP address
     * for country lookup. This feature is no longer supported by Google,
     * and will result in an error from the server if used. Use a country
     * code instead.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#regionCode">online documentation</ulink>.
     */
    restriction: string
    /**
     * Whether the search results should include restricted content as well as standard content.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#safeSearch">online documentation</ulink>.
     */
    safe_search: YouTubeSafeSearch

    // Own fields of GData-0.0.GData.YouTubeQuery

    parent: Query
    priv: YouTubeQueryPrivate

    // Owm methods of GData-0.0.GData.YouTubeQuery

    /**
     * Gets the #GDataYouTubeQuery:age property.
     */
    get_age(): YouTubeAge
    /**
     * Gets the #GDataYouTubeQuery:license property.
     */
    get_license(): string
    /**
     * Gets the location-based properties of the #GDataYouTubeQuery<!-- -->: #GDataYouTubeQuery:latitude, #GDataYouTubeQuery:longitude,
     * #GDataYouTubeQuery:location-radius and #GDataYouTubeQuery:has-location.
     */
    get_location(): [ /* latitude */ number, /* longitude */ number, /* radius */ number ]
    /**
     * Gets the #GDataYouTubeQuery:order-by property.
     */
    get_order_by(): string
    /**
     * Gets the #GDataYouTubeQuery:restriction property.
     */
    get_restriction(): string
    /**
     * Gets the #GDataYouTubeQuery:safe-search property.
     */
    get_safe_search(): YouTubeSafeSearch
    /**
     * Sets the #GDataYouTubeQuery:age property of the #GDataYouTubeQuery to `age`.
     * @param age the new age
     */
    set_age(age: YouTubeAge): void
    /**
     * Sets the #GDataYouTubeQuery:license property of the #GDataYouTubeQuery to the new license value, `license`.
     * 
     * Set `license` to %NULL to unset the property in the query URI.
     * @param license a new license value, or %NULL
     */
    set_license(license: string | null): void
    /**
     * Sets the location-based properties of the #GDataYouTubeQuery<!-- -->: #GDataYouTubeQuery:latitude, #GDataYouTubeQuery:longitude,
     * #GDataYouTubeQuery:location-radius and #GDataYouTubeQuery:has-location.
     * @param latitude the new latitude, or %G_MAXDOUBLE
     * @param longitude the new longitude, or %G_MAXDOUBLE
     * @param radius the new location radius, or <code class="literal">0</code>
     */
    set_location(latitude: number, longitude: number, radius: number): void
    /**
     * Sets the #GDataYouTubeQuery:order-by property of the #GDataYouTubeQuery to the new order by string, `order_by`.
     * 
     * Set `order_by` to %NULL to unset the property in the query URI.
     * @param order_by a new order by string, or %NULL
     */
    set_order_by(order_by: string | null): void
    /**
     * Sets the #GDataYouTubeQuery:restriction property of the #GDataYouTubeQuery to the new restriction string, `restriction`.
     * 
     * Set `restriction` to %NULL to unset the property in the query URI.
     * @param restriction a new restriction string, or %NULL
     */
    set_restriction(restriction: string | null): void
    /**
     * Sets the #GDataYouTubeQuery:safe-search property of the #GDataYouTubeQuery to `safe_search`.
     * @param safe_search a new safe search level
     */
    set_safe_search(safe_search: YouTubeSafeSearch): void

    // Class property signals of GData-0.0.GData.YouTubeQuery

    connect(sigName: "notify::age", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::age", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::age", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::location-radius", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location-radius", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location-radius", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::order-by", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order-by", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::order-by", ...args: any[]): void
    connect(sigName: "notify::restriction", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::restriction", ...args: any[]): void
    connect(sigName: "notify::safe-search", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::safe-search", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::safe-search", ...args: any[]): void
    connect(sigName: "notify::author", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataYouTubeQuery structure are private and should never be accessed directly.
 * @class 
 */
class YouTubeQuery extends Query {

    // Own properties of GData-0.0.GData.YouTubeQuery

    static name: string
    static $gtype: GObject.GType<YouTubeQuery>

    // Constructors of GData-0.0.GData.YouTubeQuery

    constructor(config?: YouTubeQuery_ConstructProps) 
    /**
     * Creates a new #GDataYouTubeQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataYouTubeQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): YouTubeQuery

    // Overloads of new

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    _init(config?: YouTubeQuery_ConstructProps): void
}

interface YouTubeService_ConstructProps extends Batchable_ConstructProps, Service_ConstructProps {

    // Own constructor properties of GData-0.0.GData.YouTubeService

    /**
     * The developer key your application has registered with the YouTube API. For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/registering_an_application">online documentation</ulink>.
     * 
     * With the port from v2 to v3 of the YouTube API in libgdata
     * 0.17.0, it might be necessary to update your application’s
     * developer key.
     */
    developer_key?: string | null
}

interface YouTubeService extends Batchable {

    // Own properties of GData-0.0.GData.YouTubeService

    /**
     * The developer key your application has registered with the YouTube API. For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/registering_an_application">online documentation</ulink>.
     * 
     * With the port from v2 to v3 of the YouTube API in libgdata
     * 0.17.0, it might be necessary to update your application’s
     * developer key.
     */
    readonly developer_key: string

    // Own fields of GData-0.0.GData.YouTubeService

    parent: Service
    priv: YouTubeServicePrivate

    // Owm methods of GData-0.0.GData.YouTubeService

    /**
     * Finish off a video upload operation started by gdata_youtube_service_upload_video(), parsing the result and returning the new #GDataYouTubeVideo.
     * 
     * If an error occurred during the upload operation, it will have been returned during the operation (e.g. by g_output_stream_splice() or one
     * of the other stream methods). In such a case, %NULL will be returned but `error` will remain unset. `error` is only set in the case that the server
     * indicates that the operation was successful, but an error is encountered in parsing the result sent by the server.
     * @param upload_stream the #GDataUploadStream from the operation
     */
    finish_video_upload(upload_stream: UploadStream): YouTubeVideo
    /**
     * Gets a list of the categories currently in use on YouTube. The returned #GDataAPPCategories contains a list of #GDataYouTubeCategorys which
     * enumerate the current YouTube categories.
     * 
     * The category labels (#GDataCategory:label) are localised based on the value of #GDataService:locale.
     * @param cancellable a #GCancellable, or %NULL
     */
    get_categories(cancellable: Gio.Cancellable | null): APPCategories
    /**
     * Gets a list of the categories currently in use on YouTube. `self` is reffed when this function is called, so can safely be unreffed after this
     * function returns.
     * 
     * For more details, see gdata_youtube_service_get_categories(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_youtube_service_get_categories_finish() to get the results of the
     * operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is finished
     */
    get_categories_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous request for a list of categories on YouTube, as started with gdata_youtube_service_get_categories_async().
     * @param async_result a #GAsyncResult
     */
    get_categories_finish(async_result: Gio.AsyncResult): APPCategories
    /**
     * Gets the #GDataYouTubeService:developer-key property from the #GDataYouTubeService.
     */
    get_developer_key(): string
    /**
     * Queries the service for videos related to `video`. The algorithm determining which videos are related is on the server side.
     * 
     * Parameters and other errors are as for gdata_service_query().
     * @param video a #GDataYouTubeVideo for which to find related videos
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query_related(video: YouTubeVideo, query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed
    /**
     * Queries the service for videos related to `video`. The algorithm determining which videos are related is on the server side.
     * `self` and `query` are both reffed when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see gdata_youtube_service_query_related(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_query_finish()
     * to get the results of the operation.
     * @param video a #GDataYouTubeVideo for which to find related videos
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    query_related_async(video: YouTubeVideo, query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service's standard `feed_type` feed to build a #GDataFeed.
     * 
     * Note that with the port from v2 to v3 of the YouTube API in libgdata
     * 0.17.0, all feed types except %GDATA_YOUTUBE_MOST_POPULAR_FEED have been
     * deprecated. Other feed types will now transparently return
     * %GDATA_YOUTUBE_MOST_POPULAR_FEED, limited to the past 24 hours.
     * 
     * Parameters and errors are as for gdata_service_query().
     * @param feed_type the feed type to query, from #GDataYouTubeStandardFeedType
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query_standard_feed(feed_type: YouTubeStandardFeedType, query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed
    /**
     * Queries the service's standard `feed_type` feed to build a #GDataFeed. `self` and
     * `query` are both reffed when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see gdata_youtube_service_query_standard_feed(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_query_finish()
     * to get the results of the operation.
     * @param feed_type the feed type to query, from #GDataYouTubeStandardFeedType
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    query_standard_feed_async(feed_type: YouTubeStandardFeedType, query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service for videos matching the parameters set on the #GDataQuery. This searches site-wide, and imposes no other restrictions or
     * parameters on the query.
     * 
     * Parameters and errors are as for gdata_service_query().
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query_videos(query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null): Feed
    /**
     * Queries the service for videos matching the parameters set on the #GDataQuery. This searches site-wide, and imposes no other restrictions or
     * parameters on the query. `self` and `query` are both reffed when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see gdata_youtube_service_query_videos(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_query_finish()
     * to get the results of the operation.
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    query_videos_async(query: Query | null, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Uploads a video to YouTube, using the properties from `video` and the file data written to the resulting #GDataUploadStream.
     * 
     * If `video` has already been inserted, a %GDATA_SERVICE_ERROR_ENTRY_ALREADY_INSERTED error will be returned. If no user is authenticated
     * with the service, %GDATA_SERVICE_ERROR_AUTHENTICATION_REQUIRED will be returned.
     * 
     * The stream returned by this function should be written to using the standard #GOutputStream methods, asynchronously or synchronously. Once the stream
     * is closed (using g_output_stream_close()), gdata_youtube_service_finish_video_upload() should be called on it to parse and return the updated
     * #GDataYouTubeVideo for the uploaded video. This must be done, as `video` isn't updated in-place.
     * 
     * In order to cancel the upload, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GOutputStream operations on the #GDataUploadStream will not cancel the entire upload; merely the write or close operation in question. See the
     * #GDataUploadStream:cancellable for more details.
     * 
     * Any upload errors will be thrown by the stream methods, and may come from the #GDataServiceError domain.
     * @param video a #GDataYouTubeVideo to insert
     * @param slug the filename to give to the uploaded file
     * @param content_type the content type of the uploaded data
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    upload_video(video: YouTubeVideo, slug: string, content_type: string, cancellable: Gio.Cancellable | null): UploadStream

    // Class property signals of GData-0.0.GData.YouTubeService

    connect(sigName: "notify::developer-key", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::developer-key", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::developer-key", ...args: any[]): void
    connect(sigName: "notify::authorizer", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataYouTubeService structure are private and should never be accessed directly.
 * @class 
 */
class YouTubeService extends Service {

    // Own properties of GData-0.0.GData.YouTubeService

    static name: string
    static $gtype: GObject.GType<YouTubeService>

    // Constructors of GData-0.0.GData.YouTubeService

    constructor(config?: YouTubeService_ConstructProps) 
    /**
     * Creates a new #GDataYouTubeService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * The `developer_key` must be unique for your application, and as
     * <ulink type="http" url="https://developers.google.com/youtube/registering_an_application">registered with Google</ulink>.
     * @constructor 
     * @param developer_key your application's developer API key
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    constructor(developer_key: string, authorizer: Authorizer | null) 
    /**
     * Creates a new #GDataYouTubeService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * The `developer_key` must be unique for your application, and as
     * <ulink type="http" url="https://developers.google.com/youtube/registering_an_application">registered with Google</ulink>.
     * @constructor 
     * @param developer_key your application's developer API key
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    static new(developer_key: string, authorizer: Authorizer | null): YouTubeService
    _init(config?: YouTubeService_ConstructProps): void
    /**
     * The primary #GDataAuthorizationDomain for interacting with YouTube. This will not normally need to be used, as it's used internally
     * by the #GDataYouTubeService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
     * does not support natively, then this domain may be needed to authorize the requests.
     * 
     * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
     */
    static get_primary_authorization_domain(): AuthorizationDomain
}

interface YouTubeState_ConstructProps extends Parsable_ConstructProps {

    // Own constructor properties of GData-0.0.GData.YouTubeState

    /**
     * A URI for a YouTube Help Center page that may help the developer or the video owner to diagnose
     * the reason that an upload failed or was rejected.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
     */
    help_uri?: string | null
    /**
     * A human-readable description of why the video failed to upload.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
     */
    message?: string | null
    /**
     * The name of the status of the unpublished video. Valid values are: "processing", "restricted", "deleted", "rejected" and "failed".
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
     */
    name?: string | null
    /**
     * The reason code explaining why the video failed to upload.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
     */
    reason_code?: string | null
}

interface YouTubeState {

    // Own properties of GData-0.0.GData.YouTubeState

    /**
     * A URI for a YouTube Help Center page that may help the developer or the video owner to diagnose
     * the reason that an upload failed or was rejected.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
     */
    readonly help_uri: string
    /**
     * A human-readable description of why the video failed to upload.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
     */
    readonly message: string
    /**
     * The name of the status of the unpublished video. Valid values are: "processing", "restricted", "deleted", "rejected" and "failed".
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
     */
    readonly name: string
    /**
     * The reason code explaining why the video failed to upload.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
     */
    readonly reason_code: string

    // Own fields of GData-0.0.GData.YouTubeState

    parent: Parsable
    priv: YouTubeStatePrivate

    // Owm methods of GData-0.0.GData.YouTubeState

    /**
     * Gets the #GDataYouTubeState:help-uri property.
     */
    get_help_uri(): string
    /**
     * Gets the #GDataYouTubeState:message property.
     */
    get_message(): string
    /**
     * Gets the #GDataYouTubeState:name property.
     */
    get_name(): string
    /**
     * Gets the #GDataYouTubeState:reason-code property.
     */
    get_reason_code(): string

    // Class property signals of GData-0.0.GData.YouTubeState

    connect(sigName: "notify::help-uri", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::help-uri", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::help-uri", ...args: any[]): void
    connect(sigName: "notify::message", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::reason-code", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reason-code", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reason-code", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataYouTubeState structure are private and should never be accessed directly.
 * @class 
 */
class YouTubeState extends Parsable {

    // Own properties of GData-0.0.GData.YouTubeState

    static name: string
    static $gtype: GObject.GType<YouTubeState>

    // Constructors of GData-0.0.GData.YouTubeState

    constructor(config?: YouTubeState_ConstructProps) 
    _init(config?: YouTubeState_ConstructProps): void
}

interface YouTubeVideo_ConstructProps extends Commentable_ConstructProps, Entry_ConstructProps {

    // Own constructor properties of GData-0.0.GData.YouTubeVideo

    /**
     * The aspect ratio of the video. A %NULL value means the aspect ratio is unknown (it could still be a widescreen video). A value of
     * %GDATA_YOUTUBE_ASPECT_RATIO_WIDESCREEN means the video is definitely widescreen.
     */
    aspect_ratio?: string | null
    /**
     * Specifies a genre or developer tag that describes the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.categoryId">online documentation</ulink>.
     */
    category?: MediaCategory | null
    /**
     * A summary or description of the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.description">online documentation</ulink>.
     */
    description?: string | null
    is_private?: boolean | null
    /**
     * A %NULL-terminated array of words associated with the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.tags[]">online documentation</ulink>.
     */
    keywords?: string[] | null
    /**
     * The location as a latitude coordinate associated with this video. Valid latitudes range from <code class="literal">-90.0</code>
     * to <code class="literal">90.0</code> inclusive. Set to a value
     * outside this range to unset the location.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.location.latitude">
     * online documentation</ulink>.
     */
    latitude?: number | null
    /**
     * Descriptive text about the location where the video was taken.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.locationDescription">online documentation</ulink>.
     */
    location?: string | null
    /**
     * The location as a longitude coordinate associated with this video. Valid longitudes range from <code class="literal">-180.0</code>
     * to <code class="literal">180.0</code> inclusive. Set to a value
     * outside this range to unset the location.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.location.longitude">
     * online documentation</ulink>.
     */
    longitude?: number | null
    /**
     * Specifies the time the video was originally recorded.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.recordingDate">online documentation</ulink>.
     */
    recorded?: number | null
}

interface YouTubeVideo extends Commentable {

    // Own properties of GData-0.0.GData.YouTubeVideo

    /**
     * The aspect ratio of the video. A %NULL value means the aspect ratio is unknown (it could still be a widescreen video). A value of
     * %GDATA_YOUTUBE_ASPECT_RATIO_WIDESCREEN means the video is definitely widescreen.
     */
    aspect_ratio: string
    /**
     * The average rating of the video, over all the ratings it's received.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount">online documentation</ulink>.
     */
    readonly average_rating: number
    /**
     * Specifies a genre or developer tag that describes the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.categoryId">online documentation</ulink>.
     */
    category: MediaCategory
    /**
     * A summary or description of the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.description">online documentation</ulink>.
     */
    description: string
    /**
     * The duration of the video in seconds.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#contentDetails.duration">online documentation</ulink>.
     */
    readonly duration: number
    /**
     * The number of users who have added the video to their favorites.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#statistics.favoriteCount">online documentation</ulink>.
     */
    readonly favorite_count: number
    is_private: boolean
    /**
     * A %NULL-terminated array of words associated with the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.tags[]">online documentation</ulink>.
     */
    keywords: string[]
    /**
     * The location as a latitude coordinate associated with this video. Valid latitudes range from <code class="literal">-90.0</code>
     * to <code class="literal">90.0</code> inclusive. Set to a value
     * outside this range to unset the location.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.location.latitude">
     * online documentation</ulink>.
     */
    latitude: number
    /**
     * Descriptive text about the location where the video was taken.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.locationDescription">online documentation</ulink>.
     */
    location: string
    /**
     * The location as a longitude coordinate associated with this video. Valid longitudes range from <code class="literal">-180.0</code>
     * to <code class="literal">180.0</code> inclusive. Set to a value
     * outside this range to unset the location.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.location.longitude">
     * online documentation</ulink>.
     */
    longitude: number
    /**
     * The maximum allowed rating for the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount">online documentation</ulink>.
     */
    readonly max_rating: number
    /**
     * The minimum allowed rating for the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount">online documentation</ulink>.
     */
    readonly min_rating: number
    /**
     * A URI for a browser-based media player for the full-length video (i.e. the video's page on YouTube).
     */
    readonly player_uri: string
    /**
     * The number of times the video has been rated.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount">online documentation</ulink>.
     */
    readonly rating_count: number
    /**
     * Specifies the time the video was originally recorded.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.recordingDate">online documentation</ulink>.
     */
    recorded: number
    /**
     * Information describing the state of the video. If this is non-%NULL, the video is not playable.
     * It points to a #GDataYouTubeState.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#status.uploadStatus">online documentation</ulink>.
     */
    readonly state: YouTubeState
    /**
     * Specifies the time the video was originally uploaded to YouTube.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.publishedAt">online documentation</ulink>.
     */
    readonly uploaded: number
    /**
     * The number of times the video has been viewed.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#statistics.viewCount">online documentation</ulink>.
     */
    readonly view_count: number

    // Own fields of GData-0.0.GData.YouTubeVideo

    parent: Entry
    priv: YouTubeVideoPrivate

    // Owm methods of GData-0.0.GData.YouTubeVideo

    /**
     * Gets the permission associated with the given `action` on the #GDataYouTubeVideo. If the given `action`
     * doesn't have a permission set on the video, %GDATA_YOUTUBE_PERMISSION_DENIED is returned.
     * @param action the action whose permission should be returned
     */
    get_access_control(action: string): YouTubePermission
    /**
     * Gets the #GDataYouTubeVideo:aspect-ratio property.
     */
    get_aspect_ratio(): string
    /**
     * Gets the #GDataYouTubeVideo:category property.
     */
    get_category(): MediaCategory
    /**
     * Gets the #GDataYouTubeVideo:latitude and #GDataYouTubeVideo:longitude properties, setting the out parameters to them. If either latitude or
     * longitude is %NULL, that parameter will not be set. If the coordinates are unset, `latitude` and `longitude` will be set to %G_MAXDOUBLE.
     */
    get_coordinates(): [ /* latitude */ number, /* longitude */ number ]
    /**
     * Gets the #GDataYouTubeVideo:description property.
     */
    get_description(): string
    /**
     * Gets the #GDataYouTubeVideo:duration property.
     */
    get_duration(): number
    /**
     * Gets the #GDataYouTubeVideo:favorite-count property.
     */
    get_favorite_count(): number
    /**
     * Gets the #GDataYouTubeVideo:keywords property.
     */
    get_keywords(): string[]
    /**
     * Gets the #GDataYouTubeVideo:location property.
     */
    get_location(): string
    /**
     * Returns the rating of the given type for the video, if one exists. For example, this could be a film rating awarded by the MPAA; or a simple
     * rating specifying whether the video contains adult content.
     * 
     * The valid values for `rating_type` are: %GDATA_YOUTUBE_RATING_TYPE_MPAA and %GDATA_YOUTUBE_RATING_TYPE_V_CHIP.
     * Further values may be added in future; if an unknown rating type is passed to the function, %NULL will be returned.
     * 
     * The possible return values depend on what's passed to `rating_type`. Valid values for each rating type are listed in the documentation for the
     * rating types.
     * @param rating_type the type of rating to retrieve
     */
    get_media_rating(rating_type: string): string
    /**
     * Gets the #GDataYouTubeVideo:player-uri property.
     */
    get_player_uri(): string
    /**
     * Gets various properties of the ratings on the video.
     * 
     * Note that this property may not be retrieved when querying for multiple
     * videos at once, but is guaranteed to be retrieved when querying with
     * gdata_service_query_single_entry_async().
     */
    get_rating(): [ /* min */ number, /* max */ number, /* count */ number, /* average */ number ]
    /**
     * Gets the #GDataYouTubeVideo:recorded property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_recorded(): number
    /**
     * Gets the #GDataYouTubeVideo:state property.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#status.uploadStatus">online documentation</ulink>.
     */
    get_state(): YouTubeState
    /**
     * Gets a list of the thumbnails available for the video.
     */
    get_thumbnails(): MediaThumbnail[]
    /**
     * Gets the #GDataYouTubeVideo:uploaded property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    get_uploaded(): number
    /**
     * Gets the #GDataYouTubeVideo:view-count property.
     */
    get_view_count(): number
    /**
     * Checks whether viewing of the video is restricted in `country,` either by its content rating, or by the request of the producer.
     * The return value from this function is purely informational, and no obligation is assumed.
     * @param country an ISO 3166 two-letter country code to check
     */
    is_restricted_in_country(country: string): boolean
    /**
     * Sets the permission associated with `action` on the #GDataYouTubeVideo, allowing restriction or derestriction of various
     * operations on YouTube videos.
     * 
     * Note that only %GDATA_YOUTUBE_ACTION_RATE and %GDATA_YOUTUBE_ACTION_COMMENT actions can have the %GDATA_YOUTUBE_PERMISSION_MODERATED permission.
     * @param action the action whose permission is being set
     * @param permission the permission to give to the action
     */
    set_access_control(action: string, permission: YouTubePermission): void
    /**
     * Sets the #GDataYouTubeVideo:aspect-ratio property to specify the video's aspect ratio.
     * If `aspect_ratio` is %NULL, the property will be unset.
     * @param aspect_ratio the aspect ratio property, or %NULL
     */
    set_aspect_ratio(aspect_ratio: string | null): void
    /**
     * Sets the #GDataYouTubeVideo:category property to the new category, `category,` and increments its reference count.
     * 
     * `category` must not be %NULL. For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.categoryId">online documentation</ulink>.
     * @param category a new #GDataMediaCategory
     */
    set_category(category: MediaCategory): void
    /**
     * Sets the #GDataYouTubeVideo:latitude and #GDataYouTubeVideo:longitude properties to `latitude` and `longitude` respectively.
     * @param latitude the video's new latitude coordinate, or %G_MAXDOUBLE
     * @param longitude the video's new longitude coordinate, or %G_MAXDOUBLE
     */
    set_coordinates(latitude: number, longitude: number): void
    /**
     * Sets the #GDataYouTubeVideo:description property to the new description, `description`.
     * 
     * Set `description` to %NULL to unset the video's description.
     * @param description the video's new description, or %NULL
     */
    set_description(description: string | null): void
    /**
     * Sets the #GDataYouTubeVideo:is-private property to decide whether the video is publicly viewable.
     * @param is_private whether the video is private
     */
    set_is_private(is_private: boolean): void
    /**
     * Sets the #GDataYouTubeVideo:keywords property to the new keyword list, `keywords`.
     * 
     * `keywords` must not be %NULL. For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.tags[]">online documentation</ulink>.
     * @param keywords a new %NULL-terminated array of keywords
     */
    set_keywords(keywords: string[]): void
    /**
     * Sets the #GDataYouTubeVideo:location property to the new location string, `location`.
     * 
     * Set `location` to %NULL to unset the property in the video.
     * @param location a new location, or %NULL
     */
    set_location(location: string | null): void
    /**
     * Sets the #GDataYouTubeVideo:recorded property to the new recorded time, `recorded`.
     * 
     * Set `recorded` to <code class="literal">-1</code> to unset the video's recorded time.
     * @param recorded the video's new recorded time, or <code class="literal">-1</code>
     */
    set_recorded(recorded: number): void

    // Class property signals of GData-0.0.GData.YouTubeVideo

    connect(sigName: "notify::aspect-ratio", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aspect-ratio", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::average-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::average-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::average-rating", ...args: any[]): void
    connect(sigName: "notify::category", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::category", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::favorite-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favorite-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::favorite-count", ...args: any[]): void
    connect(sigName: "notify::is-private", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-private", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-private", ...args: any[]): void
    connect(sigName: "notify::keywords", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keywords", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::max-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-rating", ...args: any[]): void
    connect(sigName: "notify::min-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-rating", ...args: any[]): void
    connect(sigName: "notify::player-uri", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player-uri", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::player-uri", ...args: any[]): void
    connect(sigName: "notify::rating-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rating-count", ...args: any[]): void
    connect(sigName: "notify::recorded", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recorded", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::recorded", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::uploaded", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uploaded", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uploaded", ...args: any[]): void
    connect(sigName: "notify::view-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view-count", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructed-from-xml", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GDataYouTubeVideo structure are private and should never be accessed directly.
 * @class 
 */
class YouTubeVideo extends Entry {

    // Own properties of GData-0.0.GData.YouTubeVideo

    static name: string
    static $gtype: GObject.GType<YouTubeVideo>

    // Constructors of GData-0.0.GData.YouTubeVideo

    constructor(config?: YouTubeVideo_ConstructProps) 
    /**
     * Creates a new #GDataYouTubeVideo with the given ID and default properties.
     * @constructor 
     * @param id the video's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataYouTubeVideo with the given ID and default properties.
     * @constructor 
     * @param id the video's ID, or %NULL
     */
    static new(id: string | null): YouTubeVideo

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: YouTubeVideo_ConstructProps): void
    /**
     * Extracts a video ID from a YouTube video player URI. The video ID is in the same form as returned by
     * gdata_youtube_video_get_video_id(), and the `video_uri` should be in the same form as returned by
     * gdata_youtube_video_get_player_uri().
     * 
     * The function will validate whether the URI actually points to a hostname containing <literal>youtube</literal>
     * (e.g. <literal>youtube.com</literal>), and will return %NULL if it doesn't.
     * 
     * For example:
     * <informalexample><programlisting>
     * video_id = gdata_youtube_video_get_video_id_from_uri ("http://www.youtube.com/watch?v=BH_vwsyCrTc&feature=featured");
     * g_message ("Video ID: %s", video_id); /<!-- -->* Should print: BH_vwsyCrTc *<!-- -->/
     * g_free (video_id);
     * </programlisting></informalexample>
     * @param video_uri a YouTube video player URI
     */
    static get_video_id_from_uri(video_uri: string): string
}

interface APPCategoriesClass {
}

/**
 * All the fields in the #GDataAPPCategoriesClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class APPCategoriesClass {

    // Own properties of GData-0.0.GData.APPCategoriesClass

    static name: string
}

interface APPCategoriesPrivate {
}

class APPCategoriesPrivate {

    // Own properties of GData-0.0.GData.APPCategoriesPrivate

    static name: string
}

interface AccessHandlerIface {

    // Own fields of GData-0.0.GData.AccessHandlerIface

    /**
     * the parent type
     * @field 
     */
    parent: GObject.TypeInterface
    is_owner_rule: (rule: AccessRule) => boolean
    get_rules: (self: AccessHandler, service: Service, cancellable: Gio.Cancellable | null, progress_callback: QueryProgressCallback | null) => Feed
}

/**
 * The class structure for the #GDataAccessHandler interface.
 * @record 
 */
abstract class AccessHandlerIface {

    // Own properties of GData-0.0.GData.AccessHandlerIface

    static name: string
}

interface AccessRuleClass {
}

/**
 * All the fields in the #GDataAccessRuleClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class AccessRuleClass {

    // Own properties of GData-0.0.GData.AccessRuleClass

    static name: string
}

interface AccessRulePrivate {
}

class AccessRulePrivate {

    // Own properties of GData-0.0.GData.AccessRulePrivate

    static name: string
}

interface AuthorClass {
}

/**
 * All the fields in the #GDataAuthorClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class AuthorClass {

    // Own properties of GData-0.0.GData.AuthorClass

    static name: string
}

interface AuthorPrivate {
}

class AuthorPrivate {

    // Own properties of GData-0.0.GData.AuthorPrivate

    static name: string
}

interface AuthorizationDomainClass {
}

/**
 * All the fields in the #GDataAuthorizationDomainClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class AuthorizationDomainClass {

    // Own properties of GData-0.0.GData.AuthorizationDomainClass

    static name: string
}

interface AuthorizationDomainPrivate {
}

class AuthorizationDomainPrivate {

    // Own properties of GData-0.0.GData.AuthorizationDomainPrivate

    static name: string
}

interface AuthorizerInterface {

    // Own fields of GData-0.0.GData.AuthorizerInterface

    /**
     * the parent type
     * @field 
     */
    parent: GObject.TypeInterface
    process_request: (self: Authorizer, domain: AuthorizationDomain | null, message: Soup.Message) => void
    is_authorized_for_domain: (self: Authorizer | null, domain: AuthorizationDomain) => boolean
    refresh_authorization: (self: Authorizer, cancellable: Gio.Cancellable | null) => boolean
    refresh_authorization_async: (self: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    refresh_authorization_finish: (self: Authorizer, async_result: Gio.AsyncResult) => boolean
}

/**
 * The class structure for the #GDataAuthorizer interface.
 * @record 
 */
abstract class AuthorizerInterface {

    // Own properties of GData-0.0.GData.AuthorizerInterface

    static name: string
}

interface BatchOperationClass {
}

/**
 * All the fields in the #GDataBatchOperationClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class BatchOperationClass {

    // Own properties of GData-0.0.GData.BatchOperationClass

    static name: string
}

interface BatchOperationPrivate {
}

class BatchOperationPrivate {

    // Own properties of GData-0.0.GData.BatchOperationPrivate

    static name: string
}

interface BatchableIface {

    // Own fields of GData-0.0.GData.BatchableIface

    is_supported: (operation_type: BatchOperationType) => boolean
}

/**
 * All the fields in the #GDataBatchableIface structure are private and should never be accessed directly.
 * @record 
 */
abstract class BatchableIface {

    // Own properties of GData-0.0.GData.BatchableIface

    static name: string
}

interface CalendarAccessRuleClass {
}

/**
 * All the fields in the #GDataCalendarAccessRuleClass structure are private
 * and should never be accessed directly.
 * @record 
 */
abstract class CalendarAccessRuleClass {

    // Own properties of GData-0.0.GData.CalendarAccessRuleClass

    static name: string
}

interface CalendarCalendarClass {
}

/**
 * All the fields in the #GDataCalendarCalendarClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class CalendarCalendarClass {

    // Own properties of GData-0.0.GData.CalendarCalendarClass

    static name: string
}

interface CalendarCalendarPrivate {
}

class CalendarCalendarPrivate {

    // Own properties of GData-0.0.GData.CalendarCalendarPrivate

    static name: string
}

interface CalendarEventClass {
}

/**
 * All the fields in the #GDataCalendarEventClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class CalendarEventClass {

    // Own properties of GData-0.0.GData.CalendarEventClass

    static name: string
}

interface CalendarEventPrivate {
}

class CalendarEventPrivate {

    // Own properties of GData-0.0.GData.CalendarEventPrivate

    static name: string
}

interface CalendarFeedClass {
}

/**
 * All the fields in the #GDataCalendarFeedClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class CalendarFeedClass {

    // Own properties of GData-0.0.GData.CalendarFeedClass

    static name: string
}

interface CalendarFeedPrivate {
}

class CalendarFeedPrivate {

    // Own properties of GData-0.0.GData.CalendarFeedPrivate

    static name: string
}

interface CalendarQueryClass {
}

/**
 * All the fields in the #GDataCalendarQueryClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class CalendarQueryClass {

    // Own properties of GData-0.0.GData.CalendarQueryClass

    static name: string
}

interface CalendarQueryPrivate {
}

class CalendarQueryPrivate {

    // Own properties of GData-0.0.GData.CalendarQueryPrivate

    static name: string
}

interface CalendarServiceClass {
}

/**
 * All the fields in the #GDataCalendarServiceClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class CalendarServiceClass {

    // Own properties of GData-0.0.GData.CalendarServiceClass

    static name: string
}

interface CalendarServicePrivate {
}

class CalendarServicePrivate {

    // Own properties of GData-0.0.GData.CalendarServicePrivate

    static name: string
}

interface CategoryClass {
}

/**
 * All the fields in the #GDataCategoryClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class CategoryClass {

    // Own properties of GData-0.0.GData.CategoryClass

    static name: string
}

interface CategoryPrivate {
}

class CategoryPrivate {

    // Own properties of GData-0.0.GData.CategoryPrivate

    static name: string
}

interface Color {

    // Own fields of GData-0.0.GData.Color

    /**
     * red color intensity, from 0–255
     * @field 
     */
    red: number
    /**
     * green color intensity, from 0–255
     * @field 
     */
    green: number
    /**
     * blue color intensity, from 0–255
     * @field 
     */
    blue: number

    // Owm methods of GData-0.0.GData.Color

    /**
     * Returns a string describing `color` in hexadecimal form; in the form <literal>#<replaceable>rr</replaceable><replaceable>gg</replaceable>
     * <replaceable>bb</replaceable></literal>, where <replaceable>rr</replaceable> is a two-digit hexadecimal red intensity value,
     * <replaceable>gg</replaceable> is green and <replaceable>bb</replaceable> is blue. The hash is always present.
     */
    to_hexadecimal(): string
}

/**
 * Describes a color, such as used in the Google Calendar interface to
 * differentiate calendars.
 * @record 
 */
class Color {

    // Own properties of GData-0.0.GData.Color

    static name: string

    // Constructors of GData-0.0.GData.Color

    /**
     * Parses `hexadecimal` and returns a #GDataColor describing it in `color`.
     * 
     * `hexadecimal` should be in the form <literal>#<replaceable>rr</replaceable><replaceable>gg</replaceable><replaceable>bb</replaceable></literal>,
     * where <replaceable>rr</replaceable> is a two-digit hexadecimal red intensity value, <replaceable>gg</replaceable> is green
     * and <replaceable>bb</replaceable> is blue. The hash is optional.
     * @param hexadecimal a hexadecimal color string
     */
    static from_hexadecimal(hexadecimal: string): [ /* returnType */ boolean, /* color */ Color ]
}

interface CommentClass {
}

/**
 * All the fields in the #GDataCommentClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class CommentClass {

    // Own properties of GData-0.0.GData.CommentClass

    static name: string
}

interface CommentPrivate {
}

class CommentPrivate {

    // Own properties of GData-0.0.GData.CommentPrivate

    static name: string
}

interface CommentableInterface {

    // Own fields of GData-0.0.GData.CommentableInterface

    /**
     * the parent type
     * @field 
     */
    parent: GObject.TypeInterface
    /**
     * the #GType of the comment class (subclass of #GDataComment) to use for query results from this commentable object
     * @field 
     */
    comment_type: GObject.GType
    get_query_comments_uri: (self: Commentable) => string
    get_insert_comment_uri: (self: Commentable, comment: Comment) => string
    is_comment_deletable: (self: Commentable, comment: Comment) => boolean
}

/**
 * The interface structure for the #GDataCommentable interface.
 * @record 
 */
abstract class CommentableInterface {

    // Own properties of GData-0.0.GData.CommentableInterface

    static name: string
}

interface ComparableIface {

    // Own fields of GData-0.0.GData.ComparableIface

    /**
     * the parent type
     * @field 
     */
    parent: GObject.TypeInterface
    compare_with: (self: Comparable, other: Comparable) => number
}

/**
 * The class structure for the #GDataComparable interface.
 * @record 
 */
abstract class ComparableIface {

    // Own properties of GData-0.0.GData.ComparableIface

    static name: string
}

interface DocumentsAccessRuleClass {
}

/**
 * All the fields in the #GDataDocumentsAccessRuleClass structure are private
 * and should never be accessed directly.
 * @record 
 */
abstract class DocumentsAccessRuleClass {

    // Own properties of GData-0.0.GData.DocumentsAccessRuleClass

    static name: string
}

interface DocumentsDocumentClass {
}

/**
 * All the fields in the #GDataDocumentsDocumentClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsDocumentClass {

    // Own properties of GData-0.0.GData.DocumentsDocumentClass

    static name: string
}

interface DocumentsDocumentPrivate {
}

class DocumentsDocumentPrivate {

    // Own properties of GData-0.0.GData.DocumentsDocumentPrivate

    static name: string
}

interface DocumentsDrawingClass {
}

/**
 * All the fields in the #GDataDocumentsDrawingClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsDrawingClass {

    // Own properties of GData-0.0.GData.DocumentsDrawingClass

    static name: string
}

interface DocumentsDrawingPrivate {
}

class DocumentsDrawingPrivate {

    // Own properties of GData-0.0.GData.DocumentsDrawingPrivate

    static name: string
}

interface DocumentsDriveClass {
}

/**
 * All the fields in the #GDataDocumentsDriveClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsDriveClass {

    // Own properties of GData-0.0.GData.DocumentsDriveClass

    static name: string
}

interface DocumentsDriveQueryClass {
}

/**
 * All the fields in the #GDataDocumentsDriveQueryClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsDriveQueryClass {

    // Own properties of GData-0.0.GData.DocumentsDriveQueryClass

    static name: string
}

interface DocumentsEntryClass {
}

/**
 * All the fields in the #GDataDocumentsEntryClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsEntryClass {

    // Own properties of GData-0.0.GData.DocumentsEntryClass

    static name: string
}

interface DocumentsEntryPrivate {
}

class DocumentsEntryPrivate {

    // Own properties of GData-0.0.GData.DocumentsEntryPrivate

    static name: string
}

interface DocumentsFeedClass {
}

/**
 * All the fields in the #GDataDocumentsFeedClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsFeedClass {

    // Own properties of GData-0.0.GData.DocumentsFeedClass

    static name: string
}

interface DocumentsFeedPrivate {
}

class DocumentsFeedPrivate {

    // Own properties of GData-0.0.GData.DocumentsFeedPrivate

    static name: string
}

interface DocumentsFolderClass {
}

/**
 * All the fields in the #GDataDocumentsFolderClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsFolderClass {

    // Own properties of GData-0.0.GData.DocumentsFolderClass

    static name: string
}

interface DocumentsFolderPrivate {
}

class DocumentsFolderPrivate {

    // Own properties of GData-0.0.GData.DocumentsFolderPrivate

    static name: string
}

interface DocumentsMetadataClass {
}

/**
 * All the fields in the #GDataDocumentsMetadataClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsMetadataClass {

    // Own properties of GData-0.0.GData.DocumentsMetadataClass

    static name: string
}

interface DocumentsMetadataPrivate {
}

class DocumentsMetadataPrivate {

    // Own properties of GData-0.0.GData.DocumentsMetadataPrivate

    static name: string
}

interface DocumentsPdfClass {
}

/**
 * All the fields in the #GDataDocumentsPdfClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsPdfClass {

    // Own properties of GData-0.0.GData.DocumentsPdfClass

    static name: string
}

interface DocumentsPdfPrivate {
}

class DocumentsPdfPrivate {

    // Own properties of GData-0.0.GData.DocumentsPdfPrivate

    static name: string
}

interface DocumentsPresentationClass {
}

/**
 * All the fields in the #GDataDocumentsPresentationClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsPresentationClass {

    // Own properties of GData-0.0.GData.DocumentsPresentationClass

    static name: string
}

interface DocumentsPresentationPrivate {
}

class DocumentsPresentationPrivate {

    // Own properties of GData-0.0.GData.DocumentsPresentationPrivate

    static name: string
}

interface DocumentsPropertyClass {
}

/**
 * All the fields in the #GDataDocumentsPropertyClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsPropertyClass {

    // Own properties of GData-0.0.GData.DocumentsPropertyClass

    static name: string
}

interface DocumentsPropertyPrivate {
}

class DocumentsPropertyPrivate {

    // Own properties of GData-0.0.GData.DocumentsPropertyPrivate

    static name: string
}

interface DocumentsQueryClass {
}

/**
 * All the fields in the #GDataDocumentsQueryClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsQueryClass {

    // Own properties of GData-0.0.GData.DocumentsQueryClass

    static name: string
}

interface DocumentsQueryPrivate {
}

class DocumentsQueryPrivate {

    // Own properties of GData-0.0.GData.DocumentsQueryPrivate

    static name: string
}

interface DocumentsServiceClass {
}

/**
 * All the fields in the #GDataDocumentsServiceClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsServiceClass {

    // Own properties of GData-0.0.GData.DocumentsServiceClass

    static name: string
}

interface DocumentsServicePrivate {
}

class DocumentsServicePrivate {

    // Own properties of GData-0.0.GData.DocumentsServicePrivate

    static name: string
}

interface DocumentsSpreadsheetClass {
}

/**
 * All the fields in the #GDataDocumentsSpreadsheetClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsSpreadsheetClass {

    // Own properties of GData-0.0.GData.DocumentsSpreadsheetClass

    static name: string
}

interface DocumentsSpreadsheetPrivate {
}

class DocumentsSpreadsheetPrivate {

    // Own properties of GData-0.0.GData.DocumentsSpreadsheetPrivate

    static name: string
}

interface DocumentsTextClass {
}

/**
 * All the fields in the #GDataDocumentsTextClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsTextClass {

    // Own properties of GData-0.0.GData.DocumentsTextClass

    static name: string
}

interface DocumentsTextPrivate {
}

class DocumentsTextPrivate {

    // Own properties of GData-0.0.GData.DocumentsTextPrivate

    static name: string
}

interface DocumentsUploadQueryClass {
}

/**
 * All the fields in the #GDataDocumentsUploadQueryClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DocumentsUploadQueryClass {

    // Own properties of GData-0.0.GData.DocumentsUploadQueryClass

    static name: string
}

interface DocumentsUploadQueryPrivate {
}

class DocumentsUploadQueryPrivate {

    // Own properties of GData-0.0.GData.DocumentsUploadQueryPrivate

    static name: string
}

interface DownloadStreamClass {
}

/**
 * All the fields in the #GDataDownloadStreamClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class DownloadStreamClass {

    // Own properties of GData-0.0.GData.DownloadStreamClass

    static name: string
}

interface DownloadStreamPrivate {
}

class DownloadStreamPrivate {

    // Own properties of GData-0.0.GData.DownloadStreamPrivate

    static name: string
}

interface EntryClass {

    // Own fields of GData-0.0.GData.EntryClass

    /**
     * the parent class
     * @field 
     */
    parent: ParsableClass
    get_entry_uri: (id: string) => string
    /**
     * the term for this entry's kind category (see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#Introduction">documentation on kinds</ulink>)
     * @field 
     */
    kind_term: string
}

/**
 * The class structure for the #GDataEntry type.
 * @record 
 */
abstract class EntryClass {

    // Own properties of GData-0.0.GData.EntryClass

    static name: string
}

interface EntryPrivate {
}

class EntryPrivate {

    // Own properties of GData-0.0.GData.EntryPrivate

    static name: string
}

interface FeedClass {
}

/**
 * All the fields in the #GDataFeedClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class FeedClass {

    // Own properties of GData-0.0.GData.FeedClass

    static name: string
}

interface FeedPrivate {
}

class FeedPrivate {

    // Own properties of GData-0.0.GData.FeedPrivate

    static name: string
}

interface GContactCalendarClass {
}

/**
 * All the fields in the #GDataGContactCalendarClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GContactCalendarClass {

    // Own properties of GData-0.0.GData.GContactCalendarClass

    static name: string
}

interface GContactCalendarPrivate {
}

class GContactCalendarPrivate {

    // Own properties of GData-0.0.GData.GContactCalendarPrivate

    static name: string
}

interface GContactEventClass {
}

/**
 * All the fields in the #GDataGContactEventClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GContactEventClass {

    // Own properties of GData-0.0.GData.GContactEventClass

    static name: string
}

interface GContactEventPrivate {
}

class GContactEventPrivate {

    // Own properties of GData-0.0.GData.GContactEventPrivate

    static name: string
}

interface GContactExternalIDClass {
}

/**
 * All the fields in the #GDataGContactExternalIDClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GContactExternalIDClass {

    // Own properties of GData-0.0.GData.GContactExternalIDClass

    static name: string
}

interface GContactExternalIDPrivate {
}

class GContactExternalIDPrivate {

    // Own properties of GData-0.0.GData.GContactExternalIDPrivate

    static name: string
}

interface GContactJotClass {
}

/**
 * All the fields in the #GDataGContactJotClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GContactJotClass {

    // Own properties of GData-0.0.GData.GContactJotClass

    static name: string
}

interface GContactJotPrivate {
}

class GContactJotPrivate {

    // Own properties of GData-0.0.GData.GContactJotPrivate

    static name: string
}

interface GContactLanguageClass {
}

/**
 * All the fields in the #GDataGContactLanguageClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GContactLanguageClass {

    // Own properties of GData-0.0.GData.GContactLanguageClass

    static name: string
}

interface GContactLanguagePrivate {
}

class GContactLanguagePrivate {

    // Own properties of GData-0.0.GData.GContactLanguagePrivate

    static name: string
}

interface GContactRelationClass {
}

/**
 * All the fields in the #GDataGContactRelationClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GContactRelationClass {

    // Own properties of GData-0.0.GData.GContactRelationClass

    static name: string
}

interface GContactRelationPrivate {
}

class GContactRelationPrivate {

    // Own properties of GData-0.0.GData.GContactRelationPrivate

    static name: string
}

interface GContactWebsiteClass {
}

/**
 * All the fields in the #GDataGContactWebsiteClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GContactWebsiteClass {

    // Own properties of GData-0.0.GData.GContactWebsiteClass

    static name: string
}

interface GContactWebsitePrivate {
}

class GContactWebsitePrivate {

    // Own properties of GData-0.0.GData.GContactWebsitePrivate

    static name: string
}

interface GDEmailAddressClass {
}

/**
 * All the fields in the #GDataGDEmailAddressClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GDEmailAddressClass {

    // Own properties of GData-0.0.GData.GDEmailAddressClass

    static name: string
}

interface GDEmailAddressPrivate {
}

class GDEmailAddressPrivate {

    // Own properties of GData-0.0.GData.GDEmailAddressPrivate

    static name: string
}

interface GDIMAddressClass {
}

/**
 * All the fields in the #GDataGDIMAddressClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GDIMAddressClass {

    // Own properties of GData-0.0.GData.GDIMAddressClass

    static name: string
}

interface GDIMAddressPrivate {
}

class GDIMAddressPrivate {

    // Own properties of GData-0.0.GData.GDIMAddressPrivate

    static name: string
}

interface GDNameClass {
}

/**
 * All the fields in the #GDataGDNameClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GDNameClass {

    // Own properties of GData-0.0.GData.GDNameClass

    static name: string
}

interface GDNamePrivate {
}

class GDNamePrivate {

    // Own properties of GData-0.0.GData.GDNamePrivate

    static name: string
}

interface GDOrganizationClass {
}

/**
 * All the fields in the #GDataGDOrganizationClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GDOrganizationClass {

    // Own properties of GData-0.0.GData.GDOrganizationClass

    static name: string
}

interface GDOrganizationPrivate {
}

class GDOrganizationPrivate {

    // Own properties of GData-0.0.GData.GDOrganizationPrivate

    static name: string
}

interface GDPhoneNumberClass {
}

/**
 * All the fields in the #GDataGDPhoneNumberClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GDPhoneNumberClass {

    // Own properties of GData-0.0.GData.GDPhoneNumberClass

    static name: string
}

interface GDPhoneNumberPrivate {
}

class GDPhoneNumberPrivate {

    // Own properties of GData-0.0.GData.GDPhoneNumberPrivate

    static name: string
}

interface GDPostalAddressClass {
}

/**
 * All the fields in the #GDataGDPostalAddressClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GDPostalAddressClass {

    // Own properties of GData-0.0.GData.GDPostalAddressClass

    static name: string
}

interface GDPostalAddressPrivate {
}

class GDPostalAddressPrivate {

    // Own properties of GData-0.0.GData.GDPostalAddressPrivate

    static name: string
}

interface GDReminderClass {
}

/**
 * All the fields in the #GDataGDReminderClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GDReminderClass {

    // Own properties of GData-0.0.GData.GDReminderClass

    static name: string
}

interface GDReminderPrivate {
}

class GDReminderPrivate {

    // Own properties of GData-0.0.GData.GDReminderPrivate

    static name: string
}

interface GDWhenClass {
}

/**
 * All the fields in the #GDataGDWhenClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GDWhenClass {

    // Own properties of GData-0.0.GData.GDWhenClass

    static name: string
}

interface GDWhenPrivate {
}

class GDWhenPrivate {

    // Own properties of GData-0.0.GData.GDWhenPrivate

    static name: string
}

interface GDWhereClass {
}

/**
 * All the fields in the #GDataGDWhereClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GDWhereClass {

    // Own properties of GData-0.0.GData.GDWhereClass

    static name: string
}

interface GDWherePrivate {
}

class GDWherePrivate {

    // Own properties of GData-0.0.GData.GDWherePrivate

    static name: string
}

interface GDWhoClass {
}

/**
 * All the fields in the #GDataGDWhoClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GDWhoClass {

    // Own properties of GData-0.0.GData.GDWhoClass

    static name: string
}

interface GDWhoPrivate {
}

class GDWhoPrivate {

    // Own properties of GData-0.0.GData.GDWhoPrivate

    static name: string
}

interface GeneratorClass {
}

/**
 * All the fields in the #GDataGeneratorClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GeneratorClass {

    // Own properties of GData-0.0.GData.GeneratorClass

    static name: string
}

interface GeneratorPrivate {
}

class GeneratorPrivate {

    // Own properties of GData-0.0.GData.GeneratorPrivate

    static name: string
}

interface GoaAuthorizerClass {
}

/**
 * All the fields in the #GDataGoaAuthorizerClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class GoaAuthorizerClass {

    // Own properties of GData-0.0.GData.GoaAuthorizerClass

    static name: string
}

interface GoaAuthorizerPrivate {
}

class GoaAuthorizerPrivate {

    // Own properties of GData-0.0.GData.GoaAuthorizerPrivate

    static name: string
}

interface LinkClass {
}

/**
 * All the fields in the #GDataLinkClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class LinkClass {

    // Own properties of GData-0.0.GData.LinkClass

    static name: string
}

interface LinkPrivate {
}

class LinkPrivate {

    // Own properties of GData-0.0.GData.LinkPrivate

    static name: string
}

interface MediaCategoryClass {
}

/**
 * All the fields in the #GDataMediaCategoryClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class MediaCategoryClass {

    // Own properties of GData-0.0.GData.MediaCategoryClass

    static name: string
}

interface MediaCategoryPrivate {
}

class MediaCategoryPrivate {

    // Own properties of GData-0.0.GData.MediaCategoryPrivate

    static name: string
}

interface MediaContentClass {
}

/**
 * All the fields in the #GDataMediaContentClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class MediaContentClass {

    // Own properties of GData-0.0.GData.MediaContentClass

    static name: string
}

interface MediaContentPrivate {
}

class MediaContentPrivate {

    // Own properties of GData-0.0.GData.MediaContentPrivate

    static name: string
}

interface MediaCreditClass {
}

/**
 * All the fields in the #GDataMediaCreditClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class MediaCreditClass {

    // Own properties of GData-0.0.GData.MediaCreditClass

    static name: string
}

interface MediaCreditPrivate {
}

class MediaCreditPrivate {

    // Own properties of GData-0.0.GData.MediaCreditPrivate

    static name: string
}

interface MediaThumbnailClass {
}

/**
 * All the fields in the #GDataMediaThumbnailClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class MediaThumbnailClass {

    // Own properties of GData-0.0.GData.MediaThumbnailClass

    static name: string
}

interface MediaThumbnailPrivate {
}

class MediaThumbnailPrivate {

    // Own properties of GData-0.0.GData.MediaThumbnailPrivate

    static name: string
}

interface OAuth2AuthorizerClass {
}

/**
 * All the fields in the #GDataOAuth2AuthorizerClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class OAuth2AuthorizerClass {

    // Own properties of GData-0.0.GData.OAuth2AuthorizerClass

    static name: string
}

interface OAuth2AuthorizerPrivate {
}

class OAuth2AuthorizerPrivate {

    // Own properties of GData-0.0.GData.OAuth2AuthorizerPrivate

    static name: string
}

interface ParsableClass {

    // Own fields of GData-0.0.GData.ParsableClass

    /**
     * the parent class
     * @field 
     */
    parent: GObject.ObjectClass
    pre_parse_xml: (parsable: Parsable, doc: libxml2.Doc, root_node: libxml2.Node) => boolean
    parse_xml: (parsable: Parsable, doc: libxml2.Doc, node: libxml2.Node) => boolean
    post_parse_xml: (parsable: Parsable) => boolean
    pre_get_xml: (parsable: Parsable, xml_string: GLib.String) => void
    get_xml: (parsable: Parsable, xml_string: GLib.String) => void
    get_namespaces: (parsable: Parsable, namespaces: GLib.HashTable) => void
    parse_json: (parsable: Parsable, reader: Json.Reader) => boolean
    post_parse_json: (parsable: Parsable) => boolean
    get_json: (parsable: Parsable, builder: Json.Builder) => void
    get_content_type: () => string
    /**
     * the name of the XML element which represents this parsable
     * @field 
     */
    element_name: string
    /**
     * the prefix of the XML namespace used for the parsable
     * @field 
     */
    element_namespace: string
}

/**
 * The class structure for the #GDataParsable class. Note that JSON and XML functions are mutually exclusive:
 * a given implementation of #GDataParsable is represented as exactly one of JSON and XML.
 * @record 
 */
abstract class ParsableClass {

    // Own properties of GData-0.0.GData.ParsableClass

    static name: string
}

interface ParsablePrivate {
}

class ParsablePrivate {

    // Own properties of GData-0.0.GData.ParsablePrivate

    static name: string
}

interface PicasaWebAlbumClass {
}

/**
 * All the fields in the #GDataPicasaWebAlbumClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class PicasaWebAlbumClass {

    // Own properties of GData-0.0.GData.PicasaWebAlbumClass

    static name: string
}

interface PicasaWebAlbumPrivate {
}

class PicasaWebAlbumPrivate {

    // Own properties of GData-0.0.GData.PicasaWebAlbumPrivate

    static name: string
}

interface PicasaWebCommentClass {
}

/**
 * All the fields in the #GDataPicasaWebCommentClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class PicasaWebCommentClass {

    // Own properties of GData-0.0.GData.PicasaWebCommentClass

    static name: string
}

interface PicasaWebCommentPrivate {
}

class PicasaWebCommentPrivate {

    // Own properties of GData-0.0.GData.PicasaWebCommentPrivate

    static name: string
}

interface PicasaWebFeedClass {
}

/**
 * All the fields in the #GDataPicasaWebFeedClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class PicasaWebFeedClass {

    // Own properties of GData-0.0.GData.PicasaWebFeedClass

    static name: string
}

interface PicasaWebFileClass {
}

/**
 * All the fields in the #GDataPicasaWebFileClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class PicasaWebFileClass {

    // Own properties of GData-0.0.GData.PicasaWebFileClass

    static name: string
}

interface PicasaWebFilePrivate {
}

class PicasaWebFilePrivate {

    // Own properties of GData-0.0.GData.PicasaWebFilePrivate

    static name: string
}

interface PicasaWebQueryClass {
}

/**
 * All the fields in the #GDataPicasaWebQueryClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class PicasaWebQueryClass {

    // Own properties of GData-0.0.GData.PicasaWebQueryClass

    static name: string
}

interface PicasaWebQueryPrivate {
}

class PicasaWebQueryPrivate {

    // Own properties of GData-0.0.GData.PicasaWebQueryPrivate

    static name: string
}

interface PicasaWebServiceClass {
}

/**
 * All the fields in the #GDataPicasaWebServiceClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class PicasaWebServiceClass {

    // Own properties of GData-0.0.GData.PicasaWebServiceClass

    static name: string
}

interface PicasaWebUserClass {
}

/**
 * All the fields in the #GDataPicasaWebUserClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class PicasaWebUserClass {

    // Own properties of GData-0.0.GData.PicasaWebUserClass

    static name: string
}

interface PicasaWebUserPrivate {
}

class PicasaWebUserPrivate {

    // Own properties of GData-0.0.GData.PicasaWebUserPrivate

    static name: string
}

interface QueryClass {

    // Own fields of GData-0.0.GData.QueryClass

    get_query_uri: (self: Query, feed_uri: string, query_uri: GLib.String, params_started: boolean) => void
}

/**
 * All the fields in the #GDataQueryClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class QueryClass {

    // Own properties of GData-0.0.GData.QueryClass

    static name: string
}

interface QueryPrivate {
}

class QueryPrivate {

    // Own properties of GData-0.0.GData.QueryPrivate

    static name: string
}

interface ServiceClass {

    // Own fields of GData-0.0.GData.ServiceClass

    /**
     * the parent class
     * @field 
     */
    parent: GObject.ObjectClass
    /**
     * the version of the GData API used by the service (typically <code class="literal">2</code>)
     * @field 
     */
    api_version: string
    /**
     * the #GType of the feed class (subclass of #GDataFeed) to use for query results from this service
     * @field 
     */
    feed_type: GObject.GType
    append_query_headers: (self: Service, domain: AuthorizationDomain, message: Soup.Message) => void
    parse_error_response: (self: Service, operation_type: OperationType, status: number, reason_phrase: string, response_body: string, length: number) => void
}

/**
 * The class structure for the #GDataService type.
 * @record 
 */
abstract class ServiceClass {

    // Own properties of GData-0.0.GData.ServiceClass

    static name: string
}

interface ServicePrivate {
}

class ServicePrivate {

    // Own properties of GData-0.0.GData.ServicePrivate

    static name: string
}

interface TasksQueryClass {
}

/**
 * All the fields in the #GDataTasksQueryClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class TasksQueryClass {

    // Own properties of GData-0.0.GData.TasksQueryClass

    static name: string
}

interface TasksQueryPrivate {
}

class TasksQueryPrivate {

    // Own properties of GData-0.0.GData.TasksQueryPrivate

    static name: string
}

interface TasksServiceClass {
}

/**
 * All the fields in the #GDataTasksServiceClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class TasksServiceClass {

    // Own properties of GData-0.0.GData.TasksServiceClass

    static name: string
}

interface TasksTaskClass {
}

/**
 * All the fields in the #GDataTasksTaskClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class TasksTaskClass {

    // Own properties of GData-0.0.GData.TasksTaskClass

    static name: string
}

interface TasksTaskPrivate {
}

class TasksTaskPrivate {

    // Own properties of GData-0.0.GData.TasksTaskPrivate

    static name: string
}

interface TasksTasklistClass {
}

/**
 * All the fields in the #GDataTasksTasklistClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class TasksTasklistClass {

    // Own properties of GData-0.0.GData.TasksTasklistClass

    static name: string
}

interface UploadStreamClass {
}

/**
 * All the fields in the #GDataUploadStreamClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class UploadStreamClass {

    // Own properties of GData-0.0.GData.UploadStreamClass

    static name: string
}

interface UploadStreamPrivate {
}

class UploadStreamPrivate {

    // Own properties of GData-0.0.GData.UploadStreamPrivate

    static name: string
}

interface YouTubeCategoryClass {
}

/**
 * All the fields in the #GDataYouTubeCategoryClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class YouTubeCategoryClass {

    // Own properties of GData-0.0.GData.YouTubeCategoryClass

    static name: string
}

interface YouTubeCategoryPrivate {
}

class YouTubeCategoryPrivate {

    // Own properties of GData-0.0.GData.YouTubeCategoryPrivate

    static name: string
}

interface YouTubeCommentClass {
}

/**
 * All the fields in the #GDataYouTubeCommentClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class YouTubeCommentClass {

    // Own properties of GData-0.0.GData.YouTubeCommentClass

    static name: string
}

interface YouTubeCommentPrivate {
}

class YouTubeCommentPrivate {

    // Own properties of GData-0.0.GData.YouTubeCommentPrivate

    static name: string
}

interface YouTubeFeedClass {
}

/**
 * All the fields in the #GDataYouTubeFeedClass structure are private and should
 * never be accessed directly.
 * @record 
 */
abstract class YouTubeFeedClass {

    // Own properties of GData-0.0.GData.YouTubeFeedClass

    static name: string
}

interface YouTubeFeedPrivate {
}

class YouTubeFeedPrivate {

    // Own properties of GData-0.0.GData.YouTubeFeedPrivate

    static name: string
}

interface YouTubeQueryClass {
}

/**
 * All the fields in the #GDataYouTubeQueryClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class YouTubeQueryClass {

    // Own properties of GData-0.0.GData.YouTubeQueryClass

    static name: string
}

interface YouTubeQueryPrivate {
}

class YouTubeQueryPrivate {

    // Own properties of GData-0.0.GData.YouTubeQueryPrivate

    static name: string
}

interface YouTubeServiceClass {
}

/**
 * All the fields in the #GDataYouTubeServiceClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class YouTubeServiceClass {

    // Own properties of GData-0.0.GData.YouTubeServiceClass

    static name: string
}

interface YouTubeServicePrivate {
}

class YouTubeServicePrivate {

    // Own properties of GData-0.0.GData.YouTubeServicePrivate

    static name: string
}

interface YouTubeStateClass {
}

/**
 * All the fields in the #GDataYouTubeStateClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class YouTubeStateClass {

    // Own properties of GData-0.0.GData.YouTubeStateClass

    static name: string
}

interface YouTubeStatePrivate {
}

class YouTubeStatePrivate {

    // Own properties of GData-0.0.GData.YouTubeStatePrivate

    static name: string
}

interface YouTubeVideoClass {
}

/**
 * All the fields in the #GDataYouTubeVideoClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class YouTubeVideoClass {

    // Own properties of GData-0.0.GData.YouTubeVideoClass

    static name: string
}

interface YouTubeVideoPrivate {
}

class YouTubeVideoPrivate {

    // Own properties of GData-0.0.GData.YouTubeVideoPrivate

    static name: string
}

}
export default GData;