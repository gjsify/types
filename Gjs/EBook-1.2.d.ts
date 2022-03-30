/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EBook-1.2
 */

import type * as Gjs from './Gjs';
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
import type EBookContacts from './EBookContacts-1.2';

export namespace EBook {

/**
 * Error codes for the #E_BOOK_ERROR error
 */
enum BookStatus {
    OK,
    INVALID_ARG,
    BUSY,
    REPOSITORY_OFFLINE,
    NO_SUCH_BOOK,
    NO_SELF_CONTACT,
    SOURCE_NOT_LOADED,
    SOURCE_ALREADY_LOADED,
    PERMISSION_DENIED,
    CONTACT_NOT_FOUND,
    CONTACT_ID_ALREADY_EXISTS,
    PROTOCOL_NOT_SUPPORTED,
    CANCELLED,
    COULD_NOT_CANCEL,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_REQUIRED,
    TLS_NOT_AVAILABLE,
    DBUS_EXCEPTION,
    NO_SUCH_SOURCE,
    OFFLINE_UNAVAILABLE,
    OTHER_ERROR,
    INVALID_SERVER_VERSION,
    UNSUPPORTED_AUTHENTICATION_METHOD,
    NO_SPACE,
    NOT_SUPPORTED,
}
function book_error_quark(): GLib.Quark
function book_utils_get_recipient_certificates_sync(registry: EDataServer.SourceRegistry, only_clients: BookClient[] | null, flags: Camel.RecipientCertificateFlags, recipients: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_certificates */ string[] ]
interface BookClient_ConstructProps extends EDataServer.Client_ConstructProps {
}
class BookClient {
    /* Properties of EBook-1.2.EBook.BookClient */
    /**
     * The currently active locale for this addressbook.
     */
    readonly locale: string
    /* Properties of EDataServer-1.2.EDataServer.Client */
    /**
     * The capabilities of this client
     */
    readonly capabilities: object
    /**
     * The main loop context in which notifications for
     * this client will be delivered.
     */
    readonly main_context: GLib.MainContext
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
    readonly source: EDataServer.Source
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBook-1.2.EBook.BookClient */
    /**
     * Adds `contact` to `client`.
     * The call is finished by e_book_client_add_contact_finish()
     * from the `callback`.
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    add_contact(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_add_contact() and
     * sets `out_added_uid` to a UID of a newly added contact.
     * This string should be freed with g_free().
     * 
     * Note: This is not modifying original #EContact.
     * @param result a #GAsyncResult
     */
    add_contact_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_added_uid */ string | null ]
    /**
     * Adds `contact` to `client` and
     * sets `out_added_uid` to a UID of a newly added contact.
     * This string should be freed with g_free().
     * 
     * Note: This is not modifying original `contact,` thus if it's needed,
     * then use e_contact_set (contact, E_CONTACT_UID, new_uid).
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    add_contact_sync(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_added_uid */ string | null ]
    /**
     * Adds `contacts` to `client`.
     * The call is finished by e_book_client_add_contacts_finish()
     * from the `callback`.
     * @param contacts a #GSList of #EContact objects to add
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    add_contacts(contacts: EBookContacts.Contact[], opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_add_contacts() and
     * sets `out_added_uids` to the UIDs of newly added contacts if successful.
     * This #GSList should be freed with e_client_util_free_string_slist().
     * 
     * If any of the contacts cannot be inserted, all of the insertions will be
     * reverted and this method will return %FALSE.
     * 
     * Note: This is not modifying original #EContact objects.
     * @param result a #GAsyncResult
     */
    add_contacts_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_added_uids */ string[] | null ]
    /**
     * Adds `contacts` to `client` and
     * sets `out_added_uids` to the UIDs of newly added contacts if successful.
     * This #GSList should be freed with e_client_util_free_string_slist().
     * 
     * If any of the contacts cannot be inserted, all of the insertions will be
     * reverted and this method will return %FALSE.
     * 
     * Note: This is not modifying original `contacts,` thus if it's needed,
     * then use e_contact_set (contact, E_CONTACT_UID, new_uid).
     * @param contacts a #GSList of #EContact objects to add
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    add_contacts_sync(contacts: EBookContacts.Contact[], opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_added_uids */ string[] | null ]
    /**
     * Asynchronously checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_client_contains_email_finish() to get the result of the
     * operation.
     * @param email_address an email address
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    contains_email(email_address: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_contains_email().
     * @param result a #GAsyncResult
     */
    contains_email_finish(result: Gio.AsyncResult): boolean
    contains_email_sync(email_address: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Receive #EContact from the `client` for the gived `uid`.
     * The call is finished by e_book_client_get_contact_finish()
     * from the `callback`.
     * @param uid a unique string ID specifying the contact
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_contact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_get_contact().
     * If successful, then the `out_contact` is set to newly allocated
     * #EContact, which should be freed with g_object_unref().
     * @param result a #GAsyncResult
     */
    get_contact_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact | null ]
    /**
     * Receive #EContact from the `client` for the gived `uid`.
     * If successful, then the `out_contact` is set to newly allocated
     * #EContact, which should be freed with g_object_unref().
     * @param uid a unique string ID specifying the contact
     * @param cancellable a #GCancellable; can be %NULL
     */
    get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact ]
    /**
     * Query `client` with `sexp,` receiving a list of contacts which
     * matched. The call is finished by e_book_client_get_contacts_finish()
     * from the `callback`.
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_contacts(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_get_contacts().
     * If successful, then the `out_contacts` is set to newly allocated list of
     * #EContact(s), which should be freed with e_client_util_free_object_slist().
     * @param result a #GAsyncResult
     */
    get_contacts_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    /**
     * Query `client` with `sexp,` receiving a list of contacts which matched.
     * If successful, then the `out_contacts` is set to newly allocated #GSList of
     * #EContact(s), which should be freed with e_client_util_free_object_slist().
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     */
    get_contacts_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    /**
     * Query `client` with `sexp,` receiving a list of contacts UIDs which
     * matched. The call is finished by e_book_client_get_contacts_uids_finish()
     * from the `callback`.
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_contacts_uids(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_get_contacts_uids().
     * If successful, then the `out_contact_uids` is set to newly allocated list
     * of UID strings, which should be freed with e_client_util_free_string_slist().
     * @param result a #GAsyncResult
     */
    get_contacts_uids_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_contact_uids */ string[] ]
    /**
     * Query `client` with `sexp,` receiving a list of contacts UIDs which matched.
     * If successful, then the `out_contact_uids` is set to newly allocated list
     * of UID strings, which should be freed with e_client_util_free_string_slist().
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     */
    get_contacts_uids_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact_uids */ string[] ]
    /**
     * Create an #EBookClientCursor.
     * The call is finished by e_book_client_get_view_finish()
     * from the `callback`.
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param sort_fields an array of #EContactFields to sort the cursor with
     * @param sort_types an array of #EBookCursorSortTypes to complement `sort_fields`
     * @param n_fields the length of the input `sort_fields` and `sort_types` arrays
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_cursor(sexp: string, sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_get_cursor().
     * If successful, then the `out_cursor` is set to newly create
     * #EBookClientCursor, the cursor should be freed with g_object_unref()
     * when no longer needed.
     * @param result a #GAsyncResult
     */
    get_cursor_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_cursor */ BookClientCursor ]
    /**
     * Create an #EBookClientCursor. If successful, then the `out_cursor` is set
     * to newly allocated #EBookClientCursor, the cursor should be freed with g_object_unref()
     * when no longer needed.
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param sort_fields an array of #EContactFields to sort the cursor with
     * @param sort_types an array of #EBookCursorSortTypes to complement `sort_fields`
     * @param n_fields the length of the input `sort_fields` and `sort_types` arrays
     * @param cancellable a #GCancellable; can be %NULL
     */
    get_cursor_sync(sexp: string, sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_cursor */ BookClientCursor ]
    /**
     * Reports the locale in use for `client`. The addressbook might sort contacts
     * in different orders, or store and compare phone numbers in different ways
     * depending on the currently set locale.
     * 
     * Locales can change dynamically if systemd decides to change the locale, so
     * it's important to listen for notifications on the #EBookClient:locale property
     * if you depend on sorted result lists. Ordered results should be reloaded
     * after a locale change is detected.
     */
    get_locale(): string
    /**
     * Query `client` with `sexp,` creating an #EBookClientView.
     * The call is finished by e_book_client_get_view_finish()
     * from the `callback`.
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_view(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_get_view().
     * If successful, then the `out_view` is set to newly allocated
     * #EBookClientView, which should be freed with g_object_unref().
     * @param result a #GAsyncResult
     */
    get_view_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_view */ BookClientView ]
    /**
     * Query `client` with `sexp,` creating an #EBookClientView.
     * If successful, then the `out_view` is set to newly allocated
     * #EBookClientView, which should be freed with g_object_unref().
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     */
    get_view_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_view */ BookClientView ]
    /**
     * Applies the changes made to `contact` to the stored version in `client`.
     * The call is finished by e_book_client_modify_contact_finish()
     * from the `callback`.
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    modify_contact(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_modify_contact().
     * @param result a #GAsyncResult
     */
    modify_contact_finish(result: Gio.AsyncResult): boolean
    /**
     * Applies the changes made to `contact` to the stored version in `client`.
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    modify_contact_sync(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Applies the changes made to `contacts` to the stored versions in `client`.
     * The call is finished by e_book_client_modify_contacts_finish()
     * from the `callback`.
     * @param contacts a #GSList of #EContact objects
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    modify_contacts(contacts: EBookContacts.Contact[], opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_modify_contacts().
     * @param result a #GAsyncResult
     */
    modify_contacts_finish(result: Gio.AsyncResult): boolean
    /**
     * Applies the changes made to `contacts` to the stored versions in `client`.
     * @param contacts a #GSList of #EContact objects
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    modify_contacts_sync(contacts: EBookContacts.Contact[], opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes `contact` from the `client`.
     * The call is finished by e_book_client_remove_contact_finish()
     * from the `callback`.
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    remove_contact(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Removes contact with `uid` from the `client`.
     * The call is finished by e_book_client_remove_contact_by_uid_finish()
     * from the `callback`.
     * @param uid a UID of a contact to remove
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    remove_contact_by_uid(uid: string, opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_remove_contact_by_uid().
     * @param result a #GAsyncResult
     */
    remove_contact_by_uid_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes contact with `uid` from the `client`.
     * @param uid a UID of a contact to remove
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    remove_contact_by_uid_sync(uid: string, opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Finishes previous call of e_book_client_remove_contact().
     * @param result a #GAsyncResult
     */
    remove_contact_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes `contact` from the `client`.
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    remove_contact_sync(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the contacts with uids from the list `uids` from `client`.  This is
     * always more efficient than calling e_book_client_remove_contact() if you
     * have more than one uid to remove, as some backends can implement it
     * as a batch request.
     * The call is finished by e_book_client_remove_contacts_finish()
     * from the `callback`.
     * @param uids a #GSList of UIDs to remove
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    remove_contacts(uids: string[], opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_remove_contacts().
     * @param result a #GAsyncResult
     */
    remove_contacts_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes the contacts with uids from the list `uids` from `client`.  This is
     * always more efficient than calling e_book_client_remove_contact() if you
     * have more than one uid to remove, as some backends can implement it
     * as a batch request.
     * @param uids a #GSList of UIDs to remove
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    remove_contacts_sync(uids: string[], opflags: EBookContacts.BookOperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Specify that `contact` residing in `client` is the #EContact that
     * refers to the user of the address book.
     * @param contact an #EContact
     */
    set_self(contact: EBookContacts.Contact): boolean
    /* Methods of EDataServer-1.2.EDataServer.Client */
    /**
     * Cancels all pending operations started on `client`.
     */
    cancel_all(): void
    /**
     * Check if backend supports particular capability.
     * To get all capabilities use e_client_get_capabilities().
     * @param capability a capability
     */
    check_capability(capability: string): boolean
    /**
     * Checks whether a client supports explicit refreshing
     * (see e_client_refresh()).
     */
    check_refresh_supported(): boolean
    /**
     * Returns a D-Bus bus name that will be used to connect the
     * client to the backend subprocess.
     */
    dup_bus_name(): string
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * The call is finished by e_client_get_backend_property_finish()
     * from the `callback`.
     * @param prop_name property name, whose value to retrieve; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_get_backend_property().
     * @param result a #GAsyncResult
     */
    get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * @param prop_name property name, whose value to retrieve; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     */
    get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    /**
     * Get list of strings with capabilities advertised by a backend.
     * This list, together with inner strings, is owned by the `client`.
     * To check for individual capabilities use e_client_check_capability().
     */
    get_capabilities(): string[]
    /**
     * Get the #ESource that this client has assigned.
     */
    get_source(): EDataServer.Source
    /**
     * Check if this `client` is connected.
     */
    is_online(): boolean
    /**
     * Check if this `client` is fully opened. This includes
     * everything from e_client_open() call up to the authentication,
     * if required by a backend. Client cannot do any other operation
     * during the opening phase except of authenticate or cancel it.
     * Every other operation results in an %E_CLIENT_ERROR_BUSY error.
     */
    is_opened(): boolean
    /**
     * Check if this `client` is read-only.
     */
    is_readonly(): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * The call is finished by e_client_open_finish() from the `callback`.
     * @param only_if_exists this parameter is not used anymore
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_open().
     * @param result a #GAsyncResult
     */
    open_finish(result: Gio.AsyncResult): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * @param only_if_exists this parameter is not used anymore
     * @param cancellable a #GCancellable; can be %NULL
     */
    open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Returns the #GMainContext on which event sources for `client` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     */
    ref_main_context(): GLib.MainContext
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * The call is finished by e_client_refresh_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_refresh().
     * @param result a #GAsyncResult
     */
    refresh_finish(result: Gio.AsyncResult): boolean
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * @param cancellable a #GCancellable; can be %NULL
     */
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * The call is finished by e_client_remove_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_remove().
     * @param result a #GAsyncResult
     */
    remove_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * @param cancellable a #GCancellable; can be %NULL
     */
    remove_sync(cancellable?: Gio.Cancellable | null): boolean
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
    retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_retrieve_capabilities().
     * Returned value of `capabilities` should be freed with g_free(),
     * when no longer needed.
     * @param result a #GAsyncResult
     */
    retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value. Returned value
     * of `capabilities` should be freed with g_free(), when no longer needed.
     * @param cancellable a #GCancellable; can be %NULL
     */
    retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Asynchronously retrieves `client` properties to match server-side values,
     * without waiting for the D-Bus property change notifications delivery.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_client_retrieve_properties_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    retrieve_properties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_client_retrieve_properties().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    retrieve_properties_finish(result: Gio.AsyncResult): boolean
    /**
     * Retrieves `client` properties to match server-side values, without waiting
     * for the D-Bus property change notifications delivery.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`. The call is finished
     * by e_client_set_backend_property_finish() from the `callback`.
     * @param prop_name property name, whose value to change; cannot be %NULL
     * @param prop_value property value, to set; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_set_backend_property().
     * @param result a #GAsyncResult
     */
    set_backend_property_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`.
     * @param prop_name property name, whose value to change; cannot be %NULL
     * @param prop_value property value, to set; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     */
    set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets a D-Bus bus name that will be used to connect the client
     * to the backend subprocess.
     * @param bus_name a string representing a D-Bus bus name
     */
    set_bus_name(bus_name: string): void
    /**
     * Unwraps D-Bus error to local error. `dbus_error` is automatically freed.
     * `dbus_erorr` and `out_error` can point to the same variable.
     * @param dbus_error a #GError returned bu D-Bus
     */
    unwrap_dbus_error(dbus_error: GLib.Error): void
    /**
     * Asynchronously waits until the `client` is connected (according
     * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
     * 
     * The call is finished by e_client_wait_for_connected_finish() from
     * the `callback`.
     * @param timeout_seconds a timeout for the wait, in seconds
     * @param cancellable a #GCancellable; or %NULL
     * @param callback callback to call when a result is ready
     */
    wait_for_connected(timeout_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_wait_for_connected().
     * @param result a #GAsyncResult
     */
    wait_for_connected_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously waits until the `client` is connected (according
     * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
     * 
     * Note: This also calls e_client_retrieve_properties_sync() on success, to have
     *   up-to-date property values on the client side, without a delay due
     *   to property change notifcations delivery through D-Bus.
     * @param timeout_seconds a timeout for the wait, in seconds
     * @param cancellable a #GCancellable; or %NULL
     */
    wait_for_connected_sync(timeout_seconds: number, cancellable?: Gio.Cancellable | null): boolean
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    init_finish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBook-1.2.EBook.BookClient */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataServer-1.2.EDataServer.Client */
    vfunc_backend_died(): void
    vfunc_backend_error(error_msg: string): void
    vfunc_backend_property_changed(prop_name: string, prop_value: string): void
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * The call is finished by e_client_get_backend_property_finish()
     * from the `callback`.
     * @param prop_name property name, whose value to retrieve; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    vfunc_get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_get_backend_property().
     * @param result a #GAsyncResult
     */
    vfunc_get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * @param prop_name property name, whose value to retrieve; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     */
    vfunc_get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * The call is finished by e_client_open_finish() from the `callback`.
     * @param only_if_exists this parameter is not used anymore
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    vfunc_open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_open().
     * @param result a #GAsyncResult
     */
    vfunc_open_finish(result: Gio.AsyncResult): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * @param only_if_exists this parameter is not used anymore
     * @param cancellable a #GCancellable; can be %NULL
     */
    vfunc_open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_opened(error: GLib.Error): void
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * The call is finished by e_client_refresh_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    vfunc_refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_refresh().
     * @param result a #GAsyncResult
     */
    vfunc_refresh_finish(result: Gio.AsyncResult): boolean
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * @param cancellable a #GCancellable; can be %NULL
     */
    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * The call is finished by e_client_remove_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_remove().
     * @param result a #GAsyncResult
     */
    vfunc_remove_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * @param cancellable a #GCancellable; can be %NULL
     */
    vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean
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
    vfunc_retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_retrieve_capabilities().
     * Returned value of `capabilities` should be freed with g_free(),
     * when no longer needed.
     * @param result a #GAsyncResult
     */
    vfunc_retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value. Returned value
     * of `capabilities` should be freed with g_free(), when no longer needed.
     * @param cancellable a #GCancellable; can be %NULL
     */
    vfunc_retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Retrieves `client` properties to match server-side values, without waiting
     * for the D-Bus property change notifications delivery.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`. The call is finished
     * by e_client_set_backend_property_finish() from the `callback`.
     * @param prop_name property name, whose value to change; cannot be %NULL
     * @param prop_value property value, to set; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    vfunc_set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_set_backend_property().
     * @param result a #GAsyncResult
     */
    vfunc_set_backend_property_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`.
     * @param prop_name property name, whose value to change; cannot be %NULL
     * @param prop_value property value, to set; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     */
    vfunc_set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Unwraps D-Bus error to local error. `dbus_error` is automatically freed.
     * `dbus_erorr` and `out_error` can point to the same variable.
     * @param dbus_error a #GError returned bu D-Bus
     */
    vfunc_unwrap_dbus_error(dbus_error: GLib.Error): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of EDataServer-1.2.EDataServer.Client */
    connect(sigName: "backend-died", callback: (($obj: BookClient) => void)): number
    connect_after(sigName: "backend-died", callback: (($obj: BookClient) => void)): number
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: (($obj: BookClient, object: string) => void)): number
    connect_after(sigName: "backend-error", callback: (($obj: BookClient, object: string) => void)): number
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "backend-property-changed", callback: (($obj: BookClient, object: string, p0: string) => void)): number
    connect_after(sigName: "backend-property-changed", callback: (($obj: BookClient, object: string, p0: string) => void)): number
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    connect(sigName: "opened", callback: (($obj: BookClient, object: GLib.Error) => void)): number
    connect_after(sigName: "opened", callback: (($obj: BookClient, object: GLib.Error) => void)): number
    emit(sigName: "opened", object: GLib.Error): void
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locale", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opened", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonly", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookClient_ConstructProps)
    _init (config?: BookClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: EDataServer.Source): BookClient
    /**
     * Asynchronously creates a new #EBookClient for `source`.
     * 
     * The `wait_for_connected_seconds` argument had been added since 3.16,
     * to let the caller decide how long to wait for the backend to fully
     * connect to its (possibly remote) data store. This is required due
     * to a change in the authentication process, which is fully asynchronous
     * and done on the client side, while not every client is supposed to
     * response to authentication requests. In case the backend will not connect
     * within the set interval, then it is opened in an offline mode. A special
     * value -1 can be used to not wait for the connected state at all.
     * 
     * Unlike with e_book_client_new(), there is no need to call e_client_open()
     * after obtaining the #EBookClient.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_client_connect_finish() to get the result of the operation.
     * @param source an #ESource
     * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    static connect(source: EDataServer.Source, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Like e_book_client_connect(), except creates the book client for
     * direct read access to the underlying addressbook.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_client_connect_direct_finish() to get the result of the operation.
     * @param source an #ESource
     * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    static connect_direct(source: EDataServer.Source, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_client_connect_direct().
     * If an error occurs in connecting to the D-Bus service, the function sets
     * `error` and returns %NULL.
     * 
     * For error handling convenience, any error message returned by this
     * function will have a descriptive prefix that includes the display
     * name of the #ESource passed to e_book_client_connect_direct().
     * @param result a #GAsyncResult
     */
    static connect_direct_finish(result: Gio.AsyncResult): BookClient
    /**
     * Like e_book_client_connect_sync(), except creates the book client for
     * direct read access to the underlying addressbook.
     * @param registry an #ESourceRegistry
     * @param source an #ESource
     * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
     * @param cancellable optional #GCancellable object, or %NULL
     */
    static connect_direct_sync(registry: EDataServer.SourceRegistry, source: EDataServer.Source, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null): BookClient
    /**
     * Finishes the operation started with e_book_client_connect().  If an
     * error occurs in connecting to the D-Bus service, the function sets
     * `error` and returns %NULL.
     * 
     * For error handling convenience, any error message returned by this
     * function will have a descriptive prefix that includes the display
     * name of the #ESource passed to e_book_client_connect().
     * @param result a #GAsyncResult
     */
    static connect_finish(result: Gio.AsyncResult): BookClient
    /**
     * Creates a new #EBookClient for `source`.  If an error occurs, the function
     * will set `error` and return %FALSE.
     * 
     * Unlike with e_book_client_new(), there is no need to call
     * e_client_open_sync() after obtaining the #EBookClient.
     * 
     * The `wait_for_connected_seconds` argument had been added since 3.16,
     * to let the caller decide how long to wait for the backend to fully
     * connect to its (possibly remote) data store. This is required due
     * to a change in the authentication process, which is fully asynchronous
     * and done on the client side, while not every client is supposed to
     * response to authentication requests. In case the backend will not connect
     * within the set interval, then it is opened in an offline mode. A special
     * value -1 can be used to not wait for the connected state at all.
     * 
     * For error handling convenience, any error message returned by this
     * function will have a descriptive prefix that includes the display
     * name of `source`.
     * @param source an #ESource
     * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
     * @param cancellable optional #GCancellable object, or %NULL
     */
    static connect_sync(source: EDataServer.Source, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null): BookClient
    /**
     * Get the #EContact referring to the user of the address book
     * and set it in `out_contact` and `out_client`.
     * @param registry an #ESourceRegistry
     */
    static get_self(registry: EDataServer.SourceRegistry): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact, /* out_client */ BookClient ]
    /**
     * Check if `contact` is the user of the address book.
     * @param contact an #EContact
     */
    static is_self(contact: EBookContacts.Contact): boolean
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     * @param object_type a #GType supporting #GAsyncInitable.
     * @param n_parameters the number of parameters in `parameters`
     * @param parameters the parameters to use to construct the object
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is     finished
     */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface BookClientCursor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EBook-1.2.EBook.BookClientCursor */
    /**
     * The #EBookClient which this cursor was created for
     */
    client?: BookClient
    /**
     * The #GDBusConnection to the addressbook server.
     * 
     * <note><para>This is an internal parameter for constructing the
     * cursor, to construct the cursor use e_book_client_get_cursor().
     * </para></note>
     */
    connection?: Gio.DBusConnection
    /**
     * The #GMainContext in which the #EBookClient created this cursor.
     * 
     * <note><para>This is an internal parameter for constructing the
     * cursor, to construct the cursor use e_book_client_get_cursor().
     * </para></note>
     */
    context?: GLib.MainContext
    /**
     * The D-Bus object path to find the server side cursor object.
     * 
     * <note><para>This is an internal parameter for constructing the
     * cursor, to construct the cursor use e_book_client_get_cursor().
     * </para></note>
     */
    object_path?: string
    /**
     * The #EContactField names to sort this cursor with
     * 
     * <note><para>This is an internal parameter for constructing the
     * cursor, to construct the cursor use e_book_client_get_cursor().
     * </para></note>
     */
    sort_fields?: string[]
}
class BookClientCursor {
    /* Properties of EBook-1.2.EBook.BookClientCursor */
    /**
     * The currently <link linkend="cursor-alphabet">active alphabet</link>.
     * 
     * The value is a %NULL terminated array of strings,
     * each string is suitable to display a specific letter
     * in the active alphabet.
     * 
     * Indexes from this array can later be used with
     * e_book_client_cursor_set_alphabetic_index().
     * 
     * This property will automatically change if the
     * active locale of the addressbook server changes.
     * 
     * Property change notifications are guaranteed to be
     * delivered in the #GMainContext which was the thread
     * default context at cursor creation time.
     */
    readonly alphabet: string[]
    /**
     * The #EBookClient which this cursor was created for
     */
    readonly client: BookClient
    /**
     * The #GDBusConnection to the addressbook server.
     * 
     * <note><para>This is an internal parameter for constructing the
     * cursor, to construct the cursor use e_book_client_get_cursor().
     * </para></note>
     */
    readonly connection: Gio.DBusConnection
    /**
     * The #GMainContext in which the #EBookClient created this cursor.
     * 
     * <note><para>This is an internal parameter for constructing the
     * cursor, to construct the cursor use e_book_client_get_cursor().
     * </para></note>
     */
    readonly context: GLib.MainContext
    /**
     * The D-Bus object path to find the server side cursor object.
     * 
     * <note><para>This is an internal parameter for constructing the
     * cursor, to construct the cursor use e_book_client_get_cursor().
     * </para></note>
     */
    readonly object_path: string
    /**
     * The current cursor position in the cursor's result list.
     * 
     * More specifically, the cursor position is defined as
     * the number of contacts leading up to the current
     * cursor position, inclusive of the current cursor
     * position.
     * 
     * If the position value is 0, then the cursor is positioned
     * before the contact list in the symbolic %E_BOOK_CURSOR_ORIGIN_BEGIN
     * position. If the position value is greater than
     * #EBookClientCursor:total, this indicates that the cursor is
     * positioned after the contact list in the symbolic
     * %E_BOOK_CURSOR_ORIGIN_END position.
     * 
     * Property change notifications are guaranteed to be
     * delivered in the #GMainContext which was the thread
     * default context at cursor creation time.
     */
    readonly position: number
    /**
     * The #EContactField names to sort this cursor with
     * 
     * <note><para>This is an internal parameter for constructing the
     * cursor, to construct the cursor use e_book_client_get_cursor().
     * </para></note>
     */
    readonly sort_fields: string[]
    /**
     * The total number of contacts which satisfy the cursor's query.
     * 
     * Property change notifications are guaranteed to be
     * delivered in the #GMainContext which was the thread
     * default context at cursor creation time.
     */
    readonly total: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBook-1.2.EBook.BookClientCursor */
    /**
     * Fetches the array of displayable labels for the <link linkend="cursor-alphabet">active alphabet</link>.
     * 
     * The active alphabet is based on the current locale configuration of the
     * addressbook, and can be a different alphabet for locales requiring non-Latin
     * language scripts. These UTF-8 labels are appropriate to display in a user
     * interface to represent the alphabetic position of the cursor in the user's
     * native alphabet.
     * 
     * The `underflow,` `inflow` and `overflow` parameters allow one to observe which
     * indexes Evolution Data Server is using to store words which sort outside
     * of the alphabet, for instance words from foreign language scripts and
     * words which start with numeric characters, or other types of character.
     * 
     * While the `underflow` and `overflow` are for words which sort below or
     * above the active alphabets, the `inflow` index is for words which sort
     * in between multiple concurrently active alphabets. The active alphabet
     * array might contain more than one alphabet for locales where it is
     * very common or expected to have names in Latin script as well as names
     * in another script.
     */
    get_alphabet(): [ /* returnType */ string[], /* n_labels */ number | null, /* underflow */ number | null, /* inflow */ number | null, /* overflow */ number | null ]
    /**
     * Checks which alphabetic index `contact` would be sorted
     * into according to `cursor`.
     * 
     * So long as the active #EBookClientCursor:alphabet does
     * not change, the returned index will be a valid position
     * in the array of labels returned by e_book_client_cursor_get_alphabet().
     * 
     * If the index returned by this function is needed for
     * any extended period of time, it should be recalculated
     * whenever the #EBookClientCursor:alphabet changes.
     * @param contact the #EContact to check
     */
    get_contact_alphabetic_index(contact: EBookContacts.Contact): number
    /**
     * Fetches the number of contacts leading up to the current
     * cursor position, inclusive of the current cursor position.
     * 
     * The position value can be anywhere from 0 to the total
     * number of contacts plus one. A value of 0 indicates
     * that the cursor is positioned before the contact list in
     * the symbolic %E_BOOK_CURSOR_ORIGIN_BEGIN state. If
     * the position is greater than the total, as returned by
     * e_book_client_cursor_get_total(), then the cursor is positioned
     * after the last contact in the symbolic %E_BOOK_CURSOR_ORIGIN_END position.
     */
    get_position(): number
    /**
     * Fetches the total number of contacts in the addressbook
     * which match `cursor'`s query
     */
    get_total(): number
    /**
     * Returns the #EBookClientCursor:client associated with `cursor`.
     * 
     * The returned #EBookClient is referenced because the cursor
     * does not keep a strong reference to the client.
     * 
     * Unreference the #EBookClient with g_object_unref() when finished with it.
     */
    ref_client(): BookClient
    /**
     * Sets the current cursor position to point to an <link linkend="cursor-alphabet">Alphabetic Index</link>.
     * 
     * See: e_book_client_cursor_set_alphabetic_index_sync().
     * 
     * This asynchronous call is completed with a call to
     * e_book_client_cursor_set_alphabetic_index_finish() from the specified `callback`.
     * @param index the alphabetic index
     * @param cancellable a #GCancellable to optionally cancel this operation while in progress
     * @param callback callback to call when a result is ready
     */
    set_alphabetic_index(index: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous call initiated by e_book_client_cursor_set_alphabetic_index().
     * @param result a #GAsyncResult
     */
    set_alphabetic_index_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets the cursor to point to an <link linkend="cursor-alphabet">Alphabetic Index</link>.
     * 
     * After setting the alphabetic index, for example the
     * index for letter 'E', then further calls to e_book_client_cursor_step()
     * will return results starting with the letter 'E' (or results starting
     * with the last result in 'D' when navigating through cursor results
     * in reverse).
     * 
     * The passed index must be a valid index into the alphabet parameters
     * returned by e_book_client_cursor_get_alphabet().
     * 
     * If this method is called from the same thread context in which
     * the cursor was created, then the updates to the #EBookClientCursor:position
     * property are guaranteed to be delivered synchronously upon successful completion
     * of moving the cursor. Otherwise, notifications will be delivered asynchronously
     * in the cursor's original thread context.
     * 
     * If this method completes with an %E_CLIENT_ERROR_OUT_OF_SYNC error, it is an
     * indication that the addressbook has been set into a new locale and it would be
     * unsafe to set the alphabetic index at this time. If you receive an out of sync
     * error from this method, then you should wait until an #EBookClientCursor:alphabet
     * property change notification is delivered and then proceed to load the new
     * alphabet before trying to set any alphabetic index.
     * @param index the alphabetic index
     * @param cancellable a #GCancellable to optionally cancel this operation while in progress
     */
    set_alphabetic_index_sync(index: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets the <link linkend="cursor-search">Search Expression</link> for the cursor.
     * 
     * See: e_book_client_cursor_set_sexp_sync().
     * 
     * This asynchronous call is completed with a call to
     * e_book_client_cursor_set_sexp_finish() from the specified `callback`.
     * @param sexp the new search expression for `cursor`
     * @param cancellable a #GCancellable to optionally cancel this operation while in progress
     * @param callback callback to call when a result is ready
     */
    set_sexp(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous call initiated by e_book_client_cursor_set_sexp(), reporting
     * whether the new search expression was accepted.
     * @param result a #GAsyncResult
     */
    set_sexp_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets the <link linkend="cursor-search">Search Expression</link> for the cursor.
     * 
     * A side effect of setting the search expression is that the
     * <link linkend="cursor-pos-total">position and total</link>
     * properties will be updated.
     * 
     * If this method is called from the same thread context in which
     * the cursor was created, then the updates to the #EBookClientCursor:position
     * and #EBookClientCursor:total properties are guaranteed to be delivered
     * synchronously upon successful completion of setting the search expression.
     * Otherwise, notifications will be delivered asynchronously in the cursor's
     * original thread context.
     * 
     * If the backend does not support the given search expression,
     * an %E_CLIENT_ERROR_INVALID_QUERY error will be set.
     * @param sexp the new search expression for `cursor`
     * @param cancellable a #GCancellable to optionally cancel this operation while in progress
     */
    set_sexp_sync(sexp: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * <link linkend="cursor-iteration">Steps the cursor through the results</link> by
     * a maximum of `count` and fetch the results traversed.
     * 
     * See: e_book_client_cursor_step_sync().
     * 
     * This asynchronous call is completed with a call to
     * e_book_client_cursor_step_finish() from the specified `callback`.
     * @param flags The #EBookCursorStepFlags for this step
     * @param origin The #EBookCursorOrigin from whence to step
     * @param count a positive or negative amount of contacts to try and fetch
     * @param cancellable a #GCancellable to optionally cancel this operation while in progress
     * @param callback callback to call when a result is ready
     */
    step(flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous call initiated by e_book_client_cursor_step(), fetching
     * any contacts which might have been returned by the call.
     * @param result a #GAsyncResult
     */
    step_finish(result: Gio.AsyncResult): [ /* returnType */ number, /* out_contacts */ EBookContacts.Contact[] | null ]
    /**
     * <link linkend="cursor-iteration">Steps the cursor through the results</link> by
     * a maximum of `count` and fetch the results traversed.
     * 
     * If `count` is negative, then the cursor will move backwards.
     * 
     * If `cursor` reaches the beginning or end of the query results, then the
     * returned list might not contain the amount of desired contacts, or might
     * return no results if the cursor currently points to the last contact.
     * Reaching the end of the list is not considered an error condition. Attempts
     * to step beyond the end of the list after having reached the end of the list
     * will however trigger an %E_CLIENT_ERROR_QUERY_REFUSED error.
     * 
     * If %E_BOOK_CURSOR_STEP_FETCH is specified in `flags,` a pointer to
     * a %NULL #GSList pointer should be provided for the `results` parameter.
     * 
     * If %E_BOOK_CURSOR_STEP_MOVE is specified in `flags,` then the cursor's
     * state will be modified and the <link linkend="cursor-pos-total">position</link>
     * property will be updated as a result.
     * 
     * If this method is called from the same thread context in which
     * the cursor was created, then the updates to the #EBookClientCursor:position
     * property are guaranteed to be delivered synchronously upon successful completion
     * of moving the cursor. Otherwise, notifications will be delivered asynchronously
     * in the cursor's original thread context.
     * 
     * If this method completes with an %E_CLIENT_ERROR_OUT_OF_SYNC error, it is an
     * indication that the addressbook has been modified and it would be unsafe to
     * move the cursor at this time. Any %E_CLIENT_ERROR_OUT_OF_SYNC error is guaranteed
     * to be followed by an #EBookClientCursor::refresh signal at which point any content
     * should be reloaded.
     * @param flags The #EBookCursorStepFlags for this step
     * @param origin The #EBookCursorOrigin from whence to step
     * @param count a positive or negative amount of contacts to try and fetch
     * @param cancellable a #GCancellable to optionally cancel this operation while in progress
     */
    step_sync(flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* out_contacts */ EBookContacts.Contact[] | null ]
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBook-1.2.EBook.BookClientCursor */
    vfunc_refresh(): void
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of EBook-1.2.EBook.BookClientCursor */
    /**
     * Indicates that the addressbook has been modified and
     * that any content currently being displayed from the current
     * cursor position should be reloaded.
     * 
     * This signal is guaranteed to be delivered in the #GMainContext
     * which was the thread default context at cursor creation time.
     */
    connect(sigName: "refresh", callback: (($obj: BookClientCursor) => void)): number
    connect_after(sigName: "refresh", callback: (($obj: BookClientCursor) => void)): number
    emit(sigName: "refresh"): void
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alphabet", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alphabet", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::context", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-path", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sort-fields", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-fields", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookClientCursor_ConstructProps)
    _init (config?: BookClientCursor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface BookClientView_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EBook-1.2.EBook.BookClientView */
    client?: BookClient
    connection?: Gio.DBusConnection
    object_path?: string
}
class BookClientView {
    /* Properties of EBook-1.2.EBook.BookClientView */
    readonly client: BookClient
    readonly connection: Gio.DBusConnection
    readonly object_path: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBook-1.2.EBook.BookClientView */
    /**
     * Returns the #EBookClientView:client associated with `client_view`.
     */
    get_client(): BookClient
    /**
     * Returns the #GDBusConnection used to create the D-Bus proxy.
     */
    get_connection(): Gio.DBusConnection
    /**
     * Returns the object path used to create the D-Bus proxy.
     */
    get_object_path(): string
    is_running(): boolean
    /**
     * Returns the #EBookClientView:client associated with `client_view`.
     * 
     * The returned #EBookClient is referenced for thread-safety.  Unreference
     * the #EBookClient with g_object_unref() when finished with it.
     */
    ref_client(): BookClient
    /**
     * Client can instruct server to which fields it is interested in only, thus
     * the server can return less data over the wire. The server can still return
     * complete objects, this is just a hint to it that the listed fields will
     * be used only. The UID field is returned always. Initial views has no fields
     * of interest and using %NULL for `fields_of_interest` will unset any previous
     * changes.
     * 
     * Some backends can use summary information of its cache to create artifical
     * objects, which will omit stored object parsing. If this cannot be done then
     * it will simply return object as is stored in the cache.
     * @param fields_of_interest List of field names in which                      the client is interested
     */
    set_fields_of_interest(fields_of_interest: string[]): void
    /**
     * Sets the `flags` which control the behaviour of `client_view`.
     * @param flags the #EBookClientViewFlags for `client_view`
     */
    set_flags(flags: EBookContacts.BookClientViewFlags): void
    /**
     * Tells `client_view` to start processing events.
     */
    start(): void
    /**
     * Tells `client_view` to stop processing events.
     */
    stop(): void
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBook-1.2.EBook.BookClientView */
    vfunc_complete(error: GLib.Error): void
    vfunc_progress(percent: number, message: string): void
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of EBook-1.2.EBook.BookClientView */
    connect(sigName: "complete", callback: (($obj: BookClientView, object: GLib.Error) => void)): number
    connect_after(sigName: "complete", callback: (($obj: BookClientView, object: GLib.Error) => void)): number
    emit(sigName: "complete", object: GLib.Error): void
    connect(sigName: "objects-added", callback: (($obj: BookClientView, objects: EBookContacts.Contact[]) => void)): number
    connect_after(sigName: "objects-added", callback: (($obj: BookClientView, objects: EBookContacts.Contact[]) => void)): number
    emit(sigName: "objects-added", objects: EBookContacts.Contact[]): void
    connect(sigName: "objects-modified", callback: (($obj: BookClientView, objects: EBookContacts.Contact[]) => void)): number
    connect_after(sigName: "objects-modified", callback: (($obj: BookClientView, objects: EBookContacts.Contact[]) => void)): number
    emit(sigName: "objects-modified", objects: EBookContacts.Contact[]): void
    connect(sigName: "objects-removed", callback: (($obj: BookClientView, uids: string[]) => void)): number
    connect_after(sigName: "objects-removed", callback: (($obj: BookClientView, uids: string[]) => void)): number
    emit(sigName: "objects-removed", uids: string[]): void
    connect(sigName: "progress", callback: (($obj: BookClientView, object: number, p0: string) => void)): number
    connect_after(sigName: "progress", callback: (($obj: BookClientView, object: number, p0: string) => void)): number
    emit(sigName: "progress", object: number, p0: string): void
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-path", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookClientView_ConstructProps)
    _init (config?: BookClientView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Destination_ConstructProps extends GObject.Object_ConstructProps {
}
class Destination {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBook-1.2.EBook.Destination */
    /**
     * Creates a new #EDestination identical to `dest`.
     */
    copy(): Destination
    /**
     * Checks if `dest` is blank.
     */
    empty(): boolean
    /**
     * Checks if `a` and `b` are equal.
     * @param b an #EDestination
     */
    equal(b: Destination): boolean
    /**
     * Exports a destination to an XML document.
     */
    export(): string
    /**
     * Exports the contact information from `dest` to parameters
     * and values in `attr,` suitable for an address book.
     * @param attr an #EVCardAttribute
     */
    export_to_vcard_attribute(attr: EBookContacts.VCardAttribute): void
    /**
     * Gets the encoded name and email address, or in the case of lists, the
     * encoded list of email addresses, from `dest`.  The returned string is
     * suitable for use in an email header, but not for displaying to users.
     */
    get_address(): string | null
    /**
     * Gets the contact `dest` is pointing to, if any.
     */
    get_contact(): EBookContacts.Contact | null
    /**
     * Gets the unique contact ID `dest` is pointing to, if any.
     */
    get_contact_uid(): string | null
    /**
     * Gets the e-mail address of `dest'`s addressee.
     */
    get_email(): string
    /**
     * Gets the index of the e-mail address of the contact that
     * `dest` is pointing to, if any.
     */
    get_email_num(): number
    /**
     * Check if `dest` wants to get mail formatted as HTML.
     */
    get_html_mail_pref(): boolean
    /**
     * Gets the full name of `dest'`s addressee, or if the addressee is
     * a contact list, the name the list was filed under. The name can
     * be encoded in quoted printable.
     */
    get_name(): string | null
    /**
     * Gets the unique source ID `dest` is pointing to, if any. The source
     * ID specifies which address book `dest'`s contact came from.
     */
    get_source_uid(): string | null
    /**
     * Generates a textual representation of `dest,` suitable for referring
     * to the destination during user interaction. The name can be encoded
     * in quoted printable.
     * @param include_email whether to include the e-mail address
     */
    get_textrep(include_email: boolean): string
    /**
     * Checks if `dest` is flagged as an automatic recipient, meaning
     * it was not explicitly specified by the user. This can be used
     * to hide it from some UI elements.
     */
    is_auto_recipient(): boolean
    /**
     * Checks if `dest` is a list of addresses.
     */
    is_evolution_list(): boolean
    /**
     * Check if `dest` is to be ignored.
     */
    is_ignored(): boolean
    /**
     * If `dest` is a list, gets recursively list of all destinations.
     * Everything returned from this function belongs to `dest` and
     * thus should not be freed.
     */
    list_get_dests(): Destination[] | null
    /**
     * If `dest` is a list, gets the list of EDestinations assigned directly
     * to `dest`.
     * The list and its elements belong to `dest,` and should not be freed.
     */
    list_get_root_dests(): Destination[] | null
    /**
     * If `dest` is a list, checks if the addresses in the list
     * should be presented to the user during interaction.
     */
    list_show_addresses(): boolean
    /**
     * Sets the flag indicating if `dest` is an automatic recipient, meaning
     * it was not explicitly specified by the user. This can be used
     * to hide it from some UI elements.
     * @param value the auto recipient flag
     */
    set_auto_recipient(value: boolean): void
    /**
     * Specify the source `dest'`s contact comes from. This is useful
     * if you need to update the contact later.
     * @param client an #EBookClient
     */
    set_client(client: BookClient): void
    /**
     * Sets `dest` to point to one of `contact'`s e-mail addresses
     * indicated by `email_num`.
     * @param contact an #EContact
     * @param email_num an email index
     */
    set_contact(contact: EBookContacts.Contact, email_num: number): void
    /**
     * Sets `dest` to point to one of the contact specified by `uid'`s e-mail
     * addresses indicated by `email_num`.
     * @param uid a unique contact ID
     * @param email_num an email index
     */
    set_contact_uid(uid: string, email_num: number): void
    /**
     * Sets the e-mail address of `dest'`s addressee.
     * @param email the destination's e-mail address
     */
    set_email(email: string): void
    /**
     * Specifies whether `dest` wants to get mail formatted as HTML.
     * @param flag whether the destination wants HTML mail
     */
    set_html_mail_pref(flag: boolean): void
    /**
     * Set the ignore flag on an #EDestination.
     * @param ignored %TRUE if this #EDestination should be ignored.
     */
    set_ignored(ignored: boolean): void
    /**
     * Sets the full name of `dest'`s addressee.
     * @param name the destination's full name
     */
    set_name(name: string): void
    /**
     * Sets `dest` to point to the name and e-mail address resulting from
     * parsing the supplied string. Useful for user input.
     * @param raw an unparsed string
     */
    set_raw(raw: string): void
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of EBook-1.2.EBook.Destination */
    vfunc_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of EBook-1.2.EBook.Destination */
    connect(sigName: "changed", callback: (($obj: Destination) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Destination) => void)): number
    emit(sigName: "changed"): void
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Destination, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Destination, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Destination_ConstructProps)
    _init (config?: Destination_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Destination
    /**
     * Exports multiple #EDestination elements to a single XML document.
     * @param destv a %NULL-terminated array of pointers to #EDestination
     */
    static exportv(destv: Destination[]): string
    /**
     * Unrefs the elements of `destv` and frees `destv` itself.
     * @param destv a %NULL-terminated array of pointers to #EDestination
     */
    static freev(destv: Destination[]): void
    /**
     * Generates a joint text representation of all the #EDestination
     * elements in `destv`.
     * @param destv %NULL-terminated array of pointers to #EDestination
     */
    static get_textrepv(destv: Destination[]): string
    /**
     * Creates an #EDestination from an XML document.
     * @param str an XML string
     */
    static import(str: string): Destination | null
    /**
     * Creates an array of pointers to #EDestination elements
     * from an XML document.
     * @param str an XML string
     */
    static importv(str: string): Destination[]
    static $gtype: GObject.Type
}
abstract class BookClientClass {
    static name: string
}
abstract class BookClientCursorClass {
    /* Fields of EBook-1.2.EBook.BookClientCursorClass */
    refresh: (cursor: BookClientCursor) => void
    static name: string
}
class BookClientCursorPrivate {
    static name: string
}
class BookClientPrivate {
    static name: string
}
abstract class BookClientViewClass {
    /* Fields of EBook-1.2.EBook.BookClientViewClass */
    progress: (client_view: BookClientView, percent: number, message: string) => void
    complete: (client_view: BookClientView, error: GLib.Error) => void
    static name: string
}
class BookClientViewPrivate {
    static name: string
}
abstract class DestinationClass {
    /* Fields of EBook-1.2.EBook.DestinationClass */
    parent_class: GObject.ObjectClass
    changed: (destination: Destination) => void
    static name: string
}
class DestinationPrivate {
    static name: string
}
}
export default EBook;