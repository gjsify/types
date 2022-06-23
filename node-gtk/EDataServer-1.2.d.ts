// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EDataServer-1.2
 */

import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GData from './GData-0.0';
import type Json from './Json-1.0';
import type Goa from './Goa-1.0';
import type Camel from './Camel-1.2';

export namespace EDataServer {

/**
 * Error codes for #EClient operations.
 */
enum ClientError {
    /**
     * Invalid argument was used
     */
    INVALID_ARG,
    /**
     * The client is busy
     */
    BUSY,
    /**
     * The source is not loaded
     */
    SOURCE_NOT_LOADED,
    /**
     * The source is already loaded
     */
    SOURCE_ALREADY_LOADED,
    /**
     * Authentication failed
     */
    AUTHENTICATION_FAILED,
    /**
     * Authentication required
     */
    AUTHENTICATION_REQUIRED,
    /**
     * The repository (client) is offline
     */
    REPOSITORY_OFFLINE,
    /**
     * The operation is unavailable in offline mode
     */
    OFFLINE_UNAVAILABLE,
    /**
     * Permission denied for the operation
     */
    PERMISSION_DENIED,
    /**
     * The operation was cancelled
     */
    CANCELLED,
    /**
     * The operation cannot be cancelled
     */
    COULD_NOT_CANCEL,
    /**
     * The operation is not supported
     */
    NOT_SUPPORTED,
    /**
     * TLS is not available
     */
    TLS_NOT_AVAILABLE,
    /**
     * Requested authentication method is not supported
     */
    UNSUPPORTED_AUTHENTICATION_METHOD,
    /**
     * Search size limit exceeded
     */
    SEARCH_SIZE_LIMIT_EXCEEDED,
    /**
     * Search time limit exceeded
     */
    SEARCH_TIME_LIMIT_EXCEEDED,
    /**
     * The query was invalid
     */
    INVALID_QUERY,
    /**
     * The query was refused by the server side
     */
    QUERY_REFUSED,
    /**
     * A D-Bus error occurred
     */
    DBUS_ERROR,
    /**
     * Other error
     */
    OTHER_ERROR,
    /**
     * The client is not opened
     */
    NOT_OPENED,
    /**
     * The client is out of sync with the server
     */
    OUT_OF_SYNC,
}
/**
 * Errors from the #E_COLLATOR_ERROR domain.
 */
enum CollatorError {
    /**
     * An error occured trying to open a collator and access collation data.
     */
    OPEN,
    /**
     * An error occurred converting character encodings
     */
    CONVERSION,
    /**
     * A malformed locale name was given to e_collator_new()
     */
    INVALID_LOCALE,
}
/**
 * Defines what to do when a conflict between the locally stored and
 * remotely stored object versions happen during object modify or remove.
 */
enum ConflictResolution {
    /**
     * Fail when a write-conflict occurs.
     */
    FAIL,
    /**
     * Use newer version of the object,
     *    which can be either the server version or the local version of it.
     */
    USE_NEWER,
    /**
     * Keep server object on conflict.
     */
    KEEP_SERVER,
    /**
     * Write local version of the object on conflict.
     */
    KEEP_LOCAL,
    /**
     * Create a new copy of the object on conflict.
     */
    WRITE_COPY,
}
/**
 * Policy for responding to Message Disposition Notification requests
 * (i.e. a Disposition-Notification-To header) when receiving messages.
 * See RFC 2298 for more information about MDN requests.
 */
enum MdnResponsePolicy {
    /**
     * Never respond to an MDN request.
     */
    NEVER,
    /**
     * Always respond to an MDN request.
     */
    ALWAYS,
    /**
     * Ask the user before responding to an MDN request.
     */
    ASK,
}
/**
 * A value used during querying authentication URI, to decide whether certain
 * resource can be used or not. The `E_OAUTH2`_SERVICE_NAVIGATION_POLICY_ABORT
 * can be used to abort the authentication query, like when user cancelled it.
 */
enum OAuth2ServiceNavigationPolicy {
    /**
     * Deny navigation to the given web resource
     */
    DENY,
    /**
     * Allow navigation to the given web resource
     */
    ALLOW,
    /**
     * Abort authentication processing
     */
    ABORT,
}
/**
 * Network proxy configuration methods.
 */
enum ProxyMethod {
    /**
     * Use the default #GProxyResolver (see g_proxy_resolver_get_default()).
     */
    DEFAULT,
    /**
     * Use the FTP/HTTP/HTTPS/SOCKS settings defined in #ESourceProxy.
     */
    MANUAL,
    /**
     * Use the autoconfiguration URL defined in #ESourceProxy.
     */
    AUTO,
    /**
     * Direct connection; do not use a network proxy.
     */
    NONE,
}
/**
 * Status codes used by the #EBackend authentication wrapper.
 */
enum SourceAuthenticationResult {
    /**
     * Unknown error occurred while authenticating. Since: 3.26
     */
    UNKNOWN,
    /**
     * An error occurred while authenticating.
     */
    ERROR,
    /**
     * An SSL certificate check failed. Since: 3.16.
     */
    ERROR_SSL_FAILED,
    /**
     * Server requesting authentication accepted password.
     */
    ACCEPTED,
    /**
     * Server requesting authentication rejected password.
     */
    REJECTED,
    /**
     * Server requesting authentication, but none was given.
     */
    REQUIRED,
}
/**
 * Connection status codes used by the #ESource to indicate its connection state.
 * This is used in combination with authentication of the ESource. For example,
 * if there are multiple clients asking for a password and a user enters the password
 * in one of them, then the status will change into 'connecting', which is a signal
 * do close the password prompt in the other client, because the credentials had
 * been already provided.
 */
enum SourceConnectionStatus {
    /**
     * The source is currently disconnected from its (possibly remote) data store.
     */
    DISCONNECTED,
    /**
     * The source asked for credentials with a 'credentials-required' signal and
     *   is currently awaiting for them.
     */
    AWAITING_CREDENTIALS,
    /**
     * A user rejected SSL certificate trust for the connection.
     */
    SSL_FAILED,
    /**
     * The source is currently connecting to its (possibly remote) data store.
     */
    CONNECTING,
    /**
     * The source is currently connected to its (possibly remote) data store.
     */
    CONNECTED,
}
/**
 * An ESource's authentication reason, used by an ESource::CredentialsRequired method.
 */
enum SourceCredentialsReason {
    /**
     * A return value when there was no 'credentials-required' signal emitted yet,
     *   or a pair 'authenticate' signal had been received. This value should not
     *   be used in the call of 'credentials-required'.
     */
    UNKNOWN,
    /**
     * This is the first attempt to get credentials for the source. It's usually
     *   used right after the source is opened and the authentication continues with
     *   a stored credentials, if any.
     */
    REQUIRED,
    /**
     * The previously used credentials had been rejected by the server. That
     *   usually means that the user should be asked to provide/correct the credentials.
     */
    REJECTED,
    /**
     * A secured connection failed due to some server-side certificate issues.
     */
    SSL_FAILED,
    /**
     * The server returned an error. It is not possible to connect to it
     *   at the moment usually.
     */
    ERROR,
}
/**
 * Defines authentication types for LDAP sources.
 */
enum SourceLDAPAuthentication {
    /**
     * Use none authentication type.
     */
    NONE,
    /**
     * Use an email address for authentication.
     */
    EMAIL,
    /**
     * Use a bind DN for authentication.
     */
    BINDDN,
}
/**
 * Defines search scope for LDAP sources.
 */
enum SourceLDAPScope {
    /**
     * One level search scope.
     */
    ONELEVEL,
    /**
     * Sub-tree search scope.
     */
    SUBTREE,
}
/**
 * Defines what connection security should be used for LDAP sources.
 */
enum SourceLDAPSecurity {
    /**
     * Connect insecurely.
     */
    NONE,
    /**
     * Connect using secure LDAP (LDAPS).
     */
    LDAPS,
    /**
     * Connect using STARTTLS.
     */
    STARTTLS,
}
/**
 * Set of preferred reply styles for an #ESourceMailComposition extension.
 */
enum SourceMailCompositionReplyStyle {
    /**
     * Use default reply style.
     */
    DEFAULT,
    /**
     * Use quoted reply style.
     */
    QUOTED,
    /**
     * Do not quote anything in replies.
     */
    DO_NOT_QUOTE,
    /**
     * Attach original message in replies.
     */
    ATTACH,
    /**
     * Use Outlook reply style.
     */
    OUTLOOK,
}
/**
 * Units to be used in an #ESourceWeather extension.
 */
enum SourceWeatherUnits {
    /**
     * Fahrenheit units
     */
    FAHRENHEIT,
    /**
     * Centigrade units
     */
    CENTIGRADE,
    /**
     * Kelvin units
     */
    KELVIN,
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
enum TimeParseStatus {
    /**
     * The time string was parsed successfully.
     */
    OK,
    /**
     * The time string was empty.
     */
    NONE,
    /**
     * The time string was not formatted correctly.
     */
    INVALID,
}
/**
 * Response codes for the trust prompt.
 */
enum TrustPromptResponse {
    /**
     * Unknown response, usually due to some error
     */
    UNKNOWN,
    /**
     * Reject permanently
     */
    REJECT,
    /**
     * Accept permanently
     */
    ACCEPT,
    /**
     * Accept temporarily
     */
    ACCEPT_TEMPORARILY,
    /**
     * Reject temporarily
     */
    REJECT_TEMPORARILY,
}
enum WebDAVACEPrincipalKind {
    UNKNOWN,
    HREF,
    ALL,
    AUTHENTICATED,
    UNAUTHENTICATED,
    PROPERTY,
    SELF,
    OWNER,
}
enum WebDAVLockScope {
    EXCLUSIVE,
    SHARED,
}
enum WebDAVPrivilegeHint {
    UNKNOWN,
    READ,
    WRITE,
    WRITE_PROPERTIES,
    WRITE_CONTENT,
    UNLOCK,
    READ_ACL,
    WRITE_ACL,
    READ_CURRENT_USER_PRIVILEGE_SET,
    BIND,
    UNBIND,
    ALL,
    CALDAV_READ_FREE_BUSY,
}
enum WebDAVPrivilegeKind {
    UNKNOWN,
    ABSTRACT,
    AGGREGATE,
    COMMON,
}
enum WebDAVPropertyChangeKind {
    SET,
    REMOVE,
}
enum WebDAVResourceKind {
    UNKNOWN,
    ADDRESSBOOK,
    CALENDAR,
    PRINCIPAL,
    COLLECTION,
    RESOURCE,
    SUBSCRIBED_ICALENDAR,
    WEBDAV_NOTES,
}
enum XmlHashStatus {
    /**
     * The compared values are the same.
     */
    SAME,
    /**
     * The compared values are different.
     */
    DIFFERENT,
    /**
     * The key to compare against was not found.
     */
    NOT_FOUND,
}
enum XmlHashType {
    /**
     * Use the object UID as the hash key.
     */
    OBJECT_UID,
    /**
     * Use the property name as the hash key.
     */
    PROPERTY,
}
/**
 * Flags of the OAuth2 service.
 * @bitfield 
 */
enum OAuth2ServiceFlags {
    /**
     * No flag set
     */
    NONE,
    /**
     * the service requires also page
     *    content to be passed to e_oauth2_service_extract_authorization_code()
     */
    EXTRACT_REQUIRES_PAGE_CONTENT,
}
enum WebDAVACEFlag {
    UNKNOWN,
    GRANT,
    DENY,
    INVERT,
    PROTECTED,
    INHERITED,
}
enum WebDAVACLRestrictions {
    NONE,
    GRANT_ONLY,
    NO_INVERT,
    DENY_BEFORE_GRANT,
    REQUIRED_PRINCIPAL,
}
enum WebDAVDiscoverSupports {
    NONE,
    CONTACTS,
    EVENTS,
    MEMOS,
    TASKS,
    WEBDAV_NOTES,
    CALENDAR_AUTO_SCHEDULE,
    SUBSCRIBED_ICALENDAR,
}
enum WebDAVListFlags {
    ALL,
    NONE,
    SUPPORTS,
    ETAG,
    DISPLAY_NAME,
    CONTENT_TYPE,
    CONTENT_LENGTH,
    CREATION_DATE,
    LAST_MODIFIED,
    DESCRIPTION,
    COLOR,
    ORDER,
    ONLY_CALENDAR,
    ONLY_ADDRESSBOOK,
}
enum WebDAVResourceSupports {
    NONE,
    CONTACTS,
    EVENTS,
    MEMOS,
    TASKS,
    FREEBUSY,
    TIMEZONE,
    WEBDAV_NOTES,
    LAST,
}
/**
 * The "cache-dir" property indicates the backend's local directory for
 * cached data.
 */
const CLIENT_BACKEND_PROPERTY_CACHE_DIR: string
/**
 * The "capabilities" property is a comma-separated list of capabilities
 * supported by the backend.  The preferred method of retrieving and working
 * with capabilities is e_client_get_capabilities() and
 * e_client_check_capability().
 */
const CLIENT_BACKEND_PROPERTY_CAPABILITIES: string
/**
 * The "online" property is "TRUE" when the client is fully opened and
 * online, "FALSE" at all other times.  See also e_client_is_online().
 */
const CLIENT_BACKEND_PROPERTY_ONLINE: string
/**
 * The "opened" property is "TRUE" when the client is fully opened,
 * "FALSE" at all other times.
 */
const CLIENT_BACKEND_PROPERTY_OPENED: string
/**
 * The "opening" property is "TRUE" when the client is in the process of
 * opening, "FALSE" at all other times.
 */
const CLIENT_BACKEND_PROPERTY_OPENING: string
/**
 * The "online" property is "TRUE" if the backend has only read access
 * to its data, "FALSE" if the backend can modify its data.  See also
 * e_client_is_readonly().
 */
const CLIENT_BACKEND_PROPERTY_READONLY: string
/**
 * The current overall revision string, this can be used as
 * a quick check to see if data has changed at all since the
 * last time the revision was observed.
 */
const CLIENT_BACKEND_PROPERTY_REVISION: string
const DEBUG_LOG_DOMAIN_CAL_QUERIES: string
const DEBUG_LOG_DOMAIN_GLOG: string
const DEBUG_LOG_DOMAIN_USER: string
/**
 * The major version number of the Evolution-Data-Server library.  Like
 * eds_major_version(), but from the headers used at application compile
 * time, rather than from the library linked against at application run
 * time.
 */
const EDS_MAJOR_VERSION: number
/**
 * The micro version number of the Evolution-Data-Server library.  Like
 * eds_micro_version(), but from the headers used at application compile
 * time, rather than from the library linked against at application run
 * time.
 */
const EDS_MICRO_VERSION: number
/**
 * The minor version number of the Evolution-Data-Server library.  Like
 * eds_minor_version(), but from the headers used at application compile
 * time, rather than from the library linked against at application run
 * time.
 */
const EDS_MINOR_VERSION: number
/**
 * A special name, which can be used as a GIO name in the call
 * to e_network_monitor_set_gio_name(), which is used to report
 * the network as always reachable.
 */
const NETWORK_MONITOR_ALWAYS_ONLINE_NAME: string
const OAUTH2_SECRET_ACCESS_TOKEN: string
const OAUTH2_SECRET_EXPIRES_AFTER: string
const OAUTH2_SECRET_REFRESH_TOKEN: string
/**
 * A name of the named parameter used for passwords in credentials,
 * used to authenticate users with e_source_invoke_authenticate_sync()
 * and e_source_invoke_authenticate(). The named parameter is optional,
 * different authentication methods can use different names.
 */
const SOURCE_CREDENTIAL_PASSWORD: string
/**
 * A name of the named parameter used for SSL/TLS trust in credentials,
 * used to authenticate users with e_source_invoke_authenticate_sync()
 * and e_source_invoke_authenticate(). The named parameter is optional.
 * Its value corresponds to current ESourceWebdav::ssl-trust property,
 * in case the ESource has that extension available. This is required
 * to have up-to-date data on the server side, when the client side
 * just saved the SSL trust change, which might not be propagated
 * into the server (factory) side quickly enough. The key is added into
 * the credentials in e_source_invoke_authenticate() automatically, if the
 * corresponding ESource contain a WebDAV extension and the key
 * is not part of the credentials already.
 */
const SOURCE_CREDENTIAL_SSL_TRUST: string
/**
 * A name of the named parameter used for usernames in credentials,
 * used to authenticate users with e_source_invoke_authenticate_sync()
 * and e_source_invoke_authenticate(). The named parameter is optional,
 * different authentication methods can use different names.
 */
const SOURCE_CREDENTIAL_USERNAME: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceAddressBook.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_ADDRESS_BOOK: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceAlarms.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_ALARMS: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceAuthentication.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_AUTHENTICATION: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceAutocomplete.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_AUTOCOMPLETE: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceAutoconfig.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_AUTOCONFIG: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceCalendar.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_CALENDAR: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceCollection.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_COLLECTION: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceContacts.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_CONTACTS_BACKEND: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceGoa.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_GOA: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceLDAP.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_LDAP_BACKEND: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceLocal.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_LOCAL_BACKEND: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMailAccount.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_MAIL_ACCOUNT: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMailComposition.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_MAIL_COMPOSITION: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMailIdentity.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_MAIL_IDENTITY: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMailSignature.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_MAIL_SIGNATURE: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMailSubmission.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_MAIL_SUBMISSION: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMailTransport.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_MAIL_TRANSPORT: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMDN.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_MDN: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMemoList.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_MEMO_LIST: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceOffline.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_OFFLINE: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceOpenPGP.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_OPENPGP: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceProxy.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_PROXY: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceRefresh.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_REFRESH: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceResource.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_RESOURCE: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceRevisionGuards.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_REVISION_GUARDS: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceSecurity.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_SECURITY: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceSMIME.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_SMIME: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceTaskList.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_TASK_LIST: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceUoa.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_UOA: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceWeather.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_WEATHER_BACKEND: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceWebdav.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_WEBDAV_BACKEND: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceWebDAVNotes.  This is also used as a group name in key files.
 */
const SOURCE_EXTENSION_WEBDAV_NOTES: string
/**
 * Extends #GParamFlags to indicate the #GObject property is associated
 * with a key file value.  Use this flag when installing #GObject properties
 * in #ESourceExtension subclasses.
 */
const SOURCE_PARAM_SETTING: number
const WEBDAV_CAPABILITY_ACCESS_CONTROL: string
const WEBDAV_CAPABILITY_ADDRESSBOOK: string
const WEBDAV_CAPABILITY_BIND: string
const WEBDAV_CAPABILITY_CALENDAR_ACCESS: string
const WEBDAV_CAPABILITY_CALENDAR_AUTO_SCHEDULE: string
const WEBDAV_CAPABILITY_CALENDAR_PROXY: string
const WEBDAV_CAPABILITY_CALENDAR_SCHEDULE: string
const WEBDAV_CAPABILITY_CLASS_1: string
const WEBDAV_CAPABILITY_CLASS_2: string
const WEBDAV_CAPABILITY_CLASS_3: string
const WEBDAV_CAPABILITY_EXTENDED_MKCOL: string
const WEBDAV_COLLATION_ASCII_CASEMAP: string
const WEBDAV_COLLATION_ASCII_CASEMAP_SUFFIX: string
const WEBDAV_COLLATION_ASCII_NUMERIC: string
const WEBDAV_COLLATION_ASCII_NUMERIC_SUFFIX: string
const WEBDAV_COLLATION_OCTET: string
const WEBDAV_COLLATION_OCTET_SUFFIX: string
const WEBDAV_COLLATION_UNICODE_CASEMAP: string
const WEBDAV_COLLATION_UNICODE_CASEMAP_SUFFIX: string
const WEBDAV_CONTENT_TYPE_CALENDAR: string
const WEBDAV_CONTENT_TYPE_VCARD: string
const WEBDAV_CONTENT_TYPE_XML: string
const WEBDAV_DEPTH_INFINITY: string
const WEBDAV_DEPTH_THIS: string
const WEBDAV_DEPTH_THIS_AND_CHILDREN: string
const WEBDAV_NS_CALDAV: string
const WEBDAV_NS_CALENDARSERVER: string
const WEBDAV_NS_CARDDAV: string
const WEBDAV_NS_DAV: string
const WEBDAV_NS_ICAL: string
/**
 * Thread safe variant of g_object_bind_property(). See its documentation
 * for more information on arguments and return value.
 * @param source the source #GObject
 * @param sourceProperty the property on `source` to bind
 * @param target the target #GObject
 * @param targetProperty the property on `target` to bind
 * @param flags flags to pass to #GBinding
 */
function bindingBindProperty(source: GObject.Object, sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
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
 */
function bindingBindPropertyFull(source: GObject.Object, sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.TClosure | null, transformFrom: GObject.TClosure | null): GObject.Binding
/**
 * Transforms an enumeration nickname to its corresponding value.
 * @param binding a #GBinding
 * @param sourceValue a #GValue of type #G_TYPE_STRING
 * @param targetValue a #GValue whose type is derived from #G_TYPE_ENUM
 * @param notUsed not used
 */
function bindingTransformEnumNickToValue(binding: GObject.Binding, sourceValue: any, targetValue: any, notUsed: object | null): boolean
/**
 * Transforms an enumeration value to its corresponding nickname.
 * @param binding a #GBinding
 * @param sourceValue a #GValue whose type is derived from #G_TYPE_ENUM
 * @param targetValue a #GValue of type #G_TYPE_STRING
 * @param notUsed not used
 */
function bindingTransformEnumValueToNick(binding: GObject.Binding, sourceValue: any, targetValue: any, notUsed: object | null): boolean
/**
 * Adds a new category, with its corresponding icon, to the
 * configuration database.
 * 
 * This function is thread safe.
 * @param category name of category to add.
 * @param unused DEPRECATED! associated color. DEPRECATED!
 * @param iconFile full path of the icon associated to the category.
 * @param searchable whether the category can be used for searching in the GUI.
 */
function categoriesAdd(category: string, unused: string, iconFile: string, searchable: boolean): void
/**
 * Gets the icon file associated with the given category and returns a copy of
 * it.
 * 
 * This function is thread safe.
 * @param category category to retrieve the icon file for.
 */
function categoriesDupIconFileFor(category: string): string
/**
 * Returns a sorted list of all the category names currently configured.
 * 
 * This function is thread safe.
 */
function categoriesDupList(): string[]
/**
 * Checks whether the given category is available in the configuration.
 * 
 * This function is thread safe.
 * @param category category to be searched.
 */
function categoriesExist(category: string): boolean
/**
 * Gets the icon file associated with the given category.
 * 
 * This function is mostly thread safe, but as the icon file name is not
 * copied, it may be freed by another thread after being returned by this
 * function. Use e_categories_dup_icon_file_for() instead.
 * @param category category to retrieve the icon file for.
 */
function categoriesGetIconFileFor(category: string): string
/**
 * Returns a sorted list of all the category names currently configured.
 * 
 * This function is mostly thread safe, but as the category names are not
 * copied, they may be freed by another thread after being returned by this
 * function. Use e_categories_dup_list() instead.
 */
function categoriesGetList(): string[]
/**
 * Gets whether the given calendar is to be used for searches in the GUI.
 * 
 * This function is thread safe.
 * 
 * Return value; %TRUE% if the category is searchable, %FALSE% if not.
 * @param category category name.
 */
function categoriesIsSearchable(category: string): boolean
/**
 * Registers callback to be called on change of any category.
 * Pair listener and user_data is used to distinguish between listeners.
 * Listeners can be unregistered with `e_categories_unregister_change_listener`.
 * 
 * This function is thread safe.
 * @param listener the callback to be called on any category change.
 */
function categoriesRegisterChangeListener(listener: GObject.Callback): void
/**
 * Removes the given category from the configuration.
 * 
 * This function is thread safe.
 * @param category category to be removed.
 */
function categoriesRemove(category: string): void
/**
 * Sets the icon file associated with the given category.
 * 
 * This function is thread safe.
 * @param category category to set the icon file for.
 * @param iconFile icon file.
 */
function categoriesSetIconFileFor(category: string, iconFile: string): void
/**
 * Removes previously registered callback from the list of listeners on changes.
 * If it was not registered, then does nothing.
 * 
 * This function is thread safe.
 * @param listener Callback to be removed.
 */
function categoriesUnregisterChangeListener(listener: GObject.Callback): void
function collatorErrorQuark(): GLib.Quark
/**
 * Returns the value set by e_data_server_util_set_dbus_call_timeout().
 */
function dataServerUtilGetDbusCallTimeout(): number
/**
 * Sets default timeout, in milliseconds, for calls of g_dbus_proxy_call()
 * family functions.
 * 
 * -1 means the default value as set by D-Bus itself.
 * G_MAXINT means no timeout at all.
 * 
 * Default value is set also by configure option --with-dbus-call-timeout=ms
 * and -1 is used when not set.
 * @param timeoutMsec default timeout for D-Bus calls in miliseconds
 */
function dataServerUtilSetDbusCallTimeout(timeoutMsec: number): void
function debugLogClear(): void
/**
 * Disables all domains from the `domains` array.
 * @param domains an array of domains to disable
 */
function debugLogDisableDomains(domains: string[]): void
/**
 * Saves current log information to the given `filename`.
 * @param filename a filename to save logged information to
 */
function debugLogDump(filename: string): boolean
/**
 * Saves current log information to a file "e-debug-log-YYYY-MM-DD-HH-mm-ss.txt"
 * in the user's HOME directory.
 */
function debugLogDumpToDatedFile(): boolean
/**
 * Enables all domains from the `domains` array.
 * @param domains an array of domains to enable
 */
function debugLogEnableDomains(domains: string[]): void
function debugLogGetMaxLines(): number
function debugLogIsDomainEnabled(domain: string): boolean
/**
 * Loads configuration for the logging from the given `filename`.
 * @param filename a configuration file name
 */
function debugLogLoadConfiguration(filename: string): boolean
/**
 * Limits how many lines the log can have.
 * @param numLines number of lines
 */
function debugLogSetMaxLines(numLines: number): void
/**
 * Checks that the Evolution-Data-Server library in use is compatible with
 * the given version.  Generally you would pass in the constants
 * #EDS_MAJOR_VERSION, #EDS_MINOR_VERSION, #EDS_MICRO_VERSION as the three
 * arguments to this function.  That produces a check that the library in
 * use is compatible with the version of Evolution-Data-Server the
 * application or module was compiled against.
 * @param requiredMajor the required major version
 * @param requiredMinor the required minor version
 * @param requiredMicro the required micro version
 */
function edsCheckVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string | null
/**
 * Fetches the appropriate enumeration value for `string` in the given
 * enum type `type` and stores the result in `enum_value`
 * @param enumType The enum type
 * @param string The string containing the enum value or nick
 * @param enumValue A return location to store the result
 */
function enumFromString(enumType: GObject.GType, string: string, enumValue: number): boolean
/**
 * Converts an enum value to a string using strings from the GType system.
 * @param enumType An enum type
 * @param enumValue The enum value to convert
 */
function enumToString(enumType: GObject.GType, enumValue: number): string
/**
 * Asynchronously deletes `file`.  If `file` is a directory, its contents
 * are deleted recursively before `file` itself is deleted.  The recursive
 * delete operation will stop on the first error.
 * 
 * If `cancellable` is not %NULL, then the operation can be cancelled
 * by triggering the cancellable object before the operation finishes.
 * 
 * When the operation is finished, `callback` will be called.  You can then
 * call e_file_recursive_delete_finish() to get the result of the operation.
 * @param file a #GFile to delete
 * @param ioPriority the I/O priority of the request
 * @param cancellable optional #GCancellable object, or %NULL
 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
 */
function fileRecursiveDelete(file: Gio.File, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes the operation started with e_file_recursive_delete().
 * 
 * If the operation was cancelled, the error #G_IO_ERROR_CANCELLED will be
 * returned.
 * @param file a #GFile to delete
 * @param result a #GAsyncResult
 */
function fileRecursiveDeleteFinish(file: Gio.File, result: Gio.AsyncResult): boolean
/**
 * Deletes `file`.  If `file` is a directory, its contents are deleted
 * recursively before `file` itself is deleted.  The recursive delete
 * operation will stop on the first error.
 * 
 * If `cancellable` is not %NULL, then the operation can be cancelled
 * by triggering the cancellable object from another thread.  If the
 * operation was cancelled, the error #G_IO_ERROR_CANCELLED will be
 * returned.
 * @param file a #GFile to delete
 * @param cancellable optional #GCancellable object, or %NULL
 */
function fileRecursiveDeleteSync(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
function filenameMakeSafe(string: string): void
/**
 * Creates a local path constructed from `basepath` / `fileprefix` + "-" + `filename,`
 * and makes sure the path `basepath` exists. If creation of
 * the path fails, then NULL is returned.
 * @param basepath base path of a file name; this is left unchanged
 * @param fileprefix prefix for the filename; this is encoded
 * @param filename file name to use; this is encoded; can be %NULL
 * @param fileindex used when `filename` is NULL, then the filename        is generated as "file" + fileindex
 */
function filenameMkdirEncoded(basepath: string, fileprefix: string, filename: string | null, fileindex: number): string | null
/**
 * Converts the `free_form_exp` to an S-Expression using the S-Expression
 * builders defined in the `symbols`. The `symbols` should have one symbol
 * with an empty string as its name, which is used for words which do not
 * have a symbol name prefix.
 * 
 * The `symbols` is a NULL-terminated array of known symbols. The NULL should
 * be set for the symbol's name.
 * @param freeFormExp a Free Form Expression
 * @param symbols known symbols, which can be used in the Free From Expression
 */
function freeFormExpToSexp(freeFormExp: string, symbols: FreeFormExpSymbol): string | null
/**
 * Returns a base directory in which to store user-specific,
 * non-essential cached data for Evolution or Evolution-Data-Server.
 * 
 * The returned string is owned by libedataserver and must not be
 * modified or freed.
 */
function getUserCacheDir(): string
/**
 * Returns a base directory in which to store user-specific configuration
 * information for Evolution or Evolution-Data-Server.
 * 
 * The returned string is owned by libedataserver and must not be
 * modified or freed.
 */
function getUserConfigDir(): string
/**
 * Returns a base directory in which to store user-specific data for
 * Evolution or Evolution-Data-Server.
 * 
 * The returned string is owned by libedataserver and must not be
 * modified or freed.
 */
function getUserDataDir(): string
/**
 * Converts the calendar time time representation `tt` to a broken-down
 * time representation, store in `tm,` and provides the offset in
 * seconds from UTC time, stored in `offset`.
 * @param tt The #time_t to convert.
 * @param tm The #tm to store the result in.
 * @param offset The #int to store the offset in.
 */
function localtimeWithOffset(tt: number, tm: object | null, offset: number): void
/**
 * Like mktime(3), but assumes UTC instead of local timezone.
 * @param tm The #tm to convert to a calendar time representation.
 */
function mktimeUtc(tm: object | null): number
/**
 * Sets `value` for `name` to `form`. The `form` should be
 * the one used in e_oauth2_service_prepare_authentication_uri_query(),
 * e_oauth2_service_prepare_get_token_form() or
 * e_oauth2_service_prepare_refresh_token_form().
 * 
 * If the `value` is %NULL, then the property named `name` is removed
 * from the `form` instead.
 * @param form a #GHashTable
 * @param name a property name
 * @param value a property value
 */
function oauth2ServiceUtilSetToForm(form: GLib.HashTable, name: string, value: string | null): void
/**
 * Takes ownership of `value` and sets it for `name` to `form`. The `value`
 * will be freed with g_free(), when no longer needed. The `form` should be
 * the one used in e_oauth2_service_prepare_authentication_uri_query(),
 * e_oauth2_service_prepare_get_token_form() or
 * e_oauth2_service_prepare_refresh_token_form().
 * 
 * If the `value` is %NULL, then the property named `name` is removed
 * from the `form` instead.
 * @param form a #GHashTable
 * @param name a property name
 * @param value a property value
 */
function oauth2ServiceUtilTakeToForm(form: GLib.HashTable, name: string, value: string | null): void
/**
 * Transfers the contents of `src_queue` to the tail of `dst_queue`.
 * When the operation is complete, `src_queue` will be empty.
 * @param srcQueue a source #GQueue
 * @param dstQueue a destination #GQueue
 */
function queueTransfer(srcQueue: GLib.Queue, dstQueue: GLib.Queue): void
/**
 * Deletes the secret for `uid` from either the default keyring or
 * session keyring.
 * 
 * Note the boolean return value indicates whether the delete operation
 * itself completed successfully, not whether the secret was found and
 * deleted. If no such secret was found, the function will still return
 * %TRUE. If an error occurs, the function sets `error` and returns %FALSE.
 * @param uid a unique identifier of the secret
 * @param cancellable optional #GCancellable object, or %NULL
 */
function secretStoreDeleteSync(uid: string, cancellable: Gio.Cancellable | null): boolean
/**
 * Looks up a secret for the `uid`. Both the default and session keyrings
 * are queried.
 * 
 * Note the boolean return value indicates whether the lookup operation
 * itself completed successfully, not whether the secret was found. If
 * no secret was found, the function will set `out_secret` to %NULL,
 * but still return %TRUE. If an error occurs, the function sets `error`
 * and returns %FALSE.
 * @param uid a unique identifier of the secret
 * @param cancellable optional #GCancellable object, or %NULL
 */
function secretStoreLookupSync(uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSecret */ string ]
/**
 * Stores the `secret` for the `uid`.
 * 
 * If `permanently` is %TRUE, the secret is stored in the default keyring.
 * Otherwise the secret is stored in the memory-only session keyring. If
 * an error occurs, the function sets `error` and returns %FALSE.
 * @param uid a unique identifier of the secret
 * @param secret the secret to store
 * @param label human readable description of the secret
 * @param permanently store permanently or just for the session
 * @param cancellable optional #GCancellable object, or %NULL
 */
function secretStoreStoreSync(uid: string, secret: string, label: string, permanently: boolean, cancellable: Gio.Cancellable | null): boolean
/**
 * Remembers what had been read from the `input_stream` and prints it
 * to stdout when the `message` is finished. The function assumes
 * ownership of the `input_stream`.
 * @param message a #SoupMessage
 * @param inputStream a #GInputStream, associated with the `message`
 */
function soupLoggerAttach(message: Soup.Message, inputStream: Gio.InputStream): Gio.InputStream
/**
 * Sets up automatic SSL certificate trust handling for `soup_message` using the trust
 * data stored in `source'`s WebDAV extension. If `soup_message` is about to be sent on
 * an SSL connection with an invalid certificate, the code checks if the WebDAV
 * extension already has a trust response for that certificate and verifies it
 * with e_source_webdav_verify_ssl_trust(). If the verification fails, then
 * the `soup_message` send also fails.
 * 
 * This works by connecting to the "network-event" signal on `soup_message` and
 * connecting to the "accept-certificate" signal on each #GTlsConnection for
 * which `soup_message` reports a #G_SOCKET_CLIENT_TLS_HANDSHAKING event. These
 * handlers are torn down automatically when `soup_message` is disposed. This process
 * is not thread-safe; it is sufficient for safety if all use of `soup_message'`s
 * session and the disposal of `soup_message` occur in the same thread.
 * @param soupMessage a #SoupMessage about to be sent to the source
 * @param source an #ESource that uses WebDAV
 */
function soupSslTrustConnect(soupMessage: Soup.Message, source: Source): void
/**
 * This function is a wrapper around the strftime (3) function, which
 * converts the &percnt;l and &percnt;k (12h and 24h) format variables
 * if necessary.
 * @param string The string array to store the result in.
 * @param max The size of array `s`.
 * @param fmt The formatting to use on `tm`.
 * @param tm The time value to format.
 */
function strftime(string: string, max: number, fmt: string, tm: object | null): number
/**
 * Creates a string representation of the time value `date_tm` and
 * stores it in `buffer`.  `buffer_size` should be at least 64 to be
 * safe. If `show_midnight` is %FALSE, and the time is midnight, then
 * only the date is stored in `buffer`. If `show_zero_seconds` is
 * %FALSE, then if the time has zero seconds only the hour and minute
 * of the time are stored in `buffer`.
 * @param dateTm The #tm to convert to a string.
 * @param use24HourFormat A #gboolean.
 * @param showMidnight A #gboolean.
 * @param showZeroSeconds A #gboolean.
 * @param buffer A #char buffer to store the time string in.
 * @param bufferSize The length of `buffer`.
 */
function timeFormatDateAndTime(dateTm: object | null, use24HourFormat: boolean, showMidnight: boolean, showZeroSeconds: boolean, buffer: string, bufferSize: number): void
/**
 * Creates a string representation of a time value in `date_tm` and
 * stores it in `buffer`. `buffer_size` should be at least 64.
 * @param dateTm The #tm to convert to a string.
 * @param use24HourFormat A #gboolean.
 * @param showZeroSeconds A #gboolean.
 * @param buffer The #char buffer to store the result in.
 * @param bufferSize The length of `buffer`.
 */
function timeFormatTime(dateTm: object | null, use24HourFormat: boolean, showZeroSeconds: boolean, buffer: string, bufferSize: number): void
/**
 * Retrieves a date format string with a 4-digit year (D_FMT on systems with
 * nl_langinfo() available). In case the current locale doesn't support 4-digit
 * year, the function returns format as specified by the locale.
 * 
 * Free the returned string with g_free().
 */
function timeGetDFmtWith4digitYear(): string
/**
 * Takes in a date string entered by the user and tries to convert it to
 * a struct #tm.
 * @param value A date string.
 * @param result Return value for the parsed date.
 */
function timeParseDate(value: string, result: object | null): TimeParseStatus
/**
 * Parses a string `value` containing a date and a time and stores the
 * result in `result`. The date in `value` is expected to be in a format
 * like "Wed 3/13/00 14:20:00", though gettext() is used to support the
 * appropriate local formats. There is also some leniency on the
 * format of the string, e.g. the weekday can be skipped or 12-hour
 * formats with am/pm can be used.
 * @param value the string to parse a date and time from
 * @param result a #tm to store the result in
 */
function timeParseDateAndTime(value: string, result: object | null): TimeParseStatus
/**
 * Parses a string `value` containing a date and a time and stores the
 * result in `result`. The date in `value` is expected to be in a format
 * like "Wed 3/13/00 14:20:00", though gettext() is used to support the
 * appropriate local formats. There is also some leniency on the
 * format of the string, e.g. the weekday can be skipped or 12-hour
 * formats with am/pm can be used.
 * @param value The string to parse a date and time from.
 * @param result A #tm to store the result in.
 * @param twoDigitYear set to TRUE, is parsing with two-digit year, else FALSE,    but only when not NULL.
 */
function timeParseDateAndTimeEx(value: string, result: object | null, twoDigitYear: boolean): TimeParseStatus
/**
 * Takes in a date string entered by the user and tries to convert it to
 * a struct #tm.
 * @param value A date string.
 * @param result Return value for the parsed date.
 * @param twoDigitYear set to TRUE, is parsing with two-digit year, else FALSE,    but only when not NULL.
 */
function timeParseDateEx(value: string, result: object | null, twoDigitYear: boolean): TimeParseStatus
/**
 * Parses `value,` a string containing a time. `value` is expected to be
 * in a format like "14:20:00". gettext() is used to
 * support the appropriate local formats and slightly
 * different formats, such as 12-hour formats with am/pm,
 * are accepted as well.
 * @param value The string to parse a time from.
 * @param result A #tm to store the result in.
 */
function timeParseTime(value: string, result: object | null): TimeParseStatus
/**
 * Similar to g_timeout_add_seconds_full(), but also names the #GSource as
 * `name`.
 * 
 * You might find e_named_timeout_add_seconds() or
 * e_named_timeout_add_seconds_full() more convenient.  Those macros name
 * the #GSource implicitly.
 * @param priority the priority of the timeout source, typically in the            range between #G_PRIORITY_DEFAULT and #G_PRIORITY_HIGH
 * @param interval the time between calls to the function, in seconds
 * @param name debug name for the source
 * @param function_ function to call
 */
function timeoutAddSecondsWithName(priority: number, interval: number, name: string | null, function_: GLib.SourceFunc): number
/**
 * Similar to g_timeout_add_full(), but also names the #GSource as `name`.
 * 
 * You might find e_named_timeout_add() or e_named_timeout_add_full() more
 * convenient.  Those macros name the #GSource implicitly.
 * @param priority the priority of the timeout source, typically in the            range between #G_PRIORITY_DEFAULT and #G_PRIORITY_HIGH
 * @param interval the time between calls to the function, in milliseconds            (1/1000ths of a second)
 * @param name debug name for the source
 * @param function_ function to call
 */
function timeoutAddWithName(priority: number, interval: number, name: string | null, function_: GLib.SourceFunc): number
/**
 * Calls `func` for all instantiable subtypes of `parent_type`.
 * 
 * This is often useful for extending functionality by way of #EModule.
 * A module may register a subtype of `parent_type` in its e_module_load()
 * function.  Then later on the application will call e_type_traverse()
 * to instantiate all registered subtypes of `parent_type`.
 * @param parentType the root #GType to traverse from
 * @param func the function to call for each visited #GType
 */
function typeTraverse(parentType: GObject.GType, func: TypeFunc): void
/**
 * Generate a new unique string for use e.g. in account lists.
 */
function uidNew(): string
/**
 * The UTF-8 equivalent of e_strftime ().
 * @param string The string array to store the result in.
 * @param max The size of array `s`.
 * @param fmt The formatting to use on `tm`.
 * @param tm The time value to format.
 */
function utf8Strftime(string: string, max: number, fmt: string, tm: object | null): number
/**
 * Checks whether the `collection_source` can be used as a credential source
 * for the `child_source`. The relationship is not tested in the function.
 * When the `collection_source` is %NULL, then it simply returns %FALSE.
 * @param collectionSource a collection #ESource, or %NULL
 * @param childSource a children of `collection_source`
 */
function utilCanUseCollectionAsCredentialSource(collectionSource: object | null, childSource: object | null): boolean
/**
 * Copies #GSList of #GObject<!-- -->s at the end of `copy_to`.
 * @param copyTo Where to copy; can be %NULL
 * @param objects #GSList of #GObject<!-- -->s to be copied
 */
function utilCopyObjectSlist(copyTo: GObject.Object[] | null, objects: GObject.Object[]): GObject.Object[]
/**
 * Copies #GSList of strings at the end of `copy_to`.
 * @param copyTo Where to copy; can be %NULL
 * @param strings #GSList of strings to be copied
 */
function utilCopyStringSlist(copyTo: string[] | null, strings: string[]): string[]
/**
 * If `str` is a valid UTF-8 string, the function returns `str` and does
 * not set `gdbus_str`.
 * 
 * If `str` is an invalid UTF-8 string, the function calls
 * e_util_utf8_make_valid() and points `gdbus_str` to the newly-allocated,
 * valid UTF-8 string, and also returns it.  The caller should free the
 * string pointed to by `gdbus_str` with g_free().
 * 
 * If `str` is %NULL, the function returns an empty string and does not
 * set `gdbus_str`.
 * 
 * Admittedly, the function semantics are a little awkward.  The example
 * below illustrates the easiest way to cope with the `gdbus_str` argument:
 * 
 * |[
 *     const gchar *trusted_utf8;
 *     gchar *allocated = NULL;
 * 
 *     trusted_utf8 = e_util_ensure_gdbus_string (untrusted_utf8, &allocated);
 * 
 *     Do stuff with trusted_utf8, then clear it.
 * 
 *     trusted_utf8 = NULL;
 * 
 *     g_free (allocated);
 *     allocated = NULL;
 * ```
 * 
 * @param str a possibly invalid UTF-8 string, or %NULL
 * @param gdbusStr return location for the corrected string
 */
function utilEnsureGdbusString(str: string | null, gdbusStr: string): string
/**
 * Calls g_object_unref() on each member of `objects` if non-%NULL and then frees
 * also `objects` itself.
 * @param objects a #GSList of nullable #GObject<!-- -->s
 */
function utilFreeNullableObjectSlist(objects: GObject.Object[]): void
/**
 * Calls g_object_unref() on each member of `objects` and then frees
 * also `objects` itself.
 * @param objects a #GSList of #GObject<!-- -->s
 */
function utilFreeObjectSlist(objects: GObject.Object[]): void
/**
 * Frees memory previously allocated by e_util_strv_to_slist().
 * @param strings a #GSList of strings (gchar *)
 */
function utilFreeStringSlist(strings: string[]): void
/**
 * Generates a unique identificator, which can be used as part of
 * the Message-ID header, or iCalendar component UID, or vCard UID.
 * The resulting string doesn't contain any host name, it's
 * a hexa-decimal string with no particular meaning.
 * 
 * Free the returned string with g_free(), when no longer needed.
 */
function utilGenerateUid(): string
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
 */
function utilGetDirectoryVariants(mainPath: string, replacePrefix: string, withModulesDir: boolean): string[]
/**
 * Constructs a full name of the `source` with all of its parents
 * of the form: "&lt;account-name&gt; : &lt;parent&gt;/&lt;source&gt;" where
 * the "&lt;parent&gt;/" part can be repeated zero or more times, depending
 * on the deep level of the `source`.
 * @param registry an #ESourceRegistry
 * @param source an #ESource
 */
function utilGetSourceFullName(registry: object | null, source: object | null): string
/**
 * Returns a 64-bit integer hopefully uniquely identifying the
 * thread. To be used in debugging output and logging only.
 * The returned value is just a cast of a pointer to the 64-bit integer.
 * 
 * There is no guarantee that calling e_util_gthread_id () on one
 * thread first and later after that thread has dies on another won't
 * return the same integer.
 * 
 * On Linux and Win32, known to really return a unique id for each
 * thread existing at a certain time. No guarantee that ids won't be
 * reused after a thread has terminated, though.
 * @param thread A #GThread pointer
 */
function utilGthreadId(thread: GLib.Thread): number
/**
 * Checks whether the `identity_source` can be used for sending, which means
 * whether it has configures send mail source.
 * @param registry an #ESourceRegistry
 * @param identitySource an #ESource with mail identity extension
 */
function utilIdentityCanSend(registry: object | null, identitySource: object | null): boolean
/**
 * Calls g_free() on `string,` but before it rewrites its content with zeros.
 * This is suitable to free strings with passwords.
 * @param str a string to free
 */
function utilSafeFreeString(str: string): void
/**
 * Convert list of strings into NULL-terminates array of strings.
 * @param strings a #GSList of strings (const gchar *)
 */
function utilSlistToStrv(strings: string[]): string[]
/**
 * Compares two #ESource-s in a way suitable for user interface.
 * It can be used as a #GCompareFunc.
 * 
 * This is also used by e_source_registry_build_display_tree().
 * @param sourceA the first #ESource
 * @param sourceB the second #ESource
 */
function utilSourceCompareForSort(sourceA: object | null, sourceB: object | null): number
/**
 * Compares `str1` and `str2` like g_strcmp0(), except it handles %NULL and
 * empty strings as equal.
 * @param str1 a C string on %NULL
 * @param str2 another C string or %NULL
 */
function utilStrcmp0(str1: string | null, str2: string | null): number
/**
 * Duplicates `string` and strips off any leading or trailing whitespace.
 * The resulting string is returned unless it is empty or %NULL, in which
 * case the function returns %NULL.
 * 
 * Free the returned string with g_free().
 * @param string a string value, or %NULL
 */
function utilStrdupStrip(string: string | null): string | null
/**
 * Find the first instance of `needle` in `haystack,` ignoring case for
 * bytes that are ASCII characters.
 * @param haystack The string to search in.
 * @param needle The string to search for.
 */
function utilStrstrcase(haystack: string, needle: string): string | null
/**
 * Compares `v1` and `v2` for equality, handling %NULL gracefully.
 * 
 * The arguments types are generic for compatibility with #GEqualFunc.
 * @param v1 a %NULL-terminated string array, or %NULL
 * @param v2 another %NULL-terminated string array, or %NULL
 */
function utilStrvEqual(v1: string[], v2: string[]): boolean
/**
 * Convert NULL-terminated array of strings to a list of strings.
 * @param strv a NULL-terminated array of strings (const gchar *)
 */
function utilStrvToSlist(strv: string): string[]
/**
 * Get a UTF-8 character from the beginning of `text`.
 * @param text The string to take the UTF-8 character from.
 * @param out The location to store the UTF-8 character in.
 */
function utilUnicodeGetUtf8(text: string, out: string): string | null
/**
 * Unrefs the given `object` in a dedicated thread. This is useful when unreffing
 * object deep in call stack when the caller might still use the object and
 * this being the last reference to it.
 * @param object a #GObject
 */
function utilUnrefInThread(object: object | null): void
/**
 * Returns a newly-allocated NULL-terminated string with invalid characters
 * replaced by Unicode replacement characters (U+FFFD).
 * For %NULL `data` returns newly allocated empty string ("").
 * @param data UTF-8 binary data
 * @param dataBytes length of the binary data
 */
function utilUtf8DataMakeValid(data: string | null, dataBytes: number): string
/**
 * Converts the `text` into a decomposed variant and strips it, which
 * allows also cheap case insensitive comparision afterwards. This
 * produces an output as being used in e_util_utf8_strstrcasedecomp().
 * @param text a UTF-8 string
 */
function utilUtf8Decompose(text: string): string
/**
 * Returns a newly-allocated copy of `str,` with invalid characters
 * replaced by Unicode replacement characters (U+FFFD).
 * For %NULL `str` returns newly allocated empty string ("").
 * @param str a UTF-8 string
 */
function utilUtf8MakeValid(str: string | null): string
/**
 * Normalizes `str` by making it all lower case and removing any accents from it.
 * @param str a UTF-8 string
 */
function utilUtf8Normalize(str: string | null): string | null
/**
 * Returns a newly-allocated copy of `str` with accents removed.
 * @param str a UTF-8 string, or %NULL
 */
function utilUtf8RemoveAccents(str: string | null): string | null
/**
 * Compares two UTF-8 strings using approximate case-insensitive ordering.
 * @param s1 a UTF-8 string
 * @param s2 another UTF-8 string
 */
function utilUtf8Strcasecmp(s1: string, s2: string): number
/**
 * Find the first instance of `needle` in `haystack,` ignoring case. (No
 * proper case folding or decomposing is done.) Both `needle` and
 * `haystack` are UTF-8 strings.
 * @param haystack The string to search in.
 * @param needle The string to search for.
 */
function utilUtf8Strstrcase(haystack: string | null, needle: string | null): string | null
/**
 * Find the first instance of `needle` in `haystack,` where both `needle`
 * and `haystack` are UTF-8 strings. Both strings are stripped and
 * decomposed for comparison, and case is ignored.
 * @param haystack The string to search in.
 * @param needle The string to search for.
 */
function utilUtf8Strstrcasedecomp(haystack: string, needle: string): string | null
/**
 * Frees an #EWebDAVAccessControlEntry previously created with e_webdav_access_control_entry_new()
 * or e_webdav_access_control_entry_copy(). The function does nothing, if `ptr` is %NULL.
 * @param ptr an #EWebDAVAccessControlEntry
 */
function webdavAccessControlEntryFree(ptr: object | null): void
/**
 * Frees a `GSList` of discovered sources returned from
 * e_webdav_discover_sources_finish() or e_webdav_discover_sources_sync().
 * @param discoveredSources A #GSList of discovered sources
 */
function webdavDiscoverFreeDiscoveredSources(discoveredSources: WebDAVDiscoveredSource[]): void
/**
 * Asynchronously runs discovery of the WebDAV sources (CalDAV and CardDAV), eventually
 * limited by the `only_supports` filter, which can be %E_WEBDAV_DISCOVER_SUPPORTS_NONE
 * to search all types. Note that the list of returned calendars can be more general,
 * thus check for its actual support type for further filtering of the results.
 * The `url_use_path` can be used to override actual server path, or even complete URL,
 * for the given `source`.
 * 
 * When the operation is finished, `callback` will be called. You can then
 * call e_webdav_discover_sources_finish() to get the result of the operation.
 * @param source an #ESource from which to take connection details
 * @param urlUsePath optional URL override, or %NULL
 * @param onlySupports bit-or of EWebDAVDiscoverSupports, to limit what type of sources to search
 * @param credentials credentials to use for authentication to the server
 * @param cancellable optional #GCancellable object, or %NULL
 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
 */
function webdavDiscoverSources(source: Source, urlUsePath: string | null, onlySupports: number, credentials: NamedParameters | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes the operation started with e_webdav_discover_sources(). If an
 * error occurred, the function will set `error` and return %FALSE. The function
 * can return success and no discovered sources, the same as it can return failure,
 * but still set some output arguments, like the certificate related output
 * arguments with SOUP_STATUS_SSL_FAILED error.
 * 
 * The return value of `out_certificate_pem` should be freed with g_free()
 * when no longer needed.
 * 
 * The return value of `out_discovered_sources` should be freed
 * with e_webdav_discover_free_discovered_sources() when no longer needed.
 * 
 * The return value of `out_calendar_user_addresses` should be freed
 * with g_slist_free_full (calendar_user_addresses, g_free); when
 * no longer needed.
 * @param source an #ESource on which the operation was started
 * @param result a #GAsyncResult
 */
function webdavDiscoverSourcesFinish(source: Source, result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outDiscoveredSources */ WebDAVDiscoveredSource[], /* outCalendarUserAddresses */ string[] ]
/**
 * This is the same as e_webdav_discover_sources(), it only allows to
 * provide a callback function (with its user_data), to reference an additional
 * #ESource. It's good to avoid creating its own #ESourceRegistry instance to
 * get it.
 * 
 * When the operation is finished, `callback` will be called. You can then
 * call e_webdav_discover_sources_finish() to get the result of the operation.
 * @param source an #ESource from which to take connection details
 * @param urlUsePath optional URL override, or %NULL
 * @param onlySupports bit-or of EWebDAVDiscoverSupports, to limit what type of sources to search
 * @param credentials credentials to use for authentication to the server
 * @param refSourceFunc optional callback to use to get an ESource
 * @param cancellable optional #GCancellable object, or %NULL
 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
 */
function webdavDiscoverSourcesFull(source: Source, urlUsePath: string | null, onlySupports: number, credentials: NamedParameters | null, refSourceFunc: WebDAVDiscoverRefSourceFunc | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * This is the same as e_webdav_discover_sources_sync(), it only allows to
 * provide a callback function (with its user_data), to reference an additional
 * #ESource. It's good to avoid creating its own #ESourceRegistry instance to
 * get it.
 * @param source an #ESource from which to take connection details
 * @param urlUsePath optional URL override, or %NULL
 * @param onlySupports bit-or of EWebDAVDiscoverSupports, to limit what type of sources to search
 * @param credentials credentials to use for authentication to the server
 * @param refSourceFunc optional callback to use to get an ESource
 * @param cancellable optional #GCancellable object, or %NULL
 */
function webdavDiscoverSourcesFullSync(source: Source, urlUsePath: string | null, onlySupports: number, credentials: NamedParameters | null, refSourceFunc: WebDAVDiscoverRefSourceFunc | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outDiscoveredSources */ WebDAVDiscoveredSource[], /* outCalendarUserAddresses */ string[] ]
/**
 * Synchronously runs discovery of the WebDAV sources (CalDAV and CardDAV), eventually
 * limited by the `only_supports` filter, which can be %E_WEBDAV_DISCOVER_SUPPORTS_NONE
 * to search all types. Note that the list of returned calendars can be more general,
 * thus check for its actual support type for further filtering of the results.
 * The `url_use_path` can be used to override actual server path, or even complete URL,
 * for the given `source`.
 * 
 * If an error occurred, the function will set `error` and return %FALSE. The function
 * can return success and no discovered sources, the same as it can return failure,
 * but still set some output arguments, like the certificate related output
 * arguments with SOUP_STATUS_SSL_FAILED error.
 * 
 * The return value of `out_certificate_pem` should be freed with g_free()
 * when no longer needed.
 * 
 * The return value of `out_discovered_sources` should be freed
 * with e_webdav_discover_free_discovered_sources() when no longer needed.
 * 
 * The return value of `out_calendar_user_addresses` should be freed
 * with g_slist_free_full (calendar_user_addresses, g_free); when
 * no longer needed.
 * @param source an #ESource from which to take connection details
 * @param urlUsePath optional URL override, or %NULL
 * @param onlySupports bit-or of EWebDAVDiscoverSupports, to limit what type of sources to search
 * @param credentials credentials to use for authentication to the server
 * @param cancellable optional #GCancellable object, or %NULL
 */
function webdavDiscoverSourcesSync(source: Source, urlUsePath: string | null, onlySupports: number, credentials: NamedParameters | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outDiscoveredSources */ WebDAVDiscoveredSource[], /* outCalendarUserAddresses */ string[] ]
/**
 * Frees an #EWebDAVPrivilege previously created with e_webdav_privilege_new()
 * or e_webdav_privilege_copy(). The function does nothing, if `ptr` is %NULL.
 * @param ptr an #EWebDAVPrivilege
 */
function webdavPrivilegeFree(ptr: object | null): void
/**
 * Frees an #EWebDAVPropertyChange previously created with e_webdav_property_change_new_set(),
 * e_webdav_property_change_new_remove() or or e_webdav_property_change_copy().
 * The function does nothing, if `ptr` is %NULL.
 * @param ptr an #EWebDAVPropertyChange
 */
function webdavPropertyChangeFree(ptr: object | null): void
/**
 * Frees an #EWebDAVResource previously created with e_webdav_resource_new()
 * or e_webdav_resource_copy(). The function does nothing, if `ptr` is %NULL.
 * @param ptr an #EWebDAVResource
 */
function webdavResourceFree(ptr: object | null): void
/**
 * Frees the memory used by `hash` and its contents.
 * @param hash the #GHashTable to destroy
 */
function xmlDestroyHash(hash: GLib.HashTable): void
/**
 * Writes the given XML document structure to the file given by `filename`.
 * If an error occurs while saving, the function returns -1 and sets errno.
 * @param filename path to a file to save to
 * @param doc an XML document structure
 */
function xmlSaveFile(filename: string, doc: libxml2.Doc): number
/**
 * Creates a #GHashTable representation of the #xmlDoc `doc`.
 * If `type` is * `E_XML_HASH_TYPE_PROPERTY,` all XML nodes will be
 * indexed in the #GHashTable by name. If `type` is
 * %E_XML_HASH_TYPE_OBJECT_UID, then XML objects will be indexed in
 * the hash by their UID (other nodes will still be indexed by name).
 * @param doc The #xmlDoc to store in a hash table.
 * @param type The value type to use as a key in the hash table.
 */
function xmlToHash(doc: libxml2.Doc, type: XmlHashType): GLib.HashTable
/**
 * Adds a new key/value pair to the #EXmlHash `hash`.
 * @param hash the #EXmlHash to add an entry to
 * @param key the key to use for the entry
 * @param data the value of the new entry
 */
function xmlhashAdd(hash: XmlHash, key: string, data: string): void
/**
 * Compares the value with key equal to `key` in `hash` against
 * `compare_data`.
 * @param hash the #EXmlHash to compare against
 * @param key the key of the hash entry to compare with
 * @param compareData the data to compare against the hash entry
 */
function xmlhashCompare(hash: XmlHash, key: string, compareData: string): XmlHashStatus
/**
 * Frees the memory associated with `hash`.
 * @param hash The #EXmlHash to destroy.
 */
function xmlhashDestroy(hash: XmlHash): void
/**
 * Executes `func` against each key/value pair in `hash`.
 * @param hash an #EXmlHash
 * @param func the #EXmlHashFunc to execute on the data in `hash`
 */
function xmlhashForeachKey(hash: XmlHash, func: XmlHashFunc): void
/**
 * Calls g_hash_table_foreach_remove() on `hash<`!-- -->'s internal hash
 * table.  See g_hash_table_foreach_remove() for details.
 * @param hash an #EXmlHash
 * @param func the #EXmlHashFunc to execute on the data in `hash`
 */
function xmlhashForeachKeyRemove(hash: XmlHash, func: XmlHashRemoveFunc): void
/**
 * Remove the entry in `hash` with key equal to `key,` if it exists.
 * @param hash the #EXmlHash to remove an entry from
 * @param key the key of the entry to remove
 */
function xmlhashRemove(hash: XmlHash, key: string): void
/**
 * Writes the XML represented by `hash` to the file originally passed
 * to e_xmlhash_new().
 * @param hash The #EXmlHash to write.
 */
function xmlhashWrite(hash: XmlHash): void
interface FreeFormExpBuildSexpFunc {
    (word: string, options: string, hint: string): string
}
interface OAuth2ServiceRefSourceFunc {
    (uid: string): Source | null
}
interface SourceRefreshFunc {
    (source: Source): void
}
/**
 * Specifies the type of functions passed to e_type_traverse().
 * @callback 
 * @param type a #GType
 */
interface TypeFunc {
    (type: GObject.GType): void
}
interface WebDAVDiscoverRefSourceFunc {
    (uid: string): Source | null
}
/**
 * A callback function for e_webdav_session_propfind_sync(),
 * e_webdav_session_report_sync() and other XML response with DAV:propstat
 * elements traversal functions.
 * 
 * The `prop_node` points to the actual property (prop) node and it can be examined
 * with e_xml_find_child(), e_xml_find_children_nodes() and other provided XML helper functions.
 * @callback 
 * @param webdav an #EWebDAVSession
 * @param propNode an #xmlNode
 * @param requestUri a #SoupURI, containing the request URI, maybe redirected by the server
 * @param href a full URI to which the property belongs, or %NULL, when not found
 * @param statusCode an HTTP status code for this property
 */
interface WebDAVPropstatTraverseFunc {
    (webdav: WebDAVSession, propNode: libxml2.Node, requestUri: Soup.URI, href: string | null, statusCode: number): boolean
}
interface XmlHashFunc {
    (key: string, value: string): void
}
interface XmlHashRemoveFunc {
    (key: string, value: string): boolean
}
interface Extensible_ConstructProps extends GObject.Object_ConstructProps {
}

interface Extensible {

    // Owm methods of EDataServer-1.2.EDataServer.Extensible

    /**
     * Returns a list of #EExtension objects bound to `extensible` whose
     * types are ancestors of `extension_type`.  For a complete list of
     * extension objects bound to `extensible,` pass %E_TYPE_EXTENSION.
     * 
     * The list itself should be freed with g_list_free().  The extension
     * objects are owned by `extensible` and should not be unreferenced.
     * @param extensionType the type of extensions to list
     */
    listExtensions(extensionType: GObject.GType): Extension[]
    /**
     * Creates an instance of all instantiable subtypes of #EExtension which
     * target the class of `extensible`.  The lifetimes of these newly created
     * #EExtension objects are bound to `extensible` such that they are finalized
     * when `extensible` is finalized.
     */
    loadExtensions(): void

    // Class property signals of EDataServer-1.2.EDataServer.Extensible

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Extensible extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.Extensible

    static name: string
    static $gtype: GObject.GType<Extensible>

    // Constructors of EDataServer-1.2.EDataServer.Extensible

    constructor(config?: Extensible_ConstructProps) 
    _init(config?: Extensible_ConstructProps): void
}

interface OAuth2Service_ConstructProps extends GObject.Object_ConstructProps {
}

interface OAuth2Service {

    // Owm methods of EDataServer-1.2.EDataServer.OAuth2Service

    /**
     * Checks whether the `service` can be used with the given `source`.
     * 
     * The default implementation checks whether the `source` has an #ESourceAuthentication
     * extension and when its method matches e_oauth2_service_get_name(), then it automatically
     * returns %TRUE. Contrary, when the `source` contains GNOME Online Accounts or Ubuntu
     * Online Accounts extension, then it returns %FALSE.
     * 
     * The default implementation is tried always as the first and when it fails, then
     * the descendant's implementation is called.
     * @param source an #ESource
     */
    canProcess(source: Source): boolean
    /**
     * Deletes token information for the `service` and `source` from the secret store.
     * @param source an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    deleteTokenSync(source: Source, cancellable: Gio.Cancellable | null): boolean
    /**
     * Tries to extract an authorization code from a web page provided by the server.
     * The function can be called multiple times, whenever the page load is finished.
     * 
     * There can happen three states: 1) either the `service` cannot determine
     * the authentication code from the page information, then the %FALSE is
     * returned and the `out_authorization_code` is left untouched; or 2) the server
     * reported a failure, in which case the function returns %TRUE and lefts
     * the `out_authorization_code` untouched; or 3) the `service` could extract
     * the authentication code from the given arguments, then the function
     * returns %TRUE and sets the received authorization code to `out_authorization_code`.
     * 
     * The `page_content` is %NULL, unless flags returned by e_oauth2_service_get_flags()
     * contain also %E_OAUTH2_SERVICE_FLAG_EXTRACT_REQUIRES_PAGE_CONTENT.
     * 
     * This method is always called after e_oauth2_service_get_authentication_policy().
     * @param source an associated #ESource
     * @param pageTitle a web page title
     * @param pageUri a web page URI
     * @param pageContent a web page content
     */
    extractAuthorizationCode(source: Source, pageTitle: string, pageUri: string, pageContent: string | null): [ /* returnType */ boolean, /* outAuthorizationCode */ string ]
    /**
     * Reads access token information from the secret store for the `source` and
     * in case it's expired it refreshes the token, if possible.
     * 
     * Free the returned `out_access_token` with g_free(), when no longer needed.
     * @param source an #ESource
     * @param refSource an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getAccessTokenSync(source: Source, refSource: OAuth2ServiceRefSourceFunc, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    /**
     * Used to decide what to do when the server redirects to the next page.
     * The default implementation always returns %E_OAUTH2_SERVICE_NAVIGATION_POLICY_ALLOW.
     * 
     * This method is called before e_oauth2_service_extract_authorization_code() and
     * can be used to block certain resources or to abort the authentication when
     * the server redirects to an unexpected page (like when user denies authorization
     * in the page).
     * @param source an associated #ESource
     * @param uri a URI of the navigation resource
     */
    getAuthenticationPolicy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    getAuthenticationUri(source: Source): string
    getClientId(source: Source): string
    getClientSecret(source: Source): string | null
    /**
     * Returns a human readable name of the service. This is similar to
     * e_oauth2_service_get_name(), except this string should be localized,
     * because it will be used in user-visible strings.
     */
    getDisplayName(): string
    getFlags(): number
    /**
     * Returns a unique name of the service. It can be named for example
     * by the server or the company from which it receives the OAuth2
     * token and where it refreshes it, like "Company" for login.company.com.
     */
    getName(): string
    /**
     * Returns a value for the "redirect_uri" keys in the authenticate and get_token
     * operations. The default implementation returns "urn:ietf:wg:oauth:2.0:oob".
     * @param source an associated #ESource
     */
    getRedirectUri(source: Source): string | null
    getRefreshUri(source: Source): string
    /**
     * Checks whether the `service` can be used with the given `protocol` and/or `hostname`.
     * Any of `protocol` and `hostname` can be %NULL, but not both. It's up to each implementer
     * to decide, which of the arguments are important and whether all or only any of them
     * can be required.
     * 
     * The function is meant to check whether the `service` can be offered
     * for example when configuring a new account. The real usage is
     * determined by e_oauth2_service_can_process().
     * 
     * The default implementation consults org.gnome.evolution-data-server.oauth2-services-hint
     * GSettings key against given hostname. See its description for more information.
     * 
     * The default implementation is tried always as the first and when it fails, then
     * the descendant's implementation is called.
     * @param protocol a protocol to search the service for, like "imap", or %NULL
     * @param hostname a host name to search the service for, like "server.example.com", or %NULL
     */
    guessCanProcess(protocol: string | null, hostname: string | null): boolean
    /**
     * The `service` can change what arguments are passed in the authentication URI
     * in this method. The default implementation sets some values too, namely
     * "response_type", "client_id", "redirect_uri" and "login_hint", if available
     * in the `source`. These parameters are always provided, even when the interface
     * implementer overrides this method.
     * 
     * The `uri_query` hash table expects both key and value to be newly allocated
     * strings, which will be freed together with the hash table or when the key
     * is replaced.
     * @param source an associated #ESource
     * @param uriQuery query for the URI to use
     */
    prepareAuthenticationUriQuery(source: Source, uriQuery: GLib.HashTable): void
    /**
     * Sets additional form parameters to be used in the POST request when requesting
     * access token after successfully obtained authorization code.
     * The default implementation sets some values too, namely
     * "code", "client_id", "client_secret", "redirect_uri" and "grant_type".
     * These parameters are always provided, even when the interface implementer overrides this method.
     * 
     * The `form` hash table expects both key and value to be newly allocated
     * strings, which will be freed together with the hash table or when the key
     * is replaced.
     * @param source an associated #ESource
     * @param authorizationCode authorization code, as returned from e_oauth2_service_extract_authorization_code()
     * @param form form parameters to be used in the POST request
     */
    prepareGetTokenForm(source: Source, authorizationCode: string, form: GLib.HashTable): void
    /**
     * The `service` can change the `message` before it's sent to
     * the e_oauth2_service_get_authentication_uri(), with POST data
     * being provided by e_oauth2_service_prepare_get_token_form().
     * The default implementation does nothing with the `message`.
     * @param source an associated #ESource
     * @param message a #SoupMessage
     */
    prepareGetTokenMessage(source: Source, message: Soup.Message): void
    /**
     * Sets additional form parameters to be used in the POST request when requesting
     * to refresh an access token.
     * The default implementation sets some values too, namely
     * "refresh_token", "client_id", "client_secret" and "grant_type".
     * These parameters are always provided, even when the interface implementer overrides this method.
     * 
     * The `form` hash table expects both key and value to be newly allocated
     * strings, which will be freed together with the hash table or when the key
     * is replaced.
     * @param source an associated #ESource
     * @param refreshToken a refresh token to be used
     * @param form form parameters to be used in the POST request
     */
    prepareRefreshTokenForm(source: Source, refreshToken: string, form: GLib.HashTable): void
    /**
     * The `service` can change the `message` before it's sent to
     * the e_oauth2_service_get_refresh_uri(), with POST data
     * being provided by e_oauth2_service_prepare_refresh_token_form().
     * The default implementation does nothing with the `message`.
     * @param source an associated #ESource
     * @param message a #SoupMessage
     */
    prepareRefreshTokenMessage(source: Source, message: Soup.Message): void
    /**
     * Queries `service` at e_oauth2_service_get_refresh_uri() with a request to obtain
     * a new access token, associated with the given `authorization_code` and stores
     * it into the secret store on success.
     * @param source an #ESource
     * @param authorizationCode authorization code provided by the server
     * @param refSource an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    receiveAndStoreTokenSync(source: Source, authorizationCode: string, refSource: OAuth2ServiceRefSourceFunc, cancellable: Gio.Cancellable | null): boolean
    /**
     * Queries `service` at e_oauth2_service_get_refresh_uri() with a request to refresh
     * existing access token with provided `refresh_token` and stores it into the secret
     * store on success.
     * @param source an #ESource
     * @param refreshToken refresh token as provided by the server
     * @param refSource an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    refreshAndStoreTokenSync(source: Source, refreshToken: string, refSource: OAuth2ServiceRefSourceFunc, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of EDataServer-1.2.EDataServer.OAuth2Service

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
class OAuth2Service extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2Service

    static name: string
    static $gtype: GObject.GType<OAuth2Service>

    // Constructors of EDataServer-1.2.EDataServer.OAuth2Service

    constructor(config?: OAuth2Service_ConstructProps) 
    _init(config?: OAuth2Service_ConstructProps): void
    /**
     * Sets `value` for `name` to `form`. The `form` should be
     * the one used in e_oauth2_service_prepare_authentication_uri_query(),
     * e_oauth2_service_prepare_get_token_form() or
     * e_oauth2_service_prepare_refresh_token_form().
     * 
     * If the `value` is %NULL, then the property named `name` is removed
     * from the `form` instead.
     * @param form a #GHashTable
     * @param name a property name
     * @param value a property value
     */
    static utilSetToForm(form: GLib.HashTable, name: string, value: string | null): void
    /**
     * Takes ownership of `value` and sets it for `name` to `form`. The `value`
     * will be freed with g_free(), when no longer needed. The `form` should be
     * the one used in e_oauth2_service_prepare_authentication_uri_query(),
     * e_oauth2_service_prepare_get_token_form() or
     * e_oauth2_service_prepare_refresh_token_form().
     * 
     * If the `value` is %NULL, then the property named `name` is removed
     * from the `form` instead.
     * @param form a #GHashTable
     * @param name a property name
     * @param value a property value
     */
    static utilTakeToForm(form: GLib.HashTable, name: string, value: string | null): void
}

interface Client_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.Client

    /**
     * Whether this client's backing data is online.
     */
    online?: boolean | null
    /**
     * The #ESource for which this client was created.
     */
    source?: Source | null
}

/**
 * Signal callback interface for `backend-died`
 */
interface Client_BackendDiedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `backend-error`
 */
interface Client_BackendErrorSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `backend-property-changed`
 */
interface Client_BackendPropertyChangedSignalCallback {
    (object: string, p0: string): void
}

/**
 * Signal callback interface for `opened`
 */
interface Client_OpenedSignalCallback {
    (object: GLib.Error): void
}

interface Client {

    // Own properties of EDataServer-1.2.EDataServer.Client

    /**
     * The capabilities of this client
     */
    readonly capabilities: object
    /**
     * The main loop context in which notifications for
     * this client will be delivered.
     */
    readonly mainContext: GLib.MainContext
    /**
     * Whether this client's backing data is online.
     */
    online: boolean
    /**
     * Whether this client is open and ready to use.
     */
    readonly opened: boolean
    /**
     * Whether this client's backing data is readonly.
     */
    readonly readonly: boolean
    /**
     * The #ESource for which this client was created.
     */
    readonly source: Source

    // Owm methods of EDataServer-1.2.EDataServer.Client

    /**
     * Cancels all pending operations started on `client`.
     */
    cancelAll(): void
    /**
     * Check if backend supports particular capability.
     * To get all capabilities use e_client_get_capabilities().
     * @param capability a capability
     */
    checkCapability(capability: string): boolean
    /**
     * Checks whether a client supports explicit refreshing
     * (see e_client_refresh()).
     */
    checkRefreshSupported(): boolean
    /**
     * Returns a D-Bus bus name that will be used to connect the
     * client to the backend subprocess.
     */
    dupBusName(): string
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * The call is finished by e_client_get_backend_property_finish()
     * from the `callback`.
     * @param propName property name, whose value to retrieve; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getBackendProperty(propName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_get_backend_property().
     * @param result a #GAsyncResult
     */
    getBackendPropertyFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* propValue */ string ]
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * @param propName property name, whose value to retrieve; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     */
    getBackendPropertySync(propName: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* propValue */ string ]
    /**
     * Get list of strings with capabilities advertised by a backend.
     * This list, together with inner strings, is owned by the `client`.
     * To check for individual capabilities use e_client_check_capability().
     */
    getCapabilities(): string[]
    /**
     * Get the #ESource that this client has assigned.
     */
    getSource(): Source
    /**
     * Check if this `client` is connected.
     */
    isOnline(): boolean
    /**
     * Check if this `client` is fully opened. This includes
     * everything from e_client_open() call up to the authentication,
     * if required by a backend. Client cannot do any other operation
     * during the opening phase except of authenticate or cancel it.
     * Every other operation results in an %E_CLIENT_ERROR_BUSY error.
     */
    isOpened(): boolean
    /**
     * Check if this `client` is read-only.
     */
    isReadonly(): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * The call is finished by e_client_open_finish() from the `callback`.
     * @param onlyIfExists this parameter is not used anymore
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    open(onlyIfExists: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_open().
     * @param result a #GAsyncResult
     */
    openFinish(result: Gio.AsyncResult): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * @param onlyIfExists this parameter is not used anymore
     * @param cancellable a #GCancellable; can be %NULL
     */
    openSync(onlyIfExists: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the #GMainContext on which event sources for `client` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     */
    refMainContext(): GLib.MainContext
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * The call is finished by e_client_refresh_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_refresh().
     * @param result a #GAsyncResult
     */
    refreshFinish(result: Gio.AsyncResult): boolean
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * @param cancellable a #GCancellable; can be %NULL
     */
    refreshSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * The call is finished by e_client_remove_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_remove().
     * @param result a #GAsyncResult
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * @param cancellable a #GCancellable; can be %NULL
     */
    removeSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value.
     * The call is finished by e_client_retrieve_capabilities_finish()
     * from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    retrieveCapabilities(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_retrieve_capabilities().
     * Returned value of `capabilities` should be freed with g_free(),
     * when no longer needed.
     * @param result a #GAsyncResult
     */
    retrieveCapabilitiesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value. Returned value
     * of `capabilities` should be freed with g_free(), when no longer needed.
     * @param cancellable a #GCancellable; can be %NULL
     */
    retrieveCapabilitiesSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Asynchronously retrieves `client` properties to match server-side values,
     * without waiting for the D-Bus property change notifications delivery.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_client_retrieve_properties_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    retrieveProperties(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_client_retrieve_properties().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    retrievePropertiesFinish(result: Gio.AsyncResult): boolean
    /**
     * Retrieves `client` properties to match server-side values, without waiting
     * for the D-Bus property change notifications delivery.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    retrievePropertiesSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`. The call is finished
     * by e_client_set_backend_property_finish() from the `callback`.
     * @param propName property name, whose value to change; cannot be %NULL
     * @param propValue property value, to set; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    setBackendProperty(propName: string, propValue: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_set_backend_property().
     * @param result a #GAsyncResult
     */
    setBackendPropertyFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`.
     * @param propName property name, whose value to change; cannot be %NULL
     * @param propValue property value, to set; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     */
    setBackendPropertySync(propName: string, propValue: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets a D-Bus bus name that will be used to connect the client
     * to the backend subprocess.
     * @param busName a string representing a D-Bus bus name
     */
    setBusName(busName: string): void
    /**
     * Unwraps D-Bus error to local error. `dbus_error` is automatically freed.
     * `dbus_erorr` and `out_error` can point to the same variable.
     * @param dbusError a #GError returned bu D-Bus
     */
    unwrapDbusError(dbusError: GLib.Error): void
    /**
     * Asynchronously waits until the `client` is connected (according
     * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
     * 
     * The call is finished by e_client_wait_for_connected_finish() from
     * the `callback`.
     * @param timeoutSeconds a timeout for the wait, in seconds
     * @param cancellable a #GCancellable; or %NULL
     * @param callback callback to call when a result is ready
     */
    waitForConnected(timeoutSeconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_wait_for_connected().
     * @param result a #GAsyncResult
     */
    waitForConnectedFinish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously waits until the `client` is connected (according
     * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
     * 
     * Note: This also calls e_client_retrieve_properties_sync() on success, to have
     *   up-to-date property values on the client side, without a delay due
     *   to property change notifcations delivery through D-Bus.
     * @param timeoutSeconds a timeout for the wait, in seconds
     * @param cancellable a #GCancellable; or %NULL
     */
    waitForConnectedSync(timeoutSeconds: number, cancellable: Gio.Cancellable | null): boolean

    // Own signals of EDataServer-1.2.EDataServer.Client

    connect(sigName: "backend-died", callback: Client_BackendDiedSignalCallback): number
    on(sigName: "backend-died", callback: Client_BackendDiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-died", callback: Client_BackendDiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-died", callback: Client_BackendDiedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "backend-died", ...args: any[]): void
    connect(sigName: "backend-error", callback: Client_BackendErrorSignalCallback): number
    on(sigName: "backend-error", callback: Client_BackendErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-error", callback: Client_BackendErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-error", callback: Client_BackendErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "backend-error", ...args: any[]): void
    connect(sigName: "backend-property-changed", callback: Client_BackendPropertyChangedSignalCallback): number
    on(sigName: "backend-property-changed", callback: Client_BackendPropertyChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-property-changed", callback: Client_BackendPropertyChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-property-changed", callback: Client_BackendPropertyChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "backend-property-changed", p0: string, ...args: any[]): void
    connect(sigName: "opened", callback: Client_OpenedSignalCallback): number
    on(sigName: "opened", callback: Client_OpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: Client_OpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: Client_OpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "opened", ...args: any[]): void

    // Class property signals of EDataServer-1.2.EDataServer.Client

    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (...args: any[]) => void): number
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::opened", callback: (...args: any[]) => void): number
    on(sigName: "notify::opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opened", ...args: any[]): void
    connect(sigName: "notify::readonly", callback: (...args: any[]) => void): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::readonly", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class Client extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of EDataServer-1.2.EDataServer.Client

    constructor(config?: Client_ConstructProps) 
    _init(config?: Client_ConstructProps): void
    static errorCreate(code: ClientError, customMsg?: string | null): GLib.Error
    static errorQuark(): GLib.Quark
    /**
     * Get localized human readable description of the given error code.
     * @param code an #EClientError error code
     */
    static errorToString(code: ClientError): string
    /**
     * Copies a #GSList of #GObject<!-- -->s to the end of `copy_to`.
     * @param copyTo Where to copy; may be %NULL
     * @param objects #GSList of #GObject<!-- -->s to be copied
     */
    static utilCopyObjectSlist(copyTo: GObject.Object[] | null, objects: GObject.Object[]): GObject.Object[]
    /**
     * Copies the #GSList of strings to the end of `copy_to`.
     * @param copyTo Where to copy; may be %NULL
     * @param strings #GSList of strings to be copied
     */
    static utilCopyStringSlist(copyTo: string[] | null, strings: string[]): string[]
    /**
     * Calls g_object_unref() on each member of `objects` and then frees `objects`
     * itself.
     * @param objects a #GSList of #GObject<!-- -->s
     */
    static utilFreeObjectSlist(objects: GObject.Object[]): void
    /**
     * Frees memory previously allocated by e_client_util_strv_to_slist().
     * @param strings a #GSList of strings (gchar *)
     */
    static utilFreeStringSlist(strings: string[]): void
    /**
     * Parses comma-separated list of values into #GSList.
     * @param strings string of comma-separated values
     */
    static utilParseCommaStrings(strings: string): string[]
    /**
     * Convert a list of strings into a %NULL-terminated array of strings.
     * @param strings a #GSList of strings (const gchar *)
     */
    static utilSlistToStrv(strings: string[]): string[]
    /**
     * Convert a %NULL-terminated array of strings to a list of strings.
     * @param strv a %NULL-terminated array of strings (const gchar *)
     */
    static utilStrvToSlist(strv: string): string[]
    /**
     * The function takes a `dbus_error` and tries to find a match in `known_errors`
     * for it, if it is a G_IO_ERROR, G_IO_ERROR_DBUS_ERROR. If it is anything else
     * then the `dbus_error` is moved to `client_error`.
     * 
     * The `fail_when_none_matched` influences behaviour. If it's %TRUE, and none of
     * `known_errors` matches, or this is not a G_IO_ERROR_DBUS_ERROR, then %FALSE
     * is returned and the `client_error` is left without change. Otherwise, the
     * `fail_when_none_matched` is %FALSE, the error is always processed and will
     * result in E_CLIENT_ERROR, E_CLIENT_ERROR_OTHER_ERROR if none of `known_error`
     * matches.
     * @param dbusError DBus #GError to unwrap
     * @param knownErrors List of known errors against which try to match
     * @param knownErrorsCount How many items are stored in `known_errors`
     * @param knownErrorsDomain Error domain for `known_errors`
     * @param failWhenNoneMatched Whether to fail when none of `known_errors` matches
     */
    static utilUnwrapDbusError(dbusError: GLib.Error, knownErrors: ClientErrorsList, knownErrorsCount: number, knownErrorsDomain: GLib.Quark, failWhenNoneMatched: boolean): [ /* returnType */ boolean, /* clientError */ GLib.Error ]
}

interface Extension_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.Extension

    extensible?: Extensible | null
}

interface Extension {

    // Own properties of EDataServer-1.2.EDataServer.Extension

    readonly extensible: Extensible

    // Owm methods of EDataServer-1.2.EDataServer.Extension

    /**
     * Returns the object that `extension` extends.
     */
    getExtensible(): Extensible

    // Class property signals of EDataServer-1.2.EDataServer.Extension

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
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
class Extension extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.Extension

    static name: string
    static $gtype: GObject.GType<Extension>

    // Constructors of EDataServer-1.2.EDataServer.Extension

    constructor(config?: Extension_ConstructProps) 
    _init(config?: Extension_ConstructProps): void
}

interface GDataOAuth2Authorizer_ConstructProps extends GData.Authorizer_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.GDataOAuth2Authorizer

    serviceType?: GObject.GType | null
    source?: Source | null
}

interface GDataOAuth2Authorizer extends GData.Authorizer {

    // Own properties of EDataServer-1.2.EDataServer.GDataOAuth2Authorizer

    readonly serviceType: GObject.GType
    readonly source: Source

    // Own fields of EDataServer-1.2.EDataServer.GDataOAuth2Authorizer

    parent: GObject.Object
    priv: GDataOAuth2AuthorizerPrivate

    // Owm methods of EDataServer-1.2.EDataServer.GDataOAuth2Authorizer

    cloneCredentials(): NamedParameters | null
    getServiceType(): GObject.GType
    isExpired(): boolean
    refSource(): Source | null
    /**
     * Updates internally stored credentials, used to get access token.
     * 
     * See: e_gdata_oauth2_authorizer_supported()
     * @param credentials credentials to set, or %NULL
     */
    setCredentials(credentials: NamedParameters | null): void

    // Class property signals of EDataServer-1.2.EDataServer.GDataOAuth2Authorizer

    connect(sigName: "notify::service-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-type", ...args: any[]): void
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
}

class GDataOAuth2Authorizer extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.GDataOAuth2Authorizer

    static name: string
    static $gtype: GObject.GType<GDataOAuth2Authorizer>

    // Constructors of EDataServer-1.2.EDataServer.GDataOAuth2Authorizer

    constructor(config?: GDataOAuth2Authorizer_ConstructProps) 
    /**
     * Creates a new #EGDataOAuth2Authorizer for the given `source`
     * and `service_type`. The function always returns %NULL when
     * e_gdata_oauth2_authorizer_supported() returns %FALSE.
     * @constructor 
     * @param source an #ESource
     * @param serviceType a #GDataService type descendant
     */
    constructor(source: Source, serviceType: GObject.GType) 
    /**
     * Creates a new #EGDataOAuth2Authorizer for the given `source`
     * and `service_type`. The function always returns %NULL when
     * e_gdata_oauth2_authorizer_supported() returns %FALSE.
     * @constructor 
     * @param source an #ESource
     * @param serviceType a #GDataService type descendant
     */
    static new(source: Source, serviceType: GObject.GType): GDataOAuth2Authorizer
    _init(config?: GDataOAuth2Authorizer_ConstructProps): void
    static supported(): boolean
}

interface Module_ConstructProps extends GObject.TypePlugin_ConstructProps, GObject.TypeModule_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.Module

    /**
     * The filename of the module.
     */
    filename?: string | null
}

interface Module extends GObject.TypePlugin {

    // Own properties of EDataServer-1.2.EDataServer.Module

    /**
     * The filename of the module.
     */
    readonly filename: string

    // Owm methods of EDataServer-1.2.EDataServer.Module

    /**
     * Returns the filename of the shared library for `module`.  The
     * string is owned by `module` and should not be modified or freed.
     */
    getFilename(): string

    // Conflicting methods

    use(...args: any[]): any

    // Class property signals of EDataServer-1.2.EDataServer.Module

    connect(sigName: "notify::filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filename", ...args: any[]): void
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
class Module extends GObject.TypeModule {

    // Own properties of EDataServer-1.2.EDataServer.Module

    static name: string
    static $gtype: GObject.GType<Module>

    // Constructors of EDataServer-1.2.EDataServer.Module

    constructor(config?: Module_ConstructProps) 
    /**
     * Creates a new #EModule that will load the specific shared library
     * when in use.
     * @constructor 
     * @param filename filename of the shared library module
     */
    constructor(filename: string) 
    /**
     * Creates a new #EModule that will load the specific shared library
     * when in use.
     * @constructor 
     * @param filename filename of the shared library module
     */
    static new(filename: string): Module
    _init(config?: Module_ConstructProps): void
    /**
     * Loads all the modules in the specified directory into memory.  If
     * you want to unload them (enabling on-demand loading) you must call
     * g_type_module_unuse() on all the modules.  Free the returned list
     * with g_list_free().
     * @param dirname pathname for a directory containing modules to load
     */
    static loadAllInDirectory(dirname: string): Module[]
    /**
     * Loads all the modules in the specified directory into memory and the other
     * custom prefixes returned by e_util_get_directory_variants().  If
     * you want to unload them (enabling on-demand loading) you must call
     * g_type_module_unuse() on all the modules.  Free the returned list
     * with g_list_free().
     * 
     * When `dirprefix` is %NULL, or not a prefix of `dirname,` behaves
     * the same as e_module_load_all_in_directory().
     * @param dirname pathname for a directory containing modules to load
     * @param dirprefix prefix of `dirname,` which can be replaced by custom prefixes, or %NULL
     */
    static loadAllInDirectoryAndPrefixes(dirname: string, dirprefix: string | null): Module[]
    /**
     * Load the module from the specified filename into memory. If
     * you want to unload it (enabling on-demand loading) you must call
     * g_type_module_unuse() on the module.
     * @param filename filename of the module to load
     */
    static loadFile(filename: string): Module
}

interface NetworkMonitor_ConstructProps extends Gio.Initable_ConstructProps, Gio.NetworkMonitor_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.NetworkMonitor

    /**
     * The GIO name of the underlying #GNetworkMonitor to use.
     */
    gioName?: string | null
}

interface NetworkMonitor extends Gio.Initable, Gio.NetworkMonitor {

    // Own properties of EDataServer-1.2.EDataServer.NetworkMonitor

    /**
     * The GIO name of the underlying #GNetworkMonitor to use.
     */
    gioName: string

    // Owm methods of EDataServer-1.2.EDataServer.NetworkMonitor

    /**
     * Get currently set GIO name for the network availability checks.
     * See e_network_monitor_set_gio_name() for more details.
     */
    dupGioName(): string
    /**
     * Get a list of available GIO names for the #GNetworkMonitor implementations.
     * The strings can be used in e_network_monitor_set_gio_name().
     */
    listGioNames(): string[]
    /**
     * Set a `gio_name` of the #GNetworkMonitor implementation to use, can be %NULL.
     * Use e_network_monitor_list_gio_names() for a list of available
     * implementations. A special value, %E_NETWORK_MONITOR_ALWAYS_ONLINE_NAME, can
     * be used to report the network as always reachable. When an unknown GIO
     * name is used the default #GNetworkMonitor implementation, as returned
     * by the g_network_monitor_get_default(), will be used.
     * @param gioName a GIO name of a #GNetworkMonitor implementation to use, or %NULL
     */
    setGioName(gioName: string | null): void

    // Class property signals of EDataServer-1.2.EDataServer.NetworkMonitor

    connect(sigName: "notify::gio-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::gio-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gio-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gio-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gio-name", ...args: any[]): void
    connect(sigName: "notify::connectivity", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectivity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectivity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectivity", ...args: any[]): void
    connect(sigName: "notify::network-available", callback: (...args: any[]) => void): number
    on(sigName: "notify::network-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network-available", ...args: any[]): void
    connect(sigName: "notify::network-metered", callback: (...args: any[]) => void): number
    on(sigName: "notify::network-metered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network-metered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network-metered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network-metered", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using
 * the functions below. Implements #GNetworkMonitorInterface.
 * @class 
 */
class NetworkMonitor extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.NetworkMonitor

    static name: string
    static $gtype: GObject.GType<NetworkMonitor>

    // Constructors of EDataServer-1.2.EDataServer.NetworkMonitor

    constructor(config?: NetworkMonitor_ConstructProps) 
    _init(config?: NetworkMonitor_ConstructProps): void
    /**
     * Gets the default #ENetworkMonitor. The caller should not unref the returned instance.
     * The #ENetworkMonitor implements the #GNetworkMonitor iterface.
     */
    static getDefault(): Gio.NetworkMonitor
}

interface OAuth2ServiceBase_ConstructProps extends Extension_ConstructProps {
}

interface OAuth2ServiceBase {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceBase

    parent: Extension

    // Class property signals of EDataServer-1.2.EDataServer.OAuth2ServiceBase

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class OAuth2ServiceBase extends Extension {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceBase

    static name: string
    static $gtype: GObject.GType<OAuth2ServiceBase>

    // Constructors of EDataServer-1.2.EDataServer.OAuth2ServiceBase

    constructor(config?: OAuth2ServiceBase_ConstructProps) 
    _init(config?: OAuth2ServiceBase_ConstructProps): void
}

interface OAuth2ServiceGoogle_ConstructProps extends OAuth2Service_ConstructProps, OAuth2ServiceBase_ConstructProps {
}

interface OAuth2ServiceGoogle extends OAuth2Service {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceGoogle

    parent: OAuth2ServiceBase

    // Class property signals of EDataServer-1.2.EDataServer.OAuth2ServiceGoogle

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class OAuth2ServiceGoogle extends OAuth2ServiceBase {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceGoogle

    static name: string
    static $gtype: GObject.GType<OAuth2ServiceGoogle>

    // Constructors of EDataServer-1.2.EDataServer.OAuth2ServiceGoogle

    constructor(config?: OAuth2ServiceGoogle_ConstructProps) 
    _init(config?: OAuth2ServiceGoogle_ConstructProps): void
}

interface OAuth2ServiceOutlook_ConstructProps extends OAuth2Service_ConstructProps, OAuth2ServiceBase_ConstructProps {
}

interface OAuth2ServiceOutlook extends OAuth2Service {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceOutlook

    parent: OAuth2ServiceBase

    // Class property signals of EDataServer-1.2.EDataServer.OAuth2ServiceOutlook

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class OAuth2ServiceOutlook extends OAuth2ServiceBase {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceOutlook

    static name: string
    static $gtype: GObject.GType<OAuth2ServiceOutlook>

    // Constructors of EDataServer-1.2.EDataServer.OAuth2ServiceOutlook

    constructor(config?: OAuth2ServiceOutlook_ConstructProps) 
    _init(config?: OAuth2ServiceOutlook_ConstructProps): void
}

interface OAuth2ServiceYahoo_ConstructProps extends OAuth2Service_ConstructProps, OAuth2ServiceBase_ConstructProps {
}

interface OAuth2ServiceYahoo extends OAuth2Service {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceYahoo

    parent: OAuth2ServiceBase

    // Class property signals of EDataServer-1.2.EDataServer.OAuth2ServiceYahoo

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class OAuth2ServiceYahoo extends OAuth2ServiceBase {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceYahoo

    static name: string
    static $gtype: GObject.GType<OAuth2ServiceYahoo>

    // Constructors of EDataServer-1.2.EDataServer.OAuth2ServiceYahoo

    constructor(config?: OAuth2ServiceYahoo_ConstructProps) 
    _init(config?: OAuth2ServiceYahoo_ConstructProps): void
}

interface OAuth2Services_ConstructProps extends Extensible_ConstructProps, GObject.Object_ConstructProps {
}

interface OAuth2Services extends Extensible {

    // Owm methods of EDataServer-1.2.EDataServer.OAuth2Services

    /**
     * Adds the `service` to the list of known OAuth2 services into `services`.
     * It also adds a reference to `service`.
     * @param service an #EOAuth2Service to add
     */
    add(service: OAuth2Service): void
    /**
     * Searches the list of currently known OAuth2 services for the one which
     * can be used with the given `source`.
     * 
     * The returned #EOAuth2Service is referenced for thread safety, if found.
     * @param source an #ESource
     */
    find(source: Source): OAuth2Service | null
    /**
     * Searches the list of currently known OAuth2 services for the one which
     * can be used with the given `protocol` and/or `hostname`.
     * Any of `protocol` and `hostname` can be %NULL, but not both.
     * It's up to each #EOAuth2Service to decide, which of the arguments
     * are important and whether all or only any of them can be required.
     * 
     * The returned #EOAuth2Service is referenced for thread safety, if found.
     * @param protocol a protocol to search the service for, like "imap", or %NULL
     * @param hostname a host name to search the service for, like "server.example.com", or %NULL
     */
    guess(protocol: string | null, hostname: string | null): OAuth2Service | null
    isOauth2Alias(authMethod: string | null): boolean
    /**
     * Lists all currently known services, which had been added
     * with e_oauth2_services_add(). Free the returned #GSList with
     * g_slist_remove_full (known_services, g_object_unref);
     * when no longer needed.
     */
    list(): OAuth2Service[]
    /**
     * Removes the `service` from the list of known services in `services`.
     * The function does nothing, if the `service` had not been added.
     * @param service an #EOAuth2Service to remove
     */
    remove(service: OAuth2Service): void

    // Class property signals of EDataServer-1.2.EDataServer.OAuth2Services

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
class OAuth2Services extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2Services

    static name: string
    static $gtype: GObject.GType<OAuth2Services>

    // Constructors of EDataServer-1.2.EDataServer.OAuth2Services

    constructor(config?: OAuth2Services_ConstructProps) 
    /**
     * Creates a new #EOAuth2Services instance.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #EOAuth2Services instance.
     * @constructor 
     */
    static new(): OAuth2Services
    _init(config?: OAuth2Services_ConstructProps): void
    /**
     * This is the same as e_oauth2_services_is_oauth2_alias(), except
     * it creates its own #EOAuth2Services instance and frees it at the end.
     * The #EOAuth2Services is implemented as a singleton, thus it won't be
     * much trouble, as long as there is something else having created one
     * instance.
     * @param authMethod an authentication method, or %NULL
     */
    static isOauth2AliasStatic(authMethod: string | null): boolean
    static isSupported(): boolean
}

interface SoupAuthBearer_ConstructProps extends Soup.Auth_ConstructProps {
}

interface SoupAuthBearer {

    // Owm methods of EDataServer-1.2.EDataServer.SoupAuthBearer

    isExpired(): boolean
    /**
     * This function is analogous to soup_auth_authenticate() for "Basic" HTTP
     * authentication, except it takes an OAuth 2.0 access token instead of a
     * username and password.
     * 
     * If `expires_in_seconds` is greater than zero, soup_auth_is_authenticated()
     * will return %FALSE after the given number of seconds have elapsed.
     * @param accessToken an OAuth 2.0 access token
     * @param expiresInSeconds expiry for `access_token,` or 0 if unknown
     */
    setAccessToken(accessToken: string, expiresInSeconds: number): void

    // Class property signals of EDataServer-1.2.EDataServer.SoupAuthBearer

    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-authenticated", ...args: any[]): void
    connect(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-for-proxy", ...args: any[]): void
    connect(sigName: "notify::scheme-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::scheme-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scheme-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scheme-name", ...args: any[]): void
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
class SoupAuthBearer extends Soup.Auth {

    // Own properties of EDataServer-1.2.EDataServer.SoupAuthBearer

    static name: string
    static $gtype: GObject.GType<SoupAuthBearer>

    // Constructors of EDataServer-1.2.EDataServer.SoupAuthBearer

    constructor(config?: SoupAuthBearer_ConstructProps) 
    _init(config?: SoupAuthBearer_ConstructProps): void
}

interface SoupSession_ConstructProps extends Soup.Session_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SoupSession

    /**
     * The #ENamedParameters containing login credentials.
     */
    credentials?: NamedParameters | null
    /**
     * The #ESource being used for this soup session.
     */
    source?: Source | null
}

interface SoupSession {

    // Own properties of EDataServer-1.2.EDataServer.SoupSession

    /**
     * The #ENamedParameters containing login credentials.
     */
    credentials: NamedParameters
    /**
     * The #ESource being used for this soup session.
     */
    readonly source: Source

    // Owm methods of EDataServer-1.2.EDataServer.SoupSession

    /**
     * Checks result of the `request` and sets the `error` if it failed.
     * When it failed and the `read_bytes` is provided, then these are
     * set to `request'`s message response_body, thus it can be used
     * later.
     * @param request a #SoupRequestHTTP
     * @param readBytes optional bytes which had been read from the stream, or %NULL
     * @param bytesLength how many bytes had been read; ignored when `read_bytes` is %NULL
     */
    checkResult(request: Soup.RequestHTTP, readBytes: object | null, bytesLength: number): boolean
    dupCredentials(): NamedParameters | null
    getAuthenticationRequiresCredentials(): boolean
    getLogLevel(): Soup.LoggerLogLevel
    getSource(): Source
    /**
     * Populates `out_certificate_pem` and `out_certificate_errors` with the last values
     * returned on #SOUP_STATUS_SSL_FAILED error.
     */
    getSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    /**
     * Creates a new #SoupRequestHTTP, similar to soup_session_request_http(),
     * but also presets request headers with "User-Agent" to be "Evolution/version"
     * and with "Connection" to be "close".
     * 
     * See also e_soup_session_new_request_uri().
     * @param method an HTTP method
     * @param uriString a URI string to use for the request
     */
    newRequest(method: string, uriString?: string): Soup.RequestHTTP
    /**
     * Creates a new #SoupRequestHTTP, similar to soup_session_request_http_uri(),
     * but also presets request headers with "User-Agent" to be "Evolution/version"
     * and with "Connection" to be "close".
     * 
     * See also e_soup_session_new_request().
     * @param method an HTTP method
     * @param uri a #SoupURI to use for the request
     */
    newRequestUri(method: string, uri: Soup.URI): Soup.RequestHTTP
    /**
     * Similar to e_soup_session_send_request_sync(), except it reads
     * whole response content into memory and returns it as a #GByteArray.
     * Use e_soup_session_send_request_sync() when you want to have
     * more control on the content read.
     * 
     * The function prints read content to stdout when
     * e_soup_session_get_log_level() returns #SOUP_LOGGER_LOG_BODY.
     * @param request a #SoupRequestHTTP to send
     * @param cancellable optional #GCancellable object, or %NULL
     */
    sendRequestSimpleSync(request: Soup.RequestHTTP, cancellable: Gio.Cancellable | null): Uint8Array
    /**
     * Synchronously sends prepared request and returns #GInputStream
     * that can be used to read its contents.
     * 
     * This calls soup_request_send() internally, but it also setups
     * the request according to #ESoupSession:source authentication
     * settings. It also extracts information about used certificate,
     * in case of SOUP_STATUS_SSL_FAILED error and keeps it for later use
     * by e_soup_session_get_ssl_error_details().
     * 
     * Use e_soup_session_send_request_simple_sync() to read whole
     * content into a #GByteArray.
     * 
     * Note that SoupSession doesn't log content read from GInputStream,
     * thus the caller may print the read content on its own when needed.
     * 
     * Note the `request` is fully filled only after there is anything
     * read from the resulting #GInputStream, thus use
     * e_soup_session_check_result() to verify that the receive had
     * been finished properly.
     * @param request a #SoupRequestHTTP to send
     * @param cancellable optional #GCancellable object, or %NULL
     */
    sendRequestSync(request: Soup.RequestHTTP, cancellable: Gio.Cancellable | null): Gio.InputStream
    /**
     * Sets credentials to use for connection. Using %NULL for `credentials`
     * unsets previous value.
     * @param credentials an #ENamedParameters with credentials to use, or %NULL
     */
    setCredentials(credentials: NamedParameters | null): void
    /**
     * Setups logging for the `session`. The `logging_level` can be one of:
     * "all" - log whole raw communication;
     * "body" - the same as "all";
     * "headers" - log the headers only;
     * "min" - minimal logging;
     * "1" - the same as "all".
     * Any other value, including %NULL, disables logging.
     * 
     * Use e_soup_session_get_log_level() to get current log level.
     * @param loggingLevel logging level to setup, or %NULL
     */
    setupLogging(loggingLevel: string | null): void

    // Class property signals of EDataServer-1.2.EDataServer.SoupSession

    connect(sigName: "notify::credentials", callback: (...args: any[]) => void): number
    on(sigName: "notify::credentials", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::credentials", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::credentials", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::accept-language", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-language", ...args: any[]): void
    connect(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-language-auto", ...args: any[]): void
    connect(sigName: "notify::async-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-context", ...args: any[]): void
    connect(sigName: "notify::http-aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-aliases", ...args: any[]): void
    connect(sigName: "notify::https-aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::https-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::https-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::https-aliases", ...args: any[]): void
    connect(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle-timeout", ...args: any[]): void
    connect(sigName: "notify::local-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-address", ...args: any[]): void
    connect(sigName: "notify::max-conns", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-conns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-conns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-conns", ...args: any[]): void
    connect(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-conns-per-host", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-uri", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-use-system-ca-file", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::tls-database", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-database", ...args: any[]): void
    connect(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-interaction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-interaction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-interaction", ...args: any[]): void
    connect(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-ntlm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-ntlm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-ntlm", ...args: any[]): void
    connect(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-thread-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-thread-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-thread-context", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
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
class SoupSession extends Soup.Session {

    // Own properties of EDataServer-1.2.EDataServer.SoupSession

    static name: string
    static $gtype: GObject.GType<SoupSession>

    // Constructors of EDataServer-1.2.EDataServer.SoupSession

    constructor(config?: SoupSession_ConstructProps) 
    /**
     * Creates a new #ESoupSession associated with given `source`.
     * The `source` can be used to store and read SSL trust settings, but only if
     * it already contains an #ESourceWebdav extension. Otherwise the SSL trust
     * settings are ignored.
     * @constructor 
     * @param source an #ESource
     */
    constructor(source: Source) 
    /**
     * Creates a new #ESoupSession associated with given `source`.
     * The `source` can be used to store and read SSL trust settings, but only if
     * it already contains an #ESourceWebdav extension. Otherwise the SSL trust
     * settings are ignored.
     * @constructor 
     * @param source an #ESource
     */
    static new(source: Source): SoupSession

    // Overloads of new

    /**
     * Creates a #SoupSession with the default options.
     * @constructor 
     */
    static new(): Soup.Session
    _init(config?: SoupSession_ConstructProps): void
    /**
     * Normalizes the path of the `suri,` aka encodes characters, which should
     * be encoded, if needed. Returns, whether any change had been made to the path.
     * It doesn't touch other parts of the `suri`.
     * @param suri a #SoupURI to normalize the path for
     */
    static utilNormalizeUriPath(suri: Soup.URI): boolean
    /**
     * Returns the `reason_phrase,` if it's non-%NULL and non-empty, a static string
     * corresponding to `status_code`. In case neither that can be found a localized
     * "Unknown error" message is returned.
     * @param statusCode an HTTP status code
     * @param reasonPhrase preferred string to use for the message, or %NULL
     */
    static utilStatusToString(statusCode: number, reasonPhrase: string | null): string
}

interface Source_ConstructProps extends Gio.Initable_ConstructProps, Gio.ProxyResolver_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.Source

    displayName?: string | null
    enabled?: boolean | null
    mainContext?: GLib.MainContext | null
    parent?: string | null
    uid?: string | null
}

/**
 * Signal callback interface for `authenticate`
 */
interface Source_AuthenticateSignalCallback {
    (credentials: NamedParameters): void
}

/**
 * Signal callback interface for `changed`
 */
interface Source_ChangedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `credentials-required`
 */
interface Source_CredentialsRequiredSignalCallback {
    (reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error): void
}

interface Source extends Gio.Initable, Gio.ProxyResolver {

    // Own properties of EDataServer-1.2.EDataServer.Source

    readonly connectionStatus: SourceConnectionStatus
    displayName: string
    enabled: boolean
    readonly mainContext: GLib.MainContext
    parent: string
    readonly remoteCreatable: boolean
    readonly remoteDeletable: boolean
    readonly removable: boolean
    readonly uid: string
    readonly writable: boolean

    // Owm methods of EDataServer-1.2.EDataServer.Source

    /**
     * This function essentially glues together `source` and `serivce` so their
     * configuration settings stay synchronized.  The glue itself is a shared
     * #CamelSettings instance.
     * 
     * Call this function immediately after creating a new #CamelService with
     * camel_session_add_service().
     * @param service a #CamelService
     */
    camelConfigureService(service: Camel.Service): void
    /**
     * Emits the #ESource::changed signal from an idle callback in
     * `source'`s #ESource:main-context.
     * 
     * This function is primarily intended for use by #ESourceExtension
     * when emitting a #GObject::notify signal on one of its properties.
     */
    changed(): void
    /**
     * Compares two #ESource instances by their display names.  Useful for
     * ordering sources in a user interface.
     * @param source2 the second #ESource
     */
    compareByDisplayName(source2: Source): number
    /**
     * Asynchronously deletes the password for `source` from either the default
     * keyring or session keyring.  This operation does not rely on the registry
     * service and therefore works for any #ESource -- registered or "scratch".
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_delete_password_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    deletePassword(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_delete_password().
     * 
     * Note the boolean return value indicates whether the delete operation
     * itself completed successfully, not whether a password was found and
     * deleted.  If no password was found, the function will still return
     * %TRUE.  If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    deletePasswordFinish(result: Gio.AsyncResult): boolean
    /**
     * Deletes the password for `source` from either the default keyring or
     * session keyring.  This operation does not rely on the registry service
     * and therefore works for any #ESource -- registered or "scratch".
     * 
     * Note the boolean return value indicates whether the delete operation
     * itself completed successfully, not whether a password was found and
     * deleted.  If no password was found, the function will still return
     * %TRUE.  If an error occurs, the function sets `error` and returns %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    deletePasswordSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Thread-safe variation of e_source_get_display_name().
     * Use this function when accessing `source` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupDisplayName(): string
    /**
     * Thread-safe variation of e_source_get_parent().
     * Use this function when accessing `source` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupParent(): string | null
    /**
     * Creates a label string based on `source'`s #ESource:display-name for use
     * with #SecretItem.
     */
    dupSecretLabel(): string
    /**
     * Thread-safe variation of e_source_get_uid().
     * Use this function when accessing `source` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupUid(): string
    /**
     * Emits localy (in this process only) the ESource::credentials-required
     * signal with given parameters. That's the difference with e_source_invoke_credentials_required(),
     * which calls the signal globally, within each client.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     */
    emitCredentialsRequired(reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error | null): void
    /**
     * Checks two #ESource instances for equality.  #ESource instances are
     * equal if their unique identifier strings are equal.
     * @param source2 the second #ESource
     */
    equal(source2: Source): boolean
    /**
     * Obtain current connection status of the `source`.
     */
    getConnectionStatus(): SourceConnectionStatus
    /**
     * Returns the display name for `source`.  Use the display name to
     * represent the #ESource in a user interface.
     */
    getDisplayName(): string
    /**
     * Returns %TRUE if `source` is enabled.
     * 
     * An application should try to honor this setting if at all possible,
     * even if it does not provide a way to change the setting through its
     * user interface.  Disabled data sources should generally be hidden.
     * 
     * <note><para>
     *   This function does not take into account `source'`s ancestors in the
     *   #ESource hierarchy, each of which have their own enabled state.  If
     *   any of `source'`s ancestors are disabled, then `source` itself should
     *   be treated as disabled.  Use e_source_registry_check_enabled() to
     *   easily check for this.
     * </para></note>
     */
    getEnabled(): boolean
    /**
     * Returns an instance of some #ESourceExtension subclass which registered
     * itself under `extension_name`.  If no such instance exists within `source,`
     * one will be created.  It is the caller's responsibility to know which
     * subclass is being returned.
     * 
     * If you just want to test for the existence of an extension within `source`
     * without creating it, use e_source_has_extension().
     * 
     * Extension instances are owned by their #ESource and should not be
     * referenced directly.  Instead, reference the #ESource instance and
     * use this function to fetch the extension instance as needed.
     * @param extensionName an extension name
     */
    getExtension(extensionName: string): SourceExtension
    /**
     * Asynchronously calls the GetLastCredentialsRequiredArguments method
     * on the server side, to get the last values used for the 'credentials-required'
     * signal. See e_source_get_last_credentials_required_arguments_sync() for
     * more information.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_source_get_last_credentials_required_arguments_finish() to get
     * the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getLastCredentialsRequiredArguments(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_get_last_credentials_required_arguments().
     * See e_source_get_last_credentials_required_arguments_sync() for more information
     * about the output arguments.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    getLastCredentialsRequiredArgumentsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outReason */ SourceCredentialsReason, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outOpError */ GLib.Error ]
    /**
     * Retrieves the last used arguments of the 'credentials-required' signal emission.
     * If there was none emitted yet, or a corresponding 'authenitcate' had been emitted
     * already, then the `out_reason` is set to #E_SOURCE_CREDENTIALS_REASON_UNKNOWN
     * and the value of other 'out' arguments is set to no values.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE. The result gchar
     * values should be freed with g_free() when no longer needed.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getLastCredentialsRequiredArgumentsSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outReason */ SourceCredentialsReason, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outOpError */ GLib.Error ]
    /**
     * Asynchronously obtains the OAuth 2.0 access token for `source` along
     * with its expiry in seconds from the current time (or 0 if unknown).
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_get_oauth2_access_token_finish() to get the result of the
     * operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request            is satisfied
     */
    getOauth2AccessToken(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_get_oauth2_access_token().
     * 
     * Free the returned access token with g_free() when finished with it.
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    getOauth2AccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    /**
     * Obtains the OAuth 2.0 access token for `source` along with its expiry
     * in seconds from the current time (or 0 if unknown).
     * 
     * Free the returned access token with g_free() when finished with it.
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getOauth2AccessTokenSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    /**
     * Returns the unique identifier string of the parent #ESource.
     */
    getParent(): string | null
    /**
     * Returns whether new resources can be created on a remote server by
     * calling e_source_remote_create() on `source`.
     * 
     * Generally this is only %TRUE if `source` has an #ESourceCollection
     * extension, which means there is an #ECollectionBackend in the D-Bus
     * service that can handle create requests.  If `source` does not have
     * this capability, calls to e_source_remote_create() will fail.
     */
    getRemoteCreatable(): boolean
    /**
     * Returns whether the resource represented by `source` can be deleted
     * from a remote server by calling e_source_remote_delete().
     * 
     * Generally this is only %TRUE if `source` is a child of an #ESource
     * which has an #ESourceCollection extension, which means there is an
     * #ECollectionBackend in the D-Bus service that can handle delete
     * requests.  If `source` does not have this capability, calls to
     * e_source_remote_delete() will fail.
     */
    getRemoteDeletable(): boolean
    /**
     * Returns whether the D-Bus service will allow `source` to be removed.
     * If `source` is not writable, calls to e_source_remove() will fail.
     */
    getRemovable(): boolean
    /**
     * Returns the unique identifier string for `source`.
     */
    getUid(): string
    /**
     * Returns whether the D-Bus service will accept changes to `source`.
     * If `source` is not writable, calls to e_source_write() will fail.
     */
    getWritable(): boolean
    /**
     * Checks whether `source` has an #ESourceExtension with the given name.
     * @param extensionName an extension name
     */
    hasExtension(extensionName: string): boolean
    /**
     * Generates a hash value for `source`.  This function is intended for
     * easily hashing an #ESource to add to a #GHashTable or similar data
     * structure.
     */
    hash(): number
    /**
     * Asynchronously calls the InvokeAuthenticate method on the server side,
     * thus the backend knows what credentials to use to connect to its (possibly
     * remote) data store.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_source_invoke_authenticate_finish() to get the result of the operation.
     * @param credentials an #ENamedParameters structure with credentials to use; can be %NULL    to use those from the last call
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    invokeAuthenticate(credentials: NamedParameters | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_invoke_authenticate().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    invokeAuthenticateFinish(result: Gio.AsyncResult): boolean
    /**
     * Calls the InvokeAuthenticate method on the server side, thus the backend
     * knows what credentials to use to connect to its (possibly remote) data store.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param credentials an #ENamedParameters structure with credentials to use; can be %NULL    to use those from the last call
     * @param cancellable optional #GCancellable object, or %NULL
     */
    invokeAuthenticateSync(credentials: NamedParameters | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously calls the InvokeCredentialsRequired method on the server side,
     * to inform clients that credentials are required.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_source_invoke_credentials_required_finish() to get the result of the operation.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    invokeCredentialsRequired(reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_invoke_credentials_required().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    invokeCredentialsRequiredFinish(result: Gio.AsyncResult): boolean
    /**
     * Let's the client-side know that credentials are required. The `reason` defines which
     * parameters are used. The client passed the credentials with an e_source_invoke_authenticate()
     * call.
     * 
     * The %E_SOURCE_CREDENTIALS_REASON_REQUIRED is used for the first credentials prompt,
     * when the client can return credentials as stored from the previous success login.
     * 
     * The %E_SOURCE_CREDENTIALS_REASON_REJECTED is used when the previously used credentials
     * had been rejected by the server. That usually means that the user should be asked
     * to provide/correct the credentials.
     * 
     * The %E_SOURCE_CREDENTIALS_REASON_SSL_FAILED is used when a secured connection failed
     * due to some server-side certificate issues.
     * 
     * The %E_SOURCE_CREDENTIALS_REASON_ERROR is used when the server returned an error.
     * It is not possible to connect to it at the moment usually.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    invokeCredentialsRequiredSync(reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously looks up a password for `source`.  Both the default and
     * session keyrings are queried.  This operation does not rely on the
     * registry service and therefore works for any #ESource -- registered
     * or "scratch".
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_lookup_password_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    lookupPassword(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_lookup_password().
     * 
     * Note the boolean return value indicates whether the lookup operation
     * itself completed successfully, not whether a password was found.  If
     * no password was found, the function will set `out_password` to %NULL
     * but still return %TRUE.  If an error occurs, the function sets `error`
     * and returns %FALSE.
     * @param result a #GAsyncResult
     */
    lookupPasswordFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outPassword */ string | null ]
    /**
     * Looks up a password for `source`.  Both the default and session keyrings
     * are queried.  This operation does not rely on the registry service and
     * therefore works for any #ESource -- registered or "scratch".
     * 
     * Note the boolean return value indicates whether the lookup operation
     * itself completed successfully, not whether a password was found.  If
     * no password was found, the function will set `out_password` to %NULL
     * but still return %TRUE.  If an error occurs, the function sets `error`
     * and returns %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    lookupPasswordSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPassword */ string | null ]
    /**
     * Asynchronously loads a signature from the signature file for `source,`
     * which is given by e_source_mail_signature_get_file().
     * 
     * If the signature file is executable, it will be executed and its output
     * captured as the email signature content.  If the signature file is not
     * executable, the email signature content is read directly from the file.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_source_mail_signature_load_finish() to get the result of
     * the operation.
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    mailSignatureLoad(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with e_source_mail_signature_load().  The
     * signature file contents are placed in `contents,` and `length` is set to
     * the size of the `contents` string.  The `contents` string should be freed
     * with g_free() when no longer needed.
     * @param result a #GAsyncResult
     */
    mailSignatureLoadFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ string, /* length */ number ]
    /**
     * Loads a signature from the signature file for `source,` which is
     * given by e_source_mail_signature_get_file().  The signature contents
     * are placed in `contents,` and `length` is set to the size of the `contents`
     * string.  The `contents` string should be freed with g_free() when no
     * longer needed.
     * 
     * If the signature file is executable, it will be executed and its output
     * captured as the email signature content.  If the signature file is not
     * executable, the email signature content is read directly from the file.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    mailSignatureLoadSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* contents */ string, /* length */ number ]
    /**
     * Asynchrously replaces the signature file for `source` with the given
     * `contents` of `length` bytes.  The signature file for `source` is given
     * by e_source_mail_signature_get_file().
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_source_mail_signature_replace_finish() to get the result
     * of the operation.
     * @param contents the signature contents
     * @param length the length of `contents` in bytes
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    mailSignatureReplace(contents: string, length: number, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with e_source_mail_signature_replace().
     * @param result a #GAsyncResult
     */
    mailSignatureReplaceFinish(result: Gio.AsyncResult): boolean
    /**
     * Replaces the signature file for `source` with the given `contents`
     * of `length` bytes.  The signature file for `source` is given by
     * e_source_mail_signature_get_file().
     * @param contents the signature contents
     * @param length the length of `contents` in bytes
     * @param cancellable optional #GCancellable object, or %NULL
     */
    mailSignatureReplaceSync(contents: string, length: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously replaces the signature file for `source` with a symbolic
     * link to `symlink_target,` which should be an executable file that prints
     * a mail signature to standard output.  The signature file for `source`
     * is given by e_source_mail_signature_get_file().
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_source_mail_signature_symlink_finish() to get the result
     * of the operation.
     * @param symlinkTarget executable filename to link to
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    mailSignatureSymlink(symlinkTarget: string, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with e_source_mail_signature_symlink().
     * @param result a #GAsyncResult
     */
    mailSignatureSymlinkFinish(result: Gio.AsyncResult): boolean
    /**
     * Replaces the signature file for `source` with a symbolic link to
     * `symlink_target,` which should be an executable file that prints
     * a mail signature to standard output.  The signature file for
     * `source` is given by e_source_mail_signature_get_file().
     * @param symlinkTarget executable filename to link to
     * @param cancellable optional #GCancellable object, or %NULL
     */
    mailSignatureSymlinkSync(symlinkTarget: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously determines what proxy, if any, to use to connect to `uri`.
     * See e_source_proxy_lookup_sync() for more details.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_proxy_lookup_finish() to get the result of the operation.
     * @param uri a URI representing the destination to connect to
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    proxyLookup(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_proxy_lookup().
     * 
     * Free the returned proxy URIs with g_strfreev() when finished with them.
     * @param result a #GAsyncResult
     */
    proxyLookupFinish(result: Gio.AsyncResult): string[] | null
    /**
     * Looks into `source'`s #ESourceProxy extension to determine what proxy,
     * if any, to use to connect to `uri`.  The returned proxy URIs are of the
     * same form described by g_proxy_resolver_lookup().
     * 
     * The proxy extension's #ESourceProxy:method controls how proxy URIs are
     * determined:
     * 
     * When using `E_PROXY_METHOD_DEFAULT,` the function will defer to the
     * #GProxyResolver returned by g_proxy_resolver_get_default().
     * 
     * When using `E_PROXY_METHOD_MANUAL,` the function will configure a
     * #GSimpleProxyResolver from the HTTP, HTTPS, FTP and SOCKS properties,
     * as well as #ESourceProxy:ignore-hosts.
     * 
     * When using `E_PROXY_METHOD_AUTO,` the function will execute a proxy
     * auto-config (PAC) file at #ESourceProxy:autoconfig-url.
     * 
     * When using `E_PROXY_METHOD_NONE,` the function will only return
     * <literal>direct://</literal>.
     * 
     * If `source` does not have an #ESourceProxy extension, the function sets
     * `error` to `G_IO_ERROR_NOT_SUPPORTED` and returns %NULL.
     * 
     * Free the returned proxy URIs with g_strfreev() when finished with them.
     * @param uri a URI representing the destination to connect to
     * @param cancellable optional #GCancellable object, or %NULL
     */
    proxyLookupSync(uri: string, cancellable: Gio.Cancellable | null): string[] | null
    /**
     * Returns the #GDBusObject that was passed to e_source_new().
     * 
     * The returned #GDBusObject is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refDbusObject(): Gio.DBusObject | null
    /**
     * Returns the #GMainContext on which event sources for `source` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     */
    refMainContext(): GLib.MainContext
    /**
     * This is a simple way to schedule a periodic data source refresh.
     * 
     * Adds a timeout #GSource to `context` and handles all the bookkeeping
     * if `source'`s refresh #ESourceRefresh:enabled state or its refresh
     * #ESourceRefresh:interval-minutes value changes.  The `callback` is
     * expected to dispatch an asynchronous job to connect to and fetch
     * updates from a remote server.
     * 
     * The returned ID can be passed to e_source_refresh_remove_timeout() to
     * remove the timeout from `context`.  Note the ID is a private handle and
     * cannot be passed to g_source_remove().
     * @param context a #GMainContext, or %NULL (if %NULL, the default           context will be used)
     * @param callback function to call on each timeout
     */
    refreshAddTimeout(context: GLib.MainContext | null, callback: SourceRefreshFunc): number
    /**
     * For all timeouts added with e_source_refresh_add_timeout(), invokes
     * the #ESourceRefreshFunc callback immediately and then, if the refresh
     * #ESourceRefresh:enabled state is TRUE, reschedules the timeout.
     * 
     * This function is called automatically when the #ESource switches from
     * disabled to enabled, but can also be useful when a network connection
     * becomes available or when waking up from hibernation or suspend.
     */
    refreshForceTimeout(): void
    /**
     * Removes a timeout #GSource added by e_source_refresh_add_timeout().
     * @param refreshTimeoutId a refresh timeout ID
     */
    refreshRemoveTimeout(refreshTimeoutId: number): boolean
    /**
     * Removes all timeout #GSource's added by e_source_refresh_add_timeout()
     * whose callback data pointer matches `user_data`.
     * @param userData user data to match against timeout callbacks
     */
    refreshRemoveTimeoutsByData(userData: object | null): number
    /**
     * Asynchronously creates a new remote resource by picking out relevant
     * details from `scratch_source`.  The `scratch_source` must be an #ESource
     * with no #GDBusObject.  The `source` must be #ESource:remote-creatable.
     * 
     * The details required to create the resource vary by #ECollectionBackend,
     * but in most cases the `scratch_source` need only define the resource type
     * (address book, calendar, etc.), a display name for the resource, and
     * possibly a server-side path or ID for the resource.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_remote_create_finish() to get the result of the operation.
     * @param scratchSource an #ESource describing the resource to create
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remoteCreate(scratchSource: Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_remote_create().  If
     * an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    remoteCreateFinish(result: Gio.AsyncResult): boolean
    /**
     * Creates a new remote resource by picking out relevant details from
     * `scratch_source`.  The `scratch_source` must be an #ESource with no
     * #GDBusObject.  The `source` must be #ESource:remote-creatable.
     * 
     * The details required to create the resource vary by #ECollectionBackend,
     * but in most cases the `scratch_source` need only define the resource type
     * (address book, calendar, etc.), a display name for the resource, and
     * possibly a server-side path or ID for the resource.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param scratchSource an #ESource describing the resource to create
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remoteCreateSync(scratchSource: Source, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously deletes the resource represented by `source` from a remote
     * server.  The `source` must be #ESource:remote-deletable.  This will also
     * delete the key file for `source` and broadcast its removal to all clients,
     * similar to e_source_remove().
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_remote_delete_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remoteDelete(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_remote_delete().  If
     * an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    remoteDeleteFinish(result: Gio.AsyncResult): boolean
    /**
     * Deletes the resource represented by `source` from a remote server.
     * The `source` must be #ESource:remote-deletable.  This will also delete
     * the key file for `source` and broadcast its removal to all clients,
     * similar to e_source_remove_sync().
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remoteDeleteSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously requests the D-Bus service to delete the key files for
     * `source` and all of its descendants and broadcast their removal to all
     * clients.  The `source` must be #ESource:removable.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_remove_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_remove().  If an
     * error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests the D-Bus service to delete the key files for `source` and all of
     * its descendants and broadcast their removal to all clients.  The `source`
     * must be #ESource:removable.
     * 
     * If an error occurs, the functon will set `error` and return %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    removeSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Set's current connection status of the `source`.
     * @param connectionStatus one of the #ESourceConnectionStatus
     */
    setConnectionStatus(connectionStatus: SourceConnectionStatus): void
    /**
     * Sets the display name for `source`.  The `display_name` argument must be a
     * valid UTF-8 string.  Use the display name to represent the #ESource in a
     * user interface.
     * 
     * The internal copy of `display_name` is automatically stripped of leading
     * and trailing whitespace.
     * @param displayName a display name
     */
    setDisplayName(displayName: string): void
    /**
     * Enables or disables `source`.
     * 
     * An application should try to honor this setting if at all possible,
     * even if it does not provide a way to change the setting through its
     * user interface.  Disabled data sources should generally be hidden.
     * @param enabled whether to enable `source`
     */
    setEnabled(enabled: boolean): void
    /**
     * Identifies the parent of `source` by its unique identifier string.
     * This can only be set prior to adding `source` to an #ESourceRegistry.
     * 
     * The internal copy of #ESource:parent is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param parent the UID of the parent #ESource, or %NULL
     */
    setParent(parent: string | null): void
    /**
     * Asynchronously stores a password for `source`.  This operation does
     * not rely on the registry service and therefore works for any #ESource
     * -- registered or "scratch".
     * 
     * If `permanently` is %TRUE, the password is stored in the default keyring.
     * Otherwise the password is stored in the memory-only session keyring.  If
     * an error occurs, the function sets `error` and returns %FALSE.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_store_password_finish() to get the result of the operation.
     * @param password the password to store
     * @param permanently store permanently or just for the session
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    storePassword(password: string, permanently: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_store_password().
     * @param result a #GAsyncResult
     */
    storePasswordFinish(result: Gio.AsyncResult): boolean
    /**
     * Stores a password for `source`.  This operation does not rely on the
     * registry service and therefore works for any #ESource -- registered
     * or "scratch".
     * 
     * If `permanently` is %TRUE, the password is stored in the default keyring.
     * Otherwise the password is stored in the memory-only session keyring.  If
     * an error occurs, the function sets `error` and returns %FALSE.
     * @param password the password to store
     * @param permanently store permanently or just for the session
     * @param cancellable optional #GCancellable object, or %NULL
     */
    storePasswordSync(password: string, permanently: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Outputs the current contents of `source` as a key file string.
     * Free the returned string with g_free().
     */
    toString(): [ /* returnType */ string, /* length */ number ]
    /**
     * Asynchronously calls the UnsetLastCredentialsRequiredArguments method
     * on the server side, to unset the last values used for the 'credentials-required'
     * signal.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_source_unset_last_credentials_required_arguments_finish() to get
     * the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    unsetLastCredentialsRequiredArguments(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_unset_last_credentials_required_arguments().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    unsetLastCredentialsRequiredArgumentsFinish(result: Gio.AsyncResult): boolean
    /**
     * Unsets the last used arguments of the 'credentials-required' signal emission.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    unsetLastCredentialsRequiredArgumentsSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously submits the current contents of `source` to the D-Bus
     * service to be written to disk and broadcast to other clients.  The
     * `source` must be #ESource:writable.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_write_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    write(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_write().  If an
     * error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    writeFinish(result: Gio.AsyncResult): boolean
    /**
     * Submits the current contents of `source` to the D-Bus service to be
     * written to disk and broadcast to other clients.  The `source` must
     * be #ESource:writable.
     * 
     * If an error occurs, the functon will set `error` and return %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    writeSync(cancellable: Gio.Cancellable | null): boolean

    // Own signals of EDataServer-1.2.EDataServer.Source

    connect(sigName: "authenticate", callback: Source_AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: Source_AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: Source_AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: Source_AuthenticateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticate", ...args: any[]): void
    connect(sigName: "changed", callback: Source_ChangedSignalCallback): number
    on(sigName: "changed", callback: Source_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Source_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Source_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "credentials-required", callback: Source_CredentialsRequiredSignalCallback): number
    on(sigName: "credentials-required", callback: Source_CredentialsRequiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "credentials-required", callback: Source_CredentialsRequiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "credentials-required", callback: Source_CredentialsRequiredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "credentials-required", certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error, ...args: any[]): void

    // Class property signals of EDataServer-1.2.EDataServer.Source

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
    connect(sigName: "notify::enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-creatable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-creatable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-creatable", ...args: any[]): void
    connect(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-deletable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-deletable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-deletable", ...args: any[]): void
    connect(sigName: "notify::removable", callback: (...args: any[]) => void): number
    on(sigName: "notify::removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::removable", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (...args: any[]) => void): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::writable", ...args: any[]): void
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
class Source extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.Source

    static name: string
    static $gtype: GObject.GType<Source>

    // Constructors of EDataServer-1.2.EDataServer.Source

    constructor(config?: Source_ConstructProps) 
    /**
     * Creates a new #ESource instance.
     * 
     * The #ESource::changed signal will be emitted from `main_context` if given,
     * or else from the thread-default #GMainContext at the time this function is
     * called.
     * 
     * The only time the function should be called outside of #ESourceRegistry
     * is to create a so-called "scratch" #ESource for editing in a Properties
     * window or an account setup assistant.
     * 
     * FIXME: Elaborate on scratch sources.
     * @constructor 
     * @param dbusObject a #GDBusObject or %NULL
     * @param mainContext a #GMainContext or %NULL
     */
    constructor(dbusObject: Gio.DBusObject | null, mainContext: GLib.MainContext | null) 
    /**
     * Creates a new #ESource instance.
     * 
     * The #ESource::changed signal will be emitted from `main_context` if given,
     * or else from the thread-default #GMainContext at the time this function is
     * called.
     * 
     * The only time the function should be called outside of #ESourceRegistry
     * is to create a so-called "scratch" #ESource for editing in a Properties
     * window or an account setup assistant.
     * 
     * FIXME: Elaborate on scratch sources.
     * @constructor 
     * @param dbusObject a #GDBusObject or %NULL
     * @param mainContext a #GMainContext or %NULL
     */
    static new(dbusObject: Gio.DBusObject | null, mainContext: GLib.MainContext | null): Source
    /**
     * Creates a new "scratch" #ESource with a predetermined unique identifier.
     * 
     * The #ESource::changed signal will be emitted from `main_context` if given,
     * or else from the thread-default #GMainContext at the time this function is
     * called.
     * @constructor 
     * @param uid a new unique identifier string
     * @param mainContext a #GMainContext or %NULL
     */
    static newWithUid(uid: string, mainContext: GLib.MainContext | null): Source
    _init(config?: Source_ConstructProps): void
    /**
     * Converts a #GParamSpec name (e.g. "foo-bar" or "foo_bar")
     * to "CamelCase" for use as a #GKeyFile key (e.g. "FooBar").
     * 
     * This function is made public only to aid in account migration.
     * Applications should not need to use this.
     * @param paramName a #GParamSpec name
     */
    static parameterToKey(paramName: string): string
}

interface SourceAddressBook_ConstructProps extends SourceBackend_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceAddressBook

    order?: number | null
}

interface SourceAddressBook {

    // Own properties of EDataServer-1.2.EDataServer.SourceAddressBook

    order: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceAddressBook

    getOrder(): number
    /**
     * Set the sorting order of the source.
     * @param order a sorting order
     */
    setOrder(order: number): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceAddressBook

    connect(sigName: "notify::order", callback: (...args: any[]) => void): number
    on(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::order", ...args: any[]): void
    connect(sigName: "notify::backend-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-name", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceAddressBook extends SourceBackend {

    // Own properties of EDataServer-1.2.EDataServer.SourceAddressBook

    static name: string
    static $gtype: GObject.GType<SourceAddressBook>

    // Constructors of EDataServer-1.2.EDataServer.SourceAddressBook

    constructor(config?: SourceAddressBook_ConstructProps) 
    _init(config?: SourceAddressBook_ConstructProps): void
}

interface SourceAlarms_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceAlarms

    includeMe?: boolean | null
    lastNotified?: string | null
}

interface SourceAlarms {

    // Own properties of EDataServer-1.2.EDataServer.SourceAlarms

    includeMe: boolean
    lastNotified: string

    // Owm methods of EDataServer-1.2.EDataServer.SourceAlarms

    /**
     * Thread-safe variation of e_source_alarms_get_last_notified().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupLastNotified(): string | null
    /**
     * Returns whether the user should be alerted about upcoming appointments
     * in the calendar described by the #ESource to which `extension` belongs.
     * 
     * Alarm daemons such as evolution-alarm-notify can use this property to
     * decide which calendars to query for upcoming appointments.
     */
    getIncludeMe(): boolean
    /**
     * Returns an ISO 8601 formatted timestamp of when the user was last
     * alerted about an upcoming appointment in the calendar described by
     * the #ESource to which `extension` belongs.  If no valid timestamp
     * has been set, the function will return %NULL.
     */
    getLastNotified(): string | null
    /**
     * Sets whether the user should be alerted about upcoming appointments in
     * the calendar described by the #ESource to which `extension` belongs.
     * 
     * Alarm daemons such as evolution-alarm-notify can use this property to
     * decide which calendars to query for upcoming appointments.
     * @param includeMe whether to show alarms for upcoming appointments
     */
    setIncludeMe(includeMe: boolean): void
    /**
     * Sets an ISO 8601 formatted timestamp of when the user was last
     * alerted about an upcoming appointment in the calendar described
     * by the #ESource to which `extension` belongs.
     * 
     * If `last_notified` is non-%NULL, the function will validate the
     * timestamp before setting the #ESourceAlarms:last-notified property.
     * Invalid timestamps are discarded with a runtime warning.
     * 
     * Generally, this function should only be called by an alarm daemon
     * such as evolution-alarm-notify.
     * @param lastNotified an ISO 8601 timestamp, or %NULL
     */
    setLastNotified(lastNotified: string | null): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceAlarms

    connect(sigName: "notify::include-me", callback: (...args: any[]) => void): number
    on(sigName: "notify::include-me", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::include-me", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::include-me", ...args: any[]): void
    connect(sigName: "notify::last-notified", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-notified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-notified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-notified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-notified", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceAlarms extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceAlarms

    static name: string
    static $gtype: GObject.GType<SourceAlarms>

    // Constructors of EDataServer-1.2.EDataServer.SourceAlarms

    constructor(config?: SourceAlarms_ConstructProps) 
    _init(config?: SourceAlarms_ConstructProps): void
}

interface SourceAuthentication_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceAuthentication

    credentialName?: string | null
    host?: string | null
    isExternal?: boolean | null
    method?: string | null
    port?: number | null
    proxyUid?: string | null
    rememberPassword?: boolean | null
    user?: string | null
}

interface SourceAuthentication {

    // Own properties of EDataServer-1.2.EDataServer.SourceAuthentication

    readonly connectable: Gio.SocketConnectable
    credentialName: string
    host: string
    isExternal: boolean
    method: string
    port: number
    proxyUid: string
    rememberPassword: boolean
    user: string

    // Owm methods of EDataServer-1.2.EDataServer.SourceAuthentication

    /**
     * Thread-safe variation of e_source_authentication_get_credential_name().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupCredentialName(): string | null
    /**
     * Thread-safe variation of e_source_authentication_get_host().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupHost(): string | null
    /**
     * Thread-safe variation of e_source_authentication_get_method().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupMethod(): string | null
    /**
     * Thread-safe variation of e_source_authentication_get_proxy_uid().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupProxyUid(): string
    /**
     * Thread-safe variation of e_source_authentication_get_user().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupUser(): string | null
    /**
     * Returns the credential name used to pass the stored or gathered credential
     * (like password) into the e_source_invoke_authenticate(). This is
     * a counterpart of the authentication method. The %NULL means to use
     * the default name, which is #E_SOURCE_CREDENTIAL_PASSWORD.
     */
    getCredentialName(): string | null
    /**
     * Returns the host name used to authenticate to a remote account.
     */
    getHost(): string | null
    /**
     * Get if the authentication is done by an external application such as a
     * Single Sign On application (e.g. GNOME Online Accounts)
     */
    getIsExternal(): boolean
    /**
     * Returns the authentication method for a remote account.  There are
     * no pre-defined method names; backends are free to set this however
     * they wish.  If authentication is not required for a remote account,
     * the convention is to set #ESourceAuthentication:method to "none".
     */
    getMethod(): string | null
    /**
     * Returns the port number used to authenticate to a remote account.
     */
    getPort(): number
    /**
     * Returns the #ESource:uid of the #ESource that holds network proxy
     * settings for use when connecting to a remote account.
     */
    getProxyUid(): string
    /**
     * Returns whether to offer to remember the provided password by default
     * in password prompts.  This way, if the user unchecks the option it will
     * be unchecked by default in future password prompts.
     */
    getRememberPassword(): boolean
    /**
     * Returns the user name used to authenticate to a remote account.
     */
    getUser(): string | null
    /**
     * Returns a #GSocketConnectable instance constructed from `extension'`s
     * #ESourceAuthentication:host and #ESourceAuthentication:port properties,
     * or %NULL if the #ESourceAuthentication:host is not set.
     * 
     * The returned #GSocketConnectable is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
     */
    refConnectable(): Gio.SocketConnectable | null
    /**
     * This is a convenience function which returns whether authentication
     * is required at all, regardless of the method used.  This relies on
     * the convention of setting #ESourceAuthentication:method to "none"
     * when authentication is <emphasis>not</emphasis> required.
     */
    required(): boolean
    /**
     * Sets the credential name used to pass the stored or gathered credential
     * (like password) into the e_source_invoke_authenticate(). This is
     * a counterpart of the authentication method. The %NULL means to use
     * the default name, which is #E_SOURCE_CREDENTIAL_PASSWORD.
     * 
     * The internal copy of `credential_name` is automatically stripped
     * of leading and trailing whitespace. If the resulting string is
     * empty, %NULL is set instead.
     * @param credentialName a credential name, or %NULL
     */
    setCredentialName(credentialName: string | null): void
    /**
     * Sets the host name used to authenticate to a remote account.
     * 
     * The internal copy of `host` is automatically stripped of leading and
     * trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param host a host name, or %NULL
     */
    setHost(host: string | null): void
    /**
     * Set if the authentication is done by an external application such as a
     * Single Sign On application (e.g. GNOME Online Accounts)
     * @param isExternal %TRUE if the authentication is done using an external application, %FALSE otherwise
     */
    setIsExternal(isExternal: boolean): void
    /**
     * Sets the authentication method for a remote account.  There are no
     * pre-defined method names; backends are free to set this however they
     * wish.  If authentication is not required for a remote account, the
     * convention is to set the method to "none".  In keeping with that
     * convention, #ESourceAuthentication:method will be set to "none" if
     * `method` is %NULL or an empty string.
     * @param method authentication method, or %NULL
     */
    setMethod(method: string | null): void
    /**
     * Sets the port number used to authenticate to a remote account.
     * @param port a port number
     */
    setPort(port: number): void
    /**
     * Sets the #ESource:uid of the #ESource that holds network proxy settings
     * for use when connecting to a remote account.
     * @param proxyUid the proxy profile #ESource:uid
     */
    setProxyUid(proxyUid: string): void
    /**
     * Sets whether to offer to remember the provided password by default in
     * password prompts.  This way, if the user unchecks the option it will be
     * unchecked by default in future password prompts.
     * @param rememberPassword whether to offer to remember the password by default
     */
    setRememberPassword(rememberPassword: boolean): void
    /**
     * Sets the user name used to authenticate to a remote account.
     * 
     * The internal copy of `user` is automatically stripped of leading and
     * trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param user a user name, or %NULL
     */
    setUser(user: string | null): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceAuthentication

    connect(sigName: "notify::connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::credential-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::credential-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::credential-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::credential-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::credential-name", ...args: any[]): void
    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::is-external", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-external", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-external", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-external", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-external", ...args: any[]): void
    connect(sigName: "notify::method", callback: (...args: any[]) => void): number
    on(sigName: "notify::method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::proxy-uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-uid", ...args: any[]): void
    connect(sigName: "notify::remember-password", callback: (...args: any[]) => void): number
    on(sigName: "notify::remember-password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remember-password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remember-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remember-password", ...args: any[]): void
    connect(sigName: "notify::user", callback: (...args: any[]) => void): number
    on(sigName: "notify::user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceAuthentication extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceAuthentication

    static name: string
    static $gtype: GObject.GType<SourceAuthentication>

    // Constructors of EDataServer-1.2.EDataServer.SourceAuthentication

    constructor(config?: SourceAuthentication_ConstructProps) 
    _init(config?: SourceAuthentication_ConstructProps): void
}

interface SourceAutocomplete_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceAutocomplete

    includeMe?: boolean | null
}

interface SourceAutocomplete {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutocomplete

    includeMe: boolean

    // Owm methods of EDataServer-1.2.EDataServer.SourceAutocomplete

    /**
     * Returns whether the address book described by the #ESource to which
     * `extension` belongs should be queried when the user inputs a partial
     * contact name or email address.
     */
    getIncludeMe(): boolean
    /**
     * Sets whether the address book described by the #ESource to which
     * `extension` belongs should be queried when the user inputs a partial
     * contact name or email address.
     * @param includeMe whether to use the autocomplete feature
     */
    setIncludeMe(includeMe: boolean): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceAutocomplete

    connect(sigName: "notify::include-me", callback: (...args: any[]) => void): number
    on(sigName: "notify::include-me", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::include-me", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::include-me", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceAutocomplete extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutocomplete

    static name: string
    static $gtype: GObject.GType<SourceAutocomplete>

    // Constructors of EDataServer-1.2.EDataServer.SourceAutocomplete

    constructor(config?: SourceAutocomplete_ConstructProps) 
    _init(config?: SourceAutocomplete_ConstructProps): void
}

interface SourceAutoconfig_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceAutoconfig

    revision?: string | null
}

interface SourceAutoconfig {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutoconfig

    revision: string

    // Owm methods of EDataServer-1.2.EDataServer.SourceAutoconfig

    /**
     * Thread-safe variation of e_source_autoconfig_get_revision().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupRevision(): string
    /**
     * Returns the revision of a data source. This maps a particular version of a
     * system-wide source to a user-specific source.
     * 
     * If doesn't match, the system-wide source will be copied to the user-specific
     * evolution config directory, preserving the already present fields that are
     * not defined by the system-wide source.
     * 
     * If it matches, no copying is done.
     */
    getRevision(): string
    /**
     * Sets the revision used to map a particular version of a system-wide source
     * to a user-specific source.
     * 
     * If doesn't match, the system-wide source will be copied to the user-specific
     * evolution config directory, preserving the already present fields that are
     * not defined by the system-wide source.
     * 
     * If it matches, no copying is done.
     * 
     * The internal copy of `revision` is automatically stripped of leading and
     * trailing whitespace.
     * @param revision a revision
     */
    setRevision(revision: string): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceAutoconfig

    connect(sigName: "notify::revision", callback: (...args: any[]) => void): number
    on(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::revision", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceAutoconfig extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutoconfig

    static name: string
    static $gtype: GObject.GType<SourceAutoconfig>

    // Constructors of EDataServer-1.2.EDataServer.SourceAutoconfig

    constructor(config?: SourceAutoconfig_ConstructProps) 
    _init(config?: SourceAutoconfig_ConstructProps): void
}

interface SourceBackend_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceBackend

    backendName?: string | null
}

interface SourceBackend {

    // Own properties of EDataServer-1.2.EDataServer.SourceBackend

    backendName: string

    // Owm methods of EDataServer-1.2.EDataServer.SourceBackend

    /**
     * Thread-safe variation of e_source_backend_get_backend_name().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupBackendName(): string | null
    /**
     * Returns the backend name for `extension`.
     */
    getBackendName(): string | null
    /**
     * Sets the backend name for `extension`.
     * 
     * The internal copy of `backend_name` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param backendName a backend name, or %NULL
     */
    setBackendName(backendName: string | null): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceBackend

    connect(sigName: "notify::backend-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-name", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceBackend extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceBackend

    static name: string
    static $gtype: GObject.GType<SourceBackend>

    // Constructors of EDataServer-1.2.EDataServer.SourceBackend

    constructor(config?: SourceBackend_ConstructProps) 
    _init(config?: SourceBackend_ConstructProps): void
}

interface SourceCalendar_ConstructProps extends SourceSelectable_ConstructProps {
}

interface SourceCalendar {

    // Class property signals of EDataServer-1.2.EDataServer.SourceCalendar

    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::order", callback: (...args: any[]) => void): number
    on(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::order", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::backend-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-name", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceCalendar extends SourceSelectable {

    // Own properties of EDataServer-1.2.EDataServer.SourceCalendar

    static name: string
    static $gtype: GObject.GType<SourceCalendar>

    // Constructors of EDataServer-1.2.EDataServer.SourceCalendar

    constructor(config?: SourceCalendar_ConstructProps) 
    _init(config?: SourceCalendar_ConstructProps): void
}

interface SourceCamel_ConstructProps extends SourceExtension_ConstructProps {
}

interface SourceCamel {

    // Own properties of EDataServer-1.2.EDataServer.SourceCamel

    readonly settings: Camel.Settings

    // Owm methods of EDataServer-1.2.EDataServer.SourceCamel

    /**
     * Returns `extension'`s #ESourceCamel:settings instance, pre-configured
     * from the #ESource to which `extension` belongs.  Changes to the #ESource
     * will automatically propagate to the #ESourceCamel:settings instance and
     * vice versa.
     * 
     * This is essentially the glue that binds #ESource to #CamelService.
     * See e_source_camel_configure_service().
     */
    getSettings(): Camel.Settings

    // Class property signals of EDataServer-1.2.EDataServer.SourceCamel

    connect(sigName: "notify::settings", callback: (...args: any[]) => void): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::settings", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceCamel extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceCamel

    static name: string
    static $gtype: GObject.GType<SourceCamel>

    // Constructors of EDataServer-1.2.EDataServer.SourceCamel

    constructor(config?: SourceCamel_ConstructProps) 
    _init(config?: SourceCamel_ConstructProps): void
    /**
     * Generates a custom #ESourceCamel subtype for `protocol`.  Instances of the
     * new subtype will contain a #CamelSettings instance of type `settings_type`.
     * 
     * This function is called as part of e_source_camel_register_types() and
     * should not be called explicitly, except by some groupware packages that
     * need to share package-specific settings across their mail, calendar and
     * address book components.  In that case the groupware package may choose
     * to subclass #CamelSettings rather than #ESourceExtension since libcamel
     * is the lowest common denominator across all components.  This function
     * provides a way for the calendar and address book components of such a
     * package to generate an #ESourceCamel subtype for its #CamelSettings
     * subtype without having to load all available #CamelProvider modules.
     * @param protocol a #CamelProvider protocol
     * @param settingsType a subtype of #CamelSettings
     */
    static generateSubtype(protocol: string, settingsType: GObject.GType): GObject.GType
    /**
     * Returns the extension name for the #ESourceCamel subtype for `protocol`.
     * The extension name can then be passed to e_source_get_extension() to
     * obtain an instance of the #ESourceCamel subtype.
     * 
     * For example, given a protocol named "imap" the function would return
     * "Imap Backend".
     * @param protocol a #CamelProvider protocol
     */
    static getExtensionName(protocol: string): string
    /**
     * Returns the #GType name of the registered #ESourceCamel subtype for
     * `protocol`.
     * 
     * For example, given a protocol named "imap" the function would return
     * "ESourceCamelImap".
     * @param protocol a #CamelProvider protocol
     */
    static getTypeName(protocol: string): string
    /**
     * Creates and registers subclasses of #ESourceCamel for each available
     * #CamelProvider.  This function should be called once during application
     * or library initialization.
     */
    static registerTypes(): void
}

interface SourceCollection_ConstructProps extends SourceBackend_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceCollection

    allowSourcesRename?: boolean | null
    calendarEnabled?: boolean | null
    calendarUrl?: string | null
    contactsEnabled?: boolean | null
    contactsUrl?: string | null
    identity?: string | null
    mailEnabled?: boolean | null
}

interface SourceCollection {

    // Own properties of EDataServer-1.2.EDataServer.SourceCollection

    allowSourcesRename: boolean
    calendarEnabled: boolean
    calendarUrl: string
    contactsEnabled: boolean
    contactsUrl: string
    identity: string
    mailEnabled: boolean

    // Owm methods of EDataServer-1.2.EDataServer.SourceCollection

    /**
     * Thread-safe variation of e_source_collection_get_calendar_url().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupCalendarUrl(): string | null
    /**
     * Thread-safe variation of e_source_collection_get_contacts_url().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupContactsUrl(): string | null
    /**
     * Thread-safe variation of e_source_collection_get_identity().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupIdentity(): string | null
    /**
     * Returns whether the collection backend allows a user to rename child
     * sources. It is meant mainly for GUI. The default is %FALSE.
     */
    getAllowSourcesRename(): boolean
    /**
     * Returns whether calendar sources within the collection should be
     * enabled.
     * 
     * An #ECollectionBackend running within the registry D-Bus service will
     * automatically synchronize any calendar sources it maintains with the
     * #ESourceCollection:calendar-enabled property.
     */
    getCalendarEnabled(): boolean
    /**
     * Returns the calendar top URL string, that is, where to search for calendar sources.
     */
    getCalendarUrl(): string | null
    /**
     * Returns whether address book sources within the collection should be
     * enabled.
     * 
     * An #ECollectionBackend running within the registry D-Bus service will
     * automatically synchronize any address book sources it maintains with
     * the #ESourceCollection:contacts-enabled property.
     */
    getContactsEnabled(): boolean
    /**
     * Returns the contacts top URL string, that is, where to search for contact sources.
     */
    getContactsUrl(): string | null
    /**
     * Returns the string used to uniquely identify the user account at
     * the service provider.  Often this is an email address or user name.
     */
    getIdentity(): string | null
    /**
     * Returns whether mail sources within the collection should be enabled.
     * 
     * An #ECollectionBackend running within the registry D-Bus service will
     * automatically synchronize any mail sources it maintains with the
     * #ESourceCollection:mail-enabled property.
     */
    getMailEnabled(): boolean
    /**
     * Sets whether the collection backend allows a user to rename child
     * sources. It is meant mainly for GUI. The default is %FALSE.
     * @param allowSourcesRename whether mail sources should be enabled
     */
    setAllowSourcesRename(allowSourcesRename: boolean): void
    /**
     * Sets whether calendar sources within the collection should be enabled.
     * 
     * An #ECollectionBackend running within the registry D-Bus service will
     * automatically synchronize any calendar sources it maintains with the
     * #ESourceCollection:calendar-enabled property.
     * 
     * Calling this function from a registry service client has no effect until
     * the change is submitted to the registry service through e_source_write(),
     * but there should rarely be any need for clients to call this.
     * @param calendarEnabled whether calendar sources should be enabled
     */
    setCalendarEnabled(calendarEnabled: boolean): void
    /**
     * Sets the calendar top URL, that is, where to search for calendar sources.
     * 
     * The internal copy of `calendar_url` is automatically stripped of leading
     * and trailing whitespace. If the resulting string is empty, %NULL is set
     * instead.
     * @param calendarUrl calendar top URL, or %NULL
     */
    setCalendarUrl(calendarUrl: string | null): void
    /**
     * Sets whether address book sources within the collection should be enabled.
     * 
     * An #ECollectionBackend running within the registry D-Bus service will
     * automatically synchronize any address book sources it maintains with
     * the #ESourceCollection:contacts-enabled property.
     * 
     * Calling this function from a registry service client has no effect until
     * the change is submitted to the registry service through e_source_write(),
     * but there should rarely be any need for clients to call this.
     * @param contactsEnabled whether address book sources should be enabled
     */
    setContactsEnabled(contactsEnabled: boolean): void
    /**
     * Sets the contacts top URL, that is, where to search for contact sources.
     * 
     * The internal copy of `contacts_url` is automatically stripped of leading
     * and trailing whitespace. If the resulting string is empty, %NULL is set
     * instead.
     * @param contactsUrl contacts top URL, or %NULL
     */
    setContactsUrl(contactsUrl: string | null): void
    /**
     * Sets the string used to uniquely identify the user account at the
     * service provider.  Often this is an email address or user name.
     * 
     * The internal copy of `identity` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is
     * set instead.
     * @param identity the collection identity, or %NULL
     */
    setIdentity(identity: string | null): void
    /**
     * Sets whether mail sources within the collection should be enabled.
     * 
     * An #ECollectionBackend running within the registry D-Bus service will
     * automatically synchronize any mail sources it maintains with the
     * #ESourceCollection:mail-enabled property.
     * 
     * Calling this function from a registry service client has no effect until
     * the changes is submitted to the registry service through e_source_write(),
     * but there should rarely be any need for clients to call this.
     * @param mailEnabled whether mail sources should be enabled
     */
    setMailEnabled(mailEnabled: boolean): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceCollection

    connect(sigName: "notify::allow-sources-rename", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-sources-rename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-sources-rename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-sources-rename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-sources-rename", ...args: any[]): void
    connect(sigName: "notify::calendar-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::calendar-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::calendar-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::calendar-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::calendar-enabled", ...args: any[]): void
    connect(sigName: "notify::calendar-url", callback: (...args: any[]) => void): number
    on(sigName: "notify::calendar-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::calendar-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::calendar-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::calendar-url", ...args: any[]): void
    connect(sigName: "notify::contacts-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::contacts-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contacts-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contacts-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contacts-enabled", ...args: any[]): void
    connect(sigName: "notify::contacts-url", callback: (...args: any[]) => void): number
    on(sigName: "notify::contacts-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contacts-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contacts-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contacts-url", ...args: any[]): void
    connect(sigName: "notify::identity", callback: (...args: any[]) => void): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: "notify::mail-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::mail-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mail-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mail-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mail-enabled", ...args: any[]): void
    connect(sigName: "notify::backend-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-name", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceCollection extends SourceBackend {

    // Own properties of EDataServer-1.2.EDataServer.SourceCollection

    static name: string
    static $gtype: GObject.GType<SourceCollection>

    // Constructors of EDataServer-1.2.EDataServer.SourceCollection

    constructor(config?: SourceCollection_ConstructProps) 
    _init(config?: SourceCollection_ConstructProps): void
}

interface SourceContacts_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceContacts

    includeMe?: boolean | null
}

interface SourceContacts {

    // Own properties of EDataServer-1.2.EDataServer.SourceContacts

    includeMe: boolean

    // Owm methods of EDataServer-1.2.EDataServer.SourceContacts

    getIncludeMe(): boolean
    setIncludeMe(includeMe: boolean): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceContacts

    connect(sigName: "notify::include-me", callback: (...args: any[]) => void): number
    on(sigName: "notify::include-me", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::include-me", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::include-me", ...args: any[]): void
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
}

class SourceContacts extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceContacts

    static name: string
    static $gtype: GObject.GType<SourceContacts>

    // Constructors of EDataServer-1.2.EDataServer.SourceContacts

    constructor(config?: SourceContacts_ConstructProps) 
    _init(config?: SourceContacts_ConstructProps): void
}

interface SourceCredentialsProvider_ConstructProps extends Extensible_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceCredentialsProvider

    /**
     * The Source Registry object, which can be either #ESourceregistry or #ESourceRegistryServer.
     */
    registry?: GObject.Object | null
}

interface SourceCredentialsProvider extends Extensible {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProvider

    /**
     * The Source Registry object, which can be either #ESourceregistry or #ESourceRegistryServer.
     */
    readonly registry: GObject.Object

    // Owm methods of EDataServer-1.2.EDataServer.SourceCredentialsProvider

    /**
     * Returns whether a credentials prompt can be shown for the `source`.
     * @param source an #ESource
     */
    canPrompt(source: Source): boolean
    /**
     * Returns whether the `source` can store its credentials. When %FALSE is returned,
     * an attempt to call e_source_credentials_provider_store() or
     * e_source_credentials_provider_store_sync() will fail for this `source`.
     * @param source an #ESource
     */
    canStore(source: Source): boolean
    /**
     * Asynchronously deletes any previously stored credentials for `source`.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_source_credentials_provider_delete_finish() to get the result
     * of the operation.
     * @param source an #ESource, to lookup credentials for
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    delete(source: Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_credentials_provider_delete().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    deleteFinish(result: Gio.AsyncResult): boolean
    /**
     * Deletes any previously stored credentials for `source`.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param source an #ESource, to store credentials for
     * @param cancellable optional #GCancellable object, or %NULL
     */
    deleteSync(source: Source, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously looks up for credentials for `source`.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_source_credentials_provider_lookup_finish() to get the result
     * of the operation.
     * @param source an #ESource, to lookup credentials for
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    lookup(source: Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_credentials_provider_lookup().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    lookupFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    /**
     * Looks up the credentials for `source`.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param source an #ESource, to lookup credentials for
     * @param cancellable optional #GCancellable object, or %NULL
     */
    lookupSync(source: Source, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    /**
     * Returns a referenced parent #ESource, which holds the credentials for
     * the given `source`. This is useful for collections, where the credentials
     * are usually stored on the collection source, thus shared between child
     * sources. When ther eis no such parent source, a %NULL is returned, which
     * means the `source` holds credentials for itself.
     * @param source an #ESource
     */
    refCredentialsSource(source: Source): Source | null
    /**
     * Returns refenrenced registry associated with this `provider`.
     */
    refRegistry(): GObject.Object
    /**
     * Returns referenced #ESource with the given `uid,` or %NULL, when it could not be found.
     * @param uid an #ESource UID
     */
    refSource(uid: string): Source | null
    /**
     * Registers a credentials provider implementation and adds its own reference on
     * the `provider_impl`.
     * @param providerImpl an #ESourceCredentialsProviderImpl
     */
    registerImpl(providerImpl: SourceCredentialsProviderImpl): boolean
    /**
     * Asynchronously stores the `credentials` for `source`. Note the actual stored
     * values can differ for each storage. In other words, not all named parameters
     * are stored for each `source`.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_source_credentials_provider_store_finish() to get the result
     * of the operation.
     * @param source an #ESource, to lookup credentials for
     * @param credentials an #ENamedParameters with credentials to store
     * @param permanently store permanently or just for the session
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    store(source: Source, credentials: NamedParameters, permanently: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_credentials_provider_store().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    storeFinish(result: Gio.AsyncResult): boolean
    /**
     * Stores the `credentials` for `source`. Note the actual stored values
     * can differ for each storage. In other words, not all named parameters
     * are stored for each `source`.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param source an #ESource, to store credentials for
     * @param credentials an #ENamedParameters with credentials to store
     * @param permanently store permanently or just for the session
     * @param cancellable optional #GCancellable object, or %NULL
     */
    storeSync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Unregisters previously registered `provider_impl` with
     * e_source_credentials_provider_register_impl(). Function does nothing,
     * when the `provider_impl` is not registered.
     * @param providerImpl an #ESourceCredentialsProviderImpl
     */
    unregisterImpl(providerImpl: SourceCredentialsProviderImpl): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceCredentialsProvider

    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
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
class SourceCredentialsProvider extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProvider

    static name: string
    static $gtype: GObject.GType<SourceCredentialsProvider>

    // Constructors of EDataServer-1.2.EDataServer.SourceCredentialsProvider

    constructor(config?: SourceCredentialsProvider_ConstructProps) 
    /**
     * Creates a new #ESourceCredentialsProvider, which is meant to abstract
     * credential management for #ESource<!-- -->-s.
     * @constructor 
     * @param registry an #ESourceRegistry
     */
    constructor(registry: SourceRegistry) 
    /**
     * Creates a new #ESourceCredentialsProvider, which is meant to abstract
     * credential management for #ESource<!-- -->-s.
     * @constructor 
     * @param registry an #ESourceRegistry
     */
    static new(registry: SourceRegistry): SourceCredentialsProvider
    _init(config?: SourceCredentialsProvider_ConstructProps): void
}

interface SourceCredentialsProviderImpl_ConstructProps extends Extension_ConstructProps {
}

interface SourceCredentialsProviderImpl {

    // Owm methods of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl

    /**
     * Returns whether the `provider_impl` can process credentials for the `source`.
     * @param source an #ESource
     */
    canProcess(source: Source): boolean
    /**
     * Returns whether credential prompt can be done for the `provider_impl`.
     */
    canPrompt(): boolean
    /**
     * Returns whether the `provider_impl` can store credentials.
     */
    canStore(): boolean
    /**
     * Asks `provider_impl` to delete any stored credentials for `source`.
     * 
     * Default implementation returns %FALSE and sets #G_IO_ERROR_NOT_SUPPORTED error.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param source an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    deleteSync(source: Source, cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns an #ESourceCredentialsProvider with which the `provider_impl` is associated.
     */
    getProvider(): object | null
    /**
     * Asks `provider_impl` to lookup for stored credentials for `source`.
     * The `out_credentials` is populated with them. If the result is not
     * %NULL, then it should be freed with e_named_parameters_free() when
     * no longer needed.
     * 
     * Default implementation returns %FALSE and sets #G_IO_ERROR_NOT_SUPPORTED error.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param source an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    lookupSync(source: Source, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    /**
     * Asks `provider_impl` to store `credentials` for `source`.
     * 
     * Default implementation returns %FALSE and sets #G_IO_ERROR_NOT_SUPPORTED error.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param source an #ESource
     * @param credentials an #ENamedParameters containing credentials to store
     * @param permanently whether to store credentials permanently, or for the current session only
     * @param cancellable optional #GCancellable object, or %NULL
     */
    storeSync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Credentials provider implementation base structure. The descendants
 * implement the virtual methods. The descendants are automatically
 * registered into an #ESourceCredentialsProvider.
 * @class 
 */
class SourceCredentialsProviderImpl extends Extension {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl

    static name: string
    static $gtype: GObject.GType<SourceCredentialsProviderImpl>

    // Constructors of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl

    constructor(config?: SourceCredentialsProviderImpl_ConstructProps) 
    _init(config?: SourceCredentialsProviderImpl_ConstructProps): void
}

interface SourceCredentialsProviderImplOAuth2_ConstructProps extends SourceCredentialsProviderImpl_ConstructProps {
}

interface SourceCredentialsProviderImplOAuth2 {

    // Class property signals of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * OAuth2 based credentials provider implementation.
 * @class 
 */
class SourceCredentialsProviderImplOAuth2 extends SourceCredentialsProviderImpl {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2

    static name: string
    static $gtype: GObject.GType<SourceCredentialsProviderImplOAuth2>

    // Constructors of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2

    constructor(config?: SourceCredentialsProviderImplOAuth2_ConstructProps) 
    _init(config?: SourceCredentialsProviderImplOAuth2_ConstructProps): void
}

interface SourceCredentialsProviderImplPassword_ConstructProps extends SourceCredentialsProviderImpl_ConstructProps {
}

interface SourceCredentialsProviderImplPassword {

    // Class property signals of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPassword

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Password based credentials provider implementation.
 * @class 
 */
class SourceCredentialsProviderImplPassword extends SourceCredentialsProviderImpl {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPassword

    static name: string
    static $gtype: GObject.GType<SourceCredentialsProviderImplPassword>

    // Constructors of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPassword

    constructor(config?: SourceCredentialsProviderImplPassword_ConstructProps) 
    _init(config?: SourceCredentialsProviderImplPassword_ConstructProps): void
}

interface SourceExtension_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceExtension

    source?: Source | null
}

interface SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceExtension

    readonly source: Source

    // Owm methods of EDataServer-1.2.EDataServer.SourceExtension

    /**
     * Returns the #ESource instance to which `extension` belongs.
     * 
     * Note this function is not thread-safe.  The returned #ESource could
     * be finalized by another thread while the caller is still using it.
     */
    getSource(): Source
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
    refSource(): Source

    // Class property signals of EDataServer-1.2.EDataServer.SourceExtension

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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceExtension extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.SourceExtension

    static name: string
    static $gtype: GObject.GType<SourceExtension>

    // Constructors of EDataServer-1.2.EDataServer.SourceExtension

    constructor(config?: SourceExtension_ConstructProps) 
    _init(config?: SourceExtension_ConstructProps): void
}

interface SourceGoa_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceGoa

    accountId?: string | null
    address?: string | null
    calendarUrl?: string | null
    contactsUrl?: string | null
    name?: string | null
}

interface SourceGoa {

    // Own properties of EDataServer-1.2.EDataServer.SourceGoa

    accountId: string
    address: string
    calendarUrl: string
    contactsUrl: string
    name: string

    // Owm methods of EDataServer-1.2.EDataServer.SourceGoa

    /**
     * Thread-safe variation of e_source_goa_get_account_id().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupAccountId(): string | null
    /**
     * Thread-safe variation of e_source_goa_get_address().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupAddress(): string | null
    /**
     * Thread-safe variation of e_source_goa_get_calendar_url().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupCalendarUrl(): string | null
    /**
     * Thread-safe variation of e_source_goa_get_contacts_url().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupContactsUrl(): string | null
    /**
     * Thread-safe variation of e_source_goa_get_name().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupName(): string | null
    /**
     * Returns the identifier string of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs.
     */
    getAccountId(): string | null
    /**
     * Returns the original Address of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs. Can be %NULL or an empty
     * string when not filled.
     */
    getAddress(): string | null
    /**
     * Returns the calendar URL string of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs. Can be %NULL or an empty
     * string for accounts not supporting this property.
     */
    getCalendarUrl(): string | null
    /**
     * Returns the contacts URL string of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs. Can be %NULL or an empty
     * string for accounts not supporting this property.
     */
    getContactsUrl(): string | null
    /**
     * Returns the original Name of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs. Can be %NULL or an empty
     * string when not filled.
     */
    getName(): string | null
    /**
     * Sets the identifier string of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs.
     * 
     * The internal copy of `account_id` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param accountId the associated GNOME Online Account ID, or %NULL
     */
    setAccountId(accountId: string | null): void
    /**
     * Sets the Address of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs.
     * 
     * The internal copy of `address` is automatically stripped of leading
     * and trailing whitespace. If the resulting string is empty, %NULL is set
     * instead.
     * @param address the associated GNOME Online Account's Address, or %NULL
     */
    setAddress(address: string | null): void
    /**
     * Sets the calendar URL of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs.
     * 
     * The internal copy of `calendar_url` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param calendarUrl the associated GNOME Online Account                calendar URL, or %NULL
     */
    setCalendarUrl(calendarUrl: string | null): void
    /**
     * Sets the contacts URL of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs.
     * 
     * The internal copy of `contacts_url` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param contactsUrl the associated GNOME Online Account                contacts URL, or %NULL
     */
    setContactsUrl(contactsUrl: string | null): void
    /**
     * Sets the Name of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs.
     * 
     * The internal copy of `name` is automatically stripped of leading
     * and trailing whitespace. If the resulting string is empty, %NULL is set
     * instead.
     * @param name the associated GNOME Online Account's Name, or %NULL
     */
    setName(name: string | null): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceGoa

    connect(sigName: "notify::account-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::account-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account-id", ...args: any[]): void
    connect(sigName: "notify::address", callback: (...args: any[]) => void): number
    on(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::calendar-url", callback: (...args: any[]) => void): number
    on(sigName: "notify::calendar-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::calendar-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::calendar-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::calendar-url", ...args: any[]): void
    connect(sigName: "notify::contacts-url", callback: (...args: any[]) => void): number
    on(sigName: "notify::contacts-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contacts-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contacts-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contacts-url", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceGoa extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceGoa

    static name: string
    static $gtype: GObject.GType<SourceGoa>

    // Constructors of EDataServer-1.2.EDataServer.SourceGoa

    constructor(config?: SourceGoa_ConstructProps) 
    _init(config?: SourceGoa_ConstructProps): void
}

interface SourceLDAP_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceLDAP

    authentication?: SourceLDAPAuthentication | null
    canBrowse?: boolean | null
    filter?: string | null
    limit?: number | null
    rootDn?: string | null
    scope?: SourceLDAPScope | null
    security?: SourceLDAPSecurity | null
}

interface SourceLDAP {

    // Own properties of EDataServer-1.2.EDataServer.SourceLDAP

    authentication: SourceLDAPAuthentication
    canBrowse: boolean
    filter: string
    limit: number
    rootDn: string
    scope: SourceLDAPScope
    security: SourceLDAPSecurity

    // Owm methods of EDataServer-1.2.EDataServer.SourceLDAP

    dupFilter(): string
    dupRootDn(): string
    getAuthentication(): SourceLDAPAuthentication
    getCanBrowse(): boolean
    getFilter(): string
    getLimit(): number
    getRootDn(): string
    getScope(): SourceLDAPScope
    getSecurity(): SourceLDAPSecurity
    setAuthentication(authentication: SourceLDAPAuthentication): void
    setCanBrowse(canBrowse: boolean): void
    setFilter(filter: string): void
    setLimit(limit: number): void
    setRootDn(rootDn: string): void
    setScope(scope: SourceLDAPScope): void
    setSecurity(security: SourceLDAPSecurity): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceLDAP

    connect(sigName: "notify::authentication", callback: (...args: any[]) => void): number
    on(sigName: "notify::authentication", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authentication", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authentication", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authentication", ...args: any[]): void
    connect(sigName: "notify::can-browse", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-browse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-browse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-browse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-browse", ...args: any[]): void
    connect(sigName: "notify::filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::limit", ...args: any[]): void
    connect(sigName: "notify::root-dn", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-dn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-dn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-dn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-dn", ...args: any[]): void
    connect(sigName: "notify::scope", callback: (...args: any[]) => void): number
    on(sigName: "notify::scope", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scope", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scope", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scope", ...args: any[]): void
    connect(sigName: "notify::security", callback: (...args: any[]) => void): number
    on(sigName: "notify::security", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::security", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::security", ...args: any[]): void
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
}

class SourceLDAP extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceLDAP

    static name: string
    static $gtype: GObject.GType<SourceLDAP>

    // Constructors of EDataServer-1.2.EDataServer.SourceLDAP

    constructor(config?: SourceLDAP_ConstructProps) 
    _init(config?: SourceLDAP_ConstructProps): void
}

interface SourceLocal_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceLocal

    customFile?: Gio.File | null
    emailAddress?: string | null
    writable?: boolean | null
}

interface SourceLocal {

    // Own properties of EDataServer-1.2.EDataServer.SourceLocal

    customFile: Gio.File
    emailAddress: string
    writable: boolean

    // Owm methods of EDataServer-1.2.EDataServer.SourceLocal

    /**
     * A thread safe variant to get a custom file being set on the `extension`.
     * Free the returned #GFile, if not %NULL, with g_object_unref(),
     * when no longer needed.
     */
    dupCustomFile(): Gio.File | null
    /**
     * Thread-safe variation of e_source_lcoal_get_email_address().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupEmailAddress(): string
    /**
     * Get the custom file being set on the `extension`.
     * The returned #GFile is owned by the `extension`.
     * 
     * For thread safety use e_source_local_dup_custom_file().
     */
    getCustomFile(): Gio.File | null
    getEmailAddress(): string | null
    /**
     * Returns whether the backend should prefer to open the file
     * in writable mode. The default is %TRUE. The file can be still
     * opened for read-only, for example when the access to the file
     * is read-only.
     */
    getWritable(): boolean
    /**
     * Set, or unset, when using %NULL, the custom file for the `extension`.
     * @param customFile a #GFile, or %NULL
     */
    setCustomFile(customFile: Gio.File | null): void
    /**
     * Sets the email address for `extension`.
     * 
     * The internal copy of `email_address` is automatically stripped of leading
     * and trailing whitespace. If the resulting string is empty, %NULL is set
     * instead.
     * @param emailAddress an email address, or %NULL
     */
    setEmailAddress(emailAddress: string | null): void
    /**
     * Set whether the custom file should be opened in writable mode.
     * The default is %TRUE. The file can be still opened for read-only,
     * for example when the access to the file is read-only.
     * @param writable value to set
     */
    setWritable(writable: boolean): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceLocal

    connect(sigName: "notify::custom-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::custom-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::custom-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::custom-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::custom-file", ...args: any[]): void
    connect(sigName: "notify::email-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (...args: any[]) => void): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::writable", ...args: any[]): void
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
}

class SourceLocal extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceLocal

    static name: string
    static $gtype: GObject.GType<SourceLocal>

    // Constructors of EDataServer-1.2.EDataServer.SourceLocal

    constructor(config?: SourceLocal_ConstructProps) 
    _init(config?: SourceLocal_ConstructProps): void
}

interface SourceMDN_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceMDN

    responsePolicy?: MdnResponsePolicy | null
}

interface SourceMDN {

    // Own properties of EDataServer-1.2.EDataServer.SourceMDN

    responsePolicy: MdnResponsePolicy

    // Owm methods of EDataServer-1.2.EDataServer.SourceMDN

    /**
     * Returns the policy for this mail account on responding to Message
     * Disposition Notification requests when receiving mail messages.
     */
    getResponsePolicy(): MdnResponsePolicy
    /**
     * Sets the policy for this mail account on responding to Message
     * Disposition Notification requests when receiving mail messages.
     * @param responsePolicy the #EMdnResponsePolicy
     */
    setResponsePolicy(responsePolicy: MdnResponsePolicy): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceMDN

    connect(sigName: "notify::response-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::response-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::response-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::response-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::response-policy", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceMDN extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceMDN

    static name: string
    static $gtype: GObject.GType<SourceMDN>

    // Constructors of EDataServer-1.2.EDataServer.SourceMDN

    constructor(config?: SourceMDN_ConstructProps) 
    _init(config?: SourceMDN_ConstructProps): void
}

interface SourceMailAccount_ConstructProps extends SourceBackend_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceMailAccount

    archiveFolder?: string | null
    identityUid?: string | null
    markSeen?: ThreeState | null
    markSeenTimeout?: number | null
    needsInitialSetup?: boolean | null
}

interface SourceMailAccount {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailAccount

    archiveFolder: string
    identityUid: string
    markSeen: ThreeState
    markSeenTimeout: number
    needsInitialSetup: boolean

    // Owm methods of EDataServer-1.2.EDataServer.SourceMailAccount

    /**
     * Thread-safe variation of e_source_mail_account_get_archive_folder().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupArchiveFolder(): string | null
    /**
     * Thread-safe variation of e_source_mail_account_get_identity_uid().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupIdentityUid(): string | null
    /**
     * Returns a string identifying the archive folder.
     * The format of the identifier string is defined by the client application.
     */
    getArchiveFolder(): string | null
    /**
     * Returns the #ESource:uid of the #ESource that describes the mail
     * identity to be used for this account.
     */
    getIdentityUid(): string | null
    getMarkSeen(): ThreeState
    getMarkSeenTimeout(): number
    /**
     * Check whether the mail account needs to do its initial setup.
     */
    getNeedsInitialSetup(): boolean
    /**
     * Sets the folder for sent messages by an identifier string.
     * The format of the identifier string is defined by the client application.
     * 
     * The internal copy of `archive_folder` is automatically stripped of leading
     * and trailing whitespace. If the resulting string is empty, %NULL is set
     * instead.
     * @param archiveFolder an identifier for the archive folder, or %NULL
     */
    setArchiveFolder(archiveFolder: string | null): void
    /**
     * Sets the #ESource:uid of the #ESource that describes the mail
     * identity to be used for this account.
     * @param identityUid the mail identity #ESource:uid, or %NULL
     */
    setIdentityUid(identityUid: string | null): void
    /**
     * Sets whether the messages in this account should be marked
     * as seen automatically. An inconsistent state means to use
     * global option.
     * @param markSeen an #EThreeState as the value to set
     */
    setMarkSeen(markSeen: ThreeState): void
    /**
     * Sets the `timeout` in milliseconds for marking messages
     * as seen in this account. Whether the timeout is used
     * depends on e_source_mail_account_get_mark_seen().
     * @param timeout a timeout in milliseconds
     */
    setMarkSeenTimeout(timeout: number): void
    /**
     * Sets whether the account needs to run its initial setup.
     * @param needsInitialSetup value to set
     */
    setNeedsInitialSetup(needsInitialSetup: boolean): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceMailAccount

    connect(sigName: "notify::archive-folder", callback: (...args: any[]) => void): number
    on(sigName: "notify::archive-folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::archive-folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::archive-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::archive-folder", ...args: any[]): void
    connect(sigName: "notify::identity-uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::identity-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::identity-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::identity-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::identity-uid", ...args: any[]): void
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
    connect(sigName: "notify::needs-initial-setup", callback: (...args: any[]) => void): number
    on(sigName: "notify::needs-initial-setup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::needs-initial-setup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::needs-initial-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::needs-initial-setup", ...args: any[]): void
    connect(sigName: "notify::backend-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-name", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceMailAccount extends SourceBackend {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailAccount

    static name: string
    static $gtype: GObject.GType<SourceMailAccount>

    // Constructors of EDataServer-1.2.EDataServer.SourceMailAccount

    constructor(config?: SourceMailAccount_ConstructProps) 
    _init(config?: SourceMailAccount_ConstructProps): void
}

interface SourceMailComposition_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceMailComposition

    bcc?: string[] | null
    cc?: string[] | null
    draftsFolder?: string | null
    language?: string | null
    replyStyle?: SourceMailCompositionReplyStyle | null
    signImip?: boolean | null
    startBottom?: ThreeState | null
    templatesFolder?: string | null
    topSignature?: ThreeState | null
}

interface SourceMailComposition {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailComposition

    bcc: string[]
    cc: string[]
    draftsFolder: string
    language: string
    replyStyle: SourceMailCompositionReplyStyle
    signImip: boolean
    startBottom: ThreeState
    templatesFolder: string
    topSignature: ThreeState

    // Owm methods of EDataServer-1.2.EDataServer.SourceMailComposition

    /**
     * Thread-safe variation of e_source_mail_composition_get_bcc().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string array should be freed with g_strfreev() when no
     * longer needed.
     */
    dupBcc(): string[]
    /**
     * Thread-safe variation of e_source_mail_composition_get_cc().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string array should be freed with g_strfreev() when no
     * longer needed.
     */
    dupCc(): string[]
    /**
     * Thread-safe variation of e_source_mail_composition_get_drafts_folder().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupDraftsFolder(): string | null
    /**
     * Thread-safe variation of e_source_mail_composition_get_language().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupLanguage(): string | null
    /**
     * Thread-safe variation of e_source_mail_composition_get_templates_folder().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupTemplatesFolder(): string | null
    /**
     * Returns a %NULL-terminated string array of recipients which should
     * automatically be added to the blind carbon-copy (Bcc) list when
     * composing a new mail message.  The recipient strings should be of
     * the form "Full Name &lt;email-address&gt;".  The returned array is
     * owned by `extension` and should not be modified or freed.
     */
    getBcc(): string[]
    /**
     * Returns a %NULL-terminated string array of recipients which should
     * automatically be added to the carbon-copy (Cc) list when composing a
     * new mail message.  The recipient strings should be of the form "Full
     * Name <email-address>".  The returned array is owned by `extension` and
     * should not be modified or freed.
     */
    getCc(): string[]
    /**
     * Returns a string identifying the preferred folder for draft messages.
     * The format of the identifier string is defined by the client application.
     */
    getDraftsFolder(): string | null
    /**
     * Returns a string identifying the preferred language, like "en_US".
     */
    getLanguage(): string | null
    /**
     * Returns preferred reply style to be used when replying
     * using the associated account. If no preference is set,
     * the %E_SOURCE_MAIL_COMPOSITION_REPLY_STYLE_DEFAULT is returned.
     */
    getReplyStyle(): SourceMailCompositionReplyStyle
    /**
     * Returns whether outgoing iMIP messages such as meeting requests should
     * also be signed.  This is primarily intended as a workaround for certain
     * versions of Microsoft Outlook which can't handle signed iMIP messages.
     */
    getSignImip(): boolean
    /**
     * Returns whether start at bottom when replying or forwarding
     * using the associated account. If no preference is set,
     * the %E_THREE_STATE_INCONSISTENT is returned.
     */
    getStartBottom(): ThreeState
    /**
     * Returns a string identifying the preferred folder for message templates.
     * The format of the identifier string is defined by the client application.
     */
    getTemplatesFolder(): string | null
    /**
     * Returns whether place signature at top when replying or forwarding
     * using the associated account. If no preference is set,
     * the %E_THREE_STATE_INCONSISTENT is returned.
     */
    getTopSignature(): ThreeState
    /**
     * Sets the recipients which should automatically be added to the blind
     * carbon-copy (Bcc) list when composing a new mail message.  The recipient
     * strings should be of the form "Full Name &lt;email-address&gt;".
     * @param bcc a %NULL-terminated string array of Bcc    recipients
     */
    setBcc(bcc: string[]): void
    /**
     * Sets the recipients which should automatically be added to the carbon
     * copy (Cc) list when composing a new mail message.  The recipient strings
     * should be of the form "Full Name &lt;email-address&gt;".
     * @param cc a %NULL-terminated string array of Cc    recipients
     */
    setCc(cc: string[]): void
    /**
     * Sets the preferred folder for draft messages by an identifier string.
     * The format of the identifier string is defined by the client application.
     * 
     * The internal copy of `drafts_folder` is automatically stripped of
     * leading and trailing whitespace.  If the resulting string is empty,
     * %NULL is set instead.
     * @param draftsFolder an identifier for the preferred drafts                 folder, or %NULL
     */
    setDraftsFolder(draftsFolder: string | null): void
    /**
     * Sets the preferred language by an identifier string, like "en_US".
     * Use %NULL to unset any previous value.
     * 
     * The internal copy of `language` is automatically stripped of
     * leading and trailing whitespace.  If the resulting string is empty,
     * %NULL is set instead.
     * @param language an identifier for the preferred language, or %NULL
     */
    setLanguage(language: string | null): void
    /**
     * Sets preferred reply style to be used when replying
     * using the associated account. To unset the preference,
     * use the %E_SOURCE_MAIL_COMPOSITION_REPLY_STYLE_DEFAULT.
     * @param replyStyle an #ESourceMailCompositionReplyStyle
     */
    setReplyStyle(replyStyle: SourceMailCompositionReplyStyle): void
    /**
     * Sets whether outgoing iMIP messages such as meeting requests should
     * also be signed.  This is primarily intended as a workaround for certain
     * versions of Microsoft Outlook which can't handle signed iMIP messages.
     * @param signImip whether outgoing iMIP messages should be signed
     */
    setSignImip(signImip: boolean): void
    /**
     * Sets whether start bottom when replying or forwarding using the associated account.
     * To unset the preference, use the %E_THREE_STATE_INCONSISTENT.
     * @param startBottom an #EThreeState
     */
    setStartBottom(startBottom: ThreeState): void
    /**
     * Sets the preferred folder for message templates by an identifier string.
     * The format of the identifier string is defined by the client application.
     * 
     * The internal copy of `templates_folder` is automatically stripped of
     * leading and trailing whitespace.  If the resulting string is empty,
     * %NULL is set instead.
     * @param templatesFolder an identifier for the preferred templates                    folder, or %NULL
     */
    setTemplatesFolder(templatesFolder: string | null): void
    /**
     * Sets whether place signature at top when replying or forwarding using the associated account.
     * To unset the preference, use the %E_THREE_STATE_INCONSISTENT.
     * @param topSignature an #EThreeState
     */
    setTopSignature(topSignature: ThreeState): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceMailComposition

    connect(sigName: "notify::bcc", callback: (...args: any[]) => void): number
    on(sigName: "notify::bcc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bcc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bcc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bcc", ...args: any[]): void
    connect(sigName: "notify::cc", callback: (...args: any[]) => void): number
    on(sigName: "notify::cc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cc", ...args: any[]): void
    connect(sigName: "notify::drafts-folder", callback: (...args: any[]) => void): number
    on(sigName: "notify::drafts-folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drafts-folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drafts-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drafts-folder", ...args: any[]): void
    connect(sigName: "notify::language", callback: (...args: any[]) => void): number
    on(sigName: "notify::language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::reply-style", callback: (...args: any[]) => void): number
    on(sigName: "notify::reply-style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reply-style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reply-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reply-style", ...args: any[]): void
    connect(sigName: "notify::sign-imip", callback: (...args: any[]) => void): number
    on(sigName: "notify::sign-imip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sign-imip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sign-imip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sign-imip", ...args: any[]): void
    connect(sigName: "notify::start-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-bottom", ...args: any[]): void
    connect(sigName: "notify::templates-folder", callback: (...args: any[]) => void): number
    on(sigName: "notify::templates-folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::templates-folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::templates-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::templates-folder", ...args: any[]): void
    connect(sigName: "notify::top-signature", callback: (...args: any[]) => void): number
    on(sigName: "notify::top-signature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::top-signature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::top-signature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::top-signature", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceMailComposition extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailComposition

    static name: string
    static $gtype: GObject.GType<SourceMailComposition>

    // Constructors of EDataServer-1.2.EDataServer.SourceMailComposition

    constructor(config?: SourceMailComposition_ConstructProps) 
    _init(config?: SourceMailComposition_ConstructProps): void
}

interface SourceMailIdentity_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceMailIdentity

    address?: string | null
    aliases?: string | null
    name?: string | null
    organization?: string | null
    replyTo?: string | null
    signatureUid?: string | null
}

interface SourceMailIdentity {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailIdentity

    address: string
    aliases: string
    name: string
    organization: string
    replyTo: string
    signatureUid: string

    // Owm methods of EDataServer-1.2.EDataServer.SourceMailIdentity

    /**
     * Thread-safe variation of e_source_mail_identity_get_address().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupAddress(): string | null
    /**
     * Thread-safe variation of e_source_mail_identity_get_aliases().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupAliases(): string | null
    /**
     * Thread-safe variation of e_source_mail_identity_get_name().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupName(): string | null
    /**
     * Thread-safe variation of e_source_mail_identity_dup_organization().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupOrganization(): string | null
    /**
     * Thread-safe variation of e_source_mail_identity_get_reply_to().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupReplyTo(): string | null
    /**
     * Thread-safe variation of e_source_mail_identity_get_signature_uid().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupSignatureUid(): string | null
    /**
     * Returns the email address for this identity from which to send messages.
     * This may be an empty string but will never be %NULL.
     */
    getAddress(): string | null
    /**
     * Returns the email address aliases for this identity. These are comma-separated
     * email addresses which may or may not contain also different name.
     * This may be an empty string, but will never be %NULL.
     * There can be used camel_address_decode() on a #CamelInternetAddress
     * to decode the list of aliases.
     */
    getAliases(): string | null
    /**
     * Returns a set aliases as a hash table with address as key and
     * name as value of the hash table. The name can be sometimes
     * empty or NULL, thus rather use g_hash_table_contains() when
     * checking for particular address. The addresses are
     * compared case insensitively. The same addresses with a different
     * name are included only once, the last variant of it. Use
     * e_source_mail_identity_get_aliases() if you need more fine-grained
     * control on the list of aliases.
     */
    getAliasesAsHashTable(): GLib.HashTable | null
    /**
     * Returns the sender's name for this identity.
     */
    getName(): string | null
    /**
     * Returns the sender's organization for this identity.
     */
    getOrganization(): string | null
    /**
     * Returns the email address for this identity to which recipients should
     * send replies.
     */
    getReplyTo(): string | null
    /**
     * Returns the #ESource:uid of an #ESource describing a mail signature.
     * 
     * If the user does not want to use a signature for this identity, the
     * convention is to set the #ESourceMailIdentity:signature-uid property
     * to "none".
     */
    getSignatureUid(): string | null
    /**
     * Sets the email address for this identity from which to send messages.
     * 
     * The internal copy of `address` is automatically stripped of leading and
     * trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param address the sender's email address, or %NULL
     */
    setAddress(address: string | null): void
    /**
     * Sets the email address aliases for this identity. These are comma-separated
     * email addresses which may or may not contain also different name.
     * 
     * The internal copy of `aliases` is automatically stripped of leading and
     * trailing whitespace. If the resulting string is empty, %NULL is set
     * instead.
     * @param aliases the sender's email address aliases, or %NULL
     */
    setAliases(aliases: string | null): void
    /**
     * Sets the sender's name for this identity.
     * 
     * The internal copy of `name` is automatically stripped of leading and
     * trailing whitespace.
     * @param name the sender's name, or %NULL
     */
    setName(name: string | null): void
    /**
     * Sets the sender's organization for this identity.
     * 
     * The internal copy of `organization` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param organization the sender's organization, or %NULL
     */
    setOrganization(organization: string | null): void
    /**
     * Sets the email address for this identity to which recipients should
     * send replies.
     * 
     * The internal copy of `reply_to` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is
     * set instead.
     * @param replyTo the sender's reply-to address, or %NULL
     */
    setReplyTo(replyTo: string | null): void
    /**
     * Sets the #ESource:uid of an #ESource describing a mail signature.
     * 
     * If the user does not want to use a signature for this identity, the
     * convention is to set the #ESourceMailIdentity:signature-uid property
     * to "none".  In keeping with that convention, the property will be set
     * to "none" if `signature_uid` is %NULL or an empty string.
     * @param signatureUid the sender's signature ID, or %NULL
     */
    setSignatureUid(signatureUid: string | null): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceMailIdentity

    connect(sigName: "notify::address", callback: (...args: any[]) => void): number
    on(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::aliases", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::organization", callback: (...args: any[]) => void): number
    on(sigName: "notify::organization", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::organization", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::organization", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::organization", ...args: any[]): void
    connect(sigName: "notify::reply-to", callback: (...args: any[]) => void): number
    on(sigName: "notify::reply-to", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reply-to", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reply-to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reply-to", ...args: any[]): void
    connect(sigName: "notify::signature-uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::signature-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::signature-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::signature-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::signature-uid", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceMailIdentity extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailIdentity

    static name: string
    static $gtype: GObject.GType<SourceMailIdentity>

    // Constructors of EDataServer-1.2.EDataServer.SourceMailIdentity

    constructor(config?: SourceMailIdentity_ConstructProps) 
    _init(config?: SourceMailIdentity_ConstructProps): void
}

interface SourceMailSignature_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceMailSignature

    mimeType?: string | null
}

interface SourceMailSignature {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSignature

    readonly file: Gio.File
    mimeType: string

    // Owm methods of EDataServer-1.2.EDataServer.SourceMailSignature

    /**
     * Thread-safe variation of e_source_mail_signature_get_mime_type().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupMimeType(): string | null
    /**
     * Returns a #GFile instance pointing to the signature file for `extension`.
     * The signature file may be a regular file containing the static signature
     * content, or it may be a symbolic link to an executable file that produces
     * the signature content.
     * 
     * e_source_mail_signature_load() uses this to load the signature content.
     */
    getFile(): Gio.File
    /**
     * Returns the MIME type of the signature content for `extension,` or %NULL
     * if it has not yet been determined.
     * 
     * e_source_mail_signature_load() sets this automatically if the MIME type
     * has not yet been determined.
     */
    getMimeType(): string | null
    /**
     * Sets the MIME type of the signature content for `extension`.
     * 
     * e_source_mail_signature_load() sets this automatically if the MIME type
     * has not yet been determined.
     * 
     * The internal copy of `mime_type` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is
     * set instead.
     * @param mimeType a MIME type, or %NULL
     */
    setMimeType(mimeType: string | null): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceMailSignature

    connect(sigName: "notify::file", callback: (...args: any[]) => void): number
    on(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * function below.
 * @class 
 */
class SourceMailSignature extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSignature

    static name: string
    static $gtype: GObject.GType<SourceMailSignature>

    // Constructors of EDataServer-1.2.EDataServer.SourceMailSignature

    constructor(config?: SourceMailSignature_ConstructProps) 
    _init(config?: SourceMailSignature_ConstructProps): void
}

interface SourceMailSubmission_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceMailSubmission

    repliesToOriginFolder?: boolean | null
    sentFolder?: string | null
    transportUid?: string | null
    useSentFolder?: boolean | null
}

interface SourceMailSubmission {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSubmission

    repliesToOriginFolder: boolean
    sentFolder: string
    transportUid: string
    useSentFolder: boolean

    // Owm methods of EDataServer-1.2.EDataServer.SourceMailSubmission

    /**
     * Thread-safe variation of e_source_mail_submission_get_sent_folder().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupSentFolder(): string | null
    /**
     * Thread-safe variation of e_source_mail_submission_get_transport_uid().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupTransportUid(): string | null
    /**
     * Returns whether save replies in the folder of the message
     * being replied to, instead of the Sent folder.
     */
    getRepliesToOriginFolder(): boolean
    /**
     * Returns a string identifying the preferred folder for sent messages.
     * The format of the identifier string is defined by the client application.
     */
    getSentFolder(): string | null
    /**
     * Returns the #ESource:uid of the #ESource that describes the mail
     * transport to be used for outgoing messages.
     */
    getTransportUid(): string | null
    getUseSentFolder(): boolean
    /**
     * Sets whether save replies in the folder of the message
     * being replied to, instead of the Sent folder.
     * @param repliesToOriginFolder new value
     */
    setRepliesToOriginFolder(repliesToOriginFolder: boolean): void
    /**
     * Sets the preferred folder for sent messages by an identifier string.
     * The format of the identifier string is defined by the client application.
     * 
     * The internal copy of `sent_folder` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param sentFolder an identifier for the preferred sent folder,               or %NULL
     */
    setSentFolder(sentFolder: string | null): void
    /**
     * Sets the #ESource:uid of the #ESource that describes the mail
     * transport to be used for outgoing messages.
     * @param transportUid the mail transport #ESource:uid, or %NULL
     */
    setTransportUid(transportUid: string | null): void
    /**
     * Sets whether save messages to the sent folder at all.
     * @param useSentFolder the value to set
     */
    setUseSentFolder(useSentFolder: boolean): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceMailSubmission

    connect(sigName: "notify::replies-to-origin-folder", callback: (...args: any[]) => void): number
    on(sigName: "notify::replies-to-origin-folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::replies-to-origin-folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::replies-to-origin-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::replies-to-origin-folder", ...args: any[]): void
    connect(sigName: "notify::sent-folder", callback: (...args: any[]) => void): number
    on(sigName: "notify::sent-folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sent-folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sent-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sent-folder", ...args: any[]): void
    connect(sigName: "notify::transport-uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::transport-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transport-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transport-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transport-uid", ...args: any[]): void
    connect(sigName: "notify::use-sent-folder", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-sent-folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-sent-folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-sent-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-sent-folder", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * function below.
 * @class 
 */
class SourceMailSubmission extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSubmission

    static name: string
    static $gtype: GObject.GType<SourceMailSubmission>

    // Constructors of EDataServer-1.2.EDataServer.SourceMailSubmission

    constructor(config?: SourceMailSubmission_ConstructProps) 
    _init(config?: SourceMailSubmission_ConstructProps): void
}

interface SourceMailTransport_ConstructProps extends SourceBackend_ConstructProps {
}

interface SourceMailTransport {

    // Class property signals of EDataServer-1.2.EDataServer.SourceMailTransport

    connect(sigName: "notify::backend-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-name", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceMailTransport extends SourceBackend {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailTransport

    static name: string
    static $gtype: GObject.GType<SourceMailTransport>

    // Constructors of EDataServer-1.2.EDataServer.SourceMailTransport

    constructor(config?: SourceMailTransport_ConstructProps) 
    _init(config?: SourceMailTransport_ConstructProps): void
}

interface SourceMemoList_ConstructProps extends SourceSelectable_ConstructProps {
}

interface SourceMemoList {

    // Class property signals of EDataServer-1.2.EDataServer.SourceMemoList

    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::order", callback: (...args: any[]) => void): number
    on(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::order", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::backend-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-name", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceMemoList extends SourceSelectable {

    // Own properties of EDataServer-1.2.EDataServer.SourceMemoList

    static name: string
    static $gtype: GObject.GType<SourceMemoList>

    // Constructors of EDataServer-1.2.EDataServer.SourceMemoList

    constructor(config?: SourceMemoList_ConstructProps) 
    _init(config?: SourceMemoList_ConstructProps): void
}

interface SourceOffline_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceOffline

    staySynchronized?: boolean | null
}

interface SourceOffline {

    // Own properties of EDataServer-1.2.EDataServer.SourceOffline

    staySynchronized: boolean

    // Owm methods of EDataServer-1.2.EDataServer.SourceOffline

    /**
     * Returns whether data from a remote server should be cached locally
     * for viewing while offline.  Backends are responsible for implementing
     * such caching.
     */
    getStaySynchronized(): boolean
    /**
     * Sets whether data from a remote server should be cached locally for
     * viewing while offline.  Backends are responsible for implementing
     * such caching.
     * @param staySynchronized whether data should be cached for offline
     */
    setStaySynchronized(staySynchronized: boolean): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceOffline

    connect(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void): number
    on(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stay-synchronized", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceOffline extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceOffline

    static name: string
    static $gtype: GObject.GType<SourceOffline>

    // Constructors of EDataServer-1.2.EDataServer.SourceOffline

    constructor(config?: SourceOffline_ConstructProps) 
    _init(config?: SourceOffline_ConstructProps): void
}

interface SourceOpenPGP_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceOpenPGP

    alwaysTrust?: boolean | null
    encryptByDefault?: boolean | null
    encryptToSelf?: boolean | null
    keyId?: string | null
    preferInline?: boolean | null
    signByDefault?: boolean | null
    signingAlgorithm?: string | null
}

interface SourceOpenPGP {

    // Own properties of EDataServer-1.2.EDataServer.SourceOpenPGP

    alwaysTrust: boolean
    encryptByDefault: boolean
    encryptToSelf: boolean
    keyId: string
    preferInline: boolean
    signByDefault: boolean
    signingAlgorithm: string

    // Owm methods of EDataServer-1.2.EDataServer.SourceOpenPGP

    /**
     * Thread-safe variation of e_source_openpgp_get_key_id().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupKeyId(): string
    /**
     * Thread-safe variation of e_source_openpgp_get_signing_algorithm().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupSigningAlgorithm(): string
    /**
     * Returns whether to skip key validation and assume that used keys are
     * always fully trusted.
     */
    getAlwaysTrust(): boolean
    /**
     * Returns whether to digitally encrypt outgoing messages by default using
     * OpenPGP-compliant software such as GNU Privacy Guard (GnuPG).
     */
    getEncryptByDefault(): boolean
    /**
     * Returns whether to "encrypt-to-self" when sending encrypted messages.
     */
    getEncryptToSelf(): boolean
    /**
     * Returns the OpenPGP key ID used to sign and encrypt messages.
     */
    getKeyId(): string
    /**
     * Returns whether to prefer inline sign/encrypt of the text/plain messages.
     */
    getPreferInline(): boolean
    /**
     * Returns whether to digitally sign outgoing messages by default using
     * OpenPGP-compliant software such as GNU Privacy Guard (GnuPG).
     */
    getSignByDefault(): boolean
    /**
     * Returns the name of the hash algorithm used to digitally sign outgoing
     * messages.
     */
    getSigningAlgorithm(): string
    /**
     * Sets whether to skip key validation and assume that used keys are
     * always fully trusted.
     * @param alwaysTrust whether used keys are always fully trusted
     */
    setAlwaysTrust(alwaysTrust: boolean): void
    /**
     * Sets whether to digitally encrypt outgoing messages by default using
     * OpenPGP-compliant software such as GNU Privacy Guard (GnuPG).
     * @param encryptByDefault whether to encrypt outgoing messages by default
     */
    setEncryptByDefault(encryptByDefault: boolean): void
    /**
     * Sets whether to "encrypt-to-self" when sending encrypted messages.
     * @param encryptToSelf whether to "encrypt-to-self"
     */
    setEncryptToSelf(encryptToSelf: boolean): void
    /**
     * Sets the OpenPGP key ID used to sign and encrypt messages.
     * 
     * The internal copy of `key_id` is automatically stripped of leading and
     * trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param keyId the key ID used to sign and encrypt messages
     */
    setKeyId(keyId: string): void
    /**
     * Sets whether to prefer inline sign/encrypt of the text/plain messages.
     * @param preferInline whether to prefer inline sign/encrypt of the text/plain messages
     */
    setPreferInline(preferInline: boolean): void
    /**
     * Sets whether to digitally sign outgoing messages by default using
     * OpenPGP-compliant software such as GNU Privacy Guard (GnuPG).
     * @param signByDefault whether to sign outgoing messages by default
     */
    setSignByDefault(signByDefault: boolean): void
    /**
     * Sets the name of the hash algorithm used to digitally sign outgoing
     * messages.
     * 
     * The internal copy of `signing_algorithm` is automatically stripped of
     * leading and trailing whitespace.  If the resulting string is empty,
     * %NULL is set instead.
     * @param signingAlgorithm the signing algorithm for outgoing messages
     */
    setSigningAlgorithm(signingAlgorithm: string): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceOpenPGP

    connect(sigName: "notify::always-trust", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-trust", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-trust", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-trust", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-trust", ...args: any[]): void
    connect(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::encrypt-by-default", ...args: any[]): void
    connect(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void): number
    on(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::encrypt-to-self", ...args: any[]): void
    connect(sigName: "notify::key-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-id", ...args: any[]): void
    connect(sigName: "notify::prefer-inline", callback: (...args: any[]) => void): number
    on(sigName: "notify::prefer-inline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::prefer-inline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::prefer-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::prefer-inline", ...args: any[]): void
    connect(sigName: "notify::sign-by-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::sign-by-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sign-by-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sign-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sign-by-default", ...args: any[]): void
    connect(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void): number
    on(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::signing-algorithm", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceOpenPGP extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceOpenPGP

    static name: string
    static $gtype: GObject.GType<SourceOpenPGP>

    // Constructors of EDataServer-1.2.EDataServer.SourceOpenPGP

    constructor(config?: SourceOpenPGP_ConstructProps) 
    _init(config?: SourceOpenPGP_ConstructProps): void
}

interface SourceProxy_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceProxy

    autoconfigUrl?: string | null
    ftpHost?: string | null
    ftpPort?: number | null
    httpAuthPassword?: string | null
    httpAuthUser?: string | null
    httpHost?: string | null
    httpPort?: number | null
    httpUseAuth?: boolean | null
    httpsHost?: string | null
    httpsPort?: number | null
    ignoreHosts?: string[] | null
    method?: ProxyMethod | null
    socksHost?: string | null
    socksPort?: number | null
}

interface SourceProxy {

    // Own properties of EDataServer-1.2.EDataServer.SourceProxy

    autoconfigUrl: string
    ftpHost: string
    ftpPort: number
    httpAuthPassword: string
    httpAuthUser: string
    httpHost: string
    httpPort: number
    httpUseAuth: boolean
    httpsHost: string
    httpsPort: number
    ignoreHosts: string[]
    method: ProxyMethod
    socksHost: string
    socksPort: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceProxy

    /**
     * Thread-safe variation of e_source_proxy_get_autoconfig_url().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupAutoconfigUrl(): string
    /**
     * Thread-safe variation of e_source_proxy_get_ftp_host().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupFtpHost(): string
    /**
     * Thread-safe variation of e_source_proxy_get_http_auth_password().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupHttpAuthPassword(): string
    /**
     * Thread-safe variation of e_source_proxy_get_http_auth_user().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupHttpAuthUser(): string
    /**
     * Thread-safe variation of e_source_proxy_get_http_host().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupHttpHost(): string
    /**
     * Threads-safe variation of e_source_proxy_get_https_host().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupHttpsHost(): string
    /**
     * Thread-safe variation of e_source_proxy_get_ignore_hosts().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string array should be freed with g_strfreev() when no
     * longer needed.
     */
    dupIgnoreHosts(): string[]
    /**
     * Thread-safe variation of e_source_proxy_get_socks_host().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupSocksHost(): string
    /**
     * Returns the URL that provides proxy configuration values.  When the
     * `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_AUTO,` this URL
     * is used to look up proxy information for all protocols.
     */
    getAutoconfigUrl(): string
    /**
     * Returns the machine name to proxy FTP through when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     */
    getFtpHost(): string
    /**
     * Returns the port on the machine defined by #ESourceProxy:ftp-host to proxy
     * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     */
    getFtpPort(): number
    /**
     * Returns the password to pass as authentication when doing HTTP proxying
     * and #ESourceProxy:http-use-auth is %TRUE.
     */
    getHttpAuthPassword(): string
    /**
     * Returns the user name to pass as authentication when doing HTTP proxying
     * and #ESourceProxy:http-use-auth is %TRUE.
     */
    getHttpAuthUser(): string
    /**
     * Returns the machine name to proxy HTTP through when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     */
    getHttpHost(): string
    /**
     * Returns the port on the machine defined by #ESourceProxy:http-host to proxy
     * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     */
    getHttpPort(): number
    /**
     * Returns whether the HTTP proxy server at #ESourceProxy:http-host and
     * #ESourceProxy:http-port requires authentication.
     * 
     * The username/password combo is defined by #ESourceProxy:http-auth-user
     * and #ESourceProxy:http-auth-password, but only applies when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     */
    getHttpUseAuth(): boolean
    /**
     * Returns the machine name to proxy secure HTTP through when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     */
    getHttpsHost(): string
    /**
     * Returns the port on the machine defined by #ESourceProxy:https-host to proxy
     * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     */
    getHttpsPort(): number
    /**
     * Returns a %NULL-terminated string array of hosts which are connected to
     * directly, rather than via the proxy (if it is active).  The array elements
     * can be hostnames, domains (using an initial wildcard like *.foo.com), IP
     * host addresses (both IPv4 and IPv6) and network addresses with a netmask
     * (something like 192.168.0.0/24).
     * 
     * The returned array is owned by `extension` and should not be modified or
     * freed.
     */
    getIgnoreHosts(): string[]
    /**
     * Returns the proxy configuration method for `extension`.
     * 
     * The proxy configuration method determines the behavior of
     * e_source_proxy_lookup().
     */
    getMethod(): ProxyMethod
    /**
     * Returns the machine name to use as a SOCKS proxy when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     */
    getSocksHost(): string
    /**
     * Returns the port on the machine defined by #ESourceProxy:socks-host to proxy
     * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     */
    getSocksPort(): number
    /**
     * Sets the URL that provides proxy configuration values.  When the
     * `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_AUTO,` this URL
     * is used to look up proxy information for all protocols.
     * @param autoconfigUrl an autoconfiguration URL
     */
    setAutoconfigUrl(autoconfigUrl: string): void
    /**
     * Sets the machine name to proxy FTP through when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @param ftpHost FTP proxy host name
     */
    setFtpHost(ftpHost: string): void
    /**
     * Sets the port on the machine defined by #ESourceProxy:ftp-host to proxy
     * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @param ftpPort FTP proxy port
     */
    setFtpPort(ftpPort: number): void
    /**
     * Sets the password to pass as authentication when doing HTTP proxying
     * and #ESourceProxy:http-use-auth is %TRUE.
     * @param httpAuthPassword HTTP proxy password
     */
    setHttpAuthPassword(httpAuthPassword: string): void
    /**
     * Sets the user name to pass as authentication when doing HTTP proxying
     * and #ESourceProxy:http-use-auth is %TRUE.
     * @param httpAuthUser HTTP proxy username
     */
    setHttpAuthUser(httpAuthUser: string): void
    /**
     * Sets the machine name to proxy HTTP through when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @param httpHost HTTP proxy host name
     */
    setHttpHost(httpHost: string): void
    /**
     * Sets the port on the machine defined by #ESourceProxy:http-host to proxy
     * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @param httpPort HTTP proxy port
     */
    setHttpPort(httpPort: number): void
    /**
     * Sets whether the HTTP proxy server at #ESourceProxy:http-host and
     * #ESourceProxy:http-port requires authentication.
     * 
     * The username/password combo is defined by #ESourceProxy:http-auth-user
     * and #ESourceProxy:http-auth-password, but only applies when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @param httpUseAuth whether to authenticate HTTP proxy connections
     */
    setHttpUseAuth(httpUseAuth: boolean): void
    /**
     * Sets the machine name to proxy secure HTTP through when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @param httpsHost secure HTTP proxy host name
     */
    setHttpsHost(httpsHost: string): void
    /**
     * Sets the port on the machine defined by #ESourceProxy:https-host to proxy
     * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @param httpsPort secure HTTP proxy port
     */
    setHttpsPort(httpsPort: number): void
    /**
     * Sets the hosts which are connected to directly, rather than via the proxy
     * (if it is active).  The array elements can be hostnames, domains (using an
     * initial wildcard like *.foo.com), IP host addresses (both IPv4 and IPv6)
     * and network addresses with a netmask (something like 192.168.0.0/24).
     * @param ignoreHosts a %NULL-terminated string array of hosts
     */
    setIgnoreHosts(ignoreHosts: string): void
    /**
     * Sets the proxy configuration method for `extension`.
     * 
     * The proxy configuration method determines the behavior of
     * e_source_proxy_lookup().
     * @param method the proxy configuration method
     */
    setMethod(method: ProxyMethod): void
    /**
     * Sets the machine name to use as a SOCKS proxy when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @param socksHost SOCKS proxy host name
     */
    setSocksHost(socksHost: string): void
    /**
     * Sets the port on the machine defined by #ESourceProxy:socks-host to proxy
     * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @param socksPort SOCKS proxy port
     */
    setSocksPort(socksPort: number): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceProxy

    connect(sigName: "notify::autoconfig-url", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconfig-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconfig-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconfig-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconfig-url", ...args: any[]): void
    connect(sigName: "notify::ftp-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::ftp-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ftp-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ftp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ftp-host", ...args: any[]): void
    connect(sigName: "notify::ftp-port", callback: (...args: any[]) => void): number
    on(sigName: "notify::ftp-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ftp-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ftp-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ftp-port", ...args: any[]): void
    connect(sigName: "notify::http-auth-password", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-auth-password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-auth-password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-auth-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-auth-password", ...args: any[]): void
    connect(sigName: "notify::http-auth-user", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-auth-user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-auth-user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-auth-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-auth-user", ...args: any[]): void
    connect(sigName: "notify::http-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-host", ...args: any[]): void
    connect(sigName: "notify::http-port", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-port", ...args: any[]): void
    connect(sigName: "notify::http-use-auth", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-use-auth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-use-auth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-use-auth", ...args: any[]): void
    connect(sigName: "notify::https-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::https-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::https-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::https-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::https-host", ...args: any[]): void
    connect(sigName: "notify::https-port", callback: (...args: any[]) => void): number
    on(sigName: "notify::https-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::https-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::https-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::https-port", ...args: any[]): void
    connect(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void): number
    on(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ignore-hosts", ...args: any[]): void
    connect(sigName: "notify::method", callback: (...args: any[]) => void): number
    on(sigName: "notify::method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::socks-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::socks-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socks-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socks-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socks-host", ...args: any[]): void
    connect(sigName: "notify::socks-port", callback: (...args: any[]) => void): number
    on(sigName: "notify::socks-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socks-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socks-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socks-port", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceProxy extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceProxy

    static name: string
    static $gtype: GObject.GType<SourceProxy>

    // Constructors of EDataServer-1.2.EDataServer.SourceProxy

    constructor(config?: SourceProxy_ConstructProps) 
    _init(config?: SourceProxy_ConstructProps): void
}

interface SourceRefresh_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceRefresh

    enabled?: boolean | null
    intervalMinutes?: number | null
}

interface SourceRefresh {

    // Own properties of EDataServer-1.2.EDataServer.SourceRefresh

    enabled: boolean
    intervalMinutes: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceRefresh

    /**
     * Returns whether to periodically fetch updates from a remote server.
     * 
     * The refresh interval is determined by the #ESourceRefresh:interval-minutes
     * property.
     */
    getEnabled(): boolean
    /**
     * Returns the interval for fetching updates from a remote server.
     * 
     * Note this value is only effective when the #ESourceRefresh:enabled
     * property is %TRUE.
     */
    getIntervalMinutes(): number
    /**
     * Sets whether to periodically fetch updates from a remote server.
     * 
     * The refresh interval is determined by the #ESourceRefresh:interval-minutes
     * property.
     * @param enabled whether to enable periodic refresh
     */
    setEnabled(enabled: boolean): void
    /**
     * Sets the interval for fetching updates from a remote server.
     * 
     * Note this value is only effective when the #ESourceRefresh:enabled
     * property is %TRUE.
     * @param intervalMinutes the interval in minutes
     */
    setIntervalMinutes(intervalMinutes: number): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceRefresh

    connect(sigName: "notify::enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::interval-minutes", callback: (...args: any[]) => void): number
    on(sigName: "notify::interval-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interval-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interval-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interval-minutes", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceRefresh extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceRefresh

    static name: string
    static $gtype: GObject.GType<SourceRefresh>

    // Constructors of EDataServer-1.2.EDataServer.SourceRefresh

    constructor(config?: SourceRefresh_ConstructProps) 
    _init(config?: SourceRefresh_ConstructProps): void
}

interface SourceRegistry_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceRegistry

    /**
     * The default address book #ESource.
     */
    defaultAddressBook?: Source | null
    /**
     * The default calendar #ESource.
     */
    defaultCalendar?: Source | null
    /**
     * The default mail account #ESource.
     */
    defaultMailAccount?: Source | null
    /**
     * The default mail identity #ESource.
     */
    defaultMailIdentity?: Source | null
    /**
     * The default memo list #ESource.
     */
    defaultMemoList?: Source | null
    /**
     * The default task list #ESource.
     */
    defaultTaskList?: Source | null
}

/**
 * Signal callback interface for `credentials-required`
 */
interface SourceRegistry_CredentialsRequiredSignalCallback {
    (source: Source, reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error): void
}

/**
 * Signal callback interface for `source-added`
 */
interface SourceRegistry_SourceAddedSignalCallback {
    (source: Source): void
}

/**
 * Signal callback interface for `source-changed`
 */
interface SourceRegistry_SourceChangedSignalCallback {
    (source: Source): void
}

/**
 * Signal callback interface for `source-disabled`
 */
interface SourceRegistry_SourceDisabledSignalCallback {
    (source: Source): void
}

/**
 * Signal callback interface for `source-enabled`
 */
interface SourceRegistry_SourceEnabledSignalCallback {
    (source: Source): void
}

/**
 * Signal callback interface for `source-removed`
 */
interface SourceRegistry_SourceRemovedSignalCallback {
    (source: Source): void
}

interface SourceRegistry extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistry

    /**
     * The default address book #ESource.
     */
    defaultAddressBook: Source
    /**
     * The default calendar #ESource.
     */
    defaultCalendar: Source
    /**
     * The default mail account #ESource.
     */
    defaultMailAccount: Source
    /**
     * The default mail identity #ESource.
     */
    defaultMailIdentity: Source
    /**
     * The default memo list #ESource.
     */
    defaultMemoList: Source
    /**
     * The default task list #ESource.
     */
    defaultTaskList: Source

    // Owm methods of EDataServer-1.2.EDataServer.SourceRegistry

    /**
     * Determines whether `source` is "effectively" enabled by examining its
     * own #ESource:enabled property as well as those of its ancestors in the
     * #ESource hierarchy.  If all examined #ESource:enabled properties are
     * %TRUE, then the function returns %TRUE.  If any are %FALSE, then the
     * function returns %FALSE.
     * 
     * Use this function instead of e_source_get_enabled() to determine
     * things like whether to display an #ESource in a user interface or
     * whether to act on the data set described by the #ESource.
     * @param source an #ESource
     */
    checkEnabled(source: Source): boolean
    /**
     * See e_source_registry_commit_source_sync() for details.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_registry_commit_source_finish() to get the result of the
     * operation.
     * @param source an #ESource with changes to commit
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    commitSource(source: Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_registry_commit_source().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    commitSourceFinish(result: Gio.AsyncResult): boolean
    /**
     * This is a convenience function intended for use with graphical
     * #ESource editors.  Call this function when the user is finished
     * making changes to `source`.
     * 
     * If `source` has a #GDBusObject, its contents are submitted to the D-Bus
     * service through e_source_write_sync().
     * 
     * If `source` does NOT have a #GDBusObject (implying it's a scratch
     * #ESource), its contents are submitted to the D-Bus service through
     * either e_source_remote_create_sync() if `source` is to be a collection
     * member, or e_source_registry_create_sources_sync() if `source` to be an
     * independent data source.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param source an #ESource with changes to commit
     * @param cancellable optional #GCancellable object, or %NULL
     */
    commitSourceSync(source: Source, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously requests the D-Bus service create new key files for each
     * #ESource in `list_of_sources`.  Each list element must be a scratch
     * #ESource with no #GDBusObject.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_registry_create_sources_finish() to get the result of the
     * operation.
     * @param listOfSources a list of #ESource instances with no #GDBusObject
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    createSources(listOfSources: Source[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_registry_create_sources().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    createSourcesFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests the D-Bus service create new key files for each #ESource in
     * `list_of_sources`.  Each list element must be a scratch #ESource with
     * no #GDBusObject.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param listOfSources a list of #ESource instances with no #GDBusObject
     * @param cancellable optional #GCancellable object, or %NULL
     */
    createSourcesSync(listOfSources: Source[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Handy debugging function that uses e_source_registry_build_display_tree()
     * to print a tree of registered sources to standard output.
     * @param extensionName an extension name, or %NULL
     */
    debugDump(extensionName: string | null): void
    /**
     * Compares `source'`s #ESource:display-name against other sources having
     * an #ESourceExtension named `extension_name,` if given, or else against
     * all other sources in the `registry`.
     * 
     * If `sources'`s #ESource:display-name is unique among these other sources,
     * the function will return the #ESource:display-name verbatim.  Otherwise
     * the function will construct a string that includes the `sources'`s own
     * #ESource:display-name as well as those of its ancestors.
     * 
     * The function's return value is intended to be used in messages shown to
     * the user to help clarify which source is being referred to.  It assumes
     * `source'`s #ESource:display-name is at least unique among its siblings.
     * 
     * Free the returned string with g_free() when finished with it.
     * @param source an #ESource
     * @param extensionName an extension name, or %NULL
     */
    dupUniqueDisplayName(source: Source, extensionName: string | null): string
    /**
     * Examines `source` and its ancestors and returns the "deepest" #ESource
     * having an #ESourceExtension with the given `extension_name`.  If neither
     * `source` nor any of its ancestors have such an extension, the function
     * returns %NULL.
     * 
     * This function is useful in cases when an #ESourceExtension is meant to
     * apply to both the #ESource it belongs to and the #ESource's descendants.
     * 
     * A common example is the #ESourceCollection extension, where descendants
     * of an #ESource having an #ESourceCollection extension are implied to be
     * members of that collection.  In that example, this function can be used
     * to test whether `source` is a member of a collection.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * 
     * Note the function returns the #ESource containing the #ESourceExtension
     * instead of the #ESourceExtension itself because extension instances are
     * not to be referenced directly (see e_source_get_extension()).
     * @param source an #ESource
     * @param extensionName the extension name to find
     */
    findExtension(source: Source, extensionName: string): Source | null
    getOauth2Services(): OAuth2Services
    /**
     * Similar to e_source_registry_list_sources(), but returns only enabled
     * sources according to e_source_registry_check_enabled().
     * 
     * The sources returned in the list are referenced for thread-safety.
     * They must each be unreferenced with g_object_unref() when finished
     * with them.  Free the returned list itself with g_list_free().
     * 
     * An easy way to free the list properly in one step is as follows:
     * 
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
     * @param extensionName an extension name, or %NULL
     */
    listEnabled(extensionName: string | null): Source[]
    /**
     * Returns a list of registered sources, sorted by display name.  If
     * `extension_name` is given, restrict the list to sources having that
     * extension name.
     * 
     * The sources returned in the list are referenced for thread-safety.
     * They must each be unreferenced with g_object_unref() when finished
     * with them.  Free the returned list itself with g_list_free().
     * 
     * An easy way to free the list properly in one step is as follows:
     * 
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
     * @param extensionName an extension name, or %NULL
     */
    listSources(extensionName: string | null): Source[]
    /**
     * Returns the built-in address book #ESource.
     * 
     * This #ESource is always present and makes for a safe fallback.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refBuiltinAddressBook(): Source
    /**
     * Returns the built-in calendar #ESource.
     * 
     * This #ESource is always present and makes for a safe fallback.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refBuiltinCalendar(): Source
    /**
     * Returns the built-in mail account #ESource.
     * 
     * This #ESource is always present and makes for a safe fallback.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refBuiltinMailAccount(): Source
    /**
     * Returns the built-in memo list #ESource.
     * 
     * This #ESource is always present and makes for a safe fallback.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refBuiltinMemoList(): Source
    /**
     * Returns the built-in proxy profile #ESource.
     * 
     * This #ESource is always present and makes for a safe fallback.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refBuiltinProxy(): Source
    /**
     * Returns the built-in task list #ESource.
     * 
     * This #ESource is always present and makes for a safe fallback.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refBuiltinTaskList(): Source
    /**
     * Returns the #ESource most recently passed to
     * e_source_registry_set_default_address_book() either in this session
     * or a previous session, or else falls back to the built-in address book.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refDefaultAddressBook(): Source
    /**
     * Returns the #ESource most recently passed to
     * e_source_registry_set_default_calendar() either in this session
     * or a previous session, or else falls back to the built-in calendar.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refDefaultCalendar(): Source
    /**
     * This is a convenience function to return a default #ESource based on
     * `extension_name`.  This only works with a subset of extension names.
     * 
     * If `extension_name` is #E_SOURCE_EXTENSION_ADDRESS_BOOK, the function
     * returns the current default address book, or else falls back to the
     * built-in address book.
     * 
     * If `extension_name` is #E_SOURCE_EXTENSION_CALENDAR, the function returns
     * the current default calendar, or else falls back to the built-in calendar.
     * 
     * If `extension_name` is #E_SOURCE_EXTENSION_MAIL_ACCOUNT, the function
     * returns the current default mail account, or else falls back to the
     * built-in mail account.
     * 
     * If `extension_name` is #E_SOURCE_EXTENSION_MAIL_IDENTITY, the function
     * returns the current default mail identity, or else falls back to the
     * mail identity named by the current default mail account.
     * 
     * If `extension_name` is #E_SOURCE_EXTENSION_MEMO_LIST, the function returns
     * the current default memo list, or else falls back to the built-in memo list.
     * 
     * If `extension_name` is #E_SOURCE_EXTENSION_TASK_LIST, the function returns
     * the current default task list, or else falls back to the built-in task list.
     * 
     * For all other values of `extension_name,` the function returns %NULL.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @param extensionName an extension_name
     */
    refDefaultForExtensionName(extensionName: string): Source | null
    /**
     * Returns the #ESource most recently passed to
     * e_source_registry_set_default_mail_account() either in this session
     * or a previous session, or else falls back to the built-in mail account.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refDefaultMailAccount(): Source
    /**
     * Returns the #ESource most recently passed to
     * e_source_registry_set_default_mail_identity() either in this session
     * or a previous session, or else falls back to the mail identity named
     * by the default mail account.  If even that fails it returns any mail
     * identity from `registry,` or %NULL if there are none.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refDefaultMailIdentity(): Source | null
    /**
     * Returns the #ESource most recently passed to
     * e_source_registry_set_default_memo_list() either in this session
     * or a previous session, or else falls back to the built-in memo list.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refDefaultMemoList(): Source
    /**
     * Returns the #ESource most recently passed to
     * e_source_registry_set_default_task_list() either in this session
     * or a previous session, or else falls back to the built-in task list.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refDefaultTaskList(): Source
    /**
     * Looks up an #ESource in `registry` by its unique identifier string.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @param uid a unique identifier string
     */
    refSource(uid: string): Source | null
    /**
     * Asynchronously requests the D-Bus service to refresh collection backend
     * for an #ESource with UID `source_uid`. The result means that the refresh
     * had been scheduled not whether the refresh itself succeeded. The refresh
     * is not initiated when the collection backend is offline.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_source_registry_refresh_backend_finish() to get the result of
     * the operation.
     * @param sourceUid UID of a collection #ESource whose backend to refresh
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refreshBackend(sourceUid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_registry_refresh_backend().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    refreshBackendFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests the D-Bus service to refresh collection backend for an #ESource
     * with UID `source_uid`. The result means that the refresh had been scheduled
     * not whether the refresh itself succeeded. The refresh is not initiated
     * when the collection backend is offline.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param sourceUid UID of a collection #ESource whose backend to refresh
     * @param cancellable optional #GCancellable object, or %NULL
     */
    refreshBackendSync(sourceUid: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets `default_source` as the default address book.  If `default_source`
     * is %NULL, the default address book is reset to the built-in address book.
     * This setting will persist across sessions until changed.
     * @param defaultSource an address book #ESource, or %NULL
     */
    setDefaultAddressBook(defaultSource: Source | null): void
    /**
     * Sets `default_source` as the default calendar.  If `default_source`
     * is %NULL, the default calendar is reset to the built-in calendar.
     * This setting will persist across sessions until changed.
     * @param defaultSource a calendar #ESource, or %NULL
     */
    setDefaultCalendar(defaultSource: Source | null): void
    /**
     * This is a convenience function to set a default #ESource based on
     * `extension_name`.  This only works with a subset of extension names.
     * 
     * If `extension_name` is #E_SOURCE_EXTENSION_ADDRESS_BOOK, the function
     * sets `default_source` as the default address book.  If `default_source`
     * is %NULL, the default address book is reset to the built-in address book.
     * 
     * If `extension_name` is #E_SOURCE_EXTENSION_CALENDAR, the function sets
     * `default_source` as the default calendar.  If `default_source` is %NULL,
     * the default calendar is reset to the built-in calendar.
     * 
     * If `extension_name` is #E_SOURCE_EXTENSION_MAIL_ACCOUNT, the function
     * sets `default_source` as the default mail account.  If `default_source`
     * is %NULL, the default mail account is reset to the built-in mail account.
     * 
     * If `extension_name` is #E_SOURCE_EXTENSION_MAIL_IDENTITY, the function
     * sets `default_source` as the default mail identity.  If `default_source`
     * is %NULL, the next request for the default mail identity will return
     * the mail identity named by the default mail account.
     * 
     * If `extension_name` is #E_SOURCE_EXTENSION_MEMO_LIST, the function sets
     * `default_source` as the default memo list.  If `default_source` is %NULL,
     * the default memo list is reset to the built-in memo list.
     * 
     * If `extension_name` is #E_SOURCE_EXTENSION_TASK_LIST, the function sets
     * `default_source` as the default task list.  If `default_source` is %NULL,
     * the default task list is reset to the built-in task list.
     * 
     * For all other values of `extension_name,` the function does nothing.
     * @param extensionName an extension name
     * @param defaultSource an #ESource, or %NULL
     */
    setDefaultForExtensionName(extensionName: string, defaultSource: Source | null): void
    /**
     * Sets `default_source` as the default mail account.  If `default_source`
     * is %NULL, the default mail account is reset to the built-in mail account.
     * This setting will persist across sessions until changed.
     * @param defaultSource a mail account #ESource, or %NULL
     */
    setDefaultMailAccount(defaultSource: Source | null): void
    /**
     * Sets `default_source` as the default mail identity.  If `default_source`
     * is %NULL, the next request for the default mail identity will use the
     * fallbacks described in e_source_registry_ref_default_mail_identity().
     * @param defaultSource a mail identity #ESource, or %NULL
     */
    setDefaultMailIdentity(defaultSource: Source | null): void
    /**
     * Sets `default_source` as the default memo list.  If `default_source`
     * is %NULL, the default memo list is reset to the built-in memo list.
     * This setting will persist across sessions until changed.
     * @param defaultSource a memo list #ESource, or %NULL
     */
    setDefaultMemoList(defaultSource: Source | null): void
    /**
     * Sets `default_source` as the default task list.  If `default_source`
     * is %NULL, the default task list is reset to the built-in task list.
     * This setting will persist across sessions until changed.
     * @param defaultSource a task list #ESource, or %NULL
     */
    setDefaultTaskList(defaultSource: Source | null): void

    // Own signals of EDataServer-1.2.EDataServer.SourceRegistry

    connect(sigName: "credentials-required", callback: SourceRegistry_CredentialsRequiredSignalCallback): number
    on(sigName: "credentials-required", callback: SourceRegistry_CredentialsRequiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "credentials-required", callback: SourceRegistry_CredentialsRequiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "credentials-required", callback: SourceRegistry_CredentialsRequiredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "credentials-required", reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error, ...args: any[]): void
    connect(sigName: "source-added", callback: SourceRegistry_SourceAddedSignalCallback): number
    on(sigName: "source-added", callback: SourceRegistry_SourceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-added", callback: SourceRegistry_SourceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-added", callback: SourceRegistry_SourceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-added", ...args: any[]): void
    connect(sigName: "source-changed", callback: SourceRegistry_SourceChangedSignalCallback): number
    on(sigName: "source-changed", callback: SourceRegistry_SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: SourceRegistry_SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: SourceRegistry_SourceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-changed", ...args: any[]): void
    connect(sigName: "source-disabled", callback: SourceRegistry_SourceDisabledSignalCallback): number
    on(sigName: "source-disabled", callback: SourceRegistry_SourceDisabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-disabled", callback: SourceRegistry_SourceDisabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-disabled", callback: SourceRegistry_SourceDisabledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-disabled", ...args: any[]): void
    connect(sigName: "source-enabled", callback: SourceRegistry_SourceEnabledSignalCallback): number
    on(sigName: "source-enabled", callback: SourceRegistry_SourceEnabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-enabled", callback: SourceRegistry_SourceEnabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-enabled", callback: SourceRegistry_SourceEnabledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-enabled", ...args: any[]): void
    connect(sigName: "source-removed", callback: SourceRegistry_SourceRemovedSignalCallback): number
    on(sigName: "source-removed", callback: SourceRegistry_SourceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-removed", callback: SourceRegistry_SourceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-removed", callback: SourceRegistry_SourceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-removed", ...args: any[]): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceRegistry

    connect(sigName: "notify::default-address-book", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-address-book", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-address-book", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-address-book", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-address-book", ...args: any[]): void
    connect(sigName: "notify::default-calendar", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-calendar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-calendar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-calendar", ...args: any[]): void
    connect(sigName: "notify::default-mail-account", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-mail-account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-mail-account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-mail-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-mail-account", ...args: any[]): void
    connect(sigName: "notify::default-mail-identity", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-mail-identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-mail-identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-mail-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-mail-identity", ...args: any[]): void
    connect(sigName: "notify::default-memo-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-memo-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-memo-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-memo-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-memo-list", ...args: any[]): void
    connect(sigName: "notify::default-task-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-task-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-task-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-task-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-task-list", ...args: any[]): void
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
class SourceRegistry extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistry

    static name: string
    static $gtype: GObject.GType<SourceRegistry>

    // Constructors of EDataServer-1.2.EDataServer.SourceRegistry

    constructor(config?: SourceRegistry_ConstructProps) 
    /**
     * Finishes the operation started with e_source_registry_new_finish().
     * If an error occurs in connecting to the D-Bus service, the function
     * sets `error` and returns %NULL.
     * @constructor 
     * @param result a #GAsyncResult
     */
    static newFinish(result: Gio.AsyncResult): SourceRegistry
    /**
     * Creates a new #ESourceRegistry front-end for the registry D-Bus service.
     * If an error occurs in connecting to the D-Bus service, the function sets
     * `error` and returns %NULL.
     * 
     * Since 3.12 a singleton will be returned.  No strong reference is kept
     * internally, so it is the caller's responsibility to keep one.
     * @constructor 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    static newSync(cancellable: Gio.Cancellable | null): SourceRegistry
    _init(config?: SourceRegistry_ConstructProps): void
    /**
     * Asynchronously creates a new #ESourceRegistry front-end for the registry
     * D-Bus service.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_registry_new_finish() to get the result of the operation.
     * 
     * Since 3.12 a singleton will be returned.  No strong reference is kept
     * internally, so it is the caller's responsibility to keep one.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    static new(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static debugEnabled(): boolean
    /**
     * Convenience function to free a #GNode tree of registered
     * sources created by e_source_registry_build_display_tree().
     * @param displayTree a tree of sources, arranged for display
     */
    static freeDisplayTree(displayTree: GLib.Node): void
}

interface SourceRegistryWatcher_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    /**
     * Optional extension name, to consider sources with only.
     * It can be %NULL, to check for all sources. This is
     * a complementary filter to #ESourceRegistryWatcher::filter
     * signal.
     */
    extensionName?: string | null
    /**
     * The #ESourceRegistry manages #ESource instances.
     */
    registry?: SourceRegistry | null
}

/**
 * Signal callback interface for `appeared`
 */
interface SourceRegistryWatcher_AppearedSignalCallback {
    (source: Source): void
}

/**
 * Signal callback interface for `disappeared`
 */
interface SourceRegistryWatcher_DisappearedSignalCallback {
    (source: Source): void
}

/**
 * Signal callback interface for `filter`
 */
interface SourceRegistryWatcher_FilterSignalCallback {
    (source: Source): boolean
}

interface SourceRegistryWatcher {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    /**
     * Optional extension name, to consider sources with only.
     * It can be %NULL, to check for all sources. This is
     * a complementary filter to #ESourceRegistryWatcher::filter
     * signal.
     */
    readonly extensionName: string
    /**
     * The #ESourceRegistry manages #ESource instances.
     */
    readonly registry: SourceRegistry

    // Owm methods of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    getExtensionName(): string | null
    /**
     * Returns the #ESourceRegistry passed to e_source_registry_watcher_new().
     */
    getRegistry(): SourceRegistry
    /**
     * Reclaims all available sources satisfying the #ESourceRegistryWatcher::filter
     * signal. It doesn't notify about disappeared sources, it notifies only
     * on those appeared.
     */
    reclaim(): void

    // Own signals of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    connect(sigName: "appeared", callback: SourceRegistryWatcher_AppearedSignalCallback): number
    on(sigName: "appeared", callback: SourceRegistryWatcher_AppearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "appeared", callback: SourceRegistryWatcher_AppearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "appeared", callback: SourceRegistryWatcher_AppearedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "appeared", ...args: any[]): void
    connect(sigName: "disappeared", callback: SourceRegistryWatcher_DisappearedSignalCallback): number
    on(sigName: "disappeared", callback: SourceRegistryWatcher_DisappearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disappeared", callback: SourceRegistryWatcher_DisappearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disappeared", callback: SourceRegistryWatcher_DisappearedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disappeared", ...args: any[]): void
    connect(sigName: "filter", callback: SourceRegistryWatcher_FilterSignalCallback): number
    on(sigName: "filter", callback: SourceRegistryWatcher_FilterSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "filter", callback: SourceRegistryWatcher_FilterSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "filter", callback: SourceRegistryWatcher_FilterSignalCallback): NodeJS.EventEmitter
    emit(sigName: "filter", ...args: any[]): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    connect(sigName: "notify::extension-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::extension-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extension-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extension-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extension-name", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
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
class SourceRegistryWatcher extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    static name: string
    static $gtype: GObject.GType<SourceRegistryWatcher>

    // Constructors of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    constructor(config?: SourceRegistryWatcher_ConstructProps) 
    /**
     * Creates a new #ESourceRegistryWatcher instance.
     * 
     * The `extension_name` can be used as a complementary filter
     * to #ESourceRegistryWatcher::filter signal.
     * @constructor 
     * @param registry an #ESourceRegistry
     * @param extensionName optional extension name to filter sources with, or %NULL
     */
    constructor(registry: SourceRegistry, extensionName: string | null) 
    /**
     * Creates a new #ESourceRegistryWatcher instance.
     * 
     * The `extension_name` can be used as a complementary filter
     * to #ESourceRegistryWatcher::filter signal.
     * @constructor 
     * @param registry an #ESourceRegistry
     * @param extensionName optional extension name to filter sources with, or %NULL
     */
    static new(registry: SourceRegistry, extensionName: string | null): SourceRegistryWatcher
    _init(config?: SourceRegistryWatcher_ConstructProps): void
}

interface SourceResource_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceResource

    identity?: string | null
}

interface SourceResource {

    // Own properties of EDataServer-1.2.EDataServer.SourceResource

    identity: string

    // Owm methods of EDataServer-1.2.EDataServer.SourceResource

    /**
     * Thread-safe variation of e_source_resource_get_identity().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupIdentity(): string | null
    /**
     * Returns the server-assigned identity of the remote resource associated
     * with the #ESource to which `extension` belongs.
     */
    getIdentity(): string | null
    /**
     * Sets the server-assigned identity of the remote resource associated with
     * the #ESource to which `extension` belongs.
     * 
     * The internal copy of `identity` is automatically stripped of leading and
     * trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param identity the identity of a remote resource
     */
    setIdentity(identity: string | null): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceResource

    connect(sigName: "notify::identity", callback: (...args: any[]) => void): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::identity", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceResource extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceResource

    static name: string
    static $gtype: GObject.GType<SourceResource>

    // Constructors of EDataServer-1.2.EDataServer.SourceResource

    constructor(config?: SourceResource_ConstructProps) 
    _init(config?: SourceResource_ConstructProps): void
}

interface SourceRevisionGuards_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceRevisionGuards

    enabled?: boolean | null
}

interface SourceRevisionGuards {

    // Own properties of EDataServer-1.2.EDataServer.SourceRevisionGuards

    enabled: boolean

    // Owm methods of EDataServer-1.2.EDataServer.SourceRevisionGuards

    /**
     * Checks whether revision guards for the given #ESource are enabled.
     */
    getEnabled(): boolean
    /**
     * Enables or disables the revision guards for a given #ESource.
     * 
     * Revision guards are disabled by default.
     * @param enabled Whether to enable or disable the revision guards.
     */
    setEnabled(enabled: boolean): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceRevisionGuards

    connect(sigName: "notify::enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceRevisionGuards extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceRevisionGuards

    static name: string
    static $gtype: GObject.GType<SourceRevisionGuards>

    // Constructors of EDataServer-1.2.EDataServer.SourceRevisionGuards

    constructor(config?: SourceRevisionGuards_ConstructProps) 
    _init(config?: SourceRevisionGuards_ConstructProps): void
}

interface SourceSMIME_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceSMIME

    encryptByDefault?: boolean | null
    encryptToSelf?: boolean | null
    encryptionCertificate?: string | null
    signByDefault?: boolean | null
    signingAlgorithm?: string | null
    signingCertificate?: string | null
}

interface SourceSMIME {

    // Own properties of EDataServer-1.2.EDataServer.SourceSMIME

    encryptByDefault: boolean
    encryptToSelf: boolean
    encryptionCertificate: string
    signByDefault: boolean
    signingAlgorithm: string
    signingCertificate: string

    // Owm methods of EDataServer-1.2.EDataServer.SourceSMIME

    /**
     * Thread-safe variation of e_source_smime_get_encryption_certificate().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupEncryptionCertificate(): string | null
    /**
     * Thread-safe variation of e_source_smime_get_signing_algorithm().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupSigningAlgorithm(): string | null
    /**
     * Thread-safe variation of e_source_smime_get_signing_certificate().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupSigningCertificate(): string | null
    /**
     * Returns whether to encrypt outgoing messages by default using S/MIME
     * software such as Mozilla Network Security Services (NSS).
     */
    getEncryptByDefault(): boolean
    /**
     * Returns whether to "encrypt-to-self" when sending encrypted messages.
     */
    getEncryptToSelf(): boolean
    /**
     * Returns the S/MIME certificate name used to encrypt messages.
     */
    getEncryptionCertificate(): string | null
    /**
     * Returns whether to digitally sign outgoing messages by default using
     * S/MIME software such as Mozilla Network Security Services (NSS).
     */
    getSignByDefault(): boolean
    /**
     * Returns the name of the hash algorithm used to digitally sign outgoing
     * messages.
     */
    getSigningAlgorithm(): string | null
    /**
     * Returns the S/MIME certificate name used to sign messages.
     */
    getSigningCertificate(): string | null
    /**
     * Sets whether to encrypt outgoing messages by default using S/MIME
     * software such as Mozilla Network Security Services (NSS).
     * @param encryptByDefault whether to encrypt outgoing messages by default
     */
    setEncryptByDefault(encryptByDefault: boolean): void
    /**
     * Sets whether to "encrypt-to-self" when sending encrypted messages.
     * @param encryptToSelf whether to "encrypt-to-self"
     */
    setEncryptToSelf(encryptToSelf: boolean): void
    /**
     * Sets the certificate name used to encrypt messages.
     * 
     * If the `encryption_certificate` string is empty, %NULL is set instead.
     * @param encryptionCertificate the certificate name used to encrypt                          messages, or %NULL
     */
    setEncryptionCertificate(encryptionCertificate: string | null): void
    /**
     * Sets whether to digitally sign outgoing messages by default using
     * S/MIME software such as Mozilla Network Security Services (NSS).
     * @param signByDefault whether to sign outgoing messages by default
     */
    setSignByDefault(signByDefault: boolean): void
    /**
     * Sets the name of the hash algorithm used to digitally sign outgoing
     * messages.
     * 
     * The internal copy of `signing_algorithm` is automatically stripped of
     * leading and trailing whitespace.  If the resulting string is empty,
     * %NULL is set instead.
     * @param signingAlgorithm the signing algorithm for outgoing                     messages, or %NULL
     */
    setSigningAlgorithm(signingAlgorithm: string | null): void
    /**
     * Sets the S/MIME certificate name used to sign messages.
     * 
     * If the `signing_certificate` string is empty, %NULL is set instead.
     * @param signingCertificate the certificate name used to sign                       messages, or %NULL
     */
    setSigningCertificate(signingCertificate: string | null): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceSMIME

    connect(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::encrypt-by-default", ...args: any[]): void
    connect(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void): number
    on(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::encrypt-to-self", ...args: any[]): void
    connect(sigName: "notify::encryption-certificate", callback: (...args: any[]) => void): number
    on(sigName: "notify::encryption-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::encryption-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::encryption-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::encryption-certificate", ...args: any[]): void
    connect(sigName: "notify::sign-by-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::sign-by-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sign-by-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sign-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sign-by-default", ...args: any[]): void
    connect(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void): number
    on(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::signing-algorithm", ...args: any[]): void
    connect(sigName: "notify::signing-certificate", callback: (...args: any[]) => void): number
    on(sigName: "notify::signing-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::signing-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::signing-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::signing-certificate", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceSMIME extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceSMIME

    static name: string
    static $gtype: GObject.GType<SourceSMIME>

    // Constructors of EDataServer-1.2.EDataServer.SourceSMIME

    constructor(config?: SourceSMIME_ConstructProps) 
    _init(config?: SourceSMIME_ConstructProps): void
}

interface SourceSecurity_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceSecurity

    method?: string | null
    secure?: boolean | null
}

interface SourceSecurity {

    // Own properties of EDataServer-1.2.EDataServer.SourceSecurity

    method: string
    secure: boolean

    // Owm methods of EDataServer-1.2.EDataServer.SourceSecurity

    /**
     * Thread-safe variation of e_source_security_get_method().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupMethod(): string
    /**
     * Returns the method used to establish a secure network connection to a
     * remote account.  There are no pre-defined method names; backends are
     * free to set this however they wish.  If a secure connection is not
     * desired, the convention is to set #ESourceSecurity:method to "none".
     */
    getMethod(): string
    /**
     * This is a convenience function which returns whether a secure network
     * connection is desired, regardless of the method used.  This relies on
     * the convention of setting #ESourceSecurity:method to "none" when a
     * secure network connection is <emphasis>not</emphasis> desired.
     */
    getSecure(): boolean
    /**
     * Sets the method used to establish a secure network connection to a
     * remote account.  There are no pre-defined method names; backends are
     * free to set this however they wish.  If a secure connection is not
     * desired, the convention is to set #ESourceSecurity:method to "none".
     * In keeping with that convention, #ESourceSecurity:method will be set
     * to "none" if `method` is %NULL or an empty string.
     * @param method security method, or %NULL
     */
    setMethod(method: string | null): void
    /**
     * This function provides a simpler way to set #ESourceSecurity:method
     * when using a secure network connection is a yes or no option and the
     * exact method name is unimportant.  If `secure` is %FALSE, the
     * #ESourceSecurity:method property is set to "none".  If `secure` is
     * %TRUE, the function assumes the backend will use Transport Layer
     * Security and sets the #ESourceSecurity:method property to "tls".
     * @param secure whether a secure network connection is desired
     */
    setSecure(secure: boolean): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceSecurity

    connect(sigName: "notify::method", callback: (...args: any[]) => void): number
    on(sigName: "notify::method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::secure", callback: (...args: any[]) => void): number
    on(sigName: "notify::secure", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::secure", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::secure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::secure", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceSecurity extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceSecurity

    static name: string
    static $gtype: GObject.GType<SourceSecurity>

    // Constructors of EDataServer-1.2.EDataServer.SourceSecurity

    constructor(config?: SourceSecurity_ConstructProps) 
    _init(config?: SourceSecurity_ConstructProps): void
}

interface SourceSelectable_ConstructProps extends SourceBackend_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceSelectable

    color?: string | null
    order?: number | null
    selected?: boolean | null
}

interface SourceSelectable {

    // Own properties of EDataServer-1.2.EDataServer.SourceSelectable

    color: string
    order: number
    selected: boolean

    // Owm methods of EDataServer-1.2.EDataServer.SourceSelectable

    /**
     * Thread-safe variation of e_source_selectable_get_color().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupColor(): string | null
    /**
     * Returns the color specification for the #ESource to which `extension`
     * belongs.  A colored block is often displayed next to the data source's
     * display name in user interfaces.
     */
    getColor(): string | null
    /**
     * Returns the preferred sorting order for the #ESource
     * to which `extension` belongs. Default is 0.
     */
    getOrder(): number
    /**
     * Returns the selected state of the #ESource to which `extension` belongs.
     * The selected state is often represented as a checkbox next to the data
     * source's display name in user interfaces.
     */
    getSelected(): boolean
    /**
     * Sets the color specification for the #ESource to which `extension`
     * belongs.  A colored block is often displayed next to the data source's
     * display name in user interfaces.
     * 
     * The internal copy of `color` is automatically stripped of leading and
     * trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param color a color specification, or %NULL
     */
    setColor(color: string | null): void
    /**
     * Sets the sorting order for the #ESource to which `extension` belongs.
     * @param order the sorting order
     */
    setOrder(order: number): void
    /**
     * Sets the selected state for the #ESource to which `extension` belongs.
     * The selected state is often represented as a checkbox next to the data
     * source's display name in user interfaces.
     * @param selected selected state
     */
    setSelected(selected: boolean): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceSelectable

    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::order", callback: (...args: any[]) => void): number
    on(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::order", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::backend-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-name", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceSelectable extends SourceBackend {

    // Own properties of EDataServer-1.2.EDataServer.SourceSelectable

    static name: string
    static $gtype: GObject.GType<SourceSelectable>

    // Constructors of EDataServer-1.2.EDataServer.SourceSelectable

    constructor(config?: SourceSelectable_ConstructProps) 
    _init(config?: SourceSelectable_ConstructProps): void
}

interface SourceTaskList_ConstructProps extends SourceSelectable_ConstructProps {
}

interface SourceTaskList {

    // Class property signals of EDataServer-1.2.EDataServer.SourceTaskList

    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::order", callback: (...args: any[]) => void): number
    on(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::order", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::backend-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-name", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceTaskList extends SourceSelectable {

    // Own properties of EDataServer-1.2.EDataServer.SourceTaskList

    static name: string
    static $gtype: GObject.GType<SourceTaskList>

    // Constructors of EDataServer-1.2.EDataServer.SourceTaskList

    constructor(config?: SourceTaskList_ConstructProps) 
    _init(config?: SourceTaskList_ConstructProps): void
}

interface SourceUoa_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceUoa

    accountId?: number | null
}

interface SourceUoa {

    // Own properties of EDataServer-1.2.EDataServer.SourceUoa

    accountId: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceUoa

    /**
     * Returns the numeric identifier of the Ubuntu Online Account associated
     * with the #ESource to which `extension` belongs.
     */
    getAccountId(): number
    /**
     * Sets the numeric identifier of the Ubuntu Online Account associated
     * with the #ESource to which `extension` belongs.
     * @param accountId the associated Ubuntu Online Account ID
     */
    setAccountId(accountId: number): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceUoa

    connect(sigName: "notify::account-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::account-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account-id", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceUoa extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceUoa

    static name: string
    static $gtype: GObject.GType<SourceUoa>

    // Constructors of EDataServer-1.2.EDataServer.SourceUoa

    constructor(config?: SourceUoa_ConstructProps) 
    _init(config?: SourceUoa_ConstructProps): void
}

interface SourceWeather_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceWeather

    location?: string | null
    units?: SourceWeatherUnits | null
}

interface SourceWeather {

    // Own properties of EDataServer-1.2.EDataServer.SourceWeather

    location: string
    units: SourceWeatherUnits

    // Owm methods of EDataServer-1.2.EDataServer.SourceWeather

    dupLocation(): string
    getLocation(): string
    getUnits(): SourceWeatherUnits
    setLocation(location: string): void
    setUnits(units: SourceWeatherUnits): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceWeather

    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::units", callback: (...args: any[]) => void): number
    on(sigName: "notify::units", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::units", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::units", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::units", ...args: any[]): void
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
}

class SourceWeather extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceWeather

    static name: string
    static $gtype: GObject.GType<SourceWeather>

    // Constructors of EDataServer-1.2.EDataServer.SourceWeather

    constructor(config?: SourceWeather_ConstructProps) 
    _init(config?: SourceWeather_ConstructProps): void
}

interface SourceWebDAVNotes_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceWebDAVNotes

    defaultExt?: string | null
}

interface SourceWebDAVNotes {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebDAVNotes

    defaultExt: string

    // Owm methods of EDataServer-1.2.EDataServer.SourceWebDAVNotes

    /**
     * Thread-safe variation of e_source_webdav_notes_get_default_ext().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupDefaultExt(): string | null
    /**
     * Returns the default file extension for new notes.
     */
    getDefaultExt(): string | null
    /**
     * Sets the default file extension for new notes.
     * 
     * The internal copy of `default_ext` is automatically stripped of leading and
     * trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param defaultExt a default file extension, or %NULL
     */
    setDefaultExt(defaultExt: string | null): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceWebDAVNotes

    connect(sigName: "notify::default-ext", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-ext", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-ext", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-ext", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-ext", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceWebDAVNotes extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebDAVNotes

    static name: string
    static $gtype: GObject.GType<SourceWebDAVNotes>

    // Constructors of EDataServer-1.2.EDataServer.SourceWebDAVNotes

    constructor(config?: SourceWebDAVNotes_ConstructProps) 
    _init(config?: SourceWebDAVNotes_ConstructProps): void
}

interface SourceWebdav_ConstructProps extends SourceExtension_ConstructProps {

    // Own constructor properties of EDataServer-1.2.EDataServer.SourceWebdav

    avoidIfmatch?: boolean | null
    calendarAutoSchedule?: boolean | null
    color?: string | null
    displayName?: string | null
    emailAddress?: string | null
    order?: number | null
    resourcePath?: string | null
    resourceQuery?: string | null
    soupUri?: Soup.URI | null
    sslTrust?: string | null
}

interface SourceWebdav {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebdav

    avoidIfmatch: boolean
    calendarAutoSchedule: boolean
    color: string
    displayName: string
    emailAddress: string
    order: number
    resourcePath: string
    resourceQuery: string
    soupUri: Soup.URI
    sslTrust: string

    // Owm methods of EDataServer-1.2.EDataServer.SourceWebdav

    /**
     * Thread-safe variation of e_source_webdav_get_color().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupColor(): string | null
    /**
     * Thread-safe variation of e_source_webdav_get_display_name().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupDisplayName(): string | null
    /**
     * Thread-safe variation of e_source_webdav_get_email_address().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupEmailAddress(): string | null
    /**
     * Thread-safe variation of e_source_webdav_get_resource_path().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupResourcePath(): string | null
    /**
     * Thread-safe variation of e_source_webdav_get_resource_query().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupResourceQuery(): string | null
    /**
     * This is a convenience function which returns a newly-allocated
     * #SoupURI, its contents assembled from the #ESourceAuthentication
     * extension, the #ESourceSecurity extension, and `extension` itself.
     * Free the returned #SoupURI with soup_uri_free().
     */
    dupSoupUri(): Soup.URI
    /**
     * Thread-safe variation of e_source_webdav_get_ssl_trust().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupSslTrust(): string | null
    /**
     * This setting works around a
     * <ulink url="https://issues.apache.org/bugzilla/show_bug.cgi?id=38034">
     * bug</ulink> in older Apache mod_dav versions.
     * 
     * <note>
     *   <para>
     *     We may deprecate this once Apache 2.2.8 or newer becomes
     *     sufficiently ubiquitous, or we figure out a way to detect
     *     and work around the bug automatically.
     *   </para>
     * </note>
     */
    getAvoidIfmatch(): boolean
    /**
     * FIXME Document me!
     */
    getCalendarAutoSchedule(): boolean
    /**
     * Returns the last known color of a WebDAV resource as provided by the server.
     */
    getColor(): string | null
    /**
     * Returns the last known display name of a WebDAV resource, which may
     * differ from the #ESource:display-name property of the #ESource to which
     * `extension` belongs.
     */
    getDisplayName(): string | null
    /**
     * Returns the user's email address which can be passed to a CalDAV server
     * if the user wishes to receive scheduling messages.
     */
    getEmailAddress(): string | null
    getOrder(): number
    /**
     * Returns the absolute path to a resource on a WebDAV server.
     */
    getResourcePath(): string | null
    /**
     * Returns the URI query required to access a resource on a WebDAV server.
     * 
     * This is typically used when the #ESourceWebdav:resource-path points not
     * to the resource itself but to a web program that generates the resource
     * content on-the-fly.  The #ESourceWebdav:resource-query holds the input
     * values for the program.
     */
    getResourceQuery(): string | null
    /**
     * Returns an SSL/TLS certificate trust for the `extension`.
     * The value encodes three parameters, divided by a pipe '|',
     * the first is users preference, can be one of "reject", "accept",
     * "temporary-reject" and "temporary-accept". The second is a host
     * name for which the trust was set. Finally the last is a SHA256
     * hash of the certificate. This is not meant to be changed by a caller,
     * it is supposed to be manipulated with e_source_webdav_update_ssl_trust()
     * and e_source_webdav_verify_ssl_trust().
     */
    getSslTrust(): string | null
    getSslTrustResponse(): TrustPromptResponse
    /**
     * This setting works around a
     * <ulink url="https://issues.apache.org/bugzilla/show_bug.cgi?id=38034">
     * bug</ulink> in older Apache mod_dav versions.
     * 
     * <note>
     *   <para>
     *     We may deprecate this once Apache 2.2.8 or newer becomes
     *     sufficiently ubiquitous, or we figure out a way to detect
     *     and work around the bug automatically.
     *   </para>
     * </note>
     * @param avoidIfmatch whether the WebDAV server is known to exhibit the bug
     */
    setAvoidIfmatch(avoidIfmatch: boolean): void
    /**
     * FIXME Document me!
     * @param calendarAutoSchedule whether the server supports the "calendar-auto-schedule" feature of CalDAV
     */
    setCalendarAutoSchedule(calendarAutoSchedule: boolean): void
    /**
     * Updates the last known color of a WebDAV resource, as provided by the server.
     * 
     * The internal copy of `color` is automatically stripped of leading
     * and trailing whitespace. If the resulting string is empty, %NULL is set
     * instead.
     * @param color the color of the WebDAV resource, or %NULL
     */
    setColor(color: string | null): void
    /**
     * Updates the last known display name of a WebDAV resource, which may
     * differ from the #ESource:display-name property of the #ESource to which
     * `extension` belongs.
     * 
     * The internal copy of `display_name` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param displayName the display name of the WebDAV resource,                or %NULL
     */
    setDisplayName(displayName: string | null): void
    /**
     * Sets the user's email address which can be passed to a CalDAV server if
     * the user wishes to receive scheduling messages.
     * 
     * The internal copy of `email_address` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param emailAddress the user's email address, or %NULL
     */
    setEmailAddress(emailAddress: string | null): void
    /**
     * Set the sorting order of the resource.
     * @param order a sorting order
     */
    setOrder(order: number): void
    /**
     * Sets the absolute path to a resource on a WebDAV server.
     * 
     * The internal copy of `resource_path` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param resourcePath the absolute path to a WebDAV resource,                 or %NULL
     */
    setResourcePath(resourcePath: string | null): void
    /**
     * Sets the URI query required to access a resource on a WebDAV server.
     * 
     * This is typically used when the #ESourceWebdav:resource-path points not
     * to the resource itself but to a web program that generates the resource
     * content on-the-fly.  The #ESourceWebdav:resource-query holds the input
     * values for the program.
     * 
     * The internal copy of `resource_query` is automatically stripped of leading
     * and trailing whitespace.  If the resulting string is empty, %NULL is set
     * instead.
     * @param resourceQuery the query to access a WebDAV resource,                  or %NULL
     */
    setResourceQuery(resourceQuery: string | null): void
    /**
     * This is a convenience function which propagates the components of
     * `uri` to the #ESourceAuthentication extension, the #ESourceSecurity
     * extension, and `extension` itself.  (The "fragment" component of
     * `uri` is ignored.)
     * @param soupUri a #SoupURI
     */
    setSoupUri(soupUri: Soup.URI): void
    /**
     * Sets the SSL/TLS certificate trust. See e_source_webdav_get_ssl_trust()
     * for more infomation about its content and how to use it.
     * @param sslTrust the ssl_trust to store, or %NULL to unset
     */
    setSslTrust(sslTrust: string | null): void
    /**
     * Set the SSL trust response, as #ETrustPromptResponse, while keeping
     * the certificate and host information as before. The function does
     * nothing, when none SSL trust is set or when %E_TRUST_PROMPT_RESPONSE_UNKNOWN
     * is used as the `response`.
     * @param response an #ETrustPromptResponse to set
     */
    setSslTrustResponse(response: TrustPromptResponse): void
    /**
     * Unsets temporary trust set on this `extension,` but keeps
     * it as is for other values.
     */
    unsetTemporarySslTrust(): void
    /**
     * Updates user's response from a trust prompt, thus it is re-used the next
     * time it'll be needed. An #E_TRUST_PROMPT_RESPONSE_UNKNOWN is treated as
     * a temporary reject, which means the user will be asked again.
     * @param host a host name to store the certificate for
     * @param cert the invalid certificate of the connection over which `host` is about        to be sent
     * @param response user's response from a trust prompt for `cert`
     */
    updateSslTrust(host: string, cert: Gio.TlsCertificate, response: TrustPromptResponse): void
    /**
     * Verifies SSL/TLS trust for the given `host` and `cert,` as previously stored in the `extension`
     * with e_source_webdav_update_ssl_trust().
     * @param host a host name to store the certificate for
     * @param cert the invalid certificate of the connection over which `host` is about        to be sent
     * @param certErrors a bit-or of #GTlsCertificateFlags describing the reason   for the `cert` to be considered invalid
     */
    verifySslTrust(host: string, cert: Gio.TlsCertificate, certErrors: Gio.TlsCertificateFlags): TrustPromptResponse

    // Class property signals of EDataServer-1.2.EDataServer.SourceWebdav

    connect(sigName: "notify::avoid-ifmatch", callback: (...args: any[]) => void): number
    on(sigName: "notify::avoid-ifmatch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::avoid-ifmatch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::avoid-ifmatch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::avoid-ifmatch", ...args: any[]): void
    connect(sigName: "notify::calendar-auto-schedule", callback: (...args: any[]) => void): number
    on(sigName: "notify::calendar-auto-schedule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::calendar-auto-schedule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::calendar-auto-schedule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::calendar-auto-schedule", ...args: any[]): void
    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::email-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::order", callback: (...args: any[]) => void): number
    on(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::order", ...args: any[]): void
    connect(sigName: "notify::resource-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-path", ...args: any[]): void
    connect(sigName: "notify::resource-query", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-query", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-query", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-query", ...args: any[]): void
    connect(sigName: "notify::soup-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::soup-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::soup-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::soup-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::soup-uri", ...args: any[]): void
    connect(sigName: "notify::ssl-trust", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-trust", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-trust", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-trust", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-trust", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceWebdav extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebdav

    static name: string
    static $gtype: GObject.GType<SourceWebdav>

    // Constructors of EDataServer-1.2.EDataServer.SourceWebdav

    constructor(config?: SourceWebdav_ConstructProps) 
    _init(config?: SourceWebdav_ConstructProps): void
}

interface WebDAVSession_ConstructProps extends SoupSession_ConstructProps {
}

interface WebDAVSession {

    // Owm methods of EDataServer-1.2.EDataServer.WebDAVSession

    /**
     * Issues ACL request on the provided `uri,` or, in case it's %NULL, on the URI
     * defined in associated #ESource.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param xml the request itself, as an #EXmlDocument, the root element should be DAV:acl
     * @param cancellable optional #GCancellable object, or %NULL
     */
    aclSync(uri: string | null, xml: XmlDocument, cancellable: Gio.Cancellable | null): boolean
    /**
     * Copies a resource identified by `source_uri` to `destination_uri` on the server.
     * The `source_uri` can reference also collections, in which case the `depth` influences
     * whether only the collection itself is copied (%E_WEBDAV_DEPTH_THIS) or whether
     * the collection with all its children is copied (%E_WEBDAV_DEPTH_INFINITY).
     * @param sourceUri URI of the resource or collection to copy
     * @param destinationUri URI of the destination
     * @param depth requested depth, can be one of %E_WEBDAV_DEPTH_THIS or %E_WEBDAV_DEPTH_INFINITY
     * @param canOverwrite whether can overwrite `destination_uri,` when it exists
     * @param cancellable optional #GCancellable object, or %NULL
     */
    copySync(sourceUri: string, destinationUri: string, depth: string, canOverwrite: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Deletes a resource identified by `uri` on the server. The URI can
     * reference a collection, in which case `depth` should be %E_WEBDAV_DEPTH_INFINITY.
     * Use `depth` %E_WEBDAV_DEPTH_THIS when deleting a regular resource, or %NULL,
     * to let the server use default Depth.
     * 
     * The `etag` argument is used to avoid clashes when overwriting existing resources.
     * Use %NULL `etag` when deleting collection resources or to force the deletion,
     * otherwise provide a valid ETag of a non-collection resource to verify that
     * the version requested to delete is the same as on the server.
     * 
     * Note that the actual usage of `etag` is also influenced by #ESourceWebdav:avoid-ifmatch
     * property of the associated #ESource.
     * @param uri URI of the resource to delete
     * @param depth optional requested depth, can be one of %E_WEBDAV_DEPTH_THIS or %E_WEBDAV_DEPTH_INFINITY, or %NULL
     * @param etag an optional ETag of the resource, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    deleteSync(uri: string, depth: string | null, etag: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Converts possibly path-only `href` into a full URI under the `request_uri`.
     * When the `request_uri` is %NULL, the URI defined in associated #ESource is
     * used instead, taken from the #ESourceWebdav extension, if defined.
     * 
     * Free the returned pointer with g_free(), when no longer needed.
     * @param requestUri a #SoupURI to which the `href` belongs, or %NULL
     * @param href a possibly path-only href
     */
    ensureFullUri(requestUri: Soup.URI | null, href: string): string
    /**
     * Gets Access Control List (ACL) restrictions for the `uri,` or, in case it's %NULL,
     * for the URI defined in associated #ESource. The `out_principal_kind` is valid only
     * if the `out_restrictions` contains #E_WEBDAV_ACL_RESTRICTION_REQUIRED_PRINCIPAL.
     * The `out_principal_hrefs` is valid only if the `out_principal_kind` is valid and when
     * it is #E_WEBDAV_ACE_PRINCIPAL_HREF.
     * 
     * Free the returned `out_principal_hrefs` with
     * g_slist_free_full (entries, g_free);
     * when no longer needed.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getAclRestrictionsSync(uri: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRestrictions */ number, /* outPrincipalKind */ WebDAVACEPrincipalKind, /* outPrincipalHrefs */ string[] ]
    /**
     * Gets Access Control List (ACL) for the `uri,` or, in case it's %NULL, for the URI
     * defined in associated #ESource.
     * 
     * This function doesn't read general #E_WEBDAV_ACE_PRINCIPAL_PROPERTY.
     * 
     * Free the returned `out_entries` with
     * g_slist_free_full (entries, e_webdav_access_control_entry_free);
     * when no longer needed.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getAclSync(uri: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outEntries */ WebDAVAccessControlEntry[] ]
    /**
     * Gets current user privileges for the `uri,` or, in case it's %NULL, for the URI
     * defined in associated #ESource.
     * 
     * Free the returned `out_privileges` with
     * g_slist_free_full (privileges, e_webdav_privilege_free);
     * when no longer needed.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getCurrentUserPrivilegeSetSync(uri: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPrivileges */ WebDAVPrivilege[] ]
    /**
     * Reads a resource identified by `uri` from the server. The URI cannot
     * reference a collection.
     * 
     * The `out_bytes` is filled by actual data being read. If not %NULL, `out_length`
     * is populated with how many bytes had been read. The `out_bytes` is always
     * NUL-terminated, while this termination byte is not part of `out_length`.
     * Free the `out_bytes` with g_free(), when no longer needed.
     * 
     * Free returned pointer of `out_href` and `out_etag,` if not %NULL, with g_free(),
     * when no longer needed.
     * 
     * To read large data use e_webdav_session_get_sync() instead.
     * @param uri URI of the resource to read
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getDataSync(uri: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHref */ string | null, /* outEtag */ string | null, /* outBytes */ string, /* outLength */ number | null ]
    /**
     * Returns last DAV error code as returned by the server. Each recognized code
     * is enclosed in "[]" in the returned string, to be able to distinguish between
     * them, in case the server returned multiple codes.
     * 
     * The string is valid until the next request is executed.
     */
    getLastDavErrorCode(): string | null
    getLastDavErrorIsPermission(): boolean
    /**
     * Gets list of principal collection href for the `uri,` or, in case it's %NULL,
     * for the URI defined in associated #ESource. The `out_principal_hrefs` are root
     * collections that contain the principals that are available on the server that
     * implements this resource.
     * 
     * Free the returned `out_principal_hrefs` with
     * g_slist_free_full (entries, g_free);
     * when no longer needed.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getPrincipalCollectionSetSync(uri: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPrincipalHrefs */ string[] ]
    /**
     * Gets supported privileges for the `uri,` or, in case it's %NULL, for the URI
     * defined in associated #ESource.
     * 
     * The root node of `out_privileges` has always %NULL data.
     * 
     * Free the returned `out_privileges` with e_webdav_session_util_free_privileges()
     * when no longer needed.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getSupportedPrivilegeSetSync(uri: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPrivileges */ GLib.Node ]
    /**
     * Reads a resource identified by `uri` from the server and writes it
     * to the `stream`. The URI cannot reference a collection.
     * 
     * Free returned pointer of `out_href` and `out_etag,` if not %NULL, with g_free(),
     * when no longer needed.
     * 
     * The e_webdav_session_get_data_sync() can be used to read the resource data
     * directly to memory.
     * @param uri URI of the resource to read
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getSync(uri: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHref */ string | null, /* outEtag */ string | null, /* outStream */ Gio.OutputStream ]
    /**
     * Issues a getctag property request for a collection identified by `uri,` or,
     * in case it's %NULL, on the URI defined in associated #ESource. The ctag is
     * a collection tag, which changes whenever the collection changes (similar
     * to etag). The getctag is an extension, thus the function can fail when
     * the server doesn't support it.
     * 
     * Free the returned `out_ctag` with g_free(), when no longer needed.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getctagSync(uri: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCtag */ string ]
    /**
     * Lists content of the `uri,` or, in case it's %NULL, of the URI defined
     * in associated #ESource, which should point to a collection. The `flags`
     * influences which properties are read for the resources.
     * 
     * The `out_resources` is in no particular order.
     * 
     * Free the returned `out_resources` with
     * g_slist_free_full (resources, e_webdav_resource_free);
     * when no longer needed.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param depth requested depth, can be one of %E_WEBDAV_DEPTH_THIS, %E_WEBDAV_DEPTH_THIS_AND_CHILDREN or %E_WEBDAV_DEPTH_INFINITY
     * @param flags a bit-or of #EWebDAVListFlags, claiming what properties to read
     * @param cancellable optional #GCancellable object, or %NULL
     */
    listSync(uri: string | null, depth: string, flags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outResources */ WebDAVResource[] ]
    /**
     * Locks a resource identified by `uri,` or, in case it's %NULL, by the URI defined
     * in associated #ESource. It obtains a write lock with the given `lock_scope`.
     * 
     * The `owner` is used to identify the lock owner. When it's an http:// or https://,
     * then it's referenced as DAV:href, otherwise the value is treated as plain text.
     * If it's %NULL, then the user name from the associated #ESource is used.
     * 
     * The `out_lock_token` can be refreshed with e_webdav_session_refresh_lock_sync().
     * Release the lock with e_webdav_session_unlock_sync().
     * Free the returned `out_lock_token` with g_free(), when no longer needed.
     * @param uri URI to lock, or %NULL to read from #ESource
     * @param lockScope an #EWebDAVLockScope to define the scope of the lock
     * @param lockTimeout timeout for the lock, in seconds, on 0 to infinity
     * @param owner optional identificator of the owner of the lock, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    lockResourceSync(uri: string | null, lockScope: WebDAVLockScope, lockTimeout: number, owner: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outLockToken */ string ]
    /**
     * Locks a resource identified by `uri,` or, in case it's %NULL, on the URI
     * defined in associated #ESource.
     * 
     * The `out_lock_token` can be refreshed with e_webdav_session_refresh_lock_sync().
     * Release the lock with e_webdav_session_unlock_sync().
     * Free the returned `out_lock_token` with g_free(), when no longer needed.
     * 
     * If provided, free the returned `out_xml_response` with xmlFreeDoc(),
     * when no longer needed.
     * @param uri URI to lock, or %NULL to read from #ESource
     * @param depth requested depth, can be one of %E_WEBDAV_DEPTH_THIS or %E_WEBDAV_DEPTH_INFINITY
     * @param lockTimeout timeout for the lock, in seconds, on 0 to infinity
     * @param xml an XML describing the lock request, with DAV:lockinfo root element
     * @param cancellable optional #GCancellable object, or %NULL
     */
    lockSync(uri: string | null, depth: string, lockTimeout: number, xml: XmlDocument, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outLockToken */ string, /* outXmlResponse */ libxml2.Doc | null ]
    /**
     * Creates a new calendar collection identified by `uri` on the server.
     * The `supports` defines what component types can be stored into
     * the created calendar collection. Only %E_WEBDAV_RESOURCE_SUPPORTS_NONE
     * and values related to iCalendar content can be used here.
     * Using %E_WEBDAV_RESOURCE_SUPPORTS_NONE means that everything is supported.
     * 
     * Note that CalDAV RFC 4791 Section 4.2 forbids to create calendar
     * resources under other calendar resources (no nested calendars
     * are allowed).
     * @param uri URI of the collection to create
     * @param displayName a human-readable display name to set, or %NULL
     * @param description a human-readable description of the calendar, or %NULL
     * @param color a color to set, in format "&num;RRGGBB", or %NULL
     * @param supports a bit-or of EWebDAVResourceSupports values
     * @param cancellable optional #GCancellable object, or %NULL
     */
    mkcalendarSync(uri: string, displayName: string | null, description: string | null, color: string | null, supports: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Creates a new address book collection identified by `uri` on the server.
     * 
     * Note that CardDAV RFC 6352 Section 5.2 forbids to create address book
     * resources under other address book resources (no nested address books
     * are allowed).
     * @param uri URI of the collection to create
     * @param displayName a human-readable display name to set, or %NULL
     * @param description a human-readable description of the address book, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    mkcolAddressbookSync(uri: string, displayName: string | null, description: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Creates a new generic collection identified by `uri` on the server.
     * To create specific collections use e_webdav_session_mkcalendar_sync()
     * or e_webdav_session_mkcol_addressbook_sync().
     * @param uri URI of the collection to create
     * @param cancellable optional #GCancellable object, or %NULL
     */
    mkcolSync(uri: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Moves a resource identified by `source_uri` to `destination_uri` on the server.
     * The `source_uri` can reference also collections.
     * @param sourceUri URI of the resource or collection to copy
     * @param destinationUri URI of the destination
     * @param canOverwrite whether can overwrite `destination_uri,` when it exists
     * @param cancellable optional #GCancellable object, or %NULL
     */
    moveSync(sourceUri: string, destinationUri: string, canOverwrite: boolean, cancellable: Gio.Cancellable | null): boolean
    newRequest(method: string, uri?: string | null): Soup.RequestHTTP

    // Overloads of newRequest

    /**
     * Creates a new #SoupRequestHTTP, similar to soup_session_request_http(),
     * but also presets request headers with "User-Agent" to be "Evolution/version"
     * and with "Connection" to be "close".
     * 
     * See also e_soup_session_new_request_uri().
     * @param method an HTTP method
     * @param uriString a URI string to use for the request
     */
    newRequest(method: string, uriString?: string): Soup.RequestHTTP
    newRequest(...args: any[]): any
    newRequest(args_or_method: any[] | string, uriString?: string): Soup.RequestHTTP | any
    /**
     * Issues OPTIONS request on the provided `uri,` or, in case it's %NULL, on the URI
     * defined in associated #ESource.
     * 
     * The `out_capabilities` contains a set of returned capabilities. Some known are
     * defined as E_WEBDAV_CAPABILITY_CLASS_1, and so on. The 'value' of the #GHashTable
     * doesn't have any particular meaning and the strings are compared case insensitively.
     * Free the hash table with g_hash_table_destroy(), when no longer needed. The returned
     * value can be %NULL on success, it's when the server doesn't provide the information.
     * 
     * The `out_allows` contains a set of allowed methods returned by the server. Some known
     * are defined as %SOUP_METHOD_OPTIONS, and so on. The 'value' of the #GHashTable
     * doesn't have any particular meaning and the strings are compared case insensitively.
     * Free the hash table with g_hash_table_destroy(), when no longer needed. The returned
     * value can be %NULL on success, it's when the server doesn't provide the information.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    optionsSync(uri: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCapabilities */ GLib.HashTable, /* outAllows */ GLib.HashTable ]
    /**
     * Issues POST request on the provided `uri,` or, in case it's %NULL, on the URI
     * defined in associated #ESource. The Content-Type of the `data` is set to
     * application/xml. To POST the `data` with a different Content-Type use
     * e_webdav_session_post_with_content_type_sync().
     * 
     * The optional `out_content_type` can be used to get content type of the response.
     * Free it with g_free(), when no longer needed.
     * 
     * The optional `out_content` can be used to get actual result content. Free it
     * with g_byte_array_free(), when no longer needed.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param data data to post to the server
     * @param dataLength length of `data,` or -1, when `data` is NUL-terminated
     * @param outContentType return location for response Content-Type, or %NULL
     * @param outContent return location for response content, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    postSync(uri: string | null, data: string, dataLength: number, outContentType: string | null, outContent: Uint8Array | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Issues POST request on the provided `uri,` or, in case it's %NULL, on the URI
     * defined in associated #ESource.
     * 
     * The optional `out_content_type` can be used to get content type of the response.
     * Free it with g_free(), when no longer needed.
     * 
     * The optional `out_content` can be used to get actual result content. Free it
     * with g_byte_array_free(), when no longer needed.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param data data to post to the server
     * @param dataLength length of `data,` or -1, when `data` is NUL-terminated
     * @param inContentType a Content-Type of the `data,` or %NULL, to use application/xml
     * @param outContentType return location for response Content-Type, or %NULL
     * @param outContent return location for response content, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    postWithContentTypeSync(uri: string | null, data: string, dataLength: number, inContentType: string | null, outContentType: string | null, outContent: Uint8Array | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Issues a DAV:principal-property-search for the `uri,` or, in case it's %NULL,
     * for the URI defined in associated #ESource. The DAV:principal-property-search
     * performs a search for all principals whose properties contain character data
     * that matches the search criteria `match_value` in `match_property` property
     * of namespace `match_ns_uri`.
     * 
     * By default, the function searches all members (at any depth) of the collection
     * identified by the `uri`. If `apply_to_principal_collection_set` is set to %TRUE,
     * the search is applied instead to each collection returned by
     * e_webdav_session_get_principal_collection_set_sync() for the `uri`.
     * 
     * The `out_principals` is a #GSList of #EWebDAVResource, where the kind
     * is set to %E_WEBDAV_RESOURCE_KIND_PRINCIPAL and only href with displayname
     * are filled. All other members of #EWebDAVResource are not set.
     * 
     * Free the returned `out_principals` with
     * g_slist_free_full (principals, e_webdav_resource_free);
     * when no longer needed.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param applyToPrincipalCollectionSet whether to apply to principal-collection-set
     * @param matchNsUri namespace URI of the property to search in, or %NULL for %E_WEBDAV_NS_DAV
     * @param matchProperty name of the property to search in
     * @param matchValue a string value to search for
     * @param cancellable optional #GCancellable object, or %NULL
     */
    principalPropertySearchSync(uri: string | null, applyToPrincipalCollectionSet: boolean, matchNsUri: string | null, matchProperty: string, matchValue: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPrincipals */ WebDAVResource[] ]
    /**
     * Issues PROPFIND request on the provided `uri,` or, in case it's %NULL, on the URI
     * defined in associated #ESource. On success, calls `func` for each returned
     * DAV:propstat.
     * 
     * The `xml` can be %NULL, in which case the server should behave like DAV:allprop request.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param depth requested depth, can be one of %E_WEBDAV_DEPTH_THIS, %E_WEBDAV_DEPTH_THIS_AND_CHILDREN or %E_WEBDAV_DEPTH_INFINITY
     * @param xml the request itself, as an #EXmlDocument, the root element should be DAV:propfind, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    propfindSync(uri: string | null, depth: string, xml: XmlDocument | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Issues PROPPATCH request on the provided `uri,` or, in case it's %NULL, on the URI
     * defined in associated #ESource, with the `changes`. The order of requested changes
     * inside `xml` is significant, unlike on other places.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param xml an #EXmlDocument with request changes, its root element should be DAV:propertyupdate
     * @param cancellable optional #GCancellable object, or %NULL
     */
    proppatchSync(uri: string | null, xml: XmlDocument, cancellable: Gio.Cancellable | null): boolean
    /**
     * Writes data to a resource identified by `uri` to the server. The URI cannot
     * reference a collection.
     * 
     * The `etag` argument is used to avoid clashes when overwriting existing
     * resources. It can contain three values:
     *  - %NULL - to write completely new resource
     *  - empty string - write new resource or overwrite any existing, regardless changes on the server
     *  - valid ETag - overwrite existing resource only if it wasn't changed on the server.
     * 
     * Note that the actual usage of `etag` is also influenced by #ESourceWebdav:avoid-ifmatch
     * property of the associated #ESource.
     * 
     * The `out_href,` if provided, is filled with the resulting URI
     * of the written resource. It can be different from the `uri` when the server
     * redirected to a different location.
     * 
     * The `out_etag` contains ETag of the resource after it had been saved.
     * 
     * To write large data use e_webdav_session_put_sync() instead.
     * @param uri URI of the resource to write
     * @param etag an ETag of the resource, if it's an existing resource, or %NULL
     * @param contentType Content-Type of the `bytes` to be written
     * @param bytes actual bytes to be written
     * @param length how many bytes to write, or -1, when the `bytes` is NUL-terminated
     * @param cancellable optional #GCancellable object, or %NULL
     */
    putDataSync(uri: string, etag: string | null, contentType: string, bytes: string, length: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHref */ string | null, /* outEtag */ string | null ]
    /**
     * Writes data from `stream` to a resource identified by `uri` to the server.
     * The URI cannot reference a collection.
     * 
     * The `etag` argument is used to avoid clashes when overwriting existing
     * resources. It can contain three values:
     *  - %NULL - to write completely new resource
     *  - empty string - write new resource or overwrite any existing, regardless changes on the server
     *  - valid ETag - overwrite existing resource only if it wasn't changed on the server.
     * 
     * Note that the actual behaviour is also influenced by #ESourceWebdav:avoid-ifmatch
     * property of the associated #ESource.
     * 
     * The `out_href,` if provided, is filled with the resulting URI
     * of the written resource. It can be different from the `uri` when the server
     * redirected to a different location.
     * 
     * The `out_etag` contains ETag of the resource after it had been saved.
     * 
     * The `stream` should support also #GSeekable interface, because the data
     * send can require restart of the send due to redirect or other reasons.
     * 
     * This method uses Transfer-Encoding:chunked, in contrast to the
     * e_webdav_session_put_data_sync(), which writes data stored in memory
     * like any other request.
     * @param uri URI of the resource to write
     * @param etag an ETag of the resource, if it's an existing resource, or %NULL
     * @param contentType Content-Type of the `bytes` to be written
     * @param stream a #GInputStream with data to be written
     * @param cancellable optional #GCancellable object, or %NULL
     */
    putSync(uri: string, etag: string | null, contentType: string, stream: Gio.InputStream, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHref */ string | null, /* outEtag */ string | null ]
    /**
     * Refreshes existing lock `lock_token` for a resource identified by `uri,`
     * or, in case it's %NULL, on the URI defined in associated #ESource.
     * The `lock_token` is returned from e_webdav_session_lock_sync() and
     * the `uri` should be the same as that used with e_webdav_session_lock_sync().
     * @param uri URI to lock, or %NULL to read from #ESource
     * @param lockToken token of an existing lock
     * @param lockTimeout timeout for the lock, in seconds, on 0 to infinity
     * @param cancellable optional #GCancellable object, or %NULL
     */
    refreshLockSync(uri: string | null, lockToken: string, lockTimeout: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Tries to read detailed error information from `response_data,`
     * if not provided, then from `request'`s response_body. If the detailed
     * error cannot be found, then does nothing, otherwise frees the content
     * of `inout_error,` if any, and then populates it with an error message
     * prefixed with `prefix`.
     * 
     * The `prefix` might be of form "Failed to something", because the resulting
     * error message will be:
     * "Failed to something: HTTP error code XXX (reason_phrase): detailed_error".
     * When `prefix` is %NULL, the error message will be:
     * "Failed with HTTP error code XXX (reason phrase): detailed_error".
     * 
     * As the caller might not be interested in errors, also the `inout_error`
     * can be %NULL, in which case the function does nothing.
     * @param request a #SoupRequestHTTP
     * @param responseData received response data, or %NULL
     * @param ignoreMultistatus whether to ignore multistatus responses
     * @param prefix error message prefix, used when replacing, or %NULL
     */
    replaceWithDetailedError(request: Soup.RequestHTTP, responseData: Uint8Array | null, ignoreMultistatus: boolean, prefix: string | null): boolean
    /**
     * Issues REPORT request on the provided `uri,` or, in case it's %NULL, on the URI
     * defined in associated #ESource. On success, calls `func` for each returned
     * DAV:propstat.
     * 
     * The report can result in a multistatus response, but also to raw data. In case
     * the `func` is provided and the result is a multistatus response, then it is traversed
     * using this `func`.
     * 
     * The optional `out_content_type` can be used to get content type of the response.
     * Free it with g_free(), when no longer needed.
     * 
     * The optional `out_content` can be used to get actual result content. Free it
     * with g_byte_array_free(), when no longer needed.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param depth requested depth, can be %NULL, then no Depth header is sent
     * @param xml the request itself, as an #EXmlDocument
     * @param outContentType return location for response Content-Type, or %NULL
     * @param outContent return location for response content, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    reportSync(uri: string | null, depth: string | null, xml: XmlDocument, outContentType: string | null, outContent: Uint8Array | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Changes Access Control List (ACL) for the `uri,` or, in case it's %NULL,
     * for the URI defined in associated #ESource.
     * 
     * Make sure that the `entries` satisfy ACL restrictions, as returned
     * by e_webdav_session_get_acl_restrictions_sync(). The order in the `entries`
     * is preserved. It cannot contain any %E_WEBDAV_ACE_FLAG_PROTECTED,
     * nor `E_WEBDAV_ACE_FLAG_INHERITED,` items.
     * 
     * Use e_webdav_session_get_acl_sync() to read currently known ACL entries,
     * remove from the list those protected and inherited, and then modify
     * the rest with the required changed.
     * 
     * Note this function doesn't support general %E_WEBDAV_ACE_PRINCIPAL_PROPERTY and
     * returns %G_IO_ERROR_NOT_SUPPORTED error when any such is tried to be written.
     * 
     * In case the returned entries contain any %E_WEBDAV_ACE_PRINCIPAL_PROPERTY,
     * or there's a need to write such Access Control Entry, then do not use
     * e_webdav_session_get_acl_sync(), neither e_webdav_session_set_acl_sync(),
     * and write more generic implementation.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param entries entries to write
     * @param cancellable optional #GCancellable object, or %NULL
     */
    setAclSync(uri: string | null, entries: WebDAVAccessControlEntry[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Traverses a CALDAV:mkcalendar-response response and calls `func` for each returned DAV:propstat.
     * 
     * The `message,` if provided, is used to verify that the response is an XML Content-Type.
     * It's used to get the request URI as well.
     * @param message an optional #SoupMessage corresponding to the response, or %NULL
     * @param xmlData a #GByteArray containing CALDAV:mkcalendar-response response
     */
    traverseMkcalendarResponse(message: Soup.Message | null, xmlData: Uint8Array): boolean
    /**
     * Traverses a DAV:mkcol-response response and calls `func` for each returned DAV:propstat.
     * 
     * The `message,` if provided, is used to verify that the response is an XML Content-Type.
     * It's used to get the request URI as well.
     * @param message an optional #SoupMessage corresponding to the response, or %NULL
     * @param xmlData a #GByteArray containing DAV:mkcol-response response
     */
    traverseMkcolResponse(message: Soup.Message | null, xmlData: Uint8Array): boolean
    /**
     * Traverses a DAV:multistatus response and calls `func` for each returned DAV:propstat.
     * 
     * The `message,` if provided, is used to verify that the response is a multi-status
     * and that the Content-Type is properly set. It's used to get a request URI as well.
     * @param message an optional #SoupMessage corresponding to the response, or %NULL
     * @param xmlData a #GByteArray containing DAV:multistatus response
     */
    traverseMultistatusResponse(message: Soup.Message | null, xmlData: Uint8Array): boolean
    /**
     * Releases (unlocks) existing lock `lock_token` for a resource identified by `uri,`
     * or, in case it's %NULL, on the URI defined in associated #ESource.
     * The `lock_token` is returned from e_webdav_session_lock_sync() and
     * the `uri` should be the same as that used with e_webdav_session_lock_sync().
     * @param uri URI to lock, or %NULL to read from #ESource
     * @param lockToken token of an existing lock
     * @param cancellable optional #GCancellable object, or %NULL
     */
    unlockSync(uri: string | null, lockToken: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Updates properties (set/remove) on the provided `uri,` or, in case it's %NULL,
     * on the URI defined in associated #ESource, with the `changes`. The order
     * of `changes` is significant, unlike on other places.
     * 
     * This function supports only flat properties, those not under other element.
     * To support more complex property tries use e_webdav_session_proppatch_sync()
     * directly.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param changes a #GSList with request changes
     * @param cancellable optional #GCancellable object, or %NULL
     */
    updatePropertiesSync(uri: string | null, changes: WebDAVPropertyChange[], cancellable: Gio.Cancellable | null): boolean

    // Class property signals of EDataServer-1.2.EDataServer.WebDAVSession

    connect(sigName: "notify::credentials", callback: (...args: any[]) => void): number
    on(sigName: "notify::credentials", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::credentials", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::credentials", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::accept-language", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-language", ...args: any[]): void
    connect(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-language-auto", ...args: any[]): void
    connect(sigName: "notify::async-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-context", ...args: any[]): void
    connect(sigName: "notify::http-aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-aliases", ...args: any[]): void
    connect(sigName: "notify::https-aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::https-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::https-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::https-aliases", ...args: any[]): void
    connect(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle-timeout", ...args: any[]): void
    connect(sigName: "notify::local-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-address", ...args: any[]): void
    connect(sigName: "notify::max-conns", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-conns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-conns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-conns", ...args: any[]): void
    connect(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-conns-per-host", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-uri", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-use-system-ca-file", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::tls-database", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-database", ...args: any[]): void
    connect(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-interaction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-interaction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-interaction", ...args: any[]): void
    connect(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-ntlm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-ntlm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-ntlm", ...args: any[]): void
    connect(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-thread-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-thread-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-thread-context", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
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
class WebDAVSession extends SoupSession {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVSession

    static name: string
    static $gtype: GObject.GType<WebDAVSession>

    // Constructors of EDataServer-1.2.EDataServer.WebDAVSession

    constructor(config?: WebDAVSession_ConstructProps) 
    /**
     * Creates a new #EWebDAVSession associated with given `source`.
     * The #EWebDAVSession uses an #ESourceWebdav extension on certain
     * places when it's defined for the `source`.
     * @constructor 
     * @param source an #ESource
     */
    constructor(source: Source) 
    /**
     * Creates a new #EWebDAVSession associated with given `source`.
     * The #EWebDAVSession uses an #ESourceWebdav extension on certain
     * places when it's defined for the `source`.
     * @constructor 
     * @param source an #ESource
     */
    static new(source: Source): WebDAVSession

    // Overloads of new

    /**
     * Creates a new #ESoupSession associated with given `source`.
     * The `source` can be used to store and read SSL trust settings, but only if
     * it already contains an #ESourceWebdav extension. Otherwise the SSL trust
     * settings are ignored.
     * @constructor 
     * @param source an #ESource
     */
    static new(source: Source): SoupSession
    /**
     * Creates a #SoupSession with the default options.
     * @constructor 
     */
    static new(): Soup.Session
    _init(config?: WebDAVSession_ConstructProps): void
    /**
     * Frees `privileges` returned by e_webdav_session_get_supported_privilege_set_sync().
     * The function does nothing, if `privileges` is %NULL.
     * @param privileges a tree of #EWebDAVPrivilege structures
     */
    static utilFreePrivileges(privileges: GLib.Node | null): void
    /**
     * Compares two hrefs and return whether they reference
     * the same item on the server. The comparison is done in
     * a relaxed way, not considering scheme part and comparing
     * the host name case insensitively, while the path
     * case sensitively. It also ignores the username/password
     * information in the hostname part, if it's included.
     * The function doesn't decode any URI-encoded characters.
     * @param href1 the first href
     * @param href2 the second href
     */
    static utilItemHrefEqual(href1: string, href2: string): boolean
    /**
     * Dequotes `text,` if it's enclosed in double-quotes. The function
     * changes `text,` it doesn't allocate new string. The function does
     * nothing when the `text` is not enclosed in double-quotes.
     * @param text text to dequote
     */
    static utilMaybeDequote(text: string | null): [ /* returnType */ string, /* text */ string | null ]
}

interface XmlDocument_ConstructProps extends GObject.Object_ConstructProps {
}

interface XmlDocument {

    // Owm methods of EDataServer-1.2.EDataServer.XmlDocument

    /**
     * Adds a new attribute to the current element.
     * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
     * added namespace with the same href from e_xml_document_add_namespaces() is picked,
     * or a new namespace with generated prefix is added.
     * @param nsHref optional namespace href for the new attribute, or %NULL
     * @param name name of the attribute
     * @param value value of the attribute
     */
    addAttribute(nsHref: string | null, name: string, value: string): void
    /**
     * Adds a new attribute with a double value to the current element.
     * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
     * added namespace with the same href from e_xml_document_add_namespaces() is picked,
     * or a new namespace with generated prefix is added.
     * @param nsHref optional namespace href for the new attribute, or %NULL
     * @param name name of the attribute
     * @param value double value of the attribute
     */
    addAttributeDouble(nsHref: string | null, name: string, value: number): void
    /**
     * Adds a new attribute with an integer value to the current element.
     * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
     * added namespace with the same href from e_xml_document_add_namespaces() is picked,
     * or a new namespace with generated prefix is added.
     * @param nsHref optional namespace href for the new attribute, or %NULL
     * @param name name of the attribute
     * @param value integer value of the attribute
     */
    addAttributeInt(nsHref: string | null, name: string, value: number): void
    /**
     * Adds a new attribute with a time_t value in ISO 8601 format to the current element.
     * The format is "YYYY-MM-DDTHH:MM:SSZ".
     * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
     * added namespace with the same href from e_xml_document_add_namespaces() is picked,
     * or a new namespace with generated prefix is added.
     * @param nsHref optional namespace href for the new attribute, or %NULL
     * @param name name of the attribute
     * @param value time_t value of the attribute
     */
    addAttributeTime(nsHref: string | null, name: string, value: number): void
    /**
     * Adds a new attribute with a time_t value in iCalendar format to the current element.
     * The format is "YYYYMMDDTHHMMSSZ".
     * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
     * added namespace with the same href from e_xml_document_add_namespaces() is picked,
     * or a new namespace with generated prefix is added.
     * @param nsHref optional namespace href for the new attribute, or %NULL
     * @param name name of the attribute
     * @param value time_t value of the attribute
     */
    addAttributeTimeIcal(nsHref: string | null, name: string, value: number): void
    /**
     * Adds an empty element, which is an element with no attribute and no value.
     * 
     * It's the same as calling e_xml_document_start_element() immediately
     * followed by e_xml_document_end_element().
     * @param nsHref optional namespace href for the new element, or %NULL
     * @param name name of the new element
     */
    addEmptyElement(nsHref: string | null, name: string): void
    /**
     * This is a pair function for e_xml_document_start_element() and
     * e_xml_document_start_text_element(), which changes current
     * element to the parent of that element.
     */
    endElement(): void
    /**
     * Gets content of the `xml` as string. The string is nul-terminated, but
     * if `out_length` is also provided, then it doesn't contain this additional
     * nul character.
     */
    getContent(): [ /* returnType */ string, /* outLength */ number | null ]
    getXmldoc(): libxml2.Doc
    /**
     * Starts a new non-text element as a child of the current element.
     * Each such call should be ended with corresponding e_xml_document_end_element().
     * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
     * added namespace with the same href from e_xml_document_add_namespaces() is picked,
     * or a new namespace with generated prefix is added.
     * 
     * To start a text node use e_xml_document_start_text_element().
     * @param nsHref optional namespace href for the new element, or %NULL
     * @param name name of the new element
     */
    startElement(nsHref: string | null, name: string): void
    /**
     * Starts a new text element as a child of the current element.
     * Each such call should be ended with corresponding e_xml_document_end_element().
     * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
     * added namespace with the same href from e_xml_document_add_namespaces() is picked,
     * or a new namespace with generated prefix is added.
     * 
     * To start a non-text node use e_xml_document_start_element().
     * @param nsHref optional namespace href for the new element, or %NULL
     * @param name name of the new element
     */
    startTextElement(nsHref: string | null, name: string): void
    /**
     * Writes `value` of length `len,` encoded to base64, as content of the current element.
     * @param value value to write as the content
     * @param len length of `value`
     */
    writeBase64(value: string, len: number): void
    /**
     * Writes `value` of length `len` as content of the current element.
     * @param value value to write as the content
     * @param len length of `value`
     */
    writeBuffer(value: string, len: number): void
    /**
     * Writes `value` as content of the current element.
     * @param value value to write as the content
     */
    writeDouble(value: number): void
    /**
     * Writes `value` as content of the current element.
     * @param value value to write as the content
     */
    writeInt(value: number): void
    /**
     * Writes `value` as content of the current element.
     * @param value value to write as the content
     */
    writeString(value: string): void
    /**
     * Writes `value` in ISO 8601 format as content of the current element.
     * The format is "YYYY-MM-DDTHH:MM:SSZ".
     * @param value value to write as the content
     */
    writeTime(value: number): void

    // Class property signals of EDataServer-1.2.EDataServer.XmlDocument

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
class XmlDocument extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.XmlDocument

    static name: string
    static $gtype: GObject.GType<XmlDocument>

    // Constructors of EDataServer-1.2.EDataServer.XmlDocument

    constructor(config?: XmlDocument_ConstructProps) 
    /**
     * Creates a new #EXmlDocument with root element `root_element` and optionally
     * also with set default namespace `ns_href`.
     * @constructor 
     * @param nsHref default namespace href to use, or %NULL
     * @param rootElement root element name
     */
    constructor(nsHref: string | null, rootElement: string) 
    /**
     * Creates a new #EXmlDocument with root element `root_element` and optionally
     * also with set default namespace `ns_href`.
     * @constructor 
     * @param nsHref default namespace href to use, or %NULL
     * @param rootElement root element name
     */
    static new(nsHref: string | null, rootElement: string): XmlDocument
    _init(config?: XmlDocument_ConstructProps): void
}

interface AsyncClosure {
}

/**
 * #EAsyncClosure provides a simple way to run an asynchronous function
 * synchronously without blocking a running #GMainLoop or using threads.
 * 
 * 1) Create an #EAsyncClosure with e_async_closure_new().
 * 
 * 2) Call the asynchronous function passing e_async_closure_callback() as
 *    the #GAsyncReadyCallback argument and the #EAsyncClosure as the data
 *    argument.
 * 
 * 3) Call e_async_closure_wait() and collect the #GAsyncResult.
 * 
 * 4) Call the corresponding asynchronous "finish" function, passing the
 *    #GAsyncResult returned by e_async_closure_wait().
 * 
 * 5) If needed, repeat steps 2-4 for additional asynchronous functions
 *    using the same #EAsyncClosure.
 * 
 * 6) Finally, free the #EAsyncClosure with e_async_closure_free().
 * @record 
 */
class AsyncClosure {

    // Own properties of EDataServer-1.2.EDataServer.AsyncClosure

    static name: string
}

interface ClientClass {

    // Own fields of EDataServer-1.2.EDataServer.ClientClass

    unwrapDbusError: (client: Client, dbusError: GLib.Error) => void
    retrieveCapabilities: (client: Client, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    retrieveCapabilitiesFinish: (client: Client, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* capabilities */ string ]
    retrieveCapabilitiesSync: (client: Client, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* capabilities */ string ]
    getBackendProperty: (client: Client, propName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    getBackendPropertyFinish: (client: Client, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* propValue */ string ]
    getBackendPropertySync: (client: Client, propName: string, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* propValue */ string ]
    setBackendProperty: (client: Client, propName: string, propValue: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    setBackendPropertyFinish: (client: Client, result: Gio.AsyncResult) => boolean
    setBackendPropertySync: (client: Client, propName: string, propValue: string, cancellable: Gio.Cancellable | null) => boolean
    open: (client: Client, onlyIfExists: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    openFinish: (client: Client, result: Gio.AsyncResult) => boolean
    openSync: (client: Client, onlyIfExists: boolean, cancellable: Gio.Cancellable | null) => boolean
    remove: (client: Client, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    removeFinish: (client: Client, result: Gio.AsyncResult) => boolean
    removeSync: (client: Client, cancellable: Gio.Cancellable | null) => boolean
    refresh: (client: Client, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    refreshFinish: (client: Client, result: Gio.AsyncResult) => boolean
    refreshSync: (client: Client, cancellable: Gio.Cancellable | null) => boolean
    retrievePropertiesSync: (client: Client, cancellable: Gio.Cancellable | null) => boolean
    opened: (client: Client, error: GLib.Error) => void
    backendError: (client: Client, errorMsg: string) => void
    backendDied: (client: Client) => void
    backendPropertyChanged: (client: Client, propName: string, propValue: string) => void
}

abstract class ClientClass {

    // Own properties of EDataServer-1.2.EDataServer.ClientClass

    static name: string
}

interface ClientErrorsList {
}

class ClientErrorsList {

    // Own properties of EDataServer-1.2.EDataServer.ClientErrorsList

    static name: string
}

interface ClientPrivate {
}

class ClientPrivate {

    // Own properties of EDataServer-1.2.EDataServer.ClientPrivate

    static name: string
}

interface Collator {

    // Owm methods of EDataServer-1.2.EDataServer.Collator

    /**
     * Compares `str_a` with `str_b,` the order of strings is determined by the parameters of `collator`.
     * 
     * The `result` will be set to integer less than, equal to, or greater than zero if `str_a` is found,
     * respectively, to be less than, to match, or be greater than `str_b`.
     * 
     * Either `str_a` or `str_b` can be %NULL, %NULL strings are considered to sort below other strings.
     * 
     * This function will first ensure that both strings are valid UTF-8.
     * @param strA A string to compare
     * @param strB The string to compare with `str_a`
     */
    collate(strA: string | null, strB: string | null): [ /* returnType */ boolean, /* result */ number ]
    /**
     * Generates a collation key for `str,` the result of comparing
     * two collation keys with strcmp() will be the same result
     * of calling e_collator_collate() on the same original strings.
     * 
     * This function will first ensure that `str` is valid UTF-8 encoded.
     * @param str The string to generate a collation key for
     */
    generateKey(str: string): string
    /**
     * Generates a sort key for the given alphabetic `index`.
     * 
     * The generated sort key is guaranteed to sort below
     * any sort keys for words beginning with any variant of
     * the given letter.
     * 
     * For instance, a sort key generated for the index 5 of
     * a latin alphabet, where the fifth index is 'E' will sort
     * below any sort keys generated for words starting with
     * the characters 'e', 'E', 'é', 'É', 'è' or 'È'. It will also
     * sort above any sort keys generated for words starting with
     * the characters 'd' or 'D'.
     * @param index An index into the alphabetic labels
     */
    generateKeyForIndex(index: number): string
    /**
     * Checks which index, as determined by e_collator_get_index_labels(),
     * that `str` should sort under.
     * @param str A string
     */
    getIndex(str: string): number
    /**
     * Fetches the displayable labels and index positions for the active alphabet.
     */
    getIndexLabels(): [ /* returnType */ string[], /* nLabels */ number, /* underflow */ number, /* inflow */ number, /* overflow */ number ]
    /**
     * Increases the reference count of `collator`.
     */
    ref(): Collator
    /**
     * Decreases the reference count of `collator`.
     * If the reference count reaches 0 then the collator is freed
     */
    unref(): void
}

/**
 * An opaque object used for locale specific string comparisons
 * and sort ordering.
 * @record 
 */
class Collator {

    // Own properties of EDataServer-1.2.EDataServer.Collator

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.Collator

    /**
     * Creates a new #ECollator for the given `locale,`
     * the returned collator should be freed with e_collator_unref().
     * @constructor 
     * @param locale The locale under which to sort
     */
    constructor(locale: string) 
    /**
     * Creates a new #ECollator for the given `locale,`
     * the returned collator should be freed with e_collator_unref().
     * @constructor 
     * @param locale The locale under which to sort
     */
    static new(locale: string): Collator
    /**
     * Creates a new #ECollator for the given `locale,`
     * the returned collator should be freed with e_collator_unref().
     * 
     * In addition, this also reliably interprets the country
     * code from the `locale` string and stores it to `country_code`.
     * @constructor 
     * @param locale The locale under which to sort
     */
    static newInterpretCountry(locale: string): Collator
    static errorQuark(): GLib.Quark
}

interface ExtensibleInterface {

    // Own fields of EDataServer-1.2.EDataServer.ExtensibleInterface

    parentInterface: GObject.TypeInterface
}

abstract class ExtensibleInterface {

    // Own properties of EDataServer-1.2.EDataServer.ExtensibleInterface

    static name: string
}

interface ExtensionClass {

    // Own fields of EDataServer-1.2.EDataServer.ExtensionClass

    parentClass: GObject.ObjectClass
    extensibleType: GObject.GType
}

abstract class ExtensionClass {

    // Own properties of EDataServer-1.2.EDataServer.ExtensionClass

    static name: string
}

interface ExtensionPrivate {
}

class ExtensionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.ExtensionPrivate

    static name: string
}

interface Flag {
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @record 
 */
class Flag {

    // Own properties of EDataServer-1.2.EDataServer.Flag

    static name: string
}

interface FreeFormExpSymbol {

    // Own fields of EDataServer-1.2.EDataServer.FreeFormExpSymbol

    names: string
    hint: string
    buildSexp: FreeFormExpBuildSexpFunc
}

class FreeFormExpSymbol {

    // Own properties of EDataServer-1.2.EDataServer.FreeFormExpSymbol

    static name: string
}

interface GDataOAuth2AuthorizerClass {

    // Own fields of EDataServer-1.2.EDataServer.GDataOAuth2AuthorizerClass

    parentClass: GObject.ObjectClass
}

abstract class GDataOAuth2AuthorizerClass {

    // Own properties of EDataServer-1.2.EDataServer.GDataOAuth2AuthorizerClass

    static name: string
}

interface GDataOAuth2AuthorizerPrivate {
}

class GDataOAuth2AuthorizerPrivate {

    // Own properties of EDataServer-1.2.EDataServer.GDataOAuth2AuthorizerPrivate

    static name: string
}

interface MemChunk {
}

class MemChunk {

    // Own properties of EDataServer-1.2.EDataServer.MemChunk

    static name: string
}

interface ModuleClass {

    // Own fields of EDataServer-1.2.EDataServer.ModuleClass

    parentClass: GObject.TypeModuleClass
}

abstract class ModuleClass {

    // Own properties of EDataServer-1.2.EDataServer.ModuleClass

    static name: string
}

interface ModulePrivate {
}

class ModulePrivate {

    // Own properties of EDataServer-1.2.EDataServer.ModulePrivate

    static name: string
}

interface NamedParameters {

    // Owm methods of EDataServer-1.2.EDataServer.NamedParameters

    /**
     * Makes content of the `parameters` the same as `from`.
     * Functions clears content of `parameters` if `from` is %NULL.
     * @param from an #ENamedParameters to get values from, or %NULL
     */
    assign(from: NamedParameters | null): void
    /**
     * Removes all stored parameters from `parameters`.
     */
    clear(): void
    count(): number
    exists(name: string): boolean
    /**
     * Frees an instance of #ENamedParameters, previously allocated
     * with e_named_parameters_new(). Function does nothing, if
     * `parameters` is %NULL.
     */
    free(): void
    /**
     * Returns current value of a parameter with name `name`. If not such
     * exists, then returns %NULL.
     * @param name name of a parameter to get
     */
    get(name: string): string | null
    getName(index: number): string | null
    /**
     * Creates a new instance of an #ENamedParameters, with initial content
     * being taken from `parameters`. This should be freed with e_named_parameters_free(),
     * when no longer needed. Names are compared case insensitively.
     * 
     * The structure is not thread safe, if the caller requires thread safety,
     * then it should provide it on its own.
     */
    newClone(): NamedParameters
    /**
     * Sets parameter named `name` to value `value`. If `value` is NULL,
     * then the parameter is removed. `value` can be an empty string.
     * 
     * Note: There is a restriction on parameter names, it cannot be empty or
     * contain a colon character (':'), otherwise it can be pretty much anything.
     * @param name name of a parameter to set
     * @param value value to set, or %NULL to unset
     */
    set(name: string, value: string | null): void
    /**
     * Compares current value of parameter named `name` with given `value`
     * and returns whether they are equal, either case sensitively or
     * insensitively, based on `case_sensitively` argument. Function
     * returns %FALSE, if no such parameter exists.
     * @param name name of a parameter to test
     * @param value value to test
     * @param caseSensitively whether to compare case sensitively
     */
    test(name: string, value: string, caseSensitively: boolean): boolean
    toString(): string | null
    toStrv(): string[]
}

class NamedParameters {

    // Own properties of EDataServer-1.2.EDataServer.NamedParameters

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.NamedParameters

    /**
     * Creates a new instance of an #ENamedParameters. This should be freed
     * with e_named_parameters_free(), when no longer needed. Names are
     * compared case insensitively.
     * 
     * The structure is not thread safe, if the caller requires thread safety,
     * then it should provide it on its own.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of an #ENamedParameters. This should be freed
     * with e_named_parameters_free(), when no longer needed. Names are
     * compared case insensitively.
     * 
     * The structure is not thread safe, if the caller requires thread safety,
     * then it should provide it on its own.
     * @constructor 
     */
    static new(): NamedParameters
    /**
     * Creates a new instance of an #ENamedParameters, with initial content being
     * taken from `str`. This should be freed with e_named_parameters_free(),
     * when no longer needed. Names are compared case insensitively.
     * 
     * The `str` should be created with e_named_parameters_to_string(), to be
     * properly encoded.
     * 
     * The structure is not thread safe, if the caller requires thread safety,
     * then it should provide it on its own.
     * @constructor 
     * @param str a string to be used as a content of a newly created #ENamedParameters
     */
    static newString(str: string): NamedParameters
    /**
     * Creates a new instance of an #ENamedParameters, with initial content
     * being taken from `strv`. This should be freed with e_named_parameters_free(),
     * when no longer needed. Names are compared case insensitively.
     * 
     * The structure is not thread safe, if the caller requires thread safety,
     * then it should provide it on its own.
     * @constructor 
     * @param strv NULL-terminated string array to be used as a content of a newly     created #ENamedParameters
     */
    static newStrv(strv: string): NamedParameters
}

interface NetworkMonitorClass {

    // Own fields of EDataServer-1.2.EDataServer.NetworkMonitorClass

    parentClass: GObject.ObjectClass
}

abstract class NetworkMonitorClass {

    // Own properties of EDataServer-1.2.EDataServer.NetworkMonitorClass

    static name: string
}

interface NetworkMonitorPrivate {
}

class NetworkMonitorPrivate {

    // Own properties of EDataServer-1.2.EDataServer.NetworkMonitorPrivate

    static name: string
}

interface OAuth2ServiceBaseClass {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceBaseClass

    parentClass: ExtensionClass
}

abstract class OAuth2ServiceBaseClass {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceBaseClass

    static name: string
}

interface OAuth2ServiceGoogleClass {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceGoogleClass

    parentClass: OAuth2ServiceBaseClass
}

abstract class OAuth2ServiceGoogleClass {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceGoogleClass

    static name: string
}

interface OAuth2ServiceInterface {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceInterface

    parentInterface: GObject.TypeInterface
    canProcess: (service: OAuth2Service, source: Source) => boolean
    guessCanProcess: (service: OAuth2Service, protocol: string | null, hostname: string | null) => boolean
    getFlags: (service: OAuth2Service) => number
    getName: (service: OAuth2Service) => string
    getDisplayName: (service: OAuth2Service) => string
    getClientId: (service: OAuth2Service, source: Source) => string
    getClientSecret: (service: OAuth2Service, source: Source) => string | null
    getAuthenticationUri: (service: OAuth2Service, source: Source) => string
    getRefreshUri: (service: OAuth2Service, source: Source) => string
    getRedirectUri: (service: OAuth2Service, source: Source) => string | null
    prepareAuthenticationUriQuery: (service: OAuth2Service, source: Source, uriQuery: GLib.HashTable) => void
    getAuthenticationPolicy: (service: OAuth2Service, source: Source, uri: string) => OAuth2ServiceNavigationPolicy
    extractAuthorizationCode: (service: OAuth2Service, source: Source, pageTitle: string, pageUri: string, pageContent: string | null) => [ /* returnType */ boolean, /* outAuthorizationCode */ string ]
    prepareGetTokenForm: (service: OAuth2Service, source: Source, authorizationCode: string, form: GLib.HashTable) => void
    prepareGetTokenMessage: (service: OAuth2Service, source: Source, message: Soup.Message) => void
    prepareRefreshTokenForm: (service: OAuth2Service, source: Source, refreshToken: string, form: GLib.HashTable) => void
    prepareRefreshTokenMessage: (service: OAuth2Service, source: Source, message: Soup.Message) => void
    reserved: object[]
}

abstract class OAuth2ServiceInterface {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceInterface

    static name: string
}

interface OAuth2ServiceOutlookClass {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceOutlookClass

    parentClass: OAuth2ServiceBaseClass
}

abstract class OAuth2ServiceOutlookClass {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceOutlookClass

    static name: string
}

interface OAuth2ServiceYahooClass {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceYahooClass

    parentClass: OAuth2ServiceBaseClass
}

abstract class OAuth2ServiceYahooClass {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceYahooClass

    static name: string
}

interface OAuth2ServicesClass {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServicesClass

    parentClass: GObject.ObjectClass
    reserved: object[]
}

abstract class OAuth2ServicesClass {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServicesClass

    static name: string
}

interface OAuth2ServicesPrivate {
}

class OAuth2ServicesPrivate {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServicesPrivate

    static name: string
}

interface OperationPool {

    // Owm methods of EDataServer-1.2.EDataServer.OperationPool

    /**
     * Frees previously created `pool`.
     */
    free(): void
    /**
     * Pushes an operation to be processed.  `opdata` is passed to the function
     * provided in e_operation_pool_new().
     * @param opdata user data for the operation
     */
    push(opdata: object | null): void
    /**
     * Releases `opid` previously reserved by e_operation_pool_reserve_opid().
     * @param opid an operation ID
     */
    releaseOpid(opid: number): void
    /**
     * Reserves new operation ID, which is returned. This operation ID may
     * be released by e_operation_pool_release_opid() when the operation
     * is finished.
     */
    reserveOpid(): number
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @record 
 */
class OperationPool {

    // Own properties of EDataServer-1.2.EDataServer.OperationPool

    static name: string
}

interface SoupAuthBearerClass {

    // Own fields of EDataServer-1.2.EDataServer.SoupAuthBearerClass

    parentClass: Soup.AuthClass
}

abstract class SoupAuthBearerClass {

    // Own properties of EDataServer-1.2.EDataServer.SoupAuthBearerClass

    static name: string
}

interface SoupAuthBearerPrivate {
}

class SoupAuthBearerPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SoupAuthBearerPrivate

    static name: string
}

interface SoupSessionClass {

    // Own fields of EDataServer-1.2.EDataServer.SoupSessionClass

    parentClass: Soup.SessionClass
    reserved: object[]
}

abstract class SoupSessionClass {

    // Own properties of EDataServer-1.2.EDataServer.SoupSessionClass

    static name: string
}

interface SoupSessionPrivate {
}

class SoupSessionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SoupSessionPrivate

    static name: string
}

interface SourceAddressBookClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceAddressBookClass

    parentClass: SourceBackendClass
}

abstract class SourceAddressBookClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceAddressBookClass

    static name: string
}

interface SourceAddressBookPrivate {
}

class SourceAddressBookPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceAddressBookPrivate

    static name: string
}

interface SourceAlarmsClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceAlarmsClass

    parentClass: SourceExtensionClass
}

abstract class SourceAlarmsClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceAlarmsClass

    static name: string
}

interface SourceAlarmsPrivate {
}

class SourceAlarmsPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceAlarmsPrivate

    static name: string
}

interface SourceAuthenticationClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceAuthenticationClass

    parentClass: SourceExtensionClass
}

abstract class SourceAuthenticationClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceAuthenticationClass

    static name: string
}

interface SourceAuthenticationPrivate {
}

class SourceAuthenticationPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceAuthenticationPrivate

    static name: string
}

interface SourceAutocompleteClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceAutocompleteClass

    parentClass: SourceExtensionClass
}

abstract class SourceAutocompleteClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutocompleteClass

    static name: string
}

interface SourceAutocompletePrivate {
}

class SourceAutocompletePrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutocompletePrivate

    static name: string
}

interface SourceAutoconfigClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceAutoconfigClass

    parentClass: SourceExtensionClass
}

abstract class SourceAutoconfigClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutoconfigClass

    static name: string
}

interface SourceAutoconfigPrivate {
}

class SourceAutoconfigPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutoconfigPrivate

    static name: string
}

interface SourceBackendClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceBackendClass

    parentClass: SourceExtensionClass
}

abstract class SourceBackendClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceBackendClass

    static name: string
}

interface SourceBackendPrivate {
}

class SourceBackendPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceBackendPrivate

    static name: string
}

interface SourceCalendarClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceCalendarClass

    parentClass: SourceSelectableClass
}

abstract class SourceCalendarClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceCalendarClass

    static name: string
}

interface SourceCalendarPrivate {
}

class SourceCalendarPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceCalendarPrivate

    static name: string
}

interface SourceCamelClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceCamelClass

    parentClass: SourceExtensionClass
    settingsType: GObject.GType
}

abstract class SourceCamelClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceCamelClass

    static name: string
}

interface SourceCamelPrivate {
}

class SourceCamelPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceCamelPrivate

    static name: string
}

interface SourceClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceClass

    parentClass: GObject.ObjectClass
    changed: (source: Source) => void
    credentialsRequired: (source: Source, reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error) => void
    authenticate: (source: Source, credentials: NamedParameters) => void
    removeSync: (source: Source, cancellable: Gio.Cancellable | null) => boolean
    remove: (source: Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    removeFinish: (source: Source, result: Gio.AsyncResult) => boolean
    writeSync: (source: Source, cancellable: Gio.Cancellable | null) => boolean
    write: (source: Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    writeFinish: (source: Source, result: Gio.AsyncResult) => boolean
    remoteCreateSync: (source: Source, scratchSource: Source, cancellable: Gio.Cancellable | null) => boolean
    remoteCreate: (source: Source, scratchSource: Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    remoteCreateFinish: (source: Source, result: Gio.AsyncResult) => boolean
    remoteDeleteSync: (source: Source, cancellable: Gio.Cancellable | null) => boolean
    remoteDelete: (source: Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    remoteDeleteFinish: (source: Source, result: Gio.AsyncResult) => boolean
    getOauth2AccessTokenSync: (source: Source, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    getOauth2AccessToken: (source: Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    getOauth2AccessTokenFinish: (source: Source, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    invokeCredentialsRequiredImpl: (source: Source, dbusSource: object | null, argReason: string, argCertificatePem: string, argCertificateErrors: string, argDbusErrorName: string, argDbusErrorMessage: string, cancellable: Gio.Cancellable | null) => boolean
    invokeAuthenticateImpl: (source: Source, dbusSource: object | null, argCredentials: string, cancellable: Gio.Cancellable | null) => boolean
    unsetLastCredentialsRequiredArgumentsImpl: (source: Source, cancellable: Gio.Cancellable | null) => boolean
    reserved: object[]
}

abstract class SourceClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceClass

    static name: string
}

interface SourceCollectionClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceCollectionClass

    parentClass: SourceBackendClass
}

abstract class SourceCollectionClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceCollectionClass

    static name: string
}

interface SourceCollectionPrivate {
}

class SourceCollectionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceCollectionPrivate

    static name: string
}

interface SourceContactsClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceContactsClass

    parentClass: SourceExtensionClass
}

abstract class SourceContactsClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceContactsClass

    static name: string
}

interface SourceContactsPrivate {
}

class SourceContactsPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceContactsPrivate

    static name: string
}

interface SourceCredentialsProviderClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderClass

    parentClass: GObject.ObjectClass
    refSource: (provider: SourceCredentialsProvider, uid: string) => Source | null
}

abstract class SourceCredentialsProviderClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderClass

    static name: string
}

interface SourceCredentialsProviderImplClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplClass

    parentClass: ExtensionClass
    canProcess: (providerImpl: SourceCredentialsProviderImpl, source: Source) => boolean
    canStore: (providerImpl: SourceCredentialsProviderImpl) => boolean
    canPrompt: (providerImpl: SourceCredentialsProviderImpl) => boolean
    lookupSync: (providerImpl: SourceCredentialsProviderImpl, source: Source, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    storeSync: (providerImpl: SourceCredentialsProviderImpl, source: Source, credentials: NamedParameters, permanently: boolean, cancellable: Gio.Cancellable | null) => boolean
    deleteSync: (providerImpl: SourceCredentialsProviderImpl, source: Source, cancellable: Gio.Cancellable | null) => boolean
}

abstract class SourceCredentialsProviderImplClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplClass

    static name: string
}

interface SourceCredentialsProviderImplOAuth2Class {

    // Own fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2Class

    parentClass: SourceCredentialsProviderImplClass
}

abstract class SourceCredentialsProviderImplOAuth2Class {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2Class

    static name: string
}

interface SourceCredentialsProviderImplOAuth2Private {
}

class SourceCredentialsProviderImplOAuth2Private {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2Private

    static name: string
}

interface SourceCredentialsProviderImplPasswordClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPasswordClass

    parentClass: SourceCredentialsProviderImplClass
}

abstract class SourceCredentialsProviderImplPasswordClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPasswordClass

    static name: string
}

interface SourceCredentialsProviderImplPasswordPrivate {
}

class SourceCredentialsProviderImplPasswordPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPasswordPrivate

    static name: string
}

interface SourceCredentialsProviderImplPrivate {
}

class SourceCredentialsProviderImplPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPrivate

    static name: string
}

interface SourceCredentialsProviderPrivate {
}

class SourceCredentialsProviderPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderPrivate

    static name: string
}

interface SourceExtensionClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceExtensionClass

    parentClass: GObject.ObjectClass
    name: string
}

abstract class SourceExtensionClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceExtensionClass

    static name: string
}

interface SourceExtensionPrivate {
}

class SourceExtensionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceExtensionPrivate

    static name: string
}

interface SourceGoaClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceGoaClass

    parentClass: SourceExtensionClass
}

abstract class SourceGoaClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceGoaClass

    static name: string
}

interface SourceGoaPrivate {
}

class SourceGoaPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceGoaPrivate

    static name: string
}

interface SourceLDAPClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceLDAPClass

    parentClass: SourceExtensionClass
}

abstract class SourceLDAPClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceLDAPClass

    static name: string
}

interface SourceLDAPPrivate {
}

class SourceLDAPPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceLDAPPrivate

    static name: string
}

interface SourceLocalClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceLocalClass

    parentClass: SourceExtensionClass
}

abstract class SourceLocalClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceLocalClass

    static name: string
}

interface SourceLocalPrivate {
}

class SourceLocalPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceLocalPrivate

    static name: string
}

interface SourceMDNClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMDNClass

    parentClass: SourceExtensionClass
}

abstract class SourceMDNClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMDNClass

    static name: string
}

interface SourceMDNPrivate {
}

class SourceMDNPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMDNPrivate

    static name: string
}

interface SourceMailAccountClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMailAccountClass

    parentClass: SourceBackendClass
}

abstract class SourceMailAccountClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailAccountClass

    static name: string
}

interface SourceMailAccountPrivate {
}

class SourceMailAccountPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailAccountPrivate

    static name: string
}

interface SourceMailCompositionClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMailCompositionClass

    parentClass: SourceExtensionClass
}

abstract class SourceMailCompositionClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailCompositionClass

    static name: string
}

interface SourceMailCompositionPrivate {
}

class SourceMailCompositionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailCompositionPrivate

    static name: string
}

interface SourceMailIdentityClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMailIdentityClass

    parentClass: SourceExtensionClass
}

abstract class SourceMailIdentityClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailIdentityClass

    static name: string
}

interface SourceMailIdentityPrivate {
}

class SourceMailIdentityPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailIdentityPrivate

    static name: string
}

interface SourceMailSignatureClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMailSignatureClass

    parentClass: SourceExtensionClass
}

abstract class SourceMailSignatureClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSignatureClass

    static name: string
}

interface SourceMailSignaturePrivate {
}

class SourceMailSignaturePrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSignaturePrivate

    static name: string
}

interface SourceMailSubmissionClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMailSubmissionClass

    parentClass: SourceExtensionClass
}

abstract class SourceMailSubmissionClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSubmissionClass

    static name: string
}

interface SourceMailSubmissionPrivate {
}

class SourceMailSubmissionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSubmissionPrivate

    static name: string
}

interface SourceMailTransportClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMailTransportClass

    parentClass: SourceBackendClass
}

abstract class SourceMailTransportClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailTransportClass

    static name: string
}

interface SourceMailTransportPrivate {
}

class SourceMailTransportPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailTransportPrivate

    static name: string
}

interface SourceMemoListClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMemoListClass

    parentClass: SourceSelectableClass
}

abstract class SourceMemoListClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMemoListClass

    static name: string
}

interface SourceMemoListPrivate {
}

class SourceMemoListPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMemoListPrivate

    static name: string
}

interface SourceOfflineClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceOfflineClass

    parentClass: SourceExtensionClass
}

abstract class SourceOfflineClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceOfflineClass

    static name: string
}

interface SourceOfflinePrivate {
}

class SourceOfflinePrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceOfflinePrivate

    static name: string
}

interface SourceOpenPGPClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceOpenPGPClass

    parentClass: SourceExtensionClass
}

abstract class SourceOpenPGPClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceOpenPGPClass

    static name: string
}

interface SourceOpenPGPPrivate {
}

class SourceOpenPGPPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceOpenPGPPrivate

    static name: string
}

interface SourcePrivate {
}

class SourcePrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourcePrivate

    static name: string
}

interface SourceProxyClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceProxyClass

    parentClass: SourceExtensionClass
}

abstract class SourceProxyClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceProxyClass

    static name: string
}

interface SourceProxyPrivate {
}

class SourceProxyPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceProxyPrivate

    static name: string
}

interface SourceRefreshClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceRefreshClass

    parentClass: SourceExtensionClass
}

abstract class SourceRefreshClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceRefreshClass

    static name: string
}

interface SourceRefreshPrivate {
}

class SourceRefreshPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceRefreshPrivate

    static name: string
}

interface SourceRegistryClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceRegistryClass

    parentClass: GObject.ObjectClass
    sourceAdded: (registry: SourceRegistry, source: Source) => void
    sourceChanged: (registry: SourceRegistry, source: Source) => void
    sourceRemoved: (registry: SourceRegistry, source: Source) => void
    sourceEnabled: (registry: SourceRegistry, source: Source) => void
    sourceDisabled: (registry: SourceRegistry, source: Source) => void
    credentialsRequired: (registry: SourceRegistry, source: Source, reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error) => void
}

abstract class SourceRegistryClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistryClass

    static name: string
}

interface SourceRegistryPrivate {
}

class SourceRegistryPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistryPrivate

    static name: string
}

interface SourceRegistryWatcherClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceRegistryWatcherClass

    parentClass: GObject.ObjectClass
    filter: (watcher: SourceRegistryWatcher, source: Source) => boolean
    appeared: (watcher: SourceRegistryWatcher, source: Source) => void
    disappeared: (watcher: SourceRegistryWatcher, source: Source) => void
}

abstract class SourceRegistryWatcherClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistryWatcherClass

    static name: string
}

interface SourceRegistryWatcherPrivate {
}

class SourceRegistryWatcherPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistryWatcherPrivate

    static name: string
}

interface SourceResourceClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceResourceClass

    parentClass: SourceExtensionClass
}

abstract class SourceResourceClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceResourceClass

    static name: string
}

interface SourceResourcePrivate {
}

class SourceResourcePrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceResourcePrivate

    static name: string
}

interface SourceRevisionGuardsClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceRevisionGuardsClass

    parentClass: SourceExtensionClass
}

abstract class SourceRevisionGuardsClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceRevisionGuardsClass

    static name: string
}

interface SourceRevisionGuardsPrivate {
}

class SourceRevisionGuardsPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceRevisionGuardsPrivate

    static name: string
}

interface SourceSMIMEClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceSMIMEClass

    parentClass: SourceExtensionClass
}

abstract class SourceSMIMEClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceSMIMEClass

    static name: string
}

interface SourceSMIMEPrivate {
}

class SourceSMIMEPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceSMIMEPrivate

    static name: string
}

interface SourceSecurityClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceSecurityClass

    parentClass: SourceExtensionClass
}

abstract class SourceSecurityClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceSecurityClass

    static name: string
}

interface SourceSecurityPrivate {
}

class SourceSecurityPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceSecurityPrivate

    static name: string
}

interface SourceSelectableClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceSelectableClass

    parentClass: SourceBackendClass
}

abstract class SourceSelectableClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceSelectableClass

    static name: string
}

interface SourceSelectablePrivate {
}

class SourceSelectablePrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceSelectablePrivate

    static name: string
}

interface SourceTaskListClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceTaskListClass

    parentClass: SourceSelectableClass
}

abstract class SourceTaskListClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceTaskListClass

    static name: string
}

interface SourceTaskListPrivate {
}

class SourceTaskListPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceTaskListPrivate

    static name: string
}

interface SourceUoaClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceUoaClass

    parentClass: SourceExtensionClass
}

abstract class SourceUoaClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceUoaClass

    static name: string
}

interface SourceUoaPrivate {
}

class SourceUoaPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceUoaPrivate

    static name: string
}

interface SourceWeatherClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceWeatherClass

    parentClass: SourceExtensionClass
}

abstract class SourceWeatherClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceWeatherClass

    static name: string
}

interface SourceWeatherPrivate {
}

class SourceWeatherPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceWeatherPrivate

    static name: string
}

interface SourceWebDAVNotesClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceWebDAVNotesClass

    parentClass: SourceExtensionClass
}

abstract class SourceWebDAVNotesClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebDAVNotesClass

    static name: string
}

interface SourceWebDAVNotesPrivate {
}

class SourceWebDAVNotesPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebDAVNotesPrivate

    static name: string
}

interface SourceWebdavClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceWebdavClass

    parentClass: SourceExtensionClass
}

abstract class SourceWebdavClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebdavClass

    static name: string
}

interface SourceWebdavPrivate {
}

class SourceWebdavPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebdavPrivate

    static name: string
}

interface WebDAVAccessControlEntry {

    // Own fields of EDataServer-1.2.EDataServer.WebDAVAccessControlEntry

    principalKind: WebDAVACEPrincipalKind
    principalHref: string
    flags: number
    inheritedHref: string
    privileges: object[]

    // Owm methods of EDataServer-1.2.EDataServer.WebDAVAccessControlEntry

    /**
     * Appends a new `privilege` to the list of privileges for the `ace`.
     * The function assumes ownership of the `privilege,` which is freed
     * together with the `ace`.
     * @param privilege an #EWebDAVPrivilege
     */
    appendPrivilege(privilege: WebDAVPrivilege): void
    copy(): WebDAVAccessControlEntry | null
    getPrivileges(): WebDAVPrivilege[]
}

class WebDAVAccessControlEntry {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVAccessControlEntry

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.WebDAVAccessControlEntry

    /**
     * Describes one Access Control Entry (ACE).
     * 
     * The `flags` should always contain either %E_WEBDAV_ACE_FLAG_GRANT or
     * %E_WEBDAV_ACE_FLAG_DENY value.
     * 
     * Use e_webdav_access_control_entry_append_privilege() to add respective
     * privileges to the entry.
     * @constructor 
     * @param principalKind an #EWebDAVACEPrincipalKind
     * @param principalHref principal href; should be set only if `principal_kind` is `E_WEBDAV_ACE_PRINCIPAL_HREF`
     * @param flags bit-or of #EWebDAVACEFlag values
     * @param inheritedHref href of the resource from which inherits; should be set only if `flags` contain E_WEBDAV_ACE_FLAG_INHERITED
     */
    constructor(principalKind: WebDAVACEPrincipalKind, principalHref: string | null, flags: number, inheritedHref: string | null) 
    /**
     * Describes one Access Control Entry (ACE).
     * 
     * The `flags` should always contain either %E_WEBDAV_ACE_FLAG_GRANT or
     * %E_WEBDAV_ACE_FLAG_DENY value.
     * 
     * Use e_webdav_access_control_entry_append_privilege() to add respective
     * privileges to the entry.
     * @constructor 
     * @param principalKind an #EWebDAVACEPrincipalKind
     * @param principalHref principal href; should be set only if `principal_kind` is `E_WEBDAV_ACE_PRINCIPAL_HREF`
     * @param flags bit-or of #EWebDAVACEFlag values
     * @param inheritedHref href of the resource from which inherits; should be set only if `flags` contain E_WEBDAV_ACE_FLAG_INHERITED
     */
    static new(principalKind: WebDAVACEPrincipalKind, principalHref: string | null, flags: number, inheritedHref: string | null): WebDAVAccessControlEntry
    /**
     * Frees an #EWebDAVAccessControlEntry previously created with e_webdav_access_control_entry_new()
     * or e_webdav_access_control_entry_copy(). The function does nothing, if `ptr` is %NULL.
     * @param ptr an #EWebDAVAccessControlEntry
     */
    static free(ptr: object | null): void
}

interface WebDAVDiscoveredSource {

    // Own fields of EDataServer-1.2.EDataServer.WebDAVDiscoveredSource

    href: string
    supports: number
    displayName: string
    description: string
    color: string
    order: number

    // Owm methods of EDataServer-1.2.EDataServer.WebDAVDiscoveredSource

    /**
     * Copies the given EWebDAVDiscoveredSource.
     */
    copy(): WebDAVDiscoveredSource
    /**
     * Frees the `discovered_source`. Function does nothing, when it's %NULL.
     */
    free(): void
}

class WebDAVDiscoveredSource {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVDiscoveredSource

    static name: string
}

interface WebDAVPrivilege {

    // Own fields of EDataServer-1.2.EDataServer.WebDAVPrivilege

    nsUri: string
    name: string
    description: string
    kind: WebDAVPrivilegeKind
    hint: WebDAVPrivilegeHint

    // Owm methods of EDataServer-1.2.EDataServer.WebDAVPrivilege

    copy(): WebDAVPrivilege | null
}

class WebDAVPrivilege {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVPrivilege

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.WebDAVPrivilege

    /**
     * Describes one privilege entry. The `hint` can be %E_WEBDAV_PRIVILEGE_HINT_UNKNOWN
     * for privileges which are not known to the #EWebDAVSession. It's possible, because
     * the servers can define their own privileges. The hint is also tried to pair with
     * known hints when it's %E_WEBDAV_PRIVILEGE_HINT_UNKNOWN.
     * 
     * The `ns_uri` and `name` can be %NULL only if the `hint` is one of the known
     * privileges. Otherwise it's an error to pass either of the two as %NULL.
     * @constructor 
     * @param nsUri a namespace URI
     * @param name element name
     * @param description human read-able description, or %NULL
     * @param kind an #EWebDAVPrivilegeKind
     * @param hint an #EWebDAVPrivilegeHint
     */
    constructor(nsUri: string | null, name: string | null, description: string | null, kind: WebDAVPrivilegeKind, hint: WebDAVPrivilegeHint) 
    /**
     * Describes one privilege entry. The `hint` can be %E_WEBDAV_PRIVILEGE_HINT_UNKNOWN
     * for privileges which are not known to the #EWebDAVSession. It's possible, because
     * the servers can define their own privileges. The hint is also tried to pair with
     * known hints when it's %E_WEBDAV_PRIVILEGE_HINT_UNKNOWN.
     * 
     * The `ns_uri` and `name` can be %NULL only if the `hint` is one of the known
     * privileges. Otherwise it's an error to pass either of the two as %NULL.
     * @constructor 
     * @param nsUri a namespace URI
     * @param name element name
     * @param description human read-able description, or %NULL
     * @param kind an #EWebDAVPrivilegeKind
     * @param hint an #EWebDAVPrivilegeHint
     */
    static new(nsUri: string | null, name: string | null, description: string | null, kind: WebDAVPrivilegeKind, hint: WebDAVPrivilegeHint): WebDAVPrivilege
    /**
     * Frees an #EWebDAVPrivilege previously created with e_webdav_privilege_new()
     * or e_webdav_privilege_copy(). The function does nothing, if `ptr` is %NULL.
     * @param ptr an #EWebDAVPrivilege
     */
    static free(ptr: object | null): void
}

interface WebDAVPropertyChange {

    // Own fields of EDataServer-1.2.EDataServer.WebDAVPropertyChange

    kind: WebDAVPropertyChangeKind
    nsUri: string
    name: string
    value: string

    // Owm methods of EDataServer-1.2.EDataServer.WebDAVPropertyChange

    copy(): WebDAVPropertyChange | null
}

class WebDAVPropertyChange {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVPropertyChange

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.WebDAVPropertyChange

    /**
     * Creates a new #EWebDAVPropertyChange of kind %E_WEBDAV_PROPERTY_REMOVE,
     * which is used to remove the given property. To change property value
     * use e_webdav_property_change_new_set() instead.
     * @constructor 
     * @param nsUri namespace URI of the property
     * @param name name of the property
     */
    static newRemove(nsUri: string, name: string): WebDAVPropertyChange
    /**
     * Creates a new #EWebDAVPropertyChange of kind %E_WEBDAV_PROPERTY_SET,
     * which is used to modify or set the property value. The `value` is a string
     * representation of the value to store. It can be %NULL, but it means
     * an empty value, not to remove it. To remove property use
     * e_webdav_property_change_new_remove() instead.
     * @constructor 
     * @param nsUri namespace URI of the property
     * @param name name of the property
     * @param value value of the property, or %NULL for empty value
     */
    static newSet(nsUri: string, name: string, value: string | null): WebDAVPropertyChange
    /**
     * Frees an #EWebDAVPropertyChange previously created with e_webdav_property_change_new_set(),
     * e_webdav_property_change_new_remove() or or e_webdav_property_change_copy().
     * The function does nothing, if `ptr` is %NULL.
     * @param ptr an #EWebDAVPropertyChange
     */
    static free(ptr: object | null): void
}

interface WebDAVResource {

    // Own fields of EDataServer-1.2.EDataServer.WebDAVResource

    kind: WebDAVResourceKind
    supports: number
    href: string
    etag: string
    displayName: string
    contentType: string
    contentLength: number
    creationDate: number
    lastModified: number
    description: string
    color: string
    order: number

    // Owm methods of EDataServer-1.2.EDataServer.WebDAVResource

    copy(): WebDAVResource | null
}

class WebDAVResource {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVResource

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.WebDAVResource

    /**
     * Some values of the resource are not always valid, depending on the `kind,`
     * but also whether server stores such values and whether it had been asked
     * for them to be fetched.
     * 
     * The `etag` for %E_WEBDAV_RESOURCE_KIND_COLLECTION can be a change tag instead.
     * @constructor 
     * @param kind an #EWebDAVResourceKind of the resource
     * @param supports bit-or of #EWebDAVResourceSupports values
     * @param href href of the resource
     * @param etag optional ETag of the resource, or %NULL
     * @param displayName optional display name of the resource, or %NULL
     * @param contentType optional Content-Type of the resource, or %NULL
     * @param contentLength optional Content-Length of the resource, or 0
     * @param creationDate optional date of creation of the resource, or 0
     * @param lastModified optional last modified time of the resource, or 0
     * @param description optional description of the resource, or %NULL
     * @param color optional color of the resource, or %NULL
     * @param order sort order of the resource, or (guint) -1
     */
    constructor(kind: WebDAVResourceKind, supports: number, href: string, etag: string | null, displayName: string | null, contentType: string | null, contentLength: number, creationDate: number, lastModified: number, description: string | null, color: string | null, order: number) 
    /**
     * Some values of the resource are not always valid, depending on the `kind,`
     * but also whether server stores such values and whether it had been asked
     * for them to be fetched.
     * 
     * The `etag` for %E_WEBDAV_RESOURCE_KIND_COLLECTION can be a change tag instead.
     * @constructor 
     * @param kind an #EWebDAVResourceKind of the resource
     * @param supports bit-or of #EWebDAVResourceSupports values
     * @param href href of the resource
     * @param etag optional ETag of the resource, or %NULL
     * @param displayName optional display name of the resource, or %NULL
     * @param contentType optional Content-Type of the resource, or %NULL
     * @param contentLength optional Content-Length of the resource, or 0
     * @param creationDate optional date of creation of the resource, or 0
     * @param lastModified optional last modified time of the resource, or 0
     * @param description optional description of the resource, or %NULL
     * @param color optional color of the resource, or %NULL
     * @param order sort order of the resource, or (guint) -1
     */
    static new(kind: WebDAVResourceKind, supports: number, href: string, etag: string | null, displayName: string | null, contentType: string | null, contentLength: number, creationDate: number, lastModified: number, description: string | null, color: string | null, order: number): WebDAVResource
    /**
     * Frees an #EWebDAVResource previously created with e_webdav_resource_new()
     * or e_webdav_resource_copy(). The function does nothing, if `ptr` is %NULL.
     * @param ptr an #EWebDAVResource
     */
    static free(ptr: object | null): void
}

interface WebDAVSessionClass {

    // Own fields of EDataServer-1.2.EDataServer.WebDAVSessionClass

    parentClass: SoupSessionClass
    reserved: object[]
}

abstract class WebDAVSessionClass {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVSessionClass

    static name: string
}

interface WebDAVSessionPrivate {
}

class WebDAVSessionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVSessionPrivate

    static name: string
}

interface XmlDocumentClass {

    // Own fields of EDataServer-1.2.EDataServer.XmlDocumentClass

    parentClass: GObject.ObjectClass
    reserved: object[]
}

abstract class XmlDocumentClass {

    // Own properties of EDataServer-1.2.EDataServer.XmlDocumentClass

    static name: string
}

interface XmlDocumentPrivate {
}

class XmlDocumentPrivate {

    // Own properties of EDataServer-1.2.EDataServer.XmlDocumentPrivate

    static name: string
}

interface XmlHash {
}

/**
 * A hash table representation of an XML file.
 * @record 
 */
class XmlHash {

    // Own properties of EDataServer-1.2.EDataServer.XmlHash

    static name: string
}

}
export default EDataServer;