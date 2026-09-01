/**
 * The GIR-derived widget VOCABULARY for Tepl-6.
 *
 * GENERATED — do not edit. Provenance: Tepl-6 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
 *
 * 19 concrete widgets, 21 declarations, 4 enum nick unions, 4 slot candidates.
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

import type Tepl from './tepl-6.js';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkGridConstructOnly, GtkGridProps, GtkInfoBarConstructOnly, GtkInfoBarProps, GtkMenuButtonConstructOnly, GtkMenuButtonProps, GtkNotebookConstructOnly, GtkNotebookProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkStatusbarConstructOnly, GtkStatusbarProps, GtkTextViewConstructOnly, GtkTextViewProps, GtkToggleButtonConstructOnly, GtkToggleButtonProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/vocabulary';
import type { GtkSourceViewConstructOnly, GtkSourceViewProps } from '@girs/gtksource-300/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type TeplInfoBarLocationNick = 'alongside-icon' | 'below-icon';
export type TeplNewlineTypeNick = 'lf' | 'cr' | 'cr-lf';
export type TeplSelectionTypeNick = 'no-selection' | 'on-same-line' | 'multiple-lines';
export type TeplSettingsThemeVariantNick = 'system' | 'light' | 'dark';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface TeplGotoLineBarProps extends GtkGridProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplGotoLineBarConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface TeplInfoBarProps extends GtkInfoBarProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * If this property is %TRUE, then the #TeplInfoBar is destroyed with gtk_widget_destroy() when the #GtkInfoBar::response signal is received with the @response_id %GTK_RESPONSE_CLOSE.
     * @since 6.0
     * @default FALSE
     */
    'handle-close-response'?: boolean;
    /**
     * If this property is %TRUE, then an icon is shown on the left, based on the value of the #GtkInfoBar:message-type property.
     * @since 6.0
     * @default FALSE
     */
    'icon-from-message-type'?: boolean;
    /**
     * If set to a non-%NULL value, then an icon is shown on the left.
     * @since 6.0
     * @default NULL
     */
    'icon-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplInfoBarConstructOnly = GtkInfoBarConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface TeplLanguageChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplLanguageChooserConstructOnly = never;

export interface TeplLanguageChooserDialogProps extends GtkDialogProps, GtkBuildableProps, TeplLanguageChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplLanguageChooserDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | TeplLanguageChooserConstructOnly;

export interface TeplLanguageChooserWidgetProps extends GtkGridProps, GtkBuildableProps, GtkOrientableProps, TeplLanguageChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplLanguageChooserWidgetConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | TeplLanguageChooserConstructOnly;

export interface TeplLineColumnIndicatorProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplLineColumnIndicatorConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface TeplNotebookProps extends GtkNotebookProps, GtkBuildableProps, TeplTabGroupProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplNotebookConstructOnly = GtkNotebookConstructOnly | GtkBuildableConstructOnly | TeplTabGroupConstructOnly;

export interface TeplOverwriteIndicatorProps extends GtkBinProps, GtkBuildableProps {
    /**
     * - If %TRUE, indicates the overwrite mode.
     * @since 6.4
     * @default FALSE
     */
    overwrite?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplOverwriteIndicatorConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface TeplPanel1Props extends GtkGridProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplPanel1ConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface TeplPanelSwitcherMenuProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplPanelSwitcherMenuConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface TeplPrefsDialogProps extends GtkDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplPrefsDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

export interface TeplProgressInfoBarProps extends TeplInfoBarProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Whether to add a Cancel button in the action area of the #GtkInfoBar, with the %GTK_RESPONSE_CANCEL response.
     * @since 6.0
     * @default TRUE
     */
    'has-cancel-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplProgressInfoBarConstructOnly = TeplInfoBarConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'has-cancel-button';

export interface TeplSpaceDrawerPrefsProps extends GtkGridProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplSpaceDrawerPrefsConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface TeplStatusMenuButtonProps extends GtkMenuButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplStatusMenuButtonConstructOnly = GtkMenuButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface TeplStatusbarProps extends GtkStatusbarProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplStatusbarConstructOnly = GtkStatusbarConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface TeplStyleSchemeChooserFullProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplStyleSchemeChooserFullConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface TeplStyleSchemeChooserSimpleProps extends GtkBinProps, GtkBuildableProps {
    /**
     * The selected #GtkSourceStyleScheme ID.
     * @since 6.11
     * @default NULL
     */
    'style-scheme-id'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplStyleSchemeChooserSimpleConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface TeplTabProps extends GtkGridProps, GtkBuildableProps, GtkOrientableProps, TeplTabGroupProps {
    /**
     * The #TeplView contained in the tab.
     * @since 3.0
     */
    view?: Tepl.View;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplTabConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | TeplTabGroupConstructOnly | 'view';

export interface TeplTabGroupProps {
    /**
     * The #TeplTab currently shown.
     * @since 3.0
     */
    'active-tab'?: Tepl.Tab | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplTabGroupConstructOnly = never;

export interface TeplTabLabelProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The associated #TeplTab.
     * @since 3.0
     */
    tab?: Tepl.Tab | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplTabLabelConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'tab';

export interface TeplViewProps extends GtkSourceViewProps, GtkBuildableProps, GtkScrollableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TeplViewConstructOnly = GtkSourceViewConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

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
    TeplGotoLineBar: {
        class: Tepl.GotoLineBar;
        props: TeplGotoLineBarProps;
        signals: Tepl.GotoLineBar.SignalSignatures;
        constructOnly: TeplGotoLineBarConstructOnly;
        slotCandidates: {
        'view': 'set_view';
        };
    };
    TeplInfoBar: {
        class: Tepl.InfoBar;
        props: TeplInfoBarProps;
        signals: Tepl.InfoBar.SignalSignatures;
        constructOnly: TeplInfoBarConstructOnly;
        slotCandidates: {};
    };
    TeplLanguageChooserDialog: {
        class: Tepl.LanguageChooserDialog;
        props: TeplLanguageChooserDialogProps;
        signals: Tepl.LanguageChooserDialog.SignalSignatures;
        constructOnly: TeplLanguageChooserDialogConstructOnly;
        slotCandidates: {};
    };
    TeplLanguageChooserWidget: {
        class: Tepl.LanguageChooserWidget;
        props: TeplLanguageChooserWidgetProps;
        signals: Tepl.LanguageChooserWidget.SignalSignatures;
        constructOnly: TeplLanguageChooserWidgetConstructOnly;
        slotCandidates: {};
    };
    TeplLineColumnIndicator: {
        class: Tepl.LineColumnIndicator;
        props: TeplLineColumnIndicatorProps;
        signals: Tepl.LineColumnIndicator.SignalSignatures;
        constructOnly: TeplLineColumnIndicatorConstructOnly;
        slotCandidates: {
        'view': 'set_view';
        };
    };
    TeplNotebook: {
        class: Tepl.Notebook;
        props: TeplNotebookProps;
        signals: Tepl.Notebook.SignalSignatures;
        constructOnly: TeplNotebookConstructOnly;
        slotCandidates: {};
    };
    TeplOverwriteIndicator: {
        class: Tepl.OverwriteIndicator;
        props: TeplOverwriteIndicatorProps;
        signals: Tepl.OverwriteIndicator.SignalSignatures;
        constructOnly: TeplOverwriteIndicatorConstructOnly;
        slotCandidates: {
        'view': 'set_view';
        };
    };
    TeplPanel1: {
        class: Tepl.Panel1;
        props: TeplPanel1Props;
        signals: Tepl.Panel1.SignalSignatures;
        constructOnly: TeplPanel1ConstructOnly;
        slotCandidates: {};
    };
    TeplPanelSwitcherMenu: {
        class: Tepl.PanelSwitcherMenu;
        props: TeplPanelSwitcherMenuProps;
        signals: Tepl.PanelSwitcherMenu.SignalSignatures;
        constructOnly: TeplPanelSwitcherMenuConstructOnly;
        slotCandidates: {};
    };
    TeplPrefsDialog: {
        class: Tepl.PrefsDialog;
        props: TeplPrefsDialogProps;
        signals: Tepl.PrefsDialog.SignalSignatures;
        constructOnly: TeplPrefsDialogConstructOnly;
        slotCandidates: {};
    };
    TeplProgressInfoBar: {
        class: Tepl.ProgressInfoBar;
        props: TeplProgressInfoBarProps;
        signals: Tepl.ProgressInfoBar.SignalSignatures;
        constructOnly: TeplProgressInfoBarConstructOnly;
        slotCandidates: {};
    };
    TeplSpaceDrawerPrefs: {
        class: Tepl.SpaceDrawerPrefs;
        props: TeplSpaceDrawerPrefsProps;
        signals: Tepl.SpaceDrawerPrefs.SignalSignatures;
        constructOnly: TeplSpaceDrawerPrefsConstructOnly;
        slotCandidates: {};
    };
    TeplStatusMenuButton: {
        class: Tepl.StatusMenuButton;
        props: TeplStatusMenuButtonProps;
        signals: Tepl.StatusMenuButton.SignalSignatures;
        constructOnly: TeplStatusMenuButtonConstructOnly;
        slotCandidates: {};
    };
    TeplStatusbar: {
        class: Tepl.Statusbar;
        props: TeplStatusbarProps;
        signals: Tepl.Statusbar.SignalSignatures;
        constructOnly: TeplStatusbarConstructOnly;
        slotCandidates: {};
    };
    TeplStyleSchemeChooserFull: {
        class: Tepl.StyleSchemeChooserFull;
        props: TeplStyleSchemeChooserFullProps;
        signals: Tepl.StyleSchemeChooserFull.SignalSignatures;
        constructOnly: TeplStyleSchemeChooserFullConstructOnly;
        slotCandidates: {};
    };
    TeplStyleSchemeChooserSimple: {
        class: Tepl.StyleSchemeChooserSimple;
        props: TeplStyleSchemeChooserSimpleProps;
        signals: Tepl.StyleSchemeChooserSimple.SignalSignatures;
        constructOnly: TeplStyleSchemeChooserSimpleConstructOnly;
        slotCandidates: {};
    };
    TeplTab: {
        class: Tepl.Tab;
        props: TeplTabProps;
        signals: Tepl.Tab.SignalSignatures;
        constructOnly: TeplTabConstructOnly;
        slotCandidates: {
        'info': 'add_info_bar';
        };
    };
    TeplTabLabel: {
        class: Tepl.TabLabel;
        props: TeplTabLabelProps;
        signals: Tepl.TabLabel.SignalSignatures;
        constructOnly: TeplTabLabelConstructOnly;
        slotCandidates: {};
    };
    TeplView: {
        class: Tepl.View;
        props: TeplViewProps;
        signals: Tepl.View.SignalSignatures;
        constructOnly: TeplViewConstructOnly;
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
