// The widget vocabulary of EBookContacts-1.2 as runtime data.
//
// GENERATED — do not edit. Provenance: EBookContacts-1.2 — prop(s) no TypeScript value satisfies: EBookContacts.Contact.category-list
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'EBookContacts',
    version: '1.2',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['EBookContacts.Contact.category-list'],
    unresolvedProps: [],
    identifierPrefixes: ['E'],
    requiredVocabularies: ['@girs/edataserver-1.2/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    EContact: ['Rev', 'XML', 'address', 'address-home', 'address-label-home', 'address-label-other', 'address-label-work', 'address-other', 'address-work', 'anniversary', 'assistant', 'assistant-phone', 'birth-date', 'birth-place', 'blog-url', 'book-uid', 'business-fax', 'business-phone', 'business-phone-2', 'callback-phone', 'caluri', 'car-phone', 'categories', 'category-list', 'company-phone', 'contact-uri', 'created', 'death-date', 'death-place', 'email', 'email-1', 'email-2', 'email-3', 'email-4', 'expertise', 'family-name', 'fburl', 'file-as', 'full-name', 'gender', 'geo', 'given-name', 'hobby', 'home-fax', 'home-phone', 'home-phone-2', 'homepage-url', 'icscalendar', 'id', 'im-aim', 'im-aim-home-1', 'im-aim-home-2', 'im-aim-home-3', 'im-aim-work-1', 'im-aim-work-2', 'im-aim-work-3', 'im-gadugadu', 'im-gadugadu-home-1', 'im-gadugadu-home-2', 'im-gadugadu-home-3', 'im-gadugadu-work-1', 'im-gadugadu-work-2', 'im-gadugadu-work-3', 'im-google-talk', 'im-google-talk-home-1', 'im-google-talk-home-2', 'im-google-talk-home-3', 'im-google-talk-work-1', 'im-google-talk-work-2', 'im-google-talk-work-3', 'im-groupwise', 'im-groupwise-home-1', 'im-groupwise-home-2', 'im-groupwise-home-3', 'im-groupwise-work-1', 'im-groupwise-work-2', 'im-groupwise-work-3', 'im-icq', 'im-icq-home-1', 'im-icq-home-2', 'im-icq-home-3', 'im-icq-work-1', 'im-icq-work-2', 'im-icq-work-3', 'im-jabber', 'im-jabber-home-1', 'im-jabber-home-2', 'im-jabber-home-3', 'im-jabber-work-1', 'im-jabber-work-2', 'im-jabber-work-3', 'im-matrix', 'im-matrix-home-1', 'im-matrix-home-2', 'im-matrix-home-3', 'im-matrix-work-1', 'im-matrix-work-2', 'im-matrix-work-3', 'im-msn', 'im-msn-home-1', 'im-msn-home-2', 'im-msn-home-3', 'im-msn-work-1', 'im-msn-work-2', 'im-msn-work-3', 'im-skype', 'im-skype-home-1', 'im-skype-home-2', 'im-skype-home-3', 'im-skype-work-1', 'im-skype-work-2', 'im-skype-work-3', 'im-twitter', 'im-yahoo', 'im-yahoo-home-1', 'im-yahoo-home-2', 'im-yahoo-home-3', 'im-yahoo-work-1', 'im-yahoo-work-2', 'im-yahoo-work-3', 'impp', 'interest', 'isdn-phone', 'kind', 'lang', 'list', 'list-show-addresses', 'logo', 'mailer', 'manager', 'member', 'mobile-phone', 'name', 'nickname', 'note', 'office', 'org', 'org-directory', 'org-unit', 'other-fax', 'other-phone', 'pager', 'pgpCert', 'phone', 'photo', 'primary-phone', 'radio', 'related', 'role', 'sip', 'social-profile', 'source', 'spouse', 'telex', 'timezone', 'title', 'tty', 'video-url', 'wants-html', 'x509Cert'],
    ESourceBackendSummarySetup: ['indexed-fields', 'summary-fields'],
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
    EContact: ['EContact', 'EVCard', 'GObject'],
    ESourceBackendSummarySetup: ['ESourceBackendSummarySetup', 'ESourceExtension', 'GObject'],
    EVCard: ['EVCard', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    EBookCursorOrigin: ['current', 'begin', 'end'],
    EBookCursorSortType: ['ascending', 'descending'],
    EBookIndexType: ['prefix', 'suffix', 'phone', 'sort-key'],
    EVCardVersion: ['unknown', '21', '30', '40'],
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
    'EBookCursorOrigin.begin': 1,
    'EBookCursorOrigin.current': 0,
    'EBookCursorOrigin.end': 2,
    'EBookCursorSortType.ascending': 0,
    'EBookCursorSortType.descending': 1,
    'EBookIndexType.phone': 2,
    'EBookIndexType.prefix': 0,
    'EBookIndexType.sort-key': 3,
    'EBookIndexType.suffix': 1,
    'EVCardVersion.21': 21,
    'EVCardVersion.30': 30,
    'EVCardVersion.40': 40,
    'EVCardVersion.unknown': 0,
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
    'EBookClientViewFlags.manual-query': 2,
    'EBookClientViewFlags.none': 0,
    'EBookClientViewFlags.notify-initial': 1,
    'EBookCursorStepFlags.fetch': 2,
    'EBookCursorStepFlags.move': 1,
    'EBookOperationFlags.conflict-fail': 1,
    'EBookOperationFlags.conflict-keep-local': 0,
    'EBookOperationFlags.conflict-keep-server': 4,
    'EBookOperationFlags.conflict-use-newer': 2,
    'EBookOperationFlags.conflict-write-copy': 8,
    'EBookOperationFlags.none': 0,
    'EContactDateTimeFlags.date-time': 1,
    'EContactDateTimeFlags.none': 0,
    'EContactDateTimeFlags.time': 2,
    'EVCardForeachFlags.none': 0,
    'EVCardForeachFlags.will-modify': 1,
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
    'EContact.Rev': 'gchararray',
    'EContact.XML': 'gchararray',
    'EContact.address-label-home': 'gchararray',
    'EContact.address-label-other': 'gchararray',
    'EContact.address-label-work': 'gchararray',
    'EContact.assistant': 'gchararray',
    'EContact.assistant-phone': 'gchararray',
    'EContact.birth-place': 'gchararray',
    'EContact.blog-url': 'gchararray',
    'EContact.book-uid': 'gchararray',
    'EContact.business-fax': 'gchararray',
    'EContact.business-phone': 'gchararray',
    'EContact.business-phone-2': 'gchararray',
    'EContact.callback-phone': 'gchararray',
    'EContact.caluri': 'gchararray',
    'EContact.car-phone': 'gchararray',
    'EContact.categories': 'gchararray',
    'EContact.category-list': 'gpointer',
    'EContact.company-phone': 'gchararray',
    'EContact.contact-uri': 'gchararray',
    'EContact.death-place': 'gchararray',
    'EContact.email-1': 'gchararray',
    'EContact.email-2': 'gchararray',
    'EContact.email-3': 'gchararray',
    'EContact.email-4': 'gchararray',
    'EContact.family-name': 'gchararray',
    'EContact.fburl': 'gchararray',
    'EContact.file-as': 'gchararray',
    'EContact.full-name': 'gchararray',
    'EContact.given-name': 'gchararray',
    'EContact.home-fax': 'gchararray',
    'EContact.home-phone': 'gchararray',
    'EContact.home-phone-2': 'gchararray',
    'EContact.homepage-url': 'gchararray',
    'EContact.icscalendar': 'gchararray',
    'EContact.id': 'gchararray',
    'EContact.im-aim-home-1': 'gchararray',
    'EContact.im-aim-home-2': 'gchararray',
    'EContact.im-aim-home-3': 'gchararray',
    'EContact.im-aim-work-1': 'gchararray',
    'EContact.im-aim-work-2': 'gchararray',
    'EContact.im-aim-work-3': 'gchararray',
    'EContact.im-gadugadu-home-1': 'gchararray',
    'EContact.im-gadugadu-home-2': 'gchararray',
    'EContact.im-gadugadu-home-3': 'gchararray',
    'EContact.im-gadugadu-work-1': 'gchararray',
    'EContact.im-gadugadu-work-2': 'gchararray',
    'EContact.im-gadugadu-work-3': 'gchararray',
    'EContact.im-google-talk-home-1': 'gchararray',
    'EContact.im-google-talk-home-2': 'gchararray',
    'EContact.im-google-talk-home-3': 'gchararray',
    'EContact.im-google-talk-work-1': 'gchararray',
    'EContact.im-google-talk-work-2': 'gchararray',
    'EContact.im-google-talk-work-3': 'gchararray',
    'EContact.im-groupwise-home-1': 'gchararray',
    'EContact.im-groupwise-home-2': 'gchararray',
    'EContact.im-groupwise-home-3': 'gchararray',
    'EContact.im-groupwise-work-1': 'gchararray',
    'EContact.im-groupwise-work-2': 'gchararray',
    'EContact.im-groupwise-work-3': 'gchararray',
    'EContact.im-icq-home-1': 'gchararray',
    'EContact.im-icq-home-2': 'gchararray',
    'EContact.im-icq-home-3': 'gchararray',
    'EContact.im-icq-work-1': 'gchararray',
    'EContact.im-icq-work-2': 'gchararray',
    'EContact.im-icq-work-3': 'gchararray',
    'EContact.im-jabber-home-1': 'gchararray',
    'EContact.im-jabber-home-2': 'gchararray',
    'EContact.im-jabber-home-3': 'gchararray',
    'EContact.im-jabber-work-1': 'gchararray',
    'EContact.im-jabber-work-2': 'gchararray',
    'EContact.im-jabber-work-3': 'gchararray',
    'EContact.im-matrix-home-1': 'gchararray',
    'EContact.im-matrix-home-2': 'gchararray',
    'EContact.im-matrix-home-3': 'gchararray',
    'EContact.im-matrix-work-1': 'gchararray',
    'EContact.im-matrix-work-2': 'gchararray',
    'EContact.im-matrix-work-3': 'gchararray',
    'EContact.im-msn-home-1': 'gchararray',
    'EContact.im-msn-home-2': 'gchararray',
    'EContact.im-msn-home-3': 'gchararray',
    'EContact.im-msn-work-1': 'gchararray',
    'EContact.im-msn-work-2': 'gchararray',
    'EContact.im-msn-work-3': 'gchararray',
    'EContact.im-skype-home-1': 'gchararray',
    'EContact.im-skype-home-2': 'gchararray',
    'EContact.im-skype-home-3': 'gchararray',
    'EContact.im-skype-work-1': 'gchararray',
    'EContact.im-skype-work-2': 'gchararray',
    'EContact.im-skype-work-3': 'gchararray',
    'EContact.im-yahoo-home-1': 'gchararray',
    'EContact.im-yahoo-home-2': 'gchararray',
    'EContact.im-yahoo-home-3': 'gchararray',
    'EContact.im-yahoo-work-1': 'gchararray',
    'EContact.im-yahoo-work-2': 'gchararray',
    'EContact.im-yahoo-work-3': 'gchararray',
    'EContact.isdn-phone': 'gchararray',
    'EContact.kind': 'gchararray',
    'EContact.list': 'gboolean',
    'EContact.list-show-addresses': 'gboolean',
    'EContact.mailer': 'gchararray',
    'EContact.manager': 'gchararray',
    'EContact.mobile-phone': 'gchararray',
    'EContact.nickname': 'gchararray',
    'EContact.note': 'gchararray',
    'EContact.office': 'gchararray',
    'EContact.org': 'gchararray',
    'EContact.org-unit': 'gchararray',
    'EContact.other-fax': 'gchararray',
    'EContact.other-phone': 'gchararray',
    'EContact.pager': 'gchararray',
    'EContact.primary-phone': 'gchararray',
    'EContact.radio': 'gchararray',
    'EContact.role': 'gchararray',
    'EContact.social-profile': 'gchararray',
    'EContact.source': 'gchararray',
    'EContact.spouse': 'gchararray',
    'EContact.telex': 'gchararray',
    'EContact.timezone': 'gchararray',
    'EContact.title': 'gchararray',
    'EContact.tty': 'gchararray',
    'EContact.video-url': 'gchararray',
    'EContact.wants-html': 'gboolean',
    'ESourceBackendSummarySetup.indexed-fields': 'gchararray',
    'ESourceBackendSummarySetup.summary-fields': 'gchararray',
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
    'ESourceBackendSummarySetup': '3.8',
};
