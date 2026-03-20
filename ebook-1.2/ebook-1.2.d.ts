/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type libxml2 from '@girs/libxml2-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type EDataServer from '@girs/edataserver-1.2';
import type Soup from '@girs/soup-3.0';
import type Json from '@girs/json-1.0';
import type Camel from '@girs/camel-1.2';
import type EBookContacts from '@girs/ebookcontacts-1.2';

export namespace EBook {
    /**
     * EBook-1.2
     */

    /**
     * @gir-type Enum
     */
    export namespace BookStatus {
        export const $gtype: GObject.GType<BookStatus>;
    }

    /**
     * Error codes for the #E_BOOK_ERROR error
     * @gir-type Enum
     * @deprecated since 3.2: Use {@link EBook.BookClient} and it's error codes instead
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

    function book_error_quark(): GLib.Quark;
    /**
     * Synchronously searches for `recipients` S/MIME or PGP certificates either
     * in provided `only_clients` {@link EBook.BookClient}, or, when `null`, in each found
     * address book configured for auto-completion.
     *
     * This function can be used within `camel_session_get_recipient_certificates_sync()`
     * implementation.
     * @param registry an {@link EDataServer.SourceRegistry}
     * @param only_clients optional {@link GLib.SList} of    the {@link EBook.BookClient} objects to search for the certificates in, or `null`
     * @param flags bit-or of {@link Camel.RecipientCertificateFlags}
     * @param recipients a {@link GLib.PtrArray} of recipients' email addresses
     * @param cancellable optional {@link Gio.Cancellable} object, or `null`
     * @returns `true` when no fatal error occurred, `false` otherwise.
     * @since 3.30
     */
    function book_utils_get_recipient_certificates_sync(
        registry: EDataServer.SourceRegistry,
        only_clients: BookClient[] | null,
        flags: Camel.RecipientCertificateFlags | null,
        recipients: string[],
        cancellable?: Gio.Cancellable | null,
    ): [boolean, string[]];
    namespace BookClient {
        // Signal signatures
        interface SignalSignatures extends EDataServer.Client.SignalSignatures {
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::main-context': (pspec: GObject.ParamSpec) => void;
            'notify::online': (pspec: GObject.ParamSpec) => void;
            'notify::opened': (pspec: GObject.ParamSpec) => void;
            'notify::readonly': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                EDataServer.Client.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.Initable.ConstructorProps {
            locale: string;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.2
     */
    class BookClient extends EDataServer.Client implements Gio.AsyncInitable<BookClient>, Gio.Initable {
        static $gtype: GObject.GType<BookClient>;

        // Properties

        /**
         * The currently active locale for this addressbook.
         * @since 3.12
         * @read-only
         */
        get locale(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BookClient.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BookClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: EDataServer.Source): BookClient;

        // Signals

        /** @signal */
        connect<K extends keyof BookClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BookClient.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BookClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BookClient.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BookClient.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BookClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a new {@link EBook.BookClient} for `source`.
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
         * Unlike with `e_book_client_new()`, there is no need to call `e_client_open()`
         * after obtaining the {@link EBook.BookClient}.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_book_client_connect_finish()` to get the result of the operation.
         * @param source an {@link EDataServer.Source}
         * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        static connect(
            source: EDataServer.Source,
            wait_for_connected_seconds: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<BookClient> | null,
        ): void;
        /**
         * @param args
         */
        static connect(...args: never[]): any;
        /**
         * Like `e_book_client_connect()`, except creates the book client for
         * direct read access to the underlying addressbook.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_book_client_connect_direct_finish()` to get the result of the operation.
         * @param source an {@link EDataServer.Source}
         * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        static connect_direct(
            source: EDataServer.Source,
            wait_for_connected_seconds: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<BookClient> | null,
        ): void;
        /**
         * Finishes the operation started with `e_book_client_connect_direct()`.
         * If an error occurs in connecting to the D-Bus service, the function sets
         * `error` and returns `null`.
         *
         * For error handling convenience, any error message returned by this
         * function will have a descriptive prefix that includes the display
         * name of the {@link EDataServer.Source} passed to `e_book_client_connect_direct()`.
         * @param result a {@link Gio.AsyncResult}
         */
        static connect_direct_finish(result: Gio.AsyncResult): BookClient;
        /**
         * Like `e_book_client_connect_sync()`, except creates the book client for
         * direct read access to the underlying addressbook.
         * @param registry an {@link EDataServer.SourceRegistry}
         * @param source an {@link EDataServer.Source}
         * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        static connect_direct_sync(
            registry: EDataServer.SourceRegistry,
            source: EDataServer.Source,
            wait_for_connected_seconds: number,
            cancellable?: Gio.Cancellable | null,
        ): BookClient;
        /**
         * Finishes the operation started with `e_book_client_connect()`.  If an
         * error occurs in connecting to the D-Bus service, the function sets
         * `error` and returns `null`.
         *
         * For error handling convenience, any error message returned by this
         * function will have a descriptive prefix that includes the display
         * name of the {@link EDataServer.Source} passed to `e_book_client_connect()`.
         * @param result a {@link Gio.AsyncResult}
         */
        static connect_finish(result: Gio.AsyncResult): BookClient;
        /**
         * Creates a new {@link EBook.BookClient} for `source`.  If an error occurs, the function
         * will set `error` and return `false`.
         *
         * Unlike with `e_book_client_new()`, there is no need to call
         * `e_client_open_sync()` after obtaining the {@link EBook.BookClient}.
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
         * @param source an {@link EDataServer.Source}
         * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        static connect_sync(
            source: EDataServer.Source,
            wait_for_connected_seconds: number,
            cancellable?: Gio.Cancellable | null,
        ): BookClient;
        /**
         * Get the {@link EBookContacts.Contact} referring to the user of the address book
         * and set it in `out_contact` and `out_client`.
         * @param registry an {@link EDataServer.SourceRegistry}
         */
        static get_self(registry: EDataServer.SourceRegistry): [boolean, EBookContacts.Contact, BookClient];
        /**
         * Check if `contact` is the user of the address book.
         * @param contact an {@link EBookContacts.Contact}
         */
        static is_self(contact: EBookContacts.Contact): boolean;

        // Methods

        /**
         * Adds `contact` to `client`.
         * The call is finished by `e_book_client_add_contact_finish()`
         * from the `callback`.
         * @param contact an {@link EBookContacts.Contact}
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        add_contact(
            contact: EBookContacts.Contact,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Adds `contact` to `client`.
         * The call is finished by `e_book_client_add_contact_finish()`
         * from the `callback`.
         * @param contact an {@link EBookContacts.Contact}
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        add_contact(
            contact: EBookContacts.Contact,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Adds `contact` to `client`.
         * The call is finished by `e_book_client_add_contact_finish()`
         * from the `callback`.
         * @param contact an {@link EBookContacts.Contact}
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        add_contact(
            contact: EBookContacts.Contact,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes previous call of `e_book_client_add_contact()` and
         * sets `out_added_uid` to a UID of a newly added contact.
         * This string should be freed with `g_free()`.
         *
         * Note: This is not modifying original {@link EBookContacts.Contact}.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        add_contact_finish(result: Gio.AsyncResult): [boolean, string];
        /**
         * Adds `contact` to `client` and
         * sets `out_added_uid` to a UID of a newly added contact.
         * This string should be freed with `g_free()`.
         *
         * Note: This is not modifying original `contact`, thus if it's needed,
         * then use e_contact_set (contact, E_CONTACT_UID, new_uid).
         * @param contact an {@link EBookContacts.Contact}
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @returns `true` if successful, `false` otherwise.
         */
        add_contact_sync(
            contact: EBookContacts.Contact,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Adds `contacts` to `client`.
         * The call is finished by `e_book_client_add_contacts_finish()`
         * from the `callback`.
         * @param contacts a {@link GLib.SList} of {@link EBookContacts.Contact} objects to add
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        add_contacts(
            contacts: EBookContacts.Contact[],
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string[] | null>;
        /**
         * Adds `contacts` to `client`.
         * The call is finished by `e_book_client_add_contacts_finish()`
         * from the `callback`.
         * @param contacts a {@link GLib.SList} of {@link EBookContacts.Contact} objects to add
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        add_contacts(
            contacts: EBookContacts.Contact[],
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Adds `contacts` to `client`.
         * The call is finished by `e_book_client_add_contacts_finish()`
         * from the `callback`.
         * @param contacts a {@link GLib.SList} of {@link EBookContacts.Contact} objects to add
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        add_contacts(
            contacts: EBookContacts.Contact[],
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[] | null> | void;
        /**
         * Finishes previous call of `e_book_client_add_contacts()` and
         * sets `out_added_uids` to the UIDs of newly added contacts if successful.
         * This {@link GLib.SList} should be freed with `e_client_util_free_string_slist()`.
         *
         * If any of the contacts cannot be inserted, all of the insertions will be
         * reverted and this method will return `false`.
         *
         * Note: This is not modifying original {@link EBookContacts.Contact} objects.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        add_contacts_finish(result: Gio.AsyncResult): [boolean, string[] | null];
        /**
         * Adds `contacts` to `client` and
         * sets `out_added_uids` to the UIDs of newly added contacts if successful.
         * This {@link GLib.SList} should be freed with `e_client_util_free_string_slist()`.
         *
         * If any of the contacts cannot be inserted, all of the insertions will be
         * reverted and this method will return `false`.
         *
         * Note: This is not modifying original `contacts`, thus if it's needed,
         * then use e_contact_set (contact, E_CONTACT_UID, new_uid).
         * @param contacts a {@link GLib.SList} of {@link EBookContacts.Contact} objects to add
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @returns `true` if successful, `false` otherwise.
         */
        add_contacts_sync(
            contacts: EBookContacts.Contact[],
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string[] | null];
        /**
         * Asynchronously checks whether contains an `email_address`. When the `email_address`
         * contains multiple addresses, then returns `true` when at least one
         * address exists in the address book.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_book_client_contains_email_finish()` to get the result of the
         * operation.
         * @param email_address an email address
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        contains_email(email_address: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously checks whether contains an `email_address`. When the `email_address`
         * contains multiple addresses, then returns `true` when at least one
         * address exists in the address book.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_book_client_contains_email_finish()` to get the result of the
         * operation.
         * @param email_address an email address
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        contains_email(
            email_address: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously checks whether contains an `email_address`. When the `email_address`
         * contains multiple addresses, then returns `true` when at least one
         * address exists in the address book.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_book_client_contains_email_finish()` to get the result of the
         * operation.
         * @param email_address an email address
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        contains_email(
            email_address: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes previous call of `e_book_client_contains_email()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        contains_email_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param email_address
         * @param cancellable
         */
        contains_email_sync(email_address: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Receive {@link EBookContacts.Contact} from the `client` for the given `uid`.
         * The call is finished by `e_book_client_get_contact_finish()`
         * from the `callback`.
         * @param uid a unique string ID specifying the contact
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        get_contact(
            uid: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<EBookContacts.Contact | null>;
        /**
         * Receive {@link EBookContacts.Contact} from the `client` for the given `uid`.
         * The call is finished by `e_book_client_get_contact_finish()`
         * from the `callback`.
         * @param uid a unique string ID specifying the contact
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        get_contact(
            uid: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Receive {@link EBookContacts.Contact} from the `client` for the given `uid`.
         * The call is finished by `e_book_client_get_contact_finish()`
         * from the `callback`.
         * @param uid a unique string ID specifying the contact
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        get_contact(
            uid: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<EBookContacts.Contact | null> | void;
        /**
         * Finishes previous call of `e_book_client_get_contact()`.
         * If successful, then the `out_contact` is set to newly allocated
         * {@link EBookContacts.Contact}, which should be freed with `g_object_unref()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        get_contact_finish(result: Gio.AsyncResult): [boolean, EBookContacts.Contact | null];
        /**
         * Receive {@link EBookContacts.Contact} from the `client` for the gived `uid`.
         * If successful, then the `out_contact` is set to newly allocated
         * {@link EBookContacts.Contact}, which should be freed with `g_object_unref()`.
         * @param uid a unique string ID specifying the contact
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @returns `true` if successful, `false` otherwise.
         */
        get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): [boolean, EBookContacts.Contact];
        /**
         * Query `client` with `sexp`, receiving a list of contacts which
         * matched. The call is finished by `e_book_client_get_contacts_finish()`
         * from the `callback`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        get_contacts(sexp: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<EBookContacts.Contact[]>;
        /**
         * Query `client` with `sexp`, receiving a list of contacts which
         * matched. The call is finished by `e_book_client_get_contacts_finish()`
         * from the `callback`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        get_contacts(
            sexp: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Query `client` with `sexp`, receiving a list of contacts which
         * matched. The call is finished by `e_book_client_get_contacts_finish()`
         * from the `callback`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        get_contacts(
            sexp: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<EBookContacts.Contact[]> | void;
        /**
         * Finishes previous call of `e_book_client_get_contacts()`.
         * If successful, then the `out_contacts` is set to newly allocated list of
         * {@link EBookContacts.Contact}(s), which should be freed with `e_client_util_free_object_slist()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        get_contacts_finish(result: Gio.AsyncResult): [boolean, EBookContacts.Contact[]];
        /**
         * Query `client` with `sexp`, receiving a list of contacts which matched.
         * If successful, then the `out_contacts` is set to newly allocated {@link GLib.SList} of
         * {@link EBookContacts.Contact}(s), which should be freed with `e_client_util_free_object_slist()`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @returns `true` if successful, `false` otherwise.
         */
        get_contacts_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, EBookContacts.Contact[]];
        /**
         * Query `client` with `sexp`, receiving a list of contacts UIDs which
         * matched. The call is finished by `e_book_client_get_contacts_uids_finish()`
         * from the `callback`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        get_contacts_uids(sexp: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<string[]>;
        /**
         * Query `client` with `sexp`, receiving a list of contacts UIDs which
         * matched. The call is finished by `e_book_client_get_contacts_uids_finish()`
         * from the `callback`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        get_contacts_uids(
            sexp: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Query `client` with `sexp`, receiving a list of contacts UIDs which
         * matched. The call is finished by `e_book_client_get_contacts_uids_finish()`
         * from the `callback`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        get_contacts_uids(
            sexp: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[]> | void;
        /**
         * Finishes previous call of `e_book_client_get_contacts_uids()`.
         * If successful, then the `out_contact_uids` is set to newly allocated list
         * of UID strings, which should be freed with `e_client_util_free_string_slist()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        get_contacts_uids_finish(result: Gio.AsyncResult): [boolean, string[]];
        /**
         * Query `client` with `sexp`, receiving a list of contacts UIDs which matched.
         * If successful, then the `out_contact_uids` is set to newly allocated list
         * of UID strings, which should be freed with `e_client_util_free_string_slist()`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @returns `true` if successful, `false` otherwise.
         */
        get_contacts_uids_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, string[]];
        /**
         * Create an {@link EBook.BookClientCursor}.
         * The call is finished by `e_book_client_get_cursor_finish()`
         * from the `callback`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param sort_fields an array of `EContactFields` to sort the cursor with
         * @param sort_types an array of `EBookCursorSortTypes` to complement `sort_fields`
         * @param n_fields the length of the input `sort_fields` and `sort_types` arrays
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        get_cursor(
            sexp: string,
            sort_fields: EBookContacts.ContactField | null,
            sort_types: EBookContacts.BookCursorSortType | null,
            n_fields: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<BookClientCursor>;
        /**
         * Create an {@link EBook.BookClientCursor}.
         * The call is finished by `e_book_client_get_cursor_finish()`
         * from the `callback`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param sort_fields an array of `EContactFields` to sort the cursor with
         * @param sort_types an array of `EBookCursorSortTypes` to complement `sort_fields`
         * @param n_fields the length of the input `sort_fields` and `sort_types` arrays
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        get_cursor(
            sexp: string,
            sort_fields: EBookContacts.ContactField | null,
            sort_types: EBookContacts.BookCursorSortType | null,
            n_fields: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Create an {@link EBook.BookClientCursor}.
         * The call is finished by `e_book_client_get_cursor_finish()`
         * from the `callback`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param sort_fields an array of `EContactFields` to sort the cursor with
         * @param sort_types an array of `EBookCursorSortTypes` to complement `sort_fields`
         * @param n_fields the length of the input `sort_fields` and `sort_types` arrays
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        get_cursor(
            sexp: string,
            sort_fields: EBookContacts.ContactField | null,
            sort_types: EBookContacts.BookCursorSortType | null,
            n_fields: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<BookClientCursor> | void;
        /**
         * Finishes previous call of `e_book_client_get_cursor()`.
         * If successful, then the `out_cursor` is set to newly create
         * {@link EBook.BookClientCursor}, the cursor should be freed with `g_object_unref()`
         * when no longer needed.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        get_cursor_finish(result: Gio.AsyncResult): [boolean, BookClientCursor];
        /**
         * Create an {@link EBook.BookClientCursor}. If successful, then the `out_cursor` is set
         * to newly allocated {@link EBook.BookClientCursor}, the cursor should be freed with `g_object_unref()`
         * when no longer needed.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param sort_fields an array of `EContactFields` to sort the cursor with
         * @param sort_types an array of `EBookCursorSortTypes` to complement `sort_fields`
         * @param n_fields the length of the input `sort_fields` and `sort_types` arrays
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @returns `true` if successful, `false` otherwise.
         */
        get_cursor_sync(
            sexp: string,
            sort_fields: EBookContacts.ContactField | null,
            sort_types: EBookContacts.BookCursorSortType | null,
            n_fields: number,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, BookClientCursor];
        /**
         * Reports the locale in use for `client`. The addressbook might sort contacts
         * in different orders, or store and compare phone numbers in different ways
         * depending on the currently set locale.
         *
         * Locales can change dynamically if systemd decides to change the locale, so
         * it's important to listen for notifications on the {@link EBook.BookClient.locale} property
         * if you depend on sorted result lists. Ordered results should be reloaded
         * after a locale change is detected.
         * @returns The currently set locale for `client`
         */
        get_locale(): string;
        /**
         * Gets a preferred vCard version by the `client` backend. When not known,
         * the latest supported vCard version is returned.
         * @returns an {@link EBookContacts.VCardVersion} as the preferred vCard version
         */
        get_prefer_vcard_version(): EBookContacts.VCardVersion;
        /**
         * Query `client` with `sexp`, creating an {@link EBook.BookClientView}.
         * The call is finished by `e_book_client_get_view_finish()`
         * from the `callback`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        get_view(sexp: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<BookClientView>;
        /**
         * Query `client` with `sexp`, creating an {@link EBook.BookClientView}.
         * The call is finished by `e_book_client_get_view_finish()`
         * from the `callback`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        get_view(
            sexp: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Query `client` with `sexp`, creating an {@link EBook.BookClientView}.
         * The call is finished by `e_book_client_get_view_finish()`
         * from the `callback`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        get_view(
            sexp: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<BookClientView> | void;
        /**
         * Finishes previous call of `e_book_client_get_view()`.
         * If successful, then the `out_view` is set to newly allocated
         * {@link EBook.BookClientView}, which should be freed with `g_object_unref()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        get_view_finish(result: Gio.AsyncResult): [boolean, BookClientView];
        /**
         * Query `client` with `sexp`, creating an {@link EBook.BookClientView}.
         * If successful, then the `out_view` is set to newly allocated
         * {@link EBook.BookClientView}, which should be freed with `g_object_unref()`.
         *
         * Note: `sexp` can be obtained through {@link EBookContacts.BookQuery}, by converting it
         * to a string with `e_book_query_to_string()`.
         * @param sexp an S-expression representing the query
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @returns `true` if successful, `false` otherwise.
         */
        get_view_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, BookClientView];
        /**
         * Applies the changes made to `contact` to the stored version in `client`.
         * The call is finished by `e_book_client_modify_contact_finish()`
         * from the `callback`.
         * @param contact an {@link EBookContacts.Contact}
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        modify_contact(
            contact: EBookContacts.Contact,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Applies the changes made to `contact` to the stored version in `client`.
         * The call is finished by `e_book_client_modify_contact_finish()`
         * from the `callback`.
         * @param contact an {@link EBookContacts.Contact}
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        modify_contact(
            contact: EBookContacts.Contact,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Applies the changes made to `contact` to the stored version in `client`.
         * The call is finished by `e_book_client_modify_contact_finish()`
         * from the `callback`.
         * @param contact an {@link EBookContacts.Contact}
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        modify_contact(
            contact: EBookContacts.Contact,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes previous call of `e_book_client_modify_contact()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        modify_contact_finish(result: Gio.AsyncResult): boolean;
        /**
         * Applies the changes made to `contact` to the stored version in `client`.
         * @param contact an {@link EBookContacts.Contact}
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @returns `true` if successful, `false` otherwise.
         */
        modify_contact_sync(
            contact: EBookContacts.Contact,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Applies the changes made to `contacts` to the stored versions in `client`.
         * The call is finished by `e_book_client_modify_contacts_finish()`
         * from the `callback`.
         * @param contacts a {@link GLib.SList} of {@link EBookContacts.Contact} objects
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        modify_contacts(
            contacts: EBookContacts.Contact[],
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Applies the changes made to `contacts` to the stored versions in `client`.
         * The call is finished by `e_book_client_modify_contacts_finish()`
         * from the `callback`.
         * @param contacts a {@link GLib.SList} of {@link EBookContacts.Contact} objects
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        modify_contacts(
            contacts: EBookContacts.Contact[],
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Applies the changes made to `contacts` to the stored versions in `client`.
         * The call is finished by `e_book_client_modify_contacts_finish()`
         * from the `callback`.
         * @param contacts a {@link GLib.SList} of {@link EBookContacts.Contact} objects
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        modify_contacts(
            contacts: EBookContacts.Contact[],
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes previous call of `e_book_client_modify_contacts()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        modify_contacts_finish(result: Gio.AsyncResult): boolean;
        /**
         * Applies the changes made to `contacts` to the stored versions in `client`.
         * @param contacts a {@link GLib.SList} of {@link EBookContacts.Contact} objects
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @returns `true` if successful, `false` otherwise.
         */
        modify_contacts_sync(
            contacts: EBookContacts.Contact[],
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Removes `contact` from the `client`.
         * The call is finished by `e_book_client_remove_contact_finish()`
         * from the `callback`.
         * @param contact an {@link EBookContacts.Contact}
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        remove_contact(
            contact: EBookContacts.Contact,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Removes `contact` from the `client`.
         * The call is finished by `e_book_client_remove_contact_finish()`
         * from the `callback`.
         * @param contact an {@link EBookContacts.Contact}
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        remove_contact(
            contact: EBookContacts.Contact,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Removes `contact` from the `client`.
         * The call is finished by `e_book_client_remove_contact_finish()`
         * from the `callback`.
         * @param contact an {@link EBookContacts.Contact}
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        remove_contact(
            contact: EBookContacts.Contact,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Removes contact with `uid` from the `client`.
         * The call is finished by `e_book_client_remove_contact_by_uid_finish()`
         * from the `callback`.
         * @param uid a UID of a contact to remove
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        remove_contact_by_uid(
            uid: string,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Removes contact with `uid` from the `client`.
         * The call is finished by `e_book_client_remove_contact_by_uid_finish()`
         * from the `callback`.
         * @param uid a UID of a contact to remove
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        remove_contact_by_uid(
            uid: string,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Removes contact with `uid` from the `client`.
         * The call is finished by `e_book_client_remove_contact_by_uid_finish()`
         * from the `callback`.
         * @param uid a UID of a contact to remove
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        remove_contact_by_uid(
            uid: string,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes previous call of `e_book_client_remove_contact_by_uid()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        remove_contact_by_uid_finish(result: Gio.AsyncResult): boolean;
        /**
         * Removes contact with `uid` from the `client`.
         * @param uid a UID of a contact to remove
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @returns `true` if successful, `false` otherwise.
         */
        remove_contact_by_uid_sync(
            uid: string,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Finishes previous call of `e_book_client_remove_contact()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        remove_contact_finish(result: Gio.AsyncResult): boolean;
        /**
         * Removes `contact` from the `client`.
         * @param contact an {@link EBookContacts.Contact}
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @returns `true` if successful, `false` otherwise.
         */
        remove_contact_sync(
            contact: EBookContacts.Contact,
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Removes the contacts with uids from the list `uids` from `client`.  This is
         * always more efficient than calling `e_book_client_remove_contact()` if you
         * have more than one uid to remove, as some backends can implement it
         * as a batch request.
         * The call is finished by `e_book_client_remove_contacts_finish()`
         * from the `callback`.
         * @param uids a {@link GLib.SList} of UIDs to remove
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         */
        remove_contacts(
            uids: string[],
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Removes the contacts with uids from the list `uids` from `client`.  This is
         * always more efficient than calling `e_book_client_remove_contact()` if you
         * have more than one uid to remove, as some backends can implement it
         * as a batch request.
         * The call is finished by `e_book_client_remove_contacts_finish()`
         * from the `callback`.
         * @param uids a {@link GLib.SList} of UIDs to remove
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        remove_contacts(
            uids: string[],
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Removes the contacts with uids from the list `uids` from `client`.  This is
         * always more efficient than calling `e_book_client_remove_contact()` if you
         * have more than one uid to remove, as some backends can implement it
         * as a batch request.
         * The call is finished by `e_book_client_remove_contacts_finish()`
         * from the `callback`.
         * @param uids a {@link GLib.SList} of UIDs to remove
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @param callback callback to call when a result is ready
         */
        remove_contacts(
            uids: string[],
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes previous call of `e_book_client_remove_contacts()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful, `false` otherwise.
         */
        remove_contacts_finish(result: Gio.AsyncResult): boolean;
        /**
         * Removes the contacts with uids from the list `uids` from `client`.  This is
         * always more efficient than calling `e_book_client_remove_contact()` if you
         * have more than one uid to remove, as some backends can implement it
         * as a batch request.
         * @param uids a {@link GLib.SList} of UIDs to remove
         * @param opflags bit-or of {@link EBookContacts.BookOperationFlags}
         * @param cancellable a {@link Gio.Cancellable}; can be `null`
         * @returns `true` if successful, `false` otherwise.
         */
        remove_contacts_sync(
            uids: string[],
            opflags: EBookContacts.BookOperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Specify that `contact` residing in `client` is the {@link EBookContacts.Contact} that
         * refers to the user of the address book.
         * @param contact an {@link EBookContacts.Contact}
         * @returns `true` if successful, `false` otherwise.
         */
        set_self(contact: EBookContacts.Contact): boolean;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         *
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         *
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         *
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         *
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         *
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         *
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): BookClient;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         *
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         *
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace BookClientCursor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Indicates that the addressbook has been modified and
             * that any content currently being displayed from the current
             * cursor position should be reloaded.
             *
             * This signal is guaranteed to be delivered in the {@link GLib.MainContext}
             * which was the thread default context at cursor creation time.
             * @signal
             * @since 3.12
             * @run-last
             */
            refresh: () => void;
            'notify::alphabet': (pspec: GObject.ParamSpec) => void;
            'notify::client': (pspec: GObject.ParamSpec) => void;
            'notify::connection': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::sort-fields': (pspec: GObject.ParamSpec) => void;
            'notify::total': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            alphabet: string[];
            client: BookClient;
            connection: Gio.DBusConnection;
            context: GLib.MainContext;
            object_path: string;
            objectPath: string;
            position: number;
            sort_fields: string[];
            sortFields: string[];
            total: number;
        }
    }

    /**
     * Contains only private data.
     * @gir-type Class
     * @since 3.12
     */
    class BookClientCursor extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<BookClientCursor>;

        // Properties

        /**
         * The currently <link linkend="cursor-alphabet">active alphabet</link>.
         *
         * The value is a `null` terminated array of strings,
         * each string is suitable to display a specific letter
         * in the active alphabet.
         *
         * Indexes from this array can later be used with
         * `e_book_client_cursor_set_alphabetic_index()`.
         *
         * This property will automatically change if the
         * active locale of the addressbook server changes.
         *
         * Property change notifications are guaranteed to be
         * delivered in the {@link GLib.MainContext} which was the thread
         * default context at cursor creation time.
         * @since 3.12
         * @read-only
         */
        get alphabet(): string[];
        /**
         * The {@link EBook.BookClient} which this cursor was created for
         * @since 3.12
         * @construct-only
         */
        get client(): BookClient;
        /**
         * The {@link Gio.DBusConnection} to the addressbook server.
         *
         * <note><para>This is an internal parameter for constructing the
         * cursor, to construct the cursor use `e_book_client_get_cursor()`.
         * </para></note>
         * @since 3.12
         * @construct-only
         */
        set connection(val: Gio.DBusConnection);
        /**
         * The {@link GLib.MainContext} in which the {@link EBook.BookClient} created this cursor.
         *
         * <note><para>This is an internal parameter for constructing the
         * cursor, to construct the cursor use `e_book_client_get_cursor()`.
         * </para></note>
         * @since 3.12
         * @construct-only
         */
        set context(val: GLib.MainContext);
        /**
         * The D-Bus object path to find the server side cursor object.
         *
         * <note><para>This is an internal parameter for constructing the
         * cursor, to construct the cursor use `e_book_client_get_cursor()`.
         * </para></note>
         * @since 3.12
         * @construct-only
         */
        set object_path(val: string);
        /**
         * The D-Bus object path to find the server side cursor object.
         *
         * <note><para>This is an internal parameter for constructing the
         * cursor, to construct the cursor use `e_book_client_get_cursor()`.
         * </para></note>
         * @since 3.12
         * @construct-only
         */
        set objectPath(val: string);
        /**
         * The current cursor position in the cursor's result list.
         *
         * More specifically, the cursor position is defined as
         * the number of contacts leading up to the current
         * cursor position, inclusive of the current cursor
         * position.
         *
         * If the position value is 0, then the cursor is positioned
         * before the contact list in the symbolic {@link EBookContacts.BookCursorOrigin.BEGIN}
         * position. If the position value is greater than
         * {@link EBook.BookClientCursor.total}, this indicates that the cursor is
         * positioned after the contact list in the symbolic
         * {@link EBookContacts.BookCursorOrigin.END} position.
         *
         * Property change notifications are guaranteed to be
         * delivered in the {@link GLib.MainContext} which was the thread
         * default context at cursor creation time.
         * @since 3.12
         * @read-only
         */
        get position(): number;
        /**
         * The {@link EBookContacts.ContactField} names to sort this cursor with
         *
         * <note><para>This is an internal parameter for constructing the
         * cursor, to construct the cursor use `e_book_client_get_cursor()`.
         * </para></note>
         * @since 3.12
         * @construct-only
         */
        set sort_fields(val: string[]);
        /**
         * The {@link EBookContacts.ContactField} names to sort this cursor with
         *
         * <note><para>This is an internal parameter for constructing the
         * cursor, to construct the cursor use `e_book_client_get_cursor()`.
         * </para></note>
         * @since 3.12
         * @construct-only
         */
        set sortFields(val: string[]);
        /**
         * The total number of contacts which satisfy the cursor's query.
         *
         * Property change notifications are guaranteed to be
         * delivered in the {@link GLib.MainContext} which was the thread
         * default context at cursor creation time.
         * @since 3.12
         * @read-only
         */
        get total(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BookClientCursor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BookClientCursor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BookClientCursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BookClientCursor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BookClientCursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BookClientCursor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BookClientCursor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BookClientCursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * The class handler for the {@link EBook.BookClientCursor.SignalSignatures.refresh | EBook.BookClientCursor::refresh} signal
         * @virtual
         */
        vfunc_refresh(): void;

        // Methods

        /**
         * Fetches the array of displayable labels for the <link linkend="cursor-alphabet">active alphabet</link>.
         *
         * The active alphabet is based on the current locale configuration of the
         * addressbook, and can be a different alphabet for locales requiring non-Latin
         * language scripts. These UTF-8 labels are appropriate to display in a user
         * interface to represent the alphabetic position of the cursor in the user's
         * native alphabet.
         *
         * The `underflow`, `inflow` and `overflow` parameters allow one to observe which
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
         * @returns The array of displayable labels for each index in the active alphabet.
         */
        get_alphabet(): [string[], number, number, number, number];
        /**
         * Checks which alphabetic index `contact` would be sorted
         * into according to `cursor`.
         *
         * So long as the active {@link EBook.BookClientCursor.alphabet} does
         * not change, the returned index will be a valid position
         * in the array of labels returned by `e_book_client_cursor_get_alphabet()`.
         *
         * If the index returned by this function is needed for
         * any extended period of time, it should be recalculated
         * whenever the {@link EBook.BookClientCursor.alphabet} changes.
         * @param contact the {@link EBookContacts.Contact} to check
         * @returns The alphabetic index of `contact` in `cursor`.
         */
        get_contact_alphabetic_index(contact: EBookContacts.Contact): number;
        /**
         * Fetches the number of contacts leading up to the current
         * cursor position, inclusive of the current cursor position.
         *
         * The position value can be anywhere from 0 to the total
         * number of contacts plus one. A value of 0 indicates
         * that the cursor is positioned before the contact list in
         * the symbolic {@link EBookContacts.BookCursorOrigin.BEGIN} state. If
         * the position is greater than the total, as returned by
         * `e_book_client_cursor_get_total()`, then the cursor is positioned
         * after the last contact in the symbolic {@link EBookContacts.BookCursorOrigin.END} position.
         * @returns The current cursor position
         */
        get_position(): number;
        /**
         * Fetches the total number of contacts in the addressbook
         * which match `cursor`'s query
         * @returns The total number of contacts matching `cursor`'s query
         */
        get_total(): number;
        /**
         * Returns the {@link EBook.BookClientCursor.client} associated with `cursor`.
         *
         * The returned {@link EBook.BookClient} is referenced because the cursor
         * does not keep a strong reference to the client.
         *
         * Unreference the {@link EBook.BookClient} with `g_object_unref()` when finished with it.
         * @returns an {@link EBook.BookClient}
         */
        ref_client(): BookClient;
        /**
         * Sets the current cursor position to point to an <link linkend="cursor-alphabet">Alphabetic Index</link>.
         *
         * See: `e_book_client_cursor_set_alphabetic_index_sync()`.
         *
         * This asynchronous call is completed with a call to
         * `e_book_client_cursor_set_alphabetic_index_finish()` from the specified `callback`.
         * @param index the alphabetic index
         * @param cancellable a {@link Gio.Cancellable} to optionally cancel this operation while in progress
         */
        set_alphabetic_index(index: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Sets the current cursor position to point to an <link linkend="cursor-alphabet">Alphabetic Index</link>.
         *
         * See: `e_book_client_cursor_set_alphabetic_index_sync()`.
         *
         * This asynchronous call is completed with a call to
         * `e_book_client_cursor_set_alphabetic_index_finish()` from the specified `callback`.
         * @param index the alphabetic index
         * @param cancellable a {@link Gio.Cancellable} to optionally cancel this operation while in progress
         * @param callback callback to call when a result is ready
         */
        set_alphabetic_index(
            index: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Sets the current cursor position to point to an <link linkend="cursor-alphabet">Alphabetic Index</link>.
         *
         * See: `e_book_client_cursor_set_alphabetic_index_sync()`.
         *
         * This asynchronous call is completed with a call to
         * `e_book_client_cursor_set_alphabetic_index_finish()` from the specified `callback`.
         * @param index the alphabetic index
         * @param cancellable a {@link Gio.Cancellable} to optionally cancel this operation while in progress
         * @param callback callback to call when a result is ready
         */
        set_alphabetic_index(
            index: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Completes an asynchronous call initiated by `e_book_client_cursor_set_alphabetic_index()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, otherwise `false` is returned and `error` is set.
         */
        set_alphabetic_index_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the cursor to point to an <link linkend="cursor-alphabet">Alphabetic Index</link>.
         *
         * After setting the alphabetic index, for example the
         * index for letter 'E', then further calls to `e_book_client_cursor_step()`
         * will return results starting with the letter 'E' (or results starting
         * with the last result in 'D' when navigating through cursor results
         * in reverse).
         *
         * The passed index must be a valid index into the alphabet parameters
         * returned by `e_book_client_cursor_get_alphabet()`.
         *
         * If this method is called from the same thread context in which
         * the cursor was created, then the updates to the {@link EBook.BookClientCursor.position}
         * property are guaranteed to be delivered synchronously upon successful completion
         * of moving the cursor. Otherwise, notifications will be delivered asynchronously
         * in the cursor's original thread context.
         *
         * If this method completes with an {@link EDataServer.ClientError.OUT_OF_SYNC} error, it is an
         * indication that the addressbook has been set into a new locale and it would be
         * unsafe to set the alphabetic index at this time. If you receive an out of sync
         * error from this method, then you should wait until an {@link EBook.BookClientCursor.alphabet}
         * property change notification is delivered and then proceed to load the new
         * alphabet before trying to set any alphabetic index.
         * @param index the alphabetic index
         * @param cancellable a {@link Gio.Cancellable} to optionally cancel this operation while in progress
         * @returns `true` on success, otherwise `false` is returned and `error` is set.
         */
        set_alphabetic_index_sync(index: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the <link linkend="cursor-search">Search Expression</link> for the cursor.
         *
         * See: `e_book_client_cursor_set_sexp_sync()`.
         *
         * This asynchronous call is completed with a call to
         * `e_book_client_cursor_set_sexp_finish()` from the specified `callback`.
         * @param sexp the new search expression for `cursor`
         * @param cancellable a {@link Gio.Cancellable} to optionally cancel this operation while in progress
         */
        set_sexp(sexp: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Sets the <link linkend="cursor-search">Search Expression</link> for the cursor.
         *
         * See: `e_book_client_cursor_set_sexp_sync()`.
         *
         * This asynchronous call is completed with a call to
         * `e_book_client_cursor_set_sexp_finish()` from the specified `callback`.
         * @param sexp the new search expression for `cursor`
         * @param cancellable a {@link Gio.Cancellable} to optionally cancel this operation while in progress
         * @param callback callback to call when a result is ready
         */
        set_sexp(
            sexp: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Sets the <link linkend="cursor-search">Search Expression</link> for the cursor.
         *
         * See: `e_book_client_cursor_set_sexp_sync()`.
         *
         * This asynchronous call is completed with a call to
         * `e_book_client_cursor_set_sexp_finish()` from the specified `callback`.
         * @param sexp the new search expression for `cursor`
         * @param cancellable a {@link Gio.Cancellable} to optionally cancel this operation while in progress
         * @param callback callback to call when a result is ready
         */
        set_sexp(
            sexp: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Completes an asynchronous call initiated by `e_book_client_cursor_set_sexp()`, reporting
         * whether the new search expression was accepted.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, otherwise `false` is returned and `error` is set.
         */
        set_sexp_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the <link linkend="cursor-search">Search Expression</link> for the cursor.
         *
         * A side effect of setting the search expression is that the
         * <link linkend="cursor-pos-total">position and total</link>
         * properties will be updated.
         *
         * If this method is called from the same thread context in which
         * the cursor was created, then the updates to the {@link EBook.BookClientCursor.position}
         * and {@link EBook.BookClientCursor.total} properties are guaranteed to be delivered
         * synchronously upon successful completion of setting the search expression.
         * Otherwise, notifications will be delivered asynchronously in the cursor's
         * original thread context.
         *
         * If the backend does not support the given search expression,
         * an {@link EDataServer.ClientError.INVALID_QUERY} error will be set.
         * @param sexp the new search expression for `cursor`
         * @param cancellable a {@link Gio.Cancellable} to optionally cancel this operation while in progress
         * @returns `true` on success, otherwise `false` is returned and `error` is set.
         */
        set_sexp_sync(sexp: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * <link linkend="cursor-iteration">Steps the cursor through the results</link> by
         * a maximum of `count` and fetch the results traversed.
         *
         * See: `e_book_client_cursor_step_sync()`.
         *
         * This asynchronous call is completed with a call to
         * `e_book_client_cursor_step_finish()` from the specified `callback`.
         * @param flags The {@link EBookContacts.BookCursorStepFlags} for this step
         * @param origin The {@link EBookContacts.BookCursorOrigin} from whence to step
         * @param count a positive or negative amount of contacts to try and fetch
         * @param cancellable a {@link Gio.Cancellable} to optionally cancel this operation while in progress
         */
        step(
            flags: EBookContacts.BookCursorStepFlags | null,
            origin: EBookContacts.BookCursorOrigin | null,
            count: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[number, EBookContacts.Contact[] | null]>;
        /**
         * <link linkend="cursor-iteration">Steps the cursor through the results</link> by
         * a maximum of `count` and fetch the results traversed.
         *
         * See: `e_book_client_cursor_step_sync()`.
         *
         * This asynchronous call is completed with a call to
         * `e_book_client_cursor_step_finish()` from the specified `callback`.
         * @param flags The {@link EBookContacts.BookCursorStepFlags} for this step
         * @param origin The {@link EBookContacts.BookCursorOrigin} from whence to step
         * @param count a positive or negative amount of contacts to try and fetch
         * @param cancellable a {@link Gio.Cancellable} to optionally cancel this operation while in progress
         * @param callback callback to call when a result is ready
         */
        step(
            flags: EBookContacts.BookCursorStepFlags | null,
            origin: EBookContacts.BookCursorOrigin | null,
            count: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * <link linkend="cursor-iteration">Steps the cursor through the results</link> by
         * a maximum of `count` and fetch the results traversed.
         *
         * See: `e_book_client_cursor_step_sync()`.
         *
         * This asynchronous call is completed with a call to
         * `e_book_client_cursor_step_finish()` from the specified `callback`.
         * @param flags The {@link EBookContacts.BookCursorStepFlags} for this step
         * @param origin The {@link EBookContacts.BookCursorOrigin} from whence to step
         * @param count a positive or negative amount of contacts to try and fetch
         * @param cancellable a {@link Gio.Cancellable} to optionally cancel this operation while in progress
         * @param callback callback to call when a result is ready
         */
        step(
            flags: EBookContacts.BookCursorStepFlags | null,
            origin: EBookContacts.BookCursorOrigin | null,
            count: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[number, EBookContacts.Contact[] | null]> | void;
        /**
         * Completes an asynchronous call initiated by `e_book_client_cursor_step()`, fetching
         * any contacts which might have been returned by the call.
         * @param result a {@link Gio.AsyncResult}
         * @returns The number of contacts traversed if successful, otherwise -1 is returned and `error` is set.
         */
        step_finish(result: Gio.AsyncResult): [number, EBookContacts.Contact[] | null];
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
         * will however trigger an {@link EDataServer.ClientError.QUERY_REFUSED} error.
         *
         * If {@link EBookContacts.BookCursorStepFlags.FETCH} is specified in `flags`, a pointer to
         * a `null` {@link GLib.SList} pointer should be provided for the `results` parameter.
         *
         * If {@link EBookContacts.BookCursorStepFlags.MOVE} is specified in `flags`, then the cursor's
         * state will be modified and the <link linkend="cursor-pos-total">position</link>
         * property will be updated as a result.
         *
         * If this method is called from the same thread context in which
         * the cursor was created, then the updates to the {@link EBook.BookClientCursor.position}
         * property are guaranteed to be delivered synchronously upon successful completion
         * of moving the cursor. Otherwise, notifications will be delivered asynchronously
         * in the cursor's original thread context.
         *
         * If this method completes with an {@link EDataServer.ClientError.OUT_OF_SYNC} error, it is an
         * indication that the addressbook has been modified and it would be unsafe to
         * move the cursor at this time. Any {@link EDataServer.ClientError.OUT_OF_SYNC} error is guaranteed
         * to be followed by an {@link EBook.BookClientCursor.SignalSignatures.refresh | EBook.BookClientCursor::refresh} signal at which point any content
         * should be reloaded.
         * @param flags The {@link EBookContacts.BookCursorStepFlags} for this step
         * @param origin The {@link EBookContacts.BookCursorOrigin} from whence to step
         * @param count a positive or negative amount of contacts to try and fetch
         * @param cancellable a {@link Gio.Cancellable} to optionally cancel this operation while in progress
         * @returns The number of contacts traversed if successful, otherwise -1 is returned and `error` is set.
         */
        step_sync(
            flags: EBookContacts.BookCursorStepFlags | null,
            origin: EBookContacts.BookCursorOrigin | null,
            count: number,
            cancellable?: Gio.Cancellable | null,
        ): [number, EBookContacts.Contact[] | null];
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace BookClientView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            complete: (arg0: GLib.Error) => void;
            /**
             * The signal is emitted whenever content of any contact in the `client_view` changes,
             * or a contact is added or removed. It may or may not change `EBookClientView`:n-total
             * property too.
             *
             * Note: This signal can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @signal
             * @since 3.50
             * @run-last
             */
            'content-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            'objects-added': (arg0: EBookContacts.Contact[]) => void;
            /**
             * @signal
             * @run-last
             */
            'objects-modified': (arg0: EBookContacts.Contact[]) => void;
            /**
             * @signal
             * @run-last
             */
            'objects-removed': (arg0: string[]) => void;
            /**
             * @signal
             * @run-last
             */
            progress: (arg0: number, arg1: string) => void;
            'notify::client': (pspec: GObject.ParamSpec) => void;
            'notify::connection': (pspec: GObject.ParamSpec) => void;
            'notify::indices': (pspec: GObject.ParamSpec) => void;
            'notify::n-total': (pspec: GObject.ParamSpec) => void;
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            client: BookClient;
            connection: Gio.DBusConnection;
            indices: EBookContacts.BookIndices;
            n_total: number;
            nTotal: number;
            object_path: string;
            objectPath: string;
        }
    }

    /**
     * Contains only private data the should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.2
     */
    class BookClientView extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<BookClientView>;

        // Properties

        /**
         * The {@link EBook.BookClient} for the view
         * @construct-only
         */
        get client(): BookClient;
        /**
         * The {@link Gio.DBusConnection} used to create the D-Bus proxy
         * @construct-only
         */
        get connection(): Gio.DBusConnection;
        /**
         * A list of {@link EBookContacts.BookIndices} holding indices of the contacts in the view.
         * These are received from the first sort field set by
         * `e_book_client_view_set_sort_fields_sync()`. The last item of the returned
         * array is the one with chr member being `null`.
         *
         * Note: This property can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
         * @since 3.50
         * @read-only
         */
        get indices(): EBookContacts.BookIndices;
        /**
         * How many contacts are available in the view.
         *
         * Note: This property can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
         * @since 3.50
         * @read-only
         */
        get n_total(): number;
        /**
         * How many contacts are available in the view.
         *
         * Note: This property can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
         * @since 3.50
         * @read-only
         */
        get nTotal(): number;
        /**
         * The object path used to create the D-Bus proxy
         * @construct-only
         */
        get object_path(): string;
        /**
         * The object path used to create the D-Bus proxy
         * @construct-only
         */
        get objectPath(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BookClientView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BookClientView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BookClientView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BookClientView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BookClientView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BookClientView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BookClientView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BookClientView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Notification that loading a view has completed, after calling `e_book_client_view_start()`
         * @param error
         * @virtual
         */
        vfunc_complete(error: GLib.Error): void;
        /**
         * Signal emitted intermittently while loading a view after calling `e_book_client_view_start()`
         * @param percent
         * @param message
         * @virtual
         */
        vfunc_progress(percent: number, message: string): void;

        // Methods

        /**
         * Asynchronously reads `range_length` contacts from index `range_start`.
         * When there are asked more than `e_book_client_view_get_n_total()`
         * contacts only those up to the total number of contacts are read.
         * Asking for out of range contacts results in an error.
         *
         * Finish the call by `e_book_client_view_dup_contacts_finish()` from the `cb`.
         *
         * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
         * @param range_start 0-based range start to retrieve the contacts for
         * @param range_length how many contacts to retrieve
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        dup_contacts(
            range_start: number,
            range_length: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[number, EBookContacts.Contact[]]>;
        /**
         * Asynchronously reads `range_length` contacts from index `range_start`.
         * When there are asked more than `e_book_client_view_get_n_total()`
         * contacts only those up to the total number of contacts are read.
         * Asking for out of range contacts results in an error.
         *
         * Finish the call by `e_book_client_view_dup_contacts_finish()` from the `cb`.
         *
         * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
         * @param range_start 0-based range start to retrieve the contacts for
         * @param range_length how many contacts to retrieve
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param cb a callback to call when the contacts are received
         */
        dup_contacts(
            range_start: number,
            range_length: number,
            cancellable: Gio.Cancellable | null,
            cb: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously reads `range_length` contacts from index `range_start`.
         * When there are asked more than `e_book_client_view_get_n_total()`
         * contacts only those up to the total number of contacts are read.
         * Asking for out of range contacts results in an error.
         *
         * Finish the call by `e_book_client_view_dup_contacts_finish()` from the `cb`.
         *
         * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
         * @param range_start 0-based range start to retrieve the contacts for
         * @param range_length how many contacts to retrieve
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param cb a callback to call when the contacts are received
         */
        dup_contacts(
            range_start: number,
            range_length: number,
            cancellable?: Gio.Cancellable | null,
            cb?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[number, EBookContacts.Contact[]]> | void;
        /**
         * Finishes previous call of `e_book_client_view_dup_contacts()`;
         * see it for further information.
         *
         * Free the returned {@link GLib.PtrArray} with `g_ptr_array_unref()`, when
         * no longer needed.
         *
         * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
         * @param result an asynchronous call result
         * @returns whether succeeded; if not, the `error` is set
         */
        dup_contacts_finish(result: Gio.AsyncResult): [boolean, number, EBookContacts.Contact[]];
        /**
         * Returns a list of {@link EBookContacts.BookIndices} holding indices of the contacts
         * in the view. These are received from the first sort field set by
         * `e_book_client_view_set_sort_fields_sync()`. The last item of the returned
         * array is the one with chr member being `null`.
         *
         * Free the returned array with `e_book_indices_free()`, when no longer needed.
         *
         * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
         * @returns list of indices for the view
         */
        dup_indices(): EBookContacts.BookIndices;
        /**
         * Returns the {@link EBook.BookClientView.client} associated with `client_view`.
         * @returns an {@link EBook.BookClient}
         */
        get_client(): BookClient;
        /**
         * Returns the {@link Gio.DBusConnection} used to create the D-Bus proxy.
         * @returns the {@link Gio.DBusConnection}
         */
        get_connection(): Gio.DBusConnection;
        /**
         * Returns an identifier of the `self`. It does not change
         * for the whole life time of the `self`.
         *
         * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
         * @returns an identifier of the view
         */
        get_id(): number;
        /**
         * Returns how many contacts are available in the view.
         *
         * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
         * @returns how many contacts are available in the view
         */
        get_n_total(): number;
        /**
         * Returns the object path used to create the D-Bus proxy.
         * @returns the object path
         */
        get_object_path(): string;
        is_running(): boolean;
        /**
         * Returns the {@link EBook.BookClientView.client} associated with `client_view`.
         *
         * The returned {@link EBook.BookClient} is referenced for thread-safety.  Unreference
         * the {@link EBook.BookClient} with `g_object_unref()` when finished with it.
         * @returns an {@link EBook.BookClient}
         */
        ref_client(): BookClient;
        /**
         * Client can instruct server to which fields it is interested in only, thus
         * the server can return less data over the wire. The server can still return
         * complete objects, this is just a hint to it that the listed fields will
         * be used only. The UID field is returned always. Initial views has no fields
         * of interest and using `null` for `fields_of_interest` will unset any previous
         * changes.
         *
         * Some backends can use summary information of its cache to create artifical
         * objects, which will omit stored object parsing. If this cannot be done then
         * it will simply return object as is stored in the cache.
         * @param fields_of_interest List of field names in which                      the client is interested
         */
        set_fields_of_interest(fields_of_interest: string[]): void;
        /**
         * Sets the `flags` which control the behaviour of `client_view`.
         * @param flags the {@link EBookContacts.BookClientViewFlags} for `client_view`
         */
        set_flags(flags: EBookContacts.BookClientViewFlags | null): void;
        /**
         * Sets `fields` to sort the view by. The default is to sort by the file-as
         * field in ascending order. Not every field can be used for sorting,
         * usually available fields are {@link EBookContacts.ContactField.FILE_AS},
         * {@link EBookContacts.ContactField.GIVEN_NAME} and {@link EBookContacts.ContactField.FAMILY_NAME}.
         *
         * The array is terminated by an item with an {@link EBookContacts.ContactField.FIELD_LAST} field.
         *
         * The first sort field is used to populate indices, as returned
         * by `e_book_client_view_dup_indices()`.
         *
         * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
         * @param fields an array of {@link EBookContacts.BookClientViewSortFields}, terminated by item with {@link EBookContacts.ContactField.FIELD_LAST} field
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns whether succeeded
         */
        set_sort_fields_sync(
            fields: EBookContacts.BookClientViewSortFields,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Tells `client_view` to start processing events.
         */
        start(): void;
        /**
         * Tells `client_view` to stop processing events.
         */
        stop(): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Destination {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Destination extends GObject.Object {
        static $gtype: GObject.GType<Destination>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Destination.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Destination.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Destination;

        // Signals

        /** @signal */
        connect<K extends keyof Destination.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Destination.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Destination.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Destination.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Destination.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Destination.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Exports multiple {@link EBook.Destination} elements to a single XML document.
         * @param destv a `null`-terminated array of pointers to {@link EBook.Destination}
         */
        static exportv(destv: Destination[]): string;
        /**
         * Unrefs the elements of `destv` and frees `destv` itself.
         * @param destv a `null`-terminated array of pointers to {@link EBook.Destination}
         */
        static freev(destv: Destination[]): void;
        /**
         * Generates a joint text representation of all the {@link EBook.Destination}
         * elements in `destv`.
         * @param destv `null`-terminated array of pointers to {@link EBook.Destination}
         */
        static get_textrepv(destv: Destination[]): string;
        /**
         * Creates an {@link EBook.Destination} from an XML document.
         * @param str an XML string
         */
        static ['import'](str: string): Destination | null;
        /**
         * Creates an array of pointers to {@link EBook.Destination} elements
         * from an XML document.
         * @param str an XML string
         */
        static importv(str: string): Destination[];

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods

        /**
         * Creates a new {@link EBook.Destination} identical to `dest`.
         * @returns A newly created {@link EBook.Destination}, identical to `dest`.
         */
        copy(): Destination;
        /**
         * Checks if `dest` is blank.
         * @returns `true` if `dest` is empty, `false` otherwise.
         */
        empty(): boolean;
        /**
         * Checks if `a` and `b` are equal.
         * @param b an {@link EBook.Destination}
         * @returns `true` if the destinations are equal, `false` otherwise.
         */
        equal(b: Destination): boolean;
        /**
         * Exports a destination to an XML document.
         * @returns An XML string, allocated with g_malloc.
         */
        ['export'](): string;
        /**
         * Exports the contact information from `dest` to parameters
         * and values in `attr`, suitable for an address book.
         * @param attr an {@link EBookContacts.VCardAttribute}
         */
        export_to_vcard_attribute(attr: EBookContacts.VCardAttribute): void;
        /**
         * Gets the encoded name and email address, or in the case of lists, the
         * encoded list of email addresses, from `dest`.  The returned string is
         * suitable for use in an email header, but not for displaying to users.
         * @returns an encoded destination string suitable for use in an          email header, or `null` if the destination was empty
         */
        get_address(): string | null;
        /**
         * Gets the contact `dest` is pointing to, if any.
         * @returns An {@link EBookContacts.Contact}, or `null` if none was set.
         */
        get_contact(): EBookContacts.Contact | null;
        /**
         * Gets the unique contact ID `dest` is pointing to, if any.
         * @returns A unique contact ID, or `null` if none was set.
         */
        get_contact_uid(): string | null;
        /**
         * Gets the e-mail address of `dest`'s addressee.
         * @returns An e-mail address, or an empty string if none was set.
         */
        get_email(): string;
        /**
         * Gets the index of the e-mail address of the contact that
         * `dest` is pointing to, if any.
         * @returns The e-mail index, or -1 if none was set.
         */
        get_email_num(): number;
        /**
         * Check if `dest` wants to get mail formatted as HTML.
         * @returns `true` if destination wants HTML, `false` if not.
         */
        get_html_mail_pref(): boolean;
        /**
         * Gets the full name of `dest`'s addressee, or if the addressee is
         * a contact list, the name the list was filed under. The name can
         * be encoded in quoted printable.
         * @returns The full name of the addressee, or `null` if none was set.
         */
        get_name(): string | null;
        /**
         * Gets the unique source ID `dest` is pointing to, if any. The source
         * ID specifies which address book `dest`'s contact came from.
         * @returns A unique source ID, or `null` if none was set.
         */
        get_source_uid(): string | null;
        /**
         * Generates a textual representation of `dest`, suitable for referring
         * to the destination during user interaction. The name can be encoded
         * in quoted printable.
         * @param include_email whether to include the e-mail address
         * @returns A textual representation of the destination.
         */
        get_textrep(include_email: boolean): string;
        /**
         * Checks if `dest` is flagged as an automatic recipient, meaning
         * it was not explicitly specified by the user. This can be used
         * to hide it from some UI elements.
         * @returns `true` if destination is an auto recipient, `false` otherwise.
         */
        is_auto_recipient(): boolean;
        /**
         * Checks if `dest` is a list of addresses.
         * @returns `true` if destination is a list, `false` if it is an individual.
         */
        is_evolution_list(): boolean;
        /**
         * Check if `dest` is to be ignored.
         * @returns `true` if this destination should be ignored, else `false`.
         */
        is_ignored(): boolean;
        /**
         * If `dest` is a list, gets recursively list of all destinations.
         * Everything returned from this function belongs to `dest` and
         * thus should not be freed.
         * @returns A list of elements of type {@link EBook.Destination}, or `null`.
         */
        list_get_dests(): Destination[] | null;
        /**
         * If `dest` is a list, gets the list of EDestinations assigned directly
         * to `dest`.
         * The list and its elements belong to `dest`, and should not be freed.
         * @returns A list of elements of type {@link EBook.Destination}, or `null`.
         */
        list_get_root_dests(): Destination[] | null;
        /**
         * If `dest` is a list, checks if the addresses in the list
         * should be presented to the user during interaction.
         * @returns `true` if addresses should be shown, `false` otherwise.
         */
        list_show_addresses(): boolean;
        /**
         * Sets the flag indicating if `dest` is an automatic recipient, meaning
         * it was not explicitly specified by the user. This can be used
         * to hide it from some UI elements.
         * @param value the auto recipient flag
         */
        set_auto_recipient(value: boolean): void;
        /**
         * Specify the source `dest`'s contact comes from. This is useful
         * if you need to update the contact later.
         * @param client an {@link EBook.BookClient}
         */
        set_client(client: BookClient): void;
        /**
         * Sets `dest` to point to one of `contact`'s e-mail addresses
         * indicated by `email_num`.
         * @param contact an {@link EBookContacts.Contact}
         * @param email_num an email index
         */
        set_contact(contact: EBookContacts.Contact, email_num: number): void;
        /**
         * Sets `dest` to point to one of the contact specified by `uid`'s e-mail
         * addresses indicated by `email_num`.
         * @param uid a unique contact ID
         * @param email_num an email index
         */
        set_contact_uid(uid: string, email_num: number): void;
        /**
         * Sets the e-mail address of `dest`'s addressee.
         * @param email the destination's e-mail address
         */
        set_email(email: string): void;
        /**
         * Specifies whether `dest` wants to get mail formatted as HTML.
         * @param flag whether the destination wants HTML mail
         */
        set_html_mail_pref(flag: boolean): void;
        /**
         * Set the ignore flag on an {@link EBook.Destination}.
         * @param ignored `true` if this {@link EBook.Destination} should be ignored.
         */
        set_ignored(ignored: boolean): void;
        /**
         * Sets the full name of `dest`'s addressee.
         * @param name the destination's full name
         */
        set_name(name: string): void;
        /**
         * Sets `dest` to point to the name and e-mail address resulting from
         * parsing the supplied string. Useful for user input.
         * @param raw an unparsed string
         */
        set_raw(raw: string): void;
    }

    /**
     * @gir-type Alias
     */
    type BookClientClass = typeof BookClient;
    /**
     * @gir-type Alias
     */
    type BookClientCursorClass = typeof BookClientCursor;
    /**
     * @gir-type Struct
     */
    abstract class BookClientCursorPrivate {
        static $gtype: GObject.GType<BookClientCursorPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class BookClientPrivate {
        static $gtype: GObject.GType<BookClientPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BookClientViewClass = typeof BookClientView;
    /**
     * @gir-type Struct
     */
    abstract class BookClientViewPrivate {
        static $gtype: GObject.GType<BookClientViewPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DestinationClass = typeof Destination;
    /**
     * @gir-type Struct
     */
    abstract class DestinationPrivate {
        static $gtype: GObject.GType<DestinationPrivate>;
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

export default EBook;

// END
