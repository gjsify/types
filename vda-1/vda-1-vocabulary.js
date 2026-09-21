// The widget vocabulary of Vda-1 as runtime data.
//
// GENERATED — do not edit. Provenance: Vda-1
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Vda',
    version: '1',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Vda'],
    requiredVocabularies: ['@girs/gee-0.8/vocabulary', '@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    VdaConnectionParameter: ['name', 'value'],
    VdaInvalidQuery: ['message'],
    VdaInvalidResult: ['message'],
    VdaSqlCommandTableRelated: ['allias', 'table'],
    VdaSqlExpressionField: ['allias', 'name', 'table-ref'],
    VdaSqlExpressionValue: ['connection', 'value'],
    VdaSqlExpressionValueParameter: ['gtype', 'name', 'parameters'],
    VdaSqlTableReference: ['allias', 'name'],
    VdaSqlValueMathExp: ['math'],
    VdaValueMathExp: ['parameters'],
};

export const OWN_SIGNALS = {};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    VdaAffectedRows: ['VdaAffectedRows', 'GObject', 'VdaResult', 'VdaSqlAffectedRows'],
    VdaCommandDelete: ['VdaCommandDelete', 'GObject', 'VdaSqlCommand', 'VdaSqlCommandTableRelated', 'VdaSqlCommandConditional', 'VdaStringifiable', 'VdaSqlCommandParametrized', 'VdaSqlCommandDelete'],
    VdaCommandInsert: ['VdaCommandInsert', 'VdaCommandModification', 'GObject', 'VdaStringifiable', 'VdaSqlCommandInsert', 'VdaSqlCommand', 'VdaSqlCommandTableRelated', 'VdaSqlCommandModification', 'VdaSqlCommandParametrized'],
    VdaCommandModification: ['VdaCommandModification', 'GObject', 'VdaSqlCommand', 'VdaSqlCommandTableRelated', 'VdaSqlCommandModification', 'VdaSqlCommandParametrized'],
    VdaCommandSelect: ['VdaCommandSelect', 'GObject', 'VdaSqlCommand', 'VdaSqlCommandConditional', 'VdaStringifiable', 'VdaSqlCommandParametrized', 'VdaSqlCommandSelect'],
    VdaCommandUpdate: ['VdaCommandUpdate', 'VdaCommandModification', 'GObject', 'VdaSqlCommandConditional', 'VdaStringifiable', 'VdaSqlCommandUpdate', 'VdaSqlCommand', 'VdaSqlCommandTableRelated', 'VdaSqlCommandModification', 'VdaSqlCommandParametrized'],
    VdaConnectionParameter: ['VdaConnectionParameter', 'GObject'],
    VdaConnectionParameterDbName: ['VdaConnectionParameterDbName', 'VdaConnectionParameter', 'GObject'],
    VdaConnectionParameterHost: ['VdaConnectionParameterHost', 'VdaConnectionParameter', 'GObject'],
    VdaConnectionParameterPassword: ['VdaConnectionParameterPassword', 'VdaConnectionParameter', 'GObject'],
    VdaConnectionParameterPort: ['VdaConnectionParameterPort', 'VdaConnectionParameter', 'GObject'],
    VdaConnectionParameterUserName: ['VdaConnectionParameterUserName', 'VdaConnectionParameter', 'GObject'],
    VdaConnectionParameters: ['VdaConnectionParameters', 'GeeHashMap', 'GeeAbstractMap', 'GObject', 'GeeTraversable', 'GeeIterable', 'GeeMap'],
    VdaExpression: ['VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionField: ['VdaExpressionField', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionField', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperator: ['VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorAnd: ['VdaExpressionOperatorAnd', 'VdaExpressionOperatorMultiterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorAnd', 'VdaSqlExpressionOperatorMultiterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorBetween: ['VdaExpressionOperatorBetween', 'VdaExpressionOperatorThreeterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorBetween', 'VdaSqlExpressionOperatorThreeterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorBetweenAnd: ['VdaExpressionOperatorBetweenAnd', 'VdaExpressionOperatorBetween', 'VdaExpressionOperatorThreeterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorBetweenAnd', 'VdaSqlExpressionOperatorBetween', 'VdaSqlExpressionOperatorThreeterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorBetweenSymmetric: ['VdaExpressionOperatorBetweenSymmetric', 'VdaExpressionOperatorBetween', 'VdaExpressionOperatorThreeterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorBetweenSymmetric', 'VdaSqlExpressionOperatorBetween', 'VdaSqlExpressionOperatorThreeterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorBetweenSymmetricAnd: ['VdaExpressionOperatorBetweenSymmetricAnd', 'VdaExpressionOperatorBetweenSymmetric', 'VdaExpressionOperatorBetween', 'VdaExpressionOperatorThreeterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorBetweenSymmetricAnd', 'VdaSqlExpressionOperatorBetweenSymmetric', 'VdaSqlExpressionOperatorBetween', 'VdaSqlExpressionOperatorThreeterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorBinaryUnaryterm: ['VdaExpressionOperatorBinaryUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorBinaryUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorBinaryterm: ['VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorConcatenate: ['VdaExpressionOperatorConcatenate', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorConcatenate', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorDiff: ['VdaExpressionOperatorDiff', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorDiff', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorDiv: ['VdaExpressionOperatorDiv', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorDiv', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorEq: ['VdaExpressionOperatorEq', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorEq', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorFinalUnaryterm: ['VdaExpressionOperatorFinalUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorFinalUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorGeq: ['VdaExpressionOperatorGeq', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorGeq', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorGroup: ['VdaExpressionOperatorGroup', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorGroup', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorGt: ['VdaExpressionOperatorGt', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorGt', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIlike: ['VdaExpressionOperatorIlike', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIlike', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIn: ['VdaExpressionOperatorIn', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIn', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorInitialUnaryterm: ['VdaExpressionOperatorInitialUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorInitialUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIs: ['VdaExpressionOperatorIs', 'VdaExpressionOperatorFinalUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIs', 'VdaSqlExpressionOperatorFinalUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsDistinct: ['VdaExpressionOperatorIsDistinct', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsDistinct', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsDistinctFrom: ['VdaExpressionOperatorIsDistinctFrom', 'VdaExpressionOperatorIsDistinct', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsDistinctFrom', 'VdaSqlExpressionOperatorIsDistinct', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsFalse: ['VdaExpressionOperatorIsFalse', 'VdaExpressionOperatorIs', 'VdaExpressionOperatorFinalUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsFalse', 'VdaSqlExpressionOperatorIs', 'VdaSqlExpressionOperatorFinalUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsNot: ['VdaExpressionOperatorIsNot', 'VdaExpressionOperatorIs', 'VdaExpressionOperatorFinalUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsNot', 'VdaSqlExpressionOperatorIs', 'VdaSqlExpressionOperatorFinalUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsNotDistinct: ['VdaExpressionOperatorIsNotDistinct', 'VdaExpressionOperatorIsDistinct', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsNotDistinct', 'VdaSqlExpressionOperatorIsDistinct', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsNotDistinctFrom: ['VdaExpressionOperatorIsNotDistinctFrom', 'VdaExpressionOperatorIsNotDistinct', 'VdaExpressionOperatorIsDistinct', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsNotDistinctFrom', 'VdaSqlExpressionOperatorIsNotDistinct', 'VdaSqlExpressionOperatorIsDistinct', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsNotFalse: ['VdaExpressionOperatorIsNotFalse', 'VdaExpressionOperatorIsNot', 'VdaExpressionOperatorIs', 'VdaExpressionOperatorFinalUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsNotFalse', 'VdaSqlExpressionOperatorIsNot', 'VdaSqlExpressionOperatorIs', 'VdaSqlExpressionOperatorFinalUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsNotNull: ['VdaExpressionOperatorIsNotNull', 'VdaExpressionOperatorIsNot', 'VdaExpressionOperatorIs', 'VdaExpressionOperatorFinalUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsNotNull', 'VdaSqlExpressionOperatorIsNot', 'VdaSqlExpressionOperatorIs', 'VdaSqlExpressionOperatorFinalUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsNotTrue: ['VdaExpressionOperatorIsNotTrue', 'VdaExpressionOperatorIsNot', 'VdaExpressionOperatorIs', 'VdaExpressionOperatorFinalUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsNotTrue', 'VdaSqlExpressionOperatorIsNot', 'VdaSqlExpressionOperatorIs', 'VdaSqlExpressionOperatorFinalUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsNotUnknown: ['VdaExpressionOperatorIsNotUnknown', 'VdaExpressionOperatorIsNot', 'VdaExpressionOperatorIs', 'VdaExpressionOperatorFinalUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsNotUnknown', 'VdaSqlExpressionOperatorIsNot', 'VdaSqlExpressionOperatorIs', 'VdaSqlExpressionOperatorFinalUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsNull: ['VdaExpressionOperatorIsNull', 'VdaExpressionOperatorIs', 'VdaExpressionOperatorFinalUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsNull', 'VdaSqlExpressionOperatorIs', 'VdaSqlExpressionOperatorFinalUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsTrue: ['VdaExpressionOperatorIsTrue', 'VdaExpressionOperatorIs', 'VdaExpressionOperatorFinalUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsTrue', 'VdaSqlExpressionOperatorIs', 'VdaSqlExpressionOperatorFinalUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorIsUnknown: ['VdaExpressionOperatorIsUnknown', 'VdaExpressionOperatorIs', 'VdaExpressionOperatorFinalUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorIsUnknown', 'VdaSqlExpressionOperatorIs', 'VdaSqlExpressionOperatorFinalUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorLeq: ['VdaExpressionOperatorLeq', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorLeq', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorLike: ['VdaExpressionOperatorLike', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorLike', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorLt: ['VdaExpressionOperatorLt', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorLt', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorMinus: ['VdaExpressionOperatorMinus', 'VdaExpressionOperatorBinaryUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorMinus', 'VdaSqlExpressionOperatorBinaryUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorMultiterm: ['VdaExpressionOperatorMultiterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorMultiterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorNot: ['VdaExpressionOperatorNot', 'VdaExpressionOperatorInitialUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorNot', 'VdaSqlExpressionOperatorInitialUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorNotBetween: ['VdaExpressionOperatorNotBetween', 'VdaExpressionOperatorBetween', 'VdaExpressionOperatorThreeterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorNotBetween', 'VdaSqlExpressionOperatorBetween', 'VdaSqlExpressionOperatorThreeterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorNotBetweenAnd: ['VdaExpressionOperatorNotBetweenAnd', 'VdaExpressionOperatorNotBetween', 'VdaExpressionOperatorBetween', 'VdaExpressionOperatorThreeterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorNotBetweenAnd', 'VdaSqlExpressionOperatorNotBetween', 'VdaSqlExpressionOperatorBetween', 'VdaSqlExpressionOperatorThreeterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorNotBetweenSymmetric: ['VdaExpressionOperatorNotBetweenSymmetric', 'VdaExpressionOperatorBetweenSymmetric', 'VdaExpressionOperatorBetween', 'VdaExpressionOperatorThreeterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorNotBetweenSymmetric', 'VdaSqlExpressionOperatorBetweenSymmetric', 'VdaSqlExpressionOperatorBetween', 'VdaSqlExpressionOperatorThreeterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorNotBetweenSymmetricAnd: ['VdaExpressionOperatorNotBetweenSymmetricAnd', 'VdaExpressionOperatorNotBetweenSymmetric', 'VdaExpressionOperatorBetweenSymmetric', 'VdaExpressionOperatorBetween', 'VdaExpressionOperatorThreeterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorNotBetweenSymmetricAnd', 'VdaSqlExpressionOperatorNotBetweenSymmetric', 'VdaSqlExpressionOperatorBetweenSymmetric', 'VdaSqlExpressionOperatorBetween', 'VdaSqlExpressionOperatorThreeterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorNotEq: ['VdaExpressionOperatorNotEq', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorNotEq', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorNotIlike: ['VdaExpressionOperatorNotIlike', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorNotIlike', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorNotIn: ['VdaExpressionOperatorNotIn', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorNotIn', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorNotLike: ['VdaExpressionOperatorNotLike', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorNotLike', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorOr: ['VdaExpressionOperatorOr', 'VdaExpressionOperatorMultiterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorOr', 'VdaSqlExpressionOperatorMultiterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorPlus: ['VdaExpressionOperatorPlus', 'VdaExpressionOperatorBinaryUnaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorPlus', 'VdaSqlExpressionOperatorBinaryUnaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorRegexp: ['VdaExpressionOperatorRegexp', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorRegexp', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorSimilarTo: ['VdaExpressionOperatorSimilarTo', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorSimilarTo', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorStar: ['VdaExpressionOperatorStar', 'VdaExpressionOperatorBinaryterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorStar', 'VdaSqlExpressionOperatorBinaryterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionOperatorThreeterm: ['VdaExpressionOperatorThreeterm', 'VdaExpressionOperator', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionOperatorThreeterm', 'VdaSqlExpressionOperator', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionValue: ['VdaExpressionValue', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionValue', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaExpressionValueParameter: ['VdaExpressionValueParameter', 'VdaExpressionValue', 'VdaExpression', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'VdaSqlExpressionValueParameter', 'VdaSqlExpressionValue', 'GListModel', 'VdaSqlExpression', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaHashList: ['VdaHashList', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GListModel', 'VdaHashModel', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    VdaInvalidPreparedQuery: ['VdaInvalidPreparedQuery', 'VdaInvalidQuery', 'GObject', 'VdaPreparedQuery', 'VdaQuery'],
    VdaInvalidQuery: ['VdaInvalidQuery', 'GObject', 'VdaQuery'],
    VdaInvalidResult: ['VdaInvalidResult', 'GObject', 'VdaResult'],
    VdaParameters: ['VdaParameters', 'GeeHashMap', 'GeeAbstractMap', 'GObject', 'VdaSqlParameters', 'GeeTraversable', 'GeeIterable', 'GeeMap'],
    VdaParser: ['VdaParser', 'GObject', 'VdaSqlParser'],
    VdaTableReference: ['VdaTableReference', 'GObject', 'VdaSqlTableReference'],
    VdaValue: ['VdaValue', 'GObject', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueBinary: ['VdaValueBinary', 'VdaValue', 'GObject', 'VdaSqlValueBinary', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueBit: ['VdaValueBit', 'VdaValueBool', 'VdaValue', 'GObject', 'VdaSqlValueBit', 'VdaSqlValueBool', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueBool: ['VdaValueBool', 'VdaValue', 'GObject', 'VdaSqlValueBool', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueByte: ['VdaValueByte', 'VdaValueInteger', 'VdaValue', 'GObject', 'VdaSqlValueByte', 'VdaSqlValue', 'VdaSqlValueInteger', 'VdaStringifiable'],
    VdaValueDate: ['VdaValueDate', 'VdaValue', 'GObject', 'VdaSqlValueDate', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueDouble: ['VdaValueDouble', 'VdaValueNumeric', 'VdaValue', 'GObject', 'VdaSqlValueDouble', 'VdaSqlValueNumeric', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueFloat: ['VdaValueFloat', 'VdaValueNumeric', 'VdaValue', 'GObject', 'VdaSqlValueFloat', 'VdaSqlValueNumeric', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueInt2: ['VdaValueInt2', 'VdaValueInteger', 'VdaValue', 'GObject', 'VdaSqlValueInt2', 'VdaSqlValue', 'VdaSqlValueInteger', 'VdaStringifiable'],
    VdaValueInt4: ['VdaValueInt4', 'VdaValueInteger', 'VdaValue', 'GObject', 'VdaSqlValueInt4', 'VdaSqlValue', 'VdaSqlValueInteger', 'VdaStringifiable'],
    VdaValueInt8: ['VdaValueInt8', 'VdaValueInteger', 'VdaValue', 'GObject', 'VdaSqlValueInt8', 'VdaSqlValue', 'VdaSqlValueInteger', 'VdaStringifiable'],
    VdaValueInteger: ['VdaValueInteger', 'VdaValue', 'GObject', 'VdaSqlValue', 'VdaSqlValueInteger', 'VdaStringifiable'],
    VdaValueJson: ['VdaValueJson', 'VdaValueString', 'VdaValue', 'GObject', 'VdaSqlValueJson', 'VdaSqlValueString', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueMathExp: ['VdaValueMathExp', 'GObject', 'VdaStringifiable', 'VdaSqlValue', 'VdaSqlValueMathExp'],
    VdaValueMoney: ['VdaValueMoney', 'VdaValueNumeric', 'VdaValue', 'GObject', 'VdaSqlValueMoney', 'VdaSqlValueNumeric', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueName: ['VdaValueName', 'VdaValueString', 'VdaValue', 'GObject', 'VdaSqlValueName', 'VdaSqlValueString', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueNull: ['VdaValueNull', 'VdaValue', 'GObject', 'VdaSqlValueNull', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueNumeric: ['VdaValueNumeric', 'VdaValue', 'GObject', 'VdaSqlValueNumeric', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueOid: ['VdaValueOid', 'VdaValueInteger', 'VdaValue', 'GObject', 'VdaSqlValueOid', 'VdaSqlValue', 'VdaSqlValueInteger', 'VdaStringifiable'],
    VdaValueString: ['VdaValueString', 'VdaValue', 'GObject', 'VdaSqlValueString', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueText: ['VdaValueText', 'VdaValueString', 'VdaValue', 'GObject', 'VdaSqlValueText', 'VdaSqlValueString', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueTime: ['VdaValueTime', 'VdaValueTimestamp', 'VdaValue', 'GObject', 'VdaSqlValueTime', 'VdaSqlValueTimestamp', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueTimeNtz: ['VdaValueTimeNtz', 'VdaValueTimestampNtz', 'VdaValueTimestamp', 'VdaValue', 'GObject', 'VdaSqlValueTimeNtz', 'VdaSqlValueTimestampNtz', 'VdaSqlValueTimestamp', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueTimestamp: ['VdaValueTimestamp', 'VdaValue', 'GObject', 'VdaSqlValueTimestamp', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueTimestampNtz: ['VdaValueTimestampNtz', 'VdaValueTimestamp', 'VdaValue', 'GObject', 'VdaSqlValueTimestampNtz', 'VdaSqlValueTimestamp', 'VdaStringifiable', 'VdaSqlValue'],
    VdaValueUnsignedByte: ['VdaValueUnsignedByte', 'VdaValueUnsignedInteger', 'VdaValue', 'GObject', 'VdaSqlValueUnsignedByte', 'VdaSqlValue', 'VdaSqlValueUnsignedInteger', 'VdaStringifiable'],
    VdaValueUnsignedInt2: ['VdaValueUnsignedInt2', 'VdaValueUnsignedInteger', 'VdaValue', 'GObject', 'VdaSqlValueUnsignedInt2', 'VdaSqlValue', 'VdaSqlValueUnsignedInteger', 'VdaStringifiable'],
    VdaValueUnsignedInt4: ['VdaValueUnsignedInt4', 'VdaValueUnsignedInteger', 'VdaValue', 'GObject', 'VdaSqlValueUnsignedInt4', 'VdaSqlValue', 'VdaSqlValueUnsignedInteger', 'VdaStringifiable'],
    VdaValueUnsignedInt8: ['VdaValueUnsignedInt8', 'VdaValueUnsignedInteger', 'VdaValue', 'GObject', 'VdaSqlValueUnsignedInt8', 'VdaSqlValue', 'VdaSqlValueUnsignedInteger', 'VdaStringifiable'],
    VdaValueUnsignedInteger: ['VdaValueUnsignedInteger', 'VdaValue', 'GObject', 'VdaSqlValue', 'VdaSqlValueUnsignedInteger', 'VdaStringifiable'],
    VdaValueXml: ['VdaValueXml', 'VdaValueString', 'VdaValue', 'GObject', 'VdaSqlValueXml', 'VdaSqlValueString', 'VdaStringifiable', 'VdaSqlValue'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    VdaConnectionStatus: ['invalid', 'in-progress', 'canceled', 'made', 'disconnected', 'timeout', 'connected'],
    VdaMoveDirection: ['forward', 'backward', 'relative'],
    VdaSqlExpressionOperatorType: ['none', 'and', 'or', 'eq', 'is', 'like', 'between', 'not-between', 'between-symmetric', 'not-between-symmetric', 'is-distinct-from', 'is-not-distinct-from', 'gt', 'lt', 'geq', 'leq', 'diff', 'regexp', 'regexp-ci', 'not-regexp', 'not-regexp-ci', 'similar-to', 'is-null', 'is-not-null', 'is-true', 'is-not-true', 'is-false', 'is-not-false', 'is-unknown', 'is-not-unknown', 'not', 'in', 'not-in', 'concatenate', 'plus', 'minus', 'star', 'div', 'rem', 'bitand', 'bitor', 'bitnot', 'ilike'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'VdaConnectionStatus.canceled': 2,
    'VdaConnectionStatus.connected': 6,
    'VdaConnectionStatus.disconnected': 4,
    'VdaConnectionStatus.in-progress': 1,
    'VdaConnectionStatus.invalid': 0,
    'VdaConnectionStatus.made': 3,
    'VdaConnectionStatus.timeout': 5,
    'VdaMoveDirection.backward': 1,
    'VdaMoveDirection.forward': 0,
    'VdaMoveDirection.relative': 2,
    'VdaSqlExpressionOperatorType.and': 1,
    'VdaSqlExpressionOperatorType.between': 6,
    'VdaSqlExpressionOperatorType.between-symmetric': 8,
    'VdaSqlExpressionOperatorType.bitand': 39,
    'VdaSqlExpressionOperatorType.bitnot': 41,
    'VdaSqlExpressionOperatorType.bitor': 40,
    'VdaSqlExpressionOperatorType.concatenate': 33,
    'VdaSqlExpressionOperatorType.diff': 16,
    'VdaSqlExpressionOperatorType.div': 37,
    'VdaSqlExpressionOperatorType.eq': 3,
    'VdaSqlExpressionOperatorType.geq': 14,
    'VdaSqlExpressionOperatorType.gt': 12,
    'VdaSqlExpressionOperatorType.ilike': 42,
    'VdaSqlExpressionOperatorType.in': 31,
    'VdaSqlExpressionOperatorType.is': 4,
    'VdaSqlExpressionOperatorType.is-distinct-from': 10,
    'VdaSqlExpressionOperatorType.is-false': 26,
    'VdaSqlExpressionOperatorType.is-not-distinct-from': 11,
    'VdaSqlExpressionOperatorType.is-not-false': 27,
    'VdaSqlExpressionOperatorType.is-not-null': 23,
    'VdaSqlExpressionOperatorType.is-not-true': 25,
    'VdaSqlExpressionOperatorType.is-not-unknown': 29,
    'VdaSqlExpressionOperatorType.is-null': 22,
    'VdaSqlExpressionOperatorType.is-true': 24,
    'VdaSqlExpressionOperatorType.is-unknown': 28,
    'VdaSqlExpressionOperatorType.leq': 15,
    'VdaSqlExpressionOperatorType.like': 5,
    'VdaSqlExpressionOperatorType.lt': 13,
    'VdaSqlExpressionOperatorType.minus': 35,
    'VdaSqlExpressionOperatorType.none': 0,
    'VdaSqlExpressionOperatorType.not': 30,
    'VdaSqlExpressionOperatorType.not-between': 7,
    'VdaSqlExpressionOperatorType.not-between-symmetric': 9,
    'VdaSqlExpressionOperatorType.not-in': 32,
    'VdaSqlExpressionOperatorType.not-regexp': 19,
    'VdaSqlExpressionOperatorType.not-regexp-ci': 20,
    'VdaSqlExpressionOperatorType.or': 2,
    'VdaSqlExpressionOperatorType.plus': 34,
    'VdaSqlExpressionOperatorType.regexp': 17,
    'VdaSqlExpressionOperatorType.regexp-ci': 18,
    'VdaSqlExpressionOperatorType.rem': 38,
    'VdaSqlExpressionOperatorType.similar-to': 21,
    'VdaSqlExpressionOperatorType.star': 36,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'VdaRoleGrant.create': 256,
    'VdaRoleGrant.delete': 16,
    'VdaRoleGrant.insert': 4,
    'VdaRoleGrant.none': 1,
    'VdaRoleGrant.privileges': 1024,
    'VdaRoleGrant.references': 64,
    'VdaRoleGrant.select': 2,
    'VdaRoleGrant.trigger': 128,
    'VdaRoleGrant.truncate': 32,
    'VdaRoleGrant.update': 8,
    'VdaRoleGrant.usage': 512,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {};

// `<declaration GType>.<property>` -> the GType of that property's own type.
//
// `PROP_ENUMS` one case wider, and a SEPARATE table on purpose. That one is a join with a
// contract — the GType it names has numbers, in this vocabulary or the owner's — and folding a
// plain type table in would mix "resolvable to numbers" with "not" and hand the distinction to
// the consumer. `ARIA_VALUE_ENUMS` beside `ARIA_VALUE_TYPES` is the same split.
//
// A row is ABSENT where no GType can be stated: a fundamental spelling outside the generator's
// closed map, a registered type with no `glib:type-name`, or a property with no `<type>`
// child. Absence therefore reads as "unknown" and never as "scalar".
export const PROP_TYPES = {
    'VdaConnectionParameter.name': 'gchararray',
    'VdaConnectionParameter.value': 'gchararray',
    'VdaInvalidQuery.message': 'gchararray',
    'VdaInvalidResult.message': 'gchararray',
    'VdaSqlCommandTableRelated.allias': 'gchararray',
    'VdaSqlCommandTableRelated.table': 'gchararray',
    'VdaSqlExpressionField.allias': 'gchararray',
    'VdaSqlExpressionField.name': 'gchararray',
    'VdaSqlExpressionField.table-ref': 'gchararray',
    'VdaSqlExpressionValue.connection': 'VdaConnection',
    'VdaSqlExpressionValue.value': 'VdaSqlValue',
    'VdaSqlExpressionValueParameter.gtype': 'GType',
    'VdaSqlExpressionValueParameter.name': 'gchararray',
    'VdaSqlExpressionValueParameter.parameters': 'VdaSqlParameters',
    'VdaSqlTableReference.allias': 'gchararray',
    'VdaSqlTableReference.name': 'gchararray',
    'VdaSqlValueMathExp.math': 'GCalcMathEquationManager',
    'VdaValueMathExp.parameters': 'VdaSqlParameters',
};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
