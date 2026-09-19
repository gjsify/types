// The widget vocabulary of Unity-6.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Unity-6.0
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Unity',
    version: '6.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: [],
    requiredVocabularies: ['@girs/dee-1.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    UnityActivationResponse: ['goto-uri', 'handled'],
    UnityAnnotatedIcon: ['category', 'icon', 'ribbon', 'size-hint'],
    UnityApplicationPreview: ['app-icon', 'copyright', 'last-update', 'license'],
    UnityAsyncPreview: ['cancellable'],
    UnityCategory: ['default-renderer', 'icon-hint', 'name'],
    UnityFilter: ['collapsed', 'display-name', 'filtering', 'icon-hint', 'id', 'renderer', 'visible'],
    UnityFilterOption: ['active', 'display-name', 'icon-hint', 'id'],
    UnityInfoHint: ['data', 'display-name', 'icon-hint', 'id'],
    UnityLauncherEntry: ['app-uri', 'count', 'count-visible', 'progress', 'progress-visible', 'quicklist', 'urgent'],
    UnityLens: ['active', 'categories', 'dbus-path', 'exported', 'filters', 'global-merge-strategy', 'home-lens-default-name', 'id', 'merge-strategy', 'search-hint', 'search-in-global', 'searching', 'sources-display-name', 'visible'],
    UnityLensSearch: ['hints', 'results-model', 'search-string'],
    UnityMoviePreview: ['year'],
    UnityMusicPlayer: ['app-info', 'can-go-next', 'can-go-previous', 'can-pause', 'can-play', 'current-playlist', 'current-track', 'desktop-file-name', 'is-blacklisted', 'playback-state', 'player-menu', 'title', 'track-menu'],
    UnityMusicPreview: ['current-progress', 'current-track-state', 'current-track-uri'],
    UnityOptionsFilter: ['sort-type'],
    UnityPlaylist: ['creation-date', 'icon', 'id', 'last-play-date', 'modification-date', 'name'],
    UnityPreferencesManager: ['remote-content-search'],
    UnityPreview: ['description-markup', 'image', 'image-source-uri', 'subtitle', 'title'],
    UnityPreviewAction: ['display-name', 'extra-text', 'icon-hint', 'id', 'layout-hint'],
    UnityRatingsFilter: ['rating'],
    UnityScope: ['active', 'dbus-path', 'exported', 'provides-personal-content', 'search-in-global', 'sources'],
    UnitySocialPreview: ['avatar', 'content', 'sender'],
    UnitySocialPreviewComment: ['id', 'name', 'text', 'time'],
    UnityTrackMetadata: ['album', 'art-icon', 'art-location', 'artist', 'length', 'title', 'track-no', 'uri'],
};

export const OWN_SIGNALS = {
    UnityAppInfoManager: ['changed'],
    UnityAsyncPreview: ['preview_ready'],
    UnityFilter: ['changed'],
    UnityLauncherFavorites: ['changed'],
    UnityLensSearch: ['finished'],
    UnityMusicPlayer: ['activate_playlist', 'next', 'play_pause', 'previous', 'raise'],
    UnityMusicPreview: ['pause', 'play'],
    UnityPreview: ['closed'],
    UnityPreviewAction: ['activated'],
    UnityScope: ['activate_uri', 'active_sources_changed', 'filters_changed', 'generate_search_key', 'preview_uri', 'search_changed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    UnityActivationResponse: ['UnityActivationResponse', 'GInitiallyUnowned', 'GObject'],
    UnityAnnotatedIcon: ['UnityAnnotatedIcon', 'GObject'],
    UnityAppInfoManager: ['UnityAppInfoManager', 'GObject'],
    UnityApplicationPreview: ['UnityApplicationPreview', 'UnityPreview', 'GObject', 'DeeSerializable'],
    UnityAsyncPreview: ['UnityAsyncPreview', 'UnityPreview', 'GObject', 'DeeSerializable'],
    UnityCategory: ['UnityCategory', 'GObject'],
    UnityCheckOptionFilter: ['UnityCheckOptionFilter', 'UnityOptionsFilter', 'UnityFilter', 'GObject'],
    UnityCheckOptionFilterCompact: ['UnityCheckOptionFilterCompact', 'UnityOptionsFilter', 'UnityFilter', 'GObject'],
    UnityFilterOption: ['UnityFilterOption', 'GObject'],
    UnityGenericPreview: ['UnityGenericPreview', 'UnityPreview', 'GObject', 'DeeSerializable'],
    UnityInfoHint: ['UnityInfoHint', 'GInitiallyUnowned', 'GObject'],
    UnityInspector: ['UnityInspector', 'GObject'],
    UnityLauncherEntry: ['UnityLauncherEntry', 'GObject', 'DeeSerializable'],
    UnityLauncherFavorites: ['UnityLauncherFavorites', 'GObject'],
    UnityLens: ['UnityLens', 'GObject'],
    UnityLensSearch: ['UnityLensSearch', 'GInitiallyUnowned', 'GObject'],
    UnityMoviePreview: ['UnityMoviePreview', 'UnityPreview', 'GObject', 'DeeSerializable'],
    UnityMultiRangeFilter: ['UnityMultiRangeFilter', 'UnityOptionsFilter', 'UnityFilter', 'GObject'],
    UnityMusicPlayer: ['UnityMusicPlayer', 'GObject'],
    UnityMusicPreview: ['UnityMusicPreview', 'UnityPreview', 'GObject', 'DeeSerializable'],
    UnityOptionsFilter: ['UnityOptionsFilter', 'UnityFilter', 'GObject'],
    UnityPlaylist: ['UnityPlaylist', 'GObject'],
    UnityPreferencesManager: ['UnityPreferencesManager', 'GObject'],
    UnityPreviewAction: ['UnityPreviewAction', 'GObject', 'DeeSerializable'],
    UnityRadioOptionFilter: ['UnityRadioOptionFilter', 'UnityOptionsFilter', 'UnityFilter', 'GObject'],
    UnityRatingsFilter: ['UnityRatingsFilter', 'UnityFilter', 'GObject'],
    UnityScope: ['UnityScope', 'GObject'],
    UnitySocialPreview: ['UnitySocialPreview', 'UnityPreview', 'GObject', 'DeeSerializable'],
    UnitySocialPreviewComment: ['UnitySocialPreviewComment', 'GInitiallyUnowned', 'GObject'],
    UnityTrackMetadata: ['UnityTrackMetadata', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    UnityCategoryRenderer: ['vertical-tile', 'horizontal-tile', 'list-tile', 'flow'],
    UnityCategoryType: ['none', 'application', 'book', 'music', 'movie', 'games', 'electronics', 'computers', 'office', 'home', 'garden', 'pets', 'toys', 'children', 'baby', 'clothes', 'shoes', 'watches', 'sports', 'outdoors', 'grocery', 'health', 'beauty', 'diy', 'tools', 'car', 'n-categories'],
    UnityFilterRenderer: ['check-options', 'radio-options', 'multirange', 'ratings', 'check-options-compact'],
    UnityHandledType: ['not-handled', 'show-dash', 'hide-dash', 'goto-dash-uri', 'show-preview'],
    UnityIconSizeHint: ['default', 'small', 'large'],
    UnityLayoutHint: ['none', 'left', 'right', 'top', 'bottom'],
    UnityMusicPreviewTrackState: ['stopped', 'playing', 'paused'],
    UnityOptionsFilterSortType: ['manual', 'display-name', 'id'],
    UnityPlaybackState: ['playing', 'paused'],
    UnityPreferencesManagerRemoteContent: ['all', 'none'],
    UnitySearchType: ['default', 'global', 'n-types'],
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
    'UnityCategoryRenderer.flow': 3,
    'UnityCategoryRenderer.horizontal-tile': 1,
    'UnityCategoryRenderer.list-tile': 2,
    'UnityCategoryRenderer.vertical-tile': 0,
    'UnityCategoryType.application': 1,
    'UnityCategoryType.baby': 14,
    'UnityCategoryType.beauty': 22,
    'UnityCategoryType.book': 2,
    'UnityCategoryType.car': 25,
    'UnityCategoryType.children': 13,
    'UnityCategoryType.clothes': 15,
    'UnityCategoryType.computers': 7,
    'UnityCategoryType.diy': 23,
    'UnityCategoryType.electronics': 6,
    'UnityCategoryType.games': 5,
    'UnityCategoryType.garden': 10,
    'UnityCategoryType.grocery': 20,
    'UnityCategoryType.health': 21,
    'UnityCategoryType.home': 9,
    'UnityCategoryType.movie': 4,
    'UnityCategoryType.music': 3,
    'UnityCategoryType.n-categories': 26,
    'UnityCategoryType.none': 0,
    'UnityCategoryType.office': 8,
    'UnityCategoryType.outdoors': 19,
    'UnityCategoryType.pets': 11,
    'UnityCategoryType.shoes': 16,
    'UnityCategoryType.sports': 18,
    'UnityCategoryType.tools': 24,
    'UnityCategoryType.toys': 12,
    'UnityCategoryType.watches': 17,
    'UnityFilterRenderer.check-options': 0,
    'UnityFilterRenderer.check-options-compact': 4,
    'UnityFilterRenderer.multirange': 2,
    'UnityFilterRenderer.radio-options': 1,
    'UnityFilterRenderer.ratings': 3,
    'UnityHandledType.goto-dash-uri': 3,
    'UnityHandledType.hide-dash': 2,
    'UnityHandledType.not-handled': 0,
    'UnityHandledType.show-dash': 1,
    'UnityHandledType.show-preview': 4,
    'UnityIconSizeHint.default': 0,
    'UnityIconSizeHint.large': 2,
    'UnityIconSizeHint.small': 1,
    'UnityLayoutHint.bottom': 4,
    'UnityLayoutHint.left': 1,
    'UnityLayoutHint.none': 0,
    'UnityLayoutHint.right': 2,
    'UnityLayoutHint.top': 3,
    'UnityMusicPreviewTrackState.paused': 2,
    'UnityMusicPreviewTrackState.playing': 1,
    'UnityMusicPreviewTrackState.stopped': 0,
    'UnityOptionsFilterSortType.display-name': 1,
    'UnityOptionsFilterSortType.id': 2,
    'UnityOptionsFilterSortType.manual': 0,
    'UnityPlaybackState.paused': 1,
    'UnityPlaybackState.playing': 0,
    'UnityPreferencesManagerRemoteContent.all': 0,
    'UnityPreferencesManagerRemoteContent.none': 1,
    'UnitySearchType.default': 0,
    'UnitySearchType.global': 1,
    'UnitySearchType.n-types': 2,
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
export const PROP_ENUMS = {
    'UnityActivationResponse.handled': 'UnityHandledType',
    'UnityAnnotatedIcon.category': 'UnityCategoryType',
    'UnityAnnotatedIcon.size-hint': 'UnityIconSizeHint',
    'UnityCategory.default-renderer': 'UnityCategoryRenderer',
    'UnityFilter.renderer': 'UnityFilterRenderer',
    'UnityMusicPlayer.playback-state': 'UnityPlaybackState',
    'UnityMusicPreview.current-track-state': 'UnityMusicPreviewTrackState',
    'UnityOptionsFilter.sort-type': 'UnityOptionsFilterSortType',
    'UnityPreferencesManager.remote-content-search': 'UnityPreferencesManagerRemoteContent',
    'UnityPreviewAction.layout-hint': 'UnityLayoutHint',
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
