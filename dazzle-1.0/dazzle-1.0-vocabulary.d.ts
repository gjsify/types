/**
 * The GIR-derived widget VOCABULARY for Dazzle-1.0.
 *
 * GENERATED — do not edit. Provenance: Dazzle-1.0 — library 3.44.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
 *
 * 64 concrete widgets, 68 declarations, 8 enum nick unions, 6 slot candidates.
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

import type Dazzle from './dazzle-1.0.js';
import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type Pango from '@girs/pango-1.0';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkApplicationWindowConstructOnly, GtkApplicationWindowProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkCellEditableConstructOnly, GtkCellEditableProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkDrawingAreaConstructOnly, GtkDrawingAreaProps, GtkEditableConstructOnly, GtkEditableProps, GtkEntryConstructOnly, GtkEntryProps, GtkEventBoxConstructOnly, GtkEventBoxProps, GtkFileChooserActionNick, GtkLabelConstructOnly, GtkLabelProps, GtkListBoxConstructOnly, GtkListBoxProps, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkMenuButtonConstructOnly, GtkMenuButtonProps, GtkMiscConstructOnly, GtkMiscProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkOrientationNick, GtkPopoverConstructOnly, GtkPopoverProps, GtkPositionTypeNick, GtkScrollableConstructOnly, GtkScrollableProps, GtkScrolledWindowConstructOnly, GtkScrolledWindowProps, GtkSelectionModeNick, GtkShortcutTypeNick, GtkStackConstructOnly, GtkStackProps, GtkTextDirectionNick, GtkToggleButtonConstructOnly, GtkToggleButtonProps, GtkTreeViewConstructOnly, GtkTreeViewProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type DzlAnimationModeNick = 'linear' | 'ease-in-quad' | 'ease-in-out-quad' | 'ease-out-quad' | 'ease-in-cubic' | 'ease-out-cubic' | 'ease-in-out-cubic';
export type DzlDockRevealerTransitionTypeNick = 'none' | 'slide-right' | 'slide-left' | 'slide-up' | 'slide-down';
export type DzlShortcutMatchNick = 'none' | 'equal' | 'partial';
export type DzlSliderPositionNick = 'none' | 'top' | 'right' | 'bottom' | 'left';
export type DzlThreeGridColumnNick = 'left' | 'center' | 'right';
export type DzlTitlebarAnimationNick = 'hidden' | 'showing' | 'shown' | 'hiding';
export type DzlTreeDropPositionNick = 'into' | 'before' | 'after';
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

export interface DzlApplicationWindowProps extends GtkApplicationWindowProps, GtkBuildableProps {
    /**
     * The "fullscreen" property denotes if the window is in the fullscreen state.
     * @default FALSE
     */
    fullscreen?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlApplicationWindowConstructOnly = GtkApplicationWindowConstructOnly | GtkBuildableConstructOnly;

export interface DzlBinProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlBinConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface DzlBoldingLabelProps extends GtkLabelProps, GtkBuildableProps {
    /** @default FALSE */
    bold?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlBoldingLabelConstructOnly = GtkLabelConstructOnly | GtkBuildableConstructOnly;

export interface DzlBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default -1 */
    'max-width-request'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** First off, you probably want to use GtkBox with a center widget instead of this widget. */
export interface DzlCenteringBinProps extends GtkBinProps, GtkBuildableProps {
    /** @default -1 */
    'max-width-request'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlCenteringBinConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface DzlColumnLayoutProps extends GtkContainerProps, GtkBuildableProps {
    /** @default 24 */
    'column-spacing'?: number;
    /** @default 500 */
    'column-width'?: number;
    /** @default 0 */
    'max-columns'?: number;
    /** @default 24 */
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlColumnLayoutConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface DzlCountersWindowProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlCountersWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface DzlCpuGraphProps extends DzlGraphViewProps, GtkBuildableProps {
    /** @default 120 */
    'max-samples'?: number;
    /** @default 60000000 */
    timespan?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlCpuGraphConstructOnly = DzlGraphViewConstructOnly | GtkBuildableConstructOnly | 'max-samples' | 'timespan';

export interface DzlDockProps extends GtkContainerProps {
    manager?: Dazzle.DockManager;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlDockConstructOnly = GtkContainerConstructOnly;

export interface DzlDockBinProps extends GtkContainerProps, DzlDockProps, DzlDockItemProps, GtkBuildableProps {
    /** @default FALSE */
    'bottom-visible'?: boolean;
    /** @default FALSE */
    'left-visible'?: boolean;
    /** @default FALSE */
    'right-visible'?: boolean;
    /** @default FALSE */
    'top-visible'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlDockBinConstructOnly = GtkContainerConstructOnly | DzlDockConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly;

export interface DzlDockBinEdgeProps extends DzlDockRevealerProps, DzlDockItemProps, GtkBuildableProps {
    /** @default GTK_POS_LEFT */
    edge?: GtkPositionTypeNick | Gtk.PositionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlDockBinEdgeConstructOnly = DzlDockRevealerConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly;

export interface DzlDockItemProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlDockItemConstructOnly = GtkWidgetConstructOnly;

export interface DzlDockOverlayProps extends GtkEventBoxProps, DzlDockProps, DzlDockItemProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlDockOverlayConstructOnly = GtkEventBoxConstructOnly | DzlDockConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly;

export interface DzlDockOverlayEdgeProps extends DzlBinProps, DzlDockItemProps, GtkBuildableProps {
    /** @default GTK_POS_LEFT */
    edge?: GtkPositionTypeNick | Gtk.PositionType;
    /** @default 0 */
    position?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlDockOverlayEdgeConstructOnly = DzlBinConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly;

export interface DzlDockPanedProps extends DzlMultiPanedProps, DzlDockItemProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlDockPanedConstructOnly = DzlMultiPanedConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** This widget is a bit like #GtkRevealer with a couple of important differences. */
export interface DzlDockRevealerProps extends DzlBinProps, GtkBuildableProps {
    /** @default 0 */
    position?: number;
    /** @default FALSE */
    'position-set'?: boolean;
    /** @default FALSE */
    'reveal-child'?: boolean;
    /** @default 0 */
    'transition-duration'?: number;
    /** @default DZL_DOCK_REVEALER_TRANSITION_TYPE_NONE */
    'transition-type'?: DzlDockRevealerTransitionTypeNick | Dazzle.DockRevealerTransitionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlDockRevealerConstructOnly = DzlBinConstructOnly | GtkBuildableConstructOnly;

export interface DzlDockStackProps extends Omit<GtkBoxProps, 'style'>, Omit<DzlDockItemProps, 'style'>, GtkBuildableProps, GtkOrientableProps {
    /** @default GTK_POS_TOP */
    edge?: GtkPositionTypeNick | Gtk.PositionType;
    /** @default FALSE */
    'show-pinned-button'?: boolean;
    /** @default DZL_TAB_ICONS | DZL_TAB_TEXT */
    style?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlDockStackConstructOnly = GtkBoxConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface DzlDockWidgetProps extends DzlBinProps, DzlDockItemProps, GtkBuildableProps {
    /** @default FALSE */
    'can-close'?: boolean;
    gicon?: Gio.Icon;
    /** @default NULL */
    'icon-name'?: string;
    manager?: Dazzle.DockManager;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlDockWidgetConstructOnly = DzlBinConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly;

export interface DzlDockWindowProps extends GtkWindowProps, DzlDockProps, DzlDockItemProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlDockWindowConstructOnly = GtkWindowConstructOnly | DzlDockConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly;

export interface DzlElasticBinProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlElasticBinConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface DzlEmptyStateProps extends GtkBinProps, GtkBuildableProps {
    /** @default NULL */
    'icon-name'?: string;
    /** @default 128 */
    'pixel-size'?: number;
    /** @default NULL */
    resource?: string;
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlEmptyStateConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface DzlEntryBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default -1 */
    'max-width-chars'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlEntryBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface DzlFileChooserEntryProps extends GtkBinProps, GtkBuildableProps {
    /** @default GTK_FILE_CHOOSER_ACTION_OPEN */
    action?: GtkFileChooserActionNick | Gtk.FileChooserAction;
    /** @default FALSE */
    'create-folders'?: boolean;
    /** @default FALSE */
    'do-overwrite-confirmation'?: boolean;
    file?: Gio.File | null;
    filter?: Gtk.FileFilter;
    /** @default FALSE */
    'local-only'?: boolean;
    /** @default -1 */
    'max-width-chars'?: number;
    /** @default FALSE */
    'show-hidden'?: boolean;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlFileChooserEntryConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface DzlGraphViewProps extends GtkDrawingAreaProps, GtkBuildableProps {
    model?: Dazzle.GraphModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlGraphViewConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

export interface DzlListBoxProps extends GtkListBoxProps, GtkBuildableProps {
    /** @default NULL */
    'property-name'?: string;
    'row-type'?: GObject.GType;
    /** @default NULL */
    'row-type-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlListBoxConstructOnly = GtkListBoxConstructOnly | GtkBuildableConstructOnly | 'property-name' | 'row-type' | 'row-type-name';

export interface DzlListBoxRowProps extends GtkListBoxRowProps, GtkActionableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlListBoxRowConstructOnly = GtkListBoxRowConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly;

export interface DzlMenuButtonProps extends GtkMenuButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /** @default NULL */
    'icon-name'?: string;
    /**
     * The "menu-id" property can be used to automatically load a #GMenuModel from the applications merged menus.
     * @since 3.26
     * @default NULL
     */
    'menu-id'?: string;
    model?: Gio.MenuModel | null;
    /** @default FALSE */
    'show-accels'?: boolean;
    /** @default FALSE */
    'show-arrow'?: boolean;
    /** @default FALSE */
    'show-icons'?: boolean;
    /** @default TRUE */
    'transitions-enabled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlMenuButtonConstructOnly = GtkMenuButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** This widget is similar to #GtkPaned except that it allows adding more than two children to the widget. */
export interface DzlMultiPanedProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps {
    /** @default GTK_ORIENTATION_VERTICAL */
    orientation?: GtkOrientationNick | Gtk.Orientation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlMultiPanedConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface DzlPathBarProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    path?: Dazzle.Path;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPathBarConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface DzlPillBoxProps extends GtkEventBoxProps, GtkBuildableProps {
    /** @default NULL */
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPillBoxConstructOnly = GtkEventBoxConstructOnly | GtkBuildableConstructOnly;

export interface DzlPreferencesProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPreferencesConstructOnly = never;

export interface DzlPreferencesBinProps extends GtkBinProps, GtkBuildableProps {
    /** @default NULL */
    keywords?: string;
    /** @default NULL */
    path?: string;
    /** @default 0 */
    priority?: number;
    /** @default NULL */
    'schema-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPreferencesBinConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly | 'keywords' | 'path' | 'priority' | 'schema-id';

export interface DzlPreferencesEntryProps extends DzlPreferencesBinProps, GtkBuildableProps {
    /** @default NULL */
    text?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPreferencesEntryConstructOnly = DzlPreferencesBinConstructOnly | GtkBuildableConstructOnly;

export interface DzlPreferencesFileChooserButtonProps extends DzlPreferencesBinProps, GtkBuildableProps {
    /** @default GTK_FILE_CHOOSER_ACTION_SELECT_FOLDER */
    action?: GtkFileChooserActionNick | Gtk.FileChooserAction;
    /** @default NULL */
    key?: string;
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPreferencesFileChooserButtonConstructOnly = DzlPreferencesBinConstructOnly | GtkBuildableConstructOnly | 'action' | 'key' | 'subtitle' | 'title';

export interface DzlPreferencesFlowBoxProps extends DzlColumnLayoutProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPreferencesFlowBoxConstructOnly = DzlColumnLayoutConstructOnly | GtkBuildableConstructOnly;

export interface DzlPreferencesFontButtonProps extends DzlPreferencesBinProps, GtkBuildableProps {
    /** @default NULL */
    key?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPreferencesFontButtonConstructOnly = DzlPreferencesBinConstructOnly | GtkBuildableConstructOnly | 'key' | 'title';

export interface DzlPreferencesGroupProps extends GtkBinProps, GtkBuildableProps {
    /** @default FALSE */
    'is-list'?: boolean;
    /** @default GTK_SELECTION_NONE */
    mode?: GtkSelectionModeNick | Gtk.SelectionMode;
    /** @default 0 */
    priority?: number;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPreferencesGroupConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly | 'is-list' | 'priority' | 'title';

export interface DzlPreferencesPageProps extends GtkBinProps, GtkBuildableProps {
    /** @default 0 */
    priority?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPreferencesPageConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface DzlPreferencesSpinButtonProps extends DzlPreferencesBinProps, GtkBuildableProps {
    /** @default NULL */
    key?: string;
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPreferencesSpinButtonConstructOnly = DzlPreferencesBinConstructOnly | GtkBuildableConstructOnly | 'key' | 'subtitle' | 'title';

export interface DzlPreferencesSwitchProps extends DzlPreferencesBinProps, GtkBuildableProps {
    /** @default FALSE */
    'is-radio'?: boolean;
    /** @default NULL */
    key?: string;
    /** @default NULL */
    subtitle?: string;
    target?: GLib.Variant;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPreferencesSwitchConstructOnly = DzlPreferencesBinConstructOnly | GtkBuildableConstructOnly | 'is-radio' | 'key' | 'target';

export interface DzlPreferencesViewProps extends GtkBinProps, DzlPreferencesProps, GtkBuildableProps {
    /** @default FALSE */
    'show-search-entry'?: boolean;
    /** @default FALSE */
    'use-sidebar'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPreferencesViewConstructOnly = GtkBinConstructOnly | DzlPreferencesConstructOnly | GtkBuildableConstructOnly;

/** This is like a #GtkBox but uses stable priorities to sort. */
export interface DzlPriorityBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlPriorityBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface DzlProgressButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /** @default 0 */
    progress?: number;
    /** @default FALSE */
    'show-progress'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlProgressButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface DzlProgressIconProps extends GtkDrawingAreaProps, GtkBuildableProps {
    /** @default 0.000000 */
    progress?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlProgressIconConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

export interface DzlProgressMenuButtonProps extends GtkMenuButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /** @default 0.000000 */
    progress?: number;
    /** @default TRUE */
    'show-progress'?: boolean;
    /** @default TRUE */
    'show-theatric'?: boolean;
    /** @default folder-download-symbolic */
    'theatric-icon-name'?: string;
    /** @default 750 */
    'transition-duration'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlProgressMenuButtonConstructOnly = GtkMenuButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface DzlRadioBoxProps extends GtkBinProps, GtkBuildableProps {
    /** @default NULL */
    'active-id'?: string;
    /** @default FALSE */
    'show-more'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlRadioBoxConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface DzlScrolledWindowProps extends GtkScrolledWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlScrolledWindowConstructOnly = GtkScrolledWindowConstructOnly | GtkBuildableConstructOnly;

export interface DzlSearchBarProps extends GtkBinProps, GtkBuildableProps {
    /** @default FALSE */
    'search-mode-enabled'?: boolean;
    /** @default FALSE */
    'show-close-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlSearchBarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface DzlShortcutAccelDialogProps extends GtkDialogProps, GtkBuildableProps {
    /** @default NULL */
    accelerator?: string;
    /** @default NULL */
    'shortcut-title'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlShortcutAccelDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

export interface DzlShortcutLabelProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default NULL */
    accelerator?: string;
    chord?: Dazzle.ShortcutChord | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlShortcutLabelConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface DzlShortcutSimpleLabelProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default NULL */
    accel?: string;
    /** @default NULL */
    action?: string;
    /** @default NULL */
    command?: string;
    /** @default TRUE */
    'show-accel'?: boolean;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlShortcutSimpleLabelConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface DzlShortcutThemeEditorProps extends GtkBinProps, GtkBuildableProps {
    theme?: Dazzle.ShortcutTheme | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlShortcutThemeEditorConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface DzlShortcutsGroupProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** The size group for the accelerator portion of shortcuts in this group. */
    'accel-size-group'?: Gtk.SizeGroup;
    /** The title for this group of shortcuts. */
    title?: string;
    /** The size group for the textual portion of shortcuts in this group. */
    'title-size-group'?: Gtk.SizeGroup;
    /**
     * An optional view that the shortcuts in this group are relevant for.
     * @default NULL
     */
    view?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlShortcutsGroupConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface DzlShortcutsSectionProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The maximum number of lines to allow per column.
     * @default 15
     */
    'max-height'?: number;
    /**
     * A unique name to identify this section among the sections added to the DzlShortcutsWindow.
     * @default NULL
     */
    'section-name'?: string;
    /**
     * The string to show in the section selector of the DzlShortcutsWindow for this section.
     * @default NULL
     */
    title?: string;
    /**
     * A view name to filter the groups in this section by.
     * @default NULL
     */
    'view-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlShortcutsSectionConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface DzlShortcutsShortcutProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** The size group for the accelerator portion of this shortcut. */
    'accel-size-group'?: Gtk.SizeGroup;
    /**
     * The accelerator(s) represented by this object.
     * @default NULL
     */
    accelerator?: string;
    /**
     * A detailed action name.
     * @since 3.22
     * @default NULL
     */
    'action-name'?: string;
    /**
     * The text direction for which this shortcut is active.
     * @default GTK_TEXT_DIR_NONE
     */
    direction?: GtkTextDirectionNick | Gtk.TextDirection;
    /** An icon to represent the shortcut or gesture. */
    icon?: Gio.Icon;
    /**
     * %TRUE if an icon has been set.
     * @default FALSE
     */
    'icon-set'?: boolean;
    /**
     * The type of shortcut that is represented.
     * @default GTK_SHORTCUT_ACCELERATOR
     */
    'shortcut-type'?: GtkShortcutTypeNick | Gtk.ShortcutType;
    /** The subtitle for the shortcut or gesture. */
    subtitle?: string;
    /**
     * %TRUE if a subtitle has been set.
     * @default FALSE
     */
    'subtitle-set'?: boolean;
    /** The textual description for the shortcut or gesture represented by this object. */
    title?: string;
    /** The size group for the textual portion of this shortcut. */
    'title-size-group'?: Gtk.SizeGroup;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlShortcutsShortcutConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface DzlShortcutsWindowProps extends GtkWindowProps, GtkBuildableProps {
    /**
     * The name of the section to show.
     * @default internal-search
     */
    'section-name'?: string;
    /**
     * The view name by which to filter the contents.
     * @default NULL
     */
    'view-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlShortcutsWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface DzlSimpleLabelProps extends GtkWidgetProps, GtkBuildableProps {
    /** @default NULL */
    label?: string;
    /** @default -1 */
    'width-chars'?: number;
    /** @default 0.500000 */
    xalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlSimpleLabelConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface DzlSimplePopoverProps extends GtkPopoverProps, GtkBuildableProps {
    /** @default NULL */
    'button-text'?: string;
    /** @default NULL */
    message?: string;
    /** @default FALSE */
    ready?: boolean;
    /** @default NULL */
    text?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlSimplePopoverConstructOnly = GtkPopoverConstructOnly | GtkBuildableConstructOnly;

export interface DzlSliderProps extends GtkContainerProps, GtkBuildableProps {
    /** @default DZL_SLIDER_NONE */
    position?: DzlSliderPositionNick | Dazzle.SliderPosition;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlSliderConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface DzlStackListProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlStackListConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface DzlSuggestionButtonProps extends GtkStackProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlSuggestionButtonConstructOnly = GtkStackConstructOnly | GtkBuildableConstructOnly;

export interface DzlSuggestionEntryProps extends GtkEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
    /**
     * The "activate-on-single-click" property denotes if results should be activated simply by clicking on them.
     * @since 3.30
     * @default FALSE
     */
    'activate-on-single-click'?: boolean;
    /**
     * The "compact" property denotes if an alternate style should be used to reduce the width of the rows.
     * @since 3.34
     * @default FALSE
     */
    compact?: boolean;
    model?: Gio.ListModel | null;
    /**
     * The "suggestion" property is the currently selected suggestion, if any.
     * @since 3.30
     */
    suggestion?: Dazzle.Suggestion | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlSuggestionEntryConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

export interface DzlSuggestionPopoverProps extends GtkWindowProps, GtkBuildableProps {
    model?: Dazzle.Suggestion | null;
    'relative-to'?: Gtk.Widget | null;
    selected?: Dazzle.Suggestion | null;
    /** @default PANGO_ELLIPSIZE_END */
    'subtitle-ellipsize'?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /** @default PANGO_ELLIPSIZE_END */
    'title-ellipsize'?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlSuggestionPopoverConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface DzlSuggestionRowProps extends DzlListBoxRowProps, GtkActionableProps, GtkBuildableProps, GtkOrientableProps {
    /** @default GTK_ORIENTATION_VERTICAL */
    orientation?: GtkOrientationNick | Gtk.Orientation;
    suggestion?: Dazzle.Suggestion;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlSuggestionRowConstructOnly = DzlListBoxRowConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface DzlTabProps extends Omit<DzlBinProps, 'style'>, Omit<GtkActionableProps, 'style'>, GtkBuildableProps {
    /** @default FALSE */
    active?: boolean;
    /** @default FALSE */
    'can-close'?: boolean;
    /** @default GTK_POS_TOP */
    edge?: GtkPositionTypeNick | Gtk.PositionType;
    /** @default DZL_TAB_ICONS | DZL_TAB_TEXT */
    style?: number;
    /** @default NULL */
    title?: string;
    widget?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlTabConstructOnly = DzlBinConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly;

export interface DzlTabStripProps extends Omit<GtkBoxProps, 'style'>, GtkBuildableProps, GtkOrientableProps {
    /** @default GTK_POS_TOP */
    edge?: GtkPositionTypeNick | Gtk.PositionType;
    stack?: Gtk.Stack | null;
    /** @default DZL_TAB_ICONS | DZL_TAB_TEXT */
    style?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlTabStripConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface DzlThreeGridProps extends GtkContainerProps, GtkBuildableProps {
    /** @default 0 */
    'column-spacing'?: number;
    /** @default 0 */
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlThreeGridConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface DzlTreeProps extends GtkTreeViewProps, GtkBuildableProps, GtkScrollableProps {
    /** @default FALSE */
    'always-expand'?: boolean;
    'context-menu'?: Gio.MenuModel | null;
    root?: Dazzle.TreeNode | null;
    selection?: Dazzle.TreeNode;
    /** @default FALSE */
    'show-icons'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type DzlTreeConstructOnly = GtkTreeViewConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly | 'always-expand';

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
    DzlApplicationWindow: {
        class: Dazzle.ApplicationWindow;
        props: DzlApplicationWindowProps;
        signals: Dazzle.ApplicationWindow.SignalSignatures;
        constructOnly: DzlApplicationWindowConstructOnly;
        slotCandidates: {
        'titlebar': 'set_titlebar';
        };
    };
    DzlBin: {
        class: Dazzle.Bin;
        props: DzlBinProps;
        signals: Dazzle.Bin.SignalSignatures;
        constructOnly: DzlBinConstructOnly;
        slotCandidates: {};
    };
    DzlBoldingLabel: {
        class: Dazzle.BoldingLabel;
        props: DzlBoldingLabelProps;
        signals: Dazzle.BoldingLabel.SignalSignatures;
        constructOnly: DzlBoldingLabelConstructOnly;
        slotCandidates: {};
    };
    DzlBox: {
        class: Dazzle.Box;
        props: DzlBoxProps;
        signals: Dazzle.Box.SignalSignatures;
        constructOnly: DzlBoxConstructOnly;
        slotCandidates: {};
    };
    DzlCenteringBin: {
        class: Dazzle.CenteringBin;
        props: DzlCenteringBinProps;
        signals: Dazzle.CenteringBin.SignalSignatures;
        constructOnly: DzlCenteringBinConstructOnly;
        slotCandidates: {};
    };
    DzlColumnLayout: {
        class: Dazzle.ColumnLayout;
        props: DzlColumnLayoutProps;
        signals: Dazzle.ColumnLayout.SignalSignatures;
        constructOnly: DzlColumnLayoutConstructOnly;
        slotCandidates: {};
    };
    DzlCountersWindow: {
        class: Dazzle.CountersWindow;
        props: DzlCountersWindowProps;
        signals: Dazzle.CountersWindow.SignalSignatures;
        constructOnly: DzlCountersWindowConstructOnly;
        slotCandidates: {};
    };
    DzlCpuGraph: {
        class: Dazzle.CpuGraph;
        props: DzlCpuGraphProps;
        signals: Dazzle.CpuGraph.SignalSignatures;
        constructOnly: DzlCpuGraphConstructOnly;
        slotCandidates: {};
    };
    DzlDockBin: {
        class: Dazzle.DockBin;
        props: DzlDockBinProps;
        signals: Dazzle.DockBin.SignalSignatures;
        constructOnly: DzlDockBinConstructOnly;
        slotCandidates: {};
    };
    DzlDockBinEdge: {
        class: Dazzle.DockBinEdge;
        props: DzlDockBinEdgeProps;
        signals: Dazzle.DockBinEdge.SignalSignatures;
        constructOnly: DzlDockBinEdgeConstructOnly;
        slotCandidates: {};
    };
    DzlDockOverlay: {
        class: Dazzle.DockOverlay;
        props: DzlDockOverlayProps;
        signals: Dazzle.DockOverlay.SignalSignatures;
        constructOnly: DzlDockOverlayConstructOnly;
        slotCandidates: {};
    };
    DzlDockOverlayEdge: {
        class: Dazzle.DockOverlayEdge;
        props: DzlDockOverlayEdgeProps;
        signals: Dazzle.DockOverlayEdge.SignalSignatures;
        constructOnly: DzlDockOverlayEdgeConstructOnly;
        slotCandidates: {};
    };
    DzlDockPaned: {
        class: Dazzle.DockPaned;
        props: DzlDockPanedProps;
        signals: Dazzle.DockPaned.SignalSignatures;
        constructOnly: DzlDockPanedConstructOnly;
        slotCandidates: {};
    };
    DzlDockRevealer: {
        class: Dazzle.DockRevealer;
        props: DzlDockRevealerProps;
        signals: Dazzle.DockRevealer.SignalSignatures;
        constructOnly: DzlDockRevealerConstructOnly;
        slotCandidates: {};
    };
    DzlDockStack: {
        class: Dazzle.DockStack;
        props: DzlDockStackProps;
        signals: Dazzle.DockStack.SignalSignatures;
        constructOnly: DzlDockStackConstructOnly;
        slotCandidates: {};
    };
    DzlDockWidget: {
        class: Dazzle.DockWidget;
        props: DzlDockWidgetProps;
        signals: Dazzle.DockWidget.SignalSignatures;
        constructOnly: DzlDockWidgetConstructOnly;
        slotCandidates: {};
    };
    DzlDockWindow: {
        class: Dazzle.DockWindow;
        props: DzlDockWindowProps;
        signals: Dazzle.DockWindow.SignalSignatures;
        constructOnly: DzlDockWindowConstructOnly;
        slotCandidates: {};
    };
    DzlElasticBin: {
        class: Dazzle.ElasticBin;
        props: DzlElasticBinProps;
        signals: Dazzle.ElasticBin.SignalSignatures;
        constructOnly: DzlElasticBinConstructOnly;
        slotCandidates: {};
    };
    DzlEmptyState: {
        class: Dazzle.EmptyState;
        props: DzlEmptyStateProps;
        signals: Dazzle.EmptyState.SignalSignatures;
        constructOnly: DzlEmptyStateConstructOnly;
        slotCandidates: {};
    };
    DzlEntryBox: {
        class: Dazzle.EntryBox;
        props: DzlEntryBoxProps;
        signals: Dazzle.EntryBox.SignalSignatures;
        constructOnly: DzlEntryBoxConstructOnly;
        slotCandidates: {};
    };
    DzlFileChooserEntry: {
        class: Dazzle.FileChooserEntry;
        props: DzlFileChooserEntryProps;
        signals: Dazzle.FileChooserEntry.SignalSignatures;
        constructOnly: DzlFileChooserEntryConstructOnly;
        slotCandidates: {};
    };
    DzlGraphView: {
        class: Dazzle.GraphView;
        props: DzlGraphViewProps;
        signals: Dazzle.GraphView.SignalSignatures;
        constructOnly: DzlGraphViewConstructOnly;
        slotCandidates: {};
    };
    DzlListBox: {
        class: Dazzle.ListBox;
        props: DzlListBoxProps;
        signals: Dazzle.ListBox.SignalSignatures;
        constructOnly: DzlListBoxConstructOnly;
        slotCandidates: {};
    };
    DzlMenuButton: {
        class: Dazzle.MenuButton;
        props: DzlMenuButtonProps;
        signals: Dazzle.MenuButton.SignalSignatures;
        constructOnly: DzlMenuButtonConstructOnly;
        slotCandidates: {};
    };
    DzlMultiPaned: {
        class: Dazzle.MultiPaned;
        props: DzlMultiPanedProps;
        signals: Dazzle.MultiPaned.SignalSignatures;
        constructOnly: DzlMultiPanedConstructOnly;
        slotCandidates: {};
    };
    DzlPathBar: {
        class: Dazzle.PathBar;
        props: DzlPathBarProps;
        signals: Dazzle.PathBar.SignalSignatures;
        constructOnly: DzlPathBarConstructOnly;
        slotCandidates: {};
    };
    DzlPillBox: {
        class: Dazzle.PillBox;
        props: DzlPillBoxProps;
        signals: Dazzle.PillBox.SignalSignatures;
        constructOnly: DzlPillBoxConstructOnly;
        slotCandidates: {};
    };
    DzlPreferencesBin: {
        class: Dazzle.PreferencesBin;
        props: DzlPreferencesBinProps;
        signals: Dazzle.PreferencesBin.SignalSignatures;
        constructOnly: DzlPreferencesBinConstructOnly;
        slotCandidates: {};
    };
    DzlPreferencesEntry: {
        class: Dazzle.PreferencesEntry;
        props: DzlPreferencesEntryProps;
        signals: Dazzle.PreferencesEntry.SignalSignatures;
        constructOnly: DzlPreferencesEntryConstructOnly;
        slotCandidates: {};
    };
    DzlPreferencesFileChooserButton: {
        class: Dazzle.PreferencesFileChooserButton;
        props: DzlPreferencesFileChooserButtonProps;
        signals: Dazzle.PreferencesFileChooserButton.SignalSignatures;
        constructOnly: DzlPreferencesFileChooserButtonConstructOnly;
        slotCandidates: {};
    };
    DzlPreferencesFlowBox: {
        class: Dazzle.PreferencesFlowBox;
        props: DzlPreferencesFlowBoxProps;
        signals: Dazzle.PreferencesFlowBox.SignalSignatures;
        constructOnly: DzlPreferencesFlowBoxConstructOnly;
        slotCandidates: {};
    };
    DzlPreferencesFontButton: {
        class: Dazzle.PreferencesFontButton;
        props: DzlPreferencesFontButtonProps;
        signals: Dazzle.PreferencesFontButton.SignalSignatures;
        constructOnly: DzlPreferencesFontButtonConstructOnly;
        slotCandidates: {};
    };
    DzlPreferencesGroup: {
        class: Dazzle.PreferencesGroup;
        props: DzlPreferencesGroupProps;
        signals: Dazzle.PreferencesGroup.SignalSignatures;
        constructOnly: DzlPreferencesGroupConstructOnly;
        slotCandidates: {};
    };
    DzlPreferencesPage: {
        class: Dazzle.PreferencesPage;
        props: DzlPreferencesPageProps;
        signals: Dazzle.PreferencesPage.SignalSignatures;
        constructOnly: DzlPreferencesPageConstructOnly;
        slotCandidates: {
        'group': 'add_group';
        };
    };
    DzlPreferencesSpinButton: {
        class: Dazzle.PreferencesSpinButton;
        props: DzlPreferencesSpinButtonProps;
        signals: Dazzle.PreferencesSpinButton.SignalSignatures;
        constructOnly: DzlPreferencesSpinButtonConstructOnly;
        slotCandidates: {};
    };
    DzlPreferencesSwitch: {
        class: Dazzle.PreferencesSwitch;
        props: DzlPreferencesSwitchProps;
        signals: Dazzle.PreferencesSwitch.SignalSignatures;
        constructOnly: DzlPreferencesSwitchConstructOnly;
        slotCandidates: {};
    };
    DzlPreferencesView: {
        class: Dazzle.PreferencesView;
        props: DzlPreferencesViewProps;
        signals: Dazzle.PreferencesView.SignalSignatures;
        constructOnly: DzlPreferencesViewConstructOnly;
        slotCandidates: {};
    };
    DzlPriorityBox: {
        class: Dazzle.PriorityBox;
        props: DzlPriorityBoxProps;
        signals: Dazzle.PriorityBox.SignalSignatures;
        constructOnly: DzlPriorityBoxConstructOnly;
        slotCandidates: {};
    };
    DzlProgressButton: {
        class: Dazzle.ProgressButton;
        props: DzlProgressButtonProps;
        signals: Dazzle.ProgressButton.SignalSignatures;
        constructOnly: DzlProgressButtonConstructOnly;
        slotCandidates: {};
    };
    DzlProgressIcon: {
        class: Dazzle.ProgressIcon;
        props: DzlProgressIconProps;
        signals: Dazzle.ProgressIcon.SignalSignatures;
        constructOnly: DzlProgressIconConstructOnly;
        slotCandidates: {};
    };
    DzlProgressMenuButton: {
        class: Dazzle.ProgressMenuButton;
        props: DzlProgressMenuButtonProps;
        signals: Dazzle.ProgressMenuButton.SignalSignatures;
        constructOnly: DzlProgressMenuButtonConstructOnly;
        slotCandidates: {};
    };
    DzlRadioBox: {
        class: Dazzle.RadioBox;
        props: DzlRadioBoxProps;
        signals: Dazzle.RadioBox.SignalSignatures;
        constructOnly: DzlRadioBoxConstructOnly;
        slotCandidates: {};
    };
    DzlScrolledWindow: {
        class: Dazzle.ScrolledWindow;
        props: DzlScrolledWindowProps;
        signals: Dazzle.ScrolledWindow.SignalSignatures;
        constructOnly: DzlScrolledWindowConstructOnly;
        slotCandidates: {};
    };
    DzlSearchBar: {
        class: Dazzle.SearchBar;
        props: DzlSearchBarProps;
        signals: Dazzle.SearchBar.SignalSignatures;
        constructOnly: DzlSearchBarConstructOnly;
        slotCandidates: {};
    };
    DzlShortcutAccelDialog: {
        class: Dazzle.ShortcutAccelDialog;
        props: DzlShortcutAccelDialogProps;
        signals: Dazzle.ShortcutAccelDialog.SignalSignatures;
        constructOnly: DzlShortcutAccelDialogConstructOnly;
        slotCandidates: {};
    };
    DzlShortcutLabel: {
        class: Dazzle.ShortcutLabel;
        props: DzlShortcutLabelProps;
        signals: Dazzle.ShortcutLabel.SignalSignatures;
        constructOnly: DzlShortcutLabelConstructOnly;
        slotCandidates: {};
    };
    DzlShortcutSimpleLabel: {
        class: Dazzle.ShortcutSimpleLabel;
        props: DzlShortcutSimpleLabelProps;
        signals: Dazzle.ShortcutSimpleLabel.SignalSignatures;
        constructOnly: DzlShortcutSimpleLabelConstructOnly;
        slotCandidates: {};
    };
    DzlShortcutThemeEditor: {
        class: Dazzle.ShortcutThemeEditor;
        props: DzlShortcutThemeEditorProps;
        signals: Dazzle.ShortcutThemeEditor.SignalSignatures;
        constructOnly: DzlShortcutThemeEditorConstructOnly;
        slotCandidates: {};
    };
    DzlShortcutsGroup: {
        class: Dazzle.ShortcutsGroup;
        props: DzlShortcutsGroupProps;
        signals: Dazzle.ShortcutsGroup.SignalSignatures;
        constructOnly: DzlShortcutsGroupConstructOnly;
        slotCandidates: {};
    };
    DzlShortcutsSection: {
        class: Dazzle.ShortcutsSection;
        props: DzlShortcutsSectionProps;
        signals: Dazzle.ShortcutsSection.SignalSignatures;
        constructOnly: DzlShortcutsSectionConstructOnly;
        slotCandidates: {};
    };
    DzlShortcutsShortcut: {
        class: Dazzle.ShortcutsShortcut;
        props: DzlShortcutsShortcutProps;
        signals: Dazzle.ShortcutsShortcut.SignalSignatures;
        constructOnly: DzlShortcutsShortcutConstructOnly;
        slotCandidates: {};
    };
    DzlShortcutsWindow: {
        class: Dazzle.ShortcutsWindow;
        props: DzlShortcutsWindowProps;
        signals: Dazzle.ShortcutsWindow.SignalSignatures;
        constructOnly: DzlShortcutsWindowConstructOnly;
        slotCandidates: {};
    };
    DzlSimpleLabel: {
        class: Dazzle.SimpleLabel;
        props: DzlSimpleLabelProps;
        signals: Dazzle.SimpleLabel.SignalSignatures;
        constructOnly: DzlSimpleLabelConstructOnly;
        slotCandidates: {};
    };
    DzlSimplePopover: {
        class: Dazzle.SimplePopover;
        props: DzlSimplePopoverProps;
        signals: Dazzle.SimplePopover.SignalSignatures;
        constructOnly: DzlSimplePopoverConstructOnly;
        slotCandidates: {};
    };
    DzlSlider: {
        class: Dazzle.Slider;
        props: DzlSliderProps;
        signals: Dazzle.Slider.SignalSignatures;
        constructOnly: DzlSliderConstructOnly;
        slotCandidates: {};
    };
    DzlStackList: {
        class: Dazzle.StackList;
        props: DzlStackListProps;
        signals: Dazzle.StackList.SignalSignatures;
        constructOnly: DzlStackListConstructOnly;
        slotCandidates: {};
    };
    DzlSuggestionButton: {
        class: Dazzle.SuggestionButton;
        props: DzlSuggestionButtonProps;
        signals: Dazzle.SuggestionButton.SignalSignatures;
        constructOnly: DzlSuggestionButtonConstructOnly;
        slotCandidates: {};
    };
    DzlSuggestionEntry: {
        class: Dazzle.SuggestionEntry;
        props: DzlSuggestionEntryProps;
        signals: Dazzle.SuggestionEntry.SignalSignatures;
        constructOnly: DzlSuggestionEntryConstructOnly;
        slotCandidates: {};
    };
    DzlSuggestionPopover: {
        class: Dazzle.SuggestionPopover;
        props: DzlSuggestionPopoverProps;
        signals: Dazzle.SuggestionPopover.SignalSignatures;
        constructOnly: DzlSuggestionPopoverConstructOnly;
        slotCandidates: {
        'relative-to': 'set_relative_to';
        };
    };
    DzlSuggestionRow: {
        class: Dazzle.SuggestionRow;
        props: DzlSuggestionRowProps;
        signals: Dazzle.SuggestionRow.SignalSignatures;
        constructOnly: DzlSuggestionRowConstructOnly;
        slotCandidates: {};
    };
    DzlTab: {
        class: Dazzle.Tab;
        props: DzlTabProps;
        signals: Dazzle.Tab.SignalSignatures;
        constructOnly: DzlTabConstructOnly;
        slotCandidates: {
        'widget': 'set_widget';
        };
    };
    DzlTabStrip: {
        class: Dazzle.TabStrip;
        props: DzlTabStripProps;
        signals: Dazzle.TabStrip.SignalSignatures;
        constructOnly: DzlTabStripConstructOnly;
        slotCandidates: {
        'control': 'add_control';
        'stack': 'set_stack';
        };
    };
    DzlThreeGrid: {
        class: Dazzle.ThreeGrid;
        props: DzlThreeGridProps;
        signals: Dazzle.ThreeGrid.SignalSignatures;
        constructOnly: DzlThreeGridConstructOnly;
        slotCandidates: {};
    };
    DzlTree: {
        class: Dazzle.Tree;
        props: DzlTreeProps;
        signals: Dazzle.Tree.SignalSignatures;
        constructOnly: DzlTreeConstructOnly;
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
