/**
 * The GIR-derived widget VOCABULARY for GtkSource-5.
 *
 * GENERATED — do not edit. Provenance: GtkSource-5 — library 5.21.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
 *
 * 10 concrete widgets, 12 declarations, 11 enum nick unions, 2 slot candidates.
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

import type Gdk from '@girs/gdk-4.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-4.0';
import type GtkSource from './gtksource-5.js';
import type Pango from '@girs/pango-1.0';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkAccessibleTextConstructOnly, GtkAccessibleTextProps, GtkActionableConstructOnly, GtkActionableProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkTextViewConstructOnly, GtkTextViewProps, GtkTextWindowTypeNick, GtkWidgetConstructOnly, GtkWidgetProps } from '@girs/gtk-4.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GtkSourceAnnotationStyleNick = 'none' | 'warning' | 'error' | 'accent';
export type GtkSourceBackgroundPatternTypeNick = 'none' | 'grid';
export type GtkSourceBracketMatchTypeNick = 'none' | 'out-of-range' | 'not-found' | 'found';
export type GtkSourceChangeCaseTypeNick = 'lower' | 'upper' | 'toggle' | 'title';
export type GtkSourceCompletionActivationNick = 'none' | 'interactive' | 'user-requested';
export type GtkSourceCompletionColumnNick = 'icon' | 'before' | 'typed-text' | 'after' | 'comment' | 'details';
export type GtkSourceCompressionTypeNick = 'none' | 'gzip';
export type GtkSourceGutterRendererAlignmentModeNick = 'cell' | 'first' | 'last';
export type GtkSourceNewlineTypeNick = 'lf' | 'cr' | 'cr-lf';
export type GtkSourceSmartHomeEndTypeNick = 'disabled' | 'before' | 'after' | 'always';
export type GtkSourceViewGutterPositionNick = 'lines' | 'marks';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Widget for single cell of completion proposal. */
export interface GtkSourceCompletionCellProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default GTK_SOURCE_COMPLETION_COLUMN_TYPED_TEXT */
    column?: GtkSourceCompletionColumnNick | GtkSource.CompletionColumn;
    /** @default NULL */
    markup?: string;
    paintable?: Gdk.Paintable;
    /** @default NULL */
    text?: string;
    widget?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionCellConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'column';

/** Gutter object for [class@View]. */
export interface GtkSourceGutterProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The #GtkSourceView of the gutter. */
    view?: GtkSource.View;
    /**
     * The text window type on which the window is placed.
     * @default GTK_TEXT_WINDOW_LEFT
     */
    'window-type'?: GtkTextWindowTypeNick | Gtk.TextWindowType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceGutterConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'view' | 'window-type';

/** Gutter cell renderer. */
export interface GtkSourceGutterRendererProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The alignment mode of the renderer.
     * @default GTK_SOURCE_GUTTER_RENDERER_ALIGNMENT_MODE_CELL
     */
    'alignment-mode'?: GtkSourceGutterRendererAlignmentModeNick | GtkSource.GutterRendererAlignmentMode;
    /**
     * The horizontal alignment of the renderer.
     * @default 0.000000
     */
    xalign?: number;
    /**
     * The left and right padding of the renderer.
     * @default 0
     */
    xpad?: number;
    /**
     * The vertical alignment of the renderer.
     * @default 0.000000
     */
    yalign?: number;
    /**
     * The top and bottom padding of the renderer.
     * @default 0
     */
    ypad?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceGutterRendererConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Renders a pixbuf in the gutter. */
export interface GtkSourceGutterRendererPixbufProps extends GtkSourceGutterRendererProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    gicon?: Gio.Icon;
    /** @default NULL */
    'icon-name'?: string;
    paintable?: Gdk.Paintable | null;
    pixbuf?: GdkPixbuf.Pixbuf;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceGutterRendererPixbufConstructOnly = GtkSourceGutterRendererConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Renders text in the gutter. */
export interface GtkSourceGutterRendererTextProps extends GtkSourceGutterRendererProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default NULL */
    markup?: string;
    /** @default NULL */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceGutterRendererTextConstructOnly = GtkSourceGutterRendererConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Display for interactive tooltips. */
export interface GtkSourceHoverDisplayProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceHoverDisplayConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Widget that displays a map for a specific [class@View]. */
export interface GtkSourceMapProps extends GtkSourceViewProps, GtkAccessibleProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
    'font-desc'?: Pango.FontDescription;
    view?: GtkSource.View | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceMapConstructOnly = GtkSourceViewConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

/** Interface implemented by widgets for choosing style schemes. */
export interface GtkSourceStyleSchemeChooserProps {
    /** Contains the currently selected style scheme. */
    'style-scheme'?: GtkSource.StyleScheme;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeChooserConstructOnly = never;

/** A button to launch a style scheme selection dialog. */
export interface GtkSourceStyleSchemeChooserButtonProps extends GtkButtonProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps, GtkSourceStyleSchemeChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeChooserButtonConstructOnly = GtkButtonConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkSourceStyleSchemeChooserConstructOnly;

/** A widget for choosing style schemes. */
export interface GtkSourceStyleSchemeChooserWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkSourceStyleSchemeChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeChooserWidgetConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkSourceStyleSchemeChooserConstructOnly;

/** A preview widget for [class@StyleScheme]. */
export interface GtkSourceStyleSchemePreviewProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    scheme?: GtkSource.StyleScheme;
    /** @default FALSE */
    selected?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemePreviewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'scheme';

/** Subclass of [class@Gtk.TextView]. */
export interface GtkSourceViewProps extends GtkTextViewProps, GtkAccessibleProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
    /** @default FALSE */
    'auto-indent'?: boolean;
    /**
     * Draw a specific background pattern on the view.
     * @default GTK_SOURCE_BACKGROUND_PATTERN_TYPE_NONE
     */
    'background-pattern'?: GtkSourceBackgroundPatternTypeNick | GtkSource.BackgroundPatternType;
    /**
     * The property denotes if snippets should be expanded when the user presses Tab after having typed a word matching the snippets found in [class@SnippetManager].
     * @default FALSE
     */
    'enable-snippets'?: boolean;
    /** @default FALSE */
    'highlight-current-line'?: boolean;
    /** @default TRUE */
    'indent-on-tab'?: boolean;
    /**
     * Width of an indentation step expressed in number of spaces.
     * @default -1
     */
    'indent-width'?: number;
    /** The property is a [iface@Indenter] to use to indent as the user types into the [class@View]. */
    indenter?: GtkSource.Indenter | null;
    /** @default FALSE */
    'insert-spaces-instead-of-tabs'?: boolean;
    /**
     * Position of the right margin.
     * @default 80
     */
    'right-margin-position'?: number;
    /**
     * Whether to display line mark pixbufs
     * @default FALSE
     */
    'show-line-marks'?: boolean;
    /**
     * Whether to display line numbers
     * @default FALSE
     */
    'show-line-numbers'?: boolean;
    /**
     * Whether to display the right margin.
     * @default FALSE
     */
    'show-right-margin'?: boolean;
    /**
     * Whether smart Backspace should be used.
     * @default FALSE
     */
    'smart-backspace'?: boolean;
    /**
     * Set the behavior of the HOME and END keys.
     * @default GTK_SOURCE_SMART_HOME_END_DISABLED
     */
    'smart-home-end'?: GtkSourceSmartHomeEndTypeNick | GtkSource.SmartHomeEndType;
    /**
     * Width of a tab character expressed in number of spaces.
     * @default 8
     */
    'tab-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceViewConstructOnly = GtkTextViewConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

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
    GtkSourceCompletionCell: {
        class: GtkSource.CompletionCell;
        props: GtkSourceCompletionCellProps;
        signals: GtkSource.CompletionCell.SignalSignatures;
        constructOnly: GtkSourceCompletionCellConstructOnly;
        slotCandidates: {
        'widget': 'set_widget';
        };
    };
    GtkSourceGutter: {
        class: GtkSource.Gutter;
        props: GtkSourceGutterProps;
        signals: GtkSource.Gutter.SignalSignatures;
        constructOnly: GtkSourceGutterConstructOnly;
        slotCandidates: {};
    };
    GtkSourceGutterRendererPixbuf: {
        class: GtkSource.GutterRendererPixbuf;
        props: GtkSourceGutterRendererPixbufProps;
        signals: GtkSource.GutterRendererPixbuf.SignalSignatures;
        constructOnly: GtkSourceGutterRendererPixbufConstructOnly;
        slotCandidates: {};
    };
    GtkSourceGutterRendererText: {
        class: GtkSource.GutterRendererText;
        props: GtkSourceGutterRendererTextProps;
        signals: GtkSource.GutterRendererText.SignalSignatures;
        constructOnly: GtkSourceGutterRendererTextConstructOnly;
        slotCandidates: {};
    };
    GtkSourceHoverDisplay: {
        class: GtkSource.HoverDisplay;
        props: GtkSourceHoverDisplayProps;
        signals: GtkSource.HoverDisplay.SignalSignatures;
        constructOnly: GtkSourceHoverDisplayConstructOnly;
        slotCandidates: {};
    };
    GtkSourceMap: {
        class: GtkSource.Map;
        props: GtkSourceMapProps;
        signals: GtkSource.Map.SignalSignatures;
        constructOnly: GtkSourceMapConstructOnly;
        slotCandidates: {
        'view': 'set_view';
        };
    };
    GtkSourceStyleSchemeChooserButton: {
        class: GtkSource.StyleSchemeChooserButton;
        props: GtkSourceStyleSchemeChooserButtonProps;
        signals: GtkSource.StyleSchemeChooserButton.SignalSignatures;
        constructOnly: GtkSourceStyleSchemeChooserButtonConstructOnly;
        slotCandidates: {};
    };
    GtkSourceStyleSchemeChooserWidget: {
        class: GtkSource.StyleSchemeChooserWidget;
        props: GtkSourceStyleSchemeChooserWidgetProps;
        signals: GtkSource.StyleSchemeChooserWidget.SignalSignatures;
        constructOnly: GtkSourceStyleSchemeChooserWidgetConstructOnly;
        slotCandidates: {};
    };
    GtkSourceStyleSchemePreview: {
        class: GtkSource.StyleSchemePreview;
        props: GtkSourceStyleSchemePreviewProps;
        signals: GtkSource.StyleSchemePreview.SignalSignatures;
        constructOnly: GtkSourceStyleSchemePreviewConstructOnly;
        slotCandidates: {};
    };
    GtkSourceView: {
        class: GtkSource.View;
        props: GtkSourceViewProps;
        signals: GtkSource.View.SignalSignatures;
        constructOnly: GtkSourceViewConstructOnly;
        slotCandidates: {};
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
