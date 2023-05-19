
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './edatabook-1.2-ambient.d.ts';
import './edatabook-1.2-import.d.ts';
/**
 * EDataBook-1.2
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
import type EBackend from '@girs/ebackend-1.2';

/**
 * Specifies the start position to in the list of traversed contacts
 * in calls to e_book_cache_cursor_step().
 * 
 * When an #EBookCacheCursor is created, the current position implied by %E_BOOK_CACHE_CURSOR_ORIGIN_CURRENT
 * is the same as %E_BOOK_CACHE_CURSOR_ORIGIN_BEGIN.
 */
export enum BookCacheCursorOrigin {
    /**
     * The current cursor position.
     */
    CURRENT,
    /**
     * The beginning of the cursor results.
     */
    BEGIN,
    /**
     * The end of the cursor results.
     */
    END,
}
/**
 * Defines the types of possible errors reported by the #EBookSqlite
 */
export enum BookSqliteError {
    /**
     * An error was reported from the SQLite engine
     */
    ENGINE,
    /**
     * The error occurred due to an explicit constraint, this will
     * happen when attempting to add two contacts with the same UID.
     */
    CONSTRAINT,
    /**
     * A contact was not found by UID (this is
     * different from a query that returns no results, which is not an error).
     */
    CONTACT_NOT_FOUND,
    /**
     * A query was invalid. This can happen if the
     * search expression could not be parsed or if a phone number query contained non-phonenumber input.
     */
    INVALID_QUERY,
    /**
     * A query was not supported
     */
    UNSUPPORTED_QUERY,
    /**
     * An unsupported #EContactField was specified in the summary
     */
    UNSUPPORTED_FIELD,
    /**
     * An attempt was made to fetch results past the end of a contact list
     */
    END_OF_LIST,
    /**
     * An error occured while loading or creating the database
     */
    LOAD,
}
/**
 * Indicates the type of change which occurred in an #EbSqlChangeCallback
 */
export enum bSqlChangeType {
    /**
     * Contact was modified as a result of its addition to the addressbook
     */
    CONTACT_ADDED,
    /**
     * Contact was modified as a result of a locale change
     */
    LOCALE_CHANGED,
    /**
     * A symbolic end marker for this enumeration, will not be passed in callbacks.
     */
    LAST,
}
/**
 * Specifies the start position to in the list of traversed contacts
 * in calls to e_book_sqlite_cursor_step().
 * 
 * When an #EbSqlCursor is created, the current position implied by %EBSQL_CURSOR_ORIGIN_CURRENT
 * is the same as %EBSQL_CURSOR_ORIGIN_BEGIN.
 */
export enum bSqlCursorOrigin {
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
 * Indicates the type of lock requested in e_book_sqlite_lock()
 */
export enum bSqlLockType {
    /**
     * Obtain a lock for reading
     */
    READ,
    /**
     * Obtain a lock for writing
     */
    WRITE,
}
/**
 * Indicates what type of action to take while unlocking the sqlite with e_book_sqlite_unlock()
 * 
 * In the case that some addressbook modification failed while holding an %EBSQL_LOCK_WRITE lock,
 * then the #EBookSqlite must be unlocked with %EBSQL_UNLOCK_ROLLBACK.
 */
export enum bSqlUnlockAction {
    /**
     * Just unlock, this is appropriate for locks which were obtained with %EBSQL_LOCK_READ
     */
    NONE,
    /**
     * Commit any modifications which were made while the lock was held
     */
    COMMIT,
    /**
     * Rollback any modifications which were made while the lock was held
     */
    ROLLBACK,
}
/**
 * Defines the behaviour of e_book_cache_cursor_step().
 * @bitfield 
 */
export enum BookCacheCursorStepFlags {
    /**
     * The cursor position should be modified while stepping.
     */
    MOVE,
    /**
     * Traversed contacts should be listed and returned while stepping.
     */
    FETCH,
}
/**
 * Defines the behaviour of e_book_sqlite_cursor_step().
 * @bitfield 
 */
export enum bSqlCursorStepFlags {
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
 * This key can be used with e_book_sqlite_get_key_value().
 * 
 * In the case of a migration from an older SQLite, any value which
 * was previously stored with e_book_backend_sqlitedb_set_is_populated()
 * can be retrieved with this key.
 */
export const BOOK_SQL_IS_POPULATED_KEY: string | null
/**
 * This key can be used with e_book_sqlite_get_key_value().
 * 
 * In the case of a migration from an older SQLite, any value which
 * was previously stored with e_book_backend_sqlitedb_set_sync_data()
 * can be retrieved with this key.
 */
export const BOOK_SQL_SYNC_DATA_KEY: string | null
/**
 * This environment variable configures where the address book
 * factory loads its backend modules from.
 */
export const EDS_ADDRESS_BOOK_MODULES: string | null
/**
 * This environment variable configures where the address book
 * factory subprocess is located in.
 */
export const EDS_SUBPROCESS_BOOK_PATH: string | null
export const XIMIAN_VCARD: string | null
/**
 * Frees the `data` structure, previously allocated with e_book_cache_search_data_new()
 * or e_book_cache_search_data_copy().
 * @param data an #EBookCacheSearchData
 */
export function book_cache_search_data_free(data: any | null): void
/**
 * Frees the `ptr` structure, previously allocated with e_book_meta_backend_info_new()
 * or e_book_meta_backend_info_copy().
 * @param ptr an #EBookMetaBackendInfo
 */
export function book_meta_backend_info_free(ptr: any | null): void
/**
 * Fetches the extra data previously set for `uid,` either with
 * e_book_sqlite_set_contact_extra() or when adding contacts,
 * without locking internal mutex.
 * @param ebsql An #EBookSqlite
 * @param uid The uid of the contact to fetch the extra data for
 * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
 */
export function ebsql_get_contact_extra_unlocked(ebsql: BookSqlite, uid: string | null): [ /* returnType */ boolean, /* ret_extra */ string | null ]
/**
 * Fetch the #EContact specified by `uid` in `ebsql` without locking internal mutex.
 * 
 * If `meta_contact` is specified, then a shallow #EContact will be created
 * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
 * @param ebsql An #EBookSqlite
 * @param uid The uid of the contact to fetch
 * @param meta_contact Whether an entire contact is desired, or only the metadata
 * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
 */
export function ebsql_get_contact_unlocked(ebsql: BookSqlite, uid: string | null, meta_contact: boolean): [ /* returnType */ boolean, /* contact */ EBookContacts.Contact ]
/**
 * Fetch a vcard string for `uid` in `ebsql` without locking internal mutex.
 * 
 * If `meta_contact` is specified, then a shallow vcard representation will be
 * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
 * @param ebsql An #EBookSqlite
 * @param uid The uid of the contact to fetch
 * @param meta_contact Whether an entire contact is desired, or only the metadata
 * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
 */
export function ebsql_get_vcard_unlocked(ebsql: BookSqlite, uid: string | null, meta_contact: boolean): [ /* returnType */ boolean, /* ret_vcard */ string | null ]
/**
 * A callback prototype being called in a dedicated thread, scheduled
 * by e_book_backend_schedule_custom_operation().
 * @callback 
 * @param book_backend an #EBookBackend
 * @param cancellable an optional #GCancellable, as provided to e_book_backend_schedule_custom_operation()
 */
export interface BookBackendCustomOpFunc {
    (book_backend: BookBackend, cancellable: Gio.Cancellable | null): void
}
/**
 * Callback function used by e_book_backend_foreach_view().
 * @callback 
 * @param backend an #EBookBackend
 * @param view an #EDataBookView
 * @returns %TRUE, to continue, %FALSE to stop further processing.
 */
export interface BookBackendForeachViewFunc {
    (backend: BookBackend, view: DataBookView): boolean
}
/**
 * A callback called for each object row when using
 * e_book_cache_search_with_callback() function.
 * @callback 
 * @param book_cache an #EBookCache
 * @param uid a unique object identifier
 * @param revision the object revision
 * @param object the object itself
 * @param extra extra data stored with the object
 * @param custom_flags object's custom flags
 * @param offline_state object's offline state, one of #EOfflineState
 * @returns %TRUE to continue, %FALSE to stop walk through.
 */
export interface BookCacheSearchFunc {
    (book_cache: BookCache, uid: string | null, revision: string | null, object: string | null, extra: string | null, custom_flags: number, offline_state: EBackend.OfflineState): boolean
}
/**
 * A callback called for each row of a SELECT statement executed
 * with e_book_sqlite_select() function.
 * @callback 
 * @param ebsql an #EBookSqlite
 * @param column_names column names
 * @param column_values column values
 * @returns %TRUE to continue, %FALSE to stop walk through.
 */
export interface BookSqliteSelectFunc {
    (ebsql: BookSqlite, column_names: string[], column_values: string[]): boolean
}
/**
 * Method type for #EDataBookCursorClass.compare_contact()
 * 
 * Cursor implementations must implement this in order to compare a
 * contact with the current cursor state.
 * 
 * This is called when the addressbook backends notify active cursors
 * that the addressbook has been modified with e_data_book_cursor_contact_added() and
 * e_data_book_cursor_contact_removed().
 * @callback 
 * @param cursor an #EDataBookCursor
 * @param contact the #EContact to compare with `cursor`
 * @returns A value that is less than, equal to, or greater than zero if @contact is found, respectively, to be less than, to match, or be greater than the current value of @cursor.
 */
export interface DataBookCursorCompareContactFunc {
    (cursor: DataBookCursor, contact: EBookContacts.Contact): number
}
/**
 * Method type for #EDataBookCursorClass.get_position()
 * 
 * Cursor implementations must implement this to count the total results
 * matching `cursor'`s query expression and to calculate the amount of contacts
 * leading up to the current cursor state (cursor inclusive).
 * 
 * A cursor position is defined as an integer which is inclusive of the
 * current contact to which it points (if the cursor points to an exact
 * contact). A position of 0 indicates that the cursor is situated in
 * a position that is before and after the entire result set. The cursor
 * position should be 0 at creation time, and should start again from
 * the symbolic 0 position whenever %E_BOOK_CURSOR_ORIGIN_BEGIN is
 * specified in the #EDataBookCursorClass.step() method (or whenever
 * moving the cursor beyond the end of the result set).
 * 
 * If the cursor is positioned beyond the end of the list, then
 * the position should be the total amount of contacts available
 * in the list (as returned through the `total` argument) plus one.
 * 
 * This method is called by e_data_book_cursor_recalculate() and in some
 * other cases where `cursor'`s current position and total must be
 * recalculated from scratch.
 * @callback 
 * @param cursor an #EDataBookCursor
 * @param cancellable A #GCancellable
 * @returns %TRUE on Success, otherwise %FALSE is returned if any error occurred and @error is set to reflect the error which occurred.
 */
export interface DataBookCursorGetPositionFunc {
    (cursor: DataBookCursor, cancellable: Gio.Cancellable | null): boolean
}
/**
 * Method type for #EDataBookCursorClass.load_locale()
 * 
 * Fetches the locale setting from `cursor'`s addressbook
 * 
 * If the locale setting has changed, the cursor must reload any
 * internal locale specific data and ensure that comparisons of
 * sort keys will function properly in the new locale.
 * 
 * Upon locale changes, the implementation need not worry about
 * updating it's current cursor state, the cursor state will be
 * reset automatically for you.
 * @callback 
 * @param cursor an #EDataBookCursor
 * @returns %TRUE on Success, otherwise %FALSE is returned if any error occurred and @error is set to reflect the error which occurred.
 */
export interface DataBookCursorLoadLocaleFunc {
    (cursor: DataBookCursor): boolean
}
/**
 * Method type for #EDataBookCursorClass.set_alphabetic_index()
 * 
 * Sets the cursor state to point to an
 * <link linkend="cursor-alphabet">index into the active alphabet</link>.
 * 
 * The implementing class must check that `locale` matches the current
 * locale setting of the underlying database and report an %E_CLIENT_ERROR_OUT_OF_SYNC
 * error in the case that the locales do not match.
 * @callback 
 * @param cursor an #EDataBookCursor
 * @param index the alphabetic index
 * @param locale the locale in which `index` is expected to be a valid alphabetic index
 * @returns %TRUE on Success, otherwise %FALSE is returned if any error occurred and @error is set to reflect the error which occurred.
 */
export interface DataBookCursorSetAlphabetIndexFunc {
    (cursor: DataBookCursor, index: number, locale: string | null): boolean
}
/**
 * Method type for #EDataBookCursorClass.set_sexp()
 * 
 * A cursor implementation must implement this in order to modify the search
 * expression for `cursor`. After this is called, the position and total will
 * be recalculated.
 * 
 * If the cursor implementation is unable to deal with the #EContactFields
 * referred to in `sexp,` then an %E_CLIENT_ERROR_INVALID_QUERY error should
 * be set to indicate this.
 * @callback 
 * @param cursor an #EDataBookCursor
 * @param sexp the search expression to set, or %NULL for unfiltered results
 * @returns %TRUE on Success, otherwise %FALSE is returned if any error occurred and @error is set to reflect the error which occurred.
 */
export interface DataBookCursorSetSexpFunc {
    (cursor: DataBookCursor, sexp: string | null): boolean
}
/**
 * Method type for #EDataBookCursorClass.step()
 * 
 * As all cursor methods may be called either by the addressbook service or
 * directly by a client in Direct Read Access mode, it is important that the
 * operation be an atomic transaction with the underlying database.
 * 
 * The `revision_guard,` if specified, will be set to the %CLIENT_BACKEND_PROPERTY_REVISION
 * value at the time which the given client issued the call to move the cursor.
 * If the `revision_guard` provided by the client does not match the stored addressbook
 * revision, then an %E_CLIENT_ERROR_OUT_OF_SYNC error should be set to indicate
 * that the revision was out of sync while attempting to move the cursor.
 * 
 * <note><para>If the addressbook backend supports direct read access, then the
 * revision comparison and reading of the data store must be coupled into a
 * single atomic operation (the data read back from the store must be the correct
 * data for the given addressbook revision).</para></note>
 * 
 * See e_data_book_cursor_step() for more details on the expected behaviour of this method.
 * @callback 
 * @param cursor an #EDataBookCursor
 * @param revision_guard The expected current addressbook revision, or %NULL
 * @param flags The #EBookCursorStepFlags for this step
 * @param origin The #EBookCursorOrigin from whence to step
 * @param count a positive or negative amount of contacts to try and fetch
 * @param cancellable A #GCancellable
 * @returns The number of contacts traversed if successful, otherwise -1 is returned and @error is set.
 */
export interface DataBookCursorStepFunc {
    (cursor: DataBookCursor, revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable: Gio.Cancellable | null): number
}
/**
 * A function which may be called in response to a change
 * in contact data.
 * 
 * <note><para>This user callback is called inside a lock,
 * you must not call the #EBookSqlite API from
 * this callback.</para></note>
 * @callback 
 * @param change_type The #EbSqlChangeType which occurred
 * @param uid A contact UID
 * @param extra The extra data associated to the contact
 * @param vcard The vcard string for this UID
 */
export interface bSqlChangeCallback {
    (change_type: bSqlChangeType, uid: string | null, extra: string | null, vcard: string | null): void
}
/**
 * If this callback is passed to e_book_sqlite_new(), then
 * vcards are not stored in the SQLite and instead this callback
 * is invoked to fetch the vcard.
 * 
 * This callback will be called to fetch results for fully indexed
 * and optimized queries, and it will also be called while performing
 * fallback queries against #EContactFields which are not configured
 * in the #ESourceBackendSummarySetup or default summary fields.
 * 
 * <note><para>This user callback is called inside a lock,
 * you must not call the #EBookSqlite API from
 * this callback.</para></note>
 * @callback 
 * @param uid A contact UID
 * @param extra The extra data associated to the contact
 * @returns The appropriate vcard indicated by @uid
 */
export interface bSqlVCardCallback {
    (uid: string | null, extra: string | null): string | null
}
export module BookBackend {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        ($obj: BookBackend, sender: string | null): void
    }

    /**
     * Signal callback interface for `shutdown`
     */
    export interface ShutdownSignalCallback {
        ($obj: BookBackend): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends EBackend.Backend.ConstructorProperties {

        // Own constructor properties of EDataBook-1.2.EDataBook.BookBackend

        cache_dir?: string | null
        registry?: EDataServer.SourceRegistry | null
        writable?: boolean | null
    }

}

export interface BookBackend {

    // Own properties of EDataBook-1.2.EDataBook.BookBackend

    cache_dir: string | null
    readonly proxy_resolver: Gio.ProxyResolver
    readonly registry: EDataServer.SourceRegistry
    writable: boolean

    // Owm methods of EDataBook-1.2.EDataBook.BookBackend

    /**
     * Adds `view` to `backend` for querying.
     * @param view an #EDataBookView
     */
    add_view(view: DataBookView): void
    /**
     * This method is called on `backend` in direct read access mode.
     * The `config` argument is the same configuration string which
     * the same backend reported in the #EDataBookDirect returned
     * by e_book_backend_get_direct_book().
     * 
     * The configuration string is optional and is used to ensure
     * that direct access backends are properly configured to
     * interface with the same data as the running server side backend.
     * @param config The configuration string for the given backend
     */
    configure_direct(config: string | null): void
    /**
     * Asynchronously checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_contains_email_finish() to get the result of the
     * operation.
     * @param email_address an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    contains_email(email_address: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_book_backend_contains_email().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    contains_email_finish(result: Gio.AsyncResult): boolean
    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param email_address an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE when found the @email_address, %FALSE on failure
     */
    contains_email_sync(email_address: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously creates one or more new contacts from `vcards`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_create_contacts_finish() to get the result of the
     * operation.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    create_contacts(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_book_backend_create_contacts().
     * 
     * An #EContact instance for each newly-created contact is deposited in
     * `out_contacts`.  The returned #EContact instances are referenced for
     * thread-safety and must be unreferenced with g_object_unref() when
     * finished with them.
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @param out_contacts a #GQueue in which to deposit results
     * @returns %TRUE on success, %FALSE on failure
     */
    create_contacts_finish(result: Gio.AsyncResult, out_contacts: GLib.Queue): boolean
    /**
     * Creates one or more new contacts from `vcards,` and deposits an #EContact
     * instance for each newly-created contact in `out_contacts`.
     * 
     * The returned #EContact instances are referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param out_contacts a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    create_contacts_sync(vcards: string | null, opflags: number, out_contacts: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
    /**
     * Creates a new #EDataBookCursor for the given backend if the backend
     * has cursor support. If the backend does not support cursors then
     * an %E_CLIENT_ERROR_NOT_SUPPORTED error will be set in `error`.
     * 
     * Backends can also refuse to create cursors for some values of `sort_fields`
     * and report more specific errors.
     * 
     * The returned cursor belongs to `backend` and should be destroyed
     * with e_book_backend_delete_cursor() when no longer needed.
     * @param sort_fields the #EContactFields to sort by
     * @param sort_types the #EBookCursorSortTypes for the sorted fields
     * @param n_fields the number of fields in the `sort_fields` and `sort_types`
     * @returns A newly created cursor, the cursor belongs    to the backend and should not be unreffed, or %NULL on error
     */
    create_cursor(sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number): DataBookCursor
    /**
     * Requests `backend` to release and destroy `cursor,` this
     * will trigger an %E_CLIENT_ERROR_INVALID_ARG error if `cursor`
     * is not owned by `backend`.
     * @param cursor the #EDataBookCursor to destroy
     * @returns Whether @cursor was successfully deleted.
     */
    delete_cursor(cursor: DataBookCursor): boolean
    /**
     * Thread-safe variation of e_book_backend_get_cache_dir().
     * Use this function when accessing `backend` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #EBookBackend:cache-dir
     */
    dup_cache_dir(): string | null
    /**
     * Fetches a copy of the currently configured locale for the addressbook
     * @returns A copy of the currently configured locale for the addressbook.   Free with g_free() when done with it.
     */
    dup_locale(): string | null
    /**
     * Calls `func` for each existing view (as returned by e_book_backend_list_views()).
     * The `func` can return %FALSE to stop early.
     * @returns whether the call had been stopped by @func
     */
    foreach_view(): boolean
    /**
     * Notifies each view of the `backend` about progress. When `only_completed_views`
     * is %TRUE, notifies only completed views.
     * @param only_completed_views whether notify in completed views only
     * @param percent percent complete
     * @param message message describing the operation in progress, or %NULL
     */
    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message: string | null): void
    /**
     * Obtains the value of the backend property named `prop_name`.
     * Freed the returned string with g_free() when finished with it.
     * @param prop_name a backend property name
     * @returns the value for @prop_name
     */
    get_backend_property(prop_name: string | null): string | null
    /**
     * Returns the cache directory path used by `backend`.
     * @returns the cache directory path
     */
    get_cache_dir(): string | null
    /**
     * Asynchronously obtains an #EContact for `uid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_book_backend_get_contact_finish() to get the result of the
     * operation.
     * @param uid a contact ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_contact(uid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_book_backend_get_contact_finish().
     * 
     * The returned #EContact is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * 
     * If an error occurred, the function will set `error` and return %NULL.
     * @param result a #GAsyncResult
     * @returns an #EContact, or %NULL on error
     */
    get_contact_finish(result: Gio.AsyncResult): EBookContacts.Contact
    /**
     * Asynchronously obtains a set of #EContact instances which satisfy the
     * criteria specified in `query`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_get_contact_list_finish() to get the result of the
     * operation.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_contact_list(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_book_backend_get_contact_list().
     * 
     * The matching #EContact instances are deposited in `out_contacts`.  The
     * returned #EContact instances are referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with them.
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param result a #GAsyncResult
     * @param out_contacts a #GQueue in which to deposit results
     * @returns %TRUE on success, %FALSE on failure
     */
    get_contact_list_finish(result: Gio.AsyncResult, out_contacts: GLib.Queue): boolean
    /**
     * Obtains a set of #EContact instances which satisfy the criteria specified
     * in `query,` and deposits them in `out_contacts`.
     * 
     * The returned #EContact instances are referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param query a search query in S-expression format
     * @param out_contacts a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    get_contact_list_sync(query: string | null, out_contacts: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously obtains a set of ID strings for contacts which satisfy
     * the criteria specified in `query`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_get_contact_list_uids_finish() to get the result of
     * the operation.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_contact_list_uids(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with
     * e_book_backend_get_contact_list_uids_finish().
     * 
     * ID strings for the matching contacts are deposited in `out_uids,` and
     * must be freed with g_free() when finished with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param result a #GAsyncResult
     * @param out_uids a #GQueue in which to deposit results
     * @returns %TRUE on success, %FALSE on failure
     */
    get_contact_list_uids_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean
    /**
     * Obtains a set of ID strings for contacts which satisfy the criteria
     * specified in `query,` and deposits them in `out_uids`.
     * 
     * The returned ID strings must be freed with g_free() with finished
     * with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param query a search query in S-expression format
     * @param out_uids a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    get_contact_list_uids_sync(query: string | null, out_uids: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
    /**
     * Obtains an #EContact for `uid`.
     * 
     * The returned #EContact is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param uid a contact ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns an #EContact, or %NULL on error
     */
    get_contact_sync(uid: string | null, cancellable: Gio.Cancellable | null): EBookContacts.Contact
    /**
     * Tries to create an #EDataBookDirect for `backend` if
     * backend supports direct read access.
     * @returns A new #EDataBookDirect object, or %NULL if          @backend does not support direct access
     */
    get_direct_book(): DataBookDirect | null
    /**
     * Returns the data source registry to which #EBackend:source belongs.
     * @returns an #ESourceRegistry
     */
    get_registry(): EDataServer.SourceRegistry
    /**
     * Returns whether `backend` will accept changes to its data content.
     * @returns whether @backend is writable
     */
    get_writable(): boolean
    /**
     * Checks if `backend'`s storage has been opened (and
     * authenticated, if necessary) and the backend itself
     * is ready for accessing. This property is changed automatically
     * after the `backend` is successfully opened.
     * @returns %TRUE if fully opened, %FALSE otherwise.
     */
    is_opened(): boolean
    /**
     * Checks if we can write to `backend`.
     * @returns %TRUE if read-only, %FALSE if not.
     */
    is_readonly(): boolean
    /**
     * Returns a list of #EDataBookView instances added with
     * e_book_backend_add_view().
     * 
     * The views returned in the list are referenced for thread-safety.
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
     * @returns a list of book views
     */
    list_views(): DataBookView[]
    /**
     * Asynchronously modifies one or more contacts according to `vcards`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_modify_contacts_finish() to get the result of the
     * operation.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    modify_contacts(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_book_backend_modify_contacts().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    modify_contacts_finish(result: Gio.AsyncResult): boolean
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    modify_contacts_sync(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Notifies all of `backend'`s book views that the current set of
     * notifications is complete; use this after a series of
     * e_book_backend_notify_update() and e_book_backend_notify_remove() calls.
     */
    notify_complete(): void
    /**
     * Notifies each backend listener about an error. This is meant to be used
     * for cases where is no GError return possibility, to notify user about
     * an issue.
     * @param message an error message
     */
    notify_error(message: string | null): void
    /**
     * Notifies clients about property value change.
     * @param prop_name property name, which changed
     * @param prop_value new property value
     */
    notify_property_changed(prop_name: string | null, prop_value: string | null): void
    /**
     * Notifies all of `backend'`s book views that the contact with UID
     * `id` has been removed.
     * 
     * e_data_book_respond_remove_contacts() calls this function for you. You
     * only need to call this from your backend if contacts are removed by
     * another (non-PAS-using) client.
     * @param id a contact id
     */
    notify_remove(id: string | null): void
    /**
     * Notifies all of `backend'`s book views about the new or modified
     * contacts `contact`.
     * 
     * e_data_book_respond_create_contacts() and e_data_book_respond_modify_contacts() call this
     * function for you. You only need to call this from your backend if
     * contacts are created or modified by another (non-PAS-using) client.
     * @param contact a new or modified contact
     */
    notify_update(contact: EBookContacts.Contact): void
    /**
     * Asynchronously "opens" the `backend`.  Opening a backend is something of
     * an outdated concept, but the operation is hanging around for a little
     * while longer.  This usually involves some custom initialization logic,
     * and testing of remote authentication if applicable.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_open_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_book_backend_open().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    open_finish(result: Gio.AsyncResult): boolean
    /**
     * "Opens" the `backend`.  Opening a backend is something of an outdated
     * concept, but the operation is hanging around for a little while longer.
     * This usually involves some custom initialization logic, and testing of
     * remote authentication if applicable.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    open_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Obtains the #GSimpleAsyncResult for `opid` and sets `result_queue` as a
     * place to deposit results prior to completing the #GSimpleAsyncResult.
     * 
     * <note>
     *   <para>
     *     This is a temporary function to serve #EDataBook's "respond"
     *     functions until they can be removed.  Nothing else should be
     *     calling this function.
     *   </para>
     * </note>
     * @param opid an operation ID given to #EDataBook
     * @param result_queue return location for a #GQueue, or %NULL
     * @returns a #GSimpleAsyncResult
     */
    prepare_for_completion(opid: number, result_queue: GLib.Queue): Gio.SimpleAsyncResult
    /**
     * Returns the #EDataBook for `backend`.  The #EDataBook is essentially
     * the glue between incoming D-Bus requests and `backend'`s native API.
     * 
     * An #EDataBook should be set only once after `backend` is first created.
     * If an #EDataBook has not yet been set, the function returns %NULL.
     * 
     * The returned #EDataBook is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns an #EDataBook, or %NULL
     */
    ref_data_book(): DataBook | null
    /**
     * Returns the #GProxyResolver for `backend` (if applicable), as indicated
     * by the #ESourceAuthentication:proxy-uid of `backend'`s #EBackend:source
     * or one of its ancestors.
     * 
     * The returned #GProxyResolver is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
     * @returns a #GProxyResolver, or %NULL
     */
    ref_proxy_resolver(): Gio.ProxyResolver | null
    /**
     * Asynchronously initiates a refresh for `backend,` if the `backend` supports
     * refreshing.  The actual refresh operation completes on its own time.  This
     * function, along with e_book_backend_refresh_finish(), merely initiates the
     * operation.
     * 
     * Once the refresh is initiated, `callback` will be called.  You can then
     * call e_book_backend_refresh_finish() to get the result of the initiation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the refresh initiation started with e_book_backend_refresh().
     * 
     * If an error occurred while initiating the refresh, the function will set
     * `error` and return %FALSE.  If the `backend` does not support refreshing,
     * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
     * %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    refresh_finish(result: Gio.AsyncResult): boolean
    /**
     * Initiates a refresh for `backend,` if the `backend` supports refreshing.
     * The actual refresh operation completes on its own time.  This function
     * merely initiates the operation.
     * 
     * If an error occurs while initiating the refresh, the function will set
     * `error` and return %FALSE.  If the `backend` does not support refreshing,
     * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
     * %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    refresh_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously removes one or more contacts according to `uids`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_remove_contacts_finish() to get the result of the
     * operation.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remove_contacts(uids: string[], opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_book_backend_remove_contacts().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    remove_contacts_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    remove_contacts_sync(uids: string | null, opflags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes `view` from `backend`.
     * @param view an #EDataBookView
     */
    remove_view(view: DataBookView): void
    /**
     * Schedules user function `func` to be run in a dedicated thread as
     * a blocking operation.
     * 
     * The function adds its own reference to `use_cancellable,` if not %NULL.
     * 
     * The error returned from `func` is propagated to client using
     * e_book_backend_notify_error() function. If it's not desired,
     * then left the error unchanged and notify about errors manually.
     * @param use_cancellable an optional #GCancellable to use for `func`
     * @param func a function to call in a dedicated thread
     */
    schedule_custom_operation(use_cancellable: Gio.Cancellable | null, func: BookBackendCustomOpFunc): void
    /**
     * Sets the cache directory path for use by `backend`.
     * 
     * Note that #EBookBackend is initialized with a default cache directory
     * path which should suffice for most cases.  Backends should not override
     * the default path without good reason.
     * @param cache_dir a local cache directory path
     */
    set_cache_dir(cache_dir: string | null): void
    /**
     * Sets the #EDataBook for `backend`.  The #EDataBook is essentially the
     * glue between incoming D-Bus requests and `backend'`s native API.
     * 
     * An #EDataBook should be set only once after `backend` is first created.
     * @param data_book an #EDataBook
     */
    set_data_book(data_book: DataBook): void
    /**
     * Notify the addressbook backend that the current locale has
     * changed, this is important for backends which support
     * ordered result lists which are locale sensitive.
     * @param locale the new locale for the addressbook
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    set_locale(locale: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets whether `backend` will accept changes to its data content.
     * @param writable whether `backend` is writable
     */
    set_writable(writable: boolean): void
    /**
     * Starts running the query specified by `view,` emitting signals for
     * matching contacts.
     * @param view the #EDataBookView to start
     */
    start_view(view: DataBookView): void
    /**
     * Stops running the query specified by `view,` emitting no more signals.
     * @param view the #EDataBookView to stop
     */
    stop_view(view: DataBookView): void
    sync(): void

    // Own virtual methods of EDataBook-1.2.EDataBook.BookBackend

    vfunc_closed(sender: string | null): void
    vfunc_impl_configure_direct(config: string | null): void
    vfunc_impl_contains_email(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, email_address: string | null): void
    vfunc_impl_create_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string | null, opflags: number): void
    vfunc_impl_delete_cursor(cursor: DataBookCursor): boolean
    vfunc_impl_dup_locale(): string | null
    vfunc_impl_get_backend_property(prop_name: string | null): string | null
    vfunc_impl_get_contact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string | null): void
    vfunc_impl_get_contact_list(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string | null): void
    vfunc_impl_get_contact_list_uids(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string | null): void
    vfunc_impl_modify_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string | null, opflags: number): void
    vfunc_impl_notify_update(contact: EBookContacts.Contact): void
    vfunc_impl_open(book: DataBook, opid: number, cancellable: Gio.Cancellable | null): void
    vfunc_impl_refresh(book: DataBook, opid: number, cancellable: Gio.Cancellable | null): void
    vfunc_impl_remove_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string | null, opflags: number): void
    vfunc_impl_set_locale(locale: string | null, cancellable: Gio.Cancellable | null): boolean
    vfunc_impl_start_view(view: DataBookView): void
    vfunc_impl_stop_view(view: DataBookView): void
    vfunc_shutdown(): void

    // Own signals of EDataBook-1.2.EDataBook.BookBackend

    connect(sigName: "closed", callback: BookBackend.ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: BookBackend.ClosedSignalCallback): number
    emit(sigName: "closed", sender: string | null, ...args: any[]): void
    connect(sigName: "shutdown", callback: BookBackend.ShutdownSignalCallback): number
    connect_after(sigName: "shutdown", callback: BookBackend.ShutdownSignalCallback): number
    emit(sigName: "shutdown", ...args: any[]): void

    // Class property signals of EDataBook-1.2.EDataBook.BookBackend

    connect(sigName: "notify::cache-dir", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writable", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-prompter", ...args: any[]): void
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
export class BookBackend extends EBackend.Backend {

    // Own properties of EDataBook-1.2.EDataBook.BookBackend

    static name: string
    static $gtype: GObject.GType<BookBackend>

    // Constructors of EDataBook-1.2.EDataBook.BookBackend

    constructor(config?: BookBackend.ConstructorProperties) 
    _init(config?: BookBackend.ConstructorProperties): void
}

export module BookBackendFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends EBackend.BackendFactory.ConstructorProperties {
    }

}

export interface BookBackendFactory {

    // Class property signals of EDataBook-1.2.EDataBook.BookBackendFactory

    connect(sigName: "notify::extensible", callback: (($obj: BookBackendFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extensible", callback: (($obj: BookBackendFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extensible", ...args: any[]): void
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
export class BookBackendFactory extends EBackend.BackendFactory {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendFactory

    static name: string
    static $gtype: GObject.GType<BookBackendFactory>

    // Constructors of EDataBook-1.2.EDataBook.BookBackendFactory

    constructor(config?: BookBackendFactory.ConstructorProperties) 
    _init(config?: BookBackendFactory.ConstructorProperties): void
}

export module BookBackendSExp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BookBackendSExp {

    // Owm methods of EDataBook-1.2.EDataBook.BookBackendSExp

    /**
     * Locks the `sexp`. Other threads cannot use it until
     * it's unlocked with e_book_backend_sexp_unlock().
     */
    lock(): void
    /**
     * Checks if `contact` matches `sexp`.
     * @param contact an #EContact
     * @returns %TRUE if the contact matches, %FALSE otherwise
     */
    match_contact(contact: EBookContacts.Contact): boolean
    /**
     * Checks if `vcard` matches `sexp`.
     * @param vcard a vCard string
     * @returns %TRUE if the vCard matches, %FALSE otherwise
     */
    match_vcard(vcard: string | null): boolean
    /**
     * Retrieve the text expression for the given #EBookBackendSExp object.
     * @returns the text expression
     */
    text(): string | null
    /**
     * Unlocks the `sexp,` previously locked by e_book_backend_sexp_lock().
     */
    unlock(): void

    // Class property signals of EDataBook-1.2.EDataBook.BookBackendSExp

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BookBackendSExp extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSExp

    static name: string
    static $gtype: GObject.GType<BookBackendSExp>

    // Constructors of EDataBook-1.2.EDataBook.BookBackendSExp

    constructor(config?: BookBackendSExp.ConstructorProperties) 
    /**
     * Creates a new #EBookBackendSExp from `text`.
     * @constructor 
     * @param text an s-expression to parse
     * @returns a new #EBookBackendSExp
     */
    constructor(text: string | null) 
    /**
     * Creates a new #EBookBackendSExp from `text`.
     * @constructor 
     * @param text an s-expression to parse
     * @returns a new #EBookBackendSExp
     */
    static new(text: string | null): BookBackendSExp
    _init(config?: BookBackendSExp.ConstructorProperties): void
}

export module BookBackendSync {

    // Constructor properties interface

    export interface ConstructorProperties extends BookBackend.ConstructorProperties {
    }

}

export interface BookBackendSync {

    // Owm methods of EDataBook-1.2.EDataBook.BookBackendSync

    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param email_address an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE when found the @email_address, %FALSE on failure
     */
    contains_email(email_address: string | null, cancellable: Gio.Cancellable | null): boolean

    // Overloads of contains_email

    /**
     * Asynchronously checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_contains_email_finish() to get the result of the
     * operation.
     * @param email_address an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    contains_email(email_address: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Creates one or more new contacts from `vcards,` and deposits an #EContact
     * instance for each newly-created contact in `out_contacts`.
     * 
     * The returned #EContact instances are referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    create_contacts(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]

    // Overloads of create_contacts

    /**
     * Asynchronously creates one or more new contacts from `vcards`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_create_contacts_finish() to get the result of the
     * operation.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    create_contacts(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Obtains an #EContact for `uid`.
     * 
     * The returned #EContact is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param uid a contact ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns an #EContact, or %NULL on error
     */
    get_contact(uid: string | null, cancellable: Gio.Cancellable | null): EBookContacts.Contact

    // Overloads of get_contact

    /**
     * Asynchronously obtains an #EContact for `uid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_book_backend_get_contact_finish() to get the result of the
     * operation.
     * @param uid a contact ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_contact(uid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Obtains a set of #EContact instances which satisfy the criteria specified
     * in `query,` and deposits them in `out_contacts`.
     * 
     * The returned #EContact instances are referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    get_contact_list(query: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]

    // Overloads of get_contact_list

    /**
     * Asynchronously obtains a set of #EContact instances which satisfy the
     * criteria specified in `query`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_get_contact_list_finish() to get the result of the
     * operation.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_contact_list(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Obtains a set of ID strings for contacts which satisfy the criteria
     * specified in `query,` and deposits them in `out_uids`.
     * 
     * The returned ID strings must be freed with g_free() with finished
     * with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    get_contact_list_uids(query: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]

    // Overloads of get_contact_list_uids

    /**
     * Asynchronously obtains a set of ID strings for contacts which satisfy
     * the criteria specified in `query`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_get_contact_list_uids_finish() to get the result of
     * the operation.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_contact_list_uids(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    modify_contacts(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]

    // Overloads of modify_contacts

    /**
     * Asynchronously modifies one or more contacts according to `vcards`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_modify_contacts_finish() to get the result of the
     * operation.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    modify_contacts(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * "Opens" the `backend`.  Opening a backend is something of an outdated
     * concept, but the operation is hanging around for a little while longer.
     * This usually involves some custom initialization logic, and testing of
     * remote authentication if applicable.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    open(cancellable: Gio.Cancellable | null): boolean

    // Overloads of open

    /**
     * Asynchronously "opens" the `backend`.  Opening a backend is something of
     * an outdated concept, but the operation is hanging around for a little
     * while longer.  This usually involves some custom initialization logic,
     * and testing of remote authentication if applicable.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_open_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Initiates a refresh for `backend,` if the `backend` supports refreshing.
     * The actual refresh operation completes on its own time.  This function
     * merely initiates the operation.
     * 
     * If an error occurs while initiating the refresh, the function will set
     * `error` and return %FALSE.  If the `backend` does not support refreshing,
     * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
     * %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    refresh(cancellable: Gio.Cancellable | null): boolean

    // Overloads of refresh

    /**
     * Asynchronously initiates a refresh for `backend,` if the `backend` supports
     * refreshing.  The actual refresh operation completes on its own time.  This
     * function, along with e_book_backend_refresh_finish(), merely initiates the
     * operation.
     * 
     * Once the refresh is initiated, `callback` will be called.  You can then
     * call e_book_backend_refresh_finish() to get the result of the initiation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    remove_contacts(uids: string | null, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_removed_uids */ string[] ]

    // Overloads of remove_contacts

    /**
     * Asynchronously removes one or more contacts according to `uids`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_remove_contacts_finish() to get the result of the
     * operation.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remove_contacts(uids: string[], opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Own virtual methods of EDataBook-1.2.EDataBook.BookBackendSync

    vfunc_contains_email_sync(email_address: string | null, cancellable: Gio.Cancellable | null): boolean
    vfunc_open_sync(cancellable: Gio.Cancellable | null): boolean
    vfunc_refresh_sync(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of EDataBook-1.2.EDataBook.BookBackendSync

    connect(sigName: "notify::cache-dir", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writable", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-prompter", ...args: any[]): void
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
export class BookBackendSync extends BookBackend {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSync

    static name: string
    static $gtype: GObject.GType<BookBackendSync>

    // Constructors of EDataBook-1.2.EDataBook.BookBackendSync

    constructor(config?: BookBackendSync.ConstructorProperties) 
    _init(config?: BookBackendSync.ConstructorProperties): void
}

export module BookCache {

    // Signal callback interfaces

    /**
     * Signal callback interface for `categories-changed`
     */
    export interface CategoriesChangedSignalCallback {
        ($obj: BookCache, object: string | null): void
    }

    /**
     * Signal callback interface for `dup-contact-revision`
     */
    export interface DupContactRevisionSignalCallback {
        ($obj: BookCache, object: EBookContacts.Contact): string | null
    }

    /**
     * Signal callback interface for `e164-changed`
     */
    export interface E164ChangedSignalCallback {
        ($obj: BookCache, object: EBookContacts.Contact, p0: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.Extensible.ConstructorProperties, EBackend.Cache.ConstructorProperties {
    }

}

export interface BookCache extends EDataServer.Extensible {

    // Own properties of EDataBook-1.2.EDataBook.BookCache

    readonly locale: string | null

    // Owm methods of EDataBook-1.2.EDataBook.BookCache

    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the cache.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param email_address an email address to check for
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE when found the @email_address, %FALSE on failure
     */
    contains_email(email_address: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Calculates the `out_total` amount of results for the `cursor'`s query expression,
     * as well as the current `out_position` of `cursor` in the results. The `out_position` is
     * represented as the amount of results which lead up to the current value
     * of `cursor,` if `cursor` currently points to an exact contact, the position
     * also includes the cursor contact.
     * @param cursor The #EBookCacheCursor
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether @out_total and @out_position were successfully calculated.
     */
    cursor_calculate(cursor: BookCacheCursor, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_total */ number | null, /* out_position */ number | null ]
    /**
     * Compares `contact` with `cursor` and returns whether `contact` is less than, equal to, or greater
     * than `cursor`.
     * @param cursor The #EBookCacheCursor
     * @param contact The #EContact to compare
     * @returns A value that is less than, equal to, or greater than zero if @contact is found,    respectively, to be less than, to match, or be greater than the current value of @cursor.
     */
    cursor_compare_contact(cursor: BookCacheCursor, contact: EBookContacts.Contact): [ /* returnType */ number, /* out_matches_sexp */ boolean | null ]
    /**
     * Frees the `cursor,` previously allocated with e_book_cache_cursor_new().
     * @param cursor The #EBookCacheCursor to free
     */
    cursor_free(cursor: BookCacheCursor): void
    /**
     * Modifies the current query expression for `cursor`. This will not
     * modify `cursor'`s state, but will change the outcome of any further
     * calls to e_book_cache_cursor_step() or e_book_cache_cursor_calculate().
     * @param cursor The #EBookCacheCursor to modify
     * @param sexp The new query expression for `cursor`
     * @returns %TRUE if the expression was valid and accepted by @cursor
     */
    cursor_set_sexp(cursor: BookCacheCursor, sexp: string | null): boolean
    /**
     * Sets the `cursor` position to an
     * <link linkend="cursor-alphabet">Alphabetic Index</link>
     * into the alphabet active in `book_cache'`s locale.
     * 
     * After setting the target to an alphabetic index, for example the
     * index for letter 'E', then further calls to e_book_cache_cursor_step()
     * will return results starting with the letter 'E' (or results starting
     * with the last result in 'D', if moving in a negative direction).
     * 
     * The passed index must be a valid index in the active locale, knowledge
     * on the currently active alphabet index must be obtained using #ECollator
     * APIs.
     * 
     * Use e_book_cache_ref_collator() to obtain the active collator for `book_cache`.
     * @param cursor The #EBookCacheCursor to modify
     * @param idx The alphabetic index
     */
    cursor_set_target_alphabetic_index(cursor: BookCacheCursor, idx: number): void
    /**
     * Steps `cursor` through its sorted query by a maximum of `count` contacts
     * starting from `origin`.
     * 
     * If `count` is negative, then the cursor will move through the list in reverse.
     * 
     * If `cursor` reaches the beginning or end of the query results, then the
     * returned list might not contain the amount of desired contacts, or might
     * return no results if the cursor currently points to the last contact.
     * Reaching the end of the list is not considered an error condition. Attempts
     * to step beyond the end of the list after having reached the end of the list
     * will however trigger an %E_CACHE_ERROR_END_OF_LIST error.
     * 
     * If %E_BOOK_CACHE_CURSOR_STEP_FETCH is specified in `flags,` a pointer to
     * a %NULL #GSList pointer should be provided for the `out_results` parameter.
     * 
     * The result list will be stored to `out_results` and should be freed
     * with g_slist_free_full (results, e_book_cache_search_data_free);
     * when no longer needed.
     * @param cursor The #EBookCacheCursor to use
     * @param flags The #EBookCacheCursorStepFlags for this step
     * @param origin The #EBookCacheCursorOrigin from whence to step
     * @param count A positive or negative amount of contacts to try and fetch
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns The number of contacts traversed if successful, otherwise -1 is    returned and the @error is set.
     */
    cursor_step(cursor: BookCacheCursor, flags: BookCacheCursorStepFlags, origin: BookCacheCursorOrigin, count: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* out_results */ BookCacheSearchData[] | null ]
    /**
     * Returns a comma-separated list of categories used by the contacts
     * stored in the `book_cache`. Free the returned string with g_free(),
     * when no longer needed.
     * @returns a comma-separated list of categories    used by the contacts stored in the @book_cache, or %NULL, when no    category is used by any contact.
     */
    dup_categories(): string | null
    /**
     * Returns the `contact` revision, used to detect changes.
     * The returned string should be freed with g_free(), when
     * no longer needed.
     * @param contact an #EContact
     * @returns A newly allocated string containing    revision of the @contact.
     */
    dup_contact_revision(contact: EBookContacts.Contact): string | null
    dup_locale(): string | null
    /**
     * Fetch the #EContact specified by `uid` in `book_cache`.
     * 
     * If `meta_contact` is specified, then a shallow #EContact will be created
     * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param meta_contact Whether an entire contact is desired, or only the metadata
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    get_contact(uid: string | null, meta_contact: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact ]
    /**
     * Gets the custom flags previously set for the `uid,` either with
     * e_book_cache_set_contact_custom_flags(), when adding contacts or
     * when removing contacts in offline.
     * @param uid The uid of the contact to set the extra data for
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_contact_custom_flags(uid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_custom_flags */ number ]
    /**
     * Fetches the extra data previously set for `uid,` either with
     * e_book_cache_set_contact_extra() or when adding contacts.
     * @param uid The uid of the contact to fetch the extra data for
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    get_contact_extra(uid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_extra */ string | null ]
    /**
     * Gets all the UID-s the `extra` data is set for.
     * 
     * The `out_uids` should be freed with
     * g_slist_free_full (uids, g_free);
     * when no longer needed.
     * @param extra an extra column value to search for
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_uids_with_extra(extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    /**
     * Fetch a vCard string for `uid` in `book_cache`.
     * 
     * If `meta_contact` is specified, then a shallow vCard representation will be
     * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param meta_contact Whether an entire contact is desired, or only the metadata
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    get_vcard(uid: string | null, meta_contact: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_vcard */ string | null ]
    /**
     * This is a convenience wrapper for e_book_cache_put_contacts(),
     * which is the preferred way to add or modify multiple contacts when possible.
     * @param contact an #EContact to be added
     * @param extra extra data to store in association with this `contact`
     * @param custom_flags custom flags for the `contact,` not interpreted by the `book_cache`
     * @param offline_flag one of #ECacheOfflineFlag, whether putting this contact in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    put_contact(contact: EBookContacts.Contact, extra: string | null, custom_flags: number, offline_flag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Adds or replaces contacts in `book_cache`.
     * 
     * If `extras` is specified, it must have an equal length as the `contacts` list.
     * Similarly the non-NULL `custom_flags` length should be the same as the length of the `contacts`.
     * Each element from the `extras` list and `custom_flags` list will be stored in association
     * with its corresponding contact in the `contacts` list.
     * @param contacts A list of contacts to add to `book_cache`
     * @param extras A list of extra data to store in association with the `contacts`
     * @param custom_flags optional custom flags to use for the `contacts`
     * @param offline_flag one of #ECacheOfflineFlag, whether putting these contacts in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    put_contacts(contacts: EBookContacts.Contact[], extras: string[] | null, custom_flags: number[] | null, offline_flag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * References the currently active #ECollator for `book_cache,`
     * use e_collator_unref() when finished using the returned collator.
     * 
     * Note that the active collator will change with the active locale setting.
     * @returns A reference to the active collator.
     */
    ref_collator(): EDataServer.Collator
    /**
     * References the #ESource to which `book_cache` is paired,
     * use g_object_unref() when no longer needed.
     * It can be %NULL in some cases, like when running tests.
     * @returns A reference to the #ESource to which    @book_cache is paired, or %NULL.
     */
    ref_source(): EDataServer.Source | null
    /**
     * Removes the contact identified by `uid` from `book_cache`.
     * @param uid the uid of the contact to remove
     * @param custom_flags custom flags for the contact with the given `uid,` not interpreted by the `book_cache`
     * @param offline_flag one of #ECacheOfflineFlag, whether removing this contact in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    remove_contact(uid: string | null, custom_flags: number, offline_flag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes the contacts indicated by `uids` from `book_cache`.
     * The `custom_flags` is used, if not %NULL, only if the `offline_flag`
     * is %E_CACHE_IS_OFFLINE. Otherwise it's ignored. The length of
     * the `custom_flags` should match the length of `uids,` when not %NULL.
     * @param uids a #GSList of uids indicating which contacts to remove
     * @param custom_flags an optional #GSList of custom flags for the `ids`
     * @param offline_flag one of #ECacheOfflineFlag, whether removing these contacts in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    remove_contacts(uids: string[], custom_flags: number[] | null, offline_flag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Searches `book_cache` for contacts matching the search expression `sexp`.
     * 
     * When `sexp` refers only to #EContactFields configured in the summary of `book_cache,`
     * the search should always be quick, when searching for other #EContactFields
     * a fallback will be used.
     * 
     * The returned `out_list` list should be freed with g_slist_free_full (list, e_book_cache_search_data_free)
     * when no longer needed.
     * 
     * If `meta_contact` is specified, then shallow vCard representations will be
     * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param sexp search expression; use %NULL or an empty string to list all stored contacts
     * @param meta_contacts Whether entire contacts are desired, or only the metadata
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    search(sexp: string | null, meta_contacts: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_list */ BookCacheSearchData[] ]
    /**
     * Similar to e_book_cache_search(), but fetches only a list of contact UIDs.
     * 
     * The returned `out_list` list should be freed with g_slist_free_full(list, g_free)
     * when no longer needed.
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    search_uids(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_list */ string[] ]
    /**
     * Similar to e_book_cache_search(), but calls the `func` for each found contact.
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    search_with_callback(sexp: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the custom flags associated with a contact
     * identified by the `uid`.
     * @param uid The uid of the contact to set the extra data for
     * @param custom_flags the custom flags to set for the contact
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    set_contact_custom_flags(uid: string | null, custom_flags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the extra data associated with `uid`.
     * @param uid The uid of the contact to set the extra data for
     * @param extra The extra data to set
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    set_contact_extra(uid: string | null, extra: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Relocalizes any locale specific data in the specified
     * new `lc_collate` locale.
     * 
     * The `lc_collate` locale setting is stored and remembered on
     * subsequent accesses of the cache, changing the locale will
     * store the new locale and will modify sort keys and any
     * locale specific data in the cache.
     * 
     * As a side effect, it's possible that changing the locale
     * will cause stored vCard-s to change.
     * @param lc_collate The new locale for the cache
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether the new locale was successfully set.
     */
    set_locale(lc_collate: string | null, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of EDataBook-1.2.EDataBook.BookCache

    vfunc_categories_changed(categories: string | null): void
    /**
     * Returns the `contact` revision, used to detect changes.
     * The returned string should be freed with g_free(), when
     * no longer needed.
     * @virtual 
     * @param contact an #EContact
     * @returns A newly allocated string containing    revision of the @contact.
     */
    vfunc_dup_contact_revision(contact: EBookContacts.Contact): string | null
    vfunc_e164_changed(contact: EBookContacts.Contact, is_replace: boolean): void

    // Own signals of EDataBook-1.2.EDataBook.BookCache

    connect(sigName: "categories-changed", callback: BookCache.CategoriesChangedSignalCallback): number
    connect_after(sigName: "categories-changed", callback: BookCache.CategoriesChangedSignalCallback): number
    emit(sigName: "categories-changed", object: string | null, ...args: any[]): void
    connect(sigName: "dup-contact-revision", callback: BookCache.DupContactRevisionSignalCallback): number
    connect_after(sigName: "dup-contact-revision", callback: BookCache.DupContactRevisionSignalCallback): number
    emit(sigName: "dup-contact-revision", object: EBookContacts.Contact, ...args: any[]): void
    connect(sigName: "e164-changed", callback: BookCache.E164ChangedSignalCallback): number
    connect_after(sigName: "e164-changed", callback: BookCache.E164ChangedSignalCallback): number
    emit(sigName: "e164-changed", object: EBookContacts.Contact, p0: boolean, ...args: any[]): void

    // Class property signals of EDataBook-1.2.EDataBook.BookCache

    connect(sigName: "notify::locale", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using
 * the functions below.
 * @class 
 */
export class BookCache extends EBackend.Cache {

    // Own properties of EDataBook-1.2.EDataBook.BookCache

    static name: string
    static $gtype: GObject.GType<BookCache>

    // Constructors of EDataBook-1.2.EDataBook.BookCache

    constructor(config?: BookCache.ConstructorProperties) 
    /**
     * Creates a new #EBookCache with the default summary configuration.
     * 
     * Aside from the mandatory fields %E_CONTACT_UID, %E_CONTACT_REV,
     * the default configuration stores the following fields for quick
     * performance of searches: %E_CONTACT_FILE_AS, %E_CONTACT_NICKNAME,
     * %E_CONTACT_FULL_NAME, %E_CONTACT_GIVEN_NAME, %E_CONTACT_FAMILY_NAME,
     * %E_CONTACT_EMAIL, %E_CONTACT_TEL, %E_CONTACT_IS_LIST, %E_CONTACT_LIST_SHOW_ADDRESSES,
     * and %E_CONTACT_WANTS_HTML.
     * 
     * The fields %E_CONTACT_FULL_NAME and %E_CONTACT_EMAIL are configured
     * to respond extra quickly with the %E_BOOK_INDEX_PREFIX index flag.
     * 
     * The fields %E_CONTACT_FILE_AS, %E_CONTACT_FAMILY_NAME and
     * %E_CONTACT_GIVEN_NAME are configured to perform well with
     * the #EBookCacheCursor, using the %E_BOOK_INDEX_SORT_KEY
     * index flag.
     * @constructor 
     * @param filename file name to load or create the new cache
     * @param source an optional #ESource, associated with the #EBookCache, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns A new #EBookCache or %NULL on error
     */
    constructor(filename: string | null, source: EDataServer.Source | null, cancellable: Gio.Cancellable | null) 
    /**
     * Creates a new #EBookCache with the default summary configuration.
     * 
     * Aside from the mandatory fields %E_CONTACT_UID, %E_CONTACT_REV,
     * the default configuration stores the following fields for quick
     * performance of searches: %E_CONTACT_FILE_AS, %E_CONTACT_NICKNAME,
     * %E_CONTACT_FULL_NAME, %E_CONTACT_GIVEN_NAME, %E_CONTACT_FAMILY_NAME,
     * %E_CONTACT_EMAIL, %E_CONTACT_TEL, %E_CONTACT_IS_LIST, %E_CONTACT_LIST_SHOW_ADDRESSES,
     * and %E_CONTACT_WANTS_HTML.
     * 
     * The fields %E_CONTACT_FULL_NAME and %E_CONTACT_EMAIL are configured
     * to respond extra quickly with the %E_BOOK_INDEX_PREFIX index flag.
     * 
     * The fields %E_CONTACT_FILE_AS, %E_CONTACT_FAMILY_NAME and
     * %E_CONTACT_GIVEN_NAME are configured to perform well with
     * the #EBookCacheCursor, using the %E_BOOK_INDEX_SORT_KEY
     * index flag.
     * @constructor 
     * @param filename file name to load or create the new cache
     * @param source an optional #ESource, associated with the #EBookCache, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns A new #EBookCache or %NULL on error
     */
    static new(filename: string | null, source: EDataServer.Source | null, cancellable: Gio.Cancellable | null): BookCache
    /**
     * Creates a new #EBookCache with the given or the default summary configuration.
     * 
     * Like e_book_sqlite_new(), but allows configuration of which contact fields
     * will be stored for quick reference in the summary. The configuration indicated by
     * `setup` will only be taken into account when initially creating the underlying table,
     * further configurations will be ignored.
     * 
     * The fields %E_CONTACT_UID and %E_CONTACT_REV are not optional,
     * they will be stored in the summary regardless of this function's parameters.
     * Only #EContactFields with the type %G_TYPE_STRING, %G_TYPE_BOOLEAN or
     * %E_TYPE_CONTACT_ATTR_LIST are currently supported.
     * @constructor 
     * @param filename file name to load or create the new cache
     * @param source an optional #ESource, associated with the #EBookCache, or %NULL
     * @param setup an #ESourceBackendSummarySetup describing how the summary should be setup, or %NULL to use the default
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns A new #EBookCache or %NULL on error
     */
    static new_full(filename: string | null, source: EDataServer.Source | null, setup: EBookContacts.SourceBackendSummarySetup | null, cancellable: Gio.Cancellable | null): BookCache
    _init(config?: BookCache.ConstructorProperties): void
}

export module BookMetaBackend {

    // Signal callback interfaces

    /**
     * Signal callback interface for `refresh-completed`
     */
    export interface RefreshCompletedSignalCallback {
        ($obj: BookMetaBackend): void
    }

    /**
     * Signal callback interface for `source-changed`
     */
    export interface SourceChangedSignalCallback {
        ($obj: BookMetaBackend): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends BookBackendSync.ConstructorProperties {

        // Own constructor properties of EDataBook-1.2.EDataBook.BookMetaBackend

        /**
         * The #EBookCache being used for this meta backend.
         */
        cache?: BookCache | null
    }

}

export interface BookMetaBackend {

    // Own properties of EDataBook-1.2.EDataBook.BookMetaBackend

    /**
     * The #EBookCache being used for this meta backend.
     */
    cache: BookCache

    // Owm methods of EDataBook-1.2.EDataBook.BookMetaBackend

    /**
     * This is called always before any operation which requires a connection
     * to the remote side. It can fail with an #E_CLIENT_ERROR_REPOSITORY_OFFLINE
     * error to indicate that the remote side cannot be currently reached. Other
     * errors are propagated to the caller/client side. This method is not called
     * when the backend is offline.
     * 
     * The descendant should also call e_book_backend_set_writable() after successful
     * connect to the remote side. This value is stored for later use, when being
     * opened offline.
     * 
     * The `credentials` parameter consists of the previously used credentials.
     * It's always %NULL with the first connection attempt. To get the credentials,
     * just set the `out_auth_result` to %E_SOURCE_AUTHENTICATION_REQUIRED for
     * the first time and the function will be called again once the credentials
     * are available. See the documentation of #ESourceAuthenticationResult for
     * other available results.
     * 
     * The out parameters are passed to e_backend_schedule_credentials_required()
     * and are ignored when the descendant returns %TRUE, aka they are used
     * only if the connection fails. The `out_certificate_pem` and `out_certificate_errors`
     * should be used together and they can be left untouched if the failure reason was
     * not related to certificate. Use `out_auth_result` %E_SOURCE_AUTHENTICATION_UNKNOWN
     * to indicate other error than `credentials` error, otherwise the `error` is used
     * according to `out_auth_result` value.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @param credentials an #ENamedParameters with previously used credentials, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    connect_sync(credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    /**
     * This is called when the backend goes into offline mode or
     * when the disconnect is required. The implementation should
     * not report any error when it is called and the `meta_backend`
     * is not connected.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    disconnect_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the last known synchronization tag, the same as used to
     * call e_book_meta_backend_get_changes_sync().
     * 
     * Free the returned string with g_free(), when no longer needed.
     * @returns The last known synchronization tag,    or %NULL, when none is stored.
     */
    dup_sync_tag(): string | null
    /**
     * Empties the local cache by removing all known contacts from it
     * and notifies about such removal any opened views.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    empty_cache_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Ensures that the `meta_backend` is connected to its destination.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    ensure_connected_sync(cancellable: Gio.Cancellable | null): boolean
    get_capabilities(): string | null
    /**
     * Gathers the changes since the last check which had been done
     * on the remote side.
     * 
     * The `last_sync_tag` can be used as a tag of the last check. This can be %NULL,
     * when there was no previous call or when the descendant doesn't store any
     * such tags. The `out_new_sync_tag` can be populated with a value to be stored
     * and used the next time.
     * 
     * The `out_repeat` can be set to %TRUE when the descendant didn't finish
     * read of all the changes. In that case the `meta_backend` calls this
     * function again with the `out_new_sync_tag` as the `last_sync_tag,` but also
     * notifies about the found changes immediately. The `is_repeat` is set
     * to %TRUE as well in this case, otherwise it's %FALSE.
     * 
     * The descendant can populate also EBookMetaBackendInfo::object of
     * the `out_created_objects` and `out_modified_objects,` if known, in which
     * case this will be used instead of loading it with e_book_meta_backend_load_contact_sync().
     * 
     * It is optional to implement this virtual method by the descendant.
     * The default implementation calls e_book_meta_backend_list_existing_sync()
     * and then compares the list with the current content of the local cache
     * and populates the respective lists appropriately.
     * 
     * Each output #GSList should be freed with
     * g_slist_free_full (objects, e_book_meta_backend_info_free);
     * when no longer needed.
     * @param last_sync_tag optional sync tag from the last check
     * @param is_repeat set to %TRUE when this is the repeated call
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_changes_sync(last_sync_tag: string | null, is_repeat: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string | null, /* out_repeat */ boolean, /* out_created_objects */ BookMetaBackendInfo[], /* out_modified_objects */ BookMetaBackendInfo[], /* out_removed_objects */ BookMetaBackendInfo[] ]
    /**
     * This value has meaning only if e_book_meta_backend_get_ever_connected()
     * is %TRUE.
     * @returns Whether the @meta_backend connected to a writable destination.
     */
    get_connected_writable(): boolean
    get_ever_connected(): boolean
    /**
     * It is optional to implement this virtual method by the descendants.
     * It is used to receive SSL error details when any online operation
     * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
     * @returns %TRUE, when the SSL error details had been available and    the out parameters populated, %FALSE otherwise.
     */
    get_ssl_error_details(): [ /* returnType */ boolean, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    /**
     * Changes all URL photos and logos which point to a local file in `contact`
     * to inline type, aka adds the file content into the `contact`.
     * This is called automatically before e_book_meta_backend_save_contact_sync().
     * 
     * The reverse operation is e_book_meta_backend_store_inline_photos_sync().
     * @param contact an #EContact to work with
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    inline_local_photos_sync(contact: EBookContacts.Contact, cancellable: Gio.Cancellable | null): boolean
    /**
     * Used to get list of all existing objects on the remote side. The descendant
     * can optionally provide `out_new_sync_tag,` which will be stored on success, if
     * not %NULL. The descendant can populate also EBookMetaBackendInfo::object of
     * the `out_existing_objects,` if known, in which case this will be used instead
     * of loading it with e_book_meta_backend_load_contact_sync().
     * 
     * It is mandatory to implement this virtual method by the descendant, unless
     * it implements its own #EBookMetaBackendClass.get_changes_sync().
     * 
     * The `out_existing_objects` #GSList should be freed with
     * g_slist_free_full (objects, e_book_meta_backend_info_free);
     * when no longer needed.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    list_existing_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string | null, /* out_existing_objects */ BookMetaBackendInfo[] ]
    /**
     * Loads a contact from the remote side.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * 
     * The returned `out_contact` should be freed with g_object_unref(),
     * when no longer needed.
     * 
     * The returned `out_extra` should be freed with g_free(), when no longer
     * needed.
     * @param uid a contact UID
     * @param extra optional extra data stored with the contact, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    load_contact_sync(uid: string | null, extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact, /* out_extra */ string | null ]
    /**
     * Processes given changes by updating local cache content accordingly.
     * The `meta_backend` processes the changes like being online and particularly
     * requires to be online to load created and modified objects when needed.
     * @param created_objects     a #GSList of #EBookMetaBackendInfo object infos which had been created
     * @param modified_objects     a #GSList of #EBookMetaBackendInfo object infos which had been modified
     * @param removed_objects     a #GSList of #EBookMetaBackendInfo object infos which had been removed
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    process_changes_sync(created_objects: BookMetaBackendInfo[] | null, modified_objects: BookMetaBackendInfo[] | null, removed_objects: BookMetaBackendInfo[] | null, cancellable: Gio.Cancellable | null): boolean
    ref_cache(): BookCache
    /**
     * Refreshes the `meta_backend` immediately. To just schedule refresh
     * operation call e_book_meta_backend_schedule_refresh().
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    refresh_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes a contact from the remote side. The `object` is not %NULL when
     * it's removing locally deleted object in offline mode. Being it %NULL,
     * the descendant can obtain the object from the #EBookCache.
     * 
     * It is mandatory to implement this virtual method by the writable descendant.
     * @param conflict_resolution an #EConflictResolution to use
     * @param uid a contact UID
     * @param extra extra data being saved with the contact in the local cache, or %NULL
     * @param object corresponding vCard object, as stored in the local cache, or %NULL
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    remove_contact_sync(conflict_resolution: EDataServer.ConflictResolution, uid: string | null, extra: string | null, object: string | null, opflags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Determines, whether current source content requires reconnect of the backend.
     * 
     * It is optional to implement this virtual method by the descendant. The default
     * implementation compares %E_SOURCE_EXTENSION_AUTHENTICATION and
     * %E_SOURCE_EXTENSION_WEBDAV_BACKEND, if existing in the source,
     * with the values after the last successful connect and returns
     * %TRUE when they changed. It always return %TRUE when there was
     * no successful connect done yet.
     * @returns %TRUE, when reconnect is required, %FALSE otherwise.
     */
    requires_reconnect(): boolean
    /**
     * Saves one contact into the remote side.  When the `overwrite_existing` is %TRUE, then
     * the descendant can overwrite an object with the same UID on the remote side
     * (usually used for modify). The `conflict_resolution` defines what to do when
     * the remote side had made any changes to the object since the last update.
     * 
     * The `contact` has already converted locally stored photos and logos
     * into inline variants, thus it's not needed to call
     * e_book_meta_backend_inline_local_photos_sync() by the descendant.
     * 
     * The `out_new_uid` can be populated with a UID of the saved contact as the server
     * assigned it to it. This UID, if set, is loaded from the remote side afterwards,
     * also to see whether any changes had been made to the contact by the remote side.
     * 
     * The `out_new_extra` can be populated with a new extra data to save with the contact.
     * Left it %NULL, to keep the same value as the `extra`.
     * 
     * The descendant can use an #E_CLIENT_ERROR_OUT_OF_SYNC error to indicate that
     * the save failed due to made changes on the remote side, and let the `meta_backend`
     * resolve this conflict based on the `conflict_resolution` on its own.
     * The #E_CLIENT_ERROR_OUT_OF_SYNC error should not be used when the descendant
     * is able to resolve the conflicts itself.
     * 
     * It is mandatory to implement this virtual method by the writable descendant.
     * @param overwrite_existing %TRUE when can overwrite existing contacts, %FALSE otherwise
     * @param conflict_resolution one of #EConflictResolution, what to do on conflicts
     * @param contact an #EContact to save
     * @param extra extra data saved with the contacts in an #EBookCache
     * @param opflags bit-or of EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    save_contact_sync(overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_uid */ string | null, /* out_new_extra */ string | null ]
    /**
     * Schedules refresh of the content of the `meta_backend`. If there's any
     * already scheduled, then the function does nothing.
     * 
     * Use e_book_meta_backend_refresh_sync() to refresh the `meta_backend`
     * immediately.
     */
    schedule_refresh(): void
    /**
     * Searches `meta_backend` with given expression `expr` and returns
     * found contacts as a #GSList of #EContact `out_contacts`.
     * Free the returned `out_contacts` with g_slist_free_full (contacts, g_object_unref);
     * when no longer needed.
     * When the `expr` is %NULL, all objects are returned. To get
     * UID-s instead, call e_book_meta_backend_search_uids_sync().
     * 
     * It is optional to implement this virtual method by the descendant.
     * The default implementation searches `meta_backend'`s cache. It's also
     * not required to be online for searching, thus `meta_backend` doesn't
     * ensure it.
     * @param expr a search expression, or %NULL
     * @param meta_contact %TRUE, when return #EContact filled with UID and REV only, %FALSE to return full contacts
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    search_sync(expr: string | null, meta_contact: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    /**
     * Searches `meta_backend` with given expression `expr` and returns
     * found contact UID-s as a #GSList `out_contacts`.
     * Free the returned `out_uids` with g_slist_free_full (uids, g_free);
     * when no longer needed.
     * When the `expr` is %NULL, all UID-s are returned. To get #EContact(s)
     * instead, call e_book_meta_backend_search_sync().
     * 
     * It is optional to implement this virtual method by the descendant.
     * The default implementation searches `meta_backend'`s cache. It's also
     * not required to be online for searching, thus `meta_backend` doesn't
     * ensure it.
     * @param expr a search expression, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    search_uids_sync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    /**
     * Sets the `cache` as the cache to be used by the `meta_backend`.
     * By default, a cache.db in EBookBackend::cache-dir is created
     * in the constructed method. This function can be used to override
     * the default.
     * 
     * Note the `meta_backend` adds its own reference to the `cache`.
     * @param cache an #EBookCache to use
     */
    set_cache(cache: BookCache): void
    /**
     * Sets whether the `meta_backend` connected to a writable destination.
     * This value has meaning only if e_book_meta_backend_get_ever_connected()
     * is %TRUE.
     * 
     * This is used by the `meta_backend` itself, during the opening phase,
     * to set the backend writable or not also in the offline mode.
     * @param value value to set
     */
    set_connected_writable(value: boolean): void
    /**
     * Sets whether the `meta_backend` ever made a successful connection
     * to its destination.
     * 
     * This is used by the `meta_backend` itself, during the opening phase,
     * when it had not been connected yet, then it does so immediately, to
     * eventually report settings error easily.
     * @param value value to set
     */
    set_ever_connected(value: boolean): void
    /**
     * Splits `objects` into created/modified/removed lists according to current local
     * cache content. Only the `out_removed_objects` can be %NULL, others cannot.
     * The function modifies `objects` by moving its 'data' to corresponding out
     * lists and sets the `objects` 'data' to %NULL.
     * 
     * Each output #GSList should be freed with
     * g_slist_free_full (objects, e_book_meta_backend_info_free);
     * when no longer needed.
     * 
     * The caller is still responsible to free `objects` as well.
     * @param objects     a #GSList of #EBookMetaBackendInfo object infos to split
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    split_changes_sync(objects: BookMetaBackendInfo[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* objects */ BookMetaBackendInfo[], /* out_created_objects */ BookMetaBackendInfo[], /* out_modified_objects */ BookMetaBackendInfo[], /* out_removed_objects */ BookMetaBackendInfo[] | null ]
    /**
     * Changes all inline photos and logos to URL type in `contact,` which
     * will point to a local file instead, beside the cache file.
     * This is called automatically after e_book_meta_backend_load_contact_sync().
     * 
     * The reverse operation is e_book_meta_backend_inline_local_photos_sync().
     * @param contact an #EContact to work with
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    store_inline_photos_sync(contact: EBookContacts.Contact, cancellable: Gio.Cancellable | null): boolean

    // Conflicting methods

    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param email_address an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE when found the @email_address, %FALSE on failure
     */
    contains_email(email_address: string | null, cancellable: Gio.Cancellable | null): boolean

    // Overloads of contains_email

    /**
     * Asynchronously checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_contains_email_finish() to get the result of the
     * operation.
     * @param email_address an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    contains_email(email_address: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_contains_email_finish() to get the result of the
     * operation.
     * @param email_address an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    contains_email(email_address: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Creates one or more new contacts from `vcards,` and deposits an #EContact
     * instance for each newly-created contact in `out_contacts`.
     * 
     * The returned #EContact instances are referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    create_contacts(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]

    // Overloads of create_contacts

    /**
     * Asynchronously creates one or more new contacts from `vcards`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_create_contacts_finish() to get the result of the
     * operation.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    create_contacts(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously creates one or more new contacts from `vcards`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_create_contacts_finish() to get the result of the
     * operation.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    create_contacts(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Obtains an #EContact for `uid`.
     * 
     * The returned #EContact is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param uid a contact ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns an #EContact, or %NULL on error
     */
    get_contact(uid: string | null, cancellable: Gio.Cancellable | null): EBookContacts.Contact

    // Overloads of get_contact

    /**
     * Asynchronously obtains an #EContact for `uid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_book_backend_get_contact_finish() to get the result of the
     * operation.
     * @param uid a contact ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_contact(uid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously obtains an #EContact for `uid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_book_backend_get_contact_finish() to get the result of the
     * operation.
     * @param uid a contact ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_contact(uid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Obtains a set of #EContact instances which satisfy the criteria specified
     * in `query,` and deposits them in `out_contacts`.
     * 
     * The returned #EContact instances are referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    get_contact_list(query: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]

    // Overloads of get_contact_list

    /**
     * Asynchronously obtains a set of #EContact instances which satisfy the
     * criteria specified in `query`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_get_contact_list_finish() to get the result of the
     * operation.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_contact_list(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously obtains a set of #EContact instances which satisfy the
     * criteria specified in `query`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_get_contact_list_finish() to get the result of the
     * operation.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_contact_list(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Obtains a set of ID strings for contacts which satisfy the criteria
     * specified in `query,` and deposits them in `out_uids`.
     * 
     * The returned ID strings must be freed with g_free() with finished
     * with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    get_contact_list_uids(query: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]

    // Overloads of get_contact_list_uids

    /**
     * Asynchronously obtains a set of ID strings for contacts which satisfy
     * the criteria specified in `query`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_get_contact_list_uids_finish() to get the result of
     * the operation.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_contact_list_uids(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously obtains a set of ID strings for contacts which satisfy
     * the criteria specified in `query`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_get_contact_list_uids_finish() to get the result of
     * the operation.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_contact_list_uids(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    modify_contacts(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]

    // Overloads of modify_contacts

    /**
     * Asynchronously modifies one or more contacts according to `vcards`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_modify_contacts_finish() to get the result of the
     * operation.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    modify_contacts(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously modifies one or more contacts according to `vcards`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_modify_contacts_finish() to get the result of the
     * operation.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    modify_contacts(vcards: string | null, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * "Opens" the `backend`.  Opening a backend is something of an outdated
     * concept, but the operation is hanging around for a little while longer.
     * This usually involves some custom initialization logic, and testing of
     * remote authentication if applicable.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    open(cancellable: Gio.Cancellable | null): boolean

    // Overloads of open

    /**
     * Asynchronously "opens" the `backend`.  Opening a backend is something of
     * an outdated concept, but the operation is hanging around for a little
     * while longer.  This usually involves some custom initialization logic,
     * and testing of remote authentication if applicable.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_open_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously "opens" the `backend`.  Opening a backend is something of
     * an outdated concept, but the operation is hanging around for a little
     * while longer.  This usually involves some custom initialization logic,
     * and testing of remote authentication if applicable.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_open_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Initiates a refresh for `backend,` if the `backend` supports refreshing.
     * The actual refresh operation completes on its own time.  This function
     * merely initiates the operation.
     * 
     * If an error occurs while initiating the refresh, the function will set
     * `error` and return %FALSE.  If the `backend` does not support refreshing,
     * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
     * %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    refresh(cancellable: Gio.Cancellable | null): boolean

    // Overloads of refresh

    /**
     * Asynchronously initiates a refresh for `backend,` if the `backend` supports
     * refreshing.  The actual refresh operation completes on its own time.  This
     * function, along with e_book_backend_refresh_finish(), merely initiates the
     * operation.
     * 
     * Once the refresh is initiated, `callback` will be called.  You can then
     * call e_book_backend_refresh_finish() to get the result of the initiation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously initiates a refresh for `backend,` if the `backend` supports
     * refreshing.  The actual refresh operation completes on its own time.  This
     * function, along with e_book_backend_refresh_finish(), merely initiates the
     * operation.
     * 
     * Once the refresh is initiated, `callback` will be called.  You can then
     * call e_book_backend_refresh_finish() to get the result of the initiation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    remove_contacts(uids: string | null, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_removed_uids */ string[] ]

    // Overloads of remove_contacts

    /**
     * Asynchronously removes one or more contacts according to `uids`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_remove_contacts_finish() to get the result of the
     * operation.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remove_contacts(uids: string[], opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously removes one or more contacts according to `uids`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_remove_contacts_finish() to get the result of the
     * operation.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remove_contacts(uids: string[], opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Own virtual methods of EDataBook-1.2.EDataBook.BookMetaBackend

    /**
     * This is called always before any operation which requires a connection
     * to the remote side. It can fail with an #E_CLIENT_ERROR_REPOSITORY_OFFLINE
     * error to indicate that the remote side cannot be currently reached. Other
     * errors are propagated to the caller/client side. This method is not called
     * when the backend is offline.
     * 
     * The descendant should also call e_book_backend_set_writable() after successful
     * connect to the remote side. This value is stored for later use, when being
     * opened offline.
     * 
     * The `credentials` parameter consists of the previously used credentials.
     * It's always %NULL with the first connection attempt. To get the credentials,
     * just set the `out_auth_result` to %E_SOURCE_AUTHENTICATION_REQUIRED for
     * the first time and the function will be called again once the credentials
     * are available. See the documentation of #ESourceAuthenticationResult for
     * other available results.
     * 
     * The out parameters are passed to e_backend_schedule_credentials_required()
     * and are ignored when the descendant returns %TRUE, aka they are used
     * only if the connection fails. The `out_certificate_pem` and `out_certificate_errors`
     * should be used together and they can be left untouched if the failure reason was
     * not related to certificate. Use `out_auth_result` %E_SOURCE_AUTHENTICATION_UNKNOWN
     * to indicate other error than `credentials` error, otherwise the `error` is used
     * according to `out_auth_result` value.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @virtual 
     * @param credentials an #ENamedParameters with previously used credentials, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_connect_sync(credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    /**
     * This is called when the backend goes into offline mode or
     * when the disconnect is required. The implementation should
     * not report any error when it is called and the `meta_backend`
     * is not connected.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_disconnect_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Gathers the changes since the last check which had been done
     * on the remote side.
     * 
     * The `last_sync_tag` can be used as a tag of the last check. This can be %NULL,
     * when there was no previous call or when the descendant doesn't store any
     * such tags. The `out_new_sync_tag` can be populated with a value to be stored
     * and used the next time.
     * 
     * The `out_repeat` can be set to %TRUE when the descendant didn't finish
     * read of all the changes. In that case the `meta_backend` calls this
     * function again with the `out_new_sync_tag` as the `last_sync_tag,` but also
     * notifies about the found changes immediately. The `is_repeat` is set
     * to %TRUE as well in this case, otherwise it's %FALSE.
     * 
     * The descendant can populate also EBookMetaBackendInfo::object of
     * the `out_created_objects` and `out_modified_objects,` if known, in which
     * case this will be used instead of loading it with e_book_meta_backend_load_contact_sync().
     * 
     * It is optional to implement this virtual method by the descendant.
     * The default implementation calls e_book_meta_backend_list_existing_sync()
     * and then compares the list with the current content of the local cache
     * and populates the respective lists appropriately.
     * 
     * Each output #GSList should be freed with
     * g_slist_free_full (objects, e_book_meta_backend_info_free);
     * when no longer needed.
     * @virtual 
     * @param last_sync_tag optional sync tag from the last check
     * @param is_repeat set to %TRUE when this is the repeated call
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_get_changes_sync(last_sync_tag: string | null, is_repeat: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string | null, /* out_repeat */ boolean, /* out_created_objects */ BookMetaBackendInfo[], /* out_modified_objects */ BookMetaBackendInfo[], /* out_removed_objects */ BookMetaBackendInfo[] ]
    /**
     * It is optional to implement this virtual method by the descendants.
     * It is used to receive SSL error details when any online operation
     * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
     * @virtual 
     * @returns %TRUE, when the SSL error details had been available and    the out parameters populated, %FALSE otherwise.
     */
    vfunc_get_ssl_error_details(): [ /* returnType */ boolean, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    /**
     * Used to get list of all existing objects on the remote side. The descendant
     * can optionally provide `out_new_sync_tag,` which will be stored on success, if
     * not %NULL. The descendant can populate also EBookMetaBackendInfo::object of
     * the `out_existing_objects,` if known, in which case this will be used instead
     * of loading it with e_book_meta_backend_load_contact_sync().
     * 
     * It is mandatory to implement this virtual method by the descendant, unless
     * it implements its own #EBookMetaBackendClass.get_changes_sync().
     * 
     * The `out_existing_objects` #GSList should be freed with
     * g_slist_free_full (objects, e_book_meta_backend_info_free);
     * when no longer needed.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_list_existing_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string | null, /* out_existing_objects */ BookMetaBackendInfo[] ]
    /**
     * Loads a contact from the remote side.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * 
     * The returned `out_contact` should be freed with g_object_unref(),
     * when no longer needed.
     * 
     * The returned `out_extra` should be freed with g_free(), when no longer
     * needed.
     * @virtual 
     * @param uid a contact UID
     * @param extra optional extra data stored with the contact, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_load_contact_sync(uid: string | null, extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact, /* out_extra */ string | null ]
    /**
     * Removes a contact from the remote side. The `object` is not %NULL when
     * it's removing locally deleted object in offline mode. Being it %NULL,
     * the descendant can obtain the object from the #EBookCache.
     * 
     * It is mandatory to implement this virtual method by the writable descendant.
     * @virtual 
     * @param conflict_resolution an #EConflictResolution to use
     * @param uid a contact UID
     * @param extra extra data being saved with the contact in the local cache, or %NULL
     * @param object corresponding vCard object, as stored in the local cache, or %NULL
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_remove_contact_sync(conflict_resolution: EDataServer.ConflictResolution, uid: string | null, extra: string | null, object: string | null, opflags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Determines, whether current source content requires reconnect of the backend.
     * 
     * It is optional to implement this virtual method by the descendant. The default
     * implementation compares %E_SOURCE_EXTENSION_AUTHENTICATION and
     * %E_SOURCE_EXTENSION_WEBDAV_BACKEND, if existing in the source,
     * with the values after the last successful connect and returns
     * %TRUE when they changed. It always return %TRUE when there was
     * no successful connect done yet.
     * @virtual 
     * @returns %TRUE, when reconnect is required, %FALSE otherwise.
     */
    vfunc_requires_reconnect(): boolean
    /**
     * Saves one contact into the remote side.  When the `overwrite_existing` is %TRUE, then
     * the descendant can overwrite an object with the same UID on the remote side
     * (usually used for modify). The `conflict_resolution` defines what to do when
     * the remote side had made any changes to the object since the last update.
     * 
     * The `contact` has already converted locally stored photos and logos
     * into inline variants, thus it's not needed to call
     * e_book_meta_backend_inline_local_photos_sync() by the descendant.
     * 
     * The `out_new_uid` can be populated with a UID of the saved contact as the server
     * assigned it to it. This UID, if set, is loaded from the remote side afterwards,
     * also to see whether any changes had been made to the contact by the remote side.
     * 
     * The `out_new_extra` can be populated with a new extra data to save with the contact.
     * Left it %NULL, to keep the same value as the `extra`.
     * 
     * The descendant can use an #E_CLIENT_ERROR_OUT_OF_SYNC error to indicate that
     * the save failed due to made changes on the remote side, and let the `meta_backend`
     * resolve this conflict based on the `conflict_resolution` on its own.
     * The #E_CLIENT_ERROR_OUT_OF_SYNC error should not be used when the descendant
     * is able to resolve the conflicts itself.
     * 
     * It is mandatory to implement this virtual method by the writable descendant.
     * @virtual 
     * @param overwrite_existing %TRUE when can overwrite existing contacts, %FALSE otherwise
     * @param conflict_resolution one of #EConflictResolution, what to do on conflicts
     * @param contact an #EContact to save
     * @param extra extra data saved with the contacts in an #EBookCache
     * @param opflags bit-or of EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_save_contact_sync(overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_uid */ string | null, /* out_new_extra */ string | null ]
    /**
     * Searches `meta_backend` with given expression `expr` and returns
     * found contacts as a #GSList of #EContact `out_contacts`.
     * Free the returned `out_contacts` with g_slist_free_full (contacts, g_object_unref);
     * when no longer needed.
     * When the `expr` is %NULL, all objects are returned. To get
     * UID-s instead, call e_book_meta_backend_search_uids_sync().
     * 
     * It is optional to implement this virtual method by the descendant.
     * The default implementation searches `meta_backend'`s cache. It's also
     * not required to be online for searching, thus `meta_backend` doesn't
     * ensure it.
     * @virtual 
     * @param expr a search expression, or %NULL
     * @param meta_contact %TRUE, when return #EContact filled with UID and REV only, %FALSE to return full contacts
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_search_sync(expr: string | null, meta_contact: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    /**
     * Searches `meta_backend` with given expression `expr` and returns
     * found contact UID-s as a #GSList `out_contacts`.
     * Free the returned `out_uids` with g_slist_free_full (uids, g_free);
     * when no longer needed.
     * When the `expr` is %NULL, all UID-s are returned. To get #EContact(s)
     * instead, call e_book_meta_backend_search_sync().
     * 
     * It is optional to implement this virtual method by the descendant.
     * The default implementation searches `meta_backend'`s cache. It's also
     * not required to be online for searching, thus `meta_backend` doesn't
     * ensure it.
     * @virtual 
     * @param expr a search expression, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_search_uids_sync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    vfunc_source_changed(): void

    // Own signals of EDataBook-1.2.EDataBook.BookMetaBackend

    connect(sigName: "refresh-completed", callback: BookMetaBackend.RefreshCompletedSignalCallback): number
    connect_after(sigName: "refresh-completed", callback: BookMetaBackend.RefreshCompletedSignalCallback): number
    emit(sigName: "refresh-completed", ...args: any[]): void
    connect(sigName: "source-changed", callback: BookMetaBackend.SourceChangedSignalCallback): number
    connect_after(sigName: "source-changed", callback: BookMetaBackend.SourceChangedSignalCallback): number
    emit(sigName: "source-changed", ...args: any[]): void

    // Class property signals of EDataBook-1.2.EDataBook.BookMetaBackend

    connect(sigName: "notify::cache", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::cache-dir", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writable", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-prompter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using
 * the functions below.
 * @class 
 */
export class BookMetaBackend extends BookBackendSync {

    // Own properties of EDataBook-1.2.EDataBook.BookMetaBackend

    static name: string
    static $gtype: GObject.GType<BookMetaBackend>

    // Constructors of EDataBook-1.2.EDataBook.BookMetaBackend

    constructor(config?: BookMetaBackend.ConstructorProperties) 
    _init(config?: BookMetaBackend.ConstructorProperties): void
}

export module BookSqlite {

    // Signal callback interfaces

    /**
     * Signal callback interface for `before-insert-contact`
     */
    export interface BeforeInsertContactSignalCallback {
        ($obj: BookSqlite, object: any | null, p0: EBookContacts.Contact, p1: string | null, p2: boolean, p3: GObject.Object, p4: any | null): boolean
    }

    /**
     * Signal callback interface for `before-remove-contact`
     */
    export interface BeforeRemoveContactSignalCallback {
        ($obj: BookSqlite, object: any | null, p0: string | null, p1: Gio.Cancellable | null, p2: any | null): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.Extensible.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BookSqlite extends EDataServer.Extensible {

    // Owm methods of EDataBook-1.2.EDataBook.BookSqlite

    add_contact(contact: EBookContacts.Contact, extra: string | null, replace: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Adds or replaces contacts in `ebsql`. If `replace_existing` is specified then existing
     * contacts with the same UID will be replaced, otherwise adding an existing contact
     * will return an error.
     * 
     * If `extra` is specified, it must have an equal length as the `contacts` list. Each element
     * from the `extra` list will be stored in association with it's corresponding contact
     * in the `contacts` list.
     * @param contacts A list of contacts to add to `ebsql`
     * @param extra A list of extra data to store in association with this contact
     * @param replace Whether this contact should replace another contact with the same UID.
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    add_contacts(contacts: EBookContacts.Contact[], extra: string[] | null, replace: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Executes an SQLite statement. Use e_book_sqlite_select() for
     * SELECT statements.
     * @param sql_stmt an SQLite statement to execute
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    exec(sql_stmt: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Fetch the #EContact specified by `uid` in `ebsql`.
     * 
     * If `meta_contact` is specified, then a shallow #EContact will be created
     * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param meta_contact Whether an entire contact is desired, or only the metadata
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    get_contact(uid: string | null, meta_contact: boolean): [ /* returnType */ boolean, /* ret_contact */ EBookContacts.Contact ]
    /**
     * Fetches the extra data previously set for `uid,` either with
     * e_book_sqlite_set_contact_extra() or when adding contacts.
     * @param uid The uid of the contact to fetch the extra data for
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    get_contact_extra(uid: string | null): [ /* returnType */ boolean, /* ret_extra */ string | null ]
    /**
     * Fetches the value for `key` and stores it in `value`
     * @param key The key to fetch a value for
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    get_key_value(key: string | null): [ /* returnType */ boolean, /* value */ string | null ]
    /**
     * A convenience function to fetch the value of `key` as an integer.
     * @param key The key to fetch a value for
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    get_key_value_int(key: string | null): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Fetches the current locale setting for the address-book.
     * 
     * Upon success, `lc_collate_out` will hold the returned locale setting,
     * otherwise %FALSE will be returned and `error` will be updated accordingly.
     * @returns Whether the locale was successfully fetched.
     */
    get_locale(): [ /* returnType */ boolean, /* locale_out */ string | null ]
    /**
     * Fetch a vcard string for `uid` in `ebsql`.
     * 
     * If `meta_contact` is specified, then a shallow vcard representation will be
     * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param meta_contact Whether an entire contact is desired, or only the metadata
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    get_vcard(uid: string | null, meta_contact: boolean): [ /* returnType */ boolean, /* ret_vcard */ string | null ]
    /**
     * Checks if a contact bearing the UID indicated by `uid` is stored in `ebsql`.
     * @param uid The uid of the contact to check for
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    has_contact(uid: string | null): [ /* returnType */ boolean, /* exists */ boolean ]
    /**
     * Obtains an exclusive lock on `ebsql` and starts a transaction.
     * 
     * This should be called if you need to access `ebsql` multiple times while
     * ensuring an atomic transaction. End this transaction with e_book_sqlite_unlock().
     * 
     * If `cancellable` is specified, then `ebsql` will retain a reference to it until
     * e_book_sqlite_unlock() is called. Any accesses to `ebsql` with the lock held
     * are expected to have the same `cancellable` specified, or %NULL.
     * 
     * <note><para>Aside from ensuring atomicity of transactions, this function will hold a mutex
     * which will cause further calls to e_book_sqlite_lock() to block. If you are accessing
     * `ebsql` from multiple threads, then any interactions with `ebsql` should be nested in calls
     * to e_book_sqlite_lock() and e_book_sqlite_unlock().</para></note>
     * @param lock_type The #EbSqlLockType to acquire
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    lock(lock_type: bSqlLockType, cancellable: Gio.Cancellable | null): boolean
    /**
     * References the currently active #ECollator for `ebsql,`
     * use e_collator_unref() when finished using the returned collator.
     * 
     * Note that the active collator will change with the active locale setting.
     * @returns A reference to the active collator.
     */
    ref_collator(): EDataServer.Collator
    /**
     * References the #ESource to which `ebsql` is paired,
     * use g_object_unref() when finished using the source.
     * It can be %NULL in some cases, like when running tests.
     * @returns A reference to the #ESource to which @ebsql is paired, or %NULL.
     */
    ref_source(): EDataServer.Source | null
    /**
     * Removes the contact indicated by `uid` from `ebsql`.
     * @param uid the uid of the contact to remove
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    remove_contact(uid: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes the contacts indicated by `uids` from `ebsql`.
     * @param uids a #GSList of uids indicating which contacts to remove
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    remove_contacts(uids: string[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Searches `ebsql` for contacts matching the search expression indicated by `sexp`.
     * 
     * When `sexp` refers only to #EContactFields configured in the summary of `ebsql,`
     * the search should always be quick, when searching for other #EContactFields
     * a fallback will be used, possibly invoking any #EbSqlVCardCallback which
     * may have been passed to e_book_sqlite_new_full().
     * 
     * The returned `ret_list` list should be freed with g_slist_free()
     * and all elements freed with e_book_sqlite_search_data_free().
     * 
     * If `meta_contact` is specified, then shallow vcard representations will be
     * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param sexp search expression; use %NULL or an empty string to list all stored contacts.
     * @param meta_contacts Whether entire contacts are desired, or only the metadata
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    search(sexp: string | null, meta_contacts: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* ret_list */ bSqlSearchData[] ]
    /**
     * Similar to e_book_sqlitedb_search(), but fetches only a list of contact UIDs.
     * 
     * The returned `ret_list` list should be freed with g_slist_free() and all
     * elements freed with g_free().
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts.
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    search_uids(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* ret_list */ string[] ]
    /**
     * Executes a SELECT statement `sql_stmt` and calls `func` for each row of the result.
     * Use e_book_sqlite_exec() for statements which do not return row sets.
     * @param sql_stmt an SQLite SELECT statement to execute
     * @param func an #EBookSqliteSelectFunc function to call for each row
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    select(sql_stmt: string | null, func: BookSqliteSelectFunc, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the extra data associated with `uid`.
     * @param uid The uid of the contact to set the extra data for
     * @param extra The extra data to set
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    set_contact_extra(uid: string | null, extra: string | null): boolean
    /**
     * Sets the value for `key` to be `value`
     * @param key The key to fetch a value for
     * @param value The new value for `key`
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    set_key_value(key: string | null, value: string | null): boolean
    /**
     * A convenience function to set the value of `key` as an integer.
     * @param key The key to fetch a value for
     * @param value The new value for `key`
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    set_key_value_int(key: string | null, value: number): boolean
    /**
     * Relocalizes any locale specific data in the specified
     * new `lc_collate` locale.
     * 
     * The `lc_collate` locale setting is stored and remembered on
     * subsequent accesses of the addressbook, changing the locale
     * will store the new locale and will modify sort keys and any
     * locale specific data in the addressbook.
     * 
     * As a side effect, it's possible that changing the locale
     * will cause stored vcards to change. Notifications for
     * these changes can be caught with the #EbSqlVCardCallback
     * provided to e_book_sqlite_new_full().
     * @param lc_collate The new locale for the addressbook
     * @param cancellable A #GCancellable
     * @returns Whether the new locale was successfully set.
     */
    set_locale(lc_collate: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Releases an exclusive on `ebsql` and finishes a transaction previously
     * started with e_book_sqlite_lock_updates().
     * 
     * <note><para>If this fails, the lock on `ebsql` is still released and `error` will
     * be set to indicate why the transaction or rollback failed.</para></note>
     * @param action Which #EbSqlUnlockAction to take while unlocking
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    unlock(action: bSqlUnlockAction): boolean

    // Own virtual methods of EDataBook-1.2.EDataBook.BookSqlite

    vfunc_before_insert_contact(db: any | null, contact: EBookContacts.Contact, extra: string | null, replace: boolean, cancellable: Gio.Cancellable | null): boolean
    vfunc_before_remove_contact(db: any | null, contact_uid: string | null, cancellable: Gio.Cancellable | null): boolean

    // Own signals of EDataBook-1.2.EDataBook.BookSqlite

    connect(sigName: "before-insert-contact", callback: BookSqlite.BeforeInsertContactSignalCallback): number
    connect_after(sigName: "before-insert-contact", callback: BookSqlite.BeforeInsertContactSignalCallback): number
    emit(sigName: "before-insert-contact", object: any | null, p0: EBookContacts.Contact, p1: string | null, p2: boolean, p3: GObject.Object, p4: any | null, ...args: any[]): void
    connect(sigName: "before-remove-contact", callback: BookSqlite.BeforeRemoveContactSignalCallback): number
    connect_after(sigName: "before-remove-contact", callback: BookSqlite.BeforeRemoveContactSignalCallback): number
    emit(sigName: "before-remove-contact", object: any | null, p0: string | null, p1: Gio.Cancellable | null, p2: any | null, ...args: any[]): void

    // Class property signals of EDataBook-1.2.EDataBook.BookSqlite

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
export class BookSqlite extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.BookSqlite

    static name: string
    static $gtype: GObject.GType<BookSqlite>

    // Constructors of EDataBook-1.2.EDataBook.BookSqlite

    constructor(config?: BookSqlite.ConstructorProperties) 
    /**
     * Creates a new #EBookSqlite with the default summary configuration.
     * 
     * Aside from the manditory fields %E_CONTACT_UID, %E_CONTACT_REV,
     * the default configuration stores the following fields for quick
     * performance of searches: %E_CONTACT_FILE_AS, %E_CONTACT_NICKNAME,
     * %E_CONTACT_FULL_NAME, %E_CONTACT_GIVEN_NAME, %E_CONTACT_FAMILY_NAME,
     * %E_CONTACT_EMAIL, %E_CONTACT_TEL, %E_CONTACT_IS_LIST, %E_CONTACT_LIST_SHOW_ADDRESSES,
     * and %E_CONTACT_WANTS_HTML.
     * 
     * The fields %E_CONTACT_FULL_NAME and %E_CONTACT_EMAIL are configured
     * to respond extra quickly with the %E_BOOK_INDEX_PREFIX index flag.
     * 
     * The fields %E_CONTACT_FILE_AS, %E_CONTACT_FAMILY_NAME and
     * %E_CONTACT_GIVEN_NAME are configured to perform well with
     * the #EbSqlCursor interface, using the %E_BOOK_INDEX_SORT_KEY
     * index flag.
     * @constructor 
     * @param path location to load or create the new database
     * @param source an optional #ESource, associated with the #EBookSqlite, or %NULL
     * @param cancellable A #GCancellable
     * @returns A reference to an #EBookSqlite
     */
    constructor(path: string | null, source: EDataServer.Source | null, cancellable: Gio.Cancellable | null) 
    /**
     * Creates a new #EBookSqlite with the default summary configuration.
     * 
     * Aside from the manditory fields %E_CONTACT_UID, %E_CONTACT_REV,
     * the default configuration stores the following fields for quick
     * performance of searches: %E_CONTACT_FILE_AS, %E_CONTACT_NICKNAME,
     * %E_CONTACT_FULL_NAME, %E_CONTACT_GIVEN_NAME, %E_CONTACT_FAMILY_NAME,
     * %E_CONTACT_EMAIL, %E_CONTACT_TEL, %E_CONTACT_IS_LIST, %E_CONTACT_LIST_SHOW_ADDRESSES,
     * and %E_CONTACT_WANTS_HTML.
     * 
     * The fields %E_CONTACT_FULL_NAME and %E_CONTACT_EMAIL are configured
     * to respond extra quickly with the %E_BOOK_INDEX_PREFIX index flag.
     * 
     * The fields %E_CONTACT_FILE_AS, %E_CONTACT_FAMILY_NAME and
     * %E_CONTACT_GIVEN_NAME are configured to perform well with
     * the #EbSqlCursor interface, using the %E_BOOK_INDEX_SORT_KEY
     * index flag.
     * @constructor 
     * @param path location to load or create the new database
     * @param source an optional #ESource, associated with the #EBookSqlite, or %NULL
     * @param cancellable A #GCancellable
     * @returns A reference to an #EBookSqlite
     */
    static new(path: string | null, source: EDataServer.Source | null, cancellable: Gio.Cancellable | null): BookSqlite
    /**
     * Opens or creates a new addressbook at `path`.
     * 
     * Like e_book_sqlite_new(), but allows configuration of which contact fields
     * will be stored for quick reference in the summary. The configuration indicated by
     * `setup` will only be taken into account when initially creating the underlying table,
     * further configurations will be ignored.
     * 
     * The fields %E_CONTACT_UID and %E_CONTACT_REV are not optional,
     * they will be stored in the summary regardless of this function's parameters.
     * Only #EContactFields with the type #G_TYPE_STRING, #G_TYPE_BOOLEAN or
     * #E_TYPE_CONTACT_ATTR_LIST are currently supported.
     * 
     * If `vcard_callback` is specified, then vcards will not be stored by functions
     * such as e_book_sqlitedb_add_contact(). Instead `vcard_callback` will be invoked
     * at any time the created #EBookSqlite requires a vcard, either as a fallback
     * for querying search expressions which cannot be satisfied with the summary
     * fields, or when reporting results from searches.
     * 
     * If any error occurs and %NULL is returned, then the passed `user_data` will
     * be automatically freed using the `user_data_destroy` function, if specified.
     * 
     * It is recommended to store all contact vcards in the #EBookSqlite addressbook
     * if at all possible, however in some cases the vcards must be stored in some
     * other storage.
     * @constructor 
     * @param path location to load or create the new database
     * @param source an optional #ESource, associated with the #EBookSqlite, or %NULL
     * @param setup an #ESourceBackendSummarySetup describing how the summary should be setup, or %NULL to use the default
     * @param vcard_callback A function to resolve vcards
     * @param change_callback A function to catch notifications of vcard changes
     * @param cancellable A #GCancellable
     * @returns The newly created #EBookSqlite, or %NULL if opening or creating the addressbook failed.
     */
    static new_full(path: string | null, source: EDataServer.Source | null, setup: EBookContacts.SourceBackendSummarySetup | null, vcard_callback: bSqlVCardCallback | null, change_callback: bSqlChangeCallback | null, cancellable: Gio.Cancellable | null): BookSqlite
    _init(config?: BookSqlite.ConstructorProperties): void
    static error_quark(): GLib.Quark
    /**
     * Frees an #EbSqlSearchData
     * @param data An #EbSqlSearchData
     */
    static search_data_free(data: bSqlSearchData): void
}

export module DataBook {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataBook-1.2.EDataBook.DataBook

        backend?: BookBackend | null
        connection?: Gio.DBusConnection | null
        object_path?: string | null
    }

}

export interface DataBook extends Gio.Initable {

    // Own properties of EDataBook-1.2.EDataBook.DataBook

    readonly backend: BookBackend
    readonly connection: Gio.DBusConnection
    readonly object_path: string | null

    // Owm methods of EDataBook-1.2.EDataBook.DataBook

    /**
     * Returns the #GDBusConnection on which the AddressBook D-Bus interface
     * is exported.
     * @returns the #GDBusConnection
     */
    get_connection(): Gio.DBusConnection
    /**
     * Returns the object path at which the AddressBook D-Bus interface is
     * exported.
     * @returns the object path
     */
    get_object_path(): string | null
    /**
     * Returns the #EBookBackend to which incoming remote method invocations
     * are being forwarded.
     * 
     * The returned #EBookBackend is referenced for thread-safety and should
     * be unreferenced with g_object_unref() when finished with it.
     * @returns an #EBookBackend
     */
    ref_backend(): BookBackend
    /**
     * Notifies the clients about a property change.
     * @param prop_name Property name which changed
     * @param prop_value The new property value
     */
    report_backend_property_changed(prop_name: string | null, prop_value: string | null): void
    /**
     * Notifies the clients about an error, which happened out of any client-initiate operation.
     * @param message An error message
     */
    report_error(message: string | null): void
    /**
     * Finishes a call to check whether contains an email address.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param found %TRUE, when found the email in the address book
     */
    respond_contains_email(opid: number, error: GLib.Error, found: boolean): void
    /**
     * Finishes a call to create a list contacts.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param contacts A list of created #EContact(s), empty on error
     */
    respond_create_contacts(opid: number, error: GLib.Error, contacts: EBookContacts.Contact[]): void
    /**
     * Notifies listeners of the completion of the get_contact method call.
     * Only one of `error` and `contact` can be set.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param contact the found #EContact, or %NULL, if it could not be found
     */
    respond_get_contact(opid: number, error: GLib.Error | null, contact: EBookContacts.Contact | null): void
    /**
     * Finishes a call to get list of #EContact, which satisfy certain criteria.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param contacts A list of #EContact, empty on error
     */
    respond_get_contact_list(opid: number, error: GLib.Error, contacts: EBookContacts.Contact[]): void
    /**
     * Finishes a call to get list of UIDs which satisfy certain criteria.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param uids A list of picked UIDs, empty on error
     */
    respond_get_contact_list_uids(opid: number, error: GLib.Error, uids: string[]): void
    /**
     * Finishes a call to modify a list of contacts.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param contacts A list of modified #EContact(s), empty on error
     */
    respond_modify_contacts(opid: number, error: GLib.Error, contacts: EBookContacts.Contact[]): void
    /**
     * Notifies listeners of the completion of the open method call.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     */
    respond_open(opid: number, error: GLib.Error): void
    /**
     * Notifies listeners of the completion of the refresh method call.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     */
    respond_refresh(opid: number, error: GLib.Error): void
    /**
     * Finishes a call to remove a list of contacts.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param ids A list of removed contact UID-s, empty on error
     */
    respond_remove_contacts(opid: number, error: GLib.Error, ids: string[]): void
    /**
     * Set's the locale for this addressbook, this can result in renormalization of
     * locale sensitive data.
     * @param locale the new locale to set for this book
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    set_locale(locale: string | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of EDataBook-1.2.EDataBook.DataBook

    connect(sigName: "notify::backend", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataBook extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.DataBook

    static name: string
    static $gtype: GObject.GType<DataBook>

    // Constructors of EDataBook-1.2.EDataBook.DataBook

    constructor(config?: DataBook.ConstructorProperties) 
    /**
     * Creates a new #EDataBook and exports the AddressBook D-Bus interface
     * on `connection` at `object_path`.  The #EDataBook handles incoming remote
     * method invocations and forwards them to the `backend`.  If the AddressBook
     * interface fails to export, the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #EBookBackend
     * @param connection a #GDBusConnection
     * @param object_path object path for the D-Bus interface
     * @returns an #EDataBook, or %NULL on error
     */
    constructor(backend: BookBackend, connection: Gio.DBusConnection, object_path: string | null) 
    /**
     * Creates a new #EDataBook and exports the AddressBook D-Bus interface
     * on `connection` at `object_path`.  The #EDataBook handles incoming remote
     * method invocations and forwards them to the `backend`.  If the AddressBook
     * interface fails to export, the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #EBookBackend
     * @param connection a #GDBusConnection
     * @param object_path object path for the D-Bus interface
     * @returns an #EDataBook, or %NULL on error
     */
    static new(backend: BookBackend, connection: Gio.DBusConnection, object_path: string | null): DataBook
    _init(config?: DataBook.ConstructorProperties): void
    /**
     * Takes a list of strings and converts it to a comma-separated string of
     * values; free returned pointer with g_free()
     * @param strings a list of gchar *
     * @returns comma-separated newly allocated text of @strings
     */
    static string_slist_to_comma_string(strings: string[]): string | null
}

export module DataBookCursor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataBook-1.2.EDataBook.DataBookCursor

        backend?: BookBackend | null
    }

}

export interface DataBookCursor {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursor

    readonly backend: BookBackend
    readonly position: number
    readonly total: number

    // Owm methods of EDataBook-1.2.EDataBook.DataBookCursor

    /**
     * Should be called by addressbook backends whenever a contact
     * is added.
     * @param contact the #EContact which was added to the addressbook
     */
    contact_added(contact: EBookContacts.Contact): void
    /**
     * Should be called by addressbook backends whenever a contact
     * is removed.
     * @param contact the #EContact which was removed from the addressbook
     */
    contact_removed(contact: EBookContacts.Contact): void
    /**
     * Gets the backend which created and owns `cursor`.
     * @returns The #EBookBackend owning @cursor.
     */
    get_backend(): BookBackend
    /**
     * Fetch the current position of `cursor` in its result list.
     * @returns the current position of @cursor
     */
    get_position(): number
    /**
     * Fetch the total number of contacts which match `cursor'`s query expression.
     * @returns the total contacts for @cursor
     */
    get_total(): number
    /**
     * Load the current locale setting from the cursor's underlying database.
     * 
     * Addressbook backends implementing cursors should call this function on all active
     * cursor when the locale setting changes.
     * 
     * This will implicitly reset `cursor'`s state and position.
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
     */
    load_locale(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* locale */ string | null ]
    /**
     * Recalculates the cursor's total and position, this is meant
     * for cursor created in Direct Read Access mode to synchronously
     * recalculate the position and total values when the addressbook
     * revision has changed.
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
     */
    recalculate(cancellable: Gio.Cancellable | null): boolean
    /**
     * Places `cursor` on the `connection` at `object_path`
     * @param connection the #GDBusConnection to register with
     * @param object_path the object path to place the direct access configuration data
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
     */
    register_gdbus_object(connection: Gio.DBusConnection, object_path: string | null): boolean
    /**
     * Sets the `cursor` position to an
     * <link linkend="cursor-alphabet">Alphabetic Index</link>
     * into the alphabet active in the `locale` of the addressbook.
     * 
     * After setting the target to an alphabetic index, for example the
     * index for letter 'E', then further calls to e_data_book_cursor_step()
     * will return results starting with the letter 'E' (or results starting
     * with the last result in 'D', if moving in a negative direction).
     * 
     * The passed index must be a valid index in `locale,` if by some chance
     * the addressbook backend has changed into a new locale after this
     * call has been issued, an %E_CLIENT_ERROR_OUT_OF_SYNC error will be
     * issued indicating that there was a locale mismatch.
     * @param index the alphabetic index
     * @param locale the locale in which `index` is expected to be a valid alphabetic index
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
     */
    set_alphabetic_index(index: number, locale: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the search expression for the cursor
     * @param sexp the search expression to set
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
     */
    set_sexp(sexp: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Steps `cursor` through its sorted query by a maximum of `count` contacts
     * starting from `origin`.
     * 
     * If `count` is negative, then the cursor will move through the list in reverse.
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
     * The result list will be stored to `results` and should be freed with g_slist_free()
     * and all elements freed with g_free().
     * 
     * If a `revision_guard` is specified, the cursor implementation will issue an
     * %E_CLIENT_ERROR_OUT_OF_SYNC error if the `revision_guard` does not match
     * the current addressbook revision.
     * 
     * An explanation of how stepping is expected to behave can be found
     * in the <link linkend="cursor-iteration">user facing reference documentation</link>.
     * @param revision_guard The expected current addressbook revision, or %NULL
     * @param flags The #EBookCursorStepFlags for this step
     * @param origin The #EBookCursorOrigin from whence to step
     * @param count a positive or negative amount of contacts to try and fetch
     * @param cancellable A #GCancellable
     * @returns The number of contacts traversed if successful, otherwise -1 is returned and @error is set.
     */
    step(revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]

    // Own virtual methods of EDataBook-1.2.EDataBook.DataBookCursor

    vfunc_compare_contact(contact: EBookContacts.Contact): [ /* returnType */ number, /* matches_sexp */ boolean | null ]
    vfunc_get_position(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* total */ number, /* position */ number ]
    vfunc_load_locale(): [ /* returnType */ boolean, /* locale */ string | null ]
    vfunc_set_alphabetic_index(index: number, locale: string | null): boolean
    vfunc_set_sexp(sexp: string | null): boolean
    /**
     * Steps `cursor` through its sorted query by a maximum of `count` contacts
     * starting from `origin`.
     * 
     * If `count` is negative, then the cursor will move through the list in reverse.
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
     * The result list will be stored to `results` and should be freed with g_slist_free()
     * and all elements freed with g_free().
     * 
     * If a `revision_guard` is specified, the cursor implementation will issue an
     * %E_CLIENT_ERROR_OUT_OF_SYNC error if the `revision_guard` does not match
     * the current addressbook revision.
     * 
     * An explanation of how stepping is expected to behave can be found
     * in the <link linkend="cursor-iteration">user facing reference documentation</link>.
     * @virtual 
     * @param revision_guard The expected current addressbook revision, or %NULL
     * @param flags The #EBookCursorStepFlags for this step
     * @param origin The #EBookCursorOrigin from whence to step
     * @param count a positive or negative amount of contacts to try and fetch
     * @param cancellable A #GCancellable
     * @returns The number of contacts traversed if successful, otherwise -1 is returned and @error is set.
     */
    vfunc_step(revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]

    // Class property signals of EDataBook-1.2.EDataBook.DataBookCursor

    connect(sigName: "notify::backend", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::total", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An opaque handle for an addressbook cursor
 * @class 
 */
export class DataBookCursor extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursor

    static name: string
    static $gtype: GObject.GType<DataBookCursor>

    // Constructors of EDataBook-1.2.EDataBook.DataBookCursor

    constructor(config?: DataBookCursor.ConstructorProperties) 
    _init(config?: DataBookCursor.ConstructorProperties): void
}

export module DataBookCursorCache {

    // Constructor properties interface

    export interface ConstructorProperties extends DataBookCursor.ConstructorProperties {

        // Own constructor properties of EDataBook-1.2.EDataBook.DataBookCursorCache

        book_cache?: BookCache | null
        cursor?: any | null
    }

}

export interface DataBookCursorCache {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorCache

    readonly book_cache: BookCache
    readonly cursor: any

    // Class property signals of EDataBook-1.2.EDataBook.DataBookCursorCache

    connect(sigName: "notify::book-cache", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::book-cache", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::book-cache", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::backend", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::total", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An opaque handle for the #EBookCache cursor instance.
 * @class 
 */
export class DataBookCursorCache extends DataBookCursor {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorCache

    static name: string
    static $gtype: GObject.GType<DataBookCursorCache>

    // Constructors of EDataBook-1.2.EDataBook.DataBookCursorCache

    constructor(config?: DataBookCursorCache.ConstructorProperties) 
    /**
     * Creates an #EDataBookCursor and implements all of the cursor methods
     * using the delegate `book_cache` object.
     * 
     * This is suitable cursor type for any backend which stores its contacts
     * using the #EBookCache object. The #EBookMetaBackend does that transparently.
     * @constructor 
     * @param book_backend the #EBookBackend creating this cursor
     * @param book_cache the #EBookCache object to base this cursor on
     * @param sort_fields an array of #EContactFields as sort keys in order of priority
     * @param sort_types an array of #EBookCursorSortTypes, one for each field in `sort_fields`
     * @returns A newly created #EDataBookCursor, or %NULL if cursor creation failed.
     */
    constructor(book_backend: BookBackend, book_cache: BookCache, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]) 
    /**
     * Creates an #EDataBookCursor and implements all of the cursor methods
     * using the delegate `book_cache` object.
     * 
     * This is suitable cursor type for any backend which stores its contacts
     * using the #EBookCache object. The #EBookMetaBackend does that transparently.
     * @constructor 
     * @param book_backend the #EBookBackend creating this cursor
     * @param book_cache the #EBookCache object to base this cursor on
     * @param sort_fields an array of #EContactFields as sort keys in order of priority
     * @param sort_types an array of #EBookCursorSortTypes, one for each field in `sort_fields`
     * @returns A newly created #EDataBookCursor, or %NULL if cursor creation failed.
     */
    static new(book_backend: BookBackend, book_cache: BookCache, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]): DataBookCursorCache
    _init(config?: DataBookCursorCache.ConstructorProperties): void
}

export module DataBookCursorSqlite {

    // Constructor properties interface

    export interface ConstructorProperties extends DataBookCursor.ConstructorProperties {

        // Own constructor properties of EDataBook-1.2.EDataBook.DataBookCursorSqlite

        cursor?: any | null
        ebsql?: BookSqlite | null
        revision_key?: string | null
    }

}

export interface DataBookCursorSqlite {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorSqlite

    readonly cursor: any
    readonly ebsql: BookSqlite
    readonly revision_key: string | null

    // Class property signals of EDataBook-1.2.EDataBook.DataBookCursorSqlite

    connect(sigName: "notify::cursor", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::ebsql", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ebsql", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ebsql", ...args: any[]): void
    connect(sigName: "notify::revision-key", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision-key", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::revision-key", ...args: any[]): void
    connect(sigName: "notify::backend", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::total", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An opaque handle for the SQLite cursor instance.
 * @class 
 */
export class DataBookCursorSqlite extends DataBookCursor {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorSqlite

    static name: string
    static $gtype: GObject.GType<DataBookCursorSqlite>

    // Constructors of EDataBook-1.2.EDataBook.DataBookCursorSqlite

    constructor(config?: DataBookCursorSqlite.ConstructorProperties) 
    /**
     * Creates an #EDataBookCursor and implements all of the cursor methods
     * using the delegate `ebsql` object.
     * 
     * This is a suitable cursor type for any backend which stores its contacts
     * using the #EBookSqlite object.
     * @constructor 
     * @param backend the #EBookBackend creating this cursor
     * @param ebsql the #EBookSqlite object to base this cursor on
     * @param revision_key The key name to consult for the current overall contacts database revision
     * @param sort_fields an array of #EContactFields as sort keys in order of priority
     * @param sort_types an array of #EBookCursorSortTypes, one for each field in `sort_fields`
     * @returns A newly created #EDataBookCursor, or %NULL if cursor creation failed.
     */
    constructor(backend: BookBackend, ebsql: BookSqlite, revision_key: string | null, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]) 
    /**
     * Creates an #EDataBookCursor and implements all of the cursor methods
     * using the delegate `ebsql` object.
     * 
     * This is a suitable cursor type for any backend which stores its contacts
     * using the #EBookSqlite object.
     * @constructor 
     * @param backend the #EBookBackend creating this cursor
     * @param ebsql the #EBookSqlite object to base this cursor on
     * @param revision_key The key name to consult for the current overall contacts database revision
     * @param sort_fields an array of #EContactFields as sort keys in order of priority
     * @param sort_types an array of #EBookCursorSortTypes, one for each field in `sort_fields`
     * @returns A newly created #EDataBookCursor, or %NULL if cursor creation failed.
     */
    static new(backend: BookBackend, ebsql: BookSqlite, revision_key: string | null, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]): DataBookCursorSqlite
    _init(config?: DataBookCursorSqlite.ConstructorProperties): void
}

export module DataBookDirect {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DataBookDirect {

    // Own fields of EDataBook-1.2.EDataBook.DataBookDirect

    parent: GObject.Object
    priv: DataBookDirectPrivate

    // Owm methods of EDataBook-1.2.EDataBook.DataBookDirect

    /**
     * Places `direct` on the `connection` at `object_path`
     * @param connection The #GDBusConnection to register with
     * @param object_path The object path to place the direct access configuration data
     */
    register_gdbus_object(connection: Gio.DBusConnection, object_path: string | null): boolean

    // Class property signals of EDataBook-1.2.EDataBook.DataBookDirect

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataBookDirect extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.DataBookDirect

    static name: string
    static $gtype: GObject.GType<DataBookDirect>

    // Constructors of EDataBook-1.2.EDataBook.DataBookDirect

    constructor(config?: DataBookDirect.ConstructorProperties) 
    /**
     * Creates an #EDataBookDirect to report configuration data needed for direct
     * read access.
     * 
     * This is returned by e_book_backend_get_direct_book() for backends
     * which support direct read access mode.
     * @constructor 
     * @param backend_path Full path to the installed backend shared library
     * @param backend_factory_name Type name of the EBookBackendFactory implemented by the library
     * @param config A backend specific configuration string
     * @returns A newly created #EDataBookDirect
     */
    constructor(backend_path: string | null, backend_factory_name: string | null, config: string | null) 
    /**
     * Creates an #EDataBookDirect to report configuration data needed for direct
     * read access.
     * 
     * This is returned by e_book_backend_get_direct_book() for backends
     * which support direct read access mode.
     * @constructor 
     * @param backend_path Full path to the installed backend shared library
     * @param backend_factory_name Type name of the EBookBackendFactory implemented by the library
     * @param config A backend specific configuration string
     * @returns A newly created #EDataBookDirect
     */
    static new(backend_path: string | null, backend_factory_name: string | null, config: string | null): DataBookDirect
    _init(config?: DataBookDirect.ConstructorProperties): void
}

export module DataBookFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.Extensible.ConstructorProperties, Gio.Initable.ConstructorProperties, EBackend.DataFactory.ConstructorProperties {
    }

}

export interface DataBookFactory extends EDataServer.Extensible, Gio.Initable {

    // Own fields of EDataBook-1.2.EDataBook.DataBookFactory

    parent: EBackend.DataFactory
    priv: DataBookFactoryPrivate

    // Class property signals of EDataBook-1.2.EDataBook.DataBookFactory

    connect(sigName: "notify::backend-per-process", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-per-process", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend-per-process", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::reload-supported", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reload-supported", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reload-supported", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataBookFactory extends EBackend.DataFactory {

    // Own properties of EDataBook-1.2.EDataBook.DataBookFactory

    static name: string
    static $gtype: GObject.GType<DataBookFactory>

    // Constructors of EDataBook-1.2.EDataBook.DataBookFactory

    constructor(config?: DataBookFactory.ConstructorProperties) 
    constructor(backend_per_process: number, cancellable: Gio.Cancellable | null) 
    static new(backend_per_process: number, cancellable: Gio.Cancellable | null): DataBookFactory
    _init(config?: DataBookFactory.ConstructorProperties): void
}

export module DataBookView {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataBook-1.2.EDataBook.DataBookView

        backend?: BookBackend | null
        connection?: Gio.DBusConnection | null
        object_path?: string | null
        sexp?: BookBackendSExp | null
    }

}

export interface DataBookView extends Gio.Initable {

    // Own properties of EDataBook-1.2.EDataBook.DataBookView

    readonly backend: BookBackend
    readonly connection: Gio.DBusConnection
    readonly object_path: string | null
    readonly sexp: BookBackendSExp

    // Own fields of EDataBook-1.2.EDataBook.DataBookView

    parent: GObject.Object
    priv: DataBookViewPrivate

    // Owm methods of EDataBook-1.2.EDataBook.DataBookView

    /**
     * Returns the #GDBusConnection on which the AddressBookView D-Bus
     * interface is exported.
     * @returns the #GDBusConnection
     */
    get_connection(): Gio.DBusConnection
    get_fields_of_interest(): GLib.HashTable | null
    /**
     * Gets the #EBookClientViewFlags that control the behaviour of `view`.
     * @returns the flags for @view.
     */
    get_flags(): EBookContacts.BookClientViewFlags
    /**
     * Returns the object path at which the AddressBookView D-Bus interface
     * is exported.
     * @returns the object path
     */
    get_object_path(): string | null
    /**
     * Gets the s-expression used for matching contacts to `view`.
     * @returns The #EBookBackendSExp used.
     */
    get_sexp(): BookBackendSExp
    is_completed(): boolean
    /**
     * Notifies listeners that all pending updates on `view`
     * have been sent. The listener's information should now be
     * in sync with the backend's.
     * @param error the error of the query, if any
     */
    notify_complete(error: GLib.Error): void
    /**
     * Provides listeners with a human-readable text describing the
     * current backend operation. This can be used for progress
     * reporting.
     * @param percent percent done; use -1 when not available
     * @param message a text message
     */
    notify_progress(percent: number, message: string | null): void
    /**
     * Notify listeners that a contact specified by `id`
     * was removed from `view`.
     * @param id a unique contact ID
     */
    notify_remove(id: string | null): void
    /**
     * Notify listeners that `contact` has changed. This can
     * trigger an add, change or removal event depending on
     * whether the change causes the contact to start matching,
     * no longer match, or stay matching the query specified
     * by `view`.
     * @param contact an #EContact
     */
    notify_update(contact: EBookContacts.Contact): void
    /**
     * Notify listeners that `vcard` has changed. This can
     * trigger an add, change or removal event depending on
     * whether the change causes the contact to start matching,
     * no longer match, or stay matching the query specified
     * by `view`.  This method should be preferred over
     * e_data_book_view_notify_update() when the native
     * representation of a contact is a vCard.
     * 
     * The important difference between this method and
     * e_data_book_view_notify_update() and
     * e_data_book_view_notify_update_vcard() is
     * that it doesn't match the contact against the book view query to see if it
     * should be included, it assumes that this has been done and the contact is
     * known to exist in the view.
     * @param id the UID of this contact
     * @param vcard a plain vCard
     */
    notify_update_prefiltered_vcard(id: string | null, vcard: string | null): void
    /**
     * Notify listeners that `vcard` has changed. This can
     * trigger an add, change or removal event depending on
     * whether the change causes the contact to start matching,
     * no longer match, or stay matching the query specified
     * by `view`.  This method should be preferred over
     * e_data_book_view_notify_update() when the native
     * representation of a contact is a vCard.
     * @param id a unique id of the `vcard`
     * @param vcard a plain vCard
     */
    notify_update_vcard(id: string | null, vcard: string | null): void
    /**
     * Refs the backend that `view` is querying. Unref the returned backend,
     * if not %NULL, with g_object_unref(), when no longer needed.
     * @returns The associated #EBookBackend.
     */
    ref_backend(): BookBackend | null

    // Class property signals of EDataBook-1.2.EDataBook.DataBookView

    connect(sigName: "notify::backend", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::sexp", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sexp", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sexp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataBookView extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.DataBookView

    static name: string
    static $gtype: GObject.GType<DataBookView>

    // Constructors of EDataBook-1.2.EDataBook.DataBookView

    constructor(config?: DataBookView.ConstructorProperties) 
    /**
     * Creates a new #EDataBookView and exports its D-Bus interface on
     * `connection` at `object_path`.  If an error occurs while exporting,
     * the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #EBookBackend
     * @param sexp an #EBookBackendSExp
     * @param connection a #GDBusConnection
     * @param object_path an object path for the view
     * @returns an #EDataBookView or %NULL on error
     */
    constructor(backend: BookBackend, sexp: BookBackendSExp, connection: Gio.DBusConnection, object_path: string | null) 
    /**
     * Creates a new #EDataBookView and exports its D-Bus interface on
     * `connection` at `object_path`.  If an error occurs while exporting,
     * the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #EBookBackend
     * @param sexp an #EBookBackendSExp
     * @param connection a #GDBusConnection
     * @param object_path an object path for the view
     * @returns an #EDataBookView or %NULL on error
     */
    static new(backend: BookBackend, sexp: BookBackendSExp, connection: Gio.DBusConnection, object_path: string | null): DataBookView
    _init(config?: DataBookView.ConstructorProperties): void
}

export module SubprocessBookFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, EBackend.SubprocessFactory.ConstructorProperties {
    }

}

export interface SubprocessBookFactory extends Gio.Initable {

    // Own fields of EDataBook-1.2.EDataBook.SubprocessBookFactory

    parent: EBackend.SubprocessFactory
    priv: SubprocessBookFactoryPrivate

    // Class property signals of EDataBook-1.2.EDataBook.SubprocessBookFactory

    connect(sigName: "notify::registry", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SubprocessBookFactory extends EBackend.SubprocessFactory {

    // Own properties of EDataBook-1.2.EDataBook.SubprocessBookFactory

    static name: string
    static $gtype: GObject.GType<SubprocessBookFactory>

    // Constructors of EDataBook-1.2.EDataBook.SubprocessBookFactory

    constructor(config?: SubprocessBookFactory.ConstructorProperties) 
    constructor(cancellable: Gio.Cancellable | null) 
    static new(cancellable: Gio.Cancellable | null): SubprocessBookFactory
    _init(config?: SubprocessBookFactory.ConstructorProperties): void
}

export module SystemLocaleWatcher {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SystemLocaleWatcher {

    // Own properties of EDataBook-1.2.EDataBook.SystemLocaleWatcher

    /**
     * Current locale, as detected. It can be %NULL, when the locale
     * was not detected yet.
     */
    readonly locale: string | null

    // Owm methods of EDataBook-1.2.EDataBook.SystemLocaleWatcher

    /**
     * Returns the current locale, as detected by the `watcher`. The string
     * is duplicated for thread safety. It can be %NULL, when the locale
     * was not detected yet.
     * 
     * Free it with g_free(), when no longer needed.
     * @returns the system locale, as detected by the @watcher
     */
    dup_locale(): string | null

    // Class property signals of EDataBook-1.2.EDataBook.SystemLocaleWatcher

    connect(sigName: "notify::locale", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
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
export class SystemLocaleWatcher extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.SystemLocaleWatcher

    static name: string
    static $gtype: GObject.GType<SystemLocaleWatcher>

    // Constructors of EDataBook-1.2.EDataBook.SystemLocaleWatcher

    constructor(config?: SystemLocaleWatcher.ConstructorProperties) 
    /**
     * Creates a new #ESystemLocaleWatcher instance, which listens for D-Bus
     * notification on locale changes. It uses system bus, unless an environment
     * variable "EDS_TESTING" is defined, in which case it uses the session bus
     * instead.
     * @constructor 
     * @returns a new #ESystemLocaleWatcher
     */
    constructor() 
    /**
     * Creates a new #ESystemLocaleWatcher instance, which listens for D-Bus
     * notification on locale changes. It uses system bus, unless an environment
     * variable "EDS_TESTING" is defined, in which case it uses the session bus
     * instead.
     * @constructor 
     * @returns a new #ESystemLocaleWatcher
     */
    static new(): SystemLocaleWatcher
    _init(config?: SystemLocaleWatcher.ConstructorProperties): void
}

export interface BookBackendClass {

    // Own fields of EDataBook-1.2.EDataBook.BookBackendClass

    /**
     * Whether a serial dispatch queue should
     *                             be used for this backend or not. The default is %TRUE.
     * @field 
     */
    use_serial_dispatch_queue: boolean
    impl_get_backend_property: (backend: BookBackend, prop_name: string | null) => string | null
    impl_open: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null) => void
    impl_refresh: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null) => void
    impl_create_contacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string | null, opflags: number) => void
    impl_modify_contacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string | null, opflags: number) => void
    impl_remove_contacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string | null, opflags: number) => void
    impl_get_contact: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string | null) => void
    impl_get_contact_list: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string | null) => void
    impl_get_contact_list_uids: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string | null) => void
    impl_start_view: (backend: BookBackend, view: DataBookView) => void
    impl_stop_view: (backend: BookBackend, view: DataBookView) => void
    impl_notify_update: (backend: BookBackend, contact: EBookContacts.Contact) => void
    impl_configure_direct: (backend: BookBackend, config: string | null) => void
    impl_set_locale: (backend: BookBackend, locale: string | null, cancellable: Gio.Cancellable | null) => boolean
    impl_dup_locale: (backend: BookBackend) => string | null
    impl_delete_cursor: (backend: BookBackend, cursor: DataBookCursor) => boolean
    closed: (backend: BookBackend, sender: string | null) => void
    shutdown: (backend: BookBackend) => void
    impl_contains_email: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, email_address: string | null) => void
    reserved_padding: any[]
}

/**
 * Class structure for the #EBookBackend class.
 * 
 * These virtual methods must be implemented when writing
 * an addressbook backend.
 * @record 
 */
export abstract class BookBackendClass {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendClass

    static name: string
}

export interface BookBackendFactoryClass {

    // Own fields of EDataBook-1.2.EDataBook.BookBackendFactoryClass

    /**
     * The string identifier for this book backend type
     * @field 
     */
    factory_name: string | null
    /**
     * The #GType to use to build #EBookBackends for this factory
     * @field 
     */
    backend_type: GObject.GType
}

/**
 * Class structure for the #EBookBackendFactory class.
 * 
 * Subclasses need to set the factory name and backend type
 * at initialization, the base class will take care of creating
 * backends of the specified type on demand.
 * @record 
 */
export abstract class BookBackendFactoryClass {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendFactoryClass

    static name: string
}

export interface BookBackendFactoryPrivate {
}

export class BookBackendFactoryPrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendFactoryPrivate

    static name: string
}

export interface BookBackendPrivate {
}

export class BookBackendPrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendPrivate

    static name: string
}

export interface BookBackendSExpClass {
}

export abstract class BookBackendSExpClass {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSExpClass

    static name: string
}

export interface BookBackendSExpPrivate {
}

export class BookBackendSExpPrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSExpPrivate

    static name: string
}

export interface BookBackendSyncClass {

    // Own fields of EDataBook-1.2.EDataBook.BookBackendSyncClass

    open_sync: (backend: BookBackendSync, cancellable: Gio.Cancellable | null) => boolean
    refresh_sync: (backend: BookBackendSync, cancellable: Gio.Cancellable | null) => boolean
    contains_email_sync: (backend: BookBackendSync, email_address: string | null, cancellable: Gio.Cancellable | null) => boolean
    reserved_padding: any[]
}

/**
 * Class structure for the #EBookBackendSync class.
 * 
 * These virtual methods must be implemented when writing
 * an addressbook backend.
 * @record 
 */
export abstract class BookBackendSyncClass {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSyncClass

    static name: string
}

export interface BookBackendSyncPrivate {
}

export class BookBackendSyncPrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSyncPrivate

    static name: string
}

export interface BookCacheClass {

    // Own fields of EDataBook-1.2.EDataBook.BookCacheClass

    e164_changed: (book_cache: BookCache, contact: EBookContacts.Contact, is_replace: boolean) => void
    dup_contact_revision: (book_cache: BookCache, contact: EBookContacts.Contact) => string | null
    categories_changed: (book_cache: BookCache, categories: string | null) => void
}

/**
 * Class structure for the #EBookCache class.
 * @record 
 */
export abstract class BookCacheClass {

    // Own properties of EDataBook-1.2.EDataBook.BookCacheClass

    static name: string
}

export interface BookCacheCursor {
}

/**
 * An opaque cursor pointer
 * @record 
 */
export class BookCacheCursor {

    // Own properties of EDataBook-1.2.EDataBook.BookCacheCursor

    static name: string

    // Constructors of EDataBook-1.2.EDataBook.BookCacheCursor

    /**
     * Creates a new #EBookCacheCursor.
     * 
     * The cursor should be freed with e_book_cache_cursor_free() when
     * no longer needed.
     * @constructor 
     * @param book_cache An #EBookCache
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts
     * @param sort_fields An array of #EContactField(s) as sort keys in order of priority
     * @param sort_types An array of #EBookCursorSortTypes, one for each field in `sort_fields`
     * @returns A newly created #EBookCacheCursor
     */
    constructor(book_cache: BookCache, sexp: string | null, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]) 
    /**
     * Creates a new #EBookCacheCursor.
     * 
     * The cursor should be freed with e_book_cache_cursor_free() when
     * no longer needed.
     * @constructor 
     * @param book_cache An #EBookCache
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts
     * @param sort_fields An array of #EContactField(s) as sort keys in order of priority
     * @param sort_types An array of #EBookCursorSortTypes, one for each field in `sort_fields`
     * @returns A newly created #EBookCacheCursor
     */
    static new(book_cache: BookCache, sexp: string | null, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]): BookCacheCursor
}

export interface BookCachePrivate {
}

export class BookCachePrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookCachePrivate

    static name: string
}

export interface BookCacheSearchData {

    // Own fields of EDataBook-1.2.EDataBook.BookCacheSearchData

    /**
     * The %E_CONTACT_UID field of this contact
     * @field 
     */
    uid: string | null
    /**
     * The vcard string
     * @field 
     */
    vcard: string | null
    /**
     * Any extra data associated with the vcard
     * @field 
     */
    extra: string | null

    // Owm methods of EDataBook-1.2.EDataBook.BookCacheSearchData

    copy(): BookCacheSearchData | null
}

/**
 * This structure is used to represent contacts returned
 * by the #EBookCache from various functions
 * such as e_book_cache_search().
 * 
 * The `extra` parameter will contain any data which was
 * previously passed for this contact in e_book_cache_put_contact()
 * or set with e_book_cache_set_contact_extra().
 * 
 * These should be freed with e_book_cache_search_data_free().
 * @record 
 */
export class BookCacheSearchData {

    // Own properties of EDataBook-1.2.EDataBook.BookCacheSearchData

    static name: string

    // Constructors of EDataBook-1.2.EDataBook.BookCacheSearchData

    /**
     * Creates a new EBookCacheSearchData prefilled with the given values.
     * @constructor 
     * @param uid a contact UID; cannot be %NULL
     * @param vcard the contact as a vCard string; cannot be %NULL
     * @param extra any extra data stored with the contact, or %NULL
     * @returns A new #EBookCacheSearchData. Free it with    e_book_cache_search_data_free() when no longer needed.
     */
    constructor(uid: string | null, vcard: string | null, extra: string | null) 
    /**
     * Creates a new EBookCacheSearchData prefilled with the given values.
     * @constructor 
     * @param uid a contact UID; cannot be %NULL
     * @param vcard the contact as a vCard string; cannot be %NULL
     * @param extra any extra data stored with the contact, or %NULL
     * @returns A new #EBookCacheSearchData. Free it with    e_book_cache_search_data_free() when no longer needed.
     */
    static new(uid: string | null, vcard: string | null, extra: string | null): BookCacheSearchData
    /**
     * Frees the `data` structure, previously allocated with e_book_cache_search_data_new()
     * or e_book_cache_search_data_copy().
     * @param data an #EBookCacheSearchData
     */
    static free(data: any | null): void
}

export interface BookMetaBackendClass {

    // Own fields of EDataBook-1.2.EDataBook.BookMetaBackendClass

    connect_sync: (meta_backend: BookMetaBackend, credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    disconnect_sync: (meta_backend: BookMetaBackend, cancellable: Gio.Cancellable | null) => boolean
    get_changes_sync: (meta_backend: BookMetaBackend, last_sync_tag: string | null, is_repeat: boolean, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_sync_tag */ string | null, /* out_repeat */ boolean, /* out_created_objects */ BookMetaBackendInfo[], /* out_modified_objects */ BookMetaBackendInfo[], /* out_removed_objects */ BookMetaBackendInfo[] ]
    list_existing_sync: (meta_backend: BookMetaBackend, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_sync_tag */ string | null, /* out_existing_objects */ BookMetaBackendInfo[] ]
    load_contact_sync: (meta_backend: BookMetaBackend, uid: string | null, extra: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact, /* out_extra */ string | null ]
    save_contact_sync: (meta_backend: BookMetaBackend, overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_uid */ string | null, /* out_new_extra */ string | null ]
    remove_contact_sync: (meta_backend: BookMetaBackend, conflict_resolution: EDataServer.ConflictResolution, uid: string | null, extra: string | null, object: string | null, opflags: number, cancellable: Gio.Cancellable | null) => boolean
    search_sync: (meta_backend: BookMetaBackend, expr: string | null, meta_contact: boolean, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    search_uids_sync: (meta_backend: BookMetaBackend, expr: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_uids */ string[] ]
    requires_reconnect: (meta_backend: BookMetaBackend) => boolean
    source_changed: (meta_backend: BookMetaBackend) => void
    get_ssl_error_details: (meta_backend: BookMetaBackend) => [ /* returnType */ boolean, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
}

/**
 * Class structure for the #EBookMetaBackend class.
 * @record 
 */
export abstract class BookMetaBackendClass {

    // Own properties of EDataBook-1.2.EDataBook.BookMetaBackendClass

    static name: string
}

export interface BookMetaBackendInfo {

    // Own fields of EDataBook-1.2.EDataBook.BookMetaBackendInfo

    uid: string | null
    revision: string | null
    object: string | null
    extra: string | null

    // Owm methods of EDataBook-1.2.EDataBook.BookMetaBackendInfo

    copy(): BookMetaBackendInfo | null
}

export class BookMetaBackendInfo {

    // Own properties of EDataBook-1.2.EDataBook.BookMetaBackendInfo

    static name: string

    // Constructors of EDataBook-1.2.EDataBook.BookMetaBackendInfo

    /**
     * Creates a new #EBookMetaBackendInfo prefilled with the given values.
     * @constructor 
     * @param uid a contact UID; cannot be %NULL
     * @param revision the contact revision; can be %NULL
     * @param object the contact object as a vCard string; can be %NULL
     * @param extra extra backend-specific data; can be %NULL
     * @returns A new #EBookMetaBackendInfo. Free it with    e_book_meta_backend_info_free(), when no longer needed.
     */
    constructor(uid: string | null, revision: string | null, object: string | null, extra: string | null) 
    /**
     * Creates a new #EBookMetaBackendInfo prefilled with the given values.
     * @constructor 
     * @param uid a contact UID; cannot be %NULL
     * @param revision the contact revision; can be %NULL
     * @param object the contact object as a vCard string; can be %NULL
     * @param extra extra backend-specific data; can be %NULL
     * @returns A new #EBookMetaBackendInfo. Free it with    e_book_meta_backend_info_free(), when no longer needed.
     */
    static new(uid: string | null, revision: string | null, object: string | null, extra: string | null): BookMetaBackendInfo
    /**
     * Frees the `ptr` structure, previously allocated with e_book_meta_backend_info_new()
     * or e_book_meta_backend_info_copy().
     * @param ptr an #EBookMetaBackendInfo
     */
    static free(ptr: any | null): void
}

export interface BookMetaBackendPrivate {
}

export class BookMetaBackendPrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookMetaBackendPrivate

    static name: string
}

export interface BookSqliteClass {

    // Own fields of EDataBook-1.2.EDataBook.BookSqliteClass

    before_insert_contact: (ebsql: BookSqlite, db: any | null, contact: EBookContacts.Contact, extra: string | null, replace: boolean, cancellable: Gio.Cancellable | null) => boolean
    before_remove_contact: (ebsql: BookSqlite, db: any | null, contact_uid: string | null, cancellable: Gio.Cancellable | null) => boolean
}

/**
 * Class structure for the #EBookSqlite class.
 * @record 
 */
export abstract class BookSqliteClass {

    // Own properties of EDataBook-1.2.EDataBook.BookSqliteClass

    static name: string
}

export interface BookSqlitePrivate {
}

export class BookSqlitePrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookSqlitePrivate

    static name: string
}

export interface DataBookClass {
}

export abstract class DataBookClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookClass

    static name: string
}

export interface DataBookCursorCacheClass {
}

/**
 * The #EBookCache cursor class structure.
 * @record 
 */
export abstract class DataBookCursorCacheClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorCacheClass

    static name: string
}

export interface DataBookCursorCachePrivate {
}

export class DataBookCursorCachePrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorCachePrivate

    static name: string
}

export interface DataBookCursorClass {

    // Own fields of EDataBook-1.2.EDataBook.DataBookCursorClass

    /**
     * The #EDataBookCursorSetSexpFunc delegate to set the search expression
     * @field 
     */
    set_sexp: DataBookCursorSetSexpFunc
    /**
     * The #EDataBookCursorStepFunc delegate to navigate the cursor
     * @field 
     */
    step: DataBookCursorStepFunc
    /**
     * The #EDataBookCursorSetAlphabetIndexFunc delegate to set the alphabetic position
     * @field 
     */
    set_alphabetic_index: DataBookCursorSetAlphabetIndexFunc
    /**
     * The #EDataBookCursorGetPositionFunc delegate to calculate the current total and position values
     * @field 
     */
    get_position: DataBookCursorGetPositionFunc
    /**
     * The #EDataBookCursorCompareContactFunc delegate to compare an #EContact with the cursor position
     * @field 
     */
    compare_contact: DataBookCursorCompareContactFunc
    /**
     * The #EDataBookCursorLoadLocaleFunc delegate used to reload the locale setting
     * @field 
     */
    load_locale: DataBookCursorLoadLocaleFunc
}

/**
 * Methods to implement on an #EDataBookCursor concrete class.
 * @record 
 */
export abstract class DataBookCursorClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorClass

    static name: string
}

export interface DataBookCursorPrivate {
}

export class DataBookCursorPrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorPrivate

    static name: string
}

export interface DataBookCursorSqliteClass {
}

/**
 * The SQLite cursor class structure.
 * @record 
 */
export abstract class DataBookCursorSqliteClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorSqliteClass

    static name: string
}

export interface DataBookCursorSqlitePrivate {
}

export class DataBookCursorSqlitePrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorSqlitePrivate

    static name: string
}

export interface DataBookDirectClass {

    // Own fields of EDataBook-1.2.EDataBook.DataBookDirectClass

    parent: GObject.ObjectClass
}

export abstract class DataBookDirectClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookDirectClass

    static name: string
}

export interface DataBookDirectPrivate {
}

export class DataBookDirectPrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookDirectPrivate

    static name: string
}

export interface DataBookFactoryClass {

    // Own fields of EDataBook-1.2.EDataBook.DataBookFactoryClass

    parent_class: EBackend.DataFactoryClass
}

export abstract class DataBookFactoryClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookFactoryClass

    static name: string
}

export interface DataBookFactoryPrivate {
}

export class DataBookFactoryPrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookFactoryPrivate

    static name: string
}

export interface DataBookPrivate {
}

export class DataBookPrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookPrivate

    static name: string
}

export interface DataBookViewClass {

    // Own fields of EDataBook-1.2.EDataBook.DataBookViewClass

    parent: GObject.ObjectClass
}

export abstract class DataBookViewClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewClass

    static name: string
}

export interface DataBookViewPrivate {
}

export class DataBookViewPrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewPrivate

    static name: string
}

export interface SubprocessBookFactoryClass {

    // Own fields of EDataBook-1.2.EDataBook.SubprocessBookFactoryClass

    parent_class: EBackend.SubprocessFactoryClass
}

export abstract class SubprocessBookFactoryClass {

    // Own properties of EDataBook-1.2.EDataBook.SubprocessBookFactoryClass

    static name: string
}

export interface SubprocessBookFactoryPrivate {
}

export class SubprocessBookFactoryPrivate {

    // Own properties of EDataBook-1.2.EDataBook.SubprocessBookFactoryPrivate

    static name: string
}

export interface SystemLocaleWatcherClass {

    // Own fields of EDataBook-1.2.EDataBook.SystemLocaleWatcherClass

    parent_class: GObject.ObjectClass
}

export abstract class SystemLocaleWatcherClass {

    // Own properties of EDataBook-1.2.EDataBook.SystemLocaleWatcherClass

    static name: string
}

export interface SystemLocaleWatcherPrivate {
}

export class SystemLocaleWatcherPrivate {

    // Own properties of EDataBook-1.2.EDataBook.SystemLocaleWatcherPrivate

    static name: string
}

export interface bSqlCursor {
}

/**
 * An opaque cursor pointer
 * @record 
 */
export class bSqlCursor {

    // Own properties of EDataBook-1.2.EDataBook.bSqlCursor

    static name: string
}

export interface bSqlSearchData {

    // Own fields of EDataBook-1.2.EDataBook.bSqlSearchData

    /**
     * The %E_CONTACT_UID field of this contact
     * @field 
     */
    uid: string | null
    /**
     * The the vcard string
     * @field 
     */
    vcard: string | null
    /**
     * Any extra data associated to the vcard
     * @field 
     */
    extra: string | null
}

/**
 * This structure is used to represent contacts returned
 * by the #EBookSqlite from various functions
 * such as e_book_sqlitedb_search().
 * 
 * The `extra` parameter will contain any data which was
 * previously passed for this contact in e_book_sqlite_add_contact().
 * 
 * These should be freed with e_book_sqlite_search_data_free().
 * @record 
 */
export class bSqlSearchData {

    // Own properties of EDataBook-1.2.EDataBook.bSqlSearchData

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END