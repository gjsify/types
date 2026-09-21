// The widget vocabulary of Dmap-4.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Dmap-4.0
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Dmap',
    version: '4.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Dmap'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    DmapConnection: ['base-uri', 'database-id', 'db', 'dmap-version', 'factory', 'host', 'name', 'password', 'port', 'revision-number', 'session-id', 'username'],
    DmapControlShare: ['library-name', 'player'],
    DmapMdnsService: ['host', 'name', 'pair', 'password-protected', 'port', 'service-name', 'transport-protocol'],
    DmapShare: ['auth-method', 'container-db', 'db', 'name', 'password', 'revision-number', 'transcode-mimetype', 'txt-records'],
};

export const OWN_SIGNALS = {
    DmapConnection: ['authenticate', 'connected', 'connecting', 'disconnected', 'error', 'operation-done'],
    DmapControlShare: ['add-guid', 'lookup-guid', 'remote-found', 'remote-lost', 'remote-paired'],
    DmapMdnsBrowser: ['service-added', 'service-removed'],
    DmapMdnsPublisher: ['name-collision', 'published'],
    DmapShare: ['error'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    DmapAvConnection: ['DmapAvConnection', 'DmapConnection', 'GObject'],
    DmapAvShare: ['DmapAvShare', 'DmapShare', 'GObject'],
    DmapConnection: ['DmapConnection', 'GObject'],
    DmapControlConnection: ['DmapControlConnection', 'DmapConnection', 'GObject'],
    DmapControlShare: ['DmapControlShare', 'DmapShare', 'GObject'],
    DmapImageConnection: ['DmapImageConnection', 'DmapConnection', 'GObject'],
    DmapImageShare: ['DmapImageShare', 'DmapShare', 'GObject'],
    DmapMdnsBrowser: ['DmapMdnsBrowser', 'GObject'],
    DmapMdnsPublisher: ['DmapMdnsPublisher', 'GObject'],
    DmapMdnsService: ['DmapMdnsService', 'GObject'],
    DmapTranscodeStream: ['DmapTranscodeStream', 'GInputStream', 'GObject', 'GSeekable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    DmapConnectionState: ['get-info', 'login', 'get-revision-number', 'get-db-info', 'get-media', 'get-playlists', 'get-playlist-entries', 'logout', 'done'],
    DmapContentCode: ['cc-invalid', 'raw', 'cc-mdcl', 'cc-meds', 'cc-mstt', 'cc-miid', 'cc-minm', 'cc-mikd', 'cc-mper', 'cc-mcon', 'cc-mcti', 'cc-mpco', 'cc-msts', 'cc-mimc', 'cc-mctc', 'cc-mrco', 'cc-mtco', 'cc-mlcl', 'cc-mlit', 'cc-mbcl', 'cc-msrv', 'cc-msau', 'cc-mslr', 'cc-mpro', 'cc-msal', 'cc-msup', 'cc-mspi', 'cc-msex', 'cc-msbr', 'cc-msqy', 'cc-msix', 'cc-msrs', 'cc-mstm', 'cc-msdc', 'cc-mccr', 'cc-mcnm', 'cc-mcna', 'cc-mcty', 'cc-mlog', 'cc-mlid', 'cc-mupd', 'cc-musr', 'cc-muty', 'cc-mudl', 'cc-msma', 'cc-fquesch', 'cc-mdbk', 'cc-apro', 'cc-avdb', 'cc-abro', 'cc-abal', 'cc-abar', 'cc-abcp', 'cc-abgn', 'cc-adbs', 'cc-asal', 'cc-asai', 'cc-asaa', 'cc-asar', 'cc-asbt', 'cc-asbr', 'cc-ascm', 'cc-asco', 'cc-asda', 'cc-asdm', 'cc-asdc', 'cc-asdn', 'cc-asdb', 'cc-aseq', 'cc-asfm', 'cc-asgn', 'cc-asdt', 'cc-asrv', 'cc-assr', 'cc-assz', 'cc-asst', 'cc-assp', 'cc-astm', 'cc-astc', 'cc-astn', 'cc-asur', 'cc-asyr', 'cc-asdk', 'cc-asul', 'cc-assu', 'cc-assa', 'cc-aply', 'cc-abpl', 'cc-apso', 'cc-prsv', 'cc-arif', 'cc-msas', 'cc-agrp', 'cc-agal', 'cc-ascp', 'cc-ppro', 'cc-pasp', 'cc-pfdt', 'cc-picd', 'cc-pimf', 'cc-pfmt', 'cc-pifs', 'cc-plsz', 'cc-phgt', 'cc-pwth', 'cc-prat', 'cc-pcmt', 'cc-pret', 'cc-aecs', 'cc-aesv', 'cc-aehv', 'cc-aesp', 'cc-aepp', 'cc-aeps', 'cc-aesg', 'cc-aemk', 'cc-aemk2', 'cc-aefp', 'cc-ated', 'cc-asgr', 'cc-aemq', 'cc-aesl', 'cc-aesr', 'cc-aetr', 'cc-msed', 'cc-cmpa', 'cc-cmnm', 'cc-cmty', 'cc-cmpg', 'cc-caci', 'cc-caps', 'cc-cash', 'cc-carp', 'cc-caas', 'cc-caar', 'cc-caia', 'cc-canp', 'cc-cann', 'cc-cana', 'cc-canl', 'cc-cang', 'cc-cant', 'cc-casp', 'cc-cass', 'cc-cast', 'cc-casu', 'cc-casg', 'cc-cacr', 'cc-cmcp', 'cc-cmgt', 'cc-cmik', 'cc-cmsp', 'cc-cmst', 'cc-cmsv', 'cc-cmsr', 'cc-cmmk', 'cc-cmvo', 'cc-cmpr', 'cc-capr', 'cc-aefr', 'cc-caov', 'cc-cmrl', 'cc-cahp', 'cc-caiv', 'cc-cavc'],
    DmapControlPlayState: ['stopped', 'paused', 'playing'],
    DmapControlRepeatState: ['none', 'single', 'all'],
    DmapDbId: ['bad'],
    DmapMdnsServiceTransportProtocol: ['tcp', 'udp', 'last'],
    DmapMdnsServiceType: ['invalid', 'daap', 'dpap', 'dacp', 'raop', 'last'],
    DmapMediaKind: ['music', 'movie', 'podcast', 'tv-show'],
    DmapShareAuthMethod: ['none', 'name-and-password', 'password'],
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
    'DmapConnectionState.done': 8,
    'DmapConnectionState.get-db-info': 3,
    'DmapConnectionState.get-info': 0,
    'DmapConnectionState.get-media': 4,
    'DmapConnectionState.get-playlist-entries': 6,
    'DmapConnectionState.get-playlists': 5,
    'DmapConnectionState.get-revision-number': 2,
    'DmapConnectionState.login': 1,
    'DmapConnectionState.logout': 7,
    'DmapContentCode.cc-abal': 50,
    'DmapContentCode.cc-abar': 51,
    'DmapContentCode.cc-abcp': 52,
    'DmapContentCode.cc-abgn': 53,
    'DmapContentCode.cc-abpl': 87,
    'DmapContentCode.cc-abro': 49,
    'DmapContentCode.cc-adbs': 54,
    'DmapContentCode.cc-aecs': 108,
    'DmapContentCode.cc-aefp': 117,
    'DmapContentCode.cc-aefr': 159,
    'DmapContentCode.cc-aehv': 110,
    'DmapContentCode.cc-aemk': 115,
    'DmapContentCode.cc-aemk2': 116,
    'DmapContentCode.cc-aemq': 120,
    'DmapContentCode.cc-aepp': 112,
    'DmapContentCode.cc-aeps': 113,
    'DmapContentCode.cc-aesg': 114,
    'DmapContentCode.cc-aesl': 121,
    'DmapContentCode.cc-aesp': 111,
    'DmapContentCode.cc-aesr': 122,
    'DmapContentCode.cc-aesv': 109,
    'DmapContentCode.cc-aetr': 123,
    'DmapContentCode.cc-agal': 93,
    'DmapContentCode.cc-agrp': 92,
    'DmapContentCode.cc-aply': 86,
    'DmapContentCode.cc-apro': 47,
    'DmapContentCode.cc-apso': 88,
    'DmapContentCode.cc-arif': 90,
    'DmapContentCode.cc-asaa': 57,
    'DmapContentCode.cc-asai': 56,
    'DmapContentCode.cc-asal': 55,
    'DmapContentCode.cc-asar': 58,
    'DmapContentCode.cc-asbr': 60,
    'DmapContentCode.cc-asbt': 59,
    'DmapContentCode.cc-ascm': 61,
    'DmapContentCode.cc-asco': 62,
    'DmapContentCode.cc-ascp': 94,
    'DmapContentCode.cc-asda': 63,
    'DmapContentCode.cc-asdb': 67,
    'DmapContentCode.cc-asdc': 65,
    'DmapContentCode.cc-asdk': 82,
    'DmapContentCode.cc-asdm': 64,
    'DmapContentCode.cc-asdn': 66,
    'DmapContentCode.cc-asdt': 71,
    'DmapContentCode.cc-aseq': 68,
    'DmapContentCode.cc-asfm': 69,
    'DmapContentCode.cc-asgn': 70,
    'DmapContentCode.cc-asgr': 119,
    'DmapContentCode.cc-asrv': 72,
    'DmapContentCode.cc-assa': 85,
    'DmapContentCode.cc-assp': 76,
    'DmapContentCode.cc-assr': 73,
    'DmapContentCode.cc-asst': 75,
    'DmapContentCode.cc-assu': 84,
    'DmapContentCode.cc-assz': 74,
    'DmapContentCode.cc-astc': 78,
    'DmapContentCode.cc-astm': 77,
    'DmapContentCode.cc-astn': 79,
    'DmapContentCode.cc-asul': 83,
    'DmapContentCode.cc-asur': 80,
    'DmapContentCode.cc-asyr': 81,
    'DmapContentCode.cc-ated': 118,
    'DmapContentCode.cc-avdb': 48,
    'DmapContentCode.cc-caar': 134,
    'DmapContentCode.cc-caas': 133,
    'DmapContentCode.cc-caci': 129,
    'DmapContentCode.cc-cacr': 147,
    'DmapContentCode.cc-cahp': 162,
    'DmapContentCode.cc-caia': 135,
    'DmapContentCode.cc-caiv': 163,
    'DmapContentCode.cc-cana': 138,
    'DmapContentCode.cc-cang': 140,
    'DmapContentCode.cc-canl': 139,
    'DmapContentCode.cc-cann': 137,
    'DmapContentCode.cc-canp': 136,
    'DmapContentCode.cc-cant': 141,
    'DmapContentCode.cc-caov': 160,
    'DmapContentCode.cc-capr': 158,
    'DmapContentCode.cc-caps': 130,
    'DmapContentCode.cc-carp': 132,
    'DmapContentCode.cc-casg': 146,
    'DmapContentCode.cc-cash': 131,
    'DmapContentCode.cc-casp': 142,
    'DmapContentCode.cc-cass': 143,
    'DmapContentCode.cc-cast': 144,
    'DmapContentCode.cc-casu': 145,
    'DmapContentCode.cc-cavc': 164,
    'DmapContentCode.cc-cmcp': 148,
    'DmapContentCode.cc-cmgt': 149,
    'DmapContentCode.cc-cmik': 150,
    'DmapContentCode.cc-cmmk': 155,
    'DmapContentCode.cc-cmnm': 126,
    'DmapContentCode.cc-cmpa': 125,
    'DmapContentCode.cc-cmpg': 128,
    'DmapContentCode.cc-cmpr': 157,
    'DmapContentCode.cc-cmrl': 161,
    'DmapContentCode.cc-cmsp': 151,
    'DmapContentCode.cc-cmsr': 154,
    'DmapContentCode.cc-cmst': 152,
    'DmapContentCode.cc-cmsv': 153,
    'DmapContentCode.cc-cmty': 127,
    'DmapContentCode.cc-cmvo': 156,
    'DmapContentCode.cc-fquesch': 45,
    'DmapContentCode.cc-invalid': 0,
    'DmapContentCode.cc-mbcl': 19,
    'DmapContentCode.cc-mccr': 34,
    'DmapContentCode.cc-mcna': 36,
    'DmapContentCode.cc-mcnm': 35,
    'DmapContentCode.cc-mcon': 9,
    'DmapContentCode.cc-mctc': 14,
    'DmapContentCode.cc-mcti': 10,
    'DmapContentCode.cc-mcty': 37,
    'DmapContentCode.cc-mdbk': 46,
    'DmapContentCode.cc-mdcl': 2,
    'DmapContentCode.cc-meds': 3,
    'DmapContentCode.cc-miid': 5,
    'DmapContentCode.cc-mikd': 7,
    'DmapContentCode.cc-mimc': 13,
    'DmapContentCode.cc-minm': 6,
    'DmapContentCode.cc-mlcl': 17,
    'DmapContentCode.cc-mlid': 39,
    'DmapContentCode.cc-mlit': 18,
    'DmapContentCode.cc-mlog': 38,
    'DmapContentCode.cc-mpco': 11,
    'DmapContentCode.cc-mper': 8,
    'DmapContentCode.cc-mpro': 23,
    'DmapContentCode.cc-mrco': 15,
    'DmapContentCode.cc-msal': 24,
    'DmapContentCode.cc-msas': 91,
    'DmapContentCode.cc-msau': 21,
    'DmapContentCode.cc-msbr': 28,
    'DmapContentCode.cc-msdc': 33,
    'DmapContentCode.cc-msed': 124,
    'DmapContentCode.cc-msex': 27,
    'DmapContentCode.cc-msix': 30,
    'DmapContentCode.cc-mslr': 22,
    'DmapContentCode.cc-msma': 44,
    'DmapContentCode.cc-mspi': 26,
    'DmapContentCode.cc-msqy': 29,
    'DmapContentCode.cc-msrs': 31,
    'DmapContentCode.cc-msrv': 20,
    'DmapContentCode.cc-mstm': 32,
    'DmapContentCode.cc-msts': 12,
    'DmapContentCode.cc-mstt': 4,
    'DmapContentCode.cc-msup': 25,
    'DmapContentCode.cc-mtco': 16,
    'DmapContentCode.cc-mudl': 43,
    'DmapContentCode.cc-mupd': 40,
    'DmapContentCode.cc-musr': 41,
    'DmapContentCode.cc-muty': 42,
    'DmapContentCode.cc-pasp': 96,
    'DmapContentCode.cc-pcmt': 106,
    'DmapContentCode.cc-pfdt': 97,
    'DmapContentCode.cc-pfmt': 100,
    'DmapContentCode.cc-phgt': 103,
    'DmapContentCode.cc-picd': 98,
    'DmapContentCode.cc-pifs': 101,
    'DmapContentCode.cc-pimf': 99,
    'DmapContentCode.cc-plsz': 102,
    'DmapContentCode.cc-ppro': 95,
    'DmapContentCode.cc-prat': 105,
    'DmapContentCode.cc-pret': 107,
    'DmapContentCode.cc-prsv': 89,
    'DmapContentCode.cc-pwth': 104,
    'DmapContentCode.raw': 1,
    'DmapControlPlayState.paused': 3,
    'DmapControlPlayState.playing': 4,
    'DmapControlPlayState.stopped': 2,
    'DmapControlRepeatState.all': 2,
    'DmapControlRepeatState.none': 0,
    'DmapControlRepeatState.single': 1,
    'DmapDbId.bad': 0,
    'DmapMdnsServiceTransportProtocol.last': 1,
    'DmapMdnsServiceTransportProtocol.tcp': 0,
    'DmapMdnsServiceTransportProtocol.udp': 1,
    'DmapMdnsServiceType.daap': 1,
    'DmapMdnsServiceType.dacp': 3,
    'DmapMdnsServiceType.dpap': 2,
    'DmapMdnsServiceType.invalid': 0,
    'DmapMdnsServiceType.last': 4,
    'DmapMdnsServiceType.raop': 4,
    'DmapMediaKind.movie': 2,
    'DmapMediaKind.music': 1,
    'DmapMediaKind.podcast': 32,
    'DmapMediaKind.tv-show': 64,
    'DmapShareAuthMethod.name-and-password': 1,
    'DmapShareAuthMethod.none': 0,
    'DmapShareAuthMethod.password': 2,
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
    'DmapConnection.database-id': 'gint',
    'DmapConnection.db': 'DmapDb',
    'DmapConnection.dmap-version': 'gdouble',
    'DmapConnection.factory': 'DmapRecordFactory',
    'DmapConnection.host': 'gchararray',
    'DmapConnection.name': 'gchararray',
    'DmapConnection.password': 'gchararray',
    'DmapConnection.port': 'guint',
    'DmapConnection.revision-number': 'gint',
    'DmapConnection.session-id': 'gint',
    'DmapConnection.username': 'gchararray',
    'DmapControlShare.library-name': 'gchararray',
    'DmapControlShare.player': 'GObject',
    'DmapMdnsService.host': 'gchararray',
    'DmapMdnsService.name': 'gchararray',
    'DmapMdnsService.pair': 'gchararray',
    'DmapMdnsService.password-protected': 'gboolean',
    'DmapMdnsService.port': 'guint',
    'DmapMdnsService.service-name': 'gchararray',
    'DmapMdnsService.transport-protocol': 'guint',
    'DmapShare.auth-method': 'guint',
    'DmapShare.container-db': 'DmapContainerDb',
    'DmapShare.db': 'DmapDb',
    'DmapShare.name': 'gchararray',
    'DmapShare.password': 'gchararray',
    'DmapShare.revision-number': 'guint',
    'DmapShare.transcode-mimetype': 'gchararray',
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
