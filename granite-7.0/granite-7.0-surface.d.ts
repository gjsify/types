/**
 * The GIR-derived widget VOCABULARY for Granite-7.0.
 *
 * GENERATED — do not edit. Provenance: Granite-7.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
 *
 * 19 concrete widgets, 19 declarations, 6 enum nick unions, 6 slot candidates.
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
import type Granite from './granite-7.0.js';
import type Gtk from '@girs/gtk-4.0';
import type Pango from '@girs/pango-1.0';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkAccessibleTextConstructOnly, GtkAccessibleTextProps, GtkActionableConstructOnly, GtkActionableProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkButtonsTypeNick, GtkCellEditableConstructOnly, GtkCellEditableProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkDialogConstructOnly, GtkDialogProps, GtkEditableConstructOnly, GtkEditableProps, GtkEntryConstructOnly, GtkEntryProps, GtkNativeConstructOnly, GtkNativeProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkRootConstructOnly, GtkRootProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkShortcutManagerConstructOnly, GtkShortcutManagerProps, GtkTextViewConstructOnly, GtkTextViewProps, GtkToggleButtonConstructOnly, GtkToggleButtonProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-4.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GraniteBoxSpacingNick = 'none' | 'half' | 'single' | 'double' | 'linked';
export type GraniteHeaderLabelSizeNick = 'h1' | 'h2' | 'h3' | 'h4';
export type GraniteSettingsColorSchemeNick = 'no-preference' | 'dark' | 'light';
export type GraniteSettingsPageStatusTypeNick = 'error' | 'offline' | 'success' | 'warning' | 'none';
export type GraniteToastDismissReasonNick = 'expired' | 'closed' | 'withdrawn';
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

export interface GraniteAccelLabelProps extends GtkBoxProps {
    'accel-string'?: string | null;
    'action-name'?: string;
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteAccelLabelConstructOnly = GtkBoxConstructOnly;

export interface GraniteBackButtonProps extends Omit<GtkButtonProps, 'label'> {
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteBackButtonConstructOnly = GtkButtonConstructOnly;

export interface GraniteBinProps extends GtkWidgetProps {
    child?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteBinConstructOnly = GtkWidgetConstructOnly;

export interface GraniteBoxProps extends GtkBoxProps {
    'child-spacing'?: GraniteBoxSpacingNick | Granite.BoxSpacing;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteBoxConstructOnly = GtkBoxConstructOnly;

export interface GraniteDatePickerProps extends GtkEntryProps, GtkBuildableProps {
    date?: GLib.DateTime;
    format?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteDatePickerConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | 'format';

export interface GraniteDialogProps extends GtkDialogProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteDialogConstructOnly = GtkDialogConstructOnly;

export interface GraniteHeaderLabelProps extends GtkWidgetProps {
    /** @since 7.8.0 */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    label?: string;
    /** @since 7.4.0 */
    'mnemonic-widget'?: Gtk.Widget | null;
    /** @since 7.1.0 */
    'secondary-text'?: string | null;
    /** @since 7.7.0 */
    size?: GraniteHeaderLabelSizeNick | Granite.HeaderLabelSize;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteHeaderLabelConstructOnly = GtkWidgetConstructOnly;

export interface GraniteHyperTextViewProps extends GtkTextViewProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteHyperTextViewConstructOnly = GtkTextViewConstructOnly;

export interface GraniteListItemProps extends GtkWidgetProps {
    child?: Gtk.Widget | null;
    description?: string | null;
    /** @since 7.8.0 */
    'menu-model'?: Gio.MenuModel | null;
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteListItemConstructOnly = GtkWidgetConstructOnly;

export interface GraniteMessageDialogProps extends GraniteDialogProps {
    'badge-icon'?: Gio.Icon;
    buttons?: GtkButtonsTypeNick | Gtk.ButtonsType;
    'custom-bin'?: Gtk.Box;
    'image-icon'?: Gio.Icon;
    'primary-label'?: Gtk.Label;
    'primary-text'?: string;
    'secondary-label'?: Gtk.Label;
    'secondary-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteMessageDialogConstructOnly = GraniteDialogConstructOnly | 'buttons' | 'custom-bin' | 'primary-label' | 'secondary-label';

export interface GraniteModeSwitchProps extends GtkBoxProps {
    active?: boolean;
    'primary-icon-gicon'?: Gio.Icon;
    'primary-icon-name'?: string;
    'primary-icon-tooltip-text'?: string;
    'secondary-icon-gicon'?: Gio.Icon;
    'secondary-icon-name'?: string;
    'secondary-icon-tooltip-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteModeSwitchConstructOnly = GtkBoxConstructOnly;

export interface GraniteOverlayBarProps extends GtkWidgetProps {
    active?: boolean;
    label?: string;
    overlay?: Gtk.Overlay | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteOverlayBarConstructOnly = GtkWidgetConstructOnly | 'overlay';

export interface GranitePlaceholderProps extends GtkWidgetProps {
    description?: string;
    icon?: Gio.Icon;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GranitePlaceholderConstructOnly = GtkWidgetConstructOnly;

export interface GraniteSettingsSidebarProps extends GtkWidgetProps {
    stack?: Gtk.Stack;
    'visible-child-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteSettingsSidebarConstructOnly = GtkWidgetConstructOnly | 'stack';

export interface GraniteSwitchModelButtonProps extends GtkToggleButtonProps {
    description?: string | null;
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteSwitchModelButtonConstructOnly = GtkToggleButtonConstructOnly;

export interface GraniteTimePickerProps extends GtkEntryProps {
    'format-12'?: string;
    'format-24'?: string;
    time?: GLib.DateTime;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteTimePickerConstructOnly = GtkEntryConstructOnly | 'format-12' | 'format-24';

export interface GraniteToastProps extends GtkWidgetProps {
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteToastConstructOnly = GtkWidgetConstructOnly;

export interface GraniteToolBoxProps extends GtkWidgetProps, GtkAccessibleProps {
    content?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteToolBoxConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly;

export interface GraniteValidatedEntryProps extends GtkEntryProps {
    'is-valid'?: boolean;
    'min-length'?: number;
    regex?: GLib.Regex;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GraniteValidatedEntryConstructOnly = GtkEntryConstructOnly;

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
    GraniteBackButton: {
        class: Granite.BackButton;
        props: GraniteBackButtonProps;
        signals: Granite.BackButton.SignalSignatures;
        constructOnly: GraniteBackButtonConstructOnly;
        slotCandidates: {};
    };
    GraniteBin: {
        class: Granite.Bin;
        props: GraniteBinProps;
        signals: Granite.Bin.SignalSignatures;
        constructOnly: GraniteBinConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    GraniteBox: {
        class: Granite.Box;
        props: GraniteBoxProps;
        signals: Granite.Box.SignalSignatures;
        constructOnly: GraniteBoxConstructOnly;
        slotCandidates: {};
    };
    GraniteDatePicker: {
        class: Granite.DatePicker;
        props: GraniteDatePickerProps;
        signals: Granite.DatePicker.SignalSignatures;
        constructOnly: GraniteDatePickerConstructOnly;
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
        slotCandidates: {
        'mnemonic': 'set_mnemonic_widget';
        };
    };
    GraniteHyperTextView: {
        class: Granite.HyperTextView;
        props: GraniteHyperTextViewProps;
        signals: Granite.HyperTextView.SignalSignatures;
        constructOnly: GraniteHyperTextViewConstructOnly;
        slotCandidates: {};
    };
    GraniteListItem: {
        class: Granite.ListItem;
        props: GraniteListItemProps;
        signals: Granite.ListItem.SignalSignatures;
        constructOnly: GraniteListItemConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
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
    GraniteOverlayBar: {
        class: Granite.OverlayBar;
        props: GraniteOverlayBarProps;
        signals: Granite.OverlayBar.SignalSignatures;
        constructOnly: GraniteOverlayBarConstructOnly;
        slotCandidates: {};
    };
    GranitePlaceholder: {
        class: Granite.Placeholder;
        props: GranitePlaceholderProps;
        signals: Granite.Placeholder.SignalSignatures;
        constructOnly: GranitePlaceholderConstructOnly;
        slotCandidates: {};
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
    GraniteTimePicker: {
        class: Granite.TimePicker;
        props: GraniteTimePickerProps;
        signals: Granite.TimePicker.SignalSignatures;
        constructOnly: GraniteTimePickerConstructOnly;
        slotCandidates: {};
    };
    GraniteToast: {
        class: Granite.Toast;
        props: GraniteToastProps;
        signals: Granite.Toast.SignalSignatures;
        constructOnly: GraniteToastConstructOnly;
        slotCandidates: {};
    };
    GraniteToolBox: {
        class: Granite.ToolBox;
        props: GraniteToolBoxProps;
        signals: Granite.ToolBox.SignalSignatures;
        constructOnly: GraniteToolBoxConstructOnly;
        slotCandidates: {
        'bottom': 'add_bottom_bar';
        'content': 'set_content';
        'top': 'add_top_bar';
        };
    };
    GraniteValidatedEntry: {
        class: Granite.ValidatedEntry;
        props: GraniteValidatedEntryProps;
        signals: Granite.ValidatedEntry.SignalSignatures;
        constructOnly: GraniteValidatedEntryConstructOnly;
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
