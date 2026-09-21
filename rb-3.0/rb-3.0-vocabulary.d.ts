/**
 * The GIR-derived widget VOCABULARY for RB-3.0.
 *
 * GENERATED — do not edit. Provenance: RB-3.0 — dropped empty base(s): Atk.ImplementorIface — prop(s) no TypeScript value satisfies: RB.RhythmDBQueryModel.query RB.RhythmDBQueryModel.sort-data RB.RhythmDBQueryModel.sort-data-destroy RB.RhythmDBQueryModel.sort-func
 *
 * 50 instantiable GTypes (of which 18 concrete widgets), 56 declarations, 20 enum nick unions, 0 slot candidates.
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

import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gio from '@girs/gio-2.0';
import type GstPbutils from '@girs/gstpbutils-1.0';
import type Gtk from '@girs/gtk-3.0';
import type RB from './rb-3.0.js';
import type { GActionGroupConstructOnly, GActionGroupProps, GActionMapConstructOnly, GActionMapProps, GApplicationConstructOnly, GApplicationProps } from '@girs/gio-2.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { GtkApplicationConstructOnly, GtkApplicationProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkCellRendererConstructOnly, GtkCellRendererPixbufConstructOnly, GtkCellRendererPixbufProps, GtkCellRendererProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkGridConstructOnly, GtkGridProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkScrolledWindowConstructOnly, GtkScrolledWindowProps, GtkTreeDragSourceConstructOnly, GtkTreeDragSourceProps, GtkTreeModelConstructOnly, GtkTreeModelFilterConstructOnly, GtkTreeModelFilterProps, GtkTreeModelProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/vocabulary';

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
export type RBMetadataFieldTypeNick = 'title' | 'artist' | 'album' | 'date' | 'genre' | 'comment' | 'track-number' | 'track-count' | 'album-disc-number' | 'album-disc-count' | 'description' | 'version' | 'isrc' | 'organization' | 'copyright' | 'contact' | 'license' | 'performer' | 'duration' | 'codec' | 'bitrate' | 'replaygain-track-gain' | 'replaygain-track-peak' | 'replaygain-album-gain' | 'replaygain-album-peak' | 'beats-per-minute' | 'language-code' | 'musicbrainz-trackid' | 'musicbrainz-artistid' | 'musicbrainz-albumid' | 'musicbrainz-albumartistid' | 'musicbrainz-sortname' | 'album-sortname' | 'title-sortname' | 'album-artist' | 'album-artist-sortname' | 'composer' | 'composer-sortname';
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
export type RhythmDBPropTypeNick = 'type' | 'entry-id' | 'title' | 'genre' | 'artist' | 'album' | 'track-number' | 'track-total' | 'disc-number' | 'disc-total' | 'duration' | 'file-size' | 'location' | 'mountpoint' | 'mtime' | 'first-seen' | 'last-seen' | 'rating' | 'play-count' | 'last-played' | 'bitrate' | 'date' | 'replaygain-track-gain' | 'replaygain-track-peak' | 'replaygain-album-gain' | 'replaygain-album-peak' | 'media-type' | 'title-sort-key' | 'genre-sort-key' | 'artist-sort-key' | 'album-sort-key' | 'title-folded' | 'genre-folded' | 'artist-folded' | 'album-folded' | 'last-played-str' | 'hidden' | 'playback-error' | 'first-seen-str' | 'last-seen-str' | 'search-match' | 'year' | 'keyword' | 'status' | 'description' | 'subtitle' | 'summary' | 'lang' | 'copyright' | 'image' | 'post-time' | 'podcast-guid' | 'mb-trackid' | 'mb-artistid' | 'mb-albumid' | 'mb-albumartistid' | 'mb-artistsortname' | 'album-sortname' | 'artist-sortname-sort-key' | 'artist-sortname-folded' | 'album-sortname-sort-key' | 'album-sortname-folded' | 'comment' | 'album-artist' | 'album-artist-sort-key' | 'album-artist-folded' | 'album-artist-sortname' | 'album-artist-sortname-sort-key' | 'album-artist-sortname-folded' | 'beats-per-minute' | 'composer' | 'composer-sort-key' | 'composer-folded' | 'composer-sortname' | 'composer-sortname-sort-key' | 'composer-sortname-folded' | 'title-sortname' | 'title-sortname-sort-key' | 'title-sortname-folded';
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

/** RBApplication contains some interactions with the desktop environment, such as the app menu and processing of files specified on the command line. */
export interface RBApplicationProps extends GtkApplicationProps, GActionGroupProps, GActionMapProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBApplicationConstructOnly = GtkApplicationConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly;

export interface RBAsyncCopyProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBAsyncCopyConstructOnly = GObjectConstructOnly;

/** A playlist populated with the results of a database query. */
export interface RBAutoPlaylistSourceProps extends RBPlaylistSourceProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBAutoPlaylistSourceConstructOnly = RBPlaylistSourceConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** This class simplifies implementation of sources that include genre/artist/album browsers. */
export interface RBBrowserSourceProps extends RBSourceProps, GtkBuildableProps, GtkOrientableProps {
    /** @default TRUE */
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

/** This is similar to #GtkCellRendererPixbuf, except that it also emits a signal when the pixbuf is clicked on, and it can only use pixbuf objects. */
export interface RBCellRendererPixbufProps extends GtkCellRendererPixbufProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBCellRendererPixbufConstructOnly = GtkCellRendererPixbufConstructOnly;

/** This cell renderer is used to display song ratings in the #RBEntryView, and allows the user to modify ratings directly in the track listing. */
export interface RBCellRendererRatingProps extends GtkCellRendererProps {
    /**
     * The rating displayed by the renderer, as a floating point value between 0.0 and 5.0.
     * @default 2.500000
     */
    rating?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBCellRendererRatingConstructOnly = GtkCellRendererConstructOnly;

export interface RBChunkLoaderProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBChunkLoaderConstructOnly = GObjectConstructOnly;

/** This is the base class for items that appear in the display page tree and can occupy the main display area. */
export interface RBDisplayPageProps extends Omit<GtkBoxProps, 'parent'>, GtkBuildableProps, GtkOrientableProps {
    /** Icon to display in the page tree */
    icon?: Gio.Icon;
    /**
     * Page name as displayed in the tree
     * @default NULL
     */
    name?: string;
    /** The parent page in the tree (may be NULL) */
    parent?: RB.DisplayPage;
    /** The plugin that created this page. */
    plugin?: GObject.Object;
    /** The rhythmbox shell object */
    shell?: RB.Shell;
    /**
     * If FALSE, the page will not be displayed in the tree
     * @default TRUE
     */
    visibility?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBDisplayPageConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'parent' | 'shell';

/** Page groups define sections of the display page tree. */
export interface RBDisplayPageGroupProps extends RBDisplayPageProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Page group category that the group falls into
     * @default RB_DISPLAY_PAGE_GROUP_CATEGORY_FIXED
     */
    category?: RBDisplayPageGroupTypeNick | RB.DisplayPageGroupType;
    /**
     * Internal (untranslated) name for the page group
     * @default NULL
     */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBDisplayPageGroupConstructOnly = RBDisplayPageConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'category' | 'id';

/** The #RBDisplayPageTree widget is backed by a #GtkTreeStore containing the sources and a set of attributes used to structure and display them, and a #GtkTreeModelFilter that hides sources with the vis… */
export interface RBDisplayPageModelProps extends GtkTreeModelFilterProps, GtkTreeDragSourceProps, GtkTreeModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBDisplayPageModelConstructOnly = GtkTreeModelFilterConstructOnly | GtkTreeDragSourceConstructOnly | GtkTreeModelConstructOnly;

/** The display page tree widget is a GtkTreeView backed by a GtkListStore containing the display page instances (sources and other things). */
export interface RBDisplayPageTreeProps extends GtkGridProps, GtkBuildableProps, GtkOrientableProps {
    /** The #RBShell instance */
    shell?: RB.Shell;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBDisplayPageTreeConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'shell';

export interface RBEncoderFactoryProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBEncoderFactoryConstructOnly = GObjectConstructOnly;

/** This class provides a predefined set of columns for displaying the common set of #RhythmDBEntry properties, but also allows custom columns to be appended. */
export interface RBEntryViewProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** #RhythmDB instance */
    db?: RB.RhythmDB;
    /**
     * If TRUE, the view acts as a destination for drag and drop operations.
     * @default FALSE
     */
    'is-drag-dest'?: boolean;
    /**
     * If TRUE, the view acts as a data source for drag and drop operations.
     * @default FALSE
     */
    'is-drag-source'?: boolean;
    /** The #RhythmDBQueryModel backing the view */
    model?: RB.RhythmDBQueryModel;
    /**
     * Determines the icon to show in the 'playing' column next to the current playing entry.
     * @default 0
     */
    'playing-state'?: number;
    /** #RBShellPlayer instance */
    'shell-player'?: RB.ShellPlayer;
    /**
     * The sort order for the track listing.
     * @default NULL
     */
    'sort-order'?: string;
    /** An array containing the names of the visible columns. */
    'visible-columns'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBEntryViewConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'db' | 'is-drag-dest' | 'is-drag-source' | 'shell-player';

/** This class simplifies searching for and providing external metadata such as album art or lyrics. */
export interface RBExtDBProps extends GObjectProps {
    /**
     * Name of the metadata store.
     * @default NULL
     */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBExtDBConstructOnly = GObjectConstructOnly | 'name';

/** This widget displays images, performing a simple fade transition between them. */
export interface RBFadingImageProps extends GtkWidgetProps, GtkBuildableProps {
    /**
     * Name of an icon to display when no image is available.
     * @default NULL
     */
    fallback?: string;
    /**
     * Whether to display a tooltip on the image
     * @default TRUE
     */
    'use-tooltip'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBFadingImageConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | 'fallback' | 'use-tooltip';

/** RBHistory is a GSequence that maintains a "current" pointer and can delete an arbitrary element in amortized O(log(N)) time. */
export interface RBHistoryProps extends GObjectProps {
    /**
     * Maximum number of entries to store in the history.
     * @default 0
     */
    'maximum-size'?: number;
    /**
     * If set, rb_history_set_playing() truncates the rest of the history
     * @default FALSE
     */
    'truncate-on-play'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBHistoryConstructOnly = GObjectConstructOnly;

/** This widget contains a set of #RBPropertyView<!-- -->s backed by #RhythmDBPropertyModel<!-- -->s and constructs a chain of #RhythmDBQueryModel<!-- -->s to perform filtering of the entries in a source. */
export interface RBLibraryBrowserProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The set of browsers to display.
     * @default artists-albums
     */
    'browser-views'?: string;
    /** #RhythmDB instance */
    db?: RB.RhythmDB;
    /** The type of entries to use in the browser. */
    'entry-type'?: RB.RhythmDBEntryType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBLibraryBrowserConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'db' | 'entry-type';

/** Stores a list of items and emits notification signals on changes. */
export interface RBListModelProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBListModelConstructOnly = GObjectConstructOnly;

export interface RBMediaPlayerEntryTypeProps extends RhythmDBEntryTypeProps {
    /** @default NULL */
    'key-prefix'?: string;
    /** @default NULL */
    'uri-prefix'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBMediaPlayerEntryTypeConstructOnly = RhythmDBEntryTypeConstructOnly | 'key-prefix' | 'uri-prefix';

export interface RBMediaPlayerSourceProps extends RBBrowserSourceProps, GtkBuildableProps, GtkOrientableProps {
    /** The #GSettings instance holding encoding settings for this device */
    'encoding-settings'?: Gio.Settings;
    /** The #GstEncodingTarget for this device */
    'encoding-target'?: GstPbutils.EncodingTarget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBMediaPlayerSourceConstructOnly = RBBrowserSourceConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** Provides a simple synchronous interface for metadata extraction and updating. */
export interface RBMetaDataProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBMetaDataConstructOnly = GObjectConstructOnly;

/** A play order defines an ordering of the entries from a #RhythmDBQueryModel that the #RBShellPlayer uses to get the next or previous entry to play. */
export interface RBPlayOrderProps extends GObjectProps {
    /** The #RBShellPlayer instance */
    player?: RB.ShellPlayer;
    /** The current playing #RhythmDBEntry */
    'playing-entry'?: RB.RhythmDBEntry;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBPlayOrderConstructOnly = GObjectConstructOnly | 'player';

/** The playlist manager loads and saves the on-disk playlist file, provides UI actions and a DBus interface for dealing with playlists, and internal interfaces for creating playlists. */
export interface RBPlaylistManagerProps extends GObjectProps {
    /** @default NULL */
    'playlists-file'?: string;
    shell?: RB.Shell;
    source?: RB.Source;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBPlaylistManagerConstructOnly = GObjectConstructOnly;

/** This class provides some common infrastructure for playlist sources. */
export interface RBPlaylistSourceProps extends RBSourceProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Whether the playlist is attached to the local library.
     * @default TRUE
     */
    'is-local'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBPlaylistSourceConstructOnly = RBSourceConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'is-local';

export interface RBPodcastManagerProps extends GObjectProps {
    shell?: RB.Shell;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBPodcastManagerConstructOnly = GObjectConstructOnly | 'shell';

export interface RBPodcastSearchProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBPodcastSearchConstructOnly = GObjectConstructOnly;

export interface RBPodcastSearchITunesProps extends RBPodcastSearchProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBPodcastSearchITunesConstructOnly = RBPodcastSearchConstructOnly;

/** A simple #GtkTreeView that displays the contents of a #RhythmDBPropertyModel. */
export interface RBPropertyViewProps extends GtkScrolledWindowProps, GtkBuildableProps {
    /** #RhythmDB instance */
    db?: RB.RhythmDB;
    /**
     * Whether the property view acts as a data source for drag and drop operations.
     * @default TRUE
     */
    draggable?: boolean;
    /**
     * The property that is displayed in this view
     * @default RHYTHMDB_PROP_TYPE
     */
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
    /**
     * The rating displayed in the widget, as a floating point value between 0.0 and 5.0.
     * @default 2.500000
     */
    rating?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBRatingConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** The removable media manager maintains the mapping between GIO GVolume and GMount objects and rhythmbox sources. */
export interface RBRemovableMediaManagerProps extends GObjectProps {
    /** The #RBShell instance. */
    shell?: RB.Shell;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBRemovableMediaManagerConstructOnly = GObjectConstructOnly | 'shell';

/** The search entry contains a label and a text entry box. */
export interface RBSearchEntryProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * If TRUE, show a button and only emit the 'search' signal when the user presses it rather than when they stop typing.
     * @default FALSE
     */
    'explicit-mode'?: boolean;
    /**
     * If TRUE, show a primary icon and emit the show-popup when clicked.
     * @default FALSE
     */
    'has-popup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBSearchEntryConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'has-popup';

export interface RBSegmentedBarProps extends GtkWidgetProps, GtkBuildableProps {
    /**
     * Height of the segmented bar
     * @default 26
     */
    'bar-height'?: number;
    /**
     * Set to TRUE if you want labels describing the various segments to be shown.
     * @default TRUE
     */
    'show-labels'?: boolean;
    /**
     * Set to TRUE if you want a reflection to be shown below the segmented bar.
     * @default TRUE
     */
    'show-reflection'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBSegmentedBarConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** RBShell is the main application class in Rhythmbox. */
export interface RBShellProps extends GObjectProps {
    application?: RB.Application;
    /**
     * Whether Rhythmbox was automatically started by the session manager
     * @default FALSE
     */
    autostarted?: boolean;
    /**
     * If %TRUE, disable plugins
     * @default FALSE
     */
    'disable-plugins'?: boolean;
    /**
     * If TRUE, don't write back file metadata changes.
     * @default FALSE
     */
    'dry-run'?: boolean;
    /**
     * If %TRUE, disable single-instance features.
     * @default FALSE
     */
    'no-registration'?: boolean;
    /**
     * If %TRUE, don't update the database.
     * @default FALSE
     */
    'no-update'?: boolean;
    /**
     * The path to the playlist file
     * @default playlists.xml
     */
    'playlists-file'?: string;
    /**
     * The path to the rhythmdb file
     * @default rhythmdb.xml
     */
    'rhythmdb-file'?: string;
    /**
     * Whether the main window is currently visible.
     * @default TRUE
     */
    visibility?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBShellConstructOnly = GObjectConstructOnly | 'application' | 'autostarted' | 'disable-plugins' | 'dry-run' | 'no-registration' | 'no-update' | 'playlists-file' | 'rhythmdb-file';

/** The shell player (or player shell, depending on who you're talking to) manages the #RBPlayer instance, tracks the current playing #RhythmDBEntry, and manages the various #RBPlayOrder instances. */
export interface RBShellPlayerProps extends GObjectProps {
    /** The #RhythmDB */
    db?: RB.RhythmDB;
    /**
     * Whether playback is currently muted.
     * @default FALSE
     */
    mute?: boolean;
    /**
     * If %TRUE, activating an entry should only add it to the play queue.
     * @default FALSE
     */
    'queue-only'?: boolean;
    /** The play queue source */
    'queue-source'?: RB.PlaylistSource;
    /** The current source that is selected for playback. */
    source?: RB.Source;
    /**
     * The current playback volume (between 0.0 and 1.0)
     * @default 1.000000
     */
    volume?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBShellPlayerConstructOnly = GObjectConstructOnly | 'db';

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
    /**
     * If TRUE, the source will not be displayed in the source list when it contains no entries.
     * @default FALSE
     */
    'hidden-when-empty'?: boolean;
    /**
     * Indicates whether the source is not loaded, is currently loading data, or is fully loaded.
     * @default RB_SOURCE_LOAD_STATUS_LOADED
     */
    'load-status'?: RBSourceLoadStatusNick | RB.SourceLoadStatus;
    /** A GMenu instance to attach to the 'add to playlist' item in the edit menu. */
    'playlist-menu'?: Gio.MenuModel;
    /** The current query model for the source. */
    'query-model'?: RB.RhythmDBQueryModel;
    /** The #GSettings instance storing settings for the source. */
    settings?: Gio.Settings;
    /**
     * Whether the browser widget for the source (if any) should be displayed.
     * @default TRUE
     */
    'show-browser'?: boolean;
    /** A GMenu instance describing the contents of a toolbar to display at the top of the source. */
    'toolbar-menu'?: Gio.MenuModel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBSourceConstructOnly = RBDisplayPageConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'entry-type' | 'toolbar-menu';

/** These translate the text in the search entry box into a RhythmDBQuery. */
export interface RBSourceSearchProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBSourceSearchConstructOnly = GObjectConstructOnly;

/** This implementation of #RBSourceSearch constructs queries that search on a single #RhythmDBEntry property. */
export interface RBSourceSearchBasicProps extends RBSourceSearchProps {
    /** @default NULL */
    description?: string;
    /** @default 0 */
    prop?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBSourceSearchBasicConstructOnly = RBSourceSearchConstructOnly | 'description' | 'prop';

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

/** Simplifies the use of string:GValue maps with respect to copying of the values inserted into the map. */
export interface RBStringValueMapProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBStringValueMapConstructOnly = GObjectConstructOnly;

export interface RBTaskListProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBTaskListConstructOnly = GObjectConstructOnly;

export interface RBTaskProgressProps extends GObjectProps {
    /** @default FALSE */
    'task-cancellable'?: boolean;
    /** @default NULL */
    'task-detail'?: string;
    /** @default NULL */
    'task-label'?: string;
    /** @default NULL */
    'task-notification'?: string;
    /** @default NULL */
    'task-notification-body'?: string;
    /** @default RB_TASK_OUTCOME_NONE */
    'task-outcome'?: RBTaskOutcomeNick | RB.TaskOutcome;
    /** @default 0.000000 */
    'task-progress'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBTaskProgressConstructOnly = GObjectConstructOnly;

/** This implementation of #RBTaskProgress can be used to represent tasks that aren't bound to the lifecycle of an object that can implement the interface directly. */
export interface RBTaskProgressSimpleProps extends GObjectProps, RBTaskProgressProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBTaskProgressSimpleConstructOnly = GObjectConstructOnly | RBTaskProgressConstructOnly;

/** Manages the transfer of a set of tracks (using #RBEncoder), providing overall status information and allowing the transfer to be cancelled as a single unit. */
export interface RBTrackTransferBatchProps extends GObjectProps, RBTaskProgressProps {
    /** The RBSource to which the tracks are being transferred. */
    destination?: RB.Source;
    /** A GstEncodingTarget describing allowable target formats. */
    'encoding-target'?: GstPbutils.EncodingTarget;
    /** The #RBTrackTransferQueue instance */
    queue?: RB.TrackTransferQueue;
    /** GSettings instance holding profile preferences */
    settings?: Gio.Settings;
    /** The RBSource from which the tracks are being transferred. */
    source?: RB.Source;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBTrackTransferBatchConstructOnly = GObjectConstructOnly | RBTaskProgressConstructOnly | 'destination' | 'queue' | 'settings' | 'source';

export interface RBTrackTransferQueueProps extends GObjectProps {
    /** The #RBShell */
    shell?: RB.Shell;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBTrackTransferQueueConstructOnly = GObjectConstructOnly | 'shell';

/** A simple dialog used to request a single URI from the user. */
export interface RBURIDialogProps extends GtkDialogProps, GtkBuildableProps {
    /** The label displayed in the dialog. */
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RBURIDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | 'label';

/** This is the base class for database entry type classes, which provide some aspects of the behaviour of database entry types. */
export interface RhythmDBEntryTypeProps extends GObjectProps {
    /**
     * Metadata cache name.
     * @default NULL
     */
    'cache-name'?: string;
    /**
     * The #RhythmDBEntryCategory that this entry type fits into.
     * @default RHYTHMDB_ENTRY_NORMAL
     */
    category?: RhythmDBEntryCategoryNick | RB.RhythmDBEntryCategory;
    /** The #RhythmDB instance. */
    db?: RB.RhythmDB;
    /**
     * Entry type name.
     * @default NULL
     */
    name?: string;
    /**
     * If %TRUE, entries of this type should be written to the on-disk database.
     * @default FALSE
     */
    'save-to-disk'?: boolean;
    /**
     * The size of the type-specific data structure to allocate for each entry of this type.
     * @default 0
     */
    'type-data-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RhythmDBEntryTypeConstructOnly = GObjectConstructOnly | 'cache-name' | 'category' | 'db' | 'name' | 'save-to-disk' | 'type-data-size';

/** Tracks the addition to the database of files under a set of directories, providing status information. */
export interface RhythmDBImportJobProps extends GObjectProps, RBTaskProgressProps {
    db?: RB.RhythmDB;
    'entry-type'?: RB.RhythmDBEntryType;
    'error-type'?: RB.RhythmDBEntryType;
    'ignore-type'?: RB.RhythmDBEntryType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RhythmDBImportJobConstructOnly = GObjectConstructOnly | RBTaskProgressConstructOnly | 'db' | 'entry-type' | 'error-type' | 'ignore-type';

/** A RhythmDBPropertyModel groups the entries in a #RhythmDBQueryModel by the value of a property. */
export interface RhythmDBPropertyModelProps extends GObjectProps, GtkTreeModelProps {
    /** The #RhythmDB object the model is associated with. */
    db?: RB.RhythmDB;
    /**
     * The property that this property model indexes.
     * @default 0
     */
    prop?: number;
    /** The query model that this property model indexes. */
    'query-model'?: RB.RhythmDBQueryModel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RhythmDBPropertyModelConstructOnly = GObjectConstructOnly | GtkTreeModelConstructOnly | 'db' | 'prop';

/** A RhythmDBQueryModel contains an ordered set of #RhythmDBEntry items, either generated by running a query against the database, or populated by adding individual entries. */
export interface RhythmDBQueryModelProps extends GObjectProps, GtkTreeModelProps, RhythmDBQueryResultsProps {
    'base-model'?: RB.RhythmDBQueryModel;
    db?: RB.RhythmDB;
    /** @default RHYTHMDB_QUERY_MODEL_LIMIT_NONE */
    'limit-type'?: RhythmDBQueryModelLimitTypeNick | RB.RhythmDBQueryModelLimitType;
    'limit-value'?: GLib.Variant;
    query?: never;
    /** @default FALSE */
    'show-hidden'?: boolean;
    'sort-data'?: never;
    'sort-data-destroy'?: never;
    'sort-func'?: never;
    /** @default FALSE */
    'sort-reverse'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RhythmDBQueryModelConstructOnly = GObjectConstructOnly | GtkTreeModelConstructOnly | RhythmDBQueryResultsConstructOnly | 'db' | 'limit-type' | 'limit-value';

export interface RhythmDBQueryResultListProps extends GObjectProps, RhythmDBQueryResultsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RhythmDBQueryResultListConstructOnly = GObjectConstructOnly | RhythmDBQueryResultsConstructOnly;

/** This is the interface that #RhythmDB uses to report results of database queries. */
export interface RhythmDBQueryResultsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type RhythmDBQueryResultsConstructOnly = GObjectConstructOnly;

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

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

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
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's own type.
 *
 * `PROP_ENUMS` one case wider, and separate on purpose: that table promises the GType it names
 * has NUMBERS, and this one promises only that the GType is the property's. A host inferring a
 * type from a property — the middle of an uncast lookup chain, an uncast closure's return type —
 * reads this one; a host resolving a nick to a number reads that one.
 *
 * Absent means no GType can be stated, not that the property is scalar: `gchararray` is carried
 * like any other, so absence is readable as "unknown".
 */
export const PROP_TYPES: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
