
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * EDataServer-1.2
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Json from '@girs/json-1.0';
import type Camel from '@girs/camel-1.2';

/**
 * Error codes for #EClient operations.
 */
export enum ClientError {
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
export enum CollatorError {
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
export enum ConflictResolution {
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
 * Holds status of a task.
 */
export enum GDataTaskStatus {
    /**
     * unknown status
     */
    UNKNOWN,
    /**
     * the task needs action
     */
    NEEDS_ACTION,
    /**
     * the task is completed
     */
    COMPLETED,
}
/**
 * Policy for responding to Message Disposition Notification requests
 * (i.e. a Disposition-Notification-To header) when receiving messages.
 * See RFC 2298 for more information about MDN requests.
 */
export enum MdnResponsePolicy {
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
export enum OAuth2ServiceNavigationPolicy {
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
export enum ProxyMethod {
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
export enum SourceAuthenticationResult {
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
export enum SourceConnectionStatus {
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
export enum SourceCredentialsReason {
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
export enum SourceLDAPAuthentication {
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
export enum SourceLDAPScope {
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
export enum SourceLDAPSecurity {
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
export enum SourceMailCompositionReplyStyle {
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
export enum SourceWeatherUnits {
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
export enum TimeParseStatus {
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
export enum TrustPromptResponse {
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
export enum WebDAVACEPrincipalKind {
    UNKNOWN,
    HREF,
    ALL,
    AUTHENTICATED,
    UNAUTHENTICATED,
    PROPERTY,
    SELF,
    OWNER,
}
export enum WebDAVLockScope {
    EXCLUSIVE,
    SHARED,
}
export enum WebDAVPrivilegeHint {
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
export enum WebDAVPrivilegeKind {
    UNKNOWN,
    ABSTRACT,
    AGGREGATE,
    COMMON,
}
export enum WebDAVPropertyChangeKind {
    SET,
    REMOVE,
}
export enum WebDAVResourceKind {
    UNKNOWN,
    ADDRESSBOOK,
    CALENDAR,
    PRINCIPAL,
    COLLECTION,
    RESOURCE,
    SUBSCRIBED_ICALENDAR,
    WEBDAV_NOTES,
}
export enum XmlHashStatus {
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
export enum XmlHashType {
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
export enum OAuth2ServiceFlags {
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
export enum WebDAVACEFlag {
    UNKNOWN,
    GRANT,
    DENY,
    INVERT,
    PROTECTED,
    INHERITED,
}
export enum WebDAVACLRestrictions {
    NONE,
    GRANT_ONLY,
    NO_INVERT,
    DENY_BEFORE_GRANT,
    REQUIRED_PRINCIPAL,
}
export enum WebDAVDiscoverSupports {
    NONE,
    CONTACTS,
    EVENTS,
    MEMOS,
    TASKS,
    WEBDAV_NOTES,
    CALENDAR_AUTO_SCHEDULE,
    SUBSCRIBED_ICALENDAR,
}
export enum WebDAVListFlags {
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
export enum WebDAVResourceSupports {
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
export const CLIENT_BACKEND_PROPERTY_CACHE_DIR: string | null
/**
 * The "capabilities" property is a comma-separated list of capabilities
 * supported by the backend.  The preferred method of retrieving and working
 * with capabilities is e_client_get_capabilities() and
 * e_client_check_capability().
 */
export const CLIENT_BACKEND_PROPERTY_CAPABILITIES: string | null
/**
 * The "online" property is "TRUE" when the client is fully opened and
 * online, "FALSE" at all other times.  See also e_client_is_online().
 */
export const CLIENT_BACKEND_PROPERTY_ONLINE: string | null
/**
 * The "opened" property is "TRUE" when the client is fully opened,
 * "FALSE" at all other times.
 */
export const CLIENT_BACKEND_PROPERTY_OPENED: string | null
/**
 * The "opening" property is "TRUE" when the client is in the process of
 * opening, "FALSE" at all other times.
 */
export const CLIENT_BACKEND_PROPERTY_OPENING: string | null
/**
 * The "online" property is "TRUE" if the backend has only read access
 * to its data, "FALSE" if the backend can modify its data.  See also
 * e_client_is_readonly().
 */
export const CLIENT_BACKEND_PROPERTY_READONLY: string | null
/**
 * The current overall revision string, this can be used as
 * a quick check to see if data has changed at all since the
 * last time the revision was observed.
 */
export const CLIENT_BACKEND_PROPERTY_REVISION: string | null
export const DEBUG_LOG_DOMAIN_CAL_QUERIES: string | null
export const DEBUG_LOG_DOMAIN_GLOG: string | null
export const DEBUG_LOG_DOMAIN_USER: string | null
/**
 * The major version number of the Evolution-Data-Server library.  Like
 * eds_major_version(), but from the headers used at application compile
 * time, rather than from the library linked against at application run
 * time.
 */
export const EDS_MAJOR_VERSION: number
/**
 * The micro version number of the Evolution-Data-Server library.  Like
 * eds_micro_version(), but from the headers used at application compile
 * time, rather than from the library linked against at application run
 * time.
 */
export const EDS_MICRO_VERSION: number
/**
 * The minor version number of the Evolution-Data-Server library.  Like
 * eds_minor_version(), but from the headers used at application compile
 * time, rather than from the library linked against at application run
 * time.
 */
export const EDS_MINOR_VERSION: number
/**
 * A special name, which can be used as a GIO name in the call
 * to e_network_monitor_set_gio_name(), which is used to report
 * the network as always reachable.
 */
export const NETWORK_MONITOR_ALWAYS_ONLINE_NAME: string | null
export const OAUTH2_SECRET_ACCESS_TOKEN: string | null
export const OAUTH2_SECRET_EXPIRES_AFTER: string | null
export const OAUTH2_SECRET_REFRESH_TOKEN: string | null
/**
 * A name of the named parameter used for passwords in credentials,
 * used to authenticate users with e_source_invoke_authenticate_sync()
 * and e_source_invoke_authenticate(). The named parameter is optional,
 * different authentication methods can use different names.
 */
export const SOURCE_CREDENTIAL_PASSWORD: string | null
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
export const SOURCE_CREDENTIAL_SSL_TRUST: string | null
/**
 * A name of the named parameter used for usernames in credentials,
 * used to authenticate users with e_source_invoke_authenticate_sync()
 * and e_source_invoke_authenticate(). The named parameter is optional,
 * different authentication methods can use different names.
 */
export const SOURCE_CREDENTIAL_USERNAME: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceAddressBook.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_ADDRESS_BOOK: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceAlarms.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_ALARMS: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceAuthentication.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_AUTHENTICATION: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceAutocomplete.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_AUTOCOMPLETE: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceAutoconfig.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_AUTOCONFIG: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceCalendar.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_CALENDAR: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceCollection.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_COLLECTION: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceContacts.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_CONTACTS_BACKEND: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceGoa.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_GOA: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceLDAP.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_LDAP_BACKEND: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceLocal.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_LOCAL_BACKEND: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMailAccount.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_MAIL_ACCOUNT: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMailComposition.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_MAIL_COMPOSITION: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMailIdentity.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_MAIL_IDENTITY: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMailSignature.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_MAIL_SIGNATURE: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMailSubmission.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_MAIL_SUBMISSION: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMailTransport.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_MAIL_TRANSPORT: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMDN.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_MDN: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceMemoList.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_MEMO_LIST: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceOffline.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_OFFLINE: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceOpenPGP.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_OPENPGP: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceProxy.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_PROXY: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceRefresh.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_REFRESH: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceResource.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_RESOURCE: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceRevisionGuards.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_REVISION_GUARDS: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceSecurity.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_SECURITY: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceSMIME.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_SMIME: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceTaskList.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_TASK_LIST: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceUoa.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_UOA: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceWeather.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_WEATHER_BACKEND: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceWebdav.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_WEBDAV_BACKEND: string | null
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceWebDAVNotes.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_WEBDAV_NOTES: string | null
/**
 * Extends #GParamFlags to indicate the #GObject property is associated
 * with a key file value.  Use this flag when installing #GObject properties
 * in #ESourceExtension subclasses.
 */
export const SOURCE_PARAM_SETTING: number
export const WEBDAV_CAPABILITY_ACCESS_CONTROL: string | null
export const WEBDAV_CAPABILITY_ADDRESSBOOK: string | null
export const WEBDAV_CAPABILITY_BIND: string | null
export const WEBDAV_CAPABILITY_CALENDAR_ACCESS: string | null
export const WEBDAV_CAPABILITY_CALENDAR_AUTO_SCHEDULE: string | null
export const WEBDAV_CAPABILITY_CALENDAR_PROXY: string | null
export const WEBDAV_CAPABILITY_CALENDAR_SCHEDULE: string | null
export const WEBDAV_CAPABILITY_CLASS_1: string | null
export const WEBDAV_CAPABILITY_CLASS_2: string | null
export const WEBDAV_CAPABILITY_CLASS_3: string | null
export const WEBDAV_CAPABILITY_EXTENDED_MKCOL: string | null
export const WEBDAV_COLLATION_ASCII_CASEMAP: string | null
export const WEBDAV_COLLATION_ASCII_CASEMAP_SUFFIX: string | null
export const WEBDAV_COLLATION_ASCII_NUMERIC: string | null
export const WEBDAV_COLLATION_ASCII_NUMERIC_SUFFIX: string | null
export const WEBDAV_COLLATION_OCTET: string | null
export const WEBDAV_COLLATION_OCTET_SUFFIX: string | null
export const WEBDAV_COLLATION_UNICODE_CASEMAP: string | null
export const WEBDAV_COLLATION_UNICODE_CASEMAP_SUFFIX: string | null
export const WEBDAV_CONTENT_TYPE_CALENDAR: string | null
export const WEBDAV_CONTENT_TYPE_VCARD: string | null
export const WEBDAV_CONTENT_TYPE_XML: string | null
export const WEBDAV_DEPTH_INFINITY: string | null
export const WEBDAV_DEPTH_THIS: string | null
export const WEBDAV_DEPTH_THIS_AND_CHILDREN: string | null
export const WEBDAV_NS_CALDAV: string | null
export const WEBDAV_NS_CALENDARSERVER: string | null
export const WEBDAV_NS_CARDDAV: string | null
export const WEBDAV_NS_DAV: string | null
export const WEBDAV_NS_ICAL: string | null
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
export function bindingBindPropertyFull(source: GObject.Object, sourceProperty: string | null, target: GObject.Object, targetProperty: string | null, flags: GObject.BindingFlags, transformTo: GObject.TClosure | null, transformFrom: GObject.TClosure | null): GObject.Binding
/**
 * Transforms an enumeration nickname to its corresponding value.
 * @param binding a #GBinding
 * @param sourceValue a #GValue of type #G_TYPE_STRING
 * @param targetValue a #GValue whose type is derived from #G_TYPE_ENUM
 * @param notUsed not used
 * @returns %TRUE if the enum nickname has a corresponding value
 */
export function bindingTransformEnumNickToValue(binding: GObject.Binding, sourceValue: any, targetValue: any, notUsed: any | null): boolean
/**
 * Transforms an enumeration value to its corresponding nickname.
 * @param binding a #GBinding
 * @param sourceValue a #GValue whose type is derived from #G_TYPE_ENUM
 * @param targetValue a #GValue of type #G_TYPE_STRING
 * @param notUsed not used
 * @returns %TRUE if the enum value has a corresponding nickname
 */
export function bindingTransformEnumValueToNick(binding: GObject.Binding, sourceValue: any, targetValue: any, notUsed: any | null): boolean
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
export function categoriesAdd(category: string | null, unused: string | null, iconFile: string | null, searchable: boolean): void
/**
 * Gets the icon file associated with the given category and returns a copy of
 * it.
 * 
 * This function is thread safe.
 * @param category category to retrieve the icon file for.
 * @returns icon file name; free with g_free().
 */
export function categoriesDupIconFileFor(category: string | null): string | null
/**
 * Returns a sorted list of all the category names currently configured.
 * 
 * This function is thread safe.
 * @returns a sorted #GList containing the names of the categories. The list should be freed using g_list_free(), and the names of the categories should be freed using g_free(). Everything can be freed simultaneously using g_list_free_full().
 */
export function categoriesDupList(): string[]
/**
 * Checks whether the given category is available in the configuration.
 * 
 * This function is thread safe.
 * @param category category to be searched.
 * @returns %TRUE if the category is available, %FALSE otherwise.
 */
export function categoriesExist(category: string | null): boolean
/**
 * Gets the icon file associated with the given category.
 * 
 * This function is mostly thread safe, but as the icon file name is not
 * copied, it may be freed by another thread after being returned by this
 * function. Use e_categories_dup_icon_file_for() instead.
 * @param category category to retrieve the icon file for.
 * @returns icon file name.
 */
export function categoriesGetIconFileFor(category: string | null): string | null
/**
 * Returns a sorted list of all the category names currently configured.
 * 
 * This function is mostly thread safe, but as the category names are not
 * copied, they may be freed by another thread after being returned by this
 * function. Use e_categories_dup_list() instead.
 * @returns a sorted GList containing the names of the categories. The list should be freed using g_list_free(), but the names of the categories should not be touched at all, they are internal strings.
 */
export function categoriesGetList(): string[]
/**
 * Gets whether the given calendar is to be used for searches in the GUI.
 * 
 * This function is thread safe.
 * 
 * Return value; %TRUE% if the category is searchable, %FALSE% if not.
 * @param category category name.
 */
export function categoriesIsSearchable(category: string | null): boolean
/**
 * Registers callback to be called on change of any category.
 * Pair listener and user_data is used to distinguish between listeners.
 * Listeners can be unregistered with `e_categories_unregister_change_listener`.
 * 
 * This function is thread safe.
 * @param listener the callback to be called on any category change.
 */
export function categoriesRegisterChangeListener(listener: GObject.Callback): void
/**
 * Removes the given category from the configuration.
 * 
 * This function is thread safe.
 * @param category category to be removed.
 */
export function categoriesRemove(category: string | null): void
/**
 * Sets the icon file associated with the given category.
 * 
 * This function is thread safe.
 * @param category category to set the icon file for.
 * @param iconFile icon file.
 */
export function categoriesSetIconFileFor(category: string | null, iconFile: string | null): void
/**
 * Removes previously registered callback from the list of listeners on changes.
 * If it was not registered, then does nothing.
 * 
 * This function is thread safe.
 * @param listener Callback to be removed.
 */
export function categoriesUnregisterChangeListener(listener: GObject.Callback): void
export function collatorErrorQuark(): GLib.Quark
/**
 * Returns the value set by e_data_server_util_set_dbus_call_timeout().
 * @returns the D-Bus call timeout in milliseconds
 */
export function dataServerUtilGetDbusCallTimeout(): number
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
export function dataServerUtilSetDbusCallTimeout(timeoutMsec: number): void
export function debugLogClear(): void
/**
 * Disables all domains from the `domains` array.
 * @param domains an array of domains to disable
 */
export function debugLogDisableDomains(domains: string[]): void
/**
 * Saves current log information to the given `filename`.
 * @param filename a filename to save logged information to
 * @returns whether succeeded
 */
export function debugLogDump(filename: string | null): boolean
/**
 * Saves current log information to a file "e-debug-log-YYYY-MM-DD-HH-mm-ss.txt"
 * in the user's HOME directory.
 * @returns whether succeeded
 */
export function debugLogDumpToDatedFile(): boolean
/**
 * Enables all domains from the `domains` array.
 * @param domains an array of domains to enable
 */
export function debugLogEnableDomains(domains: string[]): void
export function debugLogGetMaxLines(): number
export function debugLogIsDomainEnabled(domain: string | null): boolean
/**
 * Loads configuration for the logging from the given `filename`.
 * @param filename a configuration file name
 * @returns whether succeeded
 */
export function debugLogLoadConfiguration(filename: string | null): boolean
/**
 * Limits how many lines the log can have.
 * @param numLines number of lines
 */
export function debugLogSetMaxLines(numLines: number): void
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
 * @returns %NULL if the Evolution-Data-Server library is compatible with the given version, or a string describing the version mismatch.  The returned string is owned by libedataserver and must not be modified or freed.
 */
export function edsCheckVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string | null
/**
 * Fetches the appropriate enumeration value for `string` in the given
 * enum type `type` and stores the result in `enum_value`
 * @param enumType The enum type
 * @param string The string containing the enum value or nick
 * @param enumValue A return location to store the result
 * @returns %TRUE if the string was a valid name or nick        for the given @type, %FALSE if the conversion failed.
 */
export function enumFromString(enumType: GObject.GType, string: string | null, enumValue: number): boolean
/**
 * Converts an enum value to a string using strings from the GType system.
 * @param enumType An enum type
 * @param enumValue The enum value to convert
 * @returns the string representing @eval
 */
export function enumToString(enumType: GObject.GType, enumValue: number): string | null
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
export function fileRecursiveDelete(file: Gio.File, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes the operation started with e_file_recursive_delete().
 * 
 * If the operation was cancelled, the error #G_IO_ERROR_CANCELLED will be
 * returned.
 * @param file a #GFile to delete
 * @param result a #GAsyncResult
 * @returns %TRUE if the file was deleted, %FALSE otherwise
 */
export function fileRecursiveDeleteFinish(file: Gio.File, result: Gio.AsyncResult): boolean
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
 * @returns %TRUE if the file was deleted, %FALSE otherwise
 */
export function fileRecursiveDeleteSync(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
export function filenameMakeSafe(string: string | null): void
/**
 * Creates a local path constructed from `basepath` / `fileprefix` + "-" + `filename,`
 * and makes sure the path `basepath` exists. If creation of
 * the path fails, then NULL is returned.
 * @param basepath base path of a file name; this is left unchanged
 * @param fileprefix prefix for the filename; this is encoded
 * @param filename file name to use; this is encoded; can be %NULL
 * @param fileindex used when `filename` is NULL, then the filename        is generated as "file" + fileindex
 * @returns Full local path like g_build_filename() except that @fileprefix and @filename are encoded to create a proper file elements for a file system. Free returned pointer with g_free().
 */
export function filenameMkdirEncoded(basepath: string | null, fileprefix: string | null, filename: string | null, fileindex: number): string | null
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
 * @returns converted @free_form_exp into S-Expression, %NULL on error.    Free the returned string with a g_free(), when done with it.
 */
export function freeFormExpToSexp(freeFormExp: string | null, symbols: FreeFormExpSymbol): string | null
/**
 * Adds a Task:completed property `value` into the `builder,` which
 * should have started an object member.
 * 
 * When the `value` is 0, then adds a NULL-object, to indicate
 * removal of the property.
 * @param builder a #JsonBuilder with a started object member
 * @param value a Task::completed property value, as Unix time
 */
export function gdataTaskAddCompleted(builder: Json.Builder, value: number): void
/**
 * Adds a Task::due property `value` into the `builder,` which
 * should have started an object member.
 * 
 * When the `value` is 0, then adds a NULL-object, to indicate
 * removal of the property.
 * @param builder a #JsonBuilder with a started object member
 * @param value a Task::due property value, as Unix time
 */
export function gdataTaskAddDue(builder: Json.Builder, value: number): void
/**
 * Adds a Task::id property `value` into the `builder,` which
 * should have started an object member.
 * @param builder a #JsonBuilder with a started object member
 * @param value a Task::id property value
 */
export function gdataTaskAddId(builder: Json.Builder, value: string | null): void
/**
 * Adds a Task::notes property `value` into the `builder,` which
 * should have started an object member.
 * 
 * When the `value` is %NULL, then adds a NULL-object, to indicate removal
 * of the property.
 * @param builder a #JsonBuilder with a started object member
 * @param value a Task::notes property value
 */
export function gdataTaskAddNotes(builder: Json.Builder, value: string | null): void
/**
 * Adds a Task::status property `value` into the `builder,` which
 * should have started an object member.
 * 
 * When the `value` is %E_GDATA_TASK_STATUS_UNKNOWN, then adds a NULL-object,
 * to indicate removal of the property.
 * @param builder a #JsonBuilder with a started object member
 * @param value a Task::status property value
 */
export function gdataTaskAddStatus(builder: Json.Builder, value: GDataTaskStatus): void
/**
 * Adds a Task::title property `value` into the `builder,` which
 * should have started an object member.
 * @param builder a #JsonBuilder with a started object member
 * @param value a Task::title property value
 */
export function gdataTaskAddTitle(builder: Json.Builder, value: string | null): void
/**
 * Returns Task::completed property, as Unix time.
 * @param task a GData Task
 * @returns Task::completed property or 0, when not found
 */
export function gdataTaskGetCompleted(task: Json.Object): number
/**
 * Returns Task::deleted property, as Unix time.
 * @param task a GData Task
 * @returns Task::deleted property or %FALSE, when not found
 */
export function gdataTaskGetDeleted(task: Json.Object): boolean
/**
 * Returns Task::due property, as Unix time.
 * @param task a GData Task
 * @returns Task::due property or 0, when not found
 */
export function gdataTaskGetDue(task: Json.Object): number
/**
 * Returns Task::etag property.
 * @param task a GData Task
 * @returns Task::etag property or %NULL, when not found
 */
export function gdataTaskGetEtag(task: Json.Object): string | null
/**
 * Returns Task::hidden property, as Unix time.
 * @param task a GData Task
 * @returns Task::hidden property or %FALSE, when not found
 */
export function gdataTaskGetHidden(task: Json.Object): boolean
/**
 * Returns Task::id property.
 * @param task a GData Task
 * @returns Task::id property or %NULL, when not found
 */
export function gdataTaskGetId(task: Json.Object): string | null
/**
 * Returns Task::notes property.
 * @param task a GData Task
 * @returns Task::notes property or %NULL, when not found
 */
export function gdataTaskGetNotes(task: Json.Object): string | null
/**
 * Returns Task::parent property.
 * @param task a GData Task
 * @returns Task::parent property or %NULL, when not found
 */
export function gdataTaskGetParent(task: Json.Object): string | null
/**
 * Returns Task::position property.
 * @param task a GData Task
 * @returns Task::position property or %NULL, when not found
 */
export function gdataTaskGetPosition(task: Json.Object): string | null
/**
 * Returns Task::selfLink property.
 * @param task a GData TaskList
 * @returns Task::selfLink property or %NULL, when not found
 */
export function gdataTaskGetSelfLink(task: Json.Object): string | null
/**
 * Returns Task::status property.
 * @param task a GData Task
 * @returns Task::status property as #EGDataTaskStatus or %E_GDATA_TASK_STATUS_UNKNOWN,    when not found or has set an unknown value.
 */
export function gdataTaskGetStatus(task: Json.Object): GDataTaskStatus
/**
 * Returns Task::title property.
 * @param task a GData Task
 * @returns Task::title property or %NULL, when not found
 */
export function gdataTaskGetTitle(task: Json.Object): string | null
/**
 * Returns Task::updated property, as Unix time.
 * @param task a GData Task
 * @returns Task::updated property or 0, when not found
 */
export function gdataTaskGetUpdated(task: Json.Object): number
/**
 * Adds a TaskList::id property `value` into the `builder,` which
 * should have started an object member.
 * @param builder a #JsonBuilder with a started object member
 * @param value a TaskList::id property value
 */
export function gdataTasklistAddId(builder: Json.Builder, value: string | null): void
/**
 * Adds a TaskList::title property `value` into the `builder,` which
 * should have started an object member.
 * @param builder a #JsonBuilder with a started object member
 * @param value a TaskList::title property value
 */
export function gdataTasklistAddTitle(builder: Json.Builder, value: string | null): void
/**
 * Returns TaskList::etag property.
 * @param tasklist a GData TaskList
 * @returns TaskList::etag property or %NULL, when not found
 */
export function gdataTasklistGetEtag(tasklist: Json.Object): string | null
/**
 * Returns TaskList::id property.
 * @param tasklist a GData TaskList
 * @returns TaskList::id property or %NULL, when not found
 */
export function gdataTasklistGetId(tasklist: Json.Object): string | null
/**
 * Returns TaskList::selfLink property.
 * @param tasklist a GData TaskList
 * @returns TaskList::selfLink property or %NULL, when not found
 */
export function gdataTasklistGetSelfLink(tasklist: Json.Object): string | null
/**
 * Returns TaskList::title property.
 * @param tasklist a GData TaskList
 * @returns TaskList::title property or %NULL, when not found
 */
export function gdataTasklistGetTitle(tasklist: Json.Object): string | null
/**
 * Returns TaskList::updated property, as Unix time.
 * @param tasklist a GData TaskList
 * @returns TaskList::updated property or 0, when not found
 */
export function gdataTasklistGetUpdated(tasklist: Json.Object): number
/**
 * Returns a base directory in which to store user-specific,
 * non-essential cached data for Evolution or Evolution-Data-Server.
 * 
 * The returned string is owned by libedataserver and must not be
 * modified or freed.
 * @returns base directory for user-specific, non-essential data
 */
export function getUserCacheDir(): string | null
/**
 * Returns a base directory in which to store user-specific configuration
 * information for Evolution or Evolution-Data-Server.
 * 
 * The returned string is owned by libedataserver and must not be
 * modified or freed.
 * @returns base directory for user-specific configuration information
 */
export function getUserConfigDir(): string | null
/**
 * Returns a base directory in which to store user-specific data for
 * Evolution or Evolution-Data-Server.
 * 
 * The returned string is owned by libedataserver and must not be
 * modified or freed.
 * @returns base directory for user-specific data
 */
export function getUserDataDir(): string | null
/**
 * Converts the calendar time time representation `tt` to a broken-down
 * time representation, store in `tm,` and provides the offset in
 * seconds from UTC time, stored in `offset`.
 * @param tt The #time_t to convert.
 * @param tm The #tm to store the result in.
 * @param offset The #int to store the offset in.
 */
export function localtimeWithOffset(tt: number, tm: any | null, offset: number): void
/**
 * Like mktime(3), but assumes UTC instead of local timezone.
 * @param tm The #tm to convert to a calendar time representation.
 * @returns The calendar time representation of @tm.
 */
export function mktimeUtc(tm: any | null): number
/**
 * Processes the `compile_value` and returns the result, which is stored
 * into the `out_glob_buff`. The `out_glob_buff` should be large enough to hold
 * the processed value and it should be a global memory buffer (usually
 * statically allocated) initialized to 0, which is used to short-circuit
 * the call, because the processing is done only if the first element
 * of the `out_glob_buff` is 0, in all other cases the function
 * immediately returns the `out_glob_buff`.
 * @param compileValue a value provided in the compile time
 * @param outGlobBuffSize size of the `out_glob_buff`
 * @returns processed @compile_value, saved into *out_glob_buff
 */
export function oauth2ServiceUtilCompileValue(compileValue: string | null, outGlobBuffSize: number): [ /* returnType */ string | null, /* outGlobBuff */ string | null ]
/**
 * Extracts either an authorization code from a 'code' argument of the `in_uri,`
 * or an error code from an 'error' argument of the `in_uri` and an error description
 * from the 'error_description' argument of the `in_uri`.
 * @param inUri a URI returned from the server
 * @returns %TRUE, when any of the non-NULL out arguments had been populated.
 */
export function oauth2ServiceUtilExtractFromUri(inUri: string | null): [ /* returnType */ boolean, /* outAuthorizationCode */ string | null, /* outErrorCode */ string | null, /* outErrorDescription */ string | null ]
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
export function oauth2ServiceUtilSetToForm(form: GLib.HashTable, name: string | null, value: string | null): void
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
export function oauth2ServiceUtilTakeToForm(form: GLib.HashTable, name: string | null, value: string | null): void
/**
 * Transfers the contents of `src_queue` to the tail of `dst_queue`.
 * When the operation is complete, `src_queue` will be empty.
 * @param srcQueue a source #GQueue
 * @param dstQueue a destination #GQueue
 */
export function queueTransfer(srcQueue: GLib.Queue, dstQueue: GLib.Queue): void
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
 * @returns %TRUE on success, %FALSE on error
 */
export function secretStoreDeleteSync(uid: string | null, cancellable: Gio.Cancellable | null): boolean
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
 * @returns %TRUE on success, %FALSE on error
 */
export function secretStoreLookupSync(uid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSecret */ string | null ]
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
 * @returns %TRUE on success, %FALSE on error
 */
export function secretStoreStoreSync(uid: string | null, secret: string | null, label: string | null, permanently: boolean, cancellable: Gio.Cancellable | null): boolean
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
export function soupSslTrustConnect(soupMessage: Soup.Message, source: Source): void
/**
 * This function is a wrapper around the strftime (3) function, which
 * converts the &percnt;l and &percnt;k (12h and 24h) format variables
 * if necessary.
 * @param string The string array to store the result in.
 * @param max The size of array `s`.
 * @param fmt The formatting to use on `tm`.
 * @param tm The time value to format.
 * @returns The number of characters placed in @s.
 */
export function strftime(string: string | null, max: number, fmt: string | null, tm: any | null): number
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
export function timeFormatDateAndTime(dateTm: any | null, use24HourFormat: boolean, showMidnight: boolean, showZeroSeconds: boolean, buffer: string | null, bufferSize: number): void
/**
 * Creates a string representation of a time value in `date_tm` and
 * stores it in `buffer`. `buffer_size` should be at least 64.
 * @param dateTm The #tm to convert to a string.
 * @param use24HourFormat A #gboolean.
 * @param showZeroSeconds A #gboolean.
 * @param buffer The #char buffer to store the result in.
 * @param bufferSize The length of `buffer`.
 */
export function timeFormatTime(dateTm: any | null, use24HourFormat: boolean, showZeroSeconds: boolean, buffer: string | null, bufferSize: number): void
/**
 * Retrieves a date format string with a 4-digit year (D_FMT on systems with
 * nl_langinfo() available). In case the current locale doesn't support 4-digit
 * year, the function returns format as specified by the locale.
 * 
 * Free the returned string with g_free().
 * @returns a newly-allocated date format string
 */
export function timeGetDFmtWith4digitYear(): string | null
/**
 * Takes in a date string entered by the user and tries to convert it to
 * a struct #tm.
 * @param value A date string.
 * @param result Return value for the parsed date.
 * @returns An #ETimeParseStatus result code indicating whether @value was an empty string, a valid date, or an invalid date.
 */
export function timeParseDate(value: string | null, result: any | null): TimeParseStatus
/**
 * Parses a string `value` containing a date and a time and stores the
 * result in `result`. The date in `value` is expected to be in a format
 * like "Wed 3/13/00 14:20:00", though gettext() is used to support the
 * appropriate local formats. There is also some leniency on the
 * format of the string, e.g. the weekday can be skipped or 12-hour
 * formats with am/pm can be used.
 * @param value the string to parse a date and time from
 * @param result a #tm to store the result in
 * @returns E_TIME_PARSE_OK if the string was successfully parsed,          E_TIME_PARSE_NONE if the string was empty, or          E_TIME_PARSE_INVALID if the string could not be parsed.
 */
export function timeParseDateAndTime(value: string | null, result: any | null): TimeParseStatus
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
 * @returns E_TIME_PARSE_OK if the string was successfully parsed,          E_TIME_PARSE_NONE if the string was empty, or          E_TIME_PARSE_INVALID if the string could not be parsed.
 */
export function timeParseDateAndTimeEx(value: string | null, result: any | null, twoDigitYear: boolean): TimeParseStatus
/**
 * Takes in a date string entered by the user and tries to convert it to
 * a struct #tm.
 * @param value A date string.
 * @param result Return value for the parsed date.
 * @param twoDigitYear set to TRUE, is parsing with two-digit year, else FALSE,    but only when not NULL.
 * @returns An #ETimeParseStatus result code indicating whether @value was an empty string, a valid date, or an invalid date.
 */
export function timeParseDateEx(value: string | null, result: any | null, twoDigitYear: boolean): TimeParseStatus
/**
 * Parses `value,` a string containing a time. `value` is expected to be
 * in a format like "14:20:00". gettext() is used to
 * support the appropriate local formats and slightly
 * different formats, such as 12-hour formats with am/pm,
 * are accepted as well.
 * @param value The string to parse a time from.
 * @param result A #tm to store the result in.
 * @returns An #ETimeParseStatus result code indicating whether @value was an empty string, a valid date, or an invalid date.
 */
export function timeParseTime(value: string | null, result: any | null): TimeParseStatus
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
 * @returns the ID (greater than 0) of the event source
 */
export function timeoutAddSecondsWithName(priority: number, interval: number, name: string | null, function_: GLib.SourceFunc): number
/**
 * Similar to g_timeout_add_full(), but also names the #GSource as `name`.
 * 
 * You might find e_named_timeout_add() or e_named_timeout_add_full() more
 * convenient.  Those macros name the #GSource implicitly.
 * @param priority the priority of the timeout source, typically in the            range between #G_PRIORITY_DEFAULT and #G_PRIORITY_HIGH
 * @param interval the time between calls to the function, in milliseconds            (1/1000ths of a second)
 * @param name debug name for the source
 * @param function_ function to call
 * @returns the ID (greather than 0) of the event source
 */
export function timeoutAddWithName(priority: number, interval: number, name: string | null, function_: GLib.SourceFunc): number
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
export function typeTraverse(parentType: GObject.GType, func: TypeFunc): void
/**
 * Generate a new unique string for use e.g. in account lists.
 * @returns The newly generated UID.  The caller should free the string when it's done with it.
 */
export function uidNew(): string | null
/**
 * The UTF-8 equivalent of e_strftime ().
 * @param string The string array to store the result in.
 * @param max The size of array `s`.
 * @param fmt The formatting to use on `tm`.
 * @param tm The time value to format.
 * @returns The number of characters placed in @s.
 */
export function utf8Strftime(string: string | null, max: number, fmt: string | null, tm: any | null): number
/**
 * Checks whether the `collection_source` can be used as a credential source
 * for the `child_source`. The relationship is not tested in the function.
 * When the `collection_source` is %NULL, then it simply returns %FALSE.
 * @param collectionSource a collection #ESource, or %NULL
 * @param childSource a children of `collection_source`
 * @returns whether @collection_source can be used as a credential source    for @child_source, that is, whether they share credentials.
 */
export function utilCanUseCollectionAsCredentialSource(collectionSource: any | null, childSource: any | null): boolean
/**
 * Changes component `component` in the `inout_uri` to value `value`.
 * As the #GUri cannot be modified the `inout_uri` points to a new #GUri
 * at the end of the call and the previous structure is unreffed.
 * 
 * See: e_util_change_uri_port()
 * @param inoutUri a #GUri
 * @param component a string #SoupURIComponent to change
 * @param value a value to set, or %NULL to unset
 */
export function utilChangeUriComponent(inoutUri: GLib.Uri, component: Soup.URIComponent, value: string | null): /* inoutUri */ GLib.Uri
/**
 * Changes the port in the `inout_uri` to value `port`.
 * As the #GUri cannot be modified the `inout_uri` points to a new #GUri
 * at the end of the call and the previous structure is unreffed.
 * 
 * See: e_util_change_uri_component()
 * @param inoutUri a #GUri
 * @param port the port number to set
 */
export function utilChangeUriPort(inoutUri: GLib.Uri, port: number): /* inoutUri */ GLib.Uri
/**
 * Copies #GSList of #GObject<!-- -->s at the end of `copy_to`.
 * @param copyTo Where to copy; can be %NULL
 * @param objects #GSList of #GObject<!-- -->s to be copied
 * @returns New head of @copy_to. Returned pointer can be freed with e_util_free_object_slist().
 */
export function utilCopyObjectSlist(copyTo: GObject.Object[] | null, objects: GObject.Object[]): GObject.Object[]
/**
 * Copies #GSList of strings at the end of `copy_to`.
 * @param copyTo Where to copy; can be %NULL
 * @param strings #GSList of strings to be copied
 * @returns New head of @copy_to. Returned pointer can be freed with e_util_free_string_slist().
 */
export function utilCopyStringSlist(copyTo: string[] | null, strings: string[]): string[]
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
 * 
 * ```
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
 * @returns a valid UTF-8 string
 */
export function utilEnsureGdbusString(str: string | null, gdbusStr: string | null): string | null
/**
 * Calls g_object_unref() on each member of `objects` if non-%NULL and then frees
 * also `objects` itself.
 * @param objects a #GSList of nullable #GObject<!-- -->s
 */
export function utilFreeNullableObjectSlist(objects: GObject.Object[]): void
/**
 * Calls g_object_unref() on each member of `objects` and then frees
 * also `objects` itself.
 * @param objects a #GSList of #GObject<!-- -->s
 */
export function utilFreeObjectSlist(objects: GObject.Object[]): void
/**
 * Frees memory previously allocated by e_util_strv_to_slist().
 * @param strings a #GSList of strings (gchar *)
 */
export function utilFreeStringSlist(strings: string[]): void
/**
 * Generates a unique identificator, which can be used as part of
 * the Message-ID header, or iCalendar component UID, or vCard UID.
 * The resulting string doesn't contain any host name, it's
 * a hexa-decimal string with no particular meaning.
 * 
 * Free the returned string with g_free(), when no longer needed.
 * @returns generated unique identificator as    a newly allocated string
 */
export function utilGenerateUid(): string | null
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
 * Constructs a full name of the `source` with all of its parents
 * of the form: "&lt;account-name&gt; : &lt;parent&gt;/&lt;source&gt;" where
 * the "&lt;parent&gt;/" part can be repeated zero or more times, depending
 * on the deep level of the `source`.
 * @param registry an #ESourceRegistry
 * @param source an #ESource
 * @returns Full name of the @source as a newly allocated    string, which should be freed with g_free() when done with it. Since 3.18
 */
export function utilGetSourceFullName(registry: any | null, source: any | null): string | null
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
 * @returns A 64-bit integer.
 */
export function utilGthreadId(thread: GLib.Thread): number
/**
 * Checks whether the `identity_source` can be used for sending, which means
 * whether it has configures send mail source.
 * @param registry an #ESourceRegistry
 * @param identitySource an #ESource with mail identity extension
 * @returns Whether @identity_source can be used to send messages
 */
export function utilIdentityCanSend(registry: any | null, identitySource: any | null): boolean
/**
 * Calls g_free() on `string,` but before it rewrites its content with zeros.
 * This is suitable to free strings with passwords.
 * @param str a string to free
 */
export function utilSafeFreeString(str: string | null): void
/**
 * Convert list of strings into NULL-terminates array of strings.
 * @param strings a #GSList of strings (const gchar *)
 * @returns Newly allocated %NULL-terminated array of strings. Returned pointer should be freed with g_strfreev(). Note: Pair function for this is e_util_strv_to_slist().
 */
export function utilSlistToStrv(strings: string[]): string[]
/**
 * Compares two #ESource-s in a way suitable for user interface.
 * It can be used as a #GCompareFunc.
 * 
 * This is also used by e_source_registry_build_display_tree().
 * @param sourceA the first #ESource
 * @param sourceB the second #ESource
 * @returns an integer less than, equal to, or greater than zero,    if @source_a is <, == or > than @source_b.
 */
export function utilSourceCompareForSort(sourceA: any | null, sourceB: any | null): number
/**
 * Compares `str1` and `str2` like g_strcmp0(), except it handles %NULL and
 * empty strings as equal.
 * @param str1 a C string on %NULL
 * @param str2 another C string or %NULL
 * @returns an integer less than 0 when @str1 is before @str2; 0 when    the strings are equal and an integer greated than 0 when @str1 is after @str2.
 */
export function utilStrcmp0(str1: string | null, str2: string | null): number
/**
 * Duplicates `string` and strips off any leading or trailing whitespace.
 * The resulting string is returned unless it is empty or %NULL, in which
 * case the function returns %NULL.
 * 
 * Free the returned string with g_free().
 * @param string a string value, or %NULL
 * @returns a newly-allocated, stripped copy of @string, or %NULL
 */
export function utilStrdupStrip(string: string | null): string | null
/**
 * Find the first instance of `needle` in `haystack,` ignoring case for
 * bytes that are ASCII characters.
 * @param haystack The string to search in.
 * @param needle The string to search for.
 * @returns A pointer to the start of @needle in @haystack, or NULL if          @needle is not found.
 */
export function utilStrstrcase(haystack: string | null, needle: string | null): string | null
/**
 * Compares `v1` and `v2` for equality, handling %NULL gracefully.
 * 
 * The arguments types are generic for compatibility with #GEqualFunc.
 * @param v1 a %NULL-terminated string array, or %NULL
 * @param v2 another %NULL-terminated string array, or %NULL
 * @returns whether @v1 and @v2 are identical
 */
export function utilStrvEqual(v1: string[], v2: string[]): boolean
/**
 * Convert NULL-terminated array of strings to a list of strings.
 * @param strv a NULL-terminated array of strings (const gchar *)
 * @returns Newly allocated #GSList of newly allocated strings. The returned pointer should be freed with e_util_free_string_slist(). Note: Pair function for this is e_util_slist_to_strv().
 */
export function utilStrvToSlist(strv: string | null): string[]
/**
 * Get a UTF-8 character from the beginning of `text`.
 * @param text The string to take the UTF-8 character from.
 * @param out The location to store the UTF-8 character in.
 * @returns A pointer to the next character in @text after @out.
 */
export function utilUnicodeGetUtf8(text: string | null, out: string): string | null
/**
 * Unrefs the given `object` in a dedicated thread. This is useful when unreffing
 * object deep in call stack when the caller might still use the object and
 * this being the last reference to it.
 * @param object a #GObject
 */
export function utilUnrefInThread(object: any | null): void
/**
 * Returns a newly-allocated NULL-terminated string with invalid characters
 * replaced by Unicode replacement characters (U+FFFD).
 * For %NULL `data` returns newly allocated empty string ("").
 * @param data UTF-8 binary data
 * @param dataBytes length of the binary data
 * @returns a newly-allocated string
 */
export function utilUtf8DataMakeValid(data: string | null, dataBytes: number): string | null
/**
 * Converts the `text` into a decomposed variant and strips it, which
 * allows also cheap case insensitive comparision afterwards. This
 * produces an output as being used in e_util_utf8_strstrcasedecomp().
 * @param text a UTF-8 string
 * @returns A newly allocated string, a decomposed    variant of the @text. Free with g_free(), when no longer needed.
 */
export function utilUtf8Decompose(text: string | null): string | null
/**
 * Returns a newly-allocated copy of `str,` with invalid characters
 * replaced by Unicode replacement characters (U+FFFD).
 * For %NULL `str` returns newly allocated empty string ("").
 * @param str a UTF-8 string
 * @returns a newly-allocated string
 */
export function utilUtf8MakeValid(str: string | null): string | null
/**
 * Normalizes `str` by making it all lower case and removing any accents from it.
 * @param str a UTF-8 string
 * @returns The normalized version of @str, or %NULL if @str was not valid UTF-8
 */
export function utilUtf8Normalize(str: string | null): string | null
/**
 * Returns a newly-allocated copy of `str` with accents removed.
 * @param str a UTF-8 string, or %NULL
 * @returns a newly-allocated string
 */
export function utilUtf8RemoveAccents(str: string | null): string | null
/**
 * Compares two UTF-8 strings using approximate case-insensitive ordering.
 * @param s1 a UTF-8 string
 * @param s2 another UTF-8 string
 * @returns < 0 if @s1 compares before @s2, 0 if they compare equal,          > 0 if @s1 compares after @s2
 */
export function utilUtf8Strcasecmp(s1: string | null, s2: string | null): number
/**
 * Find the first instance of `needle` in `haystack,` ignoring case. (No
 * proper case folding or decomposing is done.) Both `needle` and
 * `haystack` are UTF-8 strings.
 * @param haystack The string to search in.
 * @param needle The string to search for.
 * @returns A pointer to the first instance of @needle in @haystack, or          %NULL if no match is found, or if either of the strings are          not legal UTF-8 strings.
 */
export function utilUtf8Strstrcase(haystack: string | null, needle: string | null): string | null
/**
 * Find the first instance of `needle` in `haystack,` where both `needle`
 * and `haystack` are UTF-8 strings. Both strings are stripped and
 * decomposed for comparison, and case is ignored.
 * @param haystack The string to search in.
 * @param needle The string to search for.
 * @returns A pointer to the first instance of @needle in @haystack,    or %NULL if either of the strings are not legal UTF-8 strings.
 */
export function utilUtf8Strstrcasedecomp(haystack: string | null, needle: string | null): string | null
/**
 * Frees an #EWebDAVAccessControlEntry previously created with e_webdav_access_control_entry_new()
 * or e_webdav_access_control_entry_copy(). The function does nothing, if `ptr` is %NULL.
 * @param ptr an #EWebDAVAccessControlEntry
 */
export function webdavAccessControlEntryFree(ptr: any | null): void
/**
 * Frees a `GSList` of discovered sources returned from
 * e_webdav_discover_sources_finish() or e_webdav_discover_sources_sync().
 * @param discoveredSources A #GSList of discovered sources
 */
export function webdavDiscoverFreeDiscoveredSources(discoveredSources: WebDAVDiscoveredSource[]): void
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
export function webdavDiscoverSources(source: Source, urlUsePath: string | null, onlySupports: number, credentials: NamedParameters | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes the operation started with e_webdav_discover_sources(). If an
 * error occurred, the function will set `error` and return %FALSE. The function
 * can return success and no discovered sources, the same as it can return failure,
 * but still set some output arguments, like the certificate related output
 * arguments with G_TLS_ERROR_BAD_CERTIFICATE error.
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
 * @returns %TRUE on success, %FALSE on failure
 */
export function webdavDiscoverSourcesFinish(source: Source, result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outDiscoveredSources */ WebDAVDiscoveredSource[], /* outCalendarUserAddresses */ string[] ]
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
export function webdavDiscoverSourcesFull(source: Source, urlUsePath: string | null, onlySupports: number, credentials: NamedParameters | null, refSourceFunc: WebDAVDiscoverRefSourceFunc | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
 * @returns %TRUE on success, %FALSE on failure
 */
export function webdavDiscoverSourcesFullSync(source: Source, urlUsePath: string | null, onlySupports: number, credentials: NamedParameters | null, refSourceFunc: WebDAVDiscoverRefSourceFunc | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outDiscoveredSources */ WebDAVDiscoveredSource[], /* outCalendarUserAddresses */ string[] ]
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
 * arguments with G_TLS_ERROR_BAD_CERTIFICATE error.
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
 * @returns %TRUE on success, %FALSE on failure
 */
export function webdavDiscoverSourcesSync(source: Source, urlUsePath: string | null, onlySupports: number, credentials: NamedParameters | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outDiscoveredSources */ WebDAVDiscoveredSource[], /* outCalendarUserAddresses */ string[] ]
/**
 * Frees an #EWebDAVPrivilege previously created with e_webdav_privilege_new()
 * or e_webdav_privilege_copy(). The function does nothing, if `ptr` is %NULL.
 * @param ptr an #EWebDAVPrivilege
 */
export function webdavPrivilegeFree(ptr: any | null): void
/**
 * Frees an #EWebDAVPropertyChange previously created with e_webdav_property_change_new_set(),
 * e_webdav_property_change_new_remove() or or e_webdav_property_change_copy().
 * The function does nothing, if `ptr` is %NULL.
 * @param ptr an #EWebDAVPropertyChange
 */
export function webdavPropertyChangeFree(ptr: any | null): void
/**
 * Frees an #EWebDAVResource previously created with e_webdav_resource_new()
 * or e_webdav_resource_copy(). The function does nothing, if `ptr` is %NULL.
 * @param ptr an #EWebDAVResource
 */
export function webdavResourceFree(ptr: any | null): void
/**
 * Frees the memory used by `hash` and its contents.
 * @param hash the #GHashTable to destroy
 */
export function xmlDestroyHash(hash: GLib.HashTable): void
/**
 * Writes the given XML document structure to the file given by `filename`.
 * If an error occurs while saving, the function returns -1 and sets errno.
 * @param filename path to a file to save to
 * @param doc an XML document structure
 * @returns 0 on success, -1 on failure
 */
export function xmlSaveFile(filename: string | null, doc: libxml2.Doc): number
/**
 * Creates a #GHashTable representation of the #xmlDoc `doc`.
 * If `type` is * `E_XML_HASH_TYPE_PROPERTY,` all XML nodes will be
 * indexed in the #GHashTable by name. If `type` is
 * %E_XML_HASH_TYPE_OBJECT_UID, then XML objects will be indexed in
 * the hash by their UID (other nodes will still be indexed by name).
 * @param doc The #xmlDoc to store in a hash table.
 * @param type The value type to use as a key in the hash table.
 * @returns The newly-created #GHashTable representation of @doc.
 */
export function xmlToHash(doc: libxml2.Doc, type: XmlHashType): GLib.HashTable
/**
 * Adds a new key/value pair to the #EXmlHash `hash`.
 * @param hash the #EXmlHash to add an entry to
 * @param key the key to use for the entry
 * @param data the value of the new entry
 */
export function xmlhashAdd(hash: XmlHash, key: string | null, data: string | null): void
/**
 * Compares the value with key equal to `key` in `hash` against
 * `compare_data`.
 * @param hash the #EXmlHash to compare against
 * @param key the key of the hash entry to compare with
 * @param compareData the data to compare against the hash entry
 * @returns E_XMLHASH_STATUS_SAME if the value and @compare_data are          equal,E_XMLHASH_STATUS_DIFFERENT if they are different, or          E_XMLHASH_STATUS_NOT_FOUND if there is no entry in @hash with          its key equal to @key.
 */
export function xmlhashCompare(hash: XmlHash, key: string | null, compareData: string | null): XmlHashStatus
/**
 * Frees the memory associated with `hash`.
 * @param hash The #EXmlHash to destroy.
 */
export function xmlhashDestroy(hash: XmlHash): void
/**
 * Executes `func` against each key/value pair in `hash`.
 * @param hash an #EXmlHash
 * @param func the #EXmlHashFunc to execute on the data in `hash`
 */
export function xmlhashForeachKey(hash: XmlHash, func: XmlHashFunc): void
/**
 * Calls g_hash_table_foreach_remove() on `hash<`!-- -->'s internal hash
 * table.  See g_hash_table_foreach_remove() for details.
 * @param hash an #EXmlHash
 * @param func the #EXmlHashFunc to execute on the data in `hash`
 */
export function xmlhashForeachKeyRemove(hash: XmlHash, func: XmlHashRemoveFunc): void
/**
 * Remove the entry in `hash` with key equal to `key,` if it exists.
 * @param hash the #EXmlHash to remove an entry from
 * @param key the key of the entry to remove
 */
export function xmlhashRemove(hash: XmlHash, key: string | null): void
/**
 * Writes the XML represented by `hash` to the file originally passed
 * to e_xmlhash_new().
 * @param hash The #EXmlHash to write.
 */
export function xmlhashWrite(hash: XmlHash): void
export interface FreeFormExpBuildSexpFunc {
    (word: string | null, options: string | null, hint: string | null): string | null
}
/**
 * Callback used to traverse response from the server, which is
 * an array.
 * @callback 
 * @param gdata an #EGDataSession
 * @param object a #JSonObject with received content
 * @returns whether the traverse can continue
 */
export interface GDataObjectCallback {
    (gdata: GDataSession, object: Json.Object): boolean
}
export interface OAuth2ServiceRefSourceFunc {
    (uid: string | null): Source | null
}
export interface SourceRefreshFunc {
    (source: Source): void
}
/**
 * Specifies the type of functions passed to e_type_traverse().
 * @callback 
 * @param type a #GType
 */
export interface TypeFunc {
    (type: GObject.GType): void
}
export interface WebDAVDiscoverRefSourceFunc {
    (uid: string | null): Source | null
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
 * @param requestUri a #GUri, containing the request URI, maybe redirected by the server
 * @param href a full URI to which the property belongs, or %NULL, when not found
 * @param statusCode an HTTP status code for this property
 * @returns %TRUE to continue traversal of the returned response, %FALSE otherwise.
 */
export interface WebDAVPropstatTraverseFunc {
    (webdav: WebDAVSession, propNode: libxml2.Node, requestUri: GLib.Uri, href: string | null, statusCode: number): boolean
}
export interface XmlHashFunc {
    (key: string | null, value: string | null): void
}
export interface XmlHashRemoveFunc {
    (key: string | null, value: string | null): boolean
}
export module Extensible {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Extensible {

    // Own properties of EDataServer-1.2.EDataServer.Extensible

    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.Extensible

    /**
     * Returns a list of #EExtension objects bound to `extensible` whose
     * types are ancestors of `extension_type`.  For a complete list of
     * extension objects bound to `extensible,` pass %E_TYPE_EXTENSION.
     * 
     * The list itself should be freed with g_list_free().  The extension
     * objects are owned by `extensible` and should not be unreferenced.
     * @param extensionType the type of extensions to list
     * @returns a list of extension objects derived from @extension_type
     */
    listExtensions(extensionType: GObject.GType): Extension[]
    /**
     * Creates an instance of all instantiable subtypes of #EExtension which
     * target the class of `extensible`.  The lifetimes of these newly created
     * #EExtension objects are bound to `extensible` such that they are finalized
     * when `extensible` is finalized.
     */
    loadExtensions(): void
    /**
     * Similar to e_extensible_load_extensions(), only loads newly discovered
     * extensions again. This can help in case a new module had been loaded
     * to the process, which provides the extensions for the `extensible`.
     */
    reloadExtensions(): void

    // Class property signals of EDataServer-1.2.EDataServer.Extensible

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

export class Extensible extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.Extensible

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.Extensible

    constructor(config?: Extensible.ConstructorProperties) 
    _init(config?: Extensible.ConstructorProperties): void
}

export module OAuth2Service {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface OAuth2Service {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2Service

    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.OAuth2Service

    // Has conflict: canProcess(source: Source): boolean
    /**
     * Deletes token information for the `service` and `source` from the secret store.
     * @param source an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    deleteTokenSync(source: Source, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: extractAuthorizationCode(source: Source, pageTitle: string | null, pageUri: string | null, pageContent: string | null): [ /* returnType */ boolean, /* outAuthorizationCode */ string | null ]
    // Has conflict: extractErrorMessage(source: Source, pageTitle: string | null, pageUri: string | null, pageContent: string | null): [ /* returnType */ boolean, /* outErrorMessage */ string | null ]
    /**
     * Reads access token information from the secret store for the `source` and
     * in case it's expired it refreshes the token, if possible.
     * 
     * Free the returned `out_access_token` with g_free(), when no longer needed.
     * @param source an #ESource
     * @param refSource an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE, when the returned access token has been set and it's not expired,    %FALSE otherwise.
     */
    getAccessTokenSync(source: Source, refSource: OAuth2ServiceRefSourceFunc, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number ]
    // Has conflict: getAuthenticationPolicy(source: Source, uri: string | null): OAuth2ServiceNavigationPolicy
    // Has conflict: getAuthenticationUri(source: Source): string | null
    // Has conflict: getClientId(source: Source): string | null
    // Has conflict: getClientSecret(source: Source): string | null
    // Has conflict: getDisplayName(): string | null
    // Has conflict: getFlags(): number
    // Has conflict: getName(): string | null
    // Has conflict: getRedirectUri(source: Source): string | null
    // Has conflict: getRefreshUri(source: Source): string | null
    // Has conflict: guessCanProcess(protocol: string | null, hostname: string | null): boolean
    // Has conflict: prepareAuthenticationUriQuery(source: Source, uriQuery: GLib.HashTable): void
    // Has conflict: prepareGetTokenForm(source: Source, authorizationCode: string | null, form: GLib.HashTable): void
    // Has conflict: prepareGetTokenMessage(source: Source, message: Soup.Message): void
    // Has conflict: prepareRefreshTokenForm(source: Source, refreshToken: string | null, form: GLib.HashTable): void
    // Has conflict: prepareRefreshTokenMessage(source: Source, message: Soup.Message): void
    /**
     * Queries `service` at e_oauth2_service_get_refresh_uri() with a request to obtain
     * a new access token, associated with the given `authorization_code` and stores
     * it into the secret store on success.
     * @param source an #ESource
     * @param authorizationCode authorization code provided by the server
     * @param refSource an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    receiveAndStoreTokenSync(source: Source, authorizationCode: string | null, refSource: OAuth2ServiceRefSourceFunc, cancellable: Gio.Cancellable | null): boolean
    /**
     * Queries `service` at e_oauth2_service_get_refresh_uri() with a request to refresh
     * existing access token with provided `refresh_token` and stores it into the secret
     * store on success.
     * @param source an #ESource
     * @param refreshToken refresh token as provided by the server
     * @param refSource an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    refreshAndStoreTokenSync(source: Source, refreshToken: string | null, refSource: OAuth2ServiceRefSourceFunc, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of EDataServer-1.2.EDataServer.OAuth2Service

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
     * @virtual 
     * @param source an #ESource
     * @returns Whether the @service can be used for the given @source
     */
    canProcess(source: Source): boolean
    /**
     * Tries to extract an authorization code from a web page provided by the server.
     * The function can be called multiple times, whenever the page load is finished.
     * The default implementation uses e_oauth2_service_util_extract_from_uri() to get
     * the code from the given `page_uri`.
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
     * @virtual 
     * @param source an associated #ESource
     * @param pageTitle a web page title
     * @param pageUri a web page URI
     * @param pageContent a web page content
     * @returns whether could recognized successful or failed server response.    The @out_authorization_code is populated on success too.
     */
    extractAuthorizationCode(source: Source, pageTitle: string | null, pageUri: string | null, pageContent: string | null): [ /* returnType */ boolean, /* outAuthorizationCode */ string | null ]
    /**
     * Tries to extract error message from the server response, return %TRUE,
     * when an error message could be found, in which case also sets
     * the `out_error_message` with it. The default implementation uses
     * e_oauth2_service_util_extract_from_uri(), returning either the error
     * description or the error code, when the description is not found.
     * 
     * The `out_error_message` is expected to be plain text.
     * @virtual 
     * @param source an associated #ESource
     * @param pageTitle a web page title
     * @param pageUri a web page URI
     * @param pageContent a web page content
     * @returns whether could recognized failed server response.    The @out_error_message is populated on success.
     */
    extractErrorMessage(source: Source, pageTitle: string | null, pageUri: string | null, pageContent: string | null): [ /* returnType */ boolean, /* outErrorMessage */ string | null ]
    /**
     * Used to decide what to do when the server redirects to the next page.
     * The default implementation always returns %E_OAUTH2_SERVICE_NAVIGATION_POLICY_ALLOW.
     * 
     * This method is called before e_oauth2_service_extract_authorization_code() and
     * can be used to block certain resources or to abort the authentication when
     * the server redirects to an unexpected page (like when user denies authorization
     * in the page).
     * @virtual 
     * @param source an associated #ESource
     * @param uri a URI of the navigation resource
     * @returns one of #EOAuth2ServiceNavigationPolicy
     */
    getAuthenticationPolicy(source: Source, uri: string | null): OAuth2ServiceNavigationPolicy
    getAuthenticationUri(source: Source): string | null
    getClientId(source: Source): string | null
    getClientSecret(source: Source): string | null
    /**
     * Returns a human readable name of the service. This is similar to
     * e_oauth2_service_get_name(), except this string should be localized,
     * because it will be used in user-visible strings.
     * @virtual 
     * @returns the display name of the @service
     */
    getDisplayName(): string | null
    getFlags(): number
    /**
     * Returns a unique name of the service. It can be named for example
     * by the server or the company from which it receives the OAuth2
     * token and where it refreshes it, like "Company" for login.company.com.
     * @virtual 
     * @returns the name of the @service
     */
    getName(): string | null
    /**
     * Returns a value for the "redirect_uri" keys in the authenticate and get_token
     * operations. The default implementation returns "urn:ietf:wg:oauth:2.0:oob".
     * @virtual 
     * @param source an associated #ESource
     * @returns The redirect_uri to use, or %NULL for none
     */
    getRedirectUri(source: Source): string | null
    getRefreshUri(source: Source): string | null
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
     * @virtual 
     * @param protocol a protocol to search the service for, like "imap", or %NULL
     * @param hostname a host name to search the service for, like "server.example.com", or %NULL
     * @returns Whether the @service can be used for the given arguments
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
     * @virtual 
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
     * @virtual 
     * @param source an associated #ESource
     * @param authorizationCode authorization code, as returned from e_oauth2_service_extract_authorization_code()
     * @param form form parameters to be used in the POST request
     */
    prepareGetTokenForm(source: Source, authorizationCode: string | null, form: GLib.HashTable): void
    /**
     * The `service` can change the `message` before it's sent to
     * the e_oauth2_service_get_authentication_uri(), with POST data
     * being provided by e_oauth2_service_prepare_get_token_form().
     * The default implementation does nothing with the `message`.
     * @virtual 
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
     * @virtual 
     * @param source an associated #ESource
     * @param refreshToken a refresh token to be used
     * @param form form parameters to be used in the POST request
     */
    prepareRefreshTokenForm(source: Source, refreshToken: string | null, form: GLib.HashTable): void
    /**
     * The `service` can change the `message` before it's sent to
     * the e_oauth2_service_get_refresh_uri(), with POST data
     * being provided by e_oauth2_service_prepare_refresh_token_form().
     * The default implementation does nothing with the `message`.
     * @virtual 
     * @param source an associated #ESource
     * @param message a #SoupMessage
     */
    prepareRefreshTokenMessage(source: Source, message: Soup.Message): void

    // Class property signals of EDataServer-1.2.EDataServer.OAuth2Service

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
export class OAuth2Service extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2Service

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.OAuth2Service

    constructor(config?: OAuth2Service.ConstructorProperties) 
    _init(config?: OAuth2Service.ConstructorProperties): void
    /**
     * Processes the `compile_value` and returns the result, which is stored
     * into the `out_glob_buff`. The `out_glob_buff` should be large enough to hold
     * the processed value and it should be a global memory buffer (usually
     * statically allocated) initialized to 0, which is used to short-circuit
     * the call, because the processing is done only if the first element
     * of the `out_glob_buff` is 0, in all other cases the function
     * immediately returns the `out_glob_buff`.
     * @param compileValue a value provided in the compile time
     * @param outGlobBuffSize size of the `out_glob_buff`
     * @returns processed @compile_value, saved into *out_glob_buff
     */
    static utilCompileValue(compileValue: string | null, outGlobBuffSize: number): [ /* returnType */ string | null, /* outGlobBuff */ string | null ]
    /**
     * Extracts either an authorization code from a 'code' argument of the `in_uri,`
     * or an error code from an 'error' argument of the `in_uri` and an error description
     * from the 'error_description' argument of the `in_uri`.
     * @param inUri a URI returned from the server
     * @returns %TRUE, when any of the non-NULL out arguments had been populated.
     */
    static utilExtractFromUri(inUri: string | null): [ /* returnType */ boolean, /* outAuthorizationCode */ string | null, /* outErrorCode */ string | null, /* outErrorDescription */ string | null ]
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
    static utilSetToForm(form: GLib.HashTable, name: string | null, value: string | null): void
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
    static utilTakeToForm(form: GLib.HashTable, name: string | null, value: string | null): void
}

export module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `backend-died`
     */
    export interface BackendDiedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `backend-error`
     */
    export interface BackendErrorSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `backend-property-changed`
     */
    export interface BackendPropertyChangedSignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `opened`
     */
    export interface OpenedSignalCallback {
        (object: GLib.Error): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

}

export interface Client {

    // Own properties of EDataServer-1.2.EDataServer.Client

    /**
     * The capabilities of this client
     */
    readonly capabilities: any
    /**
     * The main loop context in which notifications for
     * this client will be delivered.
     */
    readonly mainContext: GLib.MainContext
    /**
     * Whether this client's backing data is online.
     */
    online: boolean
    // Has conflict: readonly opened: boolean
    /**
     * Whether this client's backing data is readonly.
     */
    readonly readonly: boolean
    /**
     * The #ESource for which this client was created.
     */
    readonly source: Source
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.Client

    /**
     * Cancels all pending operations started on `client`.
     */
    cancelAll(): void
    /**
     * Check if backend supports particular capability.
     * To get all capabilities use e_client_get_capabilities().
     * @param capability a capability
     * @returns #GSList of const strings of capabilities
     */
    checkCapability(capability: string | null): boolean
    /**
     * Checks whether a client supports explicit refreshing
     * (see e_client_refresh()).
     * @returns TRUE if the client supports refreshing, FALSE otherwise.
     */
    checkRefreshSupported(): boolean
    /**
     * Returns a D-Bus bus name that will be used to connect the
     * client to the backend subprocess.
     * @returns a newly-allocated string representing a D-Bus bus          name that will be used to connect the client to          the backend subprocess. The string should be          freed by the caller using g_free().
     */
    dupBusName(): string | null
    // Has conflict: getBackendProperty(propName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: getBackendPropertyFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* propValue */ string | null ]
    // Has conflict: getBackendPropertySync(propName: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* propValue */ string | null ]
    /**
     * Get list of strings with capabilities advertised by a backend.
     * This list, together with inner strings, is owned by the `client`.
     * To check for individual capabilities use e_client_check_capability().
     * @returns #GSList of const strings          of capabilities
     */
    getCapabilities(): string[]
    /**
     * Get the #ESource that this client has assigned.
     * @returns The source.
     */
    getSource(): Source
    /**
     * Check if this `client` is connected.
     * @returns %TRUE if this @client is connected, otherwise %FALSE.
     */
    isOnline(): boolean
    /**
     * Check if this `client` is fully opened. This includes
     * everything from e_client_open() call up to the authentication,
     * if required by a backend. Client cannot do any other operation
     * during the opening phase except of authenticate or cancel it.
     * Every other operation results in an %E_CLIENT_ERROR_BUSY error.
     * @returns always %TRUE
     */
    isOpened(): boolean
    /**
     * Check if this `client` is read-only.
     * @returns %TRUE if this @client is read-only, otherwise %FALSE.
     */
    isReadonly(): boolean
    // Has conflict: open(onlyIfExists: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: openFinish(result: Gio.AsyncResult): boolean
    // Has conflict: openSync(onlyIfExists: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the #GMainContext on which event sources for `client` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     * @returns a #GMainContext
     */
    refMainContext(): GLib.MainContext
    // Has conflict: refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: refreshFinish(result: Gio.AsyncResult): boolean
    // Has conflict: refreshSync(cancellable: Gio.Cancellable | null): boolean
    // Has conflict: remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: removeFinish(result: Gio.AsyncResult): boolean
    // Has conflict: removeSync(cancellable: Gio.Cancellable | null): boolean
    // Has conflict: retrieveCapabilities(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: retrieveCapabilitiesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string | null ]
    // Has conflict: retrieveCapabilitiesSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string | null ]
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
     * @returns %TRUE on success, %FALSE on error
     */
    retrievePropertiesFinish(result: Gio.AsyncResult): boolean
    // Has conflict: retrievePropertiesSync(cancellable: Gio.Cancellable | null): boolean
    // Has conflict: setBackendProperty(propName: string | null, propValue: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: setBackendPropertyFinish(result: Gio.AsyncResult): boolean
    // Has conflict: setBackendPropertySync(propName: string | null, propValue: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets a D-Bus bus name that will be used to connect the client
     * to the backend subprocess.
     * @param busName a string representing a D-Bus bus name
     */
    setBusName(busName: string | null): void
    // Has conflict: unwrapDbusError(dbusError: GLib.Error): void
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
     * @returns %TRUE if successful, %FALSE otherwise.
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
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    waitForConnectedSync(timeoutSeconds: number, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of EDataServer-1.2.EDataServer.Client

    backendDied(): void
    backendError(errorMsg: string | null): void
    backendPropertyChanged(propName: string | null, propValue: string | null): void
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * The call is finished by e_client_get_backend_property_finish()
     * from the `callback`.
     * @virtual 
     * @param propName property name, whose value to retrieve; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getBackendProperty(propName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_get_backend_property().
     * @virtual 
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getBackendPropertyFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* propValue */ string | null ]
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * @virtual 
     * @param propName property name, whose value to retrieve; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getBackendPropertySync(propName: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* propValue */ string | null ]
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * The call is finished by e_client_open_finish() from the `callback`.
     * @virtual 
     * @param onlyIfExists this parameter is not used anymore
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    open(onlyIfExists: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_open().
     * @virtual 
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    openFinish(result: Gio.AsyncResult): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * @virtual 
     * @param onlyIfExists this parameter is not used anymore
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    openSync(onlyIfExists: boolean, cancellable: Gio.Cancellable | null): boolean
    opened(error: GLib.Error): void
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * The call is finished by e_client_refresh_finish() from the `callback`.
     * @virtual 
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_refresh().
     * @virtual 
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    refreshFinish(result: Gio.AsyncResult): boolean
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * @virtual 
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    refreshSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * The call is finished by e_client_remove_finish() from the `callback`.
     * @virtual 
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_remove().
     * @virtual 
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * @virtual 
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value.
     * The call is finished by e_client_retrieve_capabilities_finish()
     * from the `callback`.
     * @virtual 
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    retrieveCapabilities(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_retrieve_capabilities().
     * Returned value of `capabilities` should be freed with g_free(),
     * when no longer needed.
     * @virtual 
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    retrieveCapabilitiesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string | null ]
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value. Returned value
     * of `capabilities` should be freed with g_free(), when no longer needed.
     * @virtual 
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    retrieveCapabilitiesSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string | null ]
    /**
     * Retrieves `client` properties to match server-side values, without waiting
     * for the D-Bus property change notifications delivery.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    retrievePropertiesSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`. The call is finished
     * by e_client_set_backend_property_finish() from the `callback`.
     * @virtual 
     * @param propName property name, whose value to change; cannot be %NULL
     * @param propValue property value, to set; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    setBackendProperty(propName: string | null, propValue: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_set_backend_property().
     * @virtual 
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    setBackendPropertyFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`.
     * @virtual 
     * @param propName property name, whose value to change; cannot be %NULL
     * @param propValue property value, to set; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    setBackendPropertySync(propName: string | null, propValue: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Unwraps D-Bus error to local error. `dbus_error` is automatically freed.
     * `dbus_erorr` and `out_error` can point to the same variable.
     * @virtual 
     * @param dbusError a #GError returned bu D-Bus
     */
    unwrapDbusError(dbusError: GLib.Error): void

    // Own signals of EDataServer-1.2.EDataServer.Client

    connect(sigName: "backend-died", callback: Client.BackendDiedSignalCallback): number
    on(sigName: "backend-died", callback: Client.BackendDiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-died", callback: Client.BackendDiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-died", callback: Client.BackendDiedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "backend-died", ...args: any[]): void
    connect(sigName: "backend-error", callback: Client.BackendErrorSignalCallback): number
    on(sigName: "backend-error", callback: Client.BackendErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-error", callback: Client.BackendErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-error", callback: Client.BackendErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "backend-error", ...args: any[]): void
    connect(sigName: "backend-property-changed", callback: Client.BackendPropertyChangedSignalCallback): number
    on(sigName: "backend-property-changed", callback: Client.BackendPropertyChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-property-changed", callback: Client.BackendPropertyChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-property-changed", callback: Client.BackendPropertyChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "backend-property-changed", p0: string | null, ...args: any[]): void
    connect(sigName: "opened", callback: Client.OpenedSignalCallback): number
    on(sigName: "opened", callback: Client.OpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: Client.OpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: Client.OpenedSignalCallback): NodeJS.EventEmitter
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
export class Client extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.Client

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.Client

    constructor(config?: Client.ConstructorProperties) 
    _init(config?: Client.ConstructorProperties): void
    static errorCreate(code: ClientError, customMsg: string | null): GLib.Error
    static errorQuark(): GLib.Quark
    /**
     * Get localized human readable description of the given error code.
     * @param code an #EClientError error code
     * @returns Localized human readable description of the given error code
     */
    static errorToString(code: ClientError): string | null
    /**
     * Copies a #GSList of #GObject<!-- -->s to the end of `copy_to`.
     * @param copyTo Where to copy; may be %NULL
     * @param objects #GSList of #GObject<!-- -->s to be copied
     * @returns New head of @copy_to. The returned pointer can be freed with e_client_util_free_object_slist().
     */
    static utilCopyObjectSlist(copyTo: GObject.Object[] | null, objects: GObject.Object[]): GObject.Object[]
    /**
     * Copies the #GSList of strings to the end of `copy_to`.
     * @param copyTo Where to copy; may be %NULL
     * @param strings #GSList of strings to be copied
     * @returns New head of @copy_to. The returned pointer can be freed with e_client_util_free_string_slist().
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
     * @returns Newly allocated #GSList of newly allocated strings corresponding to values parsed from @strings. Free the returned pointer with e_client_util_free_string_slist().
     */
    static utilParseCommaStrings(strings: string | null): string[]
    /**
     * Convert a list of strings into a %NULL-terminated array of strings.
     * @param strings a #GSList of strings (const gchar *)
     * @returns Newly allocated %NULL-terminated array of strings. The returned pointer should be freed with g_strfreev(). Note: Paired function for this is e_client_util_strv_to_slist().
     */
    static utilSlistToStrv(strings: string[]): string[]
    /**
     * Convert a %NULL-terminated array of strings to a list of strings.
     * @param strv a %NULL-terminated array of strings (const gchar *)
     * @returns Newly allocated #GSList of newly allocated strings. The returned pointer should be freed with e_client_util_free_string_slist(). Note: Paired function for this is e_client_util_slist_to_strv().
     */
    static utilStrvToSlist(strv: string | null): string[]
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
     * @returns Whether was @dbus_error processed into @client_error. Note: The @dbus_error is automatically freed if returned %TRUE.
     */
    static utilUnwrapDbusError(dbusError: GLib.Error, knownErrors: ClientErrorsList, knownErrorsCount: number, knownErrorsDomain: GLib.Quark, failWhenNoneMatched: boolean): [ /* returnType */ boolean, /* clientError */ GLib.Error ]
}

export module Extension {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.Extension

        extensible?: Extensible | null
    }

}

export interface Extension {

    // Own properties of EDataServer-1.2.EDataServer.Extension

    readonly extensible: Extensible
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.Extension

    /**
     * Returns the object that `extension` extends.
     * @returns the object being extended
     */
    getExtensible(): Extensible

    // Class property signals of EDataServer-1.2.EDataServer.Extension

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
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
export class Extension extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.Extension

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.Extension

    constructor(config?: Extension.ConstructorProperties) 
    _init(config?: Extension.ConstructorProperties): void
}

export module GDataSession {

    // Constructor properties interface

    export interface ConstructorProperties extends SoupSession.ConstructorProperties {
    }

}

export interface GDataSession {

    // Own properties of EDataServer-1.2.EDataServer.GDataSession

    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.GDataSession

    /**
     * Deletes a task list `tasklist_id`.
     * @param tasklistId id of a task list
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasklistsDeleteSync(tasklistId: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets a task list `tasklist_id` and returns it as a #JsonObject,
     * which should be freed with json_object_unref(), when no longer needed.
     * 
     * There can be used e_gdata_tasklist_get_id(), e_gdata_tasklist_get_etag(),
     * e_gdata_tasklist_get_title(), e_gdata_tasklist_get_self_link(),
     * e_gdata_tasklist_get_updated() to read the properties of the task list.
     * @param tasklistId id of a task list
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasklistsGetSync(tasklistId: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outTasklist */ Json.Object ]
    /**
     * Creates a new task list, titled `title`. The `out_inserted_tasklist` should
     * be freed with json_object_unref(), when no longer needed.
     * @param title title to set
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasklistsInsertSync(title: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInsertedTasklist */ Json.Object ]
    /**
     * Lists all configured task lists for the user, calling the `cb` for each of them.
     * @param query an #EGDataQuery to limit returned task lists, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasklistsListSync(query: GDataQuery | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Changes properties of a task list `tasklist_id`.
     * 
     * If not %NULL, free the `out_patched_tasklist` with json_object_unref(),
     * when no longer needed.
     * @param tasklistId id of a task list
     * @param tasklistProperties task list properties to change
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasklistsPatchSync(tasklistId: string | null, tasklistProperties: Json.Builder, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPatchedTasklist */ Json.Object ]
    /**
     * Updates a task list `tasklist_id` with values from the `tasklist`.
     * @param tasklistId id of a task list
     * @param tasklist task list object to update the task list with
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasklistsUpdateSync(tasklistId: string | null, tasklist: Json.Builder, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUpdatedTasklist */ Json.Object ]
    /**
     * Clears all completed tasks from the task list `tasklist_id`. The affected tasks
     * will be marked as 'hidden' and no longer be returned by default when retrieving
     * all tasks for a task list.
     * @param tasklistId id of a task list
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasksClearSync(tasklistId: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Deletes a task `task_id` from a task list `tasklist_id`.
     * @param tasklistId id of a task list
     * @param taskId id of a task
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasksDeleteSync(tasklistId: string | null, taskId: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets a task `task_id` from a task list `tasklist_id` and returns it as a #JsonObject,
     * which should be freed with json_object_unref(), when no longer needed.
     * 
     * There can be used e_gdata_task_get_id(), e_gdata_task_get_etag(),
     * e_gdata_task_get_title() and other e_gdata_task_... functions
     * to read the properties of the task.
     * @param tasklistId id of a task list
     * @param taskId id of a task
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasksGetSync(tasklistId: string | null, taskId: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outTask */ Json.Object ]
    /**
     * Creates a new task `task` in the task list `tasklist_id`. The `out_inserted_task` should
     * be freed with json_object_unref(), when no longer needed.
     * @param tasklistId id of a task list
     * @param task a #JsonBuilder with the task object
     * @param parentTaskId parent task identifier, or %NULL to create at the top-level
     * @param previousTaskId previous sibling task identifier, or %NULL to create at the first position among its siblings
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasksInsertSync(tasklistId: string | null, task: Json.Builder, parentTaskId: string | null, previousTaskId: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInsertedTask */ Json.Object ]
    /**
     * Lists all tasks in the task list `tasklist_id,` calling the `cb` for each of them.
     * @param tasklistId id of a task list
     * @param query an #EGDataQuery to limit returned tasks, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasksListSync(tasklistId: string | null, query: GDataQuery | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Moves the specified task `task_id` to another position in the task
     * list `tasklist_id`. This can include putting it as a child task under
     * a new parent and/or move it to a different position among its sibling tasks.
     * @param tasklistId id of a task list
     * @param taskId id of a task
     * @param parentTaskId parent task identifier, or %NULL to move at the top-level
     * @param previousTaskId previous sibling task identifier, or %NULL to move at the first position among its siblings
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasksMoveSync(tasklistId: string | null, taskId: string | null, parentTaskId: string | null, previousTaskId: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Changes properties `task_properties` of a task `task_id` in the task list `tasklist_id`.
     * 
     * If not %NULL, free the `out_patched_task` with json_object_unref(),
     * when no longer needed.
     * @param tasklistId id of a task list
     * @param taskId id of a task
     * @param taskProperties task properties to change
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasksPatchSync(tasklistId: string | null, taskId: string | null, taskProperties: Json.Builder, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPatchedTask */ Json.Object ]
    /**
     * Updates a task `task_id` in a task list `tasklist_id` to the values from the `task`.
     * @param tasklistId id of a task list
     * @param taskId id of a task
     * @param task task object to update the task with
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    tasksUpdateSync(tasklistId: string | null, taskId: string | null, task: Json.Builder, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUpdatedTask */ Json.Object ]

    // Class property signals of EDataServer-1.2.EDataServer.GDataSession

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::credentials", callback: (...args: any[]) => void): number
    on(sigName: "notify::credentials", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::credentials", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::credentials", ...args: any[]): void
    connect(sigName: "notify::force-http1", callback: (...args: any[]) => void): number
    on(sigName: "notify::force-http1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::force-http1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::force-http1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::force-http1", ...args: any[]): void
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
    connect(sigName: "notify::remote-connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-connectable", ...args: any[]): void
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
export class GDataSession extends SoupSession {

    // Own properties of EDataServer-1.2.EDataServer.GDataSession

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.GDataSession

    constructor(config?: GDataSession.ConstructorProperties) 
    /**
     * Creates a new #EGDataSession associated with the given `source`.
     * @constructor 
     * @param source an #ESource
     * @returns a new #EGDataSession; free it with g_object_unref(),    when no longer needed.
     */
    constructor(source: Source) 
    /**
     * Creates a new #EGDataSession associated with the given `source`.
     * @constructor 
     * @param source an #ESource
     * @returns a new #EGDataSession; free it with g_object_unref(),    when no longer needed.
     */
    static new(source: Source): GDataSession

    // Overloads of new

    /**
     * Creates a new #ESoupSession associated with given `source`.
     * The `source` can be used to store and read SSL trust settings, but only if
     * it already contains an #ESourceWebdav extension. Otherwise the SSL trust
     * settings are ignored.
     * @constructor 
     * @param source an #ESource
     * @returns a new #ESoupSession; free it with g_object_unref(),    when no longer needed.
     */
    static new(source: Source): SoupSession
    /**
     * Creates a #SoupSession with the default options.
     * @constructor 
     * @returns the new session.
     */
    static new(): Soup.Session
    _init(config?: GDataSession.ConstructorProperties): void
}

export module Module {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.TypePlugin.ConstructorProperties, GObject.TypeModule.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.Module

        /**
         * The filename of the module.
         */
        filename?: string | null
    }

}

export interface Module extends GObject.TypePlugin {

    // Own properties of EDataServer-1.2.EDataServer.Module

    /**
     * The filename of the module.
     */
    readonly filename: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.Module

    /**
     * Returns the filename of the shared library for `module`.  The
     * string is owned by `module` and should not be modified or freed.
     * @returns the filename for @module
     */
    getFilename(): string | null

    // Conflicting methods

    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void
    /**
     * Increases the use count of a #GTypeModule by one. If the
     * use count was zero before, the plugin will be loaded.
     * If loading the plugin fails, the use count is reset to
     * its prior value.
     * @returns %FALSE if the plugin needed to be loaded and  loading the plugin failed.
     */
    use(): boolean

    // Overloads of use

    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void

    // Class property signals of EDataServer-1.2.EDataServer.Module

    connect(sigName: "notify::filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filename", ...args: any[]): void
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
export class Module extends GObject.TypeModule {

    // Own properties of EDataServer-1.2.EDataServer.Module

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.Module

    constructor(config?: Module.ConstructorProperties) 
    /**
     * Creates a new #EModule that will load the specific shared library
     * when in use.
     * @constructor 
     * @param filename filename of the shared library module
     * @returns a new #EModule for @filename
     */
    constructor(filename: string | null) 
    /**
     * Creates a new #EModule that will load the specific shared library
     * when in use.
     * @constructor 
     * @param filename filename of the shared library module
     * @returns a new #EModule for @filename
     */
    static new(filename: string | null): Module
    _init(config?: Module.ConstructorProperties): void
    /**
     * Loads all the modules in the specified directory into memory.  If
     * you want to unload them (enabling on-demand loading) you must call
     * g_type_module_unuse() on all the modules.  Free the returned list
     * with g_list_free().
     * @param dirname pathname for a directory containing modules to load
     * @returns a list of #EModules loaded from @dirname
     */
    static loadAllInDirectory(dirname: string | null): Module[]
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
     * @returns a list of #EModules loaded    from @dirname and any extra prefix directory.
     */
    static loadAllInDirectoryAndPrefixes(dirname: string | null, dirprefix: string | null): Module[]
    /**
     * Load the module from the specified filename into memory. If
     * you want to unload it (enabling on-demand loading) you must call
     * g_type_module_unuse() on the module.
     * @param filename filename of the module to load
     * @returns an #EModule loaded from @filename
     */
    static loadFile(filename: string | null): Module
}

export module NetworkMonitor {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Gio.NetworkMonitor.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.NetworkMonitor

        /**
         * The GIO name of the underlying #GNetworkMonitor to use.
         */
        gioName?: string | null
    }

}

export interface NetworkMonitor extends Gio.Initable, Gio.NetworkMonitor {

    // Own properties of EDataServer-1.2.EDataServer.NetworkMonitor

    /**
     * The GIO name of the underlying #GNetworkMonitor to use.
     */
    gioName: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.NetworkMonitor

    /**
     * Get currently set GIO name for the network availability checks.
     * See e_network_monitor_set_gio_name() for more details.
     * @returns A newly allocated string, a GIO name   of the underlying GNetworkMonitor which is set to be used.   The returned string should be freed with g_free(), when   no longer needed.
     */
    dupGioName(): string | null
    /**
     * Get a list of available GIO names for the #GNetworkMonitor implementations.
     * The strings can be used in e_network_monitor_set_gio_name().
     * @returns A newly allocated #GSList,   with newly allocated strings, the GIO names. The #GSList should be freed   with g_slist_free_full (gio_names, g_free); when no longer needed.
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class NetworkMonitor extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.NetworkMonitor

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.NetworkMonitor

    constructor(config?: NetworkMonitor.ConstructorProperties) 
    _init(config?: NetworkMonitor.ConstructorProperties): void
    /**
     * Gets the default #ENetworkMonitor. The caller should not unref the returned instance.
     * The #ENetworkMonitor implements the #GNetworkMonitor iterface.
     * @returns The default #ENetworkMonitor instance.
     */
    static getDefault(): Gio.NetworkMonitor
}

export module OAuth2ServiceBase {

    // Constructor properties interface

    export interface ConstructorProperties extends Extension.ConstructorProperties {
    }

}

export interface OAuth2ServiceBase {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceBase

    __gtype__: number

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceBase

    parent: Extension

    // Class property signals of EDataServer-1.2.EDataServer.OAuth2ServiceBase

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class OAuth2ServiceBase extends Extension {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceBase

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.OAuth2ServiceBase

    constructor(config?: OAuth2ServiceBase.ConstructorProperties) 
    _init(config?: OAuth2ServiceBase.ConstructorProperties): void
}

export module OAuth2ServiceGoogle {

    // Constructor properties interface

    export interface ConstructorProperties extends OAuth2Service.ConstructorProperties, OAuth2ServiceBase.ConstructorProperties {
    }

}

export interface OAuth2ServiceGoogle extends OAuth2Service {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceGoogle

    __gtype__: number

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceGoogle

    parent: OAuth2ServiceBase & Extension

    // Class property signals of EDataServer-1.2.EDataServer.OAuth2ServiceGoogle

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class OAuth2ServiceGoogle extends OAuth2ServiceBase {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceGoogle

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.OAuth2ServiceGoogle

    constructor(config?: OAuth2ServiceGoogle.ConstructorProperties) 
    _init(config?: OAuth2ServiceGoogle.ConstructorProperties): void
}

export module OAuth2ServiceOutlook {

    // Constructor properties interface

    export interface ConstructorProperties extends OAuth2Service.ConstructorProperties, OAuth2ServiceBase.ConstructorProperties {
    }

}

export interface OAuth2ServiceOutlook extends OAuth2Service {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceOutlook

    __gtype__: number

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceOutlook

    parent: OAuth2ServiceBase & Extension

    // Class property signals of EDataServer-1.2.EDataServer.OAuth2ServiceOutlook

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class OAuth2ServiceOutlook extends OAuth2ServiceBase {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceOutlook

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.OAuth2ServiceOutlook

    constructor(config?: OAuth2ServiceOutlook.ConstructorProperties) 
    _init(config?: OAuth2ServiceOutlook.ConstructorProperties): void
}

export module OAuth2ServiceYahoo {

    // Constructor properties interface

    export interface ConstructorProperties extends OAuth2Service.ConstructorProperties, OAuth2ServiceBase.ConstructorProperties {
    }

}

export interface OAuth2ServiceYahoo extends OAuth2Service {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceYahoo

    __gtype__: number

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceYahoo

    parent: OAuth2ServiceBase & Extension

    // Class property signals of EDataServer-1.2.EDataServer.OAuth2ServiceYahoo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class OAuth2ServiceYahoo extends OAuth2ServiceBase {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceYahoo

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.OAuth2ServiceYahoo

    constructor(config?: OAuth2ServiceYahoo.ConstructorProperties) 
    _init(config?: OAuth2ServiceYahoo.ConstructorProperties): void
}

export module OAuth2Services {

    // Constructor properties interface

    export interface ConstructorProperties extends Extensible.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface OAuth2Services extends Extensible {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2Services

    __gtype__: number

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
     * @returns a referenced #EOAuth2Service, which can be used    with given @source, or %NULL, when none was found.
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
     * @returns a referenced #EOAuth2Service, which can be used    with given constraints, or %NULL, when none was found.
     */
    guess(protocol: string | null, hostname: string | null): OAuth2Service | null
    isOauth2Alias(authMethod: string | null): boolean
    /**
     * Lists all currently known services, which had been added
     * with e_oauth2_services_add(). Free the returned #GSList with
     * g_slist_remove_full (known_services, g_object_unref);
     * when no longer needed.
     * @returns a newly allocated #GSList    with all currently known #EOAuth2Service referenced instances
     */
    list(): OAuth2Service[]
    /**
     * Removes the `service` from the list of known services in `services`.
     * The function does nothing, if the `service` had not been added.
     * @param service an #EOAuth2Service to remove
     */
    remove(service: OAuth2Service): void

    // Class property signals of EDataServer-1.2.EDataServer.OAuth2Services

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
export class OAuth2Services extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2Services

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.OAuth2Services

    constructor(config?: OAuth2Services.ConstructorProperties) 
    /**
     * Creates a new #EOAuth2Services instance.
     * @constructor 
     * @returns an #EOAuth2Services
     */
    constructor() 
    /**
     * Creates a new #EOAuth2Services instance.
     * @constructor 
     * @returns an #EOAuth2Services
     */
    static new(): OAuth2Services
    _init(config?: OAuth2Services.ConstructorProperties): void
    /**
     * This is the same as e_oauth2_services_is_oauth2_alias(), except
     * it creates its own #EOAuth2Services instance and frees it at the end.
     * The #EOAuth2Services is implemented as a singleton, thus it won't be
     * much trouble, as long as there is something else having created one
     * instance.
     * @param authMethod an authentication method, or %NULL
     * @returns whether exists any #EOAuth2Service, with the same name as @auth_method.
     */
    static isOauth2AliasStatic(authMethod: string | null): boolean
    static isSupported(): boolean
}

export module SoupAuthBearer {

    // Constructor properties interface

    export interface ConstructorProperties extends Soup.Auth.ConstructorProperties {
    }

}

export interface SoupAuthBearer {

    // Own properties of EDataServer-1.2.EDataServer.SoupAuthBearer

    __gtype__: number

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
    setAccessToken(accessToken: string | null, expiresInSeconds: number): void

    // Class property signals of EDataServer-1.2.EDataServer.SoupAuthBearer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authority", callback: (...args: any[]) => void): number
    on(sigName: "notify::authority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authority", ...args: any[]): void
    connect(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-authenticated", ...args: any[]): void
    connect(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-cancelled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-cancelled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-cancelled", ...args: any[]): void
    connect(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-for-proxy", ...args: any[]): void
    connect(sigName: "notify::realm", callback: (...args: any[]) => void): number
    on(sigName: "notify::realm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realm", ...args: any[]): void
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
export class SoupAuthBearer extends Soup.Auth {

    // Own properties of EDataServer-1.2.EDataServer.SoupAuthBearer

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SoupAuthBearer

    constructor(config?: SoupAuthBearer.ConstructorProperties) 
    _init(config?: SoupAuthBearer.ConstructorProperties): void
}

export module SoupSession {

    // Constructor properties interface

    export interface ConstructorProperties extends Soup.Session.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SoupSession

        /**
         * The #ENamedParameters containing login credentials.
         */
        credentials?: NamedParameters | null
        /**
         * Whether the messages created by the session should force use
         * of HTTP/1 instead of trying HTTP/2 first and fallback to the HTTP/1
         * when the newer version failed to connect.
         * 
         * See e_soup_session_set_force_http1() for more information about the limitations.
         */
        forceHttp1?: boolean | null
        /**
         * The #ESource being used for this soup session.
         */
        source?: Source | null
    }

}

export interface SoupSession {

    // Own properties of EDataServer-1.2.EDataServer.SoupSession

    /**
     * The #ENamedParameters containing login credentials.
     */
    credentials: NamedParameters
    /**
     * Whether the messages created by the session should force use
     * of HTTP/1 instead of trying HTTP/2 first and fallback to the HTTP/1
     * when the newer version failed to connect.
     * 
     * See e_soup_session_set_force_http1() for more information about the limitations.
     */
    forceHttp1: boolean
    /**
     * The #ESource being used for this soup session.
     */
    readonly source: Source
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SoupSession

    /**
     * Checks result of the `message` and sets the `error` if it failed.
     * When it failed and the `read_bytes` is provided, then these are
     * set to `message'`s response body, thus it can be used later.
     * @param message a #SoupMessage
     * @param readBytes optional bytes which had been read from the stream, or %NULL
     * @param bytesLength how many bytes had been read; ignored when `read_bytes` is %NULL
     * @returns Whether succeeded, aka %TRUE, when no error recognized    and %FALSE otherwise.
     */
    checkResult(message: Soup.Message, readBytes: any | null, bytesLength: number): boolean
    dupCredentials(): NamedParameters | null
    getAuthenticationRequiresCredentials(): boolean
    /**
     * Returns whether it's forced to use HTTP/1 for the messages
     * created by the `session`. See e_soup_session_set_force_http1()
     * for more information about the limitations.
     * @returns whether it's forced to use HTTP/1
     */
    getForceHttp1(): boolean
    getLogLevel(): Soup.LoggerLogLevel
    /**
     * Returns an #ESource associated with the `session,` if such was set in the creation time.
     * @returns Associated #ESource with the @session, or %NULL.
     */
    getSource(): Source | null
    /**
     * Populates `out_certificate_pem` and `out_certificate_errors` with the last values
     * returned on #G_TLS_ERROR_BAD_CERTIFICATE error.
     * @returns Whether the information was available and set to the out parameters.
     */
    getSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    /**
     * Handles authentication failure and sets appropriate value to the `out_auth_result`
     * for the provided `op_error` and used `credentials`. Converts the `op_error`
     * into an appropriate error returned in the `error`.
     * 
     * Also updates connection status on the associated #ESource with the `session`.
     * @param credentials credentials used for the authentication
     * @param opError a #GError of the authentication operation
     */
    handleAuthenticationFailure(credentials: NamedParameters | null, opError: GLib.Error): [ /* outAuthResult */ SourceAuthenticationResult, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    /**
     * Creates a new #SoupMessage, similar to soup_message_new(),
     * but also presets request headers with "User-Agent" to be "Evolution/version"
     * and with "Connection" to be "close".
     * 
     * See also e_soup_session_new_message_from_uri().
     * @param method an HTTP method
     * @param uriString a URI string to use for the request
     * @returns a new #SoupMessage, or %NULL on error
     */
    newMessage(method: string | null, uriString: string | null): Soup.Message
    /**
     * Creates a new #SoupMessage, similar to soup_message_new_from_uri(),
     * but also presets request headers with "User-Agent" to be "Evolution/version"
     * and with "Connection" to be "close".
     * 
     * See also e_soup_session_new_message().
     * @param method an HTTP method
     * @param uri a #GUri to use for the request
     * @returns a new #SoupMessage, or %NULL on error
     */
    newMessageFromUri(method: string | null, uri: GLib.Uri): Soup.Message
    /**
     * Prepares the `message` to be a sent asynchronously with
     * e_soup_session_send_message(). The returned pointer is passed
     * to the e_soup_session_send_message() as the prepare_data
     * parameter.
     * @param message a #SoupMessage to prepare for asynchronous send
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns prepare data for e_soup_session_send_message(),   or %NULL on error.
     */
    prepareMessageSendSync(message: Soup.Message, cancellable: Gio.Cancellable | null): any | null
    /**
     * Asynchronously sends the `message`. Finish the call with
     * e_soup_session_send_message_finish().
     * 
     * The `prepare_data` is a result of the e_soup_session_prepare_message_send_sync()
     * and this function assumes ownership of it. The `prepare_data` cannot be used
     * again after this call.
     * @param message a #SoupMessage to send
     * @param ioPriority the I/O priority of the request, like %G_PRIORITY_DEFAULT
     * @param prepareData data returned from e_soup_session_prepare_message_send_sync()
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback the callback to invoke once the request is finished
     */
    sendMessage(message: Soup.Message, ioPriority: number, prepareData: any | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the call of e_soup_session_send_message(). This is supposed to
     * be called from the callback passed to the e_soup_session_send_message().
     * 
     * The optional `out_certificate_pem` and `out_certificate_errors` are set,
     * when provided, only if the operation failed with a TLS/SSL error.
     * 
     * Make sure the #GInputStream is read and freed from the same thread,
     * and with the same thread default main context, which this function
     * was called from, otherwise it can break libsoup3.
     * @param result a #GAsyncResult object
     * @returns a #GInputStream for reading the response body, or %NULL on error
     */
    sendMessageFinish(result: Gio.AsyncResult): [ /* returnType */ Gio.InputStream | null, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    /**
     * Similar to e_soup_session_send_message_sync(), except it reads
     * whole response content into memory and returns it as a #GByteArray.
     * Use e_soup_session_send_message_sync() when you want to have
     * more control on the content read.
     * @param message a #SoupMessage to send
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns A newly allocated #GByteArray,    which contains whole content from the URI pointed to by @message.
     */
    sendMessageSimpleSync(message: Soup.Message, cancellable: Gio.Cancellable | null): Uint8Array
    /**
     * Synchronously sends prepared message and returns #GInputStream
     * that can be used to read its contents.
     * 
     * This calls soup_session_send() internally, but it also setups
     * the `message` according to #ESoupSession:source authentication
     * settings. It also extracts information about used certificate,
     * in case of G_TLS_ERROR_BAD_CERTIFICATE error and keeps it
     * for later use by e_soup_session_get_ssl_error_details().
     * 
     * Use e_soup_session_send_message_simple_sync() to read whole
     * content into a #GByteArray.
     * 
     * Note that SoupSession doesn't log content read from GInputStream,
     * thus the caller may print the read content on its own when needed.
     * 
     * Note the `message` is fully filled only after there is anything
     * read from the resulting #GInputStream, thus use
     * e_soup_session_check_result() to verify that the receive had
     * been finished properly.
     * 
     * Make sure the #GInputStream is read and freed from the same thread,
     * and with the same thread default main context, which this function
     * was called from, otherwise it can break libsoup3.
     * @param message a #SoupMessage to send
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns A newly allocated #GInputStream,    that can be used to read from the URI pointed to by @message.    Free it with g_object_unref(), when no longer needed.
     */
    sendMessageSync(message: Soup.Message, cancellable: Gio.Cancellable | null): Gio.InputStream
    /**
     * Sets credentials to use for connection. Using %NULL for `credentials`
     * unsets previous value.
     * @param credentials an #ENamedParameters with credentials to use, or %NULL
     */
    setCredentials(credentials: NamedParameters | null): void
    /**
     * Sets whether the messages created through the `session` using
     * e_soup_session_new_message() or e_soup_session_new_message_from_uri()
     * should force use of the HTTP/1, instead of trying HTTP/2 and fallback to HTTP/1,
     * when the newer version cannot be used.
     * 
     * The property has no effect when e_soup_session_util_get_force_http1_supported()
     * returns %FALSE.
     * @param forceHttp1 the value to set
     */
    setForceHttp1(forceHttp1: boolean): void
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
    connect(sigName: "notify::force-http1", callback: (...args: any[]) => void): number
    on(sigName: "notify::force-http1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::force-http1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::force-http1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::force-http1", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    connect(sigName: "notify::remote-connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-connectable", ...args: any[]): void
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
export class SoupSession extends Soup.Session {

    // Own properties of EDataServer-1.2.EDataServer.SoupSession

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SoupSession

    constructor(config?: SoupSession.ConstructorProperties) 
    /**
     * Creates a new #ESoupSession associated with given `source`.
     * The `source` can be used to store and read SSL trust settings, but only if
     * it already contains an #ESourceWebdav extension. Otherwise the SSL trust
     * settings are ignored.
     * @constructor 
     * @param source an #ESource
     * @returns a new #ESoupSession; free it with g_object_unref(),    when no longer needed.
     */
    constructor(source: Source) 
    /**
     * Creates a new #ESoupSession associated with given `source`.
     * The `source` can be used to store and read SSL trust settings, but only if
     * it already contains an #ESourceWebdav extension. Otherwise the SSL trust
     * settings are ignored.
     * @constructor 
     * @param source an #ESource
     * @returns a new #ESoupSession; free it with g_object_unref(),    when no longer needed.
     */
    static new(source: Source): SoupSession

    // Overloads of new

    /**
     * Creates a #SoupSession with the default options.
     * @constructor 
     * @returns the new session.
     */
    static new(): Soup.Session
    _init(config?: SoupSession.ConstructorProperties): void
    static errorQuark(): GLib.Quark
    /**
     * Checks whether e_soup_session_set_force_http1() can be used
     * to force HTTP/1 usage. This depends on the libsoup version
     * the data server had been compiled with.
     * @returns %TRUE, when the force of HTTP/1 is supported, %FALSE otherwise
     */
    static utilGetForceHttp1Supported(): boolean
    /**
     * Returns bytes read from the message response, when the message send failed.
     * This can be used to examine detailed error returned by the server in
     * the response body.
     * @param message a #SoupMessage
     * @returns read message data on failed request, or %NULL, when none had been read
     */
    static utilGetMessageBytes(message: Soup.Message): Uint8Array | null
    /**
     * Normalizes the path of the `uri,` aka encodes characters, which should
     * be encoded, if needed. Returns, modified URI when any change had been made to the path.
     * It doesn't touch other parts of the `uri`.
     * @param uri a #GUri to normalize the path for
     * @returns a new #GUri with modified path, or %NULL, when    no change was required.
     */
    static utilNormalizeUriPath(uri: GLib.Uri): GLib.Uri | null
    /**
     * Returns referenced request data for the `message,` as being previously
     * set by the e_soup_session_util_set_message_request_body() or
     * e_soup_session_util_set_message_request_body_from_data().
     * 
     * Do not call this function while the `message` is queued in
     * a #SoupSession, nor modify the input stream position until
     * the `message` lefts the #SoupSession.
     * @param message a #SoupMessage
     * @returns a new #GInputStream with the request    body being previously set, or %NULL. The @out_length is set to the length    of the returned input stream.
     */
    static utilRefMessageRequestBody(message: Soup.Message): [ /* returnType */ Gio.InputStream | null, /* outLength */ number ]
    /**
     * Sets the request body of the `message` from the `input_stream` of the `length,` with optional
     * `content_type`. The function makes sure the `message` request body is set again
     * when the message is restarted.
     * 
     * The `input_stream` should implement the #GSeekable interface.
     * @param message a #SoupMessage
     * @param contentType optional Content-Type of the `data,` or %NULL `input_stream` (transfer none): the request body data as a #GInputStream
     * @param inputStream 
     * @param length length of the `data`
     */
    static utilSetMessageRequestBody(message: Soup.Message, contentType: string | null, inputStream: Gio.InputStream, length: number): void
    /**
     * Sets the request body of the `message` from the `data` of the `length,` with optional
     * `content_type`. The function makes sure the `message` request body is set again
     * when the message is restarted.
     * 
     * When the `create_copy` is %TRUE, the `free_func` should be %NULL.
     * @param message a #SoupMessage
     * @param createCopy whether to create copy of the `data`
     * @param contentType optional Content-Type of the `data,` or %NULL
     * @param data the request body data
     * @param length length of the `data`
     * @param freeFunc a free function for the `data,` or %NULL
     */
    static utilSetMessageRequestBodyFromData(message: Soup.Message, createCopy: boolean, contentType: string | null, data: any | null, length: number, freeFunc: GLib.DestroyNotify | null): void
    /**
     * Returns the `reason_phrase,` if it's non-%NULL and non-empty, a static string
     * corresponding to `status_code`. In case neither that can be found a localized
     * "Unknown error" message is returned.
     * @param statusCode an HTTP status code
     * @param reasonPhrase preferred string to use for the message, or %NULL
     * @returns Error text based on given arguments. The returned    value is valid as long as @reason_phrase is not freed.
     */
    static utilStatusToString(statusCode: number, reasonPhrase: string | null): string | null
}

export module Source {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticate`
     */
    export interface AuthenticateSignalCallback {
        (credentials: NamedParameters): void
    }

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `credentials-required`
     */
    export interface CredentialsRequiredSignalCallback {
        (reason: SourceCredentialsReason, certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Gio.ProxyResolver.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.Source

        displayName?: string | null
        enabled?: boolean | null
        mainContext?: GLib.MainContext | null
        parent?: string | null
        uid?: string | null
    }

}

export interface Source extends Gio.Initable, Gio.ProxyResolver {

    // Own properties of EDataServer-1.2.EDataServer.Source

    readonly connectionStatus: SourceConnectionStatus
    displayName: string | null
    enabled: boolean
    readonly mainContext: GLib.MainContext
    parent: string | null
    readonly remoteCreatable: boolean
    readonly remoteDeletable: boolean
    readonly removable: boolean
    readonly uid: string | null
    readonly writable: boolean
    __gtype__: number

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
    // Has conflict: changed(): void
    /**
     * Compares two #ESource instances by their display names.  Useful for
     * ordering sources in a user interface.
     * @param source2 the second #ESource
     * @returns a negative value if @source1 compares before @source2, zero if          they compare equal, or a positive value if @source1 compares          after @source2
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
     * @returns %TRUE on success, %FALSE on error
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
     * @returns %TRUE on success, %FALSE on error
     */
    deletePasswordSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Thread-safe variation of e_source_get_display_name().
     * Use this function when accessing `source` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESource:display-name
     */
    dupDisplayName(): string | null
    /**
     * Thread-safe variation of e_source_get_parent().
     * Use this function when accessing `source` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESource:parent
     */
    dupParent(): string | null
    /**
     * Creates a label string based on `source'`s #ESource:display-name for use
     * with #SecretItem.
     * @returns a newly-allocated secret label
     */
    dupSecretLabel(): string | null
    /**
     * Thread-safe variation of e_source_get_uid().
     * Use this function when accessing `source` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESource:uid
     */
    dupUid(): string | null
    /**
     * Emits locally (in this process only) the ESource::credentials-required
     * signal with given parameters. That's the difference with e_source_invoke_credentials_required(),
     * which calls the signal globally, within each client.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     */
    emitCredentialsRequired(reason: SourceCredentialsReason, certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error | null): void
    /**
     * Checks two #ESource instances for equality.  #ESource instances are
     * equal if their unique identifier strings are equal.
     * @param source2 the second #ESource
     * @returns %TRUE if @source1 and @source2 are equal
     */
    equal(source2: Source): boolean
    /**
     * Obtain current connection status of the `source`.
     * @returns Current connection status of the @source.
     */
    getConnectionStatus(): SourceConnectionStatus
    /**
     * Returns the display name for `source`.  Use the display name to
     * represent the #ESource in a user interface.
     * @returns the display name for @source
     */
    getDisplayName(): string | null
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
     * @returns whether @source is enabled
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
     * @returns an instance of some #ESourceExtension subclass
     */
    getExtension(extensionName: string | null): SourceExtension
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
     * @returns %TRUE on success, %FALSE on error
     */
    getLastCredentialsRequiredArgumentsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outReason */ SourceCredentialsReason, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outOpError */ GLib.Error ]
    /**
     * Retrieves the last used arguments of the 'credentials-required' signal emission.
     * If there was none emitted yet, or a corresponding 'authenitcate' had been emitted
     * already, then the `out_reason` is set to #E_SOURCE_CREDENTIALS_REASON_UNKNOWN
     * and the value of other 'out' arguments is set to no values.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE. The result gchar
     * values should be freed with g_free() when no longer needed.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    getLastCredentialsRequiredArgumentsSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outReason */ SourceCredentialsReason, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outOpError */ GLib.Error ]
    // Has conflict: getOauth2AccessToken(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: getOauth2AccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number ]
    // Has conflict: getOauth2AccessTokenSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number ]
    /**
     * Returns the unique identifier string of the parent #ESource.
     * @returns the UID of the parent #ESource
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
     * @returns whether @source can create remote resources
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
     * @returns whether @source can delete remote resources
     */
    getRemoteDeletable(): boolean
    /**
     * Returns whether the D-Bus service will allow `source` to be removed.
     * If `source` is not writable, calls to e_source_remove() will fail.
     * @returns whether @source is removable
     */
    getRemovable(): boolean
    /**
     * Returns the unique identifier string for `source`.
     * @returns the UID for @source
     */
    getUid(): string | null
    /**
     * Returns whether the D-Bus service will accept changes to `source`.
     * If `source` is not writable, calls to e_source_write() will fail.
     * @returns whether @source is writable
     */
    getWritable(): boolean
    /**
     * Checks whether `source` has an #ESourceExtension with the given name.
     * @param extensionName an extension name
     * @returns %TRUE if @source has such an extension, %FALSE if not
     */
    hasExtension(extensionName: string | null): boolean
    /**
     * Generates a hash value for `source`.  This function is intended for
     * easily hashing an #ESource to add to a #GHashTable or similar data
     * structure.
     * @returns a hash value for @source.
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
     * @returns %TRUE on success, %FALSE on error
     */
    invokeAuthenticateFinish(result: Gio.AsyncResult): boolean
    /**
     * Calls the InvokeAuthenticate method on the server side, thus the backend
     * knows what credentials to use to connect to its (possibly remote) data store.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param credentials an #ENamedParameters structure with credentials to use; can be %NULL    to use those from the last call
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
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
    invokeCredentialsRequired(reason: SourceCredentialsReason, certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_invoke_credentials_required().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
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
     * @returns %TRUE on success, %FALSE on error
     */
    invokeCredentialsRequiredSync(reason: SourceCredentialsReason, certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error | null, cancellable: Gio.Cancellable | null): boolean
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
     * @returns %TRUE on success, %FALSE on error
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
     * @returns %TRUE on success, %FALSE on error
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
     * @returns %TRUE on success, %FALSE on failure
     */
    mailSignatureLoadFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ string | null, /* length */ number ]
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
     * @returns %TRUE on success, %FALSE on failure
     */
    mailSignatureLoadSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* contents */ string | null, /* length */ number ]
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
    mailSignatureReplace(contents: string | null, length: number, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with e_source_mail_signature_replace().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    mailSignatureReplaceFinish(result: Gio.AsyncResult): boolean
    /**
     * Replaces the signature file for `source` with the given `contents`
     * of `length` bytes.  The signature file for `source` is given by
     * e_source_mail_signature_get_file().
     * @param contents the signature contents
     * @param length the length of `contents` in bytes
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    mailSignatureReplaceSync(contents: string | null, length: number, cancellable: Gio.Cancellable | null): boolean
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
    mailSignatureSymlink(symlinkTarget: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with e_source_mail_signature_symlink().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    mailSignatureSymlinkFinish(result: Gio.AsyncResult): boolean
    /**
     * Replaces the signature file for `source` with a symbolic link to
     * `symlink_target,` which should be an executable file that prints
     * a mail signature to standard output.  The signature file for
     * `source` is given by e_source_mail_signature_get_file().
     * @param symlinkTarget executable filename to link to
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    mailSignatureSymlinkSync(symlinkTarget: string | null, cancellable: Gio.Cancellable | null): boolean
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
    proxyLookup(uri: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_proxy_lookup().
     * 
     * Free the returned proxy URIs with g_strfreev() when finished with them.
     * @param result a #GAsyncResult
     * @returns a %NULL-terminated array of proxy    URIs, or %NULL
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
     * @returns a %NULL-terminated array of proxy URIs,    or %NULL
     */
    proxyLookupSync(uri: string | null, cancellable: Gio.Cancellable | null): string[] | null
    /**
     * Returns the #GDBusObject that was passed to e_source_new().
     * 
     * The returned #GDBusObject is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns the #GDBusObject for @source, or %NULL
     */
    refDbusObject(): Gio.DBusObject | null
    /**
     * Returns the #GMainContext on which event sources for `source` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     * @returns a #GMainContext
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
     * @returns a refresh timeout ID
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
     * @returns %TRUE if the timeout was found and removed
     */
    refreshRemoveTimeout(refreshTimeoutId: number): boolean
    /**
     * Removes all timeout #GSource's added by e_source_refresh_add_timeout()
     * whose callback data pointer matches `user_data`.
     * @param userData user data to match against timeout callbacks
     * @returns the number of timeouts found and removed
     */
    refreshRemoveTimeoutsByData(userData: any | null): number
    // Has conflict: remoteCreate(scratchSource: Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: remoteCreateFinish(result: Gio.AsyncResult): boolean
    // Has conflict: remoteCreateSync(scratchSource: Source, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: remoteDelete(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: remoteDeleteFinish(result: Gio.AsyncResult): boolean
    // Has conflict: remoteDeleteSync(cancellable: Gio.Cancellable | null): boolean
    // Has conflict: remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: removeFinish(result: Gio.AsyncResult): boolean
    // Has conflict: removeSync(cancellable: Gio.Cancellable | null): boolean
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
    setDisplayName(displayName: string | null): void
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
    storePassword(password: string | null, permanently: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_store_password().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
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
     * @returns %TRUE on success, %FALSE on error
     */
    storePasswordSync(password: string | null, permanently: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Outputs the current contents of `source` as a key file string.
     * Free the returned string with g_free().
     * @returns a newly-allocated string
     */
    toString(): [ /* returnType */ string | null, /* length */ number ]
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
     * @returns %TRUE on success, %FALSE on error
     */
    unsetLastCredentialsRequiredArgumentsFinish(result: Gio.AsyncResult): boolean
    /**
     * Unsets the last used arguments of the 'credentials-required' signal emission.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    unsetLastCredentialsRequiredArgumentsSync(cancellable: Gio.Cancellable | null): boolean
    // Has conflict: write(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: writeFinish(result: Gio.AsyncResult): boolean
    // Has conflict: writeSync(cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of EDataServer-1.2.EDataServer.Source

    authenticate(credentials: NamedParameters): void
    /**
     * Emits the #ESource::changed signal from an idle callback in
     * `source'`s #ESource:main-context.
     * 
     * This function is primarily intended for use by #ESourceExtension
     * when emitting a #GObject::notify signal on one of its properties.
     * @virtual 
     */
    changed(): void
    credentialsRequired(reason: SourceCredentialsReason, certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error): void
    /**
     * Asynchronously obtains the OAuth 2.0 access token for `source` along
     * with its expiry in seconds from the current time (or 0 if unknown).
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_get_oauth2_access_token_finish() to get the result of the
     * operation.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request            is satisfied
     */
    getOauth2AccessToken(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_get_oauth2_access_token().
     * 
     * Free the returned access token with g_free() when finished with it.
     * If an error occurred, the function will set `error` and return %FALSE.
     * @virtual 
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    getOauth2AccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number ]
    /**
     * Obtains the OAuth 2.0 access token for `source` along with its expiry
     * in seconds from the current time (or 0 if unknown).
     * 
     * Free the returned access token with g_free() when finished with it.
     * If an error occurs, the function will set `error` and return %FALSE.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    getOauth2AccessTokenSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number ]
    invokeAuthenticateImpl(dbusSource: any | null, argCredentials: string | null, cancellable: Gio.Cancellable | null): boolean
    invokeCredentialsRequiredImpl(dbusSource: any | null, argReason: string | null, argCertificatePem: string | null, argCertificateErrors: string | null, argDbusErrorName: string | null, argDbusErrorMessage: string | null, cancellable: Gio.Cancellable | null): boolean
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
     * @virtual 
     * @param scratchSource an #ESource describing the resource to create
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remoteCreate(scratchSource: Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_remote_create().  If
     * an error occurred, the function will set `error` and return %FALSE.
     * @virtual 
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
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
     * @virtual 
     * @param scratchSource an #ESource describing the resource to create
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
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
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remoteDelete(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_remote_delete().  If
     * an error occurred, the function will set `error` and return %FALSE.
     * @virtual 
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    remoteDeleteFinish(result: Gio.AsyncResult): boolean
    /**
     * Deletes the resource represented by `source` from a remote server.
     * The `source` must be #ESource:remote-deletable.  This will also delete
     * the key file for `source` and broadcast its removal to all clients,
     * similar to e_source_remove_sync().
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    remoteDeleteSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously requests the D-Bus service to delete the key files for
     * `source` and all of its descendants and broadcast their removal to all
     * clients.  The `source` must be #ESource:removable.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_remove_finish() to get the result of the operation.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_remove().  If an
     * error occurred, the function will set `error` and return %FALSE.
     * @virtual 
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE of failure
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests the D-Bus service to delete the key files for `source` and all of
     * its descendants and broadcast their removal to all clients.  The `source`
     * must be #ESource:removable.
     * 
     * If an error occurs, the functon will set `error` and return %FALSE.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    removeSync(cancellable: Gio.Cancellable | null): boolean
    unsetLastCredentialsRequiredArgumentsImpl(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously submits the current contents of `source` to the D-Bus
     * service to be written to disk and broadcast to other clients.  The
     * `source` must be #ESource:writable.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_source_write_finish() to get the result of the operation.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    write(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_write().  If an
     * error occurred, the function will set `error` and return %FALSE.
     * @virtual 
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    writeFinish(result: Gio.AsyncResult): boolean
    /**
     * Submits the current contents of `source` to the D-Bus service to be
     * written to disk and broadcast to other clients.  The `source` must
     * be #ESource:writable.
     * 
     * If an error occurs, the functon will set `error` and return %FALSE.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    writeSync(cancellable: Gio.Cancellable | null): boolean

    // Own signals of EDataServer-1.2.EDataServer.Source

    connect(sigName: "authenticate", callback: Source.AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: Source.AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: Source.AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: Source.AuthenticateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticate", ...args: any[]): void
    connect(sigName: "changed", callback: Source.ChangedSignalCallback): number
    on(sigName: "changed", callback: Source.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Source.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Source.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "credentials-required", callback: Source.CredentialsRequiredSignalCallback): number
    on(sigName: "credentials-required", callback: Source.CredentialsRequiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "credentials-required", callback: Source.CredentialsRequiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "credentials-required", callback: Source.CredentialsRequiredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "credentials-required", certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error, ...args: any[]): void

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
export class Source extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.Source

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.Source

    constructor(config?: Source.ConstructorProperties) 
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
     * @returns a new #ESource, or %NULL on error
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
     * @returns a new #ESource, or %NULL on error
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
     * @returns a new scratch #ESource, or %NULL on error
     */
    static newWithUid(uid: string | null, mainContext: GLib.MainContext | null): Source
    _init(config?: Source.ConstructorProperties): void
    /**
     * Converts a #GParamSpec name (e.g. "foo-bar" or "foo_bar")
     * to "CamelCase" for use as a #GKeyFile key (e.g. "FooBar").
     * 
     * This function is made public only to aid in account migration.
     * Applications should not need to use this.
     * @param paramName a #GParamSpec name
     */
    static parameterToKey(paramName: string | null): string | null
}

export module SourceAddressBook {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceBackend.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceAddressBook

        order?: number | null
    }

}

export interface SourceAddressBook {

    // Own properties of EDataServer-1.2.EDataServer.SourceAddressBook

    order: number
    __gtype__: number

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class SourceAddressBook extends SourceBackend {

    // Own properties of EDataServer-1.2.EDataServer.SourceAddressBook

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceAddressBook

    constructor(config?: SourceAddressBook.ConstructorProperties) 
    _init(config?: SourceAddressBook.ConstructorProperties): void
}

export module SourceAlarms {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceAlarms

        includeMe?: boolean | null
        lastNotified?: string | null
    }

}

export interface SourceAlarms {

    // Own properties of EDataServer-1.2.EDataServer.SourceAlarms

    includeMe: boolean
    lastNotified: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceAlarms

    /**
     * Thread-safe variation of e_source_alarms_get_last_notified().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceAlarms:last-notified
     */
    dupLastNotified(): string | null
    /**
     * Returns whether the user should be alerted about upcoming appointments
     * in the calendar described by the #ESource to which `extension` belongs.
     * 
     * Alarm daemons such as evolution-alarm-notify can use this property to
     * decide which calendars to query for upcoming appointments.
     * @returns whether to show alarms for upcoming appointments
     */
    getIncludeMe(): boolean
    /**
     * Returns an ISO 8601 formatted timestamp of when the user was last
     * alerted about an upcoming appointment in the calendar described by
     * the #ESource to which `extension` belongs.  If no valid timestamp
     * has been set, the function will return %NULL.
     * @returns an ISO 8601 timestamp, or %NULL
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceAlarms extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceAlarms

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceAlarms

    constructor(config?: SourceAlarms.ConstructorProperties) 
    _init(config?: SourceAlarms.ConstructorProperties): void
}

export module SourceAuthentication {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

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

}

export interface SourceAuthentication {

    // Own properties of EDataServer-1.2.EDataServer.SourceAuthentication

    readonly connectable: Gio.SocketConnectable
    credentialName: string | null
    host: string | null
    isExternal: boolean
    method: string | null
    port: number
    proxyUid: string | null
    rememberPassword: boolean
    user: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceAuthentication

    /**
     * Thread-safe variation of e_source_authentication_get_credential_name().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceAuthentication:credential-name
     */
    dupCredentialName(): string | null
    /**
     * Thread-safe variation of e_source_authentication_get_host().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceAuthentication:host
     */
    dupHost(): string | null
    /**
     * Thread-safe variation of e_source_authentication_get_method().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceAuthentication:method
     */
    dupMethod(): string | null
    /**
     * Thread-safe variation of e_source_authentication_get_proxy_uid().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceAuthentication:proxy-uid
     */
    dupProxyUid(): string | null
    /**
     * Thread-safe variation of e_source_authentication_get_user().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceAuthentication:user
     */
    dupUser(): string | null
    /**
     * Returns the credential name used to pass the stored or gathered credential
     * (like password) into the e_source_invoke_authenticate(). This is
     * a counterpart of the authentication method. The %NULL means to use
     * the default name, which is #E_SOURCE_CREDENTIAL_PASSWORD.
     * @returns the credential name to use for authentication, or %NULL
     */
    getCredentialName(): string | null
    /**
     * Returns the host name used to authenticate to a remote account.
     * @returns the host name of a remote account
     */
    getHost(): string | null
    /**
     * Get if the authentication is done by an external application such as a
     * Single Sign On application (e.g. GNOME Online Accounts)
     * @returns %TRUE if the authentication is done by an external application, %FALSE otherwise
     */
    getIsExternal(): boolean
    /**
     * Returns the authentication method for a remote account.  There are
     * no pre-defined method names; backends are free to set this however
     * they wish.  If authentication is not required for a remote account,
     * the convention is to set #ESourceAuthentication:method to "none".
     * @returns the authentication method for a remote account
     */
    getMethod(): string | null
    /**
     * Returns the port number used to authenticate to a remote account.
     * @returns the port number of a remote account
     */
    getPort(): number
    /**
     * Returns the #ESource:uid of the #ESource that holds network proxy
     * settings for use when connecting to a remote account.
     * @returns the proxy profile #ESource:uid
     */
    getProxyUid(): string | null
    /**
     * Returns whether to offer to remember the provided password by default
     * in password prompts.  This way, if the user unchecks the option it will
     * be unchecked by default in future password prompts.
     * @returns whether to offer to remember the password by default
     */
    getRememberPassword(): boolean
    /**
     * Returns the user name used to authenticate to a remote account.
     * @returns the user name of a remote account
     */
    getUser(): string | null
    /**
     * Returns a #GSocketConnectable instance constructed from `extension'`s
     * #ESourceAuthentication:host and #ESourceAuthentication:port properties,
     * or %NULL if the #ESourceAuthentication:host is not set.
     * 
     * The returned #GSocketConnectable is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
     * @returns a #GSocketConnectable, or %NULL
     */
    refConnectable(): Gio.SocketConnectable | null
    /**
     * This is a convenience function which returns whether authentication
     * is required at all, regardless of the method used.  This relies on
     * the convention of setting #ESourceAuthentication:method to "none"
     * when authentication is <emphasis>not</emphasis> required.
     * @returns whether authentication is required at all
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
    setProxyUid(proxyUid: string | null): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceAuthentication extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceAuthentication

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceAuthentication

    constructor(config?: SourceAuthentication.ConstructorProperties) 
    _init(config?: SourceAuthentication.ConstructorProperties): void
}

export module SourceAutocomplete {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceAutocomplete

        includeMe?: boolean | null
    }

}

export interface SourceAutocomplete {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutocomplete

    includeMe: boolean
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceAutocomplete

    /**
     * Returns whether the address book described by the #ESource to which
     * `extension` belongs should be queried when the user inputs a partial
     * contact name or email address.
     * @returns whether to use the autocomplete feature
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceAutocomplete extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutocomplete

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceAutocomplete

    constructor(config?: SourceAutocomplete.ConstructorProperties) 
    _init(config?: SourceAutocomplete.ConstructorProperties): void
}

export module SourceAutoconfig {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceAutoconfig

        revision?: string | null
    }

}

export interface SourceAutoconfig {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutoconfig

    revision: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceAutoconfig

    /**
     * Thread-safe variation of e_source_autoconfig_get_revision().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceAutoconfig:revision
     */
    dupRevision(): string | null
    /**
     * Returns the revision of a data source. This maps a particular version of a
     * system-wide source to a user-specific source.
     * 
     * If doesn't match, the system-wide source will be copied to the user-specific
     * evolution config directory, preserving the already present fields that are
     * not defined by the system-wide source.
     * 
     * If it matches, no copying is done.
     * @returns revision of the data source
     */
    getRevision(): string | null
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
    setRevision(revision: string | null): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceAutoconfig

    connect(sigName: "notify::revision", callback: (...args: any[]) => void): number
    on(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::revision", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceAutoconfig extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutoconfig

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceAutoconfig

    constructor(config?: SourceAutoconfig.ConstructorProperties) 
    _init(config?: SourceAutoconfig.ConstructorProperties): void
}

export module SourceBackend {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceBackend

        backendName?: string | null
    }

}

export interface SourceBackend {

    // Own properties of EDataServer-1.2.EDataServer.SourceBackend

    backendName: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceBackend

    /**
     * Thread-safe variation of e_source_backend_get_backend_name().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceBackend:backend-name
     */
    dupBackendName(): string | null
    /**
     * Returns the backend name for `extension`.
     * @returns the backend name for @extension
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceBackend extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceBackend

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceBackend

    constructor(config?: SourceBackend.ConstructorProperties) 
    _init(config?: SourceBackend.ConstructorProperties): void
}

export module SourceCalendar {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceSelectable.ConstructorProperties {
    }

}

export interface SourceCalendar {

    // Own properties of EDataServer-1.2.EDataServer.SourceCalendar

    __gtype__: number

    // Class property signals of EDataServer-1.2.EDataServer.SourceCalendar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class SourceCalendar extends SourceSelectable {

    // Own properties of EDataServer-1.2.EDataServer.SourceCalendar

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceCalendar

    constructor(config?: SourceCalendar.ConstructorProperties) 
    _init(config?: SourceCalendar.ConstructorProperties): void
}

export module SourceCamel {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {
    }

}

export interface SourceCamel {

    // Own properties of EDataServer-1.2.EDataServer.SourceCamel

    readonly settings: Camel.Settings
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceCamel

    /**
     * Returns `extension'`s #ESourceCamel:settings instance, pre-configured
     * from the #ESource to which `extension` belongs.  Changes to the #ESource
     * will automatically propagate to the #ESourceCamel:settings instance and
     * vice versa.
     * 
     * This is essentially the glue that binds #ESource to #CamelService.
     * See e_source_camel_configure_service().
     * @returns a configured #CamelSettings instance
     */
    getSettings(): Camel.Settings

    // Class property signals of EDataServer-1.2.EDataServer.SourceCamel

    connect(sigName: "notify::settings", callback: (...args: any[]) => void): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::settings", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceCamel extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceCamel

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceCamel

    constructor(config?: SourceCamel.ConstructorProperties) 
    _init(config?: SourceCamel.ConstructorProperties): void
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
     * @returns the #GType of the generated #ESourceCamel subtype
     */
    static generateSubtype(protocol: string | null, settingsType: GObject.GType): GObject.GType
    /**
     * Returns the extension name for the #ESourceCamel subtype for `protocol`.
     * The extension name can then be passed to e_source_get_extension() to
     * obtain an instance of the #ESourceCamel subtype.
     * 
     * For example, given a protocol named "imap" the function would return
     * "Imap Backend".
     * @param protocol a #CamelProvider protocol
     * @returns the #ESourceCamel extension name for @protocol
     */
    static getExtensionName(protocol: string | null): string | null
    /**
     * Returns the #GType name of the registered #ESourceCamel subtype for
     * `protocol`.
     * 
     * For example, given a protocol named "imap" the function would return
     * "ESourceCamelImap".
     * @param protocol a #CamelProvider protocol
     * @returns the #ESourceCamel type name for @protocol
     */
    static getTypeName(protocol: string | null): string | null
    /**
     * Creates and registers subclasses of #ESourceCamel for each available
     * #CamelProvider.  This function should be called once during application
     * or library initialization.
     */
    static registerTypes(): void
}

export module SourceCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceBackend.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceCollection

        allowSourcesRename?: boolean | null
        calendarEnabled?: boolean | null
        calendarUrl?: string | null
        contactsEnabled?: boolean | null
        contactsUrl?: string | null
        identity?: string | null
        mailEnabled?: boolean | null
    }

}

export interface SourceCollection {

    // Own properties of EDataServer-1.2.EDataServer.SourceCollection

    allowSourcesRename: boolean
    calendarEnabled: boolean
    calendarUrl: string | null
    contactsEnabled: boolean
    contactsUrl: string | null
    identity: string | null
    mailEnabled: boolean
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceCollection

    /**
     * Thread-safe variation of e_source_collection_get_calendar_url().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceCollection:calendar-url
     */
    dupCalendarUrl(): string | null
    /**
     * Thread-safe variation of e_source_collection_get_contacts_url().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceCollection:contacts-url
     */
    dupContactsUrl(): string | null
    /**
     * Thread-safe variation of e_source_collection_get_identity().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceCollection:identity
     */
    dupIdentity(): string | null
    /**
     * Returns whether the collection backend allows a user to rename child
     * sources. It is meant mainly for GUI. The default is %FALSE.
     * @returns whether the collection backend allows a user to rename child sources
     */
    getAllowSourcesRename(): boolean
    /**
     * Returns whether calendar sources within the collection should be
     * enabled.
     * 
     * An #ECollectionBackend running within the registry D-Bus service will
     * automatically synchronize any calendar sources it maintains with the
     * #ESourceCollection:calendar-enabled property.
     * @returns whether calendar sources should be enabled
     */
    getCalendarEnabled(): boolean
    /**
     * Returns the calendar top URL string, that is, where to search for calendar sources.
     * @returns the calendar top URL, or %NULL
     */
    getCalendarUrl(): string | null
    /**
     * Returns whether address book sources within the collection should be
     * enabled.
     * 
     * An #ECollectionBackend running within the registry D-Bus service will
     * automatically synchronize any address book sources it maintains with
     * the #ESourceCollection:contacts-enabled property.
     * @returns whether address book sources should be enabled
     */
    getContactsEnabled(): boolean
    /**
     * Returns the contacts top URL string, that is, where to search for contact sources.
     * @returns the contacts top URL, or %NULL
     */
    getContactsUrl(): string | null
    /**
     * Returns the string used to uniquely identify the user account at
     * the service provider.  Often this is an email address or user name.
     * @returns the collection identity
     */
    getIdentity(): string | null
    /**
     * Returns whether mail sources within the collection should be enabled.
     * 
     * An #ECollectionBackend running within the registry D-Bus service will
     * automatically synchronize any mail sources it maintains with the
     * #ESourceCollection:mail-enabled property.
     * @returns whether mail sources should be enabled
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class SourceCollection extends SourceBackend {

    // Own properties of EDataServer-1.2.EDataServer.SourceCollection

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceCollection

    constructor(config?: SourceCollection.ConstructorProperties) 
    _init(config?: SourceCollection.ConstructorProperties): void
}

export module SourceContacts {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceContacts

        includeMe?: boolean | null
    }

}

export interface SourceContacts {

    // Own properties of EDataServer-1.2.EDataServer.SourceContacts

    includeMe: boolean
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceContacts

    getIncludeMe(): boolean
    setIncludeMe(includeMe: boolean): void

    // Class property signals of EDataServer-1.2.EDataServer.SourceContacts

    connect(sigName: "notify::include-me", callback: (...args: any[]) => void): number
    on(sigName: "notify::include-me", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::include-me", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::include-me", ...args: any[]): void
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
}

export class SourceContacts extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceContacts

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceContacts

    constructor(config?: SourceContacts.ConstructorProperties) 
    _init(config?: SourceContacts.ConstructorProperties): void
}

export module SourceCredentialsProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends Extensible.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceCredentialsProvider

        /**
         * The Source Registry object, which can be either #ESourceregistry or #ESourceRegistryServer.
         */
        registry?: GObject.Object | null
    }

}

export interface SourceCredentialsProvider extends Extensible {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProvider

    /**
     * The Source Registry object, which can be either #ESourceregistry or #ESourceRegistryServer.
     */
    readonly registry: GObject.Object
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceCredentialsProvider

    /**
     * Returns whether a credentials prompt can be shown for the `source`.
     * @param source an #ESource
     * @returns %TRUE, when a credentials prompt can be shown for @source, %FALSE otherwise.
     */
    canPrompt(source: Source): boolean
    /**
     * Returns whether the `source` can store its credentials. When %FALSE is returned,
     * an attempt to call e_source_credentials_provider_store() or
     * e_source_credentials_provider_store_sync() will fail for this `source`.
     * @param source an #ESource
     * @returns %TRUE, when the credentials storing for @source is possible, %FALSE otherwise.
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
     * @returns %TRUE on success, %FALSE on error
     */
    deleteFinish(result: Gio.AsyncResult): boolean
    /**
     * Deletes any previously stored credentials for `source`.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param source an #ESource, to store credentials for
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
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
     * @returns %TRUE on success, %FALSE on error
     */
    lookupFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    /**
     * Looks up the credentials for `source`.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param source an #ESource, to lookup credentials for
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    lookupSync(source: Source, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    /**
     * Returns a referenced parent #ESource, which holds the credentials for
     * the given `source`. This is useful for collections, where the credentials
     * are usually stored on the collection source, thus shared between child
     * sources. When ther eis no such parent source, a %NULL is returned, which
     * means the `source` holds credentials for itself.
     * @param source an #ESource
     * @returns referenced parent #ESource, which holds    credentials, or %NULL. Unref the returned non-NULL #ESource with    g_object_unref(), when no longer needed.
     */
    refCredentialsSource(source: Source): Source | null
    /**
     * Returns refenrenced registry associated with this `provider`.
     * @returns Reference registry associated with this @provider. Unref it    with g_object_unref() when no longer needed.
     */
    refRegistry(): GObject.Object
    // Has conflict: refSource(uid: string | null): Source | null
    /**
     * Registers a credentials provider implementation and adds its own reference on
     * the `provider_impl`.
     * @param providerImpl an #ESourceCredentialsProviderImpl
     * @returns %TRUE on success, %FALSE on failure, like when there is    the @provider_impl already registered.
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
     * @returns %TRUE on success, %FALSE on error
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
     * @returns %TRUE on success, %FALSE on error
     */
    storeSync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Unregisters previously registered `provider_impl` with
     * e_source_credentials_provider_register_impl(). Function does nothing,
     * when the `provider_impl` is not registered.
     * @param providerImpl an #ESourceCredentialsProviderImpl
     */
    unregisterImpl(providerImpl: SourceCredentialsProviderImpl): void

    // Own virtual methods of EDataServer-1.2.EDataServer.SourceCredentialsProvider

    /**
     * Returns referenced #ESource with the given `uid,` or %NULL, when it could not be found.
     * @virtual 
     * @param uid an #ESource UID
     * @returns Referenced #ESource with the given @uid, or %NULL, when it    could not be found. Unref the returned #ESource with g_object_unref(), when no longer needed.
     */
    refSource(uid: string | null): Source | null

    // Class property signals of EDataServer-1.2.EDataServer.SourceCredentialsProvider

    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
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
export class SourceCredentialsProvider extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProvider

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceCredentialsProvider

    constructor(config?: SourceCredentialsProvider.ConstructorProperties) 
    /**
     * Creates a new #ESourceCredentialsProvider, which is meant to abstract
     * credential management for #ESource<!-- -->-s.
     * @constructor 
     * @param registry an #ESourceRegistry
     * @returns a new #ESourceCredentialsProvider
     */
    constructor(registry: SourceRegistry) 
    /**
     * Creates a new #ESourceCredentialsProvider, which is meant to abstract
     * credential management for #ESource<!-- -->-s.
     * @constructor 
     * @param registry an #ESourceRegistry
     * @returns a new #ESourceCredentialsProvider
     */
    static new(registry: SourceRegistry): SourceCredentialsProvider
    _init(config?: SourceCredentialsProvider.ConstructorProperties): void
}

export module SourceCredentialsProviderImpl {

    // Constructor properties interface

    export interface ConstructorProperties extends Extension.ConstructorProperties {
    }

}

export interface SourceCredentialsProviderImpl {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl

    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl

    // Has conflict: canProcess(source: Source): boolean
    // Has conflict: canPrompt(): boolean
    // Has conflict: canStore(): boolean
    // Has conflict: deleteSync(source: Source, cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns an #ESourceCredentialsProvider with which the `provider_impl` is associated.
     * @returns an #ESourceCredentialsProvider
     */
    getProvider(): any | null
    // Has conflict: lookupSync(source: Source, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    // Has conflict: storeSync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl

    /**
     * Returns whether the `provider_impl` can process credentials for the `source`.
     * @virtual 
     * @param source an #ESource
     * @returns Whether the @provider_impl can process credentials for the @source.
     */
    canProcess(source: Source): boolean
    /**
     * Returns whether credential prompt can be done for the `provider_impl`.
     * @virtual 
     * @returns Whether credential prompt can be done for the @provider_impl.
     */
    canPrompt(): boolean
    /**
     * Returns whether the `provider_impl` can store credentials.
     * @virtual 
     * @returns Whether the @provider_impl can store credentials.
     */
    canStore(): boolean
    /**
     * Asks `provider_impl` to delete any stored credentials for `source`.
     * 
     * Default implementation returns %FALSE and sets #G_IO_ERROR_NOT_SUPPORTED error.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @virtual 
     * @param source an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    deleteSync(source: Source, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asks `provider_impl` to lookup for stored credentials for `source`.
     * The `out_credentials` is populated with them. If the result is not
     * %NULL, then it should be freed with e_named_parameters_free() when
     * no longer needed.
     * 
     * Default implementation returns %FALSE and sets #G_IO_ERROR_NOT_SUPPORTED error.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @virtual 
     * @param source an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    lookupSync(source: Source, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    /**
     * Asks `provider_impl` to store `credentials` for `source`.
     * 
     * Default implementation returns %FALSE and sets #G_IO_ERROR_NOT_SUPPORTED error.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @virtual 
     * @param source an #ESource
     * @param credentials an #ENamedParameters containing credentials to store
     * @param permanently whether to store credentials permanently, or for the current session only
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    storeSync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class SourceCredentialsProviderImpl extends Extension {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl

    constructor(config?: SourceCredentialsProviderImpl.ConstructorProperties) 
    _init(config?: SourceCredentialsProviderImpl.ConstructorProperties): void
}

export module SourceCredentialsProviderImplOAuth2 {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceCredentialsProviderImpl.ConstructorProperties {
    }

}

export interface SourceCredentialsProviderImplOAuth2 {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2

    __gtype__: number

    // Class property signals of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class SourceCredentialsProviderImplOAuth2 extends SourceCredentialsProviderImpl {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2

    constructor(config?: SourceCredentialsProviderImplOAuth2.ConstructorProperties) 
    _init(config?: SourceCredentialsProviderImplOAuth2.ConstructorProperties): void
}

export module SourceCredentialsProviderImplPassword {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceCredentialsProviderImpl.ConstructorProperties {
    }

}

export interface SourceCredentialsProviderImplPassword {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPassword

    __gtype__: number

    // Class property signals of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPassword

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class SourceCredentialsProviderImplPassword extends SourceCredentialsProviderImpl {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPassword

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPassword

    constructor(config?: SourceCredentialsProviderImplPassword.ConstructorProperties) 
    _init(config?: SourceCredentialsProviderImplPassword.ConstructorProperties): void
}

export module SourceExtension {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceExtension

        source?: Source | null
    }

}

export interface SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceExtension

    readonly source: Source
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceExtension

    /**
     * Returns the #ESource instance to which `extension` belongs.
     * 
     * Note this function is not thread-safe.  The returned #ESource could
     * be finalized by another thread while the caller is still using it.
     * @returns the #ESource instance
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
     * @returns the #ESource instance
     */
    refSource(): Source

    // Class property signals of EDataServer-1.2.EDataServer.SourceExtension

    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
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
export class SourceExtension extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.SourceExtension

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceExtension

    constructor(config?: SourceExtension.ConstructorProperties) 
    _init(config?: SourceExtension.ConstructorProperties): void
}

export module SourceGoa {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceGoa

        accountId?: string | null
        address?: string | null
        calendarUrl?: string | null
        contactsUrl?: string | null
        name?: string | null
    }

}

export interface SourceGoa {

    // Own properties of EDataServer-1.2.EDataServer.SourceGoa

    accountId: string | null
    address: string | null
    calendarUrl: string | null
    contactsUrl: string | null
    name: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceGoa

    /**
     * Thread-safe variation of e_source_goa_get_account_id().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceGoa:account-id
     */
    dupAccountId(): string | null
    /**
     * Thread-safe variation of e_source_goa_get_address().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceGoa:address
     */
    dupAddress(): string | null
    /**
     * Thread-safe variation of e_source_goa_get_calendar_url().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceGoa:calendar-url
     */
    dupCalendarUrl(): string | null
    /**
     * Thread-safe variation of e_source_goa_get_contacts_url().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceGoa:contacts-url
     */
    dupContactsUrl(): string | null
    /**
     * Thread-safe variation of e_source_goa_get_name().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceGoa:name
     */
    dupName(): string | null
    /**
     * Returns the identifier string of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs.
     * @returns the associated GNOME Online Account ID
     */
    getAccountId(): string | null
    /**
     * Returns the original Address of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs. Can be %NULL or an empty
     * string when not filled.
     * @returns the associated GNOME Online Account's Address
     */
    getAddress(): string | null
    /**
     * Returns the calendar URL string of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs. Can be %NULL or an empty
     * string for accounts not supporting this property.
     * @returns the associated GNOME Online Account calendar URL
     */
    getCalendarUrl(): string | null
    /**
     * Returns the contacts URL string of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs. Can be %NULL or an empty
     * string for accounts not supporting this property.
     * @returns the associated GNOME Online Account contacts URL
     */
    getContactsUrl(): string | null
    /**
     * Returns the original Name of the GNOME Online Account associated
     * with the #ESource to which `extension` belongs. Can be %NULL or an empty
     * string when not filled.
     * @returns the associated GNOME Online Account's Name
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceGoa extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceGoa

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceGoa

    constructor(config?: SourceGoa.ConstructorProperties) 
    _init(config?: SourceGoa.ConstructorProperties): void
}

export module SourceLDAP {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceLDAP

        authentication?: SourceLDAPAuthentication | null
        canBrowse?: boolean | null
        filter?: string | null
        limit?: number | null
        rootDn?: string | null
        scope?: SourceLDAPScope | null
        security?: SourceLDAPSecurity | null
    }

}

export interface SourceLDAP {

    // Own properties of EDataServer-1.2.EDataServer.SourceLDAP

    authentication: SourceLDAPAuthentication
    canBrowse: boolean
    filter: string | null
    limit: number
    rootDn: string | null
    scope: SourceLDAPScope
    security: SourceLDAPSecurity
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceLDAP

    dupFilter(): string | null
    dupRootDn(): string | null
    getAuthentication(): SourceLDAPAuthentication
    getCanBrowse(): boolean
    getFilter(): string | null
    getLimit(): number
    getRootDn(): string | null
    getScope(): SourceLDAPScope
    getSecurity(): SourceLDAPSecurity
    setAuthentication(authentication: SourceLDAPAuthentication): void
    setCanBrowse(canBrowse: boolean): void
    setFilter(filter: string | null): void
    setLimit(limit: number): void
    setRootDn(rootDn: string | null): void
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
}

export class SourceLDAP extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceLDAP

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceLDAP

    constructor(config?: SourceLDAP.ConstructorProperties) 
    _init(config?: SourceLDAP.ConstructorProperties): void
}

export module SourceLocal {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceLocal

        customFile?: Gio.File | null
        emailAddress?: string | null
        writable?: boolean | null
    }

}

export interface SourceLocal {

    // Own properties of EDataServer-1.2.EDataServer.SourceLocal

    customFile: Gio.File
    emailAddress: string | null
    writable: boolean
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceLocal

    /**
     * A thread safe variant to get a custom file being set on the `extension`.
     * Free the returned #GFile, if not %NULL, with g_object_unref(),
     * when no longer needed.
     * @returns the #GFile instance, or %NULL
     */
    dupCustomFile(): Gio.File | null
    /**
     * Thread-safe variation of e_source_lcoal_get_email_address().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceLocal:email-address
     */
    dupEmailAddress(): string | null
    /**
     * Get the custom file being set on the `extension`.
     * The returned #GFile is owned by the `extension`.
     * 
     * For thread safety use e_source_local_dup_custom_file().
     * @returns the #GFile instance, or %NULL
     */
    getCustomFile(): Gio.File | null
    getEmailAddress(): string | null
    /**
     * Returns whether the backend should prefer to open the file
     * in writable mode. The default is %TRUE. The file can be still
     * opened for read-only, for example when the access to the file
     * is read-only.
     * @returns whether prefer to pen the file in writable mode
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
}

export class SourceLocal extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceLocal

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceLocal

    constructor(config?: SourceLocal.ConstructorProperties) 
    _init(config?: SourceLocal.ConstructorProperties): void
}

export module SourceMDN {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceMDN

        responsePolicy?: MdnResponsePolicy | null
    }

}

export interface SourceMDN {

    // Own properties of EDataServer-1.2.EDataServer.SourceMDN

    responsePolicy: MdnResponsePolicy
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceMDN

    /**
     * Returns the policy for this mail account on responding to Message
     * Disposition Notification requests when receiving mail messages.
     * @returns the #EMdnResponsePolicy for this account
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceMDN extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceMDN

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceMDN

    constructor(config?: SourceMDN.ConstructorProperties) 
    _init(config?: SourceMDN.ConstructorProperties): void
}

export module SourceMailAccount {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceBackend.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceMailAccount

        archiveFolder?: string | null
        builtin?: boolean | null
        identityUid?: string | null
        markSeen?: ThreeState | null
        markSeenTimeout?: number | null
        needsInitialSetup?: boolean | null
    }

}

export interface SourceMailAccount {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailAccount

    archiveFolder: string | null
    builtin: boolean
    identityUid: string | null
    markSeen: ThreeState
    markSeenTimeout: number
    needsInitialSetup: boolean
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceMailAccount

    /**
     * Thread-safe variation of e_source_mail_account_get_archive_folder().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailAccount:archive-folder
     */
    dupArchiveFolder(): string | null
    /**
     * Thread-safe variation of e_source_mail_account_get_identity_uid().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailAccount:identity-uid
     */
    dupIdentityUid(): string | null
    /**
     * Returns a string identifying the archive folder.
     * The format of the identifier string is defined by the client application.
     * @returns an identifier of the archive folder
     */
    getArchiveFolder(): string | null
    /**
     * Returns whether the mail account is a builtin account. The builtin
     * account cannot be created by a user. The default value is %FALSE.
     * @returns %TRUE, when the account is a builtin account
     */
    getBuiltin(): boolean
    /**
     * Returns the #ESource:uid of the #ESource that describes the mail
     * identity to be used for this account.
     * @returns the mail identity #ESource:uid
     */
    getIdentityUid(): string | null
    getMarkSeen(): ThreeState
    getMarkSeenTimeout(): number
    /**
     * Check whether the mail account needs to do its initial setup.
     * @returns %TRUE, when the account needs to run its initial setup
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
     * Sets whether the account is a builtin account. See e_source_mail_account_get_builtin()
     * for more information about what it means.
     * @param builtin value to set
     */
    setBuiltin(builtin: number): void
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
    connect(sigName: "notify::builtin", callback: (...args: any[]) => void): number
    on(sigName: "notify::builtin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::builtin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::builtin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::builtin", ...args: any[]): void
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class SourceMailAccount extends SourceBackend {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailAccount

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceMailAccount

    constructor(config?: SourceMailAccount.ConstructorProperties) 
    _init(config?: SourceMailAccount.ConstructorProperties): void
}

export module SourceMailComposition {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

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

}

export interface SourceMailComposition {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailComposition

    bcc: string[]
    cc: string[]
    draftsFolder: string | null
    language: string | null
    replyStyle: SourceMailCompositionReplyStyle
    signImip: boolean
    startBottom: ThreeState
    templatesFolder: string | null
    topSignature: ThreeState
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceMailComposition

    /**
     * Thread-safe variation of e_source_mail_composition_get_bcc().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string array should be freed with g_strfreev() when no
     * longer needed.
     * @returns a newly-allocated copy of #ESourceMailComposition:bcc
     */
    dupBcc(): string[]
    /**
     * Thread-safe variation of e_source_mail_composition_get_cc().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string array should be freed with g_strfreev() when no
     * longer needed.
     * @returns a newly-allocated copy of #ESourceMailComposition:cc
     */
    dupCc(): string[]
    /**
     * Thread-safe variation of e_source_mail_composition_get_drafts_folder().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailComposition:drafts-folder
     */
    dupDraftsFolder(): string | null
    /**
     * Thread-safe variation of e_source_mail_composition_get_language().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailComposition:language
     */
    dupLanguage(): string | null
    /**
     * Thread-safe variation of e_source_mail_composition_get_templates_folder().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailComposition:templates-folder
     */
    dupTemplatesFolder(): string | null
    /**
     * Returns a %NULL-terminated string array of recipients which should
     * automatically be added to the blind carbon-copy (Bcc) list when
     * composing a new mail message.  The recipient strings should be of
     * the form "Full Name &lt;email-address&gt;".  The returned array is
     * owned by `extension` and should not be modified or freed.
     * @returns a %NULL-terminated string array of Bcc recipients
     */
    getBcc(): string[]
    /**
     * Returns a %NULL-terminated string array of recipients which should
     * automatically be added to the carbon-copy (Cc) list when composing a
     * new mail message.  The recipient strings should be of the form "Full
     * Name <email-address>".  The returned array is owned by `extension` and
     * should not be modified or freed.
     * @returns a %NULL-terminated string array of Cc recipients
     */
    getCc(): string[]
    /**
     * Returns a string identifying the preferred folder for draft messages.
     * The format of the identifier string is defined by the client application.
     * @returns an identifier for the preferred drafts folder
     */
    getDraftsFolder(): string | null
    /**
     * Returns a string identifying the preferred language, like "en_US".
     * @returns an identifier for the preferred language, or %NULL for none
     */
    getLanguage(): string | null
    /**
     * Returns preferred reply style to be used when replying
     * using the associated account. If no preference is set,
     * the %E_SOURCE_MAIL_COMPOSITION_REPLY_STYLE_DEFAULT is returned.
     * @returns reply style preference
     */
    getReplyStyle(): SourceMailCompositionReplyStyle
    /**
     * Returns whether outgoing iMIP messages such as meeting requests should
     * also be signed.  This is primarily intended as a workaround for certain
     * versions of Microsoft Outlook which can't handle signed iMIP messages.
     * @returns whether outgoing iMIP messages should be signed
     */
    getSignImip(): boolean
    /**
     * Returns whether start at bottom when replying or forwarding
     * using the associated account. If no preference is set,
     * the %E_THREE_STATE_INCONSISTENT is returned.
     * @returns start bottom on reply or forward preference
     */
    getStartBottom(): ThreeState
    /**
     * Returns a string identifying the preferred folder for message templates.
     * The format of the identifier string is defined by the client application.
     * @returns an identifier for the preferred templates folder
     */
    getTemplatesFolder(): string | null
    /**
     * Returns whether place signature at top when replying or forwarding
     * using the associated account. If no preference is set,
     * the %E_THREE_STATE_INCONSISTENT is returned.
     * @returns top signature on reply or forward preference
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceMailComposition extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailComposition

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceMailComposition

    constructor(config?: SourceMailComposition.ConstructorProperties) 
    _init(config?: SourceMailComposition.ConstructorProperties): void
}

export module SourceMailIdentity {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceMailIdentity

        address?: string | null
        aliases?: string | null
        name?: string | null
        organization?: string | null
        replyTo?: string | null
        signatureUid?: string | null
    }

}

export interface SourceMailIdentity {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailIdentity

    address: string | null
    aliases: string | null
    name: string | null
    organization: string | null
    replyTo: string | null
    signatureUid: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceMailIdentity

    /**
     * Thread-safe variation of e_source_mail_identity_get_address().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailIdentity:address
     */
    dupAddress(): string | null
    /**
     * Thread-safe variation of e_source_mail_identity_get_aliases().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailIdentity:aliases
     */
    dupAliases(): string | null
    /**
     * Thread-safe variation of e_source_mail_identity_get_name().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailIdentity:name
     */
    dupName(): string | null
    /**
     * Thread-safe variation of e_source_mail_identity_dup_organization().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailIdentity:organization
     */
    dupOrganization(): string | null
    /**
     * Thread-safe variation of e_source_mail_identity_get_reply_to().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailIdentity:reply-to
     */
    dupReplyTo(): string | null
    /**
     * Thread-safe variation of e_source_mail_identity_get_signature_uid().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailIdentity:signature-uid
     */
    dupSignatureUid(): string | null
    /**
     * Returns the email address for this identity from which to send messages.
     * This may be an empty string but will never be %NULL.
     * @returns the sender's email address
     */
    getAddress(): string | null
    /**
     * Returns the email address aliases for this identity. These are comma-separated
     * email addresses which may or may not contain also different name.
     * This may be an empty string, but will never be %NULL.
     * There can be used camel_address_decode() on a #CamelInternetAddress
     * to decode the list of aliases.
     * @returns the sender's email address aliases
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
     * @returns A newly created   #GHashTable will all the aliases. Returns %NULL if there are none set.   Use g_hash_table_destroy() to free the returned hash table.
     */
    getAliasesAsHashTable(): GLib.HashTable | null
    /**
     * Returns the sender's name for this identity.
     * @returns the sender's name
     */
    getName(): string | null
    /**
     * Returns the sender's organization for this identity.
     * @returns the sender's organization
     */
    getOrganization(): string | null
    /**
     * Returns the email address for this identity to which recipients should
     * send replies.
     * @returns the sender's reply-to address
     */
    getReplyTo(): string | null
    /**
     * Returns the #ESource:uid of an #ESource describing a mail signature.
     * 
     * If the user does not want to use a signature for this identity, the
     * convention is to set the #ESourceMailIdentity:signature-uid property
     * to "none".
     * @returns the sender's signature ID, or "none"
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceMailIdentity extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailIdentity

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceMailIdentity

    constructor(config?: SourceMailIdentity.ConstructorProperties) 
    _init(config?: SourceMailIdentity.ConstructorProperties): void
}

export module SourceMailSignature {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceMailSignature

        mimeType?: string | null
    }

}

export interface SourceMailSignature {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSignature

    readonly file: Gio.File
    mimeType: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceMailSignature

    /**
     * Thread-safe variation of e_source_mail_signature_get_mime_type().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailSignature:mime-type,    or %NULL
     */
    dupMimeType(): string | null
    /**
     * Returns a #GFile instance pointing to the signature file for `extension`.
     * The signature file may be a regular file containing the static signature
     * content, or it may be a symbolic link to an executable file that produces
     * the signature content.
     * 
     * e_source_mail_signature_load() uses this to load the signature content.
     * @returns a #GFile
     */
    getFile(): Gio.File
    /**
     * Returns the MIME type of the signature content for `extension,` or %NULL
     * if it has not yet been determined.
     * 
     * e_source_mail_signature_load() sets this automatically if the MIME type
     * has not yet been determined.
     * @returns the MIME type of the signature content, or %NULL
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * function below.
 * @class 
 */
export class SourceMailSignature extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSignature

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceMailSignature

    constructor(config?: SourceMailSignature.ConstructorProperties) 
    _init(config?: SourceMailSignature.ConstructorProperties): void
}

export module SourceMailSubmission {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceMailSubmission

        repliesToOriginFolder?: boolean | null
        sentFolder?: string | null
        transportUid?: string | null
        useSentFolder?: boolean | null
    }

}

export interface SourceMailSubmission {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSubmission

    repliesToOriginFolder: boolean
    sentFolder: string | null
    transportUid: string | null
    useSentFolder: boolean
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceMailSubmission

    /**
     * Thread-safe variation of e_source_mail_submission_get_sent_folder().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailSubmission:sent-folder
     */
    dupSentFolder(): string | null
    /**
     * Thread-safe variation of e_source_mail_submission_get_transport_uid().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceMailSubmission:transport-uid
     */
    dupTransportUid(): string | null
    /**
     * Returns whether save replies in the folder of the message
     * being replied to, instead of the Sent folder.
     * @returns whether save replies in the folder of the message being replied to
     */
    getRepliesToOriginFolder(): boolean
    /**
     * Returns a string identifying the preferred folder for sent messages.
     * The format of the identifier string is defined by the client application.
     * @returns an identifier for the preferred sent folder
     */
    getSentFolder(): string | null
    /**
     * Returns the #ESource:uid of the #ESource that describes the mail
     * transport to be used for outgoing messages.
     * @returns the mail transport #ESource:uid
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * function below.
 * @class 
 */
export class SourceMailSubmission extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSubmission

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceMailSubmission

    constructor(config?: SourceMailSubmission.ConstructorProperties) 
    _init(config?: SourceMailSubmission.ConstructorProperties): void
}

export module SourceMailTransport {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceBackend.ConstructorProperties {
    }

}

export interface SourceMailTransport {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailTransport

    __gtype__: number

    // Class property signals of EDataServer-1.2.EDataServer.SourceMailTransport

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class SourceMailTransport extends SourceBackend {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailTransport

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceMailTransport

    constructor(config?: SourceMailTransport.ConstructorProperties) 
    _init(config?: SourceMailTransport.ConstructorProperties): void
}

export module SourceMemoList {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceSelectable.ConstructorProperties {
    }

}

export interface SourceMemoList {

    // Own properties of EDataServer-1.2.EDataServer.SourceMemoList

    __gtype__: number

    // Class property signals of EDataServer-1.2.EDataServer.SourceMemoList

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class SourceMemoList extends SourceSelectable {

    // Own properties of EDataServer-1.2.EDataServer.SourceMemoList

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceMemoList

    constructor(config?: SourceMemoList.ConstructorProperties) 
    _init(config?: SourceMemoList.ConstructorProperties): void
}

export module SourceOffline {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceOffline

        staySynchronized?: boolean | null
    }

}

export interface SourceOffline {

    // Own properties of EDataServer-1.2.EDataServer.SourceOffline

    staySynchronized: boolean
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceOffline

    /**
     * Returns whether data from a remote server should be cached locally
     * for viewing while offline.  Backends are responsible for implementing
     * such caching.
     * @returns whether data should be cached for offline
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceOffline extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceOffline

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceOffline

    constructor(config?: SourceOffline.ConstructorProperties) 
    _init(config?: SourceOffline.ConstructorProperties): void
}

export module SourceOpenPGP {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceOpenPGP

        alwaysTrust?: boolean | null
        encryptByDefault?: boolean | null
        encryptToSelf?: boolean | null
        keyId?: string | null
        locateKeys?: boolean | null
        preferInline?: boolean | null
        signByDefault?: boolean | null
        signingAlgorithm?: string | null
    }

}

export interface SourceOpenPGP {

    // Own properties of EDataServer-1.2.EDataServer.SourceOpenPGP

    alwaysTrust: boolean
    encryptByDefault: boolean
    encryptToSelf: boolean
    keyId: string | null
    locateKeys: boolean
    preferInline: boolean
    signByDefault: boolean
    signingAlgorithm: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceOpenPGP

    /**
     * Thread-safe variation of e_source_openpgp_get_key_id().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceOpenPGP:key-id
     */
    dupKeyId(): string | null
    /**
     * Thread-safe variation of e_source_openpgp_get_signing_algorithm().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceOpenPGP:signing-algorithm
     */
    dupSigningAlgorithm(): string | null
    /**
     * Returns whether to skip key validation and assume that used keys are
     * always fully trusted.
     * @returns whether used keys are always fully trusted
     */
    getAlwaysTrust(): boolean
    /**
     * Returns whether to digitally encrypt outgoing messages by default using
     * OpenPGP-compliant software such as GNU Privacy Guard (GnuPG).
     * @returns whether to encrypt outgoing messages by default
     */
    getEncryptByDefault(): boolean
    /**
     * Returns whether to "encrypt-to-self" when sending encrypted messages.
     * @returns whether to "encrypt-to-self"
     */
    getEncryptToSelf(): boolean
    /**
     * Returns the OpenPGP key ID used to sign and encrypt messages.
     * @returns the key ID used to sign and encrypt messages
     */
    getKeyId(): string | null
    /**
     * Returns, whether gpg can locate keys using Web Key Directory (WKD) lookup
     * when encrypting messages. The default is %TRUE.
     * @returns whether gpg can locate keys using Web Key Directory (WKD) lookup    when encrypting messages.
     */
    getLocateKeys(): boolean
    /**
     * Returns whether to prefer inline sign/encrypt of the text/plain messages.
     * @returns whether to prefer inline sign/encrypt of the text/plain messages
     */
    getPreferInline(): boolean
    /**
     * Returns whether to digitally sign outgoing messages by default using
     * OpenPGP-compliant software such as GNU Privacy Guard (GnuPG).
     * @returns whether to sign outgoing messages by default
     */
    getSignByDefault(): boolean
    /**
     * Returns the name of the hash algorithm used to digitally sign outgoing
     * messages.
     * @returns the signing algorithm for outgoing messages
     */
    getSigningAlgorithm(): string | null
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
    setKeyId(keyId: string | null): void
    /**
     * Sets the `locate_keys` on the `extension,` which is used to instruct
     * gpg to locate keys using Web Key Directory (WKD) lookup when encrypting
     * messages.
     * @param locateKeys value to set
     */
    setLocateKeys(locateKeys: boolean): void
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
    setSigningAlgorithm(signingAlgorithm: string | null): void

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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceOpenPGP extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceOpenPGP

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceOpenPGP

    constructor(config?: SourceOpenPGP.ConstructorProperties) 
    _init(config?: SourceOpenPGP.ConstructorProperties): void
}

export module SourceProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

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

}

export interface SourceProxy {

    // Own properties of EDataServer-1.2.EDataServer.SourceProxy

    autoconfigUrl: string | null
    ftpHost: string | null
    ftpPort: number
    httpAuthPassword: string | null
    httpAuthUser: string | null
    httpHost: string | null
    httpPort: number
    httpUseAuth: boolean
    httpsHost: string | null
    httpsPort: number
    ignoreHosts: string[]
    method: ProxyMethod
    socksHost: string | null
    socksPort: number
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceProxy

    /**
     * Thread-safe variation of e_source_proxy_get_autoconfig_url().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceProxy:autoconfig-url
     */
    dupAutoconfigUrl(): string | null
    /**
     * Thread-safe variation of e_source_proxy_get_ftp_host().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceProxy:ftp-host
     */
    dupFtpHost(): string | null
    /**
     * Thread-safe variation of e_source_proxy_get_http_auth_password().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceProxy:http-auth-password
     */
    dupHttpAuthPassword(): string | null
    /**
     * Thread-safe variation of e_source_proxy_get_http_auth_user().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceProxy:http-auth-user
     */
    dupHttpAuthUser(): string | null
    /**
     * Thread-safe variation of e_source_proxy_get_http_host().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceProxy:http-host
     */
    dupHttpHost(): string | null
    /**
     * Threads-safe variation of e_source_proxy_get_https_host().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceProxy:https-host
     */
    dupHttpsHost(): string | null
    /**
     * Thread-safe variation of e_source_proxy_get_ignore_hosts().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string array should be freed with g_strfreev() when no
     * longer needed.
     * @returns a newly-allocated copy of          #ESourceProxy:ignore-hosts
     */
    dupIgnoreHosts(): string[]
    /**
     * Thread-safe variation of e_source_proxy_get_socks_host().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceProxy:socks-host
     */
    dupSocksHost(): string | null
    /**
     * Returns the URL that provides proxy configuration values.  When the
     * `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_AUTO,` this URL
     * is used to look up proxy information for all protocols.
     * @returns the autoconfiguration URL
     */
    getAutoconfigUrl(): string | null
    /**
     * Returns the machine name to proxy FTP through when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @returns FTP proxy host name
     */
    getFtpHost(): string | null
    /**
     * Returns the port on the machine defined by #ESourceProxy:ftp-host to proxy
     * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @returns FTP proxy port
     */
    getFtpPort(): number
    /**
     * Returns the password to pass as authentication when doing HTTP proxying
     * and #ESourceProxy:http-use-auth is %TRUE.
     * @returns HTTP proxy password
     */
    getHttpAuthPassword(): string | null
    /**
     * Returns the user name to pass as authentication when doing HTTP proxying
     * and #ESourceProxy:http-use-auth is %TRUE.
     * @returns HTTP proxy username
     */
    getHttpAuthUser(): string | null
    /**
     * Returns the machine name to proxy HTTP through when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @returns HTTP proxy host name
     */
    getHttpHost(): string | null
    /**
     * Returns the port on the machine defined by #ESourceProxy:http-host to proxy
     * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @returns HTTP proxy port
     */
    getHttpPort(): number
    /**
     * Returns whether the HTTP proxy server at #ESourceProxy:http-host and
     * #ESourceProxy:http-port requires authentication.
     * 
     * The username/password combo is defined by #ESourceProxy:http-auth-user
     * and #ESourceProxy:http-auth-password, but only applies when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @returns whether to authenticate HTTP proxy connections
     */
    getHttpUseAuth(): boolean
    /**
     * Returns the machine name to proxy secure HTTP through when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @returns secure HTTP proxy host name
     */
    getHttpsHost(): string | null
    /**
     * Returns the port on the machine defined by #ESourceProxy:https-host to proxy
     * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @returns secure HTTP proxy port
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
     * @returns a %NULL-terminated string array of hosts
     */
    getIgnoreHosts(): string[]
    /**
     * Returns the proxy configuration method for `extension`.
     * 
     * The proxy configuration method determines the behavior of
     * e_source_proxy_lookup().
     * @returns the proxy configuration method
     */
    getMethod(): ProxyMethod
    /**
     * Returns the machine name to use as a SOCKS proxy when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @returns SOCKS proxy host name
     */
    getSocksHost(): string | null
    /**
     * Returns the port on the machine defined by #ESourceProxy:socks-host to proxy
     * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @returns SOCKS proxy port
     */
    getSocksPort(): number
    /**
     * Sets the URL that provides proxy configuration values.  When the
     * `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_AUTO,` this URL
     * is used to look up proxy information for all protocols.
     * @param autoconfigUrl an autoconfiguration URL
     */
    setAutoconfigUrl(autoconfigUrl: string | null): void
    /**
     * Sets the machine name to proxy FTP through when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @param ftpHost FTP proxy host name
     */
    setFtpHost(ftpHost: string | null): void
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
    setHttpAuthPassword(httpAuthPassword: string | null): void
    /**
     * Sets the user name to pass as authentication when doing HTTP proxying
     * and #ESourceProxy:http-use-auth is %TRUE.
     * @param httpAuthUser HTTP proxy username
     */
    setHttpAuthUser(httpAuthUser: string | null): void
    /**
     * Sets the machine name to proxy HTTP through when `extension'`s
     * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
     * @param httpHost HTTP proxy host name
     */
    setHttpHost(httpHost: string | null): void
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
    setHttpsHost(httpsHost: string | null): void
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
    setIgnoreHosts(ignoreHosts: string | null): void
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
    setSocksHost(socksHost: string | null): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceProxy extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceProxy

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceProxy

    constructor(config?: SourceProxy.ConstructorProperties) 
    _init(config?: SourceProxy.ConstructorProperties): void
}

export module SourceRefresh {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceRefresh

        enabled?: boolean | null
        intervalMinutes?: number | null
    }

}

export interface SourceRefresh {

    // Own properties of EDataServer-1.2.EDataServer.SourceRefresh

    enabled: boolean
    intervalMinutes: number
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceRefresh

    /**
     * Returns whether to periodically fetch updates from a remote server.
     * 
     * The refresh interval is determined by the #ESourceRefresh:interval-minutes
     * property.
     * @returns whether periodic refresh is enabled
     */
    getEnabled(): boolean
    /**
     * Returns the interval for fetching updates from a remote server.
     * 
     * Note this value is only effective when the #ESourceRefresh:enabled
     * property is %TRUE.
     * @returns the interval in minutes
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceRefresh extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceRefresh

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceRefresh

    constructor(config?: SourceRefresh.ConstructorProperties) 
    _init(config?: SourceRefresh.ConstructorProperties): void
}

export module SourceRegistry {

    // Signal callback interfaces

    /**
     * Signal callback interface for `credentials-required`
     */
    export interface CredentialsRequiredSignalCallback {
        (source: Source, reason: SourceCredentialsReason, certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error): void
    }

    /**
     * Signal callback interface for `source-added`
     */
    export interface SourceAddedSignalCallback {
        (source: Source): void
    }

    /**
     * Signal callback interface for `source-changed`
     */
    export interface SourceChangedSignalCallback {
        (source: Source): void
    }

    /**
     * Signal callback interface for `source-disabled`
     */
    export interface SourceDisabledSignalCallback {
        (source: Source): void
    }

    /**
     * Signal callback interface for `source-enabled`
     */
    export interface SourceEnabledSignalCallback {
        (source: Source): void
    }

    /**
     * Signal callback interface for `source-removed`
     */
    export interface SourceRemovedSignalCallback {
        (source: Source): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

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

}

export interface SourceRegistry extends Gio.AsyncInitable, Gio.Initable {

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
    __gtype__: number

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
     * @returns whether @source is "effectively" enabled
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
     * @returns %TRUE on success, %FALSE on failure
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
     * @returns %TRUE on success, %FALSE on failure
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
     * @returns %TRUE on success, %FALSE on failure
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
     * @returns %TRUE on success, %FALSE on failure
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
     * @returns a unique display name for @source
     */
    dupUniqueDisplayName(source: Source, extensionName: string | null): string | null
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
     * @returns an #ESource, or %NULL if no match was found
     */
    findExtension(source: Source, extensionName: string | null): Source | null
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
     * 
     * ```
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
     * @param extensionName an extension name, or %NULL
     * @returns a sorted list of sources
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
     * 
     * ```
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
     * @param extensionName an extension name, or %NULL
     * @returns a sorted list of sources
     */
    listSources(extensionName: string | null): Source[]
    /**
     * Returns the built-in address book #ESource.
     * 
     * This #ESource is always present and makes for a safe fallback.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns the built-in address book #ESource
     */
    refBuiltinAddressBook(): Source
    /**
     * Returns the built-in calendar #ESource.
     * 
     * This #ESource is always present and makes for a safe fallback.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns the built-in calendar #ESource
     */
    refBuiltinCalendar(): Source
    /**
     * Returns the built-in mail account #ESource.
     * 
     * This #ESource is always present and makes for a safe fallback.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns the built-in mail account #ESource
     */
    refBuiltinMailAccount(): Source
    /**
     * Returns the built-in memo list #ESource.
     * 
     * This #ESource is always present and makes for a safe fallback.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns the built-in memo list #ESource
     */
    refBuiltinMemoList(): Source
    /**
     * Returns the built-in proxy profile #ESource.
     * 
     * This #ESource is always present and makes for a safe fallback.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns the built-in proxy profile #ESource
     */
    refBuiltinProxy(): Source
    /**
     * Returns the built-in task list #ESource.
     * 
     * This #ESource is always present and makes for a safe fallback.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns the built-in task list #ESource
     */
    refBuiltinTaskList(): Source
    /**
     * Returns the #ESource most recently passed to
     * e_source_registry_set_default_address_book() either in this session
     * or a previous session, or else falls back to the built-in address book.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns the default address book #ESource
     */
    refDefaultAddressBook(): Source
    /**
     * Returns the #ESource most recently passed to
     * e_source_registry_set_default_calendar() either in this session
     * or a previous session, or else falls back to the built-in calendar.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns the default calendar #ESource
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
     * @returns the default #ESource based on @extension_name
     */
    refDefaultForExtensionName(extensionName: string | null): Source | null
    /**
     * Returns the #ESource most recently passed to
     * e_source_registry_set_default_mail_account() either in this session
     * or a previous session, or else falls back to the built-in mail account.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns the default mail account #ESource
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
     * @returns the default mail identity #ESource,    or %NULL
     */
    refDefaultMailIdentity(): Source | null
    /**
     * Returns the #ESource most recently passed to
     * e_source_registry_set_default_memo_list() either in this session
     * or a previous session, or else falls back to the built-in memo list.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns the default memo list #ESource
     */
    refDefaultMemoList(): Source
    /**
     * Returns the #ESource most recently passed to
     * e_source_registry_set_default_task_list() either in this session
     * or a previous session, or else falls back to the built-in task list.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns the default task list #ESource
     */
    refDefaultTaskList(): Source
    /**
     * Looks up an #ESource in `registry` by its unique identifier string.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @param uid a unique identifier string
     * @returns an #ESource, or %NULL if no match was found
     */
    refSource(uid: string | null): Source | null
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
    refreshBackend(sourceUid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_source_registry_refresh_backend().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns Whether succeeded
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
     * @returns Whether succeeded
     */
    refreshBackendSync(sourceUid: string | null, cancellable: Gio.Cancellable | null): boolean
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
    setDefaultForExtensionName(extensionName: string | null, defaultSource: Source | null): void
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

    // Own virtual methods of EDataServer-1.2.EDataServer.SourceRegistry

    credentialsRequired(source: Source, reason: SourceCredentialsReason, certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error): void
    sourceAdded(source: Source): void
    sourceChanged(source: Source): void
    sourceDisabled(source: Source): void
    sourceEnabled(source: Source): void
    sourceRemoved(source: Source): void

    // Own signals of EDataServer-1.2.EDataServer.SourceRegistry

    connect(sigName: "credentials-required", callback: SourceRegistry.CredentialsRequiredSignalCallback): number
    on(sigName: "credentials-required", callback: SourceRegistry.CredentialsRequiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "credentials-required", callback: SourceRegistry.CredentialsRequiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "credentials-required", callback: SourceRegistry.CredentialsRequiredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "credentials-required", reason: SourceCredentialsReason, certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error, ...args: any[]): void
    connect(sigName: "source-added", callback: SourceRegistry.SourceAddedSignalCallback): number
    on(sigName: "source-added", callback: SourceRegistry.SourceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-added", callback: SourceRegistry.SourceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-added", callback: SourceRegistry.SourceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-added", ...args: any[]): void
    connect(sigName: "source-changed", callback: SourceRegistry.SourceChangedSignalCallback): number
    on(sigName: "source-changed", callback: SourceRegistry.SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: SourceRegistry.SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: SourceRegistry.SourceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-changed", ...args: any[]): void
    connect(sigName: "source-disabled", callback: SourceRegistry.SourceDisabledSignalCallback): number
    on(sigName: "source-disabled", callback: SourceRegistry.SourceDisabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-disabled", callback: SourceRegistry.SourceDisabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-disabled", callback: SourceRegistry.SourceDisabledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-disabled", ...args: any[]): void
    connect(sigName: "source-enabled", callback: SourceRegistry.SourceEnabledSignalCallback): number
    on(sigName: "source-enabled", callback: SourceRegistry.SourceEnabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-enabled", callback: SourceRegistry.SourceEnabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-enabled", callback: SourceRegistry.SourceEnabledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-enabled", ...args: any[]): void
    connect(sigName: "source-removed", callback: SourceRegistry.SourceRemovedSignalCallback): number
    on(sigName: "source-removed", callback: SourceRegistry.SourceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-removed", callback: SourceRegistry.SourceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-removed", callback: SourceRegistry.SourceRemovedSignalCallback): NodeJS.EventEmitter
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
export class SourceRegistry extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistry

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceRegistry

    constructor(config?: SourceRegistry.ConstructorProperties) 
    /**
     * Finishes the operation started with e_source_registry_new_finish().
     * If an error occurs in connecting to the D-Bus service, the function
     * sets `error` and returns %NULL.
     * @constructor 
     * @param result a #GAsyncResult
     * @returns a new #ESourceRegistry, or %NULL on error
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
     * @returns a new #ESourceRegistry, or %NULL on error
     */
    static newSync(cancellable: Gio.Cancellable | null): SourceRegistry
    _init(config?: SourceRegistry.ConstructorProperties): void
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

export module SourceRegistryWatcher {

    // Signal callback interfaces

    /**
     * Signal callback interface for `appeared`
     */
    export interface AppearedSignalCallback {
        (source: Source): void
    }

    /**
     * Signal callback interface for `disappeared`
     */
    export interface DisappearedSignalCallback {
        (source: Source): void
    }

    /**
     * Signal callback interface for `filter`
     */
    export interface FilterSignalCallback {
        (source: Source): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

}

export interface SourceRegistryWatcher {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    /**
     * Optional extension name, to consider sources with only.
     * It can be %NULL, to check for all sources. This is
     * a complementary filter to #ESourceRegistryWatcher::filter
     * signal.
     */
    readonly extensionName: string | null
    /**
     * The #ESourceRegistry manages #ESource instances.
     */
    readonly registry: SourceRegistry
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    getExtensionName(): string | null
    /**
     * Returns the #ESourceRegistry passed to e_source_registry_watcher_new().
     * @returns an #ESourceRegistry
     */
    getRegistry(): SourceRegistry
    /**
     * Reclaims all available sources satisfying the #ESourceRegistryWatcher::filter
     * signal. It doesn't notify about disappeared sources, it notifies only
     * on those appeared.
     */
    reclaim(): void

    // Own virtual methods of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    appeared(source: Source): void
    disappeared(source: Source): void
    filter(source: Source): boolean

    // Own signals of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    connect(sigName: "appeared", callback: SourceRegistryWatcher.AppearedSignalCallback): number
    on(sigName: "appeared", callback: SourceRegistryWatcher.AppearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "appeared", callback: SourceRegistryWatcher.AppearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "appeared", callback: SourceRegistryWatcher.AppearedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "appeared", ...args: any[]): void
    connect(sigName: "disappeared", callback: SourceRegistryWatcher.DisappearedSignalCallback): number
    on(sigName: "disappeared", callback: SourceRegistryWatcher.DisappearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disappeared", callback: SourceRegistryWatcher.DisappearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disappeared", callback: SourceRegistryWatcher.DisappearedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disappeared", ...args: any[]): void
    connect(sigName: "filter", callback: SourceRegistryWatcher.FilterSignalCallback): number
    on(sigName: "filter", callback: SourceRegistryWatcher.FilterSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "filter", callback: SourceRegistryWatcher.FilterSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "filter", callback: SourceRegistryWatcher.FilterSignalCallback): NodeJS.EventEmitter
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
export class SourceRegistryWatcher extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceRegistryWatcher

    constructor(config?: SourceRegistryWatcher.ConstructorProperties) 
    /**
     * Creates a new #ESourceRegistryWatcher instance.
     * 
     * The `extension_name` can be used as a complementary filter
     * to #ESourceRegistryWatcher::filter signal.
     * @constructor 
     * @param registry an #ESourceRegistry
     * @param extensionName optional extension name to filter sources with, or %NULL
     * @returns an #ESourceRegistryWatcher
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
     * @returns an #ESourceRegistryWatcher
     */
    static new(registry: SourceRegistry, extensionName: string | null): SourceRegistryWatcher
    _init(config?: SourceRegistryWatcher.ConstructorProperties): void
}

export module SourceResource {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceResource

        identity?: string | null
    }

}

export interface SourceResource {

    // Own properties of EDataServer-1.2.EDataServer.SourceResource

    identity: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceResource

    /**
     * Thread-safe variation of e_source_resource_get_identity().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceResource:identity
     */
    dupIdentity(): string | null
    /**
     * Returns the server-assigned identity of the remote resource associated
     * with the #ESource to which `extension` belongs.
     * @returns the identity of a remote resource
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceResource extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceResource

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceResource

    constructor(config?: SourceResource.ConstructorProperties) 
    _init(config?: SourceResource.ConstructorProperties): void
}

export module SourceRevisionGuards {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceRevisionGuards

        enabled?: boolean | null
    }

}

export interface SourceRevisionGuards {

    // Own properties of EDataServer-1.2.EDataServer.SourceRevisionGuards

    enabled: boolean
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceRevisionGuards

    /**
     * Checks whether revision guards for the given #ESource are enabled.
     * @returns %TRUE if the revision guards are enabled.
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceRevisionGuards extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceRevisionGuards

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceRevisionGuards

    constructor(config?: SourceRevisionGuards.ConstructorProperties) 
    _init(config?: SourceRevisionGuards.ConstructorProperties): void
}

export module SourceSMIME {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceSMIME

        encryptByDefault?: boolean | null
        encryptToSelf?: boolean | null
        encryptionCertificate?: string | null
        signByDefault?: boolean | null
        signingAlgorithm?: string | null
        signingCertificate?: string | null
    }

}

export interface SourceSMIME {

    // Own properties of EDataServer-1.2.EDataServer.SourceSMIME

    encryptByDefault: boolean
    encryptToSelf: boolean
    encryptionCertificate: string | null
    signByDefault: boolean
    signingAlgorithm: string | null
    signingCertificate: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceSMIME

    /**
     * Thread-safe variation of e_source_smime_get_encryption_certificate().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceSMIME:encryption-certificate
     */
    dupEncryptionCertificate(): string | null
    /**
     * Thread-safe variation of e_source_smime_get_signing_algorithm().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceSMIME:signing-algorithm
     */
    dupSigningAlgorithm(): string | null
    /**
     * Thread-safe variation of e_source_smime_get_signing_certificate().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceSMIME:signing-certificate
     */
    dupSigningCertificate(): string | null
    /**
     * Returns whether to encrypt outgoing messages by default using S/MIME
     * software such as Mozilla Network Security Services (NSS).
     * @returns whether to encrypt outgoing messages by default
     */
    getEncryptByDefault(): boolean
    /**
     * Returns whether to "encrypt-to-self" when sending encrypted messages.
     * @returns whether to "encrypt-to-self"
     */
    getEncryptToSelf(): boolean
    /**
     * Returns the S/MIME certificate name used to encrypt messages.
     * @returns the certificate name used to encrypt messages
     */
    getEncryptionCertificate(): string | null
    /**
     * Returns whether to digitally sign outgoing messages by default using
     * S/MIME software such as Mozilla Network Security Services (NSS).
     * @returns whether to sign outgoing messages by default
     */
    getSignByDefault(): boolean
    /**
     * Returns the name of the hash algorithm used to digitally sign outgoing
     * messages.
     * @returns the signing algorithm for outgoing messages
     */
    getSigningAlgorithm(): string | null
    /**
     * Returns the S/MIME certificate name used to sign messages.
     * @returns the certificate name used to sign messages
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceSMIME extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceSMIME

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceSMIME

    constructor(config?: SourceSMIME.ConstructorProperties) 
    _init(config?: SourceSMIME.ConstructorProperties): void
}

export module SourceSecurity {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceSecurity

        method?: string | null
        secure?: boolean | null
    }

}

export interface SourceSecurity {

    // Own properties of EDataServer-1.2.EDataServer.SourceSecurity

    method: string | null
    secure: boolean
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceSecurity

    /**
     * Thread-safe variation of e_source_security_get_method().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceSecurity:method
     */
    dupMethod(): string | null
    /**
     * Returns the method used to establish a secure network connection to a
     * remote account.  There are no pre-defined method names; backends are
     * free to set this however they wish.  If a secure connection is not
     * desired, the convention is to set #ESourceSecurity:method to "none".
     * @returns the method used to establish a secure network connection
     */
    getMethod(): string | null
    /**
     * This is a convenience function which returns whether a secure network
     * connection is desired, regardless of the method used.  This relies on
     * the convention of setting #ESourceSecurity:method to "none" when a
     * secure network connection is <emphasis>not</emphasis> desired.
     * @returns whether a secure network connection is desired
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceSecurity extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceSecurity

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceSecurity

    constructor(config?: SourceSecurity.ConstructorProperties) 
    _init(config?: SourceSecurity.ConstructorProperties): void
}

export module SourceSelectable {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceBackend.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceSelectable

        color?: string | null
        order?: number | null
        selected?: boolean | null
    }

}

export interface SourceSelectable {

    // Own properties of EDataServer-1.2.EDataServer.SourceSelectable

    color: string | null
    order: number
    selected: boolean
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceSelectable

    /**
     * Thread-safe variation of e_source_selectable_get_color().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceSelectable:color,    or %NULL, when none is set
     */
    dupColor(): string | null
    /**
     * Returns the color specification for the #ESource to which `extension`
     * belongs.  A colored block is often displayed next to the data source's
     * display name in user interfaces.
     * @returns the color specification for the #ESource,    or %NULL, when none is set
     */
    getColor(): string | null
    /**
     * Returns the preferred sorting order for the #ESource
     * to which `extension` belongs. Default is 0.
     * @returns the preferred sorting order for the #ESource
     */
    getOrder(): number
    /**
     * Returns the selected state of the #ESource to which `extension` belongs.
     * The selected state is often represented as a checkbox next to the data
     * source's display name in user interfaces.
     * @returns the selected state for the #ESource
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class SourceSelectable extends SourceBackend {

    // Own properties of EDataServer-1.2.EDataServer.SourceSelectable

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceSelectable

    constructor(config?: SourceSelectable.ConstructorProperties) 
    _init(config?: SourceSelectable.ConstructorProperties): void
}

export module SourceTaskList {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceSelectable.ConstructorProperties {
    }

}

export interface SourceTaskList {

    // Own properties of EDataServer-1.2.EDataServer.SourceTaskList

    __gtype__: number

    // Class property signals of EDataServer-1.2.EDataServer.SourceTaskList

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class SourceTaskList extends SourceSelectable {

    // Own properties of EDataServer-1.2.EDataServer.SourceTaskList

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceTaskList

    constructor(config?: SourceTaskList.ConstructorProperties) 
    _init(config?: SourceTaskList.ConstructorProperties): void
}

export module SourceUoa {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceUoa

        accountId?: number | null
    }

}

export interface SourceUoa {

    // Own properties of EDataServer-1.2.EDataServer.SourceUoa

    accountId: number
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceUoa

    /**
     * Returns the numeric identifier of the Ubuntu Online Account associated
     * with the #ESource to which `extension` belongs.
     * @returns the associated Ubuntu Online Account ID
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceUoa extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceUoa

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceUoa

    constructor(config?: SourceUoa.ConstructorProperties) 
    _init(config?: SourceUoa.ConstructorProperties): void
}

export module SourceWeather {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceWeather

        location?: string | null
        units?: SourceWeatherUnits | null
    }

}

export interface SourceWeather {

    // Own properties of EDataServer-1.2.EDataServer.SourceWeather

    location: string | null
    units: SourceWeatherUnits
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceWeather

    dupLocation(): string | null
    getLocation(): string | null
    getUnits(): SourceWeatherUnits
    setLocation(location: string | null): void
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
}

export class SourceWeather extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceWeather

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceWeather

    constructor(config?: SourceWeather.ConstructorProperties) 
    _init(config?: SourceWeather.ConstructorProperties): void
}

export module SourceWebDAVNotes {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceWebDAVNotes

        defaultExt?: string | null
    }

}

export interface SourceWebDAVNotes {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebDAVNotes

    defaultExt: string | null
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceWebDAVNotes

    /**
     * Thread-safe variation of e_source_webdav_notes_get_default_ext().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceWebDAVNotes:default-ext,    or %NULL, when none is set
     */
    dupDefaultExt(): string | null
    /**
     * Returns the default file extension for new notes.
     * @returns the default file extension, or %NULL, when none is set
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceWebDAVNotes extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebDAVNotes

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceWebDAVNotes

    constructor(config?: SourceWebDAVNotes.ConstructorProperties) 
    _init(config?: SourceWebDAVNotes.ConstructorProperties): void
}

export module SourceWebdav {

    // Constructor properties interface

    export interface ConstructorProperties extends SourceExtension.ConstructorProperties {

        // Own constructor properties of EDataServer-1.2.EDataServer.SourceWebdav

        avoidIfmatch?: boolean | null
        calendarAutoSchedule?: boolean | null
        color?: string | null
        displayName?: string | null
        emailAddress?: string | null
        order?: number | null
        resourcePath?: string | null
        resourceQuery?: string | null
        sslTrust?: string | null
        uri?: GLib.Uri | null
    }

}

export interface SourceWebdav {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebdav

    avoidIfmatch: boolean
    calendarAutoSchedule: boolean
    color: string | null
    displayName: string | null
    emailAddress: string | null
    order: number
    resourcePath: string | null
    resourceQuery: string | null
    sslTrust: string | null
    uri: GLib.Uri
    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.SourceWebdav

    /**
     * Thread-safe variation of e_source_webdav_get_color().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceWebdav:color
     */
    dupColor(): string | null
    /**
     * Thread-safe variation of e_source_webdav_get_display_name().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ESourceWebdav:display-name
     */
    dupDisplayName(): string | null
    /**
     * Thread-safe variation of e_source_webdav_get_email_address().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns the newly-allocated copy of #ESourceWebdav:email-address
     */
    dupEmailAddress(): string | null
    /**
     * Thread-safe variation of e_source_webdav_get_resource_path().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns the newly-allocated copy of #ESourceWebdav:resource-path
     */
    dupResourcePath(): string | null
    /**
     * Thread-safe variation of e_source_webdav_get_resource_query().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns the newly-allocated copy of #ESourceWebdav:resource-query
     */
    dupResourceQuery(): string | null
    /**
     * Thread-safe variation of e_source_webdav_get_ssl_trust().
     * Use this function when accessing `extension` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns the newly-allocated copy of #ESourceWebdav:ssl-trust
     */
    dupSslTrust(): string | null
    /**
     * This is a convenience function which returns a newly-allocated
     * #GUri, its contents assembled from the #ESourceAuthentication
     * extension, the #ESourceSecurity extension, and `extension` itself.
     * Free the returned #GUri with g_uri_unref().
     * @returns a newly-allocated #GUri
     */
    dupUri(): GLib.Uri
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
     * @returns whether the WebDAV server is known to exhibit the bug
     */
    getAvoidIfmatch(): boolean
    /**
     * FIXME Document me!
     */
    getCalendarAutoSchedule(): boolean
    /**
     * Returns the last known color of a WebDAV resource as provided by the server.
     * @returns the color of the WebDAV resource, if any set on the server
     */
    getColor(): string | null
    /**
     * Returns the last known display name of a WebDAV resource, which may
     * differ from the #ESource:display-name property of the #ESource to which
     * `extension` belongs.
     * @returns the display name of the WebDAV resource
     */
    getDisplayName(): string | null
    /**
     * Returns the user's email address which can be passed to a CalDAV server
     * if the user wishes to receive scheduling messages.
     * @returns the user's email address
     */
    getEmailAddress(): string | null
    getOrder(): number
    /**
     * Returns the absolute path to a resource on a WebDAV server.
     * @returns the absolute path to a WebDAV resource
     */
    getResourcePath(): string | null
    /**
     * Returns the URI query required to access a resource on a WebDAV server.
     * 
     * This is typically used when the #ESourceWebdav:resource-path points not
     * to the resource itself but to a web program that generates the resource
     * content on-the-fly.  The #ESourceWebdav:resource-query holds the input
     * values for the program.
     * @returns the query to access a WebDAV resource
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
     * @returns an SSL/TLS certificate trust for the @extension
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
     * This is a convenience function which propagates the components of
     * `uri` to the #ESourceAuthentication extension, the #ESourceSecurity
     * extension, and `extension` itself.  (The "fragment" component of
     * `uri` is ignored.)
     * @param uri a #GUri
     */
    setUri(uri: GLib.Uri): void
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
    updateSslTrust(host: string | null, cert: Gio.TlsCertificate, response: TrustPromptResponse): void
    /**
     * Verifies SSL/TLS trust for the given `host` and `cert,` as previously stored in the `extension`
     * with e_source_webdav_update_ssl_trust().
     * @param host a host name to store the certificate for
     * @param cert the invalid certificate of the connection over which `host` is about        to be sent
     * @param certErrors a bit-or of #GTlsCertificateFlags describing the reason   for the `cert` to be considered invalid
     */
    verifySslTrust(host: string | null, cert: Gio.TlsCertificate, certErrors: Gio.TlsCertificateFlags): TrustPromptResponse

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
    connect(sigName: "notify::ssl-trust", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-trust", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-trust", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-trust", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-trust", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class SourceWebdav extends SourceExtension {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebdav

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.SourceWebdav

    constructor(config?: SourceWebdav.ConstructorProperties) 
    _init(config?: SourceWebdav.ConstructorProperties): void
}

export module WebDAVSession {

    // Constructor properties interface

    export interface ConstructorProperties extends SoupSession.ConstructorProperties {
    }

}

export interface WebDAVSession {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVSession

    __gtype__: number

    // Owm methods of EDataServer-1.2.EDataServer.WebDAVSession

    /**
     * Issues ACL request on the provided `uri,` or, in case it's %NULL, on the URI
     * defined in associated #ESource.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param xml the request itself, as an #EXmlDocument, the root element should be DAV:acl
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
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
     * @returns Whether succeeded.
     */
    copySync(sourceUri: string | null, destinationUri: string | null, depth: string | null, canOverwrite: boolean, cancellable: Gio.Cancellable | null): boolean
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
     * @returns Whether succeeded.
     */
    deleteSync(uri: string | null, depth: string | null, etag: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Converts possibly path-only `href` into a full URI under the `request_uri`.
     * When the `request_uri` is %NULL, the URI defined in associated #ESource is
     * used instead, taken from the #ESourceWebdav extension, if defined.
     * 
     * Free the returned pointer with g_free(), when no longer needed.
     * @param requestUri a #GUri to which the `href` belongs, or %NULL
     * @param href a possibly path-only href
     * @returns The @href as a full URI
     */
    ensureFullUri(requestUri: GLib.Uri | null, href: string | null): string | null
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
     * @returns Whether succeeded.
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
     * @returns Whether succeeded.
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
     * @returns Whether succeeded.
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
     * The optional `out_headers` contains response headers. Free it with soup_message_headers_free(),
     * when no longer needed.
     * 
     * To read large data use e_webdav_session_get_sync() instead.
     * @param uri URI of the resource to read
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getDataSync(uri: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHref */ string | null, /* outEtag */ string | null, /* outHeaders */ Soup.MessageHeaders, /* outBytes */ string | null, /* outLength */ number | null ]
    /**
     * Returns last DAV error code as returned by the server. Each recognized code
     * is enclosed in "[]" in the returned string, to be able to distinguish between
     * them, in case the server returned multiple codes.
     * 
     * The string is valid until the next request is executed.
     * @returns a DAV error from the last request,    or %NULL, when no error had been recognized.
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
     * @returns Whether succeeded.
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
     * @returns Whether succeeded.
     */
    getSupportedPrivilegeSetSync(uri: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPrivileges */ GLib.Node ]
    /**
     * Reads a resource identified by `uri` from the server and writes it
     * to the `stream`. The URI cannot reference a collection.
     * 
     * Free returned pointer of `out_href` and `out_etag,` if not %NULL, with g_free(),
     * when no longer needed.
     * 
     * The optional `out_headers` contains response headers. Free it with soup_message_headers_free(),
     * when no longer needed.
     * 
     * The e_webdav_session_get_data_sync() can be used to read the resource data
     * directly to memory.
     * @param uri URI of the resource to read
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getSync(uri: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHref */ string | null, /* outEtag */ string | null, /* outHeaders */ Soup.MessageHeaders, /* outStream */ Gio.OutputStream ]
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
     * @returns Whether succeeded.
     */
    getctagSync(uri: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCtag */ string | null ]
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
     * @returns Whether succeeded.
     */
    listSync(uri: string | null, depth: string | null, flags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outResources */ WebDAVResource[] ]
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
     * @returns Whether succeeded.
     */
    lockResourceSync(uri: string | null, lockScope: WebDAVLockScope, lockTimeout: number, owner: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outLockToken */ string | null ]
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
     * @returns Whether succeeded.
     */
    lockSync(uri: string | null, depth: string | null, lockTimeout: number, xml: XmlDocument, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outLockToken */ string | null, /* outXmlResponse */ libxml2.Doc | null ]
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
     * @returns Whether succeeded.
     */
    mkcalendarSync(uri: string | null, displayName: string | null, description: string | null, color: string | null, supports: number, cancellable: Gio.Cancellable | null): boolean
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
     * @returns Whether succeeded.
     */
    mkcolAddressbookSync(uri: string | null, displayName: string | null, description: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Creates a new generic collection identified by `uri` on the server.
     * To create specific collections use e_webdav_session_mkcalendar_sync()
     * or e_webdav_session_mkcol_addressbook_sync().
     * @param uri URI of the collection to create
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    mkcolSync(uri: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Moves a resource identified by `source_uri` to `destination_uri` on the server.
     * The `source_uri` can reference also collections.
     * @param sourceUri URI of the resource or collection to copy
     * @param destinationUri URI of the destination
     * @param canOverwrite whether can overwrite `destination_uri,` when it exists
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    moveSync(sourceUri: string | null, destinationUri: string | null, canOverwrite: boolean, cancellable: Gio.Cancellable | null): boolean
    newMessage(method: string | null, uri: string | null): Soup.Message
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
     * @returns Whether succeeded.
     */
    optionsSync(uri: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCapabilities */ GLib.HashTable, /* outAllows */ GLib.HashTable ]
    /**
     * Issues POST request on the provided `uri,` or, in case it's %NULL, on the URI
     * defined in associated #ESource.
     * 
     * The optional `in_headers` can contain additional headers to be added to the request.
     * These headers replace any existing in the request headers, without support for the list-values headers.
     * 
     * The optional `out_content_type` can be used to get content type of the response.
     * Free it with g_free(), when no longer needed.
     * 
     * The optional `out_headers` contains response headers. Free it with soup_message_headers_free(),
     * when no longer needed.
     * 
     * The optional `out_content` can be used to get actual result content. Free it
     * with g_byte_array_free(), when no longer needed.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param data data to post to the server
     * @param dataLength length of `data,` or -1, when `data` is NUL-terminated
     * @param inContentType a Content-Type of the `data,` or %NULL, to use application/xml
     * @param inHeaders additional #SoupMessageHeaders to be added to the request, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    postSync(uri: string | null, data: string | null, dataLength: number, inContentType: string | null, inHeaders: Soup.MessageHeaders | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContentType */ string | null, /* outHeaders */ Soup.MessageHeaders, /* outContent */ Uint8Array | null ]
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
     * @returns Whether succeeded. Note it can report success also when no matching    principal had been found.
     */
    principalPropertySearchSync(uri: string | null, applyToPrincipalCollectionSet: boolean, matchNsUri: string | null, matchProperty: string | null, matchValue: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPrincipals */ WebDAVResource[] ]
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
     * @returns Whether succeeded.
     */
    propfindSync(uri: string | null, depth: string | null, xml: XmlDocument | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Issues PROPPATCH request on the provided `uri,` or, in case it's %NULL, on the URI
     * defined in associated #ESource, with the `changes`. The order of requested changes
     * inside `xml` is significant, unlike on other places.
     * @param uri URI to issue the request for, or %NULL to read from #ESource
     * @param xml an #EXmlDocument with request changes, its root element should be DAV:propertyupdate
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
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
     * The optional `in_headers` can contain additional headers to be added to the request.
     * These headers replace any existing in the request headers, without support for the list-values headers.
     * 
     * The `out_href,` if provided, is filled with the resulting URI
     * of the written resource. It can be different from the `uri` when the server
     * redirected to a different location.
     * 
     * The `out_etag` contains ETag of the resource after it had been saved.
     * 
     * The optional `out_headers` contains response headers. Free it with soup_message_headers_free(),
     * when no longer needed.
     * 
     * To write large data use e_webdav_session_put_sync() instead.
     * @param uri URI of the resource to write
     * @param etag an ETag of the resource, if it's an existing resource, or %NULL
     * @param contentType Content-Type of the `bytes` to be written
     * @param inHeaders additional #SoupMessageHeaders to be added to the request, or %NULL
     * @param bytes actual bytes to be written
     * @param length how many bytes to write, or -1, when the `bytes` is NUL-terminated
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    putDataSync(uri: string | null, etag: string | null, contentType: string | null, inHeaders: Soup.MessageHeaders | null, bytes: string | null, length: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHref */ string | null, /* outEtag */ string | null, /* outHeaders */ Soup.MessageHeaders ]
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
     * The optional `in_headers` can contain additional headers to be added to the request.
     * These headers replace any existing in the request headers, without support for the list-values headers.
     * 
     * The `out_href,` if provided, is filled with the resulting URI
     * of the written resource. It can be different from the `uri` when the server
     * redirected to a different location.
     * 
     * The `out_etag` contains ETag of the resource after it had been saved.
     * 
     * The optional `out_headers` contains response headers. Free it with soup_message_headers_free(),
     * when no longer needed.
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
     * @param inHeaders additional #SoupMessageHeaders to be added to the request, or %NULL
     * @param stream a #GInputStream with data to be written
     * @param streamLength length of the `stream,` or -1 if unknown
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    putSync(uri: string | null, etag: string | null, contentType: string | null, inHeaders: Soup.MessageHeaders | null, stream: Gio.InputStream, streamLength: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHref */ string | null, /* outEtag */ string | null, /* outHeaders */ Soup.MessageHeaders ]
    /**
     * Refreshes existing lock `lock_token` for a resource identified by `uri,`
     * or, in case it's %NULL, on the URI defined in associated #ESource.
     * The `lock_token` is returned from e_webdav_session_lock_sync() and
     * the `uri` should be the same as that used with e_webdav_session_lock_sync().
     * @param uri URI to lock, or %NULL to read from #ESource
     * @param lockToken token of an existing lock
     * @param lockTimeout timeout for the lock, in seconds, on 0 to infinity
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    refreshLockSync(uri: string | null, lockToken: string | null, lockTimeout: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Tries to read detailed error information from `response_data,`
     * if not provided, then from `message'`s response_body. If the detailed
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
     * @param message a #SoupMessage
     * @param responseData received response data, or %NULL
     * @param ignoreMultistatus whether to ignore multistatus responses
     * @param prefix error message prefix, used when replacing, or %NULL
     * @returns Whether any detailed error had been recognized.
     */
    replaceWithDetailedError(message: Soup.Message, responseData: Uint8Array | null, ignoreMultistatus: boolean, prefix: string | null): boolean
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
     * @returns Whether succeeded.
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
     * @returns Whether succeeded.
     */
    setAclSync(uri: string | null, entries: WebDAVAccessControlEntry[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Traverses a CALDAV:mkcalendar-response response and calls `func` for each returned DAV:propstat.
     * 
     * The `message,` if provided, is used to verify that the response is an XML Content-Type.
     * It's used to get the request URI as well.
     * @param message an optional #SoupMessage corresponding to the response, or %NULL
     * @param xmlData a #GByteArray containing CALDAV:mkcalendar-response response
     * @returns Whether succeeded.
     */
    traverseMkcalendarResponse(message: Soup.Message | null, xmlData: Uint8Array): boolean
    /**
     * Traverses a DAV:mkcol-response response and calls `func` for each returned DAV:propstat.
     * 
     * The `message,` if provided, is used to verify that the response is an XML Content-Type.
     * It's used to get the request URI as well.
     * @param message an optional #SoupMessage corresponding to the response, or %NULL
     * @param xmlData a #GByteArray containing DAV:mkcol-response response
     * @returns Whether succeeded.
     */
    traverseMkcolResponse(message: Soup.Message | null, xmlData: Uint8Array): boolean
    /**
     * Traverses a DAV:multistatus response and calls `func` for each returned DAV:propstat.
     * 
     * The `message,` if provided, is used to verify that the response is a multi-status
     * and that the Content-Type is properly set. It's used to get a request URI as well.
     * @param message an optional #SoupMessage corresponding to the response, or %NULL
     * @param xmlData a #GByteArray containing DAV:multistatus response
     * @returns Whether succeeded.
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
     * @returns Whether succeeded.
     */
    unlockSync(uri: string | null, lockToken: string | null, cancellable: Gio.Cancellable | null): boolean
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
     * @returns Whether succeeded.
     */
    updatePropertiesSync(uri: string | null, changes: WebDAVPropertyChange[], cancellable: Gio.Cancellable | null): boolean

    // Class property signals of EDataServer-1.2.EDataServer.WebDAVSession

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::credentials", callback: (...args: any[]) => void): number
    on(sigName: "notify::credentials", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::credentials", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::credentials", ...args: any[]): void
    connect(sigName: "notify::force-http1", callback: (...args: any[]) => void): number
    on(sigName: "notify::force-http1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::force-http1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::force-http1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::force-http1", ...args: any[]): void
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
    connect(sigName: "notify::remote-connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-connectable", ...args: any[]): void
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
export class WebDAVSession extends SoupSession {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVSession

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.WebDAVSession

    constructor(config?: WebDAVSession.ConstructorProperties) 
    /**
     * Creates a new #EWebDAVSession associated with given `source`.
     * The #EWebDAVSession uses an #ESourceWebdav extension on certain
     * places when it's defined for the `source`.
     * @constructor 
     * @param source an #ESource
     * @returns a new #EWebDAVSession; free it with g_object_unref(),    when no longer needed.
     */
    constructor(source: Source) 
    /**
     * Creates a new #EWebDAVSession associated with given `source`.
     * The #EWebDAVSession uses an #ESourceWebdav extension on certain
     * places when it's defined for the `source`.
     * @constructor 
     * @param source an #ESource
     * @returns a new #EWebDAVSession; free it with g_object_unref(),    when no longer needed.
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
     * @returns a new #ESoupSession; free it with g_object_unref(),    when no longer needed.
     */
    static new(source: Source): SoupSession
    /**
     * Creates a #SoupSession with the default options.
     * @constructor 
     * @returns the new session.
     */
    static new(): Soup.Session
    _init(config?: WebDAVSession.ConstructorProperties): void
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
     * @returns whether the two href-s reference the same item
     */
    static utilItemHrefEqual(href1: string | null, href2: string | null): boolean
    /**
     * Dequotes `text,` if it's enclosed in double-quotes. The function
     * changes `text,` it doesn't allocate new string. The function does
     * nothing when the `text` is not enclosed in double-quotes.
     * @param text text to dequote
     * @returns possibly dequoted @text
     */
    static utilMaybeDequote(text: string | null): [ /* returnType */ string | null, /* text */ string | null ]
}

export module XmlDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface XmlDocument {

    // Own properties of EDataServer-1.2.EDataServer.XmlDocument

    __gtype__: number

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
    addAttribute(nsHref: string | null, name: string | null, value: string | null): void
    /**
     * Adds a new attribute with a double value to the current element.
     * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
     * added namespace with the same href from e_xml_document_add_namespaces() is picked,
     * or a new namespace with generated prefix is added.
     * @param nsHref optional namespace href for the new attribute, or %NULL
     * @param name name of the attribute
     * @param value double value of the attribute
     */
    addAttributeDouble(nsHref: string | null, name: string | null, value: number): void
    /**
     * Adds a new attribute with an integer value to the current element.
     * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
     * added namespace with the same href from e_xml_document_add_namespaces() is picked,
     * or a new namespace with generated prefix is added.
     * @param nsHref optional namespace href for the new attribute, or %NULL
     * @param name name of the attribute
     * @param value integer value of the attribute
     */
    addAttributeInt(nsHref: string | null, name: string | null, value: number): void
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
    addAttributeTime(nsHref: string | null, name: string | null, value: number): void
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
    addAttributeTimeIcal(nsHref: string | null, name: string | null, value: number): void
    /**
     * Adds an empty element, which is an element with no attribute and no value.
     * 
     * It's the same as calling e_xml_document_start_element() immediately
     * followed by e_xml_document_end_element().
     * @param nsHref optional namespace href for the new element, or %NULL
     * @param name name of the new element
     */
    addEmptyElement(nsHref: string | null, name: string | null): void
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
     * @returns Content of the @xml as newly allocated string.    Free it with g_free(), when no longer needed.
     */
    getContent(): [ /* returnType */ string | null, /* outLength */ number | null ]
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
    startElement(nsHref: string | null, name: string | null): void
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
    startTextElement(nsHref: string | null, name: string | null): void
    /**
     * Writes `value` of length `len,` encoded to base64, as content of the current element.
     * @param value value to write as the content
     * @param len length of `value`
     */
    writeBase64(value: string | null, len: number): void
    /**
     * Writes `value` of length `len` as content of the current element.
     * @param value value to write as the content
     * @param len length of `value`
     */
    writeBuffer(value: string | null, len: number): void
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
    writeString(value: string | null): void
    /**
     * Writes `value` in ISO 8601 format as content of the current element.
     * The format is "YYYY-MM-DDTHH:MM:SSZ".
     * @param value value to write as the content
     */
    writeTime(value: number): void

    // Class property signals of EDataServer-1.2.EDataServer.XmlDocument

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
export class XmlDocument extends GObject.Object {

    // Own properties of EDataServer-1.2.EDataServer.XmlDocument

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.XmlDocument

    constructor(config?: XmlDocument.ConstructorProperties) 
    /**
     * Creates a new #EXmlDocument with root element `root_element` and optionally
     * also with set default namespace `ns_href`.
     * @constructor 
     * @param nsHref default namespace href to use, or %NULL
     * @param rootElement root element name
     * @returns a new #EXmlDocument; free it with g_object_unref(),    when no longer needed.
     */
    constructor(nsHref: string | null, rootElement: string | null) 
    /**
     * Creates a new #EXmlDocument with root element `root_element` and optionally
     * also with set default namespace `ns_href`.
     * @constructor 
     * @param nsHref default namespace href to use, or %NULL
     * @param rootElement root element name
     * @returns a new #EXmlDocument; free it with g_object_unref(),    when no longer needed.
     */
    static new(nsHref: string | null, rootElement: string | null): XmlDocument
    _init(config?: XmlDocument.ConstructorProperties): void
}

export interface AsyncClosure {
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
export class AsyncClosure {

    // Own properties of EDataServer-1.2.EDataServer.AsyncClosure

    static name: string
}

export interface ClientClass {

    // Own fields of EDataServer-1.2.EDataServer.ClientClass

    unwrapDbusError: (client: Client, dbusError: GLib.Error) => void
    retrieveCapabilities: (client: Client, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    retrieveCapabilitiesFinish: (client: Client, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* capabilities */ string | null ]
    retrieveCapabilitiesSync: (client: Client, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* capabilities */ string | null ]
    getBackendProperty: (client: Client, propName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    getBackendPropertyFinish: (client: Client, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* propValue */ string | null ]
    getBackendPropertySync: (client: Client, propName: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* propValue */ string | null ]
    setBackendProperty: (client: Client, propName: string | null, propValue: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    setBackendPropertyFinish: (client: Client, result: Gio.AsyncResult) => boolean
    setBackendPropertySync: (client: Client, propName: string | null, propValue: string | null, cancellable: Gio.Cancellable | null) => boolean
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
    backendError: (client: Client, errorMsg: string | null) => void
    backendDied: (client: Client) => void
    backendPropertyChanged: (client: Client, propName: string | null, propValue: string | null) => void
}

export abstract class ClientClass {

    // Own properties of EDataServer-1.2.EDataServer.ClientClass

    static name: string
}

export interface ClientErrorsList {
}

export class ClientErrorsList {

    // Own properties of EDataServer-1.2.EDataServer.ClientErrorsList

    static name: string
}

export interface ClientPrivate {
}

export class ClientPrivate {

    // Own properties of EDataServer-1.2.EDataServer.ClientPrivate

    static name: string
}

export interface Collator {

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
     * @returns %TRUE on success, otherwise if %FALSE is returned then @error will be set.
     */
    collate(strA: string | null, strB: string | null): [ /* returnType */ boolean, /* result */ number ]
    /**
     * Generates a collation key for `str,` the result of comparing
     * two collation keys with strcmp() will be the same result
     * of calling e_collator_collate() on the same original strings.
     * 
     * This function will first ensure that `str` is valid UTF-8 encoded.
     * @param str The string to generate a collation key for
     * @returns A collation key for @str, or    %NULL on failure with @error set.
     */
    generateKey(str: string | null): string | null
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
     * @returns A sort key for the given index
     */
    generateKeyForIndex(index: number): string | null
    /**
     * Checks which index, as determined by e_collator_get_index_labels(),
     * that `str` should sort under.
     * @param str A string
     * @returns The alphabetic index under which @str would sort
     */
    getIndex(str: string | null): number
    /**
     * Fetches the displayable labels and index positions for the active alphabet.
     * @returns    The array of displayable labels for each index in the active alphabet(s).
     */
    getIndexLabels(): [ /* returnType */ string[], /* nLabels */ number, /* underflow */ number, /* inflow */ number, /* overflow */ number ]
    /**
     * Increases the reference count of `collator`.
     * @returns @collator
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
export class Collator {

    // Own properties of EDataServer-1.2.EDataServer.Collator

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.Collator

    /**
     * Creates a new #ECollator for the given `locale,`
     * the returned collator should be freed with e_collator_unref().
     * @constructor 
     * @param locale The locale under which to sort
     * @returns A newly created #ECollator.
     */
    constructor(locale: string | null) 
    /**
     * Creates a new #ECollator for the given `locale,`
     * the returned collator should be freed with e_collator_unref().
     * @constructor 
     * @param locale The locale under which to sort
     * @returns A newly created #ECollator.
     */
    static new(locale: string | null): Collator
    /**
     * Creates a new #ECollator for the given `locale,`
     * the returned collator should be freed with e_collator_unref().
     * 
     * In addition, this also reliably interprets the country
     * code from the `locale` string and stores it to `country_code`.
     * @constructor 
     * @param locale The locale under which to sort
     * @returns A newly created #ECollator.
     */
    static newInterpretCountry(locale: string | null): Collator
    static errorQuark(): GLib.Quark
}

export interface ExtensibleInterface {

    // Own fields of EDataServer-1.2.EDataServer.ExtensibleInterface

    parentInterface: GObject.TypeInterface
}

export abstract class ExtensibleInterface {

    // Own properties of EDataServer-1.2.EDataServer.ExtensibleInterface

    static name: string
}

export interface ExtensionClass {

    // Own fields of EDataServer-1.2.EDataServer.ExtensionClass

    parentClass: GObject.ObjectClass
    extensibleType: GObject.GType
}

export abstract class ExtensionClass {

    // Own properties of EDataServer-1.2.EDataServer.ExtensionClass

    static name: string
}

export interface ExtensionPrivate {
}

export class ExtensionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.ExtensionPrivate

    static name: string
}

export interface Flag {
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @record 
 */
export class Flag {

    // Own properties of EDataServer-1.2.EDataServer.Flag

    static name: string
}

export interface FreeFormExpSymbol {

    // Own fields of EDataServer-1.2.EDataServer.FreeFormExpSymbol

    names: string | null
    hint: string | null
    buildSexp: FreeFormExpBuildSexpFunc
}

export class FreeFormExpSymbol {

    // Own properties of EDataServer-1.2.EDataServer.FreeFormExpSymbol

    static name: string
}

export interface GDataQuery {

    // Owm methods of EDataServer-1.2.EDataServer.GDataQuery

    /**
     * Gets current value of the completed max property, as a Unix
     * date/time. When not set, returns -1. The optional `out_exists`
     * can be used to see whether the property is set.
     * @returns the set value, or -1
     */
    getCompletedMax(): [ /* returnType */ number, /* outExists */ boolean ]
    /**
     * Gets current value of the completed min property, as a Unix
     * date/time. When not set, returns -1. The optional `out_exists`
     * can be used to see whether the property is set.
     * @returns the set value, or -1
     */
    getCompletedMin(): [ /* returnType */ number, /* outExists */ boolean ]
    /**
     * Gets current value of the due max property, as a Unix
     * date/time. When not set, returns -1. The optional `out_exists`
     * can be used to see whether the property is set.
     * @returns the set value, or -1
     */
    getDueMax(): [ /* returnType */ number, /* outExists */ boolean ]
    /**
     * Gets current value of the due min property, as a Unix
     * date/time. When not set, returns -1. The optional `out_exists`
     * can be used to see whether the property is set.
     * @returns the set value, or -1
     */
    getDueMin(): [ /* returnType */ number, /* outExists */ boolean ]
    /**
     * Gets current value of the max results property.
     * When not set, returns 0. The optional `out_exists`
     * can be used to see whether the property is set.
     * @returns the set value, or 0
     */
    getMaxResults(): [ /* returnType */ number, /* outExists */ boolean ]
    /**
     * Gets current value of the show completed property. When not set,
     * returns %FALSE. The optional `out_exists` can be used to see whether
     * the property is set.
     * @returns the set value, or %FALSE
     */
    getShowCompleted(): [ /* returnType */ boolean, /* outExists */ boolean ]
    /**
     * Gets current value of the show deleted property. When not set,
     * returns %FALSE. The optional `out_exists` can be used to see whether
     * the property is set.
     * @returns the set value, or %FALSE
     */
    getShowDeleted(): [ /* returnType */ boolean, /* outExists */ boolean ]
    /**
     * Gets current value of the show hidden property. When not set,
     * returns %FALSE. The optional `out_exists` can be used to see whether
     * the property is set.
     * @returns the set value, or %FALSE
     */
    getShowHidden(): [ /* returnType */ boolean, /* outExists */ boolean ]
    /**
     * Gets current value of the updated min property, as a Unix
     * date/time. When not set, returns -1. The optional `out_exists`
     * can be used to see whether the property is set.
     * @returns the set value, or -1
     */
    getUpdatedMin(): [ /* returnType */ number, /* outExists */ boolean ]
    /**
     * Increases the reference count of the `self`.
     * The added reference shuld be removed with e_gdata_query_unref().
     * @returns the @self
     */
    ref(): GDataQuery
    /**
     * Sets upper bound for a task's completion date, as a Unix date/time, to filter by.
     * The default is not to filter by completion date.
     * 
     * This can be used for Task object query only.
     * @param value a value to set, as a Unix date/time
     */
    setCompletedMax(value: number): void
    /**
     * Sets lower bound for a task's completion date, as a Unix date/time, to filter by.
     * The default is not to filter by completion date.
     * 
     * This can be used for Task object query only.
     * @param value a value to set, as a Unix date/time
     */
    setCompletedMin(value: number): void
    /**
     * Sets upper bound for a task's due date, as a Unix date/time, to filter by.
     * The default is not to filter by due date.
     * 
     * This can be used for Task object query only.
     * @param value a value to set, as a Unix date/time
     */
    setDueMax(value: number): void
    /**
     * Sets lower bound for a task's due date, as a Unix date/time, to filter by.
     * The default is not to filter by due date.
     * 
     * This can be used for Task object query only.
     * @param value a value to set, as a Unix date/time
     */
    setDueMin(value: number): void
    /**
     * Sets max results to be returned in one call.
     * 
     * This can be used for any object query.
     * @param value a value to set
     */
    setMaxResults(value: number): void
    /**
     * Sets a flag indicating whether completed tasks are returned in the result.
     * The default is True. Note that show hidden should also be True to show
     * tasks completed in first party clients, such as the web UI and Google's
     * mobile apps.
     * 
     * This can be used for Task object query only.
     * @param value a value to set
     */
    setShowCompleted(value: boolean): void
    /**
     * Sets a flag indicating whether deleted tasks are returned in the result.
     * The default is False.
     * 
     * This can be used for Task object query only.
     * @param value a value to set
     */
    setShowDeleted(value: boolean): void
    /**
     * Sets a flag indicating whether hidden tasks are returned in the result.
     * The default is False.
     * 
     * This can be used for Task object query only.
     * @param value a value to set
     */
    setShowHidden(value: boolean): void
    /**
     * Sets lower bound for a task's last modification time, as a Unix date/time,
     * to filter by. The default is not to filter by the last modification time.
     * 
     * This can be used for Task object query only.
     * @param value a value to set, as a Unix date/time
     */
    setUpdatedMin(value: number): void
    /**
     * Converts the `self` into a string, which can be used as a URI query. The returned
     * string should be freed with g_free(), when no longer needed.
     * @returns the @self converted into a string, or %NULL,    when the @self doesn't have set any parameter.
     */
    toString(): string | null
    /**
     * Decreases the reference count of the `self`. When the reference count
     * reaches 0, the `self` is freed.
     */
    unref(): void
}

export class GDataQuery {

    // Own properties of EDataServer-1.2.EDataServer.GDataQuery

    static name: string

    // Constructors of EDataServer-1.2.EDataServer.GDataQuery

    /**
     * Creates a new #EGDataQuery. Free it with e_gdata_query_unref(),
     * when no longer needed.
     * @constructor 
     * @returns a new #EGDataQuery
     */
    constructor() 
    /**
     * Creates a new #EGDataQuery. Free it with e_gdata_query_unref(),
     * when no longer needed.
     * @constructor 
     * @returns a new #EGDataQuery
     */
    static new(): GDataQuery
}

export interface GDataSessionClass {

    // Own fields of EDataServer-1.2.EDataServer.GDataSessionClass

    parentClass: SoupSessionClass
    reserved: any[]
}

export abstract class GDataSessionClass {

    // Own properties of EDataServer-1.2.EDataServer.GDataSessionClass

    static name: string
}

export interface GDataSessionPrivate {
}

export class GDataSessionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.GDataSessionPrivate

    static name: string
}

export interface MemChunk {
}

export class MemChunk {

    // Own properties of EDataServer-1.2.EDataServer.MemChunk

    static name: string
}

export interface ModuleClass {

    // Own fields of EDataServer-1.2.EDataServer.ModuleClass

    parentClass: GObject.TypeModuleClass
}

export abstract class ModuleClass {

    // Own properties of EDataServer-1.2.EDataServer.ModuleClass

    static name: string
}

export interface ModulePrivate {
}

export class ModulePrivate {

    // Own properties of EDataServer-1.2.EDataServer.ModulePrivate

    static name: string
}

export interface NamedParameters {

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
    /**
     * Compares the two parameters objects and returns whether they equal.
     * Note a %NULL and empty parameters are also considered equal.
     * @param parameters2 the second #ENamedParameters
     * @returns whether the two parameters are equal
     */
    equal(parameters2: NamedParameters): boolean
    exists(name: string | null): boolean
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
     * @returns value of a parameter named @name, or %NULL.
     */
    get(name: string | null): string | null
    getName(index: number): string | null
    /**
     * Creates a new instance of an #ENamedParameters, with initial content
     * being taken from `parameters`. This should be freed with e_named_parameters_free(),
     * when no longer needed. Names are compared case insensitively.
     * 
     * The structure is not thread safe, if the caller requires thread safety,
     * then it should provide it on its own.
     * @returns newly allocated #ENamedParameters
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
    set(name: string | null, value: string | null): void
    /**
     * Compares current value of parameter named `name` with given `value`
     * and returns whether they are equal, either case sensitively or
     * insensitively, based on `case_sensitively` argument. Function
     * returns %FALSE, if no such parameter exists.
     * @param name name of a parameter to test
     * @param value value to test
     * @param caseSensitively whether to compare case sensitively
     * @returns Whether parameter of given name has stored value of given value.
     */
    test(name: string | null, value: string | null, caseSensitively: boolean): boolean
    toString(): string | null
    toStrv(): string[]
}

export class NamedParameters {

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
     * @returns newly allocated #ENamedParameters
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
     * @returns newly allocated #ENamedParameters
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
     * @returns newly allocated #ENamedParameters
     */
    static newString(str: string | null): NamedParameters
    /**
     * Creates a new instance of an #ENamedParameters, with initial content
     * being taken from `strv`. This should be freed with e_named_parameters_free(),
     * when no longer needed. Names are compared case insensitively.
     * 
     * The structure is not thread safe, if the caller requires thread safety,
     * then it should provide it on its own.
     * @constructor 
     * @param strv NULL-terminated string array to be used as a content of a newly     created #ENamedParameters
     * @returns newly allocated #ENamedParameters
     */
    static newStrv(strv: string | null): NamedParameters
}

export interface NetworkMonitorClass {

    // Own fields of EDataServer-1.2.EDataServer.NetworkMonitorClass

    parentClass: GObject.ObjectClass
}

export abstract class NetworkMonitorClass {

    // Own properties of EDataServer-1.2.EDataServer.NetworkMonitorClass

    static name: string
}

export interface NetworkMonitorPrivate {
}

export class NetworkMonitorPrivate {

    // Own properties of EDataServer-1.2.EDataServer.NetworkMonitorPrivate

    static name: string
}

export interface OAuth2ServiceBaseClass {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceBaseClass

    parentClass: ExtensionClass
}

export abstract class OAuth2ServiceBaseClass {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceBaseClass

    static name: string
}

export interface OAuth2ServiceGoogleClass {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceGoogleClass

    parentClass: OAuth2ServiceBaseClass
}

export abstract class OAuth2ServiceGoogleClass {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceGoogleClass

    static name: string
}

export interface OAuth2ServiceInterface {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceInterface

    parentInterface: GObject.TypeInterface
    canProcess: (service: OAuth2Service, source: Source) => boolean
    guessCanProcess: (service: OAuth2Service, protocol: string | null, hostname: string | null) => boolean
    getFlags: (service: OAuth2Service) => number
    getName: (service: OAuth2Service) => string | null
    getDisplayName: (service: OAuth2Service) => string | null
    getClientId: (service: OAuth2Service, source: Source) => string | null
    getClientSecret: (service: OAuth2Service, source: Source) => string | null
    getAuthenticationUri: (service: OAuth2Service, source: Source) => string | null
    getRefreshUri: (service: OAuth2Service, source: Source) => string | null
    getRedirectUri: (service: OAuth2Service, source: Source) => string | null
    prepareAuthenticationUriQuery: (service: OAuth2Service, source: Source, uriQuery: GLib.HashTable) => void
    getAuthenticationPolicy: (service: OAuth2Service, source: Source, uri: string | null) => OAuth2ServiceNavigationPolicy
    extractAuthorizationCode: (service: OAuth2Service, source: Source, pageTitle: string | null, pageUri: string | null, pageContent: string | null) => [ /* returnType */ boolean, /* outAuthorizationCode */ string | null ]
    prepareGetTokenForm: (service: OAuth2Service, source: Source, authorizationCode: string | null, form: GLib.HashTable) => void
    prepareGetTokenMessage: (service: OAuth2Service, source: Source, message: Soup.Message) => void
    prepareRefreshTokenForm: (service: OAuth2Service, source: Source, refreshToken: string | null, form: GLib.HashTable) => void
    prepareRefreshTokenMessage: (service: OAuth2Service, source: Source, message: Soup.Message) => void
    extractErrorMessage: (service: OAuth2Service, source: Source, pageTitle: string | null, pageUri: string | null, pageContent: string | null) => [ /* returnType */ boolean, /* outErrorMessage */ string | null ]
    reserved: any[]
}

export abstract class OAuth2ServiceInterface {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceInterface

    static name: string
}

export interface OAuth2ServiceOutlookClass {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceOutlookClass

    parentClass: OAuth2ServiceBaseClass
}

export abstract class OAuth2ServiceOutlookClass {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceOutlookClass

    static name: string
}

export interface OAuth2ServiceYahooClass {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServiceYahooClass

    parentClass: OAuth2ServiceBaseClass
}

export abstract class OAuth2ServiceYahooClass {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServiceYahooClass

    static name: string
}

export interface OAuth2ServicesClass {

    // Own fields of EDataServer-1.2.EDataServer.OAuth2ServicesClass

    parentClass: GObject.ObjectClass
    reserved: any[]
}

export abstract class OAuth2ServicesClass {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServicesClass

    static name: string
}

export interface OAuth2ServicesPrivate {
}

export class OAuth2ServicesPrivate {

    // Own properties of EDataServer-1.2.EDataServer.OAuth2ServicesPrivate

    static name: string
}

export interface OperationPool {

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
    push(opdata: any | null): void
    /**
     * Releases `opid` previously reserved by e_operation_pool_reserve_opid().
     * @param opid an operation ID
     */
    releaseOpid(opid: number): void
    /**
     * Reserves new operation ID, which is returned. This operation ID may
     * be released by e_operation_pool_release_opid() when the operation
     * is finished.
     * @returns a new operation ID
     */
    reserveOpid(): number
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @record 
 */
export class OperationPool {

    // Own properties of EDataServer-1.2.EDataServer.OperationPool

    static name: string
}

export interface SoupAuthBearerClass {

    // Own fields of EDataServer-1.2.EDataServer.SoupAuthBearerClass

    parentClass: Soup.AuthClass
}

export abstract class SoupAuthBearerClass {

    // Own properties of EDataServer-1.2.EDataServer.SoupAuthBearerClass

    static name: string
}

export interface SoupAuthBearerPrivate {
}

export class SoupAuthBearerPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SoupAuthBearerPrivate

    static name: string
}

export interface SoupSessionClass {

    // Own fields of EDataServer-1.2.EDataServer.SoupSessionClass

    parentClass: Soup.SessionClass
    reserved: any[]
}

export abstract class SoupSessionClass {

    // Own properties of EDataServer-1.2.EDataServer.SoupSessionClass

    static name: string
}

export interface SoupSessionPrivate {
}

export class SoupSessionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SoupSessionPrivate

    static name: string
}

export interface SourceAddressBookClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceAddressBookClass

    parentClass: SourceBackendClass
}

export abstract class SourceAddressBookClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceAddressBookClass

    static name: string
}

export interface SourceAddressBookPrivate {
}

export class SourceAddressBookPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceAddressBookPrivate

    static name: string
}

export interface SourceAlarmsClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceAlarmsClass

    parentClass: SourceExtensionClass
}

export abstract class SourceAlarmsClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceAlarmsClass

    static name: string
}

export interface SourceAlarmsPrivate {
}

export class SourceAlarmsPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceAlarmsPrivate

    static name: string
}

export interface SourceAuthenticationClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceAuthenticationClass

    parentClass: SourceExtensionClass
}

export abstract class SourceAuthenticationClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceAuthenticationClass

    static name: string
}

export interface SourceAuthenticationPrivate {
}

export class SourceAuthenticationPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceAuthenticationPrivate

    static name: string
}

export interface SourceAutocompleteClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceAutocompleteClass

    parentClass: SourceExtensionClass
}

export abstract class SourceAutocompleteClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutocompleteClass

    static name: string
}

export interface SourceAutocompletePrivate {
}

export class SourceAutocompletePrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutocompletePrivate

    static name: string
}

export interface SourceAutoconfigClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceAutoconfigClass

    parentClass: SourceExtensionClass
}

export abstract class SourceAutoconfigClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutoconfigClass

    static name: string
}

export interface SourceAutoconfigPrivate {
}

export class SourceAutoconfigPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceAutoconfigPrivate

    static name: string
}

export interface SourceBackendClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceBackendClass

    parentClass: SourceExtensionClass
}

export abstract class SourceBackendClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceBackendClass

    static name: string
}

export interface SourceBackendPrivate {
}

export class SourceBackendPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceBackendPrivate

    static name: string
}

export interface SourceCalendarClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceCalendarClass

    parentClass: SourceSelectableClass
}

export abstract class SourceCalendarClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceCalendarClass

    static name: string
}

export interface SourceCalendarPrivate {
}

export class SourceCalendarPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceCalendarPrivate

    static name: string
}

export interface SourceCamelClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceCamelClass

    parentClass: SourceExtensionClass
    settingsType: GObject.GType
}

export abstract class SourceCamelClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceCamelClass

    static name: string
}

export interface SourceCamelPrivate {
}

export class SourceCamelPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceCamelPrivate

    static name: string
}

export interface SourceClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceClass

    parentClass: GObject.ObjectClass
    changed: (source: Source) => void
    credentialsRequired: (source: Source, reason: SourceCredentialsReason, certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error) => void
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
    getOauth2AccessTokenSync: (source: Source, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number ]
    getOauth2AccessToken: (source: Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    getOauth2AccessTokenFinish: (source: Source, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number ]
    invokeCredentialsRequiredImpl: (source: Source, dbusSource: any | null, argReason: string | null, argCertificatePem: string | null, argCertificateErrors: string | null, argDbusErrorName: string | null, argDbusErrorMessage: string | null, cancellable: Gio.Cancellable | null) => boolean
    invokeAuthenticateImpl: (source: Source, dbusSource: any | null, argCredentials: string | null, cancellable: Gio.Cancellable | null) => boolean
    unsetLastCredentialsRequiredArgumentsImpl: (source: Source, cancellable: Gio.Cancellable | null) => boolean
    reserved: any[]
}

export abstract class SourceClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceClass

    static name: string
}

export interface SourceCollectionClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceCollectionClass

    parentClass: SourceBackendClass
}

export abstract class SourceCollectionClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceCollectionClass

    static name: string
}

export interface SourceCollectionPrivate {
}

export class SourceCollectionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceCollectionPrivate

    static name: string
}

export interface SourceContactsClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceContactsClass

    parentClass: SourceExtensionClass
}

export abstract class SourceContactsClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceContactsClass

    static name: string
}

export interface SourceContactsPrivate {
}

export class SourceContactsPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceContactsPrivate

    static name: string
}

export interface SourceCredentialsProviderClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderClass

    parentClass: GObject.ObjectClass
    refSource: (provider: SourceCredentialsProvider, uid: string | null) => Source | null
}

export abstract class SourceCredentialsProviderClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderClass

    static name: string
}

export interface SourceCredentialsProviderImplClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplClass

    parentClass: ExtensionClass
    canProcess: (providerImpl: SourceCredentialsProviderImpl, source: Source) => boolean
    canStore: (providerImpl: SourceCredentialsProviderImpl) => boolean
    canPrompt: (providerImpl: SourceCredentialsProviderImpl) => boolean
    lookupSync: (providerImpl: SourceCredentialsProviderImpl, source: Source, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    storeSync: (providerImpl: SourceCredentialsProviderImpl, source: Source, credentials: NamedParameters, permanently: boolean, cancellable: Gio.Cancellable | null) => boolean
    deleteSync: (providerImpl: SourceCredentialsProviderImpl, source: Source, cancellable: Gio.Cancellable | null) => boolean
}

export abstract class SourceCredentialsProviderImplClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplClass

    static name: string
}

export interface SourceCredentialsProviderImplOAuth2Class {

    // Own fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2Class

    parentClass: SourceCredentialsProviderImplClass
}

export abstract class SourceCredentialsProviderImplOAuth2Class {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2Class

    static name: string
}

export interface SourceCredentialsProviderImplOAuth2Private {
}

export class SourceCredentialsProviderImplOAuth2Private {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2Private

    static name: string
}

export interface SourceCredentialsProviderImplPasswordClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPasswordClass

    parentClass: SourceCredentialsProviderImplClass
}

export abstract class SourceCredentialsProviderImplPasswordClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPasswordClass

    static name: string
}

export interface SourceCredentialsProviderImplPasswordPrivate {
}

export class SourceCredentialsProviderImplPasswordPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPasswordPrivate

    static name: string
}

export interface SourceCredentialsProviderImplPrivate {
}

export class SourceCredentialsProviderImplPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPrivate

    static name: string
}

export interface SourceCredentialsProviderPrivate {
}

export class SourceCredentialsProviderPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceCredentialsProviderPrivate

    static name: string
}

export interface SourceExtensionClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceExtensionClass

    parentClass: GObject.ObjectClass
    name: string | null
}

export abstract class SourceExtensionClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceExtensionClass

    static name: string
}

export interface SourceExtensionPrivate {
}

export class SourceExtensionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceExtensionPrivate

    static name: string
}

export interface SourceGoaClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceGoaClass

    parentClass: SourceExtensionClass
}

export abstract class SourceGoaClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceGoaClass

    static name: string
}

export interface SourceGoaPrivate {
}

export class SourceGoaPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceGoaPrivate

    static name: string
}

export interface SourceLDAPClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceLDAPClass

    parentClass: SourceExtensionClass
}

export abstract class SourceLDAPClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceLDAPClass

    static name: string
}

export interface SourceLDAPPrivate {
}

export class SourceLDAPPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceLDAPPrivate

    static name: string
}

export interface SourceLocalClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceLocalClass

    parentClass: SourceExtensionClass
}

export abstract class SourceLocalClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceLocalClass

    static name: string
}

export interface SourceLocalPrivate {
}

export class SourceLocalPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceLocalPrivate

    static name: string
}

export interface SourceMDNClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMDNClass

    parentClass: SourceExtensionClass
}

export abstract class SourceMDNClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMDNClass

    static name: string
}

export interface SourceMDNPrivate {
}

export class SourceMDNPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMDNPrivate

    static name: string
}

export interface SourceMailAccountClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMailAccountClass

    parentClass: SourceBackendClass
}

export abstract class SourceMailAccountClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailAccountClass

    static name: string
}

export interface SourceMailAccountPrivate {
}

export class SourceMailAccountPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailAccountPrivate

    static name: string
}

export interface SourceMailCompositionClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMailCompositionClass

    parentClass: SourceExtensionClass
}

export abstract class SourceMailCompositionClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailCompositionClass

    static name: string
}

export interface SourceMailCompositionPrivate {
}

export class SourceMailCompositionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailCompositionPrivate

    static name: string
}

export interface SourceMailIdentityClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMailIdentityClass

    parentClass: SourceExtensionClass
}

export abstract class SourceMailIdentityClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailIdentityClass

    static name: string
}

export interface SourceMailIdentityPrivate {
}

export class SourceMailIdentityPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailIdentityPrivate

    static name: string
}

export interface SourceMailSignatureClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMailSignatureClass

    parentClass: SourceExtensionClass
}

export abstract class SourceMailSignatureClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSignatureClass

    static name: string
}

export interface SourceMailSignaturePrivate {
}

export class SourceMailSignaturePrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSignaturePrivate

    static name: string
}

export interface SourceMailSubmissionClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMailSubmissionClass

    parentClass: SourceExtensionClass
}

export abstract class SourceMailSubmissionClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSubmissionClass

    static name: string
}

export interface SourceMailSubmissionPrivate {
}

export class SourceMailSubmissionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailSubmissionPrivate

    static name: string
}

export interface SourceMailTransportClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMailTransportClass

    parentClass: SourceBackendClass
}

export abstract class SourceMailTransportClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailTransportClass

    static name: string
}

export interface SourceMailTransportPrivate {
}

export class SourceMailTransportPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMailTransportPrivate

    static name: string
}

export interface SourceMemoListClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceMemoListClass

    parentClass: SourceSelectableClass
}

export abstract class SourceMemoListClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceMemoListClass

    static name: string
}

export interface SourceMemoListPrivate {
}

export class SourceMemoListPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceMemoListPrivate

    static name: string
}

export interface SourceOfflineClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceOfflineClass

    parentClass: SourceExtensionClass
}

export abstract class SourceOfflineClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceOfflineClass

    static name: string
}

export interface SourceOfflinePrivate {
}

export class SourceOfflinePrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceOfflinePrivate

    static name: string
}

export interface SourceOpenPGPClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceOpenPGPClass

    parentClass: SourceExtensionClass
}

export abstract class SourceOpenPGPClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceOpenPGPClass

    static name: string
}

export interface SourceOpenPGPPrivate {
}

export class SourceOpenPGPPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceOpenPGPPrivate

    static name: string
}

export interface SourcePrivate {
}

export class SourcePrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourcePrivate

    static name: string
}

export interface SourceProxyClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceProxyClass

    parentClass: SourceExtensionClass
}

export abstract class SourceProxyClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceProxyClass

    static name: string
}

export interface SourceProxyPrivate {
}

export class SourceProxyPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceProxyPrivate

    static name: string
}

export interface SourceRefreshClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceRefreshClass

    parentClass: SourceExtensionClass
}

export abstract class SourceRefreshClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceRefreshClass

    static name: string
}

export interface SourceRefreshPrivate {
}

export class SourceRefreshPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceRefreshPrivate

    static name: string
}

export interface SourceRegistryClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceRegistryClass

    parentClass: GObject.ObjectClass
    sourceAdded: (registry: SourceRegistry, source: Source) => void
    sourceChanged: (registry: SourceRegistry, source: Source) => void
    sourceRemoved: (registry: SourceRegistry, source: Source) => void
    sourceEnabled: (registry: SourceRegistry, source: Source) => void
    sourceDisabled: (registry: SourceRegistry, source: Source) => void
    credentialsRequired: (registry: SourceRegistry, source: Source, reason: SourceCredentialsReason, certificatePem: string | null, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error) => void
}

export abstract class SourceRegistryClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistryClass

    static name: string
}

export interface SourceRegistryPrivate {
}

export class SourceRegistryPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistryPrivate

    static name: string
}

export interface SourceRegistryWatcherClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceRegistryWatcherClass

    parentClass: GObject.ObjectClass
    filter: (watcher: SourceRegistryWatcher, source: Source) => boolean
    appeared: (watcher: SourceRegistryWatcher, source: Source) => void
    disappeared: (watcher: SourceRegistryWatcher, source: Source) => void
}

export abstract class SourceRegistryWatcherClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistryWatcherClass

    static name: string
}

export interface SourceRegistryWatcherPrivate {
}

export class SourceRegistryWatcherPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceRegistryWatcherPrivate

    static name: string
}

export interface SourceResourceClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceResourceClass

    parentClass: SourceExtensionClass
}

export abstract class SourceResourceClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceResourceClass

    static name: string
}

export interface SourceResourcePrivate {
}

export class SourceResourcePrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceResourcePrivate

    static name: string
}

export interface SourceRevisionGuardsClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceRevisionGuardsClass

    parentClass: SourceExtensionClass
}

export abstract class SourceRevisionGuardsClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceRevisionGuardsClass

    static name: string
}

export interface SourceRevisionGuardsPrivate {
}

export class SourceRevisionGuardsPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceRevisionGuardsPrivate

    static name: string
}

export interface SourceSMIMEClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceSMIMEClass

    parentClass: SourceExtensionClass
}

export abstract class SourceSMIMEClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceSMIMEClass

    static name: string
}

export interface SourceSMIMEPrivate {
}

export class SourceSMIMEPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceSMIMEPrivate

    static name: string
}

export interface SourceSecurityClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceSecurityClass

    parentClass: SourceExtensionClass
}

export abstract class SourceSecurityClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceSecurityClass

    static name: string
}

export interface SourceSecurityPrivate {
}

export class SourceSecurityPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceSecurityPrivate

    static name: string
}

export interface SourceSelectableClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceSelectableClass

    parentClass: SourceBackendClass
}

export abstract class SourceSelectableClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceSelectableClass

    static name: string
}

export interface SourceSelectablePrivate {
}

export class SourceSelectablePrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceSelectablePrivate

    static name: string
}

export interface SourceTaskListClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceTaskListClass

    parentClass: SourceSelectableClass
}

export abstract class SourceTaskListClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceTaskListClass

    static name: string
}

export interface SourceTaskListPrivate {
}

export class SourceTaskListPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceTaskListPrivate

    static name: string
}

export interface SourceUoaClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceUoaClass

    parentClass: SourceExtensionClass
}

export abstract class SourceUoaClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceUoaClass

    static name: string
}

export interface SourceUoaPrivate {
}

export class SourceUoaPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceUoaPrivate

    static name: string
}

export interface SourceWeatherClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceWeatherClass

    parentClass: SourceExtensionClass
}

export abstract class SourceWeatherClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceWeatherClass

    static name: string
}

export interface SourceWeatherPrivate {
}

export class SourceWeatherPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceWeatherPrivate

    static name: string
}

export interface SourceWebDAVNotesClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceWebDAVNotesClass

    parentClass: SourceExtensionClass
}

export abstract class SourceWebDAVNotesClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebDAVNotesClass

    static name: string
}

export interface SourceWebDAVNotesPrivate {
}

export class SourceWebDAVNotesPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebDAVNotesPrivate

    static name: string
}

export interface SourceWebdavClass {

    // Own fields of EDataServer-1.2.EDataServer.SourceWebdavClass

    parentClass: SourceExtensionClass
}

export abstract class SourceWebdavClass {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebdavClass

    static name: string
}

export interface SourceWebdavPrivate {
}

export class SourceWebdavPrivate {

    // Own properties of EDataServer-1.2.EDataServer.SourceWebdavPrivate

    static name: string
}

export interface WebDAVAccessControlEntry {

    // Own fields of EDataServer-1.2.EDataServer.WebDAVAccessControlEntry

    principalKind: WebDAVACEPrincipalKind
    principalHref: string | null
    flags: number
    inheritedHref: string | null
    privileges: any[]

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

export class WebDAVAccessControlEntry {

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
     * @returns A newly created #EWebDAVAccessControlEntry, prefilled with    given values. Free it with e_webdav_access_control_entry_free(), when no longer needed.
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
     * @returns A newly created #EWebDAVAccessControlEntry, prefilled with    given values. Free it with e_webdav_access_control_entry_free(), when no longer needed.
     */
    static new(principalKind: WebDAVACEPrincipalKind, principalHref: string | null, flags: number, inheritedHref: string | null): WebDAVAccessControlEntry
    /**
     * Frees an #EWebDAVAccessControlEntry previously created with e_webdav_access_control_entry_new()
     * or e_webdav_access_control_entry_copy(). The function does nothing, if `ptr` is %NULL.
     * @param ptr an #EWebDAVAccessControlEntry
     */
    static free(ptr: any | null): void
}

export interface WebDAVDiscoveredSource {

    // Own fields of EDataServer-1.2.EDataServer.WebDAVDiscoveredSource

    href: string | null
    supports: number
    displayName: string | null
    description: string | null
    color: string | null
    order: number

    // Owm methods of EDataServer-1.2.EDataServer.WebDAVDiscoveredSource

    /**
     * Copies the given EWebDAVDiscoveredSource.
     * @returns a copy of @discovered_source
     */
    copy(): WebDAVDiscoveredSource
    /**
     * Frees the `discovered_source`. Function does nothing, when it's %NULL.
     */
    free(): void
}

export class WebDAVDiscoveredSource {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVDiscoveredSource

    static name: string
}

export interface WebDAVPrivilege {

    // Own fields of EDataServer-1.2.EDataServer.WebDAVPrivilege

    nsUri: string | null
    name: string | null
    description: string | null
    kind: WebDAVPrivilegeKind
    hint: WebDAVPrivilegeHint

    // Owm methods of EDataServer-1.2.EDataServer.WebDAVPrivilege

    copy(): WebDAVPrivilege | null
}

export class WebDAVPrivilege {

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
     * @returns A newly created #EWebDAVPrivilege, prefilled with    given values. Free it with e_webdav_privilege_free(), when no longer needed.
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
     * @returns A newly created #EWebDAVPrivilege, prefilled with    given values. Free it with e_webdav_privilege_free(), when no longer needed.
     */
    static new(nsUri: string | null, name: string | null, description: string | null, kind: WebDAVPrivilegeKind, hint: WebDAVPrivilegeHint): WebDAVPrivilege
    /**
     * Frees an #EWebDAVPrivilege previously created with e_webdav_privilege_new()
     * or e_webdav_privilege_copy(). The function does nothing, if `ptr` is %NULL.
     * @param ptr an #EWebDAVPrivilege
     */
    static free(ptr: any | null): void
}

export interface WebDAVPropertyChange {

    // Own fields of EDataServer-1.2.EDataServer.WebDAVPropertyChange

    kind: WebDAVPropertyChangeKind
    nsUri: string | null
    name: string | null
    value: string | null

    // Owm methods of EDataServer-1.2.EDataServer.WebDAVPropertyChange

    copy(): WebDAVPropertyChange | null
}

export class WebDAVPropertyChange {

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
     * @returns A new #EWebDAVPropertyChange. Free it with    e_webdav_property_change_free(), when no longer needed.
     */
    static newRemove(nsUri: string | null, name: string | null): WebDAVPropertyChange
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
     * @returns A new #EWebDAVPropertyChange. Free it with    e_webdav_property_change_free(), when no longer needed.
     */
    static newSet(nsUri: string | null, name: string | null, value: string | null): WebDAVPropertyChange
    /**
     * Frees an #EWebDAVPropertyChange previously created with e_webdav_property_change_new_set(),
     * e_webdav_property_change_new_remove() or or e_webdav_property_change_copy().
     * The function does nothing, if `ptr` is %NULL.
     * @param ptr an #EWebDAVPropertyChange
     */
    static free(ptr: any | null): void
}

export interface WebDAVResource {

    // Own fields of EDataServer-1.2.EDataServer.WebDAVResource

    kind: WebDAVResourceKind
    supports: number
    href: string | null
    etag: string | null
    displayName: string | null
    contentType: string | null
    contentLength: number
    creationDate: number
    lastModified: number
    description: string | null
    color: string | null
    order: number

    // Owm methods of EDataServer-1.2.EDataServer.WebDAVResource

    copy(): WebDAVResource | null
}

export class WebDAVResource {

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
     * @returns A newly created #EWebDAVResource, prefilled with    given values. Free it with e_webdav_resource_free(), when no longer needed.
     */
    constructor(kind: WebDAVResourceKind, supports: number, href: string | null, etag: string | null, displayName: string | null, contentType: string | null, contentLength: number, creationDate: number, lastModified: number, description: string | null, color: string | null, order: number) 
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
     * @returns A newly created #EWebDAVResource, prefilled with    given values. Free it with e_webdav_resource_free(), when no longer needed.
     */
    static new(kind: WebDAVResourceKind, supports: number, href: string | null, etag: string | null, displayName: string | null, contentType: string | null, contentLength: number, creationDate: number, lastModified: number, description: string | null, color: string | null, order: number): WebDAVResource
    /**
     * Frees an #EWebDAVResource previously created with e_webdav_resource_new()
     * or e_webdav_resource_copy(). The function does nothing, if `ptr` is %NULL.
     * @param ptr an #EWebDAVResource
     */
    static free(ptr: any | null): void
}

export interface WebDAVSessionClass {

    // Own fields of EDataServer-1.2.EDataServer.WebDAVSessionClass

    parentClass: SoupSessionClass
    reserved: any[]
}

export abstract class WebDAVSessionClass {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVSessionClass

    static name: string
}

export interface WebDAVSessionPrivate {
}

export class WebDAVSessionPrivate {

    // Own properties of EDataServer-1.2.EDataServer.WebDAVSessionPrivate

    static name: string
}

export interface XmlDocumentClass {

    // Own fields of EDataServer-1.2.EDataServer.XmlDocumentClass

    parentClass: GObject.ObjectClass
    reserved: any[]
}

export abstract class XmlDocumentClass {

    // Own properties of EDataServer-1.2.EDataServer.XmlDocumentClass

    static name: string
}

export interface XmlDocumentPrivate {
}

export class XmlDocumentPrivate {

    // Own properties of EDataServer-1.2.EDataServer.XmlDocumentPrivate

    static name: string
}

export interface XmlHash {
}

/**
 * A hash table representation of an XML file.
 * @record 
 */
export class XmlHash {

    // Own properties of EDataServer-1.2.EDataServer.XmlHash

    static name: string
}
