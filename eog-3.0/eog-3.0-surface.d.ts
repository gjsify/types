/**
 * The GIR-derived widget VOCABULARY for Eog-3.0.
 *
 * GENERATED — do not edit. Provenance: Eog-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
 *
 * 9 concrete widgets, 9 declarations, 13 enum nick unions, 3 slot candidates.
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

import type Eog from './eog-3.0.js';
import type Gdk from '@girs/gdk-3.0';
import type Gtk from '@girs/gtk-3.0';
import type { GtkApplicationWindowConstructOnly, GtkApplicationWindowProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkCellLayoutConstructOnly, GtkCellLayoutProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkFileChooserConstructOnly, GtkFileChooserDialogConstructOnly, GtkFileChooserDialogProps, GtkFileChooserProps, GtkIconViewConstructOnly, GtkIconViewProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkOverlayConstructOnly, GtkOverlayProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkStatusbarConstructOnly, GtkStatusbarProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type EogImageMetadataStatusNick = 'not-read' | 'not-available' | 'ready';
export type EogImageStatusNick = 'unknown' | 'loading' | 'loaded' | 'saving' | 'failed';
export type EogJobPriorityNick = 'priority-high' | 'priority-medium' | 'priority-low' | 'n-priorities';
export type EogListStoreColumnNick = 'thumbnail' | 'thumb-set' | 'eog-image' | 'eog-job' | 'num-columns';
export type EogThumbNavModeNick = 'one-row' | 'one-column' | 'multiple-rows' | 'multiple-columns';
export type EogThumbViewSelectionChangeNick = 'current' | 'left' | 'right' | 'first' | 'last' | 'random';
export type EogTransformTypeNick = 'none' | 'rot-90' | 'rot-180' | 'rot-270' | 'flip-horizontal' | 'flip-vertical' | 'transpose' | 'transverse';
export type EogTransparencyStyleNick = 'background' | 'checked' | 'color';
export type EogUCTypeNick = 'string' | 'filename' | 'counter' | 'comment' | 'date' | 'time' | 'day' | 'month' | 'year' | 'hour' | 'minute' | 'second' | 'end';
export type EogWindowErrorNick = 'control-not-found' | 'ui-not-found' | 'no-persist-file-interface' | 'io' | 'trash-not-found' | 'generic' | 'unknown';
export type EogWindowGalleryPosNick = 'bottom' | 'left' | 'top' | 'right';
export type EogWindowModeNick = 'unknown' | 'normal' | 'fullscreen' | 'slideshow';
export type EogZoomModeNick = 'free' | 'shrink-to-fit';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface EogDetailsDialogProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EogDetailsDialogConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface EogFileChooserProps extends GtkFileChooserDialogProps, GtkBuildableProps, GtkFileChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EogFileChooserConstructOnly = GtkFileChooserDialogConstructOnly | GtkBuildableConstructOnly | GtkFileChooserConstructOnly;

export interface EogRemotePresenterProps extends GtkWindowProps, GtkBuildableProps {
    'next-action'?: string;
    'prev-action'?: string;
    thumbview?: Eog.ThumbView;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EogRemotePresenterConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly | 'next-action' | 'prev-action' | 'thumbview';

export interface EogScrollViewProps extends GtkOverlayProps, GtkBuildableProps, GtkScrollableProps {
    /** If %TRUE the displayed image will be filtered in a second pass while being zoomed in. */
    'antialiasing-in'?: boolean;
    /** If %TRUE the displayed image will be filtered in a second pass while being zoomed out. */
    'antialiasing-out'?: boolean;
    /** This is the default background color used for painting the background of the image view. */
    'background-color'?: Gdk.RGBA;
    /** This is the currently display #EogImage. */
    image?: Eog.Image;
    /** If %TRUE the scrollwheel will zoom the view, otherwise it will be used for scrolling a zoomed image. */
    'scrollwheel-zoom'?: boolean;
    /** This is the color used to fill the transparent parts of an image if #EogScrollView:transparency-style is set to %EOG_TRANSP_COLOR. */
    'transparency-color'?: Gdk.RGBA;
    /** Determines how to fill the shown image's transparent areas. */
    'transparency-style'?: EogTransparencyStyleNick | Eog.TransparencyStyle;
    'use-background-color'?: boolean;
    'zoom-mode'?: EogZoomModeNick | Eog.ZoomMode;
    /** The current zoom factor is multiplied with this value + 1.0 when scrolling with the scrollwheel to determine the next zoom factor. */
    'zoom-multiplier'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EogScrollViewConstructOnly = GtkOverlayConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

export interface EogSidebarProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    'current-page'?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EogSidebarConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface EogStatusbarProps extends GtkStatusbarProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EogStatusbarConstructOnly = GtkStatusbarConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface EogThumbNavProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    mode?: number;
    'show-buttons'?: boolean;
    thumbview?: Eog.ThumbView;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EogThumbNavConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'thumbview';

export interface EogThumbViewProps extends GtkIconViewProps, GtkBuildableProps, GtkCellLayoutProps, GtkOrientableProps, GtkScrollableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EogThumbViewConstructOnly = GtkIconViewConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly | GtkOrientableConstructOnly | GtkScrollableConstructOnly;

export interface EogWindowProps extends GtkApplicationWindowProps, GtkBuildableProps {
    /** Determines the position of the image gallery in the window relative to the image. */
    'gallery-position'?: EogWindowGalleryPosNick | Eog.WindowGalleryPos;
    /** If %TRUE the gallery will be resizable by the user otherwise it will be in single column/row mode. */
    'gallery-resizable'?: boolean;
    /** A bitwise OR of #EogStartupFlags elements, indicating how the window should behave upon creation. */
    'startup-flags'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EogWindowConstructOnly = GtkApplicationWindowConstructOnly | GtkBuildableConstructOnly | 'startup-flags';

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
    EogDetailsDialog: {
        class: Eog.DetailsDialog;
        props: EogDetailsDialogProps;
        signals: Eog.DetailsDialog.SignalSignatures;
        constructOnly: EogDetailsDialogConstructOnly;
        slotCandidates: {};
    };
    EogFileChooser: {
        class: Eog.FileChooser;
        props: EogFileChooserProps;
        signals: Eog.FileChooser.SignalSignatures;
        constructOnly: EogFileChooserConstructOnly;
        slotCandidates: {};
    };
    EogRemotePresenter: {
        class: Eog.RemotePresenter;
        props: EogRemotePresenterProps;
        signals: Eog.RemotePresenter.SignalSignatures;
        constructOnly: EogRemotePresenterConstructOnly;
        slotCandidates: {};
    };
    EogScrollView: {
        class: Eog.ScrollView;
        props: EogScrollViewProps;
        signals: Eog.ScrollView.SignalSignatures;
        constructOnly: EogScrollViewConstructOnly;
        slotCandidates: {
        'popup': 'set_popup';
        };
    };
    EogSidebar: {
        class: Eog.Sidebar;
        props: EogSidebarProps;
        signals: Eog.Sidebar.SignalSignatures;
        constructOnly: EogSidebarConstructOnly;
        slotCandidates: {
        'page': 'set_page';
        };
    };
    EogStatusbar: {
        class: Eog.Statusbar;
        props: EogStatusbarProps;
        signals: Eog.Statusbar.SignalSignatures;
        constructOnly: EogStatusbarConstructOnly;
        slotCandidates: {};
    };
    EogThumbNav: {
        class: Eog.ThumbNav;
        props: EogThumbNavProps;
        signals: Eog.ThumbNav.SignalSignatures;
        constructOnly: EogThumbNavConstructOnly;
        slotCandidates: {};
    };
    EogThumbView: {
        class: Eog.ThumbView;
        props: EogThumbViewProps;
        signals: Eog.ThumbView.SignalSignatures;
        constructOnly: EogThumbViewConstructOnly;
        slotCandidates: {
        'thumbnail-popup': 'set_thumbnail_popup';
        };
    };
    EogWindow: {
        class: Eog.Window;
        props: EogWindowProps;
        signals: Eog.Window.SignalSignatures;
        constructOnly: EogWindowConstructOnly;
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
