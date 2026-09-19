/**
 * The GIR-derived widget VOCABULARY for Gdk-4.0.
 *
 * GENERATED — do not edit. Provenance: Gdk-4.0 — prop(s) no TypeScript value satisfies: Gdk.GLTextureBuilder.sync
 *
 * 30 instantiable GTypes (of which 0 concrete widgets), 33 declarations, 22 enum nick unions, 0 slot candidates.
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
import type Gdk from './gdk-4.0.js';
import type cairo from '@girs/cairo-1.0';
import type { GAppLaunchContextConstructOnly, GAppLaunchContextProps, GAsyncResultConstructOnly, GAsyncResultProps, GIconConstructOnly, GIconProps, GLoadableIconConstructOnly, GLoadableIconProps } from '@girs/gio-2.0/vocabulary';
import type { GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GdkAxisUseNick = 'ignore' | 'x' | 'y' | 'delta-x' | 'delta-y' | 'pressure' | 'xtilt' | 'ytilt' | 'wheel' | 'distance' | 'rotation' | 'slider' | 'last';
export type GdkCicpRangeNick = 'narrow' | 'full';
export type GdkColorChannelNick = 'red' | 'green' | 'blue' | 'alpha';
export type GdkCrossingModeNick = 'normal' | 'grab' | 'ungrab' | 'gtk-grab' | 'gtk-ungrab' | 'state-changed' | 'touch-begin' | 'touch-end' | 'device-switch';
export type GdkDevicePadFeatureNick = 'button' | 'ring' | 'strip';
export type GdkDeviceToolTypeNick = 'unknown' | 'pen' | 'eraser' | 'brush' | 'pencil' | 'airbrush' | 'mouse' | 'lens';
export type GdkDragCancelReasonNick = 'no-target' | 'user-cancelled' | 'error';
export type GdkEventTypeNick = 'delete' | 'motion-notify' | 'button-press' | 'button-release' | 'key-press' | 'key-release' | 'enter-notify' | 'leave-notify' | 'focus-change' | 'proximity-in' | 'proximity-out' | 'drag-enter' | 'drag-leave' | 'drag-motion' | 'drop-start' | 'scroll' | 'grab-broken' | 'touch-begin' | 'touch-update' | 'touch-end' | 'touch-cancel' | 'touchpad-swipe' | 'touchpad-pinch' | 'pad-button-press' | 'pad-button-release' | 'pad-ring' | 'pad-strip' | 'pad-group-mode' | 'touchpad-hold' | 'pad-dial' | 'event-last';
export type GdkFrameResultNick = 'preparing' | 'skipped' | 'empty' | 'submitted' | 'outstanding' | 'discarded' | 'presented';
export type GdkFullscreenModeNick = 'current-monitor' | 'all-monitors';
export type GdkGravityNick = 'north-west' | 'north' | 'north-east' | 'west' | 'center' | 'east' | 'south-west' | 'south' | 'south-east' | 'static';
export type GdkInputSourceNick = 'mouse' | 'pen' | 'keyboard' | 'touchscreen' | 'touchpad' | 'trackpoint' | 'tablet-pad';
export type GdkKeyMatchNick = 'none' | 'partial' | 'exact';
export type GdkMemoryFormatNick = 'b8g8r8a8-premultiplied' | 'a8r8g8b8-premultiplied' | 'r8g8b8a8-premultiplied' | 'b8g8r8a8' | 'a8r8g8b8' | 'r8g8b8a8' | 'a8b8g8r8' | 'r8g8b8' | 'b8g8r8' | 'r16g16b16' | 'r16g16b16a16-premultiplied' | 'r16g16b16a16' | 'r16g16b16-float' | 'r16g16b16a16-float-premultiplied' | 'r16g16b16a16-float' | 'r32g32b32-float' | 'r32g32b32a32-float-premultiplied' | 'r32g32b32a32-float' | 'g8a8-premultiplied' | 'g8a8' | 'g8' | 'g16a16-premultiplied' | 'g16a16' | 'g16' | 'a8' | 'a16' | 'a16-float' | 'a32-float' | 'a8b8g8r8-premultiplied' | 'b8g8r8x8' | 'x8r8g8b8' | 'r8g8b8x8' | 'x8b8g8r8' | 'g8-b8r8-420' | 'g8-r8b8-420' | 'g8-b8r8-422' | 'g8-r8b8-422' | 'g8-b8r8-444' | 'g8-r8b8-444' | 'g10x6-b10x6r10x6-420' | 'g12x4-b12x4r12x4-420' | 'g16-b16r16-420' | 'g8-b8-r8-410' | 'g8-r8-b8-410' | 'g8-b8-r8-411' | 'g8-r8-b8-411' | 'g8-b8-r8-420' | 'g8-r8-b8-420' | 'g8-b8-r8-422' | 'g8-r8-b8-422' | 'g8-b8-r8-444' | 'g8-r8-b8-444' | 'g8b8g8r8-422' | 'g8r8g8b8-422' | 'r8g8b8g8-422' | 'b8g8r8g8-422' | 'x6g10-x6b10-x6r10-420' | 'x6g10-x6b10-x6r10-422' | 'x6g10-x6b10-x6r10-444' | 'x4g12-x4b12-x4r12-420' | 'x4g12-x4b12-x4r12-422' | 'x4g12-x4b12-x4r12-444' | 'g16-b16-r16-420' | 'g16-b16-r16-422' | 'g16-b16-r16-444' | 'argb2101010-premultiplied' | 'argb2101010' | 'xrgb2101010' | 'abgr2101010-premultiplied' | 'abgr2101010' | 'xbgr2101010' | 'n-formats';
export type GdkNotifyTypeNick = 'ancestor' | 'virtual' | 'inferior' | 'nonlinear' | 'nonlinear-virtual' | 'unknown';
export type GdkScrollDirectionNick = 'up' | 'down' | 'left' | 'right' | 'smooth';
export type GdkScrollRelativeDirectionNick = 'identical' | 'inverted' | 'unknown';
export type GdkScrollUnitNick = 'wheel' | 'surface';
export type GdkSubpixelLayoutNick = 'unknown' | 'none' | 'horizontal-rgb' | 'horizontal-bgr' | 'vertical-rgb' | 'vertical-bgr';
export type GdkSurfaceEdgeNick = 'north-west' | 'north' | 'north-east' | 'west' | 'east' | 'south-west' | 'south' | 'south-east';
export type GdkTitlebarGestureNick = 'double-click' | 'right-click' | 'middle-click';
export type GdkTouchpadGesturePhaseNick = 'begin' | 'update' | 'end' | 'cancel';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Handles launching an application in a graphical context. */
export interface GdkAppLaunchContextProps extends GAppLaunchContextProps {
    /** The display that the `GdkAppLaunchContext` is on. */
    display?: Gdk.Display;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkAppLaunchContextConstructOnly = GAppLaunchContextConstructOnly | 'display';

/** An event related to a button on a pointer device. */
export interface GdkButtonEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkButtonEventConstructOnly = GdkEventConstructOnly;

/** Contains the parameters that define a colorstate with cicp parameters. */
export interface GdkCicpParamsProps extends GObjectProps {
    /**
     * The color primaries to use.
     * @since 4.16
     * @default 2
     */
    'color-primaries'?: number;
    /**
     * The matrix coefficients (for YUV to RGB conversion).
     * @since 4.16
     * @default 2
     */
    'matrix-coefficients'?: number;
    /**
     * Whether the data is using the full range of values.
     * @since 4.16
     * @default GDK_CICP_RANGE_NARROW
     */
    range?: GdkCicpRangeNick | Gdk.CicpRange;
    /**
     * The transfer function to use.
     * @since 4.16
     * @default 2
     */
    'transfer-function'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkCicpParamsConstructOnly = GObjectConstructOnly;

/** Represents data shared between applications or inside an application. */
export interface GdkClipboardProps extends GObjectProps {
    /** The `GdkDisplay` that the clipboard belongs to. */
    display?: Gdk.Display;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkClipboardConstructOnly = GObjectConstructOnly | 'display';

/** Deserializes content received via inter-application data transfers. */
export interface GdkContentDeserializerProps extends GObjectProps, GAsyncResultProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkContentDeserializerConstructOnly = GObjectConstructOnly | GAsyncResultConstructOnly;

/** Provides content for the clipboard or for drag-and-drop operations in a number of formats. */
export interface GdkContentProviderProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkContentProviderConstructOnly = GObjectConstructOnly;

/** Serializes content for inter-application data transfers. */
export interface GdkContentSerializerProps extends GObjectProps, GAsyncResultProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkContentSerializerConstructOnly = GObjectConstructOnly | GAsyncResultConstructOnly;

/** An event caused by a pointing device moving between surfaces. */
export interface GdkCrossingEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkCrossingEventConstructOnly = GdkEventConstructOnly;

/** Used to create and destroy cursors. */
export interface GdkCursorProps extends GObjectProps {
    /** Cursor to fall back to if this cursor cannot be displayed. */
    fallback?: Gdk.Cursor | null;
    /**
     * X position of the cursor hotspot in the cursor image.
     * @default 0
     */
    'hotspot-x'?: number;
    /**
     * Y position of the cursor hotspot in the cursor image.
     * @default 0
     */
    'hotspot-y'?: number;
    /**
     * Name of this this cursor.
     * @default NULL
     */
    name?: string | null;
    /** The texture displayed by this cursor. */
    texture?: Gdk.Texture | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkCursorConstructOnly = GObjectConstructOnly | 'fallback' | 'hotspot-x' | 'hotspot-y' | 'name' | 'texture';

/** An event related to drag and drop operations. */
export interface GdkDNDEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkDNDEventConstructOnly = GdkEventConstructOnly;

/** An event related to closing a top-level surface. */
export interface GdkDeleteEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkDeleteEventConstructOnly = GdkEventConstructOnly;

/** A physical tool associated to a `GdkDevice`. */
export interface GdkDeviceToolProps extends GObjectProps {
    /**
     * The axes of the tool.
     * @default 0
     */
    axes?: number;
    /**
     * The hardware ID of the tool.
     * @default 0
     */
    'hardware-id'?: bigint | number;
    /**
     * The serial number of the tool.
     * @default 0
     */
    serial?: bigint | number;
    /**
     * The type of the tool.
     * @default GDK_DEVICE_TOOL_TYPE_UNKNOWN
     */
    'tool-type'?: GdkDeviceToolTypeNick | Gdk.DeviceToolType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkDeviceToolConstructOnly = GObjectConstructOnly | 'axes' | 'hardware-id' | 'serial' | 'tool-type';

/** A representation of a workstation. */
export interface GdkDisplayProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkDisplayConstructOnly = GObjectConstructOnly;

/** Offers notification when displays appear or disappear. */
export interface GdkDisplayManagerProps extends GObjectProps {
    /** The default display. */
    'default-display'?: Gdk.Display | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkDisplayManagerConstructOnly = GObjectConstructOnly;

/** A `GdkTexture` representing a DMA buffer. */
export interface GdkDmabufTextureProps extends GdkTextureProps, GdkPaintableProps, GIconProps, GLoadableIconProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkDmabufTextureConstructOnly = GdkTextureConstructOnly | GdkPaintableConstructOnly | GIconConstructOnly | GLoadableIconConstructOnly;

/** Constructs [class@Gdk.Texture] objects from DMA buffers. */
export interface GdkDmabufTextureBuilderProps extends GObjectProps {
    /**
     * The color state of the texture.
     * @since 4.16
     */
    'color-state'?: Gdk.ColorState | null;
    /**
     * The display that this texture will be used on.
     * @since 4.14
     */
    display?: Gdk.Display;
    /**
     * The format of the texture, as a fourcc value.
     * @since 4.14
     * @default 0
     */
    fourcc?: number;
    /**
     * The height of the texture.
     * @since 4.14
     * @default 0
     */
    height?: number;
    /**
     * The modifier.
     * @since 4.14
     * @default 0
     */
    modifier?: bigint | number;
    /**
     * The number of planes of the texture.
     * @since 4.14
     * @default 1
     */
    'n-planes'?: number;
    /**
     * Whether the alpha channel is premultiplied into the others.
     * @since 4.14
     * @default TRUE
     */
    premultiplied?: boolean;
    /**
     * The update region for [property@Gdk.DmabufTextureBuilder:update-texture].
     * @since 4.14
     */
    'update-region'?: cairo.Region | null;
    /**
     * The texture [property@Gdk.DmabufTextureBuilder:update-region] is an update for.
     * @since 4.14
     */
    'update-texture'?: Gdk.Texture | null;
    /**
     * The width of the texture.
     * @since 4.14
     * @default 0
     */
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkDmabufTextureBuilderConstructOnly = GObjectConstructOnly;

/** Represents windowing system events. */
export interface GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkEventConstructOnly = never;

/** An event related to a keyboard focus change. */
export interface GdkFocusEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkFocusEventConstructOnly = GdkEventConstructOnly;

/** A `GdkTexture` representing a GL texture object. */
export interface GdkGLTextureProps extends GdkTextureProps, GdkPaintableProps, GIconProps, GLoadableIconProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkGLTextureConstructOnly = GdkTextureConstructOnly | GdkPaintableConstructOnly | GIconConstructOnly | GLoadableIconConstructOnly;

/** Constructs [class@Gdk.Texture] objects from GL textures. */
export interface GdkGLTextureBuilderProps extends GObjectProps {
    /**
     * The color state of the texture.
     * @since 4.16
     */
    'color-state'?: Gdk.ColorState;
    /**
     * The context owning the texture.
     * @since 4.12
     */
    context?: Gdk.GLContext | null;
    /**
     * The format when downloading the texture.
     * @since 4.12
     * @default GDK_MEMORY_R8G8B8A8_PREMULTIPLIED
     */
    format?: GdkMemoryFormatNick | Gdk.MemoryFormat;
    /**
     * If the texture has a mipmap.
     * @since 4.12
     * @default FALSE
     */
    'has-mipmap'?: boolean;
    /**
     * The height of the texture.
     * @since 4.12
     * @default 0
     */
    height?: number;
    /**
     * The texture ID to use.
     * @since 4.12
     * @default 0
     */
    id?: number;
    /**
     * An optional `GLSync` object.
     * @since 4.12
     */
    sync?: never;
    /**
     * The update region for [property@Gdk.GLTextureBuilder:update-texture].
     * @since 4.12
     */
    'update-region'?: cairo.Region | null;
    /**
     * The texture [property@Gdk.GLTextureBuilder:update-region] is an update for.
     * @since 4.12
     */
    'update-texture'?: Gdk.Texture | null;
    /**
     * The width of the texture.
     * @since 4.12
     * @default 0
     */
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkGLTextureBuilderConstructOnly = GObjectConstructOnly;

/** An event related to a broken windowing system grab. */
export interface GdkGrabBrokenEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkGrabBrokenEventConstructOnly = GdkEventConstructOnly;

/** An event related to a key-based device. */
export interface GdkKeyEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkKeyEventConstructOnly = GdkEventConstructOnly;

/** A `GdkTexture` representing image data in memory. */
export interface GdkMemoryTextureProps extends GdkTextureProps, GdkPaintableProps, GIconProps, GLoadableIconProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkMemoryTextureConstructOnly = GdkTextureConstructOnly | GdkPaintableConstructOnly | GIconConstructOnly | GLoadableIconConstructOnly;

/** Constructs [class@Gdk.Texture] objects from system memory provided via [struct@GLib.Bytes]. */
export interface GdkMemoryTextureBuilderProps extends GObjectProps {
    /**
     * The bytes holding the data.
     * @since 4.16
     */
    bytes?: GLib.Bytes | null;
    /**
     * The colorstate describing the data.
     * @since 4.16
     */
    'color-state'?: Gdk.ColorState;
    /**
     * The format of the data.
     * @since 4.16
     * @default GDK_MEMORY_R8G8B8A8_PREMULTIPLIED
     */
    format?: GdkMemoryFormatNick | Gdk.MemoryFormat;
    /**
     * The height of the texture.
     * @since 4.16
     * @default 0
     */
    height?: number;
    /**
     * The rowstride of the texture.
     * @since 4.16
     * @default 0
     */
    stride?: bigint | number;
    /**
     * The update region for [property@Gdk.MemoryTextureBuilder:update-texture].
     * @since 4.16
     */
    'update-region'?: cairo.Region | null;
    /**
     * The texture [property@Gdk.MemoryTextureBuilder:update-region] is an update for.
     * @since 4.16
     */
    'update-texture'?: Gdk.Texture | null;
    /**
     * The width of the texture.
     * @since 4.16
     * @default 0
     */
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkMemoryTextureBuilderConstructOnly = GObjectConstructOnly;

/** Represents the individual outputs that are associated with a `GdkDisplay`. */
export interface GdkMonitorProps extends GObjectProps {
    /** The `GdkDisplay` of the monitor. */
    display?: Gdk.Display;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkMonitorConstructOnly = GObjectConstructOnly | 'display';

/** An event related to a pointer or touch device motion. */
export interface GdkMotionEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkMotionEventConstructOnly = GdkEventConstructOnly;

/** An event related to a pad-based device. */
export interface GdkPadEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkPadEventConstructOnly = GdkEventConstructOnly;

/** An interface for content that can be painted. */
export interface GdkPaintableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkPaintableConstructOnly = GObjectConstructOnly;

/** An event related to the proximity of a tool to a device. */
export interface GdkProximityEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkProximityEventConstructOnly = GdkEventConstructOnly;

/** An event related to a scrolling motion. */
export interface GdkScrollEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkScrollEventConstructOnly = GdkEventConstructOnly;

/** Refers to pixel data in various forms. */
export interface GdkTextureProps extends GObjectProps, GdkPaintableProps, GIconProps, GLoadableIconProps {
    /**
     * The color state of the texture.
     * @since 4.16
     */
    'color-state'?: Gdk.ColorState;
    /**
     * The height of the texture, in pixels.
     * @default 1
     */
    height?: number;
    /**
     * The width of the texture, in pixels.
     * @default 1
     */
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkTextureConstructOnly = GObjectConstructOnly | GdkPaintableConstructOnly | GIconConstructOnly | GLoadableIconConstructOnly | 'color-state' | 'height' | 'width';

/** An event related to a touch-based device. */
export interface GdkTouchEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkTouchEventConstructOnly = GdkEventConstructOnly;

/** An event related to a gesture on a touchpad device. */
export interface GdkTouchpadEventProps extends GdkEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdkTouchpadEventConstructOnly = GdkEventConstructOnly;

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
