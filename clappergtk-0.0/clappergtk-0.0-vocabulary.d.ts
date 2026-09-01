/**
 * The GIR-derived widget VOCABULARY for ClapperGtk-0.0.
 *
 * GENERATED — do not edit. Provenance: ClapperGtk-0.0 — library 0.10.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
 *
 * 15 concrete widgets, 15 declarations, 1 enum nick unions, 4 slot candidates.
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

import type Clapper from '@girs/clapper-0.0';
import type ClapperGtk from './clappergtk-0.0.js';
import type Gtk from '@girs/gtk-4.0';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkActionableConstructOnly, GtkActionableProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkWidgetConstructOnly, GtkWidgetProps } from '@girs/gtk-4.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type ClapperPlayerSeekMethodNick = 'accurate' | 'normal' | 'fast';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** A GTK widget for audio playback with Clapper API. */
export interface ClapperGtkAudioProps extends ClapperGtkAvProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget of `ClapperGtkAudio`. */
    child?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkAudioConstructOnly = ClapperGtkAvConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A base class for GTK audio and video widgets. */
export interface ClapperGtkAvProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Try to automatically inhibit session when media is playing.
     * @default FALSE
     */
    'auto-inhibit'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkAvConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A layer where various messages can be displayed. */
export interface ClapperGtkBillboardProps extends ClapperGtkContainerProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkBillboardConstructOnly = ClapperGtkContainerConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A simple container widget that holds just one child. */
export interface ClapperGtkContainerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Adaptive height threshold that triggers [signal@ClapperGtk.Container::adapt] signal.
     * @default -1
     */
    'adaptive-height'?: number;
    /**
     * Adaptive width threshold that triggers [signal@ClapperGtk.Container::adapt] signal.
     * @default -1
     */
    'adaptive-width'?: number;
    /**
     * Height that container should target.
     * @default -1
     */
    'height-target'?: number;
    /**
     * Width that container should target.
     * @default -1
     */
    'width-target'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkContainerConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A menu button with extra options. */
export interface ClapperGtkExtraMenuButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Visibility of open subtitles option inside popover.
     * @default FALSE
     */
    'can-open-subtitles'?: boolean;
    /**
     * Visibility of speed control inside popover.
     * @default TRUE
     */
    'speed-visible'?: boolean;
    /**
     * Visibility of volume control inside popover.
     * @default TRUE
     */
    'volume-visible'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkExtraMenuButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A #ClapperGtkContainer that can take priority in user interactions with the #ClapperGtkVideo. */
export interface ClapperGtkLeadContainerProps extends ClapperGtkContainerProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Mask of actions that container blocks from being triggered on video.
     * @default CLAPPER_GTK_VIDEO_ACTION_NONE
     */
    'blocked-actions'?: number;
    /**
     * Width that container should target.
     * @default TRUE
     */
    leading?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkLeadContainerConstructOnly = ClapperGtkContainerConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A #GtkButton for selecting next queue item. */
export interface ClapperGtkNextItemButtonProps extends GtkButtonProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkNextItemButtonConstructOnly = GtkButtonConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A #GtkButton for selecting previous queue item. */
export interface ClapperGtkPreviousItemButtonProps extends GtkButtonProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkPreviousItemButtonConstructOnly = GtkButtonConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A bar for seeking and displaying playback position. */
export interface ClapperGtkSeekBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Reveal state of the position and duration labels.
     * @default TRUE
     */
    'reveal-labels'?: boolean;
    /**
     * Method used for seeking.
     * @default CLAPPER_PLAYER_SEEK_METHOD_NORMAL
     */
    'seek-method'?: ClapperPlayerSeekMethodNick | Clapper.PlayerSeekMethod;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkSeekBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A minimalistic playback controls panel widget. */
export interface ClapperGtkSimpleControlsProps extends ClapperGtkContainerProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether toggle fullscreen button should be visible.
     * @default TRUE
     */
    fullscreenable?: boolean;
    /**
     * Method used for seeking.
     * @default CLAPPER_PLAYER_SEEK_METHOD_NORMAL
     */
    'seek-method'?: ClapperPlayerSeekMethodNick | Clapper.PlayerSeekMethod;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkSimpleControlsConstructOnly = ClapperGtkContainerConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A header panel widget that displays current media title. */
export interface ClapperGtkTitleHeaderProps extends ClapperGtkLeadContainerProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * When title cannot be determined, show URI instead.
     * @default FALSE
     */
    'fallback-to-uri'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkTitleHeaderConstructOnly = ClapperGtkLeadContainerConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A label showing an up to date title of media item. */
export interface ClapperGtkTitleLabelProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * When title cannot be determined, show URI instead.
     * @default FALSE
     */
    'fallback-to-uri'?: boolean;
    /** Currently set media item to display title of. */
    'media-item'?: Clapper.MediaItem | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkTitleLabelConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A #GtkButton for toggling fullscreen state. */
export interface ClapperGtkToggleFullscreenButtonProps extends GtkButtonProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkToggleFullscreenButtonConstructOnly = GtkButtonConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A #GtkButton for toggling play/pause of playback. */
export interface ClapperGtkTogglePlayButtonProps extends GtkButtonProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkTogglePlayButtonConstructOnly = GtkButtonConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A ready to be used GTK video widget implementing Clapper API. */
export interface ClapperGtkVideoProps extends ClapperGtkAvProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * A delay in milliseconds before trying to fade all fading overlays.
     * @default 3000
     */
    'fade-delay'?: number;
    /**
     * A delay in milliseconds before trying to fade all fading overlays after revealed using touchscreen.
     * @default 5000
     */
    'touch-fade-delay'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClapperGtkVideoConstructOnly = ClapperGtkAvConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

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
    ClapperGtkAudio: {
        class: ClapperGtk.Audio;
        props: ClapperGtkAudioProps;
        signals: ClapperGtk.Audio.SignalSignatures;
        constructOnly: ClapperGtkAudioConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    ClapperGtkAv: {
        class: ClapperGtk.Av;
        props: ClapperGtkAvProps;
        signals: ClapperGtk.Av.SignalSignatures;
        constructOnly: ClapperGtkAvConstructOnly;
        slotCandidates: {};
    };
    ClapperGtkBillboard: {
        class: ClapperGtk.Billboard;
        props: ClapperGtkBillboardProps;
        signals: ClapperGtk.Billboard.SignalSignatures;
        constructOnly: ClapperGtkBillboardConstructOnly;
        slotCandidates: {};
    };
    ClapperGtkContainer: {
        class: ClapperGtk.Container;
        props: ClapperGtkContainerProps;
        signals: ClapperGtk.Container.SignalSignatures;
        constructOnly: ClapperGtkContainerConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    ClapperGtkExtraMenuButton: {
        class: ClapperGtk.ExtraMenuButton;
        props: ClapperGtkExtraMenuButtonProps;
        signals: ClapperGtk.ExtraMenuButton.SignalSignatures;
        constructOnly: ClapperGtkExtraMenuButtonConstructOnly;
        slotCandidates: {};
    };
    ClapperGtkLeadContainer: {
        class: ClapperGtk.LeadContainer;
        props: ClapperGtkLeadContainerProps;
        signals: ClapperGtk.LeadContainer.SignalSignatures;
        constructOnly: ClapperGtkLeadContainerConstructOnly;
        slotCandidates: {};
    };
    ClapperGtkNextItemButton: {
        class: ClapperGtk.NextItemButton;
        props: ClapperGtkNextItemButtonProps;
        signals: ClapperGtk.NextItemButton.SignalSignatures;
        constructOnly: ClapperGtkNextItemButtonConstructOnly;
        slotCandidates: {};
    };
    ClapperGtkPreviousItemButton: {
        class: ClapperGtk.PreviousItemButton;
        props: ClapperGtkPreviousItemButtonProps;
        signals: ClapperGtk.PreviousItemButton.SignalSignatures;
        constructOnly: ClapperGtkPreviousItemButtonConstructOnly;
        slotCandidates: {};
    };
    ClapperGtkSeekBar: {
        class: ClapperGtk.SeekBar;
        props: ClapperGtkSeekBarProps;
        signals: ClapperGtk.SeekBar.SignalSignatures;
        constructOnly: ClapperGtkSeekBarConstructOnly;
        slotCandidates: {};
    };
    ClapperGtkSimpleControls: {
        class: ClapperGtk.SimpleControls;
        props: ClapperGtkSimpleControlsProps;
        signals: ClapperGtk.SimpleControls.SignalSignatures;
        constructOnly: ClapperGtkSimpleControlsConstructOnly;
        slotCandidates: {};
    };
    ClapperGtkTitleHeader: {
        class: ClapperGtk.TitleHeader;
        props: ClapperGtkTitleHeaderProps;
        signals: ClapperGtk.TitleHeader.SignalSignatures;
        constructOnly: ClapperGtkTitleHeaderConstructOnly;
        slotCandidates: {};
    };
    ClapperGtkTitleLabel: {
        class: ClapperGtk.TitleLabel;
        props: ClapperGtkTitleLabelProps;
        signals: ClapperGtk.TitleLabel.SignalSignatures;
        constructOnly: ClapperGtkTitleLabelConstructOnly;
        slotCandidates: {};
    };
    ClapperGtkToggleFullscreenButton: {
        class: ClapperGtk.ToggleFullscreenButton;
        props: ClapperGtkToggleFullscreenButtonProps;
        signals: ClapperGtk.ToggleFullscreenButton.SignalSignatures;
        constructOnly: ClapperGtkToggleFullscreenButtonConstructOnly;
        slotCandidates: {};
    };
    ClapperGtkTogglePlayButton: {
        class: ClapperGtk.TogglePlayButton;
        props: ClapperGtkTogglePlayButtonProps;
        signals: ClapperGtk.TogglePlayButton.SignalSignatures;
        constructOnly: ClapperGtkTogglePlayButtonConstructOnly;
        slotCandidates: {};
    };
    ClapperGtkVideo: {
        class: ClapperGtk.Video;
        props: ClapperGtkVideoProps;
        signals: ClapperGtk.Video.SignalSignatures;
        constructOnly: ClapperGtkVideoConstructOnly;
        slotCandidates: {
        'fading-overlay': 'add_fading_overlay';
        'overlay': 'add_overlay';
        };
    };
}

/** Every GType this namespace can create. A consumer derives its own tag map. */
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
    readonly unsettableProps: readonly string[];
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

/** Widget GType -> every declaration its members come from, self first. */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

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
