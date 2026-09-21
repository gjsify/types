// The widget vocabulary of RygelServer-2.8 as runtime data.
//
// GENERATED — do not edit. Provenance: RygelServer-2.8 — inlined base(s) their owner's vocabulary does not emit: RygelCore.StateMachine RygelCore.MediaDevice
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'RygelServer',
    version: '2.8',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: ['RygelCore.StateMachine', 'RygelCore.MediaDevice'],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Rygel'],
    requiredVocabularies: ['@girs/gee-0.8/vocabulary', '@girs/gobject-2.0/vocabulary', '@girs/gupnp-1.6/vocabulary', '@girs/rygelcore-2.8/vocabulary'],
};

export const OWN_PROPS = {
    RygelAudioItem: ['album', 'bitrate', 'bits-per-sample', 'channels', 'duration', 'sample-freq'],
    RygelDLNAAvailableSeekRangeResponse: ['end-byte', 'end-time', 'mode', 'range-length', 'start-byte', 'start-time'],
    RygelDTCPCleartextRequest: ['end-byte', 'range-length', 'start-byte', 'total-size'],
    RygelDTCPCleartextResponse: ['encrypted-length', 'end-byte', 'range-length', 'start-byte', 'total-size'],
    RygelHTTPByteSeekRequest: ['end-byte', 'range-length', 'start-byte', 'total-size'],
    RygelHTTPByteSeekResponse: ['end-byte', 'range-length', 'start-byte', 'total-size'],
    RygelHTTPItemURI: ['extension', 'http-server', 'item-id', 'resource-name', 'subtitle-index', 'thumbnail-index'],
    RygelHTTPResponse: ['server'],
    RygelHTTPServer: ['path-root', 'server-name'],
    RygelHTTPTimeSeekResponse: ['end-byte', 'end-time', 'range-duration', 'response-length', 'start-byte', 'start-time', 'total-duration', 'total-size'],
    RygelMediaContainer: ['child-count', 'create-mode-enabled', 'empty-child-count', 'sort-criteria'],
    RygelMediaDevice: ['capabilities', 'plugin', 'title'],
    RygelMediaFileItem: ['dlna-profile', 'mime-type', 'place-holder', 'size'],
    RygelMediaItem: ['description'],
    RygelMediaObject: ['artist', 'creator', 'date', 'genre', 'id', 'modified', 'object-update-id', 'parent', 'parent-ref', 'ref-id', 'title', 'upnp-class'],
    RygelMediaResource: ['audio-channels', 'bitrate', 'bits-per-sample', 'cleartext-size', 'color-depth', 'dlna-conversion', 'dlna-flags', 'dlna-operation', 'dlna-profile', 'duration', 'extension', 'height', 'import-uri', 'mime-type', 'network', 'protocol', 'sample-freq', 'size', 'uri', 'width'],
    RygelMediaServer: ['root-container'],
    RygelMusicItem: ['album-art', 'disc-number', 'track-number'],
    RygelPlaySpeedRequest: ['speed'],
    RygelSearchableContainer: ['search-classes'],
    RygelSerializer: ['serializer-type'],
    RygelStateMachine: ['cancellable'],
    RygelVideoItem: ['author', 'subtitles'],
    RygelVisualItem: ['color-depth', 'height', 'thumbnails', 'width'],
};

export const OWN_SIGNALS = {
    RygelMediaContainer: ['container-updated', 'sub-tree-updates-finished'],
    RygelStateMachine: ['completed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    RygelAudioItem: ['RygelAudioItem', 'RygelMediaFileItem', 'RygelMediaItem', 'RygelMediaObject', 'GObject'],
    RygelContentDirectory: ['RygelContentDirectory', 'GUPnPService', 'GUPnPServiceInfo', 'GObject'],
    RygelDLNAAvailableSeekRangeRequest: ['RygelDLNAAvailableSeekRangeRequest', 'RygelHTTPSeekRequest', 'GObject'],
    RygelDLNAAvailableSeekRangeResponse: ['RygelDLNAAvailableSeekRangeResponse', 'RygelHTTPResponseElement', 'GObject'],
    RygelDTCPCleartextRequest: ['RygelDTCPCleartextRequest', 'RygelHTTPSeekRequest', 'GObject'],
    RygelDTCPCleartextResponse: ['RygelDTCPCleartextResponse', 'RygelHTTPResponseElement', 'GObject'],
    RygelHTTPByteSeekRequest: ['RygelHTTPByteSeekRequest', 'RygelHTTPSeekRequest', 'GObject'],
    RygelHTTPByteSeekResponse: ['RygelHTTPByteSeekResponse', 'RygelHTTPResponseElement', 'GObject'],
    RygelHTTPGet: ['RygelHTTPGet', 'RygelHTTPRequest', 'GObject', 'RygelStateMachine'],
    RygelHTTPItemURI: ['RygelHTTPItemURI', 'GObject'],
    RygelHTTPResponse: ['RygelHTTPResponse', 'GObject', 'RygelStateMachine'],
    RygelHTTPServer: ['RygelHTTPServer', 'GObject', 'RygelStateMachine'],
    RygelHTTPTimeSeekRequest: ['RygelHTTPTimeSeekRequest', 'RygelHTTPSeekRequest', 'GObject'],
    RygelHTTPTimeSeekResponse: ['RygelHTTPTimeSeekResponse', 'RygelHTTPResponseElement', 'GObject'],
    RygelImageItem: ['RygelImageItem', 'RygelMediaFileItem', 'RygelMediaItem', 'RygelMediaObject', 'GObject', 'RygelVisualItem'],
    RygelLogicalExpression: ['RygelLogicalExpression', 'RygelSearchExpression'],
    RygelMediaArtStore: ['RygelMediaArtStore', 'GObject'],
    RygelMediaObjects: ['RygelMediaObjects', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    RygelMediaResource: ['RygelMediaResource', 'GObject'],
    RygelMediaServer: ['RygelMediaServer', 'RygelMediaDevice', 'GObject'],
    RygelMusicItem: ['RygelMusicItem', 'RygelAudioItem', 'RygelMediaFileItem', 'RygelMediaItem', 'RygelMediaObject', 'GObject'],
    RygelPhotoItem: ['RygelPhotoItem', 'RygelImageItem', 'RygelMediaFileItem', 'RygelMediaItem', 'RygelMediaObject', 'GObject', 'RygelVisualItem'],
    RygelPlaySpeed: ['RygelPlaySpeed'],
    RygelPlaySpeedRequest: ['RygelPlaySpeedRequest', 'GObject'],
    RygelPlaySpeedResponse: ['RygelPlaySpeedResponse', 'RygelHTTPResponseElement', 'GObject'],
    RygelPlaylistItem: ['RygelPlaylistItem', 'RygelMediaFileItem', 'RygelMediaItem', 'RygelMediaObject', 'GObject'],
    RygelRelationalExpression: ['RygelRelationalExpression', 'RygelSearchExpression'],
    RygelSerializer: ['RygelSerializer', 'GObject'],
    RygelSimpleContainer: ['RygelSimpleContainer', 'RygelMediaContainer', 'RygelMediaObject', 'GObject', 'RygelSearchableContainer'],
    RygelSubtitle: ['RygelSubtitle'],
    RygelThumbnail: ['RygelThumbnail', 'RygelIconInfo'],
    RygelVideoItem: ['RygelVideoItem', 'RygelAudioItem', 'RygelMediaFileItem', 'RygelMediaItem', 'RygelMediaObject', 'GObject', 'RygelVisualItem'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    RygelLogicalOperator: ['and', 'or'],
    RygelObjectEventType: ['added', 'modified', 'deleted'],
    RygelSerializerType: ['generic-didl', 'didl-s', 'm3uext'],
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
    'RygelLogicalOperator.and': 0,
    'RygelLogicalOperator.or': 1,
    'RygelObjectEventType.added': 0,
    'RygelObjectEventType.deleted': 2,
    'RygelObjectEventType.modified': 1,
    'RygelSerializerType.didl-s': 1,
    'RygelSerializerType.generic-didl': 0,
    'RygelSerializerType.m3uext': 2,
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
    'GUPnPDLNAConversion.none': 0,
    'GUPnPDLNAConversion.transcoded': 1,
    'GUPnPDLNAFlags.background-transfer-mode': 4194304,
    'GUPnPDLNAFlags.byte-based-seek': 536870912,
    'GUPnPDLNAFlags.cleartext-byteseek-full': 32768,
    'GUPnPDLNAFlags.connection-stall': 2097152,
    'GUPnPDLNAFlags.dlna-v15': 1048576,
    'GUPnPDLNAFlags.interactive-transfer-mode': 8388608,
    'GUPnPDLNAFlags.link-protected-content': 65536,
    'GUPnPDLNAFlags.lop-cleartext-byteseek': 16384,
    'GUPnPDLNAFlags.none': 0,
    'GUPnPDLNAFlags.play-container': 268435456,
    'GUPnPDLNAFlags.rtsp-pause': 33554432,
    'GUPnPDLNAFlags.s0-increase': 134217728,
    'GUPnPDLNAFlags.sender-paced': 2147483648,
    'GUPnPDLNAFlags.sn-increase': 67108864,
    'GUPnPDLNAFlags.streaming-transfer-mode': 16777216,
    'GUPnPDLNAFlags.time-based-seek': 1073741824,
    'GUPnPDLNAOperation.none': 0,
    'GUPnPDLNAOperation.range': 1,
    'GUPnPDLNAOperation.timeseek': 16,
    'RygelPluginCapabilities.audio-upload': 4,
    'RygelPluginCapabilities.create-containers': 16,
    'RygelPluginCapabilities.diagnostics': 32,
    'RygelPluginCapabilities.energy-management': 64,
    'RygelPluginCapabilities.image-upload': 1,
    'RygelPluginCapabilities.none': 0,
    'RygelPluginCapabilities.track-changes': 8,
    'RygelPluginCapabilities.video-upload': 2,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {
    'RygelPluginCapabilities.upload': '(null)',
};

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
    'RygelMediaDevice.capabilities': 'RygelPluginCapabilities',
    'RygelMediaResource.dlna-conversion': 'GUPnPDLNAConversion',
    'RygelMediaResource.dlna-flags': 'GUPnPDLNAFlags',
    'RygelMediaResource.dlna-operation': 'GUPnPDLNAOperation',
    'RygelSerializer.serializer-type': 'RygelSerializerType',
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
    'RygelAudioItem.album': 'gchararray',
    'RygelAudioItem.bitrate': 'gint',
    'RygelAudioItem.bits-per-sample': 'gint',
    'RygelAudioItem.channels': 'gint',
    'RygelAudioItem.duration': 'glong',
    'RygelAudioItem.sample-freq': 'gint',
    'RygelDLNAAvailableSeekRangeResponse.end-byte': 'gint64',
    'RygelDLNAAvailableSeekRangeResponse.end-time': 'gint64',
    'RygelDLNAAvailableSeekRangeResponse.mode': 'gint',
    'RygelDLNAAvailableSeekRangeResponse.range-length': 'gint64',
    'RygelDLNAAvailableSeekRangeResponse.start-byte': 'gint64',
    'RygelDLNAAvailableSeekRangeResponse.start-time': 'gint64',
    'RygelDTCPCleartextRequest.end-byte': 'gint64',
    'RygelDTCPCleartextRequest.range-length': 'gint64',
    'RygelDTCPCleartextRequest.start-byte': 'gint64',
    'RygelDTCPCleartextRequest.total-size': 'gint64',
    'RygelDTCPCleartextResponse.encrypted-length': 'gint64',
    'RygelDTCPCleartextResponse.end-byte': 'gint64',
    'RygelDTCPCleartextResponse.range-length': 'gint64',
    'RygelDTCPCleartextResponse.start-byte': 'gint64',
    'RygelDTCPCleartextResponse.total-size': 'gint64',
    'RygelHTTPByteSeekRequest.end-byte': 'gint64',
    'RygelHTTPByteSeekRequest.range-length': 'gint64',
    'RygelHTTPByteSeekRequest.start-byte': 'gint64',
    'RygelHTTPByteSeekRequest.total-size': 'gint64',
    'RygelHTTPByteSeekResponse.end-byte': 'gint64',
    'RygelHTTPByteSeekResponse.range-length': 'gint64',
    'RygelHTTPByteSeekResponse.start-byte': 'gint64',
    'RygelHTTPByteSeekResponse.total-size': 'gint64',
    'RygelHTTPItemURI.extension': 'gchararray',
    'RygelHTTPItemURI.http-server': 'RygelHTTPServer',
    'RygelHTTPItemURI.item-id': 'gchararray',
    'RygelHTTPItemURI.resource-name': 'gchararray',
    'RygelHTTPItemURI.subtitle-index': 'gint',
    'RygelHTTPItemURI.thumbnail-index': 'gint',
    'RygelHTTPResponse.server': 'SoupServer',
    'RygelHTTPServer.path-root': 'gchararray',
    'RygelHTTPServer.server-name': 'gchararray',
    'RygelHTTPTimeSeekResponse.end-byte': 'gint64',
    'RygelHTTPTimeSeekResponse.end-time': 'gint64',
    'RygelHTTPTimeSeekResponse.range-duration': 'gint64',
    'RygelHTTPTimeSeekResponse.response-length': 'gint64',
    'RygelHTTPTimeSeekResponse.start-byte': 'gint64',
    'RygelHTTPTimeSeekResponse.start-time': 'gint64',
    'RygelHTTPTimeSeekResponse.total-duration': 'gint64',
    'RygelHTTPTimeSeekResponse.total-size': 'gint64',
    'RygelMediaContainer.child-count': 'gint',
    'RygelMediaContainer.create-mode-enabled': 'gboolean',
    'RygelMediaContainer.empty-child-count': 'gint',
    'RygelMediaContainer.sort-criteria': 'gchararray',
    'RygelMediaDevice.capabilities': 'RygelPluginCapabilities',
    'RygelMediaDevice.plugin': 'RygelPlugin',
    'RygelMediaDevice.title': 'gchararray',
    'RygelMediaFileItem.dlna-profile': 'gchararray',
    'RygelMediaFileItem.mime-type': 'gchararray',
    'RygelMediaFileItem.place-holder': 'gboolean',
    'RygelMediaFileItem.size': 'gint64',
    'RygelMediaItem.description': 'gchararray',
    'RygelMediaObject.artist': 'gchararray',
    'RygelMediaObject.creator': 'gchararray',
    'RygelMediaObject.date': 'gchararray',
    'RygelMediaObject.genre': 'gchararray',
    'RygelMediaObject.id': 'gchararray',
    'RygelMediaObject.modified': 'guint64',
    'RygelMediaObject.object-update-id': 'guint',
    'RygelMediaObject.parent': 'RygelMediaContainer',
    'RygelMediaObject.parent-ref': 'RygelMediaContainer',
    'RygelMediaObject.ref-id': 'gchararray',
    'RygelMediaObject.title': 'gchararray',
    'RygelMediaObject.upnp-class': 'gchararray',
    'RygelMediaResource.audio-channels': 'gint',
    'RygelMediaResource.bitrate': 'gint',
    'RygelMediaResource.bits-per-sample': 'gint',
    'RygelMediaResource.cleartext-size': 'gint64',
    'RygelMediaResource.color-depth': 'gint',
    'RygelMediaResource.dlna-conversion': 'GUPnPDLNAConversion',
    'RygelMediaResource.dlna-flags': 'GUPnPDLNAFlags',
    'RygelMediaResource.dlna-operation': 'GUPnPDLNAOperation',
    'RygelMediaResource.dlna-profile': 'gchararray',
    'RygelMediaResource.duration': 'glong',
    'RygelMediaResource.extension': 'gchararray',
    'RygelMediaResource.height': 'gint',
    'RygelMediaResource.import-uri': 'gchararray',
    'RygelMediaResource.mime-type': 'gchararray',
    'RygelMediaResource.network': 'gchararray',
    'RygelMediaResource.protocol': 'gchararray',
    'RygelMediaResource.sample-freq': 'gint',
    'RygelMediaResource.size': 'gint64',
    'RygelMediaResource.uri': 'gchararray',
    'RygelMediaResource.width': 'gint',
    'RygelMediaServer.root-container': 'RygelMediaContainer',
    'RygelMusicItem.album-art': 'RygelThumbnail',
    'RygelMusicItem.disc-number': 'gint',
    'RygelMusicItem.track-number': 'gint',
    'RygelPlaySpeedRequest.speed': 'RygelPlaySpeed',
    'RygelSearchableContainer.search-classes': 'GeeArrayList',
    'RygelSerializer.serializer-type': 'RygelSerializerType',
    'RygelStateMachine.cancellable': 'GCancellable',
    'RygelVideoItem.author': 'gchararray',
    'RygelVideoItem.subtitles': 'GeeArrayList',
    'RygelVisualItem.color-depth': 'gint',
    'RygelVisualItem.height': 'gint',
    'RygelVisualItem.thumbnails': 'GeeArrayList',
    'RygelVisualItem.width': 'gint',
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
