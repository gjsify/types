// The widget vocabulary of SpiceClientGLib-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: SpiceClientGLib-2.0 — prop(s) no TypeScript value satisfies: SpiceClientGLib.PlaybackChannel.volume SpiceClientGLib.RecordChannel.volume
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'SpiceClientGLib',
    version: '2.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['SpiceClientGLib.PlaybackChannel.volume', 'SpiceClientGLib.RecordChannel.volume'],
    unresolvedProps: [],
    identifierPrefixes: ['Spice'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    SpiceChannel: ['channel-id', 'channel-type', 'spice-session'],
    SpiceFileTransferTask: ['cancellable', 'channel', 'file', 'id'],
    SpiceMainChannel: ['color-depth', 'disable-animation', 'disable-display-align', 'disable-display-position', 'disable-font-smooth', 'disable-wallpaper', 'max-clipboard'],
    SpicePlaybackChannel: ['min-latency', 'mute', 'nchannels', 'volume'],
    SpiceQmpPort: ['channel'],
    SpiceRecordChannel: ['mute', 'nchannels', 'volume'],
    SpiceSession: ['ca', 'ca-file', 'cache-size', 'cert-subject', 'ciphers', 'client-sockets', 'color-depth', 'disable-effects', 'enable-audio', 'enable-smartcard', 'enable-usbredir', 'gl-scanout', 'glz-window-size', 'host', 'inhibit-keyboard-grab', 'password', 'port', 'protocol', 'proxy', 'pubkey', 'read-only', 'secure-channels', 'share-dir-ro', 'shared-dir', 'smartcard-certificates', 'smartcard-db', 'tls-port', 'unix-path', 'uri', 'username', 'verify'],
    SpiceURI: ['hostname', 'password', 'port', 'scheme', 'user'],
    SpiceUsbDeviceManager: ['auto-connect', 'auto-connect-filter', 'redirect-on-connect', 'session'],
};

export const OWN_SIGNALS = {
    SpiceChannel: ['channel-event', 'open-fd'],
    SpiceCursorChannel: ['cursor-hide', 'cursor-move', 'cursor-reset', 'cursor-set'],
    SpiceDisplayChannel: ['display-invalidate', 'display-mark', 'display-primary-create', 'display-primary-destroy', 'gl-draw', 'gst-video-overlay', 'streaming-mode'],
    SpiceFileTransferTask: ['finished'],
    SpiceInputsChannel: ['inputs-modifiers'],
    SpiceMainChannel: ['main-agent-update', 'main-clipboard', 'main-clipboard-grab', 'main-clipboard-release', 'main-clipboard-request', 'main-clipboard-selection', 'main-clipboard-selection-grab', 'main-clipboard-selection-release', 'main-clipboard-selection-request', 'main-mouse-update', 'migration-started', 'new-file-transfer'],
    SpicePlaybackChannel: ['playback-data', 'playback-get-delay', 'playback-start', 'playback-stop'],
    SpicePortChannel: ['port-data', 'port-event'],
    SpiceQmpPort: ['event'],
    SpiceRecordChannel: ['record-start', 'record-stop'],
    SpiceSession: ['channel-destroy', 'channel-new', 'disconnected', 'mm-time-reset'],
    SpiceSmartcardManager: ['card-inserted', 'card-removed', 'reader-added', 'reader-removed'],
    SpiceUsbDeviceManager: ['auto-connect-failed', 'device-added', 'device-error', 'device-removed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    SpiceChannel: ['SpiceChannel', 'GObject'],
    SpiceCursorChannel: ['SpiceCursorChannel', 'SpiceChannel', 'GObject'],
    SpiceDisplayChannel: ['SpiceDisplayChannel', 'SpiceChannel', 'GObject'],
    SpiceFileTransferTask: ['SpiceFileTransferTask', 'GObject'],
    SpiceInputsChannel: ['SpiceInputsChannel', 'SpiceChannel', 'GObject'],
    SpiceMainChannel: ['SpiceMainChannel', 'SpiceChannel', 'GObject'],
    SpicePlaybackChannel: ['SpicePlaybackChannel', 'SpiceChannel', 'GObject'],
    SpicePortChannel: ['SpicePortChannel', 'SpiceChannel', 'GObject'],
    SpiceQmpPort: ['SpiceQmpPort', 'GObject'],
    SpiceRecordChannel: ['SpiceRecordChannel', 'SpiceChannel', 'GObject'],
    SpiceSession: ['SpiceSession', 'GObject'],
    SpiceSmartcardChannel: ['SpiceSmartcardChannel', 'SpiceChannel', 'GObject'],
    SpiceSmartcardManager: ['SpiceSmartcardManager', 'GObject'],
    SpiceURI: ['SpiceURI', 'GObject'],
    SpiceUsbDeviceManager: ['SpiceUsbDeviceManager', 'GObject', 'GInitable'],
    SpiceUsbredirChannel: ['SpiceUsbredirChannel', 'SpiceChannel', 'GObject'],
    SpiceWebdavChannel: ['SpiceWebdavChannel', 'SpicePortChannel', 'SpiceChannel', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    SpiceChannelEvent: ['none', 'opened', 'switching', 'closed', 'error-connect', 'error-tls', 'error-link', 'error-auth', 'error-io'],
    SpiceSessionMigration: ['none', 'switching', 'migrating', 'connecting'],
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
    'SpiceChannelEvent.closed': 12,
    'SpiceChannelEvent.error-auth': 23,
    'SpiceChannelEvent.error-connect': 20,
    'SpiceChannelEvent.error-io': 24,
    'SpiceChannelEvent.error-link': 22,
    'SpiceChannelEvent.error-tls': 21,
    'SpiceChannelEvent.none': 0,
    'SpiceChannelEvent.opened': 10,
    'SpiceChannelEvent.switching': 11,
    'SpiceSessionMigration.connecting': 3,
    'SpiceSessionMigration.migrating': 2,
    'SpiceSessionMigration.none': 0,
    'SpiceSessionMigration.switching': 1,
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
    'SpiceInputsLock.caps-lock': 4,
    'SpiceInputsLock.num-lock': 2,
    'SpiceInputsLock.scroll-lock': 1,
    'SpiceSessionVerify.hostname': 2,
    'SpiceSessionVerify.pubkey': 1,
    'SpiceSessionVerify.subject': 4,
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
export const PROP_ENUMS = {
    'SpiceSession.verify': 'SpiceSessionVerify',
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
    'SpiceChannel.channel-id': 'gint',
    'SpiceChannel.channel-type': 'gint',
    'SpiceChannel.spice-session': 'SpiceSession',
    'SpiceFileTransferTask.cancellable': 'GCancellable',
    'SpiceFileTransferTask.channel': 'SpiceMainChannel',
    'SpiceFileTransferTask.file': 'GFile',
    'SpiceFileTransferTask.id': 'guint',
    'SpiceMainChannel.color-depth': 'guint',
    'SpiceMainChannel.disable-animation': 'gboolean',
    'SpiceMainChannel.disable-display-align': 'gboolean',
    'SpiceMainChannel.disable-display-position': 'gboolean',
    'SpiceMainChannel.disable-font-smooth': 'gboolean',
    'SpiceMainChannel.disable-wallpaper': 'gboolean',
    'SpiceMainChannel.max-clipboard': 'gint',
    'SpicePlaybackChannel.min-latency': 'guint',
    'SpicePlaybackChannel.mute': 'gboolean',
    'SpicePlaybackChannel.nchannels': 'guint',
    'SpicePlaybackChannel.volume': 'gpointer',
    'SpiceQmpPort.channel': 'SpicePortChannel',
    'SpiceRecordChannel.mute': 'gboolean',
    'SpiceRecordChannel.nchannels': 'guint',
    'SpiceRecordChannel.volume': 'gpointer',
    'SpiceSession.ca-file': 'gchararray',
    'SpiceSession.cache-size': 'gint',
    'SpiceSession.cert-subject': 'gchararray',
    'SpiceSession.ciphers': 'gchararray',
    'SpiceSession.client-sockets': 'gboolean',
    'SpiceSession.color-depth': 'gint',
    'SpiceSession.enable-audio': 'gboolean',
    'SpiceSession.enable-smartcard': 'gboolean',
    'SpiceSession.enable-usbredir': 'gboolean',
    'SpiceSession.gl-scanout': 'gboolean',
    'SpiceSession.glz-window-size': 'gint',
    'SpiceSession.host': 'gchararray',
    'SpiceSession.inhibit-keyboard-grab': 'gboolean',
    'SpiceSession.password': 'gchararray',
    'SpiceSession.port': 'gchararray',
    'SpiceSession.protocol': 'gint',
    'SpiceSession.proxy': 'gchararray',
    'SpiceSession.read-only': 'gboolean',
    'SpiceSession.share-dir-ro': 'gboolean',
    'SpiceSession.shared-dir': 'gchararray',
    'SpiceSession.smartcard-db': 'gchararray',
    'SpiceSession.tls-port': 'gchararray',
    'SpiceSession.unix-path': 'gchararray',
    'SpiceSession.uri': 'gchararray',
    'SpiceSession.username': 'gchararray',
    'SpiceSession.verify': 'SpiceSessionVerify',
    'SpiceURI.hostname': 'gchararray',
    'SpiceURI.password': 'gchararray',
    'SpiceURI.port': 'guint',
    'SpiceURI.scheme': 'gchararray',
    'SpiceURI.user': 'gchararray',
    'SpiceUsbDeviceManager.auto-connect': 'gboolean',
    'SpiceUsbDeviceManager.auto-connect-filter': 'gchararray',
    'SpiceUsbDeviceManager.redirect-on-connect': 'gchararray',
    'SpiceUsbDeviceManager.session': 'SpiceSession',
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
    'SpiceDisplayChannel::gl-draw': '0.31',
    'SpiceDisplayChannel::gst-video-overlay': '0.36',
    'SpiceDisplayChannel::streaming-mode': '0.35',
    'SpiceMainChannel.disable-display-align': '0.13',
    'SpiceMainChannel.max-clipboard': '0.22',
    'SpiceMainChannel::main-clipboard-selection': '0.6',
    'SpiceMainChannel::main-clipboard-selection-grab': '0.6',
    'SpiceMainChannel::main-clipboard-selection-release': '0.6',
    'SpiceMainChannel::main-clipboard-selection-request': '0.6',
    'SpiceMainChannel::new-file-transfer': '0.31',
    'SpicePortChannel::port-data': '0.15',
    'SpicePortChannel::port-event': '0.15',
    'SpiceQmpPort': '0.36',
    'SpiceQmpPort::event': '0.36',
    'SpiceSession.ca': '0.15',
    'SpiceSession.cache-size': '0.9',
    'SpiceSession.color-depth': '0.7',
    'SpiceSession.disable-effects': '0.7',
    'SpiceSession.enable-audio': '0.8',
    'SpiceSession.enable-smartcard': '0.7',
    'SpiceSession.enable-usbredir': '0.8',
    'SpiceSession.gl-scanout': '0.36',
    'SpiceSession.glz-window-size': '0.9',
    'SpiceSession.proxy': '0.17',
    'SpiceSession.read-only': '0.8',
    'SpiceSession.secure-channels': '0.20',
    'SpiceSession.share-dir-ro': '0.28',
    'SpiceSession.shared-dir': '0.24',
    'SpiceSession.smartcard-certificates': '0.7',
    'SpiceSession.smartcard-db': '0.7',
    'SpiceSession.unix-path': '0.28',
    'SpiceSession::disconnected': '0.35',
};
