/**
 * The GIR-derived widget VOCABULARY for Granite-1.0.
 *
 * GENERATED — do not edit. Provenance: Granite-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
 *
 * 26 concrete widgets, 26 declarations, 9 enum nick unions, 7 slot candidates.
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
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type Granite from './granite-1.0.js';
import type Gtk from '@girs/gtk-3.0';
import type Pango from '@girs/pango-1.0';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkButtonsTypeNick, GtkCellEditableConstructOnly, GtkCellEditableProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkEditableConstructOnly, GtkEditableProps, GtkEntryConstructOnly, GtkEntryProps, GtkEventBoxConstructOnly, GtkEventBoxProps, GtkGridConstructOnly, GtkGridProps, GtkImageConstructOnly, GtkImageProps, GtkLabelConstructOnly, GtkLabelProps, GtkMiscConstructOnly, GtkMiscProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkPanedConstructOnly, GtkPanedProps, GtkRevealerConstructOnly, GtkRevealerProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkScrolledWindowConstructOnly, GtkScrolledWindowProps, GtkTextViewConstructOnly, GtkTextViewProps, GtkToggleButtonConstructOnly, GtkToggleButtonProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GraniteCloseButtonPositionNick = 'left' | 'right';
export type GraniteCollapseModeNick = 'none' | 'left' | 'top' | 'first' | 'right' | 'bottom' | 'last';
export type GraniteServicesLogLevelNick = 'debug' | 'info' | 'notify' | 'warn' | 'error' | 'fatal';
export type GraniteSettingsColorSchemeNick = 'no-preference' | 'dark' | 'light';
export type GraniteSettingsPageStatusTypeNick = 'error' | 'offline' | 'success' | 'warning' | 'none';
export type GraniteTextStyleNick = 'title' | 'h1' | 'h2' | 'h3';
export type GraniteWidgetsDynamicNotebookTabBarBehaviorNick = 'always' | 'single' | 'never';
export type GraniteWidgetsStorageBarItemDescriptionNick = 'other' | 'audio' | 'video' | 'photo' | 'app' | 'files';
export type PangoEllipsizeModeNick = 'none' | 'start' | 'middle' | 'end';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface GraniteAccelLabelProps extends GtkGridProps {
    'accel-string'?: string | null;
    'action-name'?: string;
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteAccelLabelConstructOnly = GtkGridConstructOnly;

export interface GraniteAsyncImageProps extends GtkImageProps {
    'auto-size-request'?: boolean;
    'gicon-async'?: Gio.Icon | null;
    'load-on-realize'?: boolean;
    'size-async'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteAsyncImageConstructOnly = GtkImageConstructOnly | 'auto-size-request' | 'load-on-realize';

export interface GraniteDialogProps extends GtkDialogProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteDialogConstructOnly = GtkDialogConstructOnly;

export interface GraniteHeaderLabelProps extends GtkLabelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteHeaderLabelConstructOnly = GtkLabelConstructOnly;

export interface GraniteHyperTextViewProps extends GtkTextViewProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteHyperTextViewConstructOnly = GtkTextViewConstructOnly;

export interface GraniteMessageDialogProps extends GraniteDialogProps {
    'badge-icon'?: Gio.Icon;
    buttons?: GtkButtonsTypeNick | Gtk.ButtonsType;
    'custom-bin'?: Gtk.Bin;
    'image-icon'?: Gio.Icon;
    'primary-label'?: Gtk.Label;
    'primary-text'?: string;
    'secondary-label'?: Gtk.Label;
    'secondary-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteMessageDialogConstructOnly = GraniteDialogConstructOnly | 'buttons' | 'custom-bin' | 'primary-label' | 'secondary-label';

export interface GraniteModeSwitchProps extends GtkGridProps {
    active?: boolean;
    'primary-icon-gicon'?: Gio.Icon;
    'primary-icon-name'?: string;
    'primary-icon-tooltip-text'?: string;
    'secondary-icon-gicon'?: Gio.Icon;
    'secondary-icon-name'?: string;
    'secondary-icon-tooltip-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteModeSwitchConstructOnly = GtkGridConstructOnly;

export interface GraniteSeekBarProps extends GtkGridProps {
    'duration-label'?: Gtk.Label;
    'is-grabbing'?: boolean;
    'is-hovering'?: boolean;
    'playback-duration'?: number;
    'playback-progress'?: number;
    'progression-label'?: Gtk.Label;
    scale?: Gtk.Scale;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteSeekBarConstructOnly = GtkGridConstructOnly;

export interface GraniteSettingsSidebarProps extends GtkScrolledWindowProps {
    stack?: Gtk.Stack;
    'visible-child-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteSettingsSidebarConstructOnly = GtkScrolledWindowConstructOnly | 'stack';

export interface GraniteSwitchModelButtonProps extends GtkToggleButtonProps {
    description?: string | null;
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteSwitchModelButtonConstructOnly = GtkToggleButtonConstructOnly;

export interface GraniteValidatedEntryProps extends GtkEntryProps {
    'is-valid'?: boolean;
    'min-length'?: number;
    regex?: GLib.Regex;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteValidatedEntryConstructOnly = GtkEntryConstructOnly;

export interface GraniteWidgetsAlertViewProps extends GtkGridProps {
    description?: string;
    'icon-name'?: string;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsAlertViewConstructOnly = GtkGridConstructOnly;

export interface GraniteWidgetsAvatarProps extends GtkEventBoxProps {
    pixbuf?: GdkPixbuf.Pixbuf | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsAvatarConstructOnly = GtkEventBoxConstructOnly;

export interface GraniteWidgetsCollapsiblePanedProps extends GtkPanedProps {
    'collapse-mode'?: GraniteCollapseModeNick | Granite.CollapseMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsCollapsiblePanedConstructOnly = GtkPanedConstructOnly;

export interface GraniteWidgetsCompositedWindowProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsCompositedWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface GraniteWidgetsDatePickerProps extends GtkEntryProps, GtkBuildableProps {
    date?: GLib.DateTime;
    format?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsDatePickerConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | 'format';

export interface GraniteWidgetsDynamicNotebookProps extends GtkEventBoxProps {
    'add-button-tooltip'?: string;
    'add-button-visible'?: boolean;
    'allow-drag'?: boolean;
    'allow-duplication'?: boolean;
    'allow-new-window'?: boolean;
    'allow-pinning'?: boolean;
    'allow-restoring'?: boolean;
    current?: Granite.WidgetsTab;
    'force-left'?: boolean;
    'group-name'?: string;
    'max-restorable-tabs'?: number;
    menu?: Gtk.Menu;
    'new-tab-label'?: Granite.AccelLabel;
    'restore-tab-label'?: Granite.AccelLabel;
    'show-tabs'?: boolean;
    'tab-bar-behavior'?: GraniteWidgetsDynamicNotebookTabBarBehaviorNick | Granite.WidgetsDynamicNotebookTabBarBehavior;
    'tabs-closable'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsDynamicNotebookConstructOnly = GtkEventBoxConstructOnly | 'new-tab-label' | 'restore-tab-label';

export interface GraniteWidgetsModeButtonProps extends GtkBoxProps {
    selected?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsModeButtonConstructOnly = GtkBoxConstructOnly;

export interface GraniteWidgetsOverlayBarProps extends GtkEventBoxProps {
    active?: boolean;
    label?: string;
    overlay?: Gtk.Overlay | null;
    status?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsOverlayBarConstructOnly = GtkEventBoxConstructOnly | 'overlay';

export interface GraniteWidgetsSourceListProps extends GtkScrolledWindowProps {
    'ellipsize-mode'?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    root?: Granite.WidgetsSourceListExpandableItem;
    selected?: Granite.WidgetsSourceListItem | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsSourceListConstructOnly = GtkScrolledWindowConstructOnly;

export interface GraniteWidgetsStorageBarProps extends GtkBoxProps {
    'inner-margin-sides'?: number;
    storage?: bigint | number;
    'total-usage'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsStorageBarConstructOnly = GtkBoxConstructOnly;

export interface GraniteWidgetsTabProps extends GtkEventBoxProps {
    'close-tab-label'?: Granite.AccelLabel | null;
    'duplicate-tab-label'?: Granite.AccelLabel | null;
    'ellipsize-mode'?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    icon?: Gio.Icon | null;
    label?: string;
    menu?: Gtk.Menu;
    'new-window-label'?: Granite.AccelLabel | null;
    page?: Gtk.Widget;
    pinnable?: boolean;
    pinned?: boolean;
    'restore-data'?: string;
    tooltip?: string;
    working?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsTabConstructOnly = GtkEventBoxConstructOnly | 'close-tab-label' | 'duplicate-tab-label' | 'new-window-label';

export interface GraniteWidgetsTimePickerProps extends GtkEntryProps {
    'format-12'?: string;
    'format-24'?: string;
    time?: GLib.DateTime;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsTimePickerConstructOnly = GtkEntryConstructOnly | 'format-12' | 'format-24';

export interface GraniteWidgetsToastProps extends GtkRevealerProps {
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsToastConstructOnly = GtkRevealerConstructOnly;

export interface GraniteWidgetsWelcomeProps extends GtkEventBoxProps {
    subtitle?: string;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsWelcomeConstructOnly = GtkEventBoxConstructOnly;

export interface GraniteWidgetsWelcomeButtonProps extends GtkButtonProps {
    description?: string;
    icon?: Gtk.Image | null;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteWidgetsWelcomeButtonConstructOnly = GtkButtonConstructOnly;

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
    GraniteAccelLabel: {
        class: Granite.AccelLabel;
        props: GraniteAccelLabelProps;
        signals: Granite.AccelLabel.SignalSignatures;
        constructOnly: GraniteAccelLabelConstructOnly;
        slotCandidates: {};
    };
    GraniteAsyncImage: {
        class: Granite.AsyncImage;
        props: GraniteAsyncImageProps;
        signals: Granite.AsyncImage.SignalSignatures;
        constructOnly: GraniteAsyncImageConstructOnly;
        slotCandidates: {};
    };
    GraniteDialog: {
        class: Granite.Dialog;
        props: GraniteDialogProps;
        signals: Granite.Dialog.SignalSignatures;
        constructOnly: GraniteDialogConstructOnly;
        slotCandidates: {};
    };
    GraniteHeaderLabel: {
        class: Granite.HeaderLabel;
        props: GraniteHeaderLabelProps;
        signals: Granite.HeaderLabel.SignalSignatures;
        constructOnly: GraniteHeaderLabelConstructOnly;
        slotCandidates: {};
    };
    GraniteHyperTextView: {
        class: Granite.HyperTextView;
        props: GraniteHyperTextViewProps;
        signals: Granite.HyperTextView.SignalSignatures;
        constructOnly: GraniteHyperTextViewConstructOnly;
        slotCandidates: {};
    };
    GraniteMessageDialog: {
        class: Granite.MessageDialog;
        props: GraniteMessageDialogProps;
        signals: Granite.MessageDialog.SignalSignatures;
        constructOnly: GraniteMessageDialogConstructOnly;
        slotCandidates: {};
    };
    GraniteModeSwitch: {
        class: Granite.ModeSwitch;
        props: GraniteModeSwitchProps;
        signals: Granite.ModeSwitch.SignalSignatures;
        constructOnly: GraniteModeSwitchConstructOnly;
        slotCandidates: {};
    };
    GraniteSeekBar: {
        class: Granite.SeekBar;
        props: GraniteSeekBarProps;
        signals: Granite.SeekBar.SignalSignatures;
        constructOnly: GraniteSeekBarConstructOnly;
        slotCandidates: {
        'duration-label': 'set_duration_label';
        'progression-label': 'set_progression_label';
        'scale': 'set_scale';
        };
    };
    GraniteSettingsSidebar: {
        class: Granite.SettingsSidebar;
        props: GraniteSettingsSidebarProps;
        signals: Granite.SettingsSidebar.SignalSignatures;
        constructOnly: GraniteSettingsSidebarConstructOnly;
        slotCandidates: {};
    };
    GraniteSwitchModelButton: {
        class: Granite.SwitchModelButton;
        props: GraniteSwitchModelButtonProps;
        signals: Granite.SwitchModelButton.SignalSignatures;
        constructOnly: GraniteSwitchModelButtonConstructOnly;
        slotCandidates: {};
    };
    GraniteValidatedEntry: {
        class: Granite.ValidatedEntry;
        props: GraniteValidatedEntryProps;
        signals: Granite.ValidatedEntry.SignalSignatures;
        constructOnly: GraniteValidatedEntryConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsAlertView: {
        class: Granite.WidgetsAlertView;
        props: GraniteWidgetsAlertViewProps;
        signals: Granite.WidgetsAlertView.SignalSignatures;
        constructOnly: GraniteWidgetsAlertViewConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsAvatar: {
        class: Granite.WidgetsAvatar;
        props: GraniteWidgetsAvatarProps;
        signals: Granite.WidgetsAvatar.SignalSignatures;
        constructOnly: GraniteWidgetsAvatarConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsCollapsiblePaned: {
        class: Granite.WidgetsCollapsiblePaned;
        props: GraniteWidgetsCollapsiblePanedProps;
        signals: Granite.WidgetsCollapsiblePaned.SignalSignatures;
        constructOnly: GraniteWidgetsCollapsiblePanedConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsCompositedWindow: {
        class: Granite.WidgetsCompositedWindow;
        props: GraniteWidgetsCompositedWindowProps;
        signals: Granite.WidgetsCompositedWindow.SignalSignatures;
        constructOnly: GraniteWidgetsCompositedWindowConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsDatePicker: {
        class: Granite.WidgetsDatePicker;
        props: GraniteWidgetsDatePickerProps;
        signals: Granite.WidgetsDatePicker.SignalSignatures;
        constructOnly: GraniteWidgetsDatePickerConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsDynamicNotebook: {
        class: Granite.WidgetsDynamicNotebook;
        props: GraniteWidgetsDynamicNotebookProps;
        signals: Granite.WidgetsDynamicNotebook.SignalSignatures;
        constructOnly: GraniteWidgetsDynamicNotebookConstructOnly;
        slotCandidates: {
        'current': 'set_current';
        };
    };
    GraniteWidgetsModeButton: {
        class: Granite.WidgetsModeButton;
        props: GraniteWidgetsModeButtonProps;
        signals: Granite.WidgetsModeButton.SignalSignatures;
        constructOnly: GraniteWidgetsModeButtonConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsOverlayBar: {
        class: Granite.WidgetsOverlayBar;
        props: GraniteWidgetsOverlayBarProps;
        signals: Granite.WidgetsOverlayBar.SignalSignatures;
        constructOnly: GraniteWidgetsOverlayBarConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsSourceList: {
        class: Granite.WidgetsSourceList;
        props: GraniteWidgetsSourceListProps;
        signals: Granite.WidgetsSourceList.SignalSignatures;
        constructOnly: GraniteWidgetsSourceListConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsStorageBar: {
        class: Granite.WidgetsStorageBar;
        props: GraniteWidgetsStorageBarProps;
        signals: Granite.WidgetsStorageBar.SignalSignatures;
        constructOnly: GraniteWidgetsStorageBarConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsTab: {
        class: Granite.WidgetsTab;
        props: GraniteWidgetsTabProps;
        signals: Granite.WidgetsTab.SignalSignatures;
        constructOnly: GraniteWidgetsTabConstructOnly;
        slotCandidates: {
        'menu': 'set_menu';
        'page': 'set_page';
        };
    };
    GraniteWidgetsTimePicker: {
        class: Granite.WidgetsTimePicker;
        props: GraniteWidgetsTimePickerProps;
        signals: Granite.WidgetsTimePicker.SignalSignatures;
        constructOnly: GraniteWidgetsTimePickerConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsToast: {
        class: Granite.WidgetsToast;
        props: GraniteWidgetsToastProps;
        signals: Granite.WidgetsToast.SignalSignatures;
        constructOnly: GraniteWidgetsToastConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsWelcome: {
        class: Granite.WidgetsWelcome;
        props: GraniteWidgetsWelcomeProps;
        signals: Granite.WidgetsWelcome.SignalSignatures;
        constructOnly: GraniteWidgetsWelcomeConstructOnly;
        slotCandidates: {};
    };
    GraniteWidgetsWelcomeButton: {
        class: Granite.WidgetsWelcomeButton;
        props: GraniteWidgetsWelcomeButtonProps;
        signals: Granite.WidgetsWelcomeButton.SignalSignatures;
        constructOnly: GraniteWidgetsWelcomeButtonConstructOnly;
        slotCandidates: {
        'icon': 'set_icon';
        };
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
