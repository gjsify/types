/**
 * The GIR-derived widget VOCABULARY for GcrUi-3.
 *
 * GENERATED — do not edit. Provenance: GcrUi-3 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — inlined base(s) from a namespace with no surface: Gcr.Prompt — prop(s) no TypeScript value satisfies: GcrUi.TreeSelector.columns
 *
 * 9 concrete widgets, 10 declarations (1 inlined from a namespace with no surface), 0 enum nick unions, 0 slot candidates.
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

import type Gck from '@girs/gck-1';
import type Gcr from '@girs/gcr-3';
import type GcrUi from './gcrui-3.js';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkCellEditableConstructOnly, GtkCellEditableProps, GtkCellLayoutConstructOnly, GtkCellLayoutProps, GtkComboBoxConstructOnly, GtkComboBoxProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkTreeViewConstructOnly, GtkTreeViewProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** A widget that can be used to display a certificate. */
export interface GcrCertificateWidgetProps extends GtkBinProps, GtkBuildableProps {
    attributes?: Gck.Attributes | null;
    certificate?: Gcr.Certificate | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GcrCertificateWidgetConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A widget that can be used to select a certificate or key. */
export interface GcrComboSelectorProps extends GtkComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
    /** The collection which contains the objects to display in the selector. */
    collection?: Gcr.Collection;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GcrComboSelectorConstructOnly = GtkComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly | 'collection';

/** A button which imports keys and certificates. */
export interface GcrImportButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GcrImportButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** A key widget and renderer A key widget can be used to display a RSA, DSA or EC key. */
export interface GcrKeyWidgetProps extends GtkBinProps, GtkBuildableProps {
    attributes?: Gck.Attributes | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GcrKeyWidgetConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A selector widget to select 1 or more certificates or keys from a list. */
export interface GcrListSelectorProps extends GtkTreeViewProps, GtkBuildableProps, GtkScrollableProps {
    /** The collection which contains the objects to display in the selector. */
    collection?: Gcr.Collection;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GcrListSelectorConstructOnly = GtkTreeViewConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly | 'collection';

/** A prompt displayed to the user. */
export interface GcrPromptProps {
    /** The string handle of the caller's window. */
    'caller-window'?: string;
    /** The label for the cancel button in the prompt. */
    'cancel-label'?: string;
    /** Whether the additional choice is chosen or not. */
    'choice-chosen'?: boolean;
    /** The label for the additional choice. */
    'choice-label'?: string;
    /** The label for the continue button in the prompt. */
    'continue-label'?: string;
    /** The detailed description of the prompt. */
    description?: string;
    /** The prompt message for the user. */
    message?: string;
    /** Whether the prompt will prompt for a new password. */
    'password-new'?: boolean;
    /** The title of the prompt. */
    title?: string;
    /** A prompt warning displayed on the prompt, or %NULL for no warning. */
    warning?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GcrPromptConstructOnly = never;

/** A [iface@Gcr.Prompt] implementation which shows a GTK dialog. */
export interface GcrPromptDialogProps extends GtkDialogProps, Omit<GcrPromptProps, 'title'>, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GcrPromptDialogConstructOnly = GtkDialogConstructOnly | GcrPromptConstructOnly | GtkBuildableConstructOnly;

/** A tree selector can be used to select certificates or keys. */
export interface GcrTreeSelectorProps extends GtkTreeViewProps, GtkBuildableProps, GtkScrollableProps {
    /** The collection which contains the objects to display in the selector. */
    collection?: Gcr.Collection;
    /** The columns to use to display the objects. */
    columns?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GcrTreeSelectorConstructOnly = GtkTreeViewConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly | 'collection' | 'columns';

/** This widget displays a set of unlock options for the user to select. */
export interface GcrUnlockOptionsWidgetProps extends GtkBinProps, GtkBuildableProps {
    choice?: string;
    ttl?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GcrUnlockOptionsWidgetConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A viewer widget which can display certificates and keys that are located in files. */
export interface GcrViewerWidgetProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** Display name for data being displayed. */
    'display-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GcrViewerWidgetConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

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
    GcrCertificateWidget: {
        class: GcrUi.CertificateWidget;
        props: GcrCertificateWidgetProps;
        signals: GcrUi.CertificateWidget.SignalSignatures;
        constructOnly: GcrCertificateWidgetConstructOnly;
        slotCandidates: {};
    };
    GcrComboSelector: {
        class: GcrUi.ComboSelector;
        props: GcrComboSelectorProps;
        signals: GcrUi.ComboSelector.SignalSignatures;
        constructOnly: GcrComboSelectorConstructOnly;
        slotCandidates: {};
    };
    GcrImportButton: {
        class: GcrUi.ImportButton;
        props: GcrImportButtonProps;
        signals: GcrUi.ImportButton.SignalSignatures;
        constructOnly: GcrImportButtonConstructOnly;
        slotCandidates: {};
    };
    GcrKeyWidget: {
        class: GcrUi.KeyWidget;
        props: GcrKeyWidgetProps;
        signals: GcrUi.KeyWidget.SignalSignatures;
        constructOnly: GcrKeyWidgetConstructOnly;
        slotCandidates: {};
    };
    GcrListSelector: {
        class: GcrUi.ListSelector;
        props: GcrListSelectorProps;
        signals: GcrUi.ListSelector.SignalSignatures;
        constructOnly: GcrListSelectorConstructOnly;
        slotCandidates: {};
    };
    GcrPromptDialog: {
        class: GcrUi.PromptDialog;
        props: GcrPromptDialogProps;
        signals: GcrUi.PromptDialog.SignalSignatures;
        constructOnly: GcrPromptDialogConstructOnly;
        slotCandidates: {};
    };
    GcrTreeSelector: {
        class: GcrUi.TreeSelector;
        props: GcrTreeSelectorProps;
        signals: GcrUi.TreeSelector.SignalSignatures;
        constructOnly: GcrTreeSelectorConstructOnly;
        slotCandidates: {};
    };
    GcrUnlockOptionsWidget: {
        class: GcrUi.UnlockOptionsWidget;
        props: GcrUnlockOptionsWidgetProps;
        signals: GcrUi.UnlockOptionsWidget.SignalSignatures;
        constructOnly: GcrUnlockOptionsWidgetConstructOnly;
        slotCandidates: {};
    };
    GcrViewerWidget: {
        class: GcrUi.ViewerWidget;
        props: GcrViewerWidgetProps;
        signals: GcrUi.ViewerWidget.SignalSignatures;
        constructOnly: GcrViewerWidgetConstructOnly;
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
