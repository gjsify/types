/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './vda-1-ambient.d.ts';
import './vda-1-import.d.ts';
/**
 * Vda-1
 */

import type GCalc from '@girs/gcalc-2';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Json from '@girs/json-1.0';
import type GXml from '@girs/gxml-0.20';
import type libxml2 from '@girs/libxml2-2.0';

export namespace Vda {
    enum MoveDirection {
        FORWARD,
        BACKWARD,
        RELATIVE,
    }
    class MetaObjectError extends GLib.Error {
        // Own fields of Vda-1.MetaObjectError

        APPEND: number;
        UPDATE: number;
        SAVE: number;
        DROP: number;

        // Constructors of Vda-1.MetaObjectError

        constructor(options: { message: string; code: number });
    }

    class ConnectionError extends GLib.Error {
        // Own fields of Vda-1.ConnectionError

        NO_DATABASE_NAME_ERROR: number;
        SERVER_ERROR: number;
        QUERY_CREATION_ERROR: number;

        // Constructors of Vda-1.ConnectionError

        constructor(options: { message: string; code: number });
    }

    class DataObjectError extends GLib.Error {
        // Own fields of Vda-1.DataObjectError

        SELECT_ERROR: number;
        INSERT_ERROR: number;
        DELETE_ERROR: number;
        UPDATE_ERROR: number;
        PARAMETERS_ERROR: number;
        NO_CONNECTION_ERROR: number;

        // Constructors of Vda-1.DataObjectError

        constructor(options: { message: string; code: number });
    }

    class DataCollectionError extends GLib.Error {
        // Own fields of Vda-1.DataCollectionError

        INVALID_PROPERTY_ERROR: number;

        // Constructors of Vda-1.DataCollectionError

        constructor(options: { message: string; code: number });
    }

    class ParserError extends GLib.Error {
        // Own fields of Vda-1.ParserError

        INVALID_TOKEN_ERROR: number;
        INVALID_EXPRESSION_ERROR: number;

        // Constructors of Vda-1.ParserError

        constructor(options: { message: string; code: number });
    }

    class QueryError extends GLib.Error {
        // Own fields of Vda-1.QueryError

        INVALID_QUERY_ERROR: number;
        INVALID_CONNECTION_ERROR: number;
        GENERAL_ERROR: number;

        // Constructors of Vda-1.QueryError

        constructor(options: { message: string; code: number });
    }

    class RoleError extends GLib.Error {
        // Own fields of Vda-1.RoleError

        PROVILAGE_ERROR: number;

        // Constructors of Vda-1.RoleError

        constructor(options: { message: string; code: number });
    }

    class RowModelError extends GLib.Error {
        // Own fields of Vda-1.RowModelError

        INVALID_COLUMN_NAME_ERROR: number;
        INVALID_COLUMN_NUMBER_ERROR: number;

        // Constructors of Vda-1.RowModelError

        constructor(options: { message: string; code: number });
    }

    class SqlCommandError extends GLib.Error {
        // Own fields of Vda-1.SqlCommandError

        INVALID_STRUCTURE_ERROR: number;

        // Constructors of Vda-1.SqlCommandError

        constructor(options: { message: string; code: number });
    }

    class SqlCommandSelectError extends GLib.Error {
        // Own fields of Vda-1.SqlCommandSelectError

        INVALID_FIELDS_ERROR: number;

        // Constructors of Vda-1.SqlCommandSelectError

        constructor(options: { message: string; code: number });
    }

    class SqlExpressionError extends GLib.Error {
        // Own fields of Vda-1.SqlExpressionError

        INVALID_EXPRESSION_ERROR: number;

        // Constructors of Vda-1.SqlExpressionError

        constructor(options: { message: string; code: number });
    }

    enum ConnectionStatus {
        INVALID,
        IN_PROGRESS,
        CANCELED,
        MADE,
        DISCONNECTED,
        TIMEOUT,
        CONNECTED,
    }
    enum SqlExpressionOperatorType {
        NONE,
        AND,
        OR,
        EQ,
        IS,
        LIKE,
        BETWEEN,
        NOT_BETWEEN,
        BETWEEN_SYMMETRIC,
        NOT_BETWEEN_SYMMETRIC,
        IS_DISTINCT_FROM,
        IS_NOT_DISTINCT_FROM,
        GT,
        LT,
        GEQ,
        LEQ,
        DIFF,
        REGEXP,
        REGEXP_CI,
        NOT_REGEXP,
        NOT_REGEXP_CI,
        SIMILAR_TO,
        IS_NULL,
        IS_NOT_NULL,
        IS_TRUE,
        IS_NOT_TRUE,
        IS_FALSE,
        IS_NOT_FALSE,
        IS_UNKNOWN,
        IS_NOT_UNKNOWN,
        NOT,
        IN,
        NOT_IN,
        CONCATENATE,
        PLUS,
        MINUS,
        STAR,
        DIV,
        REM,
        BITAND,
        BITOR,
        BITNOT,
        ILIKE,
    }
    enum RoleGrant {
        NONE,
        SELECT,
        INSERT,
        UPDATE,
        DELETE,
        TRUNCATE,
        REFERENCES,
        TRIGGER,
        CREATE,
        USAGE,
        PRIVILEGES,
    }
    module AffectedRows {
        // Constructor properties interface
    }

    class AffectedRows extends GObject.Object {
        // Constructors of Vda-1.AffectedRows

        static ['new'](rows: number): AffectedRows;
    }

    module CommandDelete {
        // Constructor properties interface
    }

    class CommandDelete extends GObject.Object {
        // Constructors of Vda-1.CommandDelete

        static ['new'](cnc: Connection): CommandDelete;
    }

    module CommandInsert {
        // Constructor properties interface
    }

    class CommandInsert extends CommandModification {
        // Constructors of Vda-1.CommandInsert

        static ['new'](cnc: Connection): CommandInsert;
    }

    module CommandModification {
        // Constructor properties interface
    }

    class CommandModification extends GObject.Object {
        // Constructors of Vda-1.CommandModification

        static ['new'](cnc: Connection): CommandModification;
    }

    module CommandSelect {
        // Constructor properties interface
    }

    class CommandSelect extends GObject.Object {
        // Constructors of Vda-1.CommandSelect

        static ['new'](cnc: Connection): CommandSelect;
    }

    module CommandUpdate {
        // Constructor properties interface
    }

    class CommandUpdate extends CommandModification {
        // Constructors of Vda-1.CommandUpdate

        static ['new'](cnc: Connection): CommandUpdate;
    }

    module ConnectionParameter {
        // Constructor properties interface
    }

    class ConnectionParameter extends GObject.Object {
        // Own properties of Vda-1.ConnectionParameter

        name: string;
        value: string;

        // Constructors of Vda-1.ConnectionParameter

        static ['new'](): ConnectionParameter;

        // Owm methods of Vda-1.ConnectionParameter

        get_name(): string;
        set_name(value: string): void;
        get_value(): string;
        set_value(value: string): void;
    }

    module ConnectionParameterDbName {
        // Constructor properties interface
    }

    class ConnectionParameterDbName extends ConnectionParameter {
        // Constructors of Vda-1.ConnectionParameterDbName

        static ['new'](): ConnectionParameterDbName;
    }

    module ConnectionParameterHost {
        // Constructor properties interface
    }

    class ConnectionParameterHost extends ConnectionParameter {
        // Constructors of Vda-1.ConnectionParameterHost

        static ['new'](): ConnectionParameterHost;
    }

    module ConnectionParameterPort {
        // Constructor properties interface
    }

    class ConnectionParameterPort extends ConnectionParameter {
        // Constructors of Vda-1.ConnectionParameterPort

        static ['new'](): ConnectionParameterPort;
    }

    module ConnectionParameterUserName {
        // Constructor properties interface
    }

    class ConnectionParameterUserName extends ConnectionParameter {
        // Constructors of Vda-1.ConnectionParameterUserName

        static ['new'](): ConnectionParameterUserName;
    }

    module ConnectionParameterPassword {
        // Constructor properties interface
    }

    class ConnectionParameterPassword extends ConnectionParameter {
        // Constructors of Vda-1.ConnectionParameterPassword

        static ['new'](): ConnectionParameterPassword;
    }

    module ConnectionParameters {
        // Constructor properties interface
    }

    class ConnectionParameters extends Gee.HashMap {
        // Constructors of Vda-1.ConnectionParameters

        static ['new'](cnc_str: string): ConnectionParameters;

        // Owm methods of Vda-1.ConnectionParameters

        parse(cnstring: string): void;
        to_string(): string;
        has_param(name: string): boolean;
    }

    module Expression {
        // Constructor properties interface
    }

    class Expression<A extends GObject.Object = GObject.Object> extends Gee.ArrayList {
        // Constructors of Vda-1.Expression

        static ['new'](): Expression;

        // Owm methods of Vda-1.Expression

        to_string(): string;
    }

    module ExpressionField {
        // Constructor properties interface
    }

    class ExpressionField<A extends GObject.Object = GObject.Object> extends Expression<A> {
        // Constructors of Vda-1.ExpressionField

        static ['new'](): ExpressionField;
    }

    module ExpressionOperator {
        // Constructor properties interface
    }

    class ExpressionOperator<A extends GObject.Object = GObject.Object> extends Expression<A> {
        // Constructors of Vda-1.ExpressionOperator

        static ['new'](): ExpressionOperator;
    }

    module ExpressionOperatorGroup {
        // Constructor properties interface
    }

    class ExpressionOperatorGroup<A extends GObject.Object = GObject.Object> extends ExpressionOperator<A> {
        // Constructors of Vda-1.ExpressionOperatorGroup

        static ['new'](): ExpressionOperatorGroup;
    }

    module ExpressionOperatorMultiterm {
        // Constructor properties interface
    }

    class ExpressionOperatorMultiterm<A extends GObject.Object = GObject.Object> extends ExpressionOperator<A> {
        // Constructors of Vda-1.ExpressionOperatorMultiterm

        static ['new'](): ExpressionOperatorMultiterm;
    }

    module ExpressionOperatorAnd {
        // Constructor properties interface
    }

    class ExpressionOperatorAnd<A extends GObject.Object = GObject.Object> extends ExpressionOperatorMultiterm<A> {
        // Constructors of Vda-1.ExpressionOperatorAnd

        static ['new'](): ExpressionOperatorAnd;
    }

    module ExpressionOperatorOr {
        // Constructor properties interface
    }

    class ExpressionOperatorOr<A extends GObject.Object = GObject.Object> extends ExpressionOperatorMultiterm<A> {
        // Constructors of Vda-1.ExpressionOperatorOr

        static ['new'](): ExpressionOperatorOr;
    }

    module ExpressionOperatorBinaryterm {
        // Constructor properties interface
    }

    class ExpressionOperatorBinaryterm<A extends GObject.Object = GObject.Object> extends ExpressionOperator<A> {
        // Constructors of Vda-1.ExpressionOperatorBinaryterm

        static ['new'](): ExpressionOperatorBinaryterm;
    }

    module ExpressionOperatorEq {
        // Constructor properties interface
    }

    class ExpressionOperatorEq<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorEq

        static ['new'](): ExpressionOperatorEq;
    }

    module ExpressionOperatorNotEq {
        // Constructor properties interface
    }

    class ExpressionOperatorNotEq<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorNotEq

        static ['new'](): ExpressionOperatorNotEq;
    }

    module ExpressionOperatorDiff {
        // Constructor properties interface
    }

    class ExpressionOperatorDiff<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorDiff

        static ['new'](): ExpressionOperatorDiff;
    }

    module ExpressionOperatorGt {
        // Constructor properties interface
    }

    class ExpressionOperatorGt<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorGt

        static ['new'](): ExpressionOperatorGt;
    }

    module ExpressionOperatorLt {
        // Constructor properties interface
    }

    class ExpressionOperatorLt<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorLt

        static ['new'](): ExpressionOperatorLt;
    }

    module ExpressionOperatorGeq {
        // Constructor properties interface
    }

    class ExpressionOperatorGeq<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorGeq

        static ['new'](): ExpressionOperatorGeq;
    }

    module ExpressionOperatorLeq {
        // Constructor properties interface
    }

    class ExpressionOperatorLeq<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorLeq

        static ['new'](): ExpressionOperatorLeq;
    }

    module ExpressionOperatorRegexp {
        // Constructor properties interface
    }

    class ExpressionOperatorRegexp<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorRegexp

        static ['new'](): ExpressionOperatorRegexp;
    }

    module ExpressionOperatorStar {
        // Constructor properties interface
    }

    class ExpressionOperatorStar<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorStar

        static ['new'](): ExpressionOperatorStar;
    }

    module ExpressionOperatorDiv {
        // Constructor properties interface
    }

    class ExpressionOperatorDiv<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorDiv

        static ['new'](): ExpressionOperatorDiv;
    }

    module ExpressionOperatorIn {
        // Constructor properties interface
    }

    class ExpressionOperatorIn<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorIn

        static ['new'](): ExpressionOperatorIn;
    }

    module ExpressionOperatorNotIn {
        // Constructor properties interface
    }

    class ExpressionOperatorNotIn<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorNotIn

        static ['new'](): ExpressionOperatorNotIn;
    }

    module ExpressionOperatorConcatenate {
        // Constructor properties interface
    }

    class ExpressionOperatorConcatenate<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorConcatenate

        static ['new'](): ExpressionOperatorConcatenate;
    }

    module ExpressionOperatorSimilarTo {
        // Constructor properties interface
    }

    class ExpressionOperatorSimilarTo<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorSimilarTo

        static ['new'](): ExpressionOperatorSimilarTo;
    }

    module ExpressionOperatorLike {
        // Constructor properties interface
    }

    class ExpressionOperatorLike<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorLike

        static ['new'](): ExpressionOperatorLike;
    }

    module ExpressionOperatorNotLike {
        // Constructor properties interface
    }

    class ExpressionOperatorNotLike<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorNotLike

        static ['new'](): ExpressionOperatorNotLike;
    }

    module ExpressionOperatorIlike {
        // Constructor properties interface
    }

    class ExpressionOperatorIlike<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorIlike

        static ['new'](): ExpressionOperatorIlike;
    }

    module ExpressionOperatorNotIlike {
        // Constructor properties interface
    }

    class ExpressionOperatorNotIlike<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorNotIlike

        static ['new'](): ExpressionOperatorNotIlike;
    }

    module ExpressionOperatorBinaryUnaryterm {
        // Constructor properties interface
    }

    class ExpressionOperatorBinaryUnaryterm<A extends GObject.Object = GObject.Object> extends ExpressionOperator<A> {
        // Constructors of Vda-1.ExpressionOperatorBinaryUnaryterm

        static ['new'](): ExpressionOperatorBinaryUnaryterm;
    }

    module ExpressionOperatorMinus {
        // Constructor properties interface
    }

    class ExpressionOperatorMinus<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorBinaryUnaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorMinus

        static ['new'](): ExpressionOperatorMinus;
    }

    module ExpressionOperatorPlus {
        // Constructor properties interface
    }

    class ExpressionOperatorPlus<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorBinaryUnaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorPlus

        static ['new'](): ExpressionOperatorPlus;
    }

    module ExpressionOperatorInitialUnaryterm {
        // Constructor properties interface
    }

    class ExpressionOperatorInitialUnaryterm<A extends GObject.Object = GObject.Object> extends ExpressionOperator<A> {
        // Constructors of Vda-1.ExpressionOperatorInitialUnaryterm

        static ['new'](): ExpressionOperatorInitialUnaryterm;
    }

    module ExpressionOperatorNot {
        // Constructor properties interface
    }

    class ExpressionOperatorNot<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorInitialUnaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorNot

        static ['new'](): ExpressionOperatorNot;
    }

    module ExpressionOperatorFinalUnaryterm {
        // Constructor properties interface
    }

    class ExpressionOperatorFinalUnaryterm<A extends GObject.Object = GObject.Object> extends ExpressionOperator<A> {
        // Constructors of Vda-1.ExpressionOperatorFinalUnaryterm

        static ['new'](): ExpressionOperatorFinalUnaryterm;
    }

    module ExpressionOperatorIs {
        // Constructor properties interface
    }

    class ExpressionOperatorIs<A extends GObject.Object = GObject.Object> extends ExpressionOperatorFinalUnaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorIs

        static ['new'](): ExpressionOperatorIs;
    }

    module ExpressionOperatorIsNot {
        // Constructor properties interface
    }

    class ExpressionOperatorIsNot<A extends GObject.Object = GObject.Object> extends ExpressionOperatorIs<A> {
        // Constructors of Vda-1.ExpressionOperatorIsNot

        static ['new'](): ExpressionOperatorIsNot;
    }

    module ExpressionOperatorIsNull {
        // Constructor properties interface
    }

    class ExpressionOperatorIsNull<A extends GObject.Object = GObject.Object> extends ExpressionOperatorIs<A> {
        // Constructors of Vda-1.ExpressionOperatorIsNull

        static ['new'](): ExpressionOperatorIsNull;
    }

    module ExpressionOperatorIsNotNull {
        // Constructor properties interface
    }

    class ExpressionOperatorIsNotNull<A extends GObject.Object = GObject.Object> extends ExpressionOperatorIsNot<A> {
        // Constructors of Vda-1.ExpressionOperatorIsNotNull

        static ['new'](): ExpressionOperatorIsNotNull;
    }

    module ExpressionOperatorIsTrue {
        // Constructor properties interface
    }

    class ExpressionOperatorIsTrue<A extends GObject.Object = GObject.Object> extends ExpressionOperatorIs<A> {
        // Constructors of Vda-1.ExpressionOperatorIsTrue

        static ['new'](): ExpressionOperatorIsTrue;
    }

    module ExpressionOperatorIsNotTrue {
        // Constructor properties interface
    }

    class ExpressionOperatorIsNotTrue<A extends GObject.Object = GObject.Object> extends ExpressionOperatorIsNot<A> {
        // Constructors of Vda-1.ExpressionOperatorIsNotTrue

        static ['new'](): ExpressionOperatorIsNotTrue;
    }

    module ExpressionOperatorIsFalse {
        // Constructor properties interface
    }

    class ExpressionOperatorIsFalse<A extends GObject.Object = GObject.Object> extends ExpressionOperatorIs<A> {
        // Constructors of Vda-1.ExpressionOperatorIsFalse

        static ['new'](): ExpressionOperatorIsFalse;
    }

    module ExpressionOperatorIsNotFalse {
        // Constructor properties interface
    }

    class ExpressionOperatorIsNotFalse<A extends GObject.Object = GObject.Object> extends ExpressionOperatorIsNot<A> {
        // Constructors of Vda-1.ExpressionOperatorIsNotFalse

        static ['new'](): ExpressionOperatorIsNotFalse;
    }

    module ExpressionOperatorIsNotUnknown {
        // Constructor properties interface
    }

    class ExpressionOperatorIsNotUnknown<A extends GObject.Object = GObject.Object> extends ExpressionOperatorIsNot<A> {
        // Constructors of Vda-1.ExpressionOperatorIsNotUnknown

        static ['new'](): ExpressionOperatorIsNotUnknown;
    }

    module ExpressionOperatorIsUnknown {
        // Constructor properties interface
    }

    class ExpressionOperatorIsUnknown<A extends GObject.Object = GObject.Object> extends ExpressionOperatorIs<A> {
        // Constructors of Vda-1.ExpressionOperatorIsUnknown

        static ['new'](): ExpressionOperatorIsUnknown;
    }

    module ExpressionOperatorIsDistinct {
        // Constructor properties interface
    }

    class ExpressionOperatorIsDistinct<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorBinaryterm<A> {
        // Constructors of Vda-1.ExpressionOperatorIsDistinct

        static ['new'](): ExpressionOperatorIsDistinct;
    }

    module ExpressionOperatorIsNotDistinct {
        // Constructor properties interface
    }

    class ExpressionOperatorIsNotDistinct<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorIsDistinct<A> {
        // Constructors of Vda-1.ExpressionOperatorIsNotDistinct

        static ['new'](): ExpressionOperatorIsNotDistinct;
    }

    module ExpressionOperatorIsDistinctFrom {
        // Constructor properties interface
    }

    class ExpressionOperatorIsDistinctFrom<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorIsDistinct<A> {
        // Constructors of Vda-1.ExpressionOperatorIsDistinctFrom

        static ['new'](): ExpressionOperatorIsDistinctFrom;
    }

    module ExpressionOperatorIsNotDistinctFrom {
        // Constructor properties interface
    }

    class ExpressionOperatorIsNotDistinctFrom<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorIsNotDistinct<A> {
        // Constructors of Vda-1.ExpressionOperatorIsNotDistinctFrom

        static ['new'](): ExpressionOperatorIsNotDistinctFrom;
    }

    module ExpressionOperatorThreeterm {
        // Constructor properties interface
    }

    class ExpressionOperatorThreeterm<A extends GObject.Object = GObject.Object> extends ExpressionOperator<A> {
        // Constructors of Vda-1.ExpressionOperatorThreeterm

        static ['new'](): ExpressionOperatorThreeterm;
    }

    module ExpressionOperatorBetween {
        // Constructor properties interface
    }

    class ExpressionOperatorBetween<A extends GObject.Object = GObject.Object> extends ExpressionOperatorThreeterm<A> {
        // Constructors of Vda-1.ExpressionOperatorBetween

        static ['new'](): ExpressionOperatorBetween;
    }

    module ExpressionOperatorBetweenAnd {
        // Constructor properties interface
    }

    class ExpressionOperatorBetweenAnd<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBetween<A> {
        // Constructors of Vda-1.ExpressionOperatorBetweenAnd

        static ['new'](): ExpressionOperatorBetweenAnd;
    }

    module ExpressionOperatorNotBetween {
        // Constructor properties interface
    }

    class ExpressionOperatorNotBetween<A extends GObject.Object = GObject.Object> extends ExpressionOperatorBetween<A> {
        // Constructors of Vda-1.ExpressionOperatorNotBetween

        static ['new'](): ExpressionOperatorNotBetween;
    }

    module ExpressionOperatorNotBetweenAnd {
        // Constructor properties interface
    }

    class ExpressionOperatorNotBetweenAnd<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorNotBetween<A> {
        // Constructors of Vda-1.ExpressionOperatorNotBetweenAnd

        static ['new'](): ExpressionOperatorNotBetweenAnd;
    }

    module ExpressionOperatorBetweenSymmetric {
        // Constructor properties interface
    }

    class ExpressionOperatorBetweenSymmetric<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorBetween<A> {
        // Constructors of Vda-1.ExpressionOperatorBetweenSymmetric

        static ['new'](): ExpressionOperatorBetweenSymmetric;
    }

    module ExpressionOperatorBetweenSymmetricAnd {
        // Constructor properties interface
    }

    class ExpressionOperatorBetweenSymmetricAnd<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorBetweenSymmetric<A> {
        // Constructors of Vda-1.ExpressionOperatorBetweenSymmetricAnd

        static ['new'](): ExpressionOperatorBetweenSymmetricAnd;
    }

    module ExpressionOperatorNotBetweenSymmetric {
        // Constructor properties interface
    }

    class ExpressionOperatorNotBetweenSymmetric<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorBetweenSymmetric<A> {
        // Constructors of Vda-1.ExpressionOperatorNotBetweenSymmetric

        static ['new'](): ExpressionOperatorNotBetweenSymmetric;
    }

    module ExpressionOperatorNotBetweenSymmetricAnd {
        // Constructor properties interface
    }

    class ExpressionOperatorNotBetweenSymmetricAnd<
        A extends GObject.Object = GObject.Object,
    > extends ExpressionOperatorNotBetweenSymmetric<A> {
        // Constructors of Vda-1.ExpressionOperatorNotBetweenSymmetricAnd

        static ['new'](): ExpressionOperatorNotBetweenSymmetricAnd;
    }

    module ExpressionValue {
        // Constructor properties interface
    }

    class ExpressionValue<A extends GObject.Object = GObject.Object> extends Expression<A> {
        // Constructors of Vda-1.ExpressionValue

        static ['new'](): ExpressionValue;
    }

    module ExpressionValueParameter {
        // Constructor properties interface
    }

    class ExpressionValueParameter<A extends GObject.Object = GObject.Object> extends ExpressionValue<A> {
        // Constructors of Vda-1.ExpressionValueParameter

        static ['new'](): ExpressionValueParameter;
    }

    module HashList {
        // Constructor properties interface
    }

    class HashList<A extends GObject.Object = GObject.Object> extends Gee.ArrayList {
        // Constructors of Vda-1.HashList

        static ['new'](): HashList;
    }

    module InvalidQuery {
        // Constructor properties interface
    }

    class InvalidQuery extends GObject.Object {
        // Own properties of Vda-1.InvalidQuery

        message: string;

        // Constructors of Vda-1.InvalidQuery

        static ['new'](msg: string): InvalidQuery;

        // Owm methods of Vda-1.InvalidQuery

        get_message(): string;
        set_message(value: string): void;
    }

    module InvalidPreparedQuery {
        // Constructor properties interface
    }

    class InvalidPreparedQuery extends InvalidQuery {
        // Constructors of Vda-1.InvalidPreparedQuery

        static ['new'](msg: string): InvalidPreparedQuery;
    }

    module InvalidResult {
        // Constructor properties interface
    }

    class InvalidResult extends GObject.Object {
        // Own properties of Vda-1.InvalidResult

        message: string;

        // Constructors of Vda-1.InvalidResult

        static ['new'](msg: string): InvalidResult;

        // Owm methods of Vda-1.InvalidResult

        get_message(): string;
        set_message(value: string): void;
    }

    module Parameters {
        // Constructor properties interface
    }

    class Parameters extends Gee.HashMap {
        // Constructors of Vda-1.Parameters

        static ['new'](): Parameters;
    }

    module Parser {
        // Constructor properties interface
    }

    class Parser extends GObject.Object {
        // Constructors of Vda-1.Parser

        static ['new'](): Parser;
    }

    module TableReference {
        // Constructor properties interface
    }

    class TableReference extends GObject.Object {
        // Constructors of Vda-1.TableReference

        static ['new'](): TableReference;
    }

    module Value {
        // Constructor properties interface
    }

    class Value extends GObject.Object {
        // Constructors of Vda-1.Value

        static ['new'](): Value;

        // Owm methods of Vda-1.Value

        force_value(val: GObject.Value): boolean;
        from_value(val: GObject.Value): boolean;
        cast(type: GObject.GType): SqlValue;
        is_compatible(type: GObject.GType): boolean;
        parse(str: string): boolean;
        to_gvalue(): void;
        to_string(): string;
        to_string_quoted(): string;
        to_sql_expression(): string;
    }

    module ValueNull {
        // Constructor properties interface
    }

    class ValueNull extends Value {
        // Constructors of Vda-1.ValueNull

        static ['new'](): ValueNull;
    }

    module ValueString {
        // Constructor properties interface
    }

    class ValueString extends Value {
        // Constructors of Vda-1.ValueString

        static ['new'](): ValueString;
    }

    module ValueXml {
        // Constructor properties interface
    }

    class ValueXml extends ValueString {
        // Constructors of Vda-1.ValueXml

        static ['new'](): ValueXml;
    }

    module ValueJson {
        // Constructor properties interface
    }

    class ValueJson extends ValueString {
        // Constructors of Vda-1.ValueJson

        static ['new'](): ValueJson;
    }

    module ValueText {
        // Constructor properties interface
    }

    class ValueText extends ValueString {
        // Constructors of Vda-1.ValueText

        static ['new'](): ValueText;
    }

    module ValueName {
        // Constructor properties interface
    }

    class ValueName extends ValueString {
        // Constructors of Vda-1.ValueName

        static ['new'](): ValueName;
    }

    module ValueBool {
        // Constructor properties interface
    }

    class ValueBool extends Value {
        // Constructors of Vda-1.ValueBool

        static ['new'](): ValueBool;
    }

    module ValueBit {
        // Constructor properties interface
    }

    class ValueBit extends ValueBool {
        // Constructors of Vda-1.ValueBit

        static ['new'](): ValueBit;
    }

    module ValueInteger {
        // Constructor properties interface
    }

    class ValueInteger extends Value {
        // Constructors of Vda-1.ValueInteger

        static ['new'](): ValueInteger;
    }

    module ValueByte {
        // Constructor properties interface
    }

    class ValueByte extends ValueInteger {
        // Constructors of Vda-1.ValueByte

        static ['new'](): ValueByte;
    }

    module ValueInt2 {
        // Constructor properties interface
    }

    class ValueInt2 extends ValueInteger {
        // Constructors of Vda-1.ValueInt2

        static ['new'](): ValueInt2;
    }

    module ValueInt4 {
        // Constructor properties interface
    }

    class ValueInt4 extends ValueInteger {
        // Constructors of Vda-1.ValueInt4

        static ['new'](): ValueInt4;
    }

    module ValueInt8 {
        // Constructor properties interface
    }

    class ValueInt8 extends ValueInteger {
        // Constructors of Vda-1.ValueInt8

        static ['new'](): ValueInt8;
    }

    module ValueUnsignedInteger {
        // Constructor properties interface
    }

    class ValueUnsignedInteger extends Value {
        // Constructors of Vda-1.ValueUnsignedInteger

        static ['new'](): ValueUnsignedInteger;
    }

    module ValueUnsignedByte {
        // Constructor properties interface
    }

    class ValueUnsignedByte extends ValueUnsignedInteger {
        // Constructors of Vda-1.ValueUnsignedByte

        static ['new'](): ValueUnsignedByte;
    }

    module ValueUnsignedInt2 {
        // Constructor properties interface
    }

    class ValueUnsignedInt2 extends ValueUnsignedInteger {
        // Constructors of Vda-1.ValueUnsignedInt2

        static ['new'](): ValueUnsignedInt2;
    }

    module ValueUnsignedInt4 {
        // Constructor properties interface
    }

    class ValueUnsignedInt4 extends ValueUnsignedInteger {
        // Constructors of Vda-1.ValueUnsignedInt4

        static ['new'](): ValueUnsignedInt4;
    }

    module ValueUnsignedInt8 {
        // Constructor properties interface
    }

    class ValueUnsignedInt8 extends ValueUnsignedInteger {
        // Constructors of Vda-1.ValueUnsignedInt8

        static ['new'](): ValueUnsignedInt8;
    }

    module ValueOid {
        // Constructor properties interface
    }

    class ValueOid extends ValueInteger {
        // Constructors of Vda-1.ValueOid

        static ['new'](): ValueOid;
    }

    module ValueNumeric {
        // Constructor properties interface
    }

    class ValueNumeric extends Value {
        // Constructors of Vda-1.ValueNumeric

        static ['new'](): ValueNumeric;

        // Owm methods of Vda-1.ValueNumeric

        format(str: string): string;
    }

    module ValueFloat {
        // Constructor properties interface
    }

    class ValueFloat extends ValueNumeric {
        // Constructors of Vda-1.ValueFloat

        static ['new'](): ValueFloat;
    }

    module ValueDouble {
        // Constructor properties interface
    }

    class ValueDouble extends ValueNumeric {
        // Constructors of Vda-1.ValueDouble

        static ['new'](): ValueDouble;
    }

    module ValueMoney {
        // Constructor properties interface
    }

    class ValueMoney extends ValueNumeric {
        // Constructors of Vda-1.ValueMoney

        static ['new'](): ValueMoney;
    }

    module ValueTimestamp {
        // Constructor properties interface
    }

    class ValueTimestamp extends Value {
        // Constructors of Vda-1.ValueTimestamp

        static ['new'](): ValueTimestamp;

        // Owm methods of Vda-1.ValueTimestamp

        format_local(): string;
        format_utc(): string;
        format_locale(): string;
    }

    module ValueTimestampNtz {
        // Constructor properties interface
    }

    class ValueTimestampNtz extends ValueTimestamp {
        // Constructors of Vda-1.ValueTimestampNtz

        static ['new'](): ValueTimestampNtz;
    }

    module ValueTime {
        // Constructor properties interface
    }

    class ValueTime extends ValueTimestamp {
        // Constructors of Vda-1.ValueTime

        static ['new'](): ValueTime;
    }

    module ValueTimeNtz {
        // Constructor properties interface
    }

    class ValueTimeNtz extends ValueTimestampNtz {
        // Constructors of Vda-1.ValueTimeNtz

        static ['new'](): ValueTimeNtz;
    }

    module ValueDate {
        // Constructor properties interface
    }

    class ValueDate extends Value {
        // Own fields of Vda-1.ValueDate

        d: GLib.Date;

        // Constructors of Vda-1.ValueDate

        static ['new'](): ValueDate;
    }

    module ValueBinary {
        // Constructor properties interface
    }

    class ValueBinary extends Value {
        // Constructors of Vda-1.ValueBinary

        static with_data(d: Uint8Array): ValueBinary;

        static take(d: Uint8Array): ValueBinary;

        static ['new'](): ValueBinary;
    }

    module ValueMathExp {
        // Constructor properties interface
    }

    class ValueMathExp extends GObject.Object {
        // Own properties of Vda-1.ValueMathExp

        parameters: SqlParameters;

        // Constructors of Vda-1.ValueMathExp

        static ['new'](): ValueMathExp;

        // Owm methods of Vda-1.ValueMathExp

        get_parameters(): SqlParameters;
        set_parameters(value: SqlParameters): void;
    }

    class AffectedRowsClass {}

    class AffectedRowsPrivate {}

    class CommandDeleteClass {}

    class CommandDeletePrivate {}

    class CommandInsertClass {}

    class CommandInsertPrivate {}

    class CommandModificationClass {}

    class CommandModificationPrivate {}

    class CommandSelectClass {}

    class CommandSelectPrivate {}

    class CommandUpdateClass {}

    class CommandUpdatePrivate {}

    class ConnectionParameterClass {}

    class ConnectionParameterPrivate {}

    class ConnectionParameterDbNameClass {}

    class ConnectionParameterDbNamePrivate {}

    class ConnectionParameterHostClass {}

    class ConnectionParameterHostPrivate {}

    class ConnectionParameterPortClass {}

    class ConnectionParameterPortPrivate {}

    class ConnectionParameterUserNameClass {}

    class ConnectionParameterUserNamePrivate {}

    class ConnectionParameterPasswordClass {}

    class ConnectionParameterPasswordPrivate {}

    class ConnectionParametersClass {}

    class ConnectionParametersPrivate {}

    class ExpressionClass {}

    class ExpressionPrivate {}

    class ExpressionFieldClass {}

    class ExpressionFieldPrivate {}

    class ExpressionOperatorClass {}

    class ExpressionOperatorPrivate {}

    class ExpressionOperatorGroupClass {}

    class ExpressionOperatorGroupPrivate {}

    class ExpressionOperatorMultitermClass {}

    class ExpressionOperatorMultitermPrivate {}

    class ExpressionOperatorAndClass {}

    class ExpressionOperatorAndPrivate {}

    class ExpressionOperatorOrClass {}

    class ExpressionOperatorOrPrivate {}

    class ExpressionOperatorBinarytermClass {}

    class ExpressionOperatorBinarytermPrivate {}

    class ExpressionOperatorEqClass {}

    class ExpressionOperatorEqPrivate {}

    class ExpressionOperatorNotEqClass {}

    class ExpressionOperatorNotEqPrivate {}

    class ExpressionOperatorDiffClass {}

    class ExpressionOperatorDiffPrivate {}

    class ExpressionOperatorGtClass {}

    class ExpressionOperatorGtPrivate {}

    class ExpressionOperatorLtClass {}

    class ExpressionOperatorLtPrivate {}

    class ExpressionOperatorGeqClass {}

    class ExpressionOperatorGeqPrivate {}

    class ExpressionOperatorLeqClass {}

    class ExpressionOperatorLeqPrivate {}

    class ExpressionOperatorRegexpClass {}

    class ExpressionOperatorRegexpPrivate {}

    class ExpressionOperatorStarClass {}

    class ExpressionOperatorStarPrivate {}

    class ExpressionOperatorDivClass {}

    class ExpressionOperatorDivPrivate {}

    class ExpressionOperatorInClass {}

    class ExpressionOperatorInPrivate {}

    class ExpressionOperatorNotInClass {}

    class ExpressionOperatorNotInPrivate {}

    class ExpressionOperatorConcatenateClass {}

    class ExpressionOperatorConcatenatePrivate {}

    class ExpressionOperatorSimilarToClass {}

    class ExpressionOperatorSimilarToPrivate {}

    class ExpressionOperatorLikeClass {}

    class ExpressionOperatorLikePrivate {}

    class ExpressionOperatorNotLikeClass {}

    class ExpressionOperatorNotLikePrivate {}

    class ExpressionOperatorIlikeClass {}

    class ExpressionOperatorIlikePrivate {}

    class ExpressionOperatorNotIlikeClass {}

    class ExpressionOperatorNotIlikePrivate {}

    class ExpressionOperatorBinaryUnarytermClass {}

    class ExpressionOperatorBinaryUnarytermPrivate {}

    class ExpressionOperatorMinusClass {}

    class ExpressionOperatorMinusPrivate {}

    class ExpressionOperatorPlusClass {}

    class ExpressionOperatorPlusPrivate {}

    class ExpressionOperatorInitialUnarytermClass {}

    class ExpressionOperatorInitialUnarytermPrivate {}

    class ExpressionOperatorNotClass {}

    class ExpressionOperatorNotPrivate {}

    class ExpressionOperatorFinalUnarytermClass {}

    class ExpressionOperatorFinalUnarytermPrivate {}

    class ExpressionOperatorIsClass {}

    class ExpressionOperatorIsPrivate {}

    class ExpressionOperatorIsNotClass {}

    class ExpressionOperatorIsNotPrivate {}

    class ExpressionOperatorIsNullClass {}

    class ExpressionOperatorIsNullPrivate {}

    class ExpressionOperatorIsNotNullClass {}

    class ExpressionOperatorIsNotNullPrivate {}

    class ExpressionOperatorIsTrueClass {}

    class ExpressionOperatorIsTruePrivate {}

    class ExpressionOperatorIsNotTrueClass {}

    class ExpressionOperatorIsNotTruePrivate {}

    class ExpressionOperatorIsFalseClass {}

    class ExpressionOperatorIsFalsePrivate {}

    class ExpressionOperatorIsNotFalseClass {}

    class ExpressionOperatorIsNotFalsePrivate {}

    class ExpressionOperatorIsNotUnknownClass {}

    class ExpressionOperatorIsNotUnknownPrivate {}

    class ExpressionOperatorIsUnknownClass {}

    class ExpressionOperatorIsUnknownPrivate {}

    class ExpressionOperatorIsDistinctClass {}

    class ExpressionOperatorIsDistinctPrivate {}

    class ExpressionOperatorIsNotDistinctClass {}

    class ExpressionOperatorIsNotDistinctPrivate {}

    class ExpressionOperatorIsDistinctFromClass {}

    class ExpressionOperatorIsDistinctFromPrivate {}

    class ExpressionOperatorIsNotDistinctFromClass {}

    class ExpressionOperatorIsNotDistinctFromPrivate {}

    class ExpressionOperatorThreetermClass {}

    class ExpressionOperatorThreetermPrivate {}

    class ExpressionOperatorBetweenClass {}

    class ExpressionOperatorBetweenPrivate {}

    class ExpressionOperatorBetweenAndClass {}

    class ExpressionOperatorBetweenAndPrivate {}

    class ExpressionOperatorNotBetweenClass {}

    class ExpressionOperatorNotBetweenPrivate {}

    class ExpressionOperatorNotBetweenAndClass {}

    class ExpressionOperatorNotBetweenAndPrivate {}

    class ExpressionOperatorBetweenSymmetricClass {}

    class ExpressionOperatorBetweenSymmetricPrivate {}

    class ExpressionOperatorBetweenSymmetricAndClass {}

    class ExpressionOperatorBetweenSymmetricAndPrivate {}

    class ExpressionOperatorNotBetweenSymmetricClass {}

    class ExpressionOperatorNotBetweenSymmetricPrivate {}

    class ExpressionOperatorNotBetweenSymmetricAndClass {}

    class ExpressionOperatorNotBetweenSymmetricAndPrivate {}

    class ExpressionValueClass {}

    class ExpressionValuePrivate {}

    class ExpressionValueParameterClass {}

    class ExpressionValueParameterPrivate {}

    class HashListClass {}

    class HashListPrivate {}

    class InvalidQueryClass {}

    class InvalidQueryPrivate {}

    class InvalidPreparedQueryClass {}

    class InvalidPreparedQueryPrivate {}

    class InvalidResultClass {}

    class InvalidResultPrivate {}

    class ParametersClass {}

    class ParametersPrivate {}

    class ParserClass {}

    class ParserPrivate {}

    class TableReferenceClass {}

    class TableReferencePrivate {}

    class ValueClass {}

    class ValuePrivate {}

    class ValueNullClass {}

    class ValueNullPrivate {}

    class ValueStringClass {}

    class ValueStringPrivate {}

    class ValueXmlClass {}

    class ValueXmlPrivate {}

    class ValueJsonClass {}

    class ValueJsonPrivate {}

    class ValueTextClass {}

    class ValueTextPrivate {}

    class ValueNameClass {}

    class ValueNamePrivate {}

    class ValueBoolClass {}

    class ValueBoolPrivate {}

    class ValueBitClass {}

    class ValueBitPrivate {}

    class ValueIntegerClass {}

    class ValueIntegerPrivate {}

    class ValueByteClass {}

    class ValueBytePrivate {}

    class ValueInt2Class {}

    class ValueInt2Private {}

    class ValueInt4Class {}

    class ValueInt4Private {}

    class ValueInt8Class {}

    class ValueInt8Private {}

    class ValueUnsignedIntegerClass {}

    class ValueUnsignedIntegerPrivate {}

    class ValueUnsignedByteClass {}

    class ValueUnsignedBytePrivate {}

    class ValueUnsignedInt2Class {}

    class ValueUnsignedInt2Private {}

    class ValueUnsignedInt4Class {}

    class ValueUnsignedInt4Private {}

    class ValueUnsignedInt8Class {}

    class ValueUnsignedInt8Private {}

    class ValueOidClass {}

    class ValueOidPrivate {}

    class ValueNumericClass {}

    class ValueNumericPrivate {}

    class ValueFloatClass {}

    class ValueFloatPrivate {}

    class ValueDoubleClass {}

    class ValueDoublePrivate {}

    class ValueMoneyClass {}

    class ValueMoneyPrivate {}

    class ValueTimestampClass {}

    class ValueTimestampPrivate {}

    class ValueTimestampNtzClass {}

    class ValueTimestampNtzPrivate {}

    class ValueTimeClass {}

    class ValueTimePrivate {}

    class ValueTimeNtzClass {}

    class ValueTimeNtzPrivate {}

    class ValueDateClass {}

    class ValueDatePrivate {}

    class ValueBinaryClass {}

    class ValueBinaryPrivate {}

    class ValueMathExpClass {}

    class ValueMathExpPrivate {}

    class MetaObjectIface {}

    class MetaNamedObjectIface {}

    class ColumnModelIface {}

    class ConnectionIface {}

    class ConnectionBlobIface {}

    class ConnectionRolebasedIface {}

    class ConnectionTransactionalIface {}

    class DataObjectIface {}

    class DataCollectionIface {}

    class HashModelIface {}

    class InsertedIface {}

    class ParsedQueryIface {}

    class PreparedQueryIface {}

    class QueryIface {}

    class ResultIface {}

    class RoleIface {}

    class RowModelIface {}

    class SqlAffectedRowsIface {}

    class SqlCommandIface {}

    class SqlCommandConditionalIface {}

    class SqlCommandDeleteIface {}

    class SqlCommandInsertIface {}

    class SqlCommandModificationIface {}

    class SqlCommandParametrizedIface {}

    class SqlCommandSelectIface {}

    class SqlCommandTableRelatedIface {}

    class SqlCommandUpdateIface {}

    class SqlExpressionIface {}

    class SqlExpressionFieldIface {}

    class SqlExpressionOperatorIface {}

    class SqlExpressionOperatorGroupIface {}

    class SqlExpressionOperatorMultitermIface {}

    class SqlExpressionOperatorAndIface {}

    class SqlExpressionOperatorOrIface {}

    class SqlExpressionOperatorBinarytermIface {}

    class SqlExpressionOperatorEqIface {}

    class SqlExpressionOperatorNotEqIface {}

    class SqlExpressionOperatorDiffIface {}

    class SqlExpressionOperatorGtIface {}

    class SqlExpressionOperatorLtIface {}

    class SqlExpressionOperatorGeqIface {}

    class SqlExpressionOperatorLeqIface {}

    class SqlExpressionOperatorRegexpIface {}

    class SqlExpressionOperatorStarIface {}

    class SqlExpressionOperatorDivIface {}

    class SqlExpressionOperatorInIface {}

    class SqlExpressionOperatorNotInIface {}

    class SqlExpressionOperatorConcatenateIface {}

    class SqlExpressionOperatorSimilarToIface {}

    class SqlExpressionOperatorLikeIface {}

    class SqlExpressionOperatorNotLikeIface {}

    class SqlExpressionOperatorIlikeIface {}

    class SqlExpressionOperatorNotIlikeIface {}

    class SqlExpressionOperatorBinaryUnarytermIface {}

    class SqlExpressionOperatorMinusIface {}

    class SqlExpressionOperatorPlusIface {}

    class SqlExpressionOperatorInitialUnarytermIface {}

    class SqlExpressionOperatorNotIface {}

    class SqlExpressionOperatorFinalUnarytermIface {}

    class SqlExpressionOperatorIsIface {}

    class SqlExpressionOperatorIsNotIface {}

    class SqlExpressionOperatorIsNullIface {}

    class SqlExpressionOperatorIsNotNullIface {}

    class SqlExpressionOperatorIsTrueIface {}

    class SqlExpressionOperatorIsNotTrueIface {}

    class SqlExpressionOperatorIsFalseIface {}

    class SqlExpressionOperatorIsNotFalseIface {}

    class SqlExpressionOperatorIsUnknownIface {}

    class SqlExpressionOperatorIsNotUnknownIface {}

    class SqlExpressionOperatorIsDistinctIface {}

    class SqlExpressionOperatorIsNotDistinctIface {}

    class SqlExpressionOperatorIsDistinctFromIface {}

    class SqlExpressionOperatorIsNotDistinctFromIface {}

    class SqlExpressionOperatorThreetermIface {}

    class SqlExpressionOperatorBetweenIface {}

    class SqlExpressionOperatorBetweenAndIface {}

    class SqlExpressionOperatorNotBetweenIface {}

    class SqlExpressionOperatorNotBetweenAndIface {}

    class SqlExpressionOperatorBetweenSymmetricIface {}

    class SqlExpressionOperatorBetweenSymmetricAndIface {}

    class SqlExpressionOperatorNotBetweenSymmetricIface {}

    class SqlExpressionOperatorNotBetweenSymmetricAndIface {}

    class SqlExpressionValueIface {}

    class SqlExpressionValueParameterIface {}

    class SqlParametersIface {}

    class SqlParserIface {}

    class SqlTableReferenceIface {}

    class StringifiableIface {}

    class SqlValueIface {}

    class SqlValueNullIface {}

    class SqlValueBoolIface {}

    class SqlValueBitIface {}

    class SqlValueStringIface {}

    class SqlValueXmlIface {}

    class SqlValueJsonIface {}

    class SqlValueTextIface {}

    class SqlValueNameIface {}

    class SqlValueIntegerIface {}

    class SqlValueByteIface {}

    class SqlValueInt2Iface {}

    class SqlValueInt4Iface {}

    class SqlValueInt8Iface {}

    class SqlValueUnsignedIntegerIface {}

    class SqlValueUnsignedByteIface {}

    class SqlValueUnsignedInt2Iface {}

    class SqlValueUnsignedInt4Iface {}

    class SqlValueUnsignedInt8Iface {}

    class SqlValueOidIface {}

    class SqlValueNumericIface {}

    class SqlValueFloatIface {}

    class SqlValueDoubleIface {}

    class SqlValueMoneyIface {}

    class SqlValueDateIface {}

    class SqlValueTimestampIface {}

    class SqlValueTimestampNtzIface {}

    class SqlValueTimeIface {}

    class SqlValueTimeNtzIface {}

    class SqlValueBinaryIface {}

    class SqlValueBlobIface {}

    class SqlValueBlobOidIface {}

    class SqlValueGeometricPointIface {}

    class SqlValueMathExpIface {}

    class TableModelIface {}

    class TableModelSequentialIface {}

    interface MetaObject {
        // Own properties of Vda-1.MetaObject

        connection: Connection;

        // Owm methods of Vda-1.MetaObject

        get_connection(): Connection;
        set_connection(value: Connection): void;

        // Own virtual methods of Vda-1.MetaObject

        vfunc_get_connection(): Connection;
        vfunc_set_connection(value: Connection): void;
    }

    interface MetaNamedObject {
        // Own properties of Vda-1.MetaNamedObject

        name: string;

        // Owm methods of Vda-1.MetaNamedObject

        get_name(): string;
        set_name(value: string): void;

        // Own virtual methods of Vda-1.MetaNamedObject

        vfunc_get_name(): string;
        vfunc_set_name(value: string): void;
    }

    interface ColumnModel {
        // Own properties of Vda-1.ColumnModel

        readonly name: string;
        readonly data_type: GObject.GType;
        readonly dataType: GObject.GType;

        // Owm methods of Vda-1.ColumnModel

        get_name(): string;
        get_data_type(): GObject.GType;

        // Own virtual methods of Vda-1.ColumnModel

        vfunc_get_name(): string;
        vfunc_get_data_type(): GObject.GType;
    }

    interface Connection {
        // Own properties of Vda-1.Connection

        readonly status: ConnectionStatus;
        parameters: ConnectionParameters;
        readonly is_opened: boolean;
        readonly isOpened: boolean;
        readonly connection_string: string;
        readonly connectionString: string;

        // Owm methods of Vda-1.Connection

        close(_callback_: Gio.AsyncReadyCallback<this>): void;
        close_finish(_res_: Gio.AsyncResult): void;
        open(_callback_: Gio.AsyncReadyCallback<this>): void;
        open_finish(_res_: Gio.AsyncResult): ConnectionStatus;
        open_from_string(cnc_string: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        open_from_string_finish(_res_: Gio.AsyncResult): ConnectionStatus;
        parse_string(sql: string): Query;
        parse_string_prepared(name: string, sql: string): PreparedQuery;
        get_prepared_query(name: string): PreparedQuery;
        query_from_command(cmd: SqlCommand, name: string): PreparedQuery;
        value_to_quoted_string(v: SqlValue): string;
        locale(category: string): string;
        get_status(): ConnectionStatus;
        get_parameters(): ConnectionParameters;
        set_parameters(value: ConnectionParameters): void;
        get_is_opened(): boolean;
        get_connection_string(): string;

        // Own virtual methods of Vda-1.Connection

        vfunc_close(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_close_finish(_res_: Gio.AsyncResult): void;
        vfunc_open(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_open_finish(_res_: Gio.AsyncResult): ConnectionStatus;
        vfunc_open_from_string(cnc_string: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_open_from_string_finish(_res_: Gio.AsyncResult): ConnectionStatus;
        vfunc_parse_string(sql: string): Query;
        vfunc_parse_string_prepared(name: string, sql: string): PreparedQuery;
        vfunc_get_prepared_query(name: string): PreparedQuery;
        vfunc_query_from_command(cmd: SqlCommand, name: string): PreparedQuery;
        vfunc_value_to_quoted_string(v: SqlValue): string;
        vfunc_locale(category: string): string;
        vfunc_get_status(): ConnectionStatus;
        vfunc_get_parameters(): ConnectionParameters;
        vfunc_set_parameters(value: ConnectionParameters): void;
        vfunc_get_is_opened(): boolean;
        vfunc_get_connection_string(): string;
    }

    interface ConnectionBlob {
        // Owm methods of Vda-1.ConnectionBlob

        create(stream: Gio.InputStream): SqlValueBlob;
        ['delete'](val: SqlValueBlob): void;

        // Own virtual methods of Vda-1.ConnectionBlob

        vfunc_create(stream: Gio.InputStream): SqlValueBlob;
        vfunc_delete(val: SqlValueBlob): void;
    }

    interface ConnectionRolebased {
        // Owm methods of Vda-1.ConnectionRolebased

        current_role(): Role;
        create_role(name: string, params: Parameters): Role;

        // Own virtual methods of Vda-1.ConnectionRolebased

        vfunc_current_role(): Role;
        vfunc_create_role(name: string, params: Parameters): Role;
    }

    interface ConnectionTransactional {
        // Owm methods of Vda-1.ConnectionTransactional

        add_savepoint(name: string): boolean;
        delete_savepoint(name: string): boolean;
        rollback_savepoint(name: string): boolean;
        begin_transaction(name: string): boolean;
        commit_transaction(name: string): boolean;
        rollback_transaction(name: string): boolean;

        // Own virtual methods of Vda-1.ConnectionTransactional

        vfunc_add_savepoint(name: string): boolean;
        vfunc_delete_savepoint(name: string): boolean;
        vfunc_rollback_savepoint(name: string): boolean;
        vfunc_begin_transaction(name: string): boolean;
        vfunc_commit_transaction(name: string): boolean;
        vfunc_rollback_transaction(name: string): boolean;
    }

    interface DataObject {
        // Own properties of Vda-1.DataObject

        database_connection: Connection;
        databaseConnection: Connection;
        database_table_name: string;
        databaseTableName: string;
        cancellable: Gio.Cancellable;

        // Owm methods of Vda-1.DataObject

        update_data_from_db(_callback_: Gio.AsyncReadyCallback<this>): void;
        update_data_from_db_finish(_res_: Gio.AsyncResult): void;
        update_data_from_db_pkey(_callback_: Gio.AsyncReadyCallback<this>): void;
        update_data_from_db_pkey_finish(_res_: Gio.AsyncResult): void;
        update_data_from_db_full(use_pkey: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        update_data_from_db_full_finish(_res_: Gio.AsyncResult): void;
        insert_data_into_db(_callback_: Gio.AsyncReadyCallback<this>): void;
        insert_data_into_db_finish(_res_: Gio.AsyncResult): void;
        delete_data_from_db(_callback_: Gio.AsyncReadyCallback<this>): void;
        delete_data_from_db_finish(_res_: Gio.AsyncResult): void;
        delete_data_from_db_pkey(_callback_: Gio.AsyncReadyCallback<this>): void;
        delete_data_from_db_pkey_finish(_res_: Gio.AsyncResult): void;
        delete_data_from_db_full(use_pkey: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        delete_data_from_db_full_finish(_res_: Gio.AsyncResult): void;
        update_data_into_db(_callback_: Gio.AsyncReadyCallback<this>): void;
        update_data_into_db_finish(_res_: Gio.AsyncResult): void;
        update_data_into_db_pkey(_callback_: Gio.AsyncReadyCallback<this>): void;
        update_data_into_db_pkey_finish(_res_: Gio.AsyncResult): void;
        update_data_into_db_full(use_pkey: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        update_data_into_db_full_finish(_res_: Gio.AsyncResult): void;
        update_from_row(table: TableModel, nrow: number): void;
        get_database_connection(): Connection;
        set_database_connection(value: Connection): void;
        get_database_table_name(): string;
        set_database_table_name(value: string): void;
        get_cancellable(): Gio.Cancellable;
        set_cancellable(value: Gio.Cancellable): void;

        // Own virtual methods of Vda-1.DataObject

        vfunc_update_data_from_db(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_update_data_from_db_finish(_res_: Gio.AsyncResult): void;
        vfunc_update_data_from_db_pkey(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_update_data_from_db_pkey_finish(_res_: Gio.AsyncResult): void;
        vfunc_update_data_from_db_full(use_pkey: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_update_data_from_db_full_finish(_res_: Gio.AsyncResult): void;
        vfunc_insert_data_into_db(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_insert_data_into_db_finish(_res_: Gio.AsyncResult): void;
        vfunc_delete_data_from_db(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_delete_data_from_db_finish(_res_: Gio.AsyncResult): void;
        vfunc_delete_data_from_db_pkey(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_delete_data_from_db_pkey_finish(_res_: Gio.AsyncResult): void;
        vfunc_delete_data_from_db_full(use_pkey: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_delete_data_from_db_full_finish(_res_: Gio.AsyncResult): void;
        vfunc_update_data_into_db(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_update_data_into_db_finish(_res_: Gio.AsyncResult): void;
        vfunc_update_data_into_db_pkey(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_update_data_into_db_pkey_finish(_res_: Gio.AsyncResult): void;
        vfunc_update_data_into_db_full(use_pkey: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_update_data_into_db_full_finish(_res_: Gio.AsyncResult): void;
        vfunc_update_from_row(table: TableModel, nrow: number): void;
        vfunc_get_database_connection(): Connection;
        vfunc_set_database_connection(value: Connection): void;
        vfunc_get_database_table_name(): string;
        vfunc_set_database_table_name(value: string): void;
        vfunc_get_cancellable(): Gio.Cancellable;
        vfunc_set_cancellable(value: Gio.Cancellable): void;
    }

    interface DataCollection {
        // Own properties of Vda-1.DataCollection

        database_connection: Connection;
        databaseConnection: Connection;
        readonly parent_property: string;
        readonly parentProperty: string;
        readonly parent: DataObject;
        readonly object_type: GObject.GType;
        readonly objectType: GObject.GType;
        readonly ref_field: string;
        readonly refField: string;
        cancellable: Gio.Cancellable;

        // Owm methods of Vda-1.DataCollection

        get_objects(_callback_: Gio.AsyncReadyCallback<this>): void;
        get_objects_finish(_res_: Gio.AsyncResult): TableModel;
        get_database_connection(): Connection;
        set_database_connection(value: Connection): void;
        get_parent_property(): string;
        get_parent(): DataObject;
        get_object_type(): GObject.GType;
        get_ref_field(): string;
        get_cancellable(): Gio.Cancellable;
        set_cancellable(value: Gio.Cancellable): void;

        // Own virtual methods of Vda-1.DataCollection

        vfunc_get_objects(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_get_objects_finish(_res_: Gio.AsyncResult): TableModel;
        vfunc_get_database_connection(): Connection;
        vfunc_set_database_connection(value: Connection): void;
        vfunc_get_parent_property(): string;
        vfunc_get_parent(): DataObject;
        vfunc_get_object_type(): GObject.GType;
        vfunc_get_ref_field(): string;
        vfunc_get_cancellable(): Gio.Cancellable;
        vfunc_set_cancellable(value: Gio.Cancellable): void;
    }

    interface HashModel {
        // Owm methods of Vda-1.HashModel

        add(object: GObject.Object): void;
        find<T = GObject.Object>(key: GObject.Object): T;
        remove(object: GObject.Object): void;

        // Own virtual methods of Vda-1.HashModel

        vfunc_add(object: GObject.Object): void;
        vfunc_find<T = GObject.Object>(key: GObject.Object): T;
        vfunc_remove(object: GObject.Object): void;
    }

    interface Inserted {
        // Own properties of Vda-1.Inserted

        readonly number: number;
        readonly last_inserted: RowModel;
        readonly lastInserted: RowModel;

        // Owm methods of Vda-1.Inserted

        get_number(): number;
        get_last_inserted(): RowModel;

        // Own virtual methods of Vda-1.Inserted

        vfunc_get_number(): number;
        vfunc_get_last_inserted(): RowModel;
    }

    interface ParsedQuery {
        // Own properties of Vda-1.ParsedQuery

        readonly command: SqlCommand;

        // Owm methods of Vda-1.ParsedQuery

        get_command(): SqlCommand;

        // Own virtual methods of Vda-1.ParsedQuery

        vfunc_get_command(): SqlCommand;
    }

    interface PreparedQuery {
        // Own properties of Vda-1.PreparedQuery

        readonly name: string;
        readonly parameters: SqlParameters;

        // Owm methods of Vda-1.PreparedQuery

        get_name(): string;
        get_parameters(): SqlParameters;

        // Own virtual methods of Vda-1.PreparedQuery

        vfunc_get_name(): string;
        vfunc_get_parameters(): SqlParameters;
    }

    interface Query {
        // Own properties of Vda-1.Query

        readonly sql: string;
        readonly connection: Connection;

        // Owm methods of Vda-1.Query

        execute(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        execute_finish(_res_: Gio.AsyncResult): Result;
        cancel(_callback_: Gio.AsyncReadyCallback<this>): void;
        cancel_finish(_res_: Gio.AsyncResult): void;
        render_sql(): string;
        get_sql(): string;
        get_connection(): Connection;

        // Own virtual methods of Vda-1.Query

        vfunc_execute(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_execute_finish(_res_: Gio.AsyncResult): Result;
        vfunc_cancel(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_cancel_finish(_res_: Gio.AsyncResult): void;
        vfunc_render_sql(): string;
        vfunc_get_sql(): string;
        vfunc_get_connection(): Connection;
    }

    interface Result {}

    interface Role {
        // Own properties of Vda-1.Role

        readonly connection: Connection;

        // Owm methods of Vda-1.Role

        name(_callback_: Gio.AsyncReadyCallback<this>): void;
        name_finish(_res_: Gio.AsyncResult): string;
        membership(_callback_: Gio.AsyncReadyCallback<this>): void;
        membership_finish(_res_: Gio.AsyncResult): HashModel;
        privilages(object: MetaObject, _callback_: Gio.AsyncReadyCallback<this>): void;
        privilages_finish(_res_: Gio.AsyncResult): RoleGrant;
        change_privilages(object: MetaObject, grant: RoleGrant, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_privilages_finish(_res_: Gio.AsyncResult): void;
        get_connection(): Connection;

        // Own virtual methods of Vda-1.Role

        vfunc_name(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_name_finish(_res_: Gio.AsyncResult): string;
        vfunc_membership(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_membership_finish(_res_: Gio.AsyncResult): HashModel;
        vfunc_privilages(object: MetaObject, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_privilages_finish(_res_: Gio.AsyncResult): RoleGrant;
        vfunc_change_privilages(object: MetaObject, grant: RoleGrant, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_privilages_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_connection(): Connection;
    }

    interface RowModel {
        // Own properties of Vda-1.RowModel

        readonly n_columns: number;
        readonly nColumns: number;

        // Owm methods of Vda-1.RowModel

        get_column(name: string): ColumnModel;
        get_column_at(col: number): ColumnModel;
        get_value(name: string): SqlValue;
        get_value_at(col: number): SqlValue;
        get_string(name: string): string;
        get_string_at(col: number): string;
        get_n_columns(): number;

        // Own virtual methods of Vda-1.RowModel

        vfunc_get_column(name: string): ColumnModel;
        vfunc_get_column_at(col: number): ColumnModel;
        vfunc_get_value(name: string): SqlValue;
        vfunc_get_value_at(col: number): SqlValue;
        vfunc_get_string(name: string): string;
        vfunc_get_string_at(col: number): string;
        vfunc_get_n_columns(): number;
    }

    interface SqlAffectedRows {
        // Own properties of Vda-1.SqlAffectedRows

        readonly number: number;

        // Owm methods of Vda-1.SqlAffectedRows

        get_number(): number;

        // Own virtual methods of Vda-1.SqlAffectedRows

        vfunc_get_number(): number;
    }

    interface SqlCommand {
        // Own properties of Vda-1.SqlCommand

        readonly connection: Connection;

        // Owm methods of Vda-1.SqlCommand

        get_connection(): Connection;

        // Own virtual methods of Vda-1.SqlCommand

        vfunc_get_connection(): Connection;
    }

    interface SqlCommandConditional {
        // Own properties of Vda-1.SqlCommandConditional

        readonly condition: SqlExpression;

        // Owm methods of Vda-1.SqlCommandConditional

        get_condition(): SqlExpression;

        // Own virtual methods of Vda-1.SqlCommandConditional

        vfunc_get_condition(): SqlExpression;
    }

    interface SqlCommandDelete {
        // Owm methods of Vda-1.SqlCommandDelete

        stringify(): string;
        to_query(name: string): Query;
        parse(sql: string): void;

        // Own virtual methods of Vda-1.SqlCommandDelete

        vfunc_stringify(): string;
        vfunc_to_query(name: string): Query;
        vfunc_parse(sql: string): void;
    }

    interface SqlCommandInsert {
        // Owm methods of Vda-1.SqlCommandInsert

        stringify(): string;
        to_query(name: string): Query;
        parse(sql: string): void;

        // Own virtual methods of Vda-1.SqlCommandInsert

        vfunc_stringify(): string;
        vfunc_to_query(name: string): Query;
        vfunc_parse(sql: string): void;
    }

    interface SqlCommandModification {
        // Own properties of Vda-1.SqlCommandModification

        readonly fields: HashModel;
        readonly values: HashModel;

        // Owm methods of Vda-1.SqlCommandModification

        add_field_value(name: string, val: GObject.Value): void;
        add_field(name: string): void;
        add_value(val: GObject.Value): void;
        add_field_parameter_value(field: string, par: string, gtype: GObject.GType): void;
        add_parameter(par: string, gtype: GObject.GType): void;
        get_fields(): HashModel;
        get_values(): HashModel;

        // Own virtual methods of Vda-1.SqlCommandModification

        vfunc_add_field_value(name: string, val: GObject.Value): void;
        vfunc_add_field(name: string): void;
        vfunc_add_value(val: GObject.Value): void;
        vfunc_add_field_parameter_value(field: string, par: string, gtype: GObject.GType): void;
        vfunc_add_parameter(par: string, gtype: GObject.GType): void;
        vfunc_get_fields(): HashModel;
        vfunc_get_values(): HashModel;
    }

    interface SqlCommandParametrized {
        // Own properties of Vda-1.SqlCommandParametrized

        readonly parameters: SqlParameters;

        // Owm methods of Vda-1.SqlCommandParametrized

        get_parameters(): SqlParameters;

        // Own virtual methods of Vda-1.SqlCommandParametrized

        vfunc_get_parameters(): SqlParameters;
    }

    interface SqlCommandSelect {
        // Own properties of Vda-1.SqlCommandSelect

        readonly fields: HashModel;
        readonly tables: HashModel;

        // Owm methods of Vda-1.SqlCommandSelect

        add_field(field: string, table_ref: string, alias: string): void;
        add_table(name: string, allias: string): void;
        add_value_field(val: GObject.Value, allias: string): void;
        add_math_exp_field(exp: string, allias: string): void;
        stringify(): string;
        to_query(name: string): PreparedQuery;
        parse(sql: string): void;
        get_fields(): HashModel;
        get_tables(): HashModel;

        // Own virtual methods of Vda-1.SqlCommandSelect

        vfunc_add_field(field: string, table_ref: string, alias: string): void;
        vfunc_add_table(name: string, allias: string): void;
        vfunc_add_value_field(val: GObject.Value, allias: string): void;
        vfunc_add_math_exp_field(exp: string, allias: string): void;
        vfunc_stringify(): string;
        vfunc_to_query(name: string): PreparedQuery;
        vfunc_parse(sql: string): void;
        vfunc_get_fields(): HashModel;
        vfunc_get_tables(): HashModel;
    }

    interface SqlCommandTableRelated {
        // Own properties of Vda-1.SqlCommandTableRelated

        table: string;
        allias: string;

        // Owm methods of Vda-1.SqlCommandTableRelated

        get_table(): string;
        set_table(value: string): void;
        get_allias(): string;
        set_allias(value: string): void;

        // Own virtual methods of Vda-1.SqlCommandTableRelated

        vfunc_get_table(): string;
        vfunc_set_table(value: string): void;
        vfunc_get_allias(): string;
        vfunc_set_allias(value: string): void;
    }

    interface SqlCommandUpdate {
        // Owm methods of Vda-1.SqlCommandUpdate

        stringify(): string;
        to_query(name: string): Query;
        parse(sql: string): void;

        // Own virtual methods of Vda-1.SqlCommandUpdate

        vfunc_stringify(): string;
        vfunc_to_query(name: string): Query;
        vfunc_parse(sql: string): void;
    }

    interface SqlExpression {
        // Owm methods of Vda-1.SqlExpression

        add_expression(exp: SqlExpression): void;
        remove_expression(exp: SqlExpression): void;
        to_string(): string;
        add_math_expression(str: string, cnc: Connection, params: SqlParameters): void;

        // Own virtual methods of Vda-1.SqlExpression

        vfunc_add_expression(exp: SqlExpression): void;
        vfunc_remove_expression(exp: SqlExpression): void;
        vfunc_to_string(): string;
        vfunc_add_math_expression(str: string, cnc: Connection, params: SqlParameters): void;
    }

    interface SqlExpressionField {
        // Own properties of Vda-1.SqlExpressionField

        table_ref: string;
        tableRef: string;
        name: string;
        allias: string;

        // Owm methods of Vda-1.SqlExpressionField

        get_table_ref(): string;
        set_table_ref(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_allias(): string;
        set_allias(value: string): void;

        // Own virtual methods of Vda-1.SqlExpressionField

        vfunc_get_table_ref(): string;
        vfunc_set_table_ref(value: string): void;
        vfunc_get_name(): string;
        vfunc_set_name(value: string): void;
        vfunc_get_allias(): string;
        vfunc_set_allias(value: string): void;
    }

    interface SqlExpressionOperator {
        // Own properties of Vda-1.SqlExpressionOperator

        readonly operator_type: SqlExpressionOperatorType;
        readonly operatorType: SqlExpressionOperatorType;

        // Owm methods of Vda-1.SqlExpressionOperator

        create_field_expression(name: string): SqlExpressionField;
        create_value_expression(val: GObject.Value, cnc: Connection): SqlExpressionValue;
        create_parameter_expression(name: string, gtype: GObject.GType): SqlExpressionValueParameter;
        add_and_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_or_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_eq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_diff_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_like_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_gt_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_geq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_leq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_similar_to_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_is_null_operator(exp1: SqlExpression): SqlExpressionOperator;
        add_is_not_null_operator(exp1: SqlExpression): SqlExpressionOperator;
        add_not_operator(exp: SqlExpression): SqlExpressionOperator;
        add_is_true_operator(exp1: SqlExpression): SqlExpressionOperator;
        add_is_not_true_operator(exp1: SqlExpression): SqlExpressionOperator;
        add_is_false_operator(exp1: SqlExpression): SqlExpressionOperator;
        add_is_not_false_operator(exp1: SqlExpression): SqlExpressionOperator;
        add_is_unknown_operator(exp1: SqlExpression): SqlExpressionOperator;
        add_is_not_unknown_operator(exp1: SqlExpression): SqlExpressionOperator;
        add_in_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_not_in_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_concatenate_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_plus_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_minus_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_star_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_div_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_regexp_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_between_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator;
        add_not_between_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator;
        add_between_symmetric_operator(
            exp1: SqlExpression,
            exp2: SqlExpression,
            exp3: SqlExpression,
        ): SqlExpressionOperator;
        add_not_between_symmetric_operator(
            exp1: SqlExpression,
            exp2: SqlExpression,
            exp3: SqlExpression,
        ): SqlExpressionOperator;
        add_is_distinct_from_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        add_is_not_distinct_from_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        get_operator_type(): SqlExpressionOperatorType;

        // Own virtual methods of Vda-1.SqlExpressionOperator

        vfunc_create_field_expression(name: string): SqlExpressionField;
        vfunc_create_value_expression(val: GObject.Value, cnc: Connection): SqlExpressionValue;
        vfunc_create_parameter_expression(name: string, gtype: GObject.GType): SqlExpressionValueParameter;
        vfunc_add_and_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_or_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_eq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_diff_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_like_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_gt_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_geq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_leq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_similar_to_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_is_null_operator(exp1: SqlExpression): SqlExpressionOperator;
        vfunc_add_is_not_null_operator(exp1: SqlExpression): SqlExpressionOperator;
        vfunc_add_not_operator(exp: SqlExpression): SqlExpressionOperator;
        vfunc_add_is_true_operator(exp1: SqlExpression): SqlExpressionOperator;
        vfunc_add_is_not_true_operator(exp1: SqlExpression): SqlExpressionOperator;
        vfunc_add_is_false_operator(exp1: SqlExpression): SqlExpressionOperator;
        vfunc_add_is_not_false_operator(exp1: SqlExpression): SqlExpressionOperator;
        vfunc_add_is_unknown_operator(exp1: SqlExpression): SqlExpressionOperator;
        vfunc_add_is_not_unknown_operator(exp1: SqlExpression): SqlExpressionOperator;
        vfunc_add_in_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_not_in_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_concatenate_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_plus_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_minus_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_star_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_div_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_regexp_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_between_operator(
            exp1: SqlExpression,
            exp2: SqlExpression,
            exp3: SqlExpression,
        ): SqlExpressionOperator;
        vfunc_add_not_between_operator(
            exp1: SqlExpression,
            exp2: SqlExpression,
            exp3: SqlExpression,
        ): SqlExpressionOperator;
        vfunc_add_between_symmetric_operator(
            exp1: SqlExpression,
            exp2: SqlExpression,
            exp3: SqlExpression,
        ): SqlExpressionOperator;
        vfunc_add_not_between_symmetric_operator(
            exp1: SqlExpression,
            exp2: SqlExpression,
            exp3: SqlExpression,
        ): SqlExpressionOperator;
        vfunc_add_is_distinct_from_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_add_is_not_distinct_from_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator;
        vfunc_get_operator_type(): SqlExpressionOperatorType;
    }

    interface SqlExpressionOperatorGroup {}

    interface SqlExpressionOperatorMultiterm {}

    interface SqlExpressionOperatorAnd {}

    interface SqlExpressionOperatorOr {}

    interface SqlExpressionOperatorBinaryterm {}

    interface SqlExpressionOperatorEq {}

    interface SqlExpressionOperatorNotEq {}

    interface SqlExpressionOperatorDiff {}

    interface SqlExpressionOperatorGt {}

    interface SqlExpressionOperatorLt {}

    interface SqlExpressionOperatorGeq {}

    interface SqlExpressionOperatorLeq {}

    interface SqlExpressionOperatorRegexp {}

    interface SqlExpressionOperatorStar {}

    interface SqlExpressionOperatorDiv {}

    interface SqlExpressionOperatorIn {}

    interface SqlExpressionOperatorNotIn {}

    interface SqlExpressionOperatorConcatenate {}

    interface SqlExpressionOperatorSimilarTo {}

    interface SqlExpressionOperatorLike {}

    interface SqlExpressionOperatorNotLike {}

    interface SqlExpressionOperatorIlike {}

    interface SqlExpressionOperatorNotIlike {}

    interface SqlExpressionOperatorBinaryUnaryterm {}

    interface SqlExpressionOperatorMinus {}

    interface SqlExpressionOperatorPlus {}

    interface SqlExpressionOperatorInitialUnaryterm {}

    interface SqlExpressionOperatorNot {}

    interface SqlExpressionOperatorFinalUnaryterm {}

    interface SqlExpressionOperatorIs {}

    interface SqlExpressionOperatorIsNot {}

    interface SqlExpressionOperatorIsNull {}

    interface SqlExpressionOperatorIsNotNull {}

    interface SqlExpressionOperatorIsTrue {}

    interface SqlExpressionOperatorIsNotTrue {}

    interface SqlExpressionOperatorIsFalse {}

    interface SqlExpressionOperatorIsNotFalse {}

    interface SqlExpressionOperatorIsUnknown {}

    interface SqlExpressionOperatorIsNotUnknown {}

    interface SqlExpressionOperatorIsDistinct {}

    interface SqlExpressionOperatorIsNotDistinct {}

    interface SqlExpressionOperatorIsDistinctFrom {}

    interface SqlExpressionOperatorIsNotDistinctFrom {}

    interface SqlExpressionOperatorThreeterm {}

    interface SqlExpressionOperatorBetween {}

    interface SqlExpressionOperatorBetweenAnd {}

    interface SqlExpressionOperatorNotBetween {}

    interface SqlExpressionOperatorNotBetweenAnd {}

    interface SqlExpressionOperatorBetweenSymmetric {}

    interface SqlExpressionOperatorBetweenSymmetricAnd {}

    interface SqlExpressionOperatorNotBetweenSymmetric {}

    interface SqlExpressionOperatorNotBetweenSymmetricAnd {}

    interface SqlExpressionValue {
        // Own properties of Vda-1.SqlExpressionValue

        connection: Connection;
        value: SqlValue;

        // Owm methods of Vda-1.SqlExpressionValue

        set_math_expression_value(str: string, params: SqlParameters): void;
        get_connection(): Connection;
        set_connection(value: Connection): void;
        get_value(): SqlValue;
        set_value(value: SqlValue): void;

        // Own virtual methods of Vda-1.SqlExpressionValue

        vfunc_set_math_expression_value(str: string, params: SqlParameters): void;
        vfunc_get_connection(): Connection;
        vfunc_set_connection(value: Connection): void;
        vfunc_get_value(): SqlValue;
        vfunc_set_value(value: SqlValue): void;
    }

    interface SqlExpressionValueParameter {
        // Own properties of Vda-1.SqlExpressionValueParameter

        parameters: SqlParameters;
        name: string;
        gtype: GObject.GType;

        // Owm methods of Vda-1.SqlExpressionValueParameter

        parse(str: string): void;
        get_parameters(): SqlParameters;
        set_parameters(value: SqlParameters): void;
        get_name(): string;
        set_name(value: string): void;
        get_gtype(): GObject.GType;
        set_gtype(value: GObject.GType): void;

        // Own virtual methods of Vda-1.SqlExpressionValueParameter

        vfunc_parse(str: string): void;
        vfunc_get_parameters(): SqlParameters;
        vfunc_set_parameters(value: SqlParameters): void;
        vfunc_get_name(): string;
        vfunc_set_name(value: string): void;
        vfunc_get_gtype(): GObject.GType;
        vfunc_set_gtype(value: GObject.GType): void;
    }

    interface SqlParameters {
        // Owm methods of Vda-1.SqlParameters

        set_value(name: string, val: GObject.Value): void;
        get_value(name: string): GObject.Value;
        set_sql_value(name: string, val: SqlValue): void;
        get_sql_value(name: string): SqlValue;
        has_param(name: string): boolean;

        // Own virtual methods of Vda-1.SqlParameters

        vfunc_set_value(name: string, val: GObject.Value): void;
        vfunc_get_value(name: string): GObject.Value;
        vfunc_set_sql_value(name: string, val: SqlValue): void;
        vfunc_get_sql_value(name: string): SqlValue;
        vfunc_has_param(name: string): boolean;
    }

    interface SqlParser {
        // Owm methods of Vda-1.SqlParser

        parse(str: string, cnc: Connection): SqlCommandParametrized;

        // Own virtual methods of Vda-1.SqlParser

        vfunc_parse(str: string, cnc: Connection): SqlCommandParametrized;
    }

    interface SqlTableReference {
        // Own properties of Vda-1.SqlTableReference

        name: string;
        allias: string;

        // Owm methods of Vda-1.SqlTableReference

        get_name(): string;
        set_name(value: string): void;
        get_allias(): string;
        set_allias(value: string): void;

        // Own virtual methods of Vda-1.SqlTableReference

        vfunc_get_name(): string;
        vfunc_set_name(value: string): void;
        vfunc_get_allias(): string;
        vfunc_set_allias(value: string): void;
    }

    interface Stringifiable {
        // Owm methods of Vda-1.Stringifiable

        to_string(): string;

        // Own virtual methods of Vda-1.Stringifiable

        vfunc_to_string(): string;
    }

    interface SqlValue {
        // Own properties of Vda-1.SqlValue

        readonly name: string;

        // Owm methods of Vda-1.SqlValue

        parse(str: string): boolean;
        from_value(val: GObject.Value): boolean;
        cast(type: GObject.GType): SqlValue;
        is_compatible(type: GObject.GType): boolean;
        to_gvalue(): void;
        to_string_quoted(): string;
        to_sql_expression(): string;
        get_name(): string;

        // Own virtual methods of Vda-1.SqlValue

        vfunc_parse(str: string): boolean;
        vfunc_from_value(val: GObject.Value): boolean;
        vfunc_cast(type: GObject.GType): SqlValue;
        vfunc_is_compatible(type: GObject.GType): boolean;
        vfunc_to_gvalue(): void;
        vfunc_to_string_quoted(): string;
        vfunc_to_sql_expression(): string;
        vfunc_get_name(): string;
    }

    interface SqlValueNull {}

    interface SqlValueBool {}

    interface SqlValueBit {}

    interface SqlValueString {}

    interface SqlValueXml {
        // Own properties of Vda-1.SqlValueXml

        readonly document: GXml.DomDocument;

        // Owm methods of Vda-1.SqlValueXml

        get_document(): GXml.DomDocument;

        // Own virtual methods of Vda-1.SqlValueXml

        vfunc_get_document(): GXml.DomDocument;
    }

    interface SqlValueJson {
        // Own properties of Vda-1.SqlValueJson

        readonly document: Json.Node;

        // Owm methods of Vda-1.SqlValueJson

        get_document(): Json.Node;

        // Own virtual methods of Vda-1.SqlValueJson

        vfunc_get_document(): Json.Node;
    }

    interface SqlValueText {}

    interface SqlValueName {}

    interface SqlValueInteger {}

    interface SqlValueByte {}

    interface SqlValueInt2 {}

    interface SqlValueInt4 {}

    interface SqlValueInt8 {}

    interface SqlValueUnsignedInteger {}

    interface SqlValueUnsignedByte {}

    interface SqlValueUnsignedInt2 {}

    interface SqlValueUnsignedInt4 {}

    interface SqlValueUnsignedInt8 {}

    interface SqlValueOid {}

    interface SqlValueNumeric {
        // Owm methods of Vda-1.SqlValueNumeric

        set_precision(p: number): void;
        get_precision(): number;
        format(str: string): string;
        get_double(): number;
        set_double(v: number): void;
        get_real(): number;
        set_real(r: number): void;
        get_imaginary(): number;
        set_imaginary(img: number): void;

        // Own virtual methods of Vda-1.SqlValueNumeric

        vfunc_set_precision(p: number): void;
        vfunc_get_precision(): number;
        vfunc_format(str: string): string;
        vfunc_get_double(): number;
        vfunc_set_double(v: number): void;
        vfunc_get_real(): number;
        vfunc_set_real(r: number): void;
        vfunc_get_imaginary(): number;
        vfunc_set_imaginary(img: number): void;
    }

    interface SqlValueFloat {
        // Owm methods of Vda-1.SqlValueFloat

        get_float(): number;

        // Own virtual methods of Vda-1.SqlValueFloat

        vfunc_get_float(): number;
    }

    interface SqlValueDouble {}

    interface SqlValueMoney {
        // Owm methods of Vda-1.SqlValueMoney

        locale(): string;
        int_locale(): string;
        get_int_precision(): number;
        set_int_precision(p: number): void;

        // Own virtual methods of Vda-1.SqlValueMoney

        vfunc_locale(): string;
        vfunc_int_locale(): string;
        vfunc_get_int_precision(): number;
        vfunc_set_int_precision(p: number): void;
    }

    interface SqlValueDate {
        // Owm methods of Vda-1.SqlValueDate

        get_date(): void;
        set_date(ts: GLib.Date): void;

        // Own virtual methods of Vda-1.SqlValueDate

        vfunc_get_date(): void;
        vfunc_set_date(ts: GLib.Date): void;
    }

    interface SqlValueTimestamp {
        // Owm methods of Vda-1.SqlValueTimestamp

        format_local(): string;
        format_utc(): string;
        format_locale(): string;
        format_date(): string;
        format_date_locale(): string;
        format_time(): string;
        format_time_local(): string;
        format_time_local_ntz(): string;
        get_timestamp(): GLib.DateTime;
        set_timestamp(ts: GLib.DateTime): void;

        // Own virtual methods of Vda-1.SqlValueTimestamp

        vfunc_format_local(): string;
        vfunc_format_utc(): string;
        vfunc_format_locale(): string;
        vfunc_format_date(): string;
        vfunc_format_date_locale(): string;
        vfunc_format_time(): string;
        vfunc_format_time_local(): string;
        vfunc_format_time_local_ntz(): string;
        vfunc_get_timestamp(): GLib.DateTime;
        vfunc_set_timestamp(ts: GLib.DateTime): void;
    }

    interface SqlValueTimestampNtz {}

    interface SqlValueTime {}

    interface SqlValueTimeNtz {}

    interface SqlValueBinary {
        // Own properties of Vda-1.SqlValueBinary

        readonly size: number;

        // Owm methods of Vda-1.SqlValueBinary

        get_bytes(): GLib.Bytes;
        get_out_stream(): Gio.OutputStream;
        get_input_stream(): Gio.InputStream;
        get_size(): number;

        // Own virtual methods of Vda-1.SqlValueBinary

        vfunc_get_bytes(): GLib.Bytes;
        vfunc_get_out_stream(): Gio.OutputStream;
        vfunc_get_input_stream(): Gio.InputStream;
        vfunc_get_size(): number;
    }

    interface SqlValueBlob {
        // Own properties of Vda-1.SqlValueBlob

        readonly connection: Connection;

        // Owm methods of Vda-1.SqlValueBlob

        create(stream: Gio.InputStream): void;
        ['delete'](): void;
        write(file: Gio.File): void;
        read(file: Gio.File): void;
        get_connection(): Connection;

        // Own virtual methods of Vda-1.SqlValueBlob

        vfunc_create(stream: Gio.InputStream): void;
        vfunc_delete(): void;
        vfunc_write(file: Gio.File): void;
        vfunc_read(file: Gio.File): void;
        vfunc_get_connection(): Connection;
    }

    interface SqlValueBlobOid {
        // Own properties of Vda-1.SqlValueBlobOid

        readonly identification: number;

        // Owm methods of Vda-1.SqlValueBlobOid

        get_identification(): number;

        // Own virtual methods of Vda-1.SqlValueBlobOid

        vfunc_get_identification(): number;
    }

    interface SqlValueGeometricPoint {
        // Own properties of Vda-1.SqlValueGeometricPoint

        x: number;
        y: number;

        // Owm methods of Vda-1.SqlValueGeometricPoint

        get_x(): number;
        set_x(value: number): void;
        get_y(): number;
        set_y(value: number): void;

        // Own virtual methods of Vda-1.SqlValueGeometricPoint

        vfunc_get_x(): number;
        vfunc_set_x(value: number): void;
        vfunc_get_y(): number;
        vfunc_set_y(value: number): void;
    }

    interface SqlValueMathExp {
        // Own properties of Vda-1.SqlValueMathExp

        math: GCalc.MathEquationManager;

        // Owm methods of Vda-1.SqlValueMathExp

        get_math(): GCalc.MathEquationManager;
        set_math(value: GCalc.MathEquationManager): void;

        // Own virtual methods of Vda-1.SqlValueMathExp

        vfunc_get_math(): GCalc.MathEquationManager;
        vfunc_set_math(value: GCalc.MathEquationManager): void;
    }

    interface TableModel {}

    interface TableModelSequential {
        // Owm methods of Vda-1.TableModelSequential

        current(): RowModel;
        next(): boolean;
        back(): boolean;
        move(direction: MoveDirection, relative: number): boolean;
        copy_current(): RowModel;

        // Own virtual methods of Vda-1.TableModelSequential

        vfunc_current(): RowModel;
        vfunc_next(): boolean;
        vfunc_back(): boolean;
        vfunc_move(direction: MoveDirection, relative: number): boolean;
        vfunc_copy_current(): RowModel;
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

export default Vda;
// END
