/**
 * The GIR-derived widget VOCABULARY for Clapper-0.0.
 *
 * GENERATED — do not edit. Provenance: Clapper-0.0 — library 0.10.0
 *
 * 18 instantiable GTypes (of which 0 concrete widgets), 18 declarations, 7 enum nick unions, 0 slot candidates.
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

import type Clapper from './clapper-0.0.js';
import type Gst from '@girs/gst-1.0';
import type { GListModelConstructOnly, GListModelProps } from '@girs/gio-2.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { GstObjectConstructOnly, GstObjectProps } from '@girs/gst-1.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type ClapperDiscovererDiscoveryModeNick = 'always' | 'noncurrent';
export type ClapperMarkerTypeNick = 'unknown' | 'title' | 'chapter' | 'track' | 'custom-1' | 'custom-2' | 'custom-3';
export type ClapperPlayerMessageDestinationNick = 'player' | 'reactables' | 'application';
export type ClapperPlayerSeekMethodNick = 'accurate' | 'normal' | 'fast';
export type ClapperPlayerStateNick = 'stopped' | 'buffering' | 'paused' | 'playing';
export type ClapperQueueProgressionModeNick = 'none' | 'consecutive' | 'repeat-item' | 'carousel' | 'shuffle';
export type ClapperStreamTypeNick = 'unknown' | 'video' | 'audio' | 'subtitle';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Represents an audio stream within media. */
export interface ClapperAudioStreamProps extends ClapperStreamProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperAudioStreamConstructOnly = ClapperStreamConstructOnly;

/** An optional Discoverer feature to be added to the player. */
export interface ClapperDiscovererProps extends ClapperFeatureProps {
    /**
     * Discoverer discovery mode.
     * @default CLAPPER_DISCOVERER_DISCOVERY_NONCURRENT
     * @deprecated since 0.10: Use Media Scanner from `clapper-enhancers` repo instead.
     */
    'discovery-mode'?: ClapperDiscovererDiscoveryModeNick | Clapper.DiscovererDiscoveryMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperDiscovererConstructOnly = ClapperFeatureConstructOnly;

/** An intermediary between player and enhancer plugin. */
export interface ClapperEnhancerProxyProps extends GstObjectProps {
    /**
     * Whether to allow instances of proxy target to be created.
     * @since 0.10
     * @default FALSE
     */
    'target-creation-allowed'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperEnhancerProxyConstructOnly = GstObjectConstructOnly;

/** A list of enhancer proxies. */
export interface ClapperEnhancerProxyListProps extends GstObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperEnhancerProxyListConstructOnly = GstObjectConstructOnly | GListModelConstructOnly;

/** A base class for creating new features for the player. */
export interface ClapperFeatureProps extends GstObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperFeatureConstructOnly = GstObjectConstructOnly;

/** An object storing data from enhancers that implement [iface@Clapper.Extractable] interface. */
export interface ClapperHarvestProps extends GstObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperHarvestConstructOnly = GstObjectConstructOnly;

/** Represents a point in timeline. */
export interface ClapperMarkerProps extends GstObjectProps {
    /**
     * Ending time of marker.
     * @default -1.000000
     */
    end?: number;
    /**
     * Type of stream.
     * @default CLAPPER_MARKER_TYPE_UNKNOWN
     */
    'marker-type'?: ClapperMarkerTypeNick | Clapper.MarkerType;
    /**
     * Starting time of marker.
     * @default 0.000000
     */
    start?: number;
    /**
     * Title of marker.
     * @default NULL
     */
    title?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperMarkerConstructOnly = GstObjectConstructOnly | 'end' | 'marker-type' | 'start' | 'title';

/** Represents a media item. */
export interface ClapperMediaItemProps extends GstObjectProps {
    /**
     * Media downloaded cache file location.
     * @since 0.8
     * @default NULL
     */
    'cache-location'?: string | null;
    /**
     * Media additional URI.
     * @default NULL
     */
    suburi?: string | null;
    /**
     * Media URI.
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperMediaItemConstructOnly = GstObjectConstructOnly | 'cache-location' | 'uri';

/** An optional `MPRIS` feature to add to the player. */
export interface ClapperMprisProps extends ClapperFeatureProps {
    /**
     * The basename of an installed .desktop file with the ".desktop" extension stripped.
     * @default NULL
     * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
     */
    'desktop-entry'?: string;
    /**
     * Fallback artwork to show when media does not provide one.
     * @default NULL
     * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
     */
    'fallback-art-url'?: string | null;
    /**
     * A friendly name to identify the media player.
     * @default NULL
     * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
     */
    identity?: string;
    /**
     * DBus name to own on connection.
     * @default NULL
     * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
     */
    'own-name'?: string;
    /**
     * Whether remote MPRIS clients can control #ClapperQueue.
     * @default FALSE
     * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
     */
    'queue-controllable'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperMprisConstructOnly = ClapperFeatureConstructOnly | 'desktop-entry' | 'identity' | 'own-name';

/** The media player object used for playback. */
export interface ClapperPlayerProps extends ClapperThreadedObjectProps {
    /**
     * A maximal allowed bitrate (bits/s) during adaptive streaming such as DASH or HLS (`0` for unlimited).
     * @since 0.8
     * @default 0
     */
    'adaptive-max-bitrate'?: number;
    /**
     * A minimal allowed bitrate (bits/s) during adaptive streaming such as DASH or HLS.
     * @since 0.8
     * @default 0
     */
    'adaptive-min-bitrate'?: number;
    /**
     * An initial bitrate (bits/s) to select during starting adaptive streaming such as DASH or HLS.
     * @since 0.8
     * @default 1600000
     */
    'adaptive-start-bitrate'?: number;
    /**
     * Whether audio stream is enabled.
     * @default TRUE
     */
    'audio-enabled'?: boolean;
    /** Optional audio filter to use (none by default). */
    'audio-filter'?: Gst.Element;
    /**
     * Audio stream offset relative to video.
     * @default 0.000000
     */
    'audio-offset'?: number;
    /** Audio sink to use (autoaudiosink by default). */
    'audio-sink'?: Gst.Element;
    /**
     * Always try to start playback after media item changes.
     * @default FALSE
     */
    autoplay?: boolean;
    /**
     * A directory that @player will use to download network content when [property@Clapper.Player:download-enabled] is set to %TRUE.
     * @since 0.8
     * @default NULL
     */
    'download-dir'?: string | null;
    /**
     * Whether progressive download buffering is enabled.
     * @since 0.8
     * @default FALSE
     */
    'download-enabled'?: boolean;
    /**
     * Mute audio without changing volume.
     * @default FALSE
     */
    mute?: boolean;
    /**
     * Current playback speed.
     * @default 1.000000
     */
    speed?: number;
    /**
     * Subtitle stream font description.
     * @default NULL
     */
    'subtitle-font-desc'?: string;
    /**
     * Subtitle stream offset relative to video.
     * @default 0.000000
     */
    'subtitle-offset'?: number;
    /**
     * Whether subtitles stream is enabled.
     * @default TRUE
     */
    'subtitles-enabled'?: boolean;
    /**
     * Whether video stream is enabled.
     * @default TRUE
     */
    'video-enabled'?: boolean;
    /** Optional video filter to use (none by default). */
    'video-filter'?: Gst.Element;
    /** Video sink to use (autovideosink by default). */
    'video-sink'?: Gst.Element;
    /**
     * Current volume as a decimal number (1.0 = 100%).
     * @default 1.000000
     */
    volume?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperPlayerConstructOnly = ClapperThreadedObjectConstructOnly;

/** A queue of media to be played. */
export interface ClapperQueueProps extends GstObjectProps, GListModelProps {
    /**
     * Index of currently selected media item for playback.
     * @default 4294967295
     */
    'current-index'?: number;
    /**
     * Use gapless progression.
     * @default FALSE
     */
    gapless?: boolean;
    /**
     * Use instant media item changes.
     * @default FALSE
     */
    instant?: boolean;
    /**
     * Queue progression mode.
     * @default CLAPPER_QUEUE_PROGRESSION_NONE
     */
    'progression-mode'?: ClapperQueueProgressionModeNick | Clapper.QueueProgressionMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperQueueConstructOnly = GstObjectConstructOnly | GListModelConstructOnly;

/** An optional Server feature to add to the player. */
export interface ClapperServerProps extends ClapperFeatureProps {
    /**
     * Whether server is enabled.
     * @default FALSE
     * @deprecated since 0.10: Use Control Hub from `clapper-enhancers` repo instead.
     */
    enabled?: boolean;
    /**
     * Port to listen on or 0 for using random unused port.
     * @default 0
     * @deprecated since 0.10: Use Control Hub from `clapper-enhancers` repo instead.
     */
    port?: number;
    /**
     * Whether remote server clients can control #ClapperQueue.
     * @default FALSE
     * @deprecated since 0.10: Use Control Hub from `clapper-enhancers` repo instead.
     */
    'queue-controllable'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperServerConstructOnly = ClapperFeatureConstructOnly;

/** Represents a stream within media. */
export interface ClapperStreamProps extends GstObjectProps {
    /**
     * Type of stream.
     * @default CLAPPER_STREAM_TYPE_UNKNOWN
     */
    'stream-type'?: ClapperStreamTypeNick | Clapper.StreamType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperStreamConstructOnly = GstObjectConstructOnly | 'stream-type';

/** A list of media streams. */
export interface ClapperStreamListProps extends GstObjectProps, GListModelProps {
    /**
     * Index of currently selected stream.
     * @default 4294967295
     */
    'current-index'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperStreamListConstructOnly = GstObjectConstructOnly | GListModelConstructOnly;

/** Represents a subtitle stream within media. */
export interface ClapperSubtitleStreamProps extends ClapperStreamProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperSubtitleStreamConstructOnly = ClapperStreamConstructOnly;

/** A base class for creating objects that work within a separate thread. */
export interface ClapperThreadedObjectProps extends GstObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperThreadedObjectConstructOnly = GstObjectConstructOnly;

/** A media timeline filled with point markers. */
export interface ClapperTimelineProps extends GstObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperTimelineConstructOnly = GstObjectConstructOnly | GListModelConstructOnly;

/** Represents a video stream within media. */
export interface ClapperVideoStreamProps extends ClapperStreamProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperVideoStreamConstructOnly = ClapperStreamConstructOnly;

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
