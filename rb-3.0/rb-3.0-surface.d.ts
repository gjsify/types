/**
 * The GIR-derived widget VOCABULARY for RB-3.0.
 *
 * GENERATED — do not edit. Provenance: RB-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
 *
 * 18 concrete widgets, 22 declarations, 20 enum nick unions, 0 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type GObject from '@girs/gobject-2.0';
import type Gio from '@girs/gio-2.0';
import type GstPbutils from '@girs/gstpbutils-1.0';
import type Gtk from '@girs/gtk-3.0';
import type RB from './rb-3.0.js';
import type { GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkGridConstructOnly, GtkGridProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkScrolledWindowConstructOnly, GtkScrolledWindowProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type RBDisplayPageGroupTypeNick = 'fixed' | 'persistent' | 'removable' | 'transient' | 'tools';
export type RBDisplayPageModelColumnNick = 'playing' | 'page';
export type RBEntryViewColumnNick = 'track-number' | 'title' | 'artist' | 'album' | 'genre' | 'comment' | 'duration' | 'quality' | 'rating' | 'play-count' | 'year' | 'last-played' | 'first-seen' | 'last-seen' | 'location' | 'bpm' | 'error' | 'composer';
export type RBEntryViewStateNick = 'not-playing' | 'playing' | 'paused';
export type RBExtDBSourceTypeNick = 'none' | 'search' | 'embedded' | 'user' | 'user-explicit';
export type RBMetadataFieldTypeNick = 'title' | 'artist' | 'album' | 'date' | 'genre' | 'comment' | 'track-number' | 'track-count' | 'album-disc-number' | 'album-disc-count' | 'description' | 'version' | 'isrc' | 'organization' | 'copyright' | 'contact' | 'license' | 'performer' | 'duration' | 'codec' | 'bitrate' | 'replaygain-track-gain' | 'replaygain-track-peak' | 'replaygain-album-gain' | 'replaygain-album-peak' | 'beats-per-minute' | 'language-code' | 'musicbrainz-trackid' | 'musicbrainz-artistid' | 'musicbrainz-albumid' | 'musicbrainz-albumartistid' | 'musicbrainz-sortname' | 'album-sortname' | 'album-artist' | 'album-artist-sortname' | 'composer' | 'composer-sortname';
export type RBPlayerPlayTypeNick = 'replace' | 'start-after-eos' | 'crossfade';
export type RBPodcastFeedUpdateStatusNick = 'started' | 'error' | 'error-background' | 'conflict' | 'cancelled' | 'subscribed' | 'unchanged' | 'updated';
export type RBShellActivationTypeNick = 'select' | 'play' | 'always-play';
export type RBShellPrefsUILocationNick = 'general' | 'playback';
export type RBShellUILocationNick = 'sidebar' | 'right-sidebar' | 'main-top' | 'main-bottom';
export type RBSourceEOFTypeNick = 'error' | 'stop' | 'retry' | 'next';
export type RBSourceLoadStatusNick = 'not-loaded' | 'waiting' | 'loading' | 'loaded';
export type RBTaskOutcomeNick = 'none' | 'complete' | 'cancelled';
export type RhythmDBEntryAvailabilityNick = 'checked' | 'mounted' | 'unmounted' | 'not-found';
export type RhythmDBEntryCategoryNick = 'normal' | 'stream' | 'container' | 'virtual';
export type RhythmDBPropTypeNick = 'type' | 'entry-id' | 'title' | 'genre' | 'artist' | 'album' | 'track-number' | 'track-total' | 'disc-number' | 'disc-total' | 'duration' | 'file-size' | 'location' | 'mountpoint' | 'mtime' | 'first-seen' | 'last-seen' | 'rating' | 'play-count' | 'last-played' | 'bitrate' | 'date' | 'replaygain-track-gain' | 'replaygain-track-peak' | 'replaygain-album-gain' | 'replaygain-album-peak' | 'media-type' | 'title-sort-key' | 'genre-sort-key' | 'artist-sort-key' | 'album-sort-key' | 'title-folded' | 'genre-folded' | 'artist-folded' | 'album-folded' | 'last-played-str' | 'hidden' | 'playback-error' | 'first-seen-str' | 'last-seen-str' | 'search-match' | 'year' | 'keyword' | 'status' | 'description' | 'subtitle' | 'summary' | 'lang' | 'copyright' | 'image' | 'post-time' | 'podcast-guid' | 'mb-trackid' | 'mb-artistid' | 'mb-albumid' | 'mb-albumartistid' | 'mb-artistsortname' | 'album-sortname' | 'artist-sortname-sort-key' | 'artist-sortname-folded' | 'album-sortname-sort-key' | 'album-sortname-folded' | 'comment' | 'album-artist' | 'album-artist-sort-key' | 'album-artist-folded' | 'album-artist-sortname' | 'album-artist-sortname-sort-key' | 'album-artist-sortname-folded' | 'beats-per-minute' | 'composer' | 'composer-sort-key' | 'composer-folded' | 'composer-sortname' | 'composer-sortname-sort-key' | 'composer-sortname-folded';
export type RhythmDBPropertyModelColumnNick = 'property-title' | 'value-priority' | 'track-count';
export type RhythmDBQueryModelLimitTypeNick = 'no-limit' | 'limit-count' | 'limit-size' | 'limit-duration';
export type RhythmDBQueryTypeNick = 'query-end' | 'disjunctive-marker' | 'subquery' | 'equals' | 'not-equal' | 'fuzzy-match' | 'inverted-fuzzy-match' | 'starts-with' | 'ends-with' | 'greater-than' | 'less-than' | 'within-current-time' | 'not-within-current-time' | 'year-equals' | 'year-not-equals' | 'year-greater-than' | 'year-less-than';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** A playlist populated with the results of a database query. */
export interface RBAutoPlaylistSourceProps extends RBPlaylistSourceProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBAutoPlaylistSourceConstructOnly = RBPlaylistSourceConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** This class simplifies implementation of sources that include genre/artist/album browsers. */
export interface RBBrowserSourceProps extends RBSourceProps, GtkBuildableProps, GtkOrientableProps {
    populate?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBBrowserSourceConstructOnly = RBSourceConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface RBButtonBarProps extends GtkGridProps, GtkBuildableProps, GtkOrientableProps {
    model?: Gio.MenuModel;
    target?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBButtonBarConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'model' | 'target';

/** This is the base class for items that appear in the display page tree and can occupy the main display area. */
export interface RBDisplayPageProps extends Omit<GtkBoxProps, 'parent'>, GtkBuildableProps, GtkOrientableProps {
    /** Icon to display in the page tree */
    icon?: Gio.Icon;
    /** Page name as displayed in the tree */
    name?: string;
    /** The parent page in the tree (may be NULL) */
    parent?: RB.DisplayPage;
    /** The plugin that created this page. */
    plugin?: GObject.Object;
    /** The rhythmbox shell object */
    shell?: RB.Shell;
    /** If FALSE, the page will not be displayed in the tree */
    visibility?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBDisplayPageConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'parent' | 'shell';

/** Page groups define sections of the display page tree. */
export interface RBDisplayPageGroupProps extends RBDisplayPageProps, GtkBuildableProps, GtkOrientableProps {
    /** Page group category that the group falls into */
    category?: RBDisplayPageGroupTypeNick | RB.DisplayPageGroupType;
    /** Internal (untranslated) name for the page group */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBDisplayPageGroupConstructOnly = RBDisplayPageConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'category' | 'id';

/** The display page tree widget is a GtkTreeView backed by a GtkListStore containing the display page instances (sources and other things). */
export interface RBDisplayPageTreeProps extends GtkGridProps, GtkBuildableProps, GtkOrientableProps {
    /** The #RBShell instance */
    shell?: RB.Shell;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBDisplayPageTreeConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'shell';

/** This class provides a predefined set of columns for displaying the common set of #RhythmDBEntry properties, but also allows custom columns to be appended. */
export interface RBEntryViewProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** #RhythmDB instance */
    db?: RB.RhythmDB;
    /** If TRUE, the view acts as a destination for drag and drop operations. */
    'is-drag-dest'?: boolean;
    /** If TRUE, the view acts as a data source for drag and drop operations. */
    'is-drag-source'?: boolean;
    /** The #RhythmDBQueryModel backing the view */
    model?: RB.RhythmDBQueryModel;
    /** Determines the icon to show in the 'playing' column next to the current playing entry. */
    'playing-state'?: number;
    /** #RBShellPlayer instance */
    'shell-player'?: RB.ShellPlayer;
    /** The sort order for the track listing. */
    'sort-order'?: string;
    /** An array containing the names of the visible columns. */
    'visible-columns'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBEntryViewConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'db' | 'is-drag-dest' | 'is-drag-source' | 'shell-player';

/** This widget displays images, performing a simple fade transition between them. */
export interface RBFadingImageProps extends GtkWidgetProps, GtkBuildableProps {
    /** Name of an icon to display when no image is available. */
    fallback?: string;
    /** Whether to display a tooltip on the image */
    'use-tooltip'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBFadingImageConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | 'fallback' | 'use-tooltip';

/** This widget contains a set of #RBPropertyView<!-- -->s backed by #RhythmDBPropertyModel<!-- -->s and constructs a chain of #RhythmDBQueryModel<!-- -->s to perform filtering of the entries in a source. */
export interface RBLibraryBrowserProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** The set of browsers to display. */
    'browser-views'?: string;
    /** #RhythmDB instance */
    db?: RB.RhythmDB;
    /** The type of entries to use in the browser. */
    'entry-type'?: RB.RhythmDBEntryType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBLibraryBrowserConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'db' | 'entry-type';

export interface RBMediaPlayerSourceProps extends RBBrowserSourceProps, GtkBuildableProps, GtkOrientableProps {
    /** The #GSettings instance holding encoding settings for this device */
    'encoding-settings'?: Gio.Settings;
    /** The #GstEncodingTarget for this device */
    'encoding-target'?: GstPbutils.EncodingTarget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBMediaPlayerSourceConstructOnly = RBBrowserSourceConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** This class provides some common infrastructure for playlist sources. */
export interface RBPlaylistSourceProps extends RBSourceProps, GtkBuildableProps, GtkOrientableProps {
    /** Whether the playlist is attached to the local library. */
    'is-local'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBPlaylistSourceConstructOnly = RBSourceConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'is-local';

/** A simple #GtkTreeView that displays the contents of a #RhythmDBPropertyModel. */
export interface RBPropertyViewProps extends GtkScrolledWindowProps, GtkBuildableProps {
    /** #RhythmDB instance */
    db?: RB.RhythmDB;
    /** Whether the property view acts as a data source for drag and drop operations. */
    draggable?: boolean;
    /** The property that is displayed in this view */
    prop?: RhythmDBPropTypeNick | RB.RhythmDBPropType;
    /** The #RhythmDBPropertyModel backing the view. */
    'property-model'?: RB.RhythmDBPropertyModel;
    /** The title displayed in the header of the property view */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBPropertyViewConstructOnly = GtkScrolledWindowConstructOnly | GtkBuildableConstructOnly | 'db' | 'draggable' | 'prop' | 'title';

/** This widget displays a rating (0-5 stars) and allows the user to alter the rating by clicking. */
export interface RBRatingProps extends GtkWidgetProps, GtkBuildableProps {
    /** The rating displayed in the widget, as a floating point value between 0.0 and 5.0. */
    rating?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBRatingConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** The search entry contains a label and a text entry box. */
export interface RBSearchEntryProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** If TRUE, show a button and only emit the 'search' signal when the user presses it rather than when they stop typing. */
    'explicit-mode'?: boolean;
    /** If TRUE, show a primary icon and emit the show-popup when clicked. */
    'has-popup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBSearchEntryConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'has-popup';

export interface RBSegmentedBarProps extends GtkWidgetProps, GtkBuildableProps {
    /** Height of the segmented bar */
    'bar-height'?: number;
    /** Set to TRUE if you want labels describing the various segments to be shown. */
    'show-labels'?: boolean;
    /** Set to TRUE if you want a reflection to be shown below the segmented bar. */
    'show-reflection'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBSegmentedBarConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** The preferences dialog is built around a #GtkNotebook widget, with two built-in pages and additional pages for various sources. */
export interface RBShellPreferencesProps extends GtkDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBShellPreferencesConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

/** Displays song properties and, if we know how to edit tags in the file, allows the user to edit them. */
export interface RBSongInfoProps extends GtkDialogProps, GtkBuildableProps {
    /** The #RBEntryView for the source that created the song properties window. */
    'entry-view'?: RB.EntryView;
    /** The #RBSource that created the song properties window. */
    source?: RB.Source;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBSongInfoConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | 'entry-view' | 'source';

/** This class provides methods for requesting information about the UI capabilities of the source, and defines the expectations that apply to all sources - that they will provide #RBEntryView and #Rhyth… */
export interface RBSourceProps extends RBDisplayPageProps, GtkBuildableProps, GtkOrientableProps {
    /** Entry type for entries in this source. */
    'entry-type'?: RB.RhythmDBEntryType;
    /** If TRUE, the source will not be displayed in the source list when it contains no entries. */
    'hidden-when-empty'?: boolean;
    /** Indicates whether the source is not loaded, is currently loading data, or is fully loaded. */
    'load-status'?: RBSourceLoadStatusNick | RB.SourceLoadStatus;
    /** A GMenu instance to attach to the 'add to playlist' item in the edit menu. */
    'playlist-menu'?: Gio.MenuModel;
    /** The current query model for the source. */
    'query-model'?: RB.RhythmDBQueryModel;
    /** The #GSettings instance storing settings for the source. */
    settings?: Gio.Settings;
    /** Whether the browser widget for the source (if any) should be displayed. */
    'show-browser'?: boolean;
    /** A GMenu instance describing the contents of a toolbar to display at the top of the source. */
    'toolbar-menu'?: Gio.MenuModel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBSourceConstructOnly = RBDisplayPageConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'entry-type' | 'toolbar-menu';

/** This class combines a toolbar for custom source actions with a search entry. */
export interface RBSourceToolbarProps extends GtkGridProps, GtkBuildableProps, GtkOrientableProps {
    /** The #GtkAccelGroup to add accelerators to */
    'accel-group'?: Gtk.AccelGroup;
    /** The #RBDisplayPage the toolbar is associated with */
    page?: RB.DisplayPage;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBSourceToolbarConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'accel-group' | 'page';

/** Static playlists are not defined by a query, but instead by manually selected and ordered tracks. */
export interface RBStaticPlaylistSourceProps extends RBPlaylistSourceProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBStaticPlaylistSourceConstructOnly = RBPlaylistSourceConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** This class provides handling of buffering signals and streaming song metadata common to different types of sources that play continuous streaming media. */
export interface RBStreamingSourceProps extends RBSourceProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBStreamingSourceConstructOnly = RBSourceConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A simple dialog used to request a single URI from the user. */
export interface RBURIDialogProps extends GtkDialogProps, GtkBuildableProps {
    /** The label displayed in the dialog. */
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBURIDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | 'label';

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {
    RBAutoPlaylistSource: {
        class: RB.AutoPlaylistSource;
        props: RBAutoPlaylistSourceProps;
        signals: RB.AutoPlaylistSource.SignalSignatures;
        constructOnly: RBAutoPlaylistSourceConstructOnly;
        slotCandidates: {};
    };
    RBButtonBar: {
        class: RB.ButtonBar;
        props: RBButtonBarProps;
        signals: RB.ButtonBar.SignalSignatures;
        constructOnly: RBButtonBarConstructOnly;
        slotCandidates: {};
    };
    RBDisplayPageGroup: {
        class: RB.DisplayPageGroup;
        props: RBDisplayPageGroupProps;
        signals: RB.DisplayPageGroup.SignalSignatures;
        constructOnly: RBDisplayPageGroupConstructOnly;
        slotCandidates: {};
    };
    RBDisplayPageTree: {
        class: RB.DisplayPageTree;
        props: RBDisplayPageTreeProps;
        signals: RB.DisplayPageTree.SignalSignatures;
        constructOnly: RBDisplayPageTreeConstructOnly;
        slotCandidates: {};
    };
    RBEntryView: {
        class: RB.EntryView;
        props: RBEntryViewProps;
        signals: RB.EntryView.SignalSignatures;
        constructOnly: RBEntryViewConstructOnly;
        slotCandidates: {};
    };
    RBFadingImage: {
        class: RB.FadingImage;
        props: RBFadingImageProps;
        signals: RB.FadingImage.SignalSignatures;
        constructOnly: RBFadingImageConstructOnly;
        slotCandidates: {};
    };
    RBLibraryBrowser: {
        class: RB.LibraryBrowser;
        props: RBLibraryBrowserProps;
        signals: RB.LibraryBrowser.SignalSignatures;
        constructOnly: RBLibraryBrowserConstructOnly;
        slotCandidates: {};
    };
    RBMediaPlayerSource: {
        class: RB.MediaPlayerSource;
        props: RBMediaPlayerSourceProps;
        signals: RB.MediaPlayerSource.SignalSignatures;
        constructOnly: RBMediaPlayerSourceConstructOnly;
        slotCandidates: {};
    };
    RBPropertyView: {
        class: RB.PropertyView;
        props: RBPropertyViewProps;
        signals: RB.PropertyView.SignalSignatures;
        constructOnly: RBPropertyViewConstructOnly;
        slotCandidates: {};
    };
    RBRating: {
        class: RB.Rating;
        props: RBRatingProps;
        signals: RB.Rating.SignalSignatures;
        constructOnly: RBRatingConstructOnly;
        slotCandidates: {};
    };
    RBSearchEntry: {
        class: RB.SearchEntry;
        props: RBSearchEntryProps;
        signals: RB.SearchEntry.SignalSignatures;
        constructOnly: RBSearchEntryConstructOnly;
        slotCandidates: {};
    };
    RBSegmentedBar: {
        class: RB.SegmentedBar;
        props: RBSegmentedBarProps;
        signals: RB.SegmentedBar.SignalSignatures;
        constructOnly: RBSegmentedBarConstructOnly;
        slotCandidates: {};
    };
    RBShellPreferences: {
        class: RB.ShellPreferences;
        props: RBShellPreferencesProps;
        signals: RB.ShellPreferences.SignalSignatures;
        constructOnly: RBShellPreferencesConstructOnly;
        slotCandidates: {};
    };
    RBSongInfo: {
        class: RB.SongInfo;
        props: RBSongInfoProps;
        signals: RB.SongInfo.SignalSignatures;
        constructOnly: RBSongInfoConstructOnly;
        slotCandidates: {};
    };
    RBSourceToolbar: {
        class: RB.SourceToolbar;
        props: RBSourceToolbarProps;
        signals: RB.SourceToolbar.SignalSignatures;
        constructOnly: RBSourceToolbarConstructOnly;
        slotCandidates: {};
    };
    RBStaticPlaylistSource: {
        class: RB.StaticPlaylistSource;
        props: RBStaticPlaylistSourceProps;
        signals: RB.StaticPlaylistSource.SignalSignatures;
        constructOnly: RBStaticPlaylistSourceConstructOnly;
        slotCandidates: {};
    };
    RBStreamingSource: {
        class: RB.StreamingSource;
        props: RBStreamingSourceProps;
        signals: RB.StreamingSource.SignalSignatures;
        constructOnly: RBStreamingSourceConstructOnly;
        slotCandidates: {};
    };
    RBURIDialog: {
        class: RB.URIDialog;
        props: RBURIDialogProps;
        signals: RB.URIDialog.SignalSignatures;
        constructOnly: RBURIDialogConstructOnly;
        slotCandidates: {};
    };
}

/** Every GType this namespace can create. A consumer derives its own tag map. */
export type WidgetGType = keyof Widgets;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const SURFACE_PROVENANCE: string;

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> its own signals. */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> every declaration its members come from, self first. */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type.property` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a member the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 */
export const SINCE: Readonly<Record<string, string>>;
