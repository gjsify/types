/**
 * The GIR-derived widget VOCABULARY for Meta-51.
 *
 * GENERATED — do not edit. Provenance: Meta-51 — dropped empty base(s): Atk.ImplementorIface — inlined base(s) their owner's vocabulary does not emit: Gio.DBusInterfaceSkeleton
 *
 * 38 instantiable GTypes (of which 0 concrete widgets), 39 declarations (1 inlined from a namespace whose vocabulary does not emit them), 33 enum nick unions, 0 slot candidates.
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

import type Clutter from '@girs/clutter-51';
import type Meta from './meta-51.js';
import type Mtk from '@girs/mtk-51';
import type { ClutterActorConstructOnly, ClutterActorProps, ClutterAnimatableConstructOnly, ClutterAnimatableProps, ClutterContentConstructOnly, ClutterContentProps, ClutterStageConstructOnly, ClutterStageProps } from '@girs/clutter-51/vocabulary';
import type { GAppLaunchContextConstructOnly, GAppLaunchContextProps, GDBusInterfaceConstructOnly, GDBusInterfaceProps, GInitableConstructOnly, GInitableProps } from '@girs/gio-2.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type MetaButtonFunctionNick = 'menu' | 'minimize' | 'maximize' | 'close' | 'last';
export type MetaCloseDialogResponseNick = 'wait' | 'force-close';
export type MetaCompEffectNick = 'create' | 'unminimize' | 'destroy' | 'minimize' | 'none';
export type MetaDisplayCornerNick = 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
export type MetaDisplayDirectionNick = 'up' | 'down' | 'left' | 'right';
export type MetaEdgeTypeNick = 'window' | 'monitor' | 'screen';
export type MetaExitCodeNick = 'success' | 'error';
export type MetaFrameTypeNick = 'normal' | 'dialog' | 'modal-dialog' | 'utility' | 'menu' | 'border' | 'attached' | 'last';
export type MetaGrabOpNick = 'none' | 'window-base' | 'moving' | 'moving-unconstrained' | 'resizing-nw' | 'resizing-n' | 'resizing-ne' | 'resizing-e' | 'resizing-sw' | 'resizing-s' | 'resizing-se' | 'resizing-w' | 'keyboard-moving' | 'keyboard-resizing-unknown' | 'keyboard-resizing-nw' | 'keyboard-resizing-n' | 'keyboard-resizing-ne' | 'keyboard-resizing-e' | 'keyboard-resizing-sw' | 'keyboard-resizing-s' | 'keyboard-resizing-se' | 'keyboard-resizing-w';
export type MetaGravityNick = 'none' | 'north-west' | 'north' | 'north-east' | 'west' | 'center' | 'east' | 'south-west' | 'south' | 'south-east' | 'static';
export type MetaInhibitShortcutsDialogResponseNick = 'allow' | 'deny';
export type MetaKeyBindingActionNick = 'none' | 'workspace-1' | 'workspace-2' | 'workspace-3' | 'workspace-4' | 'workspace-5' | 'workspace-6' | 'workspace-7' | 'workspace-8' | 'workspace-9' | 'workspace-10' | 'workspace-11' | 'workspace-12' | 'workspace-left' | 'workspace-right' | 'workspace-up' | 'workspace-down' | 'workspace-last' | 'switch-applications' | 'switch-applications-backward' | 'switch-group' | 'switch-group-backward' | 'switch-windows' | 'switch-windows-backward' | 'switch-panels' | 'switch-panels-backward' | 'cycle-group' | 'cycle-group-backward' | 'cycle-windows' | 'cycle-windows-backward' | 'cycle-panels' | 'cycle-panels-backward' | 'show-desktop' | 'panel-run-dialog' | 'toggle-recording' | 'set-spew-mark' | 'activate-window-menu' | 'toggle-fullscreen' | 'toggle-maximized' | 'toggle-tiled-left' | 'toggle-tiled-right' | 'toggle-above' | 'maximize' | 'unmaximize' | 'toggle-shaded' | 'minimize' | 'close' | 'begin-move' | 'begin-resize' | 'toggle-on-all-workspaces' | 'move-to-workspace-1' | 'move-to-workspace-2' | 'move-to-workspace-3' | 'move-to-workspace-4' | 'move-to-workspace-5' | 'move-to-workspace-6' | 'move-to-workspace-7' | 'move-to-workspace-8' | 'move-to-workspace-9' | 'move-to-workspace-10' | 'move-to-workspace-11' | 'move-to-workspace-12' | 'move-to-workspace-left' | 'move-to-workspace-right' | 'move-to-workspace-up' | 'move-to-workspace-down' | 'move-to-workspace-last' | 'move-to-monitor-left' | 'move-to-monitor-right' | 'move-to-monitor-up' | 'move-to-monitor-down' | 'raise-or-lower' | 'raise' | 'lower' | 'maximize-vertically' | 'maximize-horizontally' | 'move-to-corner-nw' | 'move-to-corner-ne' | 'move-to-corner-sw' | 'move-to-corner-se' | 'move-to-side-n' | 'move-to-side-s' | 'move-to-side-e' | 'move-to-side-w' | 'move-to-center' | 'overlay-key' | 'locate-pointer-key' | 'iso-next-group' | 'always-on-top' | 'switch-monitor' | 'rotate-monitor' | 'last';
export type MetaLaterTypeNick = 'resize' | 'calc-showing' | 'check-fullscreen' | 'sync-stack' | 'before-redraw' | 'idle';
export type MetaMonitorSwitchConfigTypeNick = 'all-mirror' | 'all-linear' | 'external' | 'builtin' | 'unknown';
export type MetaMotionDirectionNick = 'up' | 'down' | 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right';
export type MetaMultiTextureAlphaModeNick = 'meta-multi-texture-alpha-mode-none' | 'meta-multi-texture-alpha-mode-premult-electrical' | 'meta-multi-texture-alpha-mode-straight' | 'n-meta-multi-texture-alpha-modes';
export type MetaMultiTextureChromaLocNick = 'none' | 'defined';
export type MetaMultiTextureCoefficientsNick = 'meta-multi-texture-coefficients-none' | 'meta-multi-texture-coefficients-identity-full' | 'meta-multi-texture-coefficients-identity-limited' | 'meta-multi-texture-coefficients-bt709-full' | 'meta-multi-texture-coefficients-bt709-limited' | 'meta-multi-texture-coefficients-bt601-full' | 'meta-multi-texture-coefficients-bt601-limited' | 'meta-multi-texture-coefficients-bt2020-full' | 'meta-multi-texture-coefficients-bt2020-limited' | 'n-meta-multi-texture-coefficients';
export type MetaMultiTextureFormatNick = 'meta-multi-texture-format-invalid' | 'meta-multi-texture-format-simple' | 'meta-multi-texture-format-yuyv' | 'meta-multi-texture-format-yvyu' | 'meta-multi-texture-format-uyvy' | 'meta-multi-texture-format-vyuy' | 'meta-multi-texture-format-nv12' | 'meta-multi-texture-format-nv21' | 'meta-multi-texture-format-nv16' | 'meta-multi-texture-format-nv61' | 'meta-multi-texture-format-nv24' | 'meta-multi-texture-format-nv42' | 'meta-multi-texture-format-p010' | 'meta-multi-texture-format-p012' | 'meta-multi-texture-format-p016' | 'meta-multi-texture-format-yuv420' | 'meta-multi-texture-format-yvu420' | 'meta-multi-texture-format-yuv422' | 'meta-multi-texture-format-yvu422' | 'meta-multi-texture-format-yuv444' | 'meta-multi-texture-format-yvu444' | 'meta-multi-texture-format-s010' | 'meta-multi-texture-format-s210' | 'meta-multi-texture-format-s410' | 'meta-multi-texture-format-s012' | 'meta-multi-texture-format-s212' | 'meta-multi-texture-format-s412' | 'meta-multi-texture-format-s016' | 'meta-multi-texture-format-s216' | 'meta-multi-texture-format-s416' | 'n-meta-multi-texture-formats';
export type MetaOrientationNick = 'undefined' | 'normal' | 'bottom-up' | 'left-up' | 'right-up';
export type MetaPadDirectionNick = 'up' | 'down' | 'cw' | 'ccw';
export type MetaPadFeatureTypeNick = 'ring' | 'strip' | 'dial';
export type MetaPowerSaveChangeReasonNick = 'mode-change' | 'hotplug';
export type MetaPreferenceNick = 'mouse-button-mods' | 'focus-mode' | 'focus-new-windows' | 'attach-modal-dialogs' | 'raise-on-click' | 'action-double-click-titlebar' | 'action-middle-click-titlebar' | 'action-right-click-titlebar' | 'auto-raise' | 'auto-raise-delay' | 'focus-change-on-pointer-rest' | 'num-workspaces' | 'dynamic-workspaces' | 'keybindings' | 'disable-workarounds' | 'button-layout' | 'workspace-names' | 'visual-bell' | 'audible-bell' | 'visual-bell-type' | 'gnome-accessibility' | 'gnome-animations' | 'cursor-theme' | 'cursor-size' | 'resize-with-right-button' | 'edge-tiling' | 'force-fullscreen' | 'workspaces-only-on-primary' | 'draggable-border-width' | 'auto-maximize' | 'center-new-windows' | 'drag-threshold' | 'locate-pointer' | 'check-alive-timeout';
export type MetaSelectionTypeNick = 'selection-primary' | 'selection-clipboard' | 'selection-dnd' | 'n-selection-types';
export type MetaSideNick = 'left' | 'right' | 'top' | 'bottom';
export type MetaSizeChangeNick = 'maximize' | 'unmaximize' | 'fullscreen' | 'unfullscreen' | 'monitor-move';
export type MetaStackLayerNick = 'desktop' | 'bottom' | 'normal' | 'top' | 'dock' | 'override-redirect' | 'last';
export type MetaTabListNick = 'normal' | 'docks' | 'group' | 'normal-all' | 'normal-all-mru';
export type MetaTabShowTypeNick = 'icon' | 'instantly';
export type MetaWindowClientTypeNick = 'wayland' | 'x11';
export type MetaWindowMenuTypeNick = 'wm' | 'app';
export type MetaWindowTypeNick = 'normal' | 'desktop' | 'dock' | 'dialog' | 'modal-dialog' | 'toolbar' | 'menu' | 'utility' | 'splashscreen' | 'dropdown-menu' | 'popup-menu' | 'tooltip' | 'notification' | 'combo' | 'dnd' | 'override-other';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Abstract base class for D-Bus interfaces on the service side. */
export interface GDBusInterfaceSkeletonProps extends GObjectProps, GDBusInterfaceProps {
    /**
     * Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     * @since 2.30
     * @default G_DBUS_INTERFACE_SKELETON_FLAGS_NONE
     */
    'g-flags'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusInterfaceSkeletonConstructOnly = GObjectConstructOnly | GDBusInterfaceConstructOnly;

/** This class handles tracking and painting the root window background. */
export interface MetaBackgroundProps extends GObjectProps {
    'meta-display'?: Meta.Display;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaBackgroundConstructOnly = GObjectConstructOnly | 'meta-display';

/** This class handles tracking and painting the root window background. */
export interface MetaBackgroundActorProps extends ClutterActorProps, ClutterAnimatableProps {
    'meta-display'?: Meta.Display;
    /** @default 0 */
    monitor?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaBackgroundActorConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | 'meta-display' | 'monitor';

/** This class handles tracking and painting the root window background. */
export interface MetaBackgroundContentProps extends GObjectProps, ClutterContentProps {
    background?: Meta.Background;
    /** @default 1.000000 */
    brightness?: number;
    /** @default FALSE */
    gradient?: boolean;
    /** @default 0 */
    'gradient-height'?: number;
    /** @default 0.000000 */
    'gradient-max-darkness'?: number;
    'meta-display'?: Meta.Display;
    /** @default 0 */
    monitor?: number;
    /** @default 0.000000 */
    'rounded-clip-radius'?: number;
    /** @default FALSE */
    vignette?: boolean;
    /** @default 0.000000 */
    'vignette-sharpness'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaBackgroundContentConstructOnly = GObjectConstructOnly | ClutterContentConstructOnly | 'meta-display' | 'monitor';

/** Container for background actors This class is a subclass of ClutterActor with special handling for MetaBackgroundActor/MetaBackgroundGroup when painting children. */
export interface MetaBackgroundGroupProps extends ClutterActorProps, ClutterAnimatableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaBackgroundGroupConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly;

/** Represents a loaded or loading background image. */
export interface MetaBackgroundImageProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaBackgroundImageConstructOnly = GObjectConstructOnly;

/** Caches loading of textures for backgrounds. */
export interface MetaBackgroundImageCacheProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaBackgroundImageCacheConstructOnly = GObjectConstructOnly;

/** Pointer barriers */
export interface MetaBarrierProps extends GObjectProps, GInitableProps {
    backend?: Meta.Backend;
    /** @default 0 */
    directions?: number;
    /** @default META_BARRIER_FLAG_NONE */
    flags?: number;
    /** @default 0 */
    x1?: number;
    /** @default 32767 */
    x2?: number;
    /** @default 0 */
    y1?: number;
    /** @default 32767 */
    y2?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaBarrierConstructOnly = GObjectConstructOnly | GInitableConstructOnly | 'backend' | 'directions' | 'flags' | 'x1' | 'x2' | 'y1' | 'y2';

export interface MetaContextProps extends GObjectProps {
    /** @default NULL */
    name?: string;
    /** @default NULL */
    nick?: string;
    /** @default FALSE */
    'unsafe-mode'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaContextConstructOnly = GObjectConstructOnly | 'name' | 'nick';

/** Mutter cursor tracking helper. */
export interface MetaCursorTrackerProps extends GObjectProps {
    backend?: Meta.Backend;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaCursorTrackerConstructOnly = GObjectConstructOnly | 'backend';

export interface MetaDebugControlProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps {
    context?: Meta.Context;
    /** @default FALSE */
    exported?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaDebugControlConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | 'context';

/** Mutter display representation The display is represented as a #MetaDisplay struct. */
export interface MetaDisplayProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaDisplayConstructOnly = GObjectConstructOnly;

export interface MetaDndProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaDndConstructOnly = GObjectConstructOnly;

/** Mutter idle counter (similar to X's IDLETIME) */
export interface MetaIdleMonitorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaIdleMonitorConstructOnly = GObjectConstructOnly;

export interface MetaLatersProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaLatersConstructOnly = GObjectConstructOnly;

export interface MetaLaunchContextProps extends GAppLaunchContextProps {
    display?: Meta.Display;
    /** @default 0 */
    timestamp?: number;
    workspace?: Meta.Workspace;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaLaunchContextConstructOnly = GAppLaunchContextConstructOnly | 'display';

/** An abstraction for a monitor(set) and its configuration. */
export interface MetaLogicalMonitorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaLogicalMonitorConstructOnly = GObjectConstructOnly;

export interface MetaMonitorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaMonitorConstructOnly = GObjectConstructOnly;

/** A manager for multiple monitors #MetaMonitorManager is an abstract class which contains methods to handle multiple monitors (both #MetaMonitor and #MetaLogicalMonitor) and GPU's (#MetaGpu). */
export interface MetaMonitorManagerProps extends GObjectProps {
    backend?: Meta.Backend;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaMonitorManagerConstructOnly = GObjectConstructOnly | 'backend';

/** A texture that can have multiple planes. */
export interface MetaMultiTextureProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaMultiTextureConstructOnly = GObjectConstructOnly;

/** A screen orientation manager #MetaOrientationManager is a final class which contains methods to read the current screen orientation, as well as a signal that is triggered whenever a screen changes it… */
export interface MetaOrientationManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaOrientationManagerConstructOnly = GObjectConstructOnly;

export interface MetaRemoteAccessControllerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaRemoteAccessControllerConstructOnly = GObjectConstructOnly;

export interface MetaRemoteAccessHandleProps extends GObjectProps {
    /** @default FALSE */
    'is-recording'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaRemoteAccessHandleConstructOnly = GObjectConstructOnly | 'is-recording';

export interface MetaSelectionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaSelectionConstructOnly = GObjectConstructOnly;

export interface MetaSelectionSourceProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaSelectionSourceConstructOnly = GObjectConstructOnly;

export interface MetaSelectionSourceMemoryProps extends MetaSelectionSourceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaSelectionSourceMemoryConstructOnly = MetaSelectionSourceConstructOnly;

/** A ClutterContent which draws a shaped texture A MetaShapedTexture draws a #CoglTexture (often provided from a client surface) in such a way that it matches any required transformations that give its … */
export interface MetaShapedTextureProps extends GObjectProps, ClutterContentProps {
    'clutter-context'?: Clutter.Context;
    'color-state'?: Clutter.ColorState;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaShapedTextureConstructOnly = GObjectConstructOnly | ClutterContentConstructOnly | 'clutter-context' | 'color-state';

export interface MetaSoundPlayerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaSoundPlayerConstructOnly = GObjectConstructOnly;

export interface MetaStageProps extends ClutterStageProps, ClutterAnimatableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaStageConstructOnly = ClutterStageConstructOnly | ClutterAnimatableConstructOnly;

export interface MetaStartupNotificationProps extends GObjectProps {
    display?: Meta.Display;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaStartupNotificationConstructOnly = GObjectConstructOnly | 'display';

export interface MetaStartupSequenceProps extends GObjectProps {
    /** @default NULL */
    'application-id'?: string | null;
    display?: Meta.Display;
    /** @default NULL */
    'icon-name'?: string | null;
    /** @default NULL */
    id?: string;
    /** @default NULL */
    name?: string;
    /** @default 0 */
    timestamp?: bigint | number;
    /** @default NULL */
    wmclass?: string | null;
    /** @default -1 */
    workspace?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaStartupSequenceConstructOnly = GObjectConstructOnly | 'application-id' | 'display' | 'icon-name' | 'id' | 'name' | 'timestamp' | 'wmclass' | 'workspace';

/** A class that allows to launch a trusted client and detect if an specific Wayland window belongs to it. */
export interface MetaWaylandClientProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaWaylandClientConstructOnly = GObjectConstructOnly;

export interface MetaWaylandCompositorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaWaylandCompositorConstructOnly = GObjectConstructOnly;

export interface MetaWaylandSurfaceProps extends GObjectProps {
    'main-monitor'?: Meta.LogicalMonitor;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaWaylandSurfaceConstructOnly = GObjectConstructOnly;

/** An object representing the configuration of a top-level window */
export interface MetaWindowConfigProps extends GObjectProps {
    /** @default FALSE */
    'is-fullscreen'?: boolean;
    rect?: Mtk.Rectangle;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaWindowConfigConstructOnly = GObjectConstructOnly;

export interface MetaWindowGroupProps extends ClutterActorProps, ClutterAnimatableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaWindowGroupConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly;

/** Workspaces A workspace is a set of windows which all live on the same screen. */
export interface MetaWorkspaceProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaWorkspaceConstructOnly = GObjectConstructOnly;

export interface MetaWorkspaceManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaWorkspaceManagerConstructOnly = GObjectConstructOnly;

/** Mutter X display handler The X11 display is represented as a #MetaX11Display struct. */
export interface MetaX11DisplayProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MetaX11DisplayConstructOnly = GObjectConstructOnly;

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
