/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gdata-0.0-ambient.d.ts';
import './gdata-0.0-import.d.ts';
/**
 * GData-0.0
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Json from '@girs/json-1.0';
import type Goa from '@girs/goa-1.0';

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
     * Error codes for authentication and authorization operations on #GDataClientLoginAuthorizer. See the
     * &lt;ulink type="http" url="http://code.google.com/apis/accounts/docs/AuthForInstalledApps.html#Errors"&gt;online ClientLogin documentation&lt;/ulink&gt; for
     * more information.
     */
    class ClientLoginAuthorizerError extends GLib.Error {
        // Own fields of GData-0.0.ClientLoginAuthorizerError

        /**
         * The login request used a username or password that is not recognized.
         */
        BAD_AUTHENTICATION: number;
        /**
         * The account email address has not been verified. The user will need to access their Google
         * account directly to resolve the issue before logging in using a non-Google application.
         */
        NOT_VERIFIED: number;
        /**
         * The user has not agreed to terms. The user will need to access their Google account directly
         * to resolve the issue before logging in using a non-Google application.
         */
        TERMS_NOT_AGREED: number;
        /**
         * A CAPTCHA is required. (A response with this error code will also contain an image URI and a
         * CAPTCHA token.)
         */
        CAPTCHA_REQUIRED: number;
        /**
         * The user account has been deleted.
         */
        ACCOUNT_DELETED: number;
        /**
         * The user account has been disabled.
         */
        ACCOUNT_DISABLED: number;
        /**
         * The user's access to the specified service has been disabled. (The user account may still be
         * valid.)
         */
        SERVICE_DISABLED: number;
        /**
         * The user's account login details have been migrated to a new system. (This is used for the
         * transition from the old YouTube login details to the new ones.)
         */
        ACCOUNT_MIGRATED: number;
        /**
         * The user's account requires an application-specific password to be used.
         */
        INVALID_SECOND_FACTOR: number;

        // Constructors of GData-0.0.ClientLoginAuthorizerError

        constructor(options: { message: string; code: number });

        // Owm methods of GData-0.0.ClientLoginAuthorizerError

        static quark(): GLib.Quark;
    }

    /**
     * Error codes for #GDataDocumentsService operations.
     */
    class DocumentsServiceError extends GLib.Error {
        // Own fields of GData-0.0.DocumentsServiceError

        /**
         * the content type of a provided file was invalid
         */
        TYPE: number;

        // Constructors of GData-0.0.DocumentsServiceError

        constructor(options: { message: string; code: number });

        // Owm methods of GData-0.0.DocumentsServiceError

        static quark(): GLib.Quark;
    }

    /**
     * Search filter container types.
     */
    enum FreebaseSearchFilterType {
        /**
         * all enclosed elements must match, logically an AND
         */
        ALL,
        /**
         * any of the enclosed elements must match, logically an OR
         */
        ANY,
        /**
         * the match is inverted.
         */
        NOT,
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
    class ParserError extends GLib.Error {
        // Own fields of GData-0.0.ParserError

        /**
         * Error parsing the XML or JSON syntax itself
         */
        PARSING_STRING: number;
        /**
         * Empty document
         */
        EMPTY_DOCUMENT: number;

        // Constructors of GData-0.0.ParserError

        constructor(options: { message: string; code: number });

        // Owm methods of GData-0.0.ParserError

        static quark(): GLib.Quark;
    }

    /**
     * Visibility statuses available for albums on PicasaWeb. For more information, see the
     * &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Visibility"&gt;online documentation&lt;/ulink&gt;.
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
    class ServiceError extends GLib.Error {
        // Own fields of GData-0.0.ServiceError

        /**
         * The service is unavailable due to maintenance or other reasons (e.g. network errors at the server end)
         */
        UNAVAILABLE: number;
        /**
         * The client or server unexpectedly strayed from the protocol (fatal error)
         */
        PROTOCOL_ERROR: number;
        /**
         * An entry has already been inserted, and cannot be re-inserted
         */
        ENTRY_ALREADYSERTED: number;
        /**
         * The user attempted to do something which required authentication, and they weren't authenticated or
         * didn't have authorization for the operation
         */
        AUTHENTICATION_REQUIRED: number;
        /**
         * A requested resource (feed or entry) was not found on the server
         */
        NOT_FOUND: number;
        /**
         * There was a conflict when updating an entry on the server; the server-side copy was modified between downloading
         * and uploading the modified entry
         */
        CONFLICT: number;
        /**
         * Generic error for a forbidden action (not due to having insufficient permissions)
         */
        FORBIDDEN: number;
        /**
         * A given query parameter was invalid for the query type
         */
        BAD_QUERY_PARAMETER: number;
        /**
         * The service is unavailable due to local network errors (e.g. no Internet connection)
         */
        NETWORK_ERROR: number;
        /**
         * The service is unavailable due to proxy network errors (e.g. proxy unreachable)
         */
        PROXY_ERROR: number;
        /**
         * Generic error when running a batch operation and the whole operation fails
         */
        WITH_BATCH_OPERATION: number;
        /**
         * The API request quota for this
         * developer account has been exceeded for the current time period (e.g. day).
         * Try again later. (Since: 0.16.0.)
         */
        API_QUOTA_EXCEEDED: number;

        // Constructors of GData-0.0.ServiceError

        constructor(options: { message: string; code: number });

        // Owm methods of GData-0.0.ServiceError

        static quark(): GLib.Quark;
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
     * Video formats available on YouTube. For more information, see the
     * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#formatsp"&gt;online documentation&lt;/ulink&gt;.
     */
    enum YouTubeFormat {
        /**
         * retrieve videos in all formats when querying the service
         */
        UNKNOWN,
        /**
         * RTSP streaming URI for mobile video playback; H.263 video (up to 176×144) and AMR audio
         */
        RTSP_H263_AMR,
        /**
         * HTTP URI to the embeddable player (SWF) for this video
         */
        HTTP_SWF,
        /**
         * RTSP streaming URI for mobile video playback; MPEG-4 SP video (up to 176×144) and AAC audio
         */
        RTSP_MPEG4_AAC,
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
     * &lt;ulink type="http" url="https://developers.google.com/youtube/v3/docs/search/list#safeSearch"&gt;online documentation&lt;/ulink&gt;.
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
    class YouTubeServiceError extends GLib.Error {
        // Own fields of GData-0.0.YouTubeServiceError

        /**
         * the API request quota for this developer account has been exceeded
         */
        API_QUOTA_EXCEEDED: number;
        /**
         * the entry (e.g. video) quota for this user account has been exceeded
         */
        ENTRY_QUOTA_EXCEEDED: number;
        /**
         * the currently authenticated user doesn't have a YouTube channel, but the current action requires one;
         * if this error is received, inform the user that they need a YouTube channel, and provide a link to
         * &lt;ulink type="http" url="https://www.youtube.com/create_channel"&gt;https://www.youtube.com/create_channel&lt;/ulink&gt;
         */
        CHANNEL_REQUIRED: number;

        // Constructors of GData-0.0.YouTubeServiceError

        constructor(options: { message: string; code: number });

        // Owm methods of GData-0.0.YouTubeServiceError

        static quark(): GLib.Quark;
    }

    /**
     * Sort orders for the search results from queries. They specify the order of the designated order field.
     */
    enum YouTubeSortOrder {
        /**
         * do not explicitly sort in any sense
         */
        NONE,
        /**
         * sort results in ascending order of the order field
         */
        ASCENDING,
        /**
         * sort results in descending order of the order field
         */
        DESCENDING,
    }
    /**
     * Standard feed types for standard feed queries with
     * gdata_youtube_service_query_standard_feed(). For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/youtube/2.0/developers_guide_protocol_video_feeds#Standard_feeds"&gt;online
     * documentation&lt;/ulink&gt;.
     */
    enum YouTubeStandardFeedType {
        /**
         * This feed contains the most highly rated
         *   YouTube videos. Deprecated: 0.17.0: Google no longer supports this feed
         *   type, and it will return results equivalent to
         *   %GDATA_YOUTUBE_MOST_POPULAR_FEED.
         */
        TOP_RATED_FEED,
        /**
         * This feed contains videos most frequently
         *   flagged as favorite videos. Deprecated: 0.17.0: Google no longer
         *   supports this feed type, and it will return results equivalent to
         *   %GDATA_YOUTUBE_MOST_POPULAR_FEED.
         */
        TOP_FAVORITES_FEED,
        /**
         * This feed contains the most frequently
         *   watched YouTube videos. Deprecated: 0.17.0: Google no longer supports
         *   this feed type, and it will return results equivalent to
         *   %GDATA_YOUTUBE_MOST_POPULAR_FEED.
         */
        MOST_VIEWED_FEED,
        /**
         * This feed contains the most popular YouTube
         *   videos, selected using an algorithm that combines many different signals to
         *   determine overall popularity. As of version 0.17.0, this is the only
         *   supported feed type.
         */
        MOST_POPULAR_FEED,
        /**
         * This feed contains the videos most recently
         *   submitted to YouTube. Deprecated: 0.17.0: Google no longer supports
         *   this feed type, and it will return results equivalent to
         *   %GDATA_YOUTUBE_MOST_POPULAR_FEED.
         */
        MOST_RECENT_FEED,
        /**
         * This feed contains the YouTube videos
         *   that have received the most comments. Deprecated: 0.17.0: Google no
         *   longer supports this feed type, and it will return results equivalent to
         *   %GDATA_YOUTUBE_MOST_POPULAR_FEED.
         */
        MOST_DISCUSSED_FEED,
        /**
         * This feed contains the YouTube videos that
         *   receive the most links from other websites. Deprecated: 0.17.0: Google
         *   no longer supports this feed type, and it will return results equivalent to
         *   %GDATA_YOUTUBE_MOST_POPULAR_FEED.
         */
        MOST_LINKED_FEED,
        /**
         * This feed contains YouTube videos that
         *   receive the most video responses. Deprecated: 0.17.0: Google no longer
         *   supports this feed type, and it will return results equivalent to
         *   %GDATA_YOUTUBE_MOST_POPULAR_FEED.
         */
        MOST_RESPONDED_FEED,
        /**
         * This feed contains videos recently
         *   featured on the YouTube home page or featured videos tab. Deprecated:
         *   0.17.0: Google no longer supports this feed type, and it will return
         *   results equivalent to %GDATA_YOUTUBE_MOST_POPULAR_FEED.
         */
        RECENTLY_FEATURED_FEED,
        /**
         * This feed contains videos suitable for
         *   playback on mobile devices. Deprecated: 0.17.0: Google no longer
         *   supports this feed type, and it will return results equivalent to
         *   %GDATA_YOUTUBE_MOST_POPULAR_FEED.
         */
        WATCH_ON_MOBILE_FEED,
    }
    /**
     * Video uploaders, allowing queries to be limited to returning videos uploaded by YouTube partners.
     */
    enum YouTubeUploader {
        /**
         * retrieve all videos, regardless of who uploaded them
         */
        ALL,
        /**
         * retrieve only videos uploaded by YouTube partners
         */
        PARTNER,
    }
    /**
     * The users specified by the #GDataAccessRule have no rights.
     */
    const ACCESS_ROLE_NONE: string;
    /**
     * The #GDataAccessRule applies to all users.
     */
    const ACCESS_SCOPE_DEFAULT: string;
    /**
     * The #GDataAccessRule applies to all users in a Google Apps For Your Domain domain, given in #GDataAccessRule:scope-value.
     */
    const ACCESS_SCOPE_DOMAIN: string;
    /**
     * The #GDataAccessRule applies to a single individual, whose e-mail address is given in #GDataAccessRule:scope-value.
     */
    const ACCESS_SCOPE_USER: string;
    /**
     * The users specified by the #GDataCalendarAccessRule have full edit access to
     * the calendar, except they can’t change the calendar’s access rules.
     */
    const CALENDAR_ACCESS_ROLE_EDITOR: string;
    /**
     * The users specified by the #GDataCalendarAccessRule can only see the
     * free/busy information on the calendar; not event details.
     */
    const CALENDAR_ACCESS_ROLE_FREE_BUSY: string;
    /**
     * The users specified by the #GDataCalendarAccessRule have full owner access
     * to the calendar.
     */
    const CALENDAR_ACCESS_ROLE_OWNER: string;
    /**
     * The users specified by the #GDataCalendarAccessRule have read-only access to
     * the calendar.
     */
    const CALENDAR_ACCESS_ROLE_READ: string;
    /**
     * The users specified by the #GDataCalendarAccessRule have full administrator
     * access to the calendar server. This is only available in Google Apps For
     * Your Domain.
     */
    const CALENDAR_ACCESS_ROLE_ROOT: string;
    /**
     * A schema for categories which label the entry they're applied to in some way, such as starring it. The semantics of the various labels
     * (such as %GDATA_CATEGORY_SCHEMA_LABELS_STARRED) are service-specific.
     */
    const CATEGORY_SCHEMA_LABELS: string;
    /**
     * The contact is female.
     */
    const CONTACTS_GENDER_FEMALE: string;
    /**
     * The contact is male.
     */
    const CONTACTS_GENDER_MALE: string;
    /**
     * The system group ID for the "My Contacts" system group.
     */
    const CONTACTS_GROUP_CONTACTS: string;
    /**
     * The system group ID for the "Coworkers" system group.
     */
    const CONTACTS_GROUP_COWORKERS: string;
    /**
     * The system group ID for the "Family" system group.
     */
    const CONTACTS_GROUP_FAMILY: string;
    /**
     * The system group ID for the "Friends" system group.
     */
    const CONTACTS_GROUP_FRIENDS: string;
    /**
     * The contact is of high importance.
     */
    const CONTACTS_PRIORITY_HIGH: string;
    /**
     * The contact is of low importance.
     */
    const CONTACTS_PRIORITY_LOW: string;
    /**
     * The contact is of normal importance.
     */
    const CONTACTS_PRIORITY_NORMAL: string;
    /**
     * The contact's data is confidential.
     */
    const CONTACTS_SENSITIVITY_CONFIDENTIAL: string;
    /**
     * The contact's data is of normal sensitivity.
     */
    const CONTACTS_SENSITIVITY_NORMAL: string;
    /**
     * The contact's data is personal.
     */
    const CONTACTS_SENSITIVITY_PERSONAL: string;
    /**
     * The contact's data is private.
     */
    const CONTACTS_SENSITIVITY_PRIVATE: string;
    /**
     * The users specified by the #GDataAccessRule have full owner access to the document. This allows them to modify the access rules and delete
     * the document, amongst other things.
     */
    const DOCUMENTS_ACCESS_ROLE_OWNER: string;
    /**
     * The users specified by the #GDataAccessRule have read-only access to the document.
     */
    const DOCUMENTS_ACCESS_ROLE_READER: string;
    /**
     * The users specified by the #GDataAccessRule have write access to the document. They cannot modify the access rules or delete the document.
     */
    const DOCUMENTS_ACCESS_ROLE_WRITER: string;
    /**
     * The export format for JPEG image format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_drawings"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_DRAWING_JPEG: string;
    /**
     * The export format for Portable Document Format (PDF).
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_drawings"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_DRAWING_PDF: string;
    /**
     * The export format for Portable Network Graphics (PNG) image format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_drawings"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_DRAWING_PNG: string;
    /**
     * The export format for Scalable Vector Graphics (SVG) image format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_drawings"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_DRAWING_SVG: string;
    /**
     * The export format for Portable Document Format (PDF).
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_PRESENTATION_PDF: string;
    /**
     * The export format for Portable Network Graphics (PNG) image format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_PRESENTATION_PNG: string;
    /**
     * The export format for Microsoft PowerPoint (PPT) format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_PRESENTATION_PPT: string;
    /**
     * The export format for Adobe Flash (SWF) format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_PRESENTATION_SWF: string;
    /**
     * The export format for plain text format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_PRESENTATION_TXT: string;
    /**
     * The #GDataDocumentsProperty having the visibility set to FALSE (default) corresponds to having the visibility property on a Drive Property Resource
     * set to "PRIVATE". This makes the Property Resource accessible only by the app that created it.
     */
    const DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE: string;
    /**
     * The #GDataDocumentsProperty having the visibility set to TRUE corresponds to having the visibility property
     * on a Drive Property Resource
     * set to "PUBLIC". This makes the Property Resource visible to other apps.
     */
    const DOCUMENTS_PROPERTY_VISIBILITY_PUBLIC: string;
    /**
     * The export format for Comma-Separated Values (CSV) format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_SPREADSHEET_CSV: string;
    /**
     * The export format for HyperText Markup Language (HTML) format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_SPREADSHEET_HTML: string;
    /**
     * The export format for OpenDocument Spreadsheet (ODS) format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_SPREADSHEET_ODS: string;
    /**
     * The export format for Portable Document Format (PDF).
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_SPREADSHEET_PDF: string;
    /**
     * The export format for Tab-Separated Values (TSV) format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_SPREADSHEET_TSV: string;
    /**
     * The export format for Microsoft Excel spreadsheet (XLS) format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_SPREADSHEET_XLS: string;
    /**
     * The export format for Microsoft Word (DOC) format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_TEXT_DOC: string;
    /**
     * The export format for HyperText Markup Language (HTML) format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_TEXT_HTML: string;
    /**
     * The export format for JPEG image format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_TEXT_JPEG: string;
    /**
     * The export format for OpenDocument Text (ODT) format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_TEXT_ODT: string;
    /**
     * The export format for Portable Document Format (PDF).
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_TEXT_PDF: string;
    /**
     * The export format for Portable Network Graphics (PNG) image format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_TEXT_PNG: string;
    /**
     * The export format for Rich Text Format (RTF).
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_TEXT_RTF: string;
    /**
     * The export format for plain text format.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_TEXT_TXT: string;
    /**
     * The export format for a ZIP archive containing images and exported HTML.
     *
     * For more information, see the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents"&gt;
     * GData protocol specification&lt;/ulink&gt;.
     */
    const DOCUMENTS_TEXT_ZIP: string;
    /**
     * The relation type URI for a contact's free/busy calendar.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_CALENDAR_FREE_BUSY: string;
    /**
     * The relation type URI for a contact's home calendar.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_CALENDAR_HOME: string;
    /**
     * The relation type URI for a contact's work calendar.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_CALENDAR_WORK: string;
    /**
     * The relation type URI for an anniversary event.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_EVENT_ANNIVERSARY: string;
    /**
     * The relation type URI for a miscellaneous event.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_EVENT_OTHER: string;
    /**
     * The relation type URI for an account number identifier.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_EXTERNAL_ID_ACCOUNT: string;
    /**
     * The relation type URI for a customer identifier.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_EXTERNAL_ID_CUSTOMER: string;
    /**
     * The relation type URI for a network identifier.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_EXTERNAL_ID_NETWORK: string;
    /**
     * The relation type URI for an identifier related to an organization the contact is associated with.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_EXTERNAL_ID_ORGANIZATION: string;
    /**
     * The relation type URI for a jot about a contact's home.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_JOT_HOME: string;
    /**
     * The relation type URI for a jot with keywords about a contact.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_JOT_KEYWORDS: string;
    /**
     * The relation type URI for a jot about an other facet of a contact.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_JOT_OTHER: string;
    /**
     * The relation type URI for a jot about the relationship between a contact and the user.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_JOT_USER: string;
    /**
     * The relation type URI for a jot about a contact's work.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_JOT_WORK: string;
    /**
     * The relation type URI for a contact's assistant.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_ASSISTANT: string;
    /**
     * The relation type URI for a contact's brother.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_BROTHER: string;
    /**
     * The relation type URI for a contact's child.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_CHILD: string;
    /**
     * The relation type URI for a contact's domestic partner.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_DOMESTIC_PARTNER: string;
    /**
     * The relation type URI for a contact's father.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_FATHER: string;
    /**
     * The relation type URI for a contact's friend.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_FRIEND: string;
    /**
     * The relation type URI for a contact's manager.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_MANAGER: string;
    /**
     * The relation type URI for a contact's mother.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_MOTHER: string;
    /**
     * The relation type URI for a contact's parent.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_PARENT: string;
    /**
     * The relation type URI for a contact's business partner.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_PARTNER: string;
    /**
     * The relation type URI for a contact's referrer.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_REFERRER: string;
    /**
     * The relation type URI for a contact's (general) family relative.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_RELATIVE: string;
    /**
     * The relation type URI for a contact's sister.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_SISTER: string;
    /**
     * The relation type URI for a contact's spouse.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_RELATION_SPOUSE: string;
    /**
     * The relation type URI for a contact's blog.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_WEBSITE_BLOG: string;
    /**
     * The relation type URI for a contact's FTP site.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_WEBSITE_FTP: string;
    /**
     * The relation type URI for a contact's home website.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_WEBSITE_HOME: string;
    /**
     * The relation type URI for a contact's home page.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_WEBSITE_HOME_PAGE: string;
    /**
     * The relation type URI for a miscellaneous website of the contact.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_WEBSITE_OTHER: string;
    /**
     * The relation type URI for a contact's online profile.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_WEBSITE_PROFILE: string;
    /**
     * The relation type URI for a contact's work website.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;
     * gContact specification&lt;/ulink&gt;.
     */
    const GCONTACT_WEBSITE_WORK: string;
    /**
     * The address is for general usage. Value for #GDataGDPostalAddress:usage.
     */
    const GD_ADDRESS_USAGE_GENERAL: string;
    /**
     * The address is for local usage. Value for #GDataGDPostalAddress:usage.
     */
    const GD_ADDRESS_USAGE_LOCAL: string;
    /**
     * The relation type URI for a home e-mail address.
     */
    const GD_EMAIL_ADDRESS_HOME: string;
    /**
     * The relation type URI for a miscellaneous e-mail address.
     */
    const GD_EMAIL_ADDRESS_OTHER: string;
    /**
     * The relation type URI for a work e-mail address.
     */
    const GD_EMAIL_ADDRESS_WORK: string;
    /**
     * The event has been canceled.
     */
    const GD_EVENT_STATUS_CANCELED: string;
    /**
     * The event has been planned and confirmed.
     */
    const GD_EVENT_STATUS_CONFIRMED: string;
    /**
     * The event has been planned, but only tentatively scheduled.
     */
    const GD_EVENT_STATUS_TENTATIVE: string;
    /**
     * The event consumes time in calendars; its time will be marked as busy in a free/busy search.
     */
    const GD_EVENT_TRANSPARENCY_OPAQUE: string;
    /**
     * The event does not consume time in calendars; its time will be not marked as busy in a free/busy search.
     */
    const GD_EVENT_TRANSPARENCY_TRANSPARENT: string;
    /**
     * The event is visible to only certain people.
     */
    const GD_EVENT_VISIBILITY_CONFIDENTIAL: string;
    /**
     * The event's visibility is inherited from the preferences of its owner.
     */
    const GD_EVENT_VISIBILITY_DEFAULT: string;
    /**
     * The event is visible to very few people.
     */
    const GD_EVENT_VISIBILITY_PRIVATE: string;
    /**
     * The event is visible to most people.
     */
    const GD_EVENT_VISIBILITY_PUBLIC: string;
    /**
     * The relation type URI for a home IM address.
     */
    const GD_IM_ADDRESS_HOME: string;
    /**
     * The relation type URI for a Microsoft NetMeeting IM address.
     */
    const GD_IM_ADDRESS_NETMEETING: string;
    /**
     * The relation type URI for a miscellaneous IM address.
     */
    const GD_IM_ADDRESS_OTHER: string;
    /**
     * The relation type URI for a work IM address.
     */
    const GD_IM_ADDRESS_WORK: string;
    /**
     * The protocol type URI for an AIM IM address.
     */
    const GD_IM_PROTOCOL_AIM: string;
    /**
     * The protocol type URI for a Google Talk IM address.
     */
    const GD_IM_PROTOCOL_GOOGLE_TALK: string;
    /**
     * The protocol type URI for an ICQ IM address.
     */
    const GD_IM_PROTOCOL_ICQ: string;
    /**
     * The protocol type URI for a Jabber IM address.
     */
    const GD_IM_PROTOCOL_JABBER: string;
    /**
     * The protocol type URI for an Windows Live Messenger IM address.
     */
    const GD_IM_PROTOCOL_LIVE_MESSENGER: string;
    /**
     * The protocol type URI for a QQ IM address.
     */
    const GD_IM_PROTOCOL_QQ: string;
    /**
     * The protocol type URI for a Skype IM address.
     */
    const GD_IM_PROTOCOL_SKYPE: string;
    /**
     * The protocol type URI for a Yahoo! Messenger IM address.
     */
    const GD_IM_PROTOCOL_YAHOO_MESSENGER: string;
    /**
     * Parcels and letters can be sent to the address. Value for #GDataGDPostalAddress:mail-class.
     */
    const GD_MAIL_CLASS_BOTH: string;
    /**
     * Only letters can be sent to the address. Value for #GDataGDPostalAddress:mail-class.
     */
    const GD_MAIL_CLASS_LETTERS: string;
    /**
     * Address is purely locational and cannot be used for mail. Value for #GDataGDPostalAddress:mail-class.
     */
    const GD_MAIL_CLASS_NEITHER: string;
    /**
     * Only parcels can be sent to the address. Value for #GDataGDPostalAddress:mail-class.
     */
    const GD_MAIL_CLASS_PARCELS: string;
    /**
     * The relation type URI for a miscellaneous organization.
     */
    const GD_ORGANIZATION_OTHER: string;
    /**
     * The relation type URI for a work organization.
     */
    const GD_ORGANIZATION_WORK: string;
    /**
     * The relation type URI for the phone number of an assistant.
     */
    const GD_PHONE_NUMBER_ASSISTANT: string;
    /**
     * The relation type URI for the phone number of a callback service.
     */
    const GD_PHONE_NUMBER_CALLBACK: string;
    /**
     * The relation type URI for the phone number of a car phone.
     */
    const GD_PHONE_NUMBER_CAR: string;
    /**
     * The relation type URI for the main phone number of a company.
     */
    const GD_PHONE_NUMBER_COMPANY_MAIN: string;
    /**
     * The relation type URI for the phone number of a fax machine.
     */
    const GD_PHONE_NUMBER_FAX: string;
    /**
     * The relation type URI for a home phone number.
     */
    const GD_PHONE_NUMBER_HOME: string;
    /**
     * The relation type URI for the phone number of a home fax machine.
     */
    const GD_PHONE_NUMBER_HOME_FAX: string;
    /**
     * The relation type URI for the phone number of an ISDN phone.
     */
    const GD_PHONE_NUMBER_ISDN: string;
    /**
     * The relation type URI for the main phone number of a person.
     */
    const GD_PHONE_NUMBER_MAIN: string;
    /**
     * The relation type URI for the phone number of a mobile phone.
     */
    const GD_PHONE_NUMBER_MOBILE: string;
    /**
     * The relation type URI for a miscellaneous phone number.
     */
    const GD_PHONE_NUMBER_OTHER: string;
    /**
     * The relation type URI for a miscellaneous fax machine's phone number.
     */
    const GD_PHONE_NUMBER_OTHER_FAX: string;
    /**
     * The relation type URI for the phone number of a pager.
     */
    const GD_PHONE_NUMBER_PAGER: string;
    /**
     * The relation type URI for the phone number of a radio phone.
     */
    const GD_PHONE_NUMBER_RADIO: string;
    /**
     * The relation type URI for the phone number of a telex machine.
     */
    const GD_PHONE_NUMBER_TELEX: string;
    /**
     * The relation type URI for the phone number of a TTY TTD.
     */
    const GD_PHONE_NUMBER_TTY_TDD: string;
    /**
     * The relation type URI for the phone number of a work place.
     */
    const GD_PHONE_NUMBER_WORK: string;
    /**
     * The relation type URI for the phone number of a work fax machine.
     */
    const GD_PHONE_NUMBER_WORK_FAX: string;
    /**
     * The relation type URI for the phone number of a work mobile phone.
     */
    const GD_PHONE_NUMBER_WORK_MOBILE: string;
    /**
     * The relation type URI for the phone number of a work pager.
     */
    const GD_PHONE_NUMBER_WORK_PAGER: string;
    /**
     * The relation type URI for the postal address of a home.
     */
    const GD_POSTAL_ADDRESS_HOME: string;
    /**
     * The relation type URI for a miscellaneous postal address.
     */
    const GD_POSTAL_ADDRESS_OTHER: string;
    /**
     * The relation type URI for the postal address of a workplace.
     */
    const GD_POSTAL_ADDRESS_WORK: string;
    /**
     * The #GDataGDReminder:method for an alert to appear in the user's browser.
     */
    const GD_REMINDER_ALERT: string;
    /**
     * The #GDataGDReminder:method for an alert to be sent to the user by e-mail.
     */
    const GD_REMINDER_EMAIL: string;
    /**
     * The #GDataGDReminder:method for an alert to be sent to the user by SMS.
     */
    const GD_REMINDER_SMS: string;
    /**
     * The relation type URI for an event location.
     */
    const GD_WHERE_EVENT: string;
    /**
     * The relation type URI for an alternate event location, such as a video conference site.
     */
    const GD_WHERE_EVENT_ALTERNATE: string;
    /**
     * The relation type URI for an event's parking lot.
     */
    const GD_WHERE_EVENT_PARKING: string;
    /**
     * The relation type URI for a general meeting or event attendee.
     */
    const GD_WHO_EVENT_ATTENDEE: string;
    /**
     * The relation type URI for an event organizer (not necessarily an attendee).
     */
    const GD_WHO_EVENT_ORGANIZER: string;
    /**
     * The relation type URI for an event performer, which is similar to %GDATA_GD_WHO_EVENT_SPEAKER, but with more emphasis on art rather than speaking.
     */
    const GD_WHO_EVENT_PERFORMER: string;
    /**
     * The relation type URI for a speaker at an event.
     */
    const GD_WHO_EVENT_SPEAKER: string;
    /**
     * The relation type URI of the access control list location for this resource.
     *
     * For more information, see the
     * &lt;ulink type="http" url="http://code.google.com/apis/calendar/data/2.0/developers_guide_protocol.html#SharingACalendar"&gt;ACL specification&lt;/ulink&gt;.
     */
    const LINK_ACCESS_CONTROL_LIST: string;
    /**
     * The relation type URI for alternate resources to the current one.
     *
     * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute"&gt;
     * Atom specification&lt;/ulink&gt;.
     */
    const LINK_ALTERNATE: string;
    /**
     * The relation type URI for the batch operation URI for a given #GDataFeed.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/batch.html#Submit_HTTP"&gt;GData specification&lt;/ulink&gt;.
     */
    const LINK_BATCH: string;
    /**
     * The relation type URI of the edit location for this resource.
     *
     * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/protocol/atom-protocol-spec.php#new-link-relation"&gt;
     * Atom Publishing Protocol specification&lt;/ulink&gt;.
     */
    const LINK_EDIT: string;
    /**
     * The relation type URI of the edit location for media resources attached to this resource.
     *
     * For more information, see the
     * &lt;ulink type="http" url="http://www.atomenabled.org/developers/protocol/atom-protocol-spec.php#new-media-link-relation"&gt;
     * Atom Publishing Protocol specification&lt;/ulink&gt;.
     */
    const LINK_EDIT_MEDIA: string;
    /**
     * The relation type URI for attached objects which may be large in size.
     *
     * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute"&gt;
     * Atom specification&lt;/ulink&gt;.
     */
    const LINK_ENCLOSURE: string;
    /**
     * The relation type URI of the of the location of the parent resource in a
     * hierarchy of entries.
     *
     * This is an undocumented GData-specific addition to the Atom specification,
     * and is not included in the GData documentation except in examples and in the
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/v2/schema/document_list_atom.rnc"&gt;
     * RelaxNG schema&lt;/ulink&gt;.
     */
    const LINK_PARENT: string;
    /**
     * The relation type URI for resources related to the current one.
     *
     * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute"&gt;
     * Atom specification&lt;/ulink&gt;.
     */
    const LINK_RELATED: string;
    /**
     * The relation type URI of the resumable upload location for resources attached to this resource.
     *
     * For more information, see the
     * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html#ResumableUploadInitiate"&gt;GData resumable upload protocol
     * specification&lt;/ulink&gt;.
     */
    const LINK_RESUMABLE_CREATE_MEDIA: string;
    /**
     * The relation type URI of the resumable update location for resources attached to this resource.
     *
     * For more information, see the
     * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html#ResumableUploadInitiate"&gt;GData resumable upload protocol
     * specification&lt;/ulink&gt;.
     */
    const LINK_RESUMABLE_EDIT_MEDIA: string;
    /**
     * The relation type URI for the current resource.
     *
     * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute"&gt;
     * Atom specification&lt;/ulink&gt;.
     */
    const LINK_SELF: string;
    /**
     * The relation type URI for the source document of the current resource.
     *
     * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute"&gt;
     * Atom specification&lt;/ulink&gt;.
     */
    const LINK_VIA: string;
    /**
     * Evaluates to the major version of the GData headers at compile time.
     * (e.g. in libgdata version 1.2.3 this is 1).
     */
    const MAJOR_VERSION: number;
    /**
     * Evaluates to the micro version of the GData headers at compile time.
     * (e.g. in libgdata version 1.2.3 this is 3).
     */
    const MICRO_VERSION: number;
    /**
     * Evaluates to the minor version of the GData headers at compile time.
     * (e.g. in libgdata version 1.2.3 this is 2).
     */
    const MINOR_VERSION: number;
    /**
     * OAuth 2 redirect URI for out-of-band authorisation code transfer, where the
     * user is shown the authorisation code and asked to copy it.
     *
     * See
     * &lt;ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#choosingredirecturi"&gt;reference
     * documentation&lt;/ulink&gt; for details.
     */
    const OAUTH2_REDIRECT_URI_OOB: string;
    /**
     * OAuth 2 redirect URI for out-of-band authorisation code transfer, where the
     * user is not shown the authorisation code or asked to copy it.
     *
     * See
     * &lt;ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#choosingredirecturi"&gt;reference
     * documentation&lt;/ulink&gt; for details.
     */
    const OAUTH2_REDIRECT_URI_OOB_AUTO: string;
    /**
     * There was an error while processing or thumbnailing the video and it should be deleted.
     */
    const PICASAWEB_VIDEO_STATUS_FAILED: string;
    /**
     * The video has been processed and thumbnailed.
     */
    const PICASAWEB_VIDEO_STATUS_FINAL: string;
    /**
     * The video is still being processed.
     */
    const PICASAWEB_VIDEO_STATUS_PENDING: string;
    /**
     * The video has been processed, but still needs thumbnailing.
     */
    const PICASAWEB_VIDEO_STATUS_READY: string;
    /**
     * A value for #GDataTasksTask:status indicating the task has been completed.
     *
     * Reference:
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/tasks/v1/reference/tasks#status"&gt;
     * Google Tasks documentation&lt;/ulink&gt;.
     */
    const TASKS_STATUS_COMPLETED: string;
    /**
     * A value for #GDataTasksTask:status indicating the task still needs action
     * before it is complete.
     *
     * Reference:
     * &lt;ulink type="http" url="https://developers.google.com/google-apps/tasks/v1/reference/tasks#status"&gt;
     * Google Tasks documentation&lt;/ulink&gt;.
     */
    const TASKS_STATUS_NEEDS_ACTION: string;
    /**
     * An action to comment on a video, for use with gdata_youtube_video_set_access_control().
     */
    const YOUTUBE_ACTION_COMMENT: string;
    /**
     * An action to rate other users' comments on a video, for use with gdata_youtube_video_set_access_control().
     */
    const YOUTUBE_ACTION_COMMENT_VOTE: string;
    /**
     * An action to embed a video on third-party websites, for use with gdata_youtube_video_set_access_control().
     */
    const YOUTUBE_ACTION_EMBED: string;
    /**
     * An action to rate a video, for use with gdata_youtube_video_set_access_control().
     */
    const YOUTUBE_ACTION_RATE: string;
    /**
     * An action allowing YouTube to show the video on mobile phones and televisions, for use with gdata_youtube_video_set_access_control().
     */
    const YOUTUBE_ACTION_SYNDICATE: string;
    /**
     * An action to add a video response to a video, for use with gdata_youtube_video_set_access_control().
     */
    const YOUTUBE_ACTION_VIDEO_RESPOND: string;
    /**
     * The aspect ratio for widescreen (16:9) videos.
     *
     * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:aspectratio"&gt;
     * online documentation&lt;/ulink&gt;.
     */
    const YOUTUBE_ASPECT_RATIO_WIDESCREEN: string;
    /**
     * The credited entity is a YouTube partner.
     */
    const YOUTUBE_CREDIT_ENTITY_PARTNER: string;
    /**
     * Value for #GDataYouTubeQuery:license to restrict search results to only videos which are Creative Commons licensed. Specifically, the license
     * is the Creative Commons Attribution 3.0 Unported license; see the
     * &lt;ulink type="http" url="http://www.google.com/support/youtube/bin/answer.py?hl=en&amp;answer=1284989"&gt;YouTube Help&lt;/ulink&gt; for more information.
     */
    const YOUTUBE_LICENSE_CC: string;
    /**
     * Value for #GDataYouTubeQuery:license to restrict search results to only videos which are under the standard YouTube license.
     */
    const YOUTUBE_LICENSE_STANDARD: string;
    /**
     * A rating type to pass to gdata_youtube_video_get_media_rating() for ratings by the &lt;ulink type="http" url="http://www.mpaa.org/"&gt;MPAA&lt;/ulink&gt;. The
     * values which can be returned for such ratings are: &lt;code class="literal"&gt;g&lt;/code&gt;, &lt;code class="literal"&gt;pg&lt;/code&gt;,
     * &lt;code class="literal"&gt;pg-13&lt;/code&gt;, &lt;code class="literal"&gt;r&lt;/code&gt; and &lt;code class="literal"&gt;nc-17&lt;/code&gt;.
     */
    const YOUTUBE_RATING_TYPE_MPAA: string;
    /**
     * A rating type to pass to gdata_youtube_video_get_media_rating() for “simple” ratings. The values which can be returned for such ratings are:
     * &lt;code class="literal"&gt;adult&lt;/code&gt; and &lt;code class="literal"&gt;nonadult&lt;/code&gt;.
     */
    const YOUTUBE_RATING_TYPE_SIMPLE: string;
    /**
     * A rating type to pass to gdata_youtube_video_get_media_rating() for ratings following the FCC
     * &lt;ulink type="http" url="http://www.fcc.gov/vchip/"&gt;V-Chip&lt;/ulink&gt; system. The values which can be returned for such ratings are:
     * &lt;code class="literal"&gt;tv-y&lt;/code&gt;, &lt;code class="literal"&gt;tv-y7&lt;/code&gt;, &lt;code class="literal"&gt;tv-y7-fv&lt;/code&gt;, &lt;code class="literal"&gt;tv-g&lt;/code&gt;,
     * &lt;code class="literal"&gt;tv-pg&lt;/code&gt;, &lt;code class="literal"&gt;tv-14&lt;/code&gt; and &lt;code class="literal"&gt;tv-ma&lt;/code&gt;.
     */
    const YOUTUBE_RATING_TYPE_V_CHIP: string;
    function client_login_authorizer_error_quark(): GLib.Quark;
    /**
     * Parses `hexadecimal` and returns a #GDataColor describing it in `color`.
     *
     * `hexadecimal` should be in the form &lt;literal&gt;#&lt;replaceable&gt;rr&lt;/replaceable&gt;&lt;replaceable&gt;gg&lt;/replaceable&gt;&lt;replaceable&gt;bb&lt;/replaceable&gt;&lt;/literal&gt;,
     * where &lt;replaceable&gt;rr&lt;/replaceable&gt; is a two-digit hexadecimal red intensity value, &lt;replaceable&gt;gg&lt;/replaceable&gt; is green
     * and &lt;replaceable&gt;bb&lt;/replaceable&gt; is blue. The hash is optional.
     * @param hexadecimal a hexadecimal color string
     * @returns %TRUE on success, %FALSE otherwise
     */
    function color_from_hexadecimal(hexadecimal: string): boolean;
    function documents_service_error_quark(): GLib.Quark;
    function parser_error_quark(): GLib.Quark;
    function service_error_quark(): GLib.Quark;
    function youtube_service_error_quark(): GLib.Quark;
    interface BatchOperationCallback {
        (operation_id: number, operation_type: BatchOperationType, entry: Entry, error: GLib.Error): void;
    }
    interface QueryProgressCallback {
        (entry: Entry, entry_key: number, entry_count: number): void;
    }
    module APPCategories {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataAPPCategories structure are private and should never be accessed directly.
     */
    class APPCategories extends Parsable {
        // Own properties of GData-0.0.APPCategories

        /**
         * Whether entries may use categories not in this category list.
         *
         * API reference: &lt;ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appCategories2"&gt;app:categories&lt;/ulink&gt;
         */
        readonly is_fixed: boolean;
        /**
         * Whether entries may use categories not in this category list.
         *
         * API reference: &lt;ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appCategories2"&gt;app:categories&lt;/ulink&gt;
         */
        readonly isFixed: boolean;

        // Owm methods of GData-0.0.APPCategories

        /**
         * Returns a list of the categories in this category list.
         * @returns a #GList of #GDataCategorys
         */
        get_categories(): Category[];
    }

    module AccessRule {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataAccessRule structure are private and should never be accessed directly.
     */
    class AccessRule extends Entry {
        // Own properties of GData-0.0.AccessRule

        /**
         * The last time the access rule was edited. If the rule has not been edited yet, the content indicates the time it was created.
         *
         * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited"&gt;
         * Atom Publishing Protocol specification&lt;/ulink&gt;.
         */
        readonly edited: number;
        /**
         * An optional authorisation key required to access this item with the given scope. If set, this restricts
         * access to those principals who have a copy of the key. The key is generated server-side and cannot be
         * modified by the client. If no authorisation key is set (and hence none is needed for access to the item),
         * this will be %NULL.
         */
        readonly key: string;
        /**
         * The role of the person concerned by this ACL. By default, this can only be %GDATA_ACCESS_ROLE_NONE. Services may extend it with
         * their own namespaced roles.
         */
        role: string;
        /**
         * Specifies to whom this access rule applies. For example, %GDATA_ACCESS_SCOPE_USER or %GDATA_ACCESS_SCOPE_DEFAULT.
         */
        scope_type: string;
        /**
         * Specifies to whom this access rule applies. For example, %GDATA_ACCESS_SCOPE_USER or %GDATA_ACCESS_SCOPE_DEFAULT.
         */
        scopeType: string;
        /**
         * A value representing the user who is represented by the access rule, such as an
         * e-mail address for users, or a domain name for domains.
         *
         * This must be %NULL if and only if #GDataAccessRule:scope-type is %GDATA_ACCESS_SCOPE_DEFAULT.
         */
        scope_value: string;
        /**
         * A value representing the user who is represented by the access rule, such as an
         * e-mail address for users, or a domain name for domains.
         *
         * This must be %NULL if and only if #GDataAccessRule:scope-type is %GDATA_ACCESS_SCOPE_DEFAULT.
         */
        scopeValue: string;

        // Constructors of GData-0.0.AccessRule

        static ['new'](id: string): AccessRule;

        // Owm methods of GData-0.0.AccessRule

        /**
         * Gets the #GDataAccessRule:edited property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the time the access rule was last edited, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_edited(): number;
        /**
         * Gets the #GDataAccessRule:key property.
         * @returns the access rule's authorisation key, or %NULL
         */
        get_key(): string;
        /**
         * Gets the #GDataAccessRule:role property.
         * @returns the access rule's role, or %NULL
         */
        get_role(): string;
        /**
         * Gets the #GDataAccessRule:scope-type and #GDataAccessRule:scope-value properties.
         */
        get_scope(): void;
        /**
         * Sets the #GDataAccessRule:role property to `role`. `role` must be a non-empty string, such as %GDATA_ACCESS_ROLE_NONE.
         *
         * Set `role` to %NULL to unset the property in the access rule.
         * @param role a new role, or %NULL
         */
        set_role(role: string): void;
        /**
         * Sets the #GDataAccessRule:scope-type property to `type` and the #GDataAccessRule:scope-value property to `value`.
         *
         * Set `scope_value` to %NULL to unset the #GDataAccessRule:scope-value property in the access rule. `type` cannot
         * be %NULL. `scope_value` must be %NULL if `type` is &lt;literal&gt;default&lt;/literal&gt;, and non-%NULL otherwise.
         *
         * See the
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/acl"&gt;online
         * documentation&lt;/ulink&gt; for more information.
         * @param type a new scope type
         * @param value a new scope value, or %NULL
         */
        set_scope(type: string, value?: string | null): void;
    }

    module Author {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataAuthor structure are private and should never be accessed directly.
     */
    class Author extends Parsable {
        // Own properties of GData-0.0.Author

        /**
         * An e-mail address associated with the person.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author"&gt;Atom specification&lt;/ulink&gt;.
         */
        email_address: string;
        /**
         * An e-mail address associated with the person.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author"&gt;Atom specification&lt;/ulink&gt;.
         */
        emailAddress: string;
        /**
         * A human-readable name for the person.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author"&gt;Atom specification&lt;/ulink&gt;.
         */
        name: string;
        /**
         * An IRI associated with the person.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author"&gt;Atom specification&lt;/ulink&gt;.
         */
        uri: string;

        // Constructors of GData-0.0.Author

        static ['new'](name: string, uri?: string | null, email_address?: string | null): Author;

        // Owm methods of GData-0.0.Author

        /**
         * Gets the #GDataAuthor:email-address property. If the e-mail address is non-%NULL, it will be non-empty.
         * @returns the author's e-mail address, or %NULL
         */
        get_email_address(): string;
        /**
         * Gets the #GDataAuthor:name property. The name will always be a non-%NULL, non-empty string.
         * @returns the author's name
         */
        get_name(): string;
        /**
         * Gets the #GDataAuthor:uri property. If the URI is non-%NULL, it will be non-empty.
         * @returns the author's URI, or %NULL
         */
        get_uri(): string;
        /**
         * Sets the #GDataAuthor:email-address property to `email_address`. `email_address` must be %NULL or non-empty.
         *
         * Set `email_address` to %NULL to unset the property in the author.
         * @param email_address the new e-mail address for the author, or %NULL
         */
        set_email_address(email_address?: string | null): void;
        /**
         * Sets the #GDataAuthor:name property to `name`. `name` must be non-%NULL and non-empty.
         * @param name the new name for the author
         */
        set_name(name: string): void;
        /**
         * Sets the #GDataAuthor:uri property to `uri`. `uri` must be %NULL or non-empty.
         *
         * Set `uri` to %NULL to unset the property in the author.
         * @param uri the new URI for the author, or %NULL
         */
        set_uri(uri?: string | null): void;
    }

    module AuthorizationDomain {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataAuthorizationDomain structure are private and should never be accessed directly.
     */
    class AuthorizationDomain extends GObject.Object {
        // Own properties of GData-0.0.AuthorizationDomain

        /**
         * A URI detailing the scope of the authorization domain, as enumerated in the
         * &lt;ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#AuthScopes"&gt;online documentation&lt;/ulink&gt;.
         */
        scope: string;
        /**
         * The name of the service which contains the authorization domain, as enumerated in the
         * &lt;ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#clientlogin"&gt;online documentation&lt;/ulink&gt;.
         */
        service_name: string;
        /**
         * The name of the service which contains the authorization domain, as enumerated in the
         * &lt;ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#clientlogin"&gt;online documentation&lt;/ulink&gt;.
         */
        serviceName: string;

        // Owm methods of GData-0.0.AuthorizationDomain

        /**
         * Returns a URI detailing the scope of the authorization domain. See #GDataAuthorizationDomain:scope for more details.
         * @returns URI detailing the scope of the authorization domain
         */
        get_scope(): string;
        /**
         * Returns the name of the service containing the authorization domain. See #GDataAuthorizationDomain:service-name for more details.
         * @returns name of the service containing the authorization domain
         */
        get_service_name(): string;
    }

    module BatchOperation {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataBatchOperation structure are private and should never be accessed directly.
     */
    class BatchOperation extends GObject.Object {
        // Own properties of GData-0.0.BatchOperation

        /**
         * The authorization domain for the batch operation, against which the #GDataService:authorizer for the #GDataBatchOperation:service should be
         * authorized. This may be %NULL if authorization is not needed for any of the requests in the batch operation.
         *
         * All requests in the batch operation must be authorizable under this single authorization domain. If requests need different authorization
         * domains, they must be performed in different batch operations.
         */
        authorization_domain: AuthorizationDomain;
        /**
         * The authorization domain for the batch operation, against which the #GDataService:authorizer for the #GDataBatchOperation:service should be
         * authorized. This may be %NULL if authorization is not needed for any of the requests in the batch operation.
         *
         * All requests in the batch operation must be authorizable under this single authorization domain. If requests need different authorization
         * domains, they must be performed in different batch operations.
         */
        authorizationDomain: AuthorizationDomain;
        /**
         * The feed URI that this batch operation will be sent to.
         */
        feed_uri: string;
        /**
         * The feed URI that this batch operation will be sent to.
         */
        feedUri: string;
        /**
         * The service this batch operation is attached to.
         */
        service: Service;

        // Owm methods of GData-0.0.BatchOperation

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
         * @returns operation ID for the added deletion, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        add_deletion(entry: Entry, callback: BatchOperationCallback): number;
        /**
         * Add an entry to the #GDataBatchOperation, to be inserted on the server when the operation is run. The insertion will return the inserted version
         * of `entry`. `entry` is reffed by the function, so may be freed after it returns.
         *
         * `callback` will be called as specified in the documentation for gdata_batch_operation_add_query(), with an `operation_type` of
         * %GDATA_BATCH_OPERATION_INSERTION.
         * @param entry the #GDataEntry to insert
         * @param callback a #GDataBatchOperationCallback to call when the insertion is finished, or %NULL
         * @returns operation ID for the added insertion, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        add_insertion(entry: Entry, callback: BatchOperationCallback): number;
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
         * @returns operation ID for the added query, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        add_query(id: string, entry_type: GObject.GType, callback: BatchOperationCallback): number;
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
         * @returns operation ID for the added update, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        add_update(entry: Entry, callback: BatchOperationCallback): number;
        /**
         * Gets the #GDataBatchOperation:authorization-domain property.
         * @returns the #GDataAuthorizationDomain used to authorize the batch operation, or %NULL
         */
        get_authorization_domain(): AuthorizationDomain | null;
        /**
         * Gets the #GDataBatchOperation:feed-uri property.
         * @returns the batch operation's feed URI
         */
        get_feed_uri(): string;
        /**
         * Gets the #GDataBatchOperation:service property.
         * @returns the batch operation's attached service
         */
        get_service(): Service;
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
         * @returns %TRUE on success, %FALSE otherwise
         */
        run(cancellable?: Gio.Cancellable | null): boolean;
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
        run_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an asynchronous batch operation run with gdata_batch_operation_run_async().
         *
         * Return values are as for gdata_batch_operation_run().
         * @param async_result a #GAsyncResult
         * @returns %TRUE on success, %FALSE otherwise
         */
        run_finish(async_result: Gio.AsyncResult): boolean;
    }

    module CalendarAccessRule {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataCalendarAccessRule structure are private and
     * should never be accessed directly.
     */
    class CalendarAccessRule extends AccessRule {
        // Constructors of GData-0.0.CalendarAccessRule

        static ['new'](id: string): CalendarAccessRule;
    }

    module CalendarCalendar {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataCalendarCalendar structure are private and should never be accessed directly.
     */
    class CalendarCalendar extends Entry {
        // Own properties of GData-0.0.CalendarCalendar

        /**
         * Indicates the access level the current user has to the calendar. For example: %GDATA_CALENDAR_ACCESS_ROLE_READ or
         * %GDATA_CALENDAR_ACCESS_ROLE_FREE_BUSY. The "current user" is the one authenticated against the service's #GDataService:authorizer,
         * or the guest user.
         */
        readonly access_level: string;
        /**
         * Indicates the access level the current user has to the calendar. For example: %GDATA_CALENDAR_ACCESS_ROLE_READ or
         * %GDATA_CALENDAR_ACCESS_ROLE_FREE_BUSY. The "current user" is the one authenticated against the service's #GDataService:authorizer,
         * or the guest user.
         */
        readonly accessLevel: string;
        /**
         * The background color used to highlight the calendar in the user’s
         * browser. This used to be restricted to a limited set of colours, but
         * since 0.17.2 may be any RGB colour.
         */
        color: Color;
        /**
         * The last time the calendar was edited. If the calendar has not been edited yet, the content indicates the time it was created.
         *
         * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited"&gt;
         * Atom Publishing Protocol specification&lt;/ulink&gt;.
         */
        readonly edited: number;
        /**
         * Indicates whether the calendar is visible.
         */
        is_hidden: boolean;
        /**
         * Indicates whether the calendar is visible.
         */
        isHidden: boolean;
        /**
         * Indicates whether the calendar is selected.
         */
        is_selected: boolean;
        /**
         * Indicates whether the calendar is selected.
         */
        isSelected: boolean;
        /**
         * The number of times the calendar has been cleared of events.
         */
        readonly times_cleaned: number;
        /**
         * The number of times the calendar has been cleared of events.
         */
        readonly timesCleaned: number;
        /**
         * The timezone in which the calendar's times are given. This is a timezone name in tz database notation: &lt;ulink type="http"
         * url="http://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones"&gt;reference&lt;/ulink&gt;.
         */
        timezone: string;

        // Constructors of GData-0.0.CalendarCalendar

        static ['new'](id?: string | null): CalendarCalendar;

        // Owm methods of GData-0.0.CalendarCalendar

        /**
         * Gets the #GDataCalendarCalendar:access-level property.
         * @returns the authenticated user's access level to the calendar, or %NULL
         */
        get_access_level(): string;
        /**
         * Gets the #GDataCalendarCalendar:color property and puts it in `color`.
         */
        get_color(): void;
        /**
         * Gets the #GDataCalendarCalendar:edited property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the time the calendar was last edited, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_edited(): number;
        /**
         * Gets the #GDataCalendarCalendar:times-cleaned property.
         * @returns the number of times the calendar has been totally emptied
         */
        get_times_cleaned(): number;
        /**
         * Gets the #GDataCalendarCalendar:timezone property.
         * @returns the calendar's timezone, or %NULL
         */
        get_timezone(): string;
        /**
         * Sets the #GDataCalendarCalendar:color property to `color`.
         * @param color a new #GDataColor
         */
        set_color(color: Color): void;
        /**
         * Sets the #GDataCalendarCalendar:is-hidden property to `is_hidden`.
         * @param is_hidden %TRUE to hide the calendar, %FALSE otherwise
         */
        set_is_hidden(is_hidden: boolean): void;
        /**
         * Sets the #GDataCalendarCalendar:is-selected property to `is_selected`.
         * @param is_selected %TRUE to select the calendar, %FALSE otherwise
         */
        set_is_selected(is_selected: boolean): void;
        /**
         * Sets the #GDataCalendarCalendar:timezone property to the new timezone, `_timezone`.
         *
         * Set `_timezone` to %NULL to unset the property in the calendar.
         * @param _timezone a new timezone, or %NULL
         */
        set_timezone(_timezone?: string | null): void;
    }

    module CalendarEvent {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataCalendarEvent structure are private and should never be accessed directly.
     */
    class CalendarEvent extends Entry {
        // Own properties of GData-0.0.CalendarEvent

        /**
         * Indicates whether anyone can invite themselves to the event, by adding themselves to the attendee list.
         */
        anyone_can_add_self: boolean;
        /**
         * Indicates whether anyone can invite themselves to the event, by adding themselves to the attendee list.
         */
        anyoneCanAddSelf: boolean;
        /**
         * The last time the event was edited. If the event has not been edited yet, the content indicates the time it was created.
         *
         * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited"&gt;
         * Atom Publishing Protocol specification&lt;/ulink&gt;.
         */
        readonly edited: number;
        /**
         * Indicates whether attendees may invite others to the event.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanInviteOthers"&gt;GData specification&lt;/ulink&gt;.
         */
        guests_can_invite_others: boolean;
        /**
         * Indicates whether attendees may invite others to the event.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanInviteOthers"&gt;GData specification&lt;/ulink&gt;.
         */
        guestsCanInviteOthers: boolean;
        /**
         * Indicates whether attendees may modify the original event, so that changes are visible to organizers and other attendees.
         * Otherwise, any changes made by attendees will be restricted to that attendee's calendar.
         *
         * For more information, see the
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanInviteOthers"&gt;
         * GData specification&lt;/ulink&gt;.
         */
        guests_can_modify: boolean;
        /**
         * Indicates whether attendees may modify the original event, so that changes are visible to organizers and other attendees.
         * Otherwise, any changes made by attendees will be restricted to that attendee's calendar.
         *
         * For more information, see the
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanInviteOthers"&gt;
         * GData specification&lt;/ulink&gt;.
         */
        guestsCanModify: boolean;
        /**
         * Indicates whether attendees can see other people invited to the event.
         *
         * For more information, see the
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanSeeOtherGuests"&gt;
         * GData specification&lt;/ulink&gt;.
         */
        guests_can_see_guests: boolean;
        /**
         * Indicates whether attendees can see other people invited to the event.
         *
         * For more information, see the
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanSeeOtherGuests"&gt;
         * GData specification&lt;/ulink&gt;.
         */
        guestsCanSeeGuests: boolean;
        /**
         * The event ID for the original event, if this event is an exception to a recurring event.
         */
        readonly original_event_id: string;
        /**
         * The event ID for the original event, if this event is an exception to a recurring event.
         */
        readonly originalEventId: string;
        /**
         * The event URI for the original event, if this event is an exception to a recurring event.
         */
        readonly original_event_uri: string;
        /**
         * The event URI for the original event, if this event is an exception to a recurring event.
         */
        readonly originalEventUri: string;
        /**
         * Represents the dates and times when a recurring event takes place. The returned string is in iCal format, as a list of properties.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdRecurrence"&gt;
         * GData specification&lt;/ulink&gt;.
         *
         * Note: gdata_calendar_event_add_time() and gdata_calendar_event_set_recurrence() are mutually
         * exclusive. See the documentation for gdata_calendar_event_add_time() for details.
         */
        recurrence: string;
        /**
         * The revision sequence number of the event as defined in Section 4.8.7.4 of &lt;ulink type="http"
         * url="http://www.ietf.org/rfc/rfc2445.txt"&gt;RFC 2445&lt;/ulink&gt;.
         */
        sequence: number;
        /**
         * The scheduling status of the event. For example: %GDATA_GD_EVENT_STATUS_CANCELED or %GDATA_GD_EVENT_STATUS_CONFIRMED.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdEventStatus"&gt;
         * GData specification&lt;/ulink&gt;.
         */
        status: string;
        /**
         * How the event is marked as consuming time on a calendar. For example: %GDATA_GD_EVENT_TRANSPARENCY_OPAQUE or
         * %GDATA_GD_EVENT_TRANSPARENCY_TRANSPARENT.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdTransparency"&gt;
         * GData specification&lt;/ulink&gt;.
         */
        transparency: string;
        /**
         * The globally unique identifier (UID) of the event as defined in Section 4.8.4.7 of &lt;ulink type="http"
         * url="http://www.ietf.org/rfc/rfc2445.txt"&gt;RFC 2445&lt;/ulink&gt;.
         */
        uid: string;
        /**
         * The event's visibility to calendar users. For example: %GDATA_GD_EVENT_VISIBILITY_PUBLIC or %GDATA_GD_EVENT_VISIBILITY_DEFAULT.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdVisibility"&gt;
         * GData specification&lt;/ulink&gt;.
         */
        visibility: string;

        // Constructors of GData-0.0.CalendarEvent

        static ['new'](id?: string | null): CalendarEvent;

        // Owm methods of GData-0.0.CalendarEvent

        /**
         * Adds the person `who` to the event as a guest (attendee, organiser, performer, etc.), and increments its reference count.
         *
         * Duplicate people will not be added to the list.
         * @param who a #GDataGDWho to add
         */
        add_person(who: GDWho): void;
        /**
         * Adds the place `where` to the event as a location and increments its reference count.
         *
         * Duplicate places will not be added to the list.
         * @param where a #GDataGDWhere to add
         */
        add_place(where: GDWhere): void;
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
        add_time(when: GDWhen): void;
        /**
         * Gets the #GDataCalendarEvent:anyone-can-add-self property.
         * @returns %TRUE if anyone can add themselves as an attendee to the event, %FALSE otherwise
         */
        get_anyone_can_add_self(): boolean;
        /**
         * Gets the #GDataCalendarEvent:edited property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the time the event was last edited, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_edited(): number;
        /**
         * Gets the #GDataCalendarEvent:guests-can-invite-others property.
         * @returns %TRUE if attendees can invite others to the event, %FALSE otherwise
         */
        get_guests_can_invite_others(): boolean;
        /**
         * Gets the #GDataCalendarEvent:guests-can-modify property.
         * @returns %TRUE if attendees can modify the original event, %FALSE otherwise
         */
        get_guests_can_modify(): boolean;
        /**
         * Gets the #GDataCalendarEvent:guests-can-see-guests property.
         * @returns %TRUE if attendees can see who's attending the event, %FALSE otherwise
         */
        get_guests_can_see_guests(): boolean;
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
        get_original_event_details(): void;
        /**
         * Gets a list of the people attending the event.
         * @returns a #GList of #GDataGDWhos, or %NULL
         */
        get_people(): GDWho[];
        /**
         * Gets a list of the locations associated with the event.
         * @returns a #GList of #GDataGDWheres, or %NULL
         */
        get_places(): GDWhere[];
        /**
         * Gets the first time period associated with the event, conveniently returning just its start and
         * end times if required.
         *
         * If there are no time periods, or more than one time period, associated with the event, %FALSE will
         * be returned, and the parameters will remain unmodified.
         * @returns %TRUE if there is only one time period associated with the event, %FALSE otherwise
         */
        get_primary_time(): boolean;
        /**
         * Gets the #GDataCalendarEvent:recurrence property.
         * @returns the event recurrence patterns, or %NULL
         */
        get_recurrence(): string;
        /**
         * Gets the #GDataCalendarEvent:sequence property.
         * @returns the event's sequence number
         */
        get_sequence(): number;
        /**
         * Gets the #GDataCalendarEvent:status property.
         * @returns the event status, or %NULL
         */
        get_status(): string;
        /**
         * Gets a list of the time periods associated with the event.
         * @returns a #GList of #GDataGDWhens, or %NULL
         */
        get_times(): GDWhen[];
        /**
         * Gets the #GDataCalendarEvent:transparency property.
         * @returns the event transparency, or %NULL
         */
        get_transparency(): string;
        /**
         * Gets the #GDataCalendarEvent:uid property.
         * @returns the event's UID, or %NULL
         */
        get_uid(): string;
        /**
         * Gets the #GDataCalendarEvent:visibility property.
         * @returns the event visibility, or %NULL
         */
        get_visibility(): string;
        /**
         * Determines whether the event is an exception to a recurring event. If it is, details of the original event
         * can be retrieved using gdata_calendar_event_get_original_event_details().
         * @returns %TRUE if the event is an exception, %FALSE otherwise
         */
        is_exception(): boolean;
        /**
         * Sets the #GDataCalendarEvent:anyone-can-add-self property to `anyone_can_add_self`.
         * @param anyone_can_add_self %TRUE if anyone can add themselves as an attendee to the event, %FALSE otherwise
         */
        set_anyone_can_add_self(anyone_can_add_self: boolean): void;
        /**
         * Sets the #GDataCalendarEvent:guests-can-invite-others property to `guests_can_invite_others`.
         * @param guests_can_invite_others %TRUE if attendees can invite others to the event, %FALSE otherwise
         */
        set_guests_can_invite_others(guests_can_invite_others: boolean): void;
        /**
         * Sets the #GDataCalendarEvent:guests-can-modify property to `guests_can_modify`.
         * @param guests_can_modify %TRUE if attendees can modify the original event, %FALSE otherwise
         */
        set_guests_can_modify(guests_can_modify: boolean): void;
        /**
         * Sets the #GDataCalendarEvent:guests-can-see-guests property to `guests_can_see_guests`.
         * @param guests_can_see_guests %TRUE if attendees can see who's attending the event, %FALSE otherwise
         */
        set_guests_can_see_guests(guests_can_see_guests: boolean): void;
        /**
         * Sets the #GDataCalendarEvent:recurrence property to the new recurrence, `recurrence`.
         *
         * Set `recurrence` to %NULL to unset the property in the event.
         *
         * Note: gdata_calendar_event_add_time() and gdata_calendar_event_set_recurrence() are mutually
         * exclusive. See the documentation for gdata_calendar_event_add_time() for details.
         * @param recurrence a new event recurrence, or %NULL
         */
        set_recurrence(recurrence?: string | null): void;
        /**
         * Sets the #GDataCalendarEvent:sequence property to the new sequence number, `sequence`.
         * @param sequence a new sequence number, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        set_sequence(sequence: number): void;
        /**
         * Sets the #GDataCalendarEvent:status property to the new status, `status`.
         *
         * Set `status` to %NULL to unset the property in the event.
         * @param status a new event status, or %NULL
         */
        set_status(status?: string | null): void;
        /**
         * Sets the #GDataCalendarEvent:transparency property to the new transparency, `transparency`.
         *
         * Set `transparency` to %NULL to unset the property in the event.
         * @param transparency a new event transparency, or %NULL
         */
        set_transparency(transparency?: string | null): void;
        /**
         * Sets the #GDataCalendarEvent:uid property to the new UID, `uid`.
         *
         * Set `uid` to %NULL to unset the property in the event.
         * @param uid a new event UID, or %NULL
         */
        set_uid(uid?: string | null): void;
        /**
         * Sets the #GDataCalendarEvent:visibility property to the new visibility, `visibility`.
         *
         * Set `visibility` to %NULL to unset the property in the event.
         * @param visibility a new event visibility, or %NULL
         */
        set_visibility(visibility?: string | null): void;
    }

    module CalendarFeed {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataCalendarFeed structure are private and should never be accessed directly.
     */
    class CalendarFeed extends Feed {
        // Own properties of GData-0.0.CalendarFeed

        /**
         * The number of times the feed has been completely cleared of entries.
         */
        readonly times_cleaned: number;
        /**
         * The number of times the feed has been completely cleared of entries.
         */
        readonly timesCleaned: number;
        /**
         * The timezone in which the feed's times are given. This is a timezone name in tz database notation: &lt;ulink type="http"
         * url="http://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones"&gt;reference&lt;/ulink&gt;.
         */
        readonly timezone: string;

        // Owm methods of GData-0.0.CalendarFeed

        /**
         * Gets the #GDataCalendarFeed:times-cleaned property.
         * @returns the number of times the feed has been totally emptied
         */
        get_times_cleaned(): number;
        /**
         * Gets the #GDataCalendarFeed:timezone property.
         * @returns the feed's timezone, or %NULL
         */
        get_timezone(): string;
    }

    module CalendarQuery {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataCalendarQuery structure are private and should never be accessed directly.
     */
    class CalendarQuery extends Query {
        // Own properties of GData-0.0.CalendarQuery

        /**
         * A shortcut to request all events scheduled for the future. Overrides the
         * #GDataCalendarQuery:recurrence-expansion-start, #GDataCalendarQuery:recurrence-expansion-end,
         * #GDataCalendarQuery:start-min and #GDataCalendarQuery:start-max properties.
         */
        future_events: boolean;
        /**
         * A shortcut to request all events scheduled for the future. Overrides the
         * #GDataCalendarQuery:recurrence-expansion-start, #GDataCalendarQuery:recurrence-expansion-end,
         * #GDataCalendarQuery:start-min and #GDataCalendarQuery:start-max properties.
         */
        futureEvents: boolean;
        /**
         * Specifies the maximum number of attendees to list for an event. If the actual number of attendees for an event is greater than this value,
         * only the current user and the event organiser are listed.
         */
        max_attendees: number;
        /**
         * Specifies the maximum number of attendees to list for an event. If the actual number of attendees for an event is greater than this value,
         * only the current user and the event organiser are listed.
         */
        maxAttendees: number;
        /**
         * Specifies order of entries in a feed. Supported values are &lt;literal&gt;lastmodified&lt;/literal&gt; and
         * &lt;literal&gt;starttime&lt;/literal&gt;.
         */
        order_by: string;
        /**
         * Specifies order of entries in a feed. Supported values are &lt;literal&gt;lastmodified&lt;/literal&gt; and
         * &lt;literal&gt;starttime&lt;/literal&gt;.
         */
        orderBy: string;
        /**
         * Specifies the end of the time period to expand recurring events for, exclusive.
         */
        recurrence_expansion_end: number;
        /**
         * Specifies the end of the time period to expand recurring events for, exclusive.
         */
        recurrenceExpansionEnd: number;
        /**
         * Specifies the beginning of the time period to expand recurring events for, inclusive.
         */
        recurrence_expansion_start: number;
        /**
         * Specifies the beginning of the time period to expand recurring events for, inclusive.
         */
        recurrenceExpansionStart: number;
        /**
         * Whether to include deleted/cancelled events in the query feed. Deleted events have their #GDataCalendarEvent:status property set to
         * %GDATA_GD_EVENT_STATUS_CANCELED. They do not normally appear in query results.
         */
        show_deleted: boolean;
        /**
         * Whether to include deleted/cancelled events in the query feed. Deleted events have their #GDataCalendarEvent:status property set to
         * %GDATA_GD_EVENT_STATUS_CANCELED. They do not normally appear in query results.
         */
        showDeleted: boolean;
        /**
         * Indicates whether recurring events should be expanded or represented as a single event.
         */
        single_events: boolean;
        /**
         * Indicates whether recurring events should be expanded or represented as a single event.
         */
        singleEvents: boolean;
        /**
         * Specifies direction of sorting. Supported values are &lt;literal&gt;ascending&lt;/literal&gt; and
         * &lt;literal&gt;descending&lt;/literal&gt;.
         *
         * By default, results are returned in ascending order.
         */
        sort_order: string;
        /**
         * Specifies direction of sorting. Supported values are &lt;literal&gt;ascending&lt;/literal&gt; and
         * &lt;literal&gt;descending&lt;/literal&gt;.
         *
         * By default, results are returned in ascending order.
         */
        sortOrder: string;
        /**
         * Together with #GDataCalendarQuery:start-min, creates a timespan such that only events within the timespan are returned
         *
         * #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max is exclusive. Events that overlap the range are
         * included. Both are specified in seconds since the UNIX epoch.
         *
         * If not specified, the default #GDataCalendarQuery:start-max is &lt;literal&gt;2031-01-01&lt;/literal&gt;.
         */
        start_max: number;
        /**
         * Together with #GDataCalendarQuery:start-min, creates a timespan such that only events within the timespan are returned
         *
         * #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max is exclusive. Events that overlap the range are
         * included. Both are specified in seconds since the UNIX epoch.
         *
         * If not specified, the default #GDataCalendarQuery:start-max is &lt;literal&gt;2031-01-01&lt;/literal&gt;.
         */
        startMax: number;
        /**
         * Together with #GDataCalendarQuery:start-max, creates a timespan such that only events within the timespan are returned.
         *
         * #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max is exclusive. Events that overlap the range are
         * included. Both are specified in seconds since the UNIX epoch.
         *
         * If not specified, the default #GDataCalendarQuery:start-min is &lt;literal&gt;1970-01-01&lt;/literal&gt;.
         */
        start_min: number;
        /**
         * Together with #GDataCalendarQuery:start-max, creates a timespan such that only events within the timespan are returned.
         *
         * #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max is exclusive. Events that overlap the range are
         * included. Both are specified in seconds since the UNIX epoch.
         *
         * If not specified, the default #GDataCalendarQuery:start-min is &lt;literal&gt;1970-01-01&lt;/literal&gt;.
         */
        startMin: number;
        /**
         * The current timezone. If this is not specified, all times are returned in UTC.
         */
        timezone: string;

        // Constructors of GData-0.0.CalendarQuery

        static ['new'](q?: string | null): CalendarQuery;

        static new_with_limits(q: string | null, start_min: number, start_max: number): CalendarQuery;

        // Owm methods of GData-0.0.CalendarQuery

        /**
         * Gets the #GDataCalendarQuery:future-events property.
         * @returns the future events property
         */
        get_future_events(): boolean;
        /**
         * Gets the #GDataCalendarQuery:max-attendees property. If the property is unset, &lt;code class="literal"&gt;0&lt;/code&gt; will be returned.
         * @returns the maximum number of attendees, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_max_attendees(): number;
        /**
         * Gets the #GDataCalendarQuery:order-by property.
         * @returns the order by property, or %NULL if it is unset
         */
        get_order_by(): string;
        /**
         * Gets the #GDataCalendarQuery:recurrence-expansion-end property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the recurrence-expansion-end property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_recurrence_expansion_end(): number;
        /**
         * Gets the #GDataCalendarQuery:recurrence-expansion-start property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the recurrence-expansion-start property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_recurrence_expansion_start(): number;
        /**
         * Gets the #GDataCalendarQuery:single-events property.
         * @returns the single events property
         */
        get_single_events(): boolean;
        /**
         * Gets the #GDataCalendarQuery:sort-order property.
         * @returns the sort order property, or %NULL if it is unset
         */
        get_sort_order(): string;
        /**
         * Gets the #GDataCalendarQuery:start-max property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp (in seconds) for the start-max property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_start_max(): number;
        /**
         * Gets the #GDataCalendarQuery:start-min property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp (in seconds) for the start-min property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_start_min(): number;
        /**
         * Gets the #GDataCalendarQuery:timezone property.
         * @returns the timezone property, or %NULL if it is unset
         */
        get_timezone(): string;
        /**
         * Sets the #GDataCalendarQuery:future-events property of the #GDataCalendarQuery to `future_events`.
         * @param future_events %TRUE to unconditionally show future events, %FALSE otherwise
         */
        set_future_events(future_events: boolean): void;
        /**
         * Sets the #GDataCalendarQuery:max-attendees property of the #GDataCalendarQuery to the new value, `max_attendees`.
         *
         * Set `max_attendees` to &lt;code class="literal"&gt;0&lt;/code&gt; to unset the property in the query URI.
         * @param max_attendees a new maximum attendee count, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        set_max_attendees(max_attendees: number): void;
        /**
         * Sets the #GDataCalendarQuery:order-by property of the #GDataCalendarQuery to the new order by string, `order_by`.
         *
         * Set `order_by` to %NULL to unset the property in the query URI.
         * @param order_by a new order by string, or %NULL
         */
        set_order_by(order_by?: string | null): void;
        /**
         * Sets the #GDataCalendarQuery:recurrence-expansion-end property of the #GDataCalendarQuery
         * to the new time/date, `end`.
         *
         * Set `end` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the query URI.
         * @param end a new end time, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_recurrence_expansion_end(end: number): void;
        /**
         * Sets the #GDataCalendarQuery:recurrence-expansion-start property of the #GDataCalendarQuery
         * to the new time/date, `start`.
         *
         * Set `start` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the query URI.
         * @param start a new start time, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_recurrence_expansion_start(start: number): void;
        /**
         * Sets the #GDataCalendarQuery:show-deleted property of the #GDataCalendarQuery.
         * @param show_deleted %TRUE to show deleted events, %FALSE otherwise
         */
        set_show_deleted(show_deleted: boolean): void;
        /**
         * Sets the #GDataCalendarQuery:single-events property of the #GDataCalendarQuery to `single_events`.
         * @param single_events %TRUE to show recurring events as single events, %FALSE otherwise
         */
        set_single_events(single_events: boolean): void;
        /**
         * Sets the #GDataCalendarQuery:sort-order property of the #GDataCalendarQuery to the new sort order string, `sort_order`.
         *
         * Set `sort_order` to %NULL to unset the property in the query URI.
         * @param sort_order a new sort order string, or %NULL
         */
        set_sort_order(sort_order?: string | null): void;
        /**
         * Sets the #GDataCalendarQuery:start-max property of the #GDataCalendarQuery
         * to the new time/date, `start_max`.
         *
         * Set `start_max` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the query URI.
         * @param start_max a new maximum start time (in seconds since the UNIX epoch), or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_start_max(start_max: number): void;
        /**
         * Sets the #GDataCalendarQuery:start-min property of the #GDataCalendarQuery
         * to the new time/date, `start_min`.
         *
         * Set `start_min` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the query URI.
         * @param start_min a new minimum start time (in seconds since the UNIX epoch), or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_start_min(start_min: number): void;
        /**
         * Sets the #GDataCalendarQuery:timezone property of the #GDataCalendarQuery to the new timezone string, `timezone`.
         *
         * Set `timezone` to %NULL to unset the property in the query URI.
         * @param _timezone a new timezone string, or %NULL
         */
        set_timezone(_timezone?: string | null): void;
    }

    module CalendarService {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataCalendarService structure are private and should never be accessed directly.
     */
    class CalendarService extends Service {
        // Constructors of GData-0.0.CalendarService

        static ['new'](authorizer?: Authorizer | null): CalendarService;

        // Owm methods of GData-0.0.CalendarService

        /**
         * The primary #GDataAuthorizationDomain for interacting with Google Calendar. This will not normally need to be used, as it's used internally
         * by the #GDataCalendarService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
         * does not support natively, then this domain may be needed to authorize the requests.
         *
         * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
         */
        static get_primary_authorization_domain(): AuthorizationDomain;

        // Owm methods of GData-0.0.CalendarService

        /**
         * Inserts `event` by uploading it to the online calendar service, adding it to
         * the specified `calendar`.
         *
         * For more details, see gdata_service_insert_entry().
         * @param calendar the #GDataCalendarCalendar to insert the event into
         * @param event the #GDataCalendarEvent to insert
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an updated #GDataCalendarEvent, or %NULL; unref with g_object_unref()
         */
        insert_calendar_event(
            calendar: CalendarCalendar,
            event: CalendarEvent,
            cancellable?: Gio.Cancellable | null,
        ): CalendarEvent;
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
        insert_calendar_event_async(
            calendar: CalendarCalendar,
            event: CalendarEvent,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Inserts `event` by uploading it to the online calendar service.
         *
         * For more details, see gdata_service_insert_entry().
         * @param event the #GDataCalendarEvent to insert
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an updated #GDataCalendarEvent, or %NULL; unref with g_object_unref()
         */
        insert_event(event: CalendarEvent, cancellable?: Gio.Cancellable | null): CalendarEvent;
        /**
         * Inserts `event` by uploading it to the online calendar service. `self` and `event` are both reffed when this function is called, so can safely be
         * unreffed after this function returns.
         *
         * `callback` should call gdata_service_insert_entry_finish() to obtain a #GDataCalendarEvent representing the inserted event and to check for possible
         * errors.
         *
         * For more details, see gdata_calendar_service_insert_event(), which is the synchronous version of this function, and
         * gdata_service_insert_entry_async(), which is the base asynchronous insertion function.
         * @param event the #GDataCalendarEvent to insert
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when insertion is finished
         */
        insert_event_async(
            event: CalendarEvent,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Queries the service to return a list of all calendars from the authenticated account which match the given
         * `query`. It will return all calendars the user has read access to, including primary, secondary and imported
         * calendars.
         *
         * For more details, see gdata_service_query().
         * @param query a #GDataQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @returns a #GDataFeed of query results; unref with g_object_unref()
         */
        query_all_calendars(
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
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
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        query_all_calendars_async(
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Queries the service to return a list of events in the given `calendar,` which match `query`.
         *
         * For more details, see gdata_service_query().
         * @param calendar a #GDataCalendarCalendar
         * @param query a #GDataQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @returns a #GDataFeed of query results; unref with g_object_unref()
         */
        query_events(
            calendar: CalendarCalendar,
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
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
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when the query is finished
         */
        query_events_async(
            calendar: CalendarCalendar,
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Queries the service to return a list of calendars from the authenticated account which match the given
         * `query,` and the authenticated user owns. (i.e. They have full read/write access to the calendar, as well
         * as the ability to set permissions on the calendar.)
         *
         * For more details, see gdata_service_query().
         * @param query a #GDataQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @returns a #GDataFeed of query results; unref with g_object_unref()
         */
        query_own_calendars(
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
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
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        query_own_calendars_async(
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
    }

    module Category {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataCategory structure are private and should never be accessed directly.
     */
    class Category extends Parsable {
        // Own properties of GData-0.0.Category

        /**
         * A human-readable label for display in end-user applications.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category"&gt;
         * Atom specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * An IRI that identifies a categorization scheme.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category"&gt;
         * Atom specification&lt;/ulink&gt;.
         */
        scheme: string;
        /**
         * Identifies the category to which the entry or feed belongs.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category"&gt;
         * Atom specification&lt;/ulink&gt;.
         */
        term: string;

        // Constructors of GData-0.0.Category

        static ['new'](term: string, scheme?: string | null, label?: string | null): Category;

        // Owm methods of GData-0.0.Category

        /**
         * Gets the #GDataCategory:label property.
         * @returns the category's label, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataCategory:scheme property. If the scheme is non-%NULL, it will be non-empty.
         * @returns the category's scheme, or %NULL
         */
        get_scheme(): string;
        /**
         * Gets the #GDataCategory:term property. The term will always be a non-%NULL, non-empty string.
         * @returns the category's term
         */
        get_term(): string;
        /**
         * Sets the #GDataCategory:label property to `label`.
         *
         * Set `label` to %NULL to unset the property in the category.
         * @param label the new label for the category, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataCategory:scheme property to `scheme`. `scheme` must be %NULL or non-empty.
         *
         * Set `scheme` to %NULL to unset the property in the category.
         * @param scheme the new scheme for the category, or %NULL
         */
        set_scheme(scheme?: string | null): void;
        /**
         * Sets the #GDataCategory:term property to `term`. `term` must be non-%NULL and non-empty.
         * @param term the new term for the category
         */
        set_term(term: string): void;
    }

    module ClientLoginAuthorizer {
        // Signal callback interfaces

        interface CaptchaChallenge {
            (uri: string): string;
        }

        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataClientLoginAuthorizer structure are private and should never be accessed directly.
     */
    class ClientLoginAuthorizer extends GObject.Object {
        // Own properties of GData-0.0.ClientLoginAuthorizer

        /**
         * A client ID for your application (see the
         * &lt;ulink url="http://code.google.com/apis/accounts/docs/AuthForInstalledApps.html#Request" type="http"&gt;reference documentation&lt;/ulink&gt;).
         *
         * It is recommended that the ID is of the form &lt;literal&gt;&lt;replaceable&gt;company name&lt;/replaceable&gt;-&lt;replaceable&gt;application name&lt;/replaceable&gt;-
         * &lt;replaceable&gt;version ID&lt;/replaceable&gt;&lt;/literal&gt;.
         */
        client_id: string;
        /**
         * A client ID for your application (see the
         * &lt;ulink url="http://code.google.com/apis/accounts/docs/AuthForInstalledApps.html#Request" type="http"&gt;reference documentation&lt;/ulink&gt;).
         *
         * It is recommended that the ID is of the form &lt;literal&gt;&lt;replaceable&gt;company name&lt;/replaceable&gt;-&lt;replaceable&gt;application name&lt;/replaceable&gt;-
         * &lt;replaceable&gt;version ID&lt;/replaceable&gt;&lt;/literal&gt;.
         */
        clientId: string;
        /**
         * The user's account password for authentication.
         *
         * This will only be set after authentication using gdata_client_login_authorizer_authenticate() is completed successfully. It will
         * then be set to the password passed to gdata_client_login_authorizer_authenticate(), and a #GObject::notify signal will be emitted. If
         * authentication fails, it will be set to %NULL.
         *
         * If libgdata is compiled with libgcr support, the password will be stored in non-pageable memory. However, if it is retrieved
         * using g_object_get() (or related functions) it will be copied to non-pageable memory and could end up being written to disk. Accessing
         * the password using gdata_client_login_authorizer_get_password() will not perform any copies, and so maintains privacy.
         */
        readonly password: string;
        /**
         * The #GProxyResolver used to determine a proxy URI.  Setting this will clear the #GDataClientLoginAuthorizer:proxy-uri property.
         */
        proxy_resolver: Gio.ProxyResolver;
        /**
         * The #GProxyResolver used to determine a proxy URI.  Setting this will clear the #GDataClientLoginAuthorizer:proxy-uri property.
         */
        proxyResolver: Gio.ProxyResolver;
        /**
         * The proxy URI used internally for all network requests.
         */
        proxy_uri: Soup.URI;
        /**
         * The proxy URI used internally for all network requests.
         */
        proxyUri: Soup.URI;
        /**
         * A timeout, in seconds, for network operations. If the timeout is exceeded, the operation will be cancelled and
         * %GDATA_SERVICE_ERROR_NETWORK_ERROR will be returned.
         *
         * If the timeout is &lt;code class="literal"&gt;0&lt;/code&gt;, operations will never time out.
         */
        timeout: number;
        /**
         * The user's Google username for authentication. This will always be a full e-mail address.
         *
         * This will only be set after authentication using gdata_client_login_authorizer_authenticate() is completed successfully. It will
         * then be set to the username passed to gdata_client_login_authorizer_authenticate(), and a #GObject::notify signal will be emitted. If
         * authentication fails, it will be set to %NULL.
         */
        readonly username: string;

        // Constructors of GData-0.0.ClientLoginAuthorizer

        static ['new'](client_id: string, service_type: GObject.GType): ClientLoginAuthorizer;

        static new_for_authorization_domains(
            client_id: string,
            authorization_domains: AuthorizationDomain[],
        ): ClientLoginAuthorizer;

        // Owm methods of GData-0.0.ClientLoginAuthorizer

        /**
         * Authenticates the #GDataClientLoginAuthorizer with the Google Accounts service using `username` and `password` and authorizes it against all the
         * service types passed to gdata_client_login_authorizer_new(); i.e. logs into the service with the given user account. `username` should be a full
         * e-mail address (e.g. &lt;literal&gt;john.smith\`gmail`.com&lt;/literal&gt;). If a full e-mail address is not given, `username` will have
         * &lt;literal&gt;\`gmail`.com&lt;/literal&gt; appended to create an e-mail address
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
         * If the operation was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         *
         * If the operation errors or is cancelled part-way through, gdata_authorizer_is_authorized_for_domain() is guaranteed to return %FALSE
         * for all #GDataAuthorizationDomains, even if authentication has succeeded for some of them already.
         *
         * A %GDATA_CLIENT_LOGIN_AUTHORIZER_ERROR_BAD_AUTHENTICATION will be returned if authentication failed due to an incorrect username or password.
         * Other #GDataClientLoginAuthorizerError errors can be returned for other conditions.
         *
         * If the service requires a CAPTCHA to be completed, the #GDataClientLoginAuthorizer::captcha-challenge signal will be emitted.
         * The return value from a signal handler for the signal should be a newly allocated string containing the text from the image. If the text is %NULL
         * or empty, authentication will fail with a %GDATA_CLIENT_LOGIN_AUTHORIZER_ERROR_CAPTCHA_REQUIRED error. Otherwise, authentication will be
         * automatically and transparently restarted with the new CAPTCHA details.
         *
         * A %GDATA_SERVICE_ERROR_PROTOCOL_ERROR will be returned if the server's responses were invalid.
         * @param username the user's username
         * @param password the user's password
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE if authentication and authorization was successful against all the services, %FALSE otherwise
         */
        authenticate(username: string, password: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Authenticates the #GDataClientLoginAuthorizer with the Google accounts service using the given `username` and `password`. `self,` `username` and
         * `password` are all reffed/copied when this function is called, so can safely be freed after this function returns.
         *
         * For more details, see gdata_client_login_authorizer_authenticate(), which is the synchronous version of this function.
         *
         * When the operation is finished, `callback` will be called. You can then call gdata_client_login_authorizer_authenticate_finish()
         * to get the results of the operation.
         * @param username the user's username
         * @param password the user's password
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        authenticate_async(
            username: string,
            password: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous authentication operation started with gdata_client_login_authorizer_authenticate_async().
         * @param async_result a #GAsyncResult
         * @returns %TRUE if authentication was successful, %FALSE otherwise
         */
        authenticate_finish(async_result: Gio.AsyncResult): boolean;
        /**
         * Returns the authorizer's client ID, as specified on constructing the #GDataClientLoginAuthorizer.
         * @returns the authorizer's client ID
         */
        get_client_id(): string;
        /**
         * Returns the password of the currently authenticated user, or %NULL if nobody is authenticated.
         *
         * It is not safe to call this while an authentication operation is ongoing.
         *
         * If libgdata is compiled with libgcr support, the password will be stored in non-pageable memory. Since this function doesn't return
         * a copy of the password, the returned value is guaranteed to not hit disk. It's advised that any copies of the password made in client programs
         * also use non-pageable memory.
         * @returns the password of the currently authenticated user, or %NULL
         */
        get_password(): string;
        /**
         * Gets the #GProxyResolver on the #GDataClientLoginAuthorizer's #SoupSession.
         * @returns a #GProxyResolver, or %NULL
         */
        get_proxy_resolver(): Gio.ProxyResolver | null;
        /**
         * Gets the proxy URI on the #GDataClientLoginAuthorizer's #SoupSession.
         * @returns the proxy URI, or %NULL; free with soup_uri_free()
         */
        get_proxy_uri(): Soup.URI;
        /**
         * Gets the #GDataClientLoginAuthorizer:timeout property; the network timeout, in seconds.
         * @returns the timeout, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_timeout(): number;
        /**
         * Returns the username of the currently authenticated user, or %NULL if nobody is authenticated.
         *
         * It is not safe to call this while an authentication operation is ongoing.
         * @returns the username of the currently authenticated user, or %NULL
         */
        get_username(): string;
        /**
         * Sets the #GProxyResolver on the #SoupSession used internally by the given #GDataClientLoginAuthorizer.
         *
         * Setting this will clear the #GDataClientLoginAuthorizer:proxy-uri property.
         * @param proxy_resolver a #GProxyResolver, or %NULL
         */
        set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void;
        /**
         * Sets the proxy URI on the #SoupSession used internally by the #GDataClientLoginAuthorizer. This forces all requests through the given proxy.
         *
         * If `proxy_uri` is %NULL, no proxy will be used.
         * @param proxy_uri the proxy URI, or %NULL
         */
        set_proxy_uri(proxy_uri?: Soup.URI | null): void;
        /**
         * Sets the #GDataClientLoginAuthorizer:timeout property; the network timeout, in seconds.
         *
         * If `timeout` is &lt;code class="literal"&gt;0&lt;/code&gt;, network operations will never time out.
         * @param timeout the timeout, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        set_timeout(timeout: number): void;
    }

    module Comment {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataComment structure are private and should never be accessed directly.
     */
    abstract class Comment extends Entry {}

    module ContactsContact {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataContactsContact structure are private and should never be accessed directly.
     */
    class ContactsContact extends Entry {
        // Own properties of GData-0.0.ContactsContact

        /**
         * Billing information for the contact, such as their billing name and address.
         */
        billing_information: string;
        /**
         * Billing information for the contact, such as their billing name and address.
         */
        billingInformation: string;
        /**
         * The contact's birthday.
         */
        birthday: GLib.Date;
        /**
         * Whether the contact's birthday includes their year of birth.
         */
        birthday_has_year: boolean;
        /**
         * Whether the contact's birthday includes their year of birth.
         */
        birthdayHasYear: boolean;
        /**
         * Whether the entry has been deleted.
         */
        readonly deleted: boolean;
        /**
         * The name or address of a directory server associated with the contact.
         */
        directory_server: string;
        /**
         * The name or address of a directory server associated with the contact.
         */
        directoryServer: string;
        /**
         * The last time the contact was edited. If the contact has not been edited yet, the content indicates the time it was created.
         *
         * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited"&gt;
         * Atom Publishing Protocol specification&lt;/ulink&gt;.
         */
        readonly edited: number;
        /**
         * The name to file the contact under for sorting purposes.
         */
        file_as: string;
        /**
         * The name to file the contact under for sorting purposes.
         */
        fileAs: string;
        /**
         * The gender of the contact. For example: %GDATA_CONTACTS_GENDER_MALE or %GDATA_CONTACTS_GENDER_FEMALE.
         */
        gender: string;
        /**
         * The initials of the contact.
         */
        initials: string;
        /**
         * The maiden name of the contact.
         */
        maiden_name: string;
        /**
         * The maiden name of the contact.
         */
        maidenName: string;
        /**
         * A mileage associated with the contact, such as one for reimbursement purposes. It can be in any format.
         */
        mileage: string;
        /**
         * The contact's name in a structured representation.
         */
        name: GDName;
        /**
         * The contact's chosen nickname.
         */
        nickname: string;
        /**
         * The contact's occupation.
         */
        occupation: string;
        /**
         * The ETag of the contact's photo, if the contact has a photo; %NULL otherwise.
         */
        readonly photo_etag: string;
        /**
         * The ETag of the contact's photo, if the contact has a photo; %NULL otherwise.
         */
        readonly photoEtag: string;
        /**
         * The contact's importance. For example: %GDATA_CONTACTS_PRIORITY_NORMAL or %GDATA_CONTACTS_PRIORITY_HIGH.
         */
        priority: string;
        /**
         * The sensitivity of the contact's data. For example: %GDATA_CONTACTS_SENSITIVITY_NORMAL or %GDATA_CONTACTS_SENSITIVITY_PRIVATE.
         */
        sensitivity: string;
        /**
         * A short name for the contact. This should be used for contracted versions of the contact's actual name,
         * whereas #GDataContactsContact:nickname should be used for nicknames.
         */
        short_name: string;
        /**
         * A short name for the contact. This should be used for contracted versions of the contact's actual name,
         * whereas #GDataContactsContact:nickname should be used for nicknames.
         */
        shortName: string;
        /**
         * The subject of the contact. (i.e. The contact's relevance to the address book.)
         */
        subject: string;

        // Constructors of GData-0.0.ContactsContact

        static ['new'](id?: string | null): ContactsContact;

        // Owm methods of GData-0.0.ContactsContact

        /**
         * Adds a calendar to the contact's list of calendars and increments its reference count.
         *
         * Duplicate calendars will not be added to the list, though the same URI may appear in several #GDataGContactCalendars with different
         * relation types or labels.
         * @param calendar a #GDataGContactCalendar to add
         */
        add_calendar(calendar: GContactCalendar): void;
        /**
         * Adds an e-mail address to the contact's list of e-mail addresses and increments its reference count.
         *
         * Note that only one e-mail address per contact may be marked as "primary". Insertion and update operations
         * (with gdata_contacts_service_insert_contact()) will return an error if more than one e-mail address
         * is marked as primary.
         *
         * Duplicate e-mail addresses will not be added to the list.
         * @param email_address a #GDataGDEmailAddress to add
         */
        add_email_address(email_address: GDEmailAddress): void;
        /**
         * Adds an event to the contact's list of events and increments its reference count.
         *
         * Duplicate events will be added to the list, and multiple events with the same event type can be added to a single contact.
         * Though it may not make sense for some event types to be repeated, adding them is allowed.
         * @param event a #GDataGContactEvent to add
         */
        add_event(event: GContactEvent): void;
        /**
         * Adds an external ID to the contact's list of external IDs and increments its reference count.
         *
         * Duplicate IDs will not be added to the list.
         * @param external_id a #GDataGContactExternalID to add
         */
        add_external_id(external_id: GContactExternalID): void;
        /**
         * Adds the contact to the given group. `href` should be a URI.
         * @param href the group's ID URI
         */
        add_group(href: string): void;
        /**
         * Adds a hobby to the contact's list of hobbies, copying it in the process.
         *
         * Duplicate hobbies will not be added to the list.
         * @param hobby a hobby to add
         */
        add_hobby(hobby: string): void;
        /**
         * Adds an IM (instant messaging) address to the contact's list of IM addresses and increments its reference count.
         *
         * Note that only one IM address per contact may be marked as "primary". Insertion and update operations
         * (with gdata_contacts_service_insert_contact()) will return an error if more than one IM address
         * is marked as primary.
         *
         * Duplicate IM addresses will not be added to the list.
         * @param im_address a #GDataGDIMAddress to add
         */
        add_im_address(im_address: GDIMAddress): void;
        /**
         * Adds a jot to the contact's list of jots and increments its reference count.
         *
         * Duplicate jots will be added to the list, and multiple jots with the same relation type can be added to a single contact.
         * @param jot a #GDataGContactJot to add
         */
        add_jot(jot: GContactJot): void;
        /**
         * Adds a language to the contact's list of languages and increments its reference count.
         *
         * Duplicate languages will not be added to the list.
         * @param language a #GDataGContactLanguage to add
         */
        add_language(language: GContactLanguage): void;
        /**
         * Adds an organization to the contact's list of organizations (e.g. employers) and increments its reference count.
         *
         * Note that only one organization per contact may be marked as "primary". Insertion and update operations
         * (with gdata_contacts_service_insert_contact()) will return an error if more than one organization
         * is marked as primary.
         *
         * Duplicate organizations will not be added to the list.
         * @param organization a #GDataGDOrganization to add
         */
        add_organization(organization: GDOrganization): void;
        /**
         * Adds a phone number to the contact's list of phone numbers and increments its reference count
         *
         * Note that only one phone number per contact may be marked as "primary". Insertion and update operations
         * (with gdata_contacts_service_insert_contact()) will return an error if more than one phone number
         * is marked as primary.
         *
         * Duplicate phone numbers will not be added to the list.
         * @param phone_number a #GDataGDPhoneNumber to add
         */
        add_phone_number(phone_number: GDPhoneNumber): void;
        /**
         * Adds a postal address to the contact's list of postal addresses and increments its reference count.
         *
         * Note that only one postal address per contact may be marked as "primary". Insertion and update operations
         * (with gdata_contacts_service_insert_contact()) will return an error if more than one postal address
         * is marked as primary.
         *
         * Duplicate postal addresses will not be added to the list.
         * @param postal_address a #GDataGDPostalAddress to add
         */
        add_postal_address(postal_address: GDPostalAddress): void;
        /**
         * Adds a relation to the contact's list of relations and increments its reference count.
         *
         * Duplicate relations will be added to the list, and multiple relations with the same relation type can be added to a single contact.
         * Though it may not make sense for some relation types to be repeated, adding them is allowed.
         * @param relation a #GDataGContactRelation to add
         */
        add_relation(relation: GContactRelation): void;
        /**
         * Adds a website to the contact's list of websites and increments its reference count.
         *
         * Duplicate websites will not be added to the list, though the same URI may appear in several #GDataGContactWebsites with different
         * relation types or labels.
         * @param website a #GDataGContactWebsite to add
         */
        add_website(website: GContactWebsite): void;
        /**
         * Gets the #GDataContactsContact:billing-information property.
         * @returns the contact's billing information, or %NULL
         */
        get_billing_information(): string;
        /**
         * Gets the #GDataContactsContact:birthday and #GDataContactsContact:birthday-has-year properties. If `birthday` is non-%NULL,
         * #GDataContactsContact:birthday is returned in it. The function returns the value of #GDataContactsContact:birthday-has-year,
         * which specifies whether the year in `birthday` is meaningful. Contacts may not have the year of their birth set, in which
         * case, the function would return %FALSE, and the year in `birthday` should be ignored.
         * @returns whether the contact's birthday has the year set
         */
        get_birthday(): boolean;
        /**
         * Gets a list of the calendars of the contact.
         * @returns a #GList of #GDataGContactCalendars, or %NULL
         */
        get_calendars(): GContactCalendar[];
        /**
         * Gets the #GDataContactsContact:directory-server property.
         * @returns the name or address of a directory server associated with the contact, or %NULL
         */
        get_directory_server(): string;
        /**
         * Gets the #GDataContactsContact:edited property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the time the contact was last edited, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_edited(): number;
        /**
         * Gets a list of the e-mail addresses owned by the contact.
         * @returns a #GList of #GDataGDEmailAddress&lt;!-- --&gt;es, or %NULL
         */
        get_email_addresses(): GDEmailAddress[];
        /**
         * Gets a list of the events of the contact.
         * @returns a #GList of #GDataGContactEvents, or %NULL
         */
        get_events(): GContactEvent[];
        /**
         * Gets the full list of extended properties of the contact; a hash table mapping property name to value.
         * @returns a #GHashTable of extended properties
         */
        get_extended_properties(): GLib.HashTable<any, any>;
        /**
         * Gets the value of an extended property of the contact. Each contact can have up to 10 client-set extended
         * properties to store data of the client's choosing.
         * @param name the property name; an arbitrary, unique string
         * @returns the property's value, or %NULL
         */
        get_extended_property(name: string): string;
        /**
         * Gets a list of the external IDs of the contact.
         * @returns a #GList of #GDataGContactExternalIDs, or %NULL
         */
        get_external_ids(): GContactExternalID[];
        /**
         * Gets the #GDataContactsContact:file-as property.
         * @returns the name the contact's filed under, or %NULL
         */
        get_file_as(): string;
        /**
         * Gets the #GDataContactsContact:gender property.
         * @returns the gender of the contact, or %NULL
         */
        get_gender(): string;
        /**
         * Gets a list of the groups to which the contact belongs.
         * @returns a #GList of constant group ID URIs, or %NULL; free with g_list_free()
         */
        get_groups(): string[];
        /**
         * Gets a list of the hobbies of the contact.
         * @returns a #GList of hobby strings, or %NULL
         */
        get_hobbies(): string[];
        /**
         * Gets a list of the IM addresses owned by the contact.
         * @returns a #GList of #GDataGDIMAddress&lt;!-- --&gt;es, or %NULL
         */
        get_im_addresses(): GDIMAddress[];
        /**
         * Gets the #GDataContactsContact:initials property.
         * @returns the initials of the contact, or %NULL
         */
        get_initials(): string;
        /**
         * Gets a list of the jots attached to the contact.
         * @returns a #GList of #GDataGContactJots, or %NULL
         */
        get_jots(): GContactJot[];
        /**
         * Gets a list of the languages of the contact.
         * @returns a #GList of #GDataGContactLanguages, or %NULL
         */
        get_languages(): GContactLanguage[];
        /**
         * Gets the #GDataContactsContact:maiden-name property.
         * @returns the maiden name of the contact, or %NULL
         */
        get_maiden_name(): string;
        /**
         * Gets the #GDataContactsContact:mileage property.
         * @returns a mileage associated with the contact, or %NULL
         */
        get_mileage(): string;
        /**
         * Gets the #GDataContactsContact:name property.
         * @returns the contact's name, or %NULL
         */
        get_name(): GDName;
        /**
         * Gets the #GDataContactsContact:nickname property.
         * @returns the contact's nickname, or %NULL
         */
        get_nickname(): string;
        /**
         * Gets the #GDataContactsContact:occupation property.
         * @returns the contact's occupation, or %NULL
         */
        get_occupation(): string;
        /**
         * Gets a list of the organizations to which the contact belongs.
         * @returns a #GList of #GDataGDOrganizations, or %NULL
         */
        get_organizations(): GDOrganization[];
        /**
         * Gets a list of the phone numbers owned by the contact.
         * @returns a #GList of #GDataGDPhoneNumbers, or %NULL
         */
        get_phone_numbers(): GDPhoneNumber[];
        /**
         * Downloads and returns the contact's photo, if they have one. If the contact doesn't
         * have a photo (i.e. gdata_contacts_contact_get_photo_etag() returns %NULL), %NULL is returned, but
         * no error is set in `error`.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
         * If the operation was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         *
         * If there is an error getting the photo, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned.
         * @param service a #GDataContactsService
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the image data, or %NULL; free with g_free()
         */
        get_photo(service: ContactsService, cancellable?: Gio.Cancellable | null): Uint8Array;
        /**
         * Downloads and returns the contact's photo, if they have one, asynchronously. `self` and `service` are both reffed when this function is called, so
         * can safely be unreffed after this function returns.
         *
         * When the operation is finished, `callback` will be called. You can then call gdata_contacts_contact_get_photo_finish() to get the results of the
         * operation.
         *
         * For more details, see gdata_contacts_contact_get_photo(), which is the synchronous version of this function.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
         * If the operation was cancelled, the error %G_IO_ERROR_CANCELLED will be returned by gdata_contacts_contact_get_photo_finish().
         *
         * If there is an error getting the photo, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned by gdata_contacts_contact_get_photo_finish().
         * @param service a #GDataContactsService
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the photo has been retrieved, or %NULL
         */
        get_photo_async(
            service: ContactsService,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Returns the ETag for the contact's attached photo, if it exists. If it does exist, the contact's photo can be retrieved using
         * gdata_contacts_contact_get_photo(). If it doesn't exist, %NULL will be returned, and the contact doesn't have a photo (so calling
         * gdata_contacts_contact_get_photo() will also return %NULL)
         * @returns the contact's photo's ETag if it exists, %NULL otherwise
         */
        get_photo_etag(): string;
        /**
         * Finishes an asynchronous contact photo retrieval operation started with gdata_contacts_contact_get_photo_async(). If the contact doesn't have a
         * photo (i.e. gdata_contacts_contact_get_photo_etag() returns %NULL), %NULL is returned, but no error is set in `error`.
         *
         * If there is an error getting the photo, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned. `length` will be set to
         * &lt;code class="literal"&gt;0&lt;/code&gt; and `content_type` will be set to %NULL.
         * @param async_result a #GAsyncResult
         * @returns the image data, or %NULL; free with g_free()
         */
        get_photo_finish(async_result: Gio.AsyncResult): Uint8Array;
        /**
         * Gets a list of the postal addresses owned by the contact.
         * @returns a #GList of #GDataGDPostalAddress&lt;!-- --&gt;es, or %NULL
         */
        get_postal_addresses(): GDPostalAddress[];
        /**
         * Gets the contact's primary calendar, if one exists.
         * @returns a #GDataGContactCalendar, or %NULL
         */
        get_primary_calendar(): GContactCalendar;
        /**
         * Gets the contact's primary e-mail address, if one exists.
         * @returns a #GDataGDEmailAddress, or %NULL
         */
        get_primary_email_address(): GDEmailAddress;
        /**
         * Gets the contact's primary IM address, if one exists.
         * @returns a #GDataGDIMAddress, or %NULL
         */
        get_primary_im_address(): GDIMAddress;
        /**
         * Gets the contact's primary organization, if one exists.
         * @returns a #GDataGDOrganization, or %NULL
         */
        get_primary_organization(): GDOrganization;
        /**
         * Gets the contact's primary phone number, if one exists.
         * @returns a #GDataGDPhoneNumber, or %NULL
         */
        get_primary_phone_number(): GDPhoneNumber;
        /**
         * Gets the contact's primary postal address, if one exists.
         * @returns a #GDataGDPostalAddress, or %NULL
         */
        get_primary_postal_address(): GDPostalAddress;
        /**
         * Gets the contact's primary website, if one exists.
         * @returns a #GDataGContactWebsite, or %NULL
         */
        get_primary_website(): GContactWebsite;
        /**
         * Gets the #GDataContactsContact:priority property.
         * @returns the contact's priority, or %NULL
         */
        get_priority(): string;
        /**
         * Gets a list of the relations of the contact.
         * @returns a #GList of #GDataGContactRelations, or %NULL
         */
        get_relations(): GContactRelation[];
        /**
         * Gets the #GDataContactsContact:sensitivity property.
         * @returns the contact's sensitivity, or %NULL
         */
        get_sensitivity(): string;
        /**
         * Gets the #GDataContactsContact:short-name property.
         * @returns the contact's short name, or %NULL
         */
        get_short_name(): string;
        /**
         * Gets the #GDataContactsContact:subject property.
         * @returns the contact's subject, or %NULL
         */
        get_subject(): string;
        /**
         * Gets the value of a user-defined field of the contact. User-defined fields are settable by the user through the Google Contacts web interface,
         * in contrast to extended properties, which are visible and settable only through the GData interface.
         *
         * The `name` of the field may not be %NULL, but may be an empty string.
         * @param name the field name; an arbitrary, case-sensitive, unique string
         * @returns the field's value, or %NULL
         */
        get_user_defined_field(name: string): string;
        /**
         * Gets the full list of user-defined fields of the contact; a hash table mapping field name to value.
         * @returns a #GHashTable of user-defined fields
         */
        get_user_defined_fields(): GLib.HashTable<any, any>;
        /**
         * Gets a list of the websites of the contact.
         * @returns a #GList of #GDataGContactWebsites, or %NULL
         */
        get_websites(): GContactWebsite[];
        /**
         * Returns whether the contact has recently been deleted. This will always return
         * %FALSE unless #GDataContactsQuery:show-deleted has been set to
         * %TRUE for the query which returned the contact; then this function will return
         * %TRUE only if the contact has been deleted.
         *
         * If a contact has been deleted, no other information is available about it. This
         * is designed to allow contacts to be deleted from local address books using
         * incremental updates from the server (e.g. with #GDataQuery:updated-min and
         * #GDataContactsQuery:show-deleted).
         * @returns %TRUE if the contact has been deleted, %FALSE otherwise
         */
        is_deleted(): boolean;
        /**
         * Returns whether the contact has recently been removed from the given group on the server. This
         * will always return %FALSE unless #GDataContactsQuery:show-deleted has been set to
         * %TRUE for the query which returned the contact.
         *
         * If you've just removed a contact from a group locally using gdata_contacts_contact_remove_group(), %FALSE will still be returned by this function,
         * as the change hasn't been sent to the server.
         * @param href the group's ID URI
         * @returns %TRUE if the contact has recently been removed from the group, %FALSE otherwise
         */
        is_group_deleted(href: string): boolean;
        /**
         * Removes all calendars from the contact.
         */
        remove_all_calendars(): void;
        /**
         * Removes all e-mail addresses from the contact.
         */
        remove_all_email_addresses(): void;
        /**
         * Removes all events from the contact.
         */
        remove_all_events(): void;
        /**
         * Removes all external IDs from the contact.
         */
        remove_all_external_ids(): void;
        /**
         * Removes all hobbies from the contact.
         */
        remove_all_hobbies(): void;
        /**
         * Removes all IM addresses from the contact.
         */
        remove_all_im_addresses(): void;
        /**
         * Removes all jots from the contact.
         */
        remove_all_jots(): void;
        /**
         * Removes all languages from the contact.
         */
        remove_all_languages(): void;
        /**
         * Removes all organizations from the contact.
         */
        remove_all_organizations(): void;
        /**
         * Removes all phone numbers from the contact.
         */
        remove_all_phone_numbers(): void;
        /**
         * Removes all postal addresses from the contact.
         */
        remove_all_postal_addresses(): void;
        /**
         * Removes all relations from the contact.
         */
        remove_all_relations(): void;
        /**
         * Removes all websites from the contact.
         */
        remove_all_websites(): void;
        /**
         * Removes the contact from the given group. `href` should be a URI.
         * @param href the group's ID URI
         */
        remove_group(href: string): void;
        /**
         * Sets the #GDataContactsContact:billing-information property to `billing_information`.
         *
         * If `billing_information` is %NULL, the contact's billing information will be removed.
         * @param billing_information the new billing information for the contact, or %NULL
         */
        set_billing_information(billing_information?: string | null): void;
        /**
         * Sets the #GDataContactsContact:birthday property to `birthday` and the #GDataContactsContact:birthday-has-year property to `birthday_has_year`.
         * See gdata_contacts_contact_get_birthday() for an explanation of the interaction between these two properties.
         *
         * If `birthday` is %NULL, the contact's birthday will be removed.
         * @param birthday the new birthday, or %NULL
         * @param birthday_has_year %TRUE if @birthday's year is relevant, %FALSE otherwise
         */
        set_birthday(birthday: GLib.Date | null, birthday_has_year: boolean): void;
        /**
         * Sets the #GDataContactsContact:directory-server property to `directory_server`.
         *
         * If `directory_server` is %NULL, the contact's directory server will be removed.
         * @param directory_server the new name or address of a directory server associated with the contact, or %NULL
         */
        set_directory_server(directory_server?: string | null): void;
        /**
         * Sets the value of a contact's extended property. Extended property names are unique (but of the client's choosing),
         * and reusing the same property name will result in the old value of that property being overwritten.
         *
         * To unset a property, set `value` to %NULL or an empty string.
         *
         * A contact may have up to 10 extended properties, and each should be reasonably small (i.e. not a photo or ringtone).
         * For more information, see the &lt;ulink type="http"
         * url="http://code.google.com/apis/contacts/docs/2.0/reference.html#ProjectionsAndExtended"&gt;online documentation&lt;/ulink&gt;.
         * %FALSE will be returned if you attempt to add more than 10 extended properties.
         * @param name the property name; an arbitrary, unique string
         * @param value the property value, or %NULL
         * @returns %TRUE if the property was updated or deleted successfully, %FALSE otherwise
         */
        set_extended_property(name: string, value?: string | null): boolean;
        /**
         * Sets the #GDataContactsContact:file-as property to `file_as`.
         *
         * If `file_as` is %NULL, the contact will be filed under their full name.
         * @param file_as the new name to file the contact under, or %NULL
         */
        set_file_as(file_as?: string | null): void;
        /**
         * Sets the #GDataContactsContact:gender property to `gender`.
         *
         * If `gender` is %NULL, the contact's gender will be removed.
         * @param gender the new gender of the contact, or %NULL
         */
        set_gender(gender?: string | null): void;
        /**
         * Sets the #GDataContactsContact:initials property to `initials`.
         *
         * If `initials` is %NULL, the contact's initials will be removed.
         * @param initials the new initials of the contact, or %NULL
         */
        set_initials(initials?: string | null): void;
        /**
         * Sets the #GDataContactsContact:maiden-name property to `maiden_name`.
         *
         * If `maiden_name` is %NULL, the contact's maiden name will be removed.
         * @param maiden_name the new maiden name of the contact, or %NULL
         */
        set_maiden_name(maiden_name?: string | null): void;
        /**
         * Sets the #GDataContactsContact:mileage property to `mileage`.
         *
         * If `mileage` is %NULL, the contact's mileage will be removed.
         * @param mileage the new mileage associated with the contact, or %NULL
         */
        set_mileage(mileage?: string | null): void;
        /**
         * Sets the #GDataContactsContact:name property to `name,` and increments its reference count.
         *
         * `name` must not be %NULL, though all its properties may be %NULL.
         * @param name the new #GDataGDName
         */
        set_name(name: GDName): void;
        /**
         * Sets the #GDataContactsContact:nickname property to `nickname`.
         *
         * If `nickname` is %NULL, the contact's nickname will be removed.
         * @param nickname the new nickname, or %NULL
         */
        set_nickname(nickname?: string | null): void;
        /**
         * Sets the #GDataContactsContact:occupation property to `occupation`.
         *
         * If `occupation` is %NULL, the contact's occupation will be removed.
         * @param occupation the contact's new occupation, or %NULL
         */
        set_occupation(occupation?: string | null): void;
        /**
         * Sets the contact's photo to `data` or, if `data` is %NULL, deletes the contact's photo. `content_type` must be specified if `data` is non-%NULL.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
         * If the operation was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         *
         * If there is an error setting the photo, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned.
         * @param service a #GDataContactsService
         * @param data the image data, or %NULL
         * @param length the image length, in bytes
         * @param content_type the content type of the image, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE otherwise
         */
        set_photo(
            service: ContactsService,
            data: number | null,
            length: number,
            content_type?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Sets the contact's photo to `data` or, if `data` is %NULL, deletes the contact's photo. `content_type` must be specified if `data` is non-%NULL. `self,`
         * `service,` `data` and `content_type` are all reffed and copied when this function is called, so can safely be unreffed after this function returns.
         *
         * When the operation is finished, `callback` will be called. You can then call gdata_contacts_contact_set_photo_finish() to get the results of the
         * operation.
         *
         * For more details, see gdata_contacts_contact_set_photo(), which is the synchronous version of this function.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
         * If the operation was cancelled, the error %G_IO_ERROR_CANCELLED will be returned by gdata_contacts_contact_set_photo_finish().
         *
         * If there is an error setting the photo, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned by gdata_contacts_contact_set_photo_finish().
         * @param service a #GDataContactsService
         * @param data the image data, or %NULL
         * @param length the image length, in bytes
         * @param content_type the content type of the image, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the photo has been set, or %NULL
         */
        set_photo_async(
            service: ContactsService,
            data: number | null,
            length: number,
            content_type?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous contact photo setting operation started with gdata_contacts_contact_set_photo_async().
         *
         * If there is an error setting the photo, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned.
         * @param async_result a #GAsyncResult
         * @returns %TRUE on success, %FALSE otherwise
         */
        set_photo_finish(async_result: Gio.AsyncResult): boolean;
        /**
         * Sets the #GDataContactsContact:priority property to `priority`.
         *
         * If `priority` is %NULL, the contact's priority will be removed.
         * @param priority the contact's new priority, or %NULL
         */
        set_priority(priority?: string | null): void;
        /**
         * Sets the #GDataContactsContact:sensitivity property to `sensitivity`.
         *
         * If `sensitivity` is %NULL, the contact's sensitivity will be removed.
         * @param sensitivity the contact's new sensitivity, or %NULL
         */
        set_sensitivity(sensitivity?: string | null): void;
        /**
         * Sets the #GDataContactsContact:short-name property to `short_name`.
         *
         * If `short_name` is %NULL, the contact's short name will be removed.
         * @param short_name the contact's new short name, or %NULL
         */
        set_short_name(short_name?: string | null): void;
        /**
         * Sets the #GDataContactsContact:subject property to `subject`.
         *
         * If `subject` is %NULL, the contact's subject will be removed.
         * @param subject the contact's new subject, or %NULL
         */
        set_subject(subject?: string | null): void;
        /**
         * Sets the value of a contact's user-defined field. User-defined field names are unique (but of the client's choosing),
         * and reusing the same field name will result in the old value of that field being overwritten.
         *
         * The `name` of the field may not be %NULL, but may be an empty string.
         *
         * To unset a field, set `value` to %NULL.
         * @param name the field name; an arbitrary, case-sensitive, unique string
         * @param value the field value, or %NULL
         */
        set_user_defined_field(name: string, value?: string | null): void;
    }

    module ContactsGroup {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataContactsGroup structure are private and should never be accessed directly.
     */
    class ContactsGroup extends Entry {
        // Own properties of GData-0.0.ContactsGroup

        /**
         * Whether the entry has been deleted.
         */
        readonly deleted: boolean;
        /**
         * The last time the group was edited. If the group has not been edited yet, the content indicates the time it was created.
         *
         * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited"&gt;
         * Atom Publishing Protocol specification&lt;/ulink&gt;.
         */
        readonly edited: number;
        /**
         * The system group ID for this group, if it's a system group. If the group is not a system group, this is %NULL. Otherwise, it is one of the
         * four system group IDs: %GDATA_CONTACTS_GROUP_CONTACTS, %GDATA_CONTACTS_GROUP_FRIENDS, %GDATA_CONTACTS_GROUP_FAMILY and
         * %GDATA_CONTACTS_GROUP_COWORKERS.
         *
         * If this is non-%NULL, the group name stored in #GDataEntry:title will not be localised, so clients should provide localised group names of
         * their own for each of the system groups. Whether a group is a system group should be detected solely on the basis of the value of this
         * property, not by comparing the group name (#GDataEntry:title) or entry ID (#GDataEntry:id). The entry ID is not the same as the system
         * group ID.
         */
        readonly system_group_id: string;
        /**
         * The system group ID for this group, if it's a system group. If the group is not a system group, this is %NULL. Otherwise, it is one of the
         * four system group IDs: %GDATA_CONTACTS_GROUP_CONTACTS, %GDATA_CONTACTS_GROUP_FRIENDS, %GDATA_CONTACTS_GROUP_FAMILY and
         * %GDATA_CONTACTS_GROUP_COWORKERS.
         *
         * If this is non-%NULL, the group name stored in #GDataEntry:title will not be localised, so clients should provide localised group names of
         * their own for each of the system groups. Whether a group is a system group should be detected solely on the basis of the value of this
         * property, not by comparing the group name (#GDataEntry:title) or entry ID (#GDataEntry:id). The entry ID is not the same as the system
         * group ID.
         */
        readonly systemGroupId: string;

        // Constructors of GData-0.0.ContactsGroup

        static ['new'](id?: string | null): ContactsGroup;

        // Owm methods of GData-0.0.ContactsGroup

        /**
         * Gets the #GDataContactsGroup:edited property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the time the file was last edited, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_edited(): number;
        /**
         * Gets the full list of extended properties of the group; a hash table mapping property name to value.
         * @returns a #GHashTable of extended properties
         */
        get_extended_properties(): GLib.HashTable<any, any>;
        /**
         * Gets the value of an extended property of the group. Each group can have up to 10 client-set extended properties to store data of the client's
         * choosing.
         * @param name the property name; an arbitrary, unique string
         * @returns the property's value, or %NULL
         */
        get_extended_property(name: string): string;
        /**
         * Gets the #GDataContactsGroup:system-group-id property. If the group is not a system group, %NULL will be returned.
         * @returns the group's system group ID, or %NULL
         */
        get_system_group_id(): string;
        /**
         * Returns whether the group has recently been deleted. This will always return %FALSE unless #GDataContactsQuery:show-deleted has been set to %TRUE
         * for the query which returned the group; then this function will return %TRUE only if the group has been deleted.
         *
         * If a group has been deleted, no other information is available about it. This is designed to allow groups to be deleted from local address
         * books using incremental updates from the server (e.g. with #GDataQuery:updated-min and #GDataContactsQuery:show-deleted).
         * @returns %TRUE if the group has been deleted, %FALSE otherwise
         */
        is_deleted(): boolean;
        /**
         * Sets the value of a group's extended property. Extended property names are unique (but of the client's choosing), and reusing the same property
         * name will result in the old value of that property being overwritten.
         *
         * To unset a property, set `value` to %NULL or an empty string.
         *
         * A group may have up to 10 extended properties, and each should be reasonably small (i.e. not a photo or ringtone). For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/2.0/reference.html#ProjectionsAndExtended"&gt;online documentation&lt;/ulink&gt;.
         * %FALSE will be returned if you attempt to add more than 10 extended properties.
         * @param name the property name; an arbitrary, unique string
         * @param value the property value, or %NULL
         * @returns %TRUE if the property was updated or deleted successfully, %FALSE otherwise
         */
        set_extended_property(name: string, value?: string | null): boolean;
    }

    module ContactsQuery {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataContactsQuery structure are private and should never be accessed directly.
     */
    class ContactsQuery extends Query {
        // Own properties of GData-0.0.ContactsQuery

        /**
         * Constrains the results to only those belonging to the group specified. The value of this parameter
         * should be a group ID URI.
         */
        group: string;
        /**
         * Sorting criterion. The only supported value is &lt;literal&gt;lastmodified&lt;/literal&gt;.
         */
        order_by: string;
        /**
         * Sorting criterion. The only supported value is &lt;literal&gt;lastmodified&lt;/literal&gt;.
         */
        orderBy: string;
        /**
         * Whether to include deleted contacts in the query feed. Deleted contacts return %TRUE
         * from gdata_contacts_contact_is_deleted(), and have no other information. They do not
         * normally appear in query results.
         */
        show_deleted: boolean;
        /**
         * Whether to include deleted contacts in the query feed. Deleted contacts return %TRUE
         * from gdata_contacts_contact_is_deleted(), and have no other information. They do not
         * normally appear in query results.
         */
        showDeleted: boolean;
        /**
         * Sorting order direction. Can be either &lt;literal&gt;ascending&lt;/literal&gt; or &lt;literal&gt;descending&lt;/literal&gt;.
         */
        sort_order: string;
        /**
         * Sorting order direction. Can be either &lt;literal&gt;ascending&lt;/literal&gt; or &lt;literal&gt;descending&lt;/literal&gt;.
         */
        sortOrder: string;

        // Constructors of GData-0.0.ContactsQuery

        static ['new'](q?: string | null): ContactsQuery;

        static new_with_limits(q: string | null, start_index: number, max_results: number): ContactsQuery;

        // Owm methods of GData-0.0.ContactsQuery

        /**
         * Gets the #GDataContactsQuery:group property.
         * @returns the group property, or %NULL if it is unset
         */
        get_group(): string;
        /**
         * Gets the #GDataContactsQuery:order-by property.
         * @returns the order by property, or %NULL if it is unset
         */
        get_order_by(): string;
        /**
         * Gets the #GDataContactsQuery:sort-order property.
         * @returns the sort order property, or %NULL if it is unset
         */
        get_sort_order(): string;
        /**
         * Sets the #GDataContactsQuery:group property of the #GDataContactsQuery to the new group ID URI, `group`.
         *
         * Set `group` to %NULL to unset the property in the query URI.
         * @param group a new group ID URI, or %NULL
         */
        set_group(group?: string | null): void;
        /**
         * Sets the #GDataContactsQuery:order-by property of the #GDataContactsQuery to the new order by string, `order_by`.
         *
         * Set `order_by` to %NULL to unset the property in the query URI.
         * @param order_by a new order by string, or %NULL
         */
        set_order_by(order_by?: string | null): void;
        /**
         * Sets the #GDataContactsQuery:show-deleted property of the #GDataContactsQuery.
         * @param show_deleted %TRUE to show deleted contacts, %FALSE otherwise
         */
        set_show_deleted(show_deleted: boolean): void;
        /**
         * Sets the #GDataContactsQuery:sort-order property of the #GDataContactsQuery to the new sort order string, `sort_order`.
         *
         * Set `sort_order` to %NULL to unset the property in the query URI.
         * @param sort_order a new sort order string, or %NULL
         */
        set_sort_order(sort_order?: string | null): void;
    }

    module ContactsService {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataContactsService structure are private and should never be accessed directly.
     */
    class ContactsService extends Service {
        // Constructors of GData-0.0.ContactsService

        static ['new'](authorizer?: Authorizer | null): ContactsService;

        // Owm methods of GData-0.0.ContactsService

        /**
         * The primary #GDataAuthorizationDomain for interacting with Google Contacts. This will not normally need to be used, as it's used internally
         * by the #GDataContactsService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
         * does not support natively, then this domain may be needed to authorize the requests.
         *
         * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
         */
        static get_primary_authorization_domain(): AuthorizationDomain;

        // Owm methods of GData-0.0.ContactsService

        /**
         * Inserts `contact` by uploading it to the online contacts service.
         *
         * For more details, see gdata_service_insert_entry().
         * @param contact the #GDataContactsContact to insert
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an updated #GDataContactsContact, or %NULL; unref with g_object_unref()
         */
        insert_contact(contact: ContactsContact, cancellable?: Gio.Cancellable | null): ContactsContact;
        /**
         * Inserts `contact` by uploading it to the online contacts service. `self` and `contact` are both reffed when this function is called, so can safely be
         * unreffed after this function returns.
         *
         * `callback` should call gdata_service_insert_entry_finish() to obtain a #GDataContactsContact representing the inserted contact and to check for
         * possible errors.
         *
         * For more details, see gdata_contacts_service_insert_contact(), which is the synchronous version of this function,
         * and gdata_service_insert_entry_async(), which is the base asynchronous insertion function.
         * @param contact the #GDataContactsContact to insert
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when insertion is finished
         */
        insert_contact_async(
            contact: ContactsContact,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Inserts a new contact group described by `group`. The user must be authenticated to use this function.
         * @param group a #GDataContactsGroup to create on the server
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the inserted #GDataContactsGroup; unref with g_object_unref()
         */
        insert_group(group: ContactsGroup, cancellable?: Gio.Cancellable | null): ContactsGroup;
        /**
         * Inserts a new contact group described by `group`. The user must be authenticated to use this function. `self` and `group` are both reffed when this
         * function is called, so can safely be unreffed after this function returns.
         *
         * `callback` should call gdata_service_insert_entry_finish() to obtain a #GDataContactsGroup representing the inserted group and to check for possible
         * errors.
         *
         * For more details, see gdata_contacts_service_insert_group(), which is the synchronous version of this function, and
         * gdata_service_insert_entry_async(), which is the base asynchronous insertion function.
         * @param group the #GDataContactsGroup to insert
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when insertion is finished
         */
        insert_group_async(
            group: ContactsGroup,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Queries the service to return a list of contacts matching the given `query`.
         *
         * For more details, see gdata_service_query().
         * @param query a #GDataQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @returns a #GDataFeed of query results; unref with g_object_unref()
         */
        query_contacts(
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
        /**
         * Queries the service to return a list of contacts matching the given `query`. `self` and
         * `query` are all reffed when this function is called, so can safely be unreffed after this function returns.
         *
         * For more details, see gdata_contacts_service_query_contacts(), which is the synchronous version of this function,
         * and gdata_service_query_async(), which is the base asynchronous query function.
         * @param query a #GDataQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when the query is finished
         */
        query_contacts_async(
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Queries the service to return a list of groups matching the given `query`.
         *
         * For more details, see gdata_service_query().
         * @param query a #GDataQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @returns a #GDataFeed of query results; unref with g_object_unref()
         */
        query_groups(
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
        /**
         * Queries the service to return a list of groups matching the given `query`. `self` and `query` are all reffed when this function is called, so can
         * safely be unreffed after this function returns.
         *
         * For more details, see gdata_contacts_service_query_groups(), which is the synchronous version of this function, and gdata_service_query_async(),
         * which is the base asynchronous query function.
         * @param query a #GDataQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when the query is finished
         */
        query_groups_async(
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
    }

    module DocumentsAccessRule {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsAccessRule structure are private and
     * should never be accessed directly.
     */
    class DocumentsAccessRule extends AccessRule {
        // Constructors of GData-0.0.DocumentsAccessRule

        static ['new'](id: string): DocumentsAccessRule;
    }

    module DocumentsDocument {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsDocument structure are private and should never be accessed directly.
     */
    class DocumentsDocument extends DocumentsEntry {
        // Constructors of GData-0.0.DocumentsDocument

        static ['new'](id?: string | null): DocumentsDocument;

        // Owm methods of GData-0.0.DocumentsDocument

        /**
         * Downloads and returns the document file represented by the #GDataDocumentsDocument. If the document doesn't exist, %NULL is returned, but no error
         * is set in `error`.
         *
         * `export_format` should be the file extension of the desired output format for the document, from the list accepted by Google Documents. For example:
         * %GDATA_DOCUMENTS_PRESENTATION_PDF, %GDATA_DOCUMENTS_SPREADSHEET_ODS or %GDATA_DOCUMENTS_TEXT_ODT.
         *
         * If `self` is a #GDataDocumentsSpreadsheet, only the first grid, or sheet, in the spreadsheet will be downloaded for some export formats. To download
         * a specific a specific grid, use gdata_documents_spreadsheet_get_download_uri() with #GDataDownloadStream to download the grid manually. See the
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#downloading_spreadsheets"&gt;GData protocol
         * specification&lt;/ulink&gt; for more information.
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
         * @returns a #GDataDownloadStream to download the document with, or %NULL; unref with g_object_unref()
         */
        download(
            service: DocumentsService,
            export_format: string,
            cancellable?: Gio.Cancellable | null,
        ): DownloadStream;
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
         * @returns the download URI, or %NULL; free with g_free()
         */
        get_download_uri(export_format: string): string | null;
        /**
         * Gets the URI of the thumbnail for the #GDataDocumentsDocument. If no thumbnail exists for the document, %NULL will be returned.
         *
         * The thumbnail may then be downloaded using a #GDataDownloadStream.
         *
         * &lt;example&gt;
         * &lt;title&gt;Downloading a Document Thumbnail&lt;/title&gt;
         * &lt;programlisting&gt;
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
         * /&lt;!-- --&gt;* Prepare a download stream *&lt;!-- --&gt;/
         * download_stream = GDATA_DOWNLOAD_STREAM (gdata_download_stream_new (GDATA_SERVICE (service), NULL, thumbnail_uri, cancellable));
         *
         * /&lt;!-- --&gt;* Download into a new GdkPixbuf. This can be cancelled using 'cancellable'. *&lt;!-- --&gt;/
         * pixbuf = gdk_pixbuf_new_from_stream (G_INPUT_STREAM (download_stream), NULL, &amp;error);
         *
         * if (error != NULL) {
         * 	/&lt;!-- --&gt;* Handle the error. *&lt;!-- --&gt;/
         * 	g_error_free (error);
         * }
         *
         * g_object_unref (download_stream);
         * g_object_unref (cancellable);
         *
         * /&lt;!-- --&gt;* Do something with the GdkPixbuf. *&lt;!-- --&gt;/
         *
         * g_object_unref (pixbuf);
         * &lt;/programlisting&gt;
         * &lt;/example&gt;
         * @returns the URI of the document's thumbnail, or %NULL
         */
        get_thumbnail_uri(): string | null;
    }

    module DocumentsDrawing {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsDrawing structure are private and should never be accessed directly.
     */
    class DocumentsDrawing extends DocumentsDocument {
        // Constructors of GData-0.0.DocumentsDrawing

        static ['new'](id?: string | null): DocumentsDrawing;
    }

    module DocumentsDrive {
        // Constructor properties interface
    }

    class DocumentsDrive extends Entry {
        // Own properties of GData-0.0.DocumentsDrive

        /**
         * The human-readable name of this shared drive.
         */
        readonly name: string;

        // Owm methods of GData-0.0.DocumentsDrive

        /**
         * Returns the human-readable name of this shared drive.
         * @returns the drives's human-readable name, or %NULL if not set
         */
        get_name(): string | null;
    }

    module DocumentsDriveQuery {
        // Constructor properties interface
    }

    class DocumentsDriveQuery extends Query {
        // Constructors of GData-0.0.DocumentsDriveQuery

        static ['new'](q?: string | null): DocumentsDriveQuery;
    }

    module DocumentsEntry {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsEntry structure are private and should never be accessed directly.
     */
    abstract class DocumentsEntry extends Entry {
        // Own properties of GData-0.0.DocumentsEntry

        /**
         * Indicates whether the current user can edit this file.
         */
        readonly can_edit: boolean;
        /**
         * Indicates whether the current user can edit this file.
         */
        readonly canEdit: boolean;
        /**
         * The document ID of the document, which is different from its entry ID (GDataEntry:id). The
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#terminology_used_in_this_guide"&gt;online GData
         * Documentation&lt;/ulink&gt; refers to these as “untyped resource IDs”.
         */
        readonly document_id: string;
        /**
         * The document ID of the document, which is different from its entry ID (GDataEntry:id). The
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#terminology_used_in_this_guide"&gt;online GData
         * Documentation&lt;/ulink&gt; refers to these as “untyped resource IDs”.
         */
        readonly documentId: string;
        /**
         * The last time the document was edited. If the document has not been edited yet, the content indicates the time it was created.
         */
        readonly edited: number;
        /**
         * The size of the document. This is only set for non-document files.
         * Standard formats, such as #GDataDocumentsText,
         * #GDataDocumentsSpreadsheet and #GDataDocumentsFolder are not binary
         * data and so have no size. Measured in bytes.
         */
        readonly file_size: number;
        /**
         * The size of the document. This is only set for non-document files.
         * Standard formats, such as #GDataDocumentsText,
         * #GDataDocumentsSpreadsheet and #GDataDocumentsFolder are not binary
         * data and so have no size. Measured in bytes.
         */
        readonly fileSize: number;
        /**
         * Indicates whether the document entry has been deleted (moved to the trash). Deleted documents will only
         * appear in query results if the #GDataDocumentsQuery:show-deleted property is %TRUE.
         */
        is_deleted: boolean;
        /**
         * Indicates whether the document entry has been deleted (moved to the trash). Deleted documents will only
         * appear in query results if the #GDataDocumentsQuery:show-deleted property is %TRUE.
         */
        isDeleted: boolean;
        /**
         * Indicates the author of the last modification.
         */
        readonly last_modified_by: Author;
        /**
         * Indicates the author of the last modification.
         */
        readonly lastModifiedBy: Author;
        /**
         * The last time the document was viewed.
         */
        readonly last_viewed: number;
        /**
         * The last time the document was viewed.
         */
        readonly lastViewed: number;
        /**
         * The amount of user quota the document is occupying. Currently, only arbitrary files consume file space quota (whereas standard document
         * formats, such as #GDataDocumentsText, #GDataDocumentsSpreadsheet and #GDataDocumentsFolder don't). Measured in bytes.
         *
         * This property will be &lt;code class="literal"&gt;0&lt;/code&gt; for documents which aren't consuming any quota.
         */
        readonly quota_used: number;
        /**
         * The amount of user quota the document is occupying. Currently, only arbitrary files consume file space quota (whereas standard document
         * formats, such as #GDataDocumentsText, #GDataDocumentsSpreadsheet and #GDataDocumentsFolder don't). Measured in bytes.
         *
         * This property will be &lt;code class="literal"&gt;0&lt;/code&gt; for documents which aren't consuming any quota.
         */
        readonly quotaUsed: number;
        /**
         * The resource ID of the document. This should not normally need to be used in client code, and is mostly for internal use. To uniquely
         * identify a given document or folder, use its #GDataEntry:id.
         *
         * Resource IDs have the form:
         * &lt;literal&gt;&lt;replaceable&gt;document|drawing|pdf|spreadsheet|presentation|folder&lt;/replaceable&gt;:&lt;replaceable&gt;untyped resource ID&lt;/replaceable&gt;&lt;/literal&gt;; whereas
         * entry IDs have the form:
         * &lt;literal&gt;https://docs.google.com/feeds/id/&lt;replaceable&gt;resource ID&lt;/replaceable&gt;&lt;/literal&gt; in version 3 of the API.
         *
         * For more information, see the
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#resource_ids_explained"&gt;Google Documents
         * API reference&lt;/ulink&gt;.
         */
        readonly resource_id: string;
        /**
         * The resource ID of the document. This should not normally need to be used in client code, and is mostly for internal use. To uniquely
         * identify a given document or folder, use its #GDataEntry:id.
         *
         * Resource IDs have the form:
         * &lt;literal&gt;&lt;replaceable&gt;document|drawing|pdf|spreadsheet|presentation|folder&lt;/replaceable&gt;:&lt;replaceable&gt;untyped resource ID&lt;/replaceable&gt;&lt;/literal&gt;; whereas
         * entry IDs have the form:
         * &lt;literal&gt;https://docs.google.com/feeds/id/&lt;replaceable&gt;resource ID&lt;/replaceable&gt;&lt;/literal&gt; in version 3 of the API.
         *
         * For more information, see the
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#resource_ids_explained"&gt;Google Documents
         * API reference&lt;/ulink&gt;.
         */
        readonly resourceId: string;
        /**
         * The UNIX timestamp for the time at which this file was shared with the user.
         */
        readonly shared_with_me_date: number;
        /**
         * The UNIX timestamp for the time at which this file was shared with the user.
         */
        readonly sharedWithMeDate: number;
        /**
         * Indicates whether the document entry writers can invite others to edit the document.
         */
        writers_can_invite: boolean;
        /**
         * Indicates whether the document entry writers can invite others to edit the document.
         */
        writersCanInvite: boolean;

        // Owm methods of GData-0.0.DocumentsEntry

        /**
         * Inserts/updates `property` on "properties" list in `self`. Since, a GDataDocumentsProperty is uniquely identified by #GDataDocumentsProperty:key and #GDataDocumentsProperty:visibility, if no such property exists in the "properties" list, then a `property` will be appended to the list after incrementing the reference count.
         *
         * In case that there already exists a `property` in "properties", the #GDataDocumentsProperty inside the list will be updated to `property`. Note that #GDataDocumentsProperty:value has no role in determining the uniqueness of a #GDataDocumentsProperty.
         *
         * The changes made by this function will be local only and you need to explicitly update `self` by calling gdata_service_update_entry().
         * @param property a #GDataDocumentsProperty
         * @returns %TRUE if the @property doesn't exist in the "properties" list, or that #GDataDocumentsProperty:value  of @property has been set to %NULL by a call to gdata_documents_entry_remove_documents_property(). %FALSE if @property exists in "properties" list, or in the case that @self or @property aren't of proper types.
         */
        add_documents_property(property: DocumentsProperty): boolean;
        /**
         * Gets the #GDataDocumentsEntry:document-id property. The
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#terminology_used_in_this_guide"&gt;online GData Documentation&lt;/ulink&gt;
         * refers to these as “untyped resource IDs”.
         * @returns the document's document ID
         */
        get_document_id(): string;
        /**
         * Gets a list of the #GDataDocumentsPropertys for this entry.
         * @returns a #GList of pointers to #GDataDocumentsPropertys
         */
        get_document_properties(): DocumentsProperty[];
        /**
         * Gets the #GDataDocumentsEntry:edited property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the time the document was last edited, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_edited(): number;
        /**
         * Gets the #GDataDocumentsEntry:file-size property.
         * @returns the size of the document in bytes
         */
        get_file_size(): number;
        /**
         * Gets the #GDataDocumentsEntry:last-modified-by property.
         * @returns the author who last modified the document
         */
        get_last_modified_by(): Author;
        /**
         * Gets the #GDataDocumentsEntry:last-viewed property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the time the document was last viewed, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_last_viewed(): number;
        /**
         * Builds a path for the #GDataDocumentsEntry, starting from a root node and traversing the folders containing the document, then ending with the
         * document's ID.
         *
         * An example path would be: &lt;literal&gt;/folder_id1/folder_id2/document_id&lt;/literal&gt;.
         *
         * Note: the path is based on the entry/document IDs of the folders (#GDataEntry:id) and document (#GDataDocumentsEntry:document-id),
         * and not the entries' human-readable names (#GDataEntry:title).
         * @returns the folder hierarchy path containing the document, or %NULL; free with g_free()
         */
        get_path(): string;
        /**
         * Gets the #GDataDocumentsEntry:quota-used property.
         * @returns the number of quota bytes used by the document
         */
        get_quota_used(): number;
        /**
         * Gets the #GDataDocumentsEntry:resource-id property.
         * @returns the document's resource ID
         */
        get_resource_id(): string;
        /**
         * Gets the #GDataDocumentsEntry:shared-with-me-date property. If the property is unset, `-1` will be returned.
         * @returns the UNIX timestamp for the time at which this file was shared with the user, or `-1`
         */
        get_shared_with_me_date(): number;
        /**
         * The property specified by `property` will be removed from the "properties" list on `self`.
         *
         * Only #GDataDocumentsProperty:key and #GDataDocumentsProperty:visibility will be used to find `property` in "properties" list. #GDataDocumentsProperty:value has no role in determining the uniqueness of a #GDataDocumentsProperty.
         *
         * The changes made by this function will be local only and you need to explicitly update `self` by calling gdata_service_update_entry().
         * @param property a #GDataDocumentsProperty
         * @returns %TRUE if @property has been successfully removed from "properties" list on @self, %FALSE otherwise.
         */
        remove_documents_property(property: DocumentsProperty): boolean;
        /**
         * Sets the #GDataDocumentsEntry:writers-can-invite property to `writers_can_invite`.
         * @param writers_can_invite %TRUE if writers can invite other people to edit the document, %FALSE otherwise
         */
        set_writers_can_invite(writers_can_invite: boolean): void;
    }

    module DocumentsFeed {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsFeed structure are private and should never be accessed directly.
     */
    class DocumentsFeed extends Feed {}

    module DocumentsFolder {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsFolder structure are private and should never be accessed directly.
     */
    class DocumentsFolder extends DocumentsEntry {
        // Constructors of GData-0.0.DocumentsFolder

        static ['new'](id?: string | null): DocumentsFolder;
    }

    module DocumentsMetadata {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsMetadata structure are private and should never be accessed directly.
     */
    class DocumentsMetadata extends Parsable {
        // Own properties of GData-0.0.DocumentsMetadata

        /**
         * The user quota limit across all services. Measured in bytes.
         */
        readonly quota_total: number;
        /**
         * The user quota limit across all services. Measured in bytes.
         */
        readonly quotaTotal: number;
        /**
         * The amount of user quota used up across all services. Measured in bytes.
         */
        readonly quota_used: number;
        /**
         * The amount of user quota used up across all services. Measured in bytes.
         */
        readonly quotaUsed: number;

        // Owm methods of GData-0.0.DocumentsMetadata

        /**
         * Gets the #GDataDocumentsMetadata:quota-total property.
         * @returns the number of quota bytes available in total. Returns -1 if               there is no quota limit.
         */
        get_quota_total(): number;
        /**
         * Gets the #GDataDocumentsMetadata:quota-used property.
         * @returns the number of quota bytes used by the documents service
         */
        get_quota_used(): number;
    }

    module DocumentsPdf {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsPdf structure are private and should never be accessed directly.
     */
    class DocumentsPdf extends DocumentsDocument {
        // Constructors of GData-0.0.DocumentsPdf

        static ['new'](id?: string | null): DocumentsPdf;
    }

    module DocumentsPresentation {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsPresentation structure are private and should never be accessed directly.
     */
    class DocumentsPresentation extends DocumentsDocument {
        // Constructors of GData-0.0.DocumentsPresentation

        static ['new'](id?: string | null): DocumentsPresentation;
    }

    module DocumentsProperty {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsProperty structure are private and should never be accessed directly.
     */
    class DocumentsProperty extends Parsable {
        // Own properties of GData-0.0.DocumentsProperty

        /**
         * ETag of the property.
         *
         * For more information, see the &lt;ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties"&gt;Properties Resource&lt;/ulink&gt;
         */
        etag: string;
        /**
         * The key of this property.
         *
         * For more information, see the &lt;ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties"&gt;Properties Resource&lt;/ulink&gt;
         */
        key: string;
        /**
         * The value of this property. By default, it takes the an empty string ("").
         *
         * For more information, see the &lt;ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties"&gt;Properties Resource&lt;/ulink&gt;
         */
        value: string;
        /**
         * The visibility status of this property. The default value of
         * visibility is PRIVATE on a Drive Properties Resource object,
         * hence #GDataDocumentsProperty:visibility is %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE
         * by default. A private property restricts its visibility to only the app which created it.
         *
         * For more information, see the &lt;ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties"&gt;Properties Resource&lt;/ulink&gt;
         */
        visibility: string;

        // Constructors of GData-0.0.DocumentsProperty

        static ['new'](key: string): DocumentsProperty;

        // Owm methods of GData-0.0.DocumentsProperty

        /**
         * Returns the ETag of the property.
         * @returns the property's ETag. The ETag will never be empty; it's either %NULL or a valid ETag.
         */
        get_etag(): string;
        /**
         * Returns the key of the property. This will never be %NULL or an empty string ("").
         * @returns the property's key
         */
        get_key(): string;
        /**
         * Returns the value of the property.
         *
         * In the case that this value is %NULL, the Property Resource corresponding to `self` will be deleted from the properties array on a file's metadata, whereas in the case that it's empty string (""), it will be set as it is.
         * @returns the property's value. This can be %NULL or empty.
         */
        get_value(): string | null;
        /**
         * Returns the visibility status of the property.
         * @returns %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PUBLIC if the #GDataDocumentsProperty is publicly visible to other apps, %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE if the #GDataDocumentsProperty is restricted to the application which created it.
         */
        get_visibility(): string;
        /**
         * Sets #GDataDocumentsProperty:value to `value,` corresponding to the key.
         *
         * In the case that `value` is %NULL, the Property Resource corresponding to `self` will be deleted from the properties array on a file's metadata, whereas in the case that it's empty string (""), it will be set as it is.
         * @param value the new value of the property
         */
        set_value(value?: string | null): void;
        /**
         * Sets #GDataDocumentsProperty:visibility to %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PUBLIC for
         * public properties and %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE for
         * private properties (default).
         * @param visibility the new visibility status of the property
         */
        set_visibility(visibility: string): void;
    }

    module DocumentsQuery {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsQuery structure are private and should never be accessed directly.
     */
    class DocumentsQuery extends Query {
        // Own properties of GData-0.0.DocumentsQuery

        /**
         * Specifies whether the query should search for an exact title match for the #GDataDocumentsQuery:title parameter.
         */
        exact_title: boolean;
        /**
         * Specifies whether the query should search for an exact title match for the #GDataDocumentsQuery:title parameter.
         */
        exactTitle: boolean;
        /**
         * Specifies the ID of the folder in which to search.
         */
        folder_id: string;
        /**
         * Specifies the ID of the folder in which to search.
         */
        folderId: string;
        /**
         * A shortcut to request all documents that have been deleted.
         */
        show_deleted: boolean;
        /**
         * A shortcut to request all documents that have been deleted.
         */
        showDeleted: boolean;
        /**
         * Specifies if the request also returns folders.
         */
        show_folders: boolean;
        /**
         * Specifies if the request also returns folders.
         */
        showFolders: boolean;
        /**
         * A title (or title fragment) to be searched for. If #GDataDocumentsQuery:exact-title is %TRUE, an exact
         * title match will be searched for, otherwise substring matches will also be returned.
         */
        title: string;

        // Constructors of GData-0.0.DocumentsQuery

        static ['new'](q?: string | null): DocumentsQuery;

        static new_with_limits(q: string | null, start_index: number, max_results: number): DocumentsQuery;

        // Owm methods of GData-0.0.DocumentsQuery

        /**
         * Add `email_address` as a #GDataGDEmailAddress to the list of collaborators whose edited documents will be queried.
         * @param email_address the e-mail address of the collaborator to add
         */
        add_collaborator(email_address: string): void;
        /**
         * Add `email_address` as a #GDataGDEmailAddress to the list of readers, the documents readable by whom will be queried.
         * @param email_address the e-mail address of the reader to add
         */
        add_reader(email_address: string): void;
        /**
         * Gets a list of #GDataGDEmailAddress&lt;!-- --&gt;es of the document collaborators whose documents will be queried.
         * @returns a list of #GDataGDEmailAddress&lt;!-- --&gt;es of the collaborators concerned by the query, or %NULL
         */
        get_collaborator_addresses(): GDEmailAddress[];
        /**
         * Gets the #GDataDocumentsQuery:exact-title property.
         * @returns %TRUE if the query matches the exact title of documents with #GDataDocumentsQuery:title, %FALSE otherwise
         */
        get_exact_title(): boolean;
        /**
         * Gets the #GDataDocumentsQuery:folder-id property.
         * @returns the ID of the folder to be queried, or %NULL
         */
        get_folder_id(): string;
        /**
         * Gets a list of #GDataGDEmailAddress&lt;!-- --&gt;es of the document readers whose documents will be queried.
         * @returns a list of #GDataGDEmailAddress&lt;!-- --&gt;es of the readers concerned by the query, or %NULL
         */
        get_reader_addresses(): GDEmailAddress[];
        /**
         * Gets the #GDataDocumentsQuery:title property.
         * @returns the title (or title fragment) being queried for, or %NULL
         */
        get_title(): string;
        /**
         * Sets the #GDataDocumentsQuery:folder-id property to `folder_id`.
         *
         * Set `folder_id` to %NULL to unset the property in the query URI.
         * @param folder_id the ID of the folder to be queried, or %NULL
         */
        set_folder_id(folder_id?: string | null): void;
        /**
         * Sets the #GDataDocumentsQuery:show_deleted property to `show_deleted`.
         * @param show_deleted %TRUE if the request should return deleted entries, %FALSE otherwise
         */
        set_show_deleted(show_deleted: boolean): void;
        /**
         * Sets the #GDataDocumentsQuery:show-folders property to show_folders.
         * @param show_folders %TRUE if the request should return folders, %FALSE otherwise
         */
        set_show_folders(show_folders: boolean): void;
        /**
         * Sets the #GDataDocumentsQuery:title property to `title`.
         *
         * Set `title` to %NULL to unset the property in the query URI.
         * @param title the title (or title fragment) to query for, or %NULL
         * @param exact_title %TRUE if the query should match the exact @title, %FALSE otherwise
         */
        set_title(title: string | null, exact_title: boolean): void;
    }

    module DocumentsService {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsService structure are private and should never be accessed directly.
     */
    class DocumentsService extends Service {
        // Constructors of GData-0.0.DocumentsService

        static ['new'](authorizer?: Authorizer | null): DocumentsService;

        // Owm methods of GData-0.0.DocumentsService

        /**
         * The primary #GDataAuthorizationDomain for interacting with Google Documents. This will not normally need to be used, as it's used internally
         * by the #GDataDocumentsService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
         * does not support natively, then this domain may be needed to authorize the requests.
         *
         * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
         */
        static get_primary_authorization_domain(): AuthorizationDomain;
        /**
         * The #GDataAuthorizationDomain for interacting with spreadsheet data. This will not normally need to be used, as it's automatically used internally
         * by the #GDataDocumentsService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
         * does not support natively, then this domain may be needed to authorize the requests which pertain to the Google Spreadsheets Data API, such as
         * requests to download or upload spreadsheet documents.
         *
         * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
         */
        static get_spreadsheet_authorization_domain(): AuthorizationDomain;
        /**
         * Gets the upload URI for documents for the service.
         *
         * If `folder` is %NULL, the URI will be the one to upload documents to the "root" folder.
         * @param folder the #GDataDocumentsFolder into which to upload the document, or %NULL
         */
        static get_upload_uri(folder?: DocumentsFolder | null): string;

        // Owm methods of GData-0.0.DocumentsService

        /**
         * Add the given `entry` to the specified `folder,` and return an updated #GDataDocumentsEntry for `entry`. If the `entry` is already in another folder,
         * a copy will be added to the new folder. The copy and original will have different IDs. Note that `entry` can't be a #GDataDocumentsFolder that
         * already exists on the server. It can be a new #GDataDocumentsFolder, or a #GDataDocumentsDocument that is either new or already present on the
         * server.
         *
         * Errors from #GDataServiceError can be returned for exceptional conditions, as determined by the server.
         * @param entry the #GDataDocumentsEntry to copy
         * @param folder the #GDataDocumentsFolder to copy @entry into
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an updated #GDataDocumentsEntry, or %NULL; unref with g_object_unref()
         */
        add_entry_to_folder(
            entry: DocumentsEntry,
            folder: DocumentsFolder,
            cancellable?: Gio.Cancellable | null,
        ): DocumentsEntry;
        /**
         * Add the given `entry` to the specified `folder`. `self,` `entry` and `folder` are all reffed when this function is called, so can safely be unreffed
         * after this function returns.
         *
         * For more details, see gdata_documents_service_add_entry_to_folder(), which is the synchronous version of this function.
         *
         * When the operation is finished, `callback` will be called. You can then call gdata_documents_service_add_entry_to_folder_finish() to get the results
         * of the operation.
         * @param entry the #GDataDocumentsEntry to add to @folder
         * @param folder the #GDataDocumentsFolder to add @entry to
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the operation is finished, or %NULL
         */
        add_entry_to_folder_async(
            entry: DocumentsEntry,
            folder: DocumentsFolder,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish an asynchronous operation to add a #GDataDocumentsEntry to a folder started with gdata_documents_service_add_entry_to_folder_async().
         * @param async_result a #GAsyncResult
         * @returns an updated #GDataDocumentsEntry, or %NULL; unref with g_object_unref()
         */
        add_entry_to_folder_finish(async_result: Gio.AsyncResult): DocumentsEntry;
        /**
         * Copy the given `document,` producing a duplicate document in the same folder and returning its #GDataDocumentsDocument.
         *
         * Errors from #GDataServiceError can be returned for exceptional conditions, as determined by the server.
         * @param document the #GDataDocumentsDocument to copy
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the duplicate #GDataDocumentsDocument, or %NULL; unref with g_object_unref()
         */
        copy_document(document: DocumentsDocument, cancellable?: Gio.Cancellable | null): DocumentsDocument;
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
        copy_document_async(
            document: DocumentsDocument,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish an asynchronous operation to copy a #GDataDocumentsDocument started with gdata_documents_service_copy_document_async().
         * @param async_result a #GAsyncResult
         * @returns the duplicate #GDataDocumentsDocument, or %NULL; unref with g_object_unref()
         */
        copy_document_finish(async_result: Gio.AsyncResult): DocumentsDocument;
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
         * @returns the new or updated #GDataDocumentsDocument, or %NULL; unref with g_object_unref()
         */
        finish_upload(upload_stream: UploadStream): DocumentsDocument;
        /**
         * Gets a #GDataDocumentsMetadata object containing metadata about the documents
         * service itself, like how large the user quota is.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the service's metadata object; unref with g_object_unref()
         */
        get_metadata(cancellable?: Gio.Cancellable | null): DocumentsMetadata;
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
        get_metadata_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finish an asynchronous operation to get a #GDataDocumentsMetadata started with gdata_documents_service_get_metadata_async().
         * @param async_result a #GAsyncResult
         * @returns the service's metadata object; unref with g_object_unref()
         */
        get_metadata_finish(async_result: Gio.AsyncResult): DocumentsMetadata;
        /**
         * Queries the service to return a list of documents matching the given `query`. Note that `query` has to be a #GDataDocumentsQuery, rather than just
         * a #GDataQuery, as it uses the folder ID specified in #GDataDocumentsQuery:folder-id.
         *
         * For more details, see gdata_service_query().
         * @param query a #GDataDocumentsQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @returns a #GDataDocumentsFeed of query results; unref with g_object_unref()
         */
        query_documents(
            query?: DocumentsQuery | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): DocumentsFeed;
        /**
         * Queries the service to return a list of documents matching the given `query`. `self` and
         * `query` are both reffed when this function is called, so can safely be unreffed after this function returns.
         *
         * For more details, see gdata_documents_service_query_documents(), which is the synchronous version of this function,
         * and gdata_service_query_async(), which is the base asynchronous query function.
         * @param query a #GDataDocumentsQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        query_documents_async(
            query?: DocumentsQuery | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Queries the service to return a list of shared drives matching the given `query`.
         *
         * For more details, see gdata_service_query().
         * @param query a #GDataDocumentsDriveQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @returns a #GDataDocumentsFeed of query results; unref with g_object_unref()
         */
        query_drives(
            query?: DocumentsDriveQuery | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): DocumentsFeed;
        /**
         * Queries the service to return a list of shared drives matching the given `query`. `self` and
         * `query` are both reffed when this function is called, so can safely be unreffed after this function returns.
         *
         * For more details, see gdata_documents_service_query_drives(), which is the synchronous version of this function,
         * and gdata_service_query_async(), which is the base asynchronous query function.
         * @param query a #GDataDocumentsDriveQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        query_drives_async(
            query?: DocumentsDriveQuery | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Remove the given `entry` from `folder,` and return an updated #GDataDocumentsEntry for `entry`. `entry` will remain a member of any other folders it's
         * currently in. Note that `entry` can be either a #GDataDocumentsDocument or a #GDataDocumentsFolder.
         *
         * Errors from #GDataServiceError can be returned for exceptional conditions, as determined by the server.
         * @param entry the #GDataDocumentsEntry to remove
         * @param folder the #GDataDocumentsFolder from which we should remove @entry
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an updated #GDataDocumentsEntry, or %NULL; unref with g_object_unref()
         */
        remove_entry_from_folder(
            entry: DocumentsEntry,
            folder: DocumentsFolder,
            cancellable?: Gio.Cancellable | null,
        ): DocumentsEntry;
        /**
         * Remove the given `entry` from the specified `folder`. `self,` `entry` and `folder` are all reffed when this function is called, so can safely be unreffed
         * after this function returns.
         *
         * For more details, see gdata_documents_service_remove_entry_from_folder(), which is the synchronous version of this function.
         *
         * When the operation is finished, `callback` will be called. You can then call gdata_documents_service_remove_entry_from_folder_finish() to get the
         * results of the operation.
         * @param entry the #GDataDocumentsEntry to remove from @folder
         * @param folder the #GDataDocumentsFolder to remove @entry from
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the operation is finished, or %NULL
         */
        remove_entry_from_folder_async(
            entry: DocumentsEntry,
            folder: DocumentsFolder,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish an asynchronous operation to remove a #GDataDocumentsEntry from a folder started with
         * gdata_documents_service_remove_entry_from_folder_async().
         * @param async_result a #GAsyncResult
         * @returns an updated #GDataDocumentsEntry, or %NULL; unref with g_object_unref()
         */
        remove_entry_from_folder_finish(async_result: Gio.AsyncResult): DocumentsEntry;
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
         * @returns a #GDataUploadStream to write the document data to; unref with g_object_unref()
         */
        update_document(
            document: DocumentsDocument,
            slug: string,
            content_type: string,
            cancellable?: Gio.Cancellable | null,
        ): UploadStream;
        /**
         * Update the document using the properties from `document` and the document data written to the resulting #GDataUploadStream. If the document data does
         * not need to be changed, just the metadata, use gdata_service_update_entry() instead.
         *
         * Unlike gdata_documents_service_update_document(), this method performs a
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html"&gt;resumable upload&lt;/ulink&gt; which allows for correction of
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
         * @returns a #GDataUploadStream to write the document data to; unref with g_object_unref()
         */
        update_document_resumable(
            document: DocumentsDocument,
            slug: string,
            content_type: string,
            content_length: number,
            cancellable?: Gio.Cancellable | null,
        ): UploadStream;
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
         * @returns a #GDataUploadStream to write the document data to, or %NULL; unref with g_object_unref()
         */
        upload_document(
            document: DocumentsDocument | null,
            slug: string,
            content_type: string,
            folder?: DocumentsFolder | null,
            cancellable?: Gio.Cancellable | null,
        ): UploadStream;
        /**
         * Uploads a document to Google Documents, using the properties from `document` and the document data written to the resulting #GDataUploadStream. If
         * the document data does not need to be provided at the moment, just the metadata, use gdata_service_insert_entry() instead (e.g. in the case of
         * creating a new, empty file to be edited at a later date).
         *
         * Unlike gdata_documents_service_upload_document(), this method performs a
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html"&gt;resumable upload&lt;/ulink&gt; which allows for correction of
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
         * @returns a #GDataUploadStream to write the document data to, or %NULL; unref with g_object_unref()
         */
        upload_document_resumable(
            document: DocumentsDocument | null,
            slug: string,
            content_type: string,
            content_length: number,
            query?: DocumentsUploadQuery | null,
            cancellable?: Gio.Cancellable | null,
        ): UploadStream;
    }

    module DocumentsSpreadsheet {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsSpreadsheet structure are private and should never be accessed directly.
     */
    class DocumentsSpreadsheet extends DocumentsDocument {
        // Constructors of GData-0.0.DocumentsSpreadsheet

        static ['new'](id?: string | null): DocumentsSpreadsheet;

        // Owm methods of GData-0.0.DocumentsSpreadsheet

        /**
         * Builds and returns the download URI for the given #GDataDocumentsSpreadsheet in the desired format. Note that directly downloading
         * the document using this URI isn't possible, as authentication is required. You should instead use gdata_download_stream_new() with
         * the URI, and use the resulting #GInputStream.
         *
         * When requesting a &lt;code class="literal"&gt;"csv"&lt;/code&gt;, &lt;code class="literal"&gt;"tsv"&lt;/code&gt;, &lt;code class="literal"&gt;"pdf"&lt;/code&gt; or
         * &lt;code class="literal"&gt;"html"&lt;/code&gt; file you may specify an additional parameter called `gid` which indicates which grid, or sheet, you wish to get
         * (the index is &lt;code class="literal"&gt;0&lt;/code&gt;-based, so GID &lt;code class="literal"&gt;1&lt;/code&gt; actually refers to the second sheet on a given
         * spreadsheet).
         * @param export_format the format in which the spreadsheet should be exported when downloaded
         * @param gid the &lt;code class="literal"&gt;0&lt;/code&gt;-based sheet ID to download, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         * @returns the download URI; free with g_free()
         */
        get_download_uri(export_format: string, gid: number): string;
    }

    module DocumentsText {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsText structure are private and should never be accessed directly.
     */
    class DocumentsText extends DocumentsDocument {
        // Constructors of GData-0.0.DocumentsText

        static ['new'](id?: string | null): DocumentsText;
    }

    module DocumentsUploadQuery {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDocumentsUploadQuery structure are private and should never be accessed directly.
     */
    class DocumentsUploadQuery extends GObject.Object {
        // Own properties of GData-0.0.DocumentsUploadQuery

        /**
         * %TRUE to automatically convert the uploaded document into a standard format (such as a text document, spreadsheet, presentation, etc.).
         * %FALSE to upload the document without converting it; this allows for arbitrary files to be uploaded to Google Documents.
         *
         * For more information, see the
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#creating_or_uploading_files"&gt;online documentation&lt;/ulink&gt;.
         *
         * Note that uploading with this property set to %FALSE will only have an effect when using gdata_documents_service_update_document_resumable()
         * and not gdata_documents_service_update_document(). Additionally, the #GDataDocumentsDocument passed to
         * gdata_documents_service_update_document_resumable() must be a #GDataDocumentsDocument if this property is %FALSE, and a subclass of it
         * otherwise.
         */
        convert: boolean;
        /**
         * Folder to upload the document into. If this is %NULL, the document will be uploaded into the root folder.
         */
        folder: DocumentsFolder;

        // Constructors of GData-0.0.DocumentsUploadQuery

        static ['new'](): DocumentsUploadQuery;

        // Owm methods of GData-0.0.DocumentsUploadQuery

        /**
         * Builds an upload URI suitable for passing to gdata_upload_stream_new_resumable() in order to upload a document to Google Documents as described in
         * the
         * &lt;ulink type="http" url="https://developers.google.com/google-apps/documents-list/#uploading_a_new_document_or_file_with_both_metadata_and_content"&gt;
         * online documentation&lt;/ulink&gt;.
         * @returns a complete upload URI; free with g_free()
         */
        build_uri(): string;
        /**
         * Gets #GDataDocumentsUploadQuery:convert.
         * @returns %TRUE to convert documents to common formats, %FALSE to upload them unmodified
         */
        get_convert(): boolean;
        /**
         * Gets #GDataDocumentsUploadQuery:folder.
         * @returns the folder to upload into, or %NULL
         */
        get_folder(): DocumentsFolder | null;
        /**
         * Sets #GDataDocumentsUploadQuery:convert to `convert`.
         * @param convert %TRUE to convert documents to common formats, %FALSE to upload them unmodified
         */
        set_convert(convert: boolean): void;
        /**
         * Sets #GDataDocumentsUploadQuery:folder to `folder`.
         * @param folder a new folder to upload into, or %NULL
         */
        set_folder(folder?: DocumentsFolder | null): void;
    }

    module DownloadStream {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataDownloadStream structure are private and should never be accessed directly.
     */
    class DownloadStream extends Gio.InputStream {
        // Own properties of GData-0.0.DownloadStream

        /**
         * The authorization domain for the download, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be
         * authorized. This may be %NULL if authorization is not needed for the download.
         */
        authorization_domain: AuthorizationDomain;
        /**
         * The authorization domain for the download, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be
         * authorized. This may be %NULL if authorization is not needed for the download.
         */
        authorizationDomain: AuthorizationDomain;
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
        cancellable: Gio.Cancellable;
        /**
         * The length (in bytes) of the file being downloaded. This will initially be &lt;code class="literal"&gt;-1&lt;/code&gt;, and will be populated as soon as
         * the appropriate header is received from the server. Its value will never change after this.
         *
         * Note that change notifications for this property (#GObject::notify emissions) may be emitted in threads other than the one which created
         * the #GDataDownloadStream. It is the client's responsibility to ensure that any notification signal handlers are either multi-thread safe
         * or marshal the notification to the thread which owns the #GDataDownloadStream as appropriate.
         */
        readonly content_length: number;
        /**
         * The length (in bytes) of the file being downloaded. This will initially be &lt;code class="literal"&gt;-1&lt;/code&gt;, and will be populated as soon as
         * the appropriate header is received from the server. Its value will never change after this.
         *
         * Note that change notifications for this property (#GObject::notify emissions) may be emitted in threads other than the one which created
         * the #GDataDownloadStream. It is the client's responsibility to ensure that any notification signal handlers are either multi-thread safe
         * or marshal the notification to the thread which owns the #GDataDownloadStream as appropriate.
         */
        readonly contentLength: number;
        /**
         * The content type of the file being downloaded. This will initially be %NULL, and will be populated as soon as the appropriate header is
         * received from the server. Its value will never change after this.
         *
         * Note that change notifications for this property (#GObject::notify emissions) may be emitted in threads other than the one which created
         * the #GDataDownloadStream. It is the client's responsibility to ensure that any notification signal handlers are either multi-thread safe
         * or marshal the notification to the thread which owns the #GDataDownloadStream as appropriate.
         */
        readonly content_type: string;
        /**
         * The content type of the file being downloaded. This will initially be %NULL, and will be populated as soon as the appropriate header is
         * received from the server. Its value will never change after this.
         *
         * Note that change notifications for this property (#GObject::notify emissions) may be emitted in threads other than the one which created
         * the #GDataDownloadStream. It is the client's responsibility to ensure that any notification signal handlers are either multi-thread safe
         * or marshal the notification to the thread which owns the #GDataDownloadStream as appropriate.
         */
        readonly contentType: string;
        /**
         * The URI of the file to download. This must be HTTPS.
         */
        download_uri: string;
        /**
         * The URI of the file to download. This must be HTTPS.
         */
        downloadUri: string;
        /**
         * The service which is used to authorize the download, and to which the download relates.
         */
        service: Service;

        // Constructors of GData-0.0.DownloadStream

        static ['new'](
            service: Service,
            domain: AuthorizationDomain | null,
            download_uri: string,
            cancellable?: Gio.Cancellable | null,
        ): DownloadStream;

        // Owm methods of GData-0.0.DownloadStream

        /**
         * Gets the authorization domain used to authorize the download, as passed to gdata_download_stream_new(). It may be %NULL if authorization is not
         * needed for the download.
         * @returns the #GDataAuthorizationDomain used to authorize the download, or %NULL
         */
        get_authorization_domain(): AuthorizationDomain | null;
        /**
         * Gets the #GCancellable for the entire download operation, #GDataDownloadStream:cancellable.
         * @returns the #GCancellable for the entire download operation
         */
        get_cancellable(): Gio.Cancellable;
        /**
         * Gets the length (in bytes) of the file being downloaded. If the &lt;literal&gt;Content-Length&lt;/literal&gt; header has not yet
         * been received from the server, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the content length of the file being downloaded, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_content_length(): number;
        /**
         * Gets the content type of the file being downloaded. If the &lt;literal&gt;Content-Type&lt;/literal&gt; header has not yet
         * been received, %NULL will be returned.
         * @returns the content type of the file being downloaded, or %NULL
         */
        get_content_type(): string;
        /**
         * Gets the URI of the file being downloaded, as passed to gdata_download_stream_new().
         * @returns the URI of the file being downloaded
         */
        get_download_uri(): string;
        /**
         * Gets the service used to authorize the download, as passed to gdata_download_stream_new().
         * @returns the #GDataService used to authorize the download
         */
        get_service(): Service;
    }

    module Entry {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataEntry structure are private and should never be accessed directly.
     */
    class Entry extends Parsable {
        // Own properties of GData-0.0.Entry

        /**
         * The content of the entry. This is mutually exclusive with #GDataEntry:content.
         *
         * For more information, see the &lt;ulink type="http"
         * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.content"&gt;Atom specification&lt;/ulink&gt;.
         */
        content: string;
        /**
         * A URI pointing to the location of the content of the entry. This is mutually exclusive with #GDataEntry:content.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.content"&gt;Atom specification&lt;/ulink&gt;.
         */
        content_uri: string;
        /**
         * A URI pointing to the location of the content of the entry. This is mutually exclusive with #GDataEntry:content.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.content"&gt;Atom specification&lt;/ulink&gt;.
         */
        contentUri: string;
        /**
         * An identifier for a particular version of the entry. This changes every time the entry on the server changes, and can be used
         * for conditional retrieval and locking.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/reference.html#ResourceVersioning"&gt;
         * GData specification&lt;/ulink&gt;.
         */
        etag: string;
        /**
         * A permanent, universally unique identifier for the entry, in IRI form. This is %NULL for new entries (i.e. ones which haven't yet been
         * inserted on the server, created with gdata_entry_new()), and a non-empty IRI string for all other entries.
         *
         * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.id"&gt;
         * Atom specification&lt;/ulink&gt;.
         */
        id: string;
        /**
         * Whether the entry has been inserted on the server. This is %FALSE for entries which have just been created using gdata_entry_new() and
         * %TRUE for entries returned from the server by queries. It is set to %TRUE when an entry is inserted using gdata_service_insert_entry().
         */
        readonly is_inserted: boolean;
        /**
         * Whether the entry has been inserted on the server. This is %FALSE for entries which have just been created using gdata_entry_new() and
         * %TRUE for entries returned from the server by queries. It is set to %TRUE when an entry is inserted using gdata_service_insert_entry().
         */
        readonly isInserted: boolean;
        /**
         * The date and time the entry was first published or made available.
         *
         * For more information, see the &lt;ulink type="http"
         * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.published"&gt;Atom specification&lt;/ulink&gt;.
         */
        readonly published: number;
        /**
         * The ownership rights pertaining to the entry.
         *
         * For more information, see the &lt;ulink type="http"
         * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.rights"&gt;Atom specification&lt;/ulink&gt;.
         */
        rights: string;
        /**
         * A short summary, abstract, or excerpt of the entry.
         *
         * For more information, see the &lt;ulink type="http"
         * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.summary"&gt;Atom specification&lt;/ulink&gt;.
         */
        summary: string;
        /**
         * A human-readable title for the entry.
         *
         * For more information, see the &lt;ulink type="http"
         * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.title"&gt;Atom specification&lt;/ulink&gt;.
         */
        title: string;
        /**
         * The date and time when the entry was most recently updated significantly.
         *
         * For more information, see the &lt;ulink type="http"
         * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.updated"&gt;Atom specification&lt;/ulink&gt;.
         */
        readonly updated: number;

        // Constructors of GData-0.0.Entry

        static ['new'](id?: string | null): Entry;

        // Owm methods of GData-0.0.Entry

        /**
         * Adds `author` to the list of authors in the given #GDataEntry and increments its reference count.
         *
         * Duplicate authors will not be added to the list.
         * @param author a #GDataAuthor to add
         */
        add_author(author: Author): void;
        /**
         * Adds `category` to the list of categories in the given #GDataEntry, and increments its reference count.
         *
         * Duplicate categories will not be added to the list.
         * @param category a #GDataCategory to add
         */
        add_category(category: Category): void;
        /**
         * Adds `_link` to the list of links in the given #GDataEntry and increments its reference count.
         *
         * Duplicate links will not be added to the list.
         * @param _link a #GDataLink to add
         */
        add_link(_link: Link): void;
        /**
         * Gets a list of the #GDataAuthors for this entry.
         * @returns a #GList of #GDataAuthors
         */
        get_authors(): Author[];
        /**
         * Gets a list of the #GDataCategorys containing this entry.
         * @returns a #GList of #GDataCategorys
         */
        get_categories(): Category[];
        /**
         * Returns the textual content in this entry. If the content in this entry is pointed to by a URI, %NULL will be returned; the content URI will be
         * returned by gdata_entry_get_content_uri().
         * @returns the entry's content, or %NULL
         */
        get_content(): string;
        /**
         * Returns a URI pointing to the content of this entry. If the content in this entry is stored directly, %NULL will be returned; the content will be
         * returned by gdata_entry_get_content().
         * @returns a URI pointing to the entry's content, or %NULL
         */
        get_content_uri(): string;
        /**
         * Returns the ETag of the entry; a unique identifier for each version of the entry. For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/reference.html#ResourceVersioning"&gt;online documentation&lt;/ulink&gt;.
         *
         * The ETag will never be empty; it's either %NULL or a valid ETag.
         * @returns the entry's ETag, or %NULL
         */
        get_etag(): string | null;
        /**
         * Returns the URN ID of the entry; a unique and permanent identifier for the object the entry represents.
         *
         * The ID may be %NULL if and only if the #GDataEntry has been newly created, and hasn't yet been inserted on the server.
         * @returns the entry's ID, or %NULL
         */
        get_id(): string | null;
        /**
         * Gets the time the entry was originally published.
         * @returns the UNIX timestamp for the original publish time of the entry
         */
        get_published(): number;
        /**
         * Returns the rights pertaining to the entry, or %NULL if not set.
         * @returns the entry's rights information
         */
        get_rights(): string;
        /**
         * Returns the summary of the entry.
         * @returns the entry's summary, or %NULL
         */
        get_summary(): string;
        /**
         * Returns the title of the entry. This will never be %NULL, but may be an empty string.
         * @returns the entry's title
         */
        get_title(): string;
        /**
         * Gets the time the entry was last updated.
         * @returns the UNIX timestamp for the last update of the entry
         */
        get_updated(): number;
        /**
         * Looks up a link by relation type from the list of links in the entry. If the link has one of the standard Atom relation types,
         * use one of the defined `rel` values, instead of a static string. e.g. %GDATA_LINK_EDIT or %GDATA_LINK_SELF.
         *
         * In the rare event of requiring a list of links with the same `rel` value, use gdata_entry_look_up_links().
         * @param rel the value of the &lt;structfield&gt;rel&lt;/structfield&gt; attribute of the desired link
         * @returns a #GDataLink, or %NULL if one was not found
         */
        look_up_link(rel: string): Link;
        /**
         * Looks up a list of links by relation type from the list of links in the entry. If the links have one of the standard Atom
         * relation types, use one of the defined `rel` values, instead of a static string. e.g. %GDATA_LINK_EDIT or %GDATA_LINK_SELF.
         *
         * If you will only use the first link found, consider calling gdata_entry_look_up_link() instead.
         * @param rel the value of the &lt;structfield&gt;rel&lt;/structfield&gt; attribute of the desired links
         * @returns a #GList of #GDataLinks, or %NULL if none were found; free the list with g_list_free()
         */
        look_up_links(rel: string): Link[];
        /**
         * Removes `_link` from the list of links in the given #GDataEntry and decrements its reference count (since the #GDataEntry held a reference to it
         * while it was in the list).
         * @param _link a #GDataLink to remove
         * @returns %TRUE if @_link was found in the #GDataEntry and removed, %FALSE if it was not found
         */
        remove_link(_link: Link): boolean;
        /**
         * Sets the entry's content to `content`. This unsets #GDataEntry:content-uri.
         * @param content the new content for the entry, or %NULL
         */
        set_content(content?: string | null): void;
        /**
         * Sets the URI pointing to the entry's content to `content`. This unsets #GDataEntry:content.
         * @param content_uri the new URI pointing to the content for the entry, or %NULL
         */
        set_content_uri(content_uri?: string | null): void;
        /**
         * Sets the rights for this entry.
         * @param rights the new rights, or %NULL
         */
        set_rights(rights?: string | null): void;
        /**
         * Sets the summary of the entry.
         * @param summary the new entry summary, or %NULL
         */
        set_summary(summary?: string | null): void;
        /**
         * Sets the title of the entry.
         * @param title the new entry title, or %NULL
         */
        set_title(title?: string | null): void;
    }

    module Feed {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataFeed structure are private and should never be accessed directly.
     */
    class Feed extends Parsable {
        // Own properties of GData-0.0.Feed

        /**
         * The unique ETag for this version of the feed. See the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/reference.html#ResourceVersioning"&gt;online documentation&lt;/ulink&gt; for
         * more information.
         */
        readonly etag: string;
        /**
         * Details of the software used to generate the feed.
         *
         * API reference: &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_generator"&gt;
         * atom:generator&lt;/ulink&gt;
         */
        readonly generator: Generator;
        /**
         * The URI of an icon for the feed.
         *
         * API reference:
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.icon"&gt;atom:icon&lt;/ulink&gt;
         */
        readonly icon: string;
        /**
         * The unique and permanent URN ID for the feed.
         *
         * API reference: &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_id"&gt;atom:id&lt;/ulink&gt;
         */
        readonly id: string;
        /**
         * The number of items per results page feed.
         *
         * API reference:
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_openSearch:itemsPerPage"&gt;
         * openSearch:itemsPerPage&lt;/ulink&gt;
         */
        readonly items_per_page: number;
        /**
         * The number of items per results page feed.
         *
         * API reference:
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_openSearch:itemsPerPage"&gt;
         * openSearch:itemsPerPage&lt;/ulink&gt;
         */
        readonly itemsPerPage: number;
        /**
         * The URI of a logo for the feed.
         *
         * API reference: &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_logo"&gt;atom:logo&lt;/ulink&gt;
         */
        readonly logo: string;
        /**
         * The next page token for feeds. Pass this to
         * gdata_query_set_page_token() to advance to the next page when
         * querying APIs which use page tokens rather than page numbers or
         * offsets.
         */
        readonly next_page_token: string;
        /**
         * The next page token for feeds. Pass this to
         * gdata_query_set_page_token() to advance to the next page when
         * querying APIs which use page tokens rather than page numbers or
         * offsets.
         */
        readonly nextPageToken: string;
        /**
         * The ownership rights pertaining to the entire feed.
         *
         * For more information, see the &lt;ulink type="http"
         * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.rights"&gt;Atom specification&lt;/ulink&gt;.
         */
        readonly rights: string;
        /**
         * The one-based index of the first item in the results feed.
         *
         * This should &lt;emphasis&gt;not&lt;/emphasis&gt; be used manually for pagination. Instead, use a #GDataQuery and call its gdata_query_next_page()
         * or gdata_query_previous_page() functions before making the query to the service.
         *
         * API reference: &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_openSearch:startIndex"&gt;
         * openSearch:startIndex&lt;/ulink&gt;
         */
        readonly start_index: number;
        /**
         * The one-based index of the first item in the results feed.
         *
         * This should &lt;emphasis&gt;not&lt;/emphasis&gt; be used manually for pagination. Instead, use a #GDataQuery and call its gdata_query_next_page()
         * or gdata_query_previous_page() functions before making the query to the service.
         *
         * API reference: &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_openSearch:startIndex"&gt;
         * openSearch:startIndex&lt;/ulink&gt;
         */
        readonly startIndex: number;
        /**
         * The subtitle of the feed.
         *
         * API reference: &lt;ulink type="http" url="http://atomenabled.org/developers/syndication/"&gt;atom:subtitle&lt;/ulink&gt;
         */
        readonly subtitle: string;
        /**
         * The title of the feed.
         *
         * API reference:
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_title"&gt;atom:title&lt;/ulink&gt;
         */
        readonly title: string;
        /**
         * The number of items in the result set for the feed, including those on other pages. If this is zero, the total number is unknown.
         *
         * This should &lt;emphasis&gt;not&lt;/emphasis&gt; be used manually for pagination. Instead, use a #GDataQuery and call its gdata_query_next_page()
         * or gdata_query_previous_page() functions before making the query to the service.
         *
         * API reference:
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_openSearch:totalResults"&gt;
         * openSearch:totalResults&lt;/ulink&gt;
         */
        readonly total_results: number;
        /**
         * The number of items in the result set for the feed, including those on other pages. If this is zero, the total number is unknown.
         *
         * This should &lt;emphasis&gt;not&lt;/emphasis&gt; be used manually for pagination. Instead, use a #GDataQuery and call its gdata_query_next_page()
         * or gdata_query_previous_page() functions before making the query to the service.
         *
         * API reference:
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_openSearch:totalResults"&gt;
         * openSearch:totalResults&lt;/ulink&gt;
         */
        readonly totalResults: number;
        /**
         * The time the feed was last updated.
         *
         * API reference: &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_updated"&gt;
         * atom:updated&lt;/ulink&gt;
         */
        readonly updated: number;

        // Owm methods of GData-0.0.Feed

        /**
         * Returns a list of the authors listed in this feed.
         * @returns a #GList of #GDataAuthors
         */
        get_authors(): Author[];
        /**
         * Returns a list of the categories listed in this feed.
         * @returns a #GList of #GDataCategorys
         */
        get_categories(): Category[];
        /**
         * Returns a list of the entries contained in this feed.
         * @returns a #GList of #GDataEntrys
         */
        get_entries(): Entry[];
        /**
         * Returns the feed's unique ETag for this version.
         * @returns the feed's ETag
         */
        get_etag(): string;
        /**
         * Returns details about the software which generated the feed.
         * @returns a #GDataGenerator, or %NULL
         */
        get_generator(): Generator;
        /**
         * Returns the icon URI of the feed.
         * @returns the feed's icon URI, or %NULL
         */
        get_icon(): string;
        /**
         * Returns the feed's unique and permanent URN ID.
         * @returns the feed's ID
         */
        get_id(): string;
        /**
         * Returns the number of items per results page feed.
         * @returns the number of items per results page feed, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_items_per_page(): number;
        /**
         * Returns a list of the links listed in this feed.
         * @returns a #GList of #GDataLinks
         */
        get_links(): Link[];
        /**
         * Returns the logo URI of the feed.
         * @returns the feed's logo URI, or %NULL
         */
        get_logo(): string;
        /**
         * Returns the next page token for a query result, or %NULL if not set.
         * This is #GDataFeed:next-page-token. The page token might not be set if there
         * is no next page, or if this service does not use token based paging (for
         * example, if it uses page number or offset based paging instead). Most more
         * recent services use token based paging.
         * @returns the next page token
         */
        get_next_page_token(): string | null;
        /**
         * Returns the rights pertaining to the entire feed, or %NULL if not set.
         * @returns the feed's rights information
         */
        get_rights(): string;
        /**
         * Returns the one-based start index of the results feed in the result set.
         * @returns the one-based start index, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_start_index(): number;
        /**
         * Returns the subtitle of the feed.
         * @returns the feed's subtitle, or %NULL
         */
        get_subtitle(): string;
        /**
         * Returns the title of the feed.
         * @returns the feed's title
         */
        get_title(): string;
        /**
         * Returns the total number of results in the result set, including results on other
         * pages. If this is zero, the total number is unknown.
         * @returns the total number of results, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_total_results(): number;
        /**
         * Gets the time the feed was last updated.
         * @returns the UNIX timestamp for the time the feed was last updated
         */
        get_updated(): number;
        /**
         * Returns the entry in the feed with the given `id,` if found.
         * @param id the entry's ID
         * @returns the #GDataEntry, or %NULL
         */
        look_up_entry(id: string): Entry;
        /**
         * Looks up a link by #GDataLink:relation-type value from the list of links in the feed.
         * @param rel the value of the #GDataLink:relation-type property of the desired link
         * @returns a #GDataLink, or %NULL if one was not found
         */
        look_up_link(rel: string): Link;
    }

    module FreebaseQuery {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataFreebaseQuery structure are private and should never be accessed directly.
     */
    class FreebaseQuery extends Query {
        // Own properties of GData-0.0.FreebaseQuery

        /**
         * Variant containing the MQL query. The variant is a very generic container of type "a{smv}",
         * containing (possibly nested) Freebase schema types and values.
         */
        variant: GLib.Variant;

        // Constructors of GData-0.0.FreebaseQuery

        static ['new'](mql: string): FreebaseQuery;

        static new_from_variant(variant: GLib.Variant): FreebaseQuery;
    }

    module FreebaseResult {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataFreebaseResult structure are private and should never be accessed directly.
     */
    class FreebaseResult extends Entry {
        // Own properties of GData-0.0.FreebaseResult

        /**
         * Variant containing the MQL result. The variant is a very generic container of type "a{smv}",
         * containing (possibly nested) Freebase schema types and values.
         */
        readonly variant: GLib.Variant;

        // Constructors of GData-0.0.FreebaseResult

        static ['new'](): FreebaseResult;

        // Owm methods of GData-0.0.FreebaseResult

        /**
         * Gets the result serialized as a #GVariant of type "a{smv}", containing the JSON
         * data tree. This variant can be alternatively processed through json_gvariant_serialize().
         * @returns the serialized result, or %NULL; unref with g_variant_unref()
         */
        dup_variant(): GLib.Variant | null;
    }

    module FreebaseSearchQuery {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataFreebaseSearchQuery structure are private and should never be accessed directly.
     */
    class FreebaseSearchQuery extends Query {
        // Own properties of GData-0.0.FreebaseSearchQuery

        /**
         * Language used for search results, in ISO-639-1 format.
         */
        language: string;
        /**
         * Whether word stemming should happen on the search terms. If this property is enabled,
         * words like eg. "natural", "naturally" or "nature" would be all reduced to the root "natur"
         * for search purposes.
         */
        stemmed: boolean;

        // Constructors of GData-0.0.FreebaseSearchQuery

        static ['new'](search_terms: string): FreebaseSearchQuery;

        // Owm methods of GData-0.0.FreebaseSearchQuery

        /**
         * Adds a property filter to the query. property filters are always nested in
         * containers, opened and closed through gdata_freebase_search_query_open_filter()
         * and gdata_freebase_search_query_close_filter().
         * @param property Freebase property ID
         * @param value match string
         */
        add_filter(property: string, value: string): void;
        /**
         * Adds a geolocation filter to the query. location filters are always nested in
         * containers, opened and closed through gdata_freebase_search_query_open_filter()
         * and gdata_freebase_search_query_close_filter().
         * @param radius radius in meters
         * @param lat latitude
         * @param lon longitude
         */
        add_location(radius: number, lat: number, lon: number): void;
        /**
         * Closes a filter level.
         */
        close_filter(): void;
        /**
         * Gets the language set on the search query, or %NULL if unset.
         * @returns The language used on the query.
         */
        get_language(): string | null;
        /**
         * Returns whether the #GDataFreebaseSearchQuery will perform stemming on the search terms.
         * @returns %TRUE if the #GDataFreebaseSearchQuery performs stemming
         */
        get_stemmed(): boolean;
        /**
         * Opens a container of filter rules, those are applied according to the behavior specified by `filter_type`.
         * Every call to this function must be paired by a call to gdata_freebase_search_query_close_filter().
         * @param filter_type filter type
         */
        open_filter(filter_type: FreebaseSearchFilterType): void;
        /**
         * Sets the language used, both on the search terms and the results. If unset,
         * the locale preferences will be respected.
         * @param lang Language used on the search terms and results, in ISO-639-1 format, or %NULL to unset.
         */
        set_language(lang?: string | null): void;
        /**
         * Sets whether stemming is performed on the provided search terms. If `stemmed` is %TRUE,
         * words like eg. "natural", "naturally" or "nature" would be all reduced to the root "natur"
         * for search purposes.
         * @param stemmed %TRUE to perform stemming on the search results
         */
        set_stemmed(stemmed: boolean): void;
    }

    module FreebaseSearchResult {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataFreebaseSearchResult structure are private and should never be accessed directly.
     */
    class FreebaseSearchResult extends FreebaseResult {
        // Constructors of GData-0.0.FreebaseSearchResult

        static ['new'](): FreebaseSearchResult;

        // Owm methods of GData-0.0.FreebaseSearchResult

        /**
         * Gets an item from the search result.
         * @param i number of item to retrieve
         * @returns a search result item, or %NULL on invalid item.
         */
        get_item(i: number): FreebaseSearchResultItem | null;
        /**
         * Returns the number of items contained in this result.
         * @returns The number of items
         */
        get_num_items(): number;
        /**
         * Returns the total number of hits found for the search query.
         * @returns the total number of hits.
         */
        get_total_hits(): number;
    }

    module FreebaseService {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataFreebaseService structure are private and should never be accessed directly.
     */
    class FreebaseService extends Service {
        // Own properties of GData-0.0.FreebaseService

        /**
         * The developer key your application has registered with the Freebase API. For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/freebase/v1/how-tos/authorizing"&gt;online documentation&lt;/ulink&gt;.
         */
        developer_key: string;
        /**
         * The developer key your application has registered with the Freebase API. For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/freebase/v1/how-tos/authorizing"&gt;online documentation&lt;/ulink&gt;.
         */
        developerKey: string;

        // Constructors of GData-0.0.FreebaseService

        static ['new'](developer_key?: string | null, authorizer?: Authorizer | null): FreebaseService;

        // Owm methods of GData-0.0.FreebaseService

        /**
         * The primary #GDataAuthorizationDomain for interacting with Freebase. This will not normally need to be used, as it's used internally
         * by the #GDataFreebaseService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
         * does not support natively, then this domain may be needed to authorize the requests.
         *
         * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
         */
        static get_primary_authorization_domain(): AuthorizationDomain;

        // Owm methods of GData-0.0.FreebaseService

        /**
         * Creates an input stream to an image object returned in a topic query. If `max_width` and `max_height`
         * are unspecified (i.e. set to 0), the image returned will be the smallest available.
         * @param value a #GDataFreebaseTopicValue from a topic result
         * @param cancellable optional #GCancellable object, or %NULL
         * @param max_width maximum width of the image returned, or 0
         * @param max_height maximum height of the image returned, or 0
         * @returns a #GInputStream opened to the image; unref with g_object_unref()
         */
        get_image(
            value: FreebaseTopicValue,
            cancellable: Gio.Cancellable | null,
            max_width: number,
            max_height: number,
        ): Gio.InputStream;
        /**
         * Queries information about a topic, identified through a Freebase ID. You can find out more about topic queries in the
         * &lt;ulink type="http" url="https://developers.google.com/freebase/v1/topic-response"&gt;online documentation&lt;/ulink&gt;.
         * @param query a #GDataFreebaseTopicQuery containing the topic ID
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a #GDataFreebaseTopicResult containing information about the topic; unref with g_object_unref()
         */
        get_topic(query: FreebaseTopicQuery, cancellable?: Gio.Cancellable | null): FreebaseTopicResult;
        /**
         * Queries information about a topic, identified through a Freebase ID. `self` and `query` are all reffed when this
         * function is called, so can safely be unreffed after this function returns. When the query is replied, or fails,
         * `callback` will be executed, and the result can be obtained through gdata_service_query_single_entry_finish().
         *
         * For more details, see gdata_freebase_service_get_topic(), which is the synchronous version of
         * this function.
         * @param query a #GDataFreebaseQuery with the MQL query
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        get_topic_async(
            query: FreebaseTopicQuery,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Performs a MQL query on the service, you can find out more about MQL in the &lt;ulink type="http" url="http://mql.freebaseapps.com/index.html"&gt;online MQL documentation&lt;/ulink&gt;.
         * @param query a #GDataFreebaseQuery with the MQL query
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a #GDataFreebaseResult containing the query result; unref with g_object_unref()
         */
        query(query: FreebaseQuery, cancellable?: Gio.Cancellable | null): FreebaseResult;
        /**
         * Performs a MQL query on the service. `self` and `query` are all reffed when this function is called, so can safely
         * be unreffed after this function returns. When the query is replied, or fails, `callback` will be executed, and
         * the result can be obtained through gdata_service_query_single_entry_finish().
         *
         * For more details, see gdata_freebase_service_query(), which is the synchronous version of
         * this function.
         * @param query a #GDataFreebaseQuery with the MQL query
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        query_async(
            query: FreebaseQuery,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Performs a search for any given search term, filters can be set on `query` to narrow down the results. The results returned
         * are ordered by relevance. You can find out more about topic queries in the
         * &lt;ulink type="http" url="https://developers.google.com/freebase/v1/search-cookbook"&gt;online documentation&lt;/ulink&gt;.
         * @param query a #GDataFreebaseSearchQuery containing the topic ID
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a #GDataFreebaseSearchResult containing the results for the given search query; unref with g_object_unref()
         */
        search(query: FreebaseSearchQuery, cancellable?: Gio.Cancellable | null): FreebaseSearchResult;
        /**
         * Performs a search for any given search term. `self` and `query` are all reffed when this
         * function is called, so can safely be unreffed after this function returns.
         *
         * For more details, see gdata_freebase_service_search(), which is the synchronous version of
         * this function.
         * @param query a #GDataFreebaseQuery with the MQL query
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        search_async(
            query: FreebaseSearchQuery,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
    }

    module FreebaseTopicQuery {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataFreebaseTopicQuery structure are private and should never be accessed directly.
     */
    class FreebaseTopicQuery extends Query {
        // Own properties of GData-0.0.FreebaseTopicQuery

        /**
         * Array of properties (eg. "/common/topic/description", or "/computer/software/first_released"), or property
         * domains (eg. "/common/topic", or "/computer") to be used as filter.
         */
        filter: string[];
        /**
         * Language used for topic values in the result, in ISO-639-1 format.
         */
        language: string;

        // Constructors of GData-0.0.FreebaseTopicQuery

        static ['new'](id: string): FreebaseTopicQuery;

        // Owm methods of GData-0.0.FreebaseTopicQuery

        /**
         * Gets the filter set on the topic query, or %NULL if unset.
         * @returns The filter used on the query.
         */
        get_filter(): string[] | null;
        /**
         * Gets the language set on the topic query, or %NULL if unset.
         * @returns The language used on the query.
         */
        get_language(): string | null;
        /**
         * Sets a filter on the properties to be returned by the #GDataFreebaseTopicQuery, a filter string usually contains either
         * a specific property (eg. "/common/topic/description", or "/computer/software/first_released"), or a property domain
         * (eg. "/common/topic", or "/computer"), all properties pertaining to the domain will be returned through the
         * #GDataFreebaseTopicResult in the latter case. Other special strings can be passed as filter strings, those are documented
         * in the &lt;ulink type="http" url="https://developers.google.com/freebase/v1/topic-overview#filter"&gt;Topic API overview&lt;/ulink&gt;
         *
         * If multiple filter strings are set, the result will contain all information necessary to satisfy each of those individually.
         * If no filter is set, the "commons" special value will be implicitly assumed, which returns a reasonably complete data set.
         * @param filter %NULL-terminated array of filter strings, or %NULL to unset
         */
        set_filter(filter?: string[] | null): void;
        /**
         * Sets the language used in the topic query. If unset,
         * the locale preferences will be respected.
         * @param lang language used on the topic query, in ISO-639-1 format, or %NULL to unset the language
         */
        set_language(lang?: string | null): void;
    }

    module FreebaseTopicResult {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataFreebaseTopicResult structure are private and should never be accessed directly.
     */
    class FreebaseTopicResult extends FreebaseResult {
        // Constructors of GData-0.0.FreebaseTopicResult

        static ['new'](): FreebaseTopicResult;

        // Owm methods of GData-0.0.FreebaseTopicResult

        /**
         * Returns a reference to the root #GDataFreebaseTopicObject containing the
         * topic query results.
         * @returns A new reference on the result object, unref with   gdata_freebase_topic_object_unref()
         */
        dup_object(): FreebaseTopicObject;
    }

    module GContactCalendar {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGContactCalendar structure are private and should never be accessed directly.
     */
    class GContactCalendar extends Parsable {
        // Own properties of GData-0.0.GContactCalendar

        /**
         * Indicates which calendar out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink"&gt;gContact specification&lt;/ulink&gt;.
         */
        is_primary: boolean;
        /**
         * Indicates which calendar out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink"&gt;gContact specification&lt;/ulink&gt;.
         */
        isPrimary: boolean;
        /**
         * A free-form string that identifies the type of calendar. It is mutually exclusive with #GDataGContactCalendar:relation-type.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink"&gt;gContact specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * A programmatic value that identifies the type of calendar. It is mutually exclusive with #GDataGContactCalendar:label.
         * Examples are %GDATA_GCONTACT_CALENDAR_HOME or %GDATA_GCONTACT_CALENDAR_FREE_BUSY.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink"&gt;gContact specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * A programmatic value that identifies the type of calendar. It is mutually exclusive with #GDataGContactCalendar:label.
         * Examples are %GDATA_GCONTACT_CALENDAR_HOME or %GDATA_GCONTACT_CALENDAR_FREE_BUSY.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink"&gt;gContact specification&lt;/ulink&gt;.
         */
        relationType: string;
        /**
         * The URI of the calendar.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink"&gt;gContact specification&lt;/ulink&gt;.
         */
        uri: string;

        // Constructors of GData-0.0.GContactCalendar

        static ['new'](
            uri: string,
            relation_type: string | null,
            label: string | null,
            is_primary: boolean,
        ): GContactCalendar;

        // Owm methods of GData-0.0.GContactCalendar

        /**
         * Gets the #GDataGContactCalendar:label property.
         * @returns a free-form label for the calendar, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataGContactCalendar:relation-type property.
         * @returns the type of the relation, or %NULL
         */
        get_relation_type(): string;
        /**
         * Gets the #GDataGContactCalendar:uri property.
         * @returns the calendar's URI
         */
        get_uri(): string;
        /**
         * Sets the #GDataGContactCalendar:is-primary property to `is_primary`.
         * @param is_primary %TRUE if this is the contact's primary calendar, %FALSE otherwise
         */
        set_is_primary(is_primary: boolean): void;
        /**
         * Sets the #GDataGContactCalendar:label property to `label`.
         *
         * If `label` is %NULL, the label will be unset. When the #GDataGContactCalendar is used in a query, however,
         * exactly one of #GDataGContactCalendar:relation-type and #GDataGContactCalendar:label must be %NULL.
         * @param label the new free-form label for the calendar, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataGContactCalendar:relation-type property to `relation_type,`
         * such as %GDATA_GCONTACT_CALENDAR_HOME or %GDATA_GCONTACT_CALENDAR_FREE_BUSY.
         *
         * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactCalendar is used in a query, however,
         * exactly one of #GDataGContactCalendar:relation-type and #GDataGContactCalendar:label must be %NULL.
         * @param relation_type the new type for the calendar, or %NULL
         */
        set_relation_type(relation_type?: string | null): void;
        /**
         * Sets the #GDataGContactCalendar:uri property to `uri`.
         * @param uri the new URI for the calendar
         */
        set_uri(uri: string): void;
    }

    module GContactEvent {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGContactEvent structure are private and should never be accessed directly.
     */
    class GContactEvent extends Parsable {
        // Own properties of GData-0.0.GContactEvent

        /**
         * The date of the event.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent"&gt;GContact specification&lt;/ulink&gt;.
         */
        date: GLib.Date;
        /**
         * A simple string value used to name this event. It is mutually exclusive with #GDataGContactEvent:relation-type.
         * It allows UIs to display a label such as "Wedding anniversary".
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent"&gt;gContact specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * A programmatic value that identifies the type of event. It is mutually exclusive with #GDataGContactEvent:label.
         * Examples are %GDATA_GCONTACT_EVENT_ANNIVERSARY or %GDATA_GCONTACT_EVENT_OTHER.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent"&gt;gContact specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * A programmatic value that identifies the type of event. It is mutually exclusive with #GDataGContactEvent:label.
         * Examples are %GDATA_GCONTACT_EVENT_ANNIVERSARY or %GDATA_GCONTACT_EVENT_OTHER.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent"&gt;gContact specification&lt;/ulink&gt;.
         */
        relationType: string;

        // Constructors of GData-0.0.GContactEvent

        static ['new'](date: GLib.Date, relation_type?: string | null, label?: string | null): GContactEvent;

        // Owm methods of GData-0.0.GContactEvent

        /**
         * Gets the #GDataGContactEvent:date property.
         */
        get_date(): void;
        /**
         * Gets the #GDataGContactEvent:label property.
         * @returns the event's label, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataGContactEvent:relation-type property.
         * @returns the event's relation type, or %NULL
         */
        get_relation_type(): string;
        /**
         * Sets the #GDataGContactEvent:date property to `date`.
         * @param date the new date for the event
         */
        set_date(date: GLib.Date): void;
        /**
         * Sets the #GDataGContactEvent:label property to `label`.
         *
         * If `label` is %NULL, the label will be unset. When the #GDataGContactEvent is used in a query, however,
         * exactly one of #GDataGContactEvent:relation-type and #GDataGContactEvent:label must be %NULL.
         * @param label the new label for the event, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataGContactEvent:relation-type property to `relation_type`
         * such as %GDATA_GCONTACT_EVENT_ANNIVERSARY or %GDATA_GCONTACT_EVENT_OTHER.
         *
         * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactEvent is used in a query, however,
         * exactly one of #GDataGContactEvent:relation-type and #GDataGContactEvent:label must be %NULL.
         * @param relation_type the new relation type for the event, or %NULL
         */
        set_relation_type(relation_type?: string | null): void;
    }

    module GContactExternalID {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGContactExternalID structure are private and should never be accessed directly.
     */
    class GContactExternalID extends Parsable {
        // Own properties of GData-0.0.GContactExternalID

        /**
         * A free-form string that identifies the type of external ID. It is mutually exclusive with #GDataGContactExternalID:relation-type.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId"&gt;gContact specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * A programmatic value that identifies the type of external ID. It is mutually exclusive with #GDataGContactExternalID:label.
         * Examples are %GDATA_GCONTACT_EXTERNAL_ID_NETWORK or %GDATA_GCONTACT_EXTERNAL_ID_ACCOUNT.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId"&gt;gContact specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * A programmatic value that identifies the type of external ID. It is mutually exclusive with #GDataGContactExternalID:label.
         * Examples are %GDATA_GCONTACT_EXTERNAL_ID_NETWORK or %GDATA_GCONTACT_EXTERNAL_ID_ACCOUNT.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId"&gt;gContact specification&lt;/ulink&gt;.
         */
        relationType: string;
        /**
         * The value of the external ID.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId"&gt;gContact specification&lt;/ulink&gt;.
         */
        value: string;

        // Constructors of GData-0.0.GContactExternalID

        static ['new'](value: string, relation_type?: string | null, label?: string | null): GContactExternalID;

        // Owm methods of GData-0.0.GContactExternalID

        /**
         * Gets the #GDataGContactExternalID:label property.
         * @returns a free-form label for the external ID, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataGContactExternalID:relation-type property.
         * @returns the type of the relation, or %NULL
         */
        get_relation_type(): string;
        /**
         * Gets the #GDataGContactExternalID:value property.
         * @returns the external ID's value
         */
        get_value(): string;
        /**
         * Sets the #GDataGContactExternalID:label property to `label`.
         *
         * If `label` is %NULL, the label will be unset. When the #GDataGContactExternalID is used in a query, however,
         * exactly one of #GDataGContactExternalID:relation-type and #GDataGContactExternalID:label must be %NULL.
         * @param label the new free-form label for the external ID, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataGContactExternalID:relation-type property to `relation_type,`
         * such as %GDATA_GCONTACT_EXTERNAL_ID_NETWORK or %GDATA_GCONTACT_EXTERNAL_ID_ACCOUNT.
         *
         * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactExternalID is used in a query, however,
         * exactly one of #GDataGContactExternalID:relation-type and #GDataGContactExternalID:label must be %NULL.
         * @param relation_type the new type for the external ID, or %NULL
         */
        set_relation_type(relation_type?: string | null): void;
        /**
         * Sets the #GDataGContactExternalID:value property to `value`.
         * @param value the new value for the external ID
         */
        set_value(value: string): void;
    }

    module GContactJot {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGContactJot structure are private and should never be accessed directly.
     */
    class GContactJot extends Parsable {
        // Own properties of GData-0.0.GContactJot

        /**
         * The content of the jot.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot"&gt;gContact specification&lt;/ulink&gt;.
         */
        content: string;
        /**
         * A programmatic value that identifies the type of jot. Examples are %GDATA_GCONTACT_JOT_HOME or %GDATA_GCONTACT_JOT_OTHER.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot"&gt;gContact specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * A programmatic value that identifies the type of jot. Examples are %GDATA_GCONTACT_JOT_HOME or %GDATA_GCONTACT_JOT_OTHER.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot"&gt;gContact specification&lt;/ulink&gt;.
         */
        relationType: string;

        // Constructors of GData-0.0.GContactJot

        static ['new'](content: string, relation_type: string): GContactJot;

        // Owm methods of GData-0.0.GContactJot

        /**
         * Gets the #GDataGContactJot:content property.
         * @returns the jot's content
         */
        get_content(): string;
        /**
         * Gets the #GDataGContactJot:relation-type property.
         * @returns the jot's relation type
         */
        get_relation_type(): string;
        /**
         * Sets the #GDataGContactJot:content property to `content`.
         * @param content the new content
         */
        set_content(content: string): void;
        /**
         * Sets the #GDataGContactJot:relation-type property to `relation_type`
         * such as %GDATA_GCONTACT_JOT_HOME or %GDATA_GCONTACT_JOT_OTHER.
         * @param relation_type the new relation type for the jot, or %NULL
         */
        set_relation_type(relation_type: string): void;
    }

    module GContactLanguage {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGContactLanguage structure are private and should never be accessed directly.
     */
    class GContactLanguage extends Parsable {
        // Own properties of GData-0.0.GContactLanguage

        /**
         * A code identifying the language, conforming to the IETF BCP 47 specification. It is mutually exclusive with #GDataGContactLanguage:label.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage"&gt;gContact specification&lt;/ulink&gt;.
         */
        code: string;
        /**
         * A free-form string that identifies the language. It is mutually exclusive with #GDataGContactLanguage:code.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage"&gt;gContact specification&lt;/ulink&gt;.
         */
        label: string;

        // Constructors of GData-0.0.GContactLanguage

        static ['new'](code?: string | null, label?: string | null): GContactLanguage;

        // Owm methods of GData-0.0.GContactLanguage

        /**
         * Gets the #GDataGContactLanguage:code property.
         * @returns the language's code, or %NULL
         */
        get_code(): string;
        /**
         * Gets the #GDataGContactLanguage:label property.
         * @returns a free-form label for the language, or %NULL
         */
        get_label(): string;
        /**
         * Sets the #GDataGContactLanguage:code property to `code`.
         *
         * If `code` is %NULL, the code will be unset. When the #GDataGContactLanguage is used in a query, however,
         * exactly one of #GDataGContactLanguage:code and #GDataGContactLanguage:label must be %NULL.
         * @param code the new code for the language, or %NULL
         */
        set_code(code?: string | null): void;
        /**
         * Sets the #GDataGContactLanguage:label property to `label`.
         *
         * If `label` is %NULL, the label will be unset. When the #GDataGContactLanguage is used in a query, however,
         * exactly one of #GDataGContactLanguage:code and #GDataGContactLanguage:label must be %NULL.
         * @param label the new free-form label for the language, or %NULL
         */
        set_label(label?: string | null): void;
    }

    module GContactRelation {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGContactRelation structure are private and should never be accessed directly.
     */
    class GContactRelation extends Parsable {
        // Own properties of GData-0.0.GContactRelation

        /**
         * A free-form string that identifies the type of relation. It is mutually exclusive with #GDataGContactRelation:relation-type.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;gContact specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * The name of the relation. It need not be a full name, and there need not be a contact representing the name.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;gContact specification&lt;/ulink&gt;.
         */
        name: string;
        /**
         * A programmatic value that identifies the type of relation. It is mutually exclusive with #GDataGContactRelation:label.
         * Examples are %GDATA_GCONTACT_RELATION_MANAGER or %GDATA_GCONTACT_RELATION_CHILD.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;gContact specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * A programmatic value that identifies the type of relation. It is mutually exclusive with #GDataGContactRelation:label.
         * Examples are %GDATA_GCONTACT_RELATION_MANAGER or %GDATA_GCONTACT_RELATION_CHILD.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation"&gt;gContact specification&lt;/ulink&gt;.
         */
        relationType: string;

        // Constructors of GData-0.0.GContactRelation

        static ['new'](name: string, relation_type?: string | null, label?: string | null): GContactRelation;

        // Owm methods of GData-0.0.GContactRelation

        /**
         * Gets the #GDataGContactRelation:label property.
         * @returns a free-form label for the type of the relation, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataGContactRelation:name property.
         * @returns the relation's name
         */
        get_name(): string;
        /**
         * Gets the #GDataGContactRelation:relation-type property.
         * @returns the type of the relation, or %NULL
         */
        get_relation_type(): string;
        /**
         * Sets the #GDataGContactRelation:label property to `label`.
         *
         * If `label` is %NULL, the label will be unset. When the #GDataGContactRelation is used in a query, however,
         * exactly one of #GDataGContactRelation:relation-type and #GDataGContactRelation:label must be %NULL.
         * @param label the new free-form type for the relation, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataGContactRelation:name property to `name`.
         * @param name the new name for the relation
         */
        set_name(name?: string | null): void;
        /**
         * Sets the #GDataGContactRelation:relation-type property to `relation_type,`
         * such as %GDATA_GCONTACT_RELATION_MANAGER or %GDATA_GCONTACT_RELATION_CHILD.
         *
         * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactRelation is used in a query, however,
         * exactly one of #GDataGContactRelation:relation-type and #GDataGContactRelation:label must be %NULL.
         * @param relation_type the new type for the relation, or %NULL
         */
        set_relation_type(relation_type?: string | null): void;
    }

    module GContactWebsite {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGContactWebsite structure are private and should never be accessed directly.
     */
    class GContactWebsite extends Parsable {
        // Own properties of GData-0.0.GContactWebsite

        /**
         * Indicates which website out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;gContact specification&lt;/ulink&gt;.
         */
        is_primary: boolean;
        /**
         * Indicates which website out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;gContact specification&lt;/ulink&gt;.
         */
        isPrimary: boolean;
        /**
         * A simple string value used to name this website. It allows UIs to display a label such as "Work", "Travel blog", "Personal blog", etc.
         * It is mutually exclusive with #GDataGContactWebsite:relation-type.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;gContact specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * A programmatic value that identifies the type of website. Examples are %GDATA_GCONTACT_WEBSITE_HOME_PAGE or %GDATA_GCONTACT_WEBSITE_FTP.
         * It is mutually exclusive with #GDataGContactWebsite:label.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;gContact specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * A programmatic value that identifies the type of website. Examples are %GDATA_GCONTACT_WEBSITE_HOME_PAGE or %GDATA_GCONTACT_WEBSITE_FTP.
         * It is mutually exclusive with #GDataGContactWebsite:label.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;gContact specification&lt;/ulink&gt;.
         */
        relationType: string;
        /**
         * The URI of the website.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite"&gt;gContact specification&lt;/ulink&gt;.
         */
        uri: string;

        // Constructors of GData-0.0.GContactWebsite

        static ['new'](uri: string, relation_type: string, label: string | null, is_primary: boolean): GContactWebsite;

        // Owm methods of GData-0.0.GContactWebsite

        /**
         * Gets the #GDataGContactWebsite:label property.
         * @returns the website's label, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataGContactWebsite:relation-type property.
         * @returns the website's relation type
         */
        get_relation_type(): string;
        /**
         * Gets the #GDataGContactWebsite:uri property.
         * @returns the URI of the website
         */
        get_uri(): string;
        /**
         * Sets the #GDataGContactWebsite:is-primary property to `is_primary`.
         * @param is_primary %TRUE if this is the primary website, %FALSE otherwise
         */
        set_is_primary(is_primary: boolean): void;
        /**
         * Sets the #GDataGContactWebsite:label property to `label`.
         *
         * If `label` is %NULL, the label will be unset. When the #GDataGContactWebsite is used in a query, however,
         * exactly one of #GDataGContactWebsite:relation-type and #GDataGContactWebsite:label must be %NULL.
         * @param label the new label for the website, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataGContactWebsite:relation-type property to `relation_type`
         * such as %GDATA_GCONTACT_WEBSITE_HOME_PAGE or %GDATA_GCONTACT_WEBSITE_FTP.
         *
         * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactWebsite is used in a query, however,
         * exactly one of #GDataGContactWebsite:relation-type and #GDataGContactWebsite:label must be %NULL.
         * @param relation_type the new relation type for the website
         */
        set_relation_type(relation_type: string): void;
        /**
         * Sets the #GDataGContactWebsite:uri property to `uri`.
         * @param uri the new website URI
         */
        set_uri(uri: string): void;
    }

    module GDEmailAddress {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGDEmailAddress structure are private and should never be accessed directly.
     */
    class GDEmailAddress extends Parsable {
        // Own properties of GData-0.0.GDEmailAddress

        /**
         * The e-mail address itself.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail"&gt;GData specification&lt;/ulink&gt;.
         */
        address: string;
        /**
         * A display name of the entity (e.g. a person) the e-mail address belongs to.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail"&gt;GData specification&lt;/ulink&gt;.
         */
        display_name: string;
        /**
         * A display name of the entity (e.g. a person) the e-mail address belongs to.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail"&gt;GData specification&lt;/ulink&gt;.
         */
        displayName: string;
        /**
         * Indicates which e-mail address out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail"&gt;GData specification&lt;/ulink&gt;.
         */
        is_primary: boolean;
        /**
         * Indicates which e-mail address out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail"&gt;GData specification&lt;/ulink&gt;.
         */
        isPrimary: boolean;
        /**
         * A simple string value used to name this e-mail address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail"&gt;GData specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * A programmatic value that identifies the type of e-mail address. For example: %GDATA_GD_EMAIL_ADDRESS_HOME or %GDATA_GD_EMAIL_ADDRESS_WORK.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail"&gt;GData specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * A programmatic value that identifies the type of e-mail address. For example: %GDATA_GD_EMAIL_ADDRESS_HOME or %GDATA_GD_EMAIL_ADDRESS_WORK.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail"&gt;GData specification&lt;/ulink&gt;.
         */
        relationType: string;

        // Constructors of GData-0.0.GDEmailAddress

        static ['new'](
            address: string,
            relation_type: string | null,
            label: string | null,
            is_primary: boolean,
        ): GDEmailAddress;

        // Owm methods of GData-0.0.GDEmailAddress

        /**
         * Gets the #GDataGDEmailAddress:address property.
         * @returns the e-mail address itself, or %NULL
         */
        get_address(): string;
        /**
         * Gets the #GDataGDEmailAddress:display-name property.
         * @returns a display name for the e-mail address, or %NULL
         */
        get_display_name(): string;
        /**
         * Gets the #GDataGDEmailAddress:label property.
         * @returns the e-mail address' label, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataGDEmailAddress:relation-type property.
         * @returns the e-mail address' relation type, or %NULL
         */
        get_relation_type(): string;
        /**
         * Sets the #GDataGDEmailAddress:address property to `address`.
         * @param address the new e-mail address
         */
        set_address(address: string): void;
        /**
         * Sets the #GDataGDEmailAddress:display-name property to `display_name`.
         *
         * Set `display_name` to %NULL to unset the property in the e-mail address.
         * @param display_name the new display name, or %NULL
         */
        set_display_name(display_name?: string | null): void;
        /**
         * Sets the #GDataGDEmailAddress:is-primary property to `is_primary`.
         * @param is_primary %TRUE if this is the primary e-mail address, %FALSE otherwise
         */
        set_is_primary(is_primary: boolean): void;
        /**
         * Sets the #GDataGDEmailAddress:label property to `label`.
         *
         * Set `label` to %NULL to unset the property in the e-mail address.
         * @param label the new label for the e-mail address, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataGDEmailAddress:relation-type property to `relation_type`.
         *
         * Set `relation_type` to %NULL to unset the property in the e-mail address.
         * @param relation_type the new relation type for the email_address, or %NULL
         */
        set_relation_type(relation_type?: string | null): void;
    }

    module GDIMAddress {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGDIMAddress structure are private and should never be accessed directly.
     */
    class GDIMAddress extends Parsable {
        // Own properties of GData-0.0.GDIMAddress

        /**
         * The IM address itself.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm"&gt;GData specification&lt;/ulink&gt;.
         */
        address: string;
        /**
         * Indicates which IM address out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm"&gt;GData specification&lt;/ulink&gt;.
         */
        is_primary: boolean;
        /**
         * Indicates which IM address out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm"&gt;GData specification&lt;/ulink&gt;.
         */
        isPrimary: boolean;
        /**
         * A simple string value used to name this IM address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm"&gt;GData specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * Identifies the IM network. For example: %GDATA_GD_IM_PROTOCOL_JABBER or %GDATA_GD_IM_PROTOCOL_GOOGLE_TALK.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm"&gt;GData specification&lt;/ulink&gt;.
         */
        protocol: string;
        /**
         * A programmatic value that identifies the type of IM address. For example: %GDATA_GD_IM_ADDRESS_HOME or %GDATA_GD_IM_ADDRESS_WORK.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm"&gt;GData specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * A programmatic value that identifies the type of IM address. For example: %GDATA_GD_IM_ADDRESS_HOME or %GDATA_GD_IM_ADDRESS_WORK.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm"&gt;GData specification&lt;/ulink&gt;.
         */
        relationType: string;

        // Constructors of GData-0.0.GDIMAddress

        static ['new'](
            address: string,
            protocol: string | null,
            relation_type: string | null,
            label: string | null,
            is_primary: boolean,
        ): GDIMAddress;

        // Owm methods of GData-0.0.GDIMAddress

        /**
         * Gets the #GDataGDIMAddress:address property.
         * @returns the IM address itself, or %NULL
         */
        get_address(): string;
        /**
         * Gets the #GDataGDIMAddress:label property.
         * @returns the IM address' label, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataGDIMAddress:protocol property.
         * @returns the IM address' protocol, or %NULL
         */
        get_protocol(): string;
        /**
         * Gets the #GDataGDIMAddress:relation-type property.
         * @returns the IM address' relation type, or %NULL
         */
        get_relation_type(): string;
        /**
         * Sets the #GDataGDIMAddress:address property to `address`.
         * @param address the new IM address
         */
        set_address(address: string): void;
        /**
         * Sets the #GDataGDIMAddress:is-primary property to `is_primary`.
         * @param is_primary %TRUE if this is the primary IM address, %FALSE otherwise
         */
        set_is_primary(is_primary: boolean): void;
        /**
         * Sets the #GDataGDIMAddress:label property to `label`.
         *
         * Set `label` to %NULL to unset the property in the IM address.
         * @param label the new label for the IM address, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataGDIMAddress:protocol property to `protocol`.
         * @param protocol the new IM protocol, or %NULL
         */
        set_protocol(protocol?: string | null): void;
        /**
         * Sets the #GDataGDIMAddress:relation-type property to `relation_type`.
         *
         * Set `relation_type` to %NULL to unset the property in the IM address.
         * @param relation_type the new relation type for the im_address, or %NULL
         */
        set_relation_type(relation_type?: string | null): void;
    }

    module GDName {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGDName structure are private and should never be accessed directly.
     */
    class GDName extends Parsable {
        // Own properties of GData-0.0.GDName

        /**
         * An additional name for the person (e.g. a middle name).
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName"&gt;GData specification&lt;/ulink&gt;.
         */
        additional_name: string;
        /**
         * An additional name for the person (e.g. a middle name).
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName"&gt;GData specification&lt;/ulink&gt;.
         */
        additionalName: string;
        /**
         * The person's family name.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName"&gt;GData specification&lt;/ulink&gt;.
         */
        family_name: string;
        /**
         * The person's family name.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName"&gt;GData specification&lt;/ulink&gt;.
         */
        familyName: string;
        /**
         * An unstructured representation of the person's full name. It's generally advised to use the other individual properties in preference
         * to this one, which can fall out of synchronisation with the other properties.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName"&gt;GData specification&lt;/ulink&gt;.
         */
        full_name: string;
        /**
         * An unstructured representation of the person's full name. It's generally advised to use the other individual properties in preference
         * to this one, which can fall out of synchronisation with the other properties.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName"&gt;GData specification&lt;/ulink&gt;.
         */
        fullName: string;
        /**
         * The person's given name.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName"&gt;GData specification&lt;/ulink&gt;.
         */
        given_name: string;
        /**
         * The person's given name.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName"&gt;GData specification&lt;/ulink&gt;.
         */
        givenName: string;
        /**
         * An honorific prefix (e.g. &lt;literal&gt;Mr&lt;/literal&gt; or &lt;literal&gt;Mrs&lt;/literal&gt;).
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName"&gt;GData specification&lt;/ulink&gt;.
         */
        prefix: string;
        /**
         * An honorific suffix (e.g. &lt;literal&gt;san&lt;/literal&gt; or &lt;literal&gt;III&lt;/literal&gt;).
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName"&gt;GData specification&lt;/ulink&gt;.
         */
        suffix: string;

        // Constructors of GData-0.0.GDName

        static ['new'](given_name?: string | null, family_name?: string | null): GDName;

        // Owm methods of GData-0.0.GDName

        /**
         * Gets the #GDataGDName:additional-name property.
         * @returns the person's additional name, or %NULL
         */
        get_additional_name(): string;
        /**
         * Gets the #GDataGDName:family-name property.
         * @returns the person's family name, or %NULL
         */
        get_family_name(): string;
        /**
         * Gets the #GDataGDName:full-name property.
         * @returns the person's full name, or %NULL
         */
        get_full_name(): string;
        /**
         * Gets the #GDataGDName:given-name property.
         * @returns the person's given name, or %NULL
         */
        get_given_name(): string;
        /**
         * Gets the #GDataGDName:prefix property.
         * @returns the person's name prefix, or %NULL
         */
        get_prefix(): string;
        /**
         * Gets the #GDataGDName:suffix property.
         * @returns the person's name suffix, or %NULL
         */
        get_suffix(): string;
        /**
         * Sets the #GDataGDName:additional-name property to `additional_name`.
         * @param additional_name the new additional name, or %NULL
         */
        set_additional_name(additional_name?: string | null): void;
        /**
         * Sets the #GDataGDName:family-name property to `family_name`.
         * @param family_name the new family name, or %NULL
         */
        set_family_name(family_name?: string | null): void;
        /**
         * Sets the #GDataGDName:full-name property to `full_name`.
         * @param full_name the new full name, or %NULL
         */
        set_full_name(full_name?: string | null): void;
        /**
         * Sets the #GDataGDName:given-name property to `given_name`.
         * @param given_name the new given name, or %NULL
         */
        set_given_name(given_name?: string | null): void;
        /**
         * Sets the #GDataGDName:prefix property to `prefix`.
         * @param prefix the new prefix, or %NULL
         */
        set_prefix(prefix?: string | null): void;
        /**
         * Sets the #GDataGDName:suffix property to `suffix`.
         * @param suffix the new suffix, or %NULL
         */
        set_suffix(suffix?: string | null): void;
    }

    module GDOrganization {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGDOrganization structure are private and should never be accessed directly.
     */
    class GDOrganization extends Parsable {
        // Own properties of GData-0.0.GDOrganization

        /**
         * Specifies a department within the organization.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization"&gt;GData specification&lt;/ulink&gt;.
         */
        department: string;
        /**
         * Indicates which organization out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization"&gt;GData specification&lt;/ulink&gt;.
         */
        is_primary: boolean;
        /**
         * Indicates which organization out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization"&gt;GData specification&lt;/ulink&gt;.
         */
        isPrimary: boolean;
        /**
         * Description of a job within the organization.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization"&gt;GData specification&lt;/ulink&gt;.
         */
        job_description: string;
        /**
         * Description of a job within the organization.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization"&gt;GData specification&lt;/ulink&gt;.
         */
        jobDescription: string;
        /**
         * A simple string value used to name this organization. It allows UIs to display a label such as "Work", "Volunteer",
         * "Professional Society", etc.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization"&gt;GData specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * A place associated with the organization, e.g. office location.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization"&gt;GData specification&lt;/ulink&gt;.
         */
        location: GDWhere;
        /**
         * The name of the organization.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization"&gt;GData specification&lt;/ulink&gt;.
         */
        name: string;
        /**
         * A programmatic value that identifies the type of organization. For example: %GDATA_GD_ORGANIZATION_WORK or %GDATA_GD_ORGANIZATION_OTHER.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization"&gt;GData specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * A programmatic value that identifies the type of organization. For example: %GDATA_GD_ORGANIZATION_WORK or %GDATA_GD_ORGANIZATION_OTHER.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization"&gt;GData specification&lt;/ulink&gt;.
         */
        relationType: string;
        /**
         * Stock symbol of the organization.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization"&gt;GData specification&lt;/ulink&gt;.
         */
        symbol: string;
        /**
         * The title of a person within the organization.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization"&gt;GData specification&lt;/ulink&gt;.
         */
        title: string;

        // Constructors of GData-0.0.GDOrganization

        static ['new'](
            name: string | null,
            title: string | null,
            relation_type: string | null,
            label: string | null,
            is_primary: boolean,
        ): GDOrganization;

        // Owm methods of GData-0.0.GDOrganization

        /**
         * Gets the #GDataGDOrganization:department property.
         * @returns the department in which the person works in this organization, or %NULL
         */
        get_department(): string;
        /**
         * Gets the #GDataGDOrganization:job-description property.
         * @returns the job description of the person in the organization, or %NULL
         */
        get_job_description(): string;
        /**
         * Gets the #GDataGDOrganization:label property.
         * @returns the organization's label, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataGDOrganization:location property.
         * @returns the organization's location, or %NULL
         */
        get_location(): GDWhere;
        /**
         * Gets the #GDataGDOrganization:name property.
         * @returns the organization's name, or %NULL
         */
        get_name(): string;
        /**
         * Gets the #GDataGDOrganization:relation-type property.
         * @returns the organization's relation type, or %NULL
         */
        get_relation_type(): string;
        /**
         * Gets the #GDataGDOrganization:symbol property.
         * @returns the organization's stock symbol, or %NULL
         */
        get_symbol(): string;
        /**
         * Gets the #GDataGDOrganization:title property.
         * @returns the organization's title, or %NULL
         */
        get_title(): string;
        /**
         * Sets the #GDataGDOrganization:department property to `department`.
         *
         * Set `department` to %NULL to unset the property in the organization.
         * @param department the new department for the person working in the organization, or %NULL
         */
        set_department(department?: string | null): void;
        /**
         * Sets the #GDataGDOrganization:is-primary property to `is_primary`.
         * @param is_primary %TRUE if this is the primary organization, %FALSE otherwise
         */
        set_is_primary(is_primary: boolean): void;
        /**
         * Sets the #GDataGDOrganization:job-description property to `job_description`.
         *
         * Set `job_description` to %NULL to unset the property in the organization.
         * @param job_description the new job description for the person in the organization, or %NULL
         */
        set_job_description(job_description?: string | null): void;
        /**
         * Sets the #GDataGDOrganization:label property to `label`.
         *
         * Set `label` to %NULL to unset the property in the organization.
         * @param label the new label for the organization, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataGDOrganization:location property to `location`.
         *
         * Set `location` to %NULL to unset the property in the organization.
         * @param location the new location for the organization, or %NULL
         */
        set_location(location?: GDWhere | null): void;
        /**
         * Sets the #GDataGDOrganization:name property to `name`.
         *
         * Set `name` to %NULL to unset the property in the organization.
         * @param name the new name for the organization, or %NULL
         */
        set_name(name?: string | null): void;
        /**
         * Sets the #GDataGDOrganization:relation-type property to `relation_type`.
         *
         * Set `relation_type` to %NULL to unset the property in the organization.
         * @param relation_type the new relation type for the organization, or %NULL
         */
        set_relation_type(relation_type?: string | null): void;
        /**
         * Sets the #GDataGDOrganization:symbol property to `symbol`.
         *
         * Set `symbol` to %NULL to unset the property in the organization.
         * @param symbol the new stock symbol for the organization, or %NULL
         */
        set_symbol(symbol?: string | null): void;
        /**
         * Sets the #GDataGDOrganization:title property to `title`.
         *
         * Set `title` to %NULL to unset the property in the organization.
         * @param title the new title for the organization, or %NULL
         */
        set_title(title?: string | null): void;
    }

    module GDPhoneNumber {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGDPhoneNumber structure are private and should never be accessed directly.
     */
    class GDPhoneNumber extends Parsable {
        // Own properties of GData-0.0.GDPhoneNumber

        /**
         * Indicates which phone number out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber"&gt;GData specification&lt;/ulink&gt;.
         */
        is_primary: boolean;
        /**
         * Indicates which phone number out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber"&gt;GData specification&lt;/ulink&gt;.
         */
        isPrimary: boolean;
        /**
         * A simple string value used to name this phone number. It allows UIs to display a label such as "Mobile", "Home", "Work", etc.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber"&gt;GData specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * Human-readable phone number; may be in any telephone number format.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber"&gt;GData specification&lt;/ulink&gt;.
         */
        number: string;
        /**
         * A programmatic value that identifies the type of phone number. For example: %GDATA_GD_PHONE_NUMBER_WORK or %GDATA_GD_PHONE_NUMBER_PAGER.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber"&gt;GData specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * A programmatic value that identifies the type of phone number. For example: %GDATA_GD_PHONE_NUMBER_WORK or %GDATA_GD_PHONE_NUMBER_PAGER.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber"&gt;GData specification&lt;/ulink&gt;.
         */
        relationType: string;
        /**
         * An optional "tel URI" used to represent the number in a formal way. Useful for programmatic access, such as a VoIP/PSTN bridge.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber"&gt;GData specification&lt;/ulink&gt;.
         */
        uri: string;

        // Constructors of GData-0.0.GDPhoneNumber

        static ['new'](
            number: string,
            relation_type: string | null,
            label: string | null,
            uri: string | null,
            is_primary: boolean,
        ): GDPhoneNumber;

        // Owm methods of GData-0.0.GDPhoneNumber

        /**
         * Gets the #GDataGDPhoneNumber:label property.
         * @returns the phone number's label, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataGDPhoneNumber:number property.
         * @returns the phone number itself
         */
        get_number(): string;
        /**
         * Gets the #GDataGDPhoneNumber:relation-type property.
         * @returns the phone number's relation type, or %NULL
         */
        get_relation_type(): string;
        /**
         * Gets the #GDataGDPhoneNumber:uri property.
         * @returns the phone number's URI, or %NULL
         */
        get_uri(): string;
        /**
         * Sets the #GDataGDPhoneNumber:is-primary property to `is_primary`.
         * @param is_primary %TRUE if this is the primary phone number, %FALSE otherwise
         */
        set_is_primary(is_primary: boolean): void;
        /**
         * Sets the #GDataGDPhoneNumber:label property to `label`.
         *
         * Set `label` to %NULL to unset the property in the phone number.
         * @param label the new label for the phone number, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataGDPhoneNumber:number property to `number`.
         * @param number the new phone number
         */
        set_number(number: string): void;
        /**
         * Sets the #GDataGDPhoneNumber:relation-type property to `relation_type`.
         *
         * Set `relation_type` to %NULL to unset the property in the phone number.
         * @param relation_type the new relation type for the phone number, or %NULL
         */
        set_relation_type(relation_type?: string | null): void;
        /**
         * Sets the #GDataGDPhoneNumber:uri property to `uri`.
         *
         * Set `uri` to %NULL to unset the property in the phone number.
         * @param uri the new URI for the phone number, or %NULL
         */
        set_uri(uri?: string | null): void;
    }

    module GDPostalAddress {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGDPostalAddress structure are private and should never be accessed directly.
     */
    class GDPostalAddress extends Parsable {
        // Own properties of GData-0.0.GDPostalAddress

        /**
         * The postal address itself, formatted and unstructured. It is preferred to use the other, structured properties rather than this one.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        address: string;
        /**
         * The agent who actually receives the mail. Used in work addresses. Also for "in care of" or "c/o".
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        agent: string;
        /**
         * Can be city, village, town, borough, etc. This is the postal town and not necessarily the place of residence or place of business.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        city: string;
        /**
         * The name of the country. Since this is paired with #GDataGDPostalAddress:country-code, they must both be set with
         * gdata_gd_postal_address_set_country().
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        readonly country: string;
        /**
         * The ISO 3166-1 alpha-2 country code for the country in #GDataGDPostalAddress:country. Since this is paired with
         * #GDataGDPostalAddress:country, they must both be set with gdata_gd_postal_address_set_country().
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;
         * or &lt;ulink type="http" url="http://www.iso.org/iso/iso-3166-1_decoding_table"&gt;ISO 3166-1 alpha-2&lt;/ulink&gt;.
         */
        readonly country_code: string;
        /**
         * The ISO 3166-1 alpha-2 country code for the country in #GDataGDPostalAddress:country. Since this is paired with
         * #GDataGDPostalAddress:country, they must both be set with gdata_gd_postal_address_set_country().
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;
         * or &lt;ulink type="http" url="http://www.iso.org/iso/iso-3166-1_decoding_table"&gt;ISO 3166-1 alpha-2&lt;/ulink&gt;.
         */
        readonly countryCode: string;
        /**
         * Used in places where houses or buildings have names (and not necessarily numbers).
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        house_name: string;
        /**
         * Used in places where houses or buildings have names (and not necessarily numbers).
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        houseName: string;
        /**
         * Indicates which postal address out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        is_primary: boolean;
        /**
         * Indicates which postal address out of a group is primary.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        isPrimary: boolean;
        /**
         * A simple string value used to name this postal address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * Classes of mail accepted at this address. For example: %GDATA_GD_MAIL_CLASS_LETTERS or %GDATA_GD_MAIL_CLASS_BOTH.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        mail_class: string;
        /**
         * Classes of mail accepted at this address. For example: %GDATA_GD_MAIL_CLASS_LETTERS or %GDATA_GD_MAIL_CLASS_BOTH.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        mailClass: string;
        /**
         * This is used to disambiguate a street address when a city contains more than one street with the same name, or to specify a small place
         * whose mail is routed through a larger postal town. In China it could be a county or a minor city.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        neighborhood: string;
        /**
         * Covers actual P.O. boxes, drawers, locked bags, etc. This is usually but not always mutually exclusive with #GDataGDPostalAddress:street.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        po_box: string;
        /**
         * Covers actual P.O. boxes, drawers, locked bags, etc. This is usually but not always mutually exclusive with #GDataGDPostalAddress:street.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        poBox: string;
        /**
         * Postal code. Usually country-wide, but sometimes specific to the city (e.g. "2" in "Dublin 2, Ireland" addresses).
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        postcode: string;
        /**
         * A state, province, county (in Ireland), Land (in Germany), departement (in France), etc.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        region: string;
        /**
         * A programmatic value that identifies the type of postal address. For example: %GDATA_GD_POSTAL_ADDRESS_WORK or
         * %GDATA_GD_POSTAL_ADDRESS_OTHER.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * A programmatic value that identifies the type of postal address. For example: %GDATA_GD_POSTAL_ADDRESS_WORK or
         * %GDATA_GD_POSTAL_ADDRESS_OTHER.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        relationType: string;
        /**
         * Can be street, avenue, road, etc. This element also includes the house number and room/apartment/flat/floor number.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        street: string;
        /**
         * Handles administrative districts such as U.S. or U.K. counties that are not used for mail addressing purposes.
         * Subregion is not intended for delivery addresses.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        subregion: string;
        /**
         * The context in which this address can be used. For example: %GDATA_GD_ADDRESS_USAGE_GENERAL or %GDATA_GD_ADDRESS_USAGE_LOCAL.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress"&gt;GData specification&lt;/ulink&gt;.
         */
        usage: string;

        // Constructors of GData-0.0.GDPostalAddress

        static ['new'](relation_type: string | null, label: string | null, is_primary: boolean): GDPostalAddress;

        // Owm methods of GData-0.0.GDPostalAddress

        /**
         * Gets the #GDataGDPostalAddress:address property.
         * @returns the postal address itself, or %NULL
         */
        get_address(): string;
        /**
         * Gets the #GDataGDPostalAddress:agent property.
         * @returns the postal address' agent, or %NULL
         */
        get_agent(): string;
        /**
         * Gets the #GDataGDPostalAddress:city property.
         * @returns the postal address' city, or %NULL
         */
        get_city(): string;
        /**
         * Gets the #GDataGDPostalAddress:country property.
         * @returns the postal address' country, or %NULL
         */
        get_country(): string;
        /**
         * Gets the #GDataGDPostalAddress:country-code property.
         * @returns the postal address' ISO 3166-1 alpha-2 country code, or %NULL
         */
        get_country_code(): string;
        /**
         * Gets the #GDataGDPostalAddress:house-name property.
         * @returns the postal address' house name, or %NULL
         */
        get_house_name(): string;
        /**
         * Gets the #GDataGDPostalAddress:label property.
         * @returns the postal address' label, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataGDPostalAddress:mail-class property.
         * @returns the postal address' mail class, or %NULL
         */
        get_mail_class(): string;
        /**
         * Gets the #GDataGDPostalAddress:neighborhood property.
         * @returns the postal address' neighborhood, or %NULL
         */
        get_neighborhood(): string;
        /**
         * Gets the #GDataGDPostalAddress:po-box property.
         * @returns the postal address' P.O. box, or %NULL
         */
        get_po_box(): string;
        /**
         * Gets the #GDataGDPostalAddress:postcode property.
         * @returns the postal address' postcode, or %NULL
         */
        get_postcode(): string;
        /**
         * Gets the #GDataGDPostalAddress:region property.
         * @returns the postal address' region, or %NULL
         */
        get_region(): string;
        /**
         * Gets the #GDataGDPostalAddress:relation-type property.
         * @returns the postal address' relation type, or %NULL
         */
        get_relation_type(): string;
        /**
         * Gets the #GDataGDPostalAddress:street property.
         * @returns the postal address' street, or %NULL
         */
        get_street(): string;
        /**
         * Gets the #GDataGDPostalAddress:subregion property.
         * @returns the postal address' subregion, or %NULL
         */
        get_subregion(): string;
        /**
         * Gets the #GDataGDPostalAddress:usage property.
         * @returns the postal address' usage, or %NULL
         */
        get_usage(): string;
        /**
         * Sets the #GDataGDPostalAddress:address property to `address`.
         * @param address the new postal address, or %NULL
         */
        set_address(address?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:agent property to `agent`.
         *
         * Set `agent` to %NULL to unset the property in the postal address.
         * @param agent the new agent for the postal address, or %NULL
         */
        set_agent(agent?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:city property to `city`.
         *
         * Set `city` to %NULL to unset the property in the postal address.
         * @param city the new city for the postal address, or %NULL
         */
        set_city(city?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:country property to `country,` and #GDataGDPostalAddress:country-code to `country_code`.
         *
         * Set `country` or `country_code` to %NULL to unset the relevant property in the postal address. If a `country_code` is provided, a `country` must
         * also be provided.
         * @param country the new country for the postal address, or %NULL
         * @param country_code the new country code for the postal address, or %NULL
         */
        set_country(country?: string | null, country_code?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:house-name property to `house_name`.
         *
         * Set `house_name` to %NULL to unset the property in the postal address.
         * @param house_name the new house name for the postal address, or %NULL
         */
        set_house_name(house_name?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:is-primary property to `is_primary`.
         * @param is_primary %TRUE if this is the primary postal address, %FALSE otherwise
         */
        set_is_primary(is_primary: boolean): void;
        /**
         * Sets the #GDataGDPostalAddress:label property to `label`.
         *
         * Set `label` to %NULL to unset the property in the postal address.
         * @param label the new label for the postal address, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:mail-class property to `mail_class`.
         *
         * Set `mail_class` to %NULL to unset the property in the postal address.
         * @param mail_class the new mail class for the postal address, or %NULL
         */
        set_mail_class(mail_class?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:neighborhood property to `neighborhood`.
         *
         * Set `neighborhood` to %NULL to unset the property in the postal address.
         * @param neighborhood the new neighborhood for the postal address, or %NULL
         */
        set_neighborhood(neighborhood?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:po-box property to `po_box`.
         *
         * Set `po_box` to %NULL to unset the property in the postal address.
         * @param po_box the new P.O. box for the postal address, or %NULL
         */
        set_po_box(po_box?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:postcode property to `postcode`.
         *
         * Set `postcode` to %NULL to unset the property in the postal address.
         * @param postcode the new postcode for the postal address, or %NULL
         */
        set_postcode(postcode?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:region property to `region`.
         *
         * Set `region` to %NULL to unset the property in the postal address.
         * @param region the new region for the postal address, or %NULL
         */
        set_region(region?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:relation-type property to `relation_type`.
         *
         * Set `relation_type` to %NULL to unset the property in the postal address.
         * @param relation_type the new relation type for the postal_address, or %NULL
         */
        set_relation_type(relation_type?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:street property to `street`.
         *
         * Set `street` to %NULL to unset the property in the postal address.
         * @param street the new street for the postal address, or %NULL
         */
        set_street(street?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:subregion property to `subregion`.
         *
         * Set `subregion` to %NULL to unset the property in the postal address.
         * @param subregion the new subregion for the postal address, or %NULL
         */
        set_subregion(subregion?: string | null): void;
        /**
         * Sets the #GDataGDPostalAddress:usage property to `usage`.
         *
         * Set `usage` to %NULL to unset the property in the postal address.
         * @param usage the new usage for the postal address, or %NULL
         */
        set_usage(usage?: string | null): void;
    }

    module GDReminder {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGDReminder structure are private and should never be accessed directly.
     */
    class GDReminder extends Parsable {
        // Own properties of GData-0.0.GDReminder

        /**
         * Absolute time at which the reminder should be issued.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder"&gt;GData specification&lt;/ulink&gt;.
         */
        absolute_time: number;
        /**
         * Absolute time at which the reminder should be issued.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder"&gt;GData specification&lt;/ulink&gt;.
         */
        absoluteTime: number;
        /**
         * Whether the reminder is specified as an absolute or relative time.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder"&gt;GData specification&lt;/ulink&gt;.
         */
        readonly is_absolute_time: boolean;
        /**
         * Whether the reminder is specified as an absolute or relative time.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder"&gt;GData specification&lt;/ulink&gt;.
         */
        readonly isAbsoluteTime: boolean;
        /**
         * The notification method the reminder should use. For example: %GDATA_GD_REMINDER_ALERT or %GDATA_GD_REMINDER_EMAIL.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder"&gt;GData specification&lt;/ulink&gt;.
         */
        method: string;
        /**
         * Time at which the reminder should be issued, in minutes relative to the start time of the corresponding event.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder"&gt;GData specification&lt;/ulink&gt;.
         */
        relative_time: number;
        /**
         * Time at which the reminder should be issued, in minutes relative to the start time of the corresponding event.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder"&gt;GData specification&lt;/ulink&gt;.
         */
        relativeTime: number;

        // Constructors of GData-0.0.GDReminder

        static ['new'](method: string | null, absolute_time: number, relative_time: number): GDReminder;

        // Owm methods of GData-0.0.GDReminder

        /**
         * Gets the #GDataGDReminder:absolute-time property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp of the absolute time for the reminder, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_absolute_time(): number;
        /**
         * Gets the #GDataGDReminder:method property.
         * @returns the method, or %NULL
         */
        get_method(): string;
        /**
         * Gets the #GDataGDReminder:relative-time property.
         * @returns the relative time, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_relative_time(): number;
        /**
         * Sets the #GDataGDReminder:absolute-time property to `absolute_time`.
         *
         * Set `absolute_time` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property.
         * @param absolute_time the new absolute time, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_absolute_time(absolute_time: number): void;
        /**
         * Sets the #GDataGDReminder:method property to `method`.
         *
         * Set `method` to %NULL to unset the property.
         * @param method the new method, or %NULL
         */
        set_method(method?: string | null): void;
        /**
         * Sets the #GDataGDReminder:relative-time property to `relative_time`.
         *
         * Set `relative_time` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property.
         * @param relative_time the new relative time, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_relative_time(relative_time: number): void;
    }

    module GDWhen {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGDWhen structure are private and should never be accessed directly.
     */
    class GDWhen extends Parsable {
        // Own properties of GData-0.0.GDWhen

        /**
         * The title of a person within the when.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen"&gt;GData specification&lt;/ulink&gt;.
         */
        end_time: number;
        /**
         * The title of a person within the when.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen"&gt;GData specification&lt;/ulink&gt;.
         */
        endTime: number;
        /**
         * A programmatic value that identifies the type of when.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen"&gt;GData specification&lt;/ulink&gt;.
         */
        is_date: boolean;
        /**
         * A programmatic value that identifies the type of when.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen"&gt;GData specification&lt;/ulink&gt;.
         */
        isDate: boolean;
        /**
         * The name of the when.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen"&gt;GData specification&lt;/ulink&gt;.
         */
        start_time: number;
        /**
         * The name of the when.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen"&gt;GData specification&lt;/ulink&gt;.
         */
        startTime: number;
        /**
         * A simple string value used to name this when. It allows UIs to display a label such as "Work", "Volunteer",
         * "Professional Society", etc.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen"&gt;GData specification&lt;/ulink&gt;.
         */
        value_string: string;
        /**
         * A simple string value used to name this when. It allows UIs to display a label such as "Work", "Volunteer",
         * "Professional Society", etc.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen"&gt;GData specification&lt;/ulink&gt;.
         */
        valueString: string;

        // Constructors of GData-0.0.GDWhen

        static ['new'](start_time: number, end_time: number, is_date: boolean): GDWhen;

        // Owm methods of GData-0.0.GDWhen

        /**
         * Adds a reminder to the #GDataGDWhen's list of reminders and increments its reference count.
         *
         * Duplicate reminders will not be added to the list.
         * @param reminder a #GDataGDReminder to add
         */
        add_reminder(reminder: GDReminder): void;
        /**
         * Gets the #GDataGDWhen:end-time property.
         *
         * If the end time is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the end time of the event, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_end_time(): number;
        /**
         * Returns a list of the #GDataGDReminders which are associated with this #GDataGDWhen.
         * @returns a #GList of #GDataGDReminders, or %NULL
         */
        get_reminders(): GDReminder[];
        /**
         * Gets the #GDataGDWhen:start-time property.
         * @returns the UNIX timestamp for the start time of the event
         */
        get_start_time(): number;
        /**
         * Gets the #GDataGDWhen:value-string property.
         * @returns the value string, or %NULL
         */
        get_value_string(): string;
        /**
         * Sets the #GDataGDWhen:end-time property to `end_time`.
         *
         * Set `end_time` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property.
         * @param end_time the new end time, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_end_time(end_time: number): void;
        /**
         * Sets the #GDataGDWhen:is-date property to `is_date`.
         * @param is_date %TRUE if #GDataGDWhen:start-time and #GDataGDWhen:end-time should be dates rather than times, %FALSE otherwise
         */
        set_is_date(is_date: boolean): void;
        /**
         * Sets the #GDataGDWhen:start-time property to `start_time`.
         * @param start_time the new start time
         */
        set_start_time(start_time: number): void;
        /**
         * Sets the #GDataGDWhen:value-string property to `value_string`.
         *
         * Set `value_string` to %NULL to unset the property.
         * @param value_string the new value string, or %NULL
         */
        set_value_string(value_string?: string | null): void;
    }

    module GDWhere {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGDWhere structure are private and should never be accessed directly.
     */
    class GDWhere extends Parsable {
        // Own properties of GData-0.0.GDWhere

        /**
         * Specifies a user-readable label to distinguish this location from others.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere"&gt;GData specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * Specifies the relationship between the containing entity and the contained location. For example: %GDATA_GD_WHERE_EVENT or
         * %GDATA_GD_WHERE_EVENT_PARKING.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere"&gt;GData specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * Specifies the relationship between the containing entity and the contained location. For example: %GDATA_GD_WHERE_EVENT or
         * %GDATA_GD_WHERE_EVENT_PARKING.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere"&gt;GData specification&lt;/ulink&gt;.
         */
        relationType: string;
        /**
         * A simple string representation of this location.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere"&gt;GData specification&lt;/ulink&gt;.
         */
        value_string: string;
        /**
         * A simple string representation of this location.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere"&gt;GData specification&lt;/ulink&gt;.
         */
        valueString: string;

        // Constructors of GData-0.0.GDWhere

        static ['new'](relation_type?: string | null, value_string?: string | null, label?: string | null): GDWhere;

        // Owm methods of GData-0.0.GDWhere

        /**
         * Gets the #GDataGDWhere:label property.
         * @returns the label, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataGDWhere:relation-type property.
         * @returns the relation type, or %NULL
         */
        get_relation_type(): string;
        /**
         * Gets the #GDataGDWhere:value-string property.
         * @returns the value string, or %NULL
         */
        get_value_string(): string;
        /**
         * Sets the #GDataGDWhere:label property to `label`.
         *
         * Set `label` to %NULL to unset the property.
         * @param label the new label, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataGDWhere:relation-type property to `relation_type`.
         *
         * Set `relation_type` to %NULL to unset the property.
         * @param relation_type the new relation type, or %NULL
         */
        set_relation_type(relation_type?: string | null): void;
        /**
         * Sets the #GDataGDWhere:value-string property to `value_string`.
         *
         * Set `value_string` to %NULL to unset the property.
         * @param value_string the new value string, or %NULL
         */
        set_value_string(value_string?: string | null): void;
    }

    module GDWho {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGDWho structure are private and should never be accessed directly.
     */
    class GDWho extends Parsable {
        // Own properties of GData-0.0.GDWho

        /**
         * The e-mail address of the person represented by the #GDataGDWho.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho"&gt;GData specification&lt;/ulink&gt;.
         */
        email_address: string;
        /**
         * The e-mail address of the person represented by the #GDataGDWho.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho"&gt;GData specification&lt;/ulink&gt;.
         */
        emailAddress: string;
        /**
         * Specifies the relationship between the containing entity and the contained person. For example: %GDATA_GD_WHO_EVENT_PERFORMER or
         * %GDATA_GD_WHO_EVENT_ATTENDEE.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho"&gt;GData specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * Specifies the relationship between the containing entity and the contained person. For example: %GDATA_GD_WHO_EVENT_PERFORMER or
         * %GDATA_GD_WHO_EVENT_ATTENDEE.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho"&gt;GData specification&lt;/ulink&gt;.
         */
        relationType: string;
        /**
         * A simple string representation of this person.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho"&gt;GData specification&lt;/ulink&gt;.
         */
        value_string: string;
        /**
         * A simple string representation of this person.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho"&gt;GData specification&lt;/ulink&gt;.
         */
        valueString: string;

        // Constructors of GData-0.0.GDWho

        static ['new'](
            relation_type?: string | null,
            value_string?: string | null,
            email_address?: string | null,
        ): GDWho;

        // Owm methods of GData-0.0.GDWho

        /**
         * Gets the #GDataGDWho:email-address property.
         * @returns the e-mail address, or %NULL
         */
        get_email_address(): string;
        /**
         * Gets the #GDataGDWho:relation-type property.
         * @returns the relation type, or %NULL
         */
        get_relation_type(): string;
        /**
         * Gets the #GDataGDWho:value-string property.
         * @returns the value string, or %NULL
         */
        get_value_string(): string;
        /**
         * Sets the #GDataGDWho:email-address property to `email_address`.
         *
         * Set `email_address` to %NULL to unset the property.
         * @param email_address the new e-mail address, or %NULL
         */
        set_email_address(email_address?: string | null): void;
        /**
         * Sets the #GDataGDWho:relation-type property to `relation_type`.
         *
         * Set `relation_type` to %NULL to unset the property.
         * @param relation_type the new relation type, or %NULL
         */
        set_relation_type(relation_type?: string | null): void;
        /**
         * Sets the #GDataGDWho:value-string property to `value_string`.
         *
         * Set `value_string` to %NULL to unset the property.
         * @param value_string the new value string, or %NULL
         */
        set_value_string(value_string?: string | null): void;
    }

    module Generator {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGenerator structure are private and should never be accessed directly.
     */
    class Generator extends Parsable {
        // Own properties of GData-0.0.Generator

        /**
         * A human-readable name for the generating agent.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.generator"&gt;
         * Atom specification&lt;/ulink&gt;.
         */
        readonly name: string;
        /**
         * An IRI reference that is relevant to the agent.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.generator"&gt;
         * Atom specification&lt;/ulink&gt;.
         */
        readonly uri: string;
        /**
         * Indicates the version of the generating agent.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.generator"&gt;
         * Atom specification&lt;/ulink&gt;.
         */
        readonly version: string;

        // Owm methods of GData-0.0.Generator

        /**
         * Gets the #GDataGenerator:name property. The name will be %NULL or non-empty.
         * @returns the generator's name
         */
        get_name(): string | null;
        /**
         * Gets the #GDataGenerator:uri property. The URI will be %NULL or non-empty.
         * @returns the generator's URI, or %NULL
         */
        get_uri(): string | null;
        /**
         * Gets the #GDataGenerator:version property.
         * @returns the generator's version, or %NULL
         */
        get_version(): string;
    }

    module GoaAuthorizer {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataGoaAuthorizer structure are private and should never be accessed directly.
     */
    class GoaAuthorizer extends GObject.Object {
        // Own properties of GData-0.0.GoaAuthorizer

        /**
         * The GOA account providing authentication. This should have all the necessary services enabled on it.
         */
        goa_object: Goa.Object;
        /**
         * The GOA account providing authentication. This should have all the necessary services enabled on it.
         */
        goaObject: Goa.Object;

        // Constructors of GData-0.0.GoaAuthorizer

        static ['new'](goa_object: Goa.Object): GoaAuthorizer;

        // Owm methods of GData-0.0.GoaAuthorizer

        /**
         * The GOA account providing authentication. This is the same as #GDataGoaAuthorizer:goa-object.
         * @returns the GOA account providing authentication
         */
        get_goa_object(): Goa.Object;
    }

    module Link {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataLink structure are private and should never be accessed directly.
     */
    class Link extends Parsable {
        // Own properties of GData-0.0.Link

        /**
         * An advisory media type: it is a hint about the type of the representation that is expected to be returned when the value
         * of the #GDataLink:uri property is dereferenced.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link"&gt;Atom specification&lt;/ulink&gt;.
         */
        content_type: string;
        /**
         * An advisory media type: it is a hint about the type of the representation that is expected to be returned when the value
         * of the #GDataLink:uri property is dereferenced.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link"&gt;Atom specification&lt;/ulink&gt;.
         */
        contentType: string;
        /**
         * Describes the language of the resource pointed to by the #GDataLink:uri property.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link"&gt;Atom specification&lt;/ulink&gt;.
         */
        language: string;
        /**
         * Indicates an advisory length of the linked content in octets. &lt;code class="literal"&gt;-1&lt;/code&gt; means the length is unspecified.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link"&gt;Atom specification&lt;/ulink&gt;.
         */
        length: number;
        /**
         * The link relation type.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link"&gt;Atom specification&lt;/ulink&gt;.
         */
        relation_type: string;
        /**
         * The link relation type.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link"&gt;Atom specification&lt;/ulink&gt;.
         */
        relationType: string;
        /**
         * Conveys human-readable information about the link.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link"&gt;Atom specification&lt;/ulink&gt;.
         */
        title: string;
        /**
         * The link's IRI.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link"&gt;Atom specification&lt;/ulink&gt;.
         */
        uri: string;

        // Constructors of GData-0.0.Link

        static ['new'](uri: string, relation_type?: string | null): Link;

        // Owm methods of GData-0.0.Link

        /**
         * Gets the #GDataLink:content-type property. If the content type is non-%NULL, it will be non-empty.
         * @returns the link's content type, or %NULL
         */
        get_content_type(): string | null;
        /**
         * Gets the #GDataLink:language property. If the language is non-%NULL, it will be non-empty.
         * @returns the link's language, or %NULL
         */
        get_language(): string | null;
        /**
         * Gets the #GDataLink:length property.
         * @returns the link's length, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_length(): number;
        /**
         * Gets the #GDataLink:relation-type property. If the relation type is non-%NULL, it will be non-empty.
         * @returns the link's relation type
         */
        get_relation_type(): string | null;
        /**
         * Gets the #GDataLink:title property.
         * @returns the link's title, or %NULL
         */
        get_title(): string;
        /**
         * Gets the #GDataLink:uri property. The return value is guaranteed to be a valid IRI, as
         * specified by the Atom protocol. Common relationship values such as &lt;literal&gt;alternate&lt;/literal&gt;
         * are returned as &lt;literal&gt;http://www.iana.org/assignments/relation/alternate&lt;/literal&gt;.
         *
         * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute"&gt;
         * Atom specification&lt;/ulink&gt;.
         * @returns the link's URI
         */
        get_uri(): string;
        /**
         * Sets the #GDataLink:content-type property to `content_type`. `content_type` must be %NULL or non-empty.
         *
         * Set `content_type` to %NULL to unset the property in the link.
         * @param content_type the new content type for the link, or %NULL
         */
        set_content_type(content_type?: string | null): void;
        /**
         * Sets the #GDataLink:language property to `language`. `language` must be %NULL or non-empty.
         *
         * Set `language` to %NULL to unset the property in the link.
         * @param language the new language for the link, or %NULL
         */
        set_language(language?: string | null): void;
        /**
         * Sets the #GDataLink:length property to `length`.
         *
         * Set `length` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the link.
         * @param length the new length for the link, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_length(length: number): void;
        /**
         * Sets the #GDataLink:relation-type property to `relation_type`. If `relation_type` is one of the standard Atom relation types,
         * use one of the defined relation type values, instead of a static string. e.g. %GDATA_LINK_EDIT or %GDATA_LINK_SELF.
         *
         * Set `relation_type` to %NULL to unset the property in the link.
         * @param relation_type the new relation type for the link, or %NULL
         */
        set_relation_type(relation_type?: string | null): void;
        /**
         * Sets the #GDataLink:title property to `title`.
         *
         * Set `title` to %NULL to unset the property in the link.
         * @param title the new title for the link, or %NULL
         */
        set_title(title?: string | null): void;
        /**
         * Sets the #GDataLink:uri property to `uri`. `uri` must be non-%NULL and non-empty.
         * @param uri the new URI for the link
         */
        set_uri(uri: string): void;
    }

    module MediaCategory {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataMediaCategory structure are private and should never be accessed directly.
     */
    class MediaCategory extends Parsable {
        // Own properties of GData-0.0.MediaCategory

        /**
         * The category name.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        category: string;
        /**
         * A human-readable label that can be displayed in end-user applications.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        label: string;
        /**
         * A URI that identifies the categorization scheme.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        scheme: string;

        // Constructors of GData-0.0.MediaCategory

        static ['new'](category: string, scheme?: string | null, label?: string | null): MediaCategory;

        // Owm methods of GData-0.0.MediaCategory

        /**
         * Gets the #GDataMediaCategory:category property.
         * @returns the actual category
         */
        get_category(): string;
        /**
         * Gets the #GDataMediaCategory:label property.
         * @returns the category's label, or %NULL
         */
        get_label(): string;
        /**
         * Gets the #GDataMediaCategory:scheme property.
         * @returns the category's scheme, or %NULL
         */
        get_scheme(): string;
        /**
         * Sets the #GDataMediaCategory:category property to `category`.
         * @param category the new category
         */
        set_category(category: string): void;
        /**
         * Sets the #GDataMediaCategory:label property to `label`.
         *
         * Set `label` to %NULL to unset the property.
         * @param label the category's new label, or %NULL
         */
        set_label(label?: string | null): void;
        /**
         * Sets the #GDataMediaCategory:scheme property to `scheme`.
         *
         * Set `scheme` to %NULL to unset the property.
         * @param scheme the category's new scheme, or %NULL
         */
        set_scheme(scheme?: string | null): void;
    }

    module MediaContent {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataMediaContent structure are private and should never be accessed directly.
     */
    class MediaContent extends Parsable {
        // Own properties of GData-0.0.MediaContent

        /**
         * The standard MIME type of the object.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly content_type: string;
        /**
         * The standard MIME type of the object.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly contentType: string;
        /**
         * The number of seconds for which the media object plays.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly duration: number;
        /**
         * Determines if the object is a sample or the full version of the object, or even if it is a continuous stream.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly expression: MediaExpression;
        /**
         * The number of bytes of the media object.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly filesize: number;
        /**
         * The height of the media object.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly height: number;
        /**
         * Determines if this is the default content for the media group. There should only be one default object per media group.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly is_default: boolean;
        /**
         * Determines if this is the default content for the media group. There should only be one default object per media group.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly isDefault: boolean;
        /**
         * The type of object, complementing #GDataMediaContent:content-type. It allows the consuming application to make simpler decisions between
         * different content objects, based on whether they're a video or audio stream, for example.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly medium: MediaMedium;
        /**
         * The direct URI to the media object.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly uri: string;
        /**
         * The width of the media object.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly width: number;

        // Owm methods of GData-0.0.MediaContent

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
         * @returns a #GDataDownloadStream to download the content with, or %NULL; unref with g_object_unref()
         */
        download(service: Service, cancellable?: Gio.Cancellable | null): DownloadStream;
        /**
         * Gets the #GDataMediaContent:content-type property.
         * @returns the content's content (MIME) type, or %NULL
         */
        get_content_type(): string;
        /**
         * Gets the #GDataMediaContent:duration property.
         * @returns the content's duration in seconds, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_duration(): number;
        /**
         * Gets the #GDataMediaContent:expression property.
         * @returns the content's expression, or %GDATA_MEDIA_EXPRESSION_FULL
         */
        get_expression(): MediaExpression;
        /**
         * Gets the #GDataMediaContent:filesize property.
         * @returns the number of bytes in the content, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_filesize(): number;
        /**
         * Gets the #GDataMediaContent:height property.
         * @returns the content's height in pixels, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_height(): number;
        /**
         * Gets the #GDataMediaContent:medium property.
         * @returns the type of the content, or %GDATA_MEDIA_UNKNOWN
         */
        get_medium(): MediaMedium;
        /**
         * Gets the #GDataMediaContent:uri property.
         * @returns the content's URI
         */
        get_uri(): string;
        /**
         * Gets the #GDataMediaContent:width property.
         * @returns the content's width in pixels, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_width(): number;
    }

    module MediaCredit {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataMediaCredit structure are private and should never be accessed directly.
     */
    class MediaCredit extends Parsable {
        // Own properties of GData-0.0.MediaCredit

        /**
         * The credited entity's name.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly credit: string;
        /**
         * The role the credited entity played in the production of the media.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly role: string;
        /**
         * A URI that identifies the role scheme.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly scheme: string;

        // Owm methods of GData-0.0.MediaCredit

        /**
         * Gets the #GDataMediaCredit:credit property.
         * @returns the name of the credited entity
         */
        get_credit(): string;
        /**
         * Gets the #GDataMediaCredit:role property.
         * @returns the credited entity's role, or %NULL
         */
        get_role(): string;
        /**
         * Gets the #GDataMediaCredit:scheme property.
         * @returns the credit's role scheme, or %NULL
         */
        get_scheme(): string;
    }

    module MediaThumbnail {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataMediaThumbnail structure are private and should never be accessed directly.
     */
    class MediaThumbnail extends Parsable {
        // Own properties of GData-0.0.MediaThumbnail

        /**
         * The height of the thumbnail, in pixels.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly height: number;
        /**
         * The time offset of the thumbnail in relation to the media object, in milliseconds.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly time: number;
        /**
         * The URI of the thumbnail.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly uri: string;
        /**
         * The width of the thumbnail, in pixels.
         *
         * For more information, see the &lt;ulink type="http" url="http://video.search.yahoo.com/mrss"&gt;Media RSS specification&lt;/ulink&gt;.
         */
        readonly width: number;

        // Owm methods of GData-0.0.MediaThumbnail

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
         * @returns a #GDataDownloadStream to download the thumbnail with, or %NULL; unref with g_object_unref()
         */
        download(service: Service, cancellable?: Gio.Cancellable | null): DownloadStream;
        /**
         * Gets the #GDataMediaThumbnail:height property.
         * @returns the thumbnail's height in pixels, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_height(): number;
        /**
         * Gets the #GDataMediaThumbnail:time property.
         * @returns the thumbnail's time offset in the media, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_time(): number;
        /**
         * Gets the #GDataMediaThumbnail:uri property.
         * @returns the thumbnail's URI
         */
        get_uri(): string;
        /**
         * Gets the #GDataMediaThumbnail:width property.
         * @returns the thumbnail's width in pixels, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_width(): number;
    }

    module OAuth1Authorizer {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataOAuth1Authorizer structure are private and should never be accessed directly.
     */
    class OAuth1Authorizer extends GObject.Object {
        // Own properties of GData-0.0.OAuth1Authorizer

        /**
         * The human-readable, translated application name for the client, to be presented to the user on the authentication page at the URI
         * returned by gdata_oauth1_authorizer_request_authentication_uri().
         *
         * If %NULL is provided in the constructor to #GDataOAuth1Authorizer, the value returned by g_get_application_name() will be used as a
         * fallback. Note that this may also be %NULL: in this case, the authentication page will use the application name “anonymous”.
         */
        application_name: string;
        /**
         * The human-readable, translated application name for the client, to be presented to the user on the authentication page at the URI
         * returned by gdata_oauth1_authorizer_request_authentication_uri().
         *
         * If %NULL is provided in the constructor to #GDataOAuth1Authorizer, the value returned by g_get_application_name() will be used as a
         * fallback. Note that this may also be %NULL: in this case, the authentication page will use the application name “anonymous”.
         */
        applicationName: string;
        /**
         * The locale to use for network requests, in Unix locale format. (e.g. "en_GB", "cs", "de_DE".) Use %NULL for the default "C" locale
         * (typically "en_US").
         *
         * This locale will be used by the server-side software to localise the authentication and authorization pages at the URI returned by
         * gdata_oauth1_authorizer_request_authentication_uri().
         *
         * The server-side behaviour is undefined if it doesn't support a given locale.
         */
        locale: string;
        /**
         * The #GProxyResolver used to determine a proxy URI.  Setting this will clear the #GDataOAuth1Authorizer:proxy-uri property.
         */
        proxy_resolver: Gio.ProxyResolver;
        /**
         * The #GProxyResolver used to determine a proxy URI.  Setting this will clear the #GDataOAuth1Authorizer:proxy-uri property.
         */
        proxyResolver: Gio.ProxyResolver;
        /**
         * The proxy URI used internally for all network requests.
         */
        proxy_uri: Soup.URI;
        /**
         * The proxy URI used internally for all network requests.
         */
        proxyUri: Soup.URI;
        /**
         * A timeout, in seconds, for network operations. If the timeout is exceeded, the operation will be cancelled and
         * %GDATA_SERVICE_ERROR_NETWORK_ERROR will be returned.
         *
         * If the timeout is &lt;code class="literal"&gt;0&lt;/code&gt;, operations will never time out.
         */
        timeout: number;

        // Constructors of GData-0.0.OAuth1Authorizer

        static ['new'](application_name: string | null, service_type: GObject.GType): OAuth1Authorizer;

        static new_for_authorization_domains(
            application_name: string | null,
            authorization_domains: AuthorizationDomain[],
        ): OAuth1Authorizer;

        // Owm methods of GData-0.0.OAuth1Authorizer

        /**
         * Returns the application name being used on the authentication page at the URI returned by gdata_oauth1_authorizer_request_authentication_uri();
         * i.e. the value of #GDataOAuth1Authorizer:application-name.
         * @returns the application name, or %NULL if one isn't set
         */
        get_application_name(): string | null;
        /**
         * Returns the locale currently being used for network requests, or %NULL if the locale is the default.
         * @returns the current locale
         */
        get_locale(): string | null;
        /**
         * Gets the #GProxyResolver on the #GDataOAuth1Authorizer's #SoupSession.
         * @returns a #GProxyResolver, or %NULL
         */
        get_proxy_resolver(): Gio.ProxyResolver | null;
        /**
         * Gets the proxy URI on the #GDataOAuth1Authorizer's #SoupSession.
         * @returns the proxy URI, or %NULL; free with soup_uri_free()
         */
        get_proxy_uri(): Soup.URI | null;
        /**
         * Gets the #GDataOAuth1Authorizer:timeout property; the network timeout, in seconds.
         * @returns the timeout, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_timeout(): number;
        /**
         * Requests a fresh unauthenticated token from the Google accounts service and builds and returns the URI of an authentication page for that token.
         * This should then be presented to the user (e.g. in an embedded or stand alone web browser). The authentication page will ask the user to log in
         * using their Google account, then ask them to grant access to the #GDataAuthorizationDomains passed to the constructor of the
         * #GDataOAuth1Authorizer. If the user grants access, they will be given a verifier, which can then be passed to
         * gdata_oauth1_authorizer_request_authorization() (along with the `token` and `token_secret` values returned by this method) to authorize the token.
         *
         * This method can fail if the server returns an error, but this is unlikely. If it does happen, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR will be
         * raised, `token` and `token_secret` will be set to %NULL and %NULL will be returned.
         *
         * This method implements &lt;ulink type="http" url="http://tools.ietf.org/html/rfc5849#section-2.1"&gt;Section 2.1&lt;/ulink&gt; and
         * &lt;ulink type="http" url="http://tools.ietf.org/html/rfc5849#section-2.2"&gt;Section 2.2&lt;/ulink&gt; of the
         * &lt;ulink type="http" url="http://tools.ietf.org/html/rfc5849"&gt;OAuth 1.0 protocol&lt;/ulink&gt;.
         *
         * When freeing `token_secret,` it's advisable to set it to all zeros first, to reduce the chance of the sensitive token being recoverable from the
         * free memory pool and (accidentally) leaked by a different part of the process. This can be achieved with the following code:
         *
         * ```
         * if (token_secret != NULL) {
         * 	memset (token_secret, 0, strlen (token_secret));
         * 	g_free (token_secret);
         * }
         * ```
         *
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the URI of an authentication page for the user to use; free with g_free()
         */
        request_authentication_uri(cancellable?: Gio.Cancellable | null): string;
        /**
         * Requests a fresh unauthenticated token from the Google accounts service and builds and returns the URI of an authentication page for that token.
         * `self` is reffed when this method is called, so can safely be unreffed after this method returns.
         *
         * For more details, see gdata_oauth1_authorizer_request_authentication_uri(), which is the synchronous version of this method.
         *
         * When the operation is finished, `callback` will be called. You can then call gdata_oauth1_authorizer_request_authentication_uri_finish() to get the
         * results of the operation.
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when building the URI is finished
         */
        request_authentication_uri_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous authentication URI building operation started with gdata_oauth1_authorizer_request_authentication_uri_async().
         *
         * This method can fail if the server has returned an error, but this is unlikely. If it does happen, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR will be
         * raised, `token` and `token_secret` will be set to %NULL and %NULL will be returned.
         *
         * When freeing `token_secret,` it's advisable to set it to all zeros first, to reduce the chance of the sensitive token being recoverable from the
         * free memory pool and (accidentally) leaked by a different part of the process. This can be achieved with the following code:
         *
         * ```
         * if (token_secret != NULL) {
         * 	memset (token_secret, 0, strlen (token_secret));
         * 	g_free (token_secret);
         * }
         * ```
         *
         * @param async_result a #GAsyncResult
         * @returns the URI of an authentication page for the user to use; free with g_free()
         */
        request_authentication_uri_finish(async_result: Gio.AsyncResult): string;
        /**
         * Requests authorization of the given request `token` from the Google accounts service using the given `verifier` as entered by the user from the
         * authentication page at the URI returned by gdata_oauth1_authorizer_request_authentication_uri(). `token` and `token_secret` must be the same values
         * as were returned by gdata_oauth1_authorizer_request_authentication_uri() if it was successful.
         *
         * If the verifier is valid (i.e. the user granted access to the application and the Google accounts service has no reason to distrust the client),
         * %TRUE will be returned and any operations performed from that point onwards on #GDataServices using this #GDataAuthorizer will be
         * authorized.
         *
         * If the user denies access to the application or the Google accounts service distrusts it, a bogus verifier could be returned. In this case, %FALSE
         * will be returned and a %GDATA_SERVICE_ERROR_FORBIDDEN error will be raised.
         *
         * Note that if the user denies access to the application, it may be the case that they have no verifier to enter. In this case, the client can simply
         * not call this method. The #GDataOAuth1Authorizer stores no state for authentication operations which have succeeded in calling
         * gdata_oauth1_authorizer_request_authentication_uri() but not yet successfully called gdata_oauth1_authorizer_request_authorization().
         *
         * This method implements &lt;ulink type="http" url="http://tools.ietf.org/html/rfc5849#section-2.3"&gt;Section 2.3&lt;/ulink&gt; of the
         * &lt;ulink type="http" url="http://tools.ietf.org/html/rfc5849"&gt;OAuth 1.0 protocol&lt;/ulink&gt;.
         * @param token the request token returned by gdata_oauth1_authorizer_request_authentication_uri()
         * @param token_secret the request token secret returned by gdata_oauth1_authorizer_request_authentication_uri()
         * @param verifier the verifier entered by the user from the authentication page
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE if authorization was successful, %FALSE otherwise
         */
        request_authorization(
            token: string,
            token_secret: string,
            verifier: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Requests authorization of the given request `token` from the Google accounts service using the given `verifier` as entered by the user.
         * `self,` `token,` `token_secret` and `verifier` are reffed/copied when this method is called, so can safely be freed after this method returns.
         *
         * For more details, see gdata_oauth1_authorizer_request_authorization(), which is the synchronous version of this method.
         *
         * When the operation is finished, `callback` will be called. You can then call gdata_oauth1_authorizer_request_authorization_finish() to get the
         * results of the operation.
         * @param token the request token returned by gdata_oauth1_authorizer_request_authentication_uri()
         * @param token_secret the request token secret returned by gdata_oauth1_authorizer_request_authentication_uri()
         * @param verifier the verifier entered by the user from the authentication page
         * @param cancellable an optional #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback to call when authorization is finished
         */
        request_authorization_async(
            token: string,
            token_secret: string,
            verifier: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous authorization operation started with gdata_oauth1_authorizer_request_authorization_async().
         * @param async_result a #GAsyncResult
         * @returns %TRUE if authorization was successful, %FALSE otherwise
         */
        request_authorization_finish(async_result: Gio.AsyncResult): boolean;
        /**
         * Set the locale used for network requests to `locale,` given in standard Unix locale format. See #GDataOAuth1Authorizer:locale for more details.
         *
         * Note that while it's possible to change the locale after sending network requests (i.e. calling
         * gdata_oauth1_authorizer_request_authentication_uri() for the first time), it is unsupported, as the server-side software may behave unexpectedly.
         * The only supported use of this method is after creation of the authorizer, but before any network requests are made.
         * @param locale the new locale in Unix locale format, or %NULL for the default locale
         */
        set_locale(locale?: string | null): void;
        /**
         * Sets the #GProxyResolver on the #SoupSession used internally by the given #GDataOAuth1Authorizer.
         *
         * Setting this will clear the #GDataOAuth1Authorizer:proxy-uri property.
         * @param proxy_resolver a #GProxyResolver, or %NULL
         */
        set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void;
        /**
         * Sets the proxy URI on the #SoupSession used internally by the #GDataOAuth1Authorizer. This forces all requests through the given proxy.
         *
         * If `proxy_uri` is %NULL, no proxy will be used.
         * @param proxy_uri the proxy URI, or %NULL
         */
        set_proxy_uri(proxy_uri?: Soup.URI | null): void;
        /**
         * Sets the #GDataOAuth1Authorizer:timeout property; the network timeout, in seconds.
         *
         * If `timeout` is &lt;code class="literal"&gt;0&lt;/code&gt;, network operations will never time out.
         * @param timeout the timeout, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        set_timeout(timeout: number): void;
    }

    module OAuth2Authorizer {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataOAuth2Authorizer structure are private and should never be accessed directly.
     */
    class OAuth2Authorizer extends GObject.Object {
        // Own properties of GData-0.0.OAuth2Authorizer

        /**
         * A client ID for your application (see the
         * &lt;ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http"&gt;reference documentation&lt;/ulink&gt;).
         *
         * It is recommended that the ID is of the form
         * &lt;literal&gt;&lt;replaceable&gt;company name&lt;/replaceable&gt;-
         * &lt;replaceable&gt;application name&lt;/replaceable&gt;-
         * &lt;replaceable&gt;version ID&lt;/replaceable&gt;&lt;/literal&gt;.
         */
        client_id: string;
        /**
         * A client ID for your application (see the
         * &lt;ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http"&gt;reference documentation&lt;/ulink&gt;).
         *
         * It is recommended that the ID is of the form
         * &lt;literal&gt;&lt;replaceable&gt;company name&lt;/replaceable&gt;-
         * &lt;replaceable&gt;application name&lt;/replaceable&gt;-
         * &lt;replaceable&gt;version ID&lt;/replaceable&gt;&lt;/literal&gt;.
         */
        clientId: string;
        /**
         * Client secret provided by Google. This is unique for each application
         * and is accessible from Google’s Developer Console when registering
         * an application. It must be paired with the
         * #GDataOAuth2Authorizer:client-id.
         *
         * See the
         * &lt;ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http"&gt;reference
         * documentation&lt;/ulink&gt; for details.
         */
        client_secret: string;
        /**
         * Client secret provided by Google. This is unique for each application
         * and is accessible from Google’s Developer Console when registering
         * an application. It must be paired with the
         * #GDataOAuth2Authorizer:client-id.
         *
         * See the
         * &lt;ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http"&gt;reference
         * documentation&lt;/ulink&gt; for details.
         */
        clientSecret: string;
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
        locale: string;
        /**
         * The #GProxyResolver used to determine a proxy URI.
         */
        proxy_resolver: Gio.ProxyResolver;
        /**
         * The #GProxyResolver used to determine a proxy URI.
         */
        proxyResolver: Gio.ProxyResolver;
        /**
         * Redirect URI to send the response from the authorisation request to.
         * This must either be %GDATA_OAUTH2_REDIRECT_URI_OOB,
         * %GDATA_OAUTH2_REDIRECT_URI_OOB_AUTO, or a
         * &lt;code&gt;http://localhost&lt;/code&gt; URI with any port number (optionally)
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
         * that URI with the authorisation code appended as a &lt;code&gt;code&lt;/code&gt;
         * query parameter. If the user denies the authentication request, the
         * authentication page will redirect to that URI with
         * &lt;code&gt;error=access_denied&lt;/code&gt; appended as a query parameter.
         *
         * Note that the redirect URI used must match that registered in
         * Google’s Developer Console for your application.
         *
         * See the &lt;ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#choosingredirecturi"&gt;reference
         * documentation&lt;/ulink&gt; for details about choosing a redirect URI.
         */
        redirect_uri: string;
        /**
         * Redirect URI to send the response from the authorisation request to.
         * This must either be %GDATA_OAUTH2_REDIRECT_URI_OOB,
         * %GDATA_OAUTH2_REDIRECT_URI_OOB_AUTO, or a
         * &lt;code&gt;http://localhost&lt;/code&gt; URI with any port number (optionally)
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
         * that URI with the authorisation code appended as a &lt;code&gt;code&lt;/code&gt;
         * query parameter. If the user denies the authentication request, the
         * authentication page will redirect to that URI with
         * &lt;code&gt;error=access_denied&lt;/code&gt; appended as a query parameter.
         *
         * Note that the redirect URI used must match that registered in
         * Google’s Developer Console for your application.
         *
         * See the &lt;ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#choosingredirecturi"&gt;reference
         * documentation&lt;/ulink&gt; for details about choosing a redirect URI.
         */
        redirectUri: string;
        /**
         * The server provided refresh token, which can be stored and passed in
         * to new #GDataOAuth2Authorizer instances before calling
         * gdata_authorizer_refresh_authorization_async() to create a new
         * short-lived access token.
         *
         * The refresh token is opaque data and must not be parsed.
         */
        refresh_token: string;
        /**
         * The server provided refresh token, which can be stored and passed in
         * to new #GDataOAuth2Authorizer instances before calling
         * gdata_authorizer_refresh_authorization_async() to create a new
         * short-lived access token.
         *
         * The refresh token is opaque data and must not be parsed.
         */
        refreshToken: string;
        /**
         * A timeout, in seconds, for network operations. If the timeout is
         * exceeded, the operation will be cancelled and
         * %GDATA_SERVICE_ERROR_NETWORK_ERROR will be returned.
         *
         * If the timeout is &lt;code class="literal"&gt;0&lt;/code&gt;, operations will
         * never time out.
         */
        timeout: number;

        // Constructors of GData-0.0.OAuth2Authorizer

        static ['new'](
            client_id: string,
            client_secret: string,
            redirect_uri: string,
            service_type: GObject.GType,
        ): OAuth2Authorizer;

        static new_for_authorization_domains(
            client_id: string,
            client_secret: string,
            redirect_uri: string,
            authorization_domains: AuthorizationDomain[],
        ): OAuth2Authorizer;

        // Owm methods of GData-0.0.OAuth2Authorizer

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
         * &lt;ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2WebServer#incrementalAuth"&gt;reference
         * documentation&lt;/ulink&gt; for more details.
         * @param login_hint optional e-mail address or sub identifier for the user
         * @param include_granted_scopes %TRUE to enable incremental authorisation
         * @returns the authentication URI to open in a web browser; free with g_free()
         */
        build_authentication_uri(login_hint: string | null, include_granted_scopes: boolean): string;
        /**
         * Returns the authorizer's refresh token, #GDataOAuth2Authorizer:refresh-token,
         * as set by client code previously on the #GDataOAuth2Authorizer, or as
         * returned by the most recent authentication operation.
         * @returns the authorizer's refresh token
         */
        dup_refresh_token(): string;
        /**
         * Returns the authorizer's client ID, #GDataOAuth2Authorizer:client-id, as
         * specified on constructing the #GDataOAuth2Authorizer.
         * @returns the authorizer's client ID
         */
        get_client_id(): string;
        /**
         * Returns the authorizer's client secret, #GDataOAuth2Authorizer:client-secret,
         * as specified on constructing the #GDataOAuth2Authorizer.
         * @returns the authorizer's client secret
         */
        get_client_secret(): string;
        /**
         * Returns the locale currently being used for network requests, or %NULL if the
         * locale is the default.
         * @returns the current locale
         */
        get_locale(): string | null;
        /**
         * Gets the #GProxyResolver on the #GDataOAuth2Authorizer's #SoupSession.
         * @returns a #GProxyResolver, or %NULL
         */
        get_proxy_resolver(): Gio.ProxyResolver | null;
        /**
         * Returns the authorizer’s redirect URI, #GDataOAuth2Authorizer:redirect-uri,
         * as specified on constructing the #GDataOAuth2Authorizer.
         * @returns the authorizer’s redirect URI
         */
        get_redirect_uri(): string;
        /**
         * Gets the #GDataOAuth2Authorizer:timeout property; the network timeout, in
         * seconds.
         * @returns the timeout, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_timeout(): number;
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
         * @returns %TRUE on success, %FALSE otherwise
         */
        request_authorization(authorization_code: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronous version of gdata_oauth2_authorizer_request_authorization().
         * @param authorization_code code returned from the authentication page
         * @param cancellable an optional #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback to call when authorization is finished
         */
        request_authorization_async(
            authorization_code: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous authorization operation started with
         * gdata_oauth2_authorizer_request_authorization_async().
         * @param async_result a #GAsyncResult
         * @returns %TRUE if authorization was successful, %FALSE otherwise
         */
        request_authorization_finish(async_result: Gio.AsyncResult): boolean;
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
        set_locale(locale?: string | null): void;
        /**
         * Sets the #GProxyResolver on the #SoupSession used internally by the given
         * #GDataOAuth2Authorizer.
         * @param proxy_resolver a #GProxyResolver, or %NULL
         */
        set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void;
        /**
         * Sets the authorizer's refresh token, #GDataOAuth2Authorizer:refresh-token.
         * This is used to periodically refresh the access token. Set it to %NULL to
         * clear the current authentication from the authorizer.
         * @param refresh_token the new refresh token, or %NULL to clear   authorization
         */
        set_refresh_token(refresh_token?: string | null): void;
        /**
         * Sets the #GDataOAuth2Authorizer:timeout property; the network timeout, in
         * seconds.
         *
         * If `timeout` is &lt;code class="literal"&gt;0&lt;/code&gt;, network operations will never
         * time out.
         * @param timeout the timeout, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        set_timeout(timeout: number): void;
    }

    module Parsable {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataParsable structure are private and should never be accessed directly.
     */
    abstract class Parsable extends GObject.Object {
        // Own properties of GData-0.0.Parsable

        /**
         * Specifies whether the object was constructed by parsing XML or manually.
         */
        constructed_from_xml: boolean;
        /**
         * Specifies whether the object was constructed by parsing XML or manually.
         */
        constructedFromXml: boolean;

        // Constructors of GData-0.0.Parsable

        static new_from_json(parsable_type: GObject.GType, json: string, length: number): Parsable;

        static new_from_xml(parsable_type: GObject.GType, xml: string, length: number): Parsable;

        // Owm methods of GData-0.0.Parsable

        /**
         * Returns the content type upon which the #GDataParsable is built. For example, `application/atom+xml` or `application/json`.
         * @returns the parsable's content type
         */
        get_content_type(): string;
        /**
         * Builds a JSON representation of the #GDataParsable in its current state, such that it could be inserted on the server. The JSON
         * is valid for stand-alone use.
         * @returns the object's JSON; free with g_free()
         */
        get_json(): string;
        /**
         * Builds an XML representation of the #GDataParsable in its current state, such that it could be inserted on the server. The XML is guaranteed
         * to have all its namespaces declared properly in a self-contained fashion, and is valid for stand-alone use.
         * @returns the object's XML; free with g_free()
         */
        get_xml(): string;
    }

    module PicasaWebAlbum {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataPicasaWebAlbum structure are private and should never be accessed directly.
     */
    class PicasaWebAlbum extends Entry {
        // Own properties of GData-0.0.PicasaWebAlbum

        /**
         * The ID of the album. This is a substring of the ID returned by gdata_entry_get_id() for #GDataPicasaWebAlbums; for example,
         * if gdata_entry_get_id() returned "http://picasaweb.google.com/data/entry/user/libgdata.picasaweb/albumid/5328889949261497249" for a
         * particular #GDataPicasaWebAlbum, the #GDataPicasaWebAlbum:album-id property would be "5328889949261497249".
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_id"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        album_id: string;
        /**
         * The ID of the album. This is a substring of the ID returned by gdata_entry_get_id() for #GDataPicasaWebAlbums; for example,
         * if gdata_entry_get_id() returned "http://picasaweb.google.com/data/entry/user/libgdata.picasaweb/albumid/5328889949261497249" for a
         * particular #GDataPicasaWebAlbum, the #GDataPicasaWebAlbum:album-id property would be "5328889949261497249".
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_id"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        albumId: string;
        /**
         * The number of bytes consumed by this album and its contents. Note that this is only set if the authenticated user is the owner of the
         * album; it's otherwise &lt;code class="literal"&gt;-1&lt;/code&gt;.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_bytesUsed"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly bytes_used: number;
        /**
         * The number of bytes consumed by this album and its contents. Note that this is only set if the authenticated user is the owner of the
         * album; it's otherwise &lt;code class="literal"&gt;-1&lt;/code&gt;.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_bytesUsed"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly bytesUsed: number;
        /**
         * The number of comments on the album.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_commentCount"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly comment_count: number;
        /**
         * The number of comments on the album.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_commentCount"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly commentCount: number;
        /**
         * The time this album was last edited. If the album has not been edited yet, the content indicates the time it was created.
         *
         * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited"&gt;
         * Atom Publishing Protocol specification&lt;/ulink&gt;.
         */
        readonly edited: number;
        is_commenting_enabled: boolean;
        isCommentingEnabled: boolean;
        /**
         * The location as a latitude coordinate associated with this album. Valid latitudes range from &lt;code class="literal"&gt;-90.0&lt;/code&gt;
         * to &lt;code class="literal"&gt;90.0&lt;/code&gt; inclusive.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where"&gt;
         * GeoRSS specification&lt;/ulink&gt;.
         */
        latitude: number;
        /**
         * The user-specified location associated with the album. A place name.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_location"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        location: string;
        /**
         * The location as a longitude coordinate associated with this album. Valid longitudes range from &lt;code class="literal"&gt;-180.0&lt;/code&gt;
         * to &lt;code class="literal"&gt;180.0&lt;/code&gt; inclusive.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where"&gt;
         * GeoRSS specification&lt;/ulink&gt;.
         */
        longitude: number;
        /**
         * The user's nickname. This is a user-specified value that should be used when referring to the user by name.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_nickname"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly nickname: string;
        /**
         * The number of photos and videos in the album.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_numphotos"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly num_photos: number;
        /**
         * The number of photos and videos in the album.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_numphotos"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly numPhotos: number;
        /**
         * The number of photos and videos that can still be uploaded to this album.
         * This doesn't account for quota, just a hardcoded maximum number per album set by Google.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_numphotosremaining"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly num_photos_remaining: number;
        /**
         * The number of photos and videos that can still be uploaded to this album.
         * This doesn't account for quota, just a hardcoded maximum number per album set by Google.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_numphotosremaining"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly numPhotosRemaining: number;
        /**
         * A %NULL-terminated array of tags associated with the album; all the tags associated with the individual photos in the album.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_keywords"&gt;
         * Media RSS specification&lt;/ulink&gt;.
         */
        tags: string[];
        /**
         * The timestamp of when the album occurred, settable by the user. This a UNIX timestamp in milliseconds (not seconds) since the epoch.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_timestamp"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        timestamp: number;
        /**
         * The username of the album owner.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_user"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly user: string;
        /**
         * The visibility (or access rights) of the album.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_access"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        visibility: PicasaWebVisibility;

        // Constructors of GData-0.0.PicasaWebAlbum

        static ['new'](id?: string | null): PicasaWebAlbum;

        // Owm methods of GData-0.0.PicasaWebAlbum

        /**
         * Gets the #GDataPicasaWebAlbum:bytes-used property. It will return &lt;code class="literal"&gt;-1&lt;/code&gt; if the current authenticated
         * user is not the owner of the album.
         * @returns the number of bytes used by the album and its contents, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_bytes_used(): number;
        /**
         * Gets the #GDataPicasaWebAlbum:comment-count property.
         * @returns the number of comments on the album
         */
        get_comment_count(): number;
        /**
         * Returns a list of media content, such as the cover image for the album.
         * @returns a #GList of #GDataMediaContent items
         */
        get_contents(): MediaContent[];
        /**
         * Gets the #GDataPicasaWebAlbum:latitude and #GDataPicasaWebAlbum:longitude properties,
         * setting the out parameters to them. If either latitude or longitude is %NULL, that parameter will not be set.
         * If the coordinates are unset, `latitude` and `longitude` will be set to %G_MAXDOUBLE.
         */
        get_coordinates(): void;
        /**
         * Gets the #GDataPicasaWebAlbum:edited property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the time the album was last edited, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_edited(): number;
        /**
         * Gets the #GDataPicasaWebAlbum:album-id property.
         * @returns the album's ID
         */
        get_id(): string;
        /**
         * Gets the #GDataPicasaWebAlbum:location property.
         * @returns the album's location, or %NULL
         */
        get_location(): string;
        /**
         * Gets the #GDataPicasaWebAlbum:nickname property.
         * @returns the album owner's nickname
         */
        get_nickname(): string;
        /**
         * Gets the #GDataPicasaWebAlbum:num-photos property.
         * @returns the number of photos currently in the album
         */
        get_num_photos(): number;
        /**
         * Gets the #GDataPicasaWebAlbum:num-photos-remaining property.
         * @returns the number of photos that can still be uploaded to the album
         */
        get_num_photos_remaining(): number;
        /**
         * Gets the #GDataPicasaWebAlbum:tags property.
         * @returns a %NULL-terminated array of tags associated with all the photos in the album, or %NULL
         */
        get_tags(): string[];
        /**
         * Returns a list of thumbnails, often at different sizes, for this album.
         * @returns a #GList of #GDataMediaThumbnails, or %NULL
         */
        get_thumbnails(): MediaThumbnail[];
        /**
         * Gets the #GDataPicasaWebAlbum:timestamp property. This value usually holds either the date that best corresponds to the album of photos, or to the
         * day it was uploaded. It's a UNIX timestamp in milliseconds (not seconds) since the epoch. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt;
         * will be returned.
         * @returns the UNIX timestamp for the timestamp property in milliseconds, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_timestamp(): number;
        /**
         * Gets the #GDataPicasaWebAlbum:user property.
         * @returns the album owner's username
         */
        get_user(): string;
        /**
         * Gets the #GDataPicasaWebAlbum:visibility property.
         * @returns the album's visibility level
         */
        get_visibility(): PicasaWebVisibility;
        /**
         * Sets the #GDataPicasaWebAlbum:latitude and #GDataPicasaWebAlbum:longitude properties to
         * `latitude` and `longitude` respectively.
         * @param latitude the album's new latitude coordinate, or %G_MAXDOUBLE
         * @param longitude the album's new longitude coordinate, or %G_MAXDOUBLE
         */
        set_coordinates(latitude: number, longitude: number): void;
        /**
         * Sets the #GDataPicasaWebAlbum:is-commenting-enabled property to `is_commenting_enabled`.
         * @param is_commenting_enabled %TRUE if commenting should be enabled for the album, %FALSE otherwise
         */
        set_is_commenting_enabled(is_commenting_enabled: boolean): void;
        /**
         * Sets the #GDataPicasaWebAlbum:location property to `location`.
         *
         * Set `location` to %NULL to unset the property.
         * @param location the new album location, or %NULL
         */
        set_location(location?: string | null): void;
        /**
         * Sets the #GDataPicasaWebAlbum:tags property to `tags`.
         *
         * Set `tags` to %NULL to unset the album's tag list.
         * @param tags the new %NULL-terminated array of tags, or %NULL
         */
        set_tags(tags?: string[] | null): void;
        /**
         * Sets the #GDataPicasaWebAlbum:timestamp property from `timestamp`. This should be a UNIX timestamp in milliseconds (not seconds) since the epoch.
         *
         * Set `timestamp` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property.
         * @param timestamp a UNIX timestamp, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_timestamp(timestamp: number): void;
        /**
         * Sets the #GDataPicasaWebAlbum:visibility property to `visibility`.
         * @param visibility the new album visibility level
         */
        set_visibility(visibility: PicasaWebVisibility): void;
    }

    module PicasaWebComment {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataPicasaWebComment structure are private and should never be accessed directly.
     */
    class PicasaWebComment extends Comment {
        // Constructors of GData-0.0.PicasaWebComment

        static ['new'](id: string): PicasaWebComment;
    }

    module PicasaWebFeed {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataPicasaWebFeed structure are private and should never be accessed directly.
     */
    class PicasaWebFeed extends Feed {}

    module PicasaWebFile {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataPicasaWebFile structure are private and should never be accessed directly.
     */
    class PicasaWebFile extends Entry {
        // Own properties of GData-0.0.PicasaWebFile

        /**
         * The ID for the file's album. This is in the same form as returned by gdata_picasaweb_album_get_id().
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_albumid"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        album_id: string;
        /**
         * The ID for the file's album. This is in the same form as returned by gdata_picasaweb_album_get_id().
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_albumid"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        albumId: string;
        /**
         * The file's descriptive caption.
         */
        caption: string;
        /**
         * A checksum of the file, useful for duplicate detection.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_checksum"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        checksum: string;
        /**
         * The number of comments on the file.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_commentCount"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly comment_count: number;
        /**
         * The number of comments on the file.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_commentCount"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly commentCount: number;
        /**
         * The nickname of the user credited with this file.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_credit"&gt;Media RSS
         * specification&lt;/ulink&gt;.
         */
        readonly credit: string;
        /**
         * The distance to the subject reported in the image's EXIF.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference"&gt;
         * EXIF element reference&lt;/ulink&gt;.
         */
        readonly distance: number;
        /**
         * The time this file was last edited. If the file has not been edited yet, the content indicates the time it was created.
         *
         * For more information, see the &lt;ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited"&gt;
         * Atom Publishing Protocol specification&lt;/ulink&gt;.
         */
        readonly edited: number;
        /**
         * The exposure time.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference"&gt;
         * EXIF element reference&lt;/ulink&gt;.
         */
        readonly exposure: number;
        /**
         * The ID of the file. This is a substring of the ID returned by gdata_entry_get_id() for #GDataPicasaWebFiles; for example,
         * if gdata_entry_get_id() returned
         * "http://picasaweb.google.com/data/entry/user/libgdata.picasaweb/albumid/5328889949261497249/photoid/5328890138794566386" for a
         * particular #GDataPicasaWebFile, the #GDataPicasaWebFile:file-id property would be "5328890138794566386".
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_id"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        file_id: string;
        /**
         * The ID of the file. This is a substring of the ID returned by gdata_entry_get_id() for #GDataPicasaWebFiles; for example,
         * if gdata_entry_get_id() returned
         * "http://picasaweb.google.com/data/entry/user/libgdata.picasaweb/albumid/5328889949261497249/photoid/5328890138794566386" for a
         * particular #GDataPicasaWebFile, the #GDataPicasaWebFile:file-id property would be "5328890138794566386".
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_id"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        fileId: string;
        /**
         * Indicates whether the flash was used.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference"&gt;
         * EXIF element reference&lt;/ulink&gt;.
         */
        readonly flash: boolean;
        /**
         * The focal length for the shot.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference"&gt;
         * EXIF element reference&lt;/ulink&gt;.
         */
        readonly focal_length: number;
        /**
         * The focal length for the shot.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference"&gt;
         * EXIF element reference&lt;/ulink&gt;.
         */
        readonly focalLength: number;
        /**
         * The F-stop value.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference"&gt;
         * EXIF element reference&lt;/ulink&gt;.
         */
        readonly fstop: number;
        /**
         * The height of the photo or video, in pixels.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_height"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly height: number;
        /**
         * An unique ID for the image found in the EXIF.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference"&gt;
         * EXIF element reference&lt;/ulink&gt;.
         */
        readonly image_unique_id: string;
        /**
         * An unique ID for the image found in the EXIF.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference"&gt;
         * EXIF element reference&lt;/ulink&gt;.
         */
        readonly imageUniqueId: string;
        /**
         * Whether commenting is enabled for this file.
         */
        is_commenting_enabled: boolean;
        /**
         * Whether commenting is enabled for this file.
         */
        isCommentingEnabled: boolean;
        /**
         * The ISO speed.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference"&gt;
         * EXIF element reference&lt;/ulink&gt; and ISO 5800:1987.
         */
        readonly iso: number;
        /**
         * The location as a latitude coordinate associated with this file. Valid latitudes range from &lt;code class="literal"&gt;-90.0&lt;/code&gt;
         * to &lt;code class="literal"&gt;90.0&lt;/code&gt; inclusive.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where"&gt;
         * GeoRSS specification&lt;/ulink&gt;.
         */
        latitude: number;
        /**
         * The location as a longitude coordinate associated with this file. Valid longitudes range from &lt;code class="literal"&gt;-180.0&lt;/code&gt;
         * to &lt;code class="literal"&gt;180.0&lt;/code&gt; inclusive.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where"&gt;
         * GeoRSS specification&lt;/ulink&gt;.
         */
        longitude: number;
        /**
         * The name of the manufacturer of the camera.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference"&gt;
         * EXIF element reference&lt;/ulink&gt;.
         */
        readonly make: string;
        /**
         * The model of the camera.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference"&gt;
         * EXIF element reference&lt;/ulink&gt;.
         */
        readonly model: string;
        /**
         * The rotation of the photo, in degrees. This will only be non-zero for files which are pending rotation, and haven't yet been
         * permanently modified. For files which have already been rotated, this will be &lt;code class="literal"&gt;0&lt;/code&gt;.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_rotation"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        rotation: number;
        /**
         * The size of the file, in bytes.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_size"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly size: number;
        /**
         * A %NULL-terminated array of tags associated with the file.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_keywords"&gt;
         * Media RSS specification&lt;/ulink&gt;.
         */
        tags: string[];
        /**
         * The time the file was purportedly taken. This a UNIX timestamp in milliseconds (not seconds) since the epoch.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_timestamp"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        timestamp: number;
        /**
         * The version number of the file. Version numbers are based on modification time, so they don't increment linearly.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_version"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        version: string;
        /**
         * The status of the file, if it is a video. For example: %GDATA_PICASAWEB_VIDEO_STATUS_PENDING or %GDATA_PICASAWEB_VIDEO_STATUS_FAILED.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_videostatus"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly video_status: string;
        /**
         * The status of the file, if it is a video. For example: %GDATA_PICASAWEB_VIDEO_STATUS_PENDING or %GDATA_PICASAWEB_VIDEO_STATUS_FAILED.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_videostatus"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly videoStatus: string;
        /**
         * The width of the photo or video, in pixels.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_width"&gt;
         * gphoto specification&lt;/ulink&gt;.
         */
        readonly width: number;

        // Constructors of GData-0.0.PicasaWebFile

        static ['new'](id?: string | null): PicasaWebFile;

        // Owm methods of GData-0.0.PicasaWebFile

        /**
         * Gets the #GDataPicasaWebFile:album-id property. This is in the same form as returned by gdata_picasaweb_album_get_id().
         * @returns the ID of the album containing the #GDataPicasaWebFile
         */
        get_album_id(): string;
        /**
         * Gets the #GDataPicasaWebFile:caption property.
         * @returns the file's descriptive caption, or %NULL
         */
        get_caption(): string;
        /**
         * Gets the #GDataPicasaWebFile:checksum property.
         * @returns the checksum assigned to this file, or %NULL
         */
        get_checksum(): string;
        /**
         * Gets the #GDataPicasaWebFile:comment-count property.
         * @returns the number of comments on the file
         */
        get_comment_count(): number;
        /**
         * Returns a list of media content, e.g. the actual photo or video.
         * @returns a #GList of #GDataMediaContent items
         */
        get_contents(): MediaContent[];
        /**
         * Gets the #GDataPicasaWebFile:latitude and #GDataPicasaWebFile:longitude properties, setting the out parameters to them.
         * If either latitude or longitude is %NULL, that parameter will not be set. If the coordinates are unset,
         * `latitude` and `longitude` will be set to %G_MAXDOUBLE.
         */
        get_coordinates(): void;
        /**
         * Gets the #GDataPicasaWebFile:credit property.
         * @returns the nickname of the user credited with this file
         */
        get_credit(): string;
        /**
         * Gets the #GDataPicasaWebFile:distance property.
         * @returns the distance recorded in the photo's EXIF, or &lt;code class="literal"&gt;-1&lt;/code&gt; if unknown
         */
        get_distance(): number;
        /**
         * Gets the #GDataPicasaWebFile:edited property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the time the file was last edited, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_edited(): number;
        /**
         * Gets the #GDataPicasaWebFile:exposure property.
         * @returns the exposure value, or &lt;code class="literal"&gt;0&lt;/code&gt; if unknown
         */
        get_exposure(): number;
        /**
         * Gets the #GDataPicasaWebFile:flash property.
         * @returns %TRUE if flash was used, %FALSE otherwise
         */
        get_flash(): boolean;
        /**
         * Gets the #GDataPicasaWebFile:focal-length property.
         * @returns the focal-length value, or &lt;code class="literal"&gt;-1&lt;/code&gt; if unknown
         */
        get_focal_length(): number;
        /**
         * Gets the #GDataPicasaWebFile:fstop property.
         * @returns the F-stop value, or &lt;code class="literal"&gt;0&lt;/code&gt; if unknown
         */
        get_fstop(): number;
        /**
         * Gets the #GDataPicasaWebFile:height property.
         * @returns the height of the image or video, in pixels
         */
        get_height(): number;
        /**
         * Gets the #GDataPicasaWebFile:file-id property.
         * @returns the file's ID
         */
        get_id(): string;
        /**
         * Gets the #GDataPicasaWebFile:image-unique-id property.
         * @returns the photo's unique EXIF identifier, or %NULL
         */
        get_image_unique_id(): string;
        /**
         * Gets the #GDataPicasaWebFile:iso property.
         * @returns the ISO speed, or &lt;code class="literal"&gt;-1&lt;/code&gt; if unknown
         */
        get_iso(): number;
        /**
         * Gets the #GDataPicasaWebFile:make property.
         * @returns the name of the manufacturer of the camera, or %NULL if unknown
         */
        get_make(): string;
        /**
         * Gets the #GDataPicasaWebFile:model property.
         * @returns the model name of the camera, or %NULL if unknown
         */
        get_model(): string;
        /**
         * Gets the #GDataPicasaWebFile:rotation property.
         * @returns the image's rotation, in degrees
         */
        get_rotation(): number;
        /**
         * Gets the #GDataPicasaWebFile:size property.
         * @returns the size of the file, in bytes
         */
        get_size(): number;
        /**
         * Gets the #GDataPicasaWebFile:tags property.
         * @returns a %NULL-terminated array of tags associated with the file, or %NULL
         */
        get_tags(): string[];
        /**
         * Returns a list of thumbnails, often at different sizes, for this
         * file.  Currently, PicasaWeb usually returns three thumbnails, with
         * widths in pixels of 72, 144, and 288.  However, the thumbnail will
         * not be larger than the actual image, so thumbnails may be smaller
         * than the widths listed above.
         * @returns a #GList of #GDataMediaThumbnails, or %NULL
         */
        get_thumbnails(): MediaThumbnail[];
        /**
         * Gets the #GDataPicasaWebFile:timestamp property. It's a UNIX timestamp in milliseconds (not seconds) since the epoch. If the property is unset,
         * &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the timestamp property in milliseconds, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_timestamp(): number;
        /**
         * Gets the #GDataPicasaWebFile:version property.
         * @returns the file's version number, or %NULL
         */
        get_version(): string;
        /**
         * Gets the #GDataPicasaWebFile:video-status property.
         * @returns the status of this video ("pending", "ready", "final" or "failed"), or %NULL
         */
        get_video_status(): string;
        /**
         * Gets the #GDataPicasaWebFile:width property.
         * @returns the width of the image or video, in pixels
         */
        get_width(): number;
        /**
         * Sets the #GDataPicasaWebFile:album-id property, effectively moving the file to the album.
         * @param album_id the ID of the new album for this file
         */
        set_album_id(album_id: string): void;
        /**
         * Sets the #GDataPicasaWebFile:caption property to `caption`.
         *
         * Set `caption` to %NULL to unset the file's caption.
         * @param caption the file's new caption, or %NULL
         */
        set_caption(caption?: string | null): void;
        /**
         * Sets the #GDataPicasaWebFile:checksum property to `checksum`.
         *
         * Set `checksum` to %NULL to unset the property.
         * @param checksum the new checksum for this file, or %NULL
         */
        set_checksum(checksum?: string | null): void;
        /**
         * Sets the #GDataPicasaWebFile:latitude and #GDataPicasaWebFile:longitude properties to
         * `latitude` and `longitude` respectively.
         * @param latitude the file's new latitude coordinate, or %G_MAXDOUBLE
         * @param longitude the file's new longitude coordinate, or %G_MAXDOUBLE
         */
        set_coordinates(latitude: number, longitude: number): void;
        /**
         * Sets the #GDataPicasaWebFile:is-commenting-enabled property to `is_commenting_enabled`.
         * @param is_commenting_enabled %TRUE if commenting should be enabled for the file, %FALSE otherwise
         */
        set_is_commenting_enabled(is_commenting_enabled: boolean): void;
        /**
         * Sets the #GDataPicasaWebFile:rotation property to `rotation`.
         *
         * The rotation is absolute, rather than cumulative, through successive calls to gdata_picasaweb_file_set_rotation(),
         * so calling it with 90° then 20° will result in a final rotation of 20°.
         * @param rotation the new rotation for the image, in degrees
         */
        set_rotation(rotation: number): void;
        /**
         * Sets the #GDataPicasaWebFile:tags property to `tags`.
         *
         * Set `tags` to %NULL to unset the property.
         * @param tags a new %NULL-terminated array of tags, or %NULL
         */
        set_tags(tags?: string[] | null): void;
        /**
         * Sets the #GDataPicasaWebFile:timestamp property from `timestamp`. This should be a UNIX timestamp in milliseconds (not seconds) since the epoch. If
         * `timestamp` is &lt;code class="literal"&gt;-1&lt;/code&gt;, the property will be unset.
         * @param timestamp a UNIX timestamp, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_timestamp(timestamp: number): void;
    }

    module PicasaWebQuery {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataPicasaWebQuery structure are private and should never be accessed directly.
     */
    class PicasaWebQuery extends Query {
        // Own properties of GData-0.0.PicasaWebQuery

        /**
         * A comma-separated list of image sizes (width in pixels) to return. Only certain sizes are allowed, and whether the image should be
         * cropped or scaled can be specified; for more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Parameters"&gt;online documentation&lt;/ulink&gt;.
         */
        image_size: string;
        /**
         * A comma-separated list of image sizes (width in pixels) to return. Only certain sizes are allowed, and whether the image should be
         * cropped or scaled can be specified; for more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Parameters"&gt;online documentation&lt;/ulink&gt;.
         */
        imageSize: string;
        /**
         * A location to search for photos, e.g. "London".
         */
        location: string;
        /**
         * A tag which returned results must contain.
         */
        tag: string;
        /**
         * A comma-separated list of thumbnail widths (in pixels) to return. Only certain sizes are allowed, and whether the thumbnail should be
         * cropped or scaled can be specified; for more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Parameters"&gt;online documentation&lt;/ulink&gt;.
         */
        thumbnail_size: string;
        /**
         * A comma-separated list of thumbnail widths (in pixels) to return. Only certain sizes are allowed, and whether the thumbnail should be
         * cropped or scaled can be specified; for more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Parameters"&gt;online documentation&lt;/ulink&gt;.
         */
        thumbnailSize: string;
        /**
         * Specifies which albums should be listed, in terms of their visibility (#GDataPicasaWebAlbum:visibility).
         *
         * Set the property to &lt;code class="literal"&gt;0&lt;/code&gt; to list all albums, regardless of their visibility. Otherwise, use values
         * from #GDataPicasaWebVisibility.
         *
         * For more information, see the &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Visibility"&gt;
         * online documentation&lt;/ulink&gt;.
         */
        visibility: number;

        // Constructors of GData-0.0.PicasaWebQuery

        static ['new'](q?: string | null): PicasaWebQuery;

        static new_with_limits(q: string | null, start_index: number, max_results: number): PicasaWebQuery;

        // Owm methods of GData-0.0.PicasaWebQuery

        /**
         * Gets the latitudes and longitudes of a bounding box, inside which all the results must lie.
         */
        get_bounding_box(): void;
        /**
         * Gets the #GDataPicasaWebQuery:image-size property.
         * @returns the currently set desired image size for retrieval, or %NULL
         */
        get_image_size(): string;
        /**
         * Gets the #GDataPicasaWebQuery:location property.
         * @returns a location which returned objects must be near, or %NULL
         */
        get_location(): string;
        /**
         * Gets the #GDataPicasaWebQuery:tag property.
         * @returns a tag which retrieved objects must have, or %NULL
         */
        get_tag(): string;
        /**
         * Gets the #GDataPicasaWebQuery:thumbnail-size property.
         * @returns a comma-separated list of thumbnail sizes to retrieve, or %NULL
         */
        get_thumbnail_size(): string;
        /**
         * Gets the #GDataPicasaWebQuery:visibility property.
         * @returns the visibility of the objects to retrieve, or &lt;code class="literal"&gt;0&lt;/code&gt; to retrieve all objects
         */
        get_visibility(): PicasaWebVisibility;
        /**
         * Sets a bounding box, inside which all the returned results must lie.
         *
         * Set `north,` `east,` `south` and `west` to &lt;code class="literal"&gt;0&lt;/code&gt; to unset the property.
         * @param north latitude of the top of the box
         * @param east longitude of the right of the box
         * @param south latitude of the bottom of the box
         * @param west longitude of the left of the box
         */
        set_bounding_box(north: number, east: number, south: number, west: number): void;
        /**
         * Sets the #GDataPicasaWebQuery:image-size property to `image_size`.
         * Valid sizes are described in the
         * &lt;ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#Parameters"&gt;online documentation&lt;/ulink&gt;.
         *
         * Set `image_size` to %NULL to unset the property.
         * @param image_size the desired size of the image to be retrieved, or %NULL
         */
        set_image_size(image_size?: string | null): void;
        /**
         * Sets the #GDataPicasaWebQuery:location property to `location`.
         *
         * Set `location` to %NULL to unset the property.
         * @param location a location which returned objects must be near, or %NULL
         */
        set_location(location?: string | null): void;
        /**
         * Sets the #GDataPicasaWebQuery:tag property to `tag`.
         *
         * Set `tag` to %NULL to unset the property.
         * @param tag a tag which retrieved objects must have, or %NULL
         */
        set_tag(tag?: string | null): void;
        /**
         * Sets the #GDataPicasaWebQuery:thumbnail-size property to `thumbnail_size`.
         *
         * Set `thumbnail_size` to %NULL to unset the property.
         * @param thumbnail_size a comma-separated list of thumbnail sizes to retrieve, or %NULL
         */
        set_thumbnail_size(thumbnail_size?: string | null): void;
        /**
         * Sets the #GDataPicasaWebQuery:visibility property to `visibility`.
         * @param visibility the visibility of the objects to retrieve, or &lt;code class="literal"&gt;0&lt;/code&gt; to retrieve all objects
         */
        set_visibility(visibility: PicasaWebVisibility): void;
    }

    module PicasaWebService {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataPicasaWebService structure are private and should never be accessed directly.
     */
    class PicasaWebService extends Service {
        // Constructors of GData-0.0.PicasaWebService

        static ['new'](authorizer?: Authorizer | null): PicasaWebService;

        // Owm methods of GData-0.0.PicasaWebService

        /**
         * The primary #GDataAuthorizationDomain for interacting with PicasaWeb. This will not normally need to be used, as it's used internally
         * by the #GDataPicasaWebService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
         * does not support natively, then this domain may be needed to authorize the requests.
         *
         * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
         */
        static get_primary_authorization_domain(): AuthorizationDomain;

        // Owm methods of GData-0.0.PicasaWebService

        /**
         * Finish off a file upload operation started by gdata_picasaweb_service_upload_file(), parsing the result and returning the new #GDataPicasaWebFile.
         *
         * If an error occurred during the upload operation, it will have been returned during the operation (e.g. by g_output_stream_splice() or one
         * of the other stream methods). In such a case, %NULL will be returned but `error` will remain unset. `error` is only set in the case that the server
         * indicates that the operation was successful, but an error is encountered in parsing the result sent by the server.
         * @param upload_stream the #GDataUploadStream from the operation
         * @returns the new #GDataPicasaWebFile, or %NULL; unref with g_object_unref()
         */
        finish_file_upload(upload_stream: UploadStream): PicasaWebFile;
        /**
         * Queries the service to return the user specified by `username`.
         * @param username the username of the user whose information you wish to retrieve, or %NULL for the currently authenticated user.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a #GDataPicasaWebUser; unref with g_object_unref()
         */
        get_user(username?: string | null, cancellable?: Gio.Cancellable | null): PicasaWebUser;
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
        get_user_async(
            username?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous user retrieval operation started with gdata_picasaweb_service_get_user_async().
         * @param result a #GAsyncResult
         * @returns a #GDataPicasaWebUser; unref with g_object_unref()
         */
        get_user_finish(result: Gio.AsyncResult): PicasaWebUser;
        /**
         * Inserts a new album described by `album`. A user must be
         * authenticated to use this function.
         * @param album a #GDataPicasaWebAlbum to create on the server
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the inserted #GDataPicasaWebAlbum; unref with g_object_unref()
         */
        insert_album(album: PicasaWebAlbum, cancellable?: Gio.Cancellable | null): PicasaWebAlbum;
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
        insert_album_async(
            album: PicasaWebAlbum,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
         * @returns a #GDataFeed of query results; unref with g_object_unref()
         */
        query_all_albums(
            query?: Query | null,
            username?: string | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
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
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        query_all_albums_async(
            query?: Query | null,
            username?: string | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Queries the specified `album` for a list of the files which match the given `query`. If `album` is %NULL and a user is
         * authenticated with the service, the user's default album will be queried.
         *
         * For more details, see gdata_service_query().
         * @param album a #GDataPicasaWebAlbum from which to retrieve the files, or %NULL
         * @param query a #GDataQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @returns a #GDataFeed of query results; unref with g_object_unref()
         */
        query_files(
            album?: PicasaWebAlbum | null,
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
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
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when the query is finished
         */
        query_files_async(
            album?: PicasaWebAlbum | null,
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
         * @returns a #GDataUploadStream to write the file data to, or %NULL; unref with g_object_unref()
         */
        upload_file(
            album: PicasaWebAlbum | null,
            file_entry: PicasaWebFile,
            slug: string,
            content_type: string,
            cancellable?: Gio.Cancellable | null,
        ): UploadStream;
    }

    module PicasaWebUser {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataPicasaWebUser structure are private and should never be accessed directly.
     */
    class PicasaWebUser extends Entry {
        // Own properties of GData-0.0.PicasaWebUser

        /**
         * The maximum number of photos allowed in an album.
         * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_maxPhotosPerAlbum
         *
         * If the #GDataPicasaWebUser does not represent the currently authenticated user, this will be &lt;code class="literal"&gt;-1&lt;/code&gt;.
         */
        readonly max_photos_per_album: number;
        /**
         * The maximum number of photos allowed in an album.
         * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_maxPhotosPerAlbum
         *
         * If the #GDataPicasaWebUser does not represent the currently authenticated user, this will be &lt;code class="literal"&gt;-1&lt;/code&gt;.
         */
        readonly maxPhotosPerAlbum: number;
        /**
         * The user's nickname. This is a user-specified value that should be used when referring to the user by name.
         * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_nickname
         */
        readonly nickname: string;
        /**
         * The current amount of space, in bytes, already used by the user.
         * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_quotacurrent
         *
         * If the #GDataPicasaWebUser does not represent the currently authenticated user, this will be &lt;code class="literal"&gt;-1&lt;/code&gt;.
         */
        readonly quota_current: number;
        /**
         * The current amount of space, in bytes, already used by the user.
         * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_quotacurrent
         *
         * If the #GDataPicasaWebUser does not represent the currently authenticated user, this will be &lt;code class="literal"&gt;-1&lt;/code&gt;.
         */
        readonly quotaCurrent: number;
        /**
         * The total amount of space, in bytes, available to the user.
         * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_quotalimit
         *
         * If the #GDataPicasaWebUser does not represent the currently authenticated user, this will be &lt;code class="literal"&gt;-1&lt;/code&gt;.
         */
        readonly quota_limit: number;
        /**
         * The total amount of space, in bytes, available to the user.
         * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_quotalimit
         *
         * If the #GDataPicasaWebUser does not represent the currently authenticated user, this will be &lt;code class="literal"&gt;-1&lt;/code&gt;.
         */
        readonly quotaLimit: number;
        /**
         * The URI of a thumbnail-sized portrait of the user.
         * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_thumbnail
         */
        readonly thumbnail_uri: string;
        /**
         * The URI of a thumbnail-sized portrait of the user.
         * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_thumbnail
         */
        readonly thumbnailUri: string;
        /**
         * The username of the user, as seen in feed URLs.
         * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_user
         */
        readonly user: string;

        // Owm methods of GData-0.0.PicasaWebUser

        /**
         * Gets the #GDataPicasaWebUser:max-photos-per-album property.  Note that
         * this information is not available when accessing feeds which we
         * haven't authenticated, and &lt;code class="literal"&gt;0&lt;/code&gt; is returned.
         * @returns the maximum number of photos an album for this account can hold, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_max_photos_per_album(): number;
        /**
         * Gets the #GDataPicasaWebUser:nickname property.
         * @returns the nickname of the feed's user's nickname, or %NULL
         */
        get_nickname(): string;
        /**
         * Gets the #GDataPicasaWebUser:quota-current property.  Note that
         * this information is not available when accessing feeds which we
         * haven't authenticated, and &lt;code class="literal"&gt;0&lt;/code&gt; is returned.
         * @returns the current number of bytes in use by this feed's account, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_quota_current(): number;
        /**
         * Gets the #GDataPicasaWebUser:quota-limit property. Note that
         * this information is not available when accessing feeds which we
         * haven't authenticated, and &lt;code class="literal"&gt;0&lt;/code&gt; is returned.
         * @returns the maximum capacity in bytes for this feed's account, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_quota_limit(): number;
        /**
         * Gets the #GDataPicasaWebUser:thumbnail-uri property.
         * @returns the URI for the thumbnail of the account, or %NULL
         */
        get_thumbnail_uri(): string;
        /**
         * Gets the #GDataPicasaWebUser:user property.
         * @returns the feed's user, or %NULL
         */
        get_user(): string;
    }

    module Query {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataQuery structure are private and should never be accessed directly.
     */
    class Query extends GObject.Object {
        // Own properties of GData-0.0.Query

        /**
         * An entry author. The service returns entries where the author name and/or e-mail address match your query string.
         */
        author: string;
        /**
         * A category filter.
         *
         * You can query on multiple categories by listing multiple categories separated by slashes. The service returns all entries that match all
         * of the categories (like using AND between terms). For example: &lt;userinput&gt;Fritz/Laurie&lt;/userinput&gt; returns
         * entries that match both categories ("Fritz" and "Laurie").
         *
         * To do an OR between terms, use a pipe character (&lt;literal&gt;|&lt;/literal&gt;). For example: &lt;userinput&gt;Fritz\%7CLaurie&lt;/userinput&gt; returns
         * entries that match either category.
         *
         * An entry matches a specified category if the entry is in a category that has a matching term or label, as defined in the Atom
         * specification. (Roughly, the "term" is the internal string used by the software to identify the category, while the "label" is the
         * human-readable string presented to a user in a user interface.)
         *
         * To exclude entries that match a given category, use the form &lt;userinput&gt;-categoryname&lt;/userinput&gt;.
         *
         * To query for a category that has a scheme – such as &lt;literal&gt;&amp;lt;category scheme="urn:google.com" term="public"/&amp;gt;&lt;/literal&gt; – you must
         * place the scheme in curly braces before the category name. For example: &lt;userinput&gt;{urn:google.com}public&lt;/userinput&gt;. To match a category
         * that has no scheme, use an empty pair of curly braces. If you don't specify curly braces, then categories in any scheme will match.
         *
         * The above features can be combined. For example: &lt;userinput&gt;A|-{urn:google.com}B/-C&lt;/userinput&gt; means (A OR (NOT B)) AND (NOT C).
         */
        categories: string;
        /**
         * The ETag against which to check for updates. If the server-side ETag matches this one, the requested feed hasn't changed, and is not
         * returned unnecessarily.
         *
         * Setting any of the other query properties will unset the ETag, as ETags match against entire queries. If the ETag should be used in a
         * query, it must be set again using gdata_query_set_etag() after setting any other properties.
         */
        etag: string;
        /**
         * Strict query parameter checking. If this is enabled, an error will be returned by the online service if a parameter is
         * not recognised.
         */
        is_strict: boolean;
        /**
         * Strict query parameter checking. If this is enabled, an error will be returned by the online service if a parameter is
         * not recognised.
         */
        isStrict: boolean;
        /**
         * Maximum number of results to be retrieved. Most services have a default #GDataQuery:max-results size imposed by the server; if you wish
         * to receive the entire feed, specify a large number such as %G_MAXUINT for this property.
         *
         * Use &lt;code class="literal"&gt;0&lt;/code&gt; to not specify a maximum number of results.
         */
        max_results: number;
        /**
         * Maximum number of results to be retrieved. Most services have a default #GDataQuery:max-results size imposed by the server; if you wish
         * to receive the entire feed, specify a large number such as %G_MAXUINT for this property.
         *
         * Use &lt;code class="literal"&gt;0&lt;/code&gt; to not specify a maximum number of results.
         */
        maxResults: number;
        /**
         * Upper bound on the entry publish date, exclusive.
         */
        published_max: number;
        /**
         * Upper bound on the entry publish date, exclusive.
         */
        publishedMax: number;
        /**
         * Lower bound on the entry publish date, inclusive.
         */
        published_min: number;
        /**
         * Lower bound on the entry publish date, inclusive.
         */
        publishedMin: number;
        /**
         * A full-text query string.
         *
         * When creating a query, list search terms separated by spaces, in the form &lt;userinput&gt;term1 term2 term3&lt;/userinput&gt;.
         * (As with all of the query parameter values, the spaces must be URL encoded.) The service returns all entries that match all of the
         * search terms (like using AND between terms). Like Google's web search, a service searches on complete words (and related words with
         * the same stem), not substrings.
         *
         * To search for an exact phrase, enclose the phrase in quotation marks: &lt;userinput&gt;"exact phrase"&lt;/userinput&gt;.
         *
         * To exclude entries that match a given term, use the form &lt;userinput&gt;-term&lt;/userinput&gt;.
         *
         * The search is case-insensitive.
         *
         * Example: to search for all entries that contain the exact phrase "Elizabeth Bennet" and the word "Darcy" but don't contain the
         * word "Austen", use the following query: &lt;userinput&gt;"Elizabeth Bennet" Darcy -Austen&lt;/userinput&gt;.
         */
        q: string;
        /**
         * The one-based index of the first result to be retrieved. Use gdata_query_next_page() and gdata_query_previous_page() to
         * implement pagination, rather than manually changing #GDataQuery:start-index.
         *
         * Use &lt;code class="literal"&gt;0&lt;/code&gt; to not specify a start index.
         */
        start_index: number;
        /**
         * The one-based index of the first result to be retrieved. Use gdata_query_next_page() and gdata_query_previous_page() to
         * implement pagination, rather than manually changing #GDataQuery:start-index.
         *
         * Use &lt;code class="literal"&gt;0&lt;/code&gt; to not specify a start index.
         */
        startIndex: number;
        /**
         * Upper bound on the entry update date, exclusive.
         */
        updated_max: number;
        /**
         * Upper bound on the entry update date, exclusive.
         */
        updatedMax: number;
        /**
         * Lower bound on the entry update date, inclusive.
         */
        updated_min: number;
        /**
         * Lower bound on the entry update date, inclusive.
         */
        updatedMin: number;

        // Constructors of GData-0.0.Query

        static ['new'](q?: string | null): Query;

        static new_with_limits(q: string | null, start_index: number, max_results: number): Query;

        // Owm methods of GData-0.0.Query

        /**
         * Gets the #GDataQuery:author property.
         * @returns the author property, or %NULL if it is unset
         */
        get_author(): string;
        /**
         * Gets the #GDataQuery:categories property.
         * @returns the categories property, or %NULL if it is unset
         */
        get_categories(): string;
        /**
         * Gets the #GDataQuery:etag property.
         * @returns the ETag property, or %NULL if it is unset
         */
        get_etag(): string;
        /**
         * Gets the #GDataQuery:max-results property.
         * @returns the maximum results property, or &lt;code class="literal"&gt;0&lt;/code&gt; if it is unset
         */
        get_max_results(): number;
        /**
         * Gets the #GDataQuery:published-max property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the published-max property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_published_max(): number;
        /**
         * Gets the #GDataQuery:published-min property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the published-min property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_published_min(): number;
        /**
         * Gets the #GDataQuery:q property.
         * @returns the q property, or %NULL if it is unset
         */
        get_q(): string;
        /**
         * Builds a query URI from the given base feed URI, using the properties of the #GDataQuery. This function will take care
         * of all necessary URI escaping, so it should &lt;emphasis&gt;not&lt;/emphasis&gt; be done beforehand.
         *
         * The query URI is what functions like gdata_service_query() use to query the online service.
         * @param feed_uri the feed URI on which to build the query URI
         * @returns a query URI; free with g_free()
         */
        get_query_uri(feed_uri: string): string;
        /**
         * Gets the #GDataQuery:start-index property.
         * @returns the start index property, or &lt;code class="literal"&gt;0&lt;/code&gt; if it is unset
         */
        get_start_index(): number;
        /**
         * Gets the #GDataQuery:updated-max property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the updated-max property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_updated_max(): number;
        /**
         * Gets the #GDataQuery:updated-min property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the updated-min property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_updated_min(): number;
        /**
         * Changes the state of the #GDataQuery such that when gdata_query_get_query_uri() is next called, it will build the
         * query URI for the next page in the result set.
         *
         * Ideally, the URI of the next page is retrieved from a feed automatically when gdata_service_query() is called, but
         * gdata_query_next_page() will fall back to using #GDataQuery:start-index to emulate true pagination if this fails.
         *
         * You &lt;emphasis&gt;should not&lt;/emphasis&gt; implement pagination manually using #GDataQuery:start-index.
         */
        next_page(): void;
        /**
         * Changes the state of the #GDataQuery such that when gdata_query_get_query_uri() is next called, it will build the
         * query URI for the previous page in the result set.
         *
         * See the documentation for gdata_query_next_page() for an explanation of how query URIs from the feeds are used to this end.
         * @returns %TRUE if there is a previous page and it has been switched to, %FALSE otherwise
         */
        previous_page(): boolean;
        /**
         * Sets the #GDataQuery:author property of the #GDataQuery to the new author string, `author`.
         *
         * Set `author` to %NULL to unset the property in the query URI.
         * @param author the new author string, or %NULL
         */
        set_author(author?: string | null): void;
        /**
         * Sets the #GDataQuery:categories property of the #GDataQuery to the new category string, `categories`.
         *
         * Set `categories` to %NULL to unset the property in the query URI.
         * @param categories the new category string, or %NULL
         */
        set_categories(categories?: string | null): void;
        /**
         * Sets the #GDataQuery:etag property of the #GDataQuery to the new ETag, `etag`.
         *
         * Set `etag` to %NULL to not check against the server-side ETag.
         * @param etag the new ETag, or %NULL
         */
        set_etag(etag?: string | null): void;
        /**
         * Sets the #GDataQuery:is-strict property of the #GDataQuery to the new strict value, `is_strict`.
         * @param is_strict the new strict value
         */
        set_is_strict(is_strict: boolean): void;
        /**
         * Sets the #GDataQuery:max-results property of the #GDataQuery to the new maximum results value, `max_results`.
         *
         * Set `max_results` to &lt;code class="literal"&gt;0&lt;/code&gt; to unset the property in the query URI.
         * @param max_results the new maximum results value, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        set_max_results(max_results: number): void;
        /**
         * Sets the #GDataQuery:published-max property of the #GDataQuery to the new maximum publish time, `published_max`.
         *
         * Set `published_max` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the query URI.
         * @param published_max the new maximum publish time, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_published_max(published_max: number): void;
        /**
         * Sets the #GDataQuery:published-min property of the #GDataQuery to the new minimum publish time, `published_min`.
         *
         * Set `published_min` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the query URI.
         * @param published_min the new minimum publish time, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_published_min(published_min: number): void;
        /**
         * Sets the #GDataQuery:q property of the #GDataQuery to the new query string, `q`.
         *
         * Set `q` to %NULL to unset the property in the query URI.
         * @param q a new query string, or %NULL
         */
        set_q(q?: string | null): void;
        /**
         * Sets the #GDataQuery:start-index property of the #GDataQuery to the new one-based start index, `start_index`.
         *
         * Set `start_index` to &lt;code class="literal"&gt;0&lt;/code&gt; to unset the property in the query URI.
         * @param start_index the new start index, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        set_start_index(start_index: number): void;
        /**
         * Sets the #GDataQuery:updated-max property of the #GDataQuery to the new maximum update time, `updated_max`.
         *
         * Set `updated_max` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the query URI.
         * @param updated_max the new maximum update time, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_updated_max(updated_max: number): void;
        /**
         * Sets the #GDataQuery:updated-min property of the #GDataQuery to the new minimum update time, `updated_min`.
         *
         * Set `updated_min` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the query URI.
         * @param updated_min the new minimum update time, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_updated_min(updated_min: number): void;
    }

    module Service {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataService structure are private and should never be accessed directly.
     */
    class Service extends GObject.Object {
        // Own properties of GData-0.0.Service

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
        authorizer: Authorizer;
        /**
         * The locale to use for network requests, in Unix locale format. (e.g. "en_GB", "cs", "de_DE".) Use %NULL for the default "C" locale
         * (typically "en_US").
         *
         * Typically, this locale will be used by the server-side software to localise results, such as by translating category names, or by choosing
         * geographically relevant search results. This will vary from service to service.
         *
         * The server-side behaviour is undefined if it doesn't support a given locale.
         */
        locale: string;
        /**
         * The #GProxyResolver used to determine a proxy URI.  Setting this will clear the #GDataService:proxy-uri property.
         */
        proxy_resolver: Gio.ProxyResolver;
        /**
         * The #GProxyResolver used to determine a proxy URI.  Setting this will clear the #GDataService:proxy-uri property.
         */
        proxyResolver: Gio.ProxyResolver;
        /**
         * The proxy URI used internally for all network requests.
         *
         * Note that if a #GDataAuthorizer is being used with this #GDataService, the authorizer might also need its proxy URI setting.
         */
        proxy_uri: Soup.URI;
        /**
         * The proxy URI used internally for all network requests.
         *
         * Note that if a #GDataAuthorizer is being used with this #GDataService, the authorizer might also need its proxy URI setting.
         */
        proxyUri: Soup.URI;
        /**
         * A timeout, in seconds, for network operations. If the timeout is exceeded, the operation will be cancelled and
         * %GDATA_SERVICE_ERROR_NETWORK_ERROR will be returned.
         *
         * If the timeout is &lt;code class="literal"&gt;0&lt;/code&gt;, operations will never time out.
         *
         * Note that if a #GDataAuthorizer is being used with this #GDataService, the authorizer might also need its timeout setting.
         */
        timeout: number;

        // Owm methods of GData-0.0.Service

        /**
         * Retrieves the full list of #GDataAuthorizationDomains which relate to the specified `service_type`. All the
         * #GDataAuthorizationDomains are unique and interned, so can be compared with other domains by simple pointer comparison.
         *
         * Note that in addition to this method, #GDataService subclasses may expose some or all of their authorization domains individually by means of
         * individual accessor functions.
         * @param service_type the #GType of the #GDataService subclass to retrieve the authorization domains for
         */
        static get_authorization_domains(service_type: GObject.GType): AuthorizationDomain[];

        // Owm methods of GData-0.0.Service

        /**
         * Deletes `entry` from the server. For more information about the concept of deleting entries, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/basics.html#DeletingEntry"&gt;online documentation&lt;/ulink&gt; for the GData
         * protocol.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
         * If the operation was cancelled before or during network activity, the error %G_IO_ERROR_CANCELLED will be returned. Cancellation has no effect
         * after network activity has finished, however, and the deletion will return successfully (or return an error sent by the server) if it is first
         * cancelled after network activity has finished. See the &lt;link linkend="cancellable-support"&gt;overview of cancellation&lt;/link&gt; for
         * more details.
         *
         * If there is an error deleting the entry, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned. Currently, subclasses
         * &lt;emphasis&gt;cannot&lt;/emphasis&gt; cannot override this or provide more specific errors.
         * @param domain the #GDataAuthorizationDomain the deletion falls under, or %NULL
         * @param entry the #GDataEntry to delete
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE otherwise
         */
        delete_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean;
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
        delete_entry_async(
            domain: AuthorizationDomain | null,
            entry: Entry,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous entry deletion operation started with gdata_service_delete_entry_async().
         * @param async_result a #GAsyncResult
         * @returns %TRUE on success, %FALSE otherwise
         */
        delete_entry_finish(async_result: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDataAuthorizer object currently in use by the service. See the documentation for #GDataService:authorizer for more details.
         * @returns the authorizer object for this service, or %NULL
         */
        get_authorizer(): Authorizer;
        /**
         * Returns the locale currently being used for network requests, or %NULL if the locale is the default.
         * @returns the current locale
         */
        get_locale(): string;
        /**
         * Gets the #GProxyResolver on the #GDataService's #SoupSession.
         * @returns a #GProxyResolver, or %NULL
         */
        get_proxy_resolver(): Gio.ProxyResolver | null;
        /**
         * Gets the proxy URI on the #GDataService's #SoupSession.
         * @returns the proxy URI, or %NULL
         */
        get_proxy_uri(): Soup.URI;
        /**
         * Gets the #GDataService:timeout property; the network timeout, in seconds.
         * @returns the timeout, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        get_timeout(): number;
        /**
         * Inserts `entry` by uploading it to the online service at `upload_uri`. For more information about the concept of inserting entries, see
         * the &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/basics.html#InsertingEntry"&gt;online documentation&lt;/ulink&gt; for the GData
         * protocol.
         *
         * The service will return an updated version of the entry, which is the return value of this function on success.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
         * If the operation was cancelled before or during network activity, the error %G_IO_ERROR_CANCELLED will be returned. Cancellation has no effect
         * after network activity has finished, however, and the insertion will return successfully (or return an error sent by the server) if it is first
         * cancelled after network activity has finished. See the &lt;link linkend="cancellable-support"&gt;overview of cancellation&lt;/link&gt; for
         * more details.
         *
         * If the entry is marked as already having been inserted a %GDATA_SERVICE_ERROR_ENTRY_ALREADY_INSERTED error will be returned immediately
         * (there will be no network requests).
         *
         * If there is an error inserting the entry, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned. Currently, subclasses
         * &lt;emphasis&gt;cannot&lt;/emphasis&gt; cannot override this or provide more specific errors.
         * @param domain the #GDataAuthorizationDomain the insertion operation falls under, or %NULL
         * @param upload_uri the URI to which the upload should be sent
         * @param entry the #GDataEntry to insert
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an updated #GDataEntry, or %NULL; unref with g_object_unref()
         */
        insert_entry(
            domain: AuthorizationDomain | null,
            upload_uri: string,
            entry: Entry,
            cancellable?: Gio.Cancellable | null,
        ): Entry;
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
        insert_entry_async(
            domain: AuthorizationDomain | null,
            upload_uri: string,
            entry: Entry,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous entry insertion operation started with gdata_service_insert_entry_async().
         * @param async_result a #GAsyncResult
         * @returns an updated #GDataEntry, or %NULL; unref with g_object_unref()
         */
        insert_entry_finish(async_result: Gio.AsyncResult): Entry;
        /**
         * Determines whether the service is authorized for all the #GDataAuthorizationDomains it belongs to (as returned by
         * gdata_service_get_authorization_domains()). If the service's #GDataService:authorizer is %NULL, %FALSE is always returned.
         *
         * This is basically a convenience method for checking that the service's #GDataAuthorizer is authorized for all the service's
         * #GDataAuthorizationDomains.
         * @returns %TRUE if the service is authorized for all its domains, %FALSE otherwise
         */
        is_authorized(): boolean;
        /**
         * Queries the service's `feed_uri` feed to build a #GDataFeed.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
         * If the operation was cancelled before or during network activity, the error %G_IO_ERROR_CANCELLED will be returned. Cancellation has no effect
         * after network activity has finished, however, and the query will return successfully (or return an error sent by the server) if it is first
         * cancelled after network activity has finished. See the &lt;link linkend="cancellable-support"&gt;overview of cancellation&lt;/link&gt; for
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
         * @returns a #GDataFeed of query results, or %NULL; unref with g_object_unref()
         */
        query(
            domain: AuthorizationDomain | null,
            feed_uri: string,
            query: Query | null,
            entry_type: GObject.GType,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
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
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when the query is finished
         */
        query_async(
            domain: AuthorizationDomain | null,
            feed_uri: string,
            query: Query | null,
            entry_type: GObject.GType,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous query operation started with gdata_service_query_async().
         * @param async_result a #GAsyncResult
         * @returns a #GDataFeed of query results, or %NULL; unref with g_object_unref()
         */
        query_finish(async_result: Gio.AsyncResult): Feed;
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
         * @returns a #GDataEntry, or %NULL; unref with g_object_unref()
         */
        query_single_entry(
            domain: AuthorizationDomain | null,
            entry_id: string,
            query: Query | null,
            entry_type: GObject.GType,
            cancellable?: Gio.Cancellable | null,
        ): Entry;
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
        query_single_entry_async(
            domain: AuthorizationDomain | null,
            entry_id: string,
            query: Query | null,
            entry_type: GObject.GType,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous query operation for a single entry, as started with gdata_service_query_single_entry_async().
         * @param async_result a #GAsyncResult
         * @returns a #GDataEntry, or %NULL; unref with g_object_unref()
         */
        query_single_entry_finish(async_result: Gio.AsyncResult): Entry;
        /**
         * Sets #GDataService:authorizer to `authorizer`. This may be %NULL if the service will only make requests in future which don't require authorization.
         * See the documentation for #GDataService:authorizer for more information.
         * @param authorizer a new authorizer object for the service, or %NULL
         */
        set_authorizer(authorizer: Authorizer): void;
        /**
         * Set the locale used for network requests to `locale,` given in standard Unix locale format. See #GDataService:locale for more details.
         *
         * Note that while it's possible to change the locale after sending network requests, it is unsupported, as the server-side software may behave
         * unexpectedly. The only supported use of this function is after creation of a service, but before any network requests are made.
         * @param locale the new locale in Unix locale format, or %NULL for the default locale
         */
        set_locale(locale?: string | null): void;
        /**
         * Sets the #GProxyResolver on the #SoupSession used internally by the given #GDataService.
         *
         * Setting this will clear the #GDataService:proxy-uri property.
         * @param proxy_resolver a #GProxyResolver, or %NULL
         */
        set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void;
        /**
         * Sets the proxy URI on the #SoupSession used internally by the given #GDataService.
         * This forces all requests through the given proxy.
         *
         * If `proxy_uri` is %NULL, no proxy will be used.
         *
         * Note that if a #GDataAuthorizer is being used with this #GDataService, the authorizer might also need its proxy URI setting.
         * @param proxy_uri the proxy URI, or %NULL
         */
        set_proxy_uri(proxy_uri?: Soup.URI | null): void;
        /**
         * Sets the #GDataService:timeout property; the network timeout, in seconds.
         *
         * If `timeout` is &lt;code class="literal"&gt;0&lt;/code&gt;, network operations will never time out.
         *
         * Note that if a #GDataAuthorizer is being used with this #GDataService, the authorizer might also need its timeout setting.
         * @param timeout the timeout, or &lt;code class="literal"&gt;0&lt;/code&gt;
         */
        set_timeout(timeout: number): void;
        /**
         * Updates `entry` by PUTting it to its &lt;literal&gt;edit&lt;/literal&gt; link's URI. For more information about the concept of updating entries, see
         * the &lt;ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/basics.html#UpdatingEntry"&gt;online documentation&lt;/ulink&gt; for the GData
         * protocol.
         *
         * The service will return an updated version of the entry, which is the return value of this function on success.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
         * If the operation was cancelled before or during network activity, the error %G_IO_ERROR_CANCELLED will be returned. Cancellation has no effect
         * after network activity has finished, however, and the update will return successfully (or return an error sent by the server) if it is first
         * cancelled after network activity has finished. See the &lt;link linkend="cancellable-support"&gt;overview of cancellation&lt;/link&gt; for
         * more details.
         *
         * If there is an error updating the entry, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned. Currently, subclasses
         * &lt;emphasis&gt;cannot&lt;/emphasis&gt; cannot override this or provide more specific errors.
         * @param domain the #GDataAuthorizationDomain the update operation falls under, or %NULL
         * @param entry the #GDataEntry to update
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an updated #GDataEntry, or %NULL; unref with g_object_unref()
         */
        update_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry;
        /**
         * Updates `entry` by PUTting it to its &lt;literal&gt;edit&lt;/literal&gt; link's URI. `self` and
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
        update_entry_async(
            domain: AuthorizationDomain | null,
            entry: Entry,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous entry update operation started with gdata_service_update_entry_async().
         * @param async_result a #GAsyncResult
         * @returns an updated #GDataEntry, or %NULL; unref with g_object_unref()
         */
        update_entry_finish(async_result: Gio.AsyncResult): Entry;
    }

    module TasksQuery {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataTasksQuery structure are private and should never be accessed directly.
     */
    class TasksQuery extends Query {
        // Own properties of GData-0.0.TasksQuery

        /**
         * Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional.
         * The default is not to filter by completion date.
         */
        completed_max: number;
        /**
         * Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional.
         * The default is not to filter by completion date.
         */
        completedMax: number;
        /**
         * Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional.
         * The default is not to filter by completion date.
         */
        completed_min: number;
        /**
         * Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional.
         * The default is not to filter by completion date.
         */
        completedMin: number;
        /**
         * Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional.
         * The default is not to filter by completion date.
         */
        due_max: number;
        /**
         * Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional.
         * The default is not to filter by completion date.
         */
        dueMax: number;
        /**
         * Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional.
         * The default is not to filter by completion date.
         */
        due_min: number;
        /**
         * Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional.
         * The default is not to filter by completion date.
         */
        dueMin: number;
        /**
         * Flag indicating whether completed tasks are returned in the result. Optional. The default is %FALSE.
         */
        show_completed: boolean;
        /**
         * Flag indicating whether completed tasks are returned in the result. Optional. The default is %FALSE.
         */
        showCompleted: boolean;
        /**
         * Flag indicating whether deleted tasks are returned in the result. Optional. The default is %FALSE.
         */
        show_deleted: boolean;
        /**
         * Flag indicating whether deleted tasks are returned in the result. Optional. The default is %FALSE.
         */
        showDeleted: boolean;
        /**
         * Flag indicating whether hidden tasks are returned in the result. Optional. The default is %FALSE.
         */
        show_hidden: boolean;
        /**
         * Flag indicating whether hidden tasks are returned in the result. Optional. The default is %FALSE.
         */
        showHidden: boolean;

        // Constructors of GData-0.0.TasksQuery

        static ['new'](q?: string | null): TasksQuery;

        // Owm methods of GData-0.0.TasksQuery

        /**
         * Gets the #GDataTasksQuery:completed-max property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the completed-max property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_completed_max(): number;
        /**
         * Gets the #GDataTasksQuery:completed-min property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the completed-min property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_completed_min(): number;
        /**
         * Gets the #GDataTasksQuery:due-max property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the due-max property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_due_max(): number;
        /**
         * Gets the #GDataTasksQuery:due-min property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the due-min property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_due_min(): number;
        /**
         * Gets the #GDataTasksQuery:show-completed property.
         * @returns the show-completed property
         */
        get_show_completed(): boolean;
        /**
         * Gets the #GDataTasksQuery:show-deleted property.
         * @returns the show-deleted property
         */
        get_show_deleted(): boolean;
        /**
         * Gets the #GDataTasksQuery:show-hidden property.
         * @returns the show-hidden property
         */
        get_show_hidden(): boolean;
        /**
         * Sets the #GDataTasksQuery:completed-max property of the #GDataTasksQuery
         * to the new time/date, `completed_max`.
         *
         * Set `completed_max` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the query URI.
         * @param completed_max upper bound for a task's completion date by UNIX timestamp, or  &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_completed_max(completed_max: number): void;
        /**
         * Sets the #GDataTasksQuery:completed-min property of the #GDataTasksQuery
         * to the new time/date, `completed_min`.
         *
         * Set `completed_min` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the query URI.
         * @param completed_min lower bound for a task's completion date by UNIX timestamp, or  &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_completed_min(completed_min: number): void;
        /**
         * Sets the #GDataTasksQuery:due-max property of the #GDataTasksQuery
         * to the new time/date, `due_max`.
         *
         * Set `due_max` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the query URI.
         * @param due_max upper bound for a task's due date by UNIX timestamp, or  &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_due_max(due_max: number): void;
        /**
         * Sets the #GDataTasksQuery:due-min property of the #GDataTasksQuery
         * to the new time/date, `due_min`.
         *
         * Set `due_min` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the query URI.
         * @param due_min lower bound for a task's due date by UNIX timestamp, or  &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_due_min(due_min: number): void;
        /**
         * Sets the #GDataTasksQuery:show-completed property of the #GDataTasksQuery.
         * @param show_completed %TRUE to show completed tasks, %FALSE otherwise
         */
        set_show_completed(show_completed: boolean): void;
        /**
         * Sets the #GDataTasksQuery:show-deleted property of the #GDataTasksQuery.
         * @param show_deleted %TRUE to show deleted tasks, %FALSE otherwise
         */
        set_show_deleted(show_deleted: boolean): void;
        /**
         * Sets the #GDataTasksQuery:show-hidden property of the #GDataTasksQuery.
         * @param show_hidden %TRUE to show hidden tasks, %FALSE otherwise
         */
        set_show_hidden(show_hidden: boolean): void;
    }

    module TasksService {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataTasksService structure are private and should never be accessed directly.
     */
    class TasksService extends Service {
        // Constructors of GData-0.0.TasksService

        static ['new'](authorizer?: Authorizer | null): TasksService;

        // Owm methods of GData-0.0.TasksService

        /**
         * The primary #GDataAuthorizationDomain for interacting with Google Tasks. This will not normally need to be used, as it's used internally
         * by the #GDataTasksService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
         * does not support natively, then this domain may be needed to authorize the requests.
         *
         * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
         */
        static get_primary_authorization_domain(): AuthorizationDomain;

        // Owm methods of GData-0.0.TasksService

        /**
         * Delete `task` from online tasks service.
         *
         * For more details, see gdata_service_delete_entry().
         * @param task the #GDataTasksTask to delete
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE otherwise
         */
        delete_task(task: TasksTask, cancellable?: Gio.Cancellable | null): boolean;
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
        delete_task_async(
            task: TasksTask,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Delete `tasklist` from online tasks service.
         *
         * For more details, see gdata_service_delete_entry().
         * @param tasklist the #GDataTasksTasklist to delete
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE otherwise
         */
        delete_tasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): boolean;
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
        delete_tasklist_async(
            tasklist: TasksTasklist,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Inserts `task` by uploading it to the online tasks service into tasklist `tasklist`. It is safe to unref `tasklist` after function returns.
         *
         * For more details, see gdata_service_insert_entry().
         * @param task the #GDataTasksTask to insert
         * @param tasklist #GDataTasksTasklist to insert into
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an updated #GDataTasksTask, or %NULL; unref with g_object_unref()
         */
        insert_task(task: TasksTask, tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTask;
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
        insert_task_async(
            task: TasksTask,
            tasklist: TasksTasklist,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Inserts `tasklist` by uploading it to the online tasks service.
         *
         * For more details, see gdata_service_insert_entry().
         * @param tasklist #GDataTasksTasklist to insert
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an updated #GDataTasksTasklist, or %NULL; unref with g_object_unref()
         */
        insert_tasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTasklist;
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
        insert_tasklist_async(
            tasklist: TasksTasklist,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Queries the service to return a list of all tasklists from the authenticated account which match the given
         * `query`. It will return all tasklists the user has read access to.
         *
         * For more details, see gdata_service_query().
         * @param query a #GDataQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @returns a #GDataFeed of query results; unref with g_object_unref()
         */
        query_all_tasklists(
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
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
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        query_all_tasklists_async(
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Queries the service to return a list of tasks in the given `tasklist,` which match `query`.
         *
         * For more details, see gdata_service_query().
         * @param tasklist a #GDataTasksTasklist
         * @param query a #GDataQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @returns a #GDataFeed of query results; unref with g_object_unref()
         */
        query_tasks(
            tasklist: TasksTasklist,
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
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
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when the query is finished
         */
        query_tasks_async(
            tasklist: TasksTasklist,
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Update `task` in online tasks service.
         *
         * For more details, see gdata_service_update_entry().
         * @param task the #GDataTasksTask to update
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an updated #GDataTasksTask, or %NULL; unref with g_object_unref()
         */
        update_task(task: TasksTask, cancellable?: Gio.Cancellable | null): TasksTask;
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
        update_task_async(
            task: TasksTask,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Update `tasklist` in online tasks service.
         *
         * For more details, see gdata_service_update_entry().
         * @param tasklist the #GDataTasksTasklist to update
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an updated #GDataTasksTasklist, or %NULL; unref with g_object_unref()
         */
        update_tasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTasklist;
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
        update_tasklist_async(
            tasklist: TasksTasklist,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
    }

    module TasksTask {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataTasksTask structure are private and should never be accessed directly.
     */
    class TasksTask extends Entry {
        // Own properties of GData-0.0.TasksTask

        /**
         * Completion date of the task (as a RFC 3339 timestamp; seconds since
         * the UNIX epoch).
         *
         * This field is &lt;code class="literal"&gt;-1&lt;/code&gt; if the task has not
         * been completed.
         */
        completed: number;
        /**
         * Due date of the task (as a RFC 3339 timestamp; seconds since the UNIX
         * epoch).
         *
         * This field is &lt;code class="literal"&gt;-1&lt;/code&gt; if the task has no due
         * date assigned.
         */
        due: number;
        /**
         * Flag indicating whether the task has been deleted. The default is %FALSE.
         */
        is_deleted: boolean;
        /**
         * Flag indicating whether the task has been deleted. The default is %FALSE.
         */
        isDeleted: boolean;
        /**
         * Flag indicating whether the task is hidden. This is the case if the task
         * had been marked completed when the task list was last cleared.
         * The default is %FALSE. This field is read-only.
         */
        readonly is_hidden: boolean;
        /**
         * Flag indicating whether the task is hidden. This is the case if the task
         * had been marked completed when the task list was last cleared.
         * The default is %FALSE. This field is read-only.
         */
        readonly isHidden: boolean;
        /**
         * This is where the description of what needs to be done in the task is stored.
         */
        notes: string;
        /**
         * Parent task identifier. This field is omitted if it is a top-level task.
         *
         * Since 0.17.10, this property is writable.
         */
        parent: string;
        /**
         * String indicating the position of the task among its sibling tasks under the same parent task
         * or at the top level. If this string is greater than another task's corresponding position string
         * according to lexicographical ordering, the task is positioned after the other task under the same
         * parent task (or at the top level).
         *
         * Since 0.17.10, this property is writable.
         */
        position: string;
        /**
         * Status of the task. This is either %GDATA_TASKS_STATUS_NEEDS_ACTION
         * or %GDATA_TASKS_STATUS_COMPLETED.
         */
        status: string;

        // Constructors of GData-0.0.TasksTask

        static ['new'](id?: string | null): TasksTask;

        // Owm methods of GData-0.0.TasksTask

        /**
         * Gets the #GDataTasksTask:completed property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the completed property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_completed(): number;
        /**
         * Gets the #GDataTasksTask:due property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the due property, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_due(): number;
        /**
         * Gets the #GDataTasksTask:notes property.
         * @returns notes of the task, or %NULL
         */
        get_notes(): string | null;
        /**
         * Gets the #GDataTasksTask:parent property.
         * @returns the parent of the task, or %NULL
         */
        get_parent(): string | null;
        /**
         * Gets the #GDataTasksTask:position property.
         * @returns the position of the task, or %NULL
         */
        get_position(): string | null;
        /**
         * Gets the #GDataTasksTask:status property.
         * @returns the status of the task, or %NULL
         */
        get_status(): string | null;
        /**
         * Sets the #GDataTasksTask:completed property of the #GDataTasksTask to the new completion time of the task, `completed`.
         *
         * Set `completed` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the completion time of the task
         * @param completed completion time of the task, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_completed(completed: number): void;
        /**
         * Sets the #GDataTasksTask:due property of the #GDataTasksTask to the new due time of the task, `due`.
         *
         * Set `due` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the property in the due time of the task
         * @param due due time of the task, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_due(due: number): void;
        /**
         * Sets the #GDataTasksTask:is-deleted property to `deleted`.
         * @param deleted %TRUE if task is deleted, %FALSE otherwise
         */
        set_is_deleted(deleted: boolean): void;
        /**
         * Sets the #GDataTasksTask:notes property to the new notes, `notes`.
         *
         * Set `notes` to %NULL to unset the property in the task.
         * @param notes a new notes of the task, or %NULL
         */
        set_notes(notes?: string | null): void;
        /**
         * Sets the #GDataTasksTask:parent property.
         * @param parent parent of the task
         */
        set_parent(parent?: string | null): void;
        /**
         * Sets the #GDataTasksTask:position property.
         * @param position position of the task in the list
         */
        set_position(position: string): void;
        /**
         * Sets the #GDataTasksTask:status property to the new status, `status`.
         *
         * Set `status` to %NULL to unset the property in the task.
         * @param status a new status of the task, or %NULL
         */
        set_status(status?: string | null): void;
    }

    module TasksTasklist {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataTasksTasklist structure are private and should never be accessed directly.
     */
    class TasksTasklist extends Entry {
        // Constructors of GData-0.0.TasksTasklist

        static ['new'](id?: string | null): TasksTasklist;
    }

    module UploadStream {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataUploadStream structure are private and should never be accessed directly.
     */
    class UploadStream extends Gio.OutputStream {
        // Own properties of GData-0.0.UploadStream

        /**
         * The authorization domain for the upload, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be
         * authorized. This may be %NULL if authorization is not needed for the upload.
         */
        authorization_domain: AuthorizationDomain;
        /**
         * The authorization domain for the upload, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be
         * authorized. This may be %NULL if authorization is not needed for the upload.
         */
        authorizationDomain: AuthorizationDomain;
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
        cancellable: Gio.Cancellable;
        /**
         * The content length (in bytes) of the file being uploaded (i.e. as returned by g_file_info_get_size()). Note that this does not include the
         * length of the XML serialisation of #GDataUploadStream:entry, if set.
         *
         * If this is &lt;code class="literal"&gt;-1&lt;/code&gt; the upload will be non-resumable; if it is non-negative, the upload will be resumable.
         */
        content_length: number;
        /**
         * The content length (in bytes) of the file being uploaded (i.e. as returned by g_file_info_get_size()). Note that this does not include the
         * length of the XML serialisation of #GDataUploadStream:entry, if set.
         *
         * If this is &lt;code class="literal"&gt;-1&lt;/code&gt; the upload will be non-resumable; if it is non-negative, the upload will be resumable.
         */
        contentLength: number;
        /**
         * The content type of the file being uploaded (i.e. as returned by g_file_info_get_content_type()).
         */
        content_type: string;
        /**
         * The content type of the file being uploaded (i.e. as returned by g_file_info_get_content_type()).
         */
        contentType: string;
        /**
         * The entry used for metadata to upload.
         */
        entry: Entry;
        /**
         * The HTTP request method to use when uploading the file.
         */
        method: string;
        /**
         * The service which is used to authorize the upload, and to which the upload relates.
         */
        service: Service;
        /**
         * The slug of the file being uploaded. This is usually the display name of the file (i.e. as returned by g_file_info_get_display_name()).
         */
        slug: string;
        /**
         * The URI to upload the data and metadata to. This must be HTTPS.
         */
        upload_uri: string;
        /**
         * The URI to upload the data and metadata to. This must be HTTPS.
         */
        uploadUri: string;

        // Constructors of GData-0.0.UploadStream

        static ['new'](
            service: Service,
            domain: AuthorizationDomain | null,
            method: string,
            upload_uri: string,
            entry: Entry | null,
            slug: string,
            content_type: string,
            cancellable?: Gio.Cancellable | null,
        ): UploadStream;

        static new_resumable(
            service: Service,
            domain: AuthorizationDomain | null,
            method: string,
            upload_uri: string,
            entry: Entry | null,
            slug: string,
            content_type: string,
            content_length: number,
            cancellable?: Gio.Cancellable | null,
        ): UploadStream;

        // Owm methods of GData-0.0.UploadStream

        /**
         * Gets the authorization domain used to authorize the upload, as passed to gdata_upload_stream_new(). It may be %NULL if authorization is not
         * needed for the upload.
         * @returns the #GDataAuthorizationDomain used to authorize the upload, or %NULL
         */
        get_authorization_domain(): AuthorizationDomain | null;
        /**
         * Gets the #GCancellable for the entire upload operation, #GDataUploadStream:cancellable.
         * @returns the #GCancellable for the entire upload operation
         */
        get_cancellable(): Gio.Cancellable;
        /**
         * Gets the size (in bytes) of the file being uploaded. This will be &lt;code class="literal"&gt;-1&lt;/code&gt; for a non-resumable upload, and zero or greater
         * for a resumable upload.
         * @returns the size of the file being uploaded
         */
        get_content_length(): number;
        /**
         * Gets the content type of the file being uploaded.
         * @returns the content type of the file being uploaded
         */
        get_content_type(): string;
        /**
         * Gets the entry being used to upload metadata, if one was passed to gdata_upload_stream_new().
         * @returns the entry used for metadata, or %NULL
         */
        get_entry(): Entry;
        /**
         * Gets the HTTP request method being used to upload the file, as passed to gdata_upload_stream_new().
         * @returns the HTTP request method in use
         */
        get_method(): string;
        /**
         * Returns the server's response to the upload operation performed by the #GDataUploadStream. If the operation
         * is still underway, or the server's response hasn't been received yet, %NULL is returned and `length` is set to &lt;code class="literal"&gt;-1&lt;/code&gt;.
         *
         * If there was an error during the upload operation (but it is complete), %NULL is returned, and `length` is set to &lt;code class="literal"&gt;0&lt;/code&gt;.
         *
         * While it is safe to call this function from any thread at any time during the network operation, the only way to guarantee that the response has
         * been set before calling this function is to have closed the #GDataUploadStream by calling g_output_stream_close() on it, without cancelling
         * the close operation. Once the stream has been closed, all network communication is guaranteed to have finished. Note that if a call to
         * g_output_stream_close() is cancelled, g_output_stream_is_closed() will immediately start to return %TRUE, even if the #GDataUploadStream is still
         * attempting to flush the network buffers asynchronously — consequently, gdata_upload_stream_get_response() may still return %NULL and a `length` of
         * &lt;code class="literal"&gt;-1&lt;/code&gt;. The only reliable way to determine if the stream has been fully closed in this situation is to check the results
         * of gdata_upload_stream_get_response(), rather than g_output_stream_is_closed().
         * @returns the server's response to the upload, or %NULL
         */
        get_response(): string;
        /**
         * Gets the service used to authorize the upload, as passed to gdata_upload_stream_new().
         * @returns the #GDataService used to authorize the upload
         */
        get_service(): Service;
        /**
         * Gets the slug (filename) of the file being uploaded.
         * @returns the slug of the file being uploaded
         */
        get_slug(): string;
        /**
         * Gets the URI the file is being uploaded to, as passed to gdata_upload_stream_new().
         * @returns the URI which the file is being uploaded to
         */
        get_upload_uri(): string;
    }

    module YouTubeCategory {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataYouTubeCategory structure are private and should never be accessed directly.
     */
    class YouTubeCategory extends Category {
        // Own properties of GData-0.0.YouTubeCategory

        /**
         * Whether new videos can be added to the category.
         */
        readonly is_assignable: boolean;
        /**
         * Whether new videos can be added to the category.
         */
        readonly isAssignable: boolean;
        /**
         * Whether the category is deprecated.
         */
        readonly is_deprecated: boolean;
        /**
         * Whether the category is deprecated.
         */
        readonly isDeprecated: boolean;

        // Owm methods of GData-0.0.YouTubeCategory

        /**
         * Returns whether the category is browsable in the given `region`. The list of supported region IDs is
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#Region_specific_feeds"&gt;available online&lt;/ulink&gt;.
         * @param region a two-letter region ID
         * @returns whether the category is browsable in @region
         */
        is_browsable(region: string): boolean;
    }

    module YouTubeComment {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataYouTubeComment structure are private and should never be accessed directly.
     */
    class YouTubeComment extends Comment {
        // Own properties of GData-0.0.YouTubeComment

        /**
         * The URI of the parent comment to this one, or %NULL if this comment is a top-level comment.
         *
         * See the documentation for #GDataYouTubeComment for an explanation of the semantics of parent comment URIs.
         */
        parent_comment_uri: string;
        /**
         * The URI of the parent comment to this one, or %NULL if this comment is a top-level comment.
         *
         * See the documentation for #GDataYouTubeComment for an explanation of the semantics of parent comment URIs.
         */
        parentCommentUri: string;

        // Constructors of GData-0.0.YouTubeComment

        static ['new'](id: string): YouTubeComment;

        // Owm methods of GData-0.0.YouTubeComment

        /**
         * Gets the #GDataYouTubeComment:parent-comment-uri property.
         * @returns the parent comment URI, or %NULL
         */
        get_parent_comment_uri(): string;
        /**
         * Sets the #GDataYouTubeComment:parent-comment-uri property to `parent_comment_uri`.
         *
         * Set `parent_comment_uri` to %NULL to unset the #GDataYouTubeComment:parent-comment-uri property in the comment (i.e. make the comment a top-level
         * comment).
         *
         * See the &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/developers_guide_protocol_comments.html#Retrieve_comments"&gt;online
         * documentation&lt;/ulink&gt; for more information.
         * @param parent_comment_uri a new parent comment URI, or %NULL
         */
        set_parent_comment_uri(parent_comment_uri: string): void;
    }

    module YouTubeContent {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataYouTubeContent structure are private and should never be accessed directly.
     */
    class YouTubeContent extends MediaContent {
        // Own properties of GData-0.0.YouTubeContent

        /**
         * The video format of the video object.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_media:content"&gt;
         * YouTube documentation&lt;/ulink&gt;.
         */
        readonly format: YouTubeFormat;

        // Owm methods of GData-0.0.YouTubeContent

        /**
         * Gets the #GDataYouTubeContent:format property.
         * @returns the video format, or %GDATA_YOUTUBE_FORMAT_UNKNOWN
         */
        get_format(): YouTubeFormat;
    }

    module YouTubeCredit {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataYouTubeCredit structure are private and should never be accessed directly.
     */
    class YouTubeCredit extends MediaCredit {
        // Own properties of GData-0.0.YouTubeCredit

        /**
         * The type of entity who is credited. Currently this can only be %GDATA_YOUTUBE_CREDIT_ENTITY_PARTNER, for a YouTube partner.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_media:credit"&gt;
         * YouTube documentation&lt;/ulink&gt;.
         */
        readonly entity_type: string;
        /**
         * The type of entity who is credited. Currently this can only be %GDATA_YOUTUBE_CREDIT_ENTITY_PARTNER, for a YouTube partner.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_media:credit"&gt;
         * YouTube documentation&lt;/ulink&gt;.
         */
        readonly entityType: string;

        // Owm methods of GData-0.0.YouTubeCredit

        /**
         * Gets the #GDataYouTubeCredit:entity-type property.
         * @returns the type of the credited user (e.g. %GDATA_YOUTUBE_CREDIT_ENTITY_PARTNER), or %NULL
         */
        get_entity_type(): string;
    }

    module YouTubeFeed {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataYouTubeFeed structure are private and should
     * never be accessed directly.
     */
    class YouTubeFeed extends Feed {}

    module YouTubeQuery {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataYouTubeQuery structure are private and should never be accessed directly.
     */
    class YouTubeQuery extends Query {
        // Own properties of GData-0.0.YouTubeQuery

        /**
         * Restricts the search to videos uploaded within the specified time period. To retrieve videos irrespective of their
         * age, set the property to %GDATA_YOUTUBE_AGE_ALL_TIME.
         */
        age: YouTubeAge;
        /**
         * Specifies that videos must be available in a particular video format. Use %GDATA_YOUTUBE_FORMAT_UNKNOWN to
         * retrieve videos irrespective of their format availability.
         */
        format: YouTubeFormat;
        /**
         * Whether to restrict search results to videos with specific coordinates associated with them. If used with a given
         * #GDataYouTubeQuery:latitude and #GDataYouTubeQuery:longitude, only videos with specific coordinates (not those with merely
         * a descriptive address) will be returned. If used without a latitude and longitude set, only videos with specific coordinates
         * (regardless of those coordinates) will be returned.
         *
         * For more information, see the documentation for #GDataYouTubeQuery:latitude.
         */
        has_location: boolean;
        /**
         * Whether to restrict search results to videos with specific coordinates associated with them. If used with a given
         * #GDataYouTubeQuery:latitude and #GDataYouTubeQuery:longitude, only videos with specific coordinates (not those with merely
         * a descriptive address) will be returned. If used without a latitude and longitude set, only videos with specific coordinates
         * (regardless of those coordinates) will be returned.
         *
         * For more information, see the documentation for #GDataYouTubeQuery:latitude.
         */
        hasLocation: boolean;
        /**
         * Restricts the search to videos that have a title, description or keywords in a specified language. The language code should
         * be a two-letter ISO 639-1 code; or you can use &lt;literal&gt;zh-Hans&lt;/literal&gt; for simplified Chinese and &lt;literal&gt;zh-Hant&lt;/literal&gt;
         * for traditional Chinese.
         *
         * For more information, see the &lt;ulink type="http"
         * url="http://code.google.com/apis/youtube/2.0/reference.html#lrsp"&gt;online documentation&lt;/ulink&gt;.
         */
        language: string;
        /**
         * The latitude of a particular location of which videos should be found. This should be used in conjunction with
         * #GDataYouTubeQuery:longitude; if either property is outside the valid range, neither will be used. Valid latitudes
         * are between &lt;code class="literal"&gt;-90&lt;/code&gt; and &lt;code class="literal"&gt;90&lt;/code&gt;0 degrees; any values of this property outside that range
         * will unset the property in the query URI.
         *
         * If #GDataYouTubeQuery:location-radius is a non-&lt;code class="literal"&gt;0&lt;/code&gt; value, this will define a circle from which videos should be
         * found.
         *
         * As it is deprecated, the value of #GDataYouTubeQuery:has-location is
         * ignored.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/search/list#location"&gt;online documentation&lt;/ulink&gt;.
         */
        latitude: number;
        /**
         * The content license which should be used to filter search results. If set to, for example, %GDATA_YOUTUBE_LICENSE_CC, only videos which
         * are Creative Commons licensed will be returned in search results. Set this to %NULL to return videos under any license.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/search/list#videoLicense"&gt;online documentation&lt;/ulink&gt;.
         */
        license: string;
        /**
         * The radius, in metres, of a circle from within which videos should be returned. The circle is centred on the latitude and
         * longitude given in #GDataYouTubeQuery:latitude and #GDataYouTubeQuery:longitude.
         *
         * Set this property to &lt;code class="literal"&gt;0&lt;/code&gt; to search for specific coordinates, rather than within a given radius.
         *
         * For more information, see the documentation for #GDataYouTubeQuery:latitude.
         */
        location_radius: number;
        /**
         * The radius, in metres, of a circle from within which videos should be returned. The circle is centred on the latitude and
         * longitude given in #GDataYouTubeQuery:latitude and #GDataYouTubeQuery:longitude.
         *
         * Set this property to &lt;code class="literal"&gt;0&lt;/code&gt; to search for specific coordinates, rather than within a given radius.
         *
         * For more information, see the documentation for #GDataYouTubeQuery:latitude.
         */
        locationRadius: number;
        /**
         * The longitude of a particular location of which videos should be found. This should be used in conjunction with
         * #GDataYouTubeQuery:latitude; if either property is outside the valid range, neither will be used. Valid longitudes
         * are between &lt;code class="literal"&gt;-180&lt;/code&gt; and &lt;code class="literal"&gt;180&lt;/code&gt; degrees; any values of this property outside that
         * range will unset the property in the query URI.
         *
         * For more information, see the documentation for #GDataYouTubeQuery:latitude.
         */
        longitude: number;
        /**
         * Specifies the order of entries in a feed. Supported values are &lt;literal&gt;relevance&lt;/literal&gt;,
         * &lt;literal&gt;published&lt;/literal&gt;, &lt;literal&gt;viewCount&lt;/literal&gt; and &lt;literal&gt;rating&lt;/literal&gt;.
         *
         * Additionally, results most relevant to a specific language can be returned by setting the property
         * to &lt;literal&gt;relevance_lang_&lt;replaceable&gt;languageCode&lt;/replaceable&gt;&lt;/literal&gt;, where
         * &lt;replaceable&gt;languageCode&lt;/replaceable&gt; is an ISO 639-1 language code, as used in #GDataYouTubeQuery:language.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/search/list#order"&gt;online documentation&lt;/ulink&gt;.
         */
        order_by: string;
        /**
         * Specifies the order of entries in a feed. Supported values are &lt;literal&gt;relevance&lt;/literal&gt;,
         * &lt;literal&gt;published&lt;/literal&gt;, &lt;literal&gt;viewCount&lt;/literal&gt; and &lt;literal&gt;rating&lt;/literal&gt;.
         *
         * Additionally, results most relevant to a specific language can be returned by setting the property
         * to &lt;literal&gt;relevance_lang_&lt;replaceable&gt;languageCode&lt;/replaceable&gt;&lt;/literal&gt;, where
         * &lt;replaceable&gt;languageCode&lt;/replaceable&gt; is an ISO 639-1 language code, as used in #GDataYouTubeQuery:language.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/search/list#order"&gt;online documentation&lt;/ulink&gt;.
         */
        orderBy: string;
        /**
         * An ISO 3166 two-letter country code that should be used to filter
         * videos playable only in specific countries.
         *
         * Previously, this property could also accept the client’s IP address
         * for country lookup. This feature is no longer supported by Google,
         * and will result in an error from the server if used. Use a country
         * code instead.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/search/list#regionCode"&gt;online documentation&lt;/ulink&gt;.
         */
        restriction: string;
        /**
         * Whether the search results should include restricted content as well as standard content.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/search/list#safeSearch"&gt;online documentation&lt;/ulink&gt;.
         */
        safe_search: YouTubeSafeSearch;
        /**
         * Whether the search results should include restricted content as well as standard content.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/search/list#safeSearch"&gt;online documentation&lt;/ulink&gt;.
         */
        safeSearch: YouTubeSafeSearch;
        /**
         * Specifies the direction of sorting. To use the default sort order, set the property to %GDATA_YOUTUBE_SORT_NONE.
         */
        sort_order: YouTubeSortOrder;
        /**
         * Specifies the direction of sorting. To use the default sort order, set the property to %GDATA_YOUTUBE_SORT_NONE.
         */
        sortOrder: YouTubeSortOrder;
        /**
         * Restricts the search to videos from the specified type of uploader. Currently, this can only be used to restrict
         * searches to videos from YouTube partners.
         */
        uploader: YouTubeUploader;

        // Constructors of GData-0.0.YouTubeQuery

        static ['new'](q?: string | null): YouTubeQuery;

        // Owm methods of GData-0.0.YouTubeQuery

        /**
         * Gets the #GDataYouTubeQuery:age property.
         * @returns the age property
         */
        get_age(): YouTubeAge;
        /**
         * Gets the #GDataYouTubeQuery:format property.
         * @returns the format property
         */
        get_format(): YouTubeFormat;
        /**
         * Gets the #GDataYouTubeQuery:language property.
         * @returns the language property, or %NULL if it is unset
         */
        get_language(): string;
        /**
         * Gets the #GDataYouTubeQuery:license property.
         * @returns the license property, or %NULL if it is unset
         */
        get_license(): string;
        /**
         * Gets the location-based properties of the #GDataYouTubeQuery&lt;!-- --&gt;: #GDataYouTubeQuery:latitude, #GDataYouTubeQuery:longitude,
         * #GDataYouTubeQuery:location-radius and #GDataYouTubeQuery:has-location.
         */
        get_location(): void;
        /**
         * Gets the #GDataYouTubeQuery:order-by property.
         * @returns the order by property, or %NULL if it is unset
         */
        get_order_by(): string;
        /**
         * Gets the #GDataYouTubeQuery:restriction property.
         * @returns the restriction property, or %NULL if it is unset
         */
        get_restriction(): string;
        /**
         * Gets the #GDataYouTubeQuery:safe-search property.
         * @returns the safe search property
         */
        get_safe_search(): YouTubeSafeSearch;
        /**
         * Gets the #GDataYouTubeQuery:sort-order property.
         * @returns the sort order property
         */
        get_sort_order(): YouTubeSortOrder;
        /**
         * Gets the #GDataYouTubeQuery:uploader property.
         * @returns the uploader property
         */
        get_uploader(): YouTubeUploader;
        /**
         * Sets the #GDataYouTubeQuery:age property of the #GDataYouTubeQuery to `age`.
         * @param age the new age
         */
        set_age(age: YouTubeAge): void;
        /**
         * Sets the #GDataYouTubeQuery:format property of the #GDataYouTubeQuery to `format`.
         * @param format the requested video format
         */
        set_format(format: YouTubeFormat): void;
        /**
         * Sets the #GDataYouTubeQuery:language property of the #GDataYouTubeQuery to the new language, `language`.
         *
         * Set `language` to %NULL to unset the property in the query URI.
         * @param language a new language name, or %NULL
         */
        set_language(language?: string | null): void;
        /**
         * Sets the #GDataYouTubeQuery:license property of the #GDataYouTubeQuery to the new license value, `license`.
         *
         * Set `license` to %NULL to unset the property in the query URI.
         * @param license a new license value, or %NULL
         */
        set_license(license?: string | null): void;
        /**
         * Sets the location-based properties of the #GDataYouTubeQuery&lt;!-- --&gt;: #GDataYouTubeQuery:latitude, #GDataYouTubeQuery:longitude,
         * #GDataYouTubeQuery:location-radius and #GDataYouTubeQuery:has-location.
         * @param latitude the new latitude, or %G_MAXDOUBLE
         * @param longitude the new longitude, or %G_MAXDOUBLE
         * @param radius the new location radius, or &lt;code class="literal"&gt;0&lt;/code&gt;
         * @param has_location %TRUE if the query is for videos with a specific location, %FALSE otherwise
         */
        set_location(latitude: number, longitude: number, radius: number, has_location: boolean): void;
        /**
         * Sets the #GDataYouTubeQuery:order-by property of the #GDataYouTubeQuery to the new order by string, `order_by`.
         *
         * Set `order_by` to %NULL to unset the property in the query URI.
         * @param order_by a new order by string, or %NULL
         */
        set_order_by(order_by?: string | null): void;
        /**
         * Sets the #GDataYouTubeQuery:restriction property of the #GDataYouTubeQuery to the new restriction string, `restriction`.
         *
         * Set `restriction` to %NULL to unset the property in the query URI.
         * @param restriction a new restriction string, or %NULL
         */
        set_restriction(restriction?: string | null): void;
        /**
         * Sets the #GDataYouTubeQuery:safe-search property of the #GDataYouTubeQuery to `safe_search`.
         * @param safe_search a new safe search level
         */
        set_safe_search(safe_search: YouTubeSafeSearch): void;
        /**
         * Sets the #GDataYouTubeQuery:sort-order property of the #GDataYouTubeQuery to `sort_order`.
         *
         * Set `sort_order` to %GDATA_YOUTUBE_SORT_NONE to unset the property in the query URI.
         * @param sort_order the new sort order
         */
        set_sort_order(sort_order: YouTubeSortOrder): void;
        /**
         * Sets the #GDataYouTubeQuery:uploader property of the #GDataYouTubeQuery to `uploader`.
         * @param uploader the new uploader
         */
        set_uploader(uploader: YouTubeUploader): void;
    }

    module YouTubeService {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataYouTubeService structure are private and should never be accessed directly.
     */
    class YouTubeService extends Service {
        // Own properties of GData-0.0.YouTubeService

        /**
         * The developer key your application has registered with the YouTube API. For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/registering_an_application"&gt;online documentation&lt;/ulink&gt;.
         *
         * With the port from v2 to v3 of the YouTube API in libgdata
         * 0.17.0, it might be necessary to update your application’s
         * developer key.
         */
        developer_key: string;
        /**
         * The developer key your application has registered with the YouTube API. For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/registering_an_application"&gt;online documentation&lt;/ulink&gt;.
         *
         * With the port from v2 to v3 of the YouTube API in libgdata
         * 0.17.0, it might be necessary to update your application’s
         * developer key.
         */
        developerKey: string;

        // Constructors of GData-0.0.YouTubeService

        static ['new'](developer_key: string, authorizer?: Authorizer | null): YouTubeService;

        // Owm methods of GData-0.0.YouTubeService

        /**
         * The primary #GDataAuthorizationDomain for interacting with YouTube. This will not normally need to be used, as it's used internally
         * by the #GDataYouTubeService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
         * does not support natively, then this domain may be needed to authorize the requests.
         *
         * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
         */
        static get_primary_authorization_domain(): AuthorizationDomain;

        // Owm methods of GData-0.0.YouTubeService

        /**
         * Finish off a video upload operation started by gdata_youtube_service_upload_video(), parsing the result and returning the new #GDataYouTubeVideo.
         *
         * If an error occurred during the upload operation, it will have been returned during the operation (e.g. by g_output_stream_splice() or one
         * of the other stream methods). In such a case, %NULL will be returned but `error` will remain unset. `error` is only set in the case that the server
         * indicates that the operation was successful, but an error is encountered in parsing the result sent by the server.
         * @param upload_stream the #GDataUploadStream from the operation
         * @returns the new #GDataYouTubeVideo, or %NULL; unref with g_object_unref()
         */
        finish_video_upload(upload_stream: UploadStream): YouTubeVideo;
        /**
         * Gets a list of the categories currently in use on YouTube. The returned #GDataAPPCategories contains a list of #GDataYouTubeCategorys which
         * enumerate the current YouTube categories.
         *
         * The category labels (#GDataCategory:label) are localised based on the value of #GDataService:locale.
         * @param cancellable a #GCancellable, or %NULL
         * @returns a #GDataAPPCategories, or %NULL; unref with g_object_unref()
         */
        get_categories(cancellable?: Gio.Cancellable | null): APPCategories;
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
        get_categories_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous request for a list of categories on YouTube, as started with gdata_youtube_service_get_categories_async().
         * @param async_result a #GAsyncResult
         * @returns a #GDataAPPCategories, or %NULL; unref with g_object_unref()
         */
        get_categories_finish(async_result: Gio.AsyncResult): APPCategories;
        /**
         * Gets the #GDataYouTubeService:developer-key property from the #GDataYouTubeService.
         * @returns the developer key property
         */
        get_developer_key(): string;
        /**
         * Queries the service for videos related to `video`. The algorithm determining which videos are related is on the server side.
         *
         * Parameters and other errors are as for gdata_service_query().
         * @param video a #GDataYouTubeVideo for which to find related videos
         * @param query a #GDataQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @returns a #GDataFeed of query results; unref with g_object_unref()
         */
        query_related(
            video: YouTubeVideo,
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
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
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        query_related_async(
            video: YouTubeVideo,
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
         * @returns a #GDataFeed of query results, or %NULL; unref with g_object_unref()
         */
        query_standard_feed(
            feed_type: YouTubeStandardFeedType,
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
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
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        query_standard_feed_async(
            feed_type: YouTubeStandardFeedType,
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Queries the service for videos matching the parameters set on the #GDataQuery. This searches site-wide, and imposes no other restrictions or
         * parameters on the query.
         *
         * Parameters and errors are as for gdata_service_query().
         * @param query a #GDataQuery with the query parameters, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param progress_callback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
         * @returns a #GDataFeed of query results, or %NULL; unref with g_object_unref()
         */
        query_videos(
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
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
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when authentication is finished
         */
        query_videos_async(
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
         * @returns a #GDataUploadStream to write the video data to, or %NULL; unref with g_object_unref()
         */
        upload_video(
            video: YouTubeVideo,
            slug: string,
            content_type: string,
            cancellable?: Gio.Cancellable | null,
        ): UploadStream;
    }

    module YouTubeState {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataYouTubeState structure are private and should never be accessed directly.
     */
    class YouTubeState extends Parsable {
        // Own properties of GData-0.0.YouTubeState

        /**
         * A URI for a YouTube Help Center page that may help the developer or the video owner to diagnose
         * the reason that an upload failed or was rejected.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state"&gt;online documentation&lt;/ulink&gt;.
         */
        help_uri: string;
        /**
         * A URI for a YouTube Help Center page that may help the developer or the video owner to diagnose
         * the reason that an upload failed or was rejected.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state"&gt;online documentation&lt;/ulink&gt;.
         */
        helpUri: string;
        /**
         * A human-readable description of why the video failed to upload.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state"&gt;online documentation&lt;/ulink&gt;.
         */
        message: string;
        /**
         * The name of the status of the unpublished video. Valid values are: "processing", "restricted", "deleted", "rejected" and "failed".
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state"&gt;online documentation&lt;/ulink&gt;.
         */
        name: string;
        /**
         * The reason code explaining why the video failed to upload.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state"&gt;online documentation&lt;/ulink&gt;.
         */
        reason_code: string;
        /**
         * The reason code explaining why the video failed to upload.
         *
         * For more information, see the
         * &lt;ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state"&gt;online documentation&lt;/ulink&gt;.
         */
        reasonCode: string;

        // Owm methods of GData-0.0.YouTubeState

        /**
         * Gets the #GDataYouTubeState:help-uri property.
         * @returns the help URI, or %NULL
         */
        get_help_uri(): string;
        /**
         * Gets the #GDataYouTubeState:message property.
         * @returns the status message, or %NULL
         */
        get_message(): string;
        /**
         * Gets the #GDataYouTubeState:name property.
         * @returns the status name
         */
        get_name(): string;
        /**
         * Gets the #GDataYouTubeState:reason-code property.
         * @returns the status reason code, or %NULL
         */
        get_reason_code(): string;
    }

    module YouTubeVideo {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GDataYouTubeVideo structure are private and should never be accessed directly.
     */
    class YouTubeVideo extends Entry {
        // Own properties of GData-0.0.YouTubeVideo

        /**
         * The aspect ratio of the video. A %NULL value means the aspect ratio is unknown (it could still be a widescreen video). A value of
         * %GDATA_YOUTUBE_ASPECT_RATIO_WIDESCREEN means the video is definitely widescreen.
         */
        aspect_ratio: string;
        /**
         * The aspect ratio of the video. A %NULL value means the aspect ratio is unknown (it could still be a widescreen video). A value of
         * %GDATA_YOUTUBE_ASPECT_RATIO_WIDESCREEN means the video is definitely widescreen.
         */
        aspectRatio: string;
        /**
         * The average rating of the video, over all the ratings it's received.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly average_rating: number;
        /**
         * The average rating of the video, over all the ratings it's received.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly averageRating: number;
        /**
         * Specifies a genre or developer tag that describes the video.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#snippet.categoryId"&gt;online documentation&lt;/ulink&gt;.
         */
        category: MediaCategory;
        /**
         * Identifies the owner of the video.
         */
        readonly credit: YouTubeCredit;
        /**
         * A summary or description of the video.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#snippet.description"&gt;online documentation&lt;/ulink&gt;.
         */
        description: string;
        /**
         * The duration of the video in seconds.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#contentDetails.duration"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly duration: number;
        /**
         * The number of users who have added the video to their favorites.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#statistics.favoriteCount"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly favorite_count: number;
        /**
         * The number of users who have added the video to their favorites.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#statistics.favoriteCount"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly favoriteCount: number;
        /**
         * Indicates whether the video is in draft, or unpublished, status.
         */
        is_draft: boolean;
        /**
         * Indicates whether the video is in draft, or unpublished, status.
         */
        isDraft: boolean;
        is_private: boolean;
        isPrivate: boolean;
        /**
         * A %NULL-terminated array of words associated with the video.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#snippet.tags[]"&gt;online documentation&lt;/ulink&gt;.
         */
        keywords: string[];
        /**
         * The location as a latitude coordinate associated with this video. Valid latitudes range from &lt;code class="literal"&gt;-90.0&lt;/code&gt;
         * to &lt;code class="literal"&gt;90.0&lt;/code&gt; inclusive. Set to a value
         * outside this range to unset the location.
         *
         * For more information, see the
         * &lt;ulink type="http" url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.location.latitude"&gt;
         * online documentation&lt;/ulink&gt;.
         */
        latitude: number;
        /**
         * Descriptive text about the location where the video was taken.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.locationDescription"&gt;online documentation&lt;/ulink&gt;.
         */
        location: string;
        /**
         * The location as a longitude coordinate associated with this video. Valid longitudes range from &lt;code class="literal"&gt;-180.0&lt;/code&gt;
         * to &lt;code class="literal"&gt;180.0&lt;/code&gt; inclusive. Set to a value
         * outside this range to unset the location.
         *
         * For more information, see the
         * &lt;ulink type="http" url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.location.longitude"&gt;
         * online documentation&lt;/ulink&gt;.
         */
        longitude: number;
        /**
         * The maximum allowed rating for the video.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly max_rating: number;
        /**
         * The maximum allowed rating for the video.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly maxRating: number;
        /**
         * The minimum allowed rating for the video.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly min_rating: number;
        /**
         * The minimum allowed rating for the video.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly minRating: number;
        /**
         * A URI for a browser-based media player for the full-length video (i.e. the video's page on YouTube).
         */
        readonly player_uri: string;
        /**
         * A URI for a browser-based media player for the full-length video (i.e. the video's page on YouTube).
         */
        readonly playerUri: string;
        /**
         * The number of times the video has been rated.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly rating_count: number;
        /**
         * The number of times the video has been rated.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly ratingCount: number;
        /**
         * Specifies the time the video was originally recorded.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.recordingDate"&gt;online documentation&lt;/ulink&gt;.
         */
        recorded: number;
        /**
         * Information describing the state of the video. If this is non-%NULL, the video is not playable.
         * It points to a #GDataYouTubeState.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#status.uploadStatus"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly state: YouTubeState;
        /**
         * Specifies the time the video was originally uploaded to YouTube.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#snippet.publishedAt"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly uploaded: number;
        /**
         * Specifies a unique ID which YouTube uses to identify the video. For example: &lt;literal&gt;qz8EfkS4KK0&lt;/literal&gt;.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#id"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly video_id: string;
        /**
         * Specifies a unique ID which YouTube uses to identify the video. For example: &lt;literal&gt;qz8EfkS4KK0&lt;/literal&gt;.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#id"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly videoId: string;
        /**
         * The number of times the video has been viewed.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#statistics.viewCount"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly view_count: number;
        /**
         * The number of times the video has been viewed.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#statistics.viewCount"&gt;online documentation&lt;/ulink&gt;.
         */
        readonly viewCount: number;

        // Constructors of GData-0.0.YouTubeVideo

        static ['new'](id?: string | null): YouTubeVideo;

        // Owm methods of GData-0.0.YouTubeVideo

        /**
         * Extracts a video ID from a YouTube video player URI. The video ID is in the same form as returned by
         * gdata_youtube_video_get_video_id(), and the `video_uri` should be in the same form as returned by
         * gdata_youtube_video_get_player_uri().
         *
         * The function will validate whether the URI actually points to a hostname containing &lt;literal&gt;youtube&lt;/literal&gt;
         * (e.g. &lt;literal&gt;youtube.com&lt;/literal&gt;), and will return %NULL if it doesn't.
         *
         * For example:
         * &lt;informalexample&gt;&lt;programlisting&gt;
         * video_id = gdata_youtube_video_get_video_id_from_uri ("http://www.youtube.com/watch?v=BH_vwsyCrTc&amp;feature=featured");
         * g_message ("Video ID: %s", video_id); /&lt;!-- --&gt;* Should print: BH_vwsyCrTc *&lt;!-- --&gt;/
         * g_free (video_id);
         * &lt;/programlisting&gt;&lt;/informalexample&gt;
         * @param video_uri a YouTube video player URI
         */
        static get_video_id_from_uri(video_uri: string): string;

        // Owm methods of GData-0.0.YouTubeVideo

        /**
         * Gets the permission associated with the given `action` on the #GDataYouTubeVideo. If the given `action`
         * doesn't have a permission set on the video, %GDATA_YOUTUBE_PERMISSION_DENIED is returned.
         * @param action the action whose permission should be returned
         * @returns the permission associated with @action, or %GDATA_YOUTUBE_PERMISSION_DENIED
         */
        get_access_control(action: string): YouTubePermission;
        /**
         * Gets the #GDataYouTubeVideo:aspect-ratio property.
         * @returns the aspect ratio property, or %NULL
         */
        get_aspect_ratio(): string;
        /**
         * Gets the #GDataYouTubeVideo:category property.
         * @returns a #GDataMediaCategory giving the video's single and mandatory category
         */
        get_category(): MediaCategory;
        /**
         * Gets the #GDataYouTubeVideo:latitude and #GDataYouTubeVideo:longitude properties, setting the out parameters to them. If either latitude or
         * longitude is %NULL, that parameter will not be set. If the coordinates are unset, `latitude` and `longitude` will be set to %G_MAXDOUBLE.
         */
        get_coordinates(): void;
        /**
         * Gets the #GDataYouTubeVideo:credit property.
         * @returns a #GDataMediaCredit giving information on whom to credit for the video, or %NULL
         */
        get_credit(): YouTubeCredit;
        /**
         * Gets the #GDataYouTubeVideo:description property.
         * @returns the video's long text description, or %NULL
         */
        get_description(): string;
        /**
         * Gets the #GDataYouTubeVideo:duration property.
         * @returns the video duration in seconds, or &lt;code class="literal"&gt;0&lt;/code&gt; if unknown
         */
        get_duration(): number;
        /**
         * Gets the #GDataYouTubeVideo:favorite-count property.
         * @returns the number of users who have added the video to their favorites list
         */
        get_favorite_count(): number;
        /**
         * Gets the #GDataYouTubeVideo:keywords property.
         * @returns a %NULL-terminated array of words associated with the video
         */
        get_keywords(): string[];
        /**
         * Gets the #GDataYouTubeVideo:location property.
         * @returns a string describing the video's location, or %NULL
         */
        get_location(): string;
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
         * @returns the rating of the video for the given @rating_type, or %NULL if the video isn't rated with that type (or the type is unknown)
         */
        get_media_rating(rating_type: string): string;
        /**
         * Gets the #GDataYouTubeVideo:player-uri property.
         * @returns a URI where the video is playable in a web browser, or %NULL
         */
        get_player_uri(): string;
        /**
         * Gets various properties of the ratings on the video.
         *
         * Note that this property may not be retrieved when querying for multiple
         * videos at once, but is guaranteed to be retrieved when querying with
         * gdata_service_query_single_entry_async().
         */
        get_rating(): void;
        /**
         * Gets the #GDataYouTubeVideo:recorded property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the time the video was recorded, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_recorded(): number;
        /**
         * Gets the #GDataYouTubeVideo:state property.
         *
         * For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#status.uploadStatus"&gt;online documentation&lt;/ulink&gt;.
         * @returns a #GDataYouTubeState showing the state of the video, or %NULL
         */
        get_state(): YouTubeState;
        /**
         * Gets a list of the thumbnails available for the video.
         * @returns a #GList of #GDataMediaThumbnails, or %NULL
         */
        get_thumbnails(): MediaThumbnail[];
        /**
         * Gets the #GDataYouTubeVideo:uploaded property. If the property is unset, &lt;code class="literal"&gt;-1&lt;/code&gt; will be returned.
         * @returns the UNIX timestamp for the time the video was uploaded, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        get_uploaded(): number;
        /**
         * Gets the #GDataYouTubeVideo:video-id property.
         * @returns the video's unique and permanent ID
         */
        get_video_id(): string;
        /**
         * Gets the #GDataYouTubeVideo:view-count property.
         * @returns the number of times the video has been viewed
         */
        get_view_count(): number;
        /**
         * Checks whether viewing of the video is restricted in `country,` either by its content rating, or by the request of the producer.
         * The return value from this function is purely informational, and no obligation is assumed.
         * @param country an ISO 3166 two-letter country code to check
         * @returns %TRUE if the video is restricted in @country, %FALSE otherwise
         */
        is_restricted_in_country(country: string): boolean;
        /**
         * Looks up a #GDataYouTubeContent from the video with the given MIME type. The video's list of contents is
         * a list of URIs to various formats of the video itself, such as its SWF URI or RTSP stream.
         * @param type the MIME type of the content desired
         * @returns a #GDataYouTubeContent matching @type, or %NULL
         */
        look_up_content(type: string): YouTubeContent;
        /**
         * Sets the permission associated with `action` on the #GDataYouTubeVideo, allowing restriction or derestriction of various
         * operations on YouTube videos.
         *
         * Note that only %GDATA_YOUTUBE_ACTION_RATE and %GDATA_YOUTUBE_ACTION_COMMENT actions can have the %GDATA_YOUTUBE_PERMISSION_MODERATED permission.
         * @param action the action whose permission is being set
         * @param permission the permission to give to the action
         */
        set_access_control(action: string, permission: YouTubePermission): void;
        /**
         * Sets the #GDataYouTubeVideo:aspect-ratio property to specify the video's aspect ratio.
         * If `aspect_ratio` is %NULL, the property will be unset.
         * @param aspect_ratio the aspect ratio property, or %NULL
         */
        set_aspect_ratio(aspect_ratio?: string | null): void;
        /**
         * Sets the #GDataYouTubeVideo:category property to the new category, `category,` and increments its reference count.
         *
         * `category` must not be %NULL. For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#snippet.categoryId"&gt;online documentation&lt;/ulink&gt;.
         * @param category a new #GDataMediaCategory
         */
        set_category(category: MediaCategory): void;
        /**
         * Sets the #GDataYouTubeVideo:latitude and #GDataYouTubeVideo:longitude properties to `latitude` and `longitude` respectively.
         * @param latitude the video's new latitude coordinate, or %G_MAXDOUBLE
         * @param longitude the video's new longitude coordinate, or %G_MAXDOUBLE
         */
        set_coordinates(latitude: number, longitude: number): void;
        /**
         * Sets the #GDataYouTubeVideo:description property to the new description, `description`.
         *
         * Set `description` to %NULL to unset the video's description.
         * @param description the video's new description, or %NULL
         */
        set_description(description?: string | null): void;
        /**
         * Sets the #GDataYouTubeVideo:is-draft property to decide whether the video is a draft.
         * @param is_draft whether the video is a draft
         */
        set_is_draft(is_draft: boolean): void;
        /**
         * Sets the #GDataYouTubeVideo:is-private property to decide whether the video is publicly viewable.
         * @param is_private whether the video is private
         */
        set_is_private(is_private: boolean): void;
        /**
         * Sets the #GDataYouTubeVideo:keywords property to the new keyword list, `keywords`.
         *
         * `keywords` must not be %NULL. For more information, see the &lt;ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#snippet.tags[]"&gt;online documentation&lt;/ulink&gt;.
         * @param keywords a new %NULL-terminated array of keywords
         */
        set_keywords(keywords: string[]): void;
        /**
         * Sets the #GDataYouTubeVideo:location property to the new location string, `location`.
         *
         * Set `location` to %NULL to unset the property in the video.
         * @param location a new location, or %NULL
         */
        set_location(location?: string | null): void;
        /**
         * Sets the #GDataYouTubeVideo:recorded property to the new recorded time, `recorded`.
         *
         * Set `recorded` to &lt;code class="literal"&gt;-1&lt;/code&gt; to unset the video's recorded time.
         * @param recorded the video's new recorded time, or &lt;code class="literal"&gt;-1&lt;/code&gt;
         */
        set_recorded(recorded: number): void;
    }

    /**
     * All the fields in the #GDataAPPCategoriesClass structure are private and should never be accessed directly.
     */
    class APPCategoriesClass {}

    class APPCategoriesPrivate {}

    /**
     * The class structure for the #GDataAccessHandler interface.
     */
    class AccessHandlerIface {}

    /**
     * All the fields in the #GDataAccessRuleClass structure are private and should never be accessed directly.
     */
    class AccessRuleClass {}

    class AccessRulePrivate {}

    /**
     * All the fields in the #GDataAuthorClass structure are private and should never be accessed directly.
     */
    class AuthorClass {}

    class AuthorPrivate {}

    /**
     * All the fields in the #GDataAuthorizationDomainClass structure are private and should never be accessed directly.
     */
    class AuthorizationDomainClass {}

    class AuthorizationDomainPrivate {}

    /**
     * The class structure for the #GDataAuthorizer interface.
     */
    class AuthorizerInterface {}

    /**
     * All the fields in the #GDataBatchOperationClass structure are private and should never be accessed directly.
     */
    class BatchOperationClass {}

    class BatchOperationPrivate {}

    /**
     * All the fields in the #GDataBatchableIface structure are private and should never be accessed directly.
     */
    class BatchableIface {}

    /**
     * All the fields in the #GDataCalendarAccessRuleClass structure are private
     * and should never be accessed directly.
     */
    class CalendarAccessRuleClass {}

    /**
     * All the fields in the #GDataCalendarCalendarClass structure are private and should never be accessed directly.
     */
    class CalendarCalendarClass {}

    class CalendarCalendarPrivate {}

    /**
     * All the fields in the #GDataCalendarEventClass structure are private and should never be accessed directly.
     */
    class CalendarEventClass {}

    class CalendarEventPrivate {}

    /**
     * All the fields in the #GDataCalendarFeedClass structure are private and should never be accessed directly.
     */
    class CalendarFeedClass {}

    class CalendarFeedPrivate {}

    /**
     * All the fields in the #GDataCalendarQueryClass structure are private and should never be accessed directly.
     */
    class CalendarQueryClass {}

    class CalendarQueryPrivate {}

    /**
     * All the fields in the #GDataCalendarServiceClass structure are private and should never be accessed directly.
     */
    class CalendarServiceClass {}

    class CalendarServicePrivate {}

    /**
     * All the fields in the #GDataCategoryClass structure are private and should never be accessed directly.
     */
    class CategoryClass {}

    class CategoryPrivate {}

    /**
     * All the fields in the #GDataClientLoginAuthorizerClass structure are private and should never be accessed directly.
     */
    class ClientLoginAuthorizerClass {}

    class ClientLoginAuthorizerPrivate {}

    /**
     * Describes a color, such as used in the Google Calendar interface to
     * differentiate calendars.
     */
    class Color {
        // Own fields of GData-0.0.Color

        red: number;
        green: number;
        blue: number;

        // Constructors of GData-0.0.Color

        constructor(
            properties?: Partial<{
                red: number;
                green: number;
                blue: number;
            }>,
        );

        // Owm methods of GData-0.0.Color

        /**
         * Parses `hexadecimal` and returns a #GDataColor describing it in `color`.
         *
         * `hexadecimal` should be in the form &lt;literal&gt;#&lt;replaceable&gt;rr&lt;/replaceable&gt;&lt;replaceable&gt;gg&lt;/replaceable&gt;&lt;replaceable&gt;bb&lt;/replaceable&gt;&lt;/literal&gt;,
         * where &lt;replaceable&gt;rr&lt;/replaceable&gt; is a two-digit hexadecimal red intensity value, &lt;replaceable&gt;gg&lt;/replaceable&gt; is green
         * and &lt;replaceable&gt;bb&lt;/replaceable&gt; is blue. The hash is optional.
         * @param hexadecimal a hexadecimal color string
         */
        static from_hexadecimal(hexadecimal: string): boolean;

        // Owm methods of GData-0.0.Color

        /**
         * Returns a string describing `color` in hexadecimal form; in the form &lt;literal&gt;#&lt;replaceable&gt;rr&lt;/replaceable&gt;&lt;replaceable&gt;gg&lt;/replaceable&gt;
         * &lt;replaceable&gt;bb&lt;/replaceable&gt;&lt;/literal&gt;, where &lt;replaceable&gt;rr&lt;/replaceable&gt; is a two-digit hexadecimal red intensity value,
         * &lt;replaceable&gt;gg&lt;/replaceable&gt; is green and &lt;replaceable&gt;bb&lt;/replaceable&gt; is blue. The hash is always present.
         * @returns the color string; free with g_free()
         */
        to_hexadecimal(): string;
    }

    /**
     * All the fields in the #GDataCommentClass structure are private and should never be accessed directly.
     */
    class CommentClass {}

    class CommentPrivate {}

    /**
     * The interface structure for the #GDataCommentable interface.
     */
    class CommentableInterface {
        // Own fields of GData-0.0.CommentableInterface

        comment_type: GObject.GType;
    }

    /**
     * The class structure for the #GDataComparable interface.
     */
    class ComparableIface {}

    /**
     * All the fields in the #GDataContactsContactClass structure are private and should never be accessed directly.
     */
    class ContactsContactClass {}

    class ContactsContactPrivate {}

    /**
     * All the fields in the #GDataContactsGroupClass structure are private and should never be accessed directly.
     */
    class ContactsGroupClass {}

    class ContactsGroupPrivate {}

    /**
     * All the fields in the #GDataContactsQueryClass structure are private and should never be accessed directly.
     */
    class ContactsQueryClass {}

    class ContactsQueryPrivate {}

    /**
     * All the fields in the #GDataContactsServiceClass structure are private and should never be accessed directly.
     */
    class ContactsServiceClass {}

    class ContactsServicePrivate {}

    /**
     * All the fields in the #GDataDocumentsAccessRuleClass structure are private
     * and should never be accessed directly.
     */
    class DocumentsAccessRuleClass {}

    /**
     * All the fields in the #GDataDocumentsDocumentClass structure are private and should never be accessed directly.
     */
    class DocumentsDocumentClass {}

    class DocumentsDocumentPrivate {}

    /**
     * All the fields in the #GDataDocumentsDrawingClass structure are private and should never be accessed directly.
     */
    class DocumentsDrawingClass {}

    class DocumentsDrawingPrivate {}

    /**
     * All the fields in the #GDataDocumentsDriveClass structure are private and should never be accessed directly.
     */
    class DocumentsDriveClass {}

    /**
     * All the fields in the #GDataDocumentsDriveQueryClass structure are private and should never be accessed directly.
     */
    class DocumentsDriveQueryClass {}

    /**
     * All the fields in the #GDataDocumentsEntryClass structure are private and should never be accessed directly.
     */
    class DocumentsEntryClass {}

    class DocumentsEntryPrivate {}

    /**
     * All the fields in the #GDataDocumentsFeedClass structure are private and should never be accessed directly.
     */
    class DocumentsFeedClass {}

    class DocumentsFeedPrivate {}

    /**
     * All the fields in the #GDataDocumentsFolderClass structure are private and should never be accessed directly.
     */
    class DocumentsFolderClass {}

    class DocumentsFolderPrivate {}

    /**
     * All the fields in the #GDataDocumentsMetadataClass structure are private and should never be accessed directly.
     */
    class DocumentsMetadataClass {}

    class DocumentsMetadataPrivate {}

    /**
     * All the fields in the #GDataDocumentsPdfClass structure are private and should never be accessed directly.
     */
    class DocumentsPdfClass {}

    class DocumentsPdfPrivate {}

    /**
     * All the fields in the #GDataDocumentsPresentationClass structure are private and should never be accessed directly.
     */
    class DocumentsPresentationClass {}

    class DocumentsPresentationPrivate {}

    /**
     * All the fields in the #GDataDocumentsPropertyClass structure are private and should never be accessed directly.
     */
    class DocumentsPropertyClass {}

    class DocumentsPropertyPrivate {}

    /**
     * All the fields in the #GDataDocumentsQueryClass structure are private and should never be accessed directly.
     */
    class DocumentsQueryClass {}

    class DocumentsQueryPrivate {}

    /**
     * All the fields in the #GDataDocumentsServiceClass structure are private and should never be accessed directly.
     */
    class DocumentsServiceClass {}

    class DocumentsServicePrivate {}

    /**
     * All the fields in the #GDataDocumentsSpreadsheetClass structure are private and should never be accessed directly.
     */
    class DocumentsSpreadsheetClass {}

    class DocumentsSpreadsheetPrivate {}

    /**
     * All the fields in the #GDataDocumentsTextClass structure are private and should never be accessed directly.
     */
    class DocumentsTextClass {}

    class DocumentsTextPrivate {}

    /**
     * All the fields in the #GDataDocumentsUploadQueryClass structure are private and should never be accessed directly.
     */
    class DocumentsUploadQueryClass {}

    class DocumentsUploadQueryPrivate {}

    /**
     * All the fields in the #GDataDownloadStreamClass structure are private and should never be accessed directly.
     */
    class DownloadStreamClass {}

    class DownloadStreamPrivate {}

    /**
     * The class structure for the #GDataEntry type.
     */
    class EntryClass {
        // Own fields of GData-0.0.EntryClass

        kind_term: string;
    }

    class EntryPrivate {}

    /**
     * All the fields in the #GDataFeedClass structure are private and should never be accessed directly.
     */
    class FeedClass {}

    class FeedPrivate {}

    /**
     * All the fields in the #GDataFreebaseQueryClass structure are private and should never be accessed directly.
     */
    class FreebaseQueryClass {}

    class FreebaseQueryPrivate {}

    /**
     * All the fields in the #GDataFreebaseResultClass structure are private and should never be accessed directly.
     */
    class FreebaseResultClass {}

    class FreebaseResultPrivate {}

    /**
     * All the fields in the #GDataFreebaseSearchQueryClass structure are private and should never be accessed directly.
     */
    class FreebaseSearchQueryClass {}

    class FreebaseSearchQueryPrivate {}

    /**
     * All the fields in the #GDataFreebaseSearchResultClass structure are private and should never be accessed directly.
     */
    class FreebaseSearchResultClass {}

    /**
     * Opaque struct holding data for a single search result item.
     */
    class FreebaseSearchResultItem {
        // Owm methods of GData-0.0.FreebaseSearchResultItem

        /**
         * Returns the Freebase ID of the search result item.
         * @returns The search result item Freebase ID.
         */
        get_id(): string;
        /**
         * Gets the language of this search result item, in ISO-639-1 format.
         * @returns The language of the search result item.
         */
        get_language(): string;
        /**
         * Returns the machine-encoded ID (MID) of the search result item. Elements may
         * have a single MID, as opposed to the potentially multiple Freebase IDs that
         * may point to it. MIDs are usable interchangeably with Freebase IDs.
         * @returns The result item MID.
         */
        get_mid(): string;
        /**
         * Returns the human readable name of the search result item.
         * @returns The human readable name of the item.
         */
        get_name(): string;
        /**
         * If this search result item is notable in an specific topic, this function
         * returns the Freebase ID of this topic.
         * @returns The topic the result item is most notable of, or %NULL.
         */
        get_notable_id(): string | null;
        /**
         * If this search result item is notable in an specific topic, this function
         * returns the human readable name of this topic.
         * @returns The human readable topic name, or %NULL
         */
        get_notable_name(): string | null;
        /**
         * Returns the score of this search result item. The higher, the more relevant this
         * item seems, given the search terms.
         * @returns the result item score.
         */
        get_score(): number;
    }

    class FreebaseSearchResultPrivate {}

    /**
     * All the fields in the #GDataFreebaseServiceClass structure are private and should never be accessed directly.
     */
    class FreebaseServiceClass {}

    class FreebaseServicePrivate {}

    /**
     * Opaque struct containing a Freebase topic object. This object may contain one or more
     * #GDataFreebaseTopicValue structs, which may in turn contain nested #GDataFreebaseTopicObject
     * structs to express complex data.
     */
    class FreebaseTopicObject {
        // Owm methods of GData-0.0.FreebaseTopicObject

        /**
         * Gets the Freebase ID for this specific object.
         * @returns the Freebase ID of this object
         */
        get_id(): string;
        /**
         * Returns the number of values that `object` holds for the given `property`. If `object`
         * contains no information about `property,` 0 is returned.
         * @param property a property name contained in @object
         * @returns The number of values contained for @property
         */
        get_property_count(property: string): number;
        /**
         * Returns the total number of hits that the Freebase database stores
         * for this object, this number either equals or is greater than
         * gdata_freebase_topic_object_get_property_count(), the query limit
         * can be controlled through gdata_query_set_max_results() on the topic
         * query.
         *
         * If `object` contains no information about `property,` 0 is returned.
         * @param property a property name contained in @object
         * @returns the total number of hits for this property
         */
        get_property_hits(property: string): number;
        /**
         * Gets the value that `object` stores for this `property/``item` pair, as a generic
         * #GDataFreebaseTopicValue. If `object` contains no information about `property,`
         * or `item` is outside the [0..gdata_freebase_topic_object_get_property_count() - 1]
         * range, %NULL is returned.
         * @param property a property name contained in @object
         * @param item item number to retrieve from @property
         * @returns the value for this property/item
         */
        get_property_value(property: string, item: number): FreebaseTopicValue | null;
        /**
         * Returns the list of Freebase properties described by `object`.
         * @returns An array of property names, free with g_ptr_array_unref().
         */
        list_properties(): string[];
        /**
         * Creates and returns a new reference on `object`.
         * @returns @object, with an extra reference.
         */
        ref(): FreebaseTopicObject;
        /**
         * Removes a reference from `object`. If the reference count drops to 0,
         * the object is freed.
         */
        unref(): void;
    }

    /**
     * All the fields in the #GDataFreebaseTopicQueryClass structure are private and should never be accessed directly.
     */
    class FreebaseTopicQueryClass {}

    class FreebaseTopicQueryPrivate {}

    /**
     * All the fields in the #GDataFreebaseTopicResultClass structure are private and should never be accessed directly.
     */
    class FreebaseTopicResultClass {}

    class FreebaseTopicResultPrivate {}

    /**
     * Opaque struct containing a value of a Freebase topic object. This struct may contain a simple
     * value (integers, doubles, strings...) or complex values, expressed through a #GDataFreebaseTopicObject.
     */
    class FreebaseTopicValue {
        // Owm methods of GData-0.0.FreebaseTopicValue

        /**
         * Copies in `gvalue` the value held in `value`. the #GValue must be later freed through g_value_unset()
         */
        copy_value(): void;
        /**
         * Returns the Freebase ID of the user that created this value.
         * @returns the creator of this value, as a Freebase ID
         */
        get_creator(): string;
        /**
         * Returns a #gdouble value held in `value`. It is only valid to call this if the #GType is a %G_TYPE_DOUBLE
         * @returns the #gdouble value
         */
        get_double(): number;
        /**
         * Returns a #gint64 value held in `value`. It is only valid to call this if the #GType is a %G_TYPE_INT64
         * @returns the #gint64 value
         */
        get_int(): number;
        /**
         * Returns the language used in the content of `value`
         * @returns the language @value is written in
         */
        get_language(): string;
        /**
         * Returns a compound/complex object held in `value`. It is only valid to call this if the #GType is a
         * %GDATA_TYPE_FREEBASE_TOPIC_OBJECT.
         * @returns the compound value as a #GDataFreebaseTopicObject
         */
        get_object(): FreebaseTopicObject;
        /**
         * Returns the property name that this value describes
         * @returns the property name of @value
         */
        get_property(): string;
        /**
         * Returns a string value held in `value`. It is only valid to call this if the #GType is a %G_TYPE_STRING
         * @returns the string value
         */
        get_string(): string;
        /**
         * Returns a textual representation of this value, this is either
         * the value contained transformed to a string, or a concatenation
         * of subvalues for compound types.
         * @returns a textual representation of @value
         */
        get_text(): string;
        /**
         * Returns the time at which this value was created in the Freebase database.
         * It's a UNIX timestamp in seconds since the epoch. If `value` has no timestamp,
         * -1 will be returned.
         * @returns The creation time of @value, or -1
         */
        get_timestamp(): number;
        /**
         * Returns the #GType of the real value held in `value`.
         * @returns the #GType of the contained value
         */
        get_value_type(): GObject.GType;
        /**
         * Returns true if `value` holds a freebase image object, on such values it
         * will be valid to call gdata_freebase_service_get_image() to get a stream
         * to the image itself.
         * @returns Whether @value holds a Freebase image object
         */
        is_image(): boolean;
        /**
         * Creates and returns a new reference on `value`.
         * @returns @value, with an extra reference.
         */
        ref(): FreebaseTopicValue;
        /**
         * Removes a reference from `value`. If the reference count drops to 0,
         * the object is freed.
         */
        unref(): void;
    }

    /**
     * All the fields in the #GDataGContactCalendarClass structure are private and should never be accessed directly.
     */
    class GContactCalendarClass {}

    class GContactCalendarPrivate {}

    /**
     * All the fields in the #GDataGContactEventClass structure are private and should never be accessed directly.
     */
    class GContactEventClass {}

    class GContactEventPrivate {}

    /**
     * All the fields in the #GDataGContactExternalIDClass structure are private and should never be accessed directly.
     */
    class GContactExternalIDClass {}

    class GContactExternalIDPrivate {}

    /**
     * All the fields in the #GDataGContactJotClass structure are private and should never be accessed directly.
     */
    class GContactJotClass {}

    class GContactJotPrivate {}

    /**
     * All the fields in the #GDataGContactLanguageClass structure are private and should never be accessed directly.
     */
    class GContactLanguageClass {}

    class GContactLanguagePrivate {}

    /**
     * All the fields in the #GDataGContactRelationClass structure are private and should never be accessed directly.
     */
    class GContactRelationClass {}

    class GContactRelationPrivate {}

    /**
     * All the fields in the #GDataGContactWebsiteClass structure are private and should never be accessed directly.
     */
    class GContactWebsiteClass {}

    class GContactWebsitePrivate {}

    /**
     * All the fields in the #GDataGDEmailAddressClass structure are private and should never be accessed directly.
     */
    class GDEmailAddressClass {}

    class GDEmailAddressPrivate {}

    /**
     * All the fields in the #GDataGDIMAddressClass structure are private and should never be accessed directly.
     */
    class GDIMAddressClass {}

    class GDIMAddressPrivate {}

    /**
     * All the fields in the #GDataGDNameClass structure are private and should never be accessed directly.
     */
    class GDNameClass {}

    class GDNamePrivate {}

    /**
     * All the fields in the #GDataGDOrganizationClass structure are private and should never be accessed directly.
     */
    class GDOrganizationClass {}

    class GDOrganizationPrivate {}

    /**
     * All the fields in the #GDataGDPhoneNumberClass structure are private and should never be accessed directly.
     */
    class GDPhoneNumberClass {}

    class GDPhoneNumberPrivate {}

    /**
     * All the fields in the #GDataGDPostalAddressClass structure are private and should never be accessed directly.
     */
    class GDPostalAddressClass {}

    class GDPostalAddressPrivate {}

    /**
     * All the fields in the #GDataGDReminderClass structure are private and should never be accessed directly.
     */
    class GDReminderClass {}

    class GDReminderPrivate {}

    /**
     * All the fields in the #GDataGDWhenClass structure are private and should never be accessed directly.
     */
    class GDWhenClass {}

    class GDWhenPrivate {}

    /**
     * All the fields in the #GDataGDWhereClass structure are private and should never be accessed directly.
     */
    class GDWhereClass {}

    class GDWherePrivate {}

    /**
     * All the fields in the #GDataGDWhoClass structure are private and should never be accessed directly.
     */
    class GDWhoClass {}

    class GDWhoPrivate {}

    /**
     * All the fields in the #GDataGeneratorClass structure are private and should never be accessed directly.
     */
    class GeneratorClass {}

    class GeneratorPrivate {}

    /**
     * All the fields in the #GDataGoaAuthorizerClass structure are private and should never be accessed directly.
     */
    class GoaAuthorizerClass {}

    class GoaAuthorizerPrivate {}

    /**
     * All the fields in the #GDataLinkClass structure are private and should never be accessed directly.
     */
    class LinkClass {}

    class LinkPrivate {}

    /**
     * All the fields in the #GDataMediaCategoryClass structure are private and should never be accessed directly.
     */
    class MediaCategoryClass {}

    class MediaCategoryPrivate {}

    /**
     * All the fields in the #GDataMediaContentClass structure are private and should never be accessed directly.
     */
    class MediaContentClass {}

    class MediaContentPrivate {}

    /**
     * All the fields in the #GDataMediaCreditClass structure are private and should never be accessed directly.
     */
    class MediaCreditClass {}

    class MediaCreditPrivate {}

    /**
     * All the fields in the #GDataMediaThumbnailClass structure are private and should never be accessed directly.
     */
    class MediaThumbnailClass {}

    class MediaThumbnailPrivate {}

    /**
     * All the fields in the #GDataOAuth1AuthorizerClass structure are private and should never be accessed directly.
     */
    class OAuth1AuthorizerClass {}

    class OAuth1AuthorizerPrivate {}

    /**
     * All the fields in the #GDataOAuth2AuthorizerClass structure are private and should never be accessed directly.
     */
    class OAuth2AuthorizerClass {}

    class OAuth2AuthorizerPrivate {}

    /**
     * The class structure for the #GDataParsable class. Note that JSON and XML functions are mutually exclusive:
     * a given implementation of #GDataParsable is represented as exactly one of JSON and XML.
     */
    class ParsableClass {
        // Own fields of GData-0.0.ParsableClass

        element_name: string;
        element_namespace: string;
    }

    class ParsablePrivate {}

    /**
     * All the fields in the #GDataPicasaWebAlbumClass structure are private and should never be accessed directly.
     */
    class PicasaWebAlbumClass {}

    class PicasaWebAlbumPrivate {}

    /**
     * All the fields in the #GDataPicasaWebCommentClass structure are private and should never be accessed directly.
     */
    class PicasaWebCommentClass {}

    class PicasaWebCommentPrivate {}

    /**
     * All the fields in the #GDataPicasaWebFeedClass structure are private and should never be accessed directly.
     */
    class PicasaWebFeedClass {}

    /**
     * All the fields in the #GDataPicasaWebFileClass structure are private and should never be accessed directly.
     */
    class PicasaWebFileClass {}

    class PicasaWebFilePrivate {}

    /**
     * All the fields in the #GDataPicasaWebQueryClass structure are private and should never be accessed directly.
     */
    class PicasaWebQueryClass {}

    class PicasaWebQueryPrivate {}

    /**
     * All the fields in the #GDataPicasaWebServiceClass structure are private and should never be accessed directly.
     */
    class PicasaWebServiceClass {}

    /**
     * All the fields in the #GDataPicasaWebUserClass structure are private and should never be accessed directly.
     */
    class PicasaWebUserClass {}

    class PicasaWebUserPrivate {}

    /**
     * All the fields in the #GDataQueryClass structure are private and should never be accessed directly.
     */
    class QueryClass {}

    class QueryPrivate {}

    /**
     * The class structure for the #GDataService type.
     */
    class ServiceClass {
        // Own fields of GData-0.0.ServiceClass

        api_version: string;
        feed_type: GObject.GType;
    }

    class ServicePrivate {}

    /**
     * All the fields in the #GDataTasksQueryClass structure are private and should never be accessed directly.
     */
    class TasksQueryClass {}

    class TasksQueryPrivate {}

    /**
     * All the fields in the #GDataTasksServiceClass structure are private and should never be accessed directly.
     */
    class TasksServiceClass {}

    /**
     * All the fields in the #GDataTasksTaskClass structure are private and should never be accessed directly.
     */
    class TasksTaskClass {}

    class TasksTaskPrivate {}

    /**
     * All the fields in the #GDataTasksTasklistClass structure are private and should never be accessed directly.
     */
    class TasksTasklistClass {}

    /**
     * All the fields in the #GDataUploadStreamClass structure are private and should never be accessed directly.
     */
    class UploadStreamClass {}

    class UploadStreamPrivate {}

    /**
     * All the fields in the #GDataYouTubeCategoryClass structure are private and should never be accessed directly.
     */
    class YouTubeCategoryClass {}

    class YouTubeCategoryPrivate {}

    /**
     * All the fields in the #GDataYouTubeCommentClass structure are private and should never be accessed directly.
     */
    class YouTubeCommentClass {}

    class YouTubeCommentPrivate {}

    /**
     * All the fields in the #GDataYouTubeContentClass structure are private and should never be accessed directly.
     */
    class YouTubeContentClass {}

    class YouTubeContentPrivate {}

    /**
     * All the fields in the #GDataYouTubeCreditClass structure are private and should never be accessed directly.
     */
    class YouTubeCreditClass {}

    class YouTubeCreditPrivate {}

    /**
     * All the fields in the #GDataYouTubeFeedClass structure are private and should
     * never be accessed directly.
     */
    class YouTubeFeedClass {}

    class YouTubeFeedPrivate {}

    /**
     * All the fields in the #GDataYouTubeQueryClass structure are private and should never be accessed directly.
     */
    class YouTubeQueryClass {}

    class YouTubeQueryPrivate {}

    /**
     * All the fields in the #GDataYouTubeServiceClass structure are private and should never be accessed directly.
     */
    class YouTubeServiceClass {}

    class YouTubeServicePrivate {}

    /**
     * All the fields in the #GDataYouTubeStateClass structure are private and should never be accessed directly.
     */
    class YouTubeStateClass {}

    class YouTubeStatePrivate {}

    /**
     * All the fields in the #GDataYouTubeVideoClass structure are private and should never be accessed directly.
     */
    class YouTubeVideoClass {}

    class YouTubeVideoPrivate {}

    interface AccessHandler {
        // Owm methods of GData-0.0.AccessHandler

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
         * @returns a #GDataFeed of access control rules, or %NULL; unref with g_object_unref()
         */
        get_rules(
            service: Service,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
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
         * @param destroy_progress_user_data the function to call when @progress_callback will not be called any more, or %NULL. This function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it.
         * @param callback a #GAsyncReadyCallback to call when the query is finished
         */
        get_rules_async(
            service: Service,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;

        // Own virtual methods of GData-0.0.AccessHandler

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
        vfunc_get_rules(
            service: Service,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed;
    }

    interface Authorizer {
        // Owm methods of GData-0.0.Authorizer

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
         *
         * ```
         * if (gdata_authorizer_is_authorized_for_domain (gdata_service_get_authorizer (my_service), my_domain) == TRUE) {
         * 	/&lt;!-- --&gt;* Code to execute only if we're authorized for the given domain *&lt;!-- --&gt;/
         * }
         * ```
         *
         *
         * This method is thread safe.
         * @param domain the #GDataAuthorizationDomain to check against
         * @returns %TRUE if the #GDataAuthorizer has been authorized to access @domain, %FALSE otherwise
         */
        is_authorized_for_domain(domain: AuthorizationDomain): boolean;
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
        process_request(domain: AuthorizationDomain | null, message: Soup.Message): void;
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
         * @returns %TRUE if an authorization refresh was attempted and was successful, %FALSE if a refresh wasn't attempted or was unsuccessful
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
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
        refresh_authorization_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous authorization refresh operation for the #GDataAuthorizer, as started with gdata_authorizer_refresh_authorization_async().
         *
         * This method is thread safe.
         * @param async_result a #GAsyncResult
         * @returns %TRUE if an authorization refresh was attempted and was successful, %FALSE if a refresh wasn't attempted or was unsuccessful
         */
        refresh_authorization_finish(async_result: Gio.AsyncResult): boolean;

        // Own virtual methods of GData-0.0.Authorizer

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
         *
         * ```
         * if (gdata_authorizer_is_authorized_for_domain (gdata_service_get_authorizer (my_service), my_domain) == TRUE) {
         * 	/&lt;!-- --&gt;* Code to execute only if we're authorized for the given domain *&lt;!-- --&gt;/
         * }
         * ```
         *
         *
         * This method is thread safe.
         * @param domain the #GDataAuthorizationDomain to check against
         */
        vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean;
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
        vfunc_process_request(domain: AuthorizationDomain | null, message: Soup.Message): void;
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
        vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_refresh_authorization_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous authorization refresh operation for the #GDataAuthorizer, as started with gdata_authorizer_refresh_authorization_async().
         *
         * This method is thread safe.
         * @param async_result a #GAsyncResult
         */
        vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean;
    }

    interface Batchable {
        // Owm methods of GData-0.0.Batchable

        /**
         * Creates a new #GDataBatchOperation for the given #GDataBatchable service, and with the given `feed_uri`. `feed_uri` is normally the %GDATA_LINK_BATCH
         * link URI in the appropriate #GDataFeed from the service. If authorization will be required to perform any of the requests in the batch operation,
         * `domain` must be non-%NULL, and must be an authorization domain which covers all of the requests. Otherwise, `domain` may be %NULL if authorization
         * is not required.
         * @param domain the #GDataAuthorizationDomain to authorize the operation, or %NULL
         * @param feed_uri the URI to send the batch operation request to
         * @returns a new #GDataBatchOperation; unref with g_object_unref()
         */
        create_operation(domain: AuthorizationDomain | null, feed_uri: string): BatchOperation;
    }

    interface Commentable {
        // Owm methods of GData-0.0.Commentable

        /**
         * Deletes `comment` from the #GDataCommentable.
         *
         * If the given `comment` isn't deletable (either because the service doesn't support deleting comments at all, or because this particular comment
         * is not deletable due to having insufficient permissions), %GDATA_SERVICE_ERROR_FORBIDDEN will be set in `error` and %FALSE will be returned.
         * @param service a #GDataService with which the comment will be deleted
         * @param comment_ a comment to be deleted
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE if the comment was successfully deleted, %FALSE otherwise
         */
        delete_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): boolean;
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
        delete_comment_async(
            service: Service,
            comment_: Comment,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous comment deletion operation started with gdata_commentable_delete_comment_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the comment was successfully deleted, %FALSE otherwise
         */
        delete_comment_finish(result: Gio.AsyncResult): boolean;
        /**
         * Adds `comment` to the #GDataCommentable.
         *
         * If the #GDataCommentable doesn't support commenting, %NULL will be returned and `error` will be set to %GDATA_SERVICE_ERROR_FORBIDDEN.
         * @param service a #GDataService with which the comment will be added
         * @param comment_ a new comment to be added to the #GDataCommentable
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the added #GDataComment, or %NULL; unref with g_object_unref()
         */
        insert_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): Comment | null;
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
        insert_comment_async(
            service: Service,
            comment_: Comment,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous comment insertion operation started with gdata_commentable_insert_comment_async().
         * @param result a #GAsyncResult
         * @returns the added #GDataComment, or %NULL; unref with g_object_unref()
         */
        insert_comment_finish(result: Gio.AsyncResult): Comment | null;
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
         * @returns a #GDataFeed of #GDataComments, or %NULL; unref with g_object_unref()
         */
        query_comments(
            service: Service,
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
        ): Feed | null;
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
         * @param destroy_progress_user_data a function to call when @progress_callback will not be called any more, or %NULL; this function will be called with @progress_user_data as a parameter and can be used to free any memory allocated for it
         * @param callback a #GAsyncReadyCallback to call when the query is finished
         */
        query_comments_async(
            service: Service,
            query?: Query | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: QueryProgressCallback | null,
            destroy_progress_user_data?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous comment query operation started with gdata_commentable_query_comments_async().
         * @param result a #GAsyncResult
         * @returns a #GDataFeed of #GDataComments, or %NULL; unref with g_object_unref()
         */
        query_comments_finish(result: Gio.AsyncResult): Feed | null;

        // Own virtual methods of GData-0.0.Commentable

        vfunc_get_insert_comment_uri(comment: Comment): string;
        vfunc_get_query_comments_uri(): string;
        vfunc_is_comment_deletable(comment: Comment): boolean;
    }

    interface Comparable {
        // Owm methods of GData-0.0.Comparable

        /**
         * Compares the two objects, returning &lt;code class="literal"&gt;-1&lt;/code&gt; if `self` is "less than" `other` by some metric, &lt;code class="literal"&gt;0&lt;/code&gt;
         * if they're equal, or &lt;code class="literal"&gt;1&lt;/code&gt; if `self` is "greater than" `other`.
         *
         * %NULL values are handled gracefully, with &lt;code class="literal"&gt;0&lt;/code&gt; returned if both `self` and `other` are %NULL,
         * &lt;code class="literal"&gt;-1&lt;/code&gt; if `self` is %NULL and &lt;code class="literal"&gt;1&lt;/code&gt; if `other` is %NULL.
         *
         * The `other` object must be of the same type as `self,` or of a type derived from `self'`s type.
         * @param other another #GDataComparable of the same type, or %NULL
         * @returns %TRUE on success, %FALSE otherwise
         */
        compare(other?: Comparable | null): number;

        // Own virtual methods of GData-0.0.Comparable

        vfunc_compare_with(other: Comparable): number;
    }

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

export default GData;
// END
