// The widget vocabulary of Zeitgeist-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Zeitgeist-2.0
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Zeitgeist',
    version: '2.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Zeitgeist'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    ZeitgeistDataSource: ['description', 'enabled', 'event-templates', 'name', 'running', 'timestamp', 'unique-id'],
    ZeitgeistEvent: ['actor', 'id', 'interpretation', 'manifestation', 'origin', 'payload', 'subjects', 'timestamp'],
    ZeitgeistMonitor: ['event-templates', 'time-range'],
    ZeitgeistQueuedProxyWrapper: ['is-connected', 'proxy-created'],
    ZeitgeistSubject: ['current-origin', 'current-uri', 'interpretation', 'manifestation', 'mimetype', 'origin', 'storage', 'text', 'uri'],
    ZeitgeistTimeRange: ['end', 'start'],
};

export const OWN_SIGNALS = {
    ZeitgeistDataSourceRegistry: ['source-disconnected', 'source-enabled', 'source-registered'],
    ZeitgeistMonitor: ['events-deleted', 'events-inserted'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    ZeitgeistDataSource: ['ZeitgeistDataSource', 'GObject'],
    ZeitgeistDataSourceRegistry: ['ZeitgeistDataSourceRegistry', 'ZeitgeistQueuedProxyWrapper', 'GObject'],
    ZeitgeistEvent: ['ZeitgeistEvent', 'GObject'],
    ZeitgeistIndex: ['ZeitgeistIndex', 'ZeitgeistQueuedProxyWrapper', 'GObject'],
    ZeitgeistLog: ['ZeitgeistLog', 'ZeitgeistQueuedProxyWrapper', 'GObject'],
    ZeitgeistMonitor: ['ZeitgeistMonitor', 'GObject', 'ZeitgeistRemoteMonitor'],
    ZeitgeistQueuedProxyWrapperQueuedMethod: ['ZeitgeistQueuedProxyWrapperQueuedMethod'],
    ZeitgeistSimpleResultSet: ['ZeitgeistSimpleResultSet', 'GObject', 'ZeitgeistResultSet'],
    ZeitgeistSubject: ['ZeitgeistSubject', 'GObject'],
    ZeitgeistTimeRange: ['ZeitgeistTimeRange', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    ZeitgeistRelevantResultType: ['recent', 'related'],
    ZeitgeistResultType: ['most-recent-events', 'least-recent-events', 'most-recent-subjects', 'least-recent-subjects', 'most-popular-subjects', 'least-popular-subjects', 'most-popular-actor', 'least-popular-actor', 'most-recent-actor', 'least-recent-actor', 'most-recent-origin', 'least-recent-origin', 'most-popular-origin', 'least-popular-origin', 'oldest-actor', 'most-recent-subject-interpretation', 'least-recent-subject-interpretation', 'most-popular-subject-interpretation', 'least-popular-subject-interpretation', 'most-recent-mimetype', 'least-recent-mimetype', 'most-popular-mimetype', 'least-popular-mimetype', 'most-recent-current-uri', 'least-recent-current-uri', 'most-popular-current-uri', 'least-popular-current-uri', 'most-recent-event-origin', 'least-recent-event-origin', 'most-popular-event-origin', 'least-popular-event-origin', 'most-recent-current-origin', 'least-recent-current-origin', 'most-popular-current-origin', 'least-popular-current-origin', 'relevancy'],
    ZeitgeistStorageState: ['not-available', 'available', 'any'],
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
    'ZeitgeistRelevantResultType.recent': 0,
    'ZeitgeistRelevantResultType.related': 1,
    'ZeitgeistResultType.least-popular-actor': 7,
    'ZeitgeistResultType.least-popular-current-origin': 34,
    'ZeitgeistResultType.least-popular-current-uri': 26,
    'ZeitgeistResultType.least-popular-event-origin': 30,
    'ZeitgeistResultType.least-popular-mimetype': 22,
    'ZeitgeistResultType.least-popular-origin': 13,
    'ZeitgeistResultType.least-popular-subject-interpretation': 18,
    'ZeitgeistResultType.least-popular-subjects': 5,
    'ZeitgeistResultType.least-recent-actor': 9,
    'ZeitgeistResultType.least-recent-current-origin': 32,
    'ZeitgeistResultType.least-recent-current-uri': 24,
    'ZeitgeistResultType.least-recent-event-origin': 28,
    'ZeitgeistResultType.least-recent-events': 1,
    'ZeitgeistResultType.least-recent-mimetype': 20,
    'ZeitgeistResultType.least-recent-origin': 11,
    'ZeitgeistResultType.least-recent-subject-interpretation': 16,
    'ZeitgeistResultType.least-recent-subjects': 3,
    'ZeitgeistResultType.most-popular-actor': 6,
    'ZeitgeistResultType.most-popular-current-origin': 33,
    'ZeitgeistResultType.most-popular-current-uri': 25,
    'ZeitgeistResultType.most-popular-event-origin': 29,
    'ZeitgeistResultType.most-popular-mimetype': 21,
    'ZeitgeistResultType.most-popular-origin': 12,
    'ZeitgeistResultType.most-popular-subject-interpretation': 17,
    'ZeitgeistResultType.most-popular-subjects': 4,
    'ZeitgeistResultType.most-recent-actor': 8,
    'ZeitgeistResultType.most-recent-current-origin': 31,
    'ZeitgeistResultType.most-recent-current-uri': 23,
    'ZeitgeistResultType.most-recent-event-origin': 27,
    'ZeitgeistResultType.most-recent-events': 0,
    'ZeitgeistResultType.most-recent-mimetype': 19,
    'ZeitgeistResultType.most-recent-origin': 10,
    'ZeitgeistResultType.most-recent-subject-interpretation': 15,
    'ZeitgeistResultType.most-recent-subjects': 2,
    'ZeitgeistResultType.oldest-actor': 14,
    'ZeitgeistResultType.relevancy': 100,
    'ZeitgeistStorageState.any': 2,
    'ZeitgeistStorageState.available': 1,
    'ZeitgeistStorageState.not-available': 0,
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
export const FLAG_VALUES = {};

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
    'ZeitgeistDataSource.description': 'gchararray',
    'ZeitgeistDataSource.enabled': 'gboolean',
    'ZeitgeistDataSource.name': 'gchararray',
    'ZeitgeistDataSource.running': 'gboolean',
    'ZeitgeistDataSource.timestamp': 'gint64',
    'ZeitgeistDataSource.unique-id': 'gchararray',
    'ZeitgeistEvent.actor': 'gchararray',
    'ZeitgeistEvent.id': 'guint',
    'ZeitgeistEvent.interpretation': 'gchararray',
    'ZeitgeistEvent.manifestation': 'gchararray',
    'ZeitgeistEvent.origin': 'gchararray',
    'ZeitgeistEvent.timestamp': 'gint64',
    'ZeitgeistMonitor.time-range': 'ZeitgeistTimeRange',
    'ZeitgeistQueuedProxyWrapper.is-connected': 'gboolean',
    'ZeitgeistQueuedProxyWrapper.proxy-created': 'gboolean',
    'ZeitgeistSubject.current-origin': 'gchararray',
    'ZeitgeistSubject.current-uri': 'gchararray',
    'ZeitgeistSubject.interpretation': 'gchararray',
    'ZeitgeistSubject.manifestation': 'gchararray',
    'ZeitgeistSubject.mimetype': 'gchararray',
    'ZeitgeistSubject.origin': 'gchararray',
    'ZeitgeistSubject.storage': 'gchararray',
    'ZeitgeistSubject.text': 'gchararray',
    'ZeitgeistSubject.uri': 'gchararray',
    'ZeitgeistTimeRange.end': 'gint64',
    'ZeitgeistTimeRange.start': 'gint64',
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
