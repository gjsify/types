/**
 * The GIR-derived widget VOCABULARY for AgsGui-8.0.
 *
 * GENERATED — do not edit. Provenance: AgsGui-8.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object — prop(s) no TypeScript value satisfies: AgsGui.Cartesian.plot AgsGui.Cartesian.surface AgsGui.Cartesian.translate-data AgsGui.Cartesian.x-label AgsGui.Cartesian.x-label-data AgsGui.Cartesian.x-scale-data AgsGui.Cartesian.x-step-data AgsGui.Cartesian.y-label AgsGui.Cartesian.y-label-data AgsGui.Cartesian.y-scale-data AgsGui.Cartesian.y-step-data AgsGui.FileDialog.file-widget
 *
 * 23 concrete widgets, 23 declarations, 0 enum nick unions, 3 slot candidates.
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

import type AgsGui from './agsgui-8.0.js';
import type GObject from '@girs/gobject-2.0';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkAccessibleRangeConstructOnly, GtkAccessibleRangeProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkGridConstructOnly, GtkGridProps, GtkNativeConstructOnly, GtkNativeProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkRootConstructOnly, GtkRootProps, GtkShortcutManagerConstructOnly, GtkShortcutManagerProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-4.0/surface';

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

export interface AgsCartesianProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The center of lines
     * @since 3.0.0
     */
    center?: number;
    /**
     * The font's size to draw labels and units.
     * @since 3.0.0
     */
    'font-size'?: number;
    /**
     * The line width.
     * @since 3.0.0
     */
    'line-width'?: number;
    /**
     * The #GList-struct containig #AgsPlot.
     * @since 4.0.0
     */
    plot?: never;
    /**
     * The points radius.
     * @since 3.0.0
     */
    'point-radius'?: number;
    /**
     * The cairo surface.
     * @since 4.0.0
     */
    surface?: never;
    /**
     * The data to pass to translate function.
     * @since 4.0.0
     */
    'translate-data'?: never;
    /**
     * The scale factor to use with x big scale function.
     * @since 4.0.0
     */
    'x-big-scale-factor'?: number;
    /**
     * The x end.
     * @since 3.0.0
     */
    'x-end'?: number;
    /**
     * The x labels as a string array.
     * @since 3.0.0
     */
    'x-label'?: never;
    /**
     * The data to pass to x label conversion function.
     * @since 4.0.0
     */
    'x-label-data'?: never;
    /**
     * The factor to use with x label function.
     * @since 4.0.0
     */
    'x-label-factor'?: number;
    /**
     * The precision to use with x label function.
     * @since 4.0.0
     */
    'x-label-precision'?: number;
    /**
     * The x label start position.
     * @since 3.0.0
     */
    'x-label-start'?: number;
    /**
     * The x label step width.
     * @since 3.0.0
     */
    'x-label-step-width'?: number;
    /**
     * The horizontal x margin.
     * @since 3.0.0
     */
    'x-margin'?: number;
    /**
     * The data to pass to x scale conversion function.
     * @since 4.0.0
     */
    'x-scale-data'?: never;
    /**
     * The width of a x scale step.
     * @since 3.0.0
     */
    'x-scale-step-width'?: number;
    /**
     * The scale factor to use with x small scale function.
     * @since 4.0.0
     */
    'x-small-scale-factor'?: number;
    /**
     * The x start.
     * @since 3.0.0
     */
    'x-start'?: number;
    /**
     * The x step.
     * @since 3.0.0
     */
    'x-step'?: number;
    /**
     * The data to pass to x step conversion function.
     * @since 4.0.0
     */
    'x-step-data'?: never;
    /**
     * The step factor to use with x step conversion function.
     * @since 4.0.0
     */
    'x-step-factor'?: number;
    /**
     * The width of a x step.
     * @since 3.0.0
     */
    'x-step-width'?: number;
    /**
     * The x translate point.
     * @since 4.0.0
     */
    'x-translate-point'?: number;
    /**
     * The x unit label.
     * @since 3.0.0
     */
    'x-unit'?: string;
    /**
     * The x unit's size.
     * @since 4.0.0
     */
    'x-unit-size'?: number;
    /**
     * The x unit's x0 position.
     * @since 3.0.0
     */
    'x-unit-x0'?: number;
    /**
     * The x unit's y0 position.
     * @since 3.0.0
     */
    'x-unit-y0'?: number;
    /**
     * The scale factor to use with y big scale function.
     * @since 4.0.0
     */
    'y-big-scale-factor'?: number;
    /**
     * The y end.
     * @since 3.0.0
     */
    'y-end'?: number;
    /**
     * The y labels as a string array.
     * @since 3.0.0
     */
    'y-label'?: never;
    /**
     * The data to pass to y label conversion function.
     * @since 4.0.0
     */
    'y-label-data'?: never;
    /**
     * The factor to use with y label function.
     * @since 4.0.0
     */
    'y-label-factor'?: number;
    /**
     * The precision to use with y label function.
     * @since 4.0.0
     */
    'y-label-precision'?: number;
    /**
     * The y label start position.
     * @since 3.0.0
     */
    'y-label-start'?: number;
    /**
     * The y label step height.
     * @since 3.0.0
     */
    'y-label-step-height'?: number;
    /**
     * The horizontal y margin.
     * @since 3.0.0
     */
    'y-margin'?: number;
    /**
     * The data to pass to y scale conversion function.
     * @since 4.0.0
     */
    'y-scale-data'?: never;
    /**
     * The height of a y scale step.
     * @since 3.0.0
     */
    'y-scale-step-height'?: number;
    /**
     * The scale factor to use with y small scale function.
     * @since 4.0.0
     */
    'y-small-scale-factor'?: number;
    /**
     * The y start.
     * @since 3.0.0
     */
    'y-start'?: number;
    /**
     * The y step.
     * @since 3.0.0
     */
    'y-step'?: number;
    /**
     * The data to pass to y step conversion function.
     * @since 4.0.0
     */
    'y-step-data'?: never;
    /**
     * The step factor to use with y step conversion function.
     * @since 4.0.0
     */
    'y-step-factor'?: number;
    /**
     * The height of a y step.
     * @since 3.0.0
     */
    'y-step-height'?: number;
    /**
     * The y translate point.
     * @since 4.0.0
     */
    'y-translate-point'?: number;
    /**
     * The y unit label.
     * @since 3.0.0
     */
    'y-unit'?: string;
    /**
     * The y unit's size.
     * @since 4.0.0
     */
    'y-unit-size'?: number;
    /**
     * The y unit's x0 position.
     * @since 3.0.0
     */
    'y-unit-x0'?: number;
    /**
     * The y unit's y0 position.
     * @since 3.0.0
     */
    'y-unit-y0'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsCartesianConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface AgsDialProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The adjustment storing current value and boundaries.
     * @since 3.0.0
     */
    adjustment?: GObject.Object;
    /**
     * The buttons height.
     * @since 3.0.0
     */
    'button-height'?: number;
    /**
     * The buttons width.
     * @since 3.0.0
     */
    'button-width'?: number;
    /**
     * The font name of the dials.
     * @since 8.0.0
     */
    'font-name'?: string;
    /**
     * The font size of the buttons.
     * @since 3.0.0
     */
    'font-size'?: number;
    /**
     * The button's margin left.
     * @since 3.0.0
     */
    'margin-left'?: number;
    /**
     * The button's margin right.
     * @since 3.0.0
     */
    'margin-right'?: number;
    /**
     * The outline strength of the knob.
     * @since 3.0.0
     */
    'outline-strength'?: number;
    /**
     * The radius of the knob.
     * @since 3.0.0
     */
    radius?: number;
    /**
     * The precision of the scale.
     * @since 3.0.0
     */
    'scale-precision'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsDialConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface AgsExpanderProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsExpanderConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsExpanderSetProps extends GtkGridProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsExpanderSetConstructOnly = GtkGridConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsFileDialogProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * The file widget.
     * @since 6.6.0
     */
    'file-widget'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFileDialogConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

export interface AgsFileEntryProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The file widget.
     * @since 7.5.0
     */
    filename?: string;
    /**
     * The file widget.
     * @since 7.5.0
     */
    'im-module'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFileEntryConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsFileWidgetProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The app generic path.
     * @since 6.6.0
     */
    'app-generic-path'?: string;
    /**
     * The app home path.
     * @since 6.6.0
     */
    'app-home-path'?: string;
    /**
     * The recently used filename.
     * @since 6.6.0
     */
    'bookmark-filename'?: string;
    /**
     * The current path.
     * @since 6.6.0
     */
    'current-path'?: string;
    /**
     * The default bundle.
     * @since 6.6.0
     */
    'default-bundle'?: string;
    /**
     * The default path.
     * @since 6.6.0
     */
    'default-path'?: string;
    /**
     * The file magic executable.
     * @since 6.6.0
     */
    'file-magic-executable'?: string;
    /**
     * The home path.
     * @since 6.6.0
     */
    'home-path'?: string;
    /**
     * The recently used filename.
     * @since 6.6.0
     */
    'recently-used-filename'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFileWidgetConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsIconLinkProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The assigned action.
     * @since 6.6.0
     */
    action?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsIconLinkConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsIndicatorProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The adjustment giving indicator value.
     * @since 3.0.0
     */
    adjustment?: GObject.Object;
    /**
     * The indicator's segment count.
     * @since 3.0.0
     */
    'segment-count'?: number;
    /**
     * The indicator's segment height.
     * @since 3.0.0
     */
    'segment-height'?: number;
    /**
     * The indicator's segment padding.
     * @since 3.0.0
     */
    'segment-padding'?: number;
    /**
     * The indicator's segment width.
     * @since 3.0.0
     */
    'segment-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsIndicatorConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsInputDialogProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsInputDialogConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

export interface AgsLedProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The led's segment height.
     * @since 4.0.0
     */
    'segment-height'?: number;
    /**
     * The led's segment width.
     * @since 4.0.0
     */
    'segment-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLedConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface AgsLedArrayProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The count of leds available.
     * @since 3.0.0
     */
    'led-count'?: number;
    /**
     * The segment height of one led.
     * @since 4.0.0
     */
    'segment-height'?: number;
    /**
     * The segment width of one led.
     * @since 4.0.0
     */
    'segment-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLedArrayConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsLevelProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The data format.
     * @since 4.0.0
     */
    'data-format'?: number;
    /**
     * The level's lower range.
     * @since 3.0.0
     */
    lower?: number;
    /**
     * The level's default value.
     * @since 3.0.0
     */
    'normalized-volume'?: number;
    /**
     * The level's samplerate.
     * @since 5.1.0
     */
    samplerate?: number;
    /**
     * The level's upper range.
     * @since 3.0.0
     */
    upper?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLevelConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsLevelBoxProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLevelBoxConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsNotebookProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The tab's height.
     * @since 4.0.0
     */
    'tab-height'?: number;
    /**
     * The tab's width.
     * @since 4.0.0
     */
    'tab-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsNotebookConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsPianoProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The base key code.
     * @since 3.0.0
     */
    'base-key-code'?: number;
    /**
     * The base note to use as lower.
     * @since 3.0.0
     */
    'base-note'?: string;
    /**
     * The count of keys to be drawn.
     * @since 3.0.0
     */
    'key-count'?: number;
    /**
     * The key height to use for drawing a key.
     * @since 3.0.0
     */
    'key-height'?: number;
    /**
     * The key width to use for drawing a key.
     * @since 3.0.0
     */
    'key-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsPianoConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsRulerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The adjustment.
     * @since 3.0.0
     */
    adjustment?: GObject.Object;
    /**
     * The factor.
     * @since 4.0.0
     */
    factor?: number;
    /**
     * The font size.
     * @since 3.6.15
     */
    'font-size'?: number;
    /**
     * The large step's width.
     * @since 3.0.0
     */
    'large-step'?: number;
    /**
     * The precision.
     * @since 4.0.0
     */
    precision?: number;
    /**
     * The scale precision.
     * @since 4.0.0
     */
    'scale-precision'?: number;
    /**
     * The small step's width.
     * @since 3.0.0
     */
    'small-step'?: number;
    /**
     * The step's width.
     * @since 3.0.0
     */
    step?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRulerConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsScaleProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The scale's control name.
     * @since 3.0.0
     */
    'control-name'?: string;
    /**
     * The scale's default value.
     * @since 3.0.0
     */
    'default-value'?: number;
    /**
     * The scale's lower range.
     * @since 3.0.0
     */
    lower?: number;
    /**
     * The scale's upper range.
     * @since 3.0.0
     */
    upper?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsScaleConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsScaleBoxProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsScaleBoxConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsScrolledLevelBoxProps extends GtkGridProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsScrolledLevelBoxConstructOnly = GtkGridConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsScrolledPianoProps extends GtkGridProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsScrolledPianoConstructOnly = GtkGridConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsScrolledScaleBoxProps extends GtkGridProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsScrolledScaleBoxConstructOnly = GtkGridConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface AgsTempoProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The tempo's control name.
     * @since 5.1.0
     */
    'control-name'?: string;
    /**
     * The tempo's default value.
     * @since 5.1.0
     */
    'default-value'?: number;
    /**
     * The tempo's lower range.
     * @since 5.1.0
     */
    lower?: number;
    /**
     * The tempo's upper range.
     * @since 5.1.0
     */
    upper?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsTempoConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

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
    AgsCartesian: {
        class: AgsGui.Cartesian;
        props: AgsCartesianProps;
        signals: AgsGui.Cartesian.SignalSignatures;
        constructOnly: AgsCartesianConstructOnly;
        slotCandidates: {};
    };
    AgsDial: {
        class: AgsGui.Dial;
        props: AgsDialProps;
        signals: AgsGui.Dial.SignalSignatures;
        constructOnly: AgsDialConstructOnly;
        slotCandidates: {};
    };
    AgsExpander: {
        class: AgsGui.Expander;
        props: AgsExpanderProps;
        signals: AgsGui.Expander.SignalSignatures;
        constructOnly: AgsExpanderConstructOnly;
        slotCandidates: {};
    };
    AgsExpanderSet: {
        class: AgsGui.ExpanderSet;
        props: AgsExpanderSetProps;
        signals: AgsGui.ExpanderSet.SignalSignatures;
        constructOnly: AgsExpanderSetConstructOnly;
        slotCandidates: {};
    };
    AgsFileDialog: {
        class: AgsGui.FileDialog;
        props: AgsFileDialogProps;
        signals: AgsGui.FileDialog.SignalSignatures;
        constructOnly: AgsFileDialogConstructOnly;
        slotCandidates: {};
    };
    AgsFileEntry: {
        class: AgsGui.FileEntry;
        props: AgsFileEntryProps;
        signals: AgsGui.FileEntry.SignalSignatures;
        constructOnly: AgsFileEntryConstructOnly;
        slotCandidates: {};
    };
    AgsFileWidget: {
        class: AgsGui.FileWidget;
        props: AgsFileWidgetProps;
        signals: AgsGui.FileWidget.SignalSignatures;
        constructOnly: AgsFileWidgetConstructOnly;
        slotCandidates: {};
    };
    AgsIconLink: {
        class: AgsGui.IconLink;
        props: AgsIconLinkProps;
        signals: AgsGui.IconLink.SignalSignatures;
        constructOnly: AgsIconLinkConstructOnly;
        slotCandidates: {};
    };
    AgsIndicator: {
        class: AgsGui.Indicator;
        props: AgsIndicatorProps;
        signals: AgsGui.Indicator.SignalSignatures;
        constructOnly: AgsIndicatorConstructOnly;
        slotCandidates: {};
    };
    AgsInputDialog: {
        class: AgsGui.InputDialog;
        props: AgsInputDialogProps;
        signals: AgsGui.InputDialog.SignalSignatures;
        constructOnly: AgsInputDialogConstructOnly;
        slotCandidates: {};
    };
    AgsLed: {
        class: AgsGui.Led;
        props: AgsLedProps;
        signals: AgsGui.Led.SignalSignatures;
        constructOnly: AgsLedConstructOnly;
        slotCandidates: {};
    };
    AgsLedArray: {
        class: AgsGui.LedArray;
        props: AgsLedArrayProps;
        signals: AgsGui.LedArray.SignalSignatures;
        constructOnly: AgsLedArrayConstructOnly;
        slotCandidates: {};
    };
    AgsLevel: {
        class: AgsGui.Level;
        props: AgsLevelProps;
        signals: AgsGui.Level.SignalSignatures;
        constructOnly: AgsLevelConstructOnly;
        slotCandidates: {};
    };
    AgsLevelBox: {
        class: AgsGui.LevelBox;
        props: AgsLevelBoxProps;
        signals: AgsGui.LevelBox.SignalSignatures;
        constructOnly: AgsLevelBoxConstructOnly;
        slotCandidates: {
        'level': 'add_level';
        };
    };
    AgsNotebook: {
        class: AgsGui.Notebook;
        props: AgsNotebookProps;
        signals: AgsGui.Notebook.SignalSignatures;
        constructOnly: AgsNotebookConstructOnly;
        slotCandidates: {
        'tab': 'add_tab';
        };
    };
    AgsPiano: {
        class: AgsGui.Piano;
        props: AgsPianoProps;
        signals: AgsGui.Piano.SignalSignatures;
        constructOnly: AgsPianoConstructOnly;
        slotCandidates: {};
    };
    AgsRuler: {
        class: AgsGui.Ruler;
        props: AgsRulerProps;
        signals: AgsGui.Ruler.SignalSignatures;
        constructOnly: AgsRulerConstructOnly;
        slotCandidates: {};
    };
    AgsScale: {
        class: AgsGui.Scale;
        props: AgsScaleProps;
        signals: AgsGui.Scale.SignalSignatures;
        constructOnly: AgsScaleConstructOnly;
        slotCandidates: {};
    };
    AgsScaleBox: {
        class: AgsGui.ScaleBox;
        props: AgsScaleBoxProps;
        signals: AgsGui.ScaleBox.SignalSignatures;
        constructOnly: AgsScaleBoxConstructOnly;
        slotCandidates: {
        'scale': 'add_scale';
        };
    };
    AgsScrolledLevelBox: {
        class: AgsGui.ScrolledLevelBox;
        props: AgsScrolledLevelBoxProps;
        signals: AgsGui.ScrolledLevelBox.SignalSignatures;
        constructOnly: AgsScrolledLevelBoxConstructOnly;
        slotCandidates: {};
    };
    AgsScrolledPiano: {
        class: AgsGui.ScrolledPiano;
        props: AgsScrolledPianoProps;
        signals: AgsGui.ScrolledPiano.SignalSignatures;
        constructOnly: AgsScrolledPianoConstructOnly;
        slotCandidates: {};
    };
    AgsScrolledScaleBox: {
        class: AgsGui.ScrolledScaleBox;
        props: AgsScrolledScaleBoxProps;
        signals: AgsGui.ScrolledScaleBox.SignalSignatures;
        constructOnly: AgsScrolledScaleBoxConstructOnly;
        slotCandidates: {};
    };
    AgsTempo: {
        class: AgsGui.Tempo;
        props: AgsTempoProps;
        signals: AgsGui.Tempo.SignalSignatures;
        constructOnly: AgsTempoConstructOnly;
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
export const SURFACE_PROVENANCE: string;

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> its own signals. */
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
 * `Type.property` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a member the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 */
export const SINCE: Readonly<Record<string, string>>;
