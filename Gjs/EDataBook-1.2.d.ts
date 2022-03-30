/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EDataBook-1.2
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
function book_cache_search_data_free(data?: object | null): void
function book_meta_backend_info_free(ptr?: object | null): void
function ebsql_get_contact_extra_unlocked(ebsql: BookSqlite, uid: string): [ /* returnType */ boolean, /* ret_extra */ string ]
function ebsql_get_contact_unlocked(ebsql: BookSqlite, uid: string, meta_contact: boolean): [ /* returnType */ boolean, /* contact */ EBookContacts.Contact ]
function ebsql_get_vcard_unlocked(ebsql: BookSqlite, uid: string, meta_contact: boolean): [ /* returnType */ boolean, /* ret_vcard */ string ]
/**
 * A callback prototype being called in a dedicated thread, scheduled
 * by e_book_backend_schedule_custom_operation().
 */
interface BookBackendCustomOpFunc {
    (book_backend: BookBackend, cancellable?: Gio.Cancellable | null): void
}
/**
 * Callback function used by e_book_backend_foreach_view().
 */
interface BookBackendForeachViewFunc {
    (backend: BookBackend, view: DataBookView): boolean
}
/**
 * A callback called for each object row when using
 * e_book_cache_search_with_callback() function.
 */
interface BookCacheSearchFunc {
    (book_cache: BookCache, uid: string, revision: string, object: string, extra: string, custom_flags: number, offline_state: EBackend.OfflineState): boolean
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
 */
interface DataBookCursorGetPositionFunc {
    (cursor: DataBookCursor, cancellable?: Gio.Cancellable | null): boolean
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
 */
interface DataBookCursorSetSexpFunc {
    (cursor: DataBookCursor, sexp?: string | null): boolean
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
 */
interface DataBookCursorStepFunc {
    (cursor: DataBookCursor, revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): number
}
/**
 * A function which may be called in response to a change
 * in contact data.
 * 
 * <note><para>This user callback is called inside a lock,
 * you must not call the #EBookSqlite API from
 * this callback.</para></note>
 */
interface bSqlChangeCallback {
    (change_type: bSqlChangeType, uid: string, extra: string, vcard: string): void
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
 */
interface bSqlVCardCallback {
    (uid: string, extra: string): string
}
interface BookBackend_ConstructProps extends EBackend.Backend_ConstructProps {
    /* Constructor properties of EDataBook-1.2.EDataBook.BookBackend */
    cache_dir?: string
    registry?: EDataServer.SourceRegistry
    writable?: boolean
}
class BookBackend {
    /* Properties of EDataBook-1.2.EDataBook.BookBackend */
    cache_dir: string
    readonly proxy_resolver: Gio.ProxyResolver
    readonly registry: EDataServer.SourceRegistry
    writable: boolean
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly main_context: GLib.MainContext
    online: boolean
    readonly source: EDataServer.Source
    readonly user_prompter: EBackend.UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.BookBackend */
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
    configure_direct(config: string): void
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
    contains_email(email_address: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_contains_email().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
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
     */
    contains_email_sync(email_address: string, cancellable?: Gio.Cancellable | null): boolean
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
    create_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    create_contacts_sync(vcards: string, opflags: number, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
     */
    create_cursor(sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number): DataBookCursor
    /**
     * Requests `backend` to release and destroy `cursor,` this
     * will trigger an %E_CLIENT_ERROR_INVALID_ARG error if `cursor`
     * is not owned by `backend`.
     * @param cursor the #EDataBookCursor to destroy
     */
    delete_cursor(cursor: DataBookCursor): boolean
    /**
     * Thread-safe variation of e_book_backend_get_cache_dir().
     * Use this function when accessing `backend` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dup_cache_dir(): string
    /**
     * Fetches a copy of the currently configured locale for the addressbook
     */
    dup_locale(): string
    /**
     * Calls `func` for each existing view (as returned by e_book_backend_list_views()).
     * The `func` can return %FALSE to stop early.
     */
    foreach_view(): boolean
    /**
     * Notifies each view of the `backend` about progress. When `only_completed_views`
     * is %TRUE, notifies only completed views.
     * @param only_completed_views whether notify in completed views only
     * @param percent percent complete
     * @param message message describing the operation in progress, or %NULL
     */
    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void
    /**
     * Obtains the value of the backend property named `prop_name`.
     * Freed the returned string with g_free() when finished with it.
     * @param prop_name a backend property name
     */
    get_backend_property(prop_name: string): string
    /**
     * Returns the cache directory path used by `backend`.
     */
    get_cache_dir(): string
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
    get_contact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_get_contact_finish().
     * 
     * The returned #EContact is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * 
     * If an error occurred, the function will set `error` and return %NULL.
     * @param result a #GAsyncResult
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
    get_contact_list(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    get_contact_list_sync(query: string, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    get_contact_list_uids_sync(query: string, out_uids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    /**
     * Tries to create an #EDataBookDirect for `backend` if
     * backend supports direct read access.
     */
    get_direct_book(): DataBookDirect | null
    /**
     * Returns the data source registry to which #EBackend:source belongs.
     */
    get_registry(): EDataServer.SourceRegistry
    /**
     * Returns whether `backend` will accept changes to its data content.
     */
    get_writable(): boolean
    /**
     * Checks if `backend'`s storage has been opened (and
     * authenticated, if necessary) and the backend itself
     * is ready for accessing. This property is changed automatically
     * after the `backend` is successfully opened.
     */
    is_opened(): boolean
    /**
     * Checks if we can write to `backend`.
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
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
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
    modify_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_modify_contacts().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    modify_contacts_finish(result: Gio.AsyncResult): boolean
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    modify_contacts_sync(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
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
    notify_error(message: string): void
    /**
     * Notifies clients about property value change.
     * @param prop_name property name, which changed
     * @param prop_value new property value
     */
    notify_property_changed(prop_name: string, prop_value?: string | null): void
    /**
     * Notifies all of `backend'`s book views that the contact with UID
     * `id` has been removed.
     * 
     * e_data_book_respond_remove_contacts() calls this function for you. You
     * only need to call this from your backend if contacts are removed by
     * another (non-PAS-using) client.
     * @param id a contact id
     */
    notify_remove(id: string): void
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
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_open().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
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
     */
    open_sync(cancellable?: Gio.Cancellable | null): boolean
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
     */
    ref_data_book(): DataBook | null
    /**
     * Returns the #GProxyResolver for `backend` (if applicable), as indicated
     * by the #ESourceAuthentication:proxy-uid of `backend'`s #EBackend:source
     * or one of its ancestors.
     * 
     * The returned #GProxyResolver is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
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
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the refresh initiation started with e_book_backend_refresh().
     * 
     * If an error occurred while initiating the refresh, the function will set
     * `error` and return %FALSE.  If the `backend` does not support refreshing,
     * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
     * %FALSE.
     * @param result a #GAsyncResult
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
     */
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
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
    remove_contacts(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_remove_contacts().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    remove_contacts_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove_contacts_sync(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
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
    set_cache_dir(cache_dir: string): void
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
     */
    set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
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
    /* Methods of EBackend-1.2.EBackend.Backend */
    /**
     * Asynchronously calls the e_backend_credentials_required_sync() on the `backend,`
     * to inform clients that credentials are required.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_credentials_required_finish() to get the result of the operation.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
     * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param op_error a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_credentials_required().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    credentials_required_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously lets the clients know that the backned requires credentials to be
     * properly opened. It's a proxy function for e_source_invoke_credentials_required_sync(),
     * where can be found more information about actual parameters meaning.
     * 
     * The provided credentials are received through #EBackendClass.authenticate_sync()
     * method asynchronously.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
     * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param op_error a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    credentials_required_sync(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Makes sure that the "online" property is updated, that is, if there
     * is any destination reachability test pending, it'll be done immediately
     * and the only state will be updated as well.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void
    /**
     * Makes sure that the associated ESource::connection-status is connected. This is
     * useful in cases when the backend can connect to the destination without invoking
     * #EBackendClass.authenticate_sync(), possibly through e_backend_schedule_authenticate().
     */
    ensure_source_status_connected(): void
    /**
     * Provides destination server host name and port to which
     * the backend connects. This is used to determine required
     * connection point for e_backend_is_destination_reachable().
     * The `host` is a newly allocated string, which will be freed
     * with g_free(). When `backend` sets both `host` and `port,` then
     * it should return %TRUE, indicating it's a remote backend.
     * Default implementation returns %FALSE, which is treated
     * like the backend is local, no checking for server reachability
     * is possible.
     */
    get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    /**
     * Returns the online state of `backend:` %TRUE if `backend` is online,
     * %FALSE if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     */
    get_online(): boolean
    /**
     * Returns the #ESource to which `backend` is paired.
     */
    get_source(): EDataServer.Source
    /**
     * Gets an instance of #EUserPrompter, associated with this `backend`.
     * 
     * The returned instance is owned by the `backend`.
     */
    get_user_prompter(): object | null
    /**
     * Checks whether the `backend<`!-- -->'s destination server, as returned
     * by e_backend_get_destination_address(), is reachable.
     * If the e_backend_get_destination_address() returns %FALSE, this function
     * returns %TRUE, meaning the destination is always reachable.
     * This uses #GNetworkMonitor<!-- -->'s g_network_monitor_can_reach()
     * for reachability tests.
     * @param cancellable a #GCancellable instance, or %NULL
     */
    is_destination_reachable(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Let's the `backend` know that it'll be shut down shortly, no client connects
     * to it anymore. The `backend` can free any resources which reference it, for
     * example the opened views.
     */
    prepare_shutdown(): void
    /**
     * Returns the socket endpoint for the network service to which `backend`
     * is a client, or %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * 
     * The returned #GSocketConnectable is referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with it.
     */
    ref_connectable(): Gio.SocketConnectable | null
    /**
     * Returns the #GMainContext on which event sources for `backend` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     */
    ref_main_context(): GLib.MainContext
    /**
     * Schedules a new authenticate session, cancelling any previously run.
     * This is usually done automatically, when an 'authenticate' signal is
     * received for the associated #ESource. With %NULL `credentials` an attempt
     * without it is run.
     * @param credentials a credentials to use to authenticate, or %NULL
     */
    schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void
    /**
     * Asynchronously invokes e_backend_credentials_required(), but installs its
     * own callback which only prints a runtime warning on the console when
     * the call fails. The `who_calls` is a prefix of the console message.
     * This is useful when the caller just wants to start the operation
     * without having actual place where to show the operation result.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
     * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param op_error a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param who_calls an identification who calls this
     */
    schedule_credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, who_calls?: string | null): void
    /**
     * Sets the socket endpoint for the network service to which `backend` is
     * a client.  This can be %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * @param connectable a #GSocketConnectable, or %NULL
     */
    set_connectable(connectable: Gio.SocketConnectable): void
    /**
     * Sets the online state of `backend:` %TRUE if `backend` is online,
     * `FALSE` if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     * @param online the online state
     */
    set_online(online: boolean): void
    /**
     * Initiates a user trust prompt with given `parameters`.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_trust_prompt_finish() to get the result of the operation.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    trust_prompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_trust_prompt().
     * If an error occurred, the function will set `error` and return
     * %E_TRUST_PROMPT_RESPONSE_UNKNOWN.
     * @param result a #GAsyncResult
     */
    trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    /**
     * Asks a user a trust prompt with given `parameters,` and returns what
     * user responded. This blocks until the response is delivered.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     */
    trust_prompt_sync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
    /* Virtual methods of EDataBook-1.2.EDataBook.BookBackend */
    vfunc_closed(sender: string): void
    vfunc_impl_configure_direct(config: string): void
    vfunc_impl_contains_email(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, email_address: string): void
    vfunc_impl_create_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfunc_impl_delete_cursor(cursor: DataBookCursor): boolean
    vfunc_impl_dup_locale(): string
    vfunc_impl_get_backend_property(prop_name: string): string
    vfunc_impl_get_contact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string): void
    vfunc_impl_get_contact_list(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfunc_impl_get_contact_list_uids(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfunc_impl_modify_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfunc_impl_notify_update(contact: EBookContacts.Contact): void
    vfunc_impl_open(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_refresh(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_remove_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number): void
    vfunc_impl_set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_impl_start_view(view: DataBookView): void
    vfunc_impl_stop_view(view: DataBookView): void
    vfunc_shutdown(): void
    /* Virtual methods of EBackend-1.2.EBackend.Backend */
    vfunc_authenticate_sync(credentials: EDataServer.NamedParameters, out_certificate_pem: string, out_certificate_errors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    /**
     * Provides destination server host name and port to which
     * the backend connects. This is used to determine required
     * connection point for e_backend_is_destination_reachable().
     * The `host` is a newly allocated string, which will be freed
     * with g_free(). When `backend` sets both `host` and `port,` then
     * it should return %TRUE, indicating it's a remote backend.
     * Default implementation returns %FALSE, which is treated
     * like the backend is local, no checking for server reachability
     * is possible.
     */
    vfunc_get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    /**
     * Let's the `backend` know that it'll be shut down shortly, no client connects
     * to it anymore. The `backend` can free any resources which reference it, for
     * example the opened views.
     */
    vfunc_prepare_shutdown(): void
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
    /* Signals of EDataBook-1.2.EDataBook.BookBackend */
    /**
     * Emitted when a client destroys its #EBookClient for `backend`.
     * @param sender the bus name that invoked the "close" method
     */
    connect(sigName: "closed", callback: (($obj: BookBackend, sender: string) => void)): number
    connect_after(sigName: "closed", callback: (($obj: BookBackend, sender: string) => void)): number
    emit(sigName: "closed", sender: string): void
    /**
     * Emitted when the last client destroys its #EBookClient for
     * `backend`.  This signals the `backend` to begin final cleanup
     * tasks such as synchronizing data to permanent storage.
     */
    connect(sigName: "shutdown", callback: (($obj: BookBackend) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: BookBackend) => void)): number
    emit(sigName: "shutdown"): void
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
    connect(sigName: "notify", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache-dir", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::registry", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-prompter", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookBackend_ConstructProps)
    _init (config?: BookBackend_ConstructProps): void
    static $gtype: GObject.Type
}
interface BookBackendFactory_ConstructProps extends EBackend.BackendFactory_ConstructProps {
}
class BookBackendFactory {
    /* Properties of EDataServer-1.2.EDataServer.Extension */
    readonly extensible: EDataServer.Extensible
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.BackendFactory */
    /**
     * Returns a hash key which uniquely identifies `factory`.
     * 
     * Since only one instance of each #EBackendFactory subclass is ever created,
     * the hash key need only be unique among subclasses, not among instances of
     * each subclass.
     */
    get_hash_key(): string
    /**
     * Returns the filename of the shared library for the module used
     * to load the backends provided by `factory`.
     */
    get_module_filename(): string
    /**
     * Returns a new #EBackend instance for `source`.
     * @param source an #ESource
     */
    new_backend(source: EDataServer.Source): EBackend.Backend
    /**
     * Returns TRUE if the `factory` wants to share the subprocess
     * for all backends provided by itself. Otherwise, returns FALSE.
     */
    share_subprocess(): boolean
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    /**
     * Returns the object that `extension` extends.
     */
    get_extensible(): EDataServer.Extensible
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
    /* Virtual methods of EBackend-1.2.EBackend.BackendFactory */
    /**
     * Returns a hash key which uniquely identifies `factory`.
     * 
     * Since only one instance of each #EBackendFactory subclass is ever created,
     * the hash key need only be unique among subclasses, not among instances of
     * each subclass.
     */
    vfunc_get_hash_key(): string
    /**
     * Returns a new #EBackend instance for `source`.
     * @param source an #ESource
     */
    vfunc_new_backend(source: EDataServer.Source): EBackend.Backend
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
    connect(sigName: "notify", callback: (($obj: BookBackendFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookBackendFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::extensible", callback: (($obj: BookBackendFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extensible", callback: (($obj: BookBackendFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookBackendFactory_ConstructProps)
    _init (config?: BookBackendFactory_ConstructProps): void
    static $gtype: GObject.Type
}
interface BookBackendSExp_ConstructProps extends GObject.Object_ConstructProps {
}
class BookBackendSExp {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.BookBackendSExp */
    /**
     * Locks the `sexp`. Other threads cannot use it until
     * it's unlocked with e_book_backend_sexp_unlock().
     */
    lock(): void
    /**
     * Checks if `contact` matches `sexp`.
     * @param contact an #EContact
     */
    match_contact(contact: EBookContacts.Contact): boolean
    /**
     * Checks if `vcard` matches `sexp`.
     * @param vcard a vCard string
     */
    match_vcard(vcard: string): boolean
    /**
     * Retrieve the text expression for the given #EBookBackendSExp object.
     */
    text(): string
    /**
     * Unlocks the `sexp,` previously locked by e_book_backend_sexp_lock().
     */
    unlock(): void
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
    connect(sigName: "notify", callback: (($obj: BookBackendSExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookBackendSExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookBackendSExp_ConstructProps)
    _init (config?: BookBackendSExp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text: string): BookBackendSExp
    static $gtype: GObject.Type
}
interface BookBackendSync_ConstructProps extends BookBackend_ConstructProps {
}
class BookBackendSync {
    /* Properties of EDataBook-1.2.EDataBook.BookBackend */
    cache_dir: string
    readonly proxy_resolver: Gio.ProxyResolver
    readonly registry: EDataServer.SourceRegistry
    writable: boolean
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly main_context: GLib.MainContext
    online: boolean
    readonly source: EDataServer.Source
    readonly user_prompter: EBackend.UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.BookBackendSync */
    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param email_address an email address
     * @param cancellable optional #GCancellable object, or %NULL
     */
    contains_email(email_address: string, cancellable?: Gio.Cancellable | null): boolean
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
    create_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
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
    get_contact(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
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
    get_contact_list(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
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
    get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    modify_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    /**
     * "Opens" the `backend`.  Opening a backend is something of an outdated
     * concept, but the operation is hanging around for a little while longer.
     * This usually involves some custom initialization logic, and testing of
     * remote authentication if applicable.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    open(cancellable?: Gio.Cancellable | null): boolean
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
    refresh(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove_contacts(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_removed_uids */ string[] ]
    /* Methods of EDataBook-1.2.EDataBook.BookBackend */
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
    configure_direct(config: string): void
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
    contains_email(email_address: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_contains_email().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
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
     */
    contains_email_sync(email_address: string, cancellable?: Gio.Cancellable | null): boolean
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
    create_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    create_contacts_sync(vcards: string, opflags: number, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
     */
    create_cursor(sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number): DataBookCursor
    /**
     * Requests `backend` to release and destroy `cursor,` this
     * will trigger an %E_CLIENT_ERROR_INVALID_ARG error if `cursor`
     * is not owned by `backend`.
     * @param cursor the #EDataBookCursor to destroy
     */
    delete_cursor(cursor: DataBookCursor): boolean
    /**
     * Thread-safe variation of e_book_backend_get_cache_dir().
     * Use this function when accessing `backend` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dup_cache_dir(): string
    /**
     * Fetches a copy of the currently configured locale for the addressbook
     */
    dup_locale(): string
    /**
     * Calls `func` for each existing view (as returned by e_book_backend_list_views()).
     * The `func` can return %FALSE to stop early.
     */
    foreach_view(): boolean
    /**
     * Notifies each view of the `backend` about progress. When `only_completed_views`
     * is %TRUE, notifies only completed views.
     * @param only_completed_views whether notify in completed views only
     * @param percent percent complete
     * @param message message describing the operation in progress, or %NULL
     */
    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void
    /**
     * Obtains the value of the backend property named `prop_name`.
     * Freed the returned string with g_free() when finished with it.
     * @param prop_name a backend property name
     */
    get_backend_property(prop_name: string): string
    /**
     * Returns the cache directory path used by `backend`.
     */
    get_cache_dir(): string
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
    get_contact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_get_contact_finish().
     * 
     * The returned #EContact is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * 
     * If an error occurred, the function will set `error` and return %NULL.
     * @param result a #GAsyncResult
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
    get_contact_list(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    get_contact_list_sync(query: string, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    get_contact_list_uids_sync(query: string, out_uids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    /**
     * Tries to create an #EDataBookDirect for `backend` if
     * backend supports direct read access.
     */
    get_direct_book(): DataBookDirect | null
    /**
     * Returns the data source registry to which #EBackend:source belongs.
     */
    get_registry(): EDataServer.SourceRegistry
    /**
     * Returns whether `backend` will accept changes to its data content.
     */
    get_writable(): boolean
    /**
     * Checks if `backend'`s storage has been opened (and
     * authenticated, if necessary) and the backend itself
     * is ready for accessing. This property is changed automatically
     * after the `backend` is successfully opened.
     */
    is_opened(): boolean
    /**
     * Checks if we can write to `backend`.
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
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
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
    modify_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_modify_contacts().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    modify_contacts_finish(result: Gio.AsyncResult): boolean
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    modify_contacts_sync(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
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
    notify_error(message: string): void
    /**
     * Notifies clients about property value change.
     * @param prop_name property name, which changed
     * @param prop_value new property value
     */
    notify_property_changed(prop_name: string, prop_value?: string | null): void
    /**
     * Notifies all of `backend'`s book views that the contact with UID
     * `id` has been removed.
     * 
     * e_data_book_respond_remove_contacts() calls this function for you. You
     * only need to call this from your backend if contacts are removed by
     * another (non-PAS-using) client.
     * @param id a contact id
     */
    notify_remove(id: string): void
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
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_open().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
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
     */
    open_sync(cancellable?: Gio.Cancellable | null): boolean
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
     */
    ref_data_book(): DataBook | null
    /**
     * Returns the #GProxyResolver for `backend` (if applicable), as indicated
     * by the #ESourceAuthentication:proxy-uid of `backend'`s #EBackend:source
     * or one of its ancestors.
     * 
     * The returned #GProxyResolver is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
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
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the refresh initiation started with e_book_backend_refresh().
     * 
     * If an error occurred while initiating the refresh, the function will set
     * `error` and return %FALSE.  If the `backend` does not support refreshing,
     * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
     * %FALSE.
     * @param result a #GAsyncResult
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
     */
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
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
    remove_contacts(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_remove_contacts().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    remove_contacts_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove_contacts_sync(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
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
    set_cache_dir(cache_dir: string): void
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
     */
    set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
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
    /* Methods of EBackend-1.2.EBackend.Backend */
    /**
     * Asynchronously calls the e_backend_credentials_required_sync() on the `backend,`
     * to inform clients that credentials are required.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_credentials_required_finish() to get the result of the operation.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
     * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param op_error a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_credentials_required().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    credentials_required_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously lets the clients know that the backned requires credentials to be
     * properly opened. It's a proxy function for e_source_invoke_credentials_required_sync(),
     * where can be found more information about actual parameters meaning.
     * 
     * The provided credentials are received through #EBackendClass.authenticate_sync()
     * method asynchronously.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
     * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param op_error a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    credentials_required_sync(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Makes sure that the "online" property is updated, that is, if there
     * is any destination reachability test pending, it'll be done immediately
     * and the only state will be updated as well.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void
    /**
     * Makes sure that the associated ESource::connection-status is connected. This is
     * useful in cases when the backend can connect to the destination without invoking
     * #EBackendClass.authenticate_sync(), possibly through e_backend_schedule_authenticate().
     */
    ensure_source_status_connected(): void
    /**
     * Provides destination server host name and port to which
     * the backend connects. This is used to determine required
     * connection point for e_backend_is_destination_reachable().
     * The `host` is a newly allocated string, which will be freed
     * with g_free(). When `backend` sets both `host` and `port,` then
     * it should return %TRUE, indicating it's a remote backend.
     * Default implementation returns %FALSE, which is treated
     * like the backend is local, no checking for server reachability
     * is possible.
     */
    get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    /**
     * Returns the online state of `backend:` %TRUE if `backend` is online,
     * %FALSE if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     */
    get_online(): boolean
    /**
     * Returns the #ESource to which `backend` is paired.
     */
    get_source(): EDataServer.Source
    /**
     * Gets an instance of #EUserPrompter, associated with this `backend`.
     * 
     * The returned instance is owned by the `backend`.
     */
    get_user_prompter(): object | null
    /**
     * Checks whether the `backend<`!-- -->'s destination server, as returned
     * by e_backend_get_destination_address(), is reachable.
     * If the e_backend_get_destination_address() returns %FALSE, this function
     * returns %TRUE, meaning the destination is always reachable.
     * This uses #GNetworkMonitor<!-- -->'s g_network_monitor_can_reach()
     * for reachability tests.
     * @param cancellable a #GCancellable instance, or %NULL
     */
    is_destination_reachable(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Let's the `backend` know that it'll be shut down shortly, no client connects
     * to it anymore. The `backend` can free any resources which reference it, for
     * example the opened views.
     */
    prepare_shutdown(): void
    /**
     * Returns the socket endpoint for the network service to which `backend`
     * is a client, or %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * 
     * The returned #GSocketConnectable is referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with it.
     */
    ref_connectable(): Gio.SocketConnectable | null
    /**
     * Returns the #GMainContext on which event sources for `backend` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     */
    ref_main_context(): GLib.MainContext
    /**
     * Schedules a new authenticate session, cancelling any previously run.
     * This is usually done automatically, when an 'authenticate' signal is
     * received for the associated #ESource. With %NULL `credentials` an attempt
     * without it is run.
     * @param credentials a credentials to use to authenticate, or %NULL
     */
    schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void
    /**
     * Asynchronously invokes e_backend_credentials_required(), but installs its
     * own callback which only prints a runtime warning on the console when
     * the call fails. The `who_calls` is a prefix of the console message.
     * This is useful when the caller just wants to start the operation
     * without having actual place where to show the operation result.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
     * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param op_error a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param who_calls an identification who calls this
     */
    schedule_credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, who_calls?: string | null): void
    /**
     * Sets the socket endpoint for the network service to which `backend` is
     * a client.  This can be %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * @param connectable a #GSocketConnectable, or %NULL
     */
    set_connectable(connectable: Gio.SocketConnectable): void
    /**
     * Sets the online state of `backend:` %TRUE if `backend` is online,
     * `FALSE` if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     * @param online the online state
     */
    set_online(online: boolean): void
    /**
     * Initiates a user trust prompt with given `parameters`.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_trust_prompt_finish() to get the result of the operation.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    trust_prompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_trust_prompt().
     * If an error occurred, the function will set `error` and return
     * %E_TRUST_PROMPT_RESPONSE_UNKNOWN.
     * @param result a #GAsyncResult
     */
    trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    /**
     * Asks a user a trust prompt with given `parameters,` and returns what
     * user responded. This blocks until the response is delivered.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     */
    trust_prompt_sync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
    /* Virtual methods of EDataBook-1.2.EDataBook.BookBackendSync */
    vfunc_contains_email_sync(email_address: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_open_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataBook-1.2.EDataBook.BookBackend */
    vfunc_closed(sender: string): void
    vfunc_impl_configure_direct(config: string): void
    vfunc_impl_contains_email(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, email_address: string): void
    vfunc_impl_create_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfunc_impl_delete_cursor(cursor: DataBookCursor): boolean
    vfunc_impl_dup_locale(): string
    vfunc_impl_get_backend_property(prop_name: string): string
    vfunc_impl_get_contact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string): void
    vfunc_impl_get_contact_list(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfunc_impl_get_contact_list_uids(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfunc_impl_modify_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfunc_impl_notify_update(contact: EBookContacts.Contact): void
    vfunc_impl_open(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_refresh(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_remove_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number): void
    vfunc_impl_set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_impl_start_view(view: DataBookView): void
    vfunc_impl_stop_view(view: DataBookView): void
    vfunc_shutdown(): void
    /* Virtual methods of EBackend-1.2.EBackend.Backend */
    vfunc_authenticate_sync(credentials: EDataServer.NamedParameters, out_certificate_pem: string, out_certificate_errors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    /**
     * Provides destination server host name and port to which
     * the backend connects. This is used to determine required
     * connection point for e_backend_is_destination_reachable().
     * The `host` is a newly allocated string, which will be freed
     * with g_free(). When `backend` sets both `host` and `port,` then
     * it should return %TRUE, indicating it's a remote backend.
     * Default implementation returns %FALSE, which is treated
     * like the backend is local, no checking for server reachability
     * is possible.
     */
    vfunc_get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    /**
     * Let's the `backend` know that it'll be shut down shortly, no client connects
     * to it anymore. The `backend` can free any resources which reference it, for
     * example the opened views.
     */
    vfunc_prepare_shutdown(): void
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
    /* Signals of EDataBook-1.2.EDataBook.BookBackend */
    /**
     * Emitted when a client destroys its #EBookClient for `backend`.
     * @param sender the bus name that invoked the "close" method
     */
    connect(sigName: "closed", callback: (($obj: BookBackendSync, sender: string) => void)): number
    connect_after(sigName: "closed", callback: (($obj: BookBackendSync, sender: string) => void)): number
    emit(sigName: "closed", sender: string): void
    /**
     * Emitted when the last client destroys its #EBookClient for
     * `backend`.  This signals the `backend` to begin final cleanup
     * tasks such as synchronizing data to permanent storage.
     */
    connect(sigName: "shutdown", callback: (($obj: BookBackendSync) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: BookBackendSync) => void)): number
    emit(sigName: "shutdown"): void
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
    connect(sigName: "notify", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache-dir", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::registry", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-prompter", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookBackendSync_ConstructProps)
    _init (config?: BookBackendSync_ConstructProps): void
    static $gtype: GObject.Type
}
interface BookCache_ConstructProps extends EBackend.Cache_ConstructProps {
}
class BookCache {
    /* Properties of EDataBook-1.2.EDataBook.BookCache */
    readonly locale: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.BookCache */
    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the cache.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param email_address an email address to check for
     * @param cancellable optional #GCancellable object, or %NULL
     */
    contains_email(email_address: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Calculates the `out_total` amount of results for the `cursor'`s query expression,
     * as well as the current `out_position` of `cursor` in the results. The `out_position` is
     * represented as the amount of results which lead up to the current value
     * of `cursor,` if `cursor` currently points to an exact contact, the position
     * also includes the cursor contact.
     * @param cursor The #EBookCacheCursor
     * @param cancellable optional #GCancellable object, or %NULL
     */
    cursor_calculate(cursor: BookCacheCursor, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_total */ number | null, /* out_position */ number | null ]
    /**
     * Compares `contact` with `cursor` and returns whether `contact` is less than, equal to, or greater
     * than `cursor`.
     * @param cursor The #EBookCacheCursor
     * @param contact The #EContact to compare
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
     */
    cursor_set_sexp(cursor: BookCacheCursor, sexp: string): boolean
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
     */
    cursor_step(cursor: BookCacheCursor, flags: BookCacheCursorStepFlags, origin: BookCacheCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* out_results */ BookCacheSearchData[] | null ]
    /**
     * Returns the `contact` revision, used to detect changes.
     * The returned string should be freed with g_free(), when
     * no longer needed.
     * @param contact an #EContact
     */
    dup_contact_revision(contact: EBookContacts.Contact): string
    dup_locale(): string
    /**
     * Fetch the #EContact specified by `uid` in `book_cache`.
     * 
     * If `meta_contact` is specified, then a shallow #EContact will be created
     * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param meta_contact Whether an entire contact is desired, or only the metadata
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_contact(uid: string, meta_contact: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact ]
    /**
     * Gets the custom flags previously set for the `uid,` either with
     * e_book_cache_set_contact_custom_flags(), when adding contacts or
     * when removing contacts in offline.
     * @param uid The uid of the contact to set the extra data for
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_contact_custom_flags(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_custom_flags */ number ]
    /**
     * Fetches the extra data previously set for `uid,` either with
     * e_book_cache_set_contact_extra() or when adding contacts.
     * @param uid The uid of the contact to fetch the extra data for
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_contact_extra(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_extra */ string ]
    /**
     * Gets all the UID-s the `extra` data is set for.
     * 
     * The `out_uids` should be freed with
     * g_slist_free_full (uids, g_free);
     * when no longer needed.
     * @param extra an extra column value to search for
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_uids_with_extra(extra: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    /**
     * Fetch a vCard string for `uid` in `book_cache`.
     * 
     * If `meta_contact` is specified, then a shallow vCard representation will be
     * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param meta_contact Whether an entire contact is desired, or only the metadata
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_vcard(uid: string, meta_contact: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_vcard */ string ]
    /**
     * This is a convenience wrapper for e_book_cache_put_contacts(),
     * which is the preferred way to add or modify multiple contacts when possible.
     * @param contact an #EContact to be added
     * @param extra extra data to store in association with this `contact`
     * @param custom_flags custom flags for the `contact,` not interpreted by the `book_cache`
     * @param offline_flag one of #ECacheOfflineFlag, whether putting this contact in offline
     * @param cancellable optional #GCancellable object, or %NULL
     */
    put_contact(contact: EBookContacts.Contact, extra: string | null, custom_flags: number, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
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
     */
    put_contacts(contacts: EBookContacts.Contact[], extras: string[] | null, custom_flags: number[] | null, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    /**
     * References the currently active #ECollator for `book_cache,`
     * use e_collator_unref() when finished using the returned collator.
     * 
     * Note that the active collator will change with the active locale setting.
     */
    ref_collator(): EDataServer.Collator
    /**
     * References the #ESource to which `book_cache` is paired,
     * use g_object_unref() when no longer needed.
     * It can be %NULL in some cases, like when running tests.
     */
    ref_source(): EDataServer.Source | null
    /**
     * Removes the contact identified by `uid` from `book_cache`.
     * @param uid the uid of the contact to remove
     * @param custom_flags custom flags for the contact with the given `uid,` not interpreted by the `book_cache`
     * @param offline_flag one of #ECacheOfflineFlag, whether removing this contact in offline
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove_contact(uid: string, custom_flags: number, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the contacts indicated by `uids` from `book_cache`.
     * The `custom_flags` is used, if not %NULL, only if the `offline_flag`
     * is %E_CACHE_IS_OFFLINE. Otherwise it's ignored. The length of
     * the `custom_flags` should match the length of `uids,` when not %NULL.
     * @param uids a #GSList of uids indicating which contacts to remove
     * @param custom_flags an optional #GSList of custom flags for the `ids`
     * @param offline_flag one of #ECacheOfflineFlag, whether removing these contacts in offline
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove_contacts(uids: string[], custom_flags: number[] | null, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
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
     */
    search(sexp: string | null, meta_contacts: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_list */ BookCacheSearchData[] ]
    /**
     * Similar to e_book_cache_search(), but fetches only a list of contact UIDs.
     * 
     * The returned `out_list` list should be freed with g_slist_free_full(list, g_free)
     * when no longer needed.
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts
     * @param cancellable optional #GCancellable object, or %NULL
     */
    search_uids(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_list */ string[] ]
    /**
     * Similar to e_book_cache_search(), but calls the `func` for each found contact.
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts
     * @param cancellable optional #GCancellable object, or %NULL
     */
    search_with_callback(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the custom flags associated with a contact
     * identified by the `uid`.
     * @param uid The uid of the contact to set the extra data for
     * @param custom_flags the custom flags to set for the contact
     * @param cancellable optional #GCancellable object, or %NULL
     */
    set_contact_custom_flags(uid: string, custom_flags: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the extra data associated with `uid`.
     * @param uid The uid of the contact to set the extra data for
     * @param extra The extra data to set
     * @param cancellable optional #GCancellable object, or %NULL
     */
    set_contact_extra(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): boolean
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
     */
    set_locale(lc_collate: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EBackend-1.2.EBackend.Cache */
    /**
     * Instructs the `cache` to change its revision. In case the revision
     * change is frozen with e_cache_freeze_revision_change() it notes to
     * change the revision once the revision change is fully thaw.
     */
    change_revision(): void
    /**
     * Marks all objects as being fully synchronized with the server and
     * removes those which are marked as locally deleted.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    clear_offline_changes(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Checkes whether the `cache` contains an object with
     * the given `uid`.
     * @param uid a unique identifier of an object
     * @param deleted_flag one of #ECacheDeletedFlag enum
     */
    contains(uid: string, deleted_flag: EBackend.CacheDeletedFlag): boolean
    /**
     * Adds every column value which is not part of the `other_columns` to it,
     * except of E_CACHE_COLUMN_UID, E_CACHE_COLUMN_REVISION, E_CACHE_COLUMN_OBJECT
     * and E_CACHE_COLUMN_STATE columns.
     * 
     * This can be used within the callback of e_cache_foreach_update().
     * @param column_names column names
     * @param column_values column values
     * @param other_columns an #ECacheColumnValues to fill
     */
    copy_missing_to_column_values(column_names: string[], column_values: string[], other_columns: EBackend.CacheColumnValues): /* other_columns */ EBackend.CacheColumnValues
    dup_key(key: string): string
    dup_revision(): string
    /**
     * Erases the cache and all of its content from the disk.
     * The only valid operation after this is to free the `cache`.
     */
    erase(): void
    /**
     * Calls `func` for each found object, which satisfies the criteria
     * for both `deleted_flag` and `where_clause`.
     * 
     * Note the `func` should not call any SQLite commands, because it's invoked
     * within a SELECT statement execution.
     * @param deleted_flag one of #ECacheDeletedFlag enum
     * @param where_clause an optional SQLite WHERE clause part, or %NULL
     * @param func an #ECacheForeachFunc function to call for each object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    foreach(deleted_flag: EBackend.CacheDeletedFlag, where_clause: string | null, func: EBackend.CacheForeachFunc, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Calls `func` for each found object, which satisfies the criteria for both
     * `deleted_flag` and `where_clause,` letting the caller update values where
     * necessary. The return value of `func` is used to determine whether the call
     * was successful, not whether there are any changes to be saved. If anything
     * fails during the call then the all changes are reverted.
     * 
     * When there are requested any changes by the `func,` this function also
     * calls e_cache_copy_missing_to_column_values() to ensure no descendant
     * column data is lost.
     * @param deleted_flag one of #ECacheDeletedFlag enum
     * @param where_clause an optional SQLite WHERE clause part, or %NULL
     * @param func an #ECacheUpdateFunc function to call for each object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    foreach_update(deleted_flag: EBackend.CacheDeletedFlag, where_clause: string | null, func: EBackend.CacheUpdateFunc, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Freezes automatic revision change for the `cache`. The function
     * can be called multiple times, but each such call requires its
     * pair function e_cache_thaw_revision_change() call. See also
     * e_cache_change_revision().
     */
    freeze_revision_change(): void
    /**
     * Returns an object with the given `uid`. This function does not consider locally
     * deleted objects. The `out_revision` is set to the object revision, if not %NULL.
     * Free it with g_free() when no longer needed. Similarly the `out_other_columns`
     * contains a column name to column value strings for additional columns which had
     * been requested when calling e_cache_initialize_sync(), if not %NULL.
     * Free the returned #ECacheColumnValues with e_cache_column_values_free(), when
     * no longer needed.
     * @param uid a unique identifier of an object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* out_revision */ string | null, /* out_other_columns */ EBackend.CacheColumnValues | null ]
    get_count(deleted_flag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): number
    get_filename(): string
    /**
     * Reads the user `key` value as an integer.
     * @param key a key name
     */
    get_key_int(key: string): number
    /**
     * The same as e_cache_get(), only considers also locally deleted objects.
     * @param uid a unique identifier of an object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_object_include_deleted(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* out_revision */ string | null, /* out_other_columns */ EBackend.CacheColumnValues | null ]
    /**
     * Gets a list of objects stored in the `cache,` optionally together with
     * their revisions. The uids are not returned in any particular order,
     * but the position between `out_objects` and `out_revisions` matches
     * the same object.
     * 
     * Both `out_objects` and `out_revisions` contain newly allocated #GSList, which
     * should be freed with g_slist_free_full (slist, g_free); when no longer needed.
     * @param deleted_flag one of #ECacheDeletedFlag enum
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_objects(deleted_flag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_objects */ string[], /* out_revisions */ string[] | null ]
    /**
     * Gathers the list of all offline changes being done so far.
     * The returned #GSList contains #ECacheOfflineChange structure.
     * Use e_cache_clear_offline_changes() to clear all offline
     * changes at once.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_offline_changes(cancellable?: Gio.Cancellable | null): EBackend.CacheOfflineChange[]
    get_offline_state(uid: string, cancellable?: Gio.Cancellable | null): EBackend.OfflineState
    get_sqlitedb(): object | null
    /**
     * Gets a list of unique object identifiers stored in the `cache,` optionally
     * together with their revisions. The uids are not returned in any particular
     * order, but the position between `out_uids` and `out_revisions` matches
     * the same object.
     * 
     * Both `out_uids` and `out_revisions` contain newly allocated #GSList, which
     * should be freed with g_slist_free_full (slist, g_free); when no longer needed.
     * @param deleted_flag one of #ECacheDeletedFlag enum
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get_uids(deleted_flag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[], /* out_revisions */ string[] | null ]
    get_version(): number
    /**
     * Initializes the `cache` and opens the `filename` database.
     * This should be called by the descendant.
     * 
     * The `other_columns` are added to the objects table (`E_CACHE_TABLE_OBJECTS)`.
     * Values for these columns are returned by e_cache_get()
     * and can be stored with e_cache_put().
     * @param filename a filename of an SQLite database to use
     * @param other_columns an optional    #GSList with additional columns to add to the objects table
     * @param cancellable optional #GCancellable object, or %NULL
     */
    initialize_sync(filename: string, other_columns?: EBackend.CacheColumnInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    is_revision_change_frozen(): boolean
    /**
     * Locks the `cache` thus other threads cannot use it.
     * This can be called recursively within one thread.
     * Each call should have its pair e_cache_unlock().
     * @param lock_type an #ECacheLockType
     */
    lock(lock_type: EBackend.CacheLockType): void
    /**
     * Stores an object into the cache. Depending on `offline_flag,` this update
     * the object's offline state accordingly. When the `offline_flag` is set
     * to %E_CACHE_IS_ONLINE, then it's set to #E_OFFLINE_STATE_SYNCED, like
     * to be fully synchronized with the server, regardless of its previous
     * offline state. Overwriting locally deleted object behaves like an addition
     * of a completely new object.
     * @param uid a unique identifier of an object
     * @param revision a revision of the object
     * @param object the object itself
     * @param other_columns an #ECacheColumnValues with other columns to set; can be %NULL
     * @param offline_flag one of #ECacheOfflineFlag, whether putting this object in offline
     * @param cancellable optional #GCancellable object, or %NULL
     */
    put(uid: string, revision: string | null, object: string, other_columns: EBackend.CacheColumnValues | null, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the object with the given `uid` from the `cache`. Based on the `offline_flag,`
     * it can remove also any information about locally made offline changes. Removing
     * the object with %E_CACHE_IS_OFFLINE will still remember it for later use
     * with e_cache_get_offline_changes().
     * @param uid a unique identifier of an object
     * @param offline_flag one of #ECacheOfflineFlag, whether removing the object in offline
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove(uid: string, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes all objects from the `cache` in one call.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove_all(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets a `value` of the user `key,` or deletes it, if the `value` is %NULL.
     * @param key a key name
     * @param value a value to set, or %NULL to delete the key
     */
    set_key(key: string, value?: string | null): boolean
    /**
     * Sets an integer `value` for the user `key`.
     * @param key a key name
     * @param value an integer value to set
     */
    set_key_int(key: string, value: number): boolean
    /**
     * Sets an offline `state` for the object identified by `uid`.
     * @param uid a unique identifier of an object
     * @param state an #EOfflineState to set
     * @param cancellable optional #GCancellable object, or %NULL
     */
    set_offline_state(uid: string, state: EBackend.OfflineState, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets the `revision` of the whole `cache`. This is not meant to be
     * used by the descendants, because the revision is updated automatically
     * when needed. The descendants can listen to "revision-changed" signal.
     * @param revision a revision to set; use %NULL to unset it
     */
    set_revision(revision?: string | null): void
    /**
     * Sets a cache data version. This is meant to be used by the descendants.
     * The `version` should be greater than zero.
     * @param version a cache data version to set
     */
    set_version(version: number): void
    /**
     * Executes an SQLite statement. Use e_cache_sqlite_select() for
     * SELECT statements.
     * @param sql_stmt an SQLite statement to execute
     * @param cancellable optional #GCancellable object, or %NULL
     */
    sqlite_exec(sql_stmt: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Runs vacuum (compacts the database file), if needed.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    sqlite_maybe_vacuum(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Executes a SELECT statement `sql_stmt` and calls `func` for each row of the result.
     * Use e_cache_sqlite_exec() for statements which do not return row sets.
     * @param sql_stmt an SQLite SELECT statement to execute
     * @param func an #ECacheSelectFunc function to call for each row
     * @param cancellable optional #GCancellable object, or %NULL
     */
    sqlite_select(sql_stmt: string, func: EBackend.CacheSelectFunc, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Thaws automatic revision change for the `cache`. It's the pair
     * function of e_cache_freeze_revision_change().
     */
    thaw_revision_change(): void
    /**
     * Unlocks the cache which was previouly locked with e_cache_lock().
     * The cache locked with #E_CACHE_LOCK_WRITE should use either
     * `action` #E_CACHE_UNLOCK_COMMIT or #E_CACHE_UNLOCK_ROLLBACK,
     * while the #E_CACHE_LOCK_READ should use #E_CACHE_UNLOCK_NONE `action`.
     * @param action an #ECacheUnlockAction
     */
    unlock(action: EBackend.CacheUnlockAction): void
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    /**
     * Returns a list of #EExtension objects bound to `extensible` whose
     * types are ancestors of `extension_type`.  For a complete list of
     * extension objects bound to `extensible,` pass %E_TYPE_EXTENSION.
     * 
     * The list itself should be freed with g_list_free().  The extension
     * objects are owned by `extensible` and should not be unreferenced.
     * @param extension_type the type of extensions to list
     */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    /**
     * Creates an instance of all instantiable subtypes of #EExtension which
     * target the class of `extensible`.  The lifetimes of these newly created
     * #EExtension objects are bound to `extensible` such that they are finalized
     * when `extensible` is finalized.
     */
    load_extensions(): void
    /* Virtual methods of EDataBook-1.2.EDataBook.BookCache */
    /**
     * Returns the `contact` revision, used to detect changes.
     * The returned string should be freed with g_free(), when
     * no longer needed.
     * @param contact an #EContact
     */
    vfunc_dup_contact_revision(contact: EBookContacts.Contact): string
    vfunc_e164_changed(contact: EBookContacts.Contact, is_replace: boolean): void
    /* Virtual methods of EBackend-1.2.EBackend.Cache */
    vfunc_before_put(uid: string, revision: string, object: string, other_columns: EBackend.CacheColumnValues, is_replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_before_remove(uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_clear_offline_changes_locked(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Erases the cache and all of its content from the disk.
     * The only valid operation after this is to free the `cache`.
     */
    vfunc_erase(): void
    vfunc_put_locked(uid: string, revision: string, object: string, other_columns: EBackend.CacheColumnValues, offline_state: EBackend.OfflineState, is_replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_remove_locked(uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_revision_changed(): void
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
    /* Signals of EDataBook-1.2.EDataBook.BookCache */
    connect(sigName: "dup-contact-revision", callback: (($obj: BookCache, object: EBookContacts.Contact) => string)): number
    connect_after(sigName: "dup-contact-revision", callback: (($obj: BookCache, object: EBookContacts.Contact) => string)): number
    emit(sigName: "dup-contact-revision", object: EBookContacts.Contact): void
    connect(sigName: "e164-changed", callback: (($obj: BookCache, object: EBookContacts.Contact, p0: boolean) => void)): number
    connect_after(sigName: "e164-changed", callback: (($obj: BookCache, object: EBookContacts.Contact, p0: boolean) => void)): number
    emit(sigName: "e164-changed", object: EBookContacts.Contact, p0: boolean): void
    /* Signals of EBackend-1.2.EBackend.Cache */
    connect(sigName: "before-put", callback: (($obj: BookCache, object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    connect_after(sigName: "before-put", callback: (($obj: BookCache, object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    emit(sigName: "before-put", object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null): void
    connect(sigName: "before-remove", callback: (($obj: BookCache, object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    connect_after(sigName: "before-remove", callback: (($obj: BookCache, object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    emit(sigName: "before-remove", object: string, p0?: Gio.Cancellable | null, p1?: object | null): void
    connect(sigName: "revision-changed", callback: (($obj: BookCache) => void)): number
    connect_after(sigName: "revision-changed", callback: (($obj: BookCache) => void)): number
    emit(sigName: "revision-changed"): void
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
    connect(sigName: "notify", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locale", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookCache_ConstructProps)
    _init (config?: BookCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, source?: EDataServer.Source | null, cancellable?: Gio.Cancellable | null): BookCache
    static new_full(filename: string, source?: EDataServer.Source | null, setup?: EBookContacts.SourceBackendSummarySetup | null, cancellable?: Gio.Cancellable | null): BookCache
    static $gtype: GObject.Type
}
interface BookMetaBackend_ConstructProps extends BookBackendSync_ConstructProps {
    /* Constructor properties of EDataBook-1.2.EDataBook.BookMetaBackend */
    /**
     * The #EBookCache being used for this meta backend.
     */
    cache?: BookCache
}
class BookMetaBackend {
    /* Properties of EDataBook-1.2.EDataBook.BookMetaBackend */
    /**
     * The #EBookCache being used for this meta backend.
     */
    cache: BookCache
    /* Properties of EDataBook-1.2.EDataBook.BookBackend */
    cache_dir: string
    readonly proxy_resolver: Gio.ProxyResolver
    readonly registry: EDataServer.SourceRegistry
    writable: boolean
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly main_context: GLib.MainContext
    online: boolean
    readonly source: EDataServer.Source
    readonly user_prompter: EBackend.UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.BookMetaBackend */
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
    connect_sync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    /**
     * This is called when the backend goes into offline mode or
     * when the disconnect is required. The implementation should
     * not report any error when it is called and the `meta_backend`
     * is not connected.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Returns the last known synchronization tag, the same as used to
     * call e_book_meta_backend_get_changes_sync().
     * 
     * Free the returned string with g_free(), when no longer needed.
     */
    dup_sync_tag(): string | null
    /**
     * Empties the local cache by removing all known contacts from it
     * and notifies about such removal any opened views.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    empty_cache_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Ensures that the `meta_backend` is connected to its destination.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    ensure_connected_sync(cancellable?: Gio.Cancellable | null): boolean
    get_capabilities(): string
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
     */
    get_changes_sync(last_sync_tag: string | null, is_repeat: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_repeat */ boolean, /* out_created_objects */ BookMetaBackendInfo[], /* out_modified_objects */ BookMetaBackendInfo[], /* out_removed_objects */ BookMetaBackendInfo[] ]
    /**
     * This value has meaning only if e_book_meta_backend_get_ever_connected()
     * is %TRUE.
     */
    get_connected_writable(): boolean
    get_ever_connected(): boolean
    /**
     * It is optional to implement this virtual method by the descendants.
     * It is used to receive SSL error details when any online operation
     * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
     */
    get_ssl_error_details(): [ /* returnType */ boolean, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    /**
     * Changes all URL photos and logos which point to a local file in `contact`
     * to inline type, aka adds the file content into the `contact`.
     * This is called automatically before e_book_meta_backend_save_contact_sync().
     * 
     * The reverse operation is e_book_meta_backend_store_inline_photos_sync().
     * @param contact an #EContact to work with
     * @param cancellable optional #GCancellable object, or %NULL
     */
    inline_local_photos_sync(contact: EBookContacts.Contact, cancellable?: Gio.Cancellable | null): boolean
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
    list_existing_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_existing_objects */ BookMetaBackendInfo[] ]
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
    load_contact_sync(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact, /* out_extra */ string ]
    /**
     * Processes given changes by updating local cache content accordingly.
     * The `meta_backend` processes the changes like being online and particularly
     * requires to be online to load created and modified objects when needed.
     * @param created_objects     a #GSList of #EBookMetaBackendInfo object infos which had been created
     * @param modified_objects     a #GSList of #EBookMetaBackendInfo object infos which had been modified
     * @param removed_objects     a #GSList of #EBookMetaBackendInfo object infos which had been removed
     * @param cancellable optional #GCancellable object, or %NULL
     */
    process_changes_sync(created_objects?: BookMetaBackendInfo[] | null, modified_objects?: BookMetaBackendInfo[] | null, removed_objects?: BookMetaBackendInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    ref_cache(): BookCache
    /**
     * Refreshes the `meta_backend` immediately. To just schedule refresh
     * operation call e_book_meta_backend_schedule_refresh().
     * @param cancellable optional #GCancellable object, or %NULL
     */
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
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
     */
    remove_contact_sync(conflict_resolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable?: Gio.Cancellable | null): boolean
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
     */
    save_contact_sync(overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_uid */ string, /* out_new_extra */ string ]
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
     */
    search_sync(expr: string | null, meta_contact: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
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
    search_uids_sync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
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
     */
    split_changes_sync(objects: BookMetaBackendInfo[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* objects */ BookMetaBackendInfo[], /* out_created_objects */ BookMetaBackendInfo[], /* out_modified_objects */ BookMetaBackendInfo[], /* out_removed_objects */ BookMetaBackendInfo[] | null ]
    /**
     * Changes all inline photos and logos to URL type in `contact,` which
     * will point to a local file instead, beside the cache file.
     * This is called automatically after e_book_meta_backend_load_contact_sync().
     * 
     * The reverse operation is e_book_meta_backend_inline_local_photos_sync().
     * @param contact an #EContact to work with
     * @param cancellable optional #GCancellable object, or %NULL
     */
    store_inline_photos_sync(contact: EBookContacts.Contact, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataBook-1.2.EDataBook.BookBackendSync */
    /**
     * Checks whether contains an `email_address`. When the `email_address`
     * contains multiple addresses, then returns %TRUE when at least one
     * address exists in the address book.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param email_address an email address
     * @param cancellable optional #GCancellable object, or %NULL
     */
    contains_email(email_address: string, cancellable?: Gio.Cancellable | null): boolean
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
    create_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
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
    get_contact(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
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
    get_contact_list(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
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
    get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    modify_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    /**
     * "Opens" the `backend`.  Opening a backend is something of an outdated
     * concept, but the operation is hanging around for a little while longer.
     * This usually involves some custom initialization logic, and testing of
     * remote authentication if applicable.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    open(cancellable?: Gio.Cancellable | null): boolean
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
    refresh(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove_contacts(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_removed_uids */ string[] ]
    /* Methods of EDataBook-1.2.EDataBook.BookBackend */
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
    configure_direct(config: string): void
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
    contains_email(email_address: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_contains_email().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
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
     */
    contains_email_sync(email_address: string, cancellable?: Gio.Cancellable | null): boolean
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
    create_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    create_contacts_sync(vcards: string, opflags: number, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
     */
    create_cursor(sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number): DataBookCursor
    /**
     * Requests `backend` to release and destroy `cursor,` this
     * will trigger an %E_CLIENT_ERROR_INVALID_ARG error if `cursor`
     * is not owned by `backend`.
     * @param cursor the #EDataBookCursor to destroy
     */
    delete_cursor(cursor: DataBookCursor): boolean
    /**
     * Thread-safe variation of e_book_backend_get_cache_dir().
     * Use this function when accessing `backend` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dup_cache_dir(): string
    /**
     * Fetches a copy of the currently configured locale for the addressbook
     */
    dup_locale(): string
    /**
     * Calls `func` for each existing view (as returned by e_book_backend_list_views()).
     * The `func` can return %FALSE to stop early.
     */
    foreach_view(): boolean
    /**
     * Notifies each view of the `backend` about progress. When `only_completed_views`
     * is %TRUE, notifies only completed views.
     * @param only_completed_views whether notify in completed views only
     * @param percent percent complete
     * @param message message describing the operation in progress, or %NULL
     */
    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void
    /**
     * Obtains the value of the backend property named `prop_name`.
     * Freed the returned string with g_free() when finished with it.
     * @param prop_name a backend property name
     */
    get_backend_property(prop_name: string): string
    /**
     * Returns the cache directory path used by `backend`.
     */
    get_cache_dir(): string
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
    get_contact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_get_contact_finish().
     * 
     * The returned #EContact is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * 
     * If an error occurred, the function will set `error` and return %NULL.
     * @param result a #GAsyncResult
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
    get_contact_list(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    get_contact_list_sync(query: string, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    get_contact_list_uids_sync(query: string, out_uids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    /**
     * Tries to create an #EDataBookDirect for `backend` if
     * backend supports direct read access.
     */
    get_direct_book(): DataBookDirect | null
    /**
     * Returns the data source registry to which #EBackend:source belongs.
     */
    get_registry(): EDataServer.SourceRegistry
    /**
     * Returns whether `backend` will accept changes to its data content.
     */
    get_writable(): boolean
    /**
     * Checks if `backend'`s storage has been opened (and
     * authenticated, if necessary) and the backend itself
     * is ready for accessing. This property is changed automatically
     * after the `backend` is successfully opened.
     */
    is_opened(): boolean
    /**
     * Checks if we can write to `backend`.
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
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
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
    modify_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_modify_contacts().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    modify_contacts_finish(result: Gio.AsyncResult): boolean
    /**
     * Modifies one or more contacts according to `vcards`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param vcards a %NULL-terminated array of vCard strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    modify_contacts_sync(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
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
    notify_error(message: string): void
    /**
     * Notifies clients about property value change.
     * @param prop_name property name, which changed
     * @param prop_value new property value
     */
    notify_property_changed(prop_name: string, prop_value?: string | null): void
    /**
     * Notifies all of `backend'`s book views that the contact with UID
     * `id` has been removed.
     * 
     * e_data_book_respond_remove_contacts() calls this function for you. You
     * only need to call this from your backend if contacts are removed by
     * another (non-PAS-using) client.
     * @param id a contact id
     */
    notify_remove(id: string): void
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
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_open().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
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
     */
    open_sync(cancellable?: Gio.Cancellable | null): boolean
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
     */
    ref_data_book(): DataBook | null
    /**
     * Returns the #GProxyResolver for `backend` (if applicable), as indicated
     * by the #ESourceAuthentication:proxy-uid of `backend'`s #EBackend:source
     * or one of its ancestors.
     * 
     * The returned #GProxyResolver is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
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
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the refresh initiation started with e_book_backend_refresh().
     * 
     * If an error occurred while initiating the refresh, the function will set
     * `error` and return %FALSE.  If the `backend` does not support refreshing,
     * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
     * %FALSE.
     * @param result a #GAsyncResult
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
     */
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
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
    remove_contacts(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_book_backend_remove_contacts().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    remove_contacts_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes one or more contacts according to `uids`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uids a %NULL-terminated array of contact ID strings
     * @param opflags bit-or of #EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove_contacts_sync(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
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
    set_cache_dir(cache_dir: string): void
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
     */
    set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
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
    /* Methods of EBackend-1.2.EBackend.Backend */
    /**
     * Asynchronously calls the e_backend_credentials_required_sync() on the `backend,`
     * to inform clients that credentials are required.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_credentials_required_finish() to get the result of the operation.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
     * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param op_error a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_credentials_required().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    credentials_required_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously lets the clients know that the backned requires credentials to be
     * properly opened. It's a proxy function for e_source_invoke_credentials_required_sync(),
     * where can be found more information about actual parameters meaning.
     * 
     * The provided credentials are received through #EBackendClass.authenticate_sync()
     * method asynchronously.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
     * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param op_error a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    credentials_required_sync(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Makes sure that the "online" property is updated, that is, if there
     * is any destination reachability test pending, it'll be done immediately
     * and the only state will be updated as well.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void
    /**
     * Makes sure that the associated ESource::connection-status is connected. This is
     * useful in cases when the backend can connect to the destination without invoking
     * #EBackendClass.authenticate_sync(), possibly through e_backend_schedule_authenticate().
     */
    ensure_source_status_connected(): void
    /**
     * Provides destination server host name and port to which
     * the backend connects. This is used to determine required
     * connection point for e_backend_is_destination_reachable().
     * The `host` is a newly allocated string, which will be freed
     * with g_free(). When `backend` sets both `host` and `port,` then
     * it should return %TRUE, indicating it's a remote backend.
     * Default implementation returns %FALSE, which is treated
     * like the backend is local, no checking for server reachability
     * is possible.
     */
    get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    /**
     * Returns the online state of `backend:` %TRUE if `backend` is online,
     * %FALSE if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     */
    get_online(): boolean
    /**
     * Returns the #ESource to which `backend` is paired.
     */
    get_source(): EDataServer.Source
    /**
     * Gets an instance of #EUserPrompter, associated with this `backend`.
     * 
     * The returned instance is owned by the `backend`.
     */
    get_user_prompter(): object | null
    /**
     * Checks whether the `backend<`!-- -->'s destination server, as returned
     * by e_backend_get_destination_address(), is reachable.
     * If the e_backend_get_destination_address() returns %FALSE, this function
     * returns %TRUE, meaning the destination is always reachable.
     * This uses #GNetworkMonitor<!-- -->'s g_network_monitor_can_reach()
     * for reachability tests.
     * @param cancellable a #GCancellable instance, or %NULL
     */
    is_destination_reachable(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Let's the `backend` know that it'll be shut down shortly, no client connects
     * to it anymore. The `backend` can free any resources which reference it, for
     * example the opened views.
     */
    prepare_shutdown(): void
    /**
     * Returns the socket endpoint for the network service to which `backend`
     * is a client, or %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * 
     * The returned #GSocketConnectable is referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with it.
     */
    ref_connectable(): Gio.SocketConnectable | null
    /**
     * Returns the #GMainContext on which event sources for `backend` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     */
    ref_main_context(): GLib.MainContext
    /**
     * Schedules a new authenticate session, cancelling any previously run.
     * This is usually done automatically, when an 'authenticate' signal is
     * received for the associated #ESource. With %NULL `credentials` an attempt
     * without it is run.
     * @param credentials a credentials to use to authenticate, or %NULL
     */
    schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void
    /**
     * Asynchronously invokes e_backend_credentials_required(), but installs its
     * own callback which only prints a runtime warning on the console when
     * the call fails. The `who_calls` is a prefix of the console message.
     * This is useful when the caller just wants to start the operation
     * without having actual place where to show the operation result.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
     * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param op_error a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param who_calls an identification who calls this
     */
    schedule_credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, who_calls?: string | null): void
    /**
     * Sets the socket endpoint for the network service to which `backend` is
     * a client.  This can be %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * @param connectable a #GSocketConnectable, or %NULL
     */
    set_connectable(connectable: Gio.SocketConnectable): void
    /**
     * Sets the online state of `backend:` %TRUE if `backend` is online,
     * `FALSE` if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     * @param online the online state
     */
    set_online(online: boolean): void
    /**
     * Initiates a user trust prompt with given `parameters`.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_trust_prompt_finish() to get the result of the operation.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    trust_prompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_trust_prompt().
     * If an error occurred, the function will set `error` and return
     * %E_TRUST_PROMPT_RESPONSE_UNKNOWN.
     * @param result a #GAsyncResult
     */
    trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    /**
     * Asks a user a trust prompt with given `parameters,` and returns what
     * user responded. This blocks until the response is delivered.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     */
    trust_prompt_sync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
    /* Virtual methods of EDataBook-1.2.EDataBook.BookMetaBackend */
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
    vfunc_connect_sync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    /**
     * This is called when the backend goes into offline mode or
     * when the disconnect is required. The implementation should
     * not report any error when it is called and the `meta_backend`
     * is not connected.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
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
     */
    vfunc_get_changes_sync(last_sync_tag: string | null, is_repeat: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_repeat */ boolean, /* out_created_objects */ BookMetaBackendInfo[], /* out_modified_objects */ BookMetaBackendInfo[], /* out_removed_objects */ BookMetaBackendInfo[] ]
    /**
     * It is optional to implement this virtual method by the descendants.
     * It is used to receive SSL error details when any online operation
     * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
     */
    vfunc_get_ssl_error_details(): [ /* returnType */ boolean, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
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
    vfunc_list_existing_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_existing_objects */ BookMetaBackendInfo[] ]
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
    vfunc_load_contact_sync(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact, /* out_extra */ string ]
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
     */
    vfunc_remove_contact_sync(conflict_resolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable?: Gio.Cancellable | null): boolean
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
     * @param overwrite_existing %TRUE when can overwrite existing contacts, %FALSE otherwise
     * @param conflict_resolution one of #EConflictResolution, what to do on conflicts
     * @param contact an #EContact to save
     * @param extra extra data saved with the contacts in an #EBookCache
     * @param opflags bit-or of EBookOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_save_contact_sync(overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_uid */ string, /* out_new_extra */ string ]
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
     */
    vfunc_search_sync(expr: string | null, meta_contact: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
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
    vfunc_search_uids_sync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    vfunc_source_changed(): void
    /* Virtual methods of EDataBook-1.2.EDataBook.BookBackendSync */
    vfunc_contains_email_sync(email_address: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_open_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataBook-1.2.EDataBook.BookBackend */
    vfunc_closed(sender: string): void
    vfunc_impl_configure_direct(config: string): void
    vfunc_impl_contains_email(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, email_address: string): void
    vfunc_impl_create_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfunc_impl_delete_cursor(cursor: DataBookCursor): boolean
    vfunc_impl_dup_locale(): string
    vfunc_impl_get_backend_property(prop_name: string): string
    vfunc_impl_get_contact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string): void
    vfunc_impl_get_contact_list(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfunc_impl_get_contact_list_uids(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfunc_impl_modify_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfunc_impl_notify_update(contact: EBookContacts.Contact): void
    vfunc_impl_open(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_refresh(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_remove_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number): void
    vfunc_impl_set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_impl_start_view(view: DataBookView): void
    vfunc_impl_stop_view(view: DataBookView): void
    vfunc_shutdown(): void
    /* Virtual methods of EBackend-1.2.EBackend.Backend */
    vfunc_authenticate_sync(credentials: EDataServer.NamedParameters, out_certificate_pem: string, out_certificate_errors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    /**
     * Provides destination server host name and port to which
     * the backend connects. This is used to determine required
     * connection point for e_backend_is_destination_reachable().
     * The `host` is a newly allocated string, which will be freed
     * with g_free(). When `backend` sets both `host` and `port,` then
     * it should return %TRUE, indicating it's a remote backend.
     * Default implementation returns %FALSE, which is treated
     * like the backend is local, no checking for server reachability
     * is possible.
     */
    vfunc_get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    /**
     * Let's the `backend` know that it'll be shut down shortly, no client connects
     * to it anymore. The `backend` can free any resources which reference it, for
     * example the opened views.
     */
    vfunc_prepare_shutdown(): void
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
    /* Signals of EDataBook-1.2.EDataBook.BookMetaBackend */
    connect(sigName: "refresh-completed", callback: (($obj: BookMetaBackend) => void)): number
    connect_after(sigName: "refresh-completed", callback: (($obj: BookMetaBackend) => void)): number
    emit(sigName: "refresh-completed"): void
    /**
     * This signal is emitted whenever the underlying backend #ESource
     * changes. Unlike the #ESource's 'changed' signal this one is
     * tight to the #EBookMetaBackend itself and is emitted from
     * a dedicated thread, thus it doesn't block the main thread.
     */
    connect(sigName: "source-changed", callback: (($obj: BookMetaBackend) => void)): number
    connect_after(sigName: "source-changed", callback: (($obj: BookMetaBackend) => void)): number
    emit(sigName: "source-changed"): void
    /* Signals of EDataBook-1.2.EDataBook.BookBackend */
    /**
     * Emitted when a client destroys its #EBookClient for `backend`.
     * @param sender the bus name that invoked the "close" method
     */
    connect(sigName: "closed", callback: (($obj: BookMetaBackend, sender: string) => void)): number
    connect_after(sigName: "closed", callback: (($obj: BookMetaBackend, sender: string) => void)): number
    emit(sigName: "closed", sender: string): void
    /**
     * Emitted when the last client destroys its #EBookClient for
     * `backend`.  This signals the `backend` to begin final cleanup
     * tasks such as synchronizing data to permanent storage.
     */
    connect(sigName: "shutdown", callback: (($obj: BookMetaBackend) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: BookMetaBackend) => void)): number
    emit(sigName: "shutdown"): void
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
    connect(sigName: "notify", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cache-dir", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::registry", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-prompter", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookMetaBackend_ConstructProps)
    _init (config?: BookMetaBackend_ConstructProps): void
    static $gtype: GObject.Type
}
interface BookSqlite_ConstructProps extends GObject.Object_ConstructProps {
}
class BookSqlite {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.BookSqlite */
    add_contact(contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable?: Gio.Cancellable | null): boolean
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
    add_contacts(contacts: EBookContacts.Contact[], extra: string[] | null, replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Fetch the #EContact specified by `uid` in `ebsql`.
     * 
     * If `meta_contact` is specified, then a shallow #EContact will be created
     * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param meta_contact Whether an entire contact is desired, or only the metadata
     */
    get_contact(uid: string, meta_contact: boolean): [ /* returnType */ boolean, /* ret_contact */ EBookContacts.Contact ]
    /**
     * Fetches the extra data previously set for `uid,` either with
     * e_book_sqlite_set_contact_extra() or when adding contacts.
     * @param uid The uid of the contact to fetch the extra data for
     */
    get_contact_extra(uid: string): [ /* returnType */ boolean, /* ret_extra */ string ]
    /**
     * Fetches the value for `key` and stores it in `value`
     * @param key The key to fetch a value for
     */
    get_key_value(key: string): [ /* returnType */ boolean, /* value */ string ]
    /**
     * A convenience function to fetch the value of `key` as an integer.
     * @param key The key to fetch a value for
     */
    get_key_value_int(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Fetches the current locale setting for the address-book.
     * 
     * Upon success, `lc_collate_out` will hold the returned locale setting,
     * otherwise %FALSE will be returned and `error` will be updated accordingly.
     */
    get_locale(): [ /* returnType */ boolean, /* locale_out */ string ]
    /**
     * Fetch a vcard string for `uid` in `ebsql`.
     * 
     * If `meta_contact` is specified, then a shallow vcard representation will be
     * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
     * @param uid The uid of the contact to fetch
     * @param meta_contact Whether an entire contact is desired, or only the metadata
     */
    get_vcard(uid: string, meta_contact: boolean): [ /* returnType */ boolean, /* ret_vcard */ string ]
    /**
     * Checks if a contact bearing the UID indicated by `uid` is stored in `ebsql`.
     * @param uid The uid of the contact to check for
     */
    has_contact(uid: string): [ /* returnType */ boolean, /* exists */ boolean ]
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
     */
    lock(lock_type: bSqlLockType, cancellable?: Gio.Cancellable | null): boolean
    /**
     * References the currently active #ECollator for `ebsql,`
     * use e_collator_unref() when finished using the returned collator.
     * 
     * Note that the active collator will change with the active locale setting.
     */
    ref_collator(): EDataServer.Collator
    /**
     * References the #ESource to which `ebsql` is paired,
     * use g_object_unref() when finished using the source.
     * It can be %NULL in some cases, like when running tests.
     */
    ref_source(): EDataServer.Source | null
    /**
     * Removes the contact indicated by `uid` from `ebsql`.
     * @param uid the uid of the contact to remove
     * @param cancellable A #GCancellable
     */
    remove_contact(uid: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the contacts indicated by `uids` from `ebsql`.
     * @param uids a #GSList of uids indicating which contacts to remove
     * @param cancellable A #GCancellable
     */
    remove_contacts(uids: string[], cancellable?: Gio.Cancellable | null): boolean
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
     */
    search(sexp: string | null, meta_contacts: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ret_list */ bSqlSearchData[] ]
    /**
     * Similar to e_book_sqlitedb_search(), but fetches only a list of contact UIDs.
     * 
     * The returned `ret_list` list should be freed with g_slist_free() and all
     * elements freed with g_free().
     * @param sexp search expression; use %NULL or an empty string to get all stored contacts.
     * @param cancellable A #GCancellable
     */
    search_uids(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ret_list */ string[] ]
    /**
     * Sets or replaces the extra data associated with `uid`.
     * @param uid The uid of the contact to set the extra data for
     * @param extra The extra data to set
     */
    set_contact_extra(uid: string, extra?: string | null): boolean
    /**
     * Sets the value for `key` to be `value`
     * @param key The key to fetch a value for
     * @param value The new value for `key`
     */
    set_key_value(key: string, value: string): boolean
    /**
     * A convenience function to set the value of `key` as an integer.
     * @param key The key to fetch a value for
     * @param value The new value for `key`
     */
    set_key_value_int(key: string, value: number): boolean
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
     */
    set_locale(lc_collate: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Releases an exclusive on `ebsql` and finishes a transaction previously
     * started with e_book_sqlite_lock_updates().
     * 
     * <note><para>If this fails, the lock on `ebsql` is still released and `error` will
     * be set to indicate why the transaction or rollback failed.</para></note>
     * @param action Which #EbSqlUnlockAction to take while unlocking
     */
    unlock(action: bSqlUnlockAction): boolean
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    /**
     * Returns a list of #EExtension objects bound to `extensible` whose
     * types are ancestors of `extension_type`.  For a complete list of
     * extension objects bound to `extensible,` pass %E_TYPE_EXTENSION.
     * 
     * The list itself should be freed with g_list_free().  The extension
     * objects are owned by `extensible` and should not be unreferenced.
     * @param extension_type the type of extensions to list
     */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    /**
     * Creates an instance of all instantiable subtypes of #EExtension which
     * target the class of `extensible`.  The lifetimes of these newly created
     * #EExtension objects are bound to `extensible` such that they are finalized
     * when `extensible` is finalized.
     */
    load_extensions(): void
    /* Virtual methods of EDataBook-1.2.EDataBook.BookSqlite */
    vfunc_before_insert_contact(db: object | null, contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_before_remove_contact(db: object | null, contact_uid: string, cancellable?: Gio.Cancellable | null): boolean
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
    /* Signals of EDataBook-1.2.EDataBook.BookSqlite */
    connect(sigName: "before-insert-contact", callback: (($obj: BookSqlite, object: object | null, p0: EBookContacts.Contact, p1: string, p2: boolean, p3: GObject.Object, p4?: object | null) => boolean)): number
    connect_after(sigName: "before-insert-contact", callback: (($obj: BookSqlite, object: object | null, p0: EBookContacts.Contact, p1: string, p2: boolean, p3: GObject.Object, p4?: object | null) => boolean)): number
    emit(sigName: "before-insert-contact", object: object | null, p0: EBookContacts.Contact, p1: string, p2: boolean, p3: GObject.Object, p4?: object | null): void
    connect(sigName: "before-remove-contact", callback: (($obj: BookSqlite, object: object | null, p0: string, p1?: Gio.Cancellable | null, p2?: object | null) => boolean)): number
    connect_after(sigName: "before-remove-contact", callback: (($obj: BookSqlite, object: object | null, p0: string, p1?: Gio.Cancellable | null, p2?: object | null) => boolean)): number
    emit(sigName: "before-remove-contact", object: object | null, p0: string, p1?: Gio.Cancellable | null, p2?: object | null): void
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
    connect(sigName: "notify", callback: (($obj: BookSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookSqlite_ConstructProps)
    _init (config?: BookSqlite_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, source?: EDataServer.Source | null, cancellable?: Gio.Cancellable | null): BookSqlite
    static new_full(path: string, source?: EDataServer.Source | null, setup?: EBookContacts.SourceBackendSummarySetup | null, vcard_callback?: bSqlVCardCallback | null, change_callback?: bSqlChangeCallback | null, cancellable?: Gio.Cancellable | null): BookSqlite
    static error_quark(): GLib.Quark
    /**
     * Frees an #EbSqlSearchData
     * @param data An #EbSqlSearchData
     */
    static search_data_free(data: bSqlSearchData): void
    static $gtype: GObject.Type
}
interface DataBook_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataBook-1.2.EDataBook.DataBook */
    backend?: BookBackend
    connection?: Gio.DBusConnection
    object_path?: string
}
class DataBook {
    /* Properties of EDataBook-1.2.EDataBook.DataBook */
    readonly backend: BookBackend
    readonly connection: Gio.DBusConnection
    readonly object_path: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.DataBook */
    /**
     * Returns the #GDBusConnection on which the AddressBook D-Bus interface
     * is exported.
     */
    get_connection(): Gio.DBusConnection
    /**
     * Returns the object path at which the AddressBook D-Bus interface is
     * exported.
     */
    get_object_path(): string
    /**
     * Returns the #EBookBackend to which incoming remote method invocations
     * are being forwarded.
     * 
     * The returned #EBookBackend is referenced for thread-safety and should
     * be unreferenced with g_object_unref() when finished with it.
     */
    ref_backend(): BookBackend
    /**
     * Notifies the clients about a property change.
     * @param prop_name Property name which changed
     * @param prop_value The new property value
     */
    report_backend_property_changed(prop_name: string, prop_value?: string | null): void
    /**
     * Notifies the clients about an error, which happened out of any client-initiate operation.
     * @param message An error message
     */
    report_error(message: string): void
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
    respond_get_contact(opid: number, error?: GLib.Error | null, contact?: EBookContacts.Contact | null): void
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
     */
    set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of EDataBook-1.2.EDataBook.DataBook */
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
    connect(sigName: "notify", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-path", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBook_ConstructProps)
    _init (config?: DataBook_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: BookBackend, connection: Gio.DBusConnection, object_path: string): DataBook
    /**
     * Takes a list of strings and converts it to a comma-separated string of
     * values; free returned pointer with g_free()
     * @param strings a list of gchar *
     */
    static string_slist_to_comma_string(strings: string[]): string
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
interface DataBookCursor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataBook-1.2.EDataBook.DataBookCursor */
    backend?: BookBackend
}
class DataBookCursor {
    /* Properties of EDataBook-1.2.EDataBook.DataBookCursor */
    readonly backend: BookBackend
    readonly position: number
    readonly total: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.DataBookCursor */
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
     */
    get_backend(): BookBackend
    /**
     * Fetch the current position of `cursor` in its result list.
     */
    get_position(): number
    /**
     * Fetch the total number of contacts which match `cursor'`s query expression.
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
     */
    load_locale(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* locale */ string | null ]
    /**
     * Recalculates the cursor's total and position, this is meant
     * for cursor created in Direct Read Access mode to synchronously
     * recalculate the position and total values when the addressbook
     * revision has changed.
     * @param cancellable A #GCancellable
     */
    recalculate(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Places `cursor` on the `connection` at `object_path`
     * @param connection the #GDBusConnection to register with
     * @param object_path the object path to place the direct access configuration data
     */
    register_gdbus_object(connection: Gio.DBusConnection, object_path: string): boolean
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
    set_alphabetic_index(index: number, locale: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets the search expression for the cursor
     * @param sexp the search expression to set
     * @param cancellable A #GCancellable
     */
    set_sexp(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
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
     */
    step(revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
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
    /* Virtual methods of EDataBook-1.2.EDataBook.DataBookCursor */
    vfunc_compare_contact(contact: EBookContacts.Contact): [ /* returnType */ number, /* matches_sexp */ boolean | null ]
    vfunc_get_position(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* total */ number, /* position */ number ]
    vfunc_load_locale(): [ /* returnType */ boolean, /* locale */ string ]
    vfunc_set_alphabetic_index(index: number, locale: string): boolean
    vfunc_set_sexp(sexp?: string | null): boolean
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
     */
    vfunc_step(revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
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
    connect(sigName: "notify", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBookCursor_ConstructProps)
    _init (config?: DataBookCursor_ConstructProps): void
    static $gtype: GObject.Type
}
interface DataBookCursorCache_ConstructProps extends DataBookCursor_ConstructProps {
    /* Constructor properties of EDataBook-1.2.EDataBook.DataBookCursorCache */
    book_cache?: BookCache
    cursor?: object
}
class DataBookCursorCache {
    /* Properties of EDataBook-1.2.EDataBook.DataBookCursorCache */
    readonly book_cache: BookCache
    readonly cursor: object
    /* Properties of EDataBook-1.2.EDataBook.DataBookCursor */
    readonly backend: BookBackend
    readonly position: number
    readonly total: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.DataBookCursor */
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
     */
    get_backend(): BookBackend
    /**
     * Fetch the current position of `cursor` in its result list.
     */
    get_position(): number
    /**
     * Fetch the total number of contacts which match `cursor'`s query expression.
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
     */
    load_locale(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* locale */ string | null ]
    /**
     * Recalculates the cursor's total and position, this is meant
     * for cursor created in Direct Read Access mode to synchronously
     * recalculate the position and total values when the addressbook
     * revision has changed.
     * @param cancellable A #GCancellable
     */
    recalculate(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Places `cursor` on the `connection` at `object_path`
     * @param connection the #GDBusConnection to register with
     * @param object_path the object path to place the direct access configuration data
     */
    register_gdbus_object(connection: Gio.DBusConnection, object_path: string): boolean
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
    set_alphabetic_index(index: number, locale: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets the search expression for the cursor
     * @param sexp the search expression to set
     * @param cancellable A #GCancellable
     */
    set_sexp(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
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
     */
    step(revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
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
    /* Virtual methods of EDataBook-1.2.EDataBook.DataBookCursor */
    vfunc_compare_contact(contact: EBookContacts.Contact): [ /* returnType */ number, /* matches_sexp */ boolean | null ]
    vfunc_get_position(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* total */ number, /* position */ number ]
    vfunc_load_locale(): [ /* returnType */ boolean, /* locale */ string ]
    vfunc_set_alphabetic_index(index: number, locale: string): boolean
    vfunc_set_sexp(sexp?: string | null): boolean
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
     */
    vfunc_step(revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
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
    connect(sigName: "notify", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::book-cache", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::book-cache", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBookCursorCache_ConstructProps)
    _init (config?: DataBookCursorCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(book_backend: BookBackend, book_cache: BookCache, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]): DataBookCursorCache
    static $gtype: GObject.Type
}
interface DataBookCursorSqlite_ConstructProps extends DataBookCursor_ConstructProps {
    /* Constructor properties of EDataBook-1.2.EDataBook.DataBookCursorSqlite */
    cursor?: object
    ebsql?: BookSqlite
    revision_key?: string
}
class DataBookCursorSqlite {
    /* Properties of EDataBook-1.2.EDataBook.DataBookCursorSqlite */
    readonly cursor: object
    readonly ebsql: BookSqlite
    readonly revision_key: string
    /* Properties of EDataBook-1.2.EDataBook.DataBookCursor */
    readonly backend: BookBackend
    readonly position: number
    readonly total: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.DataBookCursor */
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
     */
    get_backend(): BookBackend
    /**
     * Fetch the current position of `cursor` in its result list.
     */
    get_position(): number
    /**
     * Fetch the total number of contacts which match `cursor'`s query expression.
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
     */
    load_locale(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* locale */ string | null ]
    /**
     * Recalculates the cursor's total and position, this is meant
     * for cursor created in Direct Read Access mode to synchronously
     * recalculate the position and total values when the addressbook
     * revision has changed.
     * @param cancellable A #GCancellable
     */
    recalculate(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Places `cursor` on the `connection` at `object_path`
     * @param connection the #GDBusConnection to register with
     * @param object_path the object path to place the direct access configuration data
     */
    register_gdbus_object(connection: Gio.DBusConnection, object_path: string): boolean
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
    set_alphabetic_index(index: number, locale: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets the search expression for the cursor
     * @param sexp the search expression to set
     * @param cancellable A #GCancellable
     */
    set_sexp(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
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
     */
    step(revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
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
    /* Virtual methods of EDataBook-1.2.EDataBook.DataBookCursor */
    vfunc_compare_contact(contact: EBookContacts.Contact): [ /* returnType */ number, /* matches_sexp */ boolean | null ]
    vfunc_get_position(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* total */ number, /* position */ number ]
    vfunc_load_locale(): [ /* returnType */ boolean, /* locale */ string ]
    vfunc_set_alphabetic_index(index: number, locale: string): boolean
    vfunc_set_sexp(sexp?: string | null): boolean
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
     */
    vfunc_step(revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
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
    connect(sigName: "notify", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ebsql", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ebsql", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::revision-key", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision-key", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBookCursorSqlite_ConstructProps)
    _init (config?: DataBookCursorSqlite_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: BookBackend, ebsql: BookSqlite, revision_key: string, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]): DataBookCursorSqlite
    static $gtype: GObject.Type
}
interface DataBookDirect_ConstructProps extends GObject.Object_ConstructProps {
}
class DataBookDirect {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.DataBookDirect */
    /**
     * Places `direct` on the `connection` at `object_path`
     * @param connection The #GDBusConnection to register with
     * @param object_path The object path to place the direct access configuration data
     */
    register_gdbus_object(connection: Gio.DBusConnection, object_path: string): boolean
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
    connect(sigName: "notify", callback: (($obj: DataBookDirect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookDirect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBookDirect_ConstructProps)
    _init (config?: DataBookDirect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend_path: string, backend_factory_name: string, config: string): DataBookDirect
    static $gtype: GObject.Type
}
interface DataBookFactory_ConstructProps extends EBackend.DataFactory_ConstructProps {
}
class DataBookFactory {
    /* Properties of EBackend-1.2.EBackend.DataFactory */
    readonly backend_per_process: number
    readonly registry: EDataServer.SourceRegistry
    readonly reload_supported: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.DataFactory */
    backend_closed(backend: EBackend.Backend): void
    backend_closed_by_sender(backend: EBackend.Backend, sender: string): void
    /**
     * Returns a new and unique object path for a D-Bus interface based
     * in the data object path prefix of the `data_factory`
     */
    construct_path(): string
    /**
     * Used only when backend-per-process is off.
     * 
     * Free the returned pointer with g_object_unref(), if not NULL and no longer
     * needed.
     * @param backend_factory 
     * @param source 
     */
    create_backend(backend_factory: EBackend.BackendFactory, source: EDataServer.Source): EBackend.Backend | null
    get_backend_per_process(): number
    /**
     * Returns the #ESourceRegistry owned by `data_factory`.
     */
    get_registry(): EDataServer.SourceRegistry
    get_reload_supported(): boolean
    /**
     * Lists the currently opened backends.
     * 
     * The sources returned in the list are referenced for thread-safety.
     * They must each be unreferenced with g_object_unref() when finished
     * with them.  Free the returned #GSList itself with g_slist_free().
     * 
     * An easy way to free the list properly in one step is as follows:
     * 
     * |[
     *   g_slist_free_full (list, g_object_unref);
     * ```
     * 
     */
    list_opened_backends(): EBackend.Backend[]
    open_backend(backend: EBackend.Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    /**
     * Returns the #EBackendFactory for "`backend_name:``extension_name"`, or
     * %NULL if no such factory is registered.
     * 
     * The returned #EBackendFactory is referenced for thread-safety.
     * Unreference the #EBackendFactory with g_object_unref() when finished
     * with it.
     * @param backend_name a backend name
     * @param extension_name an extension name
     */
    ref_backend_factory(backend_name: string, extension_name: string): EBackend.BackendFactory | null
    /**
     * Spawns a new subprocess for a backend type and returns the object path
     * of the new subprocess to the client, in the way the client can talk
     * directly to the running backend. If the backend already has a subprocess
     * running, the used object path is returned to the client.
     * @param invocation a #GDBusMethodInvocation
     * @param uid an #ESource UID
     * @param extension_name an extension name
     * @param subprocess_path a path of an executable responsible for running the subprocess
     */
    spawn_subprocess_backend(invocation: Gio.DBusMethodInvocation, uid: string, extension_name: string, subprocess_path: string): void
    use_backend_per_process(): boolean
    /* Methods of EBackend-1.2.EBackend.DBusServer */
    /**
     * Increases the use count of `server`.
     * 
     * Use this function to indicate that the server has a reason to continue
     * to run.  To cancel the hold, call e_dbus_server_release().
     */
    hold(): void
    /**
     * This function should be called once during `server` initialization to
     * load all available library modules to extend the `server'`s functionality.
     */
    load_modules(): void
    /**
     * Emits the #EDBusServer::quit signal with the given `code`.
     * 
     * By default the `server` will quit its main loop and cause
     * e_dbus_server_run() to return `code`.
     * @param code an #EDBusServerExitCode
     */
    quit(code: EBackend.DBusServerExitCode): void
    /**
     * Decreates the use count of `server`.
     * 
     * When the use count reaches zero, the server will stop running.
     * 
     * Never call this function except to cancel the effect of a previous call
     * to e_dbus_server_hold().
     */
    release(): void
    /**
     * Emits the #EDBusServer::run signal.
     * 
     * By default the `server` will start its main loop and attempt to acquire
     * its well-known session bus name.  If the `server'`s main loop is already
     * running, the function will immediately return #E_DBUS_SERVER_EXIT_NONE.
     * Otherwise the function blocks until e_dbus_server_quit() is called.
     * 
     * If `wait_for_client` is %TRUE, the `server` will continue running until
     * the first client connection is made instead of quitting on its own if
     * no client connection is made within the first few seconds.
     * @param wait_for_client continue running until a client connects
     */
    run(wait_for_client: boolean): EBackend.DBusServerExitCode
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    /**
     * Returns a list of #EExtension objects bound to `extensible` whose
     * types are ancestors of `extension_type`.  For a complete list of
     * extension objects bound to `extensible,` pass %E_TYPE_EXTENSION.
     * 
     * The list itself should be freed with g_list_free().  The extension
     * objects are owned by `extensible` and should not be unreferenced.
     * @param extension_type the type of extensions to list
     */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    /**
     * Creates an instance of all instantiable subtypes of #EExtension which
     * target the class of `extensible`.  The lifetimes of these newly created
     * #EExtension objects are bound to `extensible` such that they are finalized
     * when `extensible` is finalized.
     */
    load_extensions(): void
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
    /* Virtual methods of EDataBook-1.2.EDataBook.DataBookFactory */
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
    /* Virtual methods of EBackend-1.2.EBackend.DataFactory */
    vfunc_complete_open(invocation: Gio.DBusMethodInvocation, object_path: string, bus_name: string, extension_name: string): void
    /**
     * Used only when backend-per-process is off.
     * 
     * Free the returned pointer with g_object_unref(), if not NULL and no longer
     * needed.
     * @param backend_factory 
     * @param source 
     */
    vfunc_create_backend(backend_factory: EBackend.BackendFactory, source: EDataServer.Source): EBackend.Backend | null
    vfunc_open_backend(backend: EBackend.Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
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
    /* Virtual methods of EBackend-1.2.EBackend.DBusServer */
    vfunc_bus_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_lost(connection: Gio.DBusConnection): void
    vfunc_quit_server(code: EBackend.DBusServerExitCode): void
    vfunc_run_server(): EBackend.DBusServerExitCode
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
    /* Signals of EBackend-1.2.EBackend.DBusServer */
    /**
     * Emitted when `server` acquires a connection to the session bus.
     * @param connection the #GDBusConnection to the session bus
     */
    connect(sigName: "bus-acquired", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-acquired", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    /**
     * Emitted when `server` acquires its well-known session bus name.
     * @param connection the #GDBusConnection to the session bus
     */
    connect(sigName: "bus-name-acquired", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-acquired", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    /**
     * Emitted when `server` loses its well-known session bus name
     * or the session bus connection has been closed.
     * @param connection the #GDBusconnection to the session bus,              or %NULL if the connection has been closed
     */
    connect(sigName: "bus-name-lost", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-lost", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    /**
     * Emitted to request that `server` quit its main loop.
     * @param code an #EDBusServerExitCode
     */
    connect(sigName: "quit-server", callback: (($obj: DataBookFactory, code: EBackend.DBusServerExitCode) => void)): number
    connect_after(sigName: "quit-server", callback: (($obj: DataBookFactory, code: EBackend.DBusServerExitCode) => void)): number
    emit(sigName: "quit-server", code: EBackend.DBusServerExitCode): void
    /**
     * Emitted to request that `server` start its main loop and
     * attempt to acquire its well-known session bus name.
     */
    connect(sigName: "run-server", callback: (($obj: DataBookFactory) => EBackend.DBusServerExitCode)): number
    connect_after(sigName: "run-server", callback: (($obj: DataBookFactory) => EBackend.DBusServerExitCode)): number
    emit(sigName: "run-server"): void
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
    connect(sigName: "notify", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend-per-process", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-per-process", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::registry", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reload-supported", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reload-supported", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBookFactory_ConstructProps)
    _init (config?: DataBookFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend_per_process: number, cancellable?: Gio.Cancellable | null): DataBookFactory
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
interface DataBookView_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataBook-1.2.EDataBook.DataBookView */
    backend?: BookBackend
    connection?: Gio.DBusConnection
    object_path?: string
    sexp?: BookBackendSExp
}
class DataBookView {
    /* Properties of EDataBook-1.2.EDataBook.DataBookView */
    readonly backend: BookBackend
    readonly connection: Gio.DBusConnection
    readonly object_path: string
    readonly sexp: BookBackendSExp
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.DataBookView */
    /**
     * Returns the #GDBusConnection on which the AddressBookView D-Bus
     * interface is exported.
     */
    get_connection(): Gio.DBusConnection
    get_fields_of_interest(): GLib.HashTable | null
    /**
     * Gets the #EBookClientViewFlags that control the behaviour of `view`.
     */
    get_flags(): EBookContacts.BookClientViewFlags
    /**
     * Returns the object path at which the AddressBookView D-Bus interface
     * is exported.
     */
    get_object_path(): string
    /**
     * Gets the s-expression used for matching contacts to `view`.
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
    notify_progress(percent: number, message: string): void
    /**
     * Notify listeners that a contact specified by `id`
     * was removed from `view`.
     * @param id a unique contact ID
     */
    notify_remove(id: string): void
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
    notify_update_prefiltered_vcard(id: string, vcard: string): void
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
    notify_update_vcard(id: string, vcard: string): void
    /**
     * Refs the backend that `view` is querying. Unref the returned backend,
     * if not %NULL, with g_object_unref(), when no longer needed.
     */
    ref_backend(): BookBackend | null
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
    /* Virtual methods of EDataBook-1.2.EDataBook.DataBookView */
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
    connect(sigName: "notify", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-path", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sexp", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sexp", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBookView_ConstructProps)
    _init (config?: DataBookView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: BookBackend, sexp: BookBackendSExp, connection: Gio.DBusConnection, object_path: string): DataBookView
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
interface SubprocessBookFactory_ConstructProps extends EBackend.SubprocessFactory_ConstructProps {
}
class SubprocessBookFactory {
    /* Properties of EBackend-1.2.EBackend.SubprocessFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.SubprocessFactory */
    /**
     * Calls e_backend_prepare_shutdown() for the list of used backends.
     */
    call_backends_prepare_shutdown(): void
    /**
     * Returns a list of used backends.
     */
    get_backends_list(): EBackend.Backend[]
    /**
     * Returns the #ESourceRegistry owned by `subprocess_factory`.
     */
    get_registry(): EDataServer.SourceRegistry
    /**
     * Returns the #EBackend data D-Bus object path
     * @param connection a #GDBusConnection
     * @param uid UID of an #ESource to open
     * @param backend_factory_type_name the name of the backend factory type
     * @param module_filename the name (full-path) of the backend module to be loaded
     * @param proxy a #GDBusInterfaceSkeleton, used to communicate to the subprocess backend
     * @param cancellable a #GCancellable
     */
    open_backend(connection: Gio.DBusConnection, uid: string, backend_factory_type_name: string, module_filename: string, proxy: Gio.DBusInterfaceSkeleton, cancellable?: Gio.Cancellable | null): string
    /**
     * Returns either a newly-created or existing #EBackend for #ESource.
     * The returned #EBackend is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * 
     * If the newly-created backend implements the #GInitable interface, then
     * g_initable_init() is also called on it using `cancellable` and `error`.
     * 
     * The `subprocess_factory` retains a strong reference to `backend`.
     * 
     * If no suitable #EBackendFactory exists, or if the #EBackend fails to
     * initialize, the function sets `error` and returns %NULL.
     * @param uid UID of an #ESource to open
     * @param backend_factory_type_name the name of the backend factory type
     * @param module_filename the name (full-path) of the backend module to be loaded
     * @param cancellable optional #GCancellable object, or %NULL
     */
    ref_initable_backend(uid: string, backend_factory_type_name: string, module_filename: string, cancellable?: Gio.Cancellable | null): EBackend.Backend | null
    /**
     * Installs a toggle reference on the backend, that can receive a signal to
     * shutdown once all client connections are closed.
     * @param backend an #EBackend
     * @param proxy a #GDBusInterfaceSkeleton, used to communicate to the subprocess backend
     */
    set_backend_callbacks(backend: EBackend.Backend, proxy: Gio.DBusInterfaceSkeleton): void
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
    /* Virtual methods of EDataBook-1.2.EDataBook.SubprocessBookFactory */
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
    /* Virtual methods of EBackend-1.2.EBackend.SubprocessFactory */
    vfunc_backend_closed(backend: EBackend.Backend): void
    vfunc_backend_created(backend: EBackend.Backend): void
    vfunc_open_data(backend: EBackend.Backend, connection: Gio.DBusConnection, data?: object | null, cancellable?: Gio.Cancellable | null): string
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
    connect(sigName: "notify", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::registry", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SubprocessBookFactory_ConstructProps)
    _init (config?: SubprocessBookFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): SubprocessBookFactory
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
interface SystemLocaleWatcher_ConstructProps extends GObject.Object_ConstructProps {
}
class SystemLocaleWatcher {
    /* Properties of EDataBook-1.2.EDataBook.SystemLocaleWatcher */
    /**
     * Current locale, as detected. It can be %NULL, when the locale
     * was not detected yet.
     */
    readonly locale: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook-1.2.EDataBook.SystemLocaleWatcher */
    /**
     * Returns the current locale, as detected by the `watcher`. The string
     * is duplicated for thread safety. It can be %NULL, when the locale
     * was not detected yet.
     * 
     * Free it with g_free(), when no longer needed.
     */
    dup_locale(): string | null
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
    connect(sigName: "notify", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locale", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SystemLocaleWatcher_ConstructProps)
    _init (config?: SystemLocaleWatcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SystemLocaleWatcher
    static $gtype: GObject.Type
}
abstract class BookBackendClass {
    /* Fields of EDataBook-1.2.EDataBook.BookBackendClass */
    /**
     * Whether a serial dispatch queue should
     *                             be used for this backend or not. The default is %TRUE.
     */
    use_serial_dispatch_queue: boolean
    impl_get_backend_property: (backend: BookBackend, prop_name: string) => string
    impl_open: (backend: BookBackend, book: DataBook, opid: number, cancellable?: Gio.Cancellable | null) => void
    impl_refresh: (backend: BookBackend, book: DataBook, opid: number, cancellable?: Gio.Cancellable | null) => void
    impl_create_contacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number) => void
    impl_modify_contacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number) => void
    impl_remove_contacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number) => void
    impl_get_contact: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string) => void
    impl_get_contact_list: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string) => void
    impl_get_contact_list_uids: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string) => void
    impl_start_view: (backend: BookBackend, view: DataBookView) => void
    impl_stop_view: (backend: BookBackend, view: DataBookView) => void
    impl_notify_update: (backend: BookBackend, contact: EBookContacts.Contact) => void
    impl_configure_direct: (backend: BookBackend, config: string) => void
    impl_set_locale: (backend: BookBackend, locale: string, cancellable?: Gio.Cancellable | null) => boolean
    impl_dup_locale: (backend: BookBackend) => string
    impl_delete_cursor: (backend: BookBackend, cursor: DataBookCursor) => boolean
    closed: (backend: BookBackend, sender: string) => void
    shutdown: (backend: BookBackend) => void
    impl_contains_email: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, email_address: string) => void
    reserved_padding: object[]
    static name: string
}
abstract class BookBackendFactoryClass {
    /* Fields of EDataBook-1.2.EDataBook.BookBackendFactoryClass */
    /**
     * The string identifier for this book backend type
     */
    factory_name: string
    /**
     * The #GType to use to build #EBookBackends for this factory
     */
    backend_type: GObject.Type
    static name: string
}
class BookBackendFactoryPrivate {
    static name: string
}
class BookBackendPrivate {
    static name: string
}
abstract class BookBackendSExpClass {
    static name: string
}
class BookBackendSExpPrivate {
    static name: string
}
abstract class BookBackendSyncClass {
    /* Fields of EDataBook-1.2.EDataBook.BookBackendSyncClass */
    open_sync: (backend: BookBackendSync, cancellable?: Gio.Cancellable | null) => boolean
    refresh_sync: (backend: BookBackendSync, cancellable?: Gio.Cancellable | null) => boolean
    contains_email_sync: (backend: BookBackendSync, email_address: string, cancellable?: Gio.Cancellable | null) => boolean
    reserved_padding: object[]
    static name: string
}
class BookBackendSyncPrivate {
    static name: string
}
abstract class BookCacheClass {
    /* Fields of EDataBook-1.2.EDataBook.BookCacheClass */
    e164_changed: (book_cache: BookCache, contact: EBookContacts.Contact, is_replace: boolean) => void
    dup_contact_revision: (book_cache: BookCache, contact: EBookContacts.Contact) => string
    static name: string
}
class BookCacheCursor {
    static name: string
    static new(book_cache: BookCache, sexp: string | null, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]): BookCacheCursor
    constructor(book_cache: BookCache, sexp: string | null, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[])
    /* Static methods and pseudo-constructors */
    static new(book_cache: BookCache, sexp: string | null, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]): BookCacheCursor
}
class BookCachePrivate {
    static name: string
}
class BookCacheSearchData {
    /* Fields of EDataBook-1.2.EDataBook.BookCacheSearchData */
    /**
     * The %E_CONTACT_UID field of this contact
     */
    uid: string
    /**
     * The vcard string
     */
    vcard: string
    /**
     * Any extra data associated with the vcard
     */
    extra: string
    /* Methods of EDataBook-1.2.EDataBook.BookCacheSearchData */
    copy(): BookCacheSearchData | null
    static name: string
    static new(uid: string, vcard: string, extra?: string | null): BookCacheSearchData
    constructor(uid: string, vcard: string, extra?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, vcard: string, extra?: string | null): BookCacheSearchData
    /**
     * Frees the `data` structure, previously allocated with e_book_cache_search_data_new()
     * or e_book_cache_search_data_copy().
     * @param data an #EBookCacheSearchData
     */
    static free(data?: object | null): void
}
abstract class BookMetaBackendClass {
    /* Fields of EDataBook-1.2.EDataBook.BookMetaBackendClass */
    connect_sync: (meta_backend: BookMetaBackend, credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    disconnect_sync: (meta_backend: BookMetaBackend, cancellable?: Gio.Cancellable | null) => boolean
    get_changes_sync: (meta_backend: BookMetaBackend, last_sync_tag: string | null, is_repeat: boolean, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_repeat */ boolean, /* out_created_objects */ BookMetaBackendInfo[], /* out_modified_objects */ BookMetaBackendInfo[], /* out_removed_objects */ BookMetaBackendInfo[] ]
    list_existing_sync: (meta_backend: BookMetaBackend, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_existing_objects */ BookMetaBackendInfo[] ]
    load_contact_sync: (meta_backend: BookMetaBackend, uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact, /* out_extra */ string ]
    save_contact_sync: (meta_backend: BookMetaBackend, overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_uid */ string, /* out_new_extra */ string ]
    remove_contact_sync: (meta_backend: BookMetaBackend, conflict_resolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable?: Gio.Cancellable | null) => boolean
    search_sync: (meta_backend: BookMetaBackend, expr: string | null, meta_contact: boolean, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    search_uids_sync: (meta_backend: BookMetaBackend, expr?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_uids */ string[] ]
    requires_reconnect: (meta_backend: BookMetaBackend) => boolean
    source_changed: (meta_backend: BookMetaBackend) => void
    get_ssl_error_details: (meta_backend: BookMetaBackend) => [ /* returnType */ boolean, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    static name: string
}
class BookMetaBackendInfo {
    /* Fields of EDataBook-1.2.EDataBook.BookMetaBackendInfo */
    uid: string
    revision: string
    object: string
    extra: string
    /* Methods of EDataBook-1.2.EDataBook.BookMetaBackendInfo */
    copy(): BookMetaBackendInfo | null
    static name: string
    static new(uid: string, revision?: string | null, object?: string | null, extra?: string | null): BookMetaBackendInfo
    constructor(uid: string, revision?: string | null, object?: string | null, extra?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, revision?: string | null, object?: string | null, extra?: string | null): BookMetaBackendInfo
    /**
     * Frees the `ptr` structure, previously allocated with e_book_meta_backend_info_new()
     * or e_book_meta_backend_info_copy().
     * @param ptr an #EBookMetaBackendInfo
     */
    static free(ptr?: object | null): void
}
class BookMetaBackendPrivate {
    static name: string
}
abstract class BookSqliteClass {
    /* Fields of EDataBook-1.2.EDataBook.BookSqliteClass */
    before_insert_contact: (ebsql: BookSqlite, db: object | null, contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable?: Gio.Cancellable | null) => boolean
    before_remove_contact: (ebsql: BookSqlite, db: object | null, contact_uid: string, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
class BookSqlitePrivate {
    static name: string
}
abstract class DataBookClass {
    static name: string
}
abstract class DataBookCursorCacheClass {
    static name: string
}
class DataBookCursorCachePrivate {
    static name: string
}
abstract class DataBookCursorClass {
    /* Fields of EDataBook-1.2.EDataBook.DataBookCursorClass */
    /**
     * The #EDataBookCursorSetSexpFunc delegate to set the search expression
     */
    set_sexp: DataBookCursorSetSexpFunc
    /**
     * The #EDataBookCursorStepFunc delegate to navigate the cursor
     */
    step: DataBookCursorStepFunc
    /**
     * The #EDataBookCursorSetAlphabetIndexFunc delegate to set the alphabetic position
     */
    set_alphabetic_index: DataBookCursorSetAlphabetIndexFunc
    /**
     * The #EDataBookCursorGetPositionFunc delegate to calculate the current total and position values
     */
    get_position: DataBookCursorGetPositionFunc
    /**
     * The #EDataBookCursorCompareContactFunc delegate to compare an #EContact with the cursor position
     */
    compare_contact: DataBookCursorCompareContactFunc
    /**
     * The #EDataBookCursorLoadLocaleFunc delegate used to reload the locale setting
     */
    load_locale: DataBookCursorLoadLocaleFunc
    static name: string
}
class DataBookCursorPrivate {
    static name: string
}
abstract class DataBookCursorSqliteClass {
    static name: string
}
class DataBookCursorSqlitePrivate {
    static name: string
}
abstract class DataBookDirectClass {
    /* Fields of EDataBook-1.2.EDataBook.DataBookDirectClass */
    parent: GObject.ObjectClass
    static name: string
}
class DataBookDirectPrivate {
    static name: string
}
abstract class DataBookFactoryClass {
    /* Fields of EDataBook-1.2.EDataBook.DataBookFactoryClass */
    parent_class: EBackend.DataFactoryClass
    static name: string
}
class DataBookFactoryPrivate {
    static name: string
}
class DataBookPrivate {
    static name: string
}
abstract class DataBookViewClass {
    /* Fields of EDataBook-1.2.EDataBook.DataBookViewClass */
    parent: GObject.ObjectClass
    static name: string
}
class DataBookViewPrivate {
    static name: string
}
abstract class SubprocessBookFactoryClass {
    /* Fields of EDataBook-1.2.EDataBook.SubprocessBookFactoryClass */
    parent_class: EBackend.SubprocessFactoryClass
    static name: string
}
class SubprocessBookFactoryPrivate {
    static name: string
}
abstract class SystemLocaleWatcherClass {
    /* Fields of EDataBook-1.2.EDataBook.SystemLocaleWatcherClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class SystemLocaleWatcherPrivate {
    static name: string
}
class bSqlCursor {
    static name: string
}
class bSqlSearchData {
    /* Fields of EDataBook-1.2.EDataBook.bSqlSearchData */
    /**
     * The %E_CONTACT_UID field of this contact
     */
    uid: string
    /**
     * The the vcard string
     */
    vcard: string
    /**
     * Any extra data associated to the vcard
     */
    extra: string
    static name: string
}
}
export default EDataBook;