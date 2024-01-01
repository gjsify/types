
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-ebookcontacts-1.2-import.d.ts';
    
/**
 * EBookContacts-1.2
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type EDataServer from '@girs/node-edataserver-1.2';
import type libxml2 from '@girs/node-libxml2-2.0';
import type Soup from '@girs/node-soup-3.0';
import type Json from '@girs/node-json-1.0';
import type Camel from '@girs/node-camel-1.2';

export namespace EBookContacts {

/**
 * The type of change in an #EBookChange
 */
enum BookChangeType {
    /**
     * A vCard was added
     */
    ADDED,
    /**
     * A vCard was deleted
     */
    DELETED,
    /**
     * A vCard was modified
     */
    MODIFIED,
}
/**
 * Error codes returned by #EBookClient APIs, if an #EClientError was not available.
 */
enum BookClientError {
    /**
     * Requested book did not exist
     */
    NO_SUCH_BOOK,
    /**
     * Contact referred to was not found
     */
    CONTACT_NOT_FOUND,
    /**
     * Tried to add a contact which already exists
     */
    CONTACT_ID_ALREADY_EXISTS,
    /**
     * Referred #ESource does not exist
     */
    NO_SUCH_SOURCE,
    /**
     * Out of disk space
     */
    NO_SPACE,
}
/**
 * Specifies the start position to in the list of traversed contacts
 * in calls to e_book_client_cursor_step().
 * 
 * When an #EBookClientCursor is created, the current position implied by %E_BOOK_CURSOR_ORIGIN_CURRENT
 * is the same as %E_BOOK_CURSOR_ORIGIN_BEGIN.
 */
enum BookCursorOrigin {
    /**
     * The current cursor position
     */
    CURRENT,
    /**
     * The beginning of the cursor results.
     */
    BEGIN,
    /**
     * The ending of the cursor results.
     */
    END,
}
/**
 * Specifies the sort order of an ordered query
 */
enum BookCursorSortType {
    /**
     * Sort results in ascending order
     */
    ASCENDING,
    /**
     * Sort results in descending order
     */
    DESCENDING,
}
/**
 * The type of index defined by e_source_backend_summary_setup_set_indexed_fields()
 */
enum BookIndexType {
    /**
     * An index suitable for searching contacts with a prefix pattern
     */
    PREFIX,
    /**
     * An index suitable for searching contacts with a suffix pattern
     */
    SUFFIX,
    /**
     * An index suitable for searching contacts for phone numbers.
     * <note><para>Phone numbers must be convertible into FQTN according to E.164 to be
     * stored in this index. The number "+9999999" for instance won't be stored because
     * the country calling code "+999" currently is not assigned.</para></note>
     */
    PHONE,
    /**
     * Indicates that a given #EContactField should be usable as a sort key.
     */
    SORT_KEY,
}
/**
 * The kind of test a query created by e_book_query_field_test() shall perform.
 * 
 * See also: e_phone_number_compare_strings().
 */
enum BookQueryTest {
    /**
     * look for exact match of the supplied test value
     */
    IS,
    /**
     * check if a field contains the test value
     */
    CONTAINS,
    /**
     * check if a field starts with the test value
     */
    BEGINS_WITH,
    /**
     * check if a field ends with the test value
     */
    ENDS_WITH,
    /**
     * check if a field matches with a value tested
     * using e_phone_number_compare_strings(), the match must be of strenth %E_PHONE_NUMBER_MATCH_EXACT
     * for this query to return any matches.
     */
    EQUALS_PHONE_NUMBER,
    /**
     * check if a field matches with a value tested
     * using e_phone_number_compare_strings(), the match must be at least of strength %E_PHONE_NUMBER_MATCH_NATIONAL
     * for this query to return any matches.
     */
    EQUALS_NATIONAL_PHONE_NUMBER,
    /**
     * check if a field matches with a value tested
     * using e_phone_number_compare_strings(), the match must be at least of strength %E_PHONE_NUMBER_MATCH_SHORT
     * for this query to return any matches.
     */
    EQUALS_SHORT_PHONE_NUMBER,
    /**
     * A regular expression query against contact data normalized with e_util_utf8_normalize(),
     * the normalized data is lower case with any accents removed.
     */
    REGEX_NORMAL,
    /**
     * A regular expression query against raw contact data, this is usually slower than
     * a %E_BOOK_QUERY_REGEX_NORMAL as it implies that #EVCard(s) must be parsed in order to get the raw data
     * for comparison.
     */
    REGEX_RAW,
    /**
     * End marker for the #EBookQueryTest enumeration, not a valid query test.
     */
    LAST,
}
/**
 * Status messages used in notifications in the deprecated #EBookView class
 */
enum BookViewStatus {
    /**
     * Ok
     */
    STATUS_OK,
    /**
     * Time limit exceeded
     */
    STATUS_TIME_LIMIT_EXCEEDED,
    /**
     * Size limit exceeded
     */
    STATUS_SIZE_LIMIT_EXCEEDED,
    /**
     * Invalid search expression
     */
    ERROR_INVALID_QUERY,
    /**
     * Search expression refused
     */
    ERROR_QUERY_REFUSED,
    /**
     * Another error occurred
     */
    ERROR_OTHER_ERROR,
}
enum ContactField {
    UID,
    FILE_AS,
    BOOK_UID,
    FULL_NAME,
    GIVEN_NAME,
    FAMILY_NAME,
    NICKNAME,
    EMAIL_1,
    EMAIL_2,
    EMAIL_3,
    EMAIL_4,
    MAILER,
    ADDRESS_LABEL_HOME,
    ADDRESS_LABEL_WORK,
    ADDRESS_LABEL_OTHER,
    PHONE_ASSISTANT,
    PHONE_BUSINESS,
    PHONE_BUSINESS_2,
    PHONE_BUSINESS_FAX,
    PHONE_CALLBACK,
    PHONE_CAR,
    PHONE_COMPANY,
    PHONE_HOME,
    PHONE_HOME_2,
    PHONE_HOME_FAX,
    PHONE_ISDN,
    PHONE_MOBILE,
    PHONE_OTHER,
    PHONE_OTHER_FAX,
    PHONE_PAGER,
    PHONE_PRIMARY,
    PHONE_RADIO,
    PHONE_TELEX,
    PHONE_TTYTDD,
    ORG,
    ORG_UNIT,
    OFFICE,
    TITLE,
    ROLE,
    MANAGER,
    ASSISTANT,
    HOMEPAGE_URL,
    BLOG_URL,
    CATEGORIES,
    CALENDAR_URI,
    FREEBUSY_URL,
    ICS_CALENDAR,
    VIDEO_URL,
    SPOUSE,
    NOTE,
    IM_AIM_HOME_1,
    IM_AIM_HOME_2,
    IM_AIM_HOME_3,
    IM_AIM_WORK_1,
    IM_AIM_WORK_2,
    IM_AIM_WORK_3,
    IM_GROUPWISE_HOME_1,
    IM_GROUPWISE_HOME_2,
    IM_GROUPWISE_HOME_3,
    IM_GROUPWISE_WORK_1,
    IM_GROUPWISE_WORK_2,
    IM_GROUPWISE_WORK_3,
    IM_JABBER_HOME_1,
    IM_JABBER_HOME_2,
    IM_JABBER_HOME_3,
    IM_JABBER_WORK_1,
    IM_JABBER_WORK_2,
    IM_JABBER_WORK_3,
    IM_YAHOO_HOME_1,
    IM_YAHOO_HOME_2,
    IM_YAHOO_HOME_3,
    IM_YAHOO_WORK_1,
    IM_YAHOO_WORK_2,
    IM_YAHOO_WORK_3,
    IM_MSN_HOME_1,
    IM_MSN_HOME_2,
    IM_MSN_HOME_3,
    IM_MSN_WORK_1,
    IM_MSN_WORK_2,
    IM_MSN_WORK_3,
    IM_ICQ_HOME_1,
    IM_ICQ_HOME_2,
    IM_ICQ_HOME_3,
    IM_ICQ_WORK_1,
    IM_ICQ_WORK_2,
    IM_ICQ_WORK_3,
    REV,
    NAME_OR_ORG,
    ADDRESS,
    ADDRESS_HOME,
    ADDRESS_WORK,
    ADDRESS_OTHER,
    CATEGORY_LIST,
    PHOTO,
    LOGO,
    NAME,
    EMAIL,
    IM_AIM,
    IM_GROUPWISE,
    IM_JABBER,
    IM_YAHOO,
    IM_MSN,
    IM_ICQ,
    WANTS_HTML,
    IS_LIST,
    LIST_SHOW_ADDRESSES,
    BIRTH_DATE,
    ANNIVERSARY,
    X509_CERT,
    PGP_CERT,
    IM_GADUGADU_HOME_1,
    IM_GADUGADU_HOME_2,
    IM_GADUGADU_HOME_3,
    IM_GADUGADU_WORK_1,
    IM_GADUGADU_WORK_2,
    IM_GADUGADU_WORK_3,
    IM_GADUGADU,
    GEO,
    TEL,
    IM_SKYPE_HOME_1,
    IM_SKYPE_HOME_2,
    IM_SKYPE_HOME_3,
    IM_SKYPE_WORK_1,
    IM_SKYPE_WORK_2,
    IM_SKYPE_WORK_3,
    IM_SKYPE,
    SIP,
    IM_GOOGLE_TALK_HOME_1,
    IM_GOOGLE_TALK_HOME_2,
    IM_GOOGLE_TALK_HOME_3,
    IM_GOOGLE_TALK_WORK_1,
    IM_GOOGLE_TALK_WORK_2,
    IM_GOOGLE_TALK_WORK_3,
    IM_GOOGLE_TALK,
    IM_TWITTER,
    IM_MATRIX_HOME_1,
    IM_MATRIX_HOME_2,
    IM_MATRIX_HOME_3,
    IM_MATRIX_WORK_1,
    IM_MATRIX_WORK_2,
    IM_MATRIX_WORK_3,
    IM_MATRIX,
    FIELD_LAST,
    FIELD_FIRST,
    LAST_SIMPLE_STRING,
    FIRST_PHONE_ID,
    LAST_PHONE_ID,
    FIRST_EMAIL_ID,
    LAST_EMAIL_ID,
    FIRST_ADDRESS_ID,
    LAST_ADDRESS_ID,
    FIRST_LABEL_ID,
    LAST_LABEL_ID,
}
enum ContactPhotoType {
    INLINED,
    URI,
}
/**
 * The origin of a parsed EPhoneNumber's country calling code.
 */
enum PhoneNumberCountrySource {
    /**
     * the EPhoneNumber was build from a fully qualified telephone number
     *   that contained a valid country calling code
     */
    FQTN,
    /**
     * the parsed phone number started with the current locale's international
     *   call prefix, followed by a valid country calling code
     */
    IDD,
    /**
     * the parsed phone didn't start with a (recognizable) country calling code,
     *   the code was chosen by checking the current locale settings
     */
    DEFAULT,
}
/**
 * Numeric description of a phone number related error.
 */
enum PhoneNumberError {
    /**
     * the library was built without phone
     * number support
     */
    NOT_IMPLEMENTED,
    /**
     * the phone number parser reported a yet
     * unknown error code.
     */
    UNKNOWN,
    /**
     * the supplied text is not a phone number.
     */
    NOT_A_NUMBER,
    /**
     * the supplied phone number has an
     * invalid country calling code.
     */
    INVALID_COUNTRY_CODE,
    /**
     * the remaining text after the
     * country calling code is to short for a phone number.
     */
    TOO_SHORT_AFTER_IDD,
    /**
     * the text is too short for a phone number.
     */
    TOO_SHORT,
    /**
     * the text is too long for a phone number.
     */
    TOO_LONG,
}
/**
 * The supported formatting rules for phone numbers.
 */
enum PhoneNumberFormat {
    /**
     * format according E.164: "+493055667788".
     */
    E164,
    /**
     * a formatted phone number always
     * starting with the country calling code: "+49 30 55667788".
     */
    INTERNATIONAL,
    /**
     * a formatted phone number in national
     * scope, that is without country calling code: "(030) 55667788".
     */
    NATIONAL,
    /**
     * a tel: URL according to RFC 3966:
     * "tel:+49-30-55667788".
     */
    RFC3966,
}
/**
 * The strength of a phone number match.
 * 
 * <example>
 * <title>Some examples of phone number matches</title>
 * <para>
 * Let's consider the phone number "+1-221-5423789", then comparing with
 * "+1.221.542.3789" we have get E_PHONE_NUMBER_MATCH_EXACT because country
 * code, region code and local number are matching. Comparing with "2215423789"
 * will result in E_PHONE_NUMBER_MATCH_NATIONAL because the country calling code
 * is missing, but the national portion is matching. Finally comparing with
 * "5423789" gives E_PHONE_NUMBER_MATCH_SHORT. For more detail have a look at
 * the following table:
 * 
 * <informaltable border="1" align="center">
 *  <colgroup>
 *   <col width="20%" />
 *   <col width="20%" />
 *   <col width="20%" />
 *   <col width="20%" />
 *   <col width="20%" />
 *  </colgroup>
 *  <tbody>
 *   <tr>
 *    <th></th>
 *    <th align="center">+1-617-5423789</th>
 *    <th align="center">+1-221-5423789</th>
 *    <th align="center">221-5423789</th>
 *    <th align="center">5423789</th>
 *   </tr><tr>
 *    <th align="right">+1-617-5423789</th>
 *    <td align="center">exact</td>
 *    <td align="center">none</td>
 *    <td align="center">none</td>
 *    <td align="center">short</td>
 *   </tr><tr>
 *    <th align="right">+1-221-5423789</th>
 *    <td align="center">none</td>
 *    <td align="center">exact</td>
 *    <td align="center">national</td>
 *    <td align="center">short</td>
 *   </tr><tr>
 *    <th align="right">221-5423789</th>
 *    <td align="center">none</td>
 *    <td align="center">national</td>
 *    <td align="center">national</td>
 *    <td align="center">short</td>
 *   </tr><tr>
 *    <th align="right">5423789</th>
 *    <td align="center">short</td>
 *    <td align="center">short</td>
 *    <td align="center">short</td>
 *    <td align="center">short</td>
 *   </tr>
 *  </tbody>
 * </informaltable>
 * </para>
 * </example>
 */
enum PhoneNumberMatch {
    /**
     * The phone numbers did not match.
     */
    NONE,
    /**
     * The phone numbers matched exactly. Two phone number strings are an exact match
     * if the country code, national phone number, presence of a leading zero for Italian numbers and any
     * extension present are the same.
     */
    EXACT,
    /**
     * The national phone number matched. Two phone number strings match at
     * this strength if either or both has no region specified, and the national phone number
     * and extensions are the same.
     */
    NATIONAL,
    /**
     * The weakest sort of match. Two phone numbers match at
     * this strength if either or both has no region specified, or the region specified is the same, and one national
     * phone number could be a shorter version of the other number. This includes the case where one has an extension specified,
     * and the other does not.
     */
    SHORT,
}
enum VCardFormat {
    TODO_21,
    TODO_30,
}
/**
 * Flags that control the behaviour of an #EBookClientView.
 * @bitfield 
 */
enum BookClientViewFlags {
    /**
     * Symbolic value for no flags
     */
    NONE,
    /**
     * If this flag is set then all contacts matching the view's query will
     *   be sent as notifications when starting the view, otherwise only future
     *   changes will be reported.  The default for an #EBookClientView is %TRUE.
     */
    NOTIFY_INITIAL,
    /**
     * Rather than receiving contact changes one-by-one, be notified only
     *   by "content-changed" signal and query contacts by ranges. See
     *   e_book_client_view_set_sort_fields_sync() for more information.
     *   The default is %FALSE. Since: 3.50
     */
    MANUAL_QUERY,
}
/**
 * Defines the behaviour of e_book_client_cursor_step().
 * @bitfield 
 */
enum BookCursorStepFlags {
    /**
     * The cursor position should be modified while stepping
     */
    MOVE,
    /**
     * Traversed contacts should be listed and returned while stepping.
     */
    FETCH,
}
/**
 * Book operation flags, to specify behavior in certain situations. The conflict
 * resolution mode flags cannot be combined together, where the `E_BOOK_OPERATION_FLAG_CONFLICT_KEEP_LOCAL`
 * is the default behavior (and it is used when no other conflict resolution flag is set).
 * The flags can be ignored when the operation or the backend don't support it.
 * @bitfield 
 */
enum BookOperationFlags {
    /**
     * no operation flags defined
     */
    NONE,
    /**
     * conflict resolution mode, to fail and do not
     *    do any changes, when a conflict is detected
     */
    CONFLICT_FAIL,
    /**
     * conflict resolution mode, to use newer
     *    of the local and the server side data, when a conflict is detected
     */
    CONFLICT_USE_NEWER,
    /**
     * conflict resolution mode, to use
     *    the server data (and local changed), when a conflict is detected
     */
    CONFLICT_KEEP_SERVER,
    /**
     * conflict resolution mode, to use
     *    local data (and always overwrite server data), when a conflict is detected
     */
    CONFLICT_KEEP_LOCAL,
    /**
     * conflict resolution mode, to create
     *    a copy of the data, when a conflict is detected
     */
    CONFLICT_WRITE_COPY,
}
/**
 * Provides comma-separated list of all known categories used by
 * the contacts stored in the book backend.
 */
const BOOK_BACKEND_PROPERTY_CATEGORIES: string
/**
 * Provides comma-separated list of required fields by the book backend.
 * All of these attributes should be set, otherwise the backend will reject
 * saving the contact.
 * 
 * The e_contact_field_id() can be used to transform the field name
 * into an #EContactField.
 */
const BOOK_BACKEND_PROPERTY_REQUIRED_FIELDS: string
/**
 * The current overall revision string, this can be used as
 * a quick check to see if data has changed at all since the
 * last time the addressbook revision was observed.
 */
const BOOK_BACKEND_PROPERTY_REVISION: string
/**
 * Provides comma-separated list of supported fields by the book backend.
 * Attributes other than those listed here can be discarded. This can be
 * used to enable/show only supported elements in GUI.
 * 
 * The e_contact_field_id() can be used to transform the field name
 * into an #EContactField.
 */
const BOOK_BACKEND_PROPERTY_SUPPORTED_FIELDS: string
const EVC_ADR: string
const EVC_BDAY: string
const EVC_CALURI: string
const EVC_CATEGORIES: string
const EVC_CL_UID: string
const EVC_CONTACT_LIST: string
const EVC_EMAIL: string
const EVC_ENCODING: string
const EVC_FBURL: string
const EVC_FN: string
const EVC_GEO: string
const EVC_ICSCALENDAR: string
const EVC_KEY: string
const EVC_LABEL: string
const EVC_LOGO: string
const EVC_MAILER: string
const EVC_N: string
const EVC_NICKNAME: string
const EVC_NOTE: string
const EVC_ORG: string
const EVC_PARENT_CL: string
const EVC_PHOTO: string
const EVC_PRODID: string
const EVC_QUOTEDPRINTABLE: string
const EVC_REV: string
const EVC_ROLE: string
const EVC_TEL: string
const EVC_TITLE: string
const EVC_TYPE: string
const EVC_UID: string
const EVC_URL: string
const EVC_VALUE: string
const EVC_VERSION: string
const EVC_X_AIM: string
const EVC_X_ANNIVERSARY: string
const EVC_X_ASSISTANT: string
const EVC_X_BIRTHDAY: string
const EVC_X_BLOG_URL: string
const EVC_X_BOOK_UID: string
const EVC_X_CALLBACK: string
const EVC_X_COMPANY: string
const EVC_X_DEST_CONTACT_UID: string
const EVC_X_DEST_EMAIL: string
const EVC_X_DEST_EMAIL_NUM: string
const EVC_X_DEST_HTML_MAIL: string
const EVC_X_DEST_NAME: string
const EVC_X_DEST_SOURCE_UID: string
const EVC_X_E164: string
const EVC_X_FILE_AS: string
const EVC_X_GADUGADU: string
const EVC_X_GOOGLE_TALK: string
const EVC_X_GROUPWISE: string
const EVC_X_ICQ: string
const EVC_X_JABBER: string
const EVC_X_LIST: string
const EVC_X_LIST_NAME: string
const EVC_X_LIST_SHOW_ADDRESSES: string
const EVC_X_MANAGER: string
const EVC_X_MATRIX: string
const EVC_X_MSN: string
const EVC_X_RADIO: string
const EVC_X_SIP: string
const EVC_X_SKYPE: string
const EVC_X_SPOUSE: string
const EVC_X_TELEX: string
const EVC_X_TTYTDD: string
/**
 * Twitter name(s).
 */
const EVC_X_TWITTER: string
const EVC_X_VIDEO_URL: string
const EVC_X_WANTS_HTML: string
const EVC_X_YAHOO: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceBackendSummarySetup.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_BACKEND_SUMMARY_SETUP: string
/**
 * FIXME: Document me!
 */
const VCARD_21_VALID_PARAMETERS: string
/**
 * FIXME: Document me!
 */
const VCARD_21_VALID_PROPERTIES: string
/**
 * Parses a string representing a mailing address into a
 * structure of type #EAddressWestern.
 * @param inAddress a string representing a mailing address
 * @returns A new #EAddressWestern structure, or %NULL if    the parsing failed or when the @in_address was %NULL.
 */
function addressWesternParse(inAddress: string | null): AddressWestern | null
function bookClientErrorCreate(code: BookClientError, customMsg: string | null): GLib.Error
function bookClientErrorQuark(): GLib.Quark
/**
 * Get localized human readable description of the given error code.
 * @param code an #EBookClientError code
 * @returns Localized human readable description of the given error code
 */
function bookClientErrorToString(code: BookClientError): string
/**
 * Returns whether the `self` considers contacts stored in the ascending order.
 * @param self an #EBookIndicesUpdater
 * @returns %TRUE, when considers contacts sorted in ascending order,    %FALSE when in the descending order.
 */
function bookIndicesGetAscendingSort(self: BookIndicesUpdater): boolean
/**
 * Sets whether the contacts are sorted in an ascending order; if not,
 * then they are sorted in the descending order. That influences what
 * indexes the indices have set.
 * @param self an #EBookIndicesUpdater
 * @param ascendingSort the value to set
 */
function bookIndicesSetAscendingSort(self: BookIndicesUpdater, ascendingSort: boolean): void
/**
 * Create a new #EBookQuery which is the logical AND of the queries in #qs.
 * @param nqs the number of queries to AND
 * @param qs pointer to an array of #EBookQuery items
 * @param unref if %TRUE, the new query takes ownership of the existing queries
 * @returns A new #EBookQuery
 */
function bookQueryAnd(nqs: number, qs: BookQuery, unref: boolean): BookQuery
/**
 * Creates a new #EBookQuery which tests if any field contains `value`.
 * @param value a value
 * @returns the new #EBookQuery
 */
function bookQueryAnyFieldContains(value: string): BookQuery
/**
 * Creates a new #EBookQuery which tests if the field `field` exists.
 * @param field an #EContactField
 * @returns the new #EBookQuery
 */
function bookQueryFieldExists(field: ContactField): BookQuery
/**
 * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
 * @param field an #EContactField to test
 * @param test the test to apply
 * @param value the value to test for
 * @returns the new #EBookQuery
 */
function bookQueryFieldTest(field: ContactField, test: BookQueryTest, value: string): BookQuery
/**
 * Parse `query_string` and return a new #EBookQuery representing it.
 * @param queryString the query
 * @returns the new #EBookQuery.
 */
function bookQueryFromString(queryString: string): BookQuery
/**
 * Creates a new #EBookQuery which is the logical OR of the queries in #qs.
 * @param nqs the number of queries to OR
 * @param qs pointer to an array of #EBookQuery items
 * @param unref if %TRUE, the new query takes ownership of the existing queries
 * @returns A new #EBookQuery
 */
function bookQueryOr(nqs: number, qs: BookQuery, unref: boolean): BookQuery
/**
 * Creates a new #EBookQuery which tests if the field `field` exists. `field`
 * should be a vCard field name, such as #EVC_FN or #EVC_X_MSN.
 * @param field a field name
 * @returns the new #EBookQuery
 */
function bookQueryVcardFieldExists(field: string): BookQuery
/**
 * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
 * @param field a EVCard field name to test
 * @param test the test to apply
 * @param value the value to test for
 * @returns the new #EBookQuery
 */
function bookQueryVcardFieldTest(field: string, test: BookQueryTest, value: string): BookQuery
/**
 * Encodes the #EConflictResolution into the bit-or of #EBookOperationFlags.
 * The returned value can be bit-or-ed with other #EBookOperationFlags values.
 * @param conflictResolution an #EConflictResolution
 * @returns a bit-or of #EBookOperationFlags, corresponding to the @conflict_resolution
 */
function bookUtilConflictResolutionToOperationFlags(conflictResolution: EDataServer.ConflictResolution): number
/**
 * Compares list of categories on the `old_contact` with the list of categories
 * on the `new_contact` and fills `out_added` categories and `out_removed` categories
 * accordingly, as if the `old_contact` is replaced with the `new_contact`. When either
 * of the contacts is %NULL, it's considered as having no categories set.
 * Rather than returning empty #GHashTable, the return argument is set to %NULL
 * when there are no added/removed categories.
 * 
 * The key of the hash table is the category string, the value is an integer (1).
 * There is used the hash table only for speed.
 * 
 * The returned #GHashTable-s should be freed with g_hash_table_unref(),
 * when no longer needed.
 * @param oldContact an old #EContact, or %NULL
 * @param newContact a new #EContact, or %NULL
 */
function bookUtilDiffCategories(oldContact: Contact | null, newContact: Contact | null): [ /* outAdded */ GLib.HashTable, /* outRemoved */ GLib.HashTable ]
/**
 * Parses the `email_address` and calls `func` for each found address.
 * The first parameter of the `func` is the name, the second parameter
 * of the `func` is the email, the third parameters of the `func` is
 * the `user_data`. The `func` returns %TRUE, to continue processing.
 * @param emailAddress one or more email addresses as string
 * @param func a function to call for each email `user_data` (closure func): user data passed to `func`
 */
function bookUtilForeachAddress(emailAddress: string, func: GLib.HRFunc): void
/**
 * Decodes the #EConflictResolution from the bit-or of #EBookOperationFlags.
 * @param flags bit-or of #EBookOperationFlags
 * @returns an #EConflictResolution as stored in the @flags
 */
function bookUtilOperationFlagsToConflictResolution(flags: number): EDataServer.ConflictResolution
/**
 * Copies a list of allocated strings, specifically
 * for the #EContactAttrList boxed type used for multi valued
 * contact fields.
 * @param list A #GList of strings
 * @returns A copy of @list
 */
function contactAttrListCopy(list: string[]): string[]
/**
 * Frees a list of allocated strings, specifically
 * for the #EContactAttrList boxed type used for multi valued
 * contact fields.
 * @param list A #GList of strings
 */
function contactAttrListFree(list: string[]): void
/**
 * Creates a new #EContactDate based on `str`.
 * @param str a date string in the format YYYY-MM-DD or YYYYMMDD
 * @returns A new #EContactDate struct.
 */
function contactDateFromString(str: string): ContactDate
/**
 * Creates a new #EContactName based on the parsed `name_str`.
 * @param nameStr a string representing a contact's full name
 * @returns A new #EContactName struct.
 */
function contactNameFromString(nameStr: string): ContactName
/**
 * Parses `full_name` and returns an #ENameWestern struct filled with
 * the component parts of the name.
 * @param fullName A string containing a western name.
 * @returns A new #ENameWestern struct.
 */
function nameWesternParse(fullName: string): NameWestern
/**
 * Compares two phone numbers.
 * @param firstNumber the first EPhoneNumber to compare
 * @param secondNumber the second EPhoneNumber to compare
 * @returns The quality of matching for the two phone numbers.
 */
function phoneNumberCompareStrings(firstNumber: string, secondNumber: string): PhoneNumberMatch
/**
 * Compares two phone numbers within the context of `region_code`.
 * @param firstNumber the first EPhoneNumber to compare
 * @param secondNumber the second EPhoneNumber to compare
 * @param regionCode a two-letter country code, or %NULL
 * @returns The quality of matching for the two phone numbers.
 */
function phoneNumberCompareStringsWithRegion(firstNumber: string, secondNumber: string, regionCode: string | null): PhoneNumberMatch
function phoneNumberErrorQuark(): GLib.Quark
/**
 * Parses the string passed in `phone_number`. Note that no validation is
 * performed whether the recognized phone number is valid for a particular
 * region.
 * 
 * The two-letter country code passed in `region_code` only is used if the
 * `phone_number` is not written in international format. The application's
 * default region as returned by e_phone_number_get_default_region() is used
 * if `region_code` is %NULL.
 * 
 * If the number is guaranteed to start with a '+' followed by the country
 * calling code, then "ZZ" can be passed for `region_code`.
 * @param phoneNumber the phone number to parse
 * @param regionCode a two-letter country code, or %NULL
 * @returns a new #EPhoneNumber instance on success, or %NULL on error. Call e_phone_number_free() to release this instance.
 */
function phoneNumberFromString(phoneNumber: string, regionCode: string | null): PhoneNumber
/**
 * Retrieves the preferred country calling code for `region_code,`
 * e.g. 358 for "fi" or 1 for "en_US`UTF-8`".
 * 
 * If %NULL is passed for `region_code` the default region as returned by
 * e_phone_number_get_default_region() is used.
 * @param regionCode a two-letter country code, a locale name, or %NULL
 * @returns a valid country calling code, or zero if an unknown region code was passed.
 */
function phoneNumberGetCountryCodeForRegion(regionCode: string | null): number
/**
 * Retrieves the current two-letter country code that's used by default for
 * parsing phone numbers in e_phone_number_from_string(). It can be useful
 * to store this number before parsing a bigger number of phone numbers.
 * 
 * The result of this functions depends on the current setup of the
 * %LC_ADDRESS category: If that category provides a reasonable value
 * for %_NL_ADDRESS_COUNTRY_AB2 this value is returned. Otherwise the
 * locale name configured for %LC_ADDRESS is parsed.
 * @returns a newly allocated string containing the current locale's two-letter code for phone number parsing.
 */
function phoneNumberGetDefaultRegion(): string | null
/**
 * Checks if phone number support is available. It is recommended to call this
 * function before using any of the phone-utils functions to ensure that the
 * required functionality is available, and to pick alternative mechanisms if
 * needed.
 * @returns %TRUE if phone number support is available.
 */
function phoneNumberIsSupported(): boolean
module BookIndicesUpdater {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface BookIndicesUpdater {

    // Own properties of EBookContacts-1.2.EBookContacts.BookIndicesUpdater

    __gtype__: number

    // Owm methods of EBookContacts-1.2.EBookContacts.BookIndicesUpdater

    /**
     * Notifies the `self` that a new contact with UID `uid` had been added
     * to the set and it occupies the `indices_index` index in the indices.
     * In case the `uid` had been added previously its index is modified
     * instead.
     * 
     * This function can be used only after initial call to e_book_indices_updater_take_indices().
     * @param uid a UID of a contact
     * @param indicesIndex index to the indices array the contact belongs to
     * @returns whether the indices changed
     */
    add(uid: string, indicesIndex: number): boolean
    /**
     * Sets the initial indices to be updated by the `self`. If %NULL,
     * then unsets them.
     * @returns current indices, or %NULL, when none had been set yet
     */
    getIndices(): BookIndices | null
    /**
     * Notifies the `self` that an existing contact with UID `uid` had been removed
     * from the set. Calling the function with `uid` unknown to the `self` does nothing
     * and returns %FALSE.
     * 
     * This function can be used only after initial call to e_book_indices_updater_take_indices().
     * @param uid a UID of a removed contact
     * @returns whether the indices changed
     */
    remove(uid: string): boolean
    /**
     * Sets the initial indices to be updated by the `self`. If %NULL,
     * then unsets them. The function always discards data previously
     * gathered about the involved contacts, regardless whether
     * the indices changed or not.
     * 
     * The function assumes ownership of the `indices`.
     * @param indices an #EBookIndices, or %NULL
     * @returns whether the indices changed
     */
    takeIndices(indices: BookIndices | null): boolean

    // Class property signals of EBookContacts-1.2.EBookContacts.BookIndicesUpdater

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
    disconnect(id: number): void
}

/**
 * An abstract object to handle EBookIndices changes.
 * @class 
 */
class BookIndicesUpdater extends GObject.Object {

    // Own properties of EBookContacts-1.2.EBookContacts.BookIndicesUpdater

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.BookIndicesUpdater

    constructor(config?: BookIndicesUpdater.ConstructorProperties) 
    _init(config?: BookIndicesUpdater.ConstructorProperties): void
}

module Contact {

    // Constructor properties interface

    interface ConstructorProperties extends VCard.ConstructorProperties {

        // Own constructor properties of EBookContacts-1.2.EBookContacts.Contact

        rev?: string | null
        address?: any | null
        addressHome?: ContactAddress | null
        addressLabelHome?: string | null
        addressLabelOther?: string | null
        addressLabelWork?: string | null
        addressOther?: ContactAddress | null
        addressWork?: ContactAddress | null
        anniversary?: ContactDate | null
        assistant?: string | null
        assistantPhone?: string | null
        birthDate?: ContactDate | null
        blogUrl?: string | null
        bookUid?: string | null
        businessFax?: string | null
        businessPhone?: string | null
        businessPhone2?: string | null
        callbackPhone?: string | null
        caluri?: string | null
        carPhone?: string | null
        categories?: string | null
        categoryList?: any | null
        companyPhone?: string | null
        email?: any | null
        email1?: string | null
        email2?: string | null
        email3?: string | null
        email4?: string | null
        familyName?: string | null
        fburl?: string | null
        fileAs?: string | null
        fullName?: string | null
        geo?: ContactGeo | null
        givenName?: string | null
        homeFax?: string | null
        homePhone?: string | null
        homePhone2?: string | null
        homepageUrl?: string | null
        icscalendar?: string | null
        id?: string | null
        imAim?: any | null
        imAimHome1?: string | null
        imAimHome2?: string | null
        imAimHome3?: string | null
        imAimWork1?: string | null
        imAimWork2?: string | null
        imAimWork3?: string | null
        imGadugadu?: any | null
        imGadugaduHome1?: string | null
        imGadugaduHome2?: string | null
        imGadugaduHome3?: string | null
        imGadugaduWork1?: string | null
        imGadugaduWork2?: string | null
        imGadugaduWork3?: string | null
        imGoogleTalk?: any | null
        imGoogleTalkHome1?: string | null
        imGoogleTalkHome2?: string | null
        imGoogleTalkHome3?: string | null
        imGoogleTalkWork1?: string | null
        imGoogleTalkWork2?: string | null
        imGoogleTalkWork3?: string | null
        imGroupwise?: any | null
        imGroupwiseHome1?: string | null
        imGroupwiseHome2?: string | null
        imGroupwiseHome3?: string | null
        imGroupwiseWork1?: string | null
        imGroupwiseWork2?: string | null
        imGroupwiseWork3?: string | null
        imIcq?: any | null
        imIcqHome1?: string | null
        imIcqHome2?: string | null
        imIcqHome3?: string | null
        imIcqWork1?: string | null
        imIcqWork2?: string | null
        imIcqWork3?: string | null
        imJabber?: any | null
        imJabberHome1?: string | null
        imJabberHome2?: string | null
        imJabberHome3?: string | null
        imJabberWork1?: string | null
        imJabberWork2?: string | null
        imJabberWork3?: string | null
        imMatrix?: any | null
        imMatrixHome1?: string | null
        imMatrixHome2?: string | null
        imMatrixHome3?: string | null
        imMatrixWork1?: string | null
        imMatrixWork2?: string | null
        imMatrixWork3?: string | null
        imMsn?: any | null
        imMsnHome1?: string | null
        imMsnHome2?: string | null
        imMsnHome3?: string | null
        imMsnWork1?: string | null
        imMsnWork2?: string | null
        imMsnWork3?: string | null
        imSkype?: any | null
        imSkypeHome1?: string | null
        imSkypeHome2?: string | null
        imSkypeHome3?: string | null
        imSkypeWork1?: string | null
        imSkypeWork2?: string | null
        imSkypeWork3?: string | null
        imTwitter?: any | null
        imYahoo?: any | null
        imYahooHome1?: string | null
        imYahooHome2?: string | null
        imYahooHome3?: string | null
        imYahooWork1?: string | null
        imYahooWork2?: string | null
        imYahooWork3?: string | null
        isdnPhone?: string | null
        list?: boolean | null
        listShowAddresses?: boolean | null
        logo?: ContactPhoto | null
        mailer?: string | null
        manager?: string | null
        mobilePhone?: string | null
        name?: ContactName | null
        nickname?: string | null
        note?: string | null
        office?: string | null
        org?: string | null
        orgUnit?: string | null
        otherFax?: string | null
        otherPhone?: string | null
        pager?: string | null
        pgpCert?: ContactCert | null
        phone?: any | null
        photo?: ContactPhoto | null
        primaryPhone?: string | null
        radio?: string | null
        role?: string | null
        sip?: any | null
        spouse?: string | null
        telex?: string | null
        title?: string | null
        tty?: string | null
        videoUrl?: string | null
        wantsHtml?: boolean | null
        x509Cert?: ContactCert | null
    }

}

interface Contact {

    // Own properties of EBookContacts-1.2.EBookContacts.Contact

    rev: string | null
    address: any
    addressHome: ContactAddress
    addressLabelHome: string | null
    addressLabelOther: string | null
    addressLabelWork: string | null
    addressOther: ContactAddress
    addressWork: ContactAddress
    anniversary: ContactDate
    assistant: string | null
    assistantPhone: string | null
    birthDate: ContactDate
    blogUrl: string | null
    bookUid: string | null
    businessFax: string | null
    businessPhone: string | null
    businessPhone2: string | null
    callbackPhone: string | null
    caluri: string | null
    carPhone: string | null
    categories: string | null
    categoryList: any
    companyPhone: string | null
    email: any
    email1: string | null
    email2: string | null
    email3: string | null
    email4: string | null
    familyName: string | null
    fburl: string | null
    fileAs: string | null
    fullName: string | null
    geo: ContactGeo
    givenName: string | null
    homeFax: string | null
    homePhone: string | null
    homePhone2: string | null
    homepageUrl: string | null
    icscalendar: string | null
    id: string | null
    imAim: any
    imAimHome1: string | null
    imAimHome2: string | null
    imAimHome3: string | null
    imAimWork1: string | null
    imAimWork2: string | null
    imAimWork3: string | null
    imGadugadu: any
    imGadugaduHome1: string | null
    imGadugaduHome2: string | null
    imGadugaduHome3: string | null
    imGadugaduWork1: string | null
    imGadugaduWork2: string | null
    imGadugaduWork3: string | null
    imGoogleTalk: any
    imGoogleTalkHome1: string | null
    imGoogleTalkHome2: string | null
    imGoogleTalkHome3: string | null
    imGoogleTalkWork1: string | null
    imGoogleTalkWork2: string | null
    imGoogleTalkWork3: string | null
    imGroupwise: any
    imGroupwiseHome1: string | null
    imGroupwiseHome2: string | null
    imGroupwiseHome3: string | null
    imGroupwiseWork1: string | null
    imGroupwiseWork2: string | null
    imGroupwiseWork3: string | null
    imIcq: any
    imIcqHome1: string | null
    imIcqHome2: string | null
    imIcqHome3: string | null
    imIcqWork1: string | null
    imIcqWork2: string | null
    imIcqWork3: string | null
    imJabber: any
    imJabberHome1: string | null
    imJabberHome2: string | null
    imJabberHome3: string | null
    imJabberWork1: string | null
    imJabberWork2: string | null
    imJabberWork3: string | null
    imMatrix: any
    imMatrixHome1: string | null
    imMatrixHome2: string | null
    imMatrixHome3: string | null
    imMatrixWork1: string | null
    imMatrixWork2: string | null
    imMatrixWork3: string | null
    imMsn: any
    imMsnHome1: string | null
    imMsnHome2: string | null
    imMsnHome3: string | null
    imMsnWork1: string | null
    imMsnWork2: string | null
    imMsnWork3: string | null
    imSkype: any
    imSkypeHome1: string | null
    imSkypeHome2: string | null
    imSkypeHome3: string | null
    imSkypeWork1: string | null
    imSkypeWork2: string | null
    imSkypeWork3: string | null
    imTwitter: any
    imYahoo: any
    imYahooHome1: string | null
    imYahooHome2: string | null
    imYahooHome3: string | null
    imYahooWork1: string | null
    imYahooWork2: string | null
    imYahooWork3: string | null
    isdnPhone: string | null
    list: boolean
    listShowAddresses: boolean
    logo: ContactPhoto
    mailer: string | null
    manager: string | null
    mobilePhone: string | null
    name: ContactName
    readonly nameOrOrg: string | null
    nickname: string | null
    note: string | null
    office: string | null
    org: string | null
    orgUnit: string | null
    otherFax: string | null
    otherPhone: string | null
    pager: string | null
    pgpCert: ContactCert
    phone: any
    photo: ContactPhoto
    primaryPhone: string | null
    radio: string | null
    role: string | null
    sip: any
    spouse: string | null
    telex: string | null
    title: string | null
    tty: string | null
    videoUrl: string | null
    wantsHtml: boolean
    x509Cert: ContactCert
    __gtype__: number

    // Own fields of EBookContacts-1.2.EBookContacts.Contact

    parent: VCard & GObject.Object

    // Owm methods of EBookContacts-1.2.EBookContacts.Contact

    /**
     * Creates a copy of `contact`.
     * @returns A new #EContact identical to @contact.
     */
    duplicate(): Contact
    /**
     * Gets the value of `contact'`s field specified by `field_id`.
     * @param fieldId an #EContactField
     * @returns Depends on the field's type, owned by the caller. This may be %NULL if the field isn't set.
     */
    get(fieldId: ContactField): any | null
    /**
     * Gets a list of the vcard attributes for `contact'`s `field_id`.
     * @param fieldId an #EContactField
     * @returns A #GList of pointers to #EVCardAttribute, owned by the caller.
     */
    getAttributes(fieldId: ContactField): VCardAttribute[]

    // Overloads of getAttributes

    /**
     * Gets the list of all attributes from `evcard`. The list and its
     * contents are owned by `evcard,` and must not be freed.
     * @returns A list of attributes of type #EVCardAttribute.
     */
    getAttributes(): VCardAttribute[]
    /**
     * Gets a list of the vcard attributes for `contact'`s `field_ids`.
     * @param fieldIds an array of #EContactField
     * @returns A #GList of pointers to #EVCardAttribute, owned by the caller.
     */
    getAttributesSet(fieldIds: ContactField[]): VCardAttribute[]
    /**
     * Gets the value of `contact'`s field specified by `field_id,` caching
     * the result so it can be freed later. Use e_contact_field_is_string()
     * to check whether the field can be used here.
     * @param fieldId an #EContactField
     * @returns Depends on the field's type, owned by the #EContact.
     */
    getConst(fieldId: ContactField): any | null
    /**
     * Tries to modify any #EContactPhoto fields which are
     * stored on the local file system as type %E_CONTACT_PHOTO_TYPE_URI
     * to be inlined and stored as %E_CONTACT_PHOTO_TYPE_INLINED instead.
     * @returns %TRUE if there were no errors, upon error %FALSE is returned    and @error is set.
     */
    inlineLocalPhotos(): boolean
    /**
     * Sets the value of `contact'`s field specified by `field_id` to `value`.
     * @param fieldId an #EContactField
     * @param value a value whose type depends on the `field_id`
     */
    set(fieldId: ContactField, value: any | null): void
    /**
     * Sets the vcard attributes for `contact'`s `field_id`.
     * Attributes are added to the contact in the same order as they are in `attributes`.
     * @param fieldId an #EContactField
     * @param attributes a #GList of pointers to #EVCardAttribute
     */
    setAttributes(fieldId: ContactField, attributes: VCardAttribute[]): void

    // Class property signals of EBookContacts-1.2.EBookContacts.Contact

    connect(sigName: "notify::Rev", callback: (...args: any[]) => void): number
    on(sigName: "notify::Rev", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::Rev", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::Rev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::Rev", ...args: any[]): void
    connect(sigName: "notify::address", callback: (...args: any[]) => void): number
    on(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::address-home", callback: (...args: any[]) => void): number
    on(sigName: "notify::address-home", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address-home", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address-home", ...args: any[]): void
    connect(sigName: "notify::address-label-home", callback: (...args: any[]) => void): number
    on(sigName: "notify::address-label-home", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address-label-home", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address-label-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address-label-home", ...args: any[]): void
    connect(sigName: "notify::address-label-other", callback: (...args: any[]) => void): number
    on(sigName: "notify::address-label-other", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address-label-other", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address-label-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address-label-other", ...args: any[]): void
    connect(sigName: "notify::address-label-work", callback: (...args: any[]) => void): number
    on(sigName: "notify::address-label-work", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address-label-work", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address-label-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address-label-work", ...args: any[]): void
    connect(sigName: "notify::address-other", callback: (...args: any[]) => void): number
    on(sigName: "notify::address-other", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address-other", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address-other", ...args: any[]): void
    connect(sigName: "notify::address-work", callback: (...args: any[]) => void): number
    on(sigName: "notify::address-work", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address-work", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address-work", ...args: any[]): void
    connect(sigName: "notify::anniversary", callback: (...args: any[]) => void): number
    on(sigName: "notify::anniversary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anniversary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anniversary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anniversary", ...args: any[]): void
    connect(sigName: "notify::assistant", callback: (...args: any[]) => void): number
    on(sigName: "notify::assistant", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::assistant", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::assistant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::assistant", ...args: any[]): void
    connect(sigName: "notify::assistant-phone", callback: (...args: any[]) => void): number
    on(sigName: "notify::assistant-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::assistant-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::assistant-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::assistant-phone", ...args: any[]): void
    connect(sigName: "notify::birth-date", callback: (...args: any[]) => void): number
    on(sigName: "notify::birth-date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::birth-date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::birth-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::birth-date", ...args: any[]): void
    connect(sigName: "notify::blog-url", callback: (...args: any[]) => void): number
    on(sigName: "notify::blog-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::blog-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::blog-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::blog-url", ...args: any[]): void
    connect(sigName: "notify::book-uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::book-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::book-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::book-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::book-uid", ...args: any[]): void
    connect(sigName: "notify::business-fax", callback: (...args: any[]) => void): number
    on(sigName: "notify::business-fax", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::business-fax", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::business-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::business-fax", ...args: any[]): void
    connect(sigName: "notify::business-phone", callback: (...args: any[]) => void): number
    on(sigName: "notify::business-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::business-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::business-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::business-phone", ...args: any[]): void
    connect(sigName: "notify::business-phone-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::business-phone-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::business-phone-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::business-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::business-phone-2", ...args: any[]): void
    connect(sigName: "notify::callback-phone", callback: (...args: any[]) => void): number
    on(sigName: "notify::callback-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::callback-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::callback-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::callback-phone", ...args: any[]): void
    connect(sigName: "notify::caluri", callback: (...args: any[]) => void): number
    on(sigName: "notify::caluri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caluri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caluri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caluri", ...args: any[]): void
    connect(sigName: "notify::car-phone", callback: (...args: any[]) => void): number
    on(sigName: "notify::car-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::car-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::car-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::car-phone", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (...args: any[]) => void): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::category-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::category-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::category-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::category-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::category-list", ...args: any[]): void
    connect(sigName: "notify::company-phone", callback: (...args: any[]) => void): number
    on(sigName: "notify::company-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::company-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::company-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::company-phone", ...args: any[]): void
    connect(sigName: "notify::email", callback: (...args: any[]) => void): number
    on(sigName: "notify::email", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email", ...args: any[]): void
    connect(sigName: "notify::email-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::email-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email-1", ...args: any[]): void
    connect(sigName: "notify::email-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::email-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email-2", ...args: any[]): void
    connect(sigName: "notify::email-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::email-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email-3", ...args: any[]): void
    connect(sigName: "notify::email-4", callback: (...args: any[]) => void): number
    on(sigName: "notify::email-4", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email-4", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email-4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email-4", ...args: any[]): void
    connect(sigName: "notify::family-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::family-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::family-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::family-name", ...args: any[]): void
    connect(sigName: "notify::fburl", callback: (...args: any[]) => void): number
    on(sigName: "notify::fburl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fburl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fburl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fburl", ...args: any[]): void
    connect(sigName: "notify::file-as", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-as", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-as", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-as", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-as", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::geo", callback: (...args: any[]) => void): number
    on(sigName: "notify::geo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::geo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::geo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::geo", ...args: any[]): void
    connect(sigName: "notify::given-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::given-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::given-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::given-name", ...args: any[]): void
    connect(sigName: "notify::home-fax", callback: (...args: any[]) => void): number
    on(sigName: "notify::home-fax", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::home-fax", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::home-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::home-fax", ...args: any[]): void
    connect(sigName: "notify::home-phone", callback: (...args: any[]) => void): number
    on(sigName: "notify::home-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::home-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::home-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::home-phone", ...args: any[]): void
    connect(sigName: "notify::home-phone-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::home-phone-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::home-phone-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::home-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::home-phone-2", ...args: any[]): void
    connect(sigName: "notify::homepage-url", callback: (...args: any[]) => void): number
    on(sigName: "notify::homepage-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::homepage-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::homepage-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::homepage-url", ...args: any[]): void
    connect(sigName: "notify::icscalendar", callback: (...args: any[]) => void): number
    on(sigName: "notify::icscalendar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icscalendar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icscalendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icscalendar", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::im-aim", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-aim", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-aim", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-aim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-aim", ...args: any[]): void
    connect(sigName: "notify::im-aim-home-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-aim-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-aim-home-1", ...args: any[]): void
    connect(sigName: "notify::im-aim-home-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-aim-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-aim-home-2", ...args: any[]): void
    connect(sigName: "notify::im-aim-home-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-aim-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-aim-home-3", ...args: any[]): void
    connect(sigName: "notify::im-aim-work-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-aim-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-aim-work-1", ...args: any[]): void
    connect(sigName: "notify::im-aim-work-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-aim-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-aim-work-2", ...args: any[]): void
    connect(sigName: "notify::im-aim-work-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-aim-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-aim-work-3", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-gadugadu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-gadugadu", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu-home-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-gadugadu-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-gadugadu-home-1", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu-home-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-gadugadu-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-gadugadu-home-2", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu-home-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-gadugadu-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-gadugadu-home-3", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu-work-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-gadugadu-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-gadugadu-work-1", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu-work-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-gadugadu-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-gadugadu-work-2", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu-work-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-gadugadu-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-gadugadu-work-3", ...args: any[]): void
    connect(sigName: "notify::im-google-talk", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-google-talk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-google-talk", ...args: any[]): void
    connect(sigName: "notify::im-google-talk-home-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-google-talk-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-google-talk-home-1", ...args: any[]): void
    connect(sigName: "notify::im-google-talk-home-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-google-talk-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-google-talk-home-2", ...args: any[]): void
    connect(sigName: "notify::im-google-talk-home-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-google-talk-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-google-talk-home-3", ...args: any[]): void
    connect(sigName: "notify::im-google-talk-work-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-google-talk-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-google-talk-work-1", ...args: any[]): void
    connect(sigName: "notify::im-google-talk-work-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-google-talk-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-google-talk-work-2", ...args: any[]): void
    connect(sigName: "notify::im-google-talk-work-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-google-talk-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-google-talk-work-3", ...args: any[]): void
    connect(sigName: "notify::im-groupwise", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-groupwise", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-groupwise", ...args: any[]): void
    connect(sigName: "notify::im-groupwise-home-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-groupwise-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-groupwise-home-1", ...args: any[]): void
    connect(sigName: "notify::im-groupwise-home-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-groupwise-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-groupwise-home-2", ...args: any[]): void
    connect(sigName: "notify::im-groupwise-home-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-groupwise-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-groupwise-home-3", ...args: any[]): void
    connect(sigName: "notify::im-groupwise-work-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-groupwise-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-groupwise-work-1", ...args: any[]): void
    connect(sigName: "notify::im-groupwise-work-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-groupwise-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-groupwise-work-2", ...args: any[]): void
    connect(sigName: "notify::im-groupwise-work-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-groupwise-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-groupwise-work-3", ...args: any[]): void
    connect(sigName: "notify::im-icq", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-icq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-icq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-icq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-icq", ...args: any[]): void
    connect(sigName: "notify::im-icq-home-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-icq-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-icq-home-1", ...args: any[]): void
    connect(sigName: "notify::im-icq-home-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-icq-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-icq-home-2", ...args: any[]): void
    connect(sigName: "notify::im-icq-home-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-icq-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-icq-home-3", ...args: any[]): void
    connect(sigName: "notify::im-icq-work-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-icq-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-icq-work-1", ...args: any[]): void
    connect(sigName: "notify::im-icq-work-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-icq-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-icq-work-2", ...args: any[]): void
    connect(sigName: "notify::im-icq-work-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-icq-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-icq-work-3", ...args: any[]): void
    connect(sigName: "notify::im-jabber", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-jabber", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-jabber", ...args: any[]): void
    connect(sigName: "notify::im-jabber-home-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-jabber-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-jabber-home-1", ...args: any[]): void
    connect(sigName: "notify::im-jabber-home-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-jabber-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-jabber-home-2", ...args: any[]): void
    connect(sigName: "notify::im-jabber-home-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-jabber-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-jabber-home-3", ...args: any[]): void
    connect(sigName: "notify::im-jabber-work-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-jabber-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-jabber-work-1", ...args: any[]): void
    connect(sigName: "notify::im-jabber-work-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-jabber-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-jabber-work-2", ...args: any[]): void
    connect(sigName: "notify::im-jabber-work-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-jabber-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-jabber-work-3", ...args: any[]): void
    connect(sigName: "notify::im-matrix", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-matrix", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-matrix", ...args: any[]): void
    connect(sigName: "notify::im-matrix-home-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-matrix-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-matrix-home-1", ...args: any[]): void
    connect(sigName: "notify::im-matrix-home-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-matrix-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-matrix-home-2", ...args: any[]): void
    connect(sigName: "notify::im-matrix-home-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-matrix-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-matrix-home-3", ...args: any[]): void
    connect(sigName: "notify::im-matrix-work-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-matrix-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-matrix-work-1", ...args: any[]): void
    connect(sigName: "notify::im-matrix-work-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-matrix-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-matrix-work-2", ...args: any[]): void
    connect(sigName: "notify::im-matrix-work-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-matrix-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-matrix-work-3", ...args: any[]): void
    connect(sigName: "notify::im-msn", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-msn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-msn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-msn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-msn", ...args: any[]): void
    connect(sigName: "notify::im-msn-home-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-msn-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-msn-home-1", ...args: any[]): void
    connect(sigName: "notify::im-msn-home-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-msn-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-msn-home-2", ...args: any[]): void
    connect(sigName: "notify::im-msn-home-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-msn-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-msn-home-3", ...args: any[]): void
    connect(sigName: "notify::im-msn-work-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-msn-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-msn-work-1", ...args: any[]): void
    connect(sigName: "notify::im-msn-work-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-msn-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-msn-work-2", ...args: any[]): void
    connect(sigName: "notify::im-msn-work-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-msn-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-msn-work-3", ...args: any[]): void
    connect(sigName: "notify::im-skype", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-skype", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-skype", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-skype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-skype", ...args: any[]): void
    connect(sigName: "notify::im-skype-home-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-skype-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-skype-home-1", ...args: any[]): void
    connect(sigName: "notify::im-skype-home-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-skype-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-skype-home-2", ...args: any[]): void
    connect(sigName: "notify::im-skype-home-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-skype-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-skype-home-3", ...args: any[]): void
    connect(sigName: "notify::im-skype-work-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-skype-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-skype-work-1", ...args: any[]): void
    connect(sigName: "notify::im-skype-work-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-skype-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-skype-work-2", ...args: any[]): void
    connect(sigName: "notify::im-skype-work-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-skype-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-skype-work-3", ...args: any[]): void
    connect(sigName: "notify::im-twitter", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-twitter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-twitter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-twitter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-twitter", ...args: any[]): void
    connect(sigName: "notify::im-yahoo", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-yahoo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-yahoo", ...args: any[]): void
    connect(sigName: "notify::im-yahoo-home-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-yahoo-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-home-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-yahoo-home-1", ...args: any[]): void
    connect(sigName: "notify::im-yahoo-home-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-yahoo-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-home-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-yahoo-home-2", ...args: any[]): void
    connect(sigName: "notify::im-yahoo-home-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-yahoo-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-home-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-yahoo-home-3", ...args: any[]): void
    connect(sigName: "notify::im-yahoo-work-1", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-yahoo-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-work-1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-yahoo-work-1", ...args: any[]): void
    connect(sigName: "notify::im-yahoo-work-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-yahoo-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-work-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-yahoo-work-2", ...args: any[]): void
    connect(sigName: "notify::im-yahoo-work-3", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-yahoo-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-work-3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-yahoo-work-3", ...args: any[]): void
    connect(sigName: "notify::isdn-phone", callback: (...args: any[]) => void): number
    on(sigName: "notify::isdn-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::isdn-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::isdn-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::isdn-phone", ...args: any[]): void
    connect(sigName: "notify::list", callback: (...args: any[]) => void): number
    on(sigName: "notify::list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::list", ...args: any[]): void
    connect(sigName: "notify::list-show-addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::list-show-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::list-show-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::list-show-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::list-show-addresses", ...args: any[]): void
    connect(sigName: "notify::logo", callback: (...args: any[]) => void): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::mailer", callback: (...args: any[]) => void): number
    on(sigName: "notify::mailer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mailer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mailer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mailer", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::mobile-phone", callback: (...args: any[]) => void): number
    on(sigName: "notify::mobile-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mobile-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mobile-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mobile-phone", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::name-or-org", callback: (...args: any[]) => void): number
    on(sigName: "notify::name-or-org", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name-or-org", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name-or-org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name-or-org", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: (...args: any[]) => void): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::note", callback: (...args: any[]) => void): number
    on(sigName: "notify::note", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::note", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::note", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::note", ...args: any[]): void
    connect(sigName: "notify::office", callback: (...args: any[]) => void): number
    on(sigName: "notify::office", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::office", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::office", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::office", ...args: any[]): void
    connect(sigName: "notify::org", callback: (...args: any[]) => void): number
    on(sigName: "notify::org", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::org", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::org", ...args: any[]): void
    connect(sigName: "notify::org-unit", callback: (...args: any[]) => void): number
    on(sigName: "notify::org-unit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::org-unit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::org-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::org-unit", ...args: any[]): void
    connect(sigName: "notify::other-fax", callback: (...args: any[]) => void): number
    on(sigName: "notify::other-fax", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::other-fax", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::other-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::other-fax", ...args: any[]): void
    connect(sigName: "notify::other-phone", callback: (...args: any[]) => void): number
    on(sigName: "notify::other-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::other-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::other-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::other-phone", ...args: any[]): void
    connect(sigName: "notify::pager", callback: (...args: any[]) => void): number
    on(sigName: "notify::pager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pager", ...args: any[]): void
    connect(sigName: "notify::pgpCert", callback: (...args: any[]) => void): number
    on(sigName: "notify::pgpCert", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pgpCert", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pgpCert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pgpCert", ...args: any[]): void
    connect(sigName: "notify::phone", callback: (...args: any[]) => void): number
    on(sigName: "notify::phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phone", ...args: any[]): void
    connect(sigName: "notify::photo", callback: (...args: any[]) => void): number
    on(sigName: "notify::photo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::photo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::photo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::photo", ...args: any[]): void
    connect(sigName: "notify::primary-phone", callback: (...args: any[]) => void): number
    on(sigName: "notify::primary-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::primary-phone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::primary-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::primary-phone", ...args: any[]): void
    connect(sigName: "notify::radio", callback: (...args: any[]) => void): number
    on(sigName: "notify::radio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radio", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::sip", callback: (...args: any[]) => void): number
    on(sigName: "notify::sip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sip", ...args: any[]): void
    connect(sigName: "notify::spouse", callback: (...args: any[]) => void): number
    on(sigName: "notify::spouse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spouse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spouse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spouse", ...args: any[]): void
    connect(sigName: "notify::telex", callback: (...args: any[]) => void): number
    on(sigName: "notify::telex", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::telex", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::telex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::telex", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tty", callback: (...args: any[]) => void): number
    on(sigName: "notify::tty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tty", ...args: any[]): void
    connect(sigName: "notify::video-url", callback: (...args: any[]) => void): number
    on(sigName: "notify::video-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::video-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::video-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::video-url", ...args: any[]): void
    connect(sigName: "notify::wants-html", callback: (...args: any[]) => void): number
    on(sigName: "notify::wants-html", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wants-html", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wants-html", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wants-html", ...args: any[]): void
    connect(sigName: "notify::x509Cert", callback: (...args: any[]) => void): number
    on(sigName: "notify::x509Cert", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x509Cert", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x509Cert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x509Cert", ...args: any[]): void
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
    disconnect(id: number): void
}

class Contact extends VCard {

    // Own properties of EBookContacts-1.2.EBookContacts.Contact

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.Contact

    constructor(config?: Contact.ConstructorProperties) 
    /**
     * Creates a new, blank #EContact.
     * @constructor 
     * @returns A new #EContact.
     */
    constructor() 
    /**
     * Creates a new, blank #EContact.
     * @constructor 
     * @returns A new #EContact.
     */
    static new(): Contact

    // Overloads of new

    /**
     * Creates a new, blank #EVCard.
     * @constructor 
     * @returns A new, blank #EVCard.
     */
    static new(): VCard
    /**
     * Creates a new #EContact based on a vcard.
     * @constructor 
     * @param vcard a string representing a vcard
     * @returns A new #EContact.
     */
    static newFromVcard(vcard: string): Contact
    /**
     * Creates a new #EContact based on a vcard and a predefined UID.
     * @constructor 
     * @param vcard a string representing a vcard
     * @param uid a contact UID
     * @returns A new #EContact.
     */
    static newFromVcardWithUid(vcard: string, uid: string): Contact
    _init(config?: Contact.ConstructorProperties): void
    /**
     * Gets the #EContactField corresponding to the `field_name`.
     * @param fieldName a string representing a contact field
     * @returns An #EContactField corresponding to @field_name, or 0 if it doesn't exist.
     */
    static fieldId(fieldName: string): ContactField
    /**
     * Gets the #EContactField corresponding to the `vcard_field`.
     * @param vcardField a string representing a vCard field
     * @returns An #EContactField corresponding to @vcard_field, or 0 if it doesn't exist.
     */
    static fieldIdFromVcard(vcardField: string): ContactField
    /**
     * Returns whether the `field_id` is of a string type,
     * thus it can be used with e_contact_get_const().
     * @param fieldId an #EContactField
     * @returns Whether the @field_id is of a string type.
     */
    static fieldIsString(fieldId: ContactField): boolean
    /**
     * Gets the string representation of `field_id`.
     * @param fieldId an #EContactField
     * @returns The string representation of @field_id
     */
    static fieldName(fieldId: ContactField): string
    /**
     * Gets the #GType used for this contact field, this indicates
     * what kind of value can be passed to e_contact_set().
     * @param fieldId an #EContactField
     * @returns The #GType used for @field_id, or %G_TYPE_INVALID if it doesn't exist.
     */
    static fieldType(fieldId: ContactField): GObject.GType
    /**
     * Gets a human-readable, translated string representation
     * of `field_id`.
     * @param fieldId an #EContactField
     * @returns The human-readable representation of @field_id
     */
    static prettyName(fieldId: ContactField): string
    /**
     * Gets the vcard attribute corresponding to `field_id,` as a string.
     * @param fieldId an #EContactField
     * @returns The vcard attribute corresponding to @field_id
     */
    static vcardAttribute(fieldId: ContactField): string
}

module SourceBackendSummarySetup {

    // Constructor properties interface

    interface ConstructorProperties extends EDataServer.SourceExtension.ConstructorProperties {

        // Own constructor properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup

        indexedFields?: string | null
        summaryFields?: string | null
    }

}

interface SourceBackendSummarySetup {

    // Own properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup

    indexedFields: string | null
    summaryFields: string | null
    __gtype__: number

    // Owm methods of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup

    /**
     * Fetches the #EContactFields configured to be indexed, with thier respective #EBookIndexTypes.
     * @returns The array of indexed #EContactFields.
     */
    getIndexedFields(): [ /* returnType */ ContactField, /* types */ BookIndexType, /* nFields */ number ]
    /**
     * Fetches the #EContactFields which are configured to be a part of the summary.
     * 
     * <note><para>If there are no configured summary fields, the default configuration is assumed</para></note>
     * @returns An array of #EContactFields @n_fields long, should be freed with g_free() when done.
     */
    getSummaryFields(): [ /* returnType */ ContactField, /* nFields */ number ]
    /**
     * Defines indexes for quick reference for the given given #EContactFields in the addressbook.
     * 
     * The same #EContactField may be specified multiple times to create multiple indexes
     * with different characteristics. If an #E_BOOK_INDEX_PREFIX index is created it will
     * be used for #E_BOOK_QUERY_BEGINS_WITH queries. An #E_BOOK_INDEX_SUFFIX index
     * will be constructed efficiently for suffix matching and will be used for
     * #E_BOOK_QUERY_ENDS_WITH queries. Similar an #E_BOOK_INDEX_PHONE index will optimize
     * #E_BOOK_QUERY_EQUALS_PHONE_NUMBER searches.
     * 
     * <note><para>The specified indexed fields must also be a part of the summary, any indexed fields
     * specified that are not already a part of the summary will be ignored.</para></note>
     * @param fields The array of #EContactFields to set indexes for
     * @param types The array of #EBookIndexTypes defining what types of indexes to create
     * @param nFields The number elements in the passed `fields,` `rule_types` and `rules` arrays.
     */
    setIndexedFieldsv(fields: ContactField, types: BookIndexType, nFields: number): void
    /**
     * Sets the summary fields configured for the given addressbook.
     * 
     * The fields %E_CONTACT_UID and %E_CONTACT_REV are not optional,
     * they will be stored in the summary regardless of the configured summary.
     * 
     * An empty summary configuration is assumed to be the default summary
     * configuration.
     * 
     * <note><para>Only #EContactFields with the type #G_TYPE_STRING or #G_TYPE_BOOLEAN
     * are currently supported as summary fields.</para></note>
     * @param fields The array of #EContactFields to set as summary fields
     * @param nFields The number of #EContactFields in `fields`
     */
    setSummaryFieldsv(fields: ContactField, nFields: number): void

    // Class property signals of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup

    connect(sigName: "notify::indexed-fields", callback: (...args: any[]) => void): number
    on(sigName: "notify::indexed-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::indexed-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::indexed-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::indexed-fields", ...args: any[]): void
    connect(sigName: "notify::summary-fields", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary-fields", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceBackendSummarySetup extends EDataServer.SourceExtension {

    // Own properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup

    constructor(config?: SourceBackendSummarySetup.ConstructorProperties) 
    _init(config?: SourceBackendSummarySetup.ConstructorProperties): void
}

module VCard {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface VCard {

    // Own properties of EBookContacts-1.2.EBookContacts.VCard

    __gtype__: number

    // Own fields of EBookContacts-1.2.EBookContacts.VCard

    parent: GObject.Object

    // Owm methods of EBookContacts-1.2.EBookContacts.VCard

    /**
     * Prepends `attr` to `evc`. This takes ownership of `attr`.
     * @param attr an #EVCardAttribute to add
     */
    addAttribute(attr: VCardAttribute): void
    /**
     * Prepends `attr` to `evcard,` setting it to `value`. This takes ownership of
     * `attr`.
     * 
     * This is a convenience wrapper around e_vcard_attribute_add_value() and
     * e_vcard_add_attribute().
     * @param attr an #EVCardAttribute to add
     * @param value a value to assign to the attribute
     */
    addAttributeWithValue(attr: VCardAttribute, value: string): void
    /**
     * Appends `attr` to `evc` to the end of a list of attributes. This takes
     * ownership of `attr`.
     * @param attr an #EVCardAttribute to append
     */
    appendAttribute(attr: VCardAttribute): void
    /**
     * Appends `attr` to `evcard,` setting it to `value`. This takes ownership of
     * `attr`.
     * 
     * This is a convenience wrapper around e_vcard_attribute_add_value() and
     * e_vcard_append_attribute().
     * @param attr an #EVCardAttribute to append
     * @param value a value to assign to the attribute
     */
    appendAttributeWithValue(attr: VCardAttribute, value: string): void
    /**
     * Constructs the existing #EVCard, `evc,` setting its vCard data to `str`.
     * 
     * This modifies `evc`.
     * @param str a vCard string
     */
    construct(str: string): void
    /**
     * Similar to e_vcard_construct_with_uid(), but can also
     * be used with an `str` that is not %NULL terminated.
     * @param str a vCard string
     * @param len length of `str,` or -1 if `str` is %NULL terminated
     * @param uid a unique ID string
     */
    constructFull(str: string, len: number, uid: string | null): void
    /**
     * Constructs the existing #EVCard, `evc,` setting its vCard data to `str,` and
     * adding a new UID attribute with the value given in `uid` (if `uid` is
     * non-%NULL).
     * 
     * This modifies `evc`.
     * @param str a vCard string
     * @param uid a unique ID string
     */
    constructWithUid(str: string, uid: string | null): void
    /**
     * Prints a dump of `evc'`s structure to stdout. Used for
     * debugging.
     */
    dumpStructure(): void
    /**
     * Get the attribute `name` from `evc`.  The #EVCardAttribute is owned by
     * `evcard` and should not be freed. If the attribute does not exist, %NULL is
     * returned.
     * 
     * <note><para>This will only return the <emphasis>first</emphasis> attribute
     * with the given `name`. To get other attributes of that name (for example,
     * other <code>TEL</code> attributes if a contact has multiple telephone
     * numbers), use e_vcard_get_attributes() and iterate over the list searching
     * for matching attributes.</para>
     * <para>This method iterates over all attributes in the #EVCard, so should not
     * be called often. If extracting a large number of attributes from a vCard, it
     * is more efficient to iterate once over the list returned by
     * e_vcard_get_attributes().</para></note>
     * @param name the name of the attribute to get
     * @returns An #EVCardAttribute if found, or %NULL.
     */
    getAttribute(name: string): VCardAttribute | null
    /**
     * Similar to e_vcard_get_attribute() but this method will not attempt to
     * parse the vCard if it is not already parsed.
     * @param name the name of the attribute to get
     * @returns An #EVCardAttribute if found, or %NULL.
     */
    getAttributeIfParsed(name: string): VCardAttribute | null
    /**
     * Gets the list of all attributes from `evcard`. The list and its
     * contents are owned by `evcard,` and must not be freed.
     * @returns A list of attributes of type #EVCardAttribute.
     */
    getAttributes(): VCardAttribute[]
    /**
     * Check if the `evc` has been parsed already, as #EVCard implements lazy parsing
     * of its vCard data. Used for debugging.
     * @returns %TRUE if @evc has been parsed, %FALSE otherwise.
     */
    isParsed(): boolean
    /**
     * Removes `attr` from `evc` and frees it. This takes ownership of `attr`.
     * @param attr an #EVCardAttribute to remove
     */
    removeAttribute(attr: VCardAttribute): void
    /**
     * Removes all the attributes with group name and attribute name equal to the
     * passed in values. If `attr_group` is %NULL or an empty string,
     * it removes all the attributes with passed in name irrespective of
     * their group names.
     * @param attrGroup group name of attributes to be removed
     * @param attrName name of the arributes to be removed
     */
    removeAttributes(attrGroup: string | null, attrName: string): void
    /**
     * Exports `evc` to a string representation, specified
     * by the `format` argument.
     * @param format the format to export to
     * @returns A newly allocated string representing the vcard.
     */
    toString(format: VCardFormat): string | null
    utilDupXAttribute(xName: string): string | null
    /**
     * Sets an "X-" attribute `x_name` to value `value` in `vcard,` or
     * removes it from `vcard,` when `value` is %NULL.
     * @param xName the attribute name, which starts with "X-"
     * @param value the value to set, or %NULL to unset
     */
    utilSetXAttribute(xName: string, value: string | null): void

    // Class property signals of EBookContacts-1.2.EBookContacts.VCard

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
    disconnect(id: number): void
}

class VCard extends GObject.Object {

    // Own properties of EBookContacts-1.2.EBookContacts.VCard

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.VCard

    constructor(config?: VCard.ConstructorProperties) 
    /**
     * Creates a new, blank #EVCard.
     * @constructor 
     * @returns A new, blank #EVCard.
     */
    constructor() 
    /**
     * Creates a new, blank #EVCard.
     * @constructor 
     * @returns A new, blank #EVCard.
     */
    static new(): VCard
    /**
     * Creates a new #EVCard from the passed-in string
     * representation.
     * @constructor 
     * @param str a string representation of the vcard to create
     * @returns A new #EVCard.
     */
    static newFromString(str: string): VCard
    _init(config?: VCard.ConstructorProperties): void
    /**
     * Escapes a string according to RFC2426, section 5.
     * @param s the string to escape
     * @returns A newly allocated, escaped string.
     */
    static escapeString(s: string): string | null
    /**
     * Unescapes a string according to RFC2426, section 5.
     * @param s the string to unescape
     * @returns A newly allocated, unescaped string.
     */
    static unescapeString(s: string): string | null
}

interface AddressWestern {

    // Own fields of EBookContacts-1.2.EBookContacts.AddressWestern

    /**
     * PO Box.
     * @field 
     */
    poBox: string | null
    /**
     * TODO, we're not sure what this is.
     * @field 
     */
    extended: string | null
    /**
     * Street name
     * @field 
     */
    street: string | null
    /**
     * City or town
     * @field 
     */
    locality: string | null
    /**
     * State or province
     * @field 
     */
    region: string | null
    /**
     * Postal Code
     * @field 
     */
    postalCode: string | null
    /**
     * Country
     * @field 
     */
    country: string | null

    // Owm methods of EBookContacts-1.2.EBookContacts.AddressWestern

    /**
     * Creates a copy of `eaw`.
     * @returns A new #EAddressWestern struct identical to @eaw.
     */
    copy(): AddressWestern
    /**
     * Frees `eaw` and its contents.
     */
    free(): void
}

/**
 * Western address structure.
 * @record 
 */
class AddressWestern {

    // Own properties of EBookContacts-1.2.EBookContacts.AddressWestern

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.AddressWestern

    /**
     * Parses a string representing a mailing address into a
     * structure of type #EAddressWestern.
     * @param inAddress a string representing a mailing address
     * @returns A new #EAddressWestern structure, or %NULL if    the parsing failed or when the @in_address was %NULL.
     */
    static parse(inAddress: string | null): AddressWestern | null
}

interface BookChange {

    // Own fields of EBookContacts-1.2.EBookContacts.BookChange

    /**
     * The #EBookChangeType
     * @field 
     */
    changeType: BookChangeType
    /**
     * The #EContact which changed
     * @field 
     */
    contact: Contact
}

/**
 * This is a part of the deprecated #EBook API.
 * @record 
 */
class BookChange {

    // Own properties of EBookContacts-1.2.EBookContacts.BookChange

    static name: string
}

interface BookClientViewSortFields {

    // Own fields of EBookContacts-1.2.EBookContacts.BookClientViewSortFields

    /**
     * an #EContactField to sort by
     * @field 
     */
    field: ContactField
    /**
     * an #EBookCursorSortType
     * @field 
     */
    sortType: BookCursorSortType
}

/**
 * This is a structure describing sort settings in the view.
 * See e_book_client_view_set_sort_fields_sync() for more information.
 * @record 
 */
class BookClientViewSortFields {

    // Own properties of EBookContacts-1.2.EBookContacts.BookClientViewSortFields

    static name: string
}

interface BookIndices {

    // Own fields of EBookContacts-1.2.EBookContacts.BookIndices

    /**
     * a character for the index
     * @field 
     */
    chr: string | null
    /**
     * 0-based index of the first contact with this character
     * @field 
     */
    index: number
}

/**
 * This is a structure describing indices of the contacts in the view.
 * See e_book_client_view_dup_indices() for more information.
 * @record 
 */
class BookIndices {

    // Own properties of EBookContacts-1.2.EBookContacts.BookIndices

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.BookIndices

    /**
     * Returns whether the `self` considers contacts stored in the ascending order.
     * @param self an #EBookIndicesUpdater
     * @returns %TRUE, when considers contacts sorted in ascending order,    %FALSE when in the descending order.
     */
    static getAscendingSort(self: BookIndicesUpdater): boolean
    /**
     * Sets whether the contacts are sorted in an ascending order; if not,
     * then they are sorted in the descending order. That influences what
     * indexes the indices have set.
     * @param self an #EBookIndicesUpdater
     * @param ascendingSort the value to set
     */
    static setAscendingSort(self: BookIndicesUpdater, ascendingSort: boolean): void
}

interface BookIndicesUpdaterClass {
}

abstract class BookIndicesUpdaterClass {

    // Own properties of EBookContacts-1.2.EBookContacts.BookIndicesUpdaterClass

    static name: string
}

interface BookIndicesUpdaterPrivate {
}

class BookIndicesUpdaterPrivate {

    // Own properties of EBookContacts-1.2.EBookContacts.BookIndicesUpdaterPrivate

    static name: string
}

interface BookQuery {

    // Owm methods of EBookContacts-1.2.EBookContacts.BookQuery

    /**
     * Creates a copy of `q`.
     * @returns A new #EBookQuery identical to @q.
     */
    copy(): BookQuery
    /**
     * Creates a new #EBookQuery which is the opposite of #q.
     * @param unref if %TRUE, the new query takes ownership of the existing queries
     * @returns the new #EBookQuery
     */
    not(unref: boolean): BookQuery
    /**
     * Increment the reference count on `q`.
     * @returns @q
     */
    ref(): BookQuery
    /**
     * Return the string representation of `q`.
     * @returns The string form of the query. This string should be freed when finished with.
     */
    toString(): string | null
    /**
     * Decrement the reference count on `q`. When the reference count reaches 0, `q`
     * will be freed and any child queries will have e_book_query_unref() called.
     */
    unref(): void
}

class BookQuery {

    // Own properties of EBookContacts-1.2.EBookContacts.BookQuery

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.BookQuery

    /**
     * Create a new #EBookQuery which is the logical AND of the queries in #qs.
     * @param nqs the number of queries to AND
     * @param qs pointer to an array of #EBookQuery items
     * @param unref if %TRUE, the new query takes ownership of the existing queries
     * @returns A new #EBookQuery
     */
    static and(nqs: number, qs: BookQuery, unref: boolean): BookQuery
    /**
     * Creates a new #EBookQuery which tests if any field contains `value`.
     * @param value a value
     * @returns the new #EBookQuery
     */
    static anyFieldContains(value: string): BookQuery
    /**
     * Creates a new #EBookQuery which tests if the field `field` exists.
     * @param field an #EContactField
     * @returns the new #EBookQuery
     */
    static fieldExists(field: ContactField): BookQuery
    /**
     * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
     * @param field an #EContactField to test
     * @param test the test to apply
     * @param value the value to test for
     * @returns the new #EBookQuery
     */
    static fieldTest(field: ContactField, test: BookQueryTest, value: string): BookQuery
    /**
     * Parse `query_string` and return a new #EBookQuery representing it.
     * @param queryString the query
     * @returns the new #EBookQuery.
     */
    static fromString(queryString: string): BookQuery
    /**
     * Creates a new #EBookQuery which is the logical OR of the queries in #qs.
     * @param nqs the number of queries to OR
     * @param qs pointer to an array of #EBookQuery items
     * @param unref if %TRUE, the new query takes ownership of the existing queries
     * @returns A new #EBookQuery
     */
    static or(nqs: number, qs: BookQuery, unref: boolean): BookQuery
    /**
     * Creates a new #EBookQuery which tests if the field `field` exists. `field`
     * should be a vCard field name, such as #EVC_FN or #EVC_X_MSN.
     * @param field a field name
     * @returns the new #EBookQuery
     */
    static vcardFieldExists(field: string): BookQuery
    /**
     * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
     * @param field a EVCard field name to test
     * @param test the test to apply
     * @param value the value to test for
     * @returns the new #EBookQuery
     */
    static vcardFieldTest(field: string, test: BookQueryTest, value: string): BookQuery
}

interface ContactAddress {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactAddress

    addressFormat: string | null
    po: string | null
    ext: string | null
    street: string | null
    locality: string | null
    region: string | null
    code: string | null
    country: string | null

    // Owm methods of EBookContacts-1.2.EBookContacts.ContactAddress

    /**
     * Frees the `address` struct and its contents.
     */
    free(): void
}

class ContactAddress {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactAddress

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.ContactAddress

    /**
     * Creates a new #EContactAddress struct.
     * @constructor 
     * @returns A new #EContactAddress struct.
     */
    constructor() 
    /**
     * Creates a new #EContactAddress struct.
     * @constructor 
     * @returns A new #EContactAddress struct.
     */
    static new(): ContactAddress
}

interface ContactCert {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactCert

    length: number
    data: string | null

    // Owm methods of EBookContacts-1.2.EBookContacts.ContactCert

    /**
     * Frees the `cert` struct and its contents.
     */
    free(): void
}

class ContactCert {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactCert

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.ContactCert

    /**
     * Creates an #EContactCert struct with all values set to 0.
     * @constructor 
     * @returns A new #EContactCert struct.
     */
    constructor() 
    /**
     * Creates an #EContactCert struct with all values set to 0.
     * @constructor 
     * @returns A new #EContactCert struct.
     */
    static new(): ContactCert
}

interface ContactClass {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactClass

    parentClass: VCardClass
}

abstract class ContactClass {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactClass

    static name: string
}

interface ContactDate {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactDate

    year: number
    month: number
    day: number

    // Owm methods of EBookContacts-1.2.EBookContacts.ContactDate

    /**
     * Checks if `dt1` and `dt2` are the same date.
     * @param dt2 an #EContactDate
     * @returns %TRUE if @dt1 and @dt2 are equal, %FALSE otherwise.
     */
    equal(dt2: ContactDate): boolean
    /**
     * Frees the `date` struct and its contents.
     */
    free(): void
    /**
     * Generates a date string in the format YYYY-MM-DD based
     * on the values of `dt`.
     * @returns A date string, owned by the caller.
     */
    toString(): string | null
}

class ContactDate {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactDate

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.ContactDate

    /**
     * Creates a new #EContactDate struct.
     * @constructor 
     * @returns A new #EContactDate struct.
     */
    constructor() 
    /**
     * Creates a new #EContactDate struct.
     * @constructor 
     * @returns A new #EContactDate struct.
     */
    static new(): ContactDate
    /**
     * Creates a new #EContactDate based on `str`.
     * @param str a date string in the format YYYY-MM-DD or YYYYMMDD
     * @returns A new #EContactDate struct.
     */
    static fromString(str: string): ContactDate
}

interface ContactGeo {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactGeo

    /**
     * latitude
     * @field 
     */
    latitude: number
    /**
     * longitude
     * @field 
     */
    longitude: number

    // Owm methods of EBookContacts-1.2.EBookContacts.ContactGeo

    /**
     * Frees the `geo` struct and its contents.
     */
    free(): void
}

class ContactGeo {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactGeo

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.ContactGeo

    /**
     * Creates an #EContactGeo struct with all coordinates set to 0.
     * @constructor 
     * @returns A new #EContactGeo struct.
     */
    constructor() 
    /**
     * Creates an #EContactGeo struct with all coordinates set to 0.
     * @constructor 
     * @returns A new #EContactGeo struct.
     */
    static new(): ContactGeo
}

interface ContactName {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactName

    family: string | null
    given: string | null
    additional: string | null
    prefixes: string | null
    suffixes: string | null

    // Owm methods of EBookContacts-1.2.EBookContacts.ContactName

    /**
     * Creates a copy of `n`.
     * @returns A new #EContactName identical to @n.
     */
    copy(): ContactName
    /**
     * Frees `name` and its contents.
     */
    free(): void
    /**
     * Generates a string representation of `name`.
     * @returns The string representation of @name.
     */
    toString(): string | null
}

class ContactName {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactName

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.ContactName

    /**
     * Creates a new #EContactName struct.
     * @constructor 
     * @returns A new #EContactName struct.
     */
    constructor() 
    /**
     * Creates a new #EContactName struct.
     * @constructor 
     * @returns A new #EContactName struct.
     */
    static new(): ContactName
    /**
     * Creates a new #EContactName based on the parsed `name_str`.
     * @param nameStr a string representing a contact's full name
     * @returns A new #EContactName struct.
     */
    static fromString(nameStr: string): ContactName
}

interface ContactPhoto {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactPhoto

    type: ContactPhotoType

    // Owm methods of EBookContacts-1.2.EBookContacts.ContactPhoto

    /**
     * Creates a copy of `photo`.
     * @returns A new #EContactPhoto struct identical to @photo.
     */
    copy(): ContactPhoto
    /**
     * Frees the `photo` struct and its contents.
     */
    free(): void
    /**
     * Gets the `photo'`s data.
     * @returns the inlined image in the #EContactPhoto, or %NULL if it has not been set.
     */
    getInlined(): number[] | null
    /**
     * Gets the `photo'`s mime type.
     * @returns the MIME type of the image, or %NULL if it has not been set.
     */
    getMimeType(): string | null
    /**
     * Gets the `photo'`s URI.
     * @returns the URI of the image, or %NULL if it has not been set
     */
    getUri(): string | null
    /**
     * Sets the `photo'`s inlined data.
     * @param data the inlined image data
     */
    setInlined(data: number[]): void
    /**
     * Sets the `photo'`s mime type.
     * @param mimeType the mime type
     */
    setMimeType(mimeType: string): void
    /**
     * Sets the `photo'`s URI.
     * @param uri the `photo'`s URI
     */
    setUri(uri: string): void
}

class ContactPhoto {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactPhoto

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.ContactPhoto

    /**
     * Creates a new #EContactPhoto struct.
     * @constructor 
     * @returns A new #EContactPhoto struct.
     */
    constructor() 
    /**
     * Creates a new #EContactPhoto struct.
     * @constructor 
     * @returns A new #EContactPhoto struct.
     */
    static new(): ContactPhoto
}

interface ContactPrivate {
}

class ContactPrivate {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactPrivate

    static name: string
}

interface NameWestern {

    // Own fields of EBookContacts-1.2.EBookContacts.NameWestern

    prefix: string | null
    first: string | null
    middle: string | null
    nick: string | null
    last: string | null
    suffix: string | null
    full: string | null

    // Owm methods of EBookContacts-1.2.EBookContacts.NameWestern

    /**
     * Creates a copy of `w`.
     * @returns A new #ENameWestern struct identical to @w.
     */
    copy(): NameWestern
    /**
     * Frees the `w` struct and its contents.
     */
    free(): void
}

class NameWestern {

    // Own properties of EBookContacts-1.2.EBookContacts.NameWestern

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.NameWestern

    /**
     * Parses `full_name` and returns an #ENameWestern struct filled with
     * the component parts of the name.
     * @param fullName A string containing a western name.
     * @returns A new #ENameWestern struct.
     */
    static parse(fullName: string): NameWestern
}

interface PhoneNumber {

    // Owm methods of EBookContacts-1.2.EBookContacts.PhoneNumber

    /**
     * Compares two phone numbers.
     * @param secondNumber the second EPhoneNumber to compare
     * @returns The quality of matching for the two phone numbers.
     */
    compare(secondNumber: PhoneNumber): PhoneNumberMatch
    /**
     * Makes a copy of `phone_number`.
     * @returns A newly allocated EPhoneNumber instance. Call e_phone_number_free() to release this instance.
     */
    copy(): PhoneNumber
    /**
     * Released the memory occupied by `phone_number`.
     */
    free(): void
    /**
     * Queries the `phone_number'`s country calling code and optionally stores the country
     * calling code's origin in `source`. For instance when parsing "+1-617-5423789" this
     * function would return one and assing E_PHONE_NUMBER_COUNTRY_FROM_FQTN to `source`.
     * @param source an optional location for storing the phone number's origin, or %NULL
     * @returns A valid country calling code, or zero if no code is known.
     */
    getCountryCode(source: PhoneNumberCountrySource | null): number
    /**
     * Queries the national portion of `phone_number` without any call-out
     * prefixes. For instance when parsing "+1-617-5423789" this function would
     * return the string "6175423789".
     * @returns The national portion of @phone_number.
     */
    getNationalNumber(): string | null
    /**
     * Describes the `phone_number` according to the rules applying to `format`.
     * @param format the phone number format to apply
     * @returns A formatted string for @phone_number.
     */
    toString(format: PhoneNumberFormat): string | null
}

/**
 * This opaque type describes a parsed phone number. It can be copied using
 * e_phone_number_copy(). To release it call e_phone_number_free().
 * @record 
 */
class PhoneNumber {

    // Own properties of EBookContacts-1.2.EBookContacts.PhoneNumber

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.PhoneNumber

    /**
     * Compares two phone numbers.
     * @param firstNumber the first EPhoneNumber to compare
     * @param secondNumber the second EPhoneNumber to compare
     * @returns The quality of matching for the two phone numbers.
     */
    static compareStrings(firstNumber: string, secondNumber: string): PhoneNumberMatch
    /**
     * Compares two phone numbers within the context of `region_code`.
     * @param firstNumber the first EPhoneNumber to compare
     * @param secondNumber the second EPhoneNumber to compare
     * @param regionCode a two-letter country code, or %NULL
     * @returns The quality of matching for the two phone numbers.
     */
    static compareStringsWithRegion(firstNumber: string, secondNumber: string, regionCode: string | null): PhoneNumberMatch
    static errorQuark(): GLib.Quark
    /**
     * Parses the string passed in `phone_number`. Note that no validation is
     * performed whether the recognized phone number is valid for a particular
     * region.
     * 
     * The two-letter country code passed in `region_code` only is used if the
     * `phone_number` is not written in international format. The application's
     * default region as returned by e_phone_number_get_default_region() is used
     * if `region_code` is %NULL.
     * 
     * If the number is guaranteed to start with a '+' followed by the country
     * calling code, then "ZZ" can be passed for `region_code`.
     * @param phoneNumber the phone number to parse
     * @param regionCode a two-letter country code, or %NULL
     * @returns a new #EPhoneNumber instance on success, or %NULL on error. Call e_phone_number_free() to release this instance.
     */
    static fromString(phoneNumber: string, regionCode: string | null): PhoneNumber
    /**
     * Retrieves the preferred country calling code for `region_code,`
     * e.g. 358 for "fi" or 1 for "en_US`UTF-8`".
     * 
     * If %NULL is passed for `region_code` the default region as returned by
     * e_phone_number_get_default_region() is used.
     * @param regionCode a two-letter country code, a locale name, or %NULL
     * @returns a valid country calling code, or zero if an unknown region code was passed.
     */
    static getCountryCodeForRegion(regionCode: string | null): number
    /**
     * Retrieves the current two-letter country code that's used by default for
     * parsing phone numbers in e_phone_number_from_string(). It can be useful
     * to store this number before parsing a bigger number of phone numbers.
     * 
     * The result of this functions depends on the current setup of the
     * %LC_ADDRESS category: If that category provides a reasonable value
     * for %_NL_ADDRESS_COUNTRY_AB2 this value is returned. Otherwise the
     * locale name configured for %LC_ADDRESS is parsed.
     * @returns a newly allocated string containing the current locale's two-letter code for phone number parsing.
     */
    static getDefaultRegion(): string | null
    /**
     * Checks if phone number support is available. It is recommended to call this
     * function before using any of the phone-utils functions to ensure that the
     * required functionality is available, and to pick alternative mechanisms if
     * needed.
     * @returns %TRUE if phone number support is available.
     */
    static isSupported(): boolean
}

interface SourceBackendSummarySetupClass {

    // Own fields of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetupClass

    parentClass: EDataServer.SourceBackendClass
}

abstract class SourceBackendSummarySetupClass {

    // Own properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetupClass

    static name: string
}

interface SourceBackendSummarySetupPrivate {
}

class SourceBackendSummarySetupPrivate {

    // Own properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetupPrivate

    static name: string
}

interface VCardAttribute {

    // Owm methods of EBookContacts-1.2.EBookContacts.VCardAttribute

    /**
     * Prepends `param` to `attr'`s list of parameters. This takes ownership of
     * `param` (and all its values).
     * 
     * Duplicate parameters have their values merged, so that all parameter names
     * in `attr` are unique. Values are also merged so that uniqueness is preserved.
     * @param param an #EVCardAttributeParam to add
     */
    addParam(param: VCardAttributeParam): void
    /**
     * Appends `value` to `param,` then prepends `param` to `attr`. This takes ownership
     * of `param,` but not of `value`.
     * 
     * This is a convenience method for e_vcard_attribute_param_add_value() and
     * e_vcard_attribute_add_param().
     * @param param an #EVCardAttributeParam
     * @param value a string value
     */
    addParamWithValue(param: VCardAttributeParam, value: string): void
    /**
     * Appends `value` to `attr'`s list of values.
     * @param value a string value
     */
    addValue(value: string): void
    /**
     * Encodes `value` according to the encoding used for `attr,` and appends it to
     * `attr'`s list of values.
     * 
     * This should only be used if the #EVCardAttribute has a non-raw encoding (i.e.
     * if it’s encoded in base-64 or quoted-printable encoding).
     * @param value an encoded value
     * @param len the length of the encoded value, in bytes
     */
    addValueDecoded(value: string, len: number): void
    /**
     * Makes a copy of `attr`.
     * @returns A new #EVCardAttribute identical to @attr.
     */
    copy(): VCardAttribute
    /**
     * Frees an attribute, its values and its parameters.
     */
    free(): void
    /**
     * Gets the group name of `attr`.
     * @returns The attribute's group name, or %NULL.
     */
    getGroup(): string | null
    /**
     * Gets the name of `attr`.
     * @returns The attribute's name.
     */
    getName(): string
    /**
     * Gets the list of values for the paramater `name` from `attr`. The list and its
     * contents are owned by `attr,` and must not be freed. If no parameter with the
     * given `name` exists, %NULL is returned.
     * @param name a parameter name
     * @returns A list of string elements representing the parameter's values, or %NULL.
     */
    getParam(name: string): string[] | null
    /**
     * Gets the list of parameters (of type #EVCardAttributeParam) from `attr`. The
     * list and its contents are owned by `attr,` and must not be freed.
     * @returns A list of elements of type #EVCardAttributeParam.
     */
    getParams(): VCardAttributeParam[]
    /**
     * Gets the value of a single-valued #EVCardAttribute, `attr`.
     * 
     * For example, for a <code>FN</code> (full name) attribute, this will
     * return the contact’s full name as a single string.
     * 
     * This will print a warning if called on an #EVCardAttribute which is not
     * single-valued (i.e. for which e_vcard_attribute_is_single_valued() returns
     * %FALSE). Use e_vcard_attribute_get_values() in such cases instead.
     * @returns A newly allocated string representing the value, or %NULL if the attribute has no value.
     */
    getValue(): string | null
    /**
     * Gets the value of a single-valued #EVCardAttribute, `attr,` decoding
     * it if necessary according to the encoding given in the vCard’s
     * <code>ENCODING</code> attribute.
     * 
     * This will print a warning if called on an #EVCardAttribute which is not
     * single-valued (i.e. for which e_vcard_attribute_is_single_valued() returns
     * %FALSE). Use e_vcard_attribute_get_values_decoded() in such cases instead.
     * @returns A newly allocated #GString representing the value, or %NULL if the attribute has no value.
     */
    getValueDecoded(): GLib.String | null
    /**
     * Gets the ordered list of values from `attr`. The list and its
     * contents are owned by `attr,` and must not be freed.
     * 
     * For example, for an <code>ADR</code> (postal address) attribute, this will
     * return the components of the postal address.
     * 
     * This may be called on a single-valued attribute (i.e. one for which
     * e_vcard_attribute_is_single_valued() returns %TRUE) and will return a
     * one-element list in that case. Alternatively, use
     * e_vcard_attribute_get_value() in such cases.
     * @returns A list of string values. They will all be non-%NULL, but may be empty strings. The list itself may be empty.
     */
    getValues(): string[]
    /**
     * Gets the ordered list of values from `attr,` decoding them if
     * necessary according to the encoding given in the vCard’s
     * <code>ENCODING</code> attribute. The list and its contents are owned by
     * `attr,` and must not be freed.
     * 
     * This may be called on a single-valued attribute (i.e. one for which
     * e_vcard_attribute_is_single_valued() returns %TRUE) and will return a
     * one-element list in that case. Alternatively, use
     * e_vcard_attribute_get_value_decoded() in such cases.
     * @returns A list of values of type #GString.
     */
    getValuesDecoded(): GLib.String[]
    /**
     * Checks if `attr` has an #EVCardAttributeParam with name %EVC_TYPE and `typestr`
     * as one of its values.
     * 
     * For example, for the vCard attribute:
     * 
     * ```
     * TEL;TYPE=WORK,VOICE:(111) 555-1212
     * ```
     * 
     * the following holds true:
     * 
     * ```
     * g_assert_true (e_vcard_attribute_has_type (attr, "WORK") == TRUE);
     * g_assert_true (e_vcard_attribute_has_type (attr, "voice") == TRUE);
     * g_assert_true (e_vcard_attribute_has_type (attr, "HOME") == FALSE);
     * ```
     * 
     * 
     * Comparisons against `typestr` are case-insensitive.
     * @param typestr a string representing the type
     * @returns %TRUE if such a parameter exists, %FALSE otherwise.
     */
    hasType(typestr: string): boolean
    /**
     * Checks if `attr` has a single value.
     * @returns %TRUE if the attribute has exactly one value, %FALSE otherwise.
     */
    isSingleValued(): boolean
    /**
     * Removes and frees parameter `param_name` from the attribute `attr`. Parameter
     * names are guaranteed to be unique, so `attr` is guaranteed to have no
     * parameters named `param_name` after this function returns.
     * @param paramName a parameter name
     */
    removeParam(paramName: string): void
    /**
     * Removes the value `s` from the parameter `param_name` on the attribute `attr`.
     * If `s` was the only value for parameter `param_name,` that parameter is removed
     * entirely from `attr` and freed.
     * @param paramName a parameter name
     * @param s a value
     */
    removeParamValue(paramName: string, s: string): void
    /**
     * Removes and frees all parameters from `attr`.
     * 
     * This also resets the #EVCardAttribute's encoding back to raw.
     */
    removeParams(): void
    /**
     * Removes value `s` from the value list in `attr`. The value `s` is not freed.
     * @param s a value to remove
     */
    removeValue(s: string): void
    /**
     * Removes and frees all values from `attr`.
     */
    removeValues(): void
}

class VCardAttribute {

    // Own properties of EBookContacts-1.2.EBookContacts.VCardAttribute

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.VCardAttribute

    /**
     * Creates a new #EVCardAttribute with the specified group and
     * attribute names. The `attr_group` may be %NULL or the empty string if no
     * group is needed.
     * @constructor 
     * @param attrGroup a group name
     * @param attrName an attribute name
     * @returns A new #EVCardAttribute.
     */
    constructor(attrGroup: string | null, attrName: string) 
    /**
     * Creates a new #EVCardAttribute with the specified group and
     * attribute names. The `attr_group` may be %NULL or the empty string if no
     * group is needed.
     * @constructor 
     * @param attrGroup a group name
     * @param attrName an attribute name
     * @returns A new #EVCardAttribute.
     */
    static new(attrGroup: string | null, attrName: string): VCardAttribute
}

interface VCardAttributeParam {

    // Owm methods of EBookContacts-1.2.EBookContacts.VCardAttributeParam

    /**
     * Appends `value` to `param'`s list of values.
     * @param value a string value to add
     */
    addValue(value: string): void
    /**
     * Makes a copy of `param` and all its values.
     * @returns a new #EVCardAttributeParam identical to @param.
     */
    copy(): VCardAttributeParam
    /**
     * Frees `param` and its values.
     */
    free(): void
    /**
     * Gets the name of `param`.
     * 
     * For example, for the only parameter of the vCard attribute:
     * 
     * ```
     * TEL;TYPE=WORK,VOICE:(111) 555-1212
     * ```
     * 
     * this would return <code>TYPE</code> (which is string-equivalent to
     * %EVC_TYPE).
     * @returns The name of the parameter.
     */
    getName(): string
    /**
     * Gets the list of values from `param`. The list and its
     * contents are owned by `param,` and must not be freed.
     * 
     * For example, for the <code>TYPE</code> parameter of the vCard attribute:
     * 
     * ```
     * TEL;TYPE=WORK,VOICE:(111) 555-1212
     * ```
     * 
     * this would return the list <code>WORK</code>, <code>VOICE</code>.
     * @returns A list of string elements representing the parameter's values.
     */
    getValues(): string[]
    /**
     * Removes and frees all values from `param`.
     */
    removeValues(): void
}

class VCardAttributeParam {

    // Own properties of EBookContacts-1.2.EBookContacts.VCardAttributeParam

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.VCardAttributeParam

    /**
     * Creates a new parameter named `name`.
     * @constructor 
     * @param name the name of the new parameter
     * @returns A new #EVCardAttributeParam.
     */
    constructor(name: string) 
    /**
     * Creates a new parameter named `name`.
     * @constructor 
     * @param name the name of the new parameter
     * @returns A new #EVCardAttributeParam.
     */
    static new(name: string): VCardAttributeParam
}

interface VCardClass {

    // Own fields of EBookContacts-1.2.EBookContacts.VCardClass

    parentClass: GObject.ObjectClass
}

abstract class VCardClass {

    // Own properties of EBookContacts-1.2.EBookContacts.VCardClass

    static name: string
}

interface VCardPrivate {
}

class VCardPrivate {

    // Own properties of EBookContacts-1.2.EBookContacts.VCardPrivate

    static name: string
}

}

export default EBookContacts;
// END