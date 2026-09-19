// The widget vocabulary of GVnc-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GVnc-1.0 — library 1.5.0 — prop(s) no TypeScript value satisfies: GVnc.BaseFramebuffer.buffer GVnc.Cursor.data
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GVnc',
    version: '1.0',
    libraryVersion: '1.5.0',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['GVnc.BaseFramebuffer.buffer', 'GVnc.Cursor.data'],
    unresolvedProps: [],
    identifierPrefixes: ['Vnc'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    VncBaseFramebuffer: ['buffer', 'color-map', 'height', 'local-format', 'remote-format', 'rowstride', 'width'],
    VncConnection: ['framebuffer'],
    VncCursor: ['data', 'height', 'hotx', 'hoty', 'width'],
};

export const OWN_SIGNALS = {
    VncBaseAudio: ['vnc-audio-playback-data', 'vnc-audio-playback-start', 'vnc-audio-playback-stop'],
    VncConnection: ['vnc-auth-choose-subtype', 'vnc-auth-choose-type', 'vnc-auth-credential', 'vnc-auth-failure', 'vnc-auth-unsupported', 'vnc-bell', 'vnc-connected', 'vnc-cursor-changed', 'vnc-desktop-rename', 'vnc-desktop-resize', 'vnc-disconnected', 'vnc-error', 'vnc-framebuffer-update', 'vnc-initialized', 'vnc-led-state', 'vnc-pixel-format-changed', 'vnc-pointer-mode-changed', 'vnc-power-control-failed', 'vnc-power-control-initialized', 'vnc-server-cut-text'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    VncBaseAudio: ['VncBaseAudio', 'GObject', 'VncAudio'],
    VncBaseFramebuffer: ['VncBaseFramebuffer', 'GObject', 'VncFramebuffer'],
    VncConnection: ['VncConnection', 'GObject'],
    VncCursor: ['VncCursor', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    VncConnectionAuth: ['invalid', 'none', 'vnc', 'ra2', 'ra2ne', 'tight', 'ultra', 'tls', 'vencrypt', 'sasl', 'ard', 'mslogonii', 'mslogon'],
    VncConnectionAuthVencrypt: ['plain', 'tlsnone', 'tlsvnc', 'tlsplain', 'x509none', 'x509vnc', 'x509plain', 'x509sasl', 'tlssasl'],
    VncConnectionCredential: ['password', 'username', 'clientname', 'ca-cert-data'],
    VncConnectionEncoding: ['raw', 'copy-rect', 'rre', 'corre', 'hextile', 'tight', 'zrle', 'tight-jpeg0', 'tight-jpeg1', 'tight-jpeg2', 'tight-jpeg3', 'tight-jpeg4', 'tight-jpeg5', 'tight-jpeg6', 'tight-jpeg7', 'tight-jpeg8', 'tight-jpeg9', 'desktop-resize', 'last-rect', 'wmvi', 'cursor-pos', 'rich-cursor', 'xcursor', 'pointer-change', 'ext-key-event', 'audio', 'led-state', 'desktop-name', 'extended-desktop-resize', 'xvp', 'alpha-cursor'],
    VncConnectionPowerAction: ['shutdown', 'reboot', 'reset'],
    VncConnectionResizeStatus: ['unsupported', 'ok', 'admin-prohibited', 'out-of-resources', 'invalid-laout', 'forwarded'],
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
    'VncConnectionAuth.ard': 30,
    'VncConnectionAuth.invalid': 0,
    'VncConnectionAuth.mslogon': 4294967290,
    'VncConnectionAuth.mslogonii': 113,
    'VncConnectionAuth.none': 1,
    'VncConnectionAuth.ra2': 5,
    'VncConnectionAuth.ra2ne': 6,
    'VncConnectionAuth.sasl': 20,
    'VncConnectionAuth.tight': 16,
    'VncConnectionAuth.tls': 18,
    'VncConnectionAuth.ultra': 17,
    'VncConnectionAuth.vencrypt': 19,
    'VncConnectionAuth.vnc': 2,
    'VncConnectionAuthVencrypt.plain': 256,
    'VncConnectionAuthVencrypt.tlsnone': 257,
    'VncConnectionAuthVencrypt.tlsplain': 259,
    'VncConnectionAuthVencrypt.tlssasl': 264,
    'VncConnectionAuthVencrypt.tlsvnc': 258,
    'VncConnectionAuthVencrypt.x509none': 260,
    'VncConnectionAuthVencrypt.x509plain': 262,
    'VncConnectionAuthVencrypt.x509sasl': 263,
    'VncConnectionAuthVencrypt.x509vnc': 261,
    'VncConnectionCredential.ca-cert-data': 3,
    'VncConnectionCredential.clientname': 2,
    'VncConnectionCredential.password': 0,
    'VncConnectionCredential.username': 1,
    'VncConnectionEncoding.alpha-cursor': -314,
    'VncConnectionEncoding.audio': -259,
    'VncConnectionEncoding.copy-rect': 1,
    'VncConnectionEncoding.corre': 4,
    'VncConnectionEncoding.cursor-pos': -232,
    'VncConnectionEncoding.desktop-name': -307,
    'VncConnectionEncoding.desktop-resize': -223,
    'VncConnectionEncoding.ext-key-event': -258,
    'VncConnectionEncoding.extended-desktop-resize': -308,
    'VncConnectionEncoding.hextile': 5,
    'VncConnectionEncoding.last-rect': -224,
    'VncConnectionEncoding.led-state': -261,
    'VncConnectionEncoding.pointer-change': -257,
    'VncConnectionEncoding.raw': 0,
    'VncConnectionEncoding.rich-cursor': -239,
    'VncConnectionEncoding.rre': 2,
    'VncConnectionEncoding.tight': 7,
    'VncConnectionEncoding.tight-jpeg0': -32,
    'VncConnectionEncoding.tight-jpeg1': -31,
    'VncConnectionEncoding.tight-jpeg2': -30,
    'VncConnectionEncoding.tight-jpeg3': -29,
    'VncConnectionEncoding.tight-jpeg4': -28,
    'VncConnectionEncoding.tight-jpeg5': -27,
    'VncConnectionEncoding.tight-jpeg6': -26,
    'VncConnectionEncoding.tight-jpeg7': -25,
    'VncConnectionEncoding.tight-jpeg8': -24,
    'VncConnectionEncoding.tight-jpeg9': -23,
    'VncConnectionEncoding.wmvi': 1464686185,
    'VncConnectionEncoding.xcursor': -240,
    'VncConnectionEncoding.xvp': -309,
    'VncConnectionEncoding.zrle': 16,
    'VncConnectionPowerAction.reboot': 3,
    'VncConnectionPowerAction.reset': 4,
    'VncConnectionPowerAction.shutdown': 2,
    'VncConnectionResizeStatus.admin-prohibited': 1,
    'VncConnectionResizeStatus.forwarded': 4,
    'VncConnectionResizeStatus.invalid-laout': 3,
    'VncConnectionResizeStatus.ok': 0,
    'VncConnectionResizeStatus.out-of-resources': 2,
    'VncConnectionResizeStatus.unsupported': -1,
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
