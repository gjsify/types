/**
 * The GIR-derived widget VOCABULARY for Egg-1.0.
 *
 * GENERATED — do not edit. Provenance: Egg-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
 *
 * 21 concrete widgets, 21 declarations, 3 enum nick unions, 1 slot candidates.
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

import type Egg from './egg-1.0.js';
import type GObject from '@girs/gobject-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkCellEditableConstructOnly, GtkCellEditableProps, GtkContainerConstructOnly, GtkContainerProps, GtkEditableConstructOnly, GtkEditableProps, GtkEntryConstructOnly, GtkEntryProps, GtkEventBoxConstructOnly, GtkEventBoxProps, GtkFileChooserActionNick, GtkListBoxConstructOnly, GtkListBoxProps, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkPopoverConstructOnly, GtkPopoverProps, GtkScrolledWindowConstructOnly, GtkScrolledWindowProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type EggAnimationModeNick = 'linear' | 'ease-in-quad' | 'ease-in-out-quad' | 'ease-out-quad' | 'ease-in-cubic' | 'ease-out-cubic' | 'ease-in-out-cubic';
export type EggSliderPositionNick = 'none' | 'top' | 'right' | 'bottom' | 'left';
export type EggThreeGridColumnNick = 'left' | 'center' | 'right';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface EggBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    'max-width-request'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** First off, you probably want to use GtkBox with a center widget instead of this widget. */
export interface EggCenteringBinProps extends GtkBinProps, GtkBuildableProps {
    'max-width-request'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggCenteringBinConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface EggColumnLayoutProps extends GtkContainerProps, GtkBuildableProps {
    'column-spacing'?: number;
    'column-width'?: number;
    'max-columns'?: number;
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggColumnLayoutConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface EggElasticBinProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggElasticBinConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface EggEmptyStateProps extends GtkBinProps, GtkBuildableProps {
    'icon-name'?: string;
    'pixel-size'?: number;
    resource?: string;
    subtitle?: string;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggEmptyStateConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface EggEntryBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    'max-width-chars'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggEntryBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface EggFileChooserEntryProps extends GtkBinProps, GtkBuildableProps {
    action?: GtkFileChooserActionNick | Gtk.FileChooserAction;
    'create-folders'?: boolean;
    'do-overwrite-confirmation'?: boolean;
    file?: Gio.File | null;
    filter?: Gtk.FileFilter;
    'local-only'?: boolean;
    'max-width-chars'?: number;
    'show-hidden'?: boolean;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggFileChooserEntryConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface EggListBoxProps extends GtkListBoxProps, GtkBuildableProps {
    'property-name'?: string;
    'row-type'?: GObject.GType;
    'row-type-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggListBoxConstructOnly = GtkListBoxConstructOnly | GtkBuildableConstructOnly | 'property-name' | 'row-type' | 'row-type-name';

export interface EggPillBoxProps extends GtkEventBoxProps, GtkBuildableProps {
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggPillBoxConstructOnly = GtkEventBoxConstructOnly | GtkBuildableConstructOnly;

/** This is like a #GtkBox but uses stable priorities to sort. */
export interface EggPriorityBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggPriorityBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface EggProgressButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    progress?: number;
    'show-progress'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggProgressButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface EggRadioBoxProps extends GtkBinProps, GtkBuildableProps {
    'active-id'?: string;
    'show-more'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggRadioBoxConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface EggScrolledWindowProps extends GtkScrolledWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggScrolledWindowConstructOnly = GtkScrolledWindowConstructOnly | GtkBuildableConstructOnly;

export interface EggSearchBarProps extends GtkBinProps, GtkBuildableProps {
    'search-mode-enabled'?: boolean;
    'show-close-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggSearchBarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface EggSimpleLabelProps extends GtkWidgetProps, GtkBuildableProps {
    label?: string;
    'width-chars'?: number;
    xalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggSimpleLabelConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface EggSimplePopoverProps extends GtkPopoverProps, GtkBuildableProps {
    'button-text'?: string;
    message?: string;
    ready?: boolean;
    text?: string;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggSimplePopoverConstructOnly = GtkPopoverConstructOnly | GtkBuildableConstructOnly;

export interface EggSliderProps extends GtkContainerProps, GtkBuildableProps {
    position?: EggSliderPositionNick | Egg.SliderPosition;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggSliderConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface EggSuggestionEntryProps extends GtkEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
    model?: Gio.ListModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggSuggestionEntryConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

export interface EggSuggestionPopoverProps extends GtkWindowProps, GtkBuildableProps {
    model?: Egg.Suggestion | null;
    'relative-to'?: Gtk.Widget | null;
    selected?: Egg.Suggestion | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggSuggestionPopoverConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface EggSuggestionRowProps extends GtkListBoxRowProps, GtkBuildableProps {
    suggestion?: Egg.Suggestion;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggSuggestionRowConstructOnly = GtkListBoxRowConstructOnly | GtkBuildableConstructOnly;

export interface EggThreeGridProps extends GtkContainerProps, GtkBuildableProps {
    'column-spacing'?: number;
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EggThreeGridConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

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
    EggBox: {
        class: Egg.Box;
        props: EggBoxProps;
        signals: Egg.Box.SignalSignatures;
        constructOnly: EggBoxConstructOnly;
        slotCandidates: {};
    };
    EggCenteringBin: {
        class: Egg.CenteringBin;
        props: EggCenteringBinProps;
        signals: Egg.CenteringBin.SignalSignatures;
        constructOnly: EggCenteringBinConstructOnly;
        slotCandidates: {};
    };
    EggColumnLayout: {
        class: Egg.ColumnLayout;
        props: EggColumnLayoutProps;
        signals: Egg.ColumnLayout.SignalSignatures;
        constructOnly: EggColumnLayoutConstructOnly;
        slotCandidates: {};
    };
    EggElasticBin: {
        class: Egg.ElasticBin;
        props: EggElasticBinProps;
        signals: Egg.ElasticBin.SignalSignatures;
        constructOnly: EggElasticBinConstructOnly;
        slotCandidates: {};
    };
    EggEmptyState: {
        class: Egg.EmptyState;
        props: EggEmptyStateProps;
        signals: Egg.EmptyState.SignalSignatures;
        constructOnly: EggEmptyStateConstructOnly;
        slotCandidates: {};
    };
    EggEntryBox: {
        class: Egg.EntryBox;
        props: EggEntryBoxProps;
        signals: Egg.EntryBox.SignalSignatures;
        constructOnly: EggEntryBoxConstructOnly;
        slotCandidates: {};
    };
    EggFileChooserEntry: {
        class: Egg.FileChooserEntry;
        props: EggFileChooserEntryProps;
        signals: Egg.FileChooserEntry.SignalSignatures;
        constructOnly: EggFileChooserEntryConstructOnly;
        slotCandidates: {};
    };
    EggListBox: {
        class: Egg.ListBox;
        props: EggListBoxProps;
        signals: Egg.ListBox.SignalSignatures;
        constructOnly: EggListBoxConstructOnly;
        slotCandidates: {};
    };
    EggPillBox: {
        class: Egg.PillBox;
        props: EggPillBoxProps;
        signals: Egg.PillBox.SignalSignatures;
        constructOnly: EggPillBoxConstructOnly;
        slotCandidates: {};
    };
    EggPriorityBox: {
        class: Egg.PriorityBox;
        props: EggPriorityBoxProps;
        signals: Egg.PriorityBox.SignalSignatures;
        constructOnly: EggPriorityBoxConstructOnly;
        slotCandidates: {};
    };
    EggProgressButton: {
        class: Egg.ProgressButton;
        props: EggProgressButtonProps;
        signals: Egg.ProgressButton.SignalSignatures;
        constructOnly: EggProgressButtonConstructOnly;
        slotCandidates: {};
    };
    EggRadioBox: {
        class: Egg.RadioBox;
        props: EggRadioBoxProps;
        signals: Egg.RadioBox.SignalSignatures;
        constructOnly: EggRadioBoxConstructOnly;
        slotCandidates: {};
    };
    EggScrolledWindow: {
        class: Egg.ScrolledWindow;
        props: EggScrolledWindowProps;
        signals: Egg.ScrolledWindow.SignalSignatures;
        constructOnly: EggScrolledWindowConstructOnly;
        slotCandidates: {};
    };
    EggSearchBar: {
        class: Egg.SearchBar;
        props: EggSearchBarProps;
        signals: Egg.SearchBar.SignalSignatures;
        constructOnly: EggSearchBarConstructOnly;
        slotCandidates: {};
    };
    EggSimpleLabel: {
        class: Egg.SimpleLabel;
        props: EggSimpleLabelProps;
        signals: Egg.SimpleLabel.SignalSignatures;
        constructOnly: EggSimpleLabelConstructOnly;
        slotCandidates: {};
    };
    EggSimplePopover: {
        class: Egg.SimplePopover;
        props: EggSimplePopoverProps;
        signals: Egg.SimplePopover.SignalSignatures;
        constructOnly: EggSimplePopoverConstructOnly;
        slotCandidates: {};
    };
    EggSlider: {
        class: Egg.Slider;
        props: EggSliderProps;
        signals: Egg.Slider.SignalSignatures;
        constructOnly: EggSliderConstructOnly;
        slotCandidates: {};
    };
    EggSuggestionEntry: {
        class: Egg.SuggestionEntry;
        props: EggSuggestionEntryProps;
        signals: Egg.SuggestionEntry.SignalSignatures;
        constructOnly: EggSuggestionEntryConstructOnly;
        slotCandidates: {};
    };
    EggSuggestionPopover: {
        class: Egg.SuggestionPopover;
        props: EggSuggestionPopoverProps;
        signals: Egg.SuggestionPopover.SignalSignatures;
        constructOnly: EggSuggestionPopoverConstructOnly;
        slotCandidates: {
        'relative-to': 'set_relative_to';
        };
    };
    EggSuggestionRow: {
        class: Egg.SuggestionRow;
        props: EggSuggestionRowProps;
        signals: Egg.SuggestionRow.SignalSignatures;
        constructOnly: EggSuggestionRowConstructOnly;
        slotCandidates: {};
    };
    EggThreeGrid: {
        class: Egg.ThreeGrid;
        props: EggThreeGridProps;
        signals: Egg.ThreeGrid.SignalSignatures;
        constructOnly: EggThreeGridConstructOnly;
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
