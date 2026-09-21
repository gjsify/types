// The widget vocabulary of Gst-0.10 as runtime data.
//
// GENERATED — do not edit. Provenance: Gst-0.10 — library 0.10.29
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gst',
    version: '0.10',
    libraryVersion: '0.10.29',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: [],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GstBaseSrc: ['blocksize', 'do-timestamp', 'num-buffers', 'typefind'],
    GstBin: ['async-handling'],
    GstClock: ['stats', 'timeout', 'window-size', 'window-threshold'],
    GstIndex: ['resolver'],
    GstObject: ['name'],
    GstPad: ['direction', 'template'],
    GstPadTemplate: ['caps', 'direction', 'name-template', 'presence'],
    GstPipeline: ['auto-flush-bus', 'delay'],
    GstSystemClock: ['clock-type'],
};

export const OWN_SIGNALS = {
    GstBin: ['do-latency', 'element-added', 'element-removed'],
    GstBus: ['message', 'sync-message'],
    GstChildProxy: ['child-added', 'child-removed'],
    GstDataQueue: ['empty', 'full'],
    GstElement: ['no-more-pads', 'pad-added', 'pad-removed'],
    GstIndex: ['entry-added'],
    GstObject: ['deep-notify', 'object-saved', 'parent-set', 'parent-unset'],
    GstPad: ['have-data', 'linked', 'request-link', 'unlinked'],
    GstPadTemplate: ['pad-created'],
    GstRegistry: ['feature-added', 'plugin-added'],
    GstXML: ['object-loaded'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GParamSpecMiniObject: ['GParamSpecMiniObject', 'GObject'],
    GstAdapter: ['GstAdapter', 'GObject'],
    GstBin: ['GstBin', 'GstElement', 'GstObject', 'GObject', 'GstChildProxy'],
    GstBuffer: ['GstBuffer', 'GstMiniObject'],
    GstBufferList: ['GstBufferList', 'GstMiniObject'],
    GstBus: ['GstBus', 'GstObject', 'GObject'],
    GstClock: ['GstClock', 'GstObject', 'GObject'],
    GstCollectPads: ['GstCollectPads', 'GstObject', 'GObject'],
    GstDataQueue: ['GstDataQueue', 'GObject'],
    GstElementFactory: ['GstElementFactory', 'GstPluginFeature', 'GstObject', 'GObject'],
    GstEvent: ['GstEvent', 'GstMiniObject'],
    GstGhostPad: ['GstGhostPad', 'GstProxyPad', 'GstPad', 'GstObject', 'GObject'],
    GstIndex: ['GstIndex', 'GstObject', 'GObject'],
    GstIndexFactory: ['GstIndexFactory', 'GstPluginFeature', 'GstObject', 'GObject'],
    GstMessage: ['GstMessage', 'GstMiniObject'],
    GstPad: ['GstPad', 'GstObject', 'GObject'],
    GstPadTemplate: ['GstPadTemplate', 'GstObject', 'GObject'],
    GstParamFraction: ['GstParamFraction', 'GObject'],
    GstPipeline: ['GstPipeline', 'GstBin', 'GstElement', 'GstObject', 'GObject', 'GstChildProxy'],
    GstPlugin: ['GstPlugin', 'GstObject', 'GObject'],
    GstProxyPad: ['GstProxyPad', 'GstPad', 'GstObject', 'GObject'],
    GstPushSrc: ['GstPushSrc', 'GstBaseSrc', 'GstElement', 'GstObject', 'GObject'],
    GstQuery: ['GstQuery', 'GstMiniObject'],
    GstRegistry: ['GstRegistry', 'GstObject', 'GObject'],
    GstSystemClock: ['GstSystemClock', 'GstClock', 'GstObject', 'GObject'],
    GstTask: ['GstTask', 'GstObject', 'GObject'],
    GstTaskPool: ['GstTaskPool', 'GstObject', 'GObject'],
    GstTypeFindFactory: ['GstTypeFindFactory', 'GstPluginFeature', 'GstObject', 'GObject'],
    GstXML: ['GstXML', 'GstObject', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GstActivateMode: ['none', 'push', 'pull'],
    GstBufferListItem: ['continue', 'skip-group', 'end'],
    GstBufferingMode: ['stream', 'download', 'timeshift', 'live'],
    GstBusSyncReply: ['drop', 'pass', 'async'],
    GstClockEntryType: ['single', 'periodic'],
    GstClockReturn: ['ok', 'early', 'unscheduled', 'busy', 'badtime', 'error', 'unsupported'],
    GstClockType: ['realtime', 'monotonic'],
    GstCoreError: ['failed', 'too-lazy', 'not-implemented', 'state-change', 'pad', 'thread', 'negotiation', 'event', 'seek', 'caps', 'tag', 'missing-plugin', 'clock', 'disabled', 'num-errors'],
    GstDebugColorFlags: ['fg-black', 'fg-red', 'fg-green', 'fg-yellow', 'fg-blue', 'fg-magenta', 'fg-cyan', 'fg-white', 'bg-black', 'bg-red', 'bg-green', 'bg-yellow', 'bg-blue', 'bg-magenta', 'bg-cyan', 'bg-white', 'bold', 'underline'],
    GstDebugLevel: ['none', 'error', 'warning', 'info', 'debug', 'log', 'fixme', 'trace', 'memdump', 'count'],
    GstEventType: ['unknown', 'flush-start', 'flush-stop', 'eos', 'newsegment', 'tag', 'buffersize', 'sink-message', 'qos', 'seek', 'navigation', 'latency', 'step', 'custom-upstream', 'custom-downstream', 'custom-downstream-oob', 'custom-both', 'custom-both-oob'],
    GstFlowReturn: ['custom-success-2', 'custom-success-1', 'custom-success', 'resend', 'ok', 'not-linked', 'wrong-state', 'unexpected', 'not-negotiated', 'error', 'not-supported', 'custom-error', 'custom-error-1', 'custom-error-2'],
    GstFormat: ['undefined', 'default', 'bytes', 'time', 'buffers', 'percent'],
    GstIndexCertainty: ['unknown', 'certain', 'fuzzy'],
    GstIndexEntryType: ['id', 'association', 'object', 'format'],
    GstIndexLookupMethod: ['exact', 'before', 'after'],
    GstIndexResolverMethod: ['custom', 'gtype', 'path'],
    GstIteratorItem: ['skip', 'pass', 'end'],
    GstIteratorResult: ['done', 'ok', 'resync', 'error'],
    GstLibraryError: ['failed', 'too-lazy', 'init', 'shutdown', 'settings', 'encode', 'num-errors'],
    GstPadDirection: ['unknown', 'src', 'sink'],
    GstPadLinkReturn: ['ok', 'wrong-hierarchy', 'was-linked', 'wrong-direction', 'noformat', 'nosched', 'refused'],
    GstPadPresence: ['always', 'sometimes', 'request'],
    GstParseError: ['syntax', 'no-such-element', 'no-such-property', 'link', 'could-not-set-property', 'empty-bin', 'empty'],
    GstPluginError: ['module', 'dependencies', 'name-mismatch'],
    GstQueryType: ['none', 'position', 'duration', 'latency', 'jitter', 'rate', 'seeking', 'segment', 'convert', 'formats', 'buffering', 'custom', 'uri'],
    GstRank: ['none', 'marginal', 'secondary', 'primary'],
    GstResourceError: ['failed', 'too-lazy', 'not-found', 'busy', 'open-read', 'open-write', 'open-read-write', 'close', 'read', 'write', 'seek', 'sync', 'settings', 'no-space-left', 'num-errors'],
    GstSearchMode: ['exact', 'before', 'after'],
    GstSeekType: ['none', 'cur', 'set', 'end'],
    GstState: ['void-pending', 'null', 'ready', 'paused', 'playing'],
    GstStateChange: ['null-to-ready', 'ready-to-paused', 'paused-to-playing', 'playing-to-paused', 'paused-to-ready', 'ready-to-null'],
    GstStateChangeReturn: ['failure', 'success', 'async', 'no-preroll'],
    GstStreamError: ['failed', 'too-lazy', 'not-implemented', 'type-not-found', 'wrong-type', 'codec-not-found', 'decode', 'encode', 'demux', 'mux', 'format', 'decrypt', 'decrypt-nokey', 'num-errors'],
    GstStreamStatusType: ['create', 'enter', 'leave', 'destroy', 'start', 'pause', 'stop'],
    GstStructureChangeType: ['link', 'unlink'],
    GstTagFlag: ['undefined', 'meta', 'encoded', 'decoded', 'count'],
    GstTagMergeMode: ['undefined', 'replace-all', 'replace', 'append', 'prepend', 'keep', 'keep-all', 'count'],
    GstTaskState: ['started', 'stopped', 'paused'],
    GstTypeFindProbability: ['minimum', 'possible', 'likely', 'nearly-certain', 'maximum'],
    GstURIType: ['unknown', 'sink', 'src'],
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
    'GstActivateMode.none': 0,
    'GstActivateMode.pull': 2,
    'GstActivateMode.push': 1,
    'GstBufferListItem.continue': 0,
    'GstBufferListItem.end': 2,
    'GstBufferListItem.skip-group': 1,
    'GstBufferingMode.download': 1,
    'GstBufferingMode.live': 3,
    'GstBufferingMode.stream': 0,
    'GstBufferingMode.timeshift': 2,
    'GstBusSyncReply.async': 2,
    'GstBusSyncReply.drop': 0,
    'GstBusSyncReply.pass': 1,
    'GstClockEntryType.periodic': 1,
    'GstClockEntryType.single': 0,
    'GstClockReturn.badtime': 4,
    'GstClockReturn.busy': 3,
    'GstClockReturn.early': 1,
    'GstClockReturn.error': 5,
    'GstClockReturn.ok': 0,
    'GstClockReturn.unscheduled': 2,
    'GstClockReturn.unsupported': 6,
    'GstClockType.monotonic': 1,
    'GstClockType.realtime': 0,
    'GstCoreError.caps': 10,
    'GstCoreError.clock': 13,
    'GstCoreError.disabled': 14,
    'GstCoreError.event': 8,
    'GstCoreError.failed': 1,
    'GstCoreError.missing-plugin': 12,
    'GstCoreError.negotiation': 7,
    'GstCoreError.not-implemented': 3,
    'GstCoreError.num-errors': 15,
    'GstCoreError.pad': 5,
    'GstCoreError.seek': 9,
    'GstCoreError.state-change': 4,
    'GstCoreError.tag': 11,
    'GstCoreError.thread': 6,
    'GstCoreError.too-lazy': 2,
    'GstDebugColorFlags.bg-black': 0,
    'GstDebugColorFlags.bg-blue': 64,
    'GstDebugColorFlags.bg-cyan': 96,
    'GstDebugColorFlags.bg-green': 32,
    'GstDebugColorFlags.bg-magenta': 80,
    'GstDebugColorFlags.bg-red': 16,
    'GstDebugColorFlags.bg-white': 112,
    'GstDebugColorFlags.bg-yellow': 48,
    'GstDebugColorFlags.bold': 256,
    'GstDebugColorFlags.fg-black': 0,
    'GstDebugColorFlags.fg-blue': 4,
    'GstDebugColorFlags.fg-cyan': 6,
    'GstDebugColorFlags.fg-green': 2,
    'GstDebugColorFlags.fg-magenta': 5,
    'GstDebugColorFlags.fg-red': 1,
    'GstDebugColorFlags.fg-white': 7,
    'GstDebugColorFlags.fg-yellow': 3,
    'GstDebugColorFlags.underline': 512,
    'GstDebugLevel.count': 10,
    'GstDebugLevel.debug': 4,
    'GstDebugLevel.error': 1,
    'GstDebugLevel.fixme': 6,
    'GstDebugLevel.info': 3,
    'GstDebugLevel.log': 5,
    'GstDebugLevel.memdump': 9,
    'GstDebugLevel.none': 0,
    'GstDebugLevel.trace': 7,
    'GstDebugLevel.warning': 2,
    'GstEventType.buffersize': 134,
    'GstEventType.custom-both': 519,
    'GstEventType.custom-both-oob': 515,
    'GstEventType.custom-downstream': 518,
    'GstEventType.custom-downstream-oob': 514,
    'GstEventType.custom-upstream': 513,
    'GstEventType.eos': 86,
    'GstEventType.flush-start': 19,
    'GstEventType.flush-stop': 39,
    'GstEventType.latency': 289,
    'GstEventType.navigation': 273,
    'GstEventType.newsegment': 102,
    'GstEventType.qos': 241,
    'GstEventType.seek': 257,
    'GstEventType.sink-message': 150,
    'GstEventType.step': 305,
    'GstEventType.tag': 118,
    'GstEventType.unknown': 0,
    'GstFlowReturn.custom-error': -100,
    'GstFlowReturn.custom-error-1': -101,
    'GstFlowReturn.custom-error-2': -102,
    'GstFlowReturn.custom-success': 100,
    'GstFlowReturn.custom-success-1': 101,
    'GstFlowReturn.custom-success-2': 102,
    'GstFlowReturn.error': -5,
    'GstFlowReturn.not-linked': -1,
    'GstFlowReturn.not-negotiated': -4,
    'GstFlowReturn.not-supported': -6,
    'GstFlowReturn.ok': 0,
    'GstFlowReturn.resend': 1,
    'GstFlowReturn.unexpected': -3,
    'GstFlowReturn.wrong-state': -2,
    'GstFormat.buffers': 4,
    'GstFormat.bytes': 2,
    'GstFormat.default': 1,
    'GstFormat.percent': 5,
    'GstFormat.time': 3,
    'GstFormat.undefined': 0,
    'GstIndexCertainty.certain': 1,
    'GstIndexCertainty.fuzzy': 2,
    'GstIndexCertainty.unknown': 0,
    'GstIndexEntryType.association': 1,
    'GstIndexEntryType.format': 3,
    'GstIndexEntryType.id': 0,
    'GstIndexEntryType.object': 2,
    'GstIndexLookupMethod.after': 2,
    'GstIndexLookupMethod.before': 1,
    'GstIndexLookupMethod.exact': 0,
    'GstIndexResolverMethod.custom': 0,
    'GstIndexResolverMethod.gtype': 1,
    'GstIndexResolverMethod.path': 2,
    'GstIteratorItem.end': 2,
    'GstIteratorItem.pass': 1,
    'GstIteratorItem.skip': 0,
    'GstIteratorResult.done': 0,
    'GstIteratorResult.error': 3,
    'GstIteratorResult.ok': 1,
    'GstIteratorResult.resync': 2,
    'GstLibraryError.encode': 6,
    'GstLibraryError.failed': 1,
    'GstLibraryError.init': 3,
    'GstLibraryError.num-errors': 7,
    'GstLibraryError.settings': 5,
    'GstLibraryError.shutdown': 4,
    'GstLibraryError.too-lazy': 2,
    'GstPadDirection.sink': 2,
    'GstPadDirection.src': 1,
    'GstPadDirection.unknown': 0,
    'GstPadLinkReturn.noformat': -4,
    'GstPadLinkReturn.nosched': -5,
    'GstPadLinkReturn.ok': 0,
    'GstPadLinkReturn.refused': -6,
    'GstPadLinkReturn.was-linked': -2,
    'GstPadLinkReturn.wrong-direction': -3,
    'GstPadLinkReturn.wrong-hierarchy': -1,
    'GstPadPresence.always': 0,
    'GstPadPresence.request': 2,
    'GstPadPresence.sometimes': 1,
    'GstParseError.could-not-set-property': 4,
    'GstParseError.empty': 6,
    'GstParseError.empty-bin': 5,
    'GstParseError.link': 3,
    'GstParseError.no-such-element': 1,
    'GstParseError.no-such-property': 2,
    'GstParseError.syntax': 0,
    'GstPluginError.dependencies': 1,
    'GstPluginError.module': 0,
    'GstPluginError.name-mismatch': 2,
    'GstQueryType.buffering': 10,
    'GstQueryType.convert': 8,
    'GstQueryType.custom': 11,
    'GstQueryType.duration': 2,
    'GstQueryType.formats': 9,
    'GstQueryType.jitter': 4,
    'GstQueryType.latency': 3,
    'GstQueryType.none': 0,
    'GstQueryType.position': 1,
    'GstQueryType.rate': 5,
    'GstQueryType.seeking': 6,
    'GstQueryType.segment': 7,
    'GstQueryType.uri': 12,
    'GstRank.marginal': 64,
    'GstRank.none': 0,
    'GstRank.primary': 256,
    'GstRank.secondary': 128,
    'GstResourceError.busy': 4,
    'GstResourceError.close': 8,
    'GstResourceError.failed': 1,
    'GstResourceError.no-space-left': 14,
    'GstResourceError.not-found': 3,
    'GstResourceError.num-errors': 15,
    'GstResourceError.open-read': 5,
    'GstResourceError.open-read-write': 7,
    'GstResourceError.open-write': 6,
    'GstResourceError.read': 9,
    'GstResourceError.seek': 11,
    'GstResourceError.settings': 13,
    'GstResourceError.sync': 12,
    'GstResourceError.too-lazy': 2,
    'GstResourceError.write': 10,
    'GstSearchMode.after': 2,
    'GstSearchMode.before': 1,
    'GstSearchMode.exact': 0,
    'GstSeekType.cur': 1,
    'GstSeekType.end': 3,
    'GstSeekType.none': 0,
    'GstSeekType.set': 2,
    'GstState.null': 1,
    'GstState.paused': 3,
    'GstState.playing': 4,
    'GstState.ready': 2,
    'GstState.void-pending': 0,
    'GstStateChange.null-to-ready': 10,
    'GstStateChange.paused-to-playing': 28,
    'GstStateChange.paused-to-ready': 26,
    'GstStateChange.playing-to-paused': 35,
    'GstStateChange.ready-to-null': 17,
    'GstStateChange.ready-to-paused': 19,
    'GstStateChangeReturn.async': 2,
    'GstStateChangeReturn.failure': 0,
    'GstStateChangeReturn.no-preroll': 3,
    'GstStateChangeReturn.success': 1,
    'GstStreamError.codec-not-found': 6,
    'GstStreamError.decode': 7,
    'GstStreamError.decrypt': 12,
    'GstStreamError.decrypt-nokey': 13,
    'GstStreamError.demux': 9,
    'GstStreamError.encode': 8,
    'GstStreamError.failed': 1,
    'GstStreamError.format': 11,
    'GstStreamError.mux': 10,
    'GstStreamError.not-implemented': 3,
    'GstStreamError.num-errors': 14,
    'GstStreamError.too-lazy': 2,
    'GstStreamError.type-not-found': 4,
    'GstStreamError.wrong-type': 5,
    'GstStreamStatusType.create': 0,
    'GstStreamStatusType.destroy': 3,
    'GstStreamStatusType.enter': 1,
    'GstStreamStatusType.leave': 2,
    'GstStreamStatusType.pause': 9,
    'GstStreamStatusType.start': 8,
    'GstStreamStatusType.stop': 10,
    'GstStructureChangeType.link': 0,
    'GstStructureChangeType.unlink': 1,
    'GstTagFlag.count': 4,
    'GstTagFlag.decoded': 3,
    'GstTagFlag.encoded': 2,
    'GstTagFlag.meta': 1,
    'GstTagFlag.undefined': 0,
    'GstTagMergeMode.append': 3,
    'GstTagMergeMode.count': 7,
    'GstTagMergeMode.keep': 5,
    'GstTagMergeMode.keep-all': 6,
    'GstTagMergeMode.prepend': 4,
    'GstTagMergeMode.replace': 2,
    'GstTagMergeMode.replace-all': 1,
    'GstTagMergeMode.undefined': 0,
    'GstTaskState.paused': 2,
    'GstTaskState.started': 0,
    'GstTaskState.stopped': 1,
    'GstTypeFindProbability.likely': 80,
    'GstTypeFindProbability.maximum': 100,
    'GstTypeFindProbability.minimum': 1,
    'GstTypeFindProbability.nearly-certain': 99,
    'GstTypeFindProbability.possible': 50,
    'GstURIType.sink': 1,
    'GstURIType.src': 2,
    'GstURIType.unknown': 0,
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
    'GstAllocTraceFlags.live': 1,
    'GstAllocTraceFlags.mem-live': 2,
    'GstAssocFlags.delta-unit': 2,
    'GstAssocFlags.key-unit': 1,
    'GstAssocFlags.last': 256,
    'GstAssocFlags.none': 0,
    'GstBinFlags.last': 33554432,
    'GstBufferCopyFlags.caps': 4,
    'GstBufferCopyFlags.flags': 1,
    'GstBufferCopyFlags.timestamps': 2,
    'GstBufferFlag.delta-unit': 256,
    'GstBufferFlag.discont': 32,
    'GstBufferFlag.gap': 128,
    'GstBufferFlag.in-caps': 64,
    'GstBufferFlag.last': 4096,
    'GstBufferFlag.media1': 512,
    'GstBufferFlag.media2': 1024,
    'GstBufferFlag.media3': 2048,
    'GstBufferFlag.preroll': 16,
    'GstBufferFlag.readonly': 1,
    'GstBusFlags.flag-last': 32,
    'GstBusFlags.flushing': 16,
    'GstCapsFlags.any': 1,
    'GstClockFlags.can-do-periodic-async': 128,
    'GstClockFlags.can-do-periodic-sync': 64,
    'GstClockFlags.can-do-single-async': 32,
    'GstClockFlags.can-do-single-sync': 16,
    'GstClockFlags.can-set-master': 512,
    'GstClockFlags.can-set-resolution': 256,
    'GstClockFlags.last': 4096,
    'GstDebugGraphDetails.all': 15,
    'GstDebugGraphDetails.caps-details': 2,
    'GstDebugGraphDetails.media-type': 1,
    'GstDebugGraphDetails.non-default-params': 4,
    'GstDebugGraphDetails.states': 8,
    'GstElementFlags.flag-last': 1048576,
    'GstElementFlags.is-sink': 32,
    'GstElementFlags.locked-state': 16,
    'GstElementFlags.unparenting': 64,
    'GstEventTypeFlags.downstream': 2,
    'GstEventTypeFlags.serialized': 4,
    'GstEventTypeFlags.upstream': 1,
    'GstIndexFlags.flag-last': 4096,
    'GstIndexFlags.readable': 32,
    'GstIndexFlags.writable': 16,
    'GstMessageType.any': -1,
    'GstMessageType.application': 16384,
    'GstMessageType.async-done': 2097152,
    'GstMessageType.async-start': 1048576,
    'GstMessageType.buffering': 32,
    'GstMessageType.clock-lost': 1024,
    'GstMessageType.clock-provide': 512,
    'GstMessageType.duration': 262144,
    'GstMessageType.element': 32768,
    'GstMessageType.eos': 1,
    'GstMessageType.error': 2,
    'GstMessageType.info': 8,
    'GstMessageType.latency': 524288,
    'GstMessageType.new-clock': 2048,
    'GstMessageType.qos': 16777216,
    'GstMessageType.request-state': 4194304,
    'GstMessageType.segment-done': 131072,
    'GstMessageType.segment-start': 65536,
    'GstMessageType.state-changed': 64,
    'GstMessageType.state-dirty': 128,
    'GstMessageType.step-done': 256,
    'GstMessageType.step-start': 8388608,
    'GstMessageType.stream-status': 8192,
    'GstMessageType.structure-change': 4096,
    'GstMessageType.tag': 16,
    'GstMessageType.unknown': 0,
    'GstMessageType.warning': 4,
    'GstMiniObjectFlags.last': 16,
    'GstMiniObjectFlags.readonly': 1,
    'GstObjectFlags.disposing': 1,
    'GstObjectFlags.flag-last': 16,
    'GstObjectFlags.floating': 2,
    'GstPadFlags.blocked': 16,
    'GstPadFlags.blocking': 256,
    'GstPadFlags.flag-last': 4096,
    'GstPadFlags.flushing': 32,
    'GstPadFlags.in-getcaps': 64,
    'GstPadFlags.in-setcaps': 128,
    'GstPadLinkCheck.caps': 4,
    'GstPadLinkCheck.hierarchy': 1,
    'GstPadLinkCheck.nothing': 0,
    'GstPadLinkCheck.template-caps': 2,
    'GstPadTemplateFlags.fixed': 16,
    'GstPadTemplateFlags.flag-last': 256,
    'GstParseFlags.fatal-errors': 1,
    'GstParseFlags.none': 0,
    'GstPipelineFlags.fixed-clock': 33554432,
    'GstPipelineFlags.last': 536870912,
    'GstPluginDependencyFlags.file-name-is-suffix': 4,
    'GstPluginDependencyFlags.none': 0,
    'GstPluginDependencyFlags.paths-are-default-only': 2,
    'GstPluginDependencyFlags.recurse': 1,
    'GstPluginFlags.blacklisted': 2,
    'GstPluginFlags.cached': 1,
    'GstSeekFlags.accurate': 2,
    'GstSeekFlags.flush': 1,
    'GstSeekFlags.key-unit': 4,
    'GstSeekFlags.none': 0,
    'GstSeekFlags.segment': 8,
    'GstSeekFlags.skip': 16,
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
    'GstPad.direction': 'GstPadDirection',
    'GstPadTemplate.direction': 'GstPadDirection',
    'GstPadTemplate.presence': 'GstPadPresence',
    'GstSystemClock.clock-type': 'GstClockType',
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
    'GstBaseSrc.blocksize': 'gulong',
    'GstBaseSrc.do-timestamp': 'gboolean',
    'GstBaseSrc.num-buffers': 'gint',
    'GstBaseSrc.typefind': 'gboolean',
    'GstBin.async-handling': 'gboolean',
    'GstClock.stats': 'gboolean',
    'GstClock.timeout': 'guint64',
    'GstClock.window-size': 'gint',
    'GstClock.window-threshold': 'gint',
    'GstObject.name': 'gchararray',
    'GstPad.direction': 'GstPadDirection',
    'GstPad.template': 'GstPadTemplate',
    'GstPadTemplate.direction': 'GstPadDirection',
    'GstPadTemplate.name-template': 'gchararray',
    'GstPadTemplate.presence': 'GstPadPresence',
    'GstPipeline.auto-flush-bus': 'gboolean',
    'GstPipeline.delay': 'guint64',
    'GstSystemClock.clock-type': 'GstClockType',
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
