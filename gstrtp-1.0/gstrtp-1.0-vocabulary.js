// The widget vocabulary of GstRtp-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GstRtp-1.0
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GstRtp',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Gst'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary', '@girs/gst-1.0/vocabulary'],
};

export const OWN_PROPS = {
    GstRTPBaseAudioPayload: ['buffer-list'],
    GstRTPBasePayload: ['auto-header-extension', 'max-ptime', 'min-ptime', 'mtu', 'onvif-no-rate-control', 'perfect-rtptime', 'pt', 'ptime-multiple', 'scale-rtptime', 'seqnum-offset', 'source-info', 'ssrc', 'timestamp-offset'],
};

export const OWN_SIGNALS = {
    GstRTPBasePayload: ['add-extension', 'clear-extensions', 'request-extension'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GstRTPBaseAudioPayload: ['GstRTPBaseAudioPayload', 'GstRTPBasePayload', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GstRTCPFBType: ['fb-type-invalid', 'rtpfb-type-nack', 'rtpfb-type-tmmbr', 'rtpfb-type-tmmbn', 'rtpfb-type-rtcp-sr-req', 'rtpfb-type-twcc', 'psfb-type-pli', 'psfb-type-sli', 'psfb-type-rpsi', 'psfb-type-afb', 'psfb-type-fir', 'psfb-type-tstr', 'psfb-type-tstn', 'psfb-type-vbcn'],
    GstRTCPSDESType: ['invalid', 'end', 'cname', 'name', 'email', 'phone', 'loc', 'tool', 'note', 'priv', 'h323-caddr', 'apsi', 'rgrp', 'rtp-stream-id', 'repaired-rtp-stream-id', 'ccid', 'mid'],
    GstRTCPType: ['invalid', 'sr', 'rr', 'sdes', 'bye', 'app', 'rtpfb', 'psfb', 'xr'],
    GstRTCPXRType: ['invalid', 'lrle', 'drle', 'prt', 'rrt', 'dlrr', 'ssumm', 'voip-metrics'],
    GstRTPPayload: ['pcmu', '1016', 'g721', 'gsm', 'g723', 'dvi4-8000', 'dvi4-16000', 'lpc', 'pcma', 'g722', 'l16-stereo', 'l16-mono', 'qcelp', 'cn', 'mpa', 'g728', 'dvi4-11025', 'dvi4-22050', 'g729', 'cellb', 'jpeg', 'nv', 'h261', 'mpv', 'mp2t', 'h263'],
    GstRTPProfile: ['unknown', 'avp', 'savp', 'avpf', 'savpf'],
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
    'GstRTCPFBType.fb-type-invalid': 0,
    'GstRTCPFBType.psfb-type-afb': 15,
    'GstRTCPFBType.psfb-type-fir': 4,
    'GstRTCPFBType.psfb-type-pli': 1,
    'GstRTCPFBType.psfb-type-rpsi': 3,
    'GstRTCPFBType.psfb-type-sli': 2,
    'GstRTCPFBType.psfb-type-tstn': 6,
    'GstRTCPFBType.psfb-type-tstr': 5,
    'GstRTCPFBType.psfb-type-vbcn': 7,
    'GstRTCPFBType.rtpfb-type-nack': 1,
    'GstRTCPFBType.rtpfb-type-rtcp-sr-req': 5,
    'GstRTCPFBType.rtpfb-type-tmmbn': 4,
    'GstRTCPFBType.rtpfb-type-tmmbr': 3,
    'GstRTCPFBType.rtpfb-type-twcc': 15,
    'GstRTCPSDESType.apsi': 10,
    'GstRTCPSDESType.ccid': 14,
    'GstRTCPSDESType.cname': 1,
    'GstRTCPSDESType.email': 3,
    'GstRTCPSDESType.end': 0,
    'GstRTCPSDESType.h323-caddr': 9,
    'GstRTCPSDESType.invalid': -1,
    'GstRTCPSDESType.loc': 5,
    'GstRTCPSDESType.mid': 15,
    'GstRTCPSDESType.name': 2,
    'GstRTCPSDESType.note': 7,
    'GstRTCPSDESType.phone': 4,
    'GstRTCPSDESType.priv': 8,
    'GstRTCPSDESType.repaired-rtp-stream-id': 13,
    'GstRTCPSDESType.rgrp': 11,
    'GstRTCPSDESType.rtp-stream-id': 12,
    'GstRTCPSDESType.tool': 6,
    'GstRTCPType.app': 204,
    'GstRTCPType.bye': 203,
    'GstRTCPType.invalid': 0,
    'GstRTCPType.psfb': 206,
    'GstRTCPType.rr': 201,
    'GstRTCPType.rtpfb': 205,
    'GstRTCPType.sdes': 202,
    'GstRTCPType.sr': 200,
    'GstRTCPType.xr': 207,
    'GstRTCPXRType.dlrr': 5,
    'GstRTCPXRType.drle': 2,
    'GstRTCPXRType.invalid': -1,
    'GstRTCPXRType.lrle': 1,
    'GstRTCPXRType.prt': 3,
    'GstRTCPXRType.rrt': 4,
    'GstRTCPXRType.ssumm': 6,
    'GstRTCPXRType.voip-metrics': 7,
    'GstRTPPayload.1016': 1,
    'GstRTPPayload.cellb': 25,
    'GstRTPPayload.cn': 13,
    'GstRTPPayload.dvi4-11025': 16,
    'GstRTPPayload.dvi4-16000': 6,
    'GstRTPPayload.dvi4-22050': 17,
    'GstRTPPayload.dvi4-8000': 5,
    'GstRTPPayload.g721': 2,
    'GstRTPPayload.g722': 9,
    'GstRTPPayload.g723': 4,
    'GstRTPPayload.g728': 15,
    'GstRTPPayload.g729': 18,
    'GstRTPPayload.gsm': 3,
    'GstRTPPayload.h261': 31,
    'GstRTPPayload.h263': 34,
    'GstRTPPayload.jpeg': 26,
    'GstRTPPayload.l16-mono': 11,
    'GstRTPPayload.l16-stereo': 10,
    'GstRTPPayload.lpc': 7,
    'GstRTPPayload.mp2t': 33,
    'GstRTPPayload.mpa': 14,
    'GstRTPPayload.mpv': 32,
    'GstRTPPayload.nv': 28,
    'GstRTPPayload.pcma': 8,
    'GstRTPPayload.pcmu': 0,
    'GstRTPPayload.qcelp': 12,
    'GstRTPProfile.avp': 1,
    'GstRTPProfile.avpf': 3,
    'GstRTPProfile.savp': 2,
    'GstRTPProfile.savpf': 4,
    'GstRTPProfile.unknown': 0,
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
    'GstRTPBufferFlags.last': 268435456,
    'GstRTPBufferFlags.redundant': 2097152,
    'GstRTPBufferFlags.retransmission': 1048576,
    'GstRTPBufferMapFlags.last': 16777216,
    'GstRTPBufferMapFlags.skip-padding': 65536,
    'GstRTPHeaderExtensionDirection.inactive': 0,
    'GstRTPHeaderExtensionDirection.inherited': 4,
    'GstRTPHeaderExtensionDirection.recvonly': 2,
    'GstRTPHeaderExtensionDirection.sendonly': 1,
    'GstRTPHeaderExtensionDirection.sendrecv': 3,
    'GstRTPHeaderExtensionFlags.one-byte': 1,
    'GstRTPHeaderExtensionFlags.two-byte': 2,
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
    'GstRTPBasePayload.auto-header-extension': '1.20',
    'GstRTPBasePayload.onvif-no-rate-control': '1.16',
    'GstRTPBasePayload.scale-rtptime': '1.18',
    'GstRTPBasePayload.source-info': '1.16',
    'GstRTPBasePayload::add-extension': '1.20',
    'GstRTPBasePayload::clear-extensions': '1.20',
    'GstRTPBasePayload::request-extension': '1.20',
};
