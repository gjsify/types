// The widget vocabulary of GoVirt-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GoVirt-1.0
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GoVirt',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Ovirt'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary', '@girs/rest-1.0/vocabulary'],
};

export const OWN_PROPS = {
    OvirtCdrom: ['file'],
    OvirtCluster: ['data-center-href', 'data-center-id'],
    OvirtCollection: ['collection-xml-name', 'href', 'resource-type', 'resource-xml-name', 'resources'],
    OvirtHost: ['cluster-href', 'cluster-id'],
    OvirtProxy: ['admin', 'ca-cert', 'session-id', 'sso-token'],
    OvirtResource: ['description', 'guid', 'href', 'name', 'xml-node'],
    OvirtStorageDomain: ['available', 'committed', 'data-center-href', 'data-center-id', 'data-center-ids', 'master', 'used'],
    OvirtVm: ['cluster-href', 'cluster-id', 'display', 'host-href', 'host-id'],
    OvirtVmDisplay: ['address', 'allow-override', 'ca-cert', 'expiry', 'host-subject', 'monitor-count', 'port', 'proxy-url', 'secure-port', 'smartcard', 'ticket'],
    OvirtVmPool: ['max-user-vms', 'prestarted-vms', 'size'],
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
    OvirtApi: ['OvirtApi', 'OvirtResource', 'GObject', 'GInitable'],
    OvirtCdrom: ['OvirtCdrom', 'OvirtResource', 'GObject', 'GInitable'],
    OvirtCluster: ['OvirtCluster', 'OvirtResource', 'GObject', 'GInitable'],
    OvirtCollection: ['OvirtCollection', 'GObject'],
    OvirtDataCenter: ['OvirtDataCenter', 'OvirtResource', 'GObject', 'GInitable'],
    OvirtDisk: ['OvirtDisk', 'OvirtResource', 'GObject', 'GInitable'],
    OvirtHost: ['OvirtHost', 'OvirtResource', 'GObject', 'GInitable'],
    OvirtProxy: ['OvirtProxy', 'RestProxy', 'GObject'],
    OvirtResource: ['OvirtResource', 'GObject', 'GInitable'],
    OvirtStorageDomain: ['OvirtStorageDomain', 'OvirtResource', 'GObject', 'GInitable'],
    OvirtVm: ['OvirtVm', 'OvirtResource', 'GObject', 'GInitable'],
    OvirtVmDisplay: ['OvirtVmDisplay', 'GObject'],
    OvirtVmPool: ['OvirtVmPool', 'OvirtResource', 'GObject', 'GInitable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

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
export const ENUM_VALUES = {};

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
    'OvirtCdrom.file': 'gchararray',
    'OvirtCluster.data-center-href': 'gchararray',
    'OvirtCluster.data-center-id': 'gchararray',
    'OvirtCollection.collection-xml-name': 'gchararray',
    'OvirtCollection.href': 'gchararray',
    'OvirtCollection.resource-type': 'GType',
    'OvirtCollection.resource-xml-name': 'gchararray',
    'OvirtHost.cluster-href': 'gchararray',
    'OvirtHost.cluster-id': 'gchararray',
    'OvirtProxy.admin': 'gboolean',
    'OvirtProxy.session-id': 'gchararray',
    'OvirtProxy.sso-token': 'gchararray',
    'OvirtResource.description': 'gchararray',
    'OvirtResource.guid': 'gchararray',
    'OvirtResource.href': 'gchararray',
    'OvirtResource.name': 'gchararray',
    'OvirtStorageDomain.available': 'guint64',
    'OvirtStorageDomain.committed': 'guint64',
    'OvirtStorageDomain.data-center-href': 'gchararray',
    'OvirtStorageDomain.data-center-id': 'gchararray',
    'OvirtStorageDomain.master': 'gboolean',
    'OvirtStorageDomain.used': 'guint64',
    'OvirtVm.cluster-href': 'gchararray',
    'OvirtVm.cluster-id': 'gchararray',
    'OvirtVm.display': 'OvirtVmDisplay',
    'OvirtVm.host-href': 'gchararray',
    'OvirtVm.host-id': 'gchararray',
    'OvirtVmDisplay.address': 'gchararray',
    'OvirtVmDisplay.allow-override': 'gboolean',
    'OvirtVmDisplay.expiry': 'guint',
    'OvirtVmDisplay.host-subject': 'gchararray',
    'OvirtVmDisplay.monitor-count': 'guint',
    'OvirtVmDisplay.port': 'guint',
    'OvirtVmDisplay.proxy-url': 'gchararray',
    'OvirtVmDisplay.secure-port': 'guint',
    'OvirtVmDisplay.smartcard': 'gboolean',
    'OvirtVmDisplay.ticket': 'gchararray',
    'OvirtVmPool.max-user-vms': 'guint',
    'OvirtVmPool.prestarted-vms': 'guint',
    'OvirtVmPool.size': 'guint',
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
    'OvirtProxy.admin': '0.0.2',
    'OvirtProxy.session-id': '0.3.1',
    'OvirtProxy.sso-token': '0.3.4',
};
