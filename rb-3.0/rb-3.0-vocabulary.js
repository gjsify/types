// The widget vocabulary of RB-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: RB-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'RB',
    version: '3.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    RBBrowserSource: ['populate'],
    RBButtonBar: ['model', 'target'],
    RBDisplayPage: ['icon', 'name', 'parent', 'plugin', 'shell', 'visibility'],
    RBDisplayPageGroup: ['category', 'id'],
    RBDisplayPageTree: ['shell'],
    RBEntryView: ['db', 'is-drag-dest', 'is-drag-source', 'model', 'playing-state', 'shell-player', 'sort-order', 'visible-columns'],
    RBFadingImage: ['fallback', 'use-tooltip'],
    RBLibraryBrowser: ['browser-views', 'db', 'entry-type'],
    RBMediaPlayerSource: ['encoding-settings', 'encoding-target'],
    RBPlaylistSource: ['is-local'],
    RBPropertyView: ['db', 'draggable', 'prop', 'property-model', 'title'],
    RBRating: ['rating'],
    RBSearchEntry: ['explicit-mode', 'has-popup'],
    RBSegmentedBar: ['bar-height', 'show-labels', 'show-reflection'],
    RBSongInfo: ['entry-view', 'source'],
    RBSource: ['entry-type', 'hidden-when-empty', 'load-status', 'playlist-menu', 'query-model', 'settings', 'show-browser', 'toolbar-menu'],
    RBSourceToolbar: ['accel-group', 'page'],
    RBURIDialog: ['label'],
};

export const OWN_SIGNALS = {
    RBDisplayPage: ['deleted', 'status-changed'],
    RBDisplayPageTree: ['drop-received', 'selected'],
    RBEntryView: ['entries-replaced', 'entry-activated', 'entry-added', 'entry-deleted', 'get-playing-icon', 'have-selection-changed', 'selection-changed', 'show-popup'],
    RBFadingImage: ['pixbuf-dropped', 'uri-dropped'],
    RBPropertyView: ['properties-selected', 'property-activated', 'property-selected', 'property-selection-reset', 'show-popup'],
    RBRating: ['adjust-rating', 'rated', 'set-rating'],
    RBSearchEntry: ['activate', 'search', 'show-popup'],
    RBSongInfo: ['post-metadata-change', 'pre-metadata-change'],
    RBSource: ['filter-changed', 'playback-status-changed', 'reset-filters'],
    RBURIDialog: ['location-added'],
};

export const DECLS = {
    RBAutoPlaylistSource: ['RBAutoPlaylistSource', 'RBPlaylistSource', 'RBSource', 'RBDisplayPage', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    RBButtonBar: ['RBButtonBar', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    RBDisplayPageGroup: ['RBDisplayPageGroup', 'RBDisplayPage', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    RBDisplayPageTree: ['RBDisplayPageTree', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    RBEntryView: ['RBEntryView', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    RBFadingImage: ['RBFadingImage', 'GtkWidget', 'GtkBuildable'],
    RBLibraryBrowser: ['RBLibraryBrowser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    RBMediaPlayerSource: ['RBMediaPlayerSource', 'RBBrowserSource', 'RBSource', 'RBDisplayPage', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    RBPropertyView: ['RBPropertyView', 'GtkScrolledWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    RBRating: ['RBRating', 'GtkWidget', 'GtkBuildable'],
    RBSearchEntry: ['RBSearchEntry', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    RBSegmentedBar: ['RBSegmentedBar', 'GtkWidget', 'GtkBuildable'],
    RBShellPreferences: ['RBShellPreferences', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    RBSongInfo: ['RBSongInfo', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    RBSourceToolbar: ['RBSourceToolbar', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    RBStaticPlaylistSource: ['RBStaticPlaylistSource', 'RBPlaylistSource', 'RBSource', 'RBDisplayPage', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    RBStreamingSource: ['RBStreamingSource', 'RBSource', 'RBDisplayPage', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    RBURIDialog: ['RBURIDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    RBDisplayPageGroupType: ['fixed', 'persistent', 'removable', 'transient', 'tools'],
    RBDisplayPageModelColumn: ['playing', 'page'],
    RBEntryViewColumn: ['track-number', 'title', 'artist', 'album', 'genre', 'comment', 'duration', 'quality', 'rating', 'play-count', 'year', 'last-played', 'first-seen', 'last-seen', 'location', 'bpm', 'error', 'composer'],
    RBEntryViewState: ['not-playing', 'playing', 'paused'],
    RBExtDBSourceType: ['none', 'search', 'embedded', 'user', 'user-explicit'],
    RBMetadataFieldType: ['title', 'artist', 'album', 'date', 'genre', 'comment', 'track-number', 'track-count', 'album-disc-number', 'album-disc-count', 'description', 'version', 'isrc', 'organization', 'copyright', 'contact', 'license', 'performer', 'duration', 'codec', 'bitrate', 'replaygain-track-gain', 'replaygain-track-peak', 'replaygain-album-gain', 'replaygain-album-peak', 'beats-per-minute', 'language-code', 'musicbrainz-trackid', 'musicbrainz-artistid', 'musicbrainz-albumid', 'musicbrainz-albumartistid', 'musicbrainz-sortname', 'album-sortname', 'title-sortname', 'album-artist', 'album-artist-sortname', 'composer', 'composer-sortname'],
    RBPlayerPlayType: ['replace', 'start-after-eos', 'crossfade'],
    RBPodcastFeedUpdateStatus: ['started', 'error', 'error-background', 'conflict', 'cancelled', 'subscribed', 'unchanged', 'updated'],
    RBShellActivationType: ['select', 'play', 'always-play'],
    RBShellPrefsUILocation: ['general', 'playback'],
    RBShellUILocation: ['sidebar', 'right-sidebar', 'main-top', 'main-bottom'],
    RBSourceEOFType: ['error', 'stop', 'retry', 'next'],
    RBSourceLoadStatus: ['not-loaded', 'waiting', 'loading', 'loaded'],
    RBTaskOutcome: ['none', 'complete', 'cancelled'],
    RhythmDBEntryAvailability: ['checked', 'mounted', 'unmounted', 'not-found'],
    RhythmDBEntryCategory: ['normal', 'stream', 'container', 'virtual'],
    RhythmDBPropType: ['type', 'entry-id', 'title', 'genre', 'artist', 'album', 'track-number', 'track-total', 'disc-number', 'disc-total', 'duration', 'file-size', 'location', 'mountpoint', 'mtime', 'first-seen', 'last-seen', 'rating', 'play-count', 'last-played', 'bitrate', 'date', 'replaygain-track-gain', 'replaygain-track-peak', 'replaygain-album-gain', 'replaygain-album-peak', 'media-type', 'title-sort-key', 'genre-sort-key', 'artist-sort-key', 'album-sort-key', 'title-folded', 'genre-folded', 'artist-folded', 'album-folded', 'last-played-str', 'hidden', 'playback-error', 'first-seen-str', 'last-seen-str', 'search-match', 'year', 'keyword', 'status', 'description', 'subtitle', 'summary', 'lang', 'copyright', 'image', 'post-time', 'podcast-guid', 'mb-trackid', 'mb-artistid', 'mb-albumid', 'mb-albumartistid', 'mb-artistsortname', 'album-sortname', 'artist-sortname-sort-key', 'artist-sortname-folded', 'album-sortname-sort-key', 'album-sortname-folded', 'comment', 'album-artist', 'album-artist-sort-key', 'album-artist-folded', 'album-artist-sortname', 'album-artist-sortname-sort-key', 'album-artist-sortname-folded', 'beats-per-minute', 'composer', 'composer-sort-key', 'composer-folded', 'composer-sortname', 'composer-sortname-sort-key', 'composer-sortname-folded', 'title-sortname', 'title-sortname-sort-key', 'title-sortname-folded'],
    RhythmDBPropertyModelColumn: ['property-title', 'value-priority', 'track-count'],
    RhythmDBQueryModelLimitType: ['no-limit', 'limit-count', 'limit-size', 'limit-duration'],
    RhythmDBQueryType: ['query-end', 'disjunctive-marker', 'subquery', 'equals', 'not-equal', 'fuzzy-match', 'inverted-fuzzy-match', 'starts-with', 'ends-with', 'greater-than', 'less-than', 'within-current-time', 'not-within-current-time', 'year-equals', 'year-not-equals', 'year-greater-than', 'year-less-than'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 129 enums a GTK 4 vocabulary carries (104 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'RBDisplayPageGroupType.fixed': 0,
    'RBDisplayPageGroupType.persistent': 2,
    'RBDisplayPageGroupType.removable': 1,
    'RBDisplayPageGroupType.tools': 4,
    'RBDisplayPageGroupType.transient': 3,
    'RBDisplayPageModelColumn.page': 1,
    'RBDisplayPageModelColumn.playing': 0,
    'RBEntryViewColumn.album': 3,
    'RBEntryViewColumn.artist': 2,
    'RBEntryViewColumn.bpm': 15,
    'RBEntryViewColumn.comment': 5,
    'RBEntryViewColumn.composer': 17,
    'RBEntryViewColumn.duration': 6,
    'RBEntryViewColumn.error': 16,
    'RBEntryViewColumn.first-seen': 12,
    'RBEntryViewColumn.genre': 4,
    'RBEntryViewColumn.last-played': 11,
    'RBEntryViewColumn.last-seen': 13,
    'RBEntryViewColumn.location': 14,
    'RBEntryViewColumn.play-count': 9,
    'RBEntryViewColumn.quality': 7,
    'RBEntryViewColumn.rating': 8,
    'RBEntryViewColumn.title': 1,
    'RBEntryViewColumn.track-number': 0,
    'RBEntryViewColumn.year': 10,
    'RBEntryViewState.not-playing': 0,
    'RBEntryViewState.paused': 2,
    'RBEntryViewState.playing': 1,
    'RBExtDBSourceType.embedded': 2,
    'RBExtDBSourceType.none': 0,
    'RBExtDBSourceType.search': 1,
    'RBExtDBSourceType.user': 3,
    'RBExtDBSourceType.user-explicit': 4,
    'RBMetadataFieldType.album': 2,
    'RBMetadataFieldType.album-artist': 34,
    'RBMetadataFieldType.album-artist-sortname': 35,
    'RBMetadataFieldType.album-disc-count': 9,
    'RBMetadataFieldType.album-disc-number': 8,
    'RBMetadataFieldType.album-sortname': 32,
    'RBMetadataFieldType.artist': 1,
    'RBMetadataFieldType.beats-per-minute': 26,
    'RBMetadataFieldType.bitrate': 20,
    'RBMetadataFieldType.codec': 19,
    'RBMetadataFieldType.comment': 5,
    'RBMetadataFieldType.composer': 36,
    'RBMetadataFieldType.composer-sortname': 37,
    'RBMetadataFieldType.contact': 15,
    'RBMetadataFieldType.copyright': 14,
    'RBMetadataFieldType.date': 3,
    'RBMetadataFieldType.description': 10,
    'RBMetadataFieldType.duration': 18,
    'RBMetadataFieldType.genre': 4,
    'RBMetadataFieldType.isrc': 12,
    'RBMetadataFieldType.language-code': 25,
    'RBMetadataFieldType.license': 16,
    'RBMetadataFieldType.musicbrainz-albumartistid': 30,
    'RBMetadataFieldType.musicbrainz-albumid': 29,
    'RBMetadataFieldType.musicbrainz-artistid': 28,
    'RBMetadataFieldType.musicbrainz-sortname': 31,
    'RBMetadataFieldType.musicbrainz-trackid': 27,
    'RBMetadataFieldType.organization': 13,
    'RBMetadataFieldType.performer': 17,
    'RBMetadataFieldType.replaygain-album-gain': 23,
    'RBMetadataFieldType.replaygain-album-peak': 24,
    'RBMetadataFieldType.replaygain-track-gain': 21,
    'RBMetadataFieldType.replaygain-track-peak': 22,
    'RBMetadataFieldType.title': 0,
    'RBMetadataFieldType.title-sortname': 33,
    'RBMetadataFieldType.track-count': 7,
    'RBMetadataFieldType.track-number': 6,
    'RBMetadataFieldType.version': 11,
    'RBPlayerPlayType.crossfade': 2,
    'RBPlayerPlayType.replace': 0,
    'RBPlayerPlayType.start-after-eos': 1,
    'RBPodcastFeedUpdateStatus.cancelled': 4,
    'RBPodcastFeedUpdateStatus.conflict': 3,
    'RBPodcastFeedUpdateStatus.error': 1,
    'RBPodcastFeedUpdateStatus.error-background': 2,
    'RBPodcastFeedUpdateStatus.started': 0,
    'RBPodcastFeedUpdateStatus.subscribed': 5,
    'RBPodcastFeedUpdateStatus.unchanged': 6,
    'RBPodcastFeedUpdateStatus.updated': 7,
    'RBShellActivationType.always-play': 2,
    'RBShellActivationType.play': 1,
    'RBShellActivationType.select': 0,
    'RBShellPrefsUILocation.general': 0,
    'RBShellPrefsUILocation.playback': 1,
    'RBShellUILocation.main-bottom': 3,
    'RBShellUILocation.main-top': 2,
    'RBShellUILocation.right-sidebar': 1,
    'RBShellUILocation.sidebar': 0,
    'RBSourceEOFType.error': 0,
    'RBSourceEOFType.next': 3,
    'RBSourceEOFType.retry': 2,
    'RBSourceEOFType.stop': 1,
    'RBSourceLoadStatus.loaded': 3,
    'RBSourceLoadStatus.loading': 2,
    'RBSourceLoadStatus.not-loaded': 0,
    'RBSourceLoadStatus.waiting': 1,
    'RBTaskOutcome.cancelled': 2,
    'RBTaskOutcome.complete': 1,
    'RBTaskOutcome.none': 0,
    'RhythmDBEntryAvailability.checked': 0,
    'RhythmDBEntryAvailability.mounted': 1,
    'RhythmDBEntryAvailability.not-found': 3,
    'RhythmDBEntryAvailability.unmounted': 2,
    'RhythmDBEntryCategory.container': 2,
    'RhythmDBEntryCategory.normal': 0,
    'RhythmDBEntryCategory.stream': 1,
    'RhythmDBEntryCategory.virtual': 3,
    'RhythmDBPropType.album': 5,
    'RhythmDBPropType.album-artist': 63,
    'RhythmDBPropType.album-artist-folded': 65,
    'RhythmDBPropType.album-artist-sort-key': 64,
    'RhythmDBPropType.album-artist-sortname': 66,
    'RhythmDBPropType.album-artist-sortname-folded': 68,
    'RhythmDBPropType.album-artist-sortname-sort-key': 67,
    'RhythmDBPropType.album-folded': 34,
    'RhythmDBPropType.album-sort-key': 30,
    'RhythmDBPropType.album-sortname': 57,
    'RhythmDBPropType.album-sortname-folded': 61,
    'RhythmDBPropType.album-sortname-sort-key': 60,
    'RhythmDBPropType.artist': 4,
    'RhythmDBPropType.artist-folded': 33,
    'RhythmDBPropType.artist-sort-key': 29,
    'RhythmDBPropType.artist-sortname-folded': 59,
    'RhythmDBPropType.artist-sortname-sort-key': 58,
    'RhythmDBPropType.beats-per-minute': 69,
    'RhythmDBPropType.bitrate': 20,
    'RhythmDBPropType.comment': 62,
    'RhythmDBPropType.composer': 70,
    'RhythmDBPropType.composer-folded': 72,
    'RhythmDBPropType.composer-sort-key': 71,
    'RhythmDBPropType.composer-sortname': 73,
    'RhythmDBPropType.composer-sortname-folded': 75,
    'RhythmDBPropType.composer-sortname-sort-key': 74,
    'RhythmDBPropType.copyright': 48,
    'RhythmDBPropType.date': 21,
    'RhythmDBPropType.description': 44,
    'RhythmDBPropType.disc-number': 8,
    'RhythmDBPropType.disc-total': 9,
    'RhythmDBPropType.duration': 10,
    'RhythmDBPropType.entry-id': 1,
    'RhythmDBPropType.file-size': 11,
    'RhythmDBPropType.first-seen': 15,
    'RhythmDBPropType.first-seen-str': 38,
    'RhythmDBPropType.genre': 3,
    'RhythmDBPropType.genre-folded': 32,
    'RhythmDBPropType.genre-sort-key': 28,
    'RhythmDBPropType.hidden': 36,
    'RhythmDBPropType.image': 49,
    'RhythmDBPropType.keyword': 42,
    'RhythmDBPropType.lang': 47,
    'RhythmDBPropType.last-played': 19,
    'RhythmDBPropType.last-played-str': 35,
    'RhythmDBPropType.last-seen': 16,
    'RhythmDBPropType.last-seen-str': 39,
    'RhythmDBPropType.location': 12,
    'RhythmDBPropType.mb-albumartistid': 55,
    'RhythmDBPropType.mb-albumid': 54,
    'RhythmDBPropType.mb-artistid': 53,
    'RhythmDBPropType.mb-artistsortname': 56,
    'RhythmDBPropType.mb-trackid': 52,
    'RhythmDBPropType.media-type': 26,
    'RhythmDBPropType.mountpoint': 13,
    'RhythmDBPropType.mtime': 14,
    'RhythmDBPropType.play-count': 18,
    'RhythmDBPropType.playback-error': 37,
    'RhythmDBPropType.podcast-guid': 51,
    'RhythmDBPropType.post-time': 50,
    'RhythmDBPropType.rating': 17,
    'RhythmDBPropType.replaygain-album-gain': 24,
    'RhythmDBPropType.replaygain-album-peak': 25,
    'RhythmDBPropType.replaygain-track-gain': 22,
    'RhythmDBPropType.replaygain-track-peak': 23,
    'RhythmDBPropType.search-match': 40,
    'RhythmDBPropType.status': 43,
    'RhythmDBPropType.subtitle': 45,
    'RhythmDBPropType.summary': 46,
    'RhythmDBPropType.title': 2,
    'RhythmDBPropType.title-folded': 31,
    'RhythmDBPropType.title-sort-key': 27,
    'RhythmDBPropType.title-sortname': 76,
    'RhythmDBPropType.title-sortname-folded': 78,
    'RhythmDBPropType.title-sortname-sort-key': 77,
    'RhythmDBPropType.track-number': 6,
    'RhythmDBPropType.track-total': 7,
    'RhythmDBPropType.type': 0,
    'RhythmDBPropType.year': 41,
    'RhythmDBPropertyModelColumn.property-title': 0,
    'RhythmDBPropertyModelColumn.track-count': 2,
    'RhythmDBPropertyModelColumn.value-priority': 1,
    'RhythmDBQueryModelLimitType.limit-count': 1,
    'RhythmDBQueryModelLimitType.limit-duration': 3,
    'RhythmDBQueryModelLimitType.limit-size': 2,
    'RhythmDBQueryModelLimitType.no-limit': 0,
    'RhythmDBQueryType.disjunctive-marker': 1,
    'RhythmDBQueryType.ends-with': 8,
    'RhythmDBQueryType.equals': 3,
    'RhythmDBQueryType.fuzzy-match': 5,
    'RhythmDBQueryType.greater-than': 9,
    'RhythmDBQueryType.inverted-fuzzy-match': 6,
    'RhythmDBQueryType.less-than': 10,
    'RhythmDBQueryType.not-equal': 4,
    'RhythmDBQueryType.not-within-current-time': 12,
    'RhythmDBQueryType.query-end': 0,
    'RhythmDBQueryType.starts-with': 7,
    'RhythmDBQueryType.subquery': 2,
    'RhythmDBQueryType.within-current-time': 11,
    'RhythmDBQueryType.year-equals': 13,
    'RhythmDBQueryType.year-greater-than': 15,
    'RhythmDBQueryType.year-less-than': 16,
    'RhythmDBQueryType.year-not-equals': 14,
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
// reason says nothing about one member's number. 21 writable widget properties in Gtk-4.0
// and Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, ... -- and they are typed bare `number`, so a host without GI
// has nothing to compute one from. Counting is worst exactly here: 95 of 121 Gtk-4.0
// bitfield members disagree with their position, against 29 of 685 enumeration members.
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
// that OWNS an enum publishes it, so 57 of the 438 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'RBDisplayPageGroup.category': 'RBDisplayPageGroupType',
    'RBPropertyView.prop': 'RhythmDBPropType',
    'RBSource.load-status': 'RBSourceLoadStatus',
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
