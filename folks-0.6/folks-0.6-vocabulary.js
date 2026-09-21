// The widget vocabulary of Folks-0.6 as runtime data.
//
// GENERATED — do not edit. Provenance: Folks-0.6 — prop(s) no TypeScript value satisfies: Folks.AbstractFieldDetails.value
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Folks',
    version: '0.6',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Folks.AbstractFieldDetails.value'],
    unresolvedProps: [],
    identifierPrefixes: ['Folks'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    FolksAbstractFieldDetails: ['id', 'parameters', 't-destroy-func', 't-dup-func', 't-type', 'value'],
    FolksAliasDetails: ['alias'],
    FolksAvatarDetails: ['avatar'],
    FolksBackendStore: ['enabled-backends', 'is-prepared'],
    FolksBirthdayDetails: ['birthday', 'calendar-event-id'],
    FolksDebug: ['colour-enabled', 'debug-output-enabled'],
    FolksEmailDetails: ['email-addresses'],
    FolksFavouriteDetails: ['is-favourite'],
    FolksGenderDetails: ['gender'],
    FolksGroupDetails: ['groups'],
    FolksImDetails: ['im-addresses'],
    FolksIndividual: ['id', 'is-user', 'personas', 'trust-level'],
    FolksIndividualAggregator: ['backend-store', 'individuals', 'user'],
    FolksLocalIdDetails: ['local-ids'],
    FolksLocationDetails: ['location'],
    FolksNameDetails: ['full-name', 'nickname', 'structured-name'],
    FolksNoteDetails: ['notes'],
    FolksNoteFieldDetails: ['uid'],
    FolksPhoneDetails: ['phone-numbers'],
    FolksPostalAddress: ['address-format', 'country', 'extension', 'locality', 'po-box', 'postal-code', 'region', 'street', 'uid'],
    FolksPostalAddressDetails: ['postal-addresses'],
    FolksPresenceDetails: ['client-types', 'presence-message', 'presence-status', 'presence-type'],
    FolksQuery: ['match-fields'],
    FolksRole: ['organisation-name', 'role', 'title', 'uid'],
    FolksRoleDetails: ['roles'],
    FolksSearchView: ['query'],
    FolksSimpleQuery: ['query-locale', 'query-string'],
    FolksStructuredName: ['additional-names', 'family-name', 'given-name', 'prefixes', 'suffixes'],
    FolksUrlDetails: ['urls'],
    FolksWebServiceDetails: ['web-service-addresses'],
};

export const OWN_SIGNALS = {
    FolksBackendStore: ['backend-available'],
    FolksDebug: ['print-status'],
    FolksGroupDetails: ['group-changed'],
    FolksIndividual: ['personas-changed', 'removed'],
    FolksIndividualAggregator: ['individuals-changed', 'individuals-changed-detailed'],
    FolksSearchView: ['individuals-changed-detailed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    FolksAvatarCache: ['FolksAvatarCache', 'GObject'],
    FolksBackendStore: ['FolksBackendStore', 'GObject'],
    FolksDebug: ['FolksDebug', 'GObject'],
    FolksEmailFieldDetails: ['FolksEmailFieldDetails', 'FolksAbstractFieldDetails', 'GObject'],
    FolksExtendedFieldDetails: ['FolksExtendedFieldDetails', 'FolksAbstractFieldDetails', 'GObject'],
    FolksImFieldDetails: ['FolksImFieldDetails', 'FolksAbstractFieldDetails', 'GObject'],
    FolksIndividual: ['FolksIndividual', 'GObject', 'FolksAliasDetails', 'FolksAvatarDetails', 'FolksBirthdayDetails', 'FolksEmailDetails', 'FolksExtendedInfo', 'FolksFavouriteDetails', 'FolksGenderDetails', 'FolksGroupDetails', 'FolksImDetails', 'FolksInteractionDetails', 'FolksLocalIdDetails', 'FolksLocationDetails', 'FolksNameDetails', 'FolksNoteDetails', 'FolksPresenceDetails', 'FolksPhoneDetails', 'FolksPostalAddressDetails', 'FolksRoleDetails', 'FolksUrlDetails', 'FolksWebServiceDetails'],
    FolksIndividualAggregator: ['FolksIndividualAggregator', 'GObject'],
    FolksLocation: ['FolksLocation', 'GObject'],
    FolksNoteFieldDetails: ['FolksNoteFieldDetails', 'FolksAbstractFieldDetails', 'GObject'],
    FolksPhoneFieldDetails: ['FolksPhoneFieldDetails', 'FolksAbstractFieldDetails', 'GObject'],
    FolksPostalAddress: ['FolksPostalAddress', 'GObject'],
    FolksPostalAddressFieldDetails: ['FolksPostalAddressFieldDetails', 'FolksAbstractFieldDetails', 'GObject'],
    FolksPotentialMatch: ['FolksPotentialMatch', 'GObject'],
    FolksRole: ['FolksRole', 'GObject'],
    FolksRoleFieldDetails: ['FolksRoleFieldDetails', 'FolksAbstractFieldDetails', 'GObject'],
    FolksSearchView: ['FolksSearchView', 'GObject'],
    FolksSimpleQuery: ['FolksSimpleQuery', 'FolksQuery', 'GObject'],
    FolksStructuredName: ['FolksStructuredName', 'GObject'],
    FolksUrlFieldDetails: ['FolksUrlFieldDetails', 'FolksAbstractFieldDetails', 'GObject'],
    FolksUtils: ['FolksUtils', 'GObject'],
    FolksWebServiceFieldDetails: ['FolksWebServiceFieldDetails', 'FolksAbstractFieldDetails', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    FolksGender: ['unspecified', 'male', 'female'],
    FolksGroupDetailsChangeReason: ['none', 'offline', 'kicked', 'busy', 'invited', 'banned', 'error', 'invalid-member', 'no-answer', 'renamed', 'permission-denied', 'separated'],
    FolksMatchResult: ['none', 'very-low', 'low', 'medium', 'high', 'very-high', 'min', 'max'],
    FolksMaybeBool: ['unset', 'false', 'true'],
    FolksPersonaDetail: ['invalid', 'alias', 'avatar', 'birthday', 'email-addresses', 'full-name', 'gender', 'im-addresses', 'is-favourite', 'local-ids', 'location', 'nickname', 'notes', 'phone-numbers', 'postal-addresses', 'roles', 'structured-name', 'urls', 'web-service-addresses', 'groups', 'im-interaction-count', 'last-im-interaction-datetime', 'call-interaction-count', 'last-call-interaction-datetime', 'anti-links', 'extended-info'],
    FolksPersonaStoreTrust: ['none', 'partial', 'full'],
    FolksPresenceType: ['unset', 'offline', 'available', 'away', 'extended-away', 'hidden', 'busy', 'unknown', 'error'],
    FolksTrustLevel: ['none', 'personas'],
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
    'FolksGender.female': 2,
    'FolksGender.male': 1,
    'FolksGender.unspecified': 0,
    'FolksGroupDetailsChangeReason.banned': 5,
    'FolksGroupDetailsChangeReason.busy': 3,
    'FolksGroupDetailsChangeReason.error': 6,
    'FolksGroupDetailsChangeReason.invalid-member': 7,
    'FolksGroupDetailsChangeReason.invited': 4,
    'FolksGroupDetailsChangeReason.kicked': 2,
    'FolksGroupDetailsChangeReason.no-answer': 8,
    'FolksGroupDetailsChangeReason.none': 0,
    'FolksGroupDetailsChangeReason.offline': 1,
    'FolksGroupDetailsChangeReason.permission-denied': 10,
    'FolksGroupDetailsChangeReason.renamed': 9,
    'FolksGroupDetailsChangeReason.separated': 11,
    'FolksMatchResult.high': 3,
    'FolksMatchResult.low': 1,
    'FolksMatchResult.medium': 2,
    'FolksMatchResult.none': -1,
    'FolksMatchResult.very-high': 4,
    'FolksMatchResult.very-low': 0,
    'FolksMaybeBool.false': 1,
    'FolksMaybeBool.true': 2,
    'FolksMaybeBool.unset': 0,
    'FolksPersonaDetail.alias': 0,
    'FolksPersonaDetail.anti-links': 22,
    'FolksPersonaDetail.avatar': 0,
    'FolksPersonaDetail.birthday': 1,
    'FolksPersonaDetail.call-interaction-count': 20,
    'FolksPersonaDetail.email-addresses': 2,
    'FolksPersonaDetail.extended-info': 23,
    'FolksPersonaDetail.full-name': 3,
    'FolksPersonaDetail.gender': 4,
    'FolksPersonaDetail.groups': 17,
    'FolksPersonaDetail.im-addresses': 5,
    'FolksPersonaDetail.im-interaction-count': 18,
    'FolksPersonaDetail.invalid': -1,
    'FolksPersonaDetail.is-favourite': 6,
    'FolksPersonaDetail.last-call-interaction-datetime': 21,
    'FolksPersonaDetail.last-im-interaction-datetime': 19,
    'FolksPersonaDetail.local-ids': 7,
    'FolksPersonaDetail.location': 8,
    'FolksPersonaDetail.nickname': 9,
    'FolksPersonaDetail.notes': 10,
    'FolksPersonaDetail.phone-numbers': 11,
    'FolksPersonaDetail.postal-addresses': 12,
    'FolksPersonaDetail.roles': 13,
    'FolksPersonaDetail.structured-name': 14,
    'FolksPersonaDetail.urls': 15,
    'FolksPersonaDetail.web-service-addresses': 16,
    'FolksPersonaStoreTrust.full': 2,
    'FolksPersonaStoreTrust.none': 0,
    'FolksPersonaStoreTrust.partial': 1,
    'FolksPresenceType.available': 2,
    'FolksPresenceType.away': 3,
    'FolksPresenceType.busy': 6,
    'FolksPresenceType.error': 8,
    'FolksPresenceType.extended-away': 4,
    'FolksPresenceType.hidden': 5,
    'FolksPresenceType.offline': 1,
    'FolksPresenceType.unknown': 7,
    'FolksPresenceType.unset': 0,
    'FolksTrustLevel.none': 0,
    'FolksTrustLevel.personas': 1,
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
export const ENUM_VALUES_UNREADABLE = {
    'FolksMatchResult.max': '(null)',
    'FolksMatchResult.min': '(null)',
};

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
export const PROP_ENUMS = {
    'FolksGenderDetails.gender': 'FolksGender',
    'FolksIndividual.trust-level': 'FolksTrustLevel',
    'FolksPresenceDetails.presence-type': 'FolksPresenceType',
};

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
    'FolksAbstractFieldDetails.id': 'gchararray',
    'FolksAbstractFieldDetails.parameters': 'GeeMultiMap',
    'FolksAbstractFieldDetails.t-type': 'GType',
    'FolksAbstractFieldDetails.value': 'gpointer',
    'FolksAliasDetails.alias': 'gchararray',
    'FolksAvatarDetails.avatar': 'GLoadableIcon',
    'FolksBackendStore.enabled-backends': 'GeeMap',
    'FolksBackendStore.is-prepared': 'gboolean',
    'FolksBirthdayDetails.calendar-event-id': 'gchararray',
    'FolksDebug.colour-enabled': 'gboolean',
    'FolksDebug.debug-output-enabled': 'gboolean',
    'FolksEmailDetails.email-addresses': 'GeeSet',
    'FolksFavouriteDetails.is-favourite': 'gboolean',
    'FolksGenderDetails.gender': 'FolksGender',
    'FolksGroupDetails.groups': 'GeeSet',
    'FolksImDetails.im-addresses': 'GeeMultiMap',
    'FolksIndividual.id': 'gchararray',
    'FolksIndividual.is-user': 'gboolean',
    'FolksIndividual.personas': 'GeeSet',
    'FolksIndividual.trust-level': 'FolksTrustLevel',
    'FolksIndividualAggregator.backend-store': 'FolksBackendStore',
    'FolksIndividualAggregator.individuals': 'GeeMap',
    'FolksIndividualAggregator.user': 'FolksIndividual',
    'FolksLocalIdDetails.local-ids': 'GeeSet',
    'FolksLocationDetails.location': 'FolksLocation',
    'FolksNameDetails.full-name': 'gchararray',
    'FolksNameDetails.nickname': 'gchararray',
    'FolksNameDetails.structured-name': 'FolksStructuredName',
    'FolksNoteDetails.notes': 'GeeSet',
    'FolksNoteFieldDetails.uid': 'gchararray',
    'FolksPhoneDetails.phone-numbers': 'GeeSet',
    'FolksPostalAddress.address-format': 'gchararray',
    'FolksPostalAddress.country': 'gchararray',
    'FolksPostalAddress.extension': 'gchararray',
    'FolksPostalAddress.locality': 'gchararray',
    'FolksPostalAddress.po-box': 'gchararray',
    'FolksPostalAddress.postal-code': 'gchararray',
    'FolksPostalAddress.region': 'gchararray',
    'FolksPostalAddress.street': 'gchararray',
    'FolksPostalAddress.uid': 'gchararray',
    'FolksPostalAddressDetails.postal-addresses': 'GeeSet',
    'FolksPresenceDetails.presence-message': 'gchararray',
    'FolksPresenceDetails.presence-status': 'gchararray',
    'FolksPresenceDetails.presence-type': 'FolksPresenceType',
    'FolksRole.organisation-name': 'gchararray',
    'FolksRole.role': 'gchararray',
    'FolksRole.title': 'gchararray',
    'FolksRole.uid': 'gchararray',
    'FolksRoleDetails.roles': 'GeeSet',
    'FolksSearchView.query': 'FolksQuery',
    'FolksSimpleQuery.query-locale': 'gchararray',
    'FolksSimpleQuery.query-string': 'gchararray',
    'FolksStructuredName.additional-names': 'gchararray',
    'FolksStructuredName.family-name': 'gchararray',
    'FolksStructuredName.given-name': 'gchararray',
    'FolksStructuredName.prefixes': 'gchararray',
    'FolksStructuredName.suffixes': 'gchararray',
    'FolksUrlDetails.urls': 'GeeSet',
    'FolksWebServiceDetails.web-service-addresses': 'GeeMultiMap',
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
