// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EDataBook-1.2
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
import type EBookContacts from './EBookContacts-1.2';
import type EBackend from './EBackend-1.2';

export namespace EDataBook {

/**
 * Specifies the start position to in the list of traversed contacts
 * in calls to e_book_cache_cursor_step().
 * 
 * When an #EBookCacheCursor is created, the current position implied by %E_BOOK_CACHE_CURSOR_ORIGIN_CURRENT
 * is the same as %E_BOOK_CACHE_CURSOR_ORIGIN_BEGIN.
 */
enum BookCacheCursorOrigin {
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
enum BookSqliteError {
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
enum bSqlChangeType {
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
enum bSqlCursorOrigin {
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
enum bSqlLockType {
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
enum bSqlUnlockAction {
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
enum BookCacheCursorStepFlags {
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
enum bSqlCursorStepFlags {
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
const BOOK_SQL_IS_POPULATED_KEY: string
/**
 * This key can be used with e_book_sqlite_get_key_value().
 * 
 * In the case of a migration from an older SQLite, any value which
 * was previously stored with e_book_backend_sqlitedb_set_sync_data()
 * can be retrieved with this key.
 */
const BOOK_SQL_SYNC_DATA_KEY: string
/**
 * This environment variable configures where the address book
 * factory loads its backend modules from.
 */
const EDS_ADDRESS_BOOK_MODULES: string
/**
 * This environment variable configures where the address book
 * factory subprocess is located in.
 */
const EDS_SUBPROCESS_BOOK_PATH: string
const XIMIAN_VCARD: string
/**
 * Frees the `data` structure, previously allocated with e_book_cache_search_data_new()
 * or e_book_cache_search_data_copy().
 * @param data an #EBookCacheSearchData
 */
function bookCacheSearchDataFree(data: object | null): void
/**
 * Frees the `ptr` structure, previously allocated with e_book_meta_backend_info_new()
 * or e_book_meta_backend_info_copy().
 * @param ptr an #EBookMetaBackendInfo
 */
function bookMetaBackendInfoFree(ptr: object | null): void
/**
 * Fetches the extra data previously set for `uid,` either with
 * e_book_sqlite_set_contact_extra() or when adding contacts,
 * without locking internal mutex.
 * @param ebsql An #EBookSqlite
 * @param uid The uid of the contact to fetch the extra data for
 */
function ebsqlGetContactExtraUnlocked(ebsql: BookSqlite, uid: string): [ /* returnType */ boolean, /* retExtra */ string ]
/**
 * Fetch the #EContact specified by `uid` in `ebsql` without locking internal mutex.
 * 
 * If `meta_contact` is specified, then a shallow #EContact will be created
 * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
 * @param ebsql An #EBookSqlite
 * @param uid The uid of the contact to fetch
 * @param metaContact Whether an entire contact is desired, or only the metadata
 */
function ebsqlGetContactUnlocked(ebsql: BookSqlite, uid: string, metaContact: boolean): [ /* returnType */ boolean, /* contact */ EBookContacts.Contact ]
/**
 * Fetch a vcard string for `uid` in `ebsql` without locking internal mutex.
 * 
 * If `meta_contact` is specified, then a shallow vcard representation will be
 * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
 * @param ebsql An #EBookSqlite
 * @param uid The uid of the contact to fetch
 * @param metaContact Whether an entire contact is desired, or only the metadata
 */
function ebsqlGetVcardUnlocked(ebsql: BookSqlite, uid: string, metaContact: boolean): [ /* returnType */ boolean, /* retVcard */ string ]
/**
 * A callback prototype being called in a dedicated thread, scheduled
 * by e_book_backend_schedule_custom_operation().
 * @callback 
 * @param bookBackend an #EBookBackend
 * @param cancellable an optional #GCancellable, as provided to e_book_backend_schedule_custom_operation()
 */
interface BookBackendCustomOpFunc {
    (bookBackend: BookBackend, cancellable: Gio.Cancellable | null): void
}
/**
 * Callback function used by e_book_backend_foreach_view().
 * @callback 
 * @param backend an #EBookBackend
 * @param view an #EDataBookView
 */
interface BookBackendForeachViewFunc {
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
 */
interface BookCacheSearchFunc {
    (bookCache: BookCache, uid: string, revision: string, object: string, extra: string, customFlags: number, offlineState: EBackend.OfflineState): boolean
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
 */
interface DataBookCursorCompareContactFunc {
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
 */
interface DataBookCursorGetPositionFunc {
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
 */
interface DataBookCursorLoadLocaleFunc {
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
 */
interface DataBookCursorSetAlphabetIndexFunc {
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
 */
interface DataBookCursorSetSexpFunc {
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
 */
interface DataBookCursorStepFunc {
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
interface bSqlChangeCallback {
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
 */
interface bSqlVCardCallback {
    (uid: string, extra: string): string
}
interface BookBackend_ConstructProps extends EBackend.Backend_ConstructProps {

    // Own constructor properties of EDataBook-1.2.EDataBook.BookBackend

    cacheDir?: string | null
    registry?: EDataServer.SourceRegistry | null
    writable?: boolean | null
}

/**
 * Signal callback interface for `closed`
 */
interface BookBackend_ClosedSignalCallback {
    (sender: string): void
}

/**
 * Signal callback interface for `shutdown`
 */
interface BookBackend_ShutdownSignalCallback {
    (): void
}

interface BookBackend {

    // Own properties of EDataBook-1.2.EDataBook.BookBackend

    cacheDir: string
    readonly proxyResolver: Gio.ProxyResolver
    readonly registry: EDataServer.SourceRegistry
    writable: boolean

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
    containsEmail(emailAddress: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_contains_email().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
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
    createContacts(vcards: string, opflags?: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    createCursor(sortFields: EBookContacts.ContactField, sortTypes: EBookContacts.BookCursorSortType, nFields: number): DataBookCursor
    /**
     * Requests `backend` to release and destroy `cursor,` this
     * will trigger an %E_CLIENT_ERROR_INVALID_ARG error if `cursor`
     * is not owned by `backend`.
     * @param cursor the #EDataBookCursor to destroy
     */
    deleteCursor(cursor: DataBookCursor): boolean
    /**
     * Thread-safe variation of e_book_backend_get_cache_dir().
     * Use this function when accessing `backend` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupCacheDir(): string
    /**
     * Fetches a copy of the currently configured locale for the addressbook
     */
    dupLocale(): string
    /**
     * Calls `func` for each existing view (as returned by e_book_backend_list_views()).
     * The `func` can return %FALSE to stop early.
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
     */
    getBackendProperty(propName: string): string
    /**
     * Returns the cache directory path used by `backend`.
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
    getContact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_get_contact_finish().
     * 
     * The returned #EContact is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * 
     * If an error occurred, the function will set `error` and return %NULL.
     * @param result a #GAsyncResult
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
    getContactList(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    getContactListUids(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    getContactSync(uid: string, cancellable: Gio.Cancellable | null): EBookContacts.Contact
    /**
     * Tries to create an #EDataBookDirect for `backend` if
     * backend supports direct read access.
     */
    getDirectBook(): DataBookDirect | null
    /**
     * Returns the data source registry to which #EBackend:source belongs.
     */
    getRegistry(): EDataServer.SourceRegistry
    /**
     * Returns whether `backend` will accept changes to its data content.
     */
    getWritable(): boolean
    /**
     * Checks if `backend'`s storage has been opened (and
     * authenticated, if necessary) and the backend itself
     * is ready for accessing. This property is changed automatically
     * after the `backend` is successfully opened.
     */
    isOpened(): boolean
    /**
     * Checks if we can write to `backend`.
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
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
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
    modifyContacts(vcards: string, opflags?: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_modify_contacts().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    modifyContactsFinish(result: Gio.AsyncResult): boolean
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
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
    open(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_open().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
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
     */
    refDataBook(): DataBook | null
    /**
     * Returns the #GProxyResolver for `backend` (if applicable), as indicated
     * by the #ESourceAuthentication:proxy-uid of `backend'`s #EBackend:source
     * or one of its ancestors.
     * 
     * The returned #GProxyResolver is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
     */
    refProxyResolver(): Gio.ProxyResolver | null
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
    refresh(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the refresh initiation started with e_book_backend_refresh().
     * 
     * If an error occurred while initiating the refresh, the function will set
     * `error` and return %FALSE.  If the `backend` does not support refreshing,
     * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
     * %FALSE.
     * @param result a #GAsyncResult
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
    removeContacts(uids: string[], opflags?: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_remove_contacts().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    removeContactsFinish(result: Gio.AsyncResult): boolean
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
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
     */
    setLocale(locale: string, cancellable: Gio.Cancellable | null): boolean
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

    // Own signals of EDataBook-1.2.EDataBook.BookBackend

    connect(sigName: "closed", callback: BookBackend_ClosedSignalCallback): number
    on(sigName: "closed", callback: BookBackend_ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: BookBackend_ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: BookBackend_ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "shutdown", callback: BookBackend_ShutdownSignalCallback): number
    on(sigName: "shutdown", callback: BookBackend_ShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: BookBackend_ShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: BookBackend_ShutdownSignalCallback): NodeJS.EventEmitter
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class BookBackend extends EBackend.Backend {

    // Own properties of EDataBook-1.2.EDataBook.BookBackend

    static name: string
    static $gtype: GObject.GType<BookBackend>

    // Constructors of EDataBook-1.2.EDataBook.BookBackend

    constructor(config?: BookBackend_ConstructProps) 
    _init(config?: BookBackend_ConstructProps): void
}

interface BookBackendFactory_ConstructProps extends EBackend.BackendFactory_ConstructProps {
}

interface BookBackendFactory {

    // Class property signals of EDataBook-1.2.EDataBook.BookBackendFactory

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
class BookBackendFactory extends EBackend.BackendFactory {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendFactory

    static name: string
    static $gtype: GObject.GType<BookBackendFactory>

    // Constructors of EDataBook-1.2.EDataBook.BookBackendFactory

    constructor(config?: BookBackendFactory_ConstructProps) 
    _init(config?: BookBackendFactory_ConstructProps): void
}

interface BookBackendSExp_ConstructProps extends GObject.Object_ConstructProps {
}

interface BookBackendSExp {

    // Owm methods of EDataBook-1.2.EDataBook.BookBackendSExp

    /**
     * Locks the `sexp`. Other threads cannot use it until
     * it's unlocked with e_book_backend_sexp_unlock().
     */
    lock(): void
    /**
     * Checks if `contact` matches `sexp`.
     * @param contact an #EContact
     */
    matchContact(contact: EBookContacts.Contact): boolean
    /**
     * Checks if `vcard` matches `sexp`.
     * @param vcard a vCard string
     */
    matchVcard(vcard: string): boolean
    /**
     * Retrieve the text expression for the given #EBookBackendSExp object.
     */
    text(): string
    /**
     * Unlocks the `sexp,` previously locked by e_book_backend_sexp_lock().
     */
    unlock(): void

    // Class property signals of EDataBook-1.2.EDataBook.BookBackendSExp

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BookBackendSExp extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSExp

    static name: string
    static $gtype: GObject.GType<BookBackendSExp>

    // Constructors of EDataBook-1.2.EDataBook.BookBackendSExp

    constructor(config?: BookBackendSExp_ConstructProps) 
    /**
     * Creates a new #EBookBackendSExp from `text`.
     * @constructor 
     * @param text an s-expression to parse
     */
    constructor(text: string) 
    /**
     * Creates a new #EBookBackendSExp from `text`.
     * @constructor 
     * @param text an s-expression to parse
     */
    static new(text: string): BookBackendSExp
    _init(config?: BookBackendSExp_ConstructProps): void
}

interface BookBackendSync_ConstructProps extends BookBackend_ConstructProps {
}

interface BookBackendSync {

    // Owm methods of EDataBook-1.2.EDataBook.BookBackendSync

    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param emailAddress an email address
     * @param cancellable optional #GCancellable object, or %NULL
     */
    containsEmail(emailAddress: string, cancellable?: Gio.Cancellable | null): boolean

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
    containsEmail(emailAddress: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    containsEmail(...args: any[]): any
    containsEmail(args_or_emailAddress: any[] | string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): boolean | void | any
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
     */
    createContacts(vcards: string, opflags?: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]

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
    createContacts(vcards: string, opflags?: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createContacts(...args: any[]): any
    createContacts(args_or_vcards: any[] | string, opflags?: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): boolean | void | any
    /**
     * Obtains an #EContact for `uid`.
     * 
     * The returned #EContact is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param uid a contact ID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getContact(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact

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
    getContact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContact(...args: any[]): any
    getContact(args_or_uid: any[] | string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): EBookContacts.Contact | void | any
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
     */
    getContactList(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]

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
    getContactList(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactList(...args: any[]): any
    getContactList(args_or_query: any[] | string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): boolean | void | any
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
     */
    getContactListUids(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]

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
    getContactListUids(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactListUids(...args: any[]): any
    getContactListUids(args_or_query: any[] | string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): boolean | void | any
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    modifyContacts(vcards: string, opflags?: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]

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
    modifyContacts(vcards: string, opflags?: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyContacts(...args: any[]): any
    modifyContacts(args_or_vcards: any[] | string, opflags?: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): boolean | void | any
    /**
     * "Opens" the `backend`.  Opening a backend is something of an outdated
     * concept, but the operation is hanging around for a little while longer.
     * This usually involves some custom initialization logic, and testing of
     * remote authentication if applicable.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
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
    open(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open(...args: any[]): any
    open(args_or_cancellable: any[] | Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): boolean | void | any
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
    refresh(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh(...args: any[]): any
    refresh(args_or_cancellable: any[] | Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): boolean | void | any
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    removeContacts(uids: string, opflags?: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRemovedUids */ string[] ]

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
    removeContacts(uids: string[], opflags?: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeContacts(...args: any[]): any
    removeContacts(args_or_uids: any[] | string[], opflags?: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): boolean | void | any

    // Class property signals of EDataBook-1.2.EDataBook.BookBackendSync

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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class BookBackendSync extends BookBackend {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSync

    static name: string
    static $gtype: GObject.GType<BookBackendSync>

    // Constructors of EDataBook-1.2.EDataBook.BookBackendSync

    constructor(config?: BookBackendSync_ConstructProps) 
    _init(config?: BookBackendSync_ConstructProps): void
}

interface BookCache_ConstructProps extends EDataServer.Extensible_ConstructProps, EBackend.Cache_ConstructProps {
}

/**
 * Signal callback interface for `dup-contact-revision`
 */
interface BookCache_DupContactRevisionSignalCallback {
    (object: EBookContacts.Contact): string
}

/**
 * Signal callback interface for `e164-changed`
 */
interface BookCache_E164ChangedSignalCallback {
    (object: EBookContacts.Contact, p0: boolean): void
}

interface BookCache extends EDataServer.Extensible {

    // Own properties of EDataBook-1.2.EDataBook.BookCache

    readonly locale: string

    // Owm methods of EDataBook-1.2.EDataBook.BookCache

    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the cache.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param emailAddress an email address to check for
     * @param cancellable optional #GCancellable object, or %NULL
     */
    containsEmail(emailAddress: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Calculates the `out_total` amount of results for the `cursor'`s query expression,
     * as well as the current `out_position` of `cursor` in the results. The `out_position` is
     * represented as the amount of results which lead up to the current value
     * of `cursor,` if `cursor` currently points to an exact contact, the position
     * also includes the cursor contact.
     * @param cursor The #EBookCacheCursor
     * @param cancellable optional #GCancellable object, or %NULL
     */
    cursorCalculate(cursor: BookCacheCursor, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outTotal */ number | null, /* outPosition */ number | null ]
    /**
     * Compares `contact` with `cursor` and returns whether `contact` is less than, equal to, or greater
     * than `cursor`.
     * @param cursor The #EBookCacheCursor
     * @param contact The #EContact to compare
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
     */
    cursorStep(cursor: BookCacheCursor, flags: BookCacheCursorStepFlags, origin: BookCacheCursorOrigin, count: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* outResults */ BookCacheSearchData[] | null ]
    /**
     * Returns the `contact` revision, used to detect changes.
     * The returned string should be freed with g_free(), when
     * no longer needed.
     * @param contact an #EContact
     */
    dupContactRevision(contact: EBookContacts.Contact): string
    dupLocale(): string
    /**
     * Fetch the #EContact specified by `uid` in `book_cache`.
     * 
     * If `meta_contact` is specified, then a shallow #EContact will be created
     * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param metaContact Whether an entire contact is desired, or only the metadata
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getContact(uid: string, metaContact: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact ]
    /**
     * Gets the custom flags previously set for the `uid,` either with
     * e_book_cache_set_contact_custom_flags(), when adding contacts or
     * when removing contacts in offline.
     * @param uid The uid of the contact to set the extra data for
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getContactCustomFlags(uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCustomFlags */ number ]
    /**
     * Fetches the extra data previously set for `uid,` either with
     * e_book_cache_set_contact_extra() or when adding contacts.
     * @param uid The uid of the contact to fetch the extra data for
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getContactExtra(uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExtra */ string ]
    /**
     * Gets all the UID-s the `extra` data is set for.
     * 
     * The `out_uids` should be freed with
     * g_slist_free_full (uids, g_free);
     * when no longer needed.
     * @param extra an extra column value to search for
     * @param cancellable optional #GCancellable object, or %NULL
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
     */
    getVcard(uid: string, metaContact: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outVcard */ string ]
    /**
     * This is a convenience wrapper for e_book_cache_put_contacts(),
     * which is the preferred way to add or modify multiple contacts when possible.
     * @param contact an #EContact to be added
     * @param extra extra data to store in association with this `contact`
     * @param customFlags custom flags for the `contact,` not interpreted by the `book_cache`
     * @param offlineFlag one of #ECacheOfflineFlag, whether putting this contact in offline
     * @param cancellable optional #GCancellable object, or %NULL
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
     */
    putContacts(contacts: EBookContacts.Contact[], extras: string[] | null, customFlags: number[] | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * References the currently active #ECollator for `book_cache,`
     * use e_collator_unref() when finished using the returned collator.
     * 
     * Note that the active collator will change with the active locale setting.
     */
    refCollator(): EDataServer.Collator
    /**
     * References the #ESource to which `book_cache` is paired,
     * use g_object_unref() when no longer needed.
     * It can be %NULL in some cases, like when running tests.
     */
    refSource(): EDataServer.Source | null
    /**
     * Removes the contact identified by `uid` from `book_cache`.
     * @param uid the uid of the contact to remove
     * @param customFlags custom flags for the contact with the given `uid,` not interpreted by the `book_cache`
     * @param offlineFlag one of #ECacheOfflineFlag, whether removing this contact in offline
     * @param cancellable optional #GCancellable object, or %NULL
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
     */
    search(sexp: string | null, metaContacts: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outList */ BookCacheSearchData[] ]
    /**
     * Similar to e_book_cache_search(), but fetches only a list of contact UIDs.
     * 
     * The returned `out_list` list should be freed with g_slist_free_full(list, g_free)
     * when no longer needed.
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts
     * @param cancellable optional #GCancellable object, or %NULL
     */
    searchUids(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outList */ string[] ]
    /**
     * Similar to e_book_cache_search(), but calls the `func` for each found contact.
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts
     * @param cancellable optional #GCancellable object, or %NULL
     */
    searchWithCallback(sexp: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the custom flags associated with a contact
     * identified by the `uid`.
     * @param uid The uid of the contact to set the extra data for
     * @param customFlags the custom flags to set for the contact
     * @param cancellable optional #GCancellable object, or %NULL
     */
    setContactCustomFlags(uid: string, customFlags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the extra data associated with `uid`.
     * @param uid The uid of the contact to set the extra data for
     * @param extra The extra data to set
     * @param cancellable optional #GCancellable object, or %NULL
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
     */
    setLocale(lcCollate: string, cancellable: Gio.Cancellable | null): boolean

    // Own signals of EDataBook-1.2.EDataBook.BookCache

    connect(sigName: "dup-contact-revision", callback: BookCache_DupContactRevisionSignalCallback): number
    on(sigName: "dup-contact-revision", callback: BookCache_DupContactRevisionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dup-contact-revision", callback: BookCache_DupContactRevisionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dup-contact-revision", callback: BookCache_DupContactRevisionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dup-contact-revision", ...args: any[]): void
    connect(sigName: "e164-changed", callback: BookCache_E164ChangedSignalCallback): number
    on(sigName: "e164-changed", callback: BookCache_E164ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "e164-changed", callback: BookCache_E164ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "e164-changed", callback: BookCache_E164ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "e164-changed", p0: boolean, ...args: any[]): void

    // Class property signals of EDataBook-1.2.EDataBook.BookCache

    connect(sigName: "notify::locale", callback: (...args: any[]) => void): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using
 * the functions below.
 * @class 
 */
class BookCache extends EBackend.Cache {

    // Own properties of EDataBook-1.2.EDataBook.BookCache

    static name: string
    static $gtype: GObject.GType<BookCache>

    // Constructors of EDataBook-1.2.EDataBook.BookCache

    constructor(config?: BookCache_ConstructProps) 
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
     */
    static newFull(filename: string, source: EDataServer.Source | null, setup: EBookContacts.SourceBackendSummarySetup | null, cancellable: Gio.Cancellable | null): BookCache
    _init(config?: BookCache_ConstructProps): void
}

interface BookMetaBackend_ConstructProps extends BookBackendSync_ConstructProps {

    // Own constructor properties of EDataBook-1.2.EDataBook.BookMetaBackend

    /**
     * The #EBookCache being used for this meta backend.
     */
    cache?: BookCache | null
}

/**
 * Signal callback interface for `refresh-completed`
 */
interface BookMetaBackend_RefreshCompletedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `source-changed`
 */
interface BookMetaBackend_SourceChangedSignalCallback {
    (): void
}

interface BookMetaBackend {

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
     */
    connectSync(credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    /**
     * This is called when the backend goes into offline mode or
     * when the disconnect is required. The implementation should
     * not report any error when it is called and the `meta_backend`
     * is not connected.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    disconnectSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the last known synchronization tag, the same as used to
     * call e_book_meta_backend_get_changes_sync().
     * 
     * Free the returned string with g_free(), when no longer needed.
     */
    dupSyncTag(): string | null
    /**
     * Empties the local cache by removing all known contacts from it
     * and notifies about such removal any opened views.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    emptyCacheSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Ensures that the `meta_backend` is connected to its destination.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    ensureConnectedSync(cancellable: Gio.Cancellable | null): boolean
    getCapabilities(): string
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
     * @param lastSyncTag optional sync tag from the last check
     * @param isRepeat set to %TRUE when this is the repeated call
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getChangesSync(lastSyncTag: string | null, isRepeat: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outRepeat */ boolean, /* outCreatedObjects */ BookMetaBackendInfo[], /* outModifiedObjects */ BookMetaBackendInfo[], /* outRemovedObjects */ BookMetaBackendInfo[] ]
    /**
     * This value has meaning only if e_book_meta_backend_get_ever_connected()
     * is %TRUE.
     */
    getConnectedWritable(): boolean
    getEverConnected(): boolean
    /**
     * It is optional to implement this virtual method by the descendants.
     * It is used to receive SSL error details when any online operation
     * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
     */
    getSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    /**
     * Changes all URL photos and logos which point to a local file in `contact`
     * to inline type, aka adds the file content into the `contact`.
     * This is called automatically before e_book_meta_backend_save_contact_sync().
     * 
     * The reverse operation is e_book_meta_backend_store_inline_photos_sync().
     * @param contact an #EContact to work with
     * @param cancellable optional #GCancellable object, or %NULL
     */
    inlineLocalPhotosSync(contact: EBookContacts.Contact, cancellable: Gio.Cancellable | null): boolean
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
     */
    listExistingSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outExistingObjects */ BookMetaBackendInfo[] ]
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
     */
    loadContactSync(uid: string, extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact, /* outExtra */ string ]
    /**
     * Processes given changes by updating local cache content accordingly.
     * The `meta_backend` processes the changes like being online and particularly
     * requires to be online to load created and modified objects when needed.
     * @param createdObjects     a #GSList of #EBookMetaBackendInfo object infos which had been created
     * @param modifiedObjects     a #GSList of #EBookMetaBackendInfo object infos which had been modified
     * @param removedObjects     a #GSList of #EBookMetaBackendInfo object infos which had been removed
     * @param cancellable optional #GCancellable object, or %NULL
     */
    processChangesSync(createdObjects: BookMetaBackendInfo[] | null, modifiedObjects: BookMetaBackendInfo[] | null, removedObjects: BookMetaBackendInfo[] | null, cancellable: Gio.Cancellable | null): boolean
    refCache(): BookCache
    /**
     * Refreshes the `meta_backend` immediately. To just schedule refresh
     * operation call e_book_meta_backend_schedule_refresh().
     * @param cancellable optional #GCancellable object, or %NULL
     */
    refreshSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes a contact from the remote side. The `object` is not %NULL when
     * it's removing locally deleted object in offline mode. Being it %NULL,
     * the descendant can obtain the object from the #EBookCache.
     * 
     * It is mandatory to implement this virtual method by the writable descendant.
     * @param conflictResolution an #EConflictResolution to use
     * @param uid a contact UID
     * @param extra extra data being saved with the contact in the local cache, or %NULL
     * @param object corresponding vCard object, as stored in the local cache, or %NULL
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
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
     * @param overwriteExisting %TRUE when can overwrite existing contacts, %FALSE otherwise
     * @param conflictResolution one of #EConflictResolution, what to do on conflicts
     * @param contact an #EContact to save
     * @param extra extra data saved with the contacts in an #EBookCache
     * @param opflags bit-or of EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    saveContactSync(overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewUid */ string, /* outNewExtra */ string ]
    /**
     * Schedules refresh of the content of the `meta_backend`. If there's any
     * already scheduled, then the function does nothing.
     * 
     * Use e_book_meta_backend_refresh_sync() to refresh the `meta_backend`
     * immediately.
     */
    scheduleRefresh(): void
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
     * @param metaContact %TRUE, when return #EContact filled with UID and REV only, %FALSE to return full contacts
     * @param cancellable optional #GCancellable object, or %NULL
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
     * @param expr a search expression, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    searchUidsSync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]
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
     */
    storeInlinePhotosSync(contact: EBookContacts.Contact, cancellable: Gio.Cancellable | null): boolean

    // Conflicting methods

    containsEmail(...args: any[]): any
    createContacts(...args: any[]): any
    getContact(...args: any[]): any
    getContactList(...args: any[]): any
    getContactListUids(...args: any[]): any
    modifyContacts(...args: any[]): any
    open(...args: any[]): any
    refresh(...args: any[]): any
    removeContacts(...args: any[]): any

    // Own signals of EDataBook-1.2.EDataBook.BookMetaBackend

    connect(sigName: "refresh-completed", callback: BookMetaBackend_RefreshCompletedSignalCallback): number
    on(sigName: "refresh-completed", callback: BookMetaBackend_RefreshCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refresh-completed", callback: BookMetaBackend_RefreshCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refresh-completed", callback: BookMetaBackend_RefreshCompletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "refresh-completed", ...args: any[]): void
    connect(sigName: "source-changed", callback: BookMetaBackend_SourceChangedSignalCallback): number
    on(sigName: "source-changed", callback: BookMetaBackend_SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: BookMetaBackend_SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: BookMetaBackend_SourceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-changed", ...args: any[]): void

    // Class property signals of EDataBook-1.2.EDataBook.BookMetaBackend

    connect(sigName: "notify::cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using
 * the functions below.
 * @class 
 */
class BookMetaBackend extends BookBackendSync {

    // Own properties of EDataBook-1.2.EDataBook.BookMetaBackend

    static name: string
    static $gtype: GObject.GType<BookMetaBackend>

    // Constructors of EDataBook-1.2.EDataBook.BookMetaBackend

    constructor(config?: BookMetaBackend_ConstructProps) 
    _init(config?: BookMetaBackend_ConstructProps): void
}

interface BookSqlite_ConstructProps extends EDataServer.Extensible_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `before-insert-contact`
 */
interface BookSqlite_BeforeInsertContactSignalCallback {
    (object: object | null, p0: EBookContacts.Contact, p1: string, p2: boolean, p3: GObject.Object, p4: object | null): boolean
}

/**
 * Signal callback interface for `before-remove-contact`
 */
interface BookSqlite_BeforeRemoveContactSignalCallback {
    (object: object | null, p0: string, p1: Gio.Cancellable | null, p2: object | null): boolean
}

interface BookSqlite extends EDataServer.Extensible {

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
     */
    addContacts(contacts: EBookContacts.Contact[], extra: string[] | null, replace: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Fetch the #EContact specified by `uid` in `ebsql`.
     * 
     * If `meta_contact` is specified, then a shallow #EContact will be created
     * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param metaContact Whether an entire contact is desired, or only the metadata
     */
    getContact(uid: string, metaContact: boolean): [ /* returnType */ boolean, /* retContact */ EBookContacts.Contact ]
    /**
     * Fetches the extra data previously set for `uid,` either with
     * e_book_sqlite_set_contact_extra() or when adding contacts.
     * @param uid The uid of the contact to fetch the extra data for
     */
    getContactExtra(uid: string): [ /* returnType */ boolean, /* retExtra */ string ]
    /**
     * Fetches the value for `key` and stores it in `value`
     * @param key The key to fetch a value for
     */
    getKeyValue(key: string): [ /* returnType */ boolean, /* value */ string ]
    /**
     * A convenience function to fetch the value of `key` as an integer.
     * @param key The key to fetch a value for
     */
    getKeyValueInt(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Fetches the current locale setting for the address-book.
     * 
     * Upon success, `lc_collate_out` will hold the returned locale setting,
     * otherwise %FALSE will be returned and `error` will be updated accordingly.
     */
    getLocale(): [ /* returnType */ boolean, /* localeOut */ string ]
    /**
     * Fetch a vcard string for `uid` in `ebsql`.
     * 
     * If `meta_contact` is specified, then a shallow vcard representation will be
     * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param metaContact Whether an entire contact is desired, or only the metadata
     */
    getVcard(uid: string, metaContact: boolean): [ /* returnType */ boolean, /* retVcard */ string ]
    /**
     * Checks if a contact bearing the UID indicated by `uid` is stored in `ebsql`.
     * @param uid The uid of the contact to check for
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
     */
    lock(lockType: bSqlLockType, cancellable: Gio.Cancellable | null): boolean
    /**
     * References the currently active #ECollator for `ebsql,`
     * use e_collator_unref() when finished using the returned collator.
     * 
     * Note that the active collator will change with the active locale setting.
     */
    refCollator(): EDataServer.Collator
    /**
     * References the #ESource to which `ebsql` is paired,
     * use g_object_unref() when finished using the source.
     * It can be %NULL in some cases, like when running tests.
     */
    refSource(): EDataServer.Source | null
    /**
     * Removes the contact indicated by `uid` from `ebsql`.
     * @param uid the uid of the contact to remove
     * @param cancellable A #GCancellable
     */
    removeContact(uid: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes the contacts indicated by `uids` from `ebsql`.
     * @param uids a #GSList of uids indicating which contacts to remove
     * @param cancellable A #GCancellable
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
     */
    search(sexp: string | null, metaContacts: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* retList */ bSqlSearchData[] ]
    /**
     * Similar to e_book_sqlitedb_search(), but fetches only a list of contact UIDs.
     * 
     * The returned `ret_list` list should be freed with g_slist_free() and all
     * elements freed with g_free().
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts.
     * @param cancellable A #GCancellable
     */
    searchUids(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* retList */ string[] ]
    /**
     * Sets or replaces the extra data associated with `uid`.
     * @param uid The uid of the contact to set the extra data for
     * @param extra The extra data to set
     */
    setContactExtra(uid: string, extra: string | null): boolean
    /**
     * Sets the value for `key` to be `value`
     * @param key The key to fetch a value for
     * @param value The new value for `key`
     */
    setKeyValue(key: string, value: string): boolean
    /**
     * A convenience function to set the value of `key` as an integer.
     * @param key The key to fetch a value for
     * @param value The new value for `key`
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
     */
    setLocale(lcCollate: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Releases an exclusive on `ebsql` and finishes a transaction previously
     * started with e_book_sqlite_lock_updates().
     * 
     * <note><para>If this fails, the lock on `ebsql` is still released and `error` will
     * be set to indicate why the transaction or rollback failed.</para></note>
     * @param action Which #EbSqlUnlockAction to take while unlocking
     */
    unlock(action: bSqlUnlockAction): boolean

    // Own signals of EDataBook-1.2.EDataBook.BookSqlite

    connect(sigName: "before-insert-contact", callback: BookSqlite_BeforeInsertContactSignalCallback): number
    on(sigName: "before-insert-contact", callback: BookSqlite_BeforeInsertContactSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-insert-contact", callback: BookSqlite_BeforeInsertContactSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-insert-contact", callback: BookSqlite_BeforeInsertContactSignalCallback): NodeJS.EventEmitter
    emit(sigName: "before-insert-contact", p0: EBookContacts.Contact, p1: string, p2: boolean, p3: GObject.Object, p4: object | null, ...args: any[]): void
    connect(sigName: "before-remove-contact", callback: BookSqlite_BeforeRemoveContactSignalCallback): number
    on(sigName: "before-remove-contact", callback: BookSqlite_BeforeRemoveContactSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-remove-contact", callback: BookSqlite_BeforeRemoveContactSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-remove-contact", callback: BookSqlite_BeforeRemoveContactSignalCallback): NodeJS.EventEmitter
    emit(sigName: "before-remove-contact", p0: string, p1: Gio.Cancellable | null, p2: object | null, ...args: any[]): void

    // Class property signals of EDataBook-1.2.EDataBook.BookSqlite

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
class BookSqlite extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.BookSqlite

    static name: string
    static $gtype: GObject.GType<BookSqlite>

    // Constructors of EDataBook-1.2.EDataBook.BookSqlite

    constructor(config?: BookSqlite_ConstructProps) 
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
     */
    static newFull(path: string, source: EDataServer.Source | null, setup: EBookContacts.SourceBackendSummarySetup | null, vcardCallback: bSqlVCardCallback | null, changeCallback: bSqlChangeCallback | null, cancellable: Gio.Cancellable | null): BookSqlite
    _init(config?: BookSqlite_ConstructProps): void
    static errorQuark(): GLib.Quark
    /**
     * Frees an #EbSqlSearchData
     * @param data An #EbSqlSearchData
     */
    static searchDataFree(data: bSqlSearchData): void
}

interface DataBook_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EDataBook-1.2.EDataBook.DataBook

    backend?: BookBackend | null
    connection?: Gio.DBusConnection | null
    objectPath?: string | null
}

interface DataBook extends Gio.Initable {

    // Own properties of EDataBook-1.2.EDataBook.DataBook

    readonly backend: BookBackend
    readonly connection: Gio.DBusConnection
    readonly objectPath: string

    // Owm methods of EDataBook-1.2.EDataBook.DataBook

    /**
     * Returns the #GDBusConnection on which the AddressBook D-Bus interface
     * is exported.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Returns the object path at which the AddressBook D-Bus interface is
     * exported.
     */
    getObjectPath(): string
    /**
     * Returns the #EBookBackend to which incoming remote method invocations
     * are being forwarded.
     * 
     * The returned #EBookBackend is referenced for thread-safety and should
     * be unreferenced with g_object_unref() when finished with it.
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DataBook extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.DataBook

    static name: string
    static $gtype: GObject.GType<DataBook>

    // Constructors of EDataBook-1.2.EDataBook.DataBook

    constructor(config?: DataBook_ConstructProps) 
    /**
     * Creates a new #EDataBook and exports the AddressBook D-Bus interface
     * on `connection` at `object_path`.  The #EDataBook handles incoming remote
     * method invocations and forwards them to the `backend`.  If the AddressBook
     * interface fails to export, the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #EBookBackend
     * @param connection a #GDBusConnection
     * @param objectPath object path for the D-Bus interface
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
     */
    static new(backend: BookBackend, connection: Gio.DBusConnection, objectPath: string): DataBook
    _init(config?: DataBook_ConstructProps): void
    /**
     * Takes a list of strings and converts it to a comma-separated string of
     * values; free returned pointer with g_free()
     * @param strings a list of gchar *
     */
    static stringSlistToCommaString(strings: string[]): string
}

interface DataBookCursor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EDataBook-1.2.EDataBook.DataBookCursor

    backend?: BookBackend | null
}

interface DataBookCursor {

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
    contactAdded(contact: EBookContacts.Contact): void
    /**
     * Should be called by addressbook backends whenever a contact
     * is removed.
     * @param contact the #EContact which was removed from the addressbook
     */
    contactRemoved(contact: EBookContacts.Contact): void
    /**
     * Gets the backend which created and owns `cursor`.
     */
    getBackend(): BookBackend
    /**
     * Fetch the current position of `cursor` in its result list.
     */
    getPosition(): number
    /**
     * Fetch the total number of contacts which match `cursor'`s query expression.
     */
    getTotal(): number
    /**
     * Load the current locale setting from the cursor's underlying database.
     * 
     * Addressbook backends implementing cursors should call this function on all active
     * cursor when the locale setting changes.
     * 
     * This will implicitly reset `cursor'`s state and position.
     * @param cancellable A #GCancellable
     */
    loadLocale(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* locale */ string ]
    /**
     * Recalculates the cursor's total and position, this is meant
     * for cursor created in Direct Read Access mode to synchronously
     * recalculate the position and total values when the addressbook
     * revision has changed.
     * @param cancellable A #GCancellable
     */
    recalculate(cancellable: Gio.Cancellable | null): boolean
    /**
     * Places `cursor` on the `connection` at `object_path`
     * @param connection the #GDBusConnection to register with
     * @param objectPath the object path to place the direct access configuration data
     */
    registerGdbusObject(connection: Gio.DBusConnection, objectPath: string): boolean
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
     */
    setAlphabeticIndex(index: number, locale: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the search expression for the cursor
     * @param sexp the search expression to set
     * @param cancellable A #GCancellable
     */
    setSexp(sexp: string | null, cancellable: Gio.Cancellable | null): boolean
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
     * @param revisionGuard The expected current addressbook revision, or %NULL
     * @param flags The #EBookCursorStepFlags for this step
     * @param origin The #EBookCursorOrigin from whence to step
     * @param count a positive or negative amount of contacts to try and fetch
     * @param cancellable A #GCancellable
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An opaque handle for an addressbook cursor
 * @class 
 */
class DataBookCursor extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursor

    static name: string
    static $gtype: GObject.GType<DataBookCursor>

    // Constructors of EDataBook-1.2.EDataBook.DataBookCursor

    constructor(config?: DataBookCursor_ConstructProps) 
    _init(config?: DataBookCursor_ConstructProps): void
}

interface DataBookCursorCache_ConstructProps extends DataBookCursor_ConstructProps {

    // Own constructor properties of EDataBook-1.2.EDataBook.DataBookCursorCache

    bookCache?: BookCache | null
    cursor?: object | null
}

interface DataBookCursorCache {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorCache

    readonly bookCache: BookCache
    readonly cursor: object

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
}

/**
 * An opaque handle for the #EBookCache cursor instance.
 * @class 
 */
class DataBookCursorCache extends DataBookCursor {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorCache

    static name: string
    static $gtype: GObject.GType<DataBookCursorCache>

    // Constructors of EDataBook-1.2.EDataBook.DataBookCursorCache

    constructor(config?: DataBookCursorCache_ConstructProps) 
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
     */
    static new(bookBackend: BookBackend, bookCache: BookCache, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]): DataBookCursorCache
    _init(config?: DataBookCursorCache_ConstructProps): void
}

interface DataBookCursorSqlite_ConstructProps extends DataBookCursor_ConstructProps {

    // Own constructor properties of EDataBook-1.2.EDataBook.DataBookCursorSqlite

    cursor?: object | null
    ebsql?: BookSqlite | null
    revisionKey?: string | null
}

interface DataBookCursorSqlite {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorSqlite

    readonly cursor: object
    readonly ebsql: BookSqlite
    readonly revisionKey: string

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
}

/**
 * An opaque handle for the SQLite cursor instance.
 * @class 
 */
class DataBookCursorSqlite extends DataBookCursor {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorSqlite

    static name: string
    static $gtype: GObject.GType<DataBookCursorSqlite>

    // Constructors of EDataBook-1.2.EDataBook.DataBookCursorSqlite

    constructor(config?: DataBookCursorSqlite_ConstructProps) 
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
     */
    static new(backend: BookBackend, ebsql: BookSqlite, revisionKey: string, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]): DataBookCursorSqlite
    _init(config?: DataBookCursorSqlite_ConstructProps): void
}

interface DataBookDirect_ConstructProps extends GObject.Object_ConstructProps {
}

interface DataBookDirect {

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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DataBookDirect extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.DataBookDirect

    static name: string
    static $gtype: GObject.GType<DataBookDirect>

    // Constructors of EDataBook-1.2.EDataBook.DataBookDirect

    constructor(config?: DataBookDirect_ConstructProps) 
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
     */
    static new(backendPath: string, backendFactoryName: string, config: string): DataBookDirect
    _init(config?: DataBookDirect_ConstructProps): void
}

interface DataBookFactory_ConstructProps extends EDataServer.Extensible_ConstructProps, Gio.Initable_ConstructProps, EBackend.DataFactory_ConstructProps {
}

interface DataBookFactory extends EDataServer.Extensible, Gio.Initable {

    // Own fields of EDataBook-1.2.EDataBook.DataBookFactory

    parent: EBackend.DataFactory
    priv: DataBookFactoryPrivate

    // Class property signals of EDataBook-1.2.EDataBook.DataBookFactory

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
}

class DataBookFactory extends EBackend.DataFactory {

    // Own properties of EDataBook-1.2.EDataBook.DataBookFactory

    static name: string
    static $gtype: GObject.GType<DataBookFactory>

    // Constructors of EDataBook-1.2.EDataBook.DataBookFactory

    constructor(config?: DataBookFactory_ConstructProps) 
    constructor(backendPerProcess: number, cancellable: Gio.Cancellable | null) 
    static new(backendPerProcess: number, cancellable: Gio.Cancellable | null): DataBookFactory
    _init(config?: DataBookFactory_ConstructProps): void
}

interface DataBookView_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EDataBook-1.2.EDataBook.DataBookView

    backend?: BookBackend | null
    connection?: Gio.DBusConnection | null
    objectPath?: string | null
    sexp?: BookBackendSExp | null
}

interface DataBookView extends Gio.Initable {

    // Own properties of EDataBook-1.2.EDataBook.DataBookView

    readonly backend: BookBackend
    readonly connection: Gio.DBusConnection
    readonly objectPath: string
    readonly sexp: BookBackendSExp

    // Own fields of EDataBook-1.2.EDataBook.DataBookView

    parent: GObject.Object
    priv: DataBookViewPrivate

    // Owm methods of EDataBook-1.2.EDataBook.DataBookView

    /**
     * Returns the #GDBusConnection on which the AddressBookView D-Bus
     * interface is exported.
     */
    getConnection(): Gio.DBusConnection
    getFieldsOfInterest(): GLib.HashTable | null
    /**
     * Gets the #EBookClientViewFlags that control the behaviour of `view`.
     */
    getFlags(): EBookContacts.BookClientViewFlags
    /**
     * Returns the object path at which the AddressBookView D-Bus interface
     * is exported.
     */
    getObjectPath(): string
    /**
     * Gets the s-expression used for matching contacts to `view`.
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
     */
    refBackend(): BookBackend | null

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DataBookView extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.DataBookView

    static name: string
    static $gtype: GObject.GType<DataBookView>

    // Constructors of EDataBook-1.2.EDataBook.DataBookView

    constructor(config?: DataBookView_ConstructProps) 
    /**
     * Creates a new #EDataBookView and exports its D-Bus interface on
     * `connection` at `object_path`.  If an error occurs while exporting,
     * the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #EBookBackend
     * @param sexp an #EBookBackendSExp
     * @param connection a #GDBusConnection
     * @param objectPath an object path for the view
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
     */
    static new(backend: BookBackend, sexp: BookBackendSExp, connection: Gio.DBusConnection, objectPath: string): DataBookView
    _init(config?: DataBookView_ConstructProps): void
}

interface SubprocessBookFactory_ConstructProps extends Gio.Initable_ConstructProps, EBackend.SubprocessFactory_ConstructProps {
}

interface SubprocessBookFactory extends Gio.Initable {

    // Own fields of EDataBook-1.2.EDataBook.SubprocessBookFactory

    parent: EBackend.SubprocessFactory
    priv: SubprocessBookFactoryPrivate

    // Class property signals of EDataBook-1.2.EDataBook.SubprocessBookFactory

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

class SubprocessBookFactory extends EBackend.SubprocessFactory {

    // Own properties of EDataBook-1.2.EDataBook.SubprocessBookFactory

    static name: string
    static $gtype: GObject.GType<SubprocessBookFactory>

    // Constructors of EDataBook-1.2.EDataBook.SubprocessBookFactory

    constructor(config?: SubprocessBookFactory_ConstructProps) 
    constructor(cancellable: Gio.Cancellable | null) 
    static new(cancellable: Gio.Cancellable | null): SubprocessBookFactory
    _init(config?: SubprocessBookFactory_ConstructProps): void
}

interface SystemLocaleWatcher_ConstructProps extends GObject.Object_ConstructProps {
}

interface SystemLocaleWatcher {

    // Own properties of EDataBook-1.2.EDataBook.SystemLocaleWatcher

    /**
     * Current locale, as detected. It can be %NULL, when the locale
     * was not detected yet.
     */
    readonly locale: string

    // Owm methods of EDataBook-1.2.EDataBook.SystemLocaleWatcher

    /**
     * Returns the current locale, as detected by the `watcher`. The string
     * is duplicated for thread safety. It can be %NULL, when the locale
     * was not detected yet.
     * 
     * Free it with g_free(), when no longer needed.
     */
    dupLocale(): string | null

    // Class property signals of EDataBook-1.2.EDataBook.SystemLocaleWatcher

    connect(sigName: "notify::locale", callback: (...args: any[]) => void): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locale", ...args: any[]): void
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
class SystemLocaleWatcher extends GObject.Object {

    // Own properties of EDataBook-1.2.EDataBook.SystemLocaleWatcher

    static name: string
    static $gtype: GObject.GType<SystemLocaleWatcher>

    // Constructors of EDataBook-1.2.EDataBook.SystemLocaleWatcher

    constructor(config?: SystemLocaleWatcher_ConstructProps) 
    /**
     * Creates a new #ESystemLocaleWatcher instance, which listens for D-Bus
     * notification on locale changes. It uses system bus, unless an environment
     * variable "EDS_TESTING" is defined, in which case it uses the session bus
     * instead.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #ESystemLocaleWatcher instance, which listens for D-Bus
     * notification on locale changes. It uses system bus, unless an environment
     * variable "EDS_TESTING" is defined, in which case it uses the session bus
     * instead.
     * @constructor 
     */
    static new(): SystemLocaleWatcher
    _init(config?: SystemLocaleWatcher_ConstructProps): void
}

interface BookBackendClass {

    // Own fields of EDataBook-1.2.EDataBook.BookBackendClass

    /**
     * Whether a serial dispatch queue should
     *                             be used for this backend or not. The default is %TRUE.
     * @field 
     */
    useSerialDispatchQueue: boolean
    implGetBackendProperty: (backend: BookBackend, propName: string) => string
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
    implDupLocale: (backend: BookBackend) => string
    implDeleteCursor: (backend: BookBackend, cursor: DataBookCursor) => boolean
    closed: (backend: BookBackend, sender: string) => void
    shutdown: (backend: BookBackend) => void
    implContainsEmail: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, emailAddress: string) => void
    reservedPadding: object[]
}

/**
 * Class structure for the #EBookBackend class.
 * 
 * These virtual methods must be implemented when writing
 * an addressbook backend.
 * @record 
 */
abstract class BookBackendClass {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendClass

    static name: string
}

interface BookBackendFactoryClass {

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
abstract class BookBackendFactoryClass {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendFactoryClass

    static name: string
}

interface BookBackendFactoryPrivate {
}

class BookBackendFactoryPrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendFactoryPrivate

    static name: string
}

interface BookBackendPrivate {
}

class BookBackendPrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendPrivate

    static name: string
}

interface BookBackendSExpClass {
}

abstract class BookBackendSExpClass {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSExpClass

    static name: string
}

interface BookBackendSExpPrivate {
}

class BookBackendSExpPrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSExpPrivate

    static name: string
}

interface BookBackendSyncClass {

    // Own fields of EDataBook-1.2.EDataBook.BookBackendSyncClass

    openSync: (backend: BookBackendSync, cancellable: Gio.Cancellable | null) => boolean
    refreshSync: (backend: BookBackendSync, cancellable: Gio.Cancellable | null) => boolean
    containsEmailSync: (backend: BookBackendSync, emailAddress: string, cancellable: Gio.Cancellable | null) => boolean
    reservedPadding: object[]
}

/**
 * Class structure for the #EBookBackendSync class.
 * 
 * These virtual methods must be implemented when writing
 * an addressbook backend.
 * @record 
 */
abstract class BookBackendSyncClass {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSyncClass

    static name: string
}

interface BookBackendSyncPrivate {
}

class BookBackendSyncPrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookBackendSyncPrivate

    static name: string
}

interface BookCacheClass {

    // Own fields of EDataBook-1.2.EDataBook.BookCacheClass

    e164Changed: (bookCache: BookCache, contact: EBookContacts.Contact, isReplace: boolean) => void
    dupContactRevision: (bookCache: BookCache, contact: EBookContacts.Contact) => string
}

/**
 * Class structure for the #EBookCache class.
 * @record 
 */
abstract class BookCacheClass {

    // Own properties of EDataBook-1.2.EDataBook.BookCacheClass

    static name: string
}

interface BookCacheCursor {
}

/**
 * An opaque cursor pointer
 * @record 
 */
class BookCacheCursor {

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
     */
    static new(bookCache: BookCache, sexp: string | null, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]): BookCacheCursor
}

interface BookCachePrivate {
}

class BookCachePrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookCachePrivate

    static name: string
}

interface BookCacheSearchData {

    // Own fields of EDataBook-1.2.EDataBook.BookCacheSearchData

    /**
     * The %E_CONTACT_UID field of this contact
     * @field 
     */
    uid: string
    /**
     * The vcard string
     * @field 
     */
    vcard: string
    /**
     * Any extra data associated with the vcard
     * @field 
     */
    extra: string

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
class BookCacheSearchData {

    // Own properties of EDataBook-1.2.EDataBook.BookCacheSearchData

    static name: string

    // Constructors of EDataBook-1.2.EDataBook.BookCacheSearchData

    /**
     * Creates a new EBookCacheSearchData prefilled with the given values.
     * @constructor 
     * @param uid a contact UID; cannot be %NULL
     * @param vcard the contact as a vCard string; cannot be %NULL
     * @param extra any extra data stored with the contact, or %NULL
     */
    constructor(uid: string, vcard: string, extra: string | null) 
    /**
     * Creates a new EBookCacheSearchData prefilled with the given values.
     * @constructor 
     * @param uid a contact UID; cannot be %NULL
     * @param vcard the contact as a vCard string; cannot be %NULL
     * @param extra any extra data stored with the contact, or %NULL
     */
    static new(uid: string, vcard: string, extra: string | null): BookCacheSearchData
    /**
     * Frees the `data` structure, previously allocated with e_book_cache_search_data_new()
     * or e_book_cache_search_data_copy().
     * @param data an #EBookCacheSearchData
     */
    static free(data: object | null): void
}

interface BookMetaBackendClass {

    // Own fields of EDataBook-1.2.EDataBook.BookMetaBackendClass

    connectSync: (metaBackend: BookMetaBackend, credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    disconnectSync: (metaBackend: BookMetaBackend, cancellable: Gio.Cancellable | null) => boolean
    getChangesSync: (metaBackend: BookMetaBackend, lastSyncTag: string | null, isRepeat: boolean, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outRepeat */ boolean, /* outCreatedObjects */ BookMetaBackendInfo[], /* outModifiedObjects */ BookMetaBackendInfo[], /* outRemovedObjects */ BookMetaBackendInfo[] ]
    listExistingSync: (metaBackend: BookMetaBackend, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outExistingObjects */ BookMetaBackendInfo[] ]
    loadContactSync: (metaBackend: BookMetaBackend, uid: string, extra: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact, /* outExtra */ string ]
    saveContactSync: (metaBackend: BookMetaBackend, overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewUid */ string, /* outNewExtra */ string ]
    removeContactSync: (metaBackend: BookMetaBackend, conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable: Gio.Cancellable | null) => boolean
    searchSync: (metaBackend: BookMetaBackend, expr: string | null, metaContact: boolean, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    searchUidsSync: (metaBackend: BookMetaBackend, expr: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outUids */ string[] ]
    requiresReconnect: (metaBackend: BookMetaBackend) => boolean
    sourceChanged: (metaBackend: BookMetaBackend) => void
    getSslErrorDetails: (metaBackend: BookMetaBackend) => [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
}

/**
 * Class structure for the #EBookMetaBackend class.
 * @record 
 */
abstract class BookMetaBackendClass {

    // Own properties of EDataBook-1.2.EDataBook.BookMetaBackendClass

    static name: string
}

interface BookMetaBackendInfo {

    // Own fields of EDataBook-1.2.EDataBook.BookMetaBackendInfo

    uid: string
    revision: string
    object: string
    extra: string

    // Owm methods of EDataBook-1.2.EDataBook.BookMetaBackendInfo

    copy(): BookMetaBackendInfo | null
}

class BookMetaBackendInfo {

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
     */
    constructor(uid: string, revision: string | null, object: string | null, extra: string | null) 
    /**
     * Creates a new #EBookMetaBackendInfo prefilled with the given values.
     * @constructor 
     * @param uid a contact UID; cannot be %NULL
     * @param revision the contact revision; can be %NULL
     * @param object the contact object as a vCard string; can be %NULL
     * @param extra extra backend-specific data; can be %NULL
     */
    static new(uid: string, revision: string | null, object: string | null, extra: string | null): BookMetaBackendInfo
    /**
     * Frees the `ptr` structure, previously allocated with e_book_meta_backend_info_new()
     * or e_book_meta_backend_info_copy().
     * @param ptr an #EBookMetaBackendInfo
     */
    static free(ptr: object | null): void
}

interface BookMetaBackendPrivate {
}

class BookMetaBackendPrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookMetaBackendPrivate

    static name: string
}

interface BookSqliteClass {

    // Own fields of EDataBook-1.2.EDataBook.BookSqliteClass

    beforeInsertContact: (ebsql: BookSqlite, db: object | null, contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable: Gio.Cancellable | null) => boolean
    beforeRemoveContact: (ebsql: BookSqlite, db: object | null, contactUid: string, cancellable: Gio.Cancellable | null) => boolean
}

/**
 * Class structure for the #EBookSqlite class.
 * @record 
 */
abstract class BookSqliteClass {

    // Own properties of EDataBook-1.2.EDataBook.BookSqliteClass

    static name: string
}

interface BookSqlitePrivate {
}

class BookSqlitePrivate {

    // Own properties of EDataBook-1.2.EDataBook.BookSqlitePrivate

    static name: string
}

interface DataBookClass {
}

abstract class DataBookClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookClass

    static name: string
}

interface DataBookCursorCacheClass {
}

/**
 * The #EBookCache cursor class structure.
 * @record 
 */
abstract class DataBookCursorCacheClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorCacheClass

    static name: string
}

interface DataBookCursorCachePrivate {
}

class DataBookCursorCachePrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorCachePrivate

    static name: string
}

interface DataBookCursorClass {

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
abstract class DataBookCursorClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorClass

    static name: string
}

interface DataBookCursorPrivate {
}

class DataBookCursorPrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorPrivate

    static name: string
}

interface DataBookCursorSqliteClass {
}

/**
 * The SQLite cursor class structure.
 * @record 
 */
abstract class DataBookCursorSqliteClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorSqliteClass

    static name: string
}

interface DataBookCursorSqlitePrivate {
}

class DataBookCursorSqlitePrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookCursorSqlitePrivate

    static name: string
}

interface DataBookDirectClass {

    // Own fields of EDataBook-1.2.EDataBook.DataBookDirectClass

    parent: GObject.ObjectClass
}

abstract class DataBookDirectClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookDirectClass

    static name: string
}

interface DataBookDirectPrivate {
}

class DataBookDirectPrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookDirectPrivate

    static name: string
}

interface DataBookFactoryClass {

    // Own fields of EDataBook-1.2.EDataBook.DataBookFactoryClass

    parentClass: EBackend.DataFactoryClass
}

abstract class DataBookFactoryClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookFactoryClass

    static name: string
}

interface DataBookFactoryPrivate {
}

class DataBookFactoryPrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookFactoryPrivate

    static name: string
}

interface DataBookPrivate {
}

class DataBookPrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookPrivate

    static name: string
}

interface DataBookViewClass {

    // Own fields of EDataBook-1.2.EDataBook.DataBookViewClass

    parent: GObject.ObjectClass
}

abstract class DataBookViewClass {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewClass

    static name: string
}

interface DataBookViewPrivate {
}

class DataBookViewPrivate {

    // Own properties of EDataBook-1.2.EDataBook.DataBookViewPrivate

    static name: string
}

interface SubprocessBookFactoryClass {

    // Own fields of EDataBook-1.2.EDataBook.SubprocessBookFactoryClass

    parentClass: EBackend.SubprocessFactoryClass
}

abstract class SubprocessBookFactoryClass {

    // Own properties of EDataBook-1.2.EDataBook.SubprocessBookFactoryClass

    static name: string
}

interface SubprocessBookFactoryPrivate {
}

class SubprocessBookFactoryPrivate {

    // Own properties of EDataBook-1.2.EDataBook.SubprocessBookFactoryPrivate

    static name: string
}

interface SystemLocaleWatcherClass {

    // Own fields of EDataBook-1.2.EDataBook.SystemLocaleWatcherClass

    parentClass: GObject.ObjectClass
}

abstract class SystemLocaleWatcherClass {

    // Own properties of EDataBook-1.2.EDataBook.SystemLocaleWatcherClass

    static name: string
}

interface SystemLocaleWatcherPrivate {
}

class SystemLocaleWatcherPrivate {

    // Own properties of EDataBook-1.2.EDataBook.SystemLocaleWatcherPrivate

    static name: string
}

interface bSqlCursor {
}

/**
 * An opaque cursor pointer
 * @record 
 */
class bSqlCursor {

    // Own properties of EDataBook-1.2.EDataBook.bSqlCursor

    static name: string
}

interface bSqlSearchData {

    // Own fields of EDataBook-1.2.EDataBook.bSqlSearchData

    /**
     * The %E_CONTACT_UID field of this contact
     * @field 
     */
    uid: string
    /**
     * The the vcard string
     * @field 
     */
    vcard: string
    /**
     * Any extra data associated to the vcard
     * @field 
     */
    extra: string
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
class bSqlSearchData {

    // Own properties of EDataBook-1.2.EDataBook.bSqlSearchData

    static name: string
}

}
export default EDataBook;