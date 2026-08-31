/**
 * The GIR-derived widget VOCABULARY for Ide-1.0.
 *
 * GENERATED — do not edit. Provenance: Ide-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
 *
 * 24 concrete widgets, 25 declarations, 12 enum nick unions, 3 slot candidates.
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

import type Gtk from '@girs/gtk-3.0';
import type Ide from './ide-1.0.js';
import type Pango from '@girs/pango-1.0';
import type { DzlBinConstructOnly, DzlBinProps, DzlDockBinConstructOnly, DzlDockBinEdgeConstructOnly, DzlDockBinEdgeProps, DzlDockBinProps, DzlDockConstructOnly, DzlDockItemConstructOnly, DzlDockItemProps, DzlDockOverlayConstructOnly, DzlDockOverlayProps, DzlDockProps, DzlDockRevealerConstructOnly, DzlDockRevealerProps, DzlPreferencesConstructOnly, DzlPreferencesProps, DzlPreferencesViewConstructOnly, DzlPreferencesViewProps, DzlProgressButtonConstructOnly, DzlProgressButtonProps } from '@girs/dazzle-1.0/surface';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkApplicationWindowConstructOnly, GtkApplicationWindowProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkCellEditableConstructOnly, GtkCellEditableProps, GtkContainerConstructOnly, GtkContainerProps, GtkDirectionTypeNick, GtkDrawingAreaConstructOnly, GtkDrawingAreaProps, GtkEditableConstructOnly, GtkEditableProps, GtkEntryConstructOnly, GtkEntryProps, GtkEventBoxConstructOnly, GtkEventBoxProps, GtkHeaderBarConstructOnly, GtkHeaderBarProps, GtkInfoBarConstructOnly, GtkInfoBarProps, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkMenuButtonConstructOnly, GtkMenuButtonProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkTextViewConstructOnly, GtkTextViewProps, GtkToggleButtonConstructOnly, GtkToggleButtonProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/surface';
import type { GtkSourceMapConstructOnly, GtkSourceMapProps, GtkSourceViewConstructOnly, GtkSourceViewProps } from '@girs/gtksource-3.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type IdeBuildLogStreamNick = 'stdout' | 'stderr';
export type IdeCursorTypeNick = 'column' | 'select' | 'match';
export type IdeDiagnosticSeverityNick = 'ignored' | 'note' | 'deprecated' | 'warning' | 'error' | 'fatal';
export type IdeHighlightResultNick = 'stop' | 'continue';
export type IdeIndentStyleNick = 'spaces' | 'tabs';
export type IdeLayoutGridSplitNick = 'left' | 'right' | 'move-left' | 'move-right';
export type IdeSourceViewModeTypeNick = 'transient' | 'permanent' | 'modal';
export type IdeSourceViewMovementNick = 'previous-offset' | 'next-offset' | 'nth-char' | 'previous-char' | 'next-char' | 'first-char' | 'first-nonspace-char' | 'middle-char' | 'last-char' | 'next-word-start' | 'next-full-word-start' | 'next-sub-word-start' | 'previous-sub-word-start' | 'previous-word-start' | 'previous-full-word-start' | 'previous-word-end' | 'previous-full-word-end' | 'next-word-end' | 'next-full-word-end' | 'sentence-start' | 'sentence-end' | 'paragraph-start' | 'paragraph-end' | 'previous-line' | 'next-line' | 'first-line' | 'nth-line' | 'last-line' | 'line-percentage' | 'line-chars' | 'line-end' | 'half-page-up' | 'half-page-down' | 'half-page-left' | 'half-page-right' | 'page-up' | 'page-up-lines' | 'page-down' | 'page-down-lines' | 'screen-up' | 'screen-down' | 'screen-left' | 'screen-right' | 'screen-top' | 'screen-middle' | 'screen-bottom' | 'match-special' | 'scroll-screen-top' | 'scroll-screen-center' | 'scroll-screen-bottom' | 'scroll-screen-left' | 'scroll-screen-right' | 'previous-unmatched-brace' | 'next-unmatched-brace' | 'previous-unmatched-paren' | 'next-unmatched-paren' | 'next-match-modifier' | 'previous-match-modifier' | 'next-match-search-char' | 'previous-match-search-char';
export type IdeSourceViewTheatricNick = 'expand' | 'shrink';
export type IdeSymbolKindNick = 'none' | 'array' | 'boolean' | 'class' | 'constant' | 'constructor' | 'enum' | 'enum-value' | 'field' | 'file' | 'function' | 'header' | 'interface' | 'method' | 'module' | 'namespace' | 'number' | 'package' | 'property' | 'scalar' | 'string' | 'struct' | 'union' | 'variable' | 'keyword' | 'ui-attributes' | 'ui-child' | 'ui-item' | 'ui-menu' | 'ui-menu-attribute' | 'ui-object' | 'ui-packing' | 'ui-property' | 'ui-section' | 'ui-signal' | 'ui-style' | 'ui-style-class' | 'ui-submenu' | 'ui-template' | 'xml-attribute' | 'xml-declaration' | 'xml-element' | 'xml-comment' | 'xml-cdata';
export type IdeThreadPoolKindNick = 'compiler' | 'indexer' | 'last';
export type IdeVcsConfigTypeNick = 'full-name' | 'email';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface IdeEditorPerspectiveProps extends DzlDockOverlayProps, DzlDockProps, DzlDockItemProps, GtkBuildableProps, IdePerspectiveProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEditorPerspectiveConstructOnly = DzlDockOverlayConstructOnly | DzlDockConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly | IdePerspectiveConstructOnly;

export interface IdeEditorViewProps extends IdeLayoutViewProps, GtkBuildableProps, GtkOrientableProps {
    document?: Ide.Buffer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEditorViewConstructOnly = IdeLayoutViewConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'document';

export interface IdeLayoutProps extends DzlDockBinProps, DzlDockProps, DzlDockItemProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLayoutConstructOnly = DzlDockBinConstructOnly | DzlDockConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly;

export interface IdeLayoutGridProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLayoutGridConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface IdeLayoutPaneProps extends DzlDockBinEdgeProps, DzlDockItemProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLayoutPaneConstructOnly = DzlDockBinEdgeConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly;

export interface IdeLayoutStackProps extends GtkBinProps, GtkBuildableProps {
    'active-view'?: Ide.LayoutView | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLayoutStackConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface IdeLayoutViewProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLayoutViewConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface IdeOmniBarProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeOmniBarConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface IdeOmniSearchDisplayProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    context?: Ide.SearchContext;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeOmniSearchDisplayConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface IdeOmniSearchEntryProps extends GtkEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeOmniSearchEntryConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

export interface IdeOmniSearchGroupProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    provider?: Ide.SearchProvider;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeOmniSearchGroupConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'provider';

export interface IdeOmniSearchRowProps extends GtkListBoxRowProps, GtkBuildableProps {
    'icon-name'?: string;
    result?: Ide.SearchResult;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeOmniSearchRowConstructOnly = GtkListBoxRowConstructOnly | GtkBuildableConstructOnly;

export interface IdePerspectiveProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePerspectiveConstructOnly = never;

export interface IdePreferencesPerspectiveProps extends DzlPreferencesViewProps, DzlPreferencesProps, GtkBuildableProps, IdePerspectiveProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePreferencesPerspectiveConstructOnly = DzlPreferencesViewConstructOnly | DzlPreferencesConstructOnly | GtkBuildableConstructOnly | IdePerspectiveConstructOnly;

export interface IdeRunButtonProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRunButtonConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface IdeSourceMapProps extends GtkSourceMapProps, GtkBuildableProps, GtkScrollableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSourceMapConstructOnly = GtkSourceMapConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

export interface IdeSourceViewProps extends GtkSourceViewProps, GtkBuildableProps, GtkScrollableProps {
    'back-forward-list'?: Ide.BackForwardList | null;
    count?: number;
    'enable-word-completion'?: boolean;
    'font-desc'?: Pango.FontDescription;
    'font-name'?: string;
    'indent-style'?: IdeIndentStyleNick | Ide.IndentStyle;
    'insert-matching-brace'?: boolean;
    overscroll?: number;
    'overwrite-braces'?: boolean;
    'rubberband-search'?: boolean;
    'scroll-offset'?: number;
    'search-direction'?: GtkDirectionTypeNick | Gtk.DirectionType;
    'show-grid-lines'?: boolean;
    'show-line-changes'?: boolean;
    /** If the diagnostics gutter should be visible. */
    'show-line-diagnostics'?: boolean;
    'show-search-bubbles'?: boolean;
    'show-search-shadow'?: boolean;
    'snippet-completion'?: boolean;
    'spell-checking'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSourceViewConstructOnly = GtkSourceViewConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

export interface IdeSourceViewModeProps extends GtkWidgetProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSourceViewModeConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface IdeTransferButtonProps extends DzlProgressButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    transfer?: Ide.Transfer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTransferButtonConstructOnly = DzlProgressButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly | 'transfer';

export interface IdeTransferRowProps extends GtkListBoxRowProps, GtkBuildableProps {
    transfer?: Ide.Transfer | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTransferRowConstructOnly = GtkListBoxRowConstructOnly | GtkBuildableConstructOnly;

export interface IdeTransfersButtonProps extends GtkMenuButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTransfersButtonConstructOnly = GtkMenuButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface IdeTransfersProgressIconProps extends GtkDrawingAreaProps, GtkBuildableProps {
    progress?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTransfersProgressIconConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

export interface IdeWorkbenchProps extends GtkApplicationWindowProps, GtkBuildableProps {
    /** This property is used internally by Builder to avoid creating the greeter when opening a new workspace that is only for loading a project. */
    'disable-greeter'?: boolean;
    /** This property contains the #IdePerspective that is currently selected. */
    'visible-perspective'?: Ide.Perspective;
    /** This property is just like #IdeWorkbench:visible-perspective except that it contains the name of the perspective as a string. */
    'visible-perspective-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeWorkbenchConstructOnly = GtkApplicationWindowConstructOnly | GtkBuildableConstructOnly | 'disable-greeter';

export interface IdeWorkbenchHeaderBarProps extends GtkHeaderBarProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeWorkbenchHeaderBarConstructOnly = GtkHeaderBarConstructOnly | GtkBuildableConstructOnly;

export interface IdeWorkbenchMessageProps extends GtkInfoBarProps, GtkBuildableProps, GtkOrientableProps {
    id?: string;
    subtitle?: string;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeWorkbenchMessageConstructOnly = GtkInfoBarConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

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
    IdeEditorPerspective: {
        class: Ide.EditorPerspective;
        props: IdeEditorPerspectiveProps;
        signals: Ide.EditorPerspective.SignalSignatures;
        constructOnly: IdeEditorPerspectiveConstructOnly;
        slotCandidates: {};
    };
    IdeEditorView: {
        class: Ide.EditorView;
        props: IdeEditorViewProps;
        signals: Ide.EditorView.SignalSignatures;
        constructOnly: IdeEditorViewConstructOnly;
        slotCandidates: {};
    };
    IdeLayout: {
        class: Ide.Layout;
        props: IdeLayoutProps;
        signals: Ide.Layout.SignalSignatures;
        constructOnly: IdeLayoutConstructOnly;
        slotCandidates: {};
    };
    IdeLayoutGrid: {
        class: Ide.LayoutGrid;
        props: IdeLayoutGridProps;
        signals: Ide.LayoutGrid.SignalSignatures;
        constructOnly: IdeLayoutGridConstructOnly;
        slotCandidates: {
        'stack-after': 'add_stack_after';
        'stack-before': 'add_stack_before';
        };
    };
    IdeLayoutPane: {
        class: Ide.LayoutPane;
        props: IdeLayoutPaneProps;
        signals: Ide.LayoutPane.SignalSignatures;
        constructOnly: IdeLayoutPaneConstructOnly;
        slotCandidates: {};
    };
    IdeLayoutStack: {
        class: Ide.LayoutStack;
        props: IdeLayoutStackProps;
        signals: Ide.LayoutStack.SignalSignatures;
        constructOnly: IdeLayoutStackConstructOnly;
        slotCandidates: {
        'active-view': 'set_active_view';
        };
    };
    IdeLayoutView: {
        class: Ide.LayoutView;
        props: IdeLayoutViewProps;
        signals: Ide.LayoutView.SignalSignatures;
        constructOnly: IdeLayoutViewConstructOnly;
        slotCandidates: {};
    };
    IdeOmniBar: {
        class: Ide.OmniBar;
        props: IdeOmniBarProps;
        signals: Ide.OmniBar.SignalSignatures;
        constructOnly: IdeOmniBarConstructOnly;
        slotCandidates: {};
    };
    IdeOmniSearchDisplay: {
        class: Ide.OmniSearchDisplay;
        props: IdeOmniSearchDisplayProps;
        signals: Ide.OmniSearchDisplay.SignalSignatures;
        constructOnly: IdeOmniSearchDisplayConstructOnly;
        slotCandidates: {};
    };
    IdeOmniSearchEntry: {
        class: Ide.OmniSearchEntry;
        props: IdeOmniSearchEntryProps;
        signals: Ide.OmniSearchEntry.SignalSignatures;
        constructOnly: IdeOmniSearchEntryConstructOnly;
        slotCandidates: {};
    };
    IdeOmniSearchGroup: {
        class: Ide.OmniSearchGroup;
        props: IdeOmniSearchGroupProps;
        signals: Ide.OmniSearchGroup.SignalSignatures;
        constructOnly: IdeOmniSearchGroupConstructOnly;
        slotCandidates: {};
    };
    IdeOmniSearchRow: {
        class: Ide.OmniSearchRow;
        props: IdeOmniSearchRowProps;
        signals: Ide.OmniSearchRow.SignalSignatures;
        constructOnly: IdeOmniSearchRowConstructOnly;
        slotCandidates: {};
    };
    IdePreferencesPerspective: {
        class: Ide.PreferencesPerspective;
        props: IdePreferencesPerspectiveProps;
        signals: Ide.PreferencesPerspective.SignalSignatures;
        constructOnly: IdePreferencesPerspectiveConstructOnly;
        slotCandidates: {};
    };
    IdeRunButton: {
        class: Ide.RunButton;
        props: IdeRunButtonProps;
        signals: Ide.RunButton.SignalSignatures;
        constructOnly: IdeRunButtonConstructOnly;
        slotCandidates: {};
    };
    IdeSourceMap: {
        class: Ide.SourceMap;
        props: IdeSourceMapProps;
        signals: Ide.SourceMap.SignalSignatures;
        constructOnly: IdeSourceMapConstructOnly;
        slotCandidates: {};
    };
    IdeSourceView: {
        class: Ide.SourceView;
        props: IdeSourceViewProps;
        signals: Ide.SourceView.SignalSignatures;
        constructOnly: IdeSourceViewConstructOnly;
        slotCandidates: {};
    };
    IdeSourceViewMode: {
        class: Ide.SourceViewMode;
        props: IdeSourceViewModeProps;
        signals: Ide.SourceViewMode.SignalSignatures;
        constructOnly: IdeSourceViewModeConstructOnly;
        slotCandidates: {};
    };
    IdeTransferButton: {
        class: Ide.TransferButton;
        props: IdeTransferButtonProps;
        signals: Ide.TransferButton.SignalSignatures;
        constructOnly: IdeTransferButtonConstructOnly;
        slotCandidates: {};
    };
    IdeTransferRow: {
        class: Ide.TransferRow;
        props: IdeTransferRowProps;
        signals: Ide.TransferRow.SignalSignatures;
        constructOnly: IdeTransferRowConstructOnly;
        slotCandidates: {};
    };
    IdeTransfersButton: {
        class: Ide.TransfersButton;
        props: IdeTransfersButtonProps;
        signals: Ide.TransfersButton.SignalSignatures;
        constructOnly: IdeTransfersButtonConstructOnly;
        slotCandidates: {};
    };
    IdeTransfersProgressIcon: {
        class: Ide.TransfersProgressIcon;
        props: IdeTransfersProgressIconProps;
        signals: Ide.TransfersProgressIcon.SignalSignatures;
        constructOnly: IdeTransfersProgressIconConstructOnly;
        slotCandidates: {};
    };
    IdeWorkbench: {
        class: Ide.Workbench;
        props: IdeWorkbenchProps;
        signals: Ide.Workbench.SignalSignatures;
        constructOnly: IdeWorkbenchConstructOnly;
        slotCandidates: {};
    };
    IdeWorkbenchHeaderBar: {
        class: Ide.WorkbenchHeaderBar;
        props: IdeWorkbenchHeaderBarProps;
        signals: Ide.WorkbenchHeaderBar.SignalSignatures;
        constructOnly: IdeWorkbenchHeaderBarConstructOnly;
        slotCandidates: {};
    };
    IdeWorkbenchMessage: {
        class: Ide.WorkbenchMessage;
        props: IdeWorkbenchMessageProps;
        signals: Ide.WorkbenchMessage.SignalSignatures;
        constructOnly: IdeWorkbenchMessageConstructOnly;
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
export const SURFACE_PROVENANCE: string;

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> its own signals. */
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
 * `Type.property` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a member the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 */
export const SINCE: Readonly<Record<string, string>>;
