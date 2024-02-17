
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gda-6.0-ambient.d.ts';
import './gda-6.0-import.d.ts';
/**
 * Gda-6.0
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export enum BatchError {
    BATCH_CONFLICTING_PARAMETER_ERROR,
}
export enum ConfigError {
    DSN_NOT_FOUND_ERROR,
    PERMISSION_ERROR,
    PROVIDER_NOT_FOUND_ERROR,
    PROVIDER_CREATION_ERROR,
}
export enum ConnectionError {
    DSN_NOT_FOUND_ERROR,
    PROVIDER_NOT_FOUND_ERROR,
    PROVIDER_ERROR,
    NO_CNC_SPEC_ERROR,
    NO_PROVIDER_SPEC_ERROR,
    OPEN_ERROR,
    ALREADY_OPENED_ERROR,
    STATEMENT_TYPE_ERROR,
    CANT_LOCK_ERROR,
    TASK_NOT_FOUND_ERROR,
    CLOSED_ERROR,
    META_DATA_CONTEXT_ERROR,
    NO_MAIN_CONTEXT_ERROR,
}
export enum ConnectionEventCode {
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
export enum ConnectionEventType {
    NOTICE,
    WARNING,
    ERROR,
    COMMAND,
}
/**
 * Used in gda_connection_supports_feature() and gda_server_provider_supports_feature() to test if a connection
 * or a database provider supports some specific feature.
 */
export enum ConnectionFeature {
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
     * test for READ COMMITTED transaction isolation level
     */
    TRANSACTION_ISOLATION_READ_COMMITTED,
    /**
     * test for READ UNCOMMITTED transaction isolation level
     */
    TRANSACTION_ISOLATION_READ_UNCOMMITTED,
    /**
     * test for REPEATABLE READ transaction isolation level
     */
    TRANSACTION_ISOLATION_REPEATABLE_READ,
    /**
     * test for SERIALIZABLE transaction isolation level
     */
    TRANSACTION_ISOLATION_SERIALIZABLE,
    /**
     * test for distributed transactions support
     */
    XA_TRANSACTIONS,
    /**
     * not used
     */
    LAST,
}
/**
 * Used with gda_connection_get_meta_store_data() to describe what meta data to extract from
 * a connection's associated #GdaMetaStore.
 */
export enum ConnectionMetaType {
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
/**
 * Indicates the current status of a connection. The possible status and the transitions between those status
 * are indicated in the diagram below:
 *  <mediaobject>
 *    <imageobject role="html">
 *      <imagedata fileref="connection-status.png" format="PNG" contentwidth="50mm"/>
 *    </imageobject>
 *    <textobject>
 *      <phrase>GdaConnection's status and transitions between different status</phrase>
 *    </textobject>
 *  </mediaobject>
 */
export enum ConnectionStatus {
    /**
     * the connection is closed (default status upon creation)
     */
    CLOSED,
    /**
     * the connection is currently being opened
     */
    OPENING,
    /**
     * the connection is opened but not currently used
     */
    IDLE,
    /**
     * the connection is opened and currently being used
     */
    BUSY,
}
export enum DataComparatorError {
    MISSING_DATA_MODEL_ERROR,
    COLUMN_TYPES_MISMATCH_ERROR,
    MODEL_ACCESS_ERROR,
    USER_CANCELLED_ERROR,
}
export enum DataModelError {
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
    INVALID,
    OTHER_ERROR,
}
export enum DataModelHint {
    START_BATCH_UPDATE,
    END_BATCH_UPDATE,
    REFRESH,
}
/**
 * Format to use when exporting a data model, see gda_data_model_export_to_string() and gda_data_model_export_to_file()
 */
export enum DataModelIOFormat {
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
export enum DataModelIterError {
    DATA_MODEL_ITER_COLUMN_OUT_OF_RANGE_ERROR,
}
/**
 * Possible operations for the data fields.
 */
export enum DataPivotAggregate {
    AVG,
    COUNT,
    MAX,
    MIN,
    SUM,
}
/**
 * Possible #GdaDataPivot related errors.
 */
export enum DataPivotError {
    INTERNAL_ERROR,
    SOURCE_MODEL_ERROR,
    FIELD_FORMAT_ERROR,
    USAGE_ERROR,
    OVERFLOW_ERROR,
}
/**
 * Define types of field to be used when defining a #GdaDataPivot analysis.
 */
export enum DataPivotFieldType {
    ROW,
    COLUMN,
}
export enum DataProxyError {
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
export enum DataSelectConditionType {
    /**
     * only primary key fields are used
     */
    PK,
    /**
     * all the columns of the tables are used
     */
    ALL_COLUMNS,
}
export enum DataSelectError {
    MODIFICATION_STATEMENT_ERROR,
    MISSING_MODIFICATION_STATEMENT_ERROR,
    CONNECTION_ERROR,
    ACCESS_ERROR,
    SQL_ERROR,
    SAFETY_LOCKED_ERROR,
}
/**
 * These error are primary for developers to troubleshoot the problem rather than for user.
 */
export enum DbCatalogError {
    /**
     * Context is %NULL. Should not be %NULL for normal operation.
     */
    CONTEXT_NULL,
    /**
     * #xmlDocPtr is %NULL.
     */
    DOC_NULL,
    /**
     * Sets if xml check fails. Xml file structure doesn't match with DTD
     * file
     */
    INVALID_XML,
    /**
     * Sets if the used schema is invalid.
     */
    INVALID_SCHEMA,
    /**
     * Sets if server operation is %NULL.
     */
    SERVER_OPERATION,
    /**
     * Sets if xml file is not readable
     */
    FILE_READ,
    /**
     * Sets if an error with context during parsing an xml file
     */
    PARSE_CONTEXT,
    /**
     * Sets if parsing reports an error
     */
    PARSE,
    /**
     * If set, error with parse chunk algorithm.
     */
    PARSE_CHUNK,
    /**
     * Connection is not open.
     */
    CONNECTION_CLOSED,
}
/**
 * Values used to describe the source of the error.
 */
export enum DbColumnError {
    /**
     * Set if wrong column type was given in the xml file.
     */
    TYPE,
    /**
     * Wrong operation requested
     */
    WRONG_OPERATION,
}
/**
 * Specify numeric value for the actions, e.g. "ON DELETE" and "ON UPDATE"
 */
export enum DbFkeyReferenceAction {
    /**
     * Action is not specified.
     */
    NO_ACTION,
    /**
     * Action value is set to %NULL
     */
    SET_NULL,
    /**
     * Value is set to "RESTRICT"
     */
    RESTRICT,
    /**
     * Value is set to default behavior
     */
    SET_DEFAULT,
    /**
     * Value is set to cascade
     */
    CASCADE,
}
export enum DbIndexError {
    CONNECTION_NOT_OPENED,
    SERVER_OPERATION,
}
/**
 * Enum values to specify the sorting
 */
export enum DbIndexSortOrder {
    /**
     * ascending sorting
     */
    ASC,
    /**
     * descending sorting
     */
    DESC,
}
export enum DbTableError {
    /**
     * Table doesn't contain columns
     */
    COLUMN_EMPTY,
    /**
     * Closed connection was passed as parameter
     */
    CONNECTION_NOT_OPENED,
    /**
     * Error related to #GdaServerOperation
     */
    SERVER_OPERATION,
}
export enum DbViewRefAction {
    RESTRICT,
    CASCADE,
}
export enum DdlModifiableError {
    NOT_IMPLEMENTED,
    CONNECTION_NOT_OPENED,
    MISSED_DATA,
}
export enum DiffType {
    ADD_ROW,
    REMOVE_ROW,
    MODIFY_ROW,
}
export enum HolderError {
    STRING_CONVERSION_ERROR,
    VALUE_TYPE_ERROR,
    VALUE_NULL_ERROR,
    VALUE_CHANGE_ERROR,
}
/**
 * Type of database object which can be handled as a #GdaMetaDbObject
 */
export enum MetaDbObjectType {
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
export enum MetaForeignKeyPolicy {
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
export enum MetaSortType {
    /**
     * sort alphabetically
     */
    ALHAPETICAL,
    /**
     * sort by dependencies
     */
    DEPENDENCIES,
}
export enum MetaStoreChangeType {
    ADD,
    REMOVE,
    MODIFY,
}
export enum MetaStoreError {
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
export enum MetaStructError {
    UNKNOWN_OBJECT_ERROR,
    DUPLICATE_OBJECT_ERROR,
    INCOHERENCE_ERROR,
    XML_ERROR,
}
export enum ProviderMetaError {
    NO_CONNECTION_ERROR,
    QUERY_ERROR,
}
export enum ServerOperationError {
    OBJECT_NAME_ERROR,
    INCORRECT_VALUE_ERROR,
    XML_ERROR,
}
export enum ServerOperationNodeStatus {
    OPTIONAL,
    REQUIRED,
    UNKNOWN,
}
export enum ServerOperationNodeType {
    PARAMLIST,
    DATA_MODEL,
    PARAM,
    SEQUENCE,
    SEQUENCE_ITEM,
    DATA_MODEL_COLUMN,
    UNKNOWN,
}
export enum ServerOperationType {
    CREATE_DB,
    DROP_DB,
    CREATE_TABLE,
    DROP_TABLE,
    RENAME_TABLE,
    ADD_COLUMN,
    DROP_COLUMN,
    RENAME_COLUMN,
    CREATE_INDEX,
    DROP_INDEX,
    RENAME_INDEX,
    CREATE_VIEW,
    DROP_VIEW,
    COMMENT_TABLE,
    COMMENT_COLUMN,
    CREATE_USER,
    ALTER_USER,
    DROP_USER,
    LAST,
}
export enum ServerProviderError {
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
/**
 * Represents the different types of sets of virtual functions which can be implemented for each provider
 */
export enum ServerProviderFunctionsType {
    BASE,
    META,
    XA,
    MAX,
}
export enum ServerProviderMetaType {
    _INFO,
    _BTYPES,
    _UDT,
    UDT,
    _UDT_COLS,
    UDT_COLS,
    _ENUMS,
    ENUMS,
    _DOMAINS,
    DOMAINS,
    _CONSTRAINTS_DOM,
    CONSTRAINTS_DOM,
    _EL_TYPES,
    EL_TYPES,
    _COLLATIONS,
    COLLATIONS,
    _CHARACTER_SETS,
    CHARACTER_SETS,
    _SCHEMATA,
    SCHEMATA,
    _TABLES_VIEWS,
    TABLES_VIEWS,
    _COLUMNS,
    COLUMNS,
    _VIEW_COLS,
    VIEW_COLS,
    _CONSTRAINTS_TAB,
    CONSTRAINTS_TAB,
    _CONSTRAINTS_REF,
    CONSTRAINTS_REF,
    _KEY_COLUMNS,
    KEY_COLUMNS,
    _CHECK_COLUMNS,
    CHECK_COLUMNS,
    _TRIGGERS,
    TRIGGERS,
    _ROUTINES,
    ROUTINES,
    _ROUTINE_COL,
    ROUTINE_COL,
    _ROUTINE_PAR,
    ROUTINE_PAR,
    _INDEXES_TAB,
    INDEXES_TAB,
    _INDEX_COLS,
    INDEX_COLS,
}
export enum SetError {
    XML_SPEC_ERROR,
    HOLDER_NOT_FOUND_ERROR,
    INVALID_ERROR,
    READ_ONLY_ERROR,
    IMPLEMENTATION_ERROR,
}
/**
 * Type of part.
 */
export enum SqlAnyPartType {
    /**
     * structure is a #GdaSqlStatementSelect
     */
    STMT_SELECT,
    /**
     * structure is a #GdaSqlStatementInsert
     */
    STMT_INSERT,
    /**
     * structure is a #GdaSqlStatementUpdate
     */
    STMT_UPDATE,
    /**
     * structure is a #GdaSqlStatementDelete
     */
    STMT_DELETE,
    /**
     * structure is a #GdaSqlStatementCompound
     */
    STMT_COMPOUND,
    /**
     * structure is a #GdaSqlStatementTransaction
     */
    STMT_BEGIN,
    /**
     * structure is a #GdaSqlStatementTransaction
     */
    STMT_ROLLBACK,
    /**
     * structure is a #GdaSqlStatementTransaction
     */
    STMT_COMMIT,
    /**
     * structure is a #GdaSqlStatementTransaction
     */
    STMT_SAVEPOINT,
    /**
     * structure is a #GdaSqlStatementTransaction
     */
    STMT_ROLLBACK_SAVEPOINT,
    /**
     * structure is a #GdaSqlStatementTransaction
     */
    STMT_DELETE_SAVEPOINT,
    /**
     * structure is a #GdaSqlStatementUnknown
     */
    STMT_UNKNOWN,
    /**
     * structure is a #GdaSqlExpr
     */
    EXPR,
    /**
     * structure is a #GdaSqlField
     */
    SQL_FIELD,
    /**
     * structure is a #GdaSqlTable
     */
    SQL_TABLE,
    /**
     * structure is a #GdaSqlFunction
     */
    SQL_FUNCTION,
    /**
     * structure is a #GdaSqlOperation
     */
    SQL_OPERATION,
    /**
     * structure is a #GdaSqlCase
     */
    SQL_CASE,
    /**
     * structure is a #GdaSqlSelectField
     */
    SQL_SELECT_FIELD,
    /**
     * structure is a #GdaSqlSelectTarget
     */
    SQL_SELECT_TARGET,
    /**
     * structure is a #GdaSqlSelectJoin
     */
    SQL_SELECT_JOIN,
    /**
     * structure is a #GdaSqlSelectFrom
     */
    SQL_SELECT_FROM,
    /**
     * structure is a #GdaSqlSelectOrder
     */
    SQL_SELECT_ORDER,
}
export enum SqlBuilderError {
    WRONG_TYPE_ERROR,
    MISUSE_ERROR,
}
export enum SqlError {
    STRUCTURE_CONTENTS_ERROR,
    MALFORMED_IDENTIFIER_ERROR,
    MISSING_IDENTIFIER_ERROR,
    VALIDATION_ERROR,
}
export enum SqlOperatorType {
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
}
export enum SqlParserError {
    SYNTAX_ERROR,
    OVERFLOW_ERROR,
    EMPTY_SQL_ERROR,
}
export enum SqlParserFlavour {
    STANDARD,
    SQLITE,
    MYSQL,
    ORACLE,
    POSTGRESQL,
}
export enum SqlParserMode {
    PARSE,
    DELIMIT,
}
export enum SqlSelectJoinType {
    CROSS,
    NATURAL,
    INNER,
    LEFT,
    RIGHT,
    FULL,
}
export enum SqlStatementCompoundType {
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
export enum SqlStatementType {
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
export enum StatementError {
    PARSE_ERROR,
    SYNTAX_ERROR,
    NO_CNC_ERROR,
    CNC_CLOSED_ERROR,
    EXEC_ERROR,
    PARAM_TYPE_ERROR,
    PARAM_ERROR,
}
/**
 * Describes transactions' isolation level
 */
export enum TransactionIsolation {
    /**
     * isolation level defined by the server
     */
    SERVER_DEFAULT,
    READ_COMMITTED,
    READ_UNCOMMITTED,
    REPEATABLE_READ,
    SERIALIZABLE,
}
export enum TransactionStatusEventType {
    SAVEPOINT,
    SQL,
    SUB_TRANSACTION,
}
export enum TransactionStatusState {
    OK,
    FAILED,
}
export enum TreeError {
    TREE_UNKNOWN_ERROR,
}
export enum TreeManagerError {
    TREE_MANAGER_UNKNOWN_ERROR,
}
export enum TreeNodeError {
    TREE_NODE_UNKNOWN_ERROR,
}
export enum WorkerError {
    INTER_THREAD_ERROR,
    JOB_NOT_FOUND_ERROR,
    JOB_QUEUED_ERROR,
    JOB_BEING_PROCESSED_ERROR,
    JOB_PROCESSED_ERROR,
    JOB_CANCELLED_ERROR,
    THREAD_KILLED,
}
export enum XaTransactionError {
    ALREADY_REGISTERED_ERROR,
    DTP_NOT_SUPPORTED_ERROR,
    CONNECTION_BRANCH_LENGTH_ERROR,
}
export enum XaType {
    START,
    END,
    PREPARE,
    COMMIT,
    ROLLBACK,
    RECOVER,
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
 * Note about the `GDA_CONNECTION_OPTIONS_AUTO_META_DATA` flag:
 * <itemizedlist>
 *  <listitem><para>Every time a DDL statement is successfully executed, the associated meta data, if
 *               defined, will be updated, which has a impact on performances</para></listitem>
 *  <listitem><para>If a transaction is started and some DDL statements are executed and the transaction
 *            is not rolled back or committed, then the meta data may end up being wrong</para></listitem>
 * </itemizedlist>
 * @bitfield 
 */
export enum ConnectionOptions {
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
     *                                      to Libgda have to keep their case sensitivity.
     */
    SQL_IDENTIFIERS_CASE_SENSITIVE,
    /**
     * this flags specifies that if a #GdaMetaStore has been associated
     *                                     to the connection, then it is kept up to date with the evolutions in the
     *                                     database's structure. Be aware however that there are some drawbacks
     *                                     explained below.
     */
    AUTO_META_DATA,
}
export enum DataModelAccessFlags {
    RANDOM,
    CURSOR_FORWARD,
    CURSOR_BACKWARD,
    CURSOR,
    INSERT,
    UPDATE,
    DELETE,
    WRITE,
}
export enum MetaGraphInfo {
    META_GRAPH_COLUMNS,
}
/**
 * Controls which features are computed about database objects.
 * @bitfield 
 */
export enum MetaStructFeature {
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
export enum ServerOperationCreateTableFlag {
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
export enum SqlIdentifierStyle {
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
export enum StatementModelUsage {
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
export enum StatementSqlFlag {
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
/**
 * Attributes of a value, used internally by Libgda in different contexts. Values can be OR'ed.
 * @bitfield 
 */
export enum ValueAttribute {
    /**
     * no specific attribute
     */
    NONE,
    /**
     * value is NULL (in the SQL sense)
     */
    IS_NULL,
    /**
     * value can be set to NULL (in the SQL sense)
     */
    CAN_BE_NULL,
    /**
     * value is defined as the default value (the value itself is not specified)
     */
    IS_DEFAULT,
    /**
     * a default value (not specified) exists for the value
     */
    CAN_BE_DEFAULT,
    /**
     * the value has not been changed (in the context of the attribute usage)
     */
    IS_UNCHANGED,
    /**
     * the value is not valid (with regards to the context)
     */
    DATA_NON_VALID,
    /**
     * the value can be resetted to its "original" value (i.e. before it was modified)
     */
    HAS_VALUE_ORIG,
    NO_MODIF,
    /**
     * the value can't be modified
     */
    READ_ONLY,
}
/**
 * The corresponding attribute specifies if the object it refers to is auto incremented (value has a G_TYPE_BOOLEAN type).
 */
export const ATTRIBUTE_AUTO_INCREMENT: string
/**
 * The corresponding attribute is the description of the object it refers to (value has a G_TYPE_STRING type).
 */
export const ATTRIBUTE_DESCRIPTION: string
/**
 * The corresponding attribute specifies if the object it refers to has its value to default (value has a G_TYPE_BOOLEAN type).
 */
export const ATTRIBUTE_IS_DEFAULT: string
/**
 * The corresponding attribute is the name of the object it refers to (value has a G_TYPE_STRING type).
 */
export const ATTRIBUTE_NAME: string
/**
 * The corresponding attribute is the number of significant digits of the object it refers to (value has a G_TYPE_INT type).
 */
export const ATTRIBUTE_NUMERIC_PRECISION: string
/**
 * The corresponding attribute is the number of significant digits to the right of the decimal point of the object it refers to (value has a G_TYPE_INT type).
 */
export const ATTRIBUTE_NUMERIC_SCALE: string
/**
 * This attribute, if %TRUE specifies that a tree node may or may not have any children nodes (value has a G_TYPE_BOOLEAN type).
 */
export const ATTRIBUTE_TREE_NODE_UNKNOWN_CHILDREN: string
export const EXTRA_AUTO_INCREMENT: string
export const SQLSTATE_GENERAL_ERROR: string
export const SQLSTATE_NO_ERROR: string
export const TIMEZONE_INVALID: number
/**
 * Does the opposite of gda_text_to_alphanum(), in the same string
 * @param text a string
 * @returns @text if conversion succeeded or %NULL if an error occurred
 */
export function alphanum_to_text(text: string | null): string | null
/**
 * Creates an array of strings (terminated by a %NULL) corresponding to possible completions.
 * If no completion is available, then the returned array contains just one NULL entry, and
 * if it was not possible to try to compute a completions list, then %NULL is returned.
 * @param cnc a #GdaConnection object
 * @param sql a partial SQL statement which is the context of the completion proposal, may also start with a "." for       Gda's tools which use internal commands
 * @param start starting position within `sql` of the "token" to complete (starts at 0)
 * @param end ending position within `sql` of the "token" to complete
 * @returns a new array of strings, or %NULL (use g_strfreev() to free the returned array)
 */
export function completion_list_get(cnc: Connection, sql: string, start: number, end: number): string[] | null
/**
 * Creates an INSERT, an UPDATE and a DELETE statement from a SELECT statement
 * using the database metadata available in `cnc'`s meta store. Each statements are computed only if
 * the corresponding place to store the created statement is not %NULL.
 * @param cnc a #GdaConnection
 * @param select_stmt a SELECT #GdaStatement (compound statements not handled)
 * @param require_pk TRUE if the created statement have to use a primary key
 * @returns %TRUE if no error occurred
 */
export function compute_dml_statements(cnc: Connection, select_stmt: Statement, require_pk: boolean): [ /* returnType */ boolean, /* insert_stmt */ Statement | null, /* update_stmt */ Statement | null, /* delete_stmt */ Statement | null ]
/**
 * Computes a SELECT statement which selects all the rows the `update_stmt` would update. Beware
 * however that this #GdaSqlStatement does not select anything (ie it would be rendered as "SELECT FROM ... WHERE ...")
 * and before being usable, one needs to add some fields to actually select.
 * @param update_stmt an UPDATE statement
 * @returns a new #GdaStatement if no error occurred, or %NULL otherwise
 */
export function compute_select_statement_from_update(update_stmt: Statement): SqlStatement | null
/**
 * Computes a #GdaSqlExpr expression which can be used in the WHERE clause of an UPDATE
 * or DELETE statement when a row from the result of the `stsel` statement has to be modified.
 * @param stsel a #GdaSqlSelectStatement
 * @param mtable a #GdaMetaTable
 * @param require_pk set to TRUE if a primary key ir required
 * @returns a new #GdaSqlExpr, or %NULL if an error occurred.
 */
export function compute_unique_table_row_condition(stsel: SqlStatementSelect, mtable: MetaTable, require_pk: boolean): SqlExpr | null
/**
 * Computes a #GdaSqlExpr expression which can be used in the WHERE clause of an UPDATE
 * or DELETE statement when a row from the result of the `stsel` statement has to be modified.
 * 
 * If `require_pk` is %TRUE then this function will return a non %NULL #GdaSqlExpr only if it can
 * use a primary key of `mtable`. If `require_pk` is %FALSE, then it will try to use a primary key of `mtable,`
 * and if none is available, it will use all the columns of `mtable` to compute a condition statement.
 * @param cnc a #GdaConnection, or %NULL
 * @param stsel a #GdaSqlSelectStatement
 * @param mtable a #GdaMetaTable
 * @param require_pk set to %TRUE if a primary key is required
 * @returns a new #GdaSqlExpr, or %NULL if an error occurred.
 */
export function compute_unique_table_row_condition_with_cnc(cnc: Connection | null, stsel: SqlStatementSelect, mtable: MetaTable, require_pk: boolean): SqlExpr | null
/**
 * Obtain a pointer to a #GdaDataHandler which can manage #GValue values of type `for_type`. The returned
 * data handler will be adapted to use the current locale information (for example dates will be formatted
 * taking into account the locale).
 * 
 * The returned pointer is %NULL if there is no default data handler available for the `for_type` data type
 * @param for_type a #GType type
 * @returns a #GdaDataHandler which must be destroyed using g_object_unref()
 */
export function data_handler_get_default(for_type: GObject.GType): DataHandler
export function data_model_error_quark(): GLib.Quark
export function date_time_copy(ts: GLib.DateTime): GLib.DateTime
export function ddl_modifiable_error_quark(): GLib.Quark
/**
 * Escapes `string` to make it understandable by a DBMS. The escape method is very common and replaces any
 * occurrence of "'" with "''" and "\" with "\\"
 * @param string string to escape
 * @returns a new string
 */
export function default_escape_string(string: string): string | null
/**
 * Do the reverse of gda_default_escape_string(): transforms any "''" into "'", any
 * "\\" into "\" and any "\'" into "'".
 * @param string string to unescape
 * @returns a new unescaped string, or %NULL in an error was found in @string
 */
export function default_unescape_string(string: string): string | null
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
export function dsn_split(string: string, out_dsn: string | null, out_username: string | null, out_password: string | null): void
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
 *   <listitem><para>"timestamp" for G_TYPE_DATE_TIME</para></listitem>
 *   <listitem><para>"boolean" for G_TYPE_BOOLEAN</para></listitem>
 *   <listitem><para>"blob" for GDA_TYPE_BLOB</para></listitem>
 *   <listitem><para>"binary" for GDA_TYPE_BINARY</para></listitem>
 *   <listitem><para>"null" for GDA_TYPE_NULL</para></listitem>
 * </itemizedlist>
 * @param str the name of a #GType, as returned by gda_g_type_to_string().
 * @returns the #GType represented by the given @str, or #G_TYPE_INVALID if not found
 */
export function g_type_from_string(str: string): GObject.GType
/**
 * Converts a GType to its string representation (use gda_g_type_from_string() for the
 * operation in the other direction).
 * 
 * This function wraps g_type_name() but for common types it provides an easier to
 * understand and remember name. For Example the G_TYPE_STRING is converted to "string"
 * whereas g_type_name() converts it to "gchararray".
 * @param type Type to convert from.
 * @returns the GDA's string representing the given #GType or the name returned by #g_type_name.
 */
export function g_type_to_string(type: GObject.GType): string
/**
 * Does the same as strcmp(`id1`, `id2`), but handles the case where id1 and/or id2 are enclosed in double quotes.
 * can also be used in hash tables as a #GEqualFunc.
 * @param id1 an identifier string
 * @param id2 an identifier string
 * @returns %TRUE if @id1 and @id2 are equal.
 */
export function identifier_equal(id1: string, id2: string): boolean
/**
 * computes a hash string from `id,` to be used in hash tables as a #GHashFunc
 * @param id an identifier string
 * @returns a new hash
 */
export function identifier_hash(id: string): number
/**
 * Disables GDA logs.
 */
export function log_disable(): void
/**
 * Enables GDA logs.
 */
export function log_enable(): void
export function log_is_enabled(): boolean
/**
 * This function is similar to gda_parse_iso8601_date() (with `first` being `G_DATE_YEAR,` `second` being `G_DATE_MONTH,`
 * `third` being `G_DATE_DAY` and `sep` being '-') but allows one to specify the expected date format.
 * @param gdate a pointer to a #GDate structure which will be filled
 * @param value a string to be parsed
 * @param first a #GDateDMY specifying which of year, month or day appears first (in the first bytes) in `value`
 * @param second a #GDateDMY specifying which of year, month or day appears second (in the first bytes) in `value`
 * @param third a #GDateDMY specifying which of year, month or day appears third (in the first bytes) in `value`
 * @param sep spcifies the expected separator character bewteen year, month and day (for example '-')
 * @returns %TRUE if @value has been sucessfuly parsed as a valid date (see g_date_valid()).
 */
export function parse_formatted_date(gdate: GLib.Date, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): boolean
export function parse_formatted_time(value: string, sep: number): Time
/**
 * This function is similar to g_date_time_new_from_iso8601() (with `first` being `G_DATE_YEAR,` `second` being `G_DATE_MONTH,`
 * `third` being `G_DATE_DAY` and `sep` being '-') but allows one to specify the expected date format.
 * @param value a string to be parsed
 * @param first a #GDateDMY specifying which of year, month or day appears first (in the first bytes) in `value`
 * @param second a #GDateDMY specifying which of year, month or day appears second (in the first bytes) in `value`
 * @param third a #GDateDMY specifying which of year, month or day appears third (in the first bytes) in `value`
 * @param sep specifies the expected separator character between year, month and day (for example '-')
 * @returns a new #GDateTime if @value has been successfully parsed as a valid date (see g_date_valid()).
 */
export function parse_formatted_timestamp(value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): GLib.DateTime | null
/**
 * Extracts date parts from `value,` and sets `gdate'`s contents
 * 
 * Accepted date format is "YYYY-MM-DD" (more or less than 4 digits for years and
 * less than 2 digits for month and day are accepted). Years must be in the 1-65535 range,
 * a limitation imposed by #GDate.
 * @param gdate a pointer to a #GDate structure which will be filled
 * @param value a string
 * @returns %TRUE if @value has been sucessfuly parsed as a valid date (see g_date_valid()).
 */
export function parse_iso8601_date(gdate: GLib.Date, value: string): boolean
/**
 * Extracts time parts from `value,` and sets `timegda'`s contents
 * 
 * Accepted date format is "HH:MM:SS[.ms][TZ]" where TZ is +hour or -hour.
 * If no time zone is given UTC is used.
 * @param value a string
 * @returns a new parsed #GdaTime
 */
export function parse_iso8601_time(value: string): Time
export function provider_meta_error_quark(): GLib.Quark
/**
 * Modifies `sqlst` to take into account any parameter which might be %NULL: if `sqlst` contains the
 * equivalent of "xxx = &lt;parameter definition&gt;" and if that parameter is in `params` and
 * its value is of type GDA_TYPE_NUL, then that part is replaced with "xxx IS NULL". It also
 * handles the "xxx IS NOT NULL" transformation.
 * 
 * If `out_modified` is not %NULL, then it will be set to %TRUE if `sqlst` has been modified
 * by this function, and to %FALSE otherwise.
 * 
 * This function is used by provider's implementations to make sure one can use parameters with
 * NULL values in statements without having to rewrite statements, as database usually don't
 * consider that "xxx = NULL" is the same as "xxx IS NULL" when using parameters.
 * @param sqlst a #GdaSqlStatement
 * @param params a #GdaSet to be used as parameters when executing `stmt`
 * @returns the modified @sqlst statement, or %NULL if an error occurred
 */
export function rewrite_sql_statement_for_null_parameters(sqlst: SqlStatement, params: Set): [ /* returnType */ SqlStatement | null, /* out_modified */ boolean | null ]
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
 * @returns %TRUE if @stmt needs to be transformed to handle NULL parameters, and %FALSE otherwise
 */
export function rewrite_statement_for_null_parameters(stmt: Statement, params: Set): [ /* returnType */ boolean, /* out_stmt */ Statement | null ]
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
 * @returns %TRUE if no error occurred.
 */
export function rfc1738_decode(string: string | null): boolean
/**
 * Encodes `string` using the RFC 1738 recommendations: the
 * <constant>&lt;&gt;&quot;#%{}|\^~[]&apos;`;/?:`=`&amp;</constant> and space characters are replaced by
 * <constant>&quot;%%ab&quot;</constant> where
 * <constant>ab</constant> is the hexadecimal number corresponding to the character.
 * @param string a string to encode
 * @returns a new string or %NULL
 */
export function rfc1738_encode(string: string): string | null
/**
 * Creates a new #GdaStatement, selecting the same data as `stmt,` but which always returns an
 * empty (no row) data model. This is use dy database providers' implementations.
 * @param stmt a SELECT #GdaStatement
 * @returns a new #GdaStatement
 */
export function select_alter_select_for_empty(stmt: Statement): Statement
export function server_operation_create_table_arg_get_fkey_ref_field_get_type(): GObject.GType
export function sql_error_quark(): GLib.Quark
/**
 * Add double quotes around the `str` identifier. This function is normally used only by database provider's
 * implementation. Any double quote character is replaced by two double quote characters.
 * 
 * For other uses, see gda_sql_identifier_quote().
 * @param str an SQL identifier
 */
export function sql_identifier_force_quotes(str: string): string | null
/**
 * Prepares `str` to be compared:
 * <itemizedlist>
 * <listitem><para>if surrounded by double quotes or single quotes, then just remove the quotes</para></listitem>
 * <listitem><para>otherwise convert to lower case</para></listitem>
 * </itemizedlist>
 * 
 * The quoted string:
 * <itemizedlist>
 *   <listitem><para>must start and finish with the same single or double quotes character</para></listitem>
 *   <listitem><para>can contain the delimiter character (the single or double quotes) in the string if every instance
 *     of it is preceeded with a backslash character or with the delimiter character itself</para></listitem>
 * </itemizedlist>
 * 
 * This function is normally used only by database provider's implementation.
 * 
 * WARNING: `str` must NOT be a composed identifier (&lt;part1&gt;."&lt;part2&gt;" for example)
 * WARNING: you may have to <code>#include &lt;sql-parser/gda-sql-parser.h&gt;</code>
 * @param str a quoted string
 * @returns @str
 */
export function sql_identifier_prepare_for_compare(str: string | null): string | null
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
 * @returns the representation of @id ready to be used in SQL statement, as a new string,          or %NULL if @id is in a wrong format
 */
export function sql_identifier_quote(id: string, cnc: Connection | null, prov: ServerProvider | null, meta_store_convention: boolean, force_quotes: boolean): string | null
/**
 * Splits `id` into an array of it sub parts. `id'`s format has to be "&lt;part&gt;[.&lt;part&gt;[...]]" where
 * each part is either a text surrounded by double quotes which can contain upper and lower cases or
 * an SQL identifier in lower case.
 * 
 * For example the <![CDATA["test.\"ATable\""]]> string will result in the array: <![CDATA[{"test", "\"ATable\"", NULL}]]>
 * @param id an SQL identifier
 * @returns a new %NULL-terminated array of strings, or NULL (use g_strfreev() to free the returned array)
 */
export function sql_identifier_split(id: string): string[] | null
/**
 * Returns #GdaSqlOperatorType that correspond with the string `op`.
 * @param op a #GdaSqlOperation structure
 * @returns #GdaSqlOperatorType
 */
export function sql_operation_operator_from_string(op: string): SqlOperatorType
/**
 * Returns a constant string representing a operator name. You don't need to free
 * the returned string.
 * @param op a #GdaSqlOperation structure
 * @returns a string with the operator's name or NULL in case @op is invalid.
 */
export function sql_operation_operator_to_string(op: SqlOperatorType): string
/**
 * Creates a new string representing the join type.
 * @param type a #GdaSqlSelectJoinType structure to be copied
 * @returns a string representing the Join type.
 */
export function sql_select_join_type_to_string(type: SqlSelectJoinType): string
export function sql_statement_get_contents_infos(type: SqlStatementType): SqlStatementContentsInfo
/**
 * Converts a string to a #GdaSqlStatementType value, see also gda_sql_statement_type_to_string()
 * @param type a string representing a #GdaSqlStatementType type
 * @returns a #GdaSqlStatementType value
 */
export function sql_statement_string_to_type(type: string): SqlStatementType
/**
 * Converts a #GdaSqlStatementType to a string, see also gda_sql_statement_string_to_type()
 * @param type a #GdaSqlStatementType value
 * @returns a constant string
 */
export function sql_statement_type_to_string(type: SqlStatementType): string
/**
 * Simplified version of gda_value_stringify().
 * @param value a #GValue pointer
 * @returns a new string
 */
export function sql_value_stringify(value: any): string | null
/**
 * Performs the reverse of gda_binary_to_string() (note that for any "\xyz" succession
 * of 4 characters where "xyz" represents a valid octal value, the resulting read value will
 * be modulo 256).
 * 
 * I `str` is %NULL, then an empty (i.e. where the `data` part is %NULL) #GdaBinary is created and returned.
 * @param str a string to convert, or %NULL
 * @returns a new #GdaBinary if no error were found in @str, or %NULL otherwise
 */
export function string_to_binary(str: string | null): Binary
/**
 * Performs the reverse of gda_blob_to_string().
 * @param str a string to convert
 * @returns a new #gdaBlob if no error were found in @str, or NULL otherwise
 */
export function string_to_blob(str: string): Blob
/**
 * The "encoding" consists in replacing non
 * alphanumeric character with the string "__gdaXX" where XX is the hex. representation
 * of the non alphanumeric char.
 * @param text the text to convert
 * @returns a new string
 */
export function text_to_alphanum(text: string): string | null
/**
 * Check the column types of a GdaDataModel.
 * @param model a #GdaDataModel object
 * @param types array with `nbcols` length of type GType or null (if any data type is accepted)
 * @returns %TRUE if the data model's columns match the provided data types and number
 */
export function utility_check_data_model(model: DataModel, types: GObject.GType[]): boolean
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
 * @returns %TRUE if no error occurred
 */
export function utility_data_model_dump_data_to_xml(model: DataModel, parent: libxml2.NodePtr, cols: number[] | null, rows: number[] | null, use_col_ids: boolean): boolean
/**
 * Finds the description of a field into Metadata from a #GdaDataModel.
 * @param model a #GdaDataSelect data model
 * @param field_name field name
 * @returns The field's description, or NULL if description is not set
 */
export function utility_data_model_find_column_description(model: DataSelect, field_name: string): string | null
/**
 * Note: this method may set the "source" custom string property
 * @param holder a #GdaHolder
 * @param node an xmlNodePtr with a &lt;parameter&gt; tag
 * @param sources a list of #GdaDataModel
 * @returns %TRUE if no error occurred
 */
export function utility_holder_load_attributes(holder: Holder, node: libxml2.NodePtr, sources: DataModel[] | null): boolean
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
 * @returns if both values have the same type, returns 0 if both contain the same value, an integer less than 0 if @value1 is less than @value2 or an integer greater than 0 if @value1 is greater than @value2.
 */
export function value_compare(value1: any, value2: any): number
/**
 * Creates a new #GValue from an existing one.
 * @param value value to get a copy from.
 * @returns a newly allocated #GValue with a copy of the data in @value. Free-function: gda_value_free
 */
export function value_copy(value: any): any
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
 * @returns a non 0 value if @value1 and @value2 differ, and 0 if they are equal
 */
export function value_differ(value1: any, value2: any): number
/**
 * Deallocates all memory associated to a #GValue.
 * @param value the resource to free (or %NULL)
 */
export function value_free(value: any | null): void
export function value_get_binary(value: any): Binary
export function value_get_blob(value: any): Blob
export function value_get_geometric_point(value: any): GeometricPoint
export function value_get_meta_store_change(value: any): MetaStoreChange
export function value_get_numeric(value: any): Numeric
export function value_get_short(value: any): number
export function value_get_time(value: any): Time
export function value_get_ushort(value: any): number
/**
 * Tests if a given `value` is of type #GDA_TYPE_NULL.
 * @param value value to test.
 * @returns a boolean that says whether or not @value is of type #GDA_TYPE_NULL.
 */
export function value_is_null(value: any): boolean
/**
 * Gets whether the value stored in the given #GValue is of numeric type or not.
 * @param value a #GValue.
 * @returns %TRUE if a number, %FALSE otherwise.
 */
export function value_is_number(value: any): boolean
/**
 * Creates a new #GValue of type `type,` left in the same state as when g_value_init() is called.
 * @param type the new value type.
 * @returns the newly created #GValue with the specified @type. You need to set the value in the returned GValue. Free-function: gda_value_free
 */
export function value_new(type: GObject.GType): any
/**
 * Makes a new #GValue of type #GDA_TYPE_BINARY with value `val`.
 * @param val value to set for the new #GValue.
 * @param size the size of the memory pool pointer to by `val`.
 * @returns the newly created #GValue. Free-function: gda_value_free
 */
export function value_new_binary(val: number, size: number): any
/**
 * Makes a new #GValue of type #GDA_TYPE_BLOB with the data contained by `val`.
 * @param val value to set for the new #GValue.
 * @param size the size of the memory pool pointer to by `val`.
 * @returns the newly created #GValue. Free-function: gda_value_free
 */
export function value_new_blob(val: number, size: number): any
/**
 * Makes a new #GValue of type #GDA_TYPE_BLOB interfacing with the contents of the file
 * named `filename`
 * @param filename name of the file to manipulate
 * @returns the newly created #GValue. Free-function: gda_value_free
 */
export function value_new_blob_from_file(filename: string): any
/**
 * Makes a new #GValue of type #G_TYPE_DATE_TIME with value `val`
 * (of type time_t). The returned timestamp's value is relative to the current
 * timezone (i.e. is localtime).
 * 
 * For example, to get a time stamp representing the current date and time, use:
 * 
 * <code>
 * ts = gda_value_new_date_time_from_timet (time (NULL));
 * </code>
 * @param val value to set for the new #GValue.
 * @returns the newly created #GValue, or %NULL in case of error Free-function: gda_value_free
 */
export function value_new_date_time_from_timet(val: number): any
/**
 * Creates a new default value.
 * @param default_val the default value as a string, or %NULL
 * @returns a new #GValue of the type #GDA_TYPE_DEFAULT
 */
export function value_new_default(default_val: string | null): any
/**
 * Makes a new #GValue of type `type` from its string representation.
 * 
 * For more information
 * about the string format, see the gda_value_set_from_string() function.
 * This function is typically used when reading configuration files or other non-user input that should be locale
 * independent.
 * @param as_string stringified representation of the value.
 * @param type the new value type.
 * @returns the newly created #GValue or %NULL if the string representation cannot be converted to the specified @type. Free-function: gda_value_free
 */
export function value_new_from_string(as_string: string, type: GObject.GType): any
/**
 * Creates a GValue from an XML representation of it. That XML
 * node corresponds to the following string representation:
 * &lt;value type="gdatype"&gt;value&lt;/value&gt;
 * 
 * For more information
 * about the string format, see the gda_value_set_from_string() function.
 * This function is typically used when reading configuration files or other non-user input that should be locale
 * independent.
 * @param node an XML node representing the value.
 * @returns the newly created #GValue. Free-function: gda_value_free
 */
export function value_new_from_xml(node: libxml2.NodePtr): any
/**
 * Creates a new #GValue initiated to a #GdaNull structure with a #GDA_TYPE_NULL, to
 * represent a NULL in the database.
 * @returns a new #GValue of the type #GDA_TYPE_NULL
 */
export function value_new_null(): any
/**
 * Makes a new #GValue of type #GDA_TYPE_TIME with value `val`
 * (of type time_t). The returned times's value is relative to the current
 * timezone (i.e. is localtime).
 * 
 * For example, to get a time representing the current time, use:
 * 
 * <code>
 * ts = gda_value_new_time_from_timet (time (NULL));
 * </code>
 * @param val value to set for the new #GValue.
 * @returns the newly created #GValue, or %NULL in case of error Free-function: gda_value_free
 */
export function value_new_time_from_timet(val: number): any
/**
 * Resets the #GValue and set a new type to #GType.
 * @param value the #GValue to be reseted
 * @param type the #GType to set to
 */
export function value_reset_with_type(value: any, type: GObject.GType): void
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param binary a #GdaBinary structure with the data and its size to be stored in `value`.
 */
export function value_set_binary(value: any, binary: Binary): void
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param blob a #GdaBlob structure with the data and its size to be stored in `value`.
 */
export function value_set_blob(value: any, blob: Blob): void
/**
 * Stores the value data from its string representation as `type`.
 * 
 * The accepted formats are:
 * <itemizedlist>
 *   <listitem><para>G_TYPE_BOOLEAN: a caseless comparison is made with "true" or "false"</para></listitem>
 *   <listitem><para>numerical types: C locale format (dot as a fraction separator)</para></listitem>
 *   <listitem><para>G_TYPE_DATE: see <link linkend="gda-parse-iso8601-date">gda_parse_iso8601_date()</link></para></listitem>
 *   <listitem><para>GDA_TYPE_TIME: see <link linkend="gda-parse-iso8601-time">gda_parse_iso8601_time()</link></para></listitem>
 *   <listitem><para>GDA_TYPE_TIMESTAMP: see <link linkend="g-date-time-new-iso8601">g_date_time_new_from_iso8601()</link></para></listitem>
 * </itemizedlist>
 * 
 * This function is typically used when reading configuration files or other non-user input that should be locale
 * independent.
 * @param value a #GValue that will store `val`.
 * @param as_string the stringified representation of the value.
 * @param type the type of the value
 * @returns %TRUE if the value has been converted to @type from its string representation; it not means that the value is converted successfully, just that the transformation is available. %FALSE otherwise.
 */
export function value_set_from_string(value: any, as_string: string, type: GObject.GType): boolean
/**
 * Sets the value of a #GValue from another #GValue. This
 * is different from #gda_value_copy, which creates a new #GValue.
 * #gda_value_set_from_value, on the other hand, copies the contents
 * of `copy` into `value,` which must already be allocated.
 * 
 * If values are incompatible (see `g_value_type_compatible)` then `value` is set to a
 * #GDA_TYPE_NULL, and %FALSE is returned.
 * @param value a #GValue.
 * @param from the value to copy from.
 * @returns %TRUE if successful, %FALSE otherwise.
 */
export function value_set_from_value(value: any, from: any): boolean
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param val value to be stored in `value`.
 */
export function value_set_geometric_point(value: any, val: GeometricPoint): void
export function value_set_meta_store_change(value: any, change: MetaStoreChange): void
/**
 * Sets the type of `value` to #GDA_TYPE_NULL.
 * @param value a #GValue that will store a value of type #GDA_TYPE_NULL.
 */
export function value_set_null(value: any): void
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param val value to be stored in `value`.
 */
export function value_set_numeric(value: any, val: Numeric): void
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param val value to be stored in `value`.
 */
export function value_set_short(value: any, val: number): void
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param val value to be stored in `value`.
 */
export function value_set_time(value: any, val: Time): void
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param val value to be stored in `value`.
 */
export function value_set_ushort(value: any, val: number): void
/**
 * Converts a GValue to its string representation which is a human readable value. Note that the
 * returned string does not take into account the current locale of the user (on the contrary to the
 * #GdaDataHandler objects). Using this function should be limited to debugging and values serialization
 * purposes.
 * 
 * Output is in the "C" locale for numbers, and dates are converted in a YYYY-MM-DD format.
 * @param value a #GValue.
 * @returns a new string, or %NULL if the conversion cannot be done. Free the value with a g_free() when you've finished using it.
 */
export function value_stringify(value: any): string | null
/**
 * Stores `val` into `value,` but on the contrary to gda_value_set_binary(), the `binary`
 * argument is not copied, but used as-is and it should be considered owned by `value`.
 * @param value a #GValue that will store `val`.
 * @param binary a #GdaBinary structure with the data and its size to be stored in `value`.
 */
export function value_take_binary(value: any, binary: Binary): void
/**
 * Stores `val` into `value,` but on the contrary to gda_value_set_blob(), the `blob`
 * argument is not copied, but used as-is and it should be considered owned by `value`.
 * @param value a #GValue that will store `val`.
 * @param blob a #GdaBlob structure with the data and its size to be stored in `value`.
 */
export function value_take_blob(value: any, blob: Blob): void
/**
 * This methods creates an XML string representation of a #GValue
 * @param value a #GValue to convert to string
 * @returns an string representing a #GValue in XML format
 */
export function value_to_xml_string(value: any): string | null
export function worker_error_quark(): GLib.Quark
/**
 * This function creates a new #GdaWorker, or reuses the one at `location`. Specifically:
 * <orderedlist>
 *   <listitem><para>if *`location` is %NULL, then a new #GdaWorker is created. In this case if `allow_destroy` is %FALSE, then the returned
 *     #GdaWorker's reference count is 2, thus preventing it form ever being destroyed (unless gda_worker_unref() is called somewhere else)</para></listitem>
 *   <listitem><para>if *`location` is not %NULL, the the #GdaWorker it points to is returned, its reference count increased by 1</para></listitem>
 * </orderedlist>
 * 
 * When the returned #GdaWorker's reference count reaches 0, then it is destroyed, and *`location` is set to %NULL.
 * 
 * In any case, the returned value is the same as *`location`.
 * @param location a place to store and test for existence, not %NULL
 * @param allow_destroy defines if the created `GdaWorker` (see case 1 below) will allow its reference to drop to 0 and be destroyed
 * @returns a #GdaWorker
 */
export function worker_new_unique(location: Worker, allow_destroy: boolean): Worker
export interface ConnectionOpenFunc {
    (cnc: Connection, job_id: number, result: boolean, error: GLib.Error, data: any | null): void
}
/**
 * Specifies the type of functions passed to gda_sql_any_part_foreach().
 * @callback 
 * @param part the current #GdaSqlAnyPart node
 * @param data user data passed to gda_sql_any_part_foreach().
 * @returns FALSE if the gda_sql_any_part_foreach() should stop at this point and fail
 */
export interface SqlForeachFunc {
    (part: SqlAnyPart, data: any | null): boolean
}
export interface SqlReservedKeywordsFunc {
    (word: string): boolean
}
export interface TreeManagerNodeFunc {
    (manager: TreeManager, parent: TreeNode | null, name: string | null): TreeNode
}
export interface TreeManagerNodesFunc {
    (manager: TreeManager, node: TreeNode | null, children_nodes: TreeNode[]): TreeNode[]
}
export interface WorkerCallback {
    (worker: Worker, job_id: number, result_data: any | null, error: GLib.Error): void
}
/**
 * Specifies the type of function to be passed to gda_worker_submit_job(), gda_worker_do_job() and gda_worker_wait_job().
 * @callback 
 * @returns a pointer to some data which will be returned by gda_worker_fetch_job_result()
 */
export interface WorkerFunc {
    (): any | null
}
export module DataHandler {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DataHandler {

    // Owm methods of Gda-6.0.Gda.DataHandler

    /**
     * Checks wether the GdaDataHandler is able to handle the gda type given as argument.
     * @param type a #GType
     * @returns %TRUE if the gda type can be handled
     */
    accepts_g_type(type: GObject.GType): boolean
    /**
     * Get a short description of the GdaDataHandler
     * @returns the description
     */
    get_descr(): string
    /**
     * Creates a new GValue which holds a sane initial value to be used if no value is specifically
     * provided. For example for a simple string, this would return a new value containing the "" string.
     * @param type a #GType
     * @returns the new #GValue, or %NULL if no such value can be created.
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
     * @returns the new string, or %NULL if an error occurred
     */
    get_sql_from_value(value: any | null): string | null
    /**
     * Creates a new string which is a "user friendly" representation of the given value
     * (in the user's locale, specially for the dates). If the value is
     * NULL or is of type GDA_TYPE_NULL, the returned string is a copy of "" (empty string).
     * 
     * Note: the returned value will be in the current locale representation.
     * @param value the value to be converted to a string, or %NULL
     * @returns the new string, or %NULL if an error occurred
     */
    get_str_from_value(value: any | null): string | null
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
     * @returns the new #GValue or %NULL on error
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
     * @returns the new #GValue or %NULL on error
     */
    get_value_from_str(str: string | null, type: GObject.GType): any

    // Own virtual methods of Gda-6.0.Gda.DataHandler

    /**
     * Checks wether the GdaDataHandler is able to handle the gda type given as argument.
     * @virtual 
     * @param type a #GType
     * @returns %TRUE if the gda type can be handled
     */
    vfunc_accepts_g_type(type: GObject.GType): boolean
    /**
     * Get a short description of the GdaDataHandler
     * @virtual 
     * @returns the description
     */
    vfunc_get_descr(): string
    /**
     * Creates a new GValue which holds a sane initial value to be used if no value is specifically
     * provided. For example for a simple string, this would return a new value containing the "" string.
     * @virtual 
     * @param type a #GType
     * @returns the new #GValue, or %NULL if no such value can be created.
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
     * @returns the new string, or %NULL if an error occurred
     */
    vfunc_get_sql_from_value(value: any | null): string | null
    /**
     * Creates a new string which is a "user friendly" representation of the given value
     * (in the user's locale, specially for the dates). If the value is
     * NULL or is of type GDA_TYPE_NULL, the returned string is a copy of "" (empty string).
     * 
     * Note: the returned value will be in the current locale representation.
     * @virtual 
     * @param value the value to be converted to a string, or %NULL
     * @returns the new string, or %NULL if an error occurred
     */
    vfunc_get_str_from_value(value: any | null): string | null
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
     * @returns the new #GValue or %NULL on error
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
     * @returns the new #GValue or %NULL on error
     */
    vfunc_get_value_from_str(str: string | null, type: GObject.GType): any

    // Class property signals of Gda-6.0.Gda.DataHandler

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataHandler extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataHandler

    static name: string
    static $gtype: GObject.GType<DataHandler>

    // Constructors of Gda-6.0.Gda.DataHandler

    constructor(config?: DataHandler.ConstructorProperties) 
    _init(config?: DataHandler.ConstructorProperties): void
    /**
     * Obtain a pointer to a #GdaDataHandler which can manage #GValue values of type `for_type`. The returned
     * data handler will be adapted to use the current locale information (for example dates will be formatted
     * taking into account the locale).
     * 
     * The returned pointer is %NULL if there is no default data handler available for the `for_type` data type
     * @param for_type a #GType type
     * @returns a #GdaDataHandler which must be destroyed using g_object_unref()
     */
    static get_default(for_type: GObject.GType): DataHandler
}

export module DataModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `access-changed`
     */
    export interface AccessChangedSignalCallback {
        ($obj: DataModel): void
    }

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: DataModel): void
    }

    /**
     * Signal callback interface for `reset`
     */
    export interface ResetSignalCallback {
        ($obj: DataModel): void
    }

    /**
     * Signal callback interface for `row-inserted`
     */
    export interface RowInsertedSignalCallback {
        ($obj: DataModel, row: number): void
    }

    /**
     * Signal callback interface for `row-removed`
     */
    export interface RowRemovedSignalCallback {
        ($obj: DataModel, row: number): void
    }

    /**
     * Signal callback interface for `row-updated`
     */
    export interface RowUpdatedSignalCallback {
        ($obj: DataModel, row: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DataModel {

    // Owm methods of Gda-6.0.Gda.DataModel

    /**
     * Adds the data from an XML node to the given data model (see the DTD for that node
     * in the $prefix/share/libgda/dtd/libgda-array.dtd file).
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param node an XML node representing a &lt;gda_array_data&gt; XML node.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    add_data_from_xml_node(node: libxml2.NodePtr): boolean
    /**
     * Appends a row to the data model (the new row will possibly have NULL values for all columns,
     * or some other values depending on the data model implementation)
     * 
     * Upon errors -1 will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @returns the number of the added row, or -1 if an error occurred
     */
    append_row(): number
    /**
     * Appends a row to the given data model. If any value in `values` is actually %NULL, then
     * it is considered as a default value. If `values` is %NULL then all values are set to their default value.
     * 
     * Upon errors -1 will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param values #GList of #GValue* representing the row to add.  The          length must match model's column count.  These #GValue     are value-copied (the user is still responsible for freeing them).
     * @returns the number of the added row, or -1 if an error occurred
     */
    append_values(values: any[] | null): number
    /**
     * Makes a copy of `src` into a new #GdaDataModelArray object
     * @returns a new data model, or %NULL if an error occurred
     */
    array_copy_model(): DataModelArray | null
    /**
     * Like gda_data_model_array_copy_model(), makes a copy of `src,` but copies only some
     * columns.
     * @param cols array of `src'`s columns to copy into the new array, not %NULL
     * @returns a new data model, or %NULL if an error occurred
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
     * @returns a #GdaDataModelIter object, or %NULL if an error occurred
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
     * @returns the description of the column.
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
    dump(to_stream: any | null): void
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
     * @returns a new string.
     */
    dump_as_string(): string | null
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
     * @returns TRUE if no error occurred
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
     * @returns a new string, use g_free() when no longer needed
     */
    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string | null
    /**
     * Disables notifications of changes on the given data model. To
     * re-enable notifications again, you should call the
     * #gda_data_model_thaw function.
     */
    freeze(): void
    /**
     * Get the attributes of `model` such as how to access the data it contains if it's modifiable, etc.
     * @returns an ORed value of #GdaDataModelAccessFlags flags
     */
    get_access_flags(): DataModelAccessFlags
    /**
     * Get the attributes of the value stored at (row, col) in `model,` which
     * is an ORed value of #GdaValueAttribute flags. As a special case, if
     * `row` is -1, then the attributes returned correspond to a "would be" value
     * if a row was added to `model`.
     * @param col a valid column number
     * @param row a valid row number, or -1
     * @returns the attributes as an ORed value of #GdaValueAttribute
     */
    get_attributes_at(col: number, row: number): ValueAttribute
    /**
     * Get the index of the first column named `name` in `model`.
     * @param name a column name
     * @returns the column index, or -1 if no column named @name was found
     */
    get_column_index(name: string): number
    get_column_name(col: number): string
    get_column_title(col: number): string
    /**
     * Get the global data model exception(s) that occurred when using `model`.
     * This is useful for example for the LDAP related
     * data models where some rows may be missing because the LDAP search has reached a limit
     * imposed by the LDAP server.
     * @returns a pointer to a %NULL terminated array of #GError, or %NULL.
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
     * @returns the requested row number, of -1 if not found
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
     * @returns a #GValue containing the value stored in the given position, or %NULL on error (out-of-bound position, wrong data type, etc).
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
     * @returns a #GValue containing the value stored in the given position, or %NULL on error (out-of-bound position, etc).
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
     * @returns TRUE if no error occurred
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
     * @returns TRUE if no error occurred.
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
     * @returns TRUE if no error occurred.
     */
    import_from_string(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    /**
     * Method reserved to #GdaDataModelIter implementations, should not be called directly.
     * @param iter a #GdaDataModelIter iterating in `model`
     * @returns %TRUE if @iter was moved correctly.
     */
    iter_move_next_default(iter: DataModelIter): boolean
    /**
     * Method reserved to #GdaDataModelIter implementations, should not be called directly.
     * @param iter a #GdaDataModelIter iterating in `model`
     * @returns %TRUE if @iter was moved correctly.
     */
    iter_move_prev_default(iter: DataModelIter): boolean
    /**
     * Method reserved to #GdaDataModelIter implementations, should not be called directly.
     * @param iter a #GdaDataModelIter iterating in `model`
     * @param row the requested row
     * @returns %TRUE if @iter was moved correctly.
     */
    iter_move_to_row_default(iter: DataModelIter, row: number): boolean
    /**
     * Removes a row from the data model.
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param row the row number to be removed.
     * @returns %TRUE if successful, %FALSE otherwise.
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
     * Modifies a value in `model,` at (`col,` `row)`.
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param col column number.
     * @param row row number.
     * @param value a #GValue (not %NULL)
     * @returns TRUE if the value in the data model has been updated and no error occurred
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
     * @returns %TRUE if the value in the data model has been updated and no error occurred
     */
    set_values(row: number, values: any[] | null): boolean
    /**
     * Re-enables notifications of changes on the given data model.
     */
    thaw(): void

    // Own signals of Gda-6.0.Gda.DataModel

    connect(sigName: "access-changed", callback: DataModel.AccessChangedSignalCallback): number
    connect_after(sigName: "access-changed", callback: DataModel.AccessChangedSignalCallback): number
    emit(sigName: "access-changed", ...args: any[]): void
    connect(sigName: "changed", callback: DataModel.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: DataModel.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "reset", callback: DataModel.ResetSignalCallback): number
    connect_after(sigName: "reset", callback: DataModel.ResetSignalCallback): number
    emit(sigName: "reset", ...args: any[]): void
    connect(sigName: "row-inserted", callback: DataModel.RowInsertedSignalCallback): number
    connect_after(sigName: "row-inserted", callback: DataModel.RowInsertedSignalCallback): number
    emit(sigName: "row-inserted", row: number, ...args: any[]): void
    connect(sigName: "row-removed", callback: DataModel.RowRemovedSignalCallback): number
    connect_after(sigName: "row-removed", callback: DataModel.RowRemovedSignalCallback): number
    emit(sigName: "row-removed", row: number, ...args: any[]): void
    connect(sigName: "row-updated", callback: DataModel.RowUpdatedSignalCallback): number
    connect_after(sigName: "row-updated", callback: DataModel.RowUpdatedSignalCallback): number
    emit(sigName: "row-updated", row: number, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.DataModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataModel extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataModel

    static name: string
    static $gtype: GObject.GType<DataModel>

    // Constructors of Gda-6.0.Gda.DataModel

    constructor(config?: DataModel.ConstructorProperties) 
    _init(config?: DataModel.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module DbBuildable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DbBuildable {

    // Owm methods of Gda-6.0.Gda.DbBuildable

    /**
     * This method parse XML node and populate `self` object.
     * @param node a node to parse
     * @returns %TRUE on success, %FALSE if an error occurred
     */
    parse_node(node: libxml2.NodePtr): boolean
    /**
     * Write content from the `self` to the `node`
     * @param node a node to write data in
     * @returns %TRUE on success, %FALSE if an error occurred
     */
    write_node(node: libxml2.NodePtr): boolean

    // Own virtual methods of Gda-6.0.Gda.DbBuildable

    /**
     * This method parse XML node and populate `self` object.
     * @virtual 
     * @param node a node to parse
     * @returns %TRUE on success, %FALSE if an error occurred
     */
    vfunc_parse_node(node: libxml2.NodePtr): boolean
    /**
     * Write content from the `self` to the `node`
     * @virtual 
     * @param node a node to write data in
     * @returns %TRUE on success, %FALSE if an error occurred
     */
    vfunc_write_node(node: libxml2.NodePtr): boolean

    // Class property signals of Gda-6.0.Gda.DbBuildable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DbBuildable extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DbBuildable

    static name: string
    static $gtype: GObject.GType<DbBuildable>

    // Constructors of Gda-6.0.Gda.DbBuildable

    constructor(config?: DbBuildable.ConstructorProperties) 
    _init(config?: DbBuildable.ConstructorProperties): void
}

export module DdlModifiable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DdlModifiable {

    // Owm methods of Gda-6.0.Gda.DdlModifiable

    /**
     * This method executes CREATE operation. That is, #GdaDbTable, #GdaDbIndex, and #GdaDbView
     * implement corresponding CREATE TABLE | CREATE INDEX | CREATE VIEW operations. #GdaDbColumn
     * implements ADD COLUMN operation as part of ALTER TABLE operation.
     * @param cnc Opened connection
     * @param user_data Additional information provided by the user
     */
    create(cnc: Connection, user_data: any | null): boolean
    /**
     * Execute corresponding DROP operation
     * @param cnc Opened connection
     * @param user_data Additional information provided by the user
     */
    drop(cnc: Connection, user_data: any | null): boolean
    /**
     * Execute corresponding RENAME operation. A lot of RENAME operations are not implemented by
     * SQLite3 provider. In this case, the SQL object must be deleted and a new one should be created.
     * @param cnc Opened connection
     * @param user_data Additional information provided by the user
     */
    rename(cnc: Connection, user_data: any | null): boolean

    // Own virtual methods of Gda-6.0.Gda.DdlModifiable

    /**
     * This method executes CREATE operation. That is, #GdaDbTable, #GdaDbIndex, and #GdaDbView
     * implement corresponding CREATE TABLE | CREATE INDEX | CREATE VIEW operations. #GdaDbColumn
     * implements ADD COLUMN operation as part of ALTER TABLE operation.
     * @virtual 
     * @param cnc Opened connection
     */
    vfunc_create(cnc: Connection): boolean
    /**
     * Execute corresponding DROP operation
     * @virtual 
     * @param cnc Opened connection
     */
    vfunc_drop(cnc: Connection): boolean
    /**
     * Execute corresponding RENAME operation. A lot of RENAME operations are not implemented by
     * SQLite3 provider. In this case, the SQL object must be deleted and a new one should be created.
     * @virtual 
     * @param cnc Opened connection
     */
    vfunc_rename(cnc: Connection): boolean

    // Class property signals of Gda-6.0.Gda.DdlModifiable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DdlModifiable extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DdlModifiable

    static name: string
    static $gtype: GObject.GType<DdlModifiable>

    // Constructors of Gda-6.0.Gda.DdlModifiable

    constructor(config?: DdlModifiable.ConstructorProperties) 
    _init(config?: DdlModifiable.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module Lockable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Lockable {

    // Owm methods of Gda-6.0.Gda.Lockable

    /**
     * Locks `lockable`. If it is already locked by another thread, the current thread will block until it is unlocked
     * by the other thread.
     * 
     * Note: unlike g_mutex_lock(), this method recursive, which means a thread can lock `lockable` several times
     * (and has to unlock it as many times to actually unlock it).
     */
    lock(): void
    /**
     * Tries to lock `lockable`. If it is already locked by another thread, then it immediately returns FALSE, otherwise
     * it locks `lockable`.
     * 
     * Note: unlike g_mutex_lock(), this method recursive, which means a thread can lock `lockable` several times
     * (and has to unlock it as many times to actually unlock it).
     * @returns TRUE if the object has successfully been locked.
     */
    trylock(): boolean
    /**
     * Unlocks `lockable`. This method should not be called if the current does not already holds a lock on `lockable` (having
     * used gda_lockable_lock() or gda_lockable_trylock()).
     */
    unlock(): void

    // Own virtual methods of Gda-6.0.Gda.Lockable

    /**
     * Locks `lockable`. If it is already locked by another thread, the current thread will block until it is unlocked
     * by the other thread.
     * 
     * Note: unlike g_mutex_lock(), this method recursive, which means a thread can lock `lockable` several times
     * (and has to unlock it as many times to actually unlock it).
     * @virtual 
     */
    vfunc_lock(): void
    /**
     * Tries to lock `lockable`. If it is already locked by another thread, then it immediately returns FALSE, otherwise
     * it locks `lockable`.
     * 
     * Note: unlike g_mutex_lock(), this method recursive, which means a thread can lock `lockable` several times
     * (and has to unlock it as many times to actually unlock it).
     * @virtual 
     * @returns TRUE if the object has successfully been locked.
     */
    vfunc_trylock(): boolean
    /**
     * Unlocks `lockable`. This method should not be called if the current does not already holds a lock on `lockable` (having
     * used gda_lockable_lock() or gda_lockable_trylock()).
     * @virtual 
     */
    vfunc_unlock(): void

    // Class property signals of Gda-6.0.Gda.Lockable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Lockable extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Lockable

    static name: string
    static $gtype: GObject.GType<Lockable>

    // Constructors of Gda-6.0.Gda.Lockable

    constructor(config?: Lockable.ConstructorProperties) 
    _init(config?: Lockable.ConstructorProperties): void
}

export module Provider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Provider {

    // Owm methods of Gda-6.0.Gda.Provider

    add_savepoint(cnc: Connection, name: string): boolean
    begin_transaction(cnc: Connection, name: string, level: TransactionIsolation): boolean
    close_connection(cnc: Connection): boolean
    commit_transaction(cnc: Connection, name: string): boolean
    create_connection(): Connection
    create_operation(cnc: Connection, type: ServerOperationType, options: Set): ServerOperation
    create_parser(cnc: Connection): SqlParser
    delete_savepoint(cnc: Connection, name: string): boolean
    escape_string(cnc: Connection, str: string): string | null
    get_data_handler(cnc: Connection, g_type: GObject.GType, dbms_type: string): DataHandler
    get_def_dbms_type(cnc: Connection, g_type: GObject.GType): string
    /**
     * This command should be called inmediately called after a INSERT SQL command
     * @param cnc a #GdaConnection to get last inserted from
     * @returns a #GdaSet with all data of the last inserted row
     */
    get_last_inserted(cnc: Connection): Set
    get_name(): string
    get_server_version(cnc: Connection): string
    get_version(): string
    identifier_quote(cnc: Connection | null, id: string, for_meta_store: boolean, force_quotes: boolean): string | null
    open_connection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    perform_operation(cnc: Connection, op: ServerOperation): boolean
    prepare_connection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    render_operation(cnc: Connection, op: ServerOperation): string | null
    rollback_savepoint(cnc: Connection, name: string): boolean
    rollback_transaction(cnc: Connection, name: string): boolean
    statement_execute(cnc: Connection, stmt: Statement, params: Set, model_usage: StatementModelUsage, col_types: GObject.GType, last_inserted_row: Set): GObject.Object
    statement_prepare(cnc: Connection, stmt: Statement): boolean
    statement_rewrite(cnc: Connection, stmt: Statement, params: Set): SqlStatement
    statement_to_sql(cnc: Connection, stmt: Statement, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string | null, /* params_used */ Holder[] | null ]
    supports_feature(cnc: Connection, feature: ConnectionFeature): boolean
    supports_operation(cnc: Connection, type: ServerOperationType, options: Set): boolean
    unescape_string(cnc: Connection, str: string): string | null

    // Own virtual methods of Gda-6.0.Gda.Provider

    vfunc_add_savepoint(cnc: Connection, name: string): boolean
    vfunc_begin_transaction(cnc: Connection, name: string, level: TransactionIsolation): boolean
    vfunc_close_connection(cnc: Connection): boolean
    vfunc_commit_transaction(cnc: Connection, name: string): boolean
    vfunc_create_connection(): Connection
    vfunc_create_operation(cnc: Connection, type: ServerOperationType, options: Set): ServerOperation
    vfunc_create_parser(cnc: Connection): SqlParser
    vfunc_delete_savepoint(cnc: Connection, name: string): boolean
    vfunc_escape_string(cnc: Connection, str: string): string | null
    vfunc_get_data_handler(cnc: Connection, g_type: GObject.GType, dbms_type: string): DataHandler
    vfunc_get_def_dbms_type(cnc: Connection, g_type: GObject.GType): string
    /**
     * This command should be called inmediately called after a INSERT SQL command
     * @virtual 
     * @param cnc a #GdaConnection to get last inserted from
     * @returns a #GdaSet with all data of the last inserted row
     */
    vfunc_get_last_inserted(cnc: Connection): Set
    vfunc_get_name(): string
    vfunc_get_server_version(cnc: Connection): string
    vfunc_get_version(): string
    vfunc_identifier_quote(cnc: Connection | null, id: string, for_meta_store: boolean, force_quotes: boolean): string | null
    vfunc_open_connection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    vfunc_perform_operation(cnc: Connection, op: ServerOperation): boolean
    vfunc_prepare_connection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    vfunc_render_operation(cnc: Connection, op: ServerOperation): string | null
    vfunc_rollback_savepoint(cnc: Connection, name: string): boolean
    vfunc_rollback_transaction(cnc: Connection, name: string): boolean
    vfunc_statement_execute(cnc: Connection, stmt: Statement, params: Set, model_usage: StatementModelUsage, col_types: GObject.GType, last_inserted_row: Set): GObject.Object
    vfunc_statement_prepare(cnc: Connection, stmt: Statement): boolean
    vfunc_statement_rewrite(cnc: Connection, stmt: Statement, params: Set): SqlStatement
    vfunc_statement_to_sql(cnc: Connection, stmt: Statement, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string | null, /* params_used */ Holder[] | null ]
    vfunc_supports_feature(cnc: Connection, feature: ConnectionFeature): boolean
    vfunc_supports_operation(cnc: Connection, type: ServerOperationType, options: Set): boolean
    vfunc_unescape_string(cnc: Connection, str: string): string | null

    // Class property signals of Gda-6.0.Gda.Provider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Provider extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Provider

    static name: string
    static $gtype: GObject.GType<Provider>

    // Constructors of Gda-6.0.Gda.Provider

    constructor(config?: Provider.ConstructorProperties) 
    _init(config?: Provider.ConstructorProperties): void
}

export module ProviderMeta {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.ProviderMeta

        connection?: Connection | null
    }

}

export interface ProviderMeta {

    // Own properties of Gda-6.0.Gda.ProviderMeta

    readonly connection: Connection

    // Owm methods of Gda-6.0.Gda.ProviderMeta

    btypes(): DataModel
    character_set(chset_catalog: string, chset_schema: string, chset_name_n: string): Row
    character_sets(): DataModel
    check_column(table_catalog: string, table_schema: string, table_name: string, constraint_name: string): Row
    check_columns(): DataModel
    collation(collation_catalog: string, collation_schema: string, collation_name_n: string): Row
    collations(): DataModel
    columns(): DataModel
    constraint_ref(table_catalog: string, table_schema: string, table_name: string, constraint_name: string): Row
    constraint_table(table_catalog: string, table_schema: string, table_name: string, constraint_name_n: string): Row
    constraints_ref(): DataModel
    constraints_ref_table(table_catalog: string, table_schema: string, table_name: string): DataModel
    constraints_table(table_catalog: string, table_schema: string, table_name: string): DataModel
    constraints_tables(): DataModel
    domain(domain_catalog: string, domain_schema: string): Row
    domain_constraint(domain_catalog: string, domain_schema: string, domain_name: string, contraint_name: string): Row
    domain_constraints(domain_catalog: string, domain_schema: string, domain_name: string): DataModel
    domains(): DataModel
    domains_constraints(): DataModel
    element_type(specific_name: string): Row
    element_types(): DataModel
    enum_type(udt_catalog: string, udt_schema: string, udt_name: string): Row
    enums_type(): DataModel
    /**
     * SQL is specific for current provider.
     * @param sql a string with the SQL to execute on provider
     * @param params a #GdaSet with all paramaters to use in query
     * @returns a new #GdaDataModel with as a result of the query
     */
    execute_query(sql: string, params: Set | null): DataModel | null
    /**
     * SQL is specific for current provider.
     * @param sql a string with the SQL to execute on provider
     * @param params 
     * @returns a new #GdaDataModel with as a result of the query
     */
    execute_query_row(sql: string, params: Set): Row | null
    get_connection(): Connection
    index_col(table_catalog: string, table_schema: string, table_name: string, index_name: string): Row
    index_cols(): DataModel
    index_table(table_catalog: string, table_schema: string, table_name: string, index_name_n: string): Row
    indexes_table(table_catalog: string, table_schema: string, table_name: string): DataModel
    indexes_tables(): DataModel
    key_column(table_catalog: string, table_schema: string, table_name: string, constraint_name: string): Row
    key_columns(): DataModel
    routine(routine_catalog: string, routine_schema: string, routine_name_n: string): Row
    routine_col(rout_catalog: string, rout_schema: string, rout_name: string): Row
    routine_pars(rout_catalog: string, rout_schema: string, rout_name: string): Row
    routines(): DataModel
    routines_col(): DataModel
    routines_pars(): DataModel
    schemata(catalog_name: string, schema_name_n: string): Row
    schematas(): DataModel
    table(table_catalog: string, table_schema: string, table_name_n: string): Row
    table_column(table_catalog: string, table_schema: string, table_name: string, column_name: string): Row
    table_columns(table_catalog: string, table_schema: string, table_name: string): DataModel
    tables(): DataModel
    tables_columns(): DataModel
    trigger(table_catalog: string, table_schema: string, table_name: string): Row
    triggers(): DataModel
    udt(udt_catalog: string, udt_schema: string): Row
    udt_col(udt_catalog: string, udt_schema: string, udt_name: string): Row
    udt_cols(): DataModel
    udts(): DataModel
    view(view_catalog: string, view_schema: string, view_name_n: string): Row
    view_column(view_catalog: string, view_schema: string, view_name: string, column_name: string): Row
    view_columns(view_catalog: string, view_schema: string, view_name: string): DataModel
    views(): DataModel
    views_columns(): DataModel

    // Own virtual methods of Gda-6.0.Gda.ProviderMeta

    vfunc_btypes(): DataModel
    vfunc_character_set(chset_catalog: string, chset_schema: string, chset_name_n: string): Row
    vfunc_character_sets(): DataModel
    vfunc_check_column(table_catalog: string, table_schema: string, table_name: string, constraint_name: string): Row
    vfunc_check_columns(): DataModel
    vfunc_collation(collation_catalog: string, collation_schema: string, collation_name_n: string): Row
    vfunc_collations(): DataModel
    vfunc_columns(): DataModel
    vfunc_constraint_ref(table_catalog: string, table_schema: string, table_name: string, constraint_name: string): Row
    vfunc_constraint_table(table_catalog: string, table_schema: string, table_name: string, constraint_name_n: string): Row
    vfunc_constraints_ref(): DataModel
    vfunc_constraints_ref_table(table_catalog: string, table_schema: string, table_name: string): DataModel
    vfunc_constraints_table(table_catalog: string, table_schema: string, table_name: string): DataModel
    vfunc_constraints_tables(): DataModel
    vfunc_domain(domain_catalog: string, domain_schema: string): Row
    vfunc_domain_constraint(domain_catalog: string, domain_schema: string, domain_name: string, constraint_name: string): Row
    vfunc_domain_constraints(domain_catalog: string, domain_schema: string, domain_name: string): DataModel
    vfunc_domains(): DataModel
    vfunc_domains_constraints(): DataModel
    vfunc_element_type(specific_name: string): Row
    vfunc_element_types(): DataModel
    vfunc_enum_type(udt_catalog: string, udt_schema: string, udt_name: string): Row
    vfunc_enums_type(): DataModel
    vfunc_index_col(table_catalog: string, table_schema: string, table_name: string, index_name: string): Row
    vfunc_index_cols(): DataModel
    vfunc_index_table(table_catalog: string, table_schema: string, table_name: string, index_name_n: string): Row
    vfunc_indexes_table(table_catalog: string, table_schema: string, table_name: string): DataModel
    vfunc_indexes_tables(): DataModel
    vfunc_key_column(table_catalog: string, table_schema: string, table_name: string, constraint_name: string): Row
    vfunc_key_columns(): DataModel
    vfunc_routine(routine_catalog: string, routine_schema: string, routine_name_n: string): Row
    vfunc_routine_col(rout_catalog: string, rout_schema: string, rout_name: string): Row
    vfunc_routine_pars(rout_catalog: string, rout_schema: string, rout_name: string): Row
    vfunc_routines(): DataModel
    vfunc_routines_col(): DataModel
    vfunc_routines_pars(): DataModel
    vfunc_schemata(catalog_name: string, schema_name_n: string): Row
    vfunc_schematas(): DataModel
    vfunc_table(table_catalog: string, table_schema: string, table_name_n: string): Row
    vfunc_table_column(table_catalog: string, table_schema: string, table_name: string, column_name: string): Row
    vfunc_table_columns(table_catalog: string, table_schema: string, table_name: string): DataModel
    vfunc_tables(): DataModel
    vfunc_tables_columns(): DataModel
    vfunc_trigger(table_catalog: string, table_schema: string, table_name: string): Row
    vfunc_triggers(): DataModel
    vfunc_udt(udt_catalog: string, udt_schema: string): Row
    vfunc_udt_col(udt_catalog: string, udt_schema: string, udt_name: string): Row
    vfunc_udt_cols(): DataModel
    vfunc_udts(): DataModel
    vfunc_view(view_catalog: string, view_schema: string, view_name_n: string): Row
    vfunc_view_column(view_catalog: string, view_schema: string, view_name: string, column_name: string): Row
    vfunc_view_columns(view_catalog: string, view_schema: string, view_name: string): DataModel
    vfunc_views(): DataModel
    vfunc_views_columns(): DataModel

    // Class property signals of Gda-6.0.Gda.ProviderMeta

    connect(sigName: "notify::connection", callback: (($obj: ProviderMeta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ProviderMeta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ProviderMeta extends GObject.Object {

    // Own properties of Gda-6.0.Gda.ProviderMeta

    static name: string
    static $gtype: GObject.GType<ProviderMeta>

    // Constructors of Gda-6.0.Gda.ProviderMeta

    constructor(config?: ProviderMeta.ConstructorProperties) 
    _init(config?: ProviderMeta.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module Batch {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: Batch, changed_stmt: GObject.Object): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Batch {

    // Own fields of Gda-6.0.Gda.Batch

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.Batch

    /**
     * Add `stmt` to the list of statements managed by `batch`. A #GdaStatement object can be
     * added multiple times to a #GdaBatch object. The `batch` increases reference count for `stmt` and
     * the `stmt` instance can be freed using g_object_unref().
     * @param stmt a statement to add to `batch'`s statements list
     */
    add_statement(stmt: Statement): void
    /**
     * Copy constructor
     * @returns a the new copy of @orig
     */
    copy(): Batch
    /**
     * Get a new #GdaSet object which groups all the execution parameters
     * which `batch` needs for all the statements it includes.
     * This new object is returned though `out_params`.
     * 
     * Note that if `batch` does not need any parameter, then `out_params` is set to %NULL.
     * @returns TRUE if no error occurred.
     */
    get_parameters(): [ /* returnType */ boolean, /* out_params */ Set | null ]
    /**
     * Get a list of the #GdaStatement objects contained in `batch`
     * @returns a list of #GdaStatement which should not be modified.
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
     * @returns a string containing the serialized version of @batch
     */
    serialize(): string | null

    // Own virtual methods of Gda-6.0.Gda.Batch

    vfunc_changed(changed_stmt: Statement): void

    // Own signals of Gda-6.0.Gda.Batch

    connect(sigName: "changed", callback: Batch.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Batch.ChangedSignalCallback): number
    emit(sigName: "changed", changed_stmt: GObject.Object, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Batch

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Batch extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Batch

    static name: string
    static $gtype: GObject.GType<Batch>

    // Constructors of Gda-6.0.Gda.Batch

    constructor(config?: Batch.ConstructorProperties) 
    /**
     * Creates a new #GdaBatch object
     * @constructor 
     * @returns the new object
     */
    constructor() 
    /**
     * Creates a new #GdaBatch object
     * @constructor 
     * @returns the new object
     */
    static new(): Batch
    _init(config?: Batch.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module BlobOp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.BlobOp

        connection?: Connection | null
    }

}

export interface BlobOp {

    // Own properties of Gda-6.0.Gda.BlobOp

    readonly connection: Connection

    // Own fields of Gda-6.0.Gda.BlobOp

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.BlobOp

    get_length(): number
    /**
     * Reads a chunk of bytes from the BLOB accessible through `op` into `blob`.
     * @param blob a #GdaBlob to read data to
     * @param offset offset to read from the start of the blob (starts at 0)
     * @param size maximum number of bytes to read.
     * @returns the number of bytes actually read. In case of error, -1 is returned and the provider should have added an error to the connection.
     */
    read(blob: Blob, offset: number, size: number): number
    /**
     * Reads the whole contents of the blob manipulated by `op` into `blob`
     * @param blob a #GdaBlob to read data to
     * @returns TRUE if @blob->data contains the whole BLOB manipulated by @op
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
     * @returns the number of bytes written. In case of error, -1 is returned and the provider should have added an error to the connection.
     */
    write(blob: Blob, offset: number): number
    /**
     * Writes the whole contents of `blob` into the blob manipulated by `op`. If necessary the resulting
     * blob is truncated from its previous length.
     * @param blob a #GdaBlob which contains the data to write
     * @returns TRUE on success
     */
    write_all(blob: Blob): boolean

    // Class property signals of Gda-6.0.Gda.BlobOp

    connect(sigName: "notify::connection", callback: (($obj: BlobOp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: BlobOp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BlobOp extends GObject.Object {

    // Own properties of Gda-6.0.Gda.BlobOp

    static name: string
    static $gtype: GObject.GType<BlobOp>

    // Constructors of Gda-6.0.Gda.BlobOp

    constructor(config?: BlobOp.ConstructorProperties) 
    _init(config?: BlobOp.ConstructorProperties): void
}

export module Column {

    // Signal callback interfaces

    /**
     * Signal callback interface for `g-type-changed`
     */
    export interface GTypeChangedSignalCallback {
        ($obj: Column, old_type: GObject.GType, new_type: GObject.GType): void
    }

    /**
     * Signal callback interface for `name-changed`
     */
    export interface NameChangedSignalCallback {
        ($obj: Column, old_name: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.Column

        desc?: string | null
        id?: string | null
        name?: string | null
    }

}

export interface Column {

    // Own properties of Gda-6.0.Gda.Column

    desc: string | null
    id: string | null
    name: string | null

    // Own fields of Gda-6.0.Gda.Column

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.Column

    /**
     * Creates a new #GdaColumn object from an existing one.
     * @returns a newly allocated #GdaColumn with a copy of the data in @column.
     */
    copy(): Column
    /**
     * Gets the 'allow null' flag of the given column.
     * @returns whether the given column allows null values or not (%TRUE or %FALSE).
     */
    get_allow_null(): boolean
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
     * @param descr description.
     */
    set_description(descr: string): void
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

    // Own virtual methods of Gda-6.0.Gda.Column

    vfunc_g_type_changed(old_type: GObject.GType, new_type: GObject.GType): void
    vfunc_name_changed(old_name: string): void

    // Own signals of Gda-6.0.Gda.Column

    connect(sigName: "g-type-changed", callback: Column.GTypeChangedSignalCallback): number
    connect_after(sigName: "g-type-changed", callback: Column.GTypeChangedSignalCallback): number
    emit(sigName: "g-type-changed", old_type: GObject.GType, new_type: GObject.GType, ...args: any[]): void
    connect(sigName: "name-changed", callback: Column.NameChangedSignalCallback): number
    connect_after(sigName: "name-changed", callback: Column.NameChangedSignalCallback): number
    emit(sigName: "name-changed", old_name: string | null, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Column

    connect(sigName: "notify::desc", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desc", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::desc", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Column extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Column

    static name: string
    static $gtype: GObject.GType<Column>

    // Constructors of Gda-6.0.Gda.Column

    constructor(config?: Column.ConstructorProperties) 
    constructor() 
    static new(): Column
    _init(config?: Column.ConstructorProperties): void
}

export module Config {

    // Signal callback interfaces

    /**
     * Signal callback interface for `dsn-added`
     */
    export interface DsnAddedSignalCallback {
        ($obj: Config, new_dsn: any | null): void
    }

    /**
     * Signal callback interface for `dsn-changed`
     */
    export interface DsnChangedSignalCallback {
        ($obj: Config, dsn: any | null): void
    }

    /**
     * Signal callback interface for `dsn-removed`
     */
    export interface DsnRemovedSignalCallback {
        ($obj: Config, old_dsn: any | null): void
    }

    /**
     * Signal callback interface for `dsn-to-be-removed`
     */
    export interface DsnToBeRemovedSignalCallback {
        ($obj: Config, old_dsn: any | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.Config

        /**
         * File to use for system-wide DSN list. When changed, the whole list of DSN will be reloaded.
         */
        systemFilename?: string | null
        /**
         * File to use for per-user DSN list. When changed, the whole list of DSN will be reloaded.
         */
        userFilename?: string | null
    }

}

export interface Config {

    // Own properties of Gda-6.0.Gda.Config

    /**
     * File to use for system-wide DSN list. When changed, the whole list of DSN will be reloaded.
     */
    systemFilename: string | null
    /**
     * File to use for per-user DSN list. When changed, the whole list of DSN will be reloaded.
     */
    userFilename: string | null

    // Own fields of Gda-6.0.Gda.Config

    parent_instance: GObject.Object

    // Own virtual methods of Gda-6.0.Gda.Config

    vfunc_dsn_added(new_dsn: DsnInfo): void
    vfunc_dsn_changed(dsn: DsnInfo): void
    vfunc_dsn_removed(old_dsn: DsnInfo): void
    vfunc_dsn_to_be_removed(old_dsn: DsnInfo): void

    // Own signals of Gda-6.0.Gda.Config

    connect(sigName: "dsn-added", callback: Config.DsnAddedSignalCallback): number
    connect_after(sigName: "dsn-added", callback: Config.DsnAddedSignalCallback): number
    emit(sigName: "dsn-added", new_dsn: any | null, ...args: any[]): void
    connect(sigName: "dsn-changed", callback: Config.DsnChangedSignalCallback): number
    connect_after(sigName: "dsn-changed", callback: Config.DsnChangedSignalCallback): number
    emit(sigName: "dsn-changed", dsn: any | null, ...args: any[]): void
    connect(sigName: "dsn-removed", callback: Config.DsnRemovedSignalCallback): number
    connect_after(sigName: "dsn-removed", callback: Config.DsnRemovedSignalCallback): number
    emit(sigName: "dsn-removed", old_dsn: any | null, ...args: any[]): void
    connect(sigName: "dsn-to-be-removed", callback: Config.DsnToBeRemovedSignalCallback): number
    connect_after(sigName: "dsn-to-be-removed", callback: Config.DsnToBeRemovedSignalCallback): number
    emit(sigName: "dsn-to-be-removed", old_dsn: any | null, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Config

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

export class Config extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Config

    static name: string
    static $gtype: GObject.GType<Config>

    // Constructors of Gda-6.0.Gda.Config

    constructor(config?: Config.ConstructorProperties) 
    _init(config?: Config.ConstructorProperties): void
    /**
     * Tells if the global (system) configuration can be modified (considering
     * system permissions and settings)
     * @returns TRUE if system-wide configuration can be modified
     */
    static can_modify_system_config(): boolean
    /**
     * Add or update a DSN from the definition in `info`.
     * 
     * This method may fail with a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * @param info a pointer to a filled GdaDsnInfo structure
     * @returns TRUE if no error occurred
     */
    static define_dsn(info: DsnInfo): boolean
    /**
     * Tells if the data source identified as `dsn_name` needs any authentication. If a &lt;username&gt;
     * and optionally a &lt;password&gt; are specified, they are ignored.
     * @param dsn_name the name of a DSN, in the "[&lt;username&gt;[:&lt;password&gt;]`]`&lt;DSN&gt;" format
     * @returns TRUE if an authentication is needed
     */
    static dsn_needs_authentication(dsn_name: string): boolean
    static error_quark(): GLib.Quark
    /**
     * Get a pointer to the global (unique) #GdaConfig object. This functions increments
     * the reference count of the object, so you need to call g_object_unref() on it once finished.
     * @returns a non %NULL pointer to the unique #GdaConfig
     */
    static get(): Config
    /**
     * Get information about the DSN named `dsn_name`.
     * 
     * `dsn_name'`s format is "[&lt;username&gt;[:&lt;password&gt;]`]`&lt;DSN&gt;" (if &lt;username&gt;
     * and optionally &lt;password&gt; are provided, they are ignored). Also see the gda_dsn_split() utility
     * function.
     * @param dsn_name the name of the DSN to look for
     * @returns a pointer to read-only #GdaDsnInfo structure, or %NULL if not found
     */
    static get_dsn_info(dsn_name: string): DsnInfo
    /**
     * Get a pointer to a read-only #GdaDsnInfo at the `index` position
     * @param index an index
     * @returns the pointer or %NULL if no DSN exists at position @index
     */
    static get_dsn_info_at_index(index: number): DsnInfo
    /**
     * Get the index (starting at 0) of the DSN named `dsn_name`
     * @param dsn_name a DSN
     * @returns the index or -1 if not found
     */
    static get_dsn_info_index(dsn_name: string): number
    /**
     * Get the number of defined DSN
     * @returns the number of defined DSN
     */
    static get_nb_dsn(): number
    /**
     * Get a pointer to the session-wide #GdaServerProvider for the
     * provider named `provider_name`. The caller must not call g_object_unref() on the
     * returned object.
     * 
     * This method may fail with a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * @param provider_name a database provider
     * @returns a pointer to the #GdaServerProvider, or %NULL if an error occurred
     */
    static get_provider(provider_name: string): ServerProvider
    /**
     * Get some information about the a database provider (adapter) named
     * @param provider_name a database provider
     * @returns a pointer to read-only #GdaProviderInfo structure, or %NULL if not found
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
     * @returns a new #GdaDataModel
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
     * @returns a new #GdaDataModel
     */
    static list_providers(): DataModel
    /**
     * Remove the DSN named `dsn_name`.
     * 
     * This method may fail with a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * @param dsn_name the name of the DSN to remove
     * @returns TRUE if no error occurred
     */
    static remove_dsn(dsn_name: string): boolean
}

export module Connection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        ($obj: Connection): void
    }

    /**
     * Signal callback interface for `dsn-changed`
     */
    export interface DsnChangedSignalCallback {
        ($obj: Connection): void
    }

    /**
     * Signal callback interface for `error`
     */
    export interface ErrorSignalCallback {
        ($obj: Connection, event: ConnectionEvent): void
    }

    /**
     * Signal callback interface for `opened`
     */
    export interface OpenedSignalCallback {
        ($obj: Connection): void
    }

    /**
     * Signal callback interface for `status-changed`
     */
    export interface StatusChangedSignalCallback {
        ($obj: Connection, status: ConnectionStatus): void
    }

    /**
     * Signal callback interface for `transaction-status-changed`
     */
    export interface TransactionStatusChangedSignalCallback {
        ($obj: Connection): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Lockable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.Connection

        authString?: string | null
        cncString?: string | null
        dsn?: string | null
        /**
         * Defines the number of #GdaConnectionEvent objects kept in memory which can
         * be fetched using gda_connection_get_events().
         */
        eventsHistorySize?: number | null
        /**
         * Artificially slows down the execution of queries. This property can be used to
         * debug some problems. If non zero, this value is the number of microseconds waited before actually
         * executing each query.
         * NB: this parameter is ignored during the meta store update (it is set to 0 before the meta data update
         * and restored to its state after).
         */
        executionSlowdown?: number | null
        /**
         * Computes execution times for each statement executed.
         */
        executionTimer?: boolean | null
        metaStore?: MetaStore | null
        provider?: ServerProvider | null
    }

}

export interface Connection extends Lockable {

    // Own properties of Gda-6.0.Gda.Connection

    authString: string | null
    cncString: string | null
    dsn: string | null
    /**
     * Defines the number of #GdaConnectionEvent objects kept in memory which can
     * be fetched using gda_connection_get_events().
     */
    eventsHistorySize: number
    /**
     * Artificially slows down the execution of queries. This property can be used to
     * debug some problems. If non zero, this value is the number of microseconds waited before actually
     * executing each query.
     * NB: this parameter is ignored during the meta store update (it is set to 0 before the meta data update
     * and restored to its state after).
     */
    executionSlowdown: number
    /**
     * Computes execution times for each statement executed.
     */
    executionTimer: boolean
    metaStore: MetaStore
    provider: ServerProvider

    // Own fields of Gda-6.0.Gda.Connection

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.Connection

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
     * @returns TRUE if no error occurred
     */
    add_savepoint(name: string | null): boolean
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
     * @returns a new list of #GObject objects
     */
    batch_execute(batch: Batch, params: Set | null, model_usage: StatementModelUsage): GObject.Object[]
    /**
     * Starts a transaction on the data source, identified by the `name` parameter.
     * 
     * Before starting a transaction, you can check whether the underlying
     * provider does support transactions or not by using the gda_connection_supports_feature() function.
     * @param name the name of the transation to start, or %NULL
     * @param level the requested transaction level (use %GDA_TRANSACTION_ISOLATION_SERVER_DEFAULT to apply the server default)
     * @returns %TRUE if the transaction was started successfully with the corresponding isolation level, %FALSE otherwise.
     */
    begin_transaction(name: string | null, level: TransactionIsolation): boolean
    /**
     * This function lets you clear the list of #GdaConnectionEvent's of the
     * given connection.
     */
    clear_events_list(): void
    /**
     * Closes the connection to the underlying data source.
     */
    close(): boolean
    /**
     * Commits the given transaction to the backend database. You need to call
     * gda_connection_begin_transaction() first.
     * @param name the name of the transation to commit, or %NULL
     * @returns %TRUE if the transaction was finished successfully, %FALSE otherwise.
     */
    commit_transaction(name: string | null): boolean
    /**
     * A convenient method to create a new #GdaDbCatalog instance and set the current `cnc` as a
     * property.  If for some reason, this approach doesn't fit well, the same task can be achieved
     * by the following code:
     * 
     * GdaDbCatalog *catalog = gda_db_catalog_new ();
     * g_object_set (catalog, "connection", cnc, NULL);
     * @returns A new instance of #GdaDbCatalog. The new object should be deallocated using g_object_unref().
     */
    create_db_catalog(): DbCatalog
    /**
     * Creates a new #GdaServerOperation object which can be modified in order
     * to perform the type type of action. It is a wrapper around the gda_server_provider_create_operation()
     * method.
     * @param type the type of operation requested
     * @param options an optional list of parameters
     * @returns a new #GdaServerOperation object, or %NULL in the connection's provider does not support the @type type of operation or if an error occurred
     */
    create_operation(type: ServerOperationType, options: Set | null): ServerOperation
    /**
     * Creates a new parser object able to parse the SQL dialect understood by `cnc`.
     * If the #GdaServerProvider object internally used by `cnc` does not have its own parser,
     * then %NULL is returned, and a general SQL parser can be obtained
     * using gda_sql_parser_new().
     * @returns a new #GdaSqlParser object, or %NULL
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
     * 
     * A simple example to remove a row in database.
     * 
     * 
     * ```c
     * 
     * GdaConnection *cnc;
     * //Open connection here
     * 
     * GError *error = NULL;
     * 
     * GValue *v_id = gda_value_new (G_TYPE_INT);
     * GValue *v_name = gda_value_new_from_string ("Aldibino Refinino", G_TYPE_STRING);
     * 
     * //The number 10 represents a primary key record in the table
     * g_value_set_int (v_id, 10);
     * 
     * //Delete a record with a specific ID in the col_id column
     * if (!gda_connection_delete_row_from_table (cnc, "TABLE_CONTACTS",
     *                                            "col_id", v_id,
     *                                            &error))
     * {
     *   g_error ("Could not delete row in table: %s\n",
     *            error && error->message ? error->message : "No detail");
     * }
     * 
     * //Delete a record with a specific NAME in the col_name column
     * if (!gda_connection_delete_row_from_table (cnc, "TABLE_CONTACTS",
     *                                            "col_name", v_name,
     *                                            &error))
     * {
     *   g_error ("Could not delete row in table: %s\n",
     *            error && error->message ? error->message : "No detail");
     * }
     * 
     * gda_value_free (v_id);
     * gda_value_free (v_name);
     * 
     * g_error_free (error);
     * 
     * ```
     * 
     * @param table the table's name with the row's values to be updated
     * @param condition_column_name the name of the column to used in the WHERE condition clause
     * @param condition_value the `condition_column_type'`s GType
     * @returns TRUE if no error occurred, FALSE otherwise
     */
    delete_row_from_table(table: string, condition_column_name: string, condition_value: any): boolean
    /**
     * Delete the SAVEPOINT named `name` when not used anymore.
     * @param name name of the savepoint to delete
     * @returns TRUE if no error occurred
     */
    delete_savepoint(name: string | null): boolean
    /**
     * This is a convenience function to execute a SQL command over the opened connection. For the
     * returned value, see gda_connection_statement_execute_non_select()'s documentation.
     * @param sql a query statement that must not begin with "SELECT"
     * @returns the number of rows affected or -1, or -2
     */
    execute_non_select_command(sql: string): number
    /**
     * Execute a SQL SELECT command over an opened connection.
     * @param sql a query statement that must begin with "SELECT"
     * @returns a new #GdaDataModel if successful, %NULL otherwise
     */
    execute_select_command(sql: string): DataModel
    /**
     * Gets the user name used to open this connection.
     * @returns the user name.
     */
    get_authentication(): string
    /**
     * Gets the connection string used to open this connection.
     * 
     * The connection string is the string sent over to the underlying
     * database provider, which describes the parameters to be used
     * to open a connection on the underlying data source.
     * @returns the connection string used when opening the connection.
     */
    get_cnc_string(): string
    /**
     * This function allows you to determine the actual format for the date values.
     * @returns %TRUE if no error occurred
     */
    get_date_format(): [ /* returnType */ boolean, /* out_first */ GLib.DateDMY | null, /* out_second */ GLib.DateDMY | null, /* out_third */ GLib.DateDMY | null, /* out_sep */ string | null ]
    get_dsn(): string
    /**
     * Retrieves a list of the last errors occurred during the connection. The returned list is
     * chronologically ordered such as that the most recent event is the #GdaConnectionEvent of the first node.
     * 
     * Warning: the `cnc` object may change the list if connection events occur
     * @returns a #GList of #GdaConnectionEvent objects (the list should not be modified)
     */
    get_events(): ConnectionEvent[]
    /**
     * Get the #GMainContext used while a potentially blocking operation is performed using `nc,` see
     * gda_connection_set_main_context(). If `cnc` is %NULL, then the setting applies to all the connections for which
     * no other similar setting has been set.
     * 
     * If no main context has been defined, then some function calls (for example connection opening) may block until the
     * operation has finished.
     * @param thread the #GThread in which `context` will be used, or %NULL (for the current thread)
     * @returns a #GMainContext, or %NULL
     */
    get_main_context(thread: GLib.Thread | null): GLib.MainContext
    /**
     * Get or initializes the #GdaMetaStore associated to `cnc`
     * @returns a #GdaMetaStore object
     */
    get_meta_store(): MetaStore
    /**
     * see #gda_connection_get_meta_store_data
     * @param meta_type describes which data to get.
     * @param filters a #GList of #GdaHolder objects
     * @returns a #GdaDataModel containing the data required. The caller is responsible for freeing the returned model using g_object_unref().
     */
    get_meta_store_data(meta_type: ConnectionMetaType, filters: Holder[]): DataModel
    /**
     * Gets the #GdaConnectionOptions used to open this connection.
     * @returns the connection options.
     */
    get_options(): ConnectionOptions
    /**
     * Retrieves a pointer to an object representing a prepared statement for `gda_stmt` within `cnc`. The
     * association must have been done using gda_connection_add_prepared_statement().
     * @param gda_stmt a #GdaStatement object
     * @returns the prepared statement, or %NULL if no association exists
     */
    get_prepared_statement(gda_stmt: Statement): PStmt
    /**
     * Gets a pointer to the #GdaServerProvider object used to access the database
     * @returns the #GdaServerProvider (NEVER NULL)
     */
    get_provider(): ServerProvider
    /**
     * Gets the name (identifier) of the database provider used by `cnc`
     * @returns a non modifiable string
     */
    get_provider_name(): string
    /**
     * Get the current status of `cnc`. Note that this function needs to lock the connection (see #GdaLockable)
     * to obtain the result.
     * @returns the connection's status
     */
    get_status(): ConnectionStatus
    /**
     * Get the status of `cnc` regarding transactions. The returned object should not be modified
     * or destroyed; however it may be modified or destroyed by the connection itself.
     * 
     * If %NULL is returned, then no transaction has been associated with `cnc`
     * @returns a #GdaTransactionStatus object, or %NULL
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
     * @returns TRUE if no error occurred, FALSE otherwise
     */
    insert_row_into_table_v(table: string, col_names: string[], values: any[]): boolean
    /**
     * Internal function to be called by database providers to force a transaction status
     * change.
     * @param newstate the new state
     */
    internal_change_transaction_state(newstate: TransactionStatusState): void
    /**
     * Get the opaque pointer previously set using gda_connection_internal_set_provider_data().
     * If it's not set, then add a connection event and returns %NULL
     * @returns the pointer to the opaque structure set using gda_connection_internal_set_provider_data(), or %NULL
     */
    internal_get_provider_data_error(): ServerProviderConnectionData | null
    /**
     * Internal function to be called by database providers to reset the transaction status.
     */
    internal_reset_transaction_status(): void
    /**
     * Internal functions to be called by database providers when a savepoint has been added
     * to keep track of the transaction status of the connection
     * 
     * Note: this function should not be called if gda_connection_internal_statement_executed()
     * has already been called because a statement's execution was necessary to perform
     * the action.
     * @param parent_trans name of the parent transaction, or %NULL
     * @param svp_name savepoint's name, or %NULL
     */
    internal_savepoint_added(parent_trans: string | null, svp_name: string): void
    /**
     * Internal functions to be called by database providers when a savepoint has been removed
     * to keep track of the transaction status of the connection
     * 
     * Note: this function should not be called if gda_connection_internal_statement_executed()
     * has already been called because a statement's execution was necessary to perform
     * the action.
     * @param svp_name savepoint's name, or %NULL
     */
    internal_savepoint_removed(svp_name: string | null): void
    /**
     * Internal functions to be called by database providers when a savepoint has been rolled back
     * to keep track of the transaction status of the connection
     * 
     * Note: this function should not be called if gda_connection_internal_statement_executed()
     * has already been called because a statement's execution was necessary to perform
     * the action.
     * @param svp_name savepoint's name, or %NULL
     */
    internal_savepoint_rolledback(svp_name: string | null): void
    /**
     * Note: calling this function more than once will not make it call `destroy_func` on any previously
     * set opaque `data,` you'll have to do it yourself.
     * 
     * Note: `destroy_func,` needs to free the memory associated to `data,` if necessary.
     * @param data a #GdaServerProviderConnectionData, which can be extended as needed by the provider for which `cnc` is opened
     * @param destroy_func function to call when the connection closes and `data` needs to be destroyed
     */
    internal_set_provider_data(data: ServerProviderConnectionData, destroy_func: GLib.DestroyNotify): void
    /**
     * Internal functions to be called by database providers when a statement has been executed
     * to keep track of the transaction status of the connection
     * @param stmt a #GdaStatement which has been executed
     * @param params execution's parameters
     * @param error a #GdaConnectionEvent if the execution failed, or %NULL
     */
    internal_statement_executed(stmt: Statement, params: Set | null, error: ConnectionEvent): void
    /**
     * Internal functions to be called by database providers when a transaction has been committed
     * to keep track of the transaction status of the connection
     * 
     * Note: this function should not be called if gda_connection_internal_statement_executed()
     * has already been called because a statement's execution was necessary to perform
     * the action.
     * @param trans_name transaction's name, or %NULL
     */
    internal_transaction_committed(trans_name: string | null): void
    /**
     * Internal functions to be called by database providers when a transaction has been rolled
     * back to keep track of the transaction status of the connection
     * 
     * Note: this function should not be called if gda_connection_internal_statement_executed()
     * has already been called because a statement's execution was necessary to perform
     * the action.
     * @param trans_name transaction's name, or %NULL
     */
    internal_transaction_rolledback(trans_name: string | null): void
    /**
     * Internal functions to be called by database providers when a transaction has been started
     * to keep track of the transaction status of the connection.
     * 
     * Note: this function should not be called if gda_connection_internal_statement_executed()
     * has already been called because a statement's execution was necessary to perform
     * the action.
     * @param parent_trans name of the parent transaction, or %NULL
     * @param trans_name transaction's name, or %NULL
     * @param isol_level isolation level.
     */
    internal_transaction_started(parent_trans: string | null, trans_name: string, isol_level: TransactionIsolation): void
    /**
     * Checks whether a connection is open or not.
     * @returns %TRUE if the connection is open, %FALSE if it's not.
     */
    is_opened(): boolean
    /**
     * Tries to open the connection. The function either blocks or, if a #GMaincontext has been specified using
     * gda_connection_set_main_context(), processes the events for that main context until either the
     * connection opening has succeeded or failed.
     * 
     * If the connection is already opened, then this function returns %TRUE immediately.
     * @returns TRUE if the connection is opened, and FALSE otherwise.
     */
    open(): boolean
    /**
     * This function requests that the connection be opened.
     * 
     * If the connection is already opened, then this function returns an error (with the %GDA_CONNECTION_ALREADY_OPENED_ERROR code).
     * 
     * Note: `callback` function will be called when processing events from the #GMainContext defined by
     * gda_connection_set_main_context(), for example when there is a main loop for that main context.
     * @param callback a #GdaConnectionOpenFunc which will be called after the connection has been opened (of failed to open)
     * @returns a job ID
     */
    open_async(callback: ConnectionOpenFunc): number
    /**
     * This method is similar to gda_server_operation_get_value_at(), but for SQL identifiers: a new string
     * is returned instead of a #GValue. Also the returned string is assumed to represents an SQL identifier
     * and will correctly be quoted to be used with `cnc`.
     * @param op a #GdaServerOperation object
     * @param path a complete path to a node (starting with "/")
     * @returns a new string, or %NULL if the value is undefined or if the @path is not defined or @path does not hold any value, or if the value held is not a string or a valid SQL identifier.
     */
    operation_get_sql_identifier_at_path(op: ServerOperation, path: string): string | null
    /**
     * This function helps to parse a SQL string which uses parameters and store them at `params`.
     * @param sql an SQL command to parse, not %NULL
     * @returns a #GdaStatement representing the SQL command, or %NULL if an error occurred
     */
    parse_sql_string(sql: string): [ /* returnType */ Statement, /* params */ Set | null ]
    /**
     * Performs the operation described by `op` (which should have been created using
     * gda_connection_create_operation()). It is a wrapper around the gda_server_provider_perform_operation()
     * method.
     * @param op a #GdaServerOperation object
     * @returns TRUE if no error occurred
     */
    perform_operation(op: ServerOperation): boolean
    /**
     * Use this method to get a pointer to the next available connection event which can then be customized
     * and taken into account using gda_connection_add_event().
     * @param type a #GdaConnectionEventType
     * @returns a pointer to the next available connection event, or %NULL if event should be ignored
     */
    point_available_event(type: ConnectionEventType): ConnectionEvent
    /**
     * Add more arguments if the flag needs them:
     * 
     * GDA_SERVER_OPERATION_CREATE_TABLE_FKEY_FLAG:
     * <itemizedlist>
     *   <listitem><para>string with the table's name referenced</para></listitem>
     *   <listitem><para>an integer with the number pairs "local_field", "referenced_field"
     *   used in the reference</para></listitem>
     *   <listitem><para>Pairs of "local_field", "referenced_field" to use, must match
     *    the number specified above.</para></listitem>
     *   <listitem><para>a string with the action for ON DELETE; can be: "RESTRICT", "CASCADE",
     *    "NO ACTION", "SET NULL" and "SET DEFAULT". Example: "ON UPDATE CASCADE".</para></listitem>
     *   <listitem><para>a string with the action for ON UPDATE (see above).</para></listitem>
     * </itemizedlist>
     * 
     * Create a #GdaServerOperation object using an opened connection, taking three
     * arguments, a column's name the column's GType and #GdaServerOperationCreateTableFlag
     * flag, you need to finish the list using %NULL.
     * 
     * You'll be able to modify the #GdaServerOperation object to add custom options
     * to the operation. When finished call #gda_server_operation_perform_create_table
     * or #gda_server_provider_perform_operation
     * in order to execute the operation.
     * @param table_name name of the table to create
     * @param arguments_ list of arguments as #GdaServerOperationPrepareCreateTableArg containing column's name, column's #GType and a #GdaServerOperationCreateTableFlag flag
     * @returns a #GdaServerOperation if no errors; NULL and set @error otherwise
     */
    prepare_operation_create_table(table_name: string, arguments_: ServerOperationCreateTableArg[]): ServerOperation | null
    /**
     * This is just a convenient function to create a #GdaServerOperation to drop a
     * table in an opened connection.
     * @param table_name name of the table to drop
     * @returns a new #GdaServerOperation or %NULL if couldn't create the opereration.
     */
    prepare_operation_drop_table(table_name: string): ServerOperation | null
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
     * @returns a new string, to free with g_free() once not needed anymore
     */
    quote_sql_identifier(id: string): string | null
    /**
     * Executes the statement upon which `rstmt` is built. Note that as several statements can actually be executed by this
     * method, it is recommended to be within a transaction.
     * 
     * If `error` is not %NULL and `stop_on_error` is %FALSE, then it may contain the last error which occurred.
     * @param rstmt a #GdaRepetitiveStatement object
     * @param model_usage specifies how the returned data model will be used as a #GdaStatementModelUsage enum
     * @param col_types an array of GType to request each returned GdaDataModel's column's GType, see gda_connection_statement_execute_select_full() for more information
     * @param stop_on_error set to TRUE if the method has to stop on the first error.
     * @returns a new list of #GObject pointers (see gda_connection_statement_execute() for more information about what they represent), one for each actual execution of the statement upon which @rstmt is built. If @stop_on_error is %FALSE, then the list may contain some %NULL pointers which refer to statements which failed to execute.
     */
    repetitive_statement_execute(rstmt: RepetitiveStatement, model_usage: StatementModelUsage, col_types: GObject.GType[] | null, stop_on_error: boolean): GObject.Object[]
    /**
     * Rollback all the modifications made after the SAVEPOINT named `name`.
     * @param name name of the savepoint to rollback to
     * @returns TRUE if no error occurred
     */
    rollback_savepoint(name: string | null): boolean
    /**
     * Rollbacks the given transaction. This means that all changes
     * made to the underlying data source since the last call to
     * #gda_connection_begin_transaction() or #gda_connection_commit_transaction()
     * will be discarded.
     * @param name the name of the transation to commit, or %NULL
     * @returns %TRUE if the operation was successful, %FALSE otherwise.
     */
    rollback_transaction(name: string | null): boolean
    /**
     * Defines the #GMainContext which will still process events while a potentially blocking operation is performed using
     * `cnc`. If `cnc` is %NULL, then this function applies to all the connections, except the ones for which a different
     * context has been defined (be it user defined connections or internal connections used in other objects).
     * On the other hand, if `cnc` is not %NULL, then the setting only applied to `cnc`.
     * 
     * For exemple if there is a GUI which needs to continue to handle events, then you can use this function to pass
     * the default #GMainContext used for the UI refreshing, for example:
     * 
     * <programlisting><![CDATA[GMainContext *context;
     * cnc = gda_connection_new_...;
     * context = g_main_context_ref_thread_default ();
     * gda_connection_set_main_context (cnc, NULL, context);
     * g_main_context_unref (context);
     * GError *error = NULL;
     * if (! gda_connection_open (cnc, &error))
     *     ...
     * ]]></programlisting>
     * 
     * If `context` is %NULL, then potentially blocking operation will actually block any event from being processed
     * while the blocking operation is being performed.
     * @param thread the #GThread in which `context` will be used, or %NULL (for the current thread)
     * @param context a #GMainContext, or %NULL
     */
    set_main_context(thread: GLib.Thread | null, context: GLib.MainContext | null): void
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
     * If `last_insert_row` is not %NULL and `stmt` is an INSERT statement, then it will contain a new #GdaSet
     * object composed of value holders named "+&lt;column number&gt;"
     * starting at column 0 which contain the actual inserted values. For example if a table is composed of an 'id' column
     * which is auto incremented and a 'name' column then the execution of a "INSERT INTO mytable (name) VALUES ('joe')"
     * query will return a #GdaSet with two holders:
     * <itemizedlist>
     *   <listitem><para>one with the '+0' ID which may for example contain 1 (note that its "name" property should be "id")</para></listitem>
     *   <listitem><para>one with the '+1' ID which will contain 'joe' (note that its "name" property should be "name")</para></listitem>
     * </itemizedlist>
     * Note that the value pointer by `last_insert_row` may be %NULL after the function call if either the database provider
     * does not support it, or if the last interted row could not be determined (for example with SQLite if the table
     * in which the data is inserted has the WITHOUT ROWID optimization).
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
     * @returns a #GObject, or %NULL if an error occurred
     */
    statement_execute(stmt: Statement, params: Set | null, model_usage: StatementModelUsage): [ /* returnType */ GObject.Object, /* last_insert_row */ Set | null ]
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
     * @returns the number of rows affected (&gt;=0) or -1 or -2
     */
    statement_execute_non_select(stmt: Statement, params: Set | null): [ /* returnType */ number, /* last_insert_row */ Set | null ]
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
     * @returns a #GdaDataModel containing the data returned by the data source, or %NULL if an error occurred
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
     * @returns a #GdaDataModel containing the data returned by the data source, or %NULL if an error occurred
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
     * @returns TRUE if no error occurred.
     */
    statement_prepare(stmt: Statement): boolean
    /**
     * Renders `stmt` as an SQL statement, adapted to the SQL dialect used by `cnc`
     * @param stmt a #GdaStatement object
     * @param params a #GdaSet object (which can be obtained using gda_statement_get_parameters()), or %NULL
     * @param flags SQL rendering flags, as #GdaStatementSqlFlag OR'ed values
     * @returns a new string, or %NULL if an error occurred
     */
    statement_to_sql(stmt: Statement, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string | null, /* params_used */ Holder[] | null ]
    /**
     * Asks the underlying provider for if a specific feature is supported.
     * @param feature feature to ask for.
     * @returns %TRUE if the provider supports it, %FALSE if not.
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
     * @returns TRUE if no error occurred
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
     * @returns TRUE if no error occurred, FALSE otherwise
     */
    update_row_in_table_v(table: string, condition_column_name: string, condition_value: any, col_names: string[], values: any[]): boolean
    /**
     * Produces a fully quoted and escaped string from a GValue
     * @param from #GValue to convert from
     * @returns escaped and quoted value or NULL if not supported.
     */
    value_to_sql_string(from: any): string | null

    // Own virtual methods of Gda-6.0.Gda.Connection

    vfunc_closed(): void
    vfunc_dsn_changed(): void
    vfunc_error(error: ConnectionEvent): void
    vfunc_opened(): void
    vfunc_status_changed(status: ConnectionStatus): void
    vfunc_transaction_status_changed(): void

    // Own signals of Gda-6.0.Gda.Connection

    connect(sigName: "closed", callback: Connection.ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: Connection.ClosedSignalCallback): number
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "dsn-changed", callback: Connection.DsnChangedSignalCallback): number
    connect_after(sigName: "dsn-changed", callback: Connection.DsnChangedSignalCallback): number
    emit(sigName: "dsn-changed", ...args: any[]): void
    connect(sigName: "error", callback: Connection.ErrorSignalCallback): number
    connect_after(sigName: "error", callback: Connection.ErrorSignalCallback): number
    emit(sigName: "error", event: ConnectionEvent, ...args: any[]): void
    connect(sigName: "opened", callback: Connection.OpenedSignalCallback): number
    connect_after(sigName: "opened", callback: Connection.OpenedSignalCallback): number
    emit(sigName: "opened", ...args: any[]): void
    connect(sigName: "status-changed", callback: Connection.StatusChangedSignalCallback): number
    connect_after(sigName: "status-changed", callback: Connection.StatusChangedSignalCallback): number
    emit(sigName: "status-changed", status: ConnectionStatus, ...args: any[]): void
    connect(sigName: "transaction-status-changed", callback: Connection.TransactionStatusChangedSignalCallback): number
    connect_after(sigName: "transaction-status-changed", callback: Connection.TransactionStatusChangedSignalCallback): number
    emit(sigName: "transaction-status-changed", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Connection

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
    connect(sigName: "notify::meta-store", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-store", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::meta-store", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Connection extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Connection

    static name: string
    static $gtype: GObject.GType<Connection>

    // Constructors of Gda-6.0.Gda.Connection

    constructor(config?: Connection.ConstructorProperties) 
    /**
     * This function creates a new connection, using a pre-defined data source (DSN), see
     * gda_config_define_dsn() for more information about how to define a DSN. If you don't want to
     * define a DSN, it is possible to use gda_connection_new_from_string() instead of this method.
     * 
     * The `auth_string` can contain the authentication information for the server
     * to accept the connection. It is a string containing semi-colon seperated named value, usually
     * like "USERNAME=...;PASSWORD=..." where the ... are replaced by actual values. Note that each
     * name and value must be encoded as per RFC 1738, see gda_rfc1738_encode() for more information.
     * 
     * If `auth_string` is given, it wil be used, otherwise auth_string of #GdaDsnInfo will be used.
     * 
     * The actual named parameters required depend on the provider being used, and that list is available
     * as the <parameter>auth_params</parameter> member of the #GdaProviderInfo structure for each installed
     * provider (use gda_config_get_provider_info() to get it). Also one can use the "gda-sql-6.0 -L" command
     * to list the possible named parameters.
     * 
     * This method may fail with a GDA_CONNECTION_ERROR domain error (see the #GdaConnectionError error codes)
     * or a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * 
     * The returned connection is not yet opened, you need to call gda_connection_open() or gda_connection_open_async().
     * @constructor 
     * @param dsn data source name.
     * @param auth_string authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     * @returns a new #GdaConnection or %NULL if there was an error.
     */
    static new_from_dsn(dsn: DsnInfo, auth_string: string | null, options: ConnectionOptions): Connection
    /**
     * This function creates a new function, using a pre-defined data source (DSN) name,
     * see gda_config_define_dsn() for more information about how to define a DSN. If you don't want to define
     * a DSN, it is possible to use gda_connection_new_from_string() instead of this method.
     * 
     * The `dsn` string must have the following format: "[&lt;username&gt;[:&lt;password&gt;]`]`&lt;DSN&gt;"
     * (if &lt;username&gt; and/or &lt;password&gt; are provided, and `auth_string` is %NULL, then these username
     * and passwords will be used). Note that if provided, &lt;username&gt; and &lt;password&gt;
     * must be encoded as per RFC 1738, see gda_rfc1738_encode() for more information.
     * 
     * The `auth_string` can contain the authentication information for the server
     * to accept the connection. It is a string containing semi-colon separated named value, usually
     * like "USERNAME=...;PASSWORD=..." where the ... are replaced by actual values. Note that each
     * name and value must be encoded as per RFC 1738, see gda_rfc1738_encode() for more information.
     * 
     * The actual named parameters required depend on the provider being used, and that list is available
     * as the <parameter>auth_params</parameter> member of the #GdaProviderInfo structure for each installed
     * provider (use gda_config_get_provider_info() to get it). Also one can use the "gda-sql-6.0 -L" command
     * to list the possible named parameters.
     * 
     * This method may fail with a GDA_CONNECTION_ERROR domain error (see the #GdaConnectionError error codes)
     * or a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * 
     * The returned connection is not yet opened, you need to call gda_connection_open() or gda_connection_open_async().
     * @constructor 
     * @param dsn_name data source name.
     * @param auth_string authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     * @returns a new #GdaConnection or %NULL if there was an error.
     */
    static new_from_dsn_name(dsn_name: string, auth_string: string | null, options: ConnectionOptions): Connection
    /**
     * Opens a connection given a provider ID and a connection string. This
     * allows applications to open connections without having to create
     * a data source (DSN) in the configuration. The format of `cnc_string` is
     * similar to PostgreSQL and MySQL connection strings. It is a semicolumn-separated
     * series of &lt;key&gt;=&lt;value&gt; pairs, where each key and value are encoded as per RFC 1738,
     * see gda_rfc1738_encode() for more information.
     * 
     * The possible keys depend on the provider, the "gda-sql-6.0 -L" command
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
     * string, use the "gda-sql-6.0 -L" command to list the possible named parameters.
     * 
     * Additionally, it is possible to have the connection string
     * respect the "&lt;provider_name&gt;://&lt;real cnc string&gt;" format, in which case the provider name
     * and the real connection string will be extracted from that string (note that if `provider_name`
     * is not %NULL then it will still be used as the provider ID).\
     * 
     * This method may fail with a GDA_CONNECTION_ERROR domain error (see the #GdaConnectionError error codes)
     * or a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * 
     * The returned connection is not yet opened, you need to call gda_connection_open() or gda_connection_open_async().
     * @constructor 
     * @param provider_name provider ID to connect to, or %NULL
     * @param cnc_string connection string.
     * @param auth_string authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     * @returns a new #GdaConnection or %NULL if there was an error.
     */
    static new_from_string(provider_name: string | null, cnc_string: string, auth_string: string | null, options: ConnectionOptions): Connection
    _init(config?: Connection.ConstructorProperties): void
    static error_quark(): GLib.Quark
    /**
     * Retreive a pointer to the #GdaWorker used internally by the connection. This function is reserved to
     * database provider's implementation and should not be used otherwise.
     * @param data a #GdaServerProviderConnectionData, or %NULL
     * @returns the #GdaWorker, or %NULL
     */
    static internal_get_worker(data: ServerProviderConnectionData | null): Worker
    /**
     * This function creates a connection and opens it, using a DSN. If opening fails, then no connection is created.
     * See gda_connection_new_from_dsn() for more information.
     * @param dsn data sourcename.
     * @param auth_string authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     * @returns a new #GdaConnection if connection opening was successful or %NULL if there was an error.
     */
    static open_from_dsn(dsn: DsnInfo, auth_string: string | null, options: ConnectionOptions): Connection
    /**
     * This function creates a connection and opens it, using a DSN name. If opening fails, then no connection is created. The named DSN should be available.
     * See gda_connection_new_from_dsn_name() for more information.
     * @param dsn_name data source name.
     * @param auth_string authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     * @returns a new #GdaConnection if connection opening was successful or %NULL if there was an error.
     */
    static open_from_dsn_name(dsn_name: string, auth_string: string | null, options: ConnectionOptions): Connection
    /**
     * This function creates a connection and opens it, using a connection string. If opening fails, then no connection is created.
     * See gda_connection_new_from_string() for more information.
     * @param provider_name provider ID to connect to, or %NULL
     * @param cnc_string connection string.
     * @param auth_string authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     * @returns a new #GdaConnection if connection opening was successful or %NULL if there was an error.
     */
    static open_from_string(provider_name: string | null, cnc_string: string, auth_string: string | null, options: ConnectionOptions): Connection
    /**
     * Opens an SQLite connection even if the SQLite provider is not installed,
     * to be used by database providers which need a temporary database to store
     * some information.
     * @param directory the directory the database file will be in, or %NULL for the default TMP directory
     * @param filename the database file name
     * @param auto_unlink if %TRUE, then the database file will be removed afterwards
     * @returns a new #GdaConnection, or %NULL if an error occurred
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
     */
    static string_split(string: string): [ /* out_cnc_params */ string | null, /* out_provider */ string | null, /* out_username */ string | null, /* out_password */ string | null ]
}

export module ConnectionEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.ConnectionEvent

        type?: number | null
    }

}

export interface ConnectionEvent {

    // Own properties of Gda-6.0.Gda.ConnectionEvent

    type: number

    // Own fields of Gda-6.0.Gda.ConnectionEvent

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.ConnectionEvent

    get_code(): number
    /**
     * Get the description of the event. Note that is `event'`s type is GDA_CONNECTION_EVENT_COMMAND,
     * the the description is the SQL of the command.
     * @returns @event's description.
     */
    get_description(): string
    /**
     * Get `event'`s severity (from a simple notice to a fatal event)
     * @returns the event type
     */
    get_event_type(): ConnectionEventType
    /**
     * Retrieve the code associated to `event`.
     * @returns the #GdaConnectionEventCode event's code
     */
    get_gda_code(): ConnectionEventCode
    get_source(): string
    /**
     * Get the SQLSTATE value of `event`. Even though the SQLSTATE values are specified by ANSI SQL and ODBC,
     * consult each DBMS for the possible values. However, the "00000" (success) value means that there is no error,
     * and the "HY000" (general error) value means an error but no better error code available.
     * @returns @event's SQL state.
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

    // Class property signals of Gda-6.0.Gda.ConnectionEvent

    connect(sigName: "notify::type", callback: (($obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ConnectionEvent extends GObject.Object {

    // Own properties of Gda-6.0.Gda.ConnectionEvent

    static name: string
    static $gtype: GObject.GType<ConnectionEvent>

    // Constructors of Gda-6.0.Gda.ConnectionEvent

    constructor(config?: ConnectionEvent.ConstructorProperties) 
    _init(config?: ConnectionEvent.ConstructorProperties): void
}

export module DataAccessWrapper {

    // Constructor properties interface

    export interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataAccessWrapper

        model?: DataModel | null
    }

}

export interface DataAccessWrapper extends DataModel {

    // Own properties of Gda-6.0.Gda.DataAccessWrapper

    readonly model: DataModel

    // Own fields of Gda-6.0.Gda.DataAccessWrapper

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataAccessWrapper

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
     * @returns %TRUE if the mapping actually changed
     */
    set_mapping(mapping: number[] | null): boolean

    // Class property signals of Gda-6.0.Gda.DataAccessWrapper

    connect(sigName: "notify::model", callback: (($obj: DataAccessWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DataAccessWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataAccessWrapper extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataAccessWrapper

    static name: string
    static $gtype: GObject.GType<DataAccessWrapper>

    // Constructors of Gda-6.0.Gda.DataAccessWrapper

    constructor(config?: DataAccessWrapper.ConstructorProperties) 
    _init(config?: DataAccessWrapper.ConstructorProperties): void
    /**
     * Creates a new #GdaDataModel object which buffers the rows of `model`. This object is useful
     * only if `model` can only be accessed using cursor based method.
     * @param model a #GdaDataModel
     * @returns a pointer to the newly created #GdaDataModel.
     */
    static new(model: DataModel): DataModel
}

export module DataComparator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `diff-computed`
     */
    export interface DiffComputedSignalCallback {
        ($obj: DataComparator, object: any | null): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataComparator

        newModel?: DataModel | null
        oldModel?: DataModel | null
    }

}

export interface DataComparator {

    // Own properties of Gda-6.0.Gda.DataComparator

    newModel: DataModel
    oldModel: DataModel

    // Own fields of Gda-6.0.Gda.DataComparator

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataComparator

    /**
     * Actually computes the differences between the data models for which `comp` is defined.
     * 
     * For each difference computed, stored in a #GdaDiff structure, the "diff-computed" signal is emitted.
     * If one connects to this signal and returns FALSE in the signal handler, then computing differences will be
     * stopped and an error will be returned.
     * @returns TRUE if all the differences have been successfully computed, and FALSE if an error occurred
     */
    compute_diff(): boolean
    /**
     * Get a pointer to the #GdaDiff structure representing the difference which number is `pos`
     * @param pos the requested difference number (starting at 0)
     * @returns a pointer to a #GdaDiff, or %NULL if @pos is invalid
     */
    get_diff(pos: number): Diff
    /**
     * Get the number of differences as computed by the last time gda_data_comparator_compute_diff() was called.
     * @returns the number of computed differences
     */
    get_n_diffs(): number
    /**
     * Defines the columns which will be used as a key when searching data. This is not mandatory but
     * will speed things up as less data will be processed.
     * @param col_numbers an array of `nb_cols` values
     */
    set_key_columns(col_numbers: number[]): void

    // Own virtual methods of Gda-6.0.Gda.DataComparator

    vfunc_diff_computed(diff: Diff): boolean

    // Own signals of Gda-6.0.Gda.DataComparator

    connect(sigName: "diff-computed", callback: DataComparator.DiffComputedSignalCallback): number
    connect_after(sigName: "diff-computed", callback: DataComparator.DiffComputedSignalCallback): number
    emit(sigName: "diff-computed", object: any | null, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.DataComparator

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

export class DataComparator extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataComparator

    static name: string
    static $gtype: GObject.GType<DataComparator>

    // Constructors of Gda-6.0.Gda.DataComparator

    constructor(config?: DataComparator.ConstructorProperties) 
    /**
     * Creates a new comparator to compute the differences from `old_model` to `new_model:` if one applies
     * all the computed differences (as #GdaDiff structures) to `old_model,` the resulting data model
     * should have the same contents as `new_model`.
     * @constructor 
     * @param old_model Data model to which the modifications should be applied
     * @param new_model Target data model.
     * @returns a new #GdaDataComparator object
     */
    constructor(old_model: DataModel, new_model: DataModel) 
    /**
     * Creates a new comparator to compute the differences from `old_model` to `new_model:` if one applies
     * all the computed differences (as #GdaDiff structures) to `old_model,` the resulting data model
     * should have the same contents as `new_model`.
     * @constructor 
     * @param old_model Data model to which the modifications should be applied
     * @param new_model Target data model.
     * @returns a new #GdaDataComparator object
     */
    static new(old_model: DataModel, new_model: DataModel): DataComparator
    _init(config?: DataComparator.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module DataModelArray {

    // Constructor properties interface

    export interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataModelArray

        nColumns?: number | null
        readOnly?: boolean | null
    }

}

export interface DataModelArray extends DataModel {

    // Own properties of Gda-6.0.Gda.DataModelArray

    nColumns: number
    readOnly: boolean

    // Own fields of Gda-6.0.Gda.DataModelArray

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataModelArray

    /**
     * Frees all the rows in `model`.
     */
    clear(): void
    /**
     * Get a pointer to a row in `model`
     * @param row row number (starting from 0)
     * @returns the #GdaRow, or %NULL if an error occurred
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

    // Class property signals of Gda-6.0.Gda.DataModelArray

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

export class DataModelArray extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataModelArray

    static name: string
    static $gtype: GObject.GType<DataModelArray>

    // Constructors of Gda-6.0.Gda.DataModelArray

    constructor(config?: DataModelArray.ConstructorProperties) 
    _init(config?: DataModelArray.ConstructorProperties): void
    /**
     * Creates a new #GdaDataModel object without initializing the column
     * types. Using gda_data_model_array_new_with_g_types() is usually better.
     * @param cols number of columns for rows in this data model.
     * @returns a pointer to the newly created #GdaDataModel.
     */
    static new(cols: number): DataModel
    /**
     * Creates a new #GdaDataModel object with the column types as
     * specified.
     * @param cols number of columns for rows in this data model.
     * @param types array of types of the columns of the model to create as #GType, as many as indicated by `cols`
     * @returns a pointer to the newly created #GdaDataModel.
     */
    static new_with_g_types(cols: number, types: GObject.GType[]): DataModel
}

export module DataModelDir {

    // Constructor properties interface

    export interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataModelDir

        basedir?: string | null
    }

}

export interface DataModelDir extends DataModel {

    // Own properties of Gda-6.0.Gda.DataModelDir

    readonly basedir: string | null

    // Own fields of Gda-6.0.Gda.DataModelDir

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataModelDir

    /**
     * Reset the list of errors which have occurred while using `model`
     */
    clean_errors(): void
    /**
     * Get the list of errors which have occurred while using `model`
     * @returns a read-only list of #GError pointers, or %NULL if no error has occurred
     */
    get_errors(): GLib.Error[]

    // Class property signals of Gda-6.0.Gda.DataModelDir

    connect(sigName: "notify::basedir", callback: (($obj: DataModelDir, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::basedir", callback: (($obj: DataModelDir, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::basedir", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataModelDir extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataModelDir

    static name: string
    static $gtype: GObject.GType<DataModelDir>

    // Constructors of Gda-6.0.Gda.DataModelDir

    constructor(config?: DataModelDir.ConstructorProperties) 
    _init(config?: DataModelDir.ConstructorProperties): void
    /**
     * Creates a new #GdaDataModel object to list all the files starting from `basedir`
     * @param basedir a directory
     * @returns a new #GdaDataModel
     */
    static new(basedir: string): DataModel
}

export module DataModelImport {

    // Constructor properties interface

    export interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataModelImport

        /**
         * Data to import, as a string.
         */
        dataString?: string | null
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
        randomAccess?: boolean | null
        /**
         * Defines the behaviour in case the imported data contains recoverable errors (usually too
         * many or too few data per row). If set to %TRUE, an error will be reported and the import
         * will stop, and if set to %FALSE, then the error will be reported but the import will not stop.
         */
        strict?: boolean | null
        /**
         * Data to import, as a pointer to an XML node (a #xmlNodePtr).
         */
        xmlNode?: any | null
    }

}

export interface DataModelImport extends DataModel {

    // Own properties of Gda-6.0.Gda.DataModelImport

    /**
     * Data to import, as a string.
     */
    readonly dataString: string | null
    /**
     * Name of the file to import.
     */
    readonly filename: string | null
    /**
     * Data model options.
     */
    readonly options: Set
    /**
     * Defines if the data model will be accessed randomly or through a cursor. If set to %FALSE,
     * access will have to be done using a cursor.
     */
    readonly randomAccess: boolean
    /**
     * Defines the behaviour in case the imported data contains recoverable errors (usually too
     * many or too few data per row). If set to %TRUE, an error will be reported and the import
     * will stop, and if set to %FALSE, then the error will be reported but the import will not stop.
     */
    strict: boolean
    /**
     * Data to import, as a pointer to an XML node (a #xmlNodePtr).
     */
    readonly xmlNode: any

    // Own fields of Gda-6.0.Gda.DataModelImport

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataModelImport

    /**
     * Clears the history of errors `model` has to report
     */
    clean_errors(): void
    /**
     * Get the list of errors which `model` has to report. The returned list is a list of
     * #GError structures, and must not be modified
     * @returns the list of errors (which must not be modified), or %NULL
     */
    get_errors(): GLib.Error[]

    // Class property signals of Gda-6.0.Gda.DataModelImport

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

export class DataModelImport extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataModelImport

    static name: string
    static $gtype: GObject.GType<DataModelImport>

    // Constructors of Gda-6.0.Gda.DataModelImport

    constructor(config?: DataModelImport.ConstructorProperties) 
    _init(config?: DataModelImport.ConstructorProperties): void
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
     * @returns a pointer to the newly created #GdaDataModel.
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
     * @returns a pointer to the newly created #GdaDataModel.
     */
    static new_mem(data: string, random_access: boolean, options: Set | null): DataModel
    /**
     * Creates a new #GdaDataModel and loads the data in `node`. The resulting data model
     * can be accessed in a random way.
     * @param node an XML node corresponding to a &lt;data-array&gt; tag
     * @returns a pointer to the newly created #GdaDataModel.
     */
    static new_xml_node(node: libxml2.NodePtr): DataModel
}

export module DataModelImportIter {

    // Constructor properties interface

    export interface ConstructorProperties extends DataModelIter.ConstructorProperties {
    }

}

export interface DataModelImportIter {

    // Own fields of Gda-6.0.Gda.DataModelImportIter

    parent_instance: DataModelIter & Set & GObject.Object & GObject.Object

    // Class property signals of Gda-6.0.Gda.DataModelImportIter

    connect(sigName: "notify::current-row", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-row", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-row", ...args: any[]): void
    connect(sigName: "notify::data-model", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-model", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-model", ...args: any[]): void
    connect(sigName: "notify::update-model", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-model", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-model", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::holders", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::holders", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::holders", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::validate-changes", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::validate-changes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataModelImportIter extends DataModelIter {

    // Own properties of Gda-6.0.Gda.DataModelImportIter

    static name: string
    static $gtype: GObject.GType<DataModelImportIter>

    // Constructors of Gda-6.0.Gda.DataModelImportIter

    constructor(config?: DataModelImportIter.ConstructorProperties) 
    _init(config?: DataModelImportIter.ConstructorProperties): void
}

export module DataModelIter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `end-of-data`
     */
    export interface EndOfDataSignalCallback {
        ($obj: DataModelIter): void
    }

    /**
     * Signal callback interface for `row-changed`
     */
    export interface RowChangedSignalCallback {
        ($obj: DataModelIter, row: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Set.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataModelIter

        currentRow?: number | null
        dataModel?: DataModel | null
        updateModel?: boolean | null
    }

}

export interface DataModelIter {

    // Own properties of Gda-6.0.Gda.DataModelIter

    currentRow: number
    dataModel: DataModel
    updateModel: boolean

    // Own fields of Gda-6.0.Gda.DataModelIter

    parent_instance: Set & GObject.Object

    // Owm methods of Gda-6.0.Gda.DataModelIter

    /**
     * Fetch a pointer to the #GdaHolder object which is synchronized with data at
     * column `col`
     * @param col the requested column
     * @returns the #GdaHolder, or %NULL if an error occurred
     */
    get_holder_for_field(col: number): Holder
    /**
     * Get the row which `iter` represents in the data model
     * @returns the row number, or -1 if @iter is invalid
     */
    get_row(): number
    /**
     * Get the value stored at the column `col` in `iter`. The returned value must not be modified.
     * @param col the requested column
     * @returns the #GValue, or %NULL if the value could not be fetched
     */
    get_value_at(col: number): any | null
    /**
     * Get the value stored at the column `col` in `iter`. The returned value must not be modified.
     * @param col the requested column
     * @returns the #GValue, or %NULL if the value could not be fetched
     */
    get_value_at_e(col: number): any | null
    /**
     * Get the value stored at the column `field_name` in `iter`
     * @param field_name the requested column name
     * @returns the #GValue, or %NULL
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
     * @returns TRUE if @iter is valid
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
     * @returns %TRUE if the iterator is now at the next row
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
     * @returns %TRUE if the iterator is now at the previous row
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
     * @returns %TRUE if no error occurred
     */
    move_to_row(row: number): boolean
    /**
     * Sets a value in `iter,` at the column specified by `col`
     * @param col the column number
     * @param value a #GValue (not %NULL)
     * @returns TRUE if no error occurred
     */
    set_value_at(col: number, value: any): boolean

    // Own virtual methods of Gda-6.0.Gda.DataModelIter

    vfunc_end_of_data(): void
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
     * @virtual 
     * @returns %TRUE if the iterator is now at the next row
     */
    vfunc_move_next(): boolean
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
     * @virtual 
     * @returns %TRUE if the iterator is now at the previous row
     */
    vfunc_move_prev(): boolean
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
     * @virtual 
     * @param row the row to set `iter` to
     * @returns %TRUE if no error occurred
     */
    vfunc_move_to_row(row: number): boolean
    vfunc_row_changed(row: number): void
    /**
     * Sets a value in `iter,` at the column specified by `col`
     * @virtual 
     * @param col the column number
     * @param value a #GValue (not %NULL)
     * @returns TRUE if no error occurred
     */
    vfunc_set_value_at(col: number, value: any): boolean

    // Own signals of Gda-6.0.Gda.DataModelIter

    connect(sigName: "end-of-data", callback: DataModelIter.EndOfDataSignalCallback): number
    connect_after(sigName: "end-of-data", callback: DataModelIter.EndOfDataSignalCallback): number
    emit(sigName: "end-of-data", ...args: any[]): void
    connect(sigName: "row-changed", callback: DataModelIter.RowChangedSignalCallback): number
    connect_after(sigName: "row-changed", callback: DataModelIter.RowChangedSignalCallback): number
    emit(sigName: "row-changed", row: number, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.DataModelIter

    connect(sigName: "notify::current-row", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-row", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-row", ...args: any[]): void
    connect(sigName: "notify::data-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-model", ...args: any[]): void
    connect(sigName: "notify::update-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-model", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::holders", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::holders", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::holders", ...args: any[]): void
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

export class DataModelIter extends Set {

    // Own properties of Gda-6.0.Gda.DataModelIter

    static name: string
    static $gtype: GObject.GType<DataModelIter>

    // Constructors of Gda-6.0.Gda.DataModelIter

    constructor(config?: DataModelIter.ConstructorProperties) 
    _init(config?: DataModelIter.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module DataModelSelect {

    // Signal callback interfaces

    /**
     * Signal callback interface for `updated`
     */
    export interface UpdatedSignalCallback {
        ($obj: DataModelSelect): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DataModelSelect extends DataModel {

    // Own properties of Gda-6.0.Gda.DataModelSelect

    readonly valid: boolean

    // Own fields of Gda-6.0.Gda.DataModelSelect

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataModelSelect

    get_parameters(): Set
    /**
     * If at creation or after parameters change has been set, a SELECT statement
     * is ejectuted, if unsuccess then this model is at invalid state.
     * @returns TRUE if a valid data model is present
     */
    is_valid(): boolean
    set_parameters(params: Set): void

    // Own virtual methods of Gda-6.0.Gda.DataModelSelect

    vfunc_updated(): void

    // Own signals of Gda-6.0.Gda.DataModelSelect

    connect(sigName: "updated", callback: DataModelSelect.UpdatedSignalCallback): number
    connect_after(sigName: "updated", callback: DataModelSelect.UpdatedSignalCallback): number
    emit(sigName: "updated", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.DataModelSelect

    connect(sigName: "notify::valid", callback: (($obj: DataModelSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: DataModelSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataModelSelect extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataModelSelect

    static name: string
    static $gtype: GObject.GType<DataModelSelect>

    // Constructors of Gda-6.0.Gda.DataModelSelect

    constructor(config?: DataModelSelect.ConstructorProperties) 
    constructor(cnc: Connection, stm: Statement, params: Set | null) 
    static new(cnc: Connection, stm: Statement, params: Set | null): DataModelSelect
    static new_from_string(cnc: Connection, sql: string): DataModelSelect
    _init(config?: DataModelSelect.ConstructorProperties): void
}

export module DataPivot {

    // Constructor properties interface

    export interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataPivot

        model?: DataModel | null
    }

}

export interface DataPivot extends DataModel {

    // Own properties of Gda-6.0.Gda.DataPivot

    model: DataModel

    // Own fields of Gda-6.0.Gda.DataPivot

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataPivot

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
     * @returns %TRUE if no error occurred
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
     * @returns %TRUE if no error occurred
     */
    add_field(field_type: DataPivotFieldType, field: string, alias: string | null): boolean
    /**
     * Acutally populates `pivot` by analysing the data from the provided data model.
     * @returns %TRUE if no error occurred.
     */
    populate(): boolean

    // Class property signals of Gda-6.0.Gda.DataPivot

    connect(sigName: "notify::model", callback: (($obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataPivot extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataPivot

    static name: string
    static $gtype: GObject.GType<DataPivot>

    // Constructors of Gda-6.0.Gda.DataPivot

    constructor(config?: DataPivot.ConstructorProperties) 
    _init(config?: DataPivot.ConstructorProperties): void
    /**
     * Creates a new #GdaDataModel which will contain analysed data from `model`.
     * @param model a #GdaDataModel to analyse data from, or %NULL
     * @returns a pointer to the newly created #GdaDataModel.
     */
    static new(model: DataModel | null): DataModel
    static error_quark(): GLib.Quark
}

export module DataProxy {

    // Signal callback interfaces

    /**
     * Signal callback interface for `filter-changed`
     */
    export interface FilterChangedSignalCallback {
        ($obj: DataProxy): void
    }

    /**
     * Signal callback interface for `row-changes-applied`
     */
    export interface RowChangesAppliedSignalCallback {
        ($obj: DataProxy, row: number, proxied_row: number): void
    }

    /**
     * Signal callback interface for `row-delete-changed`
     */
    export interface RowDeleteChangedSignalCallback {
        ($obj: DataProxy, row: number, to_be_deleted: boolean): void
    }

    /**
     * Signal callback interface for `sample-changed`
     */
    export interface SampleChangedSignalCallback {
        ($obj: DataProxy, sample_start: number, sample_end: number): void
    }

    /**
     * Signal callback interface for `sample-size-changed`
     */
    export interface SampleSizeChangedSignalCallback {
        ($obj: DataProxy, sample_size: number): void
    }

    /**
     * Signal callback interface for `validate-row-changes`
     */
    export interface ValidateRowChangesSignalCallback {
        ($obj: DataProxy, row: number, proxied_row: number): GLib.Error
    }


    // Constructor properties interface

    export interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataProxy

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
        cacheChanges?: boolean | null
        deferSync?: boolean | null
        model?: DataModel | null
        prependNullEntry?: boolean | null
        sampleSize?: number | null
    }

}

export interface DataProxy extends DataModel {

    // Own properties of Gda-6.0.Gda.DataProxy

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
    cacheChanges: boolean
    deferSync: boolean
    model: DataModel
    prependNullEntry: boolean
    sampleSize: number

    // Own fields of Gda-6.0.Gda.DataProxy

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataProxy

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
     * @returns TRUE if no error occurred
     */
    apply_all_changes(): boolean
    /**
     * Commits the modified data in the proxy back into the #GdaDataModel.
     * @param proxy_row the row number to commit
     * @returns TRUE if no error occurred.
     */
    apply_row_changes(proxy_row: number): boolean
    /**
     * Cancel all the changes stored in the proxy (the `proxy` will be reset to its state
     * as it was just after creation). Note that if there are some cached changes (i.e. not applied
     * to the current proxied data model), then these cached changes are not cleared (set the "cache-changes"
     * property to %FALSE for this).
     * @returns TRUE if no error occurred
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
     * @returns the current filter expression or %NULL if no filter has been set
     */
    get_filter_expr(): string
    /**
     * Get the total number of filtered rows in `proxy` if a filter has been applied. As new rows
     * (rows added to the proxy and not yet added to the proxied data model) and rows to remove
     * (rows marked for removal but not yet removed from the proxied data model) are also filtered,
     * the returned number also contains references to new rows and rows to be removed.
     * @returns the number of filtered rows in @proxy, or -1 if no filter has been applied
     */
    get_filtered_n_rows(): number
    /**
     * Get the number of rows which have been modified in the proxy (the sum of rows existing in
     * the proxied data model which have been modified, and new rows).
     * @returns the number of modified rows
     */
    get_n_modified_rows(): number
    /**
     * Get the number of rows which have been added to `proxy` and which are not part of
     * the proxied data model.
     * @returns the number of new rows
     */
    get_n_new_rows(): number
    /**
     * Fetch the #GdaDataModel which `proxy` does proxy
     * @returns the proxied data model
     */
    get_proxied_model(): DataModel
    /**
     * Get the number of columns in the proxied data model
     * @returns the number of columns, or -1 if an error occurred
     */
    get_proxied_model_n_cols(): number
    /**
     * Get the number of rows in the proxied data model
     * @returns the number of rows, or -1 if the number of rows is not known
     */
    get_proxied_model_n_rows(): number
    /**
     * Get the `proxy'`s proxied model row corresponding to `proxy_row`
     * @param proxy_row A proxy row number
     * @returns the proxied model's row, or -1 if @proxy row which only exists @proxy
     */
    get_proxied_model_row(proxy_row: number): number
    /**
     * Get the number of the last row to be available in `proxy` (in reference to the proxied data model)
     * @returns the number of the last proxied model's row.
     */
    get_sample_end(): number
    /**
     * Get the size of each chunk of data displayed at a time.
     * @returns the chunk (or sample) size, or 0 if chunking is disabled.
     */
    get_sample_size(): number
    /**
     * Get the number of the first row to be available in `proxy` (in reference to the proxied data model)
     * @returns the number of the first proxied model's row.
     */
    get_sample_start(): number
    /**
     * Get the attributes of the value stored at (proxy_row, col) in `proxy,` which
     * is an ORed value of #GdaValueAttribute flags
     * @param proxy_row a proxy row
     * @param col a valid proxy column
     * @returns a #GdaValueAttribute with the value's attributes at given position
     */
    get_value_attributes(proxy_row: number, col: number): ValueAttribute
    /**
     * Retrieve a whole list of values from the `proxy` data model. This function
     * calls gda_data_proxy_get_value()
     * for each column index specified in `cols_index,` and generates a #GSList on the way.
     * @param proxy_row a proxy row
     * @param cols_index array containing the columns for which the values are requested
     * @returns a new list of values (the list must be freed, not the values), or %NULL if an error occurred
     */
    get_values(proxy_row: number, cols_index: number[]): any[]
    /**
     * Tells if `proxy` contains any modifications not applied to the proxied data model.
     * @returns TRUE if there are some modifications in @proxy
     */
    has_changed(): boolean
    is_read_only(): boolean
    /**
     * Tells if the row number `proxy_row` has changed
     * @param proxy_row A proxy row number
     * @returns TRUE if the row has changed
     */
    row_has_changed(proxy_row: number): boolean
    /**
     * Tells if the row number `proxy_row` is marked to be deleted.
     * @param proxy_row A proxy row number
     * @returns TRUE if the row is marked to be deleted
     */
    row_is_deleted(proxy_row: number): boolean
    /**
     * Tells if the row number `proxy_row` is a row which has been inserted in `proxy`
     * (and is thus not in the proxied data model).
     * @param proxy_row A proxy row number
     * @returns TRUE if the row is an inserted row
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
     * @returns TRUE if no error occurred
     */
    set_filter_expr(filter_expr: string | null): boolean
    /**
     * Orders by the `col` column
     * @param col the column number to order from
     * @returns TRUE if no error occurred
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

    // Own virtual methods of Gda-6.0.Gda.DataProxy

    vfunc_filter_changed(): void
    vfunc_row_changes_applied(row: number, proxied_row: number): void
    vfunc_row_delete_changed(row: number, to_be_deleted: boolean): void
    vfunc_sample_changed(sample_start: number, sample_end: number): void
    vfunc_sample_size_changed(sample_size: number): void
    vfunc_validate_row_changes(row: number, proxied_row: number): GLib.Error

    // Own signals of Gda-6.0.Gda.DataProxy

    connect(sigName: "filter-changed", callback: DataProxy.FilterChangedSignalCallback): number
    connect_after(sigName: "filter-changed", callback: DataProxy.FilterChangedSignalCallback): number
    emit(sigName: "filter-changed", ...args: any[]): void
    connect(sigName: "row-changes-applied", callback: DataProxy.RowChangesAppliedSignalCallback): number
    connect_after(sigName: "row-changes-applied", callback: DataProxy.RowChangesAppliedSignalCallback): number
    emit(sigName: "row-changes-applied", row: number, proxied_row: number, ...args: any[]): void
    connect(sigName: "row-delete-changed", callback: DataProxy.RowDeleteChangedSignalCallback): number
    connect_after(sigName: "row-delete-changed", callback: DataProxy.RowDeleteChangedSignalCallback): number
    emit(sigName: "row-delete-changed", row: number, to_be_deleted: boolean, ...args: any[]): void
    connect(sigName: "sample-changed", callback: DataProxy.SampleChangedSignalCallback): number
    connect_after(sigName: "sample-changed", callback: DataProxy.SampleChangedSignalCallback): number
    emit(sigName: "sample-changed", sample_start: number, sample_end: number, ...args: any[]): void
    connect(sigName: "sample-size-changed", callback: DataProxy.SampleSizeChangedSignalCallback): number
    connect_after(sigName: "sample-size-changed", callback: DataProxy.SampleSizeChangedSignalCallback): number
    emit(sigName: "sample-size-changed", sample_size: number, ...args: any[]): void
    connect(sigName: "validate-row-changes", callback: DataProxy.ValidateRowChangesSignalCallback): number
    connect_after(sigName: "validate-row-changes", callback: DataProxy.ValidateRowChangesSignalCallback): number
    emit(sigName: "validate-row-changes", row: number, proxied_row: number, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.DataProxy

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

export class DataProxy extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataProxy

    static name: string
    static $gtype: GObject.GType<DataProxy>

    // Constructors of Gda-6.0.Gda.DataProxy

    constructor(config?: DataProxy.ConstructorProperties) 
    /**
     * Creates a new proxy for `model`. For bindings use `gda_data_proxy_new_with_data_model`.
     * @constructor 
     * @param model Data model to be proxied
     * @returns a new #GdaDataProxy object
     */
    constructor(model: DataModel) 
    /**
     * Creates a new proxy for `model`. For bindings use `gda_data_proxy_new_with_data_model`.
     * @constructor 
     * @param model Data model to be proxied
     * @returns a new #GdaDataProxy object
     */
    static new(model: DataModel): DataProxy
    /**
     * Creates a new proxy for `model`. This is the preferred method to create
     * #GdaDataProxy objects by bindings.
     * @constructor 
     * @param model Data model to be proxied
     * @returns a new #GdaDataProxy object
     */
    static new_with_data_model(model: DataModel): DataProxy
    _init(config?: DataProxy.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module DataSelect {

    // Constructor properties interface

    export interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataSelect

        connection?: Connection | null
        deleteStmt?: Statement | null
        execParams?: Set | null
        /**
         * This property stores the execution delay which has been necessary to obtain the data
         */
        executionDelay?: number | null
        insertStmt?: Statement | null
        modelUsage?: number | null
        preparedStmt?: PStmt | null
        storeAllRows?: boolean | null
        updateStmt?: Statement | null
    }

}

export interface DataSelect extends DataModel {

    // Own properties of Gda-6.0.Gda.DataSelect

    readonly connection: Connection
    deleteStmt: Statement
    readonly execParams: Set
    /**
     * This property stores the execution delay which has been necessary to obtain the data
     */
    executionDelay: number
    insertStmt: Statement
    readonly modelUsage: number
    preparedStmt: PStmt
    readonly selectStmt: Statement
    storeAllRows: boolean
    updateStmt: Statement

    // Own fields of Gda-6.0.Gda.DataSelect

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataSelect

    /**
     * Computes correct attributes for each of `model'`s columns, which includes the "NOT NULL" attribute, the
     * default value, the precision and scale for numeric values.
     * @returns TRUE if no error occurred
     */
    compute_columns_attributes(): boolean
    /**
     * Makes `model` try to compute INSERT, UPDATE and DELETE statements to be used when modifying `model'`s contents.
     * Note: any modification statement set using gda_data_select_set_modification_statement() will first be unset
     * 
     * This function is similar to calling gda_data_select_compute_modification_statements_ext() with
     * `cond_type` set to %GDA_DATA_SELECT_COND_PK
     * @returns %TRUE if no error occurred. If %FALSE is returned, then some modification statement may still have been computed
     */
    compute_modification_statements(): boolean
    /**
     * Makes `model` try to compute INSERT, UPDATE and DELETE statements to be used when modifying `model'`s contents.
     * Note: any modification statement set using gda_data_select_set_modification_statement() will first be unset
     * @param cond_type the type of condition for the modifications where one row only should be identified
     * @returns %TRUE if no error occurred. If %FALSE is returned, then some modification statement may still have been computed
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
     * @returns TRUE if no error occurred.
     */
    compute_row_selection_condition(): boolean
    get_advertized_nrows(): number
    /**
     * Get a pointer to the #GdaConnection object which was used when `model` was created
     * (and which may be used internally by `model)`.
     * @returns a pointer to the #GdaConnection, or %NULL
     */
    get_connection(): Connection
    get_nb_stored_rows(): number
    get_prep_stmt(): PStmt
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
     * @returns %TRUE if no error occurred
     */
    prepare_for_offline(): boolean
    set_advertized_nrows(n: number): void
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
     * @returns %TRUE if no error occurred.
     */
    set_modification_statement(mod_stmt: Statement): boolean
    /**
     * Offers the same feature as gda_data_select_set_modification_statement() but using an SQL statement.
     * @param sql an SQL text
     * @returns TRUE if no error occurred.
     */
    set_modification_statement_sql(sql: string): boolean
    /**
     * Offers the same features as gda_data_select_set_row_selection_condition_sql() but using a #GdaSqlExpr
     * structure instead of an SQL syntax.
     * @param expr a #GdaSqlExpr expression
     * @returns TRUE if no error occurred
     */
    set_row_selection_condition(expr: SqlExpr): boolean
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
     * @returns TRUE if no error occurred
     */
    set_row_selection_condition_sql(sql_where: string): boolean

    // Own virtual methods of Gda-6.0.Gda.DataSelect

    vfunc_fetch_at(prow: Row, rownum: number): boolean
    vfunc_fetch_nb_rows(): number
    vfunc_fetch_next(prow: Row, rownum: number): boolean
    vfunc_fetch_prev(prow: Row, rownum: number): boolean
    vfunc_fetch_random(prow: Row, rownum: number): boolean
    vfunc_store_all(): boolean

    // Class property signals of Gda-6.0.Gda.DataSelect

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

export class DataSelect extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataSelect

    static name: string
    static $gtype: GObject.GType<DataSelect>

    // Constructors of Gda-6.0.Gda.DataSelect

    constructor(config?: DataSelect.ConstructorProperties) 
    _init(config?: DataSelect.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module DataSelectIter {

    // Constructor properties interface

    export interface ConstructorProperties extends DataModelIter.ConstructorProperties {
    }

}

export interface DataSelectIter {

    // Own fields of Gda-6.0.Gda.DataSelectIter

    parent_instance: DataModelIter & Set & GObject.Object & GObject.Object

    // Class property signals of Gda-6.0.Gda.DataSelectIter

    connect(sigName: "notify::current-row", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-row", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-row", ...args: any[]): void
    connect(sigName: "notify::data-model", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-model", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-model", ...args: any[]): void
    connect(sigName: "notify::update-model", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-model", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-model", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::holders", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::holders", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::holders", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::validate-changes", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::validate-changes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataSelectIter extends DataModelIter {

    // Own properties of Gda-6.0.Gda.DataSelectIter

    static name: string
    static $gtype: GObject.GType<DataSelectIter>

    // Constructors of Gda-6.0.Gda.DataSelectIter

    constructor(config?: DataSelectIter.ConstructorProperties) 
    _init(config?: DataSelectIter.ConstructorProperties): void
}

export module DbBase {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DbBase {

    // Own fields of Gda-6.0.Gda.DbBase

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DbBase

    /**
     * Compares two objects similar to g_strcmp(). In general, catalog and schema can be %NULL. In this case
     * those pairs are ignored. If we represent a full name as catalog.schema.name then two objects
     * null.null.customer and main.main.customer are identical.
     * @param b second #GdaDbBase object
     * @returns 0 if two objects are identical or -1 or 1 otherwise.
     */
    compare(b: DbBase): number
    /**
     * Returns current catalog name. The returned string should not be freed.
     * @returns Current catalog or %NULL
     */
    get_catalog(): string
    /**
     * This method returns a full name in the format catalog.schema.name.
     * If schema is %NULL but catalog and name are not, then only name is
     * returned. If catalog is %NULL then full name will be in the format:
     * schema.name. If all three components are not set, then %NULL is returned.
     * @returns Full name of the database object or %NULL.
     */
    get_full_name(): string
    /**
     * Returns current object name. The returned string should not be freed.
     * @returns Current object name or %NULL
     */
    get_name(): string
    /**
     * Returns current schema name. The returned string should not be freed.
     * @returns Current scheme or %NULL
     */
    get_schema(): string
    /**
     * Set catalog name
     * @param catalog Catalog name as a string
     */
    set_catalog(catalog: string): void
    /**
     * Set object name. If `name` is %NULL the function just returns.
     * @param name Object name as a string
     */
    set_name(name: string): void
    /**
     * Sets database object names. `catalog` and `schema` can be %NULL but
     * `name` always should be a valid, not %NULL string. The `name` must be
     * set. If `catalog` is %NULL `schema` may not be %NULL but if `schema` is
     * %NULL `catalog` also should be %NULL.
     * @param catalog a catalog name associated with the table
     * @param schema a schema name associated with the table
     * @param name a table name associated with the table
     */
    set_names(catalog: string | null, schema: string | null, name: string): void
    /**
     * Set object schema. If `schema` is %NULL the function just returns.
     * @param schema Schema name as a string
     */
    set_schema(schema: string): void

    // Class property signals of Gda-6.0.Gda.DbBase

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DbBase extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DbBase

    static name: string
    static $gtype: GObject.GType<DbBase>

    // Constructors of Gda-6.0.Gda.DbBase

    constructor(config?: DbBase.ConstructorProperties) 
    /**
     * Create a new #GdaDbBase instance
     * @constructor 
     * @returns a new #GdaDbBase instance
     */
    constructor() 
    /**
     * Create a new #GdaDbBase instance
     * @constructor 
     * @returns a new #GdaDbBase instance
     */
    static new(): DbBase
    _init(config?: DbBase.ConstructorProperties): void
}

export module DbCatalog {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DbCatalog

        connection?: Connection | null
        schemaName?: string | null
    }

}

export interface DbCatalog {

    // Own properties of Gda-6.0.Gda.DbCatalog

    connection: Connection
    schemaName: string | null

    // Own fields of Gda-6.0.Gda.DbCatalog

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DbCatalog

    /**
     * This method append `table` to the total list of all tables stored in `self`. This method increase
     * reference count for `table`.
     * @param table table to append
     */
    append_table(table: DbTable): void
    /**
     * This method append `view` to the total list of all views stored in `self`. This method increase
     * reference count for `view`.
     * @param view view to append
     */
    append_view(view: DbView): void
    /**
     * Convenient function to get a table based on `name`. The coller is responsible
     * for calling gda_db_catalog_parse_cnc() before calling this function.
     * @param catalog 
     * @param schema 
     * @param name table name
     * @returns table as #GdaDbTable or %NULL if the table is not found. The returned pointer should not be freed and belongs to the @self.
     */
    get_table(catalog: string, schema: string, name: string): DbTable
    get_tables(): DbTable[]
    /**
     * Convenient function to get a view based on name. The coller is responsible
     * for calling gda_db_catalog_parse_cnc() before calling this function. This
     * code is equivalent to the following code:
     * 
     * 
     * ```c
     *  GdaDbBase *iobj;
     *  GList *it;
     * 
     *  GdaDbCatalogPrivate *priv = gda_db_catalog_get_instance_private (self);
     * 
     *  if (gda_db_catalog_parse_cnc (self, error))
     *    return NULL;
     * 
     *  iobj = gda_db_base_new ();
     *  gda_db_base_set_names (iobj, catalog, schema, name);
     * 
     *  for (it = priv->mp_views; it; it = it->next)
     *    {
     *      if (!gda_db_base_compare (iobj, GDA_DB_BASE (it->data)))
     *        {
     *          if (iobj)
     *            g_object_unref (iobj);
     * 
     *          return GDA_DB_VIEW (it->data);
     *        }
     *    }
     * 
     *  if (iobj)
     *    g_object_unref (iobj);
     * 
     *  return NULL;
     * ```
     * 
     * @param catalog a catalog name or %NULL
     * @param schema a schema name or %NULL
     * @param name view name. Can't be %NULL
     * @returns View as #GdaDbView or %NULL if the view is not found. The returned pointer should not be freed and belongs to @self
     */
    get_view(catalog: string, schema: string, name: string): DbView
    get_views(): DbView[]
    /**
     * Parse internal cnc to populate `self` object. This method should be called every time after
     * database was modified or `self` was just created using gda_connection_create_db_catalog(). The
     * method will return %FALSE if no internal #GdaConnection available.
     * @returns Returns %TRUE if succeeded, %FALSE otherwise.
     */
    parse_cnc(): boolean
    /**
     * For detailed description see gda_db_catalog_parse_file_from_path()
     * @param xmlfile xml file as #GFile instance
     */
    parse_file(xmlfile: Gio.File): boolean
    /**
     * This method reads information from `xmlfile` and populate `self` object.
     * The `xmlfile` should correspond to the following DTD format:
     * 
     * 
     * ```<!-- language="DTD" -->
     * <!ELEMENT schema (table+, view*)>
     * <!ATTLIST schema name           CDATA   #IMPLIED>
     * 
     * <!ELEMENT table (comment?,column+, fkey*, constraint*)>
     * <!ATTLIST table temptable       (TRUE|FALSE)    "FALSE">
     * <!ATTLIST table name            CDATA           #REQUIRED>
     * <!ATTLIST table space           CDATA           #IMPLIED>
     * 
     * <!ELEMENT column (comment?, value?, check?)>
     * <!ATTLIST column name           CDATA           #REQUIRED>
     * <!ATTLIST column type           CDATA           #REQUIRED>
     * <!ATTLIST column pkey           (TRUE|FALSE)    "FALSE">
     * <!ATTLIST column unique         (TRUE|FALSE)    "FALSE">
     * <!ATTLIST column autoinc        (TRUE|FALSE)    "FALSE">
     * <!ATTLIST column nnul           (TRUE|FALSE)    "FALSE">
     * 
     * <!ELEMENT comment       (#PCDATA)>
     * <!ELEMENT value         (#PCDATA)>
     * <!ATTLIST value size            CDATA          #IMPLIED>
     * <!ATTLIST value scale           CDATA          #IMPLIED>
     * 
     * <!ELEMENT check         (#PCDATA)>
     * 
     * <!ELEMENT constraint    (#PCDATA)>
     * 
     * <!ELEMENT fkey (fk_field?)>
     * <!ATTLIST fkey reftable CDATA #IMPLIED>
     * <!ATTLIST fkey onupdate (RESTRICT|CASCADE|SET_NULL|NO_ACTION|SET_DEFAULT)       #IMPLIED>
     * <!ATTLIST fkey ondelete (RESTRICT|CASCADE|SET_NULL|NO_ACTION|SET_DEFAULT)       #IMPLIED>
     * 
     * <!ELEMENT fk_field (#PCDATA)>
     * <!ATTLIST fk_field name         CDATA           #REQUIRED>
     * <!ATTLIST fk_field reffield     CDATA           #REQUIRED>
     * 
     * <!ELEMENT view (definition)>
     * <!ATTLIST view name             CDATA           #REQUIRED>
     * <!ATTLIST view replace          (TRUE|FALSE)    "FALSE">
     * <!ATTLIST view temp             (TRUE|FALSE)    "FALSE">
     * <!ATTLIST view ifnotexists      (TRUE|FALSE)    "TRUE">
     * 
     * <!ELEMENT definition (#PCDATA)>
     * ```
     * 
     * 
     * Up to day description of the xml file schema can be found in DTD file
     * [libgda-db-catalog.dtd](https://gitlab.gnome.org/GNOME/libgda/blob/master/libgda/libgda-db-catalog.dtd)
     * 
     * The given `xmlfile` will be checked before parsing and %FALSE will be
     * returned if fails. The `xmlfile` will be validated internally using
     * gda_db_catalog_validate_file_from_path(). he same method can be used to validate xmlfile
     * before parsing it.
     * @param xmlfile xml file to parse
     */
    parse_file_from_path(xmlfile: string): boolean
    /**
     * After population `self` with all data this method may be
     * called to trigger code and modify user database. This is the main
     * method to work with database. For retrieving information from database to an
     * xml file use gda_db_catalog_parse_cnc() and gda_db_buildable_write_node().
     * 
     * Connection can be added as a property using g_object_set() call and should be opened to use
     * this method. See gda_connection_open() method for reference.
     * 
     * Only table can be created. Views are ignored
     * 
     * Each table from database compared with each table in the #GdaDbCatalog
     * instance. If the table doesn't exist in database, it will be created (CREATE_TABLE).
     * If table exists in the database and xml file, all columns will be checked. If columns
     * are present in xml file but not in the database it will be created (ADD_COLUMN). If
     * column exists but has different parameters, e.g. nonnull it will not be
     * modified.
     * 
     * Note: Pkeys are not checked. This is a limitation that should be removed. The corresponding
     * issue was open on gitlab page.
     */
    perform_operation(): boolean
    /**
     * This method writes database description as xml file.
     * Similar to gda_db_catalog_write_to_path()
     * @param file a #GFile to write database description
     * @returns %TRUE if no error occurred, %FALSE otherwise.
     */
    write_to_file(file: Gio.File): boolean
    /**
     * Save content of `self` to a user friendly xml file.
     * @param path path to xml file to save #GdaDbCatalog
     * @returns %TRUE is no error, %FALSE otherwise.
     */
    write_to_path(path: string): boolean

    // Class property signals of Gda-6.0.Gda.DbCatalog

    connect(sigName: "notify::connection", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::schema-name", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema-name", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DbCatalog extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DbCatalog

    static name: string
    static $gtype: GObject.GType<DbCatalog>

    // Constructors of Gda-6.0.Gda.DbCatalog

    constructor(config?: DbCatalog.ConstructorProperties) 
    /**
     * Create new instance of #GdaDbCatalog.
     * @constructor 
     * @returns a new instance of #GdaDbCatalog
     */
    constructor() 
    /**
     * Create new instance of #GdaDbCatalog.
     * @constructor 
     * @returns a new instance of #GdaDbCatalog
     */
    static new(): DbCatalog
    _init(config?: DbCatalog.ConstructorProperties): void
    static error_quark(): GLib.Quark
    /**
     * Convenient method to varify xmlfile before prsing it.
     * @param xmlfile xml file to validate
     * @returns %TRUE if @xmlfile is valid, %FALSE otherwise
     */
    static validate_file_from_path(xmlfile: string): boolean
}

export module DbColumn {

    // Constructor properties interface

    export interface ConstructorProperties extends DbBuildable.ConstructorProperties, DdlModifiable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DbColumn

        autoinc?: boolean | null
        check?: string | null
        comment?: string | null
        "default"?: string | null
        name?: string | null
        nnul?: boolean | null
        pkey?: boolean | null
        scale?: number | null
        size?: number | null
        table?: DbTable | null
        unique?: boolean | null
    }

}

export interface DbColumn extends DbBuildable, DdlModifiable {

    // Own properties of Gda-6.0.Gda.DbColumn

    autoinc: boolean
    check: string | null
    comment: string | null
    "default": string | null
    name: string | null
    nnul: boolean
    pkey: boolean
    scale: number
    size: number
    table: DbTable
    unique: boolean

    // Own fields of Gda-6.0.Gda.DbColumn

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DbColumn

    /**
     * Get value for autoinc key
     * @returns %TRUE if column should be auto-incremented, %FALSE otherwise.
     */
    get_autoinc(): boolean
    /**
     * Returns value of the check field.
     * @returns Column check string
     */
    get_check(): string
    /**
     * Get value for column comment.
     * @returns Column comment as a string. %NULL is returned if comment is not set.
     */
    get_comment(): string
    /**
     * Returns column type as a string derivied from #GType
     * @returns column type as a string or %NULL
     */
    get_ctype(): string
    /**
     * Returns default value for the column. Can be %NULL if the default value hasn't been set.
     * @returns Default value for the column as a string.
     */
    get_default(): string
    /**
     * Return of column type as #GType
     */
    get_gtype(): GObject.GType
    /**
     * Returns name of the column
     * @returns Column name as a string or %NULL.
     */
    get_name(): string
    /**
     * Specify if the column's value can be NULL.
     * @returns %TRUE if value can be %NULL, %FALSE otherwise.
     */
    get_nnul(): boolean
    /**
     * Returns a primary key flag
     * @returns %TRUE if the column is primary key, %FALSE otherwise
     */
    get_pkey(): boolean
    /**
     * Scale is used for float number representation to specify a number of decimal digits.
     * This value is ignore for column types except float or double.
     * @returns Current scale value
     */
    get_scale(): number
    get_size(): number
    /**
     * Get value for unique key
     * @returns %TRUE if column should have a unique value, %FALSE otherwise.
     */
    get_unique(): boolean
    /**
     * Populate `op` with information stored in `self`. This method is used to
     * prepare `op` for %GDA_SERVER_OPERATION_ADD_COLUMN operation.
     * @param op #GdaServerOperation to add information
     * @returns %TRUE if success, %FALSE otherwise.
     */
    prepare_add(op: ServerOperation): boolean
    /**
     * This method populate `op` with information stored in `self`.
     * @param op a #GdaServerOperation instance to update for TABLE_CREATE operation
     * @param order Order number for the column
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    prepare_create(op: ServerOperation, order: number): boolean
    /**
     * Set value for auto-incremented key.
     * @param autoinc value to set
     */
    set_autoinc(autoinc: boolean): void
    /**
     * Sets check string to the column.
     * @param value value to set
     */
    set_check(value: string): void
    /**
     * Set value for column comment.
     * @param comnt comment to set
     */
    set_comment(comnt: string): void
    set_default(value: string): void
    /**
     * Set column name.
     * @param name name as a string
     */
    set_name(name: string): void
    set_nnul(nnul: boolean): void
    /**
     * If `pkey` is %TRUE, the given column will be marked with PRIMERY KEY flag
     * @param pkey value to set
     */
    set_pkey(pkey: boolean): void
    /**
     * Scale is used for float number representation to specify a number of decimal digits.
     * This value is ignore for column types except float or double.
     * @param scale scale value to set
     */
    set_scale(scale: number): void
    /**
     * Set value for column size. This is relevant only for string column type.
     * @param size value to set
     */
    set_size(size: number): void
    /**
     * Set type of the column as a #GType. For numeric type, #GDA_TYPE_NUMERIC should be used. Other
     * types, e.g. %G_TYPE_FLOAT or %G_TYPE_DOUBLE can also be used but precision and scale should not be
     * set. In this case appropriate types for DB implementation will be used, e.g. float4.
     * @param type #GType for column
     */
    set_type(type: GObject.GType): void
    /**
     * Set value for unique key.
     * @param unique value to set
     */
    set_unique(unique: boolean): void

    // Class property signals of Gda-6.0.Gda.DbColumn

    connect(sigName: "notify::autoinc", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoinc", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::autoinc", ...args: any[]): void
    connect(sigName: "notify::check", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::check", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::check", ...args: any[]): void
    connect(sigName: "notify::comment", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::comment", ...args: any[]): void
    connect(sigName: "notify::default", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::nnul", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nnul", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nnul", ...args: any[]): void
    connect(sigName: "notify::pkey", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pkey", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pkey", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::table", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::unique", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unique", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DbColumn extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DbColumn

    static name: string
    static $gtype: GObject.GType<DbColumn>

    // Constructors of Gda-6.0.Gda.DbColumn

    constructor(config?: DbColumn.ConstructorProperties) 
    constructor() 
    static new(): DbColumn
    _init(config?: DbColumn.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module DbFkey {

    // Constructor properties interface

    export interface ConstructorProperties extends DbBuildable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DbFkey extends DbBuildable {

    // Own fields of Gda-6.0.Gda.DbFkey

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DbFkey

    get_field_name(): string[]
    get_ondelete(): string
    /**
     * The default value is %NO_ACTION
     * @returns ON DELETE action as a #GdaDbFkeyReferenceAction.
     */
    get_ondelete_id(): DbFkeyReferenceAction
    get_onupdate(): string
    get_onupdate_id(): DbFkeyReferenceAction
    get_ref_field(): string[]
    get_ref_table(): string
    /**
     * Prepare `op` object for execution by populating with information stored in `self`.
     * @param op a #GdaServerOperation to populate
     * @param i Order number
     * @returns %TRUE if no error or %FALSE otherwise.
     */
    prepare_create(op: ServerOperation, i: number): boolean
    /**
     * All arguments should be valid strings.
     * @param field Field name as a string
     * @param reffield A reference field name as a string
     */
    set_field(field: string, reffield: string): void
    /**
     * Set action for ON_DELETE
     * @param id #GdaDbFkeyReferenceAction action to set
     */
    set_ondelete(id: DbFkeyReferenceAction): void
    /**
     * Set action for ON_UPDATE
     * @param id #GdaDbFkeyReferenceAction action to set
     */
    set_onupdate(id: DbFkeyReferenceAction): void
    /**
     * Set reference table
     * @param rtable reference table name
     */
    set_ref_table(rtable: string): void

    // Class property signals of Gda-6.0.Gda.DbFkey

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DbFkey extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DbFkey

    static name: string
    static $gtype: GObject.GType<DbFkey>

    // Constructors of Gda-6.0.Gda.DbFkey

    constructor(config?: DbFkey.ConstructorProperties) 
    /**
     * Create a new #GdaDbFkey object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GdaDbFkey object.
     * @constructor 
     */
    static new(): DbFkey
    _init(config?: DbFkey.ConstructorProperties): void
}

export module DbIndex {

    // Constructor properties interface

    export interface ConstructorProperties extends DdlModifiable.ConstructorProperties, DbBase.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DbIndex

        table?: DbTable | null
    }

}

export interface DbIndex extends DdlModifiable {

    // Own properties of Gda-6.0.Gda.DbIndex

    table: DbTable

    // Own fields of Gda-6.0.Gda.DbIndex

    parent_instance: DbBase & GObject.Object

    // Owm methods of Gda-6.0.Gda.DbIndex

    /**
     * Append to index filed to the current index instance, The `self` object will recieve full
     * ownership of the field. After this call, the reference count for `field` will be increased and
     * the instance of `fiels` must be destroyed by calling g_object_unref()
     * @param field a field to set
     */
    append_field(field: DbIndexField): void
    /**
     * This function is thread safe, that is, `cnc` will be locked.
     * @returns A list of #GdaDbIndexField
     */
    get_fields(): DbIndexField[] | null
    get_unique(): boolean
    remove_field(name: string): void
    /**
     * If `val` is %TRUE a "UNIQUE" will be added to the INDEX CREATE command, e.g.
     * CREATE UNIQUE INDEX ...
     * @param val if set to %TRUE UNIQUE index type will be used.
     */
    set_unique(val: boolean): void

    // Class property signals of Gda-6.0.Gda.DbIndex

    connect(sigName: "notify::table", callback: (($obj: DbIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: DbIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DbIndex extends DbBase {

    // Own properties of Gda-6.0.Gda.DbIndex

    static name: string
    static $gtype: GObject.GType<DbIndex>

    // Constructors of Gda-6.0.Gda.DbIndex

    constructor(config?: DbIndex.ConstructorProperties) 
    constructor() 
    static new(): DbIndex

    // Overloads of new

    /**
     * Create a new #GdaDbBase instance
     * @constructor 
     * @returns a new #GdaDbBase instance
     */
    static new(): DbBase
    _init(config?: DbIndex.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module DbIndexField {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DbIndexField {

    // Own fields of Gda-6.0.Gda.DbIndexField

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DbIndexField

    get_collate(): string
    /**
     * Returns an active column that was asigned to #GdaDbIndexField instance
     * @returns A #GdaDbColumn where index should be added
     */
    get_column(): DbColumn
    get_sort_order(): DbIndexSortOrder
    get_sort_order_str(): string
    /**
     * Unfortunately, collate can vary from provider to provider. This method accepts collate name as a
     * string but user should provide valid values. For instance, SQLite3 accepts only "BINARY",
     * "NOCASE", and "RTRIM" values. PostgreSQL, on the other hand expects a name of a callable object,
     * e.g. function.
     * @param collate collate to set
     */
    set_collate(collate: string): void
    /**
     * Only full name will be extracted from `column`. The `column` instance should be freed using
     * g_object_unref(). The instance `self` take a copy of the `column` object by increasing its
     * referecne count.
     * @param column column to add index to
     */
    set_column(column: DbColumn): void
    set_sort_order(sorder: DbIndexSortOrder): void

    // Class property signals of Gda-6.0.Gda.DbIndexField

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DbIndexField extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DbIndexField

    static name: string
    static $gtype: GObject.GType<DbIndexField>

    // Constructors of Gda-6.0.Gda.DbIndexField

    constructor(config?: DbIndexField.ConstructorProperties) 
    /**
     * Create a new instance of #GdaDbIndexField
     * @constructor 
     * @returns A new instance of #GdaDbIndexField
     */
    constructor() 
    /**
     * Create a new instance of #GdaDbIndexField
     * @constructor 
     * @returns A new instance of #GdaDbIndexField
     */
    static new(): DbIndexField
    _init(config?: DbIndexField.ConstructorProperties): void
}

export module DbTable {

    // Constructor properties interface

    export interface ConstructorProperties extends DbBuildable.ConstructorProperties, DdlModifiable.ConstructorProperties, DbBase.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DbTable

        comment?: string | null
        istemp?: string | null
    }

}

export interface DbTable extends DbBuildable, DdlModifiable {

    // Own properties of Gda-6.0.Gda.DbTable

    comment: string | null
    istemp: string | null

    // Own fields of Gda-6.0.Gda.DbTable

    parent_instance: DbBase & GObject.Object

    // Owm methods of Gda-6.0.Gda.DbTable

    /**
     * Append `column` to the internal list of columns
     * @param column column to add
     */
    append_column(column: DbColumn): void
    /**
     * Adds global table constraint. It will be added to the sql string by the provider implementation
     * if it supports it. Usually, table constraint is very complex and the current method just append
     * a list of constraints to the sql string.
     * @param constr a constraint string to append
     */
    append_constraint(constr: string): void
    /**
     * Append `fkey` to the internal list of columns
     * @param fkey fkry to add
     */
    append_fkey(fkey: DbFkey): void
    /**
     * Use this method to obtain internal list of all columns. The internal list
     * should not be freed.
     * @returns A list of #GdaDbColumn objects or %NULL if the internal list is not set or if %NULL is passed.
     */
    get_columns(): DbColumn[]
    /**
     * Use this method to obtain internal list of all fkeys. The internal list
     * should not be freed.
     * @returns A list of #GdaDbFkey objects or %NULL if the internal list is not set or %NULL is passed
     */
    get_fkeys(): DbFkey[]
    get_is_temp(): boolean
    /**
     * This method returns %TRUE if at least one column is added to the table. It ruturns %FALSE if the
     * table has no columns.
     * @returns %TRUE or %FALSE
     */
    is_valid(): boolean
    /**
     * Populate `op` with information stored in `self`. This method sets `op` to execute CREATE_TABLE
     * operation.
     * @param op an instance of #GdaServerOperation to populate.
     * @param ifnotexists Set it to TRUE if "IF NOT EXISTS" should be added
     * @returns %TRUE if no error occured and %FALSE otherwise.
     */
    prepare_create(op: ServerOperation, ifnotexists: boolean): boolean
    /**
     * Set if the table should be temporary or not.  %FALSE is set by default.
     * @param istemp Set if the table should be temporary
     */
    set_is_temp(istemp: boolean): void
    /**
     * With this method object `obj` in the database available through `cnc` will be updated using
     * ADD_COLUMN operation with information stored in `self`. This method is designed for internal use
     * only and should not be used for the new code. It will be obsolete.
     * @param obj The corresponding meta object to take data from
     * @param cnc opened connection
     * @returns %TRUE if no error and %FALSE otherwise
     */
    update(obj: MetaTable, cnc: Connection): boolean

    // Class property signals of Gda-6.0.Gda.DbTable

    connect(sigName: "notify::comment", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::comment", ...args: any[]): void
    connect(sigName: "notify::istemp", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::istemp", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::istemp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DbTable extends DbBase {

    // Own properties of Gda-6.0.Gda.DbTable

    static name: string
    static $gtype: GObject.GType<DbTable>

    // Constructors of Gda-6.0.Gda.DbTable

    constructor(config?: DbTable.ConstructorProperties) 
    constructor() 
    static new(): DbTable

    // Overloads of new

    /**
     * Create a new #GdaDbBase instance
     * @constructor 
     * @returns a new #GdaDbBase instance
     */
    static new(): DbBase
    _init(config?: DbTable.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module DbView {

    // Constructor properties interface

    export interface ConstructorProperties extends DbBuildable.ConstructorProperties, DdlModifiable.ConstructorProperties, DbBase.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DbView

        defstring?: string | null
        ifnoexist?: boolean | null
        istemp?: boolean | null
        replace?: boolean | null
    }

}

export interface DbView extends DbBuildable, DdlModifiable {

    // Own properties of Gda-6.0.Gda.DbView

    defstring: string | null
    ifnoexist: boolean
    istemp: boolean
    replace: boolean

    // Own fields of Gda-6.0.Gda.DbView

    parent_instance: DbBase & GObject.Object

    // Owm methods of Gda-6.0.Gda.DbView

    get_defstring(): string
    get_ifnoexist(): boolean
    get_istemp(): boolean
    get_replace(): boolean
    /**
     * Populate `op` with information needed to perform CREATE_VIEW operation. This method was desgned
     * for internal use and will be obsolete in the future. Do not use it for the new code.
     * @param op #GdaServerOperation instance to populate
     * @returns %TRUE if succeeded and %FALSE otherwise.
     */
    prepare_create(op: ServerOperation): boolean
    set_defstring(str: string): void
    set_ifnoexist(noexist: boolean): void
    set_istemp(temp: boolean): void
    set_replace(replace: boolean): void

    // Class property signals of Gda-6.0.Gda.DbView

    connect(sigName: "notify::defstring", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::defstring", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::defstring", ...args: any[]): void
    connect(sigName: "notify::ifnoexist", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ifnoexist", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ifnoexist", ...args: any[]): void
    connect(sigName: "notify::istemp", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::istemp", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::istemp", ...args: any[]): void
    connect(sigName: "notify::replace", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::replace", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::replace", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DbView extends DbBase {

    // Own properties of Gda-6.0.Gda.DbView

    static name: string
    static $gtype: GObject.GType<DbView>

    // Constructors of Gda-6.0.Gda.DbView

    constructor(config?: DbView.ConstructorProperties) 
    constructor() 
    static new(): DbView

    // Overloads of new

    /**
     * Create a new #GdaDbBase instance
     * @constructor 
     * @returns a new #GdaDbBase instance
     */
    static new(): DbBase
    _init(config?: DbView.ConstructorProperties): void
}

export module HandlerBin {

    // Constructor properties interface

    export interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface HandlerBin extends DataHandler {

    // Class property signals of Gda-6.0.Gda.HandlerBin

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HandlerBin extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerBin

    static name: string
    static $gtype: GObject.GType<HandlerBin>

    // Constructors of Gda-6.0.Gda.HandlerBin

    constructor(config?: HandlerBin.ConstructorProperties) 
    /**
     * Creates a data handler for binary values
     * @constructor 
     * @returns the new object
     */
    constructor() 
    /**
     * Creates a data handler for binary values
     * @constructor 
     * @returns the new object
     */
    static new(): HandlerBin
    _init(config?: HandlerBin.ConstructorProperties): void
}

export module HandlerBoolean {

    // Constructor properties interface

    export interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface HandlerBoolean extends DataHandler {

    // Class property signals of Gda-6.0.Gda.HandlerBoolean

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HandlerBoolean extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerBoolean

    static name: string
    static $gtype: GObject.GType<HandlerBoolean>

    // Constructors of Gda-6.0.Gda.HandlerBoolean

    constructor(config?: HandlerBoolean.ConstructorProperties) 
    /**
     * Creates a data handler for booleans
     * @constructor 
     * @returns the new object
     */
    constructor() 
    /**
     * Creates a data handler for booleans
     * @constructor 
     * @returns the new object
     */
    static new(): HandlerBoolean
    _init(config?: HandlerBoolean.ConstructorProperties): void
}

export module HandlerNumerical {

    // Constructor properties interface

    export interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface HandlerNumerical extends DataHandler {

    // Class property signals of Gda-6.0.Gda.HandlerNumerical

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HandlerNumerical extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerNumerical

    static name: string
    static $gtype: GObject.GType<HandlerNumerical>

    // Constructors of Gda-6.0.Gda.HandlerNumerical

    constructor(config?: HandlerNumerical.ConstructorProperties) 
    /**
     * Creates a data handler for numerical values
     * @constructor 
     * @returns the new object
     */
    constructor() 
    /**
     * Creates a data handler for numerical values
     * @constructor 
     * @returns the new object
     */
    static new(): HandlerNumerical
    _init(config?: HandlerNumerical.ConstructorProperties): void
}

export module HandlerString {

    // Constructor properties interface

    export interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface HandlerString extends DataHandler {

    // Class property signals of Gda-6.0.Gda.HandlerString

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HandlerString extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerString

    static name: string
    static $gtype: GObject.GType<HandlerString>

    // Constructors of Gda-6.0.Gda.HandlerString

    constructor(config?: HandlerString.ConstructorProperties) 
    /**
     * Creates a data handler for strings
     * @constructor 
     * @returns the new object
     */
    constructor() 
    /**
     * Creates a data handler for strings
     * @constructor 
     * @returns the new object
     */
    static new(): HandlerString
    /**
     * Creates a data handler for strings, which will use some specific methods implemented
     * by the `prov` object (possibly also `cnc)`.
     * @constructor 
     * @param prov a #GdaServerProvider object
     * @param cnc a #GdaConnection object, or %NULL
     * @returns the new object
     */
    static new_with_provider(prov: ServerProvider, cnc: Connection | null): HandlerString
    _init(config?: HandlerString.ConstructorProperties): void
}

export module HandlerText {

    // Constructor properties interface

    export interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface HandlerText extends DataHandler {

    // Own fields of Gda-6.0.Gda.HandlerText

    parent_instance: GObject.Object

    // Class property signals of Gda-6.0.Gda.HandlerText

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HandlerText extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerText

    static name: string
    static $gtype: GObject.GType<HandlerText>

    // Constructors of Gda-6.0.Gda.HandlerText

    constructor(config?: HandlerText.ConstructorProperties) 
    /**
     * Creates a data handler for strings, which will use some specific methods implemented
     * by the provider object associated with `cnc`.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @returns the new object
     */
    static new_with_connection(cnc: Connection | null): HandlerText
    _init(config?: HandlerText.ConstructorProperties): void
    /**
     * Creates a data handler for large strings
     * @returns the new object
     */
    static new(): DataHandler
}

export module HandlerTime {

    // Constructor properties interface

    export interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface HandlerTime extends DataHandler {

    // Owm methods of Gda-6.0.Gda.HandlerTime

    /**
     * Get a string representing the locale-dependent way to enter a date/time/datetime, using
     * a syntax suitable for the #GdauiFormatEntry widget
     * @param type the type of data being handled
     * @returns a new string
     */
    get_format(type: GObject.GType): string | null
    /**
     * Get a string giving the user a hint about the locale-dependent requested format.
     * @param type the type of data being handled
     * @returns a new string
     */
    get_hint(type: GObject.GType): string | null
    get_no_locale_str_from_value(value: any): string | null
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

    // Class property signals of Gda-6.0.Gda.HandlerTime

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HandlerTime extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerTime

    static name: string
    static $gtype: GObject.GType<HandlerTime>

    // Constructors of Gda-6.0.Gda.HandlerTime

    constructor(config?: HandlerTime.ConstructorProperties) 
    /**
     * Creates a data handler for time values
     * @constructor 
     * @returns the new object
     */
    constructor() 
    /**
     * Creates a data handler for time values
     * @constructor 
     * @returns the new object
     */
    static new(): HandlerTime
    /**
     * Creates a data handler for time values, but using the default C locale
     * instead of the current user locale.
     * @constructor 
     * @returns the new object
     */
    static new_no_locale(): HandlerTime
    _init(config?: HandlerTime.ConstructorProperties): void
}

export module HandlerType {

    // Constructor properties interface

    export interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface HandlerType extends DataHandler {

    // Class property signals of Gda-6.0.Gda.HandlerType

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HandlerType extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerType

    static name: string
    static $gtype: GObject.GType<HandlerType>

    // Constructors of Gda-6.0.Gda.HandlerType

    constructor(config?: HandlerType.ConstructorProperties) 
    /**
     * Creates a data handler for Gda types
     * @constructor 
     * @returns the new object
     */
    constructor() 
    /**
     * Creates a data handler for Gda types
     * @constructor 
     * @returns the new object
     */
    static new(): HandlerType
    _init(config?: HandlerType.ConstructorProperties): void
}

export module Holder {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: Holder): void
    }

    /**
     * Signal callback interface for `source-changed`
     */
    export interface SourceChangedSignalCallback {
        ($obj: Holder): void
    }

    /**
     * Signal callback interface for `to-default`
     */
    export interface ToDefaultSignalCallback {
        ($obj: Holder): void
    }

    /**
     * Signal callback interface for `validate-change`
     */
    export interface ValidateChangeSignalCallback {
        ($obj: Holder, new_value: any): GLib.Error
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Lockable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.Holder

        description?: string | null
        fullBind?: Holder | null
        gType?: GObject.GType | null
        id?: string | null
        name?: string | null
        notNull?: boolean | null
        plugin?: string | null
        simpleBind?: Holder | null
        sourceColumn?: number | null
        sourceModel?: DataModel | null
        /**
         * Defines if the "validate-change" signal gets emitted when
         * the holder's value changes.
         */
        validateChanges?: boolean | null
    }

}

export interface Holder extends Lockable {

    // Own properties of Gda-6.0.Gda.Holder

    description: string | null
    fullBind: Holder
    gType: GObject.GType
    id: string | null
    name: string | null
    notNull: boolean
    plugin: string | null
    simpleBind: Holder
    sourceColumn: number
    sourceModel: DataModel
    /**
     * Defines if the "validate-change" signal gets emitted when
     * the holder's value changes.
     */
    validateChanges: boolean

    // Own fields of Gda-6.0.Gda.Holder

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.Holder

    /**
     * Copy constructor.
     * 
     * Note1: if `orig` is set with a static value (see gda_holder_take_static_value())
     * its copy will have a fresh new allocated GValue, so that user should free it when done.
     * @returns a new #GdaHolder object
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
     * @returns a new string
     */
    get_alphanum_id(): string | null
    /**
     * Get the holder which makes `holder` change its value when the holder's value is changed.
     * @returns the #GdaHolder or %NULL
     */
    get_bind(): Holder
    /**
     * Get the default value held into the holder. WARNING: the default value does not need to be of
     * the same type as the one required by `holder`.
     * @returns the default value
     */
    get_default_value(): any
    /**
     * Get `holder'`s type
     * @returns the data type
     */
    get_g_type(): GObject.GType
    /**
     * Get the ID of `holder`. The ID can be set using `holder'`s "id" property
     * @returns the ID (don't modify the string).
     */
    get_id(): string
    /**
     * Get wether the holder can be NULL or not
     * @returns TRUE if the holder cannot be NULL
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
     * @returns a pointer to a #GdaDataModel, or %NULL
     */
    get_source_model(col: number): DataModel
    /**
     * Get the value held into the holder. If `holder` is set to use its default value
     * and that default value is not of the same type as `holder,` then %NULL is returned.
     * 
     * If `holder` is set to NULL, then the returned value is a #GDA_TYPE_NULL GValue.
     * 
     * If `holder` is invalid, then the returned value is %NULL.
     * @returns the value, or %NULL
     */
    get_value(): any | null
    /**
     * Same functionality as gda_holder_get_value() except that it returns the value as a string
     * (the conversion is done using `dh` if not %NULL, or the default data handler otherwise).
     * @param dh a #GdaDataHandler to use, or %NULL
     * @returns the value, or %NULL
     */
    get_value_str(dh: DataHandler | null): string | null
    /**
     * Get the validity of `holder` (that is, of the value held by `holder)`
     * @returns TRUE if @holder's value can safely be used
     */
    is_valid(): boolean
    /**
     * Get the validity of `holder` (that is, of the value held by `holder)`
     * @returns TRUE if @holder's value can safely be used
     */
    is_valid_e(): boolean
    /**
     * Sets `holder` to change when `bind_to` changes (and does not make `bind_to` change when `holder` changes).
     * For the operation to succeed, the GType of `holder` and `bind_to` must be the same, with the exception that
     * any of them can have a %GDA_TYPE_NULL type (in this situation, the GType of the two #GdaHolder objects
     * involved is set to match the other when any of them sets its type to something different than GDA_TYPE_NULL).
     * 
     * If `bind_to` is %NULL, then `holder` will not be bound anymore.
     * @param bind_to a #GdaHolder or %NULL
     * @returns TRUE if no error occurred
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
     * @returns TRUE if no error occurred
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
     * @returns TRUE if value has been set
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
     * @returns TRUE if value has been set
     */
    set_value_str(dh: DataHandler, value: string): boolean
    /**
     * Set `holder'`s value to its default value.
     * @returns TRUE if @holder has got a default value
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
     * @returns NULL if an error occurred or if the previous GValue was NULL itself. It returns the static GValue user set previously, so that he can free it.
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
     * 
     * Note4: in any case, the caller should not use `value` anymore after this function returns because it may
     * have been freed. If necessary, use gda_holder_get_value() to get the real value.
     * @param value a value to set the holder to
     * @returns TRUE if value has been set
     */
    take_value(value: any): boolean
    /**
     * Tells if `holder'`s current value is the default one.
     * @returns TRUE if @holder @holder's current value is the default one
     */
    value_is_default(): boolean

    // Own virtual methods of Gda-6.0.Gda.Holder

    vfunc_changed(): void
    vfunc_source_changed(): void
    vfunc_to_default(): void
    vfunc_validate_change(new_value: any): GLib.Error

    // Own signals of Gda-6.0.Gda.Holder

    connect(sigName: "changed", callback: Holder.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Holder.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "source-changed", callback: Holder.SourceChangedSignalCallback): number
    connect_after(sigName: "source-changed", callback: Holder.SourceChangedSignalCallback): number
    emit(sigName: "source-changed", ...args: any[]): void
    connect(sigName: "to-default", callback: Holder.ToDefaultSignalCallback): number
    connect_after(sigName: "to-default", callback: Holder.ToDefaultSignalCallback): number
    emit(sigName: "to-default", ...args: any[]): void
    connect(sigName: "validate-change", callback: Holder.ValidateChangeSignalCallback): number
    connect_after(sigName: "validate-change", callback: Holder.ValidateChangeSignalCallback): number
    emit(sigName: "validate-change", new_value: any, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Holder

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
    connect(sigName: "notify::plugin", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugin", ...args: any[]): void
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

export class Holder extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Holder

    static name: string
    static $gtype: GObject.GType<Holder>

    // Constructors of Gda-6.0.Gda.Holder

    constructor(config?: Holder.ConstructorProperties) 
    /**
     * Creates a new holder of type `type`
     * @constructor 
     * @param type the #GType requested
     * @param id an identifiation
     * @returns a new #GdaHolder object
     */
    constructor(type: GObject.GType, id: string) 
    /**
     * Creates a new holder of type `type`
     * @constructor 
     * @param type the #GType requested
     * @param id an identifiation
     * @returns a new #GdaHolder object
     */
    static new(type: GObject.GType, id: string): Holder
    _init(config?: Holder.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module MetaStore {

    // Signal callback interfaces

    /**
     * Signal callback interface for `meta-changed`
     */
    export interface MetaChangedSignalCallback {
        ($obj: MetaStore, changes: MetaStoreChange[]): void
    }

    /**
     * Signal callback interface for `meta-reset`
     */
    export interface MetaResetSignalCallback {
        ($obj: MetaStore): void
    }

    /**
     * Signal callback interface for `suggest-update`
     */
    export interface SuggestUpdateSignalCallback {
        ($obj: MetaStore, suggest: MetaContext): GLib.Error
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.MetaStore

        catalog?: string | null
        cnc?: Connection | null
        cncString?: string | null
        schema?: string | null
    }

}

export interface MetaStore {

    // Own properties of Gda-6.0.Gda.MetaStore

    readonly catalog: string | null
    readonly cnc: Connection
    readonly cncString: string | null
    readonly schema: string | null

    // Own fields of Gda-6.0.Gda.MetaStore

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.MetaStore

    /**
     * Creates a new #GdaDataModelArray data model which can be used, after being correctly filled,
     * with the gda_meta_store_modify*() methods.*
     * 
     * To be used by provider's implementation
     * @param table_name the name of a table present in `store`
     * @returns a new #GdaDataModel
     */
    create_modify_data_model(table_name: string): DataModel
    create_struct(features: MetaStructFeature): MetaStruct
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
     * @returns %TRUE if no error occurred
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
     * @returns a new #GdaDataModel, or %NULL if an error occurred
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
     * @returns TRUE if no error occurred
     */
    get_attribute_value(att_name: string): [ /* returnType */ boolean, /* att_value */ string | null ]
    /**
     * Get a pointer to the #GdaConnection object internally used by `store` to store
     * its contents.
     * 
     * The returned connection can be used to access some other data than the one managed by `store`
     * itself. The returned object is not owned by the caller (if you need to keep it, then use g_object_ref()).
     * Do not close the connection.
     * @returns a #GdaConnection, or %NULL
     */
    get_internal_connection(): Connection
    /**
     * Get `store'`s internal schema's version
     * @returns the version (incremented each time the schema changes, backward compatible)
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
     * @returns %TRUE if no error occurred
     */
    modify(table_name: string, new_data: DataModel | null, condition: string | null, value_names: string[], values: any[]): boolean
    /**
     * Propagates an update to `store,` the update's contents is represented by `new_data,` this function is
     * primarily reserved to database providers.
     * @param context a #GdaMetaContext context describing what to modify in `store`
     * @param new_data a #GdaDataModel containing the new data to set in `table_name,` or %NULL (treated as a data model with no row at all)
     * @returns TRUE if no error occurred
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
     * <programlisting><![CDATA[<!ELEMENT table (column*,check*,fkey*)>
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
     * <!ELEMENT view (definition)>
     * <!ATTLIST view
     *           name NMTOKEN #REQUIRED
     *           descr CDATA #IMPLIED>
     * 
     * <!ELEMENT definition (#PCDATA)>]]></programlisting>
     * @param xml_description an XML description of the table or view to add to `store`
     * @returns TRUE if the new object has successfully been added
     */
    schema_add_custom_object(xml_description: string): boolean
    /**
     * Get an ordered list of the tables `store` knows about. The tables are ordered in a way that tables dependencies
     * are respected: if table B has a foreign key on table A, then table A will be listed before table B in the returned
     * list.
     * @returns a new list of tables names (as gchar*), the list must be freed when no longer needed, but the strings present in the list must not be modified.
     */
    schema_get_all_tables(): string[]
    /**
     * Get an ordered list of the tables `store` knows about on which the `table_name` table depends (recursively).
     * The tables are ordered in a way that tables dependencies
     * are respected: if table B has a foreign key on table A, then table A will be listed before table B in the returned
     * list.
     * @param table_name the name of the table for which all the dependencies must be listed
     * @returns a new list of tables names (as gchar*), the list must be freed when no longer needed, but the strings present in the list must not be modified.
     */
    schema_get_depend_tables(table_name: string): string[]
    /**
     * Creates a new #GdaMetaStruct object representing `store'`s internal database structure.
     * @returns a new #GdaMetaStruct object, or %NULL if an error occurred
     */
    schema_get_structure(): MetaStruct
    /**
     * Removes the custom database object named `obj_name`.
     * @param obj_name name of the custom object to remove
     * @returns TRUE if the custom object has successfully been removed
     */
    schema_remove_custom_object(obj_name: string): boolean
    /**
     * Set the value of the attribute named `att_name` to `att_value;` see gda_meta_store_get_attribute_value() for
     * more information.
     * @param att_name name of the attribute to set
     * @param att_value value of the attribute to set, or %NULL to unset the attribute
     * @returns TRUE if no error occurred
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
     * @returns %TRUE if no error occurred
     */
    undeclare_foreign_key(mstruct: MetaStruct | null, fk_name: string, catalog: string | null, schema: string | null, table: string, ref_catalog: string | null, ref_schema: string | null, ref_table: string): boolean

    // Own virtual methods of Gda-6.0.Gda.MetaStore

    vfunc_meta_reset(): void
    vfunc_suggest_update(suggest: MetaContext): GLib.Error

    // Own signals of Gda-6.0.Gda.MetaStore

    connect(sigName: "meta-changed", callback: MetaStore.MetaChangedSignalCallback): number
    connect_after(sigName: "meta-changed", callback: MetaStore.MetaChangedSignalCallback): number
    emit(sigName: "meta-changed", changes: MetaStoreChange[], ...args: any[]): void
    connect(sigName: "meta-reset", callback: MetaStore.MetaResetSignalCallback): number
    connect_after(sigName: "meta-reset", callback: MetaStore.MetaResetSignalCallback): number
    emit(sigName: "meta-reset", ...args: any[]): void
    connect(sigName: "suggest-update", callback: MetaStore.SuggestUpdateSignalCallback): number
    connect_after(sigName: "suggest-update", callback: MetaStore.SuggestUpdateSignalCallback): number
    emit(sigName: "suggest-update", suggest: MetaContext, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.MetaStore

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

export class MetaStore extends GObject.Object {

    // Own properties of Gda-6.0.Gda.MetaStore

    static name: string
    static $gtype: GObject.GType<MetaStore>

    // Constructors of Gda-6.0.Gda.MetaStore

    constructor(config?: MetaStore.ConstructorProperties) 
    /**
     * Create a new #GdaMetaStore object.
     * @constructor 
     * @param cnc_string a connection string, or %NULL for an in-memory internal database
     * @returns the newly created object, or %NULL if an error occurred
     */
    constructor(cnc_string: string | null) 
    /**
     * Create a new #GdaMetaStore object.
     * @constructor 
     * @param cnc_string a connection string, or %NULL for an in-memory internal database
     * @returns the newly created object, or %NULL if an error occurred
     */
    static new(cnc_string: string | null): MetaStore
    /**
     * Create a new #GdaMetaStore object using `file_name` as its internal
     * database
     * @constructor 
     * @param file_name a file name
     * @returns the newly created object, or %NULL if an error occurred
     */
    static new_with_file(file_name: string): MetaStore
    _init(config?: MetaStore.ConstructorProperties): void
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
     * @returns a new string, to free with g_free() once not needed anymore
     */
    static sql_identifier_quote(id: string, cnc: Connection): string | null
}

export module MetaStruct {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.MetaStruct

        features?: number | null
        metaStore?: MetaStore | null
    }

}

export interface MetaStruct {

    // Own properties of Gda-6.0.Gda.MetaStruct

    readonly features: number
    readonly metaStore: MetaStore

    // Own fields of Gda-6.0.Gda.MetaStruct

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.MetaStruct

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
     * @returns the #GdaMetaDbObject corresponding to the database object if no error occurred, or %NULL
     */
    complement(type: MetaDbObjectType, catalog: any | null, schema: any | null, name: any): MetaDbObject | null
    /**
     * This method is similar to gda_meta_struct_complement() and gda_meta_struct_complement_default()
     * but creates #GdaMetaDbObject for all the database object.
     * 
     * Please refer to gda_meta_struct_complement() form more information.
     * @returns TRUE if no error occurred
     */
    complement_all(): boolean
    /**
     * This method is similar to gda_meta_struct_complement() and gda_meta_struct_complement_all()
     * but creates #GdaMetaDbObject for all the
     * database object which are usable using only their short name (that is which do not need to be prefixed by
     * the schema in which they are to be used).
     * 
     * Please refer to gda_meta_struct_complement() form more information.
     * @returns TRUE if no error occurred
     */
    complement_default(): boolean
    /**
     * This method is similar to gda_meta_struct_complement() but creates #GdaMetaDbObject for all the dependencies
     * of `dbo`.
     * 
     * Please refer to gda_meta_struct_complement() form more information.
     * @param dbo a #GdaMetaDbObject part of `mstruct`
     * @returns TRUE if no error occurred
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
     * @returns TRUE if no error occurred
     */
    complement_schema(catalog: any | null, schema: any | null): boolean
    /**
     * Creates a new graph (in the GraphViz syntax) representation of `mstruct`.
     * @param info informs what kind of information to show in the resulting graph
     * @returns a new string, or %NULL if an error occurred.
     */
    dump_as_graph(info: MetaGraphInfo): string | null
    /**
     * Get a list of all the #GdaMetaDbObject structures representing database objects in `mstruct`. Note that
     * no #GdaMetaDbObject structure must not be modified.
     * @returns a new #GSList list of pointers to #GdaMetaDbObject structures which must be destroyed after usage using g_slist_free(). The individual #GdaMetaDbObject must not be modified.
     */
    get_all_db_objects(): MetaDbObject[] | null
    /**
     * Tries to locate the #GdaMetaDbObject structure representing the database object named after
     * `catalog,` `schema` and `name`.
     * 
     * If one or both of `catalog` and `schema` are %NULL, and more than one database object matches the name, then
     * the return value is also %NULL.
     * @param catalog the catalog the object belongs to (as a G_TYPE_STRING GValue), or %NULL
     * @param schema the schema the object belongs to (as a G_TYPE_STRING GValue), or %NULL
     * @param name the object's name (as a G_TYPE_STRING GValue), not %NULL
     * @returns the #GdaMetaDbObject or %NULL if not found
     */
    get_db_object(catalog: any | null, schema: any | null, name: any): MetaDbObject | null
    /**
     * Tries to find the #GdaMetaTableColumn representing the column named `col_name` in `table`.
     * @param table the #GdaMetaTable structure to find the column for
     * @param col_name the name of the column to find (as a G_TYPE_STRING GValue)
     * @returns the #GdaMetaTableColumn or %NULL if not found
     */
    get_table_column(table: MetaTable, col_name: any): MetaTableColumn | null
    /**
     * Loads an XML description into `mstruct`. This method is still experimental and no description
     * the XML file structure is given, and no guarantee that it will remain as it is given.
     * @param catalog the catalog name, or %NULL
     * @param schema the schema name, or %NULL
     * @param xml_spec_file the specifications as the name of an XML file
     * @returns TRUE if no error has occurred
     */
    load_from_xml_file(catalog: string | null, schema: string | null, xml_spec_file: string): boolean
    /**
     * Reorders the list of database objects within `mstruct` in a way specified by `sort_type`.
     * @param sort_type the kind of sorting requested
     * @returns TRUE if no error occurred
     */
    sort_db_objects(sort_type: MetaSortType): boolean

    // Class property signals of Gda-6.0.Gda.MetaStruct

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

export class MetaStruct extends GObject.Object {

    // Own properties of Gda-6.0.Gda.MetaStruct

    static name: string
    static $gtype: GObject.GType<MetaStruct>

    // Constructors of Gda-6.0.Gda.MetaStruct

    constructor(config?: MetaStruct.ConstructorProperties) 
    _init(config?: MetaStruct.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module PStmt {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PStmt {

    // Own fields of Gda-6.0.Gda.PStmt

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.PStmt

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
     * @returns the #GdaStatement
     */
    get_gda_statement(): Statement
    get_ncols(): number
    /**
     * List of parameters' IDs (as gchar *)
     * @returns a list of string with parameters ID's
     */
    get_param_ids(): string[]
    /**
     * Actual SQL code used for this prepared statement, mem freed by GdaPStmt
     * @returns SQL command used
     */
    get_sql(): string | null
    /**
     * List of #GdaColumn objects which data models created from this
     * prepared statement can copy
     * @returns a list of #GdaColumn objects
     */
    get_tmpl_columns(): Column[]
    /**
     * Set column's types for statement. `types` will be stolen and should
     * no be modified anymore.
     * @returns an array of #GType used in the columns
     */
    get_types(): GObject.GType[]
    /**
     * Set column's types for statement. `types` is stalen and should
     * no be modified
     * @param types an array of types to use for each column
     */
    set_cols(types: GObject.GType[]): void
    /**
     * Informs `pstmt` that it corresponds to the preparation of the `stmt` statement
     * @param stmt a #GdaStatement object, or %NULL
     */
    set_gda_statement(stmt: Statement | null): void
    /**
     * List of parameters' IDs (as gchar *), list is stolen
     * @param params a list of strings with ID's to set
     */
    set_param_ids(params: string[]): void
    /**
     * Set SQL code used for this prepared statement, mem freed by GdaPStmt
     * @param sql 
     */
    set_sql(sql: string): void
    /**
     * Set the list of #GdaColumn objects which data models created from this
     * prepared statement can copy. The list is stolen, so you should not
     * free it.
     * @param columns a list of #GdaColumn
     */
    set_tmpl_columns(columns: Column[]): void

    // Class property signals of Gda-6.0.Gda.PStmt

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PStmt extends GObject.Object {

    // Own properties of Gda-6.0.Gda.PStmt

    static name: string
    static $gtype: GObject.GType<PStmt>

    // Constructors of Gda-6.0.Gda.PStmt

    constructor(config?: PStmt.ConstructorProperties) 
    _init(config?: PStmt.ConstructorProperties): void
}

export module RepetitiveStatement {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.RepetitiveStatement

        statement?: Statement | null
    }

}

export interface RepetitiveStatement {

    // Own properties of Gda-6.0.Gda.RepetitiveStatement

    readonly statement: Statement

    // Own fields of Gda-6.0.Gda.RepetitiveStatement

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.RepetitiveStatement

    /**
     * Specifies that `rstmt` be executed one time with the values contained in `values`.
     * 
     * A new #GdaSet to be used as the `values` argument can be obtained using
     * gda_repetitive_statement_get_template_set().
     * @param values a #GdaSet object with the values to be used
     * @param make_copy %TRUE if `values` is copied, and %FALSE if `values` is only ref'ed
     * @returns a new #GdaRepetitiveStatement object
     */
    append_set(values: Set, make_copy: boolean): boolean
    /**
     * Get all the values sets which will have been added using gda_repetitive_statement_append_set().
     * @returns a new #GSList of #GdaSet objects (free with g_slist_free()).
     */
    get_all_sets(): Set[]
    /**
     * Gets a new #GdaSet object with the parameters used by the template statement in the
     * `rstmt` object.
     * 
     * Use this object with gda_repetitive_statement_append_set().
     * @param set a place to store the returned template set
     * @returns %TRUE on success, %FALSE on error
     */
    get_template_set(set: Set): boolean

    // Class property signals of Gda-6.0.Gda.RepetitiveStatement

    connect(sigName: "notify::statement", callback: (($obj: RepetitiveStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::statement", callback: (($obj: RepetitiveStatement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::statement", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RepetitiveStatement extends GObject.Object {

    // Own properties of Gda-6.0.Gda.RepetitiveStatement

    static name: string
    static $gtype: GObject.GType<RepetitiveStatement>

    // Constructors of Gda-6.0.Gda.RepetitiveStatement

    constructor(config?: RepetitiveStatement.ConstructorProperties) 
    /**
     * Creates a new #GdaRepetitiveStatement object which, when executed, will execute `stmt` once for all
     * the values set which will have been defined using gda_repetitive_statement_append_set().
     * Use gda_connection_repetitive_statement_execute() to actually execute it.
     * @constructor 
     * @param stmt a #GdaStatement object
     * @returns a new #GdaRepetitiveStatement object
     */
    constructor(stmt: Statement) 
    /**
     * Creates a new #GdaRepetitiveStatement object which, when executed, will execute `stmt` once for all
     * the values set which will have been defined using gda_repetitive_statement_append_set().
     * Use gda_connection_repetitive_statement_execute() to actually execute it.
     * @constructor 
     * @param stmt a #GdaStatement object
     * @returns a new #GdaRepetitiveStatement object
     */
    static new(stmt: Statement): RepetitiveStatement
    _init(config?: RepetitiveStatement.ConstructorProperties): void
}

export module Row {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.Row

        model?: DataModel | null
        modelRow?: number | null
        nbValues?: number | null
    }

}

export interface Row {

    // Own properties of Gda-6.0.Gda.Row

    readonly model: DataModel
    readonly modelRow: number
    readonly nbValues: number

    // Own fields of Gda-6.0.Gda.Row

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.Row

    get_length(): number
    /**
     * Gets a pointer to a #GValue stored in a #GdaRow.
     * 
     * This is a pointer to the internal array of values. Don't try to free
     * or modify it (modifying is reserved to database provider's implementations).
     * @param num field index.
     * @returns a pointer to the #GValue in the position @num of @row.
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
     * @returns %TRUE if @value is valid
     */
    value_is_valid(value: any): boolean
    /**
     * Tells if `value` has been marked as being invalid by gda_row_invalidate_value().
     * This method is mainly used by database
     * providers' implementations to report any error while reading a value from the database.
     * @param value a #GValue belonging to `row` (obtained with gda_row_get_value()).
     * @returns %TRUE if @value is valid
     */
    value_is_valid_e(value: any): boolean

    // Class property signals of Gda-6.0.Gda.Row

    connect(sigName: "notify::model", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::model-row", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model-row", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model-row", ...args: any[]): void
    connect(sigName: "notify::nb-values", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nb-values", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nb-values", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Row extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Row

    static name: string
    static $gtype: GObject.GType<Row>

    // Constructors of Gda-6.0.Gda.Row

    constructor(config?: Row.ConstructorProperties) 
    /**
     * Creates a #GdaRow which can hold `count` #GValue values.
     * @constructor 
     * @param count number of #GValue in the new #GdaRow.
     * @returns a newly allocated #GdaRow object.
     */
    constructor(count: number) 
    /**
     * Creates a #GdaRow which can hold `count` #GValue values.
     * @constructor 
     * @param count number of #GValue in the new #GdaRow.
     * @returns a newly allocated #GdaRow object.
     */
    static new(count: number): Row
    /**
     * Creates a #GdaRow which represent a row in a #GdaDataModel
     * @constructor 
     * @param model a #GdaDataModel to get data from.
     * @param row row at #GdaDataModel to get data from
     * @returns a newly allocated #GdaRow object.
     */
    static new_from_data_model(model: DataModel, row: number): Row
    _init(config?: Row.ConstructorProperties): void
}

export module ServerOperation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `sequence-item-added`
     */
    export interface SequenceItemAddedSignalCallback {
        ($obj: ServerOperation, seq_path: string | null, item_index: number): void
    }

    /**
     * Signal callback interface for `sequence-item-remove`
     */
    export interface SequenceItemRemoveSignalCallback {
        ($obj: ServerOperation, seq_path: string | null, item_index: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.ServerOperation

        connection?: Connection | null
        opType?: number | null
        provider?: ServerProvider | null
        specFilename?: string | null
        specResource?: string | null
    }

}

export interface ServerOperation {

    // Own properties of Gda-6.0.Gda.ServerOperation

    readonly connection: Connection
    readonly opType: number
    readonly provider: ServerProvider
    readonly specFilename: string | null
    readonly specResource: string | null

    // Own fields of Gda-6.0.Gda.ServerOperation

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.ServerOperation

    add_item_to_sequence(seq_path: string): number
    del_item_from_sequence(item_path: string): boolean
    /**
     * Get the complete path to the parent of the node defined by `path`
     * @param path a complete path to a node (starting with "/")
     * @returns a new string or %NULL if the node does not have any parent or does not exist.
     */
    get_node_parent(path: string): string | null
    /**
     * Get the last part of `path`
     * @param path a complete path to a node (starting with "/")
     * @returns a new string, or %NULL if an error occurred
     */
    get_node_path_portion(path: string): string | null
    /**
     * Convenience function to get the type of a node.
     * @param path a complete path to a node (starting with "/")
     * @param status a place to store the status of the node, or %NULL
     * @returns the type of node, or GDA_SERVER_OPERATION_NODE_UNKNOWN if the node was not found
     */
    get_node_type(path: string, status: ServerOperationNodeStatus | null): ServerOperationNodeType
    /**
     * Get the type of operation `op` is for
     * @returns a #GdaServerOperationType enum
     */
    get_op_type(): ServerOperationType
    /**
     * Get an array of strings containing the paths of nodes situated at the root of `op`.
     * @returns a new array, which must be freed with g_strfreev().
     */
    get_root_nodes(): string[]
    /**
     * Fetch the contents of a sequence. `path` can describe either a sequence (for example "/SEQNAME") or an item in a sequence
     * (for example "/SEQNAME/3")
     * @param path a complete path to a sequence node (starting with "/")
     * @returns a array of strings containing the complete paths of the nodes contained at @path (free with g_strfreev())
     */
    get_sequence_item_names(path: string): string[]
    get_sequence_max_size(path: string): number
    get_sequence_min_size(path: string): number
    get_sequence_name(path: string): string
    get_sequence_size(path: string): number
    get_sql_identifier_at_path(path: string): string | null
    /**
     * Get the value for the node at the `path` path
     * @param path a complete path to a node (starting with "/")
     * @returns a constant #GValue if a value has been defined, or %NULL if the value is undefined or if the @path is not defined or @path does not hold any value.
     */
    get_value_at(path: string): any | null
    /**
     * Tells if all the required values in `op` have been defined.
     * 
     * if `xml_file` is not %NULL, the validity of `op` is tested against that specification,
     * and not against the current `op'`s specification.
     * @param xml_file an XML specification file (see gda_server_operation_new()) or %NULL
     * @returns %TRUE if @op is valid
     */
    is_valid(xml_file: string | null): boolean
    /**
     * Tells if all the required values in `op` have been defined.
     * 
     * if `xml_data` is not %NULL, the validity of `op` is tested against that specification,
     * and not against the current `op'`s specification.
     * @param resource the name of a resource containing an XML specification data (see gda_server_operation_new()) or %NULL
     * @returns %TRUE if @op is valid
     */
    is_valid_from_resource(resource: string | null): boolean
    /**
     * Loads the contents of `node` into `op`. The XML tree passed through the `node`
     * argument must correspond to an XML tree saved using gda_server_operation_save_data_to_xml().
     * @param node a #xmlNodePtr
     * @returns %TRUE if no error occurred
     */
    load_data_from_xml(node: libxml2.NodePtr): boolean
    /**
     * Creates a new database using the specifications in `op`. `op` can be obtained using
     * gda_server_provider_create_operation(), or gda_server_operation_prepare_create_database().
     * @param provider the database provider to use, or %NULL if `op` has been created using gda_server_operation_prepare_create_database()
     * @returns TRUE if no error occurred and the database has been created, FALSE otherwise
     */
    perform_create_database(provider: string | null): boolean
    /**
     * Destroys an existing database using the specifications in `op`. `op` can be obtained using
     * gda_server_provider_create_operation(), or gda_server_operation_prepare_drop_database().
     * @param provider the database provider to use, or %NULL if `op` has been created using gda_server_operation_prepare_drop_database()
     * @returns TRUE if no error occurred and the database has been destroyed
     */
    perform_drop_database(provider: string | null): boolean
    /**
     * Creates an SQL statement (possibly using some specific extensions of the DBMS) corresponding to the
     * `op` operation. Note that the returned string may actually contain more than one SQL statement.
     * 
     * This function's purpose is mainly informative to get the actual SQL code which would be executed to perform
     * the operation; to actually perform the operation, use gda_server_operation_perform().
     * @returns a new string, or %NULL if an error occurred or operation cannot be rendered as SQL.
     */
    render(): string | null
    save_data_to_xml_string(): string | null
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
     * @returns %TRUE if no error occurred
     */
    set_value_at(value: string | null, path: string): boolean

    // Own virtual methods of Gda-6.0.Gda.ServerOperation

    vfunc_seq_item_added(seq_path: string, item_index: number): void
    vfunc_seq_item_remove(seq_path: string, item_index: number): void

    // Own signals of Gda-6.0.Gda.ServerOperation

    connect(sigName: "sequence-item-added", callback: ServerOperation.SequenceItemAddedSignalCallback): number
    connect_after(sigName: "sequence-item-added", callback: ServerOperation.SequenceItemAddedSignalCallback): number
    emit(sigName: "sequence-item-added", seq_path: string | null, item_index: number, ...args: any[]): void
    connect(sigName: "sequence-item-remove", callback: ServerOperation.SequenceItemRemoveSignalCallback): number
    connect_after(sigName: "sequence-item-remove", callback: ServerOperation.SequenceItemRemoveSignalCallback): number
    emit(sigName: "sequence-item-remove", seq_path: string | null, item_index: number, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.ServerOperation

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
    connect(sigName: "notify::spec-resource", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spec-resource", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spec-resource", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ServerOperation extends GObject.Object {

    // Own properties of Gda-6.0.Gda.ServerOperation

    static name: string
    static $gtype: GObject.GType<ServerOperation>

    // Constructors of Gda-6.0.Gda.ServerOperation

    constructor(config?: ServerOperation.ConstructorProperties) 
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
     * @returns a new #GdaServerOperation object
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
     * @returns a new #GdaServerOperation object
     */
    static new(op_type: ServerOperationType, xml_file: string): ServerOperation
    _init(config?: ServerOperation.ConstructorProperties): void
    static error_quark(): GLib.Quark
    /**
     * Get a string version of `type`
     * @param type a #GdaServerOperationType value
     * @returns a non %NULL string (do not free or modify)
     */
    static op_type_to_string(type: ServerOperationType): string
    /**
     * Creates a new #GdaServerOperation object which contains the specifications required
     * to create a database. Once these specifications are provided, use
     * gda_server_operation_perform_create_database() to perform the database creation.
     * 
     * If `db_name` is left %NULL, then the name of the database to create will have to be set in the
     * returned #GdaServerOperation using gda_server_operation_set_value_at().
     * @param provider the database provider to use
     * @param db_name the name of the database to create, or %NULL
     * @returns new #GdaServerOperation object, or %NULL if the provider does not support database creation
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
     * @returns new #GdaServerOperation object, or %NULL if the provider does not support database destruction
     */
    static prepare_drop_database(provider: string, db_name: string | null): ServerOperation | null
    /**
     * Performs the reverse of gda_server_operation_op_type_to_string()
     * @param str a string
     * @returns the #GdaServerOperationType represented by @str, or #G_MAXINT if @str is not a valid representation of a #GdaServerOperationType
     */
    static string_to_op_type(str: string): ServerOperationType
}

export module ServerProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends Lockable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface ServerProvider extends Lockable {

    // Own fields of Gda-6.0.Gda.ServerProvider

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.ServerProvider

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
     * @returns a new #GdaServerOperation object, or %NULL in the provider does not support the @type type of operation or if an error occurred
     */
    create_operation(cnc: Connection | null, type: ServerOperationType, options: Set | null): ServerOperation | null
    /**
     * Creates a new #GdaSqlParser object which is adapted to `provider` (and possibly depending on
     * `cnc` for the actual database version).
     * 
     * If `prov` does not have its own parser, then %NULL is returned, and a general SQL parser can be obtained
     * using gda_sql_parser_new().
     * @param cnc a #GdaConnection, or %NULL
     * @returns a new #GdaSqlParser object, or %NULL.
     */
    create_parser(cnc: Connection | null): SqlParser
    /**
     * Escapes `str` for use within an SQL command (to avoid SQL injection attacks). Note that the returned value still needs
     * to be enclosed in single quotes before being used in an SQL statement.
     * @param cnc a #GdaConnection object, or %NULL
     * @param str a string to escape
     * @returns a new string suitable to use in SQL statements
     */
    escape_string(cnc: Connection | null, str: string): string | null
    /**
     * Find a #GdaDataHandler object to manipulate data of type `for_type`.
     * 
     * Note: this function is currently very poorly implemented by database providers.
     * @param cnc a #GdaConnection object, or %NULL
     * @param for_type a DBMS type definition
     * @returns a #GdaDataHandler, or %NULL if the provider does not know about the @for_type type
     */
    get_data_handler_dbms(cnc: Connection | null, for_type: string): DataHandler
    /**
     * Find a #GdaDataHandler object to manipulate data of type `for_type`. The returned object must not be modified.
     * @param cnc a #GdaConnection object, or %NULL
     * @param for_type a #GType
     * @returns a #GdaDataHandler, or %NULL if the provider does not support the requested @for_type data type
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
     * @returns the name of the DBMS type, or %NULL
     */
    get_default_dbms_type(cnc: Connection | null, type: GObject.GType): string | null
    /**
     * Get the name (identifier) of the provider
     * @returns a string containing the provider's name
     */
    get_name(): string
    /**
     * Get the version of the database to which the connection is opened.
     * @param cnc a #GdaConnection object
     * @returns a (read only) string, or %NULL if an error occurred
     */
    get_server_version(cnc: Connection): string
    /**
     * Get the version of the provider.
     * @returns a string containing the version identification.
     */
    get_version(): string
    handler_declare(dh: DataHandler, cnc: Connection, g_type: GObject.GType, dbms_type: string): void
    /**
     * Reserved to database provider's implementations: get the #GdaDataHandler associated to `prov`
     * for connection `cnc`. You probably want to use gda_server_provider_get_data_handler_g_type().
     * @param cnc a #GdaConnection
     * @param g_type a #GType
     * @param dbms_type a database type
     * @returns the requested #GdaDataHandler, or %NULL if none found
     */
    handler_find(cnc: Connection | null, g_type: GObject.GType, dbms_type: string | null): DataHandler
    /**
     * Reserved to database provider's implementations. This method defines a default data handler for
     * `provider,` and returns that #GdaDataHandler.
     * @param type a #GType
     * @returns a #GdaDataHandler, or %NULL
     */
    handler_use_default(type: GObject.GType): DataHandler
    /**
     * This is a factory method to get a unique instance of a #GdaSqlParser object
     * for each #GdaServerProvider object
     * Don't unref it.
     * @returns a #GdaSqlParser
     */
    internal_get_parser(): SqlParser
    /**
     * Performs the operation described by `op`. Note that `op` is not destroyed by this method
     * and can be reused.
     * @param cnc a #GdaConnection object which will be used to perform the action, or %NULL
     * @param op a #GdaServerOperation object
     * @returns %TRUE if no error occurred
     */
    perform_operation(cnc: Connection | null, op: ServerOperation): boolean
    /**
     * Performs the operation described by `op,` using the SQL from the rendering of the operation
     * @param cnc a #GdaConnection object which will be used to perform an action, or %NULL
     * @param op a #GdaServerOperation object
     * @returns %TRUE if no error occurred
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
     * @returns a new string, or %NULL if an error occurred or operation cannot be rendered as SQL.
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
     * @returns a new #GValue, or %NULL
     */
    string_to_value(cnc: Connection | null, string: string, preferred_type: GObject.GType, dbms_type: string | null): any
    /**
     * Tests if a feature is supported
     * @param cnc a #GdaConnection object, or %NULL
     * @param feature #GdaConnectionFeature feature to test
     * @returns %TRUE if @feature is supported
     */
    supports_feature(cnc: Connection | null, feature: ConnectionFeature): boolean
    /**
     * Tells if `provider` supports the `type` of operation on the `cnc` connection, using the
     * (optional) `options` parameters.
     * @param cnc a #GdaConnection object which would be used to perform an action, or %NULL
     * @param type the type of operation requested
     * @param options a list of named parameters, or %NULL
     * @returns %TRUE if the operation is supported
     */
    supports_operation(cnc: Connection | null, type: ServerOperationType, options: Set | null): boolean
    /**
     * Unescapes `str` for use within an SQL command. This is the exact opposite of gda_server_provider_escape_string().
     * @param cnc a #GdaConnection object, or %NULL
     * @param str a string to escape
     * @returns a new string
     */
    unescape_string(cnc: Connection | null, str: string): string | null
    /**
     * Produces a fully quoted and escaped string from a GValue
     * @param cnc a #GdaConnection object, or %NULL
     * @param from #GValue to convert from
     * @returns escaped and quoted value or NULL if not supported.
     */
    value_to_sql_string(cnc: Connection | null, from: any): string | null

    // Class property signals of Gda-6.0.Gda.ServerProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ServerProvider extends GObject.Object {

    // Own properties of Gda-6.0.Gda.ServerProvider

    static name: string
    static $gtype: GObject.GType<ServerProvider>

    // Constructors of Gda-6.0.Gda.ServerProvider

    constructor(config?: ServerProvider.ConstructorProperties) 
    _init(config?: ServerProvider.ConstructorProperties): void
    static error_quark(): GLib.Quark
    static get_impl_functions_for_class(klass: GObject.ObjectClass, type: ServerProviderFunctionsType): any | null
    /**
     * Obtain a #GMainContext on which to iterate. This function is reserved to database provider's implementations.
     * 
     * NB: if `cnc` is NOT %NULL and has a #GdaWorker associated, and if we are in its worker thread, then this function
     *     returns %NULL (to avoid generating contexts which are never used)
     * @param cnc a #GdaConnection, or %NULL
     * @returns a #GMainContext, or %NULL. Don't forget to call g_main_context_unref() when done
     */
    static get_real_main_context(cnc: Connection | null): GLib.MainContext
    /**
     * Loads and returns the contents of the specified resource.
     * This function should only be used by database provider's implementations
     * @param prov_name the provider's name
     * @param resource the name of the resource to load
     * @returns a new string containing the resource's contents, or %NULL if not found or if an error occurred
     */
    static load_resource_contents(prov_name: string, resource: string): string | null
    /**
     * Upon creation, used by provider's implementors to set the implementation functions. Passing %NULL
     * as the `functions_set` has no effect.
     * 
     * If some pointers of `functions_set` are %NULL, they are replaced by functions from the parent class of
     * `provider`.
     * 
     * Warning: this function must only be called once for each different values of `type` and for each `klass`
     * @param klass a #GdaServerProviderClass object
     * @param type a #GdaServerProviderFunctionsType type
     * @param functions_set a pointer to the function set, or %NULL
     */
    static set_impl_functions(klass: ServerProviderClass, type: ServerProviderFunctionsType, functions_set: any | null): void
}

export module Set {

    // Signal callback interfaces

    /**
     * Signal callback interface for `holder-attr-changed`
     */
    export interface HolderAttrChangedSignalCallback {
        ($obj: Set, holder: Holder, attr_name: string | null, attr_value: any): void
    }

    /**
     * Signal callback interface for `holder-changed`
     */
    export interface HolderChangedSignalCallback {
        ($obj: Set, object: Holder): void
    }

    /**
     * Signal callback interface for `holder-type-set`
     */
    export interface HolderTypeSetSignalCallback {
        ($obj: Set, holder: Holder): void
    }

    /**
     * Signal callback interface for `public-data-changed`
     */
    export interface PublicDataChangedSignalCallback {
        ($obj: Set): void
    }

    /**
     * Signal callback interface for `source-model-changed`
     */
    export interface SourceModelChangedSignalCallback {
        ($obj: Set, source: any | null): void
    }

    /**
     * Signal callback interface for `validate-holder-change`
     */
    export interface ValidateHolderChangeSignalCallback {
        ($obj: Set, holder: Holder, new_value: any): GLib.Error
    }

    /**
     * Signal callback interface for `validate-set`
     */
    export interface ValidateSetSignalCallback {
        ($obj: Set): GLib.Error
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.Set

        description?: string | null
        holders?: any | null
        id?: string | null
        name?: string | null
        /**
         * Defines if the "validate-set" signal gets emitted when
         * any holder in the data set changes. This property also affects the
         * GdaHolder:validate-changes property.
         */
        validateChanges?: boolean | null
    }

}

export interface Set {

    // Own properties of Gda-6.0.Gda.Set

    description: string | null
    readonly holders: any
    id: string | null
    name: string | null
    /**
     * Defines if the "validate-set" signal gets emitted when
     * any holder in the data set changes. This property also affects the
     * GdaHolder:validate-changes property.
     */
    validateChanges: boolean

    // Own fields of Gda-6.0.Gda.Set

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.Set

    /**
     * Adds `holder` to the list of holders managed within `set`.
     * 
     * NOTE: if `set` already has a #GdaHolder with the same ID as `holder,` then `holder`
     * will not be added to the set (even if `holder'`s type or value is not the same as the
     * one already in `set)`.
     * @param holder a #GdaHolder object
     * @returns %TRUE if @holder has been added to @set (and FALSE if it has not been added because there is another #GdaHolder with the same ID)
     */
    add_holder(holder: Holder): boolean
    /**
     * Creates a new #GdaSet object, copy of `set`
     * @returns a new #GdaSet object
     */
    copy(): Set
    /**
     * Finds a #GdaSetGroup which lists a  #GdaSetNode containing `holder,`
     * don't modify the returned structure.
     * @param holder a #GdaHolder object
     * @returns the requested #GdaSetGroup or %NULL
     */
    get_group(holder: Holder): SetGroup
    get_groups(): SetGroup[]
    /**
     * Finds a #GdaHolder using its ID
     * @param holder_id the ID of the requested value holder
     * @returns the requested #GdaHolder or %NULL
     */
    get_holder(holder_id: string): Holder
    /**
     * Get the value of the #GdaHolder which ID is `holder_id`
     * @param holder_id the ID of the holder to set the value
     * @returns the requested GValue, or %NULL (see gda_holder_get_value())
     */
    get_holder_value(holder_id: string): any | null
    get_holders(): Holder[]
    /**
     * Finds a #GdaSetNode holding information for `holder,` don't modify the returned structure
     * @param holder a #GdaHolder object
     * @returns the requested #GdaSetNode or %NULL
     */
    get_node(holder: Holder): SetNode
    get_nodes(): SetNode[]
    /**
     * Finds a #GdaHolder using its position
     * @param pos the position of the requested #GdaHolder, starting at %0
     * @returns the requested #GdaHolder or %NULL
     */
    get_nth_holder(pos: number): Holder
    /**
     * Finds a #GdaSetSource which contains the #GdaDataModel restricting the possible values of
     * `holder,` don't modify the returned structure.
     * @param holder a #GdaHolder object
     * @returns the requested #GdaSetSource or %NULL
     */
    get_source(holder: Holder): SetSource
    /**
     * Finds the #GdaSetSource structure used in `set` for which `model` is a
     * the data model (the returned structure should not be modified).
     * @param model a #GdaDataModel object
     * @returns the requested #GdaSetSource pointer or %NULL.
     */
    get_source_for_model(model: DataModel): SetSource
    get_sources(): SetSource[]
    /**
     * This method tells if all `set'`s #GdaHolder objects are valid, and if
     * they represent a valid combination of values, as defined by rules
     * external to Libgda: the "validate-set" signal is emitted and if none of the signal handlers return an
     * error, then the returned value is TRUE, otherwise the return value is FALSE as soon as a signal handler
     * returns an error.
     * @returns TRUE if the set is valid
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

    // Own virtual methods of Gda-6.0.Gda.Set

    vfunc_holder_attr_changed(holder: Holder, attr_name: string, attr_value: any): void
    vfunc_holder_changed(holder: Holder): void
    vfunc_holder_type_set(holder: Holder): void
    vfunc_public_data_changed(): void
    vfunc_source_model_changed(source: SetSource): void
    vfunc_validate_holder_change(holder: Holder, new_value: any): GLib.Error
    vfunc_validate_set(): GLib.Error

    // Own signals of Gda-6.0.Gda.Set

    connect(sigName: "holder-attr-changed", callback: Set.HolderAttrChangedSignalCallback): number
    connect_after(sigName: "holder-attr-changed", callback: Set.HolderAttrChangedSignalCallback): number
    emit(sigName: "holder-attr-changed", holder: Holder, attr_name: string | null, attr_value: any, ...args: any[]): void
    connect(sigName: "holder-changed", callback: Set.HolderChangedSignalCallback): number
    connect_after(sigName: "holder-changed", callback: Set.HolderChangedSignalCallback): number
    emit(sigName: "holder-changed", object: Holder, ...args: any[]): void
    connect(sigName: "holder-type-set", callback: Set.HolderTypeSetSignalCallback): number
    connect_after(sigName: "holder-type-set", callback: Set.HolderTypeSetSignalCallback): number
    emit(sigName: "holder-type-set", holder: Holder, ...args: any[]): void
    connect(sigName: "public-data-changed", callback: Set.PublicDataChangedSignalCallback): number
    connect_after(sigName: "public-data-changed", callback: Set.PublicDataChangedSignalCallback): number
    emit(sigName: "public-data-changed", ...args: any[]): void
    connect(sigName: "source-model-changed", callback: Set.SourceModelChangedSignalCallback): number
    connect_after(sigName: "source-model-changed", callback: Set.SourceModelChangedSignalCallback): number
    emit(sigName: "source-model-changed", source: any | null, ...args: any[]): void
    connect(sigName: "validate-holder-change", callback: Set.ValidateHolderChangeSignalCallback): number
    connect_after(sigName: "validate-holder-change", callback: Set.ValidateHolderChangeSignalCallback): number
    emit(sigName: "validate-holder-change", holder: Holder, new_value: any, ...args: any[]): void
    connect(sigName: "validate-set", callback: Set.ValidateSetSignalCallback): number
    connect_after(sigName: "validate-set", callback: Set.ValidateSetSignalCallback): number
    emit(sigName: "validate-set", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Set

    connect(sigName: "notify::description", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::holders", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::holders", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::holders", ...args: any[]): void
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

export class Set extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Set

    static name: string
    static $gtype: GObject.GType<Set>

    // Constructors of Gda-6.0.Gda.Set

    constructor(config?: Set.ConstructorProperties) 
    /**
     * Creates a new #GdaSet object, and populates it with the list given as argument.
     * The list can then be freed as it is copied. All the value holders in `holders` are referenced counted
     * and modified, so they should not be used anymore afterwards.
     * @constructor 
     * @param holders a list of #GdaHolder objects
     * @returns a new #GdaSet object
     */
    constructor(holders: Holder[]) 
    /**
     * Creates a new #GdaSet object, and populates it with the list given as argument.
     * The list can then be freed as it is copied. All the value holders in `holders` are referenced counted
     * and modified, so they should not be used anymore afterwards.
     * @constructor 
     * @param holders a list of #GdaHolder objects
     * @returns a new #GdaSet object
     */
    static new(holders: Holder[]): Set
    /**
     * Creates a new #GdaSet object from the `xml_spec`
     * specifications
     * @constructor 
     * @param xml_spec a #xmlNodePtr for a &lt;parameters&gt; tag
     * @returns a new object, or %NULL if an error occurred
     */
    static new_from_spec_node(xml_spec: libxml2.NodePtr): Set
    /**
     * Creates a new #GdaSet object from the `xml_spec`
     * specifications
     * @constructor 
     * @param xml_spec a string
     * @returns a new object, or %NULL if an error occurred
     */
    static new_from_spec_string(xml_spec: string): Set
    /**
     * Creates a new #GdaSet like gda_set_new(), but does not allow modifications to any of the #GdaHolder
     * object in `holders`. This function is used for Libgda's database providers' implementation.
     * @constructor 
     * @param holders a list of #GdaHolder objects
     * @returns a new #GdaSet object
     */
    static new_read_only(holders: Holder[]): Set
    _init(config?: Set.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export interface Short {
}

export class Short {

    // Own properties of Gda-6.0.Gda.Short

    static name: string
}

export module SqlBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SqlBuilder {

    // Own fields of Gda-6.0.Gda.SqlBuilder

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.SqlBuilder

    /**
     * Creates a new CASE ... WHEN ... THEN ... ELSE ... END expression. The WHEN expression and the THEN
     * expression IDs are taken from the `when_array` and `then_array` at the same index, for each index inferior to
     * `args_size`.
     * @param test_expr the expression ID representing the test of the CASE, or %0
     * @param else_expr the expression ID representing the ELSE expression, or %0
     * @param when_array an array containing each WHEN expression ID, having at least `args_size` elements
     * @param then_array an array containing each THEN expression ID, having at least `args_size` elements
     * @returns the ID of the new expression, or %0 if there was an error
     */
    add_case(test_expr: SqlBuilderId, else_expr: SqlBuilderId, when_array: SqlBuilderId[], then_array: SqlBuilderId[]): SqlBuilderId
    /**
     * Builds a new expression which represents a condition (or operation).
     * @param op type of condition
     * @param op1 the ID of the 1st argument (not 0)
     * @param op2 the ID of the 2nd argument (may be %0 if `op` needs only one operand)
     * @param op3 the ID of the 3rd argument (may be %0 if `op` needs only one or two operand)
     * @returns the ID of the new expression, or %0 if there was an error
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
     * @returns the ID of the new expression, or %0 if there was an error
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
     * @param value value to set the expression to, or %NULL or a GDA_TYPE_NULL value to represent an SQL NULL
     * @returns the ID of the new expression, or %0 if there was an error
     */
    add_expr_value(value: any | null): SqlBuilderId
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
     * @returns the ID of the new expression, or %0 if there was an error
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
     * @returns the ID of the new expression, or %0 if there was an error
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
     * @returns the ID of the new expression, or %0 if there was an error
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
     * @returns the ID of the new expression, or %0 if there was an error
     */
    add_param(param_name: string, type: GObject.GType, nullok: boolean): SqlBuilderId
    /**
     * Adds an expression which is a subselect.
     * @param sqlst a pointer to a #GdaSqlStatement, which has to be a SELECT or compound SELECT. This will be copied.
     * @returns the ID of the new expression, or %0 if there was an error
     */
    add_sub_select(sqlst: SqlStatement): SqlBuilderId
    /**
     * Add a sub select to a COMPOUND statement
     * @param sqlst a pointer to a #GdaSqlStatement, which has to be a SELECT or compound SELECT. This will be copied.
     */
    compound_add_sub_select(sqlst: SqlStatement): void
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
     * Exports a part managed by `builder` as a new #GdaSqlExpr, which can represent any expression
     * in a statement.
     * @param id the ID of the expression to be exported, (must be a valid ID in `builder,` not %0)
     * @returns a pointer to a new #GdaSqlExpr structure, free using gda_sql_expr_free() when not needed anymore. If the part with @id as ID cannot be found, the returned value is %NULL.
     */
    export_expression(id: SqlBuilderId): SqlExpr
    /**
     * Creates a new #GdaSqlStatement structure from `builder'`s contents.
     * 
     * The returned pointer belongs to `builder'`s internal representation.
     * Use gda_sql_statement_copy() if you need to keep it.
     * @returns a #GdaSqlStatement pointer
     */
    get_sql_statement(): SqlStatement | null
    /**
     * Creates a new #GdaStatement statement from `builder'`s contents.
     * @returns a new #GdaStatement object, or %NULL if an error occurred
     */
    get_statement(): Statement
    /**
     * Imports the `expr` into `builder`.
     * @param expr a #GdaSqlExpr obtained using gda_sql_builder_export_expression()
     * @returns the ID of the new expression, or %0 if there was an error
     */
    import_expression(expr: SqlExpr): SqlBuilderId
    /**
     * Imports the an expression located in `query` into `builder`.
     * @param query a #GdaSqlBuilder object to get expression from
     * @param expr_id a #GdaSqlBuilderId of the expression in `query`
     * @returns the ID of the new expression, or %0 if there was an error
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
     * @returns the ID of the added field, or %0 if there was an error
     */
    select_add_field(field_name: string, table_name: string | null, alias: string | null): SqlBuilderId
    /**
     * Adds a new target to a SELECT statement
     * @param table_name the name of the target table
     * @param alias the alias to give to the target, or %NULL
     * @returns the ID of the new target, or %0 if there was an error
     */
    select_add_target(table_name: string, alias: string | null): SqlBuilderId
    /**
     * Adds a new target to a SELECT statement. If there already exists a target representing
     * the same table and the same alias (or with the same absence of alias) then the same target
     * ID is returned instead of the ID of a new target.
     * @param table_id the ID of the expression holding a table reference (not %0)
     * @param alias the alias to give to the target, or %NULL
     * @returns the ID of the new (or existing) target, or %0 if there was an error
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
     * Joins two targets in a SELECT statement, using the `join_type` type of join.
     * 
     * Note: if the target represented by `left_target_id` is actually situated after (on the right) of
     * the target represented by `right_target_id,` then the actual type of join may be switched from
     * %GDA_SQL_SELECT_JOIN_LEFT to %GDA_SQL_SELECT_JOIN_RIGHT or from %GDA_SQL_SELECT_JOIN_RIGHT to
     * %GDA_SQL_SELECT_JOIN_LEFT.
     * @param left_target_id the ID of the left target to use (not %0)
     * @param right_target_id the ID of the right target to use (not %0)
     * @param join_type the type of join
     * @param join_expr joining expression's ID, or %0
     * @returns the ID of the new join, or %0 if there was an error
     */
    select_join_targets(left_target_id: SqlBuilderId, right_target_id: SqlBuilderId, join_type: SqlSelectJoinType, join_expr: SqlBuilderId): SqlBuilderId
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

    // Class property signals of Gda-6.0.Gda.SqlBuilder

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlBuilder extends GObject.Object {

    // Own properties of Gda-6.0.Gda.SqlBuilder

    static name: string
    static $gtype: GObject.GType<SqlBuilder>

    // Constructors of Gda-6.0.Gda.SqlBuilder

    constructor(config?: SqlBuilder.ConstructorProperties) 
    /**
     * Create a new #GdaSqlBuilder object to build #GdaStatement or #GdaSqlStatement
     * objects of type `stmt_type`
     * @constructor 
     * @param stmt_type the type of statement to build
     * @returns the newly created object, or %NULL if an error occurred (such as unsupported statement type)
     */
    constructor(stmt_type: SqlStatementType) 
    /**
     * Create a new #GdaSqlBuilder object to build #GdaStatement or #GdaSqlStatement
     * objects of type `stmt_type`
     * @constructor 
     * @param stmt_type the type of statement to build
     * @returns the newly created object, or %NULL if an error occurred (such as unsupported statement type)
     */
    static new(stmt_type: SqlStatementType): SqlBuilder
    _init(config?: SqlBuilder.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module SqlParser {

    // Constructor properties interface

    export interface ConstructorProperties extends Lockable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.SqlParser

        debug?: boolean | null
        mode?: number | null
        tokenizerFlavour?: number | null
    }

}

export interface SqlParser extends Lockable {

    // Own properties of Gda-6.0.Gda.SqlParser

    readonly columnError: number
    debug: boolean
    readonly lineError: number
    mode: number
    tokenizerFlavour: number

    // Own fields of Gda-6.0.Gda.SqlParser

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.SqlParser

    /**
     * Parse `filename'`s contents and creates a #GdaBatch object which contains all the
     *  #GdaStatement objects created while parsing (one object per SQL statement).
     * 
     * `filename'`s contents are parsed and #GdaStatement objects are created as long as no error is found. If an error is found
     * at some point, then the parsing stops, `error` may be set and %NULL is returned
     * 
     * if `sql` is %NULL, then the returned #GdaBatch object will contain no statement.
     * @param filename name of the file to parse
     * @returns a new #GdaBatch object, or %NULL if an error occurred
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
     * @returns a new #GdaStatement object, or %NULL if an error occurred
     */
    parse_string(sql: string): [ /* returnType */ Statement | null, /* remain */ string | null ]
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
     * @returns a new #GdaBatch object, or %NULL if an error occurred
     */
    parse_string_as_batch(sql: string): [ /* returnType */ Batch | null, /* remain */ string | null ]
    set_overflow_error(): void
    set_syntax_error(): void

    // Class property signals of Gda-6.0.Gda.SqlParser

    connect(sigName: "notify::column-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-error", ...args: any[]): void
    connect(sigName: "notify::debug", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::debug", ...args: any[]): void
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

export class SqlParser extends GObject.Object {

    // Own properties of Gda-6.0.Gda.SqlParser

    static name: string
    static $gtype: GObject.GType<SqlParser>

    // Constructors of Gda-6.0.Gda.SqlParser

    constructor(config?: SqlParser.ConstructorProperties) 
    /**
     * Creates a new #GdaSqlParser object
     * @constructor 
     * @returns the new object
     */
    constructor() 
    /**
     * Creates a new #GdaSqlParser object
     * @constructor 
     * @returns the new object
     */
    static new(): SqlParser
    _init(config?: SqlParser.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module Statement {

    // Signal callback interfaces

    /**
     * Signal callback interface for `checked`
     */
    export interface CheckedSignalCallback {
        ($obj: Statement, cnc: Connection, checked: boolean): void
    }

    /**
     * Signal callback interface for `reset`
     */
    export interface ResetSignalCallback {
        ($obj: Statement): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.Statement

        structure?: SqlStatement | null
    }

}

export interface Statement {

    // Own properties of Gda-6.0.Gda.Statement

    structure: SqlStatement

    // Own fields of Gda-6.0.Gda.Statement

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.Statement

    /**
     * Checks that `stmt'`s structure is correct.
     * @returns TRUE if @stmt's structure is correct
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
     * @returns TRUE if every object actually exists in @cnc's database
     */
    check_validity(cnc: Connection | null): boolean
    /**
     * Copy constructor
     * @returns a the new copy of @orig
     */
    copy(): Statement
    /**
     * Get a new #GdaSet object which groups all the execution parameters
     * which `stmt` needs. This new object is returned though `out_params`.
     * 
     * Note that if `stmt` does not need any parameter, then `out_params` is set to %NULL.
     * @returns TRUE if no error occurred.
     */
    get_parameters(): [ /* returnType */ boolean, /* out_params */ Set | null ]
    /**
     * Get the type of statement held by `stmt`. It returns GDA_SQL_STATEMENT_NONE if
     * `stmt` does not hold any statement
     * @returns the statement type
     */
    get_statement_type(): SqlStatementType
    /**
     * Tells if `stmt` is composed only of spaces (that is it has no real SQL code), and is completely
     * useless as such.
     * @returns TRUE if executing @stmt does nothing
     */
    is_useless(): boolean
    /**
     * "Normalizes" some parts of `stmt,` see gda_sql_statement_normalize() for more
     * information.
     * @param cnc a #GdaConnection object
     * @returns TRUE if no error occurred
     */
    normalize(cnc: Connection): boolean
    /**
     * Rewrites `stmt` and creates a new #GdaSqlStatement where all the variables which are to a DEFAULT value
     * (as returned by gda_holder_value_is_default()) are either removed from the statement (if `remove`
     * is %TRUE) or replaced by the "DEFAULT" keyword (if `remove` is %FALSE).
     * 
     * This function is only useful for database providers' implementations which have to deal with default
     * values when executing statements, and is only relevant in the case of INSERT or UPDATE statements
     * (in the latter case an error is returned if `remove` is %TRUE).
     * 
     * For example the <programlisting><![CDATA[INSERT INTO mytable (id, name) VALUES (23, ##name::string)]]></programlisting>
     * is re-written into <programlisting><![CDATA[INSERT INTO mytable (id, name) VALUES (23, DEFAULT)]]></programlisting>
     * if `remove` is %FALSE and into <programlisting><![CDATA[INSERT INTO mytable (id) VALUES (23)]]></programlisting>
     * if `remove` is %TRUE.
     * @param params a #GdaSet containing the variable's values to be bound when executing `stmt`
     * @param remove set to %TRUE if DEFAULT fields are removed, of %FALSE if the "DEFAULT" keyword is used
     * @returns a new #GdaSqlStatement, or %NULL if an error occurred
     */
    rewrite_for_default_values(params: Set, remove: boolean): SqlStatement | null
    /**
     * Creates a string representing the contents of `stmt`.
     * @returns a string containing the serialized version of @stmt
     */
    serialize(): string | null
    /**
     * Renders `stmt` as an SQL statement, with some control on how it is rendered.
     * 
     * If `cnc` is not %NULL, then the rendered SQL will better be suited to be used by `cnc` (in particular
     * it may include some SQL tweaks and/or proprietary extensions specific to the database engine used by `cnc)`:
     * in this case the result is similar to calling gda_connection_statement_to_sql().
     * @param cnc a #GdaConnection object, or %NULL
     * @param params parameters contained in a single #GdaSet object, or %NULL
     * @param flags a set of flags to control the rendering
     * @returns a new string if no error occurred
     */
    to_sql_extended(cnc: Connection | null, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string | null, /* params_used */ Holder[] | null ]

    // Own virtual methods of Gda-6.0.Gda.Statement

    vfunc_checked(cnc: Connection, checked: boolean): void
    vfunc_reset(): void

    // Own signals of Gda-6.0.Gda.Statement

    connect(sigName: "checked", callback: Statement.CheckedSignalCallback): number
    connect_after(sigName: "checked", callback: Statement.CheckedSignalCallback): number
    emit(sigName: "checked", cnc: Connection, checked: boolean, ...args: any[]): void
    connect(sigName: "reset", callback: Statement.ResetSignalCallback): number
    connect_after(sigName: "reset", callback: Statement.ResetSignalCallback): number
    emit(sigName: "reset", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Statement

    connect(sigName: "notify::structure", callback: (($obj: Statement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structure", callback: (($obj: Statement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::structure", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Statement extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Statement

    static name: string
    static $gtype: GObject.GType<Statement>

    // Constructors of Gda-6.0.Gda.Statement

    constructor(config?: Statement.ConstructorProperties) 
    /**
     * Creates a new #GdaStatement object
     * @constructor 
     * @returns the new object
     */
    constructor() 
    /**
     * Creates a new #GdaStatement object
     * @constructor 
     * @returns the new object
     */
    static new(): Statement
    _init(config?: Statement.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module TransactionStatus {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TransactionStatus {

    // Own fields of Gda-6.0.Gda.TransactionStatus

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.TransactionStatus

    add_event_sql(sql: string, conn_event: ConnectionEvent): TransactionStatusEvent
    add_event_sub(sub_trans: TransactionStatus): TransactionStatusEvent
    add_event_svp(svp_name: string): TransactionStatusEvent
    find(str: string, destev: TransactionStatusEvent): TransactionStatus | null
    /**
     * Find a pointer to the "current" _unnamed_ transaction, which is the last
     * transaction if there are several nested transactions
     * @param destev 
     * @param unnamed_only 
     */
    find_current(destev: TransactionStatusEvent, unnamed_only: boolean): TransactionStatus | null
    free_events(event: TransactionStatusEvent, free_after: boolean): void
    get_isolation_level(): TransactionIsolation
    get_state(): TransactionStatusState
    set_isolation_level(il: TransactionIsolation): void
    set_state(state: TransactionStatusState): void

    // Class property signals of Gda-6.0.Gda.TransactionStatus

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TransactionStatus extends GObject.Object {

    // Own properties of Gda-6.0.Gda.TransactionStatus

    static name: string
    static $gtype: GObject.GType<TransactionStatus>

    // Constructors of Gda-6.0.Gda.TransactionStatus

    constructor(config?: TransactionStatus.ConstructorProperties) 
    /**
     * Creates a new #GdaTransactionStatus object, which allows a fine-tune and
     * full control of transactions to be used with providers.
     * @constructor 
     * @param name name for the transaction
     * @returns the newly created object.
     */
    constructor(name: string) 
    /**
     * Creates a new #GdaTransactionStatus object, which allows a fine-tune and
     * full control of transactions to be used with providers.
     * @constructor 
     * @param name name for the transaction
     * @returns the newly created object.
     */
    static new(name: string): TransactionStatus
    _init(config?: TransactionStatus.ConstructorProperties): void
}

export module Tree {

    // Signal callback interfaces

    /**
     * Signal callback interface for `node-changed`
     */
    export interface NodeChangedSignalCallback {
        ($obj: Tree, node: TreeNode): void
    }

    /**
     * Signal callback interface for `node-deleted`
     */
    export interface NodeDeletedSignalCallback {
        ($obj: Tree, node_path: string | null): void
    }

    /**
     * Signal callback interface for `node-has-child-toggled`
     */
    export interface NodeHasChildToggledSignalCallback {
        ($obj: Tree, node: TreeNode): void
    }

    /**
     * Signal callback interface for `node-inserted`
     */
    export interface NodeInsertedSignalCallback {
        ($obj: Tree, node: TreeNode): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Tree {

    // Own properties of Gda-6.0.Gda.Tree

    /**
     * Tells if the GdaTree is a list or a tree.
     */
    readonly isList: boolean

    // Own fields of Gda-6.0.Gda.Tree

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.Tree

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
    dump(node: TreeNode | null, stream: any | null): void
    /**
     * Locates a #GdaTreeNode using the `tree_path` path.
     * @param tree_path full path to the required nodes (if `use_names` is %TRUE, then it must start with '/')
     * @param use_names if %TRUE, then `tree_path` will be interpreted as a unix style path, and if %FALSE,             then `tree_path` will be interpreted similarly to the #GtkTreePath's string representation.
     * @returns the requested #GdaTreeNode pointer, or %NULL if not found
     */
    get_node(tree_path: string, use_names: boolean): TreeNode | null
    /**
     * Get the #GdaTreeManager which created `node` in `tree`
     * @param node a #GdaTreeNode present in `tree`
     * @returns the #GdaTreeManager, or %NULL if @node is not present in @tree
     */
    get_node_manager(node: TreeNode): TreeManager
    /**
     * Get the path associated to `node` in `tree`.
     * @param node a #GdaTreeNode node in `tree`
     * @returns a new string, or %NULL if @node is not in @tree
     */
    get_node_path(node: TreeNode): string | null
    /**
     * The returned list is a list of all the #GdaTreeNode nodes <emphasis>below</emphasis> the node
     * at the specified path.
     * 
     * As a corner case if `tree_path` is %NULL, then the returned list contains all the top level nodes.
     * @param tree_path full path to the required nodes (if `use_names` is %TRUE, then it must start with '/'), or %NULL
     * @param use_names if %TRUE, then `tree_path` will be interpreted as a unix style path, and if %FALSE,             then `tree_path` will be interpreted similarly to the #GtkTreePath's string representation.
     * @returns a new list of #GdaTreeNode pointers, free it with g_slist_free()
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
     * @returns TRUE if no error occurred.
     */
    update_all(): boolean
    /**
     * Update the children of `node` in `tree` (not recursively, to update recursively, use
     * gda_tree_update_part()). If `node` is %NULL then the top level nodes are updated.
     * @param node a #GdaTreeNode node in `tree,` or %NULL
     * @returns TRUE if no error occurred.
     */
    update_children(node: TreeNode | null): boolean
    /**
     * Requests that `tree` be populated with nodes, starting from `node`
     * @param node a #GdaTreeNode node in `tree`
     * @returns TRUE if no error occurred.
     */
    update_part(node: TreeNode): boolean

    // Own virtual methods of Gda-6.0.Gda.Tree

    vfunc_node_changed(node: TreeNode): void
    vfunc_node_deleted(node_path: string): void
    vfunc_node_has_child_toggled(node: TreeNode): void
    vfunc_node_inserted(node: TreeNode): void

    // Own signals of Gda-6.0.Gda.Tree

    connect(sigName: "node-changed", callback: Tree.NodeChangedSignalCallback): number
    connect_after(sigName: "node-changed", callback: Tree.NodeChangedSignalCallback): number
    emit(sigName: "node-changed", node: TreeNode, ...args: any[]): void
    connect(sigName: "node-deleted", callback: Tree.NodeDeletedSignalCallback): number
    connect_after(sigName: "node-deleted", callback: Tree.NodeDeletedSignalCallback): number
    emit(sigName: "node-deleted", node_path: string | null, ...args: any[]): void
    connect(sigName: "node-has-child-toggled", callback: Tree.NodeHasChildToggledSignalCallback): number
    connect_after(sigName: "node-has-child-toggled", callback: Tree.NodeHasChildToggledSignalCallback): number
    emit(sigName: "node-has-child-toggled", node: TreeNode, ...args: any[]): void
    connect(sigName: "node-inserted", callback: Tree.NodeInsertedSignalCallback): number
    connect_after(sigName: "node-inserted", callback: Tree.NodeInsertedSignalCallback): number
    emit(sigName: "node-inserted", node: TreeNode, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Tree

    connect(sigName: "notify::is-list", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-list", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-list", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Tree extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Tree

    static name: string
    static $gtype: GObject.GType<Tree>

    // Constructors of Gda-6.0.Gda.Tree

    constructor(config?: Tree.ConstructorProperties) 
    /**
     * Creates a new #GdaTree object
     * @constructor 
     * @returns a new #GdaTree object
     */
    constructor() 
    /**
     * Creates a new #GdaTree object
     * @constructor 
     * @returns a new #GdaTree object
     */
    static new(): Tree
    _init(config?: Tree.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module TreeManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.TreeManager

        /**
         * This property specifies the function which needs to be called when the list of #GdaTreeNode nodes
         * managed has to be updated
         */
        func?: TreeManagerNodesFunc | null
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

}

export interface TreeManager {

    // Own properties of Gda-6.0.Gda.TreeManager

    /**
     * This property specifies the function which needs to be called when the list of #GdaTreeNode nodes
     * managed has to be updated
     */
    func: TreeManagerNodesFunc
    /**
     * This property specifies if, when initially creating nodes or updating the list of nodes,
     * the tree manager shoud also request that each node it has created or updated also
     * initially create or update their children.
     * 
     * This property can typically set to FALSE if the process of creating children nodes is lenghty
     * and needs to be postponed while an event occurs.
     */
    recursive: boolean

    // Own fields of Gda-6.0.Gda.TreeManager

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.TreeManager

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
     * @returns a new #GdaTreeNode
     */
    create_node(parent: TreeNode | null, name: string | null): TreeNode
    /**
     * Get the list of sub managers which have already been added using gda_tree_manager_add_manager()
     * @returns a list of #GdaTreeMenager which should not be modified.
     */
    get_managers(): TreeManager[]
    /**
     * Sets the function to be called when a new node is being created by `manager`. If `func` is %NULL
     * then each created node will be a #GdaTreeNode object.
     * 
     * Specifying a custom #GdaTreeManagerNodeFunc function for example allows one to use
     * specialized sub-classed #GdaTreeNode objects.
     * @param func a #GdaTreeManagerNodeFunc function pointer, or %NULL
     */
    set_node_create_func(func: TreeManagerNodeFunc | null): void

    // Class property signals of Gda-6.0.Gda.TreeManager

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

export class TreeManager extends GObject.Object {

    // Own properties of Gda-6.0.Gda.TreeManager

    static name: string
    static $gtype: GObject.GType<TreeManager>

    // Constructors of Gda-6.0.Gda.TreeManager

    constructor(config?: TreeManager.ConstructorProperties) 
    /**
     * Use this method to create a new #GdaTreeManager if it's more convenient than subclassing; all is needed
     * is the `update_func` function which is responsible for creating or updating the children nodes of a specified #GdaTreeNode.
     * @constructor 
     * @param update_func the function to call when the manager object is requested to create or update its list of #GdaTreeNode nodes
     * @returns a new #GdaTreeManager
     */
    static new_with_func(update_func: TreeManagerNodesFunc): TreeManager
    _init(config?: TreeManager.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module TreeMgrColumns {

    // Constructor properties interface

    export interface ConstructorProperties extends TreeManager.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.TreeMgrColumns

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
        metaStore?: MetaStore | null
        /**
         * If no set, then the table name will be fetched from the parent node using the "schema" attribute
         */
        schema?: string | null
        /**
         * If no set, then the table name will be fetched from the parent node using the "table_name" attribute
         */
        tableName?: string | null
    }

}

export interface TreeMgrColumns {

    // Own properties of Gda-6.0.Gda.TreeMgrColumns

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
    readonly metaStore: MetaStore
    /**
     * If no set, then the table name will be fetched from the parent node using the "schema" attribute
     */
    readonly schema: string | null
    /**
     * If no set, then the table name will be fetched from the parent node using the "table_name" attribute
     */
    readonly tableName: string | null

    // Own fields of Gda-6.0.Gda.TreeMgrColumns

    parent_instance: TreeManager & GObject.Object

    // Class property signals of Gda-6.0.Gda.TreeMgrColumns

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

export class TreeMgrColumns extends TreeManager {

    // Own properties of Gda-6.0.Gda.TreeMgrColumns

    static name: string
    static $gtype: GObject.GType<TreeMgrColumns>

    // Constructors of Gda-6.0.Gda.TreeMgrColumns

    constructor(config?: TreeMgrColumns.ConstructorProperties) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each
     * column in the table named `table_name` in the `schema` schema.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param schema a schema name
     * @param table_name the name of the table
     * @returns a new #GdaTreeManager object
     */
    constructor(cnc: Connection, schema: string, table_name: string) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each
     * column in the table named `table_name` in the `schema` schema.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param schema a schema name
     * @param table_name the name of the table
     * @returns a new #GdaTreeManager object
     */
    static new(cnc: Connection, schema: string, table_name: string): TreeMgrColumns
    _init(config?: TreeMgrColumns.ConstructorProperties): void
}

export module TreeMgrLabel {

    // Constructor properties interface

    export interface ConstructorProperties extends TreeManager.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.TreeMgrLabel

        label?: string | null
    }

}

export interface TreeMgrLabel {

    // Own properties of Gda-6.0.Gda.TreeMgrLabel

    readonly label: string | null

    // Own fields of Gda-6.0.Gda.TreeMgrLabel

    parent_instance: TreeManager & GObject.Object

    // Class property signals of Gda-6.0.Gda.TreeMgrLabel

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

export class TreeMgrLabel extends TreeManager {

    // Own properties of Gda-6.0.Gda.TreeMgrLabel

    static name: string
    static $gtype: GObject.GType<TreeMgrLabel>

    // Constructors of Gda-6.0.Gda.TreeMgrLabel

    constructor(config?: TreeMgrLabel.ConstructorProperties) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node labelled `label`
     * @constructor 
     * @param label a label string
     * @returns a new #GdaTreeManager object
     */
    constructor(label: string) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node labelled `label`
     * @constructor 
     * @param label a label string
     * @returns a new #GdaTreeManager object
     */
    static new(label: string): TreeMgrLabel
    _init(config?: TreeMgrLabel.ConstructorProperties): void
}

export module TreeMgrSchemas {

    // Constructor properties interface

    export interface ConstructorProperties extends TreeManager.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.TreeMgrSchemas

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
        metaStore?: MetaStore | null
    }

}

export interface TreeMgrSchemas {

    // Own properties of Gda-6.0.Gda.TreeMgrSchemas

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
    readonly metaStore: MetaStore

    // Own fields of Gda-6.0.Gda.TreeMgrSchemas

    parent_instance: TreeManager & GObject.Object

    // Class property signals of Gda-6.0.Gda.TreeMgrSchemas

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

export class TreeMgrSchemas extends TreeManager {

    // Own properties of Gda-6.0.Gda.TreeMgrSchemas

    static name: string
    static $gtype: GObject.GType<TreeMgrSchemas>

    // Constructors of Gda-6.0.Gda.TreeMgrSchemas

    constructor(config?: TreeMgrSchemas.ConstructorProperties) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each database schema found
     * in `cnc`.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @returns a new #GdaTreeManager object
     */
    constructor(cnc: Connection) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each database schema found
     * in `cnc`.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @returns a new #GdaTreeManager object
     */
    static new(cnc: Connection): TreeMgrSchemas
    _init(config?: TreeMgrSchemas.ConstructorProperties): void
}

export module TreeMgrSelect {

    // Constructor properties interface

    export interface ConstructorProperties extends TreeManager.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.TreeMgrSelect

        connection?: Connection | null
        params?: Set | null
        statement?: Statement | null
    }

}

export interface TreeMgrSelect {

    // Own properties of Gda-6.0.Gda.TreeMgrSelect

    readonly connection: Connection
    readonly params: Set
    readonly statement: Statement

    // Own fields of Gda-6.0.Gda.TreeMgrSelect

    parent_instance: TreeManager & GObject.Object

    // Class property signals of Gda-6.0.Gda.TreeMgrSelect

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

export class TreeMgrSelect extends TreeManager {

    // Own properties of Gda-6.0.Gda.TreeMgrSelect

    static name: string
    static $gtype: GObject.GType<TreeMgrSelect>

    // Constructors of Gda-6.0.Gda.TreeMgrSelect

    constructor(config?: TreeMgrSelect.ConstructorProperties) 
    /**
     * Creates a new #GdaTreeMgrSelect object which will add one tree node for each row in
     * the #GdaDataModel resulting from the execution of `stmt`.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param stmt a #GdaStatement object representing a SELECT statement
     * @param params a #GdaSet object representing fixed parameters which are to be used when executing `stmt`
     * @returns a new #GdaTreeManager object
     */
    constructor(cnc: Connection, stmt: Statement, params: Set) 
    /**
     * Creates a new #GdaTreeMgrSelect object which will add one tree node for each row in
     * the #GdaDataModel resulting from the execution of `stmt`.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param stmt a #GdaStatement object representing a SELECT statement
     * @param params a #GdaSet object representing fixed parameters which are to be used when executing `stmt`
     * @returns a new #GdaTreeManager object
     */
    static new(cnc: Connection, stmt: Statement, params: Set): TreeMgrSelect
    _init(config?: TreeMgrSelect.ConstructorProperties): void
}

export module TreeMgrTables {

    // Constructor properties interface

    export interface ConstructorProperties extends TreeManager.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.TreeMgrTables

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
        metaStore?: MetaStore | null
        /**
         * If no set, then the table name will be fetched from the parent node using the "schema" attribute. If not
         * found that way, then the list of visible tables (tables which can be identified without having to specify
         * a schema) will be used
         */
        schema?: string | null
    }

}

export interface TreeMgrTables {

    // Own properties of Gda-6.0.Gda.TreeMgrTables

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
    readonly metaStore: MetaStore
    /**
     * If no set, then the table name will be fetched from the parent node using the "schema" attribute. If not
     * found that way, then the list of visible tables (tables which can be identified without having to specify
     * a schema) will be used
     */
    readonly schema: string | null

    // Own fields of Gda-6.0.Gda.TreeMgrTables

    parent_instance: TreeManager & GObject.Object

    // Class property signals of Gda-6.0.Gda.TreeMgrTables

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

export class TreeMgrTables extends TreeManager {

    // Own properties of Gda-6.0.Gda.TreeMgrTables

    static name: string
    static $gtype: GObject.GType<TreeMgrTables>

    // Constructors of Gda-6.0.Gda.TreeMgrTables

    constructor(config?: TreeMgrTables.ConstructorProperties) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each table found in the
     * `schema` if it is not %NULL, or for each table visible by default in `cnc`.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param schema a schema name or %NULL
     * @returns a new #GdaTreeManager object
     */
    constructor(cnc: Connection, schema: string | null) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each table found in the
     * `schema` if it is not %NULL, or for each table visible by default in `cnc`.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param schema a schema name or %NULL
     * @returns a new #GdaTreeManager object
     */
    static new(cnc: Connection, schema: string | null): TreeMgrTables
    _init(config?: TreeMgrTables.ConstructorProperties): void
}

export module TreeNode {

    // Signal callback interfaces

    /**
     * Signal callback interface for `node-changed`
     */
    export interface NodeChangedSignalCallback {
        ($obj: TreeNode, node: TreeNode): void
    }

    /**
     * Signal callback interface for `node-deleted`
     */
    export interface NodeDeletedSignalCallback {
        ($obj: TreeNode, relative_path: string | null): void
    }

    /**
     * Signal callback interface for `node-has-child-toggled`
     */
    export interface NodeHasChildToggledSignalCallback {
        ($obj: TreeNode, node: TreeNode): void
    }

    /**
     * Signal callback interface for `node-inserted`
     */
    export interface NodeInsertedSignalCallback {
        ($obj: TreeNode, node: TreeNode): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.TreeNode

        name?: string | null
    }

}

export interface TreeNode {

    // Own properties of Gda-6.0.Gda.TreeNode

    name: string | null

    // Own fields of Gda-6.0.Gda.TreeNode

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.TreeNode

    /**
     * Get the value associated to the attribute named `attribute` for `node`. If the attribute is not set,
     * then `node'`s parents is queries (recursively up to the top level node).
     * 
     * Attributes can have any name, but Libgda proposes some default names,
     * see <link linkend="libgda-40-Attributes-manager.synopsis">this section</link>.
     * @param attribute attribute name as a string
     * @returns a read-only #GValue, or %NULL if not attribute named @attribute has been set for @node
     */
    fetch_attribute(attribute: string): any
    /**
     * Get the #GdaTreeNode child of `node` at position `index` (starting at 0).
     * @param index a index
     * @returns the #GdaTreeNode, or %NULL if not found
     */
    get_child_index(index: number): TreeNode
    /**
     * Get the #GdaTreeNode child of `node` which has the #GDA_ATTRIBUTE_NAME set to `name`
     * @param name requested node's name
     * @returns the #GdaTreeNode, or %NULL if not found
     */
    get_child_name(name: string): TreeNode
    /**
     * Get a list of all `node'`s children, free it with g_slist_free() after usage
     * @returns a new #GSList of #GdaTreeNode objects, or %NULL if @node does not have any child
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
     * @returns a read-only #GValue, or %NULL if not attribute named @attribute has been set for @node
     */
    get_node_attribute(attribute: string): any
    /**
     * Get the #GdaTreeNode parent of `node` in the #GdaTree node belongs to. If `node` is at the top level,
     * then this method return %NULL.
     * @returns the parent #GdaTreeNode
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

    // Own virtual methods of Gda-6.0.Gda.TreeNode

    vfunc_dump_children(prefix: string, in_string: GLib.String): void
    vfunc_dump_header(): string | null
    vfunc_node_changed(node: TreeNode): void
    vfunc_node_deleted(relative_path: string): void
    vfunc_node_has_child_toggled(node: TreeNode): void
    vfunc_node_inserted(node: TreeNode): void

    // Own signals of Gda-6.0.Gda.TreeNode

    connect(sigName: "node-changed", callback: TreeNode.NodeChangedSignalCallback): number
    connect_after(sigName: "node-changed", callback: TreeNode.NodeChangedSignalCallback): number
    emit(sigName: "node-changed", node: TreeNode, ...args: any[]): void
    connect(sigName: "node-deleted", callback: TreeNode.NodeDeletedSignalCallback): number
    connect_after(sigName: "node-deleted", callback: TreeNode.NodeDeletedSignalCallback): number
    emit(sigName: "node-deleted", relative_path: string | null, ...args: any[]): void
    connect(sigName: "node-has-child-toggled", callback: TreeNode.NodeHasChildToggledSignalCallback): number
    connect_after(sigName: "node-has-child-toggled", callback: TreeNode.NodeHasChildToggledSignalCallback): number
    emit(sigName: "node-has-child-toggled", node: TreeNode, ...args: any[]): void
    connect(sigName: "node-inserted", callback: TreeNode.NodeInsertedSignalCallback): number
    connect_after(sigName: "node-inserted", callback: TreeNode.NodeInsertedSignalCallback): number
    emit(sigName: "node-inserted", node: TreeNode, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.TreeNode

    connect(sigName: "notify::name", callback: (($obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TreeNode extends GObject.Object {

    // Own properties of Gda-6.0.Gda.TreeNode

    static name: string
    static $gtype: GObject.GType<TreeNode>

    // Constructors of Gda-6.0.Gda.TreeNode

    constructor(config?: TreeNode.ConstructorProperties) 
    /**
     * Creates a new #GdaTreeNode object
     * @constructor 
     * @param name a name, or %NULL
     * @returns a new #GdaTreeNode
     */
    constructor(name: string | null) 
    /**
     * Creates a new #GdaTreeNode object
     * @constructor 
     * @param name a name, or %NULL
     * @returns a new #GdaTreeNode
     */
    static new(name: string | null): TreeNode
    _init(config?: TreeNode.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export interface UShort {
}

export class UShort {

    // Own properties of Gda-6.0.Gda.UShort

    static name: string
}

export module XaTransaction {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.XaTransaction

        formatId?: number | null
        transactionId?: string | null
    }

}

export interface XaTransaction {

    // Own properties of Gda-6.0.Gda.XaTransaction

    readonly formatId: number
    readonly transactionId: string | null

    // Own fields of Gda-6.0.Gda.XaTransaction

    parent_instance: GObject.Object

    // Owm methods of Gda-6.0.Gda.XaTransaction

    /**
     * Begins a distributed transaction (managed by `xa_trans)`. Please note that this phase may fail
     * for some connections if a (normal) transaction is already started (this depends on the database
     * provider being used), so it's better to avoid starting any (normal) transaction on any of the
     * connections registered with `xa_trans`.
     * @returns TRUE if no error occurred
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
     * @returns TRUE if no error occurred (there may be some connections to recover, though)
     */
    commit(): [ /* returnType */ boolean, /* cnc_to_recover */ Connection[] | null ]
    /**
     * Tries to commit the data prepared but which failed to commit (see gda_xa_transaction_commit()). This
     * method allows one to terminate a distributed transaction which succeeded but for which some
     * connections needed to be recovered.
     * @returns %TRUE if all the data which was still uncommitted has been committed
     */
    commit_recovered(): [ /* returnType */ boolean, /* cnc_to_recover */ Connection[] | null ]
    /**
     * Registers `cnc` to be used by `xa_trans` to create a distributed transaction.
     * 
     * Note: any #GdaConnection object can only be registered with at most one #GdaXaTransaction object; also
     * some connections may not be registered at all with a #GdaXaTransaction object because the database
     * provider being used does not support it.
     * @param cnc the connection to add to `xa_trans`
     * @param branch the branch qualifier
     * @returns %TRUE if no error occurred
     */
    register_connection(cnc: Connection, branch: string): boolean
    /**
     * Cancels a distributed transaction (managed by `xa_trans)`.
     * @returns %TRUE if no error occurred
     */
    rollback(): boolean
    /**
     * Unregisters `cnc` to be used by `xa_trans` to create a distributed transaction. This is
     * the opposite of gda_xa_transaction_register_connection().
     * @param cnc the connection to add to `xa_trans`
     */
    unregister_connection(cnc: Connection): void

    // Class property signals of Gda-6.0.Gda.XaTransaction

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

export class XaTransaction extends GObject.Object {

    // Own properties of Gda-6.0.Gda.XaTransaction

    static name: string
    static $gtype: GObject.GType<XaTransaction>

    // Constructors of Gda-6.0.Gda.XaTransaction

    constructor(config?: XaTransaction.ConstructorProperties) 
    /**
     * Creates a new #GdaXaTransaction object, which will control the process of
     * performing a distributed transaction across several connections.
     * @constructor 
     * @param format a format ID
     * @param global_transaction_id the global transaction ID
     * @returns the newly created object.
     */
    constructor(format: number, global_transaction_id: string) 
    /**
     * Creates a new #GdaXaTransaction object, which will control the process of
     * performing a distributed transaction across several connections.
     * @constructor 
     * @param format a format ID
     * @param global_transaction_id the global transaction ID
     * @returns the newly created object.
     */
    static new(format: number, global_transaction_id: string): XaTransaction
    _init(config?: XaTransaction.ConstructorProperties): void
    static error_quark(): GLib.Quark
    /**
     * Creates a new #GdaXaTransactionId structure from its string representation, it's the opposite
     * of gda_xa_transaction_id_to_string().
     * @param str a string representation of a #GdaXaTransactionId, in the "gtrid,bqual,formatID" format
     * @returns a new #GdaXaTransactionId structure, or %NULL in @str has a wrong format Free-function: g_free
     */
    static string_to_id(str: string): XaTransactionId
}

export interface BatchClass {

    // Own fields of Gda-6.0.Gda.BatchClass

    parent_class: GObject.ObjectClass
    changed: (batch: Batch, changed_stmt: Statement) => void
}

export abstract class BatchClass {

    // Own properties of Gda-6.0.Gda.BatchClass

    static name: string
}

export interface Binary {

    // Owm methods of Gda-6.0.Gda.Binary

    /**
     * Creates a new #GdaBinary structure from an existing one.
     * @returns a newly allocated #GdaBinary which contains a copy of information in @boxed.
     */
    copy(): Binary
    /**
     * Deallocates all memory associated to the given #GdaBinary.
     */
    free(): void
    get_data(): any | null
    get_size(): number
    /**
     * Frees data referenced by #GdaBinary
     */
    reset_data(): void
    /**
     * Set binary data to a #GdaBinary, holding a copy of the data.
     * @param val value to be copied by #GdaBinary.
     */
    set_data(val: Uint8Array): void
    /**
     * Set binary data to a #GdaBinary, directly holding `val` (no copy made).
     * @param val value to be taken by #GdaBinary.
     */
    take_data(val: Uint8Array): void
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
     * @returns a new string from @bin
     */
    to_string(maxlen: number): string | null
}

export class Binary {

    // Own properties of Gda-6.0.Gda.Binary

    static name: string

    // Constructors of Gda-6.0.Gda.Binary

    /**
     * Creates a new #GdaBinary coping data.
     * @constructor 
     * @returns the newly created #GdaBinary.
     */
    constructor() 
    /**
     * Creates a new #GdaBinary coping data.
     * @constructor 
     * @returns the newly created #GdaBinary.
     */
    static new(): Binary
}

export interface Blob {

    // Owm methods of Gda-6.0.Gda.Blob

    /**
     * Creates a new #GdaBlob structure from an existing one.
     * @returns a newly allocated #GdaBlob which contains a copy of information in @boxed.
     */
    copy(): Blob
    /**
     * Deallocates all memory associated to the given #GdaBlob.
     */
    free(): void
    get_binary(): Binary
    get_op(): BlobOp
    /**
     * Correctly assigns `op` to `blob` (increases `op'`s reference count)
     * @param op a #GdaBlobOp object, or %NULL
     */
    set_op(op: BlobOp | null): void
    /**
     * Converts all the non printable characters of blob->data into the \xxx representation
     * where xxx is the octal representation of the byte, and the '\' (backslash) character
     * is converted to "\\".
     * @param maxlen a maximum len used to truncate, or 0 for no maximum length
     * @returns a new string from @blob
     */
    to_string(maxlen: number): string | null
}

/**
 * Represents some binary data, accessed through a #GdaBlobOp object.
 * `op` is generally set up by database providers when giving access to an existing BLOB in
 * a database, but can be modified if needed using gda_blob_set_op().
 * @record 
 */
export class Blob {

    // Own properties of Gda-6.0.Gda.Blob

    static name: string

    // Constructors of Gda-6.0.Gda.Blob

    /**
     * Creates a new #GdaBlob.
     * @constructor 
     * @returns a newly allocated #GdaBlob.
     */
    constructor() 
    /**
     * Creates a new #GdaBlob.
     * @constructor 
     * @returns a newly allocated #GdaBlob.
     */
    static new(): Blob
}

export interface BlobOpClass {

    // Own fields of Gda-6.0.Gda.BlobOpClass

    parent_class: GObject.ObjectClass
    functions: any
    padding: any[]
}

export abstract class BlobOpClass {

    // Own properties of Gda-6.0.Gda.BlobOpClass

    static name: string
}

export interface BlobOpFunctions {

    // Own fields of Gda-6.0.Gda.BlobOpFunctions

    get_length: (op: BlobOp) => number
    read: (op: BlobOp, blob: Blob, offset: number, size: number) => number
    write: (op: BlobOp, blob: Blob, offset: number) => number
    write_all: (op: BlobOp, blob: Blob) => boolean
}

export class BlobOpFunctions {

    // Own properties of Gda-6.0.Gda.BlobOpFunctions

    static name: string
}

export interface ColumnClass {

    // Own fields of Gda-6.0.Gda.ColumnClass

    parent_class: GObject.ObjectClass
    name_changed: (column: Column, old_name: string) => void
    g_type_changed: (column: Column, old_type: GObject.GType, new_type: GObject.GType) => void
}

export abstract class ColumnClass {

    // Own properties of Gda-6.0.Gda.ColumnClass

    static name: string
}

export interface ConfigClass {

    // Own fields of Gda-6.0.Gda.ConfigClass

    parent_class: GObject.ObjectClass
    dsn_added: (conf: Config, new_dsn: DsnInfo) => void
    dsn_to_be_removed: (conf: Config, old_dsn: DsnInfo) => void
    dsn_removed: (conf: Config, old_dsn: DsnInfo) => void
    dsn_changed: (conf: Config, dsn: DsnInfo) => void
}

export abstract class ConfigClass {

    // Own properties of Gda-6.0.Gda.ConfigClass

    static name: string
}

export interface ConnectionClass {

    // Own fields of Gda-6.0.Gda.ConnectionClass

    object_class: GObject.ObjectClass
    status_changed: (obj: Connection, status: ConnectionStatus) => void
    error: (cnc: Connection, error: ConnectionEvent) => void
    opened: (obj: Connection) => void
    closed: (obj: Connection) => void
    dsn_changed: (obj: Connection) => void
    transaction_status_changed: (obj: Connection) => void
}

export abstract class ConnectionClass {

    // Own properties of Gda-6.0.Gda.ConnectionClass

    static name: string
}

export interface ConnectionEventClass {

    // Own fields of Gda-6.0.Gda.ConnectionEventClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class ConnectionEventClass {

    // Own properties of Gda-6.0.Gda.ConnectionEventClass

    static name: string
}

export interface DataAccessWrapperClass {

    // Own fields of Gda-6.0.Gda.DataAccessWrapperClass

    parent_class: GObject.ObjectClass
}

export abstract class DataAccessWrapperClass {

    // Own properties of Gda-6.0.Gda.DataAccessWrapperClass

    static name: string
}

export interface DataComparatorClass {

    // Own fields of Gda-6.0.Gda.DataComparatorClass

    parent_class: GObject.ObjectClass
    diff_computed: (comp: DataComparator, diff: Diff) => boolean
}

export abstract class DataComparatorClass {

    // Own properties of Gda-6.0.Gda.DataComparatorClass

    static name: string
}

export interface DataHandlerInterface {

    // Own fields of Gda-6.0.Gda.DataHandlerInterface

    g_iface: GObject.TypeInterface
    get_sql_from_value: (dh: DataHandler, value: any | null) => string | null
    get_str_from_value: (dh: DataHandler, value: any | null) => string | null
    get_value_from_sql: (dh: DataHandler, sql: string | null, type: GObject.GType) => any
    get_value_from_str: (dh: DataHandler, str: string | null, type: GObject.GType) => any
    get_sane_init_value: (dh: DataHandler, type: GObject.GType) => any | null
    accepts_g_type: (dh: DataHandler, type: GObject.GType) => boolean
    get_descr: (dh: DataHandler) => string
}

export abstract class DataHandlerInterface {

    // Own properties of Gda-6.0.Gda.DataHandlerInterface

    static name: string
}

export interface DataModelArrayClass {

    // Own fields of Gda-6.0.Gda.DataModelArrayClass

    parent_class: GObject.ObjectClass
}

export abstract class DataModelArrayClass {

    // Own properties of Gda-6.0.Gda.DataModelArrayClass

    static name: string
}

export interface DataModelDirClass {

    // Own fields of Gda-6.0.Gda.DataModelDirClass

    parent_class: GObject.ObjectClass
}

export abstract class DataModelDirClass {

    // Own properties of Gda-6.0.Gda.DataModelDirClass

    static name: string
}

export interface DataModelIface {
}

export abstract class DataModelIface {

    // Own properties of Gda-6.0.Gda.DataModelIface

    static name: string
}

export interface DataModelImportClass {

    // Own fields of Gda-6.0.Gda.DataModelImportClass

    parent_class: GObject.ObjectClass
}

export abstract class DataModelImportClass {

    // Own properties of Gda-6.0.Gda.DataModelImportClass

    static name: string
}

export interface DataModelImportIterClass {

    // Own fields of Gda-6.0.Gda.DataModelImportIterClass

    parent_class: DataModelIterClass
}

export abstract class DataModelImportIterClass {

    // Own properties of Gda-6.0.Gda.DataModelImportIterClass

    static name: string
}

export interface DataModelInterface {

    // Own fields of Gda-6.0.Gda.DataModelInterface

    g_iface: GObject.TypeInterface
    get_n_rows: (model: DataModel) => number
    get_n_columns: (model: DataModel) => number
    get_access_flags: (model: DataModel) => DataModelAccessFlags
    get_value_at: (model: DataModel, col: number, row: number) => any
    get_attributes_at: (model: DataModel, col: number, row: number) => ValueAttribute
    set_value_at: (model: DataModel, col: number, row: number, value: any) => boolean
    append_row: (model: DataModel) => number
    remove_row: (model: DataModel, row: number) => boolean
    freeze: (model: DataModel) => void
    thaw: (model: DataModel) => void
    get_notify: (model: DataModel) => boolean
    send_hint: (model: DataModel, hint: DataModelHint, hint_value: any) => void
    get_exceptions: (model: DataModel) => GLib.Error
    row_inserted: (model: DataModel, row: number) => void
    row_updated: (model: DataModel, row: number) => void
    row_removed: (model: DataModel, row: number) => void
    changed: (model: DataModel) => void
    reset: (model: DataModel) => void
    access_changed: (model: DataModel) => void
}

export class DataModelInterface {

    // Own properties of Gda-6.0.Gda.DataModelInterface

    static name: string
}

export interface DataModelIterClass {

    // Own fields of Gda-6.0.Gda.DataModelIterClass

    parent_class: SetClass
    move_to_row: (iter: DataModelIter, row: number) => boolean
    move_next: (iter: DataModelIter) => boolean
    move_prev: (iter: DataModelIter) => boolean
    set_value_at: (iter: DataModelIter, col: number, value: any) => boolean
    row_changed: (iter: DataModelIter, row: number) => void
    end_of_data: (iter: DataModelIter) => void
}

export abstract class DataModelIterClass {

    // Own properties of Gda-6.0.Gda.DataModelIterClass

    static name: string
}

export interface DataModelSelectClass {

    // Own fields of Gda-6.0.Gda.DataModelSelectClass

    parent_class: GObject.ObjectClass
    updated: (model: DataModelSelect) => void
}

export abstract class DataModelSelectClass {

    // Own properties of Gda-6.0.Gda.DataModelSelectClass

    static name: string
}

export interface DataPivotClass {

    // Own fields of Gda-6.0.Gda.DataPivotClass

    parent_class: GObject.ObjectClass
}

export abstract class DataPivotClass {

    // Own properties of Gda-6.0.Gda.DataPivotClass

    static name: string
}

export interface DataProxyClass {

    // Own fields of Gda-6.0.Gda.DataProxyClass

    parent_class: GObject.ObjectClass
    row_delete_changed: (proxy: DataProxy, row: number, to_be_deleted: boolean) => void
    sample_size_changed: (proxy: DataProxy, sample_size: number) => void
    sample_changed: (proxy: DataProxy, sample_start: number, sample_end: number) => void
    validate_row_changes: (proxy: DataProxy, row: number, proxied_row: number) => GLib.Error
    row_changes_applied: (proxy: DataProxy, row: number, proxied_row: number) => void
    filter_changed: (proxy: DataProxy) => void
}

export abstract class DataProxyClass {

    // Own properties of Gda-6.0.Gda.DataProxyClass

    static name: string
}

export interface DataSelectClass {

    // Own fields of Gda-6.0.Gda.DataSelectClass

    parent_class: GObject.ObjectClass
    fetch_nb_rows: (model: DataSelect) => number
    fetch_random: (model: DataSelect, prow: Row, rownum: number) => boolean
    store_all: (model: DataSelect) => boolean
    fetch_next: (model: DataSelect, prow: Row, rownum: number) => boolean
    fetch_prev: (model: DataSelect, prow: Row, rownum: number) => boolean
    fetch_at: (model: DataSelect, prow: Row, rownum: number) => boolean
}

export abstract class DataSelectClass {

    // Own properties of Gda-6.0.Gda.DataSelectClass

    static name: string
}

export interface DataSelectIterClass {

    // Own fields of Gda-6.0.Gda.DataSelectIterClass

    parent_class: DataModelIterClass
}

export abstract class DataSelectIterClass {

    // Own properties of Gda-6.0.Gda.DataSelectIterClass

    static name: string
}

export interface DbBaseClass {

    // Own fields of Gda-6.0.Gda.DbBaseClass

    parent: GObject.ObjectClass
}

export abstract class DbBaseClass {

    // Own properties of Gda-6.0.Gda.DbBaseClass

    static name: string
}

export interface DbBuildableInterface {

    // Own fields of Gda-6.0.Gda.DbBuildableInterface

    parent_iface: GObject.TypeInterface
    parse_node: (self: DbBuildable, node: libxml2.NodePtr) => boolean
    write_node: (self: DbBuildable, node: libxml2.NodePtr) => boolean
}

export abstract class DbBuildableInterface {

    // Own properties of Gda-6.0.Gda.DbBuildableInterface

    static name: string
}

export interface DbCatalogClass {

    // Own fields of Gda-6.0.Gda.DbCatalogClass

    parent: GObject.ObjectClass
}

export abstract class DbCatalogClass {

    // Own properties of Gda-6.0.Gda.DbCatalogClass

    static name: string
}

export interface DbColumnClass {

    // Own fields of Gda-6.0.Gda.DbColumnClass

    parent: GObject.ObjectClass
}

export abstract class DbColumnClass {

    // Own properties of Gda-6.0.Gda.DbColumnClass

    static name: string
}

export interface DbFkeyClass {

    // Own fields of Gda-6.0.Gda.DbFkeyClass

    parent_class: GObject.ObjectClass
}

export abstract class DbFkeyClass {

    // Own properties of Gda-6.0.Gda.DbFkeyClass

    static name: string
}

export interface DbIndexClass {

    // Own fields of Gda-6.0.Gda.DbIndexClass

    parent_class: DbBaseClass
}

export abstract class DbIndexClass {

    // Own properties of Gda-6.0.Gda.DbIndexClass

    static name: string
}

export interface DbIndexFieldClass {

    // Own fields of Gda-6.0.Gda.DbIndexFieldClass

    parent_class: GObject.ObjectClass
}

export abstract class DbIndexFieldClass {

    // Own properties of Gda-6.0.Gda.DbIndexFieldClass

    static name: string
}

export interface DbTableClass {

    // Own fields of Gda-6.0.Gda.DbTableClass

    parent_class: DbBaseClass
}

export abstract class DbTableClass {

    // Own properties of Gda-6.0.Gda.DbTableClass

    static name: string
}

export interface DbViewClass {

    // Own fields of Gda-6.0.Gda.DbViewClass

    parent_class: DbBaseClass
}

export abstract class DbViewClass {

    // Own properties of Gda-6.0.Gda.DbViewClass

    static name: string
}

export interface DdlModifiableInterface {

    // Own fields of Gda-6.0.Gda.DdlModifiableInterface

    parent_iface: GObject.TypeInterface
    create: (self: DdlModifiable, cnc: Connection) => boolean
    drop: (self: DdlModifiable, cnc: Connection) => boolean
    rename: (self: DdlModifiable, cnc: Connection) => boolean
}

export abstract class DdlModifiableInterface {

    // Own properties of Gda-6.0.Gda.DdlModifiableInterface

    static name: string
}

export interface Diff {

    // Own fields of Gda-6.0.Gda.Diff

    type: DiffType
    old_row: number
    new_row: number
    values: GLib.HashTable
}

export class Diff {

    // Own properties of Gda-6.0.Gda.Diff

    static name: string
}

export interface DsnInfo {

    // Own fields of Gda-6.0.Gda.DsnInfo

    /**
     * the (unique) name of the DSN (plain text, not RFC 1738 encoded)
     * @field 
     */
    name: string | null
    /**
     * the ID of the database provider to be used (plain text, not RFC 1738 encoded)
     * @field 
     */
    provider: string | null
    /**
     * a descriptive string (plain text, not RFC 1738 encoded), can be %NULL.
     * @field 
     */
    description: string | null
    /**
     * the connection string, a semi-colon separated &lt;key>=&lt;value&gt; list where &lt;key&gt; and &lt;value&gt; are RFC 1738 encoded
     * @field 
     */
    cnc_string: string | null
    /**
     * the authentication string, a semi-colon separated &lt;key>=&lt;value&gt; list where &lt;key&gt; and &lt;value&gt; are RFC 1738 encoded. Can be %NULL.
     * @field 
     */
    auth_string: string | null
    /**
     * %TRUE if the DSN is a system wide defined data source
     * @field 
     */
    is_system: boolean

    // Owm methods of Gda-6.0.Gda.DsnInfo

    /**
     * Copy constructor.
     * @returns a new #GdaDsnInfo
     */
    copy(): DsnInfo
    /**
     * Compares `dsn1` and `dsn2`.
     * 
     * If both `dsn1` and `dsn2` are %NULL, then the function returns %TRUE.
     * If only one of `dsn1` or `dsn2` is %NULL, then the function return %FALSE.
     * @param dsn2 a #GdaDsnInfo
     * @returns %TRUE if they are equal.
     */
    equal(dsn2: DsnInfo | null): boolean
    /**
     * Frees any resources taken by `dsn` struct. If `dsn` is %NULL, then nothing happens.
     */
    free(): void
}

/**
 * This structure defines the properties of a named data source (DSN).
 * @record 
 */
export class DsnInfo {

    // Own properties of Gda-6.0.Gda.DsnInfo

    static name: string

    // Constructors of Gda-6.0.Gda.DsnInfo

    /**
     * Creates a new empty #GdaDsnInfo struct.
     * @constructor 
     * @returns a new #GdaDsnInfo struct.
     */
    constructor() 
    /**
     * Creates a new empty #GdaDsnInfo struct.
     * @constructor 
     * @returns a new #GdaDsnInfo struct.
     */
    static new(): DsnInfo
}

export interface GeometricPoint {

    // Owm methods of Gda-6.0.Gda.GeometricPoint

    copy(): GeometricPoint
    free(): void
    get_x(): number
    get_y(): number
    set_x(x: number): void
    set_y(y: number): void
}

export class GeometricPoint {

    // Own properties of Gda-6.0.Gda.GeometricPoint

    static name: string

    // Constructors of Gda-6.0.Gda.GeometricPoint

    constructor() 
    static new(): GeometricPoint
}

export interface HandlerBinClass {

    // Own fields of Gda-6.0.Gda.HandlerBinClass

    parent_class: GObject.ObjectClass
}

export abstract class HandlerBinClass {

    // Own properties of Gda-6.0.Gda.HandlerBinClass

    static name: string
}

export interface HandlerBooleanClass {

    // Own fields of Gda-6.0.Gda.HandlerBooleanClass

    parent_class: GObject.ObjectClass
}

export abstract class HandlerBooleanClass {

    // Own properties of Gda-6.0.Gda.HandlerBooleanClass

    static name: string
}

export interface HandlerNumericalClass {

    // Own fields of Gda-6.0.Gda.HandlerNumericalClass

    parent_class: GObject.ObjectClass
}

export abstract class HandlerNumericalClass {

    // Own properties of Gda-6.0.Gda.HandlerNumericalClass

    static name: string
}

export interface HandlerStringClass {

    // Own fields of Gda-6.0.Gda.HandlerStringClass

    parent_class: GObject.ObjectClass
}

export abstract class HandlerStringClass {

    // Own properties of Gda-6.0.Gda.HandlerStringClass

    static name: string
}

export interface HandlerTextClass {

    // Own fields of Gda-6.0.Gda.HandlerTextClass

    parent_class: GObject.ObjectClass
}

export abstract class HandlerTextClass {

    // Own properties of Gda-6.0.Gda.HandlerTextClass

    static name: string
}

export interface HandlerTimeClass {

    // Own fields of Gda-6.0.Gda.HandlerTimeClass

    parent_class: GObject.ObjectClass
}

export abstract class HandlerTimeClass {

    // Own properties of Gda-6.0.Gda.HandlerTimeClass

    static name: string
}

export interface HandlerTypeClass {

    // Own fields of Gda-6.0.Gda.HandlerTypeClass

    parent_class: GObject.ObjectClass
}

export abstract class HandlerTypeClass {

    // Own properties of Gda-6.0.Gda.HandlerTypeClass

    static name: string
}

export interface HolderClass {

    // Own fields of Gda-6.0.Gda.HolderClass

    parent_class: GObject.ObjectClass
    changed: (holder: Holder) => void
    source_changed: (holder: Holder) => void
    validate_change: (holder: Holder, new_value: any) => GLib.Error
    to_default: (holder: Holder) => void
}

export abstract class HolderClass {

    // Own properties of Gda-6.0.Gda.HolderClass

    static name: string
}

export interface LockableInterface {

    // Own fields of Gda-6.0.Gda.LockableInterface

    g_iface: GObject.TypeInterface
    lock: (lockable: Lockable) => void
    trylock: (lockable: Lockable) => boolean
    unlock: (lockable: Lockable) => void
}

export abstract class LockableInterface {

    // Own properties of Gda-6.0.Gda.LockableInterface

    static name: string
}

export interface MetaContext {

    // Own fields of Gda-6.0.Gda.MetaContext

    /**
     * the name of the table <emphasis>in the GdaMetaStore's internal database</emphasis>
     * @field 
     */
    table_name: string | null
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

    // Owm methods of Gda-6.0.Gda.MetaContext

    /**
     * Copy constructor.
     * @returns a new #GdaMetaContext
     */
    copy(): MetaContext
    /**
     * Frees any resources taken by `ctx` struct. If `ctx` is %NULL, then nothing happens.
     */
    free(): void
    get_n_columns(): number
    /**
     * Get table's name to used in the context.
     * @returns A string with the table's name used in the context.
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
    /**
     * Creates a string representation of given context.
     * @returns a new string with the representation of the context
     */
    stringify(): string | null
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
export class MetaContext {

    // Own properties of Gda-6.0.Gda.MetaContext

    static name: string

    // Constructors of Gda-6.0.Gda.MetaContext

    /**
     * Creates a new #GdaMetaContext struct with a #GHashTable to store column/value pairs.
     * @constructor 
     * @returns a new #GdaMetaContext struct with a new created hash to store column name/value pairs.
     */
    constructor() 
    /**
     * Creates a new #GdaMetaContext struct with a #GHashTable to store column/value pairs.
     * @constructor 
     * @returns a new #GdaMetaContext struct with a new created hash to store column name/value pairs.
     */
    static new(): MetaContext
}

export interface MetaDbObject {

    // Own fields of Gda-6.0.Gda.MetaDbObject

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
    obj_catalog: string | null
    /**
     * the schema the object is in
     * @field 
     */
    obj_schema: string | null
    /**
     * the object's name
     * @field 
     */
    obj_name: string | null
    /**
     * the shortest way to name the object
     * @field 
     */
    obj_short_name: string | null
    /**
     * the full name of the object (in the &lt;schema&gt;.&lt;nameagt; notation
     * @field 
     */
    obj_full_name: string | null
    /**
     * object's owner
     * @field 
     */
    obj_owner: string | null
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
export class MetaDbObject {

    // Own properties of Gda-6.0.Gda.MetaDbObject

    static name: string
}

export interface MetaStoreChange {

    // Owm methods of Gda-6.0.Gda.MetaStoreChange

    copy(): MetaStoreChange
    free(): void
    get_change_type(): MetaStoreChangeType
    get_keys(): GLib.HashTable
    get_table_name(): string | null
    set_change_type(ctype: MetaStoreChangeType): void
    set_table_name(table_name: string): void
}

export class MetaStoreChange {

    // Own properties of Gda-6.0.Gda.MetaStoreChange

    static name: string

    // Constructors of Gda-6.0.Gda.MetaStoreChange

    /**
     * Creates a new #GdaMetaStoreChange
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdaMetaStoreChange
     * @constructor 
     */
    static new(): MetaStoreChange
}

export interface MetaStoreClass {

    // Own fields of Gda-6.0.Gda.MetaStoreClass

    parent_class: GObject.ObjectClass
    meta_reset: (store: MetaStore) => void
    suggest_update: (store: MetaStore, suggest: MetaContext) => GLib.Error
}

export abstract class MetaStoreClass {

    // Own properties of Gda-6.0.Gda.MetaStoreClass

    static name: string
}

export interface MetaStructClass {

    // Own fields of Gda-6.0.Gda.MetaStructClass

    parent_class: GObject.ObjectClass
}

export abstract class MetaStructClass {

    // Own properties of Gda-6.0.Gda.MetaStructClass

    static name: string
}

export interface MetaTable {

    // Own fields of Gda-6.0.Gda.MetaTable

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
export class MetaTable {

    // Own properties of Gda-6.0.Gda.MetaTable

    static name: string
}

export interface MetaTableColumn {

    // Own fields of Gda-6.0.Gda.MetaTableColumn

    /**
     * the column's name
     * @field 
     */
    column_name: string | null
    /**
     * the column's DBMS's type
     * @field 
     */
    column_type: string | null
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
    default_value: string | null
    auto_incement: boolean
    desc: string | null
}

/**
 * This structure represents a table of view's column, its contents must not be modified.
 * @record 
 */
export class MetaTableColumn {

    // Own properties of Gda-6.0.Gda.MetaTableColumn

    static name: string
}

export interface MetaTableForeignKey {

    // Own fields of Gda-6.0.Gda.MetaTableForeignKey

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
    fk_names_array: string | null
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
    ref_pk_names_array: string | null
    fk_name: string | null
}

/**
 * This structure represents a foreign key constraint, its contents must not be modified.
 * @record 
 */
export class MetaTableForeignKey {

    // Own properties of Gda-6.0.Gda.MetaTableForeignKey

    static name: string
}

export interface MetaView {

    // Own fields of Gda-6.0.Gda.MetaView

    /**
     * a view is also a table as it has columns
     * @field 
     */
    table: MetaTable
    /**
     * views' definition
     * @field 
     */
    view_def: string | null
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
export class MetaView {

    // Own properties of Gda-6.0.Gda.MetaView

    static name: string
}

export interface Numeric {

    // Owm methods of Gda-6.0.Gda.Numeric

    /**
     * Creates a new #GdaNumeric structure from an existing one.
     * @returns a newly allocated #GdaNumeric which contains a copy of information in @boxed. Free-function: gda_numeric_free
     */
    copy(): Numeric
    /**
     * Deallocates all memory associated to the given `boxed`
     */
    free(): void
    get_double(): number
    /**
     * Gets the precision of a #GdaNumeric.
     * @returns an integer with the precision of a #GdaNumeric.
     */
    get_precision(): number
    /**
     * Get the string representation of `numeric,` in the C locale format (dot as a fraction separator).
     * @returns a new string representing the stored valued in @numeric
     */
    get_string(): string | null
    /**
     * Gets the width of a #GdaNumeric. (Not yet implemented).
     * @returns an integer with the width of a #GdaNumeric. (Not jet implemented).
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
export class Numeric {

    // Own properties of Gda-6.0.Gda.Numeric

    static name: string

    // Constructors of Gda-6.0.Gda.Numeric

    /**
     * Creates a new #GdaNumeric with defaults.
     * @constructor 
     * @returns a new #GdaNumeric.
     */
    constructor() 
    /**
     * Creates a new #GdaNumeric with defaults.
     * @constructor 
     * @returns a new #GdaNumeric.
     */
    static new(): Numeric
}

export interface PStmtClass {

    // Own fields of Gda-6.0.Gda.PStmtClass

    parent_class: GObject.ObjectClass
}

export abstract class PStmtClass {

    // Own properties of Gda-6.0.Gda.PStmtClass

    static name: string
}

export interface ProviderInfo {

    // Own fields of Gda-6.0.Gda.ProviderInfo

    /**
     * the unique identifier of the database provider
     * @field 
     */
    id: string | null
    /**
     * the complete path to the shared library implementing the database provider
     * @field 
     */
    location: string | null
    /**
     * provider's description
     * @field 
     */
    description: string | null
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
    icon_id: string | null
}

/**
 * This structure holds the information associated to a database provider as discovered by Libgda.
 * @record 
 */
export class ProviderInfo {

    // Own properties of Gda-6.0.Gda.ProviderInfo

    static name: string
}

export interface ProviderInterface {

    // Own fields of Gda-6.0.Gda.ProviderInterface

    g_iface: GObject.TypeInterface
    get_name: (provider: Provider) => string
    get_version: (provider: Provider) => string
    get_server_version: (provider: Provider, cnc: Connection) => string
    supports_feature: (provider: Provider, cnc: Connection, feature: ConnectionFeature) => boolean
    create_connection: (provider: Provider) => Connection
    create_parser: (provider: Provider, cnc: Connection) => SqlParser
    get_data_handler: (provider: Provider, cnc: Connection, g_type: GObject.GType, dbms_type: string) => DataHandler
    get_def_dbms_type: (provider: Provider, cnc: Connection, g_type: GObject.GType) => string
    supports_operation: (provider: Provider, cnc: Connection, type: ServerOperationType, options: Set) => boolean
    create_operation: (provider: Provider, cnc: Connection, type: ServerOperationType, options: Set) => ServerOperation
    render_operation: (provider: Provider, cnc: Connection, op: ServerOperation) => string | null
    statement_to_sql: (provider: Provider, cnc: Connection, stmt: Statement, params: Set | null, flags: StatementSqlFlag) => [ /* returnType */ string | null, /* params_used */ Holder[] | null ]
    identifier_quote: (provider: Provider, cnc: Connection | null, id: string, for_meta_store: boolean, force_quotes: boolean) => string | null
    statement_rewrite: (provider: Provider, cnc: Connection, stmt: Statement, params: Set) => SqlStatement
    open_connection: (provider: Provider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    prepare_connection: (provider: Provider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    close_connection: (provider: Provider, cnc: Connection) => boolean
    escape_string: (provider: Provider, cnc: Connection, str: string) => string | null
    unescape_string: (provider: Provider, cnc: Connection, str: string) => string | null
    perform_operation: (provider: Provider, cnc: Connection, op: ServerOperation) => boolean
    begin_transaction: (provider: Provider, cnc: Connection, name: string, level: TransactionIsolation) => boolean
    commit_transaction: (provider: Provider, cnc: Connection, name: string) => boolean
    rollback_transaction: (provider: Provider, cnc: Connection, name: string) => boolean
    add_savepoint: (provider: Provider, cnc: Connection, name: string) => boolean
    rollback_savepoint: (provider: Provider, cnc: Connection, name: string) => boolean
    delete_savepoint: (provider: Provider, cnc: Connection, name: string) => boolean
    statement_prepare: (provider: Provider, cnc: Connection, stmt: Statement) => boolean
    statement_execute: (provider: Provider, cnc: Connection, stmt: Statement, params: Set, model_usage: StatementModelUsage, col_types: GObject.GType, last_inserted_row: Set) => GObject.Object
    get_last_inserted: (provider: Provider, cnc: Connection) => Set
    padding: any[]
}

export abstract class ProviderInterface {

    // Own properties of Gda-6.0.Gda.ProviderInterface

    static name: string
}

export interface ProviderMetaInterface {

    // Own fields of Gda-6.0.Gda.ProviderMetaInterface

    g_iface: GObject.TypeInterface
    btypes: (prov: ProviderMeta) => DataModel
    udts: (prov: ProviderMeta) => DataModel
    udt: (prov: ProviderMeta, udt_catalog: string, udt_schema: string) => Row
    udt_cols: (prov: ProviderMeta) => DataModel
    udt_col: (prov: ProviderMeta, udt_catalog: string, udt_schema: string, udt_name: string) => Row
    enums_type: (prov: ProviderMeta) => DataModel
    enum_type: (prov: ProviderMeta, udt_catalog: string, udt_schema: string, udt_name: string) => Row
    domains: (prov: ProviderMeta) => DataModel
    domain: (prov: ProviderMeta, domain_catalog: string, domain_schema: string) => Row
    domains_constraints: (prov: ProviderMeta) => DataModel
    domain_constraints: (prov: ProviderMeta, domain_catalog: string, domain_schema: string, domain_name: string) => DataModel
    domain_constraint: (prov: ProviderMeta, domain_catalog: string, domain_schema: string, domain_name: string, constraint_name: string) => Row
    element_types: (prov: ProviderMeta) => DataModel
    element_type: (prov: ProviderMeta, specific_name: string) => Row
    collations: (prov: ProviderMeta) => DataModel
    collation: (prov: ProviderMeta, collation_catalog: string, collation_schema: string, collation_name_n: string) => Row
    character_sets: (prov: ProviderMeta) => DataModel
    character_set: (prov: ProviderMeta, chset_catalog: string, chset_schema: string, chset_name_n: string) => Row
    schematas: (prov: ProviderMeta) => DataModel
    schemata: (prov: ProviderMeta, catalog_name: string, schema_name_n: string) => Row
    tables_columns: (prov: ProviderMeta) => DataModel
    tables: (prov: ProviderMeta) => DataModel
    table: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name_n: string) => Row
    views: (prov: ProviderMeta) => DataModel
    view: (prov: ProviderMeta, view_catalog: string, view_schema: string, view_name_n: string) => Row
    columns: (prov: ProviderMeta) => DataModel
    table_columns: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string) => DataModel
    table_column: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, column_name: string) => Row
    views_columns: (prov: ProviderMeta) => DataModel
    view_columns: (prov: ProviderMeta, view_catalog: string, view_schema: string, view_name: string) => DataModel
    view_column: (prov: ProviderMeta, view_catalog: string, view_schema: string, view_name: string, column_name: string) => Row
    constraints_tables: (prov: ProviderMeta) => DataModel
    constraints_table: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string) => DataModel
    constraint_table: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, constraint_name_n: string) => Row
    constraints_ref: (prov: ProviderMeta) => DataModel
    constraints_ref_table: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string) => DataModel
    constraint_ref: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, constraint_name: string) => Row
    key_columns: (prov: ProviderMeta) => DataModel
    key_column: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, constraint_name: string) => Row
    check_columns: (prov: ProviderMeta) => DataModel
    check_column: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, constraint_name: string) => Row
    triggers: (prov: ProviderMeta) => DataModel
    trigger: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string) => Row
    routines: (prov: ProviderMeta) => DataModel
    routine: (prov: ProviderMeta, routine_catalog: string, routine_schema: string, routine_name_n: string) => Row
    routines_col: (prov: ProviderMeta) => DataModel
    routine_col: (prov: ProviderMeta, rout_catalog: string, rout_schema: string, rout_name: string) => Row
    routines_pars: (prov: ProviderMeta) => DataModel
    routine_pars: (prov: ProviderMeta, rout_catalog: string, rout_schema: string, rout_name: string) => Row
    indexes_tables: (prov: ProviderMeta) => DataModel
    indexes_table: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string) => DataModel
    index_table: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, index_name_n: string) => Row
    index_cols: (prov: ProviderMeta) => DataModel
    index_col: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, index_name: string) => Row
    padding: any[]
}

export abstract class ProviderMetaInterface {

    // Own properties of Gda-6.0.Gda.ProviderMetaInterface

    static name: string
}

export interface QuarkList {

    // Owm methods of Gda-6.0.Gda.QuarkList

    /**
     * `string` must be a semi-colon separated list of "&lt;key&gt;=&lt;value&gt;" strings (for example
     * "DB_NAME=notes;USERNAME=alfred"). Each key and value must respect the RFC 1738 recommendations: the
     * <constant>&lt;&gt;&quot;#%{}|\^~[]&apos;`;/?:`=`&amp;</constant> and space characters are replaced by
     * <constant>&quot;%%ab&quot;</constant> where
     * <constant>ab</constant> is the hexadecimal number corresponding to the character (for example the
     * "DB_NAME=notes;USERNAME=al%%20fred" string will specify a username as "al fred"). If this formalism
     * is not respected, then some unexpected results may occur.
     * 
     * Some corner cases for any string part (delimited by the semi-colon):
     * <itemizedlist>
     *    <listitem><para>If it does not respect the "&lt;key&gt;=&lt;value&gt;" format then it will be ignored.</para></listitem>
     *    <listitem><para>Only the 1st equal character is used to separate the key from the value part (which means
     *       any other equal sign will be part of the value)</para></listitem>
     * </itemizedlist>
     * 
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
     * @returns a newly allocated #GdaQuarkList with a copy of the data in @qlist.
     */
    copy(): QuarkList
    /**
     * Searches for the value identified by `name` in the given #GdaQuarkList. For protected values
     * (authentification data), don't forget to call gda_quark_list_protect_values() when you
     * don't need them anymore (when needed again, they will be unmangled again).
     * @param name the name of the value to search for.
     * @returns the value associated with the given key if found, or %NULL if not found.
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
     * Call this function to get rid of the clear version of all the values stored in `qlist`. If `qlist` is %NULL,
     * then this function does nothing.
     */
    protect_values(): void
    /**
     * Removes an entry from the #GdaQuarkList, given its name.
     * @param name an entry name.
     */
    remove(name: string): void
}

export class QuarkList {

    // Own properties of Gda-6.0.Gda.QuarkList

    static name: string

    // Constructors of Gda-6.0.Gda.QuarkList

    /**
     * Creates a new #GdaQuarkList, which is a set of key->value pairs,
     * very similar to GLib's GHashTable, but with the only purpose to
     * make easier the parsing and creation of data source connection
     * strings.
     * @constructor 
     * @returns the newly created #GdaQuarkList. Free-function: gda_quark_list_free
     */
    constructor() 
    /**
     * Creates a new #GdaQuarkList, which is a set of key->value pairs,
     * very similar to GLib's GHashTable, but with the only purpose to
     * make easier the parsing and creation of data source connection
     * strings.
     * @constructor 
     * @returns the newly created #GdaQuarkList. Free-function: gda_quark_list_free
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
     * @returns the newly created #GdaQuarkList. Free-function: gda_quark_list_free
     */
    static new_from_string(string: string): QuarkList
}

export interface RepetitiveStatementClass {

    // Own fields of Gda-6.0.Gda.RepetitiveStatementClass

    parent_class: GObject.ObjectClass
}

export abstract class RepetitiveStatementClass {

    // Own properties of Gda-6.0.Gda.RepetitiveStatementClass

    static name: string
}

export interface RowClass {

    // Own fields of Gda-6.0.Gda.RowClass

    parent_class: GObject.ObjectClass
}

export abstract class RowClass {

    // Own properties of Gda-6.0.Gda.RowClass

    static name: string
}

export interface ServerOperationClass {

    // Own fields of Gda-6.0.Gda.ServerOperationClass

    parent_class: GObject.ObjectClass
    seq_item_added: (op: ServerOperation, seq_path: string, item_index: number) => void
    seq_item_remove: (op: ServerOperation, seq_path: string, item_index: number) => void
}

export abstract class ServerOperationClass {

    // Own properties of Gda-6.0.Gda.ServerOperationClass

    static name: string
}

export interface ServerOperationCreateTableArg {

    // Owm methods of Gda-6.0.Gda.ServerOperationCreateTableArg

    copy(): ServerOperationCreateTableArg
    free(): void
    get_column_name(): string | null
    get_column_type(): GObject.GType
    get_fkey_ondelete(): string | null
    get_fkey_onupdate(): string | null
    get_fkey_refs(): ServerOperationCreateTableArgFKeyRefField[]
    get_fkey_table(): string | null
    get_flags(): ServerOperationCreateTableFlag
    /**
     * Sets column name to be created with the new table.
     * @param name the table's column's name.
     */
    set_column_name(name: string): void
    set_column_type(ctype: GObject.GType): void
    /**
     * You should set this if you use a #GDA_SERVER_OPERATION_CREATE_TABLE_FKEY_FLAG flag.
     * @param action action to perform on delete action of the referenced field.
     */
    set_fkey_ondelete(action: string): void
    set_fkey_ondupdate(action: string): void
    /**
     * You should set this if you use a #GDA_SERVER_OPERATION_CREATE_TABLE_FKEY_FLAG flag.
     * @param refs list of references from local to foreign fields. This list is owned by `arg,` then you should not free it.
     */
    set_fkey_refs(refs: ServerOperationCreateTableArgFKeyRefField[]): void
    /**
     * You should set this if you use a #GDA_SERVER_OPERATION_CREATE_TABLE_FKEY_FLAG flag.
     * @param name the table's name of reference.
     */
    set_fkey_table(name: string): void
    /**
     * Sets flags for new column to create with the table.
     * @param flags flags to used in this argument as #GdaServerOperationCreateTableFlag
     */
    set_flags(flags: ServerOperationCreateTableFlag): void
}

export class ServerOperationCreateTableArg {

    // Own properties of Gda-6.0.Gda.ServerOperationCreateTableArg

    static name: string

    // Constructors of Gda-6.0.Gda.ServerOperationCreateTableArg

    constructor() 
    static new(): ServerOperationCreateTableArg
}

export interface ServerOperationCreateTableArgFKeyRefField {

    // Owm methods of Gda-6.0.Gda.ServerOperationCreateTableArgFKeyRefField

    copy(): ServerOperationCreateTableArgFKeyRefField
    free(): void
    get_local_field(): string | null
    get_referenced_field(): string | null
    set_local_field(name: string): void
    set_referenced_field(name: string): void
}

export class ServerOperationCreateTableArgFKeyRefField {

    // Own properties of Gda-6.0.Gda.ServerOperationCreateTableArgFKeyRefField

    static name: string

    // Constructors of Gda-6.0.Gda.ServerOperationCreateTableArgFKeyRefField

    constructor() 
    static new(): ServerOperationCreateTableArgFKeyRefField
}

export interface ServerOperationNode {

    // Own fields of Gda-6.0.Gda.ServerOperationNode

    type: ServerOperationNodeType
    status: ServerOperationNodeStatus
    plist: Set
    model: DataModel
    column: Column
    param: Holder
    priv: any

    // Owm methods of Gda-6.0.Gda.ServerOperationNode

    copy(): ServerOperationNode
    free(): void
}

export class ServerOperationNode {

    // Own properties of Gda-6.0.Gda.ServerOperationNode

    static name: string
}

export interface ServerProviderBase {

    // Own fields of Gda-6.0.Gda.ServerProviderBase

    get_name: (provider: ServerProvider) => string
    get_version: (provider: ServerProvider) => string
    get_server_version: (provider: ServerProvider, cnc: Connection) => string
    supports_feature: (provider: ServerProvider, cnc: Connection, feature: ConnectionFeature) => boolean
    create_worker: (provider: ServerProvider, for_cnc: boolean) => Worker
    get_def_dbms_type: (provider: ServerProvider, cnc: Connection, g_type: GObject.GType) => string
    supports_operation: (provider: ServerProvider, cnc: Connection, type: ServerOperationType, options: Set) => boolean
    render_operation: (provider: ServerProvider, cnc: Connection, op: ServerOperation) => string | null
    identifier_quote: (provider: ServerProvider, cnc: Connection, id: string, for_meta_store: boolean, force_quotes: boolean) => string | null
    statement_rewrite: (provider: ServerProvider, cnc: Connection, stmt: Statement, params: Set) => SqlStatement
    open_connection: (provider: ServerProvider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    prepare_connection: (provider: ServerProvider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    close_connection: (provider: ServerProvider, cnc: Connection) => boolean
    escape_string: (provider: ServerProvider, cnc: Connection, str: string) => string | null
    unescape_string: (provider: ServerProvider, cnc: Connection, str: string) => string | null
    perform_operation: (provider: ServerProvider, cnc: Connection, op: ServerOperation) => boolean
    begin_transaction: (provider: ServerProvider, cnc: Connection, name: string, level: TransactionIsolation) => boolean
    commit_transaction: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    rollback_transaction: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    add_savepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    rollback_savepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    delete_savepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    statement_prepare: (provider: ServerProvider, cnc: Connection, stmt: Statement) => boolean
}

/**
 * Functions implementing basic features.
 * 
 * A pointer to this structure is returned by _gda_server_provider_get_impl_functions() when requesting
 * `GDA_SERVER_PROVIDER_FUNCTIONS_BASE` functions.
 * @record 
 */
export class ServerProviderBase {

    // Own properties of Gda-6.0.Gda.ServerProviderBase

    static name: string
}

export interface ServerProviderClass {

    // Own fields of Gda-6.0.Gda.ServerProviderClass

    parent_class: GObject.ObjectClass
    functions_sets: any[]
}

export abstract class ServerProviderClass {

    // Own properties of Gda-6.0.Gda.ServerProviderClass

    static name: string
}

export interface ServerProviderConnectionData {

    // Own fields of Gda-6.0.Gda.ServerProviderConnectionData

    worker: Worker
    provider_data_destroy_func: GLib.DestroyNotify
    pad1: any
    pad2: any
}

/**
 * Opaque structure extended by database providers to store per-connection information (usually C handles
 * to the connection as required by the C API they use).
 * 
 * Note: `worker` part is created in _gda_server_provider_open_connection() by the provider itself, which allows it to
 * either create a #GdaWorker for each connection, or create only one #GdaWorker for all connections (if the underlying
 * for example does not support multi-threading at all)
 * @record 
 */
export class ServerProviderConnectionData {

    // Own properties of Gda-6.0.Gda.ServerProviderConnectionData

    static name: string
}

export interface ServerProviderHandlerInfo {

    // Own fields of Gda-6.0.Gda.ServerProviderHandlerInfo

    cnc: Connection
    g_type: GObject.GType
    dbms_type: string | null
}

export class ServerProviderHandlerInfo {

    // Own properties of Gda-6.0.Gda.ServerProviderHandlerInfo

    static name: string
}

export interface ServerProviderMeta {

    // Own fields of Gda-6.0.Gda.ServerProviderMeta

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
    routine_col: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, rout_catalog: any, rout_schema: any, rout_name: any, col_name: any, ordinal_position: any) => boolean
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
export class ServerProviderMeta {

    // Own properties of Gda-6.0.Gda.ServerProviderMeta

    static name: string
}

export interface ServerProviderXa {

    // Own fields of Gda-6.0.Gda.ServerProviderXa

    xa_start: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xa_end: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xa_prepare: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xa_commit: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xa_rollback: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
}

/**
 * Functions implementing distributed transactions.
 * @record 
 */
export class ServerProviderXa {

    // Own properties of Gda-6.0.Gda.ServerProviderXa

    static name: string
}

export interface SetClass {

    // Own fields of Gda-6.0.Gda.SetClass

    parent_class: GObject.ObjectClass
    validate_holder_change: (set: Set, holder: Holder, new_value: any) => GLib.Error
    validate_set: (set: Set) => GLib.Error
    holder_changed: (set: Set, holder: Holder) => void
    holder_attr_changed: (set: Set, holder: Holder, attr_name: string, attr_value: any) => void
    public_data_changed: (set: Set) => void
    holder_type_set: (set: Set, holder: Holder) => void
    source_model_changed: (set: Set, source: SetSource) => void
}

export abstract class SetClass {

    // Own properties of Gda-6.0.Gda.SetClass

    static name: string
}

export interface SetGroup {

    // Owm methods of Gda-6.0.Gda.SetGroup

    add_node(node: SetNode): void
    /**
     * Copy constructor.
     * @returns a new #GdaSetGroup
     */
    copy(): SetGroup
    /**
     * Frees any resources taken by `sg` struct. If `sg` is %NULL, then nothing happens.
     */
    free(): void
    get_n_nodes(): number
    /**
     * This method always return first #GdaSetNode in `sg`.
     * @returns first #GdaSetNode in @sg.
     */
    get_node(): SetNode
    /**
     * Returns a #GSList with the #GdaSetNode grouped by `sg`. You must use
     * #g_slist_free on returned list.
     * @returns a #GSList with all nodes in @sg.
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
export class SetGroup {

    // Own properties of Gda-6.0.Gda.SetGroup

    static name: string

    // Constructors of Gda-6.0.Gda.SetGroup

    /**
     * Creates a new #GdaSetGroup struct. If `source` is %NULL then new group contains
     * just one #GdaSetNode.
     * @constructor 
     * @param node a #GdaSetNode struct
     * @returns a new #GdaSetGroup struct.
     */
    constructor(node: SetNode) 
    /**
     * Creates a new #GdaSetGroup struct. If `source` is %NULL then new group contains
     * just one #GdaSetNode.
     * @constructor 
     * @param node a #GdaSetNode struct
     * @returns a new #GdaSetGroup struct.
     */
    static new(node: SetNode): SetGroup
}

export interface SetNode {

    // Owm methods of Gda-6.0.Gda.SetNode

    /**
     * Copy constructor.
     * @returns a new #GdaSetNode
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
export class SetNode {

    // Own properties of Gda-6.0.Gda.SetNode

    static name: string

    // Constructors of Gda-6.0.Gda.SetNode

    /**
     * Creates a new #GdaSetNode struct.
     * @constructor 
     * @param holder a #GdaHolder to used by new #GdaSetNode
     * @returns a new #GdaSetNode struct.
     */
    constructor(holder: Holder) 
    /**
     * Creates a new #GdaSetNode struct.
     * @constructor 
     * @param holder a #GdaHolder to used by new #GdaSetNode
     * @returns a new #GdaSetNode struct.
     */
    static new(holder: Holder): SetNode
}

export interface SetSource {

    // Owm methods of Gda-6.0.Gda.SetSource

    /**
     * Set a #GdaDataModel
     * @param node a #GdaSetNode to add
     */
    add_node(node: SetNode): void
    /**
     * Copy constructor.
     * @returns a new #GdaSetSource
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
export class SetSource {

    // Own properties of Gda-6.0.Gda.SetSource

    static name: string

    // Constructors of Gda-6.0.Gda.SetSource

    /**
     * Creates a new #GdaSetSource struct.
     * @constructor 
     * @param model a #GdaDataModel
     * @returns a new #GdaSetSource struct.
     */
    constructor(model: DataModel) 
    /**
     * Creates a new #GdaSetSource struct.
     * @constructor 
     * @param model a #GdaDataModel
     * @returns a new #GdaSetSource struct.
     */
    static new(model: DataModel): SetSource
}

export interface SqlAnyPart {

    // Own fields of Gda-6.0.Gda.SqlAnyPart

    /**
     * type of structure, as a #GdaSqlAnyPartType enum.
     * @field 
     */
    type: SqlAnyPartType
    /**
     * pointer to the parent #GdaSqlAnyPart structure
     * @field 
     */
    parent: SqlAnyPart

    // Owm methods of Gda-6.0.Gda.SqlAnyPart

    /**
     * Checks for any error in `node'`s structure to make sure it is valid. This
     * is the same as gda_sql_statement_check_structure() but for individual #GdaSqlAnyPart
     * parts. This function is mainly for database provider's implementations
     * @returns TRUE if no error occurred
     */
    check_structure(): boolean
    /**
     * Calls a function for each element of a #GdaSqlAnyPart node
     * @param func function to call for each sub node
     * @returns TRUE if @func has been called for any sub node of @node and always returned TRUE, or FALSE otherwise.
     */
    foreach(func: SqlForeachFunc): boolean
}

/**
 * Base structure of which all structures (except #GdaSqlStatement) "inherit". It identifies, for each structure,
 * its type and its parent in the structure hierarchy.
 * @record 
 */
export class SqlAnyPart {

    // Own properties of Gda-6.0.Gda.SqlAnyPart

    static name: string
}

export interface SqlBuilderClass {

    // Own fields of Gda-6.0.Gda.SqlBuilderClass

    parent_class: GObject.ObjectClass
}

export abstract class SqlBuilderClass {

    // Own properties of Gda-6.0.Gda.SqlBuilderClass

    static name: string
}

export interface SqlCase {

    // Own fields of Gda-6.0.Gda.SqlCase

    /**
     * inheritance structure
     * @field 
     */
    any: SqlAnyPart
    /**
     * expression to test
     * @field 
     */
    base_expr: SqlExpr
    /**
     * list of #GdaSqlExpr, one for each WHEN clause
     * @field 
     */
    when_expr_list: any[]
    /**
     * list of #GdaSqlExpr, one for each THEN clause
     * @field 
     */
    then_expr_list: any[]
    /**
     * default expression for the CASE
     * @field 
     */
    else_expr: SqlExpr

    // Owm methods of Gda-6.0.Gda.SqlCase

    /**
     * Creates a new #GdaSqlCase structure initiated with the values stored in `sc`.
     * @returns a new #GdaSqlCase structure.
     */
    copy(): SqlCase
    /**
     * Frees a #GdaSqlCase structure and its members.
     */
    free(): void
    /**
     * Creates a new string representing a CASE clause. You need to free the returned string
     * using g_free();
     * @returns a new string with the description of the CASE clause or "null" in case @sc is invalid.
     */
    serialize(): string | null
}

/**
 * This structure represents a CASE WHEN... construct
 * @record 
 */
export class SqlCase {

    // Own properties of Gda-6.0.Gda.SqlCase

    static name: string

    // Constructors of Gda-6.0.Gda.SqlCase

    /**
     * Creates a new #GdaSqlCase structure and sets its parent to `parent`.
     * @constructor 
     * @param parent a #GdaSqlAnyPart structure
     * @returns a new #GdaSqlCase structure.
     */
    constructor(parent: SqlAnyPart) 
    /**
     * Creates a new #GdaSqlCase structure and sets its parent to `parent`.
     * @constructor 
     * @param parent a #GdaSqlAnyPart structure
     * @returns a new #GdaSqlCase structure.
     */
    static new(parent: SqlAnyPart): SqlCase
}

export interface SqlExpr {

    // Own fields of Gda-6.0.Gda.SqlExpr

    /**
     * inheritance structure
     * @field 
     */
    any: SqlAnyPart
    /**
     * a #GValue, or %NULL. Please see specific note about this field.
     * @field 
     */
    value: any
    /**
     * a #GdaSqlParamSpec, or %NULL if this is not a variable
     * @field 
     */
    param_spec: SqlParamSpec
    /**
     * not %NULL if expression is a function or aggregate
     * @field 
     */
    func: SqlFunction
    /**
     * not %NULL if expression is a condition or an operation
     * @field 
     */
    cond: SqlOperation
    /**
     * not %NULL if expression is a sub select statement (#GdaSqlStatementSelect or #GdaSqlStatementCompound)
     * @field 
     */
    select: SqlAnyPart
    /**
     * not %NULL if expression is a CASE WHEN ... expression
     * @field 
     */
    case_s: SqlCase
    /**
     * not %NULL if expression must be cast to another data type
     * @field 
     */
    cast_as: string | null
    /**
     * Please see specific note about the `value` field
     * @field 
     */
    value_is_ident: boolean

    // Owm methods of Gda-6.0.Gda.SqlExpr

    /**
     * Creates a new #GdaSqlExpr structure initiated with the values stored in `expr`.
     * @returns a new #GdaSqlExpr structure.
     */
    copy(): SqlExpr
    /**
     * Frees a #GdaSqlExpr structure and its members.
     */
    free(): void
    /**
     * Creates a new string representation of the SQL expression. You need to free the returned string
     * using g_free();
     * @returns a new string with the SQL expression or "null" in case @expr is invalid.
     */
    serialize(): string | null
    /**
     * Sets the expression's parent to the #GdaSqlStatementSelect held by `stmt`. After
     * calling this function `stmt` is freed.
     * @param stmt a #GdaSqlStatement holding the #GdaSqlStatementSelect to take from
     */
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
export class SqlExpr {

    // Own properties of Gda-6.0.Gda.SqlExpr

    static name: string

    // Constructors of Gda-6.0.Gda.SqlExpr

    /**
     * Creates a new #GdaSqlField structure, using `parent` as its parent part.
     * @constructor 
     * @param parent a #GdaSqlStatementInsert, #GdaSqlStatementUpdate, #GdaSqlSelectField, #GdaSqlSelectTarget, #GdaSqlOperation
     * @returns a new #GdaSqlField structure.
     */
    constructor(parent: SqlAnyPart) 
    /**
     * Creates a new #GdaSqlField structure, using `parent` as its parent part.
     * @constructor 
     * @param parent a #GdaSqlStatementInsert, #GdaSqlStatementUpdate, #GdaSqlSelectField, #GdaSqlSelectTarget, #GdaSqlOperation
     * @returns a new #GdaSqlField structure.
     */
    static new(parent: SqlAnyPart): SqlExpr
}

export interface SqlField {

    // Own fields of Gda-6.0.Gda.SqlField

    any: SqlAnyPart
    field_name: string | null
    /**
     * validity check with a connection
     * @field 
     */
    validity_meta_table_column: MetaTableColumn

    // Owm methods of Gda-6.0.Gda.SqlField

    /**
     * Creates a new GdaSqlField structure initiated with the values stored in `field`.
     * @returns a new #GdaSqlField structure.
     */
    copy(): SqlField
    /**
     * Frees a #GdaSqlField structure and its members.
     */
    free(): void
    /**
     * Creates a new string representing a field. You need to free the returned string
     * using g_free();
     * @returns a new string with the name of the field or "null" in case @field is invalid.
     */
    serialize(): string | null
    /**
     * Sets the field's name using the string held by `value`. When call, `value` is freed using
     * #gda_value_free().
     * @param value a #GValue holding a string to take from
     */
    take_name(value: any): void
}

/**
 * This structure represents the name of a table's field.
 * @record 
 */
export class SqlField {

    // Own properties of Gda-6.0.Gda.SqlField

    static name: string

    // Constructors of Gda-6.0.Gda.SqlField

    /**
     * Creates a new #GdaSqlField structure, using `parent` as its parent part.
     * @constructor 
     * @param parent a #GdaSqlStatementSelect, #GdaSqlStatementInsert, #GdaSqlStatementDelete, #GdaSqlStatementUpdate
     * @returns a new #GdaSqlField structure.
     */
    constructor(parent: SqlAnyPart) 
    /**
     * Creates a new #GdaSqlField structure, using `parent` as its parent part.
     * @constructor 
     * @param parent a #GdaSqlStatementSelect, #GdaSqlStatementInsert, #GdaSqlStatementDelete, #GdaSqlStatementUpdate
     * @returns a new #GdaSqlField structure.
     */
    static new(parent: SqlAnyPart): SqlField
}

export interface SqlFunction {

    // Own fields of Gda-6.0.Gda.SqlFunction

    /**
     * inheritance structure
     * @field 
     */
    any: SqlAnyPart
    /**
     * name of the function , in the form [[catalog.]schema.]function_name
     * @field 
     */
    function_name: string | null
    /**
     * list of #GdaSqlExpr expressions, one for each argument
     * @field 
     */
    args_list: any[]

    // Owm methods of Gda-6.0.Gda.SqlFunction

    check_clean(): void
    /**
     * Creates a new #GdaSqlFunction structure initiated with the values stored in `function`.
     * @returns a new #GdaSqlFunction structure.
     */
    copy(): SqlFunction
    /**
     * Frees a #GdaSqlFunction structure and its members.
     */
    free(): void
    /**
     * Creates a new string representing a function. You need to free the returned string
     * using g_free();
     * @returns a new string with the description of the function or "null" in case @function is invalid.
     */
    serialize(): string | null
    /**
     * Sets the function's arguments to point to `args,` then sets the
     * list's data elements' parent to `function`.
     * @param args a #GSList to take from
     */
    take_args_list(args: SqlExpr[]): void
    /**
     * Sets the function's name using the string held by `value`. When call, `value` is freed using
     * #gda_value_free().
     * @param value a #GValue holding a string to take from
     */
    take_name(value: any): void
}

/**
 * This structure represents a function or an aggregate with zero or more arguments.
 * @record 
 */
export class SqlFunction {

    // Own properties of Gda-6.0.Gda.SqlFunction

    static name: string

    // Constructors of Gda-6.0.Gda.SqlFunction

    /**
     * Creates a new #GdaSqlFunction structure initiated.
     * @constructor 
     * @param parent a #GdaSqlAnyPart structure
     * @returns a new #GdaSqlFunction structure.
     */
    constructor(parent: SqlAnyPart) 
    /**
     * Creates a new #GdaSqlFunction structure initiated.
     * @constructor 
     * @param parent a #GdaSqlAnyPart structure
     * @returns a new #GdaSqlFunction structure.
     */
    static new(parent: SqlAnyPart): SqlFunction
}

export interface SqlOperation {

    // Own fields of Gda-6.0.Gda.SqlOperation

    /**
     * inheritance structure
     * @field 
     */
    any: SqlAnyPart
    /**
     * operator type to be used. See #GdaSqlOperatorType
     * @field 
     */
    operator_type: SqlOperatorType
    /**
     * 
     * : list of #GdaSqlExpr operands
     * @field 
     */
    operands: SqlExpr[]

    // Owm methods of Gda-6.0.Gda.SqlOperation

    /**
     * Creates a new #GdaSqlOperation structure initiated with the values stored in `operation`.
     * @returns a new #GdaSqlOperation structure.
     */
    copy(): SqlOperation
    /**
     * Frees a #GdaSqlOperation structure and its members.
     */
    free(): void
    /**
     * Creates a new string representing an operator. You need to free the returned string
     * using g_free();
     * @returns a new string with the description of the operator or "null" in case @operation is invalid.
     */
    serialize(): string | null
}

/**
 * This structure represents an operation between one or more operands.
 * @record 
 */
export class SqlOperation {

    // Own properties of Gda-6.0.Gda.SqlOperation

    static name: string

    // Constructors of Gda-6.0.Gda.SqlOperation

    /**
     * Creates a new #GdaSqlOperation structure and sets its parent to `parent`.
     * @constructor 
     * @param parent a #GdaSqlAnyPart structure
     * @returns a new #GdaSqlOperation structure.
     */
    constructor(parent: SqlAnyPart) 
    /**
     * Creates a new #GdaSqlOperation structure and sets its parent to `parent`.
     * @constructor 
     * @param parent a #GdaSqlAnyPart structure
     * @returns a new #GdaSqlOperation structure.
     */
    static new(parent: SqlAnyPart): SqlOperation
    /**
     * Returns #GdaSqlOperatorType that correspond with the string `op`.
     * @param op a #GdaSqlOperation structure
     * @returns #GdaSqlOperatorType
     */
    static operator_from_string(op: string): SqlOperatorType
    /**
     * Returns a constant string representing a operator name. You don't need to free
     * the returned string.
     * @param op a #GdaSqlOperation structure
     * @returns a string with the operator's name or NULL in case @op is invalid.
     */
    static operator_to_string(op: SqlOperatorType): string
}

export interface SqlParamSpec {

    // Own fields of Gda-6.0.Gda.SqlParamSpec

    name: string | null
    descr: string | null
    is_param: boolean
    nullok: boolean
    g_type: GObject.GType
    validity_meta_dict: any
    _gda_reserved1: any
    _gda_reserved2: any

    // Owm methods of Gda-6.0.Gda.SqlParamSpec

    /**
     * Creates a copy of `pspec`.
     * @returns a new #GdaSqlParamSpec
     */
    copy(): SqlParamSpec
    /**
     * Destroys `pspec`.
     */
    free(): void
    /**
     * Creates a new string representing `pspec`.
     * @returns a new string.
     */
    serialize(): string | null
    /**
     * Sets `pspec'`s description. `value'`s ownership is transferred to
     * `pspec` (which means `pspec` is then responsible for freeing it when no longer needed).
     * @param value a G_TYPE_STRING #GValue
     */
    take_descr(value: any): void
    /**
     * Sets `pspec'`s name. `value'`s ownership is transferred to
     * `pspec` (which means `pspec` is then responsible for freeing it when no longer needed).
     * @param value a G_TYPE_STRING #GValue
     */
    take_name(value: any): void
    /**
     * Sets `pspec'`s ability of being NULL. `value'`s ownership is transferred to
     * `pspec` (which means `pspec` is then responsible for freeing it when no longer needed).
     * 
     * If `value'`s string starts by 't' or 'T' then `pspec` will be allowed to be %NULL
     * @param value a G_TYPE_STRING #GValue.
     */
    take_nullok(value: any): void
    /**
     * Sets `pspec'`s data type. `value'`s ownership is transferred to
     * `pspec` (which means `pspec` is then responsible for freeing it when no longer needed).
     * 
     * `value` must represent a data type, as understood by gda_g_type_from_string().
     * @param value a G_TYPE_STRING #GValue
     */
    take_type(value: any): void
}

export class SqlParamSpec {

    // Own properties of Gda-6.0.Gda.SqlParamSpec

    static name: string

    // Constructors of Gda-6.0.Gda.SqlParamSpec

    /**
     * `value` must contain a string representing a variable, see the documentation associated to the
     * #GdaSqlParser object.
     * 
     * `value` is destroyed by this function.
     * @constructor 
     * @param simple_spec a G_TYPE_STRING #GValue
     * @returns a new #GdaSqlParamSpec
     */
    constructor(simple_spec: any) 
    /**
     * `value` must contain a string representing a variable, see the documentation associated to the
     * #GdaSqlParser object.
     * 
     * `value` is destroyed by this function.
     * @constructor 
     * @param simple_spec a G_TYPE_STRING #GValue
     * @returns a new #GdaSqlParamSpec
     */
    static new(simple_spec: any): SqlParamSpec
}

export interface SqlParserClass {

    // Own fields of Gda-6.0.Gda.SqlParserClass

    parent_class: GObject.ObjectClass
    delim_alloc: (f: any) => any
    delim_free: (d: any, f: any) => void
    delim_trace: (d: any, s: string | null) => void
    delim_parse: (d: any, i: number, v: any, iface: SqlParserIface) => void
    delim_tokens_trans: number
    parser_alloc: (f: any) => any
    parser_free: (p: any, f: any) => void
    parser_trace: (p: any, s: string | null) => void
    parser_parse: (p: any, i: number, v: any, iface: SqlParserIface) => void
    parser_tokens_trans: number
}

export abstract class SqlParserClass {

    // Own properties of Gda-6.0.Gda.SqlParserClass

    static name: string
}

export interface SqlParserIface {

    // Own fields of Gda-6.0.Gda.SqlParserIface

    parser: SqlParser
    parsed_statement: SqlStatement
}

export class SqlParserIface {

    // Own properties of Gda-6.0.Gda.SqlParserIface

    static name: string
}

export interface SqlSelectField {

    // Own fields of Gda-6.0.Gda.SqlSelectField

    /**
     * inheritance structure
     * @field 
     */
    any: SqlAnyPart
    /**
     * expression
     * @field 
     */
    expr: SqlExpr
    /**
     * field name part of `expr` if `expr` represents a field
     * @field 
     */
    field_name: string | null
    /**
     * table name part of `expr` if `expr` represents a field
     * @field 
     */
    table_name: string | null
    /**
     * alias
     * @field 
     */
    as: string | null
    validity_meta_object: MetaDbObject
    validity_meta_table_column: MetaTableColumn

    // Owm methods of Gda-6.0.Gda.SqlSelectField

    /**
     * Creates a new #GdaSqlSelectField structure initiated with the values stored in `field`.
     * @returns a new #GdaSqlSelectField structure.
     */
    copy(): SqlSelectField
    /**
     * Frees a #GdaSqlSelectField structure and its members.
     */
    free(): void
    /**
     * Creates a new string representing an expression used as field in a SELECT statement
     * before the FROM clause.
     * @returns a new string with the description of the expression or "null" in case @field is invalid.
     */
    serialize(): string | null
    /**
     * Sets the 'as' field's string in the #GdaSqlSelectField structure. `alias` is freed
     * after call this function.
     * @param alias a #GValue to take from
     */
    take_alias(alias: any): void
    /**
     * Sets the expression field in the #GdaSqlSelectField structure to point to `expr`
     * and modify it to sets its parent to `field`.
     * @param expr a #GdaSqlExpr to take from
     */
    take_expr(expr: SqlExpr): void
    /**
     * Sets the expression field's value in the #GdaSqlSelectField structure to point to `value;`
     * after this `field` is the owner of `value`.
     * @param value a #GValue to take from
     */
    take_star_value(value: any): void
}

/**
 * This structure represents a selected item in a SELECT statement (when executed, the returned data set
 * will have one column per selected item). Note that the `table_name` and
 * `field_name` field parts <emphasis>will be</emphasis> overwritten by &LIBGDA;,
 * set the value of `expr->`value instead.
 * @record 
 */
export class SqlSelectField {

    // Own properties of Gda-6.0.Gda.SqlSelectField

    static name: string

    // Constructors of Gda-6.0.Gda.SqlSelectField

    /**
     * Creates a new #GdaSqlSelectField structure and sets its parent to `parent`. A
     * #GdaSqlSelectField is any expression in SELECT statements before the FROM clause.
     * @constructor 
     * @param parent a #GdaSqlStatementSelect structure
     * @returns a new #GdaSqlSelectField structure.
     */
    constructor(parent: SqlAnyPart) 
    /**
     * Creates a new #GdaSqlSelectField structure and sets its parent to `parent`. A
     * #GdaSqlSelectField is any expression in SELECT statements before the FROM clause.
     * @constructor 
     * @param parent a #GdaSqlStatementSelect structure
     * @returns a new #GdaSqlSelectField structure.
     */
    static new(parent: SqlAnyPart): SqlSelectField
}

export interface SqlSelectFrom {

    // Own fields of Gda-6.0.Gda.SqlSelectFrom

    /**
     * inheritance structure
     * @field 
     */
    any: SqlAnyPart
    /**
     * list of #GdaSqlSelectTarget
     * @field 
     */
    targets: SqlSelectTarget[]
    /**
     * list of #GdaSqlSelectJoin
     * @field 
     */
    joins: SqlSelectJoin[]

    // Owm methods of Gda-6.0.Gda.SqlSelectFrom

    /**
     * Creates a new #GdaSqlSelectFrom structure initiated with the values stored in `from`.
     * @returns a new #GdaSqlSelectFrom structure.
     */
    copy(): SqlSelectFrom
    /**
     * Frees a #GdaSqlSelectFrom structure and its members.
     */
    free(): void
    /**
     * Creates a new string description of the FROM clause used in a SELECT statement.
     * @returns a new string with the description of the FROM or "null" in case @from is invalid.
     */
    serialize(): string | null
    /**
     * Append `join` to the joins in the FROM clause and set `join'`s parent to
     * `from;` after call this function `from` owns `join` then you must not free it.
     * @param join a #GdaSqlSelectJoin to take from
     */
    take_new_join(join: SqlSelectJoin): void
    /**
     * Append `target` to the targets in the FROM clause and set `target'`s parent to
     * `from;` after call this function `from` owns `target` then you must not free it.
     * @param target a #GdaSqlSelectTarget to take from
     */
    take_new_target(target: SqlSelectTarget): void
}

/**
 * This structure represents the FROM clause of a SELECT statement, it lists targets and joins
 * @record 
 */
export class SqlSelectFrom {

    // Own properties of Gda-6.0.Gda.SqlSelectFrom

    static name: string

    // Constructors of Gda-6.0.Gda.SqlSelectFrom

    /**
     * Creates a new #GdaSqlSelectFrom structure and sets its parent to `parent`.
     * @constructor 
     * @param parent a #GdaSqlStatementSelect
     * @returns a new #GdaSqlSelectFrom structure
     */
    constructor(parent: SqlAnyPart) 
    /**
     * Creates a new #GdaSqlSelectFrom structure and sets its parent to `parent`.
     * @constructor 
     * @param parent a #GdaSqlStatementSelect
     * @returns a new #GdaSqlSelectFrom structure
     */
    static new(parent: SqlAnyPart): SqlSelectFrom
}

export interface SqlSelectJoin {

    // Own fields of Gda-6.0.Gda.SqlSelectJoin

    /**
     * inheritance structure
     * @field 
     */
    any: SqlAnyPart
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
    expr: SqlExpr
    /**
     * list of #GdaSqlField pointers to use when joining, or %NULL
     * @field 
     */
    use: any[]

    // Owm methods of Gda-6.0.Gda.SqlSelectJoin

    /**
     * Creates a new #GdaSqlSelectJoin structure initiated with the values stored in `join`.
     * @returns a new #GdaSqlSelectJoin structure.
     */
    copy(): SqlSelectJoin
    /**
     * Frees a #GdaSqlSelectJoin structure and its members.
     */
    free(): void
    /**
     * Creates a new string description of the join used in a SELECT statement.
     * @returns a new string with the description of the join or "null" in case @join is invalid.
     */
    serialize(): string | null
}

/**
 * This structure represents a join between two targets in a SELECT statement.
 * @record 
 */
export class SqlSelectJoin {

    // Own properties of Gda-6.0.Gda.SqlSelectJoin

    static name: string

    // Constructors of Gda-6.0.Gda.SqlSelectJoin

    /**
     * Creates a new #GdaSqlSelectJoin structure and sets its parent to `parent`.
     * @constructor 
     * @param parent a #GdaSqlSelectFrom
     * @returns a new #GdaSqlSelectJoin structure
     */
    constructor(parent: SqlAnyPart) 
    /**
     * Creates a new #GdaSqlSelectJoin structure and sets its parent to `parent`.
     * @constructor 
     * @param parent a #GdaSqlSelectFrom
     * @returns a new #GdaSqlSelectJoin structure
     */
    static new(parent: SqlAnyPart): SqlSelectJoin
    /**
     * Creates a new string representing the join type.
     * @param type a #GdaSqlSelectJoinType structure to be copied
     * @returns a string representing the Join type.
     */
    static type_to_string(type: SqlSelectJoinType): string
}

export interface SqlSelectOrder {

    // Own fields of Gda-6.0.Gda.SqlSelectOrder

    /**
     * inheritance structure
     * @field 
     */
    any: SqlAnyPart
    /**
     * expression to order on
     * @field 
     */
    expr: SqlExpr
    /**
     * TRUE is ordering is ascending
     * @field 
     */
    asc: boolean
    /**
     * name of the collation to use for ordering
     * @field 
     */
    collation_name: string | null

    // Owm methods of Gda-6.0.Gda.SqlSelectOrder

    /**
     * Creates a new #GdaSqlSelectOrder structure initiated with the values stored in `order`.
     * @returns a new #GdaSqlSelectOrder structure.
     */
    copy(): SqlSelectOrder
    /**
     * Frees a #GdaSqlSelectOrder structure and its members.
     */
    free(): void
    /**
     * Creates a new string description of the ORDER BY clause used in a SELECT statement.
     * @returns a new string with the description of the ORDER BY or "null" in case @order is invalid.
     */
    serialize(): string | null
}

/**
 * This structure represents the ordering of a SELECT statement.
 * @record 
 */
export class SqlSelectOrder {

    // Own properties of Gda-6.0.Gda.SqlSelectOrder

    static name: string

    // Constructors of Gda-6.0.Gda.SqlSelectOrder

    /**
     * Creates a new #GdaSqlSelectOrder structure and sets its parent to `parent`.
     * @constructor 
     * @param parent a #GdaSqlStatementSelect
     * @returns a new #GdaSqlSelectOrder structure
     */
    constructor(parent: SqlAnyPart) 
    /**
     * Creates a new #GdaSqlSelectOrder structure and sets its parent to `parent`.
     * @constructor 
     * @param parent a #GdaSqlStatementSelect
     * @returns a new #GdaSqlSelectOrder structure
     */
    static new(parent: SqlAnyPart): SqlSelectOrder
}

export interface SqlSelectTarget {

    // Own fields of Gda-6.0.Gda.SqlSelectTarget

    /**
     * inheritance structure
     * @field 
     */
    any: SqlAnyPart
    /**
     * expression
     * @field 
     */
    expr: SqlExpr
    /**
     * table name part of `expr` if `expr` represents a table
     * @field 
     */
    table_name: string | null
    /**
     * alias
     * @field 
     */
    as: string | null
    validity_meta_object: MetaDbObject

    // Owm methods of Gda-6.0.Gda.SqlSelectTarget

    /**
     * Creates a new #GdaSqlSelectTarget structure initiated with the values stored in `target`.
     * @returns a new #GdaSqlSelectTarget structure.
     */
    copy(): SqlSelectTarget
    /**
     * Frees a #GdaSqlSelectTarget structure and its members.
     */
    free(): void
    /**
     * Creates a new string representing a target used in a SELECT statement
     * after the FROM clause.
     * @returns a new string with the description of the expression or "null" in case @field is invalid.
     */
    serialize(): string | null
    take_alias(alias: any): void
    /**
     * Sets the target to be a SELECT subquery setting target's expression to use
     * `stmt;` after call this function the target owns `stmt,` then you must not free it.
     * @param stmt a #GValue to take from
     */
    take_select(stmt: SqlStatement): void
    /**
     * Sets the target's name using the string stored in `value` and the expression
     * to set its value to point to value; after call this function the target owns
     * `value,` then you must not free it.
     * @param value a #GValue to take from
     */
    take_table_name(value: any): void
}

/**
 * This structure represents a target used to fetch data from in a SELECT statement; it can represent a table or
 * a sub select. Note that the `table_name`
 * part <emphasis>will be</emphasis> overwritten by &LIBGDA;,
 * set the value of `expr->`value instead.
 * @record 
 */
export class SqlSelectTarget {

    // Own properties of Gda-6.0.Gda.SqlSelectTarget

    static name: string

    // Constructors of Gda-6.0.Gda.SqlSelectTarget

    /**
     * Creates a new #GdaSqlSelectTarget structure and sets its parent to `parent`. A
     * #GdaSqlSelectTarget is the table in a SELECT statement.
     * @constructor 
     * @param parent a #GdaSqlSelectFrom
     * @returns a new #GdaSqlSelectTarget structure.
     */
    constructor(parent: SqlAnyPart) 
    /**
     * Creates a new #GdaSqlSelectTarget structure and sets its parent to `parent`. A
     * #GdaSqlSelectTarget is the table in a SELECT statement.
     * @constructor 
     * @param parent a #GdaSqlSelectFrom
     * @returns a new #GdaSqlSelectTarget structure.
     */
    static new(parent: SqlAnyPart): SqlSelectTarget
}

export interface SqlStatement {

    // Own fields of Gda-6.0.Gda.SqlStatement

    sql: string | null
    /**
     * type of statement
     * @field 
     */
    stmt_type: SqlStatementType
    /**
     * contents, cast it depending on `stmt_type` (for example to a #GdaSqlStatementSelect).
     * @field 
     */
    contents: any
    validity_meta_struct: MetaStruct

    // Owm methods of Gda-6.0.Gda.SqlStatement

    /**
     * Cleans any data set by a previous call to gda_sql_statement_check_validity().
     */
    check_clean(): void
    /**
     * Checks for any error in `stmt'`s structure to make sure the statement is valid
     * (for example a SELECT statement must at least return a column, a DELETE statement must specify which table
     * is targeted).
     * @returns TRUE if no error occurred
     */
    check_structure(): boolean
    /**
     * If `cnc` is not %NULL, then checks that all the database objects referenced in the statement actually
     * exist in the connection's database (for example the table being updated in a UPDATE statement must exist in the
     * connection's database for the check to succeed). This method fills the `stmt-&`gt;validity_meta_struct attribute.
     * 
     * If `cnc` is %NULL, then remove any information from a previous call to this method stored in `stmt`. In this case,
     * the `stmt-&`gt;validity_meta_struct attribute is cleared.
     * 
     * Also note that some parts of `stmt` may be modified: for example leading and trailing spaces in aliases or
     * objects names will be removed.
     * @param cnc a #GdaConnection object, or %NULL
     * @returns TRUE if no error occurred
     */
    check_validity(cnc: Connection | null): boolean
    /**
     * If `mstruct` is not %NULL, then checks that all the database objects referenced in the statement i
     * actually referenced in `mstruct`
     *  (for example the table being updated in a UPDATE statement must exist in the
     * connection's database for the check to succeed).
     * This method sets the `stmt-&`gt;validity_meta_struct attribute to `mstruct`.
     * 
     * If `mstruct` is %NULL, then remove any information from a previous call to this method stored in `stmt`. In this case,
     * the `stmt-&`gt;validity_meta_struct attribute is cleared.
     * 
     * Also note that some parts of `stmt` may be modified: for example leading and trailing spaces in aliases or
     * objects names will be removed.
     * @param mstruct a #GdaMetaStruct object, or %NULL
     * @returns TRUE if no error occurred
     */
    check_validity_m(mstruct: MetaStruct | null): boolean
    /**
     * Specifies `stmt'`s type of compound
     * @param type a #GdaSqlStatementCompoundType value
     */
    compound_set_type(type: SqlStatementCompoundType): void
    /**
     * Adds the `s` sub-statement to the `stmt` compound statement. `s'`s reference is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param s a #GdaSqlStatement pointer
     */
    compound_take_stmt(s: SqlStatement): void
    /**
     * Creates a copy of `stmt`.
     * @returns a new #GdaSqlStatement
     */
    copy(): SqlStatement
    /**
     * Sets the WHERE condition of `stmt`. `cond'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param cond the WHERE condition of the DELETE statement, as a #GdaSqlExpr
     */
    delete_take_condition(cond: SqlExpr): void
    /**
     * Sets the name of the table to delete from in `stmt`. `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value a table name as a G_TYPE_STRING #GValue
     */
    delete_take_table_name(value: any): void
    /**
     * Releases any memory associated to `stmt`.
     */
    free(): void
    /**
     * Sets a list of values to be inserted by `stmt`. `list'`s
     * ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param list a list of #GdaSqlExpr pointers
     */
    insert_take_1_values_list(list: SqlExpr[]): void
    /**
     * Sets a list of list of values to be inserted by `stmt`. `list'`s
     * ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param list a list of #GSList of #GdaSqlExpr pointers
     */
    insert_take_extra_values_list(list: SqlExpr[]): void
    /**
     * Sets the list of fields for which values will be specified in `stmt`. `list'`s
     * ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param list a list of #GdaSqlField pointers
     */
    insert_take_fields_list(list: SqlField[]): void
    /**
     * Sets the name of the resolution conflict algorithm used by `stmt`. `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value name of the resolution conflict algorithm, as a G_TYPE_STRING #GValue
     */
    insert_take_on_conflict(value: any): void
    /**
     * Specifies a SELECT statement, the values inserted will be the result set of `select`. `select'`s
     * ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param select a SELECT or COMPOUND #GdaSqlStatement pointer
     */
    insert_take_select(select: SqlStatement): void
    /**
     * Sets the name of the table to insert into in `stmt`. `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value name of the table to insert into, as a G_TYPE_STRING #GValue
     */
    insert_take_table_name(value: any): void
    /**
     * "Normalizes" (in place) some parts of `stmt,` which means `stmt` may be modified.
     * At the moment any "*" field in a SELECT statement will be replaced by one
     * #GdaSqlSelectField structure for each field in the referenced table.
     * @param cnc a #GdaConnection object, or %NULL
     * @returns TRUE if no error occurred
     */
    normalize(cnc: Connection | null): boolean
    /**
     * Sets the DISTINCT clause of `stmt`.
     * 
     * `distinct_expr'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param distinct a TRUE/FALSE value
     * @param distinct_expr a #GdaSqlExpr pointer representing what the DISTINCT is on, or %NULL
     */
    select_take_distinct(distinct: boolean, distinct_expr: SqlExpr | null): void
    /**
     * Sets list of expressions selected by `stmt`
     * 
     * `expr_list'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param expr_list a list of #GdaSqlSelectField pointers
     */
    select_take_expr_list(expr_list: SqlSelectField[]): void
    /**
     * Sets the FROM clause of `stmt`
     * 
     * `from'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param from a #GdaSqlSelectFrom pointer
     */
    select_take_from(from: SqlSelectFrom): void
    /**
     * Sets the GROUP BY clause of `stmt`
     * 
     * `group_by'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param group_by a list of #GdaSqlExpr pointer
     */
    select_take_group_by(group_by: SqlExpr[]): void
    /**
     * Sets the HAVING clause of `stmt`
     * 
     * `expr'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param expr a #GdaSqlExpr pointer
     */
    select_take_having_cond(expr: SqlExpr): void
    /**
     * Sets the LIMIT clause of `stmt`
     * 
     * `count` and `offset'`s responsibility are transferred to
     * `stmt` (which means `stmt` is then responsible for freeing them when no longer needed).
     * @param count a #GdaSqlExpr pointer
     * @param offset a #GdaSqlExpr pointer
     */
    select_take_limits(count: SqlExpr, offset: SqlExpr): void
    /**
     * Sets the ORDER BY clause of `stmt`
     * 
     * `order_by'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param order_by a list of #GdaSqlSelectOrder pointer
     */
    select_take_order_by(order_by: SqlSelectOrder[]): void
    /**
     * Sets the WHERE clause of `stmt`
     * 
     * `expr'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param expr a #GdaSqlExpr pointer
     */
    select_take_where_cond(expr: SqlExpr): void
    /**
     * Creates a string representation of `stmt`.
     * @returns a new string
     */
    serialize(): string | null
    trans_set_isol_level(level: TransactionIsolation): void
    /**
     * Sets the model of the transaction
     * 
     * `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value a G_TYPE_STRING value
     */
    trans_take_mode(value: any): void
    /**
     * Sets the name of the transaction
     * 
     * `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value a G_TYPE_STRING value
     */
    trans_take_name(value: any): void
    /**
     * Sets `stmt'`s list of expressions
     * 
     * `expressions'`s
     * ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param expressions a list of #GdaSqlExpr pointers
     */
    unknown_take_expressions(expressions: SqlExpr[]): void
    /**
     * Sets the WHERE clause of `stmt`
     * 
     * `expr'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param cond a #GdaSqlExpr pointer
     */
    update_take_condition(cond: SqlExpr): void
    /**
     * Sets the name of the resolution conflict algorithm used by `stmt`. `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value name of the resolution conflict algorithm, as a G_TYPE_STRING #GValue
     */
    update_take_on_conflict(value: any): void
    /**
     * Specifies that the field named `fname` will be updated with the expression `expr`.
     * 
     * `fname` and `expr'`s responsibility are transferred to
     * `stmt` (which means `stmt` is then responsible for freeing them when no longer needed).
     * @param fname a field name, as a G_TYPE_STRING #GValue
     * @param expr a #GdaSqlExpr pointer
     */
    update_take_set_value(fname: any, expr: SqlExpr): void
    /**
     * Sets the name of the table to delete from in `stmt`.
     * 
     * `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value a table name, as a G_TYPE_STRING #GValue
     */
    update_take_table_name(value: any): void
}

/**
 * This structure is the top level structure encapsulating several type of statements.
 * @record 
 */
export class SqlStatement {

    // Own properties of Gda-6.0.Gda.SqlStatement

    static name: string

    // Constructors of Gda-6.0.Gda.SqlStatement

    /**
     * Use this function to create a #GdaSqlStatement of the specified `type` type.
     * @constructor 
     * @param type type of statement to create
     * @returns a new #GdaSqlStatement
     */
    constructor(type: SqlStatementType) 
    /**
     * Use this function to create a #GdaSqlStatement of the specified `type` type.
     * @constructor 
     * @param type type of statement to create
     * @returns a new #GdaSqlStatement
     */
    static new(type: SqlStatementType): SqlStatement
    static get_contents_infos(type: SqlStatementType): SqlStatementContentsInfo
    /**
     * Converts a string to a #GdaSqlStatementType value, see also gda_sql_statement_type_to_string()
     * @param type a string representing a #GdaSqlStatementType type
     * @returns a #GdaSqlStatementType value
     */
    static string_to_type(type: string): SqlStatementType
    /**
     * Converts a #GdaSqlStatementType to a string, see also gda_sql_statement_string_to_type()
     * @param type a #GdaSqlStatementType value
     * @returns a constant string
     */
    static type_to_string(type: SqlStatementType): string
}

export interface SqlStatementCheckValidityData {

    // Own fields of Gda-6.0.Gda.SqlStatementCheckValidityData

    cnc: Connection
    store: MetaStore
    mstruct: MetaStruct
}

/**
 * Validation against a dictionary
 * @record 
 */
export class SqlStatementCheckValidityData {

    // Own properties of Gda-6.0.Gda.SqlStatementCheckValidityData

    static name: string
}

export interface SqlStatementCompound {

    // Own fields of Gda-6.0.Gda.SqlStatementCompound

    any: SqlAnyPart
    compound_type: SqlStatementCompoundType
    stmt_list: any[]
}

export class SqlStatementCompound {

    // Own properties of Gda-6.0.Gda.SqlStatementCompound

    static name: string
}

export interface SqlStatementContentsInfo {

    // Own fields of Gda-6.0.Gda.SqlStatementContentsInfo

    type: SqlStatementType
    name: string | null
    construct: () => any
    free: (stm: any) => void
    copy: (stm: any) => any
    serialize: (stm: any) => string | null
    check_structure_func: SqlForeachFunc
    check_validity_func: SqlForeachFunc
}

/**
 * Contents' infos
 * @record 
 */
export class SqlStatementContentsInfo {

    // Own properties of Gda-6.0.Gda.SqlStatementContentsInfo

    static name: string
}

export interface SqlStatementDelete {

    // Own fields of Gda-6.0.Gda.SqlStatementDelete

    any: SqlAnyPart
    table: SqlTable
    cond: SqlExpr
}

export class SqlStatementDelete {

    // Own properties of Gda-6.0.Gda.SqlStatementDelete

    static name: string
}

export interface SqlStatementInsert {

    // Own fields of Gda-6.0.Gda.SqlStatementInsert

    /**
     * inheritance structure
     * @field 
     */
    any: SqlAnyPart
    /**
     * conflict resolution clause if there is one (such as "OR REPLACE")
     * @field 
     */
    on_conflict: string | null
    /**
     * name of the table to which data is inserted
     * @field 
     */
    table: SqlTable
    /**
     * list of #GdaSqlField fields which are valued for insertion
     * @field 
     */
    fields_list: any[]
    /**
     * list of list of #GdaSqlExpr expressions (this is a list of list, not a simple list)
     * @field 
     */
    values_list: any[]
    /**
     * a #GdaSqlStatementSelect or #GdaSqlStatementCompound structure representing the values to insert
     * @field 
     */
    select: SqlAnyPart
}

/**
 * The statement is an INSERT statement, any kind of INSERT statement can be represented using this structure
 * (if this is not the case
 * then report a bug).
 * <mediaobject>
 *   <imageobject role="html">
 *     <imagedata fileref="stmt-insert1.png" format="PNG"/>
 *   </imageobject>
 *   <caption>
 *     <para>
 * Example of a #GdaSqlStatement having a #GdaSqlStatementInsert as its contents with 2 lists of values
 * to insert.
 *     </para>
 *   </caption>
 * </mediaobject>
 * <mediaobject>
 *   <imageobject role="html">
 *     <imagedata fileref="stmt-insert2.png" format="PNG"/>
 *   </imageobject>
 *   <caption>
 *     <para>
 * Another example of a #GdaSqlStatement having a #GdaSqlStatementInsert as its contents, using a SELECT
 * to express the values to insert.
 *     </para>
 *   </caption>
 * </mediaobject>
 * @record 
 */
export class SqlStatementInsert {

    // Own properties of Gda-6.0.Gda.SqlStatementInsert

    static name: string
}

export interface SqlStatementSelect {

    // Own fields of Gda-6.0.Gda.SqlStatementSelect

    any: SqlAnyPart
    distinct: boolean
    distinct_expr: SqlExpr
    expr_list: any[]
    from: SqlSelectFrom
    where_cond: SqlExpr
    group_by: any[]
    having_cond: SqlExpr
    order_by: any[]
    limit_count: SqlExpr
    limit_offset: SqlExpr
}

export class SqlStatementSelect {

    // Own properties of Gda-6.0.Gda.SqlStatementSelect

    static name: string
}

export interface SqlStatementTransaction {

    // Own fields of Gda-6.0.Gda.SqlStatementTransaction

    /**
     * inheritance structure
     * @field 
     */
    any: SqlAnyPart
    /**
     * isolation level as a #GdaTransactionIsolation
     * @field 
     */
    isolation_level: TransactionIsolation
    /**
     * transaction mode (DEFERRED, IMMEDIATE, EXCLUSIVE, READ_WRITE, READ_ONLY)
     * @field 
     */
    trans_mode: string | null
    /**
     * transaction name
     * @field 
     */
    trans_name: string | null
}

/**
 * The statement is a transaction management related statement (BEGIN, ROLLBACK, etc). The #GdaSqlStatementTransaction structure
 * does not hold enough information to reconstruct the complete SQL statement (some information may be missing) - the aim of this
 * structure is to identify a minimum set of information in the transaction statement. Note that the complete SQL which created the
 * statement should be available in the #GdaSqlStatement structure which encapsulates this structure.
 * @record 
 */
export class SqlStatementTransaction {

    // Own properties of Gda-6.0.Gda.SqlStatementTransaction

    static name: string
}

export interface SqlStatementUnknown {

    // Own fields of Gda-6.0.Gda.SqlStatementUnknown

    any: SqlAnyPart
    /**
     * a list of #GdaSqlExpr pointers
     * @field 
     */
    expressions: any[]
}

/**
 * Represents any statement which type is not identified (any DDL statement or database specific dialect)
 * @record 
 */
export class SqlStatementUnknown {

    // Own properties of Gda-6.0.Gda.SqlStatementUnknown

    static name: string
}

export interface SqlStatementUpdate {

    // Own fields of Gda-6.0.Gda.SqlStatementUpdate

    any: SqlAnyPart
    on_conflict: string | null
    table: SqlTable
    fields_list: any[]
    expr_list: any[]
    cond: SqlExpr
}

export class SqlStatementUpdate {

    // Own properties of Gda-6.0.Gda.SqlStatementUpdate

    static name: string
}

export interface SqlTable {

    // Own fields of Gda-6.0.Gda.SqlTable

    any: SqlAnyPart
    table_name: string | null
    validity_meta_object: MetaDbObject

    // Owm methods of Gda-6.0.Gda.SqlTable

    /**
     * Creates a new #GdaSqlTable structure initiated with the values stored in `table`.
     * @returns a new #GdaSqlTable structure.
     */
    copy(): SqlTable
    /**
     * Frees a #GdaSqlTable structure and its members.
     */
    free(): void
    /**
     * Creates a new string representing a table. You need to free the returned string
     * using g_free();
     * @returns a new string with the name of the field or "null" in case @table is invalid.
     */
    serialize(): string | null
    /**
     * Sets the table's name using the string held by `value`. When call, `value` is freed using
     * gda_value_free().
     * @param value a #GValue holding a string to take from
     */
    take_name(value: any): void
}

/**
 * This structure represents the name of a table.
 * @record 
 */
export class SqlTable {

    // Own properties of Gda-6.0.Gda.SqlTable

    static name: string

    // Constructors of Gda-6.0.Gda.SqlTable

    /**
     * Creates a new #GdaSqlTable structure, using `parent` as its parent part.
     * @constructor 
     * @param parent a #GdaSqlStatementSelect, #GdaSqlStatementInsert, #GdaSqlStatementDelete, #GdaSqlStatementUpdate
     * @returns a new #GdaSqlTable structure.
     */
    constructor(parent: SqlAnyPart) 
    /**
     * Creates a new #GdaSqlTable structure, using `parent` as its parent part.
     * @constructor 
     * @param parent a #GdaSqlStatementSelect, #GdaSqlStatementInsert, #GdaSqlStatementDelete, #GdaSqlStatementUpdate
     * @returns a new #GdaSqlTable structure.
     */
    static new(parent: SqlAnyPart): SqlTable
}

export interface StatementClass {

    // Own fields of Gda-6.0.Gda.StatementClass

    parent_class: GObject.ObjectClass
    checked: (stmt: Statement, cnc: Connection, checked: boolean) => void
    reset: (stmt: Statement) => void
}

export abstract class StatementClass {

    // Own properties of Gda-6.0.Gda.StatementClass

    static name: string
}

export interface Text {

    // Owm methods of Gda-6.0.Gda.Text

    /**
     * Free resources on #GdaText object.
     */
    free(): void
    get_string(): string
    /**
     * Set string. The string is duplicated.
     * @param str a string to set from
     */
    set_string(str: string): void
    /**
     * Takes ownership on a given string, so you don't need to free it.
     * @param str a string to take ownership on
     */
    take_string(str: string | null): void
}

export class Text {

    // Own properties of Gda-6.0.Gda.Text

    static name: string

    // Constructors of Gda-6.0.Gda.Text

    /**
     * Creates a new #GdaText object, initialy with no string.
     * Use #gda_text_set_string() to set a string to.
     * @constructor 
     * @returns a new #GdaText object
     */
    constructor() 
    /**
     * Creates a new #GdaText object, initialy with no string.
     * Use #gda_text_set_string() to set a string to.
     * @constructor 
     * @returns a new #GdaText object
     */
    static new(): Text
    /**
     * The "encoding" consists in replacing non
     * alphanumeric character with the string "__gdaXX" where XX is the hex. representation
     * of the non alphanumeric char.
     * @param text the text to convert
     * @returns a new string
     */
    static to_alphanum(text: string): string | null
}

export interface Time {

    // Owm methods of Gda-6.0.Gda.Time

    /**
     * Create a copy of #GdaTime
     * @returns a pointer to a new #GdaTime struct
     */
    copy(): Time
    /**
     * Free resources holded by the #GdaTime instance
     */
    free(): void
    /**
     * Extract fraction of seconds from the instance of #GdaTime
     * @returns fraction of seconds
     */
    get_fraction(): number
    /**
     * Get hours from the #GdaTime instance
     */
    get_hour(): number
    /**
     * Get minutes from the #GdaTime instance
     */
    get_minute(): number
    /**
     * Get second component from #GdaTime
     */
    get_second(): number
    /**
     * Returns number of seconds to be added to UTC time.
     */
    get_timezone(): number
    /**
     * Returns a #GTimeZone in use in this `time`.
     */
    get_tz(): GLib.TimeZone
    /**
     * Set new value for the second fraction
     * @param fraction new second fraction to set to.
     */
    set_fraction(fraction: number): void
    /**
     * Set hour component to the #GdaTime instance.
     * @param hour new hours to set to
     */
    set_hour(hour: number): void
    /**
     * Set minutes to the #GdaTime instance
     * @param minute new minutes to set to
     */
    set_minute(minute: number): void
    /**
     * Set second component
     * @param second new seconds to set to
     */
    set_second(second: number): void
    /**
     * Set timezone component for the instance of #GdaTime
     * @param timezone new time zone to set to. See #gda_time_change_timezone
     */
    set_timezone(timezone: number): void
    /**
     * Creates a string representation of a #GdaTime in local time
     * with the timezone designation.
     * @returns a new string
     */
    to_string(): string | null
    /**
     * Creates a string representation of a #GdaTime in local time
     * without timezone designation.
     * @returns a new string
     */
    to_string_local(): string | null
    /**
     * Creates a string representation of a #GdaTime in UTC time
     * with time zone indication.
     * @returns a new string
     */
    to_string_utc(): string | null
    /**
     * Translate `time'`s to give timezone
     * @param ntz a new #GTimeZone to use
     */
    to_timezone(ntz: GLib.TimeZone): Time
    /**
     * Change time zone to UTC.
     */
    to_utc(): Time
    /**
     * A time is always valid, so this method has been deprecated.
     * @returns #TRUE if #GdaTime is valid; %FALSE otherwise.
     */
    valid(): boolean
}

/**
 * Represents a time information.
 * @record 
 */
export class Time {

    // Own properties of Gda-6.0.Gda.Time

    static name: string

    // Constructors of Gda-6.0.Gda.Time

    /**
     * Creates a new #GdaTime with time now local.
     * @constructor 
     * @returns a new #GdaTime structure
     */
    constructor() 
    /**
     * Creates a new #GdaTime with time now local.
     * @constructor 
     * @returns a new #GdaTime structure
     */
    static new(): Time
    /**
     * Creates new instcne of #GdaTime from #GDateTime.
     * @constructor 
     * @param dt a #GDateTime to get time from
     * @returns the a new value storing a time
     */
    static new_from_date_time(dt: GLib.DateTime): Time
    /**
     * Create new instance of #GdaTime from the provided values.
     * @constructor 
     * @param hour hours
     * @param minute minutes
     * @param second seconds
     * @param fraction fraction of seconds
     * @param timezone timezone in seconds added to UTC
     * @returns the a new value storing a time
     */
    static new_from_values(hour: number, minute: number, second: number, fraction: number, timezone: number): Time
}

export interface TransactionStatusClass {

    // Own fields of Gda-6.0.Gda.TransactionStatusClass

    parent_class: GObject.ObjectClass
}

export abstract class TransactionStatusClass {

    // Own properties of Gda-6.0.Gda.TransactionStatusClass

    static name: string
}

export interface TransactionStatusEvent {

    // Own fields of Gda-6.0.Gda.TransactionStatusEvent

    trans: TransactionStatus
    type: TransactionStatusEventType
    conn_event: ConnectionEvent
}

export class TransactionStatusEvent {

    // Own properties of Gda-6.0.Gda.TransactionStatusEvent

    static name: string
}

export interface TreeClass {

    // Own fields of Gda-6.0.Gda.TreeClass

    object_class: GObject.ObjectClass
    node_changed: (tree: Tree, node: TreeNode) => void
    node_inserted: (tree: Tree, node: TreeNode) => void
    node_has_child_toggled: (tree: Tree, node: TreeNode) => void
    node_deleted: (tree: Tree, node_path: string) => void
}

export abstract class TreeClass {

    // Own properties of Gda-6.0.Gda.TreeClass

    static name: string
}

export interface TreeManagerClass {

    // Own fields of Gda-6.0.Gda.TreeManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class TreeManagerClass {

    // Own properties of Gda-6.0.Gda.TreeManagerClass

    static name: string
}

export interface TreeMgrColumnsClass {

    // Own fields of Gda-6.0.Gda.TreeMgrColumnsClass

    object_class: TreeManagerClass
}

export abstract class TreeMgrColumnsClass {

    // Own properties of Gda-6.0.Gda.TreeMgrColumnsClass

    static name: string
}

export interface TreeMgrLabelClass {

    // Own fields of Gda-6.0.Gda.TreeMgrLabelClass

    parent_class: TreeManagerClass
}

export abstract class TreeMgrLabelClass {

    // Own properties of Gda-6.0.Gda.TreeMgrLabelClass

    static name: string
}

export interface TreeMgrSchemasClass {

    // Own fields of Gda-6.0.Gda.TreeMgrSchemasClass

    object_class: TreeManagerClass
}

export abstract class TreeMgrSchemasClass {

    // Own properties of Gda-6.0.Gda.TreeMgrSchemasClass

    static name: string
}

export interface TreeMgrSelectClass {

    // Own fields of Gda-6.0.Gda.TreeMgrSelectClass

    object_class: TreeManagerClass
}

export abstract class TreeMgrSelectClass {

    // Own properties of Gda-6.0.Gda.TreeMgrSelectClass

    static name: string
}

export interface TreeMgrTablesClass {

    // Own fields of Gda-6.0.Gda.TreeMgrTablesClass

    object_class: TreeManagerClass
}

export abstract class TreeMgrTablesClass {

    // Own properties of Gda-6.0.Gda.TreeMgrTablesClass

    static name: string
}

export interface TreeNodeClass {

    // Own fields of Gda-6.0.Gda.TreeNodeClass

    object_class: GObject.ObjectClass
    node_changed: (reporting: TreeNode, node: TreeNode) => void
    node_inserted: (reporting: TreeNode, node: TreeNode) => void
    node_has_child_toggled: (reporting: TreeNode, node: TreeNode) => void
    node_deleted: (reporting: TreeNode, relative_path: string) => void
    dump_header: (node: TreeNode) => string | null
    dump_children: (node: TreeNode, prefix: string, in_string: GLib.String) => void
}

export abstract class TreeNodeClass {

    // Own properties of Gda-6.0.Gda.TreeNodeClass

    static name: string
}

export interface Worker {

    // Owm methods of Gda-6.0.Gda.Worker

    /**
     * Cancels a job which has not yet been processed. If the job cannot be found, is being processed or has already been processed,
     * then this function returns %FALSE.
     * 
     * This function can be called on already cancelled jobs, and simply returns %TRUE in that case.
     * @param job_id the ID of the job, as returned by gda_worker_submit_job()
     * @returns %TRUE if the job was cancelled
     */
    cancel_job(job_id: number): boolean
    /**
     * Request that the worker thread call `func` with the `data` argument, much like gda_worker_submit_job(),
     * but waits (starting a #GMainLoop) for a maximum of `timeout_ms` miliseconds for `func` to be executed.
     * 
     * If this function is called from within `worker'`s worker thread, then this function simply calls `func` with `data` and does not
     * use `context`.
     * 
     * The following cases are possible if this function is not called from within `worker'`s worker thread:
     * <itemizedlist>
     *  <listitem><para>the call to `func` took less than `timeout_ms` miliseconds: the return value is %TRUE and
     *    `out_result` contains the result of the `func'`s execution, and `out_job_id` contains %NULL. Note in this
     *    case that `error` may still contain an error code if `func'`s execution produced an error. Also note that in this case
     *    any setting defined by gda_worker_set_callback() is not applied (as the result is immediately returned)</para></listitem>
     *  <listitem><para>The call to `func` takes more then `timeout_ms` miliseconds: the return value is %TRUE and
     *    `out_result` is %NULL and `out_job_id` contains the ID of the job as if it had been submitted using gda_worker_submit_job().
     *    If `out_job_id` is %NULL, and if no setting has been defined using gda_worker_set_callback(), then the job will be discarded
     *    (as if gda_worker_forget_job() had been called).
     *    </para></listitem>
     *  <listitem><para>The call to `func` could not be done (some kind of plumbing error for instance): the returned value is %FALSE
     *    and `out_result` and `out_job_id` are set to %NULL (if they are not %NULL)</para></listitem>
     * </itemizedlist>
     * 
     * Notes:
     * <itemizedlist>
     *  <listitem><para>`result_destroy_func` is needed in case `out_result` is %NULL (to avoid memory leaks)</para></listitem>
     *  <listitem><para>passing %NULL for `context` is similar to passing the result of g_main_context_ref_thread_default()</para></listitem>
     * </itemizedlist>
     * @param context a #GMainContext to execute a main loop in (while waiting), or %NULL
     * @param timeout_ms the maximum number of milisecons to wait before returning, or %0 for unlimited wait
     * @param out_result a place to store the result, if any, of `func'`s execution, or %NULL
     * @param out_job_id a place to store the ID of the job having been submitted, or %NULL
     * @param func the function to call from the worker thread
     * @param data_destroy_func a function to destroy `data,` or %NULL
     * @returns %TRUE if no error occurred
     */
    do_job(context: GLib.MainContext | null, timeout_ms: number, out_result: any | null, out_job_id: number | null, func: WorkerFunc, data_destroy_func: GLib.DestroyNotify | null): boolean
    /**
     * Fetch the value returned by execution the `job_id` job.
     * 
     * Warning: if an error occurred during the
     * execution of the requested function within the worker thread, then it will show as `error,` while the return value
     * of this function will be %TRUE.
     * 
     * Note: if there is a result, it will be stored in `out_result,` and it's up to the caller to free
     * the result, the #GdaWorker object will not do it (ownership of the result is transfered to the caller).
     * @param job_id the ID of the job, as returned by gda_worker_submit_job()
     * @param out_result a place to store the value returned by the execution of the requested function within the worker thread, or %NULL
     * @returns %TRUE if the jobs has completed
     */
    fetch_job_result(job_id: number, out_result: any | null): boolean
    /**
     * Forget all about the job with ID `job_id`. As opposed to gda_worker_cancel_job(), this function can be used to tell
     * `worker` that whatever happens to the specific job, you are not interrested anymore (i.e. that `worker` can
     * do whatever is possible to simple discard everything related to that job).
     * @param job_id the ID of the job, as returned by gda_worker_submit_job()
     */
    forget_job(job_id: number): void
    /**
     * Get a pointer to `worker'`s inner worker thread
     * @returns the #GThread
     */
    get_worker_thread(): GLib.Thread
    /**
     * Increases `worker'`s reference count.
     * @returns @worker
     */
    ref(): Worker
    /**
     * Declare a callback function to be called when a job has been processed. If `callback` is %NULL, then any previously
     * effect of this function is removed. If the same function is called with a different `callback` value, then the previous one
     * is simply replaced.
     * 
     * Since this function adds a new source of events to the specified #GMainContext (or the default one if `context` is %NULL),
     * 
     * Notes:
     * <itemizedlist>
     *  <listitem><para>before calling this function, `worker` internally gets rid of the job, so the `jib_id` passed
     *   to `callback` does not actually designate a known job ID, and so calling gda_worker_fetch_job_result() for that
     *   job ID will fail</para></listitem>
     *  <listitem><para>the job's result, if any, has to be freed by `callback` (`worker` does not do it)</para></listitem>
     *  <listitem><para>any call to this function will only be honored for the jobs submitted _after_ calling it, the ones
     *   submitted before are not affected</para></listitem>
     *  <listitem><para>passing %NULL for `context` is similar to passing the result of g_main_context_ref_thread_default()</para></listitem>
     * </itemizedlist>
     * @param context a #GMainContext, or %NULL
     * @param callback the function to call when a job submitted from within the calling thread using gda_worker_submit_job() has finished being processed.
     * @returns %TRUE if no error occurred.
     */
    set_callback(context: GLib.MainContext | null, callback: WorkerCallback | null): boolean
    /**
     * Request that the worker thread call `func` with the `data` argument.
     * 
     * Notes:
     * <itemizedlist>
     *   <listitem><para>if `data_destroy_func` is not %NULL, then it will be called to destroy `data` when the job is removed,
     *    which can occur within the context of the worker thread, or within the context of any thread using `worker`.</para></listitem>
     *   <listitem><para>if `result_destroy_func` is not %NULL, then it will be called to destroy the result produced by `func`.
     *    Similarly to `data_destroy_func,` if it is not %NULL (and if there is a non %NULL result), then that function can be
     *    called in the context of any thread.</para></listitem>
     *   <listitem><para>the error here can only report failures while executing gda_worker_submit_job(), not any error which may occur
     *    while executing `func` from the worker thread.</para></listitem>
     *   <listitem><para>when this function returns, the job may already have been completed, so you should not assume that the job
     *    is in any specific state.</para></listitem>
     *  <listitem><para>passing %NULL for `callback_context` is similar to passing the result of g_main_context_ref_thread_default()</para></listitem>
     * </itemizedlist>
     * @param callback_context a #GMainContext, or %NULL (ignored if no setting has been defined with gda_worker_set_callback())
     * @param func the function to call from the worker thread
     * @param data_destroy_func a function to destroy `data,` or %NULL
     * @returns a job ID, or %0 if an error occurred
     */
    submit_job(callback_context: GLib.MainContext | null, func: WorkerFunc, data_destroy_func: GLib.DestroyNotify | null): number
    /**
     * Tells if the thread from which this function is called is `worker'`s worker thread.
     * @returns %TRUE if this function is called is @worker's worker thread
     */
    thread_is_worker(): boolean
    /**
     * Decreases `worker'`s reference count. When reference count reaches %0, then the
     * object is destroyed, note that in this case this function only returns when the
     * worker thread actually has terminated, which can take some time if it's busy.
     * 
     * If `worker` is %NULL, then nothing happens.
     */
    unref(): void
    /**
     * Request that the worker thread call `func` with the `data` argument, much like gda_worker_submit_job(),
     * but waits (blocks) until `func` has been executed.
     * 
     * Note: it's up to the caller to free the result, the #GdaWorker object will not do it (ownership of the result is
     * transfered to the caller).
     * @param func the function to call from the worker thread
     * @returns the result of @func's execution
     */
    wait_job(func: WorkerFunc): any | null
}

export class Worker {

    // Own properties of Gda-6.0.Gda.Worker

    static name: string

    // Constructors of Gda-6.0.Gda.Worker

    /**
     * Creates a new #GdaWorker object.
     * @constructor 
     * @returns a new #GdaWorker, or %NULL if an error occurred
     */
    constructor() 
    /**
     * Creates a new #GdaWorker object.
     * @constructor 
     * @returns a new #GdaWorker, or %NULL if an error occurred
     */
    static new(): Worker
    /**
     * This function creates a new #GdaWorker, or reuses the one at `location`. Specifically:
     * <orderedlist>
     *   <listitem><para>if *`location` is %NULL, then a new #GdaWorker is created. In this case if `allow_destroy` is %FALSE, then the returned
     *     #GdaWorker's reference count is 2, thus preventing it form ever being destroyed (unless gda_worker_unref() is called somewhere else)</para></listitem>
     *   <listitem><para>if *`location` is not %NULL, the the #GdaWorker it points to is returned, its reference count increased by 1</para></listitem>
     * </orderedlist>
     * 
     * When the returned #GdaWorker's reference count reaches 0, then it is destroyed, and *`location` is set to %NULL.
     * 
     * In any case, the returned value is the same as *`location`.
     * @param location a place to store and test for existence, not %NULL
     * @param allow_destroy defines if the created `GdaWorker` (see case 1 below) will allow its reference to drop to 0 and be destroyed
     * @returns a #GdaWorker
     */
    static new_unique(location: Worker, allow_destroy: boolean): Worker
    static error_quark(): GLib.Quark
}

export interface XaTransactionClass {

    // Own fields of Gda-6.0.Gda.XaTransactionClass

    parent_class: GObject.ObjectClass
}

export abstract class XaTransactionClass {

    // Own properties of Gda-6.0.Gda.XaTransactionClass

    static name: string
}

export interface XaTransactionId {

    // Own fields of Gda-6.0.Gda.XaTransactionId

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

    // Owm methods of Gda-6.0.Gda.XaTransactionId

    /**
     * Creates a string representation of `xid,` in the format &lt;gtrid&gt;,&lt;bqual&gt;,&lt;formatID&gt; the
     * &lt;gtrid&gt; and &lt;bqual&gt; strings contain alphanumeric characters, and non alphanumeric characters
     * are converted to "%ab" where ab is the hexadecimal representation of the character.
     * @returns a new string representation of @xid
     */
    to_string(): string | null
}

export class XaTransactionId {

    // Own properties of Gda-6.0.Gda.XaTransactionId

    static name: string
}

    export type SqlBuilderId = number
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