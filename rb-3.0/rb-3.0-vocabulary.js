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

export const SLOT_CANDIDATES = {};

export const SINCE = {};
