// The widget vocabulary of Gda-6.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gda-6.0 — prop(s) no TypeScript value satisfies: Gda.DataModelImport.xml-node Gda.Set.holders
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gda',
    version: '6.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Gda.DataModelImport.xml-node', 'Gda.Set.holders'],
    unresolvedProps: [],
    identifierPrefixes: ['Gda'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GdaBlobOp: ['connection'],
    GdaColumn: ['desc', 'id', 'name'],
    GdaConfig: ['system-filename', 'user-filename'],
    GdaConnection: ['auth-string', 'cnc-string', 'dsn', 'events-history-size', 'execution-slowdown', 'execution-timer', 'meta-store', 'provider'],
    GdaConnectionEvent: ['type'],
    GdaConnectionModelParams: ['cnc-string', 'pasword', 'user'],
    GdaDataAccessWrapper: ['model'],
    GdaDataComparator: ['new-model', 'old-model'],
    GdaDataModelArray: ['n-columns', 'read-only'],
    GdaDataModelDir: ['basedir'],
    GdaDataModelImport: ['data-string', 'filename', 'options', 'random-access', 'strict', 'xml-node'],
    GdaDataModelIter: ['current-row', 'data-model', 'update-model'],
    GdaDataPivot: ['model'],
    GdaDataProxy: ['cache-changes', 'defer-sync', 'model', 'prepend-null-entry', 'sample-size'],
    GdaDataSelect: ['connection', 'delete-stmt', 'exec-params', 'execution-delay', 'insert-stmt', 'model-usage', 'prepared-stmt', 'store-all-rows', 'update-stmt'],
    GdaDbCatalog: ['connection', 'schema-name'],
    GdaDbColumn: ['autoinc', 'check', 'comment', 'default', 'name', 'nnul', 'pkey', 'scale', 'size', 'table', 'unique'],
    GdaDbIndex: ['table'],
    GdaDbTable: ['comment', 'istemp'],
    GdaDbView: ['defstring', 'ifnoexist', 'istemp', 'replace'],
    GdaHolder: ['description', 'full-bind', 'g-type', 'id', 'name', 'not-null', 'plugin', 'simple-bind', 'source-column', 'source-model', 'validate-changes'],
    GdaMetaStore: ['catalog', 'cnc', 'cnc-string', 'schema'],
    GdaMetaStruct: ['features', 'meta-store'],
    GdaRepetitiveStatement: ['statement'],
    GdaRow: ['model', 'model-row', 'nb-values'],
    GdaServerOperation: ['connection', 'op-type', 'provider', 'spec-filename', 'spec-resource'],
    GdaSet: ['description', 'holders', 'id', 'name', 'validate-changes'],
    GdaSqlParser: ['mode', 'tokenizer-flavour'],
    GdaStatement: ['structure'],
    GdaTreeManager: ['func', 'recursive'],
    GdaTreeMgrColumns: ['connection', 'meta-store', 'schema', 'table-name'],
    GdaTreeMgrLabel: ['label'],
    GdaTreeMgrSchemas: ['connection', 'meta-store'],
    GdaTreeMgrSelect: ['connection', 'params', 'statement'],
    GdaTreeMgrTables: ['connection', 'meta-store', 'schema'],
    GdaTreeNode: ['name'],
    GdaXaTransaction: ['format-id', 'transaction-id'],
};

export const OWN_SIGNALS = {
    GdaBatch: ['changed'],
    GdaColumn: ['g-type-changed', 'name-changed'],
    GdaConfig: ['dsn-added', 'dsn-changed', 'dsn-removed', 'dsn-to-be-removed'],
    GdaConnection: ['closed', 'dsn-changed', 'error', 'opened', 'status-changed', 'transaction-status-changed'],
    GdaDataComparator: ['diff-computed'],
    GdaDataModel: ['access-changed', 'changed', 'reset', 'row-inserted', 'row-removed', 'row-updated'],
    GdaDataModelIter: ['end-of-data', 'row-changed'],
    GdaDataModelSelect: ['updated'],
    GdaDataProxy: ['filter-changed', 'row-changes-applied', 'row-delete-changed', 'sample-changed', 'sample-size-changed', 'validate-row-changes'],
    GdaHolder: ['changed', 'source-changed', 'to-default', 'validate-change'],
    GdaMetaStore: ['meta-changed', 'meta-reset', 'suggest-update'],
    GdaServerOperation: ['sequence-item-added', 'sequence-item-remove'],
    GdaSet: ['holder-attr-changed', 'holder-changed', 'holder-type-set', 'public-data-changed', 'source-model-changed', 'validate-holder-change', 'validate-set'],
    GdaStatement: ['checked', 'reset'],
    GdaTree: ['node-changed', 'node-deleted', 'node-has-child-toggled', 'node-inserted'],
    GdaTreeNode: ['node-changed', 'node-deleted', 'node-has-child-toggled', 'node-inserted'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GdaBatch: ['GdaBatch', 'GObject'],
    GdaBlobOp: ['GdaBlobOp', 'GObject'],
    GdaColumn: ['GdaColumn', 'GObject'],
    GdaConfig: ['GdaConfig', 'GObject'],
    GdaConnection: ['GdaConnection', 'GObject', 'GdaLockable'],
    GdaConnectionEvent: ['GdaConnectionEvent', 'GObject'],
    GdaConnectionModelParams: ['GdaConnectionModelParams', 'GObject'],
    GdaDataAccessWrapper: ['GdaDataAccessWrapper', 'GObject', 'GdaDataModel'],
    GdaDataComparator: ['GdaDataComparator', 'GObject'],
    GdaDataModelArray: ['GdaDataModelArray', 'GObject', 'GdaDataModel'],
    GdaDataModelDir: ['GdaDataModelDir', 'GObject', 'GdaDataModel'],
    GdaDataModelImport: ['GdaDataModelImport', 'GObject', 'GdaDataModel'],
    GdaDataModelImportIter: ['GdaDataModelImportIter', 'GdaDataModelIter', 'GdaSet', 'GObject'],
    GdaDataModelIter: ['GdaDataModelIter', 'GdaSet', 'GObject'],
    GdaDataModelSelect: ['GdaDataModelSelect', 'GObject', 'GdaDataModel'],
    GdaDataPivot: ['GdaDataPivot', 'GObject', 'GdaDataModel'],
    GdaDataProxy: ['GdaDataProxy', 'GObject', 'GdaDataModel'],
    GdaDataSelect: ['GdaDataSelect', 'GObject', 'GdaDataModel'],
    GdaDataSelectIter: ['GdaDataSelectIter', 'GdaDataModelIter', 'GdaSet', 'GObject'],
    GdaDbBase: ['GdaDbBase', 'GObject'],
    GdaDbCatalog: ['GdaDbCatalog', 'GObject'],
    GdaDbColumn: ['GdaDbColumn', 'GObject', 'GdaDbBuildable', 'GdaDdlModifiable'],
    GdaDbFkey: ['GdaDbFkey', 'GObject', 'GdaDbBuildable'],
    GdaDbIndex: ['GdaDbIndex', 'GdaDbBase', 'GObject', 'GdaDdlModifiable'],
    GdaDbIndexField: ['GdaDbIndexField', 'GObject'],
    GdaDbTable: ['GdaDbTable', 'GdaDbBase', 'GObject', 'GdaDbBuildable', 'GdaDdlModifiable'],
    GdaDbView: ['GdaDbView', 'GdaDbBase', 'GObject', 'GdaDbBuildable', 'GdaDdlModifiable'],
    GdaHandlerBin: ['GdaHandlerBin', 'GObject', 'GdaDataHandler'],
    GdaHandlerBoolean: ['GdaHandlerBoolean', 'GObject', 'GdaDataHandler'],
    GdaHandlerNumerical: ['GdaHandlerNumerical', 'GObject', 'GdaDataHandler'],
    GdaHandlerString: ['GdaHandlerString', 'GObject', 'GdaDataHandler'],
    GdaHandlerText: ['GdaHandlerText', 'GObject', 'GdaDataHandler'],
    GdaHandlerTime: ['GdaHandlerTime', 'GObject', 'GdaDataHandler'],
    GdaHandlerType: ['GdaHandlerType', 'GObject', 'GdaDataHandler'],
    GdaHolder: ['GdaHolder', 'GObject', 'GdaLockable'],
    GdaMetaStore: ['GdaMetaStore', 'GObject'],
    GdaMetaStruct: ['GdaMetaStruct', 'GObject'],
    GdaPStmt: ['GdaPStmt', 'GObject'],
    GdaRepetitiveStatement: ['GdaRepetitiveStatement', 'GObject'],
    GdaRow: ['GdaRow', 'GObject'],
    GdaServerOperation: ['GdaServerOperation', 'GObject'],
    GdaSet: ['GdaSet', 'GObject'],
    GdaShort: ['GdaShort'],
    GdaSqlBuilder: ['GdaSqlBuilder', 'GObject'],
    GdaSqlParser: ['GdaSqlParser', 'GObject', 'GdaLockable'],
    GdaStatement: ['GdaStatement', 'GObject'],
    GdaTransactionStatus: ['GdaTransactionStatus', 'GObject'],
    GdaTree: ['GdaTree', 'GObject'],
    GdaTreeManager: ['GdaTreeManager', 'GObject'],
    GdaTreeMgrColumns: ['GdaTreeMgrColumns', 'GdaTreeManager', 'GObject'],
    GdaTreeMgrLabel: ['GdaTreeMgrLabel', 'GdaTreeManager', 'GObject'],
    GdaTreeMgrSchemas: ['GdaTreeMgrSchemas', 'GdaTreeManager', 'GObject'],
    GdaTreeMgrSelect: ['GdaTreeMgrSelect', 'GdaTreeManager', 'GObject'],
    GdaTreeMgrTables: ['GdaTreeMgrTables', 'GdaTreeManager', 'GObject'],
    GdaTreeNode: ['GdaTreeNode', 'GObject'],
    GdaUShort: ['GdaUShort'],
    GdaXaTransaction: ['GdaXaTransaction', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GdaForeignKeyMatch: ['none', 'full', 'partial'],
    GdaForeignKeyRule: ['none', 'cascade', 'set-null', 'set-default', 'restrict', 'no-action'],
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
    'GdaForeignKeyMatch.full': 1,
    'GdaForeignKeyMatch.none': 0,
    'GdaForeignKeyMatch.partial': 2,
    'GdaForeignKeyRule.cascade': 1,
    'GdaForeignKeyRule.no-action': 5,
    'GdaForeignKeyRule.none': 0,
    'GdaForeignKeyRule.restrict': 4,
    'GdaForeignKeyRule.set-default': 3,
    'GdaForeignKeyRule.set-null': 2,
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
    'GdaColumnAttributes.auto-increment': 128,
    'GdaColumnAttributes.can-be-null': 64,
    'GdaColumnAttributes.check': 16,
    'GdaColumnAttributes.foreign-key': 8,
    'GdaColumnAttributes.have-default': 32,
    'GdaColumnAttributes.none': 1,
    'GdaColumnAttributes.primary-key': 2,
    'GdaColumnAttributes.unique': 4,
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
    'GdaBlobOp.connection': 'GdaConnection',
    'GdaColumn.desc': 'gchararray',
    'GdaColumn.id': 'gchararray',
    'GdaColumn.name': 'gchararray',
    'GdaConfig.system-filename': 'gchararray',
    'GdaConfig.user-filename': 'gchararray',
    'GdaConnection.auth-string': 'gchararray',
    'GdaConnection.cnc-string': 'gchararray',
    'GdaConnection.dsn': 'gchararray',
    'GdaConnection.events-history-size': 'gint',
    'GdaConnection.execution-slowdown': 'guint',
    'GdaConnection.execution-timer': 'gboolean',
    'GdaConnection.meta-store': 'GdaMetaStore',
    'GdaConnection.provider': 'GdaServerProvider',
    'GdaConnectionEvent.type': 'gint',
    'GdaConnectionModelParams.cnc-string': 'gchararray',
    'GdaConnectionModelParams.pasword': 'gchararray',
    'GdaConnectionModelParams.user': 'gchararray',
    'GdaDataAccessWrapper.model': 'GdaDataModel',
    'GdaDataComparator.new-model': 'GdaDataModel',
    'GdaDataComparator.old-model': 'GdaDataModel',
    'GdaDataModelArray.n-columns': 'guint',
    'GdaDataModelArray.read-only': 'gboolean',
    'GdaDataModelDir.basedir': 'gchararray',
    'GdaDataModelImport.data-string': 'gchararray',
    'GdaDataModelImport.filename': 'gchararray',
    'GdaDataModelImport.options': 'GdaSet',
    'GdaDataModelImport.random-access': 'gboolean',
    'GdaDataModelImport.strict': 'gboolean',
    'GdaDataModelImport.xml-node': 'gpointer',
    'GdaDataModelIter.current-row': 'gint',
    'GdaDataModelIter.data-model': 'GdaDataModel',
    'GdaDataModelIter.update-model': 'gboolean',
    'GdaDataPivot.model': 'GdaDataModel',
    'GdaDataProxy.cache-changes': 'gboolean',
    'GdaDataProxy.defer-sync': 'gboolean',
    'GdaDataProxy.model': 'GdaDataModel',
    'GdaDataProxy.prepend-null-entry': 'gboolean',
    'GdaDataProxy.sample-size': 'gint',
    'GdaDataSelect.connection': 'GdaConnection',
    'GdaDataSelect.delete-stmt': 'GdaStatement',
    'GdaDataSelect.exec-params': 'GdaSet',
    'GdaDataSelect.execution-delay': 'gdouble',
    'GdaDataSelect.insert-stmt': 'GdaStatement',
    'GdaDataSelect.model-usage': 'guint',
    'GdaDataSelect.prepared-stmt': 'GdaPStmt',
    'GdaDataSelect.store-all-rows': 'gboolean',
    'GdaDataSelect.update-stmt': 'GdaStatement',
    'GdaDbCatalog.connection': 'GdaConnection',
    'GdaDbCatalog.schema-name': 'gchararray',
    'GdaDbColumn.autoinc': 'gboolean',
    'GdaDbColumn.check': 'gchararray',
    'GdaDbColumn.comment': 'gchararray',
    'GdaDbColumn.default': 'gchararray',
    'GdaDbColumn.name': 'gchararray',
    'GdaDbColumn.nnul': 'gboolean',
    'GdaDbColumn.pkey': 'gboolean',
    'GdaDbColumn.scale': 'guint',
    'GdaDbColumn.size': 'guint',
    'GdaDbColumn.table': 'GdaDbTable',
    'GdaDbColumn.unique': 'gboolean',
    'GdaDbIndex.table': 'GdaDbTable',
    'GdaDbTable.comment': 'gchararray',
    'GdaDbTable.istemp': 'gchararray',
    'GdaDbView.defstring': 'gchararray',
    'GdaDbView.ifnoexist': 'gboolean',
    'GdaDbView.istemp': 'gboolean',
    'GdaDbView.replace': 'gboolean',
    'GdaHolder.description': 'gchararray',
    'GdaHolder.full-bind': 'GdaHolder',
    'GdaHolder.g-type': 'GType',
    'GdaHolder.id': 'gchararray',
    'GdaHolder.name': 'gchararray',
    'GdaHolder.not-null': 'gboolean',
    'GdaHolder.plugin': 'gchararray',
    'GdaHolder.simple-bind': 'GdaHolder',
    'GdaHolder.source-column': 'gint',
    'GdaHolder.source-model': 'GdaDataModel',
    'GdaHolder.validate-changes': 'gboolean',
    'GdaMetaStore.catalog': 'gchararray',
    'GdaMetaStore.cnc': 'GdaConnection',
    'GdaMetaStore.cnc-string': 'gchararray',
    'GdaMetaStore.schema': 'gchararray',
    'GdaMetaStruct.features': 'guint',
    'GdaMetaStruct.meta-store': 'GdaMetaStore',
    'GdaRepetitiveStatement.statement': 'GdaStatement',
    'GdaRow.model': 'GdaDataModel',
    'GdaRow.model-row': 'gint',
    'GdaRow.nb-values': 'gint',
    'GdaServerOperation.connection': 'GdaConnection',
    'GdaServerOperation.op-type': 'gint',
    'GdaServerOperation.provider': 'GdaServerProvider',
    'GdaServerOperation.spec-filename': 'gchararray',
    'GdaServerOperation.spec-resource': 'gchararray',
    'GdaSet.description': 'gchararray',
    'GdaSet.holders': 'gpointer',
    'GdaSet.id': 'gchararray',
    'GdaSet.name': 'gchararray',
    'GdaSet.validate-changes': 'gboolean',
    'GdaSqlParser.mode': 'gint',
    'GdaSqlParser.tokenizer-flavour': 'gint',
    'GdaTreeManager.recursive': 'gboolean',
    'GdaTreeMgrColumns.connection': 'GdaConnection',
    'GdaTreeMgrColumns.meta-store': 'GdaMetaStore',
    'GdaTreeMgrColumns.schema': 'gchararray',
    'GdaTreeMgrColumns.table-name': 'gchararray',
    'GdaTreeMgrLabel.label': 'gchararray',
    'GdaTreeMgrSchemas.connection': 'GdaConnection',
    'GdaTreeMgrSchemas.meta-store': 'GdaMetaStore',
    'GdaTreeMgrSelect.connection': 'GdaConnection',
    'GdaTreeMgrSelect.params': 'GdaSet',
    'GdaTreeMgrSelect.statement': 'GdaStatement',
    'GdaTreeMgrTables.connection': 'GdaConnection',
    'GdaTreeMgrTables.meta-store': 'GdaMetaStore',
    'GdaTreeMgrTables.schema': 'gchararray',
    'GdaTreeNode.name': 'gchararray',
    'GdaXaTransaction.format-id': 'guint',
    'GdaXaTransaction.transaction-id': 'gchararray',
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

export const SINCE = {
    'GdaConnection.events-history-size': '4.2',
    'GdaConnection.execution-slowdown': '5.2.0',
    'GdaConnection.execution-timer': '4.2.9',
    'GdaConnection::status-changed': '6.0',
    'GdaDataModelImport.strict': '4.2.1',
    'GdaDataProxy.cache-changes': '5.2',
    'GdaDataSelect.execution-delay': '4.2.9',
    'GdaHolder.validate-changes': '5.2.0',
    'GdaSet.validate-changes': '5.2.0',
    'GdaSet::holder-type-set': '4.2',
    'GdaSet::source-model-changed': '4.2',
    'GdaTree::node-changed': '4.2',
    'GdaTree::node-deleted': '4.2',
    'GdaTree::node-has-child-toggled': '4.2',
    'GdaTree::node-inserted': '4.2',
    'GdaTreeMgrColumns.meta-store': '4.2.4',
    'GdaTreeMgrSchemas.meta-store': '4.2.4',
    'GdaTreeMgrTables.meta-store': '4.2.4',
    'GdaTreeNode::node-changed': '4.2',
    'GdaTreeNode::node-deleted': '4.2',
    'GdaTreeNode::node-has-child-toggled': '4.2',
    'GdaTreeNode::node-inserted': '4.2',
};
