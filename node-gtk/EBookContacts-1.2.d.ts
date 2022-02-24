/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EBookContacts-1.2
 */

import type libxml2 from './libxml2-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type EDataServer from './EDataServer-1.2';
import type Soup from './Soup-2.4';
import type GData from './GData-0.0';
import type Json from './Json-1.0';
import type Goa from './Goa-1.0';
import type Camel from './Camel-1.2';

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
}
/**
 * Defines the behaviour of e_book_client_cursor_step().
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
function addressWesternParse(inAddress?: string | null): AddressWestern | null
function bookClientErrorCreate(code: BookClientError, customMsg?: string | null): GLib.Error
function bookClientErrorQuark(): GLib.Quark
function bookClientErrorToString(code: BookClientError): string
function bookQueryAnd(nqs: number, qs: BookQuery, unref: boolean): BookQuery
function bookQueryAnyFieldContains(value: string): BookQuery
function bookQueryFieldExists(field: ContactField): BookQuery
function bookQueryFieldTest(field: ContactField, test: BookQueryTest, value: string): BookQuery
function bookQueryFromString(queryString: string): BookQuery
function bookQueryOr(nqs: number, qs: BookQuery, unref: boolean): BookQuery
function bookQueryVcardFieldExists(field: string): BookQuery
function bookQueryVcardFieldTest(field: string, test: BookQueryTest, value: string): BookQuery
function bookUtilConflictResolutionToOperationFlags(conflictResolution: EDataServer.ConflictResolution): number
function bookUtilForeachAddress(emailAddress: string, func: GLib.HRFunc): void
function bookUtilOperationFlagsToConflictResolution(flags: number): EDataServer.ConflictResolution
function contactAttrListCopy(list: string[]): string[]
function contactAttrListFree(list: string[]): void
function contactDateFromString(str: string): ContactDate
function contactNameFromString(nameStr: string): ContactName
function nameWesternParse(fullName: string): NameWestern
function phoneNumberCompareStrings(firstNumber: string, secondNumber: string): PhoneNumberMatch
function phoneNumberCompareStringsWithRegion(firstNumber: string, secondNumber: string, regionCode?: string | null): PhoneNumberMatch
function phoneNumberErrorQuark(): GLib.Quark
function phoneNumberFromString(phoneNumber: string, regionCode?: string | null): PhoneNumber
function phoneNumberGetCountryCodeForRegion(regionCode?: string | null): number
function phoneNumberGetDefaultRegion(): string
function phoneNumberIsSupported(): boolean
interface Contact_ConstructProps extends VCard_ConstructProps {
    /* Constructor properties of EBookContacts-1.2.EBookContacts.Contact */
    rev?: string
    address?: any
    addressHome?: ContactAddress
    addressLabelHome?: string
    addressLabelOther?: string
    addressLabelWork?: string
    addressOther?: ContactAddress
    addressWork?: ContactAddress
    anniversary?: ContactDate
    assistant?: string
    assistantPhone?: string
    birthDate?: ContactDate
    blogUrl?: string
    bookUid?: string
    businessFax?: string
    businessPhone?: string
    businessPhone2?: string
    callbackPhone?: string
    caluri?: string
    carPhone?: string
    categories?: string
    categoryList?: object
    companyPhone?: string
    email?: any
    email1?: string
    email2?: string
    email3?: string
    email4?: string
    familyName?: string
    fburl?: string
    fileAs?: string
    fullName?: string
    geo?: ContactGeo
    givenName?: string
    homeFax?: string
    homePhone?: string
    homePhone2?: string
    homepageUrl?: string
    icscalendar?: string
    id?: string
    imAim?: any
    imAimHome1?: string
    imAimHome2?: string
    imAimHome3?: string
    imAimWork1?: string
    imAimWork2?: string
    imAimWork3?: string
    imGadugadu?: any
    imGadugaduHome1?: string
    imGadugaduHome2?: string
    imGadugaduHome3?: string
    imGadugaduWork1?: string
    imGadugaduWork2?: string
    imGadugaduWork3?: string
    imGoogleTalk?: any
    imGoogleTalkHome1?: string
    imGoogleTalkHome2?: string
    imGoogleTalkHome3?: string
    imGoogleTalkWork1?: string
    imGoogleTalkWork2?: string
    imGoogleTalkWork3?: string
    imGroupwise?: any
    imGroupwiseHome1?: string
    imGroupwiseHome2?: string
    imGroupwiseHome3?: string
    imGroupwiseWork1?: string
    imGroupwiseWork2?: string
    imGroupwiseWork3?: string
    imIcq?: any
    imIcqHome1?: string
    imIcqHome2?: string
    imIcqHome3?: string
    imIcqWork1?: string
    imIcqWork2?: string
    imIcqWork3?: string
    imJabber?: any
    imJabberHome1?: string
    imJabberHome2?: string
    imJabberHome3?: string
    imJabberWork1?: string
    imJabberWork2?: string
    imJabberWork3?: string
    imMatrix?: any
    imMatrixHome1?: string
    imMatrixHome2?: string
    imMatrixHome3?: string
    imMatrixWork1?: string
    imMatrixWork2?: string
    imMatrixWork3?: string
    imMsn?: any
    imMsnHome1?: string
    imMsnHome2?: string
    imMsnHome3?: string
    imMsnWork1?: string
    imMsnWork2?: string
    imMsnWork3?: string
    imSkype?: any
    imSkypeHome1?: string
    imSkypeHome2?: string
    imSkypeHome3?: string
    imSkypeWork1?: string
    imSkypeWork2?: string
    imSkypeWork3?: string
    imTwitter?: any
    imYahoo?: any
    imYahooHome1?: string
    imYahooHome2?: string
    imYahooHome3?: string
    imYahooWork1?: string
    imYahooWork2?: string
    imYahooWork3?: string
    isdnPhone?: string
    list?: boolean
    listShowAddresses?: boolean
    logo?: ContactPhoto
    mailer?: string
    manager?: string
    mobilePhone?: string
    name?: ContactName
    nickname?: string
    note?: string
    office?: string
    org?: string
    orgUnit?: string
    otherFax?: string
    otherPhone?: string
    pager?: string
    pgpCert?: ContactCert
    phone?: any
    photo?: ContactPhoto
    primaryPhone?: string
    radio?: string
    role?: string
    sip?: any
    spouse?: string
    telex?: string
    title?: string
    tty?: string
    videoUrl?: string
    wantsHtml?: boolean
    x509Cert?: ContactCert
}
class Contact {
    /* Properties of EBookContacts-1.2.EBookContacts.Contact */
    rev: string
    address: any
    addressHome: ContactAddress
    addressLabelHome: string
    addressLabelOther: string
    addressLabelWork: string
    addressOther: ContactAddress
    addressWork: ContactAddress
    anniversary: ContactDate
    assistant: string
    assistantPhone: string
    birthDate: ContactDate
    blogUrl: string
    bookUid: string
    businessFax: string
    businessPhone: string
    businessPhone2: string
    callbackPhone: string
    caluri: string
    carPhone: string
    categories: string
    categoryList: object
    companyPhone: string
    email: any
    email1: string
    email2: string
    email3: string
    email4: string
    familyName: string
    fburl: string
    fileAs: string
    fullName: string
    geo: ContactGeo
    givenName: string
    homeFax: string
    homePhone: string
    homePhone2: string
    homepageUrl: string
    icscalendar: string
    id: string
    imAim: any
    imAimHome1: string
    imAimHome2: string
    imAimHome3: string
    imAimWork1: string
    imAimWork2: string
    imAimWork3: string
    imGadugadu: any
    imGadugaduHome1: string
    imGadugaduHome2: string
    imGadugaduHome3: string
    imGadugaduWork1: string
    imGadugaduWork2: string
    imGadugaduWork3: string
    imGoogleTalk: any
    imGoogleTalkHome1: string
    imGoogleTalkHome2: string
    imGoogleTalkHome3: string
    imGoogleTalkWork1: string
    imGoogleTalkWork2: string
    imGoogleTalkWork3: string
    imGroupwise: any
    imGroupwiseHome1: string
    imGroupwiseHome2: string
    imGroupwiseHome3: string
    imGroupwiseWork1: string
    imGroupwiseWork2: string
    imGroupwiseWork3: string
    imIcq: any
    imIcqHome1: string
    imIcqHome2: string
    imIcqHome3: string
    imIcqWork1: string
    imIcqWork2: string
    imIcqWork3: string
    imJabber: any
    imJabberHome1: string
    imJabberHome2: string
    imJabberHome3: string
    imJabberWork1: string
    imJabberWork2: string
    imJabberWork3: string
    imMatrix: any
    imMatrixHome1: string
    imMatrixHome2: string
    imMatrixHome3: string
    imMatrixWork1: string
    imMatrixWork2: string
    imMatrixWork3: string
    imMsn: any
    imMsnHome1: string
    imMsnHome2: string
    imMsnHome3: string
    imMsnWork1: string
    imMsnWork2: string
    imMsnWork3: string
    imSkype: any
    imSkypeHome1: string
    imSkypeHome2: string
    imSkypeHome3: string
    imSkypeWork1: string
    imSkypeWork2: string
    imSkypeWork3: string
    imTwitter: any
    imYahoo: any
    imYahooHome1: string
    imYahooHome2: string
    imYahooHome3: string
    imYahooWork1: string
    imYahooWork2: string
    imYahooWork3: string
    isdnPhone: string
    list: boolean
    listShowAddresses: boolean
    logo: ContactPhoto
    mailer: string
    manager: string
    mobilePhone: string
    name: ContactName
    readonly nameOrOrg: string
    nickname: string
    note: string
    office: string
    org: string
    orgUnit: string
    otherFax: string
    otherPhone: string
    pager: string
    pgpCert: ContactCert
    phone: any
    photo: ContactPhoto
    primaryPhone: string
    radio: string
    role: string
    sip: any
    spouse: string
    telex: string
    title: string
    tty: string
    videoUrl: string
    wantsHtml: boolean
    x509Cert: ContactCert
    /* Fields of EBookContacts-1.2.EBookContacts.VCard */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBookContacts-1.2.EBookContacts.Contact */
    /**
     * Creates a copy of `contact`.
     */
    duplicate(): Contact
    /**
     * Gets the value of `contact'`s field specified by `field_id`.
     */
    get(fieldId: ContactField): object | null
    /**
     * Gets a list of the vcard attributes for `contact'`s `field_id`.
     */
    getAttributes(fieldId: ContactField): VCardAttribute[]
    /**
     * Gets a list of the vcard attributes for `contact'`s `field_ids`.
     */
    getAttributesSet(fieldIds: ContactField[]): VCardAttribute[]
    /**
     * Gets the value of `contact'`s field specified by `field_id,` caching
     * the result so it can be freed later. Use e_contact_field_is_string()
     * to check whether the field can be used here.
     */
    getConst(fieldId: ContactField): object | null
    /**
     * Tries to modify any #EContactPhoto fields which are
     * stored on the local file system as type %E_CONTACT_PHOTO_TYPE_URI
     * to be inlined and stored as %E_CONTACT_PHOTO_TYPE_INLINED instead.
     */
    inlineLocalPhotos(): boolean
    /**
     * Sets the value of `contact'`s field specified by `field_id` to `value`.
     */
    set(fieldId: ContactField, value?: object | null): void
    /**
     * Sets the vcard attributes for `contact'`s `field_id`.
     * Attributes are added to the contact in the same order as they are in `attributes`.
     */
    setAttributes(fieldId: ContactField, attributes: VCardAttribute[]): void
    /* Methods of EBookContacts-1.2.EBookContacts.VCard */
    /**
     * Prepends `attr` to `evc`. This takes ownership of `attr`.
     */
    addAttribute(attr: VCardAttribute): void
    /**
     * Prepends `attr` to `evcard,` setting it to `value`. This takes ownership of
     * `attr`.
     * 
     * This is a convenience wrapper around e_vcard_attribute_add_value() and
     * e_vcard_add_attribute().
     */
    addAttributeWithValue(attr: VCardAttribute, value: string): void
    /**
     * Appends `attr` to `evc` to the end of a list of attributes. This takes
     * ownership of `attr`.
     */
    appendAttribute(attr: VCardAttribute): void
    /**
     * Appends `attr` to `evcard,` setting it to `value`. This takes ownership of
     * `attr`.
     * 
     * This is a convenience wrapper around e_vcard_attribute_add_value() and
     * e_vcard_append_attribute().
     */
    appendAttributeWithValue(attr: VCardAttribute, value: string): void
    /**
     * Constructs the existing #EVCard, `evc,` setting its vCard data to `str`.
     * 
     * This modifies `evc`.
     */
    construct(str: string): void
    /**
     * Similar to e_vcard_construct_with_uid(), but can also
     * be used with an `str` that is not %NULL terminated.
     */
    constructFull(str: string, len: number, uid?: string | null): void
    /**
     * Constructs the existing #EVCard, `evc,` setting its vCard data to `str,` and
     * adding a new UID attribute with the value given in `uid` (if `uid` is
     * non-%NULL).
     * 
     * This modifies `evc`.
     */
    constructWithUid(str: string, uid?: string | null): void
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
     */
    getAttribute(name: string): VCardAttribute | null
    /**
     * Similar to e_vcard_get_attribute() but this method will not attempt to
     * parse the vCard if it is not already parsed.
     */
    getAttributeIfParsed(name: string): VCardAttribute | null
    /**
     * Gets the list of all attributes from `evcard`. The list and its
     * contents are owned by `evcard,` and must not be freed.
     */
    getAttributes(): VCardAttribute[]
    /**
     * Check if the `evc` has been parsed already, as #EVCard implements lazy parsing
     * of its vCard data. Used for debugging.
     */
    isParsed(): boolean
    /**
     * Removes `attr` from `evc` and frees it. This takes ownership of `attr`.
     */
    removeAttribute(attr: VCardAttribute): void
    /**
     * Removes all the attributes with group name and attribute name equal to the
     * passed in values. If `attr_group` is %NULL or an empty string,
     * it removes all the attributes with passed in name irrespective of
     * their group names.
     */
    removeAttributes(attrGroup: string | null, attrName: string): void
    /**
     * Exports `evc` to a string representation, specified
     * by the `format` argument.
     */
    toString(format: VCardFormat): string
    utilDupXAttribute(xName: string): string | null
    /**
     * Sets an "X-" attribute `x_name` to value `value` in `vcard,` or
     * removes it from `vcard,` when `value` is %NULL.
     */
    utilSetXAttribute(xName: string, value?: string | null): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::Rev", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::Rev", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::Rev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::Rev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::Rev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-home", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-home", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-label-home", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-label-home", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-label-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-label-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-label-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-label-other", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-label-other", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-label-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-label-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-label-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-label-work", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-label-work", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-label-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-label-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-label-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-other", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-other", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-work", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-work", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anniversary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anniversary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anniversary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anniversary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anniversary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::assistant", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assistant", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::assistant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::assistant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::assistant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::assistant-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assistant-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::assistant-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::assistant-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::assistant-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::birth-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birth-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::birth-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::birth-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::birth-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blog-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blog-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blog-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blog-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blog-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::book-uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::book-uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::book-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::book-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::book-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::business-fax", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::business-fax", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::business-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::business-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::business-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::business-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::business-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::business-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::business-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::business-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::business-phone-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::business-phone-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::business-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::business-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::business-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::callback-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::callback-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::callback-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::callback-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::callback-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caluri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caluri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caluri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caluri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caluri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::car-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::car-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::car-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::car-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::car-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::category-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::category-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::category-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::category-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::company-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::company-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::company-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::company-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::company-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-4", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-4", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fburl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fburl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fburl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fburl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fburl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-as", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-as", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-as", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-as", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-as", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::geo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::geo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::geo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::geo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::given-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::given-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-fax", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-fax", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-phone-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-phone-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::homepage-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homepage-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homepage-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homepage-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homepage-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icscalendar", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icscalendar", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icscalendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icscalendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icscalendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-twitter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-twitter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-twitter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-twitter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-twitter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-home-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-home-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-home-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-work-1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-work-2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-work-3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::isdn-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::isdn-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::isdn-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::isdn-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::isdn-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::list-show-addresses", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::list-show-addresses", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::list-show-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::list-show-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::list-show-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mailer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mailer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mailer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mailer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mailer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mobile-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mobile-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mobile-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mobile-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mobile-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name-or-org", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-or-org", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name-or-org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name-or-org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name-or-org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nickname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::note", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::note", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::note", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::note", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::note", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::office", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::office", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::office", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::office", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::office", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::org", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::org", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::org-unit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::org-unit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::org-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::org-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::org-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::other-fax", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::other-fax", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::other-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::other-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::other-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::other-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::other-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::other-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::other-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::other-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pgpCert", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pgpCert", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pgpCert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pgpCert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pgpCert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::photo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::photo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::photo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::photo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::primary-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-phone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::primary-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::primary-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::primary-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radio", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radio", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::spouse", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spouse", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::spouse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::spouse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::spouse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::telex", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::telex", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::telex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::telex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::telex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wants-html", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wants-html", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wants-html", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wants-html", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wants-html", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x509Cert", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x509Cert", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x509Cert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x509Cert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x509Cert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Contact_ConstructProps)
    _init (config?: Contact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Contact
    /* Function overloads */
    static new(): Contact
    static newFromVcard(vcard: string): Contact
    static newFromVcardWithUid(vcard: string, uid: string): Contact
    /**
     * Gets the #EContactField corresponding to the `field_name`.
     */
    static fieldId(fieldName: string): ContactField
    /**
     * Gets the #EContactField corresponding to the `vcard_field`.
     */
    static fieldIdFromVcard(vcardField: string): ContactField
    /**
     * Returns whether the `field_id` is of a string type,
     * thus it can be used with e_contact_get_const().
     */
    static fieldIsString(fieldId: ContactField): boolean
    /**
     * Gets the string representation of `field_id`.
     */
    static fieldName(fieldId: ContactField): string
    /**
     * Gets the #GType used for this contact field, this indicates
     * what kind of value can be passed to e_contact_set().
     */
    static fieldType(fieldId: ContactField): GObject.Type
    /**
     * Gets a human-readable, translated string representation
     * of `field_id`.
     */
    static prettyName(fieldId: ContactField): string
    /**
     * Gets the vcard attribute corresponding to `field_id,` as a string.
     */
    static vcardAttribute(fieldId: ContactField): string
    static $gtype: GObject.Type
}
interface SourceBackendSummarySetup_ConstructProps extends EDataServer.SourceExtension_ConstructProps {
    /* Constructor properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup */
    indexedFields?: string
    summaryFields?: string
}
class SourceBackendSummarySetup {
    /* Properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup */
    indexedFields: string
    summaryFields: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup */
    /**
     * Fetches the #EContactFields configured to be indexed, with thier respective #EBookIndexTypes.
     */
    getIndexedFields(): [ /* returnType */ ContactField, /* types */ BookIndexType, /* nFields */ number ]
    /**
     * Fetches the #EContactFields which are configured to be a part of the summary.
     * 
     * <note><para>If there are no configured summary fields, the default configuration is assumed</para></note>
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
     */
    setSummaryFieldsv(fields: ContactField, nFields: number): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    /**
     * Returns the #ESource instance to which `extension` belongs.
     * 
     * Note this function is not thread-safe.  The returned #ESource could
     * be finalized by another thread while the caller is still using it.
     */
    getSource(): EDataServer.Source
    /**
     * Acquires a property lock, thus no other thread can change properties
     * of the `extension` until the lock is released.
     */
    propertyLock(): void
    /**
     * Releases a property lock, previously acquired with e_source_extension_property_lock(),
     * thus other threads can change properties of the `extension`.
     */
    propertyUnlock(): void
    /**
     * Returns the #ESource instance to which the `extension` belongs.
     * 
     * The returned #ESource is referenced for thread-safety.  Unreference
     * the #ESource with g_object_unref() when finished with it.
     */
    refSource(): EDataServer.Source
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::indexed-fields", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indexed-fields", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indexed-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indexed-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indexed-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary-fields", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary-fields", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceBackendSummarySetup_ConstructProps)
    _init (config?: SourceBackendSummarySetup_ConstructProps): void
    static $gtype: GObject.Type
}
interface VCard_ConstructProps extends GObject.Object_ConstructProps {
}
class VCard {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBookContacts-1.2.EBookContacts.VCard */
    /**
     * Prepends `attr` to `evc`. This takes ownership of `attr`.
     */
    addAttribute(attr: VCardAttribute): void
    /**
     * Prepends `attr` to `evcard,` setting it to `value`. This takes ownership of
     * `attr`.
     * 
     * This is a convenience wrapper around e_vcard_attribute_add_value() and
     * e_vcard_add_attribute().
     */
    addAttributeWithValue(attr: VCardAttribute, value: string): void
    /**
     * Appends `attr` to `evc` to the end of a list of attributes. This takes
     * ownership of `attr`.
     */
    appendAttribute(attr: VCardAttribute): void
    /**
     * Appends `attr` to `evcard,` setting it to `value`. This takes ownership of
     * `attr`.
     * 
     * This is a convenience wrapper around e_vcard_attribute_add_value() and
     * e_vcard_append_attribute().
     */
    appendAttributeWithValue(attr: VCardAttribute, value: string): void
    /**
     * Constructs the existing #EVCard, `evc,` setting its vCard data to `str`.
     * 
     * This modifies `evc`.
     */
    construct(str: string): void
    /**
     * Similar to e_vcard_construct_with_uid(), but can also
     * be used with an `str` that is not %NULL terminated.
     */
    constructFull(str: string, len: number, uid?: string | null): void
    /**
     * Constructs the existing #EVCard, `evc,` setting its vCard data to `str,` and
     * adding a new UID attribute with the value given in `uid` (if `uid` is
     * non-%NULL).
     * 
     * This modifies `evc`.
     */
    constructWithUid(str: string, uid?: string | null): void
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
     */
    getAttribute(name: string): VCardAttribute | null
    /**
     * Similar to e_vcard_get_attribute() but this method will not attempt to
     * parse the vCard if it is not already parsed.
     */
    getAttributeIfParsed(name: string): VCardAttribute | null
    /**
     * Gets the list of all attributes from `evcard`. The list and its
     * contents are owned by `evcard,` and must not be freed.
     */
    getAttributes(): VCardAttribute[]
    /**
     * Check if the `evc` has been parsed already, as #EVCard implements lazy parsing
     * of its vCard data. Used for debugging.
     */
    isParsed(): boolean
    /**
     * Removes `attr` from `evc` and frees it. This takes ownership of `attr`.
     */
    removeAttribute(attr: VCardAttribute): void
    /**
     * Removes all the attributes with group name and attribute name equal to the
     * passed in values. If `attr_group` is %NULL or an empty string,
     * it removes all the attributes with passed in name irrespective of
     * their group names.
     */
    removeAttributes(attrGroup: string | null, attrName: string): void
    /**
     * Exports `evc` to a string representation, specified
     * by the `format` argument.
     */
    toString(format: VCardFormat): string
    utilDupXAttribute(xName: string): string | null
    /**
     * Sets an "X-" attribute `x_name` to value `value` in `vcard,` or
     * removes it from `vcard,` when `value` is %NULL.
     */
    utilSetXAttribute(xName: string, value?: string | null): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VCard_ConstructProps)
    _init (config?: VCard_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VCard
    static newFromString(str: string): VCard
    /**
     * Escapes a string according to RFC2426, section 5.
     */
    static escapeString(s: string): string
    /**
     * Unescapes a string according to RFC2426, section 5.
     */
    static unescapeString(s: string): string
    static $gtype: GObject.Type
}
class AddressWestern {
    /* Fields of EBookContacts-1.2.EBookContacts.AddressWestern */
    /**
     * PO Box.
     */
    readonly poBox: string
    /**
     * TODO, we're not sure what this is.
     */
    readonly extended: string
    /**
     * Street name
     */
    readonly street: string
    /**
     * City or town
     */
    readonly locality: string
    /**
     * State or province
     */
    readonly region: string
    /**
     * Postal Code
     */
    readonly postalCode: string
    /**
     * Country
     */
    readonly country: string
    /* Methods of EBookContacts-1.2.EBookContacts.AddressWestern */
    /**
     * Creates a copy of `eaw`.
     */
    copy(): AddressWestern
    /**
     * Frees `eaw` and its contents.
     */
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Parses a string representing a mailing address into a
     * structure of type #EAddressWestern.
     */
    static parse(inAddress?: string | null): AddressWestern | null
}
class BookChange {
    /* Fields of EBookContacts-1.2.EBookContacts.BookChange */
    /**
     * The #EBookChangeType
     */
    readonly changeType: BookChangeType
    /**
     * The #EContact which changed
     */
    readonly contact: Contact
    static name: string
}
class BookQuery {
    /* Methods of EBookContacts-1.2.EBookContacts.BookQuery */
    /**
     * Creates a copy of `q`.
     */
    copy(): BookQuery
    /**
     * Creates a new #EBookQuery which is the opposite of #q.
     */
    not(unref: boolean): BookQuery
    /**
     * Increment the reference count on `q`.
     */
    ref(): BookQuery
    /**
     * Return the string representation of `q`.
     */
    toString(): string
    /**
     * Decrement the reference count on `q`. When the reference count reaches 0, `q`
     * will be freed and any child queries will have e_book_query_unref() called.
     */
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Create a new #EBookQuery which is the logical AND of the queries in #qs.
     */
    static and(nqs: number, qs: BookQuery, unref: boolean): BookQuery
    /**
     * Creates a new #EBookQuery which tests if any field contains `value`.
     */
    static anyFieldContains(value: string): BookQuery
    /**
     * Creates a new #EBookQuery which tests if the field `field` exists.
     */
    static fieldExists(field: ContactField): BookQuery
    /**
     * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
     */
    static fieldTest(field: ContactField, test: BookQueryTest, value: string): BookQuery
    /**
     * Parse `query_string` and return a new #EBookQuery representing it.
     */
    static fromString(queryString: string): BookQuery
    /**
     * Creates a new #EBookQuery which is the logical OR of the queries in #qs.
     */
    static or(nqs: number, qs: BookQuery, unref: boolean): BookQuery
    /**
     * Creates a new #EBookQuery which tests if the field `field` exists. `field`
     * should be a vCard field name, such as #EVC_FN or #EVC_X_MSN.
     */
    static vcardFieldExists(field: string): BookQuery
    /**
     * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
     */
    static vcardFieldTest(field: string, test: BookQueryTest, value: string): BookQuery
}
class ContactAddress {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactAddress */
    readonly addressFormat: string
    readonly po: string
    readonly ext: string
    readonly street: string
    readonly locality: string
    readonly region: string
    readonly code: string
    readonly country: string
    /* Methods of EBookContacts-1.2.EBookContacts.ContactAddress */
    /**
     * Frees the `address` struct and its contents.
     */
    free(): void
    static name: string
    static new(): ContactAddress
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactAddress
}
class ContactCert {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactCert */
    readonly length: number
    readonly data: string
    /* Methods of EBookContacts-1.2.EBookContacts.ContactCert */
    /**
     * Frees the `cert` struct and its contents.
     */
    free(): void
    static name: string
    static new(): ContactCert
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactCert
}
abstract class ContactClass {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactClass */
    readonly parentClass: VCardClass
    static name: string
}
class ContactDate {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactDate */
    readonly year: number
    readonly month: number
    readonly day: number
    /* Methods of EBookContacts-1.2.EBookContacts.ContactDate */
    /**
     * Checks if `dt1` and `dt2` are the same date.
     */
    equal(dt2: ContactDate): boolean
    /**
     * Frees the `date` struct and its contents.
     */
    free(): void
    /**
     * Generates a date string in the format YYYY-MM-DD based
     * on the values of `dt`.
     */
    toString(): string
    static name: string
    static new(): ContactDate
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactDate
    /**
     * Creates a new #EContactDate based on `str`.
     */
    static fromString(str: string): ContactDate
}
class ContactGeo {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactGeo */
    /**
     * latitude
     */
    readonly latitude: number
    /**
     * longitude
     */
    readonly longitude: number
    /* Methods of EBookContacts-1.2.EBookContacts.ContactGeo */
    /**
     * Frees the `geo` struct and its contents.
     */
    free(): void
    static name: string
    static new(): ContactGeo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactGeo
}
class ContactName {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactName */
    readonly family: string
    readonly given: string
    readonly additional: string
    readonly prefixes: string
    readonly suffixes: string
    /* Methods of EBookContacts-1.2.EBookContacts.ContactName */
    /**
     * Creates a copy of `n`.
     */
    copy(): ContactName
    /**
     * Frees `name` and its contents.
     */
    free(): void
    /**
     * Generates a string representation of `name`.
     */
    toString(): string
    static name: string
    static new(): ContactName
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactName
    /**
     * Creates a new #EContactName based on the parsed `name_str`.
     */
    static fromString(nameStr: string): ContactName
}
class ContactPhoto {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactPhoto */
    readonly type: ContactPhotoType
    /* Methods of EBookContacts-1.2.EBookContacts.ContactPhoto */
    /**
     * Creates a copy of `photo`.
     */
    copy(): ContactPhoto
    /**
     * Frees the `photo` struct and its contents.
     */
    free(): void
    /**
     * Gets the `photo'`s data.
     */
    getInlined(): Uint8Array | null
    /**
     * Gets the `photo'`s mime type.
     */
    getMimeType(): string | null
    /**
     * Gets the `photo'`s URI.
     */
    getUri(): string | null
    /**
     * Sets the `photo'`s inlined data.
     */
    setInlined(data: Uint8Array): void
    /**
     * Sets the `photo'`s mime type.
     */
    setMimeType(mimeType: string): void
    /**
     * Sets the `photo'`s URI.
     */
    setUri(uri: string): void
    static name: string
    static new(): ContactPhoto
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactPhoto
}
class ContactPrivate {
    static name: string
}
class NameWestern {
    /* Fields of EBookContacts-1.2.EBookContacts.NameWestern */
    readonly prefix: string
    readonly first: string
    readonly middle: string
    readonly nick: string
    readonly last: string
    readonly suffix: string
    readonly full: string
    /* Methods of EBookContacts-1.2.EBookContacts.NameWestern */
    /**
     * Creates a copy of `w`.
     */
    copy(): NameWestern
    /**
     * Frees the `w` struct and its contents.
     */
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Parses `full_name` and returns an #ENameWestern struct filled with
     * the component parts of the name.
     */
    static parse(fullName: string): NameWestern
}
class PhoneNumber {
    /* Methods of EBookContacts-1.2.EBookContacts.PhoneNumber */
    /**
     * Compares two phone numbers.
     */
    compare(secondNumber: PhoneNumber): PhoneNumberMatch
    /**
     * Makes a copy of `phone_number`.
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
     */
    getCountryCode(source?: PhoneNumberCountrySource | null): number
    /**
     * Queries the national portion of `phone_number` without any call-out
     * prefixes. For instance when parsing "+1-617-5423789" this function would
     * return the string "6175423789".
     */
    getNationalNumber(): string
    /**
     * Describes the `phone_number` according to the rules applying to `format`.
     */
    toString(format: PhoneNumberFormat): string
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Compares two phone numbers.
     */
    static compareStrings(firstNumber: string, secondNumber: string): PhoneNumberMatch
    /**
     * Compares two phone numbers within the context of `region_code`.
     */
    static compareStringsWithRegion(firstNumber: string, secondNumber: string, regionCode?: string | null): PhoneNumberMatch
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
     */
    static fromString(phoneNumber: string, regionCode?: string | null): PhoneNumber
    /**
     * Retrieves the preferred country calling code for `region_code,`
     * e.g. 358 for "fi" or 1 for "en_US`UTF-8`".
     * 
     * If %NULL is passed for `region_code` the default region as returned by
     * e_phone_number_get_default_region() is used.
     */
    static getCountryCodeForRegion(regionCode?: string | null): number
    /**
     * Retrieves the current two-letter country code that's used by default for
     * parsing phone numbers in e_phone_number_from_string(). It can be useful
     * to store this number before parsing a bigger number of phone numbers.
     * 
     * The result of this functions depends on the current setup of the
     * %LC_ADDRESS category: If that category provides a reasonable value
     * for %_NL_ADDRESS_COUNTRY_AB2 this value is returned. Otherwise the
     * locale name configured for %LC_ADDRESS is parsed.
     */
    static getDefaultRegion(): string
    /**
     * Checks if phone number support is available. It is recommended to call this
     * function before using any of the phone-utils functions to ensure that the
     * required functionality is available, and to pick alternative mechanisms if
     * needed.
     */
    static isSupported(): boolean
}
abstract class SourceBackendSummarySetupClass {
    /* Fields of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetupClass */
    readonly parentClass: EDataServer.SourceBackendClass
    static name: string
}
class SourceBackendSummarySetupPrivate {
    static name: string
}
class VCardAttribute {
    /* Methods of EBookContacts-1.2.EBookContacts.VCardAttribute */
    /**
     * Prepends `param` to `attr'`s list of parameters. This takes ownership of
     * `param` (and all its values).
     * 
     * Duplicate parameters have their values merged, so that all parameter names
     * in `attr` are unique. Values are also merged so that uniqueness is preserved.
     */
    addParam(param: VCardAttributeParam): void
    /**
     * Appends `value` to `param,` then prepends `param` to `attr`. This takes ownership
     * of `param,` but not of `value`.
     * 
     * This is a convenience method for e_vcard_attribute_param_add_value() and
     * e_vcard_attribute_add_param().
     */
    addParamWithValue(param: VCardAttributeParam, value: string): void
    /**
     * Appends `value` to `attr'`s list of values.
     */
    addValue(value: string): void
    /**
     * Encodes `value` according to the encoding used for `attr,` and appends it to
     * `attr'`s list of values.
     * 
     * This should only be used if the #EVCardAttribute has a non-raw encoding (i.e.
     * if it’s encoded in base-64 or quoted-printable encoding).
     */
    addValueDecoded(value: string, len: number): void
    /**
     * Makes a copy of `attr`.
     */
    copy(): VCardAttribute
    /**
     * Frees an attribute, its values and its parameters.
     */
    free(): void
    /**
     * Gets the group name of `attr`.
     */
    getGroup(): string | null
    /**
     * Gets the name of `attr`.
     */
    getName(): string
    /**
     * Gets the list of values for the paramater `name` from `attr`. The list and its
     * contents are owned by `attr,` and must not be freed. If no parameter with the
     * given `name` exists, %NULL is returned.
     */
    getParam(name: string): string[] | null
    /**
     * Gets the list of parameters (of type #EVCardAttributeParam) from `attr`. The
     * list and its contents are owned by `attr,` and must not be freed.
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
     */
    getValuesDecoded(): GLib.String[]
    /**
     * Checks if `attr` has an #EVCardAttributeParam with name %EVC_TYPE and `typestr`
     * as one of its values.
     * 
     * For example, for the vCard attribute:
     * |[
     * TEL;TYPE=WORK,VOICE:(111) 555-1212
     * ```
     * 
     * the following holds true:
     * |[
     * g_assert_true (e_vcard_attribute_has_type (attr, "WORK") == TRUE);
     * g_assert_true (e_vcard_attribute_has_type (attr, "voice") == TRUE);
     * g_assert_true (e_vcard_attribute_has_type (attr, "HOME") == FALSE);
     * ```
     * 
     * 
     * Comparisons against `typestr` are case-insensitive.
     */
    hasType(typestr: string): boolean
    /**
     * Checks if `attr` has a single value.
     */
    isSingleValued(): boolean
    /**
     * Removes and frees parameter `param_name` from the attribute `attr`. Parameter
     * names are guaranteed to be unique, so `attr` is guaranteed to have no
     * parameters named `param_name` after this function returns.
     */
    removeParam(paramName: string): void
    /**
     * Removes the value `s` from the parameter `param_name` on the attribute `attr`.
     * If `s` was the only value for parameter `param_name,` that parameter is removed
     * entirely from `attr` and freed.
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
     */
    removeValue(s: string): void
    /**
     * Removes and frees all values from `attr`.
     */
    removeValues(): void
    static name: string
    static new(attrGroup: string | null, attrName: string): VCardAttribute
    constructor(attrGroup: string | null, attrName: string)
    /* Static methods and pseudo-constructors */
    static new(attrGroup: string | null, attrName: string): VCardAttribute
}
class VCardAttributeParam {
    /* Methods of EBookContacts-1.2.EBookContacts.VCardAttributeParam */
    /**
     * Appends `value` to `param'`s list of values.
     */
    addValue(value: string): void
    /**
     * Makes a copy of `param` and all its values.
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
     * |[
     * TEL;TYPE=WORK,VOICE:(111) 555-1212
     * ```
     * 
     * this would return <code>TYPE</code> (which is string-equivalent to
     * %EVC_TYPE).
     */
    getName(): string
    /**
     * Gets the list of values from `param`. The list and its
     * contents are owned by `param,` and must not be freed.
     * 
     * For example, for the <code>TYPE</code> parameter of the vCard attribute:
     * |[
     * TEL;TYPE=WORK,VOICE:(111) 555-1212
     * ```
     * 
     * this would return the list <code>WORK</code>, <code>VOICE</code>.
     */
    getValues(): string[]
    /**
     * Removes and frees all values from `param`.
     */
    removeValues(): void
    static name: string
    static new(name: string): VCardAttributeParam
    constructor(name: string)
    /* Static methods and pseudo-constructors */
    static new(name: string): VCardAttributeParam
}
abstract class VCardClass {
    /* Fields of EBookContacts-1.2.EBookContacts.VCardClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class VCardPrivate {
    static name: string
}
}
export default EBookContacts;