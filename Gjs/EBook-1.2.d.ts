// @ts-nocheck

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
/**
 * Synchronously searches for `recipients` S/MIME or PGP certificates either
 * in provided `only_clients` #EBookClient, or, when %NULL, in each found
 * address book configured for auto-completion.
 * 
 * This function can be used within camel_session_get_recipient_certificates_sync()
 * implementation.
 * @param registry an #ESourceRegistry
 * @param only_clients optional #GSList of    the #EBookClient objects to search for the certificates in, or %NULL
 * @param flags bit-or of #CamelRecipientCertificateFlags
 * @param recipients a #GPtrArray of recipients' email addresses
 * @param cancellable optional #GCancellable object, or %NULL
 */
function book_utils_get_recipient_certificates_sync(registry: EDataServer.SourceRegistry, only_clients: BookClient[] | null, flags: Camel.RecipientCertificateFlags, recipients: string[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_certificates */ string[] ]
interface BookClient_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.Initable_ConstructProps, EDataServer.Client_ConstructProps {
}

interface BookClient extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of EBook-1.2.EBook.BookClient

    /**
     * The currently active locale for this addressbook.
     */
    readonly locale: string

    // Owm methods of EBook-1.2.EBook.BookClient

    /**
     * Adds `contact` to `client`.
     * The call is finished by e_book_client_add_contact_finish()
     * from the `callback`.
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    add_contact(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_add_contact() and
     * sets `out_added_uid` to a UID of a newly added contact.
     * This string should be freed with g_free().
     * 
     * Note: This is not modifying original #EContact.
     * @param result a #GAsyncResult
     */
    add_contact_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_added_uid */ string ]
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
    add_contact_sync(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_added_uid */ string ]
    /**
     * Adds `contacts` to `client`.
     * The call is finished by e_book_client_add_contacts_finish()
     * from the `callback`.
     * @param contacts a #GSList of #EContact objects to add
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    add_contacts(contacts: EBookContacts.Contact[], opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    add_contacts_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_added_uids */ string[] ]
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
    add_contacts_sync(contacts: EBookContacts.Contact[], opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_added_uids */ string[] ]
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
    contains_email(email_address: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_contains_email().
     * @param result a #GAsyncResult
     */
    contains_email_finish(result: Gio.AsyncResult): boolean
    contains_email_sync(email_address: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Receive #EContact from the `client` for the gived `uid`.
     * The call is finished by e_book_client_get_contact_finish()
     * from the `callback`.
     * @param uid a unique string ID specifying the contact
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_contact(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_get_contact().
     * If successful, then the `out_contact` is set to newly allocated
     * #EContact, which should be freed with g_object_unref().
     * @param result a #GAsyncResult
     */
    get_contact_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact ]
    /**
     * Receive #EContact from the `client` for the gived `uid`.
     * If successful, then the `out_contact` is set to newly allocated
     * #EContact, which should be freed with g_object_unref().
     * @param uid a unique string ID specifying the contact
     * @param cancellable a #GCancellable; can be %NULL
     */
    get_contact_sync(uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact ]
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
    get_contacts(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    get_contacts_sync(sexp: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
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
    get_contacts_uids(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    get_contacts_uids_sync(sexp: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact_uids */ string[] ]
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
    get_cursor(sexp: string, sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    get_cursor_sync(sexp: string, sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_cursor */ BookClientCursor ]
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
    get_view(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    get_view_sync(sexp: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_view */ BookClientView ]
    /**
     * Applies the changes made to `contact` to the stored version in `client`.
     * The call is finished by e_book_client_modify_contact_finish()
     * from the `callback`.
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    modify_contact(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    modify_contact_sync(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Applies the changes made to `contacts` to the stored versions in `client`.
     * The call is finished by e_book_client_modify_contacts_finish()
     * from the `callback`.
     * @param contacts a #GSList of #EContact objects
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    modify_contacts(contacts: EBookContacts.Contact[], opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    modify_contacts_sync(contacts: EBookContacts.Contact[], opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes `contact` from the `client`.
     * The call is finished by e_book_client_remove_contact_finish()
     * from the `callback`.
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    remove_contact(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Removes contact with `uid` from the `client`.
     * The call is finished by e_book_client_remove_contact_by_uid_finish()
     * from the `callback`.
     * @param uid a UID of a contact to remove
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    remove_contact_by_uid(uid: string, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    remove_contact_by_uid_sync(uid: string, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): boolean
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
    remove_contact_sync(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): boolean
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
    remove_contacts(uids: string[], opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    remove_contacts_sync(uids: string[], opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Specify that `contact` residing in `client` is the #EContact that
     * refers to the user of the address book.
     * @param contact an #EContact
     */
    set_self(contact: EBookContacts.Contact): boolean

    // Class property signals of EBook-1.2.EBook.BookClient

    connect(sigName: "notify::locale", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::opened", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opened", ...args: any[]): void
    connect(sigName: "notify::readonly", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::readonly", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
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
class BookClient extends EDataServer.Client {

    // Own properties of EBook-1.2.EBook.BookClient

    static name: string
    static $gtype: GObject.GType<BookClient>

    // Constructors of EBook-1.2.EBook.BookClient

    constructor(config?: BookClient_ConstructProps) 
    /**
     * Creates a new #EBookClient corresponding to the given source.  There are
     * only two operations that are valid on this book at this point:
     * e_client_open(), and e_client_remove().
     * @constructor 
     * @param source An #ESource pointer
     */
    constructor(source: EDataServer.Source) 
    /**
     * Creates a new #EBookClient corresponding to the given source.  There are
     * only two operations that are valid on this book at this point:
     * e_client_open(), and e_client_remove().
     * @constructor 
     * @param source An #ESource pointer
     */
    static new(source: EDataServer.Source): BookClient
    _init(config?: BookClient_ConstructProps): void
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
    static connect(source: EDataServer.Source, wait_for_connected_seconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    static connect_direct(source: EDataServer.Source, wait_for_connected_seconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    static connect_direct_sync(registry: EDataServer.SourceRegistry, source: EDataServer.Source, wait_for_connected_seconds: number, cancellable: Gio.Cancellable | null): BookClient
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
    static connect_sync(source: EDataServer.Source, wait_for_connected_seconds: number, cancellable: Gio.Cancellable | null): BookClient
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
}

interface BookClientCursor_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EBook-1.2.EBook.BookClientCursor

    /**
     * The #EBookClient which this cursor was created for
     */
    client?: BookClient | null
    /**
     * The #GDBusConnection to the addressbook server.
     * 
     * <note><para>This is an internal parameter for constructing the
     * cursor, to construct the cursor use e_book_client_get_cursor().
     * </para></note>
     */
    connection?: Gio.DBusConnection | null
    /**
     * The #GMainContext in which the #EBookClient created this cursor.
     * 
     * <note><para>This is an internal parameter for constructing the
     * cursor, to construct the cursor use e_book_client_get_cursor().
     * </para></note>
     */
    context?: GLib.MainContext | null
    /**
     * The D-Bus object path to find the server side cursor object.
     * 
     * <note><para>This is an internal parameter for constructing the
     * cursor, to construct the cursor use e_book_client_get_cursor().
     * </para></note>
     */
    object_path?: string | null
    /**
     * The #EContactField names to sort this cursor with
     * 
     * <note><para>This is an internal parameter for constructing the
     * cursor, to construct the cursor use e_book_client_get_cursor().
     * </para></note>
     */
    sort_fields?: string[] | null
}

/**
 * Signal callback interface for `refresh`
 */
interface BookClientCursor_RefreshSignalCallback {
    ($obj: BookClientCursor): void
}

interface BookClientCursor extends Gio.Initable {

    // Own properties of EBook-1.2.EBook.BookClientCursor

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

    // Owm methods of EBook-1.2.EBook.BookClientCursor

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
    get_alphabet(): [ /* returnType */ string[], /* n_labels */ number, /* underflow */ number, /* inflow */ number, /* overflow */ number ]
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
    set_alphabetic_index(index: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    set_alphabetic_index_sync(index: number, cancellable: Gio.Cancellable | null): boolean
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
    set_sexp(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    set_sexp_sync(sexp: string, cancellable: Gio.Cancellable | null): boolean
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
    step(flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous call initiated by e_book_client_cursor_step(), fetching
     * any contacts which might have been returned by the call.
     * @param result a #GAsyncResult
     */
    step_finish(result: Gio.AsyncResult): [ /* returnType */ number, /* out_contacts */ EBookContacts.Contact[] ]
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
    step_sync(flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* out_contacts */ EBookContacts.Contact[] ]

    // Own virtual methods of EBook-1.2.EBook.BookClientCursor

    vfunc_refresh(): void

    // Own signals of EBook-1.2.EBook.BookClientCursor

    connect(sigName: "refresh", callback: BookClientCursor_RefreshSignalCallback): number
    connect_after(sigName: "refresh", callback: BookClientCursor_RefreshSignalCallback): number
    emit(sigName: "refresh", ...args: any[]): void

    // Class property signals of EBook-1.2.EBook.BookClientCursor

    connect(sigName: "notify::alphabet", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alphabet", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alphabet", ...args: any[]): void
    connect(sigName: "notify::client", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::sort-fields", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-fields", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-fields", ...args: any[]): void
    connect(sigName: "notify::total", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data.
 * @class 
 */
class BookClientCursor extends GObject.Object {

    // Own properties of EBook-1.2.EBook.BookClientCursor

    static name: string
    static $gtype: GObject.GType<BookClientCursor>

    // Constructors of EBook-1.2.EBook.BookClientCursor

    constructor(config?: BookClientCursor_ConstructProps) 
    _init(config?: BookClientCursor_ConstructProps): void
}

interface BookClientView_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EBook-1.2.EBook.BookClientView

    client?: BookClient | null
    connection?: Gio.DBusConnection | null
    object_path?: string | null
}

/**
 * Signal callback interface for `complete`
 */
interface BookClientView_CompleteSignalCallback {
    ($obj: BookClientView, object: GLib.Error): void
}

/**
 * Signal callback interface for `objects-added`
 */
interface BookClientView_ObjectsAddedSignalCallback {
    ($obj: BookClientView, objects: EBookContacts.Contact[]): void
}

/**
 * Signal callback interface for `objects-modified`
 */
interface BookClientView_ObjectsModifiedSignalCallback {
    ($obj: BookClientView, objects: EBookContacts.Contact[]): void
}

/**
 * Signal callback interface for `objects-removed`
 */
interface BookClientView_ObjectsRemovedSignalCallback {
    ($obj: BookClientView, uids: string[]): void
}

/**
 * Signal callback interface for `progress`
 */
interface BookClientView_ProgressSignalCallback {
    ($obj: BookClientView, object: number, p0: string): void
}

interface BookClientView extends Gio.Initable {

    // Own properties of EBook-1.2.EBook.BookClientView

    readonly client: BookClient
    readonly connection: Gio.DBusConnection
    readonly object_path: string

    // Owm methods of EBook-1.2.EBook.BookClientView

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

    // Own virtual methods of EBook-1.2.EBook.BookClientView

    vfunc_complete(error: GLib.Error): void
    vfunc_progress(percent: number, message: string): void

    // Own signals of EBook-1.2.EBook.BookClientView

    connect(sigName: "complete", callback: BookClientView_CompleteSignalCallback): number
    connect_after(sigName: "complete", callback: BookClientView_CompleteSignalCallback): number
    emit(sigName: "complete", object: GLib.Error, ...args: any[]): void
    connect(sigName: "objects-added", callback: BookClientView_ObjectsAddedSignalCallback): number
    connect_after(sigName: "objects-added", callback: BookClientView_ObjectsAddedSignalCallback): number
    emit(sigName: "objects-added", objects: EBookContacts.Contact[], ...args: any[]): void
    connect(sigName: "objects-modified", callback: BookClientView_ObjectsModifiedSignalCallback): number
    connect_after(sigName: "objects-modified", callback: BookClientView_ObjectsModifiedSignalCallback): number
    emit(sigName: "objects-modified", objects: EBookContacts.Contact[], ...args: any[]): void
    connect(sigName: "objects-removed", callback: BookClientView_ObjectsRemovedSignalCallback): number
    connect_after(sigName: "objects-removed", callback: BookClientView_ObjectsRemovedSignalCallback): number
    emit(sigName: "objects-removed", uids: string[], ...args: any[]): void
    connect(sigName: "progress", callback: BookClientView_ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: BookClientView_ProgressSignalCallback): number
    emit(sigName: "progress", object: number, p0: string, ...args: any[]): void

    // Class property signals of EBook-1.2.EBook.BookClientView

    connect(sigName: "notify::client", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data the should be read and manipulated using the
 * functions below.
 * @class 
 */
class BookClientView extends GObject.Object {

    // Own properties of EBook-1.2.EBook.BookClientView

    static name: string
    static $gtype: GObject.GType<BookClientView>

    // Constructors of EBook-1.2.EBook.BookClientView

    constructor(config?: BookClientView_ConstructProps) 
    _init(config?: BookClientView_ConstructProps): void
}

interface Destination_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface Destination_ChangedSignalCallback {
    ($obj: Destination): void
}

interface Destination {

    // Own fields of EBook-1.2.EBook.Destination

    object: GObject.Object
    priv: DestinationPrivate

    // Owm methods of EBook-1.2.EBook.Destination

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

    // Own virtual methods of EBook-1.2.EBook.Destination

    vfunc_changed(): void

    // Own signals of EBook-1.2.EBook.Destination

    connect(sigName: "changed", callback: Destination_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Destination_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of EBook-1.2.EBook.Destination

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Destination extends GObject.Object {

    // Own properties of EBook-1.2.EBook.Destination

    static name: string
    static $gtype: GObject.GType<Destination>

    // Constructors of EBook-1.2.EBook.Destination

    constructor(config?: Destination_ConstructProps) 
    /**
     * Creates a new #EDestination with blank values.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #EDestination with blank values.
     * @constructor 
     */
    static new(): Destination
    _init(config?: Destination_ConstructProps): void
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
}

interface BookClientClass {
}

/**
 * Class structure for the #EBookClient class.
 * @record 
 */
abstract class BookClientClass {

    // Own properties of EBook-1.2.EBook.BookClientClass

    static name: string
}

interface BookClientCursorClass {

    // Own fields of EBook-1.2.EBook.BookClientCursorClass

    refresh: (cursor: BookClientCursor) => void
}

/**
 * The cursor class structure.
 * @record 
 */
abstract class BookClientCursorClass {

    // Own properties of EBook-1.2.EBook.BookClientCursorClass

    static name: string
}

interface BookClientCursorPrivate {
}

class BookClientCursorPrivate {

    // Own properties of EBook-1.2.EBook.BookClientCursorPrivate

    static name: string
}

interface BookClientPrivate {
}

class BookClientPrivate {

    // Own properties of EBook-1.2.EBook.BookClientPrivate

    static name: string
}

interface BookClientViewClass {

    // Own fields of EBook-1.2.EBook.BookClientViewClass

    progress: (client_view: BookClientView, percent: number, message: string) => void
    complete: (client_view: BookClientView, error: GLib.Error) => void
}

/**
 * Class structure for the #EBookClient class.
 * @record 
 */
abstract class BookClientViewClass {

    // Own properties of EBook-1.2.EBook.BookClientViewClass

    static name: string
}

interface BookClientViewPrivate {
}

class BookClientViewPrivate {

    // Own properties of EBook-1.2.EBook.BookClientViewPrivate

    static name: string
}

interface DestinationClass {

    // Own fields of EBook-1.2.EBook.DestinationClass

    parent_class: GObject.ObjectClass
    changed: (destination: Destination) => void
}

abstract class DestinationClass {

    // Own properties of EBook-1.2.EBook.DestinationClass

    static name: string
}

interface DestinationPrivate {
}

class DestinationPrivate {

    // Own properties of EBook-1.2.EBook.DestinationPrivate

    static name: string
}

}
export default EBook;