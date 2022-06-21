// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gda-5.0
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gda {

enum BatchError {
    BATCH_CONFLICTING_PARAMETER_ERROR,
}
enum ConfigError {
    DSN_NOT_FOUND_ERROR,
    PERMISSION_ERROR,
    PROVIDER_NOT_FOUND_ERROR,
    PROVIDER_CREATION_ERROR,
}
enum ConnectionError {
    DSN_NOT_FOUND_ERROR,
    PROVIDER_NOT_FOUND_ERROR,
    PROVIDER_ERROR,
    NO_CNC_SPEC_ERROR,
    NO_PROVIDER_SPEC_ERROR,
    OPEN_ERROR,
    STATEMENT_TYPE_ERROR,
    CANT_LOCK_ERROR,
    TASK_NOT_FOUND_ERROR,
    UNSUPPORTED_THREADS_ERROR,
    CLOSED_ERROR,
    META_DATA_CONTEXT_ERROR,
    UNSUPPORTED_ASYNC_EXEC_ERROR,
}
enum ConnectionEventCode {
    CONSTRAINT_VIOLATION,
    RESTRICT_VIOLATION,
    NOT_NULL_VIOLATION,
    FOREIGN_KEY_VIOLATION,
    UNIQUE_VIOLATION,
    CHECK_VIOLATION,
    INSUFFICIENT_PRIVILEGES,
    UNDEFINED_COLUMN,
    UNDEFINED_FUNCTION,
    UNDEFINED_TABLE,
    DUPLICATE_COLUMN,
    DUPLICATE_DATABASE,
    DUPLICATE_FUNCTION,
    DUPLICATE_SCHEMA,
    DUPLICATE_TABLE,
    DUPLICATE_ALIAS,
    DUPLICATE_OBJECT,
    SYNTAX_ERROR,
    UNKNOWN,
}
enum ConnectionEventType {
    NOTICE,
    WARNING,
    ERROR,
    COMMAND,
}
/**
 * Used in gda_connection_supports_feature() and gda_server_provider_supports_feature() to test if a connection
 * or a database provider supports some specific feature.
 */
enum ConnectionFeature {
    /**
     * test for aggregates support
     */
    AGGREGATES,
    /**
     * test for BLOBS (binary large objects) support
     */
    BLOBS,
    /**
     * test for indexes support
     */
    INDEXES,
    /**
     * test for tables inheritance support
     */
    INHERITANCE,
    /**
     * test for namespaces support
     */
    NAMESPACES,
    /**
     * test for functions support
     */
    PROCEDURES,
    /**
     * test for sequences support
     */
    SEQUENCES,
    /**
     * test for SQL language (even specific to the database) support
     */
    SQL,
    /**
     * test for transactions support
     */
    TRANSACTIONS,
    /**
     * test for savepoints within transactions support
     */
    SAVEPOINTS,
    /**
     * test if savepoints can be removed
     */
    SAVEPOINTS_REMOVE,
    /**
     * test for triggers support
     */
    TRIGGERS,
    /**
     * test for updatable cursors support
     */
    UPDATABLE_CURSOR,
    /**
     * test for users support
     */
    USERS,
    /**
     * test for views support
     */
    VIEWS,
    /**
     * test for distributed transactions support
     */
    XA_TRANSACTIONS,
    /**
     * test for native multi-threading support
     */
    MULTI_THREADING,
    /**
     * test if connection supports asynchronous execution
     */
    ASYNC_EXEC,
    /**
     * not used
     */
    LAST,
}
/**
 * Used with gda_connection_get_meta_store_data() to describe what meta data to extract from
 * a connection's associated #GdaMetaStore.
 */
enum ConnectionMetaType {
    /**
     * lists the <link linkend="GdaConnectionMetaTypeGDA_CONNECTION_META_NAMESPACES">namespaces</link> (or schemas for PostgreSQL)
     */
    NAMESPACES,
    /**
     * lists the <link linkend="GdaConnectionMetaTypeGDA_CONNECTION_META_TYPES">database types</link>
     */
    TYPES,
    /**
     * lists the <link linkend="GdaConnectionMetaTypeGDA_CONNECTION_META_TABLES">tables</link>
     */
    TABLES,
    /**
     * lists the <link linkend="GdaConnectionMetaTypeGDA_CONNECTION_META_VIEWS">views</link>
     */
    VIEWS,
    /**
     * lists the <link linkend="GdaConnectionMetaTypeGDA_CONNECTION_META_FIELDS">table's or view's fields</link>
     */
    FIELDS,
    /**
     * lists the <link linkend="GdaConnectionMetaTypeGDA_CONNECTION_META_INDEXES">table's indexes</link>
     */
    INDEXES,
}
enum DataComparatorError {
    MISSING_DATA_MODEL_ERROR,
    COLUMN_TYPES_MISMATCH_ERROR,
    MODEL_ACCESS_ERROR,
    USER_CANCELLED_ERROR,
}
enum DataModelError {
    ROW_OUT_OF_RANGE_ERROR,
    COLUMN_OUT_OF_RANGE_ERROR,
    VALUES_LIST_ERROR,
    VALUE_TYPE_ERROR,
    ROW_NOT_FOUND_ERROR,
    ACCESS_ERROR,
    FEATURE_NON_SUPPORTED_ERROR,
    FILE_EXIST_ERROR,
    XML_FORMAT_ERROR,
    TRUNCATED_ERROR,
    OTHER_ERROR,
}
enum DataModelHint {
    START_BATCH_UPDATE,
    END_BATCH_UPDATE,
    REFRESH,
}
/**
 * Format to use when exporting a data model, see gda_data_model_export_to_string() and gda_data_model_export_to_file()
 */
enum DataModelIOFormat {
    /**
     * data is exported as an XML structure
     */
    DATA_ARRAY_XML,
    /**
     * data is exported as CSV
     */
    TEXT_SEPARATED,
    /**
     * data is exported as a human readable table
     */
    TEXT_TABLE,
}
enum DataModelIterError {
    DATA_MODEL_ITER_COLUMN_OUT_OF_RANGE_ERROR,
}
/**
 * Possible operations for the data fields.
 */
enum DataPivotAggregate {
    AVG,
    COUNT,
    MAX,
    MIN,
    SUM,
}
/**
 * Possible #GdaDataPivot related errors.
 */
enum DataPivotError {
    INTERNAL_ERROR,
    SOURCE_MODEL_ERROR,
    FIELD_FORMAT_ERROR,
    USAGE_ERROR,
    OVERFLOW_ERROR,
}
/**
 * Define types of field to be used when defining a #GdaDataPivot analysis.
 */
enum DataPivotFieldType {
    ROW,
    COLUMN,
}
enum DataProxyError {
    COMMIT_ERROR,
    COMMIT_CANCELLED,
    READ_ONLY_VALUE,
    READ_ONLY_ROW,
    FILTER_ERROR,
}
/**
 * Defines what criteria gda_data_select_compute_modification_statements_ext() uses
 * to uniquely identify a single row in a table when creating modification statements.
 */
enum DataSelectConditionType {
    /**
     * only primary key fields are used
     */
    PK,
    /**
     * all the columns of the tables are used
     */
    ALL_COLUMNS,
}
enum DataSelectError {
    MODIFICATION_STATEMENT_ERROR,
    MISSING_MODIFICATION_STATEMENT_ERROR,
    CONNECTION_ERROR,
    ACCESS_ERROR,
    SQL_ERROR,
    SAFETY_LOCKED_ERROR,
}
enum DiffType {
    ADD_ROW,
    REMOVE_ROW,
    MODIFY_ROW,
}
enum HolderError {
    STRING_CONVERSION_ERROR,
    VALUE_TYPE_ERROR,
    VALUE_NULL_ERROR,
}
/**
 * Defines the search scope of an LDAP search command, relative to the base object.
 */
enum LdapSearchScope {
    /**
     * search of the base object only
     */
    BASE,
    /**
     * search of immediate children of the base object, but does not include the base object itself
     */
    ONELEVEL,
    /**
     * search of the base object and the entire subtree below the base object
     */
    SUBTREE,
}
/**
 * Type of database object which can be handled as a #GdaMetaDbObject
 */
enum MetaDbObjectType {
    /**
     * unknown type
     */
    UNKNOWN,
    /**
     * represents a table
     */
    TABLE,
    /**
     * represents a view
     */
    VIEW,
}
/**
 * Defines the filtering policy of a foreign key when invoked on an UPDATE
 * or DELETE operation.
 */
enum MetaForeignKeyPolicy {
    /**
     * unspecified policy
     */
    UNKNOWN,
    /**
     * not enforced policy
     */
    NONE,
    /**
     * return an error, no action taken
     */
    NO_ACTION,
    /**
     * same as `GDA_META_FOREIGN_KEY_NO_ACTION,` not deferrable
     */
    RESTRICT,
    /**
     * policy is to delete any rows referencing the deleted row, or update the value of the referencing column to the new value of the referenced column, respectively
     */
    CASCADE,
    /**
     * policy is to set the referencing column to NULL
     */
    SET_NULL,
    /**
     * policy is to set the referencing column to its default value
     */
    SET_DEFAULT,
}
/**
 * Types of sorting
 */
enum MetaSortType {
    /**
     * sort alphabetically
     */
    ALHAPETICAL,
    /**
     * sort by dependencies
     */
    DEPENDENCIES,
}
enum MetaStoreChangeType {
    ADD,
    REMOVE,
    MODIFY,
}
enum MetaStoreError {
    INCORRECT_SCHEMA_ERROR,
    UNSUPPORTED_PROVIDER_ERROR,
    INTERNAL_ERROR,
    META_CONTEXT_ERROR,
    MODIFY_CONTENTS_ERROR,
    EXTRACT_SQL_ERROR,
    ATTRIBUTE_NOT_FOUND_ERROR,
    ATTRIBUTE_ERROR,
    SCHEMA_OBJECT_NOT_FOUND_ERROR,
    SCHEMA_OBJECT_CONFLICT_ERROR,
    SCHEMA_OBJECT_DESCR_ERROR,
    TRANSACTION_ALREADY_STARTED_ERROR,
}
enum MetaStructError {
    UNKNOWN_OBJECT_ERROR,
    DUPLICATE_OBJECT_ERROR,
    INCOHERENCE_ERROR,
    XML_ERROR,
}
enum ServerOperationError {
    OBJECT_NAME_ERROR,
    INCORRECT_VALUE_ERROR,
    XML_ERROR,
}
enum ServerOperationNodeStatus {
    OPTIONAL,
    REQUIRED,
    UNKNOWN,
}
enum ServerOperationNodeType {
    PARAMLIST,
    DATA_MODEL,
    PARAM,
    SEQUENCE,
    SEQUENCE_ITEM,
    DATA_MODEL_COLUMN,
    UNKNOWN,
}
enum ServerOperationType {
    CREATE_DB,
    DROP_DB,
    CREATE_TABLE,
    DROP_TABLE,
    RENAME_TABLE,
    ADD_COLUMN,
    DROP_COLUMN,
    CREATE_INDEX,
    DROP_INDEX,
    CREATE_VIEW,
    DROP_VIEW,
    COMMENT_TABLE,
    COMMENT_COLUMN,
    CREATE_USER,
    ALTER_USER,
    DROP_USER,
    LAST,
}
enum ServerProviderError {
    METHOD_NON_IMPLEMENTED_ERROR,
    PREPARE_STMT_ERROR,
    EMPTY_STMT_ERROR,
    MISSING_PARAM_ERROR,
    STATEMENT_EXEC_ERROR,
    OPERATION_ERROR,
    INTERNAL_ERROR,
    BUSY_ERROR,
    NON_SUPPORTED_ERROR,
    SERVER_VERSION_ERROR,
    DATA_ERROR,
    DEFAULT_VALUE_HANDLING_ERROR,
    MISUSE_ERROR,
    FILE_NOT_FOUND_ERROR,
}
enum SetError {
    XML_SPEC_ERROR,
    HOLDER_NOT_FOUND_ERROR,
    INVALID_ERROR,
    READ_ONLY_ERROR,
    IMPLEMENTATION_ERROR,
}
enum SqlBuilderError {
    WRONG_TYPE_ERROR,
    MISUSE_ERROR,
}
enum SqlError {
    STRUCTURE_CONTENTS_ERROR,
    MALFORMED_IDENTIFIER_ERROR,
    MISSING_IDENTIFIER_ERROR,
    VALIDATION_ERROR,
}
enum SqlOperatorType {
    AND,
    OR,
    EQ,
    IS,
    LIKE,
    BETWEEN,
    GT,
    LT,
    GEQ,
    LEQ,
    DIFF,
    REGEXP,
    REGEXP_CI,
    NOT_REGEXP,
    NOT_REGEXP_CI,
    SIMILAR,
    ISNULL,
    ISNOTNULL,
    NOT,
    IN,
    NOTIN,
    CONCAT,
    PLUS,
    MINUS,
    STAR,
    DIV,
    REM,
    BITAND,
    BITOR,
    BITNOT,
    ILIKE,
    NOTLIKE,
    NOTILIKE,
    GLOB,
}
enum SqlParserError {
    SYNTAX_ERROR,
    OVERFLOW_ERROR,
    EMPTY_SQL_ERROR,
}
enum SqlParserFlavour {
    STANDARD,
    SQLITE,
    MYSQL,
    ORACLE,
    POSTGRESQL,
}
enum SqlParserMode {
    PARSE,
    DELIMIT,
}
enum SqlSelectJoinType {
    CROSS,
    NATURAL,
    INNER,
    LEFT,
    RIGHT,
    FULL,
}
enum SqlStatementCompoundType {
    UNION,
    UNION_ALL,
    INTERSECT,
    INTERSECT_ALL,
    EXCEPT,
    EXCEPT_ALL,
}
/**
 * Known types of statements
 */
enum SqlStatementType {
    /**
     * a SELECT statement
     */
    SELECT,
    /**
     * an INSERT statement
     */
    INSERT,
    /**
     * an UPDATE statement
     */
    UPDATE,
    /**
     * a DELETE statement
     */
    DELETE,
    /**
     * a compound statement: multiple SELECT statements grouped together using an operator
     */
    COMPOUND,
    /**
     * start of transaction statement
     */
    BEGIN,
    /**
     * transaction abort statement
     */
    ROLLBACK,
    /**
     * transaction commit statement
     */
    COMMIT,
    /**
     * new savepoint definition statement
     */
    SAVEPOINT,
    /**
     * return to savepoint statement
     */
    ROLLBACK_SAVEPOINT,
    /**
     * savepoint deletion statement
     */
    DELETE_SAVEPOINT,
    /**
     * unknown statement, only identifies variables
     */
    UNKNOWN,
    /**
     * not used
     */
    NONE,
}
enum StatementError {
    PARSE_ERROR,
    SYNTAX_ERROR,
    NO_CNC_ERROR,
    CNC_CLOSED_ERROR,
    EXEC_ERROR,
    PARAM_TYPE_ERROR,
    PARAM_ERROR,
}
/**
 * Defines the kind of notification which can be obtained when reading from te #GIOChannel
 * returned by gda_thread_wrapper_get_io_channel().
 */
enum ThreadNotificationType {
    /**
     * the notification regards a job finished
     */
    JOB,
    /**
     * the notification regards a signal
     */
    SIGNAL,
}
enum ThreadWrapperError {
    THREAD_WRAPPER_UNKNOWN_ERROR,
}
enum TransactionIsolation {
    UNKNOWN,
    READ_COMMITTED,
    READ_UNCOMMITTED,
    REPEATABLE_READ,
    SERIALIZABLE,
}
enum TransactionStatusEventType {
    SAVEPOINT,
    SQL,
    SUB_TRANSACTION,
}
enum TransactionStatusState {
    OK,
    FAILED,
}
enum TreeError {
    TREE_UNKNOWN_ERROR,
}
enum TreeManagerError {
    TREE_MANAGER_UNKNOWN_ERROR,
}
enum TreeNodeError {
    TREE_NODE_UNKNOWN_ERROR,
}
enum XaTransactionError {
    ALREADY_REGISTERED_ERROR,
    DTP_NOT_SUPPORTED_ERROR,
    CONNECTION_BRANCH_LENGTH_ERROR,
}
/**
 * Specifies some aspects of a connection when opening it.
 * 
 * Additional information about the GDA_CONNECTION_OPTIONS_SQL_IDENTIFIERS_CASE_SENSITIVE flag:
 * <itemizedlist>
 *   <listitem><para>For example without this flag, if the table
 *       name specified in a #GdaServerOperation to create a table is
 *       <emphasis>MyTable</emphasis>, then usually the database will create a table named
 *       <emphasis>mytable</emphasis>, whereas with this flag, the table will be created
 *       as <emphasis>MyTable</emphasis> (note that in the end the database may still decide
 *       to name the table <emphasis>mytable</emphasis> or differently if it can't do
 *       otherwise).</para></listitem>
 *   <listitem><para>Libgda will not apply this rule when parsing SQL code, the SQL code being parsed
 *       has to be conform to the database it will be used with</para></listitem>
 * </itemizedlist>
 * 
 * Additional information about the GDA_CONNECTION_OPTIONS_THREAD_SAFE and GDA_CONNECTION_OPTIONS_THREAD_ISOLATED flags:
 * The GDA_CONNECTION_OPTIONS_THREAD_SAFE flag specifies that it has to be able to use the returned connection object from
 * several threads at once (locking is ensured by the #GdaConnection itself). Depending on the database provider's
 * implementation and on the native libraries it uses, the "normal" connection object might not respect this requirement,
 * and in this case a specific thread is started and used as the unique thread which will manipulate the actual connection,
 * while a "wrapper connection" is actually returned and used by the caller (that wrapper connection passes method calls
 * from the calling thread to the actual connection's specific thread, and gets the results back).
 * 
 * The GDA_CONNECTION_OPTIONS_THREAD_ISOLATED forces using a specific thread and a "wrapper connection" even if the
 * "normal" connection would itself be thread safe; this is useful for example to be sure the asynchronous API can
 * always be used (see gda_connection_async_statement_execute()).
 * 
 * Having a specific thread and a "wrapper connection" definitely has an impact on the performances (because it involves
 * messages passing between threads for every method call), so using the
 * GDA_CONNECTION_OPTIONS_THREAD_SAFE or GDA_CONNECTION_OPTIONS_THREAD_ISOLATED flags should be carefully considered.
 * 
 * Note about the `GDA_CONNECTION_OPTIONS_AUTO_META_DATA` flag:
 * <itemizedlist>
 *  <listitem><para>Every time a DDL statement is successfully executed, the associated meta data, if
 *               defined, will be updated, which has a impact on performances</para></listitem>
 *  <listitem><para>If a transaction is started and some DDL statements are executed and the transaction
 *            is not rolled back or committed, then the meta data may end up being wrong</para></listitem>
 * </itemizedlist>
 * @bitfield 
 */
enum ConnectionOptions {
    /**
     * no specific aspect
     */
    NONE,
    /**
     * this flag specifies that the connection to open should be in a read-only mode
     *                                    (this policy is not correctly enforced at the moment)
     */
    READ_ONLY,
    /**
     * this flag specifies that SQL identifiers submitted as input
     *                                    to Libgda have to keep their case sensitivity.
     */
    SQL_IDENTIFIERS_CASE_SENSITIVE,
    /**
     * this flag specifies that the connection to open will be used
     *                                     by several threads at once so it has to be thread safe
     */
    THREAD_SAFE,
    /**
     * this flag specifies that the connection to open will be used
     *                                     by several threads at once and requests that the real connection be used
     *                                     only in a sub thread created specifically for it
     */
    THREAD_ISOLATED,
    /**
     * this flags specifies that if a #GdaMetaStore has been associated
     *                                     to the connection, then it is kept up to date with the evolutions in the
     *                                     database's structure. Be aware however that there are some drawbacks
     *                                     explained below.
     */
    AUTO_META_DATA,
}
enum DataModelAccessFlags {
    RANDOM,
    CURSOR_FORWARD,
    CURSOR_BACKWARD,
    CURSOR,
    INSERT,
    UPDATE,
    DELETE,
    WRITE,
}
enum MetaGraphInfo {
    META_GRAPH_COLUMNS,
}
/**
 * Controls which features are computed about database objects.
 * @bitfield 
 */
enum MetaStructFeature {
    /**
     * database objects only have their own attributes
     */
    NONE,
    /**
     * foreign keys are computed for tables
     */
    FOREIGN_KEYS,
    /**
     * for views, the tables they use are also computed
     */
    VIEW_DEPENDENCIES,
    /**
     * all the features are computed
     */
    ALL,
}
enum ServerOperationCreateTableFlag {
    NOTHING_FLAG,
    PKEY_FLAG,
    NOT_NULL_FLAG,
    UNIQUE_FLAG,
    AUTOINC_FLAG,
    FKEY_FLAG,
    PKEY_AUTOINC_FLAG,
}
/**
 * Specifies how SQL identifiers are represented by a specific database
 * @bitfield 
 */
enum SqlIdentifierStyle {
    /**
     * case insensitive SQL identifiers are represented in lower case (meaning that any SQL identifier which has a non lower case character is case sensitive)
     */
    LOWER_CASE,
    /**
     * case insensitive SQL identifiers are represented in upper case (meaning that any SQL identifier which has a non upper case character is case sensitive)
     */
    UPPER_CASE,
}
/**
 * These flags specify how the #GdaDataModel returned when executing a #GdaStatement will be used
 * @bitfield 
 */
enum StatementModelUsage {
    /**
     * access to the data model will be random (usually this will result in a data model completely stored in memory)
     */
    RANDOM_ACCESS,
    /**
     * access to the data model will be done using a cursor moving forward
     */
    CURSOR_FORWARD,
    /**
     * access to the data model will be done using a cursor moving backward
     */
    CURSOR_BACKWARD,
    /**
     * access to the data model will be done using a cursor (moving both forward and backward)
     */
    CURSOR,
    /**
     * specifies that the data model should be executed even if some parameters required to execute it are invalid (in this case the data model will have no row, and will automatically be re-run when the missing parameters are once again valid)
     */
    ALLOW_NOPARAM,
    /**
     * specifies that the data model's contents will be fully loaded into the client side (the memory of the process using Libgda), not requiring the server any more to access the data (the default behaviour is to access the server any time data is to be read, and data is cached in memory). This flag is useful only if used in conjunction with the GDA_STATEMENT_MODEL_RANDOM_ACCESS flag (otherwise an error will be returned).
     */
    OFFLINE,
}
/**
 * Specifies rendering options
 * @bitfield 
 */
enum StatementSqlFlag {
    /**
     * rendering will replace parameters with their values
     */
    PARAMS_AS_VALUES,
    /**
     * rendering will include newlines and indentation to make it easy to read
     */
    PRETTY,
    /**
     * parameters will be rendered using the "/&ast; name:&lt;param_name&gt; ... &ast;/" syntax
     */
    PARAMS_LONG,
    /**
     * parameters will be rendered using the "##&lt;param_name&gt;..." syntax
     */
    PARAMS_SHORT,
    /**
     * parameters will be rendered using the ":&lt;param_name&gt;" syntax
     */
    PARAMS_AS_COLON,
    /**
     * parameters will be rendered using the "$&lt;param_number&gt;" syntax where parameters are numbered starting from 1
     */
    PARAMS_AS_DOLLAR,
    /**
     * parameters will be rendered using the "?&lt;param_number&gt;" syntax where parameters are numbered starting from 1
     */
    PARAMS_AS_QMARK,
    /**
     * parameters will be rendered using the "?" syntax
     */
    PARAMS_AS_UQMARK,
    /**
     * time and timestamp with a timezone information are converted to GMT before rendering, and rendering does not show the timezone information
     */
    TIMEZONE_TO_GMT,
}
enum ValueAttribute {
    NONE,
    IS_NULL,
    CAN_BE_NULL,
    IS_DEFAULT,
    CAN_BE_DEFAULT,
    IS_UNCHANGED,
    ACTIONS_SHOWN,
    DATA_NON_VALID,
    HAS_VALUE_ORIG,
    NO_MODIF,
    UNUSED,
}
/**
 * The corresponding attribute specifies if the object it refers to is auto incremented (value has a G_TYPE_BOOLEAN type).
 */
const ATTRIBUTE_AUTO_INCREMENT: string
/**
 * The corresponding attribute is the description of the object it refers to (value has a G_TYPE_STRING type).
 */
const ATTRIBUTE_DESCRIPTION: string
/**
 * The corresponding attribute specifies if the object it refers to has its value to default (value has a G_TYPE_BOOLEAN type).
 */
const ATTRIBUTE_IS_DEFAULT: string
/**
 * The corresponding attribute is the name of the object it refers to (value has a G_TYPE_STRING type).
 */
const ATTRIBUTE_NAME: string
/**
 * The corresponding attribute is the number of significant digits of the object it refers to (value has a G_TYPE_INT type).
 */
const ATTRIBUTE_NUMERIC_PRECISION: string
/**
 * The corresponding attribute is the number of significant digits to the right of the decimal point of the object it refers to (value has a G_TYPE_INT type).
 */
const ATTRIBUTE_NUMERIC_SCALE: string
/**
 * This attribute, if %TRUE specifies that a tree node may or may not have any children nodes (value has a G_TYPE_BOOLEAN type).
 */
const ATTRIBUTE_TREE_NODE_UNKNOWN_CHILDREN: string
const EXTRA_AUTO_INCREMENT: string
const SQLSTATE_GENERAL_ERROR: string
const SQLSTATE_NO_ERROR: string
const TIMEZONE_INVALID: number
/**
 * Does the opposite of gda_text_to_alphanum(), in the same string
 * @param text a string
 */
function alphanum_to_text(text: string): string
/**
 * Creates a new #GdaBinary structure from an existing one.
 * @param boxed source to get a copy from.
 */
function binary_copy(boxed: object | null): object | null
/**
 * Deallocates all memory associated to the given #GdaBinary.
 * @param boxed #GdaBinary to free.
 */
function binary_free(boxed: object | null): void
/**
 * Creates a new #GdaBlob structure from an existing one.
 * @param boxed source to get a copy from.
 */
function blob_copy(boxed: object | null): object | null
/**
 * Deallocates all memory associated to the given #GdaBlob.
 * @param boxed #GdaBlob to free.
 */
function blob_free(boxed: object | null): void
/**
 * Creates an array of strings (terminated by a %NULL) corresponding to possible completions.
 * If no completion is available, then the returned array contains just one NULL entry, and
 * if it was not possible to try to compute a completions list, then %NULL is returned.
 * @param cnc a #GdaConnection object
 * @param sql a partial SQL statement which is the context of the completion proposal
 * @param start starting position within `sql` of the "token" to complete (starts at 0)
 * @param end ending position within `sql` of the "token" to complete
 */
function completion_list_get(cnc: Connection, sql: string, start: number, end: number): string[] | null
/**
 * Creates an INSERT, an UPDATE and a DELETE statement from a SELECT statement
 * using the database metadata available in `cnc'`s meta store. Each statements are computed only if
 * the corresponding place to store the created statement is not %NULL.
 * @param cnc a #GdaConnection
 * @param select_stmt a SELECT #GdaStatement (compound statements not handled)
 * @param require_pk TRUE if the created statement have to use a primary key
 * @param insert_stmt a place to store the created INSERT statement, or %NULL
 * @param update_stmt a place to store the created UPDATE statement, or %NULL
 * @param delete_stmt a place to store the created DELETE statement, or %NULL
 */
function compute_dml_statements(cnc: Connection, select_stmt: Statement, require_pk: boolean, insert_stmt: Statement | null, update_stmt: Statement | null, delete_stmt: Statement | null): boolean
/**
 * Obtain a pointer to a #GdaDataHandler which can manage #GValue values of type `for_type`. The returned
 * data handler will be adapted to use the current locale information (for example dates will be formatted
 * taking into account the locale).
 * 
 * The returned pointer is %NULL if there is no default data handler available for the `for_type` data type
 * @param for_type a #GType type
 */
function data_handler_get_default(for_type: GObject.GType): DataHandler
function data_model_error_quark(): GLib.Quark
/**
 * Escapes `string` to make it understandable by a DBMS. The escape method is very common and replaces any
 * occurrence of "'" with "''" and "\" with "\\"
 * @param string string to escape
 */
function default_escape_string(string: string): string
/**
 * Do the reverse of gda_default_escape_string(): transforms any "''" into "'", any
 * "\\" into "\" and any "\'" into "'".
 * @param string string to unescape
 */
function default_unescape_string(string: string): string
/**
 * Extract the DSN, username and password from `string`. in `string,` the various parts are strings
 * which are expected to be encoded using an RFC 1738 compliant encoding. If they are specified,
 * the returned username and password strings are correctly decoded.
 * 
 * `out_username` and `out_password` may be set to %NULL depending on `string'`s format.
 * @param string a string in the "[&lt;username&gt;[:&lt;password&gt;]`]`&lt;DSN&gt;" form
 * @param out_dsn a place to store the new string containing the &lt;DSN&gt; part
 * @param out_username a place to store the new string containing the &lt;username&gt; part
 * @param out_password a place to store the new string containing the &lt;password&gt; part
 */
function dsn_split(string: string, out_dsn: string, out_username: string, out_password: string): void
/**
 * Converts a named type to ts GType type (also see the gda_g_type_to_string() function).
 * 
 * This function is a wrapper around the g_type_from_name() function, but also recognizes
 * some type synonyms such as:
 * <itemizedlist>
 *   <listitem><para>"int" for G_TYPE_INT</para></listitem>
 *   <listitem><para>"uint" for G_TYPE_UINT</para></listitem>
 *   <listitem><para>"int64" for G_TYPE_INT64</para></listitem>
 *   <listitem><para>"uint64" for G_TYPE_UINT64</para></listitem>
 *   <listitem><para>"char" for G_TYPE_CHAR</para></listitem>
 *   <listitem><para>"uchar" for G_TYPE_UCHAR</para></listitem>
 *   <listitem><para>"short" for GDA_TYPE_SHORT</para></listitem>
 *   <listitem><para>"ushort" for GDA_TYPE_USHORT</para></listitem>
 *   <listitem><para>"string" for G_TYPE_STRING</para></listitem>
 *   <listitem><para>"date" for G_TYPE_DATE</para></listitem>
 *   <listitem><para>"time" for GDA_TYPE_TIME</para></listitem>
 *   <listitem><para>"timestamp" for GDA_TYPE_TIMESTAMP</para></listitem>
 *   <listitem><para>"boolean" for G_TYPE_BOOLEAN</para></listitem>
 *   <listitem><para>"blob" for GDA_TYPE_BLOB</para></listitem>
 *   <listitem><para>"binary" for GDA_TYPE_BINARY</para></listitem>
 *   <listitem><para>"null" for GDA_TYPE_NULL</para></listitem>
 * </itemizedlist>
 * @param str the name of a #GType, as returned by gda_g_type_to_string().
 */
function g_type_from_string(str: string): GObject.GType
/**
 * Converts a GType to its string representation (use gda_g_type_from_string() for the
 * operation in the other direction).
 * 
 * This function wraps g_type_name() but for common types it provides an easier to
 * understand and remember name. For Example the G_TYPE_STRING is converted to "string"
 * whereas g_type_name() converts it to "gchararray".
 * @param type Type to convert from.
 */
function g_type_to_string(type: GObject.GType): string
function geometricpoint_copy(boxed: object | null): object | null
function geometricpoint_free(boxed: object | null): void
/**
 * Find the path to the application identified by `app_name`. For example if the application
 * is "gda-sql", then calling this function will return
 * "/your/prefix/bin/gda-sql-5.0" if Libgda is installed in
 * the "/your/prefix" prefix (which would usually be "/usr"), and for the ABI version 5.0.
 * @param app_name the name of the application to find
 */
function get_application_exec_path(app_name: string): string
/**
 * Does the same as strcmp(`id1`, `id2`), but handles the case where id1 and/or id2 are enclosed in double quotes.
 * can also be used in hash tables as a #GEqualFunc.
 * @param id1 an identifier string
 * @param id2 an identifier string
 */
function identifier_equal(id1: string, id2: string): boolean
/**
 * computes a hash string from `id,` to be used in hash tables as a #GHashFunc
 * @param id an identifier string
 */
function identifier_hash(id: string): number
/**
 * Initializes the GDA library, must be called prior to any Libgda usage.
 * 
 * Please note that if you call setlocale() to modify the current locale, you should also
 * call gda_locale_changed() before using Libgda again.
 */
function init(): void
/**
 * Call this function whenever the setlocale() function has been called
 * to change the current locale; this function is first called by gda_init() so you
 * don't need to call it if you have set the locale before calling gda_init().
 * 
 * Failing to call this function after having changed the current locale may result
 * in Libgda reverting to the previous set locale.
 */
function locale_changed(): void
/**
 * Disables GDA logs.
 */
function log_disable(): void
/**
 * Enables GDA logs.
 */
function log_enable(): void
function log_is_enabled(): boolean
function mutex_free(mutex: Mutex): void
function mutex_lock(mutex: Mutex): void
function mutex_trylock(mutex: Mutex): boolean
function mutex_unlock(mutex: Mutex): void
/**
 * This function is similar to gda_parse_iso8601_date() (with `first` being `G_DATE_YEAR,` `second` being `G_DATE_MONTH,`
 * `third` being `G_DATE_DAY` and `sep` being '-') but allows one to specify the expected date format.
 * @param gdate a pointer to a #GDate structure which will be filled
 * @param value a string to be parsed
 * @param first a #GDateDMY specifying which of year, month or day appears first (in the first bytes) in `value`
 * @param second a #GDateDMY specifying which of year, month or day appears second (in the first bytes) in `value`
 * @param third a #GDateDMY specifying which of year, month or day appears third (in the first bytes) in `value`
 * @param sep spcifies the expected separator character bewteen year, month and day (for example '-')
 */
function parse_formatted_date(gdate: GLib.Date, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): boolean
function parse_formatted_time(timegda: Time, value: string, sep: number): boolean
/**
 * This function is similar to gda_parse_iso8601_timestamp() (with `first` being `G_DATE_YEAR,` `second` being `G_DATE_MONTH,`
 * `third` being `G_DATE_DAY` and `sep` being '-') but allows one to specify the expected date format.
 * @param timestamp a pointer to a #GdaTimeStamp structure which will be filled
 * @param value a string to be parsed
 * @param first a #GDateDMY specifying which of year, month or day appears first (in the first bytes) in `value`
 * @param second a #GDateDMY specifying which of year, month or day appears second (in the first bytes) in `value`
 * @param third a #GDateDMY specifying which of year, month or day appears third (in the first bytes) in `value`
 * @param sep spcifies the expected separator character bewteen year, month and day (for example '-')
 */
function parse_formatted_timestamp(timestamp: Timestamp, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): boolean
/**
 * Extracts date parts from `value,` and sets `gdate'`s contents
 * 
 * Accepted date format is "YYYY-MM-DD" (more or less than 4 digits for years and
 * less than 2 digits for month and day are accepted). Years must be in the 1-65535 range,
 * a limitation imposed by #GDate.
 * @param gdate a pointer to a #GDate structure which will be filled
 * @param value a string
 */
function parse_iso8601_date(gdate: GLib.Date, value: string): boolean
/**
 * Extracts time parts from `value,` and sets `timegda'`s contents
 * 
 * Accepted date format is "HH:MM:SS[.ms][TZ]" where TZ is +hour or -hour
 * @param timegda a pointer to a #GdaTime structure which will be filled
 * @param value a string
 */
function parse_iso8601_time(timegda: Time, value: string): boolean
/**
 * Extracts date and time parts from `value,` and sets `timestamp'`s contents
 * 
 * Accepted date format is "YYYY-MM-DD HH:MM:SS[.ms][TZ]" where TZ is +hour or -hour
 * @param timestamp a pointer to a #GdaTimeStamp structure which will be filled
 * @param value a string
 */
function parse_iso8601_timestamp(timestamp: Timestamp, value: string): boolean
/**
 * Modifies `stmt` to take into account any parameter which might be %NULL: if `stmt` contains the
 * equivalent of "xxx = &lt;parameter definition&gt;" and if that parameter is in `params` and
 * its value is of type GDA_TYPE_NUL, then that part is replaced with "xxx IS NULL". It also
 * handles the "xxx IS NOT NULL" transformation.
 * 
 * For example the following SELECT:
 * <programlisting>SELECT * FROM data WHERE id = ##id::int::null AND name = ##name::string</programlisting>
 * in case the "id" parameter is set to NULL, is converted to:
 * <programlisting>SELECT * FROM data WHERE id IS NULL AND name = ##name::string</programlisting>
 * 
 * if `out_stmt` is not %NULL, then it will contain:
 * <itemizedlist>
 *   <listitem><para>the modified statement if some modifications were required and no error occured (the function returns %TRUE)</para></listitem>
 *   <listitem><para>%NULL if no modification to `stmt` were required and no erro occurred (the function returns %FALSE)</para></listitem>
 *   <listitem><para>%NULL if an error occured (the function returns %TRUE)</para></listitem>
 * </itemizedlist>
 * 
 * This function is used by provider's implementations to make sure one can use parameters with
 * NULL values in statements without having to rewrite statements, as database usually don't
 * consider that "xxx = NULL" is the same as "xxx IS NULL" when using parameters.
 * @param stmt a #GdaStatement
 * @param params a #GdaSet to be used as parameters when executing `stmt`
 * @param out_stmt a place to store the new #GdaStatement, or %NULL
 */
function rewrite_statement_for_null_parameters(stmt: Statement, params: Set, out_stmt: Statement | null): boolean
/**
 * Decodes `string` using the RFC 1738 recommendations: the
 * <constant>&lt;&gt;&quot;#%{}|\^~[]&apos;`;/?:`=`&amp;</constant> and space characters are replaced by
 * <constant>&quot;%%ab&quot;</constant> where
 * <constant>ab</constant> is the hexadecimal number corresponding to the character.
 * 
 * `string` should respect the RFC 1738 encoding. If this is not the case (for example if there
 * is a "%2z" because 2z is not an hexadecimal value), then the part with the problem
 * is not decoded, and the function returns FALSE.
 * 
 * `string` is decoded in place, no new string gets created.
 * @param string a string to decode
 */
function rfc1738_decode(string: string): boolean
/**
 * Encodes `string` using the RFC 1738 recommendations: the
 * <constant>&lt;&gt;&quot;#%{}|\^~[]&apos;`;/?:`=`&amp;</constant> and space characters are replaced by
 * <constant>&quot;%%ab&quot;</constant> where
 * <constant>ab</constant> is the hexadecimal number corresponding to the character.
 * @param string a string to encode
 */
function rfc1738_encode(string: string): string
/**
 * Creates a new #GdaStatement, selecting the same data as `stmt,` but which always returns an
 * empty (no row) data model. This is use dy database providers' implementations.
 * @param stmt a SELECT #GdaStatement
 */
function select_alter_select_for_empty(stmt: Statement): Statement
function sql_error_quark(): GLib.Quark
/**
 * Use this function for any SQL identifier to make sure that:
 * <itemizedlist>
 *   <listitem>
 *     <para>it is correctly formatted
 *           to be used with `cnc` (if `cnc` is %NULL, then some default SQL quoting rules will be applied,
 *           similar to PostgreSQL's way) if `for_meta_store` is %FALSE;
 *     </para>
 *   </listitem>
 *   <listitem>
 *     <para>it is correctly formatted to be used with the #GdaMetaStore's object associated to `cnc`
 *           is `for_meta_store` is %TRUE.
 *     </para>
 *   </listitem>
 * </itemizedlist>
 * 
 * The `force_quotes` allow some control of how to interpret `id:` if %FALSE, then `id` will be left
 * unchanged most of the time (except for example if it's a reserved keyword), otherwise
 * if `force_quotes` is %TRUE, then the returned string will most probably have quotes around it
 * to request that the database keep the case sensitiveness (but again, this may vary depending
 * on the database being accessed through `cnc)`.
 * 
 * For example, the following table gives the result of this function depending on the arguments
 * when `cnc` is %NULL (and `prov` is also %NULL):
 * <table frame="all">
 *  <tgroup cols="6" colsep="1" rowsep="1" align="justify">
 *    <thead>
 *      <row>
 *        <entry>id</entry>
 *        <entry>for_meta_store=%FALSE, force_quotes=%FALSE</entry>
 *        <entry>for_meta_store=%TRUE, force_quotes=%FALSE</entry>
 *        <entry>for_meta_store=%FALSE, force_quotes=%TRUE</entry>
 *        <entry>for_meta_store=%TRUE, force_quotes=%TRUE</entry>
 *        <entry>remark</entry>
 *      </row>
 *    </thead>
 *    <tbody>
 *      <row>
 *        <entry>"double word"</entry>
 *        <entry>"double word"</entry>
 *        <entry>"double word"</entry>
 *        <entry>"double word"</entry>
 *        <entry>"double word"</entry>
 *        <entry>non allowed character in SQL identifier</entry>
 *      </row>
 *      <row>
 *        <entry>"CapitalTest"</entry>
 *        <entry>"CapitalTest"</entry>
 *        <entry>"CapitalTest"</entry>
 *        <entry>"CapitalTest"</entry>
 *        <entry>"CapitalTest"</entry>
 *        <entry>Mixed case SQL identifier, already quoted</entry>
 *      </row>
 *      <row>
 *        <entry>CapitalTest</entry>
 *        <entry>CapitalTest</entry>
 *        <entry>capitaltest</entry>
 *        <entry>"CapitalTest"</entry>
 *        <entry>"CapitalTest"</entry>
 *        <entry>Mixed case SQL identifier, non quoted</entry>
 *      </row>
 *      <row>
 *        <entry>"mytable"</entry>
 *        <entry>"mytable"</entry>
 *        <entry>mytable</entry>
 *        <entry>"mytable"</entry>
 *        <entry>mytable</entry>
 *        <entry>All lowser case, quoted</entry>
 *      </row>
 *      <row>
 *        <entry>mytable</entry>
 *        <entry>mytable</entry>
 *        <entry>mytable</entry>
 *        <entry>"mytable"</entry>
 *        <entry>mytable</entry>
 *        <entry>All lowser case</entry>
 *      </row>
 *      <row>
 *        <entry>MYTABLE</entry>
 *        <entry>MYTABLE</entry>
 *        <entry>mytable</entry>
 *        <entry>"MYTABLE"</entry>
 *        <entry>"MYTABLE"</entry>
 *        <entry>All upper case</entry>
 *      </row>
 *      <row>
 *        <entry>"MYTABLE"</entry>
 *        <entry>"MYTABLE"</entry>
 *        <entry>"MYTABLE"</entry>
 *        <entry>"MYTABLE"</entry>
 *        <entry>"MYTABLE"</entry>
 *        <entry>All upper case, quoted</entry>
 *      </row>
 *      <row>
 *        <entry>desc</entry>
 *        <entry>"desc"</entry>
 *        <entry>"desc"</entry>
 *        <entry>"desc"</entry>
 *        <entry>"desc"</entry>
 *        <entry>SQL reserved keyword</entry>
 *      </row>
 *      <row>
 *        <entry>5ive</entry>
 *        <entry>"5ive"</entry>
 *        <entry>"5ive"</entry>
 *        <entry>"5ive"</entry>
 *        <entry>"5ive"</entry>
 *        <entry>SQL identifier starting with a digit</entry>
 *      </row>
 *    </tbody>
 *  </tgroup>
 * </table>
 * 
 * Here are a few examples of when and how to use this function:
 * <itemizedlist>
 *   <listitem>
 *     <para>
 *       When creating a table, the user has entered the table name, this function can be used to
 *       create a valid SQL identifier from the user provided table name:
 *       <programlisting>
 * gchar *user_sqlid=...
 * gchar *valid_sqlid = gda_sql_identifier_quote (user_sqlid, cnc, NULL, FALSE, FALSE);
 * gchar *sql = g_strdup_printf ("CREATE TABLE %s ...", valid_sqlid);
 * g_free (valid_sqlid);
 *       </programlisting>
 *       Note that this is an illustration and creating a table should be sone using a #GdaServerOperation
 *       object.
 *     </para>
 *   </listitem>
 *   <listitem>
 *     <para>
 *      When updating the meta data associated to a table which has been created with the code
 *      above:
 *      <programlisting>
 * GValue table_name_value = { 0 };
 * gchar* column_names[] = { (gchar*)"table_name" };
 * GValue* column_values[] = { &table_name_value };
 * GdaMetaContext mcontext = { (gchar*)"_tables", 1, column_names, column_values };
 * g_value_init (&amp;table_name_value, G_TYPE_STRING);
 * g_value_take_string (&amp;table_name_value, gda_sql_identifier_quote (user_sqlid, cnc, NULL, TRUE, FALSE);
 * gda_connection_update_meta_store (cnc, &amp;mcontext, NULL);
 * g_value_reset (&amp;table_name_value);
 *       </programlisting>
 *     </para>
 *   </listitem>
 *   <listitem>
 *     <para>
 *      When using a #GdaMetaStruct object to fetch information about a table (which has been created with
 *      the code above):
 *      <programlisting>
 * GValue table_name_value = { 0 };
 * g_value_init (&amp;table_name_value, G_TYPE_STRING);
 * g_value_take_string (&amp;table_name_value, gda_sql_identifier_quote (user_sqlid, cnc, NULL, TRUE, FALSE);
 * GdaMetaDbObject *dbo;
 * dbo = gda_meta_struct_complement (mstruct, GDA_META_DB_TABLE, NULL, NULL, &amp;table_name_value, NULL);
 * g_value_reset (&amp;table_name_value);
 *       </programlisting>
 *     </para>
 *   </listitem>
 * </itemizedlist>
 * 
 * 
 * Note that `id` must not be a composed SQL identifier (such as "mytable.mycolumn" which should be
 * treated as the "mytable" and "mycolumn" SQL identifiers). If unsure, use gda_sql_identifier_split().
 * 
 * Also note that if `cnc` is %NULL, then it's possible to pass an non %NULL `prov` to have a result specific
 * to `prov`.
 * 
 * For more information, see the <link linkend="gen:sql_identifiers">SQL identifiers and abstraction</link> and
 * <link linkend="information_schema:sql_identifiers">SQL identifiers in meta data</link> sections.
 * @param id an SQL identifier
 * @param cnc a #GdaConnection object, or %NULL
 * @param prov a #GdaServerProvider object, or %NULL `for_meta_store` set to %TRUE if the returned string will be used in a #GdaMetaStore
 * @param meta_store_convention 
 * @param force_quotes set to %TRUE to force the returned string to be quoted
 */
function sql_identifier_quote(id: string, cnc: Connection | null, prov: ServerProvider | null, meta_store_convention: boolean, force_quotes: boolean): string
/**
 * Splits `id` into an array of it sub parts. `id'`s format has to be "&lt;part&gt;[.&lt;part&gt;[...]]" where
 * each part is either a text surrounded by double quotes which can contain upper and lower cases or
 * an SQL identifier in lower case.
 * 
 * For example the <![CDATA["test.\"ATable\""]]> string will result in the array: <![CDATA[{"test", "\"ATable\"", NULL}]]>
 * @param id an SQL identifier
 */
function sql_identifier_split(id: string): string[] | null
function sql_operation_operator_from_string(op: string): SqlOperatorType
function sql_operation_operator_to_string(op: SqlOperatorType): string
function sql_select_join_type_to_string(type: SqlSelectJoinType): string
/**
 * Performs the reverse of gda_binary_to_string() (note that for any "\xyz" succession
 * of 4 characters where "xyz" represents a valid octal value, the resulting read value will
 * be modulo 256).
 * 
 * I `str` is %NULL, then an empty (i.e. where the `data` part is %NULL) #GdaBinary is created and returned.
 * @param str a string to convert, or %NULL
 */
function string_to_binary(str: string | null): Binary
/**
 * Performs the reverse of gda_blob_to_string().
 * @param str a string to convert
 */
function string_to_blob(str: string): Blob
/**
 * The "encoding" consists in replacing non
 * alphanumeric character with the string "__gdaXX" where XX is the hex. representation
 * of the non alphanumeric char.
 * @param text the text to convert
 */
function text_to_alphanum(text: string): string
function time_copy(boxed: object | null): object | null
function time_free(boxed: object | null): void
function timestamp_copy(boxed: object | null): object | null
function timestamp_free(boxed: object | null): void
/**
 * Check the column types of a GdaDataModel.
 * @param model a #GdaDataModel object
 * @param types array with `nbcols` length of type GType or null (if any data type is accepted)
 */
function utility_check_data_model(model: DataModel, types: GObject.GType[]): boolean
/**
 * Dump the data in a #GdaDataModel into a xmlNodePtr (as used in libxml).
 * 
 * Warning: this function uses a #GdaDataModelIter iterator, and if `model` does not offer a random access
 * (check using gda_data_model_get_access_flags()), the iterator will be the same as normally used
 * to access data in `model` previously to calling this method, and this iterator will be moved (point to
 * another row).
 * @param model a #GdaDataModel
 * @param parent the parent XML node
 * @param cols an array containing which columns of `model` will be exported, or %NULL for all columns
 * @param rows an array containing which rows of `model` will be exported, or %NULL for all rows
 * @param use_col_ids set to %TRUE to add column ID information
 */
function utility_data_model_dump_data_to_xml(model: DataModel, parent: libxml2.NodePtr, cols: number[] | null, rows: number[] | null, use_col_ids: boolean): boolean
/**
 * Finds the description of a field into Metadata from a #GdaDataModel.
 * @param model a #GdaDataSelect data model
 * @param field_name field name
 */
function utility_data_model_find_column_description(model: DataSelect, field_name: string): string
/**
 * Note: this method may set the "source" custom string property
 * @param holder a #GdaHolder
 * @param node an xmlNodePtr with a &lt;parameter&gt; tag
 * @param sources a list of #GdaDataModel
 */
function utility_holder_load_attributes(holder: Holder, node: libxml2.NodePtr, sources: DataModel[]): boolean
/**
 * Compares two values of the same type, with the exception that a value of any type can be
 * compared to a GDA_TYPE_NULL value, specifically:
 * <itemizedlist>
 *   <listitem><para>if `value1` and `value2` are both GDA_TYPE_NULL values then the returned value is 0</para></listitem>
 *   <listitem><para>if `value1` is a GDA_TYPE_NULL value and `value2` is of another type then the returned value is -1</para></listitem>
 *   <listitem><para>if `value1` is of another type and `value2` is a GDA_TYPE_NULL value then the returned value is 1</para></listitem>
 *   <listitem><para>in all other cases, `value1` and `value2` must be of the same type and their values are compared</para></listitem>
 * </itemizedlist>
 * @param value1 a #GValue to compare (not %NULL)
 * @param value2 the other #GValue to be compared to `value1` (not %NULL)
 */
function value_compare(value1: any, value2: any): number
/**
 * Tells if two values are equal or not, by comparing memory representations. Unlike gda_value_compare(),
 * the returned value is boolean, and gives no idea about ordering.
 * 
 * The two values must be of the same type, with the exception that a value of any type can be
 * compared to a GDA_TYPE_NULL value, specifically:
 * <itemizedlist>
 *   <listitem><para>if `value1` and `value2` are both GDA_TYPE_NULL values then the returned value is 0</para></listitem>
 *   <listitem><para>if `value1` is a GDA_TYPE_NULL value and `value2` is of another type then the returned value is 1</para></listitem>
 *   <listitem><para>if `value1` is of another type and `value2` is a GDA_TYPE_NULL value then the returned value is 1</para></listitem>
 *   <listitem><para>in all other cases, `value1` and `value2` must be of the same type and their values are compared</para></listitem>
 * </itemizedlist>
 * @param value1 a #GValue to compare.
 * @param value2 the other #GValue to be compared to `value1`.
 */
function value_differ(value1: any, value2: any): number
/**
 * Converts a GValue to its string representation which is a human readable value. Note that the
 * returned string does not take into account the current locale of the user (on the contrary to the
 * #GdaDataHandler objects). Using this function should be limited to debugging and values serialization
 * purposes.
 * 
 * Output is in the "C" locale for numbers, and dates are converted in a YYYY-MM-DD format.
 * @param value a #GValue.
 */
function value_stringify(value: any): string
interface AttributesManagerFunc {
    (att_name: string, value: any, data: object | null): void
}
interface AttributesManagerSignal {
    (obj: GObject.Object, att_name: string, value: any, data: object | null): void
}
/**
 * Function to be called by Libgda when the associated asynchronous method invoked finishes.
 * @callback 
 * @param provider 
 * @param cnc 
 * @param task_id 
 * @param result_status 
 * @param error 
 * @param data 
 */
interface ServerProviderAsyncCallback {
    (provider: ServerProvider, cnc: Connection, task_id: number, result_status: boolean, error: GLib.Error, data: object | null): void
}
/**
 * Function to be called by Libgda when the associated asynchronous method invoked finishes
 * @callback 
 * @param provider 
 * @param cnc 
 * @param task_id 
 * @param result_obj 
 * @param error 
 * @param data 
 */
interface ServerProviderExecCallback {
    (provider: ServerProvider, cnc: Connection, task_id: number, result_obj: GObject.Object, error: GLib.Error, data: object | null): void
}
/**
 * Rendering function type to render a #GValue
 * @callback 
 * @param value the #GValue to render
 * @param context the rendering context
 */
interface SqlRenderingValue {
    (value: any, context: SqlRenderingContext): string
}
interface SqlReservedKeywordsFunc {
    (word: string): boolean
}
/**
 * Specifies the type of function to be passed to gda_thread_wrapper_connect_raw()
 * @callback 
 * @param wrapper the #GdaThreadWrapper
 * @param instance a pointer to the instance which emitted the signal
 * @param signame the name of the signal being emitted
 * @param n_param_values number of GValue in `param_values`
 * @param param_values array of `n_param_values` GValue
 * @param gda_reserved reserved
 * @param data a pointer to the data (which is the `data` argument passed to gda_thread_wrapper_connect_raw())
 */
interface ThreadWrapperCallback {
    (wrapper: ThreadWrapper, instance: object | null, signame: string, n_param_values: number, param_values: any, gda_reserved: object | null, data: object | null): void
}
/**
 * Specifies the type of function to be passed to gda_thread_wrapper_execute().
 * @callback 
 * @param arg pointer to the data (which is the `arg` argument passed to gda_thread_wrapper_execute_void())
 */
interface ThreadWrapperFunc {
    (arg: object | null): object | null
}
/**
 * Specifies the type of function to be passed to gda_thread_wrapper_execute_void().
 * @callback 
 * @param arg a pointer to the data (which is the `arg` argument passed to gda_thread_wrapper_execute_void())
 */
interface ThreadWrapperVoidFunc {
    (arg: object | null): void
}
interface DataHandler_ConstructProps extends GObject.Object_ConstructProps {
}

interface DataHandler {

    // Owm methods of Gda-5.0.Gda.DataHandler

    /**
     * Checks wether the GdaDataHandler is able to handle the gda type given as argument.
     * @param type a #GType
     */
    accepts_g_type(type: GObject.GType): boolean
    /**
     * Get a short description of the GdaDataHandler
     */
    get_descr(): string
    /**
     * Creates a new GValue which holds a sane initial value to be used if no value is specifically
     * provided. For example for a simple string, this would return a new value containing the "" string.
     * @param type a #GType
     */
    get_sane_init_value(type: GObject.GType): any | null
    /**
     * Creates a new string which is an SQL representation of the given value, the returned string
     * can be used directly in an SQL statement. For example if `value` is a G_TYPE_STRING, then
     * the returned string will be correctly quoted. Note however that it is a better practice
     * to use variables in statements instead of value literals, see
     * the <link linkend="GdaSqlParser.description">GdaSqlParser</link> for more information.
     * 
     * If the value is NULL or is of type GDA_TYPE_NULL,
     * or is a G_TYPE_STRING and g_value_get_string() returns %NULL, the returned string is "NULL".
     * @param value the value to be converted to a string, or %NULL
     */
    get_sql_from_value(value: any | null): string
    /**
     * Creates a new string which is a "user friendly" representation of the given value
     * (in the user's locale, specially for the dates). If the value is
     * NULL or is of type GDA_TYPE_NULL, the returned string is a copy of "" (empty string).
     * 
     * Note: the returned value will be in the current locale representation.
     * @param value the value to be converted to a string, or %NULL
     */
    get_str_from_value(value: any | null): string
    /**
     * Creates a new GValue which represents the SQL value given as argument. This is
     * the opposite of the function gda_data_handler_get_sql_from_value(). The type argument
     * is used to determine the real data type requested for the returned value.
     * 
     * If the `sql` string is %NULL, then the returned GValue is of type GDA_TYPE_NULL;
     * if the `sql` string does not correspond to a valid SQL string for the requested type, then
     * the %NULL is returned.
     * @param sql an SQL string, or %NULL
     * @param type a GType
     */
    get_value_from_sql(sql: string | null, type: GObject.GType): any
    /**
     * Creates a new GValue which represents the `str` value given as argument. This is
     * the opposite of the function gda_data_handler_get_str_from_value(). The type argument
     * is used to determine the real data type requested for the returned value.
     * 
     * If the `str` string is %NULL, then the returned GValue is of type GDA_TYPE_NULL;
     * if the `str` string does not correspond to a valid string for the requested type, then
     * %NULL is returned.
     * 
     * Note: the `str` string must be in the current locale representation
     * @param str a string or %NULL
     * @param type a GType
     */
    get_value_from_str(str: string | null, type: GObject.GType): any

    // Own virtual methods of Gda-5.0.Gda.DataHandler

    /**
     * Checks wether the GdaDataHandler is able to handle the gda type given as argument.
     * @virtual 
     * @param type a #GType
     */
    vfunc_accepts_g_type(type: GObject.GType): boolean
    /**
     * Get a short description of the GdaDataHandler
     * @virtual 
     */
    vfunc_get_descr(): string
    /**
     * Creates a new GValue which holds a sane initial value to be used if no value is specifically
     * provided. For example for a simple string, this would return a new value containing the "" string.
     * @virtual 
     * @param type a #GType
     */
    vfunc_get_sane_init_value(type: GObject.GType): any | null
    /**
     * Creates a new string which is an SQL representation of the given value, the returned string
     * can be used directly in an SQL statement. For example if `value` is a G_TYPE_STRING, then
     * the returned string will be correctly quoted. Note however that it is a better practice
     * to use variables in statements instead of value literals, see
     * the <link linkend="GdaSqlParser.description">GdaSqlParser</link> for more information.
     * 
     * If the value is NULL or is of type GDA_TYPE_NULL,
     * or is a G_TYPE_STRING and g_value_get_string() returns %NULL, the returned string is "NULL".
     * @virtual 
     * @param value the value to be converted to a string, or %NULL
     */
    vfunc_get_sql_from_value(value: any | null): string
    /**
     * Creates a new string which is a "user friendly" representation of the given value
     * (in the user's locale, specially for the dates). If the value is
     * NULL or is of type GDA_TYPE_NULL, the returned string is a copy of "" (empty string).
     * 
     * Note: the returned value will be in the current locale representation.
     * @virtual 
     * @param value the value to be converted to a string, or %NULL
     */
    vfunc_get_str_from_value(value: any | null): string
    /**
     * Creates a new GValue which represents the SQL value given as argument. This is
     * the opposite of the function gda_data_handler_get_sql_from_value(). The type argument
     * is used to determine the real data type requested for the returned value.
     * 
     * If the `sql` string is %NULL, then the returned GValue is of type GDA_TYPE_NULL;
     * if the `sql` string does not correspond to a valid SQL string for the requested type, then
     * the %NULL is returned.
     * @virtual 
     * @param sql an SQL string, or %NULL
     * @param type a GType
     */
    vfunc_get_value_from_sql(sql: string | null, type: GObject.GType): any
    /**
     * Creates a new GValue which represents the `str` value given as argument. This is
     * the opposite of the function gda_data_handler_get_str_from_value(). The type argument
     * is used to determine the real data type requested for the returned value.
     * 
     * If the `str` string is %NULL, then the returned GValue is of type GDA_TYPE_NULL;
     * if the `str` string does not correspond to a valid string for the requested type, then
     * %NULL is returned.
     * 
     * Note: the `str` string must be in the current locale representation
     * @virtual 
     * @param str a string or %NULL
     * @param type a GType
     */
    vfunc_get_value_from_str(str: string | null, type: GObject.GType): any

    // Class property signals of Gda-5.0.Gda.DataHandler

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataHandler extends GObject.Object {

    // Own properties of Gda-5.0.Gda.DataHandler

    static name: string
    static $gtype: GObject.GType<DataHandler>

    // Constructors of Gda-5.0.Gda.DataHandler

    constructor(config?: DataHandler_ConstructProps) 
    _init(config?: DataHandler_ConstructProps): void
    /**
     * Obtain a pointer to a #GdaDataHandler which can manage #GValue values of type `for_type`. The returned
     * data handler will be adapted to use the current locale information (for example dates will be formatted
     * taking into account the locale).
     * 
     * The returned pointer is %NULL if there is no default data handler available for the `for_type` data type
     * @param for_type a #GType type
     */
    static get_default(for_type: GObject.GType): DataHandler
}

interface DataModel_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `access-changed`
 */
interface DataModel_AccessChangedSignalCallback {
    ($obj: DataModel): void
}

/**
 * Signal callback interface for `changed`
 */
interface DataModel_ChangedSignalCallback {
    ($obj: DataModel): void
}

/**
 * Signal callback interface for `reset`
 */
interface DataModel_ResetSignalCallback {
    ($obj: DataModel): void
}

/**
 * Signal callback interface for `row-inserted`
 */
interface DataModel_RowInsertedSignalCallback {
    ($obj: DataModel, row: number): void
}

/**
 * Signal callback interface for `row-removed`
 */
interface DataModel_RowRemovedSignalCallback {
    ($obj: DataModel, row: number): void
}

/**
 * Signal callback interface for `row-updated`
 */
interface DataModel_RowUpdatedSignalCallback {
    ($obj: DataModel, row: number): void
}

interface DataModel {

    // Owm methods of Gda-5.0.Gda.DataModel

    /**
     * Adds the data from an XML node to the given data model (see the DTD for that node
     * in the $prefix/share/libgda/dtd/libgda-array.dtd file).
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param node an XML node representing a &lt;gda_array_data&gt; XML node.
     */
    add_data_from_xml_node(node: libxml2.NodePtr): boolean
    /**
     * Appends a row to the data model (the new row will possibly have NULL values for all columns,
     * or some other values depending on the data model implementation)
     * 
     * Upon errors -1 will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     */
    append_row(): number
    /**
     * Appends a row to the given data model. If any value in `values` is actually %NULL, then
     * it is considered as a default value. If `values` is %NULL then all values are set to their default value.
     * 
     * Upon errors -1 will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param values #GList of #GValue* representing the row to add.  The          length must match model's column count.  These #GValue     are value-copied (the user is still responsible for freeing them).
     */
    append_values(values: any[] | null): number
    /**
     * Makes a copy of `src` into a new #GdaDataModelArray object
     */
    array_copy_model(): DataModelArray | null
    /**
     * Like gda_data_model_array_copy_model(), makes a copy of `src,` but copies only some
     * columns.
     * @param cols array of `src'`s columns to copy into the new array, not %NULL
     */
    array_copy_model_ext(cols: number[]): DataModelArray | null
    /**
     * Creates a new iterator object #GdaDataModelIter object which can be used to iterate through
     * rows in `model`. The new #GdaDataModelIter does not hold any reference to `model` (ie. if `model`
     * is destroyed at some point, the new iterator will become useless but in any case it will not prevent
     * the data model from being destroyed).
     * 
     * Depending on the data model's implementation, a new #GdaDataModelIter object may be created,
     * or a reference to an already existing #GdaDataModelIter may be returned. For example if `model` only
     * supports being accessed using a forward moving cursor (say a the result of a SELECT executed by SQLite
     * with a cursor access mode specified), then this method will always return the same iterator.
     * 
     * If a new #GdaDataModelIter is created, then the row it represents is undefined.
     * 
     * For models which can be accessed
     * randomly, any row can be set using gda_data_model_iter_move_to_row(),
     * and for models which are accessible sequentially only then use
     * gda_data_model_iter_move_next() (and gda_data_model_iter_move_prev() if
     * supported).
     * 
     * Note: for the #GdaDataProxy data model (which proxies any #GdaDataModel for modifications and
     * has twice the number of columns of the proxied data model), this method will create an iterator
     * in which only the columns of the proxied data model appear. If you need to have a #GdaDataModelIter
     * in which all the proxy's columns appear, create it using:
     * <programlisting><![CDATA[iter = g_object_new (GDA_TYPE_DATA_MODEL_ITER, "data-model", proxy, NULL);]]></programlisting>
     */
    create_iter(): DataModelIter
    /**
     * Queries the underlying data model implementation for a description
     * of a given column. That description is returned in the form of
     * a #GdaColumn structure, which contains all the information
     * about the given column in the data model.
     * 
     * WARNING: the returned #GdaColumn object belongs to the `model` model and
     * and should not be destroyed; any modification will affect the whole data model.
     * @param col column number.
     */
    describe_column(col: number): Column | null
    /**
     * Dumps a textual representation of the `model` to the `to_stream` stream
     * 
     * The following environment variables can affect the resulting output:
     * <itemizedlist>
     *   <listitem><para>GDA_DATA_MODEL_DUMP_ROW_NUMBERS: if set, the first column of the output will contain row numbers</para></listitem>
     *   <listitem><para>GDA_DATA_MODEL_DUMP_ATTRIBUTES: if set, also dump the data model's columns' types and value's attributes</para></listitem>
     *   <listitem><para>GDA_DATA_MODEL_DUMP_TITLE: if set, also dump the data model's title</para></listitem>
     *   <listitem><para>GDA_DATA_MODEL_NULL_AS_EMPTY: if set, replace the 'NULL' string with an empty string for NULL values </para></listitem>
     *   <listitem><para>GDA_DATA_MODEL_DUMP_TRUNCATE: if set to a numeric value, truncates the output to the width specified by the value. If the value is -1 then the actual terminal size (if it can be determined) is used</para></listitem>
     * </itemizedlist>
     * @param to_stream where to dump the data model
     */
    dump(to_stream: object | null): void
    /**
     * Dumps a textual representation of the `model` into a new string. The main differences with gda_data_model_export_to_string() are that
     * the formatting options are passed using environment variables, and that the data is dumped regardless of the user locale (e.g. dates
     * are not formatted according to the locale).
     * 
     * The following environment variables can affect the resulting output:
     * <itemizedlist>
     *   <listitem><para>GDA_DATA_MODEL_DUMP_ROW_NUMBERS: if set, the first column of the output will contain row numbers</para></listitem>
     *   <listitem><para>GDA_DATA_MODEL_DUMP_TITLE: if set, also dump the data model's title</para></listitem>
     *   <listitem><para>GDA_DATA_MODEL_NULL_AS_EMPTY: if set, replace the 'NULL' string with an empty string for NULL values </para></listitem>
     *   <listitem><para>GDA_DATA_MODEL_DUMP_TRUNCATE: if set to a numeric value, truncates the output to the width specified by the value. If the value is -1 then the actual terminal size (if it can be determined) is used</para></listitem>
     * </itemizedlist>
     */
    dump_as_string(): string
    /**
     * Exports data contained in `model` to the `file` file; the format is specified using the `format` argument. Note that
     * the date format used is the one used by the connection from which the data model has been made (as the result of a
     * SELECT statement), or, for other kinds of data models, the default format (refer to gda_data_handler_get_default()) unless
     * the "cnc" property has been set and points to a #GdaConnection to use that connection's date format.
     * 
     * Specifically, the parameters in the `options` list can be:
     * <itemizedlist>
     *   <listitem><para>"SEPARATOR": a string value of which the first character is used as a separator in case of CSV export
     *             </para></listitem>
     *   <listitem><para>"QUOTE": a string value of which the first character is used as a quote character in case of CSV export. The
     *             default if not specified is the double quote character</para></listitem>
     *   <listitem><para>"FIELD_QUOTE": a boolean value which can be set to FALSE if no quote around the individual fields
     *             is requeted, in case of CSV export</para></listitem>
     *   <listitem><para>"NAMES_ON_FIRST_LINE": a boolean value which, if set to %TRUE and in case of a CSV or %GDA_DATA_MODEL_IO_TEXT_TABLE export, will add a first line with the name each exported field (note that "FIELDS_NAME" is also accepted as a synonym)</para></listitem>
     *   <listitem><para>"NAME": a string value used to name the exported data if the export format is XML or %GDA_DATA_MODEL_IO_TEXT_TABLE</para></listitem>
     *   <listitem><para>"OVERWRITE": a boolean value which tells if the file must be over-written if it already exists.</para></listitem>
     *   <listitem><para>"NULL_AS_EMPTY": a boolean value which, if set to %TRUE and in case of a CSV or %GDA_DATA_MODEL_IO_TEXT_TABLE export, will render and NULL value as the empty string (instead of the 'NULL' string)</para></listitem>
     *   <listitem><para>"INVALID_AS_NULL": a boolean value which, if set to %TRUE, considers any invalid data (for example for the date related values) as NULL</para></listitem>
     *   <listitem><para>"COLUMN_SEPARATORS": a boolean value which, if set to %TRUE, adds a separators lines between each column, if the export format is %GDA_DATA_MODEL_IO_TEXT_TABLE
     *             </para></listitem>
     *   <listitem><para>"SEPARATOR_LINE": a boolean value which, if set to %TRUE, adds an horizontal line between column titles and values, if the export format is %GDA_DATA_MODEL_IO_TEXT_TABLE
     *             </para></listitem>
     *   <listitem><para>"ROW_NUMBERS": a boolean value which, if set to %TRUE, prepends a column with row numbers, if the export format is %GDA_DATA_MODEL_IO_TEXT_TABLE
     *             </para></listitem>
     *   <listitem><para>"MAX_WIDTH": an integer value which, if greater than 0, makes all the lines truncated to have at most that number of characters, if the export format is %GDA_DATA_MODEL_IO_TEXT_TABLE
     *             </para></listitem>
     * </itemizedlist>
     * 
     * Warning: this function uses a #GdaDataModelIter iterator, and if `model` does not offer a random access
     * (check using gda_data_model_get_access_flags()), the iterator will be the same as normally used
     * to access data in `model` previously to calling this method, and this iterator will be moved (point to
     * another row).
     * 
     * Upon errors %FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param format the format in which to export data
     * @param file the filename to export to
     * @param cols an array containing which columns of `model` will be exported, or %NULL for all columns
     * @param rows an array containing which rows of `model` will be exported, or %NULL for all rows
     * @param options list of options for the export
     */
    export_to_file(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    /**
     * Exports data contained in `model` to a string; the format is specified using the `format` argument, see the
     * gda_data_model_export_to_file() documentation for more information about the `options` argument (except for the
     * "OVERWRITE" option).
     * 
     * Warning: this function uses a #GdaDataModelIter iterator, and if `model` does not offer a random access
     * (check using gda_data_model_get_access_flags()), the iterator will be the same as normally used
     * to access data in `model` previously to calling this method, and this iterator will be moved (point to
     * another row).
     * 
     * See also gda_data_model_dump_as_string();
     * @param format the format in which to export data
     * @param cols an array containing which columns of `model` will be exported, or %NULL for all columns
     * @param rows an array containing which rows of `model` will be exported, or %NULL for all rows
     * @param options list of options for the export
     */
    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    /**
     * Disables notifications of changes on the given data model. To
     * re-enable notifications again, you should call the
     * #gda_data_model_thaw function.
     */
    freeze(): void
    /**
     * Get the attributes of `model` such as how to access the data it contains if it's modifiable, etc.
     */
    get_access_flags(): DataModelAccessFlags
    /**
     * Get the attributes of the value stored at (row, col) in `model,` which
     * is an ORed value of #GdaValueAttribute flags. As a special case, if
     * `row` is -1, then the attributes returned correspond to a "would be" value
     * if a row was added to `model`.
     * @param col a valid column number
     * @param row a valid row number, or -1
     */
    get_attributes_at(col: number, row: number): ValueAttribute
    /**
     * Get the index of the first column named `name` in `model`.
     * @param name a column name
     */
    get_column_index(name: string): number
    get_column_name(col: number): string
    get_column_title(col: number): string
    /**
     * Get the global data model exception(s) that occurred when using `model`.
     * This is useful for example for the LDAP related
     * data models where some rows may be missing because the LDAP search has reached a limit
     * imposed by the LDAP server.
     */
    get_exceptions(): GLib.Error[]
    get_n_columns(): number
    get_n_rows(): number
    /**
     * Returns the status of notifications changes on the given data model.
     */
    get_notify(): boolean
    /**
     * Returns the first row where all the values in `values` at the columns identified at
     * `cols_index` match. If the row can't be identified, then returns -1;
     * 
     * NOTE: the `cols_index` array MUST contain a column index for each value in `values`
     * @param values a list of #GValue values (no %NULL is allowed)
     * @param cols_index an array of #gint containing the column number to match each value of `values`
     */
    get_row_from_values(values: any[], cols_index: number[]): number
    /**
     * Upon errors %NULL will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * 
     * This method is similar to gda_data_model_get_value_at(), except that it also allows one to specify the expected
     * #GType of the value to get: if the data model returned a #GValue of a type different than the expected one, then
     * this method returns %NULL and an error code.
     * 
     * Note: the same limitations and usage instructions apply as for gda_data_model_get_value_at().
     * 
     * Upon errors %NULL will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param col a valid column number.
     * @param row a valid row number.
     * @param expected_type the expected data type of the returned value
     * @param nullok if TRUE, then NULL values (value of type %GDA_TYPE_NULL) will not generate any error
     */
    get_typed_value_at(col: number, row: number, expected_type: GObject.GType, nullok: boolean): any | null
    /**
     * Retrieves the data stored in the given position (identified by
     * the `col` and `row` parameters) on a data model.
     * 
     * Upon errors %NULL will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * 
     * This is the main function for accessing data in a model which allows random access to its data.
     * To access data in a data model using a cursor, use a #GdaDataModelIter object, obtained using
     * gda_data_model_create_iter().
     * 
     * Note1: the returned #GValue must not be modified directly (unexpected behaviours may
     * occur if you do so).
     * 
     * Note2: the returned value may become invalid as soon as any Libgda part is executed again,
     * which means if you want to keep the value, a copy must be made, however it will remain valid
     * as long as the only Libgda usage is calling gda_data_model_get_value_at() for different values
     * of the same row.
     * 
     * If you want to modify a value stored in a #GdaDataModel, use the gda_data_model_set_value_at() or
     * gda_data_model_set_values() methods.
     * 
     * Upon errors %NULL will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param col a valid column number.
     * @param row a valid row number.
     */
    get_value_at(col: number, row: number): any | null
    /**
     * Imports data contained in the `file` file into `model;` the format is detected.
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param file the filename to import from
     * @param cols_trans a #GHashTable for columns translating, or %NULL, see gda_data_model_import_from_model()
     * @param options list of options for the export
     */
    import_from_file(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    /**
     * Copy the contents of the `from` data model to the `to` data model. The copy stops as soon as an error
     * orrurs.
     * 
     * The `cols_trans` is a hash table for which keys are `to` columns numbers and the values are
     * the corresponding column numbers in the `from` data model. To set the values of a column in `to` to NULL,
     * create an entry in the hash table with a negative value. For example:
     * <programlisting><![CDATA[GHashTable *hash;
     * gint *ptr;
     * hash = g_hash_table_new_full (g_int_hash, g_int_equal, g_free, NULL);
     * ptr = g_new (gint, 1);
     * *ptr = 2;
     * g_hash_table_insert (hash, ptr, GINT_TO_POINTER (3));
     * gda_data_model_import_from_model (...);
     * g_hash_table_free (hash);
     * ]]></programlisting>
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param from the source #GdaDataModel
     * @param overwrite TRUE if `to` is completely overwritten by `from'`s data, and FALSE if `from'`s data is appended to `to`
     * @param cols_trans a #GHashTable for columns translating, or %NULL
     */
    import_from_model(from: DataModel, overwrite: boolean, cols_trans: GLib.HashTable | null): boolean
    /**
     * Loads the data from `string` into `model`.
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param string the string to import data from
     * @param cols_trans a hash table containing which columns of `model` will be imported, or %NULL for all columns, see gda_data_model_import_from_model()
     * @param options list of options for the export
     */
    import_from_string(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    /**
     * Moves `iter` to the row number given by `row`.
     * @param iter a #GdaDataModelIter object.
     * @param row a row to point to with `iter`
     */
    iter_at_row(iter: DataModelIter, row: number): boolean
    /**
     * Moves `iter` to the next row in `model`.
     * @param iter a #GdaDataModelIter object.
     */
    iter_next(iter: DataModelIter): boolean
    /**
     * Moves `iter` to the next row in `model`.
     * @param iter a #GdaDataModelIter object.
     */
    iter_prev(iter: DataModelIter): boolean
    /**
     * Set `value` to the given `column` and row pointed by `iter` in the given `model`.
     * @param iter a #GdaDataModelIter object.
     * @param col the number of column to set value to
     * @param value the to use to set on
     */
    iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    /**
     * Removes a row from the data model.
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param row the row number to be removed.
     */
    remove_row(row: number): boolean
    /**
     * Emits the 'reset' and 'changed' signal on `model`.
     */
    reset(): void
    /**
     * Emits the 'row_inserted' and 'changed' signals on `model`.
     * 
     * This method should only be used by #GdaDataModel implementations to
     * signal that a row has been inserted.
     * @param row row number.
     */
    row_inserted(row: number): void
    /**
     * Emits the 'row_removed' and 'changed' signal on `model`.
     * 
     * This method should only be used by #GdaDataModel implementations to
     * signal that a row has been removed
     * @param row row number.
     */
    row_removed(row: number): void
    /**
     * Emits the 'row_updated' and 'changed' signals on `model`.
     * 
     * This method should only be used by #GdaDataModel implementations to
     * signal that a row has been updated.
     * @param row row number.
     */
    row_updated(row: number): void
    /**
     * Sends a hint to the data model. The hint may or may not be handled by the data
     * model, depending on its implementation
     * @param hint a hint to send to the model
     * @param hint_value an optional value to specify the hint, or %NULL
     */
    send_hint(hint: DataModelHint, hint_value: any | null): void
    /**
     * Sets the `name` of the given `col` in `model,` and if its title is not set, also sets the
     * title to `name`.
     * @param col column number
     * @param name name for the given column.
     */
    set_column_name(col: number, name: string): void
    /**
     * Sets the `title` of the given `col` in `model`.
     * @param col column number
     * @param title title for the given column.
     */
    set_column_title(col: number, title: string): void
    /**
     * Enable or disable notifications changes on the given data model.
     * @param do_notify_changes Set to TRUE if you require notifications.
     */
    set_notify(do_notify_changes: boolean): void
    /**
     * Modifies a value in `model,` at (`col,` `row)`.
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param col column number.
     * @param row row number.
     * @param value a #GValue (not %NULL)
     */
    set_value_at(col: number, row: number, value: any): boolean
    /**
     * In a similar way to gda_data_model_set_value_at(), this method modifies a data model's contents
     * by setting several values at once.
     * 
     * If any value in `values` is actually %NULL, then the value in the corresponding column is left
     * unchanged.
     *  
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param row row number.
     * @param values a list of #GValue (or %NULL), one for at most the number of columns of `model`
     */
    set_values(row: number, values: any[] | null): boolean
    /**
     * Re-enables notifications of changes on the given data model.
     */
    thaw(): void

    // Own virtual methods of Gda-5.0.Gda.DataModel

    vfunc_access_changed(): void
    vfunc_changed(): void
    /**
     * Appends a row to the data model (the new row will possibly have NULL values for all columns,
     * or some other values depending on the data model implementation)
     * 
     * Upon errors -1 will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @virtual 
     */
    vfunc_i_append_row(): number
    /**
     * Appends a row to the given data model. If any value in `values` is actually %NULL, then
     * it is considered as a default value. If `values` is %NULL then all values are set to their default value.
     * 
     * Upon errors -1 will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @virtual 
     * @param values #GList of #GValue* representing the row to add.  The          length must match model's column count.  These #GValue     are value-copied (the user is still responsible for freeing them).
     */
    vfunc_i_append_values(values: any[] | null): number
    /**
     * Creates a new iterator object #GdaDataModelIter object which can be used to iterate through
     * rows in `model`. The new #GdaDataModelIter does not hold any reference to `model` (ie. if `model`
     * is destroyed at some point, the new iterator will become useless but in any case it will not prevent
     * the data model from being destroyed).
     * 
     * Depending on the data model's implementation, a new #GdaDataModelIter object may be created,
     * or a reference to an already existing #GdaDataModelIter may be returned. For example if `model` only
     * supports being accessed using a forward moving cursor (say a the result of a SELECT executed by SQLite
     * with a cursor access mode specified), then this method will always return the same iterator.
     * 
     * If a new #GdaDataModelIter is created, then the row it represents is undefined.
     * 
     * For models which can be accessed
     * randomly, any row can be set using gda_data_model_iter_move_to_row(),
     * and for models which are accessible sequentially only then use
     * gda_data_model_iter_move_next() (and gda_data_model_iter_move_prev() if
     * supported).
     * 
     * Note: for the #GdaDataProxy data model (which proxies any #GdaDataModel for modifications and
     * has twice the number of columns of the proxied data model), this method will create an iterator
     * in which only the columns of the proxied data model appear. If you need to have a #GdaDataModelIter
     * in which all the proxy's columns appear, create it using:
     * <programlisting><![CDATA[iter = g_object_new (GDA_TYPE_DATA_MODEL_ITER, "data-model", proxy, NULL);]]></programlisting>
     * @virtual 
     */
    vfunc_i_create_iter(): DataModelIter
    /**
     * Queries the underlying data model implementation for a description
     * of a given column. That description is returned in the form of
     * a #GdaColumn structure, which contains all the information
     * about the given column in the data model.
     * 
     * WARNING: the returned #GdaColumn object belongs to the `model` model and
     * and should not be destroyed; any modification will affect the whole data model.
     * @virtual 
     * @param col column number.
     */
    vfunc_i_describe_column(col: number): Column | null
    /**
     * Returns the first row where all the values in `values` at the columns identified at
     * `cols_index` match. If the row can't be identified, then returns -1;
     * 
     * NOTE: the `cols_index` array MUST contain a column index for each value in `values`
     * @virtual 
     * @param values a list of #GValue values (no %NULL is allowed)
     * @param cols_index an array of #gint containing the column number to match each value of `values`
     */
    vfunc_i_find_row(values: any[], cols_index: number[]): number
    /**
     * Get the attributes of `model` such as how to access the data it contains if it's modifiable, etc.
     * @virtual 
     */
    vfunc_i_get_access_flags(): DataModelAccessFlags
    /**
     * Get the attributes of the value stored at (row, col) in `model,` which
     * is an ORed value of #GdaValueAttribute flags. As a special case, if
     * `row` is -1, then the attributes returned correspond to a "would be" value
     * if a row was added to `model`.
     * @virtual 
     * @param col a valid column number
     * @param row a valid row number, or -1
     */
    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute
    /**
     * Get the global data model exception(s) that occurred when using `model`.
     * This is useful for example for the LDAP related
     * data models where some rows may be missing because the LDAP search has reached a limit
     * imposed by the LDAP server.
     * @virtual 
     */
    vfunc_i_get_exceptions(): GLib.Error[]
    vfunc_i_get_n_columns(): number
    vfunc_i_get_n_rows(): number
    /**
     * Returns the status of notifications changes on the given data model.
     * @virtual 
     */
    vfunc_i_get_notify(): boolean
    /**
     * Retrieves the data stored in the given position (identified by
     * the `col` and `row` parameters) on a data model.
     * 
     * Upon errors %NULL will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * 
     * This is the main function for accessing data in a model which allows random access to its data.
     * To access data in a data model using a cursor, use a #GdaDataModelIter object, obtained using
     * gda_data_model_create_iter().
     * 
     * Note1: the returned #GValue must not be modified directly (unexpected behaviours may
     * occur if you do so).
     * 
     * Note2: the returned value may become invalid as soon as any Libgda part is executed again,
     * which means if you want to keep the value, a copy must be made, however it will remain valid
     * as long as the only Libgda usage is calling gda_data_model_get_value_at() for different values
     * of the same row.
     * 
     * If you want to modify a value stored in a #GdaDataModel, use the gda_data_model_set_value_at() or
     * gda_data_model_set_values() methods.
     * 
     * Upon errors %NULL will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @virtual 
     * @param col a valid column number.
     * @param row a valid row number.
     */
    vfunc_i_get_value_at(col: number, row: number): any | null
    /**
     * Moves `iter` to the row number given by `row`.
     * @virtual 
     * @param iter a #GdaDataModelIter object.
     * @param row a row to point to with `iter`
     */
    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean
    /**
     * Moves `iter` to the next row in `model`.
     * @virtual 
     * @param iter a #GdaDataModelIter object.
     */
    vfunc_i_iter_next(iter: DataModelIter): boolean
    /**
     * Moves `iter` to the next row in `model`.
     * @virtual 
     * @param iter a #GdaDataModelIter object.
     */
    vfunc_i_iter_prev(iter: DataModelIter): boolean
    /**
     * Set `value` to the given `column` and row pointed by `iter` in the given `model`.
     * @virtual 
     * @param iter a #GdaDataModelIter object.
     * @param col the number of column to set value to
     * @param value the to use to set on
     */
    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    /**
     * Removes a row from the data model.
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @virtual 
     * @param row the row number to be removed.
     */
    vfunc_i_remove_row(row: number): boolean
    /**
     * Sends a hint to the data model. The hint may or may not be handled by the data
     * model, depending on its implementation
     * @virtual 
     * @param hint a hint to send to the model
     * @param hint_value an optional value to specify the hint, or %NULL
     */
    vfunc_i_send_hint(hint: DataModelHint, hint_value: any | null): void
    /**
     * Enable or disable notifications changes on the given data model.
     * @virtual 
     * @param do_notify_changes Set to TRUE if you require notifications.
     */
    vfunc_i_set_notify(do_notify_changes: boolean): void
    /**
     * Modifies a value in `model,` at (`col,` `row)`.
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @virtual 
     * @param col column number.
     * @param row row number.
     * @param value a #GValue (not %NULL)
     */
    vfunc_i_set_value_at(col: number, row: number, value: any): boolean
    /**
     * In a similar way to gda_data_model_set_value_at(), this method modifies a data model's contents
     * by setting several values at once.
     * 
     * If any value in `values` is actually %NULL, then the value in the corresponding column is left
     * unchanged.
     *  
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @virtual 
     * @param row row number.
     * @param values a list of #GValue (or %NULL), one for at most the number of columns of `model`
     */
    vfunc_i_set_values(row: number, values: any[] | null): boolean
    /**
     * Emits the 'reset' and 'changed' signal on `model`.
     * @virtual 
     */
    vfunc_reset(): void
    /**
     * Emits the 'row_inserted' and 'changed' signals on `model`.
     * 
     * This method should only be used by #GdaDataModel implementations to
     * signal that a row has been inserted.
     * @virtual 
     * @param row row number.
     */
    vfunc_row_inserted(row: number): void
    /**
     * Emits the 'row_removed' and 'changed' signal on `model`.
     * 
     * This method should only be used by #GdaDataModel implementations to
     * signal that a row has been removed
     * @virtual 
     * @param row row number.
     */
    vfunc_row_removed(row: number): void
    /**
     * Emits the 'row_updated' and 'changed' signals on `model`.
     * 
     * This method should only be used by #GdaDataModel implementations to
     * signal that a row has been updated.
     * @virtual 
     * @param row row number.
     */
    vfunc_row_updated(row: number): void

    // Own signals of Gda-5.0.Gda.DataModel

    connect(sigName: "access-changed", callback: DataModel_AccessChangedSignalCallback): number
    connect_after(sigName: "access-changed", callback: DataModel_AccessChangedSignalCallback): number
    emit(sigName: "access-changed", ...args: any[]): void
    connect(sigName: "changed", callback: DataModel_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: DataModel_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "reset", callback: DataModel_ResetSignalCallback): number
    connect_after(sigName: "reset", callback: DataModel_ResetSignalCallback): number
    emit(sigName: "reset", ...args: any[]): void
    connect(sigName: "row-inserted", callback: DataModel_RowInsertedSignalCallback): number
    connect_after(sigName: "row-inserted", callback: DataModel_RowInsertedSignalCallback): number
    emit(sigName: "row-inserted", row: number, ...args: any[]): void
    connect(sigName: "row-removed", callback: DataModel_RowRemovedSignalCallback): number
    connect_after(sigName: "row-removed", callback: DataModel_RowRemovedSignalCallback): number
    emit(sigName: "row-removed", row: number, ...args: any[]): void
    connect(sigName: "row-updated", callback: DataModel_RowUpdatedSignalCallback): number
    connect_after(sigName: "row-updated", callback: DataModel_RowUpdatedSignalCallback): number
    emit(sigName: "row-updated", row: number, ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.DataModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataModel extends GObject.Object {

    // Own properties of Gda-5.0.Gda.DataModel

    static name: string
    static $gtype: GObject.GType<DataModel>

    // Constructors of Gda-5.0.Gda.DataModel

    constructor(config?: DataModel_ConstructProps) 
    _init(config?: DataModel_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Lockable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Lockable {

    // Owm methods of Gda-5.0.Gda.Lockable

    /**
     * Locks `lockable`. If it is already locked by another thread, the current thread will block until it is unlocked
     * by the other thread.
     * 
     * This function can be used even if g_thread_init() has not yet been called, and, in that case, will do nothing.
     * 
     * Note: unlike g_mutex_lock(), this method recursive, which means a thread can lock `lockable` several times
     * (and has to unlock it as many times to actually unlock it).
     */
    lock(): void
    /**
     * Tries to lock `lockable`. If it is already locked by another thread, then it immediately returns FALSE, otherwise
     * it locks `lockable`.
     * 
     * This function can be used even if g_thread_init() has not yet been called, and, in that case, will do nothing.
     * 
     * Note: unlike g_mutex_lock(), this method recursive, which means a thread can lock `lockable` several times
     * (and has to unlock it as many times to actually unlock it).
     */
    trylock(): boolean
    /**
     * Unlocks `lockable`. This method should not be called if the current does not already holds a lock on `lockable` (having
     * used gda_lockable_lock() or gda_lockable_trylock()).
     * 
     * This function can be used even if g_thread_init() has not yet been called, and, in that case, will do nothing.
     */
    unlock(): void

    // Own virtual methods of Gda-5.0.Gda.Lockable

    vfunc_i_lock(): void
    vfunc_i_trylock(): boolean
    vfunc_i_unlock(): void

    // Class property signals of Gda-5.0.Gda.Lockable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Lockable extends GObject.Object {

    // Own properties of Gda-5.0.Gda.Lockable

    static name: string
    static $gtype: GObject.GType<Lockable>

    // Constructors of Gda-5.0.Gda.Lockable

    constructor(config?: Lockable_ConstructProps) 
    _init(config?: Lockable_ConstructProps): void
}

interface Batch_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface Batch_ChangedSignalCallback {
    ($obj: Batch, changed_stmt: GObject.Object): void
}

interface Batch {

    // Own fields of Gda-5.0.Gda.Batch

    object: GObject.Object
    priv: BatchPrivate

    // Owm methods of Gda-5.0.Gda.Batch

    /**
     * Add `stmt` to the list of statements managed by `batch`. A #GdaStatement object can be
     * added multiple times to a #GdaBatch object.
     * @param stmt a statement to add to `batch'`s statements list
     */
    add_statement(stmt: Statement): void
    /**
     * Copy constructor
     */
    copy(): Batch
    /**
     * Get a new #GdaSet object which groups all the execution parameters
     * which `batch` needs for all the statements it includes.
     * This new object is returned though `out_params`.
     * 
     * Note that if `batch` does not need any parameter, then `out_params` is set to %NULL.
     */
    get_parameters(): [ /* returnType */ boolean, /* out_params */ Set ]
    /**
     * Get a list of the #GdaStatement objects contained in `batch`
     */
    get_statements(): Statement[]
    /**
     * Removes `stmt` from the list of statements managed by `batch`. If `stmt` is present several
     * times in `batch'`s statements' list, then only the first one is removed.
     * @param stmt a statement to remove from `batch'`s statements list
     */
    remove_statement(stmt: Statement): void
    /**
     * Creates a string representing the contents of `batch`.
     */
    serialize(): string

    // Own virtual methods of Gda-5.0.Gda.Batch

    vfunc_changed(changed_stmt: Statement): void

    // Own signals of Gda-5.0.Gda.Batch

    connect(sigName: "changed", callback: Batch_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Batch_ChangedSignalCallback): number
    emit(sigName: "changed", changed_stmt: GObject.Object, ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.Batch

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Batch extends GObject.Object {

    // Own properties of Gda-5.0.Gda.Batch

    static name: string
    static $gtype: GObject.GType<Batch>

    // Constructors of Gda-5.0.Gda.Batch

    constructor(config?: Batch_ConstructProps) 
    /**
     * Creates a new #GdaBatch object
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdaBatch object
     * @constructor 
     */
    static new(): Batch
    _init(config?: Batch_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface BlobOp_ConstructProps extends GObject.Object_ConstructProps {
}

interface BlobOp {

    // Own fields of Gda-5.0.Gda.BlobOp

    object: GObject.Object
    _gda_reserved1: object

    // Owm methods of Gda-5.0.Gda.BlobOp

    get_length(): number
    /**
     * Reads a chunk of bytes from the BLOB accessible through `op` into `blob`.
     * @param blob a #GdaBlob to read data to
     * @param offset offset to read from the start of the blob (starts at 0)
     * @param size maximum number of bytes to read.
     */
    read(blob: Blob, offset: number, size: number): number
    /**
     * Reads the whole contents of the blob manipulated by `op` into `blob`
     * @param blob a #GdaBlob to read data to
     */
    read_all(blob: Blob): boolean
    /**
     * Writes a chunk of bytes from a `blob` to the BLOB accessible through `op,` `blob` is unchanged after
     * this call.
     * 
     * If `blob` has an associated #GdaBlobOp (ie. if `blob->`op is not %NULL) then the data to be written
     * using `op` is the data fetched using `blob->`op.
     * @param blob a #GdaBlob which contains the data to write
     * @param offset offset to write from the start of the blob (starts at 0)
     */
    write(blob: Blob, offset: number): number
    /**
     * Writes the whole contents of `blob` into the blob manipulated by `op`. If necessary the resulting
     * blob is truncated from its previous length.
     * @param blob a #GdaBlob which contains the data to write
     */
    write_all(blob: Blob): boolean

    // Own virtual methods of Gda-5.0.Gda.BlobOp

    vfunc_get_length(): number
    /**
     * Reads a chunk of bytes from the BLOB accessible through `op` into `blob`.
     * @virtual 
     * @param blob a #GdaBlob to read data to
     * @param offset offset to read from the start of the blob (starts at 0)
     * @param size maximum number of bytes to read.
     */
    vfunc_read(blob: Blob, offset: number, size: number): number
    /**
     * Writes a chunk of bytes from a `blob` to the BLOB accessible through `op,` `blob` is unchanged after
     * this call.
     * 
     * If `blob` has an associated #GdaBlobOp (ie. if `blob->`op is not %NULL) then the data to be written
     * using `op` is the data fetched using `blob->`op.
     * @virtual 
     * @param blob a #GdaBlob which contains the data to write
     * @param offset offset to write from the start of the blob (starts at 0)
     */
    vfunc_write(blob: Blob, offset: number): number
    /**
     * Writes the whole contents of `blob` into the blob manipulated by `op`. If necessary the resulting
     * blob is truncated from its previous length.
     * @virtual 
     * @param blob a #GdaBlob which contains the data to write
     */
    vfunc_write_all(blob: Blob): boolean

    // Class property signals of Gda-5.0.Gda.BlobOp

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BlobOp extends GObject.Object {

    // Own properties of Gda-5.0.Gda.BlobOp

    static name: string
    static $gtype: GObject.GType<BlobOp>

    // Constructors of Gda-5.0.Gda.BlobOp

    constructor(config?: BlobOp_ConstructProps) 
    _init(config?: BlobOp_ConstructProps): void
}

interface Column_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.Column

    id?: string | null
}

/**
 * Signal callback interface for `g-type-changed`
 */
interface Column_GTypeChangedSignalCallback {
    ($obj: Column, old_type: GObject.GType, new_type: GObject.GType): void
}

/**
 * Signal callback interface for `name-changed`
 */
interface Column_NameChangedSignalCallback {
    ($obj: Column, old_name: string): void
}

interface Column {

    // Own properties of Gda-5.0.Gda.Column

    id: string

    // Own fields of Gda-5.0.Gda.Column

    object: GObject.Object
    priv: ColumnPrivate

    // Owm methods of Gda-5.0.Gda.Column

    /**
     * Creates a new #GdaColumn object from an existing one.
     */
    copy(): Column
    /**
     * Gets the 'allow null' flag of the given column.
     */
    get_allow_null(): boolean
    /**
     * Get the value associated to a named attribute.
     * 
     * Attributes can have any name, but Libgda proposes some default names, see <link linkend="libgda-40-Attributes-manager.synopsis">this section</link>.
     * @param attribute attribute name as a string
     */
    get_attribute(attribute: string): any
    get_auto_increment(): boolean
    get_dbms_type(): string
    get_default_value(): any | null
    get_description(): string
    get_g_type(): GObject.GType
    get_name(): string
    get_position(): number
    /**
     * Sets the 'allow null' flag of the given column.
     * @param allow whether the given column should allows null values or not.
     */
    set_allow_null(allow: boolean): void
    /**
     * Set the value associated to a named attribute. The `attribute` string is 'stolen' by this method, and
     * the memory it uses will be freed using the `destroy` function when no longer needed (if `destroy` is %NULL,
     * then the string will not be freed at all).
     * 
     * Attributes can have any name, but Libgda proposes some default names,
     * see <link linkend="libgda-40-Attributes-manager.synopsis">this section</link>.
     * 
     * If there is already an attribute named `attribute` set, then its value is replaced with the new value (`value` is
     * copied), except if `value` is %NULL, in which case the attribute is removed.
     * 
     * For example one would use it as:
     * 
     * <code>
     * gda_column_set_attribute (holder, g_strdup (my_attribute), g_free, my_value);
     * gda_column_set_attribute (holder, GDA_ATTRIBUTE_NAME, NULL, my_value);
     * </code>
     * 
     * Note: this method does not modify in any way the contents of the data model for which `column` is a column (nor
     * does it modify the table definition of the tables used by a SELECT statement is the model was created from a
     * SELECT statement).
     * @param attribute attribute name as a static string
     * @param value a #GValue, or %NULL
     * @param destroy a function to be called when `attribute` is not needed anymore, or %NULL
     */
    set_attribute(attribute: string, value: any | null, destroy: GLib.DestroyNotify | null): void
    /**
     * Sets the auto increment flag for the given column.
     * @param is_auto auto increment status.
     */
    set_auto_increment(is_auto: boolean): void
    /**
     * Defines `column'`s database type
     * @param dbms_type a string
     */
    set_dbms_type(dbms_type: string): void
    /**
     * Sets `column'`s default #GValue.
     * @param default_value default #GValue for the column
     */
    set_default_value(default_value: any | null): void
    /**
     * Sets the column's description
     * @param title title name.
     */
    set_description(title: string): void
    /**
     * Sets the type of `column` to `type`.
     * @param type the new type of `column`.
     */
    set_g_type(type: GObject.GType): void
    /**
     * Sets the name of `column` to `name`.
     * @param name the new name of `column`.
     */
    set_name(name: string): void
    /**
     * Sets the position of the column refer to in the containing
     * data model.
     * @param position the wanted position of the column in the containing data model.
     */
    set_position(position: number): void

    // Own virtual methods of Gda-5.0.Gda.Column

    vfunc_g_type_changed(old_type: GObject.GType, new_type: GObject.GType): void
    vfunc_name_changed(old_name: string): void

    // Own signals of Gda-5.0.Gda.Column

    connect(sigName: "g-type-changed", callback: Column_GTypeChangedSignalCallback): number
    connect_after(sigName: "g-type-changed", callback: Column_GTypeChangedSignalCallback): number
    emit(sigName: "g-type-changed", old_type: GObject.GType, new_type: GObject.GType, ...args: any[]): void
    connect(sigName: "name-changed", callback: Column_NameChangedSignalCallback): number
    connect_after(sigName: "name-changed", callback: Column_NameChangedSignalCallback): number
    emit(sigName: "name-changed", old_name: string, ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.Column

    connect(sigName: "notify::id", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Column extends GObject.Object {

    // Own properties of Gda-5.0.Gda.Column

    static name: string
    static $gtype: GObject.GType<Column>

    // Constructors of Gda-5.0.Gda.Column

    constructor(config?: Column_ConstructProps) 
    constructor() 
    static new(): Column
    _init(config?: Column_ConstructProps): void
}

interface Config_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.Config

    /**
     * File to use for system-wide DSN list. When changed, the whole list of DSN will be reloaded.
     */
    system_filename?: string | null
    /**
     * File to use for per-user DSN list. When changed, the whole list of DSN will be reloaded.
     */
    user_filename?: string | null
}

/**
 * Signal callback interface for `dsn-added`
 */
interface Config_DsnAddedSignalCallback {
    ($obj: Config, new_dsn: object | null): void
}

/**
 * Signal callback interface for `dsn-changed`
 */
interface Config_DsnChangedSignalCallback {
    ($obj: Config, dsn: object | null): void
}

/**
 * Signal callback interface for `dsn-removed`
 */
interface Config_DsnRemovedSignalCallback {
    ($obj: Config, old_dsn: object | null): void
}

/**
 * Signal callback interface for `dsn-to-be-removed`
 */
interface Config_DsnToBeRemovedSignalCallback {
    ($obj: Config, old_dsn: object | null): void
}

interface Config {

    // Own properties of Gda-5.0.Gda.Config

    /**
     * File to use for system-wide DSN list. When changed, the whole list of DSN will be reloaded.
     */
    system_filename: string
    /**
     * File to use for per-user DSN list. When changed, the whole list of DSN will be reloaded.
     */
    user_filename: string

    // Own fields of Gda-5.0.Gda.Config

    object: GObject.Object
    priv: ConfigPrivate

    // Own virtual methods of Gda-5.0.Gda.Config

    vfunc_dsn_added(new_dsn: DsnInfo): void
    vfunc_dsn_changed(dsn: DsnInfo): void
    vfunc_dsn_removed(old_dsn: DsnInfo): void
    vfunc_dsn_to_be_removed(old_dsn: DsnInfo): void

    // Own signals of Gda-5.0.Gda.Config

    connect(sigName: "dsn-added", callback: Config_DsnAddedSignalCallback): number
    connect_after(sigName: "dsn-added", callback: Config_DsnAddedSignalCallback): number
    emit(sigName: "dsn-added", new_dsn: object | null, ...args: any[]): void
    connect(sigName: "dsn-changed", callback: Config_DsnChangedSignalCallback): number
    connect_after(sigName: "dsn-changed", callback: Config_DsnChangedSignalCallback): number
    emit(sigName: "dsn-changed", dsn: object | null, ...args: any[]): void
    connect(sigName: "dsn-removed", callback: Config_DsnRemovedSignalCallback): number
    connect_after(sigName: "dsn-removed", callback: Config_DsnRemovedSignalCallback): number
    emit(sigName: "dsn-removed", old_dsn: object | null, ...args: any[]): void
    connect(sigName: "dsn-to-be-removed", callback: Config_DsnToBeRemovedSignalCallback): number
    connect_after(sigName: "dsn-to-be-removed", callback: Config_DsnToBeRemovedSignalCallback): number
    emit(sigName: "dsn-to-be-removed", old_dsn: object | null, ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.Config

    connect(sigName: "notify::system-filename", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-filename", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-filename", ...args: any[]): void
    connect(sigName: "notify::user-filename", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-filename", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Config extends GObject.Object {

    // Own properties of Gda-5.0.Gda.Config

    static name: string
    static $gtype: GObject.GType<Config>

    // Constructors of Gda-5.0.Gda.Config

    constructor(config?: Config_ConstructProps) 
    _init(config?: Config_ConstructProps): void
    /**
     * Tells if the global (system) configuration can be modified (considering
     * system permissions and settings)
     */
    static can_modify_system_config(): boolean
    /**
     * Add or update a DSN from the definition in `info`.
     * 
     * This method may fail with a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * @param info a pointer to a filled GdaDsnInfo structure
     */
    static define_dsn(info: DsnInfo): boolean
    /**
     * Tells if the data source identified as `dsn_name` needs any authentication. If a &lt;username&gt;
     * and optionally a &lt;password&gt; are specified, they are ignored.
     * @param dsn_name the name of a DSN, in the "[&lt;username&gt;[:&lt;password&gt;]`]`&lt;DSN&gt;" format
     */
    static dsn_needs_authentication(dsn_name: string): boolean
    static error_quark(): GLib.Quark
    /**
     * Get a pointer to the global (unique) #GdaConfig object. This functions increments
     * the reference count of the object, so you need to call g_object_unref() on it once finished.
     */
    static get(): Config
    /**
     * Get information about the DSN named `dsn_name`.
     * 
     * `dsn_name'`s format is "[&lt;username&gt;[:&lt;password&gt;]`]`&lt;DSN&gt;" (if &lt;username&gt;
     * and optionally &lt;password&gt; are provided, they are ignored). Also see the gda_dsn_split() utility
     * function.
     * @param dsn_name the name of the DSN to look for
     */
    static get_dsn_info(dsn_name: string): DsnInfo
    /**
     * Get a pointer to a read-only #GdaDsnInfo at the `index` position
     * @param index an index
     */
    static get_dsn_info_at_index(index: number): DsnInfo
    /**
     * Get the index (starting at 0) of the DSN named `dsn_name`
     * @param dsn_name a DSN
     */
    static get_dsn_info_index(dsn_name: string): number
    /**
     * Get the number of defined DSN
     */
    static get_nb_dsn(): number
    /**
     * Get a pointer to the session-wide #GdaServerProvider for the
     * provider named `provider_name`. The caller must not call g_object_unref() on the
     * returned object.
     * 
     * This method may fail with a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * @param provider_name a database provider
     */
    static get_provider(provider_name: string): ServerProvider
    /**
     * Get some information about the a database provider (adapter) named
     * @param provider_name a database provider
     */
    static get_provider_info(provider_name: string): ProviderInfo
    /**
     * Get a #GdaDataModel representing all the configured DSN, and keeping itself up to date with
     * the changes in the declared DSN.
     * 
     * The returned data model is composed of the following columns:
     * <itemizedlist>
     *  <listitem><para>DSN name</para></listitem>
     *  <listitem><para>Provider name</para></listitem>
     *  <listitem><para>Description</para></listitem>
     *  <listitem><para>Connection string</para></listitem>
     *  <listitem><para>Username if it exists</para></listitem>
     * </itemizedlist>
     */
    static list_dsn(): DataModel
    /**
     * Get a #GdaDataModel representing all the installed database providers.
     * 
     * The returned data model is composed of the following columns:
     * <itemizedlist>
     *  <listitem><para>Provider name</para></listitem>
     *  <listitem><para>Description</para></listitem>
     *  <listitem><para>DSN parameters</para></listitem>
     *  <listitem><para>Authentication parameters</para></listitem>
     *  <listitem><para>File name of the plugin</para></listitem>
     * </itemizedlist>
     */
    static list_providers(): DataModel
    /**
     * Remove the DSN named `dsn_name`.
     * 
     * This method may fail with a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * @param dsn_name the name of the DSN to remove
     */
    static remove_dsn(dsn_name: string): boolean
}

interface Connection_ConstructProps extends Lockable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.Connection

    auth_string?: string | null
    cnc_string?: string | null
    dsn?: string | null
    /**
     * Defines the number of #GdaConnectionEvent objects kept in memory which can
     * be fetched using gda_connection_get_events().
     */
    events_history_size?: number | null
    /**
     * Artificially slows down the execution of queries. This property can be used to
     * debug some problems. If non zero, this value is the number of microseconds waited before actually
     * executing each query.
     */
    execution_slowdown?: number | null
    /**
     * Computes execution times for each statement executed.
     */
    execution_timer?: boolean | null
    /**
     * This property, if set to %TRUE, specifies that the connection is not a real connection, but rather
     * a #GdaConnection object which "proxies" all the calls to another connection which executes in a sub
     * thread.
     * 
     * Note: this property is used internally by Libgda and should not be directly used by any programs. Setting
     * this property has no effect, reading it is supported, though.
     */
    is_wrapper?: boolean | null
    meta_store?: MetaStore | null
    /**
     * Useful only when there is a mainloop and when the connection acts as a thread wrapper around another connection,
     * it sets up a timeout to handle signals coming from the wrapped connection.
     * 
     * If the connection is not a thread wrapper, then this property has no effect.
     */
    monitor_wrapped_in_mainloop?: boolean | null
    provider?: ServerProvider | null
    thread_owner?: object | null
}

/**
 * Signal callback interface for `conn-closed`
 */
interface Connection_ConnClosedSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `conn-opened`
 */
interface Connection_ConnOpenedSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `conn-to-close`
 */
interface Connection_ConnToCloseSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `dsn-changed`
 */
interface Connection_DsnChangedSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `error`
 */
interface Connection_ErrorSignalCallback {
    ($obj: Connection, event: ConnectionEvent): void
}

/**
 * Signal callback interface for `transaction-status-changed`
 */
interface Connection_TransactionStatusChangedSignalCallback {
    ($obj: Connection): void
}

interface Connection extends Lockable {

    // Own properties of Gda-5.0.Gda.Connection

    auth_string: string
    cnc_string: string
    dsn: string
    /**
     * Defines the number of #GdaConnectionEvent objects kept in memory which can
     * be fetched using gda_connection_get_events().
     */
    events_history_size: number
    /**
     * Artificially slows down the execution of queries. This property can be used to
     * debug some problems. If non zero, this value is the number of microseconds waited before actually
     * executing each query.
     */
    execution_slowdown: number
    /**
     * Computes execution times for each statement executed.
     */
    execution_timer: boolean
    /**
     * This property, if set to %TRUE, specifies that the connection is not a real connection, but rather
     * a #GdaConnection object which "proxies" all the calls to another connection which executes in a sub
     * thread.
     * 
     * Note: this property is used internally by Libgda and should not be directly used by any programs. Setting
     * this property has no effect, reading it is supported, though.
     */
    is_wrapper: boolean
    meta_store: MetaStore
    /**
     * Useful only when there is a mainloop and when the connection acts as a thread wrapper around another connection,
     * it sets up a timeout to handle signals coming from the wrapped connection.
     * 
     * If the connection is not a thread wrapper, then this property has no effect.
     */
    monitor_wrapped_in_mainloop: boolean
    provider: ServerProvider
    thread_owner: object

    // Own fields of Gda-5.0.Gda.Connection

    object: GObject.Object
    priv: ConnectionPrivate

    // Owm methods of Gda-5.0.Gda.Connection

    /**
     * Adds an event to the given connection. This function is usually
     * called by providers, to inform clients of events that happened
     * during some operation.
     * 
     * As soon as a provider (or a client, it does not matter) calls this
     * function with an `event` object which is an error,
     * the connection object emits the "error" signal, to which clients can connect to be
     * informed of events.
     * 
     * WARNING: the reference to the `event` object is stolen by this function!
     * @param event is stored internally, so you don't need to unref it.
     */
    add_event(event: ConnectionEvent): void
    /**
     * Declares that `prepared_stmt` is a prepared statement object associated to `gda_stmt` within the connection
     * (meaning the connection increments the reference counter of `prepared_stmt)`.
     * 
     * If `gda_stmt` changes or is destroyed, the the association will be lost and the connection will lose the
     * reference it has on `prepared_stmt`.
     * @param gda_stmt a #GdaStatement object
     * @param prepared_stmt a prepared statement object (as a #GdaPStmt object, or more likely a descendant)
     */
    add_prepared_statement(gda_stmt: Statement, prepared_stmt: PStmt): void
    /**
     * Adds a SAVEPOINT named `name`.
     * @param name name of the savepoint to add
     */
    add_savepoint(name: string | null): boolean
    /**
     * Requests that a task be cancelled. This operation may of may not have any effect
     * depending on the task's status, even if it returns %TRUE. If it returns %FALSE,
     * then the task has not been cancelled.
     * @param task_id a task ID returned by gda_connection_async_statement_execute()
     */
    async_cancel(task_id: number): boolean
    /**
     * Use this method to obtain the result of the execution of a statement which has been executed asynchronously by
     * calling gda_connection_async_statement_execute(). This function is non locking and will return %NULL (and no
     * error will be set) if the statement has not been executed yet.
     * 
     * If the statement has been executed, this method returns the same value as gda_connection_statement_execute()
     * would have if the statement had been
     * executed synchronously.
     * @param task_id a task ID returned by gda_connection_async_statement_execute()
     */
    async_fetch_result(task_id: number): [ /* returnType */ GObject.Object, /* last_insert_row */ Set ]
    /**
     * This method is similar to gda_connection_statement_execute() but is asynchronous as it method returns
     * immediately with a task ID. It's up to the caller to use gda_connection_async_fetch_result() regularly to check
     * if the statement's execution is finished.
     * 
     * It is possible to call the method several times to request several statements to be executed asynchronously, the
     * statements will be executed in the order in which they were requested.
     * 
     * The parameters, if present, are copied and can be discarded or modified before the statement is actually executed.
     * The `stmt` object is not copied but simply referenced (for performance reasons), and if it is modified before
     * it is actually executed, then its execution will not occur. It is however safe to call g_object_unref() on it if
     * it's not needed anymore.
     * 
     * The execution failure of any statement has no impact on the execution of other statements except for example if
     * the connection has a transaction started and the failure invalidates the transaction (as decided by the database
     * server).
     * 
     * Note that for asynchronous calls to succeed, it is gererally necessary to specify the
     * %GDA_CONNECTION_OPTIONS_THREAD_ISOLATED flag when opening the connection to be sure it is opened in a separate thread
     * in which asynchronous calls are made (failing to use this flag make the asynchronous call dependant on the database
     * provider implementation and at the moment none support this feature).
     * @param stmt a #GdaStatement object
     * @param params a #GdaSet object (which can be obtained using gda_statement_get_parameters()), or %NULL
     * @param model_usage in the case where `stmt` is a SELECT statement, specifies how the returned data model will be used
     * @param col_types an array of GType to request each returned #GdaDataModel's column's GType, terminated with the G_TYPE_NONE
     * @param need_last_insert_row TRUE if the values of the last interted row must be computed
     */
    async_statement_execute(stmt: Statement, params: Set | null, model_usage: StatementModelUsage, col_types: GObject.GType[] | null, need_last_insert_row: boolean): number
    /**
     * Executes all the statements contained in `batch` (in the order in which they were added to `batch)`, and
     * returns a list of #GObject objects, at most one #GObject for each statement; see gda_connection_statement_execute()
     * for details about the returned objects.
     * 
     * If one of the statement fails, then none of the subsequent statement will be executed, and the method returns
     * the list of #GObject created by the correct execution of the previous statements. If a transaction is required,
     * then it should be started before calling this method.
     * @param batch a #GdaBatch object which contains all the statements to execute
     * @param params a #GdaSet object (which can be obtained using gda_batch_get_parameters()), or %NULL
     * @param model_usage specifies how the returned data model(s) will be used, as a #GdaStatementModelUsage enum
     */
    batch_execute(batch: Batch, params: Set | null, model_usage: StatementModelUsage): GObject.Object[]
    /**
     * Starts a transaction on the data source, identified by the
     * `name` parameter.
     * 
     * Before starting a transaction, you can check whether the underlying
     * provider does support transactions or not by using the
     * gda_connection_supports_feature() function.
     * @param name the name of the transation to start, or %NULL
     * @param level the requested transaction level (%GDA_TRANSACTION_ISOLATION_UNKNOWN if not specified)
     */
    begin_transaction(name: string | null, level: TransactionIsolation): boolean
    /**
     * This function lets you clear the list of #GdaConnectionEvent's of the
     * given connection.
     */
    clear_events_list(): void
    /**
     * Closes the connection to the underlying data source, but first emits the
     * "conn-to-close" signal.
     */
    close(): void
    /**
     * Closes the connection to the underlying data source, without emiting any warning signal.
     */
    close_no_warning(): void
    /**
     * Commits the given transaction to the backend database. You need to call
     * gda_connection_begin_transaction() first.
     * @param name the name of the transation to commit, or %NULL
     */
    commit_transaction(name: string | null): boolean
    /**
     * Creates a new #GdaServerOperation object which can be modified in order
     * to perform the type type of action. It is a wrapper around the gda_server_provider_create_operation()
     * method.
     * @param type the type of operation requested
     * @param options an optional list of parameters
     */
    create_operation(type: ServerOperationType, options: Set | null): ServerOperation
    /**
     * Creates a new parser object able to parse the SQL dialect understood by `cnc`.
     * If the #GdaServerProvider object internally used by `cnc` does not have its own parser,
     * then %NULL is returned, and a general SQL parser can be obtained
     * using gda_sql_parser_new().
     */
    create_parser(): SqlParser
    /**
     * Removes any prepared statement associated to `gda_stmt` in `cnc:` this undoes what
     * gda_connection_add_prepared_statement() does.
     * @param gda_stmt a #GdaStatement object
     */
    del_prepared_statement(gda_stmt: Statement): void
    /**
     * This is a convenience function, which creates a DELETE statement and executes it using the values
     * provided. It internally relies on variables which makes it immune to SQL injection problems.
     * 
     * The equivalent SQL command is: DELETE FROM &lt;table&gt; WHERE &lt;condition_column_name&gt; = &lt;condition_value&gt;.
     * @param table the table's name with the row's values to be updated
     * @param condition_column_name the name of the column to used in the WHERE condition clause
     * @param condition_value the `condition_column_type'`s GType
     */
    delete_row_from_table(table: string, condition_column_name: string, condition_value: any): boolean
    /**
     * Delete the SAVEPOINT named `name` when not used anymore.
     * @param name name of the savepoint to delete
     */
    delete_savepoint(name: string | null): boolean
    /**
     * This is a convenience function to execute a SQL command over the opened connection. For the
     * returned value, see gda_connection_statement_execute_non_select()'s documentation.
     * @param sql a query statement that must not begin with "SELECT"
     */
    execute_non_select_command(sql: string): number
    /**
     * Execute a SQL SELECT command over an opened connection.
     * @param sql a query statement that must begin with "SELECT"
     */
    execute_select_command(sql: string): DataModel
    /**
     * Gets the user name used to open this connection.
     */
    get_authentication(): string
    /**
     * Gets the connection string used to open this connection.
     * 
     * The connection string is the string sent over to the underlying
     * database provider, which describes the parameters to be used
     * to open a connection on the underlying data source.
     */
    get_cnc_string(): string
    /**
     * This function allows you to determine the actual format for the date values.
     */
    get_date_format(): [ /* returnType */ boolean, /* out_first */ GLib.DateDMY, /* out_second */ GLib.DateDMY, /* out_third */ GLib.DateDMY, /* out_sep */ string ]
    get_dsn(): string
    /**
     * Retrieves a list of the last errors occurred during the connection. The returned list is
     * chronologically ordered such as that the most recent event is the #GdaConnectionEvent of the first node.
     * 
     * Warning: the `cnc` object may change the list if connection events occur
     */
    get_events(): ConnectionEvent[]
    /**
     * Get or initializes the #GdaMetaStore associated to `cnc`
     */
    get_meta_store(): MetaStore
    /**
     * see #gda_connection_get_meta_store_data
     * @param meta_type describes which data to get.
     * @param filters a #GList of #GdaHolder objects
     */
    get_meta_store_data_v(meta_type: ConnectionMetaType, filters: Holder[]): DataModel
    /**
     * Gets the #GdaConnectionOptions used to open this connection.
     */
    get_options(): ConnectionOptions
    /**
     * Retrieves a pointer to an object representing a prepared statement for `gda_stmt` within `cnc`. The
     * association must have been done using gda_connection_add_prepared_statement().
     * @param gda_stmt a #GdaStatement object
     */
    get_prepared_statement(gda_stmt: Statement): PStmt
    /**
     * Gets a pointer to the #GdaServerProvider object used to access the database
     */
    get_provider(): ServerProvider
    /**
     * Gets the name (identifier) of the database provider used by `cnc`
     */
    get_provider_name(): string
    /**
     * Get the status of `cnc` regarding transactions. The returned object should not be modified
     * or destroyed; however it may be modified or destroyed by the connection itself.
     * 
     * If %NULL is returned, then no transaction has been associated with `cnc`
     */
    get_transaction_status(): TransactionStatus
    /**
     * `col_names` and `values` must have length (&gt;= 1).
     * 
     * This is a convenience function, which creates an INSERT statement and executes it using the values
     * provided. It internally relies on variables which makes it immune to SQL injection problems.
     * 
     * The equivalent SQL command is: INSERT INTO &lt;table&gt; (&lt;column_name&gt; [,...]) VALUES (&lt;column_name&gt; = &lt;new_value&gt; [,...]).
     * @param table table's name to insert into
     * @param col_names a list of column names (as const gchar *)
     * @param values a list of values (as #GValue)
     */
    insert_row_into_table_v(table: string, col_names: string[], values: any[]): boolean
    /**
     * Checks whether a connection is open or not.
     */
    is_opened(): boolean
    /**
     * Tries to open the connection.
     */
    open(): boolean
    /**
     * This function helps to parse a SQL string which uses parameters and store them at `params`.
     * @param sql an SQL command to parse, not %NULL
     */
    parse_sql_string(sql: string): [ /* returnType */ Statement, /* params */ Set ]
    /**
     * Performs the operation described by `op` (which should have been created using
     * gda_connection_create_operation()). It is a wrapper around the gda_server_provider_perform_operation()
     * method.
     * @param op a #GdaServerOperation object
     */
    perform_operation(op: ServerOperation): boolean
    /**
     * Use this method to get a pointer to the next available connection event which can then be customized
     * and taken into account using gda_connection_add_event().
     * @param type a #GdaConnectionEventType
     */
    point_available_event(type: ConnectionEventType): ConnectionEvent
    /**
     * Use this method to get a correctly quoted (if necessary) SQL identifier which can be used
     * in SQL statements, from `id`. If `id` is already correctly quoted for `cnc,` then a copy of `id`
     * may be returned.
     * 
     * This method may add double quotes (or other characters) around `id:`
     * <itemizedlist>
     *  <listitem><para>if `id` is a reserved SQL keyword (such as SELECT, INSERT, ...)</para></listitem>
     *  <listitem><para>if `id` contains non allowed characters such as spaces, or if it starts with a digit</para></listitem>
     *  <listitem><para>in any other event as necessary for `cnc,` depending on the the options passed when opening the `cnc`
     *            connection, and specifically the <link linkend="GDA-CONNECTION-OPTIONS-SQL-IDENTIFIERS-CASE-SENSITIVE:CAPS">
     *            GDA_CONNECTION_OPTIONS_SQL_IDENTIFIERS_CASE_SENSITIVE</link> option.</para></listitem>
     * </itemizedlist>
     * 
     * One can safely pass an already quoted `id` to this method, either with quoting characters allowed by `cnc` or using the
     * double quote (") character.
     * @param id an SQL identifier
     */
    quote_sql_identifier(id: string): string
    /**
     * Executes the statement upon which `rstmt` is built. Note that as several statements can actually be executed by this
     * method, it is recommended to be within a transaction.
     * 
     * If `error` is not %NULL and `stop_on_error` is %FALSE, then it may contain the last error which occurred.
     * @param rstmt a #GdaRepetitiveStatement object
     * @param model_usage specifies how the returned data model will be used as a #GdaStatementModelUsage enum
     * @param col_types an array of GType to request each returned GdaDataModel's column's GType, see gda_connection_statement_execute_select_full() for more information
     * @param stop_on_error set to TRUE if the method has to stop on the first error.
     */
    repetitive_statement_execute(rstmt: RepetitiveStatement, model_usage: StatementModelUsage, col_types: GObject.GType[] | null, stop_on_error: boolean): GObject.Object[]
    /**
     * Rollback all the modifications made after the SAVEPOINT named `name`.
     * @param name name of the savepoint to rollback to
     */
    rollback_savepoint(name: string | null): boolean
    /**
     * Rollbacks the given transaction. This means that all changes
     * made to the underlying data source since the last call to
     * #gda_connection_begin_transaction() or #gda_connection_commit_transaction()
     * will be discarded.
     * @param name the name of the transation to commit, or %NULL
     */
    rollback_transaction(name: string | null): boolean
    /**
     * Executes `stmt`.
     * 
     * As `stmt` can, by design (and if not abused), contain only one SQL statement, the
     * return object will either be:
     * <itemizedlist>
     *   <listitem><para>a #GdaDataSelect object (which is also a #GdaDataModel) if `stmt` is a SELECT statement
     *             (usually a GDA_SQL_STATEMENT_SELECT, see #GdaSqlStatementType)
     *             containing the results of the SELECT. The resulting data model is by default read only, but
     *             modifications can be enabled, see the #GdaDataSelect's documentation for more information.</para></listitem>
     *   <listitem><para>a #GdaSet for any other SQL statement which correctly executed. In this case
     *        (if the provider supports it), then the #GdaSet may contain value holders named:
     *        <itemizedlist>
     *          <listitem><para>a (gint) #GdaHolder named "IMPACTED_ROWS"</para></listitem>
     *          <listitem><para>a (GObject) #GdaHolder named "EVENT" which contains a #GdaConnectionEvent</para></listitem>
     *        </itemizedlist></para></listitem>
     * </itemizedlist>
     * 
     * If `last_insert_row` is not %NULL and `stmt` is an INSERT statement, then it will contain (if the
     * provider used by `cnc` supports it) a new #GdaSet object composed of value holders named "+&lt;column number&gt;"
     * starting at column 0 which contain the actual inserted values. For example if a table is composed of an 'id' column
     * which is auto incremented and a 'name' column then the execution of a "INSERT INTO mytable (name) VALUES ('joe')"
     * query will return a #GdaSet with two holders:
     * <itemizedlist>
     *   <listitem><para>one with the '+0' ID which may for example contain 1 (note that its "name" property should be "id")</para></listitem>
     *   <listitem><para>one with the '+1' ID which will contain 'joe' (note that its "name" property should be "name")</para></listitem>
     * </itemizedlist>
     * 
     * This method may fail with a %GDA_SERVER_PROVIDER_ERROR domain error (see the #GdaServerProviderError error codes).
     * 
     * Note1: If `stmt` is a SELECT statement which has some parameters and  if `params` is %NULL, then the statement can't
     * be executed and this method will return %NULL.
     * 
     * Note2: If `stmt` is a SELECT statement which has some parameters and  if `params` is not %NULL but contains some
     * invalid parameters, then the statement can't be executed and this method will return %NULL, unless the
     * `model_usage` has the GDA_STATEMENT_MODEL_ALLOW_NOPARAM flag.
     * 
     * Note3: If `stmt` is a SELECT statement which has some parameters and  if `params` is not %NULL but contains some
     * invalid parameters and if `model_usage` has the GDA_STATEMENT_MODEL_ALLOW_NOPARAM flag, then the returned
     * data model will contain no row but will have all the correct columns (even though some of the columns might
     * report as GDA_TYPE_NULL). In this case, if (after this method call) any of `params'` parameters change
     * then the resulting data model will re-run itself, see the GdaDataSelect's
     * <link linkend="GdaDataSelect--auto-reset">auto-reset</link> property for more information.
     * 
     * Note4: if `model_usage` does not contain the GDA_STATEMENT_MODEL_RANDOM_ACCESS or
     * GDA_STATEMENT_MODEL_CURSOR_FORWARD flags, then the default will be to return a random access data model
     * 
     * Note5: If `stmt` is a SELECT statement which returns blob values (of type %GDA_TYPE_BLOB), then an implicit
     * transaction will have been started by the database provider, and it's up to the caller to close the transaction
     * (which will then be locked) once all the blob ressources have been
     * liberated (when the returned data model is destroyed). See the section about
     * <link linkend="gen:blobs">Binary large objects (BLOBs)</link> for more information.
     * 
     * Also see the <link linkend="limitations">provider's limitations</link>, and the
     * <link linkend="data-select">Advanced GdaDataSelect usage</link> sections.
     * @param stmt a #GdaStatement object
     * @param params a #GdaSet object (which can be obtained using gda_statement_get_parameters()), or %NULL
     * @param model_usage in the case where `stmt` is a SELECT statement, specifies how the returned data model will be used
     */
    statement_execute(stmt: Statement, params: Set | null, model_usage: StatementModelUsage): [ /* returnType */ GObject.Object, /* last_insert_row */ Set ]
    /**
     * Executes a non-selection statement on the given connection.
     * 
     * This function returns the number of rows affected by the execution of `stmt,` or -1
     * if an error occurred, or -2 if the connection's provider does not return the number of rows affected.
     * 
     * This function is just a convenience function around the gda_connection_statement_execute()
     * function.
     * See the documentation of the gda_connection_statement_execute() for information
     * about the `params` list of parameters.
     * 
     * See gda_connection_statement_execute() form more information about `last_insert_row`.
     * @param stmt a #GdaStatement object.
     * @param params a #GdaSet object (which can be obtained using gda_statement_get_parameters()), or %NULL
     */
    statement_execute_non_select(stmt: Statement, params: Set | null): [ /* returnType */ number, /* last_insert_row */ Set ]
    /**
     * Executes a selection command on the given connection.
     * 
     * This function returns a #GdaDataModel resulting from the SELECT statement, or %NULL
     * if an error occurred.
     * 
     * This function is just a convenience function around the gda_connection_statement_execute()
     * function.
     * 
     * See the documentation of the gda_connection_statement_execute() for information
     * about the `params` list of parameters.
     * @param stmt a #GdaStatement object.
     * @param params a #GdaSet object (which can be obtained using gda_statement_get_parameters()), or %NULL
     */
    statement_execute_select(stmt: Statement, params: Set | null): DataModel
    /**
     * Executes a selection command on the given connection.
     * 
     * This function returns a #GdaDataModel resulting from the SELECT statement, or %NULL
     * if an error occurred.
     * 
     * This function is just a convenience function around the gda_connection_statement_execute()
     * function.
     * 
     * See the documentation of the gda_connection_statement_execute() for information
     * about the `params` list of parameters.
     * @param stmt a #GdaStatement object.
     * @param params a #GdaSet object (which can be obtained using gda_statement_get_parameters()), or %NULL
     * @param model_usage specifies how the returned data model will be used as a #GdaStatementModelUsage enum
     * @param col_types an array of GType to request each returned #GdaDataModel's column's GType, terminated with the G_TYPE_NONE value. Any value left to 0 will make the database provider determine the real GType. `col_types` can also be %NULL if no column type is specified.
     */
    statement_execute_select_full(stmt: Statement, params: Set | null, model_usage: StatementModelUsage, col_types: GObject.GType[] | null): DataModel
    /**
     * Ask the database accessed through the `cnc` connection to prepare the usage of `stmt`. This is only useful
     * if `stmt` will be used more than once (however some database providers may always prepare statements
     * before executing them).
     * 
     * This function is also useful to make sure `stmt` is fully understood by the database before actually executing it.
     * 
     * Note however that it is also possible that gda_connection_statement_prepare() fails when
     * gda_connection_statement_execute() does not fail (this will usually be the case with statements such as
     * <![CDATA["SELECT * FROM ##tablename::string"]]> because database usually don't allow variables to be used in place of a
     * table name).
     * @param stmt a #GdaStatement object
     */
    statement_prepare(stmt: Statement): boolean
    /**
     * Renders `stmt` as an SQL statement, adapted to the SQL dialect used by `cnc`
     * @param stmt a #GdaStatement object
     * @param params a #GdaSet object (which can be obtained using gda_statement_get_parameters()), or %NULL
     * @param flags SQL rendering flags, as #GdaStatementSqlFlag OR'ed values
     */
    statement_to_sql(stmt: Statement, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string, /* params_used */ Holder[] ]
    /**
     * Asks the underlying provider for if a specific feature is supported.
     * @param feature feature to ask for.
     */
    supports_feature(feature: ConnectionFeature): boolean
    /**
     * Updates `cnc'`s associated #GdaMetaStore. If `context` is not %NULL, then only the parts described by
     * `context` will be updated, and if it is %NULL, then the complete meta store will be updated. Detailed
     * explanations follow:
     * 
     * In order to keep the meta store's contents in a consistent state, the update process involves updating
     * the contents of all the tables related to one where the contents change. For example the "_columns"
     * table (which lists all the columns of a table) depends on the "_tables" table (which lists all the tables
     * in a schema), so if a row is added, removed or modified in the "_tables", then the "_columns" table's contents
     * needs to be updated as well regarding that row.
     * 
     * If `context` is %NULL, then the update process will simply overwrite any data that was present in all the
     * meta store's tables with new (up to date) data even if nothing has changed, without having to build the
     * tables' dependency tree. This is the recommended way of proceeding when dealing with a meta store which
     * might be outdated.
     * 
     * On the other hand, if `context` is not %NULL, then a tree of the dependencies has to be built (depending on
     * `context)` and only some parts of the meta store are updated following that dependencies tree. Specifying a
     * context may be useful for example in the following situations:
     * <itemizedlist>
     *   <listitem><para>One knows that a database object has changed (for example a table created), and
     *                   may use the `context` to request that only the information about that table be updated
     *             </para></listitem>
     *   <listitem><para>One is only interested in the list of views, and may request that only the information
     *                   about views may be updated</para></listitem>
     * </itemizedlist>
     * 
     * When `context` is not %NULL, and contains specified SQL identifiers (for example the "table_name" of the "_tables"
     * table), then each SQL identifier has to match the convention the #GdaMetaStore has adopted regarding
     * case sensitivity, using gda_connection_quote_sql_identifier() or gda_meta_store_sql_identifier_quote().
     * 
     * see the <link linkend="information_schema:sql_identifiers">
     * meta data section about SQL identifiers</link> for more information, and the documentation about the
     * gda_sql_identifier_quote() function which will be most useful.
     * 
     * Note however that usually <emphasis>more</emphasis> information will be updated than strictly requested by
     * the `context` argument.
     * 
     * For more information, see the <link linkend="information_schema">Database structure</link> section, and
     * the <link linkend="howto-meta2">Update the meta data about a table</link> howto.
     * @param context description of which part of `cnc'`s associated #GdaMetaStore should be updated, or %NULL
     */
    update_meta_store(context: MetaContext | null): boolean
    /**
     * `col_names` and `values` must have length (&gt;= 1).
     * 
     * This is a convenience function, which creates an UPDATE statement and executes it using the values
     * provided. It internally relies on variables which makes it immune to SQL injection problems.
     * 
     * The equivalent SQL command is: UPDATE &lt;table&gt; SET &lt;column_name&gt; = &lt;new_value&gt; [,...] WHERE &lt;condition_column_name&gt; = &lt;condition_value&gt;.
     * @param table the table's name with the row's values to be updated
     * @param condition_column_name the name of the column to used in the WHERE condition clause
     * @param condition_value the `condition_column_type'`s GType
     * @param col_names a list of column names (as const gchar *)
     * @param values a list of values (as #GValue)
     */
    update_row_in_table_v(table: string, condition_column_name: string, condition_value: any, col_names: string[], values: any[]): boolean
    /**
     * Produces a fully quoted and escaped string from a GValue
     * @param from #GValue to convert from
     */
    value_to_sql_string(from: any): string

    // Own virtual methods of Gda-5.0.Gda.Connection

    vfunc_conn_closed(): void
    vfunc_conn_opened(): void
    vfunc_conn_to_close(): void
    vfunc_dsn_changed(): void
    vfunc_error(error: ConnectionEvent): void
    vfunc_transaction_status_changed(): void

    // Own signals of Gda-5.0.Gda.Connection

    connect(sigName: "conn-closed", callback: Connection_ConnClosedSignalCallback): number
    connect_after(sigName: "conn-closed", callback: Connection_ConnClosedSignalCallback): number
    emit(sigName: "conn-closed", ...args: any[]): void
    connect(sigName: "conn-opened", callback: Connection_ConnOpenedSignalCallback): number
    connect_after(sigName: "conn-opened", callback: Connection_ConnOpenedSignalCallback): number
    emit(sigName: "conn-opened", ...args: any[]): void
    connect(sigName: "conn-to-close", callback: Connection_ConnToCloseSignalCallback): number
    connect_after(sigName: "conn-to-close", callback: Connection_ConnToCloseSignalCallback): number
    emit(sigName: "conn-to-close", ...args: any[]): void
    connect(sigName: "dsn-changed", callback: Connection_DsnChangedSignalCallback): number
    connect_after(sigName: "dsn-changed", callback: Connection_DsnChangedSignalCallback): number
    emit(sigName: "dsn-changed", ...args: any[]): void
    connect(sigName: "error", callback: Connection_ErrorSignalCallback): number
    connect_after(sigName: "error", callback: Connection_ErrorSignalCallback): number
    emit(sigName: "error", event: ConnectionEvent, ...args: any[]): void
    connect(sigName: "transaction-status-changed", callback: Connection_TransactionStatusChangedSignalCallback): number
    connect_after(sigName: "transaction-status-changed", callback: Connection_TransactionStatusChangedSignalCallback): number
    emit(sigName: "transaction-status-changed", ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.Connection

    connect(sigName: "notify::auth-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auth-string", ...args: any[]): void
    connect(sigName: "notify::cnc-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cnc-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cnc-string", ...args: any[]): void
    connect(sigName: "notify::dsn", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dsn", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dsn", ...args: any[]): void
    connect(sigName: "notify::events-history-size", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events-history-size", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events-history-size", ...args: any[]): void
    connect(sigName: "notify::execution-slowdown", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-slowdown", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::execution-slowdown", ...args: any[]): void
    connect(sigName: "notify::execution-timer", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-timer", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::execution-timer", ...args: any[]): void
    connect(sigName: "notify::is-wrapper", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-wrapper", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-wrapper", ...args: any[]): void
    connect(sigName: "notify::meta-store", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-store", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::meta-store", ...args: any[]): void
    connect(sigName: "notify::monitor-wrapped-in-mainloop", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor-wrapped-in-mainloop", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monitor-wrapped-in-mainloop", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::thread-owner", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thread-owner", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::thread-owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Connection extends GObject.Object {

    // Own properties of Gda-5.0.Gda.Connection

    static name: string
    static $gtype: GObject.GType<Connection>

    // Constructors of Gda-5.0.Gda.Connection

    constructor(config?: Connection_ConstructProps) 
    /**
     * This function is similar to gda_connection_open_from_dsn(), except it does not actually open the
     * connection, you have to open it using gda_connection_open().
     * @constructor 
     * @param dsn data source name.
     * @param auth_string authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     */
    static new_from_dsn(dsn: string, auth_string: string | null, options: ConnectionOptions): Connection
    /**
     * This function is similar to gda_connection_open_from_string(), except it does not actually open the
     * connection, you have to open it using gda_connection_open().
     * @constructor 
     * @param provider_name provider ID to connect to, or %NULL
     * @param cnc_string connection string.
     * @param auth_string authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     */
    static new_from_string(provider_name: string | null, cnc_string: string, auth_string: string | null, options: ConnectionOptions): Connection
    _init(config?: Connection_ConstructProps): void
    static error_quark(): GLib.Quark
    /**
     * This function is the way of opening database connections with libgda, using a pre-defined data source (DSN),
     * see gda_config_define_dsn() for more information about how to define a DSN. If you don't want to define
     * a DSN, it is possible to use gda_connection_open_from_string() instead of this method.
     * 
     * The `dsn` string must have the following format: "[&lt;username&gt;[:&lt;password&gt;]`]`&lt;DSN&gt;"
     * (if &lt;username&gt; and/or &lt;password&gt; are provided, and `auth_string` is %NULL, then these username
     * and passwords will be used). Note that if provided, &lt;username&gt; and &lt;password&gt;
     * must be encoded as per RFC 1738, see gda_rfc1738_encode() for more information.
     * 
     * The `auth_string` can contain the authentication information for the server
     * to accept the connection. It is a string containing semi-colon seperated named value, usually
     * like "USERNAME=...;PASSWORD=..." where the ... are replaced by actual values. Note that each
     * name and value must be encoded as per RFC 1738, see gda_rfc1738_encode() for more information.
     * 
     * The actual named parameters required depend on the provider being used, and that list is available
     * as the <parameter>auth_params</parameter> member of the #GdaProviderInfo structure for each installed
     * provider (use gda_config_get_provider_info() to get it). Also one can use the "gda-sql-5.0 -L" command to
     * list the possible named parameters.
     * 
     * This method may fail with a GDA_CONNECTION_ERROR domain error (see the #GdaConnectionError error codes)
     * or a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * @param dsn data source name.
     * @param auth_string authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     */
    static open_from_dsn(dsn: string, auth_string: string | null, options: ConnectionOptions): Connection
    /**
     * Opens a connection given a provider ID and a connection string. This
     * allows applications to open connections without having to create
     * a data source (DSN) in the configuration. The format of `cnc_string` is
     * similar to PostgreSQL and MySQL connection strings. It is a semicolumn-separated
     * series of &lt;key&gt;=&lt;value&gt; pairs, where each key and value are encoded as per RFC 1738,
     * see gda_rfc1738_encode() for more information.
     * 
     * The possible keys depend on the provider, the "gda-sql-5.0 -L" command
     * can be used to list the actual keys for each installed database provider.
     * 
     * For example the connection string to open an SQLite connection to a database
     * file named "my_data.db" in the current directory would be <constant>"DB_DIR=.;DB_NAME=my_data"</constant>.
     * 
     * The `cnc_string` string must have the following format:
     * "[&lt;provider&gt;://][&lt;username&gt;[:&lt;password&gt;]`]`&lt;connection_params&gt;"
     * (if &lt;username&gt; and/or &lt;password&gt; are provided, and `auth_string` is %NULL, then these username
     * and passwords will be used, and if &lt;provider&gt; is provided and `provider_name` is %NULL then this
     * provider will be used). Note that if provided, &lt;username&gt;, &lt;password&gt; and  &lt;provider&gt;
     * must be encoded as per RFC 1738, see gda_rfc1738_encode() for more information.
     * 
     * The `auth_string` must contain the authentication information for the server
     * to accept the connection. It is a string containing semi-colon seperated named values, usually
     * like "USERNAME=...;PASSWORD=..." where the ... are replaced by actual values. Note that each
     * name and value must be encoded as per RFC 1738, see gda_rfc1738_encode() for more information.
     * 
     * The actual named parameters required depend on the provider being used, and that list is available
     * as the <parameter>auth_params</parameter> member of the #GdaProviderInfo structure for each installed
     * provider (use gda_config_get_provider_info() to get it). Similarly to the format of the connection
     * string, use the "gda-sql-5.0 -L" command to list the possible named parameters.
     * 
     * Additionally, it is possible to have the connection string
     * respect the "&lt;provider_name&gt;://&lt;real cnc string&gt;" format, in which case the provider name
     * and the real connection string will be extracted from that string (note that if `provider_name`
     * is not %NULL then it will still be used as the provider ID).\
     * 
     * This method may fail with a GDA_CONNECTION_ERROR domain error (see the #GdaConnectionError error codes)
     * or a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * @param provider_name provider ID to connect to, or %NULL
     * @param cnc_string connection string.
     * @param auth_string authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     */
    static open_from_string(provider_name: string | null, cnc_string: string, auth_string: string | null, options: ConnectionOptions): Connection
    /**
     * Opens an SQLite connection even if the SQLite provider is not installed,
     * to be used by database providers which need a temporary database to store
     * some information.
     * @param directory the directory the database file will be in, or %NULL for the default TMP directory
     * @param filename the database file name
     * @param auto_unlink if %TRUE, then the database file will be removed afterwards
     */
    static open_sqlite(directory: string | null, filename: string, auto_unlink: boolean): Connection
    /**
     * Extract the provider, connection parameters, username and password from `string`.
     * in `string,` the various parts are strings
     * which are expected to be encoded using an RFC 1738 compliant encoding. If they are specified,
     * the returned provider, username and password strings are correctly decoded.
     * 
     * For example all the following connection strings:
     * <programlisting><![CDATA[
     * PostgreSQL://meme:pass`DB_NAME=`mydb;HOST=server
     * PostgreSQL://meme`DB_NAME=`mydb;HOST=server;PASSWORD=pass
     * PostgreSQL://meme`DB_NAME=`mydb;PASSWORD=pass;HOST=server
     * PostgreSQL://meme`PASSWORD=`pass;DB_NAME=mydb;HOST=server
     * PostgreSQL://DB_NAME=mydb;HOST=server;USERNAME=meme;PASSWORD=pass
     * PostgreSQL://DB_NAME=mydb;HOST=server;PASSWORD=pass;USERNAME=meme
     * PostgreSQL://DB_NAME=mydb;USERNAME=meme;PASSWORD=pass;HOST=server
     * PostgreSQL://PASSWORD=pass;USERNAME=meme;DB_NAME=mydb;HOST=server
     * PostgreSQL://:pass`USERNAME=`meme;DB_NAME=mydb;HOST=server
     * PostgreSQL://:pass`DB_NAME=`mydb;HOST=server;USERNAME=meme]]></programlisting>
     * 
     * will return the following new strings (double quotes added here to delimit strings):
     * <programlisting><![CDATA[
     * out_cnc_params: "DB_NAME=mydb;HOST=server"
     * out_provider: "PostgreSQL"
     * out_username: "meme"
     * out_password: "pass"]]></programlisting>
     * @param string a string in the "[&lt;provider&gt;://][&lt;username&gt;[:&lt;password&gt;]`]`&lt;connection_params&gt;" form
     * @param out_cnc_params a place to store the new string containing the &lt;connection_params&gt; part
     * @param out_provider a place to store the new string containing the &lt;provider&gt; part
     * @param out_username a place to store the new string containing the &lt;username&gt; part
     * @param out_password a place to store the new string containing the &lt;password&gt; part, or %NULL
     */
    static string_split(string: string, out_cnc_params: string, out_provider: string, out_username: string, out_password: string | null): void
}

interface ConnectionEvent_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.ConnectionEvent

    type?: number | null
}

interface ConnectionEvent {

    // Own properties of Gda-5.0.Gda.ConnectionEvent

    type: number

    // Own fields of Gda-5.0.Gda.ConnectionEvent

    object: GObject.Object
    priv: ConnectionEventPrivate

    // Owm methods of Gda-5.0.Gda.ConnectionEvent

    get_code(): number
    /**
     * Get the description of the event. Note that is `event'`s type is GDA_CONNECTION_EVENT_COMMAND,
     * the the description is the SQL of the command.
     */
    get_description(): string
    /**
     * Get `event'`s severity (from a simple notice to a fatal event)
     */
    get_event_type(): ConnectionEventType
    /**
     * Retrieve the code associated to `event`.
     */
    get_gda_code(): ConnectionEventCode
    get_source(): string
    /**
     * Get the SQLSTATE value of `event`. Even though the SQLSTATE values are specified by ANSI SQL and ODBC,
     * consult each DBMS for the possible values. However, the "00000" (success) value means that there is no error,
     * and the "HY000" (general error) value means an error but no better error code available.
     */
    get_sqlstate(): string
    /**
     * Sets `event'`s code: the code is specific to the provider being used.
     * If you want to have a common understanding of the event codes, use
     * gda_connection_event_get_gda_code() instead.
     * 
     * This function should not be called directly
     * @param code a code.
     */
    set_code(code: number): void
    /**
     * Sets `event'`s `description`. This function should not be called directly.
     * @param description a description, or %NULL (to unset current description if any)
     */
    set_description(description: string | null): void
    /**
     * Sets `event'`s severity (from a simple notice to a fatal event)
     * This function should not be called directly.
     * @param type the severity of the event
     */
    set_event_type(type: ConnectionEventType): void
    /**
     * Sets `event'`s gda code: that code is standardized by the libgda
     * library. If you want to specify the corresponding provider specific code,
     * use gda_connection_event_get_code() or gda_connection_event_get_sqlstate() instead.
     * 
     * This function should not be called directly
     * @param code a code
     */
    set_gda_code(code: ConnectionEventCode): void
    /**
     * Sets `event'`s `source;` this function should not be called directly
     * @param source a source.
     */
    set_source(source: string): void
    /**
     * Changes the SQLSTATE code of `event,` this function should not be called directly
     * 
     * Sets `event'`s SQL state.
     * @param sqlstate SQL state.
     */
    set_sqlstate(sqlstate: string): void

    // Class property signals of Gda-5.0.Gda.ConnectionEvent

    connect(sigName: "notify::type", callback: (($obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConnectionEvent extends GObject.Object {

    // Own properties of Gda-5.0.Gda.ConnectionEvent

    static name: string
    static $gtype: GObject.GType<ConnectionEvent>

    // Constructors of Gda-5.0.Gda.ConnectionEvent

    constructor(config?: ConnectionEvent_ConstructProps) 
    _init(config?: ConnectionEvent_ConstructProps): void
}

interface DataAccessWrapper_ConstructProps extends DataModel_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.DataAccessWrapper

    model?: DataModel | null
}

interface DataAccessWrapper extends DataModel {

    // Own properties of Gda-5.0.Gda.DataAccessWrapper

    readonly model: DataModel

    // Own fields of Gda-5.0.Gda.DataAccessWrapper

    object: GObject.Object
    priv: DataAccessWrapperPrivate

    // Owm methods of Gda-5.0.Gda.DataAccessWrapper

    /**
     * `wrapper` will report as many columns as `mapping_size,` and for each value at position 'i' in `mapping,`
     * `wrapper` will report the 'i'th column, mapped to the wrapped data model column at position mapping[i].
     * For example if mapping is {3, 4, 0}, then `wrapper` will report 3 columns, respectively mapped to the 4th,
     * 5th and 1st columns of the wrapped data model (as column numbers start at 0).
     * 
     * If `mapping` is %NULL, then no mapping is done and `wrapper'`s columns will be the same as the wrapped
     * data model.
     * 
     * If a column in `mapping` does not exist in the wrapped data model, then it is simply ignored (no error
     * reported).
     * 
     * Please note that if `wrapper` has already been used and if the wrapped data model offers a cursor forward
     * access mode, then this method will return %FALSE and no action will be done.
     * 
     * If the mapping is applied, then any existing iterator will be invalid, and `wrapper` is reset as if it
     * had just been created.
     * @param mapping an array of #gint which represents the mapping between `wrapper'`s columns and the columns of the wrapped data model
     */
    set_mapping(mapping: number[] | null): boolean

    // Class property signals of Gda-5.0.Gda.DataAccessWrapper

    connect(sigName: "notify::model", callback: (($obj: DataAccessWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DataAccessWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataAccessWrapper extends GObject.Object {

    // Own properties of Gda-5.0.Gda.DataAccessWrapper

    static name: string
    static $gtype: GObject.GType<DataAccessWrapper>

    // Constructors of Gda-5.0.Gda.DataAccessWrapper

    constructor(config?: DataAccessWrapper_ConstructProps) 
    _init(config?: DataAccessWrapper_ConstructProps): void
    /**
     * Creates a new #GdaDataModel object which buffers the rows of `model`. This object is useful
     * only if `model` can only be accessed using cursor based method.
     * @param model a #GdaDataModel
     */
    static new(model: DataModel): DataModel
}

interface DataComparator_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.DataComparator

    new_model?: DataModel | null
    old_model?: DataModel | null
}

/**
 * Signal callback interface for `diff-computed`
 */
interface DataComparator_DiffComputedSignalCallback {
    ($obj: DataComparator, object: object | null): boolean
}

interface DataComparator {

    // Own properties of Gda-5.0.Gda.DataComparator

    new_model: DataModel
    old_model: DataModel

    // Own fields of Gda-5.0.Gda.DataComparator

    object: GObject.Object
    priv: DataComparatorPrivate

    // Owm methods of Gda-5.0.Gda.DataComparator

    /**
     * Actually computes the differences between the data models for which `comp` is defined.
     * 
     * For each difference computed, stored in a #GdaDiff structure, the "diff-computed" signal is emitted.
     * If one connects to this signal and returns FALSE in the signal handler, then computing differences will be
     * stopped and an error will be returned.
     */
    compute_diff(): boolean
    /**
     * Get a pointer to the #GdaDiff structure representing the difference which number is `pos`
     * @param pos the requested difference number (starting at 0)
     */
    get_diff(pos: number): Diff
    /**
     * Get the number of differences as computed by the last time gda_data_comparator_compute_diff() was called.
     */
    get_n_diffs(): number
    /**
     * Defines the columns which will be used as a key when searching data. This is not mandatory but
     * will speed things up as less data will be processed.
     * @param col_numbers an array of `nb_cols` values
     */
    set_key_columns(col_numbers: number[]): void

    // Own virtual methods of Gda-5.0.Gda.DataComparator

    vfunc_diff_computed(diff: Diff): boolean

    // Own signals of Gda-5.0.Gda.DataComparator

    connect(sigName: "diff-computed", callback: DataComparator_DiffComputedSignalCallback): number
    connect_after(sigName: "diff-computed", callback: DataComparator_DiffComputedSignalCallback): number
    emit(sigName: "diff-computed", object: object | null, ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.DataComparator

    connect(sigName: "notify::new-model", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::new-model", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::new-model", ...args: any[]): void
    connect(sigName: "notify::old-model", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old-model", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::old-model", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataComparator extends GObject.Object {

    // Own properties of Gda-5.0.Gda.DataComparator

    static name: string
    static $gtype: GObject.GType<DataComparator>

    // Constructors of Gda-5.0.Gda.DataComparator

    constructor(config?: DataComparator_ConstructProps) 
    /**
     * Creates a new comparator to compute the differences from `old_model` to `new_model:` if one applies
     * all the computed differences (as #GdaDiff structures) to `old_model,` the resulting data model
     * should have the same contents as `new_model`.
     * @constructor 
     * @param old_model Data model to which the modifications should be applied
     * @param new_model Target data model.
     */
    constructor(old_model: DataModel, new_model: DataModel) 
    /**
     * Creates a new comparator to compute the differences from `old_model` to `new_model:` if one applies
     * all the computed differences (as #GdaDiff structures) to `old_model,` the resulting data model
     * should have the same contents as `new_model`.
     * @constructor 
     * @param old_model Data model to which the modifications should be applied
     * @param new_model Target data model.
     */
    static new(old_model: DataModel, new_model: DataModel): DataComparator
    _init(config?: DataComparator_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface DataModelArray_ConstructProps extends DataModel_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.DataModelArray

    n_columns?: number | null
    read_only?: boolean | null
}

interface DataModelArray extends DataModel {

    // Own properties of Gda-5.0.Gda.DataModelArray

    n_columns: number
    read_only: boolean

    // Own fields of Gda-5.0.Gda.DataModelArray

    object: GObject.Object
    priv: DataModelArrayPrivate

    // Owm methods of Gda-5.0.Gda.DataModelArray

    /**
     * Frees all the rows in `model`.
     */
    clear(): void
    /**
     * Get a pointer to a row in `model`
     * @param row row number (starting from 0)
     */
    get_row(row: number): Row
    /**
     * Sets the number of columns for rows inserted in this model.
     * `cols` must be greated than or equal to 0.
     * 
     * Also clears `model'`s contents.
     * @param cols number of columns for rows this data model should use.
     */
    set_n_columns(cols: number): void

    // Class property signals of Gda-5.0.Gda.DataModelArray

    connect(sigName: "notify::n-columns", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-columns", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataModelArray extends GObject.Object {

    // Own properties of Gda-5.0.Gda.DataModelArray

    static name: string
    static $gtype: GObject.GType<DataModelArray>

    // Constructors of Gda-5.0.Gda.DataModelArray

    constructor(config?: DataModelArray_ConstructProps) 
    _init(config?: DataModelArray_ConstructProps): void
    /**
     * Creates a new #GdaDataModel object without initializing the column
     * types. Using gda_data_model_array_new_with_g_types() is usually better.
     * @param cols number of columns for rows in this data model.
     */
    static new(cols: number): DataModel
}

interface DataModelDir_ConstructProps extends DataModel_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.DataModelDir

    basedir?: string | null
}

interface DataModelDir extends DataModel {

    // Own properties of Gda-5.0.Gda.DataModelDir

    readonly basedir: string

    // Own fields of Gda-5.0.Gda.DataModelDir

    object: GObject.Object
    priv: DataModelDirPrivate

    // Owm methods of Gda-5.0.Gda.DataModelDir

    /**
     * Reset the list of errors which have occurred while using `model`
     */
    clean_errors(): void
    /**
     * Get the list of errors which have occurred while using `model`
     */
    get_errors(): GLib.Error[]

    // Class property signals of Gda-5.0.Gda.DataModelDir

    connect(sigName: "notify::basedir", callback: (($obj: DataModelDir, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::basedir", callback: (($obj: DataModelDir, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::basedir", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataModelDir extends GObject.Object {

    // Own properties of Gda-5.0.Gda.DataModelDir

    static name: string
    static $gtype: GObject.GType<DataModelDir>

    // Constructors of Gda-5.0.Gda.DataModelDir

    constructor(config?: DataModelDir_ConstructProps) 
    _init(config?: DataModelDir_ConstructProps): void
    /**
     * Creates a new #GdaDataModel object to list all the files starting from `basedir`
     * @param basedir a directory
     */
    static new(basedir: string): DataModel
}

interface DataModelImport_ConstructProps extends DataModel_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.DataModelImport

    /**
     * Data to import, as a string.
     */
    data_string?: string | null
    /**
     * Name of the file to import.
     */
    filename?: string | null
    /**
     * Data model options.
     */
    options?: Set | null
    /**
     * Defines if the data model will be accessed randomly or through a cursor. If set to %FALSE,
     * access will have to be done using a cursor.
     */
    random_access?: boolean | null
    /**
     * Defines the behaviour in case the imported data contains recoverable errors (usually too
     * many or too few data per row). If set to %TRUE, an error will be reported and the import
     * will stop, and if set to %FALSE, then the error will be reported but the import will not stop.
     */
    strict?: boolean | null
    /**
     * Data to import, as a pointer to an XML node (a #xmlNodePtr).
     */
    xml_node?: object | null
}

interface DataModelImport extends DataModel {

    // Own properties of Gda-5.0.Gda.DataModelImport

    /**
     * Data to import, as a string.
     */
    readonly data_string: string
    /**
     * Name of the file to import.
     */
    readonly filename: string
    /**
     * Data model options.
     */
    readonly options: Set
    /**
     * Defines if the data model will be accessed randomly or through a cursor. If set to %FALSE,
     * access will have to be done using a cursor.
     */
    readonly random_access: boolean
    /**
     * Defines the behaviour in case the imported data contains recoverable errors (usually too
     * many or too few data per row). If set to %TRUE, an error will be reported and the import
     * will stop, and if set to %FALSE, then the error will be reported but the import will not stop.
     */
    strict: boolean
    /**
     * Data to import, as a pointer to an XML node (a #xmlNodePtr).
     */
    readonly xml_node: object

    // Own fields of Gda-5.0.Gda.DataModelImport

    object: GObject.Object
    priv: DataModelImportPrivate

    // Owm methods of Gda-5.0.Gda.DataModelImport

    /**
     * Clears the history of errors `model` has to report
     */
    clean_errors(): void
    /**
     * Get the list of errors which `model` has to report. The returned list is a list of
     * #GError structures, and must not be modified
     */
    get_errors(): GLib.Error[]

    // Class property signals of Gda-5.0.Gda.DataModelImport

    connect(sigName: "notify::data-string", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-string", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-string", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::options", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::random-access", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::random-access", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::random-access", ...args: any[]): void
    connect(sigName: "notify::strict", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strict", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strict", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-node", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataModelImport extends GObject.Object {

    // Own properties of Gda-5.0.Gda.DataModelImport

    static name: string
    static $gtype: GObject.GType<DataModelImport>

    // Constructors of Gda-5.0.Gda.DataModelImport

    constructor(config?: DataModelImport_ConstructProps) 
    _init(config?: DataModelImport_ConstructProps): void
    /**
     * Creates a new #GdaDataModel object which contains the data stored within the `filename` file.
     * 
     * The options are the following ones:
     * <itemizedlist>
     *   <listitem><para>For the CSV format:
     *      <itemizedlist>
     *         <listitem><para>ENCODING (string): specifies the encoding of the data in the file</para></listitem>
     *         <listitem><para>SEPARATOR (string): specifies the CSV separator (comma as default)</para></listitem>
     *         <listitem><para>QUOTE (string): specifies the character used as quote (double quote as default)</para></listitem>
     *         <listitem><para>NAMES_ON_FIRST_LINE (boolean): consider that the first line of the file contains columns' titles (note that the TITLE_AS_FIRST_LINE option is also accepted as a synonym)</para></listitem>
     *         <listitem><para>G_TYPE_&lt;column number&gt; (GType): specifies the type of value expected in column &lt;column number&gt;</para></listitem>
     *      </itemizedlist>
     *   </para></listitem>
     *   <listitem><para>Other formats: no option</para></listitem>
     * </itemizedlist>
     * 
     * Note: after the creation, please use gda_data_model_import_get_errors() to check any error.
     * @param filename the file to import data from
     * @param random_access TRUE if random access will be required
     * @param options importing options
     */
    static new_file(filename: string, random_access: boolean, options: Set | null): DataModel
    /**
     * Creates a new #GdaDataModel object which contains the data stored in the `data` string.
     * 
     * Important note: the `data` string is not copied for memory efficiency reasons and should not
     * therefore be altered in any way as long as the returned data model exists.
     * @param data a string containing the data to import
     * @param random_access TRUE if random access will be required
     * @param options importing options, see gda_data_model_import_new_file() for more information
     */
    static new_mem(data: string, random_access: boolean, options: Set | null): DataModel
    /**
     * Creates a new #GdaDataModel and loads the data in `node`. The resulting data model
     * can be accessed in a random way.
     * @param node an XML node corresponding to a &lt;data-array&gt; tag
     */
    static new_xml_node(node: libxml2.NodePtr): DataModel
}

interface DataModelIter_ConstructProps extends Set_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.DataModelIter

    current_row?: number | null
    data_model?: DataModel | null
    forced_model?: DataModel | null
    update_model?: boolean | null
}

/**
 * Signal callback interface for `end-of-data`
 */
interface DataModelIter_EndOfDataSignalCallback {
    ($obj: DataModelIter): void
}

/**
 * Signal callback interface for `row-changed`
 */
interface DataModelIter_RowChangedSignalCallback {
    ($obj: DataModelIter, row: number): void
}

interface DataModelIter {

    // Own properties of Gda-5.0.Gda.DataModelIter

    current_row: number
    data_model: DataModel
    forced_model: DataModel
    update_model: boolean

    // Own fields of Gda-5.0.Gda.DataModelIter

    object: Set
    priv: DataModelIterPrivate

    // Owm methods of Gda-5.0.Gda.DataModelIter

    /**
     * Get the column number in the #GdaDataModel for which `iter` is an iterator as
     * represented by the `param` parameter
     * @param param a #GdaHolder object, listed in `iter`
     */
    get_column_for_param(param: Holder): number
    /**
     * Fetch a pointer to the #GdaHolder object which is synchronized with data at
     * column `col`
     * @param col the requested column
     */
    get_holder_for_field(col: number): Holder
    /**
     * Get the row which `iter` represents in the data model
     */
    get_row(): number
    /**
     * Get the value stored at the column `col` in `iter`. The returned value must not be modified.
     * @param col the requested column
     */
    get_value_at(col: number): any | null
    /**
     * Get the value stored at the column `col` in `iter`. The returned value must not be modified.
     * @param col the requested column
     */
    get_value_at_e(col: number): any | null
    /**
     * Get the value stored at the column `field_name` in `iter`
     * @param field_name the requested column name
     */
    get_value_for_field(field_name: string): any | null
    /**
     * Declare all the parameters in `iter` invalid, without modifying the
     * #GdaDataModel `iter` is for or changing the row it represents. This method
     * is for internal usage. Note that for gda_data_model_iter_is_valid() to return %FALSE,
     * it is also necessary to set the "current-row" property to -1.
     */
    invalidate_contents(): void
    /**
     * Tells if `iter` is a valid iterator (if it actually corresponds to a valid row in the model)
     */
    is_valid(): boolean
    /**
     * Moves `iter` one row further than where it already is
     * (synchronizes the values of the parameters in `iter` with the values at the new row).
     * 
     * If the iterator was on the data model's last row, then it can't be moved forward
     * anymore, and the returned value is %FALSE; note also that the "current-row" property
     * is set to -1 (which means that gda_data_model_iter_is_valid() would return %FALSE)
     * 
     * This function can return %FALSE if it was not allowed to be moved (as it emits the
     * "validate-set" signal before being moved).
     * 
     * When this function returns %TRUE, then `iter` has actually been moved to the next row,
     * but some values may not have been read correctly in the row, in which case the
     * correcsponding #GdaHolder will be left invalid.
     */
    move_next(): boolean
    /**
     * Moves `iter` one row before where it already is (synchronizes the values of the parameters in `iter`
     * with the values at the new row).
     * 
     * If the iterator was on the data model's first row, then it can't be moved backwards
     * anymore, and the returned value is %FALSE; note also that the "current-row" property
     * is set to -1 (which means that gda_data_model_iter_is_valid() would return %FALSE).
     * 
     * This function can return %FALSE if it was not allowed to be moved (as it emits the
     * "validate-set" signal before being moved).
     * 
     * When this function returns %TRUE, then `iter` has actually been moved to the next row,
     * but some values may not have been read correctly in the row, in which case the
     * correcsponding #GdaHolder will be left invalid.
     */
    move_prev(): boolean
    /**
     * Synchronizes the values of the parameters in `iter` with the values at the `row` row.
     * 
     * If `row` is not a valid row, then the returned value is %FALSE, and the "current-row"
     * property is set to -1 (which means that gda_data_model_iter_is_valid() would return %FALSE),
     * with the exception that if `row` is -1, then the returned value is %TRUE.
     * 
     * This function can return %FALSE if it was not allowed to be moved (as it emits the
     * "validate-set" signal before being moved).
     * 
     * When this function returns %TRUE, then `iter` has actually been moved to the next row,
     * but some values may not have been read correctly in the row, in which case the
     * correcsponding #GdaHolder will be left invalid.
     * @param row the row to set `iter` to
     */
    move_to_row(row: number): boolean
    /**
     * Sets a value in `iter,` at the column specified by `col`
     * @param col the column number
     * @param value a #GValue (not %NULL)
     */
    set_value_at(col: number, value: any): boolean

    // Own virtual methods of Gda-5.0.Gda.DataModelIter

    vfunc_end_of_data(): void
    vfunc_row_changed(row: number): void

    // Own signals of Gda-5.0.Gda.DataModelIter

    connect(sigName: "end-of-data", callback: DataModelIter_EndOfDataSignalCallback): number
    connect_after(sigName: "end-of-data", callback: DataModelIter_EndOfDataSignalCallback): number
    emit(sigName: "end-of-data", ...args: any[]): void
    connect(sigName: "row-changed", callback: DataModelIter_RowChangedSignalCallback): number
    connect_after(sigName: "row-changed", callback: DataModelIter_RowChangedSignalCallback): number
    emit(sigName: "row-changed", row: number, ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.DataModelIter

    connect(sigName: "notify::current-row", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-row", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-row", ...args: any[]): void
    connect(sigName: "notify::data-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-model", ...args: any[]): void
    connect(sigName: "notify::forced-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forced-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::forced-model", ...args: any[]): void
    connect(sigName: "notify::update-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-model", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::validate-changes", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::validate-changes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataModelIter extends Set {

    // Own properties of Gda-5.0.Gda.DataModelIter

    static name: string
    static $gtype: GObject.GType<DataModelIter>

    // Constructors of Gda-5.0.Gda.DataModelIter

    constructor(config?: DataModelIter_ConstructProps) 
    _init(config?: DataModelIter_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface DataModelLdap_ConstructProps extends DataModel_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.DataModelLdap

    attributes?: string | null
    base?: string | null
    cnc?: Connection | null
    filter?: string | null
    scope?: number | null
}

interface DataModelLdap extends DataModel {

    // Own properties of Gda-5.0.Gda.DataModelLdap

    readonly attributes: string
    readonly base: string
    readonly cnc: Connection
    readonly filter: string
    readonly scope: number

    // Own fields of Gda-5.0.Gda.DataModelLdap

    object: GObject.Object
    priv: DataModelLdapPrivate

    // Class property signals of Gda-5.0.Gda.DataModelLdap

    connect(sigName: "notify::attributes", callback: (($obj: DataModelLdap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DataModelLdap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::base", callback: (($obj: DataModelLdap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base", callback: (($obj: DataModelLdap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::cnc", callback: (($obj: DataModelLdap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cnc", callback: (($obj: DataModelLdap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cnc", ...args: any[]): void
    connect(sigName: "notify::filter", callback: (($obj: DataModelLdap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: DataModelLdap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::scope", callback: (($obj: DataModelLdap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope", callback: (($obj: DataModelLdap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataModelLdap extends GObject.Object {

    // Own properties of Gda-5.0.Gda.DataModelLdap

    static name: string
    static $gtype: GObject.GType<DataModelLdap>

    // Constructors of Gda-5.0.Gda.DataModelLdap

    constructor(config?: DataModelLdap_ConstructProps) 
    /**
     * Creates a new #GdaDataModel object to extract some LDAP contents. The returned data model will
     * contain one row for each LDAP entry returned by the search, and will
     * always return the DN (Distinguished Name) of the LDAP entry as first column. Other atttibutes
     * may be mapped to other columns, see the `attributes` argument.
     * 
     * Note that the actual LDAP search command is not executed until necessary (when using the returned
     * data model).
     * 
     * The `base_dn` is the point in the LDAP's DIT (Directory Information Tree) from where the search will
     * occur, for example "dc=gda,dc=org". A %NULL value indicates that the starting point for the
     * search will be the one specified when opening the LDAP connection.
     * 
     * The `filter` argument is a valid LDAP filter string, for example "(uidNumber=1001)". If %NULL, then
     * a default search filter of "(objectClass=*)" will be used.
     * 
     * `attributes` specifies which LDAP attributes the search must return. It is a comma separated list
     * of attribute names, for example "uidNumber, mail, uid, jpegPhoto" (spaces between attribute names
     * are ignored). If %NULL, then no attribute will be fetched. See gda_ldap_connection_declare_table()
     * for more information about this argument.
     * 
     * `scope` is the scope of search specified when the LDAP search is actually executed.
     * 
     * In case of multi valued attributes, an error will be returned when trying to read the attribute:
     * gda_data_model_iter_get_value_at() will return %NULL when using an iterator.
     * 
     * This is a convenience function intended to be used by bindings.
     * @constructor 
     * @param cnc an LDAP opened connection (must be a balid #GdaLdapConnection)
     * @param base_dn the base DN to search on, or %NULL
     * @param filter an LDAP filter, for example "(objectClass=*)"
     * @param attributes the list (CSV format) of attributes to fetch, each in the format &lt;attname&gt;[::&lt;GType&gt;]
     * @param scope the search scope
     */
    static new_with_config(cnc: Connection, base_dn: string | null, filter: string | null, attributes: string | null, scope: LdapSearchScope): DataModelLdap
    _init(config?: DataModelLdap_ConstructProps): void
    /**
     * Creates a new #GdaDataModel object to extract some LDAP contents. The returned data model will
     * contain one row for each LDAP entry returned by the search, and will
     * always return the DN (Distinguished Name) of the LDAP entry as first column. Other atttibutes
     * may be mapped to other columns, see the `attributes` argument.
     * 
     * Note that the actual LDAP search command is not executed until necessary (when using the returned
     * data model).
     * 
     * The `base_dn` is the point in the LDAP's DIT (Directory Information Tree) from where the search will
     * occur, for example "dc=gda,dc=org". A %NULL value indicates that the starting point for the
     * search will be the one specified when opening the LDAP connection.
     * 
     * The `filter` argument is a valid LDAP filter string, for example "(uidNumber=1001)". If %NULL, then
     * a default search filter of "(objectClass=*)" will be used.
     * 
     * `attributes` specifies which LDAP attributes the search must return. It is a comma separated list
     * of attribute names, for example "uidNumber, mail, uid, jpegPhoto" (spaces between attribute names
     * are ignored). If %NULL, then no attribute will be fetched. See gda_ldap_connection_declare_table()
     * for more information about this argument.
     * 
     * `scope` is the scope of search specified when the LDAP search is actually executed.
     * 
     * In case of multi valued attributes, an error will be returned when trying to read the attribute:
     * gda_data_model_iter_get_value_at() will return %NULL when using an iterator.
     * @param cnc an LDAP opened connection (must be a balid #GdaLdapConnection)
     * @param base_dn the base DN to search on, or %NULL
     * @param filter an LDAP filter, for example "(objectClass=*)"
     * @param attributes the list (CSV format) of attributes to fetch, each in the format &lt;attname&gt;[::&lt;GType&gt;]
     * @param scope the search scope
     */
    static new(cnc: Connection, base_dn: string | null, filter: string | null, attributes: string | null, scope: LdapSearchScope): DataModel
    /**
     * Computes the #GdaColumn of the data model which would be created using `attributes` when calling
     * gda_data_model_ldap_new().
     * @param cnc a #GdaConnection
     * @param attributes a string describing which LDAP attributes to retreive, or %NULL
     */
    static compute_columns(cnc: Connection, attributes: string | null): Column[]
}

interface DataPivot_ConstructProps extends DataModel_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.DataPivot

    model?: DataModel | null
}

interface DataPivot extends DataModel {

    // Own properties of Gda-5.0.Gda.DataPivot

    model: DataModel

    // Own fields of Gda-5.0.Gda.DataPivot

    object: GObject.Object
    priv: DataPivotPrivate

    // Owm methods of Gda-5.0.Gda.DataPivot

    /**
     * Specifies that `field` has to be included in the analysis.
     * `field` is a field specification with the following accepted syntaxes:
     * <itemizedlist>
     *   <listitem><para>a column name in the source data model (see <link linkend="gda-data-model-get-column-index">gda_data_model_get_column_index()</link>); or</para></listitem>
     *   <listitem><para>an SQL expression involving a column name in the source data model, for examples:
     *   <programlisting>
     * price
     * firstname || ' ' || lastname
     * nb BETWEEN 5 AND 10</programlisting>
     * </para></listitem>
     * </itemizedlist>
     * 
     * It is also possible to specify several fields to be added, while separating them by a comma (in effect
     * still forming a valid SQL syntax).
     * @param aggregate_type the type of aggregate operation to perform
     * @param field the field description, see below
     * @param alias the field alias, or %NULL
     */
    add_data(aggregate_type: DataPivotAggregate, field: string, alias: string | null): boolean
    /**
     * Specifies that `field` has to be included in the analysis.
     * `field` is a field specification with the following accepted syntaxes:
     * <itemizedlist>
     *   <listitem><para>a column name in the source data model (see <link linkend="gda-data-model-get-column-index">gda_data_model_get_column_index()</link>); or</para></listitem>
     *   <listitem><para>an SQL expression involving a column name in the source data model, for example:
     *   <programlisting>
     * price
     * firstname || ' ' || lastname
     * nb BETWEEN 5 AND 10</programlisting>
     * </para></listitem>
     * </itemizedlist>
     * 
     * It is also possible to specify several fields to be added, while separating them by a comma (in effect
     * still forming a valid SQL syntax).
     * @param field_type the type of field to add
     * @param field the field description, see below
     * @param alias the field alias, or %NULL
     */
    add_field(field_type: DataPivotFieldType, field: string, alias: string | null): boolean
    /**
     * Acutally populates `pivot` by analysing the data from the provided data model.
     */
    populate(): boolean

    // Class property signals of Gda-5.0.Gda.DataPivot

    connect(sigName: "notify::model", callback: (($obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataPivot extends GObject.Object {

    // Own properties of Gda-5.0.Gda.DataPivot

    static name: string
    static $gtype: GObject.GType<DataPivot>

    // Constructors of Gda-5.0.Gda.DataPivot

    constructor(config?: DataPivot_ConstructProps) 
    _init(config?: DataPivot_ConstructProps): void
    /**
     * Creates a new #GdaDataModel which will contain analysed data from `model`.
     * @param model a #GdaDataModel to analyse data from, or %NULL
     */
    static new(model: DataModel | null): DataModel
    static error_quark(): GLib.Quark
}

interface DataProxy_ConstructProps extends DataModel_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.DataProxy

    /**
     * Defines how changes kept in the data proxy are handled when the proxied data model
     * is changed (using the "model" property). The default is to silently discard all the
     * changes, but if this property is set to %TRUE, then the changes are cached.
     * 
     * If set to %TRUE, each cached change will be re-applied to a newly set proxied data model if
     * the change's number of columns match the proxied data model's number of columns and based on:
     * <itemizedlist>
     *   <listitem><para>the contents of the proxied data model's modified row for updates and deletes</para></listitem>
     *   <listitem><para>the inserts are always kept</para></listitem>
     * </itemizedlist>
     */
    cache_changes?: boolean | null
    defer_sync?: boolean | null
    model?: DataModel | null
    prepend_null_entry?: boolean | null
    sample_size?: number | null
}

/**
 * Signal callback interface for `filter-changed`
 */
interface DataProxy_FilterChangedSignalCallback {
    ($obj: DataProxy): void
}

/**
 * Signal callback interface for `row-changes-applied`
 */
interface DataProxy_RowChangesAppliedSignalCallback {
    ($obj: DataProxy, row: number, proxied_row: number): void
}

/**
 * Signal callback interface for `row-delete-changed`
 */
interface DataProxy_RowDeleteChangedSignalCallback {
    ($obj: DataProxy, row: number, to_be_deleted: boolean): void
}

/**
 * Signal callback interface for `sample-changed`
 */
interface DataProxy_SampleChangedSignalCallback {
    ($obj: DataProxy, sample_start: number, sample_end: number): void
}

/**
 * Signal callback interface for `sample-size-changed`
 */
interface DataProxy_SampleSizeChangedSignalCallback {
    ($obj: DataProxy, sample_size: number): void
}

/**
 * Signal callback interface for `validate-row-changes`
 */
interface DataProxy_ValidateRowChangesSignalCallback {
    ($obj: DataProxy, row: number, proxied_row: number): GLib.Error
}

interface DataProxy extends DataModel {

    // Own properties of Gda-5.0.Gda.DataProxy

    /**
     * Defines how changes kept in the data proxy are handled when the proxied data model
     * is changed (using the "model" property). The default is to silently discard all the
     * changes, but if this property is set to %TRUE, then the changes are cached.
     * 
     * If set to %TRUE, each cached change will be re-applied to a newly set proxied data model if
     * the change's number of columns match the proxied data model's number of columns and based on:
     * <itemizedlist>
     *   <listitem><para>the contents of the proxied data model's modified row for updates and deletes</para></listitem>
     *   <listitem><para>the inserts are always kept</para></listitem>
     * </itemizedlist>
     */
    cache_changes: boolean
    defer_sync: boolean
    model: DataModel
    prepend_null_entry: boolean
    sample_size: number

    // Own fields of Gda-5.0.Gda.DataProxy

    object: GObject.Object
    priv: DataProxyPrivate

    // Owm methods of Gda-5.0.Gda.DataProxy

    /**
     * Alters the attributes of the value stored at (proxy_row, col) in `proxy`. the `alter_flags`
     * can only contain the GDA_VALUE_ATTR_IS_NULL, GDA_VALUE_ATTR_IS_DEFAULT and GDA_VALUE_ATTR_IS_UNCHANGED
     * flags (other flags are ignored).
     * @param proxy_row A proxy row number
     * @param col a valid column number
     * @param alter_flags flags to alter the attributes
     */
    alter_value_attributes(proxy_row: number, col: number, alter_flags: ValueAttribute): void
    /**
     * Apply all the changes stored in the proxy to the proxied data model. The changes are done row
     * after row, and if an error
     * occurs, then it is possible that not all the changes to all the rows have been applied.
     */
    apply_all_changes(): boolean
    /**
     * Commits the modified data in the proxy back into the #GdaDataModel.
     * @param proxy_row the row number to commit
     */
    apply_row_changes(proxy_row: number): boolean
    /**
     * Cancel all the changes stored in the proxy (the `proxy` will be reset to its state
     * as it was just after creation). Note that if there are some cached changes (i.e. not applied
     * to the current proxied data model), then these cached changes are not cleared (set the "cache-changes"
     * property to %FALSE for this).
     */
    cancel_all_changes(): boolean
    /**
     * Resets data at the corresponding row and column. If `proxy_row` corresponds to a new row, then
     * that new row is deleted from `proxy`.
     * @param proxy_row the row to cancel changes
     * @param col the column to cancel changes, or less than 0 to cancel any change on the `row` row
     */
    cancel_row_changes(proxy_row: number, col: number): void
    /**
     * Marks the row `proxy_row` to be deleted
     * @param proxy_row A proxy row number
     */
    delete(proxy_row: number): void
    /**
     * Get the current filter expression used by `proxy`.
     */
    get_filter_expr(): string
    /**
     * Get the total number of filtered rows in `proxy` if a filter has been applied. As new rows
     * (rows added to the proxy and not yet added to the proxied data model) and rows to remove
     * (rows marked for removal but not yet removed from the proxied data model) are also filtered,
     * the returned number also contains references to new rows and rows to be removed.
     */
    get_filtered_n_rows(): number
    /**
     * Get the number of rows which have been modified in the proxy (the sum of rows existing in
     * the proxied data model which have been modified, and new rows).
     */
    get_n_modified_rows(): number
    /**
     * Get the number of rows which have been added to `proxy` and which are not part of
     * the proxied data model.
     */
    get_n_new_rows(): number
    /**
     * Fetch the #GdaDataModel which `proxy` does proxy
     */
    get_proxied_model(): DataModel
    /**
     * Get the number of columns in the proxied data model
     */
    get_proxied_model_n_cols(): number
    /**
     * Get the number of rows in the proxied data model
     */
    get_proxied_model_n_rows(): number
    /**
     * Get the `proxy'`s proxied model row corresponding to `proxy_row`
     * @param proxy_row A proxy row number
     */
    get_proxied_model_row(proxy_row: number): number
    /**
     * Get the number of the last row to be available in `proxy` (in reference to the proxied data model)
     */
    get_sample_end(): number
    /**
     * Get the size of each chunk of data displayed at a time.
     */
    get_sample_size(): number
    /**
     * Get the number of the first row to be available in `proxy` (in reference to the proxied data model)
     */
    get_sample_start(): number
    /**
     * Get the attributes of the value stored at (proxy_row, col) in `proxy,` which
     * is an ORed value of #GdaValueAttribute flags
     * @param proxy_row a proxy row
     * @param col a valid proxy column
     */
    get_value_attributes(proxy_row: number, col: number): ValueAttribute
    /**
     * Retrieve a whole list of values from the `proxy` data model. This function
     * calls gda_data_proxy_get_value()
     * for each column index specified in `cols_index,` and generates a #GSList on the way.
     * @param proxy_row a proxy row
     * @param cols_index array containing the columns for which the values are requested
     */
    get_values(proxy_row: number, cols_index: number[]): any[]
    /**
     * Tells if `proxy` contains any modifications not applied to the proxied data model.
     */
    has_changed(): boolean
    is_read_only(): boolean
    /**
     * Tells if the row number `proxy_row` has changed
     * @param proxy_row A proxy row number
     */
    row_has_changed(proxy_row: number): boolean
    /**
     * Tells if the row number `proxy_row` is marked to be deleted.
     * @param proxy_row A proxy row number
     */
    row_is_deleted(proxy_row: number): boolean
    /**
     * Tells if the row number `proxy_row` is a row which has been inserted in `proxy`
     * (and is thus not in the proxied data model).
     * @param proxy_row A proxy row number
     */
    row_is_inserted(proxy_row: number): boolean
    /**
     * Sets a filter among the rows presented by `proxy`. The filter is defined by a filter expression
     * which can be any SQL valid expression using `proxy'`s columns. For instance if `proxy` has the "id" and
     * "name" columns, then a filter can be "length(name) < 5" to filter only the rows where the length of the
     * name is strictly inferior to 5, or "id >= 1000 and id < 2000 order by name limit 50" to filter only the rows where the id
     * is between 1000 and 2000, ordered by name and limited to 50 rows.
     * 
     * Note about column names: real column names can be used (double quoted if necessary), but columns can also be named
     * "_&lt;column number&gt;" with column numbers starting at 1.
     * 
     * Note that any previous filter expression is replaced with the new `filter_expr` if no error occurs
     * (if an error occurs, then any previous filter is left unchanged).
     * @param filter_expr an SQL based expression which will filter the contents of `proxy,` or %NULL to remove any previous filter
     */
    set_filter_expr(filter_expr: string | null): boolean
    /**
     * Orders by the `col` column
     * @param col the column number to order from
     */
    set_ordering_column(col: number): boolean
    /**
     * Sets the size of each chunk of data to display: the maximum number of rows which
     * can be "displayed" at a time (the maximum number of rows which `proxy` pretends to have).
     * The default value is arbitrary 300 as it is big enough to
     * be able to display quite a lot of data, but small enough to avoid too much data
     * displayed at the same time.
     * 
     * Note: the rows which have been added but not yet committed will always be displayed
     * regardless of the current chunk of data, and the modified rows which are not visible
     * when the displayed chunk of data changes are still held as modified rows.
     * 
     * To remove the chunking of the data to display, simply pass `sample_size` the %0 value.
     * @param sample_size the requested size of a chunk, or 0
     */
    set_sample_size(sample_size: number): void
    /**
     * Sets the number of the first row to be available in `proxy` (in reference to the proxied data model)
     * @param sample_start the number of the first row to be displayed
     */
    set_sample_start(sample_start: number): void
    /**
     * Remove the "to be deleted" mark at the row `proxy_row,` if it existed.
     * @param proxy_row A proxy row number
     */
    undelete(proxy_row: number): void

    // Own virtual methods of Gda-5.0.Gda.DataProxy

    vfunc_filter_changed(): void
    vfunc_row_changes_applied(row: number, proxied_row: number): void
    vfunc_row_delete_changed(row: number, to_be_deleted: boolean): void
    vfunc_sample_changed(sample_start: number, sample_end: number): void
    vfunc_sample_size_changed(sample_size: number): void
    vfunc_validate_row_changes(row: number, proxied_row: number): GLib.Error

    // Own signals of Gda-5.0.Gda.DataProxy

    connect(sigName: "filter-changed", callback: DataProxy_FilterChangedSignalCallback): number
    connect_after(sigName: "filter-changed", callback: DataProxy_FilterChangedSignalCallback): number
    emit(sigName: "filter-changed", ...args: any[]): void
    connect(sigName: "row-changes-applied", callback: DataProxy_RowChangesAppliedSignalCallback): number
    connect_after(sigName: "row-changes-applied", callback: DataProxy_RowChangesAppliedSignalCallback): number
    emit(sigName: "row-changes-applied", row: number, proxied_row: number, ...args: any[]): void
    connect(sigName: "row-delete-changed", callback: DataProxy_RowDeleteChangedSignalCallback): number
    connect_after(sigName: "row-delete-changed", callback: DataProxy_RowDeleteChangedSignalCallback): number
    emit(sigName: "row-delete-changed", row: number, to_be_deleted: boolean, ...args: any[]): void
    connect(sigName: "sample-changed", callback: DataProxy_SampleChangedSignalCallback): number
    connect_after(sigName: "sample-changed", callback: DataProxy_SampleChangedSignalCallback): number
    emit(sigName: "sample-changed", sample_start: number, sample_end: number, ...args: any[]): void
    connect(sigName: "sample-size-changed", callback: DataProxy_SampleSizeChangedSignalCallback): number
    connect_after(sigName: "sample-size-changed", callback: DataProxy_SampleSizeChangedSignalCallback): number
    emit(sigName: "sample-size-changed", sample_size: number, ...args: any[]): void
    connect(sigName: "validate-row-changes", callback: DataProxy_ValidateRowChangesSignalCallback): number
    connect_after(sigName: "validate-row-changes", callback: DataProxy_ValidateRowChangesSignalCallback): number
    emit(sigName: "validate-row-changes", row: number, proxied_row: number, ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.DataProxy

    connect(sigName: "notify::cache-changes", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-changes", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-changes", ...args: any[]): void
    connect(sigName: "notify::defer-sync", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::defer-sync", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::defer-sync", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::prepend-null-entry", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prepend-null-entry", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prepend-null-entry", ...args: any[]): void
    connect(sigName: "notify::sample-size", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-size", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sample-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataProxy extends GObject.Object {

    // Own properties of Gda-5.0.Gda.DataProxy

    static name: string
    static $gtype: GObject.GType<DataProxy>

    // Constructors of Gda-5.0.Gda.DataProxy

    constructor(config?: DataProxy_ConstructProps) 
    /**
     * Creates a new proxy for `model`. For bindings use `gda_data_proxy_new_with_data_model`.
     * @constructor 
     * @param model Data model to be proxied
     */
    constructor(model: DataModel) 
    /**
     * Creates a new proxy for `model`. For bindings use `gda_data_proxy_new_with_data_model`.
     * @constructor 
     * @param model Data model to be proxied
     */
    static new(model: DataModel): DataProxy
    /**
     * Creates a new proxy for `model`. This is the preferred method to create
     * #GdaDataProxy objects by bindings.
     * @constructor 
     * @param model Data model to be proxied
     */
    static new_with_data_model(model: DataModel): DataProxy
    _init(config?: DataProxy_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface DataSelect_ConstructProps extends DataModel_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.DataSelect

    auto_reset?: boolean | null
    connection?: Connection | null
    delete_stmt?: Statement | null
    exec_params?: Set | null
    /**
     * This property stores the execution delay which has been necessary to obtain the data
     */
    execution_delay?: number | null
    insert_stmt?: Statement | null
    model_usage?: number | null
    prepared_stmt?: PStmt | null
    store_all_rows?: boolean | null
    update_stmt?: Statement | null
}

interface DataSelect extends DataModel {

    // Own properties of Gda-5.0.Gda.DataSelect

    auto_reset: boolean
    readonly connection: Connection
    delete_stmt: Statement
    readonly exec_params: Set
    /**
     * This property stores the execution delay which has been necessary to obtain the data
     */
    execution_delay: number
    insert_stmt: Statement
    readonly model_usage: number
    prepared_stmt: PStmt
    readonly select_stmt: Statement
    store_all_rows: boolean
    update_stmt: Statement

    // Own fields of Gda-5.0.Gda.DataSelect

    object: GObject.Object
    priv: DataSelectPrivate
    prep_stmt: PStmt
    nb_stored_rows: number
    advertized_nrows: number

    // Owm methods of Gda-5.0.Gda.DataSelect

    /**
     * Computes correct attributes for each of `model'`s columns, which includes the "NOT NULL" attribute, the
     * default value, the precision and scale for numeric values.
     */
    compute_columns_attributes(): boolean
    /**
     * Makes `model` try to compute INSERT, UPDATE and DELETE statements to be used when modifying `model'`s contents.
     * Note: any modification statement set using gda_data_select_set_modification_statement() will first be unset
     * 
     * This function is similar to calling gda_data_select_compute_modification_statements_ext() with
     * `cond_type` set to %GDA_DATA_SELECT_COND_PK
     */
    compute_modification_statements(): boolean
    /**
     * Makes `model` try to compute INSERT, UPDATE and DELETE statements to be used when modifying `model'`s contents.
     * Note: any modification statement set using gda_data_select_set_modification_statement() will first be unset
     * @param cond_type the type of condition for the modifications where one row only should be identified
     */
    compute_modification_statements_ext(cond_type: DataSelectConditionType): boolean
    /**
     * Offers the same features as gda_data_select_set_row_selection_condition() but the expression
     * is computed from the meta data associated to the connection being used when `model` was created.
     * 
     * NOTE1: make sure the meta data associated to the connection is up to date before using this
     * method, see gda_connection_update_meta_store().
     * 
     * NOTE2: if the SELECT statement from which `model` has been created uses more than one table, or
     * if the table used does not have any primary key, then this method will fail
     */
    compute_row_selection_condition(): boolean
    /**
     * Get a pointer to the #GdaConnection object which was used when `model` was created
     * (and which may be used internally by `model)`.
     */
    get_connection(): Connection
    /**
     * Use this method to make sure all the data contained in the data model are stored on the client
     * side (and that no subsquent call to the server will be necessary to access that data), at the cost of
     * a higher memory consumption.
     * 
     * This method is useful in the following situations:
     * <itemizedlist>
     *   <listitem><para>You need to disconnect from the server and continue to use the data in the data model</para></listitem>
     *   <listitem><para>You need to make sure the data in the data model can be used even though the connection to the server may be used for other purposes (for example executing other queries)</para></listitem>
     * </itemizedlist>
     * 
     * Note that this method will fail if:
     * <itemizedlist>
     *   <listitem><para>the data model contains any blobs (because blobs reading requires acces to the server);
     *     binary values are Ok, though.</para></listitem>
     *   <listitem><para>the data model has been modified since it was created</para></listitem>
     * </itemizedlist>
     */
    prepare_for_offline(): boolean
    /**
     * Requests that `model` be re-run to have an updated result. If an error occurs,
     * then `model` will not be changed.
     */
    rerun(): boolean
    /**
     * Informs `model` that it should allow modifications to the data in some columns and some rows
     * using `mod_stmt` to propagate those modifications into the database.
     * 
     * If `mod_stmt` is:
     * <itemizedlist>
     *  <listitem><para>an UPDATE statement, then all the rows in `model` will be writable</para></listitem>
     *  <listitem><para>a DELETE statement, then it will be possible to delete rows in `model<`/para></listitem>
     *  <listitem><para>in INSERT statement, then it will be possible to add some rows to `model<`/para></listitem>
     *  <listitem><para>any other statement, then this method will return an error</para></listitem>
     * </itemizedlist>
     * 
     * This method can be called several times to specify different types of modification statements.
     * 
     * Each modification statement will be executed when one or more values are modified in the data model;
     * each statement should then include variables which will be set to either the old value or the
     * new value of a column at the specified modified row (but can also contain other variables). Each variable
     * named as "+&lt;number&gt;" will be mapped to the new value of the number'th column (starting at 0), and
     * each variable named as "-&lt;number&gt;" will be mapped to the old value of the number'th column.
     * 
     * Examples of the SQL equivalent of each statement are (for example if "mytable" has the "id" field as
     * primary key, and if that field is auto incremented and if the data model is the result of
     * executing "<![CDATA[SELECT * from mytable]]>").
     * 
     * <itemizedlist>
     *  <listitem><para>"<![CDATA[INSERT INTO mytable (name) VALUES (##+1::string)]]>": the column ID can not be set
     *   for new rows</para></listitem>
     *  <listitem><para>"<![CDATA[DELETE FROM mytable WHERE id=##-0::int]]>"</para></listitem>
     *  <listitem><para>"<![CDATA[UPDATE mytable SET name=##+1::string WHERE id=##-0::int]]>": the column ID cannot be
     *   modified</para></listitem>
     * </itemizedlist>
     * 
     * Also see the gda_data_select_set_row_selection_condition_sql() for more information about the WHERE
     * part of the UPDATE and DELETE statement types.
     * 
     * If `mod_stmt` is an UPDATE or DELETE statement then it should have a WHERE part which identifies
     * a unique row in `model` (please note that this property can't be checked but may result
     * in `model` behaving in an unpredictable way).
     * 
     * NOTE1: However, if the gda_data_select_set_row_selection_condition()
     * or gda_data_select_set_row_selection_condition_sql() have been successfully be called before, the WHERE
     * part of `mod_stmt` <emphasis>WILL</emphasis> be modified to use the row selection condition specified through one of
     * these methods (please not that it is then possible to avoid specifying a WHERE part in `mod_stmt` then).
     * 
     * NOTE2: if gda_data_select_set_row_selection_condition()
     * or gda_data_select_set_row_selection_condition_sql() have not yet been successfully be called before, then
     * the WHERE part of `mod_stmt` will be used as if one of these functions had been called.
     * @param mod_stmt a #GdaStatement (INSERT, UPDATE or DELETE)
     */
    set_modification_statement(mod_stmt: Statement): boolean
    /**
     * Offers the same feature as gda_data_select_set_modification_statement() but using an SQL statement.
     * @param sql an SQL text
     */
    set_modification_statement_sql(sql: string): boolean
    /**
     * Specifies the SQL condition corresponding to the WHERE part of a SELECT statement which would
     * return only 1 row (the expression of the primary key).
     * 
     * For example for a table created as <![CDATA["CREATE TABLE mytable (part1 int NOT NULL, part2 string NOT NULL,
     * name string, PRIMARY KEY (part1, part2))"]]>, and if `pmodel` corresponds to the execution of the
     * <![CDATA["SELECT name, part1, part2 FROM mytable"]]>, then the sensible value for `sql_where` would be
     * <![CDATA["part1 = ##-1::int AND part2 = ##-2::string"]]> because the values of the 'part1' field are located
     * in `pmodel'`s column number 1 and the values of the 'part2' field are located
     * in `pmodel'`s column number 2 and the primary key is composed of (part1, part2).
     * 
     * For more information about the syntax of the parameters (named <![CDATA["##-1::int"]]> for example), see the
     * <link linkend="GdaSqlParser.description">GdaSqlParser</link> documentation, and
     * gda_data_select_set_modification_statement().
     * @param sql_where an SQL condition (without the WHERE keyword)
     */
    set_row_selection_condition_sql(sql_where: string): boolean

    // Own virtual methods of Gda-5.0.Gda.DataSelect

    vfunc_fetch_at(prow: Row, rownum: number): boolean
    vfunc_fetch_nb_rows(): number
    vfunc_fetch_next(prow: Row, rownum: number): boolean
    vfunc_fetch_prev(prow: Row, rownum: number): boolean
    vfunc_fetch_random(prow: Row, rownum: number): boolean
    vfunc_store_all(): boolean

    // Class property signals of Gda-5.0.Gda.DataSelect

    connect(sigName: "notify::auto-reset", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-reset", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-reset", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::delete-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::delete-stmt", ...args: any[]): void
    connect(sigName: "notify::exec-params", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exec-params", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::exec-params", ...args: any[]): void
    connect(sigName: "notify::execution-delay", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-delay", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::execution-delay", ...args: any[]): void
    connect(sigName: "notify::insert-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::insert-stmt", ...args: any[]): void
    connect(sigName: "notify::model-usage", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model-usage", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model-usage", ...args: any[]): void
    connect(sigName: "notify::prepared-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prepared-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prepared-stmt", ...args: any[]): void
    connect(sigName: "notify::select-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::select-stmt", ...args: any[]): void
    connect(sigName: "notify::store-all-rows", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-all-rows", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::store-all-rows", ...args: any[]): void
    connect(sigName: "notify::update-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-stmt", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataSelect extends GObject.Object {

    // Own properties of Gda-5.0.Gda.DataSelect

    static name: string
    static $gtype: GObject.GType<DataSelect>

    // Constructors of Gda-5.0.Gda.DataSelect

    constructor(config?: DataSelect_ConstructProps) 
    _init(config?: DataSelect_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface HandlerBin_ConstructProps extends DataHandler_ConstructProps, GObject.Object_ConstructProps {
}

interface HandlerBin extends DataHandler {

    // Own fields of Gda-5.0.Gda.HandlerBin

    object: GObject.Object
    priv: HandlerBinPriv

    // Class property signals of Gda-5.0.Gda.HandlerBin

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HandlerBin extends GObject.Object {

    // Own properties of Gda-5.0.Gda.HandlerBin

    static name: string
    static $gtype: GObject.GType<HandlerBin>

    // Constructors of Gda-5.0.Gda.HandlerBin

    constructor(config?: HandlerBin_ConstructProps) 
    _init(config?: HandlerBin_ConstructProps): void
    /**
     * Creates a data handler for binary values
     */
    static new(): DataHandler
}

interface HandlerBoolean_ConstructProps extends DataHandler_ConstructProps, GObject.Object_ConstructProps {
}

interface HandlerBoolean extends DataHandler {

    // Own fields of Gda-5.0.Gda.HandlerBoolean

    object: GObject.Object
    priv: HandlerBooleanPriv

    // Class property signals of Gda-5.0.Gda.HandlerBoolean

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HandlerBoolean extends GObject.Object {

    // Own properties of Gda-5.0.Gda.HandlerBoolean

    static name: string
    static $gtype: GObject.GType<HandlerBoolean>

    // Constructors of Gda-5.0.Gda.HandlerBoolean

    constructor(config?: HandlerBoolean_ConstructProps) 
    _init(config?: HandlerBoolean_ConstructProps): void
    /**
     * Creates a data handler for booleans
     */
    static new(): DataHandler
}

interface HandlerNumerical_ConstructProps extends DataHandler_ConstructProps, GObject.Object_ConstructProps {
}

interface HandlerNumerical extends DataHandler {

    // Own fields of Gda-5.0.Gda.HandlerNumerical

    object: GObject.Object
    priv: HandlerNumericalPriv

    // Class property signals of Gda-5.0.Gda.HandlerNumerical

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HandlerNumerical extends GObject.Object {

    // Own properties of Gda-5.0.Gda.HandlerNumerical

    static name: string
    static $gtype: GObject.GType<HandlerNumerical>

    // Constructors of Gda-5.0.Gda.HandlerNumerical

    constructor(config?: HandlerNumerical_ConstructProps) 
    _init(config?: HandlerNumerical_ConstructProps): void
    /**
     * Creates a data handler for numerical values
     */
    static new(): DataHandler
}

interface HandlerString_ConstructProps extends DataHandler_ConstructProps, GObject.Object_ConstructProps {
}

interface HandlerString extends DataHandler {

    // Own fields of Gda-5.0.Gda.HandlerString

    object: GObject.Object
    priv: HandlerStringPriv

    // Class property signals of Gda-5.0.Gda.HandlerString

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HandlerString extends GObject.Object {

    // Own properties of Gda-5.0.Gda.HandlerString

    static name: string
    static $gtype: GObject.GType<HandlerString>

    // Constructors of Gda-5.0.Gda.HandlerString

    constructor(config?: HandlerString_ConstructProps) 
    _init(config?: HandlerString_ConstructProps): void
    /**
     * Creates a data handler for strings
     */
    static new(): DataHandler
    /**
     * Creates a data handler for strings, which will use some specific methods implemented
     * by the `prov` object (possibly also `cnc)`.
     * @param prov a #GdaServerProvider object
     * @param cnc a #GdaConnection object, or %NULL
     */
    static new_with_provider(prov: ServerProvider, cnc: Connection | null): DataHandler
}

interface HandlerTime_ConstructProps extends DataHandler_ConstructProps, GObject.Object_ConstructProps {
}

interface HandlerTime extends DataHandler {

    // Own fields of Gda-5.0.Gda.HandlerTime

    object: GObject.Object
    priv: HandlerTimePriv

    // Owm methods of Gda-5.0.Gda.HandlerTime

    /**
     * Get a string representing the locale-dependent way to enter a date/time/datetime, using
     * a syntax suitable for the #GdauiFormatEntry widget
     * @param type the type of data being handled
     */
    get_format(type: GObject.GType): string
    get_no_locale_str_from_value(value: any): string
    /**
     * Specifies the SQL output style of the `dh` data handler. The general format is "FIRSTsSECsTHIRD"
     * where FIRST, SEC and THIRD are specified by `first,` `sec` and `trird` and 's' is the separator,
     * specified by `separator`.
     * 
     * The default implementation is `first=`G_DATE_MONTH, `sec=`G_DATE_DAY and `third=`G_DATE_YEAR
     * (the year is rendered on 4 digits) and the separator is '-'
     * @param first what comes first in the date representation
     * @param sec what comes second in the date representation
     * @param third what comes third in the date representation
     * @param separator separator character used between year, month and day
     * @param twodigits_years TRUE if year part of date must be rendered on 2 digits
     */
    set_sql_spec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigits_years: boolean): void
    /**
     * Specifies the human readable output style of the `dh` data handler.
     * The general format is "FIRSTsSECsTHIRD"
     * where FIRST, SEC and THIRD are specified by `first,` `sec` and `trird` and 's' is the separator,
     * specified by `separator`.
     * 
     * The default implementation depends on the current locale, except if `dh` was created
     * using gda_handler_time_new_no_locale().
     * @param first what comes first in the date representation
     * @param sec what comes second in the date representation
     * @param third what comes third in the date representation
     * @param separator separator character used between year, month and day
     * @param twodigits_years TRUE if year part of date must be rendered on 2 digits
     */
    set_str_spec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigits_years: boolean): void

    // Class property signals of Gda-5.0.Gda.HandlerTime

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HandlerTime extends GObject.Object {

    // Own properties of Gda-5.0.Gda.HandlerTime

    static name: string
    static $gtype: GObject.GType<HandlerTime>

    // Constructors of Gda-5.0.Gda.HandlerTime

    constructor(config?: HandlerTime_ConstructProps) 
    _init(config?: HandlerTime_ConstructProps): void
    /**
     * Creates a data handler for time values
     */
    static new(): DataHandler
    /**
     * Creates a data handler for time values, but using the default C locale
     * instead of the current user locale.
     */
    static new_no_locale(): DataHandler
}

interface HandlerType_ConstructProps extends DataHandler_ConstructProps, GObject.Object_ConstructProps {
}

interface HandlerType extends DataHandler {

    // Own fields of Gda-5.0.Gda.HandlerType

    object: GObject.Object
    priv: HandlerTypePriv

    // Class property signals of Gda-5.0.Gda.HandlerType

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HandlerType extends GObject.Object {

    // Own properties of Gda-5.0.Gda.HandlerType

    static name: string
    static $gtype: GObject.GType<HandlerType>

    // Constructors of Gda-5.0.Gda.HandlerType

    constructor(config?: HandlerType_ConstructProps) 
    _init(config?: HandlerType_ConstructProps): void
    /**
     * Creates a data handler for Gda types
     */
    static new(): DataHandler
}

interface Holder_ConstructProps extends Lockable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.Holder

    description?: string | null
    full_bind?: Holder | null
    g_type?: GObject.GType | null
    id?: string | null
    name?: string | null
    not_null?: boolean | null
    simple_bind?: Holder | null
    source_column?: number | null
    source_model?: DataModel | null
    /**
     * Defines if the "validate-change" signal gets emitted when
     * the holder's value changes.
     */
    validate_changes?: boolean | null
}

/**
 * Signal callback interface for `attribute-changed`
 */
interface Holder_AttributeChangedSignalCallback {
    ($obj: Holder, att_name: string, att_value: any): void
}

/**
 * Signal callback interface for `changed`
 */
interface Holder_ChangedSignalCallback {
    ($obj: Holder): void
}

/**
 * Signal callback interface for `source-changed`
 */
interface Holder_SourceChangedSignalCallback {
    ($obj: Holder): void
}

/**
 * Signal callback interface for `validate-change`
 */
interface Holder_ValidateChangeSignalCallback {
    ($obj: Holder, new_value: any): GLib.Error
}

interface Holder extends Lockable {

    // Own properties of Gda-5.0.Gda.Holder

    description: string
    full_bind: Holder
    g_type: GObject.GType
    id: string
    name: string
    not_null: boolean
    simple_bind: Holder
    source_column: number
    source_model: DataModel
    /**
     * Defines if the "validate-change" signal gets emitted when
     * the holder's value changes.
     */
    validate_changes: boolean

    // Own fields of Gda-5.0.Gda.Holder

    object: GObject.Object
    priv: HolderPrivate

    // Owm methods of Gda-5.0.Gda.Holder

    /**
     * Copy constructor.
     * 
     * Note1: if `orig` is set with a static value (see gda_holder_take_static_value())
     * its copy will have a fresh new allocated GValue, so that user should free it when done.
     */
    copy(): Holder
    /**
     * Forces a holder to be invalid; to set it valid again, a new value must be assigned
     * to it using gda_holder_set_value() or gda_holder_take_value().
     * 
     * `holder'`s value is set to %NULL.
     */
    force_invalid(): void
    /**
     * Forces a holder to be invalid; to set it valid again, a new value must be assigned
     * to it using gda_holder_set_value() or gda_holder_take_value().
     * 
     * `holder'`s value is set to %NULL.
     * @param error a #GError explaining why `holder` is declared invalid, or %NULL
     */
    force_invalid_e(error: GLib.Error | null): void
    /**
     * Get an "encoded" version of `holder'`s name. The "encoding" consists in replacing non
     * alphanumeric character with the string "__gdaXX" where XX is the hex. representation
     * of the non alphanumeric char.
     * 
     * This method is just a wrapper around the gda_text_to_alphanum() function.
     */
    get_alphanum_id(): string
    /**
     * Get the value associated to a named attribute.
     * 
     * Attributes can have any name, but Libgda proposes some default names, see <link linkend="libgda-40-Attributes-manager.synopsis">this section</link>.
     * @param attribute attribute name as a string
     */
    get_attribute(attribute: string): any
    /**
     * Get the holder which makes `holder` change its value when the holder's value is changed.
     */
    get_bind(): Holder
    /**
     * Get the default value held into the holder. WARNING: the default value does not need to be of
     * the same type as the one required by `holder`.
     */
    get_default_value(): any
    get_g_type(): GObject.GType
    /**
     * Get the ID of `holder`. The ID can be set using `holder'`s "id" property
     */
    get_id(): string
    /**
     * Get wether the holder can be NULL or not
     */
    get_not_null(): boolean
    /**
     * If gda_holder_set_source_model() has been used to provide a hint that `holder'`s value
     * should be among the values contained in a column of a data model, then this method
     * returns which data model, and if `col` is not %NULL, then it is set to the restricting column
     * as well.
     * 
     * Otherwise, this method returns %NULL, and if `col` is not %NULL, then it is set to 0.
     * @param col a place to store the column in the model sourcing the holder, or %NULL
     */
    get_source_model(col: number): DataModel
    /**
     * Get the value held into the holder. If `holder` is set to use its default value
     * and that default value is not of the same type as `holder,` then %NULL is returned.
     * 
     * If `holder` is set to NULL, then the returned value is a #GDA_TYPE_NULL GValue.
     * 
     * If `holder` is invalid, then the returned value is %NULL.
     */
    get_value(): any | null
    /**
     * Same functionality as gda_holder_get_value() except that it returns the value as a string
     * (the conversion is done using `dh` if not %NULL, or the default data handler otherwise).
     * @param dh a #GdaDataHandler to use, or %NULL
     */
    get_value_str(dh: DataHandler | null): string
    /**
     * Get the validity of `holder` (that is, of the value held by `holder)`
     */
    is_valid(): boolean
    /**
     * Get the validity of `holder` (that is, of the value held by `holder)`
     */
    is_valid_e(): boolean
    /**
     * Set the value associated to a named attribute. The `attribute` string is 'stolen' by this method, and
     * the memory it uses will be freed using the `destroy` function when no longer needed (if `destroy` is %NULL,
     * then the string will not be freed at all).
     * 
     * Attributes can have any name, but Libgda proposes some default names,
     * see <link linkend="libgda-5.0-Attributes-manager.synopsis">this section</link>.
     * 
     * For example one would use it as:
     * 
     * <code>gda_holder_set_attribute (holder, g_strdup (my_attribute), my_value, g_free);</code>
     * <code>gda_holder_set_attribute (holder, GDA_ATTRIBUTE_NAME, my_value, NULL);</code>
     * 
     * If there is already an attribute named `attribute` set, then its value is replaced with the new value (`value` is
     * copied), except if `value` is %NULL, in which case the attribute is removed.
     * @param attribute attribute name
     * @param value a #GValue, or %NULL
     * @param destroy a function to be called when `attribute` is not needed anymore, or %NULL
     */
    set_attribute(attribute: string, value: any, destroy: GLib.DestroyNotify): void
    /**
     * Sets `holder` to change when `bind_to` changes (and does not make `bind_to` change when `holder` changes).
     * For the operation to succeed, the GType of `holder` and `bind_to` must be the same, with the exception that
     * any of them can have a %GDA_TYPE_NULL type (in this situation, the GType of the two #GdaHolder objects
     * involved is set to match the other when any of them sets its type to something different than GDA_TYPE_NULL).
     * 
     * If `bind_to` is %NULL, then `holder` will not be bound anymore.
     * @param bind_to a #GdaHolder or %NULL
     */
    set_bind(bind_to: Holder): boolean
    /**
     * Sets the default value within the holder. If `value` is %NULL then `holder` won't have a
     * default value anymore. To set a default value to %NULL, then pass a #GValue created using
     * gda_value_new_null().
     * 
     * NOTE: the default value does not need to be of the same type as the one required by `holder`.
     * @param value a value to set the holder's default value, or %NULL
     */
    set_default_value(value: any): void
    /**
     * Sets if the holder can have a NULL value. If `not_null` is TRUE, then that won't be allowed
     * @param not_null TRUE if `holder` should not accept %NULL values
     */
    set_not_null(not_null: boolean): void
    /**
     * Sets an hint that `holder'`s values should be restricted among the values
     * contained in the `col` column of the `model` data model. Note that this is just a hint,
     * meaning this policy is not enforced by `holder'`s implementation.
     * 
     * If `model` is %NULL, then the effect is to cancel ant previous call to gda_holder_set_source_model()
     * where `model` was not %NULL.
     * @param model a #GdaDataModel object or %NULL
     * @param col the reference column in `model`
     */
    set_source_model(model: DataModel, col: number): boolean
    /**
     * Sets the value within the holder. If `holder` is an alias for another
     * holder, then the value is also set for that other holder.
     * 
     * On success, the action of any call to gda_holder_force_invalid() is cancelled
     * as soon as this method is called (even if `holder'`s value does not actually change)
     * 
     * If the value is not different from the one already contained within `holder,`
     * then `holder` is not changed and no signal is emitted.
     * 
     * Note1: the `value` argument is treated the same way if it is %NULL or if it is a #GDA_TYPE_NULL value
     * 
     * Note2: if `holder` can't accept the `value` value, then this method returns FALSE, and `holder` will be left
     * in an invalid state.
     * 
     * Note3: before the change is accepted by `holder,` the "validate-change" signal will be emitted (the value
     * of which can prevent the change from happening) which can be connected to to have a greater control
     * of which values `holder` can have, or implement some business rules.
     * @param value a value to set the holder to, or %NULL
     */
    set_value(value: any | null): boolean
    /**
     * Same functionality as gda_holder_set_value() except that it uses a string representation
     * of the value to set, which will be converted into a GValue first (using default data handler if
     * `dh` is %NULL).
     * 
     * Note1: if `value` is %NULL or is the "NULL" string, then `holder'`s value is set to %NULL.
     * Note2: if `holder` can't accept the `value` value, then this method returns FALSE, and `holder` will be left
     * in an invalid state.
     * @param dh a #GdaDataHandler to use, or %NULL
     * @param value a value to set the holder to, as a string
     */
    set_value_str(dh: DataHandler, value: string): boolean
    /**
     * Set `holder'`s value to its default value.
     */
    set_value_to_default(): boolean
    /**
     * Sets the const value within the holder. If `holder` is an alias for another
     * holder, then the value is also set for that other holder.
     * 
     * The value will not be freed, and user should take care of it, either for its
     * freeing or for its correct value at the moment of query.
     * 
     * If the value is not different from the one already contained within `holder,`
     * then `holder` is not changed and no signal is emitted.
     * 
     * Note1: if `holder` can't accept the `value` value, then this method returns NULL, and `holder` will be left
     * in an invalid state.
     * 
     * Note2: before the change is accepted by `holder,` the "validate-change" signal will be emitted (the value
     * of which can prevent the change from happening) which can be connected to to have a greater control
     * of which values `holder` can have, or implement some business rules.
     * @param value a const value to set the holder to
     * @param value_changed a boolean set with TRUE if the value changes, FALSE elsewhere.
     */
    take_static_value(value: any, value_changed: boolean): any
    /**
     * Sets the value within the holder. If `holder` is an alias for another
     * holder, then the value is also set for that other holder.
     * 
     * On success, the action of any call to gda_holder_force_invalid() is cancelled
     * as soon as this method is called (even if `holder'`s value does not actually change).
     * 
     * If the value is not different from the one already contained within `holder,`
     * then `holder` is not changed and no signal is emitted.
     * 
     * Note1: if `holder` can't accept the `value` value, then this method returns FALSE, and `holder` will be left
     * in an invalid state.
     * 
     * Note2: before the change is accepted by `holder,` the "validate-change" signal will be emitted (the value
     * of which can prevent the change from happening) which can be connected to to have a greater control
     * of which values `holder` can have, or implement some business rules.
     * 
     * Note3: if user previously set this holder with gda_holder_take_static_value () the GValue
     * stored internally will be forgiven and replaced by the `value`. User should then
     * take care of the 'old' static GValue.
     * @param value a value to set the holder to
     */
    take_value(value: any): boolean
    /**
     * Tells if `holder'`s current value is the default one.
     */
    value_is_default(): boolean

    // Own virtual methods of Gda-5.0.Gda.Holder

    vfunc_att_changed(att_name: string, att_value: any): void
    vfunc_changed(): void
    vfunc_source_changed(): void
    vfunc_validate_change(new_value: any): GLib.Error

    // Own signals of Gda-5.0.Gda.Holder

    connect(sigName: "attribute-changed", callback: Holder_AttributeChangedSignalCallback): number
    connect_after(sigName: "attribute-changed", callback: Holder_AttributeChangedSignalCallback): number
    emit(sigName: "attribute-changed", att_name: string, att_value: any, ...args: any[]): void
    connect(sigName: "changed", callback: Holder_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Holder_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "source-changed", callback: Holder_SourceChangedSignalCallback): number
    connect_after(sigName: "source-changed", callback: Holder_SourceChangedSignalCallback): number
    emit(sigName: "source-changed", ...args: any[]): void
    connect(sigName: "validate-change", callback: Holder_ValidateChangeSignalCallback): number
    connect_after(sigName: "validate-change", callback: Holder_ValidateChangeSignalCallback): number
    emit(sigName: "validate-change", new_value: any, ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.Holder

    connect(sigName: "notify::description", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::full-bind", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-bind", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::full-bind", ...args: any[]): void
    connect(sigName: "notify::g-type", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::not-null", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::not-null", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::not-null", ...args: any[]): void
    connect(sigName: "notify::simple-bind", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-bind", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-bind", ...args: any[]): void
    connect(sigName: "notify::source-column", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-column", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-column", ...args: any[]): void
    connect(sigName: "notify::source-model", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-model", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-model", ...args: any[]): void
    connect(sigName: "notify::validate-changes", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::validate-changes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Holder extends GObject.Object {

    // Own properties of Gda-5.0.Gda.Holder

    static name: string
    static $gtype: GObject.GType<Holder>

    // Constructors of Gda-5.0.Gda.Holder

    constructor(config?: Holder_ConstructProps) 
    /**
     * Creates a new holder of type `type`
     * @constructor 
     * @param type the #GType requested
     */
    constructor(type: GObject.GType) 
    /**
     * Creates a new holder of type `type`
     * @constructor 
     * @param type the #GType requested
     */
    static new(type: GObject.GType): Holder
    _init(config?: Holder_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface MetaStore_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.MetaStore

    catalog?: string | null
    cnc?: Connection | null
    cnc_string?: string | null
    schema?: string | null
}

/**
 * Signal callback interface for `meta-changed`
 */
interface MetaStore_MetaChangedSignalCallback {
    ($obj: MetaStore, changes: MetaStoreChange[]): void
}

/**
 * Signal callback interface for `meta-reset`
 */
interface MetaStore_MetaResetSignalCallback {
    ($obj: MetaStore): void
}

/**
 * Signal callback interface for `suggest-update`
 */
interface MetaStore_SuggestUpdateSignalCallback {
    ($obj: MetaStore, suggest: MetaContext): GLib.Error
}

interface MetaStore {

    // Own properties of Gda-5.0.Gda.MetaStore

    readonly catalog: string
    readonly cnc: Connection
    readonly cnc_string: string
    readonly schema: string

    // Own fields of Gda-5.0.Gda.MetaStore

    object: GObject.Object
    priv: MetaStorePrivate

    // Owm methods of Gda-5.0.Gda.MetaStore

    /**
     * Creates a new #GdaDataModelArray data model which can be used, after being correctly filled,
     * with the gda_meta_store_modify*() methods.*
     * 
     * To be used by provider's implementation
     * @param table_name the name of a table present in `store`
     */
    create_modify_data_model(table_name: string): DataModel
    /**
     * Defines a new declared foreign key into `store`. If another declared foreign key is already defined
     * between the two tables and with the same name, then it is first removed.
     * 
     * This method begins a transaction if possible (ie. none is already started), and if it can't,
     * then if there is an error, the job may be partially done.
     * 
     * A check is always performed to make sure all the database objects actually
     * exist and returns an error if not. The check is performed using `mstruct` if it's not %NULL (in
     * this case only the tables already represented in `mstruct` will be considered, in other words: `mstruct`
     * will not be modified), and using an internal #GdaMetaStruct is %NULL.
     * 
     * The `catalog,` `schema,` `table,` `ref_catalog,` `ref_schema` and `ref_table` must follow the SQL
     * identifiers naming convention, see the <link linkend="gen:sql_identifiers">SQL identifiers</link>
     * section. The same convention needs to be respected for the strings in `conames` and `ref_colnames`.
     * 
     * If `catalog` is not %NULL, then `schema` must also be not %NULL (the same restriction applies to
     * `ref_catalog` and `ref_schema)`.
     * @param mstruct a #GdaMetaStruct, or %NULL
     * @param fk_name the name of the foreign key to declare
     * @param catalog the catalog in which the table (for which the foreign key is for) is, or %NULL
     * @param schema the schema in which the table (for which the foreign key is for) is, or %NULL
     * @param table the name of the table (for which the foreign key is for)
     * @param ref_catalog the catalog in which the referenced table is, or %NULL
     * @param ref_schema the schema in which the referenced table is, or %NULL
     * @param ref_table the name of the referenced table
     * @param colnames an array of column names from the table for which the foreign key is for
     * @param ref_colnames an array of column names from the referenced table
     */
    declare_foreign_key(mstruct: MetaStruct | null, fk_name: string, catalog: string | null, schema: string | null, table: string, ref_catalog: string | null, ref_schema: string | null, ref_table: string, colnames: string[], ref_colnames: string[]): boolean
    /**
     * Extracts some data stored in `store` using a custom SELECT query. If the `select_sql` filter involves
     * SQL identifiers (such as table or column names), then the values should have been adapted using
     * gda_meta_store_sql_identifier_quote().
     * 
     * For more information about
     * SQL identifiers are represented in `store,` see the
     * <link linkend="information_schema:sql_identifiers">meta data section about SQL identifiers</link>.
     * @param select_sql a SELECT statement
     * @param vars a hash table with all variables names as keys and GValue* as value, representing values for all the variables mentioned in `select_sql`. If there is no variable then this part can be omitted.
     */
    extract(select_sql: string, vars: GLib.HashTable | null): DataModel
    /**
     * The #GdaMetaStore object maintains a list of (name,value) attributes (attributes names starting with a '_'
     * character are for internal use only and cannot be altered). This method and the gda_meta_store_set_attribute_value()
     * method allows the user to add, set or remove attributes specific to their usage.
     * 
     * This method allows to get the value of a attribute stored in `store`. The returned attribute value is
     * placed at `att_value,` the caller is responsible for free that string.
     * 
     * If there is no attribute named `att_name` then `att_value` is set to %NULL
     * and `error` will contain the GDA_META_STORE_ATTRIBUTE_NOT_FOUND_ERROR error code, and FALSE is returned.
     * @param att_name name of the attribute to get
     */
    get_attribute_value(att_name: string): [ /* returnType */ boolean, /* att_value */ string ]
    /**
     * Get a pointer to the #GdaConnection object internally used by `store` to store
     * its contents.
     * 
     * The returned connection can be used to access some other data than the one managed by `store`
     * itself. The returned object is not owned by the caller (if you need to keep it, then use g_object_ref()).
     * Do not close the connection.
     */
    get_internal_connection(): Connection
    /**
     * Get `store'`s internal schema's version
     */
    get_version(): number
    /**
     * Propagates an update to `store,` the update's contents is represented by `new_data,` this function is
     * primarily reserved to database providers.
     * @param table_name the name of the table to modify within `store`
     * @param new_data a #GdaDataModel containing the new data to set in `table_name,` or %NULL (treated as a data model with no row at all)
     * @param condition SQL expression (which may contain variables) defining the rows which are being obsoleted by `new_data,` or %NULL
     * @param value_names names of values
     * @param values values
     */
    modify(table_name: string, new_data: DataModel | null, condition: string | null, value_names: string[], values: any[]): boolean
    /**
     * Propagates an update to `store,` the update's contents is represented by `new_data,` this function is
     * primarily reserved to database providers.
     * @param context a #GdaMetaContext context describing what to modify in `store`
     * @param new_data a #GdaDataModel containing the new data to set in `table_name,` or %NULL (treated as a data model with no row at all)
     */
    modify_with_context(context: MetaContext, new_data: DataModel | null): boolean
    /**
     * The internal database used by `store` can be 'augmented' with some user-defined database objects
     * (such as tables or views). This method allows one to add a new database object.
     * 
     * If the internal database already contains the object, then:
     * <itemizedlist>
     *   <listitem><para>if the object is equal to the provided description then TRUE is returned</para></listitem>
     *   <listitem><para>if the object exists but differs from the provided description, then FALSE is returned,
     *      with the GDA_META_STORE_SCHEMA_OBJECT_CONFLICT_ERROR error code</para></listitem>
     * </itemizedlist>
     * 
     * The `xml_description` defines the table of view's definition, for example:
     * <programlisting><![CDATA[<table name="mytable">
     *     <column name="id" pkey="TRUE"/>
     *     <column name="value"/>
     * </table>]]></programlisting>
     * 
     * The partial DTD for this XML description of the object to add is the following (the top node must be
     * a &lt;table&gt; or a &lt;view&gt;):
     * <programlisting><![CDATA[<!ELEMENT table (column*,check*,fkey*,unique*)>
     * <!ATTLIST table
     *           name NMTOKEN #REQUIRED>
     * 
     * <!ELEMENT column EMPTY>
     * <!ATTLIST column
     *           name NMTOKEN #REQUIRED
     *           type CDATA #IMPLIED
     *           pkey (TRUE|FALSE) #IMPLIED
     *           autoinc (TRUE|FALSE) #IMPLIED
     *           nullok (TRUE|FALSE) #IMPLIED>
     * 
     * <!ELEMENT check (#PCDATA)>
     * 
     * <!ELEMENT fkey (part+)>
     * <!ATTLIST fkey
     *           ref_table NMTOKEN #REQUIRED>
     * 
     * <!ELEMENT part EMPTY>
     * <!ATTLIST part
     *           column NMTOKEN #IMPLIED
     *           ref_column NMTOKEN #IMPLIED>
     * 
     * <!ELEMENT unique (column)>
     * 
     * <!ELEMENT view (definition)>
     * <!ATTLIST view
     *           name NMTOKEN #REQUIRED
     *           descr CDATA #IMPLIED>
     * 
     * <!ELEMENT definition (#PCDATA)>]]></programlisting>
     * @param xml_description an XML description of the table or view to add to `store`
     */
    schema_add_custom_object(xml_description: string): boolean
    /**
     * Get an ordered list of the tables `store` knows about. The tables are ordered in a way that tables dependencies
     * are respected: if table B has a foreign key on table A, then table A will be listed before table B in the returned
     * list.
     */
    schema_get_all_tables(): string[]
    /**
     * Get an ordered list of the tables `store` knows about on which the `table_name` table depends (recursively).
     * The tables are ordered in a way that tables dependencies
     * are respected: if table B has a foreign key on table A, then table A will be listed before table B in the returned
     * list.
     * @param table_name the name of the table for which all the dependencies must be listed
     */
    schema_get_depend_tables(table_name: string): string[]
    /**
     * Creates a new #GdaMetaStruct object representing `store'`s internal database structure.
     */
    schema_get_structure(): MetaStruct
    /**
     * Removes the custom database object named `obj_name`.
     * @param obj_name name of the custom object to remove
     */
    schema_remove_custom_object(obj_name: string): boolean
    /**
     * Set the value of the attribute named `att_name` to `att_value;` see gda_meta_store_get_attribute_value() for
     * more information.
     * @param att_name name of the attribute to set
     * @param att_value value of the attribute to set, or %NULL to unset the attribute
     */
    set_attribute_value(att_name: string, att_value: string | null): boolean
    /**
     * Specifies how `store` must handle SQL identifiers it has to store. This method is mainly used by
     * database providers.
     * @param style a style
     */
    set_identifiers_style(style: SqlIdentifierStyle): void
    /**
     * Specifies a function which `store` will use to determine if a keyword is an SQL reserved
     * keyword or not.
     * 
     * This method is mainly used by database providers.
     * @param func a #GdaSqlReservedKeywordsFunc function, or %NULL
     */
    set_reserved_keywords_func(func: SqlReservedKeywordsFunc | null): void
    /**
     * Removes a declared foreign key from `store`.
     * 
     * This method begins a transaction if possible (ie. none is already started), and if it can't, then if there
     * is an error, the job may be partially done.
     * 
     * A check is always performed to make sure all the database objects actually
     * exist and returns an error if not. The check is performed using `mstruct` if it's not %NULL (in
     * this case only the tables already represented in `mstruct` will be considered, in other words: `mstruct`
     * will not be modified), and using an internal #GdaMetaStruct is %NULL.
     * 
     * See gda_meta_store_declare_foreign_key() for more information anout the `catalog,` `schema,` `name,`
     * `ref_catalog,` `ref_schema` and `ref_name` arguments.
     * @param mstruct a #GdaMetaStruct, or %NULL
     * @param fk_name the name of the foreign key to declare
     * @param catalog the catalog in which the table (for which the foreign key is for) is, or %NULL
     * @param schema the schema in which the table (for which the foreign key is for) is, or %NULL
     * @param table the name of the table (for which the foreign key is for)
     * @param ref_catalog the catalog in which the referenced table is, or %NULL
     * @param ref_schema the schema in which the referenced table is, or %NULL
     * @param ref_table the name of the referenced table
     */
    undeclare_foreign_key(mstruct: MetaStruct | null, fk_name: string, catalog: string | null, schema: string | null, table: string, ref_catalog: string | null, ref_schema: string | null, ref_table: string): boolean

    // Own virtual methods of Gda-5.0.Gda.MetaStore

    vfunc_meta_reset(): void
    vfunc_suggest_update(suggest: MetaContext): GLib.Error

    // Own signals of Gda-5.0.Gda.MetaStore

    connect(sigName: "meta-changed", callback: MetaStore_MetaChangedSignalCallback): number
    connect_after(sigName: "meta-changed", callback: MetaStore_MetaChangedSignalCallback): number
    emit(sigName: "meta-changed", changes: MetaStoreChange[], ...args: any[]): void
    connect(sigName: "meta-reset", callback: MetaStore_MetaResetSignalCallback): number
    connect_after(sigName: "meta-reset", callback: MetaStore_MetaResetSignalCallback): number
    emit(sigName: "meta-reset", ...args: any[]): void
    connect(sigName: "suggest-update", callback: MetaStore_SuggestUpdateSignalCallback): number
    connect_after(sigName: "suggest-update", callback: MetaStore_SuggestUpdateSignalCallback): number
    emit(sigName: "suggest-update", suggest: MetaContext, ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.MetaStore

    connect(sigName: "notify::catalog", callback: (($obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::catalog", callback: (($obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::catalog", ...args: any[]): void
    connect(sigName: "notify::cnc", callback: (($obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cnc", callback: (($obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cnc", ...args: any[]): void
    connect(sigName: "notify::cnc-string", callback: (($obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cnc-string", callback: (($obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cnc-string", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MetaStore extends GObject.Object {

    // Own properties of Gda-5.0.Gda.MetaStore

    static name: string
    static $gtype: GObject.GType<MetaStore>

    // Constructors of Gda-5.0.Gda.MetaStore

    constructor(config?: MetaStore_ConstructProps) 
    /**
     * Create a new #GdaMetaStore object.
     * @constructor 
     * @param cnc_string a connection string, or %NULL for an in-memory internal database
     */
    constructor(cnc_string: string | null) 
    /**
     * Create a new #GdaMetaStore object.
     * @constructor 
     * @param cnc_string a connection string, or %NULL for an in-memory internal database
     */
    static new(cnc_string: string | null): MetaStore
    /**
     * Create a new #GdaMetaStore object using `file_name` as its internal
     * database
     * @constructor 
     * @param file_name a file name
     */
    static new_with_file(file_name: string): MetaStore
    _init(config?: MetaStore_ConstructProps): void
    static error_quark(): GLib.Quark
    /**
     * Use this method to get a correctly quoted (if necessary) SQL identifier which can be used
     * to retrieve or filter information in a #GdaMetaStore which stores meta data about `cnc`.
     * 
     * The returned SQL identifier can be used in conjunction with gda_connection_update_meta_store(),
     * gda_connection_get_meta_store_data(), gda_connection_get_meta_store_data_v() and
     * gda_meta_store_extract().
     * @param id an SQL identifier
     * @param cnc a #GdaConnection
     */
    static sql_identifier_quote(id: string, cnc: Connection): string
}

interface MetaStruct_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.MetaStruct

    features?: number | null
    meta_store?: MetaStore | null
}

interface MetaStruct {

    // Own properties of Gda-5.0.Gda.MetaStruct

    readonly features: number
    readonly meta_store: MetaStore

    // Own fields of Gda-5.0.Gda.MetaStruct

    object: GObject.Object
    priv: MetaStructPrivate

    // Owm methods of Gda-5.0.Gda.MetaStruct

    /**
     * Creates a new #GdaMetaDbObject structure in `mstruct` to represent the database object (of type `type)`
     * which can be uniquely identified as `catalog`.`schema`.`name`.
     * 
     * If `catalog` is not %NULL, then `schema` should not be %NULL.
     * 
     * If both `catalog` and `schema` are %NULL, then the database object will be the one which is
     * "visible" by default (that is which can be accessed only by its short `name` name).
     * 
     * If `catalog` is %NULL and `schema` is not %NULL, then the database object will be the one which
     * can be accessed by its `schema`.`name` name.
     * 
     * Important note: `catalog,` `schema` and `name` will be used using the following convention:
     * <itemizedlist>
     *   <listitem><para>be surrounded by double quotes for a case sensitive search</para></listitem>
     *   <listitem><para>otherwise for case insensitive search</para></listitem>
     * </itemizedlist>
     * 
     * For more information, see the <link linkend="information_schema:sql_identifiers">
     * meta data section about SQL identifiers</link>.
     * @param type the type of object to add (which can be GDA_META_DB_UNKNOWN)
     * @param catalog the catalog the object belongs to (as a G_TYPE_STRING GValue), or %NULL
     * @param schema the schema the object belongs to (as a G_TYPE_STRING GValue), or %NULL
     * @param name the object's name (as a G_TYPE_STRING GValue), not %NULL
     */
    complement(type: MetaDbObjectType, catalog: any | null, schema: any | null, name: any): MetaDbObject
    /**
     * This method is similar to gda_meta_struct_complement() and gda_meta_struct_complement_default()
     * but creates #GdaMetaDbObject for all the database object.
     * 
     * Please refer to gda_meta_struct_complement() form more information.
     */
    complement_all(): boolean
    /**
     * This method is similar to gda_meta_struct_complement() and gda_meta_struct_complement_all()
     * but creates #GdaMetaDbObject for all the
     * database object which are usable using only their short name (that is which do not need to be prefixed by
     * the schema in which they are to be used).
     * 
     * Please refer to gda_meta_struct_complement() form more information.
     */
    complement_default(): boolean
    /**
     * This method is similar to gda_meta_struct_complement() but creates #GdaMetaDbObject for all the dependencies
     * of `dbo`.
     * 
     * Please refer to gda_meta_struct_complement() form more information.
     * @param dbo a #GdaMetaDbObject part of `mstruct`
     */
    complement_depend(dbo: MetaDbObject): boolean
    /**
     * This method is similar to gda_meta_struct_complement() but creates #GdaMetaDbObject for all the
     * database object which are in the `schema` schema (and in the `catalog` catalog).
     * If `catalog` is %NULL, then any catalog will be used, and
     * if `schema` is %NULL then any schema will be used (if `schema` is %NULL then catalog must also be %NULL).
     * 
     * Please refer to gda_meta_struct_complement() form more information.
     * @param catalog name of a catalog, or %NULL
     * @param schema name of a schema, or %NULL
     */
    complement_schema(catalog: any | null, schema: any | null): boolean
    /**
     * Creates a new graph (in the GraphViz syntax) representation of `mstruct`.
     * @param info informs what kind of information to show in the resulting graph
     */
    dump_as_graph(info: MetaGraphInfo): string
    /**
     * Get a list of all the #GdaMetaDbObject structures representing database objects in `mstruct`. Note that
     * no #GdaMetaDbObject structure must not be modified.
     */
    get_all_db_objects(): MetaDbObject[]
    /**
     * Tries to locate the #GdaMetaDbObject structure representing the database object named after
     * `catalog,` `schema` and `name`.
     * 
     * If one or both of `catalog` and `schema` are %NULL, and more than one database object matches the name, then
     * the return value is also %NULL.
     * @param catalog the catalog the object belongs to (as a G_TYPE_STRING GValue), or %NULL
     * @param schema the schema the object belongs to (as a G_TYPE_STRING GValue), or %NULL
     * @param name the object's name (as a G_TYPE_STRING GValue), not %NULL
     */
    get_db_object(catalog: any | null, schema: any | null, name: any): MetaDbObject
    /**
     * Loads an XML description into `mstruct`. This method is still experimental and no description
     * the XML file structure is given, and no guarantee that it will remain as it is given.
     * @param catalog the catalog name, or %NULL
     * @param schema the schema name, or %NULL
     * @param xml_spec_file the specifications as the name of an XML file
     */
    load_from_xml_file(catalog: string | null, schema: string | null, xml_spec_file: string): boolean
    /**
     * Reorders the list of database objects within `mstruct` in a way specified by `sort_type`.
     * @param sort_type the kind of sorting requested
     */
    sort_db_objects(sort_type: MetaSortType): boolean

    // Class property signals of Gda-5.0.Gda.MetaStruct

    connect(sigName: "notify::features", callback: (($obj: MetaStruct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: MetaStruct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::features", ...args: any[]): void
    connect(sigName: "notify::meta-store", callback: (($obj: MetaStruct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-store", callback: (($obj: MetaStruct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::meta-store", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MetaStruct extends GObject.Object {

    // Own properties of Gda-5.0.Gda.MetaStruct

    static name: string
    static $gtype: GObject.GType<MetaStruct>

    // Constructors of Gda-5.0.Gda.MetaStruct

    constructor(config?: MetaStruct_ConstructProps) 
    /**
     * Creates a new #GdaMetaStruct object. The `features` specifies the extra features which will also be computed:
     * the more features, the more time it takes to run. Features such as table's columns, each column's attributes, etc
     * are not optional and will always be computed.
     * @constructor 
     * @param store a #GdaMetaStore from which the new #GdaMetaStruct object will fetch information
     * @param features the kind of extra information the new #GdaMetaStruct object will compute
     */
    constructor(store: MetaStore, features: MetaStructFeature) 
    /**
     * Creates a new #GdaMetaStruct object. The `features` specifies the extra features which will also be computed:
     * the more features, the more time it takes to run. Features such as table's columns, each column's attributes, etc
     * are not optional and will always be computed.
     * @constructor 
     * @param store a #GdaMetaStore from which the new #GdaMetaStruct object will fetch information
     * @param features the kind of extra information the new #GdaMetaStruct object will compute
     */
    static new(store: MetaStore, features: MetaStructFeature): MetaStruct
    _init(config?: MetaStruct_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface PStmt_ConstructProps extends GObject.Object_ConstructProps {
}

interface PStmt {

    // Own fields of Gda-5.0.Gda.PStmt

    object: GObject.Object
    priv: PStmtPrivate
    /**
     * actual SQL code used for this prepared statement, mem freed by GdaPStmt
     * @field 
     */
    sql: string
    /**
     * list of parameters' IDs (as gchar *), mem freed by GdaPStmt
     * @field 
     */
    param_ids: string[]
    /**
     * number of types in array
     * @field 
     */
    ncols: number
    /**
     * array of ncols types
     * @field 
     */
    types: GObject.GType
    /**
     * list of #GdaColumn objects which data models created from this prep. statement can copy
     * @field 
     */
    tmpl_columns: Column[]

    // Owm methods of Gda-5.0.Gda.PStmt

    /**
     * Copies `src'`s data to `dest`
     * @param dest a #GdaPStmt object
     */
    copy_contents(dest: PStmt): void
    /**
     * Get a pointer to the #GdaStatement which led to the creation of this prepared statement.
     * 
     * Note: if that statement has been modified since the creation of `pstmt,` then this method
     * will return %NULL
     */
    get_gda_statement(): Statement
    /**
     * Informs `pstmt` that it corresponds to the preparation of the `stmt` statement
     * @param stmt a #GdaStatement object, or %NULL
     */
    set_gda_statement(stmt: Statement | null): void

    // Class property signals of Gda-5.0.Gda.PStmt

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PStmt extends GObject.Object {

    // Own properties of Gda-5.0.Gda.PStmt

    static name: string
    static $gtype: GObject.GType<PStmt>

    // Constructors of Gda-5.0.Gda.PStmt

    constructor(config?: PStmt_ConstructProps) 
    _init(config?: PStmt_ConstructProps): void
}

interface RepetitiveStatement_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.RepetitiveStatement

    statement?: Statement | null
}

interface RepetitiveStatement {

    // Own properties of Gda-5.0.Gda.RepetitiveStatement

    readonly statement: Statement

    // Own fields of Gda-5.0.Gda.RepetitiveStatement

    parent_instance: GObject.Object

    // Owm methods of Gda-5.0.Gda.RepetitiveStatement

    /**
     * Specifies that `rstmt` be executed one time with the values contained in `values`.
     * 
     * A new #GdaSet to be used as the `values` argument can be obtained using
     * gda_repetitive_statement_get_template_set().
     * @param values a #GdaSet object with the values to be used
     * @param make_copy %TRUE if `values` is copied, and %FALSE if `values` is only ref'ed
     */
    append_set(values: Set, make_copy: boolean): boolean
    /**
     * Get all the values sets which will have been added using gda_repetitive_statement_append_set().
     */
    get_all_sets(): Set[]
    /**
     * Gets a new #GdaSet object with the parameters used by the template statement in the
     * `rstmt` object.
     * 
     * Use this object with gda_repetitive_statement_append_set().
     * @param set a place to store the returned template set
     */
    get_template_set(set: Set): boolean

    // Class property signals of Gda-5.0.Gda.RepetitiveStatement

    connect(sigName: "notify::statement", callback: (($obj: RepetitiveStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::statement", callback: (($obj: RepetitiveStatement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::statement", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RepetitiveStatement extends GObject.Object {

    // Own properties of Gda-5.0.Gda.RepetitiveStatement

    static name: string
    static $gtype: GObject.GType<RepetitiveStatement>

    // Constructors of Gda-5.0.Gda.RepetitiveStatement

    constructor(config?: RepetitiveStatement_ConstructProps) 
    /**
     * Creates a new #GdaRepetitiveStatement object which, when executed, will execute `stmt` once for all
     * the values set which will have been defined using gda_repetitive_statement_append_set().
     * Use gda_connection_repetitive_statement_execute() to actually execute it.
     * @constructor 
     * @param stmt a #GdaStatement object
     */
    constructor(stmt: Statement) 
    /**
     * Creates a new #GdaRepetitiveStatement object which, when executed, will execute `stmt` once for all
     * the values set which will have been defined using gda_repetitive_statement_append_set().
     * Use gda_connection_repetitive_statement_execute() to actually execute it.
     * @constructor 
     * @param stmt a #GdaStatement object
     */
    static new(stmt: Statement): RepetitiveStatement
    _init(config?: RepetitiveStatement_ConstructProps): void
}

interface Row_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.Row

    nb_values?: number | null
}

interface Row {

    // Own properties of Gda-5.0.Gda.Row

    nb_values: number

    // Own fields of Gda-5.0.Gda.Row

    object: GObject.Object
    priv: RowPrivate

    // Owm methods of Gda-5.0.Gda.Row

    get_length(): number
    /**
     * Gets a pointer to a #GValue stored in a #GdaRow.
     * 
     * This is a pointer to the internal array of values. Don't try to free
     * or modify it (modifying is reserved to database provider's implementations).
     * @param num field index.
     */
    get_value(num: number): any | null
    /**
     * Marks `value` as being invalid. This method is mainly used by database
     * providers' implementations to report any error while reading a value from the database.
     * @param value a #GValue belonging to `row` (obtained with gda_row_get_value()).
     */
    invalidate_value(value: any): void
    /**
     * Marks `value` as being invalid. This method is mainly used by database
     * providers' implementations to report any error while reading a value from the database.
     * @param value a #GValue belonging to `row` (obtained with gda_row_get_value()).
     * @param error the error which lead to the invalidation
     */
    invalidate_value_e(value: any, error: GLib.Error | null): void
    /**
     * Tells if `value` has been marked as being invalid by gda_row_invalidate_value().
     * This method is mainly used by database
     * providers' implementations to report any error while reading a value from the database.
     * @param value a #GValue belonging to `row` (obtained with gda_row_get_value()).
     */
    value_is_valid(value: any): boolean
    /**
     * Tells if `value` has been marked as being invalid by gda_row_invalidate_value().
     * This method is mainly used by database
     * providers' implementations to report any error while reading a value from the database.
     * @param value a #GValue belonging to `row` (obtained with gda_row_get_value()).
     */
    value_is_valid_e(value: any): boolean

    // Class property signals of Gda-5.0.Gda.Row

    connect(sigName: "notify::nb-values", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nb-values", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nb-values", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Row extends GObject.Object {

    // Own properties of Gda-5.0.Gda.Row

    static name: string
    static $gtype: GObject.GType<Row>

    // Constructors of Gda-5.0.Gda.Row

    constructor(config?: Row_ConstructProps) 
    /**
     * Creates a #GdaRow which can hold `count` #GValue values.
     * @constructor 
     * @param count number of #GValue in the new #GdaRow.
     */
    constructor(count: number) 
    /**
     * Creates a #GdaRow which can hold `count` #GValue values.
     * @constructor 
     * @param count number of #GValue in the new #GdaRow.
     */
    static new(count: number): Row
    _init(config?: Row_ConstructProps): void
}

interface ServerOperation_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.ServerOperation

    connection?: Connection | null
    op_type?: number | null
    provider?: ServerProvider | null
    spec_filename?: string | null
}

/**
 * Signal callback interface for `sequence-item-added`
 */
interface ServerOperation_SequenceItemAddedSignalCallback {
    ($obj: ServerOperation, seq_path: string, item_index: number): void
}

/**
 * Signal callback interface for `sequence-item-remove`
 */
interface ServerOperation_SequenceItemRemoveSignalCallback {
    ($obj: ServerOperation, seq_path: string, item_index: number): void
}

interface ServerOperation {

    // Own properties of Gda-5.0.Gda.ServerOperation

    readonly connection: Connection
    readonly op_type: number
    readonly provider: ServerProvider
    readonly spec_filename: string

    // Own fields of Gda-5.0.Gda.ServerOperation

    object: GObject.Object
    priv: ServerOperationPrivate

    // Owm methods of Gda-5.0.Gda.ServerOperation

    add_item_to_sequence(seq_path: string): number
    del_item_from_sequence(item_path: string): boolean
    /**
     * Get the complete path to the parent of the node defined by `path`
     * @param path a complete path to a node (starting with "/")
     */
    get_node_parent(path: string): string
    /**
     * Get the last part of `path`
     * @param path a complete path to a node (starting with "/")
     */
    get_node_path_portion(path: string): string
    /**
     * Convenience function to get the type of a node.
     * @param path a complete path to a node (starting with "/")
     * @param status a place to store the status of the node, or %NULL
     */
    get_node_type(path: string, status: ServerOperationNodeStatus | null): ServerOperationNodeType
    /**
     * Get the type of operation `op` is for
     */
    get_op_type(): ServerOperationType
    /**
     * Get an array of strings containing the paths of nodes situated at the root of `op`.
     */
    get_root_nodes(): string[]
    /**
     * Fetch the contents of a sequence. `path` can describe either a sequence (for example "/SEQNAME") or an item in a sequence
     * (for example "/SEQNAME/3")
     * @param path a complete path to a sequence node (starting with "/")
     */
    get_sequence_item_names(path: string): string[]
    get_sequence_max_size(path: string): number
    get_sequence_min_size(path: string): number
    get_sequence_name(path: string): string
    get_sequence_size(path: string): number
    /**
     * This method is similar to gda_server_operation_get_value_at(), but for SQL identifiers: a new string
     * is returned instead of a #GValue. Also the returned string is assumed to represents an SQL identifier
     * and will correctly be quoted to be used with `cnc,` or `prov` if `cnc` is %NULL (a generic quoting rule
     * will be applied if both are %NULL).
     * @param cnc a #GdaConnection, or %NULL
     * @param prov a #GdaServerProvider, or %NULL
     * @param path a complete path to a node (starting with "/")
     */
    get_sql_identifier_at(cnc: Connection | null, prov: ServerProvider | null, path: string): string
    /**
     * Get the value for the node at the `path` path
     * @param path a complete path to a node (starting with "/")
     */
    get_value_at(path: string): any | null
    /**
     * Tells if all the required values in `op` have been defined.
     * 
     * if `xml_file` is not %NULL, the validity of `op` is tested against that specification,
     * and not against the current `op'`s specification.
     * @param xml_file an XML specification file (see gda_server_operation_new()) or %NULL
     */
    is_valid(xml_file: string | null): boolean
    /**
     * Loads the contents of `node` into `op`. The XML tree passed through the `node`
     * argument must correspond to an XML tree saved using gda_server_operation_save_data_to_xml().
     * @param node a #xmlNodePtr
     */
    load_data_from_xml(node: libxml2.NodePtr): boolean
    /**
     * Creates a new database using the specifications in `op`. `op` can be obtained using
     * gda_server_provider_create_operation(), or gda_server_operation_prepare_create_database().
     * @param provider the database provider to use, or %NULL if `op` has been created using gda_server_operation_prepare_create_database()
     */
    perform_create_database(provider: string | null): boolean
    /**
     * Performs a prepared #GdaServerOperation to create a table. This could perform
     * an operation created by #gda_server_operation_prepare_create_table or any other using the
     * the #GdaServerOperation API.
     */
    perform_create_table(): boolean
    /**
     * Destroys an existing database using the specifications in `op`. `op` can be obtained using
     * gda_server_provider_create_operation(), or gda_server_operation_prepare_drop_database().
     * @param provider the database provider to use, or %NULL if `op` has been created using gda_server_operation_prepare_drop_database()
     */
    perform_drop_database(provider: string | null): boolean
    /**
     * This is just a convenient function to perform a drop a table operation.
     */
    perform_drop_table(): boolean
    /**
     * Set the value for the node at the path formed using `path_format` and the ... ellipse (the rules are the same as
     * for g_strdup_printf()).
     * 
     * Note that trying to set a value for a path which is not used by the current
     * provider, such as "/TABLE_OPTIONS_P/TABLE_ENGINE" for a PostgreSQL connection (this option is only supported for MySQL),
     * will <emphasis>not</emphasis> generate
     * any error; this allows one to give values to a superset of the parameters and thus use the same code for several providers.
     * 
     * Here are the possible formats of `path_format:`
     * <itemizedlist>
     *  <listitem><para>If the path corresponds to a #GdaHolder, then the parameter is set to <![CDATA["`value"`]]></para></listitem>
     *  <listitem><para>If the path corresponds to a sequence item like for example "/SEQUENCE_NAME/5/NAME" for
     *     the "NAME" value of the 6th item of the "SEQUENCE_NAME" sequence then:
     *     <itemizedlist>
     *        <listitem><para>if the sequence already has 6 or more items, then the value is just set to the corresponding
     *           value in the 6th item of the sequence</para></listitem>
     *        <listitem><para>if the sequence has less then 6 items, then items are added up to the 6th one before setting
     *           the value to the corresponding in the 6th item of the sequence</para></listitem>
     *     </itemizedlist>
     *  </para></listitem>
     *  <listitem><para>If the path corresponds to a #GdaDataModel, like for example "/ARRAY/`@`COLUMN/5" for the value at the
     *     6th row of the "COLUMN" column of the "ARRAY" data model, then:
     *     <itemizedlist>
     *        <listitem><para>if the data model already contains 6 or more rows, then the value is just set</para></listitem>
     *        <listitem><para>if the data model has less than 6 rows, then rows are added up to the 6th one before setting
     *           the value</para></listitem>
     *     </itemizedlist>
     *  </para></listitem>
     * </itemizedlist>
     * @param value a string
     * @param path a complete path to a node (starting with "/")
     */
    set_value_at(value: string | null, path: string): boolean

    // Own virtual methods of Gda-5.0.Gda.ServerOperation

    vfunc_seq_item_added(seq_path: string, item_index: number): void
    vfunc_seq_item_remove(seq_path: string, item_index: number): void

    // Own signals of Gda-5.0.Gda.ServerOperation

    connect(sigName: "sequence-item-added", callback: ServerOperation_SequenceItemAddedSignalCallback): number
    connect_after(sigName: "sequence-item-added", callback: ServerOperation_SequenceItemAddedSignalCallback): number
    emit(sigName: "sequence-item-added", seq_path: string, item_index: number, ...args: any[]): void
    connect(sigName: "sequence-item-remove", callback: ServerOperation_SequenceItemRemoveSignalCallback): number
    connect_after(sigName: "sequence-item-remove", callback: ServerOperation_SequenceItemRemoveSignalCallback): number
    emit(sigName: "sequence-item-remove", seq_path: string, item_index: number, ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.ServerOperation

    connect(sigName: "notify::connection", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::op-type", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::op-type", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::op-type", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::spec-filename", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spec-filename", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spec-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServerOperation extends GObject.Object {

    // Own properties of Gda-5.0.Gda.ServerOperation

    static name: string
    static $gtype: GObject.GType<ServerOperation>

    // Constructors of Gda-5.0.Gda.ServerOperation

    constructor(config?: ServerOperation_ConstructProps) 
    /**
     * IMPORTANT NOTE: Using this funtion is not the recommended way of creating a #GdaServerOperation object, the
     * correct way is to use gda_server_provider_create_operation(); this method is reserved for the database provider's
     * implementation.
     * 
     * Creates a new #GdaServerOperation object from the `xml_file` specifications
     * 
     * The `xml_file` must respect the DTD described in the "libgda-server-operation.dtd" file: its top
     * node must be a &lt;serv_op&gt; tag.
     * @constructor 
     * @param op_type type of operation
     * @param xml_file a file which has the specifications for the GdaServerOperation object to create
     */
    constructor(op_type: ServerOperationType, xml_file: string) 
    /**
     * IMPORTANT NOTE: Using this funtion is not the recommended way of creating a #GdaServerOperation object, the
     * correct way is to use gda_server_provider_create_operation(); this method is reserved for the database provider's
     * implementation.
     * 
     * Creates a new #GdaServerOperation object from the `xml_file` specifications
     * 
     * The `xml_file` must respect the DTD described in the "libgda-server-operation.dtd" file: its top
     * node must be a &lt;serv_op&gt; tag.
     * @constructor 
     * @param op_type type of operation
     * @param xml_file a file which has the specifications for the GdaServerOperation object to create
     */
    static new(op_type: ServerOperationType, xml_file: string): ServerOperation
    _init(config?: ServerOperation_ConstructProps): void
    static error_quark(): GLib.Quark
    /**
     * Get a string version of `type`
     * @param type a #GdaServerOperationType value
     */
    static op_type_to_string(type: ServerOperationType): string
    /**
     * Creates a new #GdaServerOperation object which contains the specifications required
     * to create a database. Once these specifications provided, use
     * gda_server_operation_perform_create_database() to perform the database creation.
     * 
     * If `db_name` is left %NULL, then the name of the database to create will have to be set in the
     * returned #GdaServerOperation using gda_server_operation_set_value_at().
     * @param provider the database provider to use
     * @param db_name the name of the database to create, or %NULL
     */
    static prepare_create_database(provider: string, db_name: string | null): ServerOperation | null
    /**
     * Creates a new #GdaServerOperation object which contains the specifications required
     * to drop a database. Once these specifications provided, use
     * gda_server_operation_perform_drop_database() to perform the database creation.
     * 
     * If `db_name` is left %NULL, then the name of the database to drop will have to be set in the
     * returned #GdaServerOperation using gda_server_operation_set_value_at().
     * @param provider the database provider to use
     * @param db_name the name of the database to drop, or %NULL
     */
    static prepare_drop_database(provider: string, db_name: string | null): ServerOperation | null
    /**
     * This is just a convenient function to create a #GdaServerOperation to drop a
     * table in an opened connection.
     * @param cnc an opened connection
     * @param table_name name of the table to drop
     */
    static prepare_drop_table(cnc: Connection, table_name: string): ServerOperation | null
    /**
     * Performs the reverse of gda_server_operation_op_type_to_string()
     * @param str a string
     */
    static string_to_op_type(str: string): ServerOperationType
}

interface ServerProvider_ConstructProps extends GObject.Object_ConstructProps {
}

interface ServerProvider {

    // Own fields of Gda-5.0.Gda.ServerProvider

    object: GObject.Object
    priv: ServerProviderPrivate

    // Owm methods of Gda-5.0.Gda.ServerProvider

    /**
     * Creates a new #GdaServerOperation object which can be modified in order to perform the `type` type of
     * action. The `options` can contain:
     * <itemizedlist>
     *  <listitem>named values which ID is a path in the resulting GdaServerOperation object, to initialize some value</listitem>
     *  <listitem>named values which may change the contents of the GdaServerOperation, see <link linkend="gda-server-op-information-std">this section</link> for more information</listitem>
     * </itemizedlist>
     * @param cnc a #GdaConnection object which will be used to perform an action, or %NULL
     * @param type the type of operation requested
     * @param options a list of parameters or %NULL
     */
    create_operation(cnc: Connection | null, type: ServerOperationType, options: Set | null): ServerOperation | null
    /**
     * Creates a new #GdaSqlParser object which is adapted to `provider` (and possibly depending on
     * `cnc` for the actual database version).
     * 
     * If `prov` does not have its own parser, then %NULL is returned, and a general SQL parser can be obtained
     * using gda_sql_parser_new().
     * @param cnc a #GdaConnection, or %NULL
     */
    create_parser(cnc: Connection | null): SqlParser
    /**
     * Escapes `str` for use within an SQL command (to avoid SQL injection attacks). Note that the returned value still needs
     * to be enclosed in single quotes before being used in an SQL statement.
     * @param cnc a #GdaConnection object, or %NULL
     * @param str a string to escape
     */
    escape_string(cnc: Connection | null, str: string): string
    /**
     * Finds the location of a `filename`. This function should only be used by database provider's
     * implementations
     * @param inst_dir directory where `prov` is installed
     * @param filename name of the file to find
     */
    find_file(inst_dir: string, filename: string): string
    /**
     * Find a #GdaDataHandler object to manipulate data of type `for_type`.
     * 
     * Note: this function is currently very poorly implemented by database providers.
     * @param cnc a #GdaConnection object, or %NULL
     * @param for_type a DBMS type definition
     */
    get_data_handler_dbms(cnc: Connection | null, for_type: string): DataHandler
    /**
     * Provides the implementation when the default Libgda's data handlers must be used
     * @param cnc a #GdaConnection object, or %NULL
     * @param type a #GType
     * @param dbms_type a DBMS type definition
     */
    get_data_handler_default(cnc: Connection | null, type: GObject.GType, dbms_type: string): DataHandler
    /**
     * Find a #GdaDataHandler object to manipulate data of type `for_type`. The returned object must not be modified.
     * @param cnc a #GdaConnection object, or %NULL
     * @param for_type a #GType
     */
    get_data_handler_g_type(cnc: Connection | null, for_type: GObject.GType): DataHandler
    /**
     * Get the name of the most common data type which has `type` type.
     * 
     * The returned value may be %NULL either if the provider does not implement that method, or if
     * there is no DBMS data type which could contain data of the `g_type` type (for example %NULL may be
     * returned if a DBMS has integers only up to 4 bytes and a #G_TYPE_INT64 is requested).
     * @param cnc a #GdaConnection object or %NULL
     * @param type a #GType value type
     */
    get_default_dbms_type(cnc: Connection | null, type: GObject.GType): string | null
    /**
     * Get the name (identifier) of the provider
     */
    get_name(): string
    /**
     * Get the version of the database to which the connection is opened.
     * @param cnc a #GdaConnection object
     */
    get_server_version(cnc: Connection): string
    /**
     * Get the version of the provider.
     */
    get_version(): string
    handler_declare(dh: DataHandler, cnc: Connection, g_type: GObject.GType, dbms_type: string): void
    /**
     * Reserved to database provider's implementations: get the #GdaDataHandler associated to `prov`
     * for connection `cnc`. You probably want to use gda_server_provider_get_data_handler_g_type().
     * @param cnc a #GdaConnection
     * @param g_type a #GType
     * @param dbms_type a database type
     */
    handler_find(cnc: Connection | null, g_type: GObject.GType, dbms_type: string | null): DataHandler
    /**
     * This is a factory method to get a unique instance of a #GdaSqlParser object
     * for each #GdaServerProvider object
     * Don't unref it.
     */
    internal_get_parser(): SqlParser
    /**
     * Performs the operation described by `op`. Note that `op` is not destroyed by this method
     * and can be reused.
     * @param cnc a #GdaConnection object which will be used to perform the action, or %NULL
     * @param op a #GdaServerOperation object
     */
    perform_operation(cnc: Connection | null, op: ServerOperation): boolean
    /**
     * Performs the operation described by `op,` using the SQL from the rendering of the operation
     * @param cnc a #GdaConnection object which will be used to perform an action, or %NULL
     * @param op a #GdaServerOperation object
     */
    perform_operation_default(cnc: Connection | null, op: ServerOperation): boolean
    /**
     * Creates an SQL statement (possibly using some specific extensions of the DBMS) corresponding to the
     * `op` operation. Note that the returned string may actually contain more than one SQL statement.
     * 
     * This function's purpose is mainly informative to get the actual SQL code which would be executed to perform
     * the operation; to actually perform the operation, use gda_server_provider_perform_operation().
     * @param cnc a #GdaConnection object which will be used to render the action, or %NULL
     * @param op a #GdaServerOperation object
     */
    render_operation(cnc: Connection | null, op: ServerOperation): string | null
    /**
     * Use `provider` to create a new #GValue from a single string representation.
     * 
     * The `preferred_type` can optionally ask `provider` to return a #GValue of the requested type
     * (but if such a value can't be created from `string,` then %NULL is returned);
     * pass #G_TYPE_INVALID if any returned type is acceptable.
     * 
     * The returned value is either a new #GValue or %NULL in the following cases:
     * - `string` cannot be converted to `preferred_type` type
     * - the provider does not handle `preferred_type`
     * - the provider could not make a #GValue from `string`
     * 
     * If `dbms_type` is not %NULL, then if will contain a constant string representing
     * the database type used for the conversion if the conversion was successfull, or %NULL
     * otherwise.
     * @param cnc a #GdaConnection object, or %NULL
     * @param string the SQL string to convert to a value
     * @param preferred_type a #GType, or #G_TYPE_INVALID
     * @param dbms_type place to get the actual database type used if the conversion succeeded, or %NULL
     */
    string_to_value(cnc: Connection | null, string: string, preferred_type: GObject.GType, dbms_type: string | null): any
    /**
     * Tests if a feature is supported
     * @param cnc a #GdaConnection object, or %NULL
     * @param feature #GdaConnectionFeature feature to test
     */
    supports_feature(cnc: Connection | null, feature: ConnectionFeature): boolean
    /**
     * Tells if `provider` supports the `type` of operation on the `cnc` connection, using the
     * (optional) `options` parameters.
     * @param cnc a #GdaConnection object which would be used to perform an action, or %NULL
     * @param type the type of operation requested
     * @param options a list of named parameters, or %NULL
     */
    supports_operation(cnc: Connection | null, type: ServerOperationType, options: Set | null): boolean
    /**
     * Unescapes `str` for use within an SQL command. This is the exact opposite of gda_server_provider_escape_string().
     * @param cnc a #GdaConnection object, or %NULL
     * @param str a string to escape
     */
    unescape_string(cnc: Connection | null, str: string): string
    /**
     * Produces a fully quoted and escaped string from a GValue
     * @param cnc a #GdaConnection object, or %NULL
     * @param from #GValue to convert from
     */
    value_to_sql_string(cnc: Connection | null, from: any): string

    // Own virtual methods of Gda-5.0.Gda.ServerProvider

    vfunc_add_savepoint(cnc: Connection, name: string): boolean
    vfunc_begin_transaction(cnc: Connection, name: string, level: TransactionIsolation): boolean
    vfunc_cancel(cnc: Connection, task_id: number): boolean
    vfunc_close_connection(cnc: Connection): boolean
    vfunc_commit_transaction(cnc: Connection, name: string): boolean
    /**
     * Creates a new #GdaServerOperation object which can be modified in order to perform the `type` type of
     * action. The `options` can contain:
     * <itemizedlist>
     *  <listitem>named values which ID is a path in the resulting GdaServerOperation object, to initialize some value</listitem>
     *  <listitem>named values which may change the contents of the GdaServerOperation, see <link linkend="gda-server-op-information-std">this section</link> for more information</listitem>
     * </itemizedlist>
     * @virtual 
     * @param cnc a #GdaConnection object which will be used to perform an action, or %NULL
     * @param type the type of operation requested
     * @param options a list of parameters or %NULL
     */
    vfunc_create_operation(cnc: Connection | null, type: ServerOperationType, options: Set | null): ServerOperation | null
    /**
     * Creates a new #GdaSqlParser object which is adapted to `provider` (and possibly depending on
     * `cnc` for the actual database version).
     * 
     * If `prov` does not have its own parser, then %NULL is returned, and a general SQL parser can be obtained
     * using gda_sql_parser_new().
     * @virtual 
     * @param cnc a #GdaConnection, or %NULL
     */
    vfunc_create_parser(cnc: Connection | null): SqlParser
    vfunc_delete_savepoint(cnc: Connection, name: string): boolean
    /**
     * Escapes `str` for use within an SQL command (to avoid SQL injection attacks). Note that the returned value still needs
     * to be enclosed in single quotes before being used in an SQL statement.
     * @virtual 
     * @param cnc a #GdaConnection object, or %NULL
     * @param str a string to escape
     */
    vfunc_escape_string(cnc: Connection | null, str: string): string
    vfunc_get_database(cnc: Connection): string
    vfunc_get_def_dbms_type(cnc: Connection, g_type: GObject.GType): string
    /**
     * Get the name (identifier) of the provider
     * @virtual 
     */
    vfunc_get_name(): string
    /**
     * Get the version of the database to which the connection is opened.
     * @virtual 
     * @param cnc a #GdaConnection object
     */
    vfunc_get_server_version(cnc: Connection): string
    /**
     * Get the version of the provider.
     * @virtual 
     */
    vfunc_get_version(): string
    vfunc_handle_async(cnc: Connection): boolean
    vfunc_identifier_quote(cnc: Connection, id: string, for_meta_store: boolean, force_quotes: boolean): string
    vfunc_is_busy(cnc: Connection): boolean
    /**
     * Creates an SQL statement (possibly using some specific extensions of the DBMS) corresponding to the
     * `op` operation. Note that the returned string may actually contain more than one SQL statement.
     * 
     * This function's purpose is mainly informative to get the actual SQL code which would be executed to perform
     * the operation; to actually perform the operation, use gda_server_provider_perform_operation().
     * @virtual 
     * @param cnc a #GdaConnection object which will be used to render the action, or %NULL
     * @param op a #GdaServerOperation object
     */
    vfunc_render_operation(cnc: Connection | null, op: ServerOperation): string | null
    vfunc_rollback_savepoint(cnc: Connection, name: string): boolean
    vfunc_rollback_transaction(cnc: Connection, name: string): boolean
    vfunc_statement_prepare(cnc: Connection, stmt: Statement): boolean
    /**
     * Tests if a feature is supported
     * @virtual 
     * @param cnc a #GdaConnection object, or %NULL
     * @param feature #GdaConnectionFeature feature to test
     */
    vfunc_supports_feature(cnc: Connection | null, feature: ConnectionFeature): boolean
    /**
     * Tells if `provider` supports the `type` of operation on the `cnc` connection, using the
     * (optional) `options` parameters.
     * @virtual 
     * @param cnc a #GdaConnection object which would be used to perform an action, or %NULL
     * @param type the type of operation requested
     * @param options a list of named parameters, or %NULL
     */
    vfunc_supports_operation(cnc: Connection | null, type: ServerOperationType, options: Set | null): boolean
    /**
     * Unescapes `str` for use within an SQL command. This is the exact opposite of gda_server_provider_escape_string().
     * @virtual 
     * @param cnc a #GdaConnection object, or %NULL
     * @param str a string to escape
     */
    vfunc_unescape_string(cnc: Connection | null, str: string): string

    // Class property signals of Gda-5.0.Gda.ServerProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServerProvider extends GObject.Object {

    // Own properties of Gda-5.0.Gda.ServerProvider

    static name: string
    static $gtype: GObject.GType<ServerProvider>

    // Constructors of Gda-5.0.Gda.ServerProvider

    constructor(config?: ServerProvider_ConstructProps) 
    _init(config?: ServerProvider_ConstructProps): void
    static error_quark(): GLib.Quark
    /**
     * Loads and returns the contents of `filename,` which is searched in several places
     * This function should only be used by database provider's
     * implementations
     * @param inst_dir directory where the database provider has been installed
     * @param data_dir DATA directory to look for ($prefix/share)
     * @param filename name of the file to load
     */
    static load_file_contents(inst_dir: string, data_dir: string, filename: string): string
}

interface Set_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.Set

    description?: string | null
    holders?: object | null
    id?: string | null
    name?: string | null
    /**
     * Defines if the "validate-set" signal gets emitted when
     * any holder in the data set changes. This property also affects the
     * GdaHolder:validate-changes property.
     */
    validate_changes?: boolean | null
}

/**
 * Signal callback interface for `holder-attr-changed`
 */
interface Set_HolderAttrChangedSignalCallback {
    ($obj: Set, holder: Holder, attr_name: string, attr_value: any): void
}

/**
 * Signal callback interface for `holder-changed`
 */
interface Set_HolderChangedSignalCallback {
    ($obj: Set, object: Holder): void
}

/**
 * Signal callback interface for `holder-type-set`
 */
interface Set_HolderTypeSetSignalCallback {
    ($obj: Set, holder: Holder): void
}

/**
 * Signal callback interface for `public-data-changed`
 */
interface Set_PublicDataChangedSignalCallback {
    ($obj: Set): void
}

/**
 * Signal callback interface for `source-model-changed`
 */
interface Set_SourceModelChangedSignalCallback {
    ($obj: Set, source: object | null): void
}

/**
 * Signal callback interface for `validate-holder-change`
 */
interface Set_ValidateHolderChangeSignalCallback {
    ($obj: Set, holder: Holder, new_value: any): GLib.Error
}

/**
 * Signal callback interface for `validate-set`
 */
interface Set_ValidateSetSignalCallback {
    ($obj: Set): GLib.Error
}

interface Set {

    // Own properties of Gda-5.0.Gda.Set

    description: string
    id: string
    name: string
    /**
     * Defines if the "validate-set" signal gets emitted when
     * any holder in the data set changes. This property also affects the
     * GdaHolder:validate-changes property.
     */
    validate_changes: boolean

    // Own fields of Gda-5.0.Gda.Set

    object: GObject.Object
    priv: SetPrivate
    /**
     * list of GdaHolder objects
     * @field 
     */
    holders: Holder[]
    /**
     * list of GdaSetNode
     * @field 
     */
    nodes_list: SetNode[]
    /**
     * list of GdaSetSource
     * @field 
     */
    sources_list: SetSource[]
    /**
     * list of GdaSetGroup
     * @field 
     */
    groups_list: SetGroup[]

    // Owm methods of Gda-5.0.Gda.Set

    /**
     * Adds `holder` to the list of holders managed within `set`.
     * 
     * NOTE: if `set` already has a #GdaHolder with the same ID as `holder,` then `holder`
     * will not be added to the set (even if `holder'`s type or value is not the same as the
     * one already in `set)`.
     * @param holder a #GdaHolder object
     */
    add_holder(holder: Holder): boolean
    /**
     * Creates a new #GdaSet object, copy of `set`
     */
    copy(): Set
    /**
     * Finds a #GdaSetGroup which lists a  #GdaSetNode containing `holder,`
     * don't modify the returned structure.
     * @param holder a #GdaHolder object
     */
    get_group(holder: Holder): SetGroup
    /**
     * Finds a #GdaHolder using its ID
     * @param holder_id the ID of the requested value holder
     */
    get_holder(holder_id: string): Holder
    /**
     * Get the value of the #GdaHolder which ID is `holder_id`
     * @param holder_id the ID of the holder to set the value
     */
    get_holder_value(holder_id: string): any | null
    /**
     * Finds a #GdaSetNode holding information for `holder,` don't modify the returned structure
     * @param holder a #GdaHolder object
     */
    get_node(holder: Holder): SetNode
    /**
     * Finds a #GdaHolder using its position
     * @param pos the position of the requested #GdaHolder, starting at %0
     */
    get_nth_holder(pos: number): Holder
    /**
     * Finds a #GdaSetSource which contains the #GdaDataModel restricting the possible values of
     * `holder,` don't modify the returned structure.
     * @param holder a #GdaHolder object
     */
    get_source(holder: Holder): SetSource
    /**
     * Finds the #GdaSetSource structure used in `set` for which `model` is a
     * the data model (the returned structure should not be modified).
     * @param model a #GdaDataModel object
     */
    get_source_for_model(model: DataModel): SetSource
    /**
     * This method tells if all `set'`s #GdaHolder objects are valid, and if
     * they represent a valid combination of values, as defined by rules
     * external to Libgda: the "validate-set" signal is emitted and if none of the signal handlers return an
     * error, then the returned value is TRUE, otherwise the return value is FALSE as soon as a signal handler
     * returns an error.
     */
    is_valid(): boolean
    /**
     * Add to `set` all the holders of `set_to_merge`.
     * Note1: only the #GdaHolder of `set_to_merge` for which no holder in `set` has the same ID are merged
     * Note2: all the #GdaHolder merged in `set` are still used by `set_to_merge`.
     * @param set_to_merge a #GdaSet object
     */
    merge_with_set(set_to_merge: Set): void
    /**
     * Removes a #GdaHolder from the list of holders managed by `set`
     * @param holder the #GdaHolder to remove from `set`
     */
    remove_holder(holder: Holder): void
    /**
     * Replaces `source->`data_model with `model,` which must have the same
     * characteristics as `source->`data_model (same column types)
     * 
     * Also for each #GdaHolder for which `source->`data_model is a source model,
     * this method calls gda_holder_set_source_model() with `model` to replace
     * the source by the new model
     * @param source a pointer to a #GdaSetSource in `set`
     * @param model a #GdaDataModel
     */
    replace_source_model(source: SetSource, model: DataModel): void

    // Own virtual methods of Gda-5.0.Gda.Set

    vfunc_holder_attr_changed(holder: Holder, attr_name: string, attr_value: any): void
    vfunc_holder_changed(holder: Holder): void
    vfunc_holder_type_set(holder: Holder): void
    vfunc_public_data_changed(): void
    vfunc_source_model_changed(source: SetSource): void
    vfunc_validate_holder_change(holder: Holder, new_value: any): GLib.Error
    vfunc_validate_set(): GLib.Error

    // Own signals of Gda-5.0.Gda.Set

    connect(sigName: "holder-attr-changed", callback: Set_HolderAttrChangedSignalCallback): number
    connect_after(sigName: "holder-attr-changed", callback: Set_HolderAttrChangedSignalCallback): number
    emit(sigName: "holder-attr-changed", holder: Holder, attr_name: string, attr_value: any, ...args: any[]): void
    connect(sigName: "holder-changed", callback: Set_HolderChangedSignalCallback): number
    connect_after(sigName: "holder-changed", callback: Set_HolderChangedSignalCallback): number
    emit(sigName: "holder-changed", object: Holder, ...args: any[]): void
    connect(sigName: "holder-type-set", callback: Set_HolderTypeSetSignalCallback): number
    connect_after(sigName: "holder-type-set", callback: Set_HolderTypeSetSignalCallback): number
    emit(sigName: "holder-type-set", holder: Holder, ...args: any[]): void
    connect(sigName: "public-data-changed", callback: Set_PublicDataChangedSignalCallback): number
    connect_after(sigName: "public-data-changed", callback: Set_PublicDataChangedSignalCallback): number
    emit(sigName: "public-data-changed", ...args: any[]): void
    connect(sigName: "source-model-changed", callback: Set_SourceModelChangedSignalCallback): number
    connect_after(sigName: "source-model-changed", callback: Set_SourceModelChangedSignalCallback): number
    emit(sigName: "source-model-changed", source: object | null, ...args: any[]): void
    connect(sigName: "validate-holder-change", callback: Set_ValidateHolderChangeSignalCallback): number
    connect_after(sigName: "validate-holder-change", callback: Set_ValidateHolderChangeSignalCallback): number
    emit(sigName: "validate-holder-change", holder: Holder, new_value: any, ...args: any[]): void
    connect(sigName: "validate-set", callback: Set_ValidateSetSignalCallback): number
    connect_after(sigName: "validate-set", callback: Set_ValidateSetSignalCallback): number
    emit(sigName: "validate-set", ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.Set

    connect(sigName: "notify::description", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::validate-changes", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::validate-changes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Set extends GObject.Object {

    // Own properties of Gda-5.0.Gda.Set

    static name: string
    static $gtype: GObject.GType<Set>

    // Constructors of Gda-5.0.Gda.Set

    constructor(config?: Set_ConstructProps) 
    /**
     * Creates a new #GdaSet object, and populates it with the list given as argument.
     * The list can then be freed as it is copied. All the value holders in `holders` are referenced counted
     * and modified, so they should not be used anymore afterwards.
     * @constructor 
     * @param holders a list of #GdaHolder objects
     */
    constructor(holders: Holder[]) 
    /**
     * Creates a new #GdaSet object, and populates it with the list given as argument.
     * The list can then be freed as it is copied. All the value holders in `holders` are referenced counted
     * and modified, so they should not be used anymore afterwards.
     * @constructor 
     * @param holders a list of #GdaHolder objects
     */
    static new(holders: Holder[]): Set
    /**
     * Creates a new #GdaSet object from the `xml_spec`
     * specifications
     * @constructor 
     * @param xml_spec a #xmlNodePtr for a &lt;parameters&gt; tag
     */
    static new_from_spec_node(xml_spec: libxml2.NodePtr): Set
    /**
     * Creates a new #GdaSet object from the `xml_spec`
     * specifications
     * @constructor 
     * @param xml_spec a string
     */
    static new_from_spec_string(xml_spec: string): Set
    /**
     * Creates a new #GdaSet like gda_set_new(), but does not allow modifications to any of the #GdaHolder
     * object in `holders`. This function is used for Libgda's database providers' implementation.
     * @constructor 
     * @param holders a list of #GdaHolder objects
     */
    static new_read_only(holders: Holder[]): Set
    _init(config?: Set_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Short {
}

class Short {

    // Own properties of Gda-5.0.Gda.Short

    static name: string
}

interface SqlBuilder_ConstructProps extends GObject.Object_ConstructProps {
}

interface SqlBuilder {

    // Own fields of Gda-5.0.Gda.SqlBuilder

    object: GObject.Object
    priv: SqlBuilderPrivate

    // Owm methods of Gda-5.0.Gda.SqlBuilder

    /**
     * Creates a new CASE ... WHEN ... THEN ... ELSE ... END expression. The WHEN expression and the THEN
     * expression IDs are taken from the `when_array` and `then_array` at the same index, for each index inferior to
     * `args_size`.
     * @param test_expr the expression ID representing the test of the CASE, or %0
     * @param else_expr the expression ID representing the ELSE expression, or %0
     * @param when_array an array containing each WHEN expression ID, having at least `args_size` elements
     * @param then_array an array containing each THEN expression ID, having at least `args_size` elements
     */
    add_case(test_expr: SqlBuilderId, else_expr: SqlBuilderId, when_array: SqlBuilderId[], then_array: SqlBuilderId[]): SqlBuilderId
    /**
     * Builds a new expression which represents a condition (or operation).
     * @param op type of condition
     * @param op1 the ID of the 1st argument (not 0)
     * @param op2 the ID of the 2nd argument (may be %0 if `op` needs only one operand)
     * @param op3 the ID of the 3rd argument (may be %0 if `op` needs only one or two operand)
     */
    add_cond(op: SqlOperatorType, op1: SqlBuilderId, op2: SqlBuilderId, op3: SqlBuilderId): SqlBuilderId
    /**
     * Builds a new expression which represents a condition (or operation).
     * 
     * As a side case, if `ops_ids_size` is 1,
     * then `op` is ignored, and the returned ID represents `op_ids[`0] (this avoids any problem for example
     * when `op` is GDA_SQL_OPERATOR_TYPE_AND and there is in fact only one operand).
     * @param op type of condition
     * @param op_ids an array of ID for the arguments (not %0)
     */
    add_cond_v(op: SqlOperatorType, op_ids: SqlBuilderId[]): SqlBuilderId
    /**
     * Defines an expression in `builder` which may be reused to build other parts of a statement.
     * 
     * The new expression will contain the value passed as the `value` argument.
     * 
     * If `value'`s type is a string then it is possible to customize how the value has to be interpreted by passing a
     * specific #GdaDataHandler object as `dh`. This feature is very rarely used and the `dh` argument should generally
     * be %NULL.
     * @param dh deprecated useless argument, just pass %NULL
     * @param value value to set the expression to, or %NULL or a GDA_TYPE_NULL value to represent an SQL NULL
     */
    add_expr_value(dh: DataHandler | null, value: any | null): SqlBuilderId
    /**
     * Defines an expression representing a field in `builder,`
     * which may be reused to build other parts of a statement,
     * for instance as a parameter to gda_sql_builder_add_cond() or
     * gda_sql_builder_add_field_value_id().
     * 
     * Calling this with a %NULL `table_name` is equivalent to calling gda_sql_builder_add_id().
     * 
     * For SELECT queries, see gda_sql_builder_select_add_field().
     * @param field_name a field name
     * @param table_name a table name, or %NULL
     */
    add_field_id(field_name: string, table_name: string | null): SqlBuilderId
    /**
     * Valid only for: INSERT, UPDATE statements.
     * 
     * Specifies that the field represented by `field_name` will be set to the value identified
     * by `value`
     * @param field_name a field name
     * @param value value to set the field to, or %NULL or a GDA_TYPE_NULL value to represent an SQL NULL
     */
    add_field_value_as_gvalue(field_name: string, value: any | null): void
    /**
     * Valid only for: INSERT, UPDATE, SELECT statements
     * <itemizedlist>
     * <listitem><para>For UPDATE: specifies that the field represented by `field_id` will be set to the value identified
     *    by `value_id`.</para></listitem>
     * <listitem><para>For SELECT: add a selected item to the statement, and if `value_id` is not %0, then use it as an
     *    alias</para></listitem>
     * <listitem><para>For INSERT: if `field_id` represents an SQL identifier (obtained using gda_sql_builder_add_id()): then if
     *    `value_id` is not %0 then specifies that the field represented by `field_id` will be set to the
     *    value identified by `value_id,` otherwise just specifies a named field to be given a value.
     *    If `field_id` represents a sub SELECT (obtained using gda_sql_builder_add_sub_select()), then
     *    this method call defines the sub SELECT from which values to insert are taken.</para></listitem>
     * </itemizedlist>
     * 
     * See also gda_sql_builder_add_field_value() and gda_sql_builder_add_field_value_as_gvalue().
     * @param field_id the ID of the field's name or definition
     * @param value_id the ID of the value to set the field to, or %0
     */
    add_field_value_id(field_id: SqlBuilderId, value_id: SqlBuilderId): void
    /**
     * Builds a new expression which represents a function applied to some arguments
     * @param func_name the functions's name
     * @param args an array of IDs representing the function's arguments
     */
    add_function(func_name: string, args: SqlBuilderId[]): SqlBuilderId
    /**
     * Defines an expression representing an identifier in `builder,`
     * which may be reused to build other parts of a statement,
     * for instance as a parameter to gda_sql_builder_add_cond() or
     * gda_sql_builder_add_field_value_id().
     * 
     * The new expression will contain the `str` literal.
     * For example:
     * <programlisting>
     * gda_sql_builder_add_id (b, "name")
     * gda_sql_builder_add_id (b, "date")
     * </programlisting>
     * 
     * will be rendered as SQL as:
     * <programlisting>
     * name
     * "date"
     * </programlisting>
     * 
     * because "date" is an SQL reserved keyword.
     * 
     * For fields, see gda_sql_builder_add_field_id().
     * @param str a string
     */
    add_id(str: string): SqlBuilderId
    /**
     * Defines a parameter in `builder` which may be reused to build other parts of a statement.
     * 
     * The new expression will contain the `string` literal.
     * For example:
     * <programlisting>
     * gda_sql_builder_add_param (b, "age", G_TYPE_INT, FALSE)
     * </programlisting>
     * 
     * will be rendered as SQL as:
     * <programlisting><![CDATA[
     * ##age::int
     * ]]>
     * </programlisting>
     * @param param_name parameter's name
     * @param type parameter's type
     * @param nullok TRUE if the parameter can be set to %NULL
     */
    add_param(param_name: string, type: GObject.GType, nullok: boolean): SqlBuilderId
    /**
     * Add a sub select to a COMPOUND statement
     * @param subselect a #GdaSqlBuilder, which has to be a SELECT or compound SELECT. This will be copied.
     */
    compound_add_sub_select_from_builder(subselect: SqlBuilder): void
    /**
     * Changes the type of compound which `builder` is making, for a COMPOUND statement
     * @param compound_type a type of compound
     */
    compound_set_type(compound_type: SqlStatementCompoundType): void
    /**
     * Creates a new #GdaStatement statement from `builder'`s contents.
     */
    get_statement(): Statement
    /**
     * Imports the an expression located in `query` into `builder`.
     * @param query a #GdaSqlBuilder object to get expression from
     * @param expr_id a #GdaSqlBuilderId of the expression in `query`
     */
    import_expression_from_builder(query: SqlBuilder, expr_id: SqlBuilderId): SqlBuilderId
    /**
     * Alter a join in a SELECT statement to make its condition use equal field
     * values in the fields named `field_name` in both tables, via the USING keyword.
     * @param join_id the ID of the join to modify (not %0)
     * @param field_name the name of the field to use in the join condition (not %NULL)
     */
    join_add_field(join_id: SqlBuilderId, field_name: string): void
    /**
     * Valid only for: SELECT statements.
     * 
     * Add a selected selected item to the SELECT statement.
     * 
     * For non-SELECT statements, see gda_sql_builder_add_field_id().
     * @param field_name a field name
     * @param table_name a table name, or %NULL
     * @param alias an alias (eg. for the "AS" clause), or %NULL
     */
    select_add_field(field_name: string, table_name: string | null, alias: string | null): SqlBuilderId
    /**
     * Adds a new target to a SELECT statement
     * @param table_name the name of the target table
     * @param alias the alias to give to the target, or %NULL
     */
    select_add_target(table_name: string, alias: string | null): SqlBuilderId
    /**
     * Adds a new target to a SELECT statement. If there already exists a target representing
     * the same table and the same alias (or with the same absence of alias) then the same target
     * ID is returned instead of the ID of a new target.
     * @param table_id the ID of the expression holding a table reference (not %0)
     * @param alias the alias to give to the target, or %NULL
     */
    select_add_target_id(table_id: SqlBuilderId, alias: string | null): SqlBuilderId
    /**
     * Valid only for: SELECT statements
     * 
     * Adds the `expr_id` expression to the GROUP BY clause's expressions list
     * @param expr_id the ID of the expression to set use in the GROUP BY clause, or 0 to unset any previous GROUP BY clause
     */
    select_group_by(expr_id: SqlBuilderId): void
    /**
     * Adds a new ORDER BY expression to a SELECT statement.
     * @param expr_id the ID of the expression to use during sorting (not %0)
     * @param asc %TRUE for an ascending sorting
     * @param collation_name name of the collation to use when sorting, or %NULL
     */
    select_order_by(expr_id: SqlBuilderId, asc: boolean, collation_name: string | null): void
    /**
     * Defines (if `distinct` is %TRUE) or removes (if `distinct` is %FALSE) a DISTINCT clause
     * for a SELECT statement.
     * 
     * If `distinct` is %TRUE, then the ID of an expression can be specified as the `expr_id` argument:
     * if not %0, this is the expression used to apply the DISTINCT clause on (the resuting SQL
     * will then usually be "... DISTINCT ON &lt;expression&gt;...").
     * @param distinct set to %TRUE to have the DISTINCT requirement
     * @param expr_id the ID of the DISTINCT ON expression, or %0 if no expression is to be used. It is ignored           if `distinct` is %FALSE.
     */
    select_set_distinct(distinct: boolean, expr_id: SqlBuilderId): void
    /**
     * Valid only for: SELECT statements
     * 
     * Sets the HAVING condition of the statement
     * @param cond_id the ID of the expression to set as HAVING condition, or 0 to unset any previous HAVING condition
     */
    select_set_having(cond_id: SqlBuilderId): void
    /**
     * If `limit_count_expr_id` is not %0, defines the maximum number of rows in the #GdaDataModel
     * resulting from the execution of the built statement. In this case, the offset from which the
     * rows must be collected can be defined by the `limit_offset_expr_id` expression if not %0 (note that
     * this feature may not be supported by all the database providers).
     * 
     * If `limit_count_expr_id` is %0, then removes any LIMIT which may have been imposed by a previous
     * call to this method.
     * @param limit_count_expr_id the ID of the LIMIT expression, or %0
     * @param limit_offset_expr_id the ID of the OFFSET expression, or %0
     */
    select_set_limit(limit_count_expr_id: SqlBuilderId, limit_offset_expr_id: SqlBuilderId): void
    /**
     * Valid only for: INSERT, UPDATE, DELETE statements
     * 
     * Sets the name of the table on which the built statement operates.
     * @param table_name a table name
     */
    set_table(table_name: string): void
    /**
     * Valid only for: UPDATE, DELETE, SELECT statements
     * 
     * Sets the WHERE condition of the statement
     * @param cond_id the ID of the expression to set as WHERE condition, or 0 to unset any previous WHERE condition
     */
    set_where(cond_id: SqlBuilderId): void

    // Class property signals of Gda-5.0.Gda.SqlBuilder

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlBuilder extends GObject.Object {

    // Own properties of Gda-5.0.Gda.SqlBuilder

    static name: string
    static $gtype: GObject.GType<SqlBuilder>

    // Constructors of Gda-5.0.Gda.SqlBuilder

    constructor(config?: SqlBuilder_ConstructProps) 
    /**
     * Create a new #GdaSqlBuilder object to build #GdaStatement or #GdaSqlStatement
     * objects of type `stmt_type`
     * @constructor 
     * @param stmt_type the type of statement to build
     */
    constructor(stmt_type: SqlStatementType) 
    /**
     * Create a new #GdaSqlBuilder object to build #GdaStatement or #GdaSqlStatement
     * objects of type `stmt_type`
     * @constructor 
     * @param stmt_type the type of statement to build
     */
    static new(stmt_type: SqlStatementType): SqlBuilder
    _init(config?: SqlBuilder_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface SqlParser_ConstructProps extends Lockable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.SqlParser

    mode?: number | null
    tokenizer_flavour?: number | null
}

interface SqlParser extends Lockable {

    // Own properties of Gda-5.0.Gda.SqlParser

    readonly column_error: number
    readonly line_error: number
    mode: number
    tokenizer_flavour: number

    // Own fields of Gda-5.0.Gda.SqlParser

    object: GObject.Object
    priv: SqlParserPrivate

    // Owm methods of Gda-5.0.Gda.SqlParser

    /**
     * Parse `filename'`s contents and creates a #GdaBatch object which contains all the
     *  #GdaStatement objects created while parsing (one object per SQL statement).
     * 
     * `filename'`s contents are parsed and #GdaStatement objects are created as long as no error is found. If an error is found
     * at some point, then the parsing stops, `error` may be set and %NULL is returned
     * 
     * if `sql` is %NULL, then the returned #GdaBatch object will contain no statement.
     * @param filename name of the file to parse
     */
    parse_file_as_batch(filename: string): Batch | null
    /**
     * Parses `sql` and creates a #GdaStatement statement from the first SQL statement contained in `sql:` if `sql`
     * contains more than one statement, then the remaining part of the string is not parsed at all, and `remain` (if
     * not %NULL) will point at the first non parsed character.
     * 
     * To include variables in the `sql` string, see the
     * <link linkend="GdaSqlParser.description">GdaSqlParser's object description</link>.
     * @param sql the SQL string to parse
     */
    parse_string(sql: string): [ /* returnType */ Statement | null, /* remain */ string ]
    /**
     * Parse `sql` and creates a #GdaBatch object which contains all the #GdaStatement objects created while parsing (one object
     * per SQL statement). Empty statements (composed of spaces only) do not appear in the resulting object.
     * 
     * `sql` is parsed and #GdaStatement objects are created as long as no error is found in `sql`. If an error is found
     * at some point, then the parsing stops and `remain` may contain a non %NULL pointer, `error` may be set, and %NULL
     * is returned.
     * 
     * if `sql` is %NULL, then the returned #GdaBatch object will contain no statement.
     * 
     * To include variables in the `sql` string, see the
     * <link linkend="GdaSqlParser.description">GdaSqlParser's object description</link>.
     * @param sql the SQL string to parse
     */
    parse_string_as_batch(sql: string): [ /* returnType */ Batch | null, /* remain */ string ]
    set_overflow_error(): void
    set_syntax_error(): void

    // Class property signals of Gda-5.0.Gda.SqlParser

    connect(sigName: "notify::column-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-error", ...args: any[]): void
    connect(sigName: "notify::line-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-error", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::tokenizer-flavour", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tokenizer-flavour", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tokenizer-flavour", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SqlParser extends GObject.Object {

    // Own properties of Gda-5.0.Gda.SqlParser

    static name: string
    static $gtype: GObject.GType<SqlParser>

    // Constructors of Gda-5.0.Gda.SqlParser

    constructor(config?: SqlParser_ConstructProps) 
    /**
     * Creates a new #GdaSqlParser object
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdaSqlParser object
     * @constructor 
     */
    static new(): SqlParser
    _init(config?: SqlParser_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Statement_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.Statement

    structure?: object | null
}

/**
 * Signal callback interface for `checked`
 */
interface Statement_CheckedSignalCallback {
    ($obj: Statement, object: Connection, p0: boolean): void
}

/**
 * Signal callback interface for `reset`
 */
interface Statement_ResetSignalCallback {
    ($obj: Statement): void
}

interface Statement {

    // Own properties of Gda-5.0.Gda.Statement

    structure: object

    // Own fields of Gda-5.0.Gda.Statement

    object: GObject.Object
    priv: StatementPrivate

    // Owm methods of Gda-5.0.Gda.Statement

    /**
     * Checks that `stmt'`s structure is correct.
     */
    check_structure(): boolean
    /**
     * If `cnc` is not %NULL then checks that every object (table, field, function) used in `stmt`
     * actually exists in `cnc'`s database
     * 
     * If `cnc` is %NULL, then cleans anything related to `cnc` in `stmt`.
     * 
     * See gda_sql_statement_check_validity() for more information.
     * @param cnc a #GdaConnection object, or %NULL
     */
    check_validity(cnc: Connection | null): boolean
    /**
     * Copy constructor
     */
    copy(): Statement
    /**
     * Get a new #GdaSet object which groups all the execution parameters
     * which `stmt` needs. This new object is returned though `out_params`.
     * 
     * Note that if `stmt` does not need any parameter, then `out_params` is set to %NULL.
     */
    get_parameters(): [ /* returnType */ boolean, /* out_params */ Set ]
    /**
     * Get the type of statement held by `stmt`. It returns GDA_SQL_STATEMENT_NONE if
     * `stmt` does not hold any statement
     */
    get_statement_type(): SqlStatementType
    /**
     * Tells if `stmt` is composed only of spaces (that is it has no real SQL code), and is completely
     * useless as such.
     */
    is_useless(): boolean
    /**
     * "Normalizes" some parts of `stmt,` see gda_sql_statement_normalize() for more
     * information.
     * @param cnc a #GdaConnection object
     */
    normalize(cnc: Connection): boolean
    /**
     * Creates a string representing the contents of `stmt`.
     */
    serialize(): string
    /**
     * Renders `stmt` as an SQL statement, with some control on how it is rendered.
     * 
     * If `cnc` is not %NULL, then the rendered SQL will better be suited to be used by `cnc` (in particular
     * it may include some SQL tweaks and/or proprietary extensions specific to the database engine used by `cnc)`:
     * in this case the result is similar to calling gda_connection_statement_to_sql().
     * @param cnc a #GdaConnection object, or %NULL
     * @param params parameters contained in a single #GdaSet object, or %NULL
     * @param flags a set of flags to control the rendering
     */
    to_sql_extended(cnc: Connection | null, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string, /* params_used */ Holder[] ]
    /**
     * Renders `stmt` to its SQL representation, using `context` to specify how each part of `stmt` must
     * be rendered. This function is mainly used by database provider's implementations which require
     * to specialize some aspects of SQL rendering to be adapted to the database,'s own SQL dialect
     * (for example SQLite rewrites the 'FALSE' and 'TRUE' literals as '0' and 'NOT 0').
     * @param context a #GdaSqlRenderingContext context
     */
    to_sql_real(context: SqlRenderingContext): string

    // Own virtual methods of Gda-5.0.Gda.Statement

    vfunc_checked(cnc: Connection, checked: boolean): void
    vfunc_reset(): void

    // Own signals of Gda-5.0.Gda.Statement

    connect(sigName: "checked", callback: Statement_CheckedSignalCallback): number
    connect_after(sigName: "checked", callback: Statement_CheckedSignalCallback): number
    emit(sigName: "checked", object: Connection, p0: boolean, ...args: any[]): void
    connect(sigName: "reset", callback: Statement_ResetSignalCallback): number
    connect_after(sigName: "reset", callback: Statement_ResetSignalCallback): number
    emit(sigName: "reset", ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.Statement

    connect(sigName: "notify::structure", callback: (($obj: Statement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structure", callback: (($obj: Statement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::structure", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Statement extends GObject.Object {

    // Own properties of Gda-5.0.Gda.Statement

    static name: string
    static $gtype: GObject.GType<Statement>

    // Constructors of Gda-5.0.Gda.Statement

    constructor(config?: Statement_ConstructProps) 
    /**
     * Creates a new #GdaStatement object
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdaStatement object
     * @constructor 
     */
    static new(): Statement
    _init(config?: Statement_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface ThreadWrapper_ConstructProps extends GObject.Object_ConstructProps {
}

interface ThreadWrapper {

    // Own fields of Gda-5.0.Gda.ThreadWrapper

    object: GObject.Object
    priv: ThreadWrapperPrivate

    // Owm methods of Gda-5.0.Gda.ThreadWrapper

    /**
     * Cancels a job not yet executed. This may fail for the following reasons:
     * <itemizedlist>
     *  <listitem><para>the job `id` could not be found, either because it has already been treated or because
     *                  it does not exist or because it was created in another thread</para></listitem>
     *  <listitem><para>the job `id` is currently being treated by the worker thread</para></listitem>
     * </itemizedlist>
     * @param id the ID of a job as returned by gda_thread_wrapper_execute() or gda_thread_wrapper_execute_void()
     */
    cancel(id: number): boolean
    /**
     * Connects a callback function to a signal for a particular object. The difference with g_signal_connect() and
     * similar functions are:
     * <itemizedlist>
     *  <listitem><para>the `callback` argument is not a #GCallback function, so the callback signature is not
     *    dependent on the signal itself</para></listitem>
     *  <listitem><para>the signal handler must not have to return any value</para></listitem>
     *  <listitem><para>the `callback` function will be called asynchronously, the caller may need to use
     *    gda_thread_wrapper_iterate() to get the notification</para></listitem>
     *  <listitem><para>if `private_job` and `private_thread` control in which case the signal is propagated.</para></listitem>
     * </itemizedlist>
     * 
     * Also note that signal handling is done asynchronously: when emitted in the worker thread, it
     * will be "queued" to be processed in the user thread when it has the chance (when gda_thread_wrapper_iterate()
     * is called directly or indirectly). The side effect is that the callback function is usually
     * called long after the object emitting the signal has finished emitting it.
     * 
     * To disconnect a signal handler, don't use any of the g_signal_handler_*() functions but the
     * gda_thread_wrapper_disconnect() method.
     * @param instance the instance to connect to
     * @param sig_name a string of the form "signal-name::detail"
     * @param private_thread set to %TRUE if `callback` is to be invoked only if the signal has    been emitted while in `wrapper'`s private sub thread (ie. used when `wrapper` is executing some functions    specified by gda_thread_wrapper_execute() or gda_thread_wrapper_execute_void()), and to %FALSE if the    callback is to be invoked whenever the signal is emitted, independently of the thread in which the    signal is emitted.
     * @param private_job set to %TRUE if `callback` is to be invoked only if the signal has    been emitted when a job created for the calling thread is being executed, and to %FALSE    if `callback` has to be called whenever the `sig_name` signal is emitted by `instance`. Note that    this argument is not taken into account if `private_thread` is set to %FALSE.
     * @param callback a #GdaThreadWrapperCallback function
     */
    connect_raw(instance: object | null, sig_name: string, private_thread: boolean, private_job: boolean, callback: ThreadWrapperCallback): number
    /**
     * Disconnects the emission of a signal, does the opposite of gda_thread_wrapper_connect_raw().
     * 
     * As soon as this method returns, the callback function set when gda_thread_wrapper_connect_raw()
     * was called will not be called anymore (even if the object has emitted the signal in the worker
     * thread and this signal has not been handled in the user thread).
     * @param id a handler ID, as returned by gda_thread_wrapper_connect_raw()
     */
    disconnect(id: number): void
    /**
     * Make `wrapper` execute the `func` function with the `arg` argument (along with a #GError which is not `error)`
     * in the sub thread managed by `wrapper`. To execute a function which does not return anything,
     * use gda_thread_wrapper_execute_void().
     * 
     * This method returns immediately, and the caller then needs to use gda_thread_wrapper_fetch_result() to
     * check if the execution has finished and get the result.
     * 
     * Once `func'`s execution is finished, if `arg` is not %NULL, the `arg_destroy_func` destruction function is called
     * on `arg`. This call occurs in the thread calling gda_thread_wrapper_fetch_result().
     * 
     * If an error occurred in this function, then the `arg_destroy_func` function is not called to free `arg`.
     * @param func the function to execute, not %NULL
     * @param arg argument to pass to `func,` or %NULL
     */
    execute(func: ThreadWrapperFunc, arg: object | null): number
    /**
     * Make `wrapper` execute the `func` function with the `arg` argument (along with a #GError which is not `error)`
     * in the sub thread managed by `wrapper`. To execute a function which returns some pointer,
     * use gda_thread_wrapper_execute().
     * 
     * This method returns immediately. Calling gda_thread_wrapper_fetch_result() is not necessary as `func`
     * does not return any result. However, it may be necessary to call gda_thread_wrapper_iterate() to give `wrapper` a
     * chance to execute the `arg_destroy_func` function if not %NULL (note that gda_thread_wrapper_iterate() is
     * called by gda_thread_wrapper_fetch_result() itself).
     * 
     * Once `func'`s execution is finished, if `arg` is not %NULL, the `arg_destroy_func` destruction function is called
     * on `arg`. This call occurs in the thread calling gda_thread_wrapper_fetch_result().
     * 
     * If an error occurred in this function, then the `arg_destroy_func` function is not called to free `arg`.
     * @param func the function to execute, not %NULL
     * @param arg argument to pass to `func`
     */
    execute_void(func: ThreadWrapperVoidFunc, arg: object | null): number
    /**
     * Use this method to check if the execution of a function is finished. The function's execution must have
     * been requested using gda_thread_wrapper_execute().
     * @param may_lock TRUE if this funct must lock the caller untill a result is available
     * @param exp_id ID of the job for which a result is expected
     */
    fetch_result(may_lock: boolean, exp_id: number): object | null
    /**
     * Allow `wrapper` to notify when an execution job is finished, by making its exec ID
     * readable through a new #GIOChannel. This function is useful when the notification needs
     * to be included into a main loop. This also notifies that signals (emitted by objects in
     * `wrapper'`s internal thread) are available.
     * 
     * The returned #GIOChannel will have something to read everytime an execution job is finished
     * for an execution job submitted from the calling thread. The user whould read #GdaThreadNotification
     * structures from the channel and analyse its contents to call gda_thread_wrapper_iterate()
     * or gda_thread_wrapper_fetch_result().
     * 
     * Note1: the new communication channel will only be operational for jobs submitted after this
     * function returns, and for signals which have been connected after this function returns. A safe
     * practice is to call this function before the `wrapper` object has been used.
     * 
     * Note2: this function will return the same #GIOChannel everytime it's called from the same thread.
     * 
     * Note3: if the usage of the returned #GIOChannel reveals an error, then g_io_channel_shutdown() and
     * g_io_channel_unref() should be called on the #GIOChannel to let `wrapper` know it should not use
     * that object anymore.
     */
    get_io_channel(): GLib.IOChannel
    /**
     * Use this method to query the number of functions which have been queued to be executed
     * but which have not yet been executed.
     */
    get_waiting_size(): number
    /**
     * This method gives `wrapper` a chance to check if some functions to be executed have finished
     * <emphasis>for the calling thread</emphasis>. In this case it handles the execution result and
     * makes it ready to be processed using gda_thread_wrapper_fetch_result().
     * 
     * This method also allows `wrapper` to handle signals which may have been emitted by objects
     * while in the worker thread, and call the callback function specified when gda_thread_wrapper_connect_raw()
     * was used.
     * 
     * If `may_block` is %TRUE, then it will block untill there is one finished execution
     * (functions returning void and signals are ignored regarding this argument).
     * @param may_block whether the call may block
     */
    iterate(may_block: boolean): void
    /**
     * Requests that the signal which ID is `id` (which has been obtained using gda_thread_wrapper_connect_raw())
     * be treated by the calling thread instead of by the thread in which gda_thread_wrapper_connect_raw()
     * was called.
     * @param id a signal ID
     */
    steal_signal(id: number): void
    /**
     * Does the opposite of gda_thread_wrapper_get_io_channel()
     */
    unset_io_channel(): void

    // Class property signals of Gda-5.0.Gda.ThreadWrapper

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ThreadWrapper extends GObject.Object {

    // Own properties of Gda-5.0.Gda.ThreadWrapper

    static name: string
    static $gtype: GObject.GType<ThreadWrapper>

    // Constructors of Gda-5.0.Gda.ThreadWrapper

    constructor(config?: ThreadWrapper_ConstructProps) 
    /**
     * Creates a new #GdaThreadWrapper object
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdaThreadWrapper object
     * @constructor 
     */
    static new(): ThreadWrapper
    _init(config?: ThreadWrapper_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface TransactionStatus_ConstructProps extends GObject.Object_ConstructProps {
}

interface TransactionStatus {

    // Own fields of Gda-5.0.Gda.TransactionStatus

    object: GObject.Object
    name: string
    isolation_level: TransactionIsolation
    state: TransactionStatusState
    events: TransactionStatusEvent[]

    // Owm methods of Gda-5.0.Gda.TransactionStatus

    find(str: string, destev: TransactionStatusEvent): TransactionStatus | null
    /**
     * Find a pointer to the "current" _unnamed_ transaction, which is the last
     * transaction if there are several nested transactions
     * @param destev 
     * @param unnamed_only 
     */
    find_current(destev: TransactionStatusEvent, unnamed_only: boolean): TransactionStatus | null
    free_events(event: TransactionStatusEvent, free_after: boolean): void

    // Class property signals of Gda-5.0.Gda.TransactionStatus

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TransactionStatus extends GObject.Object {

    // Own properties of Gda-5.0.Gda.TransactionStatus

    static name: string
    static $gtype: GObject.GType<TransactionStatus>

    // Constructors of Gda-5.0.Gda.TransactionStatus

    constructor(config?: TransactionStatus_ConstructProps) 
    /**
     * Creates a new #GdaTransactionStatus object, which allows a fine-tune and
     * full control of transactions to be used with providers.
     * @constructor 
     * @param name name for the transaction
     */
    constructor(name: string) 
    /**
     * Creates a new #GdaTransactionStatus object, which allows a fine-tune and
     * full control of transactions to be used with providers.
     * @constructor 
     * @param name name for the transaction
     */
    static new(name: string): TransactionStatus
    _init(config?: TransactionStatus_ConstructProps): void
}

interface Tree_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `node-changed`
 */
interface Tree_NodeChangedSignalCallback {
    ($obj: Tree, node: TreeNode): void
}

/**
 * Signal callback interface for `node-deleted`
 */
interface Tree_NodeDeletedSignalCallback {
    ($obj: Tree, node_path: string): void
}

/**
 * Signal callback interface for `node-has-child-toggled`
 */
interface Tree_NodeHasChildToggledSignalCallback {
    ($obj: Tree, node: TreeNode): void
}

/**
 * Signal callback interface for `node-inserted`
 */
interface Tree_NodeInsertedSignalCallback {
    ($obj: Tree, node: TreeNode): void
}

interface Tree {

    // Own properties of Gda-5.0.Gda.Tree

    /**
     * Tells if the GdaTree is a list or a tree.
     */
    readonly is_list: boolean

    // Own fields of Gda-5.0.Gda.Tree

    object: GObject.Object
    priv: TreePrivate

    // Owm methods of Gda-5.0.Gda.Tree

    /**
     * Sets `manager` as a top #GdaTreeManager object, which will be responsible for creating top level nodes in `tree`.
     * @param manager a #GdaTreeManager object
     */
    add_manager(manager: TreeManager): void
    /**
     * Removes any node in `tree`
     */
    clean(): void
    /**
     * Dumps the contents of `tree` to `stream,` using a hierarchical view.
     * @param node a #GdaTreeNode to start the dump from, or %NULL for a full dump
     * @param stream a stream to send the dump to, or %NULL for STDOUT
     */
    dump(node: TreeNode | null, stream: object | null): void
    /**
     * Locates a #GdaTreeNode using the `tree_path` path.
     * @param tree_path full path to the required nodes (if `use_names` is %TRUE, then it must start with '/')
     * @param use_names if %TRUE, then `tree_path` will be interpreted as a unix style path, and if %FALSE,             then `tree_path` will be interpreted similarly to the #GtkTreePath's string representation.
     */
    get_node(tree_path: string, use_names: boolean): TreeNode | null
    /**
     * Get the #GdaTreeManager which created `node` in `tree`
     * @param node a #GdaTreeNode present in `tree`
     */
    get_node_manager(node: TreeNode): TreeManager
    /**
     * Get the path associated to `node` in `tree`.
     * @param node a #GdaTreeNode node in `tree`
     */
    get_node_path(node: TreeNode): string
    /**
     * The returned list is a list of all the #GdaTreeNode nodes <emphasis>below</emphasis> the node
     * at the specified path.
     * 
     * As a corner case if `tree_path` is %NULL, then the returned list contains all the top level nodes.
     * @param tree_path full path to the required nodes (if `use_names` is %TRUE, then it must start with '/'), or %NULL
     * @param use_names if %TRUE, then `tree_path` will be interpreted as a unix style path, and if %FALSE,             then `tree_path` will be interpreted similarly to the #GtkTreePath's string representation.
     */
    get_nodes_in_path(tree_path: string | null, use_names: boolean): TreeNode[]
    /**
     * Sets an attribute to `tree,` which will be accessible to any node in it.
     * @param attribute attribute name
     * @param value a #GValue, or %NULL
     * @param destroy a function to be called when `attribute` is not needed anymore, or %NULL
     */
    set_attribute(attribute: string, value: any, destroy: GLib.DestroyNotify): void
    /**
     * Requests that `tree` be populated with nodes. If an error occurs, then `tree'`s contents is left
     * unchanged, and otherwise `tree'`s previous contents is completely replaced by the new one.
     */
    update_all(): boolean
    /**
     * Update the children of `node` in `tree` (not recursively, to update recursively, use
     * gda_tree_update_part()). If `node` is %NULL then the top level nodes are updated.
     * @param node a #GdaTreeNode node in `tree,` or %NULL
     */
    update_children(node: TreeNode | null): boolean
    /**
     * Requests that `tree` be populated with nodes, starting from `node`
     * @param node a #GdaTreeNode node in `tree`
     */
    update_part(node: TreeNode): boolean

    // Own virtual methods of Gda-5.0.Gda.Tree

    vfunc_node_changed(node: TreeNode): void
    vfunc_node_deleted(node_path: string): void
    vfunc_node_has_child_toggled(node: TreeNode): void
    vfunc_node_inserted(node: TreeNode): void

    // Own signals of Gda-5.0.Gda.Tree

    connect(sigName: "node-changed", callback: Tree_NodeChangedSignalCallback): number
    connect_after(sigName: "node-changed", callback: Tree_NodeChangedSignalCallback): number
    emit(sigName: "node-changed", node: TreeNode, ...args: any[]): void
    connect(sigName: "node-deleted", callback: Tree_NodeDeletedSignalCallback): number
    connect_after(sigName: "node-deleted", callback: Tree_NodeDeletedSignalCallback): number
    emit(sigName: "node-deleted", node_path: string, ...args: any[]): void
    connect(sigName: "node-has-child-toggled", callback: Tree_NodeHasChildToggledSignalCallback): number
    connect_after(sigName: "node-has-child-toggled", callback: Tree_NodeHasChildToggledSignalCallback): number
    emit(sigName: "node-has-child-toggled", node: TreeNode, ...args: any[]): void
    connect(sigName: "node-inserted", callback: Tree_NodeInsertedSignalCallback): number
    connect_after(sigName: "node-inserted", callback: Tree_NodeInsertedSignalCallback): number
    emit(sigName: "node-inserted", node: TreeNode, ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.Tree

    connect(sigName: "notify::is-list", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-list", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-list", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Tree extends GObject.Object {

    // Own properties of Gda-5.0.Gda.Tree

    static name: string
    static $gtype: GObject.GType<Tree>

    // Constructors of Gda-5.0.Gda.Tree

    constructor(config?: Tree_ConstructProps) 
    /**
     * Creates a new #GdaTree object
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdaTree object
     * @constructor 
     */
    static new(): Tree
    _init(config?: Tree_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface TreeManager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.TreeManager

    /**
     * This property specifies the function which needs to be called when the list of #GdaTreeNode nodes
     * managed has to be updated
     */
    func?: object | null
    /**
     * This property specifies if, when initially creating nodes or updating the list of nodes,
     * the tree manager shoud also request that each node it has created or updated also
     * initially create or update their children.
     * 
     * This property can typically set to FALSE if the process of creating children nodes is lenghty
     * and needs to be postponed while an event occurs.
     */
    recursive?: boolean | null
}

interface TreeManager {

    // Own properties of Gda-5.0.Gda.TreeManager

    /**
     * This property specifies the function which needs to be called when the list of #GdaTreeNode nodes
     * managed has to be updated
     */
    func: object
    /**
     * This property specifies if, when initially creating nodes or updating the list of nodes,
     * the tree manager shoud also request that each node it has created or updated also
     * initially create or update their children.
     * 
     * This property can typically set to FALSE if the process of creating children nodes is lenghty
     * and needs to be postponed while an event occurs.
     */
    recursive: boolean

    // Own fields of Gda-5.0.Gda.TreeManager

    object: GObject.Object
    priv: TreeManagerPrivate

    // Owm methods of Gda-5.0.Gda.TreeManager

    /**
     * Adds a sub manager to `manager`. Use this method to create the skeleton structure
     * of a #GdaTree. Note that a single #GdaTreeManager can be used by several #GdaTree objects
     * or several times in the same #GdaTree's structure.
     * 
     * Please note that it's possible for `mgr` and `sub` to be the same object, but beware of the possible
     * infinite recursive behaviour in this case when creating children nodes
     * (depending on the actual implementation of the #GdaTreeManager).
     * @param sub a #GdaTreeManager object to add
     */
    add_manager(sub: TreeManager): void
    /**
     * Requests that for any new node managed (eg. created) by `manager,` a new attribute will be set. This allows
     * one to customize the attributes of new nodes created by an existing #GdaTreeManager.
     * 
     * As a side effect, if `value` is %NULL, then the corresponding attribute, if it was set, is unset.
     * @param attribute an attribute name
     * @param value the attribute's value, or %NULL
     */
    add_new_node_attribute(attribute: string, value: any | null): void
    /**
     * Requests that `manager` creates a new #GdaTreeNode. The new node is not in any
     * way linked to `manager` yet, consider this method as a #GdaTreeNode factory.
     * 
     * This method is usually used when implementing a #GdaTreeManagerNodesFunc function (to create nodes),
     * or when subclassing the #GdaTreeManager.
     * @param parent the parent the new node may have, or %NULL
     * @param name name given to the new node, or %NULL
     */
    create_node(parent: TreeNode | null, name: string | null): TreeNode
    /**
     * Get the list of sub managers which have already been added using gda_tree_manager_add_manager()
     */
    get_managers(): TreeManager[]

    // Class property signals of Gda-5.0.Gda.TreeManager

    connect(sigName: "notify::func", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeManager extends GObject.Object {

    // Own properties of Gda-5.0.Gda.TreeManager

    static name: string
    static $gtype: GObject.GType<TreeManager>

    // Constructors of Gda-5.0.Gda.TreeManager

    constructor(config?: TreeManager_ConstructProps) 
    _init(config?: TreeManager_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface TreeMgrColumns_ConstructProps extends TreeManager_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.TreeMgrColumns

    /**
     * Defines the #GdaConnection to display information for. Necessary upon construction unless
     * the #GdaTreeMgrColumns:meta-store property is specified instead.
     */
    connection?: Connection | null
    /**
     * Defines the #GdaMetaStore to extract information from. Necessary upon construction unless
     * the #GdaTreeMgrColumns:connection property is specified instead. This property has
     * priority over the GdaTreeMgrColumns:connection property.
     */
    meta_store?: MetaStore | null
    /**
     * If no set, then the table name will be fetched from the parent node using the "schema" attribute
     */
    schema?: string | null
    /**
     * If no set, then the table name will be fetched from the parent node using the "table_name" attribute
     */
    table_name?: string | null
}

interface TreeMgrColumns {

    // Own properties of Gda-5.0.Gda.TreeMgrColumns

    /**
     * Defines the #GdaConnection to display information for. Necessary upon construction unless
     * the #GdaTreeMgrColumns:meta-store property is specified instead.
     */
    readonly connection: Connection
    /**
     * Defines the #GdaMetaStore to extract information from. Necessary upon construction unless
     * the #GdaTreeMgrColumns:connection property is specified instead. This property has
     * priority over the GdaTreeMgrColumns:connection property.
     */
    readonly meta_store: MetaStore
    /**
     * If no set, then the table name will be fetched from the parent node using the "schema" attribute
     */
    readonly schema: string
    /**
     * If no set, then the table name will be fetched from the parent node using the "table_name" attribute
     */
    readonly table_name: string

    // Own fields of Gda-5.0.Gda.TreeMgrColumns

    object: TreeManager
    priv: TreeMgrColumnsPriv

    // Class property signals of Gda-5.0.Gda.TreeMgrColumns

    connect(sigName: "notify::connection", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::meta-store", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-store", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::meta-store", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::table-name", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table-name", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table-name", ...args: any[]): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeMgrColumns extends TreeManager {

    // Own properties of Gda-5.0.Gda.TreeMgrColumns

    static name: string
    static $gtype: GObject.GType<TreeMgrColumns>

    // Constructors of Gda-5.0.Gda.TreeMgrColumns

    constructor(config?: TreeMgrColumns_ConstructProps) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each
     * column in the table named `table_name` in the `schema` schema.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param schema a schema name
     * @param table_name the name of the table
     */
    constructor(cnc: Connection, schema: string, table_name: string) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each
     * column in the table named `table_name` in the `schema` schema.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param schema a schema name
     * @param table_name the name of the table
     */
    static new(cnc: Connection, schema: string, table_name: string): TreeMgrColumns
    _init(config?: TreeMgrColumns_ConstructProps): void
}

interface TreeMgrLabel_ConstructProps extends TreeManager_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.TreeMgrLabel

    label?: string | null
}

interface TreeMgrLabel {

    // Own properties of Gda-5.0.Gda.TreeMgrLabel

    readonly label: string

    // Own fields of Gda-5.0.Gda.TreeMgrLabel

    object: TreeManager
    priv: TreeMgrLabelPriv

    // Class property signals of Gda-5.0.Gda.TreeMgrLabel

    connect(sigName: "notify::label", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeMgrLabel extends TreeManager {

    // Own properties of Gda-5.0.Gda.TreeMgrLabel

    static name: string
    static $gtype: GObject.GType<TreeMgrLabel>

    // Constructors of Gda-5.0.Gda.TreeMgrLabel

    constructor(config?: TreeMgrLabel_ConstructProps) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node labelled `label`
     * @constructor 
     * @param label a label string
     */
    constructor(label: string) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node labelled `label`
     * @constructor 
     * @param label a label string
     */
    static new(label: string): TreeMgrLabel
    _init(config?: TreeMgrLabel_ConstructProps): void
}

interface TreeMgrLdap_ConstructProps extends TreeManager_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.TreeMgrLdap

    /**
     * Defines the Distinguised Name of the LDAP entry to list children from
     */
    dn?: string | null
}

interface TreeMgrLdap {

    // Own properties of Gda-5.0.Gda.TreeMgrLdap

    /**
     * Defines the Distinguised Name of the LDAP entry to list children from
     */
    readonly dn: string

    // Own fields of Gda-5.0.Gda.TreeMgrLdap

    object: TreeManager
    priv: TreeMgrLdapPriv

    // Class property signals of Gda-5.0.Gda.TreeMgrLdap

    connect(sigName: "notify::dn", callback: (($obj: TreeMgrLdap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dn", callback: (($obj: TreeMgrLdap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dn", ...args: any[]): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrLdap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrLdap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrLdap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrLdap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeMgrLdap extends TreeManager {

    // Own properties of Gda-5.0.Gda.TreeMgrLdap

    static name: string
    static $gtype: GObject.GType<TreeMgrLdap>

    // Constructors of Gda-5.0.Gda.TreeMgrLdap

    constructor(config?: TreeMgrLdap_ConstructProps) 
    /**
     * Creates a new #GdaTreeManager object which will list the children of the LDAP entry which Distinguished name
     * is `dn`. If `dn` is %NULL, then the tree manager will look in the tree itself for an attribute named "dn" and
     * use it.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param dn an LDAP Distinguished Name or %NULL
     */
    constructor(cnc: Connection, dn: string | null) 
    /**
     * Creates a new #GdaTreeManager object which will list the children of the LDAP entry which Distinguished name
     * is `dn`. If `dn` is %NULL, then the tree manager will look in the tree itself for an attribute named "dn" and
     * use it.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param dn an LDAP Distinguished Name or %NULL
     */
    static new(cnc: Connection, dn: string | null): TreeMgrLdap
    _init(config?: TreeMgrLdap_ConstructProps): void
}

interface TreeMgrSchemas_ConstructProps extends TreeManager_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.TreeMgrSchemas

    /**
     * Defines the #GdaConnection to display information for. Necessary upon construction unless
     * the #GdaTreeMgrSchema:meta-store property is specified instead.
     */
    connection?: Connection | null
    /**
     * Defines the #GdaMetaStore to extract information from. Necessary upon construction unless
     * the #GdaTreeMgrSchema:connection property is specified instead. This property has
     * priority over the GdaTreeMgrSchema:connection property.
     */
    meta_store?: MetaStore | null
}

interface TreeMgrSchemas {

    // Own properties of Gda-5.0.Gda.TreeMgrSchemas

    /**
     * Defines the #GdaConnection to display information for. Necessary upon construction unless
     * the #GdaTreeMgrSchema:meta-store property is specified instead.
     */
    readonly connection: Connection
    /**
     * Defines the #GdaMetaStore to extract information from. Necessary upon construction unless
     * the #GdaTreeMgrSchema:connection property is specified instead. This property has
     * priority over the GdaTreeMgrSchema:connection property.
     */
    readonly meta_store: MetaStore

    // Own fields of Gda-5.0.Gda.TreeMgrSchemas

    object: TreeManager
    priv: TreeMgrSchemasPriv

    // Class property signals of Gda-5.0.Gda.TreeMgrSchemas

    connect(sigName: "notify::connection", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::meta-store", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-store", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::meta-store", ...args: any[]): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeMgrSchemas extends TreeManager {

    // Own properties of Gda-5.0.Gda.TreeMgrSchemas

    static name: string
    static $gtype: GObject.GType<TreeMgrSchemas>

    // Constructors of Gda-5.0.Gda.TreeMgrSchemas

    constructor(config?: TreeMgrSchemas_ConstructProps) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each database schema found
     * in `cnc`.
     * @constructor 
     * @param cnc a #GdaConnection object
     */
    constructor(cnc: Connection) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each database schema found
     * in `cnc`.
     * @constructor 
     * @param cnc a #GdaConnection object
     */
    static new(cnc: Connection): TreeMgrSchemas
    _init(config?: TreeMgrSchemas_ConstructProps): void
}

interface TreeMgrSelect_ConstructProps extends TreeManager_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.TreeMgrSelect

    connection?: Connection | null
    params?: Set | null
    statement?: Statement | null
}

interface TreeMgrSelect {

    // Own properties of Gda-5.0.Gda.TreeMgrSelect

    readonly connection: Connection
    readonly params: Set
    readonly statement: Statement

    // Own fields of Gda-5.0.Gda.TreeMgrSelect

    object: TreeManager
    priv: TreeMgrSelectPriv

    // Class property signals of Gda-5.0.Gda.TreeMgrSelect

    connect(sigName: "notify::connection", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::params", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::params", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::params", ...args: any[]): void
    connect(sigName: "notify::statement", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::statement", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::statement", ...args: any[]): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeMgrSelect extends TreeManager {

    // Own properties of Gda-5.0.Gda.TreeMgrSelect

    static name: string
    static $gtype: GObject.GType<TreeMgrSelect>

    // Constructors of Gda-5.0.Gda.TreeMgrSelect

    constructor(config?: TreeMgrSelect_ConstructProps) 
    /**
     * Creates a new #GdaTreeMgrSelect object which will add one tree node for each row in
     * the #GdaDataModel resulting from the execution of `stmt`.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param stmt a #GdaStatement object representing a SELECT statement
     * @param params a #GdaSet object representing fixed parameters which are to be used when executing `stmt`
     */
    constructor(cnc: Connection, stmt: Statement, params: Set) 
    /**
     * Creates a new #GdaTreeMgrSelect object which will add one tree node for each row in
     * the #GdaDataModel resulting from the execution of `stmt`.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param stmt a #GdaStatement object representing a SELECT statement
     * @param params a #GdaSet object representing fixed parameters which are to be used when executing `stmt`
     */
    static new(cnc: Connection, stmt: Statement, params: Set): TreeMgrSelect
    _init(config?: TreeMgrSelect_ConstructProps): void
}

interface TreeMgrTables_ConstructProps extends TreeManager_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.TreeMgrTables

    /**
     * Defines the #GdaConnection to display information for. Necessary upon construction unless
     * the #GdaTreeMgrTables:meta-store property is specified instead.
     */
    connection?: Connection | null
    /**
     * Defines the #GdaMetaStore to extract information from. Necessary upon construction unless
     * the #GdaTreeMgrTables:connection property is specified instead. This property has
     * priority over the GdaTreeMgrTables:connection property.
     */
    meta_store?: MetaStore | null
    /**
     * If no set, then the table name will be fetched from the parent node using the "schema" attribute. If not
     * found that way, then the list of visible tables (tables which can be identified without having to specify
     * a schema) will be used
     */
    schema?: string | null
}

interface TreeMgrTables {

    // Own properties of Gda-5.0.Gda.TreeMgrTables

    /**
     * Defines the #GdaConnection to display information for. Necessary upon construction unless
     * the #GdaTreeMgrTables:meta-store property is specified instead.
     */
    readonly connection: Connection
    /**
     * Defines the #GdaMetaStore to extract information from. Necessary upon construction unless
     * the #GdaTreeMgrTables:connection property is specified instead. This property has
     * priority over the GdaTreeMgrTables:connection property.
     */
    readonly meta_store: MetaStore
    /**
     * If no set, then the table name will be fetched from the parent node using the "schema" attribute. If not
     * found that way, then the list of visible tables (tables which can be identified without having to specify
     * a schema) will be used
     */
    readonly schema: string

    // Own fields of Gda-5.0.Gda.TreeMgrTables

    object: TreeManager
    priv: TreeMgrTablesPriv

    // Class property signals of Gda-5.0.Gda.TreeMgrTables

    connect(sigName: "notify::connection", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::meta-store", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-store", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::meta-store", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeMgrTables extends TreeManager {

    // Own properties of Gda-5.0.Gda.TreeMgrTables

    static name: string
    static $gtype: GObject.GType<TreeMgrTables>

    // Constructors of Gda-5.0.Gda.TreeMgrTables

    constructor(config?: TreeMgrTables_ConstructProps) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each table found in the
     * `schema` if it is not %NULL, or for each table visible by default in `cnc`.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param schema a schema name or %NULL
     */
    constructor(cnc: Connection, schema: string | null) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each table found in the
     * `schema` if it is not %NULL, or for each table visible by default in `cnc`.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param schema a schema name or %NULL
     */
    static new(cnc: Connection, schema: string | null): TreeMgrTables
    _init(config?: TreeMgrTables_ConstructProps): void
}

interface TreeNode_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.TreeNode

    name?: string | null
}

/**
 * Signal callback interface for `node-changed`
 */
interface TreeNode_NodeChangedSignalCallback {
    ($obj: TreeNode, node: TreeNode): void
}

/**
 * Signal callback interface for `node-deleted`
 */
interface TreeNode_NodeDeletedSignalCallback {
    ($obj: TreeNode, relative_path: string): void
}

/**
 * Signal callback interface for `node-has-child-toggled`
 */
interface TreeNode_NodeHasChildToggledSignalCallback {
    ($obj: TreeNode, node: TreeNode): void
}

/**
 * Signal callback interface for `node-inserted`
 */
interface TreeNode_NodeInsertedSignalCallback {
    ($obj: TreeNode, node: TreeNode): void
}

interface TreeNode {

    // Own properties of Gda-5.0.Gda.TreeNode

    name: string

    // Own fields of Gda-5.0.Gda.TreeNode

    object: GObject.Object
    priv: TreeNodePrivate

    // Owm methods of Gda-5.0.Gda.TreeNode

    /**
     * Get the value associated to the attribute named `attribute` for `node`. If the attribute is not set,
     * then `node'`s parents is queries (recursively up to the top level node).
     * 
     * Attributes can have any name, but Libgda proposes some default names,
     * see <link linkend="libgda-40-Attributes-manager.synopsis">this section</link>.
     * @param attribute attribute name as a string
     */
    fetch_attribute(attribute: string): any
    /**
     * Get the #GdaTreeNode child of `node` at position `index` (starting at 0).
     * @param index a index
     */
    get_child_index(index: number): TreeNode
    /**
     * Get the #GdaTreeNode child of `node` which has the #GDA_ATTRIBUTE_NAME set to `name`
     * @param name requested node's name
     */
    get_child_name(name: string): TreeNode
    /**
     * Get a list of all `node'`s children, free it with g_slist_free() after usage
     */
    get_children(): TreeNode[]
    /**
     * Get the value associated to the attribute named `attribute` for `node`. The difference with gda_tree_node_fetch_attribute()
     * is that gda_tree_node_fetch_attribute() will also query `node'`s parents (recursively up to the top level node) if
     * the attribute is not set for `node`.
     * 
     * Attributes can have any name, but Libgda proposes some default names,
     * see <link linkend="libgda-40-Attributes-manager.synopsis">this section</link>.
     * @param attribute attribute name as a string
     */
    get_node_attribute(attribute: string): any
    /**
     * Get the #GdaTreeNode parent of `node` in the #GdaTree node belongs to. If `node` is at the top level,
     * then this method return %NULL.
     */
    get_parent(): TreeNode
    /**
     * Set the value associated to a named attribute. The `attribute` string is used AS IT IS by this method (eg.
     * no copy of it is made), and
     * the memory it uses will be freed using the `destroy` function when no longer needed (if `destroy` is %NULL,
     * then the string will not be freed at all).
     * 
     * Attributes can have any name, but Libgda proposes some default names,
     * see <link linkend="libgda-40-Attributes-manager.synopsis">this section</link>.
     * 
     * For example one would use it as:
     * 
     * <code>
     * gda_tree_node_set_node_attribute (node, g_strdup (my_attribute), my_value, g_free);
     * gda_tree_node_set_node_attribute (node, GDA_ATTRIBUTE_NAME, my_value, NULL);
     * </code>
     * 
     * If there is already an attribute named `attribute` set, then its value is replaced with the new value (`value` is
     * copied), except if `value` is %NULL, in which case the attribute is removed.
     * @param attribute attribute name
     * @param value a #GValue, or %NULL
     * @param destroy a function to be called when `attribute` is not needed anymore, or %NULL
     */
    set_node_attribute(attribute: string, value: any | null, destroy: GLib.DestroyNotify): void

    // Own virtual methods of Gda-5.0.Gda.TreeNode

    vfunc_dump_children(prefix: string, in_string: GLib.String): void
    vfunc_dump_header(): string
    vfunc_node_changed(node: TreeNode): void
    vfunc_node_deleted(relative_path: string): void
    vfunc_node_has_child_toggled(node: TreeNode): void
    vfunc_node_inserted(node: TreeNode): void

    // Own signals of Gda-5.0.Gda.TreeNode

    connect(sigName: "node-changed", callback: TreeNode_NodeChangedSignalCallback): number
    connect_after(sigName: "node-changed", callback: TreeNode_NodeChangedSignalCallback): number
    emit(sigName: "node-changed", node: TreeNode, ...args: any[]): void
    connect(sigName: "node-deleted", callback: TreeNode_NodeDeletedSignalCallback): number
    connect_after(sigName: "node-deleted", callback: TreeNode_NodeDeletedSignalCallback): number
    emit(sigName: "node-deleted", relative_path: string, ...args: any[]): void
    connect(sigName: "node-has-child-toggled", callback: TreeNode_NodeHasChildToggledSignalCallback): number
    connect_after(sigName: "node-has-child-toggled", callback: TreeNode_NodeHasChildToggledSignalCallback): number
    emit(sigName: "node-has-child-toggled", node: TreeNode, ...args: any[]): void
    connect(sigName: "node-inserted", callback: TreeNode_NodeInsertedSignalCallback): number
    connect_after(sigName: "node-inserted", callback: TreeNode_NodeInsertedSignalCallback): number
    emit(sigName: "node-inserted", node: TreeNode, ...args: any[]): void

    // Class property signals of Gda-5.0.Gda.TreeNode

    connect(sigName: "notify::name", callback: (($obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeNode extends GObject.Object {

    // Own properties of Gda-5.0.Gda.TreeNode

    static name: string
    static $gtype: GObject.GType<TreeNode>

    // Constructors of Gda-5.0.Gda.TreeNode

    constructor(config?: TreeNode_ConstructProps) 
    /**
     * Creates a new #GdaTreeNode object
     * @constructor 
     * @param name a name, or %NULL
     */
    constructor(name: string | null) 
    /**
     * Creates a new #GdaTreeNode object
     * @constructor 
     * @param name a name, or %NULL
     */
    static new(name: string | null): TreeNode
    _init(config?: TreeNode_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface UShort {
}

class UShort {

    // Own properties of Gda-5.0.Gda.UShort

    static name: string
}

interface XaTransaction_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gda-5.0.Gda.XaTransaction

    format_id?: number | null
    transaction_id?: string | null
}

interface XaTransaction {

    // Own properties of Gda-5.0.Gda.XaTransaction

    readonly format_id: number
    readonly transaction_id: string

    // Own fields of Gda-5.0.Gda.XaTransaction

    object: GObject.Object
    priv: XaTransactionPrivate

    // Owm methods of Gda-5.0.Gda.XaTransaction

    /**
     * Begins a distributed transaction (managed by `xa_trans)`. Please note that this phase may fail
     * for some connections if a (normal) transaction is already started (this depends on the database
     * provider being used), so it's better to avoid starting any (normal) transaction on any of the
     * connections registered with `xa_trans`.
     */
    begin(): boolean
    /**
     * Commits a distributed transaction (managed by `xa_trans)`. The commit is composed of two phases:
     * <itemizedlist>
     *   <listitem><para>a PREPARE phase where all the connections are required to store their transaction data to a
     *     permanent place (to be able to complete the commit should a problem occur afterwards)</para></listitem>
     *   <listitem><para>a COMMIT phase where the transaction data is actually written to the database</para></listitem>
     * </itemizedlist>
     * 
     * If the PREPARE phase fails for any of the connection registered with `xa_trans,` then the distributed commit
     * fails and FALSE is returned. During the COMMIT phase, some commit may actually fail but the transaction can
     * still be completed because the PREPARE phase succeeded (through the recover method).
     */
    commit(): [ /* returnType */ boolean, /* cnc_to_recover */ Connection[] ]
    /**
     * Tries to commit the data prepared but which failed to commit (see gda_xa_transaction_commit()). This
     * method allows one to terminate a distributed transaction which succeeded but for which some
     * connections needed to be recovered.
     */
    commit_recovered(): [ /* returnType */ boolean, /* cnc_to_recover */ Connection[] ]
    /**
     * Registers `cnc` to be used by `xa_trans` to create a distributed transaction.
     * 
     * Note: any #GdaConnection object can only be registered with at most one #GdaXaTransaction object; also
     * some connections may not be registered at all with a #GdaXaTransaction object because the database
     * provider being used does not support it.
     * @param cnc the connection to add to `xa_trans`
     * @param branch the branch qualifier
     */
    register_connection(cnc: Connection, branch: string): boolean
    /**
     * Cancels a distributed transaction (managed by `xa_trans)`.
     */
    rollback(): boolean
    /**
     * Unregisters `cnc` to be used by `xa_trans` to create a distributed transaction. This is
     * the opposite of gda_xa_transaction_register_connection().
     * @param cnc the connection to add to `xa_trans`
     */
    unregister_connection(cnc: Connection): void

    // Class property signals of Gda-5.0.Gda.XaTransaction

    connect(sigName: "notify::format-id", callback: (($obj: XaTransaction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-id", callback: (($obj: XaTransaction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format-id", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (($obj: XaTransaction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: XaTransaction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XaTransaction extends GObject.Object {

    // Own properties of Gda-5.0.Gda.XaTransaction

    static name: string
    static $gtype: GObject.GType<XaTransaction>

    // Constructors of Gda-5.0.Gda.XaTransaction

    constructor(config?: XaTransaction_ConstructProps) 
    /**
     * Creates a new #GdaXaTransaction object, which will control the process of
     * performing a distributed transaction across several connections.
     * @constructor 
     * @param format a format ID
     * @param global_transaction_id the global transaction ID
     */
    constructor(format: number, global_transaction_id: string) 
    /**
     * Creates a new #GdaXaTransaction object, which will control the process of
     * performing a distributed transaction across several connections.
     * @constructor 
     * @param format a format ID
     * @param global_transaction_id the global transaction ID
     */
    static new(format: number, global_transaction_id: string): XaTransaction
    _init(config?: XaTransaction_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface AttributesManager {

    // Owm methods of Gda-5.0.Gda.AttributesManager

    clear(ptr: object | null): void
    foreach(ptr: object | null, func: AttributesManagerFunc): void
    free(): void
    get(ptr: object | null, att_name: string): any
    set(ptr: object | null, att_name: string, value: any): void
    set_full(ptr: object | null, att_name: string, value: any, destroy: GLib.DestroyNotify): void
}

class AttributesManager {

    // Own properties of Gda-5.0.Gda.AttributesManager

    static name: string
}

interface BatchClass {

    // Own fields of Gda-5.0.Gda.BatchClass

    parent_class: GObject.ObjectClass
    changed: (batch: Batch, changed_stmt: Statement) => void
}

abstract class BatchClass {

    // Own properties of Gda-5.0.Gda.BatchClass

    static name: string
}

interface BatchPrivate {
}

class BatchPrivate {

    // Own properties of Gda-5.0.Gda.BatchPrivate

    static name: string
}

interface Binary {

    // Own fields of Gda-5.0.Gda.Binary

    /**
     * the actual data as an array
     * @field 
     */
    data: Uint8Array
    /**
     * length of `data`
     * @field 
     */
    binary_length: number

    // Owm methods of Gda-5.0.Gda.Binary

    /**
     * Converts all the non printable characters of bin->data into the "\xyz" representation
     * where "xyz" is the octal representation of the byte, and the '\' (backslash) character
     * is converted to "\\". Printable characters (defined by g_ascii_isprint()) as well as newline
     * character are not converted.
     * 
     * Note that the backslash and newline characters are considered as printable characters and
     * will not be represented by the "\xyz" representation.
     * 
     * Use this function to get a representation as much readable by humans as possible of a binary
     * chunk. Note that this function is internally called when transforming a binary value to
     * a string for example when using g_value_transform() or gda_value_stringify().
     * @param maxlen a maximum len used to truncate, or %0 for no maximum length
     */
    to_string(maxlen: number): string
}

class Binary {

    // Own properties of Gda-5.0.Gda.Binary

    static name: string

    // Constructors of Gda-5.0.Gda.Binary

    /**
     * Creates a new #GdaBinary structure from an existing one.
     * @param boxed source to get a copy from.
     */
    static copy(boxed: object | null): object | null
    /**
     * Deallocates all memory associated to the given #GdaBinary.
     * @param boxed #GdaBinary to free.
     */
    static free(boxed: object | null): void
}

interface Blob {

    // Own fields of Gda-5.0.Gda.Blob

    /**
     * data buffer, as a #GdaBinary
     * @field 
     */
    data: Binary
    /**
     * a pointer to a #GdaBlopOp, or %NULL
     * @field 
     */
    op: BlobOp

    // Owm methods of Gda-5.0.Gda.Blob

    /**
     * correctly assigns `op` to `blob`
     * @param op a #GdaBlobOp object, or %NULL
     */
    set_op(op: BlobOp | null): void
    /**
     * Converts all the non printable characters of blob->data into the \xxx representation
     * where xxx is the octal representation of the byte, and the '\' (backslash) character
     * is converted to "\\".
     * @param maxlen a maximum len used to truncate, or 0 for no maximum length
     */
    to_string(maxlen: number): string
}

/**
 * Represents some binary data, accessed through a #GdaBlobOp object.
 * `op` is generally set up by database providers when giving access to an existing BLOB in
 * a database, but can be modified if needed using gda_blob_set_op().
 * @record 
 */
class Blob {

    // Own properties of Gda-5.0.Gda.Blob

    static name: string

    // Constructors of Gda-5.0.Gda.Blob

    /**
     * Creates a new #GdaBlob structure from an existing one.
     * @param boxed source to get a copy from.
     */
    static copy(boxed: object | null): object | null
    /**
     * Deallocates all memory associated to the given #GdaBlob.
     * @param boxed #GdaBlob to free.
     */
    static free(boxed: object | null): void
}

interface BlobOpClass {

    // Own fields of Gda-5.0.Gda.BlobOpClass

    parent_class: GObject.ObjectClass
    get_length: (op: BlobOp) => number
    read: (op: BlobOp, blob: Blob, offset: number, size: number) => number
    write: (op: BlobOp, blob: Blob, offset: number) => number
    write_all: (op: BlobOp, blob: Blob) => boolean
}

abstract class BlobOpClass {

    // Own properties of Gda-5.0.Gda.BlobOpClass

    static name: string
}

interface ColumnClass {

    // Own fields of Gda-5.0.Gda.ColumnClass

    parent_class: GObject.ObjectClass
    name_changed: (column: Column, old_name: string) => void
    g_type_changed: (column: Column, old_type: GObject.GType, new_type: GObject.GType) => void
}

abstract class ColumnClass {

    // Own properties of Gda-5.0.Gda.ColumnClass

    static name: string
}

interface ColumnPrivate {
}

class ColumnPrivate {

    // Own properties of Gda-5.0.Gda.ColumnPrivate

    static name: string
}

interface ConfigClass {

    // Own fields of Gda-5.0.Gda.ConfigClass

    object_class: GObject.ObjectClass
    dsn_added: (conf: Config, new_dsn: DsnInfo) => void
    dsn_to_be_removed: (conf: Config, old_dsn: DsnInfo) => void
    dsn_removed: (conf: Config, old_dsn: DsnInfo) => void
    dsn_changed: (conf: Config, dsn: DsnInfo) => void
}

abstract class ConfigClass {

    // Own properties of Gda-5.0.Gda.ConfigClass

    static name: string
}

interface ConfigPrivate {
}

class ConfigPrivate {

    // Own properties of Gda-5.0.Gda.ConfigPrivate

    static name: string
}

interface ConnectionClass {

    // Own fields of Gda-5.0.Gda.ConnectionClass

    object_class: GObject.ObjectClass
    error: (cnc: Connection, error: ConnectionEvent) => void
    conn_opened: (obj: Connection) => void
    conn_to_close: (obj: Connection) => void
    conn_closed: (obj: Connection) => void
    dsn_changed: (obj: Connection) => void
    transaction_status_changed: (obj: Connection) => void
}

abstract class ConnectionClass {

    // Own properties of Gda-5.0.Gda.ConnectionClass

    static name: string
}

interface ConnectionEventClass {

    // Own fields of Gda-5.0.Gda.ConnectionEventClass

    parent_class: GObject.ObjectClass
}

abstract class ConnectionEventClass {

    // Own properties of Gda-5.0.Gda.ConnectionEventClass

    static name: string
}

interface ConnectionEventPrivate {
}

class ConnectionEventPrivate {

    // Own properties of Gda-5.0.Gda.ConnectionEventPrivate

    static name: string
}

interface ConnectionPrivate {
}

class ConnectionPrivate {

    // Own properties of Gda-5.0.Gda.ConnectionPrivate

    static name: string
}

interface DataAccessWrapperClass {

    // Own fields of Gda-5.0.Gda.DataAccessWrapperClass

    parent_class: GObject.ObjectClass
}

abstract class DataAccessWrapperClass {

    // Own properties of Gda-5.0.Gda.DataAccessWrapperClass

    static name: string
}

interface DataAccessWrapperPrivate {
}

class DataAccessWrapperPrivate {

    // Own properties of Gda-5.0.Gda.DataAccessWrapperPrivate

    static name: string
}

interface DataComparatorClass {

    // Own fields of Gda-5.0.Gda.DataComparatorClass

    parent_class: GObject.ObjectClass
    diff_computed: (comp: DataComparator, diff: Diff) => boolean
}

abstract class DataComparatorClass {

    // Own properties of Gda-5.0.Gda.DataComparatorClass

    static name: string
}

interface DataComparatorPrivate {
}

class DataComparatorPrivate {

    // Own properties of Gda-5.0.Gda.DataComparatorPrivate

    static name: string
}

interface DataHandlerIface {

    // Own fields of Gda-5.0.Gda.DataHandlerIface

    g_iface: GObject.TypeInterface
    get_sql_from_value: (dh: DataHandler, value: any | null) => string
    get_str_from_value: (dh: DataHandler, value: any | null) => string
    get_value_from_sql: (dh: DataHandler, sql: string | null, type: GObject.GType) => any
    get_value_from_str: (dh: DataHandler, str: string | null, type: GObject.GType) => any
    get_sane_init_value: (dh: DataHandler, type: GObject.GType) => any | null
    accepts_g_type: (dh: DataHandler, type: GObject.GType) => boolean
    get_descr: (dh: DataHandler) => string
}

abstract class DataHandlerIface {

    // Own properties of Gda-5.0.Gda.DataHandlerIface

    static name: string
}

interface DataModelArrayClass {

    // Own fields of Gda-5.0.Gda.DataModelArrayClass

    parent_class: GObject.ObjectClass
}

abstract class DataModelArrayClass {

    // Own properties of Gda-5.0.Gda.DataModelArrayClass

    static name: string
}

interface DataModelArrayPrivate {
}

class DataModelArrayPrivate {

    // Own properties of Gda-5.0.Gda.DataModelArrayPrivate

    static name: string
}

interface DataModelDirClass {

    // Own fields of Gda-5.0.Gda.DataModelDirClass

    parent_class: GObject.ObjectClass
}

abstract class DataModelDirClass {

    // Own properties of Gda-5.0.Gda.DataModelDirClass

    static name: string
}

interface DataModelDirPrivate {
}

class DataModelDirPrivate {

    // Own properties of Gda-5.0.Gda.DataModelDirPrivate

    static name: string
}

interface DataModelIface {

    // Own fields of Gda-5.0.Gda.DataModelIface

    g_iface: GObject.TypeInterface
    i_get_n_rows: (model: DataModel) => number
    i_get_n_columns: (model: DataModel) => number
    i_describe_column: (model: DataModel, col: number) => Column | null
    i_get_access_flags: (model: DataModel) => DataModelAccessFlags
    i_get_value_at: (model: DataModel, col: number, row: number) => any | null
    i_get_attributes_at: (model: DataModel, col: number, row: number) => ValueAttribute
    i_create_iter: (model: DataModel) => DataModelIter
    i_iter_at_row: (model: DataModel, iter: DataModelIter, row: number) => boolean
    i_iter_next: (model: DataModel, iter: DataModelIter) => boolean
    i_iter_prev: (model: DataModel, iter: DataModelIter) => boolean
    i_set_value_at: (model: DataModel, col: number, row: number, value: any) => boolean
    i_iter_set_value: (model: DataModel, iter: DataModelIter, col: number, value: any) => boolean
    i_set_values: (model: DataModel, row: number, values: any[] | null) => boolean
    i_append_values: (model: DataModel, values: any[] | null) => number
    i_append_row: (model: DataModel) => number
    i_remove_row: (model: DataModel, row: number) => boolean
    i_find_row: (model: DataModel, values: any[], cols_index: number[]) => number
    i_set_notify: (model: DataModel, do_notify_changes: boolean) => void
    i_get_notify: (model: DataModel) => boolean
    i_send_hint: (model: DataModel, hint: DataModelHint, hint_value: any | null) => void
    row_inserted: (model: DataModel, row: number) => void
    row_updated: (model: DataModel, row: number) => void
    row_removed: (model: DataModel, row: number) => void
    changed: (model: DataModel) => void
    reset: (model: DataModel) => void
    access_changed: (model: DataModel) => void
    i_get_exceptions: (model: DataModel) => GLib.Error[]
}

abstract class DataModelIface {

    // Own properties of Gda-5.0.Gda.DataModelIface

    static name: string
}

interface DataModelImportClass {

    // Own fields of Gda-5.0.Gda.DataModelImportClass

    parent_class: GObject.ObjectClass
}

abstract class DataModelImportClass {

    // Own properties of Gda-5.0.Gda.DataModelImportClass

    static name: string
}

interface DataModelImportPrivate {
}

class DataModelImportPrivate {

    // Own properties of Gda-5.0.Gda.DataModelImportPrivate

    static name: string
}

interface DataModelIterClass {

    // Own fields of Gda-5.0.Gda.DataModelIterClass

    parent_class: SetClass
    row_changed: (iter: DataModelIter, row: number) => void
    end_of_data: (iter: DataModelIter) => void
}

abstract class DataModelIterClass {

    // Own properties of Gda-5.0.Gda.DataModelIterClass

    static name: string
}

interface DataModelIterPrivate {
}

class DataModelIterPrivate {

    // Own properties of Gda-5.0.Gda.DataModelIterPrivate

    static name: string
}

interface DataModelLdapClass {

    // Own fields of Gda-5.0.Gda.DataModelLdapClass

    parent_class: GObject.ObjectClass
}

abstract class DataModelLdapClass {

    // Own properties of Gda-5.0.Gda.DataModelLdapClass

    static name: string
}

interface DataModelLdapPrivate {
}

class DataModelLdapPrivate {

    // Own properties of Gda-5.0.Gda.DataModelLdapPrivate

    static name: string
}

interface DataPivotClass {

    // Own fields of Gda-5.0.Gda.DataPivotClass

    parent_class: GObject.ObjectClass
}

abstract class DataPivotClass {

    // Own properties of Gda-5.0.Gda.DataPivotClass

    static name: string
}

interface DataPivotPrivate {
}

class DataPivotPrivate {

    // Own properties of Gda-5.0.Gda.DataPivotPrivate

    static name: string
}

interface DataProxyClass {

    // Own fields of Gda-5.0.Gda.DataProxyClass

    parent_class: GObject.ObjectClass
    row_delete_changed: (proxy: DataProxy, row: number, to_be_deleted: boolean) => void
    sample_size_changed: (proxy: DataProxy, sample_size: number) => void
    sample_changed: (proxy: DataProxy, sample_start: number, sample_end: number) => void
    validate_row_changes: (proxy: DataProxy, row: number, proxied_row: number) => GLib.Error
    row_changes_applied: (proxy: DataProxy, row: number, proxied_row: number) => void
    filter_changed: (proxy: DataProxy) => void
}

abstract class DataProxyClass {

    // Own properties of Gda-5.0.Gda.DataProxyClass

    static name: string
}

interface DataProxyPrivate {
}

class DataProxyPrivate {

    // Own properties of Gda-5.0.Gda.DataProxyPrivate

    static name: string
}

interface DataSelectClass {

    // Own fields of Gda-5.0.Gda.DataSelectClass

    parent_class: GObject.ObjectClass
    fetch_nb_rows: (model: DataSelect) => number
    fetch_random: (model: DataSelect, prow: Row, rownum: number) => boolean
    store_all: (model: DataSelect) => boolean
    fetch_next: (model: DataSelect, prow: Row, rownum: number) => boolean
    fetch_prev: (model: DataSelect, prow: Row, rownum: number) => boolean
    fetch_at: (model: DataSelect, prow: Row, rownum: number) => boolean
}

abstract class DataSelectClass {

    // Own properties of Gda-5.0.Gda.DataSelectClass

    static name: string
}

interface DataSelectPrivate {
}

class DataSelectPrivate {

    // Own properties of Gda-5.0.Gda.DataSelectPrivate

    static name: string
}

interface Diff {

    // Own fields of Gda-5.0.Gda.Diff

    type: DiffType
    old_row: number
    new_row: number
    values: GLib.HashTable
}

class Diff {

    // Own properties of Gda-5.0.Gda.Diff

    static name: string
}

interface DsnInfo {

    // Own fields of Gda-5.0.Gda.DsnInfo

    /**
     * the (unique) name of the DSN (plain text, not RFC 1738 encoded)
     * @field 
     */
    name: string
    /**
     * the ID of the database provider to be used (plain text, not RFC 1738 encoded)
     * @field 
     */
    provider: string
    /**
     * a descriptive string (plain text, not RFC 1738 encoded), can be %NULL.
     * @field 
     */
    description: string
    /**
     * the connection string, a semi-colon separated &lt;key>=&lt;value&gt; list where &lt;key&gt; and &lt;value&gt; are RFC 1738 encoded
     * @field 
     */
    cnc_string: string
    /**
     * the authentication string, a semi-colon separated &lt;key>=&lt;value&gt; list where &lt;key&gt; and &lt;value&gt; are RFC 1738 encoded. Can be %NULL.
     * @field 
     */
    auth_string: string
    /**
     * %TRUE if the DSN is a system wide defined data source
     * @field 
     */
    is_system: boolean

    // Owm methods of Gda-5.0.Gda.DsnInfo

    /**
     * Copy constructor.
     */
    copy(): DsnInfo
    /**
     * Frees any resources taken by `dsn` struct. If `dsn` is %NULL, then nothing happens.
     */
    free(): void
}

/**
 * This structure defines the properties of a named data source (DSN).
 * @record 
 */
class DsnInfo {

    // Own properties of Gda-5.0.Gda.DsnInfo

    static name: string

    // Constructors of Gda-5.0.Gda.DsnInfo

    /**
     * Creates a new #GdaDsnInfo struct.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdaDsnInfo struct.
     * @constructor 
     */
    static new(): DsnInfo
}

interface GeometricPoint {

    // Own fields of Gda-5.0.Gda.GeometricPoint

    x: number
    y: number
}

class GeometricPoint {

    // Own properties of Gda-5.0.Gda.GeometricPoint

    static name: string

    // Constructors of Gda-5.0.Gda.GeometricPoint

    static copy(boxed: object | null): object | null
    static free(boxed: object | null): void
}

interface HandlerBinClass {

    // Own fields of Gda-5.0.Gda.HandlerBinClass

    parent_class: GObject.ObjectClass
}

abstract class HandlerBinClass {

    // Own properties of Gda-5.0.Gda.HandlerBinClass

    static name: string
}

interface HandlerBinPriv {
}

class HandlerBinPriv {

    // Own properties of Gda-5.0.Gda.HandlerBinPriv

    static name: string
}

interface HandlerBooleanClass {

    // Own fields of Gda-5.0.Gda.HandlerBooleanClass

    parent_class: GObject.ObjectClass
}

abstract class HandlerBooleanClass {

    // Own properties of Gda-5.0.Gda.HandlerBooleanClass

    static name: string
}

interface HandlerBooleanPriv {
}

class HandlerBooleanPriv {

    // Own properties of Gda-5.0.Gda.HandlerBooleanPriv

    static name: string
}

interface HandlerNumericalClass {

    // Own fields of Gda-5.0.Gda.HandlerNumericalClass

    parent_class: GObject.ObjectClass
}

abstract class HandlerNumericalClass {

    // Own properties of Gda-5.0.Gda.HandlerNumericalClass

    static name: string
}

interface HandlerNumericalPriv {
}

class HandlerNumericalPriv {

    // Own properties of Gda-5.0.Gda.HandlerNumericalPriv

    static name: string
}

interface HandlerStringClass {

    // Own fields of Gda-5.0.Gda.HandlerStringClass

    parent_class: GObject.ObjectClass
}

abstract class HandlerStringClass {

    // Own properties of Gda-5.0.Gda.HandlerStringClass

    static name: string
}

interface HandlerStringPriv {
}

class HandlerStringPriv {

    // Own properties of Gda-5.0.Gda.HandlerStringPriv

    static name: string
}

interface HandlerTimeClass {

    // Own fields of Gda-5.0.Gda.HandlerTimeClass

    parent_class: GObject.ObjectClass
}

abstract class HandlerTimeClass {

    // Own properties of Gda-5.0.Gda.HandlerTimeClass

    static name: string
}

interface HandlerTimePriv {
}

class HandlerTimePriv {

    // Own properties of Gda-5.0.Gda.HandlerTimePriv

    static name: string
}

interface HandlerTypeClass {

    // Own fields of Gda-5.0.Gda.HandlerTypeClass

    parent_class: GObject.ObjectClass
}

abstract class HandlerTypeClass {

    // Own properties of Gda-5.0.Gda.HandlerTypeClass

    static name: string
}

interface HandlerTypePriv {
}

class HandlerTypePriv {

    // Own properties of Gda-5.0.Gda.HandlerTypePriv

    static name: string
}

interface HolderClass {

    // Own fields of Gda-5.0.Gda.HolderClass

    parent_class: GObject.ObjectClass
    changed: (holder: Holder) => void
    source_changed: (holder: Holder) => void
    validate_change: (holder: Holder, new_value: any) => GLib.Error
    att_changed: (holder: Holder, att_name: string, att_value: any) => void
}

abstract class HolderClass {

    // Own properties of Gda-5.0.Gda.HolderClass

    static name: string
}

interface HolderPrivate {
}

class HolderPrivate {

    // Own properties of Gda-5.0.Gda.HolderPrivate

    static name: string
}

interface LockableIface {

    // Own fields of Gda-5.0.Gda.LockableIface

    g_iface: GObject.TypeInterface
    i_lock: (lock: Lockable) => void
    i_trylock: (lock: Lockable) => boolean
    i_unlock: (lock: Lockable) => void
}

abstract class LockableIface {

    // Own properties of Gda-5.0.Gda.LockableIface

    static name: string
}

interface MetaContext {

    // Own fields of Gda-5.0.Gda.MetaContext

    /**
     * the name of the table <emphasis>in the GdaMetaStore's internal database</emphasis>
     * @field 
     */
    table_name: string
    /**
     * the size of the `column_names` and `column_values` arrays
     * @field 
     */
    size: number
    /**
     * an array of column names (columns of the `table_name` table)
     * @field 
     */
    column_names: string[]
    /**
     * an array of values, one for each column named in `column_names`
     * @field 
     */
    column_values: any[]
    /**
     * A #GHashTable storing columns' name as key and #GValue as column's
     * value.
     * @field 
     */
    columns: GLib.HashTable

    // Owm methods of Gda-5.0.Gda.MetaContext

    /**
     * Copy constructor.
     */
    copy(): MetaContext
    /**
     * Frees any resources taken by `ctx` struct. If `ctx` is %NULL, then nothing happens.
     */
    free(): void
    /**
     * Get table's name to used in the context.
     */
    get_table(): string
    /**
     * Sets a new column/value pair to the given context `ctx`. Column, must be a column in the given table's
     * name setted by #gda_meta_context_set_table () (a table in the <link linkend="information_schema">database
     * schema</link>). If the given `column` already exists it's value is overwrited.
     * 
     * Column's name and value is copied and destroyed when #gda_meta_context_free is called.
     * @param column the column's name
     * @param value the column's value
     * @param cnc a #GdaConnection to be used when identifier are normalized, or NULL
     */
    set_column(column: string, value: any, cnc: Connection | null): void
    /**
     * Set columns to use in the context. The #GHashTable use column's name as key and a #GValue as value,
     * to represent its value.
     * 
     * `columns` incements its reference counting. Is recommended to use #gda_meta_context_free in order to free them.
     * @param columns a #GHashTable with the table's columns' name and their values to use in context.
     * @param cnc a #GdaConnection to used to normalize identifiers quoting, or NULL
     */
    set_columns(columns: GLib.HashTable, cnc: Connection | null): void
    /**
     * Set table's name to use in the context. The table is one of <link linkend="information_schema">database
     * schema</link> used to store meta information about the database. Use "_tables" to update meta information
     * about database's tables.
     * @param table a string with the table's name to use in context
     */
    set_table(table: string): void
}

/**
 * The <structname>GdaMetaContext</structname> represents a meta data modification
 * context: the <emphasis>how</emphasis> when used with gda_meta_store_modify_with_context(),
 * and the <emphasis>what</emphasis> when used with gda_connection_update_meta_store().
 * 
 * To create a new #GdaMetaContext use #gda_meta_context_new.
 * 
 * To add a new column/value pair use #gda_meta_context_add_column.
 * 
 * To free a #GdaMetaContext, created by #gda_meta_context_new, use #gda_attributes_manager_free.
 * 
 * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
 * Don't try to use #gda_meta_context_free on a struct that was created manually.
 * @record 
 */
class MetaContext {

    // Own properties of Gda-5.0.Gda.MetaContext

    static name: string

    // Constructors of Gda-5.0.Gda.MetaContext

    /**
     * Creates a new #GdaMetaContext struct with a #GHashTable to store column/value pairs.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdaMetaContext struct with a #GHashTable to store column/value pairs.
     * @constructor 
     */
    static new(): MetaContext
}

interface MetaDbObject {

    // Own fields of Gda-5.0.Gda.MetaDbObject

    /**
     * the type of object (table, view)
     * @field 
     */
    obj_type: MetaDbObjectType
    /**
     * set to %TRUE if the information in this #GdaMetaDbObject may be outdated because the #GdaMetaStore has been updated
     * @field 
     */
    outdated: boolean
    /**
     * the catalog the object is in
     * @field 
     */
    obj_catalog: string
    /**
     * the schema the object is in
     * @field 
     */
    obj_schema: string
    /**
     * the object's name
     * @field 
     */
    obj_name: string
    /**
     * the shortest way to name the object
     * @field 
     */
    obj_short_name: string
    /**
     * the full name of the object (in the &lt;schema&gt;.&lt;nameagt; notation
     * @field 
     */
    obj_full_name: string
    /**
     * object's owner
     * @field 
     */
    obj_owner: string
    /**
     * list of #GdaMetaDbObject pointers on which this object depends (through foreign keys
     *               or tables used for views)
     * @field 
     */
    depend_list: MetaDbObject[]
}

/**
 * Struture to hold information about each database object (tables, views, ...),
 * its contents must not be modified.
 * 
 * Note: `obj_catalog,` `obj_schema,` `obj_name,` `obj_short_name` and `obj_full_name` respect the
 * <link linkend="information_schema:sql_identifiers">SQL identifiers</link> convention used in
 * #GdaMetaStore objects. Before using these SQL identifiers, you should check the
 * gda_sql_identifier_quote() to know if is it is necessary to surround by double quotes
 * before using in an SQL statement.
 * @record 
 */
class MetaDbObject {

    // Own properties of Gda-5.0.Gda.MetaDbObject

    static name: string
}

interface MetaStoreChange {

    // Own fields of Gda-5.0.Gda.MetaStoreChange

    c_type: MetaStoreChangeType
    table_name: string
    keys: GLib.HashTable
}

class MetaStoreChange {

    // Own properties of Gda-5.0.Gda.MetaStoreChange

    static name: string
}

interface MetaStoreClass {

    // Own fields of Gda-5.0.Gda.MetaStoreClass

    parent_class: GObject.ObjectClass
    cpriv: MetaStoreClassPrivate
    meta_reset: (store: MetaStore) => void
    suggest_update: (store: MetaStore, suggest: MetaContext) => GLib.Error
}

abstract class MetaStoreClass {

    // Own properties of Gda-5.0.Gda.MetaStoreClass

    static name: string
}

interface MetaStoreClassPrivate {
}

class MetaStoreClassPrivate {

    // Own properties of Gda-5.0.Gda.MetaStoreClassPrivate

    static name: string
}

interface MetaStorePrivate {
}

class MetaStorePrivate {

    // Own properties of Gda-5.0.Gda.MetaStorePrivate

    static name: string
}

interface MetaStructClass {

    // Own fields of Gda-5.0.Gda.MetaStructClass

    parent_class: GObject.ObjectClass
}

abstract class MetaStructClass {

    // Own properties of Gda-5.0.Gda.MetaStructClass

    static name: string
}

interface MetaStructPrivate {
}

class MetaStructPrivate {

    // Own properties of Gda-5.0.Gda.MetaStructPrivate

    static name: string
}

interface MetaTable {

    // Own fields of Gda-5.0.Gda.MetaTable

    /**
     * list of #GdaMetaTableColumn structures, one for each column in the table
     * @field 
     */
    columns: MetaTableColumn[]
    /**
     * index of the columns part of the primary key for the table (WARNING: columns numbering
     *                 here start at 0)
     * @field 
     */
    pk_cols_array: number
    /**
     * size of the `pk_cols_array` array
     * @field 
     */
    pk_cols_nb: number
    /**
     * list of #GdaMetaTableForeignKey where the referenced table is this table
     * @field 
     */
    reverse_fk_list: MetaTableForeignKey[]
    /**
     * list of #GdaMetaTableForeignKey for this table
     * @field 
     */
    fk_list: MetaTableForeignKey[]
}

/**
 * This structure specifies a #GdaMetaDbObject to represent a table's specific attributes,
 * its contents must not be modified.
 * 
 * Note that in some cases, the columns cannot be determined for views, and in this case the
 * `columns` will be %NULL (this can be the case for example with SQLite where a view
 * uses a function which is not natively provided by SQLite.
 * @record 
 */
class MetaTable {

    // Own properties of Gda-5.0.Gda.MetaTable

    static name: string
}

interface MetaTableColumn {

    // Own fields of Gda-5.0.Gda.MetaTableColumn

    /**
     * the column's name
     * @field 
     */
    column_name: string
    /**
     * the column's DBMS's type
     * @field 
     */
    column_type: string
    /**
     * the detected column's #GType
     * @field 
     */
    gtype: GObject.GType
    /**
     * tells if the column is part of a primary key
     * @field 
     */
    pkey: boolean
    /**
     * tells if the column can be %NULL
     * @field 
     */
    nullok: boolean
    /**
     * the column's default value, represented as a valid SQL value (surrounded by simple quotes for strings, ...), or %NULL if column has no default value
     * @field 
     */
    default_value: string

    // Owm methods of Gda-5.0.Gda.MetaTableColumn

    /**
     * Calls `func` for each attribute set to tcol
     * @param func a #GdaAttributesManagerFunc function
     */
    foreach_attribute(func: AttributesManagerFunc): void
    /**
     * Get the value associated to a named attribute.
     * 
     * Attributes can have any name, but Libgda proposes some default names, see <link linkend="libgda-5.0-Attributes-manager.synopsis">this section</link>.
     * @param attribute attribute name as a string
     */
    get_attribute(attribute: string): any
    /**
     * Set the value associated to a named attribute.
     * 
     * Attributes can have any name, but Libgda proposes some default names, see <link linkend="libgda-40-Attributes-manager.synopsis">this section</link>.
     * If there is already an attribute named `attribute` set, then its value is replaced with the new `value,`
     * except if `value` is %NULL, in which case the attribute is removed.
     * 
     * Warning: `attribute` is not copied, if it needs to be freed when not used anymore, then `destroy` should point to
     * the functions which will free it (typically g_free()). If `attribute` does not need to be freed, then `destroy` can be %NULL.
     * @param attribute attribute name as a static string
     * @param value a #GValue, or %NULL
     * @param destroy function called when `attribute` has to be freed, or %NULL
     */
    set_attribute(attribute: string, value: any | null, destroy: GLib.DestroyNotify | null): void
}

/**
 * This structure represents a table of view's column, its contents must not be modified.
 * @record 
 */
class MetaTableColumn {

    // Own properties of Gda-5.0.Gda.MetaTableColumn

    static name: string
}

interface MetaTableForeignKey {

    // Own fields of Gda-5.0.Gda.MetaTableForeignKey

    /**
     * the #GdaMetaDbObject for which this structure represents a foreign key
     * @field 
     */
    meta_table: MetaDbObject
    /**
     * the #GdaMetaDbObject which is referenced by the foreign key
     * @field 
     */
    depend_on: MetaDbObject
    /**
     * the size of the `fk_cols_array,` `fk_names_array,` `ref_pk_cols_array` and `ref_pk_names_array` arrays
     * @field 
     */
    cols_nb: number
    /**
     * the columns' indexes in `meta_table` which participate in the constraint (WARNING: columns numbering
     *                 here start at 1)
     * @field 
     */
    fk_cols_array: number
    /**
     * the columns' names in `meta_table` which participate in the constraint
     * @field 
     */
    fk_names_array: string
    /**
     * the columns' indexes in `depend_on` which participate in the constraint (WARNING: columns numbering
     *                 here start at 1)
     * @field 
     */
    ref_pk_cols_array: number
    /**
     * the columns' names in `depend_on` which participate in the constraint
     * @field 
     */
    ref_pk_names_array: string
    fk_name: string
}

/**
 * This structure represents a foreign key constraint, its contents must not be modified.
 * @record 
 */
class MetaTableForeignKey {

    // Own properties of Gda-5.0.Gda.MetaTableForeignKey

    static name: string
}

interface MetaView {

    // Own fields of Gda-5.0.Gda.MetaView

    /**
     * a view is also a table as it has columns
     * @field 
     */
    table: MetaTable
    /**
     * views' definition
     * @field 
     */
    view_def: string
    /**
     * tells if the view's contents can be updated
     * @field 
     */
    is_updatable: boolean
}

/**
 * This structure specifies a #GdaMetaDbObject to represent a view's specific attributes,
 * its contents must not be modified.
 * @record 
 */
class MetaView {

    // Own properties of Gda-5.0.Gda.MetaView

    static name: string
}

interface Numeric {

    // Own fields of Gda-5.0.Gda.Numeric

    /**
     * a string representing a number
     * @field 
     */
    number: string
    /**
     * precision to use when `number` is converted (not implemented jet)
     * @field 
     */
    precision: number
    /**
     * not implemented jet
     * @field 
     */
    width: number

    // Owm methods of Gda-5.0.Gda.Numeric

    /**
     * Creates a new #GdaNumeric structure from an existing one.
     */
    copy(): Numeric
    /**
     * Deallocates all memory associated to the given `boxed`
     */
    free(): void
    get_double(): number
    /**
     * Gets the precision of a #GdaNumeric.
     */
    get_precision(): number
    /**
     * Get the string representation of `numeric,` in the C locale format (dot as a fraction separator).
     */
    get_string(): string | null
    /**
     * Gets the width of a #GdaNumeric. (Not yet implemented).
     */
    get_width(): number
    /**
     * Sets `numeric` using a #gdouble represented by `number`.
     * @param number a #gdouble
     */
    set_double(number: number): void
    /**
     * Sets `numeric` with a number represented by `str,` in the C locale format (dot as a fraction separator).
     * @param str a string representing a number, in the C locale format
     */
    set_from_string(str: string): void
    /**
     * Sets the precision of a #GdaNumeric.
     * @param precision a #glong
     */
    set_precision(precision: number): void
    /**
     * Sets the width of a #GdaNumeric. (Not yet implemented).
     * @param width a #glong
     */
    set_width(width: number): void
}

/**
 * Holds numbers represented as strings.
 * 
 * This struct must be considered as opaque. Any access to its members must use its
 * accessors added since version 5.0.2.
 * @record 
 */
class Numeric {

    // Own properties of Gda-5.0.Gda.Numeric

    static name: string

    // Constructors of Gda-5.0.Gda.Numeric

    /**
     * Creates a new #GdaNumeric with defaults.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdaNumeric with defaults.
     * @constructor 
     */
    static new(): Numeric
}

interface PStmtClass {

    // Own fields of Gda-5.0.Gda.PStmtClass

    parent_class: GObject.ObjectClass
}

abstract class PStmtClass {

    // Own properties of Gda-5.0.Gda.PStmtClass

    static name: string
}

interface PStmtPrivate {
}

class PStmtPrivate {

    // Own properties of Gda-5.0.Gda.PStmtPrivate

    static name: string
}

interface ProviderInfo {

    // Own fields of Gda-5.0.Gda.ProviderInfo

    /**
     * the unique identifier of the database provider
     * @field 
     */
    id: string
    /**
     * the complete path to the shared library implementing the database provider
     * @field 
     */
    location: string
    /**
     * provider's description
     * @field 
     */
    description: string
    /**
     * a #GdaSet containing all the parameters which can/must be specified when opening a connection or defining a named data source (DSN)
     * @field 
     */
    dsn_params: Set
    /**
     * a #GdaSet containing all the authentication parameters
     * @field 
     */
    auth_params: Set
}

/**
 * This structure holds the information associated to a database provider as discovered by Libgda.
 * @record 
 */
class ProviderInfo {

    // Own properties of Gda-5.0.Gda.ProviderInfo

    static name: string
}

interface QuarkList {

    // Owm methods of Gda-5.0.Gda.QuarkList

    /**
     * `string` must be a semi-colon separated list of "&lt;key&gt;=&lt;value&gt;" strings (for example
     * "DB_NAME=notes;USERNAME=alfred"). Each key and value must respect the RFC 1738 recommendations: the
     * <constant>&lt;&gt;&quot;#%{}|\^~[]&apos;`;/?:`=`&amp;</constant> and space characters are replaced by
     * <constant>&quot;%%ab&quot;</constant> where
     * <constant>ab</constant> is the hexadecimal number corresponding to the character (for example the
     * "DB_NAME=notes;USERNAME=al%%20fred" string will specify a username as "al fred"). If this formalism
     * is not respected, then some unexpected results may occur.
     * 
     * Adds new key->value pairs from the given `string`. If `cleanup` is
     * set to %TRUE, the previous contents will be discarded before adding
     * the new pairs.
     * @param string a string.
     * @param cleanup whether to cleanup the previous content or not.
     */
    add_from_string(string: string, cleanup: boolean): void
    /**
     * Removes all strings in the given #GdaQuarkList.
     */
    clear(): void
    /**
     * Creates a new #GdaQuarkList from an existing one.
     */
    copy(): QuarkList
    /**
     * Searches for the value identified by `name` in the given #GdaQuarkList. For protected values
     * (authentification data), don't forget to call gda_quark_list_protect_values() when you
     * don't need them anymore (when needed again, they will be unmangled again).
     * @param name the name of the value to search for.
     */
    find(name: string): string
    /**
     * Calls the given function for each of the key/value pairs in `qlist`. The function is passed the key and value
     * of each pair, and the given user_data parameter. `qlist` may not be modified while iterating over it.
     * @param func the function to call for each key/value pair
     */
    foreach(func: GLib.HFunc): void
    /**
     * Releases all memory occupied by the given #GdaQuarkList.
     */
    free(): void
    /**
     * Call this function to get rid of the clear version of the value associated to
     * `name`.
     */
    protect_values(): void
    /**
     * Removes an entry from the #GdaQuarkList, given its name.
     * @param name an entry name.
     */
    remove(name: string): void
}

class QuarkList {

    // Own properties of Gda-5.0.Gda.QuarkList

    static name: string

    // Constructors of Gda-5.0.Gda.QuarkList

    /**
     * Creates a new #GdaQuarkList, which is a set of key->value pairs,
     * very similar to GLib's GHashTable, but with the only purpose to
     * make easier the parsing and creation of data source connection
     * strings.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdaQuarkList, which is a set of key->value pairs,
     * very similar to GLib's GHashTable, but with the only purpose to
     * make easier the parsing and creation of data source connection
     * strings.
     * @constructor 
     */
    static new(): QuarkList
    /**
     * Creates a new #GdaQuarkList given a string.
     * 
     * `string` must be a semi-colon separated list of "&lt;key&gt;=&lt;value&gt;" strings (for example
     * "DB_NAME=notes;USERNAME=alfred"). Each key and value must respect the RFC 1738 recommendations: the
     * <constant>&lt;&gt;&quot;#%{}|\^~[]&apos;`;/?:`=`&amp;</constant> and space characters are replaced by
     * <constant>&quot;%%ab&quot;</constant> where
     * <constant>ab</constant> is the hexadecimal number corresponding to the character (for example the
     * "DB_NAME=notes;USERNAME=al%%20fred" string will specify a username as "al fred"). If this formalism
     * is not respected, then some unexpected results may occur.
     * @constructor 
     * @param string a string.
     */
    static new_from_string(string: string): QuarkList
}

interface RepetitiveStatementClass {

    // Own fields of Gda-5.0.Gda.RepetitiveStatementClass

    parent_class: GObject.ObjectClass
}

abstract class RepetitiveStatementClass {

    // Own properties of Gda-5.0.Gda.RepetitiveStatementClass

    static name: string
}

interface RowClass {

    // Own fields of Gda-5.0.Gda.RowClass

    parent_class: GObject.ObjectClass
}

abstract class RowClass {

    // Own properties of Gda-5.0.Gda.RowClass

    static name: string
}

interface RowPrivate {
}

class RowPrivate {

    // Own properties of Gda-5.0.Gda.RowPrivate

    static name: string
}

interface ServerOperationClass {

    // Own fields of Gda-5.0.Gda.ServerOperationClass

    parent_class: GObject.ObjectClass
    seq_item_added: (op: ServerOperation, seq_path: string, item_index: number) => void
    seq_item_remove: (op: ServerOperation, seq_path: string, item_index: number) => void
}

abstract class ServerOperationClass {

    // Own properties of Gda-5.0.Gda.ServerOperationClass

    static name: string
}

interface ServerOperationNode {

    // Own fields of Gda-5.0.Gda.ServerOperationNode

    type: ServerOperationNodeType
    status: ServerOperationNodeStatus
    plist: Set
    model: DataModel
    column: Column
    param: Holder
    priv: object
}

class ServerOperationNode {

    // Own properties of Gda-5.0.Gda.ServerOperationNode

    static name: string
}

interface ServerOperationPrivate {
}

class ServerOperationPrivate {

    // Own properties of Gda-5.0.Gda.ServerOperationPrivate

    static name: string
}

interface ServerProviderClass {

    // Own fields of Gda-5.0.Gda.ServerProviderClass

    parent_class: GObject.ObjectClass
    limiting_thread: GLib.Thread
    get_name: (provider: ServerProvider) => string
    get_version: (provider: ServerProvider) => string
    get_server_version: (provider: ServerProvider, cnc: Connection) => string
    supports_feature: (provider: ServerProvider, cnc: Connection | null, feature: ConnectionFeature) => boolean
    get_def_dbms_type: (provider: ServerProvider, cnc: Connection, g_type: GObject.GType) => string
    escape_string: (provider: ServerProvider, cnc: Connection | null, str: string) => string
    unescape_string: (provider: ServerProvider, cnc: Connection | null, str: string) => string
    close_connection: (provider: ServerProvider, cnc: Connection) => boolean
    get_database: (provider: ServerProvider, cnc: Connection) => string
    supports_operation: (provider: ServerProvider, cnc: Connection | null, type: ServerOperationType, options: Set | null) => boolean
    create_operation: (provider: ServerProvider, cnc: Connection | null, type: ServerOperationType, options: Set | null) => ServerOperation | null
    render_operation: (provider: ServerProvider, cnc: Connection | null, op: ServerOperation) => string | null
    begin_transaction: (provider: ServerProvider, cnc: Connection, name: string, level: TransactionIsolation) => boolean
    commit_transaction: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    rollback_transaction: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    add_savepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    rollback_savepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    delete_savepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    create_parser: (provider: ServerProvider, cnc: Connection | null) => SqlParser
    statement_prepare: (provider: ServerProvider, cnc: Connection, stmt: Statement) => boolean
    is_busy: (provider: ServerProvider, cnc: Connection) => boolean
    cancel: (provider: ServerProvider, cnc: Connection, task_id: number) => boolean
    meta_funcs: ServerProviderMeta
    xa_funcs: ServerProviderXa
    identifier_quote: (provider: ServerProvider, cnc: Connection, id: string, for_meta_store: boolean, force_quotes: boolean) => string
    handle_async: (provider: ServerProvider, cnc: Connection) => boolean
}

abstract class ServerProviderClass {

    // Own properties of Gda-5.0.Gda.ServerProviderClass

    static name: string
}

interface ServerProviderHandlerInfo {

    // Own fields of Gda-5.0.Gda.ServerProviderHandlerInfo

    cnc: Connection
    g_type: GObject.GType
    dbms_type: string
}

class ServerProviderHandlerInfo {

    // Own properties of Gda-5.0.Gda.ServerProviderHandlerInfo

    static name: string
}

interface ServerProviderInfo {
}

class ServerProviderInfo {

    // Own properties of Gda-5.0.Gda.ServerProviderInfo

    static name: string
}

interface ServerProviderMeta {

    // Own fields of Gda-5.0.Gda.ServerProviderMeta

    udt: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udt_catalog: any, udt_schema: any) => boolean
    udt_cols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udt_catalog: any, udt_schema: any, udt_name: any) => boolean
    enums: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udt_catalog: any, udt_schema: any, udt_name: any) => boolean
    domains: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, domain_catalog: any, domain_schema: any) => boolean
    constraints_dom: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, domain_catalog: any, domain_schema: any, domain_name: any) => boolean
    el_types: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, specific_name: any) => boolean
    collations: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, collation_catalog: any, collation_schema: any, collation_name_n: any) => boolean
    character_sets: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, chset_catalog: any, chset_schema: any, chset_name_n: any) => boolean
    schemata: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, catalog_name: any, schema_name_n: any) => boolean
    tables_views: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name_n: any) => boolean
    columns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any) => boolean
    view_cols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, view_catalog: any, view_schema: any, view_name: any) => boolean
    constraints_tab: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, constraint_name_n: any) => boolean
    constraints_ref: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, constraint_name: any) => boolean
    key_columns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, constraint_name: any) => boolean
    check_columns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, constraint_name: any) => boolean
    triggers: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any) => boolean
    routines: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, routine_catalog: any, routine_schema: any, routine_name_n: any) => boolean
    routine_col: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, rout_catalog: any, rout_schema: any, rout_name: any) => boolean
    routine_par: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, rout_catalog: any, rout_schema: any, rout_name: any) => boolean
    indexes_tab: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, index_name_n: any) => boolean
    index_cols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, index_name: any) => boolean
}

/**
 * These methods must be implemented by providers to update a connection's associated metadata (in a
 * #GdaMetaStore object), see the <link linkend="prov-metadata">Virtual methods for providers/Methods - metadata</link>
 * for more information.
 * @record 
 */
class ServerProviderMeta {

    // Own properties of Gda-5.0.Gda.ServerProviderMeta

    static name: string
}

interface ServerProviderPrivate {

    // Own fields of Gda-5.0.Gda.ServerProviderPrivate

    data_handlers: GLib.HashTable
    parser: SqlParser
}

class ServerProviderPrivate {

    // Own properties of Gda-5.0.Gda.ServerProviderPrivate

    static name: string
}

interface ServerProviderXa {

    // Own fields of Gda-5.0.Gda.ServerProviderXa

    xa_start: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xa_end: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xa_prepare: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xa_commit: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xa_rollback: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
}

class ServerProviderXa {

    // Own properties of Gda-5.0.Gda.ServerProviderXa

    static name: string
}

interface SetClass {

    // Own fields of Gda-5.0.Gda.SetClass

    parent_class: GObject.ObjectClass
    validate_holder_change: (set: Set, holder: Holder, new_value: any) => GLib.Error
    validate_set: (set: Set) => GLib.Error
    holder_changed: (set: Set, holder: Holder) => void
    holder_attr_changed: (set: Set, holder: Holder, attr_name: string, attr_value: any) => void
    public_data_changed: (set: Set) => void
    holder_type_set: (set: Set, holder: Holder) => void
    source_model_changed: (set: Set, source: SetSource) => void
}

abstract class SetClass {

    // Own properties of Gda-5.0.Gda.SetClass

    static name: string
}

interface SetGroup {

    // Own fields of Gda-5.0.Gda.SetGroup

    /**
     * list of GdaSetNode, at least one entry
     * @field 
     */
    nodes: SetNode[]
    /**
     * if NULL, then `nodes` contains exactly one entry
     * @field 
     */
    nodes_source: SetSource

    // Owm methods of Gda-5.0.Gda.SetGroup

    add_node(node: SetNode): void
    /**
     * Copy constructor.
     */
    copy(): SetGroup
    /**
     * Frees any resources taken by `sg` struct. If `sg` is %NULL, then nothing happens.
     */
    free(): void
    get_n_nodes(): number
    /**
     * This method always return first #GdaSetNode in `sg`.
     */
    get_node(): SetNode
    /**
     * Returns a #GSList with the #GdaSetNode grouped by `sg`. You must use
     * #g_slist_free on returned list.
     */
    get_nodes(): SetNode[]
    get_source(): SetSource
    set_source(source: SetSource): void
}

/**
 * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
 * Don't try to use #gda_set_group_free on a struct that was created manually.
 * @record 
 */
class SetGroup {

    // Own properties of Gda-5.0.Gda.SetGroup

    static name: string

    // Constructors of Gda-5.0.Gda.SetGroup

    /**
     * Creates a new #GdaSetGroup struct. If `source` is %NULL then new group contains
     * just one #GdaSetNode.
     * @constructor 
     * @param node a #GdaSetNode struct
     */
    constructor(node: SetNode) 
    /**
     * Creates a new #GdaSetGroup struct. If `source` is %NULL then new group contains
     * just one #GdaSetNode.
     * @constructor 
     * @param node a #GdaSetNode struct
     */
    static new(node: SetNode): SetGroup
}

interface SetNode {

    // Own fields of Gda-5.0.Gda.SetNode

    /**
     * a #GdaHolder. It can't be NULL
     * @field 
     */
    holder: Holder
    /**
     * a #GdaDataModel. It could be NULL
     * @field 
     */
    source_model: DataModel
    /**
     * a #gint with the number of column in `source_model`
     * @field 
     */
    source_column: number

    // Owm methods of Gda-5.0.Gda.SetNode

    /**
     * Copy constructor.
     */
    copy(): SetNode
    /**
     * Frees any resources taken by `node` struct. If `node` is %NULL, then nothing happens.
     */
    free(): void
    get_data_model(): DataModel
    get_holder(): Holder
    get_source_column(): number
    /**
     * Set a #GdaDataModel to be used by `node`. `model` increment its reference
     * counting when set. Internally referenced column number is set to first column
     * in `model`.
     * @param model a #GdaDataModel to be used by `node`
     */
    set_data_model(model: DataModel | null): void
    /**
     * Set a #GdaHolder to `node`.
     * @param holder 
     */
    set_holder(holder: Holder): void
    /**
     * Set column number in the #GdaDataModel used `node`. If no #GdaDataModel is set
     * then column is set to invalid (-1);
     * @param column 
     */
    set_source_column(column: number): void
}

/**
 * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
 * Don't try to use #gda_set_node_free on a struct that was created manually.
 * @record 
 */
class SetNode {

    // Own properties of Gda-5.0.Gda.SetNode

    static name: string

    // Constructors of Gda-5.0.Gda.SetNode

    /**
     * Creates a new #GdaSetNode struct.
     * @constructor 
     * @param holder a #GdaHolder to used by new #GdaSetNode
     */
    constructor(holder: Holder) 
    /**
     * Creates a new #GdaSetNode struct.
     * @constructor 
     * @param holder a #GdaHolder to used by new #GdaSetNode
     */
    static new(holder: Holder): SetNode
}

interface SetPrivate {
}

class SetPrivate {

    // Own properties of Gda-5.0.Gda.SetPrivate

    static name: string
}

interface SetSource {

    // Own fields of Gda-5.0.Gda.SetSource

    /**
     * Can't be NULL
     * @field 
     */
    data_model: DataModel
    /**
     * list of #GdaSetNode for which source_model == `data_model`
     * @field 
     */
    nodes: SetNode[]

    // Owm methods of Gda-5.0.Gda.SetSource

    /**
     * Set a #GdaDataModel
     * @param node a #GdaSetNode to add
     */
    add_node(node: SetNode): void
    /**
     * Copy constructor.
     */
    copy(): SetSource
    /**
     * Frees any resources taken by `s` struct. If `s` is %NULL, then nothing happens.
     */
    free(): void
    get_data_model(): DataModel
    get_n_nodes(): number
    get_nodes(): SetNode[]
    /**
     * Set a #GdaDataModel
     * @param model a #GdaDataModel
     */
    set_data_model(model: DataModel): void
}

/**
 * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
 * Don't try to use #gda_set_source_free on a struct that was created manually.
 * @record 
 */
class SetSource {

    // Own properties of Gda-5.0.Gda.SetSource

    static name: string

    // Constructors of Gda-5.0.Gda.SetSource

    /**
     * Creates a new #GdaSetSource struct.
     * @constructor 
     * @param model a #GdaDataModel
     */
    constructor(model: DataModel) 
    /**
     * Creates a new #GdaSetSource struct.
     * @constructor 
     * @param model a #GdaDataModel
     */
    static new(model: DataModel): SetSource
}

interface SqlAnyPart {

    // Own fields of Gda-5.0.Gda.SqlAnyPart

    /**
     * type of structure, as a #GdaSqlAnyPartType enum.
     * @field 
     */
    type: any
    /**
     * pointer to the parent #GdaSqlAnyPart structure
     * @field 
     */
    parent: any

    // Owm methods of Gda-5.0.Gda.SqlAnyPart

    check_structure(): boolean
}

/**
 * Base structure of which all structures (except #GdaSqlStatement) "inherit". It identifies, for each structure,
 * its type and its parent in the structure hierarchy.
 * @record 
 */
class SqlAnyPart {

    // Own properties of Gda-5.0.Gda.SqlAnyPart

    static name: string
}

interface SqlBuilderClass {

    // Own fields of Gda-5.0.Gda.SqlBuilderClass

    parent_class: GObject.ObjectClass
}

abstract class SqlBuilderClass {

    // Own properties of Gda-5.0.Gda.SqlBuilderClass

    static name: string
}

interface SqlBuilderPrivate {
}

class SqlBuilderPrivate {

    // Own properties of Gda-5.0.Gda.SqlBuilderPrivate

    static name: string
}

interface SqlCase {

    // Own fields of Gda-5.0.Gda.SqlCase

    /**
     * inheritance structure
     * @field 
     */
    any: any
    /**
     * expression to test
     * @field 
     */
    base_expr: any
    /**
     * list of #GdaSqlExpr, one for each WHEN clause
     * @field 
     */
    when_expr_list: object[]
    /**
     * list of #GdaSqlExpr, one for each THEN clause
     * @field 
     */
    then_expr_list: object[]
    /**
     * default expression for the CASE
     * @field 
     */
    else_expr: any

    // Owm methods of Gda-5.0.Gda.SqlCase

    free(): void
    serialize(): string
}

/**
 * This structure represents a CASE WHEN... construct
 * @record 
 */
class SqlCase {

    // Own properties of Gda-5.0.Gda.SqlCase

    static name: string
}

interface SqlExpr {

    // Own fields of Gda-5.0.Gda.SqlExpr

    /**
     * inheritance structure
     * @field 
     */
    any: any
    /**
     * a #GValue, or %NULL. Please see specific note about this field.
     * @field 
     */
    value: any
    /**
     * a #GdaSqlParamSpec, or %NULL if this is not a variable
     * @field 
     */
    param_spec: any
    /**
     * not %NULL if expression is a function or aggregate
     * @field 
     */
    func: any
    /**
     * not %NULL if expression is a condition or an operation
     * @field 
     */
    cond: any
    /**
     * not %NULL if expression is a sub select statement (#GdaSqlStatementSelect or #GdaSqlStatementCompound)
     * @field 
     */
    select: any
    /**
     * not %NULL if expression is a CASE WHEN ... expression
     * @field 
     */
    case_s: any
    /**
     * not %NULL if expression must be cast to another data type
     * @field 
     */
    cast_as: string
    /**
     * Please see specific note about the `value` field
     * @field 
     */
    value_is_ident: boolean

    // Owm methods of Gda-5.0.Gda.SqlExpr

    free(): void
    serialize(): string
    take_select(stmt: SqlStatement): void
}

/**
 * This structure contains any expression, either as a value (the `value` part is set),
 * a variable (the `param_spec` is set), or as other types of expressions.
 * 
 * Note 1 about the `value` field: if the expression represents a string value in the SQL statement,
 * the string itself must be represented as it would be in the actual SQL, ie. it should be
 * escaped (accordingly to the escaping rules of the database which will use the SQL). For
 * example a string representing the <userinput>'joe'</userinput> value should be
 * <userinput>"'joe'"</userinput> and not <userinput>"joe"</userinput>.
 * 
 * Note 2 about the `value` field: if the expression represents an SQL identifier (such as a table
 * or field name), then the `value_is_ident` should be set to %TRUE, and `value` should be a string
 * which may contain double quotes around SQL identifiers which also are reserved keywords or which
 * are case sensitive.
 * @record 
 */
class SqlExpr {

    // Own properties of Gda-5.0.Gda.SqlExpr

    static name: string
}

interface SqlField {

    // Own fields of Gda-5.0.Gda.SqlField

    any: any
    field_name: string
    validity_meta_table_column: MetaTableColumn

    // Owm methods of Gda-5.0.Gda.SqlField

    free(): void
    serialize(): string
    take_name(value: any): void
}

/**
 * any:
 * This structure represents the name of a table's field.
 * @record 
 */
class SqlField {

    // Own properties of Gda-5.0.Gda.SqlField

    static name: string
}

interface SqlFunction {

    // Own fields of Gda-5.0.Gda.SqlFunction

    /**
     * inheritance structure
     * @field 
     */
    any: any
    /**
     * name of the function , in the form [[catalog.]schema.]function_name
     * @field 
     */
    function_name: string
    /**
     * list of #GdaSqlExpr expressions, one for each argument
     * @field 
     */
    args_list: object[]

    // Owm methods of Gda-5.0.Gda.SqlFunction

    check_clean(): void
    free(): void
    serialize(): string
    take_args_list(args: object[]): void
    take_name(value: any): void
}

/**
 * This structure represents a function or an aggregate with zero or more arguments.
 * @record 
 */
class SqlFunction {

    // Own properties of Gda-5.0.Gda.SqlFunction

    static name: string
}

interface SqlOperation {

    // Own fields of Gda-5.0.Gda.SqlOperation

    /**
     * inheritance structure
     * @field 
     */
    any: any
    operator_type: SqlOperatorType
    /**
     * list of #GdaSqlExpr operands
     * @field 
     */
    operands: object[]

    // Owm methods of Gda-5.0.Gda.SqlOperation

    free(): void
    serialize(): string
}

/**
 * This structure represents an operation between one or more operands.
 * @record 
 */
class SqlOperation {

    // Own properties of Gda-5.0.Gda.SqlOperation

    static name: string

    // Constructors of Gda-5.0.Gda.SqlOperation

    static operator_from_string(op: string): SqlOperatorType
    static operator_to_string(op: SqlOperatorType): string
}

interface SqlParserClass {

    // Own fields of Gda-5.0.Gda.SqlParserClass

    parent_class: GObject.ObjectClass
    delim_alloc: (f: object) => object
    delim_free: (d: object, f: object) => void
    delim_trace: (d: object, s: string) => void
    delim_parse: (d: object, i: number, v: any, iface: SqlParserIface) => void
    delim_tokens_trans: number
    parser_alloc: (f: object) => object
    parser_free: (p: object, f: object) => void
    parser_trace: (p: object, s: string) => void
    parser_parse: (p: object, i: number, v: any, iface: SqlParserIface) => void
    parser_tokens_trans: number
}

abstract class SqlParserClass {

    // Own properties of Gda-5.0.Gda.SqlParserClass

    static name: string
}

interface SqlParserIface {

    // Own fields of Gda-5.0.Gda.SqlParserIface

    parser: SqlParser
    parsed_statement: SqlStatement
}

class SqlParserIface {

    // Own properties of Gda-5.0.Gda.SqlParserIface

    static name: string
}

interface SqlParserPrivate {
}

class SqlParserPrivate {

    // Own properties of Gda-5.0.Gda.SqlParserPrivate

    static name: string
}

interface SqlRenderingContext {

    // Own fields of Gda-5.0.Gda.SqlRenderingContext

    /**
     * Global rendering options
     * @field 
     */
    flags: StatementSqlFlag
    /**
     * Parameters to be used while doing the rendering
     * @field 
     */
    params: Set
    /**
     * When rendering is complete, contains the ordered list of parameters which have been used while doing the rendering
     * @field 
     */
    params_used: Holder[]
    /**
     * Pointer to the server provider to be used
     * @field 
     */
    provider: ServerProvider
    /**
     * Pointer to the connection to be used
     * @field 
     */
    cnc: Connection
    /**
     * function to render a #GValue
     * @field 
     */
    render_value: SqlRenderingValue
}

/**
 * Specifies the context in which a #GdaSqlStatement is being converted to SQL.
 * @record 
 */
class SqlRenderingContext {

    // Own properties of Gda-5.0.Gda.SqlRenderingContext

    static name: string
}

interface SqlSelectField {

    // Own fields of Gda-5.0.Gda.SqlSelectField

    /**
     * inheritance structure
     * @field 
     */
    any: any
    /**
     * expression
     * @field 
     */
    expr: any
    /**
     * field name part of `expr` if `expr` represents a field
     * @field 
     */
    field_name: string
    /**
     * table name part of `expr` if `expr` represents a field
     * @field 
     */
    table_name: string
    /**
     * alias
     * @field 
     */
    as: string
    validity_meta_object: MetaDbObject
    validity_meta_table_column: MetaTableColumn

    // Owm methods of Gda-5.0.Gda.SqlSelectField

    free(): void
    serialize(): string
    take_alias(alias: any): void
    take_star_value(value: any): void
}

/**
 * This structure represents a selected item in a SELECT statement (when executed, the returned data set
 * will have one column per selected item). Note that the `table_name` and
 * `field_name` field parts <emphasis>will be</emphasis> overwritten by &LIBGDA;,
 * set the value of `expr->`value instead.
 * @record 
 */
class SqlSelectField {

    // Own properties of Gda-5.0.Gda.SqlSelectField

    static name: string
}

interface SqlSelectFrom {

    // Own fields of Gda-5.0.Gda.SqlSelectFrom

    /**
     * inheritance structure
     * @field 
     */
    any: any
    /**
     * list of #GdaSqlSelectTarget
     * @field 
     */
    targets: any[]
    /**
     * list of #GdaSqlSelectJoin
     * @field 
     */
    joins: any[]

    // Owm methods of Gda-5.0.Gda.SqlSelectFrom

    free(): void
    serialize(): string
}

/**
 * This structure represents the FROM clause of a SELECT statement, it lists targets and joins
 * @record 
 */
class SqlSelectFrom {

    // Own properties of Gda-5.0.Gda.SqlSelectFrom

    static name: string
}

interface SqlSelectJoin {

    // Own fields of Gda-5.0.Gda.SqlSelectJoin

    /**
     * inheritance structure
     * @field 
     */
    any: any
    /**
     * type of join
     * @field 
     */
    type: SqlSelectJoinType
    /**
     * represents a join between a target at (pos &lt; `position)` and the one at `position`
     * @field 
     */
    position: number
    /**
     * joining expression, or %NULL
     * @field 
     */
    expr: any
    /**
     * list of #GdaSqlField pointers to use when joining, or %NULL
     * @field 
     */
    use: object[]

    // Owm methods of Gda-5.0.Gda.SqlSelectJoin

    free(): void
    serialize(): string
}

/**
 * This structure represents a join between two targets in a SELECT statement.
 * @record 
 */
class SqlSelectJoin {

    // Own properties of Gda-5.0.Gda.SqlSelectJoin

    static name: string

    // Constructors of Gda-5.0.Gda.SqlSelectJoin

    static type_to_string(type: SqlSelectJoinType): string
}

interface SqlSelectOrder {

    // Own fields of Gda-5.0.Gda.SqlSelectOrder

    /**
     * inheritance structure
     * @field 
     */
    any: any
    /**
     * expression to order on
     * @field 
     */
    expr: any
    /**
     * TRUE is ordering is ascending
     * @field 
     */
    asc: boolean
    /**
     * name of the collation to use for ordering
     * @field 
     */
    collation_name: string

    // Owm methods of Gda-5.0.Gda.SqlSelectOrder

    free(): void
    serialize(): string
}

/**
 * This structure represents the ordering of a SELECT statement.
 * @record 
 */
class SqlSelectOrder {

    // Own properties of Gda-5.0.Gda.SqlSelectOrder

    static name: string
}

interface SqlSelectTarget {

    // Own fields of Gda-5.0.Gda.SqlSelectTarget

    /**
     * inheritance structure
     * @field 
     */
    any: any
    /**
     * expression
     * @field 
     */
    expr: any
    /**
     * table name part of `expr` if `expr` represents a table
     * @field 
     */
    table_name: string
    /**
     * alias
     * @field 
     */
    as: string
    validity_meta_object: MetaDbObject

    // Owm methods of Gda-5.0.Gda.SqlSelectTarget

    free(): void
    serialize(): string
    take_alias(alias: any): void
    take_select(stmt: SqlStatement): void
    take_table_name(value: any): void
}

/**
 * This structure represents a target used to fetch data from in a SELECT statement; it can represent a table or
 * a sub select. Note that the `table_name`
 * part <emphasis>will be</emphasis> overwritten by &LIBGDA;,
 * set the value of `expr->`value instead.
 * @record 
 */
class SqlSelectTarget {

    // Own properties of Gda-5.0.Gda.SqlSelectTarget

    static name: string
}

interface SqlStatement {

    // Owm methods of Gda-5.0.Gda.SqlStatement

    compound_set_type(type: SqlStatementCompoundType): void
    compound_take_stmt(s: SqlStatement): void
}

class SqlStatement {

    // Own properties of Gda-5.0.Gda.SqlStatement

    static name: string
}

interface SqlStatementCheckValidityData {

    // Own fields of Gda-5.0.Gda.SqlStatementCheckValidityData

    cnc: Connection
    store: MetaStore
    mstruct: MetaStruct
}

/**
 * Validation against a dictionary
 * @record 
 */
class SqlStatementCheckValidityData {

    // Own properties of Gda-5.0.Gda.SqlStatementCheckValidityData

    static name: string
}

interface SqlStatementCompound {

    // Own fields of Gda-5.0.Gda.SqlStatementCompound

    any: any
    compound_type: SqlStatementCompoundType
    stmt_list: object[]
}

class SqlStatementCompound {

    // Own properties of Gda-5.0.Gda.SqlStatementCompound

    static name: string
}

interface SqlStatementContentsInfo {

    // Own fields of Gda-5.0.Gda.SqlStatementContentsInfo

    type: SqlStatementType
    name: string
    construct: () => object
    free: (stm: object) => void
    copy: (stm: object) => object
    serialize: (stm: object) => string
    check_structure_func: any
    check_validity_func: any
}

/**
 * Contents' infos
 * @record 
 */
class SqlStatementContentsInfo {

    // Own properties of Gda-5.0.Gda.SqlStatementContentsInfo

    static name: string
}

interface SqlStatementDelete {
}

class SqlStatementDelete {

    // Own properties of Gda-5.0.Gda.SqlStatementDelete

    static name: string
}

interface SqlStatementInsert {
}

class SqlStatementInsert {

    // Own properties of Gda-5.0.Gda.SqlStatementInsert

    static name: string
}

interface SqlStatementSelect {
}

class SqlStatementSelect {

    // Own properties of Gda-5.0.Gda.SqlStatementSelect

    static name: string
}

interface SqlStatementTransaction {
}

class SqlStatementTransaction {

    // Own properties of Gda-5.0.Gda.SqlStatementTransaction

    static name: string
}

interface SqlStatementUnknown {
}

class SqlStatementUnknown {

    // Own properties of Gda-5.0.Gda.SqlStatementUnknown

    static name: string
}

interface SqlStatementUpdate {
}

class SqlStatementUpdate {

    // Own properties of Gda-5.0.Gda.SqlStatementUpdate

    static name: string
}

interface SqlTable {

    // Own fields of Gda-5.0.Gda.SqlTable

    any: any
    table_name: string
    validity_meta_object: MetaDbObject

    // Owm methods of Gda-5.0.Gda.SqlTable

    free(): void
    serialize(): string
    take_name(value: any): void
}

/**
 * This structure represents the name of a table.
 * @record 
 */
class SqlTable {

    // Own properties of Gda-5.0.Gda.SqlTable

    static name: string
}

interface StatementClass {

    // Own fields of Gda-5.0.Gda.StatementClass

    parent_class: GObject.ObjectClass
    checked: (stmt: Statement, cnc: Connection, checked: boolean) => void
    reset: (stmt: Statement) => void
}

abstract class StatementClass {

    // Own properties of Gda-5.0.Gda.StatementClass

    static name: string
}

interface StatementPrivate {
}

class StatementPrivate {

    // Own properties of Gda-5.0.Gda.StatementPrivate

    static name: string
}

interface ThreadNotification {

    // Own fields of Gda-5.0.Gda.ThreadNotification

    /**
     * the notification type
     * @field 
     */
    type: ThreadNotificationType
    /**
     * the job ID, if `type` is a #GDA_THREAD_NOTIFICATION_JOB
     * @field 
     */
    job_id: number
}

/**
 * A notification to be read through the #GIOChannel which is returned by gda_thread_wrapper_get_io_channel(),
 * for example:
 * <programlisting><![CDATA[
 * gboolean
 * wrapper_ioc_cb (GIOChannel *source, GIOCondition condition, gpointer data)
 * {
 *     GIOStatus status;
 *     gsize nread;
 *     GdaThreadNotification notif;
 *     if (condition & G_IO_IN) {
 *    status = g_io_channel_read_chars (source, (gchar*) &notif, sizeof (notif), &nread, NULL);
 *         if ((status != G_IO_STATUS_NORMAL) || (nread != sizeof (notif)))
 *             goto onerror;
 *    switch (notif.type) {
 *    case GDA_THREAD_NOTIFICATION_JOB:
 *             check_for_wrapper_result (bcnc);
 *             break;
 *         case GDA_THREAD_NOTIFICATION_SIGNAL:
 *             gda_thread_wrapper_iterate (bcnc->priv->wrapper, FALSE);
 *             break;
 *         default:
 *             goto onerror;
 *             break;
 *    }
 *   }
 *   if (condition & (G_IO_ERR | G_IO_HUP | G_IO_NVAL))
 *             goto onerror;
 *   return TRUE; // keep callback
 * 
 * onerror:
 *   g_io_channel_shutdown (bcnc->priv->ioc, FALSE, NULL);
 *   return FALSE; // removed callback
 * }
 * 
 * {
 * [...]
 *     GIOChannel *ioc;
 *     ioc = gda_thread_wrapper_get_io_channel (wrapper);
 *     if (!ioc)
 *         [handle error]
 *     else {
 *         guint watch_id;
 *         watch_id = g_io_add_watch (ioc, G_IO_IN | G_IO_HUP | G_IO_ERR | G_IO_NVAL,
 *                                    (GIOFunc) wrapper_ioc_cb, NULL);
 *     }
 * }
 * ]]></programlisting>
 * @record 
 */
class ThreadNotification {

    // Own properties of Gda-5.0.Gda.ThreadNotification

    static name: string
}

interface ThreadWrapperClass {

    // Own fields of Gda-5.0.Gda.ThreadWrapperClass

    object_class: GObject.ObjectClass
}

abstract class ThreadWrapperClass {

    // Own properties of Gda-5.0.Gda.ThreadWrapperClass

    static name: string
}

interface ThreadWrapperPrivate {
}

class ThreadWrapperPrivate {

    // Own properties of Gda-5.0.Gda.ThreadWrapperPrivate

    static name: string
}

interface Time {

    // Own fields of Gda-5.0.Gda.Time

    /**
     * hour representation of the time, as a number between 0 and 23
     * @field 
     */
    hour: number
    /**
     * minute representation of the time, as a number between 0 and 59
     * @field 
     */
    minute: number
    /**
     * second representation of the time, as a number between 0 and 59
     * @field 
     */
    second: number
    /**
     * fractionnal part of the seconds, in millionth' of second
     * @field 
     */
    fraction: number
    /**
     * number of seconds added to the GMT timezone
     * @field 
     */
    timezone: number

    // Owm methods of Gda-5.0.Gda.Time

    /**
     * Changes `time'`s timezone (for example to convert from GMT to another time zone).
     * If `time'`s current timezone is unset (i.e. equal to %GDA_TIMEZONE_INVALID), then this function simply sets
     * `time'`s timezone attribute; Otherwise, it adds or removes hours, minutes or seconds to reflect the time in the new timezone.
     * 
     * Note: the resulting will always be a valid time.
     * @param ntz a new timezone to use, in seconds added to GMT
     */
    change_timezone(ntz: number): void
    valid(): boolean
}

/**
 * Represents a time information.
 * @record 
 */
class Time {

    // Own properties of Gda-5.0.Gda.Time

    static name: string

    // Constructors of Gda-5.0.Gda.Time

    static copy(boxed: object | null): object | null
    static free(boxed: object | null): void
}

interface Timestamp {

    // Own fields of Gda-5.0.Gda.Timestamp

    /**
     * year representation of the time stamp
     * @field 
     */
    year: number
    /**
     * month representation of the time stamp, as a number between 1 and 12
     * @field 
     */
    month: number
    /**
     * day representation of the time stamp, as a number between 1 and 31
     * @field 
     */
    day: number
    /**
     * hour representation of the time stamp, as a number between 0 and 23
     * @field 
     */
    hour: number
    /**
     * minute representation of the time stamp, as a number between 0 and 59
     * @field 
     */
    minute: number
    /**
     * second representation of the time stamp, as a number between 0 and 59
     * @field 
     */
    second: number
    /**
     * fractionnal part of the seconds, in millionth' of second
     * @field 
     */
    fraction: number
    /**
     * number of seconds added to the GMT timezone
     * @field 
     */
    timezone: number

    // Owm methods of Gda-5.0.Gda.Timestamp

    /**
     * This function is similar to gda_time_change_timezone() but operates on time stamps.
     * 
     * Note: the resulting will always be a valid time.
     * @param ntz a new timezone to use, in seconds added to GMT
     */
    change_timezone(ntz: number): void
    valid(): boolean
}

/**
 * Represents an instant (a time stamp)
 * @record 
 */
class Timestamp {

    // Own properties of Gda-5.0.Gda.Timestamp

    static name: string

    // Constructors of Gda-5.0.Gda.Timestamp

    static copy(boxed: object | null): object | null
    static free(boxed: object | null): void
}

interface TransactionStatusClass {

    // Own fields of Gda-5.0.Gda.TransactionStatusClass

    parent_class: GObject.ObjectClass
}

abstract class TransactionStatusClass {

    // Own properties of Gda-5.0.Gda.TransactionStatusClass

    static name: string
}

interface TransactionStatusEvent {

    // Own fields of Gda-5.0.Gda.TransactionStatusEvent

    trans: TransactionStatus
    type: TransactionStatusEventType
    conn_event: ConnectionEvent
}

class TransactionStatusEvent {

    // Own properties of Gda-5.0.Gda.TransactionStatusEvent

    static name: string
}

interface TreeClass {

    // Own fields of Gda-5.0.Gda.TreeClass

    object_class: GObject.ObjectClass
    node_changed: (tree: Tree, node: TreeNode) => void
    node_inserted: (tree: Tree, node: TreeNode) => void
    node_has_child_toggled: (tree: Tree, node: TreeNode) => void
    node_deleted: (tree: Tree, node_path: string) => void
}

abstract class TreeClass {

    // Own properties of Gda-5.0.Gda.TreeClass

    static name: string
}

interface TreeManagerClass {

    // Own fields of Gda-5.0.Gda.TreeManagerClass

    object_class: GObject.ObjectClass
}

abstract class TreeManagerClass {

    // Own properties of Gda-5.0.Gda.TreeManagerClass

    static name: string
}

interface TreeManagerPrivate {
}

class TreeManagerPrivate {

    // Own properties of Gda-5.0.Gda.TreeManagerPrivate

    static name: string
}

interface TreeMgrColumnsClass {

    // Own fields of Gda-5.0.Gda.TreeMgrColumnsClass

    object_class: TreeManagerClass
}

abstract class TreeMgrColumnsClass {

    // Own properties of Gda-5.0.Gda.TreeMgrColumnsClass

    static name: string
}

interface TreeMgrColumnsPriv {
}

class TreeMgrColumnsPriv {

    // Own properties of Gda-5.0.Gda.TreeMgrColumnsPriv

    static name: string
}

interface TreeMgrLabelClass {

    // Own fields of Gda-5.0.Gda.TreeMgrLabelClass

    object_class: TreeManagerClass
}

abstract class TreeMgrLabelClass {

    // Own properties of Gda-5.0.Gda.TreeMgrLabelClass

    static name: string
}

interface TreeMgrLabelPriv {
}

class TreeMgrLabelPriv {

    // Own properties of Gda-5.0.Gda.TreeMgrLabelPriv

    static name: string
}

interface TreeMgrLdapClass {

    // Own fields of Gda-5.0.Gda.TreeMgrLdapClass

    object_class: TreeManagerClass
}

abstract class TreeMgrLdapClass {

    // Own properties of Gda-5.0.Gda.TreeMgrLdapClass

    static name: string
}

interface TreeMgrLdapPriv {
}

class TreeMgrLdapPriv {

    // Own properties of Gda-5.0.Gda.TreeMgrLdapPriv

    static name: string
}

interface TreeMgrSchemasClass {

    // Own fields of Gda-5.0.Gda.TreeMgrSchemasClass

    object_class: TreeManagerClass
}

abstract class TreeMgrSchemasClass {

    // Own properties of Gda-5.0.Gda.TreeMgrSchemasClass

    static name: string
}

interface TreeMgrSchemasPriv {
}

class TreeMgrSchemasPriv {

    // Own properties of Gda-5.0.Gda.TreeMgrSchemasPriv

    static name: string
}

interface TreeMgrSelectClass {

    // Own fields of Gda-5.0.Gda.TreeMgrSelectClass

    object_class: TreeManagerClass
}

abstract class TreeMgrSelectClass {

    // Own properties of Gda-5.0.Gda.TreeMgrSelectClass

    static name: string
}

interface TreeMgrSelectPriv {
}

class TreeMgrSelectPriv {

    // Own properties of Gda-5.0.Gda.TreeMgrSelectPriv

    static name: string
}

interface TreeMgrTablesClass {

    // Own fields of Gda-5.0.Gda.TreeMgrTablesClass

    object_class: TreeManagerClass
}

abstract class TreeMgrTablesClass {

    // Own properties of Gda-5.0.Gda.TreeMgrTablesClass

    static name: string
}

interface TreeMgrTablesPriv {
}

class TreeMgrTablesPriv {

    // Own properties of Gda-5.0.Gda.TreeMgrTablesPriv

    static name: string
}

interface TreeNodeClass {

    // Own fields of Gda-5.0.Gda.TreeNodeClass

    object_class: GObject.ObjectClass
    node_changed: (reporting: TreeNode, node: TreeNode) => void
    node_inserted: (reporting: TreeNode, node: TreeNode) => void
    node_has_child_toggled: (reporting: TreeNode, node: TreeNode) => void
    node_deleted: (reporting: TreeNode, relative_path: string) => void
    dump_header: (node: TreeNode) => string
    dump_children: (node: TreeNode, prefix: string, in_string: GLib.String) => void
}

abstract class TreeNodeClass {

    // Own properties of Gda-5.0.Gda.TreeNodeClass

    static name: string
}

interface TreeNodePrivate {
}

class TreeNodePrivate {

    // Own properties of Gda-5.0.Gda.TreeNodePrivate

    static name: string
}

interface TreePrivate {
}

class TreePrivate {

    // Own properties of Gda-5.0.Gda.TreePrivate

    static name: string
}

interface XaTransactionClass {

    // Own fields of Gda-5.0.Gda.XaTransactionClass

    parent_class: GObject.ObjectClass
}

abstract class XaTransactionClass {

    // Own properties of Gda-5.0.Gda.XaTransactionClass

    static name: string
}

interface XaTransactionId {

    // Own fields of Gda-5.0.Gda.XaTransactionId

    /**
     * any number
     * @field 
     */
    format: number
    /**
     * number between 1 and 64
     * @field 
     */
    gtrid_length: number
    /**
     * number between 1 and 64
     * @field 
     */
    bqual_length: number
    data: number[]

    // Owm methods of Gda-5.0.Gda.XaTransactionId

    /**
     * Creates a string representation of `xid,` in the format &lt;gtrid&gt;,&lt;bqual&gt;,&lt;formatID&gt; the
     * &lt;gtrid&gt; and &lt;bqual&gt; strings contain alphanumeric characters, and non alphanumeric characters
     * are converted to "%ab" where ab is the hexadecimal representation of the character.
     */
    to_string(): string
}

class XaTransactionId {

    // Own properties of Gda-5.0.Gda.XaTransactionId

    static name: string
}

interface XaTransactionPrivate {
}

class XaTransactionPrivate {

    // Own properties of Gda-5.0.Gda.XaTransactionPrivate

    static name: string
}

    type Mutex = GLib.RecMutex
    type SqlBuilderId = number
    type SqlErrorType = SqlError
}
export default Gda;