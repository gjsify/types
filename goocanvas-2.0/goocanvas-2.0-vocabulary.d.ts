/**
 * The GIR-derived widget VOCABULARY for GooCanvas-2.0.
 *
 * GENERATED — do not edit. Provenance: GooCanvas-2.0 — dropped empty base(s): Atk.ImplementorIface
 *
 * 26 instantiable GTypes (of which 1 concrete widgets), 28 declarations, 10 enum nick unions, 0 slot candidates.
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

import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GooCanvas from './goocanvas-2.0.js';
import type Gtk from '@girs/gtk-3.0';
import type Pango from '@girs/pango-1.0';
import type { AtkObjectFactoryConstructOnly, AtkObjectFactoryProps } from '@girs/atk-1.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { GtkBuildableConstructOnly, GtkBuildableProps, GtkContainerConstructOnly, GtkContainerProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkUnitNick, GtkWidgetConstructOnly, GtkWidgetProps } from '@girs/gtk-3.0/vocabulary';
import type { PangoAlignmentNick, PangoEllipsizeModeNick, PangoWrapModeNick } from '@girs/pango-1.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GooCairoAntialiasNick = 'default' | 'none' | 'gray' | 'subpixel';
export type GooCairoFillRuleNick = 'winding' | 'even-odd';
export type GooCairoHintMetricsNick = 'default' | 'off' | 'on';
export type GooCairoLineCapNick = 'butt' | 'round' | 'square';
export type GooCairoLineJoinNick = 'miter' | 'round' | 'bevel';
export type GooCairoOperatorNick = 'clear' | 'source' | 'over' | 'in' | 'out' | 'atop' | 'dest' | 'dest-over' | 'dest-in' | 'dest-out' | 'dest-atop' | 'xor' | 'add' | 'saturate';
export type GooCanvasAnchorTypeNick = 'center' | 'north' | 'north-west' | 'north-east' | 'south' | 'south-west' | 'south-east' | 'west' | 'east' | 'n' | 'nw' | 'ne' | 's' | 'sw' | 'se' | 'w' | 'e';
export type GooCanvasAnimateTypeNick = 'freeze' | 'reset' | 'restart' | 'bounce';
export type GooCanvasItemVisibilityNick = 'hidden' | 'invisible' | 'visible' | 'visible-above-threshold';
export type GooCanvasPathCommandTypeNick = 'move-to' | 'close-path' | 'line-to' | 'horizontal-line-to' | 'vertical-line-to' | 'curve-to' | 'smooth-curve-to' | 'quadratic-curve-to' | 'smooth-quadratic-curve-to' | 'elliptical-arc';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** #GooCanvas is the main widget containing a number of canvas items. */
export interface GooCanvasProps extends GtkContainerProps, GtkBuildableProps, GtkScrollableProps {
    /** @default GOO_CANVAS_ANCHOR_NORTH_WEST */
    anchor?: GooCanvasAnchorTypeNick | GooCanvas.CanvasAnchorType;
    /** @default FALSE */
    'automatic-bounds'?: boolean;
    /** @default NULL */
    'background-color'?: string;
    /**
     * The color to use for the canvas background, specified as a GdkRGBA.
     * @since 2.0.1
     */
    'background-color-gdk-rgba'?: Gdk.RGBA;
    /** @default 0 */
    'background-color-rgb'?: number;
    /** @default TRUE */
    'bounds-from-origin'?: boolean;
    /** @default 0.000000 */
    'bounds-padding'?: number;
    /** @default TRUE */
    'clear-background'?: boolean;
    /** @default FALSE */
    'integer-layout'?: boolean;
    /** @default FALSE */
    'redraw-when-scrolled'?: boolean;
    /** @default 96.000000 */
    'resolution-x'?: number;
    /** @default 96.000000 */
    'resolution-y'?: number;
    /** @default 1.000000 */
    scale?: number;
    /** @default 1.000000 */
    'scale-x'?: number;
    /** @default 1.000000 */
    'scale-y'?: number;
    /** @default GTK_UNIT_NONE */
    units?: GtkUnitNick | Gtk.Unit;
    /** @default 0.000000 */
    x1?: number;
    /** @default 1000.000000 */
    x2?: number;
    /** @default 0.000000 */
    y1?: number;
    /** @default 1000.000000 */
    y2?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

export interface GooCanvasAccessibleFactoryProps extends AtkObjectFactoryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasAccessibleFactoryConstructOnly = AtkObjectFactoryConstructOnly;

/** GooCanvasEllipse represents an ellipse item. */
export interface GooCanvasEllipseProps extends GooCanvasItemSimpleProps, GooCanvasItemProps {
    /** @default 0.000000 */
    'center-x'?: number;
    /** @default 0.000000 */
    'center-y'?: number;
    /** @default 0.000000 */
    height?: number;
    /** @default 0.000000 */
    'radius-x'?: number;
    /** @default 0.000000 */
    'radius-y'?: number;
    /** @default 0.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasEllipseConstructOnly = GooCanvasItemSimpleConstructOnly | GooCanvasItemConstructOnly;

/** GooCanvasEllipseModel represents a model for ellipse items. */
export interface GooCanvasEllipseModelProps extends GooCanvasItemModelSimpleProps, GooCanvasItemModelProps {
    /** @default 0.000000 */
    'center-x'?: number;
    /** @default 0.000000 */
    'center-y'?: number;
    /** @default 0.000000 */
    height?: number;
    /** @default 0.000000 */
    'radius-x'?: number;
    /** @default 0.000000 */
    'radius-y'?: number;
    /** @default 0.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasEllipseModelConstructOnly = GooCanvasItemModelSimpleConstructOnly | GooCanvasItemModelConstructOnly;

/** GooCanvasGrid represents a grid item. */
export interface GooCanvasGridProps extends GooCanvasItemSimpleProps, GooCanvasItemProps {
    /** @default NULL */
    'border-color'?: string;
    /**
     * The color to use for the border, specified as a GdkRGBA.
     * @since 2.0.1
     */
    'border-color-gdk-rgba'?: Gdk.RGBA;
    /** @default 0 */
    'border-color-rgba'?: number;
    'border-pattern'?: GooCanvas.CairoPattern;
    'border-pixbuf'?: GdkPixbuf.Pixbuf;
    /** @default -1.000000 */
    'border-width'?: number;
    /** @default 0.000000 */
    height?: number;
    /** @default NULL */
    'horz-grid-line-color'?: string;
    /**
     * The color to use for the horizontal grid lines, specified as a GdkRGBA.
     * @since 2.0.1
     */
    'horz-grid-line-color-gdk-rgba'?: Gdk.RGBA;
    /** @default 0 */
    'horz-grid-line-color-rgba'?: number;
    'horz-grid-line-pattern'?: GooCanvas.CairoPattern;
    'horz-grid-line-pixbuf'?: GdkPixbuf.Pixbuf;
    /** @default -1.000000 */
    'horz-grid-line-width'?: number;
    /** @default TRUE */
    'show-horz-grid-lines'?: boolean;
    /** @default TRUE */
    'show-vert-grid-lines'?: boolean;
    /** @default NULL */
    'vert-grid-line-color'?: string;
    /**
     * The color to use for the vertical grid lines, specified as a GdkRGBA.
     * @since 2.0.1
     */
    'vert-grid-line-color-gdk-rgba'?: Gdk.RGBA;
    /** @default 0 */
    'vert-grid-line-color-rgba'?: number;
    'vert-grid-line-pattern'?: GooCanvas.CairoPattern;
    'vert-grid-line-pixbuf'?: GdkPixbuf.Pixbuf;
    /** @default -1.000000 */
    'vert-grid-line-width'?: number;
    /** @default FALSE */
    'vert-grid-lines-on-top'?: boolean;
    /** @default 0.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    'x-offset'?: number;
    /** @default 10.000000 */
    'x-step'?: number;
    /** @default 0.000000 */
    y?: number;
    /** @default 0.000000 */
    'y-offset'?: number;
    /** @default 10.000000 */
    'y-step'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasGridConstructOnly = GooCanvasItemSimpleConstructOnly | GooCanvasItemConstructOnly;

/** GooCanvasGridModel represents a model for grid items. */
export interface GooCanvasGridModelProps extends GooCanvasItemModelSimpleProps, GooCanvasItemModelProps {
    /** @default NULL */
    'border-color'?: string;
    'border-color-gdk-rgba'?: Gdk.RGBA;
    /** @default 0 */
    'border-color-rgba'?: number;
    'border-pattern'?: GooCanvas.CairoPattern;
    'border-pixbuf'?: GdkPixbuf.Pixbuf;
    /** @default -1.000000 */
    'border-width'?: number;
    /** @default 0.000000 */
    height?: number;
    /** @default NULL */
    'horz-grid-line-color'?: string;
    'horz-grid-line-color-gdk-rgba'?: Gdk.RGBA;
    /** @default 0 */
    'horz-grid-line-color-rgba'?: number;
    'horz-grid-line-pattern'?: GooCanvas.CairoPattern;
    'horz-grid-line-pixbuf'?: GdkPixbuf.Pixbuf;
    /** @default -1.000000 */
    'horz-grid-line-width'?: number;
    /** @default TRUE */
    'show-horz-grid-lines'?: boolean;
    /** @default TRUE */
    'show-vert-grid-lines'?: boolean;
    /** @default NULL */
    'vert-grid-line-color'?: string;
    'vert-grid-line-color-gdk-rgba'?: Gdk.RGBA;
    /** @default 0 */
    'vert-grid-line-color-rgba'?: number;
    'vert-grid-line-pattern'?: GooCanvas.CairoPattern;
    'vert-grid-line-pixbuf'?: GdkPixbuf.Pixbuf;
    /** @default -1.000000 */
    'vert-grid-line-width'?: number;
    /** @default FALSE */
    'vert-grid-lines-on-top'?: boolean;
    /** @default 0.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    'x-offset'?: number;
    /** @default 10.000000 */
    'x-step'?: number;
    /** @default 0.000000 */
    y?: number;
    /** @default 0.000000 */
    'y-offset'?: number;
    /** @default 10.000000 */
    'y-step'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasGridModelConstructOnly = GooCanvasItemModelSimpleConstructOnly | GooCanvasItemModelConstructOnly;

/** #GooCanvasGroup represents a group of items. */
export interface GooCanvasGroupProps extends GooCanvasItemSimpleProps, GooCanvasItemProps {
    /** @default -1.000000 */
    height?: number;
    /** @default -1.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasGroupConstructOnly = GooCanvasItemSimpleConstructOnly | GooCanvasItemConstructOnly;

/** #GooCanvasGroupModel represents a group of items. */
export interface GooCanvasGroupModelProps extends GooCanvasItemModelSimpleProps, GooCanvasItemModelProps {
    /** @default -1.000000 */
    height?: number;
    /** @default -1.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasGroupModelConstructOnly = GooCanvasItemModelSimpleConstructOnly | GooCanvasItemModelConstructOnly;

/** GooCanvasImage represents an image item. */
export interface GooCanvasImageProps extends GooCanvasItemSimpleProps, GooCanvasItemProps {
    /** @default 1.000000 */
    alpha?: number;
    /** @default 0.000000 */
    height?: number;
    pattern?: GooCanvas.CairoPattern;
    pixbuf?: GdkPixbuf.Pixbuf;
    /** @default FALSE */
    'scale-to-fit'?: boolean;
    /** @default 0.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasImageConstructOnly = GooCanvasItemSimpleConstructOnly | GooCanvasItemConstructOnly;

/** GooCanvasImageModel represent a model for image items. */
export interface GooCanvasImageModelProps extends GooCanvasItemModelSimpleProps, GooCanvasItemModelProps {
    /** @default 1.000000 */
    alpha?: number;
    /** @default 0.000000 */
    height?: number;
    pattern?: GooCanvas.CairoPattern;
    pixbuf?: GdkPixbuf.Pixbuf;
    /** @default FALSE */
    'scale-to-fit'?: boolean;
    /** @default 0.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasImageModelConstructOnly = GooCanvasItemModelSimpleConstructOnly | GooCanvasItemModelConstructOnly;

/** #GooCanvasItem defines the interface that canvas items must implement, and contains methods for operating on canvas items. */
export interface GooCanvasItemProps extends GObjectProps {
    /** @default FALSE */
    'can-focus'?: boolean;
    /** @default NULL */
    description?: string;
    parent?: GooCanvas.CanvasItem;
    /** @default GOO_CANVAS_EVENTS_VISIBLE_MASK | GOO_CANVAS_EVENTS_PAINTED_MASK | GOO_CANVAS_EVENTS_FILL_MASK | GOO_CANVAS_EVENTS_STROKE_MASK */
    'pointer-events'?: number;
    /** @default NULL */
    title?: string;
    /**
     * The tooltip to display for the item, or %NULL to display no tooltip.
     * @default NULL
     */
    tooltip?: string;
    transform?: GooCanvas.CairoMatrix;
    /** @default GOO_CANVAS_ITEM_VISIBLE */
    visibility?: GooCanvasItemVisibilityNick | GooCanvas.CanvasItemVisibility;
    /** @default 0.000000 */
    'visibility-threshold'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasItemConstructOnly = GObjectConstructOnly;

export interface GooCanvasItemAccessibleFactoryProps extends AtkObjectFactoryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasItemAccessibleFactoryConstructOnly = AtkObjectFactoryConstructOnly;

/** #GooCanvasItemModel defines the interface that models for canvas items must implement, and contains methods for operating on canvas item models. */
export interface GooCanvasItemModelProps extends GObjectProps {
    /** @default FALSE */
    'can-focus'?: boolean;
    /** @default NULL */
    description?: string;
    parent?: GooCanvas.CanvasItemModel;
    /** @default GOO_CANVAS_EVENTS_VISIBLE_MASK | GOO_CANVAS_EVENTS_PAINTED_MASK | GOO_CANVAS_EVENTS_FILL_MASK | GOO_CANVAS_EVENTS_STROKE_MASK */
    'pointer-events'?: number;
    /** @default NULL */
    title?: string;
    /** @default NULL */
    tooltip?: string;
    transform?: GooCanvas.CairoMatrix;
    /** @default GOO_CANVAS_ITEM_VISIBLE */
    visibility?: GooCanvasItemVisibilityNick | GooCanvas.CanvasItemVisibility;
    /** @default 0.000000 */
    'visibility-threshold'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasItemModelConstructOnly = GObjectConstructOnly;

/** #GooCanvasItemModelSimple is used as a base class for the standard canvas item models. */
export interface GooCanvasItemModelSimpleProps extends GObjectProps, GooCanvasItemModelProps {
    /** @default CAIRO_ANTIALIAS_GRAY */
    antialias?: GooCairoAntialiasNick | GooCanvas.CairoAntialias;
    /** @default CAIRO_FILL_RULE_WINDING */
    'clip-fill-rule'?: GooCairoFillRuleNick | GooCanvas.CairoFillRule;
    /**
     * The sequence of commands describing the clip path of the item, specified as a string using the same syntax as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector Graphics (SVG)</ulink…
     * @default NULL
     */
    'clip-path'?: string;
    /** @default NULL */
    'fill-color'?: string;
    'fill-color-gdk-rgba'?: Gdk.RGBA;
    /** @default 0 */
    'fill-color-rgba'?: number;
    'fill-pattern'?: GooCanvas.CairoPattern;
    'fill-pixbuf'?: GdkPixbuf.Pixbuf;
    /** @default CAIRO_FILL_RULE_WINDING */
    'fill-rule'?: GooCairoFillRuleNick | GooCanvas.CairoFillRule;
    /** @default NULL */
    font?: string;
    'font-desc'?: Pango.FontDescription;
    /** @default CAIRO_HINT_METRICS_OFF */
    'hint-metrics'?: GooCairoHintMetricsNick | GooCanvas.CairoHintMetrics;
    /** @default CAIRO_LINE_CAP_BUTT */
    'line-cap'?: GooCairoLineCapNick | GooCanvas.CairoLineCap;
    'line-dash'?: GooCanvas.CanvasLineDash;
    /** @default CAIRO_LINE_JOIN_MITER */
    'line-join'?: GooCairoLineJoinNick | GooCanvas.CairoLineJoin;
    /** @default 10.000000 */
    'line-join-miter-limit'?: number;
    /** @default 2.000000 */
    'line-width'?: number;
    /** @default CAIRO_OPERATOR_OVER */
    operator?: GooCairoOperatorNick | GooCanvas.CairoOperator;
    /** @default NULL */
    'stroke-color'?: string;
    'stroke-color-gdk-rgba'?: Gdk.RGBA;
    /** @default 0 */
    'stroke-color-rgba'?: number;
    'stroke-pattern'?: GooCanvas.CairoPattern;
    'stroke-pixbuf'?: GdkPixbuf.Pixbuf;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasItemModelSimpleConstructOnly = GObjectConstructOnly | GooCanvasItemModelConstructOnly;

/** #GooCanvasItemSimple is used as a base class for all of the standard canvas items. */
export interface GooCanvasItemSimpleProps extends GObjectProps, GooCanvasItemProps {
    /** @default CAIRO_ANTIALIAS_GRAY */
    antialias?: GooCairoAntialiasNick | GooCanvas.CairoAntialias;
    /** @default CAIRO_FILL_RULE_WINDING */
    'clip-fill-rule'?: GooCairoFillRuleNick | GooCanvas.CairoFillRule;
    /**
     * The sequence of commands describing the clip path of the item, specified as a string using the same syntax as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector Graphics (SVG)</ulink…
     * @default NULL
     */
    'clip-path'?: string;
    /** @default NULL */
    'fill-color'?: string;
    /**
     * The color to use to paint the interior of the item, specified as a GdkRGBA.
     * @since 2.0.1
     */
    'fill-color-gdk-rgba'?: Gdk.RGBA;
    /** @default 0 */
    'fill-color-rgba'?: number;
    'fill-pattern'?: GooCanvas.CairoPattern;
    'fill-pixbuf'?: GdkPixbuf.Pixbuf;
    /** @default CAIRO_FILL_RULE_WINDING */
    'fill-rule'?: GooCairoFillRuleNick | GooCanvas.CairoFillRule;
    /** @default NULL */
    font?: string;
    'font-desc'?: Pango.FontDescription;
    /** @default CAIRO_HINT_METRICS_OFF */
    'hint-metrics'?: GooCairoHintMetricsNick | GooCanvas.CairoHintMetrics;
    /** @default CAIRO_LINE_CAP_BUTT */
    'line-cap'?: GooCairoLineCapNick | GooCanvas.CairoLineCap;
    'line-dash'?: GooCanvas.CanvasLineDash;
    /** @default CAIRO_LINE_JOIN_MITER */
    'line-join'?: GooCairoLineJoinNick | GooCanvas.CairoLineJoin;
    /** @default 10.000000 */
    'line-join-miter-limit'?: number;
    /** @default 2.000000 */
    'line-width'?: number;
    /** @default CAIRO_OPERATOR_OVER */
    operator?: GooCairoOperatorNick | GooCanvas.CairoOperator;
    /** @default NULL */
    'stroke-color'?: string;
    /**
     * The color to use for the item's perimeter, specified as a GdkRGBA.
     * @since 2.0.1
     */
    'stroke-color-gdk-rgba'?: Gdk.RGBA;
    /** @default 0 */
    'stroke-color-rgba'?: number;
    'stroke-pattern'?: GooCanvas.CairoPattern;
    'stroke-pixbuf'?: GdkPixbuf.Pixbuf;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasItemSimpleConstructOnly = GObjectConstructOnly | GooCanvasItemConstructOnly;

/** GooCanvasPath represents a path item, which is a series of one or more lines, bezier curves, or elliptical arcs. */
export interface GooCanvasPathProps extends GooCanvasItemSimpleProps, GooCanvasItemProps {
    /**
     * The sequence of path commands, specified as a string using the same syntax as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector Graphics (SVG)</ulink> path element.
     * @default NULL
     */
    data?: string;
    /** @default 0.000000 */
    height?: number;
    /** @default 0.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasPathConstructOnly = GooCanvasItemSimpleConstructOnly | GooCanvasItemConstructOnly;

/** GooCanvasPathModel represents a model for path items, which are a series of one or more lines, bezier curves, or elliptical arcs. */
export interface GooCanvasPathModelProps extends GooCanvasItemModelSimpleProps, GooCanvasItemModelProps {
    /** @default NULL */
    data?: string;
    /** @default 0.000000 */
    height?: number;
    /** @default 0.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasPathModelConstructOnly = GooCanvasItemModelSimpleConstructOnly | GooCanvasItemModelConstructOnly;

/** GooCanvasPolyline represents a polyline item, which is a series of one or more lines, with optional arrows at either end. */
export interface GooCanvasPolylineProps extends GooCanvasItemSimpleProps, GooCanvasItemProps {
    /** @default 5.000000 */
    'arrow-length'?: number;
    /** @default 4.000000 */
    'arrow-tip-length'?: number;
    /** @default 4.000000 */
    'arrow-width'?: number;
    /** @default FALSE */
    'close-path'?: boolean;
    /** @default FALSE */
    'end-arrow'?: boolean;
    /** @default 0.000000 */
    height?: number;
    points?: GooCanvas.CanvasPoints;
    /** @default FALSE */
    'start-arrow'?: boolean;
    /** @default 0.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasPolylineConstructOnly = GooCanvasItemSimpleConstructOnly | GooCanvasItemConstructOnly;

/** GooCanvasPolylineModel represents a model for polyline items, which are a series of one or more lines, with optional arrows at either end. */
export interface GooCanvasPolylineModelProps extends GooCanvasItemModelSimpleProps, GooCanvasItemModelProps {
    /** @default 5.000000 */
    'arrow-length'?: number;
    /** @default 4.000000 */
    'arrow-tip-length'?: number;
    /** @default 4.000000 */
    'arrow-width'?: number;
    /** @default FALSE */
    'close-path'?: boolean;
    /** @default FALSE */
    'end-arrow'?: boolean;
    /** @default 0.000000 */
    height?: number;
    points?: GooCanvas.CanvasPoints;
    /** @default FALSE */
    'start-arrow'?: boolean;
    /** @default 0.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasPolylineModelConstructOnly = GooCanvasItemModelSimpleConstructOnly | GooCanvasItemModelConstructOnly;

/** GooCanvasRect represents a rectangle item. */
export interface GooCanvasRectProps extends GooCanvasItemSimpleProps, GooCanvasItemProps {
    /** @default 0.000000 */
    height?: number;
    /** @default 0.000000 */
    'radius-x'?: number;
    /** @default 0.000000 */
    'radius-y'?: number;
    /** @default 0.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasRectConstructOnly = GooCanvasItemSimpleConstructOnly | GooCanvasItemConstructOnly;

/** GooCanvasRectModel represents a model for rectangle items. */
export interface GooCanvasRectModelProps extends GooCanvasItemModelSimpleProps, GooCanvasItemModelProps {
    /** @default 0.000000 */
    height?: number;
    /** @default 0.000000 */
    'radius-x'?: number;
    /** @default 0.000000 */
    'radius-y'?: number;
    /** @default 0.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasRectModelConstructOnly = GooCanvasItemModelSimpleConstructOnly | GooCanvasItemModelConstructOnly;

/** #GooCanvasStyle provides support for cascading style properties for canvas items. */
export interface GooCanvasStyleProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasStyleConstructOnly = GObjectConstructOnly;

/** #GooCanvasTable is a table container used to lay out other canvas items. */
export interface GooCanvasTableProps extends GooCanvasGroupProps, GooCanvasItemProps {
    /** @default 0.000000 */
    'column-spacing'?: number;
    /** @default FALSE */
    'homogeneous-columns'?: boolean;
    /** @default FALSE */
    'homogeneous-rows'?: boolean;
    /** @default 0.000000 */
    'horz-grid-line-width'?: number;
    /** @default 0.000000 */
    'row-spacing'?: number;
    /** @default 0.000000 */
    'vert-grid-line-width'?: number;
    /** @default 0.000000 */
    'x-border-spacing'?: number;
    /** @default 0.000000 */
    'y-border-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasTableConstructOnly = GooCanvasGroupConstructOnly | GooCanvasItemConstructOnly;

/** #GooCanvasTableModel is a model for a table container used to lay out other canvas items. */
export interface GooCanvasTableModelProps extends GooCanvasGroupModelProps, GooCanvasItemModelProps {
    /** @default 0.000000 */
    'column-spacing'?: number;
    /** @default FALSE */
    'homogeneous-columns'?: boolean;
    /** @default FALSE */
    'homogeneous-rows'?: boolean;
    /** @default 0.000000 */
    'horz-grid-line-width'?: number;
    /** @default 0.000000 */
    'row-spacing'?: number;
    /** @default 0.000000 */
    'vert-grid-line-width'?: number;
    /** @default 0.000000 */
    'x-border-spacing'?: number;
    /** @default 0.000000 */
    'y-border-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasTableModelConstructOnly = GooCanvasGroupModelConstructOnly | GooCanvasItemModelConstructOnly;

/** GooCanvasText represents a text item. */
export interface GooCanvasTextProps extends GooCanvasItemSimpleProps, GooCanvasItemProps {
    /** @default PANGO_ALIGN_LEFT */
    alignment?: PangoAlignmentNick | Pango.Alignment;
    /** @default GOO_CANVAS_ANCHOR_NORTH_WEST */
    anchor?: GooCanvasAnchorTypeNick | GooCanvas.CanvasAnchorType;
    /** @default PANGO_ELLIPSIZE_NONE */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /** @default -1.000000 */
    height?: number;
    /** @default NULL */
    text?: string;
    /** @default FALSE */
    'use-markup'?: boolean;
    /** @default -1.000000 */
    width?: number;
    /** @default PANGO_WRAP_WORD */
    wrap?: PangoWrapModeNick | Pango.WrapMode;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasTextConstructOnly = GooCanvasItemSimpleConstructOnly | GooCanvasItemConstructOnly;

/** GooCanvasTextModel represents a model for text items. */
export interface GooCanvasTextModelProps extends GooCanvasItemModelSimpleProps, GooCanvasItemModelProps {
    /** @default PANGO_ALIGN_LEFT */
    alignment?: PangoAlignmentNick | Pango.Alignment;
    /** @default GOO_CANVAS_ANCHOR_NORTH_WEST */
    anchor?: GooCanvasAnchorTypeNick | GooCanvas.CanvasAnchorType;
    /** @default PANGO_ELLIPSIZE_NONE */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /** @default -1.000000 */
    height?: number;
    /** @default NULL */
    text?: string;
    /** @default FALSE */
    'use-markup'?: boolean;
    /** @default -1.000000 */
    width?: number;
    /** @default PANGO_WRAP_WORD */
    wrap?: PangoWrapModeNick | Pango.WrapMode;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasTextModelConstructOnly = GooCanvasItemModelSimpleConstructOnly | GooCanvasItemModelConstructOnly;

/** GooCanvasWidget provides support for placing any GtkWidget in the canvas. */
export interface GooCanvasWidgetProps extends GooCanvasItemSimpleProps, GooCanvasItemProps {
    /** @default GOO_CANVAS_ANCHOR_NORTH_WEST */
    anchor?: GooCanvasAnchorTypeNick | GooCanvas.CanvasAnchorType;
    /** @default -1.000000 */
    height?: number;
    widget?: Gtk.Widget;
    /** @default -1.000000 */
    width?: number;
    /** @default 0.000000 */
    x?: number;
    /** @default 0.000000 */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasWidgetConstructOnly = GooCanvasItemSimpleConstructOnly | GooCanvasItemConstructOnly;

export interface GooCanvasWidgetAccessibleFactoryProps extends AtkObjectFactoryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GooCanvasWidgetAccessibleFactoryConstructOnly = AtkObjectFactoryConstructOnly;

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
    GooCanvas: {
        class: GooCanvas.Canvas;
        props: GooCanvasProps;
        signals: GooCanvas.Canvas.SignalSignatures;
        constructOnly: GooCanvasConstructOnly;
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
