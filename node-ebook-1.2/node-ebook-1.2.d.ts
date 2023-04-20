
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * EBook-1.2
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type EDataServer from '@girs/edataserver-1.2';
import type Soup from '@girs/soup-3.0';
import type Json from '@girs/json-1.0';
import type Camel from '@girs/camel-1.2';
import type EBookContacts from '@girs/ebookcontacts-1.2';

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
function bookErrorQuark(): GLib.Quark
/**
 * Synchronously searches for `recipients` S/MIME or PGP certificates either
 * in provided `only_clients` #EBookClient, or, when %NULL, in each found
 * address book configured for auto-completion.
 * 
 * This function can be used within camel_session_get_recipient_certificates_sync()
 * implementation.
 * @param registry an #ESourceRegistry
 * @param onlyClients optional #GSList of    the #EBookClient objects to search for the certificates in, or %NULL
 * @param flags bit-or of #CamelRecipientCertificateFlags
 * @param recipients a #GPtrArray of recipients' email addresses
 * @param cancellable optional #GCancellable object, or %NULL
 * @returns %TRUE when no fatal error occurred, %FALSE otherwise.
 */
function bookUtilsGetRecipientCertificatesSync(registry: EDataServer.SourceRegistry, onlyClients: BookClient[] | null, flags: Camel.RecipientCertificateFlags, recipients: string[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCertificates */ string[] ]
module BookClient {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, EDataServer.Client.ConstructorProperties {
    }

}

interface BookClient extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of EBook-1.2.EBook.BookClient

    /**
     * The currently active locale for this addressbook.
     */
    readonly locale: string | null
    __gtype__: number

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
    addContact(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_add_contact() and
     * sets `out_added_uid` to a UID of a newly added contact.
     * This string should be freed with g_free().
     * 
     * Note: This is not modifying original #EContact.
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    addContactFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAddedUid */ string | null ]
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
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    addContactSync(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAddedUid */ string | null ]
    /**
     * Adds `contacts` to `client`.
     * The call is finished by e_book_client_add_contacts_finish()
     * from the `callback`.
     * @param contacts a #GSList of #EContact objects to add
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    addContacts(contacts: EBookContacts.Contact[], opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    addContactsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAddedUids */ string[] ]
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
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    addContactsSync(contacts: EBookContacts.Contact[], opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAddedUids */ string[] ]
    /**
     * Asynchronously checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_client_contains_email_finish() to get the result of the
     * operation.
     * @param emailAddress an email address
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    containsEmail(emailAddress: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_contains_email().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    containsEmailFinish(result: Gio.AsyncResult): boolean
    containsEmailSync(emailAddress: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Receive #EContact from the `client` for the gived `uid`.
     * The call is finished by e_book_client_get_contact_finish()
     * from the `callback`.
     * @param uid a unique string ID specifying the contact
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getContact(uid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_get_contact().
     * If successful, then the `out_contact` is set to newly allocated
     * #EContact, which should be freed with g_object_unref().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getContactFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact ]
    /**
     * Receive #EContact from the `client` for the gived `uid`.
     * If successful, then the `out_contact` is set to newly allocated
     * #EContact, which should be freed with g_object_unref().
     * @param uid a unique string ID specifying the contact
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getContactSync(uid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact ]
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
    getContacts(sexp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_get_contacts().
     * If successful, then the `out_contacts` is set to newly allocated list of
     * #EContact(s), which should be freed with e_client_util_free_object_slist().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getContactsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    /**
     * Query `client` with `sexp,` receiving a list of contacts which matched.
     * If successful, then the `out_contacts` is set to newly allocated #GSList of
     * #EContact(s), which should be freed with e_client_util_free_object_slist().
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getContactsSync(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
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
    getContactsUids(sexp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_get_contacts_uids().
     * If successful, then the `out_contact_uids` is set to newly allocated list
     * of UID strings, which should be freed with e_client_util_free_string_slist().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getContactsUidsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outContactUids */ string[] ]
    /**
     * Query `client` with `sexp,` receiving a list of contacts UIDs which matched.
     * If successful, then the `out_contact_uids` is set to newly allocated list
     * of UID strings, which should be freed with e_client_util_free_string_slist().
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getContactsUidsSync(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContactUids */ string[] ]
    /**
     * Create an #EBookClientCursor.
     * The call is finished by e_book_client_get_view_finish()
     * from the `callback`.
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param sortFields an array of #EContactFields to sort the cursor with
     * @param sortTypes an array of #EBookCursorSortTypes to complement `sort_fields`
     * @param nFields the length of the input `sort_fields` and `sort_types` arrays
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getCursor(sexp: string | null, sortFields: EBookContacts.ContactField, sortTypes: EBookContacts.BookCursorSortType, nFields: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_get_cursor().
     * If successful, then the `out_cursor` is set to newly create
     * #EBookClientCursor, the cursor should be freed with g_object_unref()
     * when no longer needed.
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getCursorFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCursor */ BookClientCursor ]
    /**
     * Create an #EBookClientCursor. If successful, then the `out_cursor` is set
     * to newly allocated #EBookClientCursor, the cursor should be freed with g_object_unref()
     * when no longer needed.
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param sortFields an array of #EContactFields to sort the cursor with
     * @param sortTypes an array of #EBookCursorSortTypes to complement `sort_fields`
     * @param nFields the length of the input `sort_fields` and `sort_types` arrays
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getCursorSync(sexp: string | null, sortFields: EBookContacts.ContactField, sortTypes: EBookContacts.BookCursorSortType, nFields: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCursor */ BookClientCursor ]
    /**
     * Reports the locale in use for `client`. The addressbook might sort contacts
     * in different orders, or store and compare phone numbers in different ways
     * depending on the currently set locale.
     * 
     * Locales can change dynamically if systemd decides to change the locale, so
     * it's important to listen for notifications on the #EBookClient:locale property
     * if you depend on sorted result lists. Ordered results should be reloaded
     * after a locale change is detected.
     * @returns The currently set locale for @client
     */
    getLocale(): string | null
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
    getView(sexp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_get_view().
     * If successful, then the `out_view` is set to newly allocated
     * #EBookClientView, which should be freed with g_object_unref().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getViewFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outView */ BookClientView ]
    /**
     * Query `client` with `sexp,` creating an #EBookClientView.
     * If successful, then the `out_view` is set to newly allocated
     * #EBookClientView, which should be freed with g_object_unref().
     * 
     * Note: `sexp` can be obtained through #EBookQuery, by converting it
     * to a string with e_book_query_to_string().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getViewSync(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outView */ BookClientView ]
    /**
     * Applies the changes made to `contact` to the stored version in `client`.
     * The call is finished by e_book_client_modify_contact_finish()
     * from the `callback`.
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    modifyContact(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_modify_contact().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    modifyContactFinish(result: Gio.AsyncResult): boolean
    /**
     * Applies the changes made to `contact` to the stored version in `client`.
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    modifyContactSync(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Applies the changes made to `contacts` to the stored versions in `client`.
     * The call is finished by e_book_client_modify_contacts_finish()
     * from the `callback`.
     * @param contacts a #GSList of #EContact objects
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    modifyContacts(contacts: EBookContacts.Contact[], opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_modify_contacts().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    modifyContactsFinish(result: Gio.AsyncResult): boolean
    /**
     * Applies the changes made to `contacts` to the stored versions in `client`.
     * @param contacts a #GSList of #EContact objects
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    modifyContactsSync(contacts: EBookContacts.Contact[], opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes `contact` from the `client`.
     * The call is finished by e_book_client_remove_contact_finish()
     * from the `callback`.
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    removeContact(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Removes contact with `uid` from the `client`.
     * The call is finished by e_book_client_remove_contact_by_uid_finish()
     * from the `callback`.
     * @param uid a UID of a contact to remove
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    removeContactByUid(uid: string | null, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_remove_contact_by_uid().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeContactByUidFinish(result: Gio.AsyncResult): boolean
    /**
     * Removes contact with `uid` from the `client`.
     * @param uid a UID of a contact to remove
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeContactByUidSync(uid: string | null, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Finishes previous call of e_book_client_remove_contact().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeContactFinish(result: Gio.AsyncResult): boolean
    /**
     * Removes `contact` from the `client`.
     * @param contact an #EContact
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeContactSync(contact: EBookContacts.Contact, opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): boolean
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
    removeContacts(uids: string[], opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_book_client_remove_contacts().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeContactsFinish(result: Gio.AsyncResult): boolean
    /**
     * Removes the contacts with uids from the list `uids` from `client`.  This is
     * always more efficient than calling e_book_client_remove_contact() if you
     * have more than one uid to remove, as some backends can implement it
     * as a batch request.
     * @param uids a #GSList of UIDs to remove
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeContactsSync(uids: string[], opflags: EBookContacts.BookOperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Specify that `contact` residing in `client` is the #EContact that
     * refers to the user of the address book.
     * @param contact an #EContact
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    setSelf(contact: EBookContacts.Contact): boolean

    // Class property signals of EBook-1.2.EBook.BookClient

    connect(sigName: "notify::locale", callback: (...args: any[]) => void): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
class BookClient extends EDataServer.Client {

    // Own properties of EBook-1.2.EBook.BookClient

    static name: string

    // Constructors of EBook-1.2.EBook.BookClient

    constructor(config?: BookClient.ConstructorProperties) 
    /**
     * Creates a new #EBookClient corresponding to the given source.  There are
     * only two operations that are valid on this book at this point:
     * e_client_open(), and e_client_remove().
     * @constructor 
     * @param source An #ESource pointer
     * @returns a new but unopened #EBookClient.
     */
    constructor(source: EDataServer.Source) 
    /**
     * Creates a new #EBookClient corresponding to the given source.  There are
     * only two operations that are valid on this book at this point:
     * e_client_open(), and e_client_remove().
     * @constructor 
     * @param source An #ESource pointer
     * @returns a new but unopened #EBookClient.
     */
    static new(source: EDataServer.Source): BookClient
    _init(config?: BookClient.ConstructorProperties): void
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
     * @param waitForConnectedSeconds timeout, in seconds, to wait for the backend to be fully connected
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    static connect(source: EDataServer.Source, waitForConnectedSeconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Like e_book_client_connect(), except creates the book client for
     * direct read access to the underlying addressbook.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_client_connect_direct_finish() to get the result of the operation.
     * @param source an #ESource
     * @param waitForConnectedSeconds timeout, in seconds, to wait for the backend to be fully connected
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    static connectDirect(source: EDataServer.Source, waitForConnectedSeconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_client_connect_direct().
     * If an error occurs in connecting to the D-Bus service, the function sets
     * `error` and returns %NULL.
     * 
     * For error handling convenience, any error message returned by this
     * function will have a descriptive prefix that includes the display
     * name of the #ESource passed to e_book_client_connect_direct().
     * @param result a #GAsyncResult
     * @returns a new #EBookClient, or %NULL on error
     */
    static connectDirectFinish(result: Gio.AsyncResult): BookClient
    /**
     * Like e_book_client_connect_sync(), except creates the book client for
     * direct read access to the underlying addressbook.
     * @param registry an #ESourceRegistry
     * @param source an #ESource
     * @param waitForConnectedSeconds timeout, in seconds, to wait for the backend to be fully connected
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a new but unopened #EBookClient or %NULL on error.
     */
    static connectDirectSync(registry: EDataServer.SourceRegistry, source: EDataServer.Source, waitForConnectedSeconds: number, cancellable: Gio.Cancellable | null): BookClient
    /**
     * Finishes the operation started with e_book_client_connect().  If an
     * error occurs in connecting to the D-Bus service, the function sets
     * `error` and returns %NULL.
     * 
     * For error handling convenience, any error message returned by this
     * function will have a descriptive prefix that includes the display
     * name of the #ESource passed to e_book_client_connect().
     * @param result a #GAsyncResult
     * @returns a new #EBookClient, or %NULL on error
     */
    static connectFinish(result: Gio.AsyncResult): BookClient
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
     * @param waitForConnectedSeconds timeout, in seconds, to wait for the backend to be fully connected
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a new #EBookClient,    or %NULL on error
     */
    static connectSync(source: EDataServer.Source, waitForConnectedSeconds: number, cancellable: Gio.Cancellable | null): BookClient
    /**
     * Get the #EContact referring to the user of the address book
     * and set it in `out_contact` and `out_client`.
     * @param registry an #ESourceRegistry
     * @returns %TRUE if successful, otherwise %FALSE.
     */
    static getSelf(registry: EDataServer.SourceRegistry): [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact, /* outClient */ BookClient ]
    /**
     * Check if `contact` is the user of the address book.
     * @param contact an #EContact
     * @returns %TRUE if @contact is the user, %FALSE otherwise.
     */
    static isSelf(contact: EBookContacts.Contact): boolean
}

module BookClientCursor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `refresh`
     */
    interface RefreshSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

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
        objectPath?: string | null
        /**
         * The #EContactField names to sort this cursor with
         * 
         * <note><para>This is an internal parameter for constructing the
         * cursor, to construct the cursor use e_book_client_get_cursor().
         * </para></note>
         */
        sortFields?: string[] | null
    }

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
    readonly objectPath: string | null
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
    readonly sortFields: string[]
    /**
     * The total number of contacts which satisfy the cursor's query.
     * 
     * Property change notifications are guaranteed to be
     * delivered in the #GMainContext which was the thread
     * default context at cursor creation time.
     */
    readonly total: number
    __gtype__: number

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
     * @returns    The array of displayable labels for each index in the active alphabet.
     */
    getAlphabet(): [ /* returnType */ string[], /* nLabels */ number, /* underflow */ number, /* inflow */ number, /* overflow */ number ]
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
     * @returns The alphabetic index of @contact in @cursor.
     */
    getContactAlphabeticIndex(contact: EBookContacts.Contact): number
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
     * @returns The current cursor position
     */
    getPosition(): number
    /**
     * Fetches the total number of contacts in the addressbook
     * which match `cursor'`s query
     * @returns The total number of contacts matching @cursor's query
     */
    getTotal(): number
    /**
     * Returns the #EBookClientCursor:client associated with `cursor`.
     * 
     * The returned #EBookClient is referenced because the cursor
     * does not keep a strong reference to the client.
     * 
     * Unreference the #EBookClient with g_object_unref() when finished with it.
     * @returns an #EBookClient
     */
    refClient(): BookClient
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
    setAlphabeticIndex(index: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous call initiated by e_book_client_cursor_set_alphabetic_index().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
     */
    setAlphabeticIndexFinish(result: Gio.AsyncResult): boolean
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
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
     */
    setAlphabeticIndexSync(index: number, cancellable: Gio.Cancellable | null): boolean
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
    setSexp(sexp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous call initiated by e_book_client_cursor_set_sexp(), reporting
     * whether the new search expression was accepted.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
     */
    setSexpFinish(result: Gio.AsyncResult): boolean
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
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
     */
    setSexpSync(sexp: string | null, cancellable: Gio.Cancellable | null): boolean
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
     * @returns The number of contacts traversed if successful, otherwise -1 is returned and @error is set.
     */
    stepFinish(result: Gio.AsyncResult): [ /* returnType */ number, /* outContacts */ EBookContacts.Contact[] ]
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
     * @returns The number of contacts traversed if successful, otherwise -1 is returned and @error is set.
     */
    stepSync(flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* outContacts */ EBookContacts.Contact[] ]

    // Own virtual methods of EBook-1.2.EBook.BookClientCursor

    refresh(): void

    // Own signals of EBook-1.2.EBook.BookClientCursor

    connect(sigName: "refresh", callback: BookClientCursor.RefreshSignalCallback): number
    on(sigName: "refresh", callback: BookClientCursor.RefreshSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refresh", callback: BookClientCursor.RefreshSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refresh", callback: BookClientCursor.RefreshSignalCallback): NodeJS.EventEmitter
    emit(sigName: "refresh", ...args: any[]): void

    // Class property signals of EBook-1.2.EBook.BookClientCursor

    connect(sigName: "notify::alphabet", callback: (...args: any[]) => void): number
    on(sigName: "notify::alphabet", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alphabet", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alphabet", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alphabet", ...args: any[]): void
    connect(sigName: "notify::client", callback: (...args: any[]) => void): number
    on(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::sort-fields", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-fields", ...args: any[]): void
    connect(sigName: "notify::total", callback: (...args: any[]) => void): number
    on(sigName: "notify::total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total", ...args: any[]): void
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
 * Contains only private data.
 * @class 
 */
class BookClientCursor extends GObject.Object {

    // Own properties of EBook-1.2.EBook.BookClientCursor

    static name: string

    // Constructors of EBook-1.2.EBook.BookClientCursor

    constructor(config?: BookClientCursor.ConstructorProperties) 
    _init(config?: BookClientCursor.ConstructorProperties): void
}

module BookClientView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `complete`
     */
    interface CompleteSignalCallback {
        (object: GLib.Error): void
    }

    /**
     * Signal callback interface for `objects-added`
     */
    interface ObjectsAddedSignalCallback {
        (objects: EBookContacts.Contact[]): void
    }

    /**
     * Signal callback interface for `objects-modified`
     */
    interface ObjectsModifiedSignalCallback {
        (objects: EBookContacts.Contact[]): void
    }

    /**
     * Signal callback interface for `objects-removed`
     */
    interface ObjectsRemovedSignalCallback {
        (uids: string[]): void
    }

    /**
     * Signal callback interface for `progress`
     */
    interface ProgressSignalCallback {
        (object: number, p0: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EBook-1.2.EBook.BookClientView

        client?: BookClient | null
        connection?: Gio.DBusConnection | null
        objectPath?: string | null
    }

}

interface BookClientView extends Gio.Initable {

    // Own properties of EBook-1.2.EBook.BookClientView

    readonly client: BookClient
    readonly connection: Gio.DBusConnection
    readonly objectPath: string | null
    __gtype__: number

    // Owm methods of EBook-1.2.EBook.BookClientView

    /**
     * Returns the #EBookClientView:client associated with `client_view`.
     * @returns an #EBookClient
     */
    getClient(): BookClient
    /**
     * Returns the #GDBusConnection used to create the D-Bus proxy.
     * @returns the #GDBusConnection
     */
    getConnection(): Gio.DBusConnection
    /**
     * Returns the object path used to create the D-Bus proxy.
     * @returns the object path
     */
    getObjectPath(): string | null
    isRunning(): boolean
    /**
     * Returns the #EBookClientView:client associated with `client_view`.
     * 
     * The returned #EBookClient is referenced for thread-safety.  Unreference
     * the #EBookClient with g_object_unref() when finished with it.
     * @returns an #EBookClient
     */
    refClient(): BookClient
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
     * @param fieldsOfInterest List of field names in which                      the client is interested
     */
    setFieldsOfInterest(fieldsOfInterest: string[]): void
    /**
     * Sets the `flags` which control the behaviour of `client_view`.
     * @param flags the #EBookClientViewFlags for `client_view`
     */
    setFlags(flags: EBookContacts.BookClientViewFlags): void
    /**
     * Tells `client_view` to start processing events.
     */
    start(): void
    /**
     * Tells `client_view` to stop processing events.
     */
    stop(): void

    // Own virtual methods of EBook-1.2.EBook.BookClientView

    complete(error: GLib.Error): void
    progress(percent: number, message: string | null): void

    // Own signals of EBook-1.2.EBook.BookClientView

    connect(sigName: "complete", callback: BookClientView.CompleteSignalCallback): number
    on(sigName: "complete", callback: BookClientView.CompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "complete", callback: BookClientView.CompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "complete", callback: BookClientView.CompleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "complete", ...args: any[]): void
    connect(sigName: "objects-added", callback: BookClientView.ObjectsAddedSignalCallback): number
    on(sigName: "objects-added", callback: BookClientView.ObjectsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-added", callback: BookClientView.ObjectsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-added", callback: BookClientView.ObjectsAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "objects-added", ...args: any[]): void
    connect(sigName: "objects-modified", callback: BookClientView.ObjectsModifiedSignalCallback): number
    on(sigName: "objects-modified", callback: BookClientView.ObjectsModifiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-modified", callback: BookClientView.ObjectsModifiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-modified", callback: BookClientView.ObjectsModifiedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "objects-modified", ...args: any[]): void
    connect(sigName: "objects-removed", callback: BookClientView.ObjectsRemovedSignalCallback): number
    on(sigName: "objects-removed", callback: BookClientView.ObjectsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-removed", callback: BookClientView.ObjectsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-removed", callback: BookClientView.ObjectsRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "objects-removed", ...args: any[]): void
    connect(sigName: "progress", callback: BookClientView.ProgressSignalCallback): number
    on(sigName: "progress", callback: BookClientView.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: BookClientView.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: BookClientView.ProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "progress", p0: string | null, ...args: any[]): void

    // Class property signals of EBook-1.2.EBook.BookClientView

    connect(sigName: "notify::client", callback: (...args: any[]) => void): number
    on(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
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
 * Contains only private data the should be read and manipulated using the
 * functions below.
 * @class 
 */
class BookClientView extends GObject.Object {

    // Own properties of EBook-1.2.EBook.BookClientView

    static name: string

    // Constructors of EBook-1.2.EBook.BookClientView

    constructor(config?: BookClientView.ConstructorProperties) 
    _init(config?: BookClientView.ConstructorProperties): void
}

module Destination {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Destination {

    // Own properties of EBook-1.2.EBook.Destination

    __gtype__: number

    // Own fields of EBook-1.2.EBook.Destination

    object: GObject.Object
    priv: DestinationPrivate

    // Owm methods of EBook-1.2.EBook.Destination

    /**
     * Creates a new #EDestination identical to `dest`.
     * @returns A newly created #EDestination, identical to @dest.
     */
    copy(): Destination
    /**
     * Checks if `dest` is blank.
     * @returns %TRUE if @dest is empty, %FALSE otherwise.
     */
    empty(): boolean
    /**
     * Checks if `a` and `b` are equal.
     * @param b an #EDestination
     * @returns %TRUE if the destinations are equal, %FALSE otherwise.
     */
    equal(b: Destination): boolean
    /**
     * Exports a destination to an XML document.
     * @returns An XML string, allocated with g_malloc.
     */
    export(): string | null
    /**
     * Exports the contact information from `dest` to parameters
     * and values in `attr,` suitable for an address book.
     * @param attr an #EVCardAttribute
     */
    exportToVcardAttribute(attr: EBookContacts.VCardAttribute): void
    /**
     * Gets the encoded name and email address, or in the case of lists, the
     * encoded list of email addresses, from `dest`.  The returned string is
     * suitable for use in an email header, but not for displaying to users.
     * @returns an encoded destination string suitable for use in an          email header, or %NULL if the destination was empty
     */
    getAddress(): string | null
    /**
     * Gets the contact `dest` is pointing to, if any.
     * @returns An #EContact, or %NULL if none was set.
     */
    getContact(): EBookContacts.Contact | null
    /**
     * Gets the unique contact ID `dest` is pointing to, if any.
     * @returns A unique contact ID, or %NULL if none was set.
     */
    getContactUid(): string | null
    /**
     * Gets the e-mail address of `dest'`s addressee.
     * @returns An e-mail address, or an empty string if none was set.
     */
    getEmail(): string | null
    /**
     * Gets the index of the e-mail address of the contact that
     * `dest` is pointing to, if any.
     * @returns The e-mail index, or -1 if none was set.
     */
    getEmailNum(): number
    /**
     * Check if `dest` wants to get mail formatted as HTML.
     * @returns %TRUE if destination wants HTML, %FALSE if not.
     */
    getHtmlMailPref(): boolean
    /**
     * Gets the full name of `dest'`s addressee, or if the addressee is
     * a contact list, the name the list was filed under. The name can
     * be encoded in quoted printable.
     * @returns The full name of the addressee, or %NULL if none was set.
     */
    getName(): string | null
    /**
     * Gets the unique source ID `dest` is pointing to, if any. The source
     * ID specifies which address book `dest'`s contact came from.
     * @returns A unique source ID, or %NULL if none was set.
     */
    getSourceUid(): string | null
    /**
     * Generates a textual representation of `dest,` suitable for referring
     * to the destination during user interaction. The name can be encoded
     * in quoted printable.
     * @param includeEmail whether to include the e-mail address
     * @returns A textual representation of the destination.
     */
    getTextrep(includeEmail: boolean): string | null
    /**
     * Checks if `dest` is flagged as an automatic recipient, meaning
     * it was not explicitly specified by the user. This can be used
     * to hide it from some UI elements.
     * @returns %TRUE if destination is an auto recipient, %FALSE otherwise.
     */
    isAutoRecipient(): boolean
    /**
     * Checks if `dest` is a list of addresses.
     * @returns %TRUE if destination is a list, %FALSE if it is an individual.
     */
    isEvolutionList(): boolean
    /**
     * Check if `dest` is to be ignored.
     * @returns %TRUE if this destination should be ignored, else %FALSE.
     */
    isIgnored(): boolean
    /**
     * If `dest` is a list, gets recursively list of all destinations.
     * Everything returned from this function belongs to `dest` and
     * thus should not be freed.
     * @returns A list of elements of type #EDestination, or %NULL.
     */
    listGetDests(): Destination[] | null
    /**
     * If `dest` is a list, gets the list of EDestinations assigned directly
     * to `dest`.
     * The list and its elements belong to `dest,` and should not be freed.
     * @returns A list of elements of type #EDestination, or %NULL.
     */
    listGetRootDests(): Destination[] | null
    /**
     * If `dest` is a list, checks if the addresses in the list
     * should be presented to the user during interaction.
     * @returns %TRUE if addresses should be shown, %FALSE otherwise.
     */
    listShowAddresses(): boolean
    /**
     * Sets the flag indicating if `dest` is an automatic recipient, meaning
     * it was not explicitly specified by the user. This can be used
     * to hide it from some UI elements.
     * @param value the auto recipient flag
     */
    setAutoRecipient(value: boolean): void
    /**
     * Specify the source `dest'`s contact comes from. This is useful
     * if you need to update the contact later.
     * @param client an #EBookClient
     */
    setClient(client: BookClient): void
    /**
     * Sets `dest` to point to one of `contact'`s e-mail addresses
     * indicated by `email_num`.
     * @param contact an #EContact
     * @param emailNum an email index
     */
    setContact(contact: EBookContacts.Contact, emailNum: number): void
    /**
     * Sets `dest` to point to one of the contact specified by `uid'`s e-mail
     * addresses indicated by `email_num`.
     * @param uid a unique contact ID
     * @param emailNum an email index
     */
    setContactUid(uid: string | null, emailNum: number): void
    /**
     * Sets the e-mail address of `dest'`s addressee.
     * @param email the destination's e-mail address
     */
    setEmail(email: string | null): void
    /**
     * Specifies whether `dest` wants to get mail formatted as HTML.
     * @param flag whether the destination wants HTML mail
     */
    setHtmlMailPref(flag: boolean): void
    /**
     * Set the ignore flag on an #EDestination.
     * @param ignored %TRUE if this #EDestination should be ignored.
     */
    setIgnored(ignored: boolean): void
    /**
     * Sets the full name of `dest'`s addressee.
     * @param name the destination's full name
     */
    setName(name: string | null): void
    /**
     * Sets `dest` to point to the name and e-mail address resulting from
     * parsing the supplied string. Useful for user input.
     * @param raw an unparsed string
     */
    setRaw(raw: string | null): void

    // Own virtual methods of EBook-1.2.EBook.Destination

    changed(): void

    // Own signals of EBook-1.2.EBook.Destination

    connect(sigName: "changed", callback: Destination.ChangedSignalCallback): number
    on(sigName: "changed", callback: Destination.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Destination.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Destination.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of EBook-1.2.EBook.Destination

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

class Destination extends GObject.Object {

    // Own properties of EBook-1.2.EBook.Destination

    static name: string

    // Constructors of EBook-1.2.EBook.Destination

    constructor(config?: Destination.ConstructorProperties) 
    /**
     * Creates a new #EDestination with blank values.
     * @constructor 
     * @returns A newly created #EDestination.
     */
    constructor() 
    /**
     * Creates a new #EDestination with blank values.
     * @constructor 
     * @returns A newly created #EDestination.
     */
    static new(): Destination
    _init(config?: Destination.ConstructorProperties): void
    /**
     * Exports multiple #EDestination elements to a single XML document.
     * @param destv a %NULL-terminated array of pointers to #EDestination
     * @returns An XML string, allocated with g_malloc.
     */
    static exportv(destv: Destination[]): string | null
    /**
     * Unrefs the elements of `destv` and frees `destv` itself.
     * @param destv a %NULL-terminated array of pointers to #EDestination
     */
    static freev(destv: Destination[]): void
    /**
     * Generates a joint text representation of all the #EDestination
     * elements in `destv`.
     * @param destv %NULL-terminated array of pointers to #EDestination
     * @returns The text representation of @destv.
     */
    static getTextrepv(destv: Destination[]): string | null
    /**
     * Creates an #EDestination from an XML document.
     * @param str an XML string
     * @returns An #EDestination, or %NULL if the document was not well-formed.
     */
    static import(str: string | null): Destination | null
    /**
     * Creates an array of pointers to #EDestination elements
     * from an XML document.
     * @param str an XML string
     * @returns A %NULL-terminated array of pointers to #EDestination elements.
     */
    static importv(str: string | null): Destination[]
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

    progress: (clientView: BookClientView, percent: number, message: string | null) => void
    complete: (clientView: BookClientView, error: GLib.Error) => void
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

    parentClass: GObject.ObjectClass
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