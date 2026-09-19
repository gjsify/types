// The widget vocabulary of Fwupd-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Fwupd-2.0 — library 2.1.7
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Fwupd',
    version: '2.0',
    libraryVersion: '2.1.7',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Fwupd', 'fwupd'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    FwupdClient: ['battery-level', 'battery-threshold', 'host-bkc', 'host-machine-id', 'host-product', 'host-security-id', 'host-vendor', 'percentage', 'percentage-full', 'status'],
    FwupdDevice: ['battery-level', 'battery-threshold', 'flags', 'id', 'parent', 'percentage', 'problems', 'request-flags', 'status', 'update-error', 'update-state', 'vendor', 'version', 'version-format'],
    FwupdPlugin: ['flags', 'name'],
    FwupdRelease: ['remote-id'],
    FwupdRemote: ['approval-required', 'automatic-reports', 'automatic-security-reports', 'enabled', 'flags', 'id'],
    FwupdReport: ['flags'],
    FwupdRequest: ['device-id', 'flags', 'id', 'image', 'kind', 'message'],
};

export const OWN_SIGNALS = {
    FwupdClient: ['changed', 'device-added', 'device-changed', 'device-removed', 'device-request', 'status-changed'],
    FwupdRequest: ['invalidate'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    FwupdBiosSetting: ['FwupdBiosSetting', 'GObject', 'FwupdCodec'],
    FwupdClient: ['FwupdClient', 'GObject'],
    FwupdDevice: ['FwupdDevice', 'GObject', 'FwupdCodec'],
    FwupdJcatBlob: ['FwupdJcatBlob', 'GObject', 'FwupdCodec'],
    FwupdJcatFile: ['FwupdJcatFile', 'GObject', 'FwupdCodec'],
    FwupdJcatItem: ['FwupdJcatItem', 'GObject', 'FwupdCodec'],
    FwupdJsonParser: ['FwupdJsonParser', 'GObject'],
    FwupdPlugin: ['FwupdPlugin', 'GObject', 'FwupdCodec'],
    FwupdRelease: ['FwupdRelease', 'GObject', 'FwupdCodec'],
    FwupdRemote: ['FwupdRemote', 'GObject', 'FwupdCodec'],
    FwupdReport: ['FwupdReport', 'GObject', 'FwupdCodec'],
    FwupdRequest: ['FwupdRequest', 'GObject', 'FwupdCodec'],
    FwupdSecurityAttr: ['FwupdSecurityAttr', 'GObject', 'FwupdCodec'],
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
    'FwupdClient.battery-level': '1.8.1',
    'FwupdClient.battery-threshold': '1.8.1',
    'FwupdClient.host-bkc': '1.7.3',
    'FwupdClient.host-machine-id': '1.3.2',
    'FwupdClient.host-product': '1.3.1',
    'FwupdClient.host-security-id': '1.5.0',
    'FwupdClient.host-vendor': '1.8.2',
    'FwupdClient.percentage': '0.7.3',
    'FwupdClient.percentage-full': '2.1.3',
    'FwupdClient.status': '0.7.0',
    'FwupdClient::changed': '0.7.0',
    'FwupdClient::device-added': '0.7.1',
    'FwupdClient::device-changed': '0.7.1',
    'FwupdClient::device-removed': '0.7.1',
    'FwupdClient::device-request': '1.6.2',
    'FwupdDevice.battery-level': '1.5.8',
    'FwupdDevice.battery-threshold': '1.5.8',
    'FwupdDevice.flags': '0.9.3',
    'FwupdDevice.id': '2.0.0',
    'FwupdDevice.parent': '1.0.8',
    'FwupdDevice.percentage': '1.8.11',
    'FwupdDevice.problems': '1.8.1',
    'FwupdDevice.request-flags': '1.9.10',
    'FwupdDevice.status': '1.4.0',
    'FwupdDevice.update-error': '0.9.8',
    'FwupdDevice.update-state': '0.9.8',
    'FwupdDevice.vendor': '2.0.17',
    'FwupdDevice.version': '1.8.15',
    'FwupdDevice.version-format': '1.2.9',
    'FwupdPlugin.flags': '1.5.0',
    'FwupdPlugin.name': '1.5.0',
    'FwupdRelease.remote-id': '1.8.0',
    'FwupdRemote.approval-required': '1.2.6',
    'FwupdRemote.automatic-reports': '1.3.3',
    'FwupdRemote.automatic-security-reports': '1.5.0',
    'FwupdRemote.enabled': '0.9.3',
    'FwupdRemote.flags': '1.9.4',
    'FwupdRemote.id': '0.9.3',
    'FwupdReport.flags': '1.9.1',
    'FwupdRequest.device-id': '1.8.2',
    'FwupdRequest.flags': '1.8.6',
    'FwupdRequest.id': '1.6.2',
    'FwupdRequest.image': '1.6.2',
    'FwupdRequest.kind': '1.6.2',
    'FwupdRequest.message': '1.6.2',
    'FwupdRequest::invalidate': '1.9.17',
};
