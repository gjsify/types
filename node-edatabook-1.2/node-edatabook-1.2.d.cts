
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-edatabook-1.2-import.d.ts';
    
/**
 * EDataBook-1.2
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type EDataServer from '@girs/node-edataserver-1.2';
import type libxml2 from '@girs/node-libxml2-2.0';
import type Soup from '@girs/node-soup-3.0';
import type Json from '@girs/node-json-1.0';
import type Camel from '@girs/node-camel-1.2';
import type EBookContacts from '@girs/node-ebookcontacts-1.2';
import type EBackend from '@girs/node-ebackend-1.2';

/**
 * What compare function should be used when comparing two values.
 */
export enum BookBackendSexpCompareKind {
    /**
     * Unknown compare kind
     */
    UNKNOWN,
    /**
     * Check whether a value begins with a string
     */
    BEGINS_WITH,
    /**
     * Check whether a value ends with a string
     */
    ENDS_WITH,
    /**
     * Check whether a value contains a string
     */
    CONTAINS,
    /**
     * Check whether a value exactly matches a string
     */
    IS,
}
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
export const BOOK_SQL_IS_POPULATED_KEY: string
/**
 * This key can be used with e_book_sqlite_get_key_value().
 * 
 * In the case of a migration from an older SQLite, any value which
 * was previously stored with e_book_backend_sqlitedb_set_sync_data()
 * can be retrieved with this key.
 */
export const BOOK_SQL_SYNC_DATA_KEY: string
/**
 * This environment variable configures where the address book
 * factory loads its backend modules from.
 */
export const EDS_ADDRESS_BOOK_MODULES: string
/**
 * This environment variable configures where the address book
 * factory subprocess is located in.
 */
export const EDS_SUBPROCESS_BOOK_PATH: string
export const XIMIAN_VCARD: string
/**
 * Frees the `data` structure, previously allocated with e_book_cache_search_data_new()
 * or e_book_cache_search_data_copy().
 * @param data an #EBookCacheSearchData
 */
export function bookCacheSearchDataFree(data: any | null): void
/**
 * Frees the `ptr` structure, previously allocated with e_book_meta_backend_info_new()
 * or e_book_meta_backend_info_copy().
 * @param ptr an #EBookMetaBackendInfo
 */
export function bookMetaBackendInfoFree(ptr: any | null): void
/**
 * Fetches the extra data previously set for `uid,` either with
 * e_book_sqlite_set_contact_extra() or when adding contacts,
 * without locking internal mutex.
 * @param ebsql An #EBookSqlite
 * @param uid The uid of the contact to fetch the extra data for
 * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
 */
export function ebsqlGetContactExtraUnlocked(ebsql: BookSqlite, uid: string): [ /* returnType */ boolean, /* retExtra */ string | null ]
/**
 * Fetch the #EContact specified by `uid` in `ebsql` without locking internal mutex.
 * 
 * If `meta_contact` is specified, then a shallow #EContact will be created
 * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
 * @param ebsql An #EBookSqlite
 * @param uid The uid of the contact to fetch
 * @param metaContact Whether an entire contact is desired, or only the metadata
 * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
 */
export function ebsqlGetContactUnlocked(ebsql: BookSqlite, uid: string, metaContact: boolean): [ /* returnType */ boolean, /* contact */ EBookContacts.Contact ]
/**
 * Fetch a vcard string for `uid` in `ebsql` without locking internal mutex.
 * 
 * If `meta_contact` is specified, then a shallow vcard representation will be
 * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
 * @param ebsql An #EBookSqlite
 * @param uid The uid of the contact to fetch
 * @param metaContact Whether an entire contact is desired, or only the metadata
 * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
 */
export function ebsqlGetVcardUnlocked(ebsql: BookSqlite, uid: string, metaContact: boolean): [ /* returnType */ boolean, /* retVcard */ string | null ]
/**
 * A callback prototype being called in a dedicated thread, scheduled
 * by e_book_backend_schedule_custom_operation().
 * @callback 
 * @param bookBackend an #EBookBackend
 * @param cancellable an optional #GCancellable, as provided to e_book_backend_schedule_custom_operation()
 */
export interface BookBackendCustomOpFunc {
    (bookBackend: BookBackend, cancellable: Gio.Cancellable | null): void
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
 * @param bookCache an #EBookCache
 * @param uid a unique object identifier
 * @param revision the object revision
 * @param object the object itself
 * @param extra extra data stored with the object
 * @param customFlags object's custom flags
 * @param offlineState object's offline state, one of #EOfflineState
 * @returns %TRUE to continue, %FALSE to stop walk through.
 */
export interface BookCacheSearchFunc {
    (bookCache: BookCache, uid: string, revision: string, object: string, extra: string, customFlags: number, offlineState: EBackend.OfflineState): boolean
}
/**
 * A callback called for each row of a SELECT statement executed
 * with e_book_sqlite_select() function.
 * @callback 
 * @param ebsql an #EBookSqlite
 * @param columnNames column names
 * @param columnValues column values
 * @returns %TRUE to continue, %FALSE to stop walk through.
 */
export interface BookSqliteSelectFunc {
    (ebsql: BookSqlite, columnNames: string[], columnValues: string[]): boolean
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
    (cursor: DataBookCursor, index: number, locale: string): boolean
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
 * @param revisionGuard The expected current addressbook revision, or %NULL
 * @param flags The #EBookCursorStepFlags for this step
 * @param origin The #EBookCursorOrigin from whence to step
 * @param count a positive or negative amount of contacts to try and fetch
 * @param cancellable A #GCancellable
 * @returns The number of contacts traversed if successful, otherwise -1 is returned and @error is set.
 */
export interface DataBookCursorStepFunc {
    (cursor: DataBookCursor, revisionGuard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable: Gio.Cancellable | null): number
}
/**
 * A function which may be called in response to a change
 * in contact data.
 * 
 * <note><para>This user callback is called inside a lock,
 * you must not call the #EBookSqlite API from
 * this callback.</para></note>
 * @callback 
 * @param changeType The #EbSqlChangeType which occurred
 * @param uid A contact UID
 * @param extra The extra data associated to the contact
 * @param vcard The vcard string for this UID
 */
export interface bSqlChangeCallback {
    (changeType: bSqlChangeType, uid: string, extra: string, vcard: string): void
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
    (uid: string, extra: string): string | null
}
export module BookBackend {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        (sender: string | null): void
    }

    /**
     * Signal callback interface for `shutdown`
     */
    export interface ShutdownSignalCallback {
        (): void
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

    cacheDir: string | null
    readonly proxyResolver: Gio.ProxyResolver
    readonly registry: EDataServer.SourceRegistry
    writable: boolean
    __gtype__: number

    // Owm methods of EDataBook-1.2.EDataBook.BookBackend

    /**
     * Adds `view` to `backend` for querying.
     * @param view an #EDataBookView
     */
    addView(view: DataBookView): void
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
    configureDirect(config: string): void
    /**
     * Asynchronously checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_contains_email_finish() to get the result of the
     * operation.
     * @param emailAddress an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    containsEmail(emailAddress: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_contains_email().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    containsEmailFinish(result: Gio.AsyncResult): boolean
    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param emailAddress an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE when found the @email_address, %FALSE on failure
     */
    containsEmailSync(emailAddress: string, cancellable: Gio.Cancellable | null): boolean
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
    createContacts(vcards: string, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
     * @param outContacts a #GQueue in which to deposit results
     * @returns %TRUE on success, %FALSE on failure
     */
    createContactsFinish(result: Gio.AsyncResult, outContacts: GLib.Queue): boolean
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
     * @param outContacts a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    createContactsSync(vcards: string, opflags: number, outContacts: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
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
     * @param sortFields the #EContactFields to sort by
     * @param sortTypes the #EBookCursorSortTypes for the sorted fields
     * @param nFields the number of fields in the `sort_fields` and `sort_types`
     * @returns A newly created cursor, the cursor belongs    to the backend and should not be unreffed, or %NULL on error
     */
    createCursor(sortFields: EBookContacts.ContactField, sortTypes: EBookContacts.BookCursorSortType, nFields: number): DataBookCursor
    /**
     * Requests `backend` to release and destroy `cursor,` this
     * will trigger an %E_CLIENT_ERROR_INVALID_ARG error if `cursor`
     * is not owned by `backend`.
     * @param cursor the #EDataBookCursor to destroy
     * @returns Whether @cursor was successfully deleted.
     */
    deleteCursor(cursor: DataBookCursor): boolean
    /**
     * Thread-safe variation of e_book_backend_get_cache_dir().
     * Use this function when accessing `backend` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #EBookBackend:cache-dir
     */
    dupCacheDir(): string | null
    /**
     * Fetches a copy of the currently configured locale for the addressbook
     * @returns A copy of the currently configured locale for the addressbook.   Free with g_free() when done with it.
     */
    dupLocale(): string | null
    /**
     * Returns `range_length` contacts from 0-based index `range_start`
     * in the view identified by the `view_id`.
     * When there are asked more than e_book_backend_get_view_n_total()
     * contacts only those up to the total number of contacts are read.
     * Asking for out of range contacts results in an error, though
     * it can return less than `range_length` contacts.
     * 
     * The default implementation tracks the view's content in memory
     * and returns the contacts as needed. The subclasses can do more
     * efficient implementation.
     * 
     * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
     * @param viewId a view identifier
     * @param rangeStart 0-based range start to retrieve the contacts for
     * @param rangeLength how many contacts to retrieve
     * @returns an array of the contacts, or %NULL, when the view cannot be found    or when the @range_start is out of bounds.
     */
    dupViewContacts(viewId: number, rangeStart: number, rangeLength: number): EBookContacts.Contact[] | null
    /**
     * Returns a list of #EBookIndices holding indices of the contacts
     * in the view identified by `view_id`. The array is terminated by an item
     * with chr member being %NULL.
     * 
     * The default implementation returns an array previously set
     * by e_book_backend_set_view_indices().
     * 
     * Free the returned array with e_book_indices_free(), when no longer needed.
     * 
     * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
     * @param viewId a view identifier
     * @returns an array of #EBookIndices, or %NULL
     */
    dupViewIndices(viewId: number): EBookContacts.BookIndices | null
    /**
     * Returns currently used sort fields for manual query views. The returned
     * array is NULL only if the view could not be found. The default sort is
     * by the file-as filed in ascending order.
     * 
     * The array is terminated by an item with an %E_CONTACT_FIELD_LAST field.
     * 
     * Free the returned array with e_book_client_view_sort_fields_free(),
     * when no longer needed.
     * 
     * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
     * @param viewId a view identifier
     * @returns current sort fields for the @view_id, as an #EBookClientViewSortFields    array, or %NULL, when the view could not be found.
     */
    dupViewSortFields(viewId: number): EBookContacts.BookClientViewSortFields
    /**
     * Calls `func` for each existing view (as returned by e_book_backend_list_views()).
     * The `func` can return %FALSE to stop early.
     * @returns whether the call had been stopped by @func
     */
    foreachView(): boolean
    /**
     * Notifies each view of the `backend` about progress. When `only_completed_views`
     * is %TRUE, notifies only completed views.
     * @param onlyCompletedViews whether notify in completed views only
     * @param percent percent complete
     * @param message message describing the operation in progress, or %NULL
     */
    foreachViewNotifyProgress(onlyCompletedViews: boolean, percent: number, message: string | null): void
    /**
     * Obtains the value of the backend property named `prop_name`.
     * Freed the returned string with g_free() when finished with it.
     * @param propName a backend property name
     * @returns the value for @prop_name
     */
    getBackendProperty(propName: string): string | null
    /**
     * Returns the cache directory path used by `backend`.
     * @returns the cache directory path
     */
    getCacheDir(): string
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
    getContact(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getContactFinish(result: Gio.AsyncResult): EBookContacts.Contact
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
    getContactList(query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
     * @param outContacts a #GQueue in which to deposit results
     * @returns %TRUE on success, %FALSE on failure
     */
    getContactListFinish(result: Gio.AsyncResult, outContacts: GLib.Queue): boolean
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
     * @param outContacts a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    getContactListSync(query: string, outContacts: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
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
    getContactListUids(query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
     * @param outUids a #GQueue in which to deposit results
     * @returns %TRUE on success, %FALSE on failure
     */
    getContactListUidsFinish(result: Gio.AsyncResult, outUids: GLib.Queue): boolean
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
     * @param outUids a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    getContactListUidsSync(query: string, outUids: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
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
    getContactSync(uid: string, cancellable: Gio.Cancellable | null): EBookContacts.Contact
    /**
     * Tries to create an #EDataBookDirect for `backend` if
     * backend supports direct read access.
     * @returns A new #EDataBookDirect object, or %NULL if          @backend does not support direct access
     */
    getDirectBook(): DataBookDirect | null
    /**
     * Returns the data source registry to which #EBackend:source belongs.
     * @returns an #ESourceRegistry
     */
    getRegistry(): EDataServer.SourceRegistry
    /**
     * Returns how many contacts the view identified by `view_id`
     * contains.
     * 
     * The default implementation of this virtual method returns
     * the value previously set by e_book_backend_set_view_n_total().
     * 
     * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
     * @param viewId a view identifier
     * @returns how many contacts the view identified by @view_id    contains.
     */
    getViewNTotal(viewId: number): number
    /**
     * Returns whether `backend` will accept changes to its data content.
     * @returns whether @backend is writable
     */
    getWritable(): boolean
    /**
     * Checks if `backend'`s storage has been opened (and
     * authenticated, if necessary) and the backend itself
     * is ready for accessing. This property is changed automatically
     * after the `backend` is successfully opened.
     * @returns %TRUE if fully opened, %FALSE otherwise.
     */
    isOpened(): boolean
    /**
     * Checks if we can write to `backend`.
     * @returns %TRUE if read-only, %FALSE if not.
     */
    isReadonly(): boolean
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
    listViews(): DataBookView[]
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
    modifyContacts(vcards: string, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_modify_contacts().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    modifyContactsFinish(result: Gio.AsyncResult): boolean
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    modifyContactsSync(vcards: string, opflags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Notifies all of `backend'`s book views that the current set of
     * notifications is complete; use this after a series of
     * e_book_backend_notify_update() and e_book_backend_notify_remove() calls.
     */
    notifyComplete(): void
    /**
     * Notifies each backend listener about an error. This is meant to be used
     * for cases where is no GError return possibility, to notify user about
     * an issue.
     * @param message an error message
     */
    notifyError(message: string): void
    /**
     * Notifies clients about property value change.
     * @param propName property name, which changed
     * @param propValue new property value
     */
    notifyPropertyChanged(propName: string, propValue: string | null): void
    /**
     * Notifies all of `backend'`s book views that the contact with UID
     * `id` has been removed.
     * 
     * e_data_book_respond_remove_contacts() calls this function for you. You
     * only need to call this from your backend if contacts are removed by
     * another (non-PAS-using) client.
     * @param id a contact id
     */
    notifyRemove(id: string): void
    /**
     * Notifies all of `backend'`s book views about the new or modified
     * contacts `contact`.
     * 
     * e_data_book_respond_create_contacts() and e_data_book_respond_modify_contacts() call this
     * function for you. You only need to call this from your backend if
     * contacts are created or modified by another (non-PAS-using) client.
     * @param contact a new or modified contact
     */
    notifyUpdate(contact: EBookContacts.Contact): void
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
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_open().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    openFinish(result: Gio.AsyncResult): boolean
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
    openSync(cancellable: Gio.Cancellable | null): boolean
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
     * @param resultQueue return location for a #GQueue, or %NULL
     * @returns a #GSimpleAsyncResult
     */
    prepareForCompletion(opid: number, resultQueue: GLib.Queue): Gio.SimpleAsyncResult
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
    refDataBook(): DataBook | null
    /**
     * Returns the #GProxyResolver for `backend` (if applicable), as indicated
     * by the #ESourceAuthentication:proxy-uid of `backend'`s #EBackend:source
     * or one of its ancestors.
     * 
     * The returned #GProxyResolver is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
     * @returns a #GProxyResolver, or %NULL
     */
    refProxyResolver(): Gio.ProxyResolver | null
    /**
     * References an #EDataBookView by its identifier.
     * 
     * Unref the returned non-NULL view with g_object_unref(),
     * when no longer needed.
     * @param viewId a view identifier
     * @returns a referenced #EDataBookView corresponding    to the given @view_id, or %NULL, when it cannot be found
     */
    refView(viewId: number): DataBookView | null
    /**
     * References user data previously set by e_book_backend_take_view_user_data()
     * for the `view_id`.
     * 
     * Free the returned non-NULL object with g_object_unref(),
     * when no longer needed.
     * @param viewId a view identifier
     * @returns previously set user data for the @view_id,   or %NULL when none had been set yet or when the view does not exist.
     */
    refViewUserData(viewId: number): GObject.Object
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
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    refreshFinish(result: Gio.AsyncResult): boolean
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
    refreshSync(cancellable: Gio.Cancellable | null): boolean
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
    removeContacts(uids: string[], opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_remove_contacts().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    removeContactsFinish(result: Gio.AsyncResult): boolean
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    removeContactsSync(uids: string, opflags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes `view` from `backend`.
     * @param view an #EDataBookView
     */
    removeView(view: DataBookView): void
    /**
     * Schedules user function `func` to be run in a dedicated thread as
     * a blocking operation.
     * 
     * The function adds its own reference to `use_cancellable,` if not %NULL.
     * 
     * The error returned from `func` is propagated to client using
     * e_book_backend_notify_error() function. If it's not desired,
     * then left the error unchanged and notify about errors manually.
     * @param useCancellable an optional #GCancellable to use for `func`
     * @param func a function to call in a dedicated thread
     */
    scheduleCustomOperation(useCancellable: Gio.Cancellable | null, func: BookBackendCustomOpFunc): void
    /**
     * Sets the cache directory path for use by `backend`.
     * 
     * Note that #EBookBackend is initialized with a default cache directory
     * path which should suffice for most cases.  Backends should not override
     * the default path without good reason.
     * @param cacheDir a local cache directory path
     */
    setCacheDir(cacheDir: string): void
    /**
     * Sets the #EDataBook for `backend`.  The #EDataBook is essentially the
     * glue between incoming D-Bus requests and `backend'`s native API.
     * 
     * An #EDataBook should be set only once after `backend` is first created.
     * @param dataBook an #EDataBook
     */
    setDataBook(dataBook: DataBook): void
    /**
     * Notify the addressbook backend that the current locale has
     * changed, this is important for backends which support
     * ordered result lists which are locale sensitive.
     * @param locale the new locale for the addressbook
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    setLocale(locale: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Stores current `indices` for the view identified by the `view_id` and,
     * if such exists, notifies about it also the corresponding #EDataBookView.
     * The array is terminated by an item with chr member being %NULL.
     * 
     * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
     * @param viewId a view identifier
     * @param indices an array of #EBookIndices, or %NULL
     */
    setViewIndices(viewId: number, indices: EBookContacts.BookIndices | null): void
    /**
     * Stores how many contacts the view identified by `view_id`
     * contains. It also sets the `n_total` to the corresponding
     * #EDataBookView, if such exists. The function does nothing
     * when the view cannot be found.
     * 
     * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
     * @param viewId a view identifier
     * @param nTotal the value to set
     */
    setViewNTotal(viewId: number, nTotal: number): void
    /**
     * Sets the sort fields for the view identified by the `view_id`.
     * The `fields` array should be terminated by an item, which has
     * the field member set to %E_CONTACT_FIELD_LAST.
     * 
     * When the `fields` is %NULL, the sort by file-as in ascending order
     * is used instead.
     * 
     * The default implementation of this virtual method stores
     * the `fields` into the internal structure for the `backend,`
     * to be available by e_book_backend_dup_view_sort_fields().
     * 
     * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
     * @param viewId a view identifier
     * @param fields an array of #EBookClientViewSortFields, or %NULL
     */
    setViewSortFields(viewId: number, fields: EBookContacts.BookClientViewSortFields | null): void
    /**
     * Sets whether `backend` will accept changes to its data content.
     * @param writable whether `backend` is writable
     */
    setWritable(writable: boolean): void
    /**
     * Starts running the query specified by `view,` emitting signals for
     * matching contacts.
     * @param view the #EDataBookView to start
     */
    startView(view: DataBookView): void
    /**
     * Stops running the query specified by `view,` emitting no more signals.
     * @param view the #EDataBookView to stop
     */
    stopView(view: DataBookView): void
    sync(): void
    /**
     * Sets the user data for the `view_id`. The function assumes ownership
     * of the `user_data`. The `user_data` can be %NULL, which unsets
     * the current user data for the view.
     * 
     * This is primarily aimed as a helper for backend implementations
     * of the manual query views (%E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY).
     * @param viewId a view identifier
     * @param userData user data to set
     */
    takeViewUserData(viewId: number, userData: GObject.Object | null): void

    // Own virtual methods of EDataBook-1.2.EDataBook.BookBackend

    closed(sender: string): void
    implConfigureDirect(config: string): void
    implContainsEmail(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, emailAddress: string): void
    implCreateContacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    implDeleteCursor(cursor: DataBookCursor): boolean
    implDupLocale(): string | null
    implDupViewIndices(viewId: number): EBookContacts.BookIndices
    implGetBackendProperty(propName: string): string | null
    implGetContact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string): void
    implGetContactList(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    implGetContactListUids(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    implGetViewNTotal(viewId: number): number
    implModifyContacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    implNotifyUpdate(contact: EBookContacts.Contact): void
    implOpen(book: DataBook, opid: number, cancellable: Gio.Cancellable | null): void
    implRefresh(book: DataBook, opid: number, cancellable: Gio.Cancellable | null): void
    implRemoveContacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number): void
    implSetLocale(locale: string, cancellable: Gio.Cancellable | null): boolean
    implSetViewSortFields(viewId: number, fields: EBookContacts.BookClientViewSortFields): void
    implStartView(view: DataBookView): void
    implStopView(view: DataBookView): void
    shutdown(): void

    // Own signals of EDataBook-1.2.EDataBook.BookBackend

    connect(sigName: "closed", callback: BookBackend.ClosedSignalCallback): number
    on(sigName: "closed", callback: BookBackend.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: BookBackend.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: BookBackend.ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "shutdown", callback: BookBackend.ShutdownSignalCallback): number
    on(sigName: "shutdown", callback: BookBackend.ShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: BookBackend.ShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: BookBackend.ShutdownSignalCallback): NodeJS.EventEmitter
    emit(sigName: "shutdown", ...args: any[]): void

    // Class property signals of EDataBook-1.2.EDataBook.BookBackend

    connect(sigName: "notify::cache-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
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
    connect(sigName: "notify::connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectable", ...args: any[]): void
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
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-prompter", ...args: any[]): void
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
export class BookBackend extends EBackend.Backend {

    // Own properties of EDataBook-1.2.EDataBook.BookBackend

    static name: string

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

    // Own properties of EDataBook-1.2.EDataBook.BookBackendFactory

    __gtype__: number

    // Class property signals of EDataBook-1.2.EDataBook.BookBackendFactory

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

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSExp

    __gtype__: number

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
    matchContact(contact: EBookContacts.Contact): boolean
    /**
     * Checks if `vcard` matches `sexp`.
     * @param vcard a vCard string
     * @returns %TRUE if the vCard matches, %FALSE otherwise
     */
    matchVcard(vcard: string): boolean
    /**
     * Retrieve the text expression for the given #EBookBackendSExp object.
     * @returns the text expression
     */
    text(): string
    /**
     * Unlocks the `sexp,` previously locked by e_book_backend_sexp_lock().
     */
    unlock(): void

    // Class property signals of EDataBook-1.2.EDataBook.BookBackendSExp

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

export class BookBackendSExp extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSExp

    static name: string

    // Constructors of EDataBook-1.2.EDataBook.BookBackendSExp

    constructor(config?: BookBackendSExp.ConstructorProperties) 
    /**
     * Creates a new #EBookBackendSExp from `text`.
     * @constructor 
     * @param text an s-expression to parse
     * @returns a new #EBookBackendSExp
     */
    constructor(text: string) 
    /**
     * Creates a new #EBookBackendSExp from `text`.
     * @constructor 
     * @param text an s-expression to parse
     * @returns a new #EBookBackendSExp
     */
    static new(text: string): BookBackendSExp
    _init(config?: BookBackendSExp.ConstructorProperties): void
    /**
     * A utility function, which compares only numbers from the `phone_value` with `lookup_value`
     * using `compare_kind` method.
     * @param phoneValue a phone number to compare
     * @param lookupValue a value to lookup for in the phone number
     * @param compareKind an #EBookBackendSexpCompareKind
     * @returns whether numbers from the @phone_value match the @lookup_value using    the given @compare_kind
     */
    static utilPhoneCompare(phoneValue: string, lookupValue: string, compareKind: BookBackendSexpCompareKind): boolean
}

export module BookBackendSync {

    // Constructor properties interface

    export interface ConstructorProperties extends BookBackend.ConstructorProperties {
    }

}

export interface BookBackendSync {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSync

    __gtype__: number

    // Owm methods of EDataBook-1.2.EDataBook.BookBackendSync

    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param emailAddress an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE when found the @email_address, %FALSE on failure
     */
    containsEmail(emailAddress: string, cancellable: Gio.Cancellable | null): boolean

    // Overloads of containsEmail

    /**
     * Asynchronously checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_contains_email_finish() to get the result of the
     * operation.
     * @param emailAddress an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    containsEmail(emailAddress: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    createContacts(vcards: string, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]

    // Overloads of createContacts

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
    createContacts(vcards: string, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getContact(uid: string, cancellable: Gio.Cancellable | null): EBookContacts.Contact

    // Overloads of getContact

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
    getContact(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getContactList(query: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]

    // Overloads of getContactList

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
    getContactList(query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getContactListUids(query: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]

    // Overloads of getContactListUids

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
    getContactListUids(query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    modifyContacts(vcards: string, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]

    // Overloads of modifyContacts

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
    modifyContacts(vcards: string, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    removeContacts(uids: string, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRemovedUids */ string[] ]

    // Overloads of removeContacts

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
    removeContacts(uids: string[], opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Own virtual methods of EDataBook-1.2.EDataBook.BookBackendSync

    containsEmailSync(emailAddress: string, cancellable: Gio.Cancellable | null): boolean

    // Overloads of containsEmailSync

    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param emailAddress an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE when found the @email_address, %FALSE on failure
     */
    containsEmailSync(emailAddress: string, cancellable: Gio.Cancellable | null): boolean
    openSync(cancellable: Gio.Cancellable | null): boolean

    // Overloads of openSync

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
    openSync(cancellable: Gio.Cancellable | null): boolean
    refreshSync(cancellable: Gio.Cancellable | null): boolean

    // Overloads of refreshSync

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
    refreshSync(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of EDataBook-1.2.EDataBook.BookBackendSync

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::cache-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (...args: any[]) => void): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::writable", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectable", ...args: any[]): void
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
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-prompter", ...args: any[]): void
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
export class BookBackendSync extends BookBackend {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSync

    static name: string

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
        (object: string | null): void
    }

    /**
     * Signal callback interface for `dup-contact-revision`
     */
    export interface DupContactRevisionSignalCallback {
        (object: EBookContacts.Contact): string | null
    }

    /**
     * Signal callback interface for `e164-changed`
     */
    export interface E164ChangedSignalCallback {
        (object: EBookContacts.Contact, p0: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.Extensible.ConstructorProperties, EBackend.Cache.ConstructorProperties {
    }

}

export interface BookCache extends EDataServer.Extensible {

    // Own properties of EDataBook-1.2.EDataBook.BookCache

    readonly locale: string | null
    __gtype__: number

    // Owm methods of EDataBook-1.2.EDataBook.BookCache

    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the cache.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param emailAddress an email address to check for
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE when found the @email_address, %FALSE on failure
     */
    containsEmail(emailAddress: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Counts how many contacts satisfy the `sexp`.
     * @param sexp search expression; use %NULL or an empty string to consider all stored contacts
     * @param cancellable A #GCancellable
     * @returns Whether succeeded.
     */
    countQuery(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNTotal */ number ]
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
    cursorCalculate(cursor: BookCacheCursor, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outTotal */ number | null, /* outPosition */ number | null ]
    /**
     * Compares `contact` with `cursor` and returns whether `contact` is less than, equal to, or greater
     * than `cursor`.
     * @param cursor The #EBookCacheCursor
     * @param contact The #EContact to compare
     * @returns A value that is less than, equal to, or greater than zero if @contact is found,    respectively, to be less than, to match, or be greater than the current value of @cursor.
     */
    cursorCompareContact(cursor: BookCacheCursor, contact: EBookContacts.Contact): [ /* returnType */ number, /* outMatchesSexp */ boolean | null ]
    /**
     * Frees the `cursor,` previously allocated with e_book_cache_cursor_new().
     * @param cursor The #EBookCacheCursor to free
     */
    cursorFree(cursor: BookCacheCursor): void
    /**
     * Modifies the current query expression for `cursor`. This will not
     * modify `cursor'`s state, but will change the outcome of any further
     * calls to e_book_cache_cursor_step() or e_book_cache_cursor_calculate().
     * @param cursor The #EBookCacheCursor to modify
     * @param sexp The new query expression for `cursor`
     * @returns %TRUE if the expression was valid and accepted by @cursor
     */
    cursorSetSexp(cursor: BookCacheCursor, sexp: string): boolean
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
    cursorSetTargetAlphabeticIndex(cursor: BookCacheCursor, idx: number): void
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
    cursorStep(cursor: BookCacheCursor, flags: BookCacheCursorStepFlags, origin: BookCacheCursorOrigin, count: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* outResults */ BookCacheSearchData[] | null ]
    /**
     * Returns a comma-separated list of categories used by the contacts
     * stored in the `book_cache`. Free the returned string with g_free(),
     * when no longer needed.
     * @returns a comma-separated list of categories    used by the contacts stored in the @book_cache, or %NULL, when no    category is used by any contact.
     */
    dupCategories(): string | null
    // Has conflict: dupContactRevision(contact: EBookContacts.Contact): string | null
    dupLocale(): string | null
    /**
     * Queries the `book_cache` for the contacts in the given range and order.
     * The `sort_field` should be in the summary, otherwise an error
     * is returned.
     * 
     * Free the `out_contacts` with g_ptr_aray_unref(), when no longer needed.
     * @param sexp search expression; use %NULL or an empty string to consider all stored contacts
     * @param sortField a field to sort by, which should be in the summary
     * @param sortType an #EBookCursorSortType
     * @param nOffset a 0-based offset in the sorted result to start reading from, or 0 to read from start
     * @param nLimit how many values to return only; use 0 or G_MAXUINT to read everything from the `n_offset`
     * @param outContacts an array of #EContact-s in the requested order
     * @param cancellable A #GCancellable
     * @returns Whether succeeded.
     */
    dupQueryContacts(sexp: string | null, sortField: EBookContacts.ContactField, sortType: EBookContacts.BookCursorSortType, nOffset: number, nLimit: number, outContacts: EBookContacts.Contact[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Queries the `book_cache` for a `summary_field` value for contacts in the given range and order.
     * To get complete contacts use e_book_cache_dup_query_contacts(). Note the field value may
     * not correspond precisely to the value stored in the vCard (it can be in lower case).
     * 
     * Both `summary_field` and `sort_field` should be in the summary, otherwise an error
     * is returned.
     * 
     * The `out_uids` and `out_values` will have the same number of elements,
     * the indexes corresponding to each other. Free the arrays with
     * g_ptr_aray_unref(), when no longer needed.
     * @param summaryField a field to query, which should be in the summary
     * @param sexp search expression; use %NULL or an empty string to consider all stored contacts
     * @param sortField a field to sort by, which should be in the summary
     * @param sortType an #EBookCursorSortType
     * @param nOffset a 0-based offset in the sorted result to start reading from, or 0 to read from start
     * @param nLimit how many values to return only; use 0 or G_MAXUINT to read everything from the `n_offset`
     * @param outUids contact UID-s in the requested order
     * @param outValues `summary_field` values in the requested order
     * @param cancellable A #GCancellable
     * @returns Whether succeeded.
     */
    dupQueryField(summaryField: EBookContacts.ContactField, sexp: string | null, sortField: EBookContacts.ContactField, sortType: EBookContacts.BookCursorSortType, nOffset: number, nLimit: number, outUids: string[], outValues: string[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Queries the `book_cache` for a `summary_field` value for contact with UID `uid`.
     * Note the field value may not correspond precisely to the value stored
     * in the vCard (it can be in lower case).
     * 
     * Free the `out_value` with g_free(), when no longer needed.
     * @param summaryField a field to query, which should be in the summary
     * @param uid a contact UID to query the `summary_field` for
     * @param cancellable A #GCancellable
     * @returns Whether succeeded.
     */
    dupSummaryField(summaryField: EBookContacts.ContactField, uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outValue */ string | null ]
    /**
     * Fetch the #EContact specified by `uid` in `book_cache`.
     * 
     * If `meta_contact` is specified, then a shallow #EContact will be created
     * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param metaContact Whether an entire contact is desired, or only the metadata
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    getContact(uid: string, metaContact: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact ]
    /**
     * Gets the custom flags previously set for the `uid,` either with
     * e_book_cache_set_contact_custom_flags(), when adding contacts or
     * when removing contacts in offline.
     * @param uid The uid of the contact to set the extra data for
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getContactCustomFlags(uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCustomFlags */ number ]
    /**
     * Fetches the extra data previously set for `uid,` either with
     * e_book_cache_set_contact_extra() or when adding contacts.
     * @param uid The uid of the contact to fetch the extra data for
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    getContactExtra(uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExtra */ string | null ]
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
    getUidsWithExtra(extra: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]
    /**
     * Fetch a vCard string for `uid` in `book_cache`.
     * 
     * If `meta_contact` is specified, then a shallow vCard representation will be
     * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param metaContact Whether an entire contact is desired, or only the metadata
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    getVcard(uid: string, metaContact: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outVcard */ string | null ]
    /**
     * This is a convenience wrapper for e_book_cache_put_contacts(),
     * which is the preferred way to add or modify multiple contacts when possible.
     * @param contact an #EContact to be added
     * @param extra extra data to store in association with this `contact`
     * @param customFlags custom flags for the `contact,` not interpreted by the `book_cache`
     * @param offlineFlag one of #ECacheOfflineFlag, whether putting this contact in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    putContact(contact: EBookContacts.Contact, extra: string | null, customFlags: number, offlineFlag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Adds or replaces contacts in `book_cache`.
     * 
     * If `extras` is specified, it must have an equal length as the `contacts` list.
     * Similarly the non-NULL `custom_flags` length should be the same as the length of the `contacts`.
     * Each element from the `extras` list and `custom_flags` list will be stored in association
     * with its corresponding contact in the `contacts` list.
     * @param contacts A list of contacts to add to `book_cache`
     * @param extras A list of extra data to store in association with the `contacts`
     * @param customFlags optional custom flags to use for the `contacts`
     * @param offlineFlag one of #ECacheOfflineFlag, whether putting these contacts in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    putContacts(contacts: EBookContacts.Contact[], extras: string[] | null, customFlags: number[] | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * References the currently active #ECollator for `book_cache,`
     * use e_collator_unref() when finished using the returned collator.
     * 
     * Note that the active collator will change with the active locale setting.
     * @returns A reference to the active collator.
     */
    refCollator(): EDataServer.Collator
    /**
     * References the #ESource to which `book_cache` is paired,
     * use g_object_unref() when no longer needed.
     * It can be %NULL in some cases, like when running tests.
     * @returns A reference to the #ESource to which    @book_cache is paired, or %NULL.
     */
    refSource(): EDataServer.Source | null
    /**
     * Removes the contact identified by `uid` from `book_cache`.
     * @param uid the uid of the contact to remove
     * @param customFlags custom flags for the contact with the given `uid,` not interpreted by the `book_cache`
     * @param offlineFlag one of #ECacheOfflineFlag, whether removing this contact in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    removeContact(uid: string, customFlags: number, offlineFlag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes the contacts indicated by `uids` from `book_cache`.
     * The `custom_flags` is used, if not %NULL, only if the `offline_flag`
     * is %E_CACHE_IS_OFFLINE. Otherwise it's ignored. The length of
     * the `custom_flags` should match the length of `uids,` when not %NULL.
     * @param uids a #GSList of uids indicating which contacts to remove
     * @param customFlags an optional #GSList of custom flags for the `ids`
     * @param offlineFlag one of #ECacheOfflineFlag, whether removing these contacts in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    removeContacts(uids: string[], customFlags: number[] | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
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
     * @param metaContacts Whether entire contacts are desired, or only the metadata
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    search(sexp: string | null, metaContacts: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outList */ BookCacheSearchData[] ]
    /**
     * Similar to e_book_cache_search(), but fetches only a list of contact UIDs.
     * 
     * The returned `out_list` list should be freed with g_slist_free_full(list, g_free)
     * when no longer needed.
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    searchUids(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outList */ string[] ]
    /**
     * Similar to e_book_cache_search(), but calls the `func` for each found contact.
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    searchWithCallback(sexp: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the custom flags associated with a contact
     * identified by the `uid`.
     * @param uid The uid of the contact to set the extra data for
     * @param customFlags the custom flags to set for the contact
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    setContactCustomFlags(uid: string, customFlags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the extra data associated with `uid`.
     * @param uid The uid of the contact to set the extra data for
     * @param extra The extra data to set
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    setContactExtra(uid: string, extra: string | null, cancellable: Gio.Cancellable | null): boolean
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
     * @param lcCollate The new locale for the cache
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether the new locale was successfully set.
     */
    setLocale(lcCollate: string, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of EDataBook-1.2.EDataBook.BookCache

    categoriesChanged(categories: string): void
    /**
     * Returns the `contact` revision, used to detect changes.
     * The returned string should be freed with g_free(), when
     * no longer needed.
     * @virtual 
     * @param contact an #EContact
     * @returns A newly allocated string containing    revision of the @contact.
     */
    dupContactRevision(contact: EBookContacts.Contact): string | null
    e164Changed(contact: EBookContacts.Contact, isReplace: boolean): void

    // Own signals of EDataBook-1.2.EDataBook.BookCache

    connect(sigName: "categories-changed", callback: BookCache.CategoriesChangedSignalCallback): number
    on(sigName: "categories-changed", callback: BookCache.CategoriesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "categories-changed", callback: BookCache.CategoriesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "categories-changed", callback: BookCache.CategoriesChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "categories-changed", ...args: any[]): void
    connect(sigName: "dup-contact-revision", callback: BookCache.DupContactRevisionSignalCallback): number
    on(sigName: "dup-contact-revision", callback: BookCache.DupContactRevisionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dup-contact-revision", callback: BookCache.DupContactRevisionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dup-contact-revision", callback: BookCache.DupContactRevisionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dup-contact-revision", ...args: any[]): void
    connect(sigName: "e164-changed", callback: BookCache.E164ChangedSignalCallback): number
    on(sigName: "e164-changed", callback: BookCache.E164ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "e164-changed", callback: BookCache.E164ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "e164-changed", callback: BookCache.E164ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "e164-changed", p0: boolean, ...args: any[]): void

    // Class property signals of EDataBook-1.2.EDataBook.BookCache

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor(filename: string, source: EDataServer.Source | null, cancellable: Gio.Cancellable | null) 
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
    static new(filename: string, source: EDataServer.Source | null, cancellable: Gio.Cancellable | null): BookCache
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
    static newFull(filename: string, source: EDataServer.Source | null, setup: EBookContacts.SourceBackendSummarySetup | null, cancellable: Gio.Cancellable | null): BookCache
    _init(config?: BookCache.ConstructorProperties): void
}

export module BookMetaBackend {

    // Signal callback interfaces

    /**
     * Signal callback interface for `refresh-completed`
     */
    export interface RefreshCompletedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `source-changed`
     */
    export interface SourceChangedSignalCallback {
        (): void
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
    __gtype__: number

    // Owm methods of EDataBook-1.2.EDataBook.BookMetaBackend

    // Has conflict: connectSync(credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    // Has conflict: disconnectSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the last known synchronization tag, the same as used to
     * call e_book_meta_backend_get_changes_sync().
     * 
     * Free the returned string with g_free(), when no longer needed.
     * @returns The last known synchronization tag,    or %NULL, when none is stored.
     */
    dupSyncTag(): string | null
    /**
     * Empties the local cache by removing all known contacts from it
     * and notifies about such removal any opened views.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    emptyCacheSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Ensures that the `meta_backend` is connected to its destination.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    ensureConnectedSync(cancellable: Gio.Cancellable | null): boolean
    getCapabilities(): string
    // Has conflict: getChangesSync(lastSyncTag: string | null, isRepeat: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string | null, /* outRepeat */ boolean, /* outCreatedObjects */ BookMetaBackendInfo[], /* outModifiedObjects */ BookMetaBackendInfo[], /* outRemovedObjects */ BookMetaBackendInfo[] ]
    /**
     * This value has meaning only if e_book_meta_backend_get_ever_connected()
     * is %TRUE.
     * @returns Whether the @meta_backend connected to a writable destination.
     */
    getConnectedWritable(): boolean
    getEverConnected(): boolean
    // Has conflict: getSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
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
    inlineLocalPhotosSync(contact: EBookContacts.Contact, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: listExistingSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string | null, /* outExistingObjects */ BookMetaBackendInfo[] ]
    // Has conflict: loadContactSync(uid: string, extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact, /* outExtra */ string | null ]
    /**
     * Processes given changes by updating local cache content accordingly.
     * The `meta_backend` processes the changes like being online and particularly
     * requires to be online to load created and modified objects when needed.
     * @param createdObjects a #GSList of #EBookMetaBackendInfo object infos which had been created
     * @param modifiedObjects a #GSList of #EBookMetaBackendInfo object infos which had been modified
     * @param removedObjects a #GSList of #EBookMetaBackendInfo object infos which had been removed
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    processChangesSync(createdObjects: BookMetaBackendInfo[] | null, modifiedObjects: BookMetaBackendInfo[] | null, removedObjects: BookMetaBackendInfo[] | null, cancellable: Gio.Cancellable | null): boolean
    refCache(): BookCache
    /**
     * Refreshes the `meta_backend` immediately. To just schedule refresh
     * operation call e_book_meta_backend_schedule_refresh().
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    refreshSync(cancellable: Gio.Cancellable | null): boolean

    // Overloads of refreshSync

    refreshSync(cancellable: Gio.Cancellable | null): boolean
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
    refreshSync(cancellable: Gio.Cancellable | null): boolean
    // Has conflict: removeContactSync(conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: requiresReconnect(): boolean
    // Has conflict: saveContactSync(overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewUid */ string | null, /* outNewExtra */ string | null ]
    /**
     * Schedules refresh of the content of the `meta_backend`. If there's any
     * already scheduled, then the function does nothing.
     * 
     * Use e_book_meta_backend_refresh_sync() to refresh the `meta_backend`
     * immediately.
     */
    scheduleRefresh(): void
    // Has conflict: searchSync(expr: string | null, metaContact: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    // Has conflict: searchUidsSync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]
    /**
     * Sets the `cache` as the cache to be used by the `meta_backend`.
     * By default, a cache.db in EBookBackend::cache-dir is created
     * in the constructed method. This function can be used to override
     * the default.
     * 
     * Note the `meta_backend` adds its own reference to the `cache`.
     * @param cache an #EBookCache to use
     */
    setCache(cache: BookCache): void
    /**
     * Sets whether the `meta_backend` connected to a writable destination.
     * This value has meaning only if e_book_meta_backend_get_ever_connected()
     * is %TRUE.
     * 
     * This is used by the `meta_backend` itself, during the opening phase,
     * to set the backend writable or not also in the offline mode.
     * @param value value to set
     */
    setConnectedWritable(value: boolean): void
    /**
     * Sets whether the `meta_backend` ever made a successful connection
     * to its destination.
     * 
     * This is used by the `meta_backend` itself, during the opening phase,
     * when it had not been connected yet, then it does so immediately, to
     * eventually report settings error easily.
     * @param value value to set
     */
    setEverConnected(value: boolean): void
    /**
     * Sets the `sync_tag` for the `meta_backend`.
     * @param syncTag a sync tag to set, or %NULL to unset the old one
     */
    setSyncTag(syncTag: string | null): void
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
     * @param objects a #GSList of #EBookMetaBackendInfo object infos to split
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    splitChangesSync(objects: BookMetaBackendInfo[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* objects */ BookMetaBackendInfo[], /* outCreatedObjects */ BookMetaBackendInfo[], /* outModifiedObjects */ BookMetaBackendInfo[], /* outRemovedObjects */ BookMetaBackendInfo[] | null ]
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
    storeInlinePhotosSync(contact: EBookContacts.Contact, cancellable: Gio.Cancellable | null): boolean

    // Conflicting methods

    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param emailAddress an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE when found the @email_address, %FALSE on failure
     */
    containsEmail(emailAddress: string, cancellable: Gio.Cancellable | null): boolean

    // Overloads of containsEmail

    /**
     * Asynchronously checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_contains_email_finish() to get the result of the
     * operation.
     * @param emailAddress an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    containsEmail(emailAddress: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_book_backend_contains_email_finish() to get the result of the
     * operation.
     * @param emailAddress an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    containsEmail(emailAddress: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    createContacts(vcards: string, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]

    // Overloads of createContacts

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
    createContacts(vcards: string, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    createContacts(vcards: string, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getContact(uid: string, cancellable: Gio.Cancellable | null): EBookContacts.Contact

    // Overloads of getContact

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
    getContact(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getContact(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getContactList(query: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]

    // Overloads of getContactList

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
    getContactList(query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getContactList(query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getContactListUids(query: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]

    // Overloads of getContactListUids

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
    getContactListUids(query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getContactListUids(query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    modifyContacts(vcards: string, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]

    // Overloads of modifyContacts

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
    modifyContacts(vcards: string, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    modifyContacts(vcards: string, opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    removeContacts(uids: string, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRemovedUids */ string[] ]

    // Overloads of removeContacts

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
    removeContacts(uids: string[], opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    removeContacts(uids: string[], opflags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    containsEmailSync(emailAddress: string, cancellable: Gio.Cancellable | null): boolean

    // Overloads of containsEmailSync

    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param emailAddress an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE when found the @email_address, %FALSE on failure
     */
    containsEmailSync(emailAddress: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param emailAddress an email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE when found the @email_address, %FALSE on failure
     */
    containsEmailSync(emailAddress: string, cancellable: Gio.Cancellable | null): boolean
    openSync(cancellable: Gio.Cancellable | null): boolean

    // Overloads of openSync

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
    openSync(cancellable: Gio.Cancellable | null): boolean
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
    openSync(cancellable: Gio.Cancellable | null): boolean

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
    connectSync(credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
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
    disconnectSync(cancellable: Gio.Cancellable | null): boolean
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
     * @param lastSyncTag optional sync tag from the last check
     * @param isRepeat set to %TRUE when this is the repeated call
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getChangesSync(lastSyncTag: string | null, isRepeat: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string | null, /* outRepeat */ boolean, /* outCreatedObjects */ BookMetaBackendInfo[], /* outModifiedObjects */ BookMetaBackendInfo[], /* outRemovedObjects */ BookMetaBackendInfo[] ]
    /**
     * It is optional to implement this virtual method by the descendants.
     * It is used to receive SSL error details when any online operation
     * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
     * @virtual 
     * @returns %TRUE, when the SSL error details had been available and    the out parameters populated, %FALSE otherwise.
     */
    getSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
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
    listExistingSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string | null, /* outExistingObjects */ BookMetaBackendInfo[] ]
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
    loadContactSync(uid: string, extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact, /* outExtra */ string | null ]
    /**
     * Removes a contact from the remote side. The `object` is not %NULL when
     * it's removing locally deleted object in offline mode. Being it %NULL,
     * the descendant can obtain the object from the #EBookCache.
     * 
     * It is mandatory to implement this virtual method by the writable descendant.
     * @virtual 
     * @param conflictResolution an #EConflictResolution to use
     * @param uid a contact UID
     * @param extra extra data being saved with the contact in the local cache, or %NULL
     * @param object corresponding vCard object, as stored in the local cache, or %NULL
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    removeContactSync(conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable: Gio.Cancellable | null): boolean
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
    requiresReconnect(): boolean
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
     * @param overwriteExisting %TRUE when can overwrite existing contacts, %FALSE otherwise
     * @param conflictResolution one of #EConflictResolution, what to do on conflicts
     * @param contact an #EContact to save
     * @param extra extra data saved with the contacts in an #EBookCache
     * @param opflags bit-or of EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    saveContactSync(overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewUid */ string | null, /* outNewExtra */ string | null ]
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
     * @param metaContact %TRUE, when return #EContact filled with UID and REV only, %FALSE to return full contacts
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    searchSync(expr: string | null, metaContact: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
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
    searchUidsSync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]
    sourceChanged(): void

    // Own signals of EDataBook-1.2.EDataBook.BookMetaBackend

    connect(sigName: "refresh-completed", callback: BookMetaBackend.RefreshCompletedSignalCallback): number
    on(sigName: "refresh-completed", callback: BookMetaBackend.RefreshCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refresh-completed", callback: BookMetaBackend.RefreshCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refresh-completed", callback: BookMetaBackend.RefreshCompletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "refresh-completed", ...args: any[]): void
    connect(sigName: "source-changed", callback: BookMetaBackend.SourceChangedSignalCallback): number
    on(sigName: "source-changed", callback: BookMetaBackend.SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: BookMetaBackend.SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: BookMetaBackend.SourceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-changed", ...args: any[]): void

    // Class property signals of EDataBook-1.2.EDataBook.BookMetaBackend

    connect(sigName: "notify::cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::cache-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (...args: any[]) => void): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::writable", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectable", ...args: any[]): void
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
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-prompter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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
        (object: any | null, p0: EBookContacts.Contact, p1: string | null, p2: boolean, p3: GObject.Object, p4: any | null): boolean
    }

    /**
     * Signal callback interface for `before-remove-contact`
     */
    export interface BeforeRemoveContactSignalCallback {
        (object: any | null, p0: string | null, p1: Gio.Cancellable | null, p2: any | null): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.Extensible.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BookSqlite extends EDataServer.Extensible {

    // Own properties of EDataBook-1.2.EDataBook.BookSqlite

    __gtype__: number

    // Owm methods of EDataBook-1.2.EDataBook.BookSqlite

    addContact(contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable: Gio.Cancellable | null): boolean
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
    addContacts(contacts: EBookContacts.Contact[], extra: string[] | null, replace: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Counts how many contacts satisfy the `sexp`.
     * @param sexp search expression; use %NULL or an empty string to consider all stored contacts
     * @param cancellable A #GCancellable
     * @returns Whether succeeded.
     */
    countQuery(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNTotal */ number ]
    /**
     * Queries the `ebsql` for the contacts in the given range and order.
     * The `sort_field` should be in the summary, otherwise an error
     * is returned.
     * 
     * Free the `out_contacts` with g_ptr_aray_unref(), when no longer needed.
     * @param sexp search expression; use %NULL or an empty string to consider all stored contacts
     * @param sortField a field to sort by, which should be in the summary
     * @param sortType an #EBookCursorSortType
     * @param nOffset a 0-based offset in the sorted result to start reading from, or 0 to read from start
     * @param nLimit how many values to return only; use 0 or G_MAXUINT to read everything from the `n_offset`
     * @param outContacts an array of #EContact-s in the requested order
     * @param cancellable A #GCancellable
     * @returns Whether succeeded.
     */
    dupQueryContacts(sexp: string | null, sortField: EBookContacts.ContactField, sortType: EBookContacts.BookCursorSortType, nOffset: number, nLimit: number, outContacts: EBookContacts.Contact[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Queries the `ebsql` for a `summary_field` value for contacts in the given range and order.
     * To get complete contacts use e_book_sqlite_dup_query_contacts(). Note the field value may
     * not correspond precisely to the value stored in the vCard (it can be in lower case).
     * 
     * Both `summary_field` and `sort_field` should be in the summary, otherwise an error
     * is returned.
     * 
     * The `out_uids` and `out_values` will have the same number of elements,
     * the indexes corresponding to each other. Free the arrays with
     * g_ptr_aray_unref(), when no longer needed.
     * @param summaryField a field to query, which should be in the summary
     * @param sexp search expression; use %NULL or an empty string to consider all stored contacts
     * @param sortField a field to sort by, which should be in the summary
     * @param sortType an #EBookCursorSortType
     * @param nOffset a 0-based offset in the sorted result to start reading from, or 0 to read from start
     * @param nLimit how many values to return only; use 0 or G_MAXUINT to read everything from the `n_offset`
     * @param outUids contact UID-s in the requested order
     * @param outValues `summary_field` values in the requested order
     * @param cancellable A #GCancellable
     * @returns Whether succeeded.
     */
    dupQueryField(summaryField: EBookContacts.ContactField, sexp: string | null, sortField: EBookContacts.ContactField, sortType: EBookContacts.BookCursorSortType, nOffset: number, nLimit: number, outUids: string[], outValues: string[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Queries the `ebsql` for a `summary_field` value for contact with UID `uid`.
     * Note the field value may not correspond precisely to the value stored
     * in the vCard (it can be in lower case).
     * 
     * Free the `out_value` with g_free(), when no longer needed.
     * @param summaryField a field to query, which should be in the summary
     * @param uid a contact UID to query the `summary_field` for
     * @param cancellable A #GCancellable
     * @returns Whether succeeded.
     */
    dupSummaryField(summaryField: EBookContacts.ContactField, uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outValue */ string | null ]
    /**
     * Executes an SQLite statement. Use e_book_sqlite_select() for
     * SELECT statements.
     * @param sqlStmt an SQLite statement to execute
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    exec(sqlStmt: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Fetch the #EContact specified by `uid` in `ebsql`.
     * 
     * If `meta_contact` is specified, then a shallow #EContact will be created
     * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param metaContact Whether an entire contact is desired, or only the metadata
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    getContact(uid: string, metaContact: boolean): [ /* returnType */ boolean, /* retContact */ EBookContacts.Contact ]
    /**
     * Fetches the extra data previously set for `uid,` either with
     * e_book_sqlite_set_contact_extra() or when adding contacts.
     * @param uid The uid of the contact to fetch the extra data for
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    getContactExtra(uid: string): [ /* returnType */ boolean, /* retExtra */ string | null ]
    /**
     * Fetches the value for `key` and stores it in `value`
     * @param key The key to fetch a value for
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    getKeyValue(key: string): [ /* returnType */ boolean, /* value */ string | null ]
    /**
     * A convenience function to fetch the value of `key` as an integer.
     * @param key The key to fetch a value for
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    getKeyValueInt(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Fetches the current locale setting for the address-book.
     * 
     * Upon success, `lc_collate_out` will hold the returned locale setting,
     * otherwise %FALSE will be returned and `error` will be updated accordingly.
     * @returns Whether the locale was successfully fetched.
     */
    getLocale(): [ /* returnType */ boolean, /* localeOut */ string | null ]
    /**
     * Fetch a vcard string for `uid` in `ebsql`.
     * 
     * If `meta_contact` is specified, then a shallow vcard representation will be
     * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param metaContact Whether an entire contact is desired, or only the metadata
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    getVcard(uid: string, metaContact: boolean): [ /* returnType */ boolean, /* retVcard */ string | null ]
    /**
     * Checks if a contact bearing the UID indicated by `uid` is stored in `ebsql`.
     * @param uid The uid of the contact to check for
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    hasContact(uid: string): [ /* returnType */ boolean, /* exists */ boolean ]
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
     * @param lockType The #EbSqlLockType to acquire
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    lock(lockType: bSqlLockType, cancellable: Gio.Cancellable | null): boolean
    /**
     * References the currently active #ECollator for `ebsql,`
     * use e_collator_unref() when finished using the returned collator.
     * 
     * Note that the active collator will change with the active locale setting.
     * @returns A reference to the active collator.
     */
    refCollator(): EDataServer.Collator
    /**
     * References the #ESource to which `ebsql` is paired,
     * use g_object_unref() when finished using the source.
     * It can be %NULL in some cases, like when running tests.
     * @returns A reference to the #ESource to which @ebsql is paired, or %NULL.
     */
    refSource(): EDataServer.Source | null
    /**
     * Removes the contact indicated by `uid` from `ebsql`.
     * @param uid the uid of the contact to remove
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    removeContact(uid: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes the contacts indicated by `uids` from `ebsql`.
     * @param uids a #GSList of uids indicating which contacts to remove
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    removeContacts(uids: string[], cancellable: Gio.Cancellable | null): boolean
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
     * @param metaContacts Whether entire contacts are desired, or only the metadata
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    search(sexp: string | null, metaContacts: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* retList */ bSqlSearchData[] ]
    /**
     * Similar to e_book_sqlitedb_search(), but fetches only a list of contact UIDs.
     * 
     * The returned `ret_list` list should be freed with g_slist_free() and all
     * elements freed with g_free().
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts.
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    searchUids(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* retList */ string[] ]
    /**
     * Executes a SELECT statement `sql_stmt` and calls `func` for each row of the result.
     * Use e_book_sqlite_exec() for statements which do not return row sets.
     * @param sqlStmt an SQLite SELECT statement to execute
     * @param func an #EBookSqliteSelectFunc function to call for each row
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    select(sqlStmt: string, func: BookSqliteSelectFunc, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the extra data associated with `uid`.
     * @param uid The uid of the contact to set the extra data for
     * @param extra The extra data to set
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    setContactExtra(uid: string, extra: string | null): boolean
    /**
     * Sets the value for `key` to be `value`
     * @param key The key to fetch a value for
     * @param value The new value for `key`
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    setKeyValue(key: string, value: string): boolean
    /**
     * A convenience function to set the value of `key` as an integer.
     * @param key The key to fetch a value for
     * @param value The new value for `key`
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    setKeyValueInt(key: string, value: number): boolean
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
     * @param lcCollate The new locale for the addressbook
     * @param cancellable A #GCancellable
     * @returns Whether the new locale was successfully set.
     */
    setLocale(lcCollate: string, cancellable: Gio.Cancellable | null): boolean
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

    beforeInsertContact(db: any | null, contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable: Gio.Cancellable | null): boolean
    beforeRemoveContact(db: any | null, contactUid: string, cancellable: Gio.Cancellable | null): boolean

    // Own signals of EDataBook-1.2.EDataBook.BookSqlite

    connect(sigName: "before-insert-contact", callback: BookSqlite.BeforeInsertContactSignalCallback): number
    on(sigName: "before-insert-contact", callback: BookSqlite.BeforeInsertContactSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-insert-contact", callback: BookSqlite.BeforeInsertContactSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-insert-contact", callback: BookSqlite.BeforeInsertContactSignalCallback): NodeJS.EventEmitter
    emit(sigName: "before-insert-contact", p0: EBookContacts.Contact, p1: string | null, p2: boolean, p3: GObject.Object, p4: any | null, ...args: any[]): void
    connect(sigName: "before-remove-contact", callback: BookSqlite.BeforeRemoveContactSignalCallback): number
    on(sigName: "before-remove-contact", callback: BookSqlite.BeforeRemoveContactSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-remove-contact", callback: BookSqlite.BeforeRemoveContactSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-remove-contact", callback: BookSqlite.BeforeRemoveContactSignalCallback): NodeJS.EventEmitter
    emit(sigName: "before-remove-contact", p0: string | null, p1: Gio.Cancellable | null, p2: any | null, ...args: any[]): void

    // Class property signals of EDataBook-1.2.EDataBook.BookSqlite

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
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class BookSqlite extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.BookSqlite

    static name: string

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
    constructor(path: string, source: EDataServer.Source | null, cancellable: Gio.Cancellable | null) 
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
    static new(path: string, source: EDataServer.Source | null, cancellable: Gio.Cancellable | null): BookSqlite
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
     * @param vcardCallback A function to resolve vcards
     * @param changeCallback A function to catch notifications of vcard changes
     * @param cancellable A #GCancellable
     * @returns The newly created #EBookSqlite, or %NULL if opening or creating the addressbook failed.
     */
    static newFull(path: string, source: EDataServer.Source | null, setup: EBookContacts.SourceBackendSummarySetup | null, vcardCallback: bSqlVCardCallback | null, changeCallback: bSqlChangeCallback | null, cancellable: Gio.Cancellable | null): BookSqlite
    _init(config?: BookSqlite.ConstructorProperties): void
    static errorQuark(): GLib.Quark
    /**
     * Frees an #EbSqlSearchData
     * @param data An #EbSqlSearchData
     */
    static searchDataFree(data: bSqlSearchData): void
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
    readonly objectPath: string | null
    __gtype__: number

    // Owm methods of EDataBook-1.2.EDataBook.DataBook

    /**
     * Returns the #GDBusConnection on which the AddressBook D-Bus interface
     * is exported.
     * @returns the #GDBusConnection
     */
    getConnection(): Gio.DBusConnection
    /**
     * Returns the object path at which the AddressBook D-Bus interface is
     * exported.
     * @returns the object path
     */
    getObjectPath(): string
    /**
     * Returns the #EBookBackend to which incoming remote method invocations
     * are being forwarded.
     * 
     * The returned #EBookBackend is referenced for thread-safety and should
     * be unreferenced with g_object_unref() when finished with it.
     * @returns an #EBookBackend
     */
    refBackend(): BookBackend
    /**
     * Notifies the clients about a property change.
     * @param propName Property name which changed
     * @param propValue The new property value
     */
    reportBackendPropertyChanged(propName: string, propValue: string | null): void
    /**
     * Notifies the clients about an error, which happened out of any client-initiate operation.
     * @param message An error message
     */
    reportError(message: string): void
    /**
     * Finishes a call to check whether contains an email address.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param found %TRUE, when found the email in the address book
     */
    respondContainsEmail(opid: number, error: GLib.Error, found: boolean): void
    /**
     * Finishes a call to create a list contacts.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param contacts A list of created #EContact(s), empty on error
     */
    respondCreateContacts(opid: number, error: GLib.Error, contacts: EBookContacts.Contact[]): void
    /**
     * Notifies listeners of the completion of the get_contact method call.
     * Only one of `error` and `contact` can be set.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param contact the found #EContact, or %NULL, if it could not be found
     */
    respondGetContact(opid: number, error: GLib.Error | null, contact: EBookContacts.Contact | null): void
    /**
     * Finishes a call to get list of #EContact, which satisfy certain criteria.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param contacts A list of #EContact, empty on error
     */
    respondGetContactList(opid: number, error: GLib.Error, contacts: EBookContacts.Contact[]): void
    /**
     * Finishes a call to get list of UIDs which satisfy certain criteria.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param uids A list of picked UIDs, empty on error
     */
    respondGetContactListUids(opid: number, error: GLib.Error, uids: string[]): void
    /**
     * Finishes a call to modify a list of contacts.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param contacts A list of modified #EContact(s), empty on error
     */
    respondModifyContacts(opid: number, error: GLib.Error, contacts: EBookContacts.Contact[]): void
    /**
     * Notifies listeners of the completion of the open method call.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     */
    respondOpen(opid: number, error: GLib.Error): void
    /**
     * Notifies listeners of the completion of the refresh method call.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     */
    respondRefresh(opid: number, error: GLib.Error): void
    /**
     * Finishes a call to remove a list of contacts.
     * @param opid An operation ID
     * @param error Operation error, if any, automatically freed if passed it
     * @param ids A list of removed contact UID-s, empty on error
     */
    respondRemoveContacts(opid: number, error: GLib.Error, ids: string[]): void
    /**
     * Set's the locale for this addressbook, this can result in renormalization of
     * locale sensitive data.
     * @param locale the new locale to set for this book
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
     */
    setLocale(locale: string, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of EDataBook-1.2.EDataBook.DataBook

    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
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
    disconnect(id: number): void
}

export class DataBook extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.DataBook

    static name: string

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
     * @param objectPath object path for the D-Bus interface
     * @returns an #EDataBook, or %NULL on error
     */
    constructor(backend: BookBackend, connection: Gio.DBusConnection, objectPath: string) 
    /**
     * Creates a new #EDataBook and exports the AddressBook D-Bus interface
     * on `connection` at `object_path`.  The #EDataBook handles incoming remote
     * method invocations and forwards them to the `backend`.  If the AddressBook
     * interface fails to export, the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #EBookBackend
     * @param connection a #GDBusConnection
     * @param objectPath object path for the D-Bus interface
     * @returns an #EDataBook, or %NULL on error
     */
    static new(backend: BookBackend, connection: Gio.DBusConnection, objectPath: string): DataBook
    _init(config?: DataBook.ConstructorProperties): void
    /**
     * Takes a list of strings and converts it to a comma-separated string of
     * values; free returned pointer with g_free()
     * @param strings a list of gchar *
     * @returns comma-separated newly allocated text of @strings
     */
    static stringSlistToCommaString(strings: string[]): string | null
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
    __gtype__: number

    // Owm methods of EDataBook-1.2.EDataBook.DataBookCursor

    /**
     * Should be called by addressbook backends whenever a contact
     * is added.
     * @param contact the #EContact which was added to the addressbook
     */
    contactAdded(contact: EBookContacts.Contact): void
    /**
     * Should be called by addressbook backends whenever a contact
     * is removed.
     * @param contact the #EContact which was removed from the addressbook
     */
    contactRemoved(contact: EBookContacts.Contact): void
    /**
     * Gets the backend which created and owns `cursor`.
     * @returns The #EBookBackend owning @cursor.
     */
    getBackend(): BookBackend
    // Has conflict: getPosition(): number
    /**
     * Fetch the total number of contacts which match `cursor'`s query expression.
     * @returns the total contacts for @cursor
     */
    getTotal(): number
    // Has conflict: loadLocale(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* locale */ string ]
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
     * @param objectPath the object path to place the direct access configuration data
     * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
     */
    registerGdbusObject(connection: Gio.DBusConnection, objectPath: string): boolean
    // Has conflict: setAlphabeticIndex(index: number, locale: string, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: setSexp(sexp: string | null, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: step(revisionGuard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]

    // Own virtual methods of EDataBook-1.2.EDataBook.DataBookCursor

    compareContact(contact: EBookContacts.Contact): [ /* returnType */ number, /* matchesSexp */ boolean | null ]
    getPosition(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* total */ number, /* position */ number ]
    loadLocale(): [ /* returnType */ boolean, /* locale */ string | null ]
    setAlphabeticIndex(index: number, locale: string): boolean
    setSexp(sexp: string | null): boolean
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
     * @param revisionGuard The expected current addressbook revision, or %NULL
     * @param flags The #EBookCursorStepFlags for this step
     * @param origin The #EBookCursorOrigin from whence to step
     * @param count a positive or negative amount of contacts to try and fetch
     * @param cancellable A #GCancellable
     * @returns The number of contacts traversed if successful, otherwise -1 is returned and @error is set.
     */
    step(revisionGuard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]

    // Class property signals of EDataBook-1.2.EDataBook.DataBookCursor

    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * An opaque handle for an addressbook cursor
 * @class 
 */
export class DataBookCursor extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursor

    static name: string

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

    readonly bookCache: BookCache
    readonly cursor: any
    __gtype__: number

    // Class property signals of EDataBook-1.2.EDataBook.DataBookCursorCache

    connect(sigName: "notify::book-cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::book-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::book-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::book-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::book-cache", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::total", callback: (...args: any[]) => void): number
    on(sigName: "notify::total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of EDataBook-1.2.EDataBook.DataBookCursorCache

    constructor(config?: DataBookCursorCache.ConstructorProperties) 
    /**
     * Creates an #EDataBookCursor and implements all of the cursor methods
     * using the delegate `book_cache` object.
     * 
     * This is suitable cursor type for any backend which stores its contacts
     * using the #EBookCache object. The #EBookMetaBackend does that transparently.
     * @constructor 
     * @param bookBackend the #EBookBackend creating this cursor
     * @param bookCache the #EBookCache object to base this cursor on
     * @param sortFields an array of #EContactFields as sort keys in order of priority
     * @param sortTypes an array of #EBookCursorSortTypes, one for each field in `sort_fields`
     * @returns A newly created #EDataBookCursor, or %NULL if cursor creation failed.
     */
    constructor(bookBackend: BookBackend, bookCache: BookCache, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]) 
    /**
     * Creates an #EDataBookCursor and implements all of the cursor methods
     * using the delegate `book_cache` object.
     * 
     * This is suitable cursor type for any backend which stores its contacts
     * using the #EBookCache object. The #EBookMetaBackend does that transparently.
     * @constructor 
     * @param bookBackend the #EBookBackend creating this cursor
     * @param bookCache the #EBookCache object to base this cursor on
     * @param sortFields an array of #EContactFields as sort keys in order of priority
     * @param sortTypes an array of #EBookCursorSortTypes, one for each field in `sort_fields`
     * @returns A newly created #EDataBookCursor, or %NULL if cursor creation failed.
     */
    static new(bookBackend: BookBackend, bookCache: BookCache, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]): DataBookCursorCache
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
    readonly revisionKey: string | null
    __gtype__: number

    // Class property signals of EDataBook-1.2.EDataBook.DataBookCursorSqlite

    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::ebsql", callback: (...args: any[]) => void): number
    on(sigName: "notify::ebsql", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ebsql", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ebsql", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ebsql", ...args: any[]): void
    connect(sigName: "notify::revision-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::revision-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::revision-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::revision-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::revision-key", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::total", callback: (...args: any[]) => void): number
    on(sigName: "notify::total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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
     * @param revisionKey The key name to consult for the current overall contacts database revision
     * @param sortFields an array of #EContactFields as sort keys in order of priority
     * @param sortTypes an array of #EBookCursorSortTypes, one for each field in `sort_fields`
     * @returns A newly created #EDataBookCursor, or %NULL if cursor creation failed.
     */
    constructor(backend: BookBackend, ebsql: BookSqlite, revisionKey: string, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]) 
    /**
     * Creates an #EDataBookCursor and implements all of the cursor methods
     * using the delegate `ebsql` object.
     * 
     * This is a suitable cursor type for any backend which stores its contacts
     * using the #EBookSqlite object.
     * @constructor 
     * @param backend the #EBookBackend creating this cursor
     * @param ebsql the #EBookSqlite object to base this cursor on
     * @param revisionKey The key name to consult for the current overall contacts database revision
     * @param sortFields an array of #EContactFields as sort keys in order of priority
     * @param sortTypes an array of #EBookCursorSortTypes, one for each field in `sort_fields`
     * @returns A newly created #EDataBookCursor, or %NULL if cursor creation failed.
     */
    static new(backend: BookBackend, ebsql: BookSqlite, revisionKey: string, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]): DataBookCursorSqlite
    _init(config?: DataBookCursorSqlite.ConstructorProperties): void
}

export module DataBookDirect {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DataBookDirect {

    // Own properties of EDataBook-1.2.EDataBook.DataBookDirect

    __gtype__: number

    // Own fields of EDataBook-1.2.EDataBook.DataBookDirect

    parent: GObject.Object
    priv: DataBookDirectPrivate

    // Owm methods of EDataBook-1.2.EDataBook.DataBookDirect

    /**
     * Places `direct` on the `connection` at `object_path`
     * @param connection The #GDBusConnection to register with
     * @param objectPath The object path to place the direct access configuration data
     */
    registerGdbusObject(connection: Gio.DBusConnection, objectPath: string): boolean

    // Class property signals of EDataBook-1.2.EDataBook.DataBookDirect

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

export class DataBookDirect extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.DataBookDirect

    static name: string

    // Constructors of EDataBook-1.2.EDataBook.DataBookDirect

    constructor(config?: DataBookDirect.ConstructorProperties) 
    /**
     * Creates an #EDataBookDirect to report configuration data needed for direct
     * read access.
     * 
     * This is returned by e_book_backend_get_direct_book() for backends
     * which support direct read access mode.
     * @constructor 
     * @param backendPath Full path to the installed backend shared library
     * @param backendFactoryName Type name of the EBookBackendFactory implemented by the library
     * @param config A backend specific configuration string
     * @returns A newly created #EDataBookDirect
     */
    constructor(backendPath: string, backendFactoryName: string, config: string) 
    /**
     * Creates an #EDataBookDirect to report configuration data needed for direct
     * read access.
     * 
     * This is returned by e_book_backend_get_direct_book() for backends
     * which support direct read access mode.
     * @constructor 
     * @param backendPath Full path to the installed backend shared library
     * @param backendFactoryName Type name of the EBookBackendFactory implemented by the library
     * @param config A backend specific configuration string
     * @returns A newly created #EDataBookDirect
     */
    static new(backendPath: string, backendFactoryName: string, config: string): DataBookDirect
    _init(config?: DataBookDirect.ConstructorProperties): void
}

export module DataBookFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.Extensible.ConstructorProperties, Gio.Initable.ConstructorProperties, EBackend.DataFactory.ConstructorProperties {
    }

}

export interface DataBookFactory extends EDataServer.Extensible, Gio.Initable {

    // Own properties of EDataBook-1.2.EDataBook.DataBookFactory

    __gtype__: number

    // Own fields of EDataBook-1.2.EDataBook.DataBookFactory

    parent: EBackend.DataFactory
    priv: DataBookFactoryPrivate

    // Class property signals of EDataBook-1.2.EDataBook.DataBookFactory

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::backend-per-process", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-per-process", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-per-process", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-per-process", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-per-process", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::reload-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::reload-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reload-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reload-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reload-supported", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataBookFactory extends EBackend.DataFactory {

    // Own properties of EDataBook-1.2.EDataBook.DataBookFactory

    static name: string

    // Constructors of EDataBook-1.2.EDataBook.DataBookFactory

    constructor(config?: DataBookFactory.ConstructorProperties) 
    constructor(backendPerProcess: number, cancellable: Gio.Cancellable | null) 
    static new(backendPerProcess: number, cancellable: Gio.Cancellable | null): DataBookFactory
    _init(config?: DataBookFactory.ConstructorProperties): void
}

export module DataBookView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `objects-added`
     */
    export interface ObjectsAddedSignalCallback {
        (vcards: string[]): void
    }

    /**
     * Signal callback interface for `objects-modified`
     */
    export interface ObjectsModifiedSignalCallback {
        (vcards: string[]): void
    }

    /**
     * Signal callback interface for `objects-removed`
     */
    export interface ObjectsRemovedSignalCallback {
        (uids: string[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataBook-1.2.EDataBook.DataBookView

        backend?: BookBackend | null
        connection?: Gio.DBusConnection | null
        indices?: any | null
        n_total?: number | null
        object_path?: string | null
        sexp?: BookBackendSExp | null
    }

}

export interface DataBookView extends Gio.Initable {

    // Own properties of EDataBook-1.2.EDataBook.DataBookView

    readonly backend: BookBackend
    readonly connection: Gio.DBusConnection
    indices: any
    nTotal: number
    readonly objectPath: string | null
    readonly sexp: BookBackendSExp
    __gtype__: number

    // Own fields of EDataBook-1.2.EDataBook.DataBookView

    parent: GObject.Object
    priv: DataBookViewPrivate

    // Owm methods of EDataBook-1.2.EDataBook.DataBookView

    /**
     * Tells the `self,` that it contains a contact with UID `uid`. This is useful
     * for "manual query" view, which do not do initial notifications. It helps
     * to not send "objects-added" signal for contacts, which are already part
     * of the `self,` because for them the "objects-modified" should be emitted
     * instead.
     * @param uid a contact UID
     */
    claimContactUid(uid: string): void
    /**
     * Reads `range_length` contacts from index `range_start`.
     * When there are asked more than e_data_book_view_get_n_total()
     * contacts only those up to the total number of contacts are read.
     * 
     * Free the returned #GPtrArray with g_ptr_array_unref(),
     * when no longer needed.
     * 
     * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
     * @param rangeStart 0-based range start to retrieve the contacts for
     * @param rangeLength how many contacts to retrieve
     * @returns array of the read contacts,    or %NULL, when not applicable or when the @range_start it out of bounds.
     */
    dupContacts(rangeStart: number, rangeLength: number): EBookContacts.Contact[] | null
    /**
     * Returns a list of #EBookIndices holding indices of the contacts
     * in the view. These are received from the first sort field set by
     * e_data_book_view_set_sort_fields(). The last item of the returned
     * array is the one with chr member being %NULL.
     * 
     * Free the returned array with e_book_indices_free(), when no longer needed.
     * 
     * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
     * @returns list of indices for the view,    or %NULL when cannot determine
     */
    dupIndices(): EBookContacts.BookIndices | null
    /**
     * Returns the #GDBusConnection on which the AddressBookView D-Bus
     * interface is exported.
     * @returns the #GDBusConnection
     */
    getConnection(): Gio.DBusConnection
    getFieldsOfInterest(): GLib.HashTable | null
    /**
     * Gets the #EBookClientViewFlags that control the behaviour of `view`.
     * @returns the flags for @view.
     */
    getFlags(): EBookContacts.BookClientViewFlags
    /**
     * Returns whether the `view` should do initial notifications
     * even when the flags do not contain %E_BOOK_CLIENT_VIEW_FLAGS_NOTIFY_INITIAL.
     * The default is %FALSE.
     * @returns value set by e_data_book_view_set_force_initial_notifications()
     */
    getForceInitialNotifications(): boolean
    /**
     * Returns an identifier of the `self`. It does not change
     * for the whole life time of the `self`.
     * 
     * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
     * @returns an identifier of the view
     */
    getId(): number
    /**
     * Returns how many contacts are available in the view.
     * 
     * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
     * @returns how many contacts are available in the view
     */
    getNTotal(): number
    /**
     * Returns the object path at which the AddressBookView D-Bus interface
     * is exported.
     * @returns the object path
     */
    getObjectPath(): string
    /**
     * Gets the s-expression used for matching contacts to `view`.
     * @returns The #EBookBackendSExp used.
     */
    getSexp(): BookBackendSExp
    isCompleted(): boolean
    /**
     * Notifies listeners that all pending updates on `view`
     * have been sent. The listener's information should now be
     * in sync with the backend's.
     * @param error the error of the query, if any
     */
    notifyComplete(error: GLib.Error): void
    /**
     * Notifies the client side that the content of the `self` changed,
     * which it should use to refresh the view data.
     * 
     * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
     */
    notifyContentChanged(): void
    /**
     * Provides listeners with a human-readable text describing the
     * current backend operation. This can be used for progress
     * reporting.
     * @param percent percent done; use -1 when not available
     * @param message a text message
     */
    notifyProgress(percent: number, message: string): void
    /**
     * Notify listeners that a contact specified by `id`
     * was removed from `view`.
     * @param id a unique contact ID
     */
    notifyRemove(id: string): void
    /**
     * Notify listeners that `contact` has changed. This can
     * trigger an add, change or removal event depending on
     * whether the change causes the contact to start matching,
     * no longer match, or stay matching the query specified
     * by `view`.
     * @param contact an #EContact
     */
    notifyUpdate(contact: EBookContacts.Contact): void
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
    notifyUpdatePrefilteredVcard(id: string, vcard: string): void
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
    notifyUpdateVcard(id: string, vcard: string): void
    /**
     * Refs the backend that `view` is querying. Unref the returned backend,
     * if not %NULL, with g_object_unref(), when no longer needed.
     * @returns The associated #EBookBackend.
     */
    refBackend(): BookBackend | null
    /**
     * Sets whether the `view` should do initial notifications
     * even when the flags do not contain %E_BOOK_CLIENT_VIEW_FLAGS_NOTIFY_INITIAL.
     * @param value value to set
     */
    setForceInitialNotifications(value: boolean): void
    /**
     * Sets indices used by the `self`. The array is terminated by an item
     * with chr member being %NULL.
     * See e_data_book_view_dup_indices() for more information.
     * 
     * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
     * @param indices an array of #EBookIndices
     */
    setIndices(indices: EBookContacts.BookIndices): void
    /**
     * Sets how many contacts are available in the view.
     * 
     * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
     * @param nTotal a value to set
     */
    setNTotal(nTotal: number): void
    /**
     * Sets `fields` to sort the view by. The default is to sort by the file-as
     * field. The contacts are always sorted in ascending order. Not every field
     * can be used for sorting, the default available fields are %E_CONTACT_FILE_AS,
     * %E_CONTACT_GIVEN_NAME and %E_CONTACT_FAMILY_NAME.
     * 
     * The first sort field is used to populate indices, as returned
     * by e_data_book_view_dup_indices().
     * 
     * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
     * @param fields an array of #EBookClientViewSortFields fields to sort by
     */
    setSortFields(fields: EBookContacts.BookClientViewSortFields): void

    // Own signals of EDataBook-1.2.EDataBook.DataBookView

    connect(sigName: "objects-added", callback: DataBookView.ObjectsAddedSignalCallback): number
    on(sigName: "objects-added", callback: DataBookView.ObjectsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-added", callback: DataBookView.ObjectsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-added", callback: DataBookView.ObjectsAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "objects-added", ...args: any[]): void
    connect(sigName: "objects-modified", callback: DataBookView.ObjectsModifiedSignalCallback): number
    on(sigName: "objects-modified", callback: DataBookView.ObjectsModifiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-modified", callback: DataBookView.ObjectsModifiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-modified", callback: DataBookView.ObjectsModifiedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "objects-modified", ...args: any[]): void
    connect(sigName: "objects-removed", callback: DataBookView.ObjectsRemovedSignalCallback): number
    on(sigName: "objects-removed", callback: DataBookView.ObjectsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-removed", callback: DataBookView.ObjectsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-removed", callback: DataBookView.ObjectsRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "objects-removed", ...args: any[]): void

    // Class property signals of EDataBook-1.2.EDataBook.DataBookView

    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::indices", callback: (...args: any[]) => void): number
    on(sigName: "notify::indices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::indices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::indices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::indices", ...args: any[]): void
    connect(sigName: "notify::n-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-total", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::sexp", callback: (...args: any[]) => void): number
    on(sigName: "notify::sexp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sexp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sexp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sexp", ...args: any[]): void
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

export class DataBookView extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.DataBookView

    static name: string

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
     * @param objectPath an object path for the view
     * @returns an #EDataBookView or %NULL on error
     */
    constructor(backend: BookBackend, sexp: BookBackendSExp, connection: Gio.DBusConnection, objectPath: string) 
    /**
     * Creates a new #EDataBookView and exports its D-Bus interface on
     * `connection` at `object_path`.  If an error occurs while exporting,
     * the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #EBookBackend
     * @param sexp an #EBookBackendSExp
     * @param connection a #GDBusConnection
     * @param objectPath an object path for the view
     * @returns an #EDataBookView or %NULL on error
     */
    static new(backend: BookBackend, sexp: BookBackendSExp, connection: Gio.DBusConnection, objectPath: string): DataBookView
    _init(config?: DataBookView.ConstructorProperties): void
}

export module DataBookViewWatcherCache {

    // Constructor properties interface

    export interface ConstructorProperties extends EBookContacts.BookIndicesUpdater.ConstructorProperties {
    }

}

export interface DataBookViewWatcherCache {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewWatcherCache

    __gtype__: number

    // Owm methods of EDataBook-1.2.EDataBook.DataBookViewWatcherCache

    /**
     * Retrieves contacts in the given range. Returns %NULL when the `range_start`
     * is out of bounds. The function can return less than `range_length` contacts.
     * 
     * The returned array should be freed with g_ptr_array_unref(),
     * when no longer needed.
     * @param rangeStart range start, 0-based
     * @param rangeLength how many contacts to retrieve
     * @returns an array of #EContact-s,    or %NULL, when @range_start is out of bounds.
     */
    dupContacts(rangeStart: number, rangeLength: number): EBookContacts.Contact[] | null
    /**
     * Sets `sort_fields` as fields to sort the contacts by. If %NULL,
     * sorts by file-as field. The function assumes ownership of the `sort_fields`.
     * @param sortFields an #EBookClientViewSortFields, or %NULL
     */
    takeSortFields(sortFields: EBookContacts.BookClientViewSortFields | null): void

    // Class property signals of EDataBook-1.2.EDataBook.DataBookViewWatcherCache

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
 * A structure used to handle "manual query" views for #EBookBackend
 * descendants which use #EBookCache to store the contacts.
 * @class 
 */
export class DataBookViewWatcherCache extends EBookContacts.BookIndicesUpdater {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewWatcherCache

    static name: string

    // Constructors of EDataBook-1.2.EDataBook.DataBookViewWatcherCache

    constructor(config?: DataBookViewWatcherCache.ConstructorProperties) 
    /**
     * Creates a new #EDataBookViewWatcherCache, which will watch the `view`
     * and will provide the information about indices and total contacts
     * to the `backend,` taking the data from the `cache`.
     * @constructor 
     * @param backend an #EBookBackend
     * @param cache an #EBookCache
     * @param view an #EDataBookView
     * @returns a new #EDataBookViewWatcherCache
     */
    constructor(backend: BookBackend, cache: BookCache, view: DataBookView) 
    /**
     * Creates a new #EDataBookViewWatcherCache, which will watch the `view`
     * and will provide the information about indices and total contacts
     * to the `backend,` taking the data from the `cache`.
     * @constructor 
     * @param backend an #EBookBackend
     * @param cache an #EBookCache
     * @param view an #EDataBookView
     * @returns a new #EDataBookViewWatcherCache
     */
    static new(backend: BookBackend, cache: BookCache, view: DataBookView): DataBookViewWatcherCache
    _init(config?: DataBookViewWatcherCache.ConstructorProperties): void
}

export module DataBookViewWatcherMemory {

    // Constructor properties interface

    export interface ConstructorProperties extends EBookContacts.BookIndicesUpdater.ConstructorProperties {
    }

}

export interface DataBookViewWatcherMemory {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewWatcherMemory

    __gtype__: number

    // Owm methods of EDataBook-1.2.EDataBook.DataBookViewWatcherMemory

    /**
     * Retrieves contacts in the given range. Returns %NULL when the `range_start`
     * is out of bounds. The function can return less than `range_length` contacts.
     * 
     * The returned array should be freed with g_ptr_array_unref(),
     * when no longer needed.
     * @param rangeStart range start, 0-based
     * @param rangeLength how many contacts to retrieve
     * @returns an array of #EContact-s,    or %NULL, when @range_start is out of bounds.
     */
    dupContacts(rangeStart: number, rangeLength: number): EBookContacts.Contact[] | null
    /**
     * Sets a locale to use for sorting. When %NULL, or when cannot
     * use the provided locale, tries to use the system locale.
     * @param locale a locale to set, or %NULL
     */
    setLocale(locale: string | null): void
    /**
     * Sets `sort_fields` as fields to sort the contacts by. If %NULL,
     * sorts by file-as field. The function assumes ownership of the `sort_fields`.
     * @param sortFields an #EBookClientViewSortFields, or %NULL
     */
    takeSortFields(sortFields: EBookContacts.BookClientViewSortFields | null): void

    // Class property signals of EDataBook-1.2.EDataBook.DataBookViewWatcherMemory

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
 * A structure used as a default implementation to
 * handle "manual query" views by the #EBookBackend.
 * @class 
 */
export class DataBookViewWatcherMemory extends EBookContacts.BookIndicesUpdater {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewWatcherMemory

    static name: string

    // Constructors of EDataBook-1.2.EDataBook.DataBookViewWatcherMemory

    constructor(config?: DataBookViewWatcherMemory.ConstructorProperties) 
    /**
     * Creates a new #EDataBookViewWatcherMemory, which will watch the `view`
     * and will provide the information about indices and total contacts
     * to the `backend`. The locale is taken from the `backend` during
     * the creation process too.
     * @constructor 
     * @param backend an #EBookBackend
     * @param view an #EDataBookView
     * @returns a new #EDataBookViewWatcherMemory
     */
    constructor(backend: BookBackend, view: DataBookView) 
    /**
     * Creates a new #EDataBookViewWatcherMemory, which will watch the `view`
     * and will provide the information about indices and total contacts
     * to the `backend`. The locale is taken from the `backend` during
     * the creation process too.
     * @constructor 
     * @param backend an #EBookBackend
     * @param view an #EDataBookView
     * @returns a new #EDataBookViewWatcherMemory
     */
    static new(backend: BookBackend, view: DataBookView): DataBookViewWatcherMemory
    _init(config?: DataBookViewWatcherMemory.ConstructorProperties): void
}

export module DataBookViewWatcherSqlite {

    // Constructor properties interface

    export interface ConstructorProperties extends EBookContacts.BookIndicesUpdater.ConstructorProperties {
    }

}

export interface DataBookViewWatcherSqlite {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewWatcherSqlite

    __gtype__: number

    // Owm methods of EDataBook-1.2.EDataBook.DataBookViewWatcherSqlite

    /**
     * Retrieves contacts in the given range. Returns %NULL when the `range_start`
     * is out of bounds. The function can return less than `range_length` contacts.
     * 
     * The returned array should be freed with g_ptr_array_unref(),
     * when no longer needed.
     * @param rangeStart range start, 0-based
     * @param rangeLength how many contacts to retrieve
     * @returns an array of #EContact-s,    or %NULL, when @range_start is out of bounds.
     */
    dupContacts(rangeStart: number, rangeLength: number): EBookContacts.Contact[] | null
    /**
     * Sets `sort_fields` as fields to sort the contacts by. If %NULL,
     * sorts by file-as field. The function assumes ownership of the `sort_fields`.
     * @param sortFields an #EBookClientViewSortFields, or %NULL
     */
    takeSortFields(sortFields: EBookContacts.BookClientViewSortFields | null): void

    // Class property signals of EDataBook-1.2.EDataBook.DataBookViewWatcherSqlite

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
 * A structure used to handle "manual query" views for #EBookBackend
 * descendants which use #EBookSqlite to store the contacts.
 * @class 
 */
export class DataBookViewWatcherSqlite extends EBookContacts.BookIndicesUpdater {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewWatcherSqlite

    static name: string

    // Constructors of EDataBook-1.2.EDataBook.DataBookViewWatcherSqlite

    constructor(config?: DataBookViewWatcherSqlite.ConstructorProperties) 
    /**
     * Creates a new #EDataBookViewWatcherSqlite, which will watch the `view`
     * and will provide the information about indices and total contacts
     * to the `backend,` taking the data from the `ebsql`.
     * @constructor 
     * @param backend an #EBookBackend
     * @param ebsql an #EBookSqlite
     * @param view an #EDataBookView
     * @returns a new #EDataBookViewWatcherSqlite
     */
    constructor(backend: BookBackend, ebsql: BookSqlite, view: DataBookView) 
    /**
     * Creates a new #EDataBookViewWatcherSqlite, which will watch the `view`
     * and will provide the information about indices and total contacts
     * to the `backend,` taking the data from the `ebsql`.
     * @constructor 
     * @param backend an #EBookBackend
     * @param ebsql an #EBookSqlite
     * @param view an #EDataBookView
     * @returns a new #EDataBookViewWatcherSqlite
     */
    static new(backend: BookBackend, ebsql: BookSqlite, view: DataBookView): DataBookViewWatcherSqlite
    _init(config?: DataBookViewWatcherSqlite.ConstructorProperties): void
}

export module SubprocessBookFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, EBackend.SubprocessFactory.ConstructorProperties {
    }

}

export interface SubprocessBookFactory extends Gio.Initable {

    // Own properties of EDataBook-1.2.EDataBook.SubprocessBookFactory

    __gtype__: number

    // Own fields of EDataBook-1.2.EDataBook.SubprocessBookFactory

    parent: EBackend.SubprocessFactory
    priv: SubprocessBookFactoryPrivate

    // Class property signals of EDataBook-1.2.EDataBook.SubprocessBookFactory

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class SubprocessBookFactory extends EBackend.SubprocessFactory {

    // Own properties of EDataBook-1.2.EDataBook.SubprocessBookFactory

    static name: string

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
    __gtype__: number

    // Owm methods of EDataBook-1.2.EDataBook.SystemLocaleWatcher

    /**
     * Returns the current locale, as detected by the `watcher`. The string
     * is duplicated for thread safety. It can be %NULL, when the locale
     * was not detected yet.
     * 
     * Free it with g_free(), when no longer needed.
     * @returns the system locale, as detected by the @watcher
     */
    dupLocale(): string | null

    // Class property signals of EDataBook-1.2.EDataBook.SystemLocaleWatcher

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
export class SystemLocaleWatcher extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.SystemLocaleWatcher

    static name: string

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
    useSerialDispatchQueue: boolean
    implGetBackendProperty: (backend: BookBackend, propName: string) => string | null
    implOpen: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null) => void
    implRefresh: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null) => void
    implCreateContacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number) => void
    implModifyContacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number) => void
    implRemoveContacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number) => void
    implGetContact: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string) => void
    implGetContactList: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string) => void
    implGetContactListUids: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string) => void
    implStartView: (backend: BookBackend, view: DataBookView) => void
    implStopView: (backend: BookBackend, view: DataBookView) => void
    implNotifyUpdate: (backend: BookBackend, contact: EBookContacts.Contact) => void
    implConfigureDirect: (backend: BookBackend, config: string) => void
    implSetLocale: (backend: BookBackend, locale: string, cancellable: Gio.Cancellable | null) => boolean
    implDupLocale: (backend: BookBackend) => string | null
    implDeleteCursor: (backend: BookBackend, cursor: DataBookCursor) => boolean
    closed: (backend: BookBackend, sender: string) => void
    shutdown: (backend: BookBackend) => void
    implContainsEmail: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, emailAddress: string) => void
    implSetViewSortFields: (backend: BookBackend, viewId: number, fields: EBookContacts.BookClientViewSortFields) => void
    implGetViewNTotal: (backend: BookBackend, viewId: number) => number
    implDupViewIndices: (backend: BookBackend, viewId: number) => EBookContacts.BookIndices
    reservedPadding: any[]
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
    factoryName: string
    /**
     * The #GType to use to build #EBookBackends for this factory
     * @field 
     */
    backendType: GObject.GType
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

    openSync: (backend: BookBackendSync, cancellable: Gio.Cancellable | null) => boolean
    refreshSync: (backend: BookBackendSync, cancellable: Gio.Cancellable | null) => boolean
    containsEmailSync: (backend: BookBackendSync, emailAddress: string, cancellable: Gio.Cancellable | null) => boolean
    reservedPadding: any[]
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

    e164Changed: (bookCache: BookCache, contact: EBookContacts.Contact, isReplace: boolean) => void
    dupContactRevision: (bookCache: BookCache, contact: EBookContacts.Contact) => string | null
    categoriesChanged: (bookCache: BookCache, categories: string) => void
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
     * @param bookCache An #EBookCache
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts
     * @param sortFields An array of #EContactField(s) as sort keys in order of priority
     * @param sortTypes An array of #EBookCursorSortTypes, one for each field in `sort_fields`
     * @returns A newly created #EBookCacheCursor
     */
    constructor(bookCache: BookCache, sexp: string | null, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]) 
    /**
     * Creates a new #EBookCacheCursor.
     * 
     * The cursor should be freed with e_book_cache_cursor_free() when
     * no longer needed.
     * @constructor 
     * @param bookCache An #EBookCache
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts
     * @param sortFields An array of #EContactField(s) as sort keys in order of priority
     * @param sortTypes An array of #EBookCursorSortTypes, one for each field in `sort_fields`
     * @returns A newly created #EBookCacheCursor
     */
    static new(bookCache: BookCache, sexp: string | null, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]): BookCacheCursor
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
    constructor(uid: string, vcard: string, extra: string | null) 
    /**
     * Creates a new EBookCacheSearchData prefilled with the given values.
     * @constructor 
     * @param uid a contact UID; cannot be %NULL
     * @param vcard the contact as a vCard string; cannot be %NULL
     * @param extra any extra data stored with the contact, or %NULL
     * @returns A new #EBookCacheSearchData. Free it with    e_book_cache_search_data_free() when no longer needed.
     */
    static new(uid: string, vcard: string, extra: string | null): BookCacheSearchData
    /**
     * Frees the `data` structure, previously allocated with e_book_cache_search_data_new()
     * or e_book_cache_search_data_copy().
     * @param data an #EBookCacheSearchData
     */
    static free(data: any | null): void
}

export interface BookMetaBackendClass {

    // Own fields of EDataBook-1.2.EDataBook.BookMetaBackendClass

    connectSync: (metaBackend: BookMetaBackend, credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    disconnectSync: (metaBackend: BookMetaBackend, cancellable: Gio.Cancellable | null) => boolean
    getChangesSync: (metaBackend: BookMetaBackend, lastSyncTag: string | null, isRepeat: boolean, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string | null, /* outRepeat */ boolean, /* outCreatedObjects */ BookMetaBackendInfo[], /* outModifiedObjects */ BookMetaBackendInfo[], /* outRemovedObjects */ BookMetaBackendInfo[] ]
    listExistingSync: (metaBackend: BookMetaBackend, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string | null, /* outExistingObjects */ BookMetaBackendInfo[] ]
    loadContactSync: (metaBackend: BookMetaBackend, uid: string, extra: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact, /* outExtra */ string | null ]
    saveContactSync: (metaBackend: BookMetaBackend, overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewUid */ string | null, /* outNewExtra */ string | null ]
    removeContactSync: (metaBackend: BookMetaBackend, conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable: Gio.Cancellable | null) => boolean
    searchSync: (metaBackend: BookMetaBackend, expr: string | null, metaContact: boolean, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    searchUidsSync: (metaBackend: BookMetaBackend, expr: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outUids */ string[] ]
    requiresReconnect: (metaBackend: BookMetaBackend) => boolean
    sourceChanged: (metaBackend: BookMetaBackend) => void
    getSslErrorDetails: (metaBackend: BookMetaBackend) => [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
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
    constructor(uid: string, revision: string | null, object: string | null, extra: string | null) 
    /**
     * Creates a new #EBookMetaBackendInfo prefilled with the given values.
     * @constructor 
     * @param uid a contact UID; cannot be %NULL
     * @param revision the contact revision; can be %NULL
     * @param object the contact object as a vCard string; can be %NULL
     * @param extra extra backend-specific data; can be %NULL
     * @returns A new #EBookMetaBackendInfo. Free it with    e_book_meta_backend_info_free(), when no longer needed.
     */
    static new(uid: string, revision: string | null, object: string | null, extra: string | null): BookMetaBackendInfo
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

    beforeInsertContact: (ebsql: BookSqlite, db: any | null, contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable: Gio.Cancellable | null) => boolean
    beforeRemoveContact: (ebsql: BookSqlite, db: any | null, contactUid: string, cancellable: Gio.Cancellable | null) => boolean
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
    setSexp: DataBookCursorSetSexpFunc
    /**
     * The #EDataBookCursorStepFunc delegate to navigate the cursor
     * @field 
     */
    step: DataBookCursorStepFunc
    /**
     * The #EDataBookCursorSetAlphabetIndexFunc delegate to set the alphabetic position
     * @field 
     */
    setAlphabeticIndex: DataBookCursorSetAlphabetIndexFunc
    /**
     * The #EDataBookCursorGetPositionFunc delegate to calculate the current total and position values
     * @field 
     */
    getPosition: DataBookCursorGetPositionFunc
    /**
     * The #EDataBookCursorCompareContactFunc delegate to compare an #EContact with the cursor position
     * @field 
     */
    compareContact: DataBookCursorCompareContactFunc
    /**
     * The #EDataBookCursorLoadLocaleFunc delegate used to reload the locale setting
     * @field 
     */
    loadLocale: DataBookCursorLoadLocaleFunc
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

    parentClass: EBackend.DataFactoryClass
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

export interface DataBookViewWatcherCacheClass {
}

export abstract class DataBookViewWatcherCacheClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewWatcherCacheClass

    static name: string
}

export interface DataBookViewWatcherCachePrivate {
}

export class DataBookViewWatcherCachePrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewWatcherCachePrivate

    static name: string
}

export interface DataBookViewWatcherMemoryClass {
}

export abstract class DataBookViewWatcherMemoryClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewWatcherMemoryClass

    static name: string
}

export interface DataBookViewWatcherMemoryPrivate {
}

export class DataBookViewWatcherMemoryPrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewWatcherMemoryPrivate

    static name: string
}

export interface DataBookViewWatcherSqliteClass {
}

export abstract class DataBookViewWatcherSqliteClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewWatcherSqliteClass

    static name: string
}

export interface DataBookViewWatcherSqlitePrivate {
}

export class DataBookViewWatcherSqlitePrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewWatcherSqlitePrivate

    static name: string
}

export interface SubprocessBookFactoryClass {

    // Own fields of EDataBook-1.2.EDataBook.SubprocessBookFactoryClass

    parentClass: EBackend.SubprocessFactoryClass
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

    parentClass: GObject.ObjectClass
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

// END