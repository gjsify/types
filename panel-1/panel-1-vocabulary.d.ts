/**
 * The GIR-derived widget VOCABULARY for Panel-1.
 *
 * GENERATED — do not edit. Provenance: Panel-1 — library 1.10.4
 *
 * 29 instantiable GTypes (of which 17 concrete widgets), 30 declarations, 1 enum nick unions, 6 slot candidates.
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

import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Panel from './panel-1.js';
import type { AdwAlertDialogConstructOnly, AdwAlertDialogProps, AdwApplicationConstructOnly, AdwApplicationProps, AdwApplicationWindowConstructOnly, AdwApplicationWindowProps, AdwDialogConstructOnly, AdwDialogProps, AdwMessageDialogConstructOnly, AdwMessageDialogProps } from '@girs/adw-1/vocabulary';
import type { GActionGroupConstructOnly, GActionGroupProps, GActionMapConstructOnly, GActionMapProps, GApplicationConstructOnly, GApplicationProps } from '@girs/gio-2.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkActionableConstructOnly, GtkActionableProps, GtkApplicationConstructOnly, GtkApplicationProps, GtkApplicationWindowConstructOnly, GtkApplicationWindowProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkNativeConstructOnly, GtkNativeProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkRootConstructOnly, GtkRootProps, GtkShortcutManagerConstructOnly, GtkShortcutManagerProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowGroupConstructOnly, GtkWindowGroupProps, GtkWindowProps } from '@girs/gtk-4.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type PanelAreaNick = 'start' | 'end' | 'top' | 'bottom' | 'center';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface PanelActionMuxerProps extends GObjectProps, GActionGroupProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelActionMuxerConstructOnly = GObjectConstructOnly | GActionGroupConstructOnly;

export interface PanelApplicationProps extends AdwApplicationProps, GActionGroupProps, GActionMapProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelApplicationConstructOnly = AdwApplicationConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly;

export interface PanelChangesDialogProps extends AdwAlertDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkShortcutManagerProps {
    /**
     * This property requests that the widget close after saving.
     * @default FALSE
     */
    'close-after-save'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelChangesDialogConstructOnly = AdwAlertDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkShortcutManagerConstructOnly;

/** The #PanelDock is a widget designed to contain widgets that can be docked. */
export interface PanelDockProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default -1 */
    'bottom-height'?: number;
    /** @default -1 */
    'end-width'?: number;
    /** @default FALSE */
    'reveal-bottom'?: boolean;
    /** @default FALSE */
    'reveal-end'?: boolean;
    /** @default FALSE */
    'reveal-start'?: boolean;
    /** @default FALSE */
    'reveal-top'?: boolean;
    /** @default -1 */
    'start-width'?: number;
    /** @default -1 */
    'top-height'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelDockConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface PanelDocumentWorkspaceProps extends PanelWorkspaceProps, GActionGroupProps, GActionMapProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelDocumentWorkspaceConstructOnly = PanelWorkspaceConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** The #PanelFrame is a widget containing panels to display in an area. */
export interface PanelFrameProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    placeholder?: Gtk.Widget | null;
    'visible-child'?: Panel.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelFrameConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** An interface implemented by the header of a #PanelFrame. */
export interface PanelFrameHeaderProps extends GtkWidgetProps {
    /** The frame the header is attached to, or %NULL. */
    frame?: Panel.Frame | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelFrameHeaderConstructOnly = GtkWidgetConstructOnly;

/** A header bar for #PanelFrame. */
export interface PanelFrameHeaderBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, PanelFrameHeaderProps {
    /**
     * Whether to show the icon or not.
     * @default FALSE
     */
    'show-icon'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelFrameHeaderBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | PanelFrameHeaderConstructOnly;

/** A #PanelFrameSwitcher is a #PanelFrameHeader that shows a row of buttons to switch between #GtkStack pages, not disimilar to a #GtkStackSwitcher. */
export interface PanelFrameSwitcherProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps, PanelFrameHeaderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelFrameSwitcherConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly | PanelFrameHeaderConstructOnly;

/** A #PanelFrameHeader that implements switching between tab views in a #PanelFrame. */
export interface PanelFrameTabBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, PanelFrameHeaderProps {
    /**
     * Whether the tabs automatically hide.
     * @default FALSE
     */
    autohide?: boolean;
    /**
     * Whether tabs expand to full width.
     * @default TRUE
     */
    'expand-tabs'?: boolean;
    /**
     * Whether tabs use inverted layout.
     * @default FALSE
     */
    inverted?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelFrameTabBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | PanelFrameHeaderConstructOnly;

export interface PanelGSettingsActionGroupProps extends GObjectProps, GActionGroupProps {
    settings?: Gio.Settings;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelGSettingsActionGroupConstructOnly = GObjectConstructOnly | GActionGroupConstructOnly | 'settings';

/** The #PanelGrid is a widget used to layout the dock item in the center area. */
export interface PanelGridProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelGridConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface PanelGridColumnProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelGridColumnConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface PanelInhibitorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelInhibitorConstructOnly = GObjectConstructOnly;

export interface PanelLayeredSettingsProps extends GObjectProps {
    /** @default NULL */
    path?: string;
    /** @default NULL */
    'schema-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelLayeredSettingsConstructOnly = GObjectConstructOnly | 'path' | 'schema-id';

/** The goal of #PanelMenuManager is to simplify the process of merging multiple GtkBuilder .ui files containing menus into a single representation of the application menus. */
export interface PanelMenuManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelMenuManagerConstructOnly = GObjectConstructOnly;

/** A multi-use widget for user interaction in the window header bar. */
export interface PanelOmniBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The tooltip for the action.
     * @default NULL
     */
    'action-tooltip'?: string;
    /**
     * The name of the icon to use.
     * @default NULL
     */
    'icon-name'?: string;
    /** The menu model of the omni bar menu. */
    'menu-model'?: Gio.MenuModel;
    /** The popover to show. */
    popover?: Gtk.Popover | null;
    /**
     * The current progress value.
     * @default 0.000000
     */
    progress?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelOmniBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A #PanelPaned is the concrete widget for a panel area. */
export interface PanelPanedProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelPanedConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** Specifies a position in the dock. */
export interface PanelPositionProps extends GObjectProps {
    /**
     * The area.
     * @default PANEL_AREA_CENTER
     */
    area?: PanelAreaNick | Panel.Area;
    /**
     * The area is set.
     * @default FALSE
     */
    'area-set'?: boolean;
    /**
     * The column in the position.
     * @default 0
     */
    column?: number;
    /**
     * The column is set.
     * @default FALSE
     */
    'column-set'?: boolean;
    /** @default 0 */
    depth?: number;
    /** @default FALSE */
    'depth-set'?: boolean;
    /** @default 0 */
    row?: number;
    /** @default FALSE */
    'row-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelPositionConstructOnly = GObjectConstructOnly;

export interface PanelSaveDelegateProps extends GObjectProps {
    /** The "icon" property contains a #GIcon that describes the save operation. */
    icon?: Gio.Icon | null;
    /**
     * The "icon-name" property contains the name of an icon to use when showing information about the save operation in UI such as a save dialog.
     * @default NULL
     */
    'icon-name'?: string | null;
    /**
     * The "is-draft" property indicates that the document represented by the delegate is a draft and might be lost of not saved.
     * @default FALSE
     */
    'is-draft'?: boolean;
    /**
     * The "progress" property contains progress between 0.0 and 1.0 and should be updated by the delegate implementation as saving progresses.
     * @default 0.000000
     */
    progress?: number;
    /**
     * The "subtitle" property contains additional information that may not make sense to put in the title.
     * @default NULL
     */
    subtitle?: string | null;
    /**
     * The "title" property contains the title of the document being saved.
     * @default NULL
     */
    title?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelSaveDelegateConstructOnly = GObjectConstructOnly;

export interface PanelSaveDialogProps extends AdwMessageDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * This property requests that the widget close after saving.
     * @default FALSE
     * @deprecated since 1.8: Use [class@PanelChangesDialog]
     */
    'close-after-save'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelSaveDialogConstructOnly = AdwMessageDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

export interface PanelSessionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelSessionConstructOnly = GObjectConstructOnly;

export interface PanelSessionItemProps extends GObjectProps {
    /** @default NULL */
    id?: string | null;
    /** @default NULL */
    'module-name'?: string | null;
    position?: Panel.Position | null;
    /** @default NULL */
    'type-hint'?: string | null;
    /** @default NULL */
    workspace?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelSessionItemConstructOnly = GObjectConstructOnly;

export interface PanelSettingsProps extends GObjectProps, GActionGroupProps {
    /**
     * The "identifier" property is used to make unique paths.
     * @default NULL
     */
    identifier?: string;
    /** @default NULL */
    path?: string;
    /** @default NULL */
    'path-prefix'?: string;
    /** @default NULL */
    'path-suffix'?: string;
    /** @default NULL */
    'schema-id'?: string;
    /** @default NULL */
    'schema-id-prefix'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelSettingsConstructOnly = GObjectConstructOnly | GActionGroupConstructOnly | 'identifier' | 'path' | 'path-prefix' | 'path-suffix' | 'schema-id' | 'schema-id-prefix';

/** A panel status bar is meant to be displayed at the bottom of the window. */
export interface PanelStatusbarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelStatusbarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A widget that allow selecting theme preference between "dark", "light" and "follow" the system preference. */
export interface PanelThemeSelectorProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The name of the action activated on activation.
     * @default NULL
     */
    'action-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelThemeSelectorConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** The `PanelToggleButton` is a button used to toggle the visibility of a [class@Panel.Dock] area. */
export interface PanelToggleButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The area this button will reveal.
     * @default PANEL_AREA_START
     */
    area?: PanelAreaNick | Panel.Area;
    /** The associated [class@Panel.Dock] */
    dock?: Panel.Dock;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelToggleButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'area';

/** PanelWidget is the base widget class for widgets added to a #PanelFrame. */
export interface PanelWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default FALSE */
    'can-maximize'?: boolean;
    /** The child inside this widget. */
    child?: Gtk.Widget | null;
    /** The icon for this widget. */
    icon?: Gio.Icon | null;
    /**
     * The icon name for this widget.
     * @default NULL
     */
    'icon-name'?: string | null;
    /** @default NULL */
    id?: string;
    /** @default unknown */
    kind?: string;
    /** A menu model to display additional options for the page to the user via menus. */
    'menu-model'?: Gio.MenuModel | null;
    /** @default FALSE */
    modified?: boolean;
    /** @default FALSE */
    'needs-attention'?: boolean;
    /** @default TRUE */
    reorderable?: boolean;
    /** The save delegate attached to this widget. */
    'save-delegate'?: Panel.SaveDelegate | null;
    /**
     * The title for this widget.
     * @default NULL
     */
    title?: string | null;
    /**
     * The tooltip to display in tabs for the widget.
     * @since 1.2
     * @default NULL
     */
    tooltip?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelWidgetConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface PanelWorkbenchProps extends GtkWindowGroupProps {
    /**
     * The "id" of the workbench.
     * @since 1.4
     * @default NULL
     */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelWorkbenchConstructOnly = GtkWindowGroupConstructOnly;

export interface PanelWorkspaceProps extends AdwApplicationWindowProps, GActionGroupProps, GActionMapProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * The "id" of the workspace.
     * @since 1.4
     * @default NULL
     */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PanelWorkspaceConstructOnly = AdwApplicationWindowConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

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
    PanelChangesDialog: {
        class: Panel.ChangesDialog;
        props: PanelChangesDialogProps;
        signals: Panel.ChangesDialog.SignalSignatures;
        constructOnly: PanelChangesDialogConstructOnly;
        slotCandidates: {};
    };
    PanelDock: {
        class: Panel.Dock;
        props: PanelDockProps;
        signals: Panel.Dock.SignalSignatures;
        constructOnly: PanelDockConstructOnly;
        slotCandidates: {};
    };
    PanelDocumentWorkspace: {
        class: Panel.DocumentWorkspace;
        props: PanelDocumentWorkspaceProps;
        signals: Panel.DocumentWorkspace.SignalSignatures;
        constructOnly: PanelDocumentWorkspaceConstructOnly;
        slotCandidates: {
        'titlebar': 'set_titlebar';
        };
    };
    PanelFrame: {
        class: Panel.Frame;
        props: PanelFrameProps;
        signals: Panel.Frame.SignalSignatures;
        constructOnly: PanelFrameConstructOnly;
        slotCandidates: {
        'header': 'set_header';
        'placeholder': 'set_placeholder';
        'visible-child': 'set_visible_child';
        };
    };
    PanelFrameHeaderBar: {
        class: Panel.FrameHeaderBar;
        props: PanelFrameHeaderBarProps;
        signals: Panel.FrameHeaderBar.SignalSignatures;
        constructOnly: PanelFrameHeaderBarConstructOnly;
        slotCandidates: {};
    };
    PanelFrameSwitcher: {
        class: Panel.FrameSwitcher;
        props: PanelFrameSwitcherProps;
        signals: Panel.FrameSwitcher.SignalSignatures;
        constructOnly: PanelFrameSwitcherConstructOnly;
        slotCandidates: {};
    };
    PanelFrameTabBar: {
        class: Panel.FrameTabBar;
        props: PanelFrameTabBarProps;
        signals: Panel.FrameTabBar.SignalSignatures;
        constructOnly: PanelFrameTabBarConstructOnly;
        slotCandidates: {};
    };
    PanelGrid: {
        class: Panel.Grid;
        props: PanelGridProps;
        signals: Panel.Grid.SignalSignatures;
        constructOnly: PanelGridConstructOnly;
        slotCandidates: {};
    };
    PanelGridColumn: {
        class: Panel.GridColumn;
        props: PanelGridColumnProps;
        signals: Panel.GridColumn.SignalSignatures;
        constructOnly: PanelGridColumnConstructOnly;
        slotCandidates: {};
    };
    PanelOmniBar: {
        class: Panel.OmniBar;
        props: PanelOmniBarProps;
        signals: Panel.OmniBar.SignalSignatures;
        constructOnly: PanelOmniBarConstructOnly;
        slotCandidates: {
        'popover': 'set_popover';
        };
    };
    PanelPaned: {
        class: Panel.Paned;
        props: PanelPanedProps;
        signals: Panel.Paned.SignalSignatures;
        constructOnly: PanelPanedConstructOnly;
        slotCandidates: {};
    };
    PanelSaveDialog: {
        class: Panel.SaveDialog;
        props: PanelSaveDialogProps;
        signals: Panel.SaveDialog.SignalSignatures;
        constructOnly: PanelSaveDialogConstructOnly;
        slotCandidates: {};
    };
    PanelStatusbar: {
        class: Panel.Statusbar;
        props: PanelStatusbarProps;
        signals: Panel.Statusbar.SignalSignatures;
        constructOnly: PanelStatusbarConstructOnly;
        slotCandidates: {};
    };
    PanelThemeSelector: {
        class: Panel.ThemeSelector;
        props: PanelThemeSelectorProps;
        signals: Panel.ThemeSelector.SignalSignatures;
        constructOnly: PanelThemeSelectorConstructOnly;
        slotCandidates: {};
    };
    PanelToggleButton: {
        class: Panel.ToggleButton;
        props: PanelToggleButtonProps;
        signals: Panel.ToggleButton.SignalSignatures;
        constructOnly: PanelToggleButtonConstructOnly;
        slotCandidates: {};
    };
    PanelWidget: {
        class: Panel.Widget;
        props: PanelWidgetProps;
        signals: Panel.Widget.SignalSignatures;
        constructOnly: PanelWidgetConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    PanelWorkspace: {
        class: Panel.Workspace;
        props: PanelWorkspaceProps;
        signals: Panel.Workspace.SignalSignatures;
        constructOnly: PanelWorkspaceConstructOnly;
        slotCandidates: {};
    };
}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
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
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
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

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

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
