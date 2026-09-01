/**
 * The GIR-derived widget VOCABULARY for Gdaui-6.0.
 *
 * GENERATED — do not edit. Provenance: Gdaui-6.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gdaui.BasicForm.paramlist Gdaui.BasicForm.xml-layout Gdaui.RawGrid.xml-layout
 *
 * 26 concrete widgets, 29 declarations, 0 enum nick unions, 0 slot candidates.
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
import type Gda from '@girs/gda-6.0';
import type Gdaui from './gdaui-6.0.js';
import type { GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkCellEditableConstructOnly, GtkCellEditableProps, GtkCellLayoutConstructOnly, GtkCellLayoutProps, GtkComboBoxConstructOnly, GtkComboBoxProps, GtkContainerConstructOnly, GtkContainerProps, GtkEditableConstructOnly, GtkEditableProps, GtkEntryConstructOnly, GtkEntryProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkToolShellConstructOnly, GtkToolShellProps, GtkToolbarConstructOnly, GtkToolbarProps, GtkTreeViewConstructOnly, GtkTreeViewProps, GtkWidgetConstructOnly, GtkWidgetProps } from '@girs/gtk-3.0/vocabulary';

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

export interface GdauiBasicFormProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default FALSE */
    'entries-auto-default'?: boolean;
    paramlist?: never;
    'xml-layout'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiBasicFormConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiCloudProps extends GtkBoxProps, GdauiDataSelectorProps, GtkBuildableProps, GtkOrientableProps {
    /** @default -1 */
    'label-column'?: number;
    /** @default 3.000000 */
    'max-scale'?: number;
    /** @default 0.800000 */
    'min-scale'?: number;
    model?: Gda.DataModel;
    /** @default -1 */
    'weight-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiCloudConstructOnly = GtkBoxConstructOnly | GdauiDataSelectorConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiComboProps extends Omit<GtkComboBoxProps, 'model'>, GdauiDataSelectorProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
    /** @default FALSE */
    'as-list'?: boolean;
    model?: Gda.DataModel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiComboConstructOnly = GtkComboBoxConstructOnly | GdauiDataSelectorConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

export interface GdauiDataEntryProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiDataEntryConstructOnly = GtkWidgetConstructOnly;

export interface GdauiDataFilterProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    'data-widget'?: Gdaui.DataProxy;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiDataFilterConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiDataProxyProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiDataProxyConstructOnly = GtkWidgetConstructOnly;

export interface GdauiDataProxyInfoProps extends GtkToolbarProps, GtkBuildableProps, GtkOrientableProps, GtkToolShellProps {
    'data-proxy'?: Gdaui.DataProxy;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiDataProxyInfoConstructOnly = GtkToolbarConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | GtkToolShellConstructOnly;

export interface GdauiDataSelectorProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiDataSelectorConstructOnly = never;

export interface GdauiEntryProps extends GtkEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
    /** @default NULL */
    prefix?: string;
    /** @default NULL */
    suffix?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiEntryConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

export interface GdauiEntryBinProps extends GtkBoxProps, GdauiDataEntryProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiEntryBinConstructOnly = GtkBoxConstructOnly | GdauiDataEntryConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiEntryBooleanProps extends GtkBoxProps, GdauiDataEntryProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiEntryBooleanConstructOnly = GtkBoxConstructOnly | GdauiDataEntryConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiEntryComboProps extends GtkBoxProps, GdauiDataEntryProps, GtkBuildableProps, GtkOrientableProps {
    /** @default FALSE */
    'set-default-if-invalid'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiEntryComboConstructOnly = GtkBoxConstructOnly | GdauiDataEntryConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiEntryCommonTimeProps extends GtkBoxProps, GdauiDataEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkOrientableProps {
    /** @default FALSE */
    'editing-canceled'?: boolean;
    type?: GObject.GType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiEntryCommonTimeConstructOnly = GtkBoxConstructOnly | GdauiDataEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiEntryDateProps extends GdauiEntryCommonTimeProps, GdauiDataEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiEntryDateConstructOnly = GdauiEntryCommonTimeConstructOnly | GdauiDataEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiEntryNoneProps extends GtkBoxProps, GdauiDataEntryProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiEntryNoneConstructOnly = GtkBoxConstructOnly | GdauiDataEntryConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiEntryNumberProps extends GtkBoxProps, GdauiDataEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkOrientableProps {
    /** @default FALSE */
    'editing-canceled'?: boolean;
    /** @default NULL */
    options?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiEntryNumberConstructOnly = GtkBoxConstructOnly | GdauiDataEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiEntryStringProps extends GtkBoxProps, GdauiDataEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkOrientableProps {
    /** @default FALSE */
    'editing-canceled'?: boolean;
    /** @default FALSE */
    multiline?: boolean;
    /** @default NULL */
    options?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiEntryStringConstructOnly = GtkBoxConstructOnly | GdauiDataEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiEntryTimeProps extends GdauiEntryCommonTimeProps, GdauiDataEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiEntryTimeConstructOnly = GdauiEntryCommonTimeConstructOnly | GdauiDataEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiEntryTimestampProps extends GdauiEntryCommonTimeProps, GdauiDataEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiEntryTimestampConstructOnly = GdauiEntryCommonTimeConstructOnly | GdauiDataEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiFormProps extends GtkBoxProps, GdauiDataProxyProps, GdauiDataSelectorProps, GtkBuildableProps, GtkOrientableProps {
    model?: Gda.DataModel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiFormConstructOnly = GtkBoxConstructOnly | GdauiDataProxyConstructOnly | GdauiDataSelectorConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'model';

export interface GdauiFormattedEntryProps extends GdauiEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
    /** @default NULL */
    format?: string;
    /** @default NULL */
    mask?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiFormattedEntryConstructOnly = GdauiEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

export interface GdauiGridProps extends GtkBoxProps, GdauiDataProxyProps, GdauiDataSelectorProps, GtkBuildableProps, GtkOrientableProps {
    model?: Gda.DataModel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiGridConstructOnly = GtkBoxConstructOnly | GdauiDataProxyConstructOnly | GdauiDataSelectorConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiLoginProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default NULL */
    dsn?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiLoginConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiNumericEntryProps extends GdauiEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
    /** @default 46 */
    'decimal-sep'?: number;
    /** @default 65535 */
    'n-decimals'?: number;
    /** @default 44 */
    'thousands-sep'?: number;
    type?: GObject.GType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiNumericEntryConstructOnly = GdauiEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

export interface GdauiProviderSelectorProps extends GdauiComboProps, GdauiDataSelectorProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiProviderSelectorConstructOnly = GdauiComboConstructOnly | GdauiDataSelectorConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

export interface GdauiRawFormProps extends GdauiBasicFormProps, GdauiDataProxyProps, GdauiDataSelectorProps, GtkBuildableProps, GtkOrientableProps {
    model?: Gda.DataModel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiRawFormConstructOnly = GdauiBasicFormConstructOnly | GdauiDataProxyConstructOnly | GdauiDataSelectorConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiRawGridProps extends Omit<GtkTreeViewProps, 'model'>, GdauiDataProxyProps, GdauiDataSelectorProps, GtkBuildableProps, GtkScrollableProps {
    /** @default FALSE */
    'info-cell-visible'?: boolean;
    model?: Gda.DataModel;
    'xml-layout'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiRawGridConstructOnly = GtkTreeViewConstructOnly | GdauiDataProxyConstructOnly | GdauiDataSelectorConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

export interface GdauiRtEditorProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Determines if the contents of the widget appears in a scrolled window or not.
     * @default TRUE
     */
    'in-scrolled-window'?: boolean;
    /**
     * If set to %TRUE, then the default text background is removed and thus the textbackground is the default widget's background.
     * @default FALSE
     */
    'no-background'?: boolean;
    /**
     * Instead of showing the formatted text, display the raw text (in the txt2tags syntax)
     * @default FALSE
     */
    'show-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiRtEditorConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GdauiServerOperationProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default FALSE */
    'hide-single-header'?: boolean;
    'server-operation'?: Gda.ServerOperation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdauiServerOperationConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'server-operation';

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
    GdauiBasicForm: {
        class: Gdaui.BasicForm;
        props: GdauiBasicFormProps;
        signals: Gdaui.BasicForm.SignalSignatures;
        constructOnly: GdauiBasicFormConstructOnly;
        slotCandidates: {};
    };
    GdauiCloud: {
        class: Gdaui.Cloud;
        props: GdauiCloudProps;
        signals: Gdaui.Cloud.SignalSignatures;
        constructOnly: GdauiCloudConstructOnly;
        slotCandidates: {};
    };
    GdauiCombo: {
        class: Gdaui.Combo;
        props: GdauiComboProps;
        signals: Gdaui.Combo.SignalSignatures;
        constructOnly: GdauiComboConstructOnly;
        slotCandidates: {};
    };
    GdauiDataFilter: {
        class: Gdaui.DataFilter;
        props: GdauiDataFilterProps;
        signals: Gdaui.DataFilter.SignalSignatures;
        constructOnly: GdauiDataFilterConstructOnly;
        slotCandidates: {};
    };
    GdauiDataProxyInfo: {
        class: Gdaui.DataProxyInfo;
        props: GdauiDataProxyInfoProps;
        signals: Gdaui.DataProxyInfo.SignalSignatures;
        constructOnly: GdauiDataProxyInfoConstructOnly;
        slotCandidates: {};
    };
    GdauiEntry: {
        class: Gdaui.Entry;
        props: GdauiEntryProps;
        signals: Gdaui.Entry.SignalSignatures;
        constructOnly: GdauiEntryConstructOnly;
        slotCandidates: {};
    };
    GdauiEntryBin: {
        class: Gdaui.EntryBin;
        props: GdauiEntryBinProps;
        signals: Gdaui.EntryBin.SignalSignatures;
        constructOnly: GdauiEntryBinConstructOnly;
        slotCandidates: {};
    };
    GdauiEntryBoolean: {
        class: Gdaui.EntryBoolean;
        props: GdauiEntryBooleanProps;
        signals: Gdaui.EntryBoolean.SignalSignatures;
        constructOnly: GdauiEntryBooleanConstructOnly;
        slotCandidates: {};
    };
    GdauiEntryCombo: {
        class: Gdaui.EntryCombo;
        props: GdauiEntryComboProps;
        signals: Gdaui.EntryCombo.SignalSignatures;
        constructOnly: GdauiEntryComboConstructOnly;
        slotCandidates: {};
    };
    GdauiEntryCommonTime: {
        class: Gdaui.EntryCommonTime;
        props: GdauiEntryCommonTimeProps;
        signals: Gdaui.EntryCommonTime.SignalSignatures;
        constructOnly: GdauiEntryCommonTimeConstructOnly;
        slotCandidates: {};
    };
    GdauiEntryDate: {
        class: Gdaui.EntryDate;
        props: GdauiEntryDateProps;
        signals: Gdaui.EntryDate.SignalSignatures;
        constructOnly: GdauiEntryDateConstructOnly;
        slotCandidates: {};
    };
    GdauiEntryNone: {
        class: Gdaui.EntryNone;
        props: GdauiEntryNoneProps;
        signals: Gdaui.EntryNone.SignalSignatures;
        constructOnly: GdauiEntryNoneConstructOnly;
        slotCandidates: {};
    };
    GdauiEntryNumber: {
        class: Gdaui.EntryNumber;
        props: GdauiEntryNumberProps;
        signals: Gdaui.EntryNumber.SignalSignatures;
        constructOnly: GdauiEntryNumberConstructOnly;
        slotCandidates: {};
    };
    GdauiEntryString: {
        class: Gdaui.EntryString;
        props: GdauiEntryStringProps;
        signals: Gdaui.EntryString.SignalSignatures;
        constructOnly: GdauiEntryStringConstructOnly;
        slotCandidates: {};
    };
    GdauiEntryTime: {
        class: Gdaui.EntryTime;
        props: GdauiEntryTimeProps;
        signals: Gdaui.EntryTime.SignalSignatures;
        constructOnly: GdauiEntryTimeConstructOnly;
        slotCandidates: {};
    };
    GdauiEntryTimestamp: {
        class: Gdaui.EntryTimestamp;
        props: GdauiEntryTimestampProps;
        signals: Gdaui.EntryTimestamp.SignalSignatures;
        constructOnly: GdauiEntryTimestampConstructOnly;
        slotCandidates: {};
    };
    GdauiForm: {
        class: Gdaui.Form;
        props: GdauiFormProps;
        signals: Gdaui.Form.SignalSignatures;
        constructOnly: GdauiFormConstructOnly;
        slotCandidates: {};
    };
    GdauiFormattedEntry: {
        class: Gdaui.FormattedEntry;
        props: GdauiFormattedEntryProps;
        signals: Gdaui.FormattedEntry.SignalSignatures;
        constructOnly: GdauiFormattedEntryConstructOnly;
        slotCandidates: {};
    };
    GdauiGrid: {
        class: Gdaui.Grid;
        props: GdauiGridProps;
        signals: Gdaui.Grid.SignalSignatures;
        constructOnly: GdauiGridConstructOnly;
        slotCandidates: {};
    };
    GdauiLogin: {
        class: Gdaui.Login;
        props: GdauiLoginProps;
        signals: Gdaui.Login.SignalSignatures;
        constructOnly: GdauiLoginConstructOnly;
        slotCandidates: {};
    };
    GdauiNumericEntry: {
        class: Gdaui.NumericEntry;
        props: GdauiNumericEntryProps;
        signals: Gdaui.NumericEntry.SignalSignatures;
        constructOnly: GdauiNumericEntryConstructOnly;
        slotCandidates: {};
    };
    GdauiProviderSelector: {
        class: Gdaui.ProviderSelector;
        props: GdauiProviderSelectorProps;
        signals: Gdaui.ProviderSelector.SignalSignatures;
        constructOnly: GdauiProviderSelectorConstructOnly;
        slotCandidates: {};
    };
    GdauiRawForm: {
        class: Gdaui.RawForm;
        props: GdauiRawFormProps;
        signals: Gdaui.RawForm.SignalSignatures;
        constructOnly: GdauiRawFormConstructOnly;
        slotCandidates: {};
    };
    GdauiRawGrid: {
        class: Gdaui.RawGrid;
        props: GdauiRawGridProps;
        signals: Gdaui.RawGrid.SignalSignatures;
        constructOnly: GdauiRawGridConstructOnly;
        slotCandidates: {};
    };
    GdauiRtEditor: {
        class: Gdaui.RtEditor;
        props: GdauiRtEditorProps;
        signals: Gdaui.RtEditor.SignalSignatures;
        constructOnly: GdauiRtEditorConstructOnly;
        slotCandidates: {};
    };
    GdauiServerOperation: {
        class: Gdaui.ServerOperation;
        props: GdauiServerOperationProps;
        signals: Gdaui.ServerOperation.SignalSignatures;
        constructOnly: GdauiServerOperationConstructOnly;
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
