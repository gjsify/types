// The widget vocabulary of GstAudio-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GstAudio-1.0 — dropped empty base(s): Gst.URIHandler — inlined base(s) their owner's vocabulary does not emit: GstBase.BaseSink
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GstAudio',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Gst.URIHandler'],
    inlinedBases: ['GstBase.BaseSink'],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Gst'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary', '@girs/gst-1.0/vocabulary', '@girs/gstbase-1.0/vocabulary'],
};

export const OWN_PROPS = {
    GstAudioAggregatorConvertPad: ['converter-config'],
    GstAudioAggregatorPad: ['qos-messages'],
    GstAudioBaseSink: ['alignment-threshold', 'buffer-time', 'can-activate-pull', 'discont-wait', 'drift-tolerance', 'latency-time', 'provide-clock', 'slave-method'],
    GstAudioBaseSrc: ['buffer-time', 'latency-time', 'provide-clock', 'slave-method'],
    GstAudioCdSrc: ['device', 'mode', 'track'],
    GstBaseSink: ['async', 'blocksize', 'enable-last-sample', 'max-bitrate', 'max-lateness', 'processing-deadline', 'qos', 'render-delay', 'sync', 'throttle-time', 'ts-offset'],
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
    GstAudioAggregatorConvertPad: ['GstAudioAggregatorConvertPad', 'GstAudioAggregatorPad', 'GstAggregatorPad', 'GstPad', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstAudioAggregatorPad: ['GstAudioAggregatorPad', 'GstAggregatorPad', 'GstPad', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstAudioBaseSink: ['GstAudioBaseSink', 'GstBaseSink', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstAudioBaseSrc: ['GstAudioBaseSrc', 'GstPushSrc', 'GstBaseSrc', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstAudioCdSrc: ['GstAudioCdSrc', 'GstPushSrc', 'GstBaseSrc', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstAudioClock: ['GstAudioClock', 'GstSystemClock', 'GstClock', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstAudioSink: ['GstAudioSink', 'GstAudioBaseSink', 'GstBaseSink', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstAudioSrc: ['GstAudioSrc', 'GstAudioBaseSrc', 'GstPushSrc', 'GstBaseSrc', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GstAudioBaseSinkDiscontReason: ['no-discont', 'new-caps', 'flush', 'sync-latency', 'alignment', 'device-failure'],
    GstAudioBaseSinkSlaveMethod: ['resample', 'skew', 'none', 'custom'],
    GstAudioBaseSrcSlaveMethod: ['resample', 're-timestamp', 'skew', 'none'],
    GstAudioCdSrcMode: ['normal', 'continuous'],
    GstAudioChannelPosition: ['none', 'mono', 'invalid', 'front-left', 'front-right', 'front-center', 'lfe1', 'rear-left', 'rear-right', 'front-left-of-center', 'front-right-of-center', 'rear-center', 'lfe2', 'side-left', 'side-right', 'top-front-left', 'top-front-right', 'top-front-center', 'top-center', 'top-rear-left', 'top-rear-right', 'top-side-left', 'top-side-right', 'top-rear-center', 'bottom-front-center', 'bottom-front-left', 'bottom-front-right', 'wide-left', 'wide-right', 'surround-left', 'surround-right', 'top-surround-left', 'top-surround-right'],
    GstAudioDitherMethod: ['none', 'rpdf', 'tpdf', 'tpdf-hf'],
    GstAudioFormat: ['unknown', 'encoded', 's8', 'u8', 's16le', 's16be', 'u16le', 'u16be', 's24-32le', 's24-32be', 'u24-32le', 'u24-32be', 's32le', 's32be', 'u32le', 'u32be', 's24le', 's24be', 'u24le', 'u24be', 's20le', 's20be', 'u20le', 'u20be', 's18le', 's18be', 'u18le', 'u18be', 'f32le', 'f32be', 'f64le', 'f64be', 's20-32le', 's20-32be', 'u20-32le', 'u20-32be', 's16', 'u16', 's24-32', 'u24-32', 's32', 'u32', 's24', 'u24', 's20', 'u20', 's20-32', 'u20-32', 's18', 'u18', 'f32', 'f64'],
    GstAudioLayout: ['interleaved', 'non-interleaved'],
    GstAudioNoiseShapingMethod: ['none', 'error-feedback', 'simple', 'medium', 'high'],
    GstAudioResamplerFilterInterpolation: ['none', 'linear', 'cubic'],
    GstAudioResamplerFilterMode: ['interpolated', 'full', 'auto'],
    GstAudioResamplerMethod: ['nearest', 'linear', 'cubic', 'blackman-nuttall', 'kaiser'],
    GstAudioRingBufferFormatType: ['raw', 'mu-law', 'a-law', 'ima-adpcm', 'mpeg', 'gsm', 'iec958', 'ac3', 'eac3', 'dts', 'mpeg2-aac', 'mpeg4-aac', 'mpeg2-aac-raw', 'mpeg4-aac-raw', 'flac', 'dsd'],
    GstAudioRingBufferState: ['stopped', 'paused', 'started', 'error'],
    GstDsdFormat: ['dsd-format-unknown', 'dsd-format-u8', 'dsd-format-u16le', 'dsd-format-u16be', 'dsd-format-u32le', 'dsd-format-u32be', 'num-dsd-formats', 'dsd-format-u16', 'dsd-format-u32'],
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
    'GstAudioBaseSinkDiscontReason.alignment': 4,
    'GstAudioBaseSinkDiscontReason.device-failure': 5,
    'GstAudioBaseSinkDiscontReason.flush': 2,
    'GstAudioBaseSinkDiscontReason.new-caps': 1,
    'GstAudioBaseSinkDiscontReason.no-discont': 0,
    'GstAudioBaseSinkDiscontReason.sync-latency': 3,
    'GstAudioBaseSinkSlaveMethod.custom': 3,
    'GstAudioBaseSinkSlaveMethod.none': 2,
    'GstAudioBaseSinkSlaveMethod.resample': 0,
    'GstAudioBaseSinkSlaveMethod.skew': 1,
    'GstAudioBaseSrcSlaveMethod.none': 3,
    'GstAudioBaseSrcSlaveMethod.re-timestamp': 1,
    'GstAudioBaseSrcSlaveMethod.resample': 0,
    'GstAudioBaseSrcSlaveMethod.skew': 2,
    'GstAudioCdSrcMode.continuous': 1,
    'GstAudioCdSrcMode.normal': 0,
    'GstAudioChannelPosition.bottom-front-center': 21,
    'GstAudioChannelPosition.bottom-front-left': 22,
    'GstAudioChannelPosition.bottom-front-right': 23,
    'GstAudioChannelPosition.front-center': 2,
    'GstAudioChannelPosition.front-left': 0,
    'GstAudioChannelPosition.front-left-of-center': 6,
    'GstAudioChannelPosition.front-right': 1,
    'GstAudioChannelPosition.front-right-of-center': 7,
    'GstAudioChannelPosition.invalid': -1,
    'GstAudioChannelPosition.lfe1': 3,
    'GstAudioChannelPosition.lfe2': 9,
    'GstAudioChannelPosition.mono': -2,
    'GstAudioChannelPosition.none': -3,
    'GstAudioChannelPosition.rear-center': 8,
    'GstAudioChannelPosition.rear-left': 4,
    'GstAudioChannelPosition.rear-right': 5,
    'GstAudioChannelPosition.side-left': 10,
    'GstAudioChannelPosition.side-right': 11,
    'GstAudioChannelPosition.surround-left': 26,
    'GstAudioChannelPosition.surround-right': 27,
    'GstAudioChannelPosition.top-center': 15,
    'GstAudioChannelPosition.top-front-center': 14,
    'GstAudioChannelPosition.top-front-left': 12,
    'GstAudioChannelPosition.top-front-right': 13,
    'GstAudioChannelPosition.top-rear-center': 20,
    'GstAudioChannelPosition.top-rear-left': 16,
    'GstAudioChannelPosition.top-rear-right': 17,
    'GstAudioChannelPosition.top-side-left': 18,
    'GstAudioChannelPosition.top-side-right': 19,
    'GstAudioChannelPosition.top-surround-left': 28,
    'GstAudioChannelPosition.top-surround-right': 29,
    'GstAudioChannelPosition.wide-left': 24,
    'GstAudioChannelPosition.wide-right': 25,
    'GstAudioDitherMethod.none': 0,
    'GstAudioDitherMethod.rpdf': 1,
    'GstAudioDitherMethod.tpdf': 2,
    'GstAudioDitherMethod.tpdf-hf': 3,
    'GstAudioFormat.encoded': 1,
    'GstAudioFormat.f32': 28,
    'GstAudioFormat.f32be': 29,
    'GstAudioFormat.f32le': 28,
    'GstAudioFormat.f64': 30,
    'GstAudioFormat.f64be': 31,
    'GstAudioFormat.f64le': 30,
    'GstAudioFormat.s16': 4,
    'GstAudioFormat.s16be': 5,
    'GstAudioFormat.s16le': 4,
    'GstAudioFormat.s18': 24,
    'GstAudioFormat.s18be': 25,
    'GstAudioFormat.s18le': 24,
    'GstAudioFormat.s20': 20,
    'GstAudioFormat.s20-32': 32,
    'GstAudioFormat.s20-32be': 33,
    'GstAudioFormat.s20-32le': 32,
    'GstAudioFormat.s20be': 21,
    'GstAudioFormat.s20le': 20,
    'GstAudioFormat.s24': 16,
    'GstAudioFormat.s24-32': 8,
    'GstAudioFormat.s24-32be': 9,
    'GstAudioFormat.s24-32le': 8,
    'GstAudioFormat.s24be': 17,
    'GstAudioFormat.s24le': 16,
    'GstAudioFormat.s32': 12,
    'GstAudioFormat.s32be': 13,
    'GstAudioFormat.s32le': 12,
    'GstAudioFormat.s8': 2,
    'GstAudioFormat.u16': 6,
    'GstAudioFormat.u16be': 7,
    'GstAudioFormat.u16le': 6,
    'GstAudioFormat.u18': 26,
    'GstAudioFormat.u18be': 27,
    'GstAudioFormat.u18le': 26,
    'GstAudioFormat.u20': 22,
    'GstAudioFormat.u20-32': 34,
    'GstAudioFormat.u20-32be': 35,
    'GstAudioFormat.u20-32le': 34,
    'GstAudioFormat.u20be': 23,
    'GstAudioFormat.u20le': 22,
    'GstAudioFormat.u24': 18,
    'GstAudioFormat.u24-32': 10,
    'GstAudioFormat.u24-32be': 11,
    'GstAudioFormat.u24-32le': 10,
    'GstAudioFormat.u24be': 19,
    'GstAudioFormat.u24le': 18,
    'GstAudioFormat.u32': 14,
    'GstAudioFormat.u32be': 15,
    'GstAudioFormat.u32le': 14,
    'GstAudioFormat.u8': 3,
    'GstAudioFormat.unknown': 0,
    'GstAudioLayout.interleaved': 0,
    'GstAudioLayout.non-interleaved': 1,
    'GstAudioNoiseShapingMethod.error-feedback': 1,
    'GstAudioNoiseShapingMethod.high': 4,
    'GstAudioNoiseShapingMethod.medium': 3,
    'GstAudioNoiseShapingMethod.none': 0,
    'GstAudioNoiseShapingMethod.simple': 2,
    'GstAudioResamplerFilterInterpolation.cubic': 2,
    'GstAudioResamplerFilterInterpolation.linear': 1,
    'GstAudioResamplerFilterInterpolation.none': 0,
    'GstAudioResamplerFilterMode.auto': 2,
    'GstAudioResamplerFilterMode.full': 1,
    'GstAudioResamplerFilterMode.interpolated': 0,
    'GstAudioResamplerMethod.blackman-nuttall': 3,
    'GstAudioResamplerMethod.cubic': 2,
    'GstAudioResamplerMethod.kaiser': 4,
    'GstAudioResamplerMethod.linear': 1,
    'GstAudioResamplerMethod.nearest': 0,
    'GstAudioRingBufferFormatType.a-law': 2,
    'GstAudioRingBufferFormatType.ac3': 7,
    'GstAudioRingBufferFormatType.dsd': 15,
    'GstAudioRingBufferFormatType.dts': 9,
    'GstAudioRingBufferFormatType.eac3': 8,
    'GstAudioRingBufferFormatType.flac': 14,
    'GstAudioRingBufferFormatType.gsm': 5,
    'GstAudioRingBufferFormatType.iec958': 6,
    'GstAudioRingBufferFormatType.ima-adpcm': 3,
    'GstAudioRingBufferFormatType.mpeg': 4,
    'GstAudioRingBufferFormatType.mpeg2-aac': 10,
    'GstAudioRingBufferFormatType.mpeg2-aac-raw': 12,
    'GstAudioRingBufferFormatType.mpeg4-aac': 11,
    'GstAudioRingBufferFormatType.mpeg4-aac-raw': 13,
    'GstAudioRingBufferFormatType.mu-law': 1,
    'GstAudioRingBufferFormatType.raw': 0,
    'GstAudioRingBufferState.error': 3,
    'GstAudioRingBufferState.paused': 1,
    'GstAudioRingBufferState.started': 2,
    'GstAudioRingBufferState.stopped': 0,
    'GstDsdFormat.dsd-format-u16': 2,
    'GstDsdFormat.dsd-format-u16be': 3,
    'GstDsdFormat.dsd-format-u16le': 2,
    'GstDsdFormat.dsd-format-u32': 4,
    'GstDsdFormat.dsd-format-u32be': 5,
    'GstDsdFormat.dsd-format-u32le': 4,
    'GstDsdFormat.dsd-format-u8': 1,
    'GstDsdFormat.dsd-format-unknown': 0,
    'GstDsdFormat.num-dsd-formats': 6,
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
    'GstAudioChannelMixerFlags.non-interleaved-in': 1,
    'GstAudioChannelMixerFlags.non-interleaved-out': 2,
    'GstAudioChannelMixerFlags.none': 0,
    'GstAudioChannelMixerFlags.unpositioned-in': 4,
    'GstAudioChannelMixerFlags.unpositioned-out': 8,
    'GstAudioConverterFlags.in-writable': 1,
    'GstAudioConverterFlags.none': 0,
    'GstAudioConverterFlags.variable-rate': 2,
    'GstAudioFlags.none': 0,
    'GstAudioFlags.unpositioned': 1,
    'GstAudioFormatFlags.complex': 16,
    'GstAudioFormatFlags.float': 2,
    'GstAudioFormatFlags.integer': 1,
    'GstAudioFormatFlags.signed': 4,
    'GstAudioFormatFlags.unpack': 32,
    'GstAudioPackFlags.none': 0,
    'GstAudioPackFlags.truncate-range': 1,
    'GstAudioQuantizeFlags.non-interleaved': 1,
    'GstAudioQuantizeFlags.none': 0,
    'GstAudioResamplerFlags.non-interleaved-in': 1,
    'GstAudioResamplerFlags.non-interleaved-out': 2,
    'GstAudioResamplerFlags.none': 0,
    'GstAudioResamplerFlags.variable-rate': 4,
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
    'GstAudioBaseSink.slave-method': 'GstAudioBaseSinkSlaveMethod',
    'GstAudioBaseSrc.slave-method': 'GstAudioBaseSrcSlaveMethod',
    'GstAudioCdSrc.mode': 'GstAudioCdSrcMode',
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
    'GstAudioAggregatorConvertPad': '1.14',
    'GstAudioAggregatorPad': '1.14',
    'GstAudioAggregatorPad.qos-messages': '1.20',
    'GstBaseSink.max-bitrate': '1.2',
    'GstBaseSink.processing-deadline': '1.16',
};
