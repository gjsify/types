
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Gda-6.0
 */

import type libxml2 from '@girs/node-libxml2-2.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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
    ALREADY_OPENED_ERROR,
    STATEMENT_TYPE_ERROR,
    CANT_LOCK_ERROR,
    TASK_NOT_FOUND_ERROR,
    CLOSED_ERROR,
    META_DATA_CONTEXT_ERROR,
    NO_MAIN_CONTEXT_ERROR,
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
enum ConnectionStatus {
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
    INVALID,
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
/**
 * These error are primary for developers to troubleshoot the problem rather than for user.
 */
enum DbCatalogError {
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
enum DbColumnError {
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
enum DbFkeyReferenceAction {
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
enum DbIndexError {
    CONNECTION_NOT_OPENED,
    SERVER_OPERATION,
}
/**
 * Enum values to specify the sorting
 */
enum DbIndexSortOrder {
    /**
     * ascending sorting
     */
    ASC,
    /**
     * descending sorting
     */
    DESC,
}
enum DbTableError {
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
enum DbViewRefAction {
    RESTRICT,
    CASCADE,
}
enum DdlModifiableError {
    NOT_IMPLEMENTED,
    CONNECTION_NOT_OPENED,
    MISSED_DATA,
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
    VALUE_CHANGE_ERROR,
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
enum ProviderMetaError {
    NO_CONNECTION_ERROR,
    QUERY_ERROR,
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
/**
 * Represents the different types of sets of virtual functions which can be implemented for each provider
 */
enum ServerProviderFunctionsType {
    BASE,
    META,
    XA,
    MAX,
}
enum ServerProviderMetaType {
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
enum SetError {
    XML_SPEC_ERROR,
    HOLDER_NOT_FOUND_ERROR,
    INVALID_ERROR,
    READ_ONLY_ERROR,
    IMPLEMENTATION_ERROR,
}
/**
 * Type of part.
 */
enum SqlAnyPartType {
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
 * Describes transactions' isolation level
 */
enum TransactionIsolation {
    /**
     * isolation level defined by the server
     */
    SERVER_DEFAULT,
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
enum WorkerError {
    INTER_THREAD_ERROR,
    JOB_NOT_FOUND_ERROR,
    JOB_QUEUED_ERROR,
    JOB_BEING_PROCESSED_ERROR,
    JOB_PROCESSED_ERROR,
    JOB_CANCELLED_ERROR,
    THREAD_KILLED,
}
enum XaTransactionError {
    ALREADY_REGISTERED_ERROR,
    DTP_NOT_SUPPORTED_ERROR,
    CONNECTION_BRANCH_LENGTH_ERROR,
}
enum XaType {
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
/**
 * Attributes of a value, used internally by Libgda in different contexts. Values can be OR'ed.
 * @bitfield 
 */
enum ValueAttribute {
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
const ATTRIBUTE_AUTO_INCREMENT: string | null
/**
 * The corresponding attribute is the description of the object it refers to (value has a G_TYPE_STRING type).
 */
const ATTRIBUTE_DESCRIPTION: string | null
/**
 * The corresponding attribute specifies if the object it refers to has its value to default (value has a G_TYPE_BOOLEAN type).
 */
const ATTRIBUTE_IS_DEFAULT: string | null
/**
 * The corresponding attribute is the name of the object it refers to (value has a G_TYPE_STRING type).
 */
const ATTRIBUTE_NAME: string | null
/**
 * The corresponding attribute is the number of significant digits of the object it refers to (value has a G_TYPE_INT type).
 */
const ATTRIBUTE_NUMERIC_PRECISION: string | null
/**
 * The corresponding attribute is the number of significant digits to the right of the decimal point of the object it refers to (value has a G_TYPE_INT type).
 */
const ATTRIBUTE_NUMERIC_SCALE: string | null
/**
 * This attribute, if %TRUE specifies that a tree node may or may not have any children nodes (value has a G_TYPE_BOOLEAN type).
 */
const ATTRIBUTE_TREE_NODE_UNKNOWN_CHILDREN: string | null
const EXTRA_AUTO_INCREMENT: string | null
const SQLSTATE_GENERAL_ERROR: string | null
const SQLSTATE_NO_ERROR: string | null
const TIMEZONE_INVALID: number
/**
 * Does the opposite of gda_text_to_alphanum(), in the same string
 * @param text a string
 * @returns @text if conversion succeeded or %NULL if an error occurred
 */
function alphanumToText(text: string | null): string | null
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
function completionListGet(cnc: Connection, sql: string | null, start: number, end: number): string[] | null
/**
 * Creates an INSERT, an UPDATE and a DELETE statement from a SELECT statement
 * using the database metadata available in `cnc'`s meta store. Each statements are computed only if
 * the corresponding place to store the created statement is not %NULL.
 * @param cnc a #GdaConnection
 * @param selectStmt a SELECT #GdaStatement (compound statements not handled)
 * @param requirePk TRUE if the created statement have to use a primary key
 * @returns %TRUE if no error occurred
 */
function computeDmlStatements(cnc: Connection, selectStmt: Statement, requirePk: boolean): [ /* returnType */ boolean, /* insertStmt */ Statement | null, /* updateStmt */ Statement | null, /* deleteStmt */ Statement | null ]
/**
 * Computes a SELECT statement which selects all the rows the `update_stmt` would update. Beware
 * however that this #GdaSqlStatement does not select anything (ie it would be rendered as "SELECT FROM ... WHERE ...")
 * and before being usable, one needs to add some fields to actually select.
 * @param updateStmt an UPDATE statement
 * @returns a new #GdaStatement if no error occurred, or %NULL otherwise
 */
function computeSelectStatementFromUpdate(updateStmt: Statement): SqlStatement | null
/**
 * Computes a #GdaSqlExpr expression which can be used in the WHERE clause of an UPDATE
 * or DELETE statement when a row from the result of the `stsel` statement has to be modified.
 * @param stsel a #GdaSqlSelectStatement
 * @param mtable a #GdaMetaTable
 * @param requirePk set to TRUE if a primary key ir required
 * @returns a new #GdaSqlExpr, or %NULL if an error occurred.
 */
function computeUniqueTableRowCondition(stsel: SqlStatementSelect, mtable: MetaTable, requirePk: boolean): SqlExpr | null
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
 * @param requirePk set to %TRUE if a primary key is required
 * @returns a new #GdaSqlExpr, or %NULL if an error occurred.
 */
function computeUniqueTableRowConditionWithCnc(cnc: Connection | null, stsel: SqlStatementSelect, mtable: MetaTable, requirePk: boolean): SqlExpr | null
/**
 * Obtain a pointer to a #GdaDataHandler which can manage #GValue values of type `for_type`. The returned
 * data handler will be adapted to use the current locale information (for example dates will be formatted
 * taking into account the locale).
 * 
 * The returned pointer is %NULL if there is no default data handler available for the `for_type` data type
 * @param forType a #GType type
 * @returns a #GdaDataHandler which must be destroyed using g_object_unref()
 */
function dataHandlerGetDefault(forType: GObject.GType): DataHandler
function dataModelErrorQuark(): GLib.Quark
function dateTimeCopy(ts: GLib.DateTime): GLib.DateTime
function ddlModifiableErrorQuark(): GLib.Quark
/**
 * Escapes `string` to make it understandable by a DBMS. The escape method is very common and replaces any
 * occurrence of "'" with "''" and "\" with "\\"
 * @param string string to escape
 * @returns a new string
 */
function defaultEscapeString(string: string | null): string | null
/**
 * Do the reverse of gda_default_escape_string(): transforms any "''" into "'", any
 * "\\" into "\" and any "\'" into "'".
 * @param string string to unescape
 * @returns a new unescaped string, or %NULL in an error was found in @string
 */
function defaultUnescapeString(string: string | null): string | null
/**
 * Extract the DSN, username and password from `string`. in `string,` the various parts are strings
 * which are expected to be encoded using an RFC 1738 compliant encoding. If they are specified,
 * the returned username and password strings are correctly decoded.
 * 
 * `out_username` and `out_password` may be set to %NULL depending on `string'`s format.
 * @param string a string in the "[&lt;username&gt;[:&lt;password&gt;]`]`&lt;DSN&gt;" form
 * @param outDsn a place to store the new string containing the &lt;DSN&gt; part
 * @param outUsername a place to store the new string containing the &lt;username&gt; part
 * @param outPassword a place to store the new string containing the &lt;password&gt; part
 */
function dsnSplit(string: string | null, outDsn: string | null, outUsername: string | null, outPassword: string | null): void
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
function gTypeFromString(str: string | null): GObject.GType
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
function gTypeToString(type: GObject.GType): string | null
/**
 * Does the same as strcmp(`id1`, `id2`), but handles the case where id1 and/or id2 are enclosed in double quotes.
 * can also be used in hash tables as a #GEqualFunc.
 * @param id1 an identifier string
 * @param id2 an identifier string
 * @returns %TRUE if @id1 and @id2 are equal.
 */
function identifierEqual(id1: string | null, id2: string | null): boolean
/**
 * computes a hash string from `id,` to be used in hash tables as a #GHashFunc
 * @param id an identifier string
 * @returns a new hash
 */
function identifierHash(id: string | null): number
/**
 * Disables GDA logs.
 */
function logDisable(): void
/**
 * Enables GDA logs.
 */
function logEnable(): void
function logIsEnabled(): boolean
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
function parseFormattedDate(gdate: GLib.Date, value: string | null, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): boolean
function parseFormattedTime(value: string | null, sep: number): Time
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
function parseFormattedTimestamp(value: string | null, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): GLib.DateTime | null
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
function parseIso8601Date(gdate: GLib.Date, value: string | null): boolean
/**
 * Extracts time parts from `value,` and sets `timegda'`s contents
 * 
 * Accepted date format is "HH:MM:SS[.ms][TZ]" where TZ is +hour or -hour.
 * If no time zone is given UTC is used.
 * @param value a string
 * @returns a new parsed #GdaTime
 */
function parseIso8601Time(value: string | null): Time
function providerMetaErrorQuark(): GLib.Quark
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
function rewriteSqlStatementForNullParameters(sqlst: SqlStatement, params: Set): [ /* returnType */ SqlStatement | null, /* outModified */ boolean | null ]
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
function rewriteStatementForNullParameters(stmt: Statement, params: Set): [ /* returnType */ boolean, /* outStmt */ Statement | null ]
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
function rfc1738Decode(string: string | null): boolean
/**
 * Encodes `string` using the RFC 1738 recommendations: the
 * <constant>&lt;&gt;&quot;#%{}|\^~[]&apos;`;/?:`=`&amp;</constant> and space characters are replaced by
 * <constant>&quot;%%ab&quot;</constant> where
 * <constant>ab</constant> is the hexadecimal number corresponding to the character.
 * @param string a string to encode
 * @returns a new string or %NULL
 */
function rfc1738Encode(string: string | null): string | null
/**
 * Creates a new #GdaStatement, selecting the same data as `stmt,` but which always returns an
 * empty (no row) data model. This is use dy database providers' implementations.
 * @param stmt a SELECT #GdaStatement
 * @returns a new #GdaStatement
 */
function selectAlterSelectForEmpty(stmt: Statement): Statement
function serverOperationCreateTableArgGetFkeyRefFieldGetType(): GObject.GType
function sqlErrorQuark(): GLib.Quark
/**
 * Add double quotes around the `str` identifier. This function is normally used only by database provider's
 * implementation. Any double quote character is replaced by two double quote characters.
 * 
 * For other uses, see gda_sql_identifier_quote().
 * @param str an SQL identifier
 */
function sqlIdentifierForceQuotes(str: string | null): string | null
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
function sqlIdentifierPrepareForCompare(str: string | null): string | null
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
 * @param metaStoreConvention 
 * @param forceQuotes set to %TRUE to force the returned string to be quoted
 * @returns the representation of @id ready to be used in SQL statement, as a new string,          or %NULL if @id is in a wrong format
 */
function sqlIdentifierQuote(id: string | null, cnc: Connection | null, prov: ServerProvider | null, metaStoreConvention: boolean, forceQuotes: boolean): string | null
/**
 * Splits `id` into an array of it sub parts. `id'`s format has to be "&lt;part&gt;[.&lt;part&gt;[...]]" where
 * each part is either a text surrounded by double quotes which can contain upper and lower cases or
 * an SQL identifier in lower case.
 * 
 * For example the <![CDATA["test.\"ATable\""]]> string will result in the array: <![CDATA[{"test", "\"ATable\"", NULL}]]>
 * @param id an SQL identifier
 * @returns a new %NULL-terminated array of strings, or NULL (use g_strfreev() to free the returned array)
 */
function sqlIdentifierSplit(id: string | null): string[] | null
/**
 * Returns #GdaSqlOperatorType that correspond with the string `op`.
 * @param op a #GdaSqlOperation structure
 * @returns #GdaSqlOperatorType
 */
function sqlOperationOperatorFromString(op: string | null): SqlOperatorType
/**
 * Returns a constant string representing a operator name. You don't need to free
 * the returned string.
 * @param op a #GdaSqlOperation structure
 * @returns a string with the operator's name or NULL in case @op is invalid.
 */
function sqlOperationOperatorToString(op: SqlOperatorType): string | null
/**
 * Creates a new string representing the join type.
 * @param type a #GdaSqlSelectJoinType structure to be copied
 * @returns a string representing the Join type.
 */
function sqlSelectJoinTypeToString(type: SqlSelectJoinType): string | null
function sqlStatementGetContentsInfos(type: SqlStatementType): SqlStatementContentsInfo
/**
 * Converts a string to a #GdaSqlStatementType value, see also gda_sql_statement_type_to_string()
 * @param type a string representing a #GdaSqlStatementType type
 * @returns a #GdaSqlStatementType value
 */
function sqlStatementStringToType(type: string | null): SqlStatementType
/**
 * Converts a #GdaSqlStatementType to a string, see also gda_sql_statement_string_to_type()
 * @param type a #GdaSqlStatementType value
 * @returns a constant string
 */
function sqlStatementTypeToString(type: SqlStatementType): string | null
/**
 * Simplified version of gda_value_stringify().
 * @param value a #GValue pointer
 * @returns a new string
 */
function sqlValueStringify(value: any): string | null
/**
 * Performs the reverse of gda_binary_to_string() (note that for any "\xyz" succession
 * of 4 characters where "xyz" represents a valid octal value, the resulting read value will
 * be modulo 256).
 * 
 * I `str` is %NULL, then an empty (i.e. where the `data` part is %NULL) #GdaBinary is created and returned.
 * @param str a string to convert, or %NULL
 * @returns a new #GdaBinary if no error were found in @str, or %NULL otherwise
 */
function stringToBinary(str: string | null): Binary
/**
 * Performs the reverse of gda_blob_to_string().
 * @param str a string to convert
 * @returns a new #gdaBlob if no error were found in @str, or NULL otherwise
 */
function stringToBlob(str: string | null): Blob
/**
 * The "encoding" consists in replacing non
 * alphanumeric character with the string "__gdaXX" where XX is the hex. representation
 * of the non alphanumeric char.
 * @param text the text to convert
 * @returns a new string
 */
function textToAlphanum(text: string | null): string | null
/**
 * Check the column types of a GdaDataModel.
 * @param model a #GdaDataModel object
 * @param types array with `nbcols` length of type GType or null (if any data type is accepted)
 * @returns %TRUE if the data model's columns match the provided data types and number
 */
function utilityCheckDataModel(model: DataModel, types: GObject.GType[]): boolean
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
 * @param useColIds set to %TRUE to add column ID information
 * @returns %TRUE if no error occurred
 */
function utilityDataModelDumpDataToXml(model: DataModel, parent: libxml2.NodePtr, cols: number[] | null, rows: number[] | null, useColIds: boolean): boolean
/**
 * Finds the description of a field into Metadata from a #GdaDataModel.
 * @param model a #GdaDataSelect data model
 * @param fieldName field name
 * @returns The field's description, or NULL if description is not set
 */
function utilityDataModelFindColumnDescription(model: DataSelect, fieldName: string | null): string | null
/**
 * Note: this method may set the "source" custom string property
 * @param holder a #GdaHolder
 * @param node an xmlNodePtr with a &lt;parameter&gt; tag
 * @param sources a list of #GdaDataModel
 * @returns %TRUE if no error occurred
 */
function utilityHolderLoadAttributes(holder: Holder, node: libxml2.NodePtr, sources: DataModel[] | null): boolean
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
function valueCompare(value1: any, value2: any): number
/**
 * Creates a new #GValue from an existing one.
 * @param value value to get a copy from.
 * @returns a newly allocated #GValue with a copy of the data in @value. Free-function: gda_value_free
 */
function valueCopy(value: any): any
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
function valueDiffer(value1: any, value2: any): number
/**
 * Deallocates all memory associated to a #GValue.
 * @param value the resource to free (or %NULL)
 */
function valueFree(value: any | null): void
function valueGetBinary(value: any): Binary
function valueGetBlob(value: any): Blob
function valueGetGeometricPoint(value: any): GeometricPoint
function valueGetMetaStoreChange(value: any): MetaStoreChange
function valueGetNumeric(value: any): Numeric
function valueGetShort(value: any): number
function valueGetTime(value: any): Time
function valueGetUshort(value: any): number
/**
 * Tests if a given `value` is of type #GDA_TYPE_NULL.
 * @param value value to test.
 * @returns a boolean that says whether or not @value is of type #GDA_TYPE_NULL.
 */
function valueIsNull(value: any): boolean
/**
 * Gets whether the value stored in the given #GValue is of numeric type or not.
 * @param value a #GValue.
 * @returns %TRUE if a number, %FALSE otherwise.
 */
function valueIsNumber(value: any): boolean
/**
 * Creates a new #GValue of type `type,` left in the same state as when g_value_init() is called.
 * @param type the new value type.
 * @returns the newly created #GValue with the specified @type. You need to set the value in the returned GValue. Free-function: gda_value_free
 */
function valueNew(type: GObject.GType): any
/**
 * Makes a new #GValue of type #GDA_TYPE_BINARY with value `val`.
 * @param val value to set for the new #GValue.
 * @param size the size of the memory pool pointer to by `val`.
 * @returns the newly created #GValue. Free-function: gda_value_free
 */
function valueNewBinary(val: number, size: number): any
/**
 * Makes a new #GValue of type #GDA_TYPE_BLOB with the data contained by `val`.
 * @param val value to set for the new #GValue.
 * @param size the size of the memory pool pointer to by `val`.
 * @returns the newly created #GValue. Free-function: gda_value_free
 */
function valueNewBlob(val: number, size: number): any
/**
 * Makes a new #GValue of type #GDA_TYPE_BLOB interfacing with the contents of the file
 * named `filename`
 * @param filename name of the file to manipulate
 * @returns the newly created #GValue. Free-function: gda_value_free
 */
function valueNewBlobFromFile(filename: string | null): any
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
function valueNewDateTimeFromTimet(val: number): any
/**
 * Creates a new default value.
 * @param defaultVal the default value as a string, or %NULL
 * @returns a new #GValue of the type #GDA_TYPE_DEFAULT
 */
function valueNewDefault(defaultVal: string | null): any
/**
 * Makes a new #GValue of type `type` from its string representation.
 * 
 * For more information
 * about the string format, see the gda_value_set_from_string() function.
 * This function is typically used when reading configuration files or other non-user input that should be locale
 * independent.
 * @param asString stringified representation of the value.
 * @param type the new value type.
 * @returns the newly created #GValue or %NULL if the string representation cannot be converted to the specified @type. Free-function: gda_value_free
 */
function valueNewFromString(asString: string | null, type: GObject.GType): any
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
function valueNewFromXml(node: libxml2.NodePtr): any
/**
 * Creates a new #GValue initiated to a #GdaNull structure with a #GDA_TYPE_NULL, to
 * represent a NULL in the database.
 * @returns a new #GValue of the type #GDA_TYPE_NULL
 */
function valueNewNull(): any
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
function valueNewTimeFromTimet(val: number): any
/**
 * Resets the #GValue and set a new type to #GType.
 * @param value the #GValue to be reseted
 * @param type the #GType to set to
 */
function valueResetWithType(value: any, type: GObject.GType): void
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param binary a #GdaBinary structure with the data and its size to be stored in `value`.
 */
function valueSetBinary(value: any, binary: Binary): void
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param blob a #GdaBlob structure with the data and its size to be stored in `value`.
 */
function valueSetBlob(value: any, blob: Blob): void
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
 * @param asString the stringified representation of the value.
 * @param type the type of the value
 * @returns %TRUE if the value has been converted to @type from its string representation; it not means that the value is converted successfully, just that the transformation is available. %FALSE otherwise.
 */
function valueSetFromString(value: any, asString: string | null, type: GObject.GType): boolean
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
function valueSetFromValue(value: any, from: any): boolean
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param val value to be stored in `value`.
 */
function valueSetGeometricPoint(value: any, val: GeometricPoint): void
function valueSetMetaStoreChange(value: any, change: MetaStoreChange): void
/**
 * Sets the type of `value` to #GDA_TYPE_NULL.
 * @param value a #GValue that will store a value of type #GDA_TYPE_NULL.
 */
function valueSetNull(value: any): void
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param val value to be stored in `value`.
 */
function valueSetNumeric(value: any, val: Numeric): void
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param val value to be stored in `value`.
 */
function valueSetShort(value: any, val: number): void
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param val value to be stored in `value`.
 */
function valueSetTime(value: any, val: Time): void
/**
 * Stores `val` into `value`.
 * @param value a #GValue that will store `val`.
 * @param val value to be stored in `value`.
 */
function valueSetUshort(value: any, val: number): void
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
function valueStringify(value: any): string | null
/**
 * Stores `val` into `value,` but on the contrary to gda_value_set_binary(), the `binary`
 * argument is not copied, but used as-is and it should be considered owned by `value`.
 * @param value a #GValue that will store `val`.
 * @param binary a #GdaBinary structure with the data and its size to be stored in `value`.
 */
function valueTakeBinary(value: any, binary: Binary): void
/**
 * Stores `val` into `value,` but on the contrary to gda_value_set_blob(), the `blob`
 * argument is not copied, but used as-is and it should be considered owned by `value`.
 * @param value a #GValue that will store `val`.
 * @param blob a #GdaBlob structure with the data and its size to be stored in `value`.
 */
function valueTakeBlob(value: any, blob: Blob): void
/**
 * This methods creates an XML string representation of a #GValue
 * @param value a #GValue to convert to string
 * @returns an string representing a #GValue in XML format
 */
function valueToXmlString(value: any): string | null
function workerErrorQuark(): GLib.Quark
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
 * @param allowDestroy defines if the created `GdaWorker` (see case 1 below) will allow its reference to drop to 0 and be destroyed
 * @returns a #GdaWorker
 */
function workerNewUnique(location: Worker, allowDestroy: boolean): Worker
interface ConnectionOpenFunc {
    (cnc: Connection, jobId: number, result: boolean, error: GLib.Error, data: any | null): void
}
/**
 * Specifies the type of functions passed to gda_sql_any_part_foreach().
 * @callback 
 * @param part the current #GdaSqlAnyPart node
 * @param data user data passed to gda_sql_any_part_foreach().
 * @returns FALSE if the gda_sql_any_part_foreach() should stop at this point and fail
 */
interface SqlForeachFunc {
    (part: SqlAnyPart, data: any | null): boolean
}
interface SqlReservedKeywordsFunc {
    (word: string | null): boolean
}
interface TreeManagerNodeFunc {
    (manager: TreeManager, parent: TreeNode | null, name: string | null): TreeNode
}
interface TreeManagerNodesFunc {
    (manager: TreeManager, node: TreeNode | null, childrenNodes: TreeNode[]): TreeNode[]
}
interface WorkerCallback {
    (worker: Worker, jobId: number, resultData: any | null, error: GLib.Error): void
}
/**
 * Specifies the type of function to be passed to gda_worker_submit_job(), gda_worker_do_job() and gda_worker_wait_job().
 * @callback 
 * @returns a pointer to some data which will be returned by gda_worker_fetch_job_result()
 */
interface WorkerFunc {
    (): any | null
}
module DataHandler {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DataHandler {

    // Own properties of Gda-6.0.Gda.DataHandler

    __gtype__: number

    // Owm methods of Gda-6.0.Gda.DataHandler

    // Has conflict: acceptsGType(type: GObject.GType): boolean
    // Has conflict: getDescr(): string | null
    // Has conflict: getSaneInitValue(type: GObject.GType): any | null
    // Has conflict: getSqlFromValue(value: any | null): string | null
    // Has conflict: getStrFromValue(value: any | null): string | null
    // Has conflict: getValueFromSql(sql: string | null, type: GObject.GType): any
    // Has conflict: getValueFromStr(str: string | null, type: GObject.GType): any

    // Own virtual methods of Gda-6.0.Gda.DataHandler

    /**
     * Checks wether the GdaDataHandler is able to handle the gda type given as argument.
     * @virtual 
     * @param type a #GType
     * @returns %TRUE if the gda type can be handled
     */
    acceptsGType(type: GObject.GType): boolean
    /**
     * Get a short description of the GdaDataHandler
     * @virtual 
     * @returns the description
     */
    getDescr(): string | null
    /**
     * Creates a new GValue which holds a sane initial value to be used if no value is specifically
     * provided. For example for a simple string, this would return a new value containing the "" string.
     * @virtual 
     * @param type a #GType
     * @returns the new #GValue, or %NULL if no such value can be created.
     */
    getSaneInitValue(type: GObject.GType): any | null
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
    getSqlFromValue(value: any | null): string | null
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
    getStrFromValue(value: any | null): string | null
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
    getValueFromSql(sql: string | null, type: GObject.GType): any
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
    getValueFromStr(str: string | null, type: GObject.GType): any

    // Class property signals of Gda-6.0.Gda.DataHandler

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

class DataHandler extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataHandler

    static name: string

    // Constructors of Gda-6.0.Gda.DataHandler

    constructor(config?: DataHandler.ConstructorProperties) 
    _init(config?: DataHandler.ConstructorProperties): void
    /**
     * Obtain a pointer to a #GdaDataHandler which can manage #GValue values of type `for_type`. The returned
     * data handler will be adapted to use the current locale information (for example dates will be formatted
     * taking into account the locale).
     * 
     * The returned pointer is %NULL if there is no default data handler available for the `for_type` data type
     * @param forType a #GType type
     * @returns a #GdaDataHandler which must be destroyed using g_object_unref()
     */
    static getDefault(forType: GObject.GType): DataHandler
}

module DataModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `access-changed`
     */
    interface AccessChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `reset`
     */
    interface ResetSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `row-inserted`
     */
    interface RowInsertedSignalCallback {
        (row: number): void
    }

    /**
     * Signal callback interface for `row-removed`
     */
    interface RowRemovedSignalCallback {
        (row: number): void
    }

    /**
     * Signal callback interface for `row-updated`
     */
    interface RowUpdatedSignalCallback {
        (row: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DataModel {

    // Own properties of Gda-6.0.Gda.DataModel

    __gtype__: number

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
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    /**
     * Appends a row to the data model (the new row will possibly have NULL values for all columns,
     * or some other values depending on the data model implementation)
     * 
     * Upon errors -1 will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @returns the number of the added row, or -1 if an error occurred
     */
    appendRow(): number
    /**
     * Appends a row to the given data model. If any value in `values` is actually %NULL, then
     * it is considered as a default value. If `values` is %NULL then all values are set to their default value.
     * 
     * Upon errors -1 will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param values #GList of #GValue* representing the row to add.  The          length must match model's column count.  These #GValue     are value-copied (the user is still responsible for freeing them).
     * @returns the number of the added row, or -1 if an error occurred
     */
    appendValues(values: any[] | null): number
    /**
     * Makes a copy of `src` into a new #GdaDataModelArray object
     * @returns a new data model, or %NULL if an error occurred
     */
    arrayCopyModel(): DataModelArray | null
    /**
     * Like gda_data_model_array_copy_model(), makes a copy of `src,` but copies only some
     * columns.
     * @param cols array of `src'`s columns to copy into the new array, not %NULL
     * @returns a new data model, or %NULL if an error occurred
     */
    arrayCopyModelExt(cols: number[]): DataModelArray | null
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
    createIter(): DataModelIter
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
    describeColumn(col: number): Column | null
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
     * @param toStream where to dump the data model
     */
    dump(toStream: any | null): void
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
    dumpAsString(): string | null
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
    exportToFile(format: DataModelIOFormat, file: string | null, cols: number[] | null, rows: number[] | null, options: Set): boolean
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
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string | null
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
    getAccessFlags(): DataModelAccessFlags
    /**
     * Get the attributes of the value stored at (row, col) in `model,` which
     * is an ORed value of #GdaValueAttribute flags. As a special case, if
     * `row` is -1, then the attributes returned correspond to a "would be" value
     * if a row was added to `model`.
     * @param col a valid column number
     * @param row a valid row number, or -1
     * @returns the attributes as an ORed value of #GdaValueAttribute
     */
    getAttributesAt(col: number, row: number): ValueAttribute
    /**
     * Get the index of the first column named `name` in `model`.
     * @param name a column name
     * @returns the column index, or -1 if no column named @name was found
     */
    getColumnIndex(name: string | null): number
    getColumnName(col: number): string | null
    getColumnTitle(col: number): string | null
    /**
     * Get the global data model exception(s) that occurred when using `model`.
     * This is useful for example for the LDAP related
     * data models where some rows may be missing because the LDAP search has reached a limit
     * imposed by the LDAP server.
     * @returns a pointer to a %NULL terminated array of #GError, or %NULL.
     */
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    /**
     * Returns the status of notifications changes on the given data model.
     */
    getNotify(): boolean
    /**
     * Returns the first row where all the values in `values` at the columns identified at
     * `cols_index` match. If the row can't be identified, then returns -1;
     * 
     * NOTE: the `cols_index` array MUST contain a column index for each value in `values`
     * @param values a list of #GValue values (no %NULL is allowed)
     * @param colsIndex an array of #gint containing the column number to match each value of `values`
     * @returns the requested row number, of -1 if not found
     */
    getRowFromValues(values: any[], colsIndex: number[]): number
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
     * @param expectedType the expected data type of the returned value
     * @param nullok if TRUE, then NULL values (value of type %GDA_TYPE_NULL) will not generate any error
     * @returns a #GValue containing the value stored in the given position, or %NULL on error (out-of-bound position, wrong data type, etc).
     */
    getTypedValueAt(col: number, row: number, expectedType: GObject.GType, nullok: boolean): any | null
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
    getValueAt(col: number, row: number): any | null
    /**
     * Imports data contained in the `file` file into `model;` the format is detected.
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param file the filename to import from
     * @param colsTrans a #GHashTable for columns translating, or %NULL, see gda_data_model_import_from_model()
     * @param options list of options for the export
     * @returns TRUE if no error occurred
     */
    importFromFile(file: string | null, colsTrans: GLib.HashTable | null, options: Set): boolean
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
     * @param colsTrans a #GHashTable for columns translating, or %NULL
     * @returns TRUE if no error occurred.
     */
    importFromModel(from: DataModel, overwrite: boolean, colsTrans: GLib.HashTable | null): boolean
    /**
     * Loads the data from `string` into `model`.
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param string the string to import data from
     * @param colsTrans a hash table containing which columns of `model` will be imported, or %NULL for all columns, see gda_data_model_import_from_model()
     * @param options list of options for the export
     * @returns TRUE if no error occurred.
     */
    importFromString(string: string | null, colsTrans: GLib.HashTable | null, options: Set): boolean
    /**
     * Method reserved to #GdaDataModelIter implementations, should not be called directly.
     * @param iter a #GdaDataModelIter iterating in `model`
     * @returns %TRUE if @iter was moved correctly.
     */
    iterMoveNextDefault(iter: DataModelIter): boolean
    /**
     * Method reserved to #GdaDataModelIter implementations, should not be called directly.
     * @param iter a #GdaDataModelIter iterating in `model`
     * @returns %TRUE if @iter was moved correctly.
     */
    iterMovePrevDefault(iter: DataModelIter): boolean
    /**
     * Method reserved to #GdaDataModelIter implementations, should not be called directly.
     * @param iter a #GdaDataModelIter iterating in `model`
     * @param row the requested row
     * @returns %TRUE if @iter was moved correctly.
     */
    iterMoveToRowDefault(iter: DataModelIter, row: number): boolean
    /**
     * Removes a row from the data model.
     * 
     * Upon errors FALSE will be returned and `error` will be assigned a
     * #GError from the #GDA_DATA_MODEL_ERROR domain.
     * @param row the row number to be removed.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeRow(row: number): boolean
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
    rowInserted(row: number): void
    /**
     * Emits the 'row_removed' and 'changed' signal on `model`.
     * 
     * This method should only be used by #GdaDataModel implementations to
     * signal that a row has been removed
     * @param row row number.
     */
    rowRemoved(row: number): void
    /**
     * Emits the 'row_updated' and 'changed' signals on `model`.
     * 
     * This method should only be used by #GdaDataModel implementations to
     * signal that a row has been updated.
     * @param row row number.
     */
    rowUpdated(row: number): void
    /**
     * Sends a hint to the data model. The hint may or may not be handled by the data
     * model, depending on its implementation
     * @param hint a hint to send to the model
     * @param hintValue an optional value to specify the hint, or %NULL
     */
    sendHint(hint: DataModelHint, hintValue: any | null): void
    /**
     * Sets the `name` of the given `col` in `model,` and if its title is not set, also sets the
     * title to `name`.
     * @param col column number
     * @param name name for the given column.
     */
    setColumnName(col: number, name: string | null): void
    /**
     * Sets the `title` of the given `col` in `model`.
     * @param col column number
     * @param title title for the given column.
     */
    setColumnTitle(col: number, title: string | null): void
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
    setValueAt(col: number, row: number, value: any): boolean
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
    setValues(row: number, values: any[] | null): boolean
    /**
     * Re-enables notifications of changes on the given data model.
     */
    thaw(): void

    // Own signals of Gda-6.0.Gda.DataModel

    connect(sigName: "access-changed", callback: DataModel.AccessChangedSignalCallback): number
    on(sigName: "access-changed", callback: DataModel.AccessChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: DataModel.AccessChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: DataModel.AccessChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "access-changed", ...args: any[]): void
    connect(sigName: "changed", callback: DataModel.ChangedSignalCallback): number
    on(sigName: "changed", callback: DataModel.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: DataModel.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: DataModel.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "reset", callback: DataModel.ResetSignalCallback): number
    on(sigName: "reset", callback: DataModel.ResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: DataModel.ResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: DataModel.ResetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reset", ...args: any[]): void
    connect(sigName: "row-inserted", callback: DataModel.RowInsertedSignalCallback): number
    on(sigName: "row-inserted", callback: DataModel.RowInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: DataModel.RowInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: DataModel.RowInsertedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "row-inserted", ...args: any[]): void
    connect(sigName: "row-removed", callback: DataModel.RowRemovedSignalCallback): number
    on(sigName: "row-removed", callback: DataModel.RowRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: DataModel.RowRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: DataModel.RowRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "row-removed", ...args: any[]): void
    connect(sigName: "row-updated", callback: DataModel.RowUpdatedSignalCallback): number
    on(sigName: "row-updated", callback: DataModel.RowUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: DataModel.RowUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: DataModel.RowUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "row-updated", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.DataModel

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

class DataModel extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataModel

    static name: string

    // Constructors of Gda-6.0.Gda.DataModel

    constructor(config?: DataModel.ConstructorProperties) 
    _init(config?: DataModel.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module DbBuildable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DbBuildable {

    // Own properties of Gda-6.0.Gda.DbBuildable

    __gtype__: number

    // Owm methods of Gda-6.0.Gda.DbBuildable

    // Has conflict: parseNode(node: libxml2.NodePtr): boolean
    // Has conflict: writeNode(node: libxml2.NodePtr): boolean

    // Own virtual methods of Gda-6.0.Gda.DbBuildable

    /**
     * This method parse XML node and populate `self` object.
     * @virtual 
     * @param node a node to parse
     * @returns %TRUE on success, %FALSE if an error occurred
     */
    parseNode(node: libxml2.NodePtr): boolean
    /**
     * Write content from the `self` to the `node`
     * @virtual 
     * @param node a node to write data in
     * @returns %TRUE on success, %FALSE if an error occurred
     */
    writeNode(node: libxml2.NodePtr): boolean

    // Class property signals of Gda-6.0.Gda.DbBuildable

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

class DbBuildable extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DbBuildable

    static name: string

    // Constructors of Gda-6.0.Gda.DbBuildable

    constructor(config?: DbBuildable.ConstructorProperties) 
    _init(config?: DbBuildable.ConstructorProperties): void
}

module DdlModifiable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DdlModifiable {

    // Own properties of Gda-6.0.Gda.DdlModifiable

    __gtype__: number

    // Owm methods of Gda-6.0.Gda.DdlModifiable

    // Has conflict: create(cnc: Connection, userData: any | null): boolean
    // Has conflict: drop(cnc: Connection, userData: any | null): boolean
    // Has conflict: rename(cnc: Connection, userData: any | null): boolean

    // Own virtual methods of Gda-6.0.Gda.DdlModifiable

    /**
     * This method executes CREATE operation. That is, #GdaDbTable, #GdaDbIndex, and #GdaDbView
     * implement corresponding CREATE TABLE | CREATE INDEX | CREATE VIEW operations. #GdaDbColumn
     * implements ADD COLUMN operation as part of ALTER TABLE operation.
     * @virtual 
     * @param cnc Opened connection
     */
    create(cnc: Connection): boolean
    /**
     * Execute corresponding DROP operation
     * @virtual 
     * @param cnc Opened connection
     */
    drop(cnc: Connection): boolean
    /**
     * Execute corresponding RENAME operation. A lot of RENAME operations are not implemented by
     * SQLite3 provider. In this case, the SQL object must be deleted and a new one should be created.
     * @virtual 
     * @param cnc Opened connection
     */
    rename(cnc: Connection): boolean

    // Class property signals of Gda-6.0.Gda.DdlModifiable

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

class DdlModifiable extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DdlModifiable

    static name: string

    // Constructors of Gda-6.0.Gda.DdlModifiable

    constructor(config?: DdlModifiable.ConstructorProperties) 
    _init(config?: DdlModifiable.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module Lockable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Lockable {

    // Own properties of Gda-6.0.Gda.Lockable

    __gtype__: number

    // Owm methods of Gda-6.0.Gda.Lockable

    // Has conflict: lock(): void
    // Has conflict: trylock(): boolean
    // Has conflict: unlock(): void

    // Own virtual methods of Gda-6.0.Gda.Lockable

    /**
     * Locks `lockable`. If it is already locked by another thread, the current thread will block until it is unlocked
     * by the other thread.
     * 
     * Note: unlike g_mutex_lock(), this method recursive, which means a thread can lock `lockable` several times
     * (and has to unlock it as many times to actually unlock it).
     * @virtual 
     */
    lock(): void
    /**
     * Tries to lock `lockable`. If it is already locked by another thread, then it immediately returns FALSE, otherwise
     * it locks `lockable`.
     * 
     * Note: unlike g_mutex_lock(), this method recursive, which means a thread can lock `lockable` several times
     * (and has to unlock it as many times to actually unlock it).
     * @virtual 
     * @returns TRUE if the object has successfully been locked.
     */
    trylock(): boolean
    /**
     * Unlocks `lockable`. This method should not be called if the current does not already holds a lock on `lockable` (having
     * used gda_lockable_lock() or gda_lockable_trylock()).
     * @virtual 
     */
    unlock(): void

    // Class property signals of Gda-6.0.Gda.Lockable

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

class Lockable extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Lockable

    static name: string

    // Constructors of Gda-6.0.Gda.Lockable

    constructor(config?: Lockable.ConstructorProperties) 
    _init(config?: Lockable.ConstructorProperties): void
}

module Provider {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Provider {

    // Own properties of Gda-6.0.Gda.Provider

    __gtype__: number

    // Owm methods of Gda-6.0.Gda.Provider

    // Has conflict: addSavepoint(cnc: Connection, name: string | null): boolean
    // Has conflict: beginTransaction(cnc: Connection, name: string | null, level: TransactionIsolation): boolean
    // Has conflict: closeConnection(cnc: Connection): boolean
    // Has conflict: commitTransaction(cnc: Connection, name: string | null): boolean
    // Has conflict: createConnection(): Connection
    // Has conflict: createOperation(cnc: Connection, type: ServerOperationType, options: Set): ServerOperation
    // Has conflict: createParser(cnc: Connection): SqlParser
    // Has conflict: deleteSavepoint(cnc: Connection, name: string | null): boolean
    // Has conflict: escapeString(cnc: Connection, str: string | null): string | null
    // Has conflict: getDataHandler(cnc: Connection, gType: GObject.GType, dbmsType: string | null): DataHandler
    // Has conflict: getDefDbmsType(cnc: Connection, gType: GObject.GType): string | null
    // Has conflict: getLastInserted(cnc: Connection): Set
    // Has conflict: getName(): string | null
    // Has conflict: getServerVersion(cnc: Connection): string | null
    // Has conflict: getVersion(): string | null
    // Has conflict: identifierQuote(cnc: Connection | null, id: string | null, forMetaStore: boolean, forceQuotes: boolean): string | null
    // Has conflict: openConnection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    // Has conflict: performOperation(cnc: Connection, op: ServerOperation): boolean
    // Has conflict: prepareConnection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    // Has conflict: renderOperation(cnc: Connection, op: ServerOperation): string | null
    // Has conflict: rollbackSavepoint(cnc: Connection, name: string | null): boolean
    // Has conflict: rollbackTransaction(cnc: Connection, name: string | null): boolean
    // Has conflict: statementExecute(cnc: Connection, stmt: Statement, params: Set, modelUsage: StatementModelUsage, colTypes: GObject.GType, lastInsertedRow: Set): GObject.Object
    // Has conflict: statementPrepare(cnc: Connection, stmt: Statement): boolean
    // Has conflict: statementRewrite(cnc: Connection, stmt: Statement, params: Set): SqlStatement
    // Has conflict: statementToSql(cnc: Connection, stmt: Statement, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string | null, /* paramsUsed */ Holder[] | null ]
    // Has conflict: supportsFeature(cnc: Connection, feature: ConnectionFeature): boolean
    // Has conflict: supportsOperation(cnc: Connection, type: ServerOperationType, options: Set): boolean
    // Has conflict: unescapeString(cnc: Connection, str: string | null): string | null

    // Own virtual methods of Gda-6.0.Gda.Provider

    addSavepoint(cnc: Connection, name: string | null): boolean
    beginTransaction(cnc: Connection, name: string | null, level: TransactionIsolation): boolean
    closeConnection(cnc: Connection): boolean
    commitTransaction(cnc: Connection, name: string | null): boolean
    createConnection(): Connection
    createOperation(cnc: Connection, type: ServerOperationType, options: Set): ServerOperation
    createParser(cnc: Connection): SqlParser
    deleteSavepoint(cnc: Connection, name: string | null): boolean
    escapeString(cnc: Connection, str: string | null): string | null
    getDataHandler(cnc: Connection, gType: GObject.GType, dbmsType: string | null): DataHandler
    getDefDbmsType(cnc: Connection, gType: GObject.GType): string | null
    /**
     * This command should be called inmediately called after a INSERT SQL command
     * @virtual 
     * @param cnc a #GdaConnection to get last inserted from
     * @returns a #GdaSet with all data of the last inserted row
     */
    getLastInserted(cnc: Connection): Set
    getName(): string | null
    getServerVersion(cnc: Connection): string | null
    getVersion(): string | null
    identifierQuote(cnc: Connection | null, id: string | null, forMetaStore: boolean, forceQuotes: boolean): string | null
    openConnection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    performOperation(cnc: Connection, op: ServerOperation): boolean
    prepareConnection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    renderOperation(cnc: Connection, op: ServerOperation): string | null
    rollbackSavepoint(cnc: Connection, name: string | null): boolean
    rollbackTransaction(cnc: Connection, name: string | null): boolean
    statementExecute(cnc: Connection, stmt: Statement, params: Set, modelUsage: StatementModelUsage, colTypes: GObject.GType, lastInsertedRow: Set): GObject.Object
    statementPrepare(cnc: Connection, stmt: Statement): boolean
    statementRewrite(cnc: Connection, stmt: Statement, params: Set): SqlStatement
    statementToSql(cnc: Connection, stmt: Statement, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string | null, /* paramsUsed */ Holder[] | null ]
    supportsFeature(cnc: Connection, feature: ConnectionFeature): boolean
    supportsOperation(cnc: Connection, type: ServerOperationType, options: Set): boolean
    unescapeString(cnc: Connection, str: string | null): string | null

    // Class property signals of Gda-6.0.Gda.Provider

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

class Provider extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Provider

    static name: string

    // Constructors of Gda-6.0.Gda.Provider

    constructor(config?: Provider.ConstructorProperties) 
    _init(config?: Provider.ConstructorProperties): void
}

module ProviderMeta {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.ProviderMeta

        connection?: Connection | null
    }

}

interface ProviderMeta {

    // Own properties of Gda-6.0.Gda.ProviderMeta

    readonly connection: Connection
    __gtype__: number

    // Owm methods of Gda-6.0.Gda.ProviderMeta

    // Has conflict: btypes(): DataModel
    // Has conflict: characterSet(chsetCatalog: string | null, chsetSchema: string | null, chsetNameN: string | null): Row
    // Has conflict: characterSets(): DataModel
    // Has conflict: checkColumn(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, constraintName: string | null): Row
    // Has conflict: checkColumns(): DataModel
    // Has conflict: collation(collationCatalog: string | null, collationSchema: string | null, collationNameN: string | null): Row
    // Has conflict: collations(): DataModel
    // Has conflict: columns(): DataModel
    // Has conflict: constraintRef(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, constraintName: string | null): Row
    // Has conflict: constraintTable(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, constraintNameN: string | null): Row
    // Has conflict: constraintsRef(): DataModel
    // Has conflict: constraintsRefTable(tableCatalog: string | null, tableSchema: string | null, tableName: string | null): DataModel
    // Has conflict: constraintsTable(tableCatalog: string | null, tableSchema: string | null, tableName: string | null): DataModel
    // Has conflict: constraintsTables(): DataModel
    // Has conflict: domain(domainCatalog: string | null, domainSchema: string | null): Row
    // Has conflict: domainConstraint(domainCatalog: string | null, domainSchema: string | null, domainName: string | null, contraintName: string | null): Row
    // Has conflict: domainConstraints(domainCatalog: string | null, domainSchema: string | null, domainName: string | null): DataModel
    // Has conflict: domains(): DataModel
    // Has conflict: domainsConstraints(): DataModel
    // Has conflict: elementType(specificName: string | null): Row
    // Has conflict: elementTypes(): DataModel
    // Has conflict: enumType(udtCatalog: string | null, udtSchema: string | null, udtName: string | null): Row
    // Has conflict: enumsType(): DataModel
    /**
     * SQL is specific for current provider.
     * @param sql a string with the SQL to execute on provider
     * @param params a #GdaSet with all paramaters to use in query
     * @returns a new #GdaDataModel with as a result of the query
     */
    executeQuery(sql: string | null, params: Set | null): DataModel | null
    /**
     * SQL is specific for current provider.
     * @param sql a string with the SQL to execute on provider
     * @param params 
     * @returns a new #GdaDataModel with as a result of the query
     */
    executeQueryRow(sql: string | null, params: Set): Row | null
    getConnection(): Connection
    // Has conflict: indexCol(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, indexName: string | null): Row
    // Has conflict: indexCols(): DataModel
    // Has conflict: indexTable(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, indexNameN: string | null): Row
    // Has conflict: indexesTable(tableCatalog: string | null, tableSchema: string | null, tableName: string | null): DataModel
    // Has conflict: indexesTables(): DataModel
    // Has conflict: keyColumn(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, constraintName: string | null): Row
    // Has conflict: keyColumns(): DataModel
    // Has conflict: routine(routineCatalog: string | null, routineSchema: string | null, routineNameN: string | null): Row
    // Has conflict: routineCol(routCatalog: string | null, routSchema: string | null, routName: string | null): Row
    // Has conflict: routinePars(routCatalog: string | null, routSchema: string | null, routName: string | null): Row
    // Has conflict: routines(): DataModel
    // Has conflict: routinesCol(): DataModel
    // Has conflict: routinesPars(): DataModel
    // Has conflict: schemata(catalogName: string | null, schemaNameN: string | null): Row
    // Has conflict: schematas(): DataModel
    // Has conflict: table(tableCatalog: string | null, tableSchema: string | null, tableNameN: string | null): Row
    // Has conflict: tableColumn(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, columnName: string | null): Row
    // Has conflict: tableColumns(tableCatalog: string | null, tableSchema: string | null, tableName: string | null): DataModel
    // Has conflict: tables(): DataModel
    // Has conflict: tablesColumns(): DataModel
    // Has conflict: trigger(tableCatalog: string | null, tableSchema: string | null, tableName: string | null): Row
    // Has conflict: triggers(): DataModel
    // Has conflict: udt(udtCatalog: string | null, udtSchema: string | null): Row
    // Has conflict: udtCol(udtCatalog: string | null, udtSchema: string | null, udtName: string | null): Row
    // Has conflict: udtCols(): DataModel
    // Has conflict: udts(): DataModel
    // Has conflict: view(viewCatalog: string | null, viewSchema: string | null, viewNameN: string | null): Row
    // Has conflict: viewColumn(viewCatalog: string | null, viewSchema: string | null, viewName: string | null, columnName: string | null): Row
    // Has conflict: viewColumns(viewCatalog: string | null, viewSchema: string | null, viewName: string | null): DataModel
    // Has conflict: views(): DataModel
    // Has conflict: viewsColumns(): DataModel

    // Own virtual methods of Gda-6.0.Gda.ProviderMeta

    btypes(): DataModel
    characterSet(chsetCatalog: string | null, chsetSchema: string | null, chsetNameN: string | null): Row
    characterSets(): DataModel
    checkColumn(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, constraintName: string | null): Row
    checkColumns(): DataModel
    collation(collationCatalog: string | null, collationSchema: string | null, collationNameN: string | null): Row
    collations(): DataModel
    columns(): DataModel
    constraintRef(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, constraintName: string | null): Row
    constraintTable(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, constraintNameN: string | null): Row
    constraintsRef(): DataModel
    constraintsRefTable(tableCatalog: string | null, tableSchema: string | null, tableName: string | null): DataModel
    constraintsTable(tableCatalog: string | null, tableSchema: string | null, tableName: string | null): DataModel
    constraintsTables(): DataModel
    domain(domainCatalog: string | null, domainSchema: string | null): Row
    domainConstraint(domainCatalog: string | null, domainSchema: string | null, domainName: string | null, constraintName: string | null): Row
    domainConstraints(domainCatalog: string | null, domainSchema: string | null, domainName: string | null): DataModel
    domains(): DataModel
    domainsConstraints(): DataModel
    elementType(specificName: string | null): Row
    elementTypes(): DataModel
    enumType(udtCatalog: string | null, udtSchema: string | null, udtName: string | null): Row
    enumsType(): DataModel
    indexCol(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, indexName: string | null): Row
    indexCols(): DataModel
    indexTable(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, indexNameN: string | null): Row
    indexesTable(tableCatalog: string | null, tableSchema: string | null, tableName: string | null): DataModel
    indexesTables(): DataModel
    keyColumn(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, constraintName: string | null): Row
    keyColumns(): DataModel
    routine(routineCatalog: string | null, routineSchema: string | null, routineNameN: string | null): Row
    routineCol(routCatalog: string | null, routSchema: string | null, routName: string | null): Row
    routinePars(routCatalog: string | null, routSchema: string | null, routName: string | null): Row
    routines(): DataModel
    routinesCol(): DataModel
    routinesPars(): DataModel
    schemata(catalogName: string | null, schemaNameN: string | null): Row
    schematas(): DataModel
    table(tableCatalog: string | null, tableSchema: string | null, tableNameN: string | null): Row
    tableColumn(tableCatalog: string | null, tableSchema: string | null, tableName: string | null, columnName: string | null): Row
    tableColumns(tableCatalog: string | null, tableSchema: string | null, tableName: string | null): DataModel
    tables(): DataModel
    tablesColumns(): DataModel
    trigger(tableCatalog: string | null, tableSchema: string | null, tableName: string | null): Row
    triggers(): DataModel
    udt(udtCatalog: string | null, udtSchema: string | null): Row
    udtCol(udtCatalog: string | null, udtSchema: string | null, udtName: string | null): Row
    udtCols(): DataModel
    udts(): DataModel
    view(viewCatalog: string | null, viewSchema: string | null, viewNameN: string | null): Row
    viewColumn(viewCatalog: string | null, viewSchema: string | null, viewName: string | null, columnName: string | null): Row
    viewColumns(viewCatalog: string | null, viewSchema: string | null, viewName: string | null): DataModel
    views(): DataModel
    viewsColumns(): DataModel

    // Class property signals of Gda-6.0.Gda.ProviderMeta

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
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

class ProviderMeta extends GObject.Object {

    // Own properties of Gda-6.0.Gda.ProviderMeta

    static name: string

    // Constructors of Gda-6.0.Gda.ProviderMeta

    constructor(config?: ProviderMeta.ConstructorProperties) 
    _init(config?: ProviderMeta.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module Batch {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (changedStmt: GObject.Object): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Batch {

    // Own properties of Gda-6.0.Gda.Batch

    __gtype__: number

    // Own fields of Gda-6.0.Gda.Batch

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.Batch

    /**
     * Add `stmt` to the list of statements managed by `batch`. A #GdaStatement object can be
     * added multiple times to a #GdaBatch object. The `batch` increases reference count for `stmt` and
     * the `stmt` instance can be freed using g_object_unref().
     * @param stmt a statement to add to `batch'`s statements list
     */
    addStatement(stmt: Statement): void
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
    getParameters(): [ /* returnType */ boolean, /* outParams */ Set | null ]
    /**
     * Get a list of the #GdaStatement objects contained in `batch`
     * @returns a list of #GdaStatement which should not be modified.
     */
    getStatements(): Statement[]
    /**
     * Removes `stmt` from the list of statements managed by `batch`. If `stmt` is present several
     * times in `batch'`s statements' list, then only the first one is removed.
     * @param stmt a statement to remove from `batch'`s statements list
     */
    removeStatement(stmt: Statement): void
    /**
     * Creates a string representing the contents of `batch`.
     * @returns a string containing the serialized version of @batch
     */
    serialize(): string | null

    // Own virtual methods of Gda-6.0.Gda.Batch

    changed(changedStmt: Statement): void

    // Own signals of Gda-6.0.Gda.Batch

    connect(sigName: "changed", callback: Batch.ChangedSignalCallback): number
    on(sigName: "changed", callback: Batch.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Batch.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Batch.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Batch

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

class Batch extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Batch

    static name: string

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
    static errorQuark(): GLib.Quark
}

module BlobOp {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.BlobOp

        connection?: Connection | null
    }

}

interface BlobOp {

    // Own properties of Gda-6.0.Gda.BlobOp

    readonly connection: Connection
    __gtype__: number

    // Own fields of Gda-6.0.Gda.BlobOp

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.BlobOp

    getLength(): number
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
    readAll(blob: Blob): boolean
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
    writeAll(blob: Blob): boolean

    // Class property signals of Gda-6.0.Gda.BlobOp

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
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

class BlobOp extends GObject.Object {

    // Own properties of Gda-6.0.Gda.BlobOp

    static name: string

    // Constructors of Gda-6.0.Gda.BlobOp

    constructor(config?: BlobOp.ConstructorProperties) 
    _init(config?: BlobOp.ConstructorProperties): void
}

module Column {

    // Signal callback interfaces

    /**
     * Signal callback interface for `g-type-changed`
     */
    interface GTypeChangedSignalCallback {
        (oldType: GObject.GType, newType: GObject.GType): void
    }

    /**
     * Signal callback interface for `name-changed`
     */
    interface NameChangedSignalCallback {
        (oldName: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.Column

        desc?: string | null
        id?: string | null
        name?: string | null
    }

}

interface Column {

    // Own properties of Gda-6.0.Gda.Column

    desc: string | null
    id: string | null
    name: string | null
    __gtype__: number

    // Own fields of Gda-6.0.Gda.Column

    parentInstance: GObject.Object

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
    getAllowNull(): boolean
    getAutoIncrement(): boolean
    getDbmsType(): string | null
    getDefaultValue(): any | null
    getDescription(): string | null
    getGType(): GObject.GType
    getName(): string | null
    getPosition(): number
    /**
     * Sets the 'allow null' flag of the given column.
     * @param allow whether the given column should allows null values or not.
     */
    setAllowNull(allow: boolean): void
    /**
     * Sets the auto increment flag for the given column.
     * @param isAuto auto increment status.
     */
    setAutoIncrement(isAuto: boolean): void
    /**
     * Defines `column'`s database type
     * @param dbmsType a string
     */
    setDbmsType(dbmsType: string | null): void
    /**
     * Sets `column'`s default #GValue.
     * @param defaultValue default #GValue for the column
     */
    setDefaultValue(defaultValue: any | null): void
    /**
     * Sets the column's description
     * @param descr description.
     */
    setDescription(descr: string | null): void
    /**
     * Sets the type of `column` to `type`.
     * @param type the new type of `column`.
     */
    setGType(type: GObject.GType): void
    /**
     * Sets the name of `column` to `name`.
     * @param name the new name of `column`.
     */
    setName(name: string | null): void
    /**
     * Sets the position of the column refer to in the containing
     * data model.
     * @param position the wanted position of the column in the containing data model.
     */
    setPosition(position: number): void

    // Own virtual methods of Gda-6.0.Gda.Column

    gTypeChanged(oldType: GObject.GType, newType: GObject.GType): void
    nameChanged(oldName: string | null): void

    // Own signals of Gda-6.0.Gda.Column

    connect(sigName: "g-type-changed", callback: Column.GTypeChangedSignalCallback): number
    on(sigName: "g-type-changed", callback: Column.GTypeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-type-changed", callback: Column.GTypeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-type-changed", callback: Column.GTypeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "g-type-changed", newType: GObject.GType, ...args: any[]): void
    connect(sigName: "name-changed", callback: Column.NameChangedSignalCallback): number
    on(sigName: "name-changed", callback: Column.NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: Column.NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: Column.NameChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "name-changed", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Column

    connect(sigName: "notify::desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::desc", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
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

class Column extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Column

    static name: string

    // Constructors of Gda-6.0.Gda.Column

    constructor(config?: Column.ConstructorProperties) 
    constructor() 
    static new(): Column
    _init(config?: Column.ConstructorProperties): void
}

module Config {

    // Signal callback interfaces

    /**
     * Signal callback interface for `dsn-added`
     */
    interface DsnAddedSignalCallback {
        (newDsn: any | null): void
    }

    /**
     * Signal callback interface for `dsn-changed`
     */
    interface DsnChangedSignalCallback {
        (dsn: any | null): void
    }

    /**
     * Signal callback interface for `dsn-removed`
     */
    interface DsnRemovedSignalCallback {
        (oldDsn: any | null): void
    }

    /**
     * Signal callback interface for `dsn-to-be-removed`
     */
    interface DsnToBeRemovedSignalCallback {
        (oldDsn: any | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface Config {

    // Own properties of Gda-6.0.Gda.Config

    /**
     * File to use for system-wide DSN list. When changed, the whole list of DSN will be reloaded.
     */
    systemFilename: string | null
    /**
     * File to use for per-user DSN list. When changed, the whole list of DSN will be reloaded.
     */
    userFilename: string | null
    __gtype__: number

    // Own fields of Gda-6.0.Gda.Config

    parentInstance: GObject.Object

    // Own virtual methods of Gda-6.0.Gda.Config

    dsnAdded(newDsn: DsnInfo): void
    dsnChanged(dsn: DsnInfo): void
    dsnRemoved(oldDsn: DsnInfo): void
    dsnToBeRemoved(oldDsn: DsnInfo): void

    // Own signals of Gda-6.0.Gda.Config

    connect(sigName: "dsn-added", callback: Config.DsnAddedSignalCallback): number
    on(sigName: "dsn-added", callback: Config.DsnAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-added", callback: Config.DsnAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-added", callback: Config.DsnAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dsn-added", ...args: any[]): void
    connect(sigName: "dsn-changed", callback: Config.DsnChangedSignalCallback): number
    on(sigName: "dsn-changed", callback: Config.DsnChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-changed", callback: Config.DsnChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-changed", callback: Config.DsnChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dsn-changed", ...args: any[]): void
    connect(sigName: "dsn-removed", callback: Config.DsnRemovedSignalCallback): number
    on(sigName: "dsn-removed", callback: Config.DsnRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-removed", callback: Config.DsnRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-removed", callback: Config.DsnRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dsn-removed", ...args: any[]): void
    connect(sigName: "dsn-to-be-removed", callback: Config.DsnToBeRemovedSignalCallback): number
    on(sigName: "dsn-to-be-removed", callback: Config.DsnToBeRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-to-be-removed", callback: Config.DsnToBeRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-to-be-removed", callback: Config.DsnToBeRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dsn-to-be-removed", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Config

    connect(sigName: "notify::system-filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::system-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::system-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::system-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::system-filename", ...args: any[]): void
    connect(sigName: "notify::user-filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-filename", ...args: any[]): void
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

class Config extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Config

    static name: string

    // Constructors of Gda-6.0.Gda.Config

    constructor(config?: Config.ConstructorProperties) 
    _init(config?: Config.ConstructorProperties): void
    /**
     * Tells if the global (system) configuration can be modified (considering
     * system permissions and settings)
     * @returns TRUE if system-wide configuration can be modified
     */
    static canModifySystemConfig(): boolean
    /**
     * Add or update a DSN from the definition in `info`.
     * 
     * This method may fail with a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * @param info a pointer to a filled GdaDsnInfo structure
     * @returns TRUE if no error occurred
     */
    static defineDsn(info: DsnInfo): boolean
    /**
     * Tells if the data source identified as `dsn_name` needs any authentication. If a &lt;username&gt;
     * and optionally a &lt;password&gt; are specified, they are ignored.
     * @param dsnName the name of a DSN, in the "[&lt;username&gt;[:&lt;password&gt;]`]`&lt;DSN&gt;" format
     * @returns TRUE if an authentication is needed
     */
    static dsnNeedsAuthentication(dsnName: string | null): boolean
    static errorQuark(): GLib.Quark
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
     * @param dsnName the name of the DSN to look for
     * @returns a pointer to read-only #GdaDsnInfo structure, or %NULL if not found
     */
    static getDsnInfo(dsnName: string | null): DsnInfo
    /**
     * Get a pointer to a read-only #GdaDsnInfo at the `index` position
     * @param index an index
     * @returns the pointer or %NULL if no DSN exists at position @index
     */
    static getDsnInfoAtIndex(index: number): DsnInfo
    /**
     * Get the index (starting at 0) of the DSN named `dsn_name`
     * @param dsnName a DSN
     * @returns the index or -1 if not found
     */
    static getDsnInfoIndex(dsnName: string | null): number
    /**
     * Get the number of defined DSN
     * @returns the number of defined DSN
     */
    static getNbDsn(): number
    /**
     * Get a pointer to the session-wide #GdaServerProvider for the
     * provider named `provider_name`. The caller must not call g_object_unref() on the
     * returned object.
     * 
     * This method may fail with a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * @param providerName a database provider
     * @returns a pointer to the #GdaServerProvider, or %NULL if an error occurred
     */
    static getProvider(providerName: string | null): ServerProvider
    /**
     * Get some information about the a database provider (adapter) named
     * @param providerName a database provider
     * @returns a pointer to read-only #GdaProviderInfo structure, or %NULL if not found
     */
    static getProviderInfo(providerName: string | null): ProviderInfo
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
    static listDsn(): DataModel
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
    static listProviders(): DataModel
    /**
     * Remove the DSN named `dsn_name`.
     * 
     * This method may fail with a %GDA_CONFIG_ERROR domain error (see the #GdaConfigError error codes).
     * @param dsnName the name of the DSN to remove
     * @returns TRUE if no error occurred
     */
    static removeDsn(dsnName: string | null): boolean
}

module Connection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    interface ClosedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `dsn-changed`
     */
    interface DsnChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `error`
     */
    interface ErrorSignalCallback {
        (event: ConnectionEvent): void
    }

    /**
     * Signal callback interface for `opened`
     */
    interface OpenedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `status-changed`
     */
    interface StatusChangedSignalCallback {
        (status: ConnectionStatus): void
    }

    /**
     * Signal callback interface for `transaction-status-changed`
     */
    interface TransactionStatusChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Lockable.ConstructorProperties, GObject.Object.ConstructorProperties {

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

interface Connection extends Lockable {

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
    __gtype__: number

    // Own fields of Gda-6.0.Gda.Connection

    parentInstance: GObject.Object

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
    addEvent(event: ConnectionEvent): void
    /**
     * Declares that `prepared_stmt` is a prepared statement object associated to `gda_stmt` within the connection
     * (meaning the connection increments the reference counter of `prepared_stmt)`.
     * 
     * If `gda_stmt` changes or is destroyed, the the association will be lost and the connection will lose the
     * reference it has on `prepared_stmt`.
     * @param gdaStmt a #GdaStatement object
     * @param preparedStmt a prepared statement object (as a #GdaPStmt object, or more likely a descendant)
     */
    addPreparedStatement(gdaStmt: Statement, preparedStmt: PStmt): void
    /**
     * Adds a SAVEPOINT named `name`.
     * @param name name of the savepoint to add
     * @returns TRUE if no error occurred
     */
    addSavepoint(name: string | null): boolean
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
     * @param modelUsage specifies how the returned data model(s) will be used, as a #GdaStatementModelUsage enum
     * @returns a new list of #GObject objects
     */
    batchExecute(batch: Batch, params: Set | null, modelUsage: StatementModelUsage): GObject.Object[]
    /**
     * Starts a transaction on the data source, identified by the `name` parameter.
     * 
     * Before starting a transaction, you can check whether the underlying
     * provider does support transactions or not by using the gda_connection_supports_feature() function.
     * @param name the name of the transation to start, or %NULL
     * @param level the requested transaction level (use %GDA_TRANSACTION_ISOLATION_SERVER_DEFAULT to apply the server default)
     * @returns %TRUE if the transaction was started successfully with the corresponding isolation level, %FALSE otherwise.
     */
    beginTransaction(name: string | null, level: TransactionIsolation): boolean
    /**
     * This function lets you clear the list of #GdaConnectionEvent's of the
     * given connection.
     */
    clearEventsList(): void
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
    commitTransaction(name: string | null): boolean
    /**
     * A convenient method to create a new #GdaDbCatalog instance and set the current `cnc` as a
     * property.  If for some reason, this approach doesn't fit well, the same task can be achieved
     * by the following code:
     * 
     * GdaDbCatalog *catalog = gda_db_catalog_new ();
     * g_object_set (catalog, "connection", cnc, NULL);
     * @returns A new instance of #GdaDbCatalog. The new object should be deallocated using g_object_unref().
     */
    createDbCatalog(): DbCatalog
    /**
     * Creates a new #GdaServerOperation object which can be modified in order
     * to perform the type type of action. It is a wrapper around the gda_server_provider_create_operation()
     * method.
     * @param type the type of operation requested
     * @param options an optional list of parameters
     * @returns a new #GdaServerOperation object, or %NULL in the connection's provider does not support the @type type of operation or if an error occurred
     */
    createOperation(type: ServerOperationType, options: Set | null): ServerOperation
    /**
     * Creates a new parser object able to parse the SQL dialect understood by `cnc`.
     * If the #GdaServerProvider object internally used by `cnc` does not have its own parser,
     * then %NULL is returned, and a general SQL parser can be obtained
     * using gda_sql_parser_new().
     * @returns a new #GdaSqlParser object, or %NULL
     */
    createParser(): SqlParser
    /**
     * Removes any prepared statement associated to `gda_stmt` in `cnc:` this undoes what
     * gda_connection_add_prepared_statement() does.
     * @param gdaStmt a #GdaStatement object
     */
    delPreparedStatement(gdaStmt: Statement): void
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
     * @param conditionColumnName the name of the column to used in the WHERE condition clause
     * @param conditionValue the `condition_column_type'`s GType
     * @returns TRUE if no error occurred, FALSE otherwise
     */
    deleteRowFromTable(table: string | null, conditionColumnName: string | null, conditionValue: any): boolean
    /**
     * Delete the SAVEPOINT named `name` when not used anymore.
     * @param name name of the savepoint to delete
     * @returns TRUE if no error occurred
     */
    deleteSavepoint(name: string | null): boolean
    /**
     * This is a convenience function to execute a SQL command over the opened connection. For the
     * returned value, see gda_connection_statement_execute_non_select()'s documentation.
     * @param sql a query statement that must not begin with "SELECT"
     * @returns the number of rows affected or -1, or -2
     */
    executeNonSelectCommand(sql: string | null): number
    /**
     * Execute a SQL SELECT command over an opened connection.
     * @param sql a query statement that must begin with "SELECT"
     * @returns a new #GdaDataModel if successful, %NULL otherwise
     */
    executeSelectCommand(sql: string | null): DataModel
    /**
     * Gets the user name used to open this connection.
     * @returns the user name.
     */
    getAuthentication(): string | null
    /**
     * Gets the connection string used to open this connection.
     * 
     * The connection string is the string sent over to the underlying
     * database provider, which describes the parameters to be used
     * to open a connection on the underlying data source.
     * @returns the connection string used when opening the connection.
     */
    getCncString(): string | null
    /**
     * This function allows you to determine the actual format for the date values.
     * @returns %TRUE if no error occurred
     */
    getDateFormat(): [ /* returnType */ boolean, /* outFirst */ GLib.DateDMY | null, /* outSecond */ GLib.DateDMY | null, /* outThird */ GLib.DateDMY | null, /* outSep */ string | null ]
    getDsn(): string | null
    /**
     * Retrieves a list of the last errors occurred during the connection. The returned list is
     * chronologically ordered such as that the most recent event is the #GdaConnectionEvent of the first node.
     * 
     * Warning: the `cnc` object may change the list if connection events occur
     * @returns a #GList of #GdaConnectionEvent objects (the list should not be modified)
     */
    getEvents(): ConnectionEvent[]
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
    getMainContext(thread: GLib.Thread | null): GLib.MainContext
    /**
     * Get or initializes the #GdaMetaStore associated to `cnc`
     * @returns a #GdaMetaStore object
     */
    getMetaStore(): MetaStore
    /**
     * see #gda_connection_get_meta_store_data
     * @param metaType describes which data to get.
     * @param filters a #GList of #GdaHolder objects
     * @returns a #GdaDataModel containing the data required. The caller is responsible for freeing the returned model using g_object_unref().
     */
    getMetaStoreData(metaType: ConnectionMetaType, filters: Holder[]): DataModel
    /**
     * Gets the #GdaConnectionOptions used to open this connection.
     * @returns the connection options.
     */
    getOptions(): ConnectionOptions
    /**
     * Retrieves a pointer to an object representing a prepared statement for `gda_stmt` within `cnc`. The
     * association must have been done using gda_connection_add_prepared_statement().
     * @param gdaStmt a #GdaStatement object
     * @returns the prepared statement, or %NULL if no association exists
     */
    getPreparedStatement(gdaStmt: Statement): PStmt
    /**
     * Gets a pointer to the #GdaServerProvider object used to access the database
     * @returns the #GdaServerProvider (NEVER NULL)
     */
    getProvider(): ServerProvider
    /**
     * Gets the name (identifier) of the database provider used by `cnc`
     * @returns a non modifiable string
     */
    getProviderName(): string | null
    /**
     * Get the current status of `cnc`. Note that this function needs to lock the connection (see #GdaLockable)
     * to obtain the result.
     * @returns the connection's status
     */
    getStatus(): ConnectionStatus
    /**
     * Get the status of `cnc` regarding transactions. The returned object should not be modified
     * or destroyed; however it may be modified or destroyed by the connection itself.
     * 
     * If %NULL is returned, then no transaction has been associated with `cnc`
     * @returns a #GdaTransactionStatus object, or %NULL
     */
    getTransactionStatus(): TransactionStatus
    /**
     * `col_names` and `values` must have length (&gt;= 1).
     * 
     * This is a convenience function, which creates an INSERT statement and executes it using the values
     * provided. It internally relies on variables which makes it immune to SQL injection problems.
     * 
     * The equivalent SQL command is: INSERT INTO &lt;table&gt; (&lt;column_name&gt; [,...]) VALUES (&lt;column_name&gt; = &lt;new_value&gt; [,...]).
     * @param table table's name to insert into
     * @param colNames a list of column names (as const gchar *)
     * @param values a list of values (as #GValue)
     * @returns TRUE if no error occurred, FALSE otherwise
     */
    insertRowIntoTableV(table: string | null, colNames: string[], values: any[]): boolean
    /**
     * Internal function to be called by database providers to force a transaction status
     * change.
     * @param newstate the new state
     */
    internalChangeTransactionState(newstate: TransactionStatusState): void
    /**
     * Get the opaque pointer previously set using gda_connection_internal_set_provider_data().
     * If it's not set, then add a connection event and returns %NULL
     * @returns the pointer to the opaque structure set using gda_connection_internal_set_provider_data(), or %NULL
     */
    internalGetProviderDataError(): ServerProviderConnectionData | null
    /**
     * Internal function to be called by database providers to reset the transaction status.
     */
    internalResetTransactionStatus(): void
    /**
     * Internal functions to be called by database providers when a savepoint has been added
     * to keep track of the transaction status of the connection
     * 
     * Note: this function should not be called if gda_connection_internal_statement_executed()
     * has already been called because a statement's execution was necessary to perform
     * the action.
     * @param parentTrans name of the parent transaction, or %NULL
     * @param svpName savepoint's name, or %NULL
     */
    internalSavepointAdded(parentTrans: string | null, svpName: string | null): void
    /**
     * Internal functions to be called by database providers when a savepoint has been removed
     * to keep track of the transaction status of the connection
     * 
     * Note: this function should not be called if gda_connection_internal_statement_executed()
     * has already been called because a statement's execution was necessary to perform
     * the action.
     * @param svpName savepoint's name, or %NULL
     */
    internalSavepointRemoved(svpName: string | null): void
    /**
     * Internal functions to be called by database providers when a savepoint has been rolled back
     * to keep track of the transaction status of the connection
     * 
     * Note: this function should not be called if gda_connection_internal_statement_executed()
     * has already been called because a statement's execution was necessary to perform
     * the action.
     * @param svpName savepoint's name, or %NULL
     */
    internalSavepointRolledback(svpName: string | null): void
    /**
     * Note: calling this function more than once will not make it call `destroy_func` on any previously
     * set opaque `data,` you'll have to do it yourself.
     * 
     * Note: `destroy_func,` needs to free the memory associated to `data,` if necessary.
     * @param data a #GdaServerProviderConnectionData, which can be extended as needed by the provider for which `cnc` is opened
     * @param destroyFunc function to call when the connection closes and `data` needs to be destroyed
     */
    internalSetProviderData(data: ServerProviderConnectionData, destroyFunc: GLib.DestroyNotify): void
    /**
     * Internal functions to be called by database providers when a statement has been executed
     * to keep track of the transaction status of the connection
     * @param stmt a #GdaStatement which has been executed
     * @param params execution's parameters
     * @param error a #GdaConnectionEvent if the execution failed, or %NULL
     */
    internalStatementExecuted(stmt: Statement, params: Set | null, error: ConnectionEvent): void
    /**
     * Internal functions to be called by database providers when a transaction has been committed
     * to keep track of the transaction status of the connection
     * 
     * Note: this function should not be called if gda_connection_internal_statement_executed()
     * has already been called because a statement's execution was necessary to perform
     * the action.
     * @param transName transaction's name, or %NULL
     */
    internalTransactionCommitted(transName: string | null): void
    /**
     * Internal functions to be called by database providers when a transaction has been rolled
     * back to keep track of the transaction status of the connection
     * 
     * Note: this function should not be called if gda_connection_internal_statement_executed()
     * has already been called because a statement's execution was necessary to perform
     * the action.
     * @param transName transaction's name, or %NULL
     */
    internalTransactionRolledback(transName: string | null): void
    /**
     * Internal functions to be called by database providers when a transaction has been started
     * to keep track of the transaction status of the connection.
     * 
     * Note: this function should not be called if gda_connection_internal_statement_executed()
     * has already been called because a statement's execution was necessary to perform
     * the action.
     * @param parentTrans name of the parent transaction, or %NULL
     * @param transName transaction's name, or %NULL
     * @param isolLevel isolation level.
     */
    internalTransactionStarted(parentTrans: string | null, transName: string | null, isolLevel: TransactionIsolation): void
    /**
     * Checks whether a connection is open or not.
     * @returns %TRUE if the connection is open, %FALSE if it's not.
     */
    isOpened(): boolean
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
    openAsync(callback: ConnectionOpenFunc): number
    /**
     * This method is similar to gda_server_operation_get_value_at(), but for SQL identifiers: a new string
     * is returned instead of a #GValue. Also the returned string is assumed to represents an SQL identifier
     * and will correctly be quoted to be used with `cnc`.
     * @param op a #GdaServerOperation object
     * @param path a complete path to a node (starting with "/")
     * @returns a new string, or %NULL if the value is undefined or if the @path is not defined or @path does not hold any value, or if the value held is not a string or a valid SQL identifier.
     */
    operationGetSqlIdentifierAtPath(op: ServerOperation, path: string | null): string | null
    /**
     * This function helps to parse a SQL string which uses parameters and store them at `params`.
     * @param sql an SQL command to parse, not %NULL
     * @returns a #GdaStatement representing the SQL command, or %NULL if an error occurred
     */
    parseSqlString(sql: string | null): [ /* returnType */ Statement, /* params */ Set | null ]
    /**
     * Performs the operation described by `op` (which should have been created using
     * gda_connection_create_operation()). It is a wrapper around the gda_server_provider_perform_operation()
     * method.
     * @param op a #GdaServerOperation object
     * @returns TRUE if no error occurred
     */
    performOperation(op: ServerOperation): boolean
    /**
     * Use this method to get a pointer to the next available connection event which can then be customized
     * and taken into account using gda_connection_add_event().
     * @param type a #GdaConnectionEventType
     * @returns a pointer to the next available connection event, or %NULL if event should be ignored
     */
    pointAvailableEvent(type: ConnectionEventType): ConnectionEvent
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
     * @param tableName name of the table to create
     * @param arguments_ list of arguments as #GdaServerOperationPrepareCreateTableArg containing column's name, column's #GType and a #GdaServerOperationCreateTableFlag flag
     * @returns a #GdaServerOperation if no errors; NULL and set @error otherwise
     */
    prepareOperationCreateTable(tableName: string | null, arguments_: ServerOperationCreateTableArg[]): ServerOperation | null
    /**
     * This is just a convenient function to create a #GdaServerOperation to drop a
     * table in an opened connection.
     * @param tableName name of the table to drop
     * @returns a new #GdaServerOperation or %NULL if couldn't create the opereration.
     */
    prepareOperationDropTable(tableName: string | null): ServerOperation | null
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
    quoteSqlIdentifier(id: string | null): string | null
    /**
     * Executes the statement upon which `rstmt` is built. Note that as several statements can actually be executed by this
     * method, it is recommended to be within a transaction.
     * 
     * If `error` is not %NULL and `stop_on_error` is %FALSE, then it may contain the last error which occurred.
     * @param rstmt a #GdaRepetitiveStatement object
     * @param modelUsage specifies how the returned data model will be used as a #GdaStatementModelUsage enum
     * @param colTypes an array of GType to request each returned GdaDataModel's column's GType, see gda_connection_statement_execute_select_full() for more information
     * @param stopOnError set to TRUE if the method has to stop on the first error.
     * @returns a new list of #GObject pointers (see gda_connection_statement_execute() for more information about what they represent), one for each actual execution of the statement upon which @rstmt is built. If @stop_on_error is %FALSE, then the list may contain some %NULL pointers which refer to statements which failed to execute.
     */
    repetitiveStatementExecute(rstmt: RepetitiveStatement, modelUsage: StatementModelUsage, colTypes: GObject.GType[] | null, stopOnError: boolean): GObject.Object[]
    /**
     * Rollback all the modifications made after the SAVEPOINT named `name`.
     * @param name name of the savepoint to rollback to
     * @returns TRUE if no error occurred
     */
    rollbackSavepoint(name: string | null): boolean
    /**
     * Rollbacks the given transaction. This means that all changes
     * made to the underlying data source since the last call to
     * #gda_connection_begin_transaction() or #gda_connection_commit_transaction()
     * will be discarded.
     * @param name the name of the transation to commit, or %NULL
     * @returns %TRUE if the operation was successful, %FALSE otherwise.
     */
    rollbackTransaction(name: string | null): boolean
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
    setMainContext(thread: GLib.Thread | null, context: GLib.MainContext | null): void
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
     * @param modelUsage in the case where `stmt` is a SELECT statement, specifies how the returned data model will be used
     * @returns a #GObject, or %NULL if an error occurred
     */
    statementExecute(stmt: Statement, params: Set | null, modelUsage: StatementModelUsage): [ /* returnType */ GObject.Object, /* lastInsertRow */ Set | null ]
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
    statementExecuteNonSelect(stmt: Statement, params: Set | null): [ /* returnType */ number, /* lastInsertRow */ Set | null ]
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
    statementExecuteSelect(stmt: Statement, params: Set | null): DataModel
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
     * @param modelUsage specifies how the returned data model will be used as a #GdaStatementModelUsage enum
     * @param colTypes an array of GType to request each returned #GdaDataModel's column's GType, terminated with the G_TYPE_NONE value. Any value left to 0 will make the database provider determine the real GType. `col_types` can also be %NULL if no column type is specified.
     * @returns a #GdaDataModel containing the data returned by the data source, or %NULL if an error occurred
     */
    statementExecuteSelectFull(stmt: Statement, params: Set | null, modelUsage: StatementModelUsage, colTypes: GObject.GType[] | null): DataModel
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
    statementPrepare(stmt: Statement): boolean
    /**
     * Renders `stmt` as an SQL statement, adapted to the SQL dialect used by `cnc`
     * @param stmt a #GdaStatement object
     * @param params a #GdaSet object (which can be obtained using gda_statement_get_parameters()), or %NULL
     * @param flags SQL rendering flags, as #GdaStatementSqlFlag OR'ed values
     * @returns a new string, or %NULL if an error occurred
     */
    statementToSql(stmt: Statement, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string | null, /* paramsUsed */ Holder[] | null ]
    /**
     * Asks the underlying provider for if a specific feature is supported.
     * @param feature feature to ask for.
     * @returns %TRUE if the provider supports it, %FALSE if not.
     */
    supportsFeature(feature: ConnectionFeature): boolean
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
    updateMetaStore(context: MetaContext | null): boolean
    /**
     * `col_names` and `values` must have length (&gt;= 1).
     * 
     * This is a convenience function, which creates an UPDATE statement and executes it using the values
     * provided. It internally relies on variables which makes it immune to SQL injection problems.
     * 
     * The equivalent SQL command is: UPDATE &lt;table&gt; SET &lt;column_name&gt; = &lt;new_value&gt; [,...] WHERE &lt;condition_column_name&gt; = &lt;condition_value&gt;.
     * @param table the table's name with the row's values to be updated
     * @param conditionColumnName the name of the column to used in the WHERE condition clause
     * @param conditionValue the `condition_column_type'`s GType
     * @param colNames a list of column names (as const gchar *)
     * @param values a list of values (as #GValue)
     * @returns TRUE if no error occurred, FALSE otherwise
     */
    updateRowInTableV(table: string | null, conditionColumnName: string | null, conditionValue: any, colNames: string[], values: any[]): boolean
    /**
     * Produces a fully quoted and escaped string from a GValue
     * @param from #GValue to convert from
     * @returns escaped and quoted value or NULL if not supported.
     */
    valueToSqlString(from: any): string | null

    // Own virtual methods of Gda-6.0.Gda.Connection

    closed(): void
    dsnChanged(): void
    error(error: ConnectionEvent): void
    opened(): void
    statusChanged(status: ConnectionStatus): void
    transactionStatusChanged(): void

    // Own signals of Gda-6.0.Gda.Connection

    connect(sigName: "closed", callback: Connection.ClosedSignalCallback): number
    on(sigName: "closed", callback: Connection.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: Connection.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: Connection.ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "dsn-changed", callback: Connection.DsnChangedSignalCallback): number
    on(sigName: "dsn-changed", callback: Connection.DsnChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-changed", callback: Connection.DsnChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-changed", callback: Connection.DsnChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dsn-changed", ...args: any[]): void
    connect(sigName: "error", callback: Connection.ErrorSignalCallback): number
    on(sigName: "error", callback: Connection.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: Connection.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: Connection.ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", ...args: any[]): void
    connect(sigName: "opened", callback: Connection.OpenedSignalCallback): number
    on(sigName: "opened", callback: Connection.OpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: Connection.OpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: Connection.OpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "opened", ...args: any[]): void
    connect(sigName: "status-changed", callback: Connection.StatusChangedSignalCallback): number
    on(sigName: "status-changed", callback: Connection.StatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: Connection.StatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: Connection.StatusChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "status-changed", ...args: any[]): void
    connect(sigName: "transaction-status-changed", callback: Connection.TransactionStatusChangedSignalCallback): number
    on(sigName: "transaction-status-changed", callback: Connection.TransactionStatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transaction-status-changed", callback: Connection.TransactionStatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transaction-status-changed", callback: Connection.TransactionStatusChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "transaction-status-changed", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Connection

    connect(sigName: "notify::auth-string", callback: (...args: any[]) => void): number
    on(sigName: "notify::auth-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auth-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auth-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auth-string", ...args: any[]): void
    connect(sigName: "notify::cnc-string", callback: (...args: any[]) => void): number
    on(sigName: "notify::cnc-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cnc-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cnc-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cnc-string", ...args: any[]): void
    connect(sigName: "notify::dsn", callback: (...args: any[]) => void): number
    on(sigName: "notify::dsn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dsn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dsn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dsn", ...args: any[]): void
    connect(sigName: "notify::events-history-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::events-history-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events-history-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events-history-size", ...args: any[]): void
    connect(sigName: "notify::execution-slowdown", callback: (...args: any[]) => void): number
    on(sigName: "notify::execution-slowdown", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::execution-slowdown", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::execution-slowdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::execution-slowdown", ...args: any[]): void
    connect(sigName: "notify::execution-timer", callback: (...args: any[]) => void): number
    on(sigName: "notify::execution-timer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::execution-timer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::execution-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::execution-timer", ...args: any[]): void
    connect(sigName: "notify::meta-store", callback: (...args: any[]) => void): number
    on(sigName: "notify::meta-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::meta-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::meta-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::meta-store", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
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

class Connection extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Connection

    static name: string

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
     * @param authString authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     * @returns a new #GdaConnection or %NULL if there was an error.
     */
    static newFromDsn(dsn: DsnInfo, authString: string | null, options: ConnectionOptions): Connection
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
     * @param dsnName data source name.
     * @param authString authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     * @returns a new #GdaConnection or %NULL if there was an error.
     */
    static newFromDsnName(dsnName: string | null, authString: string | null, options: ConnectionOptions): Connection
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
     * @param providerName provider ID to connect to, or %NULL
     * @param cncString connection string.
     * @param authString authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     * @returns a new #GdaConnection or %NULL if there was an error.
     */
    static newFromString(providerName: string | null, cncString: string | null, authString: string | null, options: ConnectionOptions): Connection
    _init(config?: Connection.ConstructorProperties): void
    static errorQuark(): GLib.Quark
    /**
     * Retreive a pointer to the #GdaWorker used internally by the connection. This function is reserved to
     * database provider's implementation and should not be used otherwise.
     * @param data a #GdaServerProviderConnectionData, or %NULL
     * @returns the #GdaWorker, or %NULL
     */
    static internalGetWorker(data: ServerProviderConnectionData | null): Worker
    /**
     * This function creates a connection and opens it, using a DSN. If opening fails, then no connection is created.
     * See gda_connection_new_from_dsn() for more information.
     * @param dsn data sourcename.
     * @param authString authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     * @returns a new #GdaConnection if connection opening was successful or %NULL if there was an error.
     */
    static openFromDsn(dsn: DsnInfo, authString: string | null, options: ConnectionOptions): Connection
    /**
     * This function creates a connection and opens it, using a DSN name. If opening fails, then no connection is created. The named DSN should be available.
     * See gda_connection_new_from_dsn_name() for more information.
     * @param dsnName data source name.
     * @param authString authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     * @returns a new #GdaConnection if connection opening was successful or %NULL if there was an error.
     */
    static openFromDsnName(dsnName: string | null, authString: string | null, options: ConnectionOptions): Connection
    /**
     * This function creates a connection and opens it, using a connection string. If opening fails, then no connection is created.
     * See gda_connection_new_from_string() for more information.
     * @param providerName provider ID to connect to, or %NULL
     * @param cncString connection string.
     * @param authString authentication string, or %NULL
     * @param options options for the connection (see #GdaConnectionOptions).
     * @returns a new #GdaConnection if connection opening was successful or %NULL if there was an error.
     */
    static openFromString(providerName: string | null, cncString: string | null, authString: string | null, options: ConnectionOptions): Connection
    /**
     * Opens an SQLite connection even if the SQLite provider is not installed,
     * to be used by database providers which need a temporary database to store
     * some information.
     * @param directory the directory the database file will be in, or %NULL for the default TMP directory
     * @param filename the database file name
     * @param autoUnlink if %TRUE, then the database file will be removed afterwards
     * @returns a new #GdaConnection, or %NULL if an error occurred
     */
    static openSqlite(directory: string | null, filename: string | null, autoUnlink: boolean): Connection
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
    static stringSplit(string: string | null): [ /* outCncParams */ string | null, /* outProvider */ string | null, /* outUsername */ string | null, /* outPassword */ string | null ]
}

module ConnectionEvent {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.ConnectionEvent

        type?: number | null
    }

}

interface ConnectionEvent {

    // Own properties of Gda-6.0.Gda.ConnectionEvent

    type: number
    __gtype__: number

    // Own fields of Gda-6.0.Gda.ConnectionEvent

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.ConnectionEvent

    getCode(): number
    /**
     * Get the description of the event. Note that is `event'`s type is GDA_CONNECTION_EVENT_COMMAND,
     * the the description is the SQL of the command.
     * @returns @event's description.
     */
    getDescription(): string | null
    /**
     * Get `event'`s severity (from a simple notice to a fatal event)
     * @returns the event type
     */
    getEventType(): ConnectionEventType
    /**
     * Retrieve the code associated to `event`.
     * @returns the #GdaConnectionEventCode event's code
     */
    getGdaCode(): ConnectionEventCode
    getSource(): string | null
    /**
     * Get the SQLSTATE value of `event`. Even though the SQLSTATE values are specified by ANSI SQL and ODBC,
     * consult each DBMS for the possible values. However, the "00000" (success) value means that there is no error,
     * and the "HY000" (general error) value means an error but no better error code available.
     * @returns @event's SQL state.
     */
    getSqlstate(): string | null
    /**
     * Sets `event'`s code: the code is specific to the provider being used.
     * If you want to have a common understanding of the event codes, use
     * gda_connection_event_get_gda_code() instead.
     * 
     * This function should not be called directly
     * @param code a code.
     */
    setCode(code: number): void
    /**
     * Sets `event'`s `description`. This function should not be called directly.
     * @param description a description, or %NULL (to unset current description if any)
     */
    setDescription(description: string | null): void
    /**
     * Sets `event'`s severity (from a simple notice to a fatal event)
     * This function should not be called directly.
     * @param type the severity of the event
     */
    setEventType(type: ConnectionEventType): void
    /**
     * Sets `event'`s gda code: that code is standardized by the libgda
     * library. If you want to specify the corresponding provider specific code,
     * use gda_connection_event_get_code() or gda_connection_event_get_sqlstate() instead.
     * 
     * This function should not be called directly
     * @param code a code
     */
    setGdaCode(code: ConnectionEventCode): void
    /**
     * Sets `event'`s `source;` this function should not be called directly
     * @param source a source.
     */
    setSource(source: string | null): void
    /**
     * Changes the SQLSTATE code of `event,` this function should not be called directly
     * 
     * Sets `event'`s SQL state.
     * @param sqlstate SQL state.
     */
    setSqlstate(sqlstate: string | null): void

    // Class property signals of Gda-6.0.Gda.ConnectionEvent

    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
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

class ConnectionEvent extends GObject.Object {

    // Own properties of Gda-6.0.Gda.ConnectionEvent

    static name: string

    // Constructors of Gda-6.0.Gda.ConnectionEvent

    constructor(config?: ConnectionEvent.ConstructorProperties) 
    _init(config?: ConnectionEvent.ConstructorProperties): void
}

module DataAccessWrapper {

    // Constructor properties interface

    interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataAccessWrapper

        model?: DataModel | null
    }

}

interface DataAccessWrapper extends DataModel {

    // Own properties of Gda-6.0.Gda.DataAccessWrapper

    readonly model: DataModel
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DataAccessWrapper

    parentInstance: GObject.Object

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
    setMapping(mapping: number[] | null): boolean

    // Class property signals of Gda-6.0.Gda.DataAccessWrapper

    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
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

class DataAccessWrapper extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataAccessWrapper

    static name: string

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

module DataComparator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `diff-computed`
     */
    interface DiffComputedSignalCallback {
        (object: any | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataComparator

        newModel?: DataModel | null
        oldModel?: DataModel | null
    }

}

interface DataComparator {

    // Own properties of Gda-6.0.Gda.DataComparator

    newModel: DataModel
    oldModel: DataModel
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DataComparator

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataComparator

    /**
     * Actually computes the differences between the data models for which `comp` is defined.
     * 
     * For each difference computed, stored in a #GdaDiff structure, the "diff-computed" signal is emitted.
     * If one connects to this signal and returns FALSE in the signal handler, then computing differences will be
     * stopped and an error will be returned.
     * @returns TRUE if all the differences have been successfully computed, and FALSE if an error occurred
     */
    computeDiff(): boolean
    /**
     * Get a pointer to the #GdaDiff structure representing the difference which number is `pos`
     * @param pos the requested difference number (starting at 0)
     * @returns a pointer to a #GdaDiff, or %NULL if @pos is invalid
     */
    getDiff(pos: number): Diff
    /**
     * Get the number of differences as computed by the last time gda_data_comparator_compute_diff() was called.
     * @returns the number of computed differences
     */
    getNDiffs(): number
    /**
     * Defines the columns which will be used as a key when searching data. This is not mandatory but
     * will speed things up as less data will be processed.
     * @param colNumbers an array of `nb_cols` values
     */
    setKeyColumns(colNumbers: number[]): void

    // Own virtual methods of Gda-6.0.Gda.DataComparator

    diffComputed(diff: Diff): boolean

    // Own signals of Gda-6.0.Gda.DataComparator

    connect(sigName: "diff-computed", callback: DataComparator.DiffComputedSignalCallback): number
    on(sigName: "diff-computed", callback: DataComparator.DiffComputedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "diff-computed", callback: DataComparator.DiffComputedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "diff-computed", callback: DataComparator.DiffComputedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "diff-computed", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.DataComparator

    connect(sigName: "notify::new-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::new-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::new-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::new-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::new-model", ...args: any[]): void
    connect(sigName: "notify::old-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::old-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::old-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::old-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::old-model", ...args: any[]): void
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

class DataComparator extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataComparator

    static name: string

    // Constructors of Gda-6.0.Gda.DataComparator

    constructor(config?: DataComparator.ConstructorProperties) 
    /**
     * Creates a new comparator to compute the differences from `old_model` to `new_model:` if one applies
     * all the computed differences (as #GdaDiff structures) to `old_model,` the resulting data model
     * should have the same contents as `new_model`.
     * @constructor 
     * @param oldModel Data model to which the modifications should be applied
     * @param newModel Target data model.
     * @returns a new #GdaDataComparator object
     */
    constructor(oldModel: DataModel, newModel: DataModel) 
    /**
     * Creates a new comparator to compute the differences from `old_model` to `new_model:` if one applies
     * all the computed differences (as #GdaDiff structures) to `old_model,` the resulting data model
     * should have the same contents as `new_model`.
     * @constructor 
     * @param oldModel Data model to which the modifications should be applied
     * @param newModel Target data model.
     * @returns a new #GdaDataComparator object
     */
    static new(oldModel: DataModel, newModel: DataModel): DataComparator
    _init(config?: DataComparator.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module DataModelArray {

    // Constructor properties interface

    interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataModelArray

        nColumns?: number | null
        readOnly?: boolean | null
    }

}

interface DataModelArray extends DataModel {

    // Own properties of Gda-6.0.Gda.DataModelArray

    nColumns: number
    readOnly: boolean
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DataModelArray

    parentInstance: GObject.Object

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
    getRow(row: number): Row
    /**
     * Sets the number of columns for rows inserted in this model.
     * `cols` must be greated than or equal to 0.
     * 
     * Also clears `model'`s contents.
     * @param cols number of columns for rows this data model should use.
     */
    setNColumns(cols: number): void

    // Class property signals of Gda-6.0.Gda.DataModelArray

    connect(sigName: "notify::n-columns", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-columns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-columns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-columns", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class DataModelArray extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataModelArray

    static name: string

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
    static newWithGTypes(cols: number, types: GObject.GType[]): DataModel
}

module DataModelDir {

    // Constructor properties interface

    interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataModelDir

        basedir?: string | null
    }

}

interface DataModelDir extends DataModel {

    // Own properties of Gda-6.0.Gda.DataModelDir

    readonly basedir: string | null
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DataModelDir

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataModelDir

    /**
     * Reset the list of errors which have occurred while using `model`
     */
    cleanErrors(): void
    /**
     * Get the list of errors which have occurred while using `model`
     * @returns a read-only list of #GError pointers, or %NULL if no error has occurred
     */
    getErrors(): GLib.Error[]

    // Class property signals of Gda-6.0.Gda.DataModelDir

    connect(sigName: "notify::basedir", callback: (...args: any[]) => void): number
    on(sigName: "notify::basedir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::basedir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::basedir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::basedir", ...args: any[]): void
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

class DataModelDir extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataModelDir

    static name: string

    // Constructors of Gda-6.0.Gda.DataModelDir

    constructor(config?: DataModelDir.ConstructorProperties) 
    _init(config?: DataModelDir.ConstructorProperties): void
    /**
     * Creates a new #GdaDataModel object to list all the files starting from `basedir`
     * @param basedir a directory
     * @returns a new #GdaDataModel
     */
    static new(basedir: string | null): DataModel
}

module DataModelImport {

    // Constructor properties interface

    interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

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

interface DataModelImport extends DataModel {

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
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DataModelImport

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataModelImport

    /**
     * Clears the history of errors `model` has to report
     */
    cleanErrors(): void
    /**
     * Get the list of errors which `model` has to report. The returned list is a list of
     * #GError structures, and must not be modified
     * @returns the list of errors (which must not be modified), or %NULL
     */
    getErrors(): GLib.Error[]

    // Class property signals of Gda-6.0.Gda.DataModelImport

    connect(sigName: "notify::data-string", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-string", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::options", callback: (...args: any[]) => void): number
    on(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::random-access", callback: (...args: any[]) => void): number
    on(sigName: "notify::random-access", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::random-access", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::random-access", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::random-access", ...args: any[]): void
    connect(sigName: "notify::strict", callback: (...args: any[]) => void): number
    on(sigName: "notify::strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::strict", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xml-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xml-node", ...args: any[]): void
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

class DataModelImport extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataModelImport

    static name: string

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
     * @param randomAccess TRUE if random access will be required
     * @param options importing options
     * @returns a pointer to the newly created #GdaDataModel.
     */
    static newFile(filename: string | null, randomAccess: boolean, options: Set | null): DataModel
    /**
     * Creates a new #GdaDataModel object which contains the data stored in the `data` string.
     * 
     * Important note: the `data` string is not copied for memory efficiency reasons and should not
     * therefore be altered in any way as long as the returned data model exists.
     * @param data a string containing the data to import
     * @param randomAccess TRUE if random access will be required
     * @param options importing options, see gda_data_model_import_new_file() for more information
     * @returns a pointer to the newly created #GdaDataModel.
     */
    static newMem(data: string | null, randomAccess: boolean, options: Set | null): DataModel
    /**
     * Creates a new #GdaDataModel and loads the data in `node`. The resulting data model
     * can be accessed in a random way.
     * @param node an XML node corresponding to a &lt;data-array&gt; tag
     * @returns a pointer to the newly created #GdaDataModel.
     */
    static newXmlNode(node: libxml2.NodePtr): DataModel
}

module DataModelImportIter {

    // Constructor properties interface

    interface ConstructorProperties extends DataModelIter.ConstructorProperties {
    }

}

interface DataModelImportIter {

    // Own properties of Gda-6.0.Gda.DataModelImportIter

    __gtype__: number

    // Own fields of Gda-6.0.Gda.DataModelImportIter

    parentInstance: any

    // Class property signals of Gda-6.0.Gda.DataModelImportIter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::current-row", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-row", ...args: any[]): void
    connect(sigName: "notify::data-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-model", ...args: any[]): void
    connect(sigName: "notify::update-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-model", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::holders", callback: (...args: any[]) => void): number
    on(sigName: "notify::holders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::holders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::holders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::holders", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::validate-changes", callback: (...args: any[]) => void): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::validate-changes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DataModelImportIter extends DataModelIter {

    // Own properties of Gda-6.0.Gda.DataModelImportIter

    static name: string

    // Constructors of Gda-6.0.Gda.DataModelImportIter

    constructor(config?: DataModelImportIter.ConstructorProperties) 
    _init(config?: DataModelImportIter.ConstructorProperties): void
}

module DataModelIter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `end-of-data`
     */
    interface EndOfDataSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `row-changed`
     */
    interface RowChangedSignalCallback {
        (row: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Set.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataModelIter

        currentRow?: number | null
        dataModel?: DataModel | null
        updateModel?: boolean | null
    }

}

interface DataModelIter {

    // Own properties of Gda-6.0.Gda.DataModelIter

    currentRow: number
    dataModel: DataModel
    updateModel: boolean
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DataModelIter

    parentInstance: any

    // Owm methods of Gda-6.0.Gda.DataModelIter

    /**
     * Fetch a pointer to the #GdaHolder object which is synchronized with data at
     * column `col`
     * @param col the requested column
     * @returns the #GdaHolder, or %NULL if an error occurred
     */
    getHolderForField(col: number): Holder
    /**
     * Get the row which `iter` represents in the data model
     * @returns the row number, or -1 if @iter is invalid
     */
    getRow(): number
    /**
     * Get the value stored at the column `col` in `iter`. The returned value must not be modified.
     * @param col the requested column
     * @returns the #GValue, or %NULL if the value could not be fetched
     */
    getValueAt(col: number): any | null
    /**
     * Get the value stored at the column `col` in `iter`. The returned value must not be modified.
     * @param col the requested column
     * @returns the #GValue, or %NULL if the value could not be fetched
     */
    getValueAtE(col: number): any | null
    /**
     * Get the value stored at the column `field_name` in `iter`
     * @param fieldName the requested column name
     * @returns the #GValue, or %NULL
     */
    getValueForField(fieldName: string | null): any | null
    /**
     * Declare all the parameters in `iter` invalid, without modifying the
     * #GdaDataModel `iter` is for or changing the row it represents. This method
     * is for internal usage. Note that for gda_data_model_iter_is_valid() to return %FALSE,
     * it is also necessary to set the "current-row" property to -1.
     */
    invalidateContents(): void
    /**
     * Tells if `iter` is a valid iterator (if it actually corresponds to a valid row in the model)
     * @returns TRUE if @iter is valid
     */
    isValid(): boolean
    // Has conflict: moveNext(): boolean
    // Has conflict: movePrev(): boolean
    // Has conflict: moveToRow(row: number): boolean
    // Has conflict: setValueAt(col: number, value: any): boolean

    // Own virtual methods of Gda-6.0.Gda.DataModelIter

    endOfData(): void
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
    moveNext(): boolean
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
    movePrev(): boolean
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
    moveToRow(row: number): boolean
    rowChanged(row: number): void
    /**
     * Sets a value in `iter,` at the column specified by `col`
     * @virtual 
     * @param col the column number
     * @param value a #GValue (not %NULL)
     * @returns TRUE if no error occurred
     */
    setValueAt(col: number, value: any): boolean

    // Own signals of Gda-6.0.Gda.DataModelIter

    connect(sigName: "end-of-data", callback: DataModelIter.EndOfDataSignalCallback): number
    on(sigName: "end-of-data", callback: DataModelIter.EndOfDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-data", callback: DataModelIter.EndOfDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-data", callback: DataModelIter.EndOfDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "end-of-data", ...args: any[]): void
    connect(sigName: "row-changed", callback: DataModelIter.RowChangedSignalCallback): number
    on(sigName: "row-changed", callback: DataModelIter.RowChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: DataModelIter.RowChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: DataModelIter.RowChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "row-changed", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.DataModelIter

    connect(sigName: "notify::current-row", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-row", ...args: any[]): void
    connect(sigName: "notify::data-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-model", ...args: any[]): void
    connect(sigName: "notify::update-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-model", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::holders", callback: (...args: any[]) => void): number
    on(sigName: "notify::holders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::holders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::holders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::holders", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::validate-changes", callback: (...args: any[]) => void): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::validate-changes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DataModelIter extends Set {

    // Own properties of Gda-6.0.Gda.DataModelIter

    static name: string

    // Constructors of Gda-6.0.Gda.DataModelIter

    constructor(config?: DataModelIter.ConstructorProperties) 
    _init(config?: DataModelIter.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module DataModelSelect {

    // Signal callback interfaces

    /**
     * Signal callback interface for `updated`
     */
    interface UpdatedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface DataModelSelect extends DataModel {

    // Own properties of Gda-6.0.Gda.DataModelSelect

    readonly valid: boolean
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DataModelSelect

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataModelSelect

    getParameters(): Set
    /**
     * If at creation or after parameters change has been set, a SELECT statement
     * is ejectuted, if unsuccess then this model is at invalid state.
     * @returns TRUE if a valid data model is present
     */
    isValid(): boolean
    setParameters(params: Set): void

    // Own virtual methods of Gda-6.0.Gda.DataModelSelect

    updated(): void

    // Own signals of Gda-6.0.Gda.DataModelSelect

    connect(sigName: "updated", callback: DataModelSelect.UpdatedSignalCallback): number
    on(sigName: "updated", callback: DataModelSelect.UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: DataModelSelect.UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: DataModelSelect.UpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "updated", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.DataModelSelect

    connect(sigName: "notify::valid", callback: (...args: any[]) => void): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valid", ...args: any[]): void
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

class DataModelSelect extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataModelSelect

    static name: string

    // Constructors of Gda-6.0.Gda.DataModelSelect

    constructor(config?: DataModelSelect.ConstructorProperties) 
    constructor(cnc: Connection, stm: Statement, params: Set | null) 
    static new(cnc: Connection, stm: Statement, params: Set | null): DataModelSelect
    static newFromString(cnc: Connection, sql: string | null): DataModelSelect
    _init(config?: DataModelSelect.ConstructorProperties): void
}

module DataPivot {

    // Constructor properties interface

    interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DataPivot

        model?: DataModel | null
    }

}

interface DataPivot extends DataModel {

    // Own properties of Gda-6.0.Gda.DataPivot

    model: DataModel
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DataPivot

    parentInstance: GObject.Object

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
     * @param aggregateType the type of aggregate operation to perform
     * @param field the field description, see below
     * @param alias the field alias, or %NULL
     * @returns %TRUE if no error occurred
     */
    addData(aggregateType: DataPivotAggregate, field: string | null, alias: string | null): boolean
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
     * @param fieldType the type of field to add
     * @param field the field description, see below
     * @param alias the field alias, or %NULL
     * @returns %TRUE if no error occurred
     */
    addField(fieldType: DataPivotFieldType, field: string | null, alias: string | null): boolean
    /**
     * Acutally populates `pivot` by analysing the data from the provided data model.
     * @returns %TRUE if no error occurred.
     */
    populate(): boolean

    // Class property signals of Gda-6.0.Gda.DataPivot

    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
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

class DataPivot extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataPivot

    static name: string

    // Constructors of Gda-6.0.Gda.DataPivot

    constructor(config?: DataPivot.ConstructorProperties) 
    _init(config?: DataPivot.ConstructorProperties): void
    /**
     * Creates a new #GdaDataModel which will contain analysed data from `model`.
     * @param model a #GdaDataModel to analyse data from, or %NULL
     * @returns a pointer to the newly created #GdaDataModel.
     */
    static new(model: DataModel | null): DataModel
    static errorQuark(): GLib.Quark
}

module DataProxy {

    // Signal callback interfaces

    /**
     * Signal callback interface for `filter-changed`
     */
    interface FilterChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `row-changes-applied`
     */
    interface RowChangesAppliedSignalCallback {
        (row: number, proxiedRow: number): void
    }

    /**
     * Signal callback interface for `row-delete-changed`
     */
    interface RowDeleteChangedSignalCallback {
        (row: number, toBeDeleted: boolean): void
    }

    /**
     * Signal callback interface for `sample-changed`
     */
    interface SampleChangedSignalCallback {
        (sampleStart: number, sampleEnd: number): void
    }

    /**
     * Signal callback interface for `sample-size-changed`
     */
    interface SampleSizeChangedSignalCallback {
        (sampleSize: number): void
    }

    /**
     * Signal callback interface for `validate-row-changes`
     */
    interface ValidateRowChangesSignalCallback {
        (row: number, proxiedRow: number): GLib.Error
    }


    // Constructor properties interface

    interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

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

interface DataProxy extends DataModel {

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
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DataProxy

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataProxy

    /**
     * Alters the attributes of the value stored at (proxy_row, col) in `proxy`. the `alter_flags`
     * can only contain the GDA_VALUE_ATTR_IS_NULL, GDA_VALUE_ATTR_IS_DEFAULT and GDA_VALUE_ATTR_IS_UNCHANGED
     * flags (other flags are ignored).
     * @param proxyRow A proxy row number
     * @param col a valid column number
     * @param alterFlags flags to alter the attributes
     */
    alterValueAttributes(proxyRow: number, col: number, alterFlags: ValueAttribute): void
    /**
     * Apply all the changes stored in the proxy to the proxied data model. The changes are done row
     * after row, and if an error
     * occurs, then it is possible that not all the changes to all the rows have been applied.
     * @returns TRUE if no error occurred
     */
    applyAllChanges(): boolean
    /**
     * Commits the modified data in the proxy back into the #GdaDataModel.
     * @param proxyRow the row number to commit
     * @returns TRUE if no error occurred.
     */
    applyRowChanges(proxyRow: number): boolean
    /**
     * Cancel all the changes stored in the proxy (the `proxy` will be reset to its state
     * as it was just after creation). Note that if there are some cached changes (i.e. not applied
     * to the current proxied data model), then these cached changes are not cleared (set the "cache-changes"
     * property to %FALSE for this).
     * @returns TRUE if no error occurred
     */
    cancelAllChanges(): boolean
    /**
     * Resets data at the corresponding row and column. If `proxy_row` corresponds to a new row, then
     * that new row is deleted from `proxy`.
     * @param proxyRow the row to cancel changes
     * @param col the column to cancel changes, or less than 0 to cancel any change on the `row` row
     */
    cancelRowChanges(proxyRow: number, col: number): void
    /**
     * Marks the row `proxy_row` to be deleted
     * @param proxyRow A proxy row number
     */
    delete(proxyRow: number): void
    /**
     * Get the current filter expression used by `proxy`.
     * @returns the current filter expression or %NULL if no filter has been set
     */
    getFilterExpr(): string | null
    /**
     * Get the total number of filtered rows in `proxy` if a filter has been applied. As new rows
     * (rows added to the proxy and not yet added to the proxied data model) and rows to remove
     * (rows marked for removal but not yet removed from the proxied data model) are also filtered,
     * the returned number also contains references to new rows and rows to be removed.
     * @returns the number of filtered rows in @proxy, or -1 if no filter has been applied
     */
    getFilteredNRows(): number
    /**
     * Get the number of rows which have been modified in the proxy (the sum of rows existing in
     * the proxied data model which have been modified, and new rows).
     * @returns the number of modified rows
     */
    getNModifiedRows(): number
    /**
     * Get the number of rows which have been added to `proxy` and which are not part of
     * the proxied data model.
     * @returns the number of new rows
     */
    getNNewRows(): number
    /**
     * Fetch the #GdaDataModel which `proxy` does proxy
     * @returns the proxied data model
     */
    getProxiedModel(): DataModel
    /**
     * Get the number of columns in the proxied data model
     * @returns the number of columns, or -1 if an error occurred
     */
    getProxiedModelNCols(): number
    /**
     * Get the number of rows in the proxied data model
     * @returns the number of rows, or -1 if the number of rows is not known
     */
    getProxiedModelNRows(): number
    /**
     * Get the `proxy'`s proxied model row corresponding to `proxy_row`
     * @param proxyRow A proxy row number
     * @returns the proxied model's row, or -1 if @proxy row which only exists @proxy
     */
    getProxiedModelRow(proxyRow: number): number
    /**
     * Get the number of the last row to be available in `proxy` (in reference to the proxied data model)
     * @returns the number of the last proxied model's row.
     */
    getSampleEnd(): number
    /**
     * Get the size of each chunk of data displayed at a time.
     * @returns the chunk (or sample) size, or 0 if chunking is disabled.
     */
    getSampleSize(): number
    /**
     * Get the number of the first row to be available in `proxy` (in reference to the proxied data model)
     * @returns the number of the first proxied model's row.
     */
    getSampleStart(): number
    /**
     * Get the attributes of the value stored at (proxy_row, col) in `proxy,` which
     * is an ORed value of #GdaValueAttribute flags
     * @param proxyRow a proxy row
     * @param col a valid proxy column
     * @returns a #GdaValueAttribute with the value's attributes at given position
     */
    getValueAttributes(proxyRow: number, col: number): ValueAttribute
    /**
     * Retrieve a whole list of values from the `proxy` data model. This function
     * calls gda_data_proxy_get_value()
     * for each column index specified in `cols_index,` and generates a #GSList on the way.
     * @param proxyRow a proxy row
     * @param colsIndex array containing the columns for which the values are requested
     * @returns a new list of values (the list must be freed, not the values), or %NULL if an error occurred
     */
    getValues(proxyRow: number, colsIndex: number[]): any[]
    /**
     * Tells if `proxy` contains any modifications not applied to the proxied data model.
     * @returns TRUE if there are some modifications in @proxy
     */
    hasChanged(): boolean
    isReadOnly(): boolean
    /**
     * Tells if the row number `proxy_row` has changed
     * @param proxyRow A proxy row number
     * @returns TRUE if the row has changed
     */
    rowHasChanged(proxyRow: number): boolean
    /**
     * Tells if the row number `proxy_row` is marked to be deleted.
     * @param proxyRow A proxy row number
     * @returns TRUE if the row is marked to be deleted
     */
    rowIsDeleted(proxyRow: number): boolean
    /**
     * Tells if the row number `proxy_row` is a row which has been inserted in `proxy`
     * (and is thus not in the proxied data model).
     * @param proxyRow A proxy row number
     * @returns TRUE if the row is an inserted row
     */
    rowIsInserted(proxyRow: number): boolean
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
     * @param filterExpr an SQL based expression which will filter the contents of `proxy,` or %NULL to remove any previous filter
     * @returns TRUE if no error occurred
     */
    setFilterExpr(filterExpr: string | null): boolean
    /**
     * Orders by the `col` column
     * @param col the column number to order from
     * @returns TRUE if no error occurred
     */
    setOrderingColumn(col: number): boolean
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
     * @param sampleSize the requested size of a chunk, or 0
     */
    setSampleSize(sampleSize: number): void
    /**
     * Sets the number of the first row to be available in `proxy` (in reference to the proxied data model)
     * @param sampleStart the number of the first row to be displayed
     */
    setSampleStart(sampleStart: number): void
    /**
     * Remove the "to be deleted" mark at the row `proxy_row,` if it existed.
     * @param proxyRow A proxy row number
     */
    undelete(proxyRow: number): void

    // Own virtual methods of Gda-6.0.Gda.DataProxy

    filterChanged(): void
    rowChangesApplied(row: number, proxiedRow: number): void
    rowDeleteChanged(row: number, toBeDeleted: boolean): void
    sampleChanged(sampleStart: number, sampleEnd: number): void
    sampleSizeChanged(sampleSize: number): void
    validateRowChanges(row: number, proxiedRow: number): GLib.Error

    // Own signals of Gda-6.0.Gda.DataProxy

    connect(sigName: "filter-changed", callback: DataProxy.FilterChangedSignalCallback): number
    on(sigName: "filter-changed", callback: DataProxy.FilterChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "filter-changed", callback: DataProxy.FilterChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "filter-changed", callback: DataProxy.FilterChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "filter-changed", ...args: any[]): void
    connect(sigName: "row-changes-applied", callback: DataProxy.RowChangesAppliedSignalCallback): number
    on(sigName: "row-changes-applied", callback: DataProxy.RowChangesAppliedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changes-applied", callback: DataProxy.RowChangesAppliedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changes-applied", callback: DataProxy.RowChangesAppliedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "row-changes-applied", proxiedRow: number, ...args: any[]): void
    connect(sigName: "row-delete-changed", callback: DataProxy.RowDeleteChangedSignalCallback): number
    on(sigName: "row-delete-changed", callback: DataProxy.RowDeleteChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-delete-changed", callback: DataProxy.RowDeleteChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-delete-changed", callback: DataProxy.RowDeleteChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "row-delete-changed", toBeDeleted: boolean, ...args: any[]): void
    connect(sigName: "sample-changed", callback: DataProxy.SampleChangedSignalCallback): number
    on(sigName: "sample-changed", callback: DataProxy.SampleChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sample-changed", callback: DataProxy.SampleChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sample-changed", callback: DataProxy.SampleChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "sample-changed", sampleEnd: number, ...args: any[]): void
    connect(sigName: "sample-size-changed", callback: DataProxy.SampleSizeChangedSignalCallback): number
    on(sigName: "sample-size-changed", callback: DataProxy.SampleSizeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sample-size-changed", callback: DataProxy.SampleSizeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sample-size-changed", callback: DataProxy.SampleSizeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "sample-size-changed", ...args: any[]): void
    connect(sigName: "validate-row-changes", callback: DataProxy.ValidateRowChangesSignalCallback): number
    on(sigName: "validate-row-changes", callback: DataProxy.ValidateRowChangesSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-row-changes", callback: DataProxy.ValidateRowChangesSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-row-changes", callback: DataProxy.ValidateRowChangesSignalCallback): NodeJS.EventEmitter
    emit(sigName: "validate-row-changes", proxiedRow: number, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.DataProxy

    connect(sigName: "notify::cache-changes", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-changes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-changes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-changes", ...args: any[]): void
    connect(sigName: "notify::defer-sync", callback: (...args: any[]) => void): number
    on(sigName: "notify::defer-sync", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::defer-sync", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::defer-sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::defer-sync", ...args: any[]): void
    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::prepend-null-entry", callback: (...args: any[]) => void): number
    on(sigName: "notify::prepend-null-entry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::prepend-null-entry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::prepend-null-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::prepend-null-entry", ...args: any[]): void
    connect(sigName: "notify::sample-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::sample-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sample-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sample-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sample-size", ...args: any[]): void
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

class DataProxy extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataProxy

    static name: string

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
    static newWithDataModel(model: DataModel): DataProxy
    _init(config?: DataProxy.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module DataSelect {

    // Constructor properties interface

    interface ConstructorProperties extends DataModel.ConstructorProperties, GObject.Object.ConstructorProperties {

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

interface DataSelect extends DataModel {

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
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DataSelect

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DataSelect

    /**
     * Computes correct attributes for each of `model'`s columns, which includes the "NOT NULL" attribute, the
     * default value, the precision and scale for numeric values.
     * @returns TRUE if no error occurred
     */
    computeColumnsAttributes(): boolean
    /**
     * Makes `model` try to compute INSERT, UPDATE and DELETE statements to be used when modifying `model'`s contents.
     * Note: any modification statement set using gda_data_select_set_modification_statement() will first be unset
     * 
     * This function is similar to calling gda_data_select_compute_modification_statements_ext() with
     * `cond_type` set to %GDA_DATA_SELECT_COND_PK
     * @returns %TRUE if no error occurred. If %FALSE is returned, then some modification statement may still have been computed
     */
    computeModificationStatements(): boolean
    /**
     * Makes `model` try to compute INSERT, UPDATE and DELETE statements to be used when modifying `model'`s contents.
     * Note: any modification statement set using gda_data_select_set_modification_statement() will first be unset
     * @param condType the type of condition for the modifications where one row only should be identified
     * @returns %TRUE if no error occurred. If %FALSE is returned, then some modification statement may still have been computed
     */
    computeModificationStatementsExt(condType: DataSelectConditionType): boolean
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
    computeRowSelectionCondition(): boolean
    getAdvertizedNrows(): number
    /**
     * Get a pointer to the #GdaConnection object which was used when `model` was created
     * (and which may be used internally by `model)`.
     * @returns a pointer to the #GdaConnection, or %NULL
     */
    getConnection(): Connection
    getNbStoredRows(): number
    getPrepStmt(): PStmt
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
    prepareForOffline(): boolean
    setAdvertizedNrows(n: number): void
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
     * @param modStmt a #GdaStatement (INSERT, UPDATE or DELETE)
     * @returns %TRUE if no error occurred.
     */
    setModificationStatement(modStmt: Statement): boolean
    /**
     * Offers the same feature as gda_data_select_set_modification_statement() but using an SQL statement.
     * @param sql an SQL text
     * @returns TRUE if no error occurred.
     */
    setModificationStatementSql(sql: string | null): boolean
    /**
     * Offers the same features as gda_data_select_set_row_selection_condition_sql() but using a #GdaSqlExpr
     * structure instead of an SQL syntax.
     * @param expr a #GdaSqlExpr expression
     * @returns TRUE if no error occurred
     */
    setRowSelectionCondition(expr: SqlExpr): boolean
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
     * @param sqlWhere an SQL condition (without the WHERE keyword)
     * @returns TRUE if no error occurred
     */
    setRowSelectionConditionSql(sqlWhere: string | null): boolean

    // Own virtual methods of Gda-6.0.Gda.DataSelect

    fetchAt(prow: Row, rownum: number): boolean
    fetchNbRows(): number
    fetchNext(prow: Row, rownum: number): boolean
    fetchPrev(prow: Row, rownum: number): boolean
    fetchRandom(prow: Row, rownum: number): boolean
    storeAll(): boolean

    // Class property signals of Gda-6.0.Gda.DataSelect

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::delete-stmt", callback: (...args: any[]) => void): number
    on(sigName: "notify::delete-stmt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::delete-stmt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::delete-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::delete-stmt", ...args: any[]): void
    connect(sigName: "notify::exec-params", callback: (...args: any[]) => void): number
    on(sigName: "notify::exec-params", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::exec-params", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::exec-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::exec-params", ...args: any[]): void
    connect(sigName: "notify::execution-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::execution-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::execution-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::execution-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::execution-delay", ...args: any[]): void
    connect(sigName: "notify::insert-stmt", callback: (...args: any[]) => void): number
    on(sigName: "notify::insert-stmt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::insert-stmt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::insert-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::insert-stmt", ...args: any[]): void
    connect(sigName: "notify::model-usage", callback: (...args: any[]) => void): number
    on(sigName: "notify::model-usage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model-usage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model-usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model-usage", ...args: any[]): void
    connect(sigName: "notify::prepared-stmt", callback: (...args: any[]) => void): number
    on(sigName: "notify::prepared-stmt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::prepared-stmt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::prepared-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::prepared-stmt", ...args: any[]): void
    connect(sigName: "notify::select-stmt", callback: (...args: any[]) => void): number
    on(sigName: "notify::select-stmt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::select-stmt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::select-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::select-stmt", ...args: any[]): void
    connect(sigName: "notify::store-all-rows", callback: (...args: any[]) => void): number
    on(sigName: "notify::store-all-rows", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::store-all-rows", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::store-all-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::store-all-rows", ...args: any[]): void
    connect(sigName: "notify::update-stmt", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-stmt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-stmt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-stmt", ...args: any[]): void
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

class DataSelect extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DataSelect

    static name: string

    // Constructors of Gda-6.0.Gda.DataSelect

    constructor(config?: DataSelect.ConstructorProperties) 
    _init(config?: DataSelect.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module DataSelectIter {

    // Constructor properties interface

    interface ConstructorProperties extends DataModelIter.ConstructorProperties {
    }

}

interface DataSelectIter {

    // Own properties of Gda-6.0.Gda.DataSelectIter

    __gtype__: number

    // Own fields of Gda-6.0.Gda.DataSelectIter

    parentInstance: any

    // Class property signals of Gda-6.0.Gda.DataSelectIter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::current-row", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-row", ...args: any[]): void
    connect(sigName: "notify::data-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-model", ...args: any[]): void
    connect(sigName: "notify::update-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-model", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::holders", callback: (...args: any[]) => void): number
    on(sigName: "notify::holders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::holders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::holders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::holders", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::validate-changes", callback: (...args: any[]) => void): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::validate-changes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DataSelectIter extends DataModelIter {

    // Own properties of Gda-6.0.Gda.DataSelectIter

    static name: string

    // Constructors of Gda-6.0.Gda.DataSelectIter

    constructor(config?: DataSelectIter.ConstructorProperties) 
    _init(config?: DataSelectIter.ConstructorProperties): void
}

module DbBase {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DbBase {

    // Own properties of Gda-6.0.Gda.DbBase

    __gtype__: number

    // Own fields of Gda-6.0.Gda.DbBase

    parentInstance: GObject.Object

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
    getCatalog(): string | null
    /**
     * This method returns a full name in the format catalog.schema.name.
     * If schema is %NULL but catalog and name are not, then only name is
     * returned. If catalog is %NULL then full name will be in the format:
     * schema.name. If all three components are not set, then %NULL is returned.
     * @returns Full name of the database object or %NULL.
     */
    getFullName(): string | null
    /**
     * Returns current object name. The returned string should not be freed.
     * @returns Current object name or %NULL
     */
    getName(): string | null
    /**
     * Returns current schema name. The returned string should not be freed.
     * @returns Current scheme or %NULL
     */
    getSchema(): string | null
    /**
     * Set catalog name
     * @param catalog Catalog name as a string
     */
    setCatalog(catalog: string | null): void
    /**
     * Set object name. If `name` is %NULL the function just returns.
     * @param name Object name as a string
     */
    setName(name: string | null): void
    /**
     * Sets database object names. `catalog` and `schema` can be %NULL but
     * `name` always should be a valid, not %NULL string. The `name` must be
     * set. If `catalog` is %NULL `schema` may not be %NULL but if `schema` is
     * %NULL `catalog` also should be %NULL.
     * @param catalog a catalog name associated with the table
     * @param schema a schema name associated with the table
     * @param name a table name associated with the table
     */
    setNames(catalog: string | null, schema: string | null, name: string | null): void
    /**
     * Set object schema. If `schema` is %NULL the function just returns.
     * @param schema Schema name as a string
     */
    setSchema(schema: string | null): void

    // Class property signals of Gda-6.0.Gda.DbBase

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

class DbBase extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DbBase

    static name: string

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

module DbCatalog {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DbCatalog

        connection?: Connection | null
        schemaName?: string | null
    }

}

interface DbCatalog {

    // Own properties of Gda-6.0.Gda.DbCatalog

    connection: Connection
    schemaName: string | null
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DbCatalog

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DbCatalog

    /**
     * This method append `table` to the total list of all tables stored in `self`. This method increase
     * reference count for `table`.
     * @param table table to append
     */
    appendTable(table: DbTable): void
    /**
     * This method append `view` to the total list of all views stored in `self`. This method increase
     * reference count for `view`.
     * @param view view to append
     */
    appendView(view: DbView): void
    /**
     * Convenient function to get a table based on `name`. The coller is responsible
     * for calling gda_db_catalog_parse_cnc() before calling this function.
     * @param catalog 
     * @param schema 
     * @param name table name
     * @returns table as #GdaDbTable or %NULL if the table is not found. The returned pointer should not be freed and belongs to the @self.
     */
    getTable(catalog: string | null, schema: string | null, name: string | null): DbTable
    getTables(): DbTable[]
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
    getView(catalog: string | null, schema: string | null, name: string | null): DbView
    getViews(): DbView[]
    /**
     * Parse internal cnc to populate `self` object. This method should be called every time after
     * database was modified or `self` was just created using gda_connection_create_db_catalog(). The
     * method will return %FALSE if no internal #GdaConnection available.
     * @returns Returns %TRUE if succeeded, %FALSE otherwise.
     */
    parseCnc(): boolean
    /**
     * For detailed description see gda_db_catalog_parse_file_from_path()
     * @param xmlfile xml file as #GFile instance
     */
    parseFile(xmlfile: Gio.File): boolean
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
    parseFileFromPath(xmlfile: string | null): boolean
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
    performOperation(): boolean
    /**
     * This method writes database description as xml file.
     * Similar to gda_db_catalog_write_to_path()
     * @param file a #GFile to write database description
     * @returns %TRUE if no error occurred, %FALSE otherwise.
     */
    writeToFile(file: Gio.File): boolean
    /**
     * Save content of `self` to a user friendly xml file.
     * @param path path to xml file to save #GdaDbCatalog
     * @returns %TRUE is no error, %FALSE otherwise.
     */
    writeToPath(path: string | null): boolean

    // Class property signals of Gda-6.0.Gda.DbCatalog

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::schema-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema-name", ...args: any[]): void
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

class DbCatalog extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DbCatalog

    static name: string

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
    static errorQuark(): GLib.Quark
    /**
     * Convenient method to varify xmlfile before prsing it.
     * @param xmlfile xml file to validate
     * @returns %TRUE if @xmlfile is valid, %FALSE otherwise
     */
    static validateFileFromPath(xmlfile: string | null): boolean
}

module DbColumn {

    // Constructor properties interface

    interface ConstructorProperties extends DbBuildable.ConstructorProperties, DdlModifiable.ConstructorProperties, GObject.Object.ConstructorProperties {

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

interface DbColumn extends DbBuildable, DdlModifiable {

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
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DbColumn

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DbColumn

    /**
     * Get value for autoinc key
     * @returns %TRUE if column should be auto-incremented, %FALSE otherwise.
     */
    getAutoinc(): boolean
    /**
     * Returns value of the check field.
     * @returns Column check string
     */
    getCheck(): string | null
    /**
     * Get value for column comment.
     * @returns Column comment as a string. %NULL is returned if comment is not set.
     */
    getComment(): string | null
    /**
     * Returns column type as a string derivied from #GType
     * @returns column type as a string or %NULL
     */
    getCtype(): string | null
    /**
     * Returns default value for the column. Can be %NULL if the default value hasn't been set.
     * @returns Default value for the column as a string.
     */
    getDefault(): string | null
    /**
     * Return of column type as #GType
     */
    getGtype(): GObject.GType
    /**
     * Returns name of the column
     * @returns Column name as a string or %NULL.
     */
    getName(): string | null
    /**
     * Specify if the column's value can be NULL.
     * @returns %TRUE if value can be %NULL, %FALSE otherwise.
     */
    getNnul(): boolean
    /**
     * Returns a primary key flag
     * @returns %TRUE if the column is primary key, %FALSE otherwise
     */
    getPkey(): boolean
    /**
     * Scale is used for float number representation to specify a number of decimal digits.
     * This value is ignore for column types except float or double.
     * @returns Current scale value
     */
    getScale(): number
    getSize(): number
    /**
     * Get value for unique key
     * @returns %TRUE if column should have a unique value, %FALSE otherwise.
     */
    getUnique(): boolean
    /**
     * Populate `op` with information stored in `self`. This method is used to
     * prepare `op` for %GDA_SERVER_OPERATION_ADD_COLUMN operation.
     * @param op #GdaServerOperation to add information
     * @returns %TRUE if success, %FALSE otherwise.
     */
    prepareAdd(op: ServerOperation): boolean
    /**
     * This method populate `op` with information stored in `self`.
     * @param op a #GdaServerOperation instance to update for TABLE_CREATE operation
     * @param order Order number for the column
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    prepareCreate(op: ServerOperation, order: number): boolean
    /**
     * Set value for auto-incremented key.
     * @param autoinc value to set
     */
    setAutoinc(autoinc: boolean): void
    /**
     * Sets check string to the column.
     * @param value value to set
     */
    setCheck(value: string | null): void
    /**
     * Set value for column comment.
     * @param comnt comment to set
     */
    setComment(comnt: string | null): void
    setDefault(value: string | null): void
    /**
     * Set column name.
     * @param name name as a string
     */
    setName(name: string | null): void
    setNnul(nnul: boolean): void
    /**
     * If `pkey` is %TRUE, the given column will be marked with PRIMERY KEY flag
     * @param pkey value to set
     */
    setPkey(pkey: boolean): void
    /**
     * Scale is used for float number representation to specify a number of decimal digits.
     * This value is ignore for column types except float or double.
     * @param scale scale value to set
     */
    setScale(scale: number): void
    /**
     * Set value for column size. This is relevant only for string column type.
     * @param size value to set
     */
    setSize(size: number): void
    /**
     * Set type of the column as a #GType. For numeric type, #GDA_TYPE_NUMERIC should be used. Other
     * types, e.g. %G_TYPE_FLOAT or %G_TYPE_DOUBLE can also be used but precision and scale should not be
     * set. In this case appropriate types for DB implementation will be used, e.g. float4.
     * @param type #GType for column
     */
    setType(type: GObject.GType): void
    /**
     * Set value for unique key.
     * @param unique value to set
     */
    setUnique(unique: boolean): void

    // Class property signals of Gda-6.0.Gda.DbColumn

    connect(sigName: "notify::autoinc", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoinc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoinc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoinc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoinc", ...args: any[]): void
    connect(sigName: "notify::check", callback: (...args: any[]) => void): number
    on(sigName: "notify::check", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::check", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::check", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::check", ...args: any[]): void
    connect(sigName: "notify::comment", callback: (...args: any[]) => void): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::comment", ...args: any[]): void
    connect(sigName: "notify::default", callback: (...args: any[]) => void): number
    on(sigName: "notify::default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::nnul", callback: (...args: any[]) => void): number
    on(sigName: "notify::nnul", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nnul", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nnul", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nnul", ...args: any[]): void
    connect(sigName: "notify::pkey", callback: (...args: any[]) => void): number
    on(sigName: "notify::pkey", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pkey", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pkey", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pkey", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::table", callback: (...args: any[]) => void): number
    on(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::unique", callback: (...args: any[]) => void): number
    on(sigName: "notify::unique", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unique", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unique", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unique", ...args: any[]): void
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

class DbColumn extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DbColumn

    static name: string

    // Constructors of Gda-6.0.Gda.DbColumn

    constructor(config?: DbColumn.ConstructorProperties) 
    constructor() 
    static new(): DbColumn
    _init(config?: DbColumn.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module DbFkey {

    // Constructor properties interface

    interface ConstructorProperties extends DbBuildable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface DbFkey extends DbBuildable {

    // Own properties of Gda-6.0.Gda.DbFkey

    __gtype__: number

    // Own fields of Gda-6.0.Gda.DbFkey

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DbFkey

    getFieldName(): string[]
    getOndelete(): string | null
    /**
     * The default value is %NO_ACTION
     * @returns ON DELETE action as a #GdaDbFkeyReferenceAction.
     */
    getOndeleteId(): DbFkeyReferenceAction
    getOnupdate(): string | null
    getOnupdateId(): DbFkeyReferenceAction
    getRefField(): string[]
    getRefTable(): string | null
    /**
     * Prepare `op` object for execution by populating with information stored in `self`.
     * @param op a #GdaServerOperation to populate
     * @param i Order number
     * @returns %TRUE if no error or %FALSE otherwise.
     */
    prepareCreate(op: ServerOperation, i: number): boolean
    /**
     * All arguments should be valid strings.
     * @param field Field name as a string
     * @param reffield A reference field name as a string
     */
    setField(field: string | null, reffield: string | null): void
    /**
     * Set action for ON_DELETE
     * @param id #GdaDbFkeyReferenceAction action to set
     */
    setOndelete(id: DbFkeyReferenceAction): void
    /**
     * Set action for ON_UPDATE
     * @param id #GdaDbFkeyReferenceAction action to set
     */
    setOnupdate(id: DbFkeyReferenceAction): void
    /**
     * Set reference table
     * @param rtable reference table name
     */
    setRefTable(rtable: string | null): void

    // Class property signals of Gda-6.0.Gda.DbFkey

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

class DbFkey extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DbFkey

    static name: string

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

module DbIndex {

    // Constructor properties interface

    interface ConstructorProperties extends DdlModifiable.ConstructorProperties, DbBase.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DbIndex

        table?: DbTable | null
    }

}

interface DbIndex extends DdlModifiable {

    // Own properties of Gda-6.0.Gda.DbIndex

    table: DbTable
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DbIndex

    parentInstance: any

    // Owm methods of Gda-6.0.Gda.DbIndex

    /**
     * Append to index filed to the current index instance, The `self` object will recieve full
     * ownership of the field. After this call, the reference count for `field` will be increased and
     * the instance of `fiels` must be destroyed by calling g_object_unref()
     * @param field a field to set
     */
    appendField(field: DbIndexField): void
    /**
     * This function is thread safe, that is, `cnc` will be locked.
     * @returns A list of #GdaDbIndexField
     */
    getFields(): DbIndexField[] | null
    getUnique(): boolean
    removeField(name: string | null): void
    /**
     * If `val` is %TRUE a "UNIQUE" will be added to the INDEX CREATE command, e.g.
     * CREATE UNIQUE INDEX ...
     * @param val if set to %TRUE UNIQUE index type will be used.
     */
    setUnique(val: boolean): void

    // Class property signals of Gda-6.0.Gda.DbIndex

    connect(sigName: "notify::table", callback: (...args: any[]) => void): number
    on(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::table", ...args: any[]): void
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

class DbIndex extends DbBase {

    // Own properties of Gda-6.0.Gda.DbIndex

    static name: string

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
    static errorQuark(): GLib.Quark
}

module DbIndexField {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DbIndexField {

    // Own properties of Gda-6.0.Gda.DbIndexField

    __gtype__: number

    // Own fields of Gda-6.0.Gda.DbIndexField

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.DbIndexField

    getCollate(): string | null
    /**
     * Returns an active column that was asigned to #GdaDbIndexField instance
     * @returns A #GdaDbColumn where index should be added
     */
    getColumn(): DbColumn
    getSortOrder(): DbIndexSortOrder
    getSortOrderStr(): string | null
    /**
     * Unfortunately, collate can vary from provider to provider. This method accepts collate name as a
     * string but user should provide valid values. For instance, SQLite3 accepts only "BINARY",
     * "NOCASE", and "RTRIM" values. PostgreSQL, on the other hand expects a name of a callable object,
     * e.g. function.
     * @param collate collate to set
     */
    setCollate(collate: string | null): void
    /**
     * Only full name will be extracted from `column`. The `column` instance should be freed using
     * g_object_unref(). The instance `self` take a copy of the `column` object by increasing its
     * referecne count.
     * @param column column to add index to
     */
    setColumn(column: DbColumn): void
    setSortOrder(sorder: DbIndexSortOrder): void

    // Class property signals of Gda-6.0.Gda.DbIndexField

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

class DbIndexField extends GObject.Object {

    // Own properties of Gda-6.0.Gda.DbIndexField

    static name: string

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

module DbTable {

    // Constructor properties interface

    interface ConstructorProperties extends DbBuildable.ConstructorProperties, DdlModifiable.ConstructorProperties, DbBase.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DbTable

        comment?: string | null
        istemp?: string | null
    }

}

interface DbTable extends DbBuildable, DdlModifiable {

    // Own properties of Gda-6.0.Gda.DbTable

    comment: string | null
    istemp: string | null
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DbTable

    parentInstance: any

    // Owm methods of Gda-6.0.Gda.DbTable

    /**
     * Append `column` to the internal list of columns
     * @param column column to add
     */
    appendColumn(column: DbColumn): void
    /**
     * Adds global table constraint. It will be added to the sql string by the provider implementation
     * if it supports it. Usually, table constraint is very complex and the current method just append
     * a list of constraints to the sql string.
     * @param constr a constraint string to append
     */
    appendConstraint(constr: string | null): void
    /**
     * Append `fkey` to the internal list of columns
     * @param fkey fkry to add
     */
    appendFkey(fkey: DbFkey): void
    /**
     * Use this method to obtain internal list of all columns. The internal list
     * should not be freed.
     * @returns A list of #GdaDbColumn objects or %NULL if the internal list is not set or if %NULL is passed.
     */
    getColumns(): DbColumn[]
    /**
     * Use this method to obtain internal list of all fkeys. The internal list
     * should not be freed.
     * @returns A list of #GdaDbFkey objects or %NULL if the internal list is not set or %NULL is passed
     */
    getFkeys(): DbFkey[]
    getIsTemp(): boolean
    /**
     * This method returns %TRUE if at least one column is added to the table. It ruturns %FALSE if the
     * table has no columns.
     * @returns %TRUE or %FALSE
     */
    isValid(): boolean
    /**
     * Populate `op` with information stored in `self`. This method sets `op` to execute CREATE_TABLE
     * operation.
     * @param op an instance of #GdaServerOperation to populate.
     * @param ifnotexists Set it to TRUE if "IF NOT EXISTS" should be added
     * @returns %TRUE if no error occured and %FALSE otherwise.
     */
    prepareCreate(op: ServerOperation, ifnotexists: boolean): boolean
    /**
     * Set if the table should be temporary or not.  %FALSE is set by default.
     * @param istemp Set if the table should be temporary
     */
    setIsTemp(istemp: boolean): void
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

    connect(sigName: "notify::comment", callback: (...args: any[]) => void): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::comment", ...args: any[]): void
    connect(sigName: "notify::istemp", callback: (...args: any[]) => void): number
    on(sigName: "notify::istemp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::istemp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::istemp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::istemp", ...args: any[]): void
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

class DbTable extends DbBase {

    // Own properties of Gda-6.0.Gda.DbTable

    static name: string

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
    static errorQuark(): GLib.Quark
}

module DbView {

    // Constructor properties interface

    interface ConstructorProperties extends DbBuildable.ConstructorProperties, DdlModifiable.ConstructorProperties, DbBase.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.DbView

        defstring?: string | null
        ifnoexist?: boolean | null
        istemp?: boolean | null
        replace?: boolean | null
    }

}

interface DbView extends DbBuildable, DdlModifiable {

    // Own properties of Gda-6.0.Gda.DbView

    defstring: string | null
    ifnoexist: boolean
    istemp: boolean
    replace: boolean
    __gtype__: number

    // Own fields of Gda-6.0.Gda.DbView

    parentInstance: any

    // Owm methods of Gda-6.0.Gda.DbView

    getDefstring(): string | null
    getIfnoexist(): boolean
    getIstemp(): boolean
    getReplace(): boolean
    /**
     * Populate `op` with information needed to perform CREATE_VIEW operation. This method was desgned
     * for internal use and will be obsolete in the future. Do not use it for the new code.
     * @param op #GdaServerOperation instance to populate
     * @returns %TRUE if succeeded and %FALSE otherwise.
     */
    prepareCreate(op: ServerOperation): boolean
    setDefstring(str: string | null): void
    setIfnoexist(noexist: boolean): void
    setIstemp(temp: boolean): void
    setReplace(replace: boolean): void

    // Class property signals of Gda-6.0.Gda.DbView

    connect(sigName: "notify::defstring", callback: (...args: any[]) => void): number
    on(sigName: "notify::defstring", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::defstring", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::defstring", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::defstring", ...args: any[]): void
    connect(sigName: "notify::ifnoexist", callback: (...args: any[]) => void): number
    on(sigName: "notify::ifnoexist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ifnoexist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ifnoexist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ifnoexist", ...args: any[]): void
    connect(sigName: "notify::istemp", callback: (...args: any[]) => void): number
    on(sigName: "notify::istemp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::istemp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::istemp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::istemp", ...args: any[]): void
    connect(sigName: "notify::replace", callback: (...args: any[]) => void): number
    on(sigName: "notify::replace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::replace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::replace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::replace", ...args: any[]): void
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

class DbView extends DbBase {

    // Own properties of Gda-6.0.Gda.DbView

    static name: string

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

module HandlerBin {

    // Constructor properties interface

    interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface HandlerBin extends DataHandler {

    // Own properties of Gda-6.0.Gda.HandlerBin

    __gtype__: number

    // Class property signals of Gda-6.0.Gda.HandlerBin

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

class HandlerBin extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerBin

    static name: string

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

module HandlerBoolean {

    // Constructor properties interface

    interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface HandlerBoolean extends DataHandler {

    // Own properties of Gda-6.0.Gda.HandlerBoolean

    __gtype__: number

    // Class property signals of Gda-6.0.Gda.HandlerBoolean

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

class HandlerBoolean extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerBoolean

    static name: string

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

module HandlerNumerical {

    // Constructor properties interface

    interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface HandlerNumerical extends DataHandler {

    // Own properties of Gda-6.0.Gda.HandlerNumerical

    __gtype__: number

    // Class property signals of Gda-6.0.Gda.HandlerNumerical

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

class HandlerNumerical extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerNumerical

    static name: string

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

module HandlerString {

    // Constructor properties interface

    interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface HandlerString extends DataHandler {

    // Own properties of Gda-6.0.Gda.HandlerString

    __gtype__: number

    // Class property signals of Gda-6.0.Gda.HandlerString

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

class HandlerString extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerString

    static name: string

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
    static newWithProvider(prov: ServerProvider, cnc: Connection | null): HandlerString
    _init(config?: HandlerString.ConstructorProperties): void
}

module HandlerText {

    // Constructor properties interface

    interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface HandlerText extends DataHandler {

    // Own properties of Gda-6.0.Gda.HandlerText

    __gtype__: number

    // Own fields of Gda-6.0.Gda.HandlerText

    parentInstance: GObject.Object

    // Class property signals of Gda-6.0.Gda.HandlerText

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

class HandlerText extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerText

    static name: string

    // Constructors of Gda-6.0.Gda.HandlerText

    constructor(config?: HandlerText.ConstructorProperties) 
    /**
     * Creates a data handler for strings, which will use some specific methods implemented
     * by the provider object associated with `cnc`.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @returns the new object
     */
    static newWithConnection(cnc: Connection | null): HandlerText
    _init(config?: HandlerText.ConstructorProperties): void
    /**
     * Creates a data handler for large strings
     * @returns the new object
     */
    static new(): DataHandler
}

module HandlerTime {

    // Constructor properties interface

    interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface HandlerTime extends DataHandler {

    // Own properties of Gda-6.0.Gda.HandlerTime

    __gtype__: number

    // Owm methods of Gda-6.0.Gda.HandlerTime

    /**
     * Get a string representing the locale-dependent way to enter a date/time/datetime, using
     * a syntax suitable for the #GdauiFormatEntry widget
     * @param type the type of data being handled
     * @returns a new string
     */
    getFormat(type: GObject.GType): string | null
    /**
     * Get a string giving the user a hint about the locale-dependent requested format.
     * @param type the type of data being handled
     * @returns a new string
     */
    getHint(type: GObject.GType): string | null
    getNoLocaleStrFromValue(value: any): string | null
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
     * @param twodigitsYears TRUE if year part of date must be rendered on 2 digits
     */
    setSqlSpec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigitsYears: boolean): void
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
     * @param twodigitsYears TRUE if year part of date must be rendered on 2 digits
     */
    setStrSpec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigitsYears: boolean): void

    // Class property signals of Gda-6.0.Gda.HandlerTime

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

class HandlerTime extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerTime

    static name: string

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
    static newNoLocale(): HandlerTime
    _init(config?: HandlerTime.ConstructorProperties): void
}

module HandlerType {

    // Constructor properties interface

    interface ConstructorProperties extends DataHandler.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface HandlerType extends DataHandler {

    // Own properties of Gda-6.0.Gda.HandlerType

    __gtype__: number

    // Class property signals of Gda-6.0.Gda.HandlerType

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

class HandlerType extends GObject.Object {

    // Own properties of Gda-6.0.Gda.HandlerType

    static name: string

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

module Holder {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `source-changed`
     */
    interface SourceChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `to-default`
     */
    interface ToDefaultSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `validate-change`
     */
    interface ValidateChangeSignalCallback {
        (newValue: any): GLib.Error
    }


    // Constructor properties interface

    interface ConstructorProperties extends Lockable.ConstructorProperties, GObject.Object.ConstructorProperties {

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

interface Holder extends Lockable {

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
    __gtype__: number

    // Own fields of Gda-6.0.Gda.Holder

    parentInstance: GObject.Object

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
    forceInvalid(): void
    /**
     * Forces a holder to be invalid; to set it valid again, a new value must be assigned
     * to it using gda_holder_set_value() or gda_holder_take_value().
     * 
     * `holder'`s value is set to %NULL.
     * @param error a #GError explaining why `holder` is declared invalid, or %NULL
     */
    forceInvalidE(error: GLib.Error | null): void
    /**
     * Get an "encoded" version of `holder'`s name. The "encoding" consists in replacing non
     * alphanumeric character with the string "__gdaXX" where XX is the hex. representation
     * of the non alphanumeric char.
     * 
     * This method is just a wrapper around the gda_text_to_alphanum() function.
     * @returns a new string
     */
    getAlphanumId(): string | null
    /**
     * Get the holder which makes `holder` change its value when the holder's value is changed.
     * @returns the #GdaHolder or %NULL
     */
    getBind(): Holder
    /**
     * Get the default value held into the holder. WARNING: the default value does not need to be of
     * the same type as the one required by `holder`.
     * @returns the default value
     */
    getDefaultValue(): any
    /**
     * Get `holder'`s type
     * @returns the data type
     */
    getGType(): GObject.GType
    /**
     * Get the ID of `holder`. The ID can be set using `holder'`s "id" property
     * @returns the ID (don't modify the string).
     */
    getId(): string | null
    /**
     * Get wether the holder can be NULL or not
     * @returns TRUE if the holder cannot be NULL
     */
    getNotNull(): boolean
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
    getSourceModel(col: number): DataModel
    /**
     * Get the value held into the holder. If `holder` is set to use its default value
     * and that default value is not of the same type as `holder,` then %NULL is returned.
     * 
     * If `holder` is set to NULL, then the returned value is a #GDA_TYPE_NULL GValue.
     * 
     * If `holder` is invalid, then the returned value is %NULL.
     * @returns the value, or %NULL
     */
    getValue(): any | null
    /**
     * Same functionality as gda_holder_get_value() except that it returns the value as a string
     * (the conversion is done using `dh` if not %NULL, or the default data handler otherwise).
     * @param dh a #GdaDataHandler to use, or %NULL
     * @returns the value, or %NULL
     */
    getValueStr(dh: DataHandler | null): string | null
    /**
     * Get the validity of `holder` (that is, of the value held by `holder)`
     * @returns TRUE if @holder's value can safely be used
     */
    isValid(): boolean
    /**
     * Get the validity of `holder` (that is, of the value held by `holder)`
     * @returns TRUE if @holder's value can safely be used
     */
    isValidE(): boolean
    /**
     * Sets `holder` to change when `bind_to` changes (and does not make `bind_to` change when `holder` changes).
     * For the operation to succeed, the GType of `holder` and `bind_to` must be the same, with the exception that
     * any of them can have a %GDA_TYPE_NULL type (in this situation, the GType of the two #GdaHolder objects
     * involved is set to match the other when any of them sets its type to something different than GDA_TYPE_NULL).
     * 
     * If `bind_to` is %NULL, then `holder` will not be bound anymore.
     * @param bindTo a #GdaHolder or %NULL
     * @returns TRUE if no error occurred
     */
    setBind(bindTo: Holder): boolean
    /**
     * Sets the default value within the holder. If `value` is %NULL then `holder` won't have a
     * default value anymore. To set a default value to %NULL, then pass a #GValue created using
     * gda_value_new_null().
     * 
     * NOTE: the default value does not need to be of the same type as the one required by `holder`.
     * @param value a value to set the holder's default value, or %NULL
     */
    setDefaultValue(value: any): void
    /**
     * Sets if the holder can have a NULL value. If `not_null` is TRUE, then that won't be allowed
     * @param notNull TRUE if `holder` should not accept %NULL values
     */
    setNotNull(notNull: boolean): void
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
    setSourceModel(model: DataModel, col: number): boolean
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
    setValue(value: any | null): boolean
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
    setValueStr(dh: DataHandler, value: string | null): boolean
    /**
     * Set `holder'`s value to its default value.
     * @returns TRUE if @holder has got a default value
     */
    setValueToDefault(): boolean
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
     * @param valueChanged a boolean set with TRUE if the value changes, FALSE elsewhere.
     * @returns NULL if an error occurred or if the previous GValue was NULL itself. It returns the static GValue user set previously, so that he can free it.
     */
    takeStaticValue(value: any, valueChanged: boolean): any
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
    takeValue(value: any): boolean
    /**
     * Tells if `holder'`s current value is the default one.
     * @returns TRUE if @holder @holder's current value is the default one
     */
    valueIsDefault(): boolean

    // Own virtual methods of Gda-6.0.Gda.Holder

    changed(): void
    sourceChanged(): void
    toDefault(): void
    validateChange(newValue: any): GLib.Error

    // Own signals of Gda-6.0.Gda.Holder

    connect(sigName: "changed", callback: Holder.ChangedSignalCallback): number
    on(sigName: "changed", callback: Holder.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Holder.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Holder.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "source-changed", callback: Holder.SourceChangedSignalCallback): number
    on(sigName: "source-changed", callback: Holder.SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: Holder.SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: Holder.SourceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-changed", ...args: any[]): void
    connect(sigName: "to-default", callback: Holder.ToDefaultSignalCallback): number
    on(sigName: "to-default", callback: Holder.ToDefaultSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "to-default", callback: Holder.ToDefaultSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "to-default", callback: Holder.ToDefaultSignalCallback): NodeJS.EventEmitter
    emit(sigName: "to-default", ...args: any[]): void
    connect(sigName: "validate-change", callback: Holder.ValidateChangeSignalCallback): number
    on(sigName: "validate-change", callback: Holder.ValidateChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-change", callback: Holder.ValidateChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-change", callback: Holder.ValidateChangeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "validate-change", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Holder

    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::full-bind", callback: (...args: any[]) => void): number
    on(sigName: "notify::full-bind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::full-bind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::full-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::full-bind", ...args: any[]): void
    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::not-null", callback: (...args: any[]) => void): number
    on(sigName: "notify::not-null", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::not-null", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::not-null", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::not-null", ...args: any[]): void
    connect(sigName: "notify::plugin", callback: (...args: any[]) => void): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: "notify::simple-bind", callback: (...args: any[]) => void): number
    on(sigName: "notify::simple-bind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::simple-bind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::simple-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::simple-bind", ...args: any[]): void
    connect(sigName: "notify::source-column", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-column", ...args: any[]): void
    connect(sigName: "notify::source-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-model", ...args: any[]): void
    connect(sigName: "notify::validate-changes", callback: (...args: any[]) => void): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::validate-changes", ...args: any[]): void
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

class Holder extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Holder

    static name: string

    // Constructors of Gda-6.0.Gda.Holder

    constructor(config?: Holder.ConstructorProperties) 
    /**
     * Creates a new holder of type `type`
     * @constructor 
     * @param type the #GType requested
     * @param id an identifiation
     * @returns a new #GdaHolder object
     */
    constructor(type: GObject.GType, id: string | null) 
    /**
     * Creates a new holder of type `type`
     * @constructor 
     * @param type the #GType requested
     * @param id an identifiation
     * @returns a new #GdaHolder object
     */
    static new(type: GObject.GType, id: string | null): Holder
    _init(config?: Holder.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module MetaStore {

    // Signal callback interfaces

    /**
     * Signal callback interface for `meta-changed`
     */
    interface MetaChangedSignalCallback {
        (changes: MetaStoreChange[]): void
    }

    /**
     * Signal callback interface for `meta-reset`
     */
    interface MetaResetSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `suggest-update`
     */
    interface SuggestUpdateSignalCallback {
        (suggest: MetaContext): GLib.Error
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.MetaStore

        catalog?: string | null
        cnc?: Connection | null
        cncString?: string | null
        schema?: string | null
    }

}

interface MetaStore {

    // Own properties of Gda-6.0.Gda.MetaStore

    readonly catalog: string | null
    readonly cnc: Connection
    readonly cncString: string | null
    readonly schema: string | null
    __gtype__: number

    // Own fields of Gda-6.0.Gda.MetaStore

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.MetaStore

    /**
     * Creates a new #GdaDataModelArray data model which can be used, after being correctly filled,
     * with the gda_meta_store_modify*() methods.*
     * 
     * To be used by provider's implementation
     * @param tableName the name of a table present in `store`
     * @returns a new #GdaDataModel
     */
    createModifyDataModel(tableName: string | null): DataModel
    createStruct(features: MetaStructFeature): MetaStruct
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
     * @param fkName the name of the foreign key to declare
     * @param catalog the catalog in which the table (for which the foreign key is for) is, or %NULL
     * @param schema the schema in which the table (for which the foreign key is for) is, or %NULL
     * @param table the name of the table (for which the foreign key is for)
     * @param refCatalog the catalog in which the referenced table is, or %NULL
     * @param refSchema the schema in which the referenced table is, or %NULL
     * @param refTable the name of the referenced table
     * @param colnames an array of column names from the table for which the foreign key is for
     * @param refColnames an array of column names from the referenced table
     * @returns %TRUE if no error occurred
     */
    declareForeignKey(mstruct: MetaStruct | null, fkName: string | null, catalog: string | null, schema: string | null, table: string | null, refCatalog: string | null, refSchema: string | null, refTable: string | null, colnames: string[], refColnames: string[]): boolean
    /**
     * Extracts some data stored in `store` using a custom SELECT query. If the `select_sql` filter involves
     * SQL identifiers (such as table or column names), then the values should have been adapted using
     * gda_meta_store_sql_identifier_quote().
     * 
     * For more information about
     * SQL identifiers are represented in `store,` see the
     * <link linkend="information_schema:sql_identifiers">meta data section about SQL identifiers</link>.
     * @param selectSql a SELECT statement
     * @param vars a hash table with all variables names as keys and GValue* as value, representing values for all the variables mentioned in `select_sql`. If there is no variable then this part can be omitted.
     * @returns a new #GdaDataModel, or %NULL if an error occurred
     */
    extract(selectSql: string | null, vars: GLib.HashTable | null): DataModel
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
     * @param attName name of the attribute to get
     * @returns TRUE if no error occurred
     */
    getAttributeValue(attName: string | null): [ /* returnType */ boolean, /* attValue */ string | null ]
    /**
     * Get a pointer to the #GdaConnection object internally used by `store` to store
     * its contents.
     * 
     * The returned connection can be used to access some other data than the one managed by `store`
     * itself. The returned object is not owned by the caller (if you need to keep it, then use g_object_ref()).
     * Do not close the connection.
     * @returns a #GdaConnection, or %NULL
     */
    getInternalConnection(): Connection
    /**
     * Get `store'`s internal schema's version
     * @returns the version (incremented each time the schema changes, backward compatible)
     */
    getVersion(): number
    /**
     * Propagates an update to `store,` the update's contents is represented by `new_data,` this function is
     * primarily reserved to database providers.
     * @param tableName the name of the table to modify within `store`
     * @param newData a #GdaDataModel containing the new data to set in `table_name,` or %NULL (treated as a data model with no row at all)
     * @param condition SQL expression (which may contain variables) defining the rows which are being obsoleted by `new_data,` or %NULL
     * @param valueNames names of values
     * @param values values
     * @returns %TRUE if no error occurred
     */
    modify(tableName: string | null, newData: DataModel | null, condition: string | null, valueNames: string[], values: any[]): boolean
    /**
     * Propagates an update to `store,` the update's contents is represented by `new_data,` this function is
     * primarily reserved to database providers.
     * @param context a #GdaMetaContext context describing what to modify in `store`
     * @param newData a #GdaDataModel containing the new data to set in `table_name,` or %NULL (treated as a data model with no row at all)
     * @returns TRUE if no error occurred
     */
    modifyWithContext(context: MetaContext, newData: DataModel | null): boolean
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
     * @param xmlDescription an XML description of the table or view to add to `store`
     * @returns TRUE if the new object has successfully been added
     */
    schemaAddCustomObject(xmlDescription: string | null): boolean
    /**
     * Get an ordered list of the tables `store` knows about. The tables are ordered in a way that tables dependencies
     * are respected: if table B has a foreign key on table A, then table A will be listed before table B in the returned
     * list.
     * @returns a new list of tables names (as gchar*), the list must be freed when no longer needed, but the strings present in the list must not be modified.
     */
    schemaGetAllTables(): string[]
    /**
     * Get an ordered list of the tables `store` knows about on which the `table_name` table depends (recursively).
     * The tables are ordered in a way that tables dependencies
     * are respected: if table B has a foreign key on table A, then table A will be listed before table B in the returned
     * list.
     * @param tableName the name of the table for which all the dependencies must be listed
     * @returns a new list of tables names (as gchar*), the list must be freed when no longer needed, but the strings present in the list must not be modified.
     */
    schemaGetDependTables(tableName: string | null): string[]
    /**
     * Creates a new #GdaMetaStruct object representing `store'`s internal database structure.
     * @returns a new #GdaMetaStruct object, or %NULL if an error occurred
     */
    schemaGetStructure(): MetaStruct
    /**
     * Removes the custom database object named `obj_name`.
     * @param objName name of the custom object to remove
     * @returns TRUE if the custom object has successfully been removed
     */
    schemaRemoveCustomObject(objName: string | null): boolean
    /**
     * Set the value of the attribute named `att_name` to `att_value;` see gda_meta_store_get_attribute_value() for
     * more information.
     * @param attName name of the attribute to set
     * @param attValue value of the attribute to set, or %NULL to unset the attribute
     * @returns TRUE if no error occurred
     */
    setAttributeValue(attName: string | null, attValue: string | null): boolean
    /**
     * Specifies how `store` must handle SQL identifiers it has to store. This method is mainly used by
     * database providers.
     * @param style a style
     */
    setIdentifiersStyle(style: SqlIdentifierStyle): void
    /**
     * Specifies a function which `store` will use to determine if a keyword is an SQL reserved
     * keyword or not.
     * 
     * This method is mainly used by database providers.
     * @param func a #GdaSqlReservedKeywordsFunc function, or %NULL
     */
    setReservedKeywordsFunc(func: SqlReservedKeywordsFunc | null): void
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
     * @param fkName the name of the foreign key to declare
     * @param catalog the catalog in which the table (for which the foreign key is for) is, or %NULL
     * @param schema the schema in which the table (for which the foreign key is for) is, or %NULL
     * @param table the name of the table (for which the foreign key is for)
     * @param refCatalog the catalog in which the referenced table is, or %NULL
     * @param refSchema the schema in which the referenced table is, or %NULL
     * @param refTable the name of the referenced table
     * @returns %TRUE if no error occurred
     */
    undeclareForeignKey(mstruct: MetaStruct | null, fkName: string | null, catalog: string | null, schema: string | null, table: string | null, refCatalog: string | null, refSchema: string | null, refTable: string | null): boolean

    // Own virtual methods of Gda-6.0.Gda.MetaStore

    metaReset(): void
    suggestUpdate(suggest: MetaContext): GLib.Error

    // Own signals of Gda-6.0.Gda.MetaStore

    connect(sigName: "meta-changed", callback: MetaStore.MetaChangedSignalCallback): number
    on(sigName: "meta-changed", callback: MetaStore.MetaChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "meta-changed", callback: MetaStore.MetaChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "meta-changed", callback: MetaStore.MetaChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "meta-changed", ...args: any[]): void
    connect(sigName: "meta-reset", callback: MetaStore.MetaResetSignalCallback): number
    on(sigName: "meta-reset", callback: MetaStore.MetaResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "meta-reset", callback: MetaStore.MetaResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "meta-reset", callback: MetaStore.MetaResetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "meta-reset", ...args: any[]): void
    connect(sigName: "suggest-update", callback: MetaStore.SuggestUpdateSignalCallback): number
    on(sigName: "suggest-update", callback: MetaStore.SuggestUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "suggest-update", callback: MetaStore.SuggestUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "suggest-update", callback: MetaStore.SuggestUpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "suggest-update", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.MetaStore

    connect(sigName: "notify::catalog", callback: (...args: any[]) => void): number
    on(sigName: "notify::catalog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::catalog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::catalog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::catalog", ...args: any[]): void
    connect(sigName: "notify::cnc", callback: (...args: any[]) => void): number
    on(sigName: "notify::cnc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cnc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cnc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cnc", ...args: any[]): void
    connect(sigName: "notify::cnc-string", callback: (...args: any[]) => void): number
    on(sigName: "notify::cnc-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cnc-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cnc-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cnc-string", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
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

class MetaStore extends GObject.Object {

    // Own properties of Gda-6.0.Gda.MetaStore

    static name: string

    // Constructors of Gda-6.0.Gda.MetaStore

    constructor(config?: MetaStore.ConstructorProperties) 
    /**
     * Create a new #GdaMetaStore object.
     * @constructor 
     * @param cncString a connection string, or %NULL for an in-memory internal database
     * @returns the newly created object, or %NULL if an error occurred
     */
    constructor(cncString: string | null) 
    /**
     * Create a new #GdaMetaStore object.
     * @constructor 
     * @param cncString a connection string, or %NULL for an in-memory internal database
     * @returns the newly created object, or %NULL if an error occurred
     */
    static new(cncString: string | null): MetaStore
    /**
     * Create a new #GdaMetaStore object using `file_name` as its internal
     * database
     * @constructor 
     * @param fileName a file name
     * @returns the newly created object, or %NULL if an error occurred
     */
    static newWithFile(fileName: string | null): MetaStore
    _init(config?: MetaStore.ConstructorProperties): void
    static errorQuark(): GLib.Quark
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
    static sqlIdentifierQuote(id: string | null, cnc: Connection): string | null
}

module MetaStruct {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.MetaStruct

        features?: number | null
        metaStore?: MetaStore | null
    }

}

interface MetaStruct {

    // Own properties of Gda-6.0.Gda.MetaStruct

    readonly features: number
    readonly metaStore: MetaStore
    __gtype__: number

    // Own fields of Gda-6.0.Gda.MetaStruct

    parentInstance: GObject.Object

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
    complementAll(): boolean
    /**
     * This method is similar to gda_meta_struct_complement() and gda_meta_struct_complement_all()
     * but creates #GdaMetaDbObject for all the
     * database object which are usable using only their short name (that is which do not need to be prefixed by
     * the schema in which they are to be used).
     * 
     * Please refer to gda_meta_struct_complement() form more information.
     * @returns TRUE if no error occurred
     */
    complementDefault(): boolean
    /**
     * This method is similar to gda_meta_struct_complement() but creates #GdaMetaDbObject for all the dependencies
     * of `dbo`.
     * 
     * Please refer to gda_meta_struct_complement() form more information.
     * @param dbo a #GdaMetaDbObject part of `mstruct`
     * @returns TRUE if no error occurred
     */
    complementDepend(dbo: MetaDbObject): boolean
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
    complementSchema(catalog: any | null, schema: any | null): boolean
    /**
     * Creates a new graph (in the GraphViz syntax) representation of `mstruct`.
     * @param info informs what kind of information to show in the resulting graph
     * @returns a new string, or %NULL if an error occurred.
     */
    dumpAsGraph(info: MetaGraphInfo): string | null
    /**
     * Get a list of all the #GdaMetaDbObject structures representing database objects in `mstruct`. Note that
     * no #GdaMetaDbObject structure must not be modified.
     * @returns a new #GSList list of pointers to #GdaMetaDbObject structures which must be destroyed after usage using g_slist_free(). The individual #GdaMetaDbObject must not be modified.
     */
    getAllDbObjects(): MetaDbObject[] | null
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
    getDbObject(catalog: any | null, schema: any | null, name: any): MetaDbObject | null
    /**
     * Tries to find the #GdaMetaTableColumn representing the column named `col_name` in `table`.
     * @param table the #GdaMetaTable structure to find the column for
     * @param colName the name of the column to find (as a G_TYPE_STRING GValue)
     * @returns the #GdaMetaTableColumn or %NULL if not found
     */
    getTableColumn(table: MetaTable, colName: any): MetaTableColumn | null
    /**
     * Loads an XML description into `mstruct`. This method is still experimental and no description
     * the XML file structure is given, and no guarantee that it will remain as it is given.
     * @param catalog the catalog name, or %NULL
     * @param schema the schema name, or %NULL
     * @param xmlSpecFile the specifications as the name of an XML file
     * @returns TRUE if no error has occurred
     */
    loadFromXmlFile(catalog: string | null, schema: string | null, xmlSpecFile: string | null): boolean
    /**
     * Reorders the list of database objects within `mstruct` in a way specified by `sort_type`.
     * @param sortType the kind of sorting requested
     * @returns TRUE if no error occurred
     */
    sortDbObjects(sortType: MetaSortType): boolean

    // Class property signals of Gda-6.0.Gda.MetaStruct

    connect(sigName: "notify::features", callback: (...args: any[]) => void): number
    on(sigName: "notify::features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::features", ...args: any[]): void
    connect(sigName: "notify::meta-store", callback: (...args: any[]) => void): number
    on(sigName: "notify::meta-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::meta-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::meta-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::meta-store", ...args: any[]): void
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

class MetaStruct extends GObject.Object {

    // Own properties of Gda-6.0.Gda.MetaStruct

    static name: string

    // Constructors of Gda-6.0.Gda.MetaStruct

    constructor(config?: MetaStruct.ConstructorProperties) 
    _init(config?: MetaStruct.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module PStmt {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PStmt {

    // Own properties of Gda-6.0.Gda.PStmt

    __gtype__: number

    // Own fields of Gda-6.0.Gda.PStmt

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.PStmt

    /**
     * Copies `src'`s data to `dest`
     * @param dest a #GdaPStmt object
     */
    copyContents(dest: PStmt): void
    /**
     * Get a pointer to the #GdaStatement which led to the creation of this prepared statement.
     * 
     * Note: if that statement has been modified since the creation of `pstmt,` then this method
     * will return %NULL
     * @returns the #GdaStatement
     */
    getGdaStatement(): Statement
    getNcols(): number
    /**
     * List of parameters' IDs (as gchar *)
     * @returns a list of string with parameters ID's
     */
    getParamIds(): string[]
    /**
     * Actual SQL code used for this prepared statement, mem freed by GdaPStmt
     * @returns SQL command used
     */
    getSql(): string | null
    /**
     * List of #GdaColumn objects which data models created from this
     * prepared statement can copy
     * @returns a list of #GdaColumn objects
     */
    getTmplColumns(): Column[]
    /**
     * Set column's types for statement. `types` will be stolen and should
     * no be modified anymore.
     * @returns an array of #GType used in the columns
     */
    getTypes(): GObject.GType[]
    /**
     * Set column's types for statement. `types` is stalen and should
     * no be modified
     * @param types an array of types to use for each column
     */
    setCols(types: GObject.GType[]): void
    /**
     * Informs `pstmt` that it corresponds to the preparation of the `stmt` statement
     * @param stmt a #GdaStatement object, or %NULL
     */
    setGdaStatement(stmt: Statement | null): void
    /**
     * List of parameters' IDs (as gchar *), list is stolen
     * @param params a list of strings with ID's to set
     */
    setParamIds(params: string[]): void
    /**
     * Set SQL code used for this prepared statement, mem freed by GdaPStmt
     * @param sql 
     */
    setSql(sql: string | null): void
    /**
     * Set the list of #GdaColumn objects which data models created from this
     * prepared statement can copy. The list is stolen, so you should not
     * free it.
     * @param columns a list of #GdaColumn
     */
    setTmplColumns(columns: Column[]): void

    // Class property signals of Gda-6.0.Gda.PStmt

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

class PStmt extends GObject.Object {

    // Own properties of Gda-6.0.Gda.PStmt

    static name: string

    // Constructors of Gda-6.0.Gda.PStmt

    constructor(config?: PStmt.ConstructorProperties) 
    _init(config?: PStmt.ConstructorProperties): void
}

module RepetitiveStatement {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.RepetitiveStatement

        statement?: Statement | null
    }

}

interface RepetitiveStatement {

    // Own properties of Gda-6.0.Gda.RepetitiveStatement

    readonly statement: Statement
    __gtype__: number

    // Own fields of Gda-6.0.Gda.RepetitiveStatement

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.RepetitiveStatement

    /**
     * Specifies that `rstmt` be executed one time with the values contained in `values`.
     * 
     * A new #GdaSet to be used as the `values` argument can be obtained using
     * gda_repetitive_statement_get_template_set().
     * @param values a #GdaSet object with the values to be used
     * @param makeCopy %TRUE if `values` is copied, and %FALSE if `values` is only ref'ed
     * @returns a new #GdaRepetitiveStatement object
     */
    appendSet(values: Set, makeCopy: boolean): boolean
    /**
     * Get all the values sets which will have been added using gda_repetitive_statement_append_set().
     * @returns a new #GSList of #GdaSet objects (free with g_slist_free()).
     */
    getAllSets(): Set[]
    /**
     * Gets a new #GdaSet object with the parameters used by the template statement in the
     * `rstmt` object.
     * 
     * Use this object with gda_repetitive_statement_append_set().
     * @param set a place to store the returned template set
     * @returns %TRUE on success, %FALSE on error
     */
    getTemplateSet(set: Set): boolean

    // Class property signals of Gda-6.0.Gda.RepetitiveStatement

    connect(sigName: "notify::statement", callback: (...args: any[]) => void): number
    on(sigName: "notify::statement", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::statement", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::statement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::statement", ...args: any[]): void
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

class RepetitiveStatement extends GObject.Object {

    // Own properties of Gda-6.0.Gda.RepetitiveStatement

    static name: string

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

module Row {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.Row

        model?: DataModel | null
        modelRow?: number | null
        nbValues?: number | null
    }

}

interface Row {

    // Own properties of Gda-6.0.Gda.Row

    readonly model: DataModel
    readonly modelRow: number
    readonly nbValues: number
    __gtype__: number

    // Own fields of Gda-6.0.Gda.Row

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.Row

    getLength(): number
    /**
     * Gets a pointer to a #GValue stored in a #GdaRow.
     * 
     * This is a pointer to the internal array of values. Don't try to free
     * or modify it (modifying is reserved to database provider's implementations).
     * @param num field index.
     * @returns a pointer to the #GValue in the position @num of @row.
     */
    getValue(num: number): any | null
    /**
     * Marks `value` as being invalid. This method is mainly used by database
     * providers' implementations to report any error while reading a value from the database.
     * @param value a #GValue belonging to `row` (obtained with gda_row_get_value()).
     */
    invalidateValue(value: any): void
    /**
     * Marks `value` as being invalid. This method is mainly used by database
     * providers' implementations to report any error while reading a value from the database.
     * @param value a #GValue belonging to `row` (obtained with gda_row_get_value()).
     * @param error the error which lead to the invalidation
     */
    invalidateValueE(value: any, error: GLib.Error | null): void
    /**
     * Tells if `value` has been marked as being invalid by gda_row_invalidate_value().
     * This method is mainly used by database
     * providers' implementations to report any error while reading a value from the database.
     * @param value a #GValue belonging to `row` (obtained with gda_row_get_value()).
     * @returns %TRUE if @value is valid
     */
    valueIsValid(value: any): boolean
    /**
     * Tells if `value` has been marked as being invalid by gda_row_invalidate_value().
     * This method is mainly used by database
     * providers' implementations to report any error while reading a value from the database.
     * @param value a #GValue belonging to `row` (obtained with gda_row_get_value()).
     * @returns %TRUE if @value is valid
     */
    valueIsValidE(value: any): boolean

    // Class property signals of Gda-6.0.Gda.Row

    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::model-row", callback: (...args: any[]) => void): number
    on(sigName: "notify::model-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model-row", ...args: any[]): void
    connect(sigName: "notify::nb-values", callback: (...args: any[]) => void): number
    on(sigName: "notify::nb-values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nb-values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nb-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nb-values", ...args: any[]): void
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

class Row extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Row

    static name: string

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
    static newFromDataModel(model: DataModel, row: number): Row
    _init(config?: Row.ConstructorProperties): void
}

module ServerOperation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `sequence-item-added`
     */
    interface SequenceItemAddedSignalCallback {
        (seqPath: string | null, itemIndex: number): void
    }

    /**
     * Signal callback interface for `sequence-item-remove`
     */
    interface SequenceItemRemoveSignalCallback {
        (seqPath: string | null, itemIndex: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.ServerOperation

        connection?: Connection | null
        opType?: number | null
        provider?: ServerProvider | null
        specFilename?: string | null
        specResource?: string | null
    }

}

interface ServerOperation {

    // Own properties of Gda-6.0.Gda.ServerOperation

    readonly connection: Connection
    readonly opType: number
    readonly provider: ServerProvider
    readonly specFilename: string | null
    readonly specResource: string | null
    __gtype__: number

    // Own fields of Gda-6.0.Gda.ServerOperation

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.ServerOperation

    addItemToSequence(seqPath: string | null): number
    delItemFromSequence(itemPath: string | null): boolean
    /**
     * Get the complete path to the parent of the node defined by `path`
     * @param path a complete path to a node (starting with "/")
     * @returns a new string or %NULL if the node does not have any parent or does not exist.
     */
    getNodeParent(path: string | null): string | null
    /**
     * Get the last part of `path`
     * @param path a complete path to a node (starting with "/")
     * @returns a new string, or %NULL if an error occurred
     */
    getNodePathPortion(path: string | null): string | null
    /**
     * Convenience function to get the type of a node.
     * @param path a complete path to a node (starting with "/")
     * @param status a place to store the status of the node, or %NULL
     * @returns the type of node, or GDA_SERVER_OPERATION_NODE_UNKNOWN if the node was not found
     */
    getNodeType(path: string | null, status: ServerOperationNodeStatus | null): ServerOperationNodeType
    /**
     * Get the type of operation `op` is for
     * @returns a #GdaServerOperationType enum
     */
    getOpType(): ServerOperationType
    /**
     * Get an array of strings containing the paths of nodes situated at the root of `op`.
     * @returns a new array, which must be freed with g_strfreev().
     */
    getRootNodes(): string[]
    /**
     * Fetch the contents of a sequence. `path` can describe either a sequence (for example "/SEQNAME") or an item in a sequence
     * (for example "/SEQNAME/3")
     * @param path a complete path to a sequence node (starting with "/")
     * @returns a array of strings containing the complete paths of the nodes contained at @path (free with g_strfreev())
     */
    getSequenceItemNames(path: string | null): string[]
    getSequenceMaxSize(path: string | null): number
    getSequenceMinSize(path: string | null): number
    getSequenceName(path: string | null): string | null
    getSequenceSize(path: string | null): number
    getSqlIdentifierAtPath(path: string | null): string | null
    /**
     * Get the value for the node at the `path` path
     * @param path a complete path to a node (starting with "/")
     * @returns a constant #GValue if a value has been defined, or %NULL if the value is undefined or if the @path is not defined or @path does not hold any value.
     */
    getValueAt(path: string | null): any | null
    /**
     * Tells if all the required values in `op` have been defined.
     * 
     * if `xml_file` is not %NULL, the validity of `op` is tested against that specification,
     * and not against the current `op'`s specification.
     * @param xmlFile an XML specification file (see gda_server_operation_new()) or %NULL
     * @returns %TRUE if @op is valid
     */
    isValid(xmlFile: string | null): boolean
    /**
     * Tells if all the required values in `op` have been defined.
     * 
     * if `xml_data` is not %NULL, the validity of `op` is tested against that specification,
     * and not against the current `op'`s specification.
     * @param resource the name of a resource containing an XML specification data (see gda_server_operation_new()) or %NULL
     * @returns %TRUE if @op is valid
     */
    isValidFromResource(resource: string | null): boolean
    /**
     * Loads the contents of `node` into `op`. The XML tree passed through the `node`
     * argument must correspond to an XML tree saved using gda_server_operation_save_data_to_xml().
     * @param node a #xmlNodePtr
     * @returns %TRUE if no error occurred
     */
    loadDataFromXml(node: libxml2.NodePtr): boolean
    /**
     * Creates a new database using the specifications in `op`. `op` can be obtained using
     * gda_server_provider_create_operation(), or gda_server_operation_prepare_create_database().
     * @param provider the database provider to use, or %NULL if `op` has been created using gda_server_operation_prepare_create_database()
     * @returns TRUE if no error occurred and the database has been created, FALSE otherwise
     */
    performCreateDatabase(provider: string | null): boolean
    /**
     * Destroys an existing database using the specifications in `op`. `op` can be obtained using
     * gda_server_provider_create_operation(), or gda_server_operation_prepare_drop_database().
     * @param provider the database provider to use, or %NULL if `op` has been created using gda_server_operation_prepare_drop_database()
     * @returns TRUE if no error occurred and the database has been destroyed
     */
    performDropDatabase(provider: string | null): boolean
    /**
     * Creates an SQL statement (possibly using some specific extensions of the DBMS) corresponding to the
     * `op` operation. Note that the returned string may actually contain more than one SQL statement.
     * 
     * This function's purpose is mainly informative to get the actual SQL code which would be executed to perform
     * the operation; to actually perform the operation, use gda_server_operation_perform().
     * @returns a new string, or %NULL if an error occurred or operation cannot be rendered as SQL.
     */
    render(): string | null
    saveDataToXmlString(): string | null
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
    setValueAt(value: string | null, path: string | null): boolean

    // Own virtual methods of Gda-6.0.Gda.ServerOperation

    seqItemAdded(seqPath: string | null, itemIndex: number): void
    seqItemRemove(seqPath: string | null, itemIndex: number): void

    // Own signals of Gda-6.0.Gda.ServerOperation

    connect(sigName: "sequence-item-added", callback: ServerOperation.SequenceItemAddedSignalCallback): number
    on(sigName: "sequence-item-added", callback: ServerOperation.SequenceItemAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sequence-item-added", callback: ServerOperation.SequenceItemAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sequence-item-added", callback: ServerOperation.SequenceItemAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "sequence-item-added", itemIndex: number, ...args: any[]): void
    connect(sigName: "sequence-item-remove", callback: ServerOperation.SequenceItemRemoveSignalCallback): number
    on(sigName: "sequence-item-remove", callback: ServerOperation.SequenceItemRemoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sequence-item-remove", callback: ServerOperation.SequenceItemRemoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sequence-item-remove", callback: ServerOperation.SequenceItemRemoveSignalCallback): NodeJS.EventEmitter
    emit(sigName: "sequence-item-remove", itemIndex: number, ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.ServerOperation

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::op-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::op-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::op-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::op-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::op-type", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::spec-filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::spec-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spec-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spec-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spec-filename", ...args: any[]): void
    connect(sigName: "notify::spec-resource", callback: (...args: any[]) => void): number
    on(sigName: "notify::spec-resource", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spec-resource", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spec-resource", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spec-resource", ...args: any[]): void
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

class ServerOperation extends GObject.Object {

    // Own properties of Gda-6.0.Gda.ServerOperation

    static name: string

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
     * @param opType type of operation
     * @param xmlFile a file which has the specifications for the GdaServerOperation object to create
     * @returns a new #GdaServerOperation object
     */
    constructor(opType: ServerOperationType, xmlFile: string | null) 
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
     * @param opType type of operation
     * @param xmlFile a file which has the specifications for the GdaServerOperation object to create
     * @returns a new #GdaServerOperation object
     */
    static new(opType: ServerOperationType, xmlFile: string | null): ServerOperation
    _init(config?: ServerOperation.ConstructorProperties): void
    static errorQuark(): GLib.Quark
    /**
     * Get a string version of `type`
     * @param type a #GdaServerOperationType value
     * @returns a non %NULL string (do not free or modify)
     */
    static opTypeToString(type: ServerOperationType): string | null
    /**
     * Creates a new #GdaServerOperation object which contains the specifications required
     * to create a database. Once these specifications are provided, use
     * gda_server_operation_perform_create_database() to perform the database creation.
     * 
     * If `db_name` is left %NULL, then the name of the database to create will have to be set in the
     * returned #GdaServerOperation using gda_server_operation_set_value_at().
     * @param provider the database provider to use
     * @param dbName the name of the database to create, or %NULL
     * @returns new #GdaServerOperation object, or %NULL if the provider does not support database creation
     */
    static prepareCreateDatabase(provider: string | null, dbName: string | null): ServerOperation | null
    /**
     * Creates a new #GdaServerOperation object which contains the specifications required
     * to drop a database. Once these specifications provided, use
     * gda_server_operation_perform_drop_database() to perform the database creation.
     * 
     * If `db_name` is left %NULL, then the name of the database to drop will have to be set in the
     * returned #GdaServerOperation using gda_server_operation_set_value_at().
     * @param provider the database provider to use
     * @param dbName the name of the database to drop, or %NULL
     * @returns new #GdaServerOperation object, or %NULL if the provider does not support database destruction
     */
    static prepareDropDatabase(provider: string | null, dbName: string | null): ServerOperation | null
    /**
     * Performs the reverse of gda_server_operation_op_type_to_string()
     * @param str a string
     * @returns the #GdaServerOperationType represented by @str, or #G_MAXINT if @str is not a valid representation of a #GdaServerOperationType
     */
    static stringToOpType(str: string | null): ServerOperationType
}

module ServerProvider {

    // Constructor properties interface

    interface ConstructorProperties extends Lockable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ServerProvider extends Lockable {

    // Own properties of Gda-6.0.Gda.ServerProvider

    __gtype__: number

    // Own fields of Gda-6.0.Gda.ServerProvider

    parentInstance: GObject.Object

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
    createOperation(cnc: Connection | null, type: ServerOperationType, options: Set | null): ServerOperation | null
    /**
     * Creates a new #GdaSqlParser object which is adapted to `provider` (and possibly depending on
     * `cnc` for the actual database version).
     * 
     * If `prov` does not have its own parser, then %NULL is returned, and a general SQL parser can be obtained
     * using gda_sql_parser_new().
     * @param cnc a #GdaConnection, or %NULL
     * @returns a new #GdaSqlParser object, or %NULL.
     */
    createParser(cnc: Connection | null): SqlParser
    /**
     * Escapes `str` for use within an SQL command (to avoid SQL injection attacks). Note that the returned value still needs
     * to be enclosed in single quotes before being used in an SQL statement.
     * @param cnc a #GdaConnection object, or %NULL
     * @param str a string to escape
     * @returns a new string suitable to use in SQL statements
     */
    escapeString(cnc: Connection | null, str: string | null): string | null
    /**
     * Find a #GdaDataHandler object to manipulate data of type `for_type`.
     * 
     * Note: this function is currently very poorly implemented by database providers.
     * @param cnc a #GdaConnection object, or %NULL
     * @param forType a DBMS type definition
     * @returns a #GdaDataHandler, or %NULL if the provider does not know about the @for_type type
     */
    getDataHandlerDbms(cnc: Connection | null, forType: string | null): DataHandler
    /**
     * Find a #GdaDataHandler object to manipulate data of type `for_type`. The returned object must not be modified.
     * @param cnc a #GdaConnection object, or %NULL
     * @param forType a #GType
     * @returns a #GdaDataHandler, or %NULL if the provider does not support the requested @for_type data type
     */
    getDataHandlerGType(cnc: Connection | null, forType: GObject.GType): DataHandler
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
    getDefaultDbmsType(cnc: Connection | null, type: GObject.GType): string | null
    /**
     * Get the name (identifier) of the provider
     * @returns a string containing the provider's name
     */
    getName(): string | null
    /**
     * Get the version of the database to which the connection is opened.
     * @param cnc a #GdaConnection object
     * @returns a (read only) string, or %NULL if an error occurred
     */
    getServerVersion(cnc: Connection): string | null
    /**
     * Get the version of the provider.
     * @returns a string containing the version identification.
     */
    getVersion(): string | null
    handlerDeclare(dh: DataHandler, cnc: Connection, gType: GObject.GType, dbmsType: string | null): void
    /**
     * Reserved to database provider's implementations: get the #GdaDataHandler associated to `prov`
     * for connection `cnc`. You probably want to use gda_server_provider_get_data_handler_g_type().
     * @param cnc a #GdaConnection
     * @param gType a #GType
     * @param dbmsType a database type
     * @returns the requested #GdaDataHandler, or %NULL if none found
     */
    handlerFind(cnc: Connection | null, gType: GObject.GType, dbmsType: string | null): DataHandler
    /**
     * Reserved to database provider's implementations. This method defines a default data handler for
     * `provider,` and returns that #GdaDataHandler.
     * @param type a #GType
     * @returns a #GdaDataHandler, or %NULL
     */
    handlerUseDefault(type: GObject.GType): DataHandler
    /**
     * This is a factory method to get a unique instance of a #GdaSqlParser object
     * for each #GdaServerProvider object
     * Don't unref it.
     * @returns a #GdaSqlParser
     */
    internalGetParser(): SqlParser
    /**
     * Performs the operation described by `op`. Note that `op` is not destroyed by this method
     * and can be reused.
     * @param cnc a #GdaConnection object which will be used to perform the action, or %NULL
     * @param op a #GdaServerOperation object
     * @returns %TRUE if no error occurred
     */
    performOperation(cnc: Connection | null, op: ServerOperation): boolean
    /**
     * Performs the operation described by `op,` using the SQL from the rendering of the operation
     * @param cnc a #GdaConnection object which will be used to perform an action, or %NULL
     * @param op a #GdaServerOperation object
     * @returns %TRUE if no error occurred
     */
    performOperationDefault(cnc: Connection | null, op: ServerOperation): boolean
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
    renderOperation(cnc: Connection | null, op: ServerOperation): string | null
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
     * @param preferredType a #GType, or #G_TYPE_INVALID
     * @param dbmsType place to get the actual database type used if the conversion succeeded, or %NULL
     * @returns a new #GValue, or %NULL
     */
    stringToValue(cnc: Connection | null, string: string | null, preferredType: GObject.GType, dbmsType: string | null): any
    /**
     * Tests if a feature is supported
     * @param cnc a #GdaConnection object, or %NULL
     * @param feature #GdaConnectionFeature feature to test
     * @returns %TRUE if @feature is supported
     */
    supportsFeature(cnc: Connection | null, feature: ConnectionFeature): boolean
    /**
     * Tells if `provider` supports the `type` of operation on the `cnc` connection, using the
     * (optional) `options` parameters.
     * @param cnc a #GdaConnection object which would be used to perform an action, or %NULL
     * @param type the type of operation requested
     * @param options a list of named parameters, or %NULL
     * @returns %TRUE if the operation is supported
     */
    supportsOperation(cnc: Connection | null, type: ServerOperationType, options: Set | null): boolean
    /**
     * Unescapes `str` for use within an SQL command. This is the exact opposite of gda_server_provider_escape_string().
     * @param cnc a #GdaConnection object, or %NULL
     * @param str a string to escape
     * @returns a new string
     */
    unescapeString(cnc: Connection | null, str: string | null): string | null
    /**
     * Produces a fully quoted and escaped string from a GValue
     * @param cnc a #GdaConnection object, or %NULL
     * @param from #GValue to convert from
     * @returns escaped and quoted value or NULL if not supported.
     */
    valueToSqlString(cnc: Connection | null, from: any): string | null

    // Class property signals of Gda-6.0.Gda.ServerProvider

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

class ServerProvider extends GObject.Object {

    // Own properties of Gda-6.0.Gda.ServerProvider

    static name: string

    // Constructors of Gda-6.0.Gda.ServerProvider

    constructor(config?: ServerProvider.ConstructorProperties) 
    _init(config?: ServerProvider.ConstructorProperties): void
    static errorQuark(): GLib.Quark
    static getImplFunctionsForClass(klass: GObject.ObjectClass, type: ServerProviderFunctionsType): any | null
    /**
     * Obtain a #GMainContext on which to iterate. This function is reserved to database provider's implementations.
     * 
     * NB: if `cnc` is NOT %NULL and has a #GdaWorker associated, and if we are in its worker thread, then this function
     *     returns %NULL (to avoid generating contexts which are never used)
     * @param cnc a #GdaConnection, or %NULL
     * @returns a #GMainContext, or %NULL. Don't forget to call g_main_context_unref() when done
     */
    static getRealMainContext(cnc: Connection | null): GLib.MainContext
    /**
     * Loads and returns the contents of the specified resource.
     * This function should only be used by database provider's implementations
     * @param provName the provider's name
     * @param resource the name of the resource to load
     * @returns a new string containing the resource's contents, or %NULL if not found or if an error occurred
     */
    static loadResourceContents(provName: string | null, resource: string | null): string | null
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
     * @param functionsSet a pointer to the function set, or %NULL
     */
    static setImplFunctions(klass: ServerProviderClass, type: ServerProviderFunctionsType, functionsSet: any | null): void
}

module Set {

    // Signal callback interfaces

    /**
     * Signal callback interface for `holder-attr-changed`
     */
    interface HolderAttrChangedSignalCallback {
        (holder: Holder, attrName: string | null, attrValue: any): void
    }

    /**
     * Signal callback interface for `holder-changed`
     */
    interface HolderChangedSignalCallback {
        (object: Holder): void
    }

    /**
     * Signal callback interface for `holder-type-set`
     */
    interface HolderTypeSetSignalCallback {
        (holder: Holder): void
    }

    /**
     * Signal callback interface for `public-data-changed`
     */
    interface PublicDataChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `source-model-changed`
     */
    interface SourceModelChangedSignalCallback {
        (source: any | null): void
    }

    /**
     * Signal callback interface for `validate-holder-change`
     */
    interface ValidateHolderChangeSignalCallback {
        (holder: Holder, newValue: any): GLib.Error
    }

    /**
     * Signal callback interface for `validate-set`
     */
    interface ValidateSetSignalCallback {
        (): GLib.Error
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface Set {

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
    __gtype__: number

    // Own fields of Gda-6.0.Gda.Set

    parentInstance: GObject.Object

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
    addHolder(holder: Holder): boolean
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
    getGroup(holder: Holder): SetGroup
    getGroups(): SetGroup[]
    /**
     * Finds a #GdaHolder using its ID
     * @param holderId the ID of the requested value holder
     * @returns the requested #GdaHolder or %NULL
     */
    getHolder(holderId: string | null): Holder
    /**
     * Get the value of the #GdaHolder which ID is `holder_id`
     * @param holderId the ID of the holder to set the value
     * @returns the requested GValue, or %NULL (see gda_holder_get_value())
     */
    getHolderValue(holderId: string | null): any | null
    getHolders(): Holder[]
    /**
     * Finds a #GdaSetNode holding information for `holder,` don't modify the returned structure
     * @param holder a #GdaHolder object
     * @returns the requested #GdaSetNode or %NULL
     */
    getNode(holder: Holder): SetNode
    getNodes(): SetNode[]
    /**
     * Finds a #GdaHolder using its position
     * @param pos the position of the requested #GdaHolder, starting at %0
     * @returns the requested #GdaHolder or %NULL
     */
    getNthHolder(pos: number): Holder
    /**
     * Finds a #GdaSetSource which contains the #GdaDataModel restricting the possible values of
     * `holder,` don't modify the returned structure.
     * @param holder a #GdaHolder object
     * @returns the requested #GdaSetSource or %NULL
     */
    getSource(holder: Holder): SetSource
    /**
     * Finds the #GdaSetSource structure used in `set` for which `model` is a
     * the data model (the returned structure should not be modified).
     * @param model a #GdaDataModel object
     * @returns the requested #GdaSetSource pointer or %NULL.
     */
    getSourceForModel(model: DataModel): SetSource
    getSources(): SetSource[]
    /**
     * This method tells if all `set'`s #GdaHolder objects are valid, and if
     * they represent a valid combination of values, as defined by rules
     * external to Libgda: the "validate-set" signal is emitted and if none of the signal handlers return an
     * error, then the returned value is TRUE, otherwise the return value is FALSE as soon as a signal handler
     * returns an error.
     * @returns TRUE if the set is valid
     */
    isValid(): boolean
    /**
     * Add to `set` all the holders of `set_to_merge`.
     * Note1: only the #GdaHolder of `set_to_merge` for which no holder in `set` has the same ID are merged
     * Note2: all the #GdaHolder merged in `set` are still used by `set_to_merge`.
     * @param setToMerge a #GdaSet object
     */
    mergeWithSet(setToMerge: Set): void
    /**
     * Removes a #GdaHolder from the list of holders managed by `set`
     * @param holder the #GdaHolder to remove from `set`
     */
    removeHolder(holder: Holder): void
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
    replaceSourceModel(source: SetSource, model: DataModel): void

    // Own virtual methods of Gda-6.0.Gda.Set

    holderAttrChanged(holder: Holder, attrName: string | null, attrValue: any): void
    holderChanged(holder: Holder): void
    holderTypeSet(holder: Holder): void
    publicDataChanged(): void
    sourceModelChanged(source: SetSource): void
    validateHolderChange(holder: Holder, newValue: any): GLib.Error
    validateSet(): GLib.Error

    // Own signals of Gda-6.0.Gda.Set

    connect(sigName: "holder-attr-changed", callback: Set.HolderAttrChangedSignalCallback): number
    on(sigName: "holder-attr-changed", callback: Set.HolderAttrChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-attr-changed", callback: Set.HolderAttrChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-attr-changed", callback: Set.HolderAttrChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "holder-attr-changed", attrName: string | null, attrValue: any, ...args: any[]): void
    connect(sigName: "holder-changed", callback: Set.HolderChangedSignalCallback): number
    on(sigName: "holder-changed", callback: Set.HolderChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-changed", callback: Set.HolderChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-changed", callback: Set.HolderChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "holder-changed", ...args: any[]): void
    connect(sigName: "holder-type-set", callback: Set.HolderTypeSetSignalCallback): number
    on(sigName: "holder-type-set", callback: Set.HolderTypeSetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-type-set", callback: Set.HolderTypeSetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-type-set", callback: Set.HolderTypeSetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "holder-type-set", ...args: any[]): void
    connect(sigName: "public-data-changed", callback: Set.PublicDataChangedSignalCallback): number
    on(sigName: "public-data-changed", callback: Set.PublicDataChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "public-data-changed", callback: Set.PublicDataChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "public-data-changed", callback: Set.PublicDataChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "public-data-changed", ...args: any[]): void
    connect(sigName: "source-model-changed", callback: Set.SourceModelChangedSignalCallback): number
    on(sigName: "source-model-changed", callback: Set.SourceModelChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-model-changed", callback: Set.SourceModelChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-model-changed", callback: Set.SourceModelChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-model-changed", ...args: any[]): void
    connect(sigName: "validate-holder-change", callback: Set.ValidateHolderChangeSignalCallback): number
    on(sigName: "validate-holder-change", callback: Set.ValidateHolderChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-holder-change", callback: Set.ValidateHolderChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-holder-change", callback: Set.ValidateHolderChangeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "validate-holder-change", newValue: any, ...args: any[]): void
    connect(sigName: "validate-set", callback: Set.ValidateSetSignalCallback): number
    on(sigName: "validate-set", callback: Set.ValidateSetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-set", callback: Set.ValidateSetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-set", callback: Set.ValidateSetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "validate-set", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Set

    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::holders", callback: (...args: any[]) => void): number
    on(sigName: "notify::holders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::holders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::holders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::holders", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::validate-changes", callback: (...args: any[]) => void): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::validate-changes", ...args: any[]): void
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

class Set extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Set

    static name: string

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
     * @param xmlSpec a #xmlNodePtr for a &lt;parameters&gt; tag
     * @returns a new object, or %NULL if an error occurred
     */
    static newFromSpecNode(xmlSpec: libxml2.NodePtr): Set
    /**
     * Creates a new #GdaSet object from the `xml_spec`
     * specifications
     * @constructor 
     * @param xmlSpec a string
     * @returns a new object, or %NULL if an error occurred
     */
    static newFromSpecString(xmlSpec: string | null): Set
    /**
     * Creates a new #GdaSet like gda_set_new(), but does not allow modifications to any of the #GdaHolder
     * object in `holders`. This function is used for Libgda's database providers' implementation.
     * @constructor 
     * @param holders a list of #GdaHolder objects
     * @returns a new #GdaSet object
     */
    static newReadOnly(holders: Holder[]): Set
    _init(config?: Set.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

interface Short {
}

class Short {

    // Own properties of Gda-6.0.Gda.Short

    static name: string
}

module SqlBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface SqlBuilder {

    // Own properties of Gda-6.0.Gda.SqlBuilder

    __gtype__: number

    // Own fields of Gda-6.0.Gda.SqlBuilder

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.SqlBuilder

    /**
     * Creates a new CASE ... WHEN ... THEN ... ELSE ... END expression. The WHEN expression and the THEN
     * expression IDs are taken from the `when_array` and `then_array` at the same index, for each index inferior to
     * `args_size`.
     * @param testExpr the expression ID representing the test of the CASE, or %0
     * @param elseExpr the expression ID representing the ELSE expression, or %0
     * @param whenArray an array containing each WHEN expression ID, having at least `args_size` elements
     * @param thenArray an array containing each THEN expression ID, having at least `args_size` elements
     * @returns the ID of the new expression, or %0 if there was an error
     */
    addCase(testExpr: SqlBuilderId, elseExpr: SqlBuilderId, whenArray: SqlBuilderId[], thenArray: SqlBuilderId[]): SqlBuilderId
    /**
     * Builds a new expression which represents a condition (or operation).
     * @param op type of condition
     * @param op1 the ID of the 1st argument (not 0)
     * @param op2 the ID of the 2nd argument (may be %0 if `op` needs only one operand)
     * @param op3 the ID of the 3rd argument (may be %0 if `op` needs only one or two operand)
     * @returns the ID of the new expression, or %0 if there was an error
     */
    addCond(op: SqlOperatorType, op1: SqlBuilderId, op2: SqlBuilderId, op3: SqlBuilderId): SqlBuilderId
    /**
     * Builds a new expression which represents a condition (or operation).
     * 
     * As a side case, if `ops_ids_size` is 1,
     * then `op` is ignored, and the returned ID represents `op_ids[`0] (this avoids any problem for example
     * when `op` is GDA_SQL_OPERATOR_TYPE_AND and there is in fact only one operand).
     * @param op type of condition
     * @param opIds an array of ID for the arguments (not %0)
     * @returns the ID of the new expression, or %0 if there was an error
     */
    addCondV(op: SqlOperatorType, opIds: SqlBuilderId[]): SqlBuilderId
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
    addExprValue(value: any | null): SqlBuilderId
    /**
     * Defines an expression representing a field in `builder,`
     * which may be reused to build other parts of a statement,
     * for instance as a parameter to gda_sql_builder_add_cond() or
     * gda_sql_builder_add_field_value_id().
     * 
     * Calling this with a %NULL `table_name` is equivalent to calling gda_sql_builder_add_id().
     * 
     * For SELECT queries, see gda_sql_builder_select_add_field().
     * @param fieldName a field name
     * @param tableName a table name, or %NULL
     * @returns the ID of the new expression, or %0 if there was an error
     */
    addFieldId(fieldName: string | null, tableName: string | null): SqlBuilderId
    /**
     * Valid only for: INSERT, UPDATE statements.
     * 
     * Specifies that the field represented by `field_name` will be set to the value identified
     * by `value`
     * @param fieldName a field name
     * @param value value to set the field to, or %NULL or a GDA_TYPE_NULL value to represent an SQL NULL
     */
    addFieldValueAsGvalue(fieldName: string | null, value: any | null): void
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
     * @param fieldId the ID of the field's name or definition
     * @param valueId the ID of the value to set the field to, or %0
     */
    addFieldValueId(fieldId: SqlBuilderId, valueId: SqlBuilderId): void
    /**
     * Builds a new expression which represents a function applied to some arguments
     * @param funcName the functions's name
     * @param args an array of IDs representing the function's arguments
     * @returns the ID of the new expression, or %0 if there was an error
     */
    addFunction(funcName: string | null, args: SqlBuilderId[]): SqlBuilderId
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
    addId(str: string | null): SqlBuilderId
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
     * @param paramName parameter's name
     * @param type parameter's type
     * @param nullok TRUE if the parameter can be set to %NULL
     * @returns the ID of the new expression, or %0 if there was an error
     */
    addParam(paramName: string | null, type: GObject.GType, nullok: boolean): SqlBuilderId
    /**
     * Adds an expression which is a subselect.
     * @param sqlst a pointer to a #GdaSqlStatement, which has to be a SELECT or compound SELECT. This will be copied.
     * @returns the ID of the new expression, or %0 if there was an error
     */
    addSubSelect(sqlst: SqlStatement): SqlBuilderId
    /**
     * Add a sub select to a COMPOUND statement
     * @param sqlst a pointer to a #GdaSqlStatement, which has to be a SELECT or compound SELECT. This will be copied.
     */
    compoundAddSubSelect(sqlst: SqlStatement): void
    /**
     * Add a sub select to a COMPOUND statement
     * @param subselect a #GdaSqlBuilder, which has to be a SELECT or compound SELECT. This will be copied.
     */
    compoundAddSubSelectFromBuilder(subselect: SqlBuilder): void
    /**
     * Changes the type of compound which `builder` is making, for a COMPOUND statement
     * @param compoundType a type of compound
     */
    compoundSetType(compoundType: SqlStatementCompoundType): void
    /**
     * Exports a part managed by `builder` as a new #GdaSqlExpr, which can represent any expression
     * in a statement.
     * @param id the ID of the expression to be exported, (must be a valid ID in `builder,` not %0)
     * @returns a pointer to a new #GdaSqlExpr structure, free using gda_sql_expr_free() when not needed anymore. If the part with @id as ID cannot be found, the returned value is %NULL.
     */
    exportExpression(id: SqlBuilderId): SqlExpr
    /**
     * Creates a new #GdaSqlStatement structure from `builder'`s contents.
     * 
     * The returned pointer belongs to `builder'`s internal representation.
     * Use gda_sql_statement_copy() if you need to keep it.
     * @returns a #GdaSqlStatement pointer
     */
    getSqlStatement(): SqlStatement | null
    /**
     * Creates a new #GdaStatement statement from `builder'`s contents.
     * @returns a new #GdaStatement object, or %NULL if an error occurred
     */
    getStatement(): Statement
    /**
     * Imports the `expr` into `builder`.
     * @param expr a #GdaSqlExpr obtained using gda_sql_builder_export_expression()
     * @returns the ID of the new expression, or %0 if there was an error
     */
    importExpression(expr: SqlExpr): SqlBuilderId
    /**
     * Imports the an expression located in `query` into `builder`.
     * @param query a #GdaSqlBuilder object to get expression from
     * @param exprId a #GdaSqlBuilderId of the expression in `query`
     * @returns the ID of the new expression, or %0 if there was an error
     */
    importExpressionFromBuilder(query: SqlBuilder, exprId: SqlBuilderId): SqlBuilderId
    /**
     * Alter a join in a SELECT statement to make its condition use equal field
     * values in the fields named `field_name` in both tables, via the USING keyword.
     * @param joinId the ID of the join to modify (not %0)
     * @param fieldName the name of the field to use in the join condition (not %NULL)
     */
    joinAddField(joinId: SqlBuilderId, fieldName: string | null): void
    /**
     * Valid only for: SELECT statements.
     * 
     * Add a selected selected item to the SELECT statement.
     * 
     * For non-SELECT statements, see gda_sql_builder_add_field_id().
     * @param fieldName a field name
     * @param tableName a table name, or %NULL
     * @param alias an alias (eg. for the "AS" clause), or %NULL
     * @returns the ID of the added field, or %0 if there was an error
     */
    selectAddField(fieldName: string | null, tableName: string | null, alias: string | null): SqlBuilderId
    /**
     * Adds a new target to a SELECT statement
     * @param tableName the name of the target table
     * @param alias the alias to give to the target, or %NULL
     * @returns the ID of the new target, or %0 if there was an error
     */
    selectAddTarget(tableName: string | null, alias: string | null): SqlBuilderId
    /**
     * Adds a new target to a SELECT statement. If there already exists a target representing
     * the same table and the same alias (or with the same absence of alias) then the same target
     * ID is returned instead of the ID of a new target.
     * @param tableId the ID of the expression holding a table reference (not %0)
     * @param alias the alias to give to the target, or %NULL
     * @returns the ID of the new (or existing) target, or %0 if there was an error
     */
    selectAddTargetId(tableId: SqlBuilderId, alias: string | null): SqlBuilderId
    /**
     * Valid only for: SELECT statements
     * 
     * Adds the `expr_id` expression to the GROUP BY clause's expressions list
     * @param exprId the ID of the expression to set use in the GROUP BY clause, or 0 to unset any previous GROUP BY clause
     */
    selectGroupBy(exprId: SqlBuilderId): void
    /**
     * Joins two targets in a SELECT statement, using the `join_type` type of join.
     * 
     * Note: if the target represented by `left_target_id` is actually situated after (on the right) of
     * the target represented by `right_target_id,` then the actual type of join may be switched from
     * %GDA_SQL_SELECT_JOIN_LEFT to %GDA_SQL_SELECT_JOIN_RIGHT or from %GDA_SQL_SELECT_JOIN_RIGHT to
     * %GDA_SQL_SELECT_JOIN_LEFT.
     * @param leftTargetId the ID of the left target to use (not %0)
     * @param rightTargetId the ID of the right target to use (not %0)
     * @param joinType the type of join
     * @param joinExpr joining expression's ID, or %0
     * @returns the ID of the new join, or %0 if there was an error
     */
    selectJoinTargets(leftTargetId: SqlBuilderId, rightTargetId: SqlBuilderId, joinType: SqlSelectJoinType, joinExpr: SqlBuilderId): SqlBuilderId
    /**
     * Adds a new ORDER BY expression to a SELECT statement.
     * @param exprId the ID of the expression to use during sorting (not %0)
     * @param asc %TRUE for an ascending sorting
     * @param collationName name of the collation to use when sorting, or %NULL
     */
    selectOrderBy(exprId: SqlBuilderId, asc: boolean, collationName: string | null): void
    /**
     * Defines (if `distinct` is %TRUE) or removes (if `distinct` is %FALSE) a DISTINCT clause
     * for a SELECT statement.
     * 
     * If `distinct` is %TRUE, then the ID of an expression can be specified as the `expr_id` argument:
     * if not %0, this is the expression used to apply the DISTINCT clause on (the resuting SQL
     * will then usually be "... DISTINCT ON &lt;expression&gt;...").
     * @param distinct set to %TRUE to have the DISTINCT requirement
     * @param exprId the ID of the DISTINCT ON expression, or %0 if no expression is to be used. It is ignored           if `distinct` is %FALSE.
     */
    selectSetDistinct(distinct: boolean, exprId: SqlBuilderId): void
    /**
     * Valid only for: SELECT statements
     * 
     * Sets the HAVING condition of the statement
     * @param condId the ID of the expression to set as HAVING condition, or 0 to unset any previous HAVING condition
     */
    selectSetHaving(condId: SqlBuilderId): void
    /**
     * If `limit_count_expr_id` is not %0, defines the maximum number of rows in the #GdaDataModel
     * resulting from the execution of the built statement. In this case, the offset from which the
     * rows must be collected can be defined by the `limit_offset_expr_id` expression if not %0 (note that
     * this feature may not be supported by all the database providers).
     * 
     * If `limit_count_expr_id` is %0, then removes any LIMIT which may have been imposed by a previous
     * call to this method.
     * @param limitCountExprId the ID of the LIMIT expression, or %0
     * @param limitOffsetExprId the ID of the OFFSET expression, or %0
     */
    selectSetLimit(limitCountExprId: SqlBuilderId, limitOffsetExprId: SqlBuilderId): void
    /**
     * Valid only for: INSERT, UPDATE, DELETE statements
     * 
     * Sets the name of the table on which the built statement operates.
     * @param tableName a table name
     */
    setTable(tableName: string | null): void
    /**
     * Valid only for: UPDATE, DELETE, SELECT statements
     * 
     * Sets the WHERE condition of the statement
     * @param condId the ID of the expression to set as WHERE condition, or 0 to unset any previous WHERE condition
     */
    setWhere(condId: SqlBuilderId): void

    // Class property signals of Gda-6.0.Gda.SqlBuilder

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

class SqlBuilder extends GObject.Object {

    // Own properties of Gda-6.0.Gda.SqlBuilder

    static name: string

    // Constructors of Gda-6.0.Gda.SqlBuilder

    constructor(config?: SqlBuilder.ConstructorProperties) 
    /**
     * Create a new #GdaSqlBuilder object to build #GdaStatement or #GdaSqlStatement
     * objects of type `stmt_type`
     * @constructor 
     * @param stmtType the type of statement to build
     * @returns the newly created object, or %NULL if an error occurred (such as unsupported statement type)
     */
    constructor(stmtType: SqlStatementType) 
    /**
     * Create a new #GdaSqlBuilder object to build #GdaStatement or #GdaSqlStatement
     * objects of type `stmt_type`
     * @constructor 
     * @param stmtType the type of statement to build
     * @returns the newly created object, or %NULL if an error occurred (such as unsupported statement type)
     */
    static new(stmtType: SqlStatementType): SqlBuilder
    _init(config?: SqlBuilder.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module SqlParser {

    // Constructor properties interface

    interface ConstructorProperties extends Lockable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.SqlParser

        debug?: boolean | null
        mode?: number | null
        tokenizerFlavour?: number | null
    }

}

interface SqlParser extends Lockable {

    // Own properties of Gda-6.0.Gda.SqlParser

    readonly columnError: number
    debug: boolean
    readonly lineError: number
    mode: number
    tokenizerFlavour: number
    __gtype__: number

    // Own fields of Gda-6.0.Gda.SqlParser

    parentInstance: GObject.Object

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
    parseFileAsBatch(filename: string | null): Batch | null
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
    parseString(sql: string | null): [ /* returnType */ Statement | null, /* remain */ string | null ]
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
    parseStringAsBatch(sql: string | null): [ /* returnType */ Batch | null, /* remain */ string | null ]
    setOverflowError(): void
    setSyntaxError(): void

    // Class property signals of Gda-6.0.Gda.SqlParser

    connect(sigName: "notify::column-error", callback: (...args: any[]) => void): number
    on(sigName: "notify::column-error", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::column-error", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::column-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::column-error", ...args: any[]): void
    connect(sigName: "notify::debug", callback: (...args: any[]) => void): number
    on(sigName: "notify::debug", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::debug", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::debug", ...args: any[]): void
    connect(sigName: "notify::line-error", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-error", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-error", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-error", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::tokenizer-flavour", callback: (...args: any[]) => void): number
    on(sigName: "notify::tokenizer-flavour", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tokenizer-flavour", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tokenizer-flavour", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tokenizer-flavour", ...args: any[]): void
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

class SqlParser extends GObject.Object {

    // Own properties of Gda-6.0.Gda.SqlParser

    static name: string

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
    static errorQuark(): GLib.Quark
}

module Statement {

    // Signal callback interfaces

    /**
     * Signal callback interface for `checked`
     */
    interface CheckedSignalCallback {
        (cnc: Connection, checked: boolean): void
    }

    /**
     * Signal callback interface for `reset`
     */
    interface ResetSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.Statement

        structure?: SqlStatement | null
    }

}

interface Statement {

    // Own properties of Gda-6.0.Gda.Statement

    structure: SqlStatement
    __gtype__: number

    // Own fields of Gda-6.0.Gda.Statement

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.Statement

    /**
     * Checks that `stmt'`s structure is correct.
     * @returns TRUE if @stmt's structure is correct
     */
    checkStructure(): boolean
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
    checkValidity(cnc: Connection | null): boolean
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
    getParameters(): [ /* returnType */ boolean, /* outParams */ Set | null ]
    /**
     * Get the type of statement held by `stmt`. It returns GDA_SQL_STATEMENT_NONE if
     * `stmt` does not hold any statement
     * @returns the statement type
     */
    getStatementType(): SqlStatementType
    /**
     * Tells if `stmt` is composed only of spaces (that is it has no real SQL code), and is completely
     * useless as such.
     * @returns TRUE if executing @stmt does nothing
     */
    isUseless(): boolean
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
    rewriteForDefaultValues(params: Set, remove: boolean): SqlStatement | null
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
    toSqlExtended(cnc: Connection | null, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string | null, /* paramsUsed */ Holder[] | null ]

    // Own virtual methods of Gda-6.0.Gda.Statement

    checked(cnc: Connection, checked: boolean): void
    reset(): void

    // Own signals of Gda-6.0.Gda.Statement

    connect(sigName: "checked", callback: Statement.CheckedSignalCallback): number
    on(sigName: "checked", callback: Statement.CheckedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "checked", callback: Statement.CheckedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "checked", callback: Statement.CheckedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "checked", checked: boolean, ...args: any[]): void
    connect(sigName: "reset", callback: Statement.ResetSignalCallback): number
    on(sigName: "reset", callback: Statement.ResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: Statement.ResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: Statement.ResetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reset", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Statement

    connect(sigName: "notify::structure", callback: (...args: any[]) => void): number
    on(sigName: "notify::structure", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::structure", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::structure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::structure", ...args: any[]): void
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

class Statement extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Statement

    static name: string

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
    static errorQuark(): GLib.Quark
}

module TransactionStatus {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface TransactionStatus {

    // Own properties of Gda-6.0.Gda.TransactionStatus

    __gtype__: number

    // Own fields of Gda-6.0.Gda.TransactionStatus

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.TransactionStatus

    addEventSql(sql: string | null, connEvent: ConnectionEvent): TransactionStatusEvent
    addEventSub(subTrans: TransactionStatus): TransactionStatusEvent
    addEventSvp(svpName: string | null): TransactionStatusEvent
    find(str: string | null, destev: TransactionStatusEvent): TransactionStatus | null
    /**
     * Find a pointer to the "current" _unnamed_ transaction, which is the last
     * transaction if there are several nested transactions
     * @param destev 
     * @param unnamedOnly 
     */
    findCurrent(destev: TransactionStatusEvent, unnamedOnly: boolean): TransactionStatus | null
    freeEvents(event: TransactionStatusEvent, freeAfter: boolean): void
    getIsolationLevel(): TransactionIsolation
    getState(): TransactionStatusState
    setIsolationLevel(il: TransactionIsolation): void
    setState(state: TransactionStatusState): void

    // Class property signals of Gda-6.0.Gda.TransactionStatus

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

class TransactionStatus extends GObject.Object {

    // Own properties of Gda-6.0.Gda.TransactionStatus

    static name: string

    // Constructors of Gda-6.0.Gda.TransactionStatus

    constructor(config?: TransactionStatus.ConstructorProperties) 
    /**
     * Creates a new #GdaTransactionStatus object, which allows a fine-tune and
     * full control of transactions to be used with providers.
     * @constructor 
     * @param name name for the transaction
     * @returns the newly created object.
     */
    constructor(name: string | null) 
    /**
     * Creates a new #GdaTransactionStatus object, which allows a fine-tune and
     * full control of transactions to be used with providers.
     * @constructor 
     * @param name name for the transaction
     * @returns the newly created object.
     */
    static new(name: string | null): TransactionStatus
    _init(config?: TransactionStatus.ConstructorProperties): void
}

module Tree {

    // Signal callback interfaces

    /**
     * Signal callback interface for `node-changed`
     */
    interface NodeChangedSignalCallback {
        (node: TreeNode): void
    }

    /**
     * Signal callback interface for `node-deleted`
     */
    interface NodeDeletedSignalCallback {
        (nodePath: string | null): void
    }

    /**
     * Signal callback interface for `node-has-child-toggled`
     */
    interface NodeHasChildToggledSignalCallback {
        (node: TreeNode): void
    }

    /**
     * Signal callback interface for `node-inserted`
     */
    interface NodeInsertedSignalCallback {
        (node: TreeNode): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Tree {

    // Own properties of Gda-6.0.Gda.Tree

    /**
     * Tells if the GdaTree is a list or a tree.
     */
    readonly isList: boolean
    __gtype__: number

    // Own fields of Gda-6.0.Gda.Tree

    parentInstance: GObject.Object

    // Owm methods of Gda-6.0.Gda.Tree

    /**
     * Sets `manager` as a top #GdaTreeManager object, which will be responsible for creating top level nodes in `tree`.
     * @param manager a #GdaTreeManager object
     */
    addManager(manager: TreeManager): void
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
     * @param treePath full path to the required nodes (if `use_names` is %TRUE, then it must start with '/')
     * @param useNames if %TRUE, then `tree_path` will be interpreted as a unix style path, and if %FALSE,             then `tree_path` will be interpreted similarly to the #GtkTreePath's string representation.
     * @returns the requested #GdaTreeNode pointer, or %NULL if not found
     */
    getNode(treePath: string | null, useNames: boolean): TreeNode | null
    /**
     * Get the #GdaTreeManager which created `node` in `tree`
     * @param node a #GdaTreeNode present in `tree`
     * @returns the #GdaTreeManager, or %NULL if @node is not present in @tree
     */
    getNodeManager(node: TreeNode): TreeManager
    /**
     * Get the path associated to `node` in `tree`.
     * @param node a #GdaTreeNode node in `tree`
     * @returns a new string, or %NULL if @node is not in @tree
     */
    getNodePath(node: TreeNode): string | null
    /**
     * The returned list is a list of all the #GdaTreeNode nodes <emphasis>below</emphasis> the node
     * at the specified path.
     * 
     * As a corner case if `tree_path` is %NULL, then the returned list contains all the top level nodes.
     * @param treePath full path to the required nodes (if `use_names` is %TRUE, then it must start with '/'), or %NULL
     * @param useNames if %TRUE, then `tree_path` will be interpreted as a unix style path, and if %FALSE,             then `tree_path` will be interpreted similarly to the #GtkTreePath's string representation.
     * @returns a new list of #GdaTreeNode pointers, free it with g_slist_free()
     */
    getNodesInPath(treePath: string | null, useNames: boolean): TreeNode[]
    /**
     * Sets an attribute to `tree,` which will be accessible to any node in it.
     * @param attribute attribute name
     * @param value a #GValue, or %NULL
     * @param destroy a function to be called when `attribute` is not needed anymore, or %NULL
     */
    setAttribute(attribute: string | null, value: any, destroy: GLib.DestroyNotify): void
    /**
     * Requests that `tree` be populated with nodes. If an error occurs, then `tree'`s contents is left
     * unchanged, and otherwise `tree'`s previous contents is completely replaced by the new one.
     * @returns TRUE if no error occurred.
     */
    updateAll(): boolean
    /**
     * Update the children of `node` in `tree` (not recursively, to update recursively, use
     * gda_tree_update_part()). If `node` is %NULL then the top level nodes are updated.
     * @param node a #GdaTreeNode node in `tree,` or %NULL
     * @returns TRUE if no error occurred.
     */
    updateChildren(node: TreeNode | null): boolean
    /**
     * Requests that `tree` be populated with nodes, starting from `node`
     * @param node a #GdaTreeNode node in `tree`
     * @returns TRUE if no error occurred.
     */
    updatePart(node: TreeNode): boolean

    // Own virtual methods of Gda-6.0.Gda.Tree

    nodeChanged(node: TreeNode): void
    nodeDeleted(nodePath: string | null): void
    nodeHasChildToggled(node: TreeNode): void
    nodeInserted(node: TreeNode): void

    // Own signals of Gda-6.0.Gda.Tree

    connect(sigName: "node-changed", callback: Tree.NodeChangedSignalCallback): number
    on(sigName: "node-changed", callback: Tree.NodeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-changed", callback: Tree.NodeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-changed", callback: Tree.NodeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "node-changed", ...args: any[]): void
    connect(sigName: "node-deleted", callback: Tree.NodeDeletedSignalCallback): number
    on(sigName: "node-deleted", callback: Tree.NodeDeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-deleted", callback: Tree.NodeDeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-deleted", callback: Tree.NodeDeletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "node-deleted", ...args: any[]): void
    connect(sigName: "node-has-child-toggled", callback: Tree.NodeHasChildToggledSignalCallback): number
    on(sigName: "node-has-child-toggled", callback: Tree.NodeHasChildToggledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-has-child-toggled", callback: Tree.NodeHasChildToggledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-has-child-toggled", callback: Tree.NodeHasChildToggledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "node-has-child-toggled", ...args: any[]): void
    connect(sigName: "node-inserted", callback: Tree.NodeInsertedSignalCallback): number
    on(sigName: "node-inserted", callback: Tree.NodeInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-inserted", callback: Tree.NodeInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-inserted", callback: Tree.NodeInsertedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "node-inserted", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.Tree

    connect(sigName: "notify::is-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-list", ...args: any[]): void
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

class Tree extends GObject.Object {

    // Own properties of Gda-6.0.Gda.Tree

    static name: string

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
    static errorQuark(): GLib.Quark
}

module TreeManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface TreeManager {

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
    __gtype__: number

    // Own fields of Gda-6.0.Gda.TreeManager

    parentInstance: GObject.Object

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
    addManager(sub: TreeManager): void
    /**
     * Requests that for any new node managed (eg. created) by `manager,` a new attribute will be set. This allows
     * one to customize the attributes of new nodes created by an existing #GdaTreeManager.
     * 
     * As a side effect, if `value` is %NULL, then the corresponding attribute, if it was set, is unset.
     * @param attribute an attribute name
     * @param value the attribute's value, or %NULL
     */
    addNewNodeAttribute(attribute: string | null, value: any | null): void
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
    createNode(parent: TreeNode | null, name: string | null): TreeNode
    /**
     * Get the list of sub managers which have already been added using gda_tree_manager_add_manager()
     * @returns a list of #GdaTreeMenager which should not be modified.
     */
    getManagers(): TreeManager[]
    /**
     * Sets the function to be called when a new node is being created by `manager`. If `func` is %NULL
     * then each created node will be a #GdaTreeNode object.
     * 
     * Specifying a custom #GdaTreeManagerNodeFunc function for example allows one to use
     * specialized sub-classed #GdaTreeNode objects.
     * @param func a #GdaTreeManagerNodeFunc function pointer, or %NULL
     */
    setNodeCreateFunc(func: TreeManagerNodeFunc | null): void

    // Class property signals of Gda-6.0.Gda.TreeManager

    connect(sigName: "notify::func", callback: (...args: any[]) => void): number
    on(sigName: "notify::func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (...args: any[]) => void): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::recursive", ...args: any[]): void
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

class TreeManager extends GObject.Object {

    // Own properties of Gda-6.0.Gda.TreeManager

    static name: string

    // Constructors of Gda-6.0.Gda.TreeManager

    constructor(config?: TreeManager.ConstructorProperties) 
    /**
     * Use this method to create a new #GdaTreeManager if it's more convenient than subclassing; all is needed
     * is the `update_func` function which is responsible for creating or updating the children nodes of a specified #GdaTreeNode.
     * @constructor 
     * @param updateFunc the function to call when the manager object is requested to create or update its list of #GdaTreeNode nodes
     * @returns a new #GdaTreeManager
     */
    static newWithFunc(updateFunc: TreeManagerNodesFunc): TreeManager
    _init(config?: TreeManager.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module TreeMgrColumns {

    // Constructor properties interface

    interface ConstructorProperties extends TreeManager.ConstructorProperties {

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

interface TreeMgrColumns {

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
    __gtype__: number

    // Own fields of Gda-6.0.Gda.TreeMgrColumns

    parentInstance: any

    // Class property signals of Gda-6.0.Gda.TreeMgrColumns

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::meta-store", callback: (...args: any[]) => void): number
    on(sigName: "notify::meta-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::meta-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::meta-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::meta-store", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::table-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::table-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::table-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::table-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::table-name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::func", callback: (...args: any[]) => void): number
    on(sigName: "notify::func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (...args: any[]) => void): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeMgrColumns extends TreeManager {

    // Own properties of Gda-6.0.Gda.TreeMgrColumns

    static name: string

    // Constructors of Gda-6.0.Gda.TreeMgrColumns

    constructor(config?: TreeMgrColumns.ConstructorProperties) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each
     * column in the table named `table_name` in the `schema` schema.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param schema a schema name
     * @param tableName the name of the table
     * @returns a new #GdaTreeManager object
     */
    constructor(cnc: Connection, schema: string | null, tableName: string | null) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node for each
     * column in the table named `table_name` in the `schema` schema.
     * @constructor 
     * @param cnc a #GdaConnection object
     * @param schema a schema name
     * @param tableName the name of the table
     * @returns a new #GdaTreeManager object
     */
    static new(cnc: Connection, schema: string | null, tableName: string | null): TreeMgrColumns
    _init(config?: TreeMgrColumns.ConstructorProperties): void
}

module TreeMgrLabel {

    // Constructor properties interface

    interface ConstructorProperties extends TreeManager.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.TreeMgrLabel

        label?: string | null
    }

}

interface TreeMgrLabel {

    // Own properties of Gda-6.0.Gda.TreeMgrLabel

    readonly label: string | null
    __gtype__: number

    // Own fields of Gda-6.0.Gda.TreeMgrLabel

    parentInstance: any

    // Class property signals of Gda-6.0.Gda.TreeMgrLabel

    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::func", callback: (...args: any[]) => void): number
    on(sigName: "notify::func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (...args: any[]) => void): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeMgrLabel extends TreeManager {

    // Own properties of Gda-6.0.Gda.TreeMgrLabel

    static name: string

    // Constructors of Gda-6.0.Gda.TreeMgrLabel

    constructor(config?: TreeMgrLabel.ConstructorProperties) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node labelled `label`
     * @constructor 
     * @param label a label string
     * @returns a new #GdaTreeManager object
     */
    constructor(label: string | null) 
    /**
     * Creates a new #GdaTreeManager object which will add one tree node labelled `label`
     * @constructor 
     * @param label a label string
     * @returns a new #GdaTreeManager object
     */
    static new(label: string | null): TreeMgrLabel
    _init(config?: TreeMgrLabel.ConstructorProperties): void
}

module TreeMgrSchemas {

    // Constructor properties interface

    interface ConstructorProperties extends TreeManager.ConstructorProperties {

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

interface TreeMgrSchemas {

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
    __gtype__: number

    // Own fields of Gda-6.0.Gda.TreeMgrSchemas

    parentInstance: any

    // Class property signals of Gda-6.0.Gda.TreeMgrSchemas

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::meta-store", callback: (...args: any[]) => void): number
    on(sigName: "notify::meta-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::meta-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::meta-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::meta-store", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::func", callback: (...args: any[]) => void): number
    on(sigName: "notify::func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (...args: any[]) => void): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeMgrSchemas extends TreeManager {

    // Own properties of Gda-6.0.Gda.TreeMgrSchemas

    static name: string

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

module TreeMgrSelect {

    // Constructor properties interface

    interface ConstructorProperties extends TreeManager.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.TreeMgrSelect

        connection?: Connection | null
        params?: Set | null
        statement?: Statement | null
    }

}

interface TreeMgrSelect {

    // Own properties of Gda-6.0.Gda.TreeMgrSelect

    readonly connection: Connection
    readonly params: Set
    readonly statement: Statement
    __gtype__: number

    // Own fields of Gda-6.0.Gda.TreeMgrSelect

    parentInstance: any

    // Class property signals of Gda-6.0.Gda.TreeMgrSelect

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::params", callback: (...args: any[]) => void): number
    on(sigName: "notify::params", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::params", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::params", ...args: any[]): void
    connect(sigName: "notify::statement", callback: (...args: any[]) => void): number
    on(sigName: "notify::statement", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::statement", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::statement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::statement", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::func", callback: (...args: any[]) => void): number
    on(sigName: "notify::func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (...args: any[]) => void): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeMgrSelect extends TreeManager {

    // Own properties of Gda-6.0.Gda.TreeMgrSelect

    static name: string

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

module TreeMgrTables {

    // Constructor properties interface

    interface ConstructorProperties extends TreeManager.ConstructorProperties {

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

interface TreeMgrTables {

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
    __gtype__: number

    // Own fields of Gda-6.0.Gda.TreeMgrTables

    parentInstance: any

    // Class property signals of Gda-6.0.Gda.TreeMgrTables

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::meta-store", callback: (...args: any[]) => void): number
    on(sigName: "notify::meta-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::meta-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::meta-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::meta-store", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::func", callback: (...args: any[]) => void): number
    on(sigName: "notify::func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::func", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (...args: any[]) => void): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeMgrTables extends TreeManager {

    // Own properties of Gda-6.0.Gda.TreeMgrTables

    static name: string

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

module TreeNode {

    // Signal callback interfaces

    /**
     * Signal callback interface for `node-changed`
     */
    interface NodeChangedSignalCallback {
        (node: TreeNode): void
    }

    /**
     * Signal callback interface for `node-deleted`
     */
    interface NodeDeletedSignalCallback {
        (relativePath: string | null): void
    }

    /**
     * Signal callback interface for `node-has-child-toggled`
     */
    interface NodeHasChildToggledSignalCallback {
        (node: TreeNode): void
    }

    /**
     * Signal callback interface for `node-inserted`
     */
    interface NodeInsertedSignalCallback {
        (node: TreeNode): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.TreeNode

        name?: string | null
    }

}

interface TreeNode {

    // Own properties of Gda-6.0.Gda.TreeNode

    name: string | null
    __gtype__: number

    // Own fields of Gda-6.0.Gda.TreeNode

    parentInstance: GObject.Object

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
    fetchAttribute(attribute: string | null): any
    /**
     * Get the #GdaTreeNode child of `node` at position `index` (starting at 0).
     * @param index a index
     * @returns the #GdaTreeNode, or %NULL if not found
     */
    getChildIndex(index: number): TreeNode
    /**
     * Get the #GdaTreeNode child of `node` which has the #GDA_ATTRIBUTE_NAME set to `name`
     * @param name requested node's name
     * @returns the #GdaTreeNode, or %NULL if not found
     */
    getChildName(name: string | null): TreeNode
    /**
     * Get a list of all `node'`s children, free it with g_slist_free() after usage
     * @returns a new #GSList of #GdaTreeNode objects, or %NULL if @node does not have any child
     */
    getChildren(): TreeNode[]
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
    getNodeAttribute(attribute: string | null): any
    /**
     * Get the #GdaTreeNode parent of `node` in the #GdaTree node belongs to. If `node` is at the top level,
     * then this method return %NULL.
     * @returns the parent #GdaTreeNode
     */
    getParent(): TreeNode
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
    setNodeAttribute(attribute: string | null, value: any | null, destroy: GLib.DestroyNotify): void

    // Own virtual methods of Gda-6.0.Gda.TreeNode

    dumpChildren(prefix: string | null, inString: GLib.String): void
    dumpHeader(): string | null
    nodeChanged(node: TreeNode): void
    nodeDeleted(relativePath: string | null): void
    nodeHasChildToggled(node: TreeNode): void
    nodeInserted(node: TreeNode): void

    // Own signals of Gda-6.0.Gda.TreeNode

    connect(sigName: "node-changed", callback: TreeNode.NodeChangedSignalCallback): number
    on(sigName: "node-changed", callback: TreeNode.NodeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-changed", callback: TreeNode.NodeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-changed", callback: TreeNode.NodeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "node-changed", ...args: any[]): void
    connect(sigName: "node-deleted", callback: TreeNode.NodeDeletedSignalCallback): number
    on(sigName: "node-deleted", callback: TreeNode.NodeDeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-deleted", callback: TreeNode.NodeDeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-deleted", callback: TreeNode.NodeDeletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "node-deleted", ...args: any[]): void
    connect(sigName: "node-has-child-toggled", callback: TreeNode.NodeHasChildToggledSignalCallback): number
    on(sigName: "node-has-child-toggled", callback: TreeNode.NodeHasChildToggledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-has-child-toggled", callback: TreeNode.NodeHasChildToggledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-has-child-toggled", callback: TreeNode.NodeHasChildToggledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "node-has-child-toggled", ...args: any[]): void
    connect(sigName: "node-inserted", callback: TreeNode.NodeInsertedSignalCallback): number
    on(sigName: "node-inserted", callback: TreeNode.NodeInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-inserted", callback: TreeNode.NodeInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-inserted", callback: TreeNode.NodeInsertedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "node-inserted", ...args: any[]): void

    // Class property signals of Gda-6.0.Gda.TreeNode

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
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

class TreeNode extends GObject.Object {

    // Own properties of Gda-6.0.Gda.TreeNode

    static name: string

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
    static errorQuark(): GLib.Quark
}

interface UShort {
}

class UShort {

    // Own properties of Gda-6.0.Gda.UShort

    static name: string
}

module XaTransaction {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gda-6.0.Gda.XaTransaction

        formatId?: number | null
        transactionId?: string | null
    }

}

interface XaTransaction {

    // Own properties of Gda-6.0.Gda.XaTransaction

    readonly formatId: number
    readonly transactionId: string | null
    __gtype__: number

    // Own fields of Gda-6.0.Gda.XaTransaction

    parentInstance: GObject.Object

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
    commit(): [ /* returnType */ boolean, /* cncToRecover */ Connection[] | null ]
    /**
     * Tries to commit the data prepared but which failed to commit (see gda_xa_transaction_commit()). This
     * method allows one to terminate a distributed transaction which succeeded but for which some
     * connections needed to be recovered.
     * @returns %TRUE if all the data which was still uncommitted has been committed
     */
    commitRecovered(): [ /* returnType */ boolean, /* cncToRecover */ Connection[] | null ]
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
    registerConnection(cnc: Connection, branch: string | null): boolean
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
    unregisterConnection(cnc: Connection): void

    // Class property signals of Gda-6.0.Gda.XaTransaction

    connect(sigName: "notify::format-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::format-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::format-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::format-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::format-id", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transaction-id", ...args: any[]): void
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

class XaTransaction extends GObject.Object {

    // Own properties of Gda-6.0.Gda.XaTransaction

    static name: string

    // Constructors of Gda-6.0.Gda.XaTransaction

    constructor(config?: XaTransaction.ConstructorProperties) 
    /**
     * Creates a new #GdaXaTransaction object, which will control the process of
     * performing a distributed transaction across several connections.
     * @constructor 
     * @param format a format ID
     * @param globalTransactionId the global transaction ID
     * @returns the newly created object.
     */
    constructor(format: number, globalTransactionId: string | null) 
    /**
     * Creates a new #GdaXaTransaction object, which will control the process of
     * performing a distributed transaction across several connections.
     * @constructor 
     * @param format a format ID
     * @param globalTransactionId the global transaction ID
     * @returns the newly created object.
     */
    static new(format: number, globalTransactionId: string | null): XaTransaction
    _init(config?: XaTransaction.ConstructorProperties): void
    static errorQuark(): GLib.Quark
    /**
     * Creates a new #GdaXaTransactionId structure from its string representation, it's the opposite
     * of gda_xa_transaction_id_to_string().
     * @param str a string representation of a #GdaXaTransactionId, in the "gtrid,bqual,formatID" format
     * @returns a new #GdaXaTransactionId structure, or %NULL in @str has a wrong format Free-function: g_free
     */
    static stringToId(str: string | null): XaTransactionId
}

interface BatchClass {

    // Own fields of Gda-6.0.Gda.BatchClass

    parentClass: GObject.ObjectClass
    changed: (batch: Batch, changedStmt: Statement) => void
}

abstract class BatchClass {

    // Own properties of Gda-6.0.Gda.BatchClass

    static name: string
}

interface Binary {

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
    getData(): any | null
    getSize(): number
    /**
     * Frees data referenced by #GdaBinary
     */
    resetData(): void
    /**
     * Set binary data to a #GdaBinary, holding a copy of the data.
     * @param val value to be copied by #GdaBinary.
     */
    setData(val: Uint8Array): void
    /**
     * Set binary data to a #GdaBinary, directly holding `val` (no copy made).
     * @param val value to be taken by #GdaBinary.
     */
    takeData(val: Uint8Array): void
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
    toString(maxlen: number): string | null
}

class Binary {

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

interface Blob {

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
    getBinary(): Binary
    getOp(): BlobOp
    /**
     * Correctly assigns `op` to `blob` (increases `op'`s reference count)
     * @param op a #GdaBlobOp object, or %NULL
     */
    setOp(op: BlobOp | null): void
    /**
     * Converts all the non printable characters of blob->data into the \xxx representation
     * where xxx is the octal representation of the byte, and the '\' (backslash) character
     * is converted to "\\".
     * @param maxlen a maximum len used to truncate, or 0 for no maximum length
     * @returns a new string from @blob
     */
    toString(maxlen: number): string | null
}

/**
 * Represents some binary data, accessed through a #GdaBlobOp object.
 * `op` is generally set up by database providers when giving access to an existing BLOB in
 * a database, but can be modified if needed using gda_blob_set_op().
 * @record 
 */
class Blob {

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

interface BlobOpClass {

    // Own fields of Gda-6.0.Gda.BlobOpClass

    parentClass: GObject.ObjectClass
    functions: any
    padding: any[]
}

abstract class BlobOpClass {

    // Own properties of Gda-6.0.Gda.BlobOpClass

    static name: string
}

interface BlobOpFunctions {

    // Own fields of Gda-6.0.Gda.BlobOpFunctions

    getLength: (op: BlobOp) => number
    read: (op: BlobOp, blob: Blob, offset: number, size: number) => number
    write: (op: BlobOp, blob: Blob, offset: number) => number
    writeAll: (op: BlobOp, blob: Blob) => boolean
}

class BlobOpFunctions {

    // Own properties of Gda-6.0.Gda.BlobOpFunctions

    static name: string
}

interface ColumnClass {

    // Own fields of Gda-6.0.Gda.ColumnClass

    parentClass: GObject.ObjectClass
    nameChanged: (column: Column, oldName: string | null) => void
    gTypeChanged: (column: Column, oldType: GObject.GType, newType: GObject.GType) => void
}

abstract class ColumnClass {

    // Own properties of Gda-6.0.Gda.ColumnClass

    static name: string
}

interface ConfigClass {

    // Own fields of Gda-6.0.Gda.ConfigClass

    parentClass: GObject.ObjectClass
    dsnAdded: (conf: Config, newDsn: DsnInfo) => void
    dsnToBeRemoved: (conf: Config, oldDsn: DsnInfo) => void
    dsnRemoved: (conf: Config, oldDsn: DsnInfo) => void
    dsnChanged: (conf: Config, dsn: DsnInfo) => void
}

abstract class ConfigClass {

    // Own properties of Gda-6.0.Gda.ConfigClass

    static name: string
}

interface ConnectionClass {

    // Own fields of Gda-6.0.Gda.ConnectionClass

    objectClass: GObject.ObjectClass
    statusChanged: (obj: Connection, status: ConnectionStatus) => void
    error: (cnc: Connection, error: ConnectionEvent) => void
    opened: (obj: Connection) => void
    closed: (obj: Connection) => void
    dsnChanged: (obj: Connection) => void
    transactionStatusChanged: (obj: Connection) => void
}

abstract class ConnectionClass {

    // Own properties of Gda-6.0.Gda.ConnectionClass

    static name: string
}

interface ConnectionEventClass {

    // Own fields of Gda-6.0.Gda.ConnectionEventClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

abstract class ConnectionEventClass {

    // Own properties of Gda-6.0.Gda.ConnectionEventClass

    static name: string
}

interface DataAccessWrapperClass {

    // Own fields of Gda-6.0.Gda.DataAccessWrapperClass

    parentClass: GObject.ObjectClass
}

abstract class DataAccessWrapperClass {

    // Own properties of Gda-6.0.Gda.DataAccessWrapperClass

    static name: string
}

interface DataComparatorClass {

    // Own fields of Gda-6.0.Gda.DataComparatorClass

    parentClass: GObject.ObjectClass
    diffComputed: (comp: DataComparator, diff: Diff) => boolean
}

abstract class DataComparatorClass {

    // Own properties of Gda-6.0.Gda.DataComparatorClass

    static name: string
}

interface DataHandlerInterface {

    // Own fields of Gda-6.0.Gda.DataHandlerInterface

    gIface: GObject.TypeInterface
    getSqlFromValue: (dh: DataHandler, value: any | null) => string | null
    getStrFromValue: (dh: DataHandler, value: any | null) => string | null
    getValueFromSql: (dh: DataHandler, sql: string | null, type: GObject.GType) => any
    getValueFromStr: (dh: DataHandler, str: string | null, type: GObject.GType) => any
    getSaneInitValue: (dh: DataHandler, type: GObject.GType) => any | null
    acceptsGType: (dh: DataHandler, type: GObject.GType) => boolean
    getDescr: (dh: DataHandler) => string | null
}

abstract class DataHandlerInterface {

    // Own properties of Gda-6.0.Gda.DataHandlerInterface

    static name: string
}

interface DataModelArrayClass {

    // Own fields of Gda-6.0.Gda.DataModelArrayClass

    parentClass: GObject.ObjectClass
}

abstract class DataModelArrayClass {

    // Own properties of Gda-6.0.Gda.DataModelArrayClass

    static name: string
}

interface DataModelDirClass {

    // Own fields of Gda-6.0.Gda.DataModelDirClass

    parentClass: GObject.ObjectClass
}

abstract class DataModelDirClass {

    // Own properties of Gda-6.0.Gda.DataModelDirClass

    static name: string
}

interface DataModelIface {
}

abstract class DataModelIface {

    // Own properties of Gda-6.0.Gda.DataModelIface

    static name: string
}

interface DataModelImportClass {

    // Own fields of Gda-6.0.Gda.DataModelImportClass

    parentClass: GObject.ObjectClass
}

abstract class DataModelImportClass {

    // Own properties of Gda-6.0.Gda.DataModelImportClass

    static name: string
}

interface DataModelImportIterClass {

    // Own fields of Gda-6.0.Gda.DataModelImportIterClass

    parentClass: DataModelIterClass
}

abstract class DataModelImportIterClass {

    // Own properties of Gda-6.0.Gda.DataModelImportIterClass

    static name: string
}

interface DataModelInterface {

    // Own fields of Gda-6.0.Gda.DataModelInterface

    gIface: GObject.TypeInterface
    getNRows: (model: DataModel) => number
    getNColumns: (model: DataModel) => number
    getAccessFlags: (model: DataModel) => DataModelAccessFlags
    getValueAt: (model: DataModel, col: number, row: number) => any
    getAttributesAt: (model: DataModel, col: number, row: number) => ValueAttribute
    setValueAt: (model: DataModel, col: number, row: number, value: any) => boolean
    appendRow: (model: DataModel) => number
    removeRow: (model: DataModel, row: number) => boolean
    freeze: (model: DataModel) => void
    thaw: (model: DataModel) => void
    getNotify: (model: DataModel) => boolean
    sendHint: (model: DataModel, hint: DataModelHint, hintValue: any) => void
    getExceptions: (model: DataModel) => GLib.Error
    rowInserted: (model: DataModel, row: number) => void
    rowUpdated: (model: DataModel, row: number) => void
    rowRemoved: (model: DataModel, row: number) => void
    changed: (model: DataModel) => void
    reset: (model: DataModel) => void
    accessChanged: (model: DataModel) => void
}

class DataModelInterface {

    // Own properties of Gda-6.0.Gda.DataModelInterface

    static name: string
}

interface DataModelIterClass {

    // Own fields of Gda-6.0.Gda.DataModelIterClass

    parentClass: SetClass
    moveToRow: (iter: DataModelIter, row: number) => boolean
    moveNext: (iter: DataModelIter) => boolean
    movePrev: (iter: DataModelIter) => boolean
    setValueAt: (iter: DataModelIter, col: number, value: any) => boolean
    rowChanged: (iter: DataModelIter, row: number) => void
    endOfData: (iter: DataModelIter) => void
}

abstract class DataModelIterClass {

    // Own properties of Gda-6.0.Gda.DataModelIterClass

    static name: string
}

interface DataModelSelectClass {

    // Own fields of Gda-6.0.Gda.DataModelSelectClass

    parentClass: GObject.ObjectClass
    updated: (model: DataModelSelect) => void
}

abstract class DataModelSelectClass {

    // Own properties of Gda-6.0.Gda.DataModelSelectClass

    static name: string
}

interface DataPivotClass {

    // Own fields of Gda-6.0.Gda.DataPivotClass

    parentClass: GObject.ObjectClass
}

abstract class DataPivotClass {

    // Own properties of Gda-6.0.Gda.DataPivotClass

    static name: string
}

interface DataProxyClass {

    // Own fields of Gda-6.0.Gda.DataProxyClass

    parentClass: GObject.ObjectClass
    rowDeleteChanged: (proxy: DataProxy, row: number, toBeDeleted: boolean) => void
    sampleSizeChanged: (proxy: DataProxy, sampleSize: number) => void
    sampleChanged: (proxy: DataProxy, sampleStart: number, sampleEnd: number) => void
    validateRowChanges: (proxy: DataProxy, row: number, proxiedRow: number) => GLib.Error
    rowChangesApplied: (proxy: DataProxy, row: number, proxiedRow: number) => void
    filterChanged: (proxy: DataProxy) => void
}

abstract class DataProxyClass {

    // Own properties of Gda-6.0.Gda.DataProxyClass

    static name: string
}

interface DataSelectClass {

    // Own fields of Gda-6.0.Gda.DataSelectClass

    parentClass: GObject.ObjectClass
    fetchNbRows: (model: DataSelect) => number
    fetchRandom: (model: DataSelect, prow: Row, rownum: number) => boolean
    storeAll: (model: DataSelect) => boolean
    fetchNext: (model: DataSelect, prow: Row, rownum: number) => boolean
    fetchPrev: (model: DataSelect, prow: Row, rownum: number) => boolean
    fetchAt: (model: DataSelect, prow: Row, rownum: number) => boolean
}

abstract class DataSelectClass {

    // Own properties of Gda-6.0.Gda.DataSelectClass

    static name: string
}

interface DataSelectIterClass {

    // Own fields of Gda-6.0.Gda.DataSelectIterClass

    parentClass: DataModelIterClass
}

abstract class DataSelectIterClass {

    // Own properties of Gda-6.0.Gda.DataSelectIterClass

    static name: string
}

interface DbBaseClass {

    // Own fields of Gda-6.0.Gda.DbBaseClass

    parent: GObject.ObjectClass
}

abstract class DbBaseClass {

    // Own properties of Gda-6.0.Gda.DbBaseClass

    static name: string
}

interface DbBuildableInterface {

    // Own fields of Gda-6.0.Gda.DbBuildableInterface

    parentIface: GObject.TypeInterface
    parseNode: (self: DbBuildable, node: libxml2.NodePtr) => boolean
    writeNode: (self: DbBuildable, node: libxml2.NodePtr) => boolean
}

abstract class DbBuildableInterface {

    // Own properties of Gda-6.0.Gda.DbBuildableInterface

    static name: string
}

interface DbCatalogClass {

    // Own fields of Gda-6.0.Gda.DbCatalogClass

    parent: GObject.ObjectClass
}

abstract class DbCatalogClass {

    // Own properties of Gda-6.0.Gda.DbCatalogClass

    static name: string
}

interface DbColumnClass {

    // Own fields of Gda-6.0.Gda.DbColumnClass

    parent: GObject.ObjectClass
}

abstract class DbColumnClass {

    // Own properties of Gda-6.0.Gda.DbColumnClass

    static name: string
}

interface DbFkeyClass {

    // Own fields of Gda-6.0.Gda.DbFkeyClass

    parentClass: GObject.ObjectClass
}

abstract class DbFkeyClass {

    // Own properties of Gda-6.0.Gda.DbFkeyClass

    static name: string
}

interface DbIndexClass {

    // Own fields of Gda-6.0.Gda.DbIndexClass

    parentClass: DbBaseClass
}

abstract class DbIndexClass {

    // Own properties of Gda-6.0.Gda.DbIndexClass

    static name: string
}

interface DbIndexFieldClass {

    // Own fields of Gda-6.0.Gda.DbIndexFieldClass

    parentClass: GObject.ObjectClass
}

abstract class DbIndexFieldClass {

    // Own properties of Gda-6.0.Gda.DbIndexFieldClass

    static name: string
}

interface DbTableClass {

    // Own fields of Gda-6.0.Gda.DbTableClass

    parentClass: DbBaseClass
}

abstract class DbTableClass {

    // Own properties of Gda-6.0.Gda.DbTableClass

    static name: string
}

interface DbViewClass {

    // Own fields of Gda-6.0.Gda.DbViewClass

    parentClass: DbBaseClass
}

abstract class DbViewClass {

    // Own properties of Gda-6.0.Gda.DbViewClass

    static name: string
}

interface DdlModifiableInterface {

    // Own fields of Gda-6.0.Gda.DdlModifiableInterface

    parentIface: GObject.TypeInterface
    create: (self: DdlModifiable, cnc: Connection) => boolean
    drop: (self: DdlModifiable, cnc: Connection) => boolean
    rename: (self: DdlModifiable, cnc: Connection) => boolean
}

abstract class DdlModifiableInterface {

    // Own properties of Gda-6.0.Gda.DdlModifiableInterface

    static name: string
}

interface Diff {

    // Own fields of Gda-6.0.Gda.Diff

    type: DiffType
    oldRow: number
    newRow: number
    values: GLib.HashTable
}

class Diff {

    // Own properties of Gda-6.0.Gda.Diff

    static name: string
}

interface DsnInfo {

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
    cncString: string | null
    /**
     * the authentication string, a semi-colon separated &lt;key>=&lt;value&gt; list where &lt;key&gt; and &lt;value&gt; are RFC 1738 encoded. Can be %NULL.
     * @field 
     */
    authString: string | null
    /**
     * %TRUE if the DSN is a system wide defined data source
     * @field 
     */
    isSystem: boolean

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
class DsnInfo {

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

interface GeometricPoint {

    // Owm methods of Gda-6.0.Gda.GeometricPoint

    copy(): GeometricPoint
    free(): void
    getX(): number
    getY(): number
    setX(x: number): void
    setY(y: number): void
}

class GeometricPoint {

    // Own properties of Gda-6.0.Gda.GeometricPoint

    static name: string

    // Constructors of Gda-6.0.Gda.GeometricPoint

    constructor() 
    static new(): GeometricPoint
}

interface HandlerBinClass {

    // Own fields of Gda-6.0.Gda.HandlerBinClass

    parentClass: GObject.ObjectClass
}

abstract class HandlerBinClass {

    // Own properties of Gda-6.0.Gda.HandlerBinClass

    static name: string
}

interface HandlerBooleanClass {

    // Own fields of Gda-6.0.Gda.HandlerBooleanClass

    parentClass: GObject.ObjectClass
}

abstract class HandlerBooleanClass {

    // Own properties of Gda-6.0.Gda.HandlerBooleanClass

    static name: string
}

interface HandlerNumericalClass {

    // Own fields of Gda-6.0.Gda.HandlerNumericalClass

    parentClass: GObject.ObjectClass
}

abstract class HandlerNumericalClass {

    // Own properties of Gda-6.0.Gda.HandlerNumericalClass

    static name: string
}

interface HandlerStringClass {

    // Own fields of Gda-6.0.Gda.HandlerStringClass

    parentClass: GObject.ObjectClass
}

abstract class HandlerStringClass {

    // Own properties of Gda-6.0.Gda.HandlerStringClass

    static name: string
}

interface HandlerTextClass {

    // Own fields of Gda-6.0.Gda.HandlerTextClass

    parentClass: GObject.ObjectClass
}

abstract class HandlerTextClass {

    // Own properties of Gda-6.0.Gda.HandlerTextClass

    static name: string
}

interface HandlerTimeClass {

    // Own fields of Gda-6.0.Gda.HandlerTimeClass

    parentClass: GObject.ObjectClass
}

abstract class HandlerTimeClass {

    // Own properties of Gda-6.0.Gda.HandlerTimeClass

    static name: string
}

interface HandlerTypeClass {

    // Own fields of Gda-6.0.Gda.HandlerTypeClass

    parentClass: GObject.ObjectClass
}

abstract class HandlerTypeClass {

    // Own properties of Gda-6.0.Gda.HandlerTypeClass

    static name: string
}

interface HolderClass {

    // Own fields of Gda-6.0.Gda.HolderClass

    parentClass: GObject.ObjectClass
    changed: (holder: Holder) => void
    sourceChanged: (holder: Holder) => void
    validateChange: (holder: Holder, newValue: any) => GLib.Error
    toDefault: (holder: Holder) => void
}

abstract class HolderClass {

    // Own properties of Gda-6.0.Gda.HolderClass

    static name: string
}

interface LockableInterface {

    // Own fields of Gda-6.0.Gda.LockableInterface

    gIface: GObject.TypeInterface
    lock: (lockable: Lockable) => void
    trylock: (lockable: Lockable) => boolean
    unlock: (lockable: Lockable) => void
}

abstract class LockableInterface {

    // Own properties of Gda-6.0.Gda.LockableInterface

    static name: string
}

interface MetaContext {

    // Own fields of Gda-6.0.Gda.MetaContext

    /**
     * the name of the table <emphasis>in the GdaMetaStore's internal database</emphasis>
     * @field 
     */
    tableName: string | null
    /**
     * the size of the `column_names` and `column_values` arrays
     * @field 
     */
    size: number
    /**
     * an array of column names (columns of the `table_name` table)
     * @field 
     */
    columnNames: string[]
    /**
     * an array of values, one for each column named in `column_names`
     * @field 
     */
    columnValues: any[]
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
    getNColumns(): number
    /**
     * Get table's name to used in the context.
     * @returns A string with the table's name used in the context.
     */
    getTable(): string | null
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
    setColumn(column: string | null, value: any, cnc: Connection | null): void
    /**
     * Set columns to use in the context. The #GHashTable use column's name as key and a #GValue as value,
     * to represent its value.
     * 
     * `columns` incements its reference counting. Is recommended to use #gda_meta_context_free in order to free them.
     * @param columns a #GHashTable with the table's columns' name and their values to use in context.
     * @param cnc a #GdaConnection to used to normalize identifiers quoting, or NULL
     */
    setColumns(columns: GLib.HashTable, cnc: Connection | null): void
    /**
     * Set table's name to use in the context. The table is one of <link linkend="information_schema">database
     * schema</link> used to store meta information about the database. Use "_tables" to update meta information
     * about database's tables.
     * @param table a string with the table's name to use in context
     */
    setTable(table: string | null): void
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
class MetaContext {

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

interface MetaDbObject {

    // Own fields of Gda-6.0.Gda.MetaDbObject

    /**
     * the type of object (table, view)
     * @field 
     */
    objType: MetaDbObjectType
    /**
     * set to %TRUE if the information in this #GdaMetaDbObject may be outdated because the #GdaMetaStore has been updated
     * @field 
     */
    outdated: boolean
    /**
     * the catalog the object is in
     * @field 
     */
    objCatalog: string | null
    /**
     * the schema the object is in
     * @field 
     */
    objSchema: string | null
    /**
     * the object's name
     * @field 
     */
    objName: string | null
    /**
     * the shortest way to name the object
     * @field 
     */
    objShortName: string | null
    /**
     * the full name of the object (in the &lt;schema&gt;.&lt;nameagt; notation
     * @field 
     */
    objFullName: string | null
    /**
     * object's owner
     * @field 
     */
    objOwner: string | null
    /**
     * list of #GdaMetaDbObject pointers on which this object depends (through foreign keys
     *               or tables used for views)
     * @field 
     */
    dependList: MetaDbObject[]
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

    // Own properties of Gda-6.0.Gda.MetaDbObject

    static name: string
}

interface MetaStoreChange {

    // Owm methods of Gda-6.0.Gda.MetaStoreChange

    copy(): MetaStoreChange
    free(): void
    getChangeType(): MetaStoreChangeType
    getKeys(): GLib.HashTable
    getTableName(): string | null
    setChangeType(ctype: MetaStoreChangeType): void
    setTableName(tableName: string | null): void
}

class MetaStoreChange {

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

interface MetaStoreClass {

    // Own fields of Gda-6.0.Gda.MetaStoreClass

    parentClass: GObject.ObjectClass
    metaReset: (store: MetaStore) => void
    suggestUpdate: (store: MetaStore, suggest: MetaContext) => GLib.Error
}

abstract class MetaStoreClass {

    // Own properties of Gda-6.0.Gda.MetaStoreClass

    static name: string
}

interface MetaStructClass {

    // Own fields of Gda-6.0.Gda.MetaStructClass

    parentClass: GObject.ObjectClass
}

abstract class MetaStructClass {

    // Own properties of Gda-6.0.Gda.MetaStructClass

    static name: string
}

interface MetaTable {

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
    pkColsArray: number
    /**
     * size of the `pk_cols_array` array
     * @field 
     */
    pkColsNb: number
    /**
     * list of #GdaMetaTableForeignKey where the referenced table is this table
     * @field 
     */
    reverseFkList: MetaTableForeignKey[]
    /**
     * list of #GdaMetaTableForeignKey for this table
     * @field 
     */
    fkList: MetaTableForeignKey[]
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

    // Own properties of Gda-6.0.Gda.MetaTable

    static name: string
}

interface MetaTableColumn {

    // Own fields of Gda-6.0.Gda.MetaTableColumn

    /**
     * the column's name
     * @field 
     */
    columnName: string | null
    /**
     * the column's DBMS's type
     * @field 
     */
    columnType: string | null
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
    defaultValue: string | null
    autoIncement: boolean
    desc: string | null
}

/**
 * This structure represents a table of view's column, its contents must not be modified.
 * @record 
 */
class MetaTableColumn {

    // Own properties of Gda-6.0.Gda.MetaTableColumn

    static name: string
}

interface MetaTableForeignKey {

    // Own fields of Gda-6.0.Gda.MetaTableForeignKey

    /**
     * the #GdaMetaDbObject for which this structure represents a foreign key
     * @field 
     */
    metaTable: MetaDbObject
    /**
     * the #GdaMetaDbObject which is referenced by the foreign key
     * @field 
     */
    dependOn: MetaDbObject
    /**
     * the size of the `fk_cols_array,` `fk_names_array,` `ref_pk_cols_array` and `ref_pk_names_array` arrays
     * @field 
     */
    colsNb: number
    /**
     * the columns' indexes in `meta_table` which participate in the constraint (WARNING: columns numbering
     *                 here start at 1)
     * @field 
     */
    fkColsArray: number
    /**
     * the columns' names in `meta_table` which participate in the constraint
     * @field 
     */
    fkNamesArray: string | null
    /**
     * the columns' indexes in `depend_on` which participate in the constraint (WARNING: columns numbering
     *                 here start at 1)
     * @field 
     */
    refPkColsArray: number
    /**
     * the columns' names in `depend_on` which participate in the constraint
     * @field 
     */
    refPkNamesArray: string | null
    fkName: string | null
}

/**
 * This structure represents a foreign key constraint, its contents must not be modified.
 * @record 
 */
class MetaTableForeignKey {

    // Own properties of Gda-6.0.Gda.MetaTableForeignKey

    static name: string
}

interface MetaView {

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
    viewDef: string | null
    /**
     * tells if the view's contents can be updated
     * @field 
     */
    isUpdatable: boolean
}

/**
 * This structure specifies a #GdaMetaDbObject to represent a view's specific attributes,
 * its contents must not be modified.
 * @record 
 */
class MetaView {

    // Own properties of Gda-6.0.Gda.MetaView

    static name: string
}

interface Numeric {

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
    getDouble(): number
    /**
     * Gets the precision of a #GdaNumeric.
     * @returns an integer with the precision of a #GdaNumeric.
     */
    getPrecision(): number
    /**
     * Get the string representation of `numeric,` in the C locale format (dot as a fraction separator).
     * @returns a new string representing the stored valued in @numeric
     */
    getString(): string | null
    /**
     * Gets the width of a #GdaNumeric. (Not yet implemented).
     * @returns an integer with the width of a #GdaNumeric. (Not jet implemented).
     */
    getWidth(): number
    /**
     * Sets `numeric` using a #gdouble represented by `number`.
     * @param number a #gdouble
     */
    setDouble(number: number): void
    /**
     * Sets `numeric` with a number represented by `str,` in the C locale format (dot as a fraction separator).
     * @param str a string representing a number, in the C locale format
     */
    setFromString(str: string | null): void
    /**
     * Sets the precision of a #GdaNumeric.
     * @param precision a #glong
     */
    setPrecision(precision: number): void
    /**
     * Sets the width of a #GdaNumeric. (Not yet implemented).
     * @param width a #glong
     */
    setWidth(width: number): void
}

/**
 * Holds numbers represented as strings.
 * 
 * This struct must be considered as opaque. Any access to its members must use its
 * accessors added since version 5.0.2.
 * @record 
 */
class Numeric {

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

interface PStmtClass {

    // Own fields of Gda-6.0.Gda.PStmtClass

    parentClass: GObject.ObjectClass
}

abstract class PStmtClass {

    // Own properties of Gda-6.0.Gda.PStmtClass

    static name: string
}

interface ProviderInfo {

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
    dsnParams: Set
    /**
     * a #GdaSet containing all the authentication parameters
     * @field 
     */
    authParams: Set
    iconId: string | null
}

/**
 * This structure holds the information associated to a database provider as discovered by Libgda.
 * @record 
 */
class ProviderInfo {

    // Own properties of Gda-6.0.Gda.ProviderInfo

    static name: string
}

interface ProviderInterface {

    // Own fields of Gda-6.0.Gda.ProviderInterface

    gIface: GObject.TypeInterface
    getName: (provider: Provider) => string | null
    getVersion: (provider: Provider) => string | null
    getServerVersion: (provider: Provider, cnc: Connection) => string | null
    supportsFeature: (provider: Provider, cnc: Connection, feature: ConnectionFeature) => boolean
    createConnection: (provider: Provider) => Connection
    createParser: (provider: Provider, cnc: Connection) => SqlParser
    getDataHandler: (provider: Provider, cnc: Connection, gType: GObject.GType, dbmsType: string | null) => DataHandler
    getDefDbmsType: (provider: Provider, cnc: Connection, gType: GObject.GType) => string | null
    supportsOperation: (provider: Provider, cnc: Connection, type: ServerOperationType, options: Set) => boolean
    createOperation: (provider: Provider, cnc: Connection, type: ServerOperationType, options: Set) => ServerOperation
    renderOperation: (provider: Provider, cnc: Connection, op: ServerOperation) => string | null
    statementToSql: (provider: Provider, cnc: Connection, stmt: Statement, params: Set | null, flags: StatementSqlFlag) => [ /* returnType */ string | null, /* paramsUsed */ Holder[] | null ]
    identifierQuote: (provider: Provider, cnc: Connection | null, id: string | null, forMetaStore: boolean, forceQuotes: boolean) => string | null
    statementRewrite: (provider: Provider, cnc: Connection, stmt: Statement, params: Set) => SqlStatement
    openConnection: (provider: Provider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    prepareConnection: (provider: Provider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    closeConnection: (provider: Provider, cnc: Connection) => boolean
    escapeString: (provider: Provider, cnc: Connection, str: string | null) => string | null
    unescapeString: (provider: Provider, cnc: Connection, str: string | null) => string | null
    performOperation: (provider: Provider, cnc: Connection, op: ServerOperation) => boolean
    beginTransaction: (provider: Provider, cnc: Connection, name: string | null, level: TransactionIsolation) => boolean
    commitTransaction: (provider: Provider, cnc: Connection, name: string | null) => boolean
    rollbackTransaction: (provider: Provider, cnc: Connection, name: string | null) => boolean
    addSavepoint: (provider: Provider, cnc: Connection, name: string | null) => boolean
    rollbackSavepoint: (provider: Provider, cnc: Connection, name: string | null) => boolean
    deleteSavepoint: (provider: Provider, cnc: Connection, name: string | null) => boolean
    statementPrepare: (provider: Provider, cnc: Connection, stmt: Statement) => boolean
    statementExecute: (provider: Provider, cnc: Connection, stmt: Statement, params: Set, modelUsage: StatementModelUsage, colTypes: GObject.GType, lastInsertedRow: Set) => GObject.Object
    getLastInserted: (provider: Provider, cnc: Connection) => Set
    padding: any[]
}

abstract class ProviderInterface {

    // Own properties of Gda-6.0.Gda.ProviderInterface

    static name: string
}

interface ProviderMetaInterface {

    // Own fields of Gda-6.0.Gda.ProviderMetaInterface

    gIface: GObject.TypeInterface
    btypes: (prov: ProviderMeta) => DataModel
    udts: (prov: ProviderMeta) => DataModel
    udt: (prov: ProviderMeta, udtCatalog: string | null, udtSchema: string | null) => Row
    udtCols: (prov: ProviderMeta) => DataModel
    udtCol: (prov: ProviderMeta, udtCatalog: string | null, udtSchema: string | null, udtName: string | null) => Row
    enumsType: (prov: ProviderMeta) => DataModel
    enumType: (prov: ProviderMeta, udtCatalog: string | null, udtSchema: string | null, udtName: string | null) => Row
    domains: (prov: ProviderMeta) => DataModel
    domain: (prov: ProviderMeta, domainCatalog: string | null, domainSchema: string | null) => Row
    domainsConstraints: (prov: ProviderMeta) => DataModel
    domainConstraints: (prov: ProviderMeta, domainCatalog: string | null, domainSchema: string | null, domainName: string | null) => DataModel
    domainConstraint: (prov: ProviderMeta, domainCatalog: string | null, domainSchema: string | null, domainName: string | null, constraintName: string | null) => Row
    elementTypes: (prov: ProviderMeta) => DataModel
    elementType: (prov: ProviderMeta, specificName: string | null) => Row
    collations: (prov: ProviderMeta) => DataModel
    collation: (prov: ProviderMeta, collationCatalog: string | null, collationSchema: string | null, collationNameN: string | null) => Row
    characterSets: (prov: ProviderMeta) => DataModel
    characterSet: (prov: ProviderMeta, chsetCatalog: string | null, chsetSchema: string | null, chsetNameN: string | null) => Row
    schematas: (prov: ProviderMeta) => DataModel
    schemata: (prov: ProviderMeta, catalogName: string | null, schemaNameN: string | null) => Row
    tablesColumns: (prov: ProviderMeta) => DataModel
    tables: (prov: ProviderMeta) => DataModel
    table: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableNameN: string | null) => Row
    views: (prov: ProviderMeta) => DataModel
    view: (prov: ProviderMeta, viewCatalog: string | null, viewSchema: string | null, viewNameN: string | null) => Row
    columns: (prov: ProviderMeta) => DataModel
    tableColumns: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableName: string | null) => DataModel
    tableColumn: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableName: string | null, columnName: string | null) => Row
    viewsColumns: (prov: ProviderMeta) => DataModel
    viewColumns: (prov: ProviderMeta, viewCatalog: string | null, viewSchema: string | null, viewName: string | null) => DataModel
    viewColumn: (prov: ProviderMeta, viewCatalog: string | null, viewSchema: string | null, viewName: string | null, columnName: string | null) => Row
    constraintsTables: (prov: ProviderMeta) => DataModel
    constraintsTable: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableName: string | null) => DataModel
    constraintTable: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableName: string | null, constraintNameN: string | null) => Row
    constraintsRef: (prov: ProviderMeta) => DataModel
    constraintsRefTable: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableName: string | null) => DataModel
    constraintRef: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableName: string | null, constraintName: string | null) => Row
    keyColumns: (prov: ProviderMeta) => DataModel
    keyColumn: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableName: string | null, constraintName: string | null) => Row
    checkColumns: (prov: ProviderMeta) => DataModel
    checkColumn: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableName: string | null, constraintName: string | null) => Row
    triggers: (prov: ProviderMeta) => DataModel
    trigger: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableName: string | null) => Row
    routines: (prov: ProviderMeta) => DataModel
    routine: (prov: ProviderMeta, routineCatalog: string | null, routineSchema: string | null, routineNameN: string | null) => Row
    routinesCol: (prov: ProviderMeta) => DataModel
    routineCol: (prov: ProviderMeta, routCatalog: string | null, routSchema: string | null, routName: string | null) => Row
    routinesPars: (prov: ProviderMeta) => DataModel
    routinePars: (prov: ProviderMeta, routCatalog: string | null, routSchema: string | null, routName: string | null) => Row
    indexesTables: (prov: ProviderMeta) => DataModel
    indexesTable: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableName: string | null) => DataModel
    indexTable: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableName: string | null, indexNameN: string | null) => Row
    indexCols: (prov: ProviderMeta) => DataModel
    indexCol: (prov: ProviderMeta, tableCatalog: string | null, tableSchema: string | null, tableName: string | null, indexName: string | null) => Row
    padding: any[]
}

abstract class ProviderMetaInterface {

    // Own properties of Gda-6.0.Gda.ProviderMetaInterface

    static name: string
}

interface QuarkList {

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
    addFromString(string: string | null, cleanup: boolean): void
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
    find(name: string | null): string | null
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
    protectValues(): void
    /**
     * Removes an entry from the #GdaQuarkList, given its name.
     * @param name an entry name.
     */
    remove(name: string | null): void
}

class QuarkList {

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
    static newFromString(string: string | null): QuarkList
}

interface RepetitiveStatementClass {

    // Own fields of Gda-6.0.Gda.RepetitiveStatementClass

    parentClass: GObject.ObjectClass
}

abstract class RepetitiveStatementClass {

    // Own properties of Gda-6.0.Gda.RepetitiveStatementClass

    static name: string
}

interface RowClass {

    // Own fields of Gda-6.0.Gda.RowClass

    parentClass: GObject.ObjectClass
}

abstract class RowClass {

    // Own properties of Gda-6.0.Gda.RowClass

    static name: string
}

interface ServerOperationClass {

    // Own fields of Gda-6.0.Gda.ServerOperationClass

    parentClass: GObject.ObjectClass
    seqItemAdded: (op: ServerOperation, seqPath: string | null, itemIndex: number) => void
    seqItemRemove: (op: ServerOperation, seqPath: string | null, itemIndex: number) => void
}

abstract class ServerOperationClass {

    // Own properties of Gda-6.0.Gda.ServerOperationClass

    static name: string
}

interface ServerOperationCreateTableArg {

    // Owm methods of Gda-6.0.Gda.ServerOperationCreateTableArg

    copy(): ServerOperationCreateTableArg
    free(): void
    getColumnName(): string | null
    getColumnType(): GObject.GType
    getFkeyOndelete(): string | null
    getFkeyOnupdate(): string | null
    getFkeyRefs(): ServerOperationCreateTableArgFKeyRefField[]
    getFkeyTable(): string | null
    getFlags(): ServerOperationCreateTableFlag
    /**
     * Sets column name to be created with the new table.
     * @param name the table's column's name.
     */
    setColumnName(name: string | null): void
    setColumnType(ctype: GObject.GType): void
    /**
     * You should set this if you use a #GDA_SERVER_OPERATION_CREATE_TABLE_FKEY_FLAG flag.
     * @param action action to perform on delete action of the referenced field.
     */
    setFkeyOndelete(action: string | null): void
    setFkeyOndupdate(action: string | null): void
    /**
     * You should set this if you use a #GDA_SERVER_OPERATION_CREATE_TABLE_FKEY_FLAG flag.
     * @param refs list of references from local to foreign fields. This list is owned by `arg,` then you should not free it.
     */
    setFkeyRefs(refs: ServerOperationCreateTableArgFKeyRefField[]): void
    /**
     * You should set this if you use a #GDA_SERVER_OPERATION_CREATE_TABLE_FKEY_FLAG flag.
     * @param name the table's name of reference.
     */
    setFkeyTable(name: string | null): void
    /**
     * Sets flags for new column to create with the table.
     * @param flags flags to used in this argument as #GdaServerOperationCreateTableFlag
     */
    setFlags(flags: ServerOperationCreateTableFlag): void
}

class ServerOperationCreateTableArg {

    // Own properties of Gda-6.0.Gda.ServerOperationCreateTableArg

    static name: string

    // Constructors of Gda-6.0.Gda.ServerOperationCreateTableArg

    constructor() 
    static new(): ServerOperationCreateTableArg
}

interface ServerOperationCreateTableArgFKeyRefField {

    // Owm methods of Gda-6.0.Gda.ServerOperationCreateTableArgFKeyRefField

    copy(): ServerOperationCreateTableArgFKeyRefField
    free(): void
    getLocalField(): string | null
    getReferencedField(): string | null
    setLocalField(name: string | null): void
    setReferencedField(name: string | null): void
}

class ServerOperationCreateTableArgFKeyRefField {

    // Own properties of Gda-6.0.Gda.ServerOperationCreateTableArgFKeyRefField

    static name: string

    // Constructors of Gda-6.0.Gda.ServerOperationCreateTableArgFKeyRefField

    constructor() 
    static new(): ServerOperationCreateTableArgFKeyRefField
}

interface ServerOperationNode {

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

class ServerOperationNode {

    // Own properties of Gda-6.0.Gda.ServerOperationNode

    static name: string
}

interface ServerProviderBase {

    // Own fields of Gda-6.0.Gda.ServerProviderBase

    getName: (provider: ServerProvider) => string | null
    getVersion: (provider: ServerProvider) => string | null
    getServerVersion: (provider: ServerProvider, cnc: Connection) => string | null
    supportsFeature: (provider: ServerProvider, cnc: Connection, feature: ConnectionFeature) => boolean
    createWorker: (provider: ServerProvider, forCnc: boolean) => Worker
    getDefDbmsType: (provider: ServerProvider, cnc: Connection, gType: GObject.GType) => string | null
    supportsOperation: (provider: ServerProvider, cnc: Connection, type: ServerOperationType, options: Set) => boolean
    renderOperation: (provider: ServerProvider, cnc: Connection, op: ServerOperation) => string | null
    identifierQuote: (provider: ServerProvider, cnc: Connection, id: string | null, forMetaStore: boolean, forceQuotes: boolean) => string | null
    statementRewrite: (provider: ServerProvider, cnc: Connection, stmt: Statement, params: Set) => SqlStatement
    openConnection: (provider: ServerProvider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    prepareConnection: (provider: ServerProvider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    closeConnection: (provider: ServerProvider, cnc: Connection) => boolean
    escapeString: (provider: ServerProvider, cnc: Connection, str: string | null) => string | null
    unescapeString: (provider: ServerProvider, cnc: Connection, str: string | null) => string | null
    performOperation: (provider: ServerProvider, cnc: Connection, op: ServerOperation) => boolean
    beginTransaction: (provider: ServerProvider, cnc: Connection, name: string | null, level: TransactionIsolation) => boolean
    commitTransaction: (provider: ServerProvider, cnc: Connection, name: string | null) => boolean
    rollbackTransaction: (provider: ServerProvider, cnc: Connection, name: string | null) => boolean
    addSavepoint: (provider: ServerProvider, cnc: Connection, name: string | null) => boolean
    rollbackSavepoint: (provider: ServerProvider, cnc: Connection, name: string | null) => boolean
    deleteSavepoint: (provider: ServerProvider, cnc: Connection, name: string | null) => boolean
    statementPrepare: (provider: ServerProvider, cnc: Connection, stmt: Statement) => boolean
}

/**
 * Functions implementing basic features.
 * 
 * A pointer to this structure is returned by _gda_server_provider_get_impl_functions() when requesting
 * `GDA_SERVER_PROVIDER_FUNCTIONS_BASE` functions.
 * @record 
 */
class ServerProviderBase {

    // Own properties of Gda-6.0.Gda.ServerProviderBase

    static name: string
}

interface ServerProviderClass {

    // Own fields of Gda-6.0.Gda.ServerProviderClass

    parentClass: GObject.ObjectClass
    functionsSets: any[]
}

abstract class ServerProviderClass {

    // Own properties of Gda-6.0.Gda.ServerProviderClass

    static name: string
}

interface ServerProviderConnectionData {

    // Own fields of Gda-6.0.Gda.ServerProviderConnectionData

    worker: Worker
    providerDataDestroyFunc: GLib.DestroyNotify
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
class ServerProviderConnectionData {

    // Own properties of Gda-6.0.Gda.ServerProviderConnectionData

    static name: string
}

interface ServerProviderHandlerInfo {

    // Own fields of Gda-6.0.Gda.ServerProviderHandlerInfo

    cnc: Connection
    gType: GObject.GType
    dbmsType: string | null
}

class ServerProviderHandlerInfo {

    // Own properties of Gda-6.0.Gda.ServerProviderHandlerInfo

    static name: string
}

interface ServerProviderMeta {

    // Own fields of Gda-6.0.Gda.ServerProviderMeta

    udt: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udtCatalog: any, udtSchema: any) => boolean
    udtCols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udtCatalog: any, udtSchema: any, udtName: any) => boolean
    enums: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udtCatalog: any, udtSchema: any, udtName: any) => boolean
    domains: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, domainCatalog: any, domainSchema: any) => boolean
    constraintsDom: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, domainCatalog: any, domainSchema: any, domainName: any) => boolean
    elTypes: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, specificName: any) => boolean
    collations: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, collationCatalog: any, collationSchema: any, collationNameN: any) => boolean
    characterSets: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, chsetCatalog: any, chsetSchema: any, chsetNameN: any) => boolean
    schemata: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, catalogName: any, schemaNameN: any) => boolean
    tablesViews: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableNameN: any) => boolean
    columns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any) => boolean
    viewCols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, viewCatalog: any, viewSchema: any, viewName: any) => boolean
    constraintsTab: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, constraintNameN: any) => boolean
    constraintsRef: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, constraintName: any) => boolean
    keyColumns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, constraintName: any) => boolean
    checkColumns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, constraintName: any) => boolean
    triggers: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any) => boolean
    routines: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, routineCatalog: any, routineSchema: any, routineNameN: any) => boolean
    routineCol: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, routCatalog: any, routSchema: any, routName: any, colName: any, ordinalPosition: any) => boolean
    routinePar: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, routCatalog: any, routSchema: any, routName: any) => boolean
    indexesTab: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, indexNameN: any) => boolean
    indexCols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, indexName: any) => boolean
}

/**
 * These methods must be implemented by providers to update a connection's associated metadata (in a
 * #GdaMetaStore object), see the <link linkend="prov-metadata">Virtual methods for providers/Methods - metadata</link>
 * for more information.
 * @record 
 */
class ServerProviderMeta {

    // Own properties of Gda-6.0.Gda.ServerProviderMeta

    static name: string
}

interface ServerProviderXa {

    // Own fields of Gda-6.0.Gda.ServerProviderXa

    xaStart: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xaEnd: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xaPrepare: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xaCommit: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xaRollback: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
}

/**
 * Functions implementing distributed transactions.
 * @record 
 */
class ServerProviderXa {

    // Own properties of Gda-6.0.Gda.ServerProviderXa

    static name: string
}

interface SetClass {

    // Own fields of Gda-6.0.Gda.SetClass

    parentClass: GObject.ObjectClass
    validateHolderChange: (set: Set, holder: Holder, newValue: any) => GLib.Error
    validateSet: (set: Set) => GLib.Error
    holderChanged: (set: Set, holder: Holder) => void
    holderAttrChanged: (set: Set, holder: Holder, attrName: string | null, attrValue: any) => void
    publicDataChanged: (set: Set) => void
    holderTypeSet: (set: Set, holder: Holder) => void
    sourceModelChanged: (set: Set, source: SetSource) => void
}

abstract class SetClass {

    // Own properties of Gda-6.0.Gda.SetClass

    static name: string
}

interface SetGroup {

    // Owm methods of Gda-6.0.Gda.SetGroup

    addNode(node: SetNode): void
    /**
     * Copy constructor.
     * @returns a new #GdaSetGroup
     */
    copy(): SetGroup
    /**
     * Frees any resources taken by `sg` struct. If `sg` is %NULL, then nothing happens.
     */
    free(): void
    getNNodes(): number
    /**
     * This method always return first #GdaSetNode in `sg`.
     * @returns first #GdaSetNode in @sg.
     */
    getNode(): SetNode
    /**
     * Returns a #GSList with the #GdaSetNode grouped by `sg`. You must use
     * #g_slist_free on returned list.
     * @returns a #GSList with all nodes in @sg.
     */
    getNodes(): SetNode[]
    getSource(): SetSource
    setSource(source: SetSource): void
}

/**
 * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
 * Don't try to use #gda_set_group_free on a struct that was created manually.
 * @record 
 */
class SetGroup {

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

interface SetNode {

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
    getDataModel(): DataModel
    getHolder(): Holder
    getSourceColumn(): number
    /**
     * Set a #GdaDataModel to be used by `node`. `model` increment its reference
     * counting when set. Internally referenced column number is set to first column
     * in `model`.
     * @param model a #GdaDataModel to be used by `node`
     */
    setDataModel(model: DataModel | null): void
    /**
     * Set a #GdaHolder to `node`.
     * @param holder 
     */
    setHolder(holder: Holder): void
    /**
     * Set column number in the #GdaDataModel used `node`. If no #GdaDataModel is set
     * then column is set to invalid (-1);
     * @param column 
     */
    setSourceColumn(column: number): void
}

/**
 * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
 * Don't try to use #gda_set_node_free on a struct that was created manually.
 * @record 
 */
class SetNode {

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

interface SetSource {

    // Owm methods of Gda-6.0.Gda.SetSource

    /**
     * Set a #GdaDataModel
     * @param node a #GdaSetNode to add
     */
    addNode(node: SetNode): void
    /**
     * Copy constructor.
     * @returns a new #GdaSetSource
     */
    copy(): SetSource
    /**
     * Frees any resources taken by `s` struct. If `s` is %NULL, then nothing happens.
     */
    free(): void
    getDataModel(): DataModel
    getNNodes(): number
    getNodes(): SetNode[]
    /**
     * Set a #GdaDataModel
     * @param model a #GdaDataModel
     */
    setDataModel(model: DataModel): void
}

/**
 * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
 * Don't try to use #gda_set_source_free on a struct that was created manually.
 * @record 
 */
class SetSource {

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

interface SqlAnyPart {

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
    checkStructure(): boolean
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
class SqlAnyPart {

    // Own properties of Gda-6.0.Gda.SqlAnyPart

    static name: string
}

interface SqlBuilderClass {

    // Own fields of Gda-6.0.Gda.SqlBuilderClass

    parentClass: GObject.ObjectClass
}

abstract class SqlBuilderClass {

    // Own properties of Gda-6.0.Gda.SqlBuilderClass

    static name: string
}

interface SqlCase {

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
    baseExpr: SqlExpr
    /**
     * list of #GdaSqlExpr, one for each WHEN clause
     * @field 
     */
    whenExprList: any[]
    /**
     * list of #GdaSqlExpr, one for each THEN clause
     * @field 
     */
    thenExprList: any[]
    /**
     * default expression for the CASE
     * @field 
     */
    elseExpr: SqlExpr

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
class SqlCase {

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

interface SqlExpr {

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
    paramSpec: SqlParamSpec
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
    caseS: SqlCase
    /**
     * not %NULL if expression must be cast to another data type
     * @field 
     */
    castAs: string | null
    /**
     * Please see specific note about the `value` field
     * @field 
     */
    valueIsIdent: boolean

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
    takeSelect(stmt: SqlStatement): void
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

interface SqlField {

    // Own fields of Gda-6.0.Gda.SqlField

    any: SqlAnyPart
    fieldName: string | null
    /**
     * validity check with a connection
     * @field 
     */
    validityMetaTableColumn: MetaTableColumn

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
    takeName(value: any): void
}

/**
 * This structure represents the name of a table's field.
 * @record 
 */
class SqlField {

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

interface SqlFunction {

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
    functionName: string | null
    /**
     * list of #GdaSqlExpr expressions, one for each argument
     * @field 
     */
    argsList: any[]

    // Owm methods of Gda-6.0.Gda.SqlFunction

    checkClean(): void
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
    takeArgsList(args: SqlExpr[]): void
    /**
     * Sets the function's name using the string held by `value`. When call, `value` is freed using
     * #gda_value_free().
     * @param value a #GValue holding a string to take from
     */
    takeName(value: any): void
}

/**
 * This structure represents a function or an aggregate with zero or more arguments.
 * @record 
 */
class SqlFunction {

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

interface SqlOperation {

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
    operatorType: SqlOperatorType
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
class SqlOperation {

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
    static operatorFromString(op: string | null): SqlOperatorType
    /**
     * Returns a constant string representing a operator name. You don't need to free
     * the returned string.
     * @param op a #GdaSqlOperation structure
     * @returns a string with the operator's name or NULL in case @op is invalid.
     */
    static operatorToString(op: SqlOperatorType): string | null
}

interface SqlParamSpec {

    // Own fields of Gda-6.0.Gda.SqlParamSpec

    name: string | null
    descr: string | null
    isParam: boolean
    nullok: boolean
    gType: GObject.GType
    validityMetaDict: any
    gdaReserved1: any
    gdaReserved2: any

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
    takeDescr(value: any): void
    /**
     * Sets `pspec'`s name. `value'`s ownership is transferred to
     * `pspec` (which means `pspec` is then responsible for freeing it when no longer needed).
     * @param value a G_TYPE_STRING #GValue
     */
    takeName(value: any): void
    /**
     * Sets `pspec'`s ability of being NULL. `value'`s ownership is transferred to
     * `pspec` (which means `pspec` is then responsible for freeing it when no longer needed).
     * 
     * If `value'`s string starts by 't' or 'T' then `pspec` will be allowed to be %NULL
     * @param value a G_TYPE_STRING #GValue.
     */
    takeNullok(value: any): void
    /**
     * Sets `pspec'`s data type. `value'`s ownership is transferred to
     * `pspec` (which means `pspec` is then responsible for freeing it when no longer needed).
     * 
     * `value` must represent a data type, as understood by gda_g_type_from_string().
     * @param value a G_TYPE_STRING #GValue
     */
    takeType(value: any): void
}

class SqlParamSpec {

    // Own properties of Gda-6.0.Gda.SqlParamSpec

    static name: string

    // Constructors of Gda-6.0.Gda.SqlParamSpec

    /**
     * `value` must contain a string representing a variable, see the documentation associated to the
     * #GdaSqlParser object.
     * 
     * `value` is destroyed by this function.
     * @constructor 
     * @param simpleSpec a G_TYPE_STRING #GValue
     * @returns a new #GdaSqlParamSpec
     */
    constructor(simpleSpec: any) 
    /**
     * `value` must contain a string representing a variable, see the documentation associated to the
     * #GdaSqlParser object.
     * 
     * `value` is destroyed by this function.
     * @constructor 
     * @param simpleSpec a G_TYPE_STRING #GValue
     * @returns a new #GdaSqlParamSpec
     */
    static new(simpleSpec: any): SqlParamSpec
}

interface SqlParserClass {

    // Own fields of Gda-6.0.Gda.SqlParserClass

    parentClass: GObject.ObjectClass
    delimAlloc: (f: any) => any
    delimFree: (d: any, f: any) => void
    delimTrace: (d: any, s: string | null) => void
    delimParse: (d: any, i: number, v: any, iface: SqlParserIface) => void
    delimTokensTrans: number
    parserAlloc: (f: any) => any
    parserFree: (p: any, f: any) => void
    parserTrace: (p: any, s: string | null) => void
    parserParse: (p: any, i: number, v: any, iface: SqlParserIface) => void
    parserTokensTrans: number
}

abstract class SqlParserClass {

    // Own properties of Gda-6.0.Gda.SqlParserClass

    static name: string
}

interface SqlParserIface {

    // Own fields of Gda-6.0.Gda.SqlParserIface

    parser: SqlParser
    parsedStatement: SqlStatement
}

class SqlParserIface {

    // Own properties of Gda-6.0.Gda.SqlParserIface

    static name: string
}

interface SqlSelectField {

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
    fieldName: string | null
    /**
     * table name part of `expr` if `expr` represents a field
     * @field 
     */
    tableName: string | null
    /**
     * alias
     * @field 
     */
    as: string | null
    validityMetaObject: MetaDbObject
    validityMetaTableColumn: MetaTableColumn

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
    takeAlias(alias: any): void
    /**
     * Sets the expression field in the #GdaSqlSelectField structure to point to `expr`
     * and modify it to sets its parent to `field`.
     * @param expr a #GdaSqlExpr to take from
     */
    takeExpr(expr: SqlExpr): void
    /**
     * Sets the expression field's value in the #GdaSqlSelectField structure to point to `value;`
     * after this `field` is the owner of `value`.
     * @param value a #GValue to take from
     */
    takeStarValue(value: any): void
}

/**
 * This structure represents a selected item in a SELECT statement (when executed, the returned data set
 * will have one column per selected item). Note that the `table_name` and
 * `field_name` field parts <emphasis>will be</emphasis> overwritten by &LIBGDA;,
 * set the value of `expr->`value instead.
 * @record 
 */
class SqlSelectField {

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

interface SqlSelectFrom {

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
    takeNewJoin(join: SqlSelectJoin): void
    /**
     * Append `target` to the targets in the FROM clause and set `target'`s parent to
     * `from;` after call this function `from` owns `target` then you must not free it.
     * @param target a #GdaSqlSelectTarget to take from
     */
    takeNewTarget(target: SqlSelectTarget): void
}

/**
 * This structure represents the FROM clause of a SELECT statement, it lists targets and joins
 * @record 
 */
class SqlSelectFrom {

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

interface SqlSelectJoin {

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
class SqlSelectJoin {

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
    static typeToString(type: SqlSelectJoinType): string | null
}

interface SqlSelectOrder {

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
    collationName: string | null

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
class SqlSelectOrder {

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

interface SqlSelectTarget {

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
    tableName: string | null
    /**
     * alias
     * @field 
     */
    as: string | null
    validityMetaObject: MetaDbObject

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
    takeAlias(alias: any): void
    /**
     * Sets the target to be a SELECT subquery setting target's expression to use
     * `stmt;` after call this function the target owns `stmt,` then you must not free it.
     * @param stmt a #GValue to take from
     */
    takeSelect(stmt: SqlStatement): void
    /**
     * Sets the target's name using the string stored in `value` and the expression
     * to set its value to point to value; after call this function the target owns
     * `value,` then you must not free it.
     * @param value a #GValue to take from
     */
    takeTableName(value: any): void
}

/**
 * This structure represents a target used to fetch data from in a SELECT statement; it can represent a table or
 * a sub select. Note that the `table_name`
 * part <emphasis>will be</emphasis> overwritten by &LIBGDA;,
 * set the value of `expr->`value instead.
 * @record 
 */
class SqlSelectTarget {

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

interface SqlStatement {

    // Own fields of Gda-6.0.Gda.SqlStatement

    sql: string | null
    /**
     * type of statement
     * @field 
     */
    stmtType: SqlStatementType
    /**
     * contents, cast it depending on `stmt_type` (for example to a #GdaSqlStatementSelect).
     * @field 
     */
    contents: any
    validityMetaStruct: MetaStruct

    // Owm methods of Gda-6.0.Gda.SqlStatement

    /**
     * Cleans any data set by a previous call to gda_sql_statement_check_validity().
     */
    checkClean(): void
    /**
     * Checks for any error in `stmt'`s structure to make sure the statement is valid
     * (for example a SELECT statement must at least return a column, a DELETE statement must specify which table
     * is targeted).
     * @returns TRUE if no error occurred
     */
    checkStructure(): boolean
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
    checkValidity(cnc: Connection | null): boolean
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
    checkValidityM(mstruct: MetaStruct | null): boolean
    /**
     * Specifies `stmt'`s type of compound
     * @param type a #GdaSqlStatementCompoundType value
     */
    compoundSetType(type: SqlStatementCompoundType): void
    /**
     * Adds the `s` sub-statement to the `stmt` compound statement. `s'`s reference is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param s a #GdaSqlStatement pointer
     */
    compoundTakeStmt(s: SqlStatement): void
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
    deleteTakeCondition(cond: SqlExpr): void
    /**
     * Sets the name of the table to delete from in `stmt`. `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value a table name as a G_TYPE_STRING #GValue
     */
    deleteTakeTableName(value: any): void
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
    insertTake1ValuesList(list: SqlExpr[]): void
    /**
     * Sets a list of list of values to be inserted by `stmt`. `list'`s
     * ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param list a list of #GSList of #GdaSqlExpr pointers
     */
    insertTakeExtraValuesList(list: SqlExpr[]): void
    /**
     * Sets the list of fields for which values will be specified in `stmt`. `list'`s
     * ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param list a list of #GdaSqlField pointers
     */
    insertTakeFieldsList(list: SqlField[]): void
    /**
     * Sets the name of the resolution conflict algorithm used by `stmt`. `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value name of the resolution conflict algorithm, as a G_TYPE_STRING #GValue
     */
    insertTakeOnConflict(value: any): void
    /**
     * Specifies a SELECT statement, the values inserted will be the result set of `select`. `select'`s
     * ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param select a SELECT or COMPOUND #GdaSqlStatement pointer
     */
    insertTakeSelect(select: SqlStatement): void
    /**
     * Sets the name of the table to insert into in `stmt`. `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value name of the table to insert into, as a G_TYPE_STRING #GValue
     */
    insertTakeTableName(value: any): void
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
     * @param distinctExpr a #GdaSqlExpr pointer representing what the DISTINCT is on, or %NULL
     */
    selectTakeDistinct(distinct: boolean, distinctExpr: SqlExpr | null): void
    /**
     * Sets list of expressions selected by `stmt`
     * 
     * `expr_list'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param exprList a list of #GdaSqlSelectField pointers
     */
    selectTakeExprList(exprList: SqlSelectField[]): void
    /**
     * Sets the FROM clause of `stmt`
     * 
     * `from'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param from a #GdaSqlSelectFrom pointer
     */
    selectTakeFrom(from: SqlSelectFrom): void
    /**
     * Sets the GROUP BY clause of `stmt`
     * 
     * `group_by'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param groupBy a list of #GdaSqlExpr pointer
     */
    selectTakeGroupBy(groupBy: SqlExpr[]): void
    /**
     * Sets the HAVING clause of `stmt`
     * 
     * `expr'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param expr a #GdaSqlExpr pointer
     */
    selectTakeHavingCond(expr: SqlExpr): void
    /**
     * Sets the LIMIT clause of `stmt`
     * 
     * `count` and `offset'`s responsibility are transferred to
     * `stmt` (which means `stmt` is then responsible for freeing them when no longer needed).
     * @param count a #GdaSqlExpr pointer
     * @param offset a #GdaSqlExpr pointer
     */
    selectTakeLimits(count: SqlExpr, offset: SqlExpr): void
    /**
     * Sets the ORDER BY clause of `stmt`
     * 
     * `order_by'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param orderBy a list of #GdaSqlSelectOrder pointer
     */
    selectTakeOrderBy(orderBy: SqlSelectOrder[]): void
    /**
     * Sets the WHERE clause of `stmt`
     * 
     * `expr'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param expr a #GdaSqlExpr pointer
     */
    selectTakeWhereCond(expr: SqlExpr): void
    /**
     * Creates a string representation of `stmt`.
     * @returns a new string
     */
    serialize(): string | null
    transSetIsolLevel(level: TransactionIsolation): void
    /**
     * Sets the model of the transaction
     * 
     * `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value a G_TYPE_STRING value
     */
    transTakeMode(value: any): void
    /**
     * Sets the name of the transaction
     * 
     * `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value a G_TYPE_STRING value
     */
    transTakeName(value: any): void
    /**
     * Sets `stmt'`s list of expressions
     * 
     * `expressions'`s
     * ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param expressions a list of #GdaSqlExpr pointers
     */
    unknownTakeExpressions(expressions: SqlExpr[]): void
    /**
     * Sets the WHERE clause of `stmt`
     * 
     * `expr'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param cond a #GdaSqlExpr pointer
     */
    updateTakeCondition(cond: SqlExpr): void
    /**
     * Sets the name of the resolution conflict algorithm used by `stmt`. `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value name of the resolution conflict algorithm, as a G_TYPE_STRING #GValue
     */
    updateTakeOnConflict(value: any): void
    /**
     * Specifies that the field named `fname` will be updated with the expression `expr`.
     * 
     * `fname` and `expr'`s responsibility are transferred to
     * `stmt` (which means `stmt` is then responsible for freeing them when no longer needed).
     * @param fname a field name, as a G_TYPE_STRING #GValue
     * @param expr a #GdaSqlExpr pointer
     */
    updateTakeSetValue(fname: any, expr: SqlExpr): void
    /**
     * Sets the name of the table to delete from in `stmt`.
     * 
     * `value'`s ownership is transferred to
     * `stmt` (which means `stmt` is then responsible for freeing it when no longer needed).
     * @param value a table name, as a G_TYPE_STRING #GValue
     */
    updateTakeTableName(value: any): void
}

/**
 * This structure is the top level structure encapsulating several type of statements.
 * @record 
 */
class SqlStatement {

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
    static getContentsInfos(type: SqlStatementType): SqlStatementContentsInfo
    /**
     * Converts a string to a #GdaSqlStatementType value, see also gda_sql_statement_type_to_string()
     * @param type a string representing a #GdaSqlStatementType type
     * @returns a #GdaSqlStatementType value
     */
    static stringToType(type: string | null): SqlStatementType
    /**
     * Converts a #GdaSqlStatementType to a string, see also gda_sql_statement_string_to_type()
     * @param type a #GdaSqlStatementType value
     * @returns a constant string
     */
    static typeToString(type: SqlStatementType): string | null
}

interface SqlStatementCheckValidityData {

    // Own fields of Gda-6.0.Gda.SqlStatementCheckValidityData

    cnc: Connection
    store: MetaStore
    mstruct: MetaStruct
}

/**
 * Validation against a dictionary
 * @record 
 */
class SqlStatementCheckValidityData {

    // Own properties of Gda-6.0.Gda.SqlStatementCheckValidityData

    static name: string
}

interface SqlStatementCompound {

    // Own fields of Gda-6.0.Gda.SqlStatementCompound

    any: SqlAnyPart
    compoundType: SqlStatementCompoundType
    stmtList: any[]
}

class SqlStatementCompound {

    // Own properties of Gda-6.0.Gda.SqlStatementCompound

    static name: string
}

interface SqlStatementContentsInfo {

    // Own fields of Gda-6.0.Gda.SqlStatementContentsInfo

    type: SqlStatementType
    name: string | null
    construct: () => any
    free: (stm: any) => void
    copy: (stm: any) => any
    serialize: (stm: any) => string | null
    checkStructureFunc: SqlForeachFunc
    checkValidityFunc: SqlForeachFunc
}

/**
 * Contents' infos
 * @record 
 */
class SqlStatementContentsInfo {

    // Own properties of Gda-6.0.Gda.SqlStatementContentsInfo

    static name: string
}

interface SqlStatementDelete {

    // Own fields of Gda-6.0.Gda.SqlStatementDelete

    any: SqlAnyPart
    table: SqlTable
    cond: SqlExpr
}

class SqlStatementDelete {

    // Own properties of Gda-6.0.Gda.SqlStatementDelete

    static name: string
}

interface SqlStatementInsert {

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
    onConflict: string | null
    /**
     * name of the table to which data is inserted
     * @field 
     */
    table: SqlTable
    /**
     * list of #GdaSqlField fields which are valued for insertion
     * @field 
     */
    fieldsList: any[]
    /**
     * list of list of #GdaSqlExpr expressions (this is a list of list, not a simple list)
     * @field 
     */
    valuesList: any[]
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
class SqlStatementInsert {

    // Own properties of Gda-6.0.Gda.SqlStatementInsert

    static name: string
}

interface SqlStatementSelect {

    // Own fields of Gda-6.0.Gda.SqlStatementSelect

    any: SqlAnyPart
    distinct: boolean
    distinctExpr: SqlExpr
    exprList: any[]
    from: SqlSelectFrom
    whereCond: SqlExpr
    groupBy: any[]
    havingCond: SqlExpr
    orderBy: any[]
    limitCount: SqlExpr
    limitOffset: SqlExpr
}

class SqlStatementSelect {

    // Own properties of Gda-6.0.Gda.SqlStatementSelect

    static name: string
}

interface SqlStatementTransaction {

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
    isolationLevel: TransactionIsolation
    /**
     * transaction mode (DEFERRED, IMMEDIATE, EXCLUSIVE, READ_WRITE, READ_ONLY)
     * @field 
     */
    transMode: string | null
    /**
     * transaction name
     * @field 
     */
    transName: string | null
}

/**
 * The statement is a transaction management related statement (BEGIN, ROLLBACK, etc). The #GdaSqlStatementTransaction structure
 * does not hold enough information to reconstruct the complete SQL statement (some information may be missing) - the aim of this
 * structure is to identify a minimum set of information in the transaction statement. Note that the complete SQL which created the
 * statement should be available in the #GdaSqlStatement structure which encapsulates this structure.
 * @record 
 */
class SqlStatementTransaction {

    // Own properties of Gda-6.0.Gda.SqlStatementTransaction

    static name: string
}

interface SqlStatementUnknown {

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
class SqlStatementUnknown {

    // Own properties of Gda-6.0.Gda.SqlStatementUnknown

    static name: string
}

interface SqlStatementUpdate {

    // Own fields of Gda-6.0.Gda.SqlStatementUpdate

    any: SqlAnyPart
    onConflict: string | null
    table: SqlTable
    fieldsList: any[]
    exprList: any[]
    cond: SqlExpr
}

class SqlStatementUpdate {

    // Own properties of Gda-6.0.Gda.SqlStatementUpdate

    static name: string
}

interface SqlTable {

    // Own fields of Gda-6.0.Gda.SqlTable

    any: SqlAnyPart
    tableName: string | null
    validityMetaObject: MetaDbObject

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
    takeName(value: any): void
}

/**
 * This structure represents the name of a table.
 * @record 
 */
class SqlTable {

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

interface StatementClass {

    // Own fields of Gda-6.0.Gda.StatementClass

    parentClass: GObject.ObjectClass
    checked: (stmt: Statement, cnc: Connection, checked: boolean) => void
    reset: (stmt: Statement) => void
}

abstract class StatementClass {

    // Own properties of Gda-6.0.Gda.StatementClass

    static name: string
}

interface Text {

    // Owm methods of Gda-6.0.Gda.Text

    /**
     * Free resources on #GdaText object.
     */
    free(): void
    getString(): string | null
    /**
     * Set string. The string is duplicated.
     * @param str a string to set from
     */
    setString(str: string | null): void
    /**
     * Takes ownership on a given string, so you don't need to free it.
     * @param str a string to take ownership on
     */
    takeString(str: string | null): void
}

class Text {

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
    static toAlphanum(text: string | null): string | null
}

interface Time {

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
    getFraction(): number
    /**
     * Get hours from the #GdaTime instance
     */
    getHour(): number
    /**
     * Get minutes from the #GdaTime instance
     */
    getMinute(): number
    /**
     * Get second component from #GdaTime
     */
    getSecond(): number
    /**
     * Returns number of seconds to be added to UTC time.
     */
    getTimezone(): number
    /**
     * Returns a #GTimeZone in use in this `time`.
     */
    getTz(): GLib.TimeZone
    /**
     * Set new value for the second fraction
     * @param fraction new second fraction to set to.
     */
    setFraction(fraction: number): void
    /**
     * Set hour component to the #GdaTime instance.
     * @param hour new hours to set to
     */
    setHour(hour: number): void
    /**
     * Set minutes to the #GdaTime instance
     * @param minute new minutes to set to
     */
    setMinute(minute: number): void
    /**
     * Set second component
     * @param second new seconds to set to
     */
    setSecond(second: number): void
    /**
     * Set timezone component for the instance of #GdaTime
     * @param timezone new time zone to set to. See #gda_time_change_timezone
     */
    setTimezone(timezone: number): void
    /**
     * Creates a string representation of a #GdaTime in local time
     * with the timezone designation.
     * @returns a new string
     */
    toString(): string | null
    /**
     * Creates a string representation of a #GdaTime in local time
     * without timezone designation.
     * @returns a new string
     */
    toStringLocal(): string | null
    /**
     * Creates a string representation of a #GdaTime in UTC time
     * with time zone indication.
     * @returns a new string
     */
    toStringUtc(): string | null
    /**
     * Translate `time'`s to give timezone
     * @param ntz a new #GTimeZone to use
     */
    toTimezone(ntz: GLib.TimeZone): Time
    /**
     * Change time zone to UTC.
     */
    toUtc(): Time
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
class Time {

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
    static newFromDateTime(dt: GLib.DateTime): Time
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
    static newFromValues(hour: number, minute: number, second: number, fraction: number, timezone: number): Time
}

interface TransactionStatusClass {

    // Own fields of Gda-6.0.Gda.TransactionStatusClass

    parentClass: GObject.ObjectClass
}

abstract class TransactionStatusClass {

    // Own properties of Gda-6.0.Gda.TransactionStatusClass

    static name: string
}

interface TransactionStatusEvent {

    // Own fields of Gda-6.0.Gda.TransactionStatusEvent

    trans: TransactionStatus
    type: TransactionStatusEventType
    connEvent: ConnectionEvent
}

class TransactionStatusEvent {

    // Own properties of Gda-6.0.Gda.TransactionStatusEvent

    static name: string
}

interface TreeClass {

    // Own fields of Gda-6.0.Gda.TreeClass

    objectClass: GObject.ObjectClass
    nodeChanged: (tree: Tree, node: TreeNode) => void
    nodeInserted: (tree: Tree, node: TreeNode) => void
    nodeHasChildToggled: (tree: Tree, node: TreeNode) => void
    nodeDeleted: (tree: Tree, nodePath: string | null) => void
}

abstract class TreeClass {

    // Own properties of Gda-6.0.Gda.TreeClass

    static name: string
}

interface TreeManagerClass {

    // Own fields of Gda-6.0.Gda.TreeManagerClass

    parentClass: GObject.ObjectClass
}

abstract class TreeManagerClass {

    // Own properties of Gda-6.0.Gda.TreeManagerClass

    static name: string
}

interface TreeMgrColumnsClass {

    // Own fields of Gda-6.0.Gda.TreeMgrColumnsClass

    objectClass: TreeManagerClass
}

abstract class TreeMgrColumnsClass {

    // Own properties of Gda-6.0.Gda.TreeMgrColumnsClass

    static name: string
}

interface TreeMgrLabelClass {

    // Own fields of Gda-6.0.Gda.TreeMgrLabelClass

    parentClass: TreeManagerClass
}

abstract class TreeMgrLabelClass {

    // Own properties of Gda-6.0.Gda.TreeMgrLabelClass

    static name: string
}

interface TreeMgrSchemasClass {

    // Own fields of Gda-6.0.Gda.TreeMgrSchemasClass

    objectClass: TreeManagerClass
}

abstract class TreeMgrSchemasClass {

    // Own properties of Gda-6.0.Gda.TreeMgrSchemasClass

    static name: string
}

interface TreeMgrSelectClass {

    // Own fields of Gda-6.0.Gda.TreeMgrSelectClass

    objectClass: TreeManagerClass
}

abstract class TreeMgrSelectClass {

    // Own properties of Gda-6.0.Gda.TreeMgrSelectClass

    static name: string
}

interface TreeMgrTablesClass {

    // Own fields of Gda-6.0.Gda.TreeMgrTablesClass

    objectClass: TreeManagerClass
}

abstract class TreeMgrTablesClass {

    // Own properties of Gda-6.0.Gda.TreeMgrTablesClass

    static name: string
}

interface TreeNodeClass {

    // Own fields of Gda-6.0.Gda.TreeNodeClass

    objectClass: GObject.ObjectClass
    nodeChanged: (reporting: TreeNode, node: TreeNode) => void
    nodeInserted: (reporting: TreeNode, node: TreeNode) => void
    nodeHasChildToggled: (reporting: TreeNode, node: TreeNode) => void
    nodeDeleted: (reporting: TreeNode, relativePath: string | null) => void
    dumpHeader: (node: TreeNode) => string | null
    dumpChildren: (node: TreeNode, prefix: string | null, inString: GLib.String) => void
}

abstract class TreeNodeClass {

    // Own properties of Gda-6.0.Gda.TreeNodeClass

    static name: string
}

interface Worker {

    // Owm methods of Gda-6.0.Gda.Worker

    /**
     * Cancels a job which has not yet been processed. If the job cannot be found, is being processed or has already been processed,
     * then this function returns %FALSE.
     * 
     * This function can be called on already cancelled jobs, and simply returns %TRUE in that case.
     * @param jobId the ID of the job, as returned by gda_worker_submit_job()
     * @returns %TRUE if the job was cancelled
     */
    cancelJob(jobId: number): boolean
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
     * @param timeoutMs the maximum number of milisecons to wait before returning, or %0 for unlimited wait
     * @param outResult a place to store the result, if any, of `func'`s execution, or %NULL
     * @param outJobId a place to store the ID of the job having been submitted, or %NULL
     * @param func the function to call from the worker thread
     * @param dataDestroyFunc a function to destroy `data,` or %NULL
     * @returns %TRUE if no error occurred
     */
    doJob(context: GLib.MainContext | null, timeoutMs: number, outResult: any | null, outJobId: number | null, func: WorkerFunc, dataDestroyFunc: GLib.DestroyNotify | null): boolean
    /**
     * Fetch the value returned by execution the `job_id` job.
     * 
     * Warning: if an error occurred during the
     * execution of the requested function within the worker thread, then it will show as `error,` while the return value
     * of this function will be %TRUE.
     * 
     * Note: if there is a result, it will be stored in `out_result,` and it's up to the caller to free
     * the result, the #GdaWorker object will not do it (ownership of the result is transfered to the caller).
     * @param jobId the ID of the job, as returned by gda_worker_submit_job()
     * @param outResult a place to store the value returned by the execution of the requested function within the worker thread, or %NULL
     * @returns %TRUE if the jobs has completed
     */
    fetchJobResult(jobId: number, outResult: any | null): boolean
    /**
     * Forget all about the job with ID `job_id`. As opposed to gda_worker_cancel_job(), this function can be used to tell
     * `worker` that whatever happens to the specific job, you are not interrested anymore (i.e. that `worker` can
     * do whatever is possible to simple discard everything related to that job).
     * @param jobId the ID of the job, as returned by gda_worker_submit_job()
     */
    forgetJob(jobId: number): void
    /**
     * Get a pointer to `worker'`s inner worker thread
     * @returns the #GThread
     */
    getWorkerThread(): GLib.Thread
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
    setCallback(context: GLib.MainContext | null, callback: WorkerCallback | null): boolean
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
     * @param callbackContext a #GMainContext, or %NULL (ignored if no setting has been defined with gda_worker_set_callback())
     * @param func the function to call from the worker thread
     * @param dataDestroyFunc a function to destroy `data,` or %NULL
     * @returns a job ID, or %0 if an error occurred
     */
    submitJob(callbackContext: GLib.MainContext | null, func: WorkerFunc, dataDestroyFunc: GLib.DestroyNotify | null): number
    /**
     * Tells if the thread from which this function is called is `worker'`s worker thread.
     * @returns %TRUE if this function is called is @worker's worker thread
     */
    threadIsWorker(): boolean
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
    waitJob(func: WorkerFunc): any | null
}

class Worker {

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
     * @param allowDestroy defines if the created `GdaWorker` (see case 1 below) will allow its reference to drop to 0 and be destroyed
     * @returns a #GdaWorker
     */
    static newUnique(location: Worker, allowDestroy: boolean): Worker
    static errorQuark(): GLib.Quark
}

interface XaTransactionClass {

    // Own fields of Gda-6.0.Gda.XaTransactionClass

    parentClass: GObject.ObjectClass
}

abstract class XaTransactionClass {

    // Own properties of Gda-6.0.Gda.XaTransactionClass

    static name: string
}

interface XaTransactionId {

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
    gtridLength: number
    /**
     * number between 1 and 64
     * @field 
     */
    bqualLength: number
    data: number[]

    // Owm methods of Gda-6.0.Gda.XaTransactionId

    /**
     * Creates a string representation of `xid,` in the format &lt;gtrid&gt;,&lt;bqual&gt;,&lt;formatID&gt; the
     * &lt;gtrid&gt; and &lt;bqual&gt; strings contain alphanumeric characters, and non alphanumeric characters
     * are converted to "%ab" where ab is the hexadecimal representation of the character.
     * @returns a new string representation of @xid
     */
    toString(): string | null
}

class XaTransactionId {

    // Own properties of Gda-6.0.Gda.XaTransactionId

    static name: string
}

    type SqlBuilderId = number
}

export default Gda;