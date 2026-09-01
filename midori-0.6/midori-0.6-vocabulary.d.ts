/**
 * The GIR-derived widget VOCABULARY for Midori-0.6.
 *
 * GENERATED — do not edit. Provenance: Midori-0.6 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
 *
 * 15 concrete widgets, 15 declarations, 3 enum nick unions, 7 slot candidates.
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
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type Midori from './midori-0.6.js';
import type WebKit2 from '@girs/webkit2-4.0';
import type cairo from '@girs/cairo-1.0';
import type { GtkActionBarConstructOnly, GtkActionBarProps, GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkApplicationWindowConstructOnly, GtkApplicationWindowProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkCellEditableConstructOnly, GtkCellEditableProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkEditableConstructOnly, GtkEditableProps, GtkEntryConstructOnly, GtkEntryProps, GtkEventBoxConstructOnly, GtkEventBoxProps, GtkImageConstructOnly, GtkImageProps, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkMiscConstructOnly, GtkMiscProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkStatusbarConstructOnly, GtkStatusbarProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/vocabulary';
import type { WebKitWebViewBaseConstructOnly, WebKitWebViewBaseProps, WebKitWebViewConstructOnly, WebKitWebViewProps } from '@girs/webkit2-4.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type MidoriDebugFlagsNick = 'none' | 'history';
export type MidoriProxyTypeNick = 'automatic' | 'http' | 'none';
export type MidoriStartupTypeNick = 'speed-dial' | 'homepage' | 'last-open-pages' | 'delayed-pages';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface MidoriBrowserProps extends GtkApplicationWindowProps {
    'is-fullscreen'?: boolean;
    'is-loading'?: boolean;
    'is-locked'?: boolean;
    tab?: Midori.Tab | null;
    trash?: Gio.ListStore;
    uri?: string | null;
    'web-context'?: WebKit2.WebContext;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriBrowserConstructOnly = GtkApplicationWindowConstructOnly;

export interface MidoriClearPrivateDataProps extends GtkDialogProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriClearPrivateDataConstructOnly = GtkDialogConstructOnly;

export interface MidoriDownloadButtonProps extends GtkButtonProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriDownloadButtonConstructOnly = GtkButtonConstructOnly;

export interface MidoriDownloadRowProps extends GtkListBoxRowProps {
    item?: Midori.DownloadItem;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriDownloadRowConstructOnly = GtkListBoxRowConstructOnly;

export interface MidoriFaviconProps extends GtkImageProps {
    surface?: cairo.Surface;
    uri?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriFaviconConstructOnly = GtkImageConstructOnly;

export interface MidoriLabelWidgetProps extends GtkBoxProps {
    label?: Gtk.Label;
    title?: string | null;
    widget?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriLabelWidgetConstructOnly = GtkBoxConstructOnly;

export interface MidoriNavigationbarProps extends GtkActionBarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriNavigationbarConstructOnly = GtkActionBarConstructOnly;

export interface MidoriNetworkCheckProps extends GtkActionBarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriNetworkCheckConstructOnly = GtkActionBarConstructOnly;

export interface MidoriPreferencesProps extends GtkDialogProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriPreferencesConstructOnly = GtkDialogConstructOnly;

export interface MidoriStatusbarProps extends GtkStatusbarProps {
    label?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriStatusbarConstructOnly = GtkStatusbarConstructOnly;

export interface MidoriSuggestionRowProps extends GtkListBoxRowProps {
    item?: Midori.DatabaseItem;
    key?: string | null;
    location?: string | null;
    regex?: GLib.Regex | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriSuggestionRowConstructOnly = GtkListBoxRowConstructOnly;

export interface MidoriSwitcherProps extends GtkBoxProps {
    'show-close-buttons'?: boolean;
    stack?: Gtk.Stack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriSwitcherConstructOnly = GtkBoxConstructOnly;

export interface MidoriTabProps extends WebKitWebViewProps {
    'can-go-back'?: boolean;
    'can-go-forward'?: boolean;
    color?: string | null;
    'display-title'?: string;
    'display-uri'?: string;
    item?: Midori.DatabaseItem | null;
    'link-uri'?: string;
    pinned?: boolean;
    progress?: number;
    secure?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriTabConstructOnly = WebKitWebViewConstructOnly;

export interface MidoriTallyProps extends GtkEventBoxProps {
    active?: boolean;
    'show-close'?: boolean;
    tab?: Midori.Tab;
    title?: string | null;
    uri?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriTallyConstructOnly = GtkEventBoxConstructOnly;

export interface MidoriUrlbarProps extends GtkEntryProps {
    key?: string | null;
    location?: string | null;
    regex?: GLib.Regex | null;
    secure?: boolean;
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MidoriUrlbarConstructOnly = GtkEntryConstructOnly;

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
    MidoriBrowser: {
        class: Midori.Browser;
        props: MidoriBrowserProps;
        signals: Midori.Browser.SignalSignatures;
        constructOnly: MidoriBrowserConstructOnly;
        slotCandidates: {
        'button': 'add_button';
        'panel': 'add_panel';
        'tab': 'set_tab';
        };
    };
    MidoriClearPrivateData: {
        class: Midori.ClearPrivateData;
        props: MidoriClearPrivateDataProps;
        signals: Midori.ClearPrivateData.SignalSignatures;
        constructOnly: MidoriClearPrivateDataConstructOnly;
        slotCandidates: {};
    };
    MidoriDownloadButton: {
        class: Midori.DownloadButton;
        props: MidoriDownloadButtonProps;
        signals: Midori.DownloadButton.SignalSignatures;
        constructOnly: MidoriDownloadButtonConstructOnly;
        slotCandidates: {};
    };
    MidoriDownloadRow: {
        class: Midori.DownloadRow;
        props: MidoriDownloadRowProps;
        signals: Midori.DownloadRow.SignalSignatures;
        constructOnly: MidoriDownloadRowConstructOnly;
        slotCandidates: {};
    };
    MidoriFavicon: {
        class: Midori.Favicon;
        props: MidoriFaviconProps;
        signals: Midori.Favicon.SignalSignatures;
        constructOnly: MidoriFaviconConstructOnly;
        slotCandidates: {};
    };
    MidoriLabelWidget: {
        class: Midori.LabelWidget;
        props: MidoriLabelWidgetProps;
        signals: Midori.LabelWidget.SignalSignatures;
        constructOnly: MidoriLabelWidgetConstructOnly;
        slotCandidates: {
        'label': 'set_label';
        'widget': 'set_widget';
        };
    };
    MidoriNavigationbar: {
        class: Midori.Navigationbar;
        props: MidoriNavigationbarProps;
        signals: Midori.Navigationbar.SignalSignatures;
        constructOnly: MidoriNavigationbarConstructOnly;
        slotCandidates: {};
    };
    MidoriNetworkCheck: {
        class: Midori.NetworkCheck;
        props: MidoriNetworkCheckProps;
        signals: Midori.NetworkCheck.SignalSignatures;
        constructOnly: MidoriNetworkCheckConstructOnly;
        slotCandidates: {};
    };
    MidoriPreferences: {
        class: Midori.Preferences;
        props: MidoriPreferencesProps;
        signals: Midori.Preferences.SignalSignatures;
        constructOnly: MidoriPreferencesConstructOnly;
        slotCandidates: {};
    };
    MidoriStatusbar: {
        class: Midori.Statusbar;
        props: MidoriStatusbarProps;
        signals: Midori.Statusbar.SignalSignatures;
        constructOnly: MidoriStatusbarConstructOnly;
        slotCandidates: {};
    };
    MidoriSuggestionRow: {
        class: Midori.SuggestionRow;
        props: MidoriSuggestionRowProps;
        signals: Midori.SuggestionRow.SignalSignatures;
        constructOnly: MidoriSuggestionRowConstructOnly;
        slotCandidates: {};
    };
    MidoriSwitcher: {
        class: Midori.Switcher;
        props: MidoriSwitcherProps;
        signals: Midori.Switcher.SignalSignatures;
        constructOnly: MidoriSwitcherConstructOnly;
        slotCandidates: {
        'stack': 'set_stack';
        };
    };
    MidoriTab: {
        class: Midori.Tab;
        props: MidoriTabProps;
        signals: Midori.Tab.SignalSignatures;
        constructOnly: MidoriTabConstructOnly;
        slotCandidates: {};
    };
    MidoriTally: {
        class: Midori.Tally;
        props: MidoriTallyProps;
        signals: Midori.Tally.SignalSignatures;
        constructOnly: MidoriTallyConstructOnly;
        slotCandidates: {
        'tab': 'set_tab';
        };
    };
    MidoriUrlbar: {
        class: Midori.Urlbar;
        props: MidoriUrlbarProps;
        signals: Midori.Urlbar.SignalSignatures;
        constructOnly: MidoriUrlbarConstructOnly;
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
